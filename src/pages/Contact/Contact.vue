<template>
    <div class="page">
        <h1 class="text-center">Email</h1>
        <form class="text-center" @submit.prevent="submit" @reset="onReset">
            <input placeholder="Name" v-model="name" /><br />
            <input placeholder="Email" v-model="email" /><br />
            <input placeholder="Subject" v-model="subject" /><br />
            <textarea rows="6" placeholder="Body" v-model="message" /><br />
            <button type="submit">Submit</button>
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
