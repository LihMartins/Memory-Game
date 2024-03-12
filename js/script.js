//DOM Elements
let gameContainerEl = document.querySelector("#gameContainer"); //Main game container
let startContainerEl = document.querySelector("#startContainer"); // Start screen container
let nameInputEl = document.querySelector("#nameInput"); // Inoput field for the player's name
let startButtonEl = document.querySelector("#startButton"); // Start game button
let formEl = document.querySelector("#form"); // Form for the player's name input
let endScreenEl = document.querySelector("#endScreen"); // End screen container

// Game Variables
let userName = ""; // Player's name

let gameWon = false; // Boolean to check if it is a won game
let gameActive = false; // Boolean to check if the game is active

let correctGuesses = 0; // Number of correct guesses
let neededGuesses = 0; //Number of needed guesses to win the game

// Time Variables
const maxTime = 90; // Maximum time for the game
const endTimeout = 10000; // Time before the end screen appears
let timer = maxTime; // Current time
let timerLow = new Audio("./sounds/TimeLow.mp3"); // Sound played when time is low

//Card Variables
let cardsArray = []; // Array to store the cards

let scoreData = []; // Array to store the score data
loadPlayerData(); // Function to load the player data

//Card generator Function
function createCards() {
    //Generate the HTML for each card in the cardsArray
    for (let i = 0; i < cardsArray.length; i++) {
        let card = document.createElement("div");
        let face = document.createElement("img");
        let back = document.createElement("div");
        card.classList = "card"; // Class for the card
        face.classList = "face"; // Class for the face of the card
        back.classList = "back"; // Class for the back of the card
        //Attach the info to the cards
        face.src = cardsArray[i].url; // Image URL for the card
        card.setAttribute("name", cardsArray[i].name); // Name attribute for the card
        //Attach the cards to the gameContainer
        gameContainerEl.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        //Event listener for the card click
        card.addEventListener("click", function (e) {
            toggleCard(card); // Function to toggle the card
            compareCards(e); // Function to compare the cards
        });
    }
}

// Function to shuffle the cards
function shuffleCards() {
    cardsArray = cardsArray.concat(cardsArray); // Duplicate the cardsArray
    cardsArray.sort(() => Math.random() - 0.5); // Shuffle the cardsArray
}

// Function to compare selected cards
function compareCards(e) {
    let clickedCard = e.target; // The card that was clicked
    selectCard(clickedCard); // Function to select the clciked card

    let selectedCards = document.querySelectorAll(".selected"); // All selected cards

    //If there are not exaactly 2 selected cards, exit the function
    if (selectedCards.length !== 2) {
        return;
    }

    // If the two selected cards are equal
    if (checkEqualCards(selectedCards[0], selectedCards[1])) {
        playSuccessSound(); // Play sound indicating a successful match
        winCondition(); // Check if the game is won
        disablePointerEvents(selectedCards[0]); // Disable further interactions with the first card
        disablePointerEvents(selectedCards[1]); // Disable further interactions with the second card
    } else {
        // If the cards are not equal, flip them back over after a delay
        setTimeout(function () {
            if (gameActive === false) {
                return;
            }
            toggleCard(selectedCards[0]); // Flip the first card back over
            toggleCard(selectedCards[1]); // Flip the second card back over
            playUnFlipSound(); // Play a sound indicating the cards are being flipped over
        }, 1000);
    }

    unselectCard(selectedCards[0]); // Unselected the first card
    unselectCard(selectedCards[1]); // Unselected the second card
}

// Function to check if the game is won
function winCondition() {
    correctGuesses += 1; // Increment the number of correct guesses
    if (correctGuesses >= neededGuesses) { // If the number of correct guesses is equal to or greater than the number of needed guesses
        gameActive = false; // Set the game as inactive
        storePlayerData(); // Store the player's data
        endScreenEl.innerHTML = "Winner Winner Chicken Dinner!"; // Display a winning message
        endScreenEl.classList.add("end-screen-shown"); // Show the end screen
        playWinSound(); // Play sound inddicating the game is won
        setTimeout(resetGame, endTimeout); // Reset the game after a delay
    }
}

