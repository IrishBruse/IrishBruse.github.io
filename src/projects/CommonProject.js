export function loadProjectImage(filename, projectTitle) {
    return require("@/projects/" + projectTitle + "/" + filename);
};
