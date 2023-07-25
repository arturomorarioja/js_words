'use strict';

/**
 * @author  Arturo Mora-Rioja (amri@kea.dk)
 * @version 1.0.0 February 2023
 */

/**
 * Returns an object with each letter in the word 
 * it receives and its number of occurrences in the word
 */
const letterOccurrences = (word) => {
    let letters = {};
    let key;

    for (let index = 0; index < word.length; index++) {
        key = word[index];
        if (letters[key] === undefined) {
            letters[key] = 0;
        }
        letters[key] += 1;
    }
    return letters;
};

/** 
 * Returns true if both words received as parameters are anagrams, 
 * false otherwise.
 *  - Case insensitive
 *  - Non-alphabetic characters are ignored
 */
const isAnagram = (word, potentialAnagram) => {
    word = word.toUpperCase().split('');
    potentialAnagram = potentialAnagram.toUpperCase().split('');

    word = removeNonAlphabeticCharactersFromCharacterArray(word);
    potentialAnagram = removeNonAlphabeticCharactersFromCharacterArray(potentialAnagram);

    if (word.length !== potentialAnagram.length) {
        return false;
    }

    // Each letter found in the potentialAnagram is removed from it
    let pos;
    word.forEach((letter) => {
        if ((pos = potentialAnagram.indexOf(letter)) > -1) {
            potentialAnagram.splice(pos, 1);
        }
    });

    // If the potentialAnagram array is empty, all letters have been found,
    // thus the words are anagrams
    return (potentialAnagram.length === 0);
};

const removeNonAlphabeticCharactersFromCharacterArray = (word) => {
    let cleanWord = [];
    word.forEach((letter) => {
        // Checking whether a character is alphabetical:
        // Only letters have different uppercase and lowercase values.
        // Got it from https://www.coderrocketfuel.com/article/how-to-check-if-a-character-is-a-letter-using-javascript
        if (letter.toLowerCase() !== letter.toUpperCase()) {
            cleanWord.push(letter);
        }
    });
    return cleanWord;
};

exports.isAnagram = isAnagram;
exports.letterOccurrences = letterOccurrences;