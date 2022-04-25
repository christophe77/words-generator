import { makeWordTree, checkWords } from "./factory/wordFactory";
import { Language } from "./types/language";

export function wordsGenerator(letters: string, language: Language):string[] {
  const wordsToCheck = makeWordTree(letters);
  return checkWords(wordsToCheck, language);
}
