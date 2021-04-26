<template>
    <button @click="playClick"><slot></slot></button>
</template>

<script setup>
import { playClick } from '../../sounds'
</script>

<style></style>
