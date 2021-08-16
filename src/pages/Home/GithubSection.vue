<template>
    <h1 class="text-center">Github</h1>

    <div v-if="isFoundProfile">
        <div class="githubProfile">
            <Row class="profileInfo">
                <Col>
                    <img :src="profile.avatar" alt="github avatar" class="avatar circle noTextHighlight" />
                </Col>
                <Col>
                    <div class="profileInfoCenter">
                        <a :href="profile.url" class="profileLink">{{ profile.name }}</a>
                        <div class="profileFollowersContainer">
                            <p class="profileFollowers">{{ profile.followers }} followers</p>
                            <p class="profileFollowers">{{ profile.following }} following</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

        <div class="githubRepos">
            <Row :gutter="40" :columns="12">
                <Col v-for="repo in repos" :key="repo.name" :xs="12" :lg="6">
                    <div class="githubRepo round shadow">
                        <a :href="repo.html_url" class="repoTitle">
                            {{ repo.name }}
                        </a>
                        <p class="repoDescription">
                            {{ repo.description }}
                        </p>
                        <div class="repoDetails">
                            <p class="repoDetail" :style="'color: ' + Colors[repo.language]">
                                {{ repo.language }}
                            </p>
                            <a v-if="repo.stargazers_count > 0" class="repoDetail repoStarButton" :href="repo.html_url + '/stargazers'">
                                <span class="icons repoStar">grade</span>
                                {{ repo.stargazers_count }}
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    <div v-else class="text-center">
        <h3>Github Api Request Failed</h3>
        <p>Api request limit may be reached</p>
        <p>Try refresing the page</p>
    </div>
</template>

<script setup>
import { Octokit } from "@octokit/rest";
import Colors from "@/assets/programmingColors.json";
import { onMounted, ref } from "vue";

const MaxGithubReposVisable = 8;

let profile = ref({});
let repos = ref([]);
let isFoundProfile = ref(false);

onMounted(() => {
    const octokit = new Octokit();

    octokit.rest.users
        .getByUsername({
            username: "IrishBruse",
        })
        .then(({ data }) => {
            isFoundProfile.value = true;
            console.log(data);
            profile.value = {
                name: data.name,
                username: data.login,
                avatar: data.avatar_url,
                location: data.location,
                url: data.html_url,
                repos: data.public_repos,
                reposUrl: data.repos_url,
                followers: data.followers,
                followersUrl: data.followers_url,
                following: data.following,
                followingUrl: data.following_url,
            };
        });

    octokit.rest.repos
        .listForUser({
            username: "IrishBruse",
        })
        .then(({ data }) => {
            repos.value = data
                .sort((firstEl, secondEl) => firstEl.stargazers_count - secondEl.stargazers_count)
                .reverse()
                .slice(0, MaxGithubReposVisable);
            console.log(repos);
        });
});
</script>

<style>
.avatar {
    border-width: 2px;
    border-style: solid;
    border-color: var(--background);
    height: 8rem;
    display: block;

    margin: 0 auto;
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
    width: fit-content;
    margin: 0 auto;
}

.profileInfoCenter {
    margin: 2rem;
}

.githubProfile {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 2rem;
}

.profileInfo {
    display: inline-block;
}

.githubRepos {
    width: 100%;
    margin: 0 auto;
}

.profileFollowersContainer {
    margin: 0 auto;
    width: fit-content;
}

.githubRepo {
    padding: 1rem;
    margin: 0;

    border-width: 2px;
    border-color: var(--input-border);
    border-style: solid;
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

@media only screen and (min-width: 992px) {
    .githubRepos {
        width: 75%;
    }

    .avatar {
        margin: 0;
    }
}
</style>
