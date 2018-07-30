const fs = window.require('fs')
const path = window.require('path')

const getFileDetails = filePath =>
  new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stat) => {
      if (err) {
        return reject(err)
      }

      const result = {
        name: path.basename(filePath),
        path: filePath
      }

      if (stat && stat.isDirectory()) {
        result.children = []
        result.loaded = false
      } else {
        result.ext = path.extname(filePath)
      }

      return resolve(result)
    })
  })

const readDirectory = dir =>
  new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(err)
      }

      Promise.all(
        files.map(file => {
          const filePath = path.resolve(dir, file)
          return getFileDetails(filePath)
        })
      )
        .then(res => {
          const obj = {}
          res.forEach(file => (obj[file.path] = file))
          resolve(obj)
        })
        .catch(err => reject(err))
    })
  })

export { getFileDetails, readDirectory }
