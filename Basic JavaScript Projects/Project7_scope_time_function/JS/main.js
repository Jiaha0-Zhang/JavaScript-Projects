
var a = 10;   // var a is a global variable
function Addition_Func()
{
    var b = 20;   //var b is a local variable
    document.write(a + b);
}
Addition_Func(); // return 30 as result.


function Dont_Be_Late()
{
    if(new Date().getHours() <= 7)  // setup if statement
    {
        document.getElementById("WakeUp").innerHTML = "You won't be late to get up now."; //if current time is earier than 7Am , this statement will be executed 
    }
    if(new Date().getHours() > 7)
    {
        document.getElementById("WakeUp").innerHTML = "You will be late to get up now."; //if current time is later than 7Am , this statement will be executed 
    }
}

function Guess_My_Number() //if statement
{
    if(document.getElementById("num").value == 2) // Set the answer to 2
    {
        document.getElementById("result").innerHTML = "You Win!";  //if input number is 2, this statement will be executed 
    }
    if(document.getElementById("num").value != 2)
    {
        document.getElementById("result").innerHTML = "Please try it again, This number is the same as amout of your eyes. "; // if input number is not 2, this statement will be executed 
    }
}

function Guess_My_Number_Again() //if and else statement
{
    if(document.getElementById("num2").value == 10) // Set the answer to 10
    {
        document.getElementById("result2").innerHTML = "You Win!";  //if input number is 10, this statement will be executed 
    }
    else
    {
        document.getElementById("result2").innerHTML = "Please try it again, This number is the same as amout of your fingers. "; // if input number is not 2, this statement will be executed 
    }
}

function Time_function()
{
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0)
    {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)
    {
        Reply = "It is afternoon.";
    }
    else
    {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}