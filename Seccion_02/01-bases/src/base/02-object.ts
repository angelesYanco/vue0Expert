export const person = {
  lastName: 'Stark',
  age: 45,
  address:{
    city: 'New York',
    zip: 51323,
    lat: 14.123,
    lng: -12.123
  }
}

//const person2 = {...person};
const person2 = structuredClone(person);

person2.lastName = 'Parker';
person2.address.city = 'Queens';

console.log(person);
console.log(person2);
