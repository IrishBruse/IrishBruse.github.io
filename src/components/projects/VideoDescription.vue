<template>
    <Row :columns="12" :gutter="24" class="videoDescriptionContainer">
        <Col :lg="6" :md="6" :xs="12">
            <div class="videoContainer">
                <iframe class="video" :src="'https://www.youtube.com/embed/' + props.video" frameborder="0" allowfullscreen />
            </div>
        </Col>
        <Col :lg="6" :md="6" :xs="12" class="videoDescription">
            <div class="text-justify">
                <slot>404 no discription found!</slot>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    video: String,
});
</script>

<style>
.videoContainer {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    background-color: black;
}

.video {
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.videoDescription * {
    font-size: 1.25rem;
}

.videoDescriptionContainer {
    padding: 2rem 0 0 0;
}
</style>