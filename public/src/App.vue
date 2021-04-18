<template>
    <router-view />
</template>

<script>
if (localStorage.getItem('runningGames') == null) {
    localStorage.setItem('runningGames', '[]')
}

let runningGames = JSON.parse(localStorage.getItem('runningGames'))
if (runningGames.length > 5) {
    runningGames.splice(0, runningGames.length - 5)
    localStorage.setItem('runningGames', JSON.stringify(runningGames))
}
</script>

<style lang="scss">
@import './main.scss';
* {
    margin: 0px;
    padding: 0px;
    font-family: $font-primary;
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 5px 5px black;
}
html {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
body {
    background: url(./assets/img/bg.png);
    background-size: cover;
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
}

button {
    font-family: $font-title;
    background: $bg-primary;
    outline: none;
    border: solid black 5px;
    padding: 0.5rem;
    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
        &:active {
            border: solid black 3px;
        }
    }
}

.big-title {
    font-family: $font-title;
    font-size: 5rem;
}
.sub-title {
    font-family: $font-primary;
    font-size: 2rem;
}

input[type='text'] {
    background: $bg-primary;
    outline: none;
    border: solid black 5px;
    padding: 0.3rem;
    &::placeholder {
        color: #5d38bd;
    }
}

.spacer1 {
    margin-top: 1rem;
}
.spacer2 {
    margin-top: 2rem;
}
.spacer3 {
    margin-top: 3rem;
}
.spacer4 {
    margin-top: 4rem;
}
.spacer5 {
    margin-top: 5rem;
}
.spacer6 {
    margin-top: 6rem;
}
</style>
