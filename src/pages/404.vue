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


<style>
.page404 {
    padding: auto 0;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>