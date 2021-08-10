<template>
    <div class="navbar noTextHighlight text-center">
        <router-link to="/" class="navbarLink">Home</router-link>
        <router-link to="/projects" class="navbarLink">Projects</router-link>
        <router-link to="/about" class="navbarLink">About</router-link>
        <router-link to="/contact" class="navbarLink">Contact</router-link>
        <ThemeToggle class="pin-right" />
    </div>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";
export default {
    components: { ThemeToggle },
};
</script>

<style>
.navbar {
    background-color: var(--accent-background);

    box-shadow: 0 -10px 20px black;

    padding: 20px 5%;
    position: sticky;
    top: 0;

    height: 2rem;

    z-index: 10;
}
.navbarLinks {
    padding: 0 5%;
}

.navbarLink {
    font-size: 20px;
    margin: 0 15px;
    color: var(--link);
    text-decoration: none;
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
