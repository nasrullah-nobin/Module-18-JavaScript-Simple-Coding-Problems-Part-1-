function inchToFit(inch){
  const feet = (inch / 12).toFixed(6);
  return feet
}
const inc = inchToFit(5);
console.log(inc)

// Short method
function inchToFit(inch) {
  return (inch / 12).toFixed(6);
}
const inch = inchToFit(75);
console.log(inch);
console.log('------------------------------------')
const nobinHeight = inchToFit(65);
console.log(nobinHeight);

function inchToFit1(inch) {
  const feet = inch / 12;
  const feetNumber = parseInt(feet);
  const feetRemaining = inch % 12;
  const result = feetNumber + " ft " + feetRemaining + " inc ";
  return result;
}

console.log(inchToFit1(75));

function mileToKiloMeter(mile) {
  return (mile * 1.609).toFixed(2);
}
const mile = mileToKiloMeter(10);
console.log(mile);

function kiloMeterToMile(kilo) {
  return (kilo / 1.609).toFixed(2);
}
const kilo = kiloMeterToMile(10);
console.log(kilo);