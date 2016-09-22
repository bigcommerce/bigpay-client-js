(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BigpayClient"] = factory();
	else
		root["BigpayClient"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _payment = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BigpayClient = function () {
	    /**
	     * Construct BigpayClient
	     * @param {Object} config
	     * @param {string} config.host
	     */
	    function BigpayClient(_ref) {
	        var host = _ref.host;
	
	        _classCallCheck(this, BigpayClient);
	
	        this.host = host;
	    }
	
	    /**
	     * Submit payment
	     * @param {PaymentRequestData} data
	     * @returns {Promise}
	     */
	
	
	    _createClass(BigpayClient, [{
	        key: 'submitPayment',
	        value: function submitPayment(data) {
	            var _data$paymentMethod = data.paymentMethod;
	            var paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;
	
	
	            if (paymentMethod.type === _payment.PAYMENT_TYPES.HOSTED || paymentMethod.type === _payment.PAYMENT_TYPES.OFFLINE) {
	                var error = new Error(data.type + ' is not supported.');
	
	                return Promise.reject(error);
	            }
	
	            var options = { host: this.host };
	
	            return (0, _payment.submitPayment)(data, options);
	        }
	    }]);
	
	    return BigpayClient;
	}();
	
	exports.default = BigpayClient;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.submitPayment = exports.PAYMENT_TYPES = undefined;
	
	var _paymentTypes = __webpack_require__(2);
	
	var PAYMENT_TYPES = _interopRequireWildcard(_paymentTypes);
	
	var _submitPayment = __webpack_require__(3);
	
	var _submitPayment2 = _interopRequireDefault(_submitPayment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.PAYMENT_TYPES = PAYMENT_TYPES;
	exports.submitPayment = _submitPayment2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API = exports.API = 'PAYMENT_TYPE_API';
	var HOSTED = exports.HOSTED = 'PAYMENT_TYPE_HOSTED';
	var OFFLINE = exports.OFFLINE = 'PAYMENT_TYPE_OFFLINE';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = submitPayment;
	
	var _urls = __webpack_require__(4);
	
	var _httpRequest = __webpack_require__(5);
	
	var _validation = __webpack_require__(18);
	
	var _mappers = __webpack_require__(23);
	
	var _validators = __webpack_require__(36);
	
	/**
	 * Submit payment
	 * @param {PaymentRequestData} data
	 * @param {Object} [options = {}]
	 * @param {string} [options.host]
	 * @returns {Promise}
	 */
	function submitPayment(data) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var validation = (0, _validators.validatePaymentRequest)(data);
	
	    if (!(0, _validation.isValid)(validation)) {
	        return Promise.reject(new Error({ validation: validation }));
	    }
	
	    var payload = (0, _mappers.mapToPayload)(data);
	    var requestOptions = {
	        headers: (0, _mappers.mapToHeaders)(data)
	    };
	
	    return (0, _httpRequest.postRequest)((0, _urls.getPaymentUrl)(options.host), payload, requestOptions);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPaymentUrl = getPaymentUrl;
	/**
	 * Payment URL
	 * @param {string} host
	 * @returns {string}
	 */
	function getPaymentUrl(host) {
	  return host + "/api/public/v1/payments/payment";
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sendRequest = exports.postRequest = undefined;
	
	var _postRequest = __webpack_require__(6);
	
	var _postRequest2 = _interopRequireDefault(_postRequest);
	
	var _sendRequest = __webpack_require__(12);
	
	var _sendRequest2 = _interopRequireDefault(_sendRequest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.postRequest = _postRequest2.default;
	exports.sendRequest = _sendRequest2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = postRequest;
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _constants = __webpack_require__(8);
	
	var _sendRequest = __webpack_require__(12);
	
	var _sendRequest2 = _interopRequireDefault(_sendRequest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Post request
	 * @param {string} url
	 * @param {Object} data
	 * @param {Object} [options]
	 * @returns {Promise}
	 */
	function postRequest(url, data, options) {
	    var mergedOptions = (0, _objectAssign2.default)({}, options, {
	        method: _constants.METHOD_TYPES.POST
	    });
	
	    return (0, _sendRequest2.default)(url, data, mergedOptions);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.METHOD_TYPES = exports.DEFAULT_OPTIONS = exports.CONTENT_TYPES = undefined;
	
	var _contentTypes = __webpack_require__(9);
	
	var CONTENT_TYPES = _interopRequireWildcard(_contentTypes);
	
	var _methodTypes = __webpack_require__(10);
	
	var METHOD_TYPES = _interopRequireWildcard(_methodTypes);
	
	var _defaultOptions = __webpack_require__(11);
	
	var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.CONTENT_TYPES = CONTENT_TYPES;
	exports.DEFAULT_OPTIONS = _defaultOptions2.default;
	exports.METHOD_TYPES = METHOD_TYPES;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var APPLICATION_JSON = exports.APPLICATION_JSON = 'application/json';

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GET = exports.GET = 'GET';
	var POST = exports.POST = 'POST';

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _contentTypes = __webpack_require__(9);
	
	var _methodTypes = __webpack_require__(10);
	
	var DEFAULT_OPTIONS = {
	    headers: {
	        Accept: _contentTypes.APPLICATION_JSON,
	        'Content-Type': _contentTypes.APPLICATION_JSON
	    },
	    method: _methodTypes.GET
	};
	
	exports.default = DEFAULT_OPTIONS;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = sendRequest;
	
	var _objectAssign = __webpack_require__(7);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _constants = __webpack_require__(8);
	
	var _utils = __webpack_require__(13);
	
	var _createRequest = __webpack_require__(17);
	
	var _createRequest2 = _interopRequireDefault(_createRequest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get request body
	 * @private
	 * @param {Object} data
	 * @param {string} [contentType = CONTENT_TYPES.APPLICATION_JSON]
	 * @returns {Object}
	 */
	function getRequestBody(data) {
	    var contentType = arguments.length <= 1 || arguments[1] === undefined ? _constants.CONTENT_TYPES.APPLICATION_JSON : arguments[1];
	
	    if (data && (0, _utils.includes)(contentType, _constants.CONTENT_TYPES.APPLICATION_JSON)) {
	        return JSON.stringify(data);
	    }
	
	    return data;
	}
	
	/**
	 * Get error response
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @returns {Error}
	 */
	function getErrorResponse(xhr) {
	    var response = getResponse(xhr);
	
	    return new Error(response);
	}
	
	/**
	 * Get response
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @returns {Object}
	 */
	function getResponse(xhr) {
	    var contentType = xhr.getResponseHeader('Content-Type');
	    var status = xhr.status;
	    var statusText = xhr.statusText;
	
	
	    var data = 'response' in xhr ? xhr.response : xhr.responseText;
	
	    if (data && (0, _utils.includes)(contentType, _constants.CONTENT_TYPES.APPLICATION_JSON)) {
	        data = JSON.parse(data);
	    }
	
	    return { data: data, status: status, statusText: statusText };
	}
	
	/**
	 * Is request successful
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @returns {boolean}
	 */
	function isSuccessfulRequest(xhr) {
	    return xhr.status >= 200 && xhr.status < 300;
	}
	
	/**
	 * Send request
	 * @param {string} url
	 * @param {Object} data
	 * @param {Object} [options]
	 * @returns {Promise}
	 */
	function sendRequest(url, data, options) {
	    var mergedOptions = (0, _objectAssign2.default)({}, _constants.DEFAULT_OPTIONS, options);
	
	    return new Promise(function (resolve, reject) {
	        function onerror(xhr) {
	            reject(getErrorResponse(xhr));
	        }
	
	        function onload(xhr) {
	            if (isSuccessfulRequest(xhr)) {
	                resolve(getResponse(xhr));
	            } else {
	                reject(getErrorResponse(xhr));
	            }
	        }
	
	        var xhr = (0, _createRequest2.default)(url, mergedOptions, { onerror: onerror, onload: onload });
	        var payload = getRequestBody(data, mergedOptions.headers['Content-Type']);
	
	        xhr.send(payload);
	    });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isObject = exports.includes = exports.capitalize = undefined;
	
	var _capitalize = __webpack_require__(14);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _includes = __webpack_require__(15);
	
	var _includes2 = _interopRequireDefault(_includes);
	
	var _isObject = __webpack_require__(16);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.capitalize = _capitalize2.default;
	exports.includes = _includes2.default;
	exports.isObject = _isObject2.default;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = capitalize;
	/**
	 * Capitalize
	 * @param {string} string
	 * @returns {string}
	 */
	function capitalize(string) {
	    if (!string) {
	        return string;
	    }
	
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = includes;
	/**
	 * Includes item
	 * @param {array|string} items
	 * @param {array|string} item
	 * @returns {boolean}
	 */
	function includes(items, item) {
	    if (!Array.isArray(items) && typeof items !== 'string') {
	        return false;
	    }
	
	    return items.indexOf(item) !== -1;
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = isObject;
	/**
	 * Is object
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	
	  return value !== null && (type === 'object' || type === 'function');
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createRequest;
	/**
	 * Set XHR headers
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {Object} headers
	 * @returns {void}
	 */
	function setHeaders(xhr, headers) {
	    var headerKeys = Object.keys(headers);
	
	    headerKeys.forEach(function (key) {
	        var value = headers[key];
	
	        xhr.setRequestHeader(key, value);
	    });
	}
	
	/**
	 * Set XHR options
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {Object} options
	 * @returns {void}
	 */
	function setOptions(xhr, options) {
	    xhr.withCredentials = options.withCredentials;
	
	    if (options.headers) {
	        setHeaders(xhr, options.headers);
	    }
	}
	
	/**
	 * Create XMLHttpRequest
	 * @param {string} url
	 * @param {Object} options
	 * @param {Object} [callbacks]
	 * @param {Function} [callbacks.onload]
	 * @param {Function} [callbacks.onerror]
	 * @returns {XMLHttpRequest}
	 */
	function createRequest(url, options) {
	    var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    var onload = _ref.onload;
	    var onerror = _ref.onerror;
	
	    var xhr = new XMLHttpRequest();
	
	    if (onerror) {
	        xhr.onerror = function () {
	            return onerror(xhr);
	        };
	    }
	
	    if (onload) {
	        xhr.onload = function () {
	            return onload(xhr);
	        };
	    }
	
	    xhr.open(options.method, url, true);
	    setOptions(xhr, options);
	
	    return xhr;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validate = exports.isValid = undefined;
	
	var _isValid = __webpack_require__(19);
	
	var _isValid2 = _interopRequireDefault(_isValid);
	
	var _validate = __webpack_require__(20);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.isValid = _isValid2.default;
	exports.validate = _validate2.default;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = isValid;
	
	var _utils = __webpack_require__(13);
	
	/**
	 * Is valid result
	 * @param {Object} validation
	 * @returns {Boolean}
	 */
	function isValid(validation) {
	    var keys = Object.keys(validation);
	
	    while (keys.length > 0) {
	        var key = keys.shift();
	
	        if (validation[key] === false) {
	            return false;
	        }
	
	        if ((0, _utils.isObject)(validation[key]) && !isValid(validation[key])) {
	            return false;
	        }
	    }
	
	    return true;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validate;
	
	var _utils = __webpack_require__(13);
	
	var _validators = __webpack_require__(21);
	
	var validators = _interopRequireWildcard(_validators);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Get validator
	 * @private
	 * @param {string} validatorName
	 * @returns {Function|void}
	 */
	function getValidator(validatorName) {
	    var validateFunctionName = 'validate' + (0, _utils.capitalize)(validatorName);
	
	    return validators[validateFunctionName];
	}
	
	/**
	 * Validate field
	 * @private
	 * @param {*} fieldData
	 * @param {string[]} fieldRules
	 * @returns {Object}
	 */
	function validateField(fieldData, fieldRules) {
	    return fieldRules.reduce(function (result, validatorName) {
	        var validator = getValidator(validatorName);
	
	        if (validator) {
	            result[validatorName] = validator(fieldData);
	        }
	
	        return result;
	    }, {});
	}
	
	/**
	 * Validate
	 * @param {Object} data
	 * @param {Object|string[]} rules
	 * @returns {Object}
	 */
	function validate(data, rules) {
	    var result = {};
	
	    Object.keys(rules).forEach(function (key) {
	        var fieldData = data[key];
	        var fieldRules = rules[key];
	
	        if (Array.isArray(fieldRules)) {
	            result[key] = validateField(fieldData, fieldRules);
	        } else {
	            result[key] = validate(fieldData, fieldRules);
	        }
	    });
	
	    return result;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validateRequired = undefined;
	
	var _validateRequired = __webpack_require__(22);
	
	var _validateRequired2 = _interopRequireDefault(_validateRequired);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.validateRequired = _validateRequired2.default;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateRequired;
	/**
	 * Is required value valid
	 * @param {*} value
	 * @returns {boolean}
	 */
	function validateRequired(value) {
	  return value !== undefined && value !== null && value !== '';
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapToPayload = exports.mapToHeaders = undefined;
	
	var _mapToHeaders = __webpack_require__(24);
	
	var _mapToHeaders2 = _interopRequireDefault(_mapToHeaders);
	
	var _mapToPayload = __webpack_require__(25);
	
	var _mapToPayload2 = _interopRequireDefault(_mapToPayload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.mapToHeaders = _mapToHeaders2.default;
	exports.mapToPayload = _mapToPayload2.default;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToHeaders;
	/**
	 * Map to headers
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToHeaders(data) {
	    var authToken = data.authToken;
	
	
	    return {
	        AUTHORIZATION: authToken
	    };
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToPayload;
	
	var _mapToCustomer = __webpack_require__(26);
	
	var _mapToCustomer2 = _interopRequireDefault(_mapToCustomer);
	
	var _mapToOrder = __webpack_require__(27);
	
	var _mapToOrder2 = _interopRequireDefault(_mapToOrder);
	
	var _mapToPayment = __webpack_require__(33);
	
	var _mapToPayment2 = _interopRequireDefault(_mapToPayment);
	
	var _mapToStore = __webpack_require__(35);
	
	var _mapToStore2 = _interopRequireDefault(_mapToStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to payload
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToPayload(data) {
	    var _data$order = data.order;
	    var order = _data$order === undefined ? {} : _data$order;
	
	
	    return {
	        customer: (0, _mapToCustomer2.default)(data),
	        notify_url: order.callbackUrl,
	        order: (0, _mapToOrder2.default)(data),
	        payment: (0, _mapToPayment2.default)(data),
	        store: (0, _mapToStore2.default)(data)
	    };
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToCustomer;
	/**
	 * Map to customer
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToCustomer(data) {
	    var _data$customer = data.customer;
	    var customer = _data$customer === undefined ? {} : _data$customer;
	
	
	    return {
	        geo_ip_country_code: customer.geoCountryCode,
	        id: customer.customerId,
	        session_token: customer.sessionHash
	    };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToOrder;
	
	var _mapToBillingAddress = __webpack_require__(28);
	
	var _mapToBillingAddress2 = _interopRequireDefault(_mapToBillingAddress);
	
	var _mapToItems = __webpack_require__(30);
	
	var _mapToItems2 = _interopRequireDefault(_mapToItems);
	
	var _mapToOrderTotals = __webpack_require__(31);
	
	var _mapToOrderTotals2 = _interopRequireDefault(_mapToOrderTotals);
	
	var _mapToShippingAddress = __webpack_require__(32);
	
	var _mapToShippingAddress2 = _interopRequireDefault(_mapToShippingAddress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to order
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToOrder(data) {
	    var cart = data.cart;
	    var order = data.order;
	
	
	    return {
	        billing_address: (0, _mapToBillingAddress2.default)(data),
	        currency: cart.currency,
	        id: order.orderId,
	        items: (0, _mapToItems2.default)(data),
	        shipping_address: (0, _mapToShippingAddress2.default)(data),
	        token: order.token,
	        totals: (0, _mapToOrderTotals2.default)(data)
	    };
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapToBillingAddress;
	
	var _mapToAddress = __webpack_require__(29);
	
	var _mapToAddress2 = _interopRequireDefault(_mapToAddress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to billing address
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToBillingAddress(data) {
	  return (0, _mapToAddress2.default)(data, 'billingAddress');
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToAddress;
	/**
	 * Map to address
	 * @param {PaymentRequestData} data
	 * @param {string} addressKey
	 * @returns {Object}
	 */
	function mapToAddress(data, addressKey) {
	    var address = data[addressKey] || {};
	
	    return {
	        city: address.city,
	        company: address.company,
	        country_code: address.countryCode,
	        country: address.country,
	        first_name: address.firstName,
	        last_name: address.lastName,
	        phone: address.phone,
	        state: address.province,
	        street_1: address.addressLine1,
	        street_2: address.addressLine2,
	        zip: address.postCode
	    };
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToItems;
	/**
	 * Map to items
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToItems(data) {
	    var _data$cart = data.cart;
	    var cart = _data$cart === undefined ? { items: [] } : _data$cart;
	
	
	    return cart.items.map(function (itemData) {
	        return {
	            code: itemData.id,
	            name: itemData.name,
	            quantity: itemData.quantity,
	            sku: itemData.sku,
	            value: itemData.amount
	        };
	    });
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToOrderTotals;
	/**
	 * Map to order totals
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToOrderTotals(data) {
	    var cart = data.cart;
	
	
	    return {
	        grand_total: cart.grandTotal ? cart.grandTotal.integerAmount : undefined,
	        handling: cart.handling ? cart.handling.amount : undefined,
	        shipping: cart.shipping ? cart.shipping.amount : undefined,
	        subtotal: cart.subTotal ? cart.subTotal.amount : undefined,
	        tax: cart.taxTotal ? cart.taxTotal.amount : undefined
	    };
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapToShippingAddress;
	
	var _mapToAddress = __webpack_require__(29);
	
	var _mapToAddress2 = _interopRequireDefault(_mapToAddress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to shipping address
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToShippingAddress(data) {
	  return (0, _mapToAddress2.default)(data, 'shippingAddress');
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToPayment;
	
	var _mapToCreditCard = __webpack_require__(34);
	
	var _mapToCreditCard2 = _interopRequireDefault(_mapToCreditCard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map to payment
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToPayment(data) {
	    var _data$order = data.order;
	    var order = _data$order === undefined ? {} : _data$order;
	    var _data$payment = data.payment;
	    var payment = _data$payment === undefined ? {} : _data$payment;
	    var _data$paymentMethod = data.paymentMethod;
	    var paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;
	
	
	    return {
	        credit_card_token: {
	            token: payment.nouce
	        },
	        credit_card: (0, _mapToCreditCard2.default)(data),
	        device_info: payment.deviceData,
	        gateway: paymentMethod.id,
	        notify_url: order.callbackUrl
	    };
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToCreditCard;
	/**
	 * Map to credit card
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToCreditCard(data) {
	    var _data$payment = data.payment;
	    var payment = _data$payment === undefined ? {} : _data$payment;
	
	
	    return {
	        account_name: payment.ccName,
	        number: payment.ccNumber,
	        month: payment.ccExpiry ? payment.ccExpiry.month : undefined,
	        verification_value: payment.ccCvv,
	        year: payment.ccExpiry ? payment.ccExpiry.year : undefined
	    };
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mapToStore;
	/**
	 * Map to store
	 * @param {PaymentRequestData} data
	 * @returns {Object}
	 */
	function mapToStore(data) {
	    var _data$store = data.store;
	    var store = _data$store === undefined ? {} : _data$store;
	
	
	    return {
	        hash: store.storeHash,
	        id: store.storeId,
	        name: store.storeName
	    };
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validatePaymentRequest = undefined;
	
	var _validatePaymentRequest = __webpack_require__(37);
	
	var _validatePaymentRequest2 = _interopRequireDefault(_validatePaymentRequest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.validatePaymentRequest = _validatePaymentRequest2.default;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validatePaymentRequest;
	
	var _validators = __webpack_require__(21);
	
	var _validateCart = __webpack_require__(38);
	
	var _validateCart2 = _interopRequireDefault(_validateCart);
	
	var _validateOrder = __webpack_require__(39);
	
	var _validateOrder2 = _interopRequireDefault(_validateOrder);
	
	var _validatePayment = __webpack_require__(40);
	
	var _validatePayment2 = _interopRequireDefault(_validatePayment);
	
	var _validateStore = __webpack_require__(41);
	
	var _validateStore2 = _interopRequireDefault(_validateStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Validate payment request data
	 * @param {PaymentRequestData} paymentRequestData
	 * @returns {Object}
	 */
	function validatePaymentRequest(paymentRequestData) {
	    var authToken = paymentRequestData.authToken;
	    var cart = paymentRequestData.cart;
	    var order = paymentRequestData.order;
	    var payment = paymentRequestData.payment;
	    var store = paymentRequestData.store;
	
	
	    return {
	        authToken: (0, _validators.validateRequired)(authToken),
	        cart: (0, _validateCart2.default)(cart),
	        order: (0, _validateOrder2.default)(order),
	        payment: (0, _validatePayment2.default)(payment),
	        store: (0, _validateStore2.default)(store)
	    };
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validateCart;
	
	var _validation = __webpack_require__(18);
	
	/**
	 * Validate cart data
	 * @param {CartData} cartData
	 * @returns {Object}
	 */
	function validateCart(cartData) {
	    return (0, _validation.validate)(cartData, {
	        currency: ['required'],
	        grandTotal: {
	            integerAmount: ['required']
	        },
	        id: ['required']
	    });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validateOrder;
	
	var _validation = __webpack_require__(18);
	
	/**
	 * Validate order data
	 * @param {OrderData} orderData
	 * @returns {Object}
	 */
	function validateOrder(orderData) {
	    return (0, _validation.validate)(orderData, {
	        orderId: ['required']
	    });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validatePayment;
	
	var _validation = __webpack_require__(18);
	
	/**
	 * Validate payment data
	 * @param {PaymentData} paymentData
	 * @returns {Object}
	 */
	function validatePayment(paymentData) {
	    return (0, _validation.validate)(paymentData, {
	        ccName: ['required'],
	        ccNumber: ['required'],
	        ccExpiry: {
	            month: ['required'],
	            year: ['required']
	        }
	    });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validateOrder;
	
	var _validation = __webpack_require__(18);
	
	/**
	 * Validate store data
	 * @param {StoreData} storeData
	 * @returns {Object}
	 */
	function validateOrder(storeData) {
	    return (0, _validation.validate)(storeData, {
	        storeId: ['required']
	    });
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bigpay-client.js.map