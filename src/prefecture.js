class JapanPrefecture {
    constructor() {
        this.pref = require('./prefecture.json');
    }

    getIndex(name) {
        for (var i = 0; i < this.pref.length; i++) {
            var reg = new RegExp(`${this.pref[i].iso}|${this.pref[i].kanji}|${this.pref[i].kanji_short}|${this.pref[i].hiragana}|${this.pref[i].hiragana_short}|${this.pref[i].romaji}|${this.pref[i].romaji_short}`);

            if (reg.test(name))
                return i;
        }

        return -1;
    }

    convert(name, key) {
        let index = this.getIndex(name);

        if (index != -1)
            return this.pref[index][key];
        else
            return '';
    }

    toIso(name) {
        return this.convert(name, 'iso');
    }

    toKanji(name) {
        return this.convert(name, 'kanji');
    }

    toKanjiShort(name) {
        return this.convert(name, 'kanji_short');
    }

    toHiragana(name) {
        return this.convert(name, 'hiragana');
    }

    toHiraganaShort(name) {
        return this.convert(name, 'hiragana_short');
    }

    toRomaji(name) {
        return this.convert(name, 'romaji');
    }

    toRomajiShort(name) {
        return this.convert(name, 'romaji_short');
    }
}

module.exports = JapanPrefecture;