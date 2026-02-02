function oddAvg(numbers) {
  let sum = 0;
  let count = 0;
  for (number of numbers) {
    if (number % 2 !== 0) {
      sum = sum + number;
      count++;
    }
  }
  return count === 0 ? 0 : sum / count;
}
const odd1 = oddAvg([1, 32, 45, 65, 43, 6, 44]);
console.log(odd1);

// another method
function oddAvg2(numbers) {
  let sum = 0;
  let count = 0;
  for (number of numbers) {
    number % 2 !== 0 ? ((sum = sum + number), count++) : 0;
  }
  return count === 0 ? 0 : sum / count;
}
const odd2 = oddAvg2([1, 32, 45, 65, 43, 6, 44]);
console.log(odd2);

// even average

function evenAvg(numbers) {
  const array = [];
  let count = 0;
  let sum = 0;
  for (number of numbers) {
    if (number % 2 === 0) {
      array.push(number);
      count++;
    }
  }
  for (const arr of array) {
    sum = sum + arr;
  }
  return (sum / count).toFixed(2);
}

const odd3 = evenAvg([1, 32, 45, 65, 43, 6, 44]);
console.log(odd3);

// smart method
function evenAvg1(numbers) {
  let sum = 0;
  let count = 0;
  for (number of numbers) {
    number % 2 === 0 ? ((sum = sum + number), count++) : 0;
  }
  return count === 0 ? 0 : (sum / count).toFixed(2);
}

const odd4 = evenAvg1([1, 32, 45, 65, 43, 6, 44]);
console.log(odd4);
