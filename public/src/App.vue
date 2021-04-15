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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
