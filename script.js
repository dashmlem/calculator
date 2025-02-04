let outputScreen = document.getElementById("outputscreen");

window.onload = function () {
    let savedExpression = localStorage.getItem("calculatorExpression");
    if (savedExpression) {
        outputScreen.value = savedExpression;
    }
};

function display(value) {
    outputScreen.value += value;
    saveToLocalStorage();
}

function calculate() {
    try {
        let expression = outputScreen.value;
        let result = evaluateExpression(expression);
        outputScreen.value = result;
        localStorage.removeItem("calculatorExpression"); // Очищаем выражение после вычисления
    } catch (error) {
        alert("Ошибка в выражении: " + error.message);
        outputScreen.value = "";
    }
}

function evaluateExpression(expression) {
    let rpn = infixToRPN(expression);
    return evaluateRPN(rpn);
}

function infixToRPN(expression) {
    let output = [];
    let stack = [];
    let precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "%": 2 };

    let tokens = expression.match(/(\d+\.?\d*)|([\+\-\*\/\%\(\)])/g) || [];

    tokens.forEach((token) => {
        if (!isNaN(token)) {
            output.push(token);
        } else if (token === "(") {
            stack.push(token);
        } else if (token === ")") {
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                output.push(stack.pop());
            }
            stack.pop(); // Убираем "(" из стека
        } else {
            while (
                stack.length > 0 &&
                precedence[stack[stack.length - 1]] >= precedence[token]
            ) {
                output.push(stack.pop());
            }
            stack.push(token);
        }
    });

    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output;
}

function evaluateRPN(rpn) {
    let stack = [];
    rpn.forEach((token) => {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(a / b);
                    break;
                case "%":
                    stack.push((a * b) / 100);
                    break;
                default:
                    throw new Error("Неизвестный оператор");
            }
        }
    });
    return stack.pop();
}

function saveToLocalStorage() {
    localStorage.setItem("calculatorExpression", outputScreen.value);
}

function Clear() {
    outputScreen.value = "";
    localStorage.removeItem("calculatorExpression");
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
    saveToLocalStorage();
}