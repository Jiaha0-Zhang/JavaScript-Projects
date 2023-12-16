let activePlayer = 'X'; //This variable keeps track of whose turn it is.
let selectedSquares = []; //This array stores an array of moves. We use this to determine win conditions.

function  placeXOrO(squareNumber)
{
    //This condition ensures a square hasn't been selected already.
    //This .some() method is used to check each element of the selectSquare array to see if it contains the square number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber)))
    {        
        let select = document.getElementById(squareNumber); //This variable retrieves the HTML element id that was clicked.
        if(activePlayer === 'X')
        {
            select.style.backgroundImage = 'url("images/x.png")'; //if activePlayer is equal to 'X', the x.png is placed in HTML.
        }
        else  //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        {
            select.style.backgroundImage = 'url("images/o.png")'; //if activePlayer is equal to 'O', the o.png is placed in HTML.
        }

        selectedSquares.push(squareNumber + activePlayer); //squareNumber and activePlayer are concatenated together and added to array.

        checkWinConditions(); //This calls a function to check for any win conditions.

        if(activePlayer === 'X') //This condition for changing the active player.
        {
            activePlayer = 'O'; //if active player is anything other than 'X'.
        }
        else
        {
            activePlayer = 'X'; //change the activePlayer to 'X'.
        }

        audio('./media/place.mp3'); //this function plays placement sound.

        if(activePlayer === 'O') //This condition checks to see if it is the computers turn.
        {
            disableClick(); //This function disables clicking for computers turn.
            setTimeout(function(){computersTurn();}, 1000); //This function waits 1 second before the computer places an image and enables clicks.
        }
        return ture;
    }

    function computersTurn() //This function results in a random square being selected by the computer.
    {
        let success = false; //This boolean is needed for our while loop.
        let pickASquare; //This variable stores a random number 0-8
        while(!success) //This condition allows our while loop to keep tring if a square is selected already.
        {
            pickASquare = String(Math.floor(Math.random() * 9)); //A random number between 0 and 8 is selected.
        }
        if(placeXOrO(pickASquare))  // if the random number evaluated returns true, the square hasn't been selected yet.
        {
            placeXOrO(pickASquare); // This line calls the function.
            success = true; //This changes our boolean and ends the loop.
        };
    }
}

function checkWinConditions()   //This function parses the selectedSquares array to search for win conditions.
{                              // drawLine() function is called to draw a line on the screen if the condition is met.
    if(arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100)} //X 0, 1, 2 condition.
    else if (arrayIncludes('3X','4X','5X')){drawWinLine(50,304,558,304)} //X 3, 4 ,5 condition.
    else if (arrayIncludes('6X','7X','8X')){drawWinLine(50,508,558,304)} //X 6, 7 ,8 condition.
    else if (arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558)} //X 0, 3 ,6 condition.
    else if (arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558)} //X 1, 4 ,7 condition.
    else if (arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558)} //X 2, 5 ,8 condition.
    else if (arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90)} //X 6, 4 ,2 condition.
    else if (arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520)} //X 0, 4 ,8 condition.
    else if (arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100)} //O 0, 1 ,2 condition.
    else if (arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304)} //O 3, 4 ,5 condition.
    else if (arrayIncludes('6O','7O','8O')){drawWinLine(50,508,558,304)} //O 6, 7 ,8 condition.
    else if (arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558)} //O 0, 3 ,6 condition.
    else if (arrayIncludes('1O','4O','7O')){drawWinLine(304,50,304,558)} //O 1, 4 ,7 condition.
    else if (arrayIncludes('2O','5O','8O')){drawWinLine(508,50,508,558)} //O 2, 5 ,8 condition.
    else if (arrayIncludes('6O','4O','2O')){drawWinLine(100,508,510,90)} //O 6, 4 ,2 condition.
    else if (arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520)} //O 0, 4 ,8 condition.
    
    else if (selectedSquares.length >= 9) //This condition checks for a tie. if none of the above conditions are met
    {                                     //and 9 squares are selected the code executes.
        audio('./media/tie.mp3') //This function plays the tie game sound.
        setTimeout(function(){resetGame();}, 500); //This function sets a .3 second timer before the resetGame is called.
    }

    function arrayIncludes(squareA, squareB,squareC) //This function checks if any array includes 3 strings. 
    {                                                //It is used to check for each win condition.
        const a = selectedSquares.includes(squareA); 
        const b = selectedSquares.includes(squareB); //These 3 variables will be used to check for 3 in a row.
        const c = selectedSquares.includes(squareC);

        if(a === true && b === true && c === true) //if the 3 variables we pass are all included in our array then
        {                                          //true is returned and our else if condition executesthe drawLine() function.
            return true;
        }
    }
}

