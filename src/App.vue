<template>
    <Navbar />
    <div class="mainPage">
        <div class="pageBackground" />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    components: {
        Navbar,
    },
};
</script>

<style>
.mainPage {
    position: relative;
    top: 0;
    width: 95%;
    margin: 0 auto;
}

.pageBackground {
    height: 100vh;
    position: fixed;
    width: 95%;

    top: 0;
    background-color: var(--accent-background);
    z-index: -10;
}

@media only screen and (min-width: 800px) {
    .mainPage {
        width: 75%;
    }

    .pageBackground {
        width: 75%;
    }
}

.topPageSpace {
    padding: 72px 0 0 0;
    margin: 0;
}
</style>
