<template>
    <div ref="display" class="fullscreen" />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import timetable from "./Timetable.html";

const route = useRoute();
const display = ref();

function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

onMounted(() => {
    var classGroup = route.params.class;

    var doc = new DOMParser().parseFromString(timetable, "text/html");

    // Clean off gmits css
    walkTheDOM(doc.body.children[0], function (node) {
        if (node.nodeType === 1) {
            node.removeAttribute("class");
            node.removeAttribute("style");
        } else if (node.nodeType === 3) {
            if (node.textContent == "\xa0") {
                node.textContent = "";
            }
        }
    });

    var rows = doc.body.children[0].children[0].children;

    for (let i = 0; i < rows.length; i++) {
        for (let index = 0; index < rows[i].children.length; index++) {
            if (i == 0) {
                rows[i].children[index].classList.add("fixedWidth");
                if (index % 2 == 1) {
                    var div = document.createElement("DIV");
                    div.classList.add("sideline");
                    rows[i].children[index].appendChild(div);
                }
            }

            if (i == 0 || i == 1 || i == 2 || i == 3 || (i == 4 && index == 0) || i == 6) {
                rows[i].children[index].classList.add("timetableunderline");
            }
            rows[i].children[index].classList.add("cell");
            var nodes = rows[i].children[index].querySelectorAll("table");

            if (nodes.length != 0) {
                // Color
                nodes[0].classList.add("cellTop");
                nodes[1].classList.add("cellMiddle");
                nodes[2].classList.add("cellBottom");

                var numberThings = nodes[2].querySelectorAll("TD");
                numberThings[0].innerText = "";
                numberThings[1].innerText = "";

                var words = nodes[1].innerText.trim().split(" ");

                words.splice(0, 1);

                var moduleName = words.join(" ");

                var groupIndex = moduleName.lastIndexOf("Gr ");

                if (groupIndex == -1) {
                    numberThings[1].innerText = moduleName.split("/")[1];

                    moduleName = moduleName.split("/")[0];
                } else {
                    var endText = moduleName.slice(groupIndex);
                    numberThings[1].innerText = endText.slice(5);

                    var groupLetter = endText.substr(3, 1);

                    var groups = ["a", "b", "c"];

                    if (groupLetter.toLowerCase() != classGroup.toLowerCase() && groups.includes(classGroup)) {
                        nodes[0].parentNode.removeChild(nodes[0]);
                        nodes[1].parentNode.removeChild(nodes[1]);
                        nodes[2].parentNode.removeChild(nodes[2]);
                    }

                    numberThings[0].innerText = "Group " + groupLetter; // "Group " + .slice(3);

                    moduleName = moduleName.slice(0, groupIndex - 1);
                }

                moduleName = moduleName.trim();

                switch (numberThings[1].innerText) {
                    case "P":
                        numberThings[1].innerText = "Practical";
                        break;

                    case "L":
                        numberThings[1].innerText = "Lecture";
                        break;

                    case "T":
                        numberThings[1].innerText = "Tutorial";
                        break;

                    case "T/P":
                        numberThings[1].innerText = "\xa0Tut/Prac";
                        break;

                    default:
                        moduleName = "Error";
                        break;
                }

                var color = "gray";
                switch (moduleName) {
                    case "PROCEDURAL PROGRAMMING":
                        moduleName = "Programming in C";
                        color = "orange";
                        break;

                    case "SOFTWARE DESIGN AND PROGRAM DEVELOPMENT 2":
                        moduleName = "Programming in Java";
                        color = "red";
                        break;

                    case "APPLIED NETWORKING TECHNOLOGY 1":
                        moduleName = "Network\xa0Tech";
                        color = "blue";
                        break;

                    case "IT PROFESSIONAL SKILL":
                    case "IT PROFESSIONAL SKILLS":
                        moduleName = "IT\xa0Skills";
                        color = "pink";
                        break;

                    case "SYSTEMS ANALYSIS METHODS":
                        moduleName = "Systems\xa0Analysis";
                        color = "yellow";
                        break;

                    case "INTERNET AND MOBILE APPLICATION DEVELOPMENT":
                        moduleName = "Internet and Mobile Development";
                        color = "green";
                        break;

                    default:
                        moduleName = "Error";
                        color = "gray";
                        break;
                }

                nodes[0].classList.add(color);
                nodes[1].classList.add(color);
                nodes[2].classList.add(color);

                nodes[1].innerText = moduleName;
            }
        }

        // Handle rowspaning and delete 9:00 and 9:30 column
        if (rows[i].children[0].getAttribute("rowSpan") == null && i != 0) {
            rows[i].removeChild(rows[i].children[0]);
            rows[i].removeChild(rows[i].children[0]);
        } else {
            rows[i].removeChild(rows[i].children[1]);
            rows[i].removeChild(rows[i].children[1]);
        }

        rows[i].removeChild(rows[i].children[rows[i].children.length - 1]);
        rows[i].removeChild(rows[i].children[rows[i].children.length - 1]);
    }

    display.value.appendChild(doc.body.children[0]);
});
</script>

<style>
.fullscreen {
    empty-cells: show;
    text-align: center;
    padding: 0.5rem;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: white;
    color: black;
    font-weight: bold;
}

.timetableunderline {
    border-bottom-style: solid;
    border-bottom-color: rgb(139, 139, 139);
    border-bottom-width: 2px;
}

.sideline {
    background-color: lightgray;
    z-index: -1;
    top: 0;
    position: absolute;
    width: 2px;
    height: 100vh;
}

.cell {
    /* padding: 0.1rem 0.2rem; */
}

.cellTop {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    min-height: 1rem;
    padding: 0.175rem 0.5rem;
}

.cellMiddle {
    padding: 0 0.5rem;
    min-height: 2.5rem;
}

.cellBottom {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    min-height: 1rem;
    padding: 0.175rem 0.5rem;
}

.fixedWidth {
    min-width: 5.425vw;
}

.red {
    background-color: #d05e52;
}

.green {
    background-color: #96b695;
}

.blue {
    background-color: #54b9f7;
}

.yellow {
    background-color: #f4d03f;
}

.pink {
    background-color: #cc99cc;
}

.orange {
    background-color: #f7b891;
}

.gray {
    background-color: rgb(196, 196, 196);
}

.lightgray {
    background-color: rgb(230, 230, 230);
}

.white {
    background-color: rgb(255, 255, 255);
}
</style>
