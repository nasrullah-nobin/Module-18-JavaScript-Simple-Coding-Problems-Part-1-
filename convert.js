function inchFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchFeet2(inch) {
  const feetfraction = inch / 12;
  const feetNumber = parseInt(feetfraction);
  const inchRemaininig = inch % 12;
  const result = feetNumber + " ft " + inchRemaininig + " inch ";
  return result;
}

const shuvoHeignt = inchFeet(75);
// console.log(shuvoHeignt);
const shuvoHeignt2 = inchFeet2(75);
console.log(shuvoHeignt2)

function mileToKilo(mile){
    const kilo = mile * 1.60934
;
    return kilo;
}

const kilo = mileToKilo(6);
console.log(kilo);


function kiloMettertoMile(kilo){
    const mile = kilo / 0.621371;
    return mile
}
const mile = kiloMettertoMile(1);
console.log(mile);