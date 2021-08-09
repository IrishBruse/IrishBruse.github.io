<template>
    <Navbar />
    <div class="pageBackground" />

    <router-view v-slot="{ Component }">
        <transition name="route">
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
};
</script>

<style>
.pageBackground,
.page {
    width: 93%;
    margin: 0 2.5%;
    padding: 0 1%;
}

.pageBackground {
    height: 200vh;
    position: fixed;
    top: 0;
    background-color: var(--accent-background);
    z-index: -10;
}

@media only screen and (min-width: 992px) {
    .pageBackground,
    .page {
        margin: 0 12.5%;
        width: 72%;
    }
}

/* route transitions */
.route-enter-from {
    position: absolute;
    transform: translateX(100vw);
}

.route-enter-active {
    transition: all 0.5s ease-out;
}

.route-leave-to {
    position: absolute;
    transform: translateX(-100vw);
}

.route-leave-active {
    transition: all 0.5s ease-out;
}
</style>
