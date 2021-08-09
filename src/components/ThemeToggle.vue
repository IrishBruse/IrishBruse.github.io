<template>
    <label class="toggle round">
        <input type="checkbox" class="toggleCheckbox" @click="toggleTheme" />
        <div class="knob round"></div>
        <span class="icons">dark_mode</span>
        <span class="icons">light_mode</span>
    </label>
</template>

<script>
export default {
    setup() {
        var ruleID;

        const toggleTheme = () => {
            var dark = document.getElementsByClassName("dark")[0];
            if (dark != undefined) {
                dark.className = "light";
            } else {
                document.getElementsByClassName("light")[0].className = "dark";
            }

            document.styleSheets[0].addRule("*", "transition: 0.5s ease !important;");
            ruleID = document.styleSheets[0].rules.length - 1;

            setTimeout(removeTransition, 500);
        };

        function removeTransition() {
            document.styleSheets[0].removeRule(ruleID);
        }

        return { toggleTheme };
    },
};
</script>

<style>
.toggle {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
    cursor: pointer;
    border-width: 2px;
    border-color: var(--parargraph);
    border-style: solid;
}

.toggle input {
    opacity: 0;
    height: 0;
    width: 0;
}

.knob {
    border-width: 2px;
    border-color: var(--parargraph);
    border-style: solid;

    width: 1rem;
    height: 1rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    margin: 0.1rem 0.15rem;
}

.toggleCheckbox:checked + .knob {
    -webkit-transform: translateX(1.5rem);
    -ms-transform: translateX(1.5rem);
    transform: translateX(1.5rem);
}
</style>
