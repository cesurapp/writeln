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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ \"./app.scss\");\n\n\n$(function () {\n    /**\n     * Bootstrap Dropdown\n     */\n    $('.dropdown-toggle').dropdown();\n\n    $('.dropdown')\n        .on('show.bs.dropdown', function () {\n            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(200);\n        })\n        .on('hide.bs.dropdown', function () {\n            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200);\n        });\n\n    /**\n     * Tooltips\n     */\n    $(function () {\n        $('[data-toggle=\"tooltip\"]').tooltip();\n    })\n\n    /**\n     * Navbar Fixed\n     */\n    let navbar = document.querySelector(\".navbar\");\n    let sticky = navbar.offsetTop + 400;\n    window.onscroll = function () {\n        if (window.pageYOffset > sticky) {\n            navbar.classList.add(\"fixed\");\n        } else {\n            navbar.classList.remove(\"fixed\");\n        }\n    };\n\n    /**\n     * Responsive Navigation\n     */\n    $('.nav-responsive > .toggle').click(function () {\n        list = $(this).next();\n\n        if (list.hasClass('show')) {\n            list.removeClass('show').slideUp('fast');\n        } else {\n            list.addClass('show').slideDown('fast');\n        }\n    });\n\n    /**\n     * VM Pricing Calculator\n     */\n    let priceMin = 0;\n    let priceMax = 0;\n\n    /* Show Modal */\n    $('#pricingModal').on('show.bs.modal', function (event) {\n        let click = $(event.relatedTarget);\n        let modal = $(this);\n\n        // Get Data\n        priceMin = click.data('min');\n        priceMax = click.data('max');\n\n        // Set Data\n        modal.find('#resource').text('$' + priceMin + '-' + priceMax);\n\n        // Calc\n        calcPrice();\n    });\n\n    /* Calc Price */\n    $(document).on('input change', '#pricingModal input[type=range]', function () {\n        $(this).prev().find('.count').html(this.value);\n\n        calcPrice();\n    });\n\n    function calcPrice() {\n        // Calc Month\n        let resourceAverage = ($('#cpu').val() / 2) + ($('#ram').val() / 2);\n        let priceMonth = ((priceMax - priceMin) * resourceAverage) / 100 + priceMin;\n        let priceHours = priceMonth / 720;\n\n        // Response\n        $('#priceHours').text('$' + round(priceHours, 3));\n        $('#priceMonth').text('$' + round(priceMonth, 3));\n    }\n\n    /**\n     * Round Decimal\n     *\n     * @param value\n     * @param decimals\n     * @returns {number}\n     */\n    function round(value, decimals) {\n        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);\n    }\n\n    /**\n     * Contact Form Ajax Submit\n     */\n    $('.ajaxForm').submit(function (e) {\n        e.preventDefault();\n        let form = $(this);\n        let loading = form.find('.loading');\n        let button = form.find('[type=submit]');\n\n        $.ajax({\n            url: form.attr('action'),\n            method: 'POST',\n            data: form.serialize(),\n            beforeSend: function () {\n                loading.html('<i class=\"fas fa-cog fa-spin fa-2x\"></i>');\n                loading.show();\n                form.find('.invalid-feedback').remove();\n                form.find('.is-invalid').removeClass('is-invalid');\n                button.prop('disabled', true)\n            },\n            success: function (response) {\n                if (response.status === 'success') {\n                    setTimeout(function () {\n                        loading.html('<i class=\"fas fa-check text-success fa-2x\"></i>');\n                        form.find(':input').prop('disabled', true);\n                    }, 600);\n                } else {\n                    setTimeout(function () {\n                        loading.html('<i class=\"fas fa-times text-danger fa-2x\"></i>');\n                        form.find(':input').prop('disabled', false);\n\n                        // Set Error\n                        for (var name in response.form) {\n                            form.find('#' + name).toggleClass('is-invalid').after('<div class=\"invalid-feedback\">' + response.form[name] + '</div>');\n                        }\n                    }, 600);\n                }\n            }\n        })\n    })\n});\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./app.scss":
/*!******************!*\
  !*** ./app.scss ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./app.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;