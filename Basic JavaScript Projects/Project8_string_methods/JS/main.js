function full_sentence()
{
    var a = "Jimmy went to ";  //declare sentence a 
    var b = "the bathroom and forgot to "; //declare sentence b
    var c = "bring toilet paper"; //declare sentence c
    var d = a.concat(b, c,); //connect b and c at the end of a.
    document.getElementById("Concatenate").innerHTML = d;
}

function Incomplete_sentences()
{
    var a = "Jimmy went to the bathroom and forgot to bring toilet paper."; //declare a full sentence
    var b = a.slice(18,26); //slice part of sentence 
    document.getElementById("Slice").innerHTML = b; // bathroom will be shown on the page
}

function toString_function()
{
    var a = 100; 
    document.getElementById("to_string").innerHTML = "This "+ a.toString() + " is not a number, it is a string."; //Converts a number to a string
}

function toPrecision_function()
{
    var a = 123.456789012345;
    document.getElementById("to_precision").innerHTML = "accurate number"+ a + " to be " + a.toPrecision(5); 
}

function toFixed_function()
{
    var a = 123.45;
    document.getElementById("to_fixed").innerHTML = a.toFixed(8);   
    // toFixed() method converts a floating-point number to a string representation of the number of decimal places specified,
    // which is filled with zeros if the number of decimal places is higher than the number.
}