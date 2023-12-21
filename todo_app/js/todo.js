function get_todos() //this function gets the task from input
{
    var todos = new Array; //this creates an array of tasks that are inputed
    var todos_str = localStorage.getItem('todo'); //this pull the task that was saved in the web browser memory

    if(todos_str !== null) //if the input is not null then JSON.parse will communicate with the web browser to make the task a Javascript object.
    {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() //this function adds the inputed task to the get_todos function array
{
    var task = document.getElementById('task').value; //this takes the inputed task and creates a variable of it
    var todos = get_todos();
    todos.push(task); //this adds a new task the end of the array
    localStorage.setItem('todo', JSON.stringify(todos)); //this converts the task input to a JSON string
    document.getElementById('task').value = "";
    show();

    return false;
}

function show() //this function keeps the tasks permanetly displayed on the screen
{
    var todos = get_todos(); //this sets the task that was retrieved as a variable
    var html ='<ul>'; //this sets up each task as an unordered list
    for(var i=0; i<todos.length; i++) //this displays a task to the list in the order that it is inputed
    {
        html += '<li>' + todos[i] + '<button class = "remove" id="' + i + '">x</button></li>'; //this also displays the task as a list and creates the button with the "x"
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html; //this displays the task as a list
}

document.getElementById('add').addEventListener('click', add); //this displays the inputed task when the 'Add Item' button is clicked

show(); //this will keep the inputs displayed permantaly on the screen

function remove() 
{        //this remove function is pretty much similar with add() function, but completely opposite.
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1) //splice() delete elements,  slice() only return the chosen elements but not remove elements
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

var button = document.getElementsByClassName('remove'); 
for(var i=0; i<button.length; i++) 
{
    button[i].addEventListener('click', remove); //add event listener to all buttons for controlling
};