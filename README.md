# Words generator

## Generator a valid word list from a series of letter

### How to

    yarn add words-generator
    // or
    npm install words-generator

then in your JS or TS file :

    import { wordsGenerator } from 'words-generator';
    // or
    const { wordsGenerator } = require('words-generator');
    // type Language = "en" | "fr" | "de" | "es";
    const validWords = wordsGenerator("ckufoc", "en");
    console.log(validWords);

It will return :

    [
        'cock', 'ko',
        'ufo',  'of',
        'fuck', 'fou',
        'ouk',  'ou'
    ]
