<template>
    <h1 class="text-center">Github</h1>

    <div v-if="isFoundProfile">
        <div class="githubProfile">
            <img :src="profile.avatar" alt="github avatar" class="avatar round noTextHighlight" />
        </div>
        <div class="githubProfile">
            <div class="profileInfo">
                <a :href="profile.url" class="profileLink">{{ profile.name }}</a>
                <span>
                    <p class="profileFollowers">{{ profile.followers }} followers</p>
                    <p class="profileFollowers">{{ profile.following }} following</p>
                </span>
            </div>
        </div>

        <h2 class="text-center">Repos</h2>

        <div class="githubRepos">
            <Row :gutter="40" :columns="12">
                <Col :xs="12" :lg="6" v-for="repo in repos" :key="repo.stargazers_count">
                    <div class="githubRepo">
                        <a :href="repo.html_url" class="repoTitle">
                            {{ repo.name }}
                        </a>
                        <p class="repoDescription">{{ repo.description }}</p>
                        <div class="repoDetails">
                            <p class="repoDetail" :style="'color: ' + Colors[repo.language]">{{ repo.language }}</p>
                            <a class="repoDetail repoStarButton" :href="repo.html_url + '/stargazers'" v-if="repo.stargazers_count > 0">
                                <span class="icons repoStar">grade</span>
                                {{ repo.stargazers_count }}
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    <div class="text-center" v-else>
        <h3>Github Api Request Failed</h3>
        <p>Api request limit may be reached</p>
        <p>Try refresing the page</p>
    </div>
</template>

<script>
import GitHub from "github-api";
import Colors from "@/assets/programmingColors.json";
import { onMounted, ref } from "vue";

export default {
    setup() {
        let profile = ref({});
        let repos = ref([]);
        let isFoundProfile = ref(true);

        onMounted(() => {
            var gh = new GitHub({ token: "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" });

            var user = gh.getUser("IrishBruse");

            user.getProfile(function (error, result) {
                if (!error) {
                    isFoundProfile.value = true;
                    profile.value = {
                        name: result.name,
                        username: result.login,
                        avatar: result.avatar_url,
                        location: result.location,
                        url: result.html_url,
                        repos: result.public_repos,
                        reposUrl: result.html_url + "?tab=repositories",
                        followers: result.followers,
                        followersUrl: result.html_url + "/followers",
                        following: result.following,
                        followingUrl: result.html_url + "/following",
                    };
                } else {
                    isFoundProfile.value = false;
                    profile.value = {};
                }
            });

            user.listRepos(function (error, result) {
                if (!error) {
                    repos.value = result;
                    console.log(result);
                }
            });
        });

        return { profile, repos, isFoundProfile, Colors };
    },
};
</script>

<style>
.avatar {
    border-width: 2px;
    border-style: solid;
    border-color: var(--background);
    height: 8rem;
    display: block;
}
.profileFollowers {
    display: inline;
    margin: 0 1rem;
}
.profileLink {
    text-decoration: none;
    font-size: 2rem;
    position: relative;
    top: 0;
    display: block;
}

.githubProfile {
    width: fit-content;
    margin: 0 auto;
}

.profileInfo {
    display: inline-block;
}

.githubRepos {
    width: 100%;
    margin: 0 auto;
}

@media only screen and (min-width: 992px) {
    .githubRepos {
        width: 75%;
    }
}

.githubRepo {
    padding: 1rem;
    margin: 0;

    border-width: 1px;
    border-color: var(--input-border);
    border-style: solid;
    border-radius: 1rem;
}

.repoDetails {
    display: inline-block;
    width: 100%;
    max-height: 1rem;
}

.repoDetail {
    margin: 0 0.5rem;
    display: inline;
    width: fit-content;
}

.repoTitle {
    margin: 0;
    text-decoration: none;
    font-size: 1.25rem;
}

.repoDescription {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: calc(1rem + 6px);
}

.repoStarButton {
    text-decoration: none;
    color: var(--invert-accent-background);
}

.repoStarButton:hover,
.repoStarButton:hover > .repoStar {
    color: lightblue;
}
</style>
