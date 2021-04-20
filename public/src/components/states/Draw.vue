<template>
    <div>
        <div class="med-title">{{ stores.game.currentWord }}</div>
        <div class="draw">
            <div
                class="drawer"
                v-for="player in stores.game.players"
                :key="player.id"
            >
                <PixelDrawer
                    ref="drawer"
                    v-if="stores.player.sort == player.sort"
                    mine
                    :player="player"
                />
                <PixelDrawer v-else :player="player" />
            </div>
        </div>
        <div class="spacer1" />
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
@import '../../main.scss';
.draw {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
    }
}
</style>