window.setInterval(gameTimer, 1000); // Set up a game timer that updates every second

// Function to disable pointer events on a card
function disablePointerEvents(card) {
    card.style.pointerEvents = "none"; // Disable pointer events on the card
}

// Function to select a card
function selectCard(card) {
    card.classList.add("selected"); // Add the 'selected' class to the card
    playFlipSound(); // Play a sound indicating the card is being flipped over
}

// Function to unselect a card
function unselectCard(card) {
    card.classList.remove("selected"); // Remove the 'selected' class from the card
}

// Function to toggle a card
function toggleCard(card) {
    card.classList.toggle("toggleCard"); // Toggle the 'toggleCard' class on the card
}

// Function to add the 'toggleCard' class to a card
function addToggleCard(card) {
    card.classList.add("toggleCard"); // Add the 'toggleCard' to the card
}

// Function to check if two cards are equal
function checkEqualCards(card1, card2) {
    return card1.getAttribute("name") === card2.getAttribute("name"); // Return true if the 'name' attribute of the two cards are equal
}

// Function for the game timer
function gameTimer() {
    if (gameActive === false) { // If the game is not active, exit the function
        return;
    }
    timer -= 1; // Decrement the timer

    let timerEl = document.querySelector("#gameTimer"); // The timer element
    timerEl.innerHTML = "Timer: " + timeConvert(timer); // Update the timer display
    // If the timer is low, add a class to the timer element and play a sound
    if (timer > 12) {
        timerEl.classList.remove("game-timer-low");
    }
    if (timer === 13) {
        timerEl.classList.add("game-timer-low");
        timerLow.play();
    }

    // If the timer reaches 0, end the game
    if (timer <= 0) {
        endGame();
    }
}

// Function to end the game
function endGame() {
    gameActive = false; // Set the game as inactive
    let cardEl = document.querySelectorAll(".card"); // All cards
    for (let i = 0; i < cardEl.length; i++) {
        addToggleCard(cardEl[i]); // Add the 'toggleCard' class to each card
    }
    endScreenEl.innerHTML = "Game Over!"; // Display a losing message
    endScreenEl.classList.add("end-screen-shown"); // Show end screen
    playLoseSound(); // Play a sound indicating the game is lost
    setTimeout(resetGame, endTimeout); // Reset the game after a delay
}

// Function to convert time to minutes and seconds
function timeConvert(timer) {
    let minutes = Math.floor(timer / 60); // Calculate the minutes
    let seconds = timer - minutes * 60; // Calculate the reamining seconds
    if (seconds < 10) {
        seconds = "0" + seconds; // Add a leading zero to seconds if less than 10
    }
    return minutes + ":" + seconds; // Return the time in the format 'minutes:seconds'
}

// Function to store the player's Data
function storePlayerData() {
    let timeUsed = maxTime - timer; // Calculate the time used
    const maxScoreEntries = 10; // Maximum number of score entries
    scoreData.push({ time: timeUsed, name: userName }); // Add the player's  data to the scoreData array
    scoreData.sort((b, a) => b.time - a.time); // Sort the scoreData array by time
    if (scoreData.length > maxScoreEntries) {
        scoreData.length = maxScoreEntries; // Limit the number of score entries to the maximum
    }
    localStorage.setItem("scores", JSON.stringify(scoreData)); // Store the scoreData array in localStorage
    createScoreBoard(); // Create the scoreBoard
}

// Function to load the player's data
function loadPlayerData() {
    scoreData = JSON.parse(localStorage.getItem("scores")) || []; // Load the scoreData array from localStorage
    createScoreBoard(); // Create the scoreBoard
}

