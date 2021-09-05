<template>
    <div v-if="showIfNotLauncher">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const showIfNotLauncher = ref(false);

onMounted(() => {
    const route = useRoute();
    setTimeout(() => {
        showIfNotLauncher.value = route.query.launcher != "true";
    }, 1);
});
</script>
