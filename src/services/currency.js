export function showCurrentDate(timestamp) {
  return new Date(timestamp * 1000).toUTCString().split('GMT')
}

// Convert a number to a string with commas
export function getNumberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}