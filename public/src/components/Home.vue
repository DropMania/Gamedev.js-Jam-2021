<template>
    <button @click="createGame()">Create Game</button>
</template>

<script setup>
import { socket } from '../socket'
import router from '../router'

function createGame() {
    socket.emit(
        'createGame',
        {
            maxPlayers: 2
        },
        (data) => {
            router.push({
                name: `Enter`,
                params: { host: true, id: data.gameId }
            })
        }
    )
}
</script>

<style></style>
