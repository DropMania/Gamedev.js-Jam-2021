# Gamedev.js-Jam-2021

Gamedev.js Jam 2021 #gamedevjs

# Theme is: Mirror

## Brainstorming:

-   Two players have to walk the same path
-   Mirrored Jump n Run
-   Image comparsion

## Idea:

-   two or more players
-   you all have two draw the same word
-   if all your images compared are over a specific percentage you will live
-   if the average percentage of all your images compared is too low, you lose a life
-   3 lifes
-   ssim.js <- image comparer

## Todos:

-   [ ] create Vue 3 app with Vite
-   [ ] create nodejs express server
-   [ ] add socket.io to the server
-   [ ] create game with id
-   [ ] everybody can join the game via url
-   [ ] game connection stores in localStorage
-   [ ] server picks random word from a wordlist and client shows the word to everybody
-   [ ] implement draw canvas
-   [ ] server compares every image and calculates an average percentage of their equality
-   [ ] decide if the percentage is high enough
    -   if not they lose a life
    -   if it is they continue and score a point
-   [ ] show score at the end
