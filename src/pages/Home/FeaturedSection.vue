<template>
    <h2 class="text-center">
        Featured Projects
    </h2>

    <Carousel
        :items-to-show="1"
        :transition="500"
    >
        <Slide
            v-for="project in projects"
            :key="project.title"
            class="slide"
        >
            <img
                class="slideImage round"
                :src="require('@/projects/' + project.title + '/Thumbnail.png')"
                @click="navigateToProject(project.title)"
            >
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Projects from "@/projects/projects.json";
import { useRouter } from "vue-router";

const router = useRouter();

const projects = Projects.filter((project) => {
    return project.flags.includes("featured");
});

const navigateToProject = (project) => {
    router.push("/projects/" + project);
};
</script>

<style>
.carousel__prev,
.carousel__next {
    display: none;
    background-color: var(--background);
    box-sizing: content-box;
    border-color: var(--invert-background);
    color: var(--invert-background);
    border-style: solid;
    border-width: 2px;
}

.carousel__prev:hover,
.carousel__next:hover {
    background-color: var(--accent-background);
}

.carousel__prev {
    left: 2rem;
}

.carousel__next {
    right: 2rem;
}

.carousel__pagination {
    height: fit-content;
}

.carousel__pagination-item {
    height: 0.5rem;
}

.carousel__pagination-button {
    box-sizing: content-box;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
    background-color: lightgray;
    box-shadow: 0px 1.5px 5px black;
}

.carousel__pagination-button:hover {
    background-color: white;
}

.carousel__pagination-button--active {
    background-color: gray;
}

.carousel__pagination-button--active:hover {
    background-color: lightgray;
}

.slide {
    margin: 0;
    padding: 0;
}

.slideImage {
    transition: filter 150ms;
    width: 95%;
    cursor: pointer;
    background-color: var(--background);
}

@media only screen and (min-width: 992px) {
    .slideImage {
        width: 75%;
    }

    .carousel__prev,
    .carousel__next {
        display: flex;
    }
}

.slideImage:hover {
    filter: contrast(90%) brightness(105%);
}

.slideImage:hover + .tags,
.tags:hover {
    opacity: 1;
}

.tags {
    opacity: 0;
    position: absolute;
    bottom: 1rem;
    display: flex;
    margin: 0.25rem;
    transition: all 0.25s;
}

.tag {
    border-width: 2px;
    border-style: solid;
    border-color: var(--invert-accent-background);

    padding: 0.25rem;
    margin: 0.25rem;
    text-decoration: none;
}
</style>
