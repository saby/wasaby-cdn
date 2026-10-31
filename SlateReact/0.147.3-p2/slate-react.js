/* eslint-disable */
// slate-react 0.147.3, slate-dom 0.147.3 (032bcf8f) + патчи Saby, собрано tools/slate-update
(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var req = global && global.requirejs ? global.requirejs : require;
    factory(module.exports, req("react"), req("react-dom"), req("/cdn/Slate/0.147.4-p1/slate.min.js"), req("Env/Env"));
  } else if (typeof define === 'function' && define.amd) {
    define(["exports","react","react-dom","/cdn/Slate/0.147.4-p1/slate.min.js","Env/Env"], factory);
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (exports, __saby_dep0, __saby_dep1, __saby_dep2, __saby_dep3) {
  'use strict';
  var require = function (id) {
    switch (id) {
      case "react": return __saby_dep0;
      case "react-dom": return __saby_dep1;
      case "/cdn/Slate/0.147.4-p1/slate.min.js": return __saby_dep2;
      case "Env/Env": return __saby_dep3;
    }
    throw new Error('Unknown dependency: ' + id);
  };
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const React = require('react');
const slate = require('/cdn/Slate/0.147.4-p1/slate.min.js');
const ReactDOM = require('react-dom');
const Env = require('Env/Env');

const _interopDefaultCompat = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

const React__default = /*#__PURE__*/_interopDefaultCompat(React);
const ReactDOM__default = /*#__PURE__*/_interopDefaultCompat(ReactDOM);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var direction_1;
var hasRequiredDirection;

function requireDirection () {
	if (hasRequiredDirection) return direction_1;
	hasRequiredDirection = 1;

	direction_1 = direction;

	var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
	var LTR =
	  'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
	  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
	  '\uFE00-\uFE6F\uFEFD-\uFFFF';

	var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
	var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']');

	function direction(value) {
	  value = String(value || '');

	  if (rtl.test(value)) {
	    return 'rtl'
	  }

	  if (ltr.test(value)) {
	    return 'ltr'
	  }

	  return 'neutral'
	}
	return direction_1;
}

var directionExports = requireDirection();
const getDirection = /*@__PURE__*/getDefaultExportFromCjs(directionExports);

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

var isObject_1;
var hasRequiredIsObject;

function requireIsObject () {
	if (hasRequiredIsObject) return isObject_1;
	hasRequiredIsObject = 1;
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	isObject_1 = isObject;
	return isObject_1;
}

/** Detect free variable `global` from Node.js. */

var _freeGlobal;
var hasRequired_freeGlobal;

function require_freeGlobal () {
	if (hasRequired_freeGlobal) return _freeGlobal;
	hasRequired_freeGlobal = 1;
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	_freeGlobal = freeGlobal;
	return _freeGlobal;
}

var _root;
var hasRequired_root;

function require_root () {
	if (hasRequired_root) return _root;
	hasRequired_root = 1;
	var freeGlobal = require_freeGlobal();

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	_root = root;
	return _root;
}

var now_1;
var hasRequiredNow;

function requireNow () {
	if (hasRequiredNow) return now_1;
	hasRequiredNow = 1;
	var root = require_root();

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	now_1 = now;
	return now_1;
}

/** Used to match a single whitespace character. */

var _trimmedEndIndex;
var hasRequired_trimmedEndIndex;

function require_trimmedEndIndex () {
	if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
	hasRequired_trimmedEndIndex = 1;
	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	_trimmedEndIndex = trimmedEndIndex;
	return _trimmedEndIndex;
}

var _baseTrim;
var hasRequired_baseTrim;

function require_baseTrim () {
	if (hasRequired_baseTrim) return _baseTrim;
	hasRequired_baseTrim = 1;
	var trimmedEndIndex = require_trimmedEndIndex();

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	_baseTrim = baseTrim;
	return _baseTrim;
}

var _Symbol;
var hasRequired_Symbol;

function require_Symbol () {
	if (hasRequired_Symbol) return _Symbol;
	hasRequired_Symbol = 1;
	var root = require_root();

	/** Built-in value references. */
	var Symbol = root.Symbol;

	_Symbol = Symbol;
	return _Symbol;
}

var _getRawTag;
var hasRequired_getRawTag;

function require_getRawTag () {
	if (hasRequired_getRawTag) return _getRawTag;
	hasRequired_getRawTag = 1;
	var Symbol = require_Symbol();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	_getRawTag = getRawTag;
	return _getRawTag;
}

/** Used for built-in method references. */

var _objectToString;
var hasRequired_objectToString;

function require_objectToString () {
	if (hasRequired_objectToString) return _objectToString;
	hasRequired_objectToString = 1;
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	_objectToString = objectToString;
	return _objectToString;
}

var _baseGetTag;
var hasRequired_baseGetTag;

function require_baseGetTag () {
	if (hasRequired_baseGetTag) return _baseGetTag;
	hasRequired_baseGetTag = 1;
	var Symbol = require_Symbol(),
	    getRawTag = require_getRawTag(),
	    objectToString = require_objectToString();

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	_baseGetTag = baseGetTag;
	return _baseGetTag;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

var isObjectLike_1;
var hasRequiredIsObjectLike;

function requireIsObjectLike () {
	if (hasRequiredIsObjectLike) return isObjectLike_1;
	hasRequiredIsObjectLike = 1;
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	isObjectLike_1 = isObjectLike;
	return isObjectLike_1;
}

var isSymbol_1;
var hasRequiredIsSymbol;

function requireIsSymbol () {
	if (hasRequiredIsSymbol) return isSymbol_1;
	hasRequiredIsSymbol = 1;
	var baseGetTag = require_baseGetTag(),
	    isObjectLike = requireIsObjectLike();

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	isSymbol_1 = isSymbol;
	return isSymbol_1;
}

var toNumber_1;
var hasRequiredToNumber;

function requireToNumber () {
	if (hasRequiredToNumber) return toNumber_1;
	hasRequiredToNumber = 1;
	var baseTrim = require_baseTrim(),
	    isObject = requireIsObject(),
	    isSymbol = requireIsSymbol();

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	toNumber_1 = toNumber;
	return toNumber_1;
}

var debounce_1;
var hasRequiredDebounce;

function requireDebounce () {
	if (hasRequiredDebounce) return debounce_1;
	hasRequiredDebounce = 1;
	var isObject = requireIsObject(),
	    now = requireNow(),
	    toNumber = requireToNumber();

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	debounce_1 = debounce;
	return debounce_1;
}

var debounceExports = requireDebounce();
const debounce = /*@__PURE__*/getDefaultExportFromCjs(debounceExports);

var throttle_1;
var hasRequiredThrottle;

function requireThrottle () {
	if (hasRequiredThrottle) return throttle_1;
	hasRequiredThrottle = 1;
	var debounce = requireDebounce(),
	    isObject = requireIsObject();

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	throttle_1 = throttle;
	return throttle_1;
}

var throttleExports = requireThrottle();
const throttle = /*@__PURE__*/getDefaultExportFromCjs(throttleExports);

const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e$1=(t,e)=>(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t),n$1=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e$1(o.overflowY,n)||e$1(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return !!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return  false},o$1=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},r=(e,r)=>{var i,s,d,h;if("undefined"==typeof document)return [];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n$1(W)&&!n$1(document.documentElement)||null!=W&&n$1(W,g)&&w.push(W);}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return {top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k="start"===f||"nearest"===f?x-T:"end"===f?I+F:x+v/2-T+F,D="center"===u?R+E/2-V+B:"end"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F="offsetWidth"in e?e.offsetWidth-e.clientWidth-a-p:0,V="offsetHeight"in e?e.offsetHeight-e.clientHeight-g-W:0,S="offsetWidth"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X="offsetHeight"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T="start"===f?k:"end"===f?k-H:"nearest"===f?o$1(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:o$1(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else {T="start"===f?k-r-g:"end"===f?k-s+W+V:"nearest"===f?o$1(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B="start"===u?D-d-a:"center"===u?D-(d+l/2)+F/2:"end"===u?D-i+p+F:o$1(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B;}L.push({el:e,top:T,left:B});}return L};

const o=t=>false===t?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:"start",inline:"nearest"};function e(e,r$1){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return  true;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode;}return  false})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return {top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>"object"==typeof t&&"function"==typeof t.behavior)(r$1))return r$1.behavior(r(e,r$1));const l="boolean"==typeof r$1||null==r$1?void 0:r$1.behavior;for(const{el:a,top:i,left:s}of r(e,o(r$1))){const t=i-n.top+n.bottom,o=s-n.left+n.right;a.scroll({top:t,left:o,behavior:l});}}

var lib = {};

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;

	Object.defineProperty(lib, "__esModule", {
	  value: true
	});

	/**
	 * Constants.
	 */

	var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

	var MODIFIERS = {
	  alt: 'altKey',
	  control: 'ctrlKey',
	  meta: 'metaKey',
	  shift: 'shiftKey'
	};

	var ALIASES = {
	  add: '+',
	  break: 'pause',
	  cmd: 'meta',
	  command: 'meta',
	  ctl: 'control',
	  ctrl: 'control',
	  del: 'delete',
	  down: 'arrowdown',
	  esc: 'escape',
	  ins: 'insert',
	  left: 'arrowleft',
	  mod: IS_MAC ? 'meta' : 'control',
	  opt: 'alt',
	  option: 'alt',
	  return: 'enter',
	  right: 'arrowright',
	  space: ' ',
	  spacebar: ' ',
	  up: 'arrowup',
	  win: 'meta',
	  windows: 'meta'
	};

	var CODES = {
	  backspace: 8,
	  tab: 9,
	  enter: 13,
	  shift: 16,
	  control: 17,
	  alt: 18,
	  pause: 19,
	  capslock: 20,
	  escape: 27,
	  ' ': 32,
	  pageup: 33,
	  pagedown: 34,
	  end: 35,
	  home: 36,
	  arrowleft: 37,
	  arrowup: 38,
	  arrowright: 39,
	  arrowdown: 40,
	  insert: 45,
	  delete: 46,
	  meta: 91,
	  numlock: 144,
	  scrolllock: 145,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  '\'': 222
	};

	for (var f = 1; f < 20; f++) {
	  CODES['f' + f] = 111 + f;
	}

	/**
	 * Is hotkey?
	 */

	function isHotkey(hotkey, options, event) {
	  if (options && !('byKey' in options)) {
	    event = options;
	    options = null;
	  }

	  if (!Array.isArray(hotkey)) {
	    hotkey = [hotkey];
	  }

	  var array = hotkey.map(function (string) {
	    return parseHotkey(string, options);
	  });
	  var check = function check(e) {
	    return array.some(function (object) {
	      return compareHotkey(object, e);
	    });
	  };
	  var ret = event == null ? check : check(event);
	  return ret;
	}

	function isCodeHotkey(hotkey, event) {
	  return isHotkey(hotkey, event);
	}

	function isKeyHotkey(hotkey, event) {
	  return isHotkey(hotkey, { byKey: true }, event);
	}

	/**
	 * Parse.
	 */

	function parseHotkey(hotkey, options) {
	  var byKey = options && options.byKey;
	  var ret = {};

	  // Special case to handle the `+` key since we use it as a separator.
	  hotkey = hotkey.replace('++', '+add');
	  var values = hotkey.split('+');
	  var length = values.length;

	  // Ensure that all the modifiers are set to false unless the hotkey has them.

	  for (var k in MODIFIERS) {
	    ret[MODIFIERS[k]] = false;
	  }

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var value = _step.value;

	      var optional = value.endsWith('?') && value.length > 1;

	      if (optional) {
	        value = value.slice(0, -1);
	      }

	      var name = toKeyName(value);
	      var modifier = MODIFIERS[name];

	      if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) {
	        throw new TypeError('Unknown modifier: "' + value + '"');
	      }

	      if (length === 1 || !modifier) {
	        if (byKey) {
	          ret.key = name;
	        } else {
	          ret.which = toKeyCode(value);
	        }
	      }

	      if (modifier) {
	        ret[modifier] = optional ? null : true;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return ret;
	}

	/**
	 * Compare.
	 */

	function compareHotkey(object, event) {
	  for (var key in object) {
	    var expected = object[key];
	    var actual = void 0;

	    if (expected == null) {
	      continue;
	    }

	    if (key === 'key' && event.key != null) {
	      actual = event.key.toLowerCase();
	    } else if (key === 'which') {
	      actual = expected === 91 && event.which === 93 ? 91 : event.which;
	    } else {
	      actual = event[key];
	    }

	    if (actual == null && expected === false) {
	      continue;
	    }

	    if (actual !== expected) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Utils.
	 */

	function toKeyCode(name) {
	  name = toKeyName(name);
	  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
	  return code;
	}

	function toKeyName(name) {
	  name = name.toLowerCase();
	  name = ALIASES[name] || name;
	  return name;
	}

	/**
	 * Export.
	 */

	lib.default = isHotkey;
	lib.isHotkey = isHotkey;
	lib.isCodeHotkey = isCodeHotkey;
	lib.isKeyHotkey = isKeyHotkey;
	lib.parseHotkey = parseHotkey;
	lib.compareHotkey = compareHotkey;
	lib.toKeyCode = toKeyCode;
	lib.toKeyName = toKeyName;
	return lib;
}

var libExports = requireLib();

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}

function _defineProperty$1(e, r, t) {
  return (r = toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

/**
 * Types.
 */
// COMPAT: This is required to prevent TypeScript aliases from doing some very
// weird things for Slate's types with the same name as globals. (2019/11/27)
// https://github.com/microsoft/TypeScript/issues/35002
var DOMNode = globalThis.Node;
var DOMText = globalThis.Text;
/**
 * Returns the host window of a DOM node
 */
const getDefaultView = value => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
/**
 * Check if a DOM node is a comment node.
 */
const isDOMComment = value => {
  return isDOMNode(value) && value.nodeType === 8;
};
/**
 * Check if a DOM node is an element node.
 */
const isDOMElement = value => {
  return isDOMNode(value) && value.nodeType === 1;
};
/**
 * Check if a value is a DOM node.
 */
const isDOMNode = value => {
  const window = getDefaultView(value);
  return !!window && value instanceof window.Node;
};
/**
 * Check if a value is a DOM selection.
 */
const isDOMSelection = value => {
  const window = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window && value instanceof window.Selection;
};
/**
 * Check if a DOM node is an element node.
 */
const isDOMText = value => {
  return isDOMNode(value) && value.nodeType === 3;
};
/**
 * Checks whether a paste event is a plaintext-only event.
 */
const isPlainTextOnlyPaste = event => {
  return event.clipboardData && event.clipboardData.getData('text/plain') !== '' && event.clipboardData.types.length === 1;
};
/**
 * Normalize a DOM point so that it always refers to a text node.
 */
const normalizeDOMPoint = domPoint => {
  let [node, offset] = domPoint;
  // If it's an element node, its offset refers to the index of its children
  // including comment nodes, so try to find the right text child node.
  if (isDOMElement(node) && node.childNodes.length) {
    let isLast = offset === node.childNodes.length;
    let index = isLast ? offset - 1 : offset;
    [node, index] = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward');
    // If the editable child found is in front of input offset, we instead seek to its end
    isLast = index < offset;
    // If the node has children, traverse until we have a leaf node. Leaf nodes
    // can be either text nodes, or other void DOM nodes.
    while (isDOMElement(node) && node.childNodes.length) {
      const i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, isLast ? 'backward' : 'forward');
    }
    // Determine the new offset inside the text node.
    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  }
  // Return the node and offset.
  return [node, offset];
};
/**
 * Determines whether the active element is nested within a shadowRoot
 */
const hasShadowRoot = node => {
  let parent = node && node.parentNode;
  while (parent) {
    if (parent.toString() === '[object ShadowRoot]') {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
};
/**
 * Get the nearest editable child and index at `index` in a `parent`, preferring
 * `direction`.
 */
const getEditableChildAndIndex = (parent, index, direction) => {
  if (typeof index !== 'number') {
    throw new Error('Expected index to be a number');
  }
  const {
    childNodes
  } = parent;
  let child = childNodes[index];
  let i = index;
  let triedForward = false;
  let triedBackward = false;
  // While the child is a comment node, or an element node with no children,
  // keep iterating to find a sibling non-void, non-comment node.
  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute('contenteditable') === 'false') {
    if (triedForward && triedBackward) {
      break;
    }
    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = 'backward';
      continue;
    }
    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = 'forward';
      continue;
    }
    child = childNodes[i];
    index = i;
    i += direction === 'forward' ? 1 : -1;
  }
  return [child, index];
};
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */
const getEditableChild = (parent, index, direction) => {
  const [child] = getEditableChildAndIndex(parent, index, direction);
  return child;
};
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 *
 * The domNode must be attached to the DOM.
 */
const getPlainText = domNode => {
  let text = '';
  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }
  if (isDOMElement(domNode)) {
    var _domNode$parentElemen;
    if (domNode.hasAttribute('data-slate-spacer')) {
      return text;
    }
    if (domNode.tagName === 'BR' && ((_domNode$parentElemen = domNode.parentElement) === null || _domNode$parentElemen === void 0 ? void 0 : _domNode$parentElemen.getAttribute('data-slate-zero-width')) === 'n') {
      return text;
    }
    for (const childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }
    const display = getComputedStyle(domNode).getPropertyValue('display');
    const isBlock = display === 'block' || display === 'list';
    const isInsideInline = !!domNode.closest('[data-slate-inline="true"]');
    if (domNode.tagName === 'BR' || isBlock && !isInsideInline) {
      text += '\n';
    }
  }
  return text;
};
/**
 * Get x-slate-fragment attribute from data-slate-fragment
 */
const catchSlateFragment = /<[^>]*\sdata-slate-fragment="([^"]+)"/m;
const getSlateFragmentAttribute = dataTransfer => {
  const htmlData = dataTransfer.getData('text/html');
  const [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};
/**
 * Get the dom selection from Shadow Root if possible, otherwise from the document
 */
const getSelection = root => {
  if (root.getSelection != null) {
    return root.getSelection();
  }
  return document.getSelection();
};
/**
 * Check whether a mutation originates from a editable element inside the editor.
 */
const isTrackedMutation = (editor, mutation, batch) => {
  const {
    target
  } = mutation;
  if (isDOMElement(target) && target.matches('[contentEditable="false"]')) {
    return false;
  }
  const {
    document
  } = DOMEditor.getWindow(editor);
  if (containsShadowAware(document, target)) {
    return DOMEditor.hasDOMNode(editor, target, {
      editable: true
    });
  }
  const parentMutation = batch.find(({
    addedNodes,
    removedNodes
  }) => {
    for (const node of addedNodes) {
      if (node === target || containsShadowAware(node, target)) {
        return true;
      }
    }
    for (const node of removedNodes) {
      if (node === target || containsShadowAware(node, target)) {
        return true;
      }
    }
  });
  if (!parentMutation || parentMutation === mutation) {
    return false;
  }
  // Target add/remove is tracked. Track the mutation if we track the parent mutation.
  return isTrackedMutation(editor, parentMutation, batch);
};
/**
 * Retrieves the deepest active element in the DOM, considering nested shadow DOMs.
 */
const getActiveElement = () => {
  let activeElement = document.activeElement;
  while ((_activeElement = activeElement) !== null && _activeElement !== void 0 && _activeElement.shadowRoot && (_activeElement$shadow = activeElement.shadowRoot) !== null && _activeElement$shadow !== void 0 && _activeElement$shadow.activeElement) {
    var _activeElement, _activeElement$shadow, _activeElement2;
    activeElement = (_activeElement2 = activeElement) === null || _activeElement2 === void 0 || (_activeElement2 = _activeElement2.shadowRoot) === null || _activeElement2 === void 0 ? void 0 : _activeElement2.activeElement;
  }
  return activeElement;
};
/**
 * @returns `true` if `otherNode` is before `node` in the document; otherwise, `false`.
 */
const isBefore = (node, otherNode) => Boolean(node.compareDocumentPosition(otherNode) & DOMNode.DOCUMENT_POSITION_PRECEDING);
/**
 * @returns `true` if `otherNode` is after `node` in the document; otherwise, `false`.
 */
const isAfter = (node, otherNode) => Boolean(node.compareDocumentPosition(otherNode) & DOMNode.DOCUMENT_POSITION_FOLLOWING);
/**
 * Shadow DOM-aware version of Element.closest()
 * Traverses up the DOM tree, crossing shadow DOM boundaries
 */
const closestShadowAware = (element, selector) => {
  if (!element) {
    return null;
  }
  let current = element;
  while (current) {
    if (current.matches && current.matches(selector)) {
      return current;
    }
    if (current.parentElement) {
      current = current.parentElement;
    } else if (current.parentNode && 'host' in current.parentNode) {
      current = current.parentNode.host;
    } else {
      return null;
    }
  }
  return null;
};
/**
 * Shadow DOM-aware version of Node.contains()
 * Checks if a node contains another node, crossing shadow DOM boundaries
 */
const containsShadowAware = (parent, child) => {
  if (!parent || !child) {
    return false;
  }
  if (parent.contains(child)) {
    return true;
  }
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    if (current.parentNode) {
      if ('host' in current.parentNode) {
        current = current.parentNode.host;
      } else {
        current = current.parentNode;
      }
    } else {
      return false;
    }
  }
  return false;
};

var _navigator$userAgent$, _navigator$userAgent$2;
// ПРОПАТЧЕНО (Saby): iPadOS представляется MacIntel, без этой проверки он не считается iOS
// и на открытой клавиатуре первая буква не становится заглавной.
const HAS_NAVIGATOR = typeof navigator !== 'undefined' && typeof window !== 'undefined';
const IS_IPAD_OS = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
const IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_OS) && !window.MSStream;
const IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
// ПРОПАТЧЕНО (Saby): Chrome на Android в режиме «Версия для ПК» представляется Linux x86_64
// без слова Android. Без этой проверки ввод идёт десктопной веткой, и слово, которое клавиатура
// задним числом берёт в композицию, вставляется второй раз.
const IS_ANDROID_DESKTOP_MODE = HAS_NAVIGATOR && /Linux/.test(navigator.userAgent) && /Chrome/.test(navigator.userAgent) && navigator.maxTouchPoints > 0;
const IS_ANDROID = typeof navigator !== 'undefined' && (/Android/.test(navigator.userAgent) || IS_ANDROID_DESKTOP_MODE);
const IS_FIREFOX = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
const IS_WEBKIT = typeof navigator !== 'undefined' && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent);
// "modern" Edge was released at 79.x
const IS_EDGE_LEGACY = typeof navigator !== 'undefined' && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
const IS_CHROME = typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent);
// Native `beforeInput` events don't work well with react on Chrome 75
// and older, Chrome 76+ can use `beforeInput` though.
const IS_CHROME_LEGACY = typeof navigator !== 'undefined' && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent);
const IS_ANDROID_CHROME_LEGACY = IS_ANDROID && typeof navigator !== 'undefined' && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent);
// Firefox did not support `beforeInput` until `v87`.
const IS_FIREFOX_LEGACY = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent);
// UC mobile browser
const IS_UC_MOBILE = typeof navigator !== 'undefined' && /.*UCBrowser/.test(navigator.userAgent);
// Wechat browser (not including mac wechat)
const IS_WECHATBROWSER = typeof navigator !== 'undefined' && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent) && (
// avoid lookbehind (buggy in safari < 16.4)
!IS_CHROME || IS_CHROME_LEGACY); // wechat and low chrome is real wechat
// Check if DOM is available as React does internally.
// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const CAN_USE_DOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
// Check if the browser is Safari and older than 17
typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((_navigator$userAgent$ = navigator.userAgent.match(/Version\/(\d+)/)) !== null && _navigator$userAgent$ !== void 0 && _navigator$userAgent$[1] ? parseInt((_navigator$userAgent$2 = navigator.userAgent.match(/Version\/(\d+)/)) === null || _navigator$userAgent$2 === void 0 ? void 0 : _navigator$userAgent$2[1], 10) < 17 : false);
// COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
// Chrome Legacy doesn't support `beforeinput` correctly
const HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_ANDROID_CHROME_LEGACY && !IS_EDGE_LEGACY &&
// globalThis is undefined in older browsers
typeof globalThis !== 'undefined' && globalThis.InputEvent &&
// @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges === 'function';

/**
 * An auto-incrementing identifier for keys.
 */
let n = 0;
/**
 * A class that keeps track of a key string. We use a full class here because we
 * want to be able to use them as keys in `WeakMap` objects.
 */
class Key {
  constructor() {
    _defineProperty$1(this, "id", void 0);
    this.id = `${n++}`;
  }
}

/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
const IS_NODE_MAP_DIRTY = new WeakMap();
const NODE_TO_INDEX = new WeakMap();
const NODE_TO_PARENT = new WeakMap();
/**
 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */
const EDITOR_TO_WINDOW = new WeakMap();
const EDITOR_TO_ELEMENT = new WeakMap();
const EDITOR_TO_PLACEHOLDER_ELEMENT = new WeakMap();
const ELEMENT_TO_NODE = new WeakMap();
const NODE_TO_ELEMENT = new WeakMap();
const NODE_TO_KEY = new WeakMap();
const EDITOR_TO_KEY_TO_ELEMENT = new WeakMap();
/**
 * Weak maps for storing editor-related state.
 */
const IS_READ_ONLY = new WeakMap();
const IS_FOCUSED = new WeakMap();
const IS_COMPOSING = new WeakMap();
const EDITOR_TO_USER_SELECTION = new WeakMap();
/**
 * ПРОПАТЧЕНО (Saby): единственный живой отложенный ретрай DOMEditor.focus() на editor.
 * Новый вызов focus() и размонтирование Editable отменяют прежний, чтобы ретраи
 * не копились при серии unmount/mount виджетов.
 * http://online.saby.ru/opendoc.html?guid=f9aff325-64c6-486b-bb30-6afc29c7a4f8&client=3
 */
const EDITOR_TO_PENDING_FOCUS_RETRY = new WeakMap();
const cancelPendingFocusRetry = editor => {
  const token = EDITOR_TO_PENDING_FOCUS_RETRY.get(editor);
  if (token) {
    token.cancelled = true;
    EDITOR_TO_PENDING_FOCUS_RETRY.delete(editor);
  }
};
/**
 * Weak map for associating the context `onChange` context with the plugin.
 */
const EDITOR_TO_ON_CHANGE = new WeakMap();
/**
 * Weak maps for saving pending state on composition stage.
 */
const EDITOR_TO_SCHEDULE_FLUSH = new WeakMap();
const EDITOR_TO_PENDING_INSERTION_MARKS = new WeakMap();
const EDITOR_TO_USER_MARKS = new WeakMap();
/**
 * Android input handling specific weak-maps
 */
const EDITOR_TO_PENDING_DIFFS = new WeakMap();
const EDITOR_TO_PENDING_ACTION = new WeakMap();
const EDITOR_TO_PENDING_SELECTION = new WeakMap();
const EDITOR_TO_FORCE_RENDER = new WeakMap();
/**
 * Symbols.
 */
const PLACEHOLDER_SYMBOL = Symbol('placeholder');
const MARK_PLACEHOLDER_SYMBOL = Symbol('mark-placeholder');

function ownKeys$3$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3$1(Object(t), true).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// eslint-disable-next-line no-redeclare
const DOMEditor = {
  androidPendingDiffs: editor => EDITOR_TO_PENDING_DIFFS.get(editor),
  androidScheduleFlush: editor => {
    var _EDITOR_TO_SCHEDULE_F;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(editor)) === null || _EDITOR_TO_SCHEDULE_F === void 0 || _EDITOR_TO_SCHEDULE_F();
  },
  blur: editor => {
    const el = DOMEditor.toDOMNode(editor, editor);
    const root = DOMEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);
    if (root.activeElement === el) {
      el.blur();
    }
  },
  deselect: editor => {
    const {
      selection
    } = editor;
    const root = DOMEditor.findDocumentOrShadowRoot(editor);
    const domSelection = getSelection(root);
    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }
    if (selection) {
      slate.Transforms.deselect(editor);
    }
  },
  findDocumentOrShadowRoot: editor => {
    const el = DOMEditor.toDOMNode(editor, editor);
    const root = el.getRootNode();
    if (root instanceof Document || root instanceof ShadowRoot) {
      return root;
    }
    return el.ownerDocument;
  },
  findEventRange: (editor, event, options = {}) => {
    const {
      suppressThrow = false
    } = options;
    if ('nativeEvent' in event) {
      event = event.nativeEvent;
    }
    const {
      clientX: x,
      clientY: y,
      target
    } = event;
    if (x == null || y == null) {
      if (suppressThrow) {
        return null;
      }
      throw new Error(`Cannot resolve a Slate range from a DOM event: ${event}`);
    }
    let node;
    try {
      node = DOMEditor.toSlateNode(editor, event.target);
    } catch (e) {
      if (suppressThrow) {
        return null;
      }
      throw e;
    }
    let path;
    try {
      path = DOMEditor.findPath(editor, node);
    } catch (e) {
      if (suppressThrow) {
        return null;
      }
      throw e;
    }
    // If the drop target is inside a void node, move it into either the
    // next or previous node, depending on which side the `x` and `y`
    // coordinates are closest to.
    if (slate.Node.isElement(node) && slate.Editor.isVoid(editor, node)) {
      const rect = target.getBoundingClientRect();
      const isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      const edge = slate.Editor.point(editor, path, {
        edge: isPrev ? 'start' : 'end'
      });
      const point = isPrev ? slate.Editor.before(editor, edge) : slate.Editor.after(editor, edge);
      if (point) {
        const _range = slate.Editor.range(editor, point);
        return _range;
      }
    }
    // Else resolve a range from the caret position where the drop occured.
    let domRange;
    const {
      document
    } = DOMEditor.getWindow(editor);
    const root = DOMEditor.findDocumentOrShadowRoot(editor);
    const shadowRoot = root === document ? null : root;
    const rangeFromCaretPosition = position => {
      if (!position) {
        return null;
      }
      const range = document.createRange();
      range.setStart(position.offsetNode, position.offset);
      range.setEnd(position.offsetNode, position.offset);
      return range;
    };
    if (shadowRoot && document.caretPositionFromPoint) {
      domRange = rangeFromCaretPosition(document.caretPositionFromPoint(x, y, {
        shadowRoots: [shadowRoot]
      }));
    } else if (document.caretRangeFromPoint) {
      // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)
      domRange = document.caretRangeFromPoint(x, y);
    } else {
      domRange = rangeFromCaretPosition(document.caretPositionFromPoint(x, y));
    }
    if (!domRange) {
      if (suppressThrow) {
        return null;
      }
      throw new Error(`Cannot resolve a Slate range from a DOM event: ${event}`);
    }
    // Resolve a Slate range from the DOM range.
    const range = DOMEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow
    });
    return range;
  },
  findKey: (editor, node) => {
    let key = NODE_TO_KEY.get(node);
    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }
    return key;
  },
  findPath: (editor, node) => {
    const path = [];
    let child = node;
    while (true) {
      const parent = NODE_TO_PARENT.get(child);
      if (parent == null) {
        if (child === editor) {
          return path;
        } else {
          break;
        }
      }
      const i = NODE_TO_INDEX.get(child);
      if (i == null || parent.children[i] !== child) {
        break;
      }
      path.unshift(i);
      child = parent;
    }
    const found = slate.Node.findPath(editor, node);
    if (found) {
      return found;
    }
    throw new Error(`Unable to find the path for Slate node: ${slate.Scrubber.stringify(node)}`);
  },
  focus: (editor, options = {
    retries: 5
  }) => {
    // ПРОПАТЧЕНО (Saby): свежий вызов отменяет собственный предыдущий ретрай.
    cancelPendingFocusRetry(editor);
    // Return if already focused
    if (IS_FOCUSED.get(editor)) {
      return;
    }
    // Return if no dom node is associated with the editor, which means the editor is not yet mounted
    // or has been unmounted. This can happen especially, while retrying to focus the editor.
    if (!DOMEditor.isMounted(editor)) {
      return;
    }
    // Retry setting focus if the editor has pending operations.
    // The DOM (selection) is unstable while changes are applied.
    // Retry until retries are exhausted or editor is focused.
    if (options.retries <= 0) {
      throw new Error('Could not set focus, editor seems stuck with pending operations');
    }
    if (editor.operations.length > 0) {
      // ПРОПАТЧЕНО (Saby): вместо setTimeout(10) — микротаск. operations очищаются
      // микротаском в Editor.apply, а макротаск под частыми вызовами focus()
      // (зажатый Backspace) мог опаздывать на секунды.
      const token = {
        cancelled: false
      };
      EDITOR_TO_PENDING_FOCUS_RETRY.set(editor, token);
      queueMicrotask(() => {
        if (token.cancelled) {
          return;
        }
        EDITOR_TO_PENDING_FOCUS_RETRY.delete(editor);
        DOMEditor.focus(editor, {
          retries: options.retries - 1
        });
      });
      return;
    }
    const el = DOMEditor.toDOMNode(editor, editor);
    const root = DOMEditor.findDocumentOrShadowRoot(editor);
    if (root.activeElement !== el) {
      let domRange = null;
      if (editor.selection && root instanceof Document) {
        try {
          domRange = DOMEditor.toDOMRange(editor, editor.selection);
        } catch (e) {
          // ПРОПАТЧЕНО (Saby): модель уже применена, а React ещё не закоммитил DOM
          // для новых узлов — toDOMRange бросает. Ждём кадр и пробуем снова.
          const token = {
            cancelled: false
          };
          EDITOR_TO_PENDING_FOCUS_RETRY.set(editor, token);
          requestAnimationFrame(() => {
            if (token.cancelled) {
              return;
            }
            EDITOR_TO_PENDING_FOCUS_RETRY.delete(editor);
            DOMEditor.focus(editor, {
              retries: options.retries - 1
            });
          });
          return;
        }
      }
      // Create a new selection in the top of the document if missing
      if (!editor.selection) {
        slate.Transforms.select(editor, slate.Editor.start(editor, []));
      }
      // IS_FOCUSED should be set before calling el.focus() to ensure that
      // FocusedContext is updated to the correct value
      IS_FOCUSED.set(editor, true);
      el.focus({
        preventScroll: true
      });
      // Ensure that the DOM selection state is set to the editor's selection
      if (domRange) {
        const domSelection = getSelection(root);
        domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
        domSelection === null || domSelection === void 0 || domSelection.addRange(domRange);
      }
    }
  },
  getWindow: editor => {
    const window = EDITOR_TO_WINDOW.get(editor);
    if (!window) {
      throw new Error('Unable to find a host window element for this editor');
    }
    return window;
  },
  hasDOMNode: (editor, target, options = {}) => {
    const {
      editable = false
    } = options;
    if (!DOMEditor.isMounted(editor)) {
      return false;
    }
    const editorEl = DOMEditor.toDOMNode(editor, editor);
    let targetEl;
    // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
    // target is originating from an internal "restricted" element (e.g. a
    // stepper arrow on a number input). (2018/05/04)
    // https://github.com/ianstormtaylor/slate/issues/1819
    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (err instanceof Error && !err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }
    if (!targetEl || closestShadowAware(targetEl, '[data-slate-editor]') !== editorEl) {
      return false;
    }
    const editableElement = closestShadowAware(targetEl, '[contenteditable="true" i], [contenteditable=""], [contenteditable="plaintext-only" i]');
    const nonEditableAncestor = editableElement && editableElement !== editorEl ? closestShadowAware(editableElement, '[contenteditable="false" i]') : null;
    if (nonEditableAncestor && nonEditableAncestor !== editorEl && closestShadowAware(nonEditableAncestor, '[data-slate-editor]') === editorEl) {
      var _closestShadowAware;
      const slateText = (_closestShadowAware = closestShadowAware(targetEl, '[data-slate-node="text"]')) !== null && _closestShadowAware !== void 0 ? _closestShadowAware : editableElement === null || editableElement === void 0 ? void 0 : editableElement.querySelector('[data-slate-node="text"]');
      if (!slateText || !(editableElement !== null && editableElement !== void 0 && editableElement.contains(slateText)) || closestShadowAware(slateText, '[data-slate-editor]') !== editorEl) {
        return false;
      }
    }
    return !editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === 'boolean' &&
    // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    closestShadowAware(targetEl, '[contenteditable="false"]') === editorEl || !!targetEl.getAttribute('data-slate-zero-width');
  },
  hasEditableTarget: (editor, target) => isDOMNode(target) && DOMEditor.hasDOMNode(editor, target, {
    editable: true
  }),
  hasRange: (editor, range) => {
    if (typeof editor.hasRange === 'function') {
      return editor.hasRange(range);
    }
    const {
      anchor,
      focus
    } = range;
    return slate.Editor.hasPath(editor, anchor.path) && slate.Editor.hasPath(editor, focus.path);
  },
  hasSelectableTarget: (editor, target) => DOMEditor.hasEditableTarget(editor, target) || DOMEditor.isTargetInsideNonReadonlyVoid(editor, target),
  hasTarget: (editor, target) => isDOMNode(target) && DOMEditor.hasDOMNode(editor, target),
  insertData: (editor, data) => {
    editor.insertData(data);
  },
  insertFragmentData: (editor, data) => editor.insertFragmentData(data),
  insertTextData: (editor, data) => editor.insertTextData(data),
  isComposing: editor => {
    return !!IS_COMPOSING.get(editor);
  },
  getWord: (editor, options = {}) => {
    var _composing$view, _options$at;
    if (typeof slate.Editor.word !== 'function') {
      throw new Error('DOMEditor.getWord needs slate 0.136.0 or later');
    }
    const composing = DOMEditor.isComposing(editor) ? getComposingView(editor) : undefined;
    const view = (_composing$view = composing === null || composing === void 0 ? void 0 : composing.view) !== null && _composing$view !== void 0 ? _composing$view : editor;
    const range = slate.Editor.word(view, _objectSpread$3$1(_objectSpread$3$1({}, options), {}, {
      at: (_options$at = options.at) !== null && _options$at !== void 0 ? _options$at : composing === null || composing === void 0 ? void 0 : composing.point
    }));
    return range && {
      range,
      text: slate.Editor.string(view, range)
    };
  },
  isFocused: editor => !!IS_FOCUSED.get(editor),
  isMounted: editor => !!EDITOR_TO_ELEMENT.get(editor),
  isReadOnly: editor => !!IS_READ_ONLY.get(editor),
  isTargetInsideNonReadonlyVoid: (editor, target) => {
    if (IS_READ_ONLY.get(editor)) return false;
    if (!DOMEditor.hasTarget(editor, target)) return false;
    const slateNode = DOMEditor.toSlateNode(editor, target);
    return slate.Node.isElement(slateNode) && slate.Editor.isVoid(editor, slateNode);
  },
  setFragmentData: (editor, data, originEvent) => editor.setFragmentData(data, originEvent),
  toDOMNode: (editor, node) => {
    const domNode = DOMEditor.resolveDOMNode(editor, node);
    if (!domNode) {
      throw new Error(`Cannot resolve a DOM node from Slate node: ${slate.Scrubber.stringify(node)}`);
    }
    return domNode;
  },
  resolveDOMPoint: (editor, point) => {
    var _EDITOR_TO_KEY_TO_ELE;
    if (!slate.Node.has(editor, point.path)) {
      return null;
    }
    const el = (_EDITOR_TO_KEY_TO_ELE = EDITOR_TO_KEY_TO_ELEMENT.get(editor)) === null || _EDITOR_TO_KEY_TO_ELE === void 0 ? void 0 : _EDITOR_TO_KEY_TO_ELE.get(DOMEditor.findKey(editor, slate.Node.get(editor, point.path)));
    return el ? findDOMPointInElement(editor, el, point) : null;
  },
  resolveDOMRange: (editor, range) => {
    var _EDITOR_TO_WINDOW$get, _domAnchor$0$ownerDoc;
    const domAnchor = DOMEditor.resolveDOMPoint(editor, range.anchor);
    if (!domAnchor) {
      return null;
    }
    const domFocus = slate.Range.isCollapsed(range) ? domAnchor : DOMEditor.resolveDOMPoint(editor, range.focus);
    const window = (_EDITOR_TO_WINDOW$get = EDITOR_TO_WINDOW.get(editor)) !== null && _EDITOR_TO_WINDOW$get !== void 0 ? _EDITOR_TO_WINDOW$get : (_domAnchor$0$ownerDoc = domAnchor[0].ownerDocument) === null || _domAnchor$0$ownerDoc === void 0 ? void 0 : _domAnchor$0$ownerDoc.defaultView;
    if (!domFocus || !window) {
      return null;
    }
    try {
      return createDOMRange(window, domAnchor, domFocus, slate.Range.isBackward(range));
    } catch (_unused) {
      return null;
    }
  },
  resolveEventRange: (editor, event) => DOMEditor.findEventRange(editor, event, {
    suppressThrow: true
  }),
  resolveDOMNode: (editor, node) => {
    var _ref, _EDITOR_TO_KEY_TO_ELE2;
    return (_ref = node === editor ? EDITOR_TO_ELEMENT.get(editor) : (_EDITOR_TO_KEY_TO_ELE2 = EDITOR_TO_KEY_TO_ELEMENT.get(editor)) === null || _EDITOR_TO_KEY_TO_ELE2 === void 0 ? void 0 : _EDITOR_TO_KEY_TO_ELE2.get(DOMEditor.findKey(editor, node))) !== null && _ref !== void 0 ? _ref : null;
  },
  resolveSlateNode: (editor, domNode) => {
    var _ref2;
    const domEl = closestSlateElement(domNode);
    return (_ref2 = domEl && ELEMENT_TO_NODE.get(domEl)) !== null && _ref2 !== void 0 ? _ref2 : null;
  },
  resolveSlatePoint: (editor, domPoint, options = {}) => {
    try {
      var _options$exactMatch;
      return DOMEditor.toSlatePoint(editor, domPoint, {
        exactMatch: (_options$exactMatch = options.exactMatch) !== null && _options$exactMatch !== void 0 ? _options$exactMatch : false,
        searchDirection: options.searchDirection,
        suppressThrow: true
      });
    } catch (_unused2) {
      return null;
    }
  },
  resolveSlateRange: (editor, domRange, options = {}) => {
    try {
      var _options$exactMatch2;
      return DOMEditor.toSlateRange(editor, domRange, {
        exactMatch: (_options$exactMatch2 = options.exactMatch) !== null && _options$exactMatch2 !== void 0 ? _options$exactMatch2 : false,
        suppressThrow: true
      });
    } catch (_unused3) {
      return null;
    }
  },
  toDOMPoint: (editor, point) => {
    const [node] = slate.Editor.node(editor, point.path);
    const el = DOMEditor.toDOMNode(editor, node);
    const domPoint = findDOMPointInElement(editor, el, point);
    if (!domPoint) {
      throw new Error(unresolvedPointMessage(point));
    }
    return domPoint;
  },
  toDOMRange: (editor, range) => {
    const {
      anchor,
      focus
    } = range;
    const domAnchor = DOMEditor.toDOMPoint(editor, anchor);
    const domFocus = slate.Range.isCollapsed(range) ? domAnchor : DOMEditor.toDOMPoint(editor, focus);
    return createDOMRange(DOMEditor.getWindow(editor), domAnchor, domFocus, slate.Range.isBackward(range));
  },
  toSlateNode: (editor, domNode) => {
    const domEl = closestSlateElement(domNode);
    const node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;
    if (!node) {
      throw new Error(`Cannot resolve a Slate node from DOM node: ${domEl}`);
    }
    return node;
  },
  toSlatePoint: (editor, domPoint, options) => {
    const {
      exactMatch,
      suppressThrow
    } = options;
    const [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    const parentNode = nearestNode.parentNode;
    let searchDirection = options.searchDirection;
    let textNode = null;
    let offset = 0;
    if (parentNode) {
      var _domNode$textContent, _domNode$textContent2;
      const editorEl = DOMEditor.toDOMNode(editor, editor);
      const potentialVoidNode = parentNode.closest('[data-slate-void="true"]');
      // Need to ensure that the closest void node is actually a void node
      // within this editor, and not a void node within some parent editor. This can happen
      // if this editor is within a void node of another editor ("nested editors", like in
      // the "Editable Voids" example on the docs site).
      const voidNode = potentialVoidNode && containsShadowAware(editorEl, potentialVoidNode) ? potentialVoidNode : null;
      const potentialNonEditableNode = parentNode.closest('[contenteditable="false"]');
      const nonEditableNode = potentialNonEditableNode && containsShadowAware(editorEl, potentialNonEditableNode) ? potentialNonEditableNode : null;
      let leafNode = parentNode.closest('[data-slate-leaf]');
      let domNode = null;
      // Calculate how far into the text node the `nearestNode` is, so that we
      // can determine what the offset relative to the text node is.
      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');
        if (textNode) {
          const window = DOMEditor.getWindow(editor);
          const range = window.document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(nearestNode, parentNode.hasAttribute('data-slate-trailing') && nearestNode === parentNode.lastChild && nearestNode.textContent === '\n' ? 0 : nearestOffset);
          const contents = range.cloneContents();
          const removals = [...Array.prototype.slice.call(contents.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(contents.querySelectorAll('[contenteditable=false]'))];
          removals.forEach(el => {
            // COMPAT: While composing at the start of a text node, some keyboards put
            // the text content inside the zero width space.
            if (IS_ANDROID && !exactMatch && el.hasAttribute('data-slate-zero-width') && el.textContent.length > 0 && el.textContext !== '\uFEFF') {
              if (el.textContent.startsWith('\uFEFF')) {
                el.textContent = el.textContent.slice(1);
              }
              return;
            }
            el.parentNode.removeChild(el);
          });
          // COMPAT: Edge has a bug where Range.prototype.toString() will
          // convert \n into \r\n. The bug causes a loop when slate-dom
          // attempts to reposition its cursor to match the native position. Use
          // textContent.length instead.
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/
          offset = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        // For void nodes, the element with the offset key will be a cousin, not an
        // ancestor, so find it by going down from the nearest void parent and taking the
        // first one that isn't inside a nested editor.
        const leafNodes = voidNode.querySelectorAll('[data-slate-leaf]');
        for (let index = 0; index < leafNodes.length; index++) {
          const current = leafNodes[index];
          if (DOMEditor.hasDOMNode(editor, current)) {
            leafNode = current;
            break;
          }
        }
        // COMPAT: In read-only editors the leaf is not rendered.
        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll('[data-slate-zero-width]').forEach(el => {
            offset -= el.textContent.length;
          });
        }
      } else if (nonEditableNode) {
        // Find the edge of the nearest leaf in `searchDirection`
        const getLeafNodes = node => node ? node.querySelectorAll(
        // Exclude leaf nodes in nested editors
        '[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])') : [];
        const elementNode = nonEditableNode.closest('[data-slate-node="element"]');
        if (searchDirection === 'backward' || !searchDirection) {
          var _leafNodes$findLast;
          const leafNodes = [...getLeafNodes(elementNode === null || elementNode === void 0 ? void 0 : elementNode.previousElementSibling), ...getLeafNodes(elementNode)];
          leafNode = (_leafNodes$findLast = leafNodes.findLast(leaf => isBefore(nonEditableNode, leaf))) !== null && _leafNodes$findLast !== void 0 ? _leafNodes$findLast : null;
          if (leafNode) {
            searchDirection = 'backward';
          }
        }
        if (searchDirection === 'forward' || !searchDirection) {
          var _leafNodes$find;
          const leafNodes = [...getLeafNodes(elementNode), ...getLeafNodes(elementNode === null || elementNode === void 0 ? void 0 : elementNode.nextElementSibling)];
          leafNode = (_leafNodes$find = leafNodes.find(leaf => isAfter(nonEditableNode, leaf))) !== null && _leafNodes$find !== void 0 ? _leafNodes$find : null;
          if (leafNode) {
            searchDirection = 'forward';
          }
        }
        if (leafNode) {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          if (searchDirection === 'forward') {
            offset = 0;
          } else {
            offset = domNode.textContent.length;
            domNode.querySelectorAll('[data-slate-zero-width]').forEach(el => {
              offset -= el.textContent.length;
            });
          }
        }
      }
      if (domNode && offset === domNode.textContent.length &&
      // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      IS_ANDROID && domNode.getAttribute('data-slate-zero-width') === 'z' && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.startsWith('\uFEFF') && (
      // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      parentNode.hasAttribute('data-slate-zero-width') ||
      // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      IS_FIREFOX && (_domNode$textContent2 = domNode.textContent) !== null && _domNode$textContent2 !== void 0 && _domNode$textContent2.endsWith('\n\n'))) {
        offset--;
      }
    }
    if (IS_ANDROID && parentNode && !textNode && !exactMatch) {
      const node = parentNode.hasAttribute('data-slate-node') ? parentNode : parentNode.closest('[data-slate-node]');
      if (node && DOMEditor.hasDOMNode(editor, node, {
        editable: true
      })) {
        const _slateNode = DOMEditor.toSlateNode(editor, node);
        let nodePath;
        try {
          nodePath = DOMEditor.findPath(editor, _slateNode);
        } catch (e) {
          if (suppressThrow) {
            return null;
          }
          throw e;
        }
        let {
          path: _path,
          offset: _offset
        } = slate.Editor.start(editor, nodePath);
        if (!node.querySelector('[data-slate-leaf]')) {
          _offset = nearestOffset;
        }
        return {
          path: _path,
          offset: _offset
        };
      }
    }
    if (!textNode) {
      if (suppressThrow) {
        return null;
      }
      throw new Error(`Cannot resolve a Slate point from DOM point: ${domPoint}`);
    }
    // COMPAT: If someone is clicking from one Slate editor into another,
    // the select event fires twice, once for the old editor's `element`
    // first, and then afterwards for the correct `element`. (2017/03/03)
    let slateNode;
    try {
      slateNode = DOMEditor.toSlateNode(editor, textNode);
    } catch (e) {
      if (suppressThrow) {
        return null;
      }
      throw e;
    }
    let path;
    try {
      path = DOMEditor.findPath(editor, slateNode);
    } catch (e) {
      if (suppressThrow) {
        return null;
      }
      throw e;
    }
    return {
      path,
      offset
    };
  },
  toSlateRange: (editor, domRange, options) => {
    var _focusNode$parentElem, _focusNode$textConten;
    const {
      exactMatch,
      suppressThrow
    } = options;
    const el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    let anchorNode;
    let anchorOffset;
    let focusNode;
    let focusOffset;
    let isCollapsed;
    if (el) {
      if (isDOMSelection(domRange)) {
        // COMPAT: In firefox the normal seletion way does not work
        // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
        if (IS_FIREFOX && domRange.rangeCount > 1) {
          focusNode = domRange.focusNode; // Focus node works fine
          const firstRange = domRange.getRangeAt(0);
          const lastRange = domRange.getRangeAt(domRange.rangeCount - 1);
          // Here we are in the contenteditable mode of a table in firefox
          if (focusNode instanceof HTMLTableRowElement && firstRange.startContainer instanceof HTMLTableRowElement && lastRange.startContainer instanceof HTMLTableRowElement) {
            // HTMLElement, becouse Element is a slate element
            function getLastChildren(element) {
              if (element.childElementCount > 0) {
                return getLastChildren(element.children[0]);
              } else {
                return element;
              }
            }
            const firstNodeRow = firstRange.startContainer;
            const lastNodeRow = lastRange.startContainer;
            // This should never fail as "The HTMLElement interface represents any HTML element."
            const firstNode = getLastChildren(firstNodeRow.children[firstRange.startOffset]);
            const lastNode = getLastChildren(lastNodeRow.children[lastRange.startOffset]);
            // Zero, as we allways take the right one as the anchor point
            focusOffset = 0;
            if (lastNode.childNodes.length > 0) {
              anchorNode = lastNode.childNodes[0];
            } else {
              anchorNode = lastNode;
            }
            if (firstNode.childNodes.length > 0) {
              focusNode = firstNode.childNodes[0];
            } else {
              focusNode = firstNode;
            }
            if (lastNode instanceof HTMLElement) {
              anchorOffset = lastNode.innerHTML.length;
            } else {
              // Fallback option
              anchorOffset = 0;
            }
          } else {
            // This is the read only mode of a firefox table
            // Right to left
            if (firstRange.startContainer === focusNode) {
              anchorNode = lastRange.endContainer;
              anchorOffset = lastRange.endOffset;
              focusOffset = firstRange.startOffset;
            } else {
              // Left to right
              anchorNode = firstRange.startContainer;
              anchorOffset = firstRange.endOffset;
              focusOffset = lastRange.startOffset;
            }
          }
        } else {
          anchorNode = domRange.anchorNode;
          anchorOffset = domRange.anchorOffset;
          focusNode = domRange.focusNode;
          focusOffset = domRange.focusOffset;
        }
        // COMPAT: There's a bug in chrome that always returns `true` for
        // `isCollapsed` for a Selection that comes from a ShadowRoot.
        // (2020/08/08)
        // https://bugs.chromium.org/p/chromium/issues/detail?id=447523
        // IsCollapsed might not work in firefox, but this will
        if (IS_CHROME && hasShadowRoot(anchorNode) || IS_FIREFOX) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }
    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error(`Cannot resolve a Slate range from DOM range: ${domRange}`);
    }
    // COMPAT: Firefox sometimes includes an extra \n (rendered by TextString
    // when isTrailing is true) in the focusOffset, resulting in an invalid
    // Slate point. (2023/11/01)
    if (IS_FIREFOX && !((_focusNode$parentElem = focusNode.parentElement) !== null && _focusNode$parentElem !== void 0 && _focusNode$parentElem.hasAttribute('data-slate-trailing')) && (_focusNode$textConten = focusNode.textContent) !== null && _focusNode$textConten !== void 0 && _focusNode$textConten.endsWith('\n\n') && focusOffset === focusNode.textContent.length) {
      focusOffset--;
    }
    const anchor = DOMEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });
    if (!anchor) {
      return null;
    }
    const focusBeforeAnchor = isBefore(anchorNode, focusNode) || anchorNode === focusNode && focusOffset < anchorOffset;
    const focus = isCollapsed ? anchor : DOMEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow,
      searchDirection: focusBeforeAnchor ? 'forward' : 'backward'
    });
    if (!focus) {
      return null;
    }
    let range = {
      anchor: anchor,
      focus: focus
    };
    // if the selection is a hanging range that ends in a void
    // and the DOM focus is an Element
    // (meaning that the selection ends before the element)
    // unhang the range to avoid mistakenly including the void
    if (slate.Range.isExpanded(range) && slate.Range.isForward(range) && isDOMElement(focusNode) && !focusNode.closest('[data-slate-void="true"]') && slate.Editor.void(editor, {
      at: range.focus,
      mode: 'highest'
    })) {
      range = slate.Editor.unhangRange(editor, range, {
        voids: true
      });
    }
    return range;
  }
};
const replaceText = (nodes, path, text) => nodes.map((node, index) => {
  if (index !== path[0]) {
    return node;
  }
  if (path.length === 1) {
    return _objectSpread$3$1(_objectSpread$3$1({}, node), {}, {
      text
    });
  }
  return _objectSpread$3$1(_objectSpread$3$1({}, node), {}, {
    children: replaceText(node.children, path.slice(1), text)
  });
});
const getComposingView = editor => {
  var _textElement$textCont;
  const domSelection = DOMEditor.getWindow(editor).getSelection();
  if (!(domSelection !== null && domSelection !== void 0 && domSelection.focusNode)) {
    return undefined;
  }
  const point = DOMEditor.toSlatePoint(editor, [domSelection.focusNode, domSelection.focusOffset], {
    exactMatch: false,
    suppressThrow: true
  });
  if (!point) {
    return undefined;
  }
  const textElement = DOMEditor.toDOMNode(editor, slate.Node.get(editor, point.path));
  const text = ((_textElement$textCont = textElement.textContent) !== null && _textElement$textCont !== void 0 ? _textElement$textCont : '').replace(/\uFEFF/g, '');
  const view = slate.createEditor();
  view.isInline = editor.isInline;
  view.isVoid = editor.isVoid;
  view.children = replaceText(editor.children, point.path, text);
  return {
    view,
    point
  };
};
const closestSlateElement = domNode => {
  var _domEl$closest;
  const domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
  return domEl !== null && domEl !== void 0 && domEl.hasAttribute('data-slate-node') ? domEl : (_domEl$closest = domEl === null || domEl === void 0 ? void 0 : domEl.closest('[data-slate-node]')) !== null && _domEl$closest !== void 0 ? _domEl$closest : null;
};
const unresolvedPointMessage = point => `Cannot resolve a DOM point from Slate point: ${slate.Scrubber.stringify(point)}`;
const findDOMPointInElement = (editor, el, point) => {
  let domPoint = null;
  // If we're inside a void node, force the offset to 0, otherwise the zero
  // width spacing character will result in an incorrect offset of 1
  if (slate.Editor.void(editor, {
    at: point
  })) {
    point = {
      path: point.path,
      offset: 0
    };
  }
  // For each leaf, we need to isolate its content, which means filtering
  // to its direct text and zero-width spans. (We have to filter out any
  // other siblings that may have been rendered alongside them.)
  const selector = `[data-slate-string], [data-slate-zero-width]`;
  const texts = Array.from(el.querySelectorAll(selector));
  let start = 0;
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    const domNode = text.childNodes[0];
    if (domNode == null || domNode.textContent == null) {
      continue;
    }
    const {
      length
    } = domNode.textContent;
    const attr = text.getAttribute('data-slate-length');
    const trueLength = attr == null ? length : parseInt(attr, 10);
    const end = start + trueLength;
    // Prefer putting the selection inside the mark placeholder to ensure
    // composed text is displayed with the correct marks.
    const nextText = texts[i + 1];
    if (point.offset === end && nextText !== null && nextText !== void 0 && nextText.hasAttribute('data-slate-mark-placeholder')) {
      var _nextText$textContent;
      const domText = nextText.childNodes[0];
      domPoint = [
      // COMPAT: If we don't explicity set the dom point to be on the actual
      // dom text element, chrome will put the selection behind the actual dom
      // text element, causing domRange.getBoundingClientRect() calls on a collapsed
      // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
      // which will cause issues when scrolling to it.
      domText instanceof DOMText ? domText : nextText, (_nextText$textContent = nextText.textContent) !== null && _nextText$textContent !== void 0 && _nextText$textContent.startsWith('\uFEFF') ? 1 : 0];
      break;
    }
    if (point.offset <= end) {
      const offset = Math.min(length, Math.max(0, point.offset - start));
      domPoint = offset === length && text.hasAttribute('data-slate-trailing') ? [text.lastChild, 0] : [domNode, offset];
      break;
    }
    start = end;
  }
  return domPoint;
};
const createDOMRange = (window, domAnchor, domFocus, isBackward) => {
  const domRange = window.document.createRange();
  const [startNode, startOffset] = isBackward ? domFocus : domAnchor;
  const [endNode, endOffset] = isBackward ? domAnchor : domFocus;
  // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
  // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
  // adjust the offset accordingly.
  const startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
  const isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
  const endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
  const isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');
  domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
  domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
  return domRange;
};

function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

/**
 * Check whether a text diff was applied in a way we can perform the pending action on /
 * recover the pending selection.
 */
function verifyDiffState(editor, textDiff) {
  const {
    path,
    diff
  } = textDiff;
  if (!slate.Editor.hasPath(editor, path)) {
    return false;
  }
  const node = slate.Node.get(editor, path);
  if (!slate.Node.isText(node)) {
    return false;
  }
  if (diff.start !== node.text.length || diff.text.length === 0) {
    return node.text.slice(diff.start, diff.start + diff.text.length) === diff.text;
  }
  const nextPath = slate.Path.next(path);
  if (!slate.Editor.hasPath(editor, nextPath)) {
    return false;
  }
  const nextNode = slate.Node.get(editor, nextPath);
  return slate.Node.isText(nextNode) && nextNode.text.startsWith(diff.text);
}
function applyStringDiff(text, ...diffs) {
  return diffs.reduce((text, diff) => text.slice(0, diff.start) + diff.text + text.slice(diff.end), text);
}
function longestCommonPrefixLength(str, another) {
  const length = Math.min(str.length, another.length);
  for (let i = 0; i < length; i++) {
    if (str.charAt(i) !== another.charAt(i)) {
      return i;
    }
  }
  return length;
}
function longestCommonSuffixLength(str, another, max) {
  const length = Math.min(str.length, another.length, max);
  for (let i = 0; i < length; i++) {
    if (str.charAt(str.length - i - 1) !== another.charAt(another.length - i - 1)) {
      return i;
    }
  }
  return length;
}
/**
 * Remove redundant changes from the diff so that it spans the minimal possible range
 */
function normalizeStringDiff(targetText, diff) {
  const {
    start,
    end,
    text
  } = diff;
  const removedText = targetText.slice(start, end);
  const prefixLength = longestCommonPrefixLength(removedText, text);
  const max = Math.min(removedText.length - prefixLength, text.length - prefixLength);
  const suffixLength = longestCommonSuffixLength(removedText, text, max);
  const normalized = {
    start: start + prefixLength,
    end: end - suffixLength,
    text: text.slice(prefixLength, text.length - suffixLength)
  };
  if (normalized.start === normalized.end && normalized.text.length === 0) {
    return null;
  }
  return normalized;
}
/**
 * Return a string diff that is equivalent to applying b after a spanning the range of
 * both changes
 */
function mergeStringDiffs(targetText, a, b) {
  const start = Math.min(a.start, b.start);
  const overlap = Math.max(0, Math.min(a.start + a.text.length, b.end) - b.start);
  const applied = applyStringDiff(targetText, a, b);
  const sliceEnd = Math.max(b.start + b.text.length, a.start + a.text.length + (a.start + a.text.length > b.start ? b.text.length : 0) - overlap);
  const text = applied.slice(start, sliceEnd);
  const end = Math.max(a.end, b.end - a.text.length + (a.end - a.start));
  return normalizeStringDiff(targetText, {
    start,
    end,
    text
  });
}
/**
 * Get the slate range the text diff spans.
 */
function targetRange(textDiff) {
  const {
    path,
    diff
  } = textDiff;
  return {
    anchor: {
      path,
      offset: diff.start
    },
    focus: {
      path,
      offset: diff.end
    }
  };
}
/**
 * Normalize a 'pending point' a.k.a a point based on the dom state before applying
 * the pending diffs. Since the pending diffs might have been inserted with different
 * marks we have to 'walk' the offset from the starting position to ensure we still
 * have a valid point inside the document
 */
function normalizePoint(editor, point) {
  let {
    path,
    offset
  } = point;
  if (!slate.Editor.hasPath(editor, path)) {
    return null;
  }
  let leaf = slate.Node.get(editor, path);
  if (!slate.Node.isText(leaf)) {
    return null;
  }
  const parentBlock = slate.Editor.above(editor, {
    match: n => slate.Node.isElement(n) && slate.Editor.isBlock(editor, n),
    at: path
  });
  if (!parentBlock) {
    return null;
  }
  while (offset > leaf.text.length) {
    const entry = slate.Editor.next(editor, {
      at: path,
      match: slate.Node.isText
    });
    if (!entry || !slate.Path.isDescendant(entry[1], parentBlock[1])) {
      return null;
    }
    offset -= leaf.text.length;
    leaf = entry[0];
    path = entry[1];
  }
  return {
    path,
    offset
  };
}
/**
 * Normalize a 'pending selection' to ensure it's valid in the current document state.
 */
function normalizeRange(editor, range) {
  const anchor = normalizePoint(editor, range.anchor);
  if (!anchor) {
    return null;
  }
  if (slate.Range.isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }
  const focus = normalizePoint(editor, range.focus);
  if (!focus) {
    return null;
  }
  return {
    anchor,
    focus
  };
}
function transformPendingPoint(editor, point, op) {
  const pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
  const textDiff = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(({
    path
  }) => slate.Path.equals(path, point.path));
  if (!textDiff || point.offset <= textDiff.diff.start) {
    return slate.Point.transform(point, op, {
      affinity: 'backward'
    });
  }
  const {
    diff
  } = textDiff;
  if (op.type === 'insert_node' && slate.Text.isText(op.node) && op.node.text === diff.text && diff.start === diff.end && slate.Path.equals(op.path, slate.Path.next(point.path)) && point.offset <= diff.start + diff.text.length && slate.Node.leaf(editor, point.path).text.length === diff.start) {
    return {
      path: op.path,
      offset: point.offset - diff.start
    };
  }
  // Point references location inside the diff => transform the point based on the location
  // the diff will be applied to and add the offset inside the diff.
  if (point.offset <= diff.start + diff.text.length) {
    const _anchor = {
      path: point.path,
      offset: diff.start
    };
    const _transformed = slate.Point.transform(_anchor, op, {
      affinity: 'backward'
    });
    if (!_transformed) {
      return null;
    }
    return {
      path: _transformed.path,
      offset: _transformed.offset + point.offset - diff.start
    };
  }
  // Point references location after the diff
  const anchor = {
    path: point.path,
    offset: point.offset - diff.text.length + diff.end - diff.start
  };
  const transformed = slate.Point.transform(anchor, op, {
    affinity: 'backward'
  });
  if (!transformed) {
    return null;
  }
  if (op.type === 'split_node' && slate.Path.equals(op.path, point.path) && anchor.offset < op.position && diff.start < op.position) {
    return transformed;
  }
  return {
    path: transformed.path,
    offset: transformed.offset + diff.text.length - diff.end + diff.start
  };
}
function transformPendingRange(editor, range, op) {
  const anchor = transformPendingPoint(editor, range.anchor, op);
  if (!anchor) {
    return null;
  }
  if (slate.Range.isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }
  const focus = transformPendingPoint(editor, range.focus, op);
  if (!focus) {
    return null;
  }
  return {
    anchor,
    focus
  };
}
function transformTextDiff(textDiff, op) {
  const {
    path,
    diff,
    id
  } = textDiff;
  switch (op.type) {
    case 'insert_text':
      {
        if (!slate.Path.equals(op.path, path) || op.offset >= diff.end) {
          return textDiff;
        }
        if (op.offset <= diff.start) {
          return {
            diff: {
              start: op.text.length + diff.start,
              end: op.text.length + diff.end,
              text: diff.text
            },
            id,
            path
          };
        }
        return {
          diff: {
            start: diff.start,
            end: diff.end + op.text.length,
            text: diff.text
          },
          id,
          path
        };
      }
    case 'remove_text':
      {
        if (!slate.Path.equals(op.path, path) || op.offset >= diff.end) {
          return textDiff;
        }
        if (op.offset + op.text.length <= diff.start) {
          return {
            diff: {
              start: diff.start - op.text.length,
              end: diff.end - op.text.length,
              text: diff.text
            },
            id,
            path
          };
        }
        return {
          diff: {
            start: diff.start,
            end: diff.end - op.text.length,
            text: diff.text
          },
          id,
          path
        };
      }
    case 'split_node':
      {
        if (!slate.Path.equals(op.path, path) || op.position >= diff.end) {
          return {
            diff,
            id,
            path: slate.Path.transform(path, op, {
              affinity: 'backward'
            })
          };
        }
        if (op.position > diff.start) {
          return {
            diff: {
              start: diff.start,
              end: Math.min(op.position, diff.end),
              text: diff.text
            },
            id,
            path
          };
        }
        return {
          diff: {
            start: diff.start - op.position,
            end: diff.end - op.position,
            text: diff.text
          },
          id,
          path: slate.Path.transform(path, op, {
            affinity: 'forward'
          })
        };
      }
    case 'merge_node':
      {
        if (!slate.Path.equals(op.path, path)) {
          return {
            diff,
            id,
            path: slate.Path.transform(path, op)
          };
        }
        return {
          diff: {
            start: diff.start + op.position,
            end: diff.end + op.position,
            text: diff.text
          },
          id,
          path: slate.Path.transform(path, op)
        };
      }
  }
  const newPath = slate.Path.transform(path, op);
  if (!newPath) {
    return null;
  }
  return {
    diff,
    path: newPath,
    id
  };
}

/**
 * Utilities for single-line deletion
 */
const doRectsIntersect = (rect, compareRect) => {
  const middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};
const areRangesSameLine = (editor, range1, range2) => {
  try {
    const domRange1 = DOMEditor.toDOMRange(editor, range1);
    const domRange2 = DOMEditor.toDOMRange(editor, range2);
    const rect1 = domRange1.getBoundingClientRect();
    const rect2 = domRange2.getBoundingClientRect();
    return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
  } catch (_unused) {
    return false;
  }
};
/**
 * A helper utility that returns the end portion of a `Range`
 * which is located on a single line.
 *
 * @param {Editor} editor The editor object to compare against
 * @param {Range} parentRange The parent range to compare against
 * @returns {Range} A valid portion of the parentRange which is one a single line
 */
const findCurrentLineRange = (editor, parentRange) => {
  const parentRangeBoundary = slate.Editor.range(editor, slate.Range.end(parentRange));
  const positions = Array.from(slate.Editor.positions(editor, {
    at: parentRange
  }));
  let left = 0;
  let right = positions.length;
  let middle = Math.floor(right / 2);
  if (areRangesSameLine(editor, slate.Editor.range(editor, positions[left]), parentRangeBoundary)) {
    return slate.Editor.range(editor, positions[left], parentRangeBoundary);
  }
  if (positions.length < 2) {
    return slate.Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
  }
  while (middle !== positions.length && middle !== left) {
    if (areRangesSameLine(editor, slate.Editor.range(editor, positions[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }
    middle = Math.floor((left + right) / 2);
  }
  return slate.Editor.range(editor, positions[left], parentRangeBoundary);
};

function ownKeys$2$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2$1(Object(t), true).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const INSERTED_NODES = new WeakSet();
const isNodeInUse = node => NODE_TO_PARENT.has(node) || INSERTED_NODES.has(node) || slate.Node.isElement(node) && node.children.some(isNodeInUse);
const copyNode = node => slate.Node.isElement(node) ? _objectSpread$2$1(_objectSpread$2$1({}, node), {}, {
  children: node.children.map(copyNode)
}) : _objectSpread$2$1({}, node);
const markInserted = node => {
  INSERTED_NODES.add(node);
  if (slate.Node.isElement(node)) {
    node.children.forEach(markInserted);
  }
};
const copyNodeInUse = node => {
  const prepared = isNodeInUse(node) ? copyNode(node) : node;
  markInserted(prepared);
  return prepared;
};

const _excluded$1$1 = ["children"],
  _excluded2$1 = ["children"],
  _excluded3 = ["children"];
function ownKeys$1$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1$1(Object(t), true).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * `withDOM` adds DOM specific behaviors to the editor.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */
const wrapInClipboardAncestors = (contents, start, editorElement, includeInlines) => {
  const includeLists = contents.querySelector('li') !== null;
  let wrapped = contents;
  for (let ancestor = isDOMElement(start) ? start : start.parentElement; ancestor && ancestor !== editorElement; ancestor = ancestor.parentElement) {
    if (includeLists && ['OL', 'UL', 'LI'].includes(ancestor.nodeName) || includeInlines && ancestor.getAttribute('data-slate-inline') === 'true' && !ancestor.hasAttribute('data-slate-void')) {
      const shell = ancestor.cloneNode(false);
      shell.appendChild(wrapped);
      wrapped = ancestor.ownerDocument.createDocumentFragment();
      wrapped.appendChild(shell);
    }
  }
  return wrapped;
};
const withDOM = (editor, clipboardFormatKey = 'x-slate-fragment') => {
  const e = editor;
  const {
    apply,
    onChange,
    deleteBackward,
    addMark,
    removeMark,
    insertNodes
  } = e;
  e.insertNodes = (nodes, options) => {
    insertNodes(slate.Node.isNode(nodes) ? copyNodeInUse(nodes) : nodes.map(copyNodeInUse), options);
  };
  // The WeakMap which maps a key to a specific HTMLElement must be scoped to the editor instance to
  // avoid collisions between editors in the DOM that share the same value.
  EDITOR_TO_KEY_TO_ELEMENT.set(e, new WeakMap());
  e.addMark = (key, value) => {
    var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e)) === null || _EDITOR_TO_SCHEDULE_F === void 0 || _EDITOR_TO_SCHEDULE_F();
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length) {
      // Ensure the current pending diffs originating from changes before the addMark
      // are applied with the current formatting
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
    }
    EDITOR_TO_USER_MARKS.delete(e);
    addMark(key, value);
  };
  e.removeMark = key => {
    var _EDITOR_TO_PENDING_DI2;
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI2 !== void 0 && _EDITOR_TO_PENDING_DI2.length) {
      // Ensure the current pending diffs originating from changes before the addMark
      // are applied with the current formatting
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
    }
    EDITOR_TO_USER_MARKS.delete(e);
    removeMark(key);
  };
  e.deleteBackward = unit => {
    if (unit !== 'line') {
      return deleteBackward(unit);
    }
    if (e.selection && slate.Range.isCollapsed(e.selection)) {
      const parentBlockEntry = slate.Editor.above(e, {
        match: n => slate.Node.isElement(n) && slate.Editor.isBlock(e, n),
        at: e.selection
      });
      if (parentBlockEntry) {
        const [, parentBlockPath] = parentBlockEntry;
        const parentElementRange = slate.Editor.range(e, parentBlockPath, e.selection.anchor);
        const currentLineRange = findCurrentLineRange(e, parentElementRange);
        if (!slate.Range.isCollapsed(currentLineRange)) {
          slate.Transforms.delete(e, {
            at: currentLineRange
          });
        } else {
          deleteBackward('character');
        }
      }
    }
  };
  // This attempts to reset the NODE_TO_KEY entry to the correct value
  // as apply() changes the object reference and hence invalidates the NODE_TO_KEY entry
  e.apply = op => {
    const matches = [];
    const pathRefMatches = [];
    const pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e);
    if (pendingDiffs !== null && pendingDiffs !== void 0 && pendingDiffs.length) {
      const transformed = pendingDiffs.map(textDiff => transformTextDiff(textDiff, op)).filter(Boolean);
      EDITOR_TO_PENDING_DIFFS.set(e, transformed);
    }
    const pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e);
    if (pendingSelection) {
      EDITOR_TO_PENDING_SELECTION.set(e, transformPendingRange(e, pendingSelection, op));
    }
    const pendingAction = EDITOR_TO_PENDING_ACTION.get(e);
    if (pendingAction !== null && pendingAction !== void 0 && pendingAction.at) {
      const at = slate.Location.isPoint(pendingAction === null || pendingAction === void 0 ? void 0 : pendingAction.at) ? transformPendingPoint(e, pendingAction.at, op) : transformPendingRange(e, pendingAction.at, op);
      EDITOR_TO_PENDING_ACTION.set(e, at ? _objectSpread$1$1(_objectSpread$1$1({}, pendingAction), {}, {
        at
      }) : null);
    }
    switch (op.type) {
      case 'insert_text':
      case 'remove_text':
      case 'set_node':
      case 'split_node':
        {
          matches.push(...getMatches(e, op.path));
          break;
        }
      case 'set_selection':
        {
          var _EDITOR_TO_USER_SELEC;
          // Selection was manually set, don't restore the user selection after the change.
          (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(e)) === null || _EDITOR_TO_USER_SELEC === void 0 || _EDITOR_TO_USER_SELEC.unref();
          EDITOR_TO_USER_SELECTION.delete(e);
          break;
        }
      case 'insert_node':
      case 'remove_node':
        {
          matches.push(...getMatches(e, slate.Path.parent(op.path)));
          break;
        }
      case 'merge_node':
        {
          const prevPath = slate.Path.previous(op.path);
          matches.push(...getMatches(e, prevPath));
          break;
        }
      case 'move_node':
        {
          const commonPath = slate.Path.common(slate.Path.parent(op.path), slate.Path.parent(op.newPath));
          matches.push(...getMatches(e, commonPath));
          let changedPath;
          if (slate.Path.isBefore(op.path, op.newPath)) {
            matches.push(...getMatches(e, slate.Path.parent(op.path)));
            changedPath = op.newPath;
          } else {
            matches.push(...getMatches(e, slate.Path.parent(op.newPath)));
            changedPath = op.path;
          }
          const changedNode = slate.Node.get(editor, slate.Path.parent(changedPath));
          const changedNodeKey = DOMEditor.findKey(e, changedNode);
          const changedPathRef = slate.Editor.pathRef(e, slate.Path.parent(changedPath));
          pathRefMatches.push([changedPathRef, changedNodeKey]);
          break;
        }
    }
    apply(op);
    // ПРОПАТЧЕНО (Saby): editor не помечается IS_NODE_MAP_DIRTY после операций.
    // onDOMSelectionChange пропускает выделение у «грязного» editor, и в ряде
    // сценариев выделение ломалось.
    for (const [path, key] of matches) {
      const [node] = slate.Editor.node(e, path);
      NODE_TO_KEY.set(node, key);
    }
    for (const [pathRef, key] of pathRefMatches) {
      if (pathRef.current) {
        const [node] = slate.Editor.node(e, pathRef.current);
        NODE_TO_KEY.set(node, key);
      }
      pathRef.unref();
    }
  };
  e.onDOMError = error => {
    if (typeof globalThis.reportError === 'function') {
      globalThis.reportError(error);
    } else {
      setTimeout(() => {
        throw error;
      });
    }
  };
  e.setFragmentData = data => {
    const {
      selection
    } = e;
    if (!selection) {
      return;
    }
    const [start, end] = slate.Range.edges(selection);
    const startVoid = slate.Editor.void(e, {
      at: start.path
    });
    const endVoid = slate.Editor.void(e, {
      at: end.path
    });
    if (slate.Range.isCollapsed(selection) && !startVoid) {
      return;
    }
    // Create a fake selection so that we can add a Base64-encoded copy of the
    // fragment to the HTML, to decode on future pastes.
    const domRange = DOMEditor.toDOMRange(e, selection);
    let contents = domRange.cloneContents();
    let commonAncestor = domRange.commonAncestorContainer;
    let attach = contents.childNodes[0];
    // Make sure attach is non-empty, since empty nodes will not get copied.
    contents.childNodes.forEach(node => {
      if (node.textContent && node.textContent.trim() !== '') {
        attach = node;
      }
    });
    // COMPAT: If the end node is a void node, we need to move the end of the
    // range from the void node's spacer span, to the end of the void node's
    // content, since the spacer is before void's content in the DOM.
    if (endVoid) {
      const [voidNode] = endVoid;
      const r = domRange.cloneRange();
      const domNode = DOMEditor.toDOMNode(e, voidNode);
      r.setEndAfter(domNode);
      contents = r.cloneContents();
      commonAncestor = r.commonAncestorContainer;
    }
    // COMPAT: If the start node is a void node, we need to attach the encoded
    // fragment to the void node's content node instead of the spacer, because
    // attaching it to empty `<div>/<span>` nodes will end up having it erased by
    // most browsers. (2018/04/27)
    if (startVoid) {
      attach = contents.querySelector('[data-slate-spacer]');
    }
    // Remove any zero-width space spans from the cloned DOM so that they don't
    // show up elsewhere when pasted.
    Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach(zw => {
      const isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
      zw.textContent = '';
      if (isNewline) {
        zw.appendChild(zw.ownerDocument.createElement('br'));
      }
    });
    // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
    // in the HTML, and can be used for intra-Slate pasting. If it's a text
    // node, wrap it in a `<span>` so we have something to set an attribute on.
    if (isDOMText(attach)) {
      const span = attach.ownerDocument.createElement('span');
      // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
      // then leading and trailing spaces will be ignored. (2017/09/21)
      span.style.whiteSpace = 'pre';
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }
    const fragment = e.getFragment();
    const string = JSON.stringify(fragment);
    const encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute('data-slate-fragment', encoded);
    data.setData(`application/${clipboardFormatKey}`, encoded);
    contents = wrapInClipboardAncestors(contents, commonAncestor, DOMEditor.toDOMNode(e, e), !startVoid && !endVoid);
    // Add the content to a <div> so that we can get its inner HTML.
    const div = contents.ownerDocument.createElement('div');
    div.appendChild(contents);
    div.setAttribute('hidden', 'true');
    contents.ownerDocument.body.appendChild(div);
    data.setData('text/html', div.innerHTML);
    data.setData('text/plain', getPlainText(div));
    contents.ownerDocument.body.removeChild(div);
    return data;
  };
  e.insertData = data => {
    if (!e.insertFragmentData(data)) {
      e.insertTextData(data);
    }
  };
  e.insertFragmentData = data => {
    /**
     * Checking copied fragment from application/x-slate-fragment or data-slate-fragment
     */
    const fragment = data.getData(`application/${clipboardFormatKey}`) || getSlateFragmentAttribute(data);
    if (fragment) {
      const decoded = decodeURIComponent(window.atob(fragment));
      const parsed = JSON.parse(decoded);
      e.insertFragment(parsed);
      return true;
    }
    return false;
  };
  e.insertTextData = data => {
    const text = data.getData('text/plain');
    if (!text) {
      return false;
    }
    const lines = text.split(/\r\n|\r|\n/);
    if (lines.length === 1) {
      e.insertText(text);
      return true;
    }
    if (isInsideInline(e)) {
      insertLinesInsideInline(e, lines);
      return true;
    }
    const fragment = getPlainTextFragment(e, lines);
    if (fragment) {
      e.insertFragment(fragment);
    }
    return true;
  };
  e.onChange = options => {
    const onContextChange = EDITOR_TO_ON_CHANGE.get(e);
    if (onContextChange) {
      onContextChange(options);
    }
    onChange(options);
  };
  return e;
};
const getMatches = (e, path) => {
  const matches = [];
  for (const [n, p] of slate.Editor.levels(e, {
    at: path
  })) {
    const key = DOMEditor.findKey(e, n);
    matches.push([p, key]);
  }
  return matches;
};
const isInsideInline = editor => !!editor.selection && !!slate.Editor.above(editor, {
  at: slate.Range.start(editor.selection),
  match: node => slate.Element.isElement(node) && slate.Editor.isInline(editor, node)
});
const insertLinesInsideInline = (editor, lines) => {
  var _Editor$marks;
  const marks = (_Editor$marks = slate.Editor.marks(editor)) !== null && _Editor$marks !== void 0 ? _Editor$marks : {};
  const middle = lines.slice(1, -1);
  editor.insertText(lines[0]);
  slate.Transforms.splitNodes(editor, {
    always: true
  });
  if (middle.length && editor.selection) {
    const {
      anchor
    } = editor.selection;
    const [[_ref, blockPath]] = slate.Editor.nodes(editor, {
        at: anchor,
        match: node => slate.Element.isElement(node) && slate.Editor.isBlock(editor, node),
        mode: 'lowest'
      }),
      {
        children
      } = _ref,
      blockProps = _objectWithoutProperties$1(_ref, _excluded$1$1);
    const inlines = Array.from(slate.Editor.nodes(editor, {
      at: anchor,
      match: node => slate.Element.isElement(node) && slate.Editor.isInline(editor, node)
    }), ([_ref2]) => {
      let {
          children
        } = _ref2,
        inlineProps = _objectWithoutProperties$1(_ref2, _excluded2$1);
      return inlineProps;
    });
    const wrap = line => inlines.reduceRight((child, inlineProps) => _objectSpread$1$1(_objectSpread$1$1({}, inlineProps), {}, {
      children: [child]
    }), _objectSpread$1$1(_objectSpread$1$1({}, marks), {}, {
      text: line
    }));
    slate.Transforms.insertNodes(editor, middle.map(line => _objectSpread$1$1(_objectSpread$1$1({}, blockProps), {}, {
      children: [wrap(line)]
    })), {
      at: blockPath,
      select: false
    });
  }
  editor.insertText(lines[lines.length - 1]);
};
const getPlainTextFragment = (editor, lines) => {
  var _Editor$marks2;
  if (!editor.selection) {
    return null;
  }
  const entry = slate.Editor.above(editor, {
    at: slate.Range.start(editor.selection),
    match: node => slate.Element.isElement(node) && slate.Editor.isBlock(editor, node),
    mode: 'lowest'
  });
  if (!entry) {
    return null;
  }
  const [_ref3] = entry,
    {
      children
    } = _ref3,
    blockProps = _objectWithoutProperties$1(_ref3, _excluded3);
  const marks = (_Editor$marks2 = slate.Editor.marks(editor)) !== null && _Editor$marks2 !== void 0 ? _Editor$marks2 : {};
  return lines.map(line => _objectSpread$1$1(_objectSpread$1$1({}, blockProps), {}, {
    children: [_objectSpread$1$1(_objectSpread$1$1({}, marks), {}, {
      text: line
    })]
  }));
};

const TRIPLE_CLICK = 3;

/**
 * Hotkey mappings for each platform.
 */
const HOTKEYS = {
  bold: 'mod+b',
  compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
  moveBackward: 'left',
  moveForward: 'right',
  moveWordBackward: 'ctrl+left',
  moveWordForward: 'ctrl+right',
  deleteBackward: 'shift?+backspace',
  deleteForward: 'shift?+delete',
  extendBackward: 'shift+left',
  extendForward: 'shift+right',
  italic: 'mod+i',
  insertSoftBreak: 'shift+enter',
  splitBlock: 'enter',
  undo: 'mod+z'
};
const APPLE_HOTKEYS = {
  moveLineBackward: 'opt+up',
  moveLineForward: 'opt+down',
  moveWordBackward: 'opt+left',
  moveWordForward: 'opt+right',
  deleteBackward: ['ctrl+backspace', 'ctrl+h'],
  deleteForward: ['ctrl+delete', 'ctrl+d'],
  deleteLineBackward: 'cmd+shift?+backspace',
  deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
  deleteWordBackward: 'opt+shift?+backspace',
  deleteWordForward: 'opt+shift?+delete',
  extendLineBackward: 'opt+shift+up',
  extendLineForward: 'opt+shift+down',
  redo: 'cmd+shift+z',
  transposeCharacter: 'ctrl+t'
};
const WINDOWS_HOTKEYS = {
  deleteWordBackward: 'ctrl+shift?+backspace',
  deleteWordForward: 'ctrl+shift?+delete',
  redo: ['ctrl+y', 'ctrl+shift+z']
};
/**
 * Create a platform-aware hotkey checker.
 */
const create = key => {
  const generic = HOTKEYS[key];
  const apple = APPLE_HOTKEYS[key];
  const windows = WINDOWS_HOTKEYS[key];
  const isGeneric = generic && libExports.isHotkey(generic);
  const isApple = apple && libExports.isHotkey(apple);
  const isWindows = windows && libExports.isHotkey(windows);
  return event => {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (!IS_APPLE && isWindows && isWindows(event)) return true;
    return false;
  };
};
/**
 * Hotkeys.
 */
var hotkeys = {
  isBold: create('bold'),
  isCompose: create('compose'),
  isMoveBackward: create('moveBackward'),
  isMoveForward: create('moveForward'),
  isDeleteBackward: create('deleteBackward'),
  isDeleteForward: create('deleteForward'),
  isDeleteLineBackward: create('deleteLineBackward'),
  isDeleteLineForward: create('deleteLineForward'),
  isDeleteWordBackward: create('deleteWordBackward'),
  isDeleteWordForward: create('deleteWordForward'),
  isExtendBackward: create('extendBackward'),
  isExtendForward: create('extendForward'),
  isExtendLineBackward: create('extendLineBackward'),
  isExtendLineForward: create('extendLineForward'),
  isItalic: create('italic'),
  isMoveLineBackward: create('moveLineBackward'),
  isMoveLineForward: create('moveLineForward'),
  isMoveWordBackward: create('moveWordBackward'),
  isMoveWordForward: create('moveWordForward'),
  isRedo: create('redo'),
  isSoftBreak: create('insertSoftBreak'),
  isSplitBlock: create('splitBlock'),
  isTransposeCharacter: create('transposeCharacter'),
  isUndo: create('undo')
};

const _excluded$3 = ["anchor", "focus"],
  _excluded2$2 = ["anchor", "focus"];
function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), true).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
const isDecorationFlagsEqual = (range, other) => {
  const {
      anchor: rangeAnchor,
      focus: rangeFocus
    } = range,
    rangeOwnProps = _objectWithoutProperties$1(range, _excluded$3);
  const {
      anchor: otherAnchor,
      focus: otherFocus
    } = other,
    otherOwnProps = _objectWithoutProperties$1(other, _excluded2$2);
  return range[PLACEHOLDER_SYMBOL] === other[PLACEHOLDER_SYMBOL] && shallowCompare(rangeOwnProps, otherOwnProps);
};
/**
 * Check if a list of decorator ranges are equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */
const isElementDecorationsEqual = (list, another) => {
  if (list === another) {
    return true;
  }
  if (!list || !another) {
    return false;
  }
  if (list.length !== another.length) {
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    const range = list[i];
    const other = another[i];
    if (!slate.Range.equals(range, other) || !isDecorationFlagsEqual(range, other)) {
      return false;
    }
  }
  return true;
};
/**
 * Check if a list of decorator ranges are equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */
const isTextDecorationsEqual = (list, another) => {
  if (list === another) {
    return true;
  }
  if (!list || !another) {
    return false;
  }
  if (list.length !== another.length) {
    return false;
  }
  for (let i = 0; i < list.length; i++) {
    const range = list[i];
    const other = another[i];
    // compare only offsets because paths doesn't matter for text
    if (range.anchor.offset !== other.anchor.offset || range.focus.offset !== other.focus.offset || !isDecorationFlagsEqual(range, other)) {
      return false;
    }
  }
  return true;
};
/**
 * Split and group decorations by each child of a node.
 *
 * @returns An array with length equal to that of `node.children`. Each index
 * corresponds to a child of `node`, and the value is an array of decorations
 * for that child.
 */
const splitDecorationsByChild = (editor, node, decorations) => {
  const decorationsByChild = Array.from(node.children, () => []);
  if (decorations.length === 0) {
    return decorationsByChild;
  }
  const path = DOMEditor.findPath(editor, node);
  const level = path.length;
  const ancestorRange = slate.Editor.range(editor, path);
  const cachedChildRanges = new Array(node.children.length);
  const getChildRange = index => {
    const cachedRange = cachedChildRanges[index];
    if (cachedRange) return cachedRange;
    const childRange = slate.Editor.range(editor, [...path, index]);
    cachedChildRanges[index] = childRange;
    return childRange;
  };
  for (const decoration of decorations) {
    const decorationRange = slate.Range.intersection(ancestorRange, decoration);
    if (!decorationRange) continue;
    const [startPoint, endPoint] = slate.Range.edges(decorationRange);
    const startIndex = startPoint.path[level];
    const endIndex = endPoint.path[level];
    for (let i = startIndex; i <= endIndex; i++) {
      const ds = decorationsByChild[i];
      if (!ds) continue;
      const childRange = getChildRange(i);
      const childDecorationRange = slate.Range.intersection(childRange, decoration);
      if (!childDecorationRange) continue;
      ds.push(_objectSpread$9(_objectSpread$9({}, decoration), childDecorationRange));
    }
  }
  return decorationsByChild;
};

var resizeObservers = [];

var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};

var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};

var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};

var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

var freeze = function (obj) { return Object.freeze(obj); };

var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
    }
    return ResizeObserverSize;
}());

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());

var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};

var global$1 = typeof window !== 'undefined' ? window : {};

var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global$1.navigator && global$1.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};

var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());

var calculateDepthForNode = function (node) {
    if (isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};

var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};

var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};

var process = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};

var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        if (typeof MutationObserver !== 'undefined') { new MutationObserver(function () { return notify(); }).observe(el_1, config); }
        trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};

var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};

var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global$1.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = typeof MutationObserver !== 'undefined' ? new MutationObserver(this.listener) : null;
            this.observe();
            events.forEach(function (name) { return global$1.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global$1.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};

var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());

var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());

var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && resizeObservers.push(detail);
            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
            updateCount(1);
            scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            updateCount(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());

var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

/**
 * A React context for sharing the editor object.
 */
const EditorContext = /*#__PURE__*/React.createContext(null);
/**
 * Get the current editor object from the React context.
 */
const useSlateStatic = () => {
  const editor = React.useContext(EditorContext);
  if (!editor) {
    throw new Error(`The \`useSlateStatic\` hook must be used inside the <Slate> component's context.`);
  }
  return editor;
};

// eslint-disable-next-line no-redeclare
const ReactEditor = DOMEditor;

function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// https://github.com/facebook/draft-js/blob/main/src/component/handlers/composition/DraftEditorCompositionHandler.js#L41
// When using keyboard English association function, conpositionEnd triggered too fast, resulting in after `insertText` still maintain association state.
const RESOLVE_DELAY = 25;
// Time with no user interaction before the current user action is considered as done.
const FLUSH_DELAY = 200;
// Time with no composition input after which a composition that never ended is
// treated as stale. Long enough that pausing mid-word does not cut a live
// composition short.
const COMPOSITION_IDLE_TIMEOUT = 5000;
// How often a deferred flush re-checks whether the composition is still live.
// Only bounds how quickly the value catches up with a composition that ended
// without firing `compositionend`; one that ends normally flushes immediately.
const COMPOSITION_RECHECK_DELAY = 50;
// Replace with `const debug = console.log` to debug
const debug = (..._) => {};
// Type guard to check if a value is a DataTransfer
const isDataTransfer = value => (value === null || value === void 0 ? void 0 : value.constructor.name) === 'DataTransfer';
const EDITOR_TO_FLUSH_DEFERRED_DIFFS = new WeakMap();
function createAndroidInputManager({
  editor,
  scheduleOnDOMSelectionChange,
  onDOMSelectionChange
}) {
  let flushing = false;
  let flushingDeferredDiffs = false;
  let compositionEndTimeoutId = null;
  let flushTimeoutId = null;
  let actionTimeoutId = null;
  let lastCompositionActivity = 0;
  let lastInsertText = 0;
  let compositionCleared = false;
  let hasUnrenderedMutations = false;
  let idCounter = 0;
  let insertPositionHint = false;
  const applyPendingSelection = () => {
    const pendingSelection = EDITOR_TO_PENDING_SELECTION.get(editor);
    EDITOR_TO_PENDING_SELECTION.delete(editor);
    if (pendingSelection) {
      const {
        selection
      } = editor;
      const normalized = normalizeRange(editor, pendingSelection);
      if (normalized && (!selection || !slate.Range.equals(normalized, selection))) {
        slate.Transforms.select(editor, normalized);
      }
    }
  };
  const performAction = () => {
    const {
      children
    } = editor;
    runPendingAction();
    if (hasUnrenderedMutations && editor.children === children) {
      var _EDITOR_TO_FORCE_REND;
      (_EDITOR_TO_FORCE_REND = EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 || _EDITOR_TO_FORCE_REND();
    }
    hasUnrenderedMutations = false;
  };
  const runPendingAction = () => {
    const action = EDITOR_TO_PENDING_ACTION.get(editor);
    EDITOR_TO_PENDING_ACTION.delete(editor);
    if (!action) {
      return;
    }
    if (action.at) {
      const target = slate.Location.isPoint(action.at) ? normalizePoint(editor, action.at) : normalizeRange(editor, action.at);
      if (!target) {
        return;
      }
      const targetRange = slate.Editor.range(editor, target);
      if (!editor.selection || !slate.Range.equals(editor.selection, targetRange)) {
        slate.Transforms.select(editor, target);
      }
    }
    action.run();
  };
  // `compositionend` is not fired reliably in every browser, which Slate
  // already works around on keydown. Deferring flushes on a composition that
  // never ends would strand the typed text outside the value, so a composition
  // that has gone quiet, or that has lost focus, no longer holds flushes back.
  const isCompositionLive = () => {
    if (!IS_COMPOSING.get(editor) || compositionCleared) {
      return false;
    }
    try {
      const editable = ReactEditor.toDOMNode(editor, editor);
      const {
        activeElement
      } = ReactEditor.getWindow(editor).document;
      if (activeElement !== editable && !editable.contains(activeElement)) {
        return false;
      }
    } catch (_unused) {
      // Fall back to the idle check below if the editable can't be resolved.
    }
    return Date.now() - lastCompositionActivity < COMPOSITION_IDLE_TIMEOUT;
  };
  // A leaf that Slate models as empty renders as a zero-width string, which on
  // Android is a `<br>` rather than a text node. When the IME composes the
  // first character into such a leaf, the browser creates a text node for the
  // composition. Applying the pending diffs re-renders that leaf as a text
  // leaf, which unmounts the zero-width span and takes the text node the IME is
  // composing in with it, silently cancelling the composition.
  const hasPendingDiffsInEmptyLeaf = () => {
    var _EDITOR_TO_PENDING_DI;
    return !!((_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.some(({
      path
    }) => {
      try {
        return slate.Node.leaf(editor, path).text.length === 0;
      } catch (_unused2) {
        // The path may no longer resolve if the editor changed underneath us.
        return false;
      }
    }));
  };
  const hasPendingDiffsInNewLeaf = () => hasPendingDiffsInEmptyLeaf() || hasPendingDiffs() && EDITOR_TO_PENDING_INSERTION_MARKS.get(editor) !== undefined;
  const flush = () => {
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    if (actionTimeoutId) {
      clearTimeout(actionTimeoutId);
      actionTimeoutId = null;
    }
    // Defer flushing until the composition ends, so that the re-render that
    // would replace the composing text node cannot happen mid-composition.
    // Composing into a leaf that already has text is unaffected: applying the
    // diff there only updates `textContent`, so the value still updates on
    // every `compositionupdate`.
    if (!flushingDeferredDiffs && isCompositionLive() && hasPendingDiffsInNewLeaf()) {
      flushTimeoutId = setTimeout(flush, COMPOSITION_RECHECK_DELAY);
      return;
    }
    if (!hasPendingDiffs() && !hasPendingAction()) {
      applyPendingSelection();
      return;
    }
    if (!flushing) {
      flushing = true;
      setTimeout(() => flushing = false);
    }
    if (hasPendingAction()) {
      flushing = 'action';
    }
    const selectionRef = editor.selection && slate.Editor.rangeRef(editor, editor.selection, {
      affinity: 'forward'
    });
    EDITOR_TO_USER_MARKS.set(editor, editor.marks);
    debug('flush', EDITOR_TO_PENDING_ACTION.get(editor), EDITOR_TO_PENDING_DIFFS.get(editor));
    let scheduleSelectionChange = hasPendingDiffs();
    let diff;
    while (diff = (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2[0]) {
      var _EDITOR_TO_PENDING_DI2, _EDITOR_TO_PENDING_DI3;
      const pendingMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
      if (pendingMarks !== undefined) {
        EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
        editor.marks = pendingMarks;
      }
      if (pendingMarks && insertPositionHint === false) {
        insertPositionHint = null;
      }
      const range = targetRange(diff);
      if (!editor.selection || !slate.Range.equals(editor.selection, range)) {
        slate.Transforms.select(editor, range);
      }
      if (diff.diff.text) {
        slate.Editor.insertText(editor, diff.diff.text);
      } else {
        slate.Editor.deleteFragment(editor);
      }
      // Remove diff only after we have applied it to account for it when transforming
      // pending ranges.
      EDITOR_TO_PENDING_DIFFS.set(editor, (_EDITOR_TO_PENDING_DI3 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI3 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI3.filter(({
        id
      }) => id !== diff.id));
      if (!verifyDiffState(editor, diff)) {
        scheduleSelectionChange = false;
        EDITOR_TO_PENDING_ACTION.delete(editor);
        EDITOR_TO_USER_MARKS.delete(editor);
        flushing = 'action';
        // Ensure we don't restore the pending user (dom) selection
        // since the document and dom state do not match.
        EDITOR_TO_PENDING_SELECTION.delete(editor);
        scheduleOnDOMSelectionChange.cancel();
        onDOMSelectionChange.cancel();
        selectionRef === null || selectionRef === void 0 || selectionRef.unref();
      }
    }
    const selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
    if (selection && !EDITOR_TO_PENDING_SELECTION.get(editor) && (!editor.selection || !slate.Range.equals(selection, editor.selection))) {
      slate.Transforms.select(editor, selection);
    }
    if (hasPendingAction()) {
      performAction();
      return;
    }
    // COMPAT: The selectionChange event is fired after the action is performed,
    // so we have to manually schedule it to ensure we don't 'throw away' the selection
    // while rendering if we have pending changes.
    if (scheduleSelectionChange) {
      scheduleOnDOMSelectionChange();
    }
    scheduleOnDOMSelectionChange.flush();
    onDOMSelectionChange.flush();
    applyPendingSelection();
    const userMarks = EDITOR_TO_USER_MARKS.get(editor);
    EDITOR_TO_USER_MARKS.delete(editor);
    if (userMarks !== undefined && userMarks !== editor.marks) {
      editor.marks = userMarks;
      editor.onChange();
    }
  };
  const flushDeferredDiffs = () => {
    if (flushing || !isCompositionLive() || !hasPendingDiffsInNewLeaf()) {
      return;
    }
    flushingDeferredDiffs = true;
    try {
      flush();
    } finally {
      flushingDeferredDiffs = false;
    }
  };
  const handleCompositionEnd = _event => {
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
    }
    // Diffs deferred by `flush` have to be applied synchronously here. IMEs
    // that compose one syllable at a time (Hangul, kana) start the next
    // composition in the same tick as this event, so an asynchronous render
    // would replace the text node that composition has already started in.
    if (hasPendingDiffsInNewLeaf() && !flushing) {
      ReactDOM__default.default.flushSync(() => {
        IS_COMPOSING.set(editor, false);
        flush();
      });
      updatePlaceholderVisibility();
      return;
    }
    compositionEndTimeoutId = setTimeout(() => {
      IS_COMPOSING.set(editor, false);
      flush();
      if (compositionCleared) {
        var _EDITOR_TO_FORCE_REND2;
        // A cancelled composition can take the empty leaf's text node with
        // it. A forced render lets RestoreDOM put the leaf's DOM back, so the
        // next composition starts from a clean state instead of a bare <br>.
        (_EDITOR_TO_FORCE_REND2 = EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND2 === void 0 || _EDITOR_TO_FORCE_REND2();
      }
      updatePlaceholderVisibility();
    }, RESOLVE_DELAY);
  };
  const handleCompositionStart = _event => {
    IS_COMPOSING.set(editor, true);
    lastCompositionActivity = Date.now();
    compositionCleared = false;
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
      compositionEndTimeoutId = null;
    }
  };
  const updatePlaceholderVisibility = (forceHide = false) => {
    const placeholderElement = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);
    if (!placeholderElement) {
      return;
    }
    if (hasPendingDiffs() || forceHide) {
      placeholderElement.style.display = 'none';
      return;
    }
    placeholderElement.style.removeProperty('display');
  };
  const storeDiff = (path, diff) => {
    var _EDITOR_TO_PENDING_DI4;
    const pendingDiffs = (_EDITOR_TO_PENDING_DI4 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 ? _EDITOR_TO_PENDING_DI4 : [];
    EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
    const target = slate.Node.leaf(editor, path);
    const idx = pendingDiffs.findIndex(change => slate.Path.equals(change.path, path));
    if (idx < 0) {
      const normalized = normalizeStringDiff(target.text, diff);
      if (normalized) {
        pendingDiffs.push({
          path,
          diff,
          id: idCounter++
        });
      }
      updatePlaceholderVisibility();
      return;
    }
    const merged = mergeStringDiffs(target.text, pendingDiffs[idx].diff, diff);
    if (!merged) {
      pendingDiffs.splice(idx, 1);
      updatePlaceholderVisibility();
      return;
    }
    pendingDiffs[idx] = _objectSpread$8(_objectSpread$8({}, pendingDiffs[idx]), {}, {
      diff: merged
    });
  };
  const scheduleAction = (run, {
    at
  } = {}) => {
    insertPositionHint = false;
    EDITOR_TO_PENDING_SELECTION.delete(editor);
    scheduleOnDOMSelectionChange.cancel();
    onDOMSelectionChange.cancel();
    if (hasPendingAction()) {
      flush();
    }
    if (actionTimeoutId) {
      clearTimeout(actionTimeoutId);
    }
    EDITOR_TO_PENDING_ACTION.set(editor, {
      at,
      run
    });
    // COMPAT: When deleting before a non-contenteditable element chrome only fires a beforeinput,
    // (no input) and doesn't perform any dom mutations. Without a flush timeout we would never flush
    // in this case and thus never actually perform the action.
    actionTimeoutId = setTimeout(flush);
  };
  const handleDOMBeforeInput = event => {
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    const isNodeMapDirty = IS_NODE_MAP_DIRTY.get(editor);
    const {
      inputType: type
    } = event;
    const continuesFirefoxInsert = IS_FIREFOX && type === 'insertText' && Date.now() - lastInsertText < RESOLVE_DELAY;
    if (type === 'insertText') {
      lastInsertText = Date.now();
    }
    if (type === 'insertCompositionText' || type === 'deleteCompositionText') {
      lastCompositionActivity = Date.now();
      if (event.data) {
        compositionCleared = false;
      } else {
        // The IME threw away what it was composing. The deferred text never
        // reached the value, so the value is already in the desired state -
        // drop the deferral instead of applying and re-deleting it, which
        // would churn the DOM mid-composition and can make Android close the
        // keyboard.
        compositionCleared = true;
        const deferredDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
        if (deferredDiffs !== null && deferredDiffs !== void 0 && deferredDiffs.length) {
          const allInEmptyLeaves = deferredDiffs.every(({
            path
          }) => {
            try {
              return slate.Node.leaf(editor, path).text.length === 0;
            } catch (_unused3) {
              return false;
            }
          });
          if (allInEmptyLeaves) {
            EDITOR_TO_PENDING_DIFFS.set(editor, []);
            EDITOR_TO_PENDING_SELECTION.delete(editor);
          }
        }
      }
    }
    let targetRange = null;
    const data = event.dataTransfer || event.data || undefined;
    if (insertPositionHint !== false && type !== 'insertText' && type !== 'insertCompositionText') {
      insertPositionHint = false;
    }
    let [nativeTargetRange] = event.getTargetRanges();
    if (nativeTargetRange && !isNodeMapDirty) {
      targetRange = ReactEditor.toSlateRange(editor, nativeTargetRange, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    // COMPAT: SelectionChange event is fired after the action is performed, so we
    // have to manually get the selection here to ensure it's up-to-date.
    const window = ReactEditor.getWindow(editor);
    const domSelection = window.getSelection();
    if (!targetRange && domSelection && !isNodeMapDirty) {
      nativeTargetRange = domSelection;
      targetRange = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    targetRange = targetRange !== null && targetRange !== void 0 ? targetRange : editor.selection;
    if (!targetRange) {
      return;
    }
    // By default, the input manager tries to store text diffs so that we can
    // defer flushing them at a later point in time. We don't want to flush
    // for every input event as this can be expensive. However, there are some
    // scenarios where we cannot safely store the text diff and must instead
    // schedule an action to let Slate normalize the editor state.
    let canStoreDiff = true;
    if (type.startsWith('delete')) {
      const direction = type.endsWith('Backward') ? 'backward' : 'forward';
      let [start, end] = slate.Range.edges(targetRange);
      let [leaf, path] = slate.Editor.leaf(editor, start.path);
      if (slate.Range.isExpanded(targetRange)) {
        if (leaf.text.length === start.offset && end.offset === 0) {
          const next = slate.Editor.next(editor, {
            at: start.path,
            match: slate.Node.isText
          });
          if (next && slate.Path.equals(next[1], end.path)) {
            // when deleting a linebreak, targetRange will span across the break (ie start in the node before and end in the node after)
            // if the node before is empty, this will look like a hanging range and get unhung later--which will take the break we want to remove out of the range
            // so to avoid this we collapse the target range to default to single character deletion
            if (direction === 'backward') {
              targetRange = {
                anchor: end,
                focus: end
              };
              start = end;
              [leaf, path] = next;
            } else {
              targetRange = {
                anchor: start,
                focus: start
              };
              end = start;
            }
          }
        }
      }
      const diff = {
        text: '',
        start: start.offset,
        end: end.offset
      };
      const pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
      const relevantPendingDiffs = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(change => slate.Path.equals(change.path, path));
      const diffs = relevantPendingDiffs ? [relevantPendingDiffs.diff, diff] : [diff];
      const text = applyStringDiff(leaf.text, ...diffs);
      if (text.length === 0) {
        // Text leaf will be removed, so we need to schedule an
        // action to remove it so that Slate can normalize instead
        // of storing as a diff
        canStoreDiff = false;
      }
      if (slate.Range.isExpanded(targetRange)) {
        if (canStoreDiff && slate.Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
          const point = {
            path: targetRange.anchor.path,
            offset: start.offset
          };
          const range = slate.Editor.range(editor, point, point);
          handleUserSelect(range);
          storeDiff(targetRange.anchor.path, {
            text: '',
            end: end.offset,
            start: start.offset
          });
          if (type === 'deleteContentBackward') {
            scheduleFlush();
          }
          return;
        }
        return scheduleAction(() => slate.Editor.deleteFragment(editor, {
          direction
        }), {
          at: targetRange
        });
      }
    }
    switch (type) {
      case 'deleteByComposition':
      case 'deleteByCut':
      case 'deleteByDrag':
        {
          return scheduleAction(() => slate.Editor.deleteFragment(editor), {
            at: targetRange
          });
        }
      case 'deleteContent':
      case 'deleteContentForward':
        {
          const {
            anchor
          } = targetRange;
          if (canStoreDiff && slate.Range.isCollapsed(targetRange)) {
            const targetNode = slate.Node.leaf(editor, anchor.path);
            if (anchor.offset < targetNode.text.length) {
              return storeDiff(anchor.path, {
                text: '',
                start: anchor.offset,
                end: anchor.offset + 1
              });
            }
          }
          return scheduleAction(() => slate.Editor.deleteForward(editor), {
            at: targetRange
          });
        }
      case 'deleteContentBackward':
        {
          var _nativeTargetRange;
          const {
            anchor
          } = targetRange;
          // If we have a mismatch between the native and slate selection being collapsed
          // we are most likely deleting a zero-width placeholder and thus should perform it
          // as an action to ensure correct behavior (mostly happens with mark placeholders)
          const nativeCollapsed = isDOMSelection(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);
          if (canStoreDiff && nativeCollapsed && slate.Range.isCollapsed(targetRange) && anchor.offset > 0) {
            storeDiff(anchor.path, {
              text: '',
              start: anchor.offset - 1,
              end: anchor.offset
            });
            scheduleFlush();
            return;
          }
          return scheduleAction(() => slate.Editor.deleteBackward(editor), {
            at: targetRange
          });
        }
      case 'deleteEntireSoftLine':
        {
          return scheduleAction(() => {
            slate.Editor.deleteBackward(editor, {
              unit: 'line'
            });
            slate.Editor.deleteForward(editor, {
              unit: 'line'
            });
          }, {
            at: targetRange
          });
        }
      case 'deleteHardLineBackward':
        {
          return scheduleAction(() => slate.Editor.deleteBackward(editor, {
            unit: 'block'
          }), {
            at: targetRange
          });
        }
      case 'deleteSoftLineBackward':
        {
          return scheduleAction(() => slate.Editor.deleteBackward(editor, {
            unit: 'line'
          }), {
            at: targetRange
          });
        }
      case 'deleteHardLineForward':
        {
          return scheduleAction(() => slate.Editor.deleteForward(editor, {
            unit: 'block'
          }), {
            at: targetRange
          });
        }
      case 'deleteSoftLineForward':
        {
          return scheduleAction(() => slate.Editor.deleteForward(editor, {
            unit: 'line'
          }), {
            at: targetRange
          });
        }
      case 'deleteWordBackward':
        {
          return scheduleAction(() => slate.Editor.deleteBackward(editor, {
            unit: 'word'
          }), {
            at: targetRange
          });
        }
      case 'deleteWordForward':
        {
          return scheduleAction(() => slate.Editor.deleteForward(editor, {
            unit: 'word'
          }), {
            at: targetRange
          });
        }
      case 'insertLineBreak':
        {
          return scheduleAction(() => slate.Editor.insertSoftBreak(editor), {
            at: targetRange
          });
        }
      case 'insertParagraph':
        {
          return scheduleAction(() => slate.Editor.insertBreak(editor), {
            at: targetRange
          });
        }
      case 'insertCompositionText':
      case 'deleteCompositionText':
      case 'insertFromComposition':
      case 'insertFromDrop':
      case 'insertFromPaste':
      case 'insertFromYank':
      case 'insertReplacementText':
      case 'insertText':
        {
          if (isDataTransfer(data)) {
            return scheduleAction(() => ReactEditor.insertData(editor, data), {
              at: targetRange
            });
          }
          let text = data !== null && data !== void 0 ? data : '';
          // COMPAT: If we are writing inside a placeholder, the ime inserts the text inside
          // the placeholder itself and thus includes the zero-width space inside edit events.
          if (EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
            text = text.replace('\uFEFF', '');
          }
          if (continuesFirefoxInsert && editor.selection && !slate.Range.equals(targetRange, editor.selection)) {
            event.preventDefault();
            return scheduleAction(() => slate.Editor.insertText(editor, text));
          }
          // Pastes from the Android clipboard will generate `insertText` events.
          // If the copied text contains any newlines, Android will append an
          // extra newline to the end of the copied text.
          if (type === 'insertText' && /.*\n.*\n$/.test(text)) {
            text = text.slice(0, -1);
          }
          // If the text includes a newline, split it at newlines and paste each component
          // string, with soft breaks in between each.
          if (text.includes('\n')) {
            return scheduleAction(() => {
              const parts = text.split('\n');
              parts.forEach((line, i) => {
                if (line) {
                  slate.Editor.insertText(editor, line);
                }
                if (i !== parts.length - 1) {
                  slate.Editor.insertSoftBreak(editor);
                }
              });
            }, {
              at: targetRange
            });
          }
          if (type === 'insertText' && !ReactEditor.isComposing(editor) && slate.Range.isCollapsed(targetRange) && typeof slate.Editor.insertionPoint === 'function' && !slate.Point.equals(slate.Editor.insertionPoint(editor, targetRange.anchor), targetRange.anchor)) {
            var _nativeTargetRange2;
            const node = isDOMSelection(nativeTargetRange) ? nativeTargetRange.anchorNode : (_nativeTargetRange2 = nativeTargetRange) === null || _nativeTargetRange2 === void 0 ? void 0 : _nativeTargetRange2.startContainer;
            const snapshot = isDOMNode(node) && node.nodeType === 3 ? {
              node,
              text: node.textContent
            } : null;
            event.preventDefault();
            return scheduleAction(() => {
              if (snapshot && snapshot.node.isConnected && snapshot.node.textContent !== snapshot.text) {
                snapshot.node.textContent = snapshot.text;
              }
              slate.Editor.insertText(editor, text);
            }, {
              at: targetRange
            });
          }
          if (slate.Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
            const [start, end] = slate.Range.edges(targetRange);
            const diff = {
              start: start.offset,
              end: end.offset,
              text
            };
            // COMPAT: Swiftkey has a weird bug where the target range of the 2nd word
            // inserted after a mark placeholder is inserted with an anchor offset off by 1.
            // So writing 'some text' will result in 'some ttext'. Luckily all 'normal' insert
            // text events are fired with the correct target ranges, only the final 'insertComposition'
            // isn't, so we can adjust the target range start offset if we are confident this is the
            // swiftkey insert causing the issue.
            if (text && insertPositionHint && type === 'insertCompositionText') {
              const hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
              const diffPosition = diff.start + diff.text.search(/\S|$/);
              if (diffPosition === hintPosition + 1 && diff.end === insertPositionHint.start + insertPositionHint.text.length) {
                diff.start -= 1;
                insertPositionHint = null;
                scheduleFlush();
              } else {
                insertPositionHint = false;
              }
            } else if (type === 'insertText') {
              if (insertPositionHint === null) {
                insertPositionHint = diff;
              } else if (insertPositionHint && slate.Range.isCollapsed(targetRange) && insertPositionHint.end + insertPositionHint.text.length === start.offset) {
                insertPositionHint = _objectSpread$8(_objectSpread$8({}, insertPositionHint), {}, {
                  text: insertPositionHint.text + text
                });
              } else {
                insertPositionHint = false;
              }
            } else {
              insertPositionHint = false;
            }
            if (canStoreDiff) {
              const currentSelection = editor.selection;
              storeDiff(start.path, diff);
              if (currentSelection) {
                const newPoint = {
                  path: start.path,
                  offset: start.offset + text.length
                };
                scheduleAction(() => {}, {
                  at: newPoint
                });
              }
              return;
            }
          }
          return scheduleAction(() => slate.Editor.insertText(editor, text), {
            at: targetRange
          });
        }
    }
  };
  const hasPendingAction = () => {
    return !!EDITOR_TO_PENDING_ACTION.get(editor);
  };
  const hasPendingDiffs = () => {
    var _EDITOR_TO_PENDING_DI5;
    return !!((_EDITOR_TO_PENDING_DI5 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI5 !== void 0 && _EDITOR_TO_PENDING_DI5.length);
  };
  const hasPendingChanges = () => {
    return hasPendingAction() || hasPendingDiffs();
  };
  const isFlushing = () => {
    return flushing;
  };
  const handleUserSelect = range => {
    EDITOR_TO_PENDING_SELECTION.set(editor, range);
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    const {
      selection
    } = editor;
    if (!range) {
      return;
    }
    const pathChanged = !selection || !slate.Path.equals(selection.anchor.path, range.anchor.path);
    const parentPathChanged = !selection || !slate.Path.equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));
    if (pathChanged && insertPositionHint || parentPathChanged) {
      insertPositionHint = false;
    }
    if (pathChanged || hasPendingDiffs()) {
      flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
    }
  };
  const handleInput = () => {
    if (hasPendingAction() || !hasPendingDiffs()) {
      flush();
    }
  };
  const handleKeyDown = _ => {
    // COMPAT: Swiftkey closes the keyboard when typing inside a empty node
    // directly next to a non-contenteditable element (= the placeholder).
    // The only event fired soon enough for us to allow hiding the placeholder
    // without swiftkey picking it up is the keydown event, so we have to hide it
    // here. See https://github.com/ianstormtaylor/slate/pull/4988#issuecomment-1201050535
    if (!hasPendingDiffs()) {
      updatePlaceholderVisibility(true);
      setTimeout(updatePlaceholderVisibility);
    }
  };
  const scheduleFlush = () => {
    if (!hasPendingAction()) {
      if (actionTimeoutId) {
        clearTimeout(actionTimeoutId);
      }
      actionTimeoutId = setTimeout(flush);
    }
  };
  const handleDomMutations = mutations => {
    var _EDITOR_TO_FORCE_REND3;
    if (hasPendingDiffs()) {
      return;
    }
    if (!mutations.some(mutation => isTrackedMutation(editor, mutation, mutations))) {
      return;
    }
    if (hasPendingAction()) {
      hasUnrenderedMutations = true;
      return;
    }
    // Cause a re-render to restore the dom state if we encounter tracked mutations without
    // a corresponding pending action.
    (_EDITOR_TO_FORCE_REND3 = EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND3 === void 0 || _EDITOR_TO_FORCE_REND3();
  };
  return {
    flush,
    flushDeferredDiffs,
    scheduleFlush,
    hasPendingDiffs,
    hasPendingAction,
    hasPendingChanges,
    isFlushing,
    handleUserSelect,
    handleCompositionEnd,
    handleCompositionStart,
    handleDOMBeforeInput,
    handleKeyDown,
    handleDomMutations,
    handleInput
  };
}

function useIsMounted() {
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return isMountedRef.current;
}

/**
 * Prevent warning on SSR by falling back to useEffect when DOM isn't available
 */
const useIsomorphicLayoutEffect = CAN_USE_DOM ? React.useLayoutEffect : React.useEffect;

function useMutationObserver(node, callback, options) {
  // ПРОПАТЧЕНО (Saby): на сервере (SSR) MutationObserver нет.
  // https://online.sbis.ru/opendoc.html?guid=59c88f2c-2480-44d9-a799-91f809ffb019&client=3
  const [mutationObserver] = React.useState(() => typeof MutationObserver !== 'undefined' ? new MutationObserver(callback) : null);
  useIsomorphicLayoutEffect(() => {
    // Discard mutations caused during render phase. This works due to react calling
    // useLayoutEffect synchronously after the render phase before the next tick.
    mutationObserver === null || mutationObserver === void 0 || mutationObserver.takeRecords();
  });
  React.useEffect(() => {
    if (!mutationObserver) {
      return;
    }
    if (!node.current) {
      throw new Error('Failed to attach MutationObserver, `node` is undefined');
    }
    mutationObserver.observe(node.current, options);
    return () => mutationObserver.disconnect();
  }, [mutationObserver, node, options]);
}

const _excluded$2 = ["node"];
function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const MUTATION_OBSERVER_CONFIG$1 = {
  subtree: true,
  childList: true,
  characterData: true
};
const useAndroidInputManager = !IS_ANDROID ? () => null : _ref => {
  let {
      node
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded$2);
  if (!IS_ANDROID) {
    return null;
  }
  const editor = useSlateStatic();
  const isMounted = useIsMounted();
  const [inputManager] = React.useState(() => createAndroidInputManager(_objectSpread$7({
    editor
  }, options)));
  useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG$1);
  EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);
  EDITOR_TO_FLUSH_DEFERRED_DIFFS.set(editor, inputManager.flushDeferredDiffs);
  if (isMounted) {
    inputManager.flush();
  }
  return inputManager;
};

function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Leaf content strings.
 */
const String$1 = props => {
  const {
    isLast,
    leaf,
    parent,
    text
  } = props;
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, text);
  const parentPath = slate.Path.parent(path);
  const isMarkPlaceholder = Boolean(leaf[MARK_PLACEHOLDER_SYMBOL]);
  // COMPAT: Render text inside void nodes with a zero-width space.
  // So the node can contain selection but the text is not visible.
  if (editor.isVoid(parent)) {
    return /*#__PURE__*/React__default.default.createElement(ZeroWidthString, {
      length: slate.Node.string(parent).length
    });
  }
  // COMPAT: If this is the last text node in an empty block, render a zero-
  // width space that will convert into a line break when copying and pasting
  // to support expected plain text.
  if (leaf.text === '' && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && slate.Editor.string(editor, parentPath) === '') {
    return /*#__PURE__*/React__default.default.createElement(ZeroWidthString, {
      isLineBreak: true,
      isMarkPlaceholder: isMarkPlaceholder
    });
  }
  // COMPAT: If the text is empty, it's because it's on the edge of an inline
  // node, so we render a zero-width space so that the selection can be
  // inserted next to it still.
  if (leaf.text === '') {
    return /*#__PURE__*/React__default.default.createElement(ZeroWidthString, {
      isMarkPlaceholder: isMarkPlaceholder
    });
  }
  // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
  // so we need to add an extra trailing new lines to prevent that.
  if (isLast && leaf.text.slice(-1) === '\n') {
    return /*#__PURE__*/React__default.default.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }
  return /*#__PURE__*/React__default.default.createElement(TextString, {
    text: leaf.text
  });
};
/**
 * Leaf strings with text in them.
 */
const TextString = props => {
  const {
    text,
    isTrailing = false
  } = props;
  const editor = useSlateStatic();
  const ref = React.useRef(null);
  const getTextContent = () => {
    return `${text !== null && text !== void 0 ? text : ''}${isTrailing ? '\n' : ''}`;
  };
  const [initialText] = React.useState(getTextContent);
  // This is the actual text rendering boundary where we interface with the DOM
  // The text is not rendered as part of the virtual DOM, as since we handle basic character insertions natively,
  // updating the DOM is not a one way dataflow anymore. What we need here is not reconciliation and diffing
  // with previous version of the virtual DOM, but rather diffing with the actual DOM element, and replace the DOM <span> content
  // exactly if and only if its current content does not match our current virtual DOM.
  // Otherwise the DOM TextNode would always be replaced by React as the user types, which interferes with native text features,
  // eg makes native spellcheck opt out from checking the text node.
  // useLayoutEffect: updating our span before browser paint
  useIsomorphicLayoutEffect(() => {
    var _ref$current2, _ref$current3;
    // null coalescing text to make sure we're not outputing "null" as a string in the extreme case it is nullish at runtime
    const textWithTrailing = getTextContent();
    if (ref.current && ref.current.textContent !== textWithTrailing) {
      // On Android the DOM intentionally runs ahead of the value while the IME
      // composes, since input is buffered as pending diffs. Writing
      // `textContent` here would replace the text node the composition lives in
      // and cancel it; the pending diffs reconcile this span when the
      // composition ends.
      if (IS_ANDROID && IS_COMPOSING.get(editor)) {
        var _ReactEditor$getWindo;
        const composingNode = (_ReactEditor$getWindo = ReactEditor.getWindow(editor).getSelection()) === null || _ReactEditor$getWindo === void 0 ? void 0 : _ReactEditor$getWindo.anchorNode;
        if (composingNode && ref.current.contains(composingNode)) {
          return;
        }
      }
      ref.current.textContent = textWithTrailing;
    }
    if (IS_FIREFOX) {
      var _ref$current;
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.toggleAttribute('data-slate-trailing', isTrailing);
    }
    const textNode = (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.firstChild;
    if (IS_FIREFOX && isTrailing && ((_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.childNodes.length) === 1 && (textNode === null || textNode === void 0 ? void 0 : textNode.nodeType) === 3) {
      textNode.splitText(text.length);
    }
    // intentionally not specifying dependencies, so that this effect runs on every render
    // as this effectively replaces "specifying the text in the virtual DOM under the <span> below" on each render
  });
  // We intentionally render a memoized <span> that only receives the initial text content when the component is mounted.
  // We defer to the layout effect above to update the `textContent` of the span element when needed.
  return /*#__PURE__*/React__default.default.createElement(MemoizedText$1, {
    ref: ref
  }, initialText);
};
const MemoizedText$1 = /*#__PURE__*/React.memo(/*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React__default.default.createElement("span", {
    "data-slate-string": true,
    ref: ref
  }, props.children);
}));
/**
 * Leaf strings without text, render as zero-width strings.
 */
const ZeroWidthString = props => {
  const {
    length = 0,
    isLineBreak = false,
    isMarkPlaceholder = false
  } = props;
  const attributes = {
    'data-slate-zero-width': isLineBreak ? 'n' : 'z',
    'data-slate-length': length
  };
  if (isMarkPlaceholder) {
    attributes['data-slate-mark-placeholder'] = true;
  }
  // FIXME: Inserting the \uFEFF on iOS breaks capitalization at the start of an
  // empty editor (https://github.com/ianstormtaylor/slate/issues/5199).
  //
  // However, not inserting the \uFEFF on iOS causes the editor to crash when
  // inserting any text using an IME at the start of a block. This appears to
  // be because accepting an IME suggestion when at the start of a block (no
  // preceding \uFEFF) removes one or more DOM elements that `toSlateRange`
  // depends on. (https://github.com/ianstormtaylor/slate/issues/5703)
  // A leaf with no text node at all forces the IME to create one when the
  // first character is composed there, and no re-render can then touch the
  // leaf without cancelling the composition. Rendering the zero-width space on
  // Android too gives the composition a React-owned text node to live in; the
  // wrapper keeps its data-slate-zero-width attributes, so selection mapping
  // is unchanged.
  //
  // ПРОПАТЧЕНО (Saby): на мобильных (Android и iOS) перевод строки без нулевого символа —
  // иначе на iPad при открытой клавиатуре первая буква строчная (upstream #5199).
  // Платформа — из Env.detection: IS_ANDROID/IS_IOS ошибаются в мобильных webview,
  // и едет гидратация.
  // https://online.sbis.ru/opendoc.html?guid=1a6464ba-86d9-460f-b1f5-f3b32320c97b&client=3
  // https://online.sbis.ru/opendoc.html?guid=019ef9e0-ded7-7ca6-9cd0-8864d45d487e&client=3
  return /*#__PURE__*/React__default.default.createElement("span", _objectSpread$6({}, attributes), !(Env.detection.isMobileAndroid || Env.detection.isMobileIOS) || !isLineBreak ? '\uFEFF' : null, isLineBreak ? /*#__PURE__*/React__default.default.createElement("br", null) : null);
};

const hasSameProperties = (prev, next) => {
  const prevKeys = Object.keys(prev).filter(key => key !== 'children');
  const nextKeys = Object.keys(next).filter(key => key !== 'children');
  return prevKeys.length === nextKeys.length && prevKeys.every(key => key in next && prev[key] === next[key]);
};
const isLastChild = (parent, text) => parent.children[parent.children.length - 1] === text;
const isTextParentEquivalent = (prevParent, nextParent, prevText, nextText) => {
  if (prevParent === nextParent) {
    return true;
  }
  return hasSameProperties(prevParent, nextParent) && isLastChild(prevParent, prevText) === isLastChild(nextParent, nextText) && (nextText.text !== '' || slate.Node.string(prevParent) === '' === (slate.Node.string(nextParent) === ''));
};

function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// Delay the placeholder on Android to prevent the keyboard from closing.
// (https://github.com/ianstormtaylor/slate/pull/5368)
const PLACEHOLDER_DELAY = IS_ANDROID ? 300 : 0;
function disconnectPlaceholderResizeObserver(placeholderResizeObserver, releaseObserver) {
  if (placeholderResizeObserver.current) {
    placeholderResizeObserver.current.disconnect();
    if (releaseObserver) {
      placeholderResizeObserver.current = null;
    }
  }
}
function clearTimeoutRef(timeoutRef) {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }
}
const defaultRenderLeaf = props => /*#__PURE__*/React__default.default.createElement(DefaultLeaf, _objectSpread$5({}, props));
/**
 * Individual leaves in a text node with unique formatting.
 */
const Leaf = props => {
  const {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = defaultRenderLeaf,
    leafPosition
  } = props;
  const editor = useSlateStatic();
  const placeholderResizeObserver = React.useRef(null);
  const placeholderRef = React.useRef(null);
  const [showPlaceholder, setShowPlaceholder] = React.useState(false);
  const showPlaceholderTimeoutRef = React.useRef(null);
  const callbackPlaceholderRef = React.useCallback(placeholderEl => {
    disconnectPlaceholderResizeObserver(placeholderResizeObserver, placeholderEl == null);
    if (placeholderEl == null) {
      var _leaf$onPlaceholderRe;
      EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
      (_leaf$onPlaceholderRe = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe === void 0 || _leaf$onPlaceholderRe.call(leaf, null);
    } else {
      EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
      if (!placeholderResizeObserver.current) {
        // Create a new observer and observe the placeholder element.
        const ResizeObserver$1 = window.ResizeObserver || ResizeObserver;
        placeholderResizeObserver.current = new ResizeObserver$1(() => {
          var _leaf$onPlaceholderRe2;
          (_leaf$onPlaceholderRe2 = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe2 === void 0 || _leaf$onPlaceholderRe2.call(leaf, placeholderEl);
        });
      }
      placeholderResizeObserver.current.observe(placeholderEl);
      placeholderRef.current = placeholderEl;
    }
  }, [placeholderRef, leaf, editor]);
  let children = /*#__PURE__*/React__default.default.createElement(String$1, {
    isLast: isLast,
    leaf: leaf,
    parent: parent,
    text: text
  });
  const leafIsPlaceholder = Boolean(leaf[PLACEHOLDER_SYMBOL]);
  React.useEffect(() => {
    if (leafIsPlaceholder) {
      if (!showPlaceholderTimeoutRef.current) {
        // Delay the placeholder, so it will not render in a selection
        showPlaceholderTimeoutRef.current = setTimeout(() => {
          setShowPlaceholder(true);
          showPlaceholderTimeoutRef.current = null;
        }, PLACEHOLDER_DELAY);
      }
    } else {
      clearTimeoutRef(showPlaceholderTimeoutRef);
      setShowPlaceholder(false);
    }
    return () => clearTimeoutRef(showPlaceholderTimeoutRef);
  }, [leafIsPlaceholder, setShowPlaceholder]);
  if (leafIsPlaceholder && showPlaceholder) {
    const placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        'data-slate-placeholder': true,
        'aria-hidden': true,
        style: {
          position: 'absolute',
          top: 0,
          pointerEvents: 'none',
          width: '100%',
          maxWidth: '100%',
          display: 'block',
          opacity: '0.333',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          textDecoration: 'none',
          // Fixes https://github.com/udecode/plate/issues/2315
          WebkitUserModify: IS_WEBKIT ? 'inherit' : undefined
        },
        contentEditable: false,
        ref: callbackPlaceholderRef
      }
    };
    children = /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, children, renderPlaceholder(placeholderProps));
  }
  // COMPAT: Having the `data-` attributes on these leaf elements ensures that
  // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
  // contenteditable behaviors. (2019/05/08)
  const attributes = {
    'data-slate-leaf': true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text,
    leafPosition
  });
};
const MemoizedLeaf = /*#__PURE__*/React__default.default.memo(Leaf, (prev, next) => {
  return isTextParentEquivalent(prev.parent, next.parent, prev.text, next.text) && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && slate.Text.equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});
const DefaultLeaf = props => {
  const {
    attributes,
    children
  } = props;
  return /*#__PURE__*/React__default.default.createElement("span", _objectSpread$5({}, attributes), children);
};

/**
 * Create a selector that updates when an `update` function is called, and
 * which only causes the component to render when the result of `selector`
 * differs from the previous result according to `equalityFn`.
 *
 * If `selector` is memoized using `useCallback`, then it will only be called
 * when it changes or when `update` is called. Otherwise, `selector` will be
 * called every time the component renders.
 *
 * @example
 * const [state, update] = useGenericSelector(selector, equalityFn)
 *
 * useIsomorphicLayoutEffect(() => {
 *   return addEventListener(update)
 * }, [addEventListener, update])
 *
 * return state
 */
function useGenericSelector(selector, equalityFn) {
  const [, forceRender] = React.useReducer(s => s + 1, 0);
  const latestSubscriptionCallbackError = React.useRef(undefined);
  const latestSelector = React.useRef(() => null);
  const latestSelectedState = React.useRef(null);
  let selectedState;
  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      const selectorResult = selector();
      if (equalityFn(latestSelectedState.current, selectorResult)) {
        selectedState = latestSelectedState.current;
      } else {
        selectedState = selectorResult;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current && isError(err)) {
      err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
    }
    throw err;
  }
  latestSelector.current = selector;
  latestSelectedState.current = selectedState;
  latestSubscriptionCallbackError.current = undefined;
  const update = React.useCallback(() => {
    try {
      const newSelectedState = latestSelector.current();
      if (equalityFn(latestSelectedState.current, newSelectedState)) {
        return;
      }
      latestSelectedState.current = newSelectedState;
    } catch (err) {
      // we ignore all errors here, since when the component
      // is re-rendered, the selectors are called again, and
      // will throw again, if neither props nor store state
      // changed
      if (err instanceof Error) {
        latestSubscriptionCallbackError.current = err;
      } else {
        latestSubscriptionCallbackError.current = new Error(String(err));
      }
    }
    forceRender();
    // don't rerender on equalityFn change since we want to be able to define it inline
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [selectedState, update];
}
function isError(error) {
  return error instanceof Error;
}

/**
 * A React context for sharing the `decorate` prop of the editable and
 * subscribing to changes on this prop.
 */
const DecorateContext = /*#__PURE__*/React.createContext({});
const useDecorations = (node, parentDecorations) => {
  const editor = useSlateStatic();
  const {
    decorate,
    addEventListener
  } = React.useContext(DecorateContext);
  // Not memoized since we want nodes to be decorated on each render
  const selector = () => {
    const path = ReactEditor.findPath(editor, node);
    const decorations = decorate([node, path]);
    if (slate.Node.isText(node)) {
      const range = slate.Editor.range(editor, path);
      return decorations.flatMap(decoration => {
        const intersection = slate.Range.intersection(decoration, range);
        return intersection ? [intersection] : [];
      });
    }
    return decorations;
  };
  const equalityFn = slate.Node.isText(node) ? isTextDecorationsEqual : isElementDecorationsEqual;
  const [decorations, update] = useGenericSelector(selector, equalityFn);
  useIsomorphicLayoutEffect(() => {
    const unsubscribe = addEventListener(update);
    update();
    return unsubscribe;
  }, [addEventListener, update]);
  return React.useMemo(() => [...decorations, ...parentDecorations], [decorations, parentDecorations]);
};
const useDecorateContext = decorateProp => {
  const [, forceUpdate] = React.useReducer(s => s + 1, 0);
  const eventListeners = React.useRef(new Set());
  const hasMounted = React.useRef(false);
  const latestDecorate = React.useRef(decorateProp);
  useIsomorphicLayoutEffect(() => {
    latestDecorate.current = decorateProp;
    eventListeners.current.forEach(listener => listener());
    // Skip the forced re-render on the initial mount: there is no committed
    // DOM to restore the selection against yet, and forcing an extra render
    // here breaks contenteditable input in Firefox. Only later decoration
    // changes need to re-render Editable in the same batch as the text
    // components notified above, so its selection-restoration layout effect
    // runs after the decoration-induced DOM changes are committed. Without
    // that, the text components restructure the DOM in a separate pass where
    // Editable's layout effect never fires, potentially leaving the caret at
    // a wrong position.
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    forceUpdate();
  }, [decorateProp]);
  const decorate = React.useCallback(entry => latestDecorate.current(entry), []);
  const addEventListener = React.useCallback(callback => {
    eventListeners.current.add(callback);
    return () => {
      eventListeners.current.delete(callback);
    };
  }, []);
  return React.useMemo(() => ({
    decorate,
    addEventListener
  }), [decorate, addEventListener]);
};

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const defaultRenderText = props => /*#__PURE__*/React__default.default.createElement(DefaultText, _objectSpread$4({}, props));
/**
 * Text.
 */
const Text = props => {
  const {
    decorations: parentDecorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    renderText = defaultRenderText,
    text
  } = props;
  const editor = useSlateStatic();
  const ref = React.useRef(null);
  const decorations = useDecorations(text, parentDecorations);
  const decoratedLeaves = slate.Text.decorations(text, decorations);
  const key = ReactEditor.findKey(editor, text);
  const children = [];
  for (let i = 0; i < decoratedLeaves.length; i++) {
    const {
      leaf,
      position
    } = decoratedLeaves[i];
    children.push(/*#__PURE__*/React__default.default.createElement(MemoizedLeaf, {
      isLast: isLast && i === decoratedLeaves.length - 1,
      key: `${key.id}-${i}`,
      renderPlaceholder: renderPlaceholder,
      leaf: leaf,
      leafPosition: position,
      text: text,
      parent: parent,
      renderLeaf: renderLeaf
    }));
  }
  // Update element-related weak maps with the DOM element ref.
  const callbackRef = React.useCallback(span => {
    const KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (span) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, span);
      NODE_TO_ELEMENT.set(text, span);
      ELEMENT_TO_NODE.set(span, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
      if (ref.current) {
        ELEMENT_TO_NODE.delete(ref.current);
      }
    }
    ref.current = span;
  }, [ref, editor, key, text]);
  const attributes = {
    'data-slate-node': 'text',
    ref: callbackRef
  };
  return renderText({
    text,
    children,
    attributes
  });
};
const MemoizedText = /*#__PURE__*/React__default.default.memo(Text, (prev, next) => {
  return isTextParentEquivalent(prev.parent, next.parent, prev.text, next.text) && next.isLast === prev.isLast && next.renderText === prev.renderText && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && isTextDecorationsEqual(next.decorations, prev.decorations);
});
const DefaultText = props => {
  const {
    attributes,
    children
  } = props;
  return /*#__PURE__*/React__default.default.createElement("span", _objectSpread$4({}, attributes), children);
};

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const findSiblingDirection = siblings => {
  for (const sibling of siblings) {
    const dir = getDirection(slate.Node.string(sibling));
    if (dir !== 'neutral') {
      return dir;
    }
  }
};
const getEmptyBlockDirection = element => {
  var _findSiblingDirection;
  const parent = NODE_TO_PARENT.get(element);
  const index = NODE_TO_INDEX.get(element);
  if (!parent || index === undefined) {
    return;
  }
  const before = parent.children.slice(0, index).reverse();
  const after = parent.children.slice(index + 1);
  return (_findSiblingDirection = findSiblingDirection(before)) !== null && _findSiblingDirection !== void 0 ? _findSiblingDirection : findSiblingDirection(after);
};
const getMountedChildren = (editor, element) => slate.Editor.isVoid(editor, element) ? [slate.Node.texts(element).next().value[0]] : element.children;
const findUnmountedChild = (editor, element) => getMountedChildren(editor, element).findIndex(child => !NODE_TO_ELEMENT.has(child));
const defaultRenderElement = props => (/*#__PURE__*/React__default.default.createElement(DefaultElement, _objectSpread$3({}, props)));
/**
 * Element.
 */
const Element$1 = props => {
  const {
    decorations: parentDecorations,
    element,
    renderElement = defaultRenderElement,
    renderChunk,
    renderPlaceholder,
    renderLeaf,
    renderText
  } = props;
  const editor = useSlateStatic();
  const readOnly = useReadOnly();
  const isInline = editor.isInline(element);
  const decorations = useDecorations(element, parentDecorations);
  const key = ReactEditor.findKey(editor, element);
  const ref = React.useCallback(ref => {
    // Update element-related weak maps with the DOM element ref.
    const KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, ref);
      NODE_TO_ELEMENT.set(element, ref);
      ELEMENT_TO_NODE.set(ref, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  }, [editor, key, element]);
  useIsomorphicLayoutEffect(() => {
    const index = findUnmountedChild(editor, element);
    if (index !== -1) {
      const type = element.type;
      const path = ReactEditor.findPath(editor, element);
      editor.onDOMError(new Error(`renderElement didn't render the children of the ${typeof type === 'string' ? `"${type}" ` : ''}element at path ${JSON.stringify(path)}: child ${index} has no DOM node. Render the \`children\` prop inside the element.`));
    }
  }, [editor, element]);
  let children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderChunk,
    renderPlaceholder,
    renderLeaf,
    renderText
  });
  // Attributes that the developer must mix into the element in their
  // custom node renderer component.
  const attributes = {
    'data-slate-node': 'element',
    ref
  };
  if (isInline) {
    attributes['data-slate-inline'] = true;
  }
  // If it's a block node with inline children, add the proper `dir` attribute
  // for text direction.
  if (!isInline && slate.Editor.hasInlines(editor, element)) {
    const text = slate.Node.string(element);
    const dir = text === '' ? getEmptyBlockDirection(element) : getDirection(text);
    if (dir === 'rtl') {
      attributes.dir = dir;
    }
  }
  // If it's a void node, wrap the children in extra void-specific elements.
  if (slate.Editor.isVoid(editor, element)) {
    attributes['data-slate-void'] = true;
    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }
    // ПРОПАТЧЕНО (Saby): спейсер void-узла всегда инлайновый — у нас блоки бывают <p>,
    // а <div> внутри <p> React считает ошибкой вложенности.
    // https://online.sbis.ru/opendoc.html?guid=c17d203f-4ad0-4b58-b9f4-cc1d7eb9c513&client=3
    const Tag = 'span';
    const [[text]] = slate.Node.texts(element);
    children = /*#__PURE__*/React__default.default.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: '0',
        color: 'transparent',
        outline: 'none',
        position: 'absolute',
        userSelect: 'none',
        WebkitUserSelect: 'none'
      }
    }, /*#__PURE__*/React__default.default.createElement(MemoizedText, {
      renderPlaceholder: renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: text
    }));
    NODE_TO_INDEX.set(text, 0);
    NODE_TO_PARENT.set(text, element);
  }
  return renderElement({
    attributes,
    children,
    element
  });
};
const MemoizedElement = /*#__PURE__*/React__default.default.memo(Element$1, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderChunk === next.renderChunk && prev.renderText === next.renderText && prev.renderLeaf === next.renderLeaf && prev.renderPlaceholder === next.renderPlaceholder && isElementDecorationsEqual(prev.decorations, next.decorations);
});
/**
 * The default element renderer.
 */
const DefaultElement = props => {
  const {
    attributes,
    children,
    element
  } = props;
  const editor = useSlateStatic();
  const Tag = editor.isInline(element) ? 'span' : 'div';
  return /*#__PURE__*/React__default.default.createElement(Tag, _objectSpread$3(_objectSpread$3({}, attributes), {}, {
    style: {
      position: 'relative'
    }
  }), children);
};

/**
 * Traverse and modify a chunk tree
 */
class ChunkTreeHelper {
  constructor(chunkTree, {
    chunkSize,
    debug
  }) {
    /**
     * The root of the chunk tree
     */
    _defineProperty(this, "root", void 0);
    /**
     * The ideal size of a chunk
     */
    _defineProperty(this, "chunkSize", void 0);
    /**
     * Whether debug mode is enabled
     *
     * If enabled, the pointer state will be checked for internal consistency
     * after each mutating operation.
     */
    _defineProperty(this, "debug", void 0);
    /**
     * Whether the traversal has reached the end of the chunk tree
     *
     * When this is true, the pointerChunk and pointerIndex point to the last
     * top-level node in the chunk tree, although pointerNode returns null.
     */
    _defineProperty(this, "reachedEnd", void 0);
    /**
     * The chunk containing the current node
     */
    _defineProperty(this, "pointerChunk", void 0);
    /**
     * The index of the current node within pointerChunk
     *
     * Can be -1 to indicate that the pointer is before the start of the tree.
     */
    _defineProperty(this, "pointerIndex", void 0);
    /**
     * Similar to a Slate path; tracks the path of pointerChunk relative to the
     * root.
     *
     * Used to move the pointer from the current chunk to the parent chunk more
     * efficiently.
     */
    _defineProperty(this, "pointerIndexStack", void 0);
    /**
     * Indexing the current chunk's children has a slight time cost, which adds up
     * when traversing very large trees, so the current node is cached.
     *
     * A value of undefined means that the current node is not cached. This
     * property must be set to undefined whenever the pointer is moved, unless
     * the pointer is guaranteed to point to the same node that it did previously.
     */
    _defineProperty(this, "cachedPointerNode", void 0);
    this.root = chunkTree;
    this.chunkSize = chunkSize;
    // istanbul ignore next
    this.debug = debug !== null && debug !== void 0 ? debug : false;
    this.pointerChunk = chunkTree;
    this.pointerIndex = -1;
    this.pointerIndexStack = [];
    this.reachedEnd = false;
    this.validateState();
  }
  /**
   * Move the pointer to the next leaf in the chunk tree
   */
  readLeaf() {
    // istanbul ignore next
    if (this.reachedEnd) return null;
    // Get the next sibling or aunt node
    while (true) {
      if (this.pointerIndex + 1 < this.pointerSiblings.length) {
        this.pointerIndex++;
        this.cachedPointerNode = undefined;
        break;
      } else if (this.pointerChunk.type === 'root') {
        this.reachedEnd = true;
        return null;
      } else {
        this.exitChunk();
      }
    }
    this.validateState();
    // If the next sibling or aunt is a chunk, descend into it
    this.enterChunkUntilLeaf(false);
    return this.pointerNode;
  }
  /**
   * Move the pointer to the previous leaf in the chunk tree
   */
  returnToPreviousLeaf() {
    // If we were at the end of the tree, descend into the end of the last
    // chunk in the tree
    if (this.reachedEnd) {
      this.reachedEnd = false;
      this.enterChunkUntilLeaf(true);
      return;
    }
    // Get the previous sibling or aunt node
    while (true) {
      if (this.pointerIndex >= 1) {
        this.pointerIndex--;
        this.cachedPointerNode = undefined;
        break;
      } else if (this.pointerChunk.type === 'root') {
        this.pointerIndex = -1;
        return;
      } else {
        this.exitChunk();
      }
    }
    this.validateState();
    // If the previous sibling or aunt is a chunk, descend into it
    this.enterChunkUntilLeaf(true);
  }
  /**
   * Insert leaves before the current leaf, leaving the pointer unchanged
   */
  insertBefore(leaves) {
    this.returnToPreviousLeaf();
    this.insertAfter(leaves);
    this.readLeaf();
  }
  /**
   * Insert leaves after the current leaf, leaving the pointer on the last
   * inserted leaf
   *
   * The insertion algorithm first checks for any chunk we're currently at the
   * end of that can receive additional leaves. Next, it tries to insert leaves
   * at the starts of any subsequent chunks.
   *
   * Any remaining leaves are passed to rawInsertAfter to be chunked and
   * inserted at the highest possible level.
   */
  insertAfter(leaves) {
    // istanbul ignore next
    if (leaves.length === 0) return;
    let beforeDepth = 0;
    let afterDepth = 0;
    // While at the end of a chunk, insert any leaves that will fit, and then
    // exit the chunk
    while (this.pointerChunk.type === 'chunk' && this.pointerIndex === this.pointerSiblings.length - 1) {
      const remainingCapacity = this.chunkSize - this.pointerSiblings.length;
      const toInsertCount = Math.min(remainingCapacity, leaves.length);
      if (toInsertCount > 0) {
        const leavesToInsert = leaves.splice(0, toInsertCount);
        this.rawInsertAfter(leavesToInsert, beforeDepth);
      }
      this.exitChunk();
      beforeDepth++;
    }
    if (leaves.length === 0) return;
    // Save the pointer so that we can come back here after inserting leaves
    // into the starts of subsequent blocks
    const rawInsertPointer = this.savePointer();
    // If leaves are inserted into the start of a subsequent block, then we
    // eventually need to restore the pointer to the last such inserted leaf
    let finalPointer = null;
    // Move the pointer into the chunk containing the next leaf, if it exists
    if (this.readLeaf()) {
      // While at the start of a chunk, insert any leaves that will fit, and
      // then exit the chunk
      while (this.pointerChunk.type === 'chunk' && this.pointerIndex === 0) {
        const remainingCapacity = this.chunkSize - this.pointerSiblings.length;
        const toInsertCount = Math.min(remainingCapacity, leaves.length);
        if (toInsertCount > 0) {
          const leavesToInsert = leaves.splice(-toInsertCount, toInsertCount);
          // Insert the leaves at the start of the chunk
          this.pointerIndex = -1;
          this.cachedPointerNode = undefined;
          this.rawInsertAfter(leavesToInsert, afterDepth);
          // If this is the first batch of insertions at the start of a
          // subsequent chunk, set the final pointer to the last inserted leaf
          if (!finalPointer) {
            finalPointer = this.savePointer();
          }
        }
        this.exitChunk();
        afterDepth++;
      }
    }
    this.restorePointer(rawInsertPointer);
    // If there are leaves left to insert, insert them between the end of the
    // previous chunk and the start of the first subsequent chunk, or wherever
    // the pointer ended up after the first batch of insertions
    const minDepth = Math.max(beforeDepth, afterDepth);
    this.rawInsertAfter(leaves, minDepth);
    if (finalPointer) {
      this.restorePointer(finalPointer);
    }
    this.validateState();
  }
  /**
   * Remove the current node and decrement the pointer, deleting any ancestor
   * chunk that becomes empty as a result
   */
  remove() {
    this.pointerSiblings.splice(this.pointerIndex--, 1);
    this.cachedPointerNode = undefined;
    if (this.pointerSiblings.length === 0 && this.pointerChunk.type === 'chunk') {
      this.exitChunk();
      this.remove();
    } else {
      this.invalidateChunk();
    }
    this.validateState();
  }
  /**
   * Add the current chunk and all ancestor chunks to the list of modified
   * chunks
   */
  invalidateChunk() {
    for (let c = this.pointerChunk; c.type === 'chunk'; c = c.parent) {
      this.root.modifiedChunks.add(c);
    }
  }
  /**
   * Whether the pointer is at the start of the tree
   */
  get atStart() {
    return this.pointerChunk.type === 'root' && this.pointerIndex === -1;
  }
  /**
   * The siblings of the current node
   */
  get pointerSiblings() {
    return this.pointerChunk.children;
  }
  /**
   * Get the current node (uncached)
   *
   * If the pointer is at the start or end of the document, returns null.
   *
   * Usually, the current node is a chunk leaf, although it can be a chunk
   * while insertions are in progress.
   */
  getPointerNode() {
    if (this.reachedEnd || this.pointerIndex === -1) {
      return null;
    }
    return this.pointerSiblings[this.pointerIndex];
  }
  /**
   * Cached getter for the current node
   */
  get pointerNode() {
    if (this.cachedPointerNode !== undefined) return this.cachedPointerNode;
    const pointerNode = this.getPointerNode();
    this.cachedPointerNode = pointerNode;
    return pointerNode;
  }
  /**
   * Get the path of a chunk relative to the root, returning null if the chunk
   * is not connected to the root
   */
  getChunkPath(chunk) {
    const path = [];
    for (let c = chunk; c.type === 'chunk'; c = c.parent) {
      const index = c.parent.children.indexOf(c);
      // istanbul ignore next
      if (index === -1) {
        return null;
      }
      path.unshift(index);
    }
    return path;
  }
  /**
   * Save the current pointer to be restored later
   */
  savePointer() {
    if (this.atStart) return 'start';
    // istanbul ignore next
    if (!this.pointerNode) {
      throw new Error('Cannot save pointer when pointerNode is null');
    }
    return {
      chunk: this.pointerChunk,
      node: this.pointerNode
    };
  }
  /**
   * Restore the pointer to a previous state
   */
  restorePointer(savedPointer) {
    if (savedPointer === 'start') {
      this.pointerChunk = this.root;
      this.pointerIndex = -1;
      this.pointerIndexStack = [];
      this.reachedEnd = false;
      this.cachedPointerNode = undefined;
      return;
    }
    // Since nodes may have been inserted or removed prior to the saved
    // pointer since it was saved, the index and index stack must be
    // recomputed. This is slow, but this is fine since restoring a pointer is
    // not a frequent operation.
    const {
      chunk,
      node
    } = savedPointer;
    const index = chunk.children.indexOf(node);
    // istanbul ignore next
    if (index === -1) {
      throw new Error('Cannot restore point because saved node is no longer in saved chunk');
    }
    const indexStack = this.getChunkPath(chunk);
    // istanbul ignore next
    if (!indexStack) {
      throw new Error('Cannot restore point because saved chunk is no longer connected to root');
    }
    this.pointerChunk = chunk;
    this.pointerIndex = index;
    this.pointerIndexStack = indexStack;
    this.reachedEnd = false;
    this.cachedPointerNode = node;
    this.validateState();
  }
  /**
   * Assuming the current node is a chunk, move the pointer into that chunk
   *
   * @param end If true, place the pointer on the last node of the chunk.
   * Otherwise, place the pointer on the first node.
   */
  enterChunk(end) {
    var _this$pointerNode;
    // istanbul ignore next
    if (((_this$pointerNode = this.pointerNode) === null || _this$pointerNode === void 0 ? void 0 : _this$pointerNode.type) !== 'chunk') {
      throw new Error('Cannot enter non-chunk');
    }
    this.pointerIndexStack.push(this.pointerIndex);
    this.pointerChunk = this.pointerNode;
    this.pointerIndex = end ? this.pointerSiblings.length - 1 : 0;
    this.cachedPointerNode = undefined;
    this.validateState();
    // istanbul ignore next
    if (this.pointerChunk.children.length === 0) {
      throw new Error('Cannot enter empty chunk');
    }
  }
  /**
   * Assuming the current node is a chunk, move the pointer into that chunk
   * repeatedly until the current node is a leaf
   *
   * @param end If true, place the pointer on the last node of the chunk.
   * Otherwise, place the pointer on the first node.
   */
  enterChunkUntilLeaf(end) {
    while (((_this$pointerNode2 = this.pointerNode) === null || _this$pointerNode2 === void 0 ? void 0 : _this$pointerNode2.type) === 'chunk') {
      var _this$pointerNode2;
      this.enterChunk(end);
    }
  }
  /**
   * Move the pointer to the parent chunk
   */
  exitChunk() {
    // istanbul ignore next
    if (this.pointerChunk.type === 'root') {
      throw new Error('Cannot exit root');
    }
    const previousPointerChunk = this.pointerChunk;
    this.pointerChunk = previousPointerChunk.parent;
    this.pointerIndex = this.pointerIndexStack.pop();
    this.cachedPointerNode = undefined;
    this.validateState();
  }
  /**
   * Insert leaves immediately after the current node, leaving the pointer on
   * the last inserted leaf
   *
   * Leaves are chunked according to the number of nodes already in the parent
   * plus the number of nodes being inserted, or the minimum depth if larger
   */
  rawInsertAfter(leaves, minDepth) {
    if (leaves.length === 0) return;
    const groupIntoChunks = (leaves, parent, perChunk) => {
      if (perChunk === 1) return leaves;
      const chunks = [];
      for (let i = 0; i < this.chunkSize; i++) {
        const chunkNodes = leaves.slice(i * perChunk, (i + 1) * perChunk);
        if (chunkNodes.length === 0) break;
        const chunk = {
          type: 'chunk',
          key: new Key(),
          parent,
          children: []
        };
        chunk.children = groupIntoChunks(chunkNodes, chunk, perChunk / this.chunkSize);
        chunks.push(chunk);
      }
      return chunks;
    };
    // Determine the chunking depth based on the number of existing nodes in
    // the chunk and the number of nodes being inserted
    const newTotal = this.pointerSiblings.length + leaves.length;
    let depthForTotal = 0;
    for (let i = this.chunkSize; i < newTotal; i *= this.chunkSize) {
      depthForTotal++;
    }
    // A depth of 0 means no chunking
    const depth = Math.max(depthForTotal, minDepth);
    const perTopLevelChunk = Math.pow(this.chunkSize, depth);
    const chunks = groupIntoChunks(leaves, this.pointerChunk, perTopLevelChunk);
    this.pointerSiblings.splice(this.pointerIndex + 1, 0, ...chunks);
    this.pointerIndex += chunks.length;
    this.cachedPointerNode = undefined;
    this.invalidateChunk();
    this.validateState();
  }
  /**
   * If debug mode is enabled, ensure that the state is internally consistent
   */
  // istanbul ignore next
  validateState() {
    if (!this.debug) return;
    const validateDescendant = node => {
      if (node.type === 'chunk') {
        const {
          parent,
          children
        } = node;
        if (!parent.children.includes(node)) {
          throw new Error(`Debug: Chunk ${node.key.id} has an incorrect parent property`);
        }
        children.forEach(validateDescendant);
      }
    };
    this.root.children.forEach(validateDescendant);
    if (this.cachedPointerNode !== undefined && this.cachedPointerNode !== this.getPointerNode()) {
      throw new Error('Debug: The cached pointer is incorrect and has not been invalidated');
    }
    const actualIndexStack = this.getChunkPath(this.pointerChunk);
    if (!actualIndexStack) {
      throw new Error('Debug: The pointer chunk is not connected to the root');
    }
    if (!slate.Path.equals(this.pointerIndexStack, actualIndexStack)) {
      throw new Error(`Debug: The cached index stack [${this.pointerIndexStack.join(', ')}] does not match the path of the pointer chunk [${actualIndexStack.join(', ')}]`);
    }
  }
}

/**
 * Traverse an array of children, providing helpers useful for reconciling the
 * children array with a chunk tree
 */
class ChildrenHelper {
  constructor(editor, children) {
    _defineProperty(this, "editor", void 0);
    _defineProperty(this, "children", void 0);
    /**
     * Sparse array of Slate node keys, each index corresponding to an index in
     * the children array
     *
     * Fetching the key for a Slate node is expensive, so we cache them here.
     */
    _defineProperty(this, "cachedKeys", void 0);
    /**
     * The index of the next node to be read in the children array
     */
    _defineProperty(this, "pointerIndex", void 0);
    this.editor = editor;
    this.children = children;
    this.cachedKeys = new Array(children.length);
    this.pointerIndex = 0;
  }
  /**
   * Read a given number of nodes, advancing the pointer by that amount
   */
  read(n) {
    // PERF: If only one child was requested (the most common case), use array
    // indexing instead of slice
    if (n === 1) {
      return [this.children[this.pointerIndex++]];
    }
    const slicedChildren = this.remaining(n);
    this.pointerIndex += n;
    return slicedChildren;
  }
  /**
   * Get the remaining children without advancing the pointer
   *
   * @param [maxChildren] Limit the number of children returned.
   */
  remaining(maxChildren) {
    if (maxChildren === undefined) {
      return this.children.slice(this.pointerIndex);
    }
    return this.children.slice(this.pointerIndex, this.pointerIndex + maxChildren);
  }
  /**
   * Whether all children have been read
   */
  get reachedEnd() {
    return this.pointerIndex >= this.children.length;
  }
  /**
   * Determine whether a node with a given key appears in the unread part of the
   * children array, and return its index relative to the current pointer if so
   *
   * Searching for the node object itself using indexOf is most efficient, but
   * will fail to locate nodes that have been modified. In this case, nodes
   * should be identified by their keys instead.
   *
   * Searching an array of keys using indexOf is very inefficient since fetching
   * the keys for all children in advance is very slow. Insead, if the node
   * search fails to return a value, fetch the keys of each remaining child one
   * by one and compare it to the known key.
   */
  lookAhead(node, key) {
    const elementResult = this.children.indexOf(node, this.pointerIndex);
    if (elementResult > -1) return elementResult - this.pointerIndex;
    for (let i = this.pointerIndex; i < this.children.length; i++) {
      const candidateNode = this.children[i];
      const candidateKey = this.findKey(candidateNode, i);
      if (candidateKey === key) return i - this.pointerIndex;
    }
    return -1;
  }
  /**
   * Convert an array of Slate nodes to an array of chunk leaves, each
   * containing the node and its key
   */
  toChunkLeaves(nodes, startIndex) {
    return nodes.map((node, i) => ({
      type: 'leaf',
      node,
      key: this.findKey(node, startIndex + i),
      index: startIndex + i
    }));
  }
  /**
   * Get the key for a Slate node, cached using the node's index
   */
  findKey(node, index) {
    const cachedKey = this.cachedKeys[index];
    if (cachedKey) return cachedKey;
    const key = ReactEditor.findKey(this.editor, node);
    this.cachedKeys[index] = key;
    return key;
  }
}

/**
 * Update the chunk tree to match the children array, inserting, removing and
 * updating differing nodes
 */
const reconcileChildren = (editor, {
  chunkTree,
  children,
  chunkSize,
  rerenderChildren: _rerenderChildren = [],
  onInsert,
  onUpdate,
  onIndexChange,
  debug
}) => {
  const chunkTreeHelper = new ChunkTreeHelper(chunkTree, {
    chunkSize,
    debug
  });
  const childrenHelper = new ChildrenHelper(editor, children);
  let treeLeaf;
  // Read leaves from the tree one by one, each one representing a single Slate
  // node. Each leaf from the tree is compared to the current node in the
  // children array to determine whether nodes have been inserted, removed or
  // updated.
  while (treeLeaf = chunkTreeHelper.readLeaf()) {
    // Check where the tree node appears in the children array. In the most
    // common case (where no insertions or removals have occurred), this will be
    // 0. If the node has been removed, this will be -1. If new nodes have been
    // inserted before the node, or if the node has been moved to a later
    // position in the same children array, this will be a positive number.
    const lookAhead = childrenHelper.lookAhead(treeLeaf.node, treeLeaf.key);
    // If the node was moved, we want to remove it and insert it later, rather
    // then re-inserting all intermediate nodes before it.
    const wasMoved = lookAhead > 0 && chunkTree.movedNodeKeys.has(treeLeaf.key);
    // If the tree leaf was moved or removed, remove it
    if (lookAhead === -1 || wasMoved) {
      chunkTreeHelper.remove();
      continue;
    }
    // Get the matching Slate node and any nodes that may have been inserted
    // prior to it. Insert these into the chunk tree.
    const insertedChildrenStartIndex = childrenHelper.pointerIndex;
    const insertedChildren = childrenHelper.read(lookAhead + 1);
    const matchingChild = insertedChildren.pop();
    if (insertedChildren.length) {
      const leavesToInsert = childrenHelper.toChunkLeaves(insertedChildren, insertedChildrenStartIndex);
      chunkTreeHelper.insertBefore(leavesToInsert);
      insertedChildren.forEach((node, relativeIndex) => {
        onInsert === null || onInsert === void 0 || onInsert(node, insertedChildrenStartIndex + relativeIndex);
      });
    }
    const matchingChildIndex = childrenHelper.pointerIndex - 1;
    // Make sure the chunk tree contains the most recent version of the Slate
    // node
    if (treeLeaf.node !== matchingChild) {
      treeLeaf.node = matchingChild;
      chunkTreeHelper.invalidateChunk();
      onUpdate === null || onUpdate === void 0 || onUpdate(matchingChild, matchingChildIndex);
    }
    // Update the index if it has changed
    if (treeLeaf.index !== matchingChildIndex) {
      treeLeaf.index = matchingChildIndex;
      onIndexChange === null || onIndexChange === void 0 || onIndexChange(matchingChild, matchingChildIndex);
    }
    // Manually invalidate chunks containing specific children that we want to
    // re-render
    if (_rerenderChildren.includes(matchingChildIndex)) {
      chunkTreeHelper.invalidateChunk();
    }
  }
  // If there are still Slate nodes remaining from the children array that were
  // not matched to nodes in the tree, insert them at the end of the tree
  if (!childrenHelper.reachedEnd) {
    const remainingChildren = childrenHelper.remaining();
    const leavesToInsert = childrenHelper.toChunkLeaves(remainingChildren, childrenHelper.pointerIndex);
    // Move the pointer back to the final leaf in the tree, or the start of the
    // tree if the tree is currently empty
    chunkTreeHelper.returnToPreviousLeaf();
    chunkTreeHelper.insertAfter(leavesToInsert);
    remainingChildren.forEach((node, relativeIndex) => {
      onInsert === null || onInsert === void 0 || onInsert(node, childrenHelper.pointerIndex + relativeIndex);
    });
  }
  chunkTree.movedNodeKeys.clear();
};

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const KEY_TO_CHUNK_TREE = new WeakMap();
/**
 * Get or create the chunk tree for a Slate node
 *
 * If the reconcile option is provided, the chunk tree will be updated to
 * match the current children of the node. The children are chunked
 * automatically using the given chunk size.
 */
const getChunkTreeForNode = (editor, node,
// istanbul ignore next
options = {}) => {
  const key = ReactEditor.findKey(editor, node);
  let chunkTree = KEY_TO_CHUNK_TREE.get(key);
  if (!chunkTree) {
    chunkTree = {
      type: 'root',
      movedNodeKeys: new Set(),
      modifiedChunks: new Set(),
      children: []
    };
    KEY_TO_CHUNK_TREE.set(key, chunkTree);
  }
  if (options.reconcile) {
    reconcileChildren(editor, _objectSpread$2({
      chunkTree,
      children: node.children
    }, options.reconcile));
  }
  return chunkTree;
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const defaultRenderChunk = ({
  children
}) => children;
const ChunkAncestor = props => {
  const {
    root,
    ancestor,
    renderElement,
    renderChunk = defaultRenderChunk
  } = props;
  return ancestor.children.map(chunkNode => {
    if (chunkNode.type === 'chunk') {
      const key = chunkNode.key.id;
      const renderedChunk = renderChunk({
        highest: ancestor === root,
        lowest: chunkNode.children.some(c => c.type === 'leaf'),
        attributes: {
          'data-slate-chunk': true
        },
        children: (/*#__PURE__*/React__default.default.createElement(MemoizedChunk, {
          root: root,
          ancestor: chunkNode,
          renderElement: renderElement,
          renderChunk: renderChunk
        }))
      });
      return /*#__PURE__*/React__default.default.createElement(React.Fragment, {
        key: key
      }, renderedChunk);
    }
    // Only blocks containing no inlines are chunked
    const element = chunkNode.node;
    return renderElement(element, chunkNode.index, chunkNode.key);
  });
};
const ChunkTree = props => {
  // Clear the set of modified chunks only when React finishes rendering. The
  // timing of this is important in strict mode because if the chunks are
  // cleared during rendering (such as in reconcileChildren), strict mode's
  // second render won't include them.
  React.useEffect(() => {
    props.root.modifiedChunks.clear();
  });
  return /*#__PURE__*/React__default.default.createElement(ChunkAncestor, _objectSpread$1({}, props));
};
const MemoizedChunk = /*#__PURE__*/React__default.default.memo(ChunkAncestor, (prev, next) => prev.root === next.root && prev.renderElement === next.renderElement && prev.renderChunk === next.renderChunk && !next.root.modifiedChunks.has(next.ancestor));

const ElementContext = /*#__PURE__*/React.createContext(null);
/**
 * Get the current element.
 */
const useElement = () => {
  const context = React.useContext(ElementContext);
  if (!context) {
    throw new Error('The `useElement` hook must be used inside `renderElement`.');
  }
  return context;
};
/**
 * Get the current element, or return null if not inside `renderElement`.
 */
const useElementIf = () => React.useContext(ElementContext);

/**
 * Children.
 */
const useChildren = props => {
  const {
    decorations,
    node,
    renderElement,
    renderChunk,
    renderPlaceholder,
    renderText,
    renderLeaf
  } = props;
  const editor = useSlateStatic();
  IS_NODE_MAP_DIRTY.set(editor, false);
  const isBlock = slate.Node.isElement(node) && !editor.isInline(node);
  const isLeafBlock = isBlock && slate.Editor.hasInlines(editor, node);
  const chunkSize = isLeafBlock ? null : editor.getChunkSize(node);
  const chunking = !!chunkSize;
  const {
    decorationsByChild,
    childrenToRedecorate
  } = useDecorationsByChild(editor, node, decorations);
  // Update the index and parent of each child.
  // PERF: If chunking is enabled, this is done while traversing the chunk tree
  // instead to eliminate unnecessary weak map operations.
  if (!chunking) {
    node.children.forEach((n, i) => {
      NODE_TO_INDEX.set(n, i);
      NODE_TO_PARENT.set(n, node);
    });
  }
  const renderElementComponent = React.useCallback((n, i, cachedKey) => {
    const key = cachedKey !== null && cachedKey !== void 0 ? cachedKey : ReactEditor.findKey(editor, n);
    return /*#__PURE__*/React__default.default.createElement(ElementContext.Provider, {
      key: `provider-${key.id}`,
      value: n
    }, /*#__PURE__*/React__default.default.createElement(MemoizedElement, {
      decorations: decorationsByChild[i],
      element: n,
      key: key.id,
      renderElement: renderElement,
      renderChunk: renderChunk,
      renderPlaceholder: renderPlaceholder,
      renderLeaf: renderLeaf,
      renderText: renderText
    }));
  }, [editor, decorationsByChild, renderElement, renderChunk, renderPlaceholder, renderLeaf, renderText]);
  const renderTextComponent = (n, i) => {
    const key = ReactEditor.findKey(editor, n);
    return /*#__PURE__*/React__default.default.createElement(MemoizedText, {
      decorations: decorationsByChild[i],
      key: key.id,
      isLast: i === node.children.length - 1,
      parent: node,
      renderPlaceholder: renderPlaceholder,
      renderLeaf: renderLeaf,
      renderText: renderText,
      text: n
    });
  };
  if (!chunking) {
    return node.children.map((n, i) => slate.Node.isText(n) ? renderTextComponent(n, i) : renderElementComponent(n, i));
  }
  const chunkTree = getChunkTreeForNode(editor, node, {
    reconcile: {
      chunkSize,
      rerenderChildren: childrenToRedecorate,
      onInsert: (n, i) => {
        NODE_TO_INDEX.set(n, i);
        NODE_TO_PARENT.set(n, node);
      },
      onUpdate: (n, i) => {
        NODE_TO_INDEX.set(n, i);
        NODE_TO_PARENT.set(n, node);
      },
      onIndexChange: (n, i) => {
        NODE_TO_INDEX.set(n, i);
      }
    }
  });
  return /*#__PURE__*/React__default.default.createElement(ChunkTree, {
    root: chunkTree,
    ancestor: chunkTree,
    renderElement: renderElementComponent,
    renderChunk: renderChunk
  });
};
const useDecorationsByChild = (editor, node, decorations) => {
  const decorationsByChild = splitDecorationsByChild(editor, node, decorations);
  // The value we return is a mutable array of `DecoratedRange[]` arrays. This
  // lets us avoid passing an immutable array of decorations for each child into
  // `ChunkTree` using props. Each `DecoratedRange[]` is only updated if the
  // decorations at that index have changed, which speeds up the equality check
  // for the `decorations` prop in the memoized `Element` and `Text` components.
  const mutableDecorationsByChild = React.useRef(decorationsByChild).current;
  // Track the list of child indices whose decorations have changed, so that we
  // can tell the chunk tree to re-render these children.
  const childrenToRedecorate = [];
  // Resize the mutable array to match the latest result
  mutableDecorationsByChild.length = decorationsByChild.length;
  for (let i = 0; i < decorationsByChild.length; i++) {
    var _mutableDecorationsBy;
    const _decorations = decorationsByChild[i];
    const previousDecorations = (_mutableDecorationsBy = mutableDecorationsByChild[i]) !== null && _mutableDecorationsBy !== void 0 ? _mutableDecorationsBy : null;
    if (!isElementDecorationsEqual(previousDecorations, _decorations)) {
      mutableDecorationsByChild[i] = _decorations;
      childrenToRedecorate.push(i);
    }
  }
  return {
    decorationsByChild: mutableDecorationsByChild,
    childrenToRedecorate
  };
};

/**
 * A React context for sharing the `readOnly` state of the editor.
 */
const ReadOnlyContext = /*#__PURE__*/React.createContext(false);
/**
 * Get the current `readOnly` state of the editor.
 */
const useReadOnly = () => {
  return React.useContext(ReadOnlyContext);
};

/**
 * A React context for sharing the editor selector context in a way to control
 * re-renders.
 */
const SlateSelectorContext = /*#__PURE__*/React.createContext({});
const refEquality = (a, b) => a === b;
/**
 * Use redux style selectors to prevent re-rendering on every keystroke.
 *
 * Bear in mind re-rendering can only prevented if the returned value is a value
 * type or for reference types (e.g. objects and arrays) add a custom equality
 * function.
 *
 * If `selector` is memoized using `useCallback`, then it will only be called
 * when it or the editor state changes. Otherwise, `selector` will be called
 * every time the component renders.
 *
 * @example
 * const isSelectionActive = useSlateSelector(editor => Boolean(editor.selection))
 */
function useSlateSelector(selector, equalityFn = refEquality, {
  deferred
} = {}) {
  const context = React.useContext(SlateSelectorContext);
  if (!context) {
    throw new Error(`The \`useSlateSelector\` hook must be used inside the <Slate> component's context.`);
  }
  const {
    addEventListener
  } = context;
  const editor = useSlateStatic();
  const genericSelector = React.useCallback(() => selector(editor), [editor, selector]);
  const [selectedState, update] = useGenericSelector(genericSelector, equalityFn);
  useIsomorphicLayoutEffect(() => {
    const unsubscribe = addEventListener(update, {
      deferred
    });
    update();
    return unsubscribe;
  }, [addEventListener, update, deferred]);
  return selectedState;
}
/**
 * Create selector context with editor updating on every editor change
 */
function useSelectorContext() {
  const eventListeners = React.useRef(new Set());
  const deferredEventListeners = React.useRef(new Set());
  const onChange = React.useCallback(() => {
    eventListeners.current.forEach(listener => listener());
  }, []);
  const flushDeferred = React.useCallback(() => {
    deferredEventListeners.current.forEach(listener => listener());
    deferredEventListeners.current.clear();
  }, []);
  const addEventListener = React.useCallback((callbackProp, {
    deferred: _deferred = false
  } = {}) => {
    const callback = _deferred ? () => deferredEventListeners.current.add(callbackProp) : callbackProp;
    eventListeners.current.add(callback);
    return () => {
      eventListeners.current.delete(callback);
    };
  }, []);
  const selectorContext = React.useMemo(() => ({
    addEventListener,
    flushDeferred
  }), [addEventListener, flushDeferred]);
  return {
    selectorContext,
    onChange
  };
}
function useFlushDeferredSelectorsOnRender() {
  const {
    flushDeferred
  } = React.useContext(SlateSelectorContext);
  useIsomorphicLayoutEffect(flushDeferred);
}

/**
 * Get the current editor object and re-render whenever it changes.
 */
const useSlate = () => {
  const {
    addEventListener
  } = React.useContext(SlateSelectorContext);
  const [, forceRender] = React.useReducer(s => s + 1, 0);
  if (!addEventListener) {
    throw new Error(`The \`useSlate\` hook must be used inside the <Slate> component's context.`);
  }
  useIsomorphicLayoutEffect(() => addEventListener(forceRender), [addEventListener]);
  return useSlateStatic();
};
const EDITOR_TO_V = new WeakMap();
const getEditorVersionRef = editor => {
  let v = EDITOR_TO_V.get(editor);
  if (v) {
    return v;
  }
  v = {
    current: 0
  };
  EDITOR_TO_V.set(editor, v);
  // Register the `onChange` handler exactly once per editor
  const {
    onChange
  } = editor;
  editor.onChange = options => {
    v.current++;
    onChange(options);
  };
  return v;
};
/**
 * Get the current editor object and its version, which increments on every
 * change.
 *
 * @deprecated The `v` counter is no longer used except for this hook, and may
 * be removed in a future version.
 */
const useSlateWithV = () => {
  const editor = useSlate();
  const vRef = React.useMemo(() => getEditorVersionRef(editor), [editor]);
  return {
    editor,
    v: vRef.current
  };
};

function useTrackUserInput() {
  const editor = useSlateStatic();
  const receivedUserInput = React.useRef(false);
  const animationFrameIdRef = React.useRef(0);
  const onUserInput = React.useCallback(() => {
    if (receivedUserInput.current) {
      return;
    }
    receivedUserInput.current = true;
    const window = ReactEditor.getWindow(editor);
    window.cancelAnimationFrame(animationFrameIdRef.current);
    animationFrameIdRef.current = window.requestAnimationFrame(() => {
      receivedUserInput.current = false;
    });
  }, [editor]);
  React.useEffect(() => () => cancelAnimationFrame(animationFrameIdRef.current), []);
  return {
    receivedUserInput,
    onUserInput
  };
}

const isPlaceholderNode = node => isDOMElement(node) && node.hasAttribute('data-slate-placeholder');
const changesOnlyPlaceholders = ({
  addedNodes,
  removedNodes
}) => {
  const nodes = [...Array.from(addedNodes), ...Array.from(removedNodes)];
  return nodes.length > 0 && nodes.every(isPlaceholderNode);
};
const createRestoreDomManager = (editor, receivedUserInput) => {
  let bufferedMutations = [];
  const clear = () => {
    bufferedMutations = [];
  };
  const registerMutations = mutations => {
    if (!receivedUserInput.current) {
      return;
    }
    const trackedMutations = mutations.filter(mutation => !changesOnlyPlaceholders(mutation) && isTrackedMutation(editor, mutation, mutations));
    bufferedMutations.push(...trackedMutations);
  };
  function restoreDOM() {
    if (bufferedMutations.length > 0) {
      bufferedMutations.reverse().forEach(mutation => {
        if (mutation.type === 'characterData') {
          // We don't want to restore the DOM for characterData mutations
          // because this interrupts the composition.
          return;
        }
        mutation.removedNodes.forEach(node => {
          mutation.target.insertBefore(node, mutation.nextSibling);
        });
        mutation.addedNodes.forEach(node => {
          mutation.target.removeChild(node);
        });
      });
      // Clear buffered mutations to ensure we don't undo them twice
      clear();
    }
  }
  return {
    registerMutations,
    restoreDOM,
    clear
  };
};

const useCompositionDOM = editor => {
  const compositionDOM = React.useMemo(() => {
    const manager = createRestoreDomManager(editor, {
      current: true
    });
    let observer = null;
    const clear = () => {
      var _observer;
      (_observer = observer) === null || _observer === void 0 || _observer.disconnect();
      observer = null;
      manager.clear();
    };
    const observe = () => {
      observer !== null && observer !== void 0 ? observer : observer = new MutationObserver(manager.registerMutations);
      observer.observe(ReactEditor.toDOMNode(editor, editor), {
        childList: true,
        subtree: true
      });
    };
    const track = text => {
      if (!observer && !(text !== null && text !== void 0 && text.includes('\n'))) return;
      observe();
    };
    const pause = () => {
      if (!observer) return;
      manager.registerMutations(observer.takeRecords());
      observer.disconnect();
    };
    const restore = () => {
      pause();
      manager.restoreDOM();
    };
    return {
      observe,
      track,
      pause,
      restore,
      clear
    };
  }, [editor]);
  React.useEffect(() => () => compositionDOM.clear(), [compositionDOM]);
  return compositionDOM;
};

const revertMutation = mutation => {
  const {
    target
  } = mutation;
  if (mutation.type === 'characterData') {
    target.nodeValue = mutation.oldValue;
  } else if (mutation.type === 'attributes' && isDOMElement(target)) {
    const name = mutation.attributeName;
    if (mutation.oldValue === null) {
      target.removeAttribute(name);
    } else {
      target.setAttribute(name, mutation.oldValue);
    }
  } else {
    mutation.addedNodes.forEach(node => {
      var _node$parentNode;
      return (_node$parentNode = node.parentNode) === null || _node$parentNode === void 0 ? void 0 : _node$parentNode.removeChild(node);
    });
    mutation.removedNodes.forEach(node => target.insertBefore(node, mutation.nextSibling));
  }
};
const useNativeFormatDOM = editor => {
  const nativeFormatDOM = React.useMemo(() => {
    let delivered = [];
    let observer = null;
    const deliver = mutations => {
      if (delivered.length === 0) {
        setTimeout(() => {
          delivered = [];
        });
      }
      delivered.push(...mutations);
    };
    const observe = () => {
      observer !== null && observer !== void 0 ? observer : observer = new MutationObserver(deliver);
      observer.observe(ReactEditor.toDOMNode(editor, editor), {
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        childList: true,
        subtree: true
      });
    };
    const disconnect = () => {
      var _observer;
      (_observer = observer) === null || _observer === void 0 || _observer.disconnect();
      delivered = [];
    };
    const revert = () => {
      var _observer$takeRecords, _observer2;
      const mutations = [...delivered, ...((_observer$takeRecords = (_observer2 = observer) === null || _observer2 === void 0 ? void 0 : _observer2.takeRecords()) !== null && _observer$takeRecords !== void 0 ? _observer$takeRecords : [])];
      delivered = [];
      mutations.reverse().forEach(revertMutation);
    };
    return {
      observe,
      disconnect,
      revert
    };
  }, [editor]);
  React.useEffect(() => {
    nativeFormatDOM.observe();
    return nativeFormatDOM.disconnect;
  }, [nativeFormatDOM]);
  return nativeFormatDOM;
};

const caretTop = (editor, point) => {
  const range = ReactEditor.resolveDOMRange(editor, {
    anchor: point,
    focus: point
  });
  if (!range) {
    return null;
  }
  const [rect] = Array.from(range.getClientRects());
  return (rect !== null && rect !== void 0 ? rect : range.getBoundingClientRect()).top;
};
const getPointAboveTrailingNewline = (editor, point) => {
  const block = slate.Editor.above(editor, {
    at: point,
    match: n => slate.Node.isElement(n) && slate.Editor.isBlock(editor, n)
  });
  if (!block) {
    return null;
  }
  const blockStart = slate.Editor.start(editor, block[1]);
  const before = slate.Editor.before(editor, blockStart);
  if (!before || !slate.Editor.leaf(editor, before)[0].text.endsWith('\n')) {
    return null;
  }
  if (slate.Point.equals(point, blockStart)) {
    return before;
  }
  const pointTop = caretTop(editor, point);
  const blockStartTop = caretTop(editor, blockStart);
  if (pointTop === null || blockStartTop === null) {
    return null;
  }
  return Math.abs(pointTop - blockStartTop) > 2 ? null : before;
};

const getCharacterMoveUnit = (editor, point, reverse) => {
  const inline = slate.Editor.above(editor, {
    at: point,
    match: node => slate.Node.isElement(node) && editor.isInline(node)
  });
  if (!inline || editor.isVoid(inline[0]) || editor.isElementReadOnly(inline[0]) || !(reverse ? slate.Editor.isStart(editor, point, inline[1]) : slate.Editor.isEnd(editor, point, inline[1]))) {
    return 'character';
  }
  if (reverse && !slate.Path.hasPrevious(inline[1])) {
    return 'character';
  }
  const siblingPath = reverse ? slate.Path.previous(inline[1]) : slate.Path.next(inline[1]);
  if (!slate.Editor.hasPath(editor, siblingPath)) {
    return 'character';
  }
  const sibling = slate.Node.get(editor, siblingPath);
  return slate.Node.isText(sibling) && sibling.text === '' ? 'offset' : 'character';
};

const isTextNode = node => isDOMNode(node) && node.nodeType === node.TEXT_NODE;
const removeStrayComposition = (editor, data) => {
  const {
    selection
  } = editor;
  if (!selection || !slate.Range.isCollapsed(selection)) return;
  const domSelection = getSelection(ReactEditor.findDocumentOrShadowRoot(editor));
  const node = domSelection === null || domSelection === void 0 ? void 0 : domSelection.anchorNode;
  if (!domSelection || !isTextNode(node)) return;
  const end = domSelection.anchorOffset;
  const start = end - data.length;
  if (start < 0 || node.data.slice(start, end) !== data) return;
  if (!ReactEditor.hasDOMNode(editor, node, {
    editable: true
  })) return;
  const leafPath = ReactEditor.findPath(editor, ReactEditor.toSlateNode(editor, node));
  const insertsIntoLeaf = slate.Path.equals(leafPath, selection.anchor.path) && !slate.Editor.void(editor, {
    at: selection
  });
  if (insertsIntoLeaf) return;
  node.deleteData(start, data.length);
};

const blockPathAt = (editor, point) => {
  var _Editor$above;
  return (_Editor$above = slate.Editor.above(editor, {
    at: point,
    match: n => slate.Node.isElement(n) && slate.Editor.isBlock(editor, n)
  })) === null || _Editor$above === void 0 ? void 0 : _Editor$above[1];
};
const getWholeTopLevelBlockPaths = (editor, range) => {
  const [start, end] = slate.Range.edges(range);
  const startBlock = blockPathAt(editor, start);
  const endBlock = blockPathAt(editor, end);
  if (!startBlock || !endBlock || startBlock.length !== 1 || endBlock.length !== 1 || startBlock[0] >= endBlock[0] || !slate.Editor.isStart(editor, start, startBlock) || !slate.Editor.isStart(editor, end, endBlock)) {
    return null;
  }
  return Array.from({
    length: endBlock[0] - startBlock[0]
  }, (_, offset) => [startBlock[0] + offset]);
};
const getMovableRange = (editor, range) => getWholeTopLevelBlockPaths(editor, range) ? range : slate.Editor.unhangRange(editor, range);
const deleteMovedRange = (editor, range) => {
  if (slate.Range.isCollapsed(range)) {
    const voidEntry = slate.Editor.void(editor, {
      at: range
    });
    if (voidEntry) {
      slate.Transforms.removeNodes(editor, {
        at: voidEntry[1],
        voids: true
      });
    }
    return;
  }
  const blockPaths = getWholeTopLevelBlockPaths(editor, range);
  if (!blockPaths) {
    slate.Transforms.select(editor, range);
    slate.Editor.deleteFragment(editor);
    return;
  }
  const followingBlockRef = slate.Editor.pathRef(editor, slate.Path.next(blockPaths[blockPaths.length - 1]));
  slate.Editor.withoutNormalizing(editor, () => {
    for (const path of [...blockPaths].reverse()) {
      slate.Transforms.removeNodes(editor, {
        at: path
      });
    }
  });
  const followingBlock = followingBlockRef.unref();
  if (followingBlock) {
    slate.Transforms.select(editor, slate.Editor.start(editor, followingBlock));
  }
};

const MUTATION_OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  characterDataOldValue: true
};
// We have to use a class component here since we rely on `getSnapshotBeforeUpdate` which has no FC equivalent
// to run code synchronously immediately before react commits the component update to the DOM.
class RestoreDOMComponent extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "context", null);
    _defineProperty(this, "manager", null);
    _defineProperty(this, "mutationObserver", null);
  }
  observe() {
    var _this$mutationObserve;
    const {
      node
    } = this.props;
    if (!node.current) {
      throw new Error('Failed to attach MutationObserver, `node` is undefined');
    }
    (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 || _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG);
  }
  componentDidMount() {
    const {
      receivedUserInput
    } = this.props;
    const editor = this.context;
    this.manager = createRestoreDomManager(editor, receivedUserInput);
    // ПРОПАТЧЕНО (Saby): на сервере (SSR) MutationObserver нет.
    this.mutationObserver = typeof MutationObserver !== 'undefined' ? new MutationObserver(this.manager.registerMutations) : null;
    this.observe();
  }
  getSnapshotBeforeUpdate() {
    var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
    const pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();
    if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
      var _this$manager;
      (_this$manager = this.manager) === null || _this$manager === void 0 || _this$manager.registerMutations(pendingMutations);
    }
    (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 || _this$mutationObserve3.disconnect();
    (_this$manager2 = this.manager) === null || _this$manager2 === void 0 || _this$manager2.restoreDOM();
    return null;
  }
  componentDidUpdate() {
    var _this$manager3;
    (_this$manager3 = this.manager) === null || _this$manager3 === void 0 || _this$manager3.clear();
    this.observe();
  }
  componentWillUnmount() {
    var _this$mutationObserve4;
    (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 || _this$mutationObserve4.disconnect();
  }
  render() {
    return this.props.children;
  }
}
// ПРОПАТЧЕНО (Saby): RestoreDOM включён и на iOS. Зажатый Backspace на iPadOS шлёт
// deleteContentBackward пачками, WebKit удаляет узлы из DOM раньше контролируемого
// апдейта Slate, и DOMEditor перестаёт находить DOM-точки по путям.
_defineProperty(RestoreDOMComponent, "contextType", EditorContext);
const RestoreDOM = IS_ANDROID || IS_IOS ? RestoreDOMComponent : ({
  children
}) => /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, children);

const EDITOR_TO_COMPOSING = new WeakMap();
/**
 * A React context for sharing the `composing` state of the editor.
 */
const ComposingContext = /*#__PURE__*/React.createContext(false);
/**
 * Get the current `composing` state of the editor.
 */
const useComposing = () => {
  return React.useContext(ComposingContext);
};

const _excluded$1 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderChunk", "renderLeaf", "renderText", "renderPlaceholder", "scrollSelectionIntoView", "scrollBoundary", "style", "as", "disableDefaultStyles"],
  _excluded2 = ["text"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const isTextDOMNode = node => isDOMNode(node) && node.nodeType === 3;
const isSameCaretPosition = (editor, a, b) => {
  if (!slate.Range.isCollapsed(a) || !slate.Range.isCollapsed(b)) {
    return false;
  }
  const [first, second] = slate.Path.isBefore(a.anchor.path, b.anchor.path) ? [a.anchor, b.anchor] : [b.anchor, a.anchor];
  if (second.offset !== 0 || !slate.Path.equals(slate.Path.next(first.path), second.path)) {
    return false;
  }
  const node = slate.Node.get(editor, first.path);
  return slate.Node.isText(node) && first.offset === node.text.length;
};
const Children = props => (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, useChildren(props)));
/**
 * Editable.
 */
const Editable = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const defaultRenderPlaceholder = React.useCallback(props => /*#__PURE__*/React__default.default.createElement(DefaultPlaceholder, _objectSpread({}, props)), []);
  const {
      autoFocus,
      decorate = defaultDecorate,
      onDOMBeforeInput: propsOnDOMBeforeInput,
      placeholder,
      readOnly = false,
      renderElement,
      renderChunk,
      renderLeaf,
      renderText,
      renderPlaceholder = defaultRenderPlaceholder,
      scrollSelectionIntoView = defaultScrollSelectionIntoView,
      scrollBoundary = noScrollBoundary,
      style: userStyle = {},
      as: Component = 'div',
      disableDefaultStyles = false
    } = props,
    attributes = _objectWithoutProperties(props, _excluded$1);
  const editor = useSlate();
  // Rerender editor when composition status changed
  const [isComposing, setIsComposing] = React.useState(false);
  useIsomorphicLayoutEffect(() => {
    EDITOR_TO_COMPOSING.set(editor, isComposing);
    return () => {
      EDITOR_TO_COMPOSING.delete(editor);
    };
  }, [editor, isComposing]);
  const ref = React.useRef(null);
  const previousChildren = React.useRef(editor.children);
  const previousSelection = React.useRef(editor.selection);
  const pendingInputScroll = React.useRef(false);
  const pendingNavigationScroll = React.useRef(false);
  const deferredOperations = React.useRef([]);
  const lastNativeInsertion = React.useRef(null);
  const [placeholderHeight, setPlaceholderHeight] = React.useState();
  const processing = React.useRef(false);
  const compositionDOM = useCompositionDOM(editor);
  const nativeFormatDOM = useNativeFormatDOM(editor);
  const deleteOnCompositionEndRef = React.useRef(false);
  const {
    onUserInput,
    receivedUserInput
  } = useTrackUserInput();
  const [, forceRender] = React.useReducer(s => s + 1, 0);
  EDITOR_TO_FORCE_RENDER.set(editor, forceRender);
  // Update internal state on each render.
  IS_READ_ONLY.set(editor, readOnly);
  // Keep track of some state for the event handler logic.
  const state = React.useMemo(() => ({
    isBlurring: false,
    isDraggingInternally: false,
    isTabbing: false,
    pendingSelection: null,
    isUpdatingSelection: false,
    latestElement: null,
    hasMarkPlaceholder: false
  }), []);
  // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
  // needs to be manually focused.
  //
  // If this stops working in Firefox, make sure nothing is causing this
  // component to re-render during the initial mount. If the DOM selection is
  // set by `useIsomorphicLayoutEffect` before `onDOMSelectionChange` updates
  // `editor.selection`, the DOM selection can be removed accidentally.
  React.useEffect(() => {
    if (!ref.current || !autoFocus) {
      return;
    }
    if (editor.children.length > 0) {
      ReactEditor.focus(editor);
    } else {
      ref.current.focus();
    }
  }, [autoFocus, editor]);
  /**
   * The AndroidInputManager object has a cyclical dependency on onDOMSelectionChange
   *
   * It is defined as a reference to simplify hook dependencies and clarify that
   * it needs to be initialized.
   */
  const androidInputManagerRef = React.useRef(undefined);
  // Listen on the native `selectionchange` event to be able to update any time
  // the selection changes. This is required because React's `onSelect` is leaky
  // and non-standard so it doesn't fire until after a selection has been
  // released. This causes issues in situations where another change happens
  // while a selection is being dragged.
  const onDOMSelectionChange = React.useMemo(() => throttle(() => {
    if (IS_NODE_MAP_DIRTY.get(editor)) {
      onDOMSelectionChange();
      return;
    }
    state.pendingSelection = null;
    const el = ReactEditor.toDOMNode(editor, editor);
    const root = el.getRootNode();
    if (!processing.current && IS_WEBKIT && root instanceof ShadowRoot) {
      processing.current = true;
      const active = getActiveElement();
      if (active) {
        document.execCommand('indent');
      } else {
        slate.Transforms.deselect(editor);
      }
      processing.current = false;
      return;
    }
    const androidInputManager = androidInputManagerRef.current;
    if ((IS_ANDROID || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
      const _root = ReactEditor.findDocumentOrShadowRoot(editor);
      const {
        activeElement
      } = _root;
      const _el = ReactEditor.toDOMNode(editor, editor);
      const domSelection = getSelection(_root);
      if (activeElement === _el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }
      if (!domSelection) {
        return slate.Transforms.deselect(editor);
      }
      const {
        anchorNode,
        focusNode
      } = domSelection;
      const anchorNodeSelectable = ReactEditor.hasEditableTarget(editor, anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
      const focusNodeInEditor = ReactEditor.hasTarget(editor, focusNode);
      const isFocusInEditor = isDOMNode(activeElement) && _el.contains(activeElement);
      if (anchorNodeSelectable && focusNodeInEditor && (readOnly || isFocusInEditor || state.isBlurring)) {
        const range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        if (range) {
          if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
            const isCaretOutsideText = domSelection.isCollapsed && !isInSlateText(anchorNode);
            if (isCaretOutsideText && editor.selection && slate.Range.equals(range, editor.selection)) {
              restoreDomSelection(editor, domSelection, state);
            } else {
              slate.Transforms.select(editor, range);
            }
          } else {
            androidInputManager === null || androidInputManager === void 0 || androidInputManager.handleUserSelect(range);
          }
        }
      }
      // Deselect the editor if the dom selection is not selectable in readonly mode
      if (readOnly && (!anchorNodeSelectable || !focusNodeInEditor)) {
        slate.Transforms.deselect(editor);
      }
    }
  }, 100), [editor, readOnly, state]);
  const scheduleOnDOMSelectionChange = React.useMemo(() => debounce(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  const flushDOMSelectionChange = React.useCallback(() => {
    const root = ReactEditor.toDOMNode(editor, editor).getRootNode();
    scheduleOnDOMSelectionChange.flush();
    if (!(IS_WEBKIT && root instanceof ShadowRoot)) {
      onDOMSelectionChange();
    }
    onDOMSelectionChange.flush();
  }, [editor, onDOMSelectionChange, scheduleOnDOMSelectionChange]);
  androidInputManagerRef.current = useAndroidInputManager({
    node: ref,
    onDOMSelectionChange,
    scheduleOnDOMSelectionChange
  });
  useIsomorphicLayoutEffect(() => {
    var _androidInputManagerR, _androidInputManagerR2;
    // Update element-related weak maps with the DOM element ref.
    let window;
    if (ref.current && (window = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }
    // Make sure the DOM selection state is in sync.
    const {
      selection
    } = editor;
    const scrollForInput = pendingInputScroll.current;
    pendingInputScroll.current = false;
    const scrollForNavigation = pendingNavigationScroll.current;
    pendingNavigationScroll.current = false;
    const selectionChangedByInput = (scrollForInput && previousChildren.current !== editor.children || scrollForNavigation) && !!selection && (!previousSelection.current || !slate.Range.equals(previousSelection.current, selection));
    previousChildren.current = editor.children;
    previousSelection.current = selection;
    const root = ReactEditor.findDocumentOrShadowRoot(editor);
    const domSelection = getSelection(root);
    if (!domSelection || !ReactEditor.isFocused(editor) || (_androidInputManagerR = androidInputManagerRef.current) !== null && _androidInputManagerR !== void 0 && _androidInputManagerR.hasPendingAction()) {
      return;
    }
    const setDomSelection = forceChange => {
      const hasDomSelection = domSelection.type !== 'None';
      // If the DOM selection is properly unset, we're done.
      if (!selection && !hasDomSelection) {
        return;
      }
      // Get anchorNode and focusNode
      const focusNode = domSelection.focusNode;
      let anchorNode;
      // COMPAT: In firefox the normal selection way does not work
      // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
      if (IS_FIREFOX && domSelection.rangeCount > 1) {
        const firstRange = domSelection.getRangeAt(0);
        const lastRange = domSelection.getRangeAt(domSelection.rangeCount - 1);
        // Right to left
        if (firstRange.startContainer === focusNode) {
          anchorNode = lastRange.endContainer;
        } else {
          // Left to right
          anchorNode = firstRange.startContainer;
        }
      } else {
        anchorNode = domSelection.anchorNode;
      }
      // verify that the dom selection is in the editor
      const editorElement = EDITOR_TO_ELEMENT.get(editor);
      let hasDomSelectionInEditor = false;
      if (containsShadowAware(editorElement, anchorNode) && containsShadowAware(editorElement, focusNode)) {
        hasDomSelectionInEditor = true;
      }
      // If the DOM selection is in the editor and the editor selection is already correct, we're done.
      if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
        var _anchorNode;
        const slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          // domSelection is not necessarily a valid Slate range
          // (e.g. when clicking on contentEditable:false element)
          suppressThrow: true
        });
        if (slateRange && slate.Range.equals(slateRange, selection) && (!state.hasMarkPlaceholder || (_anchorNode = anchorNode) !== null && _anchorNode !== void 0 && (_anchorNode = _anchorNode.parentElement) !== null && _anchorNode !== void 0 && _anchorNode.hasAttribute('data-slate-mark-placeholder'))) {
          if (selectionChangedByInput) {
            scrollSelectionIntoView(editor, domSelection.getRangeAt(0));
          }
          return;
        }
      }
      // when <Editable/> is being controlled through external value
      // then its children might just change - DOM responds to it on its own
      // but Slate's value is not being updated through any operation
      // and thus it doesn't transform selection on its own
      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        return;
      }
      const pending = state.pendingSelection;
      state.pendingSelection = null;
      if (pending && !forceChange && pending.basedOn === selection && !(selection && slate.Range.equals(pending.range, selection))) {
        slate.Transforms.select(editor, pending.range);
        return;
      }
      // Otherwise the DOM selection is out of sync, so update it.
      state.isUpdatingSelection = true;
      const newDomRange = selection && ReactEditor.resolveDOMRange(editor, selection);
      if (newDomRange) {
        if (ReactEditor.isComposing(editor) && !IS_ANDROID) {
          if (domSelection.rangeCount > 0) {
            domSelection.collapseToEnd();
          }
        } else if (slate.Range.isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }
        scrollSelectionIntoView(editor, newDomRange, scrollBoundary);
      } else {
        domSelection.removeAllRanges();
      }
      return newDomRange;
    };
    // In firefox if there is more then 1 range and we call setDomSelection we remove the ability to select more cells in a table
    if (domSelection.rangeCount <= 1) {
      setDomSelection();
    }
    const ensureSelection = ((_androidInputManagerR2 = androidInputManagerRef.current) === null || _androidInputManagerR2 === void 0 ? void 0 : _androidInputManagerR2.isFlushing()) === 'action';
    if (!IS_ANDROID || !ensureSelection) {
      setTimeout(() => {
        state.isUpdatingSelection = false;
      });
      return;
    }
    let timeoutId = null;
    const animationFrameId = requestAnimationFrame(() => {
      if (ensureSelection) {
        const ensureDomSelection = forceChange => {
          const el = EDITOR_TO_ELEMENT.get(editor);
          if (!el) {
            return;
          }
          el.focus();
          setDomSelection(forceChange);
        };
        // Compat: Android IMEs try to force their selection by manually re-applying it even after we set it.
        // This essentially would make setting the slate selection during an update meaningless, so we force it
        // again here. We can't only do it in the setTimeout after the animation frame since that would cause a
        // visible flicker.
        ensureDomSelection();
        timeoutId = setTimeout(() => {
          // COMPAT: While setting the selection in an animation frame visually correctly sets the selection,
          // it doesn't update GBoards spellchecker state. We have to manually trigger a selection change after
          // the animation frame to ensure it displays the correct state.
          ensureDomSelection(true);
          state.isUpdatingSelection = false;
        });
      }
    });
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });
  // Listen on the native `beforeinput` event to get real "Level 2" events. This
  // is required because React's `beforeinput` is fake and never really attaches
  // to the real event sadly. (2019/11/01)
  // https://github.com/facebook/react/issues/11211
  const onDOMBeforeInput = React.useCallback(event => {
    if (readOnly) {
      isDOMEventHandled(event, propsOnDOMBeforeInput);
      return;
    }
    if (!ReactEditor.hasEditableTarget(editor, event.target)) {
      return;
    }
    handleNativeHistoryEvents(editor, event);
    const el = ReactEditor.toDOMNode(editor, editor);
    const root = el.getRootNode();
    if (processing !== null && processing !== void 0 && processing.current && IS_WEBKIT && root instanceof ShadowRoot) {
      const ranges = event.getTargetRanges();
      const range = ranges[0];
      const newRange = new window.Range();
      newRange.setStart(range.startContainer, range.startOffset);
      newRange.setEnd(range.endContainer, range.endOffset);
      // Unresolvable ranges would throw out of the handler (#3556); suppress and skip the move.
      const slateRange = ReactEditor.toSlateRange(editor, newRange, {
        exactMatch: false,
        suppressThrow: true
      });
      if (slateRange) {
        slate.Transforms.select(editor, slateRange);
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    onUserInput();
    pendingInputScroll.current = true;
    if (!isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      var _EDITOR_TO_USER_SELEC;
      // COMPAT: BeforeInput events aren't cancelable on android, so we have to handle them differently using the android input manager.
      if (androidInputManagerRef.current) {
        return androidInputManagerRef.current.handleDOMBeforeInput(event);
      }
      // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
      // triggering a `beforeinput` expecting the change to be applied to the immediately before
      // set selection.
      flushDOMSelectionChange();
      const {
        selection
      } = editor;
      const {
        inputType: type
      } = event;
      const data = event.dataTransfer || event.data || undefined;
      const isCompositionChange = type === 'insertCompositionText' || type === 'deleteCompositionText';
      // COMPAT: use composition change events as a hint to where we should insert
      // composition text if we aren't composing to work around https://github.com/ianstormtaylor/slate/issues/5038
      if (isCompositionChange && ReactEditor.isComposing(editor)) {
        if (IS_CHROME || deleteOnCompositionEndRef.current) {
          compositionDOM.track(event.data);
        }
        return;
      }
      let native = false;
      let nativePoint = null;
      if (type === 'insertText' && selection && slate.Range.isCollapsed(selection) &&
      // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      event.data && event.data.length === 1 &&
      // ПРОПАТЧЕНО (Saby): нативная вставка и для кириллицы, цифр и знаков
      // препинания, иначе Slate перерисовывает строку на каждом таком символе.
      // https://github.com/ianstormtaylor/slate/issues/4320
      /[a-zа-я\d\-.?!)(,: ]/i.test(event.data) &&
      // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      selection.anchor.offset !== 0) {
        native = true;
        // Skip native if there are marks, as
        // `insertText` will insert a node, not just text.
        if (editor.marks || typeof slate.Editor.insertionPoint === 'function' && !slate.Point.equals(slate.Editor.insertionPoint(editor, selection.anchor), selection.anchor)) {
          native = false;
        }
        const domSelection = getSelection(ReactEditor.findDocumentOrShadowRoot(editor));
        const domAnchor = domSelection === null || domSelection === void 0 ? void 0 : domSelection.anchorNode;
        if (!isInSlateText(domAnchor)) {
          native = false;
        }
        // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint)
        if (!IS_NODE_MAP_DIRTY.get(editor)) {
          // Chrome also has issues correctly editing the end of anchor elements: https://bugs.chromium.org/p/chromium/issues/detail?id=1259100
          // Therefore we don't allow native events to insert text at the end of anchor nodes.
          const {
            anchor
          } = selection;
          const domPoint = ReactEditor.resolveDOMPoint(editor, anchor);
          if (!domPoint) {
            native = false;
          } else {
            var _node$parentElement, _window$getComputedSt;
            const [node, offset] = domPoint;
            const anchorNode = (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest('a');
            const window = ReactEditor.getWindow(editor);
            if (native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
              var _lastText$textContent;
              // Find the last text node inside the anchor.
              const lastText = window === null || window === void 0 ? void 0 : window.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();
              if (lastText === node && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
                native = false;
              }
            }
            // Chrome has issues with the presence of tab characters inside elements with whiteSpace = 'pre'
            // causing abnormal insert behavior: https://bugs.chromium.org/p/chromium/issues/detail?id=1219139
            if (native && node.parentElement && (window === null || window === void 0 || (_window$getComputedSt = window.getComputedStyle(node.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === 'pre') {
              const block = slate.Editor.above(editor, {
                at: anchor.path,
                match: n => slate.Node.isElement(n) && slate.Editor.isBlock(editor, n)
              });
              if (block && slate.Node.string(block[0]).includes('\t')) {
                native = false;
              }
            }
            if (native && isTextDOMNode(node)) {
              nativePoint = domSelection !== null && domSelection !== void 0 && domSelection.isCollapsed && isTextDOMNode(domAnchor) ? [domAnchor, domSelection.anchorOffset] : [node, offset];
            }
          }
        }
      }
      // COMPAT: For the deleting forward/backward input types we don't want
      // to change the selection because it is the range that will be deleted,
      // and those commands determine that for themselves.
      // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint via ReactEditor.toSlateRange)
      if ((!type.startsWith('delete') || type.startsWith('deleteBy')) && !IS_NODE_MAP_DIRTY.get(editor)) {
        const [targetRange] = event.getTargetRanges();
        if (targetRange) {
          // Unresolvable ranges would throw out of the handler (#3556); suppress and fall back to synthetic handling.
          const range = ReactEditor.toSlateRange(editor, targetRange, {
            exactMatch: false,
            suppressThrow: true
          });
          if (!range) {
            native = false;
          } else if (!selection || !slate.Range.equals(selection, range)) {
            native = false;
            const selectionRef = !isCompositionChange && editor.selection && !isSameCaretPosition(editor, editor.selection, range) && slate.Editor.rangeRef(editor, editor.selection);
            slate.Transforms.select(editor, range);
            if (selectionRef) {
              EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
            }
          }
          if (native && isTextDOMNode(targetRange.startContainer)) {
            nativePoint = [targetRange.startContainer, targetRange.startOffset];
          }
        }
      }
      // Composition change types occur while a user is composing text and can't be
      // cancelled. Let them through and wait for the composition to end.
      if (isCompositionChange) {
        return;
      }
      if (!native) {
        lastNativeInsertion.current = null;
        event.preventDefault();
      }
      // COMPAT: If the selection is expanded, even if the command seems like
      // a delete forward/backward command it should delete the selection.
      if (selection && slate.Range.isExpanded(selection) && type.startsWith('delete')) {
        const direction = type.endsWith('Backward') ? 'backward' : 'forward';
        slate.Editor.deleteFragment(editor, {
          direction
        });
        return;
      }
      switch (type) {
        case 'deleteByComposition':
        case 'deleteByCut':
        case 'deleteByDrag':
          {
            slate.Editor.deleteFragment(editor);
            break;
          }
        case 'deleteContent':
        case 'deleteContentForward':
          {
            slate.Editor.deleteForward(editor);
            break;
          }
        case 'deleteContentBackward':
          {
            slate.Editor.deleteBackward(editor);
            break;
          }
        case 'deleteEntireSoftLine':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'line'
            });
            slate.Editor.deleteForward(editor, {
              unit: 'line'
            });
            break;
          }
        case 'deleteHardLineBackward':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'block'
            });
            break;
          }
        case 'deleteSoftLineBackward':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'line'
            });
            break;
          }
        case 'deleteHardLineForward':
          {
            slate.Editor.deleteForward(editor, {
              unit: 'block'
            });
            break;
          }
        case 'deleteSoftLineForward':
          {
            slate.Editor.deleteForward(editor, {
              unit: 'line'
            });
            break;
          }
        case 'deleteWordBackward':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'word'
            });
            break;
          }
        case 'deleteWordForward':
          {
            slate.Editor.deleteForward(editor, {
              unit: 'word'
            });
            break;
          }
        case 'insertLineBreak':
          slate.Editor.insertSoftBreak(editor);
          break;
        case 'insertParagraph':
          {
            slate.Editor.insertBreak(editor);
            break;
          }
        case 'insertFromComposition':
        case 'insertFromDrop':
        case 'insertFromPaste':
        case 'insertFromYank':
        case 'insertReplacementText':
        case 'insertText':
          {
            if (type === 'insertFromComposition') {
              // COMPAT: in Safari, `compositionend` is dispatched after the
              // `beforeinput` for "insertFromComposition". But if we wait for it
              // then we will abort because we're still composing and the selection
              // won't be updated properly.
              // https://www.w3.org/TR/input-events-2/
              if (ReactEditor.isComposing(editor)) {
                setIsComposing(false);
                IS_COMPOSING.set(editor, false);
              }
            }
            // use a weak comparison instead of 'instanceof' to allow
            // programmatic access of paste events coming from external windows
            // like cypress where cy.window does not work realibly
            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === 'DataTransfer') {
              ReactEditor.insertData(editor, data);
            } else if (typeof data === 'string') {
              // Only insertText operations use the native functionality, for now.
              // Potentially expand to single character deletes, as well.
              if (native) {
                lastNativeInsertion.current = null;
                if (nativePoint && selection) {
                  const [node] = slate.Editor.leaf(editor, selection.anchor);
                  const [domNode, domOffset] = nativePoint;
                  lastNativeInsertion.current = {
                    point: selection.anchor,
                    text: node.text,
                    domNode,
                    domOffset,
                    domText: domNode.data,
                    char: data
                  };
                }
                deferredOperations.current.push(() => slate.Editor.insertText(editor, data));
              } else {
                slate.Editor.insertText(editor, data);
              }
            }
            break;
          }
      }
      // Restore the actual user section if nothing manually set it.
      const toRestore = (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
      EDITOR_TO_USER_SELECTION.delete(editor);
      if (toRestore && (!editor.selection || !slate.Range.equals(editor.selection, toRestore))) {
        slate.Transforms.select(editor, toRestore);
      }
    }
  }, [editor, onUserInput, propsOnDOMBeforeInput, compositionDOM, flushDOMSelectionChange, readOnly]);
  const callbackRef = React.useCallback(node => {
    if (node == null) {
      onDOMSelectionChange.cancel();
      scheduleOnDOMSelectionChange.cancel();
      EDITOR_TO_ELEMENT.delete(editor);
      NODE_TO_ELEMENT.delete(editor);
      // ПРОПАТЧЕНО (Saby): после размонтирования отложенный ретрай focus() бесполезен.
      // http://online.saby.ru/opendoc.html?guid=f9aff325-64c6-486b-bb30-6afc29c7a4f8&client=3
      cancelPendingFocusRetry(editor);
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        // @ts-ignore The `beforeinput` event isn't recognized.
        ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
      }
    } else {
      // Attach a native DOM event handler for `beforeinput` events, because React's
      // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
      // real `beforeinput` events sadly... (2019/11/04)
      // https://github.com/facebook/react/issues/11211
      if (HAS_BEFORE_INPUT_SUPPORT) {
        // @ts-ignore The `beforeinput` event isn't recognized.
        node.addEventListener('beforeinput', onDOMBeforeInput);
      }
    }
    ref.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  }, [onDOMSelectionChange, scheduleOnDOMSelectionChange, editor, onDOMBeforeInput, forwardedRef]);
  useIsomorphicLayoutEffect(() => {
    const window = ReactEditor.getWindow(editor);
    // COMPAT: In Chrome, `selectionchange` events can fire when <input> and
    // <textarea> elements are appended to the DOM, causing
    // `editor.selection` to be overwritten in some circumstances.
    // (2025/01/16) https://issues.chromium.org/issues/389368412
    const readUnsyncedSelection = () => {
      const androidInputManager = androidInputManagerRef.current;
      if (state.isUpdatingSelection || state.isDraggingInternally || ReactEditor.isComposing(editor) || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges() || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing() || IS_NODE_MAP_DIRTY.get(editor)) {
        return null;
      }
      const domSelection = getSelection(ReactEditor.findDocumentOrShadowRoot(editor));
      if (!domSelection || !(ReactEditor.hasEditableTarget(editor, domSelection.anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, domSelection.anchorNode)) || !ReactEditor.hasTarget(editor, domSelection.focusNode)) {
        return null;
      }
      const range = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: true
      });
      return range ? {
        range,
        basedOn: editor.selection
      } : null;
    };
    const onSelectionChange = ({
      target
    }) => {
      const targetElement = target instanceof HTMLElement ? target : null;
      const targetTagName = targetElement === null || targetElement === void 0 ? void 0 : targetElement.tagName;
      if (targetTagName === 'INPUT' || targetTagName === 'TEXTAREA') {
        return;
      }
      state.pendingSelection = readUnsyncedSelection();
      scheduleOnDOMSelectionChange();
    };
    // Attach a native DOM event handler for `selectionchange`, because React's
    // built-in `onSelect` handler doesn't fire for all selection changes. It's
    // a leaky polyfill that only fires on keypresses or clicks. Instead, we
    // want to fire for any change to the selection inside the editor.
    // (2019/11/04) https://github.com/facebook/react/issues/5785
    window.document.addEventListener('selectionchange', onSelectionChange);
    const onKeyDown = event => {
      state.isTabbing = event.key === 'Tab';
    };
    const clearTabbing = () => {
      state.isTabbing = false;
    };
    window.document.addEventListener('keydown', onKeyDown, true);
    window.document.addEventListener('keyup', clearTabbing, true);
    window.document.addEventListener('pointerdown', clearTabbing, true);
    // Listen for dragend and drop globally. In Firefox, if a drop handler
    // initiates an operation that causes the originally dragged element to
    // unmount, that element will not emit a dragend event. (2024/06/21)
    const stoppedDragging = () => {
      state.isDraggingInternally = false;
    };
    window.document.addEventListener('dragend', stoppedDragging);
    window.document.addEventListener('drop', stoppedDragging);
    return () => {
      window.document.removeEventListener('selectionchange', onSelectionChange);
      window.document.removeEventListener('keydown', onKeyDown, true);
      window.document.removeEventListener('keyup', clearTabbing, true);
      window.document.removeEventListener('pointerdown', clearTabbing, true);
      window.document.removeEventListener('dragend', stoppedDragging);
      window.document.removeEventListener('drop', stoppedDragging);
    };
  }, [editor, scheduleOnDOMSelectionChange, state]);
  const decorations = decorate([editor, []]);
  const decorateContext = useDecorateContext(decorate);
  const showPlaceholder = placeholder && editor.children.length === 1 && Array.from(slate.Node.texts(editor)).length === 1 && slate.Node.string(editor) === '' && !isComposing;
  const placeHolderResizeHandler = React.useCallback(placeholderEl => {
    if (placeholderEl && showPlaceholder) {
      var _placeholderEl$getBou;
      setPlaceholderHeight((_placeholderEl$getBou = placeholderEl.getBoundingClientRect()) === null || _placeholderEl$getBou === void 0 ? void 0 : _placeholderEl$getBou.height);
    } else {
      setPlaceholderHeight(undefined);
    }
  }, [showPlaceholder]);
  if (showPlaceholder) {
    const start = slate.Editor.start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      onPlaceholderResize: placeHolderResizeHandler,
      anchor: start,
      focus: start
    });
  }
  const {
    marks
  } = editor;
  state.hasMarkPlaceholder = false;
  if (editor.selection && slate.Range.isCollapsed(editor.selection) && marks) {
    const {
      anchor
    } = editor.selection;
    const leaf = slate.Node.leaf(editor, anchor.path);
    const {
        text
      } = leaf,
      rest = _objectWithoutProperties(leaf, _excluded2);
    // While marks isn't a 'complete' text, we can still use loose Text.equals
    // here which only compares marks anyway.
    if (!slate.Text.equals(leaf, marks, {
      loose: true
    })) {
      state.hasMarkPlaceholder = true;
      const unset = Object.fromEntries(Object.keys(rest).map(mark => [mark, null]));
      decorations.push(_objectSpread(_objectSpread(_objectSpread({
        [MARK_PLACEHOLDER_SYMBOL]: true
      }, unset), marks), {}, {
        anchor,
        focus: anchor
      }));
    }
  }
  // Update EDITOR_TO_MARK_PLACEHOLDER_MARKS in setTimeout useEffect to ensure we don't set it
  // before we receive the composition end event.
  React.useEffect(() => {
    setTimeout(() => {
      const {
        selection
      } = editor;
      if (selection) {
        const {
          anchor
        } = selection;
        const text = slate.Node.leaf(editor, anchor.path);
        // While marks isn't a 'complete' text, we can still use loose Text.equals
        // here which only compares marks anyway.
        if (marks && !slate.Text.equals(text, marks, {
          loose: true
        })) {
          EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks);
          return;
        }
      }
      EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
    });
  });
  useFlushDeferredSelectorsOnRender();
  return /*#__PURE__*/React__default.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /*#__PURE__*/React__default.default.createElement(ComposingContext.Provider, {
    value: isComposing
  }, /*#__PURE__*/React__default.default.createElement(DecorateContext.Provider, {
    value: decorateContext
  }, /*#__PURE__*/React__default.default.createElement(RestoreDOM, {
    node: ref,
    receivedUserInput: receivedUserInput
  }, /*#__PURE__*/React__default.default.createElement(Component, _objectSpread(_objectSpread({
    role: readOnly ? undefined : 'textbox',
    "aria-multiline": readOnly ? undefined : true,
    "aria-placeholder": showPlaceholder ? placeholder : undefined,
    translate: "no"
  }, attributes), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : 'false',
    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : 'false',
    "data-slate-editor": true,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !readOnly,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: true,
    ref: callbackRef,
    style: _objectSpread(_objectSpread({}, disableDefaultStyles ? {} : _objectSpread({
      // Allow positioning relative to the editable element.
      position: 'relative',
      // Preserve adjacent whitespace and new lines.
      whiteSpace: 'pre-wrap',
      // Allow words to break if they are too long.
      wordWrap: 'break-word'
    }, placeholderHeight ? {
      minHeight: placeholderHeight
    } : {})), userStyle),
    onBeforeInput: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onBeforeInput);
        return;
      }
      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to React's leaky polyfill instead just for it. It
      // only works for the `insertText` input type.
      if (!HAS_BEFORE_INPUT_SUPPORT && !isEventHandled(event, attributes.onBeforeInput) && ReactEditor.hasSelectableTarget(editor, event.target)) {
        event.preventDefault();
        if (!ReactEditor.isComposing(editor)) {
          const text = event.data;
          slate.Editor.insertText(editor, text);
        }
      }
    }, [attributes.onBeforeInput, editor, readOnly]),
    onInput: React.useCallback(event => {
      var _event$nativeEvent$in;
      if (readOnly) {
        isEventHandled(event, attributes.onInput);
        return;
      }
      if (!ReactEditor.hasEditableTarget(editor, event.target)) {
        return;
      }
      compositionDOM.pause();
      if (isEventHandled(event, attributes.onInput)) {
        return;
      }
      if (androidInputManagerRef.current) {
        androidInputManagerRef.current.handleInput();
        return;
      }
      if ((_event$nativeEvent$in = event.nativeEvent.inputType) !== null && _event$nativeEvent$in !== void 0 && _event$nativeEvent$in.startsWith('format')) {
        const domSelection = getSelection(ReactEditor.findDocumentOrShadowRoot(editor));
        const range = domSelection && ReactEditor.resolveSlateRange(editor, domSelection);
        nativeFormatDOM.revert();
        if (domSelection && range) {
          slate.Transforms.select(editor, range);
          restoreDomSelection(editor, domSelection, state);
        }
        return;
      }
      // Flush native operations, as native events will have propogated
      // and we can correctly compare DOM text values in components
      // to stop rendering, so that browser functions like autocorrect
      // and spellcheck work as expected.
      for (const op of deferredOperations.current) {
        op();
      }
      deferredOperations.current = [];
      const nativeInsertion = lastNativeInsertion.current;
      lastNativeInsertion.current = null;
      if (nativeInsertion) {
        const {
          point,
          text,
          domNode,
          domOffset,
          domText,
          char
        } = nativeInsertion;
        const node = slate.Node.getIf(editor, point.path);
        if (slate.Text.isText(node) && node.text === text && domNode.isConnected && domNode.data === domText.slice(0, domOffset) + char + domText.slice(domOffset)) {
          domNode.deleteData(domOffset, char.length);
          if (editor.selection && slate.Range.isCollapsed(editor.selection) && slate.Point.equals(editor.selection.anchor, point)) {
            var _getSelection;
            (_getSelection = getSelection(ReactEditor.findDocumentOrShadowRoot(editor))) === null || _getSelection === void 0 || _getSelection.collapse(domNode, domOffset);
          }
        }
      }
      // COMPAT: Since `beforeinput` doesn't fully `preventDefault`,
      // there's a chance that content might be placed in the browser's undo stack.
      // This means undo can be triggered even when the div is not focused,
      // and it only triggers the input event for the node. (2024/10/09)
      if (!ReactEditor.isFocused(editor)) {
        handleNativeHistoryEvents(editor, event.nativeEvent);
      }
    }, [readOnly, attributes.onInput, editor, compositionDOM, nativeFormatDOM]),
    onBlur: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onBlur);
        return;
      }
      if (state.isUpdatingSelection || !ReactEditor.hasSelectableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }
      // COMPAT: If the current `activeElement` is still the previous
      // one, this is due to the window being blurred when the tab
      // itself becomes unfocused, so we want to abort early to allow to
      // editor to stay focused when the tab becomes focused again.
      const root = ReactEditor.findDocumentOrShadowRoot(editor);
      if (state.latestElement === root.activeElement) {
        return;
      }
      const {
        relatedTarget
      } = event;
      const el = ReactEditor.toDOMNode(editor, editor);
      // COMPAT: The event should be ignored if the focus is returning
      // to the editor from an embedded editable element (eg. an <input>
      // element inside a void node).
      if (relatedTarget === el) {
        return;
      }
      // COMPAT: The event should be ignored if the focus is moving from
      // the editor to inside a void node's spacer element.
      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        return;
      }
      // COMPAT: The event should be ignored if the focus is moving to a
      // non- editable section of an element that isn't a void node (eg.
      // a list item of the check list example).
      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        const node = ReactEditor.toSlateNode(editor, relatedTarget);
        if (slate.Node.isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }
      state.isBlurring = true;
      try {
        flushDOMSelectionChange();
      } finally {
        state.isBlurring = false;
      }
      // COMPAT: Safari doesn't always remove the selection even if the content-
      // editable element no longer has focus. Refer to:
      // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web
      if (IS_WEBKIT) {
        const domSelection = getSelection(root);
        domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
      }
      IS_FOCUSED.delete(editor);
    }, [readOnly, state, editor, attributes.onBlur, flushDOMSelectionChange]),
    onClick: React.useCallback(event => {
      if (ReactEditor.hasTarget(editor, event.target)) {
        flushDOMSelectionChange();
      }
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        const node = ReactEditor.toSlateNode(editor, event.target);
        let path;
        try {
          path = ReactEditor.findPath(editor, node);
        } catch (_unused) {
          return;
        }
        // At this time, the Slate document may be arbitrarily different,
        // because onClick handlers can change the document before we get here.
        // Therefore we must check that this path actually exists,
        // and that it still refers to the same node.
        if (!slate.Editor.hasPath(editor, path) || slate.Node.get(editor, path) !== node) {
          return;
        }
        if (event.detail === TRIPLE_CLICK && path.length >= 1) {
          let blockPath = path;
          if (!(slate.Node.isElement(node) && slate.Editor.isBlock(editor, node))) {
            var _block$;
            const block = slate.Editor.above(editor, {
              match: n => slate.Node.isElement(n) && slate.Editor.isBlock(editor, n),
              at: path
            });
            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path.slice(0, 1);
          }
          const isIsolated = slate.Editor.above(editor, {
            at: slate.Editor.start(editor, blockPath),
            match: n => {
              var _editor$isIsolated;
              return slate.Node.isElement(n) && !!((_editor$isIsolated = editor.isIsolated) !== null && _editor$isIsolated !== void 0 && _editor$isIsolated.call(editor, n));
            }
          });
          if (blockPath.length > 1 || isIsolated) {
            const range = slate.Editor.range(editor, blockPath);
            slate.Transforms.select(editor, range);
            return;
          }
        }
        if (readOnly) {
          return;
        }
        const start = slate.Editor.start(editor, path);
        const end = slate.Editor.end(editor, path);
        const startVoid = slate.Editor.void(editor, {
          at: start
        });
        const endVoid = slate.Editor.void(editor, {
          at: end
        });
        const selectedVoid = editor.selection && slate.Range.isCollapsed(editor.selection) && slate.Editor.void(editor, {
          at: editor.selection.anchor
        });
        if (event.shiftKey && selectedVoid && !slate.Path.isAncestor(selectedVoid[1], path) && !(startVoid && slate.Path.equals(startVoid[1], selectedVoid[1]))) {
          const clicked = ReactEditor.resolveEventRange(editor, event);
          if (!clicked) {
            return;
          }
          const voidStart = slate.Editor.start(editor, selectedVoid[1]);
          const voidEnd = slate.Editor.end(editor, selectedVoid[1]);
          const anchor = slate.Point.isBefore(clicked.anchor, voidStart) ? voidEnd : voidStart;
          slate.Transforms.select(editor, {
            anchor,
            focus: clicked.anchor
          });
          return;
        }
        if (startVoid && endVoid && slate.Path.equals(startVoid[1], endVoid[1])) {
          if (event.shiftKey && editor.selection) {
            const {
              anchor
            } = editor.selection;
            const focus = slate.Point.isBefore(anchor, start) ? end : start;
            slate.Transforms.select(editor, {
              anchor,
              focus
            });
            return;
          }
          const range = slate.Editor.range(editor, start);
          slate.Transforms.select(editor, range);
        }
      }
    }, [editor, attributes.onClick, readOnly, flushDOMSelectionChange]),
    onCompositionEnd: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onCompositionEnd);
        return;
      }
      if (isDOMEventTargetInput(event)) {
        return;
      }
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        var _androidInputManagerR3;
        Promise.resolve().then(() => {
          setIsComposing(false);
          IS_COMPOSING.set(editor, false);
        });
        (_androidInputManagerR3 = androidInputManagerRef.current) === null || _androidInputManagerR3 === void 0 || _androidInputManagerR3.handleCompositionEnd(event);
        const deleteOnCompositionEnd = deleteOnCompositionEndRef.current;
        deleteOnCompositionEndRef.current = false;
        if (isEventHandled(event, attributes.onCompositionEnd) || IS_ANDROID) {
          compositionDOM.clear();
          return;
        }
        if (deleteOnCompositionEnd && !event.data) {
          compositionDOM.restore();
          slate.Editor.deleteFragment(editor);
        }
        // COMPAT: In Chrome, `beforeinput` events for compositions
        // aren't correct and never fire the "insertFromComposition"
        // type that we need. So instead, insert whenever a composition
        // ends since it will already have been committed to the DOM.
        if (!IS_WEBKIT && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
          const placeholderMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
          EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
          // Ensure we insert text with the marks the user was actually seeing
          if (placeholderMarks !== undefined) {
            EDITOR_TO_USER_MARKS.set(editor, editor.marks);
            editor.marks = placeholderMarks;
          }
          compositionDOM.restore();
          removeStrayComposition(editor, event.data);
          slate.Editor.insertText(editor, event.data);
          const userMarks = EDITOR_TO_USER_MARKS.get(editor);
          EDITOR_TO_USER_MARKS.delete(editor);
          if (userMarks !== undefined) {
            editor.marks = userMarks;
          }
        }
        compositionDOM.clear();
      }
    }, [readOnly, attributes.onCompositionEnd, editor, compositionDOM]),
    onCompositionUpdate: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onCompositionUpdate);
        return;
      }
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate) && !isDOMEventTargetInput(event)) {
        if (!ReactEditor.isComposing(editor)) {
          setIsComposing(true);
          IS_COMPOSING.set(editor, true);
        }
      }
    }, [readOnly, attributes.onCompositionUpdate, editor]),
    onCompositionStart: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onCompositionStart);
        return;
      }
      if (isDOMEventTargetInput(event)) {
        return;
      }
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        var _androidInputManagerR4;
        (_androidInputManagerR4 = androidInputManagerRef.current) === null || _androidInputManagerR4 === void 0 || _androidInputManagerR4.handleCompositionStart(event);
        if (isEventHandled(event, attributes.onCompositionStart) || IS_ANDROID) {
          return;
        }
        compositionDOM.clear();
        setIsComposing(true);
        flushDOMSelectionChange();
        const {
          selection
        } = editor;
        if (selection && slate.Range.isExpanded(selection)) {
          if (IS_FIREFOX && !IS_FIREFOX_LEGACY) {
            compositionDOM.observe();
            deleteOnCompositionEndRef.current = true;
            return;
          }
          slate.Editor.deleteFragment(editor);
          return;
        }
      }
    }, [readOnly, attributes.onCompositionStart, editor, compositionDOM, flushDOMSelectionChange]),
    onCopy: React.useCallback(event => {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy) && !isDOMEventTargetInput(event)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'copy');
      }
    }, [attributes.onCopy, editor]),
    onCut: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onCut);
        return;
      }
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut) && !isDOMEventTargetInput(event)) {
        event.preventDefault();
        selectMovableRange(editor);
        ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
        const {
          selection
        } = editor;
        if (selection) {
          if (slate.Range.isExpanded(selection)) {
            deleteMovedRange(editor, selection);
          } else {
            const node = slate.Node.parent(editor, selection.anchor.path);
            if (slate.Editor.isVoid(editor, node)) {
              slate.Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, editor, attributes.onCut]),
    onDragOver: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onDragOver);
        return;
      }
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        // Only when the target is void, call `preventDefault` to signal
        // that drops are allowed. Editable content is droppable by
        // default, and calling `preventDefault` hides the cursor.
        const node = ReactEditor.toSlateNode(editor, event.target);
        if (slate.Node.isElement(node) && slate.Editor.isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [readOnly, attributes.onDragOver, editor]),
    onDragStart: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onDragStart);
        return;
      }
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        const node = ReactEditor.toSlateNode(editor, event.target);
        const path = ReactEditor.findPath(editor, node);
        const voidMatch = slate.Node.isElement(node) && slate.Editor.isVoid(editor, node) || slate.Editor.void(editor, {
          at: path,
          voids: true
        });
        // If starting a drag on a void node, make sure it is selected
        // so that it shows up in the selection's fragment.
        if (voidMatch) {
          const range = slate.Editor.range(editor, path);
          slate.Transforms.select(editor, range);
        }
        selectMovableRange(editor);
        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, 'drag');
      }
    }, [readOnly, editor, attributes.onDragStart, state]),
    onDrop: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onDrop);
        return;
      }
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault();
        // Keep a reference to the dragged range before updating selection
        const draggedRange = editor.selection;
        // Find the range where the drop happened. It is resolved from
        // the drop coordinates, which can point outside of the editor
        // even though the event's target is inside it (e.g. when the
        // page scrolled during the drag), leaving no range to drop at.
        const range = ReactEditor.findEventRange(editor, event, {
          suppressThrow: true
        });
        const data = event.dataTransfer;
        if (!range && state.isDraggingInternally) {
          // The dragged content already sits in the editor, so without
          // a target it stays where it is.
          return;
        }
        if (range) {
          slate.Transforms.select(editor, range);
          if (state.isDraggingInternally && draggedRange) {
            if (slate.Range.includes(draggedRange, range.anchor)) {
              return;
            }
            if (!slate.Editor.void(editor, {
              at: range,
              voids: true
            })) {
              const dropRef = slate.Editor.rangeRef(editor, range);
              deleteMovedRange(editor, draggedRange);
              const dropRange = dropRef.unref();
              if (dropRange) {
                slate.Transforms.select(editor, dropRange);
              }
            }
          }
        } else if (!editor.selection && editor.children.length > 0) {
          // Without a drop position the data goes to the current
          // selection, or to the end of the document if there is none.
          slate.Transforms.select(editor, slate.Editor.end(editor, []));
        }
        ReactEditor.insertData(editor, data);
        // When dragging from another source into the editor, it's possible
        // that the current editor does not have focus.
        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
    }, [readOnly, editor, attributes.onDrop, state]),
    onDragEnd: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onDragEnd);
        return;
      }
      if (state.isDraggingInternally && attributes.onDragEnd && ReactEditor.hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      }
    }, [readOnly, state, attributes, editor]),
    onFocus: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onFocus);
        return;
      }
      if (!state.isUpdatingSelection && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        const el = ReactEditor.toDOMNode(editor, editor);
        const root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        // COMPAT: If the editor has nested editable elements, the focus
        // can go to them. In Firefox, this must be prevented because it
        // results in issues with keyboard navigation. (2017/03/30)
        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }
        IS_FOCUSED.set(editor, true);
        if (state.isTabbing && event.target === el) {
          const domSelection = getSelection(root);
          if (domSelection && editor.selection) {
            state.pendingSelection = null;
            restoreDomSelection(editor, domSelection, state);
          }
          state.isTabbing = false;
        }
      }
    }, [readOnly, state, editor, attributes.onFocus]),
    onKeyDown: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onKeyDown);
        return;
      }
      if (ReactEditor.hasEditableTarget(editor, event.target)) {
        var _androidInputManagerR5;
        (_androidInputManagerR5 = androidInputManagerRef.current) === null || _androidInputManagerR5 === void 0 || _androidInputManagerR5.handleKeyDown(event);
        const {
          nativeEvent
        } = event;
        // COMPAT: The composition end event isn't fired reliably in all browsers,
        // so we sometimes might end up stuck in a composition state even though we
        // aren't composing any more.
        if (ReactEditor.isComposing(editor) && (nativeEvent.isComposing === false || isDeletingInVoid(editor, nativeEvent))) {
          IS_COMPOSING.set(editor, false);
          setIsComposing(false);
        }
        if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
          return;
        }
        pendingNavigationScroll.current = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(nativeEvent.key);
        const {
          selection
        } = editor;
        const element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        const isRTL = getDirection(slate.Node.string(element)) === 'rtl';
        // COMPAT: Since we prevent the default behavior on
        // `beforeinput` events, the browser doesn't think there's ever
        // any history stack to undo or redo, so we have to manage these
        // hotkeys ourselves. (2019/11/06)
        if (hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          const maybeHistoryEditor = editor;
          if (typeof maybeHistoryEditor.redo === 'function') {
            maybeHistoryEditor.redo();
          }
          return;
        }
        if (hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          const maybeHistoryEditor = editor;
          if (typeof maybeHistoryEditor.undo === 'function') {
            maybeHistoryEditor.undo();
          }
          return;
        }
        if ((IS_CHROME || IS_WEBKIT) && nativeEvent.key === 'ArrowUp' && !nativeEvent.altKey && !nativeEvent.ctrlKey && !nativeEvent.metaKey && selection && (nativeEvent.shiftKey || slate.Range.isCollapsed(selection))) {
          const above = getPointAboveTrailingNewline(editor, selection.focus);
          if (above) {
            event.preventDefault();
            slate.Transforms.select(editor, nativeEvent.shiftKey ? {
              anchor: selection.anchor,
              focus: above
            } : above);
            return;
          }
        }
        // COMPAT: Certain browsers don't handle the selection updates
        // properly. In Chrome, the selection isn't properly extended.
        // And in Firefox, the selection isn't properly collapsed.
        // (2017/10/17)
        if (hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line',
            reverse: true
          });
          return;
        }
        if (hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line'
          });
          return;
        }
        if (hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line',
            edge: 'focus',
            reverse: true
          });
          return;
        }
        if (hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line',
            edge: 'focus'
          });
          return;
        }
        // COMPAT: If a void node is selected, or a zero-width text node
        // adjacent to an inline is selected, we need to handle these
        // hotkeys manually because browsers won't be able to skip over
        // the void node with the zero-width space not being an empty
        // string.
        if (hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && slate.Range.isCollapsed(selection)) {
            slate.Transforms.move(editor, {
              reverse: !isRTL,
              unit: getCharacterMoveUnit(editor, selection.focus, !isRTL)
            });
          } else {
            slate.Transforms.collapse(editor, {
              edge: isRTL ? 'end' : 'start'
            });
          }
          return;
        }
        if (hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();
          if (selection && slate.Range.isCollapsed(selection)) {
            slate.Transforms.move(editor, {
              reverse: isRTL,
              unit: getCharacterMoveUnit(editor, selection.focus, isRTL)
            });
          } else {
            slate.Transforms.collapse(editor, {
              edge: isRTL ? 'start' : 'end'
            });
          }
          return;
        }
        const wordBackward = hotkeys.isMoveWordBackward(nativeEvent);
        if (wordBackward || hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();
          const root = ReactEditor.findDocumentOrShadowRoot(editor);
          const domSelection = getSelection(root);
          if (domSelection !== null && domSelection !== void 0 && domSelection.modify) {
            domSelection.modify('move', wordBackward ? 'left' : 'right', 'word');
            const range = ReactEditor.toSlateRange(editor, domSelection, {
              exactMatch: false,
              suppressThrow: true
            });
            if (range) {
              slate.Transforms.select(editor, range);
              return;
            }
          }
          if (selection && slate.Range.isExpanded(selection)) {
            slate.Transforms.collapse(editor, {
              edge: 'focus'
            });
          }
          slate.Transforms.move(editor, {
            unit: 'word',
            reverse: wordBackward ? !isRTL : isRTL
          });
          return;
        }
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to guessing at the input intention for hotkeys.
        // COMPAT: In iOS, some of these hotkeys are handled in the
        if (!HAS_BEFORE_INPUT_SUPPORT) {
          // We don't have a core behavior for these, but they change the
          // DOM if we don't prevent them, so we have to.
          if (hotkeys.isBold(nativeEvent) || hotkeys.isItalic(nativeEvent) || hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }
          if (hotkeys.isSoftBreak(nativeEvent)) {
            event.preventDefault();
            slate.Editor.insertSoftBreak(editor);
            return;
          }
          if (hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            slate.Editor.insertBreak(editor);
            return;
          }
          if (hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate.Editor.deleteBackward(editor);
            }
            return;
          }
          if (hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate.Editor.deleteForward(editor);
            }
            return;
          }
          if (hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate.Editor.deleteBackward(editor, {
                unit: 'line'
              });
            }
            return;
          }
          if (hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate.Editor.deleteForward(editor, {
                unit: 'line'
              });
            }
            return;
          }
          if (hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate.Editor.deleteBackward(editor, {
                unit: 'word'
              });
            }
            return;
          }
          if (hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate.Editor.deleteForward(editor, {
                unit: 'word'
              });
            }
            return;
          }
        } else {
          if (IS_CHROME || IS_WEBKIT) {
            // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
            // an event when deleting backwards in a selected void inline node
            if (selection && (hotkeys.isDeleteBackward(nativeEvent) || hotkeys.isDeleteForward(nativeEvent)) && slate.Range.isCollapsed(selection)) {
              const currentNode = slate.Node.parent(editor, selection.anchor.path);
              if (slate.Node.isElement(currentNode) && slate.Editor.isVoid(editor, currentNode) && (slate.Editor.isInline(editor, currentNode) || slate.Editor.isBlock(editor, currentNode))) {
                event.preventDefault();
                if (hotkeys.isDeleteForward(nativeEvent)) {
                  slate.Editor.deleteForward(editor, {
                    unit: 'block'
                  });
                } else {
                  slate.Editor.deleteBackward(editor, {
                    unit: 'block'
                  });
                }
                return;
              }
            }
          }
          if (IS_WEBKIT && selection && slate.Range.isCollapsed(selection)) {
            if (hotkeys.isDeleteBackward(nativeEvent) && slate.Editor.isStart(editor, selection.anchor, [])) {
              event.preventDefault();
              slate.Editor.deleteBackward(editor);
              return;
            }
            if (hotkeys.isDeleteForward(nativeEvent) && slate.Editor.isEnd(editor, selection.anchor, [])) {
              event.preventDefault();
              slate.Editor.deleteForward(editor);
              return;
            }
          }
        }
      }
    }, [readOnly, editor, attributes.onKeyDown]),
    onPaste: React.useCallback(event => {
      if (readOnly) {
        isEventHandled(event, attributes.onPaste);
        return;
      }
      if (ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to React's `onPaste` here instead.
        // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
        // when "paste without formatting" is used, so fallback. (2020/02/20)
        // COMPAT: Safari InputEvents generated by pasting won't include
        // application/x-slate-fragment items, so use the
        // ClipboardEvent here. (2023/03/15)
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent) || IS_WEBKIT) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, editor, attributes.onPaste])
  }), /*#__PURE__*/React__default.default.createElement(Children, {
    decorations: decorations,
    node: editor,
    renderElement: renderElement,
    renderChunk: renderChunk,
    renderPlaceholder: renderPlaceholder,
    renderLeaf: renderLeaf,
    renderText: renderText
  }))))));
});
/**
 * The default placeholder element
 */
const isDeletingInVoid = (editor, event) => {
  const {
    selection
  } = editor;
  return !!selection && slate.Range.isCollapsed(selection) && (hotkeys.isDeleteBackward(event) || hotkeys.isDeleteForward(event)) && !!slate.Editor.void(editor, {
    at: selection
  });
};
const isInSlateText = node => {
  var _node$parentElement2;
  return isDOMNode(node) && node.nodeType === node.TEXT_NODE && !!((_node$parentElement2 = node.parentElement) !== null && _node$parentElement2 !== void 0 && _node$parentElement2.closest('[data-slate-string], [data-slate-zero-width]'));
};
const restoreDomSelection = (editor, domSelection, state) => {
  if (!editor.selection) {
    return;
  }
  const domRange = ReactEditor.resolveDOMRange(editor, editor.selection);
  if (!domRange) {
    return;
  }
  const backward = slate.Range.isBackward(editor.selection);
  state.isUpdatingSelection = true;
  domSelection.setBaseAndExtent(backward ? domRange.endContainer : domRange.startContainer, backward ? domRange.endOffset : domRange.startOffset, backward ? domRange.startContainer : domRange.endContainer, backward ? domRange.startOffset : domRange.endOffset);
  setTimeout(() => {
    state.isUpdatingSelection = false;
  });
};
const selectMovableRange = editor => {
  const {
    selection
  } = editor;
  if (selection && slate.Range.isExpanded(selection)) {
    const movableRange = getMovableRange(editor, selection);
    if (!slate.Range.equals(movableRange, selection)) {
      slate.Transforms.select(editor, movableRange);
    }
  }
};
const DefaultPlaceholder = ({
  attributes,
  children
}) => (/*#__PURE__*/React__default.default.createElement("span", _objectSpread({}, attributes), children, IS_ANDROID && /*#__PURE__*/React__default.default.createElement("br", null)));
/**
 * A default memoized decorate function.
 */
const defaultDecorate = () => [];
/**
 * A default implement to scroll dom range into view.
 */
const noScrollBoundary = () => false;
const defaultScrollSelectionIntoView = (editor, domRange, scrollBoundary) => {
  var _ReactEditor$resolveD;
  // Scroll to the focus point of the selection, in case the selection is expanded
  const {
    selection
  } = editor;
  const isBackward = !!selection && slate.Range.isBackward(selection);
  const unhung = selection && !isBackward && slate.Range.isExpanded(selection) ? slate.Editor.unhangRange(editor, selection) : selection;
  const domFocusPoint = unhung && selection && !slate.Range.equals(unhung, selection) ? (_ReactEditor$resolveD = ReactEditor.resolveDOMRange(editor, unhung)) !== null && _ReactEditor$resolveD !== void 0 ? _ReactEditor$resolveD : domRange.cloneRange() : domRange.cloneRange();
  domFocusPoint.collapse(isBackward);
  if (domFocusPoint.getBoundingClientRect) {
    const leafEl = domFocusPoint.startContainer.parentElement;
    // COMPAT: In Chrome, domFocusPoint.getBoundingClientRect() can return zero dimensions for valid ranges (e.g. line breaks).
    // When this happens, do not scroll like most editors do.
    const domRect = domFocusPoint.getBoundingClientRect();
    const isZeroDimensionRect = domRect.width === 0 && domRect.height === 0 && domRect.x === 0 && domRect.y === 0;
    if (isZeroDimensionRect) {
      const leafRect = leafEl.getBoundingClientRect();
      const leafHasDimensions = leafRect.width > 0 || leafRect.height > 0;
      if (leafHasDimensions) {
        return;
      }
    }
    // Default behavior: use domFocusPoint's getBoundingClientRect
    leafEl.getBoundingClientRect = domFocusPoint.getBoundingClientRect.bind(domFocusPoint);
    // ПРОПАТЧЕНО (Saby): подскролл только у свёрнутого выделения — при выделении
    // текста он вёл себя неадекватно; граница — из пропса scrollBoundary.
    // https://online.sbis.ru/opendoc.html?guid=e0909ee5-b2d0-4472-9efc-fa9d2270857c
    if (selection && slate.Range.isCollapsed(selection)) {
      e(leafEl, {
        scrollMode: 'if-needed',
        block: 'nearest',
        inline: 'nearest',
        boundary: scrollBoundary
      });
    }
    // @ts-expect-error an unorthodox delete D:
    delete leafEl.getBoundingClientRect;
  }
};
/**
 * Check if an event is overrided by a handler.
 */
const isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.
  const shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.isDefaultPrevented() || event.isPropagationStopped();
};
/**
 * Check if the event's target is an input element
 */
const isDOMEventTargetInput = event => {
  return isDOMNode(event.target) && (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement);
};
/**
 * Check if a DOM event is overrided by a handler.
 */
const isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.
  const shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.defaultPrevented;
};
const handleNativeHistoryEvents = (editor, event) => {
  const maybeHistoryEditor = editor;
  if (event.inputType === 'historyUndo' && typeof maybeHistoryEditor.undo === 'function') {
    maybeHistoryEditor.undo();
    return;
  }
  if (event.inputType === 'historyRedo' && typeof maybeHistoryEditor.redo === 'function') {
    maybeHistoryEditor.redo();
    return;
  }
};

/**
 * A React context for sharing the `focused` state of the editor.
 */
const FocusedContext = /*#__PURE__*/React.createContext(false);
/**
 * Get the current `focused` state of the editor.
 */
const useFocused = () => {
  return React.useContext(FocusedContext);
};

const REACT_MAJOR_VERSION = parseInt(React__default.default.version.split('.')[0], 10);

const _excluded = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue", "value"];
/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */
const Slate = props => {
  const {
      editor,
      children,
      onChange,
      onSelectionChange,
      onValueChange,
      initialValue,
      value: controlledValue
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  const initializedEditor = React.useRef(null);
  const lastEmittedValue = React.useRef(undefined);
  const lastAppliedValue = React.useRef(undefined);
  const appliedChildren = React.useRef(undefined);
  if (controlledValue !== undefined && initialValue !== undefined) {
    throw new Error('[Slate] value and initialValue cannot be used together.');
  }
  if (controlledValue !== undefined && !slate.Node.isNodeList(controlledValue)) {
    throw new Error(`[Slate] value is invalid! Expected a list of elements but got: ${slate.Scrubber.stringify(controlledValue)}`);
  }
  if (initializedEditor.current !== editor) {
    var _ref;
    if (!slate.Editor.isEditor(editor)) {
      throw new Error(`[Slate] editor is invalid! You passed: ${slate.Scrubber.stringify(editor)}`);
    }
    if (initialValue === undefined && controlledValue === undefined && editor.children.length === 0) {
      throw new Error('[Slate] editor.children is empty and no initialValue was provided. If this is intentional, pass initialValue={[]} to the Slate component.');
    }
    const value = (_ref = initialValue !== null && initialValue !== void 0 ? initialValue : controlledValue) !== null && _ref !== void 0 ? _ref : editor.children;
    if (!slate.Node.isNodeList(value)) {
      throw new Error(`[Slate] initialValue is invalid! Expected a list of elements but got: ${slate.Scrubber.stringify(value)}`);
    }
    const copied = initialValue === undefined && controlledValue === undefined ? value : value.map(copyNodeInUse);
    const _children = copied.every((node, i) => node === value[i]) ? value : copied;
    editor.children = _children.length > 0 ? _children : [{
      children: [{
        text: ''
      }]
    }];
    Object.assign(editor, rest);
    initializedEditor.current = editor;
    lastEmittedValue.current = undefined;
    lastAppliedValue.current = controlledValue;
  }
  const {
    selectorContext,
    onChange: handleSelectorChange
  } = useSelectorContext();
  const onContextChange = React.useCallback(() => {
    const changed = editor.operations.some(op => op.type !== 'set_selection');
    const external = changed && editor.children === appliedChildren.current;
    appliedChildren.current = undefined;
    if (changed && !external) {
      lastEmittedValue.current = editor.children;
    }
    if (onChange) {
      onChange(editor.children);
    }
    if (onSelectionChange && editor.operations.find(op => op.type === 'set_selection')) {
      onSelectionChange(editor.selection);
    }
    if (onValueChange && changed && !external) {
      onValueChange(editor.children);
    }
    handleSelectorChange();
  }, [editor, handleSelectorChange, onChange, onSelectionChange, onValueChange]);
  const controlled = controlledValue !== undefined;
  const registerOnChange = React.useCallback(() => {
    const callback = () => onContextChange();
    EDITOR_TO_ON_CHANGE.set(editor, callback);
    return () => {
      if (EDITOR_TO_ON_CHANGE.get(editor) === callback) {
        EDITOR_TO_ON_CHANGE.delete(editor);
      }
    };
  }, [editor, onContextChange]);
  React.useEffect(() => {
    if (!controlled) return registerOnChange();
  }, [controlled, registerOnChange]);
  useIsomorphicLayoutEffect(() => {
    if (controlled) return registerOnChange();
  }, [controlled, registerOnChange]);
  useIsomorphicLayoutEffect(() => {
    let frame;
    const apply = () => {
      var _EDITOR_TO_PENDING_DI;
      if (controlledValue === undefined) return;
      if (controlledValue === lastEmittedValue.current) {
        lastAppliedValue.current = controlledValue;
        return;
      }
      if (controlledValue === lastAppliedValue.current) return;
      if (ReactEditor.isComposing(editor) || EDITOR_TO_COMPOSING.get(editor) || EDITOR_TO_PENDING_ACTION.get(editor) || (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length) {
        frame = window.requestAnimationFrame(apply);
        return;
      }
      const previous = editor.children;
      lastAppliedValue.current = controlledValue;
      slate.Transforms.setChildren(editor, controlledValue);
      if (previous !== editor.children) {
        appliedChildren.current = editor.children;
        handleSelectorChange();
      }
    };
    apply();
    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, [editor, controlledValue, handleSelectorChange]);
  const [isFocused, setIsFocused] = React.useState(ReactEditor.isFocused(editor));
  React.useEffect(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  }, [editor]);
  useIsomorphicLayoutEffect(() => {
    const fn = () => setIsFocused(ReactEditor.isFocused(editor));
    if (REACT_MAJOR_VERSION >= 17) {
      // In React >= 17 onFocus and onBlur listen to the focusin and focusout events during the bubbling phase.
      // Therefore in order for <Editable />'s handlers to run first, which is necessary for ReactEditor.isFocused(editor)
      // to return the correct value, we have to listen to the focusin and focusout events without useCapture here.
      document.addEventListener('focusin', fn);
      document.addEventListener('focusout', fn);
      return () => {
        document.removeEventListener('focusin', fn);
        document.removeEventListener('focusout', fn);
      };
    } else {
      document.addEventListener('focus', fn, true);
      document.addEventListener('blur', fn, true);
      return () => {
        document.removeEventListener('focus', fn, true);
        document.removeEventListener('blur', fn, true);
      };
    }
  }, [editor]);
  return /*#__PURE__*/React__default.default.createElement(SlateSelectorContext.Provider, {
    value: selectorContext
  }, /*#__PURE__*/React__default.default.createElement(EditorContext.Provider, {
    value: editor
  }, /*#__PURE__*/React__default.default.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children)));
};

/**
 * Get the current editor object from the React context.
 * @deprecated Use useSlateStatic instead.
 */
const useEditor = () => {
  const editor = React.useContext(EditorContext);
  if (!editor) {
    throw new Error(`The \`useEditor\` hook must be used inside the <Slate> component's context.`);
  }
  return editor;
};

/**
 * Get the current `selected` state of an element.
 *
 * Set `suppressThrow` to return `false` instead of throwing when the element
 * can no longer be found in the editor.
 */
const useSelected = ({
  suppressThrow: _suppressThrow = false
} = {}) => {
  const element = useElementIf();
  // Breaking the rules of hooks is fine here since `!element` will remain true
  // or false for the entire lifetime of the component this hook is called from.
  // TODO: Decide if we want to throw an error instead when calling
  // `useSelected` outside of an element (potentially a breaking change).
  if (!element) return false;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const selector = React.useCallback(editor => {
    if (!editor.selection) return false;
    try {
      const path = ReactEditor.findPath(editor, element);
      const range = slate.Editor.range(editor, path);
      return !!slate.Range.intersection(range, editor.selection);
    } catch (e) {
      if (_suppressThrow) {
        return false;
      }
      throw e;
    }
  }, [element, _suppressThrow]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSlateSelector(selector, undefined, {
    // Defer the selector until after `Editable` has rendered so that the path
    // will be accurate.
    deferred: true
  });
};

/**
 * Get the current slate selection.
 * Only triggers a rerender when the selection actually changes
 */
const useSlateSelection = () => {
  return useSlateSelector(editor => editor.selection, isSelectionEqual);
};
const isSelectionEqual = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return slate.Range.equals(a, b);
};

const RERENDERING_OPERATIONS = new Set(['insert_node', 'move_node', 'remove_node', 'set_node']);
/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */
const withReact = (editor, clipboardFormatKey = 'x-slate-fragment') => {
  let e = editor;
  e = withDOM(e, clipboardFormatKey);
  const {
    onChange,
    apply,
    insertText
  } = e;
  e.getChunkSize = () => null;
  if (IS_ANDROID) {
    e.insertText = (text, options) => {
      // COMPAT: Android devices, specifically Samsung devices, experience cursor jumping.
      // This issue occurs when the ⁠insertText function is called immediately after typing.
      // The problem arises because typing schedules a selection change.
      // However, this selection change is only executed after the ⁠insertText function.
      // As a result, the already obsolete selection is applied, leading to incorrect
      // final cursor position.
      EDITOR_TO_PENDING_SELECTION.delete(e);
      return insertText(text, options);
    };
  }
  e.onChange = options => {
    // COMPAT: React < 18 doesn't batch `setState` hook calls, which means
    // that the children and selection can get out of sync for one render
    // pass. So we have to use this unstable API to ensure it batches them.
    // (2019/12/03)
    // https://github.com/facebook/react/issues/14259#issuecomment-439702367
    const maybeBatchUpdates = REACT_MAJOR_VERSION < 18 ? ReactDOM__default.default.unstable_batchedUpdates : callback => callback();
    maybeBatchUpdates(() => {
      onChange(options);
    });
  };
  // On move_node, if the chunking optimization is enabled for the parent of the
  // node being moved, add the moved node to the movedNodeKeys set of the
  // parent's chunk tree.
  e.apply = operation => {
    if (IS_ANDROID && RERENDERING_OPERATIONS.has(operation.type)) {
      var _EDITOR_TO_FLUSH_DEFE;
      (_EDITOR_TO_FLUSH_DEFE = EDITOR_TO_FLUSH_DEFERRED_DIFFS.get(e)) === null || _EDITOR_TO_FLUSH_DEFE === void 0 || _EDITOR_TO_FLUSH_DEFE();
    }
    if (operation.type === 'move_node') {
      const parent = slate.Node.parent(e, operation.path);
      const chunking = !!e.getChunkSize(parent);
      if (chunking) {
        const node = slate.Node.get(e, operation.path);
        const chunkTree = getChunkTreeForNode(e, parent);
        const key = ReactEditor.findKey(e, node);
        chunkTree.movedNodeKeys.add(key);
      }
    }
    apply(operation);
  };
  return e;
};

exports.DefaultElement = DefaultElement;
exports.DefaultLeaf = DefaultLeaf;
exports.DefaultPlaceholder = DefaultPlaceholder;
exports.DefaultText = DefaultText;
exports.Editable = Editable;
exports.NODE_TO_INDEX = NODE_TO_INDEX;
exports.NODE_TO_PARENT = NODE_TO_PARENT;
exports.ReactEditor = ReactEditor;
exports.Slate = Slate;
exports.defaultScrollSelectionIntoView = defaultScrollSelectionIntoView;
exports.useComposing = useComposing;
exports.useEditor = useEditor;
exports.useElement = useElement;
exports.useElementIf = useElementIf;
exports.useFocused = useFocused;
exports.useReadOnly = useReadOnly;
exports.useSelected = useSelected;
exports.useSlate = useSlate;
exports.useSlateSelection = useSlateSelection;
exports.useSlateSelector = useSlateSelector;
exports.useSlateStatic = useSlateStatic;
exports.useSlateWithV = useSlateWithV;
exports.withReact = withReact;

});
