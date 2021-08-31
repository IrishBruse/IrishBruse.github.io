export function loadProjectImage(filename, projectTitle) {
    if (projectTitle == "test") {
        return require("@/projects/HyperHop/Thumbnail.png");
    }
    return require("@/projects/" + projectTitle + "/" + filename);
};
