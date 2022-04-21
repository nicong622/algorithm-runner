// https://leetcode-cn.com/problems/goat-latin/

/**
 * @param {string} sentence
 * @return {string}
 */
let toGoatLatin = function (sentence) {
  const length = sentence.length;
  let result = '';
  let currentWord = '';
  let firstLetter = '';
  let wordCount = 1;
  let suffix = 'ma';

  for (let i = 0; i <= length; i++) {
    let letter = sentence[i] || '';

    if (letter === ' ' || letter === '') {
      result += currentWord + suffix + 'a'.repeat(wordCount) + letter;

      suffix = 'ma';
      wordCount++;
      firstLetter = '';
      currentWord = '';
    } else {
      if (!firstLetter) {
        firstLetter = letter;

        if (!/[aeiou]/i.test(firstLetter)) {
          letter = '';
          suffix = `${firstLetter}ma`;
        }
      }

      currentWord += letter;
    }
  }

  return result;
};

const sentence = 'I speak Goat Latin';
console.log(toGoatLatin(sentence));
