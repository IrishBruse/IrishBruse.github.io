<template>
    <label class="themeSwitch round" for="themeCheckbox">
        <input id="themeCheckbox" ref="darkThemeCheckbox" class="hidden" type="checkbox" @click="updateTheme" />
        <div class="knob round" />

        <span class="icons themeIcon">light_mode</span>
        <span class="icons themeIcon">dark_mode</span>
    </label>
</template>

<script setup>
import { ref, onMounted } from "vue";

const darkThemeCheckbox = ref(null);

const updateTheme = () => {
    localStorage.setItem("isDark", darkThemeCheckbox.value.checked);
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark", darkThemeCheckbox.value.checked);
};

onMounted(() => {
    if (localStorage.getItem("isDark") === null) {
        var val = window.matchMedia("(prefers-color-scheme: dark)").matches;
        localStorage.setItem("isDark", val);
        darkThemeCheckbox.value.checked = val;
    } else {
        darkThemeCheckbox.value.checked = localStorage.getItem("isDark") == "true";
    }

    updateTheme();
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
    transition: all 0.5s;
    position: absolute;
}

.themeIcon {
    margin: 0.25rem;
}
</style>
