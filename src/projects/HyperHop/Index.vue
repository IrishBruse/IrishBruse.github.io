<template>
    <h1 class="text-center">{{ props.project.title }}</h1>

    <VideoDescription :video="props.project.video">
        <div class="text-justify">
            <h3>Made by me and <a href="https://www.joshvanetten.com/">Josh Van Etten</a></h3>
            <p>
                We released this game on both android and ios. It was a great project to learn the difficulties of managing a live product and dealing with bug
                reports, issues, marketing and feature requests from the people who downloaded our app. This helped me learn what parts of a project need to be
                prioritised.
            </p>
        </div>
    </VideoDescription>

    <h2 class="text-center">Screenshots</h2>

    <Row :columns="12" :gutter="24">
        <Col :lg="4" :md="6" :xs="12">
            <ModalImage :src="loadProjectImage('Screenshot1.jpg', project.title)" />
            <p class="imageDescription">(Gameplay)</p>
        </Col>
        <Col :lg="4" :md="6" :xs="12">
            <ModalImage :src="loadProjectImage('Screenshot2.png', project.title)" />
            <p class="imageDescription">(Banner)</p>
        </Col>
        <Col :lg="4" :md="6" :xs="12">
            <ModalImage :src="loadProjectImage('Screenshot3.jpg', project.title)" />
            <p class="imageDescription">(Gameplay)</p>
        </Col>
    </Row>
</template>

<script setup>
import VideoDescription from "@/components/VideoDescription.vue";
import { defineProps, onBeforeUnmount, ref } from "vue";
import { loadProjectImage } from "../CommonProject.js";

const props = defineProps({
    project: Object,
});

const unity = ref(null);
const showHyperHop = ref(false);
var inst;

onBeforeUnmount(() => {
    inst.Quit(function () {
        inst = null;
    });
});
</script>

<style >
.hyperhopPlayButton {
    width: 100%;
    position: relative;
    display: block;
}

.hyperhopPlayButton button {
    margin: 1rem auto;
    display: block;
}

.gameViewport {
    padding: 0 0 2rem;
    z-index: 100;
    position: fixed;
    inset: 0;
}

.game {
    width: fit-content;
    margin: 0 auto;
    max-width: 540px;
    max-height: 960px;
    background-color: #202020;
}

.gameCanvas {
    height: 100vh;
}

.closeButton {
    position: fixed;
    border: 0 none;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    z-index: 1000;
}
</style>