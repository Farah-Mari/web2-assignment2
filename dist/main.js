/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/sounds/click.wav":
/*!*********************************!*\
  !*** ./assets/sounds/click.wav ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91940e3f5c0dacec1c6c.wav\";\n\n//# sourceURL=webpack://web2-assignment2/./assets/sounds/click.wav?");

/***/ }),

/***/ "./assets/sounds/notification.wav":
/*!****************************************!*\
  !*** ./assets/sounds/notification.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5d8ec2285a606e44f86.wav\";\n\n//# sourceURL=webpack://web2-assignment2/./assets/sounds/notification.wav?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Arial\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #655170;\r\n  color: #ffffff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  text-align: center;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  background-color: #d4b5e6;\r\n  padding: 30px;\r\n  border-radius: 12px;\r\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\r\n  width: clamp(300px, 50vw, 700px);\r\n}\r\n\r\n.settings-container {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n}\r\n\r\n#settingsBtn {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  box-shadow: none;\r\n  cursor: pointer;\r\n}\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#modeDisplay {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n  padding: 18px 30px;\r\n  border-radius: 6px;\r\n  background-color: #4f335765;\r\n  height: 60px;\r\n  text-align: center;\r\n}\r\n\r\n#timerDisplay {\r\n  font-size: 48px;\r\n  font-weight: bold;\r\n  margin: 20px 0;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.controls {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.top-buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 350px;\r\n}\r\n\r\nbutton {\r\n  padding: 10px 16px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 80px;\r\n  height: 40px;\r\n}\r\n\r\n#playPauseBtn {\r\n  background-color: #679b50c2;\r\n  color: white;\r\n}\r\n\r\n#resetBtn {\r\n  background-color: #693f74d0;\r\n  color: white;\r\n}\r\n\r\nbutton i {\r\n  font-size: 18px;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n#settingsForm {\r\n  background-color: #4f335765;\r\n  padding: 15px;\r\n  border-radius: 8px;\r\n  margin-bottom: 20px;\r\n  text-align: left;\r\n}\r\n\r\n#settingsForm h2 {\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#settingsForm label {\r\n  display: block;\r\n  font-size: 14px;\r\n  margin-bottom: 8px;\r\n  font-weight: bold;\r\n}\r\n\r\n#settingsForm input {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n}\r\n\r\n#settingsForm button[type=\"submit\"] {\r\n  width: 100%;\r\n  background-color: #4932509a;\r\n  color: white;\r\n  margin-top: 10px;\r\n}\r\n\r\n.tasks-container {\r\n  text-align: left;\r\n}\r\n\r\n.tasks-container h2 {\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#taskForm {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#taskForm input {\r\n  flex: 1;\r\n  padding: 8px;\r\n  border: 1px solid #535f79;\r\n  border-radius: 6px;\r\n}\r\n\r\n#taskForm button {\r\n  padding: 8px 12px;\r\n  background-color: #693f74d0;\r\n  border: none;\r\n  border-radius: 6px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n#taskList {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n#taskList li {\r\n  background-color: #4f3357ab;\r\n  padding: 8px;\r\n  margin-bottom: 5px;\r\n  border-radius: 6px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#taskList li button {\r\n  background-color: #4f335700;\r\n  border: none;\r\n  border-radius: 4px;\r\n  padding: 4px 8px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .top-buttons {\r\n    justify-content: space-around;\r\n  }\r\n  #modeDisplay {\r\n    padding: 12px 20px;\r\n    height: auto;\r\n  }\r\n  #timerDisplay {\r\n    font-size: 36px;\r\n  }\r\n  .container {\r\n    padding: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .settings-container {\r\n    top: 400px;\r\n    left: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 20px;\r\n  }\r\n  #modeDisplay {\r\n    font-size: 16px;\r\n    padding: 10px 15px;\r\n  }\r\n  #timerDisplay {\r\n    font-size: 28px;\r\n  }\r\n  button {\r\n    width: 70px;\r\n    height: 35px;\r\n    font-size: 14px;\r\n  }\r\n  .top-buttons {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    width: 100%;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web2-assignment2/./styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://web2-assignment2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.js */ \"./src/notifications.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _assets_sounds_click_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sounds/click.wav */ \"./assets/sounds/click.wav\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst clickSound = new Audio(_assets_sounds_click_wav__WEBPACK_IMPORTED_MODULE_5__);\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const settings = new _settings_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  const ui = new _ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const timer = new _timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](settings, ui, _notifications_js__WEBPACK_IMPORTED_MODULE_3__.playNotification);\r\n  let isRunning = false;\r\n  const playPauseButton = document.getElementById(\"playPauseBtn\");\r\n  const resetButton = document.getElementById(\"resetBtn\");\r\n\r\n  playPauseButton.addEventListener(\"click\", () => {\r\n    clickSound.play();\r\n    if (!isRunning) {\r\n      playPauseButton.innerHTML = '<i class=\"fas fa-pause\"></i>';\r\n      isRunning = true;\r\n      timer.start();\r\n    } else {\r\n      playPauseButton.innerHTML = '<i class=\"fas fa-play\"></i>';\r\n      isRunning = false;\r\n      timer.pause();\r\n    }\r\n  });\r\n\r\n  resetButton.addEventListener(\"click\", () => {\r\n    clickSound.play();\r\n    timer.reset();\r\n    playPauseButton.innerHTML = '<i class=\"fas fa-play\"></i>';\r\n    isRunning = false;\r\n  });\r\n\r\n  ui.updateTimerDisplay(timer.getTimeRemaining());\r\n  const taskListElement = document.getElementById(\"taskList\");\r\n  const taskForm = document.getElementById(\"taskForm\");\r\n  const tasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](taskListElement);\r\n  taskForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const taskInput = document.getElementById(\"taskInput\");\r\n    const taskText = taskInput.value.trim();\r\n    if (taskText !== \"\") {\r\n      tasks.addTask(taskText);\r\n      taskInput.value = \"\";\r\n    }\r\n  });\r\n  const settingsBtn = document.getElementById(\"settingsBtn\");\r\n  const settingsForm = document.getElementById(\"settingsForm\");\r\n\r\n  settingsBtn.addEventListener(\"click\", () => {\r\n    settingsForm.classList.toggle(\"hidden\");\r\n  });\r\n\r\n  settingsForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const workDuration =\r\n      parseInt(document.getElementById(\"workDuration\").value, 10) * 60;\r\n    const breakDuration =\r\n      parseInt(document.getElementById(\"breakDuration\").value, 10) * 60;\r\n    const longBreakDuration =\r\n      parseInt(document.getElementById(\"longBreakDuration\").value, 10) * 60;\r\n    settings.update({\r\n      work: workDuration,\r\n      break: breakDuration,\r\n      longBreak: longBreakDuration,\r\n    });\r\n    timer.reset();\r\n    settingsForm.classList.add(\"hidden\");\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://web2-assignment2/./src/index.js?");

/***/ }),

/***/ "./src/notifications.js":
/*!******************************!*\
  !*** ./src/notifications.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playNotification: () => (/* binding */ playNotification)\n/* harmony export */ });\nfunction playNotification() {\r\n  const audio = new Audio(__webpack_require__(/*! ../assets/sounds/notification.wav */ \"./assets/sounds/notification.wav\"));\r\n  audio.play();\r\n}\r\n\n\n//# sourceURL=webpack://web2-assignment2/./src/notifications.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\nclass Settings {\r\n  constructor() {\r\n    this.durations = {\r\n      work: 25 * 60,\r\n      break: 5 * 60,\r\n      longBreak: 15 * 60,\r\n    };\r\n  }\r\n\r\n  getDuration(mode) {\r\n    return this.durations[mode] || this.durations.work;\r\n  }\r\n\r\n  update(newSettings) {\r\n    if (\r\n      newSettings.work > 0 &&\r\n      newSettings.break > 0 &&\r\n      newSettings.longBreak > 0\r\n    ) {\r\n      this.durations = {\r\n        work: newSettings.work,\r\n        break: newSettings.break,\r\n        longBreak: newSettings.longBreak,\r\n      };\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-assignment2/./src/settings.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nclass Tasks {\r\n  constructor(taskListElement) {\r\n    this.taskListElement = taskListElement;\r\n    this.tasks = [];\r\n    this.loadTasks();\r\n  }\r\n\r\n  loadTasks() {\r\n    const stored = localStorage.getItem(\"tasks\");\r\n    if (stored) {\r\n      this.tasks = JSON.parse(stored);\r\n      this.render();\r\n    }\r\n  }\r\n\r\n  saveTasks() {\r\n    localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\r\n  }\r\n\r\n  addTask(taskText) {\r\n    const task = {\r\n      text: taskText,\r\n      id: Date.now(),\r\n    };\r\n    this.tasks.push(task);\r\n    this.saveTasks();\r\n    this.render();\r\n  }\r\n\r\n  removeTask(taskId) {\r\n    this.tasks = this.tasks.filter((task) => task.id !== taskId);\r\n    this.saveTasks();\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.taskListElement.innerHTML = \"\";\r\n    this.tasks.forEach((task) => {\r\n      const li = document.createElement(\"li\");\r\n      li.textContent = task.text;\r\n      const deleteBtn = document.createElement(\"button\");\r\n      deleteBtn.innerHTML = '<i class=\"fas fa-trash\"></i>';\r\n      deleteBtn.addEventListener(\"click\", () => {\r\n        this.removeTask(task.id);\r\n      });\r\n      li.appendChild(deleteBtn);\r\n      this.taskListElement.appendChild(li);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-assignment2/./src/tasks.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\nclass Timer {\r\n  constructor(settings, ui, notificationCallback) {\r\n    this.settings = settings;\r\n    this.ui = ui;\r\n    this.notificationCallback = notificationCallback;\r\n    this.intervalId = null;\r\n    this.isRunning = false;\r\n    this.currentMode = \"work\";\r\n    this.workSessions = 0;\r\n    this.timeRemaining = this.settings.getDuration(this.currentMode);\r\n  }\r\n\r\n  start() {\r\n    if (this.isRunning) return;\r\n    this.isRunning = true;\r\n    this.intervalId = setInterval(() => {\r\n      if (this.timeRemaining > 0) {\r\n        this.timeRemaining--;\r\n        this.ui.updateTimerDisplay(this.getTimeRemaining());\r\n      } else {\r\n        clearInterval(this.intervalId);\r\n        this.isRunning = false;\r\n        this.notificationCallback();\r\n        this.switchMode();\r\n        this.start();\r\n      }\r\n    }, 1000);\r\n  }\r\n\r\n  pause() {\r\n    this.isRunning = false;\r\n    clearInterval(this.intervalId);\r\n  }\r\n\r\n  reset() {\r\n    this.pause();\r\n    this.currentMode = \"work\";\r\n    this.workSessions = 0;\r\n    this.timeRemaining = this.settings.getDuration(this.currentMode);\r\n    this.ui.updateTimerDisplay(this.getTimeRemaining());\r\n  }\r\n\r\n  switchMode() {\r\n    if (this.currentMode === \"work\") {\r\n      this.workSessions++;\r\n      if (this.workSessions % 4 === 0) {\r\n        this.currentMode = \"longBreak\";\r\n      } else {\r\n        this.currentMode = \"break\";\r\n      }\r\n    } else {\r\n      this.currentMode = \"work\";\r\n    }\r\n    this.timeRemaining = this.settings.getDuration(this.currentMode);\r\n    this.ui.updateModeDisplay(this.currentMode);\r\n  }\r\n\r\n  updateSettings(newSettings) {\r\n    this.settings.update(newSettings);\r\n    if (!this.isRunning) {\r\n      this.timeRemaining = this.settings.getDuration(this.currentMode);\r\n      this.ui.updateTimerDisplay(this.getTimeRemaining());\r\n    }\r\n  }\r\n\r\n  getTimeRemaining() {\r\n    const minutes = Math.floor(this.timeRemaining / 60);\r\n    const seconds = this.timeRemaining % 60;\r\n    return { minutes, seconds };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-assignment2/./src/timer.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\r\n  constructor() {\r\n    this.modeDisplay = document.getElementById(\"modeDisplay\");\r\n    this.hoursDisplay = document.getElementById(\"hoursDisplay\");\r\n    this.minutesDisplay = document.getElementById(\"minutesDisplay\");\r\n    this.secondsDisplay = document.getElementById(\"secondsDisplay\");\r\n    this.playPauseButton = document.getElementById(\"playPauseBtn\");\r\n    this.resetButton = document.getElementById(\"resetBtn\");\r\n  }\r\n\r\n  updateTimerDisplay({ hours, minutes, seconds }) {\r\n    if (this.hoursDisplay) {\r\n      this.hoursDisplay.textContent = hours.toString().padStart(2, \"0\");\r\n    }\r\n    if (this.minutesDisplay) {\r\n      this.minutesDisplay.textContent = minutes.toString().padStart(2, \"0\");\r\n    }\r\n    if (this.secondsDisplay) {\r\n      this.secondsDisplay.textContent = seconds.toString().padStart(2, \"0\");\r\n    }\r\n    const timerDisplay = document.getElementById(\"timerDisplay\");\r\n    if (timerDisplay) {\r\n      timerDisplay.textContent = `${minutes\r\n        .toString()\r\n        .padStart(2, \"0\")}:${seconds.toString().padStart(2, \"0\")}`;\r\n    }\r\n  }\r\n\r\n  updateModeDisplay(mode) {\r\n    let modeText = \"\";\r\n    switch (mode) {\r\n      case \"work\":\r\n        modeText = \"It's Time To Focus\";\r\n        break;\r\n      case \"break\":\r\n        modeText = \"Let's Take a Break\";\r\n        break;\r\n      case \"longBreak\":\r\n        modeText = \"Long Break\";\r\n        break;\r\n      default:\r\n        modeText = mode;\r\n    }\r\n    this.modeDisplay.textContent = modeText;\r\n  }\r\n\r\n  onPlayPause(callback) {\r\n    this.playPauseButton.addEventListener(\"click\", callback);\r\n  }\r\n\r\n  onReset(callback) {\r\n    this.resetButton.addEventListener(\"click\", callback);\r\n  }\r\n\r\n  setPlayPauseButtonText(text) {\r\n    this.playPauseButton.textContent = text;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-assignment2/./src/ui.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://web2-assignment2/./styles.css?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;