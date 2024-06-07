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

.container {
  display: flex;
  margin: 1rem auto;
  max-width: 90vw;
  min-height: 21rem;
  border: 1px solid #8d8d8d;
  border-radius: 13px;
  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20rem;
  /* max-width: 20rem; */
  background: rgb(236, 236, 236);
  background: linear-gradient(
    180deg,
    rgba(236, 236, 236, 1) 15%,
    rgba(131, 131, 131, 0.4066001400560224) 100%
  );
  border-right: 1px solid #000000;
  /* border-radius: 13px 0px 0px 13px; */
  color: #fff;
  padding: 10px;
}

.sidebar button {
  margin-bottom: 0.2em;
  width: 100%;
  /* min-width: 15vw;
  max-width: 20vw; */
  /* width: 20vw; */
  overflow: hidden;
}

.main-content {
  flex: 1;
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
  margin-right: auto;
}

.button-container button:last-child {
  margin-left: 5px;
}

.delete-task-btn, .delete-project-btn {
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

.input-container textarea {
  width: 100%;
}

.comp-btn,
.comp-btn-greyed {
  position: relative;
  width: 23px;
  height: 23px;
  line-height: 23px;
  border-radius: 50%;
  color: #000000;
  text-align: center;
  text-decoration: none;
  margin-right: 6px;
  transition: all 0.3s ease;
}

.comp-btn-greyed {
  color: darkgray;
  border-width: thin;
}

.comp-btn-greyed:hover {
  background: #ffffff;
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
  align-items: center;
}

.project-title-header h3 {
  display: flex;
}

.project-title-header label {
  margin-right: 0.5rem;
}

.project-title-header button {
  flex: initial;
}

.active-project {
  font-weight: bold;
}

#new-task-button-li button {
  margin-top: 15px;
}

@media screen and (max-width: 480px) {
  .container {
    margin: 0;
    max-width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    overflow: hidden;
  }

  .sidebar {
    border-radius: 0;
  }

  .project-title-header {
    display: flex;
    width: 70vw;
    padding: 0;
    justify-content: space-between;
  }

  .project-title-header > * {
    flex: 1.5;
    margin: 0;
    width: 1rem;
  }
  .project-title-header button {
    flex: 0.5;
    margin: 0;
    width: 1rem;
  }
}

@media screen and (max-width: 600px) {
  .sidebar {
    min-width: 3rem;
  }

  .project-title-header {
    display: flex;
    max-width: 57vw;
    padding: 0;
    justify-content: space-between;
  }
  .project-title-header input {
    max-width: 25vw;
  }
}

@media screen and (max-width: 800px) {
  .sidebar {
    min-width: 10rem;
  }
}

@media screen and (min-width: 1000px) {
  .container {
    max-width: 65vw;
  }
  .sidebar {
    min-width: 15rem;
  }
}

@media screen and (min-width: 2000px) {
  .sidebar {
    min-width: 30rem;
  }

  .sidebar button {
    min-width: 10vw;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;EACE,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,UAAU;EACV,SAAS;EACT,YAAY;AACd;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,kDAAkD;EAClD,0CAA0C;EAC1C,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,8BAA8B;EAC9B;;;;GAIC;EACD,+BAA+B;EAC/B,sCAAsC;EACtC,WAAW;EACX,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX;oBACkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,6BAA6B;EAC7B,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;IACxB,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,UAAU;IACV,8BAA8B;EAChC;;EAEA;IACE,SAAS;IACT,SAAS;IACT,WAAW;EACb;EACA;IACE,SAAS;IACT,SAAS;IACT,WAAW;EACb;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,UAAU;IACV,8BAA8B;EAChC;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml {\n  height: 100%;\n  font-family: Arial, sans-serif;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.container {\n  display: flex;\n  margin: 1rem auto;\n  max-width: 90vw;\n  min-height: 21rem;\n  border: 1px solid #8d8d8d;\n  border-radius: 13px;\n  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 20rem;\n  /* max-width: 20rem; */\n  background: rgb(236, 236, 236);\n  background: linear-gradient(\n    180deg,\n    rgba(236, 236, 236, 1) 15%,\n    rgba(131, 131, 131, 0.4066001400560224) 100%\n  );\n  border-right: 1px solid #000000;\n  /* border-radius: 13px 0px 0px 13px; */\n  color: #fff;\n  padding: 10px;\n}\n\n.sidebar button {\n  margin-bottom: 0.2em;\n  width: 100%;\n  /* min-width: 15vw;\n  max-width: 20vw; */\n  /* width: 20vw; */\n  overflow: hidden;\n}\n\n.main-content {\n  flex: 1;\n  margin: 8px;\n}\n\n#task-list {\n  list-style: none;\n  padding-left: 0;\n}\n\n#task-list li {\n  display: flex;\n  align-items: center;\n  margin: 5px;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border: 1px solid;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.button-container button:first-child {\n  margin-right: auto;\n}\n\n.button-container button:last-child {\n  margin-left: 5px;\n}\n\n.delete-task-btn, .delete-project-btn {\n  color: red;\n}\n\n.input-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.input-container label {\n  font-size: small;\n  flex-basis: 70px;\n}\n\n.input-container select,\ninput {\n  flex: auto;\n}\n\n.input-container textarea {\n  width: 100%;\n}\n\n.comp-btn,\n.comp-btn-greyed {\n  position: relative;\n  width: 23px;\n  height: 23px;\n  line-height: 23px;\n  border-radius: 50%;\n  color: #000000;\n  text-align: center;\n  text-decoration: none;\n  margin-right: 6px;\n  transition: all 0.3s ease;\n}\n\n.comp-btn-greyed {\n  color: darkgray;\n  border-width: thin;\n}\n\n.comp-btn-greyed:hover {\n  background: #ffffff;\n}\n\n.comp-btn:hover {\n  background: #ace4ae;\n}\n\n.comp-btn:hover .button-text {\n  opacity: 1;\n}\n\n.button-text {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.completed {\n  color: darkgray;\n  text-decoration: line-through;\n}\n\n.project-name-input {\n  width: 20vw;\n  border: none;\n}\n\n.project-title-header {\n  display: flex;\n  padding: 5px;\n  align-items: center;\n}\n\n.project-title-header h3 {\n  display: flex;\n}\n\n.project-title-header label {\n  margin-right: 0.5rem;\n}\n\n.project-title-header button {\n  flex: initial;\n}\n\n.active-project {\n  font-weight: bold;\n}\n\n#new-task-button-li button {\n  margin-top: 15px;\n}\n\n@media screen and (max-width: 480px) {\n  .container {\n    margin: 0;\n    max-width: 100vw;\n    height: 100vh;\n    border: none;\n    border-radius: 0px;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    overflow: hidden;\n  }\n\n  .sidebar {\n    border-radius: 0;\n  }\n\n  .project-title-header {\n    display: flex;\n    width: 70vw;\n    padding: 0;\n    justify-content: space-between;\n  }\n\n  .project-title-header > * {\n    flex: 1.5;\n    margin: 0;\n    width: 1rem;\n  }\n  .project-title-header button {\n    flex: 0.5;\n    margin: 0;\n    width: 1rem;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .sidebar {\n    min-width: 3rem;\n  }\n\n  .project-title-header {\n    display: flex;\n    max-width: 57vw;\n    padding: 0;\n    justify-content: space-between;\n  }\n  .project-title-header input {\n    max-width: 25vw;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .sidebar {\n    min-width: 10rem;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .container {\n    max-width: 65vw;\n  }\n  .sidebar {\n    min-width: 15rem;\n  }\n}\n\n@media screen and (min-width: 2000px) {\n  .sidebar {\n    min-width: 30rem;\n  }\n\n  .sidebar button {\n    min-width: 10vw;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Handle localStorage

function Storage() {
  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  const testStorage = () => {
    if (storageAvailable("localStorage")) {
      // Yippee! We can use localStorage awesomeness
      console.log("storage available");
    } else {
      // Too bad, no localStorage for u
      console.log("no storage");
    }
  };

  // Set an item in localStorage
  function setItem(key, value) {
    if (storageAvailable("localStorage")) {
      localStorage.setItem(key, value);
    } else {
      console.log("localStorage is not available");
    }
  }

  // Get an item from localStorage
  function getItem(key) {
    if (storageAvailable("localStorage")) {
      return localStorage.getItem(key);
    } else {
      console.log("localStorage is not available");
      return null;
    }
  }

  // Set an object in localStorage
  function setObject(key, obj) {
    setItem(key, JSON.stringify(obj));
  }

  // Get an object from localStorage
  function getObject(key) {
    const item = getItem(key);
    return item ? JSON.parse(item) : null;
  }

  return { testStorage, setItem, getItem, setObject, getObject };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


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
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");




function View() {
  const sidebarDiv = document.getElementById("sidebar");
  const mainContentDiv = document.getElementById("main-content");

  const mainContentPlaceholder = `<div id="main-content" class="main-content">
  <h2>To Do</h2>
  <p>Select a Project to get started!</p>
  </div>`;

  mainContentDiv.innerHTML = mainContentPlaceholder;

  const storage = (0,_Storage__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
    const newTask = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "",
      description: "",
      dueDate: undefined,
      priority: "",
      notes: "",
      completed: false,
    });
    const newTaskProjectId = activeProject.addTask(newTask);
    newTask.setTaskOwner(newTaskProjectId);
    editTask(newTask.getTask(), true);
  };

  const handleDeleteTask = (task) => {
    const owningProject = getOwningProjectFromTaskDetails(task);

    if (owningProject) {
      owningProject.deleteTask(task.id);
      //console.log(`task ${task.id} deleted`);
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

    // Create project buttons in sidebar
    storedProjects.getProjects().forEach((element) => {
      const details = element.getProjectDetails();
      const existingProjectBtn = document.createElement("button");
      if (element == activeProject) {
        existingProjectBtn.classList.add("active-project");
      }
      existingProjectBtn.innerText = details.projectName;
      existingProjectBtn.addEventListener("click", () => {
        handleProjectBtn(element);
      });

      sidebarDiv.appendChild(existingProjectBtn);
    });

    // Create a new project button in sidebar
    const newProjectBtn = document.createElement("button");
    newProjectBtn.innerText = "+";
    newProjectBtn.addEventListener("click", () => {
      handleNewProjectBtn();
    });

    sidebarDiv.appendChild(newProjectBtn);
  };

  const handleNewProjectBtn = () => {
    const newHeaderDiv = document.createElement("div");
    newHeaderDiv.classList.add("project-title-header");

    const newHeaderLabel = document.createElement("label");
    newHeaderLabel.innerHTML = "Name: ";
    newHeaderLabel.htmlFor = "new-header-input";

    const newHeaderInput = document.createElement("input");
    newHeaderInput.id = "new-header-input";
    newHeaderInput.placeholder = "Enter New Project Name";
    newHeaderInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        headerSaveBtn.click();
      }
    });
    newHeaderDiv.appendChild(newHeaderLabel);
    newHeaderDiv.appendChild(newHeaderInput);

    const headerSaveBtn = document.createElement("button");
    headerSaveBtn.innerText = "Save";
    headerSaveBtn.addEventListener("click", () => {
      if (newHeaderInput.value.trim() != "") {
        var newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(`${newHeaderInput.value}`);
        storedProjects.addProject(newProject);

        // Store in LocalStorage

        const projectDetails = storedProjects.getProjects().map((project) => {
          return project.getProjectDetails();
        });
        console.log(projectDetails);

        storage.setObject("storedProjects", projectDetails);
        console.log(storage.getObject("storedProjects"));
        activeProject = newProject;
      } else {
        newHeaderInput.focus();
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
    const projectName = project.getProjectDetails().projectName;
    const newHeaderDiv = document.createElement("div");
    newHeaderDiv.classList.add("project-title-header");
    const newHeaderInput = document.createElement("input");
    newHeaderInput.value = projectName;
    newHeaderDiv.appendChild(newHeaderInput);
    const headerUpdateBtn = document.createElement("button");
    headerUpdateBtn.innerText = "Update";
    headerUpdateBtn.addEventListener("click", () => {
      handleUpdateProject(project, newHeaderInput.value);
    });
    newHeaderDiv.appendChild(headerUpdateBtn);
    const headerDeleteProjectBtn = document.createElement("button");
    headerDeleteProjectBtn.classList.add("delete-project-btn");
    headerDeleteProjectBtn.innerText = "Delete Project";
    headerDeleteProjectBtn.addEventListener("click", () => {
      const response = confirm(
        `Are you sure you want to delete ${projectName}?`
      );
      if (response) handleDeleteProject(project);
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

  // check a project for empty tasks and delete empty tasks
  const checkForAndDeleteEmptyTasks = (project, isNewTask = false) => {
    const projectDetails = project.getProjectDetails().tasksDetailsArray;
    projectDetails.forEach((task) => {
      if (task.title.trim() == "" && task.description.trim() == "") {
        if (!isNewTask) {
          handleDeleteTask(task);
        }
      }
    });
  };

  const updateTaskView = (project, isNewTask = false) => {
    checkForAndDeleteEmptyTasks(project, isNewTask);

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
      const newBtnHoverText = document.createElement("div");
      newCompButton.classList.add("comp-btn");
      if (task.completed) {
        newLi.classList.add("completed");
        newCompButton.setAttribute("class", "comp-btn-greyed");
        newBtnHoverText.innerHTML = "⎌"; // not currently used.
      } else {
        newLi.classList.remove("completed");
        newBtnHoverText.innerHTML = "✓";
      }
      newBtnHoverText.classList.add("button-text");
      newCompButton.appendChild(newBtnHoverText);
      newLi.id = task.id;

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
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("input-container");
    const titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Title:";
    titleLabel.htmlFor = "title-input";
    const titleInput = document.createElement("input");
    titleInput.id = "title-input";
    titleInput.value = task.title;
    titleInput.placeholder = "Title";
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);
    taskDiv.appendChild(titleContainer);

    // Description input field
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("input-container");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.innerHTML = "Description:";
    descriptionLabel.htmlFor = "description-input";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "description-input";
    descriptionInput.value = task.description || "";
    descriptionInput.placeholder = "Description";
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);
    taskDiv.appendChild(descriptionContainer);

    // Due date input field
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("input-container");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerHTML = "Due Date:";
    dueDateLabel.htmlFor = "due-date-input";
    const dueDateInput = document.createElement("input");
    dueDateInput.id = "due-date-input";
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
    priorityLabel.htmlFor = "priority-input";
    priorityLabel.innerHTML = "Priority:";
    const priorityInput = document.createElement("select");
    priorityInput.id = "priority-input";
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
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");







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

// localStorage
const storage = (0,_Storage__WEBPACK_IMPORTED_MODULE_5__["default"])();
storage.testStorage();

storage.setObject("testTask", testTask.getTask());
storage.setObject("testStorageObject", {
  name: "bob",
  age: 30,
  email: "bob@bob.bob",
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLFNBQVMsVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLEtBQUssV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLG1E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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBLDZCQUE2QixZQUFZLElBQUksaUJBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDdGRwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNNO0FBQ1E7QUFDZDtBQUNNOztBQUVoQyxpQkFBaUIsaURBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxrQkFBa0IsaURBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQkFBZ0IsaURBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvQkFBb0Isd0RBQVc7O0FBRS9CLHVCQUF1QixvREFBTztBQUM5QixtQkFBbUIsb0RBQU87O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxpREFBSTtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG9EQUFPO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9Qcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvVmlldy5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbioge1xuICBtYXJnaW46IDA7XG59XG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW1nLFxucGljdHVyZSxcbnZpZGVvLFxuY2FudmFzLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxucCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4jcm9vdCxcbiNfX25leHQge1xuICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBtaW4taGVpZ2h0OiAyMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhkOGQ4ZDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICAvKiBtYXgtd2lkdGg6IDIwcmVtOyAqL1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxODBkZWcsXG4gICAgcmdiYSgyMzYsIDIzNiwgMjM2LCAxKSAxNSUsXG4gICAgcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjQwNjYwMDE0MDA1NjAyMjQpIDEwMCVcbiAgKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcbiAgLyogYm9yZGVyLXJhZGl1czogMTNweCAwcHggMHB4IDEzcHg7ICovXG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2lkZWJhciBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIG1pbi13aWR0aDogMTV2dztcbiAgbWF4LXdpZHRoOiAyMHZ3OyAqL1xuICAvKiB3aWR0aDogMjB2dzsgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4jdGFzay1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4jdGFzay1saXN0IGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi50YXNrLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmRlbGV0ZS10YXNrLWJ0biwgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmbGV4LWJhc2lzOiA3MHB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHNlbGVjdCxcbmlucHV0IHtcbiAgZmxleDogYXV0bztcbn1cblxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tcC1idG4sXG4uY29tcC1idG4tZ3JleWVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uY29tcC1idG4tZ3JleWVkIHtcbiAgY29sb3I6IGRhcmtncmF5O1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG5cbi5jb21wLWJ0bi1ncmV5ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY29tcC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYWNlNGFlO1xufVxuXG4uY29tcC1idG46aG92ZXIgLmJ1dHRvbi10ZXh0IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jb21wbGV0ZWQge1xuICBjb2xvcjogZGFya2dyYXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcbiAgd2lkdGg6IDIwdnc7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2plY3QtdGl0bGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC10aXRsZS1oZWFkZXIgaDMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdC10aXRsZS1oZWFkZXIgbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLnByb2plY3QtdGl0bGUtaGVhZGVyIGJ1dHRvbiB7XG4gIGZsZXg6IGluaXRpYWw7XG59XG5cbi5hY3RpdmUtcHJvamVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbmV3LXRhc2stYnV0dG9uLWxpIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnNpZGViYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAucHJvamVjdC10aXRsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgcGFkZGluZzogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucHJvamVjdC10aXRsZS1oZWFkZXIgPiAqIHtcbiAgICBmbGV4OiAxLjU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxcmVtO1xuICB9XG4gIC5wcm9qZWN0LXRpdGxlLWhlYWRlciBidXR0b24ge1xuICAgIGZsZXg6IDAuNTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIG1pbi13aWR0aDogM3JlbTtcbiAgfVxuXG4gIC5wcm9qZWN0LXRpdGxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDU3dnc7XG4gICAgcGFkZGluZzogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnByb2plY3QtdGl0bGUtaGVhZGVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDI1dnc7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIG1pbi13aWR0aDogMTByZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjV2dztcbiAgfVxuICAuc2lkZWJhciB7XG4gICAgbWluLXdpZHRoOiAxNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIG1pbi13aWR0aDogMzByZW07XG4gIH1cblxuICAuc2lkZWJhciBidXR0b24ge1xuICAgIG1pbi13aWR0aDogMTB2dztcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFB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U0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIG1heC13aWR0aDogOTB2dztcXG4gIG1pbi1oZWlnaHQ6IDIxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzhkOGQ4ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICAvKiBtYXgtd2lkdGg6IDIwcmVtOyAqL1xcbiAgYmFja2dyb3VuZDogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxODBkZWcsXFxuICAgIHJnYmEoMjM2LCAyMzYsIDIzNiwgMSkgMTUlLFxcbiAgICByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuNDA2NjAwMTQwMDU2MDIyNCkgMTAwJVxcbiAgKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA7XFxuICAvKiBib3JkZXItcmFkaXVzOiAxM3B4IDBweCAwcHggMTNweDsgKi9cXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBtaW4td2lkdGg6IDE1dnc7XFxuICBtYXgtd2lkdGg6IDIwdnc7ICovXFxuICAvKiB3aWR0aDogMjB2dzsgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbjogOHB4O1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbiN0YXNrLWxpc3QgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idG4sIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgZmxleC1iYXNpczogNzBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBzZWxlY3QsXFxuaW5wdXQge1xcbiAgZmxleDogYXV0bztcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbXAtYnRuLFxcbi5jb21wLWJ0bi1ncmV5ZWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIzcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICBsaW5lLWhlaWdodDogMjNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uY29tcC1idG4tZ3JleWVkIHtcXG4gIGNvbG9yOiBkYXJrZ3JheTtcXG4gIGJvcmRlci13aWR0aDogdGhpbjtcXG59XFxuXFxuLmNvbXAtYnRuLWdyZXllZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29tcC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2FjZTRhZTtcXG59XFxuXFxuLmNvbXAtYnRuOmhvdmVyIC5idXR0b24tdGV4dCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYnV0dG9uLXRleHQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBjb2xvcjogZGFya2dyYXk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dCB7XFxuICB3aWR0aDogMjB2dztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1oZWFkZXIgaDMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtaGVhZGVyIGxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1oZWFkZXIgYnV0dG9uIHtcXG4gIGZsZXg6IGluaXRpYWw7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbi1saSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuXFxuICAucHJvamVjdC10aXRsZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgcGFkZGluZzogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGl0bGUtaGVhZGVyID4gKiB7XFxuICAgIGZsZXg6IDEuNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LXRpdGxlLWhlYWRlciBidXR0b24ge1xcbiAgICBmbGV4OiAwLjU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIG1pbi13aWR0aDogM3JlbTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRpdGxlLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogNTd2dztcXG4gICAgcGFkZGluZzogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLnByb2plY3QtdGl0bGUtaGVhZGVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDY1dnc7XFxuICB9XFxuICAuc2lkZWJhciB7XFxuICAgIG1pbi13aWR0aDogMTVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xcbiAgfVxcblxcbiAgLnNpZGViYXIgYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiAxMHZ3O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICBjb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDkpO1xuXG4gIGxldCBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gIGNvbnN0IHByb2plY3RJZCA9IGdlbmVyYXRlSWQoKTtcbiAgbGV0IHByb2plY3RJc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIC8vIG9uZSBhcnJheSBzdG9yZXMgdGFzayBkZXRhaWxzLCBvbmUgc3RvcmVzIHRoZSBhY3R1YWwgdGFzayBvYmplY3RzIHRoZW1zZWx2ZXNcbiAgY29uc3QgdGFza3NEZXRhaWxzQXJyYXkgPSBbXTtcbiAgY29uc3QgdGFza3NPYmplY3RzQXJyYXkgPSBbXTtcblxuICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICB0YXNrc0RldGFpbHNBcnJheS5wdXNoKG5ld1Rhc2suZ2V0VGFzaygpKTtcbiAgICB0YXNrc09iamVjdHNBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgIHJldHVybiBwcm9qZWN0SWQ7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSWQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB0YXNrc0RldGFpbHNBcnJheS5maW5kSW5kZXgoKG9iaikgPT4gb2JqW1wiaWRcIl0gPT09IHRhc2tJZCk7XG4gICAgdGFza3NEZXRhaWxzQXJyYXkuc3BsaWNlKHJlc3VsdCwgMSk7XG4gICAgdGFza3NPYmplY3RzQXJyYXkuc3BsaWNlKHJlc3VsdCwgMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3NEZXRhaWxzID0gKCkgPT4gdGFza3NEZXRhaWxzQXJyYXk7XG4gIGNvbnN0IGdldFRhc2tzT2JqZWN0cyA9ICgpID0+IHRhc2tzT2JqZWN0c0FycmF5O1xuXG4gIGNvbnN0IGdldFRhc2sgPSAodGFza0lkKSA9PiB7XG4gICAgY29uc3QgZm91bmRUYXNrID0gdGFza3NEZXRhaWxzQXJyYXkuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIHJldHVybiB0YXNrc09iamVjdHNBcnJheVtmb3VuZFRhc2tdO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3ROYW1lID0gKG5hbWUpID0+IChwcm9qZWN0TmFtZSA9IG5hbWUpO1xuXG4gIC8vIE5vdCBjdXJyZW50bHkgdXNpbmcgdGhpcyBmdW5jdGlvbmFsaXR5XG4gIGNvbnN0IHRvZ2dsZVByb2plY3RBY3RpdmUgPSAoKSA9PiBwcm9qZWN0SXNBY3RpdmUgPSAhcHJvamVjdElzQWN0aXZlO1xuXG4gIGNvbnN0IGdldFByb2plY3REZXRhaWxzID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0TmFtZSxcbiAgICAgIHByb2plY3RJZCxcbiAgICAgIHByb2plY3RJc0FjdGl2ZSwgLy8gTm90IGN1cnJlbnRseSB1c2luZyB0aGlzXG4gICAgICB0YXNrc0RldGFpbHNBcnJheSxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIGdldFRhc2tzRGV0YWlscyxcbiAgICBnZXRUYXNrc09iamVjdHMsXG4gICAgZ2V0VGFzayxcbiAgICBzZXRQcm9qZWN0TmFtZSxcbiAgICB0b2dnbGVQcm9qZWN0QWN0aXZlLFxuICAgIGdldFByb2plY3REZXRhaWxzLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiZnVuY3Rpb24gUHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKG9iaikgPT4gb2JqLmdldFByb2plY3REZXRhaWxzKCkucHJvamVjdElkID09PSBwcm9qZWN0SWRcbiAgICApO1xuICAgIHByb2plY3RzLnNwbGljZShyZXN1bHQsIDEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICByZXR1cm4geyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0cyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdDtcbiIsIi8vIEhhbmRsZSBsb2NhbFN0b3JhZ2VcblxuZnVuY3Rpb24gU3RvcmFnZSgpIHtcbiAgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0ZXN0U3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICAgICAgY29uc29sZS5sb2coXCJzdG9yYWdlIGF2YWlsYWJsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1XG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHN0b3JhZ2VcIik7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNldCBhbiBpdGVtIGluIGxvY2FsU3RvcmFnZVxuICBmdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IGFuIGl0ZW0gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgYW4gb2JqZWN0IGluIGxvY2FsU3RvcmFnZVxuICBmdW5jdGlvbiBzZXRPYmplY3Qoa2V5LCBvYmopIHtcbiAgICBzZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH1cblxuICAvLyBHZXQgYW4gb2JqZWN0IGZyb20gbG9jYWxTdG9yYWdlXG4gIGZ1bmN0aW9uIGdldE9iamVjdChrZXkpIHtcbiAgICBjb25zdCBpdGVtID0gZ2V0SXRlbShrZXkpO1xuICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IG51bGw7XG4gIH1cblxuICByZXR1cm4geyB0ZXN0U3RvcmFnZSwgc2V0SXRlbSwgZ2V0SXRlbSwgc2V0T2JqZWN0LCBnZXRPYmplY3QgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiIsImZ1bmN0aW9uIFRhc2soeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCBwcmlvcml0eSwgbm90ZXMgfSkge1xuICBjb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDkpO1xuXG4gIGNvbnN0IHNldFRhc2tPd25lciA9IChwcm9qZWN0SWQpID0+IHtcbiAgICB0YXNrLm93bmVyID0gcHJvamVjdElkO1xuICB9O1xuXG4gIGxldCB0YXNrID0ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgaWQ6IGdlbmVyYXRlSWQoKSxcbiAgICBvd25lcjogbnVsbCxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IGdldFRhc2sgPSAoKSA9PiB0YXNrO1xuICBjb25zdCBnZXRUYXNrSWQgPSAoKSA9PiB0YXNrLmlkO1xuXG4gIGNvbnN0IGdldFRhc2tPd25lciA9ICgpID0+IHRhc2sub3duZXI7XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9KSA9PiB7XG4gICAgaWYgKHRpdGxlICE9PSB1bmRlZmluZWQpIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICBpZiAoZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGlmIChkdWVEYXRlICE9PSB1bmRlZmluZWQpIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgaWYgKHByaW9yaXR5ICE9PSB1bmRlZmluZWQpIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpZiAobm90ZXMgIT09IHVuZGVmaW5lZCkgdGFzay5ub3RlcyA9IG5vdGVzO1xuICAgIGNvbnNvbGUubG9nKGAke3RpdGxlfSBlZGl0ZWRgKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiAodGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFzayxcbiAgICBnZXRUYXNrSWQsXG4gICAgZWRpdFRhc2ssXG4gICAgc2V0VGFza093bmVyLFxuICAgIGdldFRhc2tPd25lcixcbiAgICB0b2dnbGVDb21wbGV0ZWQsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIFZpZXcoKSB7XG4gIGNvbnN0IHNpZGViYXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnRQbGFjZWhvbGRlciA9IGA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCIgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cbiAgPGgyPlRvIERvPC9oMj5cbiAgPHA+U2VsZWN0IGEgUHJvamVjdCB0byBnZXQgc3RhcnRlZCE8L3A+XG4gIDwvZGl2PmA7XG5cbiAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gbWFpbkNvbnRlbnRQbGFjZWhvbGRlcjtcblxuICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZSgpO1xuICAvLyBTdG9yZSBwcm9qZWN0IHN0YXRlIGluZm9ybWF0aW9uIGZvciBhY2Nlc3MgaW5zaWRlIG9mIFZpZXdcbiAgbGV0IHN0b3JlZFByb2plY3RzO1xuICBsZXQgYWN0aXZlUHJvamVjdDtcblxuICBjb25zdCBzdG9yZUluaXRpYWxQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgIHN0b3JlZFByb2plY3RzID0gcHJvamVjdHM7XG4gICAgdXBkYXRlUHJvamVjdFZpZXcoKTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZmluZCB0aGUgUHJvamVjdCB0aGF0IGEgVGFzayBiZWxvbmdzIHRvXG4gIGNvbnN0IGdldE93bmluZ1Byb2plY3RGcm9tVGFza0RldGFpbHMgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IG93bmluZ1Byb2plY3QgPSBzdG9yZWRQcm9qZWN0c1xuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3REZXRhaWxzKCkucHJvamVjdElkID09PSB0YXNrLm93bmVyKTtcbiAgICByZXR1cm4gb3duaW5nUHJvamVjdDtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIEhUTUwgZGF0ZVxuICBjb25zdCBIVE1MZGF0ZSA9IChkYXRlSW5wdXQpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZUlucHV0KTtcbiAgICBjb25zdCBtb250aCA9IChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IGRheSA9IChcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBodG1sRGF0ZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG5cbiAgICByZXR1cm4gaHRtbERhdGU7XG4gIH07XG5cbiAgLy8gQW5vdGhlciBkYXRlIGhlbHBlciBmdW5jdGlvbiB0byBkZWFsIHdpdGggVVRDIGRhdGVzXG4gIGZ1bmN0aW9uIHBhcnNlRGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gICAgY29uc3QgZGF0ZU9ubHlSZWdleCA9XG4gICAgICAvXihbMC05XShbMC05XShbMC05XVsxLTldfFsxLTldMCl8WzEtOV0wMCl8WzEtOV0wMDApKC0oMFsxLTldfDFbMC0yXSkoLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pKSkkLztcbiAgICBpZiAoZGF0ZU9ubHlSZWdleC50ZXN0KGRhdGVTdHJpbmcpKSB7XG4gICAgICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgdXRjRGF0ZS5nZXRUaW1lKCkgKyB1dGNEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICAgICAgKTtcbiAgICAgIHJldHVybiBsb2NhbERhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVByb2plY3RCdG4gPSAocHJvamVjdCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgIHVwZGF0ZVByb2plY3RWaWV3KCk7XG4gICAgdXBkYXRlVGFza1ZpZXcocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV3VGFza0J0biA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayh7XG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgZHVlRGF0ZTogdW5kZWZpbmVkLFxuICAgICAgcHJpb3JpdHk6IFwiXCIsXG4gICAgICBub3RlczogXCJcIixcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgbmV3VGFza1Byb2plY3RJZCA9IGFjdGl2ZVByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBuZXdUYXNrLnNldFRhc2tPd25lcihuZXdUYXNrUHJvamVjdElkKTtcbiAgICBlZGl0VGFzayhuZXdUYXNrLmdldFRhc2soKSwgdHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3Qgb3duaW5nUHJvamVjdCA9IGdldE93bmluZ1Byb2plY3RGcm9tVGFza0RldGFpbHModGFzayk7XG5cbiAgICBpZiAob3duaW5nUHJvamVjdCkge1xuICAgICAgb3duaW5nUHJvamVjdC5kZWxldGVUYXNrKHRhc2suaWQpO1xuICAgICAgLy9jb25zb2xlLmxvZyhgdGFzayAke3Rhc2suaWR9IGRlbGV0ZWRgKTtcbiAgICAgIHVwZGF0ZVRhc2tWaWV3KG93bmluZ1Byb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT3duaW5nIHByb2plY3Qgbm90IGZvdW5kIGZvciB0YXNrXCIsIHRhc2spO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAodGFzaywgaXNOZXdUYXNrID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB0YXNrT3duZXIgPSBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzKHRhc2spO1xuICAgIGlmIChpc05ld1Rhc2spIGhhbmRsZURlbGV0ZVRhc2sodGFzayk7XG4gICAgdXBkYXRlVGFza1ZpZXcodGFza093bmVyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlVGFzayA9ICh7XG4gICAgdGFzayxcbiAgICB0aXRsZUlucHV0OiB7IHZhbHVlOiB0aXRsZSB9LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQ6IHsgdmFsdWU6IGRlc2NyaXB0aW9uIH0sXG4gICAgZHVlRGF0ZUlucHV0OiB7IHZhbHVlOiBkdWVEYXRlIH0sXG4gICAgcHJpb3JpdHlJbnB1dDogeyB2YWx1ZTogcHJpb3JpdHkgfSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJbnB1dHMgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcbiAgICB0YXNrSW5wdXRzLmR1ZURhdGUgPSBwYXJzZURhdGVTdHJpbmcodGFza0lucHV0cy5kdWVEYXRlKTtcbiAgICBjb25zdCBvd25pbmdQcm9qZWN0ID0gZ2V0T3duaW5nUHJvamVjdEZyb21UYXNrRGV0YWlscyh0YXNrKTtcbiAgICBjb25zdCBhY3R1YWxUYXNrT2JqZWN0ID0gb3duaW5nUHJvamVjdC5nZXRUYXNrKHRhc2suaWQpO1xuICAgIGFjdHVhbFRhc2tPYmplY3QuZWRpdFRhc2soe1xuICAgICAgdGl0bGU6IHRhc2tJbnB1dHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGFza0lucHV0cy5kZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHRhc2tJbnB1dHMuZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5OiB0YXNrSW5wdXRzLnByaW9yaXR5LFxuICAgIH0pO1xuICAgIHVwZGF0ZVRhc2tWaWV3KG93bmluZ1Byb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3RWaWV3ID0gKCkgPT4ge1xuICAgIHNpZGViYXJEaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIENyZWF0ZSBwcm9qZWN0IGJ1dHRvbnMgaW4gc2lkZWJhclxuICAgIHN0b3JlZFByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnQuZ2V0UHJvamVjdERldGFpbHMoKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBpZiAoZWxlbWVudCA9PSBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIGV4aXN0aW5nUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICB9XG4gICAgICBleGlzdGluZ1Byb2plY3RCdG4uaW5uZXJUZXh0ID0gZGV0YWlscy5wcm9qZWN0TmFtZTtcbiAgICAgIGV4aXN0aW5nUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBoYW5kbGVQcm9qZWN0QnRuKGVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQoZXhpc3RpbmdQcm9qZWN0QnRuKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IGJ1dHRvbiBpbiBzaWRlYmFyXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3UHJvamVjdEJ0bi5pbm5lclRleHQgPSBcIitcIjtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBoYW5kbGVOZXdQcm9qZWN0QnRuKCk7XG4gICAgfSk7XG5cbiAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5ld1Byb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3SGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgbmV3SGVhZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmV3SGVhZGVyTGFiZWwuaW5uZXJIVE1MID0gXCJOYW1lOiBcIjtcbiAgICBuZXdIZWFkZXJMYWJlbC5odG1sRm9yID0gXCJuZXctaGVhZGVyLWlucHV0XCI7XG5cbiAgICBjb25zdCBuZXdIZWFkZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdIZWFkZXJJbnB1dC5pZCA9IFwibmV3LWhlYWRlci1pbnB1dFwiO1xuICAgIG5ld0hlYWRlcklucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBOZXcgUHJvamVjdCBOYW1lXCI7XG4gICAgbmV3SGVhZGVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGVhZGVyU2F2ZUJ0bi5jbGljaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG5ld0hlYWRlckRpdi5hcHBlbmRDaGlsZChuZXdIZWFkZXJMYWJlbCk7XG4gICAgbmV3SGVhZGVyRGl2LmFwcGVuZENoaWxkKG5ld0hlYWRlcklucHV0KTtcblxuICAgIGNvbnN0IGhlYWRlclNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhlYWRlclNhdmVCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgaGVhZGVyU2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG5ld0hlYWRlcklucHV0LnZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgIHZhciBuZXdQcm9qZWN0ID0gUHJvamVjdChgJHtuZXdIZWFkZXJJbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgc3RvcmVkUHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgICAgICAvLyBTdG9yZSBpbiBMb2NhbFN0b3JhZ2VcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IHN0b3JlZFByb2plY3RzLmdldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByb2plY3QuZ2V0UHJvamVjdERldGFpbHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3REZXRhaWxzKTtcblxuICAgICAgICBzdG9yYWdlLnNldE9iamVjdChcInN0b3JlZFByb2plY3RzXCIsIHByb2plY3REZXRhaWxzKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmFnZS5nZXRPYmplY3QoXCJzdG9yZWRQcm9qZWN0c1wiKSk7XG4gICAgICAgIGFjdGl2ZVByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SGVhZGVySW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVByb2plY3RWaWV3KCk7XG4gICAgICBpZiAobmV3UHJvamVjdCkgdXBkYXRlVGFza1ZpZXcobmV3UHJvamVjdCk7XG4gICAgfSk7XG4gICAgbmV3SGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclNhdmVCdG4pO1xuXG4gICAgY29uc3QgaGVhZGVyQ2FuY2VsQ3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGVyQ2FuY2VsQ3JlYXRlUHJvamVjdEJ0bi5pbm5lclRleHQgPSBcIkNhbmNlbFwiO1xuICAgIGhlYWRlckNhbmNlbENyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIHVwZGF0ZVRhc2tWaWV3KGFjdGl2ZVByb2plY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gbWFpbkNvbnRlbnRQbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyQ2FuY2VsQ3JlYXRlUHJvamVjdEJ0bik7XG5cbiAgICBtYWluQ29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG5ld0hlYWRlckRpdik7XG4gICAgbmV3SGVhZGVySW5wdXQuZm9jdXMoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdEhlYWRlciA9IChwcm9qZWN0LCBoZWFkZXJEaXYpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QuZ2V0UHJvamVjdERldGFpbHMoKS5wcm9qZWN0TmFtZTtcbiAgICBjb25zdCBuZXdIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0hlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1oZWFkZXJcIik7XG4gICAgY29uc3QgbmV3SGVhZGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3SGVhZGVySW5wdXQudmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQobmV3SGVhZGVySW5wdXQpO1xuICAgIGNvbnN0IGhlYWRlclVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGVyVXBkYXRlQnRuLmlubmVyVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgaGVhZGVyVXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBoYW5kbGVVcGRhdGVQcm9qZWN0KHByb2plY3QsIG5ld0hlYWRlcklucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyVXBkYXRlQnRuKTtcbiAgICBjb25zdCBoZWFkZXJEZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBoZWFkZXJEZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idG5cIik7XG4gICAgaGVhZGVyRGVsZXRlUHJvamVjdEJ0bi5pbm5lclRleHQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gICAgaGVhZGVyRGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBjb25maXJtKFxuICAgICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3Byb2plY3ROYW1lfT9gXG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlKSBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuICAgIG5ld0hlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJEZWxldGVQcm9qZWN0QnRuKTtcblxuICAgIGhlYWRlckRpdi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdIZWFkZXJEaXYsIGhlYWRlckRpdik7XG4gICAgbmV3SGVhZGVySW5wdXQuZm9jdXMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVQcm9qZWN0ID0gKHByb2plY3QsIGVkaXRQcm9qZWN0SW5wdXQpID0+IHtcbiAgICBwcm9qZWN0LnNldFByb2plY3ROYW1lKGVkaXRQcm9qZWN0SW5wdXQpO1xuICAgIHVwZGF0ZVByb2plY3RWaWV3KCk7XG4gICAgdXBkYXRlVGFza1ZpZXcocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdC5nZXRQcm9qZWN0RGV0YWlscygpLnByb2plY3RJZDtcbiAgICBjb25zdCBkZWxldGVkSW5kZXggPSBzdG9yZWRQcm9qZWN0cy5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gc3RvcmVkUHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcblxuICAgIGlmIChwcm9qZWN0c0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmV4dEFjdGl2ZUluZGV4ID0gTWF0aC5tYXgoMCwgZGVsZXRlZEluZGV4IC0gMSk7XG4gICAgICBjb25zdCBuZXh0QWN0aXZlUHJvamVjdCA9IHByb2plY3RzTGlzdFtuZXh0QWN0aXZlSW5kZXhdO1xuICAgICAgdXBkYXRlVGFza1ZpZXcobmV4dEFjdGl2ZVByb2plY3QpO1xuICAgICAgYWN0aXZlUHJvamVjdCA9IG5leHRBY3RpdmVQcm9qZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWluQ29udGVudERpdi5pbm5lckhUTUwgPSBgPGRpdj48cD5BZGQgYSBwcm9qZWN0IHRvIGdldCBzdGFydGVkPC9wPjwvZGl2PmA7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvamVjdFZpZXcoKTtcbiAgfTtcblxuICAvLyBjaGVjayBhIHByb2plY3QgZm9yIGVtcHR5IHRhc2tzIGFuZCBkZWxldGUgZW1wdHkgdGFza3NcbiAgY29uc3QgY2hlY2tGb3JBbmREZWxldGVFbXB0eVRhc2tzID0gKHByb2plY3QsIGlzTmV3VGFzayA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBwcm9qZWN0LmdldFByb2plY3REZXRhaWxzKCkudGFza3NEZXRhaWxzQXJyYXk7XG4gICAgcHJvamVjdERldGFpbHMuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudGl0bGUudHJpbSgpID09IFwiXCIgJiYgdGFzay5kZXNjcmlwdGlvbi50cmltKCkgPT0gXCJcIikge1xuICAgICAgICBpZiAoIWlzTmV3VGFzaykge1xuICAgICAgICAgIGhhbmRsZURlbGV0ZVRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrVmlldyA9IChwcm9qZWN0LCBpc05ld1Rhc2sgPSBmYWxzZSkgPT4ge1xuICAgIGNoZWNrRm9yQW5kRGVsZXRlRW1wdHlUYXNrcyhwcm9qZWN0LCBpc05ld1Rhc2spO1xuXG4gICAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IHByb2plY3QuZ2V0UHJvamVjdERldGFpbHMoKTtcblxuICAgIC8vIENyZWF0ZSBhIHByb2plY3QgaGVhZGVyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0VGl0bGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtaGVhZGVyXCIpO1xuICAgIHByb2plY3RUaXRsZUhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWRpdFByb2plY3RIZWFkZXIocHJvamVjdCwgcHJvamVjdFRpdGxlSGVhZGVyKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGAke3Byb2plY3REZXRhaWxzLnByb2plY3ROYW1lfWA7XG4gICAgcHJvamVjdFRpdGxlSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlSGVhZGVyKTtcblxuICAgIC8vIExpc3QgdGhlIHByb2plY3QgdGFza3NcbiAgICBjb25zdCBuZXdVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBuZXdVbC5pZCA9IFwidGFzay1saXN0XCI7XG4gICAgcHJvamVjdERldGFpbHMudGFza3NEZXRhaWxzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCBuZXdDb21wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IG5ld0J0bkhvdmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDb21wQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wLWJ0blwiKTtcbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgICBuZXdMaS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBuZXdDb21wQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29tcC1idG4tZ3JleWVkXCIpO1xuICAgICAgICBuZXdCdG5Ib3ZlclRleHQuaW5uZXJIVE1MID0gXCLijoxcIjsgLy8gbm90IGN1cnJlbnRseSB1c2VkLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TGkuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgbmV3QnRuSG92ZXJUZXh0LmlubmVySFRNTCA9IFwi4pyTXCI7XG4gICAgICB9XG4gICAgICBuZXdCdG5Ib3ZlclRleHQuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi10ZXh0XCIpO1xuICAgICAgbmV3Q29tcEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdCdG5Ib3ZlclRleHQpO1xuICAgICAgbmV3TGkuaWQgPSB0YXNrLmlkO1xuXG4gICAgICBuZXdMaS5pbm5lclRleHQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gICAgICBpZiAodGFzay5kZXNjcmlwdGlvbi50cmltKCkgIT09IFwiXCIpXG4gICAgICAgIG5ld0xpLmlubmVyVGV4dCA9IGAke3Rhc2sudGl0bGV9IC0gJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgICBuZXdMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBuZXdDb21wQnV0dG9uIHx8IGUudGFyZ2V0ID09PSBuZXdCdG5Ib3ZlclRleHQpIHtcbiAgICAgICAgICBjb21wbGV0ZVRhc2sodGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWRpdFRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBuZXdMaS5pbnNlcnRCZWZvcmUobmV3Q29tcEJ1dHRvbiwgbmV3TGkuY2hpbGROb2Rlc1swXSk7XG4gICAgICBuZXdVbC5hcHBlbmRDaGlsZChuZXdMaSk7XG4gICAgfSk7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3VWwpO1xuXG4gICAgLy8gQWRkIG5ldyB0YXNrIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSB0YXNrIGxpc3RcbiAgICBpZiAoIWlzTmV3VGFzaykge1xuICAgICAgY29uc3QgbmV3VGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV3VGFza0xpLmlkID0gXCJuZXctdGFzay1idXR0b24tbGlcIjtcbiAgICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3VGFza0J0bi5pbm5lclRleHQgPSBcIkFkZCBOZXcgVGFza1wiO1xuICAgICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmV3VGFza0J0bik7XG4gICAgICBuZXdUYXNrTGkuYXBwZW5kQ2hpbGQobmV3VGFza0J0bik7XG4gICAgICBuZXdVbC5hcHBlbmRDaGlsZChuZXdUYXNrTGkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUb2dnbGUgYSB0YXNrIGFzIGNvbXBsZXRlZCBvciBub3QgY29tcGxldGVkXG4gIGNvbnN0IGNvbXBsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3Qgb3duaW5nUHJvamVjdCA9IGdldE93bmluZ1Byb2plY3RGcm9tVGFza0RldGFpbHModGFzayk7XG4gICAgY29uc3QgYWN0dWFsVGFza09iamVjdCA9IG93bmluZ1Byb2plY3QuZ2V0VGFzayh0YXNrLmlkKTtcbiAgICBhY3R1YWxUYXNrT2JqZWN0LnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgIHVwZGF0ZVRhc2tWaWV3KG93bmluZ1Byb2plY3QpO1xuICB9O1xuXG4gIC8vIFJlcGxhY2UgZXhpc3RpbmcgbGkgRE9NIGVsZW1lbnQgd2l0aCBmdWxsIHRhc2sgZGV0YWlscyBmb3IgZWRpdGluZ1xuICBjb25zdCBlZGl0VGFzayA9ICh0YXNrLCBpc05ld1Rhc2sgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tPd25lciA9IGdldE93bmluZ1Byb2plY3RGcm9tVGFza0RldGFpbHModGFzayk7XG5cbiAgICAvLyBGb2xkcyB1cCB0aGUgdGFzayBkZXRhaWxzIChhY2NvcmRpb24pIHNvIG11bHRpcGxlIHRhc2tzIGFyZW4ndCBvcGVuIGF0IG9uY2UgZm9yIGVkaXRpbmdcbiAgICB1cGRhdGVUYXNrVmlldyh0YXNrT3duZXIsIGlzTmV3VGFzayk7XG5cbiAgICBsZXQgYXR0YWNobWVudFBvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5pZCk7XG5cbiAgICAvLyBDb250YWluZXIgZGl2XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzXCIpO1xuXG4gICAgLy8gVGl0bGUgaW5wdXQgZmllbGRcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJUaXRsZTpcIjtcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBcInRpdGxlLWlucHV0XCI7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZS1pbnB1dFwiO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgICAvLyBEZXNjcmlwdGlvbiBpbnB1dCBmaWVsZFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb24taW5wdXRcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uLWlucHV0XCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuXG4gICAgLy8gRHVlIGRhdGUgaW5wdXQgZmllbGRcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJkdWUtZGF0ZS1pbnB1dFwiO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImR1ZS1kYXRlLWlucHV0XCI7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBjb25zdCBjb252ZXJ0ZWREYXRlID0gSFRNTGRhdGUodGFzay5kdWVEYXRlKTtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBjb252ZXJ0ZWREYXRlO1xuXG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gICAgLy8gUHJpb3JpdHkgaW5wdXQgZmllbGRcbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHktaW5wdXRcIjtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6XCI7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9IFwicHJpb3JpdHktaW5wdXRcIjtcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdO1xuXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgcHJpb3JpdHlPcHRpb24udGV4dCA9IG9wdGlvbjtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnZhbHVlID0gb3B0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcbiAgICB9KTtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFzay5wcmlvcml0eTtcblxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuXG4gICAgLy8gQnV0dG9uIGNvbnRhaW5lclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gRGVsZXRlIHRhc2sgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J0bi5pbm5lclRleHQgPSBcIkRlbGV0ZSBUYXNrXCI7XG4gICAgZGVsZXRlVGFza0J0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS10YXNrLWJ0blwiO1xuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZURlbGV0ZVRhc2sodGFzaykpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcblxuICAgIC8vIFNhdmUgdGFzayBidXR0b25cbiAgICBjb25zdCBzYXZlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZVRhc2tCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgc2F2ZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJzYXZlLXRhc2stYnRuXCI7XG4gICAgc2F2ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgdGFzayBhdCBsZWFzdCBoYXMgYSBuYW1lXG4gICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPSBcIlwiIHx8ICFpc05ld1Rhc2spIHtcbiAgICAgICAgaGFuZGxlU2F2ZVRhc2soe1xuICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgdGl0bGVJbnB1dCxcbiAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgICAgICAgIGR1ZURhdGVJbnB1dCxcbiAgICAgICAgICBwcmlvcml0eUlucHV0LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNOZXdUYXNrKSB7XG4gICAgICAgIGhhbmRsZURlbGV0ZVRhc2sodGFzayk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZVRhc2tCdG4pO1xuXG4gICAgLy8gQ2FuY2VsIHRhc2sgZWRpdGluZyBidXR0b25cbiAgICBjb25zdCBjYW5jZWxUYXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsVGFza0VkaXRCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxUYXNrRWRpdEJ0bi5jbGFzc05hbWUgPSBcImNhbmNlbC10YXNrLWJ0blwiO1xuICAgIGNhbmNlbFRhc2tFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgaGFuZGxlQ2FuY2VsKHRhc2ssIGlzTmV3VGFzaylcbiAgICApO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxUYXNrRWRpdEJ0bik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBhdHRhY2htZW50UG9pbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGFza0RpdiwgYXR0YWNobWVudFBvaW50KTtcbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlVGFza1ZpZXcsIGVkaXRUYXNrLCBzdG9yZUluaXRpYWxQcm9qZWN0cyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9Qcm9qZWN0TGlzdFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiO1xuXG5jb25zdCB0ZXN0VGFzayA9IFRhc2soe1xuICB0aXRsZTogXCJUZXN0IFRhc2tcIixcbiAgZGVzY3JpcHRpb246IFwiVGVzdGluZyBNeSBUYXNrIE9iamVjdFwiLFxuICBkdWVEYXRlOiB1bmRlZmluZWQsXG4gIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICBub3RlczogXCJcIixcbiAgY29tcGxldGVkOiBmYWxzZSxcbn0pO1xuXG5jb25zdCB0ZXN0VGFzazIgPSBUYXNrKHtcbiAgdGl0bGU6IFwiVGFzayAyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlN0aWxsIFRlc3RpbmdcIixcbiAgZHVlRGF0ZTogdW5kZWZpbmVkLFxuICBwcmlvcml0eTogXCJsb3dcIixcbiAgbm90ZXM6IFwiXCIsXG4gIGNvbXBsZXRlZDogZmFsc2UsXG59KTtcblxuY29uc3QgZnVuVGFzayA9IFRhc2soe1xuICB0aXRsZTogXCJBIGZ1biBUYXNrXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlBsYXkgZ2FtZXMhXCIsXG4gIGR1ZURhdGU6IHVuZGVmaW5lZCxcbiAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICBub3RlczogXCJcIixcbiAgY29tcGxldGVkOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3RMaXN0KCk7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdChcIkRlZmF1bHRcIik7XG5jb25zdCBmdW5Qcm9qZWN0ID0gUHJvamVjdChcIkZ1biBQcm9qZWN0XCIpO1xuXG5jb25zdCBhZGRUZXN0VGFzayA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRhc2tUb0FkZCA9IHRhc2s7XG4gIGNvbnN0IHRhc2tPd25lciA9IHByb2plY3QuYWRkVGFzayh0YXNrVG9BZGQpO1xuICB0YXNrLnNldFRhc2tPd25lcih0YXNrT3duZXIpO1xufTtcblxuYWRkVGVzdFRhc2sodGVzdFRhc2ssIGRlZmF1bHRQcm9qZWN0KTtcbmFkZFRlc3RUYXNrKHRlc3RUYXNrMiwgZGVmYXVsdFByb2plY3QpO1xuYWRkVGVzdFRhc2soZnVuVGFzaywgZnVuUHJvamVjdCk7XG5cbnByb2plY3RMaXN0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChmdW5Qcm9qZWN0KTtcblxuY29uc3QgdmlldyA9IFZpZXcoKTtcbi8vdmlldy51cGRhdGVQcm9qZWN0Vmlldyhwcm9qZWN0TGlzdCk7XG52aWV3LnN0b3JlSW5pdGlhbFByb2plY3RzKHByb2plY3RMaXN0KTtcblxuLy8gbG9jYWxTdG9yYWdlXG5jb25zdCBzdG9yYWdlID0gU3RvcmFnZSgpO1xuc3RvcmFnZS50ZXN0U3RvcmFnZSgpO1xuXG5zdG9yYWdlLnNldE9iamVjdChcInRlc3RUYXNrXCIsIHRlc3RUYXNrLmdldFRhc2soKSk7XG5zdG9yYWdlLnNldE9iamVjdChcInRlc3RTdG9yYWdlT2JqZWN0XCIsIHtcbiAgbmFtZTogXCJib2JcIixcbiAgYWdlOiAzMCxcbiAgZW1haWw6IFwiYm9iQGJvYi5ib2JcIixcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9