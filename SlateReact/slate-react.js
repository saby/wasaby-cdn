/* eslint-disable */
define([
   'exports',
   'react',
   'react-dom',
   'Slate/slate',
   'Env/Env'
], function (exports, React, ReactDOM, slate, env) {
   ('use strict');

   var commonjsGlobal =
      typeof globalThis !== 'undefined'
         ? globalThis
         : typeof window !== 'undefined'
         ? window
         : typeof global !== 'undefined'
         ? global
         : typeof self !== 'undefined'
         ? self
         : {};

   function unwrapExports(x) {
      return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
         ? x['default']
         : x;
   }

   function createCommonjsModule(fn, module) {
      return (module = { exports: {} }), fn(module, module.exports), module.exports;
   }

   var arrayWithHoles = createCommonjsModule(function (module) {
      function _arrayWithHoles(arr) {
         if (Array.isArray(arr)) return arr;
      }
      (module.exports = _arrayWithHoles),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(arrayWithHoles);

   var iterableToArrayLimit = createCommonjsModule(function (module) {
      function _iterableToArrayLimit(r, l) {
         var t =
            null == r
               ? null
               : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
         if (null != t) {
            var e,
               n,
               i,
               u,
               a = [],
               f = true,
               o = false;
            try {
               if (((i = (t = t.call(r)).next), 0 === l)) {
                  if (Object(t) !== t) return;
                  f = !1;
               } else
                  for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
               (o = true), (n = r);
            } finally {
               try {
                  if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
               } finally {
                  if (o) throw n;
               }
            }
            return a;
         }
      }
      (module.exports = _iterableToArrayLimit),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(iterableToArrayLimit);

   var arrayLikeToArray = createCommonjsModule(function (module) {
      function _arrayLikeToArray(arr, len) {
         if (len == null || len > arr.length) len = arr.length;
         for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
         return arr2;
      }
      (module.exports = _arrayLikeToArray),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(arrayLikeToArray);

   var unsupportedIterableToArray = createCommonjsModule(function (module) {
      function _unsupportedIterableToArray(o, minLen) {
         if (!o) return;
         if (typeof o === 'string') return arrayLikeToArray(o, minLen);
         var n = Object.prototype.toString.call(o).slice(8, -1);
         if (n === 'Object' && o.constructor) n = o.constructor.name;
         if (n === 'Map' || n === 'Set') return Array.from(o);
         if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return arrayLikeToArray(o, minLen);
      }
      (module.exports = _unsupportedIterableToArray),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(unsupportedIterableToArray);

   var nonIterableRest = createCommonjsModule(function (module) {
      function _nonIterableRest() {
         throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
         );
      }
      (module.exports = _nonIterableRest),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(nonIterableRest);

   var slicedToArray = createCommonjsModule(function (module) {
      function _slicedToArray(arr, i) {
         return (
            arrayWithHoles(arr) ||
            iterableToArrayLimit(arr, i) ||
            unsupportedIterableToArray(arr, i) ||
            nonIterableRest()
         );
      }
      (module.exports = _slicedToArray),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _slicedToArray = unwrapExports(slicedToArray);

   var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
      function _objectWithoutPropertiesLoose(source, excluded) {
         if (source == null) return {};
         var target = {};
         var sourceKeys = Object.keys(source);
         var key, i;
         for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
         }
         return target;
      }
      (module.exports = _objectWithoutPropertiesLoose),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(objectWithoutPropertiesLoose);

   var objectWithoutProperties = createCommonjsModule(function (module) {
      function _objectWithoutProperties(source, excluded) {
         if (source == null) return {};
         var target = objectWithoutPropertiesLoose(source, excluded);
         var key, i;
         if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
               key = sourceSymbolKeys[i];
               if (excluded.indexOf(key) >= 0) continue;
               if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
               target[key] = source[key];
            }
         }
         return target;
      }
      (module.exports = _objectWithoutProperties),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _objectWithoutProperties$2 = unwrapExports(objectWithoutProperties);

   var _typeof_1 = createCommonjsModule(function (module) {
      function _typeof(o) {
         '@babel/helpers - typeof';

         return (
            ((module.exports = _typeof =
               'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (o) {
                       return typeof o;
                    }
                  : function (o) {
                       return o &&
                          'function' == typeof Symbol &&
                          o.constructor === Symbol &&
                          o !== Symbol.prototype
                          ? 'symbol'
                          : typeof o;
                    }),
            (module.exports.__esModule = true),
            (module.exports['default'] = module.exports)),
            _typeof(o)
         );
      }
      (module.exports = _typeof),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(_typeof_1);

   var toPrimitive = createCommonjsModule(function (module) {
      var _typeof = _typeof_1['default'];
      function _toPrimitive(input, hint) {
         if (_typeof(input) !== 'object' || input === null) return input;
         var prim = input[Symbol.toPrimitive];
         if (prim !== undefined) {
            var res = prim.call(input, hint || 'default');
            if (_typeof(res) !== 'object') return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
         }
         return (hint === 'string' ? String : Number)(input);
      }
      (module.exports = _toPrimitive),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(toPrimitive);

   var toPropertyKey = createCommonjsModule(function (module) {
      var _typeof = _typeof_1['default'];

      function _toPropertyKey(arg) {
         var key = toPrimitive(arg, 'string');
         return _typeof(key) === 'symbol' ? key : String(key);
      }
      (module.exports = _toPropertyKey),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(toPropertyKey);

   var defineProperty = createCommonjsModule(function (module) {
      function _defineProperty(obj, key, value) {
         key = toPropertyKey(key);
         if (key in obj) {
            Object.defineProperty(obj, key, {
               value: value,
               enumerable: true,
               configurable: true,
               writable: true
            });
         } else {
            obj[key] = value;
         }
         return obj;
      }
      (module.exports = _defineProperty),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _defineProperty$2 = unwrapExports(defineProperty);

   var direction_1 = direction;

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
         return 'rtl';
      }

      if (ltr.test(value)) {
         return 'ltr';
      }

      return 'neutral';
   }

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
   function isObject$1(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
   }

   var isObject_1 = isObject$1;

   /** Detect free variable `global` from Node.js. */
   var freeGlobal =
      typeof commonjsGlobal == 'object' &&
      commonjsGlobal &&
      commonjsGlobal.Object === Object &&
      commonjsGlobal;

   var _freeGlobal = freeGlobal;

   /** Detect free variable `self`. */
   var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

   /** Used as a reference to the global object. */
   var root = _freeGlobal || freeSelf || Function('return this')();

   var _root = root;

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
   var now = function () {
      return _root.Date.now();
   };

   var now_1 = now;

   /** Used to match a single whitespace character. */
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

   var _trimmedEndIndex = trimmedEndIndex;

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
         ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
         : string;
   }

   var _baseTrim = baseTrim;

   /** Built-in value references. */
   var Symbol$1 = _root.Symbol;

   var _Symbol = Symbol$1;

   /** Used for built-in method references. */
   var objectProto$1 = Object.prototype;

   /** Used to check objects for own properties. */
   var hasOwnProperty = objectProto$1.hasOwnProperty;

   /**
    * Used to resolve the
    * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
    * of values.
    */
   var nativeObjectToString$1 = objectProto$1.toString;

   /** Built-in value references. */
   var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

   /**
    * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
    *
    * @private
    * @param {*} value The value to query.
    * @returns {string} Returns the raw `toStringTag`.
    */
   function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag$1),
         tag = value[symToStringTag$1];

      try {
         value[symToStringTag$1] = undefined;
         var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString$1.call(value);
      if (unmasked) {
         if (isOwn) {
            value[symToStringTag$1] = tag;
         } else {
            delete value[symToStringTag$1];
         }
      }
      return result;
   }

   var _getRawTag = getRawTag;

   /** Used for built-in method references. */
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

   var _objectToString = objectToString;

   /** `Object#toString` result references. */
   var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

   /** Built-in value references. */
   var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

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
      return symToStringTag && symToStringTag in Object(value)
         ? _getRawTag(value)
         : _objectToString(value);
   }

   var _baseGetTag = baseGetTag;

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
   function isObjectLike(value) {
      return value != null && typeof value == 'object';
   }

   var isObjectLike_1 = isObjectLike;

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
      return typeof value == 'symbol' || (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
   }

   var isSymbol_1 = isSymbol;

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
      if (isSymbol_1(value)) {
         return NAN;
      }
      if (isObject_1(value)) {
         var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
         value = isObject_1(other) ? other + '' : other;
      }
      if (typeof value != 'string') {
         return value === 0 ? value : +value;
      }
      value = _baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value)
         ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
         : reIsBadHex.test(value)
         ? NAN
         : +value;
   }

   var toNumber_1 = toNumber;

   /** Error message constants. */
   var FUNC_ERROR_TEXT$1 = 'Expected a function';

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
         throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      wait = toNumber_1(wait) || 0;
      if (isObject_1(options)) {
         leading = !!options.leading;
         maxing = 'maxWait' in options;
         maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
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

         return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }

      function shouldInvoke(time) {
         var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

         // Either this is the first call, activity has stopped and we're at the
         // trailing edge, the system time has gone backwards and we're treating
         // it as the trailing edge, or we've hit the `maxWait` limit.
         return (
            lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && timeSinceLastInvoke >= maxWait)
         );
      }

      function timerExpired() {
         var time = now_1();
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
         return timerId === undefined ? result : trailingEdge(now_1());
      }

      function debounced() {
         var time = now_1(),
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

   var debounce_1 = debounce;

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
      if (isObject_1(options)) {
         leading = 'leading' in options ? !!options.leading : leading;
         trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce_1(func, wait, {
         leading: leading,
         maxWait: wait,
         trailing: trailing
      });
   }

   var throttle_1 = throttle;

   const t = (t) => 'object' == typeof t && null != t && 1 === t.nodeType,
      e$1 = (t, e) => (!e || 'hidden' !== t) && 'visible' !== t && 'clip' !== t,
      n$1 = (t, n) => {
         if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
            const o = getComputedStyle(t, null);
            return (
               e$1(o.overflowY, n) ||
               e$1(o.overflowX, n) ||
               ((t) => {
                  const e = ((t) => {
                     if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                     try {
                        return t.ownerDocument.defaultView.frameElement;
                     } catch (t) {
                        return null;
                     }
                  })(t);
                  return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
               })(t)
            );
         }
         return false;
      },
      o$1 = (t, e, n, o, l, r, i, s) =>
         (r < t && i > e) || (r > t && i < e)
            ? 0
            : (r <= t && s <= n) || (i >= e && s >= n)
            ? r - t - o
            : (i > e && s < n) || (r < t && s > n)
            ? i - e + l
            : 0,
      l = (t) => {
         const e = t.parentElement;
         return null == e ? t.getRootNode().host || null : e;
      },
      r = (e, r) => {
         var i, s, d, h;
         if ('undefined' == typeof document) return [];
         const {
               scrollMode: c,
               block: f,
               inline: u,
               boundary: a,
               skipOverflowHiddenElements: g
            } = r,
            p = 'function' == typeof a ? a : (t) => t !== a;
         if (!t(e)) throw new TypeError('Invalid target');
         const m = document.scrollingElement || document.documentElement,
            w = [];
         let W = e;
         for (; t(W) && p(W); ) {
            if (((W = l(W)), W === m)) {
               w.push(W);
               break;
            }
            (null != W && W === document.body && n$1(W) && !n$1(document.documentElement)) ||
               (null != W && n$1(W, g) && w.push(W));
         }
         const b =
               null != (s = null == (i = window.visualViewport) ? void 0 : i.width)
                  ? s
                  : innerWidth,
            H =
               null != (h = null == (d = window.visualViewport) ? void 0 : d.height)
                  ? h
                  : innerHeight,
            { scrollX: y, scrollY: M } = window,
            {
               height: v,
               width: E,
               top: x,
               right: C,
               bottom: I,
               left: R
            } = e.getBoundingClientRect(),
            {
               top: T,
               right: B,
               bottom: F,
               left: V
            } = ((t) => {
               const e = window.getComputedStyle(t);
               return {
                  top: parseFloat(e.scrollMarginTop) || 0,
                  right: parseFloat(e.scrollMarginRight) || 0,
                  bottom: parseFloat(e.scrollMarginBottom) || 0,
                  left: parseFloat(e.scrollMarginLeft) || 0
               };
            })(e);
         let k = 'start' === f || 'nearest' === f ? x - T : 'end' === f ? I + F : x + v / 2 - T + F,
            D = 'center' === u ? R + E / 2 - V + B : 'end' === u ? C + B : R - V;
         const L = [];
         for (let t = 0; t < w.length; t++) {
            const e = w[t],
               {
                  height: n,
                  width: l,
                  top: r,
                  right: i,
                  bottom: s,
                  left: d
               } = e.getBoundingClientRect();
            if (
               'if-needed' === c &&
               x >= 0 &&
               R >= 0 &&
               I <= H &&
               C <= b &&
               x >= r &&
               I <= s &&
               R >= d &&
               C <= i
            )
               return L;
            const h = getComputedStyle(e),
               a = parseInt(h.borderLeftWidth, 10),
               g = parseInt(h.borderTopWidth, 10),
               p = parseInt(h.borderRightWidth, 10),
               W = parseInt(h.borderBottomWidth, 10);
            let T = 0,
               B = 0;
            const F = 'offsetWidth' in e ? e.offsetWidth - e.clientWidth - a - p : 0,
               V = 'offsetHeight' in e ? e.offsetHeight - e.clientHeight - g - W : 0,
               S = 'offsetWidth' in e ? (0 === e.offsetWidth ? 0 : l / e.offsetWidth) : 0,
               X = 'offsetHeight' in e ? (0 === e.offsetHeight ? 0 : n / e.offsetHeight) : 0;
            if (m === e)
               (T =
                  'start' === f
                     ? k
                     : 'end' === f
                     ? k - H
                     : 'nearest' === f
                     ? o$1(M, M + H, H, g, W, M + k, M + k + v, v)
                     : k - H / 2),
                  (B =
                     'start' === u
                        ? D
                        : 'center' === u
                        ? D - b / 2
                        : 'end' === u
                        ? D - b
                        : o$1(y, y + b, b, a, p, y + D, y + D + E, E)),
                  (T = Math.max(0, T + M)),
                  (B = Math.max(0, B + y));
            else {
               (T =
                  'start' === f
                     ? k - r - g
                     : 'end' === f
                     ? k - s + W + V
                     : 'nearest' === f
                     ? o$1(r, s, n, g, W + V, k, k + v, v)
                     : k - (r + n / 2) + V / 2),
                  (B =
                     'start' === u
                        ? D - d - a
                        : 'center' === u
                        ? D - (d + l / 2) + F / 2
                        : 'end' === u
                        ? D - i + p + F
                        : o$1(d, i, l, a, p + F, D, D + E, E));
               const { scrollLeft: t, scrollTop: h } = e;
               (T = 0 === X ? 0 : Math.max(0, Math.min(h + T / X, e.scrollHeight - n / X + V))),
                  (B = 0 === S ? 0 : Math.max(0, Math.min(t + B / S, e.scrollWidth - l / S + F))),
                  (k += h - T),
                  (D += t - B);
            }
            L.push({ el: e, top: T, left: B });
         }
         return L;
      };

   const o = (t) =>
      false === t
         ? { block: 'end', inline: 'nearest' }
         : ((t) => t === Object(t) && 0 !== Object.keys(t).length)(t)
         ? t
         : { block: 'start', inline: 'nearest' };
   function e(e, r$1) {
      if (
         !e.isConnected ||
         !((t) => {
            let o = t;
            for (; o && o.parentNode; ) {
               if (o.parentNode === document) return true;
               o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
            }
            return false;
         })(e)
      )
         return;
      const n = ((t) => {
         const o = window.getComputedStyle(t);
         return {
            top: parseFloat(o.scrollMarginTop) || 0,
            right: parseFloat(o.scrollMarginRight) || 0,
            bottom: parseFloat(o.scrollMarginBottom) || 0,
            left: parseFloat(o.scrollMarginLeft) || 0
         };
      })(e);
      if (((t) => 'object' == typeof t && 'function' == typeof t.behavior)(r$1))
         return r$1.behavior(r(e, r$1));
      const l = 'boolean' == typeof r$1 || null == r$1 ? void 0 : r$1.behavior;
      for (const { el: a, top: i, left: s } of r(e, o(r$1))) {
         const t = i - n.top + n.bottom,
            o = s - n.left + n.right;
         a.scroll({ top: t, left: o, behavior: l });
      }
   }

   // eslint-disable-next-line no-redeclare

   // eslint-disable-next-line no-redeclare
   var Path = {
      ancestors(path) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         var { reverse = false } = options;
         var paths = Path.levels(path, options);
         if (reverse) {
            paths = paths.slice(1);
         } else {
            paths = paths.slice(0, -1);
         }
         return paths;
      },
      common(path, another) {
         var common = [];
         for (var i = 0; i < path.length && i < another.length; i++) {
            var av = path[i];
            var bv = another[i];
            if (typeof av !== 'number' || typeof bv !== 'number') {
               throw new Error('Got non-numeric path index');
            }
            if (av !== bv) {
               break;
            }
            common.push(av);
         }
         return common;
      },
      compare(path, another) {
         var min = Math.min(path.length, another.length);
         for (var i = 0; i < min; i++) {
            if (path[i] < another[i]) return -1;
            if (path[i] > another[i]) return 1;
         }
         return 0;
      },
      endsAfter(path, another) {
         var i = path.length - 1;
         var as = path.slice(0, i);
         var bs = another.slice(0, i);
         var av = path[i];
         var bv = another[i];
         return Path.equals(as, bs) && av > bv;
      },
      endsAt(path, another) {
         var i = path.length;
         var as = path.slice(0, i);
         var bs = another.slice(0, i);
         return Path.equals(as, bs);
      },
      endsBefore(path, another) {
         var i = path.length - 1;
         var as = path.slice(0, i);
         var bs = another.slice(0, i);
         var av = path[i];
         var bv = another[i];
         return Path.equals(as, bs) && av < bv;
      },
      equals(path, another) {
         return path.length === another.length && path.every((n, i) => n === another[i]);
      },
      hasPrevious(path) {
         return path[path.length - 1] > 0;
      },
      isAfter(path, another) {
         return Path.compare(path, another) === 1;
      },
      isAncestor(path, another) {
         return path.length < another.length && Path.compare(path, another) === 0;
      },
      isBefore(path, another) {
         return Path.compare(path, another) === -1;
      },
      isChild(path, another) {
         return path.length === another.length + 1 && Path.compare(path, another) === 0;
      },
      isCommon(path, another) {
         return path.length <= another.length && Path.compare(path, another) === 0;
      },
      isDescendant(path, another) {
         return path.length > another.length && Path.compare(path, another) === 0;
      },
      isParent(path, another) {
         return path.length + 1 === another.length && Path.compare(path, another) === 0;
      },
      isPath(value) {
         return Array.isArray(value) && value.every((n) => typeof n === 'number');
      },
      isSibling(path, another) {
         if (path.length !== another.length) {
            return false;
         }
         var as = path.slice(0, -1);
         var bs = another.slice(0, -1);
         var al = path[path.length - 1];
         var bl = another[another.length - 1];
         return al !== bl && Path.equals(as, bs);
      },
      levels(path) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         var { reverse = false } = options;
         var list = [];
         for (var i = 0; i <= path.length; i++) {
            list.push(path.slice(0, i));
         }
         if (reverse) {
            list.reverse();
         }
         return list;
      },
      next(path) {
         if (path.length === 0) {
            throw new Error(
               'Cannot get the next path of a root path ['.concat(
                  path,
                  '], because it has no next index.'
               )
            );
         }
         var last = path[path.length - 1];
         return path.slice(0, -1).concat(last + 1);
      },
      operationCanTransformPath(operation) {
         switch (operation.type) {
            case 'insert_node':
            case 'remove_node':
            case 'merge_node':
            case 'split_node':
            case 'move_node':
               return true;
            default:
               return false;
         }
      },
      parent(path) {
         if (path.length === 0) {
            throw new Error('Cannot get the parent path of the root path ['.concat(path, '].'));
         }
         return path.slice(0, -1);
      },
      previous(path) {
         if (path.length === 0) {
            throw new Error(
               'Cannot get the previous path of a root path ['.concat(
                  path,
                  '], because it has no previous index.'
               )
            );
         }
         var last = path[path.length - 1];
         if (last <= 0) {
            throw new Error(
               'Cannot get the previous path of a first child path ['.concat(
                  path,
                  '] because it would result in a negative index.'
               )
            );
         }
         return path.slice(0, -1).concat(last - 1);
      },
      relative(path, ancestor) {
         if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
            throw new Error(
               'Cannot get the relative path of ['
                  .concat(path, '] inside ancestor [')
                  .concat(ancestor, '], because it is not above or equal to the path.')
            );
         }
         return path.slice(ancestor.length);
      },
      transform(path, operation) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         if (!path) return null;
         // PERF: use destructing instead of immer
         var p = [...path];
         var { affinity = 'forward' } = options;
         // PERF: Exit early if the operation is guaranteed not to have an effect.
         if (path.length === 0) {
            return p;
         }
         switch (operation.type) {
            case 'insert_node': {
               var { path: op } = operation;
               if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
                  p[op.length - 1] += 1;
               }
               break;
            }
            case 'remove_node': {
               var { path: _op } = operation;
               if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
                  return null;
               } else if (Path.endsBefore(_op, p)) {
                  p[_op.length - 1] -= 1;
               }
               break;
            }
            case 'merge_node': {
               var { path: _op2, position } = operation;
               if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
                  p[_op2.length - 1] -= 1;
               } else if (Path.isAncestor(_op2, p)) {
                  p[_op2.length - 1] -= 1;
                  p[_op2.length] += position;
               }
               break;
            }
            case 'split_node': {
               var { path: _op3, position: _position } = operation;
               if (Path.equals(_op3, p)) {
                  if (affinity === 'forward') {
                     p[p.length - 1] += 1;
                  } else if (affinity === 'backward');
                  else {
                     return null;
                  }
               } else if (Path.endsBefore(_op3, p)) {
                  p[_op3.length - 1] += 1;
               } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
                  p[_op3.length - 1] += 1;
                  p[_op3.length] -= _position;
               }
               break;
            }
            case 'move_node': {
               var { path: _op4, newPath: onp } = operation;
               // If the old and new path are the same, it's a no-op.
               if (Path.equals(_op4, onp)) {
                  return p;
               }
               if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
                  var copy = onp.slice();
                  if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                     copy[_op4.length - 1] -= 1;
                  }
                  return copy.concat(p.slice(_op4.length));
               } else if (
                  Path.isSibling(_op4, onp) &&
                  (Path.isAncestor(onp, p) || Path.equals(onp, p))
               ) {
                  if (Path.endsBefore(_op4, p)) {
                     p[_op4.length - 1] -= 1;
                  } else {
                     p[_op4.length - 1] += 1;
                  }
               } else if (
                  Path.endsBefore(onp, p) ||
                  Path.equals(onp, p) ||
                  Path.isAncestor(onp, p)
               ) {
                  if (Path.endsBefore(_op4, p)) {
                     p[_op4.length - 1] -= 1;
                  }
                  p[onp.length - 1] += 1;
               } else if (Path.endsBefore(_op4, p)) {
                  if (Path.equals(onp, p)) {
                     p[onp.length - 1] += 1;
                  }
                  p[_op4.length - 1] -= 1;
               }
               break;
            }
         }
         return p;
      }
   };

   function _typeof$1(o) {
      '@babel/helpers - typeof';

      return (
         (_typeof$1 =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
               ? function (o) {
                    return typeof o;
                 }
               : function (o) {
                    return o &&
                       'function' == typeof Symbol &&
                       o.constructor === Symbol &&
                       o !== Symbol.prototype
                       ? 'symbol'
                       : typeof o;
                 }),
         _typeof$1(o)
      );
   }

   function _toPrimitive$1(input, hint) {
      if (_typeof$1(input) !== 'object' || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
         var res = prim.call(input, hint || 'default');
         if (_typeof$1(res) !== 'object') return res;
         throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (hint === 'string' ? String : Number)(input);
   }

   function _toPropertyKey$1(arg) {
      var key = _toPrimitive$1(arg, 'string');
      return _typeof$1(key) === 'symbol' ? key : String(key);
   }

   function _defineProperty$1(obj, key, value) {
      key = _toPropertyKey$1(key);
      if (key in obj) {
         Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
         });
      } else {
         obj[key] = value;
      }
      return obj;
   }

   function _objectWithoutPropertiesLoose$1(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
         key = sourceKeys[i];
         if (excluded.indexOf(key) >= 0) continue;
         target[key] = source[key];
      }
      return target;
   }

   function _objectWithoutProperties$1(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose$1(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
         var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
         for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
         }
      }
      return target;
   }

   var _excluded$4 = ['anchor', 'focus'];
   function ownKeys$g(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$g(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$g(Object(t), true).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$g(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   // eslint-disable-next-line no-redeclare
   var Range = {
      edges(range) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         var { reverse = false } = options;
         var { anchor, focus } = range;
         return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
      },
      end(range) {
         var [, end] = Range.edges(range);
         return end;
      },
      equals(range, another) {
         return (
            Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus)
         );
      },
      surrounds(range, target) {
         var intersectionRange = Range.intersection(range, target);
         if (!intersectionRange) {
            return false;
         }
         return Range.equals(intersectionRange, target);
      },
      includes(range, target) {
         if (Location.isRange(target)) {
            if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
               return true;
            }
            var [rs, re] = Range.edges(range);
            var [ts, te] = Range.edges(target);
            return Point.isBefore(rs, ts) && Point.isAfter(re, te);
         }
         var [start, end] = Range.edges(range);
         var isAfterStart = false;
         var isBeforeEnd = false;
         if (Location.isPoint(target)) {
            isAfterStart = Point.compare(target, start) >= 0;
            isBeforeEnd = Point.compare(target, end) <= 0;
         } else {
            isAfterStart = Path.compare(target, start.path) >= 0;
            isBeforeEnd = Path.compare(target, end.path) <= 0;
         }
         return isAfterStart && isBeforeEnd;
      },
      intersection(range, another) {
         var { anchor, focus } = range,
            rest = _objectWithoutProperties$1(range, _excluded$4);
         var [s1, e1] = Range.edges(range);
         var [s2, e2] = Range.edges(another);
         var start = Point.isBefore(s1, s2) ? s2 : s1;
         var end = Point.isBefore(e1, e2) ? e1 : e2;
         if (Point.isBefore(end, start)) {
            return null;
         } else {
            return _objectSpread$g(
               {
                  anchor: start,
                  focus: end
               },
               rest
            );
         }
      },
      isBackward(range) {
         var { anchor, focus } = range;
         return Point.isAfter(anchor, focus);
      },
      isCollapsed(range) {
         var { anchor, focus } = range;
         return Point.equals(anchor, focus);
      },
      isExpanded(range) {
         return !Range.isCollapsed(range);
      },
      isForward(range) {
         return !Range.isBackward(range);
      },
      isRange(value) {
         return isObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
      },
      *points(range) {
         yield [range.anchor, 'anchor'];
         yield [range.focus, 'focus'];
      },
      start(range) {
         var [start] = Range.edges(range);
         return start;
      },
      transform(range, op) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         if (range === null) {
            return null;
         }
         var { affinity = 'inward' } = options;
         var affinityAnchor;
         var affinityFocus;
         if (affinity === 'inward') {
            // If the range is collapsed, make sure to use the same affinity to
            // avoid the two points passing each other and expanding in the opposite
            // direction
            var isCollapsed = Range.isCollapsed(range);
            if (Range.isForward(range)) {
               affinityAnchor = 'forward';
               affinityFocus = isCollapsed ? affinityAnchor : 'backward';
            } else {
               affinityAnchor = 'backward';
               affinityFocus = isCollapsed ? affinityAnchor : 'forward';
            }
         } else if (affinity === 'outward') {
            if (Range.isForward(range)) {
               affinityAnchor = 'backward';
               affinityFocus = 'forward';
            } else {
               affinityAnchor = 'forward';
               affinityFocus = 'backward';
            }
         } else {
            affinityAnchor = affinity;
            affinityFocus = affinity;
         }
         var anchor = Point.transform(range.anchor, op, {
            affinity: affinityAnchor
         });
         var focus = Point.transform(range.focus, op, {
            affinity: affinityFocus
         });
         if (!anchor || !focus) {
            return null;
         }
         return {
            anchor,
            focus
         };
      }
   };

   /**
    * Shared the function with isElementType utility
    */
   var isElement$1 = function isElement(value) {
      var { deep = false } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!isObject(value)) return false;
      // PERF: No need to use the full Editor.isEditor here
      var isEditor = typeof value.apply === 'function';
      if (isEditor) return false;
      var isChildrenValid = deep ? Node.isNodeList(value.children) : Array.isArray(value.children);
      return isChildrenValid;
   };
   // eslint-disable-next-line no-redeclare
   var Element$2 = {
      isAncestor(value) {
         var { deep = false } =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (
            isObject(value) &&
            Node.isNodeList(value.children, {
               deep
            })
         );
      },
      isElement: isElement$1,
      isElementList(value) {
         var { deep = false } =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (
            Array.isArray(value) &&
            value.every((val) =>
               Element$2.isElement(val, {
                  deep
               })
            )
         );
      },
      isElementProps(props) {
         return props.children !== undefined;
      },
      isElementType: function isElementType(value, elementVal) {
         var elementKey =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'type';
         return isElement$1(value) && value[elementKey] === elementVal;
      },
      matches(element, props) {
         for (var key in props) {
            if (key === 'children') {
               continue;
            }
            if (element[key] !== props[key]) {
               return false;
            }
         }
         return true;
      }
   };

   var _excluded$3$1 = ['text'],
      _excluded2$3 = ['children'];
   function ownKeys$f(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$f(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$f(Object(t), true).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$f(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   // eslint-disable-next-line no-redeclare
   var Node = {
      ancestor(root, path) {
         var node = Node.get(root, path);
         if (Node.isText(node)) {
            throw new Error(
               'Cannot get the ancestor node at path ['
                  .concat(path, '] because it refers to a text node instead: ')
                  .concat(Scrubber.stringify(node))
            );
         }
         return node;
      },
      ancestors(root, path) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         return (function* () {
            for (var p of Path.ancestors(path, options)) {
               var n = Node.ancestor(root, p);
               var entry = [n, p];
               yield entry;
            }
         })();
      },
      child(root, index) {
         if (Node.isText(root)) {
            throw new Error(
               'Cannot get the child of a text node: '.concat(Scrubber.stringify(root))
            );
         }
         if (typeof index !== 'number') {
            throw new Error('Expected index to be a number');
         }
         var c = root.children[index];
         if (c == null) {
            throw new Error(
               'Cannot get child at index `'
                  .concat(index, '` in node: ')
                  .concat(Scrubber.stringify(root))
            );
         }
         return c;
      },
      children(root, path) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         return (function* () {
            var { reverse = false } = options;
            var ancestor = Node.ancestor(root, path);
            var { children } = ancestor;
            var index = reverse ? children.length - 1 : 0;
            while (reverse ? index >= 0 : index < children.length) {
               var child = Node.child(ancestor, index);
               var childPath = path.concat(index);
               yield [child, childPath];
               index = reverse ? index - 1 : index + 1;
            }
         })();
      },
      common(root, path, another) {
         var p = Path.common(path, another);
         var n = Node.get(root, p);
         return [n, p];
      },
      descendant(root, path) {
         var node = Node.get(root, path);
         if (Node.isEditor(node)) {
            throw new Error(
               'Cannot get the descendant node at path ['
                  .concat(path, '] because it refers to the root editor node instead: ')
                  .concat(Scrubber.stringify(node))
            );
         }
         return node;
      },
      descendants(root) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (function* () {
            for (var [node, path] of Node.nodes(root, options)) {
               if (path.length !== 0) {
                  // NOTE: we have to coerce here because checking the path's length does
                  // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
                  yield [node, path];
               }
            }
         })();
      },
      elements(root) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (function* () {
            for (var [node, path] of Node.nodes(root, options)) {
               if (Node.isElement(node)) {
                  yield [node, path];
               }
            }
         })();
      },
      extractProps(node) {
         if (Node.isText(node)) {
            var { text } = node,
               properties = _objectWithoutProperties$1(node, _excluded$3$1);
            return properties;
         } else {
            var { children } = node,
               properties = _objectWithoutProperties$1(node, _excluded2$3);
            return properties;
         }
      },
      first(root, path) {
         var p = path.slice();
         var n = Node.get(root, p);
         while (n) {
            if (Node.isText(n) || n.children.length === 0) {
               break;
            } else {
               n = n.children[0];
               p.push(0);
            }
         }
         return [n, p];
      },
      fragment(root, range) {
         var newRoot = {
            children: root.children
         };
         var [start, end] = Range.edges(range);
         var nodeEntries = Node.nodes(newRoot, {
            reverse: true,
            pass: (_ref) => {
               var [, path] = _ref;
               return !Range.includes(range, path);
            }
         });
         var _loop = function _loop() {
            if (!Range.includes(range, path)) {
               var index = path[path.length - 1];
               modifyChildren(newRoot, Path.parent(path), (children) =>
                  removeChildren(children, index, 1)
               );
            }
            if (Path.equals(path, end.path)) {
               modifyLeaf(newRoot, path, (node) => {
                  var before = node.text.slice(0, end.offset);
                  return _objectSpread$f(
                     _objectSpread$f({}, node),
                     {},
                     {
                        text: before
                     }
                  );
               });
            }
            if (Path.equals(path, start.path)) {
               modifyLeaf(newRoot, path, (node) => {
                  var before = node.text.slice(start.offset);
                  return _objectSpread$f(
                     _objectSpread$f({}, node),
                     {},
                     {
                        text: before
                     }
                  );
               });
            }
         };
         for (var [, path] of nodeEntries) {
            _loop();
         }
         return newRoot.children;
      },
      get(root, path) {
         var node = Node.getIf(root, path);
         if (node === undefined) {
            throw new Error(
               'Cannot find a descendant at path ['
                  .concat(path, '] in node: ')
                  .concat(Scrubber.stringify(root))
            );
         }
         return node;
      },
      getIf(root, path) {
         var node = root;
         for (var i = 0; i < path.length; i++) {
            var p = path[i];
            if (typeof p !== 'number') {
               throw new Error('Got non-numeric path index');
            }
            if (Node.isText(node) || !node.children[p]) {
               return;
            }
            node = node.children[p];
         }
         return node;
      },
      has(root, path) {
         var node = root;
         for (var i = 0; i < path.length; i++) {
            var p = path[i];
            if (typeof p !== 'number') {
               throw new Error('Got non-numeric path index');
            }
            if (Node.isText(node) || !node.children[p]) {
               return false;
            }
            node = node.children[p];
         }
         return true;
      },
      isAncestor(node) {
         return !Node.isText(node);
      },
      isEditor(node) {
         return typeof node.apply === 'function';
      },
      isElement(node) {
         return Array.isArray(node.children) && typeof node.apply !== 'function';
      },
      isNode(value) {
         var { deep = false } =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (
            Text$1.isText(value) ||
            Element$2.isElement(value, {
               deep
            }) ||
            Editor.isEditor(value, {
               deep
            })
         );
      },
      isNodeList(value) {
         var { deep = false } =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (
            Array.isArray(value) &&
            value.every((val) =>
               Node.isNode(val, {
                  deep
               })
            )
         );
      },
      isText(node) {
         return typeof node.text === 'string';
      },
      last(root, path) {
         var p = path.slice();
         var n = Node.get(root, p);
         while (n) {
            if (Node.isText(n) || n.children.length === 0) {
               break;
            } else {
               var i = n.children.length - 1;
               n = n.children[i];
               p.push(i);
            }
         }
         return [n, p];
      },
      leaf(root, path) {
         var node = Node.get(root, path);
         if (!Node.isText(node)) {
            throw new Error(
               'Cannot get the leaf node at path ['
                  .concat(path, '] because it refers to a non-leaf node: ')
                  .concat(Scrubber.stringify(node))
            );
         }
         return node;
      },
      levels(root, path) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         return (function* () {
            for (var p of Path.levels(path, options)) {
               var n = Node.get(root, p);
               yield [n, p];
            }
         })();
      },
      matches(node, props) {
         return (
            (Node.isElement(node) &&
               Element$2.isElementProps(props) &&
               Element$2.matches(node, props)) ||
            (Node.isText(node) && Text$1.isTextProps(props) && Text$1.matches(node, props))
         );
      },
      nodes(root) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (function* () {
            var { pass, reverse = false } = options;
            var { from = [], to } = options;
            var visited = new Set();
            var p = [];
            var n = root;
            while (true) {
               if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
                  break;
               }
               if (!visited.has(n)) {
                  yield [n, p];
               }
               // If we're allowed to go downward and we haven't descended yet, do.
               if (
                  !visited.has(n) &&
                  !Node.isText(n) &&
                  n.children.length !== 0 &&
                  (pass == null || pass([n, p]) === false)
               ) {
                  visited.add(n);
                  var nextIndex = reverse ? n.children.length - 1 : 0;
                  if (Path.isAncestor(p, from)) {
                     nextIndex = from[p.length];
                  }
                  p = p.concat(nextIndex);
                  n = Node.get(root, p);
                  continue;
               }
               // If we're at the root and we can't go down, we're done.
               if (p.length === 0) {
                  break;
               }
               // If we're going forward...
               if (!reverse) {
                  var newPath = Path.next(p);
                  if (Node.has(root, newPath)) {
                     p = newPath;
                     n = Node.get(root, p);
                     continue;
                  }
               }
               // If we're going backward...
               if (reverse && p[p.length - 1] !== 0) {
                  var _newPath = Path.previous(p);
                  p = _newPath;
                  n = Node.get(root, p);
                  continue;
               }
               // Otherwise we're going upward...
               p = Path.parent(p);
               n = Node.get(root, p);
               visited.add(n);
            }
         })();
      },
      parent(root, path) {
         var parentPath = Path.parent(path);
         var node = Node.get(root, parentPath);
         if (Node.isText(node)) {
            // this can happen if `path` points somewhere that doesnt exist and it's where a child of a text node would be
            throw new Error(
               'Cannot get the parent of path ['.concat(
                  path,
                  '] because it does not exist in the root.'
               )
            );
         }
         return node;
      },
      string(node) {
         if (Node.isText(node)) {
            return node.text;
         } else {
            return node.children.map(Node.string).join('');
         }
      },
      texts(root) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return (function* () {
            for (var [node, path] of Node.nodes(root, options)) {
               if (Node.isText(node)) {
                  yield [node, path];
               }
            }
         })();
      }
   };

   function ownKeys$e(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$e(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$e(Object(t), true).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$e(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   // eslint-disable-next-line no-redeclare
   var Operation = {
      isNodeOperation(value) {
         return Operation.isOperation(value) && value.type.endsWith('_node');
      },
      isOperation(value) {
         if (!isObject(value)) {
            return false;
         }
         switch (value.type) {
            case 'insert_node':
               return Path.isPath(value.path) && Node.isNode(value.node);
            case 'insert_text':
               return (
                  typeof value.offset === 'number' &&
                  typeof value.text === 'string' &&
                  Path.isPath(value.path)
               );
            case 'merge_node':
               return (
                  typeof value.position === 'number' &&
                  Path.isPath(value.path) &&
                  isObject(value.properties)
               );
            case 'move_node':
               return Path.isPath(value.path) && Path.isPath(value.newPath);
            case 'remove_node':
               return Path.isPath(value.path) && Node.isNode(value.node);
            case 'remove_text':
               return (
                  typeof value.offset === 'number' &&
                  typeof value.text === 'string' &&
                  Path.isPath(value.path)
               );
            case 'set_node':
               return (
                  Path.isPath(value.path) &&
                  isObject(value.properties) &&
                  isObject(value.newProperties)
               );
            case 'set_selection':
               return (
                  (value.properties === null && Range.isRange(value.newProperties)) ||
                  (value.newProperties === null && Range.isRange(value.properties)) ||
                  (isObject(value.properties) && isObject(value.newProperties))
               );
            case 'split_node':
               return (
                  Path.isPath(value.path) &&
                  typeof value.position === 'number' &&
                  isObject(value.properties)
               );
            default:
               return false;
         }
      },
      isOperationList(value) {
         return Array.isArray(value) && value.every((val) => Operation.isOperation(val));
      },
      isSelectionOperation(value) {
         return Operation.isOperation(value) && value.type.endsWith('_selection');
      },
      isTextOperation(value) {
         return Operation.isOperation(value) && value.type.endsWith('_text');
      },
      inverse(op) {
         switch (op.type) {
            case 'insert_node': {
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     type: 'remove_node'
                  }
               );
            }
            case 'insert_text': {
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     type: 'remove_text'
                  }
               );
            }
            case 'merge_node': {
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     type: 'split_node',
                     path: Path.previous(op.path)
                  }
               );
            }
            case 'move_node': {
               var { newPath, path } = op;
               // PERF: in this case the move operation is a no-op anyways.
               if (Path.equals(newPath, path)) {
                  return op;
               }
               // If the move happens completely within a single parent the path and
               // newPath are stable with respect to each other.
               if (Path.isSibling(path, newPath)) {
                  return _objectSpread$e(
                     _objectSpread$e({}, op),
                     {},
                     {
                        path: newPath,
                        newPath: path
                     }
                  );
               }
               // If the move does not happen within a single parent it is possible
               // for the move to impact the true path to the location where the node
               // was removed from and where it was inserted. We have to adjust for this
               // and find the original path. We can accomplish this (only in non-sibling)
               // moves by looking at the impact of the move operation on the node
               // after the original move path.
               var inversePath = Path.transform(path, op);
               var inverseNewPath = Path.transform(Path.next(path), op);
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     path: inversePath,
                     newPath: inverseNewPath
                  }
               );
            }
            case 'remove_node': {
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     type: 'insert_node'
                  }
               );
            }
            case 'remove_text': {
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     type: 'insert_text'
                  }
               );
            }
            case 'set_node': {
               var { properties, newProperties } = op;
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     properties: newProperties,
                     newProperties: properties
                  }
               );
            }
            case 'set_selection': {
               var { properties: _properties, newProperties: _newProperties } = op;
               if (_properties == null) {
                  return _objectSpread$e(
                     _objectSpread$e({}, op),
                     {},
                     {
                        properties: _newProperties,
                        newProperties: null
                     }
                  );
               } else if (_newProperties == null) {
                  return _objectSpread$e(
                     _objectSpread$e({}, op),
                     {},
                     {
                        properties: null,
                        newProperties: _properties
                     }
                  );
               } else {
                  return _objectSpread$e(
                     _objectSpread$e({}, op),
                     {},
                     {
                        properties: _newProperties,
                        newProperties: _properties
                     }
                  );
               }
            }
            case 'split_node': {
               return _objectSpread$e(
                  _objectSpread$e({}, op),
                  {},
                  {
                     type: 'merge_node',
                     path: Path.next(op.path)
                  }
               );
            }
         }
      }
   };

   var isObject = (value) => typeof value === 'object' && value !== null;

   /*
	  Custom deep equal comparison for Slate nodes.

	  We don't need general purpose deep equality;
	  Slate only supports plain values, Arrays, and nested objects.
	  Complex values nested inside Arrays are not supported.

	  Slate objects are designed to be serialised, so
	  missing keys are deliberately normalised to undefined.
	 */
   var isDeepEqual = (node, another) => {
      for (var key in node) {
         var a = Object.hasOwn(node, key) ? node[key] : undefined;
         var b = Object.hasOwn(another, key) ? another[key] : undefined;
         if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            for (var i = 0; i < a.length; i++) {
               if (a[i] !== b[i]) return false;
            }
         } else if (isObject(a) && isObject(b)) {
            if (!isDeepEqual(a, b)) return false;
         } else if (a !== b) {
            return false;
         }
      }
      /*
	    Deep object equality is only necessary in one direction; in the reverse direction
	    we are only looking for keys that are missing.
	    As above, undefined keys are normalised to missing.
	  */
      for (var _key in another) {
         if (node[_key] === undefined && another[_key] !== undefined) {
            return false;
         }
      }
      return true;
   };

   /**
    * Get the default location to insert content into the editor.
    * By default, use the selection as the target location. But if there is
    * no selection, insert at the end of the document since that is such a
    * common use case when inserting from a non-selected state.
    */
   var getDefaultInsertLocation = (editor) => {
      if (editor.selection) {
         return editor.selection;
      } else if (editor.children.length > 0) {
         return Editor.end(editor, []);
      } else {
         return [0];
      }
   };
   var CodepointType;
   (function (CodepointType) {
      CodepointType[(CodepointType['None'] = 0)] = 'None';
      CodepointType[(CodepointType['Extend'] = 1)] = 'Extend';
      CodepointType[(CodepointType['ZWJ'] = 2)] = 'ZWJ';
      CodepointType[(CodepointType['RI'] = 4)] = 'RI';
      CodepointType[(CodepointType['Prepend'] = 8)] = 'Prepend';
      CodepointType[(CodepointType['SpacingMark'] = 16)] = 'SpacingMark';
      CodepointType[(CodepointType['L'] = 32)] = 'L';
      CodepointType[(CodepointType['V'] = 64)] = 'V';
      CodepointType[(CodepointType['T'] = 128)] = 'T';
      CodepointType[(CodepointType['LV'] = 256)] = 'LV';
      CodepointType[(CodepointType['LVT'] = 512)] = 'LVT';
      CodepointType[(CodepointType['ExtPict'] = 1024)] = 'ExtPict';
      CodepointType[(CodepointType['Any'] = 2048)] = 'Any';
   })(CodepointType || (CodepointType = {}));
   [
      // GB6
      [CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT],
      // GB7
      [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T],
      // GB8
      [CodepointType.LVT | CodepointType.T, CodepointType.T],
      // GB9
      [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
      // GB9a
      [CodepointType.Any, CodepointType.SpacingMark],
      // GB9b
      [CodepointType.Prepend, CodepointType.Any],
      // GB11
      [CodepointType.ZWJ, CodepointType.ExtPict],
      // GB12 and GB13
      [CodepointType.RI, CodepointType.RI]
   ];

   var isEditor = function isEditor(value) {
      var { deep = false } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!isObject(value)) {
         return false;
      }
      var isEditor =
         typeof value.above === 'function' &&
         typeof value.addMark === 'function' &&
         typeof value.after === 'function' &&
         typeof value.apply === 'function' &&
         typeof value.before === 'function' &&
         typeof value.collapse === 'function' &&
         typeof value.delete === 'function' &&
         typeof value.deleteBackward === 'function' &&
         typeof value.deleteForward === 'function' &&
         typeof value.deleteFragment === 'function' &&
         typeof value.deselect === 'function' &&
         typeof value.edges === 'function' &&
         typeof value.elementReadOnly === 'function' &&
         typeof value.end === 'function' &&
         typeof value.first === 'function' &&
         typeof value.fragment === 'function' &&
         typeof value.getDirtyPaths === 'function' &&
         typeof value.getFragment === 'function' &&
         typeof value.getMarks === 'function' &&
         typeof value.hasBlocks === 'function' &&
         typeof value.hasInlines === 'function' &&
         typeof value.hasPath === 'function' &&
         typeof value.hasTexts === 'function' &&
         typeof value.insertBreak === 'function' &&
         typeof value.insertFragment === 'function' &&
         typeof value.insertNode === 'function' &&
         typeof value.insertNodes === 'function' &&
         typeof value.insertSoftBreak === 'function' &&
         typeof value.insertText === 'function' &&
         typeof value.isBlock === 'function' &&
         typeof value.isEdge === 'function' &&
         typeof value.isElementReadOnly === 'function' &&
         typeof value.isEmpty === 'function' &&
         typeof value.isEnd === 'function' &&
         typeof value.isInline === 'function' &&
         typeof value.isNormalizing === 'function' &&
         typeof value.isSelectable === 'function' &&
         typeof value.isStart === 'function' &&
         typeof value.isVoid === 'function' &&
         typeof value.last === 'function' &&
         typeof value.leaf === 'function' &&
         typeof value.levels === 'function' &&
         typeof value.liftNodes === 'function' &&
         typeof value.markableVoid === 'function' &&
         typeof value.mergeNodes === 'function' &&
         typeof value.move === 'function' &&
         typeof value.moveNodes === 'function' &&
         typeof value.next === 'function' &&
         typeof value.node === 'function' &&
         typeof value.nodes === 'function' &&
         typeof value.normalize === 'function' &&
         typeof value.normalizeNode === 'function' &&
         typeof value.onChange === 'function' &&
         typeof value.parent === 'function' &&
         typeof value.path === 'function' &&
         typeof value.pathRef === 'function' &&
         typeof value.pathRefs === 'function' &&
         typeof value.point === 'function' &&
         typeof value.pointRef === 'function' &&
         typeof value.pointRefs === 'function' &&
         typeof value.positions === 'function' &&
         typeof value.previous === 'function' &&
         typeof value.range === 'function' &&
         typeof value.rangeRef === 'function' &&
         typeof value.rangeRefs === 'function' &&
         typeof value.removeMark === 'function' &&
         typeof value.removeNodes === 'function' &&
         typeof value.select === 'function' &&
         typeof value.setNodes === 'function' &&
         typeof value.setNormalizing === 'function' &&
         typeof value.setPoint === 'function' &&
         typeof value.setSelection === 'function' &&
         typeof value.shouldMergeNodesRemovePrevNode === 'function' &&
         typeof value.shouldNormalize === 'function' &&
         typeof value.splitNodes === 'function' &&
         typeof value.start === 'function' &&
         typeof value.string === 'function' &&
         typeof value.unhangRange === 'function' &&
         typeof value.unsetNodes === 'function' &&
         typeof value.unwrapNodes === 'function' &&
         typeof value.void === 'function' &&
         typeof value.withoutNormalizing === 'function' &&
         typeof value.wrapNodes === 'function' &&
         (value.marks === null || isObject(value.marks)) &&
         (value.selection === null || Range.isRange(value.selection)) &&
         (deep
            ? Node.isNodeList(value.children) && Operation.isOperationList(value.operations)
            : Array.isArray(value.children) && Array.isArray(value.operations));
      return isEditor;
   };

   // eslint-disable-next-line no-redeclare
   var Editor = {
      above(editor, options) {
         return editor.above(options);
      },
      addMark(editor, key, value) {
         editor.addMark(key, value);
      },
      after(editor, at, options) {
         return editor.after(at, options);
      },
      before(editor, at, options) {
         return editor.before(at, options);
      },
      deleteBackward(editor) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         var { unit = 'character' } = options;
         editor.deleteBackward(unit);
      },
      deleteForward(editor) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         var { unit = 'character' } = options;
         editor.deleteForward(unit);
      },
      deleteFragment(editor, options) {
         editor.deleteFragment(options);
      },
      edges(editor, at) {
         return editor.edges(at);
      },
      elementReadOnly(editor) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
         return editor.elementReadOnly(options);
      },
      end(editor, at) {
         return editor.end(at);
      },
      first(editor, at) {
         return editor.first(at);
      },
      fragment(editor, at) {
         return editor.fragment(at);
      },
      hasBlocks(editor, element) {
         return editor.hasBlocks(element);
      },
      hasInlines(editor, element) {
         return editor.hasInlines(element);
      },
      hasPath(editor, path) {
         return editor.hasPath(path);
      },
      hasTexts(editor, element) {
         return editor.hasTexts(element);
      },
      insertBreak(editor) {
         editor.insertBreak();
      },
      insertFragment(editor, fragment, options) {
         editor.insertFragment(fragment, options);
      },
      insertNode(editor, node) {
         editor.insertNode(node);
      },
      insertSoftBreak(editor) {
         editor.insertSoftBreak();
      },
      insertText(editor, text) {
         editor.insertText(text);
      },
      isBlock(editor, value) {
         return editor.isBlock(value);
      },
      isEdge(editor, point, at) {
         return editor.isEdge(point, at);
      },
      isEditor,
      isElementReadOnly(editor, element) {
         return editor.isElementReadOnly(element);
      },
      isEmpty(editor, element) {
         return editor.isEmpty(element);
      },
      isEnd(editor, point, at) {
         return editor.isEnd(point, at);
      },
      isInline(editor, value) {
         return editor.isInline(value);
      },
      isNormalizing(editor) {
         return editor.isNormalizing();
      },
      isSelectable(editor, value) {
         return editor.isSelectable(value);
      },
      isStart(editor, point, at) {
         return editor.isStart(point, at);
      },
      isVoid(editor, value) {
         return editor.isVoid(value);
      },
      last(editor, at) {
         return editor.last(at);
      },
      leaf(editor, at, options) {
         return editor.leaf(at, options);
      },
      levels(editor, options) {
         return editor.levels(options);
      },
      marks(editor) {
         return editor.getMarks();
      },
      next(editor, options) {
         return editor.next(options);
      },
      node(editor, at, options) {
         return editor.node(at, options);
      },
      nodes(editor, options) {
         return editor.nodes(options);
      },
      normalize(editor, options) {
         editor.normalize(options);
      },
      parent(editor, at, options) {
         return editor.parent(at, options);
      },
      path(editor, at, options) {
         return editor.path(at, options);
      },
      pathRef(editor, path, options) {
         return editor.pathRef(path, options);
      },
      pathRefs(editor) {
         return editor.pathRefs();
      },
      point(editor, at, options) {
         return editor.point(at, options);
      },
      pointRef(editor, point, options) {
         return editor.pointRef(point, options);
      },
      pointRefs(editor) {
         return editor.pointRefs();
      },
      positions(editor, options) {
         return editor.positions(options);
      },
      previous(editor, options) {
         return editor.previous(options);
      },
      range(editor, at, to) {
         return editor.range(at, to);
      },
      rangeRef(editor, range, options) {
         return editor.rangeRef(range, options);
      },
      rangeRefs(editor) {
         return editor.rangeRefs();
      },
      removeMark(editor, key) {
         editor.removeMark(key);
      },
      setNormalizing(editor, isNormalizing) {
         editor.setNormalizing(isNormalizing);
      },
      start(editor, at) {
         return editor.start(at);
      },
      string(editor, at, options) {
         return editor.string(at, options);
      },
      unhangRange(editor, range, options) {
         return editor.unhangRange(range, options);
      },
      void(editor, options) {
         return editor.void(options);
      },
      withoutNormalizing(editor, fn) {
         editor.withoutNormalizing(fn);
      },
      shouldMergeNodesRemovePrevNode: (editor, prevNode, curNode) => {
         return editor.shouldMergeNodesRemovePrevNode(prevNode, curNode);
      }
   };

   // eslint-disable-next-line no-redeclare
   var Location = {
      isLocation(value) {
         return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
      },
      isPath(at) {
         return Array.isArray(at);
      },
      isPoint(at) {
         return 'offset' in at;
      },
      isRange(at) {
         return 'anchor' in at;
      },
      isSpan(at) {
         return Array.isArray(at) && Array.isArray(at[0]);
      }
   };

   function ownKeys$d(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$d(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$d(Object(t), !0).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$d(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   // eslint-disable-next-line no-redeclare
   var Point = {
      compare(point, another) {
         var result = Path.compare(point.path, another.path);
         if (result === 0) {
            if (point.offset < another.offset) return -1;
            if (point.offset > another.offset) return 1;
            return 0;
         }
         return result;
      },
      isAfter(point, another) {
         return Point.compare(point, another) === 1;
      },
      isBefore(point, another) {
         return Point.compare(point, another) === -1;
      },
      equals(point, another) {
         // PERF: ensure the offsets are equal first since they are cheaper to check.
         return point.offset === another.offset && Path.equals(point.path, another.path);
      },
      isPoint(value) {
         return isObject(value) && typeof value.offset === 'number' && Path.isPath(value.path);
      },
      transform(point, op) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         if (point === null) {
            return null;
         }
         var { affinity = 'forward' } = options;
         var { path, offset } = point;
         switch (op.type) {
            case 'insert_node':
            case 'move_node': {
               path = Path.transform(path, op, options);
               break;
            }
            case 'insert_text': {
               if (
                  Path.equals(op.path, path) &&
                  (op.offset < offset || (op.offset === offset && affinity === 'forward'))
               ) {
                  offset += op.text.length;
               }
               break;
            }
            case 'merge_node': {
               if (Path.equals(op.path, path)) {
                  offset += op.position;
               }
               path = Path.transform(path, op, options);
               break;
            }
            case 'remove_text': {
               if (Path.equals(op.path, path) && op.offset <= offset) {
                  offset -= Math.min(offset - op.offset, op.text.length);
               }
               break;
            }
            case 'remove_node': {
               if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
                  return null;
               }
               path = Path.transform(path, op, options);
               break;
            }
            case 'split_node': {
               if (Path.equals(op.path, path)) {
                  if (op.position === offset && affinity == null) {
                     return null;
                  } else if (
                     op.position < offset ||
                     (op.position === offset && affinity === 'forward')
                  ) {
                     offset -= op.position;
                     path = Path.transform(
                        path,
                        op,
                        _objectSpread$d(
                           _objectSpread$d({}, options),
                           {},
                           {
                              affinity: 'forward'
                           }
                        )
                     );
                  }
               } else {
                  path = Path.transform(path, op, options);
               }
               break;
            }
            default:
               return point;
         }
         return {
            path,
            offset
         };
      }
   };

   var _scrubber = undefined;
   /**
    * This interface implements a stringify() function, which is used by Slate
    * internally when generating exceptions containing end user data. Developers
    * using Slate may call Scrubber.setScrubber() to alter the behavior of this
    * stringify() function.
    *
    * For example, to prevent the cleartext logging of 'text' fields within Nodes:
    *
    *    import { Scrubber } from 'slate';
    *    Scrubber.setScrubber((key, val) => {
    *      if (key === 'text') return '...scrubbed...'
    *      return val
    *    });
    *
    */
   // eslint-disable-next-line no-redeclare
   var Scrubber = {
      setScrubber(scrubber) {
         _scrubber = scrubber;
      },
      stringify(value) {
         return JSON.stringify(value, _scrubber);
      }
   };

   var _excluded$2$1 = ['text'],
      _excluded2$2 = ['anchor', 'focus', 'merge'];
   function ownKeys$c(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$c(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$c(Object(t), true).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$c(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   // eslint-disable-next-line no-redeclare
   var Text$1 = {
      equals(text, another) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         var { loose = false } = options;
         function omitText(obj) {
            var { text } = obj,
               rest = _objectWithoutProperties$1(obj, _excluded$2$1);
            return rest;
         }
         return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
      },
      isText(value) {
         return isObject(value) && typeof value.text === 'string';
      },
      isTextList(value) {
         return Array.isArray(value) && value.every((val) => Text$1.isText(val));
      },
      isTextProps(props) {
         return props.text !== undefined;
      },
      matches(text, props) {
         for (var key in props) {
            if (key === 'text') {
               continue;
            }
            if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
               return false;
            }
         }
         return true;
      },
      decorations(node, decorations) {
         var leaves = [
            {
               leaf: _objectSpread$c({}, node)
            }
         ];
         for (var dec of decorations) {
            var { anchor, focus, merge: mergeDecoration } = dec,
               rest = _objectWithoutProperties$1(dec, _excluded2$2);
            var [start, end] = Range.edges(dec);
            var next = [];
            var leafEnd = 0;
            var decorationStart = start.offset;
            var decorationEnd = end.offset;
            var merge =
               mergeDecoration !== null && mergeDecoration !== void 0
                  ? mergeDecoration
                  : Object.assign;
            for (var { leaf } of leaves) {
               var { length } = leaf.text;
               var leafStart = leafEnd;
               leafEnd += length;
               // If the range encompasses the entire leaf, add the range.
               if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
                  merge(leaf, rest);
                  next.push({
                     leaf
                  });
                  continue;
               }
               // If the range expanded and match the leaf, or starts after, or ends before it, continue.
               if (
                  (decorationStart !== decorationEnd &&
                     (decorationStart === leafEnd || decorationEnd === leafStart)) ||
                  decorationStart > leafEnd ||
                  decorationEnd < leafStart ||
                  (decorationEnd === leafStart && leafStart !== 0)
               ) {
                  next.push({
                     leaf
                  });
                  continue;
               }
               // Otherwise we need to split the leaf, at the start, end, or both,
               // and add the range to the middle intersecting section. Do the end
               // split first since we don't need to update the offset that way.
               var middle = leaf;
               var before = void 0;
               var after = void 0;
               if (decorationEnd < leafEnd) {
                  var off = decorationEnd - leafStart;
                  after = {
                     leaf: _objectSpread$c(
                        _objectSpread$c({}, middle),
                        {},
                        {
                           text: middle.text.slice(off)
                        }
                     )
                  };
                  middle = _objectSpread$c(
                     _objectSpread$c({}, middle),
                     {},
                     {
                        text: middle.text.slice(0, off)
                     }
                  );
               }
               if (decorationStart > leafStart) {
                  var _off = decorationStart - leafStart;
                  before = {
                     leaf: _objectSpread$c(
                        _objectSpread$c({}, middle),
                        {},
                        {
                           text: middle.text.slice(0, _off)
                        }
                     )
                  };
                  middle = _objectSpread$c(
                     _objectSpread$c({}, middle),
                     {},
                     {
                        text: middle.text.slice(_off)
                     }
                  );
               }
               merge(middle, rest);
               if (before) {
                  next.push(before);
               }
               next.push({
                  leaf: middle
               });
               if (after) {
                  next.push(after);
               }
            }
            leaves = next;
         }
         if (leaves.length > 1) {
            var currentOffset = 0;
            for (var [index, item] of leaves.entries()) {
               var _start = currentOffset;
               var _end = _start + item.leaf.text.length;
               var position = {
                  start: _start,
                  end: _end
               };
               if (index === 0) position.isFirst = true;
               if (index === leaves.length - 1) position.isLast = true;
               item.position = position;
               currentOffset = _end;
            }
         }
         return leaves;
      }
   };

   function ownKeys$b(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$b(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$b(Object(t), true).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$b(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var insertChildren = function insertChildren(xs, index) {
      for (
         var _len = arguments.length, newValues = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
         _key < _len;
         _key++
      ) {
         newValues[_key - 2] = arguments[_key];
      }
      return [...xs.slice(0, index), ...newValues, ...xs.slice(index)];
   };
   var replaceChildren = function replaceChildren(xs, index, removeCount) {
      for (
         var _len2 = arguments.length, newValues = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3;
         _key2 < _len2;
         _key2++
      ) {
         newValues[_key2 - 3] = arguments[_key2];
      }
      return [...xs.slice(0, index), ...newValues, ...xs.slice(index + removeCount)];
   };
   var removeChildren = replaceChildren;
   /**
    * Replace a descendant with a new node, replacing all ancestors
    */
   var modifyDescendant = (root, path, f) => {
      if (path.length === 0) {
         throw new Error('Cannot modify the editor');
      }
      var node = Node.get(root, path);
      var slicedPath = path.slice();
      var modifiedNode = f(node);
      while (slicedPath.length > 1) {
         var _index = slicedPath.pop();
         var ancestorNode = Node.get(root, slicedPath);
         modifiedNode = _objectSpread$b(
            _objectSpread$b({}, ancestorNode),
            {},
            {
               children: replaceChildren(ancestorNode.children, _index, 1, modifiedNode)
            }
         );
      }
      var index = slicedPath.pop();
      root.children = replaceChildren(root.children, index, 1, modifiedNode);
   };
   /**
    * Replace the children of a node, replacing all ancestors
    */
   var modifyChildren = (root, path, f) => {
      if (path.length === 0) {
         root.children = f(root.children);
      } else {
         modifyDescendant(root, path, (node) => {
            if (Node.isText(node)) {
               throw new Error(
                  'Cannot get the element at path ['
                     .concat(path, '] because it refers to a leaf node: ')
                     .concat(Scrubber.stringify(node))
               );
            }
            return _objectSpread$b(
               _objectSpread$b({}, node),
               {},
               {
                  children: f(node.children)
               }
            );
         });
      }
   };
   /**
    * Replace a leaf, replacing all ancestors
    */
   var modifyLeaf = (root, path, f) =>
      modifyDescendant(root, path, (node) => {
         if (!Node.isText(node)) {
            throw new Error(
               'Cannot get the leaf node at path ['
                  .concat(path, '] because it refers to a non-leaf node: ')
                  .concat(Scrubber.stringify(node))
            );
         }
         return f(node);
      });

   function ownKeys$a(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$a(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$a(Object(t), !0).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$a(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   /**
    * The set of properties that cannot be set using set_node.
    */
   var NON_SETTABLE_NODE_PROPERTIES = [
      'children',
      'text',
      // Do not allow overriding any property on the Object prototype
      ...Object.getOwnPropertyNames(Object.prototype)
   ];
   /**
    * The set of properties that cannot be set using set_selection.
    */
   var NON_SETTABLE_SELECTION_PROPERTIES = Object.getOwnPropertyNames(Object.prototype);
   // eslint-disable-next-line no-redeclare
   var GeneralTransforms = {
      transform(editor, op) {
         var transformSelection = false;
         switch (op.type) {
            case 'insert_node': {
               var { path, node } = op;
               modifyChildren(editor, Path.parent(path), (children) => {
                  var index = path[path.length - 1];
                  if (index > children.length) {
                     throw new Error(
                        'Cannot apply an "insert_node" operation at path ['.concat(
                           path,
                           '] because the destination is past the end of the node.'
                        )
                     );
                  }
                  return insertChildren(children, index, node);
               });
               transformSelection = true;
               break;
            }
            case 'insert_text': {
               var { path: _path, offset, text } = op;
               if (text.length === 0) break;
               modifyLeaf(editor, _path, (node) => {
                  var before = node.text.slice(0, offset);
                  var after = node.text.slice(offset);
                  return _objectSpread$a(
                     _objectSpread$a({}, node),
                     {},
                     {
                        text: before + text + after
                     }
                  );
               });
               transformSelection = true;
               break;
            }
            case 'merge_node': {
               var { path: _path2 } = op;
               var index = _path2[_path2.length - 1];
               var prevPath = Path.previous(_path2);
               var prevIndex = prevPath[prevPath.length - 1];
               if (_path2.length === 0) {
                  throw new Error(
                     'Cannot apply a "merge_node" operation at path ['.concat(
                        _path2,
                        '] because the root node cannot be merged.'
                     )
                  );
               }
               // Defend against malicious paths containing strings
               if (typeof index !== 'number' || typeof prevIndex !== 'number')
                  throw new Error('Index must be number');
               modifyChildren(editor, Path.parent(_path2), (children) => {
                  var node = children[index];
                  var prev = children[prevIndex];
                  var newNode;
                  if (Node.isText(node) && Node.isText(prev)) {
                     newNode = _objectSpread$a(
                        _objectSpread$a({}, prev),
                        {},
                        {
                           text: prev.text + node.text
                        }
                     );
                  } else if (Node.isElement(node) && Node.isElement(prev)) {
                     newNode = _objectSpread$a(
                        _objectSpread$a({}, prev),
                        {},
                        {
                           children: prev.children.concat(node.children)
                        }
                     );
                  } else {
                     throw new Error(
                        'Cannot apply a "merge_node" operation at path ['
                           .concat(_path2, '] to nodes of different interfaces: ')
                           .concat(Scrubber.stringify(node), ' ')
                           .concat(Scrubber.stringify(prev))
                     );
                  }
                  return replaceChildren(children, prevIndex, 2, newNode);
               });
               transformSelection = true;
               break;
            }
            case 'move_node': {
               var { path: _path3, newPath } = op;
               var _index = _path3[_path3.length - 1];
               if (Path.isAncestor(_path3, newPath)) {
                  throw new Error(
                     'Cannot move a path ['
                        .concat(_path3, '] to new path [')
                        .concat(newPath, '] because the destination is inside itself.')
                  );
               }
               var _node = Node.get(editor, _path3);
               modifyChildren(editor, Path.parent(_path3), (children) =>
                  removeChildren(children, _index, 1)
               );
               // This is tricky, but since the `path` and `newPath` both refer to
               // the same snapshot in time, there's a mismatch. After either
               // removing the original position, the second step's path can be out
               // of date. So instead of using the `op.newPath` directly, we
               // transform `op.path` to ascertain what the `newPath` would be after
               // the operation was applied.
               var truePath = Path.transform(_path3, op);
               var newIndex = truePath[truePath.length - 1];
               modifyChildren(editor, Path.parent(truePath), (children) =>
                  insertChildren(children, newIndex, _node)
               );
               transformSelection = true;
               break;
            }
            case 'remove_node': {
               var { path: _path4 } = op;
               var _index2 = _path4[_path4.length - 1];
               modifyChildren(editor, Path.parent(_path4), (children) =>
                  removeChildren(children, _index2, 1)
               );
               // Transform all the points in the value, but if the point was in the
               // node that was removed we need to update the range or remove it.
               if (editor.selection) {
                  var selection = _objectSpread$a({}, editor.selection);
                  for (var [point, key] of Range.points(selection)) {
                     var result = Point.transform(point, op);
                     if (selection != null && result != null) {
                        selection[key] = result;
                     } else {
                        var prev = void 0;
                        var next = void 0;
                        for (var [n, p] of Node.texts(editor)) {
                           if (Path.compare(p, _path4) === -1) {
                              prev = [n, p];
                           } else {
                              next = [n, p];
                              break;
                           }
                        }
                        var preferNext = false;
                        if (prev && next) {
                           if (Path.isSibling(prev[1], _path4)) {
                              preferNext = false;
                           } else if (Path.equals(next[1], _path4)) {
                              preferNext = true;
                           } else {
                              preferNext =
                                 Path.common(prev[1], _path4).length <
                                 Path.common(next[1], _path4).length;
                           }
                        }
                        if (prev && !preferNext) {
                           selection[key] = {
                              path: prev[1],
                              offset: prev[0].text.length
                           };
                        } else if (next) {
                           selection[key] = {
                              path: next[1],
                              offset: 0
                           };
                        } else {
                           selection = null;
                        }
                     }
                  }
                  if (!selection || !Range.equals(selection, editor.selection)) {
                     editor.selection = selection;
                  }
               }
               break;
            }
            case 'remove_text': {
               var { path: _path5, offset: _offset, text: _text } = op;
               if (_text.length === 0) break;
               modifyLeaf(editor, _path5, (node) => {
                  var before = node.text.slice(0, _offset);
                  var after = node.text.slice(_offset + _text.length);
                  return _objectSpread$a(
                     _objectSpread$a({}, node),
                     {},
                     {
                        text: before + after
                     }
                  );
               });
               transformSelection = true;
               break;
            }
            case 'set_node': {
               var { path: _path6, properties, newProperties } = op;
               if (_path6.length === 0) {
                  throw new Error('Cannot set properties on the root node!');
               }
               modifyDescendant(editor, _path6, (node) => {
                  var newNode = _objectSpread$a({}, node);
                  for (var _key in newProperties) {
                     if (NON_SETTABLE_NODE_PROPERTIES.includes(_key)) {
                        throw new Error('Cannot set the "'.concat(_key, '" property of nodes!'));
                     }
                     var value = newProperties[_key];
                     // Make sure we're not setting `then` to a function, since this will
                     // cause the node to be treated as a Promise-like object, which can
                     // cause unexpected behaviour when returning the node from async
                     // functions.
                     if (_key === 'then' && typeof value === 'function') {
                        throw new Error('Cannot set the "then" property of a node to a function');
                     }
                     if (value == null) {
                        delete newNode[_key];
                     } else {
                        newNode[_key] = value;
                     }
                  }
                  // properties that were previously defined, but are now missing, must be deleted
                  for (var _key2 in properties) {
                     if (!Object.hasOwn(newProperties, _key2)) {
                        delete newNode[_key2];
                     }
                  }
                  return newNode;
               });
               break;
            }
            case 'set_selection': {
               var { newProperties: _newProperties } = op;
               if (_newProperties == null) {
                  editor.selection = null;
                  break;
               }
               if (editor.selection == null) {
                  if (!(_newProperties.anchor && _newProperties.focus)) {
                     throw new Error(
                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                           Scrubber.stringify(_newProperties),
                           ' when there is no current selection.'
                        )
                     );
                  }
                  editor.selection = _objectSpread$a({}, _newProperties);
                  break;
               }
               var _selection = _objectSpread$a({}, editor.selection);
               for (var _key3 in _newProperties) {
                  if (NON_SETTABLE_SELECTION_PROPERTIES.includes(_key3)) {
                     throw new Error(
                        'Cannot set the "'.concat(_key3, '" property of the selection!')
                     );
                  }
                  var value = _newProperties[_key3];
                  // Make sure we're not setting `then` to a function, since this will
                  // cause the selection to be treated as a Promise-like object, which
                  // can cause unexpected behaviour when returning the selection from
                  // async functions.
                  if (_key3 === 'then' && typeof value === 'function') {
                     throw new Error(
                        'Cannot set the "then" property of the selection to a function'
                     );
                  }
                  if (value == null) {
                     if (_key3 === 'anchor' || _key3 === 'focus') {
                        throw new Error(
                           'Cannot remove the "'.concat(_key3, '" selection property')
                        );
                     }
                     delete _selection[_key3];
                  } else {
                     _selection[_key3] = value;
                  }
               }
               editor.selection = _selection;
               break;
            }
            case 'split_node': {
               var { path: _path7, position, properties: _properties } = op;
               var _index3 = _path7[_path7.length - 1];
               if (_path7.length === 0) {
                  throw new Error(
                     'Cannot apply a "split_node" operation at path ['.concat(
                        _path7,
                        '] because the root node cannot be split.'
                     )
                  );
               }
               // Defend against malicious paths containing strings
               if (typeof _index3 !== 'number') throw new Error('Index must be number');
               modifyChildren(editor, Path.parent(_path7), (children) => {
                  var node = children[_index3];
                  var newNode;
                  var nextNode;
                  if (Node.isText(node)) {
                     var before = node.text.slice(0, position);
                     var after = node.text.slice(position);
                     newNode = _objectSpread$a(
                        _objectSpread$a({}, node),
                        {},
                        {
                           text: before
                        }
                     );
                     nextNode = {
                        text: after
                     };
                  } else {
                     var _before = node.children.slice(0, position);
                     var _after = node.children.slice(position);
                     newNode = _objectSpread$a(
                        _objectSpread$a({}, node),
                        {},
                        {
                           children: _before
                        }
                     );
                     nextNode = {
                        children: _after
                     };
                  }
                  for (var _key4 in _properties) {
                     if (NON_SETTABLE_NODE_PROPERTIES.includes(_key4)) {
                        throw new Error('Cannot set the "'.concat(_key4, '" property of nodes!'));
                     }
                     var _value = _properties[_key4];
                     // Make sure we're not setting `then` to a function, since this will
                     // cause the node to be treated as a Promise-like object, which can
                     // cause unexpected behaviour when returning the node from async
                     // functions.
                     if (_key4 === 'then' && typeof _value === 'function') {
                        throw new Error('Cannot set the "then" property of a node to a function');
                     }
                     if (_value != null) {
                        nextNode[_key4] = _value;
                     }
                  }
                  return replaceChildren(children, _index3, 1, newNode, nextNode);
               });
               transformSelection = true;
               break;
            }
         }
         if (transformSelection && editor.selection) {
            var _selection2 = _objectSpread$a({}, editor.selection);
            for (var [_point, _key5] of Range.points(_selection2)) {
               _selection2[_key5] = Point.transform(_point, op);
            }
            if (!Range.equals(_selection2, editor.selection)) {
               editor.selection = _selection2;
            }
         }
      }
   };

   // eslint-disable-next-line no-redeclare
   var NodeTransforms = {
      insertNodes(editor, nodes, options) {
         editor.insertNodes(nodes, options);
      },
      liftNodes(editor, options) {
         editor.liftNodes(options);
      },
      mergeNodes(editor, options) {
         editor.mergeNodes(options);
      },
      moveNodes(editor, options) {
         editor.moveNodes(options);
      },
      removeNodes(editor, options) {
         editor.removeNodes(options);
      },
      setNodes(editor, props, options) {
         editor.setNodes(props, options);
      },
      splitNodes(editor, options) {
         editor.splitNodes(options);
      },
      unsetNodes(editor, props, options) {
         editor.unsetNodes(props, options);
      },
      unwrapNodes(editor, options) {
         editor.unwrapNodes(options);
      },
      wrapNodes(editor, element, options) {
         editor.wrapNodes(element, options);
      }
   };

   // eslint-disable-next-line no-redeclare
   var SelectionTransforms = {
      collapse(editor, options) {
         editor.collapse(options);
      },
      deselect(editor) {
         editor.deselect();
      },
      move(editor, options) {
         editor.move(options);
      },
      select(editor, target) {
         editor.select(target);
      },
      setPoint(editor, props, options) {
         editor.setPoint(props, options);
      },
      setSelection(editor, props) {
         editor.setSelection(props);
      }
   };

   // eslint-disable-next-line no-redeclare
   var TextTransforms = {
      delete(editor, options) {
         editor.delete(options);
      },
      insertFragment(editor, fragment, options) {
         editor.insertFragment(fragment, options);
      },
      insertText(editor, text) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         Editor.withoutNormalizing(editor, () => {
            var { voids = false } = options;
            var { at = getDefaultInsertLocation(editor) } = options;
            if (Location.isPath(at)) {
               at = Editor.range(editor, at);
            }
            if (Location.isRange(at)) {
               if (Range.isCollapsed(at)) {
                  at = at.anchor;
               } else {
                  var end = Range.end(at);
                  if (
                     !voids &&
                     Editor.void(editor, {
                        at: end
                     })
                  ) {
                     return;
                  }
                  var start = Range.start(at);
                  var startRef = Editor.pointRef(editor, start);
                  var endRef = Editor.pointRef(editor, end);
                  Transforms.delete(editor, {
                     at,
                     voids
                  });
                  var startPoint = startRef.unref();
                  var endPoint = endRef.unref();
                  at = startPoint || endPoint;
                  Transforms.setSelection(editor, {
                     anchor: at,
                     focus: at
                  });
               }
            }
            if (
               (!voids &&
                  Editor.void(editor, {
                     at
                  })) ||
               Editor.elementReadOnly(editor, {
                  at
               })
            ) {
               return;
            }
            var { path, offset } = at;
            if (text.length > 0)
               editor.apply({
                  type: 'insert_text',
                  path,
                  offset,
                  text
               });
         });
      }
   };

   function ownKeys$9$1(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$9$1(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$9$1(Object(t), true).forEach(function (r) {
                 _defineProperty$1(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$9$1(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var Transforms = _objectSpread$9$1(
      _objectSpread$9$1(
         _objectSpread$9$1(_objectSpread$9$1({}, GeneralTransforms), NodeTransforms),
         SelectionTransforms
      ),
      TextTransforms
   );

   /**
    * A React context for sharing the editor object.
    */
   var EditorContext = /*#__PURE__*/ React.createContext(null);
   /**
    * Get the current editor object from the React context.
    */
   var useSlateStatic = function useSlateStatic() {
      var editor = React.useContext(EditorContext);
      if (!editor) {
         throw new Error(
            "The `useSlateStatic` hook must be used inside the <Slate> component's context."
         );
      }
      return editor;
   };

   var lib = createCommonjsModule(function (module, exports$1) {
      Object.defineProperty(exports$1, '__esModule', {
         value: true
      });

      /**
       * Constants.
       */

      var IS_MAC =
         typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

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

      // Пропатчено
      // Добавил недостающие коды клавиш
      // https://online.sbis.ru/opendoc.html?guid=89bc6879-52b2-4b08-b58a-e4f47c1be624
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
         0: 48,
         1: 49,
         2: 50,
         3: 51,
         4: 52,
         5: 53,
         6: 54,
         7: 55,
         8: 56,
         9: 57,
         a: 65,
         b: 66,
         c: 67,
         d: 68,
         e: 69,
         f: 70,
         g: 71,
         h: 72,
         i: 73,
         j: 74,
         k: 75,
         l: 76,
         m: 77,
         n: 78,
         o: 79,
         p: 80,
         q: 81,
         r: 82,
         s: 83,
         t: 84,
         u: 85,
         v: 86,
         w: 87,
         x: 88,
         y: 89,
         z: 90,
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
         "'": 222
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
            for (
               var _iterator = values[Symbol.iterator](), _step;
               !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
               _iteratorNormalCompletion = true
            ) {
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

      exports$1.default = isHotkey;
      exports$1.isHotkey = isHotkey;
      exports$1.isCodeHotkey = isCodeHotkey;
      exports$1.isKeyHotkey = isKeyHotkey;
      exports$1.parseHotkey = parseHotkey;
      exports$1.compareHotkey = compareHotkey;
      exports$1.toKeyCode = toKeyCode;
      exports$1.toKeyName = toKeyName;
   });

   unwrapExports(lib);
   var lib_1 = lib.isHotkey;
   lib.isCodeHotkey;
   lib.isKeyHotkey;
   lib.parseHotkey;
   lib.compareHotkey;
   lib.toKeyCode;
   lib.toKeyName;

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
   var getDefaultView = (value) => {
      return (value && value.ownerDocument && value.ownerDocument.defaultView) || null;
   };
   /**
    * Check if a DOM node is a comment node.
    */
   var isDOMComment = (value) => {
      return isDOMNode(value) && value.nodeType === 8;
   };
   /**
    * Check if a DOM node is an element node.
    */
   var isDOMElement = (value) => {
      return isDOMNode(value) && value.nodeType === 1;
   };
   /**
    * Check if a value is a DOM node.
    */
   var isDOMNode = (value) => {
      var window = getDefaultView(value);
      return !!window && value instanceof window.Node;
   };
   /**
    * Check if a value is a DOM selection.
    */
   var isDOMSelection = (value) => {
      var window = value && value.anchorNode && getDefaultView(value.anchorNode);
      return !!window && value instanceof window.Selection;
   };
   /**
    * Check if a DOM node is an element node.
    */
   var isDOMText = (value) => {
      return isDOMNode(value) && value.nodeType === 3;
   };
   /**
    * Checks whether a paste event is a plaintext-only event.
    */
   var isPlainTextOnlyPaste = (event) => {
      return (
         event.clipboardData &&
         event.clipboardData.getData('text/plain') !== '' &&
         event.clipboardData.types.length === 1
      );
   };
   /**
    * Normalize a DOM point so that it always refers to a text node.
    */
   var normalizeDOMPoint = (domPoint) => {
      var [node, offset] = domPoint;
      // If it's an element node, its offset refers to the index of its children
      // including comment nodes, so try to find the right text child node.
      if (isDOMElement(node) && node.childNodes.length) {
         var isLast = offset === node.childNodes.length;
         var index = isLast ? offset - 1 : offset;
         [node, index] = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward');
         // If the editable child found is in front of input offset, we instead seek to its end
         isLast = index < offset;
         // If the node has children, traverse until we have a leaf node. Leaf nodes
         // can be either text nodes, or other void DOM nodes.
         while (isDOMElement(node) && node.childNodes.length) {
            var i = isLast ? node.childNodes.length - 1 : 0;
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
   var hasShadowRoot = (node) => {
      var parent = node && node.parentNode;
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
   var getEditableChildAndIndex = (parent, index, direction) => {
      if (typeof index !== 'number') {
         throw new Error('Expected index to be a number');
      }
      var { childNodes } = parent;
      var child = childNodes[index];
      var i = index;
      var triedForward = false;
      var triedBackward = false;
      // While the child is a comment node, or an element node with no children,
      // keep iterating to find a sibling non-void, non-comment node.
      while (
         isDOMComment(child) ||
         (isDOMElement(child) && child.childNodes.length === 0) ||
         (isDOMElement(child) && child.getAttribute('contenteditable') === 'false')
      ) {
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
   var getEditableChild = (parent, index, direction) => {
      var [child] = getEditableChildAndIndex(parent, index, direction);
      return child;
   };
   /**
    * Get a plaintext representation of the content of a node, accounting for block
    * elements which get a newline appended.
    *
    * The domNode must be attached to the DOM.
    */
   var getPlainText = (domNode) => {
      var text = '';
      if (isDOMText(domNode) && domNode.nodeValue) {
         return domNode.nodeValue;
      }
      if (isDOMElement(domNode)) {
         for (var childNode of Array.from(domNode.childNodes)) {
            text += getPlainText(childNode);
         }
         var display = getComputedStyle(domNode).getPropertyValue('display');
         if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
            text += '\n';
         }
      }
      return text;
   };
   /**
    * Get x-slate-fragment attribute from data-slate-fragment
    */
   var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
   var getSlateFragmentAttribute = (dataTransfer) => {
      var htmlData = dataTransfer.getData('text/html');
      var [, fragment] = htmlData.match(catchSlateFragment) || [];
      return fragment;
   };
   /**
    * Get the dom selection from Shadow Root if possible, otherwise from the document
    */
   var getSelection = (root) => {
      if (root.getSelection != null) {
         return root.getSelection();
      }
      return document.getSelection();
   };
   /**
    * Check whether a mutation originates from a editable element inside the editor.
    */
   var isTrackedMutation = (editor, mutation, batch) => {
      var { target } = mutation;
      if (isDOMElement(target) && target.matches('[contentEditable="false"]')) {
         return false;
      }
      var { document } = DOMEditor.getWindow(editor);
      if (containsShadowAware(document, target)) {
         return DOMEditor.hasDOMNode(editor, target, {
            editable: true
         });
      }
      var parentMutation = batch.find((_ref) => {
         var { addedNodes, removedNodes } = _ref;
         for (var node of addedNodes) {
            if (node === target || containsShadowAware(node, target)) {
               return true;
            }
         }
         for (var _node of removedNodes) {
            if (_node === target || containsShadowAware(_node, target)) {
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
   var getActiveElement = () => {
      var activeElement = document.activeElement;
      while (
         (_activeElement = activeElement) !== null &&
         _activeElement !== void 0 &&
         _activeElement.shadowRoot &&
         (_activeElement$shadow = activeElement.shadowRoot) !== null &&
         _activeElement$shadow !== void 0 &&
         _activeElement$shadow.activeElement
      ) {
         var _activeElement, _activeElement$shadow, _activeElement2;
         activeElement =
            (_activeElement2 = activeElement) === null ||
            _activeElement2 === void 0 ||
            (_activeElement2 = _activeElement2.shadowRoot) === null ||
            _activeElement2 === void 0
               ? void 0
               : _activeElement2.activeElement;
      }
      return activeElement;
   };
   /**
    * @returns `true` if `otherNode` is before `node` in the document; otherwise, `false`.
    */
   var isBefore = (node, otherNode) =>
      Boolean(node.compareDocumentPosition(otherNode) & DOMNode.DOCUMENT_POSITION_PRECEDING);
   /**
    * @returns `true` if `otherNode` is after `node` in the document; otherwise, `false`.
    */
   var isAfter = (node, otherNode) =>
      Boolean(node.compareDocumentPosition(otherNode) & DOMNode.DOCUMENT_POSITION_FOLLOWING);
   /**
    * Shadow DOM-aware version of Element.closest()
    * Traverses up the DOM tree, crossing shadow DOM boundaries
    */
   var closestShadowAware = (element, selector) => {
      if (!element) {
         return null;
      }
      var current = element;
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
   var containsShadowAware = (parent, child) => {
      if (!parent || !child) {
         return false;
      }
      if (parent.contains(child)) {
         return true;
      }
      var current = child;
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

   // ПРОПАТЧЕНО
   // ошибка на айпаде при открытии клавиатуры буквы маленькие, а не большие
   // не верно iPad детектится. тут правка для MacIntel
   var _navigator$userAgent$, _navigator$userAgent$2;
   var HAS_NAVIGATOR = typeof navigator !== 'undefined' && typeof window !== 'undefined';
   var IS_IPAD_OS =
      HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
   var IS_IOS =
      HAS_NAVIGATOR &&
      (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_OS) &&
      !window.MSStream;
   var IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
   var IS_ANDROID = typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent);
   var IS_FIREFOX =
      typeof navigator !== 'undefined' &&
      /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
   var IS_WEBKIT =
      typeof navigator !== 'undefined' && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent);
   // "modern" Edge was released at 79.x
   var IS_EDGE_LEGACY =
      typeof navigator !== 'undefined' &&
      /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
   var IS_CHROME = typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent);
   // Native `beforeInput` events don't work well with react on Chrome 75
   // and older, Chrome 76+ can use `beforeInput` though.
   var IS_CHROME_LEGACY =
      typeof navigator !== 'undefined' &&
      /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent);
   var IS_ANDROID_CHROME_LEGACY =
      IS_ANDROID &&
      typeof navigator !== 'undefined' &&
      /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent);
   // Firefox did not support `beforeInput` until `v87`.
   var IS_FIREFOX_LEGACY =
      typeof navigator !== 'undefined' &&
      /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent);
   // UC mobile browser
   var IS_UC_MOBILE = typeof navigator !== 'undefined' && /.*UCBrowser/.test(navigator.userAgent);
   // Wechat browser (not including mac wechat)
   var IS_WECHATBROWSER =
      typeof navigator !== 'undefined' &&
      /.*Wechat/.test(navigator.userAgent) &&
      !/.*MacWechat/.test(navigator.userAgent) &&
      // avoid lookbehind (buggy in safari < 16.4)
      (!IS_CHROME || IS_CHROME_LEGACY); // wechat and low chrome is real wechat
   // Check if DOM is available as React does internally.
   // https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
   var CAN_USE_DOM = !!(
      typeof window !== 'undefined' &&
      typeof window.document !== 'undefined' &&
      typeof window.document.createElement !== 'undefined'
   );
   // Check if the browser is Safari and older than 17
   typeof navigator !== 'undefined' &&
      /Safari/.test(navigator.userAgent) &&
      /Version\/(\d+)/.test(navigator.userAgent) &&
      ((_navigator$userAgent$ = navigator.userAgent.match(/Version\/(\d+)/)) !== null &&
      _navigator$userAgent$ !== void 0 &&
      _navigator$userAgent$[1]
         ? parseInt(
              (_navigator$userAgent$2 = navigator.userAgent.match(/Version\/(\d+)/)) === null ||
                 _navigator$userAgent$2 === void 0
                 ? void 0
                 : _navigator$userAgent$2[1],
              10
           ) < 17
         : false);
   // COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
   // Chrome Legacy doesn't support `beforeinput` correctly
   var HAS_BEFORE_INPUT_SUPPORT =
      (!IS_CHROME_LEGACY || !IS_ANDROID_CHROME_LEGACY) &&
      !IS_EDGE_LEGACY &&
      // globalThis is undefined in older browsers
      typeof globalThis !== 'undefined' &&
      globalThis.InputEvent &&
      // @ts-ignore The `getTargetRanges` property isn't recognized.
      typeof globalThis.InputEvent.prototype.getTargetRanges === 'function';

   function _typeof(o) {
      '@babel/helpers - typeof';

      return (
         (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
               ? function (o) {
                    return typeof o;
                 }
               : function (o) {
                    return o &&
                       'function' == typeof Symbol &&
                       o.constructor === Symbol &&
                       o !== Symbol.prototype
                       ? 'symbol'
                       : typeof o;
                 }),
         _typeof(o)
      );
   }

   function _toPrimitive(input, hint) {
      if (_typeof(input) !== 'object' || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
         var res = prim.call(input, hint || 'default');
         if (_typeof(res) !== 'object') return res;
         throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (hint === 'string' ? String : Number)(input);
   }

   function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, 'string');
      return _typeof(key) === 'symbol' ? key : String(key);
   }

   function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
         Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
         });
      } else {
         obj[key] = value;
      }
      return obj;
   }

   /**
    * An auto-incrementing identifier for keys.
    */
   var n = 0;
   /**
    * A class that keeps track of a key string. We use a full class here because we
    * want to be able to use them as keys in `WeakMap` objects.
    */
   class Key {
      constructor() {
         _defineProperty(this, 'id', void 0);
         this.id = ''.concat(n++);
      }
   }

   /**
    * Two weak maps that allow us rebuild a path given a node. They are populated
    * at render time such that after a render occurs we can always backtrack.
    */
   var IS_NODE_MAP_DIRTY = new WeakMap();
   var NODE_TO_INDEX = new WeakMap();
   var NODE_TO_PARENT = new WeakMap();
   /**
    * Weak maps that allow us to go between Slate nodes and DOM nodes. These
    * are used to resolve DOM event-related logic into Slate actions.
    */
   var EDITOR_TO_WINDOW = new WeakMap();
   var EDITOR_TO_ELEMENT = new WeakMap();
   var EDITOR_TO_PLACEHOLDER_ELEMENT = new WeakMap();
   var ELEMENT_TO_NODE = new WeakMap();
   var NODE_TO_ELEMENT = new WeakMap();
   var NODE_TO_KEY = new WeakMap();
   var EDITOR_TO_KEY_TO_ELEMENT = new WeakMap();
   /**
    * Weak maps for storing editor-related state.
    */
   var IS_READ_ONLY = new WeakMap();
   var IS_FOCUSED = new WeakMap();
   var IS_COMPOSING = new WeakMap();
   var EDITOR_TO_USER_SELECTION = new WeakMap();
   /**
    * Weak map for associating the context `onChange` context with the plugin.
    */
   var EDITOR_TO_ON_CHANGE = new WeakMap();
   /**
    * Weak maps for saving pending state on composition stage.
    */
   var EDITOR_TO_SCHEDULE_FLUSH = new WeakMap();
   var EDITOR_TO_PENDING_INSERTION_MARKS = new WeakMap();
   var EDITOR_TO_USER_MARKS = new WeakMap();
   /**
    * Android input handling specific weak-maps
    */
   var EDITOR_TO_PENDING_DIFFS = new WeakMap();
   var EDITOR_TO_PENDING_ACTION = new WeakMap();
   var EDITOR_TO_PENDING_SELECTION = new WeakMap();
   var EDITOR_TO_FORCE_RENDER = new WeakMap();
   /**
    * Symbols.
    */
   var PLACEHOLDER_SYMBOL = Symbol('placeholder');
   var MARK_PLACEHOLDER_SYMBOL = Symbol('mark-placeholder');

   // eslint-disable-next-line no-redeclare
   var DOMEditor = {
      androidPendingDiffs: (editor) => EDITOR_TO_PENDING_DIFFS.get(editor),
      androidScheduleFlush: (editor) => {
         var _EDITOR_TO_SCHEDULE_F;
         (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(editor)) === null ||
            _EDITOR_TO_SCHEDULE_F === void 0 ||
            _EDITOR_TO_SCHEDULE_F();
      },
      blur: (editor) => {
         var el = DOMEditor.toDOMNode(editor, editor);
         var root = DOMEditor.findDocumentOrShadowRoot(editor);
         IS_FOCUSED.set(editor, false);
         if (root.activeElement === el) {
            el.blur();
         }
      },
      deselect: (editor) => {
         var { selection } = editor;
         var root = DOMEditor.findDocumentOrShadowRoot(editor);
         var domSelection = getSelection(root);
         if (domSelection && domSelection.rangeCount > 0) {
            domSelection.removeAllRanges();
         }
         if (selection) {
            Transforms.deselect(editor);
         }
      },
      findDocumentOrShadowRoot: (editor) => {
         var el = DOMEditor.toDOMNode(editor, editor);
         var root = el.getRootNode();
         if (root instanceof Document || root instanceof ShadowRoot) {
            return root;
         }
         return el.ownerDocument;
      },
      findEventRange: (editor, event) => {
         if ('nativeEvent' in event) {
            event = event.nativeEvent;
         }
         var { clientX: x, clientY: y, target } = event;
         if (x == null || y == null) {
            throw new Error('Cannot resolve a Slate range from a DOM event: '.concat(event));
         }
         var node = DOMEditor.toSlateNode(editor, event.target);
         var path = DOMEditor.findPath(editor, node);
         // If the drop target is inside a void node, move it into either the
         // next or previous node, depending on which side the `x` and `y`
         // coordinates are closest to.
         if (Node.isElement(node) && Editor.isVoid(editor, node)) {
            var rect = target.getBoundingClientRect();
            var isPrev = editor.isInline(node)
               ? x - rect.left < rect.left + rect.width - x
               : y - rect.top < rect.top + rect.height - y;
            var edge = Editor.point(editor, path, {
               edge: isPrev ? 'start' : 'end'
            });
            var point = isPrev ? Editor.before(editor, edge) : Editor.after(editor, edge);
            if (point) {
               var _range = Editor.range(editor, point);
               return _range;
            }
         }
         // Else resolve a range from the caret position where the drop occured.
         var domRange;
         var { document } = DOMEditor.getWindow(editor);
         // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)
         if (document.caretRangeFromPoint) {
            domRange = document.caretRangeFromPoint(x, y);
         } else {
            var position = document.caretPositionFromPoint(x, y);
            if (position) {
               domRange = document.createRange();
               domRange.setStart(position.offsetNode, position.offset);
               domRange.setEnd(position.offsetNode, position.offset);
            }
         }
         if (!domRange) {
            throw new Error('Cannot resolve a Slate range from a DOM event: '.concat(event));
         }
         // Resolve a Slate range from the DOM range.
         var range = DOMEditor.toSlateRange(editor, domRange, {
            exactMatch: false,
            suppressThrow: false
         });
         return range;
      },
      findKey: (editor, node) => {
         var key = NODE_TO_KEY.get(node);
         if (!key) {
            key = new Key();
            NODE_TO_KEY.set(node, key);
         }
         return key;
      },
      findPath: (editor, node) => {
         var path = [];
         var child = node;
         while (true) {
            var parent = NODE_TO_PARENT.get(child);
            if (parent == null) {
               if (child === editor) {
                  return path;
               } else {
                  break;
               }
            }
            var i = NODE_TO_INDEX.get(child);
            if (i == null) {
               break;
            }
            path.unshift(i);
            child = parent;
         }
         throw new Error(
            'Unable to find the path for Slate node: '.concat(Scrubber.stringify(node))
         );
      },
      focus: function focus(editor) {
         var options =
            arguments.length > 1 && arguments[1] !== undefined
               ? arguments[1]
               : {
                    retries: 5
                 };
         // Return if already focused
         if (IS_FOCUSED.get(editor)) {
            return;
         }
         // Return if no dom node is associated with the editor, which means the editor is not yet mounted
         // or has been unmounted. This can happen especially, while retrying to focus the editor.
         if (!EDITOR_TO_ELEMENT.get(editor)) {
            return;
         }
         // Retry setting focus if the editor has pending operations.
         // The DOM (selection) is unstable while changes are applied.
         // Retry until retries are exhausted or editor is focused.
         if (options.retries <= 0) {
            throw new Error('Could not set focus, editor seems stuck with pending operations');
         }
         if (editor.operations.length > 0) {
            setTimeout(() => {
               DOMEditor.focus(editor, {
                  retries: options.retries - 1
               });
            }, 10);
            return;
         }
         var el = DOMEditor.toDOMNode(editor, editor);
         var root = DOMEditor.findDocumentOrShadowRoot(editor);
         if (root.activeElement !== el) {
            // Ensure that the DOM selection state is set to the editor's selection
            if (editor.selection && root instanceof Document) {
               var domSelection = getSelection(root);
               var domRange = DOMEditor.toDOMRange(editor, editor.selection);
               domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
               domSelection === null || domSelection === void 0 || domSelection.addRange(domRange);
            }
            // Create a new selection in the top of the document if missing
            if (!editor.selection) {
               Transforms.select(editor, Editor.start(editor, []));
            }
            // IS_FOCUSED should be set before calling el.focus() to ensure that
            // FocusedContext is updated to the correct value
            IS_FOCUSED.set(editor, true);
            el.focus({
               preventScroll: true
            });
         }
      },
      getWindow: (editor) => {
         var window = EDITOR_TO_WINDOW.get(editor);
         if (!window) {
            throw new Error('Unable to find a host window element for this editor');
         }
         return window;
      },
      hasDOMNode: function hasDOMNode(editor, target) {
         var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         var { editable = false } = options;
         var editorEl = DOMEditor.toDOMNode(editor, editor);
         var targetEl;
         // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
         // target is originating from an internal "restricted" element (e.g. a
         // stepper arrow on a number input). (2018/05/04)
         // https://github.com/ianstormtaylor/slate/issues/1819
         try {
            targetEl = isDOMElement(target) ? target : target.parentElement;
         } catch (err) {
            if (
               err instanceof Error &&
               !err.message.includes('Permission denied to access property "nodeType"')
            ) {
               throw err;
            }
         }
         if (!targetEl) {
            return false;
         }
         return (
            closestShadowAware(targetEl, '[data-slate-editor]') === editorEl &&
            (!editable || targetEl.isContentEditable
               ? true
               : (typeof targetEl.isContentEditable === 'boolean' &&
                    // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
                    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
                    closestShadowAware(targetEl, '[contenteditable="false"]') === editorEl) ||
                 !!targetEl.getAttribute('data-slate-zero-width'))
         );
      },
      hasEditableTarget: (editor, target) =>
         isDOMNode(target) &&
         DOMEditor.hasDOMNode(editor, target, {
            editable: true
         }),
      hasRange: (editor, range) => {
         var { anchor, focus } = range;
         return Editor.hasPath(editor, anchor.path) && Editor.hasPath(editor, focus.path);
      },
      hasSelectableTarget: (editor, target) =>
         DOMEditor.hasEditableTarget(editor, target) ||
         DOMEditor.isTargetInsideNonReadonlyVoid(editor, target),
      hasTarget: (editor, target) => isDOMNode(target) && DOMEditor.hasDOMNode(editor, target),
      insertData: (editor, data) => {
         editor.insertData(data);
      },
      insertFragmentData: (editor, data) => editor.insertFragmentData(data),
      insertTextData: (editor, data) => editor.insertTextData(data),
      isComposing: (editor) => {
         return !!IS_COMPOSING.get(editor);
      },
      isFocused: (editor) => !!IS_FOCUSED.get(editor),
      isReadOnly: (editor) => !!IS_READ_ONLY.get(editor),
      isTargetInsideNonReadonlyVoid: (editor, target) => {
         if (IS_READ_ONLY.get(editor)) return false;
         if (!DOMEditor.hasTarget(editor, target)) return false;
         var slateNode = DOMEditor.toSlateNode(editor, target);
         return Node.isElement(slateNode) && Editor.isVoid(editor, slateNode);
      },
      setFragmentData: (editor, data, originEvent) => editor.setFragmentData(data, originEvent),
      toDOMNode: (editor, node) => {
         var _EDITOR_TO_KEY_TO_ELE;
         var domNode =
            node === editor
               ? EDITOR_TO_ELEMENT.get(editor)
               : (_EDITOR_TO_KEY_TO_ELE = EDITOR_TO_KEY_TO_ELEMENT.get(editor)) === null ||
                 _EDITOR_TO_KEY_TO_ELE === void 0
               ? void 0
               : _EDITOR_TO_KEY_TO_ELE.get(DOMEditor.findKey(editor, node));
         if (!domNode) {
            throw new Error(
               'Cannot resolve a DOM node from Slate node: '.concat(Scrubber.stringify(node))
            );
         }
         return domNode;
      },
      toDOMPoint: (editor, point) => {
         var [node] = Editor.node(editor, point.path);
         var el = DOMEditor.toDOMNode(editor, node);
         var domPoint;
         // If we're inside a void node, force the offset to 0, otherwise the zero
         // width spacing character will result in an incorrect offset of 1
         if (
            Editor.void(editor, {
               at: point
            })
         ) {
            point = {
               path: point.path,
               offset: 0
            };
         }
         // For each leaf, we need to isolate its content, which means filtering
         // to its direct text and zero-width spans. (We have to filter out any
         // other siblings that may have been rendered alongside them.)
         var selector = '[data-slate-string], [data-slate-zero-width]';
         var texts = Array.from(el.querySelectorAll(selector));
         var start = 0;
         for (var i = 0; i < texts.length; i++) {
            var text = texts[i];
            var domNode = text.childNodes[0];
            if (domNode == null || domNode.textContent == null) {
               continue;
            }
            var { length } = domNode.textContent;
            var attr = text.getAttribute('data-slate-length');
            var trueLength = attr == null ? length : parseInt(attr, 10);
            var end = start + trueLength;
            // Prefer putting the selection inside the mark placeholder to ensure
            // composed text is displayed with the correct marks.
            var nextText = texts[i + 1];
            if (
               point.offset === end &&
               nextText !== null &&
               nextText !== void 0 &&
               nextText.hasAttribute('data-slate-mark-placeholder')
            ) {
               var _nextText$textContent;
               var domText = nextText.childNodes[0];
               domPoint = [
                  // COMPAT: If we don't explicity set the dom point to be on the actual
                  // dom text element, chrome will put the selection behind the actual dom
                  // text element, causing domRange.getBoundingClientRect() calls on a collapsed
                  // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
                  // which will cause issues when scrolling to it.
                  domText instanceof DOMText ? domText : nextText,
                  (_nextText$textContent = nextText.textContent) !== null &&
                  _nextText$textContent !== void 0 &&
                  _nextText$textContent.startsWith('\uFEFF')
                     ? 1
                     : 0
               ];
               break;
            }
            if (point.offset <= end) {
               var offset = Math.min(length, Math.max(0, point.offset - start));
               domPoint = [domNode, offset];
               break;
            }
            start = end;
         }
         if (!domPoint) {
            throw new Error(
               'Cannot resolve a DOM point from Slate point: '.concat(Scrubber.stringify(point))
            );
         }
         return domPoint;
      },
      toDOMRange: (editor, range) => {
         var { anchor, focus } = range;
         var isBackward = Range.isBackward(range);
         var domAnchor = DOMEditor.toDOMPoint(editor, anchor);
         var domFocus = Range.isCollapsed(range) ? domAnchor : DOMEditor.toDOMPoint(editor, focus);
         var window = DOMEditor.getWindow(editor);
         var domRange = window.document.createRange();
         var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
         var [endNode, endOffset] = isBackward ? domAnchor : domFocus;
         // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
         // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
         // adjust the offset accordingly.
         var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
         var isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
         var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
         var isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');
         domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
         domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
         return domRange;
      },
      toSlateNode: (editor, domNode) => {
         var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
         if (domEl && !domEl.hasAttribute('data-slate-node')) {
            domEl = domEl.closest('[data-slate-node]');
         }
         var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;
         if (!node) {
            throw new Error('Cannot resolve a Slate node from DOM node: '.concat(domEl));
         }
         return node;
      },
      toSlatePoint: (editor, domPoint, options) => {
         var { exactMatch, suppressThrow } = options;
         var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
         var parentNode = nearestNode.parentNode;
         var searchDirection = options.searchDirection;
         var textNode = null;
         var offset = 0;
         if (parentNode) {
            var _domNode$textContent, _domNode$textContent2;
            var editorEl = DOMEditor.toDOMNode(editor, editor);
            var potentialVoidNode = parentNode.closest('[data-slate-void="true"]');
            // Need to ensure that the closest void node is actually a void node
            // within this editor, and not a void node within some parent editor. This can happen
            // if this editor is within a void node of another editor ("nested editors", like in
            // the "Editable Voids" example on the docs site).
            var voidNode =
               potentialVoidNode && containsShadowAware(editorEl, potentialVoidNode)
                  ? potentialVoidNode
                  : null;
            var potentialNonEditableNode = parentNode.closest('[contenteditable="false"]');
            var nonEditableNode =
               potentialNonEditableNode && containsShadowAware(editorEl, potentialNonEditableNode)
                  ? potentialNonEditableNode
                  : null;
            var leafNode = parentNode.closest('[data-slate-leaf]');
            var domNode = null;
            // Calculate how far into the text node the `nearestNode` is, so that we
            // can determine what the offset relative to the text node is.
            if (leafNode) {
               textNode = leafNode.closest('[data-slate-node="text"]');
               if (textNode) {
                  var window = DOMEditor.getWindow(editor);
                  var range = window.document.createRange();
                  range.setStart(textNode, 0);
                  range.setEnd(nearestNode, nearestOffset);
                  var contents = range.cloneContents();
                  var removals = [
                     ...Array.prototype.slice.call(
                        contents.querySelectorAll('[data-slate-zero-width]')
                     ),
                     ...Array.prototype.slice.call(
                        contents.querySelectorAll('[contenteditable=false]')
                     )
                  ];
                  removals.forEach((el) => {
                     // COMPAT: While composing at the start of a text node, some keyboards put
                     // the text content inside the zero width space.
                     if (
                        IS_ANDROID &&
                        !exactMatch &&
                        el.hasAttribute('data-slate-zero-width') &&
                        el.textContent.length > 0 &&
                        el.textContext !== '\uFEFF'
                     ) {
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
               var leafNodes = voidNode.querySelectorAll('[data-slate-leaf]');
               for (var index = 0; index < leafNodes.length; index++) {
                  var current = leafNodes[index];
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
                  domNode.querySelectorAll('[data-slate-zero-width]').forEach((el) => {
                     offset -= el.textContent.length;
                  });
               }
            } else if (nonEditableNode) {
               // Find the edge of the nearest leaf in `searchDirection`
               var getLeafNodes = (node) =>
                  node
                     ? node.querySelectorAll(
                          // Exclude leaf nodes in nested editors
                          '[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])'
                       )
                     : [];
               var elementNode = nonEditableNode.closest('[data-slate-node="element"]');
               if (searchDirection === 'backward' || !searchDirection) {
                  var _leafNodes$findLast;
                  var _leafNodes = [
                     ...getLeafNodes(
                        elementNode === null || elementNode === void 0
                           ? void 0
                           : elementNode.previousElementSibling
                     ),
                     ...getLeafNodes(elementNode)
                  ];
                  leafNode =
                     (_leafNodes$findLast = _leafNodes.findLast((leaf) =>
                        isBefore(nonEditableNode, leaf)
                     )) !== null && _leafNodes$findLast !== void 0
                        ? _leafNodes$findLast
                        : null;
                  if (leafNode) {
                     searchDirection = 'backward';
                  }
               }
               if (searchDirection === 'forward' || !searchDirection) {
                  var _leafNodes2$find;
                  var _leafNodes2 = [
                     ...getLeafNodes(elementNode),
                     ...getLeafNodes(
                        elementNode === null || elementNode === void 0
                           ? void 0
                           : elementNode.nextElementSibling
                     )
                  ];
                  leafNode =
                     (_leafNodes2$find = _leafNodes2.find((leaf) =>
                        isAfter(nonEditableNode, leaf)
                     )) !== null && _leafNodes2$find !== void 0
                        ? _leafNodes2$find
                        : null;
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
                     domNode.querySelectorAll('[data-slate-zero-width]').forEach((el) => {
                        offset -= el.textContent.length;
                     });
                  }
               }
            }
            if (
               domNode &&
               offset === domNode.textContent.length &&
               // COMPAT: Android IMEs might remove the zero width space while composing,
               // and we don't add it for line-breaks.
               IS_ANDROID &&
               domNode.getAttribute('data-slate-zero-width') === 'z' &&
               (_domNode$textContent = domNode.textContent) !== null &&
               _domNode$textContent !== void 0 &&
               _domNode$textContent.startsWith('\uFEFF') &&
               // COMPAT: If the parent node is a Slate zero-width space, editor is
               // because the text node should have no characters. However, during IME
               // composition the ASCII characters will be prepended to the zero-width
               // space, so subtract 1 from the offset to account for the zero-width
               // space character.
               (parentNode.hasAttribute('data-slate-zero-width') ||
                  // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
                  // when the document ends with a new-line character. This results in the offset
                  // length being off by one, so we need to subtract one to account for this.
                  (IS_FIREFOX &&
                     (_domNode$textContent2 = domNode.textContent) !== null &&
                     _domNode$textContent2 !== void 0 &&
                     _domNode$textContent2.endsWith('\n\n')))
            ) {
               offset--;
            }
         }
         if (IS_ANDROID && !textNode && !exactMatch) {
            var node = parentNode.hasAttribute('data-slate-node')
               ? parentNode
               : parentNode.closest('[data-slate-node]');
            if (
               node &&
               DOMEditor.hasDOMNode(editor, node, {
                  editable: true
               })
            ) {
               var _slateNode = DOMEditor.toSlateNode(editor, node);
               var nodePath;
               try {
                  nodePath = DOMEditor.findPath(editor, _slateNode);
               } catch (e) {
                  if (suppressThrow) {
                     return null;
                  }
                  throw e;
               }
               var { path: _path, offset: _offset } = Editor.start(editor, nodePath);
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
            throw new Error('Cannot resolve a Slate point from DOM point: '.concat(domPoint));
         }
         // COMPAT: If someone is clicking from one Slate editor into another,
         // the select event fires twice, once for the old editor's `element`
         // first, and then afterwards for the correct `element`. (2017/03/03)
         var slateNode = DOMEditor.toSlateNode(editor, textNode);
         var path;
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
         var _focusNode$textConten;
         var { exactMatch, suppressThrow } = options;
         var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
         var anchorNode;
         var anchorOffset;
         var focusNode;
         var focusOffset;
         var isCollapsed;
         if (el) {
            if (isDOMSelection(domRange)) {
               // COMPAT: In firefox the normal seletion way does not work
               // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
               if (IS_FIREFOX && domRange.rangeCount > 1) {
                  focusNode = domRange.focusNode; // Focus node works fine
                  var firstRange = domRange.getRangeAt(0);
                  var lastRange = domRange.getRangeAt(domRange.rangeCount - 1);
                  // Here we are in the contenteditable mode of a table in firefox
                  if (
                     focusNode instanceof HTMLTableRowElement &&
                     firstRange.startContainer instanceof HTMLTableRowElement &&
                     lastRange.startContainer instanceof HTMLTableRowElement
                  ) {
                     // HTMLElement, becouse Element is a slate element
                     function getLastChildren(element) {
                        if (element.childElementCount > 0) {
                           return getLastChildren(element.children[0]);
                        } else {
                           return element;
                        }
                     }
                     var firstNodeRow = firstRange.startContainer;
                     var lastNodeRow = lastRange.startContainer;
                     // This should never fail as "The HTMLElement interface represents any HTML element."
                     var firstNode = getLastChildren(firstNodeRow.children[firstRange.startOffset]);
                     var lastNode = getLastChildren(lastNodeRow.children[lastRange.startOffset]);
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
               if ((IS_CHROME && hasShadowRoot(anchorNode)) || IS_FIREFOX) {
                  isCollapsed =
                     domRange.anchorNode === domRange.focusNode &&
                     domRange.anchorOffset === domRange.focusOffset;
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
         if (
            anchorNode == null ||
            focusNode == null ||
            anchorOffset == null ||
            focusOffset == null
         ) {
            throw new Error('Cannot resolve a Slate range from DOM range: '.concat(domRange));
         }
         // COMPAT: Firefox sometimes includes an extra \n (rendered by TextString
         // when isTrailing is true) in the focusOffset, resulting in an invalid
         // Slate point. (2023/11/01)
         if (
            IS_FIREFOX &&
            (_focusNode$textConten = focusNode.textContent) !== null &&
            _focusNode$textConten !== void 0 &&
            _focusNode$textConten.endsWith('\n\n') &&
            focusOffset === focusNode.textContent.length
         ) {
            focusOffset--;
         }
         var anchor = DOMEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
            exactMatch,
            suppressThrow
         });
         if (!anchor) {
            return null;
         }
         var focusBeforeAnchor =
            isBefore(anchorNode, focusNode) ||
            (anchorNode === focusNode && focusOffset < anchorOffset);
         var focus = isCollapsed
            ? anchor
            : DOMEditor.toSlatePoint(editor, [focusNode, focusOffset], {
                 exactMatch,
                 suppressThrow,
                 searchDirection: focusBeforeAnchor ? 'forward' : 'backward'
              });
         if (!focus) {
            return null;
         }
         var range = {
            anchor: anchor,
            focus: focus
         };
         // if the selection is a hanging range that ends in a void
         // and the DOM focus is an Element
         // (meaning that the selection ends before the element)
         // unhang the range to avoid mistakenly including the void
         if (
            Range.isExpanded(range) &&
            Range.isForward(range) &&
            isDOMElement(focusNode) &&
            Editor.void(editor, {
               at: range.focus,
               mode: 'highest'
            })
         ) {
            range = Editor.unhangRange(editor, range, {
               voids: true
            });
         }
         return range;
      }
   };

   /**
    * Check whether a text diff was applied in a way we can perform the pending action on /
    * recover the pending selection.
    */
   function verifyDiffState(editor, textDiff) {
      var { path, diff } = textDiff;
      if (!Editor.hasPath(editor, path)) {
         return false;
      }
      var node = Node.get(editor, path);
      if (!Node.isText(node)) {
         return false;
      }
      if (diff.start !== node.text.length || diff.text.length === 0) {
         return node.text.slice(diff.start, diff.start + diff.text.length) === diff.text;
      }
      var nextPath = Path.next(path);
      if (!Editor.hasPath(editor, nextPath)) {
         return false;
      }
      var nextNode = Node.get(editor, nextPath);
      return Node.isText(nextNode) && nextNode.text.startsWith(diff.text);
   }
   function applyStringDiff(text) {
      for (
         var _len = arguments.length, diffs = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
         _key < _len;
         _key++
      ) {
         diffs[_key - 1] = arguments[_key];
      }
      return diffs.reduce(
         (text, diff) => text.slice(0, diff.start) + diff.text + text.slice(diff.end),
         text
      );
   }
   function longestCommonPrefixLength(str, another) {
      var length = Math.min(str.length, another.length);
      for (var i = 0; i < length; i++) {
         if (str.charAt(i) !== another.charAt(i)) {
            return i;
         }
      }
      return length;
   }
   function longestCommonSuffixLength(str, another, max) {
      var length = Math.min(str.length, another.length, max);
      for (var i = 0; i < length; i++) {
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
      var { start, end, text } = diff;
      var removedText = targetText.slice(start, end);
      var prefixLength = longestCommonPrefixLength(removedText, text);
      var max = Math.min(removedText.length - prefixLength, text.length - prefixLength);
      var suffixLength = longestCommonSuffixLength(removedText, text, max);
      var normalized = {
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
      var start = Math.min(a.start, b.start);
      var overlap = Math.max(0, Math.min(a.start + a.text.length, b.end) - b.start);
      var applied = applyStringDiff(targetText, a, b);
      var sliceEnd = Math.max(
         b.start + b.text.length,
         a.start + a.text.length + (a.start + a.text.length > b.start ? b.text.length : 0) - overlap
      );
      var text = applied.slice(start, sliceEnd);
      var end = Math.max(a.end, b.end - a.text.length + (a.end - a.start));
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
      var { path, diff } = textDiff;
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
      var { path, offset } = point;
      if (!Editor.hasPath(editor, path)) {
         return null;
      }
      var leaf = Node.get(editor, path);
      if (!Node.isText(leaf)) {
         return null;
      }
      var parentBlock = Editor.above(editor, {
         match: (n) => Node.isElement(n) && Editor.isBlock(editor, n),
         at: path
      });
      if (!parentBlock) {
         return null;
      }
      while (offset > leaf.text.length) {
         var entry = Editor.next(editor, {
            at: path,
            match: Node.isText
         });
         if (!entry || !Path.isDescendant(entry[1], parentBlock[1])) {
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
      var anchor = normalizePoint(editor, range.anchor);
      if (!anchor) {
         return null;
      }
      if (Range.isCollapsed(range)) {
         return {
            anchor,
            focus: anchor
         };
      }
      var focus = normalizePoint(editor, range.focus);
      if (!focus) {
         return null;
      }
      return {
         anchor,
         focus
      };
   }
   function transformPendingPoint(editor, point, op) {
      var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
      var textDiff =
         pendingDiffs === null || pendingDiffs === void 0
            ? void 0
            : pendingDiffs.find((_ref) => {
                 var { path } = _ref;
                 return Path.equals(path, point.path);
              });
      if (!textDiff || point.offset <= textDiff.diff.start) {
         return Point.transform(point, op, {
            affinity: 'backward'
         });
      }
      var { diff } = textDiff;
      // Point references location inside the diff => transform the point based on the location
      // the diff will be applied to and add the offset inside the diff.
      if (point.offset <= diff.start + diff.text.length) {
         var _anchor = {
            path: point.path,
            offset: diff.start
         };
         var _transformed = Point.transform(_anchor, op, {
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
      var anchor = {
         path: point.path,
         offset: point.offset - diff.text.length + diff.end - diff.start
      };
      var transformed = Point.transform(anchor, op, {
         affinity: 'backward'
      });
      if (!transformed) {
         return null;
      }
      if (
         op.type === 'split_node' &&
         Path.equals(op.path, point.path) &&
         anchor.offset < op.position &&
         diff.start < op.position
      ) {
         return transformed;
      }
      return {
         path: transformed.path,
         offset: transformed.offset + diff.text.length - diff.end + diff.start
      };
   }
   function transformPendingRange(editor, range, op) {
      var anchor = transformPendingPoint(editor, range.anchor, op);
      if (!anchor) {
         return null;
      }
      if (Range.isCollapsed(range)) {
         return {
            anchor,
            focus: anchor
         };
      }
      var focus = transformPendingPoint(editor, range.focus, op);
      if (!focus) {
         return null;
      }
      return {
         anchor,
         focus
      };
   }
   function transformTextDiff(textDiff, op) {
      var { path, diff, id } = textDiff;
      switch (op.type) {
         case 'insert_text': {
            if (!Path.equals(op.path, path) || op.offset >= diff.end) {
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
         case 'remove_text': {
            if (!Path.equals(op.path, path) || op.offset >= diff.end) {
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
         case 'split_node': {
            if (!Path.equals(op.path, path) || op.position >= diff.end) {
               return {
                  diff,
                  id,
                  path: Path.transform(path, op, {
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
               path: Path.transform(path, op, {
                  affinity: 'forward'
               })
            };
         }
         case 'merge_node': {
            if (!Path.equals(op.path, path)) {
               return {
                  diff,
                  id,
                  path: Path.transform(path, op)
               };
            }
            return {
               diff: {
                  start: diff.start + op.position,
                  end: diff.end + op.position,
                  text: diff.text
               },
               id,
               path: Path.transform(path, op)
            };
         }
      }
      var newPath = Path.transform(path, op);
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
   var doRectsIntersect = (rect, compareRect) => {
      var middle = (compareRect.top + compareRect.bottom) / 2;
      return rect.top <= middle && rect.bottom >= middle;
   };
   var areRangesSameLine = (editor, range1, range2) => {
      var rect1 = DOMEditor.toDOMRange(editor, range1).getBoundingClientRect();
      var rect2 = DOMEditor.toDOMRange(editor, range2).getBoundingClientRect();
      return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
   };
   /**
    * A helper utility that returns the end portion of a `Range`
    * which is located on a single line.
    *
    * @param {Editor} editor The editor object to compare against
    * @param {Range} parentRange The parent range to compare against
    * @returns {Range} A valid portion of the parentRange which is one a single line
    */
   var findCurrentLineRange = (editor, parentRange) => {
      var parentRangeBoundary = Editor.range(editor, Range.end(parentRange));
      var positions = Array.from(
         Editor.positions(editor, {
            at: parentRange
         })
      );
      var left = 0;
      var right = positions.length;
      var middle = Math.floor(right / 2);
      if (areRangesSameLine(editor, Editor.range(editor, positions[left]), parentRangeBoundary)) {
         return Editor.range(editor, positions[left], parentRangeBoundary);
      }
      if (positions.length < 2) {
         return Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
      }
      while (middle !== positions.length && middle !== left) {
         if (
            areRangesSameLine(editor, Editor.range(editor, positions[middle]), parentRangeBoundary)
         ) {
            right = middle;
         } else {
            left = middle;
         }
         middle = Math.floor((left + right) / 2);
      }
      return Editor.range(editor, positions[left], parentRangeBoundary);
   };

   function ownKeys$1$1(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$1$1(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$1$1(Object(t), true).forEach(function (r) {
                 _defineProperty(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$1$1(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   /**
    * `withDOM` adds DOM specific behaviors to the editor.
    *
    * If you are using TypeScript, you must extend Slate's CustomTypes to use
    * this plugin.
    *
    * See https://docs.slatejs.org/concepts/11-typescript to learn how.
    */
   var withDOM = function withDOM(editor) {
      var clipboardFormatKey =
         arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x-slate-fragment';
      var e = editor;
      var { apply, onChange, deleteBackward, addMark, removeMark } = e;
      // The WeakMap which maps a key to a specific HTMLElement must be scoped to the editor instance to
      // avoid collisions between editors in the DOM that share the same value.
      EDITOR_TO_KEY_TO_ELEMENT.set(e, new WeakMap());
      e.addMark = (key, value) => {
         var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI;
         (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e)) === null ||
            _EDITOR_TO_SCHEDULE_F === void 0 ||
            _EDITOR_TO_SCHEDULE_F();
         if (
            !EDITOR_TO_PENDING_INSERTION_MARKS.get(e) &&
            (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(e)) !== null &&
            _EDITOR_TO_PENDING_DI !== void 0 &&
            _EDITOR_TO_PENDING_DI.length
         ) {
            // Ensure the current pending diffs originating from changes before the addMark
            // are applied with the current formatting
            EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
         }
         EDITOR_TO_USER_MARKS.delete(e);
         addMark(key, value);
      };
      e.removeMark = (key) => {
         var _EDITOR_TO_PENDING_DI2;
         if (
            !EDITOR_TO_PENDING_INSERTION_MARKS.get(e) &&
            (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e)) !== null &&
            _EDITOR_TO_PENDING_DI2 !== void 0 &&
            _EDITOR_TO_PENDING_DI2.length
         ) {
            // Ensure the current pending diffs originating from changes before the addMark
            // are applied with the current formatting
            EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
         }
         EDITOR_TO_USER_MARKS.delete(e);
         removeMark(key);
      };
      e.deleteBackward = (unit) => {
         if (unit !== 'line') {
            return deleteBackward(unit);
         }
         if (e.selection && Range.isCollapsed(e.selection)) {
            var parentBlockEntry = Editor.above(e, {
               match: (n) => Node.isElement(n) && Editor.isBlock(e, n),
               at: e.selection
            });
            if (parentBlockEntry) {
               var [, parentBlockPath] = parentBlockEntry;
               var parentElementRange = Editor.range(e, parentBlockPath, e.selection.anchor);
               var currentLineRange = findCurrentLineRange(e, parentElementRange);
               if (!Range.isCollapsed(currentLineRange)) {
                  Transforms.delete(e, {
                     at: currentLineRange
                  });
               }
            }
         }
      };
      // This attempts to reset the NODE_TO_KEY entry to the correct value
      // as apply() changes the object reference and hence invalidates the NODE_TO_KEY entry
      e.apply = (op) => {
         var matches = [];
         var pathRefMatches = [];
         var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e);
         if (pendingDiffs !== null && pendingDiffs !== void 0 && pendingDiffs.length) {
            var transformed = pendingDiffs
               .map((textDiff) => transformTextDiff(textDiff, op))
               .filter(Boolean);
            EDITOR_TO_PENDING_DIFFS.set(e, transformed);
         }
         var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e);
         if (pendingSelection) {
            EDITOR_TO_PENDING_SELECTION.set(e, transformPendingRange(e, pendingSelection, op));
         }
         var pendingAction = EDITOR_TO_PENDING_ACTION.get(e);
         if (pendingAction !== null && pendingAction !== void 0 && pendingAction.at) {
            var at = Location.isPoint(
               pendingAction === null || pendingAction === void 0 ? void 0 : pendingAction.at
            )
               ? transformPendingPoint(e, pendingAction.at, op)
               : transformPendingRange(e, pendingAction.at, op);
            EDITOR_TO_PENDING_ACTION.set(
               e,
               at
                  ? _objectSpread$1$1(
                       _objectSpread$1$1({}, pendingAction),
                       {},
                       {
                          at
                       }
                    )
                  : null
            );
         }
         switch (op.type) {
            case 'insert_text':
            case 'remove_text':
            case 'set_node':
            case 'split_node': {
               matches.push(...getMatches(e, op.path));
               break;
            }
            case 'set_selection': {
               var _EDITOR_TO_USER_SELEC;
               // Selection was manually set, don't restore the user selection after the change.
               (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(e)) === null ||
                  _EDITOR_TO_USER_SELEC === void 0 ||
                  _EDITOR_TO_USER_SELEC.unref();
               EDITOR_TO_USER_SELECTION.delete(e);
               break;
            }
            case 'insert_node':
            case 'remove_node': {
               matches.push(...getMatches(e, Path.parent(op.path)));
               break;
            }
            case 'merge_node': {
               var prevPath = Path.previous(op.path);
               matches.push(...getMatches(e, prevPath));
               break;
            }
            case 'move_node': {
               var commonPath = Path.common(Path.parent(op.path), Path.parent(op.newPath));
               matches.push(...getMatches(e, commonPath));
               var changedPath;
               if (Path.isBefore(op.path, op.newPath)) {
                  matches.push(...getMatches(e, Path.parent(op.path)));
                  changedPath = op.newPath;
               } else {
                  matches.push(...getMatches(e, Path.parent(op.newPath)));
                  changedPath = op.path;
               }
               var changedNode = Node.get(editor, Path.parent(changedPath));
               var changedNodeKey = DOMEditor.findKey(e, changedNode);
               var changedPathRef = Editor.pathRef(e, Path.parent(changedPath));
               pathRefMatches.push([changedPathRef, changedNodeKey]);
               break;
            }
         }
         apply(op);
         // ПРОПАТЧЕНО: есть проверка в onDOMSelectionChange на то что эдитор IS_NODE_MAP_DIRTY = true
         // эта штука явно что-то оптимизирует, но мы не знаем что.
         // но зато она ломает selection в нектоторых случаях
         // switch (op.type) {
         //    case 'insert_node':
         //    case 'remove_node':
         //    case 'merge_node':
         //    case 'move_node':
         //    case 'split_node':
         //    case 'insert_text':
         //    case 'remove_text':
         //    case 'set_selection': {
         //       // FIXME: Rename to something like IS_DOM_EDITOR_DESYNCED
         //       // to better reflect reality, see #5792
         //       IS_NODE_MAP_DIRTY.set(e, true);
         //    }
         // }
         for (var [path, key] of matches) {
            var [node] = Editor.node(e, path);
            NODE_TO_KEY.set(node, key);
         }
         for (var [pathRef, _key] of pathRefMatches) {
            if (pathRef.current) {
               var [_node] = Editor.node(e, pathRef.current);
               NODE_TO_KEY.set(_node, _key);
            }
            pathRef.unref();
         }
      };
      e.setFragmentData = (data) => {
         var { selection } = e;
         if (!selection) {
            return;
         }
         var [start, end] = Range.edges(selection);
         var startVoid = Editor.void(e, {
            at: start.path
         });
         var endVoid = Editor.void(e, {
            at: end.path
         });
         if (Range.isCollapsed(selection) && !startVoid) {
            return;
         }
         // Create a fake selection so that we can add a Base64-encoded copy of the
         // fragment to the HTML, to decode on future pastes.
         var domRange = DOMEditor.toDOMRange(e, selection);
         var contents = domRange.cloneContents();
         var attach = contents.childNodes[0];
         // Make sure attach is non-empty, since empty nodes will not get copied.
         contents.childNodes.forEach((node) => {
            if (node.textContent && node.textContent.trim() !== '') {
               attach = node;
            }
         });
         // COMPAT: If the end node is a void node, we need to move the end of the
         // range from the void node's spacer span, to the end of the void node's
         // content, since the spacer is before void's content in the DOM.
         if (endVoid) {
            var [voidNode] = endVoid;
            var r = domRange.cloneRange();
            var domNode = DOMEditor.toDOMNode(e, voidNode);
            r.setEndAfter(domNode);
            contents = r.cloneContents();
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
         Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach((zw) => {
            var isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
            zw.textContent = isNewline ? '\n' : '';
         });
         // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
         // in the HTML, and can be used for intra-Slate pasting. If it's a text
         // node, wrap it in a `<span>` so we have something to set an attribute on.
         if (isDOMText(attach)) {
            var span = attach.ownerDocument.createElement('span');
            // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
            // then leading and trailing spaces will be ignored. (2017/09/21)
            span.style.whiteSpace = 'pre';
            span.appendChild(attach);
            contents.appendChild(span);
            attach = span;
         }
         var fragment = e.getFragment();
         var string = JSON.stringify(fragment);
         var encoded = window.btoa(encodeURIComponent(string));
         attach.setAttribute('data-slate-fragment', encoded);
         data.setData('application/'.concat(clipboardFormatKey), encoded);
         // Add the content to a <div> so that we can get its inner HTML.
         var div = contents.ownerDocument.createElement('div');
         div.appendChild(contents);
         div.setAttribute('hidden', 'true');
         contents.ownerDocument.body.appendChild(div);
         data.setData('text/html', div.innerHTML);
         data.setData('text/plain', getPlainText(div));
         contents.ownerDocument.body.removeChild(div);
         return data;
      };
      e.insertData = (data) => {
         if (!e.insertFragmentData(data)) {
            e.insertTextData(data);
         }
      };
      e.insertFragmentData = (data) => {
         /**
          * Checking copied fragment from application/x-slate-fragment or data-slate-fragment
          */
         var fragment =
            data.getData('application/'.concat(clipboardFormatKey)) ||
            getSlateFragmentAttribute(data);
         if (fragment) {
            var decoded = decodeURIComponent(window.atob(fragment));
            var parsed = JSON.parse(decoded);
            e.insertFragment(parsed);
            return true;
         }
         return false;
      };
      e.insertTextData = (data) => {
         var text = data.getData('text/plain');
         if (text) {
            var lines = text.split(/\r\n|\r|\n/);
            var split = false;
            for (var line of lines) {
               if (split) {
                  Transforms.splitNodes(e, {
                     always: true
                  });
               }
               e.insertText(line);
               split = true;
            }
            return true;
         }
         return false;
      };
      e.onChange = (options) => {
         var onContextChange = EDITOR_TO_ON_CHANGE.get(e);
         if (onContextChange) {
            onContextChange(options);
         }
         onChange(options);
      };
      return e;
   };
   var getMatches = (e, path) => {
      var matches = [];
      for (var [n, p] of Editor.levels(e, {
         at: path
      })) {
         var key = DOMEditor.findKey(e, n);
         matches.push([p, key]);
      }
      return matches;
   };

   var TRIPLE_CLICK = 3;

   /**
    * Hotkey mappings for each platform.
    */
   var HOTKEYS = {
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
   var APPLE_HOTKEYS = {
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
   var WINDOWS_HOTKEYS = {
      deleteWordBackward: 'ctrl+shift?+backspace',
      deleteWordForward: 'ctrl+shift?+delete',
      redo: ['ctrl+y', 'ctrl+shift+z']
   };
   /**
    * Create a platform-aware hotkey checker.
    */
   var create = (key) => {
      var generic = HOTKEYS[key];
      var apple = APPLE_HOTKEYS[key];
      var windows = WINDOWS_HOTKEYS[key];
      var isGeneric = generic && lib_1(generic);
      var isApple = apple && lib_1(apple);
      var isWindows = windows && lib_1(windows);
      return (event) => {
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

   function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
         key = sourceKeys[i];
         if (excluded.indexOf(key) >= 0) continue;
         target[key] = source[key];
      }
      return target;
   }

   function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
         var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
         for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
         }
      }
      return target;
   }

   var _excluded$3 = ['anchor', 'focus'],
      _excluded2$1 = ['anchor', 'focus'];
   function ownKeys$9(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$9(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$9(Object(t), true).forEach(function (r) {
                 _defineProperty(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$9(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var shallowCompare = (obj1, obj2) =>
      Object.keys(obj1).length === Object.keys(obj2).length &&
      Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
   var isDecorationFlagsEqual = (range, other) => {
      var { anchor: rangeAnchor, focus: rangeFocus } = range,
         rangeOwnProps = _objectWithoutProperties(range, _excluded$3);
      var { anchor: otherAnchor, focus: otherFocus } = other,
         otherOwnProps = _objectWithoutProperties(other, _excluded2$1);
      return (
         range[PLACEHOLDER_SYMBOL] === other[PLACEHOLDER_SYMBOL] &&
         shallowCompare(rangeOwnProps, otherOwnProps)
      );
   };
   /**
    * Check if a list of decorator ranges are equal to another.
    *
    * PERF: this requires the two lists to also have the ranges inside them in the
    * same order, but this is an okay constraint for us since decorations are
    * kept in order, and the odd case where they aren't is okay to re-render for.
    */
   var isElementDecorationsEqual = (list, another) => {
      if (list === another) {
         return true;
      }
      if (!list || !another) {
         return false;
      }
      if (list.length !== another.length) {
         return false;
      }
      for (var i = 0; i < list.length; i++) {
         var range = list[i];
         var other = another[i];
         if (!Range.equals(range, other) || !isDecorationFlagsEqual(range, other)) {
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
   var isTextDecorationsEqual = (list, another) => {
      if (list === another) {
         return true;
      }
      if (!list || !another) {
         return false;
      }
      if (list.length !== another.length) {
         return false;
      }
      for (var i = 0; i < list.length; i++) {
         var range = list[i];
         var other = another[i];
         // compare only offsets because paths doesn't matter for text
         if (
            range.anchor.offset !== other.anchor.offset ||
            range.focus.offset !== other.focus.offset ||
            !isDecorationFlagsEqual(range, other)
         ) {
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
   var splitDecorationsByChild = (editor, node, decorations) => {
      var decorationsByChild = Array.from(node.children, () => []);
      if (decorations.length === 0) {
         return decorationsByChild;
      }
      var path = DOMEditor.findPath(editor, node);
      var level = path.length;
      var ancestorRange = Editor.range(editor, path);
      var cachedChildRanges = new Array(node.children.length);
      var getChildRange = (index) => {
         var cachedRange = cachedChildRanges[index];
         if (cachedRange) return cachedRange;
         var childRange = Editor.range(editor, [...path, index]);
         cachedChildRanges[index] = childRange;
         return childRange;
      };
      for (var decoration of decorations) {
         var decorationRange = Range.intersection(ancestorRange, decoration);
         if (!decorationRange) continue;
         var [startPoint, endPoint] = Range.edges(decorationRange);
         var startIndex = startPoint.path[level];
         var endIndex = endPoint.path[level];
         for (var i = startIndex; i <= endIndex; i++) {
            var ds = decorationsByChild[i];
            if (!ds) continue;
            var childRange = getChildRange(i);
            var childDecorationRange = Range.intersection(childRange, decoration);
            if (!childDecorationRange) continue;
            ds.push(_objectSpread$9(_objectSpread$9({}, decoration), childDecorationRange));
         }
      }
      return decorationsByChild;
   };

   // eslint-disable-next-line no-redeclare
   var ReactEditor = DOMEditor;

   function ownKeys$8(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$8(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$8(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$8(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   // https://github.com/facebook/draft-js/blob/main/src/component/handlers/composition/DraftEditorCompositionHandler.js#L41
   // When using keyboard English association function, conpositionEnd triggered too fast, resulting in after `insertText` still maintain association state.
   var RESOLVE_DELAY = 25;
   // Time with no user interaction before the current user action is considered as done.
   var FLUSH_DELAY = 200;
   // Replace with `const debug = console.log` to debug
   var debug = function debug() {};
   // Type guard to check if a value is a DataTransfer
   var isDataTransfer = function isDataTransfer(value) {
      return (
         (value === null || value === void 0 ? void 0 : value.constructor.name) === 'DataTransfer'
      );
   };
   function createAndroidInputManager(_ref) {
      var editor = _ref.editor,
         scheduleOnDOMSelectionChange = _ref.scheduleOnDOMSelectionChange,
         onDOMSelectionChange = _ref.onDOMSelectionChange;
      var flushing = false;
      var compositionEndTimeoutId = null;
      var flushTimeoutId = null;
      var actionTimeoutId = null;
      var idCounter = 0;
      var insertPositionHint = false;
      var applyPendingSelection = function applyPendingSelection() {
         var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(editor);
         EDITOR_TO_PENDING_SELECTION['delete'](editor);
         if (pendingSelection) {
            var selection = editor.selection;
            var normalized = normalizeRange(editor, pendingSelection);
            if (normalized && (!selection || !Range.equals(normalized, selection))) {
               Transforms.select(editor, normalized);
            }
         }
      };
      var performAction = function performAction() {
         var action = EDITOR_TO_PENDING_ACTION.get(editor);
         EDITOR_TO_PENDING_ACTION['delete'](editor);
         if (!action) {
            return;
         }
         if (action.at) {
            var target = Location.isPoint(action.at)
               ? normalizePoint(editor, action.at)
               : normalizeRange(editor, action.at);
            if (!target) {
               return;
            }
            var _targetRange = Editor.range(editor, target);
            if (!editor.selection || !Range.equals(editor.selection, _targetRange)) {
               Transforms.select(editor, target);
            }
         }
         action.run();
      };
      var flush = function flush() {
         if (flushTimeoutId) {
            clearTimeout(flushTimeoutId);
            flushTimeoutId = null;
         }
         if (actionTimeoutId) {
            clearTimeout(actionTimeoutId);
            actionTimeoutId = null;
         }
         if (!hasPendingDiffs() && !hasPendingAction()) {
            applyPendingSelection();
            return;
         }
         if (!flushing) {
            flushing = true;
            setTimeout(function () {
               return (flushing = false);
            });
         }
         if (hasPendingAction()) {
            flushing = 'action';
         }
         var selectionRef =
            editor.selection &&
            Editor.rangeRef(editor, editor.selection, {
               affinity: 'forward'
            });
         EDITOR_TO_USER_MARKS.set(editor, editor.marks);
         debug('flush', EDITOR_TO_PENDING_ACTION.get(editor), EDITOR_TO_PENDING_DIFFS.get(editor));
         var scheduleSelectionChange = hasPendingDiffs();
         var diff;
         while (
            (diff =
               (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(editor)) === null ||
               _EDITOR_TO_PENDING_DI === void 0
                  ? void 0
                  : _EDITOR_TO_PENDING_DI[0])
         ) {
            var _EDITOR_TO_PENDING_DI, _EDITOR_TO_PENDING_DI2;
            var pendingMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
            if (pendingMarks !== undefined) {
               EDITOR_TO_PENDING_INSERTION_MARKS['delete'](editor);
               editor.marks = pendingMarks;
            }
            if (pendingMarks && insertPositionHint === false) {
               insertPositionHint = null;
            }
            var range = targetRange(diff);
            if (!editor.selection || !Range.equals(editor.selection, range)) {
               Transforms.select(editor, range);
            }
            if (diff.diff.text) {
               Editor.insertText(editor, diff.diff.text);
            } else {
               Editor.deleteFragment(editor);
            }
            // Remove diff only after we have applied it to account for it when transforming
            // pending ranges.
            EDITOR_TO_PENDING_DIFFS.set(
               editor,
               (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null ||
                  _EDITOR_TO_PENDING_DI2 === void 0
                  ? void 0
                  : _EDITOR_TO_PENDING_DI2.filter(function (_ref2) {
                       var id = _ref2.id;
                       return id !== diff.id;
                    })
            );
            if (!verifyDiffState(editor, diff)) {
               scheduleSelectionChange = false;
               EDITOR_TO_PENDING_ACTION['delete'](editor);
               EDITOR_TO_USER_MARKS['delete'](editor);
               flushing = 'action';
               // Ensure we don't restore the pending user (dom) selection
               // since the document and dom state do not match.
               EDITOR_TO_PENDING_SELECTION['delete'](editor);
               scheduleOnDOMSelectionChange.cancel();
               onDOMSelectionChange.cancel();
               selectionRef === null || selectionRef === void 0 || selectionRef.unref();
            }
         }
         var selection =
            selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
         if (
            selection &&
            !EDITOR_TO_PENDING_SELECTION.get(editor) &&
            (!editor.selection || !Range.equals(selection, editor.selection))
         ) {
            Transforms.select(editor, selection);
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
         var userMarks = EDITOR_TO_USER_MARKS.get(editor);
         EDITOR_TO_USER_MARKS['delete'](editor);
         if (userMarks !== undefined) {
            editor.marks = userMarks;
            editor.onChange();
         }
      };
      var handleCompositionEnd = function handleCompositionEnd(_event) {
         if (compositionEndTimeoutId) {
            clearTimeout(compositionEndTimeoutId);
         }
         compositionEndTimeoutId = setTimeout(function () {
            IS_COMPOSING.set(editor, false);
            flush();
         }, RESOLVE_DELAY);
      };
      var handleCompositionStart = function handleCompositionStart(_event) {
         IS_COMPOSING.set(editor, true);
         if (compositionEndTimeoutId) {
            clearTimeout(compositionEndTimeoutId);
            compositionEndTimeoutId = null;
         }
      };
      var updatePlaceholderVisibility = function updatePlaceholderVisibility() {
         var forceHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
         var placeholderElement = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);
         if (!placeholderElement) {
            return;
         }
         if (hasPendingDiffs() || forceHide) {
            placeholderElement.style.display = 'none';
            return;
         }
         placeholderElement.style.removeProperty('display');
      };
      var storeDiff = function storeDiff(path, diff) {
         var _EDITOR_TO_PENDING_DI3;
         var pendingDiffs =
            (_EDITOR_TO_PENDING_DI3 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null &&
            _EDITOR_TO_PENDING_DI3 !== void 0
               ? _EDITOR_TO_PENDING_DI3
               : [];
         EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
         var target = Node.leaf(editor, path);
         var idx = pendingDiffs.findIndex(function (change) {
            return Path.equals(change.path, path);
         });
         if (idx < 0) {
            var normalized = normalizeStringDiff(target.text, diff);
            if (normalized) {
               pendingDiffs.push({
                  path: path,
                  diff: diff,
                  id: idCounter++
               });
            }
            updatePlaceholderVisibility();
            return;
         }
         var merged = mergeStringDiffs(target.text, pendingDiffs[idx].diff, diff);
         if (!merged) {
            pendingDiffs.splice(idx, 1);
            updatePlaceholderVisibility();
            return;
         }
         pendingDiffs[idx] = _objectSpread$8(
            _objectSpread$8({}, pendingDiffs[idx]),
            {},
            {
               diff: merged
            }
         );
      };
      var scheduleAction = function scheduleAction(run) {
         var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            at = _ref3.at;
         insertPositionHint = false;
         EDITOR_TO_PENDING_SELECTION['delete'](editor);
         scheduleOnDOMSelectionChange.cancel();
         onDOMSelectionChange.cancel();
         if (hasPendingAction()) {
            flush();
         }
         EDITOR_TO_PENDING_ACTION.set(editor, {
            at: at,
            run: run
         });
         // COMPAT: When deleting before a non-contenteditable element chrome only fires a beforeinput,
         // (no input) and doesn't perform any dom mutations. Without a flush timeout we would never flush
         // in this case and thus never actually perform the action.
         actionTimeoutId = setTimeout(flush);
      };
      var handleDOMBeforeInput = function handleDOMBeforeInput(event) {
         var _targetRange2;
         if (flushTimeoutId) {
            clearTimeout(flushTimeoutId);
            flushTimeoutId = null;
         }
         if (IS_NODE_MAP_DIRTY.get(editor)) {
            return;
         }
         var type = event.inputType;
         var targetRange = null;
         var data = event.dataTransfer || event.data || undefined;
         if (
            insertPositionHint !== false &&
            type !== 'insertText' &&
            type !== 'insertCompositionText'
         ) {
            insertPositionHint = false;
         }
         var _event$getTargetRange = event.getTargetRanges(),
            _event$getTargetRange2 = _slicedToArray(_event$getTargetRange, 1),
            nativeTargetRange = _event$getTargetRange2[0];
         if (nativeTargetRange) {
            targetRange = ReactEditor.toSlateRange(editor, nativeTargetRange, {
               exactMatch: false,
               suppressThrow: true
            });
         }
         // COMPAT: SelectionChange event is fired after the action is performed, so we
         // have to manually get the selection here to ensure it's up-to-date.
         var window = ReactEditor.getWindow(editor);
         var domSelection = window.getSelection();
         if (!targetRange && domSelection) {
            nativeTargetRange = domSelection;
            targetRange = ReactEditor.toSlateRange(editor, domSelection, {
               exactMatch: false,
               suppressThrow: true
            });
         }
         targetRange =
            (_targetRange2 = targetRange) !== null && _targetRange2 !== void 0
               ? _targetRange2
               : editor.selection;
         if (!targetRange) {
            return;
         }
         // By default, the input manager tries to store text diffs so that we can
         // defer flushing them at a later point in time. We don't want to flush
         // for every input event as this can be expensive. However, there are some
         // scenarios where we cannot safely store the text diff and must instead
         // schedule an action to let Slate normalize the editor state.
         var canStoreDiff = true;
         if (type.startsWith('delete')) {
            var direction = type.endsWith('Backward') ? 'backward' : 'forward';
            var _Range$edges = Range.edges(targetRange),
               _Range$edges2 = _slicedToArray(_Range$edges, 2),
               start = _Range$edges2[0],
               end = _Range$edges2[1];
            var _Editor$leaf = Editor.leaf(editor, start.path),
               _Editor$leaf2 = _slicedToArray(_Editor$leaf, 2),
               leaf = _Editor$leaf2[0],
               path = _Editor$leaf2[1];
            if (Range.isExpanded(targetRange)) {
               if (leaf.text.length === start.offset && end.offset === 0) {
                  var next = Editor.next(editor, {
                     at: start.path,
                     match: Node.isText
                  });
                  if (next && Path.equals(next[1], end.path)) {
                     // when deleting a linebreak, targetRange will span across the break (ie start in the node before and end in the node after)
                     // if the node before is empty, this will look like a hanging range and get unhung later--which will take the break we want to remove out of the range
                     // so to avoid this we collapse the target range to default to single character deletion
                     if (direction === 'backward') {
                        targetRange = {
                           anchor: end,
                           focus: end
                        };
                        start = end;
                        var _next = _slicedToArray(next, 2);
                        leaf = _next[0];
                        path = _next[1];
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
            var diff = {
               text: '',
               start: start.offset,
               end: end.offset
            };
            var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
            var relevantPendingDiffs =
               pendingDiffs === null || pendingDiffs === void 0
                  ? void 0
                  : pendingDiffs.find(function (change) {
                       return Path.equals(change.path, path);
                    });
            var diffs = relevantPendingDiffs ? [relevantPendingDiffs.diff, diff] : [diff];
            var text = applyStringDiff.apply(void 0, [leaf.text].concat(diffs));
            if (text.length === 0) {
               // Text leaf will be removed, so we need to schedule an
               // action to remove it so that Slate can normalize instead
               // of storing as a diff
               canStoreDiff = false;
            }
            if (Range.isExpanded(targetRange)) {
               if (canStoreDiff && Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
                  var point = {
                     path: targetRange.anchor.path,
                     offset: start.offset
                  };
                  var range = Editor.range(editor, point, point);
                  handleUserSelect(range);
                  return storeDiff(targetRange.anchor.path, {
                     text: '',
                     end: end.offset,
                     start: start.offset
                  });
               }
               return scheduleAction(
                  function () {
                     return Editor.deleteFragment(editor, {
                        direction: direction
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
         }
         switch (type) {
            case 'deleteByComposition':
            case 'deleteByCut':
            case 'deleteByDrag': {
               return scheduleAction(
                  function () {
                     return Editor.deleteFragment(editor);
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteContent':
            case 'deleteContentForward': {
               var _targetRange3 = targetRange,
                  anchor = _targetRange3.anchor;
               if (canStoreDiff && Range.isCollapsed(targetRange)) {
                  var targetNode = Node.leaf(editor, anchor.path);
                  if (anchor.offset < targetNode.text.length) {
                     return storeDiff(anchor.path, {
                        text: '',
                        start: anchor.offset,
                        end: anchor.offset + 1
                     });
                  }
               }
               return scheduleAction(
                  function () {
                     return Editor.deleteForward(editor);
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteContentBackward': {
               var _nativeTargetRange;
               var _targetRange4 = targetRange,
                  _anchor = _targetRange4.anchor;
               // If we have a mismatch between the native and slate selection being collapsed
               // we are most likely deleting a zero-width placeholder and thus should perform it
               // as an action to ensure correct behavior (mostly happens with mark placeholders)
               var nativeCollapsed = isDOMSelection(nativeTargetRange)
                  ? nativeTargetRange.isCollapsed
                  : !!(
                       (_nativeTargetRange = nativeTargetRange) !== null &&
                       _nativeTargetRange !== void 0 &&
                       _nativeTargetRange.collapsed
                    );
               if (
                  canStoreDiff &&
                  nativeCollapsed &&
                  Range.isCollapsed(targetRange) &&
                  _anchor.offset > 0
               ) {
                  return storeDiff(_anchor.path, {
                     text: '',
                     start: _anchor.offset - 1,
                     end: _anchor.offset
                  });
               }
               return scheduleAction(
                  function () {
                     return Editor.deleteBackward(editor);
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteEntireSoftLine': {
               return scheduleAction(
                  function () {
                     Editor.deleteBackward(editor, {
                        unit: 'line'
                     });
                     Editor.deleteForward(editor, {
                        unit: 'line'
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteHardLineBackward': {
               return scheduleAction(
                  function () {
                     return Editor.deleteBackward(editor, {
                        unit: 'block'
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteSoftLineBackward': {
               return scheduleAction(
                  function () {
                     return Editor.deleteBackward(editor, {
                        unit: 'line'
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteHardLineForward': {
               return scheduleAction(
                  function () {
                     return Editor.deleteForward(editor, {
                        unit: 'block'
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteSoftLineForward': {
               return scheduleAction(
                  function () {
                     return Editor.deleteForward(editor, {
                        unit: 'line'
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteWordBackward': {
               return scheduleAction(
                  function () {
                     return Editor.deleteBackward(editor, {
                        unit: 'word'
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'deleteWordForward': {
               return scheduleAction(
                  function () {
                     return Editor.deleteForward(editor, {
                        unit: 'word'
                     });
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'insertLineBreak': {
               return scheduleAction(
                  function () {
                     return Editor.insertSoftBreak(editor);
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'insertParagraph': {
               return scheduleAction(
                  function () {
                     return Editor.insertBreak(editor);
                  },
                  {
                     at: targetRange
                  }
               );
            }
            case 'insertCompositionText':
            case 'deleteCompositionText':
            case 'insertFromComposition':
            case 'insertFromDrop':
            case 'insertFromPaste':
            case 'insertFromYank':
            case 'insertReplacementText':
            case 'insertText': {
               if (isDataTransfer(data)) {
                  return scheduleAction(
                     function () {
                        return ReactEditor.insertData(editor, data);
                     },
                     {
                        at: targetRange
                     }
                  );
               }
               var _text = data !== null && data !== void 0 ? data : '';
               // COMPAT: If we are writing inside a placeholder, the ime inserts the text inside
               // the placeholder itself and thus includes the zero-width space inside edit events.
               if (EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
                  _text = _text.replace('\uFEFF', '');
               }
               // Pastes from the Android clipboard will generate `insertText` events.
               // If the copied text contains any newlines, Android will append an
               // extra newline to the end of the copied text.
               if (type === 'insertText' && /.*\n.*\n$/.test(_text)) {
                  _text = _text.slice(0, -1);
               }
               // If the text includes a newline, split it at newlines and paste each component
               // string, with soft breaks in between each.
               if (_text.includes('\n')) {
                  return scheduleAction(
                     function () {
                        var parts = _text.split('\n');
                        parts.forEach(function (line, i) {
                           if (line) {
                              Editor.insertText(editor, line);
                           }
                           if (i !== parts.length - 1) {
                              Editor.insertSoftBreak(editor);
                           }
                        });
                     },
                     {
                        at: targetRange
                     }
                  );
               }
               if (Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
                  var _Range$edges3 = Range.edges(targetRange),
                     _Range$edges4 = _slicedToArray(_Range$edges3, 2),
                     _start = _Range$edges4[0],
                     _end = _Range$edges4[1];
                  var _diff = {
                     start: _start.offset,
                     end: _end.offset,
                     text: _text
                  };
                  // COMPAT: Swiftkey has a weird bug where the target range of the 2nd word
                  // inserted after a mark placeholder is inserted with an anchor offset off by 1.
                  // So writing 'some text' will result in 'some ttext'. Luckily all 'normal' insert
                  // text events are fired with the correct target ranges, only the final 'insertComposition'
                  // isn't, so we can adjust the target range start offset if we are confident this is the
                  // swiftkey insert causing the issue.
                  if (_text && insertPositionHint && type === 'insertCompositionText') {
                     var hintPosition =
                        insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
                     var diffPosition = _diff.start + _diff.text.search(/\S|$/);
                     if (
                        diffPosition === hintPosition + 1 &&
                        _diff.end === insertPositionHint.start + insertPositionHint.text.length
                     ) {
                        _diff.start -= 1;
                        insertPositionHint = null;
                        scheduleFlush();
                     } else {
                        insertPositionHint = false;
                     }
                  } else if (type === 'insertText') {
                     if (insertPositionHint === null) {
                        insertPositionHint = _diff;
                     } else if (
                        insertPositionHint &&
                        Range.isCollapsed(targetRange) &&
                        insertPositionHint.end + insertPositionHint.text.length === _start.offset
                     ) {
                        insertPositionHint = _objectSpread$8(
                           _objectSpread$8({}, insertPositionHint),
                           {},
                           {
                              text: insertPositionHint.text + _text
                           }
                        );
                     } else {
                        insertPositionHint = false;
                     }
                  } else {
                     insertPositionHint = false;
                  }
                  if (canStoreDiff) {
                     var currentSelection = editor.selection;
                     storeDiff(_start.path, _diff);
                     if (currentSelection) {
                        var newPoint = {
                           path: _start.path,
                           offset: _start.offset + _text.length
                        };
                        scheduleAction(
                           function () {
                              Transforms.select(editor, {
                                 anchor: newPoint,
                                 focus: newPoint
                              });
                           },
                           {
                              at: newPoint
                           }
                        );
                     }
                     return;
                  }
               }
               return scheduleAction(
                  function () {
                     return Editor.insertText(editor, _text);
                  },
                  {
                     at: targetRange
                  }
               );
            }
         }
      };
      var hasPendingAction = function hasPendingAction() {
         return !!EDITOR_TO_PENDING_ACTION.get(editor);
      };
      var hasPendingDiffs = function hasPendingDiffs() {
         var _EDITOR_TO_PENDING_DI4;
         return !!(
            (_EDITOR_TO_PENDING_DI4 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null &&
            _EDITOR_TO_PENDING_DI4 !== void 0 &&
            _EDITOR_TO_PENDING_DI4.length
         );
      };
      var hasPendingChanges = function hasPendingChanges() {
         return hasPendingAction() || hasPendingDiffs();
      };
      var isFlushing = function isFlushing() {
         return flushing;
      };
      var handleUserSelect = function handleUserSelect(range) {
         EDITOR_TO_PENDING_SELECTION.set(editor, range);
         if (flushTimeoutId) {
            clearTimeout(flushTimeoutId);
            flushTimeoutId = null;
         }
         var selection = editor.selection;
         if (!range) {
            return;
         }
         var pathChanged = !selection || !Path.equals(selection.anchor.path, range.anchor.path);
         var parentPathChanged =
            !selection ||
            !Path.equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));
         if ((pathChanged && insertPositionHint) || parentPathChanged) {
            insertPositionHint = false;
         }
         if (pathChanged || hasPendingDiffs()) {
            flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
         }
      };
      var handleInput = function handleInput() {
         if (hasPendingAction() || !hasPendingDiffs()) {
            flush();
         }
      };
      var handleKeyDown = function handleKeyDown(_) {
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
      var scheduleFlush = function scheduleFlush() {
         if (!hasPendingAction()) {
            actionTimeoutId = setTimeout(flush);
         }
      };
      var handleDomMutations = function handleDomMutations(mutations) {
         if (hasPendingDiffs() || hasPendingAction()) {
            return;
         }
         if (
            mutations.some(function (mutation) {
               return isTrackedMutation(editor, mutation, mutations);
            })
         ) {
            var _EDITOR_TO_FORCE_REND;
            // Cause a re-render to restore the dom state if we encounter tracked mutations without
            // a corresponding pending action.
            (_EDITOR_TO_FORCE_REND = EDITOR_TO_FORCE_RENDER.get(editor)) === null ||
               _EDITOR_TO_FORCE_REND === void 0 ||
               _EDITOR_TO_FORCE_REND();
         }
      };
      return {
         flush: flush,
         scheduleFlush: scheduleFlush,
         hasPendingDiffs: hasPendingDiffs,
         hasPendingAction: hasPendingAction,
         hasPendingChanges: hasPendingChanges,
         isFlushing: isFlushing,
         handleUserSelect: handleUserSelect,
         handleCompositionEnd: handleCompositionEnd,
         handleCompositionStart: handleCompositionStart,
         handleDOMBeforeInput: handleDOMBeforeInput,
         handleKeyDown: handleKeyDown,
         handleDomMutations: handleDomMutations,
         handleInput: handleInput
      };
   }

   function useIsMounted() {
      var isMountedRef = React.useRef(false);
      React.useEffect(function () {
         isMountedRef.current = true;
         return function () {
            isMountedRef.current = false;
         };
      }, []);
      return isMountedRef.current;
   }

   /**
    * Prevent warning on SSR by falling back to useEffect when DOM isn't available
    */
   var useIsomorphicLayoutEffect = CAN_USE_DOM ? React.useLayoutEffect : React.useEffect;

   function useMutationObserver(node, callback, options) {
      var _useState = React.useState(function () {
            // Пропатчено: https://online.sbis.ru/opendoc.html?guid=59c88f2c-2480-44d9-a799-91f809ffb019&client=3
            return typeof MutationObserver !== 'undefined' ? new MutationObserver(callback) : null;
         }),
         _useState2 = _slicedToArray(_useState, 1),
         mutationObserver = _useState2[0];
      useIsomorphicLayoutEffect(function () {
         // Discard mutations caused during render phase. This works due to react calling
         // useLayoutEffect synchronously after the render phase before the next tick.
         mutationObserver.takeRecords();
      });
      React.useEffect(
         function () {
            if (!node.current) {
               throw new Error('Failed to attach MutationObserver, `node` is undefined');
            }
            mutationObserver.observe(node.current, options);
            return function () {
               return mutationObserver.disconnect();
            };
         },
         [mutationObserver, node, options]
      );
   }

   var _excluded$2 = ['node'];
   function ownKeys$7(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$7(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$7(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$7(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var MUTATION_OBSERVER_CONFIG$1 = {
      subtree: true,
      childList: true,
      characterData: true
   };
   var useAndroidInputManager = !IS_ANDROID
      ? function () {
           return null;
        }
      : function (_ref) {
           var node = _ref.node,
              options = _objectWithoutProperties$2(_ref, _excluded$2);
           if (!IS_ANDROID) {
              return null;
           }
           var editor = useSlateStatic();
           var isMounted = useIsMounted();
           var _useState = React.useState(function () {
                 return createAndroidInputManager(
                    _objectSpread$7(
                       {
                          editor: editor
                       },
                       options
                    )
                 );
              }),
              _useState2 = _slicedToArray(_useState, 1),
              inputManager = _useState2[0];
           useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG$1);
           EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);
           if (isMounted) {
              inputManager.flush();
           }
           return inputManager;
        };

   var resizeObservers = [];

   var hasActiveObservations = function () {
      return resizeObservers.some(function (ro) {
         return ro.activeTargets.length > 0;
      });
   };

   var hasSkippedObservations = function () {
      return resizeObservers.some(function (ro) {
         return ro.skippedTargets.length > 0;
      });
   };

   var msg = 'ResizeObserver loop completed with undelivered notifications.';
   var deliverResizeLoopError = function () {
      var event;
      if (typeof ErrorEvent === 'function') {
         event = new ErrorEvent('error', {
            message: msg
         });
      } else {
         event = document.createEvent('Event');
         event.initEvent('error', false, false);
         event.message = msg;
      }
      window.dispatchEvent(event);
   };

   var ResizeObserverBoxOptions;
   (function (ResizeObserverBoxOptions) {
      ResizeObserverBoxOptions['BORDER_BOX'] = 'border-box';
      ResizeObserverBoxOptions['CONTENT_BOX'] = 'content-box';
      ResizeObserverBoxOptions['DEVICE_PIXEL_CONTENT_BOX'] = 'device-pixel-content-box';
   })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

   var freeze = function (obj) {
      return Object.freeze(obj);
   };

   var ResizeObserverSize = (function () {
      function ResizeObserverSize(inlineSize, blockSize) {
         this.inlineSize = inlineSize;
         this.blockSize = blockSize;
         freeze(this);
      }
      return ResizeObserverSize;
   })();

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
         var _a = this,
            x = _a.x,
            y = _a.y,
            top = _a.top,
            right = _a.right,
            bottom = _a.bottom,
            left = _a.left,
            width = _a.width,
            height = _a.height;
         return {
            x: x,
            y: y,
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            width: width,
            height: height
         };
      };
      DOMRectReadOnly.fromRect = function (rectangle) {
         return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      };
      return DOMRectReadOnly;
   })();

   var isSVG = function (target) {
      return target instanceof SVGElement && 'getBBox' in target;
   };
   var isHidden = function (target) {
      if (isSVG(target)) {
         var _a = target.getBBox(),
            width = _a.width,
            height = _a.height;
         return !width && !height;
      }
      var _b = target,
         offsetWidth = _b.offsetWidth,
         offsetHeight = _b.offsetHeight;
      return !(offsetWidth || offsetHeight || target.getClientRects().length);
   };
   var isElement = function (obj) {
      var _a;
      if (obj instanceof Element) {
         return true;
      }
      var scope =
         (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null ||
         _a === void 0
            ? void 0
            : _a.defaultView;
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
   var IE = /msie|trident/i.test(global$1.navigator && global$1.navigator.userAgent);
   var parseDimension = function (pixel) {
      return parseFloat(pixel || '0');
   };
   var size = function (inlineSize, blockSize, switchSizes) {
      if (inlineSize === void 0) {
         inlineSize = 0;
      }
      if (blockSize === void 0) {
         blockSize = 0;
      }
      if (switchSizes === void 0) {
         switchSizes = false;
      }
      return new ResizeObserverSize(
         (switchSizes ? blockSize : inlineSize) || 0,
         (switchSizes ? inlineSize : blockSize) || 0
      );
   };
   var zeroBoxes = freeze({
      devicePixelContentBoxSize: size(),
      borderBoxSize: size(),
      contentBoxSize: size(),
      contentRect: new DOMRectReadOnly(0, 0, 0, 0)
   });
   var calculateBoxSizes = function (target, forceRecalculation) {
      if (forceRecalculation === void 0) {
         forceRecalculation = false;
      }
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
      var horizontalScrollbarThickness = !canScrollHorizontally
         ? 0
         : target.offsetHeight - verticalBorderArea - target.clientHeight;
      var verticalScrollbarThickness = !canScrollVertically
         ? 0
         : target.offsetWidth - horizontalBorderArea - target.clientWidth;
      var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
      var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
      var contentWidth = svg
         ? svg.width
         : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
      var contentHeight = svg
         ? svg.height
         : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
      var borderBoxWidth =
         contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
      var borderBoxHeight =
         contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
      var boxes = freeze({
         devicePixelContentBoxSize: size(
            Math.round(contentWidth * devicePixelRatio),
            Math.round(contentHeight * devicePixelRatio),
            switchSizes
         ),
         borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
         contentBoxSize: size(contentWidth, contentHeight, switchSizes),
         contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
      });
      cache.set(target, boxes);
      return boxes;
   };
   var calculateBoxSize = function (target, observedBox, forceRecalculation) {
      var _a = calculateBoxSizes(target, forceRecalculation),
         borderBoxSize = _a.borderBoxSize,
         contentBoxSize = _a.contentBoxSize,
         devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
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
   })();

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
               } else {
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
   var notify = function () {
      return callbacks.splice(0).forEach(function (cb) {
         return cb();
      });
   };
   var queueMicroTask = function (callback) {
      if (!trigger) {
         var toggle_1 = 0;
         var el_1 = document.createTextNode('');
         var config = { characterData: true };
         // Пропатчено: https://online.sbis.ru/opendoc.html?guid=59c88f2c-2480-44d9-a799-91f809ffb019&client=3
         if (typeof MutationObserver !== 'undefined') {
            new MutationObserver(function () {
               return notify();
            }).observe(el_1, config);
         }
         trigger = function () {
            el_1.textContent = ''.concat(toggle_1 ? toggle_1-- : toggle_1++);
         };
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
   var isWatching = function () {
      return !!watching;
   };
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
      if (timeout === void 0) {
         timeout = 0;
      }
      return Date.now() + timeout;
   };
   var scheduled = false;
   var Scheduler = (function () {
      function Scheduler() {
         var _this = this;
         this.stopped = true;
         this.listener = function () {
            return _this.schedule();
         };
      }
      Scheduler.prototype.run = function (timeout) {
         var _this = this;
         if (timeout === void 0) {
            timeout = CATCH_PERIOD;
         }
         if (scheduled) {
            return;
         }
         scheduled = true;
         var until = time(timeout);
         queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
               elementsHaveResized = process();
            } finally {
               scheduled = false;
               timeout = until - time();
               if (!isWatching()) {
                  return;
               }
               if (elementsHaveResized) {
                  _this.run(1000);
               } else if (timeout > 0) {
                  _this.run(timeout);
               } else {
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
         var cb = function () {
            return _this.observer && _this.observer.observe(document.body, observerConfig);
         };
         document.body ? cb() : global$1.addEventListener('DOMContentLoaded', cb);
      };
      Scheduler.prototype.start = function () {
         var _this = this;
         if (this.stopped) {
            this.stopped = false;
            // Пропатчено: https://online.sbis.ru/opendoc.html?guid=59c88f2c-2480-44d9-a799-91f809ffb019&client=3
            this.observer =
               typeof MutationObserver !== 'undefined' ? new MutationObserver(this.listener) : null;
            this.observe();
            events.forEach(function (name) {
               return global$1.addEventListener(name, _this.listener, true);
            });
         }
      };
      Scheduler.prototype.stop = function () {
         var _this = this;
         if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) {
               return global$1.removeEventListener(name, _this.listener, true);
            });
            this.stopped = true;
         }
      };
      return Scheduler;
   })();
   var scheduler = new Scheduler();
   var updateCount = function (n) {
      !watching && n > 0 && scheduler.start();
      watching += n;
      !watching && scheduler.stop();
   };

   var skipNotifyOnElement = function (target) {
      return (
         !isSVG(target) &&
         !isReplacedElement(target) &&
         getComputedStyle(target).display === 'inline'
      );
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
         if (
            this.lastReportedSize.inlineSize !== size.inlineSize ||
            this.lastReportedSize.blockSize !== size.blockSize
         ) {
            return true;
         }
         return false;
      };
      return ResizeObservation;
   })();

   var ResizeObserverDetail = (function () {
      function ResizeObserverDetail(resizeObserver, callback) {
         this.activeTargets = [];
         this.skippedTargets = [];
         this.observationTargets = [];
         this.observer = resizeObserver;
         this.callback = callback;
      }
      return ResizeObserverDetail;
   })();

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
      function ResizeObserverController() {}
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
         detail.observationTargets.slice().forEach(function (ot) {
            return _this.unobserve(resizeObserver, ot.target);
         });
         detail.activeTargets.splice(0, detail.activeTargets.length);
      };
      return ResizeObserverController;
   })();

   var ResizeObserver = (function () {
      function ResizeObserver(callback) {
         if (arguments.length === 0) {
            throw new TypeError(
               "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
            );
         }
         if (typeof callback !== 'function') {
            throw new TypeError(
               "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
            );
         }
         ResizeObserverController.connect(this, callback);
      }
      ResizeObserver.prototype.observe = function (target, options) {
         if (arguments.length === 0) {
            throw new TypeError(
               "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
         }
         if (!isElement(target)) {
            throw new TypeError(
               "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
         }
         ResizeObserverController.observe(this, target, options);
      };
      ResizeObserver.prototype.unobserve = function (target) {
         if (arguments.length === 0) {
            throw new TypeError(
               "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
         }
         if (!isElement(target)) {
            throw new TypeError(
               "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
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
   })();

   function ownKeys$6(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$6(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$6(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$6(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   /**
    * Leaf content strings.
    */
   var String$1 = function String(props) {
      var isLast = props.isLast,
         leaf = props.leaf,
         parent = props.parent,
         text = props.text;
      var editor = useSlateStatic();
      var path = ReactEditor.findPath(editor, text);
      var parentPath = Path.parent(path);
      var isMarkPlaceholder = Boolean(leaf[MARK_PLACEHOLDER_SYMBOL]);
      // COMPAT: Render text inside void nodes with a zero-width space.
      // So the node can contain selection but the text is not visible.
      if (editor.isVoid(parent)) {
         return /*#__PURE__*/ React.createElement(ZeroWidthString, {
            length: Node.string(parent).length
         });
      }
      // COMPAT: If this is the last text node in an empty block, render a zero-
      // width space that will convert into a line break when copying and pasting
      // to support expected plain text.
      if (
         leaf.text === '' &&
         parent.children[parent.children.length - 1] === text &&
         !editor.isInline(parent) &&
         Editor.string(editor, parentPath) === ''
      ) {
         return /*#__PURE__*/ React.createElement(ZeroWidthString, {
            isLineBreak: true,
            isMarkPlaceholder: isMarkPlaceholder
         });
      }
      // COMPAT: If the text is empty, it's because it's on the edge of an inline
      // node, so we render a zero-width space so that the selection can be
      // inserted next to it still.
      if (leaf.text === '') {
         return /*#__PURE__*/ React.createElement(ZeroWidthString, {
            isMarkPlaceholder: isMarkPlaceholder
         });
      }
      // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
      // so we need to add an extra trailing new lines to prevent that.
      if (isLast && leaf.text.slice(-1) === '\n') {
         return /*#__PURE__*/ React.createElement(TextString, {
            isTrailing: true,
            text: leaf.text
         });
      }
      return /*#__PURE__*/ React.createElement(TextString, {
         text: leaf.text
      });
   };
   /**
    * Leaf strings with text in them.
    */
   var TextString = function TextString(props) {
      var text = props.text,
         _props$isTrailing = props.isTrailing,
         isTrailing = _props$isTrailing === void 0 ? false : _props$isTrailing;
      var ref = React.useRef(null);
      var getTextContent = function getTextContent() {
         return ''
            .concat(text !== null && text !== void 0 ? text : '')
            .concat(isTrailing ? '\n' : '');
      };
      var _useState = React.useState(getTextContent),
         _useState2 = _slicedToArray(_useState, 1),
         initialText = _useState2[0];
      // This is the actual text rendering boundary where we interface with the DOM
      // The text is not rendered as part of the virtual DOM, as since we handle basic character insertions natively,
      // updating the DOM is not a one way dataflow anymore. What we need here is not reconciliation and diffing
      // with previous version of the virtual DOM, but rather diffing with the actual DOM element, and replace the DOM <span> content
      // exactly if and only if its current content does not match our current virtual DOM.
      // Otherwise the DOM TextNode would always be replaced by React as the user types, which interferes with native text features,
      // eg makes native spellcheck opt out from checking the text node.
      // useLayoutEffect: updating our span before browser paint
      useIsomorphicLayoutEffect(function () {
         // null coalescing text to make sure we're not outputing "null" as a string in the extreme case it is nullish at runtime
         var textWithTrailing = getTextContent();
         if (ref.current && ref.current.textContent !== textWithTrailing) {
            ref.current.textContent = textWithTrailing;
         }
         // intentionally not specifying dependencies, so that this effect runs on every render
         // as this effectively replaces "specifying the text in the virtual DOM under the <span> below" on each render
      });
      // We intentionally render a memoized <span> that only receives the initial text content when the component is mounted.
      // We defer to the layout effect above to update the `textContent` of the span element when needed.
      return /*#__PURE__*/ React.createElement(
         MemoizedText$1,
         {
            ref: ref
         },
         initialText
      );
   };
   var MemoizedText$1 = /*#__PURE__*/ React.memo(
      /*#__PURE__*/ React.forwardRef(function (props, ref) {
         return /*#__PURE__*/ React.createElement(
            'span',
            {
               'data-slate-string': true,
               ref: ref
            },
            props.children
         );
      })
   );
   /**
    * Leaf strings without text, render as zero-width strings.
    */
   var ZeroWidthString = function ZeroWidthString(props) {
      var _props$length = props.length,
         length = _props$length === void 0 ? 0 : _props$length,
         _props$isLineBreak = props.isLineBreak,
         isLineBreak = _props$isLineBreak === void 0 ? false : _props$isLineBreak,
         _props$isMarkPlacehol = props.isMarkPlaceholder,
         isMarkPlaceholder = _props$isMarkPlacehol === void 0 ? false : _props$isMarkPlacehol;
      var attributes = {
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

      // ПРОПАТЧЕНО
      // ошибка на айпаде при открытии клавиатуры буквы маленькие, а не большие
      // !IS_ANDROID -> !(IS_ANDROID || IS_IOS)
      // вот тут Назар разбирался с патчем
      // https://online.sbis.ru/opendoc.html?guid=1a6464ba-86d9-460f-b1f5-f3b32320c97b&client=3
      return /*#__PURE__*/ React.createElement(
         'span',
         _objectSpread$6({}, attributes),
         !(IS_ANDROID || IS_IOS) || !isLineBreak ? '\uFEFF' : null,
         isLineBreak ? /*#__PURE__*/ React.createElement('br', null) : null
      );
   };

   function ownKeys$5(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$5(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$5(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$5(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   // Delay the placeholder on Android to prevent the keyboard from closing.
   // (https://github.com/ianstormtaylor/slate/pull/5368)
   var PLACEHOLDER_DELAY = IS_ANDROID ? 300 : 0;
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
   var defaultRenderLeaf = function defaultRenderLeaf(props) {
      return /*#__PURE__*/ React.createElement(DefaultLeaf, _objectSpread$5({}, props));
   };
   /**
    * Individual leaves in a text node with unique formatting.
    */
   var Leaf = function Leaf(props) {
      var leaf = props.leaf,
         isLast = props.isLast,
         text = props.text,
         parent = props.parent,
         renderPlaceholder = props.renderPlaceholder,
         _props$renderLeaf = props.renderLeaf,
         renderLeaf = _props$renderLeaf === void 0 ? defaultRenderLeaf : _props$renderLeaf,
         leafPosition = props.leafPosition;
      var editor = useSlateStatic();
      var placeholderResizeObserver = React.useRef(null);
      var placeholderRef = React.useRef(null);
      var _useState = React.useState(false),
         _useState2 = _slicedToArray(_useState, 2),
         showPlaceholder = _useState2[0],
         setShowPlaceholder = _useState2[1];
      var showPlaceholderTimeoutRef = React.useRef(null);
      var callbackPlaceholderRef = React.useCallback(
         function (placeholderEl) {
            disconnectPlaceholderResizeObserver(placeholderResizeObserver, placeholderEl == null);
            if (placeholderEl == null) {
               var _leaf$onPlaceholderRe;
               EDITOR_TO_PLACEHOLDER_ELEMENT['delete'](editor);
               (_leaf$onPlaceholderRe = leaf.onPlaceholderResize) === null ||
                  _leaf$onPlaceholderRe === void 0 ||
                  _leaf$onPlaceholderRe.call(leaf, null);
            } else {
               EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
               if (!placeholderResizeObserver.current) {
                  // Create a new observer and observe the placeholder element.
                  var ResizeObserver$1 = window.ResizeObserver || ResizeObserver;
                  placeholderResizeObserver.current = new ResizeObserver$1(function () {
                     var _leaf$onPlaceholderRe2;
                     (_leaf$onPlaceholderRe2 = leaf.onPlaceholderResize) === null ||
                        _leaf$onPlaceholderRe2 === void 0 ||
                        _leaf$onPlaceholderRe2.call(leaf, placeholderEl);
                  });
               }
               placeholderResizeObserver.current.observe(placeholderEl);
               placeholderRef.current = placeholderEl;
            }
         },
         [placeholderRef, leaf, editor]
      );
      var children = /*#__PURE__*/ React.createElement(String$1, {
         isLast: isLast,
         leaf: leaf,
         parent: parent,
         text: text
      });
      var leafIsPlaceholder = Boolean(leaf[PLACEHOLDER_SYMBOL]);
      React.useEffect(
         function () {
            if (leafIsPlaceholder) {
               if (!showPlaceholderTimeoutRef.current) {
                  // Delay the placeholder, so it will not render in a selection
                  showPlaceholderTimeoutRef.current = setTimeout(function () {
                     setShowPlaceholder(true);
                     showPlaceholderTimeoutRef.current = null;
                  }, PLACEHOLDER_DELAY);
               }
            } else {
               clearTimeoutRef(showPlaceholderTimeoutRef);
               setShowPlaceholder(false);
            }
            return function () {
               return clearTimeoutRef(showPlaceholderTimeoutRef);
            };
         },
         [leafIsPlaceholder, setShowPlaceholder]
      );
      if (leafIsPlaceholder && showPlaceholder) {
         var placeholderProps = {
            children: leaf.placeholder,
            attributes: {
               'data-slate-placeholder': true,
               style: {
                  position: 'absolute',
                  top: 0,
                  pointerEvents: 'none',
                  width: '100%',
                  maxWidth: '100%',
                  display: 'block',
                  opacity: '0.333',
                  userSelect: 'none',
                  textDecoration: 'none',
                  // Fixes https://github.com/udecode/plate/issues/2315
                  WebkitUserModify: IS_WEBKIT ? 'inherit' : undefined
               },
               contentEditable: false,
               ref: callbackPlaceholderRef
            }
         };
         children = /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            children,
            renderPlaceholder(placeholderProps)
         );
      }
      // COMPAT: Having the `data-` attributes on these leaf elements ensures that
      // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
      // contenteditable behaviors. (2019/05/08)
      var attributes = {
         'data-slate-leaf': true
      };
      return renderLeaf({
         attributes: attributes,
         children: children,
         leaf: leaf,
         text: text,
         leafPosition: leafPosition
      });
   };
   var MemoizedLeaf = /*#__PURE__*/ React.memo(Leaf, function (prev, next) {
      return (
         next.parent === prev.parent &&
         next.isLast === prev.isLast &&
         next.renderLeaf === prev.renderLeaf &&
         next.renderPlaceholder === prev.renderPlaceholder &&
         next.text === prev.text &&
         Text$1.equals(next.leaf, prev.leaf) &&
         next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL]
      );
   });
   var DefaultLeaf = function DefaultLeaf(props) {
      var attributes = props.attributes,
         children = props.children;
      return /*#__PURE__*/ React.createElement('span', _objectSpread$5({}, attributes), children);
   };

   var arrayWithoutHoles = createCommonjsModule(function (module) {
      function _arrayWithoutHoles(arr) {
         if (Array.isArray(arr)) return arrayLikeToArray(arr);
      }
      (module.exports = _arrayWithoutHoles),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(arrayWithoutHoles);

   var iterableToArray = createCommonjsModule(function (module) {
      function _iterableToArray(iter) {
         if (
            (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
            iter['@@iterator'] != null
         )
            return Array.from(iter);
      }
      (module.exports = _iterableToArray),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(iterableToArray);

   var nonIterableSpread = createCommonjsModule(function (module) {
      function _nonIterableSpread() {
         throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
         );
      }
      (module.exports = _nonIterableSpread),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(nonIterableSpread);

   var toConsumableArray = createCommonjsModule(function (module) {
      function _toConsumableArray(arr) {
         return (
            arrayWithoutHoles(arr) ||
            iterableToArray(arr) ||
            unsupportedIterableToArray(arr) ||
            nonIterableSpread()
         );
      }
      (module.exports = _toConsumableArray),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _toConsumableArray = unwrapExports(toConsumableArray);

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
      var _useReducer = React.useReducer(function (s) {
            return s + 1;
         }, 0),
         _useReducer2 = _slicedToArray(_useReducer, 2),
         forceRender = _useReducer2[1];
      var latestSubscriptionCallbackError = React.useRef();
      var latestSelector = React.useRef(function () {
         return null;
      });
      var latestSelectedState = React.useRef(null);
      var selectedState;
      try {
         if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
            var selectorResult = selector();
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
            err.message += '\nThe error may be correlated with this previous error:\n'.concat(
               latestSubscriptionCallbackError.current.stack,
               '\n\n'
            );
         }
         throw err;
      }
      latestSelector.current = selector;
      latestSelectedState.current = selectedState;
      latestSubscriptionCallbackError.current = undefined;
      var update = React.useCallback(function () {
         try {
            var newSelectedState = latestSelector.current();
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
   var DecorateContext = /*#__PURE__*/ React.createContext({});
   var useDecorations = function useDecorations(node, parentDecorations) {
      var editor = useSlateStatic();
      var _useContext = React.useContext(DecorateContext),
         decorate = _useContext.decorate,
         addEventListener = _useContext.addEventListener;
      // Not memoized since we want nodes to be decorated on each render
      var selector = function selector() {
         var path = ReactEditor.findPath(editor, node);
         return decorate([node, path]);
      };
      var equalityFn = Node.isText(node) ? isTextDecorationsEqual : isElementDecorationsEqual;
      var _useGenericSelector = useGenericSelector(selector, equalityFn),
         _useGenericSelector2 = _slicedToArray(_useGenericSelector, 2),
         decorations = _useGenericSelector2[0],
         update = _useGenericSelector2[1];
      useIsomorphicLayoutEffect(
         function () {
            var unsubscribe = addEventListener(update);
            update();
            return unsubscribe;
         },
         [addEventListener, update]
      );
      return React.useMemo(
         function () {
            return [].concat(
               _toConsumableArray(decorations),
               _toConsumableArray(parentDecorations)
            );
         },
         [decorations, parentDecorations]
      );
   };
   var useDecorateContext = function useDecorateContext(decorateProp) {
      var eventListeners = React.useRef(new Set());
      var latestDecorate = React.useRef(decorateProp);
      useIsomorphicLayoutEffect(
         function () {
            latestDecorate.current = decorateProp;
            eventListeners.current.forEach(function (listener) {
               return listener();
            });
         },
         [decorateProp]
      );
      var decorate = React.useCallback(function (entry) {
         return latestDecorate.current(entry);
      }, []);
      var addEventListener = React.useCallback(function (callback) {
         eventListeners.current.add(callback);
         return function () {
            eventListeners.current['delete'](callback);
         };
      }, []);
      return React.useMemo(
         function () {
            return {
               decorate: decorate,
               addEventListener: addEventListener
            };
         },
         [decorate, addEventListener]
      );
   };

   function ownKeys$4(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$4(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$4(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$4(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var defaultRenderText = function defaultRenderText(props) {
      return /*#__PURE__*/ React.createElement(DefaultText, _objectSpread$4({}, props));
   };
   /**
    * Text.
    */
   var Text = function Text(props) {
      var parentDecorations = props.decorations,
         isLast = props.isLast,
         parent = props.parent,
         renderPlaceholder = props.renderPlaceholder,
         renderLeaf = props.renderLeaf,
         _props$renderText = props.renderText,
         renderText = _props$renderText === void 0 ? defaultRenderText : _props$renderText,
         text = props.text;
      var editor = useSlateStatic();
      var ref = React.useRef(null);
      var decorations = useDecorations(text, parentDecorations);
      var decoratedLeaves = Text$1.decorations(text, decorations);
      var key = ReactEditor.findKey(editor, text);
      var children = [];
      for (var i = 0; i < decoratedLeaves.length; i++) {
         var _decoratedLeaves$i = decoratedLeaves[i],
            leaf = _decoratedLeaves$i.leaf,
            position = _decoratedLeaves$i.position;
         children.push(
            /*#__PURE__*/ React.createElement(MemoizedLeaf, {
               isLast: isLast && i === decoratedLeaves.length - 1,
               key: ''.concat(key.id, '-').concat(i),
               renderPlaceholder: renderPlaceholder,
               leaf: leaf,
               leafPosition: position,
               text: text,
               parent: parent,
               renderLeaf: renderLeaf
            })
         );
      }
      // Update element-related weak maps with the DOM element ref.
      var callbackRef = React.useCallback(
         function (span) {
            var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
            if (span) {
               KEY_TO_ELEMENT === null ||
                  KEY_TO_ELEMENT === void 0 ||
                  KEY_TO_ELEMENT.set(key, span);
               NODE_TO_ELEMENT.set(text, span);
               ELEMENT_TO_NODE.set(span, text);
            } else {
               KEY_TO_ELEMENT === null ||
                  KEY_TO_ELEMENT === void 0 ||
                  KEY_TO_ELEMENT['delete'](key);
               NODE_TO_ELEMENT['delete'](text);
               if (ref.current) {
                  ELEMENT_TO_NODE['delete'](ref.current);
               }
            }
            ref.current = span;
         },
         [ref, editor, key, text]
      );
      var attributes = {
         'data-slate-node': 'text',
         ref: callbackRef
      };
      return renderText({
         text: text,
         children: children,
         attributes: attributes
      });
   };
   var MemoizedText = /*#__PURE__*/ React.memo(Text, function (prev, next) {
      return (
         next.parent === prev.parent &&
         next.isLast === prev.isLast &&
         next.renderText === prev.renderText &&
         next.renderLeaf === prev.renderLeaf &&
         next.renderPlaceholder === prev.renderPlaceholder &&
         next.text === prev.text &&
         isTextDecorationsEqual(next.decorations, prev.decorations)
      );
   });
   var DefaultText = function DefaultText(props) {
      var attributes = props.attributes,
         children = props.children;
      return /*#__PURE__*/ React.createElement('span', _objectSpread$4({}, attributes), children);
   };

   function ownKeys$3(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$3(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$3(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$3(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var defaultRenderElement = function defaultRenderElement(props) {
      return /*#__PURE__*/ React.createElement(DefaultElement, _objectSpread$3({}, props));
   };
   /**
    * Element.
    */
   var Element$1 = function Element(props) {
      var parentDecorations = props.decorations,
         element = props.element,
         _props$renderElement = props.renderElement,
         renderElement =
            _props$renderElement === void 0 ? defaultRenderElement : _props$renderElement,
         renderChunk = props.renderChunk,
         renderPlaceholder = props.renderPlaceholder,
         renderLeaf = props.renderLeaf,
         renderText = props.renderText;
      var editor = useSlateStatic();
      var readOnly = useReadOnly();
      var isInline = editor.isInline(element);
      var decorations = useDecorations(element, parentDecorations);
      var key = ReactEditor.findKey(editor, element);
      var ref = React.useCallback(
         function (ref) {
            // Update element-related weak maps with the DOM element ref.
            var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
            if (ref) {
               KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, ref);
               NODE_TO_ELEMENT.set(element, ref);
               ELEMENT_TO_NODE.set(ref, element);
            } else {
               KEY_TO_ELEMENT === null ||
                  KEY_TO_ELEMENT === void 0 ||
                  KEY_TO_ELEMENT['delete'](key);
               NODE_TO_ELEMENT['delete'](element);
            }
         },
         [editor, key, element]
      );
      var children = useChildren({
         decorations: decorations,
         node: element,
         renderElement: renderElement,
         renderChunk: renderChunk,
         renderPlaceholder: renderPlaceholder,
         renderLeaf: renderLeaf,
         renderText: renderText
      });
      // Attributes that the developer must mix into the element in their
      // custom node renderer component.
      var attributes = {
         'data-slate-node': 'element',
         ref: ref
      };
      if (isInline) {
         attributes['data-slate-inline'] = true;
      }
      // If it's a block node with inline children, add the proper `dir` attribute
      // for text direction.
      if (!isInline && Editor.hasInlines(editor, element)) {
         var text = Node.string(element);
         var dir = direction_1(text);
         if (dir === 'rtl') {
            attributes.dir = dir;
         }
      }
      // If it's a void node, wrap the children in extra void-specific elements.
      if (Editor.isVoid(editor, element)) {
         attributes['data-slate-void'] = true;
         if (!readOnly && isInline) {
            attributes.contentEditable = false;
         }
         // ПРОПАТЧЕНО: tag для data-slate-spacer='true' ноды должен быть инлайновым,
         // иначе реакт будет ругаться на div внутри p. По-хорошему стоит заменить p на div у нас,
         // но это намного геморнее.
         // https://online.sbis.ru/opendoc.html?guid=c17d203f-4ad0-4b58-b9f4-cc1d7eb9c513&client=3
         var Tag = 'span';
         var _Node$texts = Node.texts(element),
            _Node$texts2 = _slicedToArray(_Node$texts, 1),
            _Node$texts2$ = _slicedToArray(_Node$texts2[0], 1),
            _text = _Node$texts2$[0];
         children = /*#__PURE__*/ React.createElement(
            Tag,
            {
               'data-slate-spacer': true,
               style: {
                  height: '0',
                  color: 'transparent',
                  outline: 'none',
                  position: 'absolute'
               }
            },
            /*#__PURE__*/ React.createElement(MemoizedText, {
               renderPlaceholder: renderPlaceholder,
               decorations: [],
               isLast: false,
               parent: element,
               text: _text
            })
         );
         NODE_TO_INDEX.set(_text, 0);
         NODE_TO_PARENT.set(_text, element);
      }
      return renderElement({
         attributes: attributes,
         children: children,
         element: element
      });
   };
   var MemoizedElement = /*#__PURE__*/ React.memo(Element$1, function (prev, next) {
      return (
         prev.element === next.element &&
         prev.renderElement === next.renderElement &&
         prev.renderChunk === next.renderChunk &&
         prev.renderText === next.renderText &&
         prev.renderLeaf === next.renderLeaf &&
         prev.renderPlaceholder === next.renderPlaceholder &&
         isElementDecorationsEqual(prev.decorations, next.decorations)
      );
   });
   /**
    * The default element renderer.
    */
   var DefaultElement = function DefaultElement(props) {
      var attributes = props.attributes,
         children = props.children,
         element = props.element;
      var editor = useSlateStatic();
      var Tag = editor.isInline(element) ? 'span' : 'div';
      return /*#__PURE__*/ React.createElement(
         Tag,
         _objectSpread$3(
            _objectSpread$3({}, attributes),
            {},
            {
               style: {
                  position: 'relative'
               }
            }
         ),
         children
      );
   };

   var classCallCheck = createCommonjsModule(function (module) {
      function _classCallCheck(instance, Constructor) {
         if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
         }
      }
      (module.exports = _classCallCheck),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _classCallCheck = unwrapExports(classCallCheck);

   var createClass = createCommonjsModule(function (module) {
      function _defineProperties(target, props) {
         for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
         }
      }
      function _createClass(Constructor, protoProps, staticProps) {
         if (protoProps) _defineProperties(Constructor.prototype, protoProps);
         if (staticProps) _defineProperties(Constructor, staticProps);
         Object.defineProperty(Constructor, 'prototype', {
            writable: false
         });
         return Constructor;
      }
      (module.exports = _createClass),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _createClass = unwrapExports(createClass);

   /**
    * Traverse and modify a chunk tree
    */
   var ChunkTreeHelper = /*#__PURE__*/ (function () {
      function ChunkTreeHelper(chunkTree, _ref) {
         var chunkSize = _ref.chunkSize,
            debug = _ref.debug;
         _classCallCheck(this, ChunkTreeHelper);
         /**
          * The root of the chunk tree
          */
         _defineProperty$2(this, 'root', void 0);
         /**
          * The ideal size of a chunk
          */
         _defineProperty$2(this, 'chunkSize', void 0);
         /**
          * Whether debug mode is enabled
          *
          * If enabled, the pointer state will be checked for internal consistency
          * after each mutating operation.
          */
         _defineProperty$2(this, 'debug', void 0);
         /**
          * Whether the traversal has reached the end of the chunk tree
          *
          * When this is true, the pointerChunk and pointerIndex point to the last
          * top-level node in the chunk tree, although pointerNode returns null.
          */
         _defineProperty$2(this, 'reachedEnd', void 0);
         /**
          * The chunk containing the current node
          */
         _defineProperty$2(this, 'pointerChunk', void 0);
         /**
          * The index of the current node within pointerChunk
          *
          * Can be -1 to indicate that the pointer is before the start of the tree.
          */
         _defineProperty$2(this, 'pointerIndex', void 0);
         /**
          * Similar to a Slate path; tracks the path of pointerChunk relative to the
          * root.
          *
          * Used to move the pointer from the current chunk to the parent chunk more
          * efficiently.
          */
         _defineProperty$2(this, 'pointerIndexStack', void 0);
         /**
          * Indexing the current chunk's children has a slight time cost, which adds up
          * when traversing very large trees, so the current node is cached.
          *
          * A value of undefined means that the current node is not cached. This
          * property must be set to undefined whenever the pointer is moved, unless
          * the pointer is guaranteed to point to the same node that it did previously.
          */
         _defineProperty$2(this, 'cachedPointerNode', void 0);
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
      _createClass(ChunkTreeHelper, [
         {
            key: 'readLeaf',
            value: function readLeaf() {
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
         },
         {
            key: 'returnToPreviousLeaf',
            value: function returnToPreviousLeaf() {
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
         },
         {
            key: 'insertBefore',
            value: function insertBefore(leaves) {
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
         },
         {
            key: 'insertAfter',
            value: function insertAfter(leaves) {
               // istanbul ignore next
               if (leaves.length === 0) return;
               var beforeDepth = 0;
               var afterDepth = 0;
               // While at the end of a chunk, insert any leaves that will fit, and then
               // exit the chunk
               while (
                  this.pointerChunk.type === 'chunk' &&
                  this.pointerIndex === this.pointerSiblings.length - 1
               ) {
                  var remainingCapacity = this.chunkSize - this.pointerSiblings.length;
                  var toInsertCount = Math.min(remainingCapacity, leaves.length);
                  if (toInsertCount > 0) {
                     var leavesToInsert = leaves.splice(0, toInsertCount);
                     this.rawInsertAfter(leavesToInsert, beforeDepth);
                  }
                  this.exitChunk();
                  beforeDepth++;
               }
               if (leaves.length === 0) return;
               // Save the pointer so that we can come back here after inserting leaves
               // into the starts of subsequent blocks
               var rawInsertPointer = this.savePointer();
               // If leaves are inserted into the start of a subsequent block, then we
               // eventually need to restore the pointer to the last such inserted leaf
               var finalPointer = null;
               // Move the pointer into the chunk containing the next leaf, if it exists
               if (this.readLeaf()) {
                  // While at the start of a chunk, insert any leaves that will fit, and
                  // then exit the chunk
                  while (this.pointerChunk.type === 'chunk' && this.pointerIndex === 0) {
                     var _remainingCapacity = this.chunkSize - this.pointerSiblings.length;
                     var _toInsertCount = Math.min(_remainingCapacity, leaves.length);
                     if (_toInsertCount > 0) {
                        var _leavesToInsert = leaves.splice(-_toInsertCount, _toInsertCount);
                        // Insert the leaves at the start of the chunk
                        this.pointerIndex = -1;
                        this.cachedPointerNode = undefined;
                        this.rawInsertAfter(_leavesToInsert, afterDepth);
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
               var minDepth = Math.max(beforeDepth, afterDepth);
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
         },
         {
            key: 'remove',
            value: function remove() {
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
         },
         {
            key: 'invalidateChunk',
            value: function invalidateChunk() {
               for (var c = this.pointerChunk; c.type === 'chunk'; c = c.parent) {
                  this.root.modifiedChunks.add(c);
               }
            }
            /**
             * Whether the pointer is at the start of the tree
             */
         },
         {
            key: 'atStart',
            get: function get() {
               return this.pointerChunk.type === 'root' && this.pointerIndex === -1;
            }
            /**
             * The siblings of the current node
             */
         },
         {
            key: 'pointerSiblings',
            get: function get() {
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
         },
         {
            key: 'getPointerNode',
            value: function getPointerNode() {
               if (this.reachedEnd || this.pointerIndex === -1) {
                  return null;
               }
               return this.pointerSiblings[this.pointerIndex];
            }
            /**
             * Cached getter for the current node
             */
         },
         {
            key: 'pointerNode',
            get: function get() {
               if (this.cachedPointerNode !== undefined) return this.cachedPointerNode;
               var pointerNode = this.getPointerNode();
               this.cachedPointerNode = pointerNode;
               return pointerNode;
            }
            /**
             * Get the path of a chunk relative to the root, returning null if the chunk
             * is not connected to the root
             */
         },
         {
            key: 'getChunkPath',
            value: function getChunkPath(chunk) {
               var path = [];
               for (var c = chunk; c.type === 'chunk'; c = c.parent) {
                  var index = c.parent.children.indexOf(c);
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
         },
         {
            key: 'savePointer',
            value: function savePointer() {
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
         },
         {
            key: 'restorePointer',
            value: function restorePointer(savedPointer) {
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
               var chunk = savedPointer.chunk,
                  node = savedPointer.node;
               var index = chunk.children.indexOf(node);
               // istanbul ignore next
               if (index === -1) {
                  throw new Error(
                     'Cannot restore point because saved node is no longer in saved chunk'
                  );
               }
               var indexStack = this.getChunkPath(chunk);
               // istanbul ignore next
               if (!indexStack) {
                  throw new Error(
                     'Cannot restore point because saved chunk is no longer connected to root'
                  );
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
         },
         {
            key: 'enterChunk',
            value: function enterChunk(end) {
               var _this$pointerNode;
               // istanbul ignore next
               if (
                  ((_this$pointerNode = this.pointerNode) === null || _this$pointerNode === void 0
                     ? void 0
                     : _this$pointerNode.type) !== 'chunk'
               ) {
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
         },
         {
            key: 'enterChunkUntilLeaf',
            value: function enterChunkUntilLeaf(end) {
               while (
                  ((_this$pointerNode2 = this.pointerNode) === null || _this$pointerNode2 === void 0
                     ? void 0
                     : _this$pointerNode2.type) === 'chunk'
               ) {
                  var _this$pointerNode2;
                  this.enterChunk(end);
               }
            }
            /**
             * Move the pointer to the parent chunk
             */
         },
         {
            key: 'exitChunk',
            value: function exitChunk() {
               // istanbul ignore next
               if (this.pointerChunk.type === 'root') {
                  throw new Error('Cannot exit root');
               }
               var previousPointerChunk = this.pointerChunk;
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
         },
         {
            key: 'rawInsertAfter',
            value: function rawInsertAfter(leaves, minDepth) {
               var _this = this,
                  _this$pointerSiblings;
               if (leaves.length === 0) return;
               var groupIntoChunks = function groupIntoChunks(leaves, parent, perChunk) {
                  if (perChunk === 1) return leaves;
                  var chunks = [];
                  for (var i = 0; i < _this.chunkSize; i++) {
                     var chunkNodes = leaves.slice(i * perChunk, (i + 1) * perChunk);
                     if (chunkNodes.length === 0) break;
                     var chunk = {
                        type: 'chunk',
                        key: new Key(),
                        parent: parent,
                        children: []
                     };
                     chunk.children = groupIntoChunks(
                        chunkNodes,
                        chunk,
                        perChunk / _this.chunkSize
                     );
                     chunks.push(chunk);
                  }
                  return chunks;
               };
               // Determine the chunking depth based on the number of existing nodes in
               // the chunk and the number of nodes being inserted
               var newTotal = this.pointerSiblings.length + leaves.length;
               var depthForTotal = 0;
               for (var i = this.chunkSize; i < newTotal; i *= this.chunkSize) {
                  depthForTotal++;
               }
               // A depth of 0 means no chunking
               var depth = Math.max(depthForTotal, minDepth);
               var perTopLevelChunk = Math.pow(this.chunkSize, depth);
               var chunks = groupIntoChunks(leaves, this.pointerChunk, perTopLevelChunk);
               (_this$pointerSiblings = this.pointerSiblings).splice.apply(
                  _this$pointerSiblings,
                  [this.pointerIndex + 1, 0].concat(_toConsumableArray(chunks))
               );
               this.pointerIndex += chunks.length;
               this.cachedPointerNode = undefined;
               this.invalidateChunk();
               this.validateState();
            }
            /**
             * If debug mode is enabled, ensure that the state is internally consistent
             */
            // istanbul ignore next
         },
         {
            key: 'validateState',
            value: function validateState() {
               if (!this.debug) return;
               var validateDescendant = function validateDescendant(node) {
                  if (node.type === 'chunk') {
                     var parent = node.parent,
                        children = node.children;
                     if (!parent.children.includes(node)) {
                        throw new Error(
                           'Debug: Chunk '.concat(node.key.id, ' has an incorrect parent property')
                        );
                     }
                     children.forEach(validateDescendant);
                  }
               };
               this.root.children.forEach(validateDescendant);
               if (
                  this.cachedPointerNode !== undefined &&
                  this.cachedPointerNode !== this.getPointerNode()
               ) {
                  throw new Error(
                     'Debug: The cached pointer is incorrect and has not been invalidated'
                  );
               }
               var actualIndexStack = this.getChunkPath(this.pointerChunk);
               if (!actualIndexStack) {
                  throw new Error('Debug: The pointer chunk is not connected to the root');
               }
               if (!Path.equals(this.pointerIndexStack, actualIndexStack)) {
                  throw new Error(
                     'Debug: The cached index stack ['
                        .concat(
                           this.pointerIndexStack.join(', '),
                           '] does not match the path of the pointer chunk ['
                        )
                        .concat(actualIndexStack.join(', '), ']')
                  );
               }
            }
         }
      ]);
      return ChunkTreeHelper;
   })();

   /**
    * Traverse an array of children, providing helpers useful for reconciling the
    * children array with a chunk tree
    */
   var ChildrenHelper = /*#__PURE__*/ (function () {
      function ChildrenHelper(editor, children) {
         _classCallCheck(this, ChildrenHelper);
         _defineProperty$2(this, 'editor', void 0);
         _defineProperty$2(this, 'children', void 0);
         /**
          * Sparse array of Slate node keys, each index corresponding to an index in
          * the children array
          *
          * Fetching the key for a Slate node is expensive, so we cache them here.
          */
         _defineProperty$2(this, 'cachedKeys', void 0);
         /**
          * The index of the next node to be read in the children array
          */
         _defineProperty$2(this, 'pointerIndex', void 0);
         this.editor = editor;
         this.children = children;
         this.cachedKeys = new Array(children.length);
         this.pointerIndex = 0;
      }
      /**
       * Read a given number of nodes, advancing the pointer by that amount
       */
      _createClass(ChildrenHelper, [
         {
            key: 'read',
            value: function read(n) {
               // PERF: If only one child was requested (the most common case), use array
               // indexing instead of slice
               if (n === 1) {
                  return [this.children[this.pointerIndex++]];
               }
               var slicedChildren = this.remaining(n);
               this.pointerIndex += n;
               return slicedChildren;
            }
            /**
             * Get the remaining children without advancing the pointer
             *
             * @param [maxChildren] Limit the number of children returned.
             */
         },
         {
            key: 'remaining',
            value: function remaining(maxChildren) {
               if (maxChildren === undefined) {
                  return this.children.slice(this.pointerIndex);
               }
               return this.children.slice(this.pointerIndex, this.pointerIndex + maxChildren);
            }
            /**
             * Whether all children have been read
             */
         },
         {
            key: 'reachedEnd',
            get: function get() {
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
         },
         {
            key: 'lookAhead',
            value: function lookAhead(node, key) {
               var elementResult = this.children.indexOf(node, this.pointerIndex);
               if (elementResult > -1) return elementResult - this.pointerIndex;
               for (var i = this.pointerIndex; i < this.children.length; i++) {
                  var candidateNode = this.children[i];
                  var candidateKey = this.findKey(candidateNode, i);
                  if (candidateKey === key) return i - this.pointerIndex;
               }
               return -1;
            }
            /**
             * Convert an array of Slate nodes to an array of chunk leaves, each
             * containing the node and its key
             */
         },
         {
            key: 'toChunkLeaves',
            value: function toChunkLeaves(nodes, startIndex) {
               var _this = this;
               return nodes.map(function (node, i) {
                  return {
                     type: 'leaf',
                     node: node,
                     key: _this.findKey(node, startIndex + i),
                     index: startIndex + i
                  };
               });
            }
            /**
             * Get the key for a Slate node, cached using the node's index
             */
         },
         {
            key: 'findKey',
            value: function findKey(node, index) {
               var cachedKey = this.cachedKeys[index];
               if (cachedKey) return cachedKey;
               var key = ReactEditor.findKey(this.editor, node);
               this.cachedKeys[index] = key;
               return key;
            }
         }
      ]);
      return ChildrenHelper;
   })();

   /**
    * Update the chunk tree to match the children array, inserting, removing and
    * updating differing nodes
    */
   var reconcileChildren = function reconcileChildren(editor, _ref) {
      var chunkTree = _ref.chunkTree,
         children = _ref.children,
         chunkSize = _ref.chunkSize,
         _ref$rerenderChildren = _ref.rerenderChildren,
         rerenderChildren = _ref$rerenderChildren === void 0 ? [] : _ref$rerenderChildren,
         onInsert = _ref.onInsert,
         onUpdate = _ref.onUpdate,
         onIndexChange = _ref.onIndexChange,
         debug = _ref.debug;
      var chunkTreeHelper = new ChunkTreeHelper(chunkTree, {
         chunkSize: chunkSize,
         debug: debug
      });
      var childrenHelper = new ChildrenHelper(editor, children);
      var treeLeaf;
      // Read leaves from the tree one by one, each one representing a single Slate
      // node. Each leaf from the tree is compared to the current node in the
      // children array to determine whether nodes have been inserted, removed or
      // updated.
      var _loop = function _loop() {
         // Check where the tree node appears in the children array. In the most
         // common case (where no insertions or removals have occurred), this will be
         // 0. If the node has been removed, this will be -1. If new nodes have been
         // inserted before the node, or if the node has been moved to a later
         // position in the same children array, this will be a positive number.
         var lookAhead = childrenHelper.lookAhead(treeLeaf.node, treeLeaf.key);
         // If the node was moved, we want to remove it and insert it later, rather
         // then re-inserting all intermediate nodes before it.
         var wasMoved = lookAhead > 0 && chunkTree.movedNodeKeys.has(treeLeaf.key);
         // If the tree leaf was moved or removed, remove it
         if (lookAhead === -1 || wasMoved) {
            chunkTreeHelper.remove();
            return 1; // continue
         }
         // Get the matching Slate node and any nodes that may have been inserted
         // prior to it. Insert these into the chunk tree.
         var insertedChildrenStartIndex = childrenHelper.pointerIndex;
         var insertedChildren = childrenHelper.read(lookAhead + 1);
         var matchingChild = insertedChildren.pop();
         if (insertedChildren.length) {
            var _leavesToInsert = childrenHelper.toChunkLeaves(
               insertedChildren,
               insertedChildrenStartIndex
            );
            chunkTreeHelper.insertBefore(_leavesToInsert);
            insertedChildren.forEach(function (node, relativeIndex) {
               onInsert === null ||
                  onInsert === void 0 ||
                  onInsert(node, insertedChildrenStartIndex + relativeIndex);
            });
         }
         var matchingChildIndex = childrenHelper.pointerIndex - 1;
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
            onIndexChange === null ||
               onIndexChange === void 0 ||
               onIndexChange(matchingChild, matchingChildIndex);
         }
         // Manually invalidate chunks containing specific children that we want to
         // re-render
         if (rerenderChildren.includes(matchingChildIndex)) {
            chunkTreeHelper.invalidateChunk();
         }
      };
      while ((treeLeaf = chunkTreeHelper.readLeaf())) {
         if (_loop()) continue;
      }
      // If there are still Slate nodes remaining from the children array that were
      // not matched to nodes in the tree, insert them at the end of the tree
      if (!childrenHelper.reachedEnd) {
         var remainingChildren = childrenHelper.remaining();
         var leavesToInsert = childrenHelper.toChunkLeaves(
            remainingChildren,
            childrenHelper.pointerIndex
         );
         // Move the pointer back to the final leaf in the tree, or the start of the
         // tree if the tree is currently empty
         chunkTreeHelper.returnToPreviousLeaf();
         chunkTreeHelper.insertAfter(leavesToInsert);
         remainingChildren.forEach(function (node, relativeIndex) {
            onInsert === null ||
               onInsert === void 0 ||
               onInsert(node, childrenHelper.pointerIndex + relativeIndex);
         });
      }
      chunkTree.movedNodeKeys.clear();
   };

   function ownKeys$2(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$2(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$2(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$2(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var KEY_TO_CHUNK_TREE = new WeakMap();
   /**
    * Get or create the chunk tree for a Slate node
    *
    * If the reconcile option is provided, the chunk tree will be updated to
    * match the current children of the node. The children are chunked
    * automatically using the given chunk size.
    */
   var getChunkTreeForNode = function getChunkTreeForNode(editor, node) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var key = ReactEditor.findKey(editor, node);
      var chunkTree = KEY_TO_CHUNK_TREE.get(key);
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
         reconcileChildren(
            editor,
            _objectSpread$2(
               {
                  chunkTree: chunkTree,
                  children: node.children
               },
               options.reconcile
            )
         );
      }
      return chunkTree;
   };

   function ownKeys$1(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread$1(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys$1(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys$1(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var defaultRenderChunk = function defaultRenderChunk(_ref) {
      var children = _ref.children;
      return children;
   };
   var ChunkAncestor = function ChunkAncestor(props) {
      var root = props.root,
         ancestor = props.ancestor,
         renderElement = props.renderElement,
         _props$renderChunk = props.renderChunk,
         renderChunk = _props$renderChunk === void 0 ? defaultRenderChunk : _props$renderChunk;
      return ancestor.children.map(function (chunkNode) {
         if (chunkNode.type === 'chunk') {
            var key = chunkNode.key.id;
            var renderedChunk = renderChunk({
               highest: ancestor === root,
               lowest: chunkNode.children.some(function (c) {
                  return c.type === 'leaf';
               }),
               attributes: {
                  'data-slate-chunk': true
               },
               children: /*#__PURE__*/ React.createElement(MemoizedChunk, {
                  root: root,
                  ancestor: chunkNode,
                  renderElement: renderElement,
                  renderChunk: renderChunk
               })
            });
            return /*#__PURE__*/ React.createElement(
               React.Fragment,
               {
                  key: key
               },
               renderedChunk
            );
         }
         // Only blocks containing no inlines are chunked
         var element = chunkNode.node;
         return renderElement(element, chunkNode.index, chunkNode.key);
      });
   };
   var ChunkTree = function ChunkTree(props) {
      // Clear the set of modified chunks only when React finishes rendering. The
      // timing of this is important in strict mode because if the chunks are
      // cleared during rendering (such as in reconcileChildren), strict mode's
      // second render won't include them.
      React.useEffect(function () {
         props.root.modifiedChunks.clear();
      });
      return /*#__PURE__*/ React.createElement(ChunkAncestor, _objectSpread$1({}, props));
   };
   var MemoizedChunk = /*#__PURE__*/ React.memo(ChunkAncestor, function (prev, next) {
      return (
         prev.root === next.root &&
         prev.renderElement === next.renderElement &&
         prev.renderChunk === next.renderChunk &&
         !next.root.modifiedChunks.has(next.ancestor)
      );
   });

   var ElementContext = /*#__PURE__*/ React.createContext(null);
   /**
    * Get the current element.
    */
   var useElement = function useElement() {
      var context = React.useContext(ElementContext);
      if (!context) {
         throw new Error('The `useElement` hook must be used inside `renderElement`.');
      }
      return context;
   };
   /**
    * Get the current element, or return null if not inside `renderElement`.
    */
   var useElementIf = function useElementIf() {
      return React.useContext(ElementContext);
   };

   /**
    * Children.
    */
   var useChildren = function useChildren(props) {
      var decorations = props.decorations,
         node = props.node,
         renderElement = props.renderElement,
         renderChunk = props.renderChunk,
         renderPlaceholder = props.renderPlaceholder,
         renderText = props.renderText,
         renderLeaf = props.renderLeaf;
      var editor = useSlateStatic();
      IS_NODE_MAP_DIRTY.set(editor, false);
      var isBlock = Node.isElement(node) && !editor.isInline(node);
      var isLeafBlock = isBlock && Editor.hasInlines(editor, node);
      var chunkSize = isLeafBlock ? null : editor.getChunkSize(node);
      var chunking = !!chunkSize;
      var _useDecorationsByChil = useDecorationsByChild(editor, node, decorations),
         decorationsByChild = _useDecorationsByChil.decorationsByChild,
         childrenToRedecorate = _useDecorationsByChil.childrenToRedecorate;
      // Update the index and parent of each child.
      // PERF: If chunking is enabled, this is done while traversing the chunk tree
      // instead to eliminate unnecessary weak map operations.
      if (!chunking) {
         node.children.forEach(function (n, i) {
            NODE_TO_INDEX.set(n, i);
            NODE_TO_PARENT.set(n, node);
         });
      }
      var renderElementComponent = React.useCallback(
         function (n, i, cachedKey) {
            var key =
               cachedKey !== null && cachedKey !== void 0
                  ? cachedKey
                  : ReactEditor.findKey(editor, n);
            return /*#__PURE__*/ React.createElement(
               ElementContext.Provider,
               {
                  key: 'provider-'.concat(key.id),
                  value: n
               },
               /*#__PURE__*/ React.createElement(MemoizedElement, {
                  decorations: decorationsByChild[i],
                  element: n,
                  key: key.id,
                  renderElement: renderElement,
                  renderChunk: renderChunk,
                  renderPlaceholder: renderPlaceholder,
                  renderLeaf: renderLeaf,
                  renderText: renderText
               })
            );
         },
         [
            editor,
            decorationsByChild,
            renderElement,
            renderChunk,
            renderPlaceholder,
            renderLeaf,
            renderText
         ]
      );
      var renderTextComponent = function renderTextComponent(n, i) {
         var key = ReactEditor.findKey(editor, n);
         return /*#__PURE__*/ React.createElement(MemoizedText, {
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
         return node.children.map(function (n, i) {
            return Node.isText(n) ? renderTextComponent(n, i) : renderElementComponent(n, i);
         });
      }
      var chunkTree = getChunkTreeForNode(editor, node, {
         reconcile: {
            chunkSize: chunkSize,
            rerenderChildren: childrenToRedecorate,
            onInsert: function onInsert(n, i) {
               NODE_TO_INDEX.set(n, i);
               NODE_TO_PARENT.set(n, node);
            },
            onUpdate: function onUpdate(n, i) {
               NODE_TO_INDEX.set(n, i);
               NODE_TO_PARENT.set(n, node);
            },
            onIndexChange: function onIndexChange(n, i) {
               NODE_TO_INDEX.set(n, i);
            }
         }
      });
      return /*#__PURE__*/ React.createElement(ChunkTree, {
         root: chunkTree,
         ancestor: chunkTree,
         renderElement: renderElementComponent,
         renderChunk: renderChunk
      });
   };
   var useDecorationsByChild = function useDecorationsByChild(editor, node, decorations) {
      var decorationsByChild = splitDecorationsByChild(editor, node, decorations);
      // The value we return is a mutable array of `DecoratedRange[]` arrays. This
      // lets us avoid passing an immutable array of decorations for each child into
      // `ChunkTree` using props. Each `DecoratedRange[]` is only updated if the
      // decorations at that index have changed, which speeds up the equality check
      // for the `decorations` prop in the memoized `Element` and `Text` components.
      var mutableDecorationsByChild = React.useRef(decorationsByChild).current;
      // Track the list of child indices whose decorations have changed, so that we
      // can tell the chunk tree to re-render these children.
      var childrenToRedecorate = [];
      // Resize the mutable array to match the latest result
      mutableDecorationsByChild.length = decorationsByChild.length;
      for (var i = 0; i < decorationsByChild.length; i++) {
         var _mutableDecorationsBy;
         var _decorations = decorationsByChild[i];
         var previousDecorations =
            (_mutableDecorationsBy = mutableDecorationsByChild[i]) !== null &&
            _mutableDecorationsBy !== void 0
               ? _mutableDecorationsBy
               : null;
         if (!isElementDecorationsEqual(previousDecorations, _decorations)) {
            mutableDecorationsByChild[i] = _decorations;
            childrenToRedecorate.push(i);
         }
      }
      return {
         decorationsByChild: mutableDecorationsByChild,
         childrenToRedecorate: childrenToRedecorate
      };
   };

   /**
    * A React context for sharing the `readOnly` state of the editor.
    */
   var ReadOnlyContext = /*#__PURE__*/ React.createContext(false);
   /**
    * Get the current `readOnly` state of the editor.
    */
   var useReadOnly = function useReadOnly() {
      return React.useContext(ReadOnlyContext);
   };

   /**
    * A React context for sharing the editor selector context in a way to control
    * re-renders.
    */
   var SlateSelectorContext = /*#__PURE__*/ React.createContext({});
   var refEquality = function refEquality(a, b) {
      return a === b;
   };
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
   function useSlateSelector(selector) {
      var equalityFn =
         arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : refEquality;
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
         deferred = _ref.deferred;
      var context = React.useContext(SlateSelectorContext);
      if (!context) {
         throw new Error(
            "The `useSlateSelector` hook must be used inside the <Slate> component's context."
         );
      }
      var addEventListener = context.addEventListener;
      var editor = useSlateStatic();
      var genericSelector = React.useCallback(
         function () {
            return selector(editor);
         },
         [editor, selector]
      );
      var _useGenericSelector = useGenericSelector(genericSelector, equalityFn),
         _useGenericSelector2 = _slicedToArray(_useGenericSelector, 2),
         selectedState = _useGenericSelector2[0],
         update = _useGenericSelector2[1];
      useIsomorphicLayoutEffect(
         function () {
            var unsubscribe = addEventListener(update, {
               deferred: deferred
            });
            update();
            return unsubscribe;
         },
         [addEventListener, update, deferred]
      );
      return selectedState;
   }
   /**
    * Create selector context with editor updating on every editor change
    */
   function useSelectorContext() {
      var eventListeners = React.useRef(new Set());
      var deferredEventListeners = React.useRef(new Set());
      var onChange = React.useCallback(function () {
         eventListeners.current.forEach(function (listener) {
            return listener();
         });
      }, []);
      var flushDeferred = React.useCallback(function () {
         deferredEventListeners.current.forEach(function (listener) {
            return listener();
         });
         deferredEventListeners.current.clear();
      }, []);
      var addEventListener = React.useCallback(function (callbackProp) {
         var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$deferred = _ref2.deferred,
            deferred = _ref2$deferred === void 0 ? false : _ref2$deferred;
         var callback = deferred
            ? function () {
                 return deferredEventListeners.current.add(callbackProp);
              }
            : callbackProp;
         eventListeners.current.add(callback);
         return function () {
            eventListeners.current['delete'](callback);
         };
      }, []);
      var selectorContext = React.useMemo(
         function () {
            return {
               addEventListener: addEventListener,
               flushDeferred: flushDeferred
            };
         },
         [addEventListener, flushDeferred]
      );
      return {
         selectorContext: selectorContext,
         onChange: onChange
      };
   }
   function useFlushDeferredSelectorsOnRender() {
      var _useContext = React.useContext(SlateSelectorContext),
         flushDeferred = _useContext.flushDeferred;
      useIsomorphicLayoutEffect(flushDeferred);
   }

   /**
    * Get the current editor object and re-render whenever it changes.
    */
   var useSlate = function useSlate() {
      var _useContext = React.useContext(SlateSelectorContext),
         addEventListener = _useContext.addEventListener;
      var _useReducer = React.useReducer(function (s) {
            return s + 1;
         }, 0),
         _useReducer2 = _slicedToArray(_useReducer, 2),
         forceRender = _useReducer2[1];
      if (!addEventListener) {
         throw new Error(
            "The `useSlate` hook must be used inside the <Slate> component's context."
         );
      }
      useIsomorphicLayoutEffect(
         function () {
            return addEventListener(forceRender);
         },
         [addEventListener]
      );
      return useSlateStatic();
   };
   var EDITOR_TO_V = new WeakMap();
   var getEditorVersionRef = function getEditorVersionRef(editor) {
      var v = EDITOR_TO_V.get(editor);
      if (v) {
         return v;
      }
      v = {
         current: 0
      };
      EDITOR_TO_V.set(editor, v);
      // Register the `onChange` handler exactly once per editor
      var onChange = editor.onChange;
      editor.onChange = function (options) {
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
   var useSlateWithV = function useSlateWithV() {
      var editor = useSlate();
      var vRef = React.useMemo(
         function () {
            return getEditorVersionRef(editor);
         },
         [editor]
      );
      return {
         editor: editor,
         v: vRef.current
      };
   };

   function useTrackUserInput() {
      var editor = useSlateStatic();
      var receivedUserInput = React.useRef(false);
      var animationFrameIdRef = React.useRef(0);
      var onUserInput = React.useCallback(
         function () {
            if (receivedUserInput.current) {
               return;
            }
            receivedUserInput.current = true;
            var window = ReactEditor.getWindow(editor);
            window.cancelAnimationFrame(animationFrameIdRef.current);
            animationFrameIdRef.current = window.requestAnimationFrame(function () {
               receivedUserInput.current = false;
            });
         },
         [editor]
      );
      React.useEffect(function () {
         return function () {
            return cancelAnimationFrame(animationFrameIdRef.current);
         };
      }, []);
      return {
         receivedUserInput: receivedUserInput,
         onUserInput: onUserInput
      };
   }

   var assertThisInitialized = createCommonjsModule(function (module) {
      function _assertThisInitialized(self) {
         if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
         }
         return self;
      }
      (module.exports = _assertThisInitialized),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _assertThisInitialized = unwrapExports(assertThisInitialized);

   var setPrototypeOf = createCommonjsModule(function (module) {
      function _setPrototypeOf(o, p) {
         (module.exports = _setPrototypeOf =
            Object.setPrototypeOf
               ? Object.setPrototypeOf.bind()
               : function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                 }),
            (module.exports.__esModule = true),
            (module.exports['default'] = module.exports);
         return _setPrototypeOf(o, p);
      }
      (module.exports = _setPrototypeOf),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   unwrapExports(setPrototypeOf);

   var inherits = createCommonjsModule(function (module) {
      function _inherits(subClass, superClass) {
         if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function');
         }
         subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
               value: subClass,
               writable: true,
               configurable: true
            }
         });
         Object.defineProperty(subClass, 'prototype', {
            writable: false
         });
         if (superClass) setPrototypeOf(subClass, superClass);
      }
      (module.exports = _inherits),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _inherits = unwrapExports(inherits);

   var possibleConstructorReturn = createCommonjsModule(function (module) {
      var _typeof = _typeof_1['default'];

      function _possibleConstructorReturn(self, call) {
         if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
            return call;
         } else if (call !== void 0) {
            throw new TypeError('Derived constructors may only return object or undefined');
         }
         return assertThisInitialized(self);
      }
      (module.exports = _possibleConstructorReturn),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

   var getPrototypeOf = createCommonjsModule(function (module) {
      function _getPrototypeOf(o) {
         (module.exports = _getPrototypeOf =
            Object.setPrototypeOf
               ? Object.getPrototypeOf.bind()
               : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                 }),
            (module.exports.__esModule = true),
            (module.exports['default'] = module.exports);
         return _getPrototypeOf(o);
      }
      (module.exports = _getPrototypeOf),
         (module.exports.__esModule = true),
         (module.exports['default'] = module.exports);
   });

   var _getPrototypeOf = unwrapExports(getPrototypeOf);

   var createRestoreDomManager = function createRestoreDomManager(editor, receivedUserInput) {
      var bufferedMutations = [];
      var clear = function clear() {
         bufferedMutations = [];
      };
      var registerMutations = function registerMutations(mutations) {
         var _bufferedMutations;
         if (!receivedUserInput.current) {
            return;
         }
         var trackedMutations = mutations.filter(function (mutation) {
            return isTrackedMutation(editor, mutation, mutations);
         });
         (_bufferedMutations = bufferedMutations).push.apply(
            _bufferedMutations,
            _toConsumableArray(trackedMutations)
         );
      };
      function restoreDOM() {
         if (bufferedMutations.length > 0) {
            bufferedMutations.reverse().forEach(function (mutation) {
               if (mutation.type === 'characterData') {
                  // We don't want to restore the DOM for characterData mutations
                  // because this interrupts the composition.
                  return;
               }
               mutation.removedNodes.forEach(function (node) {
                  mutation.target.insertBefore(node, mutation.nextSibling);
               });
               mutation.addedNodes.forEach(function (node) {
                  mutation.target.removeChild(node);
               });
            });
            // Clear buffered mutations to ensure we don't undo them twice
            clear();
         }
      }
      return {
         registerMutations: registerMutations,
         restoreDOM: restoreDOM,
         clear: clear
      };
   };

   function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
         var Super = _getPrototypeOf(Derived),
            result;
         if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
         } else {
            result = Super.apply(this, arguments);
         }
         return _possibleConstructorReturn(this, result);
      };
   }
   function _isNativeReflectConstruct() {
      if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === 'function') return true;
      try {
         Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
         return true;
      } catch (e) {
         return false;
      }
   }
   var MUTATION_OBSERVER_CONFIG = {
      subtree: true,
      childList: true,
      characterData: true,
      characterDataOldValue: true
   };
   // We have to use a class component here since we rely on `getSnapshotBeforeUpdate` which has no FC equivalent
   // to run code synchronously immediately before react commits the component update to the DOM.
   var RestoreDOMComponent = /*#__PURE__*/ (function (_Component) {
      _inherits(RestoreDOMComponent, _Component);
      var _super = _createSuper(RestoreDOMComponent);
      function RestoreDOMComponent() {
         var _this;
         _classCallCheck(this, RestoreDOMComponent);
         for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
         }
         _this = _super.call.apply(_super, [this].concat(args));
         _defineProperty$2(_assertThisInitialized(_this), 'context', null);
         _defineProperty$2(_assertThisInitialized(_this), 'manager', null);
         _defineProperty$2(_assertThisInitialized(_this), 'mutationObserver', null);
         return _this;
      }
      _createClass(RestoreDOMComponent, [
         {
            key: 'observe',
            value: function observe() {
               var _this$mutationObserve;
               var node = this.props.node;
               if (!node.current) {
                  throw new Error('Failed to attach MutationObserver, `node` is undefined');
               }
               (_this$mutationObserve = this.mutationObserver) === null ||
                  _this$mutationObserve === void 0 ||
                  _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG);
            }
         },
         {
            key: 'componentDidMount',
            value: function componentDidMount() {
               var receivedUserInput = this.props.receivedUserInput;
               var editor = this.context;
               this.manager = createRestoreDomManager(editor, receivedUserInput);
               // Пропатчено: https://online.sbis.ru/opendoc.html?guid=59c88f2c-2480-44d9-a799-91f809ffb019&client=3
               this.mutationObserver =
                  typeof MutationObserver !== 'undefined'
                     ? new MutationObserver(this.manager.registerMutations)
                     : null;
               this.observe();
            }
         },
         {
            key: 'getSnapshotBeforeUpdate',
            value: function getSnapshotBeforeUpdate() {
               var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
               var pendingMutations =
                  (_this$mutationObserve2 = this.mutationObserver) === null ||
                  _this$mutationObserve2 === void 0
                     ? void 0
                     : _this$mutationObserve2.takeRecords();
               if (
                  pendingMutations !== null &&
                  pendingMutations !== void 0 &&
                  pendingMutations.length
               ) {
                  var _this$manager;
                  (_this$manager = this.manager) === null ||
                     _this$manager === void 0 ||
                     _this$manager.registerMutations(pendingMutations);
               }
               (_this$mutationObserve3 = this.mutationObserver) === null ||
                  _this$mutationObserve3 === void 0 ||
                  _this$mutationObserve3.disconnect();
               (_this$manager2 = this.manager) === null ||
                  _this$manager2 === void 0 ||
                  _this$manager2.restoreDOM();
               return null;
            }
         },
         {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
               var _this$manager3;
               (_this$manager3 = this.manager) === null ||
                  _this$manager3 === void 0 ||
                  _this$manager3.clear();
               this.observe();
            }
         },
         {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
               var _this$mutationObserve4;
               (_this$mutationObserve4 = this.mutationObserver) === null ||
                  _this$mutationObserve4 === void 0 ||
                  _this$mutationObserve4.disconnect();
            }
         },
         {
            key: 'render',
            value: function render() {
               return this.props.children;
            }
         }
      ]);
      return RestoreDOMComponent;
   })(React.Component);
   _defineProperty$2(RestoreDOMComponent, 'contextType', EditorContext);
   var RestoreDOM = IS_ANDROID
      ? RestoreDOMComponent
      : function (_ref) {
           var children = _ref.children;
           return /*#__PURE__*/ React.createElement(React.Fragment, null, children);
        };

   /**
    * A React context for sharing the `composing` state of the editor.
    */
   var ComposingContext = /*#__PURE__*/ React.createContext(false);
   /**
    * Get the current `composing` state of the editor.
    */
   var useComposing = function useComposing() {
      return React.useContext(ComposingContext);
   };

   var _excluded$1 = [
         'autoFocus',
         'decorate',
         'onDOMBeforeInput',
         'placeholder',
         'readOnly',
         'renderElement',
         'renderChunk',
         'renderLeaf',
         'renderText',
         'renderPlaceholder',
         'scrollSelectionIntoView',
         'style',
         'as',
         'disableDefaultStyles',
         'scrollBoundary'
      ],
      _excluded2 = ['text'];
   function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
      if (!it) {
         if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
               s: F,
               n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
               },
               e: function e(_e) {
                  throw _e;
               },
               f: F
            };
         }
         throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
         );
      }
      var normalCompletion = true,
         didErr = false,
         err;
      return {
         s: function s() {
            it = it.call(o);
         },
         n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
         },
         e: function e(_e2) {
            didErr = true;
            err = _e2;
         },
         f: function f() {
            try {
               if (!normalCompletion && it['return'] != null) it['return']();
            } finally {
               if (didErr) throw err;
            }
         }
      };
   }
   function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === 'Object' && o.constructor) n = o.constructor.name;
      if (n === 'Map' || n === 'Set') return Array.from(o);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
         return _arrayLikeToArray(o, minLen);
   }
   function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
   }
   function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var o = Object.getOwnPropertySymbols(e);
         r &&
            (o = o.filter(function (r) {
               return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
      }
      return t;
   }
   function _objectSpread(e) {
      for (var r = 1; r < arguments.length; r++) {
         var t = null != arguments[r] ? arguments[r] : {};
         r % 2
            ? ownKeys(Object(t), true).forEach(function (r) {
                 _defineProperty$2(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                 Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
      }
      return e;
   }
   var Children = function Children(props) {
      return /*#__PURE__*/ React.createElement(React.Fragment, null, useChildren(props));
   };
   /**
    * Editable.
    */
   var Editable = /*#__PURE__*/ React.forwardRef(function (props, forwardedRef) {
      var defaultRenderPlaceholder = React.useCallback(function (props) {
         return /*#__PURE__*/ React.createElement(DefaultPlaceholder, _objectSpread({}, props));
      }, []);
      var autoFocus = props.autoFocus,
         _props$decorate = props.decorate,
         decorate = _props$decorate === void 0 ? defaultDecorate : _props$decorate,
         propsOnDOMBeforeInput = props.onDOMBeforeInput,
         placeholder = props.placeholder,
         _props$readOnly = props.readOnly,
         readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
         renderElement = props.renderElement,
         renderChunk = props.renderChunk,
         renderLeaf = props.renderLeaf,
         renderText = props.renderText,
         _props$renderPlacehol = props.renderPlaceholder,
         renderPlaceholder =
            _props$renderPlacehol === void 0 ? defaultRenderPlaceholder : _props$renderPlacehol,
         _props$scrollSelectio = props.scrollSelectionIntoView,
         scrollSelectionIntoView =
            _props$scrollSelectio === void 0
               ? defaultScrollSelectionIntoView
               : _props$scrollSelectio,
         // Пропатчено. Новая опция, прокидывается в scrollIntoView
         _props$scrollBoundary = props.scrollBoundary,
         scrollBoundary = _props$scrollBoundary === void 0 ? function () {} : _props$scrollBoundary,
         _props$style = props.style,
         userStyle = _props$style === void 0 ? {} : _props$style,
         _props$as = props.as,
         Component = _props$as === void 0 ? 'div' : _props$as,
         _props$disableDefault = props.disableDefaultStyles,
         disableDefaultStyles = _props$disableDefault === void 0 ? false : _props$disableDefault,
         attributes = _objectWithoutProperties$2(props, _excluded$1);
      var editor = useSlate();
      // Rerender editor when composition status changed
      var _useState = React.useState(false),
         _useState2 = _slicedToArray(_useState, 2),
         isComposing = _useState2[0],
         setIsComposing = _useState2[1];
      var ref = React.useRef(null);
      var deferredOperations = React.useRef([]);
      var _useState3 = React.useState(),
         _useState4 = _slicedToArray(_useState3, 2),
         placeholderHeight = _useState4[0],
         setPlaceholderHeight = _useState4[1];
      var processing = React.useRef(false);
      var _useTrackUserInput = useTrackUserInput(),
         onUserInput = _useTrackUserInput.onUserInput,
         receivedUserInput = _useTrackUserInput.receivedUserInput;
      var _useReducer = React.useReducer(function (s) {
            return s + 1;
         }, 0),
         _useReducer2 = _slicedToArray(_useReducer, 2),
         forceRender = _useReducer2[1];
      EDITOR_TO_FORCE_RENDER.set(editor, forceRender);
      // Update internal state on each render.
      IS_READ_ONLY.set(editor, readOnly);
      // Keep track of some state for the event handler logic.
      var state = React.useMemo(function () {
         return {
            isDraggingInternally: false,
            isUpdatingSelection: false,
            latestElement: null,
            hasMarkPlaceholder: false
         };
      }, []);
      // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
      // needs to be manually focused.
      //
      // If this stops working in Firefox, make sure nothing is causing this
      // component to re-render during the initial mount. If the DOM selection is
      // set by `useIsomorphicLayoutEffect` before `onDOMSelectionChange` updates
      // `editor.selection`, the DOM selection can be removed accidentally.
      React.useEffect(
         function () {
            if (ref.current && autoFocus) {
               ref.current.focus();
            }
         },
         [autoFocus]
      );
      /**
       * The AndroidInputManager object has a cyclical dependency on onDOMSelectionChange
       *
       * It is defined as a reference to simplify hook dependencies and clarify that
       * it needs to be initialized.
       */
      var androidInputManagerRef = React.useRef();
      // Listen on the native `selectionchange` event to be able to update any time
      // the selection changes. This is required because React's `onSelect` is leaky
      // and non-standard so it doesn't fire until after a selection has been
      // released. This causes issues in situations where another change happens
      // while a selection is being dragged.
      var onDOMSelectionChange = React.useMemo(
         function () {
            return throttle_1(function () {
               if (IS_NODE_MAP_DIRTY.get(editor)) {
                  onDOMSelectionChange();
                  return;
               }
               var el = ReactEditor.toDOMNode(editor, editor);
               var root = el.getRootNode();
               if (!processing.current && IS_WEBKIT && root instanceof ShadowRoot) {
                  processing.current = true;
                  var active = getActiveElement();
                  if (active) {
                     document.execCommand('indent');
                  } else {
                     Transforms.deselect(editor);
                  }
                  processing.current = false;
                  return;
               }
               var androidInputManager = androidInputManagerRef.current;
               if (
                  (IS_ANDROID || !ReactEditor.isComposing(editor)) &&
                  (!state.isUpdatingSelection ||
                     (androidInputManager !== null &&
                        androidInputManager !== void 0 &&
                        androidInputManager.isFlushing())) &&
                  !state.isDraggingInternally
               ) {
                  var _root = ReactEditor.findDocumentOrShadowRoot(editor);
                  var activeElement = _root.activeElement;
                  var _el = ReactEditor.toDOMNode(editor, editor);
                  var domSelection = getSelection(_root);
                  if (activeElement === _el) {
                     state.latestElement = activeElement;
                     IS_FOCUSED.set(editor, true);
                  } else {
                     IS_FOCUSED['delete'](editor);
                  }
                  if (!domSelection) {
                     return Transforms.deselect(editor);
                  }
                  var anchorNode = domSelection.anchorNode,
                     focusNode = domSelection.focusNode;
                  var anchorNodeSelectable =
                     ReactEditor.hasEditableTarget(editor, anchorNode) ||
                     ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
                  var focusNodeInEditor = ReactEditor.hasTarget(editor, focusNode);
                  if (anchorNodeSelectable && focusNodeInEditor) {
                     var range = ReactEditor.toSlateRange(editor, domSelection, {
                        exactMatch: false,
                        suppressThrow: true
                     });
                     if (range) {
                        if (
                           !ReactEditor.isComposing(editor) &&
                           !(
                              androidInputManager !== null &&
                              androidInputManager !== void 0 &&
                              androidInputManager.hasPendingChanges()
                           ) &&
                           !(
                              androidInputManager !== null &&
                              androidInputManager !== void 0 &&
                              androidInputManager.isFlushing()
                           )
                        ) {
                           Transforms.select(editor, range);
                        } else {
                           androidInputManager === null ||
                              androidInputManager === void 0 ||
                              androidInputManager.handleUserSelect(range);
                        }
                     }
                  }
                  // Deselect the editor if the dom selection is not selectable in readonly mode
                  if (readOnly && (!anchorNodeSelectable || !focusNodeInEditor)) {
                     Transforms.deselect(editor);
                  }
               }
            }, 100);
         },
         [editor, readOnly, state]
      );
      var scheduleOnDOMSelectionChange = React.useMemo(
         function () {
            return debounce_1(onDOMSelectionChange, 0);
         },
         [onDOMSelectionChange]
      );
      androidInputManagerRef.current = useAndroidInputManager({
         node: ref,
         onDOMSelectionChange: onDOMSelectionChange,
         scheduleOnDOMSelectionChange: scheduleOnDOMSelectionChange
      });
      useIsomorphicLayoutEffect(function () {
         var _androidInputManagerR, _androidInputManagerR2;
         // Update element-related weak maps with the DOM element ref.
         var window;
         if (ref.current && (window = getDefaultView(ref.current))) {
            EDITOR_TO_WINDOW.set(editor, window);
            EDITOR_TO_ELEMENT.set(editor, ref.current);
            NODE_TO_ELEMENT.set(editor, ref.current);
            ELEMENT_TO_NODE.set(ref.current, editor);
         } else {
            NODE_TO_ELEMENT['delete'](editor);
         }
         // Make sure the DOM selection state is in sync.
         var selection = editor.selection;
         var root = ReactEditor.findDocumentOrShadowRoot(editor);
         var domSelection = getSelection(root);
         if (
            !domSelection ||
            !ReactEditor.isFocused(editor) ||
            ((_androidInputManagerR = androidInputManagerRef.current) !== null &&
               _androidInputManagerR !== void 0 &&
               _androidInputManagerR.hasPendingAction())
         ) {
            return;
         }
         var setDomSelection = function setDomSelection(forceChange) {
            var hasDomSelection = domSelection.type !== 'None';
            // If the DOM selection is properly unset, we're done.
            if (!selection && !hasDomSelection) {
               return;
            }
            // Get anchorNode and focusNode
            var focusNode = domSelection.focusNode;
            var anchorNode;
            // COMPAT: In firefox the normal selection way does not work
            // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
            if (IS_FIREFOX && domSelection.rangeCount > 1) {
               var firstRange = domSelection.getRangeAt(0);
               var lastRange = domSelection.getRangeAt(domSelection.rangeCount - 1);
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
            var editorElement = EDITOR_TO_ELEMENT.get(editor);
            var hasDomSelectionInEditor = false;
            if (
               containsShadowAware(editorElement, anchorNode) &&
               containsShadowAware(editorElement, focusNode)
            ) {
               hasDomSelectionInEditor = true;
            }
            // If the DOM selection is in the editor and the editor selection is already correct, we're done.
            if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
               var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
                  exactMatch: true,
                  // domSelection is not necessarily a valid Slate range
                  // (e.g. when clicking on contentEditable:false element)
                  suppressThrow: true
               });
               if (slateRange && Range.equals(slateRange, selection)) {
                  var _anchorNode;
                  if (!state.hasMarkPlaceholder) {
                     return;
                  }
                  // Ensure selection is inside the mark placeholder
                  if (
                     (_anchorNode = anchorNode) !== null &&
                     _anchorNode !== void 0 &&
                     (_anchorNode = _anchorNode.parentElement) !== null &&
                     _anchorNode !== void 0 &&
                     _anchorNode.hasAttribute('data-slate-mark-placeholder')
                  ) {
                     return;
                  }
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
            // Otherwise the DOM selection is out of sync, so update it.
            state.isUpdatingSelection = true;
            var newDomRange = null;
            try {
               newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
            } catch (e) {
               // Ignore, dom and state might be out of sync
            }
            if (newDomRange) {
               if (ReactEditor.isComposing(editor) && !IS_ANDROID) {
                  domSelection.collapseToEnd();
               } else if (Range.isBackward(selection)) {
                  domSelection.setBaseAndExtent(
                     newDomRange.endContainer,
                     newDomRange.endOffset,
                     newDomRange.startContainer,
                     newDomRange.startOffset
                  );
               } else {
                  domSelection.setBaseAndExtent(
                     newDomRange.startContainer,
                     newDomRange.startOffset,
                     newDomRange.endContainer,
                     newDomRange.endOffset
                  );
               }
               // пропатчено
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
         var ensureSelection =
            ((_androidInputManagerR2 = androidInputManagerRef.current) === null ||
            _androidInputManagerR2 === void 0
               ? void 0
               : _androidInputManagerR2.isFlushing()) === 'action';
         if (!IS_ANDROID || !ensureSelection) {
            setTimeout(function () {
               state.isUpdatingSelection = false;
            });
            return;
         }
         var timeoutId = null;
         var animationFrameId = requestAnimationFrame(function () {
            if (ensureSelection) {
               var ensureDomSelection = function ensureDomSelection(forceChange) {
                  try {
                     var el = ReactEditor.toDOMNode(editor, editor);
                     el.focus();
                     setDomSelection(forceChange);
                  } catch (e) {
                     // Ignore, dom and state might be out of sync
                  }
               };
               // Compat: Android IMEs try to force their selection by manually re-applying it even after we set it.
               // This essentially would make setting the slate selection during an update meaningless, so we force it
               // again here. We can't only do it in the setTimeout after the animation frame since that would cause a
               // visible flicker.
               ensureDomSelection();
               timeoutId = setTimeout(function () {
                  // COMPAT: While setting the selection in an animation frame visually correctly sets the selection,
                  // it doesn't update GBoards spellchecker state. We have to manually trigger a selection change after
                  // the animation frame to ensure it displays the correct state.
                  ensureDomSelection(true);
                  state.isUpdatingSelection = false;
               });
            }
         });
         return function () {
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
      var onDOMBeforeInput = React.useCallback(
         function (event) {
            handleNativeHistoryEvents(editor, event);
            var el = ReactEditor.toDOMNode(editor, editor);
            var root = el.getRootNode();
            if (
               processing !== null &&
               processing !== void 0 &&
               processing.current &&
               IS_WEBKIT &&
               root instanceof ShadowRoot
            ) {
               var ranges = event.getTargetRanges();
               var range = ranges[0];
               var newRange = new window.Range();
               newRange.setStart(range.startContainer, range.startOffset);
               newRange.setEnd(range.endContainer, range.endOffset);
               // Translate the DOM Range into a Slate Range
               var slateRange = ReactEditor.toSlateRange(editor, newRange, {
                  exactMatch: false,
                  suppressThrow: false
               });
               Transforms.select(editor, slateRange);
               event.preventDefault();
               event.stopImmediatePropagation();
               return;
            }
            onUserInput();
            if (
               !readOnly &&
               ReactEditor.hasEditableTarget(editor, event.target) &&
               !isDOMEventHandled(event, propsOnDOMBeforeInput)
            ) {
               var _EDITOR_TO_USER_SELEC;
               // COMPAT: BeforeInput events aren't cancelable on android, so we have to handle them differently using the android input manager.
               if (androidInputManagerRef.current) {
                  return androidInputManagerRef.current.handleDOMBeforeInput(event);
               }
               // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
               // triggering a `beforeinput` expecting the change to be applied to the immediately before
               // set selection.
               scheduleOnDOMSelectionChange.flush();
               onDOMSelectionChange.flush();
               var selection = editor.selection;
               var type = event.inputType;
               var data = event.dataTransfer || event.data || undefined;
               var isCompositionChange =
                  type === 'insertCompositionText' || type === 'deleteCompositionText';
               // COMPAT: use composition change events as a hint to where we should insert
               // composition text if we aren't composing to work around https://github.com/ianstormtaylor/slate/issues/5038
               if (isCompositionChange && ReactEditor.isComposing(editor)) {
                  return;
               }
               var _native = false;
               if (
                  type === 'insertText' &&
                  selection &&
                  Range.isCollapsed(selection) &&
                  // Only use native character insertion for single characters a-z or space for now.
                  // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
                  // causes duplicate inserts.
                  event.data &&
                  event.data.length === 1 &&
                  // ПРОПАТЧЕНО. https://github.com/ianstormtaylor/slate/issues/4320
                  // Slate перерисовывает строковые ноды, если вводят буквы, отличные от латинских.
                  /[a-zа-я\d-.?!)(,: ]/i.test(event.data) &&
                  // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
                  // When there is an inline element, e.g. a link, and you select
                  // right after it (the start of the next node).
                  selection.anchor.offset !== 0
               ) {
                  _native = true;
                  // Skip native if there are marks, as
                  // `insertText` will insert a node, not just text.
                  if (editor.marks) {
                     _native = false;
                  }
                  // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint)
                  if (!IS_NODE_MAP_DIRTY.get(editor)) {
                     var _node$parentElement, _window$getComputedSt;
                     // Chrome also has issues correctly editing the end of anchor elements: https://bugs.chromium.org/p/chromium/issues/detail?id=1259100
                     // Therefore we don't allow native events to insert text at the end of anchor nodes.
                     var anchor = selection.anchor;
                     var _ReactEditor$toDOMPoi = ReactEditor.toDOMPoint(editor, anchor),
                        _ReactEditor$toDOMPoi2 = _slicedToArray(_ReactEditor$toDOMPoi, 2),
                        node = _ReactEditor$toDOMPoi2[0],
                        offset = _ReactEditor$toDOMPoi2[1];
                     var anchorNode =
                        (_node$parentElement = node.parentElement) === null ||
                        _node$parentElement === void 0
                           ? void 0
                           : _node$parentElement.closest('a');
                     var _window = ReactEditor.getWindow(editor);
                     if (_native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
                        var _lastText$textContent;
                        // Find the last text node inside the anchor.
                        var lastText =
                           _window === null || _window === void 0
                              ? void 0
                              : _window.document
                                   .createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT)
                                   .lastChild();
                        if (
                           lastText === node &&
                           ((_lastText$textContent = lastText.textContent) === null ||
                           _lastText$textContent === void 0
                              ? void 0
                              : _lastText$textContent.length) === offset
                        ) {
                           _native = false;
                        }
                     }
                     // Chrome has issues with the presence of tab characters inside elements with whiteSpace = 'pre'
                     // causing abnormal insert behavior: https://bugs.chromium.org/p/chromium/issues/detail?id=1219139
                     if (
                        _native &&
                        node.parentElement &&
                        (_window === null ||
                        _window === void 0 ||
                        (_window$getComputedSt = _window.getComputedStyle(node.parentElement)) ===
                           null ||
                        _window$getComputedSt === void 0
                           ? void 0
                           : _window$getComputedSt.whiteSpace) === 'pre'
                     ) {
                        var block = Editor.above(editor, {
                           at: anchor.path,
                           match: function match(n) {
                              return Node.isElement(n) && Editor.isBlock(editor, n);
                           }
                        });
                        if (block && Node.string(block[0]).includes('\t')) {
                           _native = false;
                        }
                     }
                  }
               }
               // COMPAT: For the deleting forward/backward input types we don't want
               // to change the selection because it is the range that will be deleted,
               // and those commands determine that for themselves.
               // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint via ReactEditor.toSlateRange)
               if (
                  (!type.startsWith('delete') || type.startsWith('deleteBy')) &&
                  !IS_NODE_MAP_DIRTY.get(editor)
               ) {
                  var _event$getTargetRange = event.getTargetRanges(),
                     _event$getTargetRange2 = _slicedToArray(_event$getTargetRange, 1),
                     targetRange = _event$getTargetRange2[0];
                  if (targetRange) {
                     var _range = ReactEditor.toSlateRange(editor, targetRange, {
                        exactMatch: false,
                        suppressThrow: false
                     });
                     if (!selection || !Range.equals(selection, _range)) {
                        _native = false;
                        var selectionRef =
                           !isCompositionChange &&
                           editor.selection &&
                           Editor.rangeRef(editor, editor.selection);
                        Transforms.select(editor, _range);
                        if (selectionRef) {
                           EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
                        }
                     }
                  }
               }
               // Composition change types occur while a user is composing text and can't be
               // cancelled. Let them through and wait for the composition to end.
               if (isCompositionChange) {
                  return;
               }
               if (!_native) {
                  event.preventDefault();
               }
               // COMPAT: If the selection is expanded, even if the command seems like
               // a delete forward/backward command it should delete the selection.
               if (selection && Range.isExpanded(selection) && type.startsWith('delete')) {
                  var direction = type.endsWith('Backward') ? 'backward' : 'forward';
                  Editor.deleteFragment(editor, {
                     direction: direction
                  });
                  return;
               }
               switch (type) {
                  case 'deleteByComposition':
                  case 'deleteByCut':
                  case 'deleteByDrag': {
                     Editor.deleteFragment(editor);
                     break;
                  }
                  case 'deleteContent':
                  case 'deleteContentForward': {
                     Editor.deleteForward(editor);
                     break;
                  }
                  case 'deleteContentBackward': {
                     Editor.deleteBackward(editor);
                     break;
                  }
                  case 'deleteEntireSoftLine': {
                     Editor.deleteBackward(editor, {
                        unit: 'line'
                     });
                     Editor.deleteForward(editor, {
                        unit: 'line'
                     });
                     break;
                  }
                  case 'deleteHardLineBackward': {
                     Editor.deleteBackward(editor, {
                        unit: 'block'
                     });
                     break;
                  }
                  case 'deleteSoftLineBackward': {
                     Editor.deleteBackward(editor, {
                        unit: 'line'
                     });
                     break;
                  }
                  case 'deleteHardLineForward': {
                     Editor.deleteForward(editor, {
                        unit: 'block'
                     });
                     break;
                  }
                  case 'deleteSoftLineForward': {
                     Editor.deleteForward(editor, {
                        unit: 'line'
                     });
                     break;
                  }
                  case 'deleteWordBackward': {
                     Editor.deleteBackward(editor, {
                        unit: 'word'
                     });
                     break;
                  }
                  case 'deleteWordForward': {
                     Editor.deleteForward(editor, {
                        unit: 'word'
                     });
                     break;
                  }
                  case 'insertLineBreak':
                     Editor.insertSoftBreak(editor);
                     break;
                  case 'insertParagraph': {
                     Editor.insertBreak(editor);
                     break;
                  }
                  case 'insertFromComposition':
                  case 'insertFromDrop':
                  case 'insertFromPaste':
                  case 'insertFromYank':
                  case 'insertReplacementText':
                  case 'insertText': {
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
                     if (
                        (data === null || data === void 0 ? void 0 : data.constructor.name) ===
                        'DataTransfer'
                     ) {
                        ReactEditor.insertData(editor, data);
                     } else if (typeof data === 'string') {
                        // Only insertText operations use the native functionality, for now.
                        // Potentially expand to single character deletes, as well.
                        if (_native) {
                           deferredOperations.current.push(function () {
                              return Editor.insertText(editor, data);
                           });
                        } else {
                           Editor.insertText(editor, data);
                        }
                     }
                     break;
                  }
               }
               // Restore the actual user section if nothing manually set it.
               var toRestore =
                  (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(editor)) === null ||
                  _EDITOR_TO_USER_SELEC === void 0
                     ? void 0
                     : _EDITOR_TO_USER_SELEC.unref();
               EDITOR_TO_USER_SELECTION['delete'](editor);
               if (toRestore && (!editor.selection || !Range.equals(editor.selection, toRestore))) {
                  Transforms.select(editor, toRestore);
               }
            }
         },
         [
            editor,
            onDOMSelectionChange,
            onUserInput,
            propsOnDOMBeforeInput,
            readOnly,
            scheduleOnDOMSelectionChange
         ]
      );
      var callbackRef = React.useCallback(
         function (node) {
            if (node == null) {
               onDOMSelectionChange.cancel();
               scheduleOnDOMSelectionChange.cancel();
               EDITOR_TO_ELEMENT['delete'](editor);
               NODE_TO_ELEMENT['delete'](editor);
               if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
                  // @ts-ignore The `beforeinput` event isn't recognized.
                  ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
               }
               //console.warn('callbackRef node == null');
            } else {
               // Attach a native DOM event handler for `beforeinput` events, because React's
               // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
               // real `beforeinput` events sadly... (2019/11/04)
               // https://github.com/facebook/react/issues/11211
               if (HAS_BEFORE_INPUT_SUPPORT) {
                  // @ts-ignore The `beforeinput` event isn't recognized.
                  node.addEventListener('beforeinput', onDOMBeforeInput);
                  // console.warn('callbackRef add beforeinput');
               }
            }
            ref.current = node;
            if (typeof forwardedRef === 'function') {
               forwardedRef(node);
            } else if (forwardedRef) {
               forwardedRef.current = node;
            }
         },
         [
            onDOMSelectionChange,
            scheduleOnDOMSelectionChange,
            editor,
            onDOMBeforeInput,
            forwardedRef
         ]
      );
      useIsomorphicLayoutEffect(
         function () {
            var window = ReactEditor.getWindow(editor);
            // COMPAT: In Chrome, `selectionchange` events can fire when <input> and
            // <textarea> elements are appended to the DOM, causing
            // `editor.selection` to be overwritten in some circumstances.
            // (2025/01/16) https://issues.chromium.org/issues/389368412
            var onSelectionChange = function onSelectionChange(_ref) {
               var target = _ref.target;
               var targetElement = target instanceof HTMLElement ? target : null;
               var targetTagName =
                  targetElement === null || targetElement === void 0
                     ? void 0
                     : targetElement.tagName;
               if (targetTagName === 'INPUT' || targetTagName === 'TEXTAREA') {
                  return;
               }
               scheduleOnDOMSelectionChange();
            };
            // Attach a native DOM event handler for `selectionchange`, because React's
            // built-in `onSelect` handler doesn't fire for all selection changes. It's
            // a leaky polyfill that only fires on keypresses or clicks. Instead, we
            // want to fire for any change to the selection inside the editor.
            // (2019/11/04) https://github.com/facebook/react/issues/5785
            window.document.addEventListener('selectionchange', onSelectionChange);
            // Listen for dragend and drop globally. In Firefox, if a drop handler
            // initiates an operation that causes the originally dragged element to
            // unmount, that element will not emit a dragend event. (2024/06/21)
            var stoppedDragging = function stoppedDragging() {
               state.isDraggingInternally = false;
            };
            window.document.addEventListener('dragend', stoppedDragging);
            window.document.addEventListener('drop', stoppedDragging);
            return function () {
               window.document.removeEventListener('selectionchange', onSelectionChange);
               window.document.removeEventListener('dragend', stoppedDragging);
               window.document.removeEventListener('drop', stoppedDragging);
            };
         },
         [scheduleOnDOMSelectionChange, state]
      );
      var decorations = decorate([editor, []]);
      var decorateContext = useDecorateContext(decorate);
      var showPlaceholder =
         placeholder &&
         editor.children.length === 1 &&
         Array.from(Node.texts(editor)).length === 1 &&
         Node.string(editor) === '' &&
         !isComposing;
      var placeHolderResizeHandler = React.useCallback(
         function (placeholderEl) {
            if (placeholderEl && showPlaceholder) {
               var _placeholderEl$getBou;
               setPlaceholderHeight(
                  (_placeholderEl$getBou = placeholderEl.getBoundingClientRect()) === null ||
                     _placeholderEl$getBou === void 0
                     ? void 0
                     : _placeholderEl$getBou.height
               );
            } else {
               setPlaceholderHeight(undefined);
            }
         },
         [showPlaceholder]
      );
      if (showPlaceholder) {
         var _decorations$push;
         var start = Editor.start(editor, []);
         decorations.push(
            ((_decorations$push = {}),
            _defineProperty$2(_decorations$push, PLACEHOLDER_SYMBOL, true),
            _defineProperty$2(_decorations$push, 'placeholder', placeholder),
            _defineProperty$2(_decorations$push, 'onPlaceholderResize', placeHolderResizeHandler),
            _defineProperty$2(_decorations$push, 'anchor', start),
            _defineProperty$2(_decorations$push, 'focus', start),
            _decorations$push)
         );
      }
      var marks = editor.marks;
      state.hasMarkPlaceholder = false;
      if (editor.selection && Range.isCollapsed(editor.selection) && marks) {
         var anchor = editor.selection.anchor;
         var leaf = Node.leaf(editor, anchor.path);
         leaf.text;
         var rest = _objectWithoutProperties$2(leaf, _excluded2);
         // While marks isn't a 'complete' text, we can still use loose Text.equals
         // here which only compares marks anyway.
         if (
            !Text$1.equals(leaf, marks, {
               loose: true
            })
         ) {
            state.hasMarkPlaceholder = true;
            var unset = Object.fromEntries(
               Object.keys(rest).map(function (mark) {
                  return [mark, null];
               })
            );
            decorations.push(
               _objectSpread(
                  _objectSpread(
                     _objectSpread(_defineProperty$2({}, MARK_PLACEHOLDER_SYMBOL, true), unset),
                     marks
                  ),
                  {},
                  {
                     anchor: anchor,
                     focus: anchor
                  }
               )
            );
         }
      }
      // Update EDITOR_TO_MARK_PLACEHOLDER_MARKS in setTimeout useEffect to ensure we don't set it
      // before we receive the composition end event.
      React.useEffect(function () {
         setTimeout(function () {
            var selection = editor.selection;
            if (selection) {
               var _anchor = selection.anchor;
               var _text = Node.leaf(editor, _anchor.path);
               // While marks isn't a 'complete' text, we can still use loose Text.equals
               // here which only compares marks anyway.
               if (
                  marks &&
                  !Text$1.equals(_text, marks, {
                     loose: true
                  })
               ) {
                  EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks);
                  return;
               }
            }
            EDITOR_TO_PENDING_INSERTION_MARKS['delete'](editor);
         });
      });
      useFlushDeferredSelectorsOnRender();
      return /*#__PURE__*/ React.createElement(
         ReadOnlyContext.Provider,
         {
            value: readOnly
         },
         /*#__PURE__*/ React.createElement(
            ComposingContext.Provider,
            {
               value: isComposing
            },
            /*#__PURE__*/ React.createElement(
               DecorateContext.Provider,
               {
                  value: decorateContext
               },
               /*#__PURE__*/ React.createElement(
                  RestoreDOM,
                  {
                     node: ref,
                     receivedUserInput: receivedUserInput
                  },
                  /*#__PURE__*/ React.createElement(
                     Component,
                     _objectSpread(
                        _objectSpread(
                           {
                              role: readOnly ? undefined : 'textbox',
                              'aria-multiline': readOnly ? undefined : true,
                              translate: 'no'
                           },
                           attributes
                        ),
                        {},
                        {
                           // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
                           // have to use hacks to make these replacement-based features work.
                           // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
                           // mismatch warning app moves to browser. Pass-through consumer props when
                           // not CAN_USE_DOM (SSR) and default to falsy value
                           spellCheck:
                              HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM
                                 ? attributes.spellCheck
                                 : false,
                           autoCorrect:
                              HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM
                                 ? attributes.autoCorrect
                                 : 'false',
                           autoCapitalize:
                              HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM
                                 ? attributes.autoCapitalize
                                 : 'false',
                           'data-slate-editor': true,
                           'data-slate-node': 'value',
                           // explicitly set this
                           contentEditable: !readOnly,
                           // in some cases, a decoration needs access to the range / selection to decorate a text node,
                           // then you will select the whole text node when you select part the of text
                           // this magic zIndex="-1" will fix it
                           zindex: -1,
                           suppressContentEditableWarning: true,
                           ref: callbackRef,
                           style: _objectSpread(
                              _objectSpread(
                                 {},
                                 disableDefaultStyles
                                    ? {}
                                    : _objectSpread(
                                         {
                                            // Allow positioning relative to the editable element.
                                            position: 'relative',
                                            // Preserve adjacent whitespace and new lines.
                                            whiteSpace: 'pre-wrap',
                                            // Allow words to break if they are too long.
                                            wordWrap: 'break-word'
                                         },
                                         placeholderHeight
                                            ? {
                                                 minHeight: placeholderHeight
                                              }
                                            : {}
                                      )
                              ),
                              userStyle
                           ),
                           onBeforeInput: React.useCallback(
                              function (event) {
                                 // COMPAT: Certain browsers don't support the `beforeinput` event, so we
                                 // fall back to React's leaky polyfill instead just for it. It
                                 // only works for the `insertText` input type.
                                 if (
                                    !HAS_BEFORE_INPUT_SUPPORT &&
                                    !readOnly &&
                                    !isEventHandled(event, attributes.onBeforeInput) &&
                                    ReactEditor.hasSelectableTarget(editor, event.target)
                                 ) {
                                    event.preventDefault();
                                    if (!ReactEditor.isComposing(editor)) {
                                       var _text2 = event.data;
                                       Editor.insertText(editor, _text2);
                                    }
                                 }
                              },
                              [attributes.onBeforeInput, editor, readOnly]
                           ),
                           onInput: React.useCallback(
                              function (event) {
                                 if (isEventHandled(event, attributes.onInput)) {
                                    return;
                                 }
                                 if (androidInputManagerRef.current) {
                                    androidInputManagerRef.current.handleInput();
                                    return;
                                 }
                                 // Flush native operations, as native events will have propogated
                                 // and we can correctly compare DOM text values in components
                                 // to stop rendering, so that browser functions like autocorrect
                                 // and spellcheck work as expected.
                                 var _iterator = _createForOfIteratorHelper(
                                       deferredOperations.current
                                    ),
                                    _step;
                                 try {
                                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                       var op = _step.value;
                                       op();
                                    }
                                 } catch (err) {
                                    _iterator.e(err);
                                 } finally {
                                    _iterator.f();
                                 }
                                 deferredOperations.current = [];
                                 // COMPAT: Since `beforeinput` doesn't fully `preventDefault`,
                                 // there's a chance that content might be placed in the browser's undo stack.
                                 // This means undo can be triggered even when the div is not focused,
                                 // and it only triggers the input event for the node. (2024/10/09)
                                 if (!ReactEditor.isFocused(editor)) {
                                    handleNativeHistoryEvents(editor, event.nativeEvent);
                                 }
                              },
                              [attributes.onInput, editor]
                           ),
                           onBlur: React.useCallback(
                              function (event) {
                                 if (
                                    readOnly ||
                                    state.isUpdatingSelection ||
                                    !ReactEditor.hasSelectableTarget(editor, event.target) ||
                                    isEventHandled(event, attributes.onBlur)
                                 ) {
                                    return;
                                 }
                                 // COMPAT: If the current `activeElement` is still the previous
                                 // one, this is due to the window being blurred when the tab
                                 // itself becomes unfocused, so we want to abort early to allow to
                                 // editor to stay focused when the tab becomes focused again.
                                 var root = ReactEditor.findDocumentOrShadowRoot(editor);
                                 if (state.latestElement === root.activeElement) {
                                    return;
                                 }
                                 var relatedTarget = event.relatedTarget;
                                 var el = ReactEditor.toDOMNode(editor, editor);
                                 // COMPAT: The event should be ignored if the focus is returning
                                 // to the editor from an embedded editable element (eg. an <input>
                                 // element inside a void node).
                                 if (relatedTarget === el) {
                                    return;
                                 }
                                 // COMPAT: The event should be ignored if the focus is moving from
                                 // the editor to inside a void node's spacer element.
                                 if (
                                    isDOMElement(relatedTarget) &&
                                    relatedTarget.hasAttribute('data-slate-spacer')
                                 ) {
                                    return;
                                 }
                                 // COMPAT: The event should be ignored if the focus is moving to a
                                 // non- editable section of an element that isn't a void node (eg.
                                 // a list item of the check list example).
                                 if (
                                    relatedTarget != null &&
                                    isDOMNode(relatedTarget) &&
                                    ReactEditor.hasDOMNode(editor, relatedTarget)
                                 ) {
                                    var node = ReactEditor.toSlateNode(editor, relatedTarget);
                                    if (Node.isElement(node) && !editor.isVoid(node)) {
                                       return;
                                    }
                                 }
                                 // COMPAT: Safari doesn't always remove the selection even if the content-
                                 // editable element no longer has focus. Refer to:
                                 // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web
                                 if (IS_WEBKIT) {
                                    var domSelection = getSelection(root);
                                    domSelection === null ||
                                       domSelection === void 0 ||
                                       domSelection.removeAllRanges();
                                 }
                                 IS_FOCUSED['delete'](editor);
                              },
                              [
                                 readOnly,
                                 state.isUpdatingSelection,
                                 state.latestElement,
                                 editor,
                                 attributes.onBlur
                              ]
                           ),
                           onClick: React.useCallback(
                              function (event) {
                                 if (
                                    ReactEditor.hasTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onClick) &&
                                    isDOMNode(event.target)
                                 ) {
                                    var node = ReactEditor.toSlateNode(editor, event.target);
                                    var path = ReactEditor.findPath(editor, node);
                                    // At this time, the Slate document may be arbitrarily different,
                                    // because onClick handlers can change the document before we get here.
                                    // Therefore we must check that this path actually exists,
                                    // and that it still refers to the same node.
                                    if (
                                       !Editor.hasPath(editor, path) ||
                                       Node.get(editor, path) !== node
                                    ) {
                                       return;
                                    }
                                    if (event.detail === TRIPLE_CLICK && path.length >= 1) {
                                       var blockPath = path;
                                       if (
                                          !(Node.isElement(node) && Editor.isBlock(editor, node))
                                       ) {
                                          var _block$;
                                          var block = Editor.above(editor, {
                                             match: function match(n) {
                                                return (
                                                   Node.isElement(n) && Editor.isBlock(editor, n)
                                                );
                                             },
                                             at: path
                                          });
                                          blockPath =
                                             (_block$ =
                                                block === null || block === void 0
                                                   ? void 0
                                                   : block[1]) !== null && _block$ !== void 0
                                                ? _block$
                                                : path.slice(0, 1);
                                       }
                                       var range = Editor.range(editor, blockPath);
                                       Transforms.select(editor, range);
                                       return;
                                    }
                                    if (readOnly) {
                                       return;
                                    }
                                    var _start = Editor.start(editor, path);
                                    var end = Editor.end(editor, path);
                                    var startVoid = Editor['void'](editor, {
                                       at: _start
                                    });
                                    var endVoid = Editor['void'](editor, {
                                       at: end
                                    });
                                    if (
                                       startVoid &&
                                       endVoid &&
                                       Path.equals(startVoid[1], endVoid[1])
                                    ) {
                                       var _range2 = Editor.range(editor, _start);
                                       Transforms.select(editor, _range2);
                                    }
                                 }
                              },
                              [editor, attributes.onClick, readOnly]
                           ),
                           onCompositionEnd: React.useCallback(
                              function (event) {
                                 if (isDOMEventTargetInput(event)) {
                                    return;
                                 }
                                 if (ReactEditor.hasSelectableTarget(editor, event.target)) {
                                    var _androidInputManagerR3;
                                    if (ReactEditor.isComposing(editor)) {
                                       Promise.resolve().then(function () {
                                          setIsComposing(false);
                                          IS_COMPOSING.set(editor, false);
                                       });
                                    }
                                    (_androidInputManagerR3 = androidInputManagerRef.current) ===
                                       null ||
                                       _androidInputManagerR3 === void 0 ||
                                       _androidInputManagerR3.handleCompositionEnd(event);
                                    if (
                                       isEventHandled(event, attributes.onCompositionEnd) ||
                                       IS_ANDROID
                                    ) {
                                       return;
                                    }
                                    // COMPAT: In Chrome, `beforeinput` events for compositions
                                    // aren't correct and never fire the "insertFromComposition"
                                    // type that we need. So instead, insert whenever a composition
                                    // ends since it will already have been committed to the DOM.
                                    if (
                                       !IS_WEBKIT &&
                                       !IS_FIREFOX_LEGACY &&
                                       !IS_IOS &&
                                       !IS_WECHATBROWSER &&
                                       !IS_UC_MOBILE &&
                                       event.data
                                    ) {
                                       var placeholderMarks =
                                          EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
                                       EDITOR_TO_PENDING_INSERTION_MARKS['delete'](editor);
                                       // Ensure we insert text with the marks the user was actually seeing
                                       if (placeholderMarks !== undefined) {
                                          EDITOR_TO_USER_MARKS.set(editor, editor.marks);
                                          editor.marks = placeholderMarks;
                                       }
                                       Editor.insertText(editor, event.data);
                                       var userMarks = EDITOR_TO_USER_MARKS.get(editor);
                                       EDITOR_TO_USER_MARKS['delete'](editor);
                                       if (userMarks !== undefined) {
                                          editor.marks = userMarks;
                                       }
                                    }
                                 }
                              },
                              [attributes.onCompositionEnd, editor]
                           ),
                           onCompositionUpdate: React.useCallback(
                              function (event) {
                                 if (
                                    ReactEditor.hasSelectableTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onCompositionUpdate) &&
                                    !isDOMEventTargetInput(event)
                                 ) {
                                    if (!ReactEditor.isComposing(editor)) {
                                       setIsComposing(true);
                                       IS_COMPOSING.set(editor, true);
                                    }
                                 }
                              },
                              [attributes.onCompositionUpdate, editor]
                           ),
                           onCompositionStart: React.useCallback(
                              function (event) {
                                 if (isDOMEventTargetInput(event)) {
                                    return;
                                 }
                                 if (ReactEditor.hasSelectableTarget(editor, event.target)) {
                                    var _androidInputManagerR4;
                                    (_androidInputManagerR4 = androidInputManagerRef.current) ===
                                       null ||
                                       _androidInputManagerR4 === void 0 ||
                                       _androidInputManagerR4.handleCompositionStart(event);
                                    if (
                                       isEventHandled(event, attributes.onCompositionStart) ||
                                       IS_ANDROID
                                    ) {
                                       return;
                                    }
                                    setIsComposing(true);
                                    var selection = editor.selection;
                                    if (selection && Range.isExpanded(selection)) {
                                       Editor.deleteFragment(editor);
                                       return;
                                    }
                                 }
                              },
                              [attributes.onCompositionStart, editor]
                           ),
                           onCopy: React.useCallback(
                              function (event) {
                                 if (
                                    ReactEditor.hasSelectableTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onCopy) &&
                                    !isDOMEventTargetInput(event)
                                 ) {
                                    event.preventDefault();
                                    ReactEditor.setFragmentData(
                                       editor,
                                       event.clipboardData,
                                       'copy'
                                    );
                                 }
                              },
                              [attributes.onCopy, editor]
                           ),
                           onCut: React.useCallback(
                              function (event) {
                                 if (
                                    !readOnly &&
                                    ReactEditor.hasSelectableTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onCut) &&
                                    !isDOMEventTargetInput(event)
                                 ) {
                                    event.preventDefault();
                                    ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
                                    var selection = editor.selection;
                                    if (selection) {
                                       if (Range.isExpanded(selection)) {
                                          Editor.deleteFragment(editor);
                                       } else {
                                          var node = Node.parent(editor, selection.anchor.path);
                                          if (Editor.isVoid(editor, node)) {
                                             Transforms['delete'](editor);
                                          }
                                       }
                                    }
                                 }
                              },
                              [readOnly, editor, attributes.onCut]
                           ),
                           onDragOver: React.useCallback(
                              function (event) {
                                 if (
                                    ReactEditor.hasTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onDragOver)
                                 ) {
                                    // Only when the target is void, call `preventDefault` to signal
                                    // that drops are allowed. Editable content is droppable by
                                    // default, and calling `preventDefault` hides the cursor.
                                    var node = ReactEditor.toSlateNode(editor, event.target);
                                    if (Node.isElement(node) && Editor.isVoid(editor, node)) {
                                       event.preventDefault();
                                    }
                                 }
                              },
                              [attributes.onDragOver, editor]
                           ),
                           onDragStart: React.useCallback(
                              function (event) {
                                 if (
                                    !readOnly &&
                                    ReactEditor.hasTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onDragStart)
                                 ) {
                                    var node = ReactEditor.toSlateNode(editor, event.target);
                                    var path = ReactEditor.findPath(editor, node);
                                    var voidMatch =
                                       (Node.isElement(node) && Editor.isVoid(editor, node)) ||
                                       Editor['void'](editor, {
                                          at: path,
                                          voids: true
                                       });
                                    // If starting a drag on a void node, make sure it is selected
                                    // so that it shows up in the selection's fragment.
                                    if (voidMatch) {
                                       var range = Editor.range(editor, path);
                                       Transforms.select(editor, range);
                                    }
                                    state.isDraggingInternally = true;
                                    ReactEditor.setFragmentData(editor, event.dataTransfer, 'drag');
                                 }
                              },
                              [readOnly, editor, attributes.onDragStart, state]
                           ),
                           onDrop: React.useCallback(
                              function (event) {
                                 if (
                                    !readOnly &&
                                    ReactEditor.hasTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onDrop)
                                 ) {
                                    event.preventDefault();
                                    // Keep a reference to the dragged range before updating selection
                                    var draggedRange = editor.selection;
                                    // Find the range where the drop happened
                                    var range = ReactEditor.findEventRange(editor, event);
                                    var data = event.dataTransfer;
                                    Transforms.select(editor, range);
                                    if (state.isDraggingInternally) {
                                       if (
                                          draggedRange &&
                                          !Range.equals(draggedRange, range) &&
                                          !Editor['void'](editor, {
                                             at: range,
                                             voids: true
                                          })
                                       ) {
                                          Transforms['delete'](editor, {
                                             at: draggedRange
                                          });
                                       }
                                    }
                                    ReactEditor.insertData(editor, data);
                                    // When dragging from another source into the editor, it's possible
                                    // that the current editor does not have focus.
                                    if (!ReactEditor.isFocused(editor)) {
                                       ReactEditor.focus(editor);
                                    }
                                 }
                              },
                              [readOnly, editor, attributes.onDrop, state]
                           ),
                           onDragEnd: React.useCallback(
                              function (event) {
                                 if (
                                    !readOnly &&
                                    state.isDraggingInternally &&
                                    attributes.onDragEnd &&
                                    ReactEditor.hasTarget(editor, event.target)
                                 ) {
                                    attributes.onDragEnd(event);
                                 }
                              },
                              [readOnly, state, attributes, editor]
                           ),
                           onFocus: React.useCallback(
                              function (event) {
                                 if (
                                    !readOnly &&
                                    !state.isUpdatingSelection &&
                                    ReactEditor.hasEditableTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onFocus)
                                 ) {
                                    var el = ReactEditor.toDOMNode(editor, editor);
                                    var root = ReactEditor.findDocumentOrShadowRoot(editor);
                                    state.latestElement = root.activeElement;
                                    // COMPAT: If the editor has nested editable elements, the focus
                                    // can go to them. In Firefox, this must be prevented because it
                                    // results in issues with keyboard navigation. (2017/03/30)
                                    if (IS_FIREFOX && event.target !== el) {
                                       el.focus();
                                       return;
                                    }
                                    IS_FOCUSED.set(editor, true);
                                 }
                              },
                              [readOnly, state, editor, attributes.onFocus]
                           ),
                           onKeyDown: React.useCallback(
                              function (event) {
                                 if (
                                    !readOnly &&
                                    ReactEditor.hasEditableTarget(editor, event.target)
                                 ) {
                                    var _androidInputManagerR5;
                                    (_androidInputManagerR5 = androidInputManagerRef.current) ===
                                       null ||
                                       _androidInputManagerR5 === void 0 ||
                                       _androidInputManagerR5.handleKeyDown(event);
                                    var nativeEvent = event.nativeEvent;
                                    // COMPAT: The composition end event isn't fired reliably in all browsers,
                                    // so we sometimes might end up stuck in a composition state even though we
                                    // aren't composing any more.
                                    if (
                                       ReactEditor.isComposing(editor) &&
                                       nativeEvent.isComposing === false
                                    ) {
                                       IS_COMPOSING.set(editor, false);
                                       setIsComposing(false);
                                    }
                                    if (
                                       isEventHandled(event, attributes.onKeyDown) ||
                                       ReactEditor.isComposing(editor)
                                    ) {
                                       return;
                                    }
                                    var selection = editor.selection;
                                    var element =
                                       editor.children[
                                          selection !== null ? selection.focus.path[0] : 0
                                       ];
                                    var isRTL = direction_1(Node.string(element)) === 'rtl';
                                    // COMPAT: Since we prevent the default behavior on
                                    // `beforeinput` events, the browser doesn't think there's ever
                                    // any history stack to undo or redo, so we have to manage these
                                    // hotkeys ourselves. (2019/11/06)
                                    if (hotkeys.isRedo(nativeEvent)) {
                                       event.preventDefault();
                                       var maybeHistoryEditor = editor;
                                       if (typeof maybeHistoryEditor.redo === 'function') {
                                          maybeHistoryEditor.redo();
                                       }
                                       return;
                                    }
                                    if (hotkeys.isUndo(nativeEvent)) {
                                       event.preventDefault();
                                       var _maybeHistoryEditor = editor;
                                       if (typeof _maybeHistoryEditor.undo === 'function') {
                                          _maybeHistoryEditor.undo();
                                       }
                                       return;
                                    }
                                    // COMPAT: Certain browsers don't handle the selection updates
                                    // properly. In Chrome, the selection isn't properly extended.
                                    // And in Firefox, the selection isn't properly collapsed.
                                    // (2017/10/17)
                                    if (hotkeys.isMoveLineBackward(nativeEvent)) {
                                       event.preventDefault();
                                       Transforms.move(editor, {
                                          unit: 'line',
                                          reverse: true
                                       });
                                       return;
                                    }
                                    if (hotkeys.isMoveLineForward(nativeEvent)) {
                                       event.preventDefault();
                                       Transforms.move(editor, {
                                          unit: 'line'
                                       });
                                       return;
                                    }
                                    if (hotkeys.isExtendLineBackward(nativeEvent)) {
                                       event.preventDefault();
                                       Transforms.move(editor, {
                                          unit: 'line',
                                          edge: 'focus',
                                          reverse: true
                                       });
                                       return;
                                    }
                                    if (hotkeys.isExtendLineForward(nativeEvent)) {
                                       event.preventDefault();
                                       Transforms.move(editor, {
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
                                       if (selection && Range.isCollapsed(selection)) {
                                          Transforms.move(editor, {
                                             reverse: !isRTL
                                          });
                                       } else {
                                          Transforms.collapse(editor, {
                                             edge: isRTL ? 'end' : 'start'
                                          });
                                       }
                                       return;
                                    }
                                    if (hotkeys.isMoveForward(nativeEvent)) {
                                       event.preventDefault();
                                       if (selection && Range.isCollapsed(selection)) {
                                          Transforms.move(editor, {
                                             reverse: isRTL
                                          });
                                       } else {
                                          Transforms.collapse(editor, {
                                             edge: isRTL ? 'start' : 'end'
                                          });
                                       }
                                       return;
                                    }
                                    if (hotkeys.isMoveWordBackward(nativeEvent)) {
                                       event.preventDefault();
                                       if (selection && Range.isExpanded(selection)) {
                                          Transforms.collapse(editor, {
                                             edge: 'focus'
                                          });
                                       }
                                       Transforms.move(editor, {
                                          unit: 'word',
                                          reverse: !isRTL
                                       });
                                       return;
                                    }
                                    if (hotkeys.isMoveWordForward(nativeEvent)) {
                                       event.preventDefault();
                                       if (selection && Range.isExpanded(selection)) {
                                          Transforms.collapse(editor, {
                                             edge: 'focus'
                                          });
                                       }
                                       Transforms.move(editor, {
                                          unit: 'word',
                                          reverse: isRTL
                                       });
                                       return;
                                    }
                                    // COMPAT: Certain browsers don't support the `beforeinput` event, so we
                                    // fall back to guessing at the input intention for hotkeys.
                                    // COMPAT: In iOS, some of these hotkeys are handled in the
                                    if (!HAS_BEFORE_INPUT_SUPPORT) {
                                       // We don't have a core behavior for these, but they change the
                                       // DOM if we don't prevent them, so we have to.
                                       if (
                                          hotkeys.isBold(nativeEvent) ||
                                          hotkeys.isItalic(nativeEvent) ||
                                          hotkeys.isTransposeCharacter(nativeEvent)
                                       ) {
                                          event.preventDefault();
                                          return;
                                       }
                                       if (hotkeys.isSoftBreak(nativeEvent)) {
                                          event.preventDefault();
                                          Editor.insertSoftBreak(editor);
                                          return;
                                       }
                                       if (hotkeys.isSplitBlock(nativeEvent)) {
                                          event.preventDefault();
                                          Editor.insertBreak(editor);
                                          return;
                                       }
                                       if (hotkeys.isDeleteBackward(nativeEvent)) {
                                          event.preventDefault();
                                          if (selection && Range.isExpanded(selection)) {
                                             Editor.deleteFragment(editor, {
                                                direction: 'backward'
                                             });
                                          } else {
                                             Editor.deleteBackward(editor);
                                          }
                                          return;
                                       }
                                       if (hotkeys.isDeleteForward(nativeEvent)) {
                                          event.preventDefault();
                                          if (selection && Range.isExpanded(selection)) {
                                             Editor.deleteFragment(editor, {
                                                direction: 'forward'
                                             });
                                          } else {
                                             Editor.deleteForward(editor);
                                          }
                                          return;
                                       }
                                       if (hotkeys.isDeleteLineBackward(nativeEvent)) {
                                          event.preventDefault();
                                          if (selection && Range.isExpanded(selection)) {
                                             Editor.deleteFragment(editor, {
                                                direction: 'backward'
                                             });
                                          } else {
                                             Editor.deleteBackward(editor, {
                                                unit: 'line'
                                             });
                                          }
                                          return;
                                       }
                                       if (hotkeys.isDeleteLineForward(nativeEvent)) {
                                          event.preventDefault();
                                          if (selection && Range.isExpanded(selection)) {
                                             Editor.deleteFragment(editor, {
                                                direction: 'forward'
                                             });
                                          } else {
                                             Editor.deleteForward(editor, {
                                                unit: 'line'
                                             });
                                          }
                                          return;
                                       }
                                       if (hotkeys.isDeleteWordBackward(nativeEvent)) {
                                          event.preventDefault();
                                          if (selection && Range.isExpanded(selection)) {
                                             Editor.deleteFragment(editor, {
                                                direction: 'backward'
                                             });
                                          } else {
                                             Editor.deleteBackward(editor, {
                                                unit: 'word'
                                             });
                                          }
                                          return;
                                       }
                                       if (hotkeys.isDeleteWordForward(nativeEvent)) {
                                          event.preventDefault();
                                          if (selection && Range.isExpanded(selection)) {
                                             Editor.deleteFragment(editor, {
                                                direction: 'forward'
                                             });
                                          } else {
                                             Editor.deleteForward(editor, {
                                                unit: 'word'
                                             });
                                          }
                                          return;
                                       }
                                    } else {
                                       if (IS_CHROME || IS_WEBKIT) {
                                          // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
                                          // an event when deleting backwards in a selected void inline node
                                          if (
                                             selection &&
                                             (hotkeys.isDeleteBackward(nativeEvent) ||
                                                hotkeys.isDeleteForward(nativeEvent)) &&
                                             Range.isCollapsed(selection)
                                          ) {
                                             var currentNode = Node.parent(
                                                editor,
                                                selection.anchor.path
                                             );
                                             if (
                                                Node.isElement(currentNode) &&
                                                Editor.isVoid(editor, currentNode) &&
                                                (Editor.isInline(editor, currentNode) ||
                                                   Editor.isBlock(editor, currentNode))
                                             ) {
                                                event.preventDefault();
                                                Editor.deleteBackward(editor, {
                                                   unit: 'block'
                                                });
                                                return;
                                             }
                                          }
                                       }
                                    }
                                 }
                              },
                              [readOnly, editor, attributes.onKeyDown]
                           ),
                           onPaste: React.useCallback(
                              function (event) {
                                 if (
                                    !readOnly &&
                                    ReactEditor.hasEditableTarget(editor, event.target) &&
                                    !isEventHandled(event, attributes.onPaste)
                                 ) {
                                    // COMPAT: Certain browsers don't support the `beforeinput` event, so we
                                    // fall back to React's `onPaste` here instead.
                                    // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
                                    // when "paste without formatting" is used, so fallback. (2020/02/20)
                                    // COMPAT: Safari InputEvents generated by pasting won't include
                                    // application/x-slate-fragment items, so use the
                                    // ClipboardEvent here. (2023/03/15)
                                    if (
                                       !HAS_BEFORE_INPUT_SUPPORT ||
                                       isPlainTextOnlyPaste(event.nativeEvent) ||
                                       IS_WEBKIT
                                    ) {
                                       event.preventDefault();
                                       ReactEditor.insertData(editor, event.clipboardData);
                                    }
                                 }
                              },
                              [readOnly, editor, attributes.onPaste]
                           )
                        }
                     ),
                     /*#__PURE__*/ React.createElement(Children, {
                        decorations: decorations,
                        node: editor,
                        renderElement: renderElement,
                        renderChunk: renderChunk,
                        renderPlaceholder: renderPlaceholder,
                        renderLeaf: renderLeaf,
                        renderText: renderText
                     })
                  )
               )
            )
         )
      );
   });
   /**
    * The default placeholder element
    */
   var DefaultPlaceholder = function DefaultPlaceholder(_ref2) {
      var attributes = _ref2.attributes,
         children = _ref2.children;
      return (
         /*#__PURE__*/
         // COMPAT: Artificially add a line-break to the end on the placeholder element
         // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
         React.createElement(
            'span',
            _objectSpread({}, attributes),
            children,
            IS_ANDROID && /*#__PURE__*/ React.createElement('br', null)
         )
      );
   };
   /**
    * A default memoized decorate function.
    */
   var defaultDecorate = function defaultDecorate() {
      return [];
   };
   /**
    * A default implement to scroll dom range into view.
    */
   var defaultScrollSelectionIntoView = function defaultScrollSelectionIntoView(
      editor,
      domRange,
      scrollBoundary
   ) {
      // Scroll to the focus point of the selection, in case the selection is expanded
      var isBackward = !!editor.selection && Range.isBackward(editor.selection);
      var domFocusPoint = domRange.cloneRange();
      domFocusPoint.collapse(isBackward);
      if (domFocusPoint.getBoundingClientRect) {
         var leafEl = domFocusPoint.startContainer.parentElement;
         // COMPAT: In Chrome, domFocusPoint.getBoundingClientRect() can return zero dimensions for valid ranges (e.g. line breaks).
         // When this happens, do not scroll like most editors do.

         /**
          * НЕ ПРОПАТЧЕНО !!!!!
          * старый код прям сильно другой

          *          // Пропатчено.
          *          // https://online.sbis.ru/opendoc.html?guid=27b78f16-5b30-436a-aa25-b428fe022dd3
          *          // В текущем цикле отрисовки у активного элемента нет размеров и неопределенная позиция.
          *          // Поэтому обратимся к родительскому элементу.
          *          var leafElRect = leafEl.getBoundingClientRect();
          *          if (
          *             leafEl &&
          *             leafElRect.width === 0 &&
          *             leafElRect.height === 0 &&
          *             leafElRect.top === 0 &&
          *             leafElRect.bottom === 0 &&
          *             leafElRect.left === 0 &&
          *             leafElRect.right === 0
          *          ) {
          *             leafEl = leafEl.parentElement;
          *          }
          *
          *    };
          */
         var domRect = domFocusPoint.getBoundingClientRect();
         var isZeroDimensionRect =
            domRect.width === 0 && domRect.height === 0 && domRect.x === 0 && domRect.y === 0;
         if (isZeroDimensionRect) {
            var leafRect = leafEl.getBoundingClientRect();
            var leafHasDimensions = leafRect.width > 0 || leafRect.height > 0;
            if (leafHasDimensions) {
               return;
            }
         }
         // Default behavior: use domFocusPoint's getBoundingClientRect
         leafEl.getBoundingClientRect = domFocusPoint.getBoundingClientRect.bind(domFocusPoint);

         // Пропатчено.
         // https://online.sbis.ru/opendoc.html?guid=e0909ee5-b2d0-4472-9efc-fa9d2270857c
         // Логика подскролла ведет себя неадекватно при выделении текста.
         // Отсюда возникает вопрос - а зачем подскралливать при выделении текста?
         // Подскралливаем только, когда текст не выделен.
         if (slate.Range.isCollapsed(editor.selection)) {
            e(leafEl, {
               scrollMode: 'if-needed',
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
   var isEventHandled = function isEventHandled(event, handler) {
      if (!handler) {
         return false;
      }
      // The custom event handler may return a boolean to specify whether the event
      // shall be treated as being handled or not.
      var shouldTreatEventAsHandled = handler(event);
      if (shouldTreatEventAsHandled != null) {
         return shouldTreatEventAsHandled;
      }
      return event.isDefaultPrevented() || event.isPropagationStopped();
   };
   /**
    * Check if the event's target is an input element
    */
   var isDOMEventTargetInput = function isDOMEventTargetInput(event) {
      return (
         isDOMNode(event.target) &&
         (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)
      );
   };
   /**
    * Check if a DOM event is overrided by a handler.
    */
   var isDOMEventHandled = function isDOMEventHandled(event, handler) {
      if (!handler) {
         return false;
      }
      // The custom event handler may return a boolean to specify whether the event
      // shall be treated as being handled or not.
      var shouldTreatEventAsHandled = handler(event);
      if (shouldTreatEventAsHandled != null) {
         return shouldTreatEventAsHandled;
      }
      return event.defaultPrevented;
   };
   var handleNativeHistoryEvents = function handleNativeHistoryEvents(editor, event) {
      var maybeHistoryEditor = editor;
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
   var FocusedContext = /*#__PURE__*/ React.createContext(false);
   /**
    * Get the current `focused` state of the editor.
    */
   var useFocused = function useFocused() {
      return React.useContext(FocusedContext);
   };

   var REACT_MAJOR_VERSION = parseInt(React.version.split('.')[0], 10);

   var _excluded = ['editor', 'children', 'onChange', 'onSelectionChange', 'onValueChange'];
   /**
    * A wrapper around the provider to handle `onChange` events, because the editor
    * is a mutable singleton so it won't ever register as "changed" otherwise.
    */
   var Slate = function Slate(props) {
      var editor = props.editor,
         children = props.children,
         onChange = props.onChange,
         onSelectionChange = props.onSelectionChange,
         onValueChange = props.onValueChange,
         value = props.value,
         rest = _objectWithoutProperties$2(props, _excluded);

      var _useState = React.useState(ReactEditor.isFocused(editor)),
         _useState2 = _slicedToArray(_useState, 2),
         isFocused = _useState2[0],
         setIsFocused = _useState2[1];

      // var _useStatekey = React.useState(0),
      //    _useStateKkey = _slicedToArray(_useStatekey, 2),
      //    key = _useStateKkey[0],
      //    setKey = _useStateKkey[1];

      // Run once on first mount, but before `useEffect` or render
      // React.useState(function () {
      //    if (!Node.isNodeList(value)) {
      //       throw new Error(
      //          '[Slate] value is invalid! Expected a list of elements but got: '.concat(
      //             Scrubber.stringify(value)
      //          )
      //       );
      //    }
      //    if (!Editor.isEditor(editor)) {
      //       throw new Error(
      //          '[Slate] editor is invalid! You passed: '.concat(Scrubber.stringify(editor))
      //       );
      //    }
      //    editor.children = value;
      //    Object.assign(editor, rest);
      // });
      var context = React.useMemo(
         function () {
            if (!slate.Node.isNodeList(value)) {
               throw new Error(
                  '[Slate] value is invalid! Expected a list of elements but got: '.concat(
                     slate.Scrubber.stringify(value)
                  )
               );
            }

            if (!slate.Editor.isEditor(editor)) {
               throw new Error(
                  '[Slate] editor is invalid! You passed: '.concat(slate.Scrubber.stringify(editor))
               );
            }

            editor.children = value;
            Object.assign(editor, rest);
            return {
               v: 0,
               editor: editor
            };
         },
         [
            /*key,*/
            /*value*/
         ] //.concat(_toConsumableArray(Object.values(rest)))
      );
      var _useSelectorContext = useSelectorContext(),
         selectorContext = _useSelectorContext.selectorContext,
         handleSelectorChange = _useSelectorContext.onChange;
      var onContextChange = React.useCallback(
         function () {
            if (onChange) {
               onChange(editor.children);
            }
            if (
               onSelectionChange &&
               editor.operations.find(function (op) {
                  return op.type === 'set_selection';
               })
            ) {
               onSelectionChange(editor.selection);
            }
            if (
               onValueChange &&
               editor.operations.find(function (op) {
                  return op.type !== 'set_selection';
               })
            ) {
               onValueChange(editor.children);
            }
            handleSelectorChange();
            /* setKey(key + 1);*/
         },
         [editor, handleSelectorChange, onChange, onSelectionChange, onValueChange /*, key*/]
      );
      React.useEffect(
         function () {
            EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
            return function () {
               EDITOR_TO_ON_CHANGE.set(editor, function () {});
            };
         },
         [editor, onContextChange]
      );

      React.useEffect(
         function () {
            setIsFocused(ReactEditor.isFocused(editor));
         },
         [editor]
      );
      useIsomorphicLayoutEffect(function () {
         var fn = function fn() {
            return setIsFocused(ReactEditor.isFocused(editor));
         };
         if (REACT_MAJOR_VERSION >= 17) {
            // In React >= 17 onFocus and onBlur listen to the focusin and focusout events during the bubbling phase.
            // Therefore in order for <Editable />'s handlers to run first, which is necessary for ReactEditor.isFocused(editor)
            // to return the correct value, we have to listen to the focusin and focusout events without useCapture here.
            document.addEventListener('focusin', fn);
            document.addEventListener('focusout', fn);
            return function () {
               document.removeEventListener('focusin', fn);
               document.removeEventListener('focusout', fn);
            };
         } else {
            document.addEventListener('focus', fn, true);
            document.addEventListener('blur', fn, true);
            return function () {
               document.removeEventListener('focus', fn, true);
               document.removeEventListener('blur', fn, true);
            };
         }
      }, []);
      return /*#__PURE__*/ React.createElement(
         SlateSelectorContext.Provider,
         {
            value: selectorContext
         },
         /*#__PURE__*/ React.createElement(
            EditorContext.Provider,
            {
               value: context.editor
            },
            /*#__PURE__*/ React.createElement(
               FocusedContext.Provider,
               {
                  value: isFocused
               },
               children
            )
         )
      );
   };

   /**
    * Get the current editor object from the React context.
    * @deprecated Use useSlateStatic instead.
    */
   var useEditor = function useEditor() {
      var editor = React.useContext(EditorContext);
      if (!editor) {
         throw new Error(
            "The `useEditor` hook must be used inside the <Slate> component's context."
         );
      }
      return editor;
   };

   /**
    * Get the current `selected` state of an element.
    */
   var useSelected = function useSelected() {
      var element = useElementIf();
      // Breaking the rules of hooks is fine here since `!element` will remain true
      // or false for the entire lifetime of the component this hook is called from.
      // TODO: Decide if we want to throw an error instead when calling
      // `useSelected` outside of an element (potentially a breaking change).
      if (!element) return false;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      var selector = React.useCallback(
         function (editor) {
            if (!editor.selection) return false;
            var path = ReactEditor.findPath(editor, element);
            var range = Editor.range(editor, path);
            return !!Range.intersection(range, editor.selection);
         },
         [element]
      );
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
   var useSlateSelection = function useSlateSelection() {
      return useSlateSelector(function (editor) {
         return editor.selection;
      }, isSelectionEqual);
   };
   var isSelectionEqual = function isSelectionEqual(a, b) {
      if (!a && !b) return true;
      if (!a || !b) return false;
      return Range.equals(a, b);
   };

   /**
    * `withReact` adds React and DOM specific behaviors to the editor.
    *
    * If you are using TypeScript, you must extend Slate's CustomTypes to use
    * this plugin.
    *
    * See https://docs.slatejs.org/concepts/11-typescript to learn how.
    */
   var withReact = function withReact(editor) {
      var clipboardFormatKey =
         arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x-slate-fragment';
      var e = editor;
      e = withDOM(e, clipboardFormatKey);
      var _e = e,
         onChange = _e.onChange,
         apply = _e.apply,
         insertText = _e.insertText;
      e.getChunkSize = function () {
         return null;
      };
      if (IS_ANDROID) {
         e.insertText = function (text, options) {
            // COMPAT: Android devices, specifically Samsung devices, experience cursor jumping.
            // This issue occurs when the ⁠insertText function is called immediately after typing.
            // The problem arises because typing schedules a selection change.
            // However, this selection change is only executed after the ⁠insertText function.
            // As a result, the already obsolete selection is applied, leading to incorrect
            // final cursor position.
            EDITOR_TO_PENDING_SELECTION['delete'](e);
            return insertText(text, options);
         };
      }
      e.onChange = function (options) {
         // COMPAT: React < 18 doesn't batch `setState` hook calls, which means
         // that the children and selection can get out of sync for one render
         // pass. So we have to use this unstable API to ensure it batches them.
         // (2019/12/03)
         // https://github.com/facebook/react/issues/14259#issuecomment-439702367
         // var maybeBatchUpdates =
         //    REACT_MAJOR_VERSION < 18
         //       ? ReactDOM.unstable_batchedUpdates
         //       : function (callback) {
         //            return callback();
         //         };
         // maybeBatchUpdates(function () {
         onChange(options);
         // });
      };
      // On move_node, if the chunking optimization is enabled for the parent of the
      // node being moved, add the moved node to the movedNodeKeys set of the
      // parent's chunk tree.
      e.apply = function (operation) {
         if (operation.type === 'move_node') {
            var parent = Node.parent(e, operation.path);
            var chunking = !!e.getChunkSize(parent);
            if (chunking) {
               var node = Node.get(e, operation.path);
               var chunkTree = getChunkTreeForNode(e, parent);
               var key = ReactEditor.findKey(e, node);
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

   Object.defineProperty(exports, '__esModule', { value: true });
});
