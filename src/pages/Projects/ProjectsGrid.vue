<template>
    <div class="projectTitlebar flex">
        <h1>Projects</h1>
        <h2 class="sort noTextHighlight" @click="changeCatagory(0)">
            All
        </h2>
        <h2 class="sort noTextHighlight" @click="changeCatagory(1)">
            Software
        </h2>
        <h2 class="sort noTextHighlight" @click="changeCatagory(2)">
            Libraries
        </h2>
        <h2 class="sort noTextHighlight" @click="changeCatagory(3)">
            Games
        </h2>
    </div>

    <Row id="projectsParent" class="projectsContainer" :gutter="24">
        <Col v-for="project in filteredProjects" :key="project.title" class="project" :lg="3" :md="4" :xs="12">
            <router-link :to="navigateToProject(project.title)">
                <img class="shadow round" :src="loadProjectImage('Thumbnail.png', project.title)">
            </router-link>
            <div v-if="checkIfNew(project.date)" class="newTag">
                New
            </div>
            <div class="projectInfo">
                <h4 class="projectTitle">
                    {{ project.title }}
                </h4>
                <p class="projectType float-right">
                    ({{ project.type }})
                </p>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import Projects from "@/projects/projects.json";
import { loadProjectImage } from "@/projects/CommonProject.js";
import { computed, onMounted,  ref } from "vue";

const Catagories = ["All", "Software", "Library", "Game"];

// Clickable projects
const navigateToProject = (project) => {
    if (project == "LDtkMonogame") {
        return "/LDtkMonogame/";
    } else {
        return "/projects/" + project;
    }
};

// Handle sorting tabs
const currentCategory = ref(-1);

var canChangeTab = true;

const changeCatagory = (newCategory) => {
    if (canChangeTab == false || currentCategory.value == newCategory) {
        return;
    }
    canChangeTab = false;

    // Animate project loading
    reloadProjects(newCategory);
};

const checkIfNew = (date) => {
    var now = new Date(Date.now());
    var project = new Date(date);
    var monthMilis = 2629800000; // 1 Months

    return now - project < monthMilis;
};

// Handle displaying projects
// Note I hate this so much there are so many timeouts because we need to wait for the computed
// to be removed then added back so the animations plays right (>﹏<)
const reloadProjects = (catagoryIndex) => {
    currentCategory.value = -1;

    // wait for computed to empty
    setTimeout(() => {
        currentCategory.value = catagoryIndex;
        canChangeTab = true;

        // wait for computed to be full again
        setTimeout(() => {
            var cells = document.getElementById("projectsParent").children;
            for (let i = 0; i < cells.length; i++) {
                setTimeout(() => {
                    cells[i].classList.toggle("projectLoadDelay", true);
                }, 50 * i);
            }
            // Current Catagory highlight
            let sortButtons = document.getElementsByClassName("sort");
            for (let i = 0; i < sortButtons.length; i++) {
                sortButtons[i].classList.toggle("active", i == catagoryIndex);
            }
        }, 1);
    }, 1);
};

// Computed values
const filteredProjects = computed(() => {
    const title = Catagories[currentCategory.value];
    return Projects.filter((project) => project.type == title || title == "All").sort((a,b)=>
    {
        return new Date(b.date) - new Date(a.date);
    });
});

// Events
onMounted(() => {
    setTimeout(() => {
        reloadProjects(0);
    }, 500);
});
</script>

<style>
.project {
    transform: translateY(0rem);
    opacity: 0;
}

.projectLoadDelay {
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

.project img {
    width: 100%;
    background-color: var(--background);
    transition: transform 150ms;
}

.project img:hover {
    cursor: pointer;
    transform: scale(1.05);
}

.newTag {
    position: absolute;
    bottom: 3rem;
    right: 1.5rem;
    background-color: var(--link);
    color: var(--background);
    font-weight: bolder;
    padding: 0.25rem 0.5rem;
    pointer-events: none;
    border-radius: 2rem;
}

.projectInfo {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-items: start;
}

.projectType,
.projectTitle {
    display: inline-block;
    padding: 0 0.25rem;
}

.projectTitle {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-height: 1.5rem;
}

.projectType {
    text-align: right;
    padding: 0 0.25rem;
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
    align-self: center;
    height: min-content;
}

.projectTitlebar > h1 {
    padding: 0;
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
}
</style>
