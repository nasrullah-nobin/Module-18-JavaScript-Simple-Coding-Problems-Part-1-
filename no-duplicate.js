function duplicate(numbers) {
  const original = [];
  for (const number of numbers) {
    if (!original.includes(number)) {
      original.push(number);
    }
  }
  return original;
}
const array = duplicate([1,32,3,2,1,2,32]);
const name = duplicate(['sajid','kajid','sajid','kajid','rohim','nayem','rohim']);
console.log(array,name);
