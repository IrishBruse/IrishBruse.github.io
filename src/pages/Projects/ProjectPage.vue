<template >
    <component :is="comp" :project="currentProject" />
</template>

<script setup>
import { useRoute } from "vue-router";
import Projects from "@/projects/projects.json";
import { defineAsyncComponent } from "@vue/runtime-core";

const route = useRoute();
const currentProject = Projects.find((project) => project.title == route.params.project);

var comp;
if (currentProject != null) {
    comp = defineAsyncComponent(() => import("@/projects/" + currentProject.title + "/Index.vue"));
} else {
    comp = defineAsyncComponent(() => import("./404.vue"));
}
</script>

<style>
.startedOn {
    right: 0;
    bottom: 1rem;
    color: var(--invert-accent-background);
}

.projectTitleContainer {
    padding: 0;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
}
</style>
