<template>
    <div>
        <div class="playerSection">
            {{ stores.game.players.length }} / {{ stores.game.maxPlayers }}
            <div
                v-for="p in stores.game.players"
                :key="p.id"
                class="playerDisplay"
            >
                <div v-if="p.id == stores.player.id" class="playerMe">
                    {{ p.name }}
                    <span class="emoji" v-if="p.host">👑</span>
                </div>
                <div v-else class="playerOther">
                    {{ p.name }}
                    <span class="emoji" v-if="p.host">👑</span>
                </div>
            </div>
        </div>
        <div class="gameSection">
            <div v-if="stores.game.state == 'NONE'">
                <GameConfig />
            </div>
        </div>
    </div>
</template>

<script setup>
import { socket } from '../socket'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import router from '../router'
import stores from '../stores'
import GameConfig from './GameConfig.vue'
let route = useRoute()

onMounted(() => {
    if (!route.params.fromEnter) {
        router.push({
            name: 'Enter',
            params: {
                id: route.params.id
            }
        })
    } else {
        socket.emit('request_game', {
            gameId: route.params.id
        })
        socket.emit('request_image', {
            gameId: route.params.id
        })
    }
})
socket.on('game_updated', (game) => {
    console.log(game)
    stores.game = game
    game.players.forEach((player) => {
        if (player.id == route.params.playerId) {
            stores.player = player
        }
    })
})

socket.on('image_updated', (images) => {
    stores.images = images
})

socket.on('timer_updated', (timeLeft) => {
    console.log(timeLeft)
    stores.game.timeLeft = timeLeft
})
</script>

<style></style>
