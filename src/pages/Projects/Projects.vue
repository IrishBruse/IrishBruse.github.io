<template>
    <div class="viewport">
        <div class="projectSorting">
            <h1 class="text-left inline">Projects</h1>
            <div class="sortButtons inline">
                <h2 class="catagorySort inline noTextHighlight active" @click="changeSort('All', $event)">All</h2>
                <h2 class="catagorySort inline noTextHighlight" @click="changeSort('Software', $event)">Software</h2>
                <h2 class="catagorySort inline noTextHighlight" @click="changeSort('Library', $event)">Library</h2>
                <h2 class="catagorySort inline noTextHighlight" @click="changeSort('Game', $event)">Game</h2>
            </div>
        </div>
        <Row :gutter="24" class="projectDelayer">
            <Col v-for="project in filteredProjects" :key="project.title" :xs="12" :md="4" :lg="3" class="project old">
                <img :src="require('@/assets/projects/' + project.title + '/Thumbnail.png')" class="shadow round" @click="navigateToProject(project.title)" />
                <div class="projectInfo">
                    <h4 class="projectTitle">
                        {{ project.title }}
                    </h4>
                    <p class="projectType float-right">({{ project.type }})</p>
                </div>
            </Col>
        </Row>

        <div class="pagination flex">
            <button class="prev round" @click="changePage(currentPage - 1)">Previous Page</button>
            <div class="pages">
                <button v-for="index in maxPages" :key="index" class="page round" @click="changePage(index - 1)">{{ index }}</button>
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

const currentSort = ref("none");
var canChangeTab = true;
const currentPage = ref(-1);
const maxPages = Math.ceil(Projects.length / 12);
const changeSort = (sortType, event) => {
    if (canChangeTab == false || currentSort.value == sortType) {
        return;
    }
    canChangeTab = false;

    // Tab Styling
    let tablinks = document.getElementsByClassName("catagorySort");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    event.srcElement.classList.add("active");

    // Animate project loading
    reloadProjects(sortType);
};

const navigateToProject = (project) => {
    router.push("/projects/" + project);
};

const changePage = (newPage) => {
    if (newPage >= maxPages) {
        newPage = maxPages - 1;
    } else if (newPage < 0) {
        newPage = 0;
    }

    if (currentPage.value == newPage) {
        return;
    }

    currentPage.value = newPage;

    let gotoPages = document.querySelectorAll(".pagination .page");
    for (let i = 0; i < gotoPages.length; i++) {
        gotoPages[i].classList.remove("active");
        if (currentPage.value == i) {
            gotoPages[i].classList.add("active");
        }
    }
    reloadProjects(currentSort.value);
};

const filteredProjects = computed(() => {
    var projects = Projects.filter((project) => project.type == currentSort.value || currentSort.value == "All");
    var pageOffset = currentPage.value * 12;
    return projects.slice(pageOffset, pageOffset + 12);
});

const addProjects = () => {
    const projects = document.getElementsByClassName("project");
    projects.forEach((element) => {
        element.classList.replace("new", "old");
    });
};

const removeProjects = () => {
    const projects = document.getElementsByClassName("project");
    projects.forEach((element) => {
        element.classList.replace("old", "new");
    });
};

const reloadProjects = (sortType) => {
    currentSort.value = "none";
    setTimeout(() => {
        currentSort.value = sortType;
        removeProjects();
        setTimeout(() => {
            addProjects();
        }, 10);
    }, 10);

    setTimeout(() => {
        canChangeTab = true;
        removeProjects();
    }, 600);
};

onMounted(() => {
    changePage(0);
    reloadProjects("All");
});
onUnmounted(() => removeProjects());
</script>

<style>
.project {
    transition: transform 0.25s ease-in-out, opacity 0.1s linear;
    --betweenTime: 0.05s;
}
/* delay the children in order ugly but fine no need for js */
.project.new {
    opacity: 1;
    transform: translateY(0rem);
}

.project.old {
    transform: translateY(2rem);
    opacity: 0;
}

.pagination {
    padding: 2rem 0;
    width: 100%;
    align-items: flex-end;
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

.sortButtons {
    float: right;
}

.catagorySort > h2 {
    padding: 0;
}

.catagorySort {
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    margin: 0 0.5rem;
    color: var(--invert-background);
    transition-duration: 0.25s;
}

.catagorySort.active {
    background-color: var(--link);
    color: var(--accent-background);
}

.catagorySort.active:hover {
    background-color: var(--link-hover);
}

.projectSorting {
    padding: 2rem 0;
}

.projectSorting > h1 {
    padding: 0;
}

.projectDelayer .project:nth-child(1) {
    transition-delay: calc(var(--betweenTime) * 1);
}
.projectDelayer .project:nth-child(2) {
    transition-delay: calc(var(--betweenTime) * 2);
}
.projectDelayer .project:nth-child(3) {
    transition-delay: calc(var(--betweenTime) * 3);
}
.projectDelayer .project:nth-child(4) {
    transition-delay: calc(var(--betweenTime) * 4);
}
.projectDelayer .project:nth-child(5) {
    transition-delay: calc(var(--betweenTime) * 5);
}
.projectDelayer .project:nth-child(6) {
    transition-delay: calc(var(--betweenTime) * 6);
}
.projectDelayer .project:nth-child(7) {
    transition-delay: calc(var(--betweenTime) * 7);
}
.projectDelayer .project:nth-child(8) {
    transition-delay: calc(var(--betweenTime) * 8);
}
.projectDelayer .project:nth-child(9) {
    transition-delay: calc(var(--betweenTime) * 9);
}
.projectDelayer .project:nth-child(10) {
    transition-delay: calc(var(--betweenTime) * 10);
}
.projectDelayer .project:nth-child(11) {
    transition-delay: calc(var(--betweenTime) * 11);
}
.projectDelayer .project:nth-child(12) {
    transition-delay: calc(var(--betweenTime) * 12);
}
</style>
