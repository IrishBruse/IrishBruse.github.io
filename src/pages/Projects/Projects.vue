<template>
    <div class="page">
        <span>
            <h1 class="text-left">Projects</h1>
        </span>
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
        return { Projects };
    },
};
</script>

<style>
.projectImage {
    width: 100%;
    background-color: var(--background);
}

.projectImage:hover {
    cursor: pointer;
    filter: brightness(110%);
}

.projectInfo {
    width: 100%;
    margin: 0;
    padding: 0;
}

.projectType,
.projectTitle {
    display: inline-block;
    padding: 0 1rem;
}

.projectType {
    color: var(--invert-accent-background);
}
</style>
