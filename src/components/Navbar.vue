<template>
    <div class="navbar noTextHighlight">
        <button v-if="screen.width < 992" @click="toggleLinks()" class="icons burger">menu</button>
        <div class="navbarLinks" ref="links">
            <router-link to="/" class="navbarLink">Home</router-link>
            <router-link to="/projects" class="navbarLink">Projects</router-link>
            <router-link to="/about" class="navbarLink">About</router-link>
            <router-link to="/contact" class="navbarLink">Contact</router-link>
        </div>
        <div class="hiddenButton"></div>
        <ThemeToggle />
    </div>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";
import { ref, onMounted } from "vue";
export default {
    components: { ThemeToggle },
    setup() {
        const links = ref(null);
        const screen = ref({ width: 0, height: 0 });

        const outsideClickListener = (clickEvent) => {
            if (clickEvent.srcElement.parentElement.classList.contains("navbarLinks") == false) {
                if (links.value.classList.contains("navbarLinksOpen")) {
                    links.value.classList.remove("navbarLinksOpen");
                    document.removeEventListener("click", outsideClickListener);
                }
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
            console.log(offsetWidth);
        });

        return { toggleLinks, links, screen };
    },
};
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
    width: 25vw;

    padding: 0 37.5%;

    top: var(--navbarHeight);

    background-color: var(--background);
    height: 0;
    overflow-y: hidden;
    transition: height 0.5s ease-in-out;
}

.navbarLink {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
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
        padding: 0.25rem 0.5rem;
    }
}

.navbarLink:hover {
    color: var(--link-hover);
}

.router-link-active {
    border-color: var(--link);
    border-bottom-style: solid;
    border-bottom-width: 2px;
}
</style>
