let operation = ['+', '-', '/', '*', '%'];

let examples_culc = function () {
    let a, b;
    let message;
    while (true) {        
        a = prompt('Enter number first number ', '10');
        b = prompt('Enter number second number ', '5');
        message = `value should be an number e.g -100  ... 100 or -1,2 ... -1,2
        \n\nthe first value is \t${a}\n\nthe second value is \t${b} `;
        a = parseFloat(a);        
        b = parseFloat(b);        
        if (!Number.isNaN(a) && !Number.isNaN(b))
            break;
        else
            alert(message);    
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
    let user_text = (prompt('Enter uk or ru ', '').toLowerCase()) === 'uk';
    let wrapper = document.querySelector('.result.uk')
    wrapper.innerText = `${user_text}`.toUpperCase();
    wrapper.removeAttribute("class");
    if (user_text) {
        wrapper.classList.add('result','uk', 'green');
    } else {
        wrapper.classList.add('result','uk', 'red');
    }
    console.log("Done function examples_uk");
}
let examples_compare = function () {
    let a, b;
    while (true) {
        a = parseInt(prompt('Enter first number ', '0'));
        b = parseInt(prompt('Enter second number ', '0'));    
        if (a >= 0 && b >= 0)
            break;
    }
    document.querySelector('.result.compare').innerHTML = (a > 20 && b > 30 );
    console.log("Done function examples_compare");
}

