const createBlock = (key, meta) => ({
  key,
  meta,
  state: {},

  func() {
    console.log(this.test)
  }
})

export { createBlock }
