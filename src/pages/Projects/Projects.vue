<template>
    <div class="viewport">
        <div class="projectTitlebar flex">
            <h1 class="title">Projects</h1>
            <h2 class="sort noTextHighlight" @click="changeCatagory(0)">All</h2>
            <h2 class="sort noTextHighlight" @click="changeCatagory(1)">Software</h2>
            <h2 class="sort noTextHighlight" @click="changeCatagory(2)">Libraries</h2>
            <h2 class="sort noTextHighlight" @click="changeCatagory(3)">Games</h2>
        </div>
        <Row class="projectsContainer" :gutter="24">
            <Col v-for="project in filteredProjects" :key="project.title" class="project" :lg="3" :md="4" :xs="12">
                <img class="shadow round" :src="require('@/assets/projects/' + project.title + '/Thumbnail.png')" @click="navigateToProject(project.title)" />
                <div class="projectInfo">
                    <h4 class="projectTitle">{{ project.title }}</h4>
                    <p class="projectType float-right">({{ project.type }})</p>
                </div>
            </Col>
        </Row>

        <div class="pagination flex">
            <button class="prev round" @click="changePage(currentPage - 1)">Previous Page</button>
            <div class="pages">
                <button v-for="index in maxPagesForCatagory" :key="index" class="page round" @click="changePage(index - 1)">
                    <b>{{ index }}</b>
                </button>
            </div>
            <button class="next round" @click="changePage(currentPage + 1)">Next Page</button>
        </div>
    </div>
</template>

<script setup>
import Projects from "@/assets/projects/projects.json";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const MaxProjectsPerPage = 12;
const Catagories = ["All", "Software", "Library", "Game"];

// Clickable projects
const navigateToProject = (project) => {
    router.push("/projects/" + project);
};

// Handle sorting tabs
const currentCatagory = ref(-1);
const currentPage = ref(-1);

var canChangeTab = true;

const changeCatagory = (index) => {
    if (canChangeTab == false || currentCatagory.value == index) {
        return;
    }
    canChangeTab = false;

    // Tab Styling
    let sortButtons = document.getElementsByClassName("sort");
    for (let i = 0; i < sortButtons.length; i++) {
        sortButtons[i].classList.toggle("active", i == index);
    }
    // Animate project loading
    reloadProjects(index);
};

// Handle pagination
const changePage = (pageIndex) => {
    if (pageIndex >= maxPagesForCatagory.value) {
        pageIndex = maxPagesForCatagory.value - 1;
    } else if (pageIndex < 0) {
        pageIndex = 0;
    }

    if (currentPage.value == pageIndex) {
        return;
    }

    currentPage.value = Number(pageIndex);

    reloadProjects(pageIndex);
};

// Handle displaying projects
const reloadProjects = (pageIndex) => {
    // clear the computed property
    currentCatagory.value = -1;

    // delay reseting the computed property so the animations play correctly
    setTimeout(() => {
        currentCatagory.value = pageIndex;

        setTimeout(() => {
            canChangeTab = true;
            const projects = document.getElementsByClassName("project");
            projects.forEach((element) => {
                element.classList.add("new");
            });

            let gotoPages = document.querySelectorAll(".pagination .page");
            for (let i = 0; i < gotoPages.length; i++) {
                gotoPages[i].classList.toggle("active", pageIndex == i);
            }
        }, 100);
    }, 100);
};

// Computed values
const filteredProjects = computed(() => {
    const title = Catagories[currentCatagory.value];
    var projects = Projects.filter((project) => project.type == title || title == "All");
    var pageOffset = currentPage.value * MaxProjectsPerPage;
    return projects.slice(pageOffset, pageOffset + MaxProjectsPerPage);
});

const maxPagesForCatagory = computed(() => {
    const title = Catagories[currentCatagory.value];
    return Math.ceil(Projects.filter((project) => project.type == title || title == "All").length / MaxProjectsPerPage);
});

// Events
onMounted(() => {
    changeCatagory(0);
    setTimeout(() => {
        changePage(0);
    }, 500);
});
</script>

<style>
.project {
    transition: transform 0.25s ease-in-out, opacity 0.1s linear;
    --betweenTime: 0.05s;
    opacity: 0;
    transform: translateY(2rem);
}

.project.new {
    opacity: 1;
    transform: translateY(0rem);
}

.pagination {
    padding: 2rem 0;
}

.pagination.prev,
.pagination.next {
    flex-grow: 1;
    margin: 2rem 0;
}

.pagination > .pages {
    margin: 0 auto;
}

.pagination .page.active {
    color: var(--background);
    background-color: var(--link);
}

/* // */
.project > img {
    width: 100%;
    background-color: var(--background);
}

.project > img:hover {
    cursor: pointer;
    filter: contrast(90%) brightness(105%);
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
    text-align: right;
    padding: 0 2rem;
    width: auto;
    color: var(--invert-accent-background);
}

.sort {
    border-radius: 0.5rem;
    cursor: pointer;

    height: 2rem;

    padding: 0.25rem 0.5rem;
    margin: 0;
    color: var(--invert-background);
    transition-duration: 0.25s;
}

.sort.active {
    background-color: var(--link);
    color: var(--accent-background);
}

.sort.active:hover {
    background-color: var(--link-hover);
}

.projectTitlebar {
    text-align: center;
    padding: 2rem 0;
    flex-direction: column;
}

.projectTitlebar > h1 {
    padding: 1rem 0;
    flex: 0;
    width: 100%;
}
.projectTitlebar > h2 {
    width: 50%;
    margin: auto;
}

@media only screen and (min-width: 992px) {
    .projectTitlebar {
        flex-direction: row;
        text-align: left;
    }

    .projectTitlebar > h1 {
        flex: 1;
    }
    .projectTitlebar > h2 {
        width: min-content;
        margin: 0 0.5rem;
    }
    .pagination {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

/* delay the children in order ugly but fine no need for js */
.projectsContainer .project:nth-child(1) {
    transition-delay: calc(var(--betweenTime) * 1);
}
.projectsContainer .project:nth-child(2) {
    transition-delay: calc(var(--betweenTime) * 2);
}
.projectsContainer .project:nth-child(3) {
    transition-delay: calc(var(--betweenTime) * 3);
}
.projectsContainer .project:nth-child(4) {
    transition-delay: calc(var(--betweenTime) * 4);
}
.projectsContainer .project:nth-child(5) {
    transition-delay: calc(var(--betweenTime) * 5);
}
.projectsContainer .project:nth-child(6) {
    transition-delay: calc(var(--betweenTime) * 6);
}
.projectsContainer .project:nth-child(7) {
    transition-delay: calc(var(--betweenTime) * 7);
}
.projectsContainer .project:nth-child(8) {
    transition-delay: calc(var(--betweenTime) * 8);
}
.projectsContainer .project:nth-child(9) {
    transition-delay: calc(var(--betweenTime) * 9);
}
.projectsContainer .project:nth-child(10) {
    transition-delay: calc(var(--betweenTime) * 10);
}
.projectsContainer .project:nth-child(11) {
    transition-delay: calc(var(--betweenTime) * 11);
}
.projectsContainer .project:nth-child(12) {
    transition-delay: calc(var(--betweenTime) * 12);
}
</style>
