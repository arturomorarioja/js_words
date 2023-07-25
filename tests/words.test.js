'use strict';
const {letterOccurrences, isAnagram} = require('../words');

const letterOccurrencesData = [
    {'word': '', 'expected': {}},
    {'word': 'a', 'expected': {'a': 1}},
    {'word': 'ab', 'expected': {'a': 1, 'b': 1}},
    {'word': 'abcdefghijklmnopqrstuvwxyz', 'expected': {'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'g': 1, 'h': 1, 'i': 1, 'j': 1, 'k': 1, 'l': 1, 'm': 1, 'n': 1, 'o': 1, 'p': 1, 'q': 1, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 1, 'w': 1, 'x': 1, 'y': 1, 'z': 1}},
    {'word': 'Hello', 'expected': {'H': 1, 'e': 1, 'l': 2, 'o': 1}},
    {'word': 'ZZZ', 'expected': {'Z': 3}},
    {'word': 'aZZZ', 'expected': {'a': 1, 'Z': 3}},
    {'word': 'Hello there', 'expected': {'H': 1, 'e': 3, 'l': 2, 'o': 1, ' ': 1, 't': 1, 'h': 1, 'r': 1}},
];
describe.each(letterOccurrencesData)('letterOccurrences succeeds', (value) => {
    it(`${value.word}`, () => {
        expect(letterOccurrences(value.word)).toEqual(value.expected);
    })
});

const anagramDataSucceeds = [
    {'word': 'elbow', 'potentialAnagram': 'below'},
    {'word': 'vase', 'potentialAnagram': 'save'},
    {'word': '', 'potentialAnagram': ''},
    {'word': 'a', 'potentialAnagram': 'a'},
    {'word': '', 'potentialAnagram': '8'},
    {'word': 'a gentleman', 'potentialAnagram': 'elegant man'},
    {'word': 'William Shakespeare', 'potentialAnagram': 'I\'ll make a wise phrase'},
];
describe.each(anagramDataSucceeds)('isAnagram succeeds', (anagram) => {
    it(`${anagram.word} is an anagram of ${anagram.potentialAnagram}`, () => {
        expect(isAnagram(anagram.word, anagram.potentialAnagram)).toBe(true);
    })
});

const anagramDataFails = [
    {'word': 'elbow', 'potentialAnagram': 'belw'},
    {'word': 'elbow', 'potentialAnagram': 'belowa'},
    {'word': 'a', 'potentialAnagram': ''},
    {'word': '', 'potentialAnagram': 'a'},
    {'word': 'a gentleman', 'potentialAnagram': 'elegant mn'},
    {'word': 'a gentleman', 'potentialAnagram': 'elegant mana'},
];
describe.each(anagramDataFails)('isAnagram fails', (anagram) => {
    it(`${anagram.word} is an anagram of ${anagram.potentialAnagram}`, () => {
        expect(isAnagram(anagram.word, anagram.potentialAnagram)).toBe(false);
    })
});
