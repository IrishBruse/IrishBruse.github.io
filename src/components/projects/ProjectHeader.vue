<template>
    <div class="relative projectTitleContainer">
        <h1 class="text-center p0">
            {{ props.project.title }}
        </h1>
        <time :title="localDate" datetime="props.project.date" class="absolute startedOn">Started on {{ localDate }}</time>
    </div>

    <VideoDescription :video="props.project.video">
        <slot></slot>
    </VideoDescription>
</template>

<script setup>
import VideoDescription from "@/components/projects/VideoDescription.vue";
import { defineProps } from "vue";

const props = defineProps({
    project: Object,
});

const localDate = new Date(props.project.date).toLocaleDateString();
</script>
