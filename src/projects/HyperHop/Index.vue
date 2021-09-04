<template>
    <ProjectHeader :project="props.project">
        <h3>Made by me and <a href="https://www.joshvanetten.com/" target="_blank">Josh Van Etten</a></h3>
        <p>
            We released this game on both android and ios. It was a great project to learn the difficulties of managing a live product and dealing with bug
            reports, issues, marketing and feature requests from the people who downloaded our app. This helped me learn what parts of a project need to be
            prioritised.
        </p>
    </ProjectHeader>

    <ProjectScreenshots :project="props.project"> </ProjectScreenshots>
</template>

<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots.vue";
import { defineProps, onBeforeUnmount, ref } from "vue";
import { loadProjectImage } from "../CommonProject.js";

const props = defineProps({
    project: Object,
});

const unity = ref(null);
const showHyperHop = ref(false);
var inst;

const localDate = new Date(props.project.date).toLocaleDateString();
</script>