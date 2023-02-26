'use strict';

module.exports = {
    capitalize,
    formatString,
    CountWords,
    CountUniqueWords,

};

function capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1).toLowerCase();
}

function formatString(string) {
    const regex = new RegExp(/([а-яёА-ЯЁa-z]+) *([,.;:!?]{0,3}) */gi);
    string = string.replace(regex, '$1$2 ');
    return(string);
}

function CountWords(string) {
    const regex = new RegExp(/[a-zA-Zа-яА-ЯёЁ-]+/g);
    return string.match(regex).length;
}

function CountUniqueWords(string) {
    const regex = new RegExp(/([а-яёА-ЯЁa-z-]+)\s*([,.;:!?]{0,3})\s*/gi);
    string = string.replace(regex, '$1 ').toLowerCase().trim();
    let words = string.split(' ');

    let wordsCounter = new Map();

    for (let word of words) {
        wordsCounter.has(word) ? wordsCounter.set(word, wordsCounter.get(word) + 1) : wordsCounter.set(word, 1);
    }

    let intermediateArray = Array.from(wordsCounter.entries());

    intermediateArray.sort();
    intermediateArray.sort(function(a, b){
        return b.at(1) - a.at(1);
    });

    let rows = intermediateArray.map(function(elem) {
        return `${elem.at(0)}: ${elem.at(1)};`;
    });

    return rows.join('\n');
}