const PREFECTURE = require('./prefecture.js');

let prefecture = new PREFECTURE();

let iso = prefecture.toIso('Tokyo');
console.log(iso);               // JP-13

let kanji = prefecture.toKanji('Tokyo');
console.log(kanji);             // 東京都

let kanji_short = prefecture.toKanjiShort('Tokyo');
console.log(kanji_short);       // 東京

let hiragana = prefecture.toHiragana('東京都');
console.log(hiragana);          // とうきょうと

let hiragana_short = prefecture.toHiraganaShort('東京都');
console.log(hiragana_short);    // とうきょう

let romaji = prefecture.toRomaji('東京');
console.log(romaji);            // Tokyo-to

let romaji_short = prefecture.toRomajiShort('東京');
console.log(romaji_short);      // Tokyo