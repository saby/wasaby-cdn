define('pixi-react.js', ['exports', 'pixi', 'react-reconciler', 'react'], function (exports, pixi, Reconciler, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Reconciler__default = /*#__PURE__*/_interopDefaultLegacy(Reconciler);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // borrowed from fbjs
  function invariant(condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return String(args[argIndex++]);
        }));
        error.name = 'Invariant Violation';
      }
      error.framesToPop = 1; // Skip invariant's own stack frame.
      throw error;
    }
  }

  /**
   * lodash 4.0.0 (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <https://lodash.com/license>
   */

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  function isNil(value) {
    return value == null;
  }

  var lodash_isnil = isNil;

  /**
   * Parse PIXI point value to array of coordinates
   *
   * @param {*} value
   * @returns {Array}
   */
  function parsePoint(value) {
    var arr = [];
    if (typeof value === 'undefined') {
      return arr;
    } else if (typeof value === 'string') {
      arr = value.split(',');
    } else if (typeof value === 'number') {
      arr = [value];
    } else if (Array.isArray(value)) {
      arr = _toConsumableArray(value);
    } else if (value !== null && _typeof(value) === 'object') {
      var x = value && (value === null || value === void 0 ? void 0 : value.x) || 0;
      var y = value && (value === null || value === void 0 ? void 0 : value.y) || 0;
      arr = [x, y];
    } else {
      return arr;
    }
    return arr.filter(function (p) {
      return !lodash_isnil(p) && !isNaN(p);
    }).map(Number);
  }

  /**
   * Check if two points are equal
   *
   * @param {*} oldValue
   * @param {*} newValue
   * @returns {boolean}
   */
  function pointsAreEqual(oldValue, newValue) {
    if (oldValue.length !== newValue.length) {
      return false;
    }
    for (var i = 0; i < oldValue.length; i++) {
      if (oldValue[i] !== newValue[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Determine value is type of Point or ObservablePoint
   * See https://github.com/michalochman/react-pixi-fiber/blob/a4dbddbef0ffbf0f563c64d30766ea28222a51ea/src/utils.js#L48
   *
   * @param {*} value
   * @returns {boolean}
   */
  function isPointType(value) {
    return value instanceof pixi.Point || value instanceof pixi.ObservablePoint;
  }

  /**
   * Event handlers
   *
   * @type {string[]}
   */
  var eventHandlers = ['click', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mouseupoutside', 'tap', 'touchstart', 'touchmove', 'touchend', 'touchendoutside', 'pointercancel', 'pointerout', 'pointerover', 'pointertap', 'pointerdown', 'pointerup', 'pointerupoutside', 'pointermove', 'rightclick', 'rightdown', 'rightup', 'rightupoutside', 'touchcancel', 'touchendoutside', 'touchmove', 'touchstart'];

  /**
   * Set value on a PIXI.DisplayObject
   * See https://github.com/Izzimach/react-pixi/blob/a25196251a13ed9bb116a8576d93e9fceac2a14c/src/ReactPIXI.js#L114
   *
   * @param {PIXI.DisplayObject} instance
   * @param {string} prop
   * @param {*} value
   */
  function setValue(instance, prop, value) {
    if (isPointType(instance[prop]) && isPointType(value)) {
      // copy value
      instance[prop].copyFrom(value);
    } else if (isPointType(instance[prop])) {
      // parse value if a non-Point type is being assigned to a Point type
      var coordinates = parsePoint(value);
      invariant(typeof coordinates !== 'undefined' && coordinates.length > 0 && coordinates.length < 3, 'The property `%s` is a `PIXI.Point` or `PIXI.ObservablePoint` and must be set to a comma-separated string of ' + 'either 1 or 2 coordinates, a 1 or 2 element array containing coordinates, or a PIXI Point/ObservablePoint. ' + 'If only one coordinate is given then X and Y will be set to the provided value. Received: `%s` of type `%s`.', prop, JSON.stringify(value), _typeof(value));
      instance[prop].set(coordinates.shift(), coordinates.shift());
    } else {
      // just hard assign value
      instance[prop] = value;
    }
  }

  var isFunction = function isFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.every(function (v) {
      return typeof v === 'function';
    });
  };
  var isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };
  var hasKey = function hasKey(collection) {
    var coll = collection;
    if (!Array.isArray(coll)) {
      if (isObject(collection)) {
        coll = Object.keys(collection);
      } else {
        throw new Error('collection needs to be an Array or Object');
      }
    }
    var index = {};
    coll.forEach(function (key) {
      index[key] = true;
    });
    return function (key) {
      return typeof index[key] !== 'undefined';
    };
  };
  var not = function not(boolFn) {
    return function () {
      return !boolFn.apply(void 0, arguments);
    };
  };

  var CHILDREN = 'children';
  /**
   * Reserved props
   *
   * @type {Object}
   */
  var PROPS_RESERVED = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CHILDREN, true), "parent", true), "worldAlpha", true), "worldTransform", true), "worldVisible", true);

  /**
   * Default display object props
   * See https://github.com/michalochman/react-pixi-fiber/blob/a4dbddbef0ffbf0f563c64d30766ea28222a51ea/src/props.js#L9
   *
   * @type {Object}
   */
  var PROPS_DISPLAY_OBJECT = {
    alpha: 1,
    buttonMode: false,
    cacheAsBitmap: false,
    cursor: null,
    filterArea: null,
    filters: null,
    hitArea: null,
    interactive: false,
    mask: null,
    pivot: 0,
    position: 0,
    renderable: true,
    rotation: 0,
    scale: 1,
    skew: 0,
    transform: null,
    visible: true,
    x: 0,
    y: 0
  };

  /**
   * Helper util for fetching the texture from props
   * Can be either texture or image
   *
   * @param {string} elementType
   * @param {PIXI.Container} root
   * @param {object} props
   * @returns {PIXI.Texture|null}
   */
  var getTextureFromProps = function getTextureFromProps(elementType, root) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var emitChange = function emitChange(texture) {
      return requestAnimationFrame(function () {
        var _texture$__reactpixi, _texture$__reactpixi$;
        texture === null || texture === void 0 ? void 0 : (_texture$__reactpixi = texture.__reactpixi) === null || _texture$__reactpixi === void 0 ? void 0 : (_texture$__reactpixi$ = _texture$__reactpixi.root) === null || _texture$__reactpixi$ === void 0 ? void 0 : _texture$__reactpixi$.emit("__REACT_PIXI_REQUEST_RENDER__");
      });
    };
    var check = function check(inType, validator) {
      if (props.hasOwnProperty(inType)) {
        var valid = validator.typeofs.some(function (t) {
          return _typeof(props[inType]) === t;
        }) || validator.instanceofs.some(function (i) {
          return props[inType] instanceof i;
        });
        invariant(valid, "".concat(elementType, " ").concat(inType, " prop is invalid"));
        return props[inType];
      }
    };
    if (props.texture) {
      invariant(props.texture instanceof pixi.Texture, "".concat(elementType, " texture needs to be typeof `PIXI.Texture`"));
      return props.texture;
    } else {
      var result = check('image', {
        typeofs: ['string'],
        instanceofs: [HTMLImageElement]
      }) || check('video', {
        typeofs: ['string'],
        instanceofs: [HTMLVideoElement]
      }) || check('source', {
        typeofs: ['string', 'number'],
        instanceofs: [HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, pixi.Texture]
      });
      invariant(!!result, "".concat(elementType, " could not get texture from props"));
      var texture = pixi.Texture.from(result);
      texture.__reactpixi = {
        root: root
      };
      texture.once('update', emitChange);
      texture.once('loaded', emitChange);
      if (texture.valid) {
        emitChange(texture);
      }
      return texture;
    }
  };
  var filterProps = not(hasKey([].concat(_toConsumableArray(Object.keys(PROPS_RESERVED)), _toConsumableArray(eventHandlers))));

  /**
   * Apply default props on Display Object instance (which are all components)
   *
   * @param {PIXI.DisplayObject} instance
   * @param {Object} oldProps
   * @param {Object} newProps
   */
  function applyDefaultProps(instance, oldProps, newProps) {
    var changed = false;
    invariant(pixi.DisplayObject.prototype.isPrototypeOf(instance), 'instance needs to be typeof `PIXI.DisplayObject`, ' + 'got `%s`', _typeof(instance));

    // update event handlers
    if (!newProps.ignoreEvents) {
      var hasRemoveListener = typeof instance.removeListener === 'function';
      var hasOn = typeof instance.on === 'function';
      for (var i = 0; i < eventHandlers.length; i++) {
        var evt = eventHandlers[i];
        if (oldProps[evt] !== newProps[evt]) {
          changed = true;
          if (typeof oldProps[evt] === 'function' && hasRemoveListener) {
            instance.removeListener(evt, oldProps[evt]);
          }
          if (typeof newProps[evt] === 'function' && hasOn) {
            instance.on(evt, newProps[evt]);
          }
        }
      }
    }
    var newPropKeys = Object.keys(newProps || {});

    // hard overwrite all props? can speed up performance
    if (newProps.overwriteProps) {
      for (var _i = 0; _i < newPropKeys.length; _i++) {
        var p = newPropKeys[_i];
        if (oldProps[p] !== newProps[p]) {
          changed = true;
          setValue(instance, p, newProps[p]);
        }
      }
      return;
    }
    var props = newPropKeys.filter(filterProps);
    for (var _i2 = 0; _i2 < props.length; _i2++) {
      var prop = props[_i2];
      var value = newProps[prop];
      if (newProps[prop] !== oldProps[prop]) {
        changed = true;
      }
      if (value !== undefined) {
        // set value if defined
        setValue(instance, prop, value);
      } else if (prop in PROPS_DISPLAY_OBJECT) {
        // is a default value, use that
        console.warn("setting default value: ".concat(prop, ", from: ").concat(instance[prop], " to: ").concat(value, " for"), instance);
        changed = true;
        setValue(instance, prop, PROPS_DISPLAY_OBJECT[prop]);
      } else {
        console.warn("ignoring prop: ".concat(prop, ", from ").concat(instance[prop], " to ").concat(value, " for"), instance);
      }
    }
    return changed;
  }

  var BitmapText$1 = function BitmapText(root, props) {
    var text = props.text,
      style = props.style;
    return new pixi.BitmapText(text, style);
  };

  var Container$1 = function Container() {
    return new pixi.Container();
  };

  var _excluded$7 = ["draw", "geometry"];
  var Graphics$1 = function Graphics(root, _ref) {
    var geometry = _ref.geometry;
    invariant(!geometry || geometry instanceof pixi.Graphics, "Graphics geometry needs to be a `PIXI.Graphics`");
    var g = geometry ? new pixi.Graphics(geometry.geometry) : new pixi.Graphics();
    g.applyProps = function (instance, oldProps, newProps) {
      var draw = newProps.draw;
        newProps.geometry;
        var props = _objectWithoutProperties(newProps, _excluded$7);
      var changed = applyDefaultProps(instance, oldProps, props);
      if (oldProps.draw !== draw && typeof draw === 'function') {
        changed = true;
        draw.call(g, g);
      }
      return changed;
    };
    return g;
  };

  var _excluded$6 = ["image", "texture"];
  var NineSlicePlane$1 = function NineSlicePlane(root, props) {
    var _props$leftWidth = props.leftWidth,
      leftWidth = _props$leftWidth === void 0 ? 10 : _props$leftWidth,
      _props$topHeight = props.topHeight,
      topHeight = _props$topHeight === void 0 ? 10 : _props$topHeight,
      _props$rightWidth = props.rightWidth,
      rightWidth = _props$rightWidth === void 0 ? 10 : _props$rightWidth,
      _props$bottomHeight = props.bottomHeight,
      bottomHeight = _props$bottomHeight === void 0 ? 10 : _props$bottomHeight;
    var texture = getTextureFromProps('NineSlicePlane', root, props);
    var nineSlicePlane = new pixi.NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight);
    nineSlicePlane.applyProps = function (instance, oldProps, newProps) {
      var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$6);
      var changed = applyDefaultProps(instance, oldProps, props);
      if (image || texture) {
        // change = true not required for image, getTextureFromProps will call update
        if (texture !== oldProps.texture) {
          changed = true;
        }
        instance.texture = getTextureFromProps('NineSlicePlane', root, newProps);
      }
      return changed;
    };
    return nineSlicePlane;
  };

  var ParticleContainer$1 = function ParticleContainer(root, props) {
    var _props$maxSize = props.maxSize,
      maxSize = _props$maxSize === void 0 ? 1500 : _props$maxSize,
      _props$batchSize = props.batchSize,
      batchSize = _props$batchSize === void 0 ? 16384 : _props$batchSize,
      _props$autoResize = props.autoResize,
      autoResize = _props$autoResize === void 0 ? false : _props$autoResize;
    var properties = _objectSpread2(_objectSpread2({}, {
      vertices: false,
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      tint: true
    }), props.properties || {});
    var destroyOptions = _objectSpread2(_objectSpread2({}, {
      children: false,
      texture: false,
      baseTexture: false
    }), props.destroyOptions || {});
    var container = new pixi.ParticleContainer(maxSize, properties, batchSize, autoResize);
    container.willUnmount = function (instance, child, parent) {
      instance.destroy(destroyOptions);
    };
    return container;
  };

  var _excluded$5 = ["image", "texture"];
  var Sprite$1 = function Sprite(root, props) {
    var sprite = new pixi.Sprite(getTextureFromProps('Sprite', root, props));
    sprite.applyProps = function (instance, oldProps, newProps) {
      var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$5);
      var changed = applyDefaultProps(instance, oldProps, props);
      if (texture && oldProps.texture !== newProps.texture || image && oldProps.image !== newProps.image) {
        // getTextureFromProps will call update for image
        if (oldProps.texture !== newProps.texture) {
          changed = true;
        }
        instance.texture = getTextureFromProps('Sprite', root, newProps);
      }
      return changed;
    };
    return sprite;
  };

  var _excluded$4 = ["textures", "isPlaying", "initialFrame"];
  var AnimatedSprite$1 = function AnimatedSprite(root, props) {
    var textures = props.textures,
      images = props.images,
      _props$isPlaying = props.isPlaying,
      isPlaying = _props$isPlaying === void 0 ? true : _props$isPlaying,
      initialFrame = props.initialFrame;
    var makeTexture = function makeTexture(textures) {
      return textures.map(function (texture) {
        invariant(texture instanceof pixi.Texture || (texture === null || texture === void 0 ? void 0 : texture.texture), "AnimationSprite texture needs to be an array of `PIXI.Texture` or `{ texture: PIXI.Texture, time: number }`");
        return texture;
      });
    };
    var animatedSprite = images ? pixi.AnimatedSprite.fromImages(images) : new pixi.AnimatedSprite(makeTexture(textures));
    animatedSprite[isPlaying ? 'gotoAndPlay' : 'gotoAndStop'](initialFrame || 0);
    animatedSprite.applyProps = function (instance, oldProps, newProps) {
      var textures = newProps.textures,
        isPlaying = newProps.isPlaying,
        initialFrame = newProps.initialFrame,
        props = _objectWithoutProperties(newProps, _excluded$4);
      var changed = applyDefaultProps(instance, oldProps, props);
      if (textures && oldProps['textures'] !== textures) {
        instance.textures = makeTexture(textures);
        changed = true;
      }
      if (isPlaying !== oldProps.isPlaying || initialFrame !== oldProps.initialFrame) {
        var frame = typeof initialFrame === 'number' ? initialFrame : animatedSprite.currentFrame || 0;
        animatedSprite[isPlaying ? 'gotoAndPlay' : 'gotoAndStop'](frame);
        changed = true;
      }
      return changed;
    };
    return animatedSprite;
  };

  var Text$1 = function Text(root, props) {
    var _props$text = props.text,
      text = _props$text === void 0 ? '' : _props$text,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      isSprite = props.isSprite;
    var pixiText = new pixi.Text(text, style);
    if (isSprite) {
      pixiText.updateText();
      return new pixi.Sprite(pixiText.texture);
    }
    return pixiText;
  };

  var _excluded$3 = ["tileScale", "tilePosition", "image", "texture"];
  var TilingSprite$1 = function TilingSprite(root, props) {
    var _props$width = props.width,
      width = _props$width === void 0 ? 100 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 100 : _props$height;
    var texture = getTextureFromProps('TilingSprite', root, props);
    var ts = new pixi.TilingSprite(texture, width, height);
    ts.applyProps = function (instance, oldProps, newProps) {
      var tileScale = newProps.tileScale,
        tilePosition = newProps.tilePosition,
        image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$3);
      var changed = applyDefaultProps(instance, oldProps, props);
      if (tilePosition) {
        var _instance$tilePositio;
        var newTilePosition = parsePoint(tilePosition);
        (_instance$tilePositio = instance.tilePosition).set.apply(_instance$tilePositio, _toConsumableArray(newTilePosition));
        changed = !pointsAreEqual(parsePoint(oldProps.tilePosition), newTilePosition) || changed;
      }
      if (tileScale) {
        var _instance$tileScale;
        var newTileScale = parsePoint(tileScale);
        (_instance$tileScale = instance.tileScale).set.apply(_instance$tileScale, _toConsumableArray(newTileScale));
        changed = !pointsAreEqual(parsePoint(oldProps.tileScale), newTileScale) || changed;
      }
      if (image || texture) {
        // change = true not required for image, getTextureFromProps will call update
        if (texture !== oldProps.texture) {
          changed = true;
        }
        instance.texture = getTextureFromProps('Sprite', root, newProps);
      }
      return changed;
    };
    return ts;
  };

  var _excluded$2 = ["image", "texture"];
  var SimpleMesh$1 = function SimpleMesh(root, props) {
    var texture = getTextureFromProps('Mesh', root, props);
    var vertices = props.vertices,
      uvs = props.uvs,
      indices = props.indices,
      _props$drawMode = props.drawMode,
      drawMode = _props$drawMode === void 0 ? pixi.DRAW_MODES.TRIANGLES : _props$drawMode;
    var simpleMesh = new pixi.SimpleMesh(texture, vertices, uvs, indices, drawMode);
    simpleMesh.applyProps = function (instance, oldProps, newProps) {
      var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$2);
      var changed = applyDefaultProps(instance, oldProps, props);
      if (image || texture) {
        // change = true not required for image, getTextureFromProps will call update
        if (texture !== oldProps.texture) {
          changed = true;
        }
        instance.texture = getTextureFromProps('Mesh', root, newProps);
      }
      return changed;
    };
    return simpleMesh;
  };

  var _excluded$1 = ["image", "texture"];
  var SimpleRope$1 = function SimpleRope(root, props) {
    var texture = getTextureFromProps('SimpleRope', root, props);
    var points = props.points;
    var rope = new pixi.SimpleRope(texture, points);
    rope.applyProps = function (instance, oldProps, newProps) {
      var image = newProps.image,
        texture = newProps.texture,
        props = _objectWithoutProperties(newProps, _excluded$1);
      invariant(Array.isArray(newProps.points), 'SimpleRope points needs to be %s', 'Array<PIXI.Point>');
      var changed = applyDefaultProps(instance, oldProps, props);
      if (image || texture) {
        if (texture !== oldProps.texture) {
          changed = true;
        }
        instance.texture = getTextureFromProps('SimpleRope', root, newProps);
      }
      return changed;
    };
    return rope;
  };

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BitmapText: BitmapText$1,
    Container: Container$1,
    Graphics: Graphics$1,
    NineSlicePlane: NineSlicePlane$1,
    ParticleContainer: ParticleContainer$1,
    Sprite: Sprite$1,
    Text: Text$1,
    TilingSprite: TilingSprite$1,
    SimpleMesh: SimpleMesh$1,
    SimpleRope: SimpleRope$1,
    AnimatedSprite: AnimatedSprite$1
  });

  /**
   * Available tag types
   *
   * @type {Object}
   */
  var TYPES = {
    BitmapText: 'BitmapText',
    Container: 'Container',
    Graphics: 'Graphics',
    NineSlicePlane: 'NineSlicePlane',
    ParticleContainer: 'ParticleContainer',
    Sprite: 'Sprite',
    AnimatedSprite: 'AnimatedSprite',
    Text: 'Text',
    TilingSprite: 'TilingSprite',
    SimpleMesh: 'SimpleMesh',
    SimpleRope: 'SimpleRope'
  };
  var ELEMENTS = Object.keys(TYPES).reduce(function (elements, type) {
    return _objectSpread2(_objectSpread2({}, elements), {}, _defineProperty({}, type, components[type]));
  }, {});

  /**
   * Inject types
   *
   * @type {Object}
   */
  var TYPES_INJECTED = {};

  /**
   * Create an element based on tag type
   * Similar to react-dom's `React.createElement()`
   *
   * @param {string} type Element type
   * @param {Object} props Component props
   * @param {Object} root Root instance
   */
  function createElement(type) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var fn = ELEMENTS[type];
    var instance;
    var applyProps;
    if (typeof fn === 'function') {
      instance = fn(root, props);
    }
    if (!instance) {
      // not found, is there any injected custom component?
      var injected = TYPES_INJECTED[type];
      if (injected) {
        instance = injected.create(props);
        instance.didMount = injected.didMount ? injected.didMount.bind(instance) : undefined;
        instance.willUnmount = injected.willUnmount ? injected.willUnmount.bind(instance) : undefined;
        instance.applyProps = injected.applyProps ? injected.applyProps.bind(instance) : undefined;
        instance.config = injected.config;
      }
    }

    // apply initial props!
    if (instance) {
      var _instance;
      applyProps = typeof ((_instance = instance) === null || _instance === void 0 ? void 0 : _instance.applyProps) === 'function' ? instance.applyProps : applyDefaultProps;
      applyProps(instance, {}, props);
      instance.__reactpixi = {
        root: root
      };
    }
    return instance;
  }

  /**
   * Create Component
   *
   * @param {string} type
   * @param {Object} lifecycle methods
   */
  function PixiComponent(type, lifecycle) {
    invariant(!!type, 'Expect type to be defined, got `%s`', type);
    invariant(!TYPES[type], 'Component `%s` could not be created, already exists in default components.', type);
    TYPES_INJECTED[type] = lifecycle;
    return type;
  }

  var name = "@inlet/react-pixi";
  var version$1 = "6.8.0";
  var description = "Write PixiJS applications using React declarative style.";
  var main = "index.js";
  var module = "module.js";
  var author = "Patrick Brouwer <patrick@inlet.nl>";
  var license = "MIT";
  var scripts = {
  	"docz:dev": "rimraf ./docs && docz dev",
  	"docz:build": "rimraf ./docs && yarn build:prod && docz build",
  	eslint: "eslint .",
  	"build:watch": "cross-env FORMAT=umd NODE_ENV=development rollup -c --watch",
  	"build:dev": "cross-env NODE_ENV=development rollup -c",
  	"build:prod": "cross-env NODE_ENV=production rollup -c",
  	build: "rimraf ./dist && npm run build:dev && npm run build:prod",
  	test: "jest --silent",
  	"test:watch": "jest --silent --watch",
  	prepack: "if-env CI=true && echo \"skip build\" || (npm run test && npm run eslint && npm run build)"
  };
  var repository = {
  	type: "git",
  	url: "git+https://github.com/inlet/react-pixi.git"
  };
  var files = [
  	"dist/",
  	"animated/",
  	"legacy/",
  	"LICENSE",
  	"index.d.ts",
  	"index.js",
  	"umd.js",
  	"module.js"
  ];
  var typings = "./index.d.ts";
  var devDependencies = {
  	"@babel/cli": "7.14.8",
  	"@babel/core": "7.14.8",
  	"@babel/plugin-proposal-class-properties": "7.14.5",
  	"@babel/plugin-proposal-decorators": "7.14.5",
  	"@babel/plugin-proposal-do-expressions": "7.14.5",
  	"@babel/plugin-proposal-export-default-from": "7.14.5",
  	"@babel/plugin-proposal-export-namespace-from": "7.14.5",
  	"@babel/plugin-proposal-function-bind": "7.14.5",
  	"@babel/plugin-proposal-function-sent": "7.14.5",
  	"@babel/plugin-proposal-json-strings": "7.14.5",
  	"@babel/plugin-proposal-logical-assignment-operators": "7.14.5",
  	"@babel/plugin-proposal-nullish-coalescing-operator": "7.14.5",
  	"@babel/plugin-proposal-numeric-separator": "7.14.5",
  	"@babel/plugin-proposal-optional-chaining": "7.14.5",
  	"@babel/plugin-proposal-pipeline-operator": "7.14.8",
  	"@babel/plugin-proposal-throw-expressions": "7.14.5",
  	"@babel/plugin-syntax-dynamic-import": "7.8.3",
  	"@babel/plugin-syntax-import-meta": "7.10.4",
  	"@babel/plugin-transform-runtime": "7.14.5",
  	"@babel/preset-env": "7.14.9",
  	"@babel/preset-react": "7.14.5",
  	"@babel/runtime": "7.14.8",
  	"@rollup/plugin-alias": "3.1.5",
  	"@testing-library/react": "12.0.0",
  	"@types/jest": "26.0.24",
  	"@types/react": "17.0.15",
  	"@types/react-dom": "17.0.9",
  	"@types/react-reconciler": "0.26.3",
  	"babel-core": "7.0.0-beta.3",
  	"babel-eslint": "10.1.0",
  	"babel-jest": "26.6.3",
  	"babel-plugin-module-resolver": "4.1.0",
  	canvas: "2.8.0",
  	"cross-env": "7.0.3",
  	docz: "2.3.1",
  	eslint: "7.32.0",
  	"eslint-config-prettier": "8.3.0",
  	"eslint-plugin-prettier": "3.4.0",
  	"eslint-plugin-react": "7.24.0",
  	"if-env": "1.0.4",
  	jest: "26.6.3",
  	"jest-webgl-canvas-mock": "0.2.3",
  	"lodash.isnil": "4.0.0",
  	"lodash.times": "4.3.2",
  	"performance-now": "2.1.0",
  	"pixi.js": "6.1.0",
  	prettier: "2.3.2",
  	"prop-types": "15.7.2",
  	react: "17.0.2",
  	"react-dom": "17.0.2",
  	"react-reconciler": "0.26.2",
  	"react-spring": "9.2.4",
  	"react-test-renderer": "17.0.2",
  	rimraf: "3.0.2",
  	rollup: "2.55.1",
  	"rollup-plugin-babel": "4.4.0",
  	"rollup-plugin-commonjs": "10.1.0",
  	"rollup-plugin-filesize": "9.1.1",
  	"rollup-plugin-json": "4.0.0",
  	"rollup-plugin-node-globals": "1.4.0",
  	"rollup-plugin-node-resolve": "5.2.0",
  	"rollup-plugin-replace": "2.2.0",
  	"rollup-plugin-terser": "7.0.2",
  	typescript: "4.3.5"
  };
  var peerDependencies = {
  	"pixi.js": "^6.0.0",
  	"prop-types": "^15.7.2",
  	react: "^17.0.1",
  	"react-dom": "^17.0.1"
  };
  var jest = {
  	collectCoverage: false,
  	roots: [
  		"./test"
  	],
  	setupFiles: [
  		"jest-webgl-canvas-mock",
  		"<rootDir>/test/bootstrap.js",
  		"<rootDir>/test/__mocks__/matchMediaMock.js"
  	]
  };
  var resolutions = {
  	"get-pkg-repo": "4.1.1",
  	"hosted-git-info": "^2.1.4"
  };
  var dependencies = {
  };
  var pkg = {
  	name: name,
  	version: version$1,
  	description: description,
  	main: main,
  	"umd:main": "umd.js",
  	module: module,
  	"jsnext:main": "module.js",
  	author: author,
  	license: license,
  	scripts: scripts,
  	repository: repository,
  	files: files,
  	typings: typings,
  	devDependencies: devDependencies,
  	peerDependencies: peerDependencies,
  	jest: jest,
  	resolutions: resolutions,
  	dependencies: dependencies
  };

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  function nextTick(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues
  var versions = {};
  var release = {};
  var config = {};

  function noop$1() {}

  var on = noop$1;
  var addListener = noop$1;
  var once = noop$1;
  var off = noop$1;
  var removeListener = noop$1;
  var removeAllListeners = noop$1;
  var emit = noop$1;

  function binding(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd () { return '/' }
  function chdir (dir) {
      throw new Error('process.chdir is not supported');
  }function umask() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance$1 = global$1.performance || {};
  var performanceNow$1 =
    performance$1.now        ||
    performance$1.mozNow     ||
    performance$1.msNow      ||
    performance$1.oNow       ||
    performance$1.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp){
    var clocktime = performanceNow$1.call(performance$1)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var process = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var performanceNow = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.2
  (function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

    if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
      module.exports = function() {
        return performance.now();
      };
    } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
      module.exports = function() {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      module.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      module.exports = function() {
        return new Date().getTime() - loadTime;
      };
      loadTime = new Date().getTime();
    }

  }).call(commonjsGlobal);


  });

  var NO_CONTEXT = {};
  function _appendChild(parent, child) {
    if (parent.addChild) {
      parent.addChild(child);
      if (typeof child.didMount === 'function') {
        child.didMount.call(child, child, parent);
      }
    }
  }
  function _removeChild(parent, child) {
    var _child$config, _child$children, _child$config2;
    if (typeof child.willUnmount === 'function') {
      child.willUnmount.call(child, child, parent);
    }

    // unmount potential children
    if ((child === null || child === void 0 ? void 0 : (_child$config = child.config) === null || _child$config === void 0 ? void 0 : _child$config.destroyChildren) !== false && (_child$children = child.children) !== null && _child$children !== void 0 && _child$children.length) {
      _toConsumableArray(child.children).forEach(function (c) {
        _removeChild(child, c);
      });
    }
    parent.removeChild(child);
    if ((child === null || child === void 0 ? void 0 : (_child$config2 = child.config) === null || _child$config2 === void 0 ? void 0 : _child$config2.destroy) !== false) {
      child.destroy();
    }
  }
  function insertBefore(parent, child, beforeChild) {
    invariant(child !== beforeChild, 'react-pixi: PixiFiber cannot insert node before itself');
    var childExists = parent.children.indexOf(child) !== -1;
    var index = parent.getChildIndex(beforeChild);
    childExists ? parent.setChildIndex(child, index) : parent.addChildAt(child, index);
  }

  // get diff between 2 objects
  // https://github.com/facebook/react/blob/97e2911/packages/react-dom/src/client/ReactDOMFiberComponent.js#L546
  function diffProperties(pixiElement, type, lastProps, nextProps, rootContainerElement) {
    var updatePayload = null;
    for (var propKey in lastProps) {
      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
        continue;
      }
      if (propKey === CHILDREN) ; else {
        // For all other deleted properties we add it to the queue. We use
        // the whitelist in the commit phase instead.
        if (!updatePayload) {
          updatePayload = [];
        }
        updatePayload.push(propKey, null);
      }
    }
    for (var _propKey in nextProps) {
      var nextProp = nextProps[_propKey];
      var lastProp = lastProps != null ? lastProps[_propKey] : undefined;
      if (!nextProps.hasOwnProperty(_propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
        continue;
      }
      if (_propKey === CHILDREN) ; else {
        // For any other property we always add it to the queue and then we
        // filter it out using the whitelist during the commit.
        if (!updatePayload) {
          updatePayload = [];
        }
        updatePayload.push(_propKey, nextProp);
      }
    }
    return updatePayload;
  }
  var prepareChanged = null;
  var HostConfig = {
    getRootHostContext: function getRootHostContext() {
      return NO_CONTEXT;
    },
    getChildHostContext: function getChildHostContext() {
      return NO_CONTEXT;
    },
    getChildHostContextForEventComponent: function getChildHostContextForEventComponent(parentHostContext) {
      return parentHostContext;
    },
    getPublicInstance: function getPublicInstance(instance) {
      return instance;
    },
    prepareForCommit: function prepareForCommit() {
      // noop
      return null;
    },
    resetAfterCommit: function resetAfterCommit() {
      // noop
    },
    createInstance: createElement,
    hideInstance: function hideInstance(instance) {
      instance.visible = false;
    },
    unhideInstance: function unhideInstance(instance, props) {
      var visible = props !== undefined && props !== null && props.hasOwnProperty('visible') ? props.visible : true;
      instance.visible = visible;
    },
    finalizeInitialChildren: function finalizeInitialChildren(wordElement, type, props) {
      return false;
    },
    prepareUpdate: function prepareUpdate(pixiElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
      prepareChanged = diffProperties(pixiElement, type, oldProps, newProps);
      return prepareChanged;
    },
    shouldSetTextContent: function shouldSetTextContent(type, props) {
      return false;
    },
    shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree(type, props) {
      var isAlphaVisible = typeof props.alpha === 'undefined' || props.alpha > 0;
      var isRenderable = typeof props.renderable === 'undefined' || props.renderable === true;
      var isVisible = typeof props.visible === 'undefined' || props.visible === true;
      return !(isAlphaVisible && isRenderable && isVisible);
    },
    createTextInstance: function createTextInstance(text, rootContainerInstance, internalInstanceHandler) {
      invariant(false, 'react-pixi: Error trying to add text node "' + text + '"', 'PixiFiber does not support text nodes as children of a Pixi component. ' + 'To pass a string value to your component, use a property other than children. ' + 'If you wish to display some text, you can use &lt;Text text={string} /&gt; instead.');
    },
    unhideTextInstance: function unhideTextInstance(textInstance, text) {
      // noop
    },
    mountEventComponent: function mountEventComponent() {
      // noop
    },
    updateEventComponent: function updateEventComponent() {
      // noop
    },
    handleEventTarget: function handleEventTarget() {
      // noop
    },
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    warnsIfNotActing: false,
    now: performanceNow,
    isPrimaryRenderer: false,
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    /**
     * -------------------------------------------
     * Mutation
     * -------------------------------------------
     */
    appendInitialChild: function appendInitialChild() {
      var _args$0$__reactpixi, _args$0$__reactpixi$r;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var res = _appendChild.apply(null, args);
      (_args$0$__reactpixi = args[0].__reactpixi) === null || _args$0$__reactpixi === void 0 ? void 0 : (_args$0$__reactpixi$r = _args$0$__reactpixi.root) === null || _args$0$__reactpixi$r === void 0 ? void 0 : _args$0$__reactpixi$r.emit("__REACT_PIXI_REQUEST_RENDER__", {
        detail: 'appendInitialChild'
      });
      return res;
    },
    appendChild: function appendChild() {
      var _args$0$__reactpixi2, _args$0$__reactpixi2$;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var res = _appendChild.apply(null, args);
      (_args$0$__reactpixi2 = args[0].__reactpixi) === null || _args$0$__reactpixi2 === void 0 ? void 0 : (_args$0$__reactpixi2$ = _args$0$__reactpixi2.root) === null || _args$0$__reactpixi2$ === void 0 ? void 0 : _args$0$__reactpixi2$.emit("__REACT_PIXI_REQUEST_RENDER__", {
        detail: 'appendChild'
      });
      return res;
    },
    appendChildToContainer: function appendChildToContainer() {
      var _args$0$__reactpixi3, _args$0$__reactpixi3$;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var res = _appendChild.apply(null, args);
      (_args$0$__reactpixi3 = args[0].__reactpixi) === null || _args$0$__reactpixi3 === void 0 ? void 0 : (_args$0$__reactpixi3$ = _args$0$__reactpixi3.root) === null || _args$0$__reactpixi3$ === void 0 ? void 0 : _args$0$__reactpixi3$.emit("__REACT_PIXI_REQUEST_RENDER__", {
        detail: 'appendChildToContainer'
      });
      return res;
    },
    removeChild: function removeChild() {
      var _args$0$__reactpixi4, _args$0$__reactpixi4$;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var res = _removeChild.apply(null, args);
      (_args$0$__reactpixi4 = args[0].__reactpixi) === null || _args$0$__reactpixi4 === void 0 ? void 0 : (_args$0$__reactpixi4$ = _args$0$__reactpixi4.root) === null || _args$0$__reactpixi4$ === void 0 ? void 0 : _args$0$__reactpixi4$.emit("__REACT_PIXI_REQUEST_RENDER__", {
        detail: 'removeChild'
      });
      return res;
    },
    removeChildFromContainer: function removeChildFromContainer() {
      var _args$0$__reactpixi5, _args$0$__reactpixi5$;
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      var res = _removeChild.apply(null, args);
      (_args$0$__reactpixi5 = args[0].__reactpixi) === null || _args$0$__reactpixi5 === void 0 ? void 0 : (_args$0$__reactpixi5$ = _args$0$__reactpixi5.root) === null || _args$0$__reactpixi5$ === void 0 ? void 0 : _args$0$__reactpixi5$.emit("__REACT_PIXI_REQUEST_RENDER__", {
        detail: 'removeChildFromContainer'
      });
      return res;
    },
    insertBefore: insertBefore,
    insertInContainerBefore: function insertInContainerBefore() {
      var _args$0$__reactpixi6, _args$0$__reactpixi6$;
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      var res = insertBefore.apply(null, args);
      (_args$0$__reactpixi6 = args[0].__reactpixi) === null || _args$0$__reactpixi6 === void 0 ? void 0 : (_args$0$__reactpixi6$ = _args$0$__reactpixi6.root) === null || _args$0$__reactpixi6$ === void 0 ? void 0 : _args$0$__reactpixi6$.emit("__REACT_PIXI_REQUEST_RENDER__", {
        detail: 'insertInContainerBefore'
      });
      return res;
    },
    commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
      var applyProps = instance && instance.applyProps;
      if (typeof applyProps !== 'function') {
        applyProps = applyDefaultProps;
      }
      var changed = applyProps(instance, oldProps, newProps);
      if (changed || prepareChanged) {
        var _instance$__reactpixi, _instance$__reactpixi2;
        (_instance$__reactpixi = instance.__reactpixi) === null || _instance$__reactpixi === void 0 ? void 0 : (_instance$__reactpixi2 = _instance$__reactpixi.root) === null || _instance$__reactpixi2 === void 0 ? void 0 : _instance$__reactpixi2.emit("__REACT_PIXI_REQUEST_RENDER__", {
          detail: 'commitUpdate'
        });
      }
    },
    commitMount: function commitMount(instance, updatePayload, type, oldProps, newProps) {
      // noop
    },
    commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
      // noop
    },
    resetTextContent: function resetTextContent(pixiElement) {
      // noop
    },
    clearContainer: function clearContainer(container) {
      // TODO implement this
    },
    getFundamentalComponentInstance: function getFundamentalComponentInstance(fundamentalInstance) {
      throw new Error('Not yet implemented.');
    },
    mountFundamentalComponent: function mountFundamentalComponent(fundamentalInstance) {
      throw new Error('Not yet implemented.');
    },
    shouldUpdateFundamentalComponent: function shouldUpdateFundamentalComponent(fundamentalInstance) {
      throw new Error('Not yet implemented.');
    },
    unmountFundamentalComponent: function unmountFundamentalComponent(fundamentalInstance) {
      throw new Error('Not yet implemented.');
    },
    getInstanceFromNode: function getInstanceFromNode(node) {
      throw new Error('Not yet implemented.');
    },
    isOpaqueHydratingObject: function isOpaqueHydratingObject(value) {
      throw new Error('Not yet implemented');
    },
    makeOpaqueHydratingObject: function makeOpaqueHydratingObject(attemptToReadValue) {
      throw new Error('Not yet implemented.');
    },
    makeClientIdInDEV: function makeClientIdInDEV(warnOnAccessInDEV) {
      throw new Error('Not yet implemented');
    },
    beforeActiveInstanceBlur: function beforeActiveInstanceBlur(internalInstanceHandle) {
      // noop
    },
    afterActiveInstanceBlur: function afterActiveInstanceBlur() {
      // noop
    },
    preparePortalMount: function preparePortalMount(portalInstance) {
      // noop
    }
  };

  var PixiFiber = Reconciler__default['default'](HostConfig);
  var REACT_DOM_VERSION = pkg.devDependencies['react-dom'].replace(/[^0-9.]/g, '');
  var PACKAGE_NAME = pkg.name;
  PixiFiber.injectIntoDevTools({
    bundleType: 1 ,
    version: REACT_DOM_VERSION,
    rendererPackageName: PACKAGE_NAME,
    findHostInstanceByFiber: PixiFiber.findHostInstance
  });

  // cache root containers
  var roots = new Map();

  /**
   * Custom Renderer
   * Use this without React-DOM
   *
   * @param {*} element
   * @param {PIXI.Container} container (i.e. the Stage)
   * @param {Function} callback
   */
  function render(element, container) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    invariant(pixi.Container.prototype.isPrototypeOf(container), 'Invalid argument `container`, expected instance of `PIXI.Container`.');
    var root = roots.get(container);
    if (!root) {
      // get the flushed fiber container
      root = PixiFiber.createContainer(container);
      roots.set(container, root);
    }

    // schedules a top level update
    PixiFiber.updateContainer(element, root, undefined, callback);

    // return the root instance
    return PixiFiber.getPublicRootInstance(root);
  }
  function unmountComponentAtNode(container) {
    if (roots.has(container)) {
      // unmount component
      PixiFiber.updateContainer(null, roots.get(container), undefined, function () {
        roots.delete(container);
      });
    }
  }

  var reactIs_development = createCommonjsModule(function (module, exports) {



  {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
  exports.isValidElementType = isValidElementType;
  exports.typeOf = typeOf;
    })();
  }
  });
  reactIs_development.AsyncMode;
  reactIs_development.ConcurrentMode;
  reactIs_development.ContextConsumer;
  reactIs_development.ContextProvider;
  reactIs_development.Element;
  reactIs_development.ForwardRef;
  reactIs_development.Fragment;
  reactIs_development.Lazy;
  reactIs_development.Memo;
  reactIs_development.Portal;
  reactIs_development.Profiler;
  reactIs_development.StrictMode;
  reactIs_development.Suspense;
  reactIs_development.isAsyncMode;
  reactIs_development.isConcurrentMode;
  reactIs_development.isContextConsumer;
  reactIs_development.isContextProvider;
  reactIs_development.isElement;
  reactIs_development.isForwardRef;
  reactIs_development.isFragment;
  reactIs_development.isLazy;
  reactIs_development.isMemo;
  reactIs_development.isPortal;
  reactIs_development.isProfiler;
  reactIs_development.isStrictMode;
  reactIs_development.isSuspense;
  reactIs_development.isValidElementType;
  reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  var printWarning$1 = function() {};

  {
    var ReactPropTypesSecret = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has$1(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning$1(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning$1(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning = function() {};

  {
    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes$1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
  });

  var Context = /*#__PURE__*/React__default['default'].createContext(null);
  var AppProvider = Context.Provider;
  var AppConsumer = Context.Consumer;
  var withPixiApp = function withPixiApp(BaseComponent) {
    var wrapper = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
      return /*#__PURE__*/React__default['default'].createElement(AppConsumer, null, function (app) {
        return /*#__PURE__*/React__default['default'].createElement(BaseComponent, _extends({}, props, {
          ref: ref,
          app: app
        }));
      });
    });
    wrapper.displayName = "withPIXIApp(".concat(BaseComponent.displayName || BaseComponent.name, ")");
    return wrapper;
  };

  var noop = function noop() {};

  /**
   * -------------------------------------------
   * Stage React Component (use this in react-dom)
   *
   * @usage
   *
   * const App = () => (
   *   <Stage
   *     width={500}
   *     height={500}
   *     options={ backgroundColor: 0xff0000 }
   *     onMount={( renderer, canvas ) => {
   *       console.log('PIXI renderer: ', renderer)
   *       console.log('Canvas element: ', canvas)
   *     }}>
   * );
   *
   * -------------------------------------------
   */

  var propTypes = {
    // dimensions
    width: propTypes$1.number,
    height: propTypes$1.number,
    // will return renderer
    onMount: propTypes$1.func,
    onUnmount: propTypes$1.func,
    // run ticker at start?
    raf: propTypes$1.bool,
    // render component on component lifecycle changes?
    renderOnComponentChange: propTypes$1.bool,
    children: propTypes$1.node,
    // PIXI options, see https://pixijs.download/dev/docs/PIXI.Application.html
    options: propTypes$1.shape({
      autoStart: propTypes$1.bool,
      width: propTypes$1.number,
      height: propTypes$1.number,
      useContextAlpha: propTypes$1.bool,
      backgroundAlpha: propTypes$1.number,
      autoDensity: propTypes$1.bool,
      antialias: propTypes$1.bool,
      preserveDrawingBuffer: propTypes$1.bool,
      resolution: propTypes$1.number,
      forceCanvas: propTypes$1.bool,
      backgroundColor: propTypes$1.number,
      clearBeforeRender: propTypes$1.bool,
      powerPreference: propTypes$1.string,
      sharedTicker: propTypes$1.bool,
      sharedLoader: propTypes$1.bool,
      // resizeTo needs to be a window or HTMLElement
      resizeTo: function resizeTo(props, propName) {
        var el = props[propName];
        el && invariant(el === window || el instanceof HTMLElement, "Invalid prop `resizeTo` of type ".concat(_typeof(el), ", expect `window` or an `HTMLElement`."));
      },
      // view is optional, use if provided
      view: function view(props, propName, componentName) {
        var el = props[propName];
        el && invariant(el instanceof HTMLCanvasElement, "Invalid prop `view` of type ".concat(_typeof(el), ", supplied to ").concat(componentName, ", expected `<canvas> Element`"));
      }
    })
  };
  var defaultProps = {
    width: 800,
    height: 600,
    onMount: noop,
    onUnmount: noop,
    raf: true,
    renderOnComponentChange: true
  };
  function getCanvasProps(props) {
    var reserved = [].concat(_toConsumableArray(Object.keys(propTypes)), _toConsumableArray(Object.keys(PROPS_DISPLAY_OBJECT)));
    return Object.keys(props).filter(function (p) {
      return !reserved.includes(p);
    }).reduce(function (all, prop) {
      return _objectSpread2(_objectSpread2({}, all), {}, _defineProperty({}, prop, props[prop]));
    }, {});
  }
  var Stage = /*#__PURE__*/function (_React$Component) {
    function Stage() {
      var _this;
      _classCallCheck(this, Stage);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, Stage, [].concat(args));
      _defineProperty(_this, "_canvas", null);
      _defineProperty(_this, "_mediaQuery", null);
      _defineProperty(_this, "_ticker", null);
      _defineProperty(_this, "_needsUpdate", true);
      _defineProperty(_this, "app", null);
      _defineProperty(_this, "updateSize", function () {
        var _this$props = _this.props,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options;
        if (!(options !== null && options !== void 0 && options.resolution)) {
          _this.app.renderer.resolution = window.devicePixelRatio;
          _this.resetInteractionManager();
        }
        _this.app.renderer.resize(width, height);
      });
      _defineProperty(_this, "needsRenderUpdate", function () {
        _this._needsUpdate = true;
      });
      _defineProperty(_this, "renderStage", function () {
        var _this$props2 = _this.props,
          renderOnComponentChange = _this$props2.renderOnComponentChange,
          raf = _this$props2.raf;
        if (!raf && renderOnComponentChange && _this._needsUpdate) {
          _this._needsUpdate = false;
          _this.app.renderer.render(_this.app.stage);
        }
      });
      return _this;
    }
    _inherits(Stage, _React$Component);
    return _createClass(Stage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props3 = this.props,
          onMount = _this$props3.onMount,
          width = _this$props3.width,
          height = _this$props3.height,
          options = _this$props3.options,
          raf = _this$props3.raf,
          renderOnComponentChange = _this$props3.renderOnComponentChange;
        this.app = new pixi.Application(_objectSpread2(_objectSpread2({
          width: width,
          height: height,
          view: this._canvas
        }, options), {}, {
          autoDensity: (options === null || options === void 0 ? void 0 : options.autoDensity) !== false
        }));
        this.app.ticker.autoStart = false;
        this.app.ticker[raf ? 'start' : 'stop']();
        this.app.stage.__reactpixi = {
          root: this.app.stage
        };
        this.mountNode = PixiFiber.createContainer(this.app.stage);
        PixiFiber.updateContainer(this.getChildren(), this.mountNode, this);
        onMount(this.app);

        // update size on media query resolution change?
        // only if autoDensity = true
        if (options !== null && options !== void 0 && options.autoDensity && window.matchMedia && (options === null || options === void 0 ? void 0 : options.resolution) === undefined) {
          this._mediaQuery = window.matchMedia("(-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi)");
          this._mediaQuery.addListener(this.updateSize);
        }

        // listen for reconciler changes
        if (renderOnComponentChange && !raf) {
          this._ticker = new pixi.Ticker();
          this._ticker.autoStart = true;
          this._ticker.add(this.renderStage);
          this.app.stage.on('__REACT_PIXI_REQUEST_RENDER__', this.needsRenderUpdate);
        }
        this.updateSize();
        this.renderStage();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState, prevContext) {
        var _prevProps$options;
        var _this$props4 = this.props,
          width = _this$props4.width,
          height = _this$props4.height,
          raf = _this$props4.raf,
          renderOnComponentChange = _this$props4.renderOnComponentChange,
          options = _this$props4.options;

        // update resolution
        if ((options === null || options === void 0 ? void 0 : options.resolution) !== undefined && (prevProps === null || prevProps === void 0 ? void 0 : prevProps.options.resolution) !== (options === null || options === void 0 ? void 0 : options.resolution)) {
          this.app.renderer.resolution = options.resolution;
          this.resetInteractionManager();
        }

        // update size
        if (prevProps.height !== height || prevProps.width !== width || ((_prevProps$options = prevProps.options) === null || _prevProps$options === void 0 ? void 0 : _prevProps$options.resolution) !== (options === null || options === void 0 ? void 0 : options.resolution)) {
          this.updateSize();
        }

        // handle raf change
        if (prevProps.raf !== raf) {
          this.app.ticker[raf ? 'start' : 'stop']();
        }

        // flush fiber
        PixiFiber.updateContainer(this.getChildren(), this.mountNode, this);
        if (prevProps.width !== width || prevProps.height !== height || prevProps.raf !== raf || prevProps.renderOnComponentChange !== renderOnComponentChange || prevProps.options !== options) {
          this._needsUpdate = true;
          this.renderStage();
        }
      }
    }, {
      key: "resetInteractionManager",
      value: function resetInteractionManager() {
        // `interaction` property could be absent if user has installed Federated Events API plugin.
        // https://api.pixijs.io/@pixi/events.html
        if ('interaction' in this.app.renderer.plugins) {
          this.app.renderer.plugins.interaction.resolution = this.app.renderer.resolution;
        }
      }
    }, {
      key: "getChildren",
      value: function getChildren() {
        var children = this.props.children;
        return /*#__PURE__*/React__default['default'].createElement(AppProvider, {
          value: this.app
        }, children);
      }
    }, {
      key: "componentDidCatch",
      value: function componentDidCatch(error, errorInfo) {
        console.error("Error occurred in `Stage`.");
        console.error(error);
        console.error(errorInfo);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.onUnmount(this.app);
        if (this._ticker) {
          this._ticker.remove(this.renderStage);
          this._ticker.destroy();
        }
        this.app.stage.off('__REACT_PIXI_REQUEST_RENDER__', this.needsRenderUpdate);
        PixiFiber.updateContainer(null, this.mountNode, this);
        if (this._mediaQuery) {
          this._mediaQuery.removeListener(this.updateSize);
          this._mediaQuery = null;
        }
        this.app.destroy();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var options = this.props.options;
        if (options && options.view) {
          invariant(options.view instanceof HTMLCanvasElement, 'options.view needs to be a `HTMLCanvasElement`');
          return null;
        }
        return /*#__PURE__*/React__default['default'].createElement("canvas", _extends({}, getCanvasProps(this.props), {
          ref: function ref(c) {
            return _this2._canvas = c;
          }
        }));
      }
    }]);
  }(React__default['default'].Component);
  Stage.propTypes = propTypes;
  Stage.defaultProps = defaultProps;

  function useApp() {
    var app = React.useContext(Context);
    invariant(app instanceof pixi.Application, 'No Context found with `%s`. Make sure to wrap component with `%s`', 'PIXI.Application', 'AppProvider');
    return app;
  }

  function useTick(callback) {
    var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var app = useApp();
    invariant(typeof callback === 'function', '`useTick` needs a callback function.');
    invariant(app instanceof pixi.Application, 'No Context found with `%s`. Make sure to wrap component with `%s`', 'PIXI.Application', 'AppProvider');
    var savedRef = React.useRef(null);
    React.useEffect(function () {
      savedRef.current = callback;
    }, [callback]);
    React.useEffect(function () {
      if (enabled) {
        var tick = function tick(delta) {
          return savedRef.current.apply(app.ticker, [delta, app.ticker]);
        };
        app.ticker.add(tick);
        return function () {
          if (app.ticker) {
            app.ticker.remove(tick);
          }
        };
      }
    }, [enabled]);
  }

  var _excluded = ["children", "apply"];
  var withFilters = function withFilters(WrapperComponent, filters) {
    invariant(_typeof(filters) === 'object', 'Second argument needs to be an indexed object with { prop: Filter }');
    var keys = Object.keys(filters);
    var Wrapper = function Wrapper(_ref) {
      var children = _ref.children,
        apply = _ref.apply,
        props = _objectWithoutProperties(_ref, _excluded);
      // create filters
      var filterList = React.useRef(React.useMemo(function () {
        return keys.map(function (prop) {
          var _props$prop;
          var constructorArgs = (props === null || props === void 0 ? void 0 : (_props$prop = props[prop]) === null || _props$prop === void 0 ? void 0 : _props$prop.construct) || [];
          return _construct(filters[prop], _toConsumableArray(constructorArgs));
        });
      }, [keys]));
      var filterObj = React.useMemo(function () {
        return keys.reduce(function (all, c, i) {
          return _objectSpread2(_objectSpread2({}, all), {}, _defineProperty({}, c, filterList.current[i]));
        }, {});
      }, [keys]);

      // get rest props
      var restProps = React.useMemo(function () {
        return Object.keys(props).filter(not(hasKey(keys))).reduce(function (all, c) {
          return _objectSpread2(_objectSpread2({}, all), {}, _defineProperty({}, c, props[c]));
        }, {});
      }, [props, keys]);

      // update filter params
      keys.forEach(function (k, i) {
        return Object.assign(filterList.current[i], props[k]);
      });

      // use apply ?
      if (apply && isFunction(apply)) {
        apply.call(WrapperComponent, filterObj);
      }
      return /*#__PURE__*/React__default['default'].createElement(WrapperComponent, _extends({}, restProps, {
        filters: filterList.current
      }), children);
    };
    Wrapper.displayName = 'FilterWrapper';
    Wrapper.propTypes = {
      children: propTypes$1.node,
      apply: propTypes$1.func
    };
    return Wrapper;
  };

  var BitmapText = TYPES.BitmapText;
  var Container = TYPES.Container;
  var Graphics = TYPES.Graphics;
  var NineSlicePlane = TYPES.NineSlicePlane;
  var ParticleContainer = TYPES.ParticleContainer;
  var Sprite = TYPES.Sprite;
  var AnimatedSprite = TYPES.AnimatedSprite;
  var Text = TYPES.Text;
  var TilingSprite = TYPES.TilingSprite;
  var SimpleMesh = TYPES.SimpleMesh;
  var SimpleRope = TYPES.SimpleRope;

  exports.AnimatedSprite = AnimatedSprite;
  exports.AppConsumer = AppConsumer;
  exports.AppContext = Context;
  exports.AppProvider = AppProvider;
  exports.BitmapText = BitmapText;
  exports.Container = Container;
  exports.Graphics = Graphics;
  exports.NineSlicePlane = NineSlicePlane;
  exports.ParticleContainer = ParticleContainer;
  exports.PixiComponent = PixiComponent;
  exports.PixiFiber = PixiFiber;
  exports.SimpleMesh = SimpleMesh;
  exports.SimpleRope = SimpleRope;
  exports.Sprite = Sprite;
  exports.Stage = Stage;
  exports.Text = Text;
  exports.TilingSprite = TilingSprite;
  exports.applyDefaultProps = applyDefaultProps;
  exports.eventHandlers = eventHandlers;
  exports.render = render;
  exports.unmountComponentAtNode = unmountComponentAtNode;
  exports.useApp = useApp;
  exports.useTick = useTick;
  exports.withFilters = withFilters;
  exports.withPixiApp = withPixiApp;

  Object.defineProperty(exports, '__esModule', { value: true });

});
