<template>
    <h1>{{ props.project.title }}</h1>

    <VideoDescription :video="props.project.video">
        <div class="text-justify">
            Monoboy is a Gameboy emulator written in C# it was written to help me get better and learn bit wise operations and the more lower level parts of c#.
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

<style>
</style>