// function oddAverage(odds) {
//   let sum = 0;
//   let count = 0;
//   for (const odd of odds) {
//     if (odd % 2 === 1) {
//       sum = sum + odd;
//       count++;
//     }
//   }
//   return count === 0 ? 0 : (sum / count).toFixed(2);
// }

// const array = [2, 4, 53, 254, 789, 90, 32];
// const odd = oddAverage(array);
// console.log("Odd average is:", odd);

function evenAverage(numbers) {
  let evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  let sum = 0;
  for (const even of evens) {
    sum = sum + even;
  }
  const length = evens.length;
  if (length === 0) return 0;
  return sum / length;
}

const even = evenAverage([1, 43, 56, 3, 57, 97, 56, 32, 13, 67, 89, 4]);
console.log(even);

function evenAverage1(numbers) {
  let sum = 0;
  let count = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
      count++;
    }
  }
  if (count === 0) {
    return 0;
  }
  return (sum / count).toFixed(0);
}

const even1 = evenAverage1([1, 43, 56, 3, 57, 97, 56, 32, 13, 67, 89, 4]);
console.log(even1);
