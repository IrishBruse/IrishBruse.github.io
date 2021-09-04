<template>
    <h1 class="text-center">Knowledge</h1>
    <Row :columns="12" :gutter="20">
        <Col :lg="4" :xs="12">
            <h2 class="text-center">Web</h2>
            <p class="text-justify">
                I am both self taught and have studied web development in College. I know HTML, CSS, JavaScript. I have also used Vue and Bootstrap in my
                projects and have gotten comfortable with both.
            </p>
        </Col>

        <Col :lg="4" :xs="12">
            <h2 class="text-center">C#</h2>
            <p class="text-justify">
                I am self taught in C# and have used it in many ways from Unity to Monogame to a
                <Router-link to="/projects/Monoboy">Gameboy Emulator</Router-link> and mobile apps. I have been programming in C# for {{ yearsCSharp }} years
                when i started with xna making games and I am well adversed with its newer tool chain and the dotnet core and 5 workflow in general.
            </p>
        </Col>

        <Col :lg="4" :xs="12">
            <h2 class="text-center">Java</h2>
            <p class="text-justify">
                I have studied Java in College. It was easy to pick up from my previous experience with C#. I have also in the past used it for modding
                Minecraft.
            </p>
        </Col>

        <Col :lg="4" :xs="12" />

        <Col :lg="4" :xs="12">
            <h2 class="text-center">Git</h2>
            <p class="text-justify">
                I have studied git in collage and have been using it for many years as source control for my projects and have gotten a good understanding of it
                from both the command line and the gui interfaces.
            </p>
        </Col>

        <Col :lg="4" :xs="12" />
    </Row>
</template>

<script setup>
const yearsCSharp = new Date(Date.now()).getFullYear() - 2012;
</script>

<style>
</style>
