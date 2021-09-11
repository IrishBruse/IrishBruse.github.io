<template>
    <ProjectHeader :project="props.project">
        We released this game on both android and ios. It was a great project to learn the difficulties of managing a live product and dealing with bug reports,
        issues, marketing and feature requests from the people who downloaded our app. This helped me learn what parts of a project need to be prioritised.
    </ProjectHeader>

    <h3>Made by me and Josh Van Etten</h3>

    <ProjectScreenshots :project="props.project" />
</template>

<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots.vue";

const props = defineProps({
    project: Object,
});
</script>