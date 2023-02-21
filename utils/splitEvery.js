function splitEvery(str, n) {
  const res = []
  const dist = str.length / n

  for (let j = 0; j < dist; j++) {
    let temp = ""
    for (let i = 0; i < n; i++) {
      temp += str[j * n + i] ?? ""
    }
    res.push(temp)
  }

  return res
}

module.exports = splitEvery