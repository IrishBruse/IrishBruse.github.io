<template>
    <img :src="src" class="modalImage noTextHighlight" @click="toggleModal" ref="sourceImage" />
    <teleport to="body">
        <div v-show="imageIsModal" class="modalImageContainer" @click="closeModal">
            <img :src="src" class="modalImagePopup noTextHighlight" ref="modalImage" />
        </div>
    </teleport>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { onMounted } = require("@vue/runtime-core");

const props = defineProps({
    src: String,
});

const imageIsModal = ref(false);

const sourceImage = ref();
const modalImage = ref();

const toggleModal = () => {
    imageIsModal.value = !imageIsModal.value;

    setTimeout(() => {
        if (imageIsModal.value) {
            modalImage.value.classList.add("active");
        }
    }, 1);
};

const closeModal = () => {
    modalImage.value.classList.remove("active");
    imageIsModal.value = false;
};
</script>

<style>
.modalImage {
    cursor: pointer;
}

.modalImagePopup {
    position: fixed;
    left: 50%;
    top: calc(50% + var(--navbarHeight) / 2);
    width: 0%;
    height: 0%;
    transform: translate(-50%, -50%);

    z-index: 20;

    transition: all 0.25s;
}

.modalImagePopup.active {
    height: 90%;
    width: auto;
}

.modalImageContainer {
    cursor: pointer;
    position: fixed;
    top: var(--navbarHeight);
    left: 0;
    width: 100vw;
    height: calc(100vh - var(--navbarHeight));
    z-index: 5;
    background-color: #000000aa;
}
</style>