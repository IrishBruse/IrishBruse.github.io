<template>
    <h1 class="text-center">Hyper Hop</h1>
    <div class="gameViewport">
        <div class="game">
            <canvas class="gameCanvas" width="540" height="960" ref="unity"></canvas>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { createUnityInstance } from "@/assets/Unity.js";

export default {
    setup() {
        const unity = ref(null);
        let inst;
        onMounted(() => {
            createUnityInstance(unity.value, {
                dataUrl: location.origin + "/Build/web.data",
                frameworkUrl: "/Build/web.framework.js",
                codeUrl: location.origin + "/Build/web.wasm",
                streamingAssetsUrl: "StreamingAssets",
                companyName: "Blue Squash Studios",
                productName: "Hyper Hop",
                productVersion: "2.2.1",
                // matchWebGLToCanvasSize: true,
            }).then((a) => (inst = a));
        });

        onUnmounted(() => {
            inst.Quit(function () {
                console.log("done!");
            });
            inst = null;
        });

        return { unity };
    },
};
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
</style>
