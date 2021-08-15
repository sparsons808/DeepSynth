/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Synth = __webpack_require__(/*! ./scripts/synth_skeleton.js */ \"./src/scripts/synth_skeleton.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var el = document.querySelector(\"body\");\n  new Synth(el);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9FQUFELENBQXJCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLEVBQUUsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFFQSxNQUFJTCxLQUFKLENBQVVJLEVBQVY7QUFDSCxDQUpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGgvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTeW50aCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvc3ludGhfc2tlbGV0b24uanNcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIG5ldyBTeW50aChlbCk7XG59KSJdLCJuYW1lcyI6WyJTeW50aCIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/synth_skeleton.js":
/*!***************************************!*\
  !*** ./src/scripts/synth_skeleton.js ***!
  \***************************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Synth = /*#__PURE__*/function () {\n  function Synth(el) {\n    _classCallCheck(this, Synth);\n\n    // this.soundKit = soundKit;\n    this.el = el;\n    this.setupSynth();\n    this.handleClick();\n    console.log('constructor is firing');\n  }\n\n  _createClass(Synth, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      var ele = document.querySelector(\"#synth-grid\");\n      ele.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n        var row = event.target.parentElement.getAttribute(\"data-row\");\n        var col = event.target.getAttribute(\"data-col\");\n        console.log([parseInt(row), parseInt(col)]);\n      });\n      console.log(ele);\n    }\n  }, {\n    key: \"setupSynth\",\n    value: function setupSynth() {\n      console.log('setupSynth is firing');\n    }\n  }]);\n\n  return Synth;\n}();\n\nmodule.exports = Synth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aC8uL3NyYy9zY3JpcHRzL3N5bnRoX3NrZWxldG9uLmpzP2RlNTQiXSwibmFtZXMiOlsiU3ludGgiLCJlbCIsInNldHVwU3ludGgiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJlbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJvdyIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJjb2wiLCJwYXJzZUludCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxLO0FBQ0YsaUJBQWFDLEVBQWIsRUFBaUI7QUFBQTs7QUFDYjtBQUNBLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxXQUFMO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0g7Ozs7V0FFRCx1QkFBYztBQUNWLFVBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQVo7QUFFQUYsTUFBQUEsR0FBRyxDQUFDRyxnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDQyxLQUFELEVBQVc7QUFDckNBLFFBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLFlBQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLGFBQWIsQ0FBMkJDLFlBQTNCLENBQXdDLFVBQXhDLENBQVo7QUFDQSxZQUFNQyxHQUFHLEdBQUdOLEtBQUssQ0FBQ0csTUFBTixDQUFhRSxZQUFiLENBQTBCLFVBQTFCLENBQVo7QUFFQVgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBQ1ksUUFBUSxDQUFDTCxHQUFELENBQVQsRUFBZ0JLLFFBQVEsQ0FBQ0QsR0FBRCxDQUF4QixDQUFaO0FBQ0gsT0FORDtBQU9BWixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNIOzs7V0FFRCxzQkFBYTtBQUNURixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNIOzs7Ozs7QUFHTGEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTeW50aCB7XG4gICAgY29uc3RydWN0b3IgKGVsKSB7XG4gICAgICAgIC8vIHRoaXMuc291bmRLaXQgPSBzb3VuZEtpdDtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnNldHVwU3ludGgoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljaygpO1xuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3IgaXMgZmlyaW5nJylcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzeW50aC1ncmlkXCIpO1xuXG4gICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFtwYXJzZUludChyb3cpLCBwYXJzZUludChjb2wpXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZSk7XG4gICAgfVxuXG4gICAgc2V0dXBTeW50aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHVwU3ludGggaXMgZmlyaW5nJylcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ludGg7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3N5bnRoX3NrZWxldG9uLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/synth_skeleton.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;