// task 01
function temperature(Celsius) {
  return Celsius * 1.8 + 32;
}
const Celsius = temperature(10);
// console.log(Celsius);

// task 02
function count5(numbers) {
  let count = 0;
  for (const number of numbers) {
    if (number === 5) {
      count++;
    }
  }
  return count;
}
const array = count5([5, 6, 11, 12, 98, 5]);
// console.log(array);

function count25(numbers) {
  let count = 0;
  for (const number of numbers) {
    if (number === 25) {
      count++;
    }
  }
  return count;
}

const array2 = count25([5, 6, 11, 12, 98, 5]);
// console.log(array2);

// task 03
function vowel(string) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (const str of string) {
    if (vowels.includes(str)) {
      count++;
    }
  }
  return count;
}

const str = vowel("i love Allah");
// console.log(str);

function countVowels(text) {
  const vowel = "aeiou";
  let count = 0;
  for (const ch of text.toLowerCase()) {
    if (vowel.includes(ch)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("i love allah"));

function largeWordCount(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const sentence = largeWordCount(
  "I am learning Programming to become a programmer",
);
console.log("The biggest word:", sentence);
                                                                
console.log(Math.floor(Math.random() * 11) + 10);

console.log(Math.floor(Math.random() * 11) +10);