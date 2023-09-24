const input = document.getElementById('input-text');
const receiver = document.getElementById('text-receiver');
const btnGetLength= document.getElementById(`btn-submit`);
const lengthOutput = document.getElementById('text-length');

input.onkeyup = () => {
        receiver.innerText = input.value;
}

btnGetLength.onclick = () => {
    lengthOutput.innerText = '';
    lengthOutput.innerText = input.value.length;
}