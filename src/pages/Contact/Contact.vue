<template>
    <div class="viewport">
        <div class="pageBackground" />
        <h1 class="text-center">Email</h1>
        <form class="text-center" @submit="send" @reset="onReset">
            <input v-model="email" type="email" placeholder="Email" class="round shadow" /><br />
            <input v-model="subject" type="text" placeholder="Subject" class="round shadow" /><br />
            <textarea v-model="message" cols="36" rows="6" placeholder="Body" class="round shadow" /><br />
            <input type="submit" value="Send Form" class="round shadow" />
        </form>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const email = ref("");
const subject = ref("");
const message = ref("");

const send = () => {
    if (formValid) {
        return;
    }

    window.open("mailto:Econn50@outlook.com?subject=" + subject.value + "&body=" + message.value);

    const formValid = () => {
        return /(.+)@(.+){2,}\.(.+){2,}/.test(email.value) && subject.value.length > 0 && message.value.length > 0;
    };
};
</script>
