<template>
    <div class="page">
        <div class="sortTitleBar">
            <h1 class="text-left inline">Projects</h1>
            <div class="sortButtons inline">
                <h2 @click="changeSort('All', $event)" class="catagorySort shadow inline round active">All</h2>
                <h2 @click="changeSort('Software', $event)" class="catagorySort shadow round inline">Software</h2>
                <h2 @click="changeSort('Library', $event)" class="catagorySort shadow round inline">Library</h2>
                <h2 @click="changeSort('Games', $event)" class="catagorySort shadow round inline">Games</h2>
            </div>
        </div>
        <Row :gutter="24" class="text-center">
            <Col v-for="project in Projects" :key="project.title" :xs="12" :md="4" :lg="3">
                <img :src="require('@/assets/projects/' + project.title + '/Thumbnail.png')" @click="test" class="projectImage shadow round" />
                <div class="projectInfo">
                    <h4 class="projectTitle">{{ project.title }}</h4>
                    <p class="projectType">({{ project.type }})</p>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import Projects from "@/assets/projects/projects.json";

export default {
    setup() {
        var currentSort;
        const changeSort = (sortType, event) => {
            currentSort = sortType;
            let tablinks = document.getElementsByClassName("catagorySort");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            event.srcElement.className += " active";
        };

        console.log(currentSort);

        return { Projects, changeSort };
    },
};
</script>

<style lang="scss"></style>
