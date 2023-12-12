document.write(typeof "Hello"); //type of 
document.write(typeof 7);
document.write("5" + 2);

document.write(-9E999);    //infinity numbers
document.write(9E999);

function nan_Function()   //NAN 
{
    document.getElementById("NAN_Test1").innerHTML = isNaN ("is NAN true?"); 
    document.getElementById("NAN_Test2").innerHTML = isNaN ("100");
}

document.write(10>9);  //greater or less
document.write(9>10);

console.log(10+5);

document.write(1 == 10);   // ==symbol
document.write(1 == 1);


document.write(10 === 10); //=== symbol
document.write(10 === "Sam");
document.write(10 === "10");
document.write(10 === 11);

document.write(10>9 && 10>8);  // && AND ||
document.write(10>9 && 10<8);
document.write(10>9 || 10>8);
document.write(10<9 || 10<8);

function not_Function()  //NOT
{
    document.getElementById("NOT1").innerHTML = !(10>11);
    document.getElementById("NOT2").innerHTML = !(10<11);
}