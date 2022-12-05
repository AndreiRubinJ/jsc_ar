let operation = ['+', '-', '/', '*', '%'];
let examples_culc = function () {
    let a, b;
    while (true) {
        a = parseFloat(prompt('Enter number first number ', '10'));
        b = parseFloat(prompt('Enter number second number ', '5'));
        if (a >= 0 && b >= 0)
            break;
    }
    operation.forEach((option) => {
        if (option === "+") {
            document.querySelector('.calc.plus').innerHTML = a + b;
        } else if (option === "-") {
            document.querySelector('.calc.minus').innerHTML = a - b;
        } else if (option === "/") {
            document.querySelector('.calc.div').innerHTML = a / b;
        } else if (option === "*") {
            document.querySelector('.calc.mult').innerHTML = a * b;
        }

    });
}

let examples_name = function () {
    user_name = prompt('Enter first name ', '');
    user_surname = prompt('Enter second name ', '');
    document.querySelector('.result.firstname').innerHTML = "Name:      " + user_name;
    document.querySelector('.result.secondname').innerHTML = "Second Name:    " + user_surname;
}

let examples_uk = function () {
    let user_text = prompt('Enter uk or ru ', '').toLowerCase() === 'uk' ? true : false;
    let wrapper = document.querySelector('.result.uk')
    wrapper.innerText = `${user_text}`.toUpperCase();
    wrapper.removeAttribute("class");
    if (user_text) {
        wrapper.classList.add('result','uk', 'green');
    } else {
        wrapper.classList.add('result','uk', 'red');
    }
}
let examples_compare = function () {
    let a, b;
    while (true) {
        a = parseInt(prompt('Enter first number ', '0'));
        b = parseInt(prompt('Enter second number ', '0'));    
        if (a >= 0 && b >= 0)
            break;
    }
    document.querySelector('.result.compare').innerHTML = a > 20 && b > 30 
    ? true
    : false;
}

