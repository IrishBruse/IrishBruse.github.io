<template>
    <h1 class="text-center">Hyper Hop</h1>
    <div class="gameViewport">
        <div class="game">
            <canvas class="gameCanvas" width="540" ref="unity" height="960"></canvas>
        </div>
    </div>
    <div class="text-center discription">
        <h2>Made by me and Josh Van Etten(Artist)</h2>
        <p class="text-justify">
            We released this game on both android and ios. It was a great project to learn the difficulties of managing a live product and dealing with bug
            reports, issues, marketing and feature requests from the people who downloaded our app. This helped me learn what parts of a project need focusing
            on first and what ones can be left.
        </p>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { createUnityInstance } from "@/assets/Unity.js";

const unity = ref(null);
const inst = ref(null);

onMounted(() => {
    createUnityInstance(unity.value, {
        dataUrl: location.origin + "/Build/web.data",
        frameworkUrl: "/Build/web.framework.js",
        codeUrl: location.origin + "/Build/web.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Blue Squash Studios",
        productName: "Hyper Hop",
        productVersion: "2.2.1",
    }).then((a) => (inst.value = a));
});

onBeforeUnmount(() => {
    inst.value.Quit(function () {
        console.log("done!");
    });

    inst.value = null;
});
</script>

<style>
.gameViewport {
    padding: 0 0 2rem;
}

.game {
    width: fit-content;
    margin: 0 auto;
    max-width: 540px;
    max-height: 960px;
    background-color: #202020;
}

.gameCanvas {
    height: 80vh;
}

.discription {
    padding: 0 0 4rem 0;
    width: 100%;
}
@media only screen and (min-width: 992px) {
    .discription {
        margin: 0rem auto;
        width: 60%;
    }
}
</style>
