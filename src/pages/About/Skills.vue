<template>
    <h1 class="text-center">Knowledge</h1>
    <Row :gutter="20" :columns="12">
        <Col :xs="12" :lg="4">
            <h2 class="mainColor text-center">Web</h2>
            <p class="text-center">I am both self taught and have studied web development in College. I know HTML, CSS, JavaScript and Vue.</p>
        </Col>

        <Col :xs="12" :lg="4">
            <h2 class="mainColor text-center">C#</h2>
            <p class="text-center">
                I am self taught in C# and have used it in many ways from Unity to Monogame to a
                <Router-link to="/projects/Monoboy">Gameboy Emulator</Router-link> and mobile apps. I have been programming in C# for {{ yearsCSharp }} years
                and I am well adversed with its tool chain and the dotnet workflow in general.
            </p>
        </Col>

        <Col :xs="12" :lg="4">
            <h2 class="mainColor text-center">Java</h2>
            <p class="text-center">I have studied Java in College. It was easy to pick up from my previous experience with C#.</p>
        </Col>

        <Col :xs="12" :lg="4" />

        <Col :xs="12" :lg="4">
            <h2 class="mainColor text-center">Git</h2>
            <p class="text-center">
                I have studied git in collage and have been using it for many years as source control for my projects and have gotten a good understanding of it
                from both the command line and the gui interfaces.
            </p>
        </Col>

        <Col :xs="12" :lg="4" />
    </Row>
</template>

<script>
export default {
    setup() {
        const yearsCSharp = new Date(Date.now()).getFullYear() - 2014;

        return { yearsCSharp };
    },
};
</script>

<style>
.mainColor {
    color: var(--link);
}
</style>
