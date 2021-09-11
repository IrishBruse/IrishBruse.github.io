<template>
    <ProjectHeader :project="props.project">
        Space Blast is a small simple space shooter game made with Kenney assets for android. It was made in unity and it is an endless game in where you try
        and get the highest score before you die. Along the way you will collect power ups to temporarily increse the fire rate or replenish a heart.
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