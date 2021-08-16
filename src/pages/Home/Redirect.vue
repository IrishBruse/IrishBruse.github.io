<template>
    <h1 style="text-align: center">Redirecting...</h1>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
router.push("home");
</script>

<style></style>