function disableClick() //This function makes our body element temporarily unclickable.
{
    body.style.pointerEvents = 'none'; //this makes our body unclickable.
    setTimeout(function(){body.style.pointerEvents = 'auto';}, 1000); //this makes our body clickable again after 1 second.
}

// function audio(audioURL) //This function takes a string parameter of the path you set earlier for placement sound('./media/place.mp3')
// {
//     let audio = new Audio(audioURL); //we create a new audio object and we pass the path as a parameter.
//     audio.play(); //Play method plays our audio sound.
// }

function drawWinLine(coordX1, coordY1, coordX2, coordY2) //this function utilize HTML canvas to draw win lines.
{
    const canvas = document.getElementById('win-lines'); //This line accesses our HTML canvas element.
    const c = canvas.getContext('2d'); // This line gives us access to methods and properties to use on canvas.
    let x1 = coordX1, //This line indicates where the start of a lines x axis is.
        y1 = coordY1, //This line indicates where the start of a lines y axis is.
        x2 = coordX2, //This line indicates where the end of a lines x axis is.
        y2 = coordY2, //This line indicates where the end of a lines y axis is.
        x = x1, //this variable stoers temporary x axis data we update in our animation loop.
        y = y1; //this variable stoers temporary y axis data we update in our animation loop.

    function animateLineDrawing() //this function interacts with the canvas.
    {
        const animationLoop = requestAnimationFrame(animateLineDrawing); //this variable creates a loop.
        c.clearRect(0, 0, 608, 608); //This method clears content from the last loop iteration.
        c.beginPath(); //this method starts a new path.
        c.moveTo(x1, y1); //this method moves us to  a starting point in our line.
        c.lineTo(x, y); //this method indicates the end of point in our line.
        c.lineWidth = 10; //this method sets the width of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //this method sets the color of our line.
        c.stroke(); //this method draws everything we laid out above.

        if(x1 < x2 && y1 <= y2) //this condition checks if we've reached end x endpoint.
        {
            if(x < x2) //this condition adds 10 to the previous end x endpoint.
            {
                x += 10;
            }
            if(y < y2) //this condition adds 10 to the previous end y endpoint.
            {
                y += 10;
            }
            if(x >= x2 && y >= y2) //this condition is similar to the one above. this is necessary for the 6,4,2 win conditions.
            {
                cancelAnimationFrame(animationLoop);
            }
        }
        if(x1 <= x2 && y1 >= y2)  //this condition is similar to the one above. this is necessary for the 6,4,2 win conditions.
        {
            if(x < x2) 
            {
                x += 10;
            }
            if(y > y2)
            {
                y -= 10;
            }
            if(x >= x2 && y <= y2)
            {
                cancelAnimationFrame(animationLoop);
            }
        }
    }

    function clear() //this function clears our canvas after our win line is drawn
    {
        const animationLoop = requestAnimationFrame(clear); //this line starts our animation loop
        c.clearRect(0, 0, 608, 608); //this line clears our canvas.
        cancelAnimationFrame(animationLoop); //this lines stops our animation loop.
    }

    disableClick(); //this line diaallows clicking while the win sound is playing
    audio('./media/winGame.mp3');//this line plays the win sounds.
    animateLineDrawing(); //this line calls our main animation loop.
    setTimeout(function(){clear(); resetGame();}, 1000); //this line waits 1 second. Then, clears canvas, resets game, an allows clicking again.
}

function resetGame() //this function resets the game in the event of a tie or a win.
{
    for(let i = 0; i < 9 ; i++ )  //this for loop iterates through each HTML square element.
    {
        let square = document.getElementById(String(i)); //This variable gets the HTML element i.
        square.style.backgroundImage = ''; //this removes our elements backgroundImage.
    }
    selectedSquares = [];
}