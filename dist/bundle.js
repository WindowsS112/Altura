/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.popup {\r\n    position: fixed;\r\n    top: 10%;\r\n    left: 50%;\r\n    padding: 20px 30px;\r\n    background: linear-gradient(to right bottom, #6384b559, hsla(0, 58%, 49%, 0.5));\r\n    color: #fff;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    z-index: 1000;\r\n    font-family: Arial, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 16px;\r\n    margin-top: -50px;\r\n    margin-left: -100px;\r\n    animation: hithere 1s ease infinite;\r\n}\r\n\r\n@keyframes hithere {\r\n    0% { opacity: 1; }\r\n    30% { transform: scale(1.1); opacity: 1; }\r\n    40%, 60% { transform: rotate(-5deg) scale(1.1); opacity: 1; }\r\n    50% { transform: rotate(5deg) scale(1.1); opacity: 1; }\r\n    70% { transform: rotate(0deg) scale(1.1); opacity: 1; }\r\n    100% { transform: scale(1); opacity: 0; } /* Wegvagen op het einde */  \r\n}\r\n  \r\n\r\n.new-tabs {\r\n    display: flex !important;\r\n    font-size: 20px !important;\r\n    /* color: aqua; */\r\n    align-items: center !important;\r\n    justify-content: center !important;\r\n}\r\n\r\n.new-border {\r\n    border-right: 0px !important;\r\n    text-align: center !important;\r\n}\r\n\r\n.new-fade-box {\r\n    background: linear-gradient(to right bottom, #6384b587, hsla(0, 58%, 49%, 0.801)) !important;\r\n    border-radius: 10px !important;\r\n    box-shadow: rgba(255, 10, 10, 0.71) 2px 2px 10px !important;\r\n    overflow: hidden; /* Hide scrollbars */\r\n}\r\n\r\n.new-server-list {\r\n    overflow: hidden;\r\n}\r\n\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n.new-server-list::-webkit-scrollbar {\r\n    display: none !important;\r\n}\r\n\r\n.new-progress-striped {\r\n    background: repeating-linear-gradient(-45deg, #4CAF50, #4CAF50 25px, #388E3C 0, #388E3C 50px) !important;\r\n}\r\n.new-activeskin {\r\n    box-shadow: 0 0 3px 1px rgba(255, 10, 10, 0.71) !important;\r\n}\r\n\r\n.new-tabs-region {\r\n    border-right: 1px !important;\r\n    border-bottom-right-radius: 2px;\r\n}\r\n\r\n/* Definieer de keyframes voor de knipperende animatie */\r\n@keyframes flash {\r\n    0%, 100% {\r\n        box-shadow: rgba(255, 10, 10, 0.71) 0px 0px 10px;\r\n    }\r\n    50% {\r\n        box-shadow: rgba(255, 10, 10, 0) 0px 0px 10px;\r\n    }\r\n}\r\n\r\n/* Pas de animatie toe op het element */\r\n.flashing-skin-div {\r\n    box-shadow: rgba(255, 10, 10, 0.859) 0px 0px 10px;\r\n    animation: flash 2s infinite;\r\n    background-size: cover;\r\n    background-position: center;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 100%;\r\n    margin-top: 30px;\r\n    margin-bottom: 70px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    line-height: 200px; \r\n}\r\n\r\n\r\n.skin-div {\r\n    background-size: cover;\r\n    background-position: center;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 100%;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    line-height: 200px; \r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://altura-client/./src/ui/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://altura-client/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://altura-client/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/ui/styles.css":
/*!***************************!*\
  !*** ./src/ui/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/ui/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://altura-client/./src/ui/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://altura-client/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://altura-client/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://altura-client/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://altura-client/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://altura-client/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://altura-client/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\ndocument.title = \"Vanis.io - Altura Client\";\nconsole.log(\"%c   Altura Client  \", \"font-size: 28px; font-weight: bold; color: #00FFFF; background: linear-gradient(90deg, #00BCD4, #3F51B5); padding: 10px; border-radius: 8px; border: 2px solid #3F51B5; box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\");\n__webpack_require__(/*! ./utils/onJoin */ \"./src/utils/onJoin.ts\");\n__webpack_require__(/*! ./ui/styles.css */ \"./src/ui/styles.css\");\n__webpack_require__(/*! ./ui/index.js */ \"./src/ui/index.js\");\n__webpack_require__(/*! ./game/skins.js */ \"./src/game/skins.js\");\n\n\n//# sourceURL=webpack://altura-client/./src/main.ts?");

/***/ }),

/***/ "./src/utils/onJoin.ts":
/*!*****************************!*\
  !*** ./src/utils/onJoin.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n(function () {\n    'use strict';\n    // Sla de originele WebSocket constructor op\n    var originalWebSocket = window.WebSocket;\n    // Maak een proxy voor de WebSocket\n    window.WebSocket = new Proxy(originalWebSocket, {\n        construct: function (target, args) {\n            var ws = new (target.bind.apply(target, __spreadArray([void 0], args, false)))();\n            // Log wanneer de verbinding is geopend\n            ws.addEventListener('open', function () {\n                var message = '';\n                // Controleer of de URL overeenkomt met \"wss://game-eu-9.vanis.io/5001\"\n                if (args[0] === \"wss://game-eu-9.vanis.io/5001\") {\n                    console.log('Je bent FFA 1 gejoined Gefeliciteerd!');\n                    message = 'You joined FFA 1';\n                }\n                else if (args[0] === \"wss://game-eu-9.vanis.io/5002\") {\n                    console.log('You joined Instant 1');\n                    message = 'You joined Instant 1';\n                }\n                else if (args[0] === \"wss://game-eu-9.vanis.io/5003\") {\n                    console.log('You joined Gigasplit 1');\n                    message = 'You joined Gigasplit 1';\n                }\n                else if (args[0] === \"wss://game-eu-9.vanis.io/5004\") {\n                    console.log('Je bent Gigasplit 2 gejoined');\n                    message = 'You joined Gigasplit 2';\n                }\n                else if (args[0] === \"wss://game-eu-9.vanis.io/5005\") {\n                    console.log('Je bent Terasplit 1 gejoined');\n                    message = 'You joined Terasplit 1';\n                }\n                else if (args[0] === \"wss://game-eu-9.vanis.io/5006\") {\n                    console.log('Je bent Megasplit 1 gejoined');\n                    message = 'You joined Megasplit 1';\n                }\n                if (message) {\n                    showPopup(message);\n                }\n                if (args[0] === \"wss://game-eu-9.vanis.io/5001\") {\n                }\n            });\n            // Handle errors\n            ws.addEventListener('error', function (event) {\n                console.error('WebSocket error:', event);\n            });\n            // Handle connection close\n            ws.addEventListener('close', function (event) {\n                console.log('WebSocket connection closed:', event);\n            });\n            return ws;\n        }\n    });\n    // Functie om de popup te tonen\n    function showPopup(message) {\n        var popup = document.createElement('div');\n        popup.className = 'popup';\n        popup.textContent = message;\n        document.body.appendChild(popup);\n        // Verwijder de popup na 1.5 seconden\n        setTimeout(function () {\n            popup.remove();\n        }, 1000);\n    }\n})();\nfunction showPopup(message) {\n    throw new Error(\"Function not implemented.\");\n}\n\n\n//# sourceURL=webpack://altura-client/./src/utils/onJoin.ts?");

/***/ }),

/***/ "./src/game/skins.js":
/*!***************************!*\
  !*** ./src/game/skins.js ***!
  \***************************/
/***/ (() => {

eval("// Functie om een skin-element toe te voegen\r\nfunction addSkinElement(parentSelector, elementTag, attributes) {\r\n    const parent = document.querySelector(parentSelector);\r\n    if (parent) {\r\n        const newElement = document.createElement(elementTag);\r\n        for (const key in attributes) {\r\n            newElement.setAttribute(key, attributes[key]);\r\n        }\r\n        updateSkinElement(newElement);\r\n        if (parent.firstChild) {\r\n            parent.insertBefore(newElement, parent.firstChild);\r\n        } else {\r\n            parent.appendChild(newElement);\r\n        }\r\n        console.log(`Added new skin element`, newElement);\r\n    } else {\r\n        console.log(`Parent element not found for selector: ${parentSelector}`);\r\n    }\r\n}\r\n\r\n// Functie om het skin-element bij te werken\r\nfunction updateSkinElement(element) {\r\n    const skins = JSON.parse(localStorage.getItem('skins'));\r\n    const selectedSkinIndex = +localStorage.getItem('selectedSkinIndex');\r\n    const skinUrl = skins[selectedSkinIndex];\r\n    element.style.backgroundImage = `url(${skinUrl})`;\r\n    console.log(`Updated skin element with URL: ${skinUrl}`);\r\n}\r\n\r\n// Functie om de initiële setup uit te voeren\r\nfunction setupSkinElement() {\r\n    console.log('Running setupSkinElement');\r\n    // Verwijder bestaande skin-elementen om duplicaten te voorkomen\r\n    const existingSkinElement = document.querySelector('.skin-div');\r\n    if (existingSkinElement) {\r\n        existingSkinElement.remove();\r\n        console.log('Removed existing skin element');\r\n    }\r\n    addSkinElement('#player-data', 'div', { class: 'skin-div flashing-skin-div' });\r\n}\r\n\r\n\r\n// Voer de initiële setup uit bij het laden van de pagina\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    console.log('DOMContentLoaded event fired');\r\n    setupSkinElement();\r\n\r\n    // Voeg een MutationObserver toe om te luisteren naar class veranderingen\r\n    const observer = new MutationObserver((mutationsList) => {\r\n        for (const mutation of mutationsList) {\r\n            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {\r\n                const target = mutation.target;\r\n                if (target.classList.contains('selected')) {\r\n                    console.log('Class \"selected\" added to img');\r\n                    setupSkinElement();\r\n                }\r\n            }\r\n        }\r\n    });\r\n\r\n    // Observeer alle img elementen met data attribute data-v-2eade0fe\r\n    const imgElements = document.querySelectorAll('img[data-v-2eade0fe]');\r\n    imgElements.forEach(img => {\r\n        observer.observe(img, { attributes: true });\r\n    });\r\n});\r\n\r\n// Zorg ervoor dat setupSkinElement beschikbaar is in de globale scope\r\nwindow.setupSkinElement = setupSkinElement;\n\n//# sourceURL=webpack://altura-client/./src/game/skins.js?");

/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_skins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/skins.js */ \"./src/game/skins.js\");\n/* harmony import */ var _game_skins_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_skins_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    console.log('DOMContentLoaded event fired');\r\n\r\n    // Verwijder elementen op basis van meerdere class-namen\r\n    const classesToRemove = ['.social-container', '.slide-inner'];\r\n    removeElements(classesToRemove);\r\n\r\n    // Verwijder elementen op basis van ID\r\n    const idsToRemove = ['#vanis-io_300x250', '#vanis-io_728x90'];\r\n    removeElements(idsToRemove);\r\n\r\n    // Definieer de class mappings\r\n    const classMappings = [\r\n        { selectors: ['.tab'], className: 'new-tabs' },\r\n        { selectors: ['.tab[data-v-5190ae12]:not(:last-child)'], className: 'new-border' },\r\n        { selectors: ['.fade-box'], className: 'new-fade-box' },\r\n        { selectors: ['.server-list'], className: 'new-server-list' },\r\n        { selectors: ['.progress-striped > .progress-bar[data-v-5f2d6d72]'], className: 'new-progress-striped' },\r\n        { selectors: ['.selected[data-v-2eade0fe]'], className: 'new-activeskin' },\r\n        { selectors: ['.tab-menu .tab[data-v-752a3ab7]:not(:last-child)'], className: 'new-tabs-region' },\r\n        // Voeg hier meer mappings toe\r\n    ];\r\n\r\n    // Pas de classes toe\r\n    applyClasses(classMappings);\r\n\r\n    // Verwijder specifieke div met data-v-5190ae12 en tekst \"Advertisement\"\r\n    document.querySelectorAll('div[data-v-5190ae12][style=\"text-align: center; height: 286px;\"]').forEach(parentDiv => {\r\n        const childDiv = parentDiv.querySelector('div[data-v-5190ae12][style=\"padding: 4px;\"]');\r\n        if (childDiv && childDiv.textContent.includes('Advertisement')) {\r\n            parentDiv.remove();\r\n        }\r\n    });\r\n\r\n    // Functie om elementen toe te voegen\r\nfunction addElement(parentSelector, elementTag, attributes, innerHTML) {\r\n    const parent = document.querySelector(parentSelector);\r\n    if (parent) {\r\n        const newElement = document.createElement(elementTag);\r\n        for (const key in attributes) {\r\n            newElement.setAttribute(key, attributes[key]);\r\n        }\r\n        newElement.innerHTML = innerHTML;\r\n        if (parent.firstChild) {\r\n            parent.insertBefore(newElement, parent.firstChild);\r\n        } else {\r\n            parent.appendChild(newElement);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n// Functie om elementen te verwijderen\r\nfunction removeElements(selectors) {\r\n    selectors.forEach(selector => {\r\n        const elements = document.querySelectorAll(selector);\r\n        elements.forEach(element => element.remove());\r\n    });\r\n}\r\n\r\n// Functie om CSS-classes toe te voegen of te verwijderen\r\nfunction modifyElements(selectors, className, action) {\r\n    selectors.forEach(selector => {\r\n        const elements = document.querySelectorAll(selector);\r\n        elements.forEach(element => {\r\n            if (action === 'add') {\r\n                element.classList.add(className);\r\n            } else if (action === 'remove') {\r\n                element.classList.remove(className);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n// Functie om CSS-classes toe te voegen aan meerdere elementen\r\nfunction applyClasses(classMappings) {\r\n    classMappings.forEach(mapping => {\r\n        modifyElements(mapping.selectors, mapping.className, 'add');\r\n    });\r\n}\r\n});\n\n//# sourceURL=webpack://altura-client/./src/ui/index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;