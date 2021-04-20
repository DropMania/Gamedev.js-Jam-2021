<template>
    <div>
        The Word you need to draw is:<br />
        <div class="big-title">{{ stores.game.currentWord }}</div>
        <div class="spacer6" />
    </div>
</template>

<script setup>
import stores from '../../stores'
</script>

<style lang="scss">
@import url(../../main.scss);
</style>
