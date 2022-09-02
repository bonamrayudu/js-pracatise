const square=function(x){
    return x*x;

}
console.log(square(6));

//higeer order functions in map
const birthYear = [1999, 1997, 2002, 1995, 1998];
const ages = birthYear.map(year => 2022 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages); 

//higeer order functions in filter
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];
  const fullAge = persons.filter(person => person.age >= 18);
  console.log(fullAge);