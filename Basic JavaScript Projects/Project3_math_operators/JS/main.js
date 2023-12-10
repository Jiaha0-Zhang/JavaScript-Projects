function additionFuntion()
{
    var num1 = parseFloat(document.getElementById("num1").value); //define and assign varible "num1"
	var num2 = parseFloat(document.getElementById("num2").value); //define and assign varible "num2"
	var result = num1 + num2;  //define and assign "result" with the result by adding num1 and num2
	document.getElementById("Math").innerHTML = result; //utilize "result" to assign id"Math" and modify html display
}

function substractFunction()
{
    var substraction = 8 - 5; //define and assign "substraction" with 5-2
    document.getElementById("Math2").innerHTML = "8-5=" + substraction;
}

function multiplicationFuntion()
{
    var num1 = parseFloat(document.getElementById("num3").value); //define and assign  varible"num1"
	var num2 = parseFloat(document.getElementById("num4").value); //define and assign  varible"num2"
	var result = num1 * num2;  //define and assign "result" with the result by multiplying num1 and num2
	document.getElementById("Math3").innerHTML = result; //utilize "result" to assign id"Math3" and modify html display
}

function divisionFunction()
{
    var division = 20 / 4; //define and assign "division" with 20/4
    document.getElementById("Math4").innerHTML = "20 / 4=" + division;
}

function modulusOperation()
{
    var num1 = parseFloat(document.getElementById("num5").value); //define and assign varible "num1"
	var num2 = parseFloat(document.getElementById("num6").value); //define and assign varible "num2"
	var result = num1 % num2;  //define and assign "result" with the result by remaindering num1 and num2
	document.getElementById("Math5").innerHTML = result; //utilize "result" to assign id"Math5" and modify html display
}

function multipleOperation()
{
    var Result = (2+3) * 10 / 2 - 5;
    document.getElementById("Math6").innerHTML = " 2 plus 3, multiplied by 10, divided by 2 and then substracted by 5 equals " + Result;
}

function unaryOperation()
{
    var num = parseFloat(document.getElementById("num7").value); //define and assign varible "num"
	var result = - num;  //define and assign "result" with the result by negating num
	document.getElementById("Math7").innerHTML = result; //utilize "result" to assign id"Math7" and modify html display
}

function incrementAndDecrement()
{
    var num1 = 10;
    var num2 = 10;
    num1 ++;  // num1 + 1
    num2 --;  // num2 - 1
    document.getElementById("Math8").innerHTML = "10 ++ equals " + num1;
    document.getElementById("Math9").innerHTML = "10 -- equals " + num2;
}

function random()
{
    var Random = (Math.random()*100); //define and assign varible "Random"
    document.getElementById("Math10").innerHTML = Random; //modify html display with a random number
}