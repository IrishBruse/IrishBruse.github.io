<template>
    <div class="viewport">
        <div class="pageBackground" />
        <h1 class="text-center">Email</h1>
        <form class="text-center" @submit.prevent="submit" @reset="onReset">
            <input v-model="email" type="email" placeholder="Email" class="round shadow" /><br />
            <input v-model="subject" type="text" placeholder="Subject" class="round shadow" /><br />
            <textarea v-model="message" cols="36" rows="6" placeholder="Body" class="round shadow" /><br />
            <button type="submit" class="round shadow" @click="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";

const email = ref("");
const subject = ref("");
const message = ref("");

const submit = () => {
    const formValid = computed(() => {
        return /(.+)@(.+){2,}\.(.+){2,}/.test(email) && subject.length > 0 && message.length > 0;
    });

    if (formValid) {
        return;
    }
    const { subject, message } = this;

    window.open("mailto:Econn50@outlook.com?subject=" + subject + "&body=" + message);
};
</script>
