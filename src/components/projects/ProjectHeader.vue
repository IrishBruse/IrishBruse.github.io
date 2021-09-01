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

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function convertDate(date_str) {
    var temp_date = date_str.split("/");
    return temp_date[0] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[2];
}

const localDate = convertDate(new Date(props.project.date).toLocaleDateString());
</script>
