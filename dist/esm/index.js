import { makeWordTree, checkWords } from "./factory/wordFactory";
export function wordsGenerator(letters, language) {
    const wordsToCheck = makeWordTree(letters);
    return checkWords(wordsToCheck, language);
}
