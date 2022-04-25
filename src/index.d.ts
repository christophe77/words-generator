import { Language } from "./types/language";
export interface WordsGenerator {
    wordsGenerator(letters: string, language: Language):string[]
}