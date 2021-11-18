/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("$('.header_slider-slider').slick({\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n    autoplay: true,\r\n    arrows: false,\r\n    dots: true,\r\n    autoplaySpeed: 5000,\r\n    appendDots: $('.header_slider-dots')\r\n});\r\n\r\n\r\n$('#footerCarusel').slick({\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n    autoplay: true,\r\n    arrows: false,\r\n    dots: false,\r\n    autoplaySpeed: 5000\r\n});\r\n\r\n\r\n$('#private_house').click(function(){\r\n    $('.private_house').addClass('active');\r\n    $('.private_house').removeClass('off');\r\n    $('.base').removeClass('active');\r\n    $('.office').removeClass('active');\r\n    $('.base').addClass('off');\r\n    $('.office').addClass('off');\r\n});\r\n\r\n\r\n$('#base').click(function(){\r\n    $('.base').addClass('active');\r\n    $('.base').removeClass('off');\r\n    $('.private_house').removeClass('active');\r\n    $('.office').removeClass('active');\r\n    $('.private_house').addClass('off');\r\n    $('.office').addClass('off');\r\n});\r\n\r\n\r\n$('#office').click(function(){\r\n    $('.office').addClass('active');\r\n    $('.office').removeClass('off');\r\n    $('.private_house').removeClass('active');\r\n    $('.base').removeClass('active');\r\n    $('.private_house').addClass('off');\r\n    $('.base').addClass('off');\r\n});\r\n\r\n$('#private_house2').click(function(){\r\n    $('.private_house').addClass('active');\r\n    $('.private_house').removeClass('off');\r\n    $('.base').removeClass('active');\r\n    $('.office').removeClass('active');\r\n    $('.base').addClass('off');\r\n    $('.office').addClass('off');\r\n});\r\n\r\n\r\n$('#base2').click(function(){\r\n    $('.base').addClass('active');\r\n    $('.base').removeClass('off');\r\n    $('.private_house').removeClass('active');\r\n    $('.office').removeClass('active');\r\n    $('.private_house').addClass('off');\r\n    $('.office').addClass('off');\r\n});\r\n\r\n\r\n$('#office2').click(function(){\r\n    $('.office').addClass('active');\r\n    $('.office').removeClass('off');\r\n    $('.private_house').removeClass('active');\r\n    $('.base').removeClass('active');\r\n    $('.private_house').addClass('off');\r\n    $('.base').addClass('off');\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;