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
            this.transitionName = to.meta.index < from.meta.index ? "slide-right" : "slide-left";
        },
    },
    data() {
        return {
            transitionName: "slide-left",
        };
    },
};
</script>

<style>
.page {
    background-color: var(--accent-background);
    width: 93%;
    margin: 0 2.5%;
    padding: 0 1%;

    min-height: calc(100vh - 72px);
}

@media only screen and (min-width: 992px) {
    .page {
        margin: 0 12.5%;
        width: 72%;
    }
}

/* route transitions */
.slide-right-enter-from {
    position: absolute;
    transform: translateX(-100vw);
}

.slide-right-enter-active {
    transition: all 0.5s ease-out;
}

.slide-right-leave-to {
    position: absolute;
    transform: translateX(100vw);
}

.slide-right-leave-active {
    transition: all 0.5s ease-out;
}

/* route transitions */
.slide-left-enter-from {
    position: absolute;
    transform: translateX(100vw);
}

.slide-left-enter-active {
    transition: all 0.5s ease-out;
}

.slide-left-leave-to {
    position: absolute;
    transform: translateX(-100vw);
}

.slide-left-leave-active {
    transition: all 0.5s ease-out;
}
</style>
