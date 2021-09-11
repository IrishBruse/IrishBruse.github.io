<template>
    <ProjectHeader :project="props.project">
        TopDownShooter is one of the very first games I made in XNA back in around 2014 I had made games in GameMaker Studio 1 before then but most were just
        following tutorials this was the very first game I made on my own with my own assets and everything unfortunately over time i lost the latest version of
        the game that contained a big boss zombie.
    </ProjectHeader>

    <ProjectScreenshots :project="props.project" />
</template>

<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots.vue";

const props = defineProps({
    project: Object,
});
</script>