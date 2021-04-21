<template>
    <div>
        All public Games:
        <div v-for="game in games" :key="game[0]">
            <button @click="enter(game[0])">/{{ game[0] }}</button>
        </div>
    </div>
</template>

<script setup>
import { socket } from '../socket'
import { onMounted, watch, ref } from 'vue'
import router from '../router'
let games = ref([])
onMounted(() => {
    socket.emit('request_public_games', (publicGames) => {
        console.log(publicGames)
        games.value = publicGames
    })
})

function enter(gameId) {
    router.push({
        name: `Enter`,
        params: { id: gameId }
    })
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
