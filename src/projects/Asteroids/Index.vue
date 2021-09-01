<template>
    <ProjectHeader :project="props.project">
        This was a quick game i made to test out the Monogame Framework. Its just a simple clone of the origonal asteroid game the asteroids in this one have
        randomly generated sprites.
    </ProjectHeader>

    <ProjectScreenshots :project="props.project"> </ProjectScreenshots>
</template>

<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots.vue";
import { defineProps } from "vue";

const props = defineProps({
    project: Object,
});
</script>
