export function loadProjectImage(filename, projectTitle) {
    if (projectTitle == null) {
        return require("@/projects/HyperHop/Thumbnail.png");
    }
    return require("@/projects/" + projectTitle + "/" + filename);
};
