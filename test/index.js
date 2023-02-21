const { turnBbanIntoIban, BANK_CODES, getBankNameFromIban, isBankCodeValid, formatIban } = require("..")
const isIbanValid = require("../src/isIbanValid")

function test() {
  const iban = "IR870570028180010653892101"
  console.log("function isIbanValid:", "[input] iban", iban, "[result]", isIbanValid(iban))

  const bban = "4695069893"
  const calculatedIban = turnBbanIntoIban(bban, BANK_CODES.TEJARAT)
  console.log("funciton turnBbanIntoIban:", "[input] bban", bban, "[input] bankCode BANK_CODES.TEJARAT", "[result] iban", calculatedIban)

  console.log("function isIBanValid:", "input [calculateIban]", calculatedIban, "[result]", isIbanValid(calculatedIban))

  console.log("function getBankNameFromIban:", "[input] calculatedIban", calculatedIban, "[result]", getBankNameFromIban(calculatedIban))

  console.log("function isBankCodeValid", "[input] BANK_CODES.TEJARAT", "[result]", isBankCodeValid(BANK_CODES.TEJARAT))

  console.log("function formatIban:", formatIban(iban))
}

test()