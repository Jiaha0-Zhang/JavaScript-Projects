function emplopees_Dictionary()  //dectionary
{
    var Ted = {              //variable Ted and its' properties
        Gender: 'M',
        Age: 32,
        Position: "Typist",
        Address: "New York"
    }
    var Janice = {          ////variable Janice and its' properties
        Gender: 'F',
        Age: 25,
        Position: "Accountant",
        Address: "Seattle"
    }
    delete Ted.Age;  //remove "Age" from variable "Ted"

    document.getElementById("ted").innerHTML = Ted.Position;
    document.getElementById("janice").innerHTML = Janice.Address;  
}