<template>
    <h1>{{ props.project.title }}</h1>

    <VideoDescription :video="props.project.video">
        <div class="text-justify">
            This was a quick game i made to test out the Monogame Framework. Its just a simple clone of the origonal asteroid game the asteroids in this one
            have randomly generated sprites.
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