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

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Synth = /*#__PURE__*/function () {\n  function Synth(el) {\n    _classCallCheck(this, Synth);\n\n    // this.soundKit = soundKit;\n    this.el = el;\n    this.soundArray = [[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]];\n    this.setupSynth();\n    this.handleClick();\n    console.log('constructor is firing');\n  } // handleClick toggles between activated and not activated\n\n\n  _createClass(Synth, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      var _this = this;\n\n      var ele = document.querySelector(\"#synth-grid\");\n      ele.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n        var row = event.target.parentElement.getAttribute(\"data-row\");\n        var col = event.target.getAttribute(\"data-col\");\n        event.target.classList.toggle(\"selected\");\n        row = parseInt(row);\n        col = parseInt(col);\n        var value = _this.soundArray[row][col];\n\n        if (value === false) {\n          value = true;\n        } else {\n          value = false;\n        }\n\n        ;\n        _this.soundArray[row][col] = value;\n        console.log(_this.soundArray);\n      });\n    }\n  }, {\n    key: \"setupSynth\",\n    value: function setupSynth() {\n      console.log('setupSynth is firing');\n    }\n  }]);\n\n  return Synth;\n}();\n\nmodule.exports = Synth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aC8uL3NyYy9zY3JpcHRzL3N5bnRoX3NrZWxldG9uLmpzP2RlNTQiXSwibmFtZXMiOlsiU3ludGgiLCJlbCIsInNvdW5kQXJyYXkiLCJzZXR1cFN5bnRoIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiZWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyb3ciLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiY29sIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGFyc2VJbnQiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxLO0FBQ0YsaUJBQWFDLEVBQWIsRUFBaUI7QUFBQTs7QUFDYjtBQUNBLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FDZCxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUE4RSxLQUE5RSxFQUFxRixLQUFyRixFQUE0RixLQUE1RixFQUFtRyxLQUFuRyxFQUEwRyxLQUExRyxDQURjLEVBRWQsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsS0FBaEUsRUFBdUUsS0FBdkUsRUFBOEUsS0FBOUUsRUFBcUYsS0FBckYsRUFBNEYsS0FBNUYsRUFBbUcsS0FBbkcsRUFBMEcsS0FBMUcsQ0FGYyxFQUdkLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQXVFLEtBQXZFLEVBQThFLEtBQTlFLEVBQXFGLEtBQXJGLEVBQTRGLEtBQTVGLEVBQW1HLEtBQW5HLEVBQTBHLEtBQTFHLENBSGMsRUFJZCxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxLQUFoRSxFQUF1RSxLQUF2RSxFQUE4RSxLQUE5RSxFQUFxRixLQUFyRixFQUE0RixLQUE1RixFQUFtRyxLQUFuRyxFQUEwRyxLQUExRyxDQUpjLEVBS2QsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsS0FBaEUsRUFBdUUsS0FBdkUsRUFBOEUsS0FBOUUsRUFBcUYsS0FBckYsRUFBNEYsS0FBNUYsRUFBbUcsS0FBbkcsRUFBMEcsS0FBMUcsQ0FMYyxDQUFsQjtBQU9BLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxXQUFMO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0gsRyxDQUNEOzs7OztXQUNBLHVCQUFjO0FBQUE7O0FBQ1YsVUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWjtBQUdBRixNQUFBQSxHQUFHLENBQUNHLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFVBQUNDLEtBQUQsRUFBVztBQUNyQ0EsUUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsWUFBSUMsR0FBRyxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsYUFBYixDQUEyQkMsWUFBM0IsQ0FBd0MsVUFBeEMsQ0FBVjtBQUNBLFlBQUlDLEdBQUcsR0FBR04sS0FBSyxDQUFDRyxNQUFOLENBQWFFLFlBQWIsQ0FBMEIsVUFBMUIsQ0FBVjtBQUNBTCxRQUFBQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUksU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsVUFBOUI7QUFFQU4sUUFBQUEsR0FBRyxHQUFHTyxRQUFRLENBQUNQLEdBQUQsQ0FBZDtBQUNBSSxRQUFBQSxHQUFHLEdBQUdHLFFBQVEsQ0FBQ0gsR0FBRCxDQUFkO0FBRUEsWUFBSUksS0FBSyxHQUFHLEtBQUksQ0FBQ25CLFVBQUwsQ0FBZ0JXLEdBQWhCLEVBQXFCSSxHQUFyQixDQUFaOztBQUVBLFlBQUlJLEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ2pCQSxVQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNILFNBRkQsTUFFTztBQUNIQSxVQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNIOztBQUFBO0FBRUQsUUFBQSxLQUFJLENBQUNuQixVQUFMLENBQWdCVyxHQUFoQixFQUFxQkksR0FBckIsSUFBNEJJLEtBQTVCO0FBRUFoQixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNKLFVBQWpCO0FBQ0gsT0FwQkQ7QUFzQkg7OztXQUVELHNCQUFhO0FBQ1RHLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0g7Ozs7OztBQUdMZ0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsS0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTeW50aCB7XG4gICAgY29uc3RydWN0b3IgKGVsKSB7XG4gICAgICAgIC8vIHRoaXMuc291bmRLaXQgPSBzb3VuZEtpdDtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnNvdW5kQXJyYXkgPSBbXG4gICAgICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxuICAgICAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLF0sXG4gICAgICAgICAgICBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsXSxcbiAgICAgICAgICAgIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSxdLFxuICAgICAgICAgICAgW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLF1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zZXR1cFN5bnRoKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yIGlzIGZpcmluZycpXG4gICAgfVxuICAgIC8vIGhhbmRsZUNsaWNrIHRvZ2dsZXMgYmV0d2VlbiBhY3RpdmF0ZWQgYW5kIG5vdCBhY3RpdmF0ZWRcbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzeW50aC1ncmlkXCIpO1xuXG5cbiAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgcm93ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gICAgICAgICAgICBsZXQgY29sID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgcm93ID0gcGFyc2VJbnQocm93KTtcbiAgICAgICAgICAgIGNvbCA9IHBhcnNlSW50KGNvbCk7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc291bmRBcnJheVtyb3ddW2NvbF07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNvdW5kQXJyYXlbcm93XVtjb2xdID0gdmFsdWVcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zb3VuZEFycmF5KTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0dXBTeW50aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHVwU3ludGggaXMgZmlyaW5nJylcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3ludGg7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3N5bnRoX3NrZWxldG9uLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/synth_skeleton.js\n");

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