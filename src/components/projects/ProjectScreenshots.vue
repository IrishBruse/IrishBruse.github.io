<template>
    <h2 class="text-center">Screenshots</h2>

    <Row :columns="12" :gutter="24">
        <Col v-for="(t, index) in parseInt(props.project.screenshots)" :lg="4" :md="6" :xs="12">
            <ModalImage :src="loadProjectImage('Screenshot' + (index + 1) + '.png', project.title)" />
        </Col>
    </Row>
</template>

<script setup>
import { loadProjectImage } from "@/projects/CommonProject.js";

import { defineProps } from "vue";

const props = defineProps({
    project: Object,
});
</script>
