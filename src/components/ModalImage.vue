<template>
    <img :src="src" class="modalImage noTextHighlight" @click="toggleModal" ref="sourceImage" />
    <teleport to="body">
        <div v-show="imageIsModal" class="modalImageContainer" @click="closeModal">
            <img :src="src" class="modalImagePopup noTextHighlight" ref="modalImage" @click="" />
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
    transition: transform 150ms;
}

.modalImage:hover {
    transform: scale(1.05);
}

.modalImagePopup {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 0%;
    height: 0%;
    transform: translate(-50%, -50%);
    object-fit: contain;

    z-index: 20;
    opacity: 0;

    transition: all 0.25s;
}

.modalImagePopup.active {
    height: 90%;
    opacity: 1;
    width: auto;
}

.modalImageContainer {
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: #000000aa;
}
</style>