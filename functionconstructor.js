function  A(name,age)
  {
        this.name=name;
        this.age=age;

     
   this.display=function show(){
    console.log(`${this.name} age  is ${this.age} years.`)
   }
}
const b=new A("rayudu",22)
b.display()