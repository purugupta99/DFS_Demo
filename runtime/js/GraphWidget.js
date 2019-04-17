
var vertexRange = [];
var vertexSvg = mainSvg.append("g").attr("id", "vertex");
var main1Svg = d3
  .select("#vizinst")
  .append("svg")
  .attr("viewBox", "0 0 200 500")

// Create an SVGPoint for future math
//var svg = document.querySelector("svg");
//var pt = svg.createSVGPoint();

var nodes = main1Svg.append("text").attr("x", "20").attr("y", "15")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "16")
  .text("Node Types");

var table = main1Svg.append("circle")
  .attr("r", "10")
  .attr("cx", "150")
  .attr("cy", "45")
  .attr("stroke", "#69b3d7")
  .attr("stroke-width", "2")
  .attr("fill", "white");

var table1 = main1Svg.append("text")
  .attr("x", "0")
  .attr("y", "50")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "14")
  .text("Unvisited(White): ");


var table2 = main1Svg.append("circle").attr("r", "10")
  .attr("cx", "150")
  .attr("cy", "80")
  .attr("stroke", "#A9A9A9")
  .attr("stroke-width", "2")
  .attr("fill", "#A9A9A9");

var table3 = main1Svg.append("text").attr("x", "0").attr("y", "85")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "14")
  .text("Traversed(Grey)   : ");

var table4 = main1Svg.append("circle").attr("r", "10")
  .attr("cx", "150")
  .attr("cy", "115")
  .attr("stroke", "black")
  .attr("stroke-width", "2")
  .attr("fill", "black");

var table5 = main1Svg.append("text").attr("x", "0").attr("y", "120")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "14")
  .text("Explored(Black)  : ");

var table4 = main1Svg.append("circle").attr("r", "10")
  .attr("cx", "150")
  .attr("cy", "150")
  .attr("stroke", "#9ed03e")
  .attr("stroke-width", "2")
  .attr("fill", "#9ed03e");

var table5 = main1Svg.append("text").attr("x", "0").attr("y", "155")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "14")
  .text("Highlighted  : ");

var nodes1 = main1Svg.append("text").attr("x", "20").attr("y", "215")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "16")
  .text("Edge Types");

var table1 = main1Svg.append("line")
  .attr("x1", "110")
  .attr("y1", "245")
  .attr("x2", "150")
  .attr("y2", "245")
  .attr("stroke", "black")
  .attr("stroke-width", "2")
  .attr("fill", "white");

var table11 = main1Svg.append("text")
  .attr("x", "0")
  .attr("y", "250")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "14")
  .text("Unvisited: ");


var table21 = main1Svg.append("line")
  .attr("x1", "110")
  .attr("y1", "280")
  .attr("x2", "150")
  .attr("y2", "280")
  .attr("stroke", "#9ed03e")
  .attr("stroke-width", "2")
  .attr("fill", "white");

var table31 = main1Svg.append("text").attr("x", "0").attr("y", "285")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "14")
  .text("Traversed   : ");

var table41 = main1Svg.append("line")
  .attr("x1", "110")
  .attr("y1", "315")
  .attr("x2", "150")
  .attr("y2", "315")
  .attr("stroke", "#7bc3e3")
  .attr("stroke-width", "2")
  .attr("fill", "white");

var table51 = main1Svg.append("text").attr("x", "0").attr("y", "320")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "14")
  .text("Explored  : ");
/*
var nodes = mainSvg.append("text").attr("x", "-410").attr("y", "237")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "20")
  .text("Edge Types");

var table6 = mainSvg.append("text").attr("x", "-450").attr("y", "267")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "16")
  .text("Traversed     : ");

  var table7 = mainSvg.append("text").attr("x", "-450").attr("y", "307")
  .attr("stroke-width", "2")
  .attr("fill", "#333")
  .attr("font-family", "OpenSans-SemiBold")
  .attr("font-size", "16")
  .text("Not Traversed     : ");
*/
var edgeSvg = mainSvg.append("g").attr("id", "edge");

var vertexTextSvg = mainSvg.append("g").attr("id", "vertexText");

var edgeWeightSvg = mainSvg.append("g").attr("id", "edgeWeight");

var edgeWeightPathSvg = mainSvg.append("g").attr("id", "edgeWeightPath");

var GraphWidget = function() {
  var self = this;

  var vertexList = {};
  var edgeList = {};

  var vertexUpdateList = {};
  var edgeUpdateList = {};

  var currentIteration = NO_ITERATION;
  var animationStateList = NO_STATELIST;
  var animationStatus = ANIMATION_STOP;

  var animationDuration = 500;

  // Show: true means the element will immediately appear on the html page
  //       false means the element will remain hidden until told to appear
  // Duration: duration of the show animation, only used when show is true

  // Adds a CIRCLE vertex
  // TODO: Merge with addRectVertex
  this.addVertex = function(cx, cy, vertexText, vertexClassNumber, show) {
    if (show != false) show = true;

    var newVertex = new GraphVertexWidget(
      cx,
      cy,
      VERTEX_SHAPE_CIRCLE,
      vertexText,
      vertexClassNumber
    );

    vertexList[vertexClassNumber] = newVertex;
    vertexUpdateList[vertexClassNumber] = false;

    if (show == true) {
      vertexList[vertexClassNumber].showVertex();
      vertexList[vertexClassNumber].redraw();
    }
  };

  // Adds a RECTANGULAR vertex
  // TODO: Merge with addVertex
  this.addRectVertex = function(
    rx,
    ry,
    vertexText,
    vertexClassNumber,
    show,
    rect_type
  ) {
    if (show != false) show = true;

    console.log(VERTEX_SHAPE_RECT);
    if (typeof rect_type == "undefined") rect_type = VERTEX_SHAPE_RECT;
    var newVertex = new GraphVertexWidget(
      rx,
      ry,
      rect_type,
      vertexText,
      vertexClassNumber
    );

    vertexList[vertexClassNumber] = newVertex;
    vertexUpdateList[vertexClassNumber] = false;

    if (show == true) {
      vertexList[vertexClassNumber].showVertex();
      vertexList[vertexClassNumber].redraw();
    }
  };

  // Default for weight is 1 and for type is EDGE_TYPE_UDE
  this.addEdge = function(
    vertexClassA,
    vertexClassB,
    edgeIdNumber,
    type,
    weight,
    show,
    showWeight
  ) {
    try {
      if (show != false) show = true;
      if (showWeight != true) showWeight = false;
      if (type == null || isNaN(type)) type = EDGE_TYPE_UDE;
      if (weight == null || isNaN(weight)) weight = 1;

      var vertexA = vertexList[vertexClassA];
      var vertexB = vertexList[vertexClassB];

      var newEdge = new GraphEdgeWidget(
        vertexA,
        vertexB,
        edgeIdNumber,
        type,
        weight
      );

      edgeList[edgeIdNumber] = newEdge;
      edgeUpdateList[edgeIdNumber] = false;

      vertexList[vertexClassA].addEdge(newEdge);
      vertexList[vertexClassB].addEdge(newEdge);

      if (show == true) {
        edgeList[edgeIdNumber].showEdge();
        if (showWeight == true) edgeList[edgeIdNumber].showWeight();
        edgeList[edgeIdNumber].redraw();
      }
    } catch (err) {}
  };

  this.removeEdge = function(edgeIdNumber) {
    if (edgeList[edgeIdNumber] == null || edgeList[edgeIdNumber] == undefined)
      return;

    edgeList[edgeIdNumber].removeEdge();
    delete edgeList[edgeIdNumber];
    delete edgeUpdateList[edgeIdNumber];
  };

  // Edges are assumed to have been removed
  this.removeVertex = function(vertexClassNumber) {
    vertexList[vertexClassNumber].removeVertex();
    delete vertexList[vertexClassNumber];
    delete vertexUpdateList[vertexClassNumber];
  };

  // graphState object is equivalent to one element of the statelist.
  // See comments below this function
  this.updateGraph = function(graphState, duration) {
    if (duration == null || isNaN(duration)) duration = animationDuration;
    updateDisplay(graphState, duration);
  };

  /*
   * stateList: List of JS object containing the states of the objects in the graph
   * Structure of stateList: List of JS object with the following keys and values:
   *                            - vl: JS object with vertex ID as keys and corresponding state positions and constants as value (NEW: another extra text)
   *                            - el: JS object with edge ID as keys and corresponding state connections constants as value
   *
   * Objects not present in the i-th iteration stateList will be hidden until the animation stops, where it will be removed
   * New objects present in the i-th iteration stateList will be automatically created
   *
   * State 0 should be the initial state, last state should be the end state
   */

  /*
   * Contents of "vl":
   * - cx
   * - cy
   * - text
   * - state
   *
   * Optional contents of "vl":
   * - inner-r  : Customize the vertex's inner radius!
   * - outer-r  : Customize the vertex's outer radius!
   * - inner-w  : Customize the vertex's inner width!
   * - outer-w  : Customize the vertex's outer width!
   * - inner-h  : Customize the vertex's inner height!
   * - outer-h  : Customize the vertex's outer height!
   * - inner-stroke-width : Customize the vertex's inner stroke width!
   * - outer-stroke-width : Customize the vertex's outer stroke width!
   * - text-font-size : Customize the vertex text's font size!
   * - NEW: extratext : Add a red extra text below each vertex
   */

  /*
   * Contents of "el":
   * - vertexA: id of vertex A
   * - vertexB: id of vertex B
   * - type
   * - weight
   * - state  : Display state
   * - animateHighlighted : Determines whether highlighted animation should be played. True or false
   *
   * Optional contents of "el":
   * - displayWeight  : Determines whether weight should be shown. True or false
   */

  /*
   * Notes:
   * - Vertex's elements will only affect vertexes that has that element
   *   (example: radius will only affect circular vertex, width and height will only affect rectangular vertex)
   *   Think of each vertex as an SVG element and see which components are present
   * - The optional contents has to be defined for EACH state objects
   *   For example, if you define a custom radius in state 1 and didn't define it in state 2,
   *   the vertex will revert to default radius upon reaching state 2
   */

  this.startAnimation = function(stateList) {
    if (stateList != null) animationStateList = stateList;
    if (currentIteration == NO_ITERATION) currentIteration = 0;

    var key;

    self.play();
  };

  this.animate = function() {
    if (
      currentIteration >= animationStateList.length &&
      animationStatus != ANIMATION_STOP
    )
      animationStatus = ANIMATION_PAUSE;
    if (animationStatus == ANIMATION_PAUSE || animationStatus == ANIMATION_STOP)
      return;

    self.next(animationDuration);

    setTimeout(function() {
      self.animate();
    }, animationDuration);
  };

  this.play = function() {
    if (currentIteration < 0) currentIteration = 0;

    if (animationStatus == ANIMATION_STOP) {
      animationStatus = ANIMATION_PLAY;
      //animationStateList[]
      updateDisplay(animationStateList[currentIteration], animationDuration);
      setTimeout(function() {
        self.animate();
        //alert(currentIteration, stack);
        //updatesequence(stack[currentIteration]);
      }, animationDuration);
    } else {
      alert(stack);
      animationStatus = ANIMATION_PLAY;
      self.animate();
    }
  };

  this.pause = function() {
    animationStatus = ANIMATION_PAUSE;
  };

  this.stop = function() {
    // while(currentIteration < animationStateList.length - 1){
    //   self.forceNext(0);
    // }

    self.jumpToIteration(animationStateList.length - 1, 0);

    currentIteration = animationStateList.length - 1;
    animationStatus = ANIMATION_STOP;

    var currentVertexState = animationStateList[currentIteration]["vl"];
    var currentEdgeState = animationStateList[currentIteration]["el"];

    var key;

    for (key in currentEdgeState) {
      edgeUpdateList[key] = true;
    }

    for (key in edgeUpdateList) {
      if (edgeUpdateList[key] == false) {
        self.removeEdge(key);
      }
    }

    for (key in currentVertexState) {
      vertexUpdateList[key] = true;
    }

    for (key in vertexUpdateList) {
      if (vertexUpdateList[key] == false) {
        self.removeVertex(key);
      }
    }

    for (key in edgeUpdateList) {
      edgeUpdateList[key] = false;
    }

    for (key in vertexUpdateList) {
      vertexUpdateList[key] = false;
    }

    animationStateList = NO_STATELIST;
    currentIteration = NO_ITERATION;
  };

  this.next = function(duration) {
    if (currentIteration < 0) currentIteration = 0;
    currentIteration++;
    if (currentIteration >= animationStateList.length) {
      currentIteration = animationStateList.length - 1;
      return;
    }
    updateDisplay(animationStateList[currentIteration], duration);
  };

  this.previous = function(duration) {
    if (currentIteration >= animationStateList.length)
      currentIteration = animationStateList.length - 1;
    currentIteration--;
    if (currentIteration < 0) return;
    updateDisplay(animationStateList[currentIteration], duration);
  };

  this.forceNext = function(duration) {
    self.pause();
    self.next(duration);
  };

  this.forcePrevious = function(duration) {
    self.pause();
    self.previous(duration);
  };

  this.jumpToIteration = function(iteration, duration) {
    self.pause();
    currentIteration = iteration;
    if (currentIteration >= animationStateList.length)
      currentIteration = animationStateList.length - 1;
    if (currentIteration < 0) currentIteration = 0;
    updateDisplay(animationStateList[currentIteration], duration);
  };

  this.replay = function() {
    self.jumpToIteration(0, 0);
    setTimeout(function() {
      self.play();
    }, 500);
  };

  this.getCurrentIteration = function() {
    return currentIteration;
  };

  this.getTotalIteration = function() {
    return Object.keys(animationStateList).length;
  };

  this.getAnimationDuration = function() {
    return animationDuration;
  };

  // Get the current state object of the animation. Useful to reproduce the graph.
  // DO NOT CALL THIS FUNCTION WHEN ANIMATION IS NOT STARTED YET
  this.getCurrentState = function() {
    return animationStateList[currentIteration];
  };

  this.setAnimationDuration = function(duration) {
    animationDuration = duration;
  };

  function updateDisplay(graphState, duration) {
    // Add boolean flag for vertexes and edges that exists in the current visualization
    // Check the boolean flags each time this function is called
    // If there are objects that are not updated, it means that the object is removed
    // If there are new objects that currently not in the flags, it means the object is created this turn

    console.log("iteration " + currentIteration);
    var lastIteration = Object.keys(animationStateList).length - 1;
    try {
      $("#progress-bar").slider("value", currentIteration);
      $("#status p").html(
        /*"iteration " + currentIteration + ": " + */ animationStateList[
          currentIteration
        ]["status"]
      );
      highlightLine(animationStateList[currentIteration]["lineNo"]);
      if (currentIteration == lastIteration) {
        pause(); //in html file
        $("#play img")
          .attr("src", "img/replay.png")
          .attr("alt", "replay")
          .attr("title", "replay");
      } else {
        $("#play img")
          .attr("src", "img/play.png")
          .attr("alt", "play")
          .attr("title", "play");
      }
    } catch (error) {
      // Status has not been integrated in most of my animation, so leave it like this
    }

    var currentVertexState = graphState["vl"];
    var currentEdgeState = graphState["el"];

    var key;

    for (key in currentVertexState) {
      if (vertexList[key] == null || vertexList[key] == undefined) {
        self.addVertex(
          currentVertexState[key]["cx"],
          currentVertexState[key]["cy"],
          currentVertexState[key]["text"],
          key,
          false
        );
        vertexRange.push({
          text: currentVertexState[key]["text"],
          cx: currentVertexState[key]["cx"],
          cy: currentVertexState[key]["cy"],
          radius: 19
        });
        console.log(vertexRange);
      }

      var currentVertex = vertexList[key];
      currentVertex.showVertex();
      if (currentVertexState[key]["state"] == VERTEX_HIGHLIGHTED)
      {
        updatesequence(key);
      }

      if (currentVertexState[key]["state"] == OBJ_HIDDEN)
        currentVertex.hideVertex();
      else if (currentVertexState[key]["state"] != null)
        currentVertex.stateVertex(currentVertexState[key]["state"]);
      else currentVertex.stateVertex(VERTEX_DEFAULT);

      currentVertex.moveVertex(
        currentVertexState[key]["cx"],
        currentVertexState[key]["cy"]
      );
      currentVertex.changeText(currentVertexState[key]["text"]);

      if (currentVertexState[key]["text-font-size"] != null) {
        currentVertex.changeTextFontSize(
          currentVertexState[key]["text-font-size"]
        );
      }
      if (
        currentVertexState[key]["inner-r"] != null &&
        currentVertexState[key]["outer-r"] != null
      ) {
        currentVertex.changeRadius(
          currentVertexState[key]["inner-r"],
          currentVertexState[key]["outer-r"]
        );
      }
      if (
        currentVertexState[key]["inner-w"] != null &&
        currentVertexState[key]["outer-w"] != null
      ) {
        currentVertex.changeWidth(
          currentVertexState[key]["inner-w"],
          currentVertexState[key]["outer-w"]
        );
      }
      if (
        currentVertexState[key]["inner-h"] != null &&
        currentVertexState[key]["outer-h"] != null
      ) {
        currentVertex.changeHeight(
          currentVertexState[key]["inner-h"],
          currentVertexState[key]["outer-h"]
        );
      }
      if (
        currentVertexState[key]["inner-stroke-width"] != null &&
        currentVertexState[key]["outer-stroke-width"] != null
      ) {
        currentVertex.changeStrokeWidth(
          currentVertexState[key]["inner-stroke-width"],
          currentVertexState[key]["outer-stroke-width"]
        );
      }
      if (currentVertexState[key]["extratext"] != null) {
        currentVertex.changeExtraText(currentVertexState[key]["extratext"]);
      }

      currentVertex.redraw(duration);

      vertexUpdateList[key] = true;
    }

    for (key in vertexUpdateList) {
      if (vertexUpdateList[key] == false) {
        vertexList[key].hideVertex();
        vertexList[key].redraw(duration);
        vertexUpdateList[key] = true;
      }
    }

    try {
      for (key in currentEdgeState) {
        if (edgeList[key] == null || edgeList[key] == undefined) {
          self.addEdge(
            currentEdgeState[key]["vertexA"],
            currentEdgeState[key]["vertexB"],
            key,
            currentEdgeState[key]["type"],
            currentEdgeState[key]["weight"],
            false
          );
        }

        var currentEdge = edgeList[key];

        currentEdge.showEdge();

        if (currentEdgeState[key]["state"] == OBJ_HIDDEN)
          currentEdge.hideEdge();
        else if (currentEdgeState[key]["state"] != null)
          currentEdge.stateEdge(currentEdgeState[key]["state"]);
        else currentEdge.stateEdge(EDGE_DEFAULT);

        currentEdge.hideWeight();
        if (
          currentEdgeState[key]["state"] != OBJ_HIDDEN &&
          currentEdgeState[key]["displayWeight"] != null &&
          currentEdgeState[key]["displayWeight"]
        ) {
          currentEdge.showWeight();
        }

        currentEdge.changeVertexA(vertexList[currentEdgeState[key]["vertexA"]]);
        currentEdge.changeVertexB(vertexList[currentEdgeState[key]["vertexB"]]);
        if (currentEdgeState[key]["type"] == null)
          currentEdgeState[key]["type"] = EDGE_TYPE_UDE;
        currentEdge.changeType(currentEdgeState[key]["type"]);
        if (currentEdgeState[key]["weight"] != null)
          currentEdge.changeWeight(currentEdgeState[key]["weight"]);

        currentEdge.refreshPath();
        if (
          currentEdgeState[key]["animateHighlighted"] == null ||
          !currentEdgeState[key]["animateHighlighted"]
        )
          currentEdge.redraw(duration);
        else {
          currentEdge.animateHighlighted(duration * 0.9);
        }

        edgeUpdateList[key] = true;
      }

      for (key in edgeUpdateList) {
        if (edgeUpdateList[key] == false) {
          edgeList[key].hideEdge();
          edgeList[key].redraw(duration);
          edgeUpdateList[key] = true;
        }
      }
    } catch (err) {}
    for (key in vertexUpdateList) {
      vertexUpdateList[key] = false;
    }

    for (key in edgeUpdateList) {
      edgeUpdateList[key] = false;
    }
  }
};
