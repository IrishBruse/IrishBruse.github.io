<template>
    <div class="page">
        <FeaturedProjects />
        <Knowledge />
        <Github />
    </div>
</template>

<script>
import FeaturedProjects from "./FeaturedProjectsSection";
import Knowledge from "./KnowledgeSection";
import Github from "./GithubSection";

export default {
    components: { FeaturedProjects, Knowledge, Github },
};
</script>
