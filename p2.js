const person =[{name:"item1",price:200},
{name:"item2",price:300},{name:"item3",price:700},
{name:"item4",price:900},{name:"item5",price:1000}
] 
let a=person.filter((x)=>x.price>500);
console.log(a)

//filter
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//map
const values = [1, 2, 3, 4];
const doubled = values.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]
//reduce 

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 
const numberss = [1, 2, 3, 4];
const evenss = numberss.map(item => item % 2 === 0);
console.log(evenss); //false true false true 