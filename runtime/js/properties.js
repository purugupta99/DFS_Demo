
/*
 * Contains visualization properties (SVG objects size, color, etc.)
 * Make sure to add the corresponding constants to the constant.js file
 */

/*
 * Widget
 */

const MAIN_SVG_WIDTH = 900;
const MAIN_SVG_HEIGHT = 500;
const PSEUDOCODE_SVG_WIDTH = 300;
const PSEUDOCODE_SVG_HEIGHT = 400;

/*
 * GraphVertexWidget
 */

const graphVertexProperties = {
  "innerVertex":{
    "r": 29,
    "width":30,
    "height": 30,
    "stroke-width": 0,
    "default":{
      "fill": "white",
      "stroke": "#75b0d6"
    },
    "normal_blue":{
      "fill": "black",
      "stroke": "black"
    },
    "highlighted":{
      "fill": "#9ed03e",
      "stroke": "#9ed03e"
    },
    "highlighted_rect":{
      "fill": "black",
      "stroke": "black"
    },
    "traversed":{
      "fill": "black",
      "stroke": "black"
    },    
    "result":{
      "fill": "#f7e81e",
      "stroke": "#fff"
    },
    "rect": {
      "fill": "black",
      "stroke": "black"
    },
    "result_rect": {
      "fill": "black",
      "stroke": "#fff"
    },
	"greenFill":{
      "fill": "#52bc69",
      "stroke": "#fff"
    },
	"greenOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    },
	"pinkFill":{
      "fill": "#ed5a7d",
      "stroke": "#fff"
    },
	"pinkOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    },
	"blueFill":{
      "fill": "black",
      "stroke": "#fff"
    },
	"blueOutline":{
    "fill": "#A9A9A9",
    "stroke": "#A9A9A9"
    },
	"redFill":{
      "fill": "#d9513c",
      "stroke": "#fff"
    },
	"redOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    },
	"greyFill":{
      "fill": "black",
      "stroke": "#fff"
    },
	"greyOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    }
  },
  "outerVertex":{
    "r": 30,
    "width": 32,
    "height": 32,
    "stroke-width": 2,
    "default":{
      "fill": "white",
      "stroke": "#69b3d7"
    },
    "normal_blue":{
      "fill": "#2ebbd1",
      "stroke": "#333"
    },
    "highlighted":{
      "fill": "#9ed03e",
      "stroke": "#9ed03e"
    },
    "highlighted_rect":{
      "fill": "black",
      "stroke": "#333"
    },
    "traversed":{
      "fill": "black",
      "stroke": "black"
    },
    "result":{
      "fill": "black",
      "stroke": "black"
    },
    "rect":{
      "fill": "black",
      "stroke": "black"
    },
    "result_rect":{
      "fill": "black",
      "stroke": "black"
    },  
	"greenFill":{
      "fill": "#52bc69",
      "stroke": "#52bc69"
    },
	"greenOutline":{
      "fill": "#52bc69",
      "stroke": "#52bc69"
    },
	"pinkFill":{
      "fill": "#ed5a7d",
      "stroke": "#ed5a7d"
    },
	"pinkOutline":{
      "fill": "#ed5a7d",
      "stroke": "#ed5a7d"
    },
	"blueFill":{
    "fill": "black",
    "stroke": "black"
    },
	"blueOutline":{
    "fill": "#A9A9A9",
    "stroke": "#A9A9A9"
    },
	"redFill":{
      "fill": "#d9513c",
      "stroke": "#d9513c"
    },
	"redOutline":{
      "fill": "#d9513c",
      "stroke": "#d9513c"
    },
	"greyFill":{
      "fill": "#cccccc",
      "stroke": "#cccccc"
    },
	"greyOutline":{
      "fill": "#cccccc",
      "stroke": "#cccccc"
    }
  },
  "text":{
    "font-size": 20,
    "default":{
      "fill": "#333",
      "font-family": "'OpenSans-SemiBold', sans-serif",
      "text-anchor": "middle"
    },
    "normal_blue":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "highlighted":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "highlighted_rect":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "left"
    },
    "traversed":{
      "fill": "white",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "result":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "rect":{
      "fill": "#333",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "left"
    },
    "result_rect":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "left"
    },
	"greenFill":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"greenOutline":{
      "fill": "#52bc69",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"pinkFill":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"pinkOutline":{
      "fill": "#ed5a7d",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"blueFill":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"blueOutline":{
      "fill": "white",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"redFill":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"redOutline":{
      "fill": "#d9513c",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"greyFill":{
      "fill": "#fff",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"greyOutline":{
      "fill": "#cccccc",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    }
  }
};

/*
 * GraphEdgeWidget
 */

const graphEdgeProperties = {
  "animateHighlightedPath":{
      "stroke": "#9ed03e",
      "stroke-width": 10
  },
  "path":{
    "stroke-width": 2,
    "default":{
      "stroke": "#333"
    },
    "highlighted":{
      "stroke": "#9ed03e"
    },
    "traversed":{
      "stroke": "#7bc3e3"
    },
	"green":{
      "stroke": "#52bc69"
    },
	"pink":{
      "stroke": "#ed5a7d"
    },
	"blue":{
      "stroke": "#2ebbd1"
    },
	"red":{
    "stroke": "#7bc3e3"
    },
	"grey":{
      "stroke": "#cccccc"
    }
  },
  "weight":{
    "font-size": 16,
    "default":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#333",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "highlighted":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#9ed03e",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "traversed":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#9ed03e",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"green":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#52bc69",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"pink":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#ed5a7d",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"blue":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#2ebbd1",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"red":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#d9513c",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"grey":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#cccccc",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    }
  }
}

/*
 * marker.js
 * Currently this file doesn't exist; markers are placed in GraphEdgeWidget.js
 */

const ARROW_MARKER_WIDTH = 3;
const ARROW_MARKER_HEIGHT = 3;
const ARROW_REFX = 9;
const ARROW_FILL = "#333";
