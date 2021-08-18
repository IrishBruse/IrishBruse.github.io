<template>
    <h1>{{ props.project.title }}</h1>

    <Row :columns="12">
        <Col :lg="6" :md="6" :xs="12">
            <div class="videoContainer">
                <iframe class="video" :src="props.project.video" frameborder="0" allowfullscreen ref="iframe" />
            </div>
        </Col>
        <Col :lg="6" :md="6" :xs="12">
            <div class="cellPadding">
                <div class="text-justify">{{ props.project.discription }}</div>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    project: Object,
});
</script>

<style>
.videoContainer {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.cellPadding {
    padding: 0 1rem;
}
</style>