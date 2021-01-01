//Source: https://gist.github.com/madx/53853c3d7b527744917f
const path = require("path");
const fs = require("fs")

module.exports = {
  entry: "./src/server.js",

  target: "node",
  externals: fs.readdirSync("node_modules")
  .reduce(function(acc, mod) {
    if (mod === ".bin") {
      return acc
    }

    acc[mod] = "commonjs " + mod
    return acc
  }, {}),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },

};
