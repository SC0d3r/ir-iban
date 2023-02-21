const tokenizeIban = require("./tokenizeIban")

/**
 * turns the shomareh hesab into shomareh shaba
 * @param {string} iban 
 * @returns {number} bban or undefined if the iban is not valid
 */
function turnIbanIntoBban(iban = "") {
  const { BBAN } = tokenizeIban(iban)
  return BBAN ? +BBAN : undefined
}

module.exports = turnIbanIntoBban