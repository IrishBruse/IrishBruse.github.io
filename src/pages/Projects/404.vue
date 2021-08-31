<template>
    <div class="page404 text-center">
        <h1>Page not found</h1>
        <a @click="back">Back to safety</a>
    </div>
</template>

<script setup>
const { useRouter } = require("vue-router");

const router = useRouter();

const back = () => {
    router.back();
};
</script>