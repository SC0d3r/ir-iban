const splitEvery = require("../utils/splitEvery")

function formatIban(iban = "") {
  return splitEvery(iban, 4).join(" ")
}

module.exports = formatIban