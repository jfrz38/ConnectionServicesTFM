module.exports.getExampleValue = (req, res) => {
  return res.status(200).send("Everything ok")
}

module.exports.getExample = (req, res) => {
  return res.status(200).send("Everything ok; route /")
}
