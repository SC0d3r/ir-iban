/**
 * breaks iban into countryCode, CD, CC, bbanType, BBAN
 * if iban was not valid it returns an empty object
 * @param {string} iban 
 */
function tokenizeIban(iban = "") {
  const regex = /^([A-Z]{2})?(\d{2})(\d{3})(\d{1})(\d{18})$/i
  try {
    iban = iban.trim()

    const [_, countryCode, CD, CC, bbanType, BBAN] = iban.match(regex)
    return {
      countryCode,
      CD,
      CC,
      bbanType,
      BBAN
    }
  } catch (e) {
    return {}
  }
}

module.exports = tokenizeIban