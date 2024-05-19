/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html {
  height: 100%;
  font-family: Arial, sans-serif;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  height: 100%;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  /* height: 100%; */
  margin: 1rem;
  min-height: 21rem;
  /* width: 110rem; */
  /* height: 60rem; */
  border: 1px solid #8d8d8d;
  border-radius: 13px;

  /* border-radius: 3px; */
  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  /* background-color: #b2b2b2; */
  background: rgb(236, 236, 236);
  background: linear-gradient(
    180deg,
    rgba(236, 236, 236, 1) 15%,
    rgba(131, 131, 131, 0.4066001400560224) 100%
  );
  border-right: 1px solid #000000;
  border-radius: 13px 0px 0px 13px;
  color: #fff;
  padding: 10px;
}

.sidebar button {
  margin-bottom: 0.2em;
  width: 20vw;
  overflow: hidden;
}

.main-content {
  flex: 1;
  /* padding: 20px; */
  /* margin-left: 8px; */
  margin: 8px;
}

#task-list {
  list-style: none;
  padding-left: 0;
}

#task-list li {
  display: flex;
  align-items: center;
  margin: 5px;
}

.task-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  padding: 5px;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button-container button:first-child {
  /* float: left; */
  margin-right: auto;
}

.button-container button:last-child {
  margin-left: 5px;
}

