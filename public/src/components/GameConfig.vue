<template>
    <div class="config">
        <div class="config-item">
            Time:
            <select v-if="stores.player.host" @input="selectTime">
                <option
                    v-for="time in timeMapping"
                    :key="time[0]"
                    :selected="stores.game.defaultTime == time[1]"
                    :value="time[1]"
                >
                    {{ time[0] }}
                </option>
            </select>
            <span v-else v-for="time in timeMapping" :key="time[0]">
                {{ stores.game.defaultTime == time[1] ? time[0] : '' }}
            </span>
        </div>
        <div class="config-item">
            Lifes:
            <input
                type="number"
                v-if="stores.player.host"
                :value="stores.game.lifes"
                @input="setLifes"
                min="1"
                max="10"
                @keydown="typeNumber"
            />
            <span v-else>
                {{ stores.game.lifes }}
            </span>
        </div>
        <textarea ref="linkURL" v-model="link" class="copytext"> </textarea>

        <button @click="copyLink()" class="config-item">Copy link!</button>
        <button
            v-if="stores.player.host"
            :disabled="stores.game.players.length < stores.game.minPlayers"
            @click="startGame()"
            class="config-item"
            :title="
                stores.game.players.length < stores.game.minPlayers
                    ? 'you need at least 2 players'
                    : ''
            "
        >
            Start!
        </button>
    </div>
</template>

<script setup>
import { socket } from '../socket'
import { useRoute } from 'vue-router'
import { onMounted, watch, ref } from 'vue'
import router from '../router'
import stores from '../stores'
const route = useRoute()
const linkURL = ref('')
let link = location.href
const timeMapping = [
    ['Long', 60],
    ['Normal', 30],
    ['Short', 20],
    ['Super quick', 10]
]
function selectTime(e) {
    socket.emit('set_config', route.params.id, {
        defaultTime: e.target.value,
        timeLeft: e.target.value
    })
}
function setLifes(e) {
    socket.emit('set_config', route.params.id, {
        lifes: e.target.value
    })
}
function typeNumber(e) {
    e.preventDefault()
}
function startGame() {
    socket.emit('start_game', route.params.id)
}
function copyLink() {
    linkURL.value.focus()
    linkURL.value.select()
    linkURL.value.setSelectionRange(0, 99999)
    document.execCommand('copy')
    linkURL.value.blur()
}
</script>

<style lang="scss">
@import '../main.scss';
.config {
    display: flex;
    flex-direction: column;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .config-item {
        width: 20rem;
    }
}
.copytext {
    position: absolute;
    top: -90000px;
}
</style>
