<template>
    <h1>{{ props.project.title }}</h1>

    <VideoDescription :video="props.project.video">
        <div class="text-justify">
            This is a implementation of the <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> cellular automata it
            helped me learn how to handle camera matrix's in monogame and how to handle an infinite world for the simulation
        </div>
    </VideoDescription>
</template>

<script setup>
import VideoDescription from "@/components/VideoDescription.vue";
import { defineProps } from "vue";

const props = defineProps({
    project: Object,
});
</script>

<style>
</style>