const testFunc = () => {
  console.log(this.test)
}

const createBlock = meta => ({
  test: 'value',
  func: testFunc
})

export { createBlock }
