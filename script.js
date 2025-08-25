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

let num1 = null;
let num2 = null;
let operator = ""

function clearData() {
    num2 = null;
    num1 = null;
    operator = "";
    displayText.textContent = "0";
}

let btn = document.querySelectorAll("button");
let displayText = document.querySelector("#display")
for(i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", (e) => {

        let clickedButton = e.target.textContent;

        // Check if a number, an operator or the clear button was clicked
        switch (clickedButton) {
            case "0":
            case "1":    
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (displayText.textContent == "0") {
                    displayText.textContent = clickedButton;
                } else {
                    displayText.textContent += clickedButton;
                }

                break
            case "+":
            case "-":
            case "/":
            case "*":
            case "=":
                num1 = Number(displayText.textContent)
                displayText.textContent += clickedButton;
                break
            case "Clear":
                clearData()
                break
        }
        
        
        
        
        
    })
}