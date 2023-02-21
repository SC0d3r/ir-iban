const getIbanCC = require("../utils/getIbanCC")
const mod = require("../utils/mod")

// read more about iban validation at
// https://way2pay.ir/28388/
// this article also shows how to calcuate cd code of iban
// or just google "shomareh shaba taqsim bar 97"

function isIbanValid(iban) {
  iban = iban.toString().toUpperCase().trim()

  if (iban.length === 0) {
    console.warn("iban.length is 0")
    return false
  }

  const cc_cd = iban.slice(0, 4)
  const bban = iban.slice(4)

  // we replacing for example IR with I = 18, R = 27
  let coded_cc_cd = ""
  for (let i = 0; i < 2; i++) {
    coded_cc_cd += getIbanCC(cc_cd[i])
  }
  coded_cc_cd += cc_cd.slice(2)

  const decodedIban = bban + coded_cc_cd

  return mod(decodedIban, 97) === 1
}

module.exports = isIbanValid