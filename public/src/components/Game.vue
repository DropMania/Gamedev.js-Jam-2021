<template>
    <div class="game">
        <div class="topSection">
            <div class="lifes">
                <img
                    src="/src/assets/img/heart.png"
                    v-for="i in +stores.game.lifes"
                    :key="i"
                    :alt="i"
                />
            </div>
            <TimeBar class="timer" />
        </div>

        <div class="gameSection">
            <div v-if="stores.game.state == 'DISPLAY'">
                <Display />
            </div>
            <div v-if="stores.game.state == 'NONE'">
                <GameConfig />
            </div>
            <div v-if="stores.game.state == 'COMPARE'">
                <Compare />
            </div>
            <div v-if="stores.game.state == 'DRAW'">
                <Draw />
            </div>
            <div v-if="stores.game.state == 'LOST'">Verloren :(</div>
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
import Display from './states/Display.vue'
import Draw from './states/Draw.vue'
import Compare from './states/Compare.vue'
import TimeBar from './TimeBar.vue'
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

<style lang="scss">
@import '../main.scss';
.game {
    height: 98%;
    width: 83.8%;
    display: flex;
    justify-content: center;
    align-content: center;
    background: url(../assets/img/game-bg.png);
    background-size: cover;
    flex-direction: column;
    .topSection {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 10%;
        .lifes {
            flex: 1;
            display: flex;
            gap: 10px;
            justify-content: center;
            img {
                width: 3rem;
                height: 3rem;
            }
        }
    }
    .gameSection {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 90%;
        div {
            width: 100%;
        }
    }
}
</style>
