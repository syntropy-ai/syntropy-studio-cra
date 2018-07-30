/**
 * Utility for watching changes to a folder, and subscribing to those changes
 */

const chokidar = window.require('chokidar')

chokidar
  .watch('e:/memebig/projects/syntropy-studio', {
    ignoreInitial: true
  })
  .on('all', (event, path) => {
    console.log(event, path)
  })
