<template >
    <div class="viewport">
        <component :is="comp" :project="currentProject" />
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Projects from "@/assets/projects/projects.json";
import { defineAsyncComponent } from "@vue/runtime-core";

const route = useRoute();
var currentProject = Projects.find((project) => project.title == route.params.project);
const isCustom = currentProject.flags.includes("useCustomPage");

var comp;
if (isCustom) {
    comp = defineAsyncComponent(() => import("@/assets/projects/" + currentProject.title + "/index.vue"));
} else {
    comp = defineAsyncComponent(() => import("./DefaultProjectPage.vue"));
}
</script>

<style>
</style>
