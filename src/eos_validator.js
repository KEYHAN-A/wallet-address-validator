function isValidEOSAddress (address, currency, networkType) {
  var regex = /^[a-z0-5]+$/g // Must be numbers and lowercase letters only
  var regex2 = /^[a-z]\w+$/g // Must start with a letter
  var regex3 = /.*[^\.]\w+$/g // Must not end with a Dot

  if (address.search(regex) !== -1 && address.length === 12 && address.search(regex2) !== -1 && address.search(regex3) !== -1) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidEOSAddress(address, currency, networkType)
  }
}
