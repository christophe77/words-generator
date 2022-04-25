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
function quiSort(il) {
    return il.sort();
}
function unique(wordArray) {
    return quiSort(wordArray).filter((word, position, array) => {
        return !position || word != array[position - 1];
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
    return unique(validWordList);
}
