"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordsGenerator = void 0;
const wordFactory_1 = require("./factory/wordFactory");
function wordsGenerator(letters, language) {
    const wordsToCheck = (0, wordFactory_1.makeWordTree)(letters);
    return (0, wordFactory_1.checkWords)(wordsToCheck, language);
}
exports.wordsGenerator = wordsGenerator;
