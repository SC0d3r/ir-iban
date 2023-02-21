const { A1A3BankCodes } = require("./enums");

function isBankCodeValid(bankCode = "") {
  bankCode = bankCode.trim()
  bankCode += ""
  const codes = Object.keys(A1A3BankCodes)
  return codes.includes(bankCode)
}

module.exports = isBankCodeValid