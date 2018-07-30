import React from 'react'

// style cache
const styles = {}

const styleFunc = (name, props) => {
  const item = styles[name] || {}
  const result = {}
  Object.keys(item).forEach(key => {
    Object.defineProperty(result, key, {
      get: function() {
        const style = item[key]
        if (typeof style === 'function') {
          return style(props)
        } else {
          return style
        }
      }
    })
  })
  return result
}

const styler = (TheComponent, name) => ({
  stylerName = name,
  ...rest
}) => (
  <TheComponent styles={styleFunc(name, rest)} {...rest} />
)

const setStyles = (name, styleObject) => {
  styles[name] = {
    ...styles[name],
    ...styleObject
  }
}

export { styler, setStyles }
