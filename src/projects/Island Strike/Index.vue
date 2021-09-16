<template>
    <ProjectHeader :project="props.project">
        Island Strike is a game I made for the <a href="https://itch.io/jam/kenney-jam-2021">Kenney Game Jam 2021</a> I am very happy with how this game turned out. It came 46th out of 366th.
        It was a big improvement over my previous game jam as i had way more experience making games and knew what to expect from a Game jam thanks to my previouse Ludum dare.
        This was a great challange to see how well I work under pressure and under a time constraint.
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