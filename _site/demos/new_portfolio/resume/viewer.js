/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localized = exports.animationStarted = exports.normalizeWheelEventDelta = exports.binarySearchFirstItem = exports.watchScroll = exports.scrollIntoView = exports.getOutputScale = exports.approximateFraction = exports.roundToDivide = exports.getVisibleElements = exports.parseQueryString = exports.noContextMenuHandler = exports.getPDFFileNameFromURL = exports.ProgressBar = exports.EventBus = exports.mozL10n = exports.RendererType = exports.cloneObj = exports.VERTICAL_PADDING = exports.SCROLLBAR_PADDING = exports.MAX_AUTO_SCALE = exports.UNKNOWN_SCALE = exports.MAX_SCALE = exports.MIN_SCALE = exports.DEFAULT_SCALE = exports.DEFAULT_SCALE_VALUE = exports.CSS_UNITS = undefined;

var _pdfjs = __webpack_require__(1);

var CSS_UNITS = 96.0 / 72.0;
var DEFAULT_SCALE_VALUE = 'auto';
var DEFAULT_SCALE = 1.0;
var MIN_SCALE = 0.25;
var MAX_SCALE = 10.0;
var UNKNOWN_SCALE = 0;
var MAX_AUTO_SCALE = 1.25;
var SCROLLBAR_PADDING = 40;
var VERTICAL_PADDING = 5;
var RendererType = {
  CANVAS: 'canvas',
  SVG: 'svg'
};
var mozL10n = typeof document !== 'undefined' ? document.mozL10n || document.webL10n : undefined;
_pdfjs.PDFJS.disableFullscreen = _pdfjs.PDFJS.disableFullscreen === undefined ? false : _pdfjs.PDFJS.disableFullscreen;
_pdfjs.PDFJS.useOnlyCssZoom = _pdfjs.PDFJS.useOnlyCssZoom === undefined ? false : _pdfjs.PDFJS.useOnlyCssZoom;
_pdfjs.PDFJS.maxCanvasPixels = _pdfjs.PDFJS.maxCanvasPixels === undefined ? 16777216 : _pdfjs.PDFJS.maxCanvasPixels;
_pdfjs.PDFJS.disableHistory = _pdfjs.PDFJS.disableHistory === undefined ? false : _pdfjs.PDFJS.disableHistory;
_pdfjs.PDFJS.disableTextLayer = _pdfjs.PDFJS.disableTextLayer === undefined ? false : _pdfjs.PDFJS.disableTextLayer;
_pdfjs.PDFJS.ignoreCurrentPositionOnZoom = _pdfjs.PDFJS.ignoreCurrentPositionOnZoom === undefined ? false : _pdfjs.PDFJS.ignoreCurrentPositionOnZoom;
{
  _pdfjs.PDFJS.locale = _pdfjs.PDFJS.locale === undefined && typeof navigator !== 'undefined' ? navigator.language : _pdfjs.PDFJS.locale;
}
function getOutputScale(ctx) {
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  var pixelRatio = devicePixelRatio / backingStoreRatio;
  return {
    sx: pixelRatio,
    sy: pixelRatio,
    scaled: pixelRatio !== 1
  };
}
function scrollIntoView(element, spot, skipOverflowHiddenElements) {
  var parent = element.offsetParent;
  if (!parent) {
    console.error('offsetParent is not set -- cannot scroll');
    return;
  }
  var checkOverflow = skipOverflowHiddenElements || false;
  var offsetY = element.offsetTop + element.clientTop;
  var offsetX = element.offsetLeft + element.clientLeft;
  while (parent.clientHeight === parent.scrollHeight || checkOverflow && getComputedStyle(parent).overflow === 'hidden') {
    if (parent.dataset._scaleY) {
      offsetY /= parent.dataset._scaleY;
      offsetX /= parent.dataset._scaleX;
    }
    offsetY += parent.offsetTop;
    offsetX += parent.offsetLeft;
    parent = parent.offsetParent;
    if (!parent) {
      return;
    }
  }
  if (spot) {
    if (spot.top !== undefined) {
      offsetY += spot.top;
    }
    if (spot.left !== undefined) {
      offsetX += spot.left;
      parent.scrollLeft = offsetX;
    }
  }
  parent.scrollTop = offsetY;
}
function watchScroll(viewAreaElement, callback) {
  var debounceScroll = function debounceScroll(evt) {
    if (rAF) {
      return;
    }
    rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
      rAF = null;
      var currentY = viewAreaElement.scrollTop;
      var lastY = state.lastY;
      if (currentY !== lastY) {
        state.down = currentY > lastY;
      }
      state.lastY = currentY;
      callback(state);
    });
  };
  var state = {
    down: true,
    lastY: viewAreaElement.scrollTop,
    _eventHandler: debounceScroll
  };
  var rAF = null;
  viewAreaElement.addEventListener('scroll', debounceScroll, true);
  return state;
}
function parseQueryString(query) {
  var parts = query.split('&');
  var params = {};
  for (var i = 0, ii = parts.length; i < ii; ++i) {
    var param = parts[i].split('=');
    var key = param[0].toLowerCase();
    var value = param.length > 1 ? param[1] : null;
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  }
  return params;
}
function binarySearchFirstItem(items, condition) {
  var minIndex = 0;
  var maxIndex = items.length - 1;
  if (items.length === 0 || !condition(items[maxIndex])) {
    return items.length;
  }
  if (condition(items[minIndex])) {
    return minIndex;
  }
  while (minIndex < maxIndex) {
    var currentIndex = minIndex + maxIndex >> 1;
    var currentItem = items[currentIndex];
    if (condition(currentItem)) {
      maxIndex = currentIndex;
    } else {
      minIndex = currentIndex + 1;
    }
  }
  return minIndex;
}
function approximateFraction(x) {
  if (Math.floor(x) === x) {
    return [x, 1];
  }
  var xinv = 1 / x;
  var limit = 8;
  if (xinv > limit) {
    return [1, limit];
  } else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }
  var x_ = x > 1 ? xinv : x;
  var a = 0,
      b = 1,
      c = 1,
      d = 1;
  while (true) {
    var p = a + c,
        q = b + d;
    if (q > limit) {
      break;
    }
    if (x_ <= p / q) {
      c = p;
      d = q;
    } else {
      a = p;
      b = q;
    }
  }
  var result;
  if (x_ - a / b < c / d - x_) {
    result = x_ === x ? [a, b] : [b, a];
  } else {
    result = x_ === x ? [c, d] : [d, c];
  }
  return result;
}
function roundToDivide(x, div) {
  var r = x % div;
  return r === 0 ? x : Math.round(x - r + div);
}
function getVisibleElements(scrollEl, views, sortByVisibility) {
  var top = scrollEl.scrollTop,
      bottom = top + scrollEl.clientHeight;
  var left = scrollEl.scrollLeft,
      right = left + scrollEl.clientWidth;
  function isElementBottomBelowViewTop(view) {
    var element = view.div;
    var elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
    return elementBottom > top;
  }
  var visible = [],
      view,
      element;
  var currentHeight, viewHeight, hiddenHeight, percentHeight;
  var currentWidth, viewWidth;
  var firstVisibleElementInd = views.length === 0 ? 0 : binarySearchFirstItem(views, isElementBottomBelowViewTop);
  for (var i = firstVisibleElementInd, ii = views.length; i < ii; i++) {
    view = views[i];
    element = view.div;
    currentHeight = element.offsetTop + element.clientTop;
    viewHeight = element.clientHeight;
    if (currentHeight > bottom) {
      break;
    }
    currentWidth = element.offsetLeft + element.clientLeft;
    viewWidth = element.clientWidth;
    if (currentWidth + viewWidth < left || currentWidth > right) {
      continue;
    }
    hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, currentHeight + viewHeight - bottom);
    percentHeight = (viewHeight - hiddenHeight) * 100 / viewHeight | 0;
    visible.push({
      id: view.id,
      x: currentWidth,
      y: currentHeight,
      view: view,
      percent: percentHeight
    });
  }
  var first = visible[0];
  var last = visible[visible.length - 1];
  if (sortByVisibility) {
    visible.sort(function (a, b) {
      var pc = a.percent - b.percent;
      if (Math.abs(pc) > 0.001) {
        return -pc;
      }
      return a.id - b.id;
    });
  }
  return {
    first: first,
    last: last,
    views: visible
  };
}
function noContextMenuHandler(e) {
  e.preventDefault();
}
function isDataSchema(url) {
  var i = 0,
      ii = url.length;
  while (i < ii && url[i].trim() === '') {
    i++;
  }
  return url.substr(i, 5).toLowerCase() === 'data:';
}
function getPDFFileNameFromURL(url) {
  var defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'document.pdf';

  if (isDataSchema(url)) {
    console.warn('getPDFFileNameFromURL: ' + 'ignoring "data:" URL for performance reasons.');
    return defaultFilename;
  }
  var reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  var reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  var splitURI = reURI.exec(url);
  var suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
  if (suggestedFilename) {
    suggestedFilename = suggestedFilename[0];
    if (suggestedFilename.indexOf('%') !== -1) {
      try {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } catch (e) {}
    }
  }
  return suggestedFilename || defaultFilename;
}
function normalizeWheelEventDelta(evt) {
  var delta = Math.sqrt(evt.deltaX * evt.deltaX + evt.deltaY * evt.deltaY);
  var angle = Math.atan2(evt.deltaY, evt.deltaX);
  if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
    delta = -delta;
  }
  var MOUSE_DOM_DELTA_PIXEL_MODE = 0;
  var MOUSE_DOM_DELTA_LINE_MODE = 1;
  var MOUSE_PIXELS_PER_LINE = 30;
  var MOUSE_LINES_PER_PAGE = 30;
  if (evt.deltaMode === MOUSE_DOM_DELTA_PIXEL_MODE) {
    delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
  } else if (evt.deltaMode === MOUSE_DOM_DELTA_LINE_MODE) {
    delta /= MOUSE_LINES_PER_PAGE;
  }
  return delta;
}
function cloneObj(obj) {
  var result = {};
  for (var i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      result[i] = obj[i];
    }
  }
  return result;
}
var animationStarted = new Promise(function (resolve) {
  window.requestAnimationFrame(resolve);
});
var localized = new Promise(function (resolve, reject) {
  if (!mozL10n) {
    resolve();
    return;
  }
  if (mozL10n.getReadyState() !== 'loading') {
    resolve();
    return;
  }
  window.addEventListener('localized', function localized(evt) {
    resolve();
  });
});
var EventBus = function EventBusClosure() {
  function EventBus() {
    this._listeners = Object.create(null);
  }
  EventBus.prototype = {
    on: function EventBus_on(eventName, listener) {
      var eventListeners = this._listeners[eventName];
      if (!eventListeners) {
        eventListeners = [];
        this._listeners[eventName] = eventListeners;
      }
      eventListeners.push(listener);
    },
    off: function EventBus_on(eventName, listener) {
      var eventListeners = this._listeners[eventName];
      var i;
      if (!eventListeners || (i = eventListeners.indexOf(listener)) < 0) {
        return;
      }
      eventListeners.splice(i, 1);
    },
    dispatch: function EventBus_dispath(eventName) {
      var eventListeners = this._listeners[eventName];
      if (!eventListeners || eventListeners.length === 0) {
        return;
      }
      var args = Array.prototype.slice.call(arguments, 1);
      eventListeners.slice(0).forEach(function (listener) {
        listener.apply(null, args);
      });
    }
  };
  return EventBus;
}();
var ProgressBar = function ProgressBarClosure() {
  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }
  function ProgressBar(id, opts) {
    this.visible = true;
    this.div = document.querySelector(id + ' .progress');
    this.bar = this.div.parentNode;
    this.height = opts.height || 100;
    this.width = opts.width || 100;
    this.units = opts.units || '%';
    this.div.style.height = this.height + this.units;
    this.percent = 0;
  }
  ProgressBar.prototype = {
    updateBar: function ProgressBar_updateBar() {
      if (this._indeterminate) {
        this.div.classList.add('indeterminate');
        this.div.style.width = this.width + this.units;
        return;
      }
      this.div.classList.remove('indeterminate');
      var progressSize = this.width * this._percent / 100;
      this.div.style.width = progressSize + this.units;
    },
    get percent() {
      return this._percent;
    },
    set percent(val) {
      this._indeterminate = isNaN(val);
      this._percent = clamp(val, 0, 100);
      this.updateBar();
    },
    setWidth: function ProgressBar_setWidth(viewer) {
      if (viewer) {
        var container = viewer.parentNode;
        var scrollbarWidth = container.offsetWidth - viewer.offsetWidth;
        if (scrollbarWidth > 0) {
          this.bar.setAttribute('style', 'width: calc(100% - ' + scrollbarWidth + 'px);');
        }
      }
    },
    hide: function ProgressBar_hide() {
      if (!this.visible) {
        return;
      }
      this.visible = false;
      this.bar.classList.add('hidden');
      document.body.classList.remove('loadingInProgress');
    },
    show: function ProgressBar_show() {
      if (this.visible) {
        return;
      }
      this.visible = true;
      document.body.classList.add('loadingInProgress');
      this.bar.classList.remove('hidden');
    }
  };
  return ProgressBar;
}();
exports.CSS_UNITS = CSS_UNITS;
exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
exports.DEFAULT_SCALE = DEFAULT_SCALE;
exports.MIN_SCALE = MIN_SCALE;
exports.MAX_SCALE = MAX_SCALE;
exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
exports.VERTICAL_PADDING = VERTICAL_PADDING;
exports.cloneObj = cloneObj;
exports.RendererType = RendererType;
exports.mozL10n = mozL10n;
exports.EventBus = EventBus;
exports.ProgressBar = ProgressBar;
exports.getPDFFileNameFromURL = getPDFFileNameFromURL;
exports.noContextMenuHandler = noContextMenuHandler;
exports.parseQueryString = parseQueryString;
exports.getVisibleElements = getVisibleElements;
exports.roundToDivide = roundToDivide;
exports.approximateFraction = approximateFraction;
exports.getOutputScale = getOutputScale;
exports.scrollIntoView = scrollIntoView;
exports.watchScroll = watchScroll;
exports.binarySearchFirstItem = binarySearchFirstItem;
exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
exports.animationStarted = animationStarted;
exports.localized = localized;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
  var pdfjsLib;
  if (typeof __pdfjsdev_webpack__ === 'undefined') {
    if (typeof window !== 'undefined' && window['pdfjs-dist/build/pdf']) {
      pdfjsLib = window['pdfjs-dist/build/pdf'];
    } else if (typeof require === 'function') {
      pdfjsLib = require('../build/pdf.js');
    } else {
      throw new Error('Neither `require` nor `window` found');
    }
  }
  module.exports = pdfjsLib;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalEventBus = exports.attachDOMEventsToEventBus = undefined;

var _ui_utils = __webpack_require__(0);

function attachDOMEventsToEventBus(eventBus) {
  eventBus.on('documentload', function () {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('documentload', true, true, {});
    window.dispatchEvent(event);
  });
  eventBus.on('pagerendered', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('pagerendered', true, true, {
      pageNumber: e.pageNumber,
      cssTransform: e.cssTransform
    });
    e.source.div.dispatchEvent(event);
  });
  eventBus.on('textlayerrendered', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('textlayerrendered', true, true, { pageNumber: e.pageNumber });
    e.source.textLayerDiv.dispatchEvent(event);
  });
  eventBus.on('pagechange', function (e) {
    var event = document.createEvent('UIEvents');
    event.initUIEvent('pagechange', true, true, window, 0);
    event.pageNumber = e.pageNumber;
    e.source.container.dispatchEvent(event);
  });
  eventBus.on('pagesinit', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('pagesinit', true, true, null);
    e.source.container.dispatchEvent(event);
  });
  eventBus.on('pagesloaded', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('pagesloaded', true, true, { pagesCount: e.pagesCount });
    e.source.container.dispatchEvent(event);
  });
  eventBus.on('scalechange', function (e) {
    var event = document.createEvent('UIEvents');
    event.initUIEvent('scalechange', true, true, window, 0);
    event.scale = e.scale;
    event.presetValue = e.presetValue;
    e.source.container.dispatchEvent(event);
  });
  eventBus.on('updateviewarea', function (e) {
    var event = document.createEvent('UIEvents');
    event.initUIEvent('updateviewarea', true, true, window, 0);
    event.location = e.location;
    e.source.container.dispatchEvent(event);
  });
  eventBus.on('find', function (e) {
    if (e.source === window) {
      return;
    }
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('find' + e.type, true, true, {
      query: e.query,
      phraseSearch: e.phraseSearch,
      caseSensitive: e.caseSensitive,
      highlightAll: e.highlightAll,
      findPrevious: e.findPrevious
    });
    window.dispatchEvent(event);
  });
  eventBus.on('attachmentsloaded', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('attachmentsloaded', true, true, { attachmentsCount: e.attachmentsCount });
    e.source.container.dispatchEvent(event);
  });
  eventBus.on('sidebarviewchanged', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('sidebarviewchanged', true, true, { view: e.view });
    e.source.outerContainer.dispatchEvent(event);
  });
  eventBus.on('pagemode', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('pagemode', true, true, { mode: e.mode });
    e.source.pdfViewer.container.dispatchEvent(event);
  });
  eventBus.on('namedaction', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('namedaction', true, true, { action: e.action });
    e.source.pdfViewer.container.dispatchEvent(event);
  });
  eventBus.on('presentationmodechanged', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('presentationmodechanged', true, true, {
      active: e.active,
      switchInProgress: e.switchInProgress
    });
    window.dispatchEvent(event);
  });
  eventBus.on('outlineloaded', function (e) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('outlineloaded', true, true, { outlineCount: e.outlineCount });
    e.source.container.dispatchEvent(event);
  });
}
var globalEventBus = null;
function getGlobalEventBus() {
  if (globalEventBus) {
    return globalEventBus;
  }
  globalEventBus = new _ui_utils.EventBus();
  attachDOMEventsToEventBus(globalEventBus);
  return globalEventBus;
}
exports.attachDOMEventsToEventBus = attachDOMEventsToEventBus;
exports.getGlobalEventBus = getGlobalEventBus;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLEANUP_TIMEOUT = 30000;
var RenderingStates = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
};

var PDFRenderingQueue = function () {
  function PDFRenderingQueue() {
    _classCallCheck(this, PDFRenderingQueue);

    this.pdfViewer = null;
    this.pdfThumbnailViewer = null;
    this.onIdle = null;
    this.highestPriorityPage = null;
    this.idleTimeout = null;
    this.printing = false;
    this.isThumbnailViewEnabled = false;
  }

  _createClass(PDFRenderingQueue, [{
    key: "setViewer",
    value: function setViewer(pdfViewer) {
      this.pdfViewer = pdfViewer;
    }
  }, {
    key: "setThumbnailViewer",
    value: function setThumbnailViewer(pdfThumbnailViewer) {
      this.pdfThumbnailViewer = pdfThumbnailViewer;
    }
  }, {
    key: "isHighestPriority",
    value: function isHighestPriority(view) {
      return this.highestPriorityPage === view.renderingId;
    }
  }, {
    key: "renderHighestPriority",
    value: function renderHighestPriority(currentlyVisiblePages) {
      if (this.idleTimeout) {
        clearTimeout(this.idleTimeout);
        this.idleTimeout = null;
      }
      if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
        return;
      }
      if (this.pdfThumbnailViewer && this.isThumbnailViewEnabled) {
        if (this.pdfThumbnailViewer.forceRendering()) {
          return;
        }
      }
      if (this.printing) {
        return;
      }
      if (this.onIdle) {
        this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
      }
    }
  }, {
    key: "getHighestPriority",
    value: function getHighestPriority(visible, views, scrolledDown) {
      var visibleViews = visible.views;
      var numVisible = visibleViews.length;
      if (numVisible === 0) {
        return false;
      }
      for (var i = 0; i < numVisible; ++i) {
        var view = visibleViews[i].view;
        if (!this.isViewFinished(view)) {
          return view;
        }
      }
      if (scrolledDown) {
        var nextPageIndex = visible.last.id;
        if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
          return views[nextPageIndex];
        }
      } else {
        var previousPageIndex = visible.first.id - 2;
        if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
          return views[previousPageIndex];
        }
      }
      return null;
    }
  }, {
    key: "isViewFinished",
    value: function isViewFinished(view) {
      return view.renderingState === RenderingStates.FINISHED;
    }
  }, {
    key: "renderView",
    value: function renderView(view) {
      var _this = this;

      switch (view.renderingState) {
        case RenderingStates.FINISHED:
          return false;
        case RenderingStates.PAUSED:
          this.highestPriorityPage = view.renderingId;
          view.resume();
          break;
        case RenderingStates.RUNNING:
          this.highestPriorityPage = view.renderingId;
          break;
        case RenderingStates.INITIAL:
          this.highestPriorityPage = view.renderingId;
          var continueRendering = function continueRendering() {
            _this.renderHighestPriority();
          };
          view.draw().then(continueRendering, continueRendering);
          break;
      }
      return true;
    }
  }]);

  return PDFRenderingQueue;
}();

exports.RenderingStates = RenderingStates;
exports.PDFRenderingQueue = PDFRenderingQueue;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OverlayManager = {
  overlays: {},
  active: null,
  register: function register(name, element, callerCloseMethod, canForceClose) {
    var _this = this;

    return new Promise(function (resolve) {
      var container;
      if (!name || !element || !(container = element.parentNode)) {
        throw new Error('Not enough parameters.');
      } else if (_this.overlays[name]) {
        throw new Error('The overlay is already registered.');
      }
      _this.overlays[name] = {
        element: element,
        container: container,
        callerCloseMethod: callerCloseMethod || null,
        canForceClose: canForceClose || false
      };
      resolve();
    });
  },
  unregister: function unregister(name) {
    var _this2 = this;

    return new Promise(function (resolve) {
      if (!_this2.overlays[name]) {
        throw new Error('The overlay does not exist.');
      } else if (_this2.active === name) {
        throw new Error('The overlay cannot be removed while it is active.');
      }
      delete _this2.overlays[name];
      resolve();
    });
  },
  open: function open(name) {
    var _this3 = this;

    return new Promise(function (resolve) {
      if (!_this3.overlays[name]) {
        throw new Error('The overlay does not exist.');
      } else if (_this3.active) {
        if (_this3.overlays[name].canForceClose) {
          _this3._closeThroughCaller();
        } else if (_this3.active === name) {
          throw new Error('The overlay is already active.');
        } else {
          throw new Error('Another overlay is currently active.');
        }
      }
      _this3.active = name;
      _this3.overlays[_this3.active].element.classList.remove('hidden');
      _this3.overlays[_this3.active].container.classList.remove('hidden');
      window.addEventListener('keydown', _this3._keyDown);
      resolve();
    });
  },
  close: function close(name) {
    var _this4 = this;

    return new Promise(function (resolve) {
      if (!_this4.overlays[name]) {
        throw new Error('The overlay does not exist.');
      } else if (!_this4.active) {
        throw new Error('The overlay is currently not active.');
      } else if (_this4.active !== name) {
        throw new Error('Another overlay is currently active.');
      }
      _this4.overlays[_this4.active].container.classList.add('hidden');
      _this4.overlays[_this4.active].element.classList.add('hidden');
      _this4.active = null;
      window.removeEventListener('keydown', _this4._keyDown);
      resolve();
    });
  },
  _keyDown: function _keyDown(evt) {
    var self = OverlayManager;
    if (self.active && evt.keyCode === 27) {
      self._closeThroughCaller();
      evt.preventDefault();
    }
  },
  _closeThroughCaller: function _closeThroughCaller() {
    if (this.overlays[this.active].callerCloseMethod) {
      this.overlays[this.active].callerCloseMethod();
    }
    if (this.active) {
      this.close(this.active);
    }
  }
};
exports.OverlayManager = OverlayManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFPrintServiceFactory = exports.DefaultExternalServices = exports.PDFViewerApplication = undefined;

var _ui_utils = __webpack_require__(0);

var _pdfjs = __webpack_require__(1);

var _pdf_cursor_tools = __webpack_require__(7);

var _pdf_rendering_queue = __webpack_require__(3);

var _pdf_sidebar = __webpack_require__(22);

var _pdf_viewer = __webpack_require__(25);

var _dom_events = __webpack_require__(2);

var _overlay_manager = __webpack_require__(4);

var _password_prompt = __webpack_require__(14);

var _pdf_attachment_viewer = __webpack_require__(15);

var _pdf_document_properties = __webpack_require__(16);

var _pdf_find_bar = __webpack_require__(17);

var _pdf_find_controller = __webpack_require__(8);

var _pdf_history = __webpack_require__(18);

var _pdf_link_service = __webpack_require__(6);

var _pdf_outline_viewer = __webpack_require__(19);

var _pdf_presentation_mode = __webpack_require__(21);

var _pdf_thumbnail_viewer = __webpack_require__(24);

var _secondary_toolbar = __webpack_require__(27);

var _toolbar = __webpack_require__(29);

var _view_history = __webpack_require__(30);

var DEFAULT_SCALE_DELTA = 1.1;
var DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT = 5000;
function configure(PDFJS) {
  PDFJS.imageResourcesPath = './images/';
  PDFJS.workerSrc = '../build/pdf.worker.js';
  PDFJS.cMapUrl = '../web/cmaps/';
  PDFJS.cMapPacked = true;
}
var DefaultExternalServices = {
  updateFindControlState: function updateFindControlState(data) {},
  initPassiveLoading: function initPassiveLoading(callbacks) {},
  fallback: function fallback(data, callback) {},
  reportTelemetry: function reportTelemetry(data) {},
  createDownloadManager: function createDownloadManager() {
    throw new Error('Not implemented: createDownloadManager');
  },
  createPreferences: function createPreferences() {
    throw new Error('Not implemented: createPreferences');
  },

  supportsIntegratedFind: false,
  supportsDocumentFonts: true,
  supportsDocumentColors: true,
  supportedMouseWheelZoomModifierKeys: {
    ctrlKey: true,
    metaKey: true
  }
};
var PDFViewerApplication = {
  initialBookmark: document.location.hash.substring(1),
  initialDestination: null,
  initialized: false,
  fellback: false,
  appConfig: null,
  pdfDocument: null,
  pdfLoadingTask: null,
  printService: null,
  pdfViewer: null,
  pdfThumbnailViewer: null,
  pdfRenderingQueue: null,
  pdfPresentationMode: null,
  pdfDocumentProperties: null,
  pdfLinkService: null,
  pdfHistory: null,
  pdfSidebar: null,
  pdfOutlineViewer: null,
  pdfAttachmentViewer: null,
  pdfCursorTools: null,
  store: null,
  downloadManager: null,
  preferences: null,
  toolbar: null,
  secondaryToolbar: null,
  eventBus: null,
  pageRotation: 0,
  isInitialViewSet: false,
  viewerPrefs: {
    sidebarViewOnLoad: _pdf_sidebar.SidebarView.NONE,
    pdfBugEnabled: false,
    showPreviousViewOnLoad: true,
    defaultZoomValue: '',
    disablePageLabels: false,
    renderer: 'canvas',
    enhanceTextSelection: false,
    renderInteractiveForms: false,
    enablePrintAutoRotate: false
  },
  isViewerEmbedded: window.parent !== window,
  url: '',
  baseUrl: '',
  externalServices: DefaultExternalServices,
  initialize: function pdfViewInitialize(appConfig) {
    var _this = this;

    this.preferences = this.externalServices.createPreferences();
    configure(_pdfjs.PDFJS);
    this.appConfig = appConfig;
    return this._readPreferences().then(function () {
      return _this._initializeViewerComponents();
    }).then(function () {
      _this.bindEvents();
      _this.bindWindowEvents();
      _ui_utils.localized.then(function () {
        _this.eventBus.dispatch('localized');
      });
      if (_this.isViewerEmbedded && !_pdfjs.PDFJS.isExternalLinkTargetSet()) {
        _pdfjs.PDFJS.externalLinkTarget = _pdfjs.PDFJS.LinkTarget.TOP;
      }
      _this.initialized = true;
    });
  },
  _readPreferences: function _readPreferences() {
    var preferences = this.preferences,
        viewerPrefs = this.viewerPrefs;

    return Promise.all([preferences.get('enableWebGL').then(function resolved(value) {
      _pdfjs.PDFJS.disableWebGL = !value;
    }), preferences.get('sidebarViewOnLoad').then(function resolved(value) {
      viewerPrefs['sidebarViewOnLoad'] = value;
    }), preferences.get('pdfBugEnabled').then(function resolved(value) {
      viewerPrefs['pdfBugEnabled'] = value;
    }), preferences.get('showPreviousViewOnLoad').then(function resolved(value) {
      viewerPrefs['showPreviousViewOnLoad'] = value;
    }), preferences.get('defaultZoomValue').then(function resolved(value) {
      viewerPrefs['defaultZoomValue'] = value;
    }), preferences.get('enhanceTextSelection').then(function resolved(value) {
      viewerPrefs['enhanceTextSelection'] = value;
    }), preferences.get('disableTextLayer').then(function resolved(value) {
      if (_pdfjs.PDFJS.disableTextLayer === true) {
        return;
      }
      _pdfjs.PDFJS.disableTextLayer = value;
    }), preferences.get('disableRange').then(function resolved(value) {
      if (_pdfjs.PDFJS.disableRange === true) {
        return;
      }
      _pdfjs.PDFJS.disableRange = value;
    }), preferences.get('disableStream').then(function resolved(value) {
      if (_pdfjs.PDFJS.disableStream === true) {
        return;
      }
      _pdfjs.PDFJS.disableStream = value;
    }), preferences.get('disableAutoFetch').then(function resolved(value) {
      _pdfjs.PDFJS.disableAutoFetch = value;
    }), preferences.get('disableFontFace').then(function resolved(value) {
      if (_pdfjs.PDFJS.disableFontFace === true) {
        return;
      }
      _pdfjs.PDFJS.disableFontFace = value;
    }), preferences.get('useOnlyCssZoom').then(function resolved(value) {
      _pdfjs.PDFJS.useOnlyCssZoom = value;
    }), preferences.get('externalLinkTarget').then(function resolved(value) {
      if (_pdfjs.PDFJS.isExternalLinkTargetSet()) {
        return;
      }
      _pdfjs.PDFJS.externalLinkTarget = value;
    }), preferences.get('renderer').then(function resolved(value) {
      viewerPrefs['renderer'] = value;
    }), preferences.get('renderInteractiveForms').then(function resolved(value) {
      viewerPrefs['renderInteractiveForms'] = value;
    }), preferences.get('disablePageLabels').then(function resolved(value) {
      viewerPrefs['disablePageLabels'] = value;
    }), preferences.get('enablePrintAutoRotate').then(function resolved(value) {
      viewerPrefs['enablePrintAutoRotate'] = value;
    })]).catch(function (reason) {});
  },
  _initializeViewerComponents: function _initializeViewerComponents() {
    var _this2 = this;

    var appConfig = this.appConfig;
    return new Promise(function (resolve, reject) {
      var eventBus = appConfig.eventBus || (0, _dom_events.getGlobalEventBus)();
      _this2.eventBus = eventBus;
      var pdfRenderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
      pdfRenderingQueue.onIdle = _this2.cleanup.bind(_this2);
      _this2.pdfRenderingQueue = pdfRenderingQueue;
      var pdfLinkService = new _pdf_link_service.PDFLinkService({ eventBus: eventBus });
      _this2.pdfLinkService = pdfLinkService;
      var downloadManager = _this2.externalServices.createDownloadManager();
      _this2.downloadManager = downloadManager;
      var container = appConfig.mainContainer;
      var viewer = appConfig.viewerContainer;
      _this2.pdfViewer = new _pdf_viewer.PDFViewer({
        container: container,
        viewer: viewer,
        eventBus: eventBus,
        renderingQueue: pdfRenderingQueue,
        linkService: pdfLinkService,
        downloadManager: downloadManager,
        renderer: _this2.viewerPrefs['renderer'],
        enhanceTextSelection: _this2.viewerPrefs['enhanceTextSelection'],
        renderInteractiveForms: _this2.viewerPrefs['renderInteractiveForms'],
        enablePrintAutoRotate: _this2.viewerPrefs['enablePrintAutoRotate']
      });
      pdfRenderingQueue.setViewer(_this2.pdfViewer);
      pdfLinkService.setViewer(_this2.pdfViewer);
      var thumbnailContainer = appConfig.sidebar.thumbnailView;
      _this2.pdfThumbnailViewer = new _pdf_thumbnail_viewer.PDFThumbnailViewer({
        container: thumbnailContainer,
        renderingQueue: pdfRenderingQueue,
        linkService: pdfLinkService
      });
      pdfRenderingQueue.setThumbnailViewer(_this2.pdfThumbnailViewer);
      _this2.pdfHistory = new _pdf_history.PDFHistory({
        linkService: pdfLinkService,
        eventBus: eventBus
      });
      pdfLinkService.setHistory(_this2.pdfHistory);
      _this2.findController = new _pdf_find_controller.PDFFindController({ pdfViewer: _this2.pdfViewer });
      _this2.findController.onUpdateResultsCount = function (matchCount) {
        if (_this2.supportsIntegratedFind) {
          return;
        }
        _this2.findBar.updateResultsCount(matchCount);
      };
      _this2.findController.onUpdateState = function (state, previous, matchCount) {
        if (_this2.supportsIntegratedFind) {
          _this2.externalServices.updateFindControlState({
            result: state,
            findPrevious: previous
          });
        } else {
          _this2.findBar.updateUIState(state, previous, matchCount);
        }
      };
      _this2.pdfViewer.setFindController(_this2.findController);
      var findBarConfig = Object.create(appConfig.findBar);
      findBarConfig.findController = _this2.findController;
      findBarConfig.eventBus = eventBus;
      _this2.findBar = new _pdf_find_bar.PDFFindBar(findBarConfig);
      _this2.overlayManager = _overlay_manager.OverlayManager;
      _this2.pdfDocumentProperties = new _pdf_document_properties.PDFDocumentProperties(appConfig.documentProperties);
      _this2.pdfCursorTools = new _pdf_cursor_tools.PDFCursorTools({
        container: container,
        eventBus: eventBus,
        preferences: _this2.preferences
      });
      _this2.toolbar = new _toolbar.Toolbar(appConfig.toolbar, container, eventBus);
      _this2.secondaryToolbar = new _secondary_toolbar.SecondaryToolbar(appConfig.secondaryToolbar, container, eventBus);
      if (_this2.supportsFullscreen) {
        _this2.pdfPresentationMode = new _pdf_presentation_mode.PDFPresentationMode({
          container: container,
          viewer: viewer,
          pdfViewer: _this2.pdfViewer,
          eventBus: eventBus,
          contextMenuItems: appConfig.fullscreen
        });
      }
      _this2.passwordPrompt = new _password_prompt.PasswordPrompt(appConfig.passwordOverlay);
      _this2.pdfOutlineViewer = new _pdf_outline_viewer.PDFOutlineViewer({
        container: appConfig.sidebar.outlineView,
        eventBus: eventBus,
        linkService: pdfLinkService
      });
      _this2.pdfAttachmentViewer = new _pdf_attachment_viewer.PDFAttachmentViewer({
        container: appConfig.sidebar.attachmentsView,
        eventBus: eventBus,
        downloadManager: downloadManager
      });
      var sidebarConfig = Object.create(appConfig.sidebar);
      sidebarConfig.pdfViewer = _this2.pdfViewer;
      sidebarConfig.pdfThumbnailViewer = _this2.pdfThumbnailViewer;
      sidebarConfig.pdfOutlineViewer = _this2.pdfOutlineViewer;
      sidebarConfig.eventBus = eventBus;
      _this2.pdfSidebar = new _pdf_sidebar.PDFSidebar(sidebarConfig);
      _this2.pdfSidebar.onToggled = _this2.forceRendering.bind(_this2);
      resolve(undefined);
    });
  },

  run: function pdfViewRun(config) {
    this.initialize(config).then(webViewerInitialized);
  },
  zoomIn: function pdfViewZoomIn(ticks) {
    var newScale = this.pdfViewer.currentScale;
    do {
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(_ui_utils.MAX_SCALE, newScale);
    } while (--ticks > 0 && newScale < _ui_utils.MAX_SCALE);
    this.pdfViewer.currentScaleValue = newScale;
  },
  zoomOut: function pdfViewZoomOut(ticks) {
    var newScale = this.pdfViewer.currentScale;
    do {
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(_ui_utils.MIN_SCALE, newScale);
    } while (--ticks > 0 && newScale > _ui_utils.MIN_SCALE);
    this.pdfViewer.currentScaleValue = newScale;
  },
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  },
  set page(val) {
    this.pdfViewer.currentPageNumber = val;
  },
  get page() {
    return this.pdfViewer.currentPageNumber;
  },
  get printing() {
    return !!this.printService;
  },
  get supportsPrinting() {
    return PDFPrintServiceFactory.instance.supportsPrinting;
  },
  get supportsFullscreen() {
    var support;
    var doc = document.documentElement;
    support = !!(doc.requestFullscreen || doc.mozRequestFullScreen || doc.webkitRequestFullScreen || doc.msRequestFullscreen);
    if (document.fullscreenEnabled === false || document.mozFullScreenEnabled === false || document.webkitFullscreenEnabled === false || document.msFullscreenEnabled === false) {
      support = false;
    }
    if (support && _pdfjs.PDFJS.disableFullscreen === true) {
      support = false;
    }
    return (0, _pdfjs.shadow)(this, 'supportsFullscreen', support);
  },
  get supportsIntegratedFind() {
    return this.externalServices.supportsIntegratedFind;
  },
  get supportsDocumentFonts() {
    return this.externalServices.supportsDocumentFonts;
  },
  get supportsDocumentColors() {
    return this.externalServices.supportsDocumentColors;
  },
  get loadingBar() {
    var bar = new _ui_utils.ProgressBar('#loadingBar', {});
    return (0, _pdfjs.shadow)(this, 'loadingBar', bar);
  },
  get supportedMouseWheelZoomModifierKeys() {
    return this.externalServices.supportedMouseWheelZoomModifierKeys;
  },
  initPassiveLoading: function pdfViewInitPassiveLoading() {
    throw new Error('Not implemented: initPassiveLoading');
  },
  setTitleUsingUrl: function pdfViewSetTitleUsingUrl(url) {
    this.url = url;
    this.baseUrl = url.split('#')[0];
    var title = (0, _ui_utils.getPDFFileNameFromURL)(url, '');
    if (!title) {
      try {
        title = decodeURIComponent((0, _pdfjs.getFilenameFromUrl)(url)) || url;
      } catch (e) {
        title = url;
      }
    }
    this.setTitle(title);
  },
  setTitle: function pdfViewSetTitle(title) {
    if (this.isViewerEmbedded) {
      return;
    }
    document.title = title;
  },
  close: function pdfViewClose() {
    var errorWrapper = this.appConfig.errorWrapper.container;
    errorWrapper.setAttribute('hidden', 'true');
    if (!this.pdfLoadingTask) {
      return Promise.resolve();
    }
    var promise = this.pdfLoadingTask.destroy();
    this.pdfLoadingTask = null;
    if (this.pdfDocument) {
      this.pdfDocument = null;
      this.pdfThumbnailViewer.setDocument(null);
      this.pdfViewer.setDocument(null);
      this.pdfLinkService.setDocument(null, null);
      this.pdfDocumentProperties.setDocument(null, null);
    }
    this.store = null;
    this.isInitialViewSet = false;
    this.pdfSidebar.reset();
    this.pdfOutlineViewer.reset();
    this.pdfAttachmentViewer.reset();
    this.findController.reset();
    this.findBar.reset();
    this.toolbar.reset();
    this.secondaryToolbar.reset();
    if (typeof PDFBug !== 'undefined') {
      PDFBug.cleanup();
    }
    return promise;
  },
  open: function open(file, args) {
    var _this3 = this;

    if (arguments.length > 2 || typeof args === 'number') {
      return Promise.reject(new Error('Call of open() with obsolete signature.'));
    }
    if (this.pdfLoadingTask) {
      return this.close().then(function () {
        _this3.preferences.reload();
        return _this3.open(file, args);
      });
    }
    var parameters = Object.create(null),
        scale = void 0;
    if (typeof file === 'string') {
      this.setTitleUsingUrl(file);
      parameters.url = file;
    } else if (file && 'byteLength' in file) {
      parameters.data = file;
    } else if (file.url && file.originalUrl) {
      this.setTitleUsingUrl(file.originalUrl);
      parameters.url = file.url;
    }
    if (args) {
      for (var prop in args) {
        parameters[prop] = args[prop];
      }
      if (args.scale) {
        scale = args.scale;
      }
      if (args.length) {
        this.pdfDocumentProperties.setFileSize(args.length);
      }
    }
    this.downloadComplete = false;
    var loadingTask = (0, _pdfjs.getDocument)(parameters);
    this.pdfLoadingTask = loadingTask;
    loadingTask.onPassword = function (updateCallback, reason) {
      _this3.passwordPrompt.setUpdateCallback(updateCallback, reason);
      _this3.passwordPrompt.open();
    };
    loadingTask.onProgress = function (_ref) {
      var loaded = _ref.loaded,
          total = _ref.total;

      _this3.progress(loaded / total);
    };
    loadingTask.onUnsupportedFeature = this.fallback.bind(this);
    return loadingTask.promise.then(function (pdfDocument) {
      _this3.load(pdfDocument, scale);
    }, function (exception) {
      var message = exception && exception.message;
      var loadingErrorMessage = _ui_utils.mozL10n.get('loading_error', null, 'An error occurred while loading the PDF.');
      if (exception instanceof _pdfjs.InvalidPDFException) {
        loadingErrorMessage = _ui_utils.mozL10n.get('invalid_file_error', null, 'Invalid or corrupted PDF file.');
      } else if (exception instanceof _pdfjs.MissingPDFException) {
        loadingErrorMessage = _ui_utils.mozL10n.get('missing_file_error', null, 'Missing PDF file.');
      } else if (exception instanceof _pdfjs.UnexpectedResponseException) {
        loadingErrorMessage = _ui_utils.mozL10n.get('unexpected_response_error', null, 'Unexpected server response.');
      }
      _this3.error(loadingErrorMessage, { message: message });
      throw new Error(loadingErrorMessage);
    });
  },

  download: function pdfViewDownload() {
    function downloadByUrl() {
      downloadManager.downloadUrl(url, filename);
    }
    var url = this.baseUrl;
    var filename = (0, _ui_utils.getPDFFileNameFromURL)(this.url);
    var downloadManager = this.downloadManager;
    downloadManager.onerror = function (err) {
      PDFViewerApplication.error('PDF failed to download.');
    };
    if (!this.pdfDocument) {
      downloadByUrl();
      return;
    }
    if (!this.downloadComplete) {
      downloadByUrl();
      return;
    }
    this.pdfDocument.getData().then(function getDataSuccess(data) {
      var blob = (0, _pdfjs.createBlob)(data, 'application/pdf');
      downloadManager.download(blob, url, filename);
    }, downloadByUrl).then(null, downloadByUrl);
  },
  fallback: function pdfViewFallback(featureId) {},
  error: function pdfViewError(message, moreInfo) {
    var moreInfoText = _ui_utils.mozL10n.get('error_version_info', {
      version: _pdfjs.version || '?',
      build: _pdfjs.build || '?'
    }, 'PDF.js v{{version}} (build: {{build}})') + '\n';
    if (moreInfo) {
      moreInfoText += _ui_utils.mozL10n.get('error_message', { message: moreInfo.message }, 'Message: {{message}}');
      if (moreInfo.stack) {
        moreInfoText += '\n' + _ui_utils.mozL10n.get('error_stack', { stack: moreInfo.stack }, 'Stack: {{stack}}');
      } else {
        if (moreInfo.filename) {
          moreInfoText += '\n' + _ui_utils.mozL10n.get('error_file', { file: moreInfo.filename }, 'File: {{file}}');
        }
        if (moreInfo.lineNumber) {
          moreInfoText += '\n' + _ui_utils.mozL10n.get('error_line', { line: moreInfo.lineNumber }, 'Line: {{line}}');
        }
      }
    }
    var errorWrapperConfig = this.appConfig.errorWrapper;
    var errorWrapper = errorWrapperConfig.container;
    errorWrapper.removeAttribute('hidden');
    var errorMessage = errorWrapperConfig.errorMessage;
    errorMessage.textContent = message;
    var closeButton = errorWrapperConfig.closeButton;
    closeButton.onclick = function () {
      errorWrapper.setAttribute('hidden', 'true');
    };
    var errorMoreInfo = errorWrapperConfig.errorMoreInfo;
    var moreInfoButton = errorWrapperConfig.moreInfoButton;
    var lessInfoButton = errorWrapperConfig.lessInfoButton;
    moreInfoButton.onclick = function () {
      errorMoreInfo.removeAttribute('hidden');
      moreInfoButton.setAttribute('hidden', 'true');
      lessInfoButton.removeAttribute('hidden');
      errorMoreInfo.style.height = errorMoreInfo.scrollHeight + 'px';
    };
    lessInfoButton.onclick = function () {
      errorMoreInfo.setAttribute('hidden', 'true');
      moreInfoButton.removeAttribute('hidden');
      lessInfoButton.setAttribute('hidden', 'true');
    };
    moreInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    lessInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    closeButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    moreInfoButton.removeAttribute('hidden');
    lessInfoButton.setAttribute('hidden', 'true');
    errorMoreInfo.value = moreInfoText;
  },
  progress: function pdfViewProgress(level) {
    var _this4 = this;

    var percent = Math.round(level * 100);
    if (percent > this.loadingBar.percent || isNaN(percent)) {
      this.loadingBar.percent = percent;
      if (_pdfjs.PDFJS.disableAutoFetch && percent) {
        if (this.disableAutoFetchLoadingBarTimeout) {
          clearTimeout(this.disableAutoFetchLoadingBarTimeout);
          this.disableAutoFetchLoadingBarTimeout = null;
        }
        this.loadingBar.show();
        this.disableAutoFetchLoadingBarTimeout = setTimeout(function () {
          _this4.loadingBar.hide();
          _this4.disableAutoFetchLoadingBarTimeout = null;
        }, DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT);
      }
    }
  },
  load: function load(pdfDocument, scale) {
    var _this5 = this;

    scale = scale || _ui_utils.UNKNOWN_SCALE;
    this.pdfDocument = pdfDocument;
    pdfDocument.getDownloadInfo().then(function () {
      _this5.downloadComplete = true;
      _this5.loadingBar.hide();
      firstPagePromise.then(function () {
        _this5.eventBus.dispatch('documentload', { source: _this5 });
      });
    });
    this.toolbar.setPagesCount(pdfDocument.numPages, false);
    this.secondaryToolbar.setPagesCount(pdfDocument.numPages);
    var id = this.documentFingerprint = pdfDocument.fingerprint;
    var store = this.store = new _view_history.ViewHistory(id);
    var baseDocumentUrl = void 0;
    baseDocumentUrl = null;
    this.pdfLinkService.setDocument(pdfDocument, baseDocumentUrl);
    this.pdfDocumentProperties.setDocument(pdfDocument, this.url);
    var pdfViewer = this.pdfViewer;
    pdfViewer.currentScale = scale;
    pdfViewer.setDocument(pdfDocument);
    var firstPagePromise = pdfViewer.firstPagePromise;
    var pagesPromise = pdfViewer.pagesPromise;
    var onePageRendered = pdfViewer.onePageRendered;
    this.pageRotation = 0;
    var pdfThumbnailViewer = this.pdfThumbnailViewer;
    pdfThumbnailViewer.setDocument(pdfDocument);
    firstPagePromise.then(function (pdfPage) {
      _this5.loadingBar.setWidth(_this5.appConfig.viewerContainer);
      if (!_pdfjs.PDFJS.disableHistory && !_this5.isViewerEmbedded) {
        if (!_this5.viewerPrefs['showPreviousViewOnLoad']) {
          _this5.pdfHistory.clearHistoryState();
        }
        _this5.pdfHistory.initialize(_this5.documentFingerprint);
        if (_this5.pdfHistory.initialDestination) {
          _this5.initialDestination = _this5.pdfHistory.initialDestination;
        } else if (_this5.pdfHistory.initialBookmark) {
          _this5.initialBookmark = _this5.pdfHistory.initialBookmark;
        }
      }
      var initialParams = {
        destination: _this5.initialDestination,
        bookmark: _this5.initialBookmark,
        hash: null
      };
      var storedHash = _this5.viewerPrefs['defaultZoomValue'] ? 'zoom=' + _this5.viewerPrefs['defaultZoomValue'] : null;
      var sidebarView = _this5.viewerPrefs['sidebarViewOnLoad'];
      new Promise(function (resolve, reject) {
        if (!_this5.viewerPrefs['showPreviousViewOnLoad']) {
          resolve();
          return;
        }
        store.getMultiple({
          exists: false,
          page: '1',
          zoom: _ui_utils.DEFAULT_SCALE_VALUE,
          scrollLeft: '0',
          scrollTop: '0',
          sidebarView: _pdf_sidebar.SidebarView.NONE
        }).then(function (values) {
          if (!values.exists) {
            resolve();
            return;
          }
          storedHash = 'page=' + values.page + '&zoom=' + (_this5.viewerPrefs['defaultZoomValue'] || values.zoom) + ',' + values.scrollLeft + ',' + values.scrollTop;
          sidebarView = _this5.viewerPrefs['sidebarViewOnLoad'] || values.sidebarView | 0;
          resolve();
        }).catch(function () {
          resolve();
        });
      }).then(function () {
        _this5.setInitialView(storedHash, {
          sidebarView: sidebarView,
          scale: scale
        });
        initialParams.hash = storedHash;
        if (!_this5.isViewerEmbedded) {
          _this5.pdfViewer.focus();
        }
        return pagesPromise;
      }).then(function () {
        if (!initialParams.destination && !initialParams.bookmark && !initialParams.hash) {
          return;
        }
        if (_this5.hasEqualPageSizes) {
          return;
        }
        _this5.initialDestination = initialParams.destination;
        _this5.initialBookmark = initialParams.bookmark;
        _this5.pdfViewer.currentScaleValue = _this5.pdfViewer.currentScaleValue;
        _this5.setInitialView(initialParams.hash);
      });
    });
    pdfDocument.getPageLabels().then(function (labels) {
      if (!labels || _this5.viewerPrefs['disablePageLabels']) {
        return;
      }
      var i = 0,
          numLabels = labels.length;
      if (numLabels !== _this5.pagesCount) {
        console.error('The number of Page Labels does not match ' + 'the number of pages in the document.');
        return;
      }
      while (i < numLabels && labels[i] === (i + 1).toString()) {
        i++;
      }
      if (i === numLabels) {
        return;
      }
      pdfViewer.setPageLabels(labels);
      pdfThumbnailViewer.setPageLabels(labels);
      _this5.toolbar.setPagesCount(pdfDocument.numPages, true);
      _this5.toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);
    });
    pagesPromise.then(function () {
      if (!_this5.supportsPrinting) {
        return;
      }
      pdfDocument.getJavaScript().then(function (javaScript) {
        if (javaScript.length) {
          console.warn('Warning: JavaScript is not supported');
          _this5.fallback(_pdfjs.UNSUPPORTED_FEATURES.javaScript);
        }
        var regex = /\bprint\s*\(/;
        for (var i = 0, ii = javaScript.length; i < ii; i++) {
          var js = javaScript[i];
          if (js && regex.test(js)) {
            setTimeout(function () {
              window.print();
            });
            return;
          }
        }
      });
    });
    Promise.all([onePageRendered, _ui_utils.animationStarted]).then(function () {
      pdfDocument.getOutline().then(function (outline) {
        _this5.pdfOutlineViewer.render({ outline: outline });
      });
      pdfDocument.getAttachments().then(function (attachments) {
        _this5.pdfAttachmentViewer.render({ attachments: attachments });
      });
    });
    pdfDocument.getMetadata().then(function (_ref2) {
      var info = _ref2.info,
          metadata = _ref2.metadata;

      _this5.documentInfo = info;
      _this5.metadata = metadata;
      console.log('PDF ' + pdfDocument.fingerprint + ' [' + info.PDFFormatVersion + ' ' + (info.Producer || '-').trim() + ' / ' + (info.Creator || '-').trim() + ']' + ' (PDF.js: ' + (_pdfjs.version || '-') + (!_pdfjs.PDFJS.disableWebGL ? ' [WebGL]' : '') + ')');
      var pdfTitle = void 0;
      if (metadata && metadata.has('dc:title')) {
        var title = metadata.get('dc:title');
        if (title !== 'Untitled') {
          pdfTitle = title;
        }
      }
      if (!pdfTitle && info && info['Title']) {
        pdfTitle = info['Title'];
      }
      if (pdfTitle) {
        _this5.setTitle(pdfTitle + ' - ' + document.title);
      }
      if (info.IsAcroFormPresent) {
        console.warn('Warning: AcroForm/XFA is not supported');
        _this5.fallback(_pdfjs.UNSUPPORTED_FEATURES.forms);
      }
    });
  },
  setInitialView: function setInitialView(storedHash) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$scale = options.scale,
        scale = _options$scale === undefined ? 0 : _options$scale,
        _options$sidebarView = options.sidebarView,
        sidebarView = _options$sidebarView === undefined ? _pdf_sidebar.SidebarView.NONE : _options$sidebarView;

    this.isInitialViewSet = true;
    this.pdfSidebar.setInitialView(sidebarView);
    if (this.initialDestination) {
      this.pdfLinkService.navigateTo(this.initialDestination);
      this.initialDestination = null;
    } else if (this.initialBookmark) {
      this.pdfLinkService.setHash(this.initialBookmark);
      this.pdfHistory.push({ hash: this.initialBookmark }, true);
      this.initialBookmark = null;
    } else if (storedHash) {
      this.pdfLinkService.setHash(storedHash);
    } else if (scale) {
      this.pdfViewer.currentScaleValue = scale;
      this.page = 1;
    }
    this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel);
    this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber);
    if (!this.pdfViewer.currentScaleValue) {
      this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
    }
  },

  cleanup: function pdfViewCleanup() {
    if (!this.pdfDocument) {
      return;
    }
    this.pdfViewer.cleanup();
    this.pdfThumbnailViewer.cleanup();
    if (this.pdfViewer.renderer !== _ui_utils.RendererType.SVG) {
      this.pdfDocument.cleanup();
    }
  },
  forceRendering: function pdfViewForceRendering() {
    this.pdfRenderingQueue.printing = this.printing;
    this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible;
    this.pdfRenderingQueue.renderHighestPriority();
  },
  beforePrint: function pdfViewSetupBeforePrint() {
    if (this.printService) {
      return;
    }
    if (!this.supportsPrinting) {
      var printMessage = _ui_utils.mozL10n.get('printing_not_supported', null, 'Warning: Printing is not fully supported by this browser.');
      this.error(printMessage);
      return;
    }
    if (!this.pdfViewer.pageViewsReady) {
      var notReadyMessage = _ui_utils.mozL10n.get('printing_not_ready', null, 'Warning: The PDF is not fully loaded for printing.');
      window.alert(notReadyMessage);
      return;
    }
    var pagesOverview = this.pdfViewer.getPagesOverview();
    var printContainer = this.appConfig.printContainer;
    var printService = PDFPrintServiceFactory.instance.createPrintService(this.pdfDocument, pagesOverview, printContainer);
    this.printService = printService;
    this.forceRendering();
    printService.layout();
  },
  get hasEqualPageSizes() {
    var firstPage = this.pdfViewer.getPageView(0);
    for (var i = 1, ii = this.pagesCount; i < ii; ++i) {
      var pageView = this.pdfViewer.getPageView(i);
      if (pageView.width !== firstPage.width || pageView.height !== firstPage.height) {
        return false;
      }
    }
    return true;
  },
  afterPrint: function pdfViewSetupAfterPrint() {
    if (this.printService) {
      this.printService.destroy();
      this.printService = null;
    }
    this.forceRendering();
  },
  rotatePages: function pdfViewRotatePages(delta) {
    var pageNumber = this.page;
    this.pageRotation = (this.pageRotation + 360 + delta) % 360;
    this.pdfViewer.pagesRotation = this.pageRotation;
    this.pdfThumbnailViewer.pagesRotation = this.pageRotation;
    this.forceRendering();
    this.pdfViewer.currentPageNumber = pageNumber;
  },
  requestPresentationMode: function pdfViewRequestPresentationMode() {
    if (!this.pdfPresentationMode) {
      return;
    }
    this.pdfPresentationMode.request();
  },
  bindEvents: function pdfViewBindEvents() {
    var eventBus = this.eventBus;
    eventBus.on('resize', webViewerResize);
    eventBus.on('hashchange', webViewerHashchange);
    eventBus.on('beforeprint', this.beforePrint.bind(this));
    eventBus.on('afterprint', this.afterPrint.bind(this));
    eventBus.on('pagerendered', webViewerPageRendered);
    eventBus.on('textlayerrendered', webViewerTextLayerRendered);
    eventBus.on('updateviewarea', webViewerUpdateViewarea);
    eventBus.on('pagechanging', webViewerPageChanging);
    eventBus.on('scalechanging', webViewerScaleChanging);
    eventBus.on('sidebarviewchanged', webViewerSidebarViewChanged);
    eventBus.on('pagemode', webViewerPageMode);
    eventBus.on('namedaction', webViewerNamedAction);
    eventBus.on('presentationmodechanged', webViewerPresentationModeChanged);
    eventBus.on('presentationmode', webViewerPresentationMode);
    eventBus.on('openfile', webViewerOpenFile);
    eventBus.on('print', webViewerPrint);
    eventBus.on('download', webViewerDownload);
    eventBus.on('firstpage', webViewerFirstPage);
    eventBus.on('lastpage', webViewerLastPage);
    eventBus.on('nextpage', webViewerNextPage);
    eventBus.on('previouspage', webViewerPreviousPage);
    eventBus.on('zoomin', webViewerZoomIn);
    eventBus.on('zoomout', webViewerZoomOut);
    eventBus.on('pagenumberchanged', webViewerPageNumberChanged);
    eventBus.on('scalechanged', webViewerScaleChanged);
    eventBus.on('rotatecw', webViewerRotateCw);
    eventBus.on('rotateccw', webViewerRotateCcw);
    eventBus.on('documentproperties', webViewerDocumentProperties);
    eventBus.on('find', webViewerFind);
    eventBus.on('findfromurlhash', webViewerFindFromUrlHash);
    eventBus.on('fileinputchange', webViewerFileInputChange);
  },
  bindWindowEvents: function pdfViewBindWindowEvents() {
    var eventBus = this.eventBus;
    window.addEventListener('wheel', webViewerWheel);
    window.addEventListener('click', webViewerClick);
    window.addEventListener('keydown', webViewerKeyDown);
    window.addEventListener('resize', function windowResize() {
      eventBus.dispatch('resize');
    });
    window.addEventListener('hashchange', function windowHashChange() {
      eventBus.dispatch('hashchange', { hash: document.location.hash.substring(1) });
    });
    window.addEventListener('beforeprint', function windowBeforePrint() {
      eventBus.dispatch('beforeprint');
    });
    window.addEventListener('afterprint', function windowAfterPrint() {
      eventBus.dispatch('afterprint');
    });
    window.addEventListener('change', function windowChange(evt) {
      var files = evt.target.files;
      if (!files || files.length === 0) {
        return;
      }
      eventBus.dispatch('fileinputchange', { fileInput: evt.target });
    });
  }
};
var validateFileURL;
{
  var HOSTED_VIEWER_ORIGINS = ['null', 'http://mozilla.github.io', 'https://mozilla.github.io'];
  validateFileURL = function validateFileURL(file) {
    try {
      var viewerOrigin = new URL(window.location.href).origin || 'null';
      if (HOSTED_VIEWER_ORIGINS.indexOf(viewerOrigin) >= 0) {
        return;
      }
      var fileOrigin = new URL(file, window.location.href).origin;
      if (fileOrigin !== viewerOrigin) {
        throw new Error('file origin does not match viewer\'s');
      }
    } catch (e) {
      var message = e && e.message;
      var loadingErrorMessage = _ui_utils.mozL10n.get('loading_error', null, 'An error occurred while loading the PDF.');
      var moreInfo = { message: message };
      PDFViewerApplication.error(loadingErrorMessage, moreInfo);
      throw e;
    }
  };
}
function loadAndEnablePDFBug(enabledTabs) {
  return new Promise(function (resolve, reject) {
    var appConfig = PDFViewerApplication.appConfig;
    var script = document.createElement('script');
    script.src = appConfig.debuggerScriptPath;
    script.onload = function () {
      PDFBug.enable(enabledTabs);
      PDFBug.init({
        PDFJS: _pdfjs.PDFJS,
        OPS: _pdfjs.OPS
      }, appConfig.mainContainer);
      resolve();
    };
    script.onerror = function () {
      reject(new Error('Cannot load debugger at ' + script.src));
    };
    (document.getElementsByTagName('head')[0] || document.body).appendChild(script);
  });
}
function webViewerInitialized() {
  var appConfig = PDFViewerApplication.appConfig;
  var file;
  var queryString = document.location.search.substring(1);
  var params = (0, _ui_utils.parseQueryString)(queryString);
  file = 'file' in params ? params.file : appConfig.defaultUrl;
  validateFileURL(file);
  var waitForBeforeOpening = [];
  var fileInput = document.createElement('input');
  fileInput.id = appConfig.openFileInputName;
  fileInput.className = 'fileInput';
  fileInput.setAttribute('type', 'file');
  fileInput.oncontextmenu = _ui_utils.noContextMenuHandler;
  document.body.appendChild(fileInput);
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    appConfig.toolbar.openFile.setAttribute('hidden', 'true');
    appConfig.secondaryToolbar.openFileButton.setAttribute('hidden', 'true');
  } else {
    fileInput.value = null;
  }
  if (PDFViewerApplication.viewerPrefs['pdfBugEnabled']) {
    var hash = document.location.hash.substring(1);
    var hashParams = (0, _ui_utils.parseQueryString)(hash);
    if ('disableworker' in hashParams) {
      _pdfjs.PDFJS.disableWorker = hashParams['disableworker'] === 'true';
    }
    if ('disablerange' in hashParams) {
      _pdfjs.PDFJS.disableRange = hashParams['disablerange'] === 'true';
    }
    if ('disablestream' in hashParams) {
      _pdfjs.PDFJS.disableStream = hashParams['disablestream'] === 'true';
    }
    if ('disableautofetch' in hashParams) {
      _pdfjs.PDFJS.disableAutoFetch = hashParams['disableautofetch'] === 'true';
    }
    if ('disablefontface' in hashParams) {
      _pdfjs.PDFJS.disableFontFace = hashParams['disablefontface'] === 'true';
    }
    if ('disablehistory' in hashParams) {
      _pdfjs.PDFJS.disableHistory = hashParams['disablehistory'] === 'true';
    }
    if ('webgl' in hashParams) {
      _pdfjs.PDFJS.disableWebGL = hashParams['webgl'] !== 'true';
    }
    if ('useonlycsszoom' in hashParams) {
      _pdfjs.PDFJS.useOnlyCssZoom = hashParams['useonlycsszoom'] === 'true';
    }
    if ('verbosity' in hashParams) {
      _pdfjs.PDFJS.verbosity = hashParams['verbosity'] | 0;
    }
    if ('ignorecurrentpositiononzoom' in hashParams) {
      _pdfjs.PDFJS.ignoreCurrentPositionOnZoom = hashParams['ignorecurrentpositiononzoom'] === 'true';
    }
    if ('locale' in hashParams) {
      _pdfjs.PDFJS.locale = hashParams['locale'];
    }
    if ('textlayer' in hashParams) {
      switch (hashParams['textlayer']) {
        case 'off':
          _pdfjs.PDFJS.disableTextLayer = true;
          break;
        case 'visible':
        case 'shadow':
        case 'hover':
          var viewer = appConfig.viewerContainer;
          viewer.classList.add('textLayer-' + hashParams['textlayer']);
          break;
      }
    }
    if ('pdfbug' in hashParams) {
      _pdfjs.PDFJS.pdfBug = true;
      var pdfBug = hashParams['pdfbug'];
      var enabled = pdfBug.split(',');
      waitForBeforeOpening.push(loadAndEnablePDFBug(enabled));
    }
  }
  _ui_utils.mozL10n.setLanguage(_pdfjs.PDFJS.locale);
  if (!PDFViewerApplication.supportsPrinting) {
    appConfig.toolbar.print.classList.add('hidden');
    appConfig.secondaryToolbar.printButton.classList.add('hidden');
  }
  if (!PDFViewerApplication.supportsFullscreen) {
    appConfig.toolbar.presentationModeButton.classList.add('hidden');
    appConfig.secondaryToolbar.presentationModeButton.classList.add('hidden');
  }
  if (PDFViewerApplication.supportsIntegratedFind) {
    appConfig.toolbar.viewFind.classList.add('hidden');
  }
  appConfig.sidebar.mainContainer.addEventListener('transitionend', function (e) {
    if (e.target === this) {
      PDFViewerApplication.eventBus.dispatch('resize');
    }
  }, true);
  appConfig.sidebar.toggleButton.addEventListener('click', function () {
    PDFViewerApplication.pdfSidebar.toggle();
  });
  Promise.all(waitForBeforeOpening).then(function () {
    webViewerOpenFileViaURL(file);
  }).catch(function (reason) {
    PDFViewerApplication.error(_ui_utils.mozL10n.get('loading_error', null, 'An error occurred while opening.'), reason);
  });
}
var webViewerOpenFileViaURL;
{
  webViewerOpenFileViaURL = function webViewerOpenFileViaURL(file) {
    if (file && file.lastIndexOf('file:', 0) === 0) {
      PDFViewerApplication.setTitleUsingUrl(file);
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        PDFViewerApplication.open(new Uint8Array(xhr.response));
      };
      try {
        xhr.open('GET', file);
        xhr.responseType = 'arraybuffer';
        xhr.send();
      } catch (e) {
        PDFViewerApplication.error(_ui_utils.mozL10n.get('loading_error', null, 'An error occurred while loading the PDF.'), e);
      }
      return;
    }
    if (file) {
      PDFViewerApplication.open(file);
    }
  };
}
function webViewerPageRendered(e) {
  var pageNumber = e.pageNumber;
  var pageIndex = pageNumber - 1;
  var pageView = PDFViewerApplication.pdfViewer.getPageView(pageIndex);
  if (pageNumber === PDFViewerApplication.page) {
    PDFViewerApplication.toolbar.updateLoadingIndicatorState(false);
  }
  if (!pageView) {
    return;
  }
  if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
    var thumbnailView = PDFViewerApplication.pdfThumbnailViewer.getThumbnail(pageIndex);
    thumbnailView.setImage(pageView);
  }
  if (_pdfjs.PDFJS.pdfBug && Stats.enabled && pageView.stats) {
    Stats.add(pageNumber, pageView.stats);
  }
  if (pageView.error) {
    PDFViewerApplication.error(_ui_utils.mozL10n.get('rendering_error', null, 'An error occurred while rendering the page.'), pageView.error);
  }
}
function webViewerTextLayerRendered(e) {}
function webViewerPageMode(e) {
  var mode = e.mode,
      view;
  switch (mode) {
    case 'thumbs':
      view = _pdf_sidebar.SidebarView.THUMBS;
      break;
    case 'bookmarks':
    case 'outline':
      view = _pdf_sidebar.SidebarView.OUTLINE;
      break;
    case 'attachments':
      view = _pdf_sidebar.SidebarView.ATTACHMENTS;
      break;
    case 'none':
      view = _pdf_sidebar.SidebarView.NONE;
      break;
    default:
      console.error('Invalid "pagemode" hash parameter: ' + mode);
      return;
  }
  PDFViewerApplication.pdfSidebar.switchView(view, true);
}
function webViewerNamedAction(e) {
  var action = e.action;
  switch (action) {
    case 'GoToPage':
      PDFViewerApplication.appConfig.toolbar.pageNumber.select();
      break;
    case 'Find':
      if (!PDFViewerApplication.supportsIntegratedFind) {
        PDFViewerApplication.findBar.toggle();
      }
      break;
  }
}
function webViewerPresentationModeChanged(e) {
  var active = e.active;
  var switchInProgress = e.switchInProgress;
  PDFViewerApplication.pdfViewer.presentationModeState = switchInProgress ? _pdf_viewer.PresentationModeState.CHANGING : active ? _pdf_viewer.PresentationModeState.FULLSCREEN : _pdf_viewer.PresentationModeState.NORMAL;
}
function webViewerSidebarViewChanged(evt) {
  PDFViewerApplication.pdfRenderingQueue.isThumbnailViewEnabled = PDFViewerApplication.pdfSidebar.isThumbnailViewVisible;
  var store = PDFViewerApplication.store;
  if (store && PDFViewerApplication.isInitialViewSet) {
    store.set('sidebarView', evt.view).catch(function () {});
  }
}
function webViewerUpdateViewarea(evt) {
  var location = evt.location,
      store = PDFViewerApplication.store;
  if (store && PDFViewerApplication.isInitialViewSet) {
    store.setMultiple({
      'exists': true,
      'page': location.pageNumber,
      'zoom': location.scale,
      'scrollLeft': location.left,
      'scrollTop': location.top
    }).catch(function () {});
  }
  var href = PDFViewerApplication.pdfLinkService.getAnchorUrl(location.pdfOpenParams);
  PDFViewerApplication.appConfig.toolbar.viewBookmark.href = href;
  PDFViewerApplication.appConfig.secondaryToolbar.viewBookmarkButton.href = href;
  PDFViewerApplication.pdfHistory.updateCurrentBookmark(location.pdfOpenParams, location.pageNumber);
  var currentPage = PDFViewerApplication.pdfViewer.getPageView(PDFViewerApplication.page - 1);
  var loading = currentPage.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED;
  PDFViewerApplication.toolbar.updateLoadingIndicatorState(loading);
}
function webViewerResize() {
  var currentScaleValue = PDFViewerApplication.pdfViewer.currentScaleValue;
  if (currentScaleValue === 'auto' || currentScaleValue === 'page-fit' || currentScaleValue === 'page-width') {
    PDFViewerApplication.pdfViewer.currentScaleValue = currentScaleValue;
  } else if (!currentScaleValue) {
    PDFViewerApplication.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
  }
  PDFViewerApplication.pdfViewer.update();
}
function webViewerHashchange(e) {
  if (PDFViewerApplication.pdfHistory.isHashChangeUnlocked) {
    var hash = e.hash;
    if (!hash) {
      return;
    }
    if (!PDFViewerApplication.isInitialViewSet) {
      PDFViewerApplication.initialBookmark = hash;
    } else {
      PDFViewerApplication.pdfLinkService.setHash(hash);
    }
  }
}
var webViewerFileInputChange;
{
  webViewerFileInputChange = function webViewerFileInputChange(e) {
    var file = e.fileInput.files[0];
    if (!_pdfjs.PDFJS.disableCreateObjectURL && typeof URL !== 'undefined' && URL.createObjectURL) {
      PDFViewerApplication.open(URL.createObjectURL(file));
    } else {
      var fileReader = new FileReader();
      fileReader.onload = function webViewerChangeFileReaderOnload(evt) {
        var buffer = evt.target.result;
        var uint8Array = new Uint8Array(buffer);
        PDFViewerApplication.open(uint8Array);
      };
      fileReader.readAsArrayBuffer(file);
    }
    PDFViewerApplication.setTitleUsingUrl(file.name);
    var appConfig = PDFViewerApplication.appConfig;
    appConfig.toolbar.viewBookmark.setAttribute('hidden', 'true');
    appConfig.secondaryToolbar.viewBookmarkButton.setAttribute('hidden', 'true');
    appConfig.toolbar.download.setAttribute('hidden', 'true');
    appConfig.secondaryToolbar.downloadButton.setAttribute('hidden', 'true');
  };
}
function webViewerPresentationMode() {
  PDFViewerApplication.requestPresentationMode();
}
function webViewerOpenFile() {
  var openFileInputName = PDFViewerApplication.appConfig.openFileInputName;
  document.getElementById(openFileInputName).click();
}
function webViewerPrint() {
  window.print();
}
function webViewerDownload() {
  PDFViewerApplication.download();
}
function webViewerFirstPage() {
  if (PDFViewerApplication.pdfDocument) {
    PDFViewerApplication.page = 1;
  }
}
function webViewerLastPage() {
  if (PDFViewerApplication.pdfDocument) {
    PDFViewerApplication.page = PDFViewerApplication.pagesCount;
  }
}
function webViewerNextPage() {
  PDFViewerApplication.page++;
}
function webViewerPreviousPage() {
  PDFViewerApplication.page--;
}
function webViewerZoomIn() {
  PDFViewerApplication.zoomIn();
}
function webViewerZoomOut() {
  PDFViewerApplication.zoomOut();
}
function webViewerPageNumberChanged(e) {
  var pdfViewer = PDFViewerApplication.pdfViewer;
  pdfViewer.currentPageLabel = e.value;
  if (e.value !== pdfViewer.currentPageNumber.toString() && e.value !== pdfViewer.currentPageLabel) {
    PDFViewerApplication.toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);
  }
}
function webViewerScaleChanged(e) {
  PDFViewerApplication.pdfViewer.currentScaleValue = e.value;
}
function webViewerRotateCw() {
  PDFViewerApplication.rotatePages(90);
}
function webViewerRotateCcw() {
  PDFViewerApplication.rotatePages(-90);
}
function webViewerDocumentProperties() {
  PDFViewerApplication.pdfDocumentProperties.open();
}
function webViewerFind(e) {
  PDFViewerApplication.findController.executeCommand('find' + e.type, {
    query: e.query,
    phraseSearch: e.phraseSearch,
    caseSensitive: e.caseSensitive,
    highlightAll: e.highlightAll,
    findPrevious: e.findPrevious
  });
}
function webViewerFindFromUrlHash(e) {
  PDFViewerApplication.findController.executeCommand('find', {
    query: e.query,
    phraseSearch: e.phraseSearch,
    caseSensitive: false,
    highlightAll: true,
    findPrevious: false
  });
}
function webViewerScaleChanging(e) {
  PDFViewerApplication.toolbar.setPageScale(e.presetValue, e.scale);
  PDFViewerApplication.pdfViewer.update();
}
function webViewerPageChanging(e) {
  var page = e.pageNumber;
  PDFViewerApplication.toolbar.setPageNumber(page, e.pageLabel || null);
  PDFViewerApplication.secondaryToolbar.setPageNumber(page);
  if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
    PDFViewerApplication.pdfThumbnailViewer.scrollThumbnailIntoView(page);
  }
  if (_pdfjs.PDFJS.pdfBug && Stats.enabled) {
    var pageView = PDFViewerApplication.pdfViewer.getPageView(page - 1);
    if (pageView.stats) {
      Stats.add(page, pageView.stats);
    }
  }
}
var zoomDisabled = false,
    zoomDisabledTimeout;
function webViewerWheel(evt) {
  var pdfViewer = PDFViewerApplication.pdfViewer;
  if (pdfViewer.isInPresentationMode) {
    return;
  }
  if (evt.ctrlKey || evt.metaKey) {
    var support = PDFViewerApplication.supportedMouseWheelZoomModifierKeys;
    if (evt.ctrlKey && !support.ctrlKey || evt.metaKey && !support.metaKey) {
      return;
    }
    evt.preventDefault();
    if (zoomDisabled) {
      return;
    }
    var previousScale = pdfViewer.currentScale;
    var delta = (0, _ui_utils.normalizeWheelEventDelta)(evt);
    var MOUSE_WHEEL_DELTA_PER_PAGE_SCALE = 3.0;
    var ticks = delta * MOUSE_WHEEL_DELTA_PER_PAGE_SCALE;
    if (ticks < 0) {
      PDFViewerApplication.zoomOut(-ticks);
    } else {
      PDFViewerApplication.zoomIn(ticks);
    }
    var currentScale = pdfViewer.currentScale;
    if (previousScale !== currentScale) {
      var scaleCorrectionFactor = currentScale / previousScale - 1;
      var rect = pdfViewer.container.getBoundingClientRect();
      var dx = evt.clientX - rect.left;
      var dy = evt.clientY - rect.top;
      pdfViewer.container.scrollLeft += dx * scaleCorrectionFactor;
      pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
    }
  } else {
    zoomDisabled = true;
    clearTimeout(zoomDisabledTimeout);
    zoomDisabledTimeout = setTimeout(function () {
      zoomDisabled = false;
    }, 1000);
  }
}
function webViewerClick(evt) {
  if (!PDFViewerApplication.secondaryToolbar.isOpen) {
    return;
  }
  var appConfig = PDFViewerApplication.appConfig;
  if (PDFViewerApplication.pdfViewer.containsElement(evt.target) || appConfig.toolbar.container.contains(evt.target) && evt.target !== appConfig.secondaryToolbar.toggleButton) {
    PDFViewerApplication.secondaryToolbar.close();
  }
}
function webViewerKeyDown(evt) {
  if (_overlay_manager.OverlayManager.active) {
    return;
  }
  var handled = false,
      ensureViewerFocused = false;
  var cmd = (evt.ctrlKey ? 1 : 0) | (evt.altKey ? 2 : 0) | (evt.shiftKey ? 4 : 0) | (evt.metaKey ? 8 : 0);
  var pdfViewer = PDFViewerApplication.pdfViewer;
  var isViewerInPresentationMode = pdfViewer && pdfViewer.isInPresentationMode;
  if (cmd === 1 || cmd === 8 || cmd === 5 || cmd === 12) {
    switch (evt.keyCode) {
      case 70:
        if (!PDFViewerApplication.supportsIntegratedFind) {
          PDFViewerApplication.findBar.open();
          handled = true;
        }
        break;
      case 71:
        if (!PDFViewerApplication.supportsIntegratedFind) {
          var findState = PDFViewerApplication.findController.state;
          if (findState) {
            PDFViewerApplication.findController.executeCommand('findagain', {
              query: findState.query,
              phraseSearch: findState.phraseSearch,
              caseSensitive: findState.caseSensitive,
              highlightAll: findState.highlightAll,
              findPrevious: cmd === 5 || cmd === 12
            });
          }
          handled = true;
        }
        break;
      case 61:
      case 107:
      case 187:
      case 171:
        if (!isViewerInPresentationMode) {
          PDFViewerApplication.zoomIn();
        }
        handled = true;
        break;
      case 173:
      case 109:
      case 189:
        if (!isViewerInPresentationMode) {
          PDFViewerApplication.zoomOut();
        }
        handled = true;
        break;
      case 48:
      case 96:
        if (!isViewerInPresentationMode) {
          setTimeout(function () {
            pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
          });
          handled = false;
        }
        break;
      case 38:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
      case 40:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
    }
  }
  if (cmd === 1 || cmd === 8) {
    switch (evt.keyCode) {
      case 83:
        PDFViewerApplication.download();
        handled = true;
        break;
    }
  }
  if (cmd === 3 || cmd === 10) {
    switch (evt.keyCode) {
      case 80:
        PDFViewerApplication.requestPresentationMode();
        handled = true;
        break;
      case 71:
        PDFViewerApplication.appConfig.toolbar.pageNumber.select();
        handled = true;
        break;
    }
  }
  if (handled) {
    if (ensureViewerFocused && !isViewerInPresentationMode) {
      pdfViewer.focus();
    }
    evt.preventDefault();
    return;
  }
  var curElement = document.activeElement || document.querySelector(':focus');
  var curElementTagName = curElement && curElement.tagName.toUpperCase();
  if (curElementTagName === 'INPUT' || curElementTagName === 'TEXTAREA' || curElementTagName === 'SELECT') {
    if (evt.keyCode !== 27) {
      return;
    }
  }
  if (cmd === 0) {
    switch (evt.keyCode) {
      case 38:
      case 33:
      case 8:
        if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== 'page-fit') {
          break;
        }
      case 37:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          break;
        }
      case 75:
      case 80:
        if (PDFViewerApplication.page > 1) {
          PDFViewerApplication.page--;
        }
        handled = true;
        break;
      case 27:
        if (PDFViewerApplication.secondaryToolbar.isOpen) {
          PDFViewerApplication.secondaryToolbar.close();
          handled = true;
        }
        if (!PDFViewerApplication.supportsIntegratedFind && PDFViewerApplication.findBar.opened) {
          PDFViewerApplication.findBar.close();
          handled = true;
        }
        break;
      case 40:
      case 34:
      case 32:
        if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== 'page-fit') {
          break;
        }
      case 39:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          break;
        }
      case 74:
      case 78:
        if (PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page++;
        }
        handled = true;
        break;
      case 36:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
      case 35:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }
        break;
      case 83:
        PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.SELECT);
        break;
      case 72:
        PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.HAND);
        break;
      case 82:
        PDFViewerApplication.rotatePages(90);
        break;
    }
  }
  if (cmd === 4) {
    switch (evt.keyCode) {
      case 32:
        if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== 'page-fit') {
          break;
        }
        if (PDFViewerApplication.page > 1) {
          PDFViewerApplication.page--;
        }
        handled = true;
        break;
      case 82:
        PDFViewerApplication.rotatePages(-90);
        break;
    }
  }
  if (!handled && !isViewerInPresentationMode) {
    if (evt.keyCode >= 33 && evt.keyCode <= 40 || evt.keyCode === 32 && curElementTagName !== 'BUTTON') {
      ensureViewerFocused = true;
    }
  }
  if (cmd === 2) {
    switch (evt.keyCode) {
      case 37:
        if (isViewerInPresentationMode) {
          PDFViewerApplication.pdfHistory.back();
          handled = true;
        }
        break;
      case 39:
        if (isViewerInPresentationMode) {
          PDFViewerApplication.pdfHistory.forward();
          handled = true;
        }
        break;
    }
  }
  if (ensureViewerFocused && !pdfViewer.containsElement(curElement)) {
    pdfViewer.focus();
  }
  if (handled) {
    evt.preventDefault();
  }
}
_ui_utils.localized.then(function webViewerLocalized() {
  document.getElementsByTagName('html')[0].dir = _ui_utils.mozL10n.getDirection();
});
var PDFPrintServiceFactory = {
  instance: {
    supportsPrinting: false,
    createPrintService: function createPrintService() {
      throw new Error('Not implemented: createPrintService');
    }
  }
};
exports.PDFViewerApplication = PDFViewerApplication;
exports.DefaultExternalServices = DefaultExternalServices;
exports.PDFPrintServiceFactory = PDFPrintServiceFactory;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleLinkService = exports.PDFLinkService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dom_events = __webpack_require__(2);

var _ui_utils = __webpack_require__(0);

var PDFLinkService = function PDFLinkServiceClosure() {
  function PDFLinkService(options) {
    options = options || {};
    this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)();
    this.baseUrl = null;
    this.pdfDocument = null;
    this.pdfViewer = null;
    this.pdfHistory = null;
    this._pagesRefCache = null;
  }
  PDFLinkService.prototype = {
    setDocument: function PDFLinkService_setDocument(pdfDocument, baseUrl) {
      this.baseUrl = baseUrl;
      this.pdfDocument = pdfDocument;
      this._pagesRefCache = Object.create(null);
    },
    setViewer: function PDFLinkService_setViewer(pdfViewer) {
      this.pdfViewer = pdfViewer;
    },
    setHistory: function PDFLinkService_setHistory(pdfHistory) {
      this.pdfHistory = pdfHistory;
    },
    get pagesCount() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    },
    get page() {
      return this.pdfViewer.currentPageNumber;
    },
    set page(value) {
      this.pdfViewer.currentPageNumber = value;
    },
    navigateTo: function PDFLinkService_navigateTo(dest) {
      var destString = '';
      var self = this;
      var goToDestination = function goToDestination(destRef) {
        var pageNumber;
        if (destRef instanceof Object) {
          pageNumber = self._cachedPageNumber(destRef);
        } else if ((destRef | 0) === destRef) {
          pageNumber = destRef + 1;
        } else {
          console.error('PDFLinkService_navigateTo: "' + destRef + '" is not a valid destination reference.');
          return;
        }
        if (pageNumber) {
          if (pageNumber < 1 || pageNumber > self.pagesCount) {
            console.error('PDFLinkService_navigateTo: "' + pageNumber + '" is a non-existent page number.');
            return;
          }
          self.pdfViewer.scrollPageIntoView({
            pageNumber: pageNumber,
            destArray: dest
          });
          if (self.pdfHistory) {
            self.pdfHistory.push({
              dest: dest,
              hash: destString,
              page: pageNumber
            });
          }
        } else {
          self.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
            self.cachePageRef(pageIndex + 1, destRef);
            goToDestination(destRef);
          }).catch(function () {
            console.error('PDFLinkService_navigateTo: "' + destRef + '" is not a valid page reference.');
          });
        }
      };
      var destinationPromise;
      if (typeof dest === 'string') {
        destString = dest;
        destinationPromise = this.pdfDocument.getDestination(dest);
      } else {
        destinationPromise = Promise.resolve(dest);
      }
      destinationPromise.then(function (destination) {
        dest = destination;
        if (!(destination instanceof Array)) {
          console.error('PDFLinkService_navigateTo: "' + destination + '" is not a valid destination array.');
          return;
        }
        goToDestination(destination[0]);
      });
    },
    getDestinationHash: function getDestinationHash(dest) {
      if (typeof dest === 'string') {
        return this.getAnchorUrl('#' + escape(dest));
      }
      if (dest instanceof Array) {
        var str = JSON.stringify(dest);
        return this.getAnchorUrl('#' + escape(str));
      }
      return this.getAnchorUrl('');
    },

    getAnchorUrl: function PDFLinkService_getAnchorUrl(anchor) {
      return (this.baseUrl || '') + anchor;
    },
    setHash: function PDFLinkService_setHash(hash) {
      var pageNumber, dest;
      if (hash.indexOf('=') >= 0) {
        var params = (0, _ui_utils.parseQueryString)(hash);
        if ('search' in params) {
          this.eventBus.dispatch('findfromurlhash', {
            source: this,
            query: params['search'].replace(/"/g, ''),
            phraseSearch: params['phrase'] === 'true'
          });
        }
        if ('nameddest' in params) {
          if (this.pdfHistory) {
            this.pdfHistory.updateNextHashParam(params.nameddest);
          }
          this.navigateTo(params.nameddest);
          return;
        }
        if ('page' in params) {
          pageNumber = params.page | 0 || 1;
        }
        if ('zoom' in params) {
          var zoomArgs = params.zoom.split(',');
          var zoomArg = zoomArgs[0];
          var zoomArgNumber = parseFloat(zoomArg);
          if (zoomArg.indexOf('Fit') === -1) {
            dest = [null, { name: 'XYZ' }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
          } else {
            if (zoomArg === 'Fit' || zoomArg === 'FitB') {
              dest = [null, { name: zoomArg }];
            } else if (zoomArg === 'FitH' || zoomArg === 'FitBH' || zoomArg === 'FitV' || zoomArg === 'FitBV') {
              dest = [null, { name: zoomArg }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
            } else if (zoomArg === 'FitR') {
              if (zoomArgs.length !== 5) {
                console.error('PDFLinkService_setHash: ' + 'Not enough parameters for \'FitR\'.');
              } else {
                dest = [null, { name: zoomArg }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
              }
            } else {
              console.error('PDFLinkService_setHash: \'' + zoomArg + '\' is not a valid zoom value.');
            }
          }
        }
        if (dest) {
          this.pdfViewer.scrollPageIntoView({
            pageNumber: pageNumber || this.page,
            destArray: dest,
            allowNegativeOffset: true
          });
        } else if (pageNumber) {
          this.page = pageNumber;
        }
        if ('pagemode' in params) {
          this.eventBus.dispatch('pagemode', {
            source: this,
            mode: params.pagemode
          });
        }
      } else {
        if (/^\d+$/.test(hash) && hash <= this.pagesCount) {
          console.warn('PDFLinkService_setHash: specifying a page number ' + 'directly after the hash symbol (#) is deprecated, ' + 'please use the "#page=' + hash + '" form instead.');
          this.page = hash | 0;
        }
        dest = unescape(hash);
        try {
          dest = JSON.parse(dest);
          if (!(dest instanceof Array)) {
            dest = dest.toString();
          }
        } catch (ex) {}
        if (typeof dest === 'string' || isValidExplicitDestination(dest)) {
          if (this.pdfHistory) {
            this.pdfHistory.updateNextHashParam(dest);
          }
          this.navigateTo(dest);
          return;
        }
        console.error('PDFLinkService_setHash: \'' + unescape(hash) + '\' is not a valid destination.');
      }
    },
    executeNamedAction: function PDFLinkService_executeNamedAction(action) {
      switch (action) {
        case 'GoBack':
          if (this.pdfHistory) {
            this.pdfHistory.back();
          }
          break;
        case 'GoForward':
          if (this.pdfHistory) {
            this.pdfHistory.forward();
          }
          break;
        case 'NextPage':
          if (this.page < this.pagesCount) {
            this.page++;
          }
          break;
        case 'PrevPage':
          if (this.page > 1) {
            this.page--;
          }
          break;
        case 'LastPage':
          this.page = this.pagesCount;
          break;
        case 'FirstPage':
          this.page = 1;
          break;
        default:
          break;
      }
      this.eventBus.dispatch('namedaction', {
        source: this,
        action: action
      });
    },
    onFileAttachmentAnnotation: function onFileAttachmentAnnotation() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.eventBus.dispatch('fileattachmentannotation', {
        source: this,
        id: params.id,
        filename: params.filename,
        content: params.content
      });
    },

    cachePageRef: function PDFLinkService_cachePageRef(pageNum, pageRef) {
      var refStr = pageRef.num + ' ' + pageRef.gen + ' R';
      this._pagesRefCache[refStr] = pageNum;
    },
    _cachedPageNumber: function PDFLinkService_cachedPageNumber(pageRef) {
      var refStr = pageRef.num + ' ' + pageRef.gen + ' R';
      return this._pagesRefCache && this._pagesRefCache[refStr] || null;
    }
  };
  function isValidExplicitDestination(dest) {
    if (!(dest instanceof Array)) {
      return false;
    }
    var destLength = dest.length,
        allowNull = true;
    if (destLength < 2) {
      return false;
    }
    var page = dest[0];
    if (!((typeof page === 'undefined' ? 'undefined' : _typeof(page)) === 'object' && typeof page.num === 'number' && (page.num | 0) === page.num && typeof page.gen === 'number' && (page.gen | 0) === page.gen) && !(typeof page === 'number' && (page | 0) === page && page >= 0)) {
      return false;
    }
    var zoom = dest[1];
    if (!((typeof zoom === 'undefined' ? 'undefined' : _typeof(zoom)) === 'object' && typeof zoom.name === 'string')) {
      return false;
    }
    switch (zoom.name) {
      case 'XYZ':
        if (destLength !== 5) {
          return false;
        }
        break;
      case 'Fit':
      case 'FitB':
        return destLength === 2;
      case 'FitH':
      case 'FitBH':
      case 'FitV':
      case 'FitBV':
        if (destLength !== 3) {
          return false;
        }
        break;
      case 'FitR':
        if (destLength !== 6) {
          return false;
        }
        allowNull = false;
        break;
      default:
        return false;
    }
    for (var i = 2; i < destLength; i++) {
      var param = dest[i];
      if (!(typeof param === 'number' || allowNull && param === null)) {
        return false;
      }
    }
    return true;
  }
  return PDFLinkService;
}();
var SimpleLinkService = function SimpleLinkServiceClosure() {
  function SimpleLinkService() {}
  SimpleLinkService.prototype = {
    get page() {
      return 0;
    },
    set page(value) {},
    navigateTo: function navigateTo(dest) {},
    getDestinationHash: function getDestinationHash(dest) {
      return '#';
    },
    getAnchorUrl: function getAnchorUrl(hash) {
      return '#';
    },
    setHash: function setHash(hash) {},
    executeNamedAction: function executeNamedAction(action) {},
    onFileAttachmentAnnotation: function onFileAttachmentAnnotation(params) {},
    cachePageRef: function cachePageRef(pageNum, pageRef) {}
  };
  return SimpleLinkService;
}();
exports.PDFLinkService = PDFLinkService;
exports.SimpleLinkService = SimpleLinkService;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFCursorTools = exports.CursorTool = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grab_to_pan = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CursorTool = {
  SELECT: 0,
  HAND: 1,
  ZOOM: 2
};

var PDFCursorTools = function () {
  function PDFCursorTools(_ref) {
    var _this = this;

    var container = _ref.container,
        eventBus = _ref.eventBus,
        preferences = _ref.preferences;

    _classCallCheck(this, PDFCursorTools);

    this.container = container;
    this.eventBus = eventBus;
    this.active = CursorTool.SELECT;
    this.activeBeforePresentationMode = null;
    this.handTool = new _grab_to_pan.GrabToPan({ element: this.container });
    this._addEventListeners();
    Promise.all([preferences.get('cursorToolOnLoad'), preferences.get('enableHandToolOnLoad')]).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          cursorToolPref = _ref3[0],
          handToolPref = _ref3[1];

      if (handToolPref === true) {
        preferences.set('enableHandToolOnLoad', false);
        if (cursorToolPref === CursorTool.SELECT) {
          cursorToolPref = CursorTool.HAND;
          preferences.set('cursorToolOnLoad', cursorToolPref).catch(function () {});
        }
      }
      _this.switchTool(cursorToolPref);
    }).catch(function () {});
  }

  _createClass(PDFCursorTools, [{
    key: 'switchTool',
    value: function switchTool(tool) {
      var _this2 = this;

      if (this.activeBeforePresentationMode !== null) {
        return;
      }
      if (tool === this.active) {
        return;
      }
      var disableActiveTool = function disableActiveTool() {
        switch (_this2.active) {
          case CursorTool.SELECT:
            break;
          case CursorTool.HAND:
            _this2.handTool.deactivate();
            break;
          case CursorTool.ZOOM:
        }
      };
      switch (tool) {
        case CursorTool.SELECT:
          disableActiveTool();
          break;
        case CursorTool.HAND:
          disableActiveTool();
          this.handTool.activate();
          break;
        case CursorTool.ZOOM:
        default:
          console.error('switchTool: "' + tool + '" is an unsupported value.');
          return;
      }
      this.active = tool;
      this._dispatchEvent();
    }
  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent() {
      this.eventBus.dispatch('cursortoolchanged', {
        source: this,
        tool: this.active
      });
    }
  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this3 = this;

      this.eventBus.on('switchcursortool', function (evt) {
        _this3.switchTool(evt.tool);
      });
      this.eventBus.on('presentationmodechanged', function (evt) {
        if (evt.switchInProgress) {
          return;
        }
        var previouslyActive = void 0;
        if (evt.active) {
          previouslyActive = _this3.active;
          _this3.switchTool(CursorTool.SELECT);
          _this3.activeBeforePresentationMode = previouslyActive;
        } else {
          previouslyActive = _this3.activeBeforePresentationMode;
          _this3.activeBeforePresentationMode = null;
          _this3.switchTool(previouslyActive);
        }
      });
    }
  }, {
    key: 'activeTool',
    get: function get() {
      return this.active;
    }
  }]);

  return PDFCursorTools;
}();

exports.CursorTool = CursorTool;
exports.PDFCursorTools = PDFCursorTools;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFFindController = exports.FindStates = undefined;

var _pdfjs = __webpack_require__(1);

var _ui_utils = __webpack_require__(0);

var FindStates = {
  FIND_FOUND: 0,
  FIND_NOTFOUND: 1,
  FIND_WRAPPED: 2,
  FIND_PENDING: 3
};
var FIND_SCROLL_OFFSET_TOP = -50;
var FIND_SCROLL_OFFSET_LEFT = -400;
var CHARACTERS_TO_NORMALIZE = {
  '\u2018': '\'',
  '\u2019': '\'',
  '\u201A': '\'',
  '\u201B': '\'',
  '\u201C': '"',
  '\u201D': '"',
  '\u201E': '"',
  '\u201F': '"',
  '\xBC': '1/4',
  '\xBD': '1/2',
  '\xBE': '3/4'
};
var PDFFindController = function PDFFindControllerClosure() {
  function PDFFindController(options) {
    this.pdfViewer = options.pdfViewer || null;
    this.onUpdateResultsCount = null;
    this.onUpdateState = null;
    this.reset();
    var replace = Object.keys(CHARACTERS_TO_NORMALIZE).join('');
    this.normalizationRegex = new RegExp('[' + replace + ']', 'g');
  }
  PDFFindController.prototype = {
    reset: function PDFFindController_reset() {
      var _this = this;

      this.startedTextExtraction = false;
      this.extractTextPromises = [];
      this.pendingFindMatches = Object.create(null);
      this.active = false;
      this.pageContents = [];
      this.pageMatches = [];
      this.pageMatchesLength = null;
      this.matchCount = 0;
      this.selected = {
        pageIdx: -1,
        matchIdx: -1
      };
      this.offset = {
        pageIdx: null,
        matchIdx: null
      };
      this.pagesToSearch = null;
      this.resumePageIdx = null;
      this.state = null;
      this.dirtyMatch = false;
      this.findTimeout = null;
      this._firstPagePromise = new Promise(function (resolve) {
        _this.resolveFirstPage = resolve;
      });
    },
    normalize: function PDFFindController_normalize(text) {
      return text.replace(this.normalizationRegex, function (ch) {
        return CHARACTERS_TO_NORMALIZE[ch];
      });
    },
    _prepareMatches: function PDFFindController_prepareMatches(matchesWithLength, matches, matchesLength) {
      function isSubTerm(matchesWithLength, currentIndex) {
        var currentElem, prevElem, nextElem;
        currentElem = matchesWithLength[currentIndex];
        nextElem = matchesWithLength[currentIndex + 1];
        if (currentIndex < matchesWithLength.length - 1 && currentElem.match === nextElem.match) {
          currentElem.skipped = true;
          return true;
        }
        for (var i = currentIndex - 1; i >= 0; i--) {
          prevElem = matchesWithLength[i];
          if (prevElem.skipped) {
            continue;
          }
          if (prevElem.match + prevElem.matchLength < currentElem.match) {
            break;
          }
          if (prevElem.match + prevElem.matchLength >= currentElem.match + currentElem.matchLength) {
            currentElem.skipped = true;
            return true;
          }
        }
        return false;
      }
      var i, len;
      matchesWithLength.sort(function (a, b) {
        return a.match === b.match ? a.matchLength - b.matchLength : a.match - b.match;
      });
      for (i = 0, len = matchesWithLength.length; i < len; i++) {
        if (isSubTerm(matchesWithLength, i)) {
          continue;
        }
        matches.push(matchesWithLength[i].match);
        matchesLength.push(matchesWithLength[i].matchLength);
      }
    },
    calcFindPhraseMatch: function PDFFindController_calcFindPhraseMatch(query, pageIndex, pageContent) {
      var matches = [];
      var queryLen = query.length;
      var matchIdx = -queryLen;
      while (true) {
        matchIdx = pageContent.indexOf(query, matchIdx + queryLen);
        if (matchIdx === -1) {
          break;
        }
        matches.push(matchIdx);
      }
      this.pageMatches[pageIndex] = matches;
    },
    calcFindWordMatch: function PDFFindController_calcFindWordMatch(query, pageIndex, pageContent) {
      var matchesWithLength = [];
      var queryArray = query.match(/\S+/g);
      var subquery, subqueryLen, matchIdx;
      for (var i = 0, len = queryArray.length; i < len; i++) {
        subquery = queryArray[i];
        subqueryLen = subquery.length;
        matchIdx = -subqueryLen;
        while (true) {
          matchIdx = pageContent.indexOf(subquery, matchIdx + subqueryLen);
          if (matchIdx === -1) {
            break;
          }
          matchesWithLength.push({
            match: matchIdx,
            matchLength: subqueryLen,
            skipped: false
          });
        }
      }
      if (!this.pageMatchesLength) {
        this.pageMatchesLength = [];
      }
      this.pageMatchesLength[pageIndex] = [];
      this.pageMatches[pageIndex] = [];
      this._prepareMatches(matchesWithLength, this.pageMatches[pageIndex], this.pageMatchesLength[pageIndex]);
    },
    calcFindMatch: function PDFFindController_calcFindMatch(pageIndex) {
      var pageContent = this.normalize(this.pageContents[pageIndex]);
      var query = this.normalize(this.state.query);
      var caseSensitive = this.state.caseSensitive;
      var phraseSearch = this.state.phraseSearch;
      var queryLen = query.length;
      if (queryLen === 0) {
        return;
      }
      if (!caseSensitive) {
        pageContent = pageContent.toLowerCase();
        query = query.toLowerCase();
      }
      if (phraseSearch) {
        this.calcFindPhraseMatch(query, pageIndex, pageContent);
      } else {
        this.calcFindWordMatch(query, pageIndex, pageContent);
      }
      this.updatePage(pageIndex);
      if (this.resumePageIdx === pageIndex) {
        this.resumePageIdx = null;
        this.nextPageMatch();
      }
      if (this.pageMatches[pageIndex].length > 0) {
        this.matchCount += this.pageMatches[pageIndex].length;
        this.updateUIResultsCount();
      }
    },
    extractText: function extractText() {
      var _this2 = this;

      if (this.startedTextExtraction) {
        return;
      }
      this.startedTextExtraction = true;
      this.pageContents.length = 0;
      var promise = Promise.resolve();

      var _loop = function _loop(i, ii) {
        var extractTextCapability = (0, _pdfjs.createPromiseCapability)();
        _this2.extractTextPromises[i] = extractTextCapability.promise;
        promise = promise.then(function () {
          return _this2.pdfViewer.getPageTextContent(i).then(function (textContent) {
            var textItems = textContent.items;
            var strBuf = [];
            for (var j = 0, jj = textItems.length; j < jj; j++) {
              strBuf.push(textItems[j].str);
            }
            _this2.pageContents[i] = strBuf.join('');
            extractTextCapability.resolve(i);
          });
        });
      };

      for (var i = 0, ii = this.pdfViewer.pagesCount; i < ii; i++) {
        _loop(i, ii);
      }
    },

    executeCommand: function PDFFindController_executeCommand(cmd, state) {
      var _this3 = this;

      if (this.state === null || cmd !== 'findagain') {
        this.dirtyMatch = true;
      }
      this.state = state;
      this.updateUIState(FindStates.FIND_PENDING);
      this._firstPagePromise.then(function () {
        _this3.extractText();
        clearTimeout(_this3.findTimeout);
        if (cmd === 'find') {
          _this3.findTimeout = setTimeout(_this3.nextMatch.bind(_this3), 250);
        } else {
          _this3.nextMatch();
        }
      });
    },
    updatePage: function PDFFindController_updatePage(index) {
      if (this.selected.pageIdx === index) {
        this.pdfViewer.currentPageNumber = index + 1;
      }
      var page = this.pdfViewer.getPageView(index);
      if (page.textLayer) {
        page.textLayer.updateMatches();
      }
    },
    nextMatch: function PDFFindController_nextMatch() {
      var _this4 = this;

      var previous = this.state.findPrevious;
      var currentPageIndex = this.pdfViewer.currentPageNumber - 1;
      var numPages = this.pdfViewer.pagesCount;
      this.active = true;
      if (this.dirtyMatch) {
        this.dirtyMatch = false;
        this.selected.pageIdx = this.selected.matchIdx = -1;
        this.offset.pageIdx = currentPageIndex;
        this.offset.matchIdx = null;
        this.hadMatch = false;
        this.resumePageIdx = null;
        this.pageMatches = [];
        this.matchCount = 0;
        this.pageMatchesLength = null;
        for (var i = 0; i < numPages; i++) {
          this.updatePage(i);
          if (!(i in this.pendingFindMatches)) {
            this.pendingFindMatches[i] = true;
            this.extractTextPromises[i].then(function (pageIdx) {
              delete _this4.pendingFindMatches[pageIdx];
              _this4.calcFindMatch(pageIdx);
            });
          }
        }
      }
      if (this.state.query === '') {
        this.updateUIState(FindStates.FIND_FOUND);
        return;
      }
      if (this.resumePageIdx) {
        return;
      }
      var offset = this.offset;
      this.pagesToSearch = numPages;
      if (offset.matchIdx !== null) {
        var numPageMatches = this.pageMatches[offset.pageIdx].length;
        if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
          this.hadMatch = true;
          offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;
          this.updateMatch(true);
          return;
        }
        this.advanceOffsetPage(previous);
      }
      this.nextPageMatch();
    },
    matchesReady: function PDFFindController_matchesReady(matches) {
      var offset = this.offset;
      var numMatches = matches.length;
      var previous = this.state.findPrevious;
      if (numMatches) {
        this.hadMatch = true;
        offset.matchIdx = previous ? numMatches - 1 : 0;
        this.updateMatch(true);
        return true;
      }
      this.advanceOffsetPage(previous);
      if (offset.wrapped) {
        offset.matchIdx = null;
        if (this.pagesToSearch < 0) {
          this.updateMatch(false);
          return true;
        }
      }
      return false;
    },
    updateMatchPosition: function PDFFindController_updateMatchPosition(pageIndex, index, elements, beginIdx) {
      if (this.selected.matchIdx === index && this.selected.pageIdx === pageIndex) {
        var spot = {
          top: FIND_SCROLL_OFFSET_TOP,
          left: FIND_SCROLL_OFFSET_LEFT
        };
        (0, _ui_utils.scrollIntoView)(elements[beginIdx], spot, true);
      }
    },
    nextPageMatch: function PDFFindController_nextPageMatch() {
      if (this.resumePageIdx !== null) {
        console.error('There can only be one pending page.');
      }
      do {
        var pageIdx = this.offset.pageIdx;
        var matches = this.pageMatches[pageIdx];
        if (!matches) {
          this.resumePageIdx = pageIdx;
          break;
        }
      } while (!this.matchesReady(matches));
    },
    advanceOffsetPage: function PDFFindController_advanceOffsetPage(previous) {
      var offset = this.offset;
      var numPages = this.extractTextPromises.length;
      offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
      offset.matchIdx = null;
      this.pagesToSearch--;
      if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
        offset.pageIdx = previous ? numPages - 1 : 0;
        offset.wrapped = true;
      }
    },
    updateMatch: function PDFFindController_updateMatch(found) {
      var state = FindStates.FIND_NOTFOUND;
      var wrapped = this.offset.wrapped;
      this.offset.wrapped = false;
      if (found) {
        var previousPage = this.selected.pageIdx;
        this.selected.pageIdx = this.offset.pageIdx;
        this.selected.matchIdx = this.offset.matchIdx;
        state = wrapped ? FindStates.FIND_WRAPPED : FindStates.FIND_FOUND;
        if (previousPage !== -1 && previousPage !== this.selected.pageIdx) {
          this.updatePage(previousPage);
        }
      }
      this.updateUIState(state, this.state.findPrevious);
      if (this.selected.pageIdx !== -1) {
        this.updatePage(this.selected.pageIdx);
      }
    },
    updateUIResultsCount: function PDFFindController_updateUIResultsCount() {
      if (this.onUpdateResultsCount) {
        this.onUpdateResultsCount(this.matchCount);
      }
    },
    updateUIState: function PDFFindController_updateUIState(state, previous) {
      if (this.onUpdateState) {
        this.onUpdateState(state, previous, this.matchCount);
      }
    }
  };
  return PDFFindController;
}();
exports.FindStates = FindStates;
exports.PDFFindController = PDFFindController;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericCom = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(5);

var _preferences = __webpack_require__(26);

var _download_manager = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

;
var GenericCom = {};

var GenericPreferences = function (_BasePreferences) {
  _inherits(GenericPreferences, _BasePreferences);

  function GenericPreferences() {
    _classCallCheck(this, GenericPreferences);

    return _possibleConstructorReturn(this, (GenericPreferences.__proto__ || Object.getPrototypeOf(GenericPreferences)).apply(this, arguments));
  }

  _createClass(GenericPreferences, [{
    key: '_writeToStorage',
    value: function _writeToStorage(prefObj) {
      return new Promise(function (resolve) {
        localStorage.setItem('pdfjs.preferences', JSON.stringify(prefObj));
        resolve();
      });
    }
  }, {
    key: '_readFromStorage',
    value: function _readFromStorage(prefObj) {
      return new Promise(function (resolve) {
        var readPrefs = JSON.parse(localStorage.getItem('pdfjs.preferences'));
        resolve(readPrefs);
      });
    }
  }]);

  return GenericPreferences;
}(_preferences.BasePreferences);

var GenericExternalServices = Object.create(_app.DefaultExternalServices);
GenericExternalServices.createDownloadManager = function () {
  return new _download_manager.DownloadManager();
};
GenericExternalServices.createPreferences = function () {
  return new GenericPreferences();
};
_app.PDFViewerApplication.externalServices = GenericExternalServices;
exports.GenericCom = GenericCom;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFPrintService = undefined;

var _ui_utils = __webpack_require__(0);

var _overlay_manager = __webpack_require__(4);

var _pdfjs = __webpack_require__(1);

var _app = __webpack_require__(5);

var activeService = null;
function renderPage(activeServiceOnEntry, pdfDocument, pageNumber, size) {
  var scratchCanvas = activeService.scratchCanvas;
  var PRINT_RESOLUTION = 150;
  var PRINT_UNITS = PRINT_RESOLUTION / 72.0;
  scratchCanvas.width = Math.floor(size.width * PRINT_UNITS);
  scratchCanvas.height = Math.floor(size.height * PRINT_UNITS);
  var width = Math.floor(size.width * _ui_utils.CSS_UNITS) + 'px';
  var height = Math.floor(size.height * _ui_utils.CSS_UNITS) + 'px';
  var ctx = scratchCanvas.getContext('2d');
  ctx.save();
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
  ctx.restore();
  return pdfDocument.getPage(pageNumber).then(function (pdfPage) {
    var renderContext = {
      canvasContext: ctx,
      transform: [PRINT_UNITS, 0, 0, PRINT_UNITS, 0, 0],
      viewport: pdfPage.getViewport(1, size.rotation),
      intent: 'print'
    };
    return pdfPage.render(renderContext).promise;
  }).then(function () {
    return {
      width: width,
      height: height
    };
  });
}
function PDFPrintService(pdfDocument, pagesOverview, printContainer) {
  this.pdfDocument = pdfDocument;
  this.pagesOverview = pagesOverview;
  this.printContainer = printContainer;
  this.currentPage = -1;
  this.scratchCanvas = document.createElement('canvas');
}
PDFPrintService.prototype = {
  layout: function layout() {
    this.throwIfInactive();
    var body = document.querySelector('body');
    body.setAttribute('data-pdfjsprinting', true);
    var hasEqualPageSizes = this.pagesOverview.every(function (size) {
      return size.width === this.pagesOverview[0].width && size.height === this.pagesOverview[0].height;
    }, this);
    if (!hasEqualPageSizes) {
      console.warn('Not all pages have the same size. The printed ' + 'result may be incorrect!');
    }
    this.pageStyleSheet = document.createElement('style');
    var pageSize = this.pagesOverview[0];
    this.pageStyleSheet.textContent = '@supports ((size:A4) and (size:1pt 1pt)) {' + '@page { size: ' + pageSize.width + 'pt ' + pageSize.height + 'pt;}' + '}';
    body.appendChild(this.pageStyleSheet);
  },
  destroy: function destroy() {
    if (activeService !== this) {
      return;
    }
    this.printContainer.textContent = '';
    if (this.pageStyleSheet && this.pageStyleSheet.parentNode) {
      this.pageStyleSheet.parentNode.removeChild(this.pageStyleSheet);
      this.pageStyleSheet = null;
    }
    this.scratchCanvas.width = this.scratchCanvas.height = 0;
    this.scratchCanvas = null;
    activeService = null;
    ensureOverlay().then(function () {
      if (_overlay_manager.OverlayManager.active !== 'printServiceOverlay') {
        return;
      }
      _overlay_manager.OverlayManager.close('printServiceOverlay');
    });
  },
  renderPages: function renderPages() {
    var _this = this;

    var pageCount = this.pagesOverview.length;
    var renderNextPage = function renderNextPage(resolve, reject) {
      _this.throwIfInactive();
      if (++_this.currentPage >= pageCount) {
        renderProgress(pageCount, pageCount);
        resolve();
        return;
      }
      var index = _this.currentPage;
      renderProgress(index, pageCount);
      renderPage(_this, _this.pdfDocument, index + 1, _this.pagesOverview[index]).then(_this.useRenderedPage.bind(_this)).then(function () {
        renderNextPage(resolve, reject);
      }, reject);
    };
    return new Promise(renderNextPage);
  },
  useRenderedPage: function useRenderedPage(printItem) {
    this.throwIfInactive();
    var img = document.createElement('img');
    img.style.width = printItem.width;
    img.style.height = printItem.height;
    var scratchCanvas = this.scratchCanvas;
    if ('toBlob' in scratchCanvas && !_pdfjs.PDFJS.disableCreateObjectURL) {
      scratchCanvas.toBlob(function (blob) {
        img.src = URL.createObjectURL(blob);
      });
    } else {
      img.src = scratchCanvas.toDataURL();
    }
    var wrapper = document.createElement('div');
    wrapper.appendChild(img);
    this.printContainer.appendChild(wrapper);
    return new Promise(function (resolve, reject) {
      img.onload = resolve;
      img.onerror = reject;
    });
  },
  performPrint: function performPrint() {
    var _this2 = this;

    this.throwIfInactive();
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (!_this2.active) {
          resolve();
          return;
        }
        print.call(window);
        setTimeout(resolve, 20);
      }, 0);
    });
  },

  get active() {
    return this === activeService;
  },
  throwIfInactive: function throwIfInactive() {
    if (!this.active) {
      throw new Error('This print request was cancelled or completed.');
    }
  }
};
var print = window.print;
window.print = function print() {
  if (activeService) {
    console.warn('Ignored window.print() because of a pending print job.');
    return;
  }
  ensureOverlay().then(function () {
    if (activeService) {
      _overlay_manager.OverlayManager.open('printServiceOverlay');
    }
  });
  try {
    dispatchEvent('beforeprint');
  } finally {
    if (!activeService) {
      console.error('Expected print service to be initialized.');
      if (_overlay_manager.OverlayManager.active === 'printServiceOverlay') {
        _overlay_manager.OverlayManager.close('printServiceOverlay');
      }
      return;
    }
    var activeServiceOnEntry = activeService;
    activeService.renderPages().then(function () {
      return activeServiceOnEntry.performPrint();
    }).catch(function () {}).then(function () {
      if (activeServiceOnEntry.active) {
        abort();
      }
    });
  }
};
function dispatchEvent(eventType) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventType, false, false, 'custom');
  window.dispatchEvent(event);
}
function abort() {
  if (activeService) {
    activeService.destroy();
    dispatchEvent('afterprint');
  }
}
function renderProgress(index, total) {
  var progressContainer = document.getElementById('printServiceOverlay');
  var progress = Math.round(100 * index / total);
  var progressBar = progressContainer.querySelector('progress');
  var progressPerc = progressContainer.querySelector('.relative-progress');
  progressBar.value = progress;
  progressPerc.textContent = _ui_utils.mozL10n.get('print_progress_percent', { progress: progress }, progress + '%');
}
var hasAttachEvent = !!document.attachEvent;
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 80 && (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)) {
    window.print();
    if (hasAttachEvent) {
      return;
    }
    event.preventDefault();
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    } else {
      event.stopPropagation();
    }
    return;
  }
}, true);
if (hasAttachEvent) {
  document.attachEvent('onkeydown', function (event) {
    event = event || window.event;
    if (event.keyCode === 80 && event.ctrlKey) {
      event.keyCode = 0;
      return false;
    }
  });
}
if ('onbeforeprint' in window) {
  var stopPropagationIfNeeded = function stopPropagationIfNeeded(event) {
    if (event.detail !== 'custom' && event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
  };
  window.addEventListener('beforeprint', stopPropagationIfNeeded);
  window.addEventListener('afterprint', stopPropagationIfNeeded);
}
var overlayPromise;
function ensureOverlay() {
  if (!overlayPromise) {
    overlayPromise = _overlay_manager.OverlayManager.register('printServiceOverlay', document.getElementById('printServiceOverlay'), abort, true);
    document.getElementById('printCancel').onclick = abort;
  }
  return overlayPromise;
}
_app.PDFPrintServiceFactory.instance = {
  supportsPrinting: true,
  createPrintService: function createPrintService(pdfDocument, pagesOverview, printContainer) {
    if (activeService) {
      throw new Error('The print service is created and active.');
    }
    activeService = new PDFPrintService(pdfDocument, pagesOverview, printContainer);
    return activeService;
  }
};
exports.PDFPrintService = PDFPrintService;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultAnnotationLayerFactory = exports.AnnotationLayerBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pdfjs = __webpack_require__(1);

var _ui_utils = __webpack_require__(0);

var _pdf_link_service = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnnotationLayerBuilder = function () {
  function AnnotationLayerBuilder(options) {
    _classCallCheck(this, AnnotationLayerBuilder);

    this.pageDiv = options.pageDiv;
    this.pdfPage = options.pdfPage;
    this.renderInteractiveForms = options.renderInteractiveForms;
    this.linkService = options.linkService;
    this.downloadManager = options.downloadManager;
    this.div = null;
  }

  _createClass(AnnotationLayerBuilder, [{
    key: 'render',
    value: function render(viewport) {
      var _this = this;

      var intent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'display';

      this.pdfPage.getAnnotations({ intent: intent }).then(function (annotations) {
        var parameters = {
          viewport: viewport.clone({ dontFlip: true }),
          div: _this.div,
          annotations: annotations,
          page: _this.pdfPage,
          renderInteractiveForms: _this.renderInteractiveForms,
          linkService: _this.linkService,
          downloadManager: _this.downloadManager
        };
        if (_this.div) {
          _pdfjs.AnnotationLayer.update(parameters);
        } else {
          if (annotations.length === 0) {
            return;
          }
          _this.div = document.createElement('div');
          _this.div.className = 'annotationLayer';
          _this.pageDiv.appendChild(_this.div);
          parameters.div = _this.div;
          _pdfjs.AnnotationLayer.render(parameters);
          if (typeof _ui_utils.mozL10n !== 'undefined') {
            _ui_utils.mozL10n.translate(_this.div);
          }
        }
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (!this.div) {
        return;
      }
      this.div.setAttribute('hidden', 'true');
    }
  }]);

  return AnnotationLayerBuilder;
}();

var DefaultAnnotationLayerFactory = function () {
  function DefaultAnnotationLayerFactory() {
    _classCallCheck(this, DefaultAnnotationLayerFactory);
  }

  _createClass(DefaultAnnotationLayerFactory, [{
    key: 'createAnnotationLayerBuilder',
    value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
      var renderInteractiveForms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return new AnnotationLayerBuilder({
        pageDiv: pageDiv,
        pdfPage: pdfPage,
        renderInteractiveForms: renderInteractiveForms,
        linkService: new _pdf_link_service.SimpleLinkService()
      });
    }
  }]);

  return DefaultAnnotationLayerFactory;
}();

exports.AnnotationLayerBuilder = AnnotationLayerBuilder;
exports.DefaultAnnotationLayerFactory = DefaultAnnotationLayerFactory;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadManager = undefined;

var _pdfjs = __webpack_require__(1);

;
function download(blobUrl, filename) {
  var a = document.createElement('a');
  if (a.click) {
    a.href = blobUrl;
    a.target = '_parent';
    if ('download' in a) {
      a.download = filename;
    }
    (document.body || document.documentElement).appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
  } else {
    if (window.top === window && blobUrl.split('#')[0] === window.location.href.split('#')[0]) {
      var padCharacter = blobUrl.indexOf('?') === -1 ? '?' : '&';
      blobUrl = blobUrl.replace(/#|$/, padCharacter + '$&');
    }
    window.open(blobUrl, '_parent');
  }
}
function DownloadManager() {}
DownloadManager.prototype = {
  downloadUrl: function DownloadManager_downloadUrl(url, filename) {
    if (!(0, _pdfjs.createValidAbsoluteUrl)(url, 'http://example.com')) {
      return;
    }
    download(url + '#pdfjs.action=download', filename);
  },
  downloadData: function DownloadManager_downloadData(data, filename, contentType) {
    if (navigator.msSaveBlob) {
      return navigator.msSaveBlob(new Blob([data], { type: contentType }), filename);
    }
    var blobUrl = (0, _pdfjs.createObjectURL)(data, contentType, _pdfjs.PDFJS.disableCreateObjectURL);
    download(blobUrl, filename);
  },
  download: function DownloadManager_download(blob, url, filename) {
    if (navigator.msSaveBlob) {
      if (!navigator.msSaveBlob(blob, filename)) {
        this.downloadUrl(url, filename);
      }
      return;
    }
    if (_pdfjs.PDFJS.disableCreateObjectURL) {
      this.downloadUrl(url, filename);
      return;
    }
    var blobUrl = URL.createObjectURL(blob);
    download(blobUrl, filename);
  }
};
exports.DownloadManager = DownloadManager;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function GrabToPan(options) {
  this.element = options.element;
  this.document = options.element.ownerDocument;
  if (typeof options.ignoreTarget === 'function') {
    this.ignoreTarget = options.ignoreTarget;
  }
  this.onActiveChanged = options.onActiveChanged;
  this.activate = this.activate.bind(this);
  this.deactivate = this.deactivate.bind(this);
  this.toggle = this.toggle.bind(this);
  this._onmousedown = this._onmousedown.bind(this);
  this._onmousemove = this._onmousemove.bind(this);
  this._endPan = this._endPan.bind(this);
  var overlay = this.overlay = document.createElement('div');
  overlay.className = 'grab-to-pan-grabbing';
}
GrabToPan.prototype = {
  CSS_CLASS_GRAB: 'grab-to-pan-grab',
  activate: function GrabToPan_activate() {
    if (!this.active) {
      this.active = true;
      this.element.addEventListener('mousedown', this._onmousedown, true);
      this.element.classList.add(this.CSS_CLASS_GRAB);
      if (this.onActiveChanged) {
        this.onActiveChanged(true);
      }
    }
  },
  deactivate: function GrabToPan_deactivate() {
    if (this.active) {
      this.active = false;
      this.element.removeEventListener('mousedown', this._onmousedown, true);
      this._endPan();
      this.element.classList.remove(this.CSS_CLASS_GRAB);
      if (this.onActiveChanged) {
        this.onActiveChanged(false);
      }
    }
  },
  toggle: function GrabToPan_toggle() {
    if (this.active) {
      this.deactivate();
    } else {
      this.activate();
    }
  },
  ignoreTarget: function GrabToPan_ignoreTarget(node) {
    return node[matchesSelector]('a[href], a[href] *, input, textarea, button, button *, select, option');
  },
  _onmousedown: function GrabToPan__onmousedown(event) {
    if (event.button !== 0 || this.ignoreTarget(event.target)) {
      return;
    }
    if (event.originalTarget) {
      try {
        event.originalTarget.tagName;
      } catch (e) {
        return;
      }
    }
    this.scrollLeftStart = this.element.scrollLeft;
    this.scrollTopStart = this.element.scrollTop;
    this.clientXStart = event.clientX;
    this.clientYStart = event.clientY;
    this.document.addEventListener('mousemove', this._onmousemove, true);
    this.document.addEventListener('mouseup', this._endPan, true);
    this.element.addEventListener('scroll', this._endPan, true);
    event.preventDefault();
    event.stopPropagation();
    var focusedElement = document.activeElement;
    if (focusedElement && !focusedElement.contains(event.target)) {
      focusedElement.blur();
    }
  },
  _onmousemove: function GrabToPan__onmousemove(event) {
    this.element.removeEventListener('scroll', this._endPan, true);
    if (isLeftMouseReleased(event)) {
      this._endPan();
      return;
    }
    var xDiff = event.clientX - this.clientXStart;
    var yDiff = event.clientY - this.clientYStart;
    var scrollTop = this.scrollTopStart - yDiff;
    var scrollLeft = this.scrollLeftStart - xDiff;
    if (this.element.scrollTo) {
      this.element.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: 'instant'
      });
    } else {
      this.element.scrollTop = scrollTop;
      this.element.scrollLeft = scrollLeft;
    }
    if (!this.overlay.parentNode) {
      document.body.appendChild(this.overlay);
    }
  },
  _endPan: function GrabToPan__endPan() {
    this.element.removeEventListener('scroll', this._endPan, true);
    this.document.removeEventListener('mousemove', this._onmousemove, true);
    this.document.removeEventListener('mouseup', this._endPan, true);
    this.overlay.remove();
  }
};
var matchesSelector;
['webkitM', 'mozM', 'msM', 'oM', 'm'].some(function (prefix) {
  var name = prefix + 'atches';
  if (name in document.documentElement) {
    matchesSelector = name;
  }
  name += 'Selector';
  if (name in document.documentElement) {
    matchesSelector = name;
  }
  return matchesSelector;
});
var isNotIEorIsIE10plus = !document.documentMode || document.documentMode > 9;
var chrome = window.chrome;
var isChrome15OrOpera15plus = chrome && (chrome.webstore || chrome.app);
var isSafari6plus = /Apple/.test(navigator.vendor) && /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);
function isLeftMouseReleased(event) {
  if ('buttons' in event && isNotIEorIsIE10plus) {
    return !(event.buttons & 1);
  }
  if (isChrome15OrOpera15plus || isSafari6plus) {
    return event.which === 0;
  }
}
exports.GrabToPan = GrabToPan;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordPrompt = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui_utils = __webpack_require__(0);

var _overlay_manager = __webpack_require__(4);

var _pdfjs = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PasswordPrompt = function () {
  function PasswordPrompt(options) {
    var _this = this;

    _classCallCheck(this, PasswordPrompt);

    this.overlayName = options.overlayName;
    this.container = options.container;
    this.label = options.label;
    this.input = options.input;
    this.submitButton = options.submitButton;
    this.cancelButton = options.cancelButton;
    this.updateCallback = null;
    this.reason = null;
    this.submitButton.addEventListener('click', this.verify.bind(this));
    this.cancelButton.addEventListener('click', this.close.bind(this));
    this.input.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        _this.verify();
      }
    });
    _overlay_manager.OverlayManager.register(this.overlayName, this.container, this.close.bind(this), true);
  }

  _createClass(PasswordPrompt, [{
    key: 'open',
    value: function open() {
      var _this2 = this;

      _overlay_manager.OverlayManager.open(this.overlayName).then(function () {
        _this2.input.focus();
        var promptString = _ui_utils.mozL10n.get('password_label', null, 'Enter the password to open this PDF file.');
        if (_this2.reason === _pdfjs.PasswordResponses.INCORRECT_PASSWORD) {
          promptString = _ui_utils.mozL10n.get('password_invalid', null, 'Invalid password. Please try again.');
        }
        _this2.label.textContent = promptString;
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      _overlay_manager.OverlayManager.close(this.overlayName).then(function () {
        _this3.input.value = '';
      });
    }
  }, {
    key: 'verify',
    value: function verify() {
      var password = this.input.value;
      if (password && password.length > 0) {
        this.close();
        return this.updateCallback(password);
      }
    }
  }, {
    key: 'setUpdateCallback',
    value: function setUpdateCallback(updateCallback, reason) {
      this.updateCallback = updateCallback;
      this.reason = reason;
    }
  }]);

  return PasswordPrompt;
}();

exports.PasswordPrompt = PasswordPrompt;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFAttachmentViewer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pdfjs = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PDFAttachmentViewer = function () {
  function PDFAttachmentViewer(options) {
    _classCallCheck(this, PDFAttachmentViewer);

    this.attachments = null;
    this.container = options.container;
    this.eventBus = options.eventBus;
    this.downloadManager = options.downloadManager;
    this._renderedCapability = (0, _pdfjs.createPromiseCapability)();
    this.eventBus.on('fileattachmentannotation', this._appendAttachment.bind(this));
  }

  _createClass(PDFAttachmentViewer, [{
    key: 'reset',
    value: function reset() {
      var keepRenderedCapability = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.attachments = null;
      this.container.textContent = '';
      if (!keepRenderedCapability) {
        this._renderedCapability = (0, _pdfjs.createPromiseCapability)();
      }
    }
  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent(attachmentsCount) {
      this.eventBus.dispatch('attachmentsloaded', {
        source: this,
        attachmentsCount: attachmentsCount
      });
      this._renderedCapability.resolve();
    }
  }, {
    key: '_bindPdfLink',
    value: function _bindPdfLink(button, content, filename) {
      if (_pdfjs.PDFJS.disableCreateObjectURL) {
        throw new Error('bindPdfLink: ' + 'Unsupported "PDFJS.disableCreateObjectURL" value.');
      }
      var blobUrl;
      button.onclick = function () {
        if (!blobUrl) {
          blobUrl = (0, _pdfjs.createObjectURL)(content, 'application/pdf');
        }
        var viewerUrl;
        viewerUrl = '?file=' + encodeURIComponent(blobUrl + '#' + filename);
        window.open(viewerUrl);
        return false;
      };
    }
  }, {
    key: '_bindLink',
    value: function _bindLink(button, content, filename) {
      var _this = this;

      button.onclick = function () {
        _this.downloadManager.downloadData(content, filename, '');
        return false;
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var attachments = params.attachments || null;
      var attachmentsCount = 0;
      if (this.attachments) {
        var keepRenderedCapability = params.keepRenderedCapability === true;
        this.reset(keepRenderedCapability);
      }
      this.attachments = attachments;
      if (!attachments) {
        this._dispatchEvent(attachmentsCount);
        return;
      }
      var names = Object.keys(attachments).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      attachmentsCount = names.length;
      for (var i = 0; i < attachmentsCount; i++) {
        var item = attachments[names[i]];
        var filename = (0, _pdfjs.removeNullCharacters)((0, _pdfjs.getFilenameFromUrl)(item.filename));
        var div = document.createElement('div');
        div.className = 'attachmentsItem';
        var button = document.createElement('button');
        button.textContent = filename;
        if (/\.pdf$/i.test(filename) && !_pdfjs.PDFJS.disableCreateObjectURL) {
          this._bindPdfLink(button, item.content, filename);
        } else {
          this._bindLink(button, item.content, filename);
        }
        div.appendChild(button);
        this.container.appendChild(div);
      }
      this._dispatchEvent(attachmentsCount);
    }
  }, {
    key: '_appendAttachment',
    value: function _appendAttachment(_ref) {
      var _this2 = this;

      var id = _ref.id,
          filename = _ref.filename,
          content = _ref.content;

      this._renderedCapability.promise.then(function () {
        var attachments = _this2.attachments;
        if (!attachments) {
          attachments = Object.create(null);
        } else {
          for (var name in attachments) {
            if (id === name) {
              return;
            }
          }
        }
        attachments[id] = {
          filename: filename,
          content: content
        };
        _this2.render({
          attachments: attachments,
          keepRenderedCapability: true
        });
      });
    }
  }]);

  return PDFAttachmentViewer;
}();

exports.PDFAttachmentViewer = PDFAttachmentViewer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFDocumentProperties = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui_utils = __webpack_require__(0);

var _pdfjs = __webpack_require__(1);

var _overlay_manager = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_FIELD_CONTENT = '-';

var PDFDocumentProperties = function () {
  function PDFDocumentProperties(_ref) {
    var overlayName = _ref.overlayName,
        fields = _ref.fields,
        container = _ref.container,
        closeButton = _ref.closeButton;

    _classCallCheck(this, PDFDocumentProperties);

    this.overlayName = overlayName;
    this.fields = fields;
    this.container = container;
    this._reset();
    if (closeButton) {
      closeButton.addEventListener('click', this.close.bind(this));
    }
    _overlay_manager.OverlayManager.register(this.overlayName, this.container, this.close.bind(this));
  }

  _createClass(PDFDocumentProperties, [{
    key: 'open',
    value: function open() {
      var _this = this;

      var freezeFieldData = function freezeFieldData(data) {
        Object.defineProperty(_this, 'fieldData', {
          value: Object.freeze(data),
          writable: false,
          enumerable: true,
          configurable: true
        });
      };
      Promise.all([_overlay_manager.OverlayManager.open(this.overlayName), this._dataAvailableCapability.promise]).then(function () {
        if (_this.fieldData) {
          _this._updateUI();
          return;
        }
        _this.pdfDocument.getMetadata().then(function (_ref2) {
          var info = _ref2.info,
              metadata = _ref2.metadata;

          freezeFieldData({
            'fileName': (0, _ui_utils.getPDFFileNameFromURL)(_this.url),
            'fileSize': _this._parseFileSize(_this.maybeFileSize),
            'title': info.Title,
            'author': info.Author,
            'subject': info.Subject,
            'keywords': info.Keywords,
            'creationDate': _this._parseDate(info.CreationDate),
            'modificationDate': _this._parseDate(info.ModDate),
            'creator': info.Creator,
            'producer': info.Producer,
            'version': info.PDFFormatVersion,
            'pageCount': _this.pdfDocument.numPages
          });
          _this._updateUI();
          return _this.pdfDocument.getDownloadInfo();
        }).then(function (_ref3) {
          var length = _ref3.length;

          var data = (0, _ui_utils.cloneObj)(_this.fieldData);
          data['fileSize'] = _this._parseFileSize(length);
          freezeFieldData(data);
          _this._updateUI();
        });
      });
    }
  }, {
    key: 'close',
    value: function close() {
      _overlay_manager.OverlayManager.close(this.overlayName);
    }
  }, {
    key: 'setDocument',
    value: function setDocument(pdfDocument, url) {
      if (this.pdfDocument) {
        this._reset();
        this._updateUI(true);
      }
      if (!pdfDocument) {
        return;
      }
      this.pdfDocument = pdfDocument;
      this.url = url;
      this._dataAvailableCapability.resolve();
    }
  }, {
    key: 'setFileSize',
    value: function setFileSize(fileSize) {
      if (typeof fileSize === 'number' && fileSize > 0) {
        this.maybeFileSize = fileSize;
      }
    }
  }, {
    key: '_reset',
    value: function _reset() {
      this.pdfDocument = null;
      this.url = null;
      this.maybeFileSize = 0;
      delete this.fieldData;
      this._dataAvailableCapability = (0, _pdfjs.createPromiseCapability)();
    }
  }, {
    key: '_updateUI',
    value: function _updateUI() {
      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (reset || !this.fieldData) {
        for (var id in this.fields) {
          this.fields[id].textContent = DEFAULT_FIELD_CONTENT;
        }
        return;
      }
      if (_overlay_manager.OverlayManager.active !== this.overlayName) {
        return;
      }
      for (var _id in this.fields) {
        var content = this.fieldData[_id];
        this.fields[_id].textContent = content || content === 0 ? content : DEFAULT_FIELD_CONTENT;
      }
    }
  }, {
    key: '_parseFileSize',
    value: function _parseFileSize() {
      var fileSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var kb = fileSize / 1024;
      if (!kb) {
        return;
      } else if (kb < 1024) {
        return _ui_utils.mozL10n.get('document_properties_kb', {
          size_kb: (+kb.toPrecision(3)).toLocaleString(),
          size_b: fileSize.toLocaleString()
        }, '{{size_kb}} KB ({{size_b}} bytes)');
      }
      return _ui_utils.mozL10n.get('document_properties_mb', {
        size_mb: (+(kb / 1024).toPrecision(3)).toLocaleString(),
        size_b: fileSize.toLocaleString()
      }, '{{size_mb}} MB ({{size_b}} bytes)');
    }
  }, {
    key: '_parseDate',
    value: function _parseDate(inputDate) {
      if (!inputDate) {
        return;
      }
      var dateToParse = inputDate;
      if (dateToParse.substring(0, 2) === 'D:') {
        dateToParse = dateToParse.substring(2);
      }
      var year = parseInt(dateToParse.substring(0, 4), 10);
      var month = parseInt(dateToParse.substring(4, 6), 10) - 1;
      var day = parseInt(dateToParse.substring(6, 8), 10);
      var hours = parseInt(dateToParse.substring(8, 10), 10);
      var minutes = parseInt(dateToParse.substring(10, 12), 10);
      var seconds = parseInt(dateToParse.substring(12, 14), 10);
      var utRel = dateToParse.substring(14, 15);
      var offsetHours = parseInt(dateToParse.substring(15, 17), 10);
      var offsetMinutes = parseInt(dateToParse.substring(18, 20), 10);
      if (utRel === '-') {
        hours += offsetHours;
        minutes += offsetMinutes;
      } else if (utRel === '+') {
        hours -= offsetHours;
        minutes -= offsetMinutes;
      }
      var date = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
      var dateString = date.toLocaleDateString();
      var timeString = date.toLocaleTimeString();
      return _ui_utils.mozL10n.get('document_properties_date_string', {
        date: dateString,
        time: timeString
      }, '{{date}}, {{time}}');
    }
  }]);

  return PDFDocumentProperties;
}();

exports.PDFDocumentProperties = PDFDocumentProperties;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFFindBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pdf_find_controller = __webpack_require__(8);

var _ui_utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PDFFindBar = function () {
  function PDFFindBar(options) {
    var _this = this;

    _classCallCheck(this, PDFFindBar);

    this.opened = false;
    this.bar = options.bar || null;
    this.toggleButton = options.toggleButton || null;
    this.findField = options.findField || null;
    this.highlightAll = options.highlightAllCheckbox || null;
    this.caseSensitive = options.caseSensitiveCheckbox || null;
    this.findMsg = options.findMsg || null;
    this.findResultsCount = options.findResultsCount || null;
    this.findStatusIcon = options.findStatusIcon || null;
    this.findPreviousButton = options.findPreviousButton || null;
    this.findNextButton = options.findNextButton || null;
    this.findController = options.findController || null;
    this.eventBus = options.eventBus;
    if (this.findController === null) {
      throw new Error('PDFFindBar cannot be used without a ' + 'PDFFindController instance.');
    }
    this.toggleButton.addEventListener('click', function () {
      _this.toggle();
    });
    this.findField.addEventListener('input', function () {
      _this.dispatchEvent('');
    });
    this.bar.addEventListener('keydown', function (e) {
      switch (e.keyCode) {
        case 13:
          if (e.target === _this.findField) {
            _this.dispatchEvent('again', e.shiftKey);
          }
          break;
        case 27:
          _this.close();
          break;
      }
    });
    this.findPreviousButton.addEventListener('click', function () {
      _this.dispatchEvent('again', true);
    });
    this.findNextButton.addEventListener('click', function () {
      _this.dispatchEvent('again', false);
    });
    this.highlightAll.addEventListener('click', function () {
      _this.dispatchEvent('highlightallchange');
    });
    this.caseSensitive.addEventListener('click', function () {
      _this.dispatchEvent('casesensitivitychange');
    });
    this.eventBus.on('resize', this._adjustWidth.bind(this));
  }

  _createClass(PDFFindBar, [{
    key: 'reset',
    value: function reset() {
      this.updateUIState();
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(type, findPrev) {
      this.eventBus.dispatch('find', {
        source: this,
        type: type,
        query: this.findField.value,
        caseSensitive: this.caseSensitive.checked,
        phraseSearch: true,
        highlightAll: this.highlightAll.checked,
        findPrevious: findPrev
      });
    }
  }, {
    key: 'updateUIState',
    value: function updateUIState(state, previous, matchCount) {
      var notFound = false;
      var findMsg = '';
      var status = '';
      switch (state) {
        case _pdf_find_controller.FindStates.FIND_FOUND:
          break;
        case _pdf_find_controller.FindStates.FIND_PENDING:
          status = 'pending';
          break;
        case _pdf_find_controller.FindStates.FIND_NOTFOUND:
          findMsg = _ui_utils.mozL10n.get('find_not_found', null, 'Phrase not found');
          notFound = true;
          break;
        case _pdf_find_controller.FindStates.FIND_WRAPPED:
          if (previous) {
            findMsg = _ui_utils.mozL10n.get('find_reached_top', null, 'Reached top of document, continued from bottom');
          } else {
            findMsg = _ui_utils.mozL10n.get('find_reached_bottom', null, 'Reached end of document, continued from top');
          }
          break;
      }
      if (notFound) {
        this.findField.classList.add('notFound');
      } else {
        this.findField.classList.remove('notFound');
      }
      this.findField.setAttribute('data-status', status);
      this.findMsg.textContent = findMsg;
      this.updateResultsCount(matchCount);
      this._adjustWidth();
    }
  }, {
    key: 'updateResultsCount',
    value: function updateResultsCount(matchCount) {
      if (!this.findResultsCount) {
        return;
      }
      if (!matchCount) {
        this.findResultsCount.classList.add('hidden');
        return;
      }
      this.findResultsCount.textContent = matchCount.toLocaleString();
      this.findResultsCount.classList.remove('hidden');
    }
  }, {
    key: 'open',
    value: function open() {
      if (!this.opened) {
        this.opened = true;
        this.toggleButton.classList.add('toggled');
        this.bar.classList.remove('hidden');
      }
      this.findField.select();
      this.findField.focus();
      this._adjustWidth();
    }
  }, {
    key: 'close',
    value: function close() {
      if (!this.opened) {
        return;
      }
      this.opened = false;
      this.toggleButton.classList.remove('toggled');
      this.bar.classList.add('hidden');
      this.findController.active = false;
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: '_adjustWidth',
    value: function _adjustWidth() {
      if (!this.opened) {
        return;
      }
      this.bar.classList.remove('wrapContainers');
      var findbarHeight = this.bar.clientHeight;
      var inputContainerHeight = this.bar.firstElementChild.clientHeight;
      if (findbarHeight > inputContainerHeight) {
        this.bar.classList.add('wrapContainers');
      }
    }
  }]);

  return PDFFindBar;
}();

exports.PDFFindBar = PDFFindBar;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFHistory = undefined;

var _dom_events = __webpack_require__(2);

function PDFHistory(options) {
  this.linkService = options.linkService;
  this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)();
  this.initialized = false;
  this.initialDestination = null;
  this.initialBookmark = null;
}
PDFHistory.prototype = {
  initialize: function pdfHistoryInitialize(fingerprint) {
    this.initialized = true;
    this.reInitialized = false;
    this.allowHashChange = true;
    this.historyUnlocked = true;
    this.isViewerInPresentationMode = false;
    this.previousHash = window.location.hash.substring(1);
    this.currentBookmark = '';
    this.currentPage = 0;
    this.updatePreviousBookmark = false;
    this.previousBookmark = '';
    this.previousPage = 0;
    this.nextHashParam = '';
    this.fingerprint = fingerprint;
    this.currentUid = this.uid = 0;
    this.current = {};
    var state = window.history.state;
    if (this._isStateObjectDefined(state)) {
      if (state.target.dest) {
        this.initialDestination = state.target.dest;
      } else {
        this.initialBookmark = state.target.hash;
      }
      this.currentUid = state.uid;
      this.uid = state.uid + 1;
      this.current = state.target;
    } else {
      if (state && state.fingerprint && this.fingerprint !== state.fingerprint) {
        this.reInitialized = true;
      }
      this._pushOrReplaceState({ fingerprint: this.fingerprint }, true);
    }
    var self = this;
    window.addEventListener('popstate', function pdfHistoryPopstate(evt) {
      if (!self.historyUnlocked) {
        return;
      }
      if (evt.state) {
        self._goTo(evt.state);
        return;
      }
      if (self.uid === 0) {
        var previousParams = self.previousHash && self.currentBookmark && self.previousHash !== self.currentBookmark ? {
          hash: self.currentBookmark,
          page: self.currentPage
        } : { page: 1 };
        replacePreviousHistoryState(previousParams, function () {
          updateHistoryWithCurrentHash();
        });
      } else {
        updateHistoryWithCurrentHash();
      }
    });
    function updateHistoryWithCurrentHash() {
      self.previousHash = window.location.hash.slice(1);
      self._pushToHistory({ hash: self.previousHash }, false, true);
      self._updatePreviousBookmark();
    }
    function replacePreviousHistoryState(params, callback) {
      self.historyUnlocked = false;
      self.allowHashChange = false;
      window.addEventListener('popstate', rewriteHistoryAfterBack);
      history.back();
      function rewriteHistoryAfterBack() {
        window.removeEventListener('popstate', rewriteHistoryAfterBack);
        window.addEventListener('popstate', rewriteHistoryAfterForward);
        self._pushToHistory(params, false, true);
        history.forward();
      }
      function rewriteHistoryAfterForward() {
        window.removeEventListener('popstate', rewriteHistoryAfterForward);
        self.allowHashChange = true;
        self.historyUnlocked = true;
        callback();
      }
    }
    function pdfHistoryBeforeUnload() {
      var previousParams = self._getPreviousParams(null, true);
      if (previousParams) {
        var replacePrevious = !self.current.dest && self.current.hash !== self.previousHash;
        self._pushToHistory(previousParams, false, replacePrevious);
        self._updatePreviousBookmark();
      }
      window.removeEventListener('beforeunload', pdfHistoryBeforeUnload);
    }
    window.addEventListener('beforeunload', pdfHistoryBeforeUnload);
    window.addEventListener('pageshow', function pdfHistoryPageShow(evt) {
      window.addEventListener('beforeunload', pdfHistoryBeforeUnload);
    });
    self.eventBus.on('presentationmodechanged', function (e) {
      self.isViewerInPresentationMode = e.active;
    });
  },
  clearHistoryState: function pdfHistory_clearHistoryState() {
    this._pushOrReplaceState(null, true);
  },
  _isStateObjectDefined: function pdfHistory_isStateObjectDefined(state) {
    return state && state.uid >= 0 && state.fingerprint && this.fingerprint === state.fingerprint && state.target && state.target.hash ? true : false;
  },
  _pushOrReplaceState: function pdfHistory_pushOrReplaceState(stateObj, replace) {
    if (replace) {
      window.history.replaceState(stateObj, '', document.URL);
    } else {
      window.history.pushState(stateObj, '', document.URL);
    }
  },
  get isHashChangeUnlocked() {
    if (!this.initialized) {
      return true;
    }
    return this.allowHashChange;
  },
  _updatePreviousBookmark: function pdfHistory_updatePreviousBookmark() {
    if (this.updatePreviousBookmark && this.currentBookmark && this.currentPage) {
      this.previousBookmark = this.currentBookmark;
      this.previousPage = this.currentPage;
      this.updatePreviousBookmark = false;
    }
  },
  updateCurrentBookmark: function pdfHistoryUpdateCurrentBookmark(bookmark, pageNum) {
    if (this.initialized) {
      this.currentBookmark = bookmark.substring(1);
      this.currentPage = pageNum | 0;
      this._updatePreviousBookmark();
    }
  },
  updateNextHashParam: function pdfHistoryUpdateNextHashParam(param) {
    if (this.initialized) {
      this.nextHashParam = param;
    }
  },
  push: function pdfHistoryPush(params, isInitialBookmark) {
    if (!(this.initialized && this.historyUnlocked)) {
      return;
    }
    if (params.dest && !params.hash) {
      params.hash = this.current.hash && this.current.dest && this.current.dest === params.dest ? this.current.hash : this.linkService.getDestinationHash(params.dest).split('#')[1];
    }
    if (params.page) {
      params.page |= 0;
    }
    if (isInitialBookmark) {
      var target = window.history.state.target;
      if (!target) {
        this._pushToHistory(params, false);
        this.previousHash = window.location.hash.substring(1);
      }
      this.updatePreviousBookmark = this.nextHashParam ? false : true;
      if (target) {
        this._updatePreviousBookmark();
      }
      return;
    }
    if (this.nextHashParam) {
      if (this.nextHashParam === params.hash) {
        this.nextHashParam = null;
        this.updatePreviousBookmark = true;
        return;
      }
      this.nextHashParam = null;
    }
    if (params.hash) {
      if (this.current.hash) {
        if (this.current.hash !== params.hash) {
          this._pushToHistory(params, true);
        } else {
          if (!this.current.page && params.page) {
            this._pushToHistory(params, false, true);
          }
          this.updatePreviousBookmark = true;
        }
      } else {
        this._pushToHistory(params, true);
      }
    } else if (this.current.page && params.page && this.current.page !== params.page) {
      this._pushToHistory(params, true);
    }
  },
  _getPreviousParams: function pdfHistory_getPreviousParams(onlyCheckPage, beforeUnload) {
    if (!(this.currentBookmark && this.currentPage)) {
      return null;
    } else if (this.updatePreviousBookmark) {
      this.updatePreviousBookmark = false;
    }
    if (this.uid > 0 && !(this.previousBookmark && this.previousPage)) {
      return null;
    }
    if (!this.current.dest && !onlyCheckPage || beforeUnload) {
      if (this.previousBookmark === this.currentBookmark) {
        return null;
      }
    } else if (this.current.page || onlyCheckPage) {
      if (this.previousPage === this.currentPage) {
        return null;
      }
    } else {
      return null;
    }
    var params = {
      hash: this.currentBookmark,
      page: this.currentPage
    };
    if (this.isViewerInPresentationMode) {
      params.hash = null;
    }
    return params;
  },
  _stateObj: function pdfHistory_stateObj(params) {
    return {
      fingerprint: this.fingerprint,
      uid: this.uid,
      target: params
    };
  },
  _pushToHistory: function pdfHistory_pushToHistory(params, addPrevious, overwrite) {
    if (!this.initialized) {
      return;
    }
    if (!params.hash && params.page) {
      params.hash = 'page=' + params.page;
    }
    if (addPrevious && !overwrite) {
      var previousParams = this._getPreviousParams();
      if (previousParams) {
        var replacePrevious = !this.current.dest && this.current.hash !== this.previousHash;
        this._pushToHistory(previousParams, false, replacePrevious);
      }
    }
    this._pushOrReplaceState(this._stateObj(params), overwrite || this.uid === 0);
    this.currentUid = this.uid++;
    this.current = params;
    this.updatePreviousBookmark = true;
  },
  _goTo: function pdfHistory_goTo(state) {
    if (!(this.initialized && this.historyUnlocked && this._isStateObjectDefined(state))) {
      return;
    }
    if (!this.reInitialized && state.uid < this.currentUid) {
      var previousParams = this._getPreviousParams(true);
      if (previousParams) {
        this._pushToHistory(this.current, false);
        this._pushToHistory(previousParams, false);
        this.currentUid = state.uid;
        window.history.back();
        return;
      }
    }
    this.historyUnlocked = false;
    if (state.target.dest) {
      this.linkService.navigateTo(state.target.dest);
    } else {
      this.linkService.setHash(state.target.hash);
    }
    this.currentUid = state.uid;
    if (state.uid > this.uid) {
      this.uid = state.uid;
    }
    this.current = state.target;
    this.updatePreviousBookmark = true;
    var currentHash = window.location.hash.substring(1);
    if (this.previousHash !== currentHash) {
      this.allowHashChange = false;
    }
    this.previousHash = currentHash;
    this.historyUnlocked = true;
  },
  back: function pdfHistoryBack() {
    this.go(-1);
  },
  forward: function pdfHistoryForward() {
    this.go(1);
  },
  go: function pdfHistoryGo(direction) {
    if (this.initialized && this.historyUnlocked) {
      var state = window.history.state;
      if (direction === -1 && state && state.uid > 0) {
        window.history.back();
      } else if (direction === 1 && state && state.uid < this.uid - 1) {
        window.history.forward();
      }
    }
  }
};
exports.PDFHistory = PDFHistory;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFOutlineViewer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pdfjs = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_TITLE = '\u2013';

var PDFOutlineViewer = function () {
  function PDFOutlineViewer(options) {
    _classCallCheck(this, PDFOutlineViewer);

    this.outline = null;
    this.lastToggleIsShow = true;
    this.container = options.container;
    this.linkService = options.linkService;
    this.eventBus = options.eventBus;
  }

  _createClass(PDFOutlineViewer, [{
    key: 'reset',
    value: function reset() {
      this.outline = null;
      this.lastToggleIsShow = true;
      this.container.textContent = '';
      this.container.classList.remove('outlineWithDeepNesting');
    }
  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent(outlineCount) {
      this.eventBus.dispatch('outlineloaded', {
        source: this,
        outlineCount: outlineCount
      });
    }
  }, {
    key: '_bindLink',
    value: function _bindLink(element, item) {
      var _this = this;

      if (item.url) {
        (0, _pdfjs.addLinkAttributes)(element, {
          url: item.url,
          target: item.newWindow ? _pdfjs.PDFJS.LinkTarget.BLANK : undefined
        });
        return;
      }
      var destination = item.dest;
      element.href = this.linkService.getDestinationHash(destination);
      element.onclick = function () {
        if (destination) {
          _this.linkService.navigateTo(destination);
        }
        return false;
      };
    }
  }, {
    key: '_setStyles',
    value: function _setStyles(element, item) {
      var styleStr = '';
      if (item.bold) {
        styleStr += 'font-weight: bold;';
      }
      if (item.italic) {
        styleStr += 'font-style: italic;';
      }
      if (styleStr) {
        element.setAttribute('style', styleStr);
      }
    }
  }, {
    key: '_addToggleButton',
    value: function _addToggleButton(div) {
      var _this2 = this;

      var toggler = document.createElement('div');
      toggler.className = 'outlineItemToggler';
      toggler.onclick = function (evt) {
        evt.stopPropagation();
        toggler.classList.toggle('outlineItemsHidden');
        if (evt.shiftKey) {
          var shouldShowAll = !toggler.classList.contains('outlineItemsHidden');
          _this2._toggleOutlineItem(div, shouldShowAll);
        }
      };
      div.insertBefore(toggler, div.firstChild);
    }
  }, {
    key: '_toggleOutlineItem',
    value: function _toggleOutlineItem(root, show) {
      this.lastToggleIsShow = show;
      var togglers = root.querySelectorAll('.outlineItemToggler');
      for (var i = 0, ii = togglers.length; i < ii; ++i) {
        togglers[i].classList[show ? 'remove' : 'add']('outlineItemsHidden');
      }
    }
  }, {
    key: 'toggleOutlineTree',
    value: function toggleOutlineTree() {
      if (!this.outline) {
        return;
      }
      this._toggleOutlineItem(this.container, !this.lastToggleIsShow);
    }
  }, {
    key: 'render',
    value: function render() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var outline = params.outline || null;
      var outlineCount = 0;
      if (this.outline) {
        this.reset();
      }
      this.outline = outline;
      if (!outline) {
        this._dispatchEvent(outlineCount);
        return;
      }
      var fragment = document.createDocumentFragment();
      var queue = [{
        parent: fragment,
        items: this.outline
      }];
      var hasAnyNesting = false;
      while (queue.length > 0) {
        var levelData = queue.shift();
        for (var i = 0, len = levelData.items.length; i < len; i++) {
          var item = levelData.items[i];
          var div = document.createElement('div');
          div.className = 'outlineItem';
          var element = document.createElement('a');
          this._bindLink(element, item);
          this._setStyles(element, item);
          element.textContent = (0, _pdfjs.removeNullCharacters)(item.title) || DEFAULT_TITLE;
          div.appendChild(element);
          if (item.items.length > 0) {
            hasAnyNesting = true;
            this._addToggleButton(div);
            var itemsDiv = document.createElement('div');
            itemsDiv.className = 'outlineItems';
            div.appendChild(itemsDiv);
            queue.push({
              parent: itemsDiv,
              items: item.items
            });
          }
          levelData.parent.appendChild(div);
          outlineCount++;
        }
      }
      if (hasAnyNesting) {
        this.container.classList.add('outlineWithDeepNesting');
      }
      this.container.appendChild(fragment);
      this._dispatchEvent(outlineCount);
    }
  }]);

  return PDFOutlineViewer;
}();

exports.PDFOutlineViewer = PDFOutlineViewer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFPageView = undefined;

var _ui_utils = __webpack_require__(0);

var _pdfjs = __webpack_require__(1);

var _dom_events = __webpack_require__(2);

var _pdf_rendering_queue = __webpack_require__(3);

var TEXT_LAYER_RENDER_DELAY = 200;
var PDFPageView = function PDFPageViewClosure() {
  function PDFPageView(options) {
    var container = options.container;
    var id = options.id;
    var scale = options.scale;
    var defaultViewport = options.defaultViewport;
    var renderingQueue = options.renderingQueue;
    var textLayerFactory = options.textLayerFactory;
    var annotationLayerFactory = options.annotationLayerFactory;
    var enhanceTextSelection = options.enhanceTextSelection || false;
    var renderInteractiveForms = options.renderInteractiveForms || false;
    this.id = id;
    this.renderingId = 'page' + id;
    this.pageLabel = null;
    this.rotation = 0;
    this.scale = scale || _ui_utils.DEFAULT_SCALE;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this.hasRestrictedScaling = false;
    this.enhanceTextSelection = enhanceTextSelection;
    this.renderInteractiveForms = renderInteractiveForms;
    this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)();
    this.renderingQueue = renderingQueue;
    this.textLayerFactory = textLayerFactory;
    this.annotationLayerFactory = annotationLayerFactory;
    this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
    this.paintTask = null;
    this.paintedViewportMap = new WeakMap();
    this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
    this.resume = null;
    this.error = null;
    this.onBeforeDraw = null;
    this.onAfterDraw = null;
    this.textLayer = null;
    this.zoomLayer = null;
    this.annotationLayer = null;
    var div = document.createElement('div');
    div.className = 'page';
    div.style.width = Math.floor(this.viewport.width) + 'px';
    div.style.height = Math.floor(this.viewport.height) + 'px';
    div.setAttribute('data-page-number', this.id);
    this.div = div;
    container.appendChild(div);
  }
  PDFPageView.prototype = {
    setPdfPage: function PDFPageView_setPdfPage(pdfPage) {
      this.pdfPage = pdfPage;
      this.pdfPageRotate = pdfPage.rotate;
      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = pdfPage.getViewport(this.scale * _ui_utils.CSS_UNITS, totalRotation);
      this.stats = pdfPage.stats;
      this.reset();
    },
    destroy: function PDFPageView_destroy() {
      this.reset();
      if (this.pdfPage) {
        this.pdfPage.cleanup();
      }
    },
    _resetZoomLayer: function _resetZoomLayer() {
      var removeFromDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.zoomLayer) {
        return;
      }
      var zoomLayerCanvas = this.zoomLayer.firstChild;
      this.paintedViewportMap.delete(zoomLayerCanvas);
      zoomLayerCanvas.width = 0;
      zoomLayerCanvas.height = 0;
      if (removeFromDOM) {
        this.zoomLayer.remove();
      }
      this.zoomLayer = null;
    },

    reset: function PDFPageView_reset(keepZoomLayer, keepAnnotations) {
      this.cancelRendering();
      var div = this.div;
      div.style.width = Math.floor(this.viewport.width) + 'px';
      div.style.height = Math.floor(this.viewport.height) + 'px';
      var childNodes = div.childNodes;
      var currentZoomLayerNode = keepZoomLayer && this.zoomLayer || null;
      var currentAnnotationNode = keepAnnotations && this.annotationLayer && this.annotationLayer.div || null;
      for (var i = childNodes.length - 1; i >= 0; i--) {
        var node = childNodes[i];
        if (currentZoomLayerNode === node || currentAnnotationNode === node) {
          continue;
        }
        div.removeChild(node);
      }
      div.removeAttribute('data-loaded');
      if (currentAnnotationNode) {
        this.annotationLayer.hide();
      } else {
        this.annotationLayer = null;
      }
      if (!currentZoomLayerNode) {
        if (this.canvas) {
          this.paintedViewportMap.delete(this.canvas);
          this.canvas.width = 0;
          this.canvas.height = 0;
          delete this.canvas;
        }
        this._resetZoomLayer();
      }
      if (this.svg) {
        this.paintedViewportMap.delete(this.svg);
        delete this.svg;
      }
      this.loadingIconDiv = document.createElement('div');
      this.loadingIconDiv.className = 'loadingIcon';
      div.appendChild(this.loadingIconDiv);
    },
    update: function PDFPageView_update(scale, rotation) {
      this.scale = scale || this.scale;
      if (typeof rotation !== 'undefined') {
        this.rotation = rotation;
      }
      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = this.viewport.clone({
        scale: this.scale * _ui_utils.CSS_UNITS,
        rotation: totalRotation
      });
      if (this.svg) {
        this.cssTransform(this.svg, true);
        this.eventBus.dispatch('pagerendered', {
          source: this,
          pageNumber: this.id,
          cssTransform: true
        });
        return;
      }
      var isScalingRestricted = false;
      if (this.canvas && _pdfjs.PDFJS.maxCanvasPixels > 0) {
        var outputScale = this.outputScale;
        if ((Math.floor(this.viewport.width) * outputScale.sx | 0) * (Math.floor(this.viewport.height) * outputScale.sy | 0) > _pdfjs.PDFJS.maxCanvasPixels) {
          isScalingRestricted = true;
        }
      }
      if (this.canvas) {
        if (_pdfjs.PDFJS.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted) {
          this.cssTransform(this.canvas, true);
          this.eventBus.dispatch('pagerendered', {
            source: this,
            pageNumber: this.id,
            cssTransform: true
          });
          return;
        }
        if (!this.zoomLayer) {
          this.zoomLayer = this.canvas.parentNode;
          this.zoomLayer.style.position = 'absolute';
        }
      }
      if (this.zoomLayer) {
        this.cssTransform(this.zoomLayer.firstChild);
      }
      this.reset(true, true);
    },
    cancelRendering: function PDFPageView_cancelRendering() {
      if (this.paintTask) {
        this.paintTask.cancel();
        this.paintTask = null;
      }
      this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
      this.resume = null;
      if (this.textLayer) {
        this.textLayer.cancel();
        this.textLayer = null;
      }
    },
    updatePosition: function PDFPageView_updatePosition() {
      if (this.textLayer) {
        this.textLayer.render(TEXT_LAYER_RENDER_DELAY);
      }
    },
    cssTransform: function PDFPageView_transform(target, redrawAnnotations) {
      var width = this.viewport.width;
      var height = this.viewport.height;
      var div = this.div;
      target.style.width = target.parentNode.style.width = div.style.width = Math.floor(width) + 'px';
      target.style.height = target.parentNode.style.height = div.style.height = Math.floor(height) + 'px';
      var relativeRotation = this.viewport.rotation - this.paintedViewportMap.get(target).rotation;
      var absRotation = Math.abs(relativeRotation);
      var scaleX = 1,
          scaleY = 1;
      if (absRotation === 90 || absRotation === 270) {
        scaleX = height / width;
        scaleY = width / height;
      }
      var cssTransform = 'rotate(' + relativeRotation + 'deg) ' + 'scale(' + scaleX + ',' + scaleY + ')';
      _pdfjs.CustomStyle.setProp('transform', target, cssTransform);
      if (this.textLayer) {
        var textLayerViewport = this.textLayer.viewport;
        var textRelativeRotation = this.viewport.rotation - textLayerViewport.rotation;
        var textAbsRotation = Math.abs(textRelativeRotation);
        var scale = width / textLayerViewport.width;
        if (textAbsRotation === 90 || textAbsRotation === 270) {
          scale = width / textLayerViewport.height;
        }
        var textLayerDiv = this.textLayer.textLayerDiv;
        var transX, transY;
        switch (textAbsRotation) {
          case 0:
            transX = transY = 0;
            break;
          case 90:
            transX = 0;
            transY = '-' + textLayerDiv.style.height;
            break;
          case 180:
            transX = '-' + textLayerDiv.style.width;
            transY = '-' + textLayerDiv.style.height;
            break;
          case 270:
            transX = '-' + textLayerDiv.style.width;
            transY = 0;
            break;
          default:
            console.error('Bad rotation value.');
            break;
        }
        _pdfjs.CustomStyle.setProp('transform', textLayerDiv, 'rotate(' + textAbsRotation + 'deg) ' + 'scale(' + scale + ', ' + scale + ') ' + 'translate(' + transX + ', ' + transY + ')');
        _pdfjs.CustomStyle.setProp('transformOrigin', textLayerDiv, '0% 0%');
      }
      if (redrawAnnotations && this.annotationLayer) {
        this.annotationLayer.render(this.viewport, 'display');
      }
    },
    get width() {
      return this.viewport.width;
    },
    get height() {
      return this.viewport.height;
    },
    getPagePoint: function PDFPageView_getPagePoint(x, y) {
      return this.viewport.convertToPdfPoint(x, y);
    },
    draw: function draw() {
      var _this = this;

      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
        console.error('Must be in new state before drawing');
        this.reset();
      }
      this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
      var pdfPage = this.pdfPage;
      var div = this.div;
      var canvasWrapper = document.createElement('div');
      canvasWrapper.style.width = div.style.width;
      canvasWrapper.style.height = div.style.height;
      canvasWrapper.classList.add('canvasWrapper');
      if (this.annotationLayer && this.annotationLayer.div) {
        div.insertBefore(canvasWrapper, this.annotationLayer.div);
      } else {
        div.appendChild(canvasWrapper);
      }
      var textLayer = null;
      if (this.textLayerFactory) {
        var textLayerDiv = document.createElement('div');
        textLayerDiv.className = 'textLayer';
        textLayerDiv.style.width = canvasWrapper.style.width;
        textLayerDiv.style.height = canvasWrapper.style.height;
        if (this.annotationLayer && this.annotationLayer.div) {
          div.insertBefore(textLayerDiv, this.annotationLayer.div);
        } else {
          div.appendChild(textLayerDiv);
        }
        textLayer = this.textLayerFactory.createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport, this.enhanceTextSelection);
      }
      this.textLayer = textLayer;
      var renderContinueCallback = null;
      if (this.renderingQueue) {
        renderContinueCallback = function renderContinueCallback(cont) {
          if (!_this.renderingQueue.isHighestPriority(_this)) {
            _this.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED;
            _this.resume = function () {
              _this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
              cont();
            };
            return;
          }
          cont();
        };
      }
      var finishPaintTask = function finishPaintTask(error) {
        if (paintTask === _this.paintTask) {
          _this.paintTask = null;
        }
        if (error === 'cancelled' || error instanceof _pdfjs.RenderingCancelledException) {
          _this.error = null;
          return Promise.resolve(undefined);
        }
        _this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
        if (_this.loadingIconDiv) {
          div.removeChild(_this.loadingIconDiv);
          delete _this.loadingIconDiv;
        }
        _this._resetZoomLayer(true);
        _this.error = error;
        _this.stats = pdfPage.stats;
        if (_this.onAfterDraw) {
          _this.onAfterDraw();
        }
        _this.eventBus.dispatch('pagerendered', {
          source: _this,
          pageNumber: _this.id,
          cssTransform: false
        });
        if (error) {
          return Promise.reject(error);
        }
        return Promise.resolve(undefined);
      };
      var paintTask = this.renderer === _ui_utils.RendererType.SVG ? this.paintOnSvg(canvasWrapper) : this.paintOnCanvas(canvasWrapper);
      paintTask.onRenderContinue = renderContinueCallback;
      this.paintTask = paintTask;
      var resultPromise = paintTask.promise.then(function () {
        return finishPaintTask(null).then(function () {
          if (textLayer) {
            pdfPage.getTextContent({ normalizeWhitespace: true }).then(function textContentResolved(textContent) {
              textLayer.setTextContent(textContent);
              textLayer.render(TEXT_LAYER_RENDER_DELAY);
            });
          }
        });
      }, function (reason) {
        return finishPaintTask(reason);
      });
      if (this.annotationLayerFactory) {
        if (!this.annotationLayer) {
          this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(div, pdfPage, this.renderInteractiveForms);
        }
        this.annotationLayer.render(this.viewport, 'display');
      }
      div.setAttribute('data-loaded', true);
      if (this.onBeforeDraw) {
        this.onBeforeDraw();
      }
      return resultPromise;
    },
    paintOnCanvas: function paintOnCanvas(canvasWrapper) {
      var renderCapability = (0, _pdfjs.createPromiseCapability)();
      var result = {
        promise: renderCapability.promise,
        onRenderContinue: function onRenderContinue(cont) {
          cont();
        },
        cancel: function cancel() {
          renderTask.cancel();
        }
      };
      var viewport = this.viewport;
      var canvas = document.createElement('canvas');
      canvas.id = 'page' + this.id;
      canvas.setAttribute('hidden', 'hidden');
      var isCanvasHidden = true;
      var showCanvas = function showCanvas() {
        if (isCanvasHidden) {
          canvas.removeAttribute('hidden');
          isCanvasHidden = false;
        }
      };
      canvasWrapper.appendChild(canvas);
      this.canvas = canvas;
      canvas.mozOpaque = true;
      var ctx = canvas.getContext('2d', { alpha: false });
      var outputScale = (0, _ui_utils.getOutputScale)(ctx);
      this.outputScale = outputScale;
      if (_pdfjs.PDFJS.useOnlyCssZoom) {
        var actualSizeViewport = viewport.clone({ scale: _ui_utils.CSS_UNITS });
        outputScale.sx *= actualSizeViewport.width / viewport.width;
        outputScale.sy *= actualSizeViewport.height / viewport.height;
        outputScale.scaled = true;
      }
      if (_pdfjs.PDFJS.maxCanvasPixels > 0) {
        var pixelsInViewport = viewport.width * viewport.height;
        var maxScale = Math.sqrt(_pdfjs.PDFJS.maxCanvasPixels / pixelsInViewport);
        if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
          outputScale.sx = maxScale;
          outputScale.sy = maxScale;
          outputScale.scaled = true;
          this.hasRestrictedScaling = true;
        } else {
          this.hasRestrictedScaling = false;
        }
      }
      var sfx = (0, _ui_utils.approximateFraction)(outputScale.sx);
      var sfy = (0, _ui_utils.approximateFraction)(outputScale.sy);
      canvas.width = (0, _ui_utils.roundToDivide)(viewport.width * outputScale.sx, sfx[0]);
      canvas.height = (0, _ui_utils.roundToDivide)(viewport.height * outputScale.sy, sfy[0]);
      canvas.style.width = (0, _ui_utils.roundToDivide)(viewport.width, sfx[1]) + 'px';
      canvas.style.height = (0, _ui_utils.roundToDivide)(viewport.height, sfy[1]) + 'px';
      this.paintedViewportMap.set(canvas, viewport);
      var transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
      var renderContext = {
        canvasContext: ctx,
        transform: transform,
        viewport: this.viewport,
        renderInteractiveForms: this.renderInteractiveForms
      };
      var renderTask = this.pdfPage.render(renderContext);
      renderTask.onContinue = function (cont) {
        showCanvas();
        if (result.onRenderContinue) {
          result.onRenderContinue(cont);
        } else {
          cont();
        }
      };
      renderTask.promise.then(function () {
        showCanvas();
        renderCapability.resolve(undefined);
      }, function (error) {
        showCanvas();
        renderCapability.reject(error);
      });
      return result;
    },
    paintOnSvg: function paintOnSvg(wrapper) {
      var _this2 = this;

      var cancelled = false;
      var ensureNotCancelled = function ensureNotCancelled() {
        if (cancelled) {
          if (_pdfjs.PDFJS.pdfjsNext) {
            throw new _pdfjs.RenderingCancelledException('Rendering cancelled, page ' + _this2.id, 'svg');
          } else {
            throw 'cancelled';
          }
        }
      };
      var pdfPage = this.pdfPage;
      var actualSizeViewport = this.viewport.clone({ scale: _ui_utils.CSS_UNITS });
      var promise = pdfPage.getOperatorList().then(function (opList) {
        ensureNotCancelled();
        var svgGfx = new _pdfjs.SVGGraphics(pdfPage.commonObjs, pdfPage.objs);
        return svgGfx.getSVG(opList, actualSizeViewport).then(function (svg) {
          ensureNotCancelled();
          _this2.svg = svg;
          _this2.paintedViewportMap.set(svg, actualSizeViewport);
          svg.style.width = wrapper.style.width;
          svg.style.height = wrapper.style.height;
          _this2.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
          wrapper.appendChild(svg);
        });
      });
      return {
        promise: promise,
        onRenderContinue: function onRenderContinue(cont) {
          cont();
        },
        cancel: function cancel() {
          cancelled = true;
        }
      };
    },

    setPageLabel: function PDFView_setPageLabel(label) {
      this.pageLabel = typeof label === 'string' ? label : null;
      if (this.pageLabel !== null) {
        this.div.setAttribute('data-page-label', this.pageLabel);
      } else {
        this.div.removeAttribute('data-page-label');
      }
    }
  };
  return PDFPageView;
}();
exports.PDFPageView = PDFPageView;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFPresentationMode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui_utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DELAY_BEFORE_RESETTING_SWITCH_IN_PROGRESS = 1500;
var DELAY_BEFORE_HIDING_CONTROLS = 3000;
var ACTIVE_SELECTOR = 'pdfPresentationMode';
var CONTROLS_SELECTOR = 'pdfPresentationModeControls';
var MOUSE_SCROLL_COOLDOWN_TIME = 50;
var PAGE_SWITCH_THRESHOLD = 0.1;
var SWIPE_MIN_DISTANCE_THRESHOLD = 50;
var SWIPE_ANGLE_THRESHOLD = Math.PI / 6;

var PDFPresentationMode = function () {
  function PDFPresentationMode(options) {
    var _this = this;

    _classCallCheck(this, PDFPresentationMode);

    this.container = options.container;
    this.viewer = options.viewer || options.container.firstElementChild;
    this.pdfViewer = options.pdfViewer;
    this.eventBus = options.eventBus;
    var contextMenuItems = options.contextMenuItems || null;
    this.active = false;
    this.args = null;
    this.contextMenuOpen = false;
    this.mouseScrollTimeStamp = 0;
    this.mouseScrollDelta = 0;
    this.touchSwipeState = null;
    if (contextMenuItems) {
      contextMenuItems.contextFirstPage.addEventListener('click', function () {
        _this.contextMenuOpen = false;
        _this.eventBus.dispatch('firstpage');
      });
      contextMenuItems.contextLastPage.addEventListener('click', function () {
        _this.contextMenuOpen = false;
        _this.eventBus.dispatch('lastpage');
      });
      contextMenuItems.contextPageRotateCw.addEventListener('click', function () {
        _this.contextMenuOpen = false;
        _this.eventBus.dispatch('rotatecw');
      });
      contextMenuItems.contextPageRotateCcw.addEventListener('click', function () {
        _this.contextMenuOpen = false;
        _this.eventBus.dispatch('rotateccw');
      });
    }
  }

  _createClass(PDFPresentationMode, [{
    key: 'request',
    value: function request() {
      if (this.switchInProgress || this.active || !this.viewer.hasChildNodes()) {
        return false;
      }
      this._addFullscreenChangeListeners();
      this._setSwitchInProgress();
      this._notifyStateChange();
      if (this.container.requestFullscreen) {
        this.container.requestFullscreen();
      } else if (this.container.mozRequestFullScreen) {
        this.container.mozRequestFullScreen();
      } else if (this.container.webkitRequestFullscreen) {
        this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (this.container.msRequestFullscreen) {
        this.container.msRequestFullscreen();
      } else {
        return false;
      }
      this.args = {
        page: this.pdfViewer.currentPageNumber,
        previousScale: this.pdfViewer.currentScaleValue
      };
      return true;
    }
  }, {
    key: '_mouseWheel',
    value: function _mouseWheel(evt) {
      if (!this.active) {
        return;
      }
      evt.preventDefault();
      var delta = (0, _ui_utils.normalizeWheelEventDelta)(evt);
      var currentTime = new Date().getTime();
      var storedTime = this.mouseScrollTimeStamp;
      if (currentTime > storedTime && currentTime - storedTime < MOUSE_SCROLL_COOLDOWN_TIME) {
        return;
      }
      if (this.mouseScrollDelta > 0 && delta < 0 || this.mouseScrollDelta < 0 && delta > 0) {
        this._resetMouseScrollState();
      }
      this.mouseScrollDelta += delta;
      if (Math.abs(this.mouseScrollDelta) >= PAGE_SWITCH_THRESHOLD) {
        var totalDelta = this.mouseScrollDelta;
        this._resetMouseScrollState();
        var success = totalDelta > 0 ? this._goToPreviousPage() : this._goToNextPage();
        if (success) {
          this.mouseScrollTimeStamp = currentTime;
        }
      }
    }
  }, {
    key: '_goToPreviousPage',
    value: function _goToPreviousPage() {
      var page = this.pdfViewer.currentPageNumber;
      if (page <= 1) {
        return false;
      }
      this.pdfViewer.currentPageNumber = page - 1;
      return true;
    }
  }, {
    key: '_goToNextPage',
    value: function _goToNextPage() {
      var page = this.pdfViewer.currentPageNumber;
      if (page >= this.pdfViewer.pagesCount) {
        return false;
      }
      this.pdfViewer.currentPageNumber = page + 1;
      return true;
    }
  }, {
    key: '_notifyStateChange',
    value: function _notifyStateChange() {
      this.eventBus.dispatch('presentationmodechanged', {
        source: this,
        active: this.active,
        switchInProgress: !!this.switchInProgress
      });
    }
  }, {
    key: '_setSwitchInProgress',
    value: function _setSwitchInProgress() {
      var _this2 = this;

      if (this.switchInProgress) {
        clearTimeout(this.switchInProgress);
      }
      this.switchInProgress = setTimeout(function () {
        _this2._removeFullscreenChangeListeners();
        delete _this2.switchInProgress;
        _this2._notifyStateChange();
      }, DELAY_BEFORE_RESETTING_SWITCH_IN_PROGRESS);
    }
  }, {
    key: '_resetSwitchInProgress',
    value: function _resetSwitchInProgress() {
      if (this.switchInProgress) {
        clearTimeout(this.switchInProgress);
        delete this.switchInProgress;
      }
    }
  }, {
    key: '_enter',
    value: function _enter() {
      var _this3 = this;

      this.active = true;
      this._resetSwitchInProgress();
      this._notifyStateChange();
      this.container.classList.add(ACTIVE_SELECTOR);
      setTimeout(function () {
        _this3.pdfViewer.currentPageNumber = _this3.args.page;
        _this3.pdfViewer.currentScaleValue = 'page-fit';
      }, 0);
      this._addWindowListeners();
      this._showControls();
      this.contextMenuOpen = false;
      this.container.setAttribute('contextmenu', 'viewerContextMenu');
      window.getSelection().removeAllRanges();
    }
  }, {
    key: '_exit',
    value: function _exit() {
      var _this4 = this;

      var page = this.pdfViewer.currentPageNumber;
      this.container.classList.remove(ACTIVE_SELECTOR);
      setTimeout(function () {
        _this4.active = false;
        _this4._removeFullscreenChangeListeners();
        _this4._notifyStateChange();
        _this4.pdfViewer.currentScaleValue = _this4.args.previousScale;
        _this4.pdfViewer.currentPageNumber = page;
        _this4.args = null;
      }, 0);
      this._removeWindowListeners();
      this._hideControls();
      this._resetMouseScrollState();
      this.container.removeAttribute('contextmenu');
      this.contextMenuOpen = false;
    }
  }, {
    key: '_mouseDown',
    value: function _mouseDown(evt) {
      if (this.contextMenuOpen) {
        this.contextMenuOpen = false;
        evt.preventDefault();
        return;
      }
      if (evt.button === 0) {
        var isInternalLink = evt.target.href && evt.target.classList.contains('internalLink');
        if (!isInternalLink) {
          evt.preventDefault();
          this.pdfViewer.currentPageNumber += evt.shiftKey ? -1 : 1;
        }
      }
    }
  }, {
    key: '_contextMenu',
    value: function _contextMenu() {
      this.contextMenuOpen = true;
    }
  }, {
    key: '_showControls',
    value: function _showControls() {
      var _this5 = this;

      if (this.controlsTimeout) {
        clearTimeout(this.controlsTimeout);
      } else {
        this.container.classList.add(CONTROLS_SELECTOR);
      }
      this.controlsTimeout = setTimeout(function () {
        _this5.container.classList.remove(CONTROLS_SELECTOR);
        delete _this5.controlsTimeout;
      }, DELAY_BEFORE_HIDING_CONTROLS);
    }
  }, {
    key: '_hideControls',
    value: function _hideControls() {
      if (!this.controlsTimeout) {
        return;
      }
      clearTimeout(this.controlsTimeout);
      this.container.classList.remove(CONTROLS_SELECTOR);
      delete this.controlsTimeout;
    }
  }, {
    key: '_resetMouseScrollState',
    value: function _resetMouseScrollState() {
      this.mouseScrollTimeStamp = 0;
      this.mouseScrollDelta = 0;
    }
  }, {
    key: '_touchSwipe',
    value: function _touchSwipe(evt) {
      if (!this.active) {
        return;
      }
      if (evt.touches.length > 1) {
        this.touchSwipeState = null;
        return;
      }
      switch (evt.type) {
        case 'touchstart':
          this.touchSwipeState = {
            startX: evt.touches[0].pageX,
            startY: evt.touches[0].pageY,
            endX: evt.touches[0].pageX,
            endY: evt.touches[0].pageY
          };
          break;
        case 'touchmove':
          if (this.touchSwipeState === null) {
            return;
          }
          this.touchSwipeState.endX = evt.touches[0].pageX;
          this.touchSwipeState.endY = evt.touches[0].pageY;
          evt.preventDefault();
          break;
        case 'touchend':
          if (this.touchSwipeState === null) {
            return;
          }
          var delta = 0;
          var dx = this.touchSwipeState.endX - this.touchSwipeState.startX;
          var dy = this.touchSwipeState.endY - this.touchSwipeState.startY;
          var absAngle = Math.abs(Math.atan2(dy, dx));
          if (Math.abs(dx) > SWIPE_MIN_DISTANCE_THRESHOLD && (absAngle <= SWIPE_ANGLE_THRESHOLD || absAngle >= Math.PI - SWIPE_ANGLE_THRESHOLD)) {
            delta = dx;
          } else if (Math.abs(dy) > SWIPE_MIN_DISTANCE_THRESHOLD && Math.abs(absAngle - Math.PI / 2) <= SWIPE_ANGLE_THRESHOLD) {
            delta = dy;
          }
          if (delta > 0) {
            this._goToPreviousPage();
          } else if (delta < 0) {
            this._goToNextPage();
          }
          break;
      }
    }
  }, {
    key: '_addWindowListeners',
    value: function _addWindowListeners() {
      this.showControlsBind = this._showControls.bind(this);
      this.mouseDownBind = this._mouseDown.bind(this);
      this.mouseWheelBind = this._mouseWheel.bind(this);
      this.resetMouseScrollStateBind = this._resetMouseScrollState.bind(this);
      this.contextMenuBind = this._contextMenu.bind(this);
      this.touchSwipeBind = this._touchSwipe.bind(this);
      window.addEventListener('mousemove', this.showControlsBind);
      window.addEventListener('mousedown', this.mouseDownBind);
      window.addEventListener('wheel', this.mouseWheelBind);
      window.addEventListener('keydown', this.resetMouseScrollStateBind);
      window.addEventListener('contextmenu', this.contextMenuBind);
      window.addEventListener('touchstart', this.touchSwipeBind);
      window.addEventListener('touchmove', this.touchSwipeBind);
      window.addEventListener('touchend', this.touchSwipeBind);
    }
  }, {
    key: '_removeWindowListeners',
    value: function _removeWindowListeners() {
      window.removeEventListener('mousemove', this.showControlsBind);
      window.removeEventListener('mousedown', this.mouseDownBind);
      window.removeEventListener('wheel', this.mouseWheelBind);
      window.removeEventListener('keydown', this.resetMouseScrollStateBind);
      window.removeEventListener('contextmenu', this.contextMenuBind);
      window.removeEventListener('touchstart', this.touchSwipeBind);
      window.removeEventListener('touchmove', this.touchSwipeBind);
      window.removeEventListener('touchend', this.touchSwipeBind);
      delete this.showControlsBind;
      delete this.mouseDownBind;
      delete this.mouseWheelBind;
      delete this.resetMouseScrollStateBind;
      delete this.contextMenuBind;
      delete this.touchSwipeBind;
    }
  }, {
    key: '_fullscreenChange',
    value: function _fullscreenChange() {
      if (this.isFullscreen) {
        this._enter();
      } else {
        this._exit();
      }
    }
  }, {
    key: '_addFullscreenChangeListeners',
    value: function _addFullscreenChangeListeners() {
      this.fullscreenChangeBind = this._fullscreenChange.bind(this);
      window.addEventListener('fullscreenchange', this.fullscreenChangeBind);
      window.addEventListener('mozfullscreenchange', this.fullscreenChangeBind);
      window.addEventListener('webkitfullscreenchange', this.fullscreenChangeBind);
      window.addEventListener('MSFullscreenChange', this.fullscreenChangeBind);
    }
  }, {
    key: '_removeFullscreenChangeListeners',
    value: function _removeFullscreenChangeListeners() {
      window.removeEventListener('fullscreenchange', this.fullscreenChangeBind);
      window.removeEventListener('mozfullscreenchange', this.fullscreenChangeBind);
      window.removeEventListener('webkitfullscreenchange', this.fullscreenChangeBind);
      window.removeEventListener('MSFullscreenChange', this.fullscreenChangeBind);
      delete this.fullscreenChangeBind;
    }
  }, {
    key: 'isFullscreen',
    get: function get() {
      return !!(document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement);
    }
  }]);

  return PDFPresentationMode;
}();

exports.PDFPresentationMode = PDFPresentationMode;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFSidebar = exports.SidebarView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui_utils = __webpack_require__(0);

var _pdf_rendering_queue = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI_NOTIFICATION_CLASS = 'pdfSidebarNotification';
var SidebarView = {
  NONE: 0,
  THUMBS: 1,
  OUTLINE: 2,
  ATTACHMENTS: 3
};

var PDFSidebar = function () {
  function PDFSidebar(options) {
    _classCallCheck(this, PDFSidebar);

    this.isOpen = false;
    this.active = SidebarView.THUMBS;
    this.isInitialViewSet = false;
    this.onToggled = null;
    this.pdfViewer = options.pdfViewer;
    this.pdfThumbnailViewer = options.pdfThumbnailViewer;
    this.pdfOutlineViewer = options.pdfOutlineViewer;
    this.mainContainer = options.mainContainer;
    this.outerContainer = options.outerContainer;
    this.eventBus = options.eventBus;
    this.toggleButton = options.toggleButton;
    this.thumbnailButton = options.thumbnailButton;
    this.outlineButton = options.outlineButton;
    this.attachmentsButton = options.attachmentsButton;
    this.thumbnailView = options.thumbnailView;
    this.outlineView = options.outlineView;
    this.attachmentsView = options.attachmentsView;
    this.disableNotification = options.disableNotification || false;
    this._addEventListeners();
  }

  _createClass(PDFSidebar, [{
    key: 'reset',
    value: function reset() {
      this.isInitialViewSet = false;
      this._hideUINotification(null);
      this.switchView(SidebarView.THUMBS);
      this.outlineButton.disabled = false;
      this.attachmentsButton.disabled = false;
    }
  }, {
    key: 'setInitialView',
    value: function setInitialView(view) {
      if (this.isInitialViewSet) {
        return;
      }
      this.isInitialViewSet = true;
      if (this.isOpen && view === SidebarView.NONE) {
        this._dispatchEvent();
        return;
      }
      var isViewPreserved = view === this.visibleView;
      this.switchView(view, true);
      if (isViewPreserved) {
        this._dispatchEvent();
      }
    }
  }, {
    key: 'switchView',
    value: function switchView(view) {
      var forceOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (view === SidebarView.NONE) {
        this.close();
        return;
      }
      var isViewChanged = view !== this.active;
      var shouldForceRendering = false;
      switch (view) {
        case SidebarView.THUMBS:
          this.thumbnailButton.classList.add('toggled');
          this.outlineButton.classList.remove('toggled');
          this.attachmentsButton.classList.remove('toggled');
          this.thumbnailView.classList.remove('hidden');
          this.outlineView.classList.add('hidden');
          this.attachmentsView.classList.add('hidden');
          if (this.isOpen && isViewChanged) {
            this._updateThumbnailViewer();
            shouldForceRendering = true;
          }
          break;
        case SidebarView.OUTLINE:
          if (this.outlineButton.disabled) {
            return;
          }
          this.thumbnailButton.classList.remove('toggled');
          this.outlineButton.classList.add('toggled');
          this.attachmentsButton.classList.remove('toggled');
          this.thumbnailView.classList.add('hidden');
          this.outlineView.classList.remove('hidden');
          this.attachmentsView.classList.add('hidden');
          break;
        case SidebarView.ATTACHMENTS:
          if (this.attachmentsButton.disabled) {
            return;
          }
          this.thumbnailButton.classList.remove('toggled');
          this.outlineButton.classList.remove('toggled');
          this.attachmentsButton.classList.add('toggled');
          this.thumbnailView.classList.add('hidden');
          this.outlineView.classList.add('hidden');
          this.attachmentsView.classList.remove('hidden');
          break;
        default:
          console.error('PDFSidebar_switchView: "' + view + '" is an unsupported value.');
          return;
      }
      this.active = view | 0;
      if (forceOpen && !this.isOpen) {
        this.open();
        return;
      }
      if (shouldForceRendering) {
        this._forceRendering();
      }
      if (isViewChanged) {
        this._dispatchEvent();
      }
      this._hideUINotification(this.active);
    }
  }, {
    key: 'open',
    value: function open() {
      if (this.isOpen) {
        return;
      }
      this.isOpen = true;
      this.toggleButton.classList.add('toggled');
      this.outerContainer.classList.add('sidebarMoving');
      this.outerContainer.classList.add('sidebarOpen');
      if (this.active === SidebarView.THUMBS) {
        this._updateThumbnailViewer();
      }
      this._forceRendering();
      this._dispatchEvent();
      this._hideUINotification(this.active);
    }
  }, {
    key: 'close',
    value: function close() {
      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;
      this.toggleButton.classList.remove('toggled');
      this.outerContainer.classList.add('sidebarMoving');
      this.outerContainer.classList.remove('sidebarOpen');
      this._forceRendering();
      this._dispatchEvent();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent() {
      this.eventBus.dispatch('sidebarviewchanged', {
        source: this,
        view: this.visibleView
      });
    }
  }, {
    key: '_forceRendering',
    value: function _forceRendering() {
      if (this.onToggled) {
        this.onToggled();
      } else {
        this.pdfViewer.forceRendering();
        this.pdfThumbnailViewer.forceRendering();
      }
    }
  }, {
    key: '_updateThumbnailViewer',
    value: function _updateThumbnailViewer() {
      var pdfViewer = this.pdfViewer;
      var thumbnailViewer = this.pdfThumbnailViewer;
      var pagesCount = pdfViewer.pagesCount;
      for (var pageIndex = 0; pageIndex < pagesCount; pageIndex++) {
        var pageView = pdfViewer.getPageView(pageIndex);
        if (pageView && pageView.renderingState === _pdf_rendering_queue.RenderingStates.FINISHED) {
          var thumbnailView = thumbnailViewer.getThumbnail(pageIndex);
          thumbnailView.setImage(pageView);
        }
      }
      thumbnailViewer.scrollThumbnailIntoView(pdfViewer.currentPageNumber);
    }
  }, {
    key: '_showUINotification',
    value: function _showUINotification(view) {
      if (this.disableNotification) {
        return;
      }
      this.toggleButton.title = _ui_utils.mozL10n.get('toggle_sidebar_notification.title', null, 'Toggle Sidebar (document contains outline/attachments)');
      if (!this.isOpen) {
        this.toggleButton.classList.add(UI_NOTIFICATION_CLASS);
      } else if (view === this.active) {
        return;
      }
      switch (view) {
        case SidebarView.OUTLINE:
          this.outlineButton.classList.add(UI_NOTIFICATION_CLASS);
          break;
        case SidebarView.ATTACHMENTS:
          this.attachmentsButton.classList.add(UI_NOTIFICATION_CLASS);
          break;
      }
    }
  }, {
    key: '_hideUINotification',
    value: function _hideUINotification(view) {
      var _this = this;

      if (this.disableNotification) {
        return;
      }
      var removeNotification = function removeNotification(view) {
        switch (view) {
          case SidebarView.OUTLINE:
            _this.outlineButton.classList.remove(UI_NOTIFICATION_CLASS);
            break;
          case SidebarView.ATTACHMENTS:
            _this.attachmentsButton.classList.remove(UI_NOTIFICATION_CLASS);
            break;
        }
      };
      if (!this.isOpen && view !== null) {
        return;
      }
      this.toggleButton.classList.remove(UI_NOTIFICATION_CLASS);
      if (view !== null) {
        removeNotification(view);
        return;
      }
      for (view in SidebarView) {
        removeNotification(SidebarView[view]);
      }
      this.toggleButton.title = _ui_utils.mozL10n.get('toggle_sidebar.title', null, 'Toggle Sidebar');
    }
  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this2 = this;

      this.mainContainer.addEventListener('transitionend', function (evt) {
        if (evt.target === _this2.mainContainer) {
          _this2.outerContainer.classList.remove('sidebarMoving');
        }
      });
      this.thumbnailButton.addEventListener('click', function () {
        _this2.switchView(SidebarView.THUMBS);
      });
      this.outlineButton.addEventListener('click', function () {
        _this2.switchView(SidebarView.OUTLINE);
      });
      this.outlineButton.addEventListener('dblclick', function () {
        _this2.pdfOutlineViewer.toggleOutlineTree();
      });
      this.attachmentsButton.addEventListener('click', function () {
        _this2.switchView(SidebarView.ATTACHMENTS);
      });
      this.eventBus.on('outlineloaded', function (evt) {
        var outlineCount = evt.outlineCount;
        _this2.outlineButton.disabled = !outlineCount;
        if (outlineCount) {
          _this2._showUINotification(SidebarView.OUTLINE);
        } else if (_this2.active === SidebarView.OUTLINE) {
          _this2.switchView(SidebarView.THUMBS);
        }
      });
      this.eventBus.on('attachmentsloaded', function (evt) {
        var attachmentsCount = evt.attachmentsCount;
        _this2.attachmentsButton.disabled = !attachmentsCount;
        if (attachmentsCount) {
          _this2._showUINotification(SidebarView.ATTACHMENTS);
        } else if (_this2.active === SidebarView.ATTACHMENTS) {
          _this2.switchView(SidebarView.THUMBS);
        }
      });
      this.eventBus.on('presentationmodechanged', function (evt) {
        if (!evt.active && !evt.switchInProgress && _this2.isThumbnailViewVisible) {
          _this2._updateThumbnailViewer();
        }
      });
    }
  }, {
    key: 'visibleView',
    get: function get() {
      return this.isOpen ? this.active : SidebarView.NONE;
    }
  }, {
    key: 'isThumbnailViewVisible',
    get: function get() {
      return this.isOpen && this.active === SidebarView.THUMBS;
    }
  }, {
    key: 'isOutlineViewVisible',
    get: function get() {
      return this.isOpen && this.active === SidebarView.OUTLINE;
    }
  }, {
    key: 'isAttachmentsViewVisible',
    get: function get() {
      return this.isOpen && this.active === SidebarView.ATTACHMENTS;
    }
  }]);

  return PDFSidebar;
}();

exports.SidebarView = SidebarView;
exports.PDFSidebar = PDFSidebar;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFThumbnailView = undefined;

var _pdfjs = __webpack_require__(1);

var _ui_utils = __webpack_require__(0);

var _pdf_rendering_queue = __webpack_require__(3);

var THUMBNAIL_WIDTH = 98;
var THUMBNAIL_CANVAS_BORDER_WIDTH = 1;
var PDFThumbnailView = function PDFThumbnailViewClosure() {
  function getTempCanvas(width, height) {
    var tempCanvas = PDFThumbnailView.tempImageCache;
    if (!tempCanvas) {
      tempCanvas = document.createElement('canvas');
      PDFThumbnailView.tempImageCache = tempCanvas;
    }
    tempCanvas.width = width;
    tempCanvas.height = height;
    tempCanvas.mozOpaque = true;
    var ctx = tempCanvas.getContext('2d', { alpha: false });
    ctx.save();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
    return tempCanvas;
  }
  function PDFThumbnailView(options) {
    var container = options.container;
    var id = options.id;
    var defaultViewport = options.defaultViewport;
    var linkService = options.linkService;
    var renderingQueue = options.renderingQueue;
    var disableCanvasToImageConversion = options.disableCanvasToImageConversion || false;
    this.id = id;
    this.renderingId = 'thumbnail' + id;
    this.pageLabel = null;
    this.pdfPage = null;
    this.rotation = 0;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this.linkService = linkService;
    this.renderingQueue = renderingQueue;
    this.renderTask = null;
    this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
    this.resume = null;
    this.disableCanvasToImageConversion = disableCanvasToImageConversion;
    this.pageWidth = this.viewport.width;
    this.pageHeight = this.viewport.height;
    this.pageRatio = this.pageWidth / this.pageHeight;
    this.canvasWidth = THUMBNAIL_WIDTH;
    this.canvasHeight = this.canvasWidth / this.pageRatio | 0;
    this.scale = this.canvasWidth / this.pageWidth;
    var anchor = document.createElement('a');
    anchor.href = linkService.getAnchorUrl('#page=' + id);
    anchor.title = _ui_utils.mozL10n.get('thumb_page_title', { page: id }, 'Page {{page}}');
    anchor.onclick = function stopNavigation() {
      linkService.page = id;
      return false;
    };
    this.anchor = anchor;
    var div = document.createElement('div');
    div.className = 'thumbnail';
    div.setAttribute('data-page-number', this.id);
    this.div = div;
    if (id === 1) {
      div.classList.add('selected');
    }
    var ring = document.createElement('div');
    ring.className = 'thumbnailSelectionRing';
    var borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
    ring.style.width = this.canvasWidth + borderAdjustment + 'px';
    ring.style.height = this.canvasHeight + borderAdjustment + 'px';
    this.ring = ring;
    div.appendChild(ring);
    anchor.appendChild(div);
    container.appendChild(anchor);
  }
  PDFThumbnailView.prototype = {
    setPdfPage: function PDFThumbnailView_setPdfPage(pdfPage) {
      this.pdfPage = pdfPage;
      this.pdfPageRotate = pdfPage.rotate;
      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = pdfPage.getViewport(1, totalRotation);
      this.reset();
    },
    reset: function PDFThumbnailView_reset() {
      this.cancelRendering();
      this.pageWidth = this.viewport.width;
      this.pageHeight = this.viewport.height;
      this.pageRatio = this.pageWidth / this.pageHeight;
      this.canvasHeight = this.canvasWidth / this.pageRatio | 0;
      this.scale = this.canvasWidth / this.pageWidth;
      this.div.removeAttribute('data-loaded');
      var ring = this.ring;
      var childNodes = ring.childNodes;
      for (var i = childNodes.length - 1; i >= 0; i--) {
        ring.removeChild(childNodes[i]);
      }
      var borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
      ring.style.width = this.canvasWidth + borderAdjustment + 'px';
      ring.style.height = this.canvasHeight + borderAdjustment + 'px';
      if (this.canvas) {
        this.canvas.width = 0;
        this.canvas.height = 0;
        delete this.canvas;
      }
      if (this.image) {
        this.image.removeAttribute('src');
        delete this.image;
      }
    },
    update: function PDFThumbnailView_update(rotation) {
      if (typeof rotation !== 'undefined') {
        this.rotation = rotation;
      }
      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = this.viewport.clone({
        scale: 1,
        rotation: totalRotation
      });
      this.reset();
    },
    cancelRendering: function PDFThumbnailView_cancelRendering() {
      if (this.renderTask) {
        this.renderTask.cancel();
        this.renderTask = null;
      }
      this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
      this.resume = null;
    },
    _getPageDrawContext: function PDFThumbnailView_getPageDrawContext(noCtxScale) {
      var canvas = document.createElement('canvas');
      this.canvas = canvas;
      canvas.mozOpaque = true;
      var ctx = canvas.getContext('2d', { alpha: false });
      var outputScale = (0, _ui_utils.getOutputScale)(ctx);
      canvas.width = this.canvasWidth * outputScale.sx | 0;
      canvas.height = this.canvasHeight * outputScale.sy | 0;
      canvas.style.width = this.canvasWidth + 'px';
      canvas.style.height = this.canvasHeight + 'px';
      if (!noCtxScale && outputScale.scaled) {
        ctx.scale(outputScale.sx, outputScale.sy);
      }
      return ctx;
    },
    _convertCanvasToImage: function PDFThumbnailView_convertCanvasToImage() {
      if (!this.canvas) {
        return;
      }
      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
        return;
      }
      var id = this.renderingId;
      var className = 'thumbnailImage';
      var ariaLabel = _ui_utils.mozL10n.get('thumb_page_canvas', { page: this.pageId }, 'Thumbnail of Page {{page}}');
      if (this.disableCanvasToImageConversion) {
        this.canvas.id = id;
        this.canvas.className = className;
        this.canvas.setAttribute('aria-label', ariaLabel);
        this.div.setAttribute('data-loaded', true);
        this.ring.appendChild(this.canvas);
        return;
      }
      var image = document.createElement('img');
      image.id = id;
      image.className = className;
      image.setAttribute('aria-label', ariaLabel);
      image.style.width = this.canvasWidth + 'px';
      image.style.height = this.canvasHeight + 'px';
      image.src = this.canvas.toDataURL();
      this.image = image;
      this.div.setAttribute('data-loaded', true);
      this.ring.appendChild(image);
      this.canvas.width = 0;
      this.canvas.height = 0;
      delete this.canvas;
    },
    draw: function draw() {
      var _this = this;

      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
        console.error('Must be in new state before drawing');
        return Promise.resolve(undefined);
      }
      this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
      var renderCapability = (0, _pdfjs.createPromiseCapability)();
      var finishRenderTask = function finishRenderTask(error) {
        if (renderTask === _this.renderTask) {
          _this.renderTask = null;
        }
        if (error === 'cancelled' || error instanceof _pdfjs.RenderingCancelledException) {
          renderCapability.resolve(undefined);
          return;
        }
        _this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
        _this._convertCanvasToImage();
        if (!error) {
          renderCapability.resolve(undefined);
        } else {
          renderCapability.reject(error);
        }
      };
      var ctx = this._getPageDrawContext();
      var drawViewport = this.viewport.clone({ scale: this.scale });
      var renderContinueCallback = function renderContinueCallback(cont) {
        if (!_this.renderingQueue.isHighestPriority(_this)) {
          _this.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED;
          _this.resume = function () {
            _this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
            cont();
          };
          return;
        }
        cont();
      };
      var renderContext = {
        canvasContext: ctx,
        viewport: drawViewport
      };
      var renderTask = this.renderTask = this.pdfPage.render(renderContext);
      renderTask.onContinue = renderContinueCallback;
      renderTask.promise.then(function () {
        finishRenderTask(null);
      }, function (error) {
        finishRenderTask(error);
      });
      return renderCapability.promise;
    },

    setImage: function PDFThumbnailView_setImage(pageView) {
      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
        return;
      }
      var img = pageView.canvas;
      if (!img) {
        return;
      }
      if (!this.pdfPage) {
        this.setPdfPage(pageView.pdfPage);
      }
      this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
      var ctx = this._getPageDrawContext(true);
      var canvas = ctx.canvas;
      if (img.width <= 2 * canvas.width) {
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        this._convertCanvasToImage();
        return;
      }
      var MAX_NUM_SCALING_STEPS = 3;
      var reducedWidth = canvas.width << MAX_NUM_SCALING_STEPS;
      var reducedHeight = canvas.height << MAX_NUM_SCALING_STEPS;
      var reducedImage = getTempCanvas(reducedWidth, reducedHeight);
      var reducedImageCtx = reducedImage.getContext('2d');
      while (reducedWidth > img.width || reducedHeight > img.height) {
        reducedWidth >>= 1;
        reducedHeight >>= 1;
      }
      reducedImageCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, reducedWidth, reducedHeight);
      while (reducedWidth > 2 * canvas.width) {
        reducedImageCtx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, reducedWidth >> 1, reducedHeight >> 1);
        reducedWidth >>= 1;
        reducedHeight >>= 1;
      }
      ctx.drawImage(reducedImage, 0, 0, reducedWidth, reducedHeight, 0, 0, canvas.width, canvas.height);
      this._convertCanvasToImage();
    },
    get pageId() {
      return this.pageLabel !== null ? this.pageLabel : this.id;
    },
    setPageLabel: function PDFThumbnailView_setPageLabel(label) {
      this.pageLabel = typeof label === 'string' ? label : null;
      this.anchor.title = _ui_utils.mozL10n.get('thumb_page_title', { page: this.pageId }, 'Page {{page}}');
      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
        return;
      }
      var ariaLabel = _ui_utils.mozL10n.get('thumb_page_canvas', { page: this.pageId }, 'Thumbnail of Page {{page}}');
      if (this.image) {
        this.image.setAttribute('aria-label', ariaLabel);
      } else if (this.disableCanvasToImageConversion && this.canvas) {
        this.canvas.setAttribute('aria-label', ariaLabel);
      }
    }
  };
  return PDFThumbnailView;
}();
PDFThumbnailView.tempImageCache = null;
exports.PDFThumbnailView = PDFThumbnailView;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFThumbnailViewer = undefined;

var _ui_utils = __webpack_require__(0);

var _pdf_thumbnail_view = __webpack_require__(23);

var THUMBNAIL_SCROLL_MARGIN = -19;
var PDFThumbnailViewer = function PDFThumbnailViewerClosure() {
  function PDFThumbnailViewer(options) {
    this.container = options.container;
    this.renderingQueue = options.renderingQueue;
    this.linkService = options.linkService;
    this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdated.bind(this));
    this._resetView();
  }
  PDFThumbnailViewer.prototype = {
    _scrollUpdated: function PDFThumbnailViewer_scrollUpdated() {
      this.renderingQueue.renderHighestPriority();
    },
    getThumbnail: function PDFThumbnailViewer_getThumbnail(index) {
      return this.thumbnails[index];
    },
    _getVisibleThumbs: function PDFThumbnailViewer_getVisibleThumbs() {
      return (0, _ui_utils.getVisibleElements)(this.container, this.thumbnails);
    },
    scrollThumbnailIntoView: function PDFThumbnailViewer_scrollThumbnailIntoView(page) {
      var selected = document.querySelector('.thumbnail.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      var thumbnail = document.querySelector('div.thumbnail[data-page-number="' + page + '"]');
      if (thumbnail) {
        thumbnail.classList.add('selected');
      }
      var visibleThumbs = this._getVisibleThumbs();
      var numVisibleThumbs = visibleThumbs.views.length;
      if (numVisibleThumbs > 0) {
        var first = visibleThumbs.first.id;
        var last = numVisibleThumbs > 1 ? visibleThumbs.last.id : first;
        if (page <= first || page >= last) {
          (0, _ui_utils.scrollIntoView)(thumbnail, { top: THUMBNAIL_SCROLL_MARGIN });
        }
      }
    },
    get pagesRotation() {
      return this._pagesRotation;
    },
    set pagesRotation(rotation) {
      this._pagesRotation = rotation;
      for (var i = 0, l = this.thumbnails.length; i < l; i++) {
        var thumb = this.thumbnails[i];
        thumb.update(rotation);
      }
    },
    cleanup: function PDFThumbnailViewer_cleanup() {
      var tempCanvas = _pdf_thumbnail_view.PDFThumbnailView.tempImageCache;
      if (tempCanvas) {
        tempCanvas.width = 0;
        tempCanvas.height = 0;
      }
      _pdf_thumbnail_view.PDFThumbnailView.tempImageCache = null;
    },
    _resetView: function PDFThumbnailViewer_resetView() {
      this.thumbnails = [];
      this._pageLabels = null;
      this._pagesRotation = 0;
      this._pagesRequests = [];
      this.container.textContent = '';
    },
    setDocument: function PDFThumbnailViewer_setDocument(pdfDocument) {
      var _this = this;

      if (this.pdfDocument) {
        this._cancelRendering();
        this._resetView();
      }
      this.pdfDocument = pdfDocument;
      if (!pdfDocument) {
        return Promise.resolve();
      }
      return pdfDocument.getPage(1).then(function (firstPage) {
        var pagesCount = pdfDocument.numPages;
        var viewport = firstPage.getViewport(1.0);
        for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
          var thumbnail = new _pdf_thumbnail_view.PDFThumbnailView({
            container: _this.container,
            id: pageNum,
            defaultViewport: viewport.clone(),
            linkService: _this.linkService,
            renderingQueue: _this.renderingQueue,
            disableCanvasToImageConversion: false
          });
          _this.thumbnails.push(thumbnail);
        }
      });
    },
    _cancelRendering: function PDFThumbnailViewer_cancelRendering() {
      for (var i = 0, ii = this.thumbnails.length; i < ii; i++) {
        if (this.thumbnails[i]) {
          this.thumbnails[i].cancelRendering();
        }
      }
    },
    setPageLabels: function PDFThumbnailViewer_setPageLabels(labels) {
      if (!this.pdfDocument) {
        return;
      }
      if (!labels) {
        this._pageLabels = null;
      } else if (!(labels instanceof Array && this.pdfDocument.numPages === labels.length)) {
        this._pageLabels = null;
        console.error('PDFThumbnailViewer_setPageLabels: Invalid page labels.');
      } else {
        this._pageLabels = labels;
      }
      for (var i = 0, ii = this.thumbnails.length; i < ii; i++) {
        var thumbnailView = this.thumbnails[i];
        var label = this._pageLabels && this._pageLabels[i];
        thumbnailView.setPageLabel(label);
      }
    },
    _ensurePdfPageLoaded: function _ensurePdfPageLoaded(thumbView) {
      var _this2 = this;

      if (thumbView.pdfPage) {
        return Promise.resolve(thumbView.pdfPage);
      }
      var pageNumber = thumbView.id;
      if (this._pagesRequests[pageNumber]) {
        return this._pagesRequests[pageNumber];
      }
      var promise = this.pdfDocument.getPage(pageNumber).then(function (pdfPage) {
        thumbView.setPdfPage(pdfPage);
        _this2._pagesRequests[pageNumber] = null;
        return pdfPage;
      });
      this._pagesRequests[pageNumber] = promise;
      return promise;
    },
    forceRendering: function forceRendering() {
      var _this3 = this;

      var visibleThumbs = this._getVisibleThumbs();
      var thumbView = this.renderingQueue.getHighestPriority(visibleThumbs, this.thumbnails, this.scroll.down);
      if (thumbView) {
        this._ensurePdfPageLoaded(thumbView).then(function () {
          _this3.renderingQueue.renderView(thumbView);
        });
        return true;
      }
      return false;
    }
  };
  return PDFThumbnailViewer;
}();
exports.PDFThumbnailViewer = PDFThumbnailViewer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFViewer = exports.PresentationModeState = undefined;

var _pdfjs = __webpack_require__(1);

var _ui_utils = __webpack_require__(0);

var _pdf_rendering_queue = __webpack_require__(3);

var _annotation_layer_builder = __webpack_require__(11);

var _dom_events = __webpack_require__(2);

var _pdf_page_view = __webpack_require__(20);

var _pdf_link_service = __webpack_require__(6);

var _text_layer_builder = __webpack_require__(28);

var PresentationModeState = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
};
var DEFAULT_CACHE_SIZE = 10;
var PDFViewer = function pdfViewer() {
  function PDFPageViewBuffer(size) {
    var data = [];
    this.push = function cachePush(view) {
      var i = data.indexOf(view);
      if (i >= 0) {
        data.splice(i, 1);
      }
      data.push(view);
      if (data.length > size) {
        data.shift().destroy();
      }
    };
    this.resize = function (newSize) {
      size = newSize;
      while (data.length > size) {
        data.shift().destroy();
      }
    };
  }
  function isSameScale(oldScale, newScale) {
    if (newScale === oldScale) {
      return true;
    }
    if (Math.abs(newScale - oldScale) < 1e-15) {
      return true;
    }
    return false;
  }
  function isPortraitOrientation(size) {
    return size.width <= size.height;
  }
  function PDFViewer(options) {
    this.container = options.container;
    this.viewer = options.viewer || options.container.firstElementChild;
    this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)();
    this.linkService = options.linkService || new _pdf_link_service.SimpleLinkService();
    this.downloadManager = options.downloadManager || null;
    this.removePageBorders = options.removePageBorders || false;
    this.enhanceTextSelection = options.enhanceTextSelection || false;
    this.renderInteractiveForms = options.renderInteractiveForms || false;
    this.enablePrintAutoRotate = options.enablePrintAutoRotate || false;
    this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
    this.defaultRenderingQueue = !options.renderingQueue;
    if (this.defaultRenderingQueue) {
      this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
      this.renderingQueue.setViewer(this);
    } else {
      this.renderingQueue = options.renderingQueue;
    }
    this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this));
    this.presentationModeState = PresentationModeState.UNKNOWN;
    this._resetView();
    if (this.removePageBorders) {
      this.viewer.classList.add('removePageBorders');
    }
  }
  PDFViewer.prototype = {
    get pagesCount() {
      return this._pages.length;
    },
    getPageView: function getPageView(index) {
      return this._pages[index];
    },

    get pageViewsReady() {
      return this._pageViewsReady;
    },
    get currentPageNumber() {
      return this._currentPageNumber;
    },
    set currentPageNumber(val) {
      if ((val | 0) !== val) {
        throw new Error('Invalid page number.');
      }
      if (!this.pdfDocument) {
        this._currentPageNumber = val;
        return;
      }
      this._setCurrentPageNumber(val, true);
    },
    _setCurrentPageNumber: function PDFViewer_setCurrentPageNumber(val, resetCurrentPageView) {
      if (this._currentPageNumber === val) {
        if (resetCurrentPageView) {
          this._resetCurrentPageView();
        }
        return;
      }
      if (!(0 < val && val <= this.pagesCount)) {
        console.error('PDFViewer_setCurrentPageNumber: "' + val + '" is out of bounds.');
        return;
      }
      var arg = {
        source: this,
        pageNumber: val,
        pageLabel: this._pageLabels && this._pageLabels[val - 1]
      };
      this._currentPageNumber = val;
      this.eventBus.dispatch('pagechanging', arg);
      this.eventBus.dispatch('pagechange', arg);
      if (resetCurrentPageView) {
        this._resetCurrentPageView();
      }
    },
    get currentPageLabel() {
      return this._pageLabels && this._pageLabels[this._currentPageNumber - 1];
    },
    set currentPageLabel(val) {
      var pageNumber = val | 0;
      if (this._pageLabels) {
        var i = this._pageLabels.indexOf(val);
        if (i >= 0) {
          pageNumber = i + 1;
        }
      }
      this.currentPageNumber = pageNumber;
    },
    get currentScale() {
      return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE;
    },
    set currentScale(val) {
      if (isNaN(val)) {
        throw new Error('Invalid numeric scale');
      }
      if (!this.pdfDocument) {
        this._currentScale = val;
        this._currentScaleValue = val !== _ui_utils.UNKNOWN_SCALE ? val.toString() : null;
        return;
      }
      this._setScale(val, false);
    },
    get currentScaleValue() {
      return this._currentScaleValue;
    },
    set currentScaleValue(val) {
      if (!this.pdfDocument) {
        this._currentScale = isNaN(val) ? _ui_utils.UNKNOWN_SCALE : val;
        this._currentScaleValue = val.toString();
        return;
      }
      this._setScale(val, false);
    },
    get pagesRotation() {
      return this._pagesRotation;
    },
    set pagesRotation(rotation) {
      if (!(typeof rotation === 'number' && rotation % 90 === 0)) {
        throw new Error('Invalid pages rotation angle.');
      }
      this._pagesRotation = rotation;
      if (!this.pdfDocument) {
        return;
      }
      for (var i = 0, l = this._pages.length; i < l; i++) {
        var pageView = this._pages[i];
        pageView.update(pageView.scale, rotation);
      }
      this._setScale(this._currentScaleValue, true);
      if (this.defaultRenderingQueue) {
        this.update();
      }
    },
    setDocument: function setDocument(pdfDocument) {
      var _this = this;

      if (this.pdfDocument) {
        this._cancelRendering();
        this._resetView();
      }
      this.pdfDocument = pdfDocument;
      if (!pdfDocument) {
        return;
      }
      var pagesCount = pdfDocument.numPages;
      var pagesCapability = (0, _pdfjs.createPromiseCapability)();
      this.pagesPromise = pagesCapability.promise;
      pagesCapability.promise.then(function () {
        _this._pageViewsReady = true;
        _this.eventBus.dispatch('pagesloaded', {
          source: _this,
          pagesCount: pagesCount
        });
      });
      var isOnePageRenderedResolved = false;
      var onePageRenderedCapability = (0, _pdfjs.createPromiseCapability)();
      this.onePageRendered = onePageRenderedCapability.promise;
      var bindOnAfterAndBeforeDraw = function bindOnAfterAndBeforeDraw(pageView) {
        pageView.onBeforeDraw = function () {
          _this._buffer.push(pageView);
        };
        pageView.onAfterDraw = function () {
          if (!isOnePageRenderedResolved) {
            isOnePageRenderedResolved = true;
            onePageRenderedCapability.resolve();
          }
        };
      };
      var firstPagePromise = pdfDocument.getPage(1);
      this.firstPagePromise = firstPagePromise;
      return firstPagePromise.then(function (pdfPage) {
        var scale = _this.currentScale;
        var viewport = pdfPage.getViewport(scale * _ui_utils.CSS_UNITS);
        for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
          var textLayerFactory = null;
          if (!_pdfjs.PDFJS.disableTextLayer) {
            textLayerFactory = _this;
          }
          var pageView = new _pdf_page_view.PDFPageView({
            container: _this.viewer,
            eventBus: _this.eventBus,
            id: pageNum,
            scale: scale,
            defaultViewport: viewport.clone(),
            renderingQueue: _this.renderingQueue,
            textLayerFactory: textLayerFactory,
            annotationLayerFactory: _this,
            enhanceTextSelection: _this.enhanceTextSelection,
            renderInteractiveForms: _this.renderInteractiveForms,
            renderer: _this.renderer
          });
          bindOnAfterAndBeforeDraw(pageView);
          _this._pages.push(pageView);
        }
        onePageRenderedCapability.promise.then(function () {
          if (_pdfjs.PDFJS.disableAutoFetch) {
            pagesCapability.resolve();
            return;
          }
          var getPagesLeft = pagesCount;

          var _loop = function _loop(_pageNum) {
            pdfDocument.getPage(_pageNum).then(function (pdfPage) {
              var pageView = _this._pages[_pageNum - 1];
              if (!pageView.pdfPage) {
                pageView.setPdfPage(pdfPage);
              }
              _this.linkService.cachePageRef(_pageNum, pdfPage.ref);
              if (--getPagesLeft === 0) {
                pagesCapability.resolve();
              }
            });
          };

          for (var _pageNum = 1; _pageNum <= pagesCount; ++_pageNum) {
            _loop(_pageNum);
          }
        });
        _this.eventBus.dispatch('pagesinit', { source: _this });
        if (_this.defaultRenderingQueue) {
          _this.update();
        }
        if (_this.findController) {
          _this.findController.resolveFirstPage();
        }
      });
    },

    setPageLabels: function PDFViewer_setPageLabels(labels) {
      if (!this.pdfDocument) {
        return;
      }
      if (!labels) {
        this._pageLabels = null;
      } else if (!(labels instanceof Array && this.pdfDocument.numPages === labels.length)) {
        this._pageLabels = null;
        console.error('PDFViewer_setPageLabels: Invalid page labels.');
      } else {
        this._pageLabels = labels;
      }
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        var pageView = this._pages[i];
        var label = this._pageLabels && this._pageLabels[i];
        pageView.setPageLabel(label);
      }
    },
    _resetView: function _resetView() {
      this._pages = [];
      this._currentPageNumber = 1;
      this._currentScale = _ui_utils.UNKNOWN_SCALE;
      this._currentScaleValue = null;
      this._pageLabels = null;
      this._buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
      this._location = null;
      this._pagesRotation = 0;
      this._pagesRequests = [];
      this._pageViewsReady = false;
      this.viewer.textContent = '';
    },

    _scrollUpdate: function PDFViewer_scrollUpdate() {
      if (this.pagesCount === 0) {
        return;
      }
      this.update();
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        this._pages[i].updatePosition();
      }
    },
    _setScaleDispatchEvent: function pdfViewer_setScaleDispatchEvent(newScale, newValue, preset) {
      var arg = {
        source: this,
        scale: newScale,
        presetValue: preset ? newValue : undefined
      };
      this.eventBus.dispatch('scalechanging', arg);
      this.eventBus.dispatch('scalechange', arg);
    },
    _setScaleUpdatePages: function pdfViewer_setScaleUpdatePages(newScale, newValue, noScroll, preset) {
      this._currentScaleValue = newValue.toString();
      if (isSameScale(this._currentScale, newScale)) {
        if (preset) {
          this._setScaleDispatchEvent(newScale, newValue, true);
        }
        return;
      }
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        this._pages[i].update(newScale);
      }
      this._currentScale = newScale;
      if (!noScroll) {
        var page = this._currentPageNumber,
            dest;
        if (this._location && !_pdfjs.PDFJS.ignoreCurrentPositionOnZoom && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
          page = this._location.pageNumber;
          dest = [null, { name: 'XYZ' }, this._location.left, this._location.top, null];
        }
        this.scrollPageIntoView({
          pageNumber: page,
          destArray: dest,
          allowNegativeOffset: true
        });
      }
      this._setScaleDispatchEvent(newScale, newValue, preset);
      if (this.defaultRenderingQueue) {
        this.update();
      }
    },
    _setScale: function PDFViewer_setScale(value, noScroll) {
      var scale = parseFloat(value);
      if (scale > 0) {
        this._setScaleUpdatePages(scale, value, noScroll, false);
      } else {
        var currentPage = this._pages[this._currentPageNumber - 1];
        if (!currentPage) {
          return;
        }
        var hPadding = this.isInPresentationMode || this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING;
        var vPadding = this.isInPresentationMode || this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING;
        var pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale;
        var pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;
        switch (value) {
          case 'page-actual':
            scale = 1;
            break;
          case 'page-width':
            scale = pageWidthScale;
            break;
          case 'page-height':
            scale = pageHeightScale;
            break;
          case 'page-fit':
            scale = Math.min(pageWidthScale, pageHeightScale);
            break;
          case 'auto':
            var isLandscape = currentPage.width > currentPage.height;
            var horizontalScale = isLandscape ? Math.min(pageHeightScale, pageWidthScale) : pageWidthScale;
            scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale);
            break;
          default:
            console.error('PDFViewer_setScale: "' + value + '" is an unknown zoom value.');
            return;
        }
        this._setScaleUpdatePages(scale, value, noScroll, true);
      }
    },
    _resetCurrentPageView: function _resetCurrentPageView() {
      if (this.isInPresentationMode) {
        this._setScale(this._currentScaleValue, true);
      }
      var pageView = this._pages[this._currentPageNumber - 1];
      (0, _ui_utils.scrollIntoView)(pageView.div);
    },

    scrollPageIntoView: function PDFViewer_scrollPageIntoView(params) {
      if (!this.pdfDocument) {
        return;
      }
      if (arguments.length > 1 || typeof params === 'number') {
        console.warn('Call of scrollPageIntoView() with obsolete signature.');
        var paramObj = {};
        if (typeof params === 'number') {
          paramObj.pageNumber = params;
        }
        if (arguments[1] instanceof Array) {
          paramObj.destArray = arguments[1];
        }
        params = paramObj;
      }
      var pageNumber = params.pageNumber || 0;
      var dest = params.destArray || null;
      var allowNegativeOffset = params.allowNegativeOffset || false;
      if (this.isInPresentationMode || !dest) {
        this._setCurrentPageNumber(pageNumber, true);
        return;
      }
      var pageView = this._pages[pageNumber - 1];
      if (!pageView) {
        console.error('PDFViewer_scrollPageIntoView: ' + 'Invalid "pageNumber" parameter.');
        return;
      }
      var x = 0,
          y = 0;
      var width = 0,
          height = 0,
          widthScale,
          heightScale;
      var changeOrientation = pageView.rotation % 180 === 0 ? false : true;
      var pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _ui_utils.CSS_UNITS;
      var pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _ui_utils.CSS_UNITS;
      var scale = 0;
      switch (dest[1].name) {
        case 'XYZ':
          x = dest[2];
          y = dest[3];
          scale = dest[4];
          x = x !== null ? x : 0;
          y = y !== null ? y : pageHeight;
          break;
        case 'Fit':
        case 'FitB':
          scale = 'page-fit';
          break;
        case 'FitH':
        case 'FitBH':
          y = dest[2];
          scale = 'page-width';
          if (y === null && this._location) {
            x = this._location.left;
            y = this._location.top;
          }
          break;
        case 'FitV':
        case 'FitBV':
          x = dest[2];
          width = pageWidth;
          height = pageHeight;
          scale = 'page-height';
          break;
        case 'FitR':
          x = dest[2];
          y = dest[3];
          width = dest[4] - x;
          height = dest[5] - y;
          var hPadding = this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING;
          var vPadding = this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING;
          widthScale = (this.container.clientWidth - hPadding) / width / _ui_utils.CSS_UNITS;
          heightScale = (this.container.clientHeight - vPadding) / height / _ui_utils.CSS_UNITS;
          scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
          break;
        default:
          console.error('PDFViewer_scrollPageIntoView: \'' + dest[1].name + '\' is not a valid destination type.');
          return;
      }
      if (scale && scale !== this._currentScale) {
        this.currentScaleValue = scale;
      } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
        this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
      }
      if (scale === 'page-fit' && !dest[4]) {
        (0, _ui_utils.scrollIntoView)(pageView.div);
        return;
      }
      var boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
      var left = Math.min(boundingRect[0][0], boundingRect[1][0]);
      var top = Math.min(boundingRect[0][1], boundingRect[1][1]);
      if (!allowNegativeOffset) {
        left = Math.max(left, 0);
        top = Math.max(top, 0);
      }
      (0, _ui_utils.scrollIntoView)(pageView.div, {
        left: left,
        top: top
      });
    },
    _updateLocation: function _updateLocation(firstPage) {
      var currentScale = this._currentScale;
      var currentScaleValue = this._currentScaleValue;
      var normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
      var pageNumber = firstPage.id;
      var pdfOpenParams = '#page=' + pageNumber;
      pdfOpenParams += '&zoom=' + normalizedScaleValue;
      var currentPageView = this._pages[pageNumber - 1];
      var container = this.container;
      var topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
      var intLeft = Math.round(topLeft[0]);
      var intTop = Math.round(topLeft[1]);
      pdfOpenParams += ',' + intLeft + ',' + intTop;
      this._location = {
        pageNumber: pageNumber,
        scale: normalizedScaleValue,
        top: intTop,
        left: intLeft,
        pdfOpenParams: pdfOpenParams
      };
    },

    update: function PDFViewer_update() {
      var visible = this._getVisiblePages();
      var visiblePages = visible.views;
      if (visiblePages.length === 0) {
        return;
      }
      var suggestedCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * visiblePages.length + 1);
      this._buffer.resize(suggestedCacheSize);
      this.renderingQueue.renderHighestPriority(visible);
      var currentId = this._currentPageNumber;
      var firstPage = visible.first;
      for (var i = 0, ii = visiblePages.length, stillFullyVisible = false; i < ii; ++i) {
        var page = visiblePages[i];
        if (page.percent < 100) {
          break;
        }
        if (page.id === currentId) {
          stillFullyVisible = true;
          break;
        }
      }
      if (!stillFullyVisible) {
        currentId = visiblePages[0].id;
      }
      if (!this.isInPresentationMode) {
        this._setCurrentPageNumber(currentId);
      }
      this._updateLocation(firstPage);
      this.eventBus.dispatch('updateviewarea', {
        source: this,
        location: this._location
      });
    },
    containsElement: function containsElement(element) {
      return this.container.contains(element);
    },
    focus: function focus() {
      this.container.focus();
    },

    get isInPresentationMode() {
      return this.presentationModeState === PresentationModeState.FULLSCREEN;
    },
    get isChangingPresentationMode() {
      return this.presentationModeState === PresentationModeState.CHANGING;
    },
    get isHorizontalScrollbarEnabled() {
      return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
    },
    _getVisiblePages: function _getVisiblePages() {
      if (!this.isInPresentationMode) {
        return (0, _ui_utils.getVisibleElements)(this.container, this._pages, true);
      }
      var visible = [];
      var currentPage = this._pages[this._currentPageNumber - 1];
      visible.push({
        id: currentPage.id,
        view: currentPage
      });
      return {
        first: currentPage,
        last: currentPage,
        views: visible
      };
    },
    cleanup: function cleanup() {
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        if (this._pages[i] && this._pages[i].renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
          this._pages[i].reset();
        }
      }
    },

    _cancelRendering: function PDFViewer_cancelRendering() {
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        if (this._pages[i]) {
          this._pages[i].cancelRendering();
        }
      }
    },
    _ensurePdfPageLoaded: function _ensurePdfPageLoaded(pageView) {
      var _this2 = this;

      if (pageView.pdfPage) {
        return Promise.resolve(pageView.pdfPage);
      }
      var pageNumber = pageView.id;
      if (this._pagesRequests[pageNumber]) {
        return this._pagesRequests[pageNumber];
      }
      var promise = this.pdfDocument.getPage(pageNumber).then(function (pdfPage) {
        if (!pageView.pdfPage) {
          pageView.setPdfPage(pdfPage);
        }
        _this2._pagesRequests[pageNumber] = null;
        return pdfPage;
      });
      this._pagesRequests[pageNumber] = promise;
      return promise;
    },
    forceRendering: function forceRendering(currentlyVisiblePages) {
      var _this3 = this;

      var visiblePages = currentlyVisiblePages || this._getVisiblePages();
      var pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, this.scroll.down);
      if (pageView) {
        this._ensurePdfPageLoaded(pageView).then(function () {
          _this3.renderingQueue.renderView(pageView);
        });
        return true;
      }
      return false;
    },
    getPageTextContent: function getPageTextContent(pageIndex) {
      return this.pdfDocument.getPage(pageIndex + 1).then(function (page) {
        return page.getTextContent({ normalizeWhitespace: true });
      });
    },
    createTextLayerBuilder: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
      var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return new _text_layer_builder.TextLayerBuilder({
        textLayerDiv: textLayerDiv,
        eventBus: this.eventBus,
        pageIndex: pageIndex,
        viewport: viewport,
        findController: this.isInPresentationMode ? null : this.findController,
        enhanceTextSelection: this.isInPresentationMode ? false : enhanceTextSelection
      });
    },
    createAnnotationLayerBuilder: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
      var renderInteractiveForms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return new _annotation_layer_builder.AnnotationLayerBuilder({
        pageDiv: pageDiv,
        pdfPage: pdfPage,
        renderInteractiveForms: renderInteractiveForms,
        linkService: this.linkService,
        downloadManager: this.downloadManager
      });
    },
    setFindController: function setFindController(findController) {
      this.findController = findController;
    },
    getPagesOverview: function getPagesOverview() {
      var pagesOverview = this._pages.map(function (pageView) {
        var viewport = pageView.pdfPage.getViewport(1);
        return {
          width: viewport.width,
          height: viewport.height,
          rotation: viewport.rotation
        };
      });
      if (!this.enablePrintAutoRotate) {
        return pagesOverview;
      }
      var isFirstPagePortrait = isPortraitOrientation(pagesOverview[0]);
      return pagesOverview.map(function (size) {
        if (isFirstPagePortrait === isPortraitOrientation(size)) {
          return size;
        }
        return {
          width: size.height,
          height: size.width,
          rotation: (size.rotation + 90) % 360
        };
      });
    }
  };
  return PDFViewer;
}();
exports.PresentationModeState = PresentationModeState;
exports.PDFViewer = PDFViewer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasePreferences = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui_utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultPreferences = null;
function getDefaultPreferences() {
  if (!defaultPreferences) {
    defaultPreferences = Promise.resolve({
      "showPreviousViewOnLoad": true,
      "defaultZoomValue": "",
      "sidebarViewOnLoad": 0,
      "enableHandToolOnLoad": false,
      "cursorToolOnLoad": 0,
      "enableWebGL": false,
      "pdfBugEnabled": false,
      "disableRange": false,
      "disableStream": false,
      "disableAutoFetch": false,
      "disableFontFace": false,
      "disableTextLayer": false,
      "useOnlyCssZoom": false,
      "externalLinkTarget": 0,
      "enhanceTextSelection": false,
      "renderer": "canvas",
      "renderInteractiveForms": false,
      "enablePrintAutoRotate": false,
      "disablePageLabels": false
    });
  }
  return defaultPreferences;
}

var BasePreferences = function () {
  function BasePreferences() {
    var _this = this;

    _classCallCheck(this, BasePreferences);

    if (this.constructor === BasePreferences) {
      throw new Error('Cannot initialize BasePreferences.');
    }
    this.prefs = null;
    this._initializedPromise = getDefaultPreferences().then(function (defaults) {
      Object.defineProperty(_this, 'defaults', {
        value: Object.freeze(defaults),
        writable: false,
        enumerable: true,
        configurable: false
      });
      _this.prefs = (0, _ui_utils.cloneObj)(defaults);
      return _this._readFromStorage(defaults);
    }).then(function (prefObj) {
      if (prefObj) {
        _this.prefs = prefObj;
      }
    });
  }

  _createClass(BasePreferences, [{
    key: "_writeToStorage",
    value: function _writeToStorage(prefObj) {
      return Promise.reject(new Error('Not implemented: _writeToStorage'));
    }
  }, {
    key: "_readFromStorage",
    value: function _readFromStorage(prefObj) {
      return Promise.reject(new Error('Not implemented: _readFromStorage'));
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;

      return this._initializedPromise.then(function () {
        _this2.prefs = (0, _ui_utils.cloneObj)(_this2.defaults);
        return _this2._writeToStorage(_this2.defaults);
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this3 = this;

      return this._initializedPromise.then(function () {
        return _this3._readFromStorage(_this3.defaults);
      }).then(function (prefObj) {
        if (prefObj) {
          _this3.prefs = prefObj;
        }
      });
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return this._initializedPromise.then(function () {
        if (_this4.defaults[name] === undefined) {
          throw new Error("Set preference: \"" + name + "\" is undefined.");
        } else if (value === undefined) {
          throw new Error('Set preference: no value is specified.');
        }
        var valueType = typeof value === "undefined" ? "undefined" : _typeof(value);
        var defaultType = _typeof(_this4.defaults[name]);
        if (valueType !== defaultType) {
          if (valueType === 'number' && defaultType === 'string') {
            value = value.toString();
          } else {
            throw new Error("Set preference: \"" + value + "\" is a " + valueType + ", " + ("expected a " + defaultType + "."));
          }
        } else {
          if (valueType === 'number' && (value | 0) !== value) {
            throw new Error("Set preference: \"" + value + "\" must be an integer.");
          }
        }
        _this4.prefs[name] = value;
        return _this4._writeToStorage(_this4.prefs);
      });
    }
  }, {
    key: "get",
    value: function get(name) {
      var _this5 = this;

      return this._initializedPromise.then(function () {
        var defaultValue = _this5.defaults[name];
        if (defaultValue === undefined) {
          throw new Error("Get preference: \"" + name + "\" is undefined.");
        } else {
          var prefValue = _this5.prefs[name];
          if (prefValue !== undefined) {
            return prefValue;
          }
        }
        return defaultValue;
      });
    }
  }]);

  return BasePreferences;
}();

exports.BasePreferences = BasePreferences;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryToolbar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pdf_cursor_tools = __webpack_require__(7);

var _ui_utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SecondaryToolbar = function () {
  function SecondaryToolbar(options, mainContainer, eventBus) {
    _classCallCheck(this, SecondaryToolbar);

    this.toolbar = options.toolbar;
    this.toggleButton = options.toggleButton;
    this.toolbarButtonContainer = options.toolbarButtonContainer;
    this.buttons = [{
      element: options.presentationModeButton,
      eventName: 'presentationmode',
      close: true
    }, {
      element: options.openFileButton,
      eventName: 'openfile',
      close: true
    }, {
      element: options.printButton,
      eventName: 'print',
      close: true
    }, {
      element: options.downloadButton,
      eventName: 'download',
      close: true
    }, {
      element: options.viewBookmarkButton,
      eventName: null,
      close: true
    }, {
      element: options.firstPageButton,
      eventName: 'firstpage',
      close: true
    }, {
      element: options.lastPageButton,
      eventName: 'lastpage',
      close: true
    }, {
      element: options.pageRotateCwButton,
      eventName: 'rotatecw',
      close: false
    }, {
      element: options.pageRotateCcwButton,
      eventName: 'rotateccw',
      close: false
    }, {
      element: options.cursorSelectToolButton,
      eventName: 'switchcursortool',
      eventDetails: { tool: _pdf_cursor_tools.CursorTool.SELECT },
      close: true
    }, {
      element: options.cursorHandToolButton,
      eventName: 'switchcursortool',
      eventDetails: { tool: _pdf_cursor_tools.CursorTool.HAND },
      close: true
    }, {
      element: options.documentPropertiesButton,
      eventName: 'documentproperties',
      close: true
    }];
    this.items = {
      firstPage: options.firstPageButton,
      lastPage: options.lastPageButton,
      pageRotateCw: options.pageRotateCwButton,
      pageRotateCcw: options.pageRotateCcwButton
    };
    this.mainContainer = mainContainer;
    this.eventBus = eventBus;
    this.opened = false;
    this.containerHeight = null;
    this.previousContainerHeight = null;
    this.reset();
    this._bindClickListeners();
    this._bindCursorToolsListener(options);
    this.eventBus.on('resize', this._setMaxHeight.bind(this));
  }

  _createClass(SecondaryToolbar, [{
    key: 'setPageNumber',
    value: function setPageNumber(pageNumber) {
      this.pageNumber = pageNumber;
      this._updateUIState();
    }
  }, {
    key: 'setPagesCount',
    value: function setPagesCount(pagesCount) {
      this.pagesCount = pagesCount;
      this._updateUIState();
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.pageNumber = 0;
      this.pagesCount = 0;
      this._updateUIState();
    }
  }, {
    key: '_updateUIState',
    value: function _updateUIState() {
      this.items.firstPage.disabled = this.pageNumber <= 1;
      this.items.lastPage.disabled = this.pageNumber >= this.pagesCount;
      this.items.pageRotateCw.disabled = this.pagesCount === 0;
      this.items.pageRotateCcw.disabled = this.pagesCount === 0;
    }
  }, {
    key: '_bindClickListeners',
    value: function _bindClickListeners() {
      var _this = this;

      this.toggleButton.addEventListener('click', this.toggle.bind(this));

      var _loop = function _loop(button) {
        var _buttons$button = _this.buttons[button],
            element = _buttons$button.element,
            eventName = _buttons$button.eventName,
            close = _buttons$button.close,
            eventDetails = _buttons$button.eventDetails;

        element.addEventListener('click', function (evt) {
          if (eventName !== null) {
            var details = { source: _this };
            for (var property in eventDetails) {
              details[property] = eventDetails[property];
            }
            _this.eventBus.dispatch(eventName, details);
          }
          if (close) {
            _this.close();
          }
        });
      };

      for (var button in this.buttons) {
        _loop(button);
      }
    }
  }, {
    key: '_bindCursorToolsListener',
    value: function _bindCursorToolsListener(buttons) {
      this.eventBus.on('cursortoolchanged', function (evt) {
        buttons.cursorSelectToolButton.classList.remove('toggled');
        buttons.cursorHandToolButton.classList.remove('toggled');
        switch (evt.tool) {
          case _pdf_cursor_tools.CursorTool.SELECT:
            buttons.cursorSelectToolButton.classList.add('toggled');
            break;
          case _pdf_cursor_tools.CursorTool.HAND:
            buttons.cursorHandToolButton.classList.add('toggled');
            break;
        }
      });
    }
  }, {
    key: 'open',
    value: function open() {
      if (this.opened) {
        return;
      }
      this.opened = true;
      this._setMaxHeight();
      this.toggleButton.classList.add('toggled');
      this.toolbar.classList.remove('hidden');
    }
  }, {
    key: 'close',
    value: function close() {
      if (!this.opened) {
        return;
      }
      this.opened = false;
      this.toolbar.classList.add('hidden');
      this.toggleButton.classList.remove('toggled');
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: '_setMaxHeight',
    value: function _setMaxHeight() {
      if (!this.opened) {
        return;
      }
      this.containerHeight = this.mainContainer.clientHeight;
      if (this.containerHeight === this.previousContainerHeight) {
        return;
      }
      this.toolbarButtonContainer.setAttribute('style', 'max-height: ' + (this.containerHeight - _ui_utils.SCROLLBAR_PADDING) + 'px;');
      this.previousContainerHeight = this.containerHeight;
    }
  }, {
    key: 'isOpen',
    get: function get() {
      return this.opened;
    }
  }]);

  return SecondaryToolbar;
}();

exports.SecondaryToolbar = SecondaryToolbar;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultTextLayerFactory = exports.TextLayerBuilder = undefined;

var _dom_events = __webpack_require__(2);

var _pdfjs = __webpack_require__(1);

var EXPAND_DIVS_TIMEOUT = 300;
var TextLayerBuilder = function TextLayerBuilderClosure() {
  function TextLayerBuilder(options) {
    this.textLayerDiv = options.textLayerDiv;
    this.eventBus = options.eventBus || (0, _dom_events.getGlobalEventBus)();
    this.textContent = null;
    this.renderingDone = false;
    this.pageIdx = options.pageIndex;
    this.pageNumber = this.pageIdx + 1;
    this.matches = [];
    this.viewport = options.viewport;
    this.textDivs = [];
    this.findController = options.findController || null;
    this.textLayerRenderTask = null;
    this.enhanceTextSelection = options.enhanceTextSelection;
    this._bindMouse();
  }
  TextLayerBuilder.prototype = {
    _finishRendering: function TextLayerBuilder_finishRendering() {
      this.renderingDone = true;
      if (!this.enhanceTextSelection) {
        var endOfContent = document.createElement('div');
        endOfContent.className = 'endOfContent';
        this.textLayerDiv.appendChild(endOfContent);
      }
      this.eventBus.dispatch('textlayerrendered', {
        source: this,
        pageNumber: this.pageNumber,
        numTextDivs: this.textDivs.length
      });
    },
    render: function TextLayerBuilder_render(timeout) {
      var _this = this;

      if (!this.textContent || this.renderingDone) {
        return;
      }
      this.cancel();
      this.textDivs = [];
      var textLayerFrag = document.createDocumentFragment();
      this.textLayerRenderTask = (0, _pdfjs.renderTextLayer)({
        textContent: this.textContent,
        container: textLayerFrag,
        viewport: this.viewport,
        textDivs: this.textDivs,
        timeout: timeout,
        enhanceTextSelection: this.enhanceTextSelection
      });
      this.textLayerRenderTask.promise.then(function () {
        _this.textLayerDiv.appendChild(textLayerFrag);
        _this._finishRendering();
        _this.updateMatches();
      }, function (reason) {});
    },
    cancel: function TextLayerBuilder_cancel() {
      if (this.textLayerRenderTask) {
        this.textLayerRenderTask.cancel();
        this.textLayerRenderTask = null;
      }
    },
    setTextContent: function TextLayerBuilder_setTextContent(textContent) {
      this.cancel();
      this.textContent = textContent;
    },
    convertMatches: function TextLayerBuilder_convertMatches(matches, matchesLength) {
      var i = 0;
      var iIndex = 0;
      var bidiTexts = this.textContent.items;
      var end = bidiTexts.length - 1;
      var queryLen = this.findController === null ? 0 : this.findController.state.query.length;
      var ret = [];
      if (!matches) {
        return ret;
      }
      for (var m = 0, len = matches.length; m < len; m++) {
        var matchIdx = matches[m];
        while (i !== end && matchIdx >= iIndex + bidiTexts[i].str.length) {
          iIndex += bidiTexts[i].str.length;
          i++;
        }
        if (i === bidiTexts.length) {
          console.error('Could not find a matching mapping');
        }
        var match = {
          begin: {
            divIdx: i,
            offset: matchIdx - iIndex
          }
        };
        if (matchesLength) {
          matchIdx += matchesLength[m];
        } else {
          matchIdx += queryLen;
        }
        while (i !== end && matchIdx > iIndex + bidiTexts[i].str.length) {
          iIndex += bidiTexts[i].str.length;
          i++;
        }
        match.end = {
          divIdx: i,
          offset: matchIdx - iIndex
        };
        ret.push(match);
      }
      return ret;
    },
    renderMatches: function TextLayerBuilder_renderMatches(matches) {
      if (matches.length === 0) {
        return;
      }
      var bidiTexts = this.textContent.items;
      var textDivs = this.textDivs;
      var prevEnd = null;
      var pageIdx = this.pageIdx;
      var isSelectedPage = this.findController === null ? false : pageIdx === this.findController.selected.pageIdx;
      var selectedMatchIdx = this.findController === null ? -1 : this.findController.selected.matchIdx;
      var highlightAll = this.findController === null ? false : this.findController.state.highlightAll;
      var infinity = {
        divIdx: -1,
        offset: undefined
      };
      function beginText(begin, className) {
        var divIdx = begin.divIdx;
        textDivs[divIdx].textContent = '';
        appendTextToDiv(divIdx, 0, begin.offset, className);
      }
      function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
        var div = textDivs[divIdx];
        var content = bidiTexts[divIdx].str.substring(fromOffset, toOffset);
        var node = document.createTextNode(content);
        if (className) {
          var span = document.createElement('span');
          span.className = className;
          span.appendChild(node);
          div.appendChild(span);
          return;
        }
        div.appendChild(node);
      }
      var i0 = selectedMatchIdx,
          i1 = i0 + 1;
      if (highlightAll) {
        i0 = 0;
        i1 = matches.length;
      } else if (!isSelectedPage) {
        return;
      }
      for (var i = i0; i < i1; i++) {
        var match = matches[i];
        var begin = match.begin;
        var end = match.end;
        var isSelected = isSelectedPage && i === selectedMatchIdx;
        var highlightSuffix = isSelected ? ' selected' : '';
        if (this.findController) {
          this.findController.updateMatchPosition(pageIdx, i, textDivs, begin.divIdx);
        }
        if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
          if (prevEnd !== null) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
          }
          beginText(begin);
        } else {
          appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
        }
        if (begin.divIdx === end.divIdx) {
          appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix);
        } else {
          appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix);
          for (var n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
            textDivs[n0].className = 'highlight middle' + highlightSuffix;
          }
          beginText(end, 'highlight end' + highlightSuffix);
        }
        prevEnd = end;
      }
      if (prevEnd) {
        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
      }
    },
    updateMatches: function TextLayerBuilder_updateMatches() {
      if (!this.renderingDone) {
        return;
      }
      var matches = this.matches;
      var textDivs = this.textDivs;
      var bidiTexts = this.textContent.items;
      var clearedUntilDivIdx = -1;
      for (var i = 0, len = matches.length; i < len; i++) {
        var match = matches[i];
        var begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
        for (var n = begin, end = match.end.divIdx; n <= end; n++) {
          var div = textDivs[n];
          div.textContent = bidiTexts[n].str;
          div.className = '';
        }
        clearedUntilDivIdx = match.end.divIdx + 1;
      }
      if (this.findController === null || !this.findController.active) {
        return;
      }
      var pageMatches, pageMatchesLength;
      if (this.findController !== null) {
        pageMatches = this.findController.pageMatches[this.pageIdx] || null;
        pageMatchesLength = this.findController.pageMatchesLength ? this.findController.pageMatchesLength[this.pageIdx] || null : null;
      }
      this.matches = this.convertMatches(pageMatches, pageMatchesLength);
      this.renderMatches(this.matches);
    },
    _bindMouse: function TextLayerBuilder_bindMouse() {
      var div = this.textLayerDiv;
      var self = this;
      var expandDivsTimer = null;
      div.addEventListener('mousedown', function (e) {
        if (self.enhanceTextSelection && self.textLayerRenderTask) {
          self.textLayerRenderTask.expandTextDivs(true);
          if (expandDivsTimer) {
            clearTimeout(expandDivsTimer);
            expandDivsTimer = null;
          }
          return;
        }
        var end = div.querySelector('.endOfContent');
        if (!end) {
          return;
        }
        var adjustTop = e.target !== div;
        adjustTop = adjustTop && window.getComputedStyle(end).getPropertyValue('-moz-user-select') !== 'none';
        if (adjustTop) {
          var divBounds = div.getBoundingClientRect();
          var r = Math.max(0, (e.pageY - divBounds.top) / divBounds.height);
          end.style.top = (r * 100).toFixed(2) + '%';
        }
        end.classList.add('active');
      });
      div.addEventListener('mouseup', function (e) {
        if (self.enhanceTextSelection && self.textLayerRenderTask) {
          expandDivsTimer = setTimeout(function () {
            if (self.textLayerRenderTask) {
              self.textLayerRenderTask.expandTextDivs(false);
            }
            expandDivsTimer = null;
          }, EXPAND_DIVS_TIMEOUT);
          return;
        }
        var end = div.querySelector('.endOfContent');
        if (!end) {
          return;
        }
        end.style.top = '';
        end.classList.remove('active');
      });
    }
  };
  return TextLayerBuilder;
}();
function DefaultTextLayerFactory() {}
DefaultTextLayerFactory.prototype = {
  createTextLayerBuilder: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
    var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    return new TextLayerBuilder({
      textLayerDiv: textLayerDiv,
      pageIndex: pageIndex,
      viewport: viewport,
      enhanceTextSelection: enhanceTextSelection
    });
  }
};
exports.TextLayerBuilder = TextLayerBuilder;
exports.DefaultTextLayerFactory = DefaultTextLayerFactory;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = undefined;

var _ui_utils = __webpack_require__(0);

var PAGE_NUMBER_LOADING_INDICATOR = 'visiblePageIsLoading';
var SCALE_SELECT_CONTAINER_PADDING = 8;
var SCALE_SELECT_PADDING = 22;
var Toolbar = function ToolbarClosure() {
  function Toolbar(options, mainContainer, eventBus) {
    this.toolbar = options.container;
    this.mainContainer = mainContainer;
    this.eventBus = eventBus;
    this.items = options;
    this._wasLocalized = false;
    this.reset();
    this._bindListeners();
  }
  Toolbar.prototype = {
    setPageNumber: function setPageNumber(pageNumber, pageLabel) {
      this.pageNumber = pageNumber;
      this.pageLabel = pageLabel;
      this._updateUIState(false);
    },
    setPagesCount: function setPagesCount(pagesCount, hasPageLabels) {
      this.pagesCount = pagesCount;
      this.hasPageLabels = hasPageLabels;
      this._updateUIState(true);
    },
    setPageScale: function setPageScale(pageScaleValue, pageScale) {
      this.pageScaleValue = pageScaleValue;
      this.pageScale = pageScale;
      this._updateUIState(false);
    },
    reset: function reset() {
      this.pageNumber = 0;
      this.pageLabel = null;
      this.hasPageLabels = false;
      this.pagesCount = 0;
      this.pageScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
      this.pageScale = _ui_utils.DEFAULT_SCALE;
      this._updateUIState(true);
    },

    _bindListeners: function Toolbar_bindClickListeners() {
      var eventBus = this.eventBus;
      var self = this;
      var items = this.items;
      items.previous.addEventListener('click', function () {
        eventBus.dispatch('previouspage');
      });
      items.next.addEventListener('click', function () {
        eventBus.dispatch('nextpage');
      });
      items.zoomIn.addEventListener('click', function () {
        eventBus.dispatch('zoomin');
      });
      items.zoomOut.addEventListener('click', function () {
        eventBus.dispatch('zoomout');
      });
      items.pageNumber.addEventListener('click', function () {
        this.select();
      });
      items.pageNumber.addEventListener('change', function () {
        eventBus.dispatch('pagenumberchanged', {
          source: self,
          value: this.value
        });
      });
      items.scaleSelect.addEventListener('change', function () {
        if (this.value === 'custom') {
          return;
        }
        eventBus.dispatch('scalechanged', {
          source: self,
          value: this.value
        });
      });
      items.presentationModeButton.addEventListener('click', function (e) {
        eventBus.dispatch('presentationmode');
      });
      items.openFile.addEventListener('click', function (e) {
        eventBus.dispatch('openfile');
      });
      items.print.addEventListener('click', function (e) {
        eventBus.dispatch('print');
      });
      items.download.addEventListener('click', function (e) {
        eventBus.dispatch('download');
      });
      items.scaleSelect.oncontextmenu = _ui_utils.noContextMenuHandler;
      _ui_utils.localized.then(this._localized.bind(this));
    },
    _localized: function Toolbar_localized() {
      this._wasLocalized = true;
      this._adjustScaleWidth();
      this._updateUIState(true);
    },
    _updateUIState: function Toolbar_updateUIState(resetNumPages) {
      function selectScaleOption(value, scale) {
        var options = items.scaleSelect.options;
        var predefinedValueFound = false;
        for (var i = 0, ii = options.length; i < ii; i++) {
          var option = options[i];
          if (option.value !== value) {
            option.selected = false;
            continue;
          }
          option.selected = true;
          predefinedValueFound = true;
        }
        if (!predefinedValueFound) {
          var customScale = Math.round(scale * 10000) / 100;
          items.customScaleOption.textContent = _ui_utils.mozL10n.get('page_scale_percent', { scale: customScale }, '{{scale}}%');
          items.customScaleOption.selected = true;
        }
      }
      if (!this._wasLocalized) {
        return;
      }
      var pageNumber = this.pageNumber;
      var scaleValue = (this.pageScaleValue || this.pageScale).toString();
      var scale = this.pageScale;
      var items = this.items;
      var pagesCount = this.pagesCount;
      if (resetNumPages) {
        if (this.hasPageLabels) {
          items.pageNumber.type = 'text';
        } else {
          items.pageNumber.type = 'number';
          items.numPages.textContent = _ui_utils.mozL10n.get('of_pages', { pagesCount: pagesCount }, 'of {{pagesCount}}');
        }
        items.pageNumber.max = pagesCount;
      }
      if (this.hasPageLabels) {
        items.pageNumber.value = this.pageLabel;
        items.numPages.textContent = _ui_utils.mozL10n.get('page_of_pages', {
          pageNumber: pageNumber,
          pagesCount: pagesCount
        }, '({{pageNumber}} of {{pagesCount}})');
      } else {
        items.pageNumber.value = pageNumber;
      }
      items.previous.disabled = pageNumber <= 1;
      items.next.disabled = pageNumber >= pagesCount;
      items.zoomOut.disabled = scale <= _ui_utils.MIN_SCALE;
      items.zoomIn.disabled = scale >= _ui_utils.MAX_SCALE;
      selectScaleOption(scaleValue, scale);
    },
    updateLoadingIndicatorState: function Toolbar_updateLoadingIndicatorState(loading) {
      var pageNumberInput = this.items.pageNumber;
      if (loading) {
        pageNumberInput.classList.add(PAGE_NUMBER_LOADING_INDICATOR);
      } else {
        pageNumberInput.classList.remove(PAGE_NUMBER_LOADING_INDICATOR);
      }
    },
    _adjustScaleWidth: function Toolbar_adjustScaleWidth() {
      var container = this.items.scaleSelectContainer;
      var select = this.items.scaleSelect;
      _ui_utils.animationStarted.then(function () {
        if (container.clientWidth === 0) {
          container.setAttribute('style', 'display: inherit;');
        }
        if (container.clientWidth > 0) {
          select.setAttribute('style', 'min-width: inherit;');
          var width = select.clientWidth + SCALE_SELECT_CONTAINER_PADDING;
          select.setAttribute('style', 'min-width: ' + (width + SCALE_SELECT_PADDING) + 'px;');
          container.setAttribute('style', 'min-width: ' + width + 'px; ' + 'max-width: ' + width + 'px;');
        }
      });
    }
  };
  return Toolbar;
}();
exports.Toolbar = Toolbar;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_VIEW_HISTORY_CACHE_SIZE = 20;

var ViewHistory = function () {
  function ViewHistory(fingerprint) {
    var _this = this;

    var cacheSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_VIEW_HISTORY_CACHE_SIZE;

    _classCallCheck(this, ViewHistory);

    this.fingerprint = fingerprint;
    this.cacheSize = cacheSize;
    this._initializedPromise = this._readFromStorage().then(function (databaseStr) {
      var database = JSON.parse(databaseStr || '{}');
      if (!('files' in database)) {
        database.files = [];
      }
      if (database.files.length >= _this.cacheSize) {
        database.files.shift();
      }
      var index;
      for (var i = 0, length = database.files.length; i < length; i++) {
        var branch = database.files[i];
        if (branch.fingerprint === _this.fingerprint) {
          index = i;
          break;
        }
      }
      if (typeof index !== 'number') {
        index = database.files.push({ fingerprint: _this.fingerprint }) - 1;
      }
      _this.file = database.files[index];
      _this.database = database;
    });
  }

  _createClass(ViewHistory, [{
    key: '_writeToStorage',
    value: function _writeToStorage() {
      var _this2 = this;

      return new Promise(function (resolve) {
        var databaseStr = JSON.stringify(_this2.database);
        localStorage.setItem('pdfjs.history', databaseStr);
        resolve();
      });
    }
  }, {
    key: '_readFromStorage',
    value: function _readFromStorage() {
      return new Promise(function (resolve) {
        var value = localStorage.getItem('pdfjs.history');
        if (!value) {
          var databaseStr = localStorage.getItem('database');
          if (databaseStr) {
            try {
              var database = JSON.parse(databaseStr);
              if (typeof database.files[0].fingerprint === 'string') {
                localStorage.setItem('pdfjs.history', databaseStr);
                localStorage.removeItem('database');
                value = databaseStr;
              }
            } catch (ex) {}
          }
        }
        resolve(value);
      });
    }
  }, {
    key: 'set',
    value: function set(name, val) {
      var _this3 = this;

      return this._initializedPromise.then(function () {
        _this3.file[name] = val;
        return _this3._writeToStorage();
      });
    }
  }, {
    key: 'setMultiple',
    value: function setMultiple(properties) {
      var _this4 = this;

      return this._initializedPromise.then(function () {
        for (var name in properties) {
          _this4.file[name] = properties[name];
        }
        return _this4._writeToStorage();
      });
    }
  }, {
    key: 'get',
    value: function get(name, defaultValue) {
      var _this5 = this;

      return this._initializedPromise.then(function () {
        var val = _this5.file[name];
        return val !== undefined ? val : defaultValue;
      });
    }
  }, {
    key: 'getMultiple',
    value: function getMultiple(properties) {
      var _this6 = this;

      return this._initializedPromise.then(function () {
        var values = Object.create(null);
        for (var name in properties) {
          var val = _this6.file[name];
          values[name] = val !== undefined ? val : properties[name];
        }
        return values;
      });
    }
  }]);

  return ViewHistory;
}();

exports.ViewHistory = ViewHistory;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DEFAULT_URL = 'compressed.tracemonkey-pldi-09.pdf';
;
var pdfjsWebApp;
{
  pdfjsWebApp = __webpack_require__(5);
}
;
{
  __webpack_require__(9);
}
;
{
  __webpack_require__(10);
}
function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer: document.getElementById('viewerContainer'),
    viewerContainer: document.getElementById('viewer'),
    eventBus: null,
    toolbar: {
      container: document.getElementById('toolbarViewer'),
      numPages: document.getElementById('numPages'),
      pageNumber: document.getElementById('pageNumber'),
      scaleSelectContainer: document.getElementById('scaleSelectContainer'),
      scaleSelect: document.getElementById('scaleSelect'),
      customScaleOption: document.getElementById('customScaleOption'),
      previous: document.getElementById('previous'),
      next: document.getElementById('next'),
      zoomIn: document.getElementById('zoomIn'),
      zoomOut: document.getElementById('zoomOut'),
      viewFind: document.getElementById('viewFind'),
      openFile: document.getElementById('openFile'),
      print: document.getElementById('print'),
      presentationModeButton: document.getElementById('presentationMode'),
      download: document.getElementById('download'),
      viewBookmark: document.getElementById('viewBookmark')
    },
    secondaryToolbar: {
      toolbar: document.getElementById('secondaryToolbar'),
      toggleButton: document.getElementById('secondaryToolbarToggle'),
      toolbarButtonContainer: document.getElementById('secondaryToolbarButtonContainer'),
      presentationModeButton: document.getElementById('secondaryPresentationMode'),
      openFileButton: document.getElementById('secondaryOpenFile'),
      printButton: document.getElementById('secondaryPrint'),
      downloadButton: document.getElementById('secondaryDownload'),
      viewBookmarkButton: document.getElementById('secondaryViewBookmark'),
      firstPageButton: document.getElementById('firstPage'),
      lastPageButton: document.getElementById('lastPage'),
      pageRotateCwButton: document.getElementById('pageRotateCw'),
      pageRotateCcwButton: document.getElementById('pageRotateCcw'),
      cursorSelectToolButton: document.getElementById('cursorSelectTool'),
      cursorHandToolButton: document.getElementById('cursorHandTool'),
      documentPropertiesButton: document.getElementById('documentProperties')
    },
    fullscreen: {
      contextFirstPage: document.getElementById('contextFirstPage'),
      contextLastPage: document.getElementById('contextLastPage'),
      contextPageRotateCw: document.getElementById('contextPageRotateCw'),
      contextPageRotateCcw: document.getElementById('contextPageRotateCcw')
    },
    sidebar: {
      mainContainer: document.getElementById('mainContainer'),
      outerContainer: document.getElementById('outerContainer'),
      toggleButton: document.getElementById('sidebarToggle'),
      thumbnailButton: document.getElementById('viewThumbnail'),
      outlineButton: document.getElementById('viewOutline'),
      attachmentsButton: document.getElementById('viewAttachments'),
      thumbnailView: document.getElementById('thumbnailView'),
      outlineView: document.getElementById('outlineView'),
      attachmentsView: document.getElementById('attachmentsView')
    },
    findBar: {
      bar: document.getElementById('findbar'),
      toggleButton: document.getElementById('viewFind'),
      findField: document.getElementById('findInput'),
      highlightAllCheckbox: document.getElementById('findHighlightAll'),
      caseSensitiveCheckbox: document.getElementById('findMatchCase'),
      findMsg: document.getElementById('findMsg'),
      findResultsCount: document.getElementById('findResultsCount'),
      findStatusIcon: document.getElementById('findStatusIcon'),
      findPreviousButton: document.getElementById('findPrevious'),
      findNextButton: document.getElementById('findNext')
    },
    passwordOverlay: {
      overlayName: 'passwordOverlay',
      container: document.getElementById('passwordOverlay'),
      label: document.getElementById('passwordText'),
      input: document.getElementById('password'),
      submitButton: document.getElementById('passwordSubmit'),
      cancelButton: document.getElementById('passwordCancel')
    },
    documentProperties: {
      overlayName: 'documentPropertiesOverlay',
      container: document.getElementById('documentPropertiesOverlay'),
      closeButton: document.getElementById('documentPropertiesClose'),
      fields: {
        'fileName': document.getElementById('fileNameField'),
        'fileSize': document.getElementById('fileSizeField'),
        'title': document.getElementById('titleField'),
        'author': document.getElementById('authorField'),
        'subject': document.getElementById('subjectField'),
        'keywords': document.getElementById('keywordsField'),
        'creationDate': document.getElementById('creationDateField'),
        'modificationDate': document.getElementById('modificationDateField'),
        'creator': document.getElementById('creatorField'),
        'producer': document.getElementById('producerField'),
        'version': document.getElementById('versionField'),
        'pageCount': document.getElementById('pageCountField')
      }
    },
    errorWrapper: {
      container: document.getElementById('errorWrapper'),
      errorMessage: document.getElementById('errorMessage'),
      closeButton: document.getElementById('errorClose'),
      errorMoreInfo: document.getElementById('errorMoreInfo'),
      moreInfoButton: document.getElementById('errorShowMore'),
      lessInfoButton: document.getElementById('errorShowLess')
    },
    printContainer: document.getElementById('printContainer'),
    openFileInputName: 'fileInput',
    debuggerScriptPath: './debugger.js',
    defaultUrl: DEFAULT_URL
  };
}
function webViewerLoad() {
  var config = getViewerConfiguration();
  window.PDFViewerApplication = pdfjsWebApp.PDFViewerApplication;
  pdfjsWebApp.PDFViewerApplication.run(config);
}
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  webViewerLoad();
} else {
  document.addEventListener('DOMContentLoaded', webViewerLoad, true);
}

/***/ })
/******/ ]);
//# sourceMappingURL=viewer.js.map