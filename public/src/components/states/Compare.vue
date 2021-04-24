<template>
    <div class="compare">
        <div class="med-title">{{ stores.game.currentCompare }}%</div>
        <div class="images">
            <div class="image" v-for="image in rImg" :key="image[0]">
                <img
                    class="mirror_line"
                    src="/src/assets/img/mirror_line.png"
                />
                <img class="drawing" :src="image[1]" />
                <div>
                    {{ getName(image[0]) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import stores from '../../stores'
import { onMounted, watch, ref, computed } from 'vue'
let allPlayers = stores.game.players
let rImg = computed(() => {
    return stores.images.sort(
        (a, b) =>
            allPlayers.find((p) => p.id == a[0]).sort -
            allPlayers.find((p) => p.id == b[0]).sort
    )
})
function getName(playerId) {
    return allPlayers.find((p) => p.id == playerId).name
}
</script>

<style lang="scss">
@import '../../main.scss';
.compare {
    width: 100%;
    .images {
        display: flex;
        justify-content: center;
        align-items: center;

        .image {
            width: 647px;
            height: 708px;
            background: url('/src/assets/img/frame.png');
            background-size: 647px;
            background-repeat: no-repeat;
            background-position-x: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .mirror_line {
                position: absolute;
                width: 512px;
                height: 512px;
                pointer-events: none;
                margin-top: -19px;
            }
            .drawing {
                background-color: #fff;
                width: 512px;
                height: 512px;
            }
        }
    }
}
</style>
