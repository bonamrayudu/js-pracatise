//class constructor 

class A{
    constructor(name,age){
        this.name=name;
        this.age=age;

    } 
   show(){
    console.log(`${this.name} age  is ${this.age} years.`)
   }
}
const b=new A("rayudu",22)
b.show()




