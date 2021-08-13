<template>
    <div class="page">
        <div class="pageBackground" />
        <h1 class="text-center">Email</h1>
        <form class="text-center" @submit.prevent="submit" @reset="onReset">
            <input type="text" placeholder="Subject" class="round shadow" v-model="subject" /><br />
            <input type="text" placeholder="Name" class="round shadow" v-model="name" />
            <input type="text" placeholder="Email" class="round shadow" v-model="email" /><br />
            <textarea cols="36" rows="6" placeholder="Body" class="round shadow" v-model="message" /><br />
            <button type="submit" class="round shadow">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    },
    computed: {
        formValid() {
            const { name, email, subject, message } = this;
            return name.length > 0 && /(.+)@(.+){2,}\.(.+){2,}/.test(email) && subject.length > 0 && message.length > 0;
        },
    },
    methods: {
        submit() {
            if (!this.formValid) {
                return;
            }
            if (!localStorage.getItem("messages")) {
                localStorage.setItem("messages", JSON.stringify([]));
            }
            const { name, subject, message } = this;

            window.open("mailto:Econn50@outlook.com?subject=" + subject + "&body=" + message + "%0A%0A" + name);
        },
    },
};
</script>
