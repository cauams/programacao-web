const numbers = document.getElementsByClassName('nr-input');

const  btnSum = document.getElementById('btn-sum');
const btnComapre = document.getElementById('btn-compare');

const awnserSum = document.getElementById('sum-result');
const awnserCompare = document.getElementById('compare-result');

btnSum.onclick = () => {
    const number1 = parseInt(numbers[0].value) ;
    const number2 = parseInt(numbers[1].value);

    if ((isNaN(number1) ) || isNaN(number2)) return;

    awnserSum.innerText = ' ';
    awnserSum.innerText = `${number1 + number2}`;
}

btnComapre.onclick = () => {
    const number1 = parseInt(numbers[0].value) ;
    const number2 = parseInt(numbers[1].value);

    if ((isNaN(number1) ) || isNaN(number2)) return;

    if (number1 > number2) {
        awnserCompare.style.backgroundColor = 'red';
        awnserCompare.innerText = 'Primeiro numero e maior'
    }

    if (number1 < number2) {
        awnserCompare.style.backgroundColor = 'green';
        awnserCompare.innerText = 'Segundo numero e maior'
    }

    if (number1 == number2) {
        awnserCompare.style.backgroundColor = 'yellow';
        awnserCompare.innerText = 'Ambos sao iguais'
    }
}

