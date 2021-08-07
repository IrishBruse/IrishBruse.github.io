<template>
    <h1>H1</h1>
    <GridLayout v-model:layout="layout" :col-num="12" :row-height="30">
        <GridItem w="20" h="30" i="0">test</GridItem>
    </GridLayout>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";

export default { components: { GridLayout, GridItem } };
</script>

<style></style>
