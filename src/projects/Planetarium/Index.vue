<template>
    <ProjectHeader :project="props.project">
        Planetarium was the first time I participated in a game jam I had never been constrained to such a short time to make a game.It really helped me see
        what my strengths and weakness were i also had to learn to make music for this game it was a great learning experience even if the game didnt come out
        how i wanted it to.
    </ProjectHeader>

    <ProjectScreenshots :project="props.project"> </ProjectScreenshots>
</template>

<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots.vue";
import { loadProjectImage } from "../CommonProject.js";

const props = defineProps({
    project: Object,
});

const localDate = new Date(props.project.date).toLocaleDateString();
</script>