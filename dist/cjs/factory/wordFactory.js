"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWords = exports.makeWordTree = void 0;
const check_word_1 = __importDefault(require("check-word"));
function makeTree(letters) {
    const branches = [];
    if (letters.length === 1) {
        return [letters];
    }
    for (const k in letters) {
        const leaf = letters[k];
        makeTree(letters.join("").replace(leaf, "").split(""))
            .concat("")
            .forEach((subtree) => {
            branches.push([leaf].concat(subtree));
        });
    }
    return branches;
}
function makeWordTree(letters) {
    const wordsTree = makeTree(letters.split("")).map((word) => {
        return word.join("");
    });
    return wordsTree;
}
exports.makeWordTree = makeWordTree;
function quiSort(il) {
    return il.sort();
}
function unique(wordArray) {
    return quiSort(wordArray).filter((word, position, array) => {
        return !position || word != array[position - 1];
    });
}
function checkWords(wordsToCheck, language) {
    const validWordList = [];
    const words = (0, check_word_1.default)(language);
    wordsToCheck.forEach((word) => {
        if (words.check(word)) {
            validWordList.push(word);
        }
    });
    return unique(validWordList);
}
exports.checkWords = checkWords;
