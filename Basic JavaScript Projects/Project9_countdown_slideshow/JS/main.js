function countdown()    //countdown example from course
{
    var seconds = document.getElementById("seconds").value;

    function tick()
    {
        seconds = seconds - 1 ;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1 )
        {
            alert("Time's Up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let index = 0; //display img by index number

for(let i=0; i < imageCount; i++)
{   //DOM operation
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.onclick = () => setIndex(i);
    bottom.append(indicator);
}


function refresh()
{
    if(index < 0)  //index < 0 , show the far right img
    {
        index = 2;
    }
    else if(index>2) //when index over limit, show the far left img
    {
        index = 0;
    }
    let carousel = document.querySelector(".carousel"); //get carousel elements

    let width = getComputedStyle(carousel).width;  //get carousel width
    width = Number(width.slice(0, -2));

    carousel.querySelector(".container").style.left = index * width * -1 + "px";
}

function leftShift()
{
    index --;     //press leftshift and index -1
    refresh();
}
function rightShift()  //press rightshift and index +1
{
    index ++;
    refresh();
}
function setIndex(idx)
{
    index = idx;
    refresh();
}
