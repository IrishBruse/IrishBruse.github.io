<template>
    <label class="themeSwitch round" for="themeCheckbox">
        <input id="themeCheckbox" ref="themeCheckbox" class="hidden" type="checkbox" @click="toggleTheme" />
        <div class="knob round" />

        <span class="icons themeIcon">dark_mode</span>
        <span class="icons themeIcon">light_mode</span>
    </label>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLight = ref(false);
const themeCheckbox = ref(null);

const toggleTheme = () => {
    isLight.value = !isLight.value;
    localStorage.setItem("isLight", isLight.value);
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("light", isLight.value);
};

onMounted(() => {
    if (localStorage.getItem("isLight") === null) {
        isLight.value = !window.matchMedia("(prefers-color-scheme: dark)").matches;
        localStorage.setItem("isLight", isLight.value);
        themeCheckbox.value.checked = isLight.value;
    } else {
        isLight.value = localStorage.getItem("isLight") == "true";
    }
});
</script>

<style>
.themeSwitch {
    width: 3rem;
    height: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1rem;
    margin: auto 0;
    padding: 0;
}

.themeSwitch > #themeCheckbox:checked + .knob {
    -webkit-transform: translateX(1.5rem);
    -ms-transform: translateX(1.5rem);
    transform: translateX(1.5rem);
}

.themeSwitch,
.knob {
    border-width: 2px;
    border-color: var(--invert-background);
    border-style: solid;
}

.knob {
    width: 1rem;
    height: 1rem;
    margin: 0.1rem;
    position: absolute;
}

.themeIcon {
    display: inline-block;
    margin: 0.25rem;
}
</style>
