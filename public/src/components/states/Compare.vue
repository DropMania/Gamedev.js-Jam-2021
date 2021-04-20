<template>
    <div class="compare">
        {{ stores.game.currentCompare }}%
        <div class="images">
            <div class="image" v-for="image in rImg" :key="image[0].id">
                <img :src="image[1]" />
                {{ image[0].name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import stores from '../../stores'
import { onMounted, watch, ref, computed } from 'vue'
let rImg = computed(() => {
    return stores.images.reverse()
})
</script>

<style lang="scss">
@import '../../main.scss';
.compare {
    width: 100%;
    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow: auto;
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

            img {
                background-color: #d4d4d4;
                width: 512px;
                height: 512px;
            }
        }
    }
}
</style>
