<template>
    <ProjectHeader :project="props.project">
        This is a implementation of the <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> cellular automata it helped me
        learn how to handle camera matrix's in monogame and how to handle an infinite world for the simulation
    </ProjectHeader>

    <ProjectScreenshots :project="props.project" />
</template>

<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots.vue";
import { defineProps } from "vue";

const props = defineProps({
    project: Object,
});
</script>
