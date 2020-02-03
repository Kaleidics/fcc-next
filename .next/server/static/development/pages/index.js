module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eddie\\Documents\\GitHub\\next-projects\\fcc-next\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const SPACE = "0iiyikmirmao";
const ACCESS = "SExRELSl5hRWLsh3USyHjv60GDz9obiRa0p2XvHhHSE";

const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: SPACE,
  accessToken: ACCESS
});

function Header() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getContent() {
      const allContent = await fetchEntries();
      setContent([...allContent]);
    }

    getContent();
  }, []);
  let title = content.length > 0 ? content[0].fields.title : null;
  let tagline = content.length > 0 ? content[0].fields.tagline : null;
  let overview = content.length > 0 ? content[0].fields.overview : null;
  return __jsx("header", {
    className: "jsx-4007894895" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4007894895" + " " + 'heading-primary',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title), __jsx("p", {
    className: "jsx-4007894895" + " " + 'tagline',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, tagline), __jsx("p", {
    className: "jsx-4007894895" + " " + 'overview',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, overview), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4007894895",
    __self: this
  }, ".header.jsx-4007894895{padding:0 20px;max-width:1024px;margin:0 auto;font-family:'Source Sans Pro',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRkaWVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LXByb2plY3RzXFxmY2MtbmV4dFxcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IsQUFHb0MsZUFDRSxpQkFDSCxjQUM0Qix5Q0FDOUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFZGRpZVxcRG9jdW1lbnRzXFxHaXRIdWJcXG5leHQtcHJvamVjdHNcXGZjYy1uZXh0XFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU1BBQ0UgPSBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lEO1xyXG5jb25zdCBBQ0NFU1MgPSBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19UT0tFTjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xyXG4gICAgc3BhY2U6IFNQQUNFLFxyXG4gICAgYWNjZXNzVG9rZW46IEFDQ0VTU1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRW50cmllcygpIHtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoKTtcclxuICAgICAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxDb250ZW50ID0gYXdhaXQgZmV0Y2hFbnRyaWVzKCk7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoWy4uLmFsbENvbnRlbnRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q29udGVudCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGNvbnRlbnQubGVuZ3RoID4gMCA/IGNvbnRlbnRbMF0uZmllbGRzLnRpdGxlIDogbnVsbDtcclxuICAgIGxldCB0YWdsaW5lID0gY29udGVudC5sZW5ndGggPiAwID8gY29udGVudFswXS5maWVsZHMudGFnbGluZSA6IG51bGw7XHJcbiAgICBsZXQgb3ZlcnZpZXcgPSBjb250ZW50Lmxlbmd0aCA+IDAgPyBjb250ZW50WzBdLmZpZWxkcy5vdmVydmlldyA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0naGVhZGluZy1wcmltYXJ5Jz57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0YWdsaW5lJz57dGFnbGluZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ZlcnZpZXcnPntvdmVydmlld308L3A+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Eddie\\\\Documents\\\\GitHub\\\\next-projects\\\\fcc-next\\\\components\\\\header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eddie\\Documents\\GitHub\\next-projects\\fcc-next\\components\\navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const SPACE = "0iiyikmirmao";
const ACCESS = "SExRELSl5hRWLsh3USyHjv60GDz9obiRa0p2XvHhHSE";

const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: SPACE,
  accessToken: ACCESS
});

function Navbar() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getContent() {
      const allContent = await fetchEntries();
      setContent([...allContent]);
    }

    getContent();
  }, []);
  console.log(content);
  let imageSrc = content.length > 0 ? content[0].fields.mainlogo.fields.file.url : null;
  let imageAlt = content.length > 0 ? content[0].fields.mainlogo.fields.description : null;
  return __jsx("div", {
    className: "jsx-1754879685" + " " + 'navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1754879685" + " " + 'navbar-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: imageSrc,
    alt: imageAlt,
    className: "jsx-1754879685" + " " + 'navbar-logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1754879685" + " " + 'mobile-nav',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1754879685" + " " + 'line one',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1754879685" + " " + 'line two',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1754879685" + " " + 'line three',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1754879685",
    __self: this
  }, ".navbar.jsx-1754879685{width:100%;padding:20px 0;border-bottom:1px solid rgb(232,232,232);}.navbar-content.jsx-1754879685{max-width:1024px;margin:0 auto;width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.navbar-logo.jsx-1754879685{max-width:200px;}.mobile-nav.jsx-1754879685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:36px;height:26px;padding:20px 0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.line.jsx-1754879685{width:30px;height:2px;background:grey;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRkaWVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LXByb2plY3RzXFxmY2MtbmV4dFxcY29tcG9uZW50c1xcbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDd0IsQUFHZ0MsQUFNTSxBQVNELEFBSUgsQUFVRixXQTVCSSxBQTZCSixLQWRmLENBVGtCLEtBd0JFLElBN0IyQixLQU1qQyxPQXdCUSxHQXZCTCxlQXdCakIsV0E5QkEsT0FpQjBCLHlDQVZILHFDQVdXLHdEQVZBLDJEQVduQixXQUNDLFlBQ0csZUFDSSxrQkFidkIsMkVBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxFZGRpZVxcRG9jdW1lbnRzXFxHaXRIdWJcXG5leHQtcHJvamVjdHNcXGZjYy1uZXh0XFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU1BBQ0UgPSBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lEO1xyXG5jb25zdCBBQ0NFU1MgPSBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19UT0tFTjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xyXG4gICAgc3BhY2U6IFNQQUNFLFxyXG4gICAgYWNjZXNzVG9rZW46IEFDQ0VTU1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRW50cmllcygpIHtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoKTtcclxuICAgICAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxDb250ZW50ID0gYXdhaXQgZmV0Y2hFbnRyaWVzKCk7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoWy4uLmFsbENvbnRlbnRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q29udGVudCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpXHJcbiAgICBsZXQgaW1hZ2VTcmMgPSBjb250ZW50Lmxlbmd0aCA+IDAgPyBjb250ZW50WzBdLmZpZWxkcy5tYWlubG9nby5maWVsZHMuZmlsZS51cmwgOiBudWxsO1xyXG4gICAgbGV0IGltYWdlQWx0ID0gY29udGVudC5sZW5ndGggPiAwID8gY29udGVudFswXS5maWVsZHMubWFpbmxvZ28uZmllbGRzLmRlc2NyaXB0aW9uIDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J25hdmJhci1sb2dvJyBzcmM9e2ltYWdlU3JjfSBhbHQ9e2ltYWdlQWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lIG9uZSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmUgdHdvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluZSB0aHJlZSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vYmlsZS1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Eddie\\\\Documents\\\\GitHub\\\\next-projects\\\\fcc-next\\\\components\\\\navbar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eddie\\Documents\\GitHub\\next-projects\\fcc-next\\components\\post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Post({
  alt,
  date,
  image,
  title,
  url
}) {
  return __jsx("div", {
    className: "jsx-1308844613" + " " + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("a", {
    href: url,
    className: "jsx-1308844613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("img", {
    alt: alt,
    src: image,
    className: "jsx-1308844613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1308844613" + " " + 'text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1308844613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title), __jsx("h4", {
    className: "jsx-1308844613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, date)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1308844613",
    __self: this
  }, ".container.jsx-1308844613{cursor:pointer;height:453px;margin-bottom:48px;}a.jsx-1308844613{border-bottom:none;}a.jsx-1308844613:hover{border-bottom:none;}.text.jsx-1308844613{margin-top:-160px;padding:24px;position:absolute;}h2.jsx-1308844613{color:white;font-size:24px;margin-bottom:0;}h4.jsx-1308844613{color:rgba(255,255,255,0.8);font-size:16px;font-weight:500;margin-top:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRkaWVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LXByb2plY3RzXFxmY2MtbmV4dFxcY29tcG9uZW50c1xccG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVd0IsQUFHb0MsQUFLSSxBQUdBLEFBR0QsQUFLTixBQUttQixZQUpoQixHQWhCRixHQVdBLENBTmpCLEFBR0EsUUFTb0IsQ0FoQkcsQUFvQkosR0FURyxZQU10QixBQUlvQixJQXBCcEIsRUFXQSxVQVVtQixlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVkZGllXFxEb2N1bWVudHNcXEdpdEh1YlxcbmV4dC1wcm9qZWN0c1xcZmNjLW5leHRcXGNvbXBvbmVudHNcXHBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBQb3N0KHsgYWx0LCBkYXRlLCBpbWFnZSwgdGl0bGUsIHVybCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9e2FsdH0gc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dCc+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGV9PC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Eddie\\\\Documents\\\\GitHub\\\\next-projects\\\\fcc-next\\\\components\\\\post.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post */ "./components/post.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
var _jsxFileName = "C:\\Users\\Eddie\\Documents\\GitHub\\next-projects\\fcc-next\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const SPACE = "0iiyikmirmao";
const ACCESS = "SExRELSl5hRWLsh3USyHjv60GDz9obiRa0p2XvHhHSE";

const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: SPACE,
  accessToken: ACCESS
});

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }

    getPosts();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2143605305",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "freeCodeCamp - Elk Grove"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap",
    rel: "stylesheet",
    className: "jsx-2143605305",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2143605305",
    __self: this
  }, "html{box-sizing:border-box;margin:0;padding:0;height:100%;width:100%;}body{width:100%;height:100%;margin:0;padding:0;}.clearfix::after{content:'';clear:both;display:table;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRkaWVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LXByb2plY3RzXFxmY2MtbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDK0IsQUFHMkMsQUFRWCxBQU9BLFdBTkMsQUFPRCxXQWZGLEFBZ0JLLENBUEwsUUFSQyxDQVNBLElBT2QsS0FmZ0IsQ0FTaEIsV0FSZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRWRkaWVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LXByb2plY3RzXFxmY2MtbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdCc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcbmNvbnN0IFNQQUNFID0gcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9TUEFDRV9JRDtcclxuY29uc3QgQUNDRVNTID0gcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XHJcblxyXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcclxuICAgIHNwYWNlOiBTUEFDRSxcclxuICAgIGFjY2Vzc1Rva2VuOiBBQ0NFU1NcclxufSk7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRW50cmllcygpIHtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoKTtcclxuICAgICAgICBpZiAoZW50cmllcy5pdGVtcykgcmV0dXJuIGVudHJpZXMuaXRlbXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGZldGNoRW50cmllcygpO1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhbLi4uYWxsUG9zdHNdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0UG9zdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPmZyZWVDb2RlQ2FtcCAtIEVsayBHcm92ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybzozMDAsNDAwLDYwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNsZWFyZml4OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Eddie\\\\Documents\\\\GitHub\\\\next-projects\\\\fcc-next\\\\pages\\\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eddie\Documents\GitHub\next-projects\fcc-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map