<template>
    <HideInLauncher>
        <div class="relative projectTitleContainer">
            <h1 class="text-center p0">
                {{ props.project.title }}
            </h1>
            <time :title="localDate" datetime="props.project.date" class="absolute startedOn">Started on {{ localDate }}</time>
        </div>
    </HideInLauncher>

    <Row :columns="12" :gutter="24" class="videoDescriptionContainer">
        <Col :lg="6" :md="6" :xs="12">
            <div class="videoContainer">
                <iframe v-if="props.project.video!=null" class="video" :src="'https://www.youtube.com/embed/' + props.project.video" frameborder="0" allowfullscreen />
                <img v-else :src="loadProjectImage('Thumbnail.png', props.project.title)">
            </div>
        </Col>
        <Col :lg="6" :md="6" :xs="12" class="videoDescription">
            <div class="text-justify">
                <slot>404 no discription found!</slot>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import { loadProjectImage } from "@/projects/CommonProject.js";
import { defineProps } from "vue"; 

const props = defineProps({
    project: Object,
});

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function convertDate(date) {
    var temp_date = date.split("/");
    return temp_date[0] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[2];
}

const localDate = convertDate(new Date(props.project.date).toLocaleDateString())
</script>



<style>
.videoContainer {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    background-color: var(--background);
}

.video {
    position: absolute;
    background-color: var(--background);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.videoDescription * {
    font-size: 1.25rem;
}

.videoDescriptionContainer {
    padding: 2rem 0 0 0;
}
</style>
