<template>
    <div class="projectTitlebar flex">
        <h1 class="title">Projects</h1>
        <h2 class="sort noTextHighlight" @click="changeCatagory(0)">All</h2>
        <h2 class="sort noTextHighlight" @click="changeCatagory(1)">Software</h2>
        <h2 class="sort noTextHighlight" @click="changeCatagory(2)">Libraries</h2>
        <h2 class="sort noTextHighlight" @click="changeCatagory(3)">Games</h2>
    </div>

    <Row class="projectsContainer" :gutter="24">
        <Col v-for="project in filteredProjects" :key="project.title" class="project" :lg="3" :md="4" :xs="12">
            <img class="shadow round" :src="require('@/projects/' + project.title + '/Thumbnail.png')" @click="navigateToProject(project.title)" />
            <div v-if="checkIfNew(project.date)" class="newTag">New</div>
            <div class="projectInfo">
                <h4 class="projectTitle">{{ project.title }}</h4>
                <p class="projectType float-right">({{ project.type }})</p>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import Projects from "@/projects/projects.json";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const MaxProjectsPerPage = 12;
const Catagories = ["All", "Software", "Library", "Game"];

// Clickable projects
const navigateToProject = (project) => {
    if (project == "LDtkMonogame") {
        window.open("https://irishbruse.github.io/LDtkMonogame/", "_self");
    } else {
        router.push("/projects/" + project);
    }
};

// Handle sorting tabs
const currentCategory = ref(-1);
const currentPage = ref(-1);

var canChangeTab = true;

const changeCatagory = (newCategory) => {
    if (canChangeTab == false || currentCategory.value == newCategory) {
        return;
    }
    canChangeTab = false;

    // Animate project loading
    reloadProjects(newCategory, 0);
};

const checkIfNew = (date) => {
    var now = new Date(Date.now());
    var project = new Date(date);
    var monthMilis = 2629800000 * 2; // 2 Months

    return now - project < monthMilis;
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
    currentPage.value = pageIndex;
    scrollTo(0, 0);

    reloadProjects(currentCategory.value, pageIndex);
};

// Handle displaying projects
const reloadProjects = (catagoryIndex, pageIndex) => {
    currentCategory.value = -1;
    currentPage.value = pageIndex;

    setTimeout(() => {
        currentCategory.value = catagoryIndex;

        canChangeTab = true;

        // Current Catagory highlight
        let sortButtons = document.getElementsByClassName("sort");
        for (let i = 0; i < sortButtons.length; i++) {
            sortButtons[i].classList.toggle("active", i == catagoryIndex);
        }

        setTimeout(() => {
            // Current Page highlight
            let gotoPages = document.querySelectorAll(".pagination .page");
            for (let i = 0; i < gotoPages.length; i++) {
                gotoPages[i].classList.toggle("active", pageIndex == i);
            }
        }, 5);
    }, 5);
};

// Computed values
const filteredProjects = computed(() => {
    const title = Catagories[currentCategory.value];
    var projects = Projects.filter((project) => project.type == title || title == "All");
    var pageOffset = currentPage.value * MaxProjectsPerPage;
    return projects.slice(pageOffset, pageOffset + MaxProjectsPerPage);
});

const maxPagesForCatagory = computed(() => {
    const title = Catagories[currentCategory.value];
    return Math.ceil(Projects.filter((project) => project.type == title || title == "All").length / MaxProjectsPerPage);
});

// Events
onMounted(() => {
    setTimeout(() => {
        reloadProjects(0, 0);
    }, 500);
});
</script>

<style>
.project {
    --betweenTime: 0.05s;
    transform: translateY(0rem);
    opacity: 0;
    animation: NewProjectAdded 0.35s forwards;
}

@keyframes NewProjectAdded {
    0% {
        transform: translateY(2rem);
        opacity: 0;
    }
    100% {
        transform: translateY(0rem);
        opacity: 1;
    }
}

.project > img {
    width: 100%;
    background-color: var(--background);
}

.project > img:hover {
    cursor: pointer;
    filter: contrast(90%) brightness(105%);
}

.newTag {
    position: absolute;
    bottom: 3rem;
    right: 1.5rem;
    background-color: var(--link);
    color: var(--background);
    /* border-width: 2px;
    border-color: var(--link-hover);
    border-style: solid; */
    font-weight: bolder;
    padding: 0.25rem 0.5rem;
    pointer-events: none;
    border-radius: 2rem;
}

.projectInfo {
    width: 100%;
    margin: 0;
    padding: 0;
}

.projectType,
.projectTitle {
    display: inline-block;
    padding: 0 0.25rem;
}

.projectType {
    text-align: right;
    padding: 0 0.25rem;
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
    }
}

/* delay the children in order ugly but fine no need for js */
.projectsContainer .project:nth-child(1) {
    animation-delay: calc(var(--betweenTime) * 1);
}
.projectsContainer .project:nth-child(2) {
    animation-delay: calc(var(--betweenTime) * 2);
}
.projectsContainer .project:nth-child(3) {
    animation-delay: calc(var(--betweenTime) * 3);
}
.projectsContainer .project:nth-child(4) {
    animation-delay: calc(var(--betweenTime) * 4);
}
.projectsContainer .project:nth-child(5) {
    animation-delay: calc(var(--betweenTime) * 5);
}
.projectsContainer .project:nth-child(6) {
    animation-delay: calc(var(--betweenTime) * 6);
}
.projectsContainer .project:nth-child(7) {
    animation-delay: calc(var(--betweenTime) * 7);
}
.projectsContainer .project:nth-child(8) {
    animation-delay: calc(var(--betweenTime) * 8);
}
.projectsContainer .project:nth-child(9) {
    animation-delay: calc(var(--betweenTime) * 9);
}
.projectsContainer .project:nth-child(10) {
    animation-delay: calc(var(--betweenTime) * 10);
}
.projectsContainer .project:nth-child(11) {
    animation-delay: calc(var(--betweenTime) * 11);
}
.projectsContainer .project:nth-child(12) {
    animation-delay: calc(var(--betweenTime) * 12);
}
</style>
