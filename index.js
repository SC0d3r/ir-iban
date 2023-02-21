const { BANK_CODES } = require("./src/enums")
const formatIban = require("./src/formatIban")
const getBankNameFromIban = require("./src/getBankNameFromIban")
const isBankCodeValid = require("./src/isBankCodeValid")
const isIbanValid = require("./src/isIbanValid")
const turnBbanIntoIban = require("./src/turnBbanIntoIban")

module.exports = {
  isIbanValid,
  turnBbanIntoIban,
  isBankCodeValid,
  getBankNameFromIban,
  BANK_CODES,
  formatIban,
}