# Final Fantasy Memory-Card Game

Welcome to the Final Fantasy Memory-Card game project. This project was initially created using Visual Studio Code.

## Project Overview

This project is a combination of my passion for the Final Fantasy franchise and my love for puzzles. It's a mini-game designed to challenge your memory and keep your brain active.

## Layout Design

The game starts with a container box that serves two purposes:

1. Explaining the rules of the game.
2. Requesting the user to input their name in a form.

Once the user inputs their name, if they win the game, it will be displayed on the ScoreBoard at the end.

## Desktop Layout Images

![Main Page Layout](../finalfantasy/validator-images/Main%20Page.PNG)
![Running Out of Time Layout](../finalfantasy/validator-images/Runningtime.PNG)
![Winners Layout](../finalfantasy/validator-images/winner.PNG)
![Game Over Layout](../finalfantasy/validator-images/gameover.PNG)

## Mobile Layout Images

![Main Page Layout](../finalfantasy/validator-images/mainpagemobileview.PNG)
![Gameplay Layout](../finalfantasy/validator-images/gameplaymobileview.PNG)
![End Screen Layout](../finalfantasy/validator-images/gameovermobileview.PNG)

## Game Rules

The game begins as soon as the player hits the start button. A timer is set and the countdown begins. The objective of the game is to match all cards before the timer runs out. If the time is over and the player has not matched all cards, it's a Game Over.

## Features

The main page of the game features a Start Up form that explains the rules of the game and sets the goal.

Players are required to input their name in a provided field. This name will be displayed on the scoreboard throughout the game.

To win, players must match all cards within a 90-second timeframe. Their name will be displayed on the scoreboard, where they can strive to beat other players or improve their own best performance.

If a player is unable to match all cards within the 90-second timeframe, it's game over.

Each new round features a random shuffle of the cards.

The background of the Start-up field features an image from Final Fantasy. Once the start button is pressed, the cards are displayed back-faced, showing another Final Fantasy image, and the countdown timer starts. That's when the adventure begins - 90 seconds to find and match all Final Fantasy themed images!

The chosen fonts for the game are Kavon, [from Sorkintype](https://www.sorkintype.com), and 'Courier New', Courier, monospace.

The game also features sound effects for various events such as flipping the cards, matching cards, running out of time, and winning/losing the game. The Flip, Unflip, and Success sounds were imported from [@vsafonova's GitHub](https://github.com/vsafonova/memory-card-game). The [Winning Sound](https://soundboardguy.com/sounds/final-fantasy-7-victory-theme-mp3/#google_vignette) and [Game Over](https://pixabay.com/sound-effects/search/game-over/) sound were sourced from external websites.

## Unfixed Bugs

No unfixed bugs (or any bug) were found in the game.

## Deployment

Deploying Indieverse to GitHub was a challenging yet rewarding journey. As a first-time GitHub user, I encountered some hurdles, but the learning process was invaluable.

### Steps to Deploy

1. **Linking Visual Studio Code to GitHub:**
   - To initiate the deployment process, I first linked my Visual Studio Code directory to GitHub.
   - Created a repository on GitHub to host the Indieverse project.

2. **Adjusting Branch for Deployment:**
   - As part of the deployment setup, I had to adjust the branch settings.
   - Followed the steps provided in the Visual Studio Code documentation: [Intro to Git - Publish local repository to GitHub](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#:~:text=Publish%20local%20repository%20to%20GitHub&text=Use%20the%20Publish%20to%20GitHub,code%20to%20the%20remote%20repository.)

3. **GitHub Pages Deployment:**
   - Deploying to GitHub Pages involved navigating to the Settings tab in the GitHub repository.
   - From the source section drop-down menu, I selected the Main Branch.
   - The Main branch selection triggered an automatic refresh, and a detailed ribbon display confirmed the successful deployment.

### Live Content

The live version of Indieverse is accessible

## Credits

### Code Creation

This project was inspired by and used the code from [@vsafonova](https://github.com/vsafonova/memory-card-game) as a template. The code was adapted to fit the layout of my Final Fantasy Memory-Game. @vsafonova's creation was instrumental in my understanding of how to create a mini-game in JavaScript from scratch.

### Websites and Resources Used

The following websites and resources were used to assist in the creation of the webpage and mini-game, including sourcing images and conducting research to understand the steps taken, errors encountered, and trials conducted during the process:

- [Learn Vanilla JavaScript Memory Game Tutorial](https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw)
- [Adding a countdown timer to the game](https://subscription.packtpub.com/book/game-development/9781849695466/1/ch01lvl1sec21/adding-a-countdown-timer-to-the-game)
- [JavaScript Memory Game: Need to add congrats message at the end of game](https://stackoverflow.com/questions/54171904/javascript-memory-game-need-to-add-congrats-message-at-the-end-of-game)
- [Adding time counter to my memory game script](https://stackoverflow.com/questions/42007631/adding-time-counter-to-my-memory-game-script)
- [JavaScript Card Memory Game: Card shuffling function](https://stackoverflow.com/questions/47768146/javascript-card-memory-game-card-shuffling-function)
- [How to randomize (shuffle) a JavaScript array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
- [JavaScript Introduction - W3Schools](https://www.w3schools.com/js/js_intro.asp)
- [2D breakout game using Phaser - MDN](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
- [Codecademy Forum Discussion](https://www.codecademy.com/forum_questions/52d0c35b8c1ccc0daf0003e6)
- [Quora Discussion on JavaScript Start and Stop Button]( https://www.quora.com/What-is-the-code-to-create-a-start-and-stop-button-using-JavaScript-on-a-web-page)
- [Bootstrap Get Started - W3Schools](https://www.w3schools.com/bootstrap/bootstrap_get_started.asp)
- [Finding Area Width - BU Tech](https://www.bu.edu/tech/services/cccs/websites/www/wordpress/how-to/find-area-width/)
- [Adding a new project to GitHub using VS Code](https://stackoverflow.com/questions/46877667/how-to-add-a-new-project-to-github-using-vs-code)  

### Images

The images used in the game were sourced from the following locations:

- [Front Face Images](https://www.reddit.com/r/FinalFantasy/comments/urj4k4/the_quest_to_make_icons_of_all_the_final_fantasy/)
- [Back Face Image](https://images.app.goo.gl/hhEyD5vYZfScGRUm8)
- [Start-up Box Image](https://www.desktopbackground.org/wallpaper/final-fantasy-vii-10th-anniversary-logo-by-raileysxerilyasrx-on-501796)

### Sounds

The sounds used in the game were sourced from the following locations:

- [Winning Sound](https://soundboardguy.com/sounds/final-fantasy-7-victory-theme-mp3/#google_vignette)
- [Game Over](https://pixabay.com/sound-effects/search/game-over/) sound were sourced from external websites.
- [Flipping the cards, matching cards, running out of time, Success' sounds were imported from @vsafonova's GitHub](https://github.com/vsafonova/memory-card-game)

### Favicon

The favicon used was created and generated from the following location:

- [Favicon](https://favicon.io/)

## Validator

### HTML

![HTML](../validator-images/htmlvalidator.PNG)

### CSS

![CSS](../validator-images/cssvalidator.PNG)

### JavaScript

![JavaScript1](../validator-images/javascriptvalidator.PNG)
![JavaScript2](../validator-images/javascriptvalidator2.PNG)

## Lighthouse

### Desktop

![Cards Page Snapshot](../finalfantasy/validator-images/cardspagelighthouse.PNG)
![Main Page Snapshot](../finalfantasy/validator-images/mainpagesnapshotlighthouse.PNG)
![Main Page Navigation](../finalfantasy/validator-images/memorygamelighthouse.PNG)
![TimeSpan](../finalfantasy/validator-images/timespanlighthouse.PNG)

### Mobile

![Main Page Navigation](../finalfantasy/validator-images/memorygamemobile.PNG)
![Main Page Snapshot](../finalfantasy/validator-images/snapshotmobile.PNG)
![Cards Page Snapshot](../finalfantasy/validator-images/cardssnapshotmobile.PNG)
![Timespan](../finalfantasy/validator-images/timespanmobile.PNG)
