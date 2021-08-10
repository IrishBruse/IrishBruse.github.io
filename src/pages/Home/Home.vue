<template>
    <div class="page">
        <div class="pageBackground" />
        <Featured />
        <Knowledge />
        <Github />
    </div>
</template>

<script>
import Featured from "./FeaturedSection";
import Knowledge from "./KnowledgeSection";
import Github from "./GithubSection";

export default {
    components: { Featured, Knowledge, Github },
};
</script>
