const { wordsGenerator } = require("./dist/cjs");

const validWords = wordsGenerator("ckufoc", "en");
console.log(validWords);
