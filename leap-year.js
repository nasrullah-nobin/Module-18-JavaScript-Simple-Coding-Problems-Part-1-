// short and simple method
function leapYear(year) {
  return year % 4 === 0 ? true : false;
}
const lip = leapYear(2043);
console.log(lip);

// long method
function leapYear1(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const lip1 = leapYear1(2043);
console.log(lip1);

// short method
function leapYear2(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const lip2 = leapYear2(2000);
console.log(lip2);
