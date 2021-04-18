<template>
    <div class="enter">
        <div class="sub-title">ENTER YOUR NAME:</div>
        <div class="spacer2" />
        <input
            type="text"
            v-model="name"
            @keyup="nameBoxEnter"
            placeholder="NAME..."
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'
import { socket } from '../socket'
import shortid from 'shortid'
import stores from '../stores'
let route = useRoute()
let name = ref('')
let runningGames = JSON.parse(localStorage.getItem('runningGames'))

runningGames.forEach((game) => {
    if (game.gameId == route.params.id) {
        router.push({
            name: `Game`,
            params: {
                playerId: game.playerId,
                id: route.params.id,
                fromEnter: true
            }
        })
    }
})

function nameBoxEnter(e) {
    if (e.key == 'Enter') {
        console.log('test')
        enterGame()
    }
}

function enterGame() {
    socket.emit(
        'player_join_game',
        {
            id: shortid.generate(),
            name: name.value,
            host: route.params.host || false,
            gameId: route.params.id
        },
        (player) => {
            console.log(player)
            if (player.id) {
                runningGames.push({
                    gameId: route.params.id,
                    playerId: player.id
                })
                localStorage.setItem(
                    'runningGames',
                    JSON.stringify(runningGames)
                )
                stores.player = player
                router.push({
                    name: `Game`,
                    params: {
                        playerId: player.id,
                        id: route.params.id,
                        fromEnter: true
                    }
                })
            }
        }
    )
}
</script>

<style lang="scss">
@import '../main.scss';
.enter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
</style>
