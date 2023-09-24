const word = "hello";



let tryButton = document.getElementById("submit-btn");
let tryCharacters = document.getElementsByClassName("game-input");

tryButton.onclick = () => {
        let tryWord = `${tryCharacters[0].value + tryCharacters[1].value + tryCharacters[2].value + tryCharacters[3].value + tryCharacters[4].value}`


    console.log(`${tryCharacters[0].value}  ${tryCharacters[1].value}  ${tryCharacters[2].value}  ${tryCharacters[3].value}  ${tryCharacters[4].value}`)
}

function validateInput (word) {
    if ( /\d/.test(word)) {
        console.log(tryWord)
        console.log('entrou no if');
        window.alert("Numbers are not a validy input ");
        return;
    }

    

}

