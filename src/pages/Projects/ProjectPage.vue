<template >
    <div class="viewport">
        <div v-if="isCustom">
            <component :is="comp" />
        </div>
        <div v-else>test</div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Projects from "@/assets/projects/projects.json";
import { defineAsyncComponent } from "@vue/runtime-core";

const route = useRoute();
var currentProject = Projects.find((project) => project.title == route.params.project);
const isCustom = currentProject.flags.includes("useCustomPage");
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
