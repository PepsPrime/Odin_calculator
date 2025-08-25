// Four basic operations

let operators = "+*/-="
let numbers = "0123456789"

function add(a,b) {
    let result = a + b;
    return result
}

function subtract(a,b) {
let result = a - b;
    return result
}

function multiply(a,b) {
    let result = a * b;
    return result
}

function divide(a,b) {
    if (b==0) {
        alert("Error : Dividing by 0.....")
        return 
    }
    let result = a / b
    return result
}

// Calling the proper function

function operate(operator,a,b) {
    
    switch(operator) {
        case "+":
            add(a,b)
            break
        case '-':
            subtract(a,b)
            break
        case '*':
            multiply(a,b)
            break
        case '/':
            divide(a,b)
            break
        default:
            alert("Non-authorized operator")
            return 'Error'
            
    }
}

let num1,num2 = null
let operator = ""

function clearData() {
    num1,num2 = null;
    displayText.textContent = "0"
}

let btn = document.querySelectorAll("button");
let displayText = document.querySelector("#display")
for(i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", (e) => {

        let clickedButton = e.target.textContent;

        // Check if a number, an operator or the clear button was clicked
        if (numbers.includes(clickedButton)) {
            if (displayText.textContent == "0") {
                displayText.textContent = clickedButton;    
            } else displayText.textContent += clickedButton;
            
        } else if (operators.includes(clickedButton)) {
            displayText.textContent += clickedButton;
        } else clearData()
        
        
        
        
        
    })
}