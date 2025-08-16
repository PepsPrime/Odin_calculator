// Four basic operations

let operators = "+*/-"
let numbers = "0123456789"

function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
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
// 
let btn = document.querySelectorAll("button");
let displayText = document.querySelector("#display")
for(i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        let num1,num2;
        displayText.textContent += e.target.textContent
        
        
        
    })
}