
/*
 * Initialization of SVG elements for the other widgets to draw on
 * TODO: Think of a better use for this file
 */

function clicked(evt) {
  var e = evt.target;
  var dim = e.getBoundingClientRect();
  var x = evt.clientX - dim.left;
  var y = evt.clientY - dim.top;
  alert("x: " + x + " y:" + y);
}

var mainSvg = d3
  .select("#graph")
  .append("svg")
  .attr("width", MAIN_SVG_WIDTH)
  .attr("height", MAIN_SVG_HEIGHT)
  .attr("viewBox", "-70 -15 700 500")
  .attr("onclick", "cursorPoint(evt)")

// Create an SVGPoint for future math
var svg = document.querySelector("svg");
var pt = svg.createSVGPoint();
// Get point in global SVG space
function dfs2(vtx) {
  document.getElementById('sequence').innerHTML = "Sequence of Nodes:  ";
  if (isPlaying) {
    gw.stop();
    isPaused = false;
    isPlaying = false;
  }
  var sourceS = parseInt(vtx);
  setTimeout(function() {
    if (mode == "exploration" && gtWidget.dfs(sourceS)) {
      isPlaying = true;
    }
  }, 500);
}

function cursorPoint(evt) {
  pt.x = evt.clientX;
  pt.y = evt.clientY;
  console.log(vertexRange);
  var cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());
  var flag = 0;
  for (let i = 0; i < vertexRange.length; ++i) {
    if (
      vertexRange[i].cx - 19 <= cursorpt.x &&
      cursorpt.x <= vertexRange[i].cx + 19
    ) {
      if (
        vertexRange[i].cy - 19 <= cursorpt.y &&
        cursorpt.y <= vertexRange[i].cy + 19
      ) {
        console.log(vertexRange[i].text);
        flag = 1;
        dfs2(vertexRange[i].text);
        break;
      }
    }
  }
  if (flag == 0) {
    console.log("No Vertex");
  }
}
// var pt = mainSvg.createSVGPoint();

// Currently pseudocodeSvg is not used; pseudocodes are handled by front end
var pseudocodeSvg = d3
  .select("#pseudocode")
  .append("svg")
  .attr("width", PSEUDOCODE_SVG_WIDTH)
  .attr("height", PSEUDOCODE_SVG_HEIGHT);

var markerSvg = mainSvg.append("g").attr("id", "marker");
