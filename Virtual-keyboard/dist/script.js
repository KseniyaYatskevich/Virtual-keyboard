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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: KEYS, IGNORE_CONTENT, IGNORE_ACTION_BUTTONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_CONTENT", function() { return IGNORE_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_ACTION_BUTTONS", function() { return IGNORE_ACTION_BUTTONS; });
var KEYS = [[{
  code: 'Backquote',
  ru: 'ё',
  ruShift: 'Ё',
  eng: '`',
  engShift: '~',
  className: 'keyboard__key'
}, {
  code: 'Digit1',
  ru: '1',
  ruShift: '!',
  eng: '1',
  engShift: '!',
  className: 'keyboard__key'
}, {
  code: 'Digit2',
  ru: '2',
  ruShift: '"',
  eng: '2',
  engShift: '@',
  className: 'keyboard__key'
}, {
  code: 'Digit3',
  ru: '3',
  ruShift: '№',
  eng: '3',
  engShift: '#',
  className: 'keyboard__key'
}, {
  code: 'Digit4',
  ru: '4',
  ruShift: '$',
  eng: '4',
  engShift: ';',
  className: 'keyboard__key'
}, {
  code: 'Digit5',
  ru: '5',
  ruShift: '%',
  eng: '5',
  engShift: '%',
  className: 'keyboard__key'
}, {
  code: 'Digit6',
  ru: '6',
  ruShift: ':',
  eng: '6',
  engShift: '^',
  className: 'keyboard__key'
}, {
  code: 'Digit7',
  ru: '7',
  ruShift: '?',
  eng: '7',
  engShift: '&',
  className: 'keyboard__key'
}, {
  code: 'Digit8',
  ru: '8',
  ruShift: '*',
  eng: '8',
  engShift: '*',
  className: 'keyboard__key'
}, {
  code: 'Digit9',
  ru: '9',
  ruShift: '(',
  eng: '9',
  engShift: '(',
  className: 'keyboard__key'
}, {
  code: 'Digit0',
  ru: '0',
  ruShift: ')',
  eng: '0',
  engShift: ')',
  className: 'keyboard__key'
}, {
  code: 'Minus',
  ru: '-',
  ruShift: '_',
  eng: '-',
  engShift: '_',
  className: 'keyboard__key'
}, {
  code: 'Equal',
  ru: '=',
  ruShift: '+',
  eng: '=',
  engShift: '+',
  className: 'keyboard__key'
}, {
  code: 'Backspace',
  ru: 'Backspace',
  ruShift: 'Backspace',
  eng: 'Backspace',
  engShift: 'Backspace',
  className: 'keyboard__key keyboard__key_backspace'
}], [{
  code: 'Tab',
  ru: 'Tab',
  ruShift: 'Tab',
  eng: 'Tab',
  engShift: 'Tab',
  className: 'keyboard__key keyboard__key_tab'
}, {
  code: 'KeyQ',
  ru: 'й',
  ruShift: 'Й',
  eng: 'q',
  engShift: 'Q',
  className: 'keyboard__key'
}, {
  code: 'KeyW',
  ru: 'ц',
  ruShift: 'Ц',
  eng: 'w',
  engShift: 'W',
  className: 'keyboard__key'
}, {
  code: 'KeyE',
  ru: 'у',
  ruShift: 'У',
  eng: 'e',
  engShift: 'E',
  className: 'keyboard__key'
}, {
  code: 'KeyR',
  ru: 'к',
  ruShift: 'К',
  eng: 'r',
  engShift: 'R',
  className: 'keyboard__key'
}, {
  code: 'KeyT',
  ru: 'е',
  ruShift: 'Е',
  eng: 't',
  engShift: 'T',
  className: 'keyboard__key'
}, {
  code: 'KeyY',
  ru: 'н',
  ruShift: 'Н',
  eng: 'y',
  engShift: 'Y',
  className: 'keyboard__key'
}, {
  code: 'KeyU',
  ru: 'г',
  ruShift: 'Г',
  eng: 'u',
  engShift: 'U',
  className: 'keyboard__key'
}, {
  code: 'KeyI',
  ru: 'ш',
  ruShift: 'Ш',
  eng: 'i',
  engShift: 'I',
  className: 'keyboard__key'
}, {
  code: 'KeyO',
  ru: 'щ',
  ruShift: 'Щ',
  eng: 'o',
  engShift: 'O',
  className: 'keyboard__key'
}, {
  code: 'KeyP',
  ru: 'з',
  ruShift: 'З',
  eng: 'p',
  engShift: 'P',
  className: 'keyboard__key'
}, {
  code: 'BracketLeft',
  ru: 'х',
  ruShift: 'Х',
  eng: '[',
  engShift: '{',
  className: 'keyboard__key'
}, {
  code: 'BracketRight',
  ru: 'ъ',
  ruShift: 'Ъ',
  eng: ']',
  engShift: '}',
  className: 'keyboard__key'
}, {
  code: 'BrBackslash',
  ru: '/',
  ruShift: '|',
  eng: '/',
  engShift: '|',
  className: 'keyboard__key'
}], [{
  code: 'CapsLock',
  ru: 'CapsLock',
  ruShift: 'CapsLock',
  eng: 'CapsLock',
  engShift: 'CapsLock',
  className: 'keyboard__key keyboard__key_capsLock'
}, {
  code: 'KeyA',
  ru: 'ф',
  ruShift: 'Ф',
  eng: 'a',
  engShift: 'A',
  className: 'keyboard__key'
}, {
  code: 'KeyS',
  ru: 'ы',
  ruShift: 'Ы',
  eng: 's',
  engShift: 'S',
  className: 'keyboard__key'
}, {
  code: 'KeyD',
  ru: 'в',
  ruShift: 'В',
  eng: 'd',
  engShift: 'D',
  className: 'keyboard__key'
}, {
  code: 'KeyF',
  ru: 'а',
  ruShift: 'А',
  eng: 'f',
  engShift: 'F',
  className: 'keyboard__key'
}, {
  code: 'KeyG',
  ru: 'п',
  ruShift: 'П',
  eng: 'g',
  engShift: 'G',
  className: 'keyboard__key'
}, {
  code: 'KeyH',
  ru: 'р',
  ruShift: 'Р',
  eng: 'h',
  engShift: 'H',
  className: 'keyboard__key'
}, {
  code: 'KeyJ',
  ru: 'о',
  ruShift: 'О',
  eng: 'j',
  engShift: 'J',
  className: 'keyboard__key'
}, {
  code: 'KeyK',
  ru: 'л',
  ruShift: 'Л',
  eng: 'k',
  engShift: 'K',
  className: 'keyboard__key'
}, {
  code: 'KeyL',
  ru: 'д',
  ruShift: 'Д',
  eng: 'l',
  engShift: 'L',
  className: 'keyboard__key'
}, {
  code: 'Semicolon',
  ru: 'ж',
  ruShift: 'Ж',
  eng: ';',
  engShift: ':',
  className: 'keyboard__key'
}, {
  code: 'Quote',
  ru: 'э',
  ruShift: 'Э',
  eng: '"',
  engShift: '"',
  className: 'keyboard__key'
}, {
  code: 'Enter',
  ru: 'Enter',
  ruShift: 'Enter',
  eng: 'Enter',
  engShift: 'Enter',
  className: 'keyboard__key keyboard__key_еnter'
}], [{
  code: 'ShiftLeft',
  ru: 'Shift',
  ruShift: 'Shift',
  eng: 'Shift',
  engShift: 'Shift',
  className: 'keyboard__key keyboard__key_shift'
}, {
  code: 'KeyZ',
  ru: 'я',
  ruShift: 'Я',
  eng: 'z',
  engShift: 'Z',
  className: 'keyboard__key'
}, {
  code: 'KeyX',
  ru: 'ч',
  ruShift: 'Ч',
  eng: 'x',
  engShift: 'X',
  className: 'keyboard__key'
}, {
  code: 'KeyC',
  ru: 'с',
  ruShift: 'С',
  eng: 'c',
  engShift: 'C',
  className: 'keyboard__key'
}, {
  code: 'KeyV',
  ru: 'м',
  ruShift: 'М',
  eng: 'v',
  engShift: 'V',
  className: 'keyboard__key'
}, {
  code: 'KeyB',
  ru: 'и',
  ruShift: 'И',
  eng: 'b',
  engShift: 'B',
  className: 'keyboard__key'
}, {
  code: 'KeyN',
  ru: 'т',
  ruShift: 'Т',
  eng: 'n',
  engShift: 'N',
  className: 'keyboard__key'
}, {
  code: 'KeyM',
  ru: 'ь',
  ruShift: 'Ь',
  eng: 'm',
  engShift: 'M',
  className: 'keyboard__key'
}, {
  code: 'Comma',
  ru: 'б',
  ruShift: 'Б',
  eng: ',',
  engShift: '<',
  className: 'keyboard__key'
}, {
  code: 'Period',
  ru: 'ю',
  ruShift: 'Ю',
  eng: '.',
  engShift: '>',
  className: 'keyboard__key'
}, {
  code: 'Slash',
  ru: '.',
  ruShift: ',',
  eng: '/',
  engShift: '?',
  className: 'keyboard__key'
}, {
  code: 'ArrowUp',
  ru: '▲',
  ruShift: '▲',
  eng: '▲',
  engShift: '▲',
  className: 'keyboard__key'
}, {
  code: 'ShiftRight',
  ru: 'Shift',
  ruShift: 'Shift',
  eng: 'Shift',
  engShift: 'Shift',
  className: 'keyboard__key keyboard__key_shift'
}], [{
  code: 'ControlLeft',
  ru: 'Ctrl',
  ruShift: 'Ctrl',
  eng: 'Ctrl',
  engShift: 'Ctrl',
  className: 'keyboard__key'
}, {
  code: 'MetaLeft',
  ru: 'Win',
  ruShift: 'Win',
  eng: 'Win',
  engShift: 'Win',
  className: 'keyboard__key'
}, {
  code: 'AltLeft',
  ru: 'Alt',
  ruShift: 'Alt',
  eng: 'Alt',
  engShift: 'Alt',
  className: 'keyboard__key'
}, {
  code: 'Space',
  ru: ' ',
  ruShift: ' ',
  eng: ' ',
  engShift: ' ',
  className: 'keyboard__key keyboard__key_space'
}, {
  code: 'AltRight',
  ru: 'Alt',
  ruShift: 'Alt',
  eng: 'Alt',
  engShift: 'Alt',
  className: 'keyboard__key'
}, {
  code: 'ArrowLeft',
  ru: '◄',
  ruShift: '◄',
  eng: '◄',
  engShift: '◄',
  className: 'keyboard__key'
}, {
  code: 'ArrowDown',
  ru: '▼',
  ruShift: '▼',
  eng: '▼',
  engShift: '▼',
  className: 'keyboard__key'
}, {
  code: 'ArrowRight',
  ru: '►',
  ruShift: '►',
  eng: '►',
  engShift: '►',
  className: 'keyboard__key'
}, {
  code: 'ControlRight',
  ru: 'Ctrl',
  ruShift: 'Ctrl',
  eng: 'Ctrl',
  engShift: 'Ctrl',
  className: 'keyboard__key'
}]];
var IGNORE_CONTENT = ['AltLeft', 'ControlRight', 'ControlLeft', 'AltRight', 'MetaLeft', 'MetaRight', 'ShiftRight', 'ShiftLeft'];
var IGNORE_ACTION_BUTTONS = ['Shift', 'Tab', 'Ctrl', 'Alt', 'Win'];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/index */ "./src/constants/index.js");

var lang = localStorage.getItem('language') || 'ru';
var isCapslock = false;
var htmlBody = document.querySelector('body');
var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
var textarea = document.createElement('textarea');
textarea.className = 'textarea';
var keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(textarea);
wrapper.append(keyboard);

function addKeybordButtons() {
  for (var row = 0; row < _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"].length; row += 1) {
    var keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';
    keyboard.append(keyboardRow);

    for (var button = 0; button < _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row].length; button += 1) {
      var keyboardKey = document.createElement('div');
      keyboardKey.classList = _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row][button].className;
      keyboardKey.setAttribute('data-code', _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row][button].code);
      keyboardKey.setAttribute('data-ru', _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row][button].ru);
      keyboardKey.setAttribute('data-eng', _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row][button].eng);
      keyboardKey.setAttribute('data-shift-ru', _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row][button].ruShift);
      keyboardKey.setAttribute('data-shift-eng', _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row][button].engShift);
      keyboardKey.textContent = _constants_index__WEBPACK_IMPORTED_MODULE_0__["KEYS"][row][button][lang];
      keyboardRow.appendChild(keyboardKey);
    }
  }
}

addKeybordButtons();
htmlBody.append(wrapper);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/index.js ./src/style.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/style.css */"./src/style.css");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map