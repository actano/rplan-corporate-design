const hexToRGBArray = hex => hex.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16))
const rgbaString = (hex, alpha) => `rgb(${hexToRGBArray(hex).join(',')}, ${alpha})`

export {
  rgbaString,
}
