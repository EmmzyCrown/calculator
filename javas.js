let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value >= '0' && value <= '9' || value === '.') {
            currentNumber += value;
            display.value = currentNumber;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            previousNumber = currentNumber;
            currentNumber = '';
            operation = value;
        } else if (value === '=') {
            let result = eval(previousNumber + operation + currentNumber);
            display.value = result;
            previousNumber = '';
            currentNumber = '';
            operation = '';
        } else if (value === 'C') {
            display.value = '';
            previousNumber = '';
            currentNumber = '';
            operation = '';
        }
    });
});