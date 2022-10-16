let x = document.getElementById("x");
let y = document.getElementById("y");
let ans = document.getElementById("ans-el");
let symbol = document.getElementById("symbol");
// symbol.textContent = "*"
// x.textContent = a;
// y.textContent = b;
// x.value = "number";
// y.value = "number";


function Click(sign) {
    let a = x.value;
    let b = y.value;
    console.log(a);
    console.log(b);
    switch (sign) {
        case '+': symbol.textContent = "+";
            ans.textContent = +a + +b;
            break;
        case '-': symbol.textContent = "-";
            ans.textContent = a - b;
            break;
        case '÷': symbol.textContent = "÷";
            ans.textContent = a / b;
            break;
        case '*': symbol.textContent = "*";
            ans.textContent = a * b;
            break;
        case '%': symbol.textContent = "%";
            ans.textContent = a % b;
            break;
    }
}