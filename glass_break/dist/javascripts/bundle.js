/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)e(exports);else{var n={exports:{}};e(n.exports),t.canvas=n.exports}}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function t(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){e(this,t),this.canvas=document.getElementById("canvas"),this.cxt=canvas.getContext("2d"),this.width=this.canvas.width=this.canvas.offsetWidth,this.height=this.canvas.height=this.canvas.offsetHeight,this.bounds=this.canvas.getBoundingClientRect(),this.ball_count=50,this.line_range=200,this.balls=[],this.clickHandle=this.clickHandle.bind(this),this.start()}return i(t,[{key:"bindEvent",value:function(){this.canvas.addEventListener("click",this.clickHandle,!1)}},{key:"unbindEvent",value:function(){this.canvas.removeEventListener("click",this.clickHandle,!1)}},{key:"clickHandle",value:function(t){var e=t.clientX-this.bounds.left,n=t.clientY-this.bounds.top;this.addWork({x:e,y:n})}},{key:"start",value:function(){var t=this;if(this.isAnimate)return!1;this.isAnimate=!0;var e=function e(){if(!t.isAnimate)return!1;if(t.balls.length<t.ball_count)for(var n=0;n<t.ball_count-t.balls.length;n++)t.addBall();t.render(),t.update(),requestAnimationFrame(e)};requestAnimationFrame(e)}},{key:"addBall",value:function(){var t={x:this.getRandomNumber([0,this.width]),y:-1*this.getRandomNumber([0,this.height]),g:.1*this.getRandomNumber([2,15]),gray:.1*this.getRandomNumber([4,10]),type:~~this.getRandomNumber([0,3])};t.r=20*t.gray+20;var e=~~(188*t.gray);switch(t.color="rgba("+e+", "+e+", "+e+", 1)",t.type){case 0:break;case 1:t.empty={r:this.getRandomNumber([10,t.r-10])};break;case 2:t.empty={r:this.getRandomNumber([t.r/2-3,t.r/2+3])},t.son={r:this.getRandomNumber([7,t.empty.r-3]),color:t.color}}this.balls.push(t)}},{key:"render",value:function(t){var e=this;this.cxt.clearRect(0,0,this.width,this.height),Array.from(this.balls,function(t){Array.from(e.balls,function(n){var i=Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2));i<e.line_range&&(e.cxt.strokeStyle="rgba(188, 188, 188, "+(1-i/e.line_range)+")",e.renderLine(t.x,t.y,n.x,n.y))})}),Array.from(this.balls,function(t){e.cxt.globalCompositeOperation="destination-over",t.type>0&&e.renderArc(t.x,t.y,t.empty.r,"#fff"),e.cxt.globalCompositeOperation="source-over",2===t.type&&e.renderArc(t.x,t.y,t.son.r,t.son.color),e.cxt.globalCompositeOperation="destination-over",e.renderArc(t.x,t.y,t.r,t.color)})}},{key:"update",value:function(){Array.from(this.balls,function(t){t.y+=t.g})}},{key:"getRandomNumber",value:function(t){var e=n(t,2),i=e[0],r=e[1];return~~(Math.random()*(r-i))+i}},{key:"renderArc",value:function(t,e,n,i){this.cxt.fillStyle=i,this.cxt.beginPath(),this.cxt.arc(t,e,n,0,2*Math.PI,!0),this.cxt.closePath(),this.cxt.fill()}},{key:"renderLine",value:function(t,e,n,i){this.cxt.beginPath(),this.cxt.moveTo(t,e),this.cxt.lineTo(n,i),this.cxt.closePath(),this.cxt.stroke()}},{key:"renderTri",value:function(t,e,n){this.cxt.beginPath(),this.cxt.moveTo(t.x,t.y),this.cxt.lineTo(e.x,e.y),this.cxt.lineTo(n.x,n.y),this.cxt.lineTo(t.x,t.y),this.cxt.closePath(),this.cxt.stroke()}}]),t}();t.default=r});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,n){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)n(require("./canvas.js"));else{var t={exports:{}};n(e.canvas),e.index=t.exports}}(this,function(e){"use strict";new(function(e){return e&&e.__esModule?e:{default:e}}(e).default)});

/***/ })
/******/ ]);