<template>
    <div class="viewport">
        <div class="pageBackground" />
        <h1 class="text-center">Email</h1>
        <form class="text-center" @reset="onReset" @submit="send">
            <input v-model="email" class="round shadow" placeholder="Email" type="email" /><br />
            <input v-model="subject" class="round shadow" placeholder="Subject" type="text" /><br />
            <textarea v-model="message" class="round shadow" cols="36" placeholder="Body" rows="6" /><br />
            <input class="round shadow" type="submit" value="Send Email" />
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
