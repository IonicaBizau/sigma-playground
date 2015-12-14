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

// Catch clicks on the render button
document.querySelector("button").addEventListener("click", function () {

    // Parse the input
    var data = JSON.parse(document.querySelector("textarea").value);

    // Clean up the container
    document.querySelector("#graph-container").innerHTML = "";

    // Create the sigma instance
    s = new sigma({
        graph: g,
        container: 'graph-container'
    });

    // Handle node dragging
    sigma.plugins.dragNodes(s, s.renderers[0]);
});
