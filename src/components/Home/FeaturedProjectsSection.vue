<template>
    <h2 class="text-center">Featured Projects</h2>
    <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="project in projects" :key="project.title">
            <img :src="require('@/assets/projects/' + project.title + '/Thumbnail.png')" alt="" srcset="" />
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Projects from "@/assets/projects/projects.json";

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup() {
        // Only show filtered projects
        // then create an array of html slides
        const projects = Projects.filter((project) => project.featured);

        // .map((project) => {
        //     const tags = project.tags.map((project) => {
        //         return h("a", { href: "tags/" + project + "/", class: "slideTag round" }, project);
        //     });

        //     // const openButton = h("a", { href: , class: "slideOpen" }, "More Details");

        //     const tagsContainer = h("div", { class: "slideTagsContainer" }, tags);
        //     const image = h("img", {
        //         src: require("@/assets/projects/" + project.title + "/" + "Thumbnail.png"),
        //         class: "slideImage",
        //         on: {
        //             click: () => console.log("test"),
        //         },
        //     });

        //     return h("div", { class: "slide" }, [image, tagsContainer]);
        // });

        return { projects };
    },
};
</script>

<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--carousel-color-primary);
    color: var(--carousel-color-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.vue-carousel__indicator::before {
    box-shadow: 0px 1px 6px 1px black;
    border-radius: 1rem;
}

.slide {
    height: fit-content;
    width: 90%;
    margin: 0 auto;
}

.slide:hover .slideTagsContainer,
.slide:hover .slideOpen {
    transition-timing-function: ease-in-out;
    opacity: 100%;
}

.slideTagsContainer {
    position: absolute;
    bottom: 0%;
    right: 5%;
    display: flex;
    margin: 0.25rem;
    width: fit-content;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.slideImage {
    width: 100%;
    cursor: pointer;
}

.slideImage:hover {
    filter: brightness(110%);
}

.slideTag {
    border-width: 2px;
    border-style: solid;
    border-color: white;

    padding: 0.25rem;
    margin: 0.25rem;
    text-decoration: none;
}
</style>
