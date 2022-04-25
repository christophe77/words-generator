import checkWord from "check-word";
import { Language } from "../types/language";

function makeTree(letters: any) {
  const branches: string[][] = [];
  if (letters.length === 1) {
    return [letters];
  }
  for (const k in letters) {
    const leaf = letters[k];
    makeTree(letters.join("").replace(leaf, "").split(""))
      .concat("")
      .forEach((subtree: string[]) => {
        branches.push([leaf].concat(subtree));
      });
  }
  return branches;
}

export function makeWordTree(letters: string) {
  const wordsTree = makeTree(letters.split("")).map((word) => {
    return word.join("");
  });
  return wordsTree;
}

function quiSort(il: string[]) {
  return il.sort();
}

function unique(wordArray: string[]) {
  return quiSort(wordArray).filter((word, position, array) => {
    return !position || word != array[position - 1];
  });
}

export function checkWords(
  wordsToCheck: string[],
  language: Language
): string[] {
  const validWordList: string[] = [];
  const words = checkWord(language);

  wordsToCheck.forEach((word) => {
    if (words.check(word)) {
      validWordList.push(word);
    }
  });
  return unique(validWordList);
}
