<template>
    <div>
        You've lost with a score of:<br />
        <div class="big-title">{{ stores.game.score }}</div>
        <div class="spacer6" />
    </div>
</template>

<script setup>
import stores from '../../stores'
</script>

<style lang="scss">
@import '../../main.scss';
</style>
