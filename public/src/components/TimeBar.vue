<template>
    <div class="timer">
        <div>
            <div>
                <img src="/src/assets/img/timebar_empty.png" />
            </div>
            <div
                :style="{
                    width:
                        (stores.game.timeLeft / stores.game.defaultTime) * 100 +
                        '%',
                    overflow: 'hidden'
                }"
            >
                <img src="/src/assets/img/timebar_full.png" />
            </div>
            <div style="margin-top: 7px">{{ stores.game.timeLeft }}s</div>
        </div>
    </div>
</template>

<script setup>
import stores from '../stores'
</script>

<style lang="scss">
@import '../main.scss';
.timer {
    flex: 1;
    justify-content: center;
    text-align: center;

    div {
        width: 600px;
        height: 60px;
        position: relative;
        div {
            position: absolute;
            transition: ease-in 1s;
            align-items: center;
            justify-content: center;
            /* display: flex; */
            img {
                height: 2.5rem;
                display: block;
            }
        }
    }
}
</style>
