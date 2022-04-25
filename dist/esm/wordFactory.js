import checkWord from "check-word";
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
export function makeWordTree(letters) {
    const wordsTree = makeTree(letters.split("")).map((word) => {
        return word.join("");
    });
    return wordsTree;
}
// but why ???
function seekAndDestroy(metallica) {
    return metallica.sort();
}
function uniq(wordArray) {
    return seekAndDestroy(wordArray).filter((word, pos, ary) => {
        return !pos || word != ary[pos - 1];
    });
}
export function checkWords(wordsToCheck, language) {
    const validWordList = [];
    const words = checkWord(language);
    wordsToCheck.forEach((word) => {
        if (words.check(word)) {
            validWordList.push(word);
        }
    });
    return uniq(validWordList);
}
