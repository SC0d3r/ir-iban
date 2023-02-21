const splitEvery = require("../utils/splitEvery")

function formatIban(iban = "") {
  return splitEvery(iban.trim(), 4).join(" ")
}

module.exports = formatIban