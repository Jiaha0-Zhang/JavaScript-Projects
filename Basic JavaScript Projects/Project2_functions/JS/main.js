function changeTextColor(color)
{
    var colors = document.getElementById("Colors"); //assign colors.
    colors.style.color = color; //set a color
}

function combinedSentence()
{
    var sentence = "I am practicing JS"; //assign the 1st part of sentence.
    sentence += " with VS code."; //combine the 2nd part of sentence at end of 1st part.
    document.getElementById("Concatenate").innerHTML = sentence; //modify sentence on html page.
}