<template>
    <HideInLauncher>
        <Navbar />
    </HideInLauncher>

    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName">
            <!-- key forces transition on viewport also viewport fixes problem with multi root comps -->
            <div
                :key="route.path"
                class="viewport"
            >
                <component :is="Component" />
            </div>
        </transition>
    </router-view>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();

router.afterEach((to, from) => {
    if (from.href != undefined && from.meta.index != -1) {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;

        if (toDepth == fromDepth) {
            to.meta.transitionName = to.meta.index < from.meta.index ? "slide-right" : "slide-left";
        } else {
            to.meta.transitionName = toDepth < fromDepth ? "slide-up" : "slide-down";
        }
    }
    var body = document.getElementsByTagName("body")[0];

    if (to.query.launcher == "true") {
        document.addEventListener("contextmenu", (event) => event.preventDefault());
        body.onmousedown = () => {
            return false;
        };
        body.onselectstart = () => {
            return false;
        };
    }

    if (to.query.theme != null) {
        body.classList.toggle("light", to.query.theme == "light");
    }
});
</script>

<style>
#app {
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
}

.viewport {
    flex-grow: 1;

    background-color: var(--accent-background);
    width: 93vw;
    margin: 0 2%;
    padding: 2rem 1.5%;

    transition: height 1s;

}

@media only screen and (min-width: 992px) {
    .viewport {
        width: 75vw;
        margin: 0 calc(12.5% - 2rem);
    }
}

body {
    overflow-x: hidden;
}

/* route transitions */
.slide-right-enter-from {
    transform: translateX(-100vw);
}

.slide-right-leave-to {
    transform: translateX(100vw);
}

/* route transitions */
.slide-left-enter-from {
    transform: translateX(100vw);
}

.slide-left-leave-to {
    transform: translateX(-100vw);
}

.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active {
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
    top: var(--navbarHeight);
    position: absolute;
    height: 100vh;
}

.slide-left-leave-active,
.slide-right-enter {
    top: var(--navbarHeight);
    position: absolute;
    height: 100vh;
}

/* route transitions */
.slide-up-enter-from {
    transform: translateY(-100vw);
}

.slide-up-leave-to {
    transform: translateY(100vw);
}

/* route transitions */
.slide-down-enter-from {
    transform: translateY(100vw);
}

.slide-down-leave-to {
    transform: translateY(-100vw);
}

.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active {
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-down-enter,
.slide-up-leave-active {
    top: var(--navbarHeight);
    position: absolute;
}

.slide-down-leave-active,
.slide-up-enter {
    top: var(--navbarHeight);
    position: absolute;
}
</style>
