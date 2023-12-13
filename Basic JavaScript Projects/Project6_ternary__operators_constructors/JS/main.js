function Ride_Function()
{
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52)?"You are too short":"You are tall enough";  //TERNARY OPERATORS
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //modify hteml text by id
}

function vote_Function()
{
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 18)?"You are old enough":"You are too young";  //TERNARY OPERATORS
    document.getElementById("Vote").innerHTML = Can_vote+" to vote."; //modify hteml text by id
}



function Vehicle(Make, Model, Year, Color)
{
    this.Vehicle_Make = Make;    //declaration
    this.Vehicle_Model = Model;  
    this.Vehicle_Year = Year;   
    this.Vehicle_Color = Color; 
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");   //create objects and define values outside of function
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");  
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");  

function myFunction()
{
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
function Pets(Species, Age, Color) 
{
    this.Pets_Species = Species;  //declaration
    this.Pets_Age = Age;  
    this.Pets_Color = Color; 
}
var Julian = new Pets("Labrador_dog", 4,"Black");  //create objects and define values outside of function
var Ted = new Pets("Ragdoll_cat", 5, "White");
var Frank = new Pets("guinea_pig", 2,"Cream");
function myFunction2()
{
    document.getElementById("New_and_This").innerHTML ="Frank is playing with his " + Frank.Pets_Age + " years old "+ 
    Frank.Pets_Color + " Color " +Frank.Pets_Species + "On the ground";
}

function nested_Function()
{
    document.getElementById("Nested_Funcion").innerHTML = Result(); 
    function Result()  //Result() nested under nested_Function()
    {
        var X = 10;     //assign variable X
        function newX()   //newX()  nested under Result()
        {
            X += 7;   //operate X to get an new number
        }
        newX();
        return X;
    }
}