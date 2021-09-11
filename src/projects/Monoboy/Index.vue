<template>
    <ProjectHeader :project="props.project">
        Monoboy is a Gameboy emulator written in C#. It was made to help me learn bitwise operations and the more lower level parts of C#. I learned alot about
        project management as this was the biggest piece of software i had made at the time. I also improved my ability to structure code in a way that was
        easier to come back to and maintain.
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
