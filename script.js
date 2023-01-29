//model
const app = document.getElementById("app");

let guessNumber;
let secretNumber;


//view
function updateView() {
const guessText = guessNumber == null ? '' : `Du tippet <b><span style="color:#b58900;">${guessNumber}</span></b>.<br><br>`;

let isCorrectOrNotText =
    guessNumber == null ? 'Skriv et tall mellom 0 til 100':
    guessNumber == secretNumber ? '<b><span style="color:#4a9900;">Du har tippet riktig!</span></b>' :
    guessNumber < secretNumber ? '<span style="color:#dc322f;">Du har tippet for <b>lavt</b></span>.' :
    guessNumber > secretNumber ? '<span style="color:#dc322f;">Du har tippet for <b>høyt</b></span>.' :
{ }
    // let isCorrectOrNotText;
    // if(guessNumber == null){
    //     isCorrectOrNotText = 'Skriv inn et tall og trykk på "Tipp" knappen.';
    // }else if (guessNumber == secretNumber) {
    //     isCorrectOrNotText = '<b>Du har tippet riktig!</b>';
    // } else if (guessNumber < secretNumber) {
    //     isCorrectOrNotText = 'Du har tippet for lavt.'
    // } else {
    //     isCorrectOrNotText = 'Du har tippet for høyt.'; 
    // }

    document.getElementById("app").innerHTML = `
        <h2>Gjett riktig tall</h2>

        ${guessText}
        ${isCorrectOrNotText}

        <br><br>
        <input type="text" oninput="guessNumber = parseInt(this.value)"/> 
        <button onclick="guess()">Nytt tall</button>
        <button onclick="startGame()">Spill på nytt</button>
    `;
}

//controller
startGame();
function startGame() {
    guessNumber = null;
    secretNumber = Math.ceil(Math.random() * 100);
    updateView();
}

function guess(){
    updateView();
}
