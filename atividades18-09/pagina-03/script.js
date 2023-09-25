const counterReceiver = document.getElementById('counter');
let counter = 0;

setInterval(() => {
    counter++
    counterReceiver.innerText = counter; 
}, 1000) 

function showFood(name) {
    window.alert(name);
}

function changeColor(tr) {
    tr.style.backgroundColor = 'red';
}
