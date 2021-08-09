<template>
    <div class="seperator" />
    <h1 class="text-center">Github</h1>

    <div class="githubProfile" v-if="isFoundProfile">
        <img :src="profile.avatar" alt="github avatar" class="round noTextHighlight" />

        <div class="profileInfo">
            <a :href="profile.url">{{ profile.name }}</a>
            <div class="container">
                <p class="cell profileInfoItems noTextHighlight">{{ profile.followers }} followers</p>
                <p class="cell profileInfoItems noTextHighlight">{{ profile.following }} following</p>
            </div>
        </div>

        <h2 class="text-center">Repos</h2>

        <Row class="githubRepos" :gutter="40" :columns="12">
            <Col :xs="12" :lg="6" v-for="repo in repos" :key="repo.stargazers_count">
                <div class="githubRepo">
                    <a :href="repo.html_url" class="repoTitle">
                        {{ repo.name }}
                    </a>
                    <p class="repoDescription">{{ repo.description }}</p>
                    <div class="repoDetails">
                        <p class="repoDetail">{{ repo.language }}</p>
                        <a class="repoDetail repoStarButton" :href="repo.html_url + '/stargazers'" v-if="repo.stargazers_count > 0">
                            <span class="icons">grade</span> {{ repo.stargazers_count }}
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
    <div class="text-center" v-else>
        <p>Github Api Request Failed</p>
        <p>Try refresing the page</p>
    </div>
</template>

<script>
import GitHub from "github-api";
import { onMounted, ref } from "vue";

export default {
    setup() {
        let profile = ref({});
        let repos = ref([]);
        let isFoundProfile = ref(true);

        onMounted(() => {
            var gh = new GitHub();

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
                }
            });
        });

        return { profile, repos, isFoundProfile };
    },
};
</script>

<style>
.githubLogo {
    height: 1rem;
}
.repoContainer {
    width: 75%;
    margin: 0 auto;
}

.profileInfo {
    margin: auto;
    padding: 1rem;
}
.profileInfoItems {
    margin: 0 1em 0 0;
}
.githubRepos {
    width: 100%;
}

@media only screen and (min-width: 992px) {
    .githubRepos {
        width: %;
    }
}

.githubRepo {
    padding: 1rem;
    margin: 0.5em 0;

    border-width: 1px;
    border-color: var(--input-border);
    border-style: solid;
    border-radius: 0.75rem;
}

.repoTitle {
    margin: 0;
    text-decoration: none;
}

.repoDescription {
    margin: 0.5em 0;
}

.repoStar {
    height: 1rem;
    fill: red;
}

.repoStarButton {
    cursor: pointer;
    text-decoration: none;
    color: var(--paragraph);
    height: fit-content;
    padding: 0;
}

.repoStarButton:hover {
    color: lightblue;
}

.repoStarButton:hover .repoStar {
    background-image: url("/static/burger.png");
}

.repoDetails {
    display: flex;
    flex-direction: row;
    padding: 0.5em 0;
}

.repoDetail {
    margin: 0 1em 0 0;
}
</style>
