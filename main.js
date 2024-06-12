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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


function Project(name, id = undefined, fromStorage = false) {
  let projectId;

  if (fromStorage == false) {
    projectId = Math.random().toString(36).substring(2, 9);
  } else {
    projectId = id;
  }

  let projectName = name;
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

  // Used for pulling in tasks from localstorage
  const setTasks = (tasksArray) => {
    tasksArray.forEach((element) => {
      const newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: element.title,
        description: element.description,
        dueDate: element.dueDate || new Date(),
        priority: element.priority,
        notes: element.notes,
      });
      newTask.setTaskOwner(element.owner);
      newTask.setCompleted(element.completed);
      newTask.setTaskId(element.id);

      tasksObjectsArray.push(newTask);
      tasksDetailsArray.push(newTask.getTask());
    });
  };

  const getTasksDetails = () => tasksDetailsArray;
  const getTasksObjects = () => tasksObjectsArray;

  const getTask = (taskId) => {
    const foundTask = tasksDetailsArray.findIndex((task) => task.id === taskId);
    return tasksObjectsArray[foundTask];
  };

  const setProjectName = (name) => (projectName = name);

  // Not currently using this functionality
  const toggleProjectActive = () => (projectIsActive = !projectIsActive);

  const getProjectDetails = () => {
    return {
      projectName,
      projectId,
      projectIsActive, // Not currently using this
      tasksObjectsArray,
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
    setTasks,
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
      //console.log("storage available");
      return true;
    } else {      
      //console.log("no storage");
      return false;
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
  const setTaskId = (id) => (task.id = id);

  const getTaskOwner = () => task.owner;

  const editTask = ({ title, description, dueDate, priority, notes }) => {
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (priority !== undefined) task.priority = priority;
    if (notes !== undefined) task.notes = notes;
  };

  const toggleCompleted = () => (task.completed = !task.completed);
  const setCompleted = (isCompleted) => (task.completed = isCompleted);

  return {
    getTask,
    getTaskId,
    editTask,
    setTaskOwner,
    getTaskOwner,
    toggleCompleted,
    setCompleted,
    setTaskId,
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

  const mainContentPlaceholder = `
  <div id="main-content" class="main-content">
    <h2>To Do</h2>
    <p>Select a Project to get started!</p>
  </div>`;
  mainContentDiv.innerHTML = mainContentPlaceholder;

  // Local Storage
  const storage = (0,_Storage__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const updateLocalStorage = () => {
    const projectDetails = storedProjects.getProjects().map((project) => {
      return project.getProjectDetails();
    });
    storage.setObject("storedProjects", projectDetails);
  };

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
      updateTaskView(owningProject);
      updateLocalStorage();
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
    updateLocalStorage();
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
        updateLocalStorage();
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
    newHeaderInput.id = "project-name-input";
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
      if (response) {
        handleDeleteProject(project);
        updateLocalStorage;
      }
    });
    newHeaderDiv.appendChild(headerDeleteProjectBtn);

    headerDiv.parentNode.replaceChild(newHeaderDiv, headerDiv);
    newHeaderInput.focus();
  };

  const handleUpdateProject = (project, editProjectInput) => {
    project.setProjectName(editProjectInput);
    updateProjectView();
    updateTaskView(project);
    updateLocalStorage();
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
    updateLocalStorage();
  };

  // check a project for empty tasks and delete empty tasks
  const checkForAndDeleteEmptyTasks = (project, isNewTask = false) => {
    const projectDetails = project.getProjectDetails().tasksDetailsArray;
    projectDetails.forEach((task) => {
      if (task.title.trim() == "" && task.description.trim() == "") {
        if (!isNewTask) {
          handleDeleteTask(task);
          updateLocalStorage();
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
    updateLocalStorage();
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
      updateLocalStorage();
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

// localStorage
const storage = (0,_Storage__WEBPACK_IMPORTED_MODULE_5__["default"])();
const isStorageAvailable = storage.testStorage();
const Projects = storage.getObject("storedProjects");
if (isStorageAvailable == true && Projects) {
  Projects.forEach((element) => {
    const newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_2__["default"])(element.projectName, element.projectId, true);
    newProject.setTasks(element.tasksDetailsArray);
    projectList.addProject(newProject);
  });
} else {
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
}

const view = (0,_View__WEBPACK_IMPORTED_MODULE_4__["default"])();
view.storeInitialProjects(projectList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLFNBQVMsVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLEtBQUssV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLG1E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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBLDZCQUE2QixZQUFZLElBQUksaUJBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQy9kcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0s7QUFDTTtBQUNRO0FBQ2Q7QUFDTTs7QUFFaEMsaUJBQWlCLGlEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0JBQWtCLGlEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0JBQWdCLGlEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0JBQW9CLHdEQUFXOztBQUUvQjtBQUNBLGdCQUFnQixvREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBTztBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRix5QkFBeUIsb0RBQU87QUFDaEMscUJBQXFCLG9EQUFPOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxpREFBSTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbmltZyxcbnBpY3R1cmUsXG52aWRlbyxcbmNhbnZhcyxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuI3Jvb3QsXG4jX19uZXh0IHtcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIG1heC13aWR0aDogOTB2dztcbiAgbWluLWhlaWdodDogMjFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZDhkOGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgLyogbWF4LXdpZHRoOiAyMHJlbTsgKi9cbiAgYmFja2dyb3VuZDogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHJnYmEoMjM2LCAyMzYsIDIzNiwgMSkgMTUlLFxuICAgIHJnYmEoMTMxLCAxMzEsIDEzMSwgMC40MDY2MDAxNDAwNTYwMjI0KSAxMDAlXG4gICk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDEzcHggMHB4IDBweCAxM3B4OyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNpZGViYXIgYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtaW4td2lkdGg6IDE1dnc7XG4gIG1heC13aWR0aDogMjB2dzsgKi9cbiAgLyogd2lkdGg6IDIwdnc7ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDhweDtcbn1cblxuI3Rhc2stbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuI3Rhc2stbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5kZWxldGUtdGFzay1idG4sIC5kZWxldGUtcHJvamVjdC1idG4ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZmxleC1iYXNpczogNzBweDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciBzZWxlY3QsXG5pbnB1dCB7XG4gIGZsZXg6IGF1dG87XG59XG5cbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXAtYnRuLFxuLmNvbXAtYnRuLWdyZXllZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmNvbXAtYnRuLWdyZXllZCB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xufVxuXG4uY29tcC1idG4tZ3JleWVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmNvbXAtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2FjZTRhZTtcbn1cblxuLmNvbXAtYnRuOmhvdmVyIC5idXR0b24tdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY29tcGxldGVkIHtcbiAgY29sb3I6IGRhcmtncmF5O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnByb2plY3QtbmFtZS1pbnB1dCB7XG4gIHdpZHRoOiAyMHZ3O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9qZWN0LXRpdGxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGl0bGUtaGVhZGVyIGgzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2plY3QtdGl0bGUtaGVhZGVyIGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5wcm9qZWN0LXRpdGxlLWhlYWRlciBidXR0b24ge1xuICBmbGV4OiBpbml0aWFsO1xufVxuXG4uYWN0aXZlLXByb2plY3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI25ldy10YXNrLWJ1dHRvbi1saSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5zaWRlYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLnByb2plY3QtdGl0bGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIHBhZGRpbmc6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnByb2plY3QtdGl0bGUtaGVhZGVyID4gKiB7XG4gICAgZmxleDogMS41O1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMXJlbTtcbiAgfVxuICAucHJvamVjdC10aXRsZS1oZWFkZXIgYnV0dG9uIHtcbiAgICBmbGV4OiAwLjU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxcmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gIH1cblxuICAucHJvamVjdC10aXRsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiA1N3Z3O1xuICAgIHBhZGRpbmc6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5wcm9qZWN0LXRpdGxlLWhlYWRlciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDY1dnc7XG4gIH1cbiAgLnNpZGViYXIge1xuICAgIG1pbi13aWR0aDogMTVyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xuICB9XG5cbiAgLnNpZGViYXIgYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDEwdnc7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCOzs7O0dBSUM7RUFDRCwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYO29CQUNrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDViw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBtYXgtd2lkdGg6IDkwdnc7XFxuICBtaW4taGVpZ2h0OiAyMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZDhkOGQ7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgLyogbWF4LXdpZHRoOiAyMHJlbTsgKi9cXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2JhKDIzNiwgMjM2LCAyMzYsIDEpIDE1JSxcXG4gICAgcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjQwNjYwMDE0MDA1NjAyMjQpIDEwMCVcXG4gICk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgLyogYm9yZGVyLXJhZGl1czogMTNweCAwcHggMHB4IDEzcHg7ICovXFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogbWluLXdpZHRoOiAxNXZ3O1xcbiAgbWF4LXdpZHRoOiAyMHZ3OyAqL1xcbiAgLyogd2lkdGg6IDIwdnc7ICovXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDhweDtcXG59XFxuXFxuI3Rhc2stbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4jdGFzay1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnRuLCAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgbGFiZWwge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGZsZXgtYmFzaXM6IDcwcHg7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgc2VsZWN0LFxcbmlucHV0IHtcXG4gIGZsZXg6IGF1dG87XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21wLWJ0bixcXG4uY29tcC1idG4tZ3JleWVkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyM3B4O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmNvbXAtYnRuLWdyZXllZCB7XFxuICBjb2xvcjogZGFya2dyYXk7XFxuICBib3JkZXItd2lkdGg6IHRoaW47XFxufVxcblxcbi5jb21wLWJ0bi1ncmV5ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG59XFxuXFxuLmNvbXAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNhY2U0YWU7XFxufVxcblxcbi5jb21wLWJ0bjpob3ZlciAuYnV0dG9uLXRleHQge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmJ1dHRvbi10ZXh0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgY29sb3I6IGRhcmtncmF5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgd2lkdGg6IDIwdnc7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtaGVhZGVyIGgzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWhlYWRlciBsYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtaGVhZGVyIGJ1dHRvbiB7XFxuICBmbGV4OiBpbml0aWFsO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNuZXctdGFzay1idXR0b24tbGkgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGl0bGUtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRpdGxlLWhlYWRlciA+ICoge1xcbiAgICBmbGV4OiAxLjU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDFyZW07XFxuICB9XFxuICAucHJvamVjdC10aXRsZS1oZWFkZXIgYnV0dG9uIHtcXG4gICAgZmxleDogMC41O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBtaW4td2lkdGg6IDNyZW07XFxuICB9XFxuXFxuICAucHJvamVjdC10aXRsZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDU3dnc7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5wcm9qZWN0LXRpdGxlLWhlYWRlciBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogMjV2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA2NXZ3O1xcbiAgfVxcbiAgLnNpZGViYXIge1xcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgbWluLXdpZHRoOiAzMHJlbTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogMTB2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSwgaWQgPSB1bmRlZmluZWQsIGZyb21TdG9yYWdlID0gZmFsc2UpIHtcbiAgbGV0IHByb2plY3RJZDtcblxuICBpZiAoZnJvbVN0b3JhZ2UgPT0gZmFsc2UpIHtcbiAgICBwcm9qZWN0SWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOSk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdElkID0gaWQ7XG4gIH1cblxuICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICBsZXQgcHJvamVjdElzQWN0aXZlID0gZmFsc2U7XG5cbiAgLy8gb25lIGFycmF5IHN0b3JlcyB0YXNrIGRldGFpbHMsIG9uZSBzdG9yZXMgdGhlIGFjdHVhbCB0YXNrIG9iamVjdHMgdGhlbXNlbHZlc1xuICBjb25zdCB0YXNrc0RldGFpbHNBcnJheSA9IFtdO1xuICBjb25zdCB0YXNrc09iamVjdHNBcnJheSA9IFtdO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgIHRhc2tzRGV0YWlsc0FycmF5LnB1c2gobmV3VGFzay5nZXRUYXNrKCkpO1xuICAgIHRhc2tzT2JqZWN0c0FycmF5LnB1c2gobmV3VGFzayk7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRhc2tzRGV0YWlsc0FycmF5LmZpbmRJbmRleCgob2JqKSA9PiBvYmpbXCJpZFwiXSA9PT0gdGFza0lkKTtcbiAgICB0YXNrc0RldGFpbHNBcnJheS5zcGxpY2UocmVzdWx0LCAxKTtcbiAgICB0YXNrc09iamVjdHNBcnJheS5zcGxpY2UocmVzdWx0LCAxKTtcbiAgfTtcblxuICAvLyBVc2VkIGZvciBwdWxsaW5nIGluIHRhc2tzIGZyb20gbG9jYWxzdG9yYWdlXG4gIGNvbnN0IHNldFRhc2tzID0gKHRhc2tzQXJyYXkpID0+IHtcbiAgICB0YXNrc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh7XG4gICAgICAgIHRpdGxlOiBlbGVtZW50LnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZWxlbWVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZWxlbWVudC5kdWVEYXRlIHx8IG5ldyBEYXRlKCksXG4gICAgICAgIHByaW9yaXR5OiBlbGVtZW50LnByaW9yaXR5LFxuICAgICAgICBub3RlczogZWxlbWVudC5ub3RlcyxcbiAgICAgIH0pO1xuICAgICAgbmV3VGFzay5zZXRUYXNrT3duZXIoZWxlbWVudC5vd25lcik7XG4gICAgICBuZXdUYXNrLnNldENvbXBsZXRlZChlbGVtZW50LmNvbXBsZXRlZCk7XG4gICAgICBuZXdUYXNrLnNldFRhc2tJZChlbGVtZW50LmlkKTtcblxuICAgICAgdGFza3NPYmplY3RzQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICAgIHRhc2tzRGV0YWlsc0FycmF5LnB1c2gobmV3VGFzay5nZXRUYXNrKCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzRGV0YWlscyA9ICgpID0+IHRhc2tzRGV0YWlsc0FycmF5O1xuICBjb25zdCBnZXRUYXNrc09iamVjdHMgPSAoKSA9PiB0YXNrc09iamVjdHNBcnJheTtcblxuICBjb25zdCBnZXRUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kVGFzayA9IHRhc2tzRGV0YWlsc0FycmF5LmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICByZXR1cm4gdGFza3NPYmplY3RzQXJyYXlbZm91bmRUYXNrXTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0TmFtZSA9IChuYW1lKSA9PiAocHJvamVjdE5hbWUgPSBuYW1lKTtcblxuICAvLyBOb3QgY3VycmVudGx5IHVzaW5nIHRoaXMgZnVuY3Rpb25hbGl0eVxuICBjb25zdCB0b2dnbGVQcm9qZWN0QWN0aXZlID0gKCkgPT4gKHByb2plY3RJc0FjdGl2ZSA9ICFwcm9qZWN0SXNBY3RpdmUpO1xuXG4gIGNvbnN0IGdldFByb2plY3REZXRhaWxzID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0TmFtZSxcbiAgICAgIHByb2plY3RJZCxcbiAgICAgIHByb2plY3RJc0FjdGl2ZSwgLy8gTm90IGN1cnJlbnRseSB1c2luZyB0aGlzXG4gICAgICB0YXNrc09iamVjdHNBcnJheSxcbiAgICAgIHRhc2tzRGV0YWlsc0FycmF5LFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgZ2V0VGFza3NEZXRhaWxzLFxuICAgIGdldFRhc2tzT2JqZWN0cyxcbiAgICBnZXRUYXNrLFxuICAgIHNldFByb2plY3ROYW1lLFxuICAgIHRvZ2dsZVByb2plY3RBY3RpdmUsXG4gICAgZ2V0UHJvamVjdERldGFpbHMsXG4gICAgc2V0VGFza3MsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJmdW5jdGlvbiBQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAob2JqKSA9PiBvYmouZ2V0UHJvamVjdERldGFpbHMoKS5wcm9qZWN0SWQgPT09IHByb2plY3RJZFxuICAgICk7XG4gICAgcHJvamVjdHMuc3BsaWNlKHJlc3VsdCwgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIHJldHVybiB7IGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGdldFByb2plY3RzIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0O1xuIiwiLy8gSGFuZGxlIGxvY2FsU3RvcmFnZVxuXG5mdW5jdGlvbiBTdG9yYWdlKCkge1xuICBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRlc3RTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwic3RvcmFnZSBhdmFpbGFibGVcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgeyAgICAgIFxuICAgICAgLy9jb25zb2xlLmxvZyhcIm5vIHN0b3JhZ2VcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNldCBhbiBpdGVtIGluIGxvY2FsU3RvcmFnZVxuICBmdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IGFuIGl0ZW0gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgYW4gb2JqZWN0IGluIGxvY2FsU3RvcmFnZVxuICBmdW5jdGlvbiBzZXRPYmplY3Qoa2V5LCBvYmopIHtcbiAgICBzZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH1cblxuICAvLyBHZXQgYW4gb2JqZWN0IGZyb20gbG9jYWxTdG9yYWdlXG4gIGZ1bmN0aW9uIGdldE9iamVjdChrZXkpIHtcbiAgICBjb25zdCBpdGVtID0gZ2V0SXRlbShrZXkpO1xuICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IG51bGw7XG4gIH1cblxuICByZXR1cm4geyB0ZXN0U3RvcmFnZSwgc2V0SXRlbSwgZ2V0SXRlbSwgc2V0T2JqZWN0LCBnZXRPYmplY3QgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiIsImZ1bmN0aW9uIFRhc2soeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCBwcmlvcml0eSwgbm90ZXMgfSkge1xuICBjb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDkpO1xuXG4gIGNvbnN0IHNldFRhc2tPd25lciA9IChwcm9qZWN0SWQpID0+IHtcbiAgICB0YXNrLm93bmVyID0gcHJvamVjdElkO1xuICB9O1xuXG4gIGxldCB0YXNrID0ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgaWQ6IGdlbmVyYXRlSWQoKSxcbiAgICBvd25lcjogbnVsbCxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IGdldFRhc2sgPSAoKSA9PiB0YXNrO1xuICBjb25zdCBnZXRUYXNrSWQgPSAoKSA9PiB0YXNrLmlkO1xuICBjb25zdCBzZXRUYXNrSWQgPSAoaWQpID0+ICh0YXNrLmlkID0gaWQpO1xuXG4gIGNvbnN0IGdldFRhc2tPd25lciA9ICgpID0+IHRhc2sub3duZXI7XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9KSA9PiB7XG4gICAgaWYgKHRpdGxlICE9PSB1bmRlZmluZWQpIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICBpZiAoZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGlmIChkdWVEYXRlICE9PSB1bmRlZmluZWQpIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgaWYgKHByaW9yaXR5ICE9PSB1bmRlZmluZWQpIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpZiAobm90ZXMgIT09IHVuZGVmaW5lZCkgdGFzay5ub3RlcyA9IG5vdGVzO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9ICgpID0+ICh0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZCk7XG4gIGNvbnN0IHNldENvbXBsZXRlZCA9IChpc0NvbXBsZXRlZCkgPT4gKHRhc2suY29tcGxldGVkID0gaXNDb21wbGV0ZWQpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFzayxcbiAgICBnZXRUYXNrSWQsXG4gICAgZWRpdFRhc2ssXG4gICAgc2V0VGFza093bmVyLFxuICAgIGdldFRhc2tPd25lcixcbiAgICB0b2dnbGVDb21wbGV0ZWQsXG4gICAgc2V0Q29tcGxldGVkLFxuICAgIHNldFRhc2tJZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcblxuZnVuY3Rpb24gVmlldygpIHtcbiAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKTtcblxuICBjb25zdCBtYWluQ29udGVudFBsYWNlaG9sZGVyID0gYFxuICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCIgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cbiAgICA8aDI+VG8gRG88L2gyPlxuICAgIDxwPlNlbGVjdCBhIFByb2plY3QgdG8gZ2V0IHN0YXJ0ZWQhPC9wPlxuICA8L2Rpdj5gO1xuICBtYWluQ29udGVudERpdi5pbm5lckhUTUwgPSBtYWluQ29udGVudFBsYWNlaG9sZGVyO1xuXG4gIC8vIExvY2FsIFN0b3JhZ2VcbiAgY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2UoKTtcbiAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gc3RvcmVkUHJvamVjdHMuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0LmdldFByb2plY3REZXRhaWxzKCk7XG4gICAgfSk7XG4gICAgc3RvcmFnZS5zZXRPYmplY3QoXCJzdG9yZWRQcm9qZWN0c1wiLCBwcm9qZWN0RGV0YWlscyk7XG4gIH07XG5cbiAgLy8gU3RvcmUgcHJvamVjdCBzdGF0ZSBpbmZvcm1hdGlvbiBmb3IgYWNjZXNzIGluc2lkZSBvZiBWaWV3XG4gIGxldCBzdG9yZWRQcm9qZWN0cztcbiAgbGV0IGFjdGl2ZVByb2plY3Q7XG5cbiAgY29uc3Qgc3RvcmVJbml0aWFsUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICBzdG9yZWRQcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIHVwZGF0ZVByb2plY3RWaWV3KCk7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZpbmQgdGhlIFByb2plY3QgdGhhdCBhIFRhc2sgYmVsb25ncyB0b1xuICBjb25zdCBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBvd25pbmdQcm9qZWN0ID0gc3RvcmVkUHJvamVjdHNcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0RGV0YWlscygpLnByb2plY3RJZCA9PT0gdGFzay5vd25lcik7XG4gICAgcmV0dXJuIG93bmluZ1Byb2plY3Q7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBIVE1MIGRhdGVcbiAgY29uc3QgSFRNTGRhdGUgPSAoZGF0ZUlucHV0KSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbnB1dCk7XG4gICAgY29uc3QgbW9udGggPSAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBkYXkgPSAoXCIwXCIgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaHRtbERhdGUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuXG4gICAgcmV0dXJuIGh0bWxEYXRlO1xuICB9O1xuXG4gIC8vIEFub3RoZXIgZGF0ZSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVhbCB3aXRoIFVUQyBkYXRlc1xuICBmdW5jdGlvbiBwYXJzZURhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICAgIGNvbnN0IGRhdGVPbmx5UmVnZXggPVxuICAgICAgL14oWzAtOV0oWzAtOV0oWzAtOV1bMS05XXxbMS05XTApfFsxLTldMDApfFsxLTldMDAwKSgtKDBbMS05XXwxWzAtMl0pKC0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKSkpJC87XG4gICAgaWYgKGRhdGVPbmx5UmVnZXgudGVzdChkYXRlU3RyaW5nKSkge1xuICAgICAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUoXG4gICAgICAgIHV0Y0RhdGUuZ2V0VGltZSgpICsgdXRjRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDBcbiAgICAgICk7XG4gICAgICByZXR1cm4gbG9jYWxEYXRlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVQcm9qZWN0QnRuID0gKHByb2plY3QpID0+IHtcbiAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB1cGRhdGVQcm9qZWN0VmlldygpO1xuICAgIHVwZGF0ZVRhc2tWaWV3KHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5ld1Rhc2tCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2soe1xuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGR1ZURhdGU6IHVuZGVmaW5lZCxcbiAgICAgIHByaW9yaXR5OiBcIlwiLFxuICAgICAgbm90ZXM6IFwiXCIsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IG5ld1Rhc2tQcm9qZWN0SWQgPSBhY3RpdmVQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgbmV3VGFzay5zZXRUYXNrT3duZXIobmV3VGFza1Byb2plY3RJZCk7XG4gICAgZWRpdFRhc2sobmV3VGFzay5nZXRUYXNrKCksIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IG93bmluZ1Byb2plY3QgPSBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzKHRhc2spO1xuXG4gICAgaWYgKG93bmluZ1Byb2plY3QpIHtcbiAgICAgIG93bmluZ1Byb2plY3QuZGVsZXRlVGFzayh0YXNrLmlkKTtcbiAgICAgIHVwZGF0ZVRhc2tWaWV3KG93bmluZ1Byb2plY3QpO1xuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJPd25pbmcgcHJvamVjdCBub3QgZm91bmQgZm9yIHRhc2tcIiwgdGFzayk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICh0YXNrLCBpc05ld1Rhc2sgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tPd25lciA9IGdldE93bmluZ1Byb2plY3RGcm9tVGFza0RldGFpbHModGFzayk7XG4gICAgaWYgKGlzTmV3VGFzaykgaGFuZGxlRGVsZXRlVGFzayh0YXNrKTtcbiAgICB1cGRhdGVUYXNrVmlldyh0YXNrT3duZXIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVUYXNrID0gKHtcbiAgICB0YXNrLFxuICAgIHRpdGxlSW5wdXQ6IHsgdmFsdWU6IHRpdGxlIH0sXG4gICAgZGVzY3JpcHRpb25JbnB1dDogeyB2YWx1ZTogZGVzY3JpcHRpb24gfSxcbiAgICBkdWVEYXRlSW5wdXQ6IHsgdmFsdWU6IGR1ZURhdGUgfSxcbiAgICBwcmlvcml0eUlucHV0OiB7IHZhbHVlOiBwcmlvcml0eSB9LFxuICB9KSA9PiB7XG4gICAgY29uc3QgdGFza0lucHV0cyA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xuICAgIHRhc2tJbnB1dHMuZHVlRGF0ZSA9IHBhcnNlRGF0ZVN0cmluZyh0YXNrSW5wdXRzLmR1ZURhdGUpO1xuICAgIGNvbnN0IG93bmluZ1Byb2plY3QgPSBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzKHRhc2spO1xuICAgIGNvbnN0IGFjdHVhbFRhc2tPYmplY3QgPSBvd25pbmdQcm9qZWN0LmdldFRhc2sodGFzay5pZCk7XG4gICAgYWN0dWFsVGFza09iamVjdC5lZGl0VGFzayh7XG4gICAgICB0aXRsZTogdGFza0lucHV0cy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXNrSW5wdXRzLmRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogdGFza0lucHV0cy5kdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IHRhc2tJbnB1dHMucHJpb3JpdHksXG4gICAgfSk7XG4gICAgdXBkYXRlVGFza1ZpZXcob3duaW5nUHJvamVjdCk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdFZpZXcgPSAoKSA9PiB7XG4gICAgc2lkZWJhckRpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy8gQ3JlYXRlIHByb2plY3QgYnV0dG9ucyBpbiBzaWRlYmFyXG4gICAgc3RvcmVkUHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkZXRhaWxzID0gZWxlbWVudC5nZXRQcm9qZWN0RGV0YWlscygpO1xuICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGlmIChlbGVtZW50ID09IGFjdGl2ZVByb2plY3QpIHtcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICAgIH1cbiAgICAgIGV4aXN0aW5nUHJvamVjdEJ0bi5pbm5lclRleHQgPSBkZXRhaWxzLnByb2plY3ROYW1lO1xuICAgICAgZXhpc3RpbmdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGhhbmRsZVByb2plY3RCdG4oZWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChleGlzdGluZ1Byb2plY3RCdG4pO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgYnV0dG9uIGluIHNpZGViYXJcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiK1wiO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGhhbmRsZU5ld1Byb2plY3RCdG4oKTtcbiAgICB9KTtcblxuICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV3UHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0hlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1oZWFkZXJcIik7XG5cbiAgICBjb25zdCBuZXdIZWFkZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuZXdIZWFkZXJMYWJlbC5pbm5lckhUTUwgPSBcIk5hbWU6IFwiO1xuICAgIG5ld0hlYWRlckxhYmVsLmh0bWxGb3IgPSBcIm5ldy1oZWFkZXItaW5wdXRcIjtcblxuICAgIGNvbnN0IG5ld0hlYWRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0hlYWRlcklucHV0LmlkID0gXCJuZXctaGVhZGVyLWlucHV0XCI7XG4gICAgbmV3SGVhZGVySW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIE5ldyBQcm9qZWN0IE5hbWVcIjtcbiAgICBuZXdIZWFkZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoZWFkZXJTYXZlQnRuLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV3SGVhZGVyRGl2LmFwcGVuZENoaWxkKG5ld0hlYWRlckxhYmVsKTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQobmV3SGVhZGVySW5wdXQpO1xuXG4gICAgY29uc3QgaGVhZGVyU2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGVyU2F2ZUJ0bi5pbm5lclRleHQgPSBcIlNhdmVcIjtcbiAgICBoZWFkZXJTYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobmV3SGVhZGVySW5wdXQudmFsdWUudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgdmFyIG5ld1Byb2plY3QgPSBQcm9qZWN0KGAke25ld0hlYWRlcklucHV0LnZhbHVlfWApO1xuICAgICAgICBzdG9yZWRQcm9qZWN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgYWN0aXZlUHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdIZWFkZXJJbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdXBkYXRlUHJvamVjdFZpZXcoKTtcbiAgICAgIGlmIChuZXdQcm9qZWN0KSB1cGRhdGVUYXNrVmlldyhuZXdQcm9qZWN0KTtcbiAgICB9KTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyU2F2ZUJ0bik7XG5cbiAgICBjb25zdCBoZWFkZXJDYW5jZWxDcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBoZWFkZXJDYW5jZWxDcmVhdGVQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gICAgaGVhZGVyQ2FuY2VsQ3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGFjdGl2ZVByb2plY3QpIHtcbiAgICAgICAgdXBkYXRlVGFza1ZpZXcoYWN0aXZlUHJvamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWluQ29udGVudERpdi5pbm5lckhUTUwgPSBtYWluQ29udGVudFBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG5ld0hlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJDYW5jZWxDcmVhdGVQcm9qZWN0QnRuKTtcblxuICAgIG1haW5Db250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3SGVhZGVyRGl2KTtcbiAgICBuZXdIZWFkZXJJbnB1dC5mb2N1cygpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0SGVhZGVyID0gKHByb2plY3QsIGhlYWRlckRpdikgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXRQcm9qZWN0RGV0YWlscygpLnByb2plY3ROYW1lO1xuICAgIGNvbnN0IG5ld0hlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3SGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlLWhlYWRlclwiKTtcbiAgICBjb25zdCBuZXdIZWFkZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdIZWFkZXJJbnB1dC52YWx1ZSA9IHByb2plY3ROYW1lO1xuICAgIG5ld0hlYWRlcklucHV0LmlkID0gXCJwcm9qZWN0LW5hbWUtaW5wdXRcIjtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQobmV3SGVhZGVySW5wdXQpO1xuICAgIGNvbnN0IGhlYWRlclVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGVyVXBkYXRlQnRuLmlubmVyVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgaGVhZGVyVXBkYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBoYW5kbGVVcGRhdGVQcm9qZWN0KHByb2plY3QsIG5ld0hlYWRlcklucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyVXBkYXRlQnRuKTtcbiAgICBjb25zdCBoZWFkZXJEZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBoZWFkZXJEZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idG5cIik7XG4gICAgaGVhZGVyRGVsZXRlUHJvamVjdEJ0bi5pbm5lclRleHQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gICAgaGVhZGVyRGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBjb25maXJtKFxuICAgICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3Byb2plY3ROYW1lfT9gXG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGhhbmRsZURlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXdIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGVsZXRlUHJvamVjdEJ0bik7XG5cbiAgICBoZWFkZXJEaXYucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3SGVhZGVyRGl2LCBoZWFkZXJEaXYpO1xuICAgIG5ld0hlYWRlcklucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlUHJvamVjdCA9IChwcm9qZWN0LCBlZGl0UHJvamVjdElucHV0KSA9PiB7XG4gICAgcHJvamVjdC5zZXRQcm9qZWN0TmFtZShlZGl0UHJvamVjdElucHV0KTtcbiAgICB1cGRhdGVQcm9qZWN0VmlldygpO1xuICAgIHVwZGF0ZVRhc2tWaWV3KHByb2plY3QpO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3QuZ2V0UHJvamVjdERldGFpbHMoKS5wcm9qZWN0SWQ7XG4gICAgY29uc3QgZGVsZXRlZEluZGV4ID0gc3RvcmVkUHJvamVjdHMuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IHN0b3JlZFByb2plY3RzLmdldFByb2plY3RzKCk7XG5cbiAgICBpZiAocHJvamVjdHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5leHRBY3RpdmVJbmRleCA9IE1hdGgubWF4KDAsIGRlbGV0ZWRJbmRleCAtIDEpO1xuICAgICAgY29uc3QgbmV4dEFjdGl2ZVByb2plY3QgPSBwcm9qZWN0c0xpc3RbbmV4dEFjdGl2ZUluZGV4XTtcbiAgICAgIHVwZGF0ZVRhc2tWaWV3KG5leHRBY3RpdmVQcm9qZWN0KTtcbiAgICAgIGFjdGl2ZVByb2plY3QgPSBuZXh0QWN0aXZlUHJvamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbkNvbnRlbnREaXYuaW5uZXJIVE1MID0gYDxkaXY+PHA+QWRkIGEgcHJvamVjdCB0byBnZXQgc3RhcnRlZDwvcD48L2Rpdj5gO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RWaWV3KCk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgLy8gY2hlY2sgYSBwcm9qZWN0IGZvciBlbXB0eSB0YXNrcyBhbmQgZGVsZXRlIGVtcHR5IHRhc2tzXG4gIGNvbnN0IGNoZWNrRm9yQW5kRGVsZXRlRW1wdHlUYXNrcyA9IChwcm9qZWN0LCBpc05ld1Rhc2sgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gcHJvamVjdC5nZXRQcm9qZWN0RGV0YWlscygpLnRhc2tzRGV0YWlsc0FycmF5O1xuICAgIHByb2plY3REZXRhaWxzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnRpdGxlLnRyaW0oKSA9PSBcIlwiICYmIHRhc2suZGVzY3JpcHRpb24udHJpbSgpID09IFwiXCIpIHtcbiAgICAgICAgaWYgKCFpc05ld1Rhc2spIHtcbiAgICAgICAgICBoYW5kbGVEZWxldGVUYXNrKHRhc2spO1xuICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFza1ZpZXcgPSAocHJvamVjdCwgaXNOZXdUYXNrID0gZmFsc2UpID0+IHtcbiAgICBjaGVja0ZvckFuZERlbGV0ZUVtcHR5VGFza3MocHJvamVjdCwgaXNOZXdUYXNrKTtcblxuICAgIG1haW5Db250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBwcm9qZWN0LmdldFByb2plY3REZXRhaWxzKCk7XG5cbiAgICAvLyBDcmVhdGUgYSBwcm9qZWN0IGhlYWRlclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRpdGxlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlLWhlYWRlclwiKTtcbiAgICBwcm9qZWN0VGl0bGVIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0SGVhZGVyKHByb2plY3QsIHByb2plY3RUaXRsZUhlYWRlcik7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0RGV0YWlscy5wcm9qZWN0TmFtZX1gO1xuICAgIHByb2plY3RUaXRsZUhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUhlYWRlcik7XG5cbiAgICAvLyBMaXN0IHRoZSBwcm9qZWN0IHRhc2tzXG4gICAgY29uc3QgbmV3VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbmV3VWwuaWQgPSBcInRhc2stbGlzdFwiO1xuICAgIHByb2plY3REZXRhaWxzLnRhc2tzRGV0YWlsc0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29uc3QgbmV3Q29tcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCBuZXdCdG5Ib3ZlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q29tcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcC1idG5cIik7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgICAgbmV3TGkuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgbmV3Q29tcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXAtYnRuLWdyZXllZFwiKTtcbiAgICAgICAgbmV3QnRuSG92ZXJUZXh0LmlubmVySFRNTCA9IFwi4o6MXCI7IC8vIG5vdCBjdXJyZW50bHkgdXNlZC5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xpLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIG5ld0J0bkhvdmVyVGV4dC5pbm5lckhUTUwgPSBcIuKck1wiO1xuICAgICAgfVxuICAgICAgbmV3QnRuSG92ZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdGV4dFwiKTtcbiAgICAgIG5ld0NvbXBCdXR0b24uYXBwZW5kQ2hpbGQobmV3QnRuSG92ZXJUZXh0KTtcbiAgICAgIG5ld0xpLmlkID0gdGFzay5pZDtcblxuICAgICAgbmV3TGkuaW5uZXJUZXh0ID0gYCR7dGFzay50aXRsZX1gO1xuICAgICAgaWYgKHRhc2suZGVzY3JpcHRpb24udHJpbSgpICE9PSBcIlwiKVxuICAgICAgICBuZXdMaS5pbm5lclRleHQgPSBgJHt0YXNrLnRpdGxlfSAtICR7dGFzay5kZXNjcmlwdGlvbn1gO1xuICAgICAgbmV3TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbmV3Q29tcEJ1dHRvbiB8fCBlLnRhcmdldCA9PT0gbmV3QnRuSG92ZXJUZXh0KSB7XG4gICAgICAgICAgY29tcGxldGVUYXNrKHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVkaXRUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmV3TGkuaW5zZXJ0QmVmb3JlKG5ld0NvbXBCdXR0b24sIG5ld0xpLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgbmV3VWwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgIH0pO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG5ld1VsKTtcblxuICAgIC8vIEFkZCBuZXcgdGFzayBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgdGFzayBsaXN0XG4gICAgaWYgKCFpc05ld1Rhc2spIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5ld1Rhc2tMaS5pZCA9IFwibmV3LXRhc2stYnV0dG9uLWxpXCI7XG4gICAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5ld1Rhc2tCdG4uaW5uZXJUZXh0ID0gXCJBZGQgTmV3IFRhc2tcIjtcbiAgICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU5ld1Rhc2tCdG4pO1xuICAgICAgbmV3VGFza0xpLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgICAgbmV3VWwuYXBwZW5kQ2hpbGQobmV3VGFza0xpKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVG9nZ2xlIGEgdGFzayBhcyBjb21wbGV0ZWQgb3Igbm90IGNvbXBsZXRlZFxuICBjb25zdCBjb21wbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IG93bmluZ1Byb2plY3QgPSBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzKHRhc2spO1xuICAgIGNvbnN0IGFjdHVhbFRhc2tPYmplY3QgPSBvd25pbmdQcm9qZWN0LmdldFRhc2sodGFzay5pZCk7XG4gICAgYWN0dWFsVGFza09iamVjdC50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICB1cGRhdGVUYXNrVmlldyhvd25pbmdQcm9qZWN0KTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICAvLyBSZXBsYWNlIGV4aXN0aW5nIGxpIERPTSBlbGVtZW50IHdpdGggZnVsbCB0YXNrIGRldGFpbHMgZm9yIGVkaXRpbmdcbiAgY29uc3QgZWRpdFRhc2sgPSAodGFzaywgaXNOZXdUYXNrID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB0YXNrT3duZXIgPSBnZXRPd25pbmdQcm9qZWN0RnJvbVRhc2tEZXRhaWxzKHRhc2spO1xuXG4gICAgLy8gRm9sZHMgdXAgdGhlIHRhc2sgZGV0YWlscyAoYWNjb3JkaW9uKSBzbyBtdWx0aXBsZSB0YXNrcyBhcmVuJ3Qgb3BlbiBhdCBvbmNlIGZvciBlZGl0aW5nXG4gICAgdXBkYXRlVGFza1ZpZXcodGFza093bmVyLCBpc05ld1Rhc2spO1xuXG4gICAgbGV0IGF0dGFjaG1lbnRQb2ludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpO1xuXG4gICAgLy8gQ29udGFpbmVyIGRpdlxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGV0YWlsc1wiKTtcblxuICAgIC8vIFRpdGxlIGlucHV0IGZpZWxkXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLmlubmVySFRNTCA9IFwiVGl0bGU6XCI7XG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gXCJ0aXRsZS1pbnB1dFwiO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGUtaW5wdXRcIjtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gICAgLy8gRGVzY3JpcHRpb24gaW5wdXQgZmllbGRcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcImRlc2NyaXB0aW9uLWlucHV0XCI7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvbi1pbnB1dFwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uIHx8IFwiXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcblxuICAgIC8vIER1ZSBkYXRlIGlucHV0IGZpZWxkXG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9IFwiZHVlLWRhdGUtaW5wdXRcIjtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gXCJkdWUtZGF0ZS1pbnB1dFwiO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgY29uc3QgY29udmVydGVkRGF0ZSA9IEhUTUxkYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gY29udmVydGVkRGF0ZTtcblxuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcblxuICAgIC8vIFByaW9yaXR5IGlucHV0IGZpZWxkXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5LWlucHV0XCI7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5OlwiO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuaWQgPSBcInByaW9yaXR5LWlucHV0XCI7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcblxuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnRleHQgPSBvcHRpb247XG4gICAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IG9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG4gICAgfSk7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcblxuICAgIC8vIEJ1dHRvbiBjb250YWluZXJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ1dHRvbi1jb250YWluZXJcIjtcblxuICAgIC8vIERlbGV0ZSB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2tCdG4uaW5uZXJUZXh0ID0gXCJEZWxldGUgVGFza1wiO1xuICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtdGFzay1idG5cIjtcbiAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVEZWxldGVUYXNrKHRhc2spKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG5cbiAgICAvLyBTYXZlIHRhc2sgYnV0dG9uXG4gICAgY29uc3Qgc2F2ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhdmVUYXNrQnRuLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuICAgIHNhdmVUYXNrQnRuLmNsYXNzTmFtZSA9IFwic2F2ZS10YXNrLWJ0blwiO1xuICAgIHNhdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBtYWtlIHN1cmUgdGhlIHRhc2sgYXQgbGVhc3QgaGFzIGEgbmFtZVxuICAgICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgIT0gXCJcIiB8fCAhaXNOZXdUYXNrKSB7XG4gICAgICAgIGhhbmRsZVNhdmVUYXNrKHtcbiAgICAgICAgICB0YXNrLFxuICAgICAgICAgIHRpdGxlSW5wdXQsXG4gICAgICAgICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICAgICAgICBkdWVEYXRlSW5wdXQsXG4gICAgICAgICAgcHJpb3JpdHlJbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTmV3VGFzaykge1xuICAgICAgICBoYW5kbGVEZWxldGVUYXNrKHRhc2spO1xuICAgICAgfVxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZVRhc2tCdG4pO1xuXG4gICAgLy8gQ2FuY2VsIHRhc2sgZWRpdGluZyBidXR0b25cbiAgICBjb25zdCBjYW5jZWxUYXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsVGFza0VkaXRCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxUYXNrRWRpdEJ0bi5jbGFzc05hbWUgPSBcImNhbmNlbC10YXNrLWJ0blwiO1xuICAgIGNhbmNlbFRhc2tFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgaGFuZGxlQ2FuY2VsKHRhc2ssIGlzTmV3VGFzaylcbiAgICApO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxUYXNrRWRpdEJ0bik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBhdHRhY2htZW50UG9pbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGFza0RpdiwgYXR0YWNobWVudFBvaW50KTtcbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlVGFza1ZpZXcsIGVkaXRUYXNrLCBzdG9yZUluaXRpYWxQcm9qZWN0cyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9Qcm9qZWN0TGlzdFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiO1xuXG5jb25zdCB0ZXN0VGFzayA9IFRhc2soe1xuICB0aXRsZTogXCJUZXN0IFRhc2tcIixcbiAgZGVzY3JpcHRpb246IFwiVGVzdGluZyBNeSBUYXNrIE9iamVjdFwiLFxuICBkdWVEYXRlOiB1bmRlZmluZWQsXG4gIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICBub3RlczogXCJcIixcbiAgY29tcGxldGVkOiBmYWxzZSxcbn0pO1xuXG5jb25zdCB0ZXN0VGFzazIgPSBUYXNrKHtcbiAgdGl0bGU6IFwiVGFzayAyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlN0aWxsIFRlc3RpbmdcIixcbiAgZHVlRGF0ZTogdW5kZWZpbmVkLFxuICBwcmlvcml0eTogXCJsb3dcIixcbiAgbm90ZXM6IFwiXCIsXG4gIGNvbXBsZXRlZDogZmFsc2UsXG59KTtcblxuY29uc3QgZnVuVGFzayA9IFRhc2soe1xuICB0aXRsZTogXCJBIGZ1biBUYXNrXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlBsYXkgZ2FtZXMhXCIsXG4gIGR1ZURhdGU6IHVuZGVmaW5lZCxcbiAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICBub3RlczogXCJcIixcbiAgY29tcGxldGVkOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3RMaXN0KCk7XG5cbi8vIGxvY2FsU3RvcmFnZVxuY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2UoKTtcbmNvbnN0IGlzU3RvcmFnZUF2YWlsYWJsZSA9IHN0b3JhZ2UudGVzdFN0b3JhZ2UoKTtcbmNvbnN0IFByb2plY3RzID0gc3RvcmFnZS5nZXRPYmplY3QoXCJzdG9yZWRQcm9qZWN0c1wiKTtcbmlmIChpc1N0b3JhZ2VBdmFpbGFibGUgPT0gdHJ1ZSAmJiBQcm9qZWN0cykge1xuICBQcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoZWxlbWVudC5wcm9qZWN0TmFtZSwgZWxlbWVudC5wcm9qZWN0SWQsIHRydWUpO1xuICAgIG5ld1Byb2plY3Quc2V0VGFza3MoZWxlbWVudC50YXNrc0RldGFpbHNBcnJheSk7XG4gICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgfSk7XG59IGVsc2Uge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoXCJEZWZhdWx0XCIpO1xuICBjb25zdCBmdW5Qcm9qZWN0ID0gUHJvamVjdChcIkZ1biBQcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGFkZFRlc3RUYXNrID0gKHRhc2ssIHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0YXNrVG9BZGQgPSB0YXNrO1xuICAgIGNvbnN0IHRhc2tPd25lciA9IHByb2plY3QuYWRkVGFzayh0YXNrVG9BZGQpO1xuICAgIHRhc2suc2V0VGFza093bmVyKHRhc2tPd25lcik7XG4gIH07XG5cbiAgYWRkVGVzdFRhc2sodGVzdFRhc2ssIGRlZmF1bHRQcm9qZWN0KTtcbiAgYWRkVGVzdFRhc2sodGVzdFRhc2syLCBkZWZhdWx0UHJvamVjdCk7XG4gIGFkZFRlc3RUYXNrKGZ1blRhc2ssIGZ1blByb2plY3QpO1xuXG4gIHByb2plY3RMaXN0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGZ1blByb2plY3QpO1xufVxuXG5jb25zdCB2aWV3ID0gVmlldygpO1xudmlldy5zdG9yZUluaXRpYWxQcm9qZWN0cyhwcm9qZWN0TGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=