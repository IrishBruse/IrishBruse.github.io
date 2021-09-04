<template>
    <div class="navbar noTextHighlight">
        <button class="burger icons" @click="toggleLinks()">menu</button>
        <div ref="links" class="navbarLinks">
            <router-link class="navbarLink" to="/home">
                Home
                <div class="underline" />
            </router-link>
            <router-link class="navbarLink" to="/projects">
                Projects
                <div class="underline" />
            </router-link>
            <router-link class="navbarLink" to="/about">
                About
                <div class="underline" />
            </router-link>
            <router-link class="navbarLink" to="/contact">
                Contact
                <div class="underline" />
            </router-link>
        </div>
        <div class="hiddenButton" />
        <ThemeToggle />
    </div>
</template>

<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
import { ref, onMounted } from "vue";

const links = ref(null);
const screen = ref({ width: 0, height: 0 });

const outsideClickListener = (clickEvent) => {
    if (links.value.classList.contains("navbarLinksOpen")) {
        links.value.classList.remove("navbarLinksOpen");
        document.removeEventListener("click", outsideClickListener);
    }
};

const hideOnClickOutside = () => {
    document.addEventListener("click", outsideClickListener);
};

const toggleLinks = () => {
    var open = links.value.classList.toggle("navbarLinksOpen");
    if (open) {
        setTimeout(hideOnClickOutside, 100);
    } else {
        document.removeEventListener("click", outsideClickListener);
    }
};

onMounted(() => {
    const { offsetWidth, offsetHeight } = document.getElementById("app");

    screen.value.width = offsetWidth;
    screen.value.height = offsetHeight;
});
</script>

<style>
:root {
    --navbarHeight: 4rem;
}

.navbar {
    background-color: var(--accent-background);

    box-shadow: 0 -10px 20px black;

    position: -webkit-sticky;
    position: sticky;
    will-change: transform;
    top: 0;
    display: flex;

    height: var(--navbarHeight);
    width: 100%;
    z-index: 10;
}

.hiddenButton {
    width: var(--navbarHeight);
    height: var(--navbarHeight);
}

.burger {
    color: var(--link);
    display: block;
    border-style: none;
    font-size: 2rem;
}

.navbarLinksOpen {
    height: 12rem !important;
}

.navbarLinks {
    display: flex;
    flex-flow: column;
    flex-direction: column;

    text-align: center;
    position: absolute;
    width: 80vw;

    padding: 0 10%;

    top: var(--navbarHeight);

    background-color: var(--background);
    height: 0;
    overflow-y: hidden;
    transition: height 0.5s ease-in-out;
}

.navbarLink {
    transition-duration: 200ms;
    width: ;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
}

.underline {
    transition-duration: 200ms;
}

.navbarLink > .underline {
    width: 100%;
    height: 2px;
    background-color: var(--link);
    transform: scaleX(0);
}

@media only screen and (min-width: 992px) {
    .navbarLinks {
        background-color: var(--accent-background);
        position: relative;
        top: 1rem;
        padding: 0;
        display: flex;
        flex-flow: nowrap;
        flex-direction: row;
        width: min-content;
        margin: 0 auto;
        height: fit-content;
        z-index: 10;
    }

    .navbarLink {
        margin: 0rem 0.75rem;
        padding: 0rem 0.5rem;
    }

    .hiddenButton {
        display: none;
    }

    .burger {
        display: none;
    }
}

.navbarLink:hover .underline {
    transform: scaleX(1);
    background-color: var(--link-hover);
}

.navbarLink:hover {
    color: var(--link-hover);
}

.router-link-active > .underline {
    transform: scaleX(1.1);
}
</style>
