function Call_Loop()
{
    var result = "";
    var x = 0;
    while (x <= 5)
    {
        result += "<br>"+ x;  //result is keeping add 1, until it greater than 5, then move to the next code.
        x++;
    }
    document.getElementById("Loop").innerHTML = result;
}

function String_Lenth()
{
    var str = "I am exhausted !";
    document.getElementById("Lenth").innerHTML = str.length;  //16 will be displayed on the page
}

function for_Loop()
{
    var mammals = ["Elephant", "Lion", "Tiger", "Whale", "Wolf", "Leopard", "Giraffe"]; //set a mammals array
    var result = "";
    var i;
    for(i = 0; i < mammals.length; i++)  // traverse mammals array by for loop
    {
        result += mammals[i] + "</br>";
    }
    document.getElementById("forLoop").innerHTML = result;
}

function array_Function()
{
    var cars = [];  //set an empty array
    cars[0] = "Toyota";    //add indexes and their values into array
    cars[1] = "Honda";
    cars[2] = "Ford";
    cars[3] = "Audi";
    cars[4] = "Jeep";
    document.getElementById("Array").innerHTML = "Andy sold his beloved " + cars[2] + " last week."
}

function const_Function()
{
    const fruit = {type: "Apple", color: "Red"};
    fruit.color = "Green";
    fruit.price = "1$/each";
    document.getElementById("Const").innerHTML = "Frank bought a " + fruit.price +" "+fruit.color +" "+fruit.type + " from Safeway."
}

function let_Function()
{
    var i = 10;
    {
        let i = 20; 
    }
    document.getElementById("Let").innerHTML = i;  // 10

    {
        var i = 20;
    }
    document.getElementById("Var").innerHTML = i; // 20
}    

let People = {           //set a people dictionary involves properties and a method
    name:"Bob", 
    age:"42", 
    appearance:"brown coat",
    action: function(){   //method
        return "This " + this.age + " years old person who is wearing a "+ this.appearance + " is " + this.name;  
    }
}
document.getElementById("objects").innerHTML = People.action();

