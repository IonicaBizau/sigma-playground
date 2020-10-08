// Sigma stuff
sigma = require("sigma");
conrad = require("sigma/src/conrad.js");
sigma.plugins = {};
require("sigma/src/renderers/sigma.renderers.canvas.js");
require("sigma/plugins/sigma.plugins.dragNodes/sigma.plugins.dragNodes.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curvedArrow.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curve.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curvedArrow.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curve.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.labels.curve.js");
require("sigma/plugins/sigma.renderers.parallelEdges/utils.js");
sigma.renderers.def = sigma.renderers.canvas

var $result = document.getElementById("result");

function update () {
    var result = null
      , input = editor.getValue()
      ;

    try {
        eval(input);
    } catch (e) { return; }

    $result.textContent = result;

    // Clean up the container
    $result.innerHTML = "";

    // Create the sigma instance
    __s = new sigma({
        graph: window.GRAPH_DATA,
        container: "result" //$result
    });

    // Handle node dragging
    sigma.plugins.dragNodes(__s, __s.renderers[0]);
}

var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/javascript");
editor.setFontSize(12);
window.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.keyCode === 13) {
        update();
    }
});
editor.focus();
update();
