const numberOutput = document.querySelector('.number-output');
const operationOutput = document.querySelector('.operation-output');
const inputValue = [];
const operatorValue = [];
const resultValue = [];

function calculator(number) {
    operationOutput.innerText = '';
    numberOutput.innerText += number;
}

function operate(operator) {
    if (numberOutput.innerText !== '') {
        inputValue.push(Number(numberOutput.innerText));
    }
    numberOutput.innerText = '';
    operationOutput.innerText = operator;
    console.log(operatorValue)
    operatorValue.push(operationOutput.innerText);
    console.log(operatorValue)
    if (operatorValue.length > 1) {
        operatorValue.shift()
    }
    console.log(operatorValue)
    if (resultValue.length !== 0) {
        inputValue.length = 0;
        inputValue.push(resultValue[0]);
    }
}

function result() {
    resultValue.length = 0;
    if (numberOutput.innerText !== '') {
        inputValue.push(Number(numberOutput.innerText));
    }

    if (operatorValue.includes('+')) {
        numberOutput.innerText = inputValue.reduce((a, b) => a + b);
        operationOutput.innerText = '';
        if (numberOutput.innerText.length > 10) {
            (numberOutput.innerText = inputValue.reduce((a, b) => a + b).toFixed(10));
        }
    } else if (operatorValue.includes('-')) {
        numberOutput.innerText = inputValue.reduce((a, b) => a - b);
        operationOutput.innerText = '';
        if (numberOutput.innerText.length > 10) {
            (numberOutput.innerText = inputValue.reduce((a, b) => a - b).toFixed(10));
        }
    } else if (operatorValue.includes('÷')) {
        numberOutput.innerText = inputValue.reduce((a, b) => a / b);
        operationOutput.innerText = '';
        if (numberOutput.innerText.length > 10) {
            (numberOutput.innerText = inputValue.reduce((a, b) => a / b).toFixed(10));
        }
    } else if (operatorValue.includes('*')) {
        numberOutput.innerText = inputValue.reduce((a, b) => a * b);
        operationOutput.innerText = '';
        if (numberOutput.innerText.length > 10) {
            (numberOutput.innerText = inputValue.reduce((a, b) => a * b).toFixed(10));
        }
    } else if (operatorValue.includes('%')) {
        numberOutput.innerText = inputValue.reduce((a, b) => a % b);
        operationOutput.innerText = '';
        if (numberOutput.innerText.length > 10) {
            (numberOutput.innerText = inputValue.reduce((a, b) => a % b).toFixed(10));
        }
    }
    operatorValue.length = 0;
    if (numberOutput.innerText !== '' && resultValue.length < 1) {
        resultValue.push(Number(numberOutput.innerText));
        inputValue.push(Number(numberOutput.innerText));
    }
}

function deleteAll() {
    inputValue.length = 0;
    operatorValue.length = 0;
    resultValue.length = 0;
    numberOutput.innerText = '';
    operationOutput.innerText = '';
}



