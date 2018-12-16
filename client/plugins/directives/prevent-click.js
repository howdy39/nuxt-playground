function preventDefaultFunc(event) {
  event.preventDefault()
}

export default {
  bind(el, { value = true }) {
    if (value) {
      el.addEventListener('click', preventDefaultFunc)
    }
  },
  update(el, { value, oldValue }) {
    if (value !== oldValue) {
      if (value) {
        el.addEventListener('click', preventDefaultFunc)
      } else {
        el.removeEventListener('click', preventDefaultFunc)
      }
    }
  }
}