// Function to create the scoreBoard
function createScoreBoard() {
    clearScoreBoard(); // Clear the scoreBoard
    let scoreBoardEl = document.querySelector("#scoreBoard"); // The scoreBoard element
    for (let i = 0; i < scoreData.length; i++) {
        let userScoreEl = document.createElement("div"); // Create a new score element
        userScoreEl.classList.add("score"); // Add the 'score; class to the score element
        userScoreEl.innerHTML =
            i + 1 + ". " + scoreData[i].name + " " + timeConvert(scoreData[i].time); // Set the content of the score element
        scoreBoardEl.append(userScoreEl); // Add the score element to the scoreBoard
    }
}

// Function to clear the scoreBoard
function clearScoreBoard() {
    let scores = document.querySelectorAll(".score"); // All store elements
    for (let i = 0; i < scores.length; i++) {
        scores[i].remove(); // Remove each score element
    }
}

// Async function to get data from an API
async function getData() {
let apiUrl = "./api/data.json"; // The API URL
    try {
        let response = await fetch(apiUrl); // Fetch the data from the API
        let result = await response.json(); // Parse ethe data as JSON
        cardsArray = result; // Set the cardsArray to the result
        createDeck(); // Create the deck
        neededGuesses = cardsArray.length; // Set the number of needed guesses to the lenght of the cardsArray
        startGame(); // Start the game
    } catch {
        console.log("API error"); // Log an error message if there was an error fetching the data
    }
}

// Function to reset the game
function resetGame() {
    endScreenEl.classList.remove("end-screen-shown"); // Hide the end screen

    let timerEl = document.querySelector("#gameTimer"); // The timer element
    timerEl.style.visibility = "hidden"; // Hide the timer
    let card = document.querySelectorAll(".card"); // All cards
    for (let i = 0; i < card.length; i++) {
        card[i].remove(); // Remove each card
    }
    timer = maxTime; // Reset the timer
    startContainerEl.classList.remove("start-container-hidden"); // Show the start container
}

// Function to start the game
function startGame() {
    gameActive = true; // Set the game as active
    correctGuesses = 0; // Reset the number of correct guesses
    shuffleCards(); // Shuffle the cards
    createCards(); // Create the cards
    let timerEl = document.querySelector("#gameTimer"); // The timer element
    timerEl.style.visibility = "visible"; // SHow the timer
}

// Event listener for the form submission
formEl.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting
    userName = nameInputEl.value; // Get the player's name from the input field
    getData(); // Get the data for the game
    startContainerEl.classList.add("start-container-hidden"); // Hide the start container
});

// Function to create the deck
function createDeck() { 
    cardsArray.sort(() => Math.random() - 0.5); // Shuffle the cardsArray
    cardsArray = cardsArray.slice(-10); // Get the last 10 cards from the cardsArray
}

// Sounds effects
function playFlipSound() {
    let sound = new Audio("./sounds/Flip.mp3"); // The flip sound
    sound.play(); // Play the flip sound
}

function playUnFlipSound() {
    let sound = new Audio("./sounds/Unflip.mp3"); // The unflip sound
    sound.play(); // Play the unflip sound
}

function playWinSound() { 
    timerLow.pause(); // Pause the low timer sound
    let sound = new Audio("./sounds/finalfantasyvictory.mp3"); // The win sound
    sound.play(); // Play the win sound
}

function playLoseSound() {
    let sound = new Audio("./sounds/demongameover.mp3"); // The lose sound
    sound.play(); // Play the lose sound
}

function playSuccessSound() {
    let sound = new Audio("./sounds/Success.mp3"); // The success sound
    sound.play(); // Play the success sound
}

// Checks if the width of the window is less than or equal to 525 pixels
window.onload = function () {
    if(window.innerWidth <= 525) {
        var mvp = document.getElementById('myViewport');
        mvp.setAttribute('content','width=525');
    }
}