const { turnBbanIntoIban, BANK_CODES, getBankNameFromIban, isBankCodeValid, formatIban } = require("..")
const isIbanValid = require("../src/isIbanValid")
const tokenizeIban = require("../src/tokenizeIban")
const turnIbanIntoBban = require("../src/turnIbanIntoBban")

function test() {
  const iban = "IR870570028180010653892101"
  console.log("function isIbanValid:", "[input] iban", iban, "[result]", isIbanValid(iban))

  const bban = "4695069893"
  const calculatedIban = turnBbanIntoIban(bban, BANK_CODES.TEJARAT)
  console.log("funciton turnBbanIntoIban:", "[input] bban", bban, "[input] bankCode BANK_CODES.TEJARAT", "[result] iban", calculatedIban)

  const calculatedBban = turnIbanIntoBban(iban)
  console.log("function turnIbanIntoBban", "[input] iban", iban, "[result]", calculatedBban)


  const tokenizedIban = tokenizeIban(iban)
  console.log("function tokenizedIban:", "[input] iban", iban, "[result]", tokenizedIban)

  console.log("function isIBanValid:", "input [calculateIban]", calculatedIban, "[result]", isIbanValid(calculatedIban))

  console.log("function getBankNameFromIban:", "[input] calculatedIban", calculatedIban, "[result]", getBankNameFromIban(calculatedIban))

  console.log("function isBankCodeValid", "[input] BANK_CODES.TEJARAT", "[result]", isBankCodeValid(BANK_CODES.TEJARAT))

  console.log("function formatIban:", formatIban(iban))
}

test()