<template>
    <div class="Home">
        <div class="big-title">MirrorMates</div>
        <div class="sub-title">ARE YOU TRUE MATES?</div>
        <div class="spacer6"></div>
        <img src="../assets/mirror_man/Sprite-0003.gif" />
        <button @click="createGame()">Create Game</button>
        <!-- <PixelDrawer ref="drawer" />
        <button @click="img">log</button> -->
        <div class="spacer6"></div>
        <div class="footer">
            <a
                href="https://github.com/DropMania/Gamedev.js-Jam-2021"
                target="_blank"
                >&copy; DropMania</a
            >
        </div>
    </div>
</template>

<script setup>
import { socket } from '../socket'
import router from '../router'
import PixelDrawer from './PixelDrawer.vue'
import { onMounted, watch, ref } from 'vue'
/* let drawer = ref(null)
onMounted(() => {
    drawer.value.setColor('255,0,0')
})
function img() {
    drawer.value.undo()
} */

function createGame() {
    socket.emit('createGame', {}, (data) => {
        router.push({
            name: `Enter`,
            params: { host: true, id: data.gameId }
        })
    })
}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.Home {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;
    flex-direction: column;
}
img {
    width: 10rem;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
}
a {
    text-decoration: none;
}
</style>
