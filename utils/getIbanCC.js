function getIbanCC(letter = "") {
  return letter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 10
}

module.exports = getIbanCC