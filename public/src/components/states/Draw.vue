<template>
    <div>
        {{ stores.game.timeLeft }}
        <PixelDrawer ref="drawer" />
    </div>
</template>

<script setup>
import { socket } from '../../socket'
import router from '../../router'
import PixelDrawer from '../PixelDrawer.vue'
import stores from '../../stores'
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute()
let drawer = ref(null)

watch(
    () => stores.game.state,
    (state, prevState) => {
        if (prevState == 'DRAW' && state == 'COMPARE' && drawer.value) {
            console.log('donedrawing')
            socket.emit('done_drawing', {
                gameId: route.params.id,
                playerId: stores.player.id,
                image: drawer.value.getBase64()
            })
        }
    }
)
</script>

<style lang="scss">
@import url(../../main.scss);
</style>
