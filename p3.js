const letters = ["a","b","c"];
console.log(letters instanceof Array);

class Car {
    constructor(name,year){
        this.name=name;
        this.year=year;



    }

     
}
const mycar=new Car("bmw",2022);
console.log(mycar)

console.log(mycar instanceof Car)
const obj={name:"Sri",age:22};
const my=JSON.stringify(obj);
console.log(my);