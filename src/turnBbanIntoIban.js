const getIbanCC = require("../utils/getIbanCC")
const mod = require("../utils/mod")

// Read more at 
// 1. https://way2pay.ir/28388/
// 2. https://setare.com/fa/news/25513/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AA%D8%A8%D8%AF%DB%8C%D9%84-%D8%B4%D9%85%D8%A7%D8%B1%D9%87-%D8%AD%D8%B3%D8%A7%D8%A8-%D8%A8%D9%87-%D8%B4%D8%A8%D8%A7-%D9%84%DB%8C%D9%86%DA%A9-%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA-%D8%B4%D8%A8%D8%A7%DB%8C-%D8%AA%D9%85%D8%A7%D9%85%DB%8C-%D8%A8%D8%A7%D9%86%DA%A9-%D9%87%D8%A7/

// Bban = shomareh hesab
// iban = shomareh shaba
/**
 * turns bban(shomareh hesab) to iban
 * @param {string} bban shomareh hesab
 * @param {string} bankCode bank code use BANK_CODES enum 
 * @param {string}} bbanType "0" means hesab sepordeh, "1" means hesab tashilat
 * @returns {boolean}
 */
function turnBbanIntoIban(bban, bankCode, bbanType = "0", countryCode = "IR") {
  // bankCode A1-A3 should be 3 digits
  // calcluate by the A1A3BankCodes in getBankNameFromIban.js file

  if (!bankCode) throw new Error("you forgot to give bankCode to turnBbanIntoIban function")

  bban = bban + ""
  bban = bban.trim()
  if (bban.length < 18) {
    // pad left with zeros
    bban = "0".repeat(18 - bban.length) + bban
  }

  bban = bbanType + bban

  // now we have to calculate the CD

  const CC = countryCode.split("").map(getIbanCC).join("")

  //                                            CD
  const ibanWithoutCD = bankCode + bban + CC + "00"

  const CD = 98 - mod(ibanWithoutCD, 97)

  return countryCode + CD + bankCode + bban
}

module.exports = turnBbanIntoIban