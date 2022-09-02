function mydisp(some){
    console.log(some);

}
function mycal(num1,num2,mycallback)
{
    let sum=num1+num2;
    mydisp(sum);


} 
mycal(6,10,mydisp);



