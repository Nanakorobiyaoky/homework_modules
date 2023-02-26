'use strict';

const {capitalize, formatString, CountWords, CountUniqueWords} = require("./module.js")


let string1 = 'Вот пример строки,в которой      используются знаки        препинания.После      знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'

let string2 = 'Текст, в котором слово текст несколько раз встречается и слово тоже'

let string3 = 'Сделаем отступление и подумаем, что происходит. arr может быть массивом чего угодно, верно? Он может содержать числа, строки, объекты или что-то ещё. У нас есть набор каких-то элементов. Чтобы отсортировать его, нам нужна упорядочивающая функция, которая знает, как сравнивать его элементы. По умолчанию элементы сортируются как строки.'

console.log(capitalize('динозаВР'));

console.log(formatString(string1));

console.log(CountWords(string1));

console.log(CountUniqueWords(string2));

console.log(CountUniqueWords(string3));


