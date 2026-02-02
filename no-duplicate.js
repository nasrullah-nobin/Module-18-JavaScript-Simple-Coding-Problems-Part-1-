function noDuplicate(numbers) {
  let newArray = [];

  for (const number of numbers) {
    if (newArray.includes(number) === false) {
      newArray.push(number);
    }
  }
  return newArray;
}

// const array = [21, 32, 5, 32, 44, 33, 22, 12, 32, 44, 21];
const array = ['rohim', 'nahin', 'kahin', 'rohim', 'nahin', 'badol', 'kahin', 'rupa', 'sorna', 'rupa', 'rupa'];

const duplicate = noDuplicate(array);
console.log(duplicate);
