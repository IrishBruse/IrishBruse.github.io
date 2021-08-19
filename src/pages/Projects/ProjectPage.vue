<template >
    <component :is="comp" :project="currentProject" />
</template>

<script setup>
import { useRoute } from "vue-router";
import Projects from "@/assets/projects/projects.json";
import { defineAsyncComponent } from "@vue/runtime-core";

const route = useRoute();
const currentProject = Projects.find((project) => project.title == route.params.project);
var comp;

if (currentProject != null) {
    comp = defineAsyncComponent(() => import("./pages/" + currentProject.title + ".vue"));
} else {
    comp = defineAsyncComponent(() => import("@/pages/404.vue"));
}
</script>

<style>
</style>