.delete-task-btn {
  color: red;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-container label {
  font-size: small;
  flex-basis: 70px;
}

.input-container select,
input {
  flex: auto;
}

.comp-btn {
  /* display:block; */
  position: relative;
  width: 23px;
  height: 23px;
  line-height: 23px;
  /* border: 2px solid #f5f5f5; */
  border-radius: 50%;
  color: #000000;
  text-align: center;
  text-decoration: none;
  /* background: #555777; */
  /* box-shadow: 0 0 3px gray; */
  /* font-size:20px; */
  /* font-weight:bold;  */
  margin-right: 6px;
  transition: all 0.3s ease;
}
.comp-btn:hover {
  background: #ace4ae;
}

.comp-btn:hover .button-text {
  opacity: 1;
}

.button-text {
  opacity: 0;
  transition: opacity 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.completed {
  color: darkgray;
  text-decoration: line-through;
}

.project-name-input {
  width: 20vw;
  border: none;
}

.project-title-header {
  display: flex;
  padding: 5px;
}

.project-title-header h3 {
  display: flex;
}

.active-project {
  font-weight: bold;
}

#new-task-button-li button{
  margin-top: 15px;
}

/* TO DO: Horizontal Center Project buttons. Flex? */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;EACE,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,UAAU;EACV,SAAS;EACT,YAAY;AACd;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;;EAEnB,wBAAwB;EACxB,kDAAkD;EAClD,0CAA0C;EAC1C,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,+BAA+B;EAC/B,8BAA8B;EAC9B;;;;GAIC;EACD,+BAA+B;EAC/B,gCAAgC;EAChC,WAAW;EACX,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,+BAA+B;EAC/B,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,8BAA8B;EAC9B,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,6BAA6B;EAC7B,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,oDAAoD","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml {\n  height: 100%;\n  font-family: Arial, sans-serif;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.body {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n  display: flex;\n  /* height: 100%; */\n  margin: 1rem;\n  min-height: 21rem;\n  /* width: 110rem; */\n  /* height: 60rem; */\n  border: 1px solid #8d8d8d;\n  border-radius: 13px;\n\n  /* border-radius: 3px; */\n  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  max-width: 20rem;\n  /* background-color: #b2b2b2; */\n  background: rgb(236, 236, 236);\n  background: linear-gradient(\n    180deg,\n    rgba(236, 236, 236, 1) 15%,\n    rgba(131, 131, 131, 0.4066001400560224) 100%\n  );\n  border-right: 1px solid #000000;\n  border-radius: 13px 0px 0px 13px;\n  color: #fff;\n  padding: 10px;\n}\n\n.sidebar button {\n  margin-bottom: 0.2em;\n  width: 20vw;\n  overflow: hidden;\n}\n\n.main-content {\n  flex: 1;\n  /* padding: 20px; */\n  /* margin-left: 8px; */\n  margin: 8px;\n}\n\n#task-list {\n  list-style: none;\n  padding-left: 0;\n}\n\n#task-list li {\n  display: flex;\n  align-items: center;\n  margin: 5px;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border: 1px solid;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.button-container button:first-child {\n  /* float: left; */\n  margin-right: auto;\n}\n\n.button-container button:last-child {\n  margin-left: 5px;\n}\n\n.delete-task-btn {\n  color: red;\n}\n\n.input-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.input-container label {\n  font-size: small;\n  flex-basis: 70px;\n}\n\n.input-container select,\ninput {\n  flex: auto;\n}\n\n.comp-btn {\n  /* display:block; */\n  position: relative;\n  width: 23px;\n  height: 23px;\n  line-height: 23px;\n  /* border: 2px solid #f5f5f5; */\n  border-radius: 50%;\n  color: #000000;\n  text-align: center;\n  text-decoration: none;\n  /* background: #555777; */\n  /* box-shadow: 0 0 3px gray; */\n  /* font-size:20px; */\n  /* font-weight:bold;  */\n  margin-right: 6px;\n  transition: all 0.3s ease;\n}\n.comp-btn:hover {\n  background: #ace4ae;\n}\n\n.comp-btn:hover .button-text {\n  opacity: 1;\n}\n\n.button-text {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.completed {\n  color: darkgray;\n  text-decoration: line-through;\n}\n\n.project-name-input {\n  width: 20vw;\n  border: none;\n}\n\n.project-title-header {\n  display: flex;\n  padding: 5px;\n}\n\n.project-title-header h3 {\n  display: flex;\n}\n\n.active-project {\n  font-weight: bold;\n}\n\n#new-task-button-li button{\n  margin-top: 15px;\n}\n\n/* TO DO: Horizontal Center Project buttons. Flex? */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Project(name) {
  const generateId = () => Math.random().toString(36).substring(2, 9);

  let projectName = name;
  const projectId = generateId();
  let projectIsActive = false;

  // one array stores task details, one stores the actual task objects themselves
  const tasksDetailsArray = [];
  const tasksObjectsArray = [];

  const addTask = (newTask) => {
    tasksDetailsArray.push(newTask.getTask());
    tasksObjectsArray.push(newTask);
    return projectId;
  };

  const deleteTask = (taskId) => {
    const result = tasksDetailsArray.findIndex((obj) => obj["id"] === taskId);
    tasksDetailsArray.splice(result, 1);
    tasksObjectsArray.splice(result, 1);
  };

  const getTasksDetails = () => tasksDetailsArray;
  const getTasksObjects = () => tasksObjectsArray;

  const getTask = (taskId) => {
    const foundTask = tasksDetailsArray.findIndex((task) => task.id === taskId);
    return tasksObjectsArray[foundTask];
  };

  const setProjectName = (name) => (projectName = name);

  // Not currently using this functionality
  const toggleProjectActive = () => projectIsActive = !projectIsActive;

  const getProjectDetails = () => {
    return {
      projectName,
      projectId,
      projectIsActive, // Not currently using this
      tasksDetailsArray,
    };
  };

  return {
    addTask,
    deleteTask,
    getTasksDetails,
    getTasksObjects,
    getTask,
    setProjectName,
    toggleProjectActive,
    getProjectDetails,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/ProjectList.js":
/*!****************************!*\
  !*** ./src/ProjectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ProjectList() {
  const projects = [];

  const addProject = (project) => projects.push(project);

  const deleteProject = (projectId) => {
    const result = projects.findIndex(
      (obj) => obj.getProjectDetails().projectId === projectId
    );
    projects.splice(result, 1);
    return result;
  };

  const getProjects = () => projects;

  return { addProject, deleteProject, getProjects };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Task({ title, description, dueDate = new Date(), priority, notes }) {
  const generateId = () => Math.random().toString(36).substring(2, 9);

  const setTaskOwner = (projectId) => {
    task.owner = projectId;
  };

  let task = {
    title,
    description,
    dueDate,
    priority,
    notes,
    id: generateId(),
    owner: null,
    completed: false,
  };

  const getTask = () => task;
  const getTaskId = () => task.id;

  const getTaskOwner = () => task.owner;

  const editTask = ({ title, description, dueDate, priority, notes }) => {
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (priority !== undefined) task.priority = priority;
    if (notes !== undefined) task.notes = notes;
    console.log(`${title} edited`);
  };

  const toggleCompleted = () => (task.completed = !task.completed);

  return {
    getTask,
    getTaskId,
    editTask,
    setTaskOwner,
    getTaskOwner,
    toggleCompleted,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/Project.js");



function View() {
  const sidebarDiv = document.getElementById("sidebar");
  const mainContentDiv = document.getElementById("main-content");

  const mainContentPlaceholder = `<div id="main-content" class="main-content">
  <h2>To Do</h2>
  <p>Select a Project to get started!</p>
</div>`;

  mainContentDiv.innerHTML = mainContentPlaceholder;

  // Store project state information for access inside of View
  let storedProjects;
  let activeProject;

  const storeInitialProjects = (projects) => {
    storedProjects = projects;
    updateProjectView();
  };

  // Helper function to find the Project that a Task belongs to
  const getOwningProjectFromTaskDetails = (task) => {
    const owningProject = storedProjects
      .getProjects()
      .find((project) => project.getProjectDetails().projectId === task.owner);
    return owningProject;
  };

  // Helper function to return HTML date
  const HTMLdate = (dateInput) => {
    const date = new Date(dateInput);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    const htmlDate = year + "-" + month + "-" + day;

    return htmlDate;
  };

  // Another date helper function to deal with UTC dates
  function parseDateString(dateString) {
    const dateOnlyRegex =
      /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])))$/;
    if (dateOnlyRegex.test(dateString)) {
      const utcDate = new Date(dateString);
      const localDate = new Date(
        utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
      );
      return localDate;
    }
    return new Date(dateString);
  }

  const handleProjectBtn = (project) => {
    activeProject = project;
    updateProjectView();
    updateTaskView(project);
  };

  const handleNewTaskBtn = () => {
    const newTestingTask = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "",
      description: "",
      dueDate: undefined,
      priority: "",
      notes: "",
      completed: false,
    });
    const newTask = activeProject.addTask(newTestingTask);
    newTestingTask.setTaskOwner(newTask);
    editTask(newTestingTask.getTask(), true);
  };

  const handleDeleteTask = (task) => {
    const owningProject = getOwningProjectFromTaskDetails(task);

    if (owningProject) {
      owningProject.deleteTask(task.id);
      updateTaskView(owningProject);
    } else {
      console.error("Owning project not found for task", task);
    }
  };

  const handleCancel = (task, isNewTask = false) => {
    const taskOwner = getOwningProjectFromTaskDetails(task);
    if (isNewTask) handleDeleteTask(task);
    updateTaskView(taskOwner);
  };

  const handleSaveTask = ({
    task,
    titleInput: { value: title },
    descriptionInput: { value: description },
    dueDateInput: { value: dueDate },
    priorityInput: { value: priority },
  }) => {
    const taskInputs = { title, description, dueDate, priority };
    taskInputs.dueDate = parseDateString(taskInputs.dueDate);
    const owningProject = getOwningProjectFromTaskDetails(task);
    const actualTaskObject = owningProject.getTask(task.id);
    actualTaskObject.editTask({
      title: taskInputs.title,
      description: taskInputs.description,
      dueDate: taskInputs.dueDate,
      priority: taskInputs.priority,
    });
    updateTaskView(owningProject);
  };

  const updateProjectView = () => {
    sidebarDiv.innerHTML = "";

    storedProjects.getProjects().forEach((element) => {
      const details = element.getProjectDetails();
      const newProjectDiv = document.createElement("div");
      newProjectDiv.className = "project";
      const existingProjectBtn = document.createElement("button");
      if (element == activeProject) {
        existingProjectBtn.classList.add("active-project");
      } else {
        existingProjectBtn.classList.remove("active-project");
      }
      existingProjectBtn.innerText = details.projectName;
      existingProjectBtn.addEventListener("click", () => {
        handleProjectBtn(element);
      });

      sidebarDiv.appendChild(existingProjectBtn);
    });

    const newProjectBtn = document.createElement("button");
    newProjectBtn.innerText = "+";
    newProjectBtn.addEventListener("click", () => {
      handleNewProjectBtn(newProjectBtn);
    });

    sidebarDiv.appendChild(newProjectBtn);
  };

  const handleNewProjectBtn = () => {
    const newHeaderDiv = document.createElement("div");
    newHeaderDiv.classList.add("project-title-header");

    const newHeaderInput = document.createElement("input");
    newHeaderInput.placeholder = "Enter New Project Name";
    newHeaderInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        headerSaveBtn.click();
      }
    });
    newHeaderDiv.appendChild(newHeaderInput);

    const headerSaveBtn = document.createElement("button");
    headerSaveBtn.innerText = "Save";
    headerSaveBtn.addEventListener("click", () => {
      if (newHeaderInput.value.trim() != "") {
        var newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(`${newHeaderInput.value}`);
        storedProjects.addProject(newProject);
        activeProject = newProject;
      }
      updateProjectView();
      if (newProject) updateTaskView(newProject);
    });
    newHeaderDiv.appendChild(headerSaveBtn);

    const headerCancelCreateProjectBtn = document.createElement("button");
    headerCancelCreateProjectBtn.innerText = "Cancel";
    headerCancelCreateProjectBtn.addEventListener("click", () => {
      if (activeProject) {
        updateTaskView(activeProject);
      } else {
        mainContentDiv.innerHTML = mainContentPlaceholder;
      }
    });
    newHeaderDiv.appendChild(headerCancelCreateProjectBtn);

    mainContentDiv.innerHTML = "";
    mainContentDiv.appendChild(newHeaderDiv);
    newHeaderInput.focus();
  };

  const editProjectHeader = (project, headerDiv) => {
    const newHeaderDiv = document.createElement("div");
    newHeaderDiv.classList.add("project-title-header");
    const newHeaderInput = document.createElement("input");
    newHeaderInput.value = `${project.getProjectDetails().projectName}`;
    newHeaderDiv.appendChild(newHeaderInput);
    const headerUpdateBtn = document.createElement("button");
    headerUpdateBtn.innerText = "Update";
    headerUpdateBtn.addEventListener("click", () => {
      handleUpdateProject(project, newHeaderInput.value);
    });
    newHeaderDiv.appendChild(headerUpdateBtn);
    const headerDeleteProjectBtn = document.createElement("button");
    headerDeleteProjectBtn.innerText = "Delete Project";
    headerDeleteProjectBtn.addEventListener("click", () => {
      handleDeleteProject(project);
    });
    newHeaderDiv.appendChild(headerDeleteProjectBtn);

    headerDiv.parentNode.replaceChild(newHeaderDiv, headerDiv);
    newHeaderInput.focus();
  };

  const handleUpdateProject = (project, editProjectInput) => {
    project.setProjectName(editProjectInput);
    updateProjectView();
    updateTaskView(project);
  };

  const handleDeleteProject = (project) => {
    const projectId = project.getProjectDetails().projectId;
    const deletedIndex = storedProjects.deleteProject(projectId);
    const projectsList = storedProjects.getProjects();

    if (projectsList.length > 0) {
      const nextActiveIndex = Math.max(0, deletedIndex - 1);
      const nextActiveProject = projectsList[nextActiveIndex];
      updateTaskView(nextActiveProject);
      activeProject = nextActiveProject;
    } else {
      mainContentDiv.innerHTML = `<div><p>Add a project to get started</p></div>`;
    }

    updateProjectView();
  };

  const updateTaskView = (project, isNewTask = false) => {
    mainContentDiv.innerHTML = "";
    const projectDetails = project.getProjectDetails();

    // Create a project header
    const projectTitleHeader = document.createElement("div");
    projectTitleHeader.classList.add("project-title-header");
    projectTitleHeader.addEventListener("click", () => {
      editProjectHeader(project, projectTitleHeader);
    });
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = `${projectDetails.projectName}`;
    projectTitleHeader.appendChild(projectTitle);
    mainContentDiv.appendChild(projectTitleHeader);

    // List the project tasks
    const newUl = document.createElement("ul");
    newUl.id = "task-list";
    projectDetails.tasksDetailsArray.forEach((task) => {
      const newLi = document.createElement("li");
      const newCompButton = document.createElement("button");
      newCompButton.classList.add("comp-btn");
      const newBtnHoverText = document.createElement("div");
      newBtnHoverText.classList.add("button-text");
      newBtnHoverText.innerHTML = "✓";
      newCompButton.appendChild(newBtnHoverText);
      newLi.id = task.id;
      task.completed
        ? newLi.classList.add("completed")
        : newLi.classList.remove("completed");
      newLi.innerText = `${task.title}`;
      if (task.description.trim() !== "")
        newLi.innerText = `${task.title} - ${task.description}`;
      newLi.addEventListener("click", (e) => {
        if (e.target === newCompButton || e.target === newBtnHoverText) {
          completeTask(task);
        } else {
          editTask(task);
        }
      });

      newLi.insertBefore(newCompButton, newLi.childNodes[0]);
      newUl.appendChild(newLi);
    });
    mainContentDiv.appendChild(newUl);

    // Add new task button at the bottom of the task list
    if (!isNewTask) {
      const newTaskLi = document.createElement("li");
      newTaskLi.id = "new-task-button-li";
      const newTaskBtn = document.createElement("button");
      newTaskBtn.innerText = "Add New Task";
      newTaskBtn.addEventListener("click", handleNewTaskBtn);
      newTaskLi.appendChild(newTaskBtn);
      newUl.appendChild(newTaskLi);
    }
  };

  // Toggle a task as completed or not completed
  const completeTask = (task) => {
    const owningProject = getOwningProjectFromTaskDetails(task);
    const actualTaskObject = owningProject.getTask(task.id);
    actualTaskObject.toggleCompleted();
    updateTaskView(owningProject);
  };

  // TO DO: You can click from editing a new task to an existing task and it will leave behind the mostly
  // empty new task

  // Replace existing li DOM element with full task details for editing
  const editTask = (task, isNewTask = false) => {
    const taskOwner = getOwningProjectFromTaskDetails(task);

    // Folds up the task details (accordion) so multiple tasks aren't open at once for editing
    updateTaskView(taskOwner, isNewTask);

    let attachmentPoint = document.getElementById(task.id);

    // Container div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-details");

    // Title input field
    const titleInput = document.createElement("input");
    titleInput.value = task.title;
    titleInput.placeholder = "Title";
    taskDiv.appendChild(titleInput);

    // Description input field
    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = task.description || "";
    descriptionInput.placeholder = "Description";
    taskDiv.appendChild(descriptionInput);

    // Due date input field
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("input-container");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerHTML = "Due Date:";
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    const convertedDate = HTMLdate(task.dueDate);
    dueDateInput.value = convertedDate;

    dateContainer.appendChild(dueDateLabel);
    dateContainer.appendChild(dueDateInput);
    taskDiv.appendChild(dateContainer);

    // Priority input field
    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("input-container");
    const priorityLabel = document.createElement("label");
    priorityLabel.innerHTML = "Priority:";
    const priorityInput = document.createElement("select");
    const priorityOptions = ["Low", "Medium", "High"];

    priorityOptions.forEach((option) => {
      const priorityOption = document.createElement("option");
      priorityOption.text = option;
      priorityOption.value = option.toLowerCase();
      priorityInput.appendChild(priorityOption);
    });
    priorityInput.value = task.priority;

    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityInput);
    taskDiv.appendChild(priorityContainer);

    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    // Delete task button
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerText = "Delete Task";
    deleteTaskBtn.className = "delete-task-btn";
    deleteTaskBtn.addEventListener("click", () => handleDeleteTask(task));
    buttonContainer.appendChild(deleteTaskBtn);

    // Save task button
    const saveTaskBtn = document.createElement("button");
    saveTaskBtn.innerText = "Save";
    saveTaskBtn.className = "save-task-btn";
    saveTaskBtn.addEventListener("click", () => {
      // make sure the task at least has a name
      if (titleInput.value != "" || !isNewTask) {
        handleSaveTask({
          task,
          titleInput,
          descriptionInput,
          dueDateInput,
          priorityInput,
        });
      } else if (isNewTask) {
        handleDeleteTask(task);
      }
    });

    buttonContainer.appendChild(saveTaskBtn);

    // Cancel task editing button
    const cancelTaskEditBtn = document.createElement("button");
    cancelTaskEditBtn.innerText = "Cancel";
    cancelTaskEditBtn.className = "cancel-task-btn";
    cancelTaskEditBtn.addEventListener("click", () =>
      handleCancel(task, isNewTask)
    );
    buttonContainer.appendChild(cancelTaskEditBtn);

    taskDiv.appendChild(buttonContainer);

    attachmentPoint.parentNode.replaceChild(taskDiv, attachmentPoint);
    titleInput.focus();
  };

  return { updateTaskView, editTask, storeInitialProjects };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectList */ "./src/ProjectList.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View */ "./src/View.js");






const testTask = (0,_Task__WEBPACK_IMPORTED_MODULE_1__["default"])({
  title: "Test Task",
  description: "Testing My Task Object",
  dueDate: undefined,
  priority: "medium",
  notes: "",
  completed: false,
});

const testTask2 = (0,_Task__WEBPACK_IMPORTED_MODULE_1__["default"])({
  title: "Task 2",
  description: "Still Testing",
  dueDate: undefined,
  priority: "low",
  notes: "",
  completed: false,
});

const funTask = (0,_Task__WEBPACK_IMPORTED_MODULE_1__["default"])({
  title: "A fun Task",
  description: "Play games!",
  dueDate: undefined,
  priority: "high",
  notes: "",
  completed: false,
});

const projectList = (0,_ProjectList__WEBPACK_IMPORTED_MODULE_3__["default"])();

const defaultProject = (0,_Project__WEBPACK_IMPORTED_MODULE_2__["default"])("Default");
const funProject = (0,_Project__WEBPACK_IMPORTED_MODULE_2__["default"])("Fun Project");

const addTestTask = (task, project) => {
  const taskToAdd = task;
  const taskOwner = project.addTask(taskToAdd);
  task.setTaskOwner(taskOwner);
};

addTestTask(testTask, defaultProject);
addTestTask(testTask2, defaultProject);
addTestTask(funTask, funProject);

projectList.addProject(defaultProject);
projectList.addProject(funProject);

const view = (0,_View__WEBPACK_IMPORTED_MODULE_4__["default"])();
//view.updateProjectView(projectList);
view.storeInitialProjects(projectList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0EsNkJBQTZCLFlBQVksSUFBSSxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDMVpwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ007QUFDUTtBQUNkOztBQUUxQixpQkFBaUIsaURBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxrQkFBa0IsaURBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQkFBZ0IsaURBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvQkFBb0Isd0RBQVc7O0FBRS9CLHVCQUF1QixvREFBTztBQUM5QixtQkFBbUIsb0RBQU87O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxpREFBSTtBQUNqQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9Qcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbmltZyxcbnBpY3R1cmUsXG52aWRlbyxcbmNhbnZhcyxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuI3Jvb3QsXG4jX19uZXh0IHtcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgbWFyZ2luOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAyMXJlbTtcbiAgLyogd2lkdGg6IDExMHJlbTsgKi9cbiAgLyogaGVpZ2h0OiA2MHJlbTsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzhkOGQ4ZDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcblxuICAvKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2IyYjJiMjsgKi9cbiAgYmFja2dyb3VuZDogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHJnYmEoMjM2LCAyMzYsIDIzNiwgMSkgMTUlLFxuICAgIHJnYmEoMTMxLCAxMzEsIDEzMSwgMC40MDY2MDAxNDAwNTYwMjI0KSAxMDAlXG4gICk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggMHB4IDBweCAxM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNpZGViYXIgYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIHdpZHRoOiAyMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgLyogbWFyZ2luLWxlZnQ6IDhweDsgKi9cbiAgbWFyZ2luOiA4cHg7XG59XG5cbiN0YXNrLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbiN0YXNrLWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnRhc2stZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmRlbGV0ZS10YXNrLWJ0biB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmbGV4LWJhc2lzOiA3MHB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHNlbGVjdCxcbmlucHV0IHtcbiAgZmxleDogYXV0bztcbn1cblxuLmNvbXAtYnRuIHtcbiAgLyogZGlzcGxheTpibG9jazsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgLyogYm9yZGVyOiAycHggc29saWQgI2Y1ZjVmNTsgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qIGJhY2tncm91bmQ6ICM1NTU3Nzc7ICovXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAzcHggZ3JheTsgKi9cbiAgLyogZm9udC1zaXplOjIwcHg7ICovXG4gIC8qIGZvbnQtd2VpZ2h0OmJvbGQ7ICAqL1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jb21wLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhY2U0YWU7XG59XG5cbi5jb21wLWJ0bjpob3ZlciAuYnV0dG9uLXRleHQge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xuICB3aWR0aDogMjB2dztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJvamVjdC10aXRsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0LXRpdGxlLWhlYWRlciBoMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hY3RpdmUtcHJvamVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbmV3LXRhc2stYnV0dG9uLWxpIGJ1dHRvbntcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLyogVE8gRE86IEhvcml6b250YWwgQ2VudGVyIFByb2plY3QgYnV0dG9ucy4gRmxleD8gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1COztFQUVuQix3QkFBd0I7RUFDeEIsa0RBQWtEO0VBQ2xELDBDQUEwQztFQUMxQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCOzs7O0dBSUM7RUFDRCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDViw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLG9EQUFvRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4uYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIG1hcmdpbjogMXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDIxcmVtO1xcbiAgLyogd2lkdGg6IDExMHJlbTsgKi9cXG4gIC8qIGhlaWdodDogNjByZW07ICovXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOGQ4ZDhkO1xcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXG5cXG4gIC8qIGJvcmRlci1yYWRpdXM6IDNweDsgKi9cXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2IyYjJiMjsgKi9cXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2JhKDIzNiwgMjM2LCAyMzYsIDEpIDE1JSxcXG4gICAgcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjQwNjYwMDE0MDA1NjAyMjQpIDEwMCVcXG4gICk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTNweCAwcHggMHB4IDEzcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgLyogcGFkZGluZzogMjBweDsgKi9cXG4gIC8qIG1hcmdpbi1sZWZ0OiA4cHg7ICovXFxuICBtYXJnaW46IDhweDtcXG59XFxuXFxuI3Rhc2stbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4jdGFzay1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZmxleC1iYXNpczogNzBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBzZWxlY3QsXFxuaW5wdXQge1xcbiAgZmxleDogYXV0bztcXG59XFxuXFxuLmNvbXAtYnRuIHtcXG4gIC8qIGRpc3BsYXk6YmxvY2s7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjNweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgI2Y1ZjVmNTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLyogYmFja2dyb3VuZDogIzU1NTc3NzsgKi9cXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAzcHggZ3JheTsgKi9cXG4gIC8qIGZvbnQtc2l6ZToyMHB4OyAqL1xcbiAgLyogZm9udC13ZWlnaHQ6Ym9sZDsgICovXFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5jb21wLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYWNlNGFlO1xcbn1cXG5cXG4uY29tcC1idG46aG92ZXIgLmJ1dHRvbi10ZXh0IHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5idXR0b24tdGV4dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGNvbG9yOiBkYXJrZ3JheTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtaGVhZGVyIGgzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbi1saSBidXR0b257XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4vKiBUTyBETzogSG9yaXpvbnRhbCBDZW50ZXIgUHJvamVjdCBidXR0b25zLiBGbGV4PyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOSk7XG5cbiAgbGV0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgY29uc3QgcHJvamVjdElkID0gZ2VuZXJhdGVJZCgpO1xuICBsZXQgcHJvamVjdElzQWN0aXZlID0gZmFsc2U7XG5cbiAgLy8gb25lIGFycmF5IHN0b3JlcyB0YXNrIGRldGFpbHMsIG9uZSBzdG9yZXMgdGhlIGFjdHVhbCB0YXNrIG9iamVjdHMgdGhlbXNlbHZlc1xuICBjb25zdCB0YXNrc0RldGFpbHNBcnJheSA9IFtdO1xuICBjb25zdCB0YXNrc09iamVjdHNBcnJheSA9IFtdO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgIHRhc2tzRGV0YWlsc0FycmF5LnB1c2gobmV3VGFzay5nZXRUYXNrKCkpO1xuICAgIHRhc2tzT2JqZWN0c0FycmF5LnB1c2gobmV3VGFzayk7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRhc2tzRGV0YWlsc0FycmF5LmZpbmRJbmRleCgob2JqKSA9PiBvYmpbXCJpZFwiXSA9PT0gdGFza0lkKTtcbiAgICB0YXNrc0RldGFpbHNBcnJheS5zcGxpY2UocmVzdWx0LCAxKTtcbiAgICB0YXNrc09iamVjdHNBcnJheS5zcGxpY2UocmVzdWx0LCAxKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrc0RldGFpbHMgPSAoKSA9PiB0YXNrc0RldGFpbHNBcnJheTtcbiAgY29uc3QgZ2V0VGFza3NPYmplY3RzID0gKCkgPT4gdGFza3NPYmplY3RzQXJyYXk7XG5cbiAgY29uc3QgZ2V0VGFzayA9ICh0YXNrSWQpID0+IHtcbiAgICBjb25zdCBmb3VuZFRhc2sgPSB0YXNrc0RldGFpbHNBcnJheS5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgcmV0dXJuIHRhc2tzT2JqZWN0c0FycmF5W2ZvdW5kVGFza107XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdE5hbWUgPSAobmFtZSkgPT4gKHByb2plY3ROYW1lID0gbmFtZSk7XG5cbiAgLy8gTm90IGN1cnJlbnRseSB1c2luZyB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgY29uc3QgdG9nZ2xlUHJvamVjdEFjdGl2ZSA9ICgpID0+IHByb2plY3RJc0FjdGl2ZSA9ICFwcm9qZWN0SXNBY3RpdmU7XG5cbiAgY29uc3QgZ2V0UHJvamVjdERldGFpbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3ROYW1lLFxuICAgICAgcHJvamVjdElkLFxuICAgICAgcHJvamVjdElzQWN0aXZlLCAvLyBOb3QgY3VycmVudGx5IHVzaW5nIHRoaXNcbiAgICAgIHRhc2tzRGV0YWlsc0FycmF5LFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgZ2V0VGFza3NEZXRhaWxzLFxuICAgIGdldFRhc2tzT2JqZWN0cyxcbiAgICBnZXRUYXNrLFxuICAgIHNldFByb2plY3ROYW1lLFxuICAgIHRvZ2dsZVByb2plY3RBY3RpdmUsXG4gICAgZ2V0UHJvamVjdERldGFpbHMsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJmdW5jdGlvbiBQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAob2JqKSA9PiBvYmouZ2V0UHJvamVjdERldGFpbHMoKS5wcm9qZWN0SWQgPT09IHByb2plY3RJZFxuICAgICk7XG4gICAgcHJvamVjdHMuc3BsaWNlKHJlc3VsdCwgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIHJldHVybiB7IGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGdldFByb2plY3RzIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0O1xuIiwiZnVuY3Rpb24gVGFzayh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IG5ldyBEYXRlKCksIHByaW9yaXR5LCBub3RlcyB9KSB7XG4gIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOSk7XG5cbiAgY29uc3Qgc2V0VGFza093bmVyID0gKHByb2plY3RJZCkgPT4ge1xuICAgIHRhc2sub3duZXIgPSBwcm9qZWN0SWQ7XG4gIH07XG5cbiAgbGV0IHRhc2sgPSB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBpZDogZ2VuZXJhdGVJZCgpLFxuICAgIG93bmVyOiBudWxsLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgZ2V0VGFzayA9ICgpID0+IHRhc2s7XG4gIGNvbnN0IGdldFRhc2tJZCA9ICgpID0+IHRhc2suaWQ7XG5cbiAgY29uc3QgZ2V0VGFza093bmVyID0gKCkgPT4gdGFzay5vd25lcjtcblxuICBjb25zdCBlZGl0VGFzayA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0pID0+IHtcbiAgICBpZiAodGl0bGUgIT09IHVuZGVmaW5lZCkgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgIGlmIChkZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgaWYgKGR1ZURhdGUgIT09IHVuZGVmaW5lZCkgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBpZiAocHJpb3JpdHkgIT09IHVuZGVmaW5lZCkgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGlmIChub3RlcyAhPT0gdW5kZWZpbmVkKSB0YXNrLm5vdGVzID0gbm90ZXM7XG4gICAgY29uc29sZS5sb2coYCR7dGl0bGV9IGVkaXRlZGApO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9ICgpID0+ICh0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUYXNrLFxuICAgIGdldFRhc2tJZCxcbiAgICBlZGl0VGFzayxcbiAgICBzZXRUYXNrT3duZXIsXG4gICAgZ2V0VGFza093bmVyLFxuICAgIHRvZ2dsZUNvbXBsZXRlZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuZnVuY3Rpb24gVmlldygpIHtcbiAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKTtcblxuICBjb25zdCBtYWluQ29udGVudFBsYWNlaG9sZGVyID0gYDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxuICA8aDI+VG8gRG88L2gyPlxuICA8cD5TZWxlY3QgYSBQcm9qZWN0IHRvIGdldCBzdGFydGVkITwvcD5cbjwvZGl2PmA7XG5cbiAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gbWFpbkNvbnRlbnRQbGFjZWhvbGRlcjtcblxuICAvLyBTdG9yZSBwcm9qZWN0IHN0YXRlIGluZm9ybWF0aW9uIGZvciBhY2Nlc3MgaW5zaWRlIG9mIFZpZXdcbiAgbGV0IHN0b3JlZFByb2plY3RzO1xuICBsZXQgYWN0aXZlUHJvamVjdDtcblxuICBjb25zdCBzdG9yZUluaXRpYWxQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgIHN0b3JlZFByb2plY3RzID0gcHJvamVjdHM7XG4gICAgdXBkYXRlUHJvamVjdFZpZXcoKTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZmluZCB0aGUgUHJvamVjdCB0aGF0IGEgVGFzayBiZWxvbmdzIHRvXG4gIGNvbnN0IGdldE93bmluZ1Byb2plY3RGcm9tVGFza0RldGFpbHMgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IG93bmluZ1Byb2plY3QgPSBzdG9yZWRQcm9qZWN0c1xuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3REZXRhaWxzKCkucHJvamVjdElkID09PSB0YXNrLm93bmVyKTtcbiAgICByZXR1cm4gb3duaW5nUHJvamVjdDtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIEhUTUwgZGF0ZVxuICBjb25zdCBIVE1MZGF0ZSA9IChkYXRlSW5wdXQpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZUlucHV0KTtcbiAgICBjb25zdCBtb250aCA9IChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IGRheSA9IChcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBodG1sRGF0ZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG5cbiAgICByZXR1cm4gaHRtbERhdGU7XG4gIH07XG5cbiAgLy8gQW5vdGhlciBkYXRlIGhlbHBlciBmdW5jdGlvbiB0byBkZWFsIHdpdGggVVRDIGRhdGVzXG4gIGZ1bmN0aW9uIHBhcnNlRGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gICAgY29uc3QgZGF0ZU9ubHlSZWdleCA9XG4gICAgICAvXihbMC05XShbMC05XShbMC05XVsxLTldfFsxLTldMCl8WzEtOV0wMCl8WzEtOV0wMDApKC0oMFsxLTldfDFbMC0yXSkoLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pKSkkLztcbiAgICBpZiAoZGF0ZU9ubHlSZWdleC50ZXN0KGRhdGVTdHJpbmcpKSB7XG4gICAgICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgdXRjRGF0ZS5nZXRUaW1lKCkgKyB1dGNEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICAgICAgKTtcbiAgICAgIHJldHVybiBsb2NhbERhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVByb2plY3RCdG4gPSAocHJvamVjdCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgIHVwZGF0ZVByb2plY3RWaWV3KCk7XG4gICAgdXBkYXRlVGFza1ZpZXcocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV3VGFza0J0biA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUZXN0aW5nVGFzayA9IFRhc2soe1xuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGR1ZURhdGU6IHVuZGVmaW5lZCxcbiAgICAgIHByaW9yaXR5OiBcIlwiLFxuICAgICAgbm90ZXM6IFwiXCIsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBhY3RpdmVQcm9qZWN0LmFkZFRhc2sobmV3VGVzdGluZ1Rhc2spO1xuICAgIG5ld1Rlc3RpbmdUYXNrLnNldFRhc2tPd25lcihuZXdUYXNrKTtcbiAgICBlZGl0VGFzayhuZXdUZXN0aW5nVGFzay5nZXRUYXNrKCksIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IG93bmluZ1Byb2plY3QgPSBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzKHRhc2spO1xuXG4gICAgaWYgKG93bmluZ1Byb2plY3QpIHtcbiAgICAgIG93bmluZ1Byb2plY3QuZGVsZXRlVGFzayh0YXNrLmlkKTtcbiAgICAgIHVwZGF0ZVRhc2tWaWV3KG93bmluZ1Byb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT3duaW5nIHByb2plY3Qgbm90IGZvdW5kIGZvciB0YXNrXCIsIHRhc2spO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAodGFzaywgaXNOZXdUYXNrID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB0YXNrT3duZXIgPSBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzKHRhc2spO1xuICAgIGlmIChpc05ld1Rhc2spIGhhbmRsZURlbGV0ZVRhc2sodGFzayk7XG4gICAgdXBkYXRlVGFza1ZpZXcodGFza093bmVyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlVGFzayA9ICh7XG4gICAgdGFzayxcbiAgICB0aXRsZUlucHV0OiB7IHZhbHVlOiB0aXRsZSB9LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQ6IHsgdmFsdWU6IGRlc2NyaXB0aW9uIH0sXG4gICAgZHVlRGF0ZUlucHV0OiB7IHZhbHVlOiBkdWVEYXRlIH0sXG4gICAgcHJpb3JpdHlJbnB1dDogeyB2YWx1ZTogcHJpb3JpdHkgfSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJbnB1dHMgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcbiAgICB0YXNrSW5wdXRzLmR1ZURhdGUgPSBwYXJzZURhdGVTdHJpbmcodGFza0lucHV0cy5kdWVEYXRlKTtcbiAgICBjb25zdCBvd25pbmdQcm9qZWN0ID0gZ2V0T3duaW5nUHJvamVjdEZyb21UYXNrRGV0YWlscyh0YXNrKTtcbiAgICBjb25zdCBhY3R1YWxUYXNrT2JqZWN0ID0gb3duaW5nUHJvamVjdC5nZXRUYXNrKHRhc2suaWQpO1xuICAgIGFjdHVhbFRhc2tPYmplY3QuZWRpdFRhc2soe1xuICAgICAgdGl0bGU6IHRhc2tJbnB1dHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGFza0lucHV0cy5kZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHRhc2tJbnB1dHMuZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5OiB0YXNrSW5wdXRzLnByaW9yaXR5LFxuICAgIH0pO1xuICAgIHVwZGF0ZVRhc2tWaWV3KG93bmluZ1Byb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3RWaWV3ID0gKCkgPT4ge1xuICAgIHNpZGViYXJEaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHN0b3JlZFByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnQuZ2V0UHJvamVjdERldGFpbHMoKTtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3UHJvamVjdERpdi5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBpZiAoZWxlbWVudCA9PSBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIGV4aXN0aW5nUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGlzdGluZ1Byb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgICAgfVxuICAgICAgZXhpc3RpbmdQcm9qZWN0QnRuLmlubmVyVGV4dCA9IGRldGFpbHMucHJvamVjdE5hbWU7XG4gICAgICBleGlzdGluZ1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaGFuZGxlUHJvamVjdEJ0bihlbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKGV4aXN0aW5nUHJvamVjdEJ0bik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiK1wiO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGhhbmRsZU5ld1Byb2plY3RCdG4obmV3UHJvamVjdEJ0bik7XG4gICAgfSk7XG5cbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5ld1Byb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3SGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgbmV3SGVhZGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3SGVhZGVySW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIE5ldyBQcm9qZWN0IE5hbWVcIjtcbiAgICBuZXdIZWFkZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoZWFkZXJTYXZlQnRuLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV3SGVhZGVyRGl2LmFwcGVuZENoaWxkKG5ld0hlYWRlcklucHV0KTtcblxuICAgIGNvbnN0IGhlYWRlclNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhlYWRlclNhdmVCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgaGVhZGVyU2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG5ld0hlYWRlcklucHV0LnZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgIHZhciBuZXdQcm9qZWN0ID0gUHJvamVjdChgJHtuZXdIZWFkZXJJbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgc3RvcmVkUHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgYWN0aXZlUHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgICB9XG4gICAgICB1cGRhdGVQcm9qZWN0VmlldygpO1xuICAgICAgaWYgKG5ld1Byb2plY3QpIHVwZGF0ZVRhc2tWaWV3KG5ld1Byb2plY3QpO1xuICAgIH0pO1xuICAgIG5ld0hlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJTYXZlQnRuKTtcblxuICAgIGNvbnN0IGhlYWRlckNhbmNlbENyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhlYWRlckNhbmNlbENyZWF0ZVByb2plY3RCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBoZWFkZXJDYW5jZWxDcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoYWN0aXZlUHJvamVjdCkge1xuICAgICAgICB1cGRhdGVUYXNrVmlldyhhY3RpdmVQcm9qZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW5Db250ZW50RGl2LmlubmVySFRNTCA9IG1haW5Db250ZW50UGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV3SGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckNhbmNlbENyZWF0ZVByb2plY3RCdG4pO1xuXG4gICAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChuZXdIZWFkZXJEaXYpO1xuICAgIG5ld0hlYWRlcklucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3RIZWFkZXIgPSAocHJvamVjdCwgaGVhZGVyRGl2KSA9PiB7XG4gICAgY29uc3QgbmV3SGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtaGVhZGVyXCIpO1xuICAgIGNvbnN0IG5ld0hlYWRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0hlYWRlcklucHV0LnZhbHVlID0gYCR7cHJvamVjdC5nZXRQcm9qZWN0RGV0YWlscygpLnByb2plY3ROYW1lfWA7XG4gICAgbmV3SGVhZGVyRGl2LmFwcGVuZENoaWxkKG5ld0hlYWRlcklucHV0KTtcbiAgICBjb25zdCBoZWFkZXJVcGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhlYWRlclVwZGF0ZUJ0bi5pbm5lclRleHQgPSBcIlVwZGF0ZVwiO1xuICAgIGhlYWRlclVwZGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaGFuZGxlVXBkYXRlUHJvamVjdChwcm9qZWN0LCBuZXdIZWFkZXJJbnB1dC52YWx1ZSk7XG4gICAgfSk7XG4gICAgbmV3SGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclVwZGF0ZUJ0bik7XG4gICAgY29uc3QgaGVhZGVyRGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGVyRGVsZXRlUHJvamVjdEJ0bi5pbm5lclRleHQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gICAgaGVhZGVyRGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaGFuZGxlRGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGVsZXRlUHJvamVjdEJ0bik7XG5cbiAgICBoZWFkZXJEaXYucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3SGVhZGVyRGl2LCBoZWFkZXJEaXYpO1xuICAgIG5ld0hlYWRlcklucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlUHJvamVjdCA9IChwcm9qZWN0LCBlZGl0UHJvamVjdElucHV0KSA9PiB7XG4gICAgcHJvamVjdC5zZXRQcm9qZWN0TmFtZShlZGl0UHJvamVjdElucHV0KTtcbiAgICB1cGRhdGVQcm9qZWN0VmlldygpO1xuICAgIHVwZGF0ZVRhc2tWaWV3KHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3QuZ2V0UHJvamVjdERldGFpbHMoKS5wcm9qZWN0SWQ7XG4gICAgY29uc3QgZGVsZXRlZEluZGV4ID0gc3RvcmVkUHJvamVjdHMuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IHN0b3JlZFByb2plY3RzLmdldFByb2plY3RzKCk7XG5cbiAgICBpZiAocHJvamVjdHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5leHRBY3RpdmVJbmRleCA9IE1hdGgubWF4KDAsIGRlbGV0ZWRJbmRleCAtIDEpO1xuICAgICAgY29uc3QgbmV4dEFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0xpc3RbbmV4dEFjdGl2ZUluZGV4XTtcbiAgICAgIHVwZGF0ZVRhc2tWaWV3KG5leHRBY3RpdmVQcm9qZWN0KTtcbiAgICAgIGFjdGl2ZVByb2plY3QgPSBuZXh0QWN0aXZlUHJvamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXY+PHA+QWRkIGEgcHJvamVjdCB0byBnZXQgc3RhcnRlZDwvcD48L2Rpdj5gO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFza1ZpZXcgPSAocHJvamVjdCwgaXNOZXdUYXNrID0gZmFsc2UpID0+IHtcbiAgICBtYWluQ29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gcHJvamVjdC5nZXRQcm9qZWN0RGV0YWlscygpO1xuXG4gICAgLy8gQ3JlYXRlIGEgcHJvamVjdCBoZWFkZXJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUaXRsZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1oZWFkZXJcIik7XG4gICAgcHJvamVjdFRpdGxlSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdEhlYWRlcihwcm9qZWN0LCBwcm9qZWN0VGl0bGVIZWFkZXIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gYCR7cHJvamVjdERldGFpbHMucHJvamVjdE5hbWV9YDtcbiAgICBwcm9qZWN0VGl0bGVIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVIZWFkZXIpO1xuXG4gICAgLy8gTGlzdCB0aGUgcHJvamVjdCB0YXNrc1xuICAgIGNvbnN0IG5ld1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5ld1VsLmlkID0gXCJ0YXNrLWxpc3RcIjtcbiAgICBwcm9qZWN0RGV0YWlscy50YXNrc0RldGFpbHNBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnN0IG5ld0NvbXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3Q29tcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcC1idG5cIik7XG4gICAgICBjb25zdCBuZXdCdG5Ib3ZlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3QnRuSG92ZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdGV4dFwiKTtcbiAgICAgIG5ld0J0bkhvdmVyVGV4dC5pbm5lckhUTUwgPSBcIuKck1wiO1xuICAgICAgbmV3Q29tcEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdCdG5Ib3ZlclRleHQpO1xuICAgICAgbmV3TGkuaWQgPSB0YXNrLmlkO1xuICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgPyBuZXdMaS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpXG4gICAgICAgIDogbmV3TGkuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICAgIG5ld0xpLmlubmVyVGV4dCA9IGAke3Rhc2sudGl0bGV9YDtcbiAgICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uLnRyaW0oKSAhPT0gXCJcIilcbiAgICAgICAgbmV3TGkuaW5uZXJUZXh0ID0gYCR7dGFzay50aXRsZX0gLSAke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgIG5ld0xpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG5ld0NvbXBCdXR0b24gfHwgZS50YXJnZXQgPT09IG5ld0J0bkhvdmVyVGV4dCkge1xuICAgICAgICAgIGNvbXBsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZGl0VGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG5ld0xpLmluc2VydEJlZm9yZShuZXdDb21wQnV0dG9uLCBuZXdMaS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIG5ld1VsLmFwcGVuZENoaWxkKG5ld0xpKTtcbiAgICB9KTtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChuZXdVbCk7XG5cbiAgICAvLyBBZGQgbmV3IHRhc2sgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHRhc2sgbGlzdFxuICAgIGlmICghaXNOZXdUYXNrKSB7XG4gICAgICBjb25zdCBuZXdUYXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXdUYXNrTGkuaWQgPSBcIm5ldy10YXNrLWJ1dHRvbi1saVwiO1xuICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdUYXNrQnRuLmlubmVyVGV4dCA9IFwiQWRkIE5ldyBUYXNrXCI7XG4gICAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOZXdUYXNrQnRuKTtcbiAgICAgIG5ld1Rhc2tMaS5hcHBlbmRDaGlsZChuZXdUYXNrQnRuKTtcbiAgICAgIG5ld1VsLmFwcGVuZENoaWxkKG5ld1Rhc2tMaSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRvZ2dsZSBhIHRhc2sgYXMgY29tcGxldGVkIG9yIG5vdCBjb21wbGV0ZWRcbiAgY29uc3QgY29tcGxldGVUYXNrID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBvd25pbmdQcm9qZWN0ID0gZ2V0T3duaW5nUHJvamVjdEZyb21UYXNrRGV0YWlscyh0YXNrKTtcbiAgICBjb25zdCBhY3R1YWxUYXNrT2JqZWN0ID0gb3duaW5nUHJvamVjdC5nZXRUYXNrKHRhc2suaWQpO1xuICAgIGFjdHVhbFRhc2tPYmplY3QudG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgdXBkYXRlVGFza1ZpZXcob3duaW5nUHJvamVjdCk7XG4gIH07XG5cbiAgLy8gVE8gRE86IFlvdSBjYW4gY2xpY2sgZnJvbSBlZGl0aW5nIGEgbmV3IHRhc2sgdG8gYW4gZXhpc3RpbmcgdGFzayBhbmQgaXQgd2lsbCBsZWF2ZSBiZWhpbmQgdGhlIG1vc3RseVxuICAvLyBlbXB0eSBuZXcgdGFza1xuXG4gIC8vIFJlcGxhY2UgZXhpc3RpbmcgbGkgRE9NIGVsZW1lbnQgd2l0aCBmdWxsIHRhc2sgZGV0YWlscyBmb3IgZWRpdGluZ1xuICBjb25zdCBlZGl0VGFzayA9ICh0YXNrLCBpc05ld1Rhc2sgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tPd25lciA9IGdldE93bmluZ1Byb2plY3RGcm9tVGFza0RldGFpbHModGFzayk7XG5cbiAgICAvLyBGb2xkcyB1cCB0aGUgdGFzayBkZXRhaWxzIChhY2NvcmRpb24pIHNvIG11bHRpcGxlIHRhc2tzIGFyZW4ndCBvcGVuIGF0IG9uY2UgZm9yIGVkaXRpbmdcbiAgICB1cGRhdGVUYXNrVmlldyh0YXNrT3duZXIsIGlzTmV3VGFzayk7XG5cbiAgICBsZXQgYXR0YWNobWVudFBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5pZCk7XG5cbiAgICAvLyBDb250YWluZXIgZGl2XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzXCIpO1xuXG4gICAgLy8gVGl0bGUgaW5wdXQgZmllbGRcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIC8vIERlc2NyaXB0aW9uIGlucHV0IGZpZWxkXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbiB8fCBcIlwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIC8vIER1ZSBkYXRlIGlucHV0IGZpZWxkXG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBjb25zdCBjb252ZXJ0ZWREYXRlID0gSFRNTGRhdGUodGFzay5kdWVEYXRlKTtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBjb252ZXJ0ZWREYXRlO1xuXG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gICAgLy8gUHJpb3JpdHkgaW5wdXQgZmllbGRcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eTpcIjtcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdO1xuXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IG9wdGlvbjtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gb3B0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KTtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFzay5wcmlvcml0eTtcblxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuXG4gICAgLy8gQnV0dG9uIGNvbnRhaW5lclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gRGVsZXRlIHRhc2sgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J0bi5pbm5lclRleHQgPSBcIkRlbGV0ZSBUYXNrXCI7XG4gICAgZGVsZXRlVGFza0J0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS10YXNrLWJ0blwiO1xuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZURlbGV0ZVRhc2sodGFzaykpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcblxuICAgIC8vIFNhdmUgdGFzayBidXR0b25cbiAgICBjb25zdCBzYXZlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZVRhc2tCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgc2F2ZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJzYXZlLXRhc2stYnRuXCI7XG4gICAgc2F2ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgdGFzayBhdCBsZWFzdCBoYXMgYSBuYW1lXG4gICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPSBcIlwiIHx8ICFpc05ld1Rhc2spIHtcbiAgICAgICAgaGFuZGxlU2F2ZVRhc2soe1xuICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgdGl0bGVJbnB1dCxcbiAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgICAgICAgIGR1ZURhdGVJbnB1dCxcbiAgICAgICAgICBwcmlvcml0eUlucHV0LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNOZXdUYXNrKSB7XG4gICAgICAgIGhhbmRsZURlbGV0ZVRhc2sodGFzayk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZVRhc2tCdG4pO1xuXG4gICAgLy8gQ2FuY2VsIHRhc2sgZWRpdGluZyBidXR0b25cbiAgICBjb25zdCBjYW5jZWxUYXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsVGFza0VkaXRCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxUYXNrRWRpdEJ0bi5jbGFzc05hbWUgPSBcImNhbmNlbC10YXNrLWJ0blwiO1xuICAgIGNhbmNlbFRhc2tFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgaGFuZGxlQ2FuY2VsKHRhc2ssIGlzTmV3VGFzaylcbiAgICApO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxUYXNrRWRpdEJ0bik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBhdHRhY2htZW50UG9pbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGFza0RpdiwgYXR0YWNobWVudFBvaW50KTtcbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlVGFza1ZpZXcsIGVkaXRUYXNrLCBzdG9yZUluaXRpYWxQcm9qZWN0cyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9Qcm9qZWN0TGlzdFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuXG5jb25zdCB0ZXN0VGFzayA9IFRhc2soe1xuICB0aXRsZTogXCJUZXN0IFRhc2tcIixcbiAgZGVzY3JpcHRpb246IFwiVGVzdGluZyBNeSBUYXNrIE9iamVjdFwiLFxuICBkdWVEYXRlOiB1bmRlZmluZWQsXG4gIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICBub3RlczogXCJcIixcbiAgY29tcGxldGVkOiBmYWxzZSxcbn0pO1xuXG5jb25zdCB0ZXN0VGFzazIgPSBUYXNrKHtcbiAgdGl0bGU6IFwiVGFzayAyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlN0aWxsIFRlc3RpbmdcIixcbiAgZHVlRGF0ZTogdW5kZWZpbmVkLFxuICBwcmlvcml0eTogXCJsb3dcIixcbiAgbm90ZXM6IFwiXCIsXG4gIGNvbXBsZXRlZDogZmFsc2UsXG59KTtcblxuY29uc3QgZnVuVGFzayA9IFRhc2soe1xuICB0aXRsZTogXCJBIGZ1biBUYXNrXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlBsYXkgZ2FtZXMhXCIsXG4gIGR1ZURhdGU6IHVuZGVmaW5lZCxcbiAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICBub3RlczogXCJcIixcbiAgY29tcGxldGVkOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3RMaXN0KCk7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdChcIkRlZmF1bHRcIik7XG5jb25zdCBmdW5Qcm9qZWN0ID0gUHJvamVjdChcIkZ1biBQcm9qZWN0XCIpO1xuXG5jb25zdCBhZGRUZXN0VGFzayA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRhc2tUb0FkZCA9IHRhc2s7XG4gIGNvbnN0IHRhc2tPd25lciA9IHByb2plY3QuYWRkVGFzayh0YXNrVG9BZGQpO1xuICB0YXNrLnNldFRhc2tPd25lcih0YXNrT3duZXIpO1xufTtcblxuYWRkVGVzdFRhc2sodGVzdFRhc2ssIGRlZmF1bHRQcm9qZWN0KTtcbmFkZFRlc3RUYXNrKHRlc3RUYXNrMiwgZGVmYXVsdFByb2plY3QpO1xuYWRkVGVzdFRhc2soZnVuVGFzaywgZnVuUHJvamVjdCk7XG5cbnByb2plY3RMaXN0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChmdW5Qcm9qZWN0KTtcblxuY29uc3QgdmlldyA9IFZpZXcoKTtcbi8vdmlldy51cGRhdGVQcm9qZWN0Vmlldyhwcm9qZWN0TGlzdCk7XG52aWV3LnN0b3JlSW5pdGlhbFByb2plY3RzKHByb2plY3RMaXN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==