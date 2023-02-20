const { A1A3BankCodes } = require("./enums");

function getBankNameFromIban(iban = "") {
  // remove IR from it if exists
  iban = iban.startsWith("IR") ? iban.slice(2) : iban

  const ibanRegex = /^\d{2}(\d{3})\d{19}$/;
  const bankCode = iban.match(ibanRegex)?.[1]

  return A1A3BankCodes[bankCode] ?? "کارت بانکی"
}

module.exports = getBankNameFromIban
