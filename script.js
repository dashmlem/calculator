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
        saveToLocalStorage();
    } catch (error) {
        alert("Ошибка в выражении");
        outputScreen.value = "";
    }
}
   
function Clear()
{
    outputScreen.value = "";
    localStorage.removeItem("calculatorExpression");
}
function del() 
{
    outputScreen.value = outputScreen.value.slice(0, -1);
    saveToLocalStorage();
}