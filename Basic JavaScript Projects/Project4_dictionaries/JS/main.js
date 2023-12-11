function emplopees_Dictionary()
{
    var Ted = {
        Gender: 'M',
        Age: 32,
        Position: "Typist",
        Address: "New York"
    }
    var Janice = {
        Gender: 'F',
        Age: 25,
        Position: "Accountant",
        Address: "Seattle"
    }
    document.getElementById("Dictionary").innerHTML = Janice.Address;
}