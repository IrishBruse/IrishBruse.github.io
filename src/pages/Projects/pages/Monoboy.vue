<template>
    <h1>{{ props.project.title }}</h1>

    <VideoDescription :video="props.project.video">
        <div class="text-justify">
            <p class="monoboyDiscription">
                Monoboy is a Gameboy emulator written in C#. It was made to help me learn bitwise operations and the more lower level parts of C#. I learned
                alot about project management as this was the biggest piece of software i had made at the time. I also improved my ability to structure code in
                a way that was easier to come back to and maintain.
            </p>
        </div>
    </VideoDescription>

    <h2 class="text-center">Screenshots</h2>

    <Row :columns="12" :gutter="24">
        <Col :lg="4" :md="6" :xs="12">
            <img :src="require('@/assets/projects/' + props.project.title + '/Pokemon.png')" />
            <p class="imageDescription">(Pokemon Red)</p>
        </Col>
        <Col :lg="4" :md="6" :xs="12">
            <img :src="require('@/assets/projects/' + props.project.title + '/Tetris.png')" />
            <p class="imageDescription">(Tetris)</p>
        </Col>
        <Col :lg="4" :md="6" :xs="12">
            <img :src="require('@/assets/projects/' + props.project.title + '/PacMan.png')" />
            <p class="imageDescription">(PacMan)</p>
        </Col>
    </Row>
</template>

<script setup>
import VideoDescription from "@/components/VideoDescription.vue";
import { defineProps } from "vue";

const props = defineProps({
    project: Object,
});
</script>

<style>
.imageDescription {
    padding: 0;
}

.monoboyDiscription {
    font-size: 1.25rem;
}
</style>