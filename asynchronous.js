
//asynchronouse functuion 
function printMee() {
   console.log('print me');
  }
  
  setTimeout(printMee, 5000); 
 //example for rectifie the asynchronous function 

 function mydisp(some){
    console.log(some);

}
function mycal(num1,num2,mycallback)
{
    let sum=num1+num2;
    mydisp(sum);


} 
mycal(6,10,mydisp);