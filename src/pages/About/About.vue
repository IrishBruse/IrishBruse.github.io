<template>
    <h1 class="text-center">About Me</h1>
    <p class="aboutMe text-justify">
        Hi I'm Ethan an {{ age }} year old studying
        <a href="https://www.gmit.ie/computer-science-and-applied-physics/bachelor-science-honours-software-development">Software Development</a> in GMIT. I am
        self taught in programming before GMIT and have been programming for many years as a hobby making games, websites, software and mobile apps. I love Open
        source software and try to contribute to it where I can. Currently I maintain a library for importing and rendering levels made with an open source game
        level editor it is hosted on my <a href="https://github.com/IrishBruse">Github profile</a>.
    </p>

    <Skills />
</template>

<script setup>
import Skills from "./Skills.vue";

const currentDate = new Date();
const birthDate = new Date("2002/1/10");
const difference = currentDate - birthDate;
const age = Math.floor(difference / 31557600000);
</script>

<style>
.aboutMe {
    width: 100%;
    margin: 1rem auto;
    font-size: 1.25rem;
}

@media only screen and (min-width: 992px) {
    .aboutMe {
        width: 60%;
    }
}
</style>
