<template>
    <ProjectHeader :project="props.project">
        IrishBruse Launcher is a way to share all my projects and software along with all the versions letting you see the progress in each project.
        It uses the dropbox Api to download the projects from their cloud service and then unzips the game ready to play. Its all gotten live from
        the service so i can add and remove games, software and versions as I want.
        Its the first golang application I wrote too as i wanted to give a try at a new language and go had some handy features that made making
        this application alot easier than in C#.
    </ProjectHeader>

    <div class="download">
        <button class="round centerButton" @click="downloadInstaller">
            Download
        </button>
    </div>

    <iframe ref="downloader" src="" style="display:none;" />
</template>

<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import { ref } from "@vue/reactivity";

const props = defineProps({
    project: Object,
});

const downloader = ref();

const downloadInstaller = ()=>{
    downloader.value.src = "/InstallerV2.exe";
}
</script>

<style>

.download{
    display: flex;
    justify-content: center;
}

.centerButton{
    margin: 2rem 0;
    align-items: center;
    width: 10rem;
    border-style: none;
    color: var(--accent-background);
    font-weight: bolder;
    background-color: var(--link);
}
.centerButton:hover{
    background-color: var(--link-focus);
}
</style>
