<template>
    <div class="page">
        <div class="pageBackground" />
        <Featured />
        <Github />
    </div>
</template>

<script>
import Featured from "./FeaturedSection";
import Github from "./GithubSection";

export default {
    components: { Featured, Github },
};
</script>
