const Calculator = {              //creates an object to keep track of values.
    Display_Value: '0',          //this will display 0 on the caculator screen.
    First_Operand: null,         //this will hold the first operand for any expressions, we set it to null for now.
    Wait_Second_Operand: false,  //this checks wether or not the second operand has been inputted by the user.
    operator: null,              //this will hold the operator, we set it to null for now.
};

function Input_Digit(digit)  //this modifies values each time a button is clicked on.
{
    const {Display_Value, Wait_Second_Operand} = Calculator;

    if(Wait_Second_Operand === true)  //This checks if the Wait_Second_Operand is true and sets Display_Value to the key that was clicked on.
    {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else //this overwrite Display_Value if the current value is 0, othewise is adds onto it.
    {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot)  //this section handles decimal points.
{
    if(Calculator.Wait_Second_Operand === true) return; //this ensures that accidental clicking of the decimal point doesn't cause bugs in the operation.
    if(!Calculator.Display_Value.includes(dot))//we are saying that if the Display_Value does not contain a decimal point 
    {                                          //we want to add a decimal point.
        Calculator.Display_Value += dot;
    }
}

function Handles_Operator(Next_Operator)  //this section handles operators
{ 
    const {First_Operand, Display_Value, operator} = Calculator;
                                                        //when an operator key is pressed we convert the current number displayed on the screen to a number 
    const Value_of_Input = parseFloat(Display_Value);   //and then store the result in Calculator.First_Operand if it doesn't alerady exist.
                                                      
    if(operator && Calculator.Wait_Second_Operand) //checks if an operator already exists and if Wait_Second_Operand is true,
    {                                              //then updates the operator and exits from the function.
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null)
    {
        Calculator.First_Operand = Value_of_Input;
    }
    else if(operator) //checks if an operator already exists
    {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); //if operator exists, property lookup is performed for the operator in 
                                                                               //the Perform_Calculation object and the function that matches the operator is executed.    
        result = Number(result).toFixed(9); // Here we add a fixed amount of numbers after the decimal.                                     
        result = (result *1).toString();    //This will remove any trainning 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand, 
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Caculator_Reset()
{
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() //this function updates the calculator screen with the contents of Display_Value
{   
    const display = document.querySelector('.calculator-screen');//Makes use of the calculator-screen class to target the input tag in the HTML document
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys'); 
keys.addEventListener('click', (event) => {     //the target variable is an object that represents the element that was clicked.

    const {target} = event;

    if(!target.matches('button')) //if the element that was clicked on is not a botton, exit the function.
    {
        return;
    }
    if(target.classList.contains('operator'))
    {
        Handles_Operator(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains('decimal'))
    {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains('all-clear'))
    {
        Caculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})