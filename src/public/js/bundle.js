/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: [BABEL] /home/ailton/GitClones/MEVN-project/src/app/index.js: Requires Babel \\\"^7.0.0-beta.41\\\", but was loaded with \\\"7.0.0-beta.3\\\". You'll need to update your @babel/core version. (While processing: \\\"/home/ailton/GitClones/MEVN-project/node_modules/@babel/preset-env/lib/index.js\\\")\\n    at throwVersionError (/home/ailton/GitClones/MEVN-project/node_modules/@babel/helper-plugin-utils/lib/index.js:63:11)\\n    at Object.assertVersion (/home/ailton/GitClones/MEVN-project/node_modules/@babel/helper-plugin-utils/lib/index.js:13:11)\\n    at _default (/home/ailton/GitClones/MEVN-project/node_modules/@babel/preset-env/lib/index.js:154:7)\\n    at /home/ailton/GitClones/MEVN-project/node_modules/@babel/helper-plugin-utils/lib/index.js:19:12\\n    at /home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/option-manager.js:238:14\\n    at cachedFunction (/home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/caching.js:48:17)\\n    at loadPresetDescriptor (/home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/option-manager.js:321:28)\\n    at /home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/option-manager.js:59:14\\n    at Array.map (<anonymous>)\\n    at OptionManager.mergeOptions (/home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/option-manager.js:58:34)\\n    at OptionManager.init (/home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/option-manager.js:114:14)\\n    at manageOptions (/home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/option-manager.js:40:30)\\n    at loadConfig (/home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/config/index.js:17:37)\\n    at Object.transform (/home/ailton/GitClones/MEVN-project/node_modules/babel-core/lib/transform.js:13:36)\\n    at transpile (/home/ailton/GitClones/MEVN-project/node_modules/babel-loader/lib/index.js:50:20)\\n    at Object.module.exports (/home/ailton/GitClones/MEVN-project/node_modules/babel-loader/lib/index.js:173:20)\");\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ })

/******/ });