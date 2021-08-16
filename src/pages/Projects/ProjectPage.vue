<template>
    <div class="viewport">
        <component :is="comp" v-if="isCustom" />
        <div v-else>
            <div class="pageBackground" />
            <br />
            <h1 class="text-center">
                {{ projectTitle }}
            </h1>

            <div class="container">
                <div>
                    <div class="videoContainer">
                        <iframe
                            class="video"
                            :src="projectVideo"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>
                <div>
                    <Markdown class="text-justify" :source="markdownContents" />
                </div>
            </div>

            <div class="container">
                <div>
                    <a v-if="downloadLink" class="downloadButton text-center" :href="downloadLink">Download {{ projectTitle }} </a>
                </div>
                <div />
            </div>
        </div>
    </div>
</template>

<script setup>
import Markdown from "vue3-markdown-it";
import { useRoute } from "vue-router";
import Projects from "@/assets/projects/projects.json";
import { defineAsyncComponent } from "vue";

const route = useRoute();
var currentProject = Projects.find((project) => project.title == route.params.project);

const projectTitle = currentProject.title;
const projectVideo = currentProject.video;
var markdownContents;
if (currentProject.custom) {
} else {
    markdownContents = require("@/assets/projects/" + currentProject.title + "/markdown.md").default;
}
const downloadLink = currentProject.download;
const isCustom = currentProject.custom;
const comp = defineAsyncComponent(() => import("@/assets/projects/" + currentProject.title + "/index.vue"));
</script>

<style>
.videoContainer {
    position: relative;
    padding-bottom: 56.25%;
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
}

.downloadButton {
    background: var(--accent-background);
    margin: 0.75rem;
    padding: 0.75rem;

    text-decoration: none;
}
</style>
