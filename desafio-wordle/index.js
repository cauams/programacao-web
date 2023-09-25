

const tryButton = document.getElementById("submit-btn");
const tryCharacters = document.getElementsByClassName("game-input");



tryButton.onclick = () => {
    try {
        let tryWord = `${(tryCharacters[0].value + tryCharacters[1].value + tryCharacters[2].value + tryCharacters[3].value + tryCharacters[4].value).toLowerCase()}`
        validateInput(tryWord);

        createAwnserAttempt();
        resetLetterColors();
        dyeWords(tryCharacters)
        for (i = 0; i < tryCharacters.length; i++) {
            tryCharacters[i] = '';
        }
    } catch (e) {
        window.alert(e.message)
    }
    tryWord = '';
}

function validateInput(word) {
    if (/\d/.test(word)) {
        throw new Error("Numbers are not a validy input ");
    }

    if (!word || word.length === 0) {
        throw new Error("You can't pass an empty string")
    }
}

function createAwnserAttempt() {
    let awnserContainer = document.createElement('div')
    awnserContainer.className = 'word-sent';
    document.body.appendChild(awnserContainer);

    createAwnserAttemptLetters(awnserContainer);
}

function createAwnserAttemptLetters(awnserContainer) {
    for (i = 0; i < tryCharacters.length; i++) {
        let awnserLetter = document.createElement('p')
        awnserLetter.className = 'try-text ';
        awnserLetter.innerText = tryCharacters[i].value.toUpperCase();
        awnserContainer.appendChild(awnserLetter);
    }
}

function dyeWords(tryCharacters) {
    let awnserLetter = document.getElementsByClassName('try-text');
    let tryWord = `${tryCharacters[0].value + tryCharacters[1].value + tryCharacters[2].value + tryCharacters[3].value + tryCharacters[4].value}`
    
    const correctWord = "hello";

    for(i = 0; i < awnserLetter.length; i++) {
        console.log(` Primeiro: ${correctWord[i]}`)
        console.log(tryWord[i])
        if(tryWord[i] != correctWord[i]) {
            awnserLetter[i].style.backgroundColor = 'red';
        }
    }

    for (i = 0; i < awnserLetter.length; i++) {
        console.log(` Segundo: ${correctWord[i]}`)
        console.log(tryWord[i])
        if (tryWord[i] == 'h' || awnserLetter[i] == 'e' || awnserLetter[i] == 'l' || awnserLetter[i] == 'o') {
            awnserLetter[i].style.backgroundColor = 'yellow';
        }
    }
    
    for(i = 0; i < awnserLetter.length; i++) {
        console.log(` Terceiro: ${correctWord[i]}`)
        console.log(tryWord[i])
        if(tryWord[i] == correctWord[i]) {

            awnserLetter[i].style.backgroundColor = 'green';
        }
    }

    if (tryWord.toLowerCase() == correctWord) {
        for (i = 0; i < awnserLetter.length; i++) {
            awnserLetter[i].style.backgroundColor = 'green';
            console.log(tryWord) 
        }
    }
}

function resetLetterColors() {
    const awnserLetters = document.getElementsByClassName('try-text');
    for (let i = 0; i < awnserLetters.length; i++) {
        awnserLetters[i].style.backgroundColor = ''; // Redefine a cor para o padrão
    }
}