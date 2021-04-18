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
            Max Players:
            <input
                type="number"
                v-if="stores.player.host"
                :value="stores.game.maxPlayers"
                @input="setMaxPlayers"
                min="2"
                @keydown="typeNumber"
            />
            <span v-else>
                {{ stores.game.maxPlayers }}
            </span>
        </div>
        <textarea ref="linkURL" v-model="link" class="copytext"> </textarea>
        <button
            v-if="stores.player.host && !stores.game.started"
            @click="copyLink()"
            class="config-item"
        >
            <span class="emoji">📎</span> Copy link!
        </button>
        <button
            v-if="stores.player.host && !stores.game.started"
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
function setMaxPlayers(e) {
    socket.emit('set_config', route.params.id, {
        maxPlayers: e.target.value
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
}
</script>

<style lang="scss">
@import '../main.scss';
</style>
