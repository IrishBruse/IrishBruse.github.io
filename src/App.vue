<template>
    <Navbar />

    <router-view v-slot="{ Component }">
        <transition :name="transitionName">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar,
    },
    watch: {
        $route(to, from) {
            if (from.name !== undefined) {
                this.transitionName = to.meta.index < from.meta.index ? "slide-right" : "slide-left";
            }
        },
    },
    data() {
        return {
            transitionName: "",
        };
    },
};
</script>

<style>
.page {
    background-color: var(--accent-background);
    width: 93vw;
    margin: 0 2.5%;
    padding: 0 1%;

    min-height: calc(100vh - var(--navbarHeight));
}

@media only screen and (min-width: 992px) {
    .page {
        margin: 0 12.5%;
        width: 72vw;
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
}

.slide-left-leave-active,
.slide-right-enter {
    top: var(--navbarHeight);
    position: absolute;
}
</style>
