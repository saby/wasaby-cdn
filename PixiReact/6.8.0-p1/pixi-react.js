define('pixi-react', ['exports', 'pixi', 'react'], function (exports, pixi, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

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

  var scheduler_production_min = createCommonjsModule(function (module, exports) {
  var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
  if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
  window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
  E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
  x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
  function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
  function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
  function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
  exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
  exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
  exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
  exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
  });
  scheduler_production_min.unstable_now;
  scheduler_production_min.unstable_shouldYield;
  scheduler_production_min.unstable_forceFrameRate;
  scheduler_production_min.unstable_IdlePriority;
  scheduler_production_min.unstable_ImmediatePriority;
  scheduler_production_min.unstable_LowPriority;
  scheduler_production_min.unstable_NormalPriority;
  scheduler_production_min.unstable_Profiling;
  scheduler_production_min.unstable_UserBlockingPriority;
  scheduler_production_min.unstable_cancelCallback;
  scheduler_production_min.unstable_continueExecution;
  scheduler_production_min.unstable_getCurrentPriorityLevel;
  scheduler_production_min.unstable_getFirstCallbackNode;
  scheduler_production_min.unstable_next;
  scheduler_production_min.unstable_pauseExecution;
  scheduler_production_min.unstable_requestPaint;
  scheduler_production_min.unstable_runWithPriority;
  scheduler_production_min.unstable_scheduleCallback;
  scheduler_production_min.unstable_wrapCallback;

  var scheduler_development = createCommonjsModule(function (module, exports) {

  {
    (function() {

  var enableSchedulerDebugging = false;
  var enableProfiling = false;

  var requestHostCallback;
  var requestHostTimeout;
  var cancelHostTimeout;
  var requestPaint;
  var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

  if (hasPerformanceNow) {
    var localPerformance = performance;

    exports.unstable_now = function () {
      return localPerformance.now();
    };
  } else {
    var localDate = Date;
    var initialTime = localDate.now();

    exports.unstable_now = function () {
      return localDate.now() - initialTime;
    };
  }

  if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
  // implementation using setTimeout.
  typeof window === 'undefined' || // Check if MessageChannel is supported, too.
  typeof MessageChannel !== 'function') {
    // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
    // fallback to a naive implementation.
    var _callback = null;
    var _timeoutID = null;

    var _flushCallback = function () {
      if (_callback !== null) {
        try {
          var currentTime = exports.unstable_now();
          var hasRemainingTime = true;

          _callback(hasRemainingTime, currentTime);

          _callback = null;
        } catch (e) {
          setTimeout(_flushCallback, 0);
          throw e;
        }
      }
    };

    requestHostCallback = function (cb) {
      if (_callback !== null) {
        // Protect against re-entrancy.
        setTimeout(requestHostCallback, 0, cb);
      } else {
        _callback = cb;
        setTimeout(_flushCallback, 0);
      }
    };

    requestHostTimeout = function (cb, ms) {
      _timeoutID = setTimeout(cb, ms);
    };

    cancelHostTimeout = function () {
      clearTimeout(_timeoutID);
    };

    exports.unstable_shouldYield = function () {
      return false;
    };

    requestPaint = exports.unstable_forceFrameRate = function () {};
  } else {
    // Capture local references to native APIs, in case a polyfill overrides them.
    var _setTimeout = window.setTimeout;
    var _clearTimeout = window.clearTimeout;

    if (typeof console !== 'undefined') {
      // TODO: Scheduler no longer requires these methods to be polyfilled. But
      // maybe we want to continue warning if they don't exist, to preserve the
      // option to rely on it in the future?
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame;

      if (typeof requestAnimationFrame !== 'function') {
        // Using console['error'] to evade Babel and ESLint
        console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
      }

      if (typeof cancelAnimationFrame !== 'function') {
        // Using console['error'] to evade Babel and ESLint
        console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
      }
    }

    var isMessageLoopRunning = false;
    var scheduledHostCallback = null;
    var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
    // thread, like user events. By default, it yields multiple times per frame.
    // It does not attempt to align with frame boundaries, since most tasks don't
    // need to be frame aligned; for those that do, use requestAnimationFrame.

    var yieldInterval = 5;
    var deadline = 0; // TODO: Make this configurable

    {
      // `isInputPending` is not available. Since we have no way of knowing if
      // there's pending input, always yield at the end of the frame.
      exports.unstable_shouldYield = function () {
        return exports.unstable_now() >= deadline;
      }; // Since we yield every frame regardless, `requestPaint` has no effect.


      requestPaint = function () {};
    }

    exports.unstable_forceFrameRate = function (fps) {
      if (fps < 0 || fps > 125) {
        // Using console['error'] to evade Babel and ESLint
        console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
        return;
      }

      if (fps > 0) {
        yieldInterval = Math.floor(1000 / fps);
      } else {
        // reset the framerate
        yieldInterval = 5;
      }
    };

    var performWorkUntilDeadline = function () {
      if (scheduledHostCallback !== null) {
        var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
        // cycle. This means there's always time remaining at the beginning of
        // the message event.

        deadline = currentTime + yieldInterval;
        var hasTimeRemaining = true;

        try {
          var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

          if (!hasMoreWork) {
            isMessageLoopRunning = false;
            scheduledHostCallback = null;
          } else {
            // If there's more work, schedule the next message event at the end
            // of the preceding one.
            port.postMessage(null);
          }
        } catch (error) {
          // If a scheduler task throws, exit the current browser task so the
          // error can be observed.
          port.postMessage(null);
          throw error;
        }
      } else {
        isMessageLoopRunning = false;
      } // Yielding to the browser will give it a chance to paint, so we can
    };

    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = performWorkUntilDeadline;

    requestHostCallback = function (callback) {
      scheduledHostCallback = callback;

      if (!isMessageLoopRunning) {
        isMessageLoopRunning = true;
        port.postMessage(null);
      }
    };

    requestHostTimeout = function (callback, ms) {
      taskTimeoutID = _setTimeout(function () {
        callback(exports.unstable_now());
      }, ms);
    };

    cancelHostTimeout = function () {
      _clearTimeout(taskTimeoutID);

      taskTimeoutID = -1;
    };
  }

  function push(heap, node) {
    var index = heap.length;
    heap.push(node);
    siftUp(heap, node, index);
  }
  function peek(heap) {
    var first = heap[0];
    return first === undefined ? null : first;
  }
  function pop(heap) {
    var first = heap[0];

    if (first !== undefined) {
      var last = heap.pop();

      if (last !== first) {
        heap[0] = last;
        siftDown(heap, last, 0);
      }

      return first;
    } else {
      return null;
    }
  }

  function siftUp(heap, node, i) {
    var index = i;

    while (true) {
      var parentIndex = index - 1 >>> 1;
      var parent = heap[parentIndex];

      if (parent !== undefined && compare(parent, node) > 0) {
        // The parent is larger. Swap positions.
        heap[parentIndex] = node;
        heap[index] = parent;
        index = parentIndex;
      } else {
        // The parent is smaller. Exit.
        return;
      }
    }
  }

  function siftDown(heap, node, i) {
    var index = i;
    var length = heap.length;

    while (index < length) {
      var leftIndex = (index + 1) * 2 - 1;
      var left = heap[leftIndex];
      var rightIndex = leftIndex + 1;
      var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

      if (left !== undefined && compare(left, node) < 0) {
        if (right !== undefined && compare(right, left) < 0) {
          heap[index] = right;
          heap[rightIndex] = node;
          index = rightIndex;
        } else {
          heap[index] = left;
          heap[leftIndex] = node;
          index = leftIndex;
        }
      } else if (right !== undefined && compare(right, node) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        // Neither child is smaller. Exit.
        return;
      }
    }
  }

  function compare(a, b) {
    // Compare sort index first, then task id.
    var diff = a.sortIndex - b.sortIndex;
    return diff !== 0 ? diff : a.id - b.id;
  }

  // TODO: Use symbols?
  var ImmediatePriority = 1;
  var UserBlockingPriority = 2;
  var NormalPriority = 3;
  var LowPriority = 4;
  var IdlePriority = 5;

  function markTaskErrored(task, ms) {
  }

  /* eslint-disable no-var */
  // Math.pow(2, 30) - 1
  // 0b111111111111111111111111111111

  var maxSigned31BitInt = 1073741823; // Times out immediately

  var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

  var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
  var NORMAL_PRIORITY_TIMEOUT = 5000;
  var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

  var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

  var taskQueue = [];
  var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

  var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
  var currentTask = null;
  var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

  var isPerformingWork = false;
  var isHostCallbackScheduled = false;
  var isHostTimeoutScheduled = false;

  function advanceTimers(currentTime) {
    // Check for tasks that are no longer delayed and add them to the queue.
    var timer = peek(timerQueue);

    while (timer !== null) {
      if (timer.callback === null) {
        // Timer was cancelled.
        pop(timerQueue);
      } else if (timer.startTime <= currentTime) {
        // Timer fired. Transfer to the task queue.
        pop(timerQueue);
        timer.sortIndex = timer.expirationTime;
        push(taskQueue, timer);
      } else {
        // Remaining timers are pending.
        return;
      }

      timer = peek(timerQueue);
    }
  }

  function handleTimeout(currentTime) {
    isHostTimeoutScheduled = false;
    advanceTimers(currentTime);

    if (!isHostCallbackScheduled) {
      if (peek(taskQueue) !== null) {
        isHostCallbackScheduled = true;
        requestHostCallback(flushWork);
      } else {
        var firstTimer = peek(timerQueue);

        if (firstTimer !== null) {
          requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
      }
    }
  }

  function flushWork(hasTimeRemaining, initialTime) {


    isHostCallbackScheduled = false;

    if (isHostTimeoutScheduled) {
      // We scheduled a timeout but it's no longer needed. Cancel it.
      isHostTimeoutScheduled = false;
      cancelHostTimeout();
    }

    isPerformingWork = true;
    var previousPriorityLevel = currentPriorityLevel;

    try {
      var currentTime; if (enableProfiling) ; else {
        // No catch in prod code path.
        return workLoop(hasTimeRemaining, initialTime);
      }
    } finally {
      currentTask = null;
      currentPriorityLevel = previousPriorityLevel;
      isPerformingWork = false;
    }
  }

  function workLoop(hasTimeRemaining, initialTime) {
    var currentTime = initialTime;
    advanceTimers(currentTime);
    currentTask = peek(taskQueue);

    while (currentTask !== null && !(enableSchedulerDebugging )) {
      if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
        // This currentTask hasn't expired, and we've reached the deadline.
        break;
      }

      var callback = currentTask.callback;

      if (typeof callback === 'function') {
        currentTask.callback = null;
        currentPriorityLevel = currentTask.priorityLevel;
        var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;

        var continuationCallback = callback(didUserCallbackTimeout);
        currentTime = exports.unstable_now();

        if (typeof continuationCallback === 'function') {
          currentTask.callback = continuationCallback;
        } else {

          if (currentTask === peek(taskQueue)) {
            pop(taskQueue);
          }
        }

        advanceTimers(currentTime);
      } else {
        pop(taskQueue);
      }

      currentTask = peek(taskQueue);
    } // Return whether there's additional work


    if (currentTask !== null) {
      return true;
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }

      return false;
    }
  }

  function unstable_runWithPriority(priorityLevel, eventHandler) {
    switch (priorityLevel) {
      case ImmediatePriority:
      case UserBlockingPriority:
      case NormalPriority:
      case LowPriority:
      case IdlePriority:
        break;

      default:
        priorityLevel = NormalPriority;
    }

    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = priorityLevel;

    try {
      return eventHandler();
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  }

  function unstable_next(eventHandler) {
    var priorityLevel;

    switch (currentPriorityLevel) {
      case ImmediatePriority:
      case UserBlockingPriority:
      case NormalPriority:
        // Shift down to normal priority
        priorityLevel = NormalPriority;
        break;

      default:
        // Anything lower than normal priority should remain at the current level.
        priorityLevel = currentPriorityLevel;
        break;
    }

    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = priorityLevel;

    try {
      return eventHandler();
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  }

  function unstable_wrapCallback(callback) {
    var parentPriorityLevel = currentPriorityLevel;
    return function () {
      // This is a fork of runWithPriority, inlined for performance.
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = parentPriorityLevel;

      try {
        return callback.apply(this, arguments);
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    };
  }

  function unstable_scheduleCallback(priorityLevel, callback, options) {
    var currentTime = exports.unstable_now();
    var startTime;

    if (typeof options === 'object' && options !== null) {
      var delay = options.delay;

      if (typeof delay === 'number' && delay > 0) {
        startTime = currentTime + delay;
      } else {
        startTime = currentTime;
      }
    } else {
      startTime = currentTime;
    }

    var timeout;

    switch (priorityLevel) {
      case ImmediatePriority:
        timeout = IMMEDIATE_PRIORITY_TIMEOUT;
        break;

      case UserBlockingPriority:
        timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
        break;

      case IdlePriority:
        timeout = IDLE_PRIORITY_TIMEOUT;
        break;

      case LowPriority:
        timeout = LOW_PRIORITY_TIMEOUT;
        break;

      case NormalPriority:
      default:
        timeout = NORMAL_PRIORITY_TIMEOUT;
        break;
    }

    var expirationTime = startTime + timeout;
    var newTask = {
      id: taskIdCounter++,
      callback: callback,
      priorityLevel: priorityLevel,
      startTime: startTime,
      expirationTime: expirationTime,
      sortIndex: -1
    };

    if (startTime > currentTime) {
      // This is a delayed task.
      newTask.sortIndex = startTime;
      push(timerQueue, newTask);

      if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
        // All tasks are delayed, and this is the task with the earliest delay.
        if (isHostTimeoutScheduled) {
          // Cancel an existing timeout.
          cancelHostTimeout();
        } else {
          isHostTimeoutScheduled = true;
        } // Schedule a timeout.


        requestHostTimeout(handleTimeout, startTime - currentTime);
      }
    } else {
      newTask.sortIndex = expirationTime;
      push(taskQueue, newTask);
      // wait until the next time we yield.


      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;
        requestHostCallback(flushWork);
      }
    }

    return newTask;
  }

  function unstable_pauseExecution() {
  }

  function unstable_continueExecution() {

    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  function unstable_getFirstCallbackNode() {
    return peek(taskQueue);
  }

  function unstable_cancelCallback(task) {
    // remove from the queue because you can't remove arbitrary nodes from an
    // array based heap, only the first one.)


    task.callback = null;
  }

  function unstable_getCurrentPriorityLevel() {
    return currentPriorityLevel;
  }

  var unstable_requestPaint = requestPaint;
  var unstable_Profiling =  null;

  exports.unstable_IdlePriority = IdlePriority;
  exports.unstable_ImmediatePriority = ImmediatePriority;
  exports.unstable_LowPriority = LowPriority;
  exports.unstable_NormalPriority = NormalPriority;
  exports.unstable_Profiling = unstable_Profiling;
  exports.unstable_UserBlockingPriority = UserBlockingPriority;
  exports.unstable_cancelCallback = unstable_cancelCallback;
  exports.unstable_continueExecution = unstable_continueExecution;
  exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
  exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
  exports.unstable_next = unstable_next;
  exports.unstable_pauseExecution = unstable_pauseExecution;
  exports.unstable_requestPaint = unstable_requestPaint;
  exports.unstable_runWithPriority = unstable_runWithPriority;
  exports.unstable_scheduleCallback = unstable_scheduleCallback;
  exports.unstable_wrapCallback = unstable_wrapCallback;
    })();
  }
  });
  scheduler_development.unstable_now;
  scheduler_development.unstable_shouldYield;
  scheduler_development.unstable_forceFrameRate;
  scheduler_development.unstable_IdlePriority;
  scheduler_development.unstable_ImmediatePriority;
  scheduler_development.unstable_LowPriority;
  scheduler_development.unstable_NormalPriority;
  scheduler_development.unstable_Profiling;
  scheduler_development.unstable_UserBlockingPriority;
  scheduler_development.unstable_cancelCallback;
  scheduler_development.unstable_continueExecution;
  scheduler_development.unstable_getCurrentPriorityLevel;
  scheduler_development.unstable_getFirstCallbackNode;
  scheduler_development.unstable_next;
  scheduler_development.unstable_pauseExecution;
  scheduler_development.unstable_requestPaint;
  scheduler_development.unstable_runWithPriority;
  scheduler_development.unstable_scheduleCallback;
  scheduler_development.unstable_wrapCallback;

  var scheduler = createCommonjsModule(function (module) {

  {
    module.exports = scheduler_development;
  }
  });

  createCommonjsModule(function (module) {
  /** @license React v0.26.2
   * react-reconciler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  module.exports = function $$$reconciler($$$hostConfig) {
      var exports = {};
  var aa=objectAssign,ba=React__default['default'],m=scheduler;function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
  var ca=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=60103,ea=60106,fa=60107,ha=60108,ia=60114,ja=60109,ka=60110,la=60112,ma=60113,na=60120,oa=60115,pa=60116,qa=60121,ra=60129,sa=60130,ta=60131;
  if("function"===typeof Symbol&&Symbol.for){var r=Symbol.for;da=r("react.element");ea=r("react.portal");fa=r("react.fragment");ha=r("react.strict_mode");ia=r("react.profiler");ja=r("react.provider");ka=r("react.context");la=r("react.forward_ref");ma=r("react.suspense");na=r("react.suspense_list");oa=r("react.memo");pa=r("react.lazy");qa=r("react.block");r("react.scope");ra=r("react.debug_trace_mode");sa=r("react.offscreen");ta=r("react.legacy_hidden");}var ua="function"===typeof Symbol&&Symbol.iterator;
  function va(a){if(null===a||"object"!==typeof a)return null;a=ua&&a[ua]||a["@@iterator"];return "function"===typeof a?a:null}
  function wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fa:return "Fragment";case ea:return "Portal";case ia:return "Profiler";case ha:return "StrictMode";case ma:return "Suspense";case na:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ka:return (a.displayName||"Context")+".Consumer";case ja:return (a._context.displayName||"Context")+".Provider";case la:var b=a.render;b=b.displayName||b.name||"";
  return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case oa:return wa(a.type);case qa:return wa(a._render);case pa:b=a._payload;a=a._init;try{return wa(a(b))}catch(c){}}return null}function xa(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ya(a){if(xa(a)!==a)throw Error(q(188));}
  function za(a){var b=a.alternate;if(!b){b=xa(a);if(null===b)throw Error(q(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ya(e),a;if(f===d)return ya(e),b;f=f.sibling;}throw Error(q(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
  c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(q(189));}}if(c.alternate!==d)throw Error(q(190));}if(3!==c.tag)throw Error(q(188));return c.stateNode.current===c?a:b}function Aa(a){a=za(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
  function Ba(a){a=za(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}function Ca(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}
  var Da=$$$hostConfig.getPublicInstance,Ea=$$$hostConfig.getRootHostContext,Fa=$$$hostConfig.getChildHostContext,Ga=$$$hostConfig.prepareForCommit,Ha=$$$hostConfig.resetAfterCommit,Ia=$$$hostConfig.createInstance,Ja=$$$hostConfig.appendInitialChild,Ka=$$$hostConfig.finalizeInitialChildren,La=$$$hostConfig.prepareUpdate,Ma=$$$hostConfig.shouldSetTextContent,Na=$$$hostConfig.createTextInstance,Pa=$$$hostConfig.scheduleTimeout,Qa=$$$hostConfig.cancelTimeout,Ra=$$$hostConfig.noTimeout,Sa=$$$hostConfig.isPrimaryRenderer,
  Ta=$$$hostConfig.supportsMutation,Ua=$$$hostConfig.supportsPersistence,Va=$$$hostConfig.supportsHydration,Wa=$$$hostConfig.getInstanceFromNode,Xa=$$$hostConfig.makeOpaqueHydratingObject,Ya=$$$hostConfig.makeClientId,Za=$$$hostConfig.beforeActiveInstanceBlur,$a=$$$hostConfig.afterActiveInstanceBlur,ab=$$$hostConfig.preparePortalMount,bb=$$$hostConfig.supportsTestSelectors,cb=$$$hostConfig.findFiberRoot,db=$$$hostConfig.getBoundingRect,eb=$$$hostConfig.getTextContent,fb=$$$hostConfig.isHiddenSubtree,
  gb=$$$hostConfig.matchAccessibilityRole,hb=$$$hostConfig.setFocusIfFocusable,ib=$$$hostConfig.setupIntersectionObserver,jb=$$$hostConfig.appendChild,kb=$$$hostConfig.appendChildToContainer,lb=$$$hostConfig.commitTextUpdate,mb=$$$hostConfig.commitMount,nb=$$$hostConfig.commitUpdate,ob=$$$hostConfig.insertBefore,pb=$$$hostConfig.insertInContainerBefore,qb=$$$hostConfig.removeChild,rb=$$$hostConfig.removeChildFromContainer,sb=$$$hostConfig.resetTextContent,tb=$$$hostConfig.hideInstance,ub=$$$hostConfig.hideTextInstance,
  vb=$$$hostConfig.unhideInstance,wb=$$$hostConfig.unhideTextInstance,xb=$$$hostConfig.clearContainer,yb=$$$hostConfig.cloneInstance,zb=$$$hostConfig.createContainerChildSet,Ab=$$$hostConfig.appendChildToContainerChildSet,Bb=$$$hostConfig.finalizeContainerChildren,Cb=$$$hostConfig.replaceContainerChildren,Db=$$$hostConfig.cloneHiddenInstance,Eb=$$$hostConfig.cloneHiddenTextInstance,Fb=$$$hostConfig.canHydrateInstance,Gb=$$$hostConfig.canHydrateTextInstance,Hb=$$$hostConfig.isSuspenseInstancePending,
  Ib=$$$hostConfig.isSuspenseInstanceFallback,Jb=$$$hostConfig.getNextHydratableSibling,Kb=$$$hostConfig.getFirstHydratableChild,Lb=$$$hostConfig.hydrateInstance,Mb=$$$hostConfig.hydrateTextInstance,Nb=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,Ob=$$$hostConfig.commitHydratedContainer,Pb=$$$hostConfig.commitHydratedSuspenseInstance,Qb;function Rb(a){if(void 0===Qb)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Qb=b&&b[1]||"";}return "\n"+Qb+a}var Sb=!1;
  function Tb(a,b){if(!a||Sb)return "";Sb=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
  f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Sb=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Rb(a):""}var Ub=[],Vb=-1;function Wb(a){return {current:a}}function z(a){0>Vb||(a.current=Ub[Vb],Ub[Vb]=null,Vb--);}function A(a,b){Vb++;Ub[Vb]=a.current;a.current=b;}
  var Xb={},B=Wb(Xb),D=Wb(!1),Yb=Xb;function Zb(a,b){var c=a.type.contextTypes;if(!c)return Xb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function E(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $b(){z(D);z(B);}
  function ac(a,b,c){if(B.current!==Xb)throw Error(q(168));A(B,b);A(D,c);}function bc(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(q(108,wa(b)||"Unknown",e));return aa({},c,d)}function cc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Xb;Yb=B.current;A(B,a);A(D,D.current);return !0}
  function dc(a,b,c){var d=a.stateNode;if(!d)throw Error(q(169));c?(a=bc(a,b,Yb),d.__reactInternalMemoizedMergedChildContext=a,z(D),z(B),A(B,a)):z(D);A(D,c);}var ec=null,fc=null,gc=m.unstable_now;gc();var hc=0,F=8;
  function ic(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
  F=8;return a}function jc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function kc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(q(358,a));}}
  function lc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=ic(k),e=F):(h&=f,0!==h&&(d=ic(h),e=F));}else f=c&~g,0!==f?(d=ic(f),e=F):0!==h&&(d=ic(h),e=F);if(0===d)return 0;d=31-mc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){ic(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-mc(b),e=1<<c,d|=a[c],b&=~e;return d}
  function nc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function oc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=pc(24&~b),0===a?oc(10,b):a;case 10:return a=pc(192&~b),0===a?oc(8,b):a;case 8:return a=pc(3584&~b),0===a&&(a=pc(4186112&~b),0===a&&(a=512)),a;case 2:return b=pc(805306368&~b),0===b&&(b=268435456),b}throw Error(q(358,a));}function pc(a){return a&-a}function qc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
  function rc(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-mc(b);a[b]=c;}var mc=Math.clz32?Math.clz32:sc,tc=Math.log,uc=Math.LN2;function sc(a){return 0===a?32:31-(tc(a)/uc|0)|0}
  var vc=m.unstable_runWithPriority,wc=m.unstable_scheduleCallback,xc=m.unstable_cancelCallback,yc=m.unstable_shouldYield,zc=m.unstable_requestPaint,Ac=m.unstable_now,Bc=m.unstable_getCurrentPriorityLevel,Cc=m.unstable_ImmediatePriority,Dc=m.unstable_UserBlockingPriority,Ec=m.unstable_NormalPriority,Fc=m.unstable_LowPriority,Gc=m.unstable_IdlePriority,Hc={},Ic=void 0!==zc?zc:function(){},Jc=null,Kc=null,Lc=!1,Mc=Ac(),G=1E4>Mc?Ac:function(){return Ac()-Mc};
  function Nc(){switch(Bc()){case Cc:return 99;case Dc:return 98;case Ec:return 97;case Fc:return 96;case Gc:return 95;default:throw Error(q(332));}}function Oc(a){switch(a){case 99:return Cc;case 98:return Dc;case 97:return Ec;case 96:return Fc;case 95:return Gc;default:throw Error(q(332));}}function Pc(a,b){a=Oc(a);return vc(a,b)}function Qc(a,b,c){a=Oc(a);return wc(a,b,c)}function H(){if(null!==Kc){var a=Kc;Kc=null;xc(a);}Rc();}
  function Rc(){if(!Lc&&null!==Jc){Lc=!0;var a=0;try{var b=Jc;Pc(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Jc=null;}catch(c){throw null!==Jc&&(Jc=Jc.slice(a+1)),wc(Cc,H),c;}finally{Lc=!1;}}}var Sc=ca.ReactCurrentBatchConfig;function Tc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var I="function"===typeof Object.is?Object.is:Tc,Uc=Object.prototype.hasOwnProperty;
  function Vc(a,b){if(I(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!Uc.call(b,c[d])||!I(a[c[d]],b[c[d]]))return !1;return !0}
  function Wc(a){switch(a.tag){case 5:return Rb(a.type);case 16:return Rb("Lazy");case 13:return Rb("Suspense");case 19:return Rb("SuspenseList");case 0:case 2:case 15:return a=Tb(a.type,!1),a;case 11:return a=Tb(a.type.render,!1),a;case 22:return a=Tb(a.type._render,!1),a;case 1:return a=Tb(a.type,!0),a;default:return ""}}function Xc(a,b){if(a&&a.defaultProps){b=aa({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Yc=Wb(null),Zc=null,$c=null,ad=null;
  function bd(){ad=$c=Zc=null;}function cd(a,b){a=a.type._context;Sa?(A(Yc,a._currentValue),a._currentValue=b):(A(Yc,a._currentValue2),a._currentValue2=b);}function dd(a){var b=Yc.current;z(Yc);a=a.type._context;Sa?a._currentValue=b:a._currentValue2=b;}function ed(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}
  function fd(a,b){Zc=a;ad=$c=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(gd=!0),a.firstContext=null);}function J(a,b){if(ad!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)ad=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===$c){if(null===Zc)throw Error(q(308));$c=b;Zc.dependencies={lanes:0,firstContext:b,responders:null};}else $c=$c.next=b;}return Sa?a._currentValue:a._currentValue2}var hd=!1;
  function id(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}function jd(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function kd(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
  function md(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
  function nd(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
  b;c.lastBaseUpdate=b;}
  function od(a,b,c,d){var e=a.updateQueue;hd=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var t=n.lastBaseUpdate;t!==g&&(null===t?n.firstBaseUpdate=l:t.next=l,n.lastBaseUpdate=k);}}if(null!==f){t=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
  next:null});a:{var y=a,x=f;h=b;p=c;switch(x.tag){case 1:y=x.payload;if("function"===typeof y){t=y.call(p,t,h);break a}t=y;break a;case 3:y.flags=y.flags&-4097|64;case 0:y=x.payload;h="function"===typeof y?y.call(p,t,h):y;if(null===h||void 0===h)break a;t=aa({},t,h);break a;case 2:hd=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=t):n=n.next=p,g|=h;f=f.next;if(null===
  f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=t);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;pd|=g;a.lanes=g;a.memoizedState=t;}}function qd(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(q(191,e));e.call(d);}}}var rd=(new ba.Component).refs;
  function sd(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:aa({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
  var vd={isMounted:function(a){return (a=a._reactInternals)?xa(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=K(),e=td(a),f=kd(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);md(a,f);ud(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=K(),e=td(a),f=kd(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);md(a,f);ud(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=K(),d=td(a),e=kd(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
  b);md(a,e);ud(a,d,c);}};function wd(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Vc(c,d)||!Vc(e,f):!0}
  function xd(a,b,c){var d=!1,e=Xb;var f=b.contextType;"object"===typeof f&&null!==f?f=J(f):(e=E(b)?Yb:B.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Zb(a,e):Xb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=vd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
  function yd(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&vd.enqueueReplaceState(b,b.state,null);}
  function zd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=rd;id(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=J(f):(f=E(b)?Yb:B.current,e.context=Zb(a,f));od(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(sd(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
  (b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&vd.enqueueReplaceState(e,e.state,null),od(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Ad=Array.isArray;
  function Bd(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(q(309));var d=c.stateNode;}if(!d)throw Error(q(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===rd&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(q(284));if(!c._owner)throw Error(q(290,a));}return a}
  function Cd(a,b){if("textarea"!==a.type)throw Error(q(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
  function Dd(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Ed(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
  c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Fd(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Bd(a,b,c),d.return=a,d;d=Gd(c.type,c.key,c.props,null,a.mode,d);d.ref=Bd(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
  Hd(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Id(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function t(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Fd(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case da:return c=Gd(b.type,b.key,b.props,null,a.mode,c),c.ref=Bd(a,null,b),c.return=a,c;case ea:return b=Hd(b,a.mode,c),b.return=a,b}if(Ad(b)||va(b))return b=Id(b,
  a.mode,c,null),b.return=a,b;Cd(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case da:return c.key===e?c.type===fa?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ea:return c.key===e?l(a,b,c,d):null}if(Ad(c)||va(c))return null!==e?null:n(a,b,c,d,null);Cd(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
  null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case da:return a=a.get(null===d.key?c:d.key)||null,d.type===fa?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ea:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Ad(d)||va(d))return a=a.get(c)||null,n(b,a,d,e,null);Cd(b,d);}return null}function x(e,g,h,k){for(var l=null,v=null,u=g,C=g=0,n=null;null!==u&&C<h.length;C++){u.index>C?(n=u,u=null):n=u.sibling;var w=p(e,u,h[C],k);if(null===w){null===u&&(u=n);break}a&&u&&null===
  w.alternate&&b(e,u);g=f(w,g,C);null===v?l=w:v.sibling=w;v=w;u=n;}if(C===h.length)return c(e,u),l;if(null===u){for(;C<h.length;C++)u=t(e,h[C],k),null!==u&&(g=f(u,g,C),null===v?l=u:v.sibling=u,v=u);return l}for(u=d(e,u);C<h.length;C++)n=y(u,e,C,h[C],k),null!==n&&(a&&null!==n.alternate&&u.delete(null===n.key?C:n.key),g=f(n,g,C),null===v?l=n:v.sibling=n,v=n);a&&u.forEach(function(a){return b(e,a)});return l}function Y(e,g,h,k){var l=va(h);if("function"!==typeof l)throw Error(q(150));h=l.call(h);if(null==
  h)throw Error(q(151));for(var u=l=null,v=g,n=g=0,C=null,w=h.next();null!==v&&!w.done;n++,w=h.next()){v.index>n?(C=v,v=null):C=v.sibling;var x=p(e,v,w.value,k);if(null===x){null===v&&(v=C);break}a&&v&&null===x.alternate&&b(e,v);g=f(x,g,n);null===u?l=x:u.sibling=x;u=x;v=C;}if(w.done)return c(e,v),l;if(null===v){for(;!w.done;n++,w=h.next())w=t(e,w.value,k),null!==w&&(g=f(w,g,n),null===u?l=w:u.sibling=w,u=w);return l}for(v=d(e,v);!w.done;n++,w=h.next())w=y(v,e,n,w.value,k),null!==w&&(a&&null!==w.alternate&&
  v.delete(null===w.key?n:w.key),g=f(w,g,n),null===u?l=w:u.sibling=w,u=w);a&&v.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===fa&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case da:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===fa){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
  d=e(k,f.props);d.ref=Bd(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===fa?(d=Id(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Gd(f.type,f.key,f.props,null,a.mode,h),h.ref=Bd(a,d,f),h.return=a,a=h);}return g(a);case ea:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
  Hd(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Fd(f,a.mode,h),d.return=a,a=d),g(a);if(Ad(f))return x(a,d,f,h);if(va(f))return Y(a,d,f,h);l&&Cd(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(q(152,wa(a.type)||"Component"));}return c(a,d)}}var Jd=Dd(!0),Kd=Dd(!1),Ld={},L=Wb(Ld),Md=Wb(Ld),Nd=Wb(Ld);
  function Od(a){if(a===Ld)throw Error(q(174));return a}function Pd(a,b){A(Nd,b);A(Md,a);A(L,Ld);a=Ea(b);z(L);A(L,a);}function Qd(){z(L);z(Md);z(Nd);}function Rd(a){var b=Od(Nd.current),c=Od(L.current);b=Fa(c,a.type,b);c!==b&&(A(Md,a),A(L,b));}function Sd(a){Md.current===a&&(z(L),z(Md));}var M=Wb(0);
  function Td(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||Hb(c)||Ib(c)))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Ud=null,Vd=null,Wd=!1;
  function Xd(a,b){var c=Yd(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function Zd(a,b){switch(a.tag){case 5:return b=Fb(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=Gb(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
  function $d(a){if(Wd){var b=Vd;if(b){var c=b;if(!Zd(a,b)){b=Jb(c);if(!b||!Zd(a,b)){a.flags=a.flags&-1025|2;Wd=!1;Ud=a;return}Xd(Ud,c);}Ud=a;Vd=Kb(b);}else a.flags=a.flags&-1025|2,Wd=!1,Ud=a;}}function ae(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Ud=a;}
  function be(a){if(!Va||a!==Ud)return !1;if(!Wd)return ae(a),Wd=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ma(b,a.memoizedProps))for(b=Vd;b;)Xd(a,b),b=Jb(b);ae(a);if(13===a.tag){if(!Va)throw Error(q(316));a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(q(317));Vd=Nb(a);}else Vd=Ud?Jb(a.stateNode):null;return !0}function ce(){Va&&(Vd=Ud=null,Wd=!1);}var de=[];
  function ee(){for(var a=0;a<de.length;a++){var b=de[a];Sa?b._workInProgressVersionPrimary=null:b._workInProgressVersionSecondary=null;}de.length=0;}var fe=ca.ReactCurrentDispatcher,ge=ca.ReactCurrentBatchConfig,he=0,N=null,O=null,P=null,ie=!1,je=!1;function Q(){throw Error(q(321));}function ke(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!I(a[c],b[c]))return !1;return !0}
  function le(a,b,c,d,e,f){he=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;fe.current=null===a||null===a.memoizedState?me:ne;a=c(d,e);if(je){f=0;do{je=!1;if(!(25>f))throw Error(q(301));f+=1;P=O=null;b.updateQueue=null;fe.current=oe;a=c(d,e);}while(je)}fe.current=pe;b=null!==O&&null!==O.next;he=0;P=O=N=null;ie=!1;if(b)throw Error(q(300));return a}function qe(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}
  function re(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null;}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else {if(null===a)throw Error(q(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a;}return P}function se(a,b){return "function"===typeof b?b(a):b}
  function te(a){var b=re(),c=b.queue;if(null===c)throw Error(q(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((he&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
  eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;N.lanes|=l;pd|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;I(d,b.memoizedState)||(gd=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
  function ue(a){var b=re(),c=b.queue;if(null===c)throw Error(q(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);I(f,b.memoizedState)||(gd=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
  function ve(a,b,c){var d=b._getVersion;d=d(b._source);var e=Sa?b._workInProgressVersionPrimary:b._workInProgressVersionSecondary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(he&a)===a)Sa?b._workInProgressVersionPrimary=d:b._workInProgressVersionSecondary=d,de.push(b);if(a)return c(b._source);de.push(b);throw Error(q(350));}
  function we(a,b,c,d){var e=R;if(null===e)throw Error(q(349));var f=b._getVersion,g=f(b._source),h=fe.current,k=h.useState(function(){return ve(e,b,c)}),l=k[1],n=k[0];k=P;var t=a.memoizedState,p=t.refs,y=p.getSnapshot,x=t.source;t=t.subscribe;var Y=N;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!I(g,a)){a=c(b._source);I(n,a)||(l(a),a=td(Y),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
  e.entanglements,h=a;0<h;){var k=31-mc(h),t=1<<k;d[k]|=a;h&=~t;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=td(Y);e.mutableReadLanes|=d&e.pendingLanes;}catch(Oa){c(function(){throw Oa;});}})},[b,d]);I(y,c)&&I(x,b)&&I(t,d)||(a={pending:null,dispatch:null,lastRenderedReducer:se,lastRenderedState:n},a.dispatch=l=xe.bind(null,N,a),k.queue=a,k.baseQueue=null,n=ve(e,b,c),k.memoizedState=k.baseState=n);return n}
  function ye(a,b,c){var d=re();return we(d,a,b,c)}function ze(a){var b=qe();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:se,lastRenderedState:a};a=a.dispatch=xe.bind(null,N,a);return [b.memoizedState,a]}
  function Ae(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Be(a){var b=qe();a={current:a};return b.memoizedState=a}function Ce(){return re().memoizedState}function De(a,b,c,d){var e=qe();N.flags|=a;e.memoizedState=Ae(1|b,c,void 0,void 0===d?null:d);}
  function Ee(a,b,c,d){var e=re();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&ke(d,g.deps)){Ae(b,c,f,d);return}}N.flags|=a;e.memoizedState=Ae(1|b,c,f,d);}function Fe(a,b){return De(516,4,a,b)}function Ge(a,b){return Ee(516,4,a,b)}function He(a,b){return Ee(4,2,a,b)}function Ie(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
  function Je(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ee(4,2,Ie.bind(null,b,a),c)}function Ke(){}function Le(a,b){var c=re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ke(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function Me(a,b){var c=re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ke(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
  function Ne(a,b){var c=Nc();Pc(98>c?98:c,function(){a(!0);});Pc(97<c?97:c,function(){var c=ge.transition;ge.transition=1;try{a(!1),b();}finally{ge.transition=c;}});}
  function xe(a,b,c){var d=K(),e=td(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===N||null!==g&&g===N)je=ie=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(I(k,h))return}catch(l){}finally{}ud(a,e,d);}}
  var pe={readContext:J,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useOpaqueIdentifier:Q,unstable_isNewReconciler:!1},me={readContext:J,useCallback:function(a,b){qe().memoizedState=[a,void 0===b?null:b];return a},useContext:J,useEffect:Fe,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return De(4,2,Ie.bind(null,b,a),c)},useLayoutEffect:function(a,
  b){return De(4,2,a,b)},useMemo:function(a,b){var c=qe();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=qe();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=xe.bind(null,N,a);return [d.memoizedState,a]},useRef:Be,useState:ze,useDebugValue:Ke,useDeferredValue:function(a){var b=ze(a),c=b[0],d=b[1];Fe(function(){var b=ge.transition;ge.transition=1;try{d(a);}finally{ge.transition=
  b;}},[a]);return c},useTransition:function(){var a=ze(!1),b=a[0];a=Ne.bind(null,a[1]);Be(a);return [a,b]},useMutableSource:function(a,b,c){var d=qe();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return we(d,a,b,c)},useOpaqueIdentifier:function(){if(Wd){var a=!1,b=Xa(function(){a||(a=!0,c(Ya()));throw Error(q(355));}),c=ze(b)[1];0===(N.mode&2)&&(N.flags|=516,Ae(5,function(){c(Ya());},void 0,null));return b}b=Ya();ze(b);return b},unstable_isNewReconciler:!1},ne={readContext:J,
  useCallback:Le,useContext:J,useEffect:Ge,useImperativeHandle:Je,useLayoutEffect:He,useMemo:Me,useReducer:te,useRef:Ce,useState:function(){return te(se)},useDebugValue:Ke,useDeferredValue:function(a){var b=te(se),c=b[0],d=b[1];Ge(function(){var b=ge.transition;ge.transition=1;try{d(a);}finally{ge.transition=b;}},[a]);return c},useTransition:function(){var a=te(se)[0];return [Ce().current,a]},useMutableSource:ye,useOpaqueIdentifier:function(){return te(se)[0]},unstable_isNewReconciler:!1},oe={readContext:J,
  useCallback:Le,useContext:J,useEffect:Ge,useImperativeHandle:Je,useLayoutEffect:He,useMemo:Me,useReducer:ue,useRef:Ce,useState:function(){return ue(se)},useDebugValue:Ke,useDeferredValue:function(a){var b=ue(se),c=b[0],d=b[1];Ge(function(){var b=ge.transition;ge.transition=1;try{d(a);}finally{ge.transition=b;}},[a]);return c},useTransition:function(){var a=ue(se)[0];return [Ce().current,a]},useMutableSource:ye,useOpaqueIdentifier:function(){return ue(se)[0]},unstable_isNewReconciler:!1},Oe=ca.ReactCurrentOwner,
  gd=!1;function S(a,b,c,d){b.child=null===a?Kd(b,null,c,d):Jd(b,a.child,c,d);}function Pe(a,b,c,d,e){c=c.render;var f=b.ref;fd(b,e);d=le(a,b,c,d,f,e);if(null!==a&&!gd)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,Re(a,b,e);b.flags|=1;S(a,b,d,e);return b.child}
  function Se(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Te(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Ue(a,b,g,d,e,f);a=Gd(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Vc,c(e,d)&&a.ref===b.ref))return Re(a,b,f);b.flags|=1;a=Ed(g,d);a.ref=b.ref;a.return=b;return b.child=a}
  function Ue(a,b,c,d,e,f){if(null!==a&&Vc(a.memoizedProps,d)&&a.ref===b.ref)if(gd=!1,0!==(f&e))0!==(a.flags&16384)&&(gd=!0);else return b.lanes=a.lanes,Re(a,b,f);return Ve(a,b,c,d,f)}
  function We(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},Xe(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},Xe(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},Xe(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,Xe(b,d);S(a,b,e,c);return b.child}
  function Ye(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function Ve(a,b,c,d,e){var f=E(c)?Yb:B.current;f=Zb(b,f);fd(b,e);c=le(a,b,c,d,f,e);if(null!==a&&!gd)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,Re(a,b,e);b.flags|=1;S(a,b,c,e);return b.child}
  function Ze(a,b,c,d,e){if(E(c)){var f=!0;cc(b);}else f=!1;fd(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),xd(b,c,d),zd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=J(l):(l=E(c)?Yb:B.current,l=Zb(b,l));var n=c.getDerivedStateFromProps,t="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;t||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==
  typeof g.componentWillReceiveProps||(h!==d||k!==l)&&yd(b,g,d,l);hd=!1;var p=b.memoizedState;g.state=p;od(b,d,g,e);k=b.memoizedState;h!==d||p!==k||D.current||hd?("function"===typeof n&&(sd(b,c,n,d),k=b.memoizedState),(h=hd||wd(b,c,h,d,p,k,l))?(t||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&
  (b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;jd(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Xc(b.type,h);g.props=l;t=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=J(k):(k=E(c)?Yb:B.current,k=Zb(b,k));var y=c.getDerivedStateFromProps;(n="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
  "function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==t||p!==k)&&yd(b,g,d,k);hd=!1;p=b.memoizedState;g.state=p;od(b,d,g,e);var x=b.memoizedState;h!==t||p!==x||D.current||hd?("function"===typeof y&&(sd(b,c,y,d),x=b.memoizedState),(l=hd||wd(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
  g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||
  (b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return $e(a,b,c,d,f,e)}function $e(a,b,c,d,e,f){Ye(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&dc(b,c,!1),Re(a,b,f);d=b.stateNode;Oe.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Jd(b,a.child,null,f),b.child=Jd(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&dc(b,c,!0);return b.child}
  function af(a){var b=a.stateNode;b.pendingContext?ac(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ac(a,b.context,!1);Pd(a,b.containerInfo);}var bf={dehydrated:null,retryLane:0};
  function cf(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);A(M,e&1);if(null===a){void 0!==d.fallback&&$d(b);a=d.children;e=d.fallback;if(f)return a=df(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=bf,a;if("number"===typeof d.unstable_expectedLoadTime)return a=df(b,a,e,c),b.child.memoizedState={baseLanes:c},
  b.memoizedState=bf,b.lanes=33554432,a;c=ef({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=ff(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=bf,d;c=gf(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=ff(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
  {baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=bf,d;c=gf(a,b,d.children,c);b.memoizedState=null;return c}function df(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=ef(b,e,0,null);c=Id(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
  function gf(a,b,c,d){var e=a.child;a=e.sibling;c=Ed(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
  function ff(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Ed(g,h);null!==a?d=Ed(a,d):(d=Id(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function hf(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);ed(a.return,b);}
  function jf(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
  function kf(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&hf(a,c);else if(19===a.tag)hf(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}A(M,d);if(0===(b.mode&2))b.memoizedState=
  null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Td(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);jf(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Td(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}jf(b,!0,c,null,f,b.lastEffect);break;case "together":jf(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
  function Re(a,b,c){null!==a&&(b.dependencies=a.dependencies);pd|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(q(153));if(null!==b.child){a=b.child;c=Ed(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ed(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}function lf(a){a.flags|=4;}var mf,nf,of,pf;
  if(Ta)mf=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)Ja(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}},nf=function(){},of=function(a,b,c,d,e){a=a.memoizedProps;if(a!==d){var f=b.stateNode,g=Od(L.current);c=La(f,c,a,d,e,g);(b.updateQueue=c)&&lf(b);}},pf=function(a,b,c,d){c!==d&&lf(b);};else if(Ua){mf=function(a,
  b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ja(a,f);}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ja(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.flags&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,mf(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==e.child){e.child.return=e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===e.return||
  e.return===b)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}};var qf=function(a,b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ab(a,f);}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ab(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.flags&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,qf(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==e.child){e.child.return=
  e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}};nf=function(a){var b=a.stateNode;if(null!==a.firstEffect){var c=b.containerInfo,d=zb(c);qf(d,a,!1,!1);b.pendingChildren=d;lf(a);Bb(c,d);}};of=function(a,b,c,d,e){var f=a.stateNode,g=a.memoizedProps;if((a=null===b.firstEffect)&&g===d)b.stateNode=f;else {var h=b.stateNode,k=Od(L.current),l=null;g!==d&&(l=La(h,c,g,d,e,k));a&&null===l?b.stateNode=f:(f=yb(f,
  l,c,g,d,b,a,h),Ka(f,c,d,e,k)&&lf(b),b.stateNode=f,a?lf(b):mf(f,b,!1,!1));}};pf=function(a,b,c,d){c!==d?(a=Od(Nd.current),c=Od(L.current),b.stateNode=Na(d,a,c,b),lf(b)):b.stateNode=a.stateNode;};}else nf=function(){},of=function(){},pf=function(){};
  function rf(a,b){if(!Wd)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
  function sf(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return E(b.type)&&$b(),null;case 3:Qd();z(D);z(B);ee();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)be(b)?lf(b):d.hydrate||(b.flags|=256);nf(b);return null;case 5:Sd(b);var e=Od(Nd.current);c=b.type;if(null!==a&&null!=b.stateNode)of(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
  b.stateNode)throw Error(q(166));return null}a=Od(L.current);if(be(b)){if(!Va)throw Error(q(175));a=Lb(b.stateNode,b.type,b.memoizedProps,e,a,b);b.updateQueue=a;null!==a&&lf(b);}else {var f=Ia(c,d,e,a,b);mf(f,b,!1,!1);b.stateNode=f;Ka(f,c,d,e,a)&&lf(b);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)pf(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(q(166));a=Od(Nd.current);e=Od(L.current);if(be(b)){if(!Va)throw Error(q(176));Mb(b.stateNode,
  b.memoizedProps,b)&&lf(b);}else b.stateNode=Na(d,a,e,b);}return null;case 13:z(M);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;e=!1;null===a?void 0!==b.memoizedProps.fallback&&be(b):e=null!==a.memoizedState;if(d&&!e&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))0===T&&(T=3);else {if(0===T||3===T)T=4;null===R||0===(pd&134217727)&&0===(tf&134217727)||uf(R,U);}Ua&&d&&(b.flags|=4);Ta&&(d||e)&&(b.flags|=4);return null;case 4:return Qd(),
  nf(b),null===a&&ab(b.stateNode.containerInfo),null;case 10:return dd(b),null;case 17:return E(b.type)&&$b(),null;case 19:z(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.flags&64);f=d.rendering;if(null===f)if(e)rf(d,!1);else {if(0!==T||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){f=Td(a);if(null!==f){b.flags|=64;rf(d,!1);a=f.updateQueue;null!==a&&(b.updateQueue=a,b.flags|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;a=c;for(d=b.child;null!==d;)e=d,c=a,e.flags&=
  2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,f=e.alternate,null===f?(e.childLanes=0,e.lanes=c,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=f.childLanes,e.lanes=f.lanes,e.child=f.child,e.memoizedProps=f.memoizedProps,e.memoizedState=f.memoizedState,e.updateQueue=f.updateQueue,e.type=f.type,c=f.dependencies,e.dependencies=null===c?null:{lanes:c.lanes,firstContext:c.firstContext}),d=d.sibling;A(M,M.current&1|
  2);return b.child}a=a.sibling;}null!==d.tail&&G()>vf&&(b.flags|=64,e=!0,rf(d,!1),b.lanes=33554432);}else {if(!e)if(a=Td(f),null!==a){if(b.flags|=64,e=!0,a=a.updateQueue,null!==a&&(b.updateQueue=a,b.flags|=4),rf(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate&&!Wd)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*G()-d.renderingStartTime>vf&&1073741824!==c&&(b.flags|=64,e=!0,rf(d,!1),b.lanes=33554432);d.isBackwards?(f.sibling=b.child,b.child=f):(a=d.last,null!==a?a.sibling=
  f:b.child=f,d.last=f);}return null!==d.tail?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=G(),a.sibling=null,b=M.current,A(M,e?b&1|2:b&1),a):null;case 23:case 24:return wf(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(q(156,b.tag));}
  function xf(a){switch(a.tag){case 1:E(a.type)&&$b();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:Qd();z(D);z(B);ee();b=a.flags;if(0!==(b&64))throw Error(q(285));a.flags=b&-4097|64;return a;case 5:return Sd(a),null;case 13:return z(M),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return z(M),null;case 4:return Qd(),null;case 10:return dd(a),null;case 23:case 24:return wf(),null;default:return null}}
  function yf(a,b){try{var c="",d=b;do c+=Wc(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function zf(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Af="function"===typeof WeakMap?WeakMap:Map;function Bf(a,b,c){c=kd(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Cf||(Cf=!0,Df=d);zf(a,b);};return c}
  function Ef(a,b,c){c=kd(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){zf(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ff?Ff=new Set([this]):Ff.add(this),zf(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Gf="function"===typeof WeakSet?WeakSet:Set;
  function Hf(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){If(a,c);}else b.current=null;}
  function Jf(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:Xc(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:Ta&&b.flags&256&&xb(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(q(163));}
  function Kf(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d();}c=c.next;}while(c!==b)}}
  function Lf(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Mf(c,a),Nf(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:Xc(c.type,b.memoizedProps),a.componentDidUpdate(d,
  b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&qd(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=Da(c.child.stateNode);break;case 1:a=c.child.stateNode;}qd(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mb(a,c.type,c.memoizedProps,c);return;case 6:return;case 4:return;case 12:return;case 13:Va&&null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&
  Pb(c))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(q(163));}
  function Of(a,b){if(Ta)for(var c=a;;){if(5===c.tag){var d=c.stateNode;b?tb(d):vb(c.stateNode,c.memoizedProps);}else if(6===c.tag)d=c.stateNode,b?ub(d):wb(d,c.memoizedProps);else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
  function Pf(a,b){if(fc&&"function"===typeof fc.onCommitFiberUnmount)try{fc.onCommitFiberUnmount(ec,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Mf(b,c);else {d=b;try{e();}catch(f){If(d,f);}}c=c.next;}while(c!==a)}break;case 1:Hf(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){If(b,
  f);}break;case 5:Hf(b);break;case 4:Ta?Qf(a,b):Ua&&Ua&&(b=b.stateNode.containerInfo,a=zb(b),Cb(b,a));}}function Rf(a,b){for(var c=b;;)if(Pf(a,c),null===c.child||Ta&&4===c.tag){if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}else c.child.return=c,c=c.child;}
  function Sf(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function Tf(a){return 5===a.tag||3===a.tag||4===a.tag}
  function Uf(a){if(Ta){a:{for(var b=a.return;null!==b;){if(Tf(b))break a;b=b.return;}throw Error(q(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(q(161));}c.flags&16&&(sb(b),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Tf(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
  c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?Vf(a,c,b):Wf(a,c,b);}}function Vf(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?pb(c,a,b):kb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Vf(a,b,c),a=a.sibling;null!==a;)Vf(a,b,c),a=a.sibling;}
  function Wf(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?ob(c,a,b):jb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Wf(a,b,c),a=a.sibling;null!==a;)Wf(a,b,c),a=a.sibling;}
  function Qf(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(q(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag)Rf(a,c),f?rb(e,c.stateNode):qb(e,c.stateNode);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(Pf(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;
  for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
  function Xf(a,b){if(Ta){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Kf(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&nb(c,f,e,a,d,b);}return;case 6:if(null===b.stateNode)throw Error(q(162));c=b.memoizedProps;lb(b.stateNode,null!==a?a.memoizedProps:c,c);return;case 3:Va&&(b=b.stateNode,b.hydrate&&(b.hydrate=!1,Ob(b.containerInfo)));return;case 12:return;case 13:Yf(b);
  Zf(b);return;case 19:Zf(b);return;case 17:return;case 23:case 24:Of(b,null!==b.memoizedState);return}throw Error(q(163));}switch(b.tag){case 0:case 11:case 14:case 15:case 22:Kf(3,b);return;case 12:return;case 13:Yf(b);Zf(b);return;case 19:Zf(b);return;case 3:Va&&(c=b.stateNode,c.hydrate&&(c.hydrate=!1,Ob(c.containerInfo)));break;case 23:case 24:return}a:if(Ua){switch(b.tag){case 1:case 5:case 6:case 20:break a;case 3:case 4:b=b.stateNode;Cb(b.containerInfo,b.pendingChildren);break a}throw Error(q(163));
  }}function Yf(a){null!==a.memoizedState&&($f=G(),Ta&&Of(a.child,!0));}function Zf(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Gf);b.forEach(function(b){var d=ag.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}function bg(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var cg=0,dg=1,eg=2,fg=3,gg=4;
  if("function"===typeof Symbol&&Symbol.for){var hg=Symbol.for;cg=hg("selector.component");dg=hg("selector.has_pseudo_class");eg=hg("selector.role");fg=hg("selector.test_id");gg=hg("selector.text");}function ig(a){var b=Wa(a);if(null!=b){if("string"!==typeof b.memoizedProps["data-testname"])throw Error(q(364));return b}a=cb(a);if(null===a)throw Error(q(362));return a.stateNode.current}
  function jg(a,b){switch(b.$$typeof){case cg:if(a.type===b.value)return !0;break;case dg:a:{b=b.value;a=[a,0];for(var c=0;c<a.length;){var d=a[c++],e=a[c++],f=b[e];if(5!==d.tag||!fb(d)){for(;null!=f&&jg(d,f);)e++,f=b[e];if(e===b.length){b=!0;break a}else for(d=d.child;null!==d;)a.push(d,e),d=d.sibling;}}b=!1;}return b;case eg:if(5===a.tag&&gb(a.stateNode,b.value))return !0;break;case gg:if(5===a.tag||6===a.tag)if(a=eb(a),null!==a&&0<=a.indexOf(b.value))return !0;break;case fg:if(5===a.tag&&(a=a.memoizedProps["data-testname"],
  "string"===typeof a&&a.toLowerCase()===b.value.toLowerCase()))return !0;break;default:throw Error(q(365,b));}return !1}function kg(a){switch(a.$$typeof){case cg:return "<"+(wa(a.value)||"Unknown")+">";case dg:return ":has("+(kg(a)||"")+")";case eg:return '[role="'+a.value+'"]';case gg:return '"'+a.value+'"';case fg:return '[data-testname="'+a.value+'"]';default:throw Error(q(365,a));}}
  function lg(a,b){var c=[];a=[a,0];for(var d=0;d<a.length;){var e=a[d++],f=a[d++],g=b[f];if(5!==e.tag||!fb(e)){for(;null!=g&&jg(e,g);)f++,g=b[f];if(f===b.length)c.push(e);else for(e=e.child;null!==e;)a.push(e,f),e=e.sibling;}}return c}function mg(a,b){if(!bb)throw Error(q(363));a=ig(a);a=lg(a,b);b=[];a=Array.from(a);for(var c=0;c<a.length;){var d=a[c++];if(5===d.tag)fb(d)||b.push(d.stateNode);else for(d=d.child;null!==d;)a.push(d),d=d.sibling;}return b}var ng=null;
  function og(a){if(null===ng)try{var b=("require"+Math.random()).slice(0,7);ng=(module&&module[b]).call(module,"timers").setImmediate;}catch(c){ng=function(a){var b=new MessageChannel;b.port1.onmessage=a;b.port2.postMessage(void 0);};}return ng(a)}var pg=Math.ceil,qg=ca.ReactCurrentDispatcher,rg=ca.ReactCurrentOwner,sg=ca.IsSomeRendererActing,V=0,R=null,W=null,U=0,tg=0,ug=Wb(0),T=0,vg=null,wg=0,pd=0,tf=0,xg=0,yg=null,$f=0,vf=Infinity;function zg(){vf=G()+500;}
  var X=null,Cf=!1,Df=null,Ff=null,Ag=!1,Bg=null,Cg=90,Dg=[],Eg=[],Fg=null,Gg=0,Hg=null,Ig=-1,Jg=0,Kg=0,Lg=null,Mg=!1;function K(){return 0!==(V&48)?G():-1!==Ig?Ig:Ig=G()}function td(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===Nc()?1:2;0===Jg&&(Jg=wg);if(0!==Sc.transition){0!==Kg&&(Kg=null!==yg?yg.pendingLanes:0);a=Jg;var b=4186112&~Kg;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=Nc();0!==(V&4)&&98===a?a=oc(12,Jg):(a=jc(a),a=oc(a,Jg));return a}
  function ud(a,b,c){if(50<Gg)throw Gg=0,Hg=null,Error(q(185));a=Ng(a,b);if(null===a)return null;rc(a,b,c);a===R&&(tf|=b,4===T&&uf(a,U));var d=Nc();1===b?0!==(V&8)&&0===(V&48)?Og(a):(Z(a,c),0===V&&(zg(),H())):(0===(V&4)||98!==d&&99!==d||(null===Fg?Fg=new Set([a]):Fg.add(a)),Z(a,c));yg=a;}function Ng(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
  function Z(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-mc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;ic(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=lc(a,a===R?U:0);b=F;if(0===d)null!==c&&(c!==Hc&&xc(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Hc&&xc(c);}15===b?(c=Og.bind(null,a),null===Jc?(Jc=[c],Kc=wc(Cc,Rc)):Jc.push(c),
  c=Hc):14===b?c=Qc(99,Og.bind(null,a)):(c=kc(b),c=Qc(c,Pg.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
  function Pg(a){Ig=-1;Kg=Jg=0;if(0!==(V&48))throw Error(q(327));var b=a.callbackNode;if(Qg()&&a.callbackNode!==b)return null;var c=lc(a,a===R?U:0);if(0===c)return null;var d=c;var e=V;V|=16;var f=Rg();if(R!==a||U!==d)zg(),Sg(a,d);do try{Tg();break}catch(h){Ug(a,h);}while(1);bd();qg.current=f;V=e;null!==W?d=0:(R=null,U=0,d=T);if(0!==(wg&tf))Sg(a,0);else if(0!==d){2===d&&(V|=64,a.hydrate&&(a.hydrate=!1,xb(a.containerInfo)),c=nc(a),0!==c&&(d=Vg(a,c)));if(1===d)throw b=vg,Sg(a,0),uf(a,c),Z(a,G()),b;a.finishedWork=
  a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(q(345));case 2:Zg(a);break;case 3:uf(a,c);if((c&62914560)===c&&(d=$f+500-G(),10<d)){if(0!==lc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){K();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Pa(Zg.bind(null,a),d);break}Zg(a);break;case 4:uf(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-mc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=G()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
  c?4320:1960*pg(c/1960))-c;if(10<c){a.timeoutHandle=Pa(Zg.bind(null,a),c);break}Zg(a);break;case 5:Zg(a);break;default:throw Error(q(329));}}Z(a,G());return a.callbackNode===b?Pg.bind(null,a):null}function uf(a,b){b&=~xg;b&=~tf;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-mc(b),d=1<<c;a[c]=-1;b&=~d;}}
  function Og(a){if(0!==(V&48))throw Error(q(327));Qg();if(a===R&&0!==(a.expiredLanes&U)){var b=U;var c=Vg(a,b);0!==(wg&tf)&&(b=lc(a,b),c=Vg(a,b));}else b=lc(a,0),c=Vg(a,b);0!==a.tag&&2===c&&(V|=64,a.hydrate&&(a.hydrate=!1,xb(a.containerInfo)),b=nc(a),0!==b&&(c=Vg(a,b)));if(1===c)throw c=vg,Sg(a,0),uf(a,b),Z(a,G()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Zg(a);Z(a,G());return null}
  function $g(){if(null!==Fg){var a=Fg;Fg=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Z(a,G());});}H();}function ah(a,b){var c=V;V|=1;try{return a(b)}finally{V=c,0===V&&(zg(),H());}}function bh(a,b){var c=V;if(0!==(c&48))return a(b);V|=1;try{if(a)return Pc(99,a.bind(null,b))}finally{V=c,H();}}function Xe(a,b){A(ug,tg);tg|=b;wg|=b;}function wf(){tg=ug.current;z(ug);}
  function Sg(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;c!==Ra&&(a.timeoutHandle=Ra,Qa(c));if(null!==W)for(c=W.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$b();break;case 3:Qd();z(D);z(B);ee();break;case 5:Sd(d);break;case 4:Qd();break;case 13:z(M);break;case 19:z(M);break;case 10:dd(d);break;case 23:case 24:wf();}c=c.return;}R=a;W=Ed(a.current,null);U=tg=wg=b;T=0;vg=null;xg=tf=pd=0;}
  function Ug(a,b){do{var c=W;try{bd();fe.current=pe;if(ie){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}ie=!1;}he=0;P=O=N=null;je=!1;rg.current=null;if(null===c||null===c.return){T=1;vg=b;W=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
  (h.updateQueue=null,h.memoizedState=null);}var t=0!==(M.current&1),p=g;do{var y;if(y=13===p.tag){var x=p.memoizedState;if(null!==x)y=null!==x.dehydrated?!0:!1;else {var Y=p.memoizedProps;y=void 0===Y.fallback?!1:!0!==Y.unstable_avoidThisFallback?!0:t?!1:!0;}}if(y){var u=p.updateQueue;if(null===u){var v=new Set;v.add(l);p.updateQueue=v;}else u.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var C=kd(-1,1);C.tag=2;md(h,C);}h.lanes|=1;break a}k=
  void 0;h=b;var Oa=f.pingCache;null===Oa?(Oa=f.pingCache=new Af,k=new Set,Oa.set(l,k)):(k=Oa.get(l),void 0===k&&(k=new Set,Oa.set(l,k)));if(!k.has(h)){k.add(h);var Qe=ch.bind(null,f,l,h);l.then(Qe,Qe);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((wa(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==T&&(T=2);k=
  yf(k,h);p=g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var Wg=Bf(p,f,b);nd(p,Wg);break a;case 1:f=k;var Xg=p.type,ld=p.stateNode;if(0===(p.flags&64)&&("function"===typeof Xg.getDerivedStateFromError||null!==ld&&"function"===typeof ld.componentDidCatch&&(null===Ff||!Ff.has(ld)))){p.flags|=4096;b&=-b;p.lanes|=b;var Yg=Ef(p,f,b);nd(p,Yg);break a}}p=p.return;}while(null!==p)}dh(c);}catch(w){b=w;W===c&&null!==c&&(W=c=c.return);continue}break}while(1)}
  function Rg(){var a=qg.current;qg.current=pe;return null===a?pe:a}function Vg(a,b){var c=V;V|=16;var d=Rg();R===a&&U===b||Sg(a,b);do try{eh();break}catch(e){Ug(a,e);}while(1);bd();V=c;qg.current=d;if(null!==W)throw Error(q(261));R=null;U=0;return T}function eh(){for(;null!==W;)fh(W);}function Tg(){for(;null!==W&&!yc();)fh(W);}function fh(a){var b=gh(a.alternate,a,tg);a.memoizedProps=a.pendingProps;null===b?dh(a):W=b;rg.current=null;}
  function dh(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=sf(c,b,tg);if(null!==c){W=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(tg&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
  a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=xf(b);if(null!==c){c.flags&=2047;W=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){W=b;return}W=b=a;}while(null!==b);0===T&&(T=5);}function Zg(a){var b=Nc();Pc(99,hh.bind(null,a,b));return null}
  function hh(a,b){do Qg();while(null!==Bg);if(0!==(V&48))throw Error(q(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(q(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-mc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
  Fg&&0===(d&24)&&Fg.has(a)&&Fg.delete(a);a===R&&(W=R=null,U=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=V;V|=32;rg.current=null;Lg=Ga(a.containerInfo);Mg=!1;X=d;do try{ih();}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect;}while(null!==X);Lg=null;X=d;do try{for(g=a;null!==X;){var n=X.flags;n&16&&Ta&&sb(X.stateNode);if(n&128){var t=X.alternate;if(null!==t){var p=t.ref;null!==p&&("function"===typeof p?p(null):p.current=
  null);}}switch(n&1038){case 2:Uf(X);X.flags&=-3;break;case 6:Uf(X);X.flags&=-3;Xf(X.alternate,X);break;case 1024:X.flags&=-1025;break;case 1028:X.flags&=-1025;Xf(X.alternate,X);break;case 4:Xf(X.alternate,X);break;case 8:h=g;f=X;Ta?Qf(h,f):Rf(h,f);var y=f.alternate;Sf(f);null!==y&&Sf(y);}X=X.nextEffect;}}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect;}while(null!==X);Mg&&$a();Ha(a.containerInfo);a.current=c;X=d;do try{for(n=a;null!==X;){var x=X.flags;x&36&&Lf(n,X.alternate,X);if(x&128){t=
  void 0;var Y=X.ref;if(null!==Y){var u=X.stateNode;switch(X.tag){case 5:t=Da(u);break;default:t=u;}"function"===typeof Y?Y(t):Y.current=t;}}X=X.nextEffect;}}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect;}while(null!==X);X=null;Ic();V=e;}else a.current=c;if(Ag)Ag=!1,Bg=a,Cg=b;else for(X=d;null!==X;)b=X.nextEffect,X.nextEffect=null,X.flags&8&&(x=X,x.sibling=null,x.stateNode=null),X=b;d=a.pendingLanes;0===d&&(Ff=null);1===d?a===Hg?Gg++:(Gg=0,Hg=a):Gg=0;c=c.stateNode;if(fc&&"function"===typeof fc.onCommitFiberRoot)try{fc.onCommitFiberRoot(ec,
  c,void 0,64===(c.current.flags&64));}catch(v){}Z(a,G());if(Cf)throw Cf=!1,a=Df,Df=null,a;if(0!==(V&8))return null;H();return null}function ih(){for(;null!==X;){var a=X.alternate;Mg||null===Lg||(0!==(X.flags&8)?Ca(X,Lg)&&(Mg=!0,Za()):13===X.tag&&bg(a,X)&&Ca(X,Lg)&&(Mg=!0,Za()));var b=X.flags;0!==(b&256)&&Jf(a,X);0===(b&512)||Ag||(Ag=!0,Qc(97,function(){Qg();return null}));X=X.nextEffect;}}function Qg(){if(90!==Cg){var a=97<Cg?97:Cg;Cg=90;return Pc(a,jh)}return !1}
  function Nf(a,b){Dg.push(b,a);Ag||(Ag=!0,Qc(97,function(){Qg();return null}));}function Mf(a,b){Eg.push(b,a);Ag||(Ag=!0,Qc(97,function(){Qg();return null}));}
  function jh(){if(null===Bg)return !1;var a=Bg;Bg=null;if(0!==(V&48))throw Error(q(331));var b=V;V|=32;var c=Eg;Eg=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(q(330));If(f,k);}}c=Dg;Dg=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(q(330));If(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
  null,h.stateNode=null),h=a;V=b;H();return !0}function kh(a,b,c){b=yf(c,b);b=Bf(a,b,1);md(a,b);b=K();a=Ng(a,1);null!==a&&(rc(a,1,b),Z(a,b));}
  function If(a,b){if(3===a.tag)kh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){kh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ff||!Ff.has(d))){a=yf(b,a);var e=Ef(c,a,1);md(c,e);e=K();c=Ng(c,1);if(null!==c)rc(c,1,e),Z(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ff||!Ff.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
  function ch(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=K();a.pingedLanes|=a.suspendedLanes&c;R===a&&(U&c)===c&&(4===T||3===T&&(U&62914560)===U&&500>G()-$f?Sg(a,0):xg|=c);Z(a,b);}function ag(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===Nc()?1:2:(0===Jg&&(Jg=wg),b=pc(62914560&~Jg),0===b&&(b=4194304)));c=K();a=Ng(a,b);null!==a&&(rc(a,b,c),Z(a,c));}var gh;
  gh=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||D.current)gd=!0;else if(0!==(c&d))gd=0!==(a.flags&16384)?!0:!1;else {gd=!1;switch(b.tag){case 3:af(b);ce();break;case 5:Rd(b);break;case 1:E(b.type)&&cc(b);break;case 4:Pd(b,b.stateNode.containerInfo);break;case 10:cd(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return cf(a,b,c);A(M,M.current&1);b=Re(a,b,c);return null!==b?b.sibling:null}A(M,M.current&1);break;case 19:d=
  0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return kf(a,b,c);b.flags|=64;}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);A(M,M.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,We(a,b,c)}return Re(a,b,c)}else gd=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Zb(b,B.current);fd(b,c);e=le(null,b,d,a,e,c);b.flags|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&
  void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(E(d)){var f=!0;cc(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;id(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&sd(b,d,g,a);e.updater=vd;b.stateNode=e;e._reactInternals=b;zd(b,d,a,c);b=$e(null,b,d,!0,f,c);}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;
  f=b.tag=lh(e);a=Xc(e,a);switch(f){case 0:b=Ve(null,b,e,a,c);break a;case 1:b=Ze(null,b,e,a,c);break a;case 11:b=Pe(null,b,e,a,c);break a;case 14:b=Se(null,b,e,Xc(e.type,a),d,c);break a}throw Error(q(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Ve(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Ze(a,b,d,e,c);case 3:af(b);d=b.updateQueue;if(null===a||null===d)throw Error(q(282));d=b.pendingProps;e=b.memoizedState;e=null!==
  e?e.element:null;jd(a,b);od(b,d,null,c);d=b.memoizedState.element;if(d===e)ce(),b=Re(a,b,c);else {e=b.stateNode;if(f=e.hydrate)Va?(Vd=Kb(b.stateNode.containerInfo),Ud=b,f=Wd=!0):f=!1;if(f){if(Va&&(a=e.mutableSourceEagerHydrationData,null!=a))for(e=0;e<a.length;e+=2)f=a[e],g=a[e+1],Sa?f._workInProgressVersionPrimary=g:f._workInProgressVersionSecondary=g,de.push(f);c=Kd(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else S(a,b,d,c),ce();b=b.child;}return b;case 5:return Rd(b),null===
  a&&$d(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ma(d,e)?g=null:null!==f&&Ma(d,f)&&(b.flags|=16),Ye(a,b),S(a,b,g,c),b.child;case 6:return null===a&&$d(b),null;case 13:return cf(a,b,c);case 4:return Pd(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Jd(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Pe(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
  c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;cd(b,f);if(null!==g){var h=g.value;f=I(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!D.current){b=Re(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==
  (l.observedBits&f)){1===h.tag&&(l=kd(-1,c&-c),l.tag=2,md(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);ed(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}}S(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,fd(b,c),e=J(e,f.unstable_observedBits),d=d(e),b.flags|=1,S(a,b,
  d,c),b.child;case 14:return e=b.type,f=Xc(e,b.pendingProps),f=Xc(e.type,f),Se(a,b,e,f,d,c);case 15:return Ue(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,E(d)?(a=!0,cc(b)):a=!1,fd(b,c),xd(b,d,e),zd(b,d,e,c),$e(null,b,d,!0,a,c);case 19:return kf(a,b,c);case 23:return We(a,b,c);case 24:return We(a,b,c)}throw Error(q(156,b.tag));};
  var mh={current:!1},nh=m.unstable_flushAllWithoutAsserting,oh="function"===typeof nh;function ph(){if(void 0!==nh)return nh();for(var a=!1;Qg();)a=!0;return a}function qh(a){try{ph(),og(function(){ph()?qh(a):a();});}catch(b){a(b);}}var rh=0,sh=!1;
  function th(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function Yd(a,b,c,d){return new th(a,b,c,d)}function Te(a){a=a.prototype;return !(!a||!a.isReactComponent)}
  function lh(a){if("function"===typeof a)return Te(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===la)return 11;if(a===oa)return 14}return 2}
  function Ed(a,b){var c=a.alternate;null===c?(c=Yd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
  c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
  function Gd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Te(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case fa:return Id(c.children,e,f,b);case ra:g=8;e|=16;break;case ha:g=8;e|=1;break;case ia:return a=Yd(12,c,b,e|8),a.elementType=ia,a.type=ia,a.lanes=f,a;case ma:return a=Yd(13,c,b,e),a.type=ma,a.elementType=ma,a.lanes=f,a;case na:return a=Yd(19,c,b,e),a.elementType=na,a.lanes=f,a;case sa:return ef(c,e,f,b);case ta:return a=Yd(24,c,b,e),a.elementType=ta,a.lanes=f,a;default:if("object"===
  typeof a&&null!==a)switch(a.$$typeof){case ja:g=10;break a;case ka:g=9;break a;case la:g=11;break a;case oa:g=14;break a;case pa:g=16;d=null;break a;case qa:g=22;break a}throw Error(q(130,null==a?a:typeof a,""));}b=Yd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Id(a,b,c,d){a=Yd(7,a,d,b);a.lanes=c;return a}function ef(a,b,c,d){a=Yd(23,a,d,b);a.elementType=sa;a.lanes=c;return a}function Fd(a,b,c){a=Yd(6,a,null,b);a.lanes=c;return a}
  function Hd(a,b,c){b=Yd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
  function uh(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=Ra;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=qc(0);this.expirationTimes=qc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=qc(0);Va&&(this.mutableSourceEagerHydrationData=null);}
  function vh(a){var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(q(188));throw Error(q(268,Object.keys(a)));}a=Aa(b);return null===a?null:a.stateNode}function wh(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function xh(a,b){wh(a,b);(a=a.alternate)&&wh(a,b);}function yh(a){a=Aa(a);return null===a?null:a.stateNode}function zh(){return null}exports.IsThisRendererActing=mh;
  exports.act=function(a){function b(){rh--;sg.current=c;mh.current=d;}!1===sh&&(sh=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected."));rh++;var c=sg.current,d=mh.current;sg.current=!0;mh.current=!0;try{var e=ah(a);}catch(f){throw b(),f;}if(null!==e&&"object"===typeof e&&"function"===typeof e.then)return {then:function(a,d){e.then(function(){1<rh||!0===oh&&!0===c?(b(),a()):qh(function(c){b();c?d(c):a();});},function(a){b();d(a);});}};try{1!==rh||
  !1!==oh&&!1!==c||ph(),b();}catch(f){throw b(),f;}return {then:function(a){a();}}};exports.attemptContinuousHydration=function(a){if(13===a.tag){var b=K();ud(a,67108864,b);xh(a,67108864);}};exports.attemptHydrationAtCurrentPriority=function(a){if(13===a.tag){var b=K(),c=td(a);ud(a,c,b);xh(a,c);}};
  exports.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.hydrate){var c=ic(b.pendingLanes);b.expiredLanes|=c&b.pendingLanes;Z(b,G());0===(V&48)&&(zg(),H());}break;case 13:var d=K();bh(function(){return ud(a,1,d)});xh(a,4);}};exports.attemptUserBlockingHydration=function(a){if(13===a.tag){var b=K();ud(a,4,b);xh(a,4);}};exports.batchedEventUpdates=function(a,b){var c=V;V|=2;try{return a(b)}finally{V=c,0===V&&(zg(),H());}};exports.batchedUpdates=ah;
  exports.createComponentSelector=function(a){return {$$typeof:cg,value:a}};exports.createContainer=function(a,b,c){a=new uh(a,b,c);b=Yd(3,null,null,2===b?7:1===b?3:0);a.current=b;b.stateNode=a;id(b);return a};exports.createHasPsuedoClassSelector=function(a){return {$$typeof:dg,value:a}};exports.createPortal=function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ea,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}};
  exports.createRoleSelector=function(a){return {$$typeof:eg,value:a}};exports.createTestNameSelector=function(a){return {$$typeof:fg,value:a}};exports.createTextSelector=function(a){return {$$typeof:gg,value:a}};exports.deferredUpdates=function(a){return Pc(97,a)};exports.discreteUpdates=function(a,b,c,d,e){var f=V;V|=4;try{return Pc(98,a.bind(null,b,c,d,e))}finally{V=f,0===V&&(zg(),H());}};exports.findAllNodes=mg;
  exports.findBoundingRects=function(a,b){if(!bb)throw Error(q(363));b=mg(a,b);a=[];for(var c=0;c<b.length;c++)a.push(db(b[c]));for(b=a.length-1;0<b;b--){c=a[b];for(var d=c.x,e=d+c.width,f=c.y,g=f+c.height,h=b-1;0<=h;h--)if(b!==h){var k=a[h],l=k.x,n=l+k.width,t=k.y,p=t+k.height;if(d>=l&&f>=t&&e<=n&&g<=p){a.splice(b,1);break}else if(!(d!==l||c.width!==k.width||p<f||t>g)){t>f&&(k.height+=t-f,k.y=f);p<g&&(k.height=g-t);a.splice(b,1);break}else if(!(f!==t||c.height!==k.height||n<d||l>e)){l>d&&(k.width+=
  l-d,k.x=d);n<e&&(k.width=e-l);a.splice(b,1);break}}}return a};exports.findHostInstance=vh;exports.findHostInstanceWithNoPortals=function(a){a=Ba(a);return null===a?null:20===a.tag?a.stateNode.instance:a.stateNode};exports.findHostInstanceWithWarning=function(a){return vh(a)};exports.flushControlled=function(a){var b=V;V|=1;try{Pc(99,a);}finally{V=b,0===V&&(zg(),H());}};exports.flushDiscreteUpdates=function(){0===(V&49)&&($g(),Qg());};exports.flushPassiveEffects=Qg;exports.flushSync=bh;
  exports.focusWithin=function(a,b){if(!bb)throw Error(q(363));a=ig(a);b=lg(a,b);b=Array.from(b);for(a=0;a<b.length;){var c=b[a++];if(!fb(c)){if(5===c.tag&&hb(c.stateNode))return !0;for(c=c.child;null!==c;)b.push(c),c=c.sibling;}}return !1};exports.getCurrentUpdateLanePriority=function(){return hc};
  exports.getFindAllNodesFailureDescription=function(a,b){if(!bb)throw Error(q(363));var c=0,d=[];a=[ig(a),0];for(var e=0;e<a.length;){var f=a[e++],g=a[e++],h=b[g];if(5!==f.tag||!fb(f))if(jg(f,h)&&(d.push(kg(h)),g++,g>c&&(c=g)),g<b.length)for(f=f.child;null!==f;)a.push(f,g),f=f.sibling;}if(c<b.length){for(a=[];c<b.length;c++)a.push(kg(b[c]));return "findAllNodes was able to match part of the selector:\n  "+(d.join(" > ")+"\n\nNo matching component was found for:\n  ")+a.join(" > ")}return null};
  exports.getPublicRootInstance=function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return Da(a.child.stateNode);default:return a.child.stateNode}};
  exports.injectIntoDevTools=function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ca.ReactCurrentDispatcher,findHostInstanceByFiber:yh,findFiberByHostInstance:a.findFiberByHostInstance||zh,findHostInstancesForRefresh:null,
  scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else {var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!b.isDisabled&&b.supportsFiber)try{ec=b.inject(a),fc=b;}catch(c){}a=!0;}return a};exports.observeVisibleRects=function(a,b,c,d){if(!bb)throw Error(q(363));a=mg(a,b);var e=ib(a,c,d).disconnect;return {disconnect:function(){e();}}};
  exports.registerMutableSourceForHydration=function(a,b){var c=b._getVersion;c=c(b._source);null==a.mutableSourceEagerHydrationData?a.mutableSourceEagerHydrationData=[b,c]:a.mutableSourceEagerHydrationData.push(b,c);};exports.runWithPriority=function(a,b){var c=hc;try{return hc=a,b()}finally{hc=c;}};exports.shouldSuspend=function(){return !1};exports.unbatchedUpdates=function(a,b){var c=V;V&=-2;V|=8;try{return a(b)}finally{V=c,0===V&&(zg(),H());}};
  exports.updateContainer=function(a,b,c,d){var e=b.current,f=K(),g=td(e);a:if(c){c=c._reactInternals;b:{if(xa(c)!==c||1!==c.tag)throw Error(q(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(E(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(q(171));}if(1===c.tag){var k=c.type;if(E(k)){c=bc(c,k,h);break a}}c=h;}else c=Xb;null===b.context?b.context=c:b.pendingContext=c;b=kd(f,g);b.payload={element:a};d=void 0===
  d?null:d;null!==d&&(b.callback=d);md(e,b);ud(e,g,f);return g};

      return exports;
  };
  });

  var schedulerTracing_development = createCommonjsModule(function (module, exports) {

  {
    (function() {

  var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

  var interactionIDCounter = 0;
  var threadIDCounter = 0; // Set of currently traced interactions.
  // Interactions "stack"–
  // Meaning that newly traced interactions are appended to the previously active set.
  // When an interaction goes out of scope, the previous set (if any) is restored.

  exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

  exports.__subscriberRef = null;

  {
    exports.__interactionsRef = {
      current: new Set()
    };
    exports.__subscriberRef = {
      current: null
    };
  }
  function unstable_clear(callback) {

    var prevInteractions = exports.__interactionsRef.current;
    exports.__interactionsRef.current = new Set();

    try {
      return callback();
    } finally {
      exports.__interactionsRef.current = prevInteractions;
    }
  }
  function unstable_getCurrent() {
    {
      return exports.__interactionsRef.current;
    }
  }
  function unstable_getThreadID() {
    return ++threadIDCounter;
  }
  function unstable_trace(name, timestamp, callback) {
    var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

    var interaction = {
      __count: 1,
      id: interactionIDCounter++,
      name: name,
      timestamp: timestamp
    };
    var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
    // To do that, clone the current interactions.
    // The previous set will be restored upon completion.

    var interactions = new Set(prevInteractions);
    interactions.add(interaction);
    exports.__interactionsRef.current = interactions;
    var subscriber = exports.__subscriberRef.current;
    var returnValue;

    try {
      if (subscriber !== null) {
        subscriber.onInteractionTraced(interaction);
      }
    } finally {
      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(interactions, threadID);
        }
      } finally {
        try {
          returnValue = callback();
        } finally {
          exports.__interactionsRef.current = prevInteractions;

          try {
            if (subscriber !== null) {
              subscriber.onWorkStopped(interactions, threadID);
            }
          } finally {
            interaction.__count--; // If no async work was scheduled for this interaction,
            // Notify subscribers that it's completed.

            if (subscriber !== null && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          }
        }
      }
    }

    return returnValue;
  }
  function unstable_wrap(callback) {
    var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

    var wrappedInteractions = exports.__interactionsRef.current;
    var subscriber = exports.__subscriberRef.current;

    if (subscriber !== null) {
      subscriber.onWorkScheduled(wrappedInteractions, threadID);
    } // Update the pending async work count for the current interactions.
    // Update after calling subscribers in case of error.


    wrappedInteractions.forEach(function (interaction) {
      interaction.__count++;
    });
    var hasRun = false;

    function wrapped() {
      var prevInteractions = exports.__interactionsRef.current;
      exports.__interactionsRef.current = wrappedInteractions;
      subscriber = exports.__subscriberRef.current;

      try {
        var returnValue;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStarted(wrappedInteractions, threadID);
          }
        } finally {
          try {
            returnValue = callback.apply(undefined, arguments);
          } finally {
            exports.__interactionsRef.current = prevInteractions;

            if (subscriber !== null) {
              subscriber.onWorkStopped(wrappedInteractions, threadID);
            }
          }
        }

        return returnValue;
      } finally {
        if (!hasRun) {
          // We only expect a wrapped function to be executed once,
          // But in the event that it's executed more than once–
          // Only decrement the outstanding interaction counts once.
          hasRun = true; // Update pending async counts for all wrapped interactions.
          // If this was the last scheduled async work for any of them,
          // Mark them as completed.

          wrappedInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber !== null && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          });
        }
      }
    }

    wrapped.cancel = function cancel() {
      subscriber = exports.__subscriberRef.current;

      try {
        if (subscriber !== null) {
          subscriber.onWorkCanceled(wrappedInteractions, threadID);
        }
      } finally {
        // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.
        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    };

    return wrapped;
  }

  var subscribers = null;

  {
    subscribers = new Set();
  }

  function unstable_subscribe(subscriber) {
    {
      subscribers.add(subscriber);

      if (subscribers.size === 1) {
        exports.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
          onInteractionTraced: onInteractionTraced,
          onWorkCanceled: onWorkCanceled,
          onWorkScheduled: onWorkScheduled,
          onWorkStarted: onWorkStarted,
          onWorkStopped: onWorkStopped
        };
      }
    }
  }
  function unstable_unsubscribe(subscriber) {
    {
      subscribers.delete(subscriber);

      if (subscribers.size === 0) {
        exports.__subscriberRef.current = null;
      }
    }
  }

  function onInteractionTraced(interaction) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onInteractionTraced(interaction);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onInteractionScheduledWorkCompleted(interaction) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onInteractionScheduledWorkCompleted(interaction);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkScheduled(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkScheduled(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkStarted(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkStarted(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkStopped(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkStopped(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkCanceled(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkCanceled(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  exports.unstable_clear = unstable_clear;
  exports.unstable_getCurrent = unstable_getCurrent;
  exports.unstable_getThreadID = unstable_getThreadID;
  exports.unstable_subscribe = unstable_subscribe;
  exports.unstable_trace = unstable_trace;
  exports.unstable_unsubscribe = unstable_unsubscribe;
  exports.unstable_wrap = unstable_wrap;
    })();
  }
  });
  schedulerTracing_development.__interactionsRef;
  schedulerTracing_development.__subscriberRef;
  schedulerTracing_development.unstable_clear;
  schedulerTracing_development.unstable_getCurrent;
  schedulerTracing_development.unstable_getThreadID;
  schedulerTracing_development.unstable_subscribe;
  schedulerTracing_development.unstable_trace;
  schedulerTracing_development.unstable_unsubscribe;
  schedulerTracing_development.unstable_wrap;

  var tracing = createCommonjsModule(function (module) {

  {
    module.exports = schedulerTracing_development;
  }
  });

  var reactReconciler_development = createCommonjsModule(function (module) {

  {
    module.exports = function $$$reconciler($$$hostConfig) {
      var exports = {};

  var React = React__default['default'];
  var _assign = objectAssign;
  var Scheduler = scheduler;
  var tracing$1 = tracing;

  var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

  // by calls to these methods by a Babel plugin.
  //
  // In PROD (or in packages without access to React internals),
  // they are left as they are instead.

  function warn(format) {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
  function error(format) {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }

  function printWarning(level, format, args) {
    // When changing this logic, you might want to also
    // update consoleWithStackDev.www.js as well.
    {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }

      var argsWithFormat = args.map(function (item) {
        return '' + item;
      }); // Careful: RN currently depends on this prefix

      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      // eslint-disable-next-line react-internal/no-production-logging

      Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
  }

  var FunctionComponent = 0;
  var ClassComponent = 1;
  var IndeterminateComponent = 2; // Before we know whether it is function or class

  var HostRoot = 3; // Root of a host tree. Could be nested inside another node.

  var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.

  var HostComponent = 5;
  var HostText = 6;
  var Fragment = 7;
  var Mode = 8;
  var ContextConsumer = 9;
  var ContextProvider = 10;
  var ForwardRef = 11;
  var Profiler = 12;
  var SuspenseComponent = 13;
  var MemoComponent = 14;
  var SimpleMemoComponent = 15;
  var LazyComponent = 16;
  var IncompleteClassComponent = 17;
  var DehydratedFragment = 18;
  var SuspenseListComponent = 19;
  var FundamentalComponent = 20;
  var ScopeComponent = 21;
  var Block = 22;
  var OffscreenComponent = 23;
  var LegacyHiddenComponent = 24;

  /**
   * `ReactInstanceMap` maintains a mapping from a public facing stateful
   * instance (key) and the internal representation (value). This allows public
   * methods to accept the user facing instance as an argument and map them back
   * to internal methods.
   *
   * Note that this module is currently shared and assumed to be stateless.
   * If this becomes an actual Map, that will break.
   */
  function get(key) {
    return key._reactInternals;
  }
  function set(key, value) {
    key._reactInternals = value;
  }

  // ATTENTION
  // When adding new symbols to this file,
  // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var REACT_ELEMENT_TYPE = 0xeac7;
  var REACT_PORTAL_TYPE = 0xeaca;
  var REACT_FRAGMENT_TYPE = 0xeacb;
  var REACT_STRICT_MODE_TYPE = 0xeacc;
  var REACT_PROFILER_TYPE = 0xead2;
  var REACT_PROVIDER_TYPE = 0xeacd;
  var REACT_CONTEXT_TYPE = 0xeace;
  var REACT_FORWARD_REF_TYPE = 0xead0;
  var REACT_SUSPENSE_TYPE = 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = 0xead8;
  var REACT_MEMO_TYPE = 0xead3;
  var REACT_LAZY_TYPE = 0xead4;
  var REACT_BLOCK_TYPE = 0xead9;
  var REACT_SCOPE_TYPE = 0xead7;
  var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
  var REACT_OFFSCREEN_TYPE = 0xeae2;
  var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

  if (typeof Symbol === 'function' && Symbol.for) {
    var symbolFor = Symbol.for;
    REACT_ELEMENT_TYPE = symbolFor('react.element');
    REACT_PORTAL_TYPE = symbolFor('react.portal');
    REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
    REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
    REACT_PROFILER_TYPE = symbolFor('react.profiler');
    REACT_PROVIDER_TYPE = symbolFor('react.provider');
    REACT_CONTEXT_TYPE = symbolFor('react.context');
    REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
    REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
    REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
    REACT_MEMO_TYPE = symbolFor('react.memo');
    REACT_LAZY_TYPE = symbolFor('react.lazy');
    REACT_BLOCK_TYPE = symbolFor('react.block');
    symbolFor('react.server.block');
    symbolFor('react.fundamental');
    REACT_SCOPE_TYPE = symbolFor('react.scope');
    symbolFor('react.opaque.id');
    REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
    REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
    REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
  }

  var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    if (maybeIterable === null || typeof maybeIterable !== 'object') {
      return null;
    }

    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

    if (typeof maybeIterator === 'function') {
      return maybeIterator;
    }

    return null;
  }

  function getWrappedName(outerType, innerType, wrapperName) {
    var functionName = innerType.displayName || innerType.name || '';
    return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
  }

  function getContextName(type) {
    return type.displayName || 'Context';
  }

  function getComponentName(type) {
    if (type == null) {
      // Host root, text node or just invalid type.
      return null;
    }

    {
      if (typeof type.tag === 'number') {
        error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
      }
    }

    if (typeof type === 'function') {
      return type.displayName || type.name || null;
    }

    if (typeof type === 'string') {
      return type;
    }

    switch (type) {
      case REACT_FRAGMENT_TYPE:
        return 'Fragment';

      case REACT_PORTAL_TYPE:
        return 'Portal';

      case REACT_PROFILER_TYPE:
        return 'Profiler';

      case REACT_STRICT_MODE_TYPE:
        return 'StrictMode';

      case REACT_SUSPENSE_TYPE:
        return 'Suspense';

      case REACT_SUSPENSE_LIST_TYPE:
        return 'SuspenseList';
    }

    if (typeof type === 'object') {
      switch (type.$$typeof) {
        case REACT_CONTEXT_TYPE:
          var context = type;
          return getContextName(context) + '.Consumer';

        case REACT_PROVIDER_TYPE:
          var provider = type;
          return getContextName(provider._context) + '.Provider';

        case REACT_FORWARD_REF_TYPE:
          return getWrappedName(type, type.render, 'ForwardRef');

        case REACT_MEMO_TYPE:
          return getComponentName(type.type);

        case REACT_BLOCK_TYPE:
          return getComponentName(type._render);

        case REACT_LAZY_TYPE:
          {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;

            try {
              return getComponentName(init(payload));
            } catch (x) {
              return null;
            }
          }
      }
    }

    return null;
  }

  // Don't change these two values. They're used by React Dev Tools.
  var NoFlags =
  /*                      */
  0;
  var PerformedWork =
  /*                */
  1; // You can change the rest (and add more).

  var Placement =
  /*                    */
  2;
  var Update =
  /*                       */
  4;
  var PlacementAndUpdate =
  /*           */
  6;
  var Deletion =
  /*                     */
  8;
  var ContentReset =
  /*                 */
  16;
  var Callback =
  /*                     */
  32;
  var DidCapture =
  /*                   */
  64;
  var Ref =
  /*                          */
  128;
  var Snapshot =
  /*                     */
  256;
  var Passive =
  /*                      */
  512; // TODO (effects) Remove this bit once the new reconciler is synced to the old.

  var PassiveUnmountPendingDev =
  /*     */
  8192;
  var Hydrating =
  /*                    */
  1024;
  var HydratingAndUpdate =
  /*           */
  1028; // Passive & Update & Callback & Ref & Snapshot

  var LifecycleEffectMask =
  /*          */
  932; // Union of all host effects

  var HostEffectMask =
  /*               */
  2047; // These are not really side effects, but we still reuse this field.

  var Incomplete =
  /*                   */
  2048;
  var ShouldCapture =
  /*                */
  4096;
  var ForceUpdateForLegacySuspense =
  /* */
  16384; // Static tags describe aspects of a fiber that are not specific to a render,

  // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

  var enableProfilerTimer = true; // Record durations for commit and passive effects phases.

  var enableFundamentalAPI = false; // Experimental Scope support.
  var enableNewReconciler = false; // Errors that are thrown while unmounting (or after in the case of passive effects)
  var warnAboutStringRefs = false;

  var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
  function getNearestMountedFiber(fiber) {
    var node = fiber;
    var nearestMounted = fiber;

    if (!fiber.alternate) {
      // If there is no alternate, this might be a new tree that isn't inserted
      // yet. If it is, then it will have a pending insertion effect on it.
      var nextNode = node;

      do {
        node = nextNode;

        if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
          // This is an insertion or in-progress hydration. The nearest possible
          // mounted fiber is the parent but we need to continue to figure out
          // if that one is still mounted.
          nearestMounted = node.return;
        }

        nextNode = node.return;
      } while (nextNode);
    } else {
      while (node.return) {
        node = node.return;
      }
    }

    if (node.tag === HostRoot) {
      // TODO: Check if this was a nested HostRoot when used with
      // renderContainerIntoSubtree.
      return nearestMounted;
    } // If we didn't hit the root, that means that we're in an disconnected tree
    // that has been unmounted.


    return null;
  }
  function isFiberMounted(fiber) {
    return getNearestMountedFiber(fiber) === fiber;
  }
  function isMounted(component) {
    {
      var owner = ReactCurrentOwner.current;

      if (owner !== null && owner.tag === ClassComponent) {
        var ownerFiber = owner;
        var instance = ownerFiber.stateNode;

        if (!instance._warnedAboutRefsInRender) {
          error('%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber.type) || 'A component');
        }

        instance._warnedAboutRefsInRender = true;
      }
    }

    var fiber = get(component);

    if (!fiber) {
      return false;
    }

    return getNearestMountedFiber(fiber) === fiber;
  }

  function assertIsMounted(fiber) {
    if (!(getNearestMountedFiber(fiber) === fiber)) {
      {
        throw Error( "Unable to find node on an unmounted component." );
      }
    }
  }

  function findCurrentFiberUsingSlowPath(fiber) {
    var alternate = fiber.alternate;

    if (!alternate) {
      // If there is no alternate, then we only need to check if it is mounted.
      var nearestMounted = getNearestMountedFiber(fiber);

      if (!(nearestMounted !== null)) {
        {
          throw Error( "Unable to find node on an unmounted component." );
        }
      }

      if (nearestMounted !== fiber) {
        return null;
      }

      return fiber;
    } // If we have two possible branches, we'll walk backwards up to the root
    // to see what path the root points to. On the way we may hit one of the
    // special cases and we'll deal with them.


    var a = fiber;
    var b = alternate;

    while (true) {
      var parentA = a.return;

      if (parentA === null) {
        // We're at the root.
        break;
      }

      var parentB = parentA.alternate;

      if (parentB === null) {
        // There is no alternate. This is an unusual case. Currently, it only
        // happens when a Suspense component is hidden. An extra fragment fiber
        // is inserted in between the Suspense fiber and its children. Skip
        // over this extra fragment fiber and proceed to the next parent.
        var nextParent = parentA.return;

        if (nextParent !== null) {
          a = b = nextParent;
          continue;
        } // If there's no parent, we're at the root.


        break;
      } // If both copies of the parent fiber point to the same child, we can
      // assume that the child is current. This happens when we bailout on low
      // priority: the bailed out fiber's child reuses the current child.


      if (parentA.child === parentB.child) {
        var child = parentA.child;

        while (child) {
          if (child === a) {
            // We've determined that A is the current branch.
            assertIsMounted(parentA);
            return fiber;
          }

          if (child === b) {
            // We've determined that B is the current branch.
            assertIsMounted(parentA);
            return alternate;
          }

          child = child.sibling;
        } // We should never have an alternate for any mounting node. So the only
        // way this could possibly happen is if this was unmounted, if at all.


        {
          {
            throw Error( "Unable to find node on an unmounted component." );
          }
        }
      }

      if (a.return !== b.return) {
        // The return pointer of A and the return pointer of B point to different
        // fibers. We assume that return pointers never criss-cross, so A must
        // belong to the child set of A.return, and B must belong to the child
        // set of B.return.
        a = parentA;
        b = parentB;
      } else {
        // The return pointers point to the same fiber. We'll have to use the
        // default, slow path: scan the child sets of each parent alternate to see
        // which child belongs to which set.
        //
        // Search parent A's child set
        var didFindChild = false;
        var _child = parentA.child;

        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentA;
            b = parentB;
            break;
          }

          if (_child === b) {
            didFindChild = true;
            b = parentA;
            a = parentB;
            break;
          }

          _child = _child.sibling;
        }

        if (!didFindChild) {
          // Search parent B's child set
          _child = parentB.child;

          while (_child) {
            if (_child === a) {
              didFindChild = true;
              a = parentB;
              b = parentA;
              break;
            }

            if (_child === b) {
              didFindChild = true;
              b = parentB;
              a = parentA;
              break;
            }

            _child = _child.sibling;
          }

          if (!didFindChild) {
            {
              throw Error( "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue." );
            }
          }
        }
      }

      if (!(a.alternate === b)) {
        {
          throw Error( "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue." );
        }
      }
    } // If the root is not a host container, we're in a disconnected tree. I.e.
    // unmounted.


    if (!(a.tag === HostRoot)) {
      {
        throw Error( "Unable to find node on an unmounted component." );
      }
    }

    if (a.stateNode.current === a) {
      // We've determined that A is the current branch.
      return fiber;
    } // Otherwise B has to be current branch.


    return alternate;
  }
  function findCurrentHostFiber(parent) {
    var currentParent = findCurrentFiberUsingSlowPath(parent);

    if (!currentParent) {
      return null;
    } // Next we'll drill down this component to find the first HostComponent/Text.


    var node = currentParent;

    while (true) {
      if (node.tag === HostComponent || node.tag === HostText) {
        return node;
      } else if (node.child) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === currentParent) {
        return null;
      }

      while (!node.sibling) {
        if (!node.return || node.return === currentParent) {
          return null;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    } // Flow needs the return null here, but ESLint complains about it.
    // eslint-disable-next-line no-unreachable


    return null;
  }
  function findCurrentHostFiberWithNoPortals(parent) {
    var currentParent = findCurrentFiberUsingSlowPath(parent);

    if (!currentParent) {
      return null;
    } // Next we'll drill down this component to find the first HostComponent/Text.


    var node = currentParent;

    while (true) {
      if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI ) {
        return node;
      } else if (node.child && node.tag !== HostPortal) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === currentParent) {
        return null;
      }

      while (!node.sibling) {
        if (!node.return || node.return === currentParent) {
          return null;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    } // Flow needs the return null here, but ESLint complains about it.
    // eslint-disable-next-line no-unreachable


    return null;
  }
  function doesFiberContain(parentFiber, childFiber) {
    var node = childFiber;
    var parentFiberAlternate = parentFiber.alternate;

    while (node !== null) {
      if (node === parentFiber || node === parentFiberAlternate) {
        return true;
      }

      node = node.return;
    }

    return false;
  }

  // This is a host config that's used for the `react-reconciler` package on npm.
  // It is only used by third-party renderers.
  //
  // Its API lets you pass the host config as an argument.
  // However, inside the `react-reconciler` we treat host config as a module.
  // This file is a shim between two worlds.
  //
  // It works because the `react-reconciler` bundle is wrapped in something like:
  //
  // module.exports = function ($$$config) {
  //   /* reconciler code */
  // }
  //
  // So `$$$config` looks like a global variable, but it's
  // really an argument to a top-level wrapping function.
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  // eslint-disable-line no-undef
  var getPublicInstance = $$$hostConfig.getPublicInstance;
  var getRootHostContext = $$$hostConfig.getRootHostContext;
  var getChildHostContext = $$$hostConfig.getChildHostContext;
  var prepareForCommit = $$$hostConfig.prepareForCommit;
  var resetAfterCommit = $$$hostConfig.resetAfterCommit;
  var createInstance = $$$hostConfig.createInstance;
  var appendInitialChild = $$$hostConfig.appendInitialChild;
  var finalizeInitialChildren = $$$hostConfig.finalizeInitialChildren;
  var prepareUpdate = $$$hostConfig.prepareUpdate;
  var shouldSetTextContent = $$$hostConfig.shouldSetTextContent;
  var createTextInstance = $$$hostConfig.createTextInstance;
  var scheduleTimeout = $$$hostConfig.scheduleTimeout;
  var cancelTimeout = $$$hostConfig.cancelTimeout;
  var noTimeout = $$$hostConfig.noTimeout;
  $$$hostConfig.now;
  var isPrimaryRenderer = $$$hostConfig.isPrimaryRenderer;
  var warnsIfNotActing = $$$hostConfig.warnsIfNotActing;
  var supportsMutation = $$$hostConfig.supportsMutation;
  var supportsPersistence = $$$hostConfig.supportsPersistence;
  var supportsHydration = $$$hostConfig.supportsHydration;
  $$$hostConfig.getFundamentalComponentInstance;
  $$$hostConfig.mountFundamentalComponent;
  $$$hostConfig.shouldUpdateFundamentalComponent;
  var getInstanceFromNode = $$$hostConfig.getInstanceFromNode;
  $$$hostConfig.isOpaqueHydratingObject;
  var makeOpaqueHydratingObject = $$$hostConfig.makeOpaqueHydratingObject;
  $$$hostConfig.makeClientId;
  var makeClientIdInDEV = $$$hostConfig.makeClientIdInDEV;
  var beforeActiveInstanceBlur = $$$hostConfig.beforeActiveInstanceBlur;
  var afterActiveInstanceBlur = $$$hostConfig.afterActiveInstanceBlur;
  var preparePortalMount = $$$hostConfig.preparePortalMount;
  $$$hostConfig.preparePortalMount;
  $$$hostConfig.getInstanceFromScope; // -------------------
  //      Test selectors
  //     (optional)
  // -------------------

  var supportsTestSelectors = $$$hostConfig.supportsTestSelectors;
  var findFiberRoot = $$$hostConfig.findFiberRoot;
  var getBoundingRect = $$$hostConfig.getBoundingRect;
  var getTextContent = $$$hostConfig.getTextContent;
  var isHiddenSubtree = $$$hostConfig.isHiddenSubtree;
  var matchAccessibilityRole = $$$hostConfig.matchAccessibilityRole;
  var setFocusIfFocusable = $$$hostConfig.setFocusIfFocusable;
  var setupIntersectionObserver = $$$hostConfig.setupIntersectionObserver; // -------------------
  //      Mutation
  //     (optional)
  // -------------------

  var appendChild = $$$hostConfig.appendChild;
  var appendChildToContainer = $$$hostConfig.appendChildToContainer;
  var commitTextUpdate = $$$hostConfig.commitTextUpdate;
  var commitMount = $$$hostConfig.commitMount;
  var commitUpdate = $$$hostConfig.commitUpdate;
  var insertBefore = $$$hostConfig.insertBefore;
  var insertInContainerBefore = $$$hostConfig.insertInContainerBefore;
  var removeChild = $$$hostConfig.removeChild;
  var removeChildFromContainer = $$$hostConfig.removeChildFromContainer;
  var resetTextContent = $$$hostConfig.resetTextContent;
  var hideInstance = $$$hostConfig.hideInstance;
  var hideTextInstance = $$$hostConfig.hideTextInstance;
  var unhideInstance = $$$hostConfig.unhideInstance;
  var unhideTextInstance = $$$hostConfig.unhideTextInstance;
  $$$hostConfig.updateFundamentalComponent;
  $$$hostConfig.unmountFundamentalComponent;
  var clearContainer = $$$hostConfig.clearContainer; // -------------------
  //     Persistence
  //     (optional)
  // -------------------

  var cloneInstance = $$$hostConfig.cloneInstance;
  var createContainerChildSet = $$$hostConfig.createContainerChildSet;
  var appendChildToContainerChildSet = $$$hostConfig.appendChildToContainerChildSet;
  var finalizeContainerChildren = $$$hostConfig.finalizeContainerChildren;
  var replaceContainerChildren = $$$hostConfig.replaceContainerChildren;
  var cloneHiddenInstance = $$$hostConfig.cloneHiddenInstance;
  var cloneHiddenTextInstance = $$$hostConfig.cloneHiddenTextInstance;
  $$$hostConfig.cloneInstance; // -------------------
  //     Hydration
  //     (optional)
  // -------------------

  var canHydrateInstance = $$$hostConfig.canHydrateInstance;
  var canHydrateTextInstance = $$$hostConfig.canHydrateTextInstance;
  $$$hostConfig.canHydrateSuspenseInstance;
  var isSuspenseInstancePending = $$$hostConfig.isSuspenseInstancePending;
  var isSuspenseInstanceFallback = $$$hostConfig.isSuspenseInstanceFallback;
  $$$hostConfig.registerSuspenseInstanceRetry;
  var getNextHydratableSibling = $$$hostConfig.getNextHydratableSibling;
  var getFirstHydratableChild = $$$hostConfig.getFirstHydratableChild;
  var hydrateInstance = $$$hostConfig.hydrateInstance;
  var hydrateTextInstance = $$$hostConfig.hydrateTextInstance;
  $$$hostConfig.hydrateSuspenseInstance;
  var getNextHydratableInstanceAfterSuspenseInstance = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance;
  var commitHydratedContainer = $$$hostConfig.commitHydratedContainer;
  var commitHydratedSuspenseInstance = $$$hostConfig.commitHydratedSuspenseInstance;
  $$$hostConfig.clearSuspenseBoundary;
  $$$hostConfig.clearSuspenseBoundaryFromContainer;
  var didNotMatchHydratedContainerTextInstance = $$$hostConfig.didNotMatchHydratedContainerTextInstance;
  var didNotMatchHydratedTextInstance = $$$hostConfig.didNotMatchHydratedTextInstance;
  var didNotHydrateContainerInstance = $$$hostConfig.didNotHydrateContainerInstance;
  var didNotHydrateInstance = $$$hostConfig.didNotHydrateInstance;
  var didNotFindHydratableContainerInstance = $$$hostConfig.didNotFindHydratableContainerInstance;
  var didNotFindHydratableContainerTextInstance = $$$hostConfig.didNotFindHydratableContainerTextInstance;
  var didNotFindHydratableContainerSuspenseInstance = $$$hostConfig.didNotFindHydratableContainerSuspenseInstance;
  var didNotFindHydratableInstance = $$$hostConfig.didNotFindHydratableInstance;
  var didNotFindHydratableTextInstance = $$$hostConfig.didNotFindHydratableTextInstance;
  var didNotFindHydratableSuspenseInstance = $$$hostConfig.didNotFindHydratableSuspenseInstance;

  // Helpers to patch console.logs to avoid logging during side-effect free
  // replaying on render function. This currently only patches the object
  // lazily which won't cover if the log function was extracted eagerly.
  // We could also eagerly patch the method.
  var disabledDepth = 0;
  var prevLog;
  var prevInfo;
  var prevWarn;
  var prevError;
  var prevGroup;
  var prevGroupCollapsed;
  var prevGroupEnd;

  function disabledLog() {}

  disabledLog.__reactDisabledLog = true;
  function disableLogs() {
    {
      if (disabledDepth === 0) {
        /* eslint-disable react-internal/no-production-logging */
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true
        }; // $FlowFixMe Flow thinks console is immutable.

        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
        /* eslint-enable react-internal/no-production-logging */
      }

      disabledDepth++;
    }
  }
  function reenableLogs() {
    {
      disabledDepth--;

      if (disabledDepth === 0) {
        /* eslint-disable react-internal/no-production-logging */
        var props = {
          configurable: true,
          enumerable: true,
          writable: true
        }; // $FlowFixMe Flow thinks console is immutable.

        Object.defineProperties(console, {
          log: _assign({}, props, {
            value: prevLog
          }),
          info: _assign({}, props, {
            value: prevInfo
          }),
          warn: _assign({}, props, {
            value: prevWarn
          }),
          error: _assign({}, props, {
            value: prevError
          }),
          group: _assign({}, props, {
            value: prevGroup
          }),
          groupCollapsed: _assign({}, props, {
            value: prevGroupCollapsed
          }),
          groupEnd: _assign({}, props, {
            value: prevGroupEnd
          })
        });
        /* eslint-enable react-internal/no-production-logging */
      }

      if (disabledDepth < 0) {
        error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
      }
    }
  }

  var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
  var prefix;
  function describeBuiltInComponentFrame(name, source, ownerFn) {
    {
      if (prefix === undefined) {
        // Extract the VM specific prefix used by each line.
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || '';
        }
      } // We use the prefix to ensure our stacks line up with native stack frames.


      return '\n' + prefix + name;
    }
  }
  var reentry = false;
  var componentFrameCache;

  {
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
  }

  function describeNativeComponentFrame(fn, construct) {
    // If something asked for a stack inside a fake render, it should get ignored.
    if (!fn || reentry) {
      return '';
    }

    {
      var frame = componentFrameCache.get(fn);

      if (frame !== undefined) {
        return frame;
      }
    }

    var control;
    reentry = true;
    var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

    Error.prepareStackTrace = undefined;
    var previousDispatcher;

    {
      previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
      // for warnings.

      ReactCurrentDispatcher.current = null;
      disableLogs();
    }

    try {
      // This should throw.
      if (construct) {
        // Something should be setting the props in the constructor.
        var Fake = function () {
          throw Error();
        }; // $FlowFixMe


        Object.defineProperty(Fake.prototype, 'props', {
          set: function () {
            // We use a throwing setter instead of frozen or non-writable props
            // because that won't throw in a non-strict mode function.
            throw Error();
          }
        });

        if (typeof Reflect === 'object' && Reflect.construct) {
          // We construct a different control for this case to include any extra
          // frames added by the construct call.
          try {
            Reflect.construct(Fake, []);
          } catch (x) {
            control = x;
          }

          Reflect.construct(fn, [], Fake);
        } else {
          try {
            Fake.call();
          } catch (x) {
            control = x;
          }

          fn.call(Fake.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (x) {
          control = x;
        }

        fn();
      }
    } catch (sample) {
      // This is inlined manually because closure doesn't do it for us.
      if (sample && control && typeof sample.stack === 'string') {
        // This extracts the first frame from the sample that isn't also in the control.
        // Skipping one frame that we assume is the frame that calls the two.
        var sampleLines = sample.stack.split('\n');
        var controlLines = control.stack.split('\n');
        var s = sampleLines.length - 1;
        var c = controlLines.length - 1;

        while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
          // We expect at least one stack frame to be shared.
          // Typically this will be the root most one. However, stack frames may be
          // cut off due to maximum stack limits. In this case, one maybe cut off
          // earlier than the other. We assume that the sample is longer or the same
          // and there for cut off earlier. So we should find the root most frame in
          // the sample somewhere in the control.
          c--;
        }

        for (; s >= 1 && c >= 0; s--, c--) {
          // Next we find the first one that isn't the same which should be the
          // frame that called our sample function and the control.
          if (sampleLines[s] !== controlLines[c]) {
            // In V8, the first line is describing the message but other VMs don't.
            // If we're about to return the first line, and the control is also on the same
            // line, that's a pretty good indicator that our sample threw at same line as
            // the control. I.e. before we entered the sample frame. So we ignore this result.
            // This can happen if you passed a class to function component, or non-function.
            if (s !== 1 || c !== 1) {
              do {
                s--;
                c--; // We may still have similar intermediate frames from the construct call.
                // The next one that isn't the same should be our match though.

                if (c < 0 || sampleLines[s] !== controlLines[c]) {
                  // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                  var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                  {
                    if (typeof fn === 'function') {
                      componentFrameCache.set(fn, _frame);
                    }
                  } // Return the line we found.


                  return _frame;
                }
              } while (s >= 1 && c >= 0);
            }

            break;
          }
        }
      }
    } finally {
      reentry = false;

      {
        ReactCurrentDispatcher.current = previousDispatcher;
        reenableLogs();
      }

      Error.prepareStackTrace = previousPrepareStackTrace;
    } // Fallback to just using the name if we couldn't make it throw.


    var name = fn ? fn.displayName || fn.name : '';
    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

    {
      if (typeof fn === 'function') {
        componentFrameCache.set(fn, syntheticFrame);
      }
    }

    return syntheticFrame;
  }

  function describeClassComponentFrame(ctor, source, ownerFn) {
    {
      return describeNativeComponentFrame(ctor, true);
    }
  }
  function describeFunctionComponentFrame(fn, source, ownerFn) {
    {
      return describeNativeComponentFrame(fn, false);
    }
  }

  function shouldConstruct(Component) {
    var prototype = Component.prototype;
    return !!(prototype && prototype.isReactComponent);
  }

  function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

    if (type == null) {
      return '';
    }

    if (typeof type === 'function') {
      {
        return describeNativeComponentFrame(type, shouldConstruct(type));
      }
    }

    if (typeof type === 'string') {
      return describeBuiltInComponentFrame(type);
    }

    switch (type) {
      case REACT_SUSPENSE_TYPE:
        return describeBuiltInComponentFrame('Suspense');

      case REACT_SUSPENSE_LIST_TYPE:
        return describeBuiltInComponentFrame('SuspenseList');
    }

    if (typeof type === 'object') {
      switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          return describeFunctionComponentFrame(type.render);

        case REACT_MEMO_TYPE:
          // Memo may contain any component type so we recursively resolve it.
          return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

        case REACT_BLOCK_TYPE:
          return describeFunctionComponentFrame(type._render);

        case REACT_LAZY_TYPE:
          {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;

            try {
              // Lazy may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
            } catch (x) {}
          }
      }
    }

    return '';
  }

  var loggedTypeFailures = {};
  var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  function setCurrentlyValidatingElement(element) {
    {
      if (element) {
        var owner = element._owner;
        var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
        ReactDebugCurrentFrame.setExtraStackFrame(stack);
      } else {
        ReactDebugCurrentFrame.setExtraStackFrame(null);
      }
    }
  }

  function checkPropTypes(typeSpecs, values, location, componentName, element) {
    {
      // $FlowFixMe This is okay but Flow doesn't know it.
      var has = Function.call.bind(Object.prototype.hasOwnProperty);

      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
          } catch (ex) {
            error$1 = ex;
          }

          if (error$1 && !(error$1 instanceof Error)) {
            setCurrentlyValidatingElement(element);

            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

            setCurrentlyValidatingElement(null);
          }

          if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error$1.message] = true;
            setCurrentlyValidatingElement(element);

            error('Failed %s type: %s', location, error$1.message);

            setCurrentlyValidatingElement(null);
          }
        }
      }
    }
  }

  var valueStack = [];
  var fiberStack;

  {
    fiberStack = [];
  }

  var index = -1;

  function createCursor(defaultValue) {
    return {
      current: defaultValue
    };
  }

  function pop(cursor, fiber) {
    if (index < 0) {
      {
        error('Unexpected pop.');
      }

      return;
    }

    {
      if (fiber !== fiberStack[index]) {
        error('Unexpected Fiber popped.');
      }
    }

    cursor.current = valueStack[index];
    valueStack[index] = null;

    {
      fiberStack[index] = null;
    }

    index--;
  }

  function push(cursor, value, fiber) {
    index++;
    valueStack[index] = cursor.current;

    {
      fiberStack[index] = fiber;
    }

    cursor.current = value;
  }

  var warnedAboutMissingGetChildContext;

  {
    warnedAboutMissingGetChildContext = {};
  }

  var emptyContextObject = {};

  {
    Object.freeze(emptyContextObject);
  } // A cursor to the current merged context object on the stack.


  var contextStackCursor = createCursor(emptyContextObject); // A cursor to a boolean indicating whether the context has changed.

  var didPerformWorkStackCursor = createCursor(false); // Keep track of the previous context object that was on the stack.
  // We use this to get access to the parent context after we have already
  // pushed the next context provider, and now need to merge their contexts.

  var previousContext = emptyContextObject;

  function getUnmaskedContext(workInProgress, Component, didPushOwnContextIfProvider) {
    {
      if (didPushOwnContextIfProvider && isContextProvider(Component)) {
        // If the fiber is a context provider itself, when we read its context
        // we may have already pushed its own child context on the stack. A context
        // provider should not "see" its own child context. Therefore we read the
        // previous (parent) context instead for a context provider.
        return previousContext;
      }

      return contextStackCursor.current;
    }
  }

  function cacheContext(workInProgress, unmaskedContext, maskedContext) {
    {
      var instance = workInProgress.stateNode;
      instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
      instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
    }
  }

  function getMaskedContext(workInProgress, unmaskedContext) {
    {
      var type = workInProgress.type;
      var contextTypes = type.contextTypes;

      if (!contextTypes) {
        return emptyContextObject;
      } // Avoid recreating masked context unless unmasked context has changed.
      // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
      // This may trigger infinite loops if componentWillReceiveProps calls setState.


      var instance = workInProgress.stateNode;

      if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
        return instance.__reactInternalMemoizedMaskedChildContext;
      }

      var context = {};

      for (var key in contextTypes) {
        context[key] = unmaskedContext[key];
      }

      {
        var name = getComponentName(type) || 'Unknown';
        checkPropTypes(contextTypes, context, 'context', name);
      } // Cache unmasked context so we can avoid recreating masked context unless necessary.
      // Context is created before the class component is instantiated so check for instance.


      if (instance) {
        cacheContext(workInProgress, unmaskedContext, context);
      }

      return context;
    }
  }

  function hasContextChanged() {
    {
      return didPerformWorkStackCursor.current;
    }
  }

  function isContextProvider(type) {
    {
      var childContextTypes = type.childContextTypes;
      return childContextTypes !== null && childContextTypes !== undefined;
    }
  }

  function popContext(fiber) {
    {
      pop(didPerformWorkStackCursor, fiber);
      pop(contextStackCursor, fiber);
    }
  }

  function popTopLevelContextObject(fiber) {
    {
      pop(didPerformWorkStackCursor, fiber);
      pop(contextStackCursor, fiber);
    }
  }

  function pushTopLevelContextObject(fiber, context, didChange) {
    {
      if (!(contextStackCursor.current === emptyContextObject)) {
        {
          throw Error( "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue." );
        }
      }

      push(contextStackCursor, context, fiber);
      push(didPerformWorkStackCursor, didChange, fiber);
    }
  }

  function processChildContext(fiber, type, parentContext) {
    {
      var instance = fiber.stateNode;
      var childContextTypes = type.childContextTypes; // TODO (bvaughn) Replace this behavior with an invariant() in the future.
      // It has only been added in Fiber to match the (unintentional) behavior in Stack.

      if (typeof instance.getChildContext !== 'function') {
        {
          var componentName = getComponentName(type) || 'Unknown';

          if (!warnedAboutMissingGetChildContext[componentName]) {
            warnedAboutMissingGetChildContext[componentName] = true;

            error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
          }
        }

        return parentContext;
      }

      var childContext = instance.getChildContext();

      for (var contextKey in childContext) {
        if (!(contextKey in childContextTypes)) {
          {
            throw Error( (getComponentName(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
          }
        }
      }

      {
        var name = getComponentName(type) || 'Unknown';
        checkPropTypes(childContextTypes, childContext, 'child context', name);
      }

      return _assign({}, parentContext, childContext);
    }
  }

  function pushContextProvider(workInProgress) {
    {
      var instance = workInProgress.stateNode; // We push the context as early as possible to ensure stack integrity.
      // If the instance does not exist yet, we will push null at first,
      // and replace it on the stack later when invalidating the context.

      var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject; // Remember the parent context so we can merge with it later.
      // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.

      previousContext = contextStackCursor.current;
      push(contextStackCursor, memoizedMergedChildContext, workInProgress);
      push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);
      return true;
    }
  }

  function invalidateContextProvider(workInProgress, type, didChange) {
    {
      var instance = workInProgress.stateNode;

      if (!instance) {
        {
          throw Error( "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue." );
        }
      }

      if (didChange) {
        // Merge parent and own context.
        // Skip this if we're not updating due to sCU.
        // This avoids unnecessarily recomputing memoized values.
        var mergedContext = processChildContext(workInProgress, type, previousContext);
        instance.__reactInternalMemoizedMergedChildContext = mergedContext; // Replace the old (or empty) context with the new one.
        // It is important to unwind the context in the reverse order.

        pop(didPerformWorkStackCursor, workInProgress);
        pop(contextStackCursor, workInProgress); // Now push the new context and mark that it has changed.

        push(contextStackCursor, mergedContext, workInProgress);
        push(didPerformWorkStackCursor, didChange, workInProgress);
      } else {
        pop(didPerformWorkStackCursor, workInProgress);
        push(didPerformWorkStackCursor, didChange, workInProgress);
      }
    }
  }

  function findCurrentUnmaskedContext(fiber) {
    {
      // Currently this is only used with renderSubtreeIntoContainer; not sure if it
      // makes sense elsewhere
      if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
        {
          throw Error( "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue." );
        }
      }

      var node = fiber;

      do {
        switch (node.tag) {
          case HostRoot:
            return node.stateNode.context;

          case ClassComponent:
            {
              var Component = node.type;

              if (isContextProvider(Component)) {
                return node.stateNode.__reactInternalMemoizedMergedChildContext;
              }

              break;
            }
        }

        node = node.return;
      } while (node !== null);

      {
        {
          throw Error( "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue." );
        }
      }
    }
  }

  var LegacyRoot = 0;
  var BlockingRoot = 1;
  var ConcurrentRoot = 2;

  var rendererID = null;
  var injectedHook = null;
  var hasLoggedError = false;
  var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined';
  function injectInternals(internals) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
      // No DevTools
      return false;
    }

    var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (hook.isDisabled) {
      // This isn't a real property on the hook, but it can be set to opt out
      // of DevTools integration and associated warnings and logs.
      // https://github.com/facebook/react/issues/3877
      return true;
    }

    if (!hook.supportsFiber) {
      {
        error('The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://reactjs.org/link/react-devtools');
      } // DevTools exists, even though it doesn't support Fiber.


      return true;
    }

    try {
      rendererID = hook.inject(internals); // We have successfully injected, so now it is safe to set up hooks.

      injectedHook = hook;
    } catch (err) {
      // Catch all errors because it is unsafe to throw during initialization.
      {
        error('React instrumentation encountered an error: %s.', err);
      }
    } // DevTools exists


    return true;
  }
  function onScheduleRoot(root, children) {
    {
      if (injectedHook && typeof injectedHook.onScheduleFiberRoot === 'function') {
        try {
          injectedHook.onScheduleFiberRoot(rendererID, root, children);
        } catch (err) {
          if ( !hasLoggedError) {
            hasLoggedError = true;

            error('React instrumentation encountered an error: %s', err);
          }
        }
      }
    }
  }
  function onCommitRoot(root, priorityLevel) {
    if (injectedHook && typeof injectedHook.onCommitFiberRoot === 'function') {
      try {
        var didError = (root.current.flags & DidCapture) === DidCapture;

        if (enableProfilerTimer) {
          injectedHook.onCommitFiberRoot(rendererID, root, priorityLevel, didError);
        }
      } catch (err) {
        {
          if (!hasLoggedError) {
            hasLoggedError = true;

            error('React instrumentation encountered an error: %s', err);
          }
        }
      }
    }
  }
  function onCommitUnmount(fiber) {
    if (injectedHook && typeof injectedHook.onCommitFiberUnmount === 'function') {
      try {
        injectedHook.onCommitFiberUnmount(rendererID, fiber);
      } catch (err) {
        {
          if (!hasLoggedError) {
            hasLoggedError = true;

            error('React instrumentation encountered an error: %s', err);
          }
        }
      }
    }
  }

  var Scheduler_now = Scheduler.unstable_now;

  {
    // Provide explicit error message when production+profiling bundle of e.g.
    // react-dom is used with production (non-profiling) bundle of
    // scheduler/tracing
    if (!(tracing$1.__interactionsRef != null && tracing$1.__interactionsRef.current != null)) {
      {
        throw Error( "It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling" );
      }
    }
  }
  // ascending numbers so we can compare them like numbers. They start at 90 to
  // avoid clashing with Scheduler's priorities.

  var ImmediatePriority = 99;
  var UserBlockingPriority = 98;
  var NormalPriority = 97;
  var LowPriority = 96;
  var IdlePriority = 95; // NoPriority is the absence of priority. Also React-only.

  var NoPriority = 90;
  Scheduler_now(); // If the initial timestamp is reasonably small, use Scheduler's `now` directly.

  var SyncLanePriority = 15;
  var SyncBatchedLanePriority = 14;
  var InputDiscreteHydrationLanePriority = 13;
  var InputDiscreteLanePriority = 12;
  var InputContinuousHydrationLanePriority = 11;
  var InputContinuousLanePriority = 10;
  var DefaultHydrationLanePriority = 9;
  var DefaultLanePriority = 8;
  var TransitionHydrationPriority = 7;
  var TransitionPriority = 6;
  var RetryLanePriority = 5;
  var SelectiveHydrationLanePriority = 4;
  var IdleHydrationLanePriority = 3;
  var IdleLanePriority = 2;
  var OffscreenLanePriority = 1;
  var NoLanePriority = 0;
  var TotalLanes = 31;
  var NoLanes =
  /*                        */
  0;
  var NoLane =
  /*                          */
  0;
  var SyncLane =
  /*                        */
  1;
  var SyncBatchedLane =
  /*                 */
  2;
  var InputDiscreteHydrationLane =
  /*      */
  4;
  var InputDiscreteLanes =
  /*                    */
  24;
  var InputContinuousHydrationLane =
  /*           */
  32;
  var InputContinuousLanes =
  /*                  */
  192;
  var DefaultHydrationLane =
  /*            */
  256;
  var DefaultLanes =
  /*                   */
  3584;
  var TransitionHydrationLane =
  /*                */
  4096;
  var TransitionLanes =
  /*                       */
  4186112;
  var RetryLanes =
  /*                            */
  62914560;
  var SomeRetryLane =
  /*                  */
  33554432;
  var SelectiveHydrationLane =
  /*          */
  67108864;
  var NonIdleLanes =
  /*                                 */
  134217727;
  var IdleHydrationLane =
  /*               */
  134217728;
  var IdleLanes =
  /*                             */
  805306368;
  var OffscreenLane =
  /*                   */
  1073741824;
  var NoTimestamp = -1;
  var currentUpdateLanePriority = NoLanePriority;
  function getCurrentUpdateLanePriority() {
    return currentUpdateLanePriority;
  }
  function setCurrentUpdateLanePriority(newLanePriority) {
    currentUpdateLanePriority = newLanePriority;
  } // "Registers" used to "return" multiple values
  // Used by getHighestPriorityLanes and getNextLanes:

  var return_highestLanePriority = DefaultLanePriority;

  function getHighestPriorityLanes(lanes) {
    if ((SyncLane & lanes) !== NoLanes) {
      return_highestLanePriority = SyncLanePriority;
      return SyncLane;
    }

    if ((SyncBatchedLane & lanes) !== NoLanes) {
      return_highestLanePriority = SyncBatchedLanePriority;
      return SyncBatchedLane;
    }

    if ((InputDiscreteHydrationLane & lanes) !== NoLanes) {
      return_highestLanePriority = InputDiscreteHydrationLanePriority;
      return InputDiscreteHydrationLane;
    }

    var inputDiscreteLanes = InputDiscreteLanes & lanes;

    if (inputDiscreteLanes !== NoLanes) {
      return_highestLanePriority = InputDiscreteLanePriority;
      return inputDiscreteLanes;
    }

    if ((lanes & InputContinuousHydrationLane) !== NoLanes) {
      return_highestLanePriority = InputContinuousHydrationLanePriority;
      return InputContinuousHydrationLane;
    }

    var inputContinuousLanes = InputContinuousLanes & lanes;

    if (inputContinuousLanes !== NoLanes) {
      return_highestLanePriority = InputContinuousLanePriority;
      return inputContinuousLanes;
    }

    if ((lanes & DefaultHydrationLane) !== NoLanes) {
      return_highestLanePriority = DefaultHydrationLanePriority;
      return DefaultHydrationLane;
    }

    var defaultLanes = DefaultLanes & lanes;

    if (defaultLanes !== NoLanes) {
      return_highestLanePriority = DefaultLanePriority;
      return defaultLanes;
    }

    if ((lanes & TransitionHydrationLane) !== NoLanes) {
      return_highestLanePriority = TransitionHydrationPriority;
      return TransitionHydrationLane;
    }

    var transitionLanes = TransitionLanes & lanes;

    if (transitionLanes !== NoLanes) {
      return_highestLanePriority = TransitionPriority;
      return transitionLanes;
    }

    var retryLanes = RetryLanes & lanes;

    if (retryLanes !== NoLanes) {
      return_highestLanePriority = RetryLanePriority;
      return retryLanes;
    }

    if (lanes & SelectiveHydrationLane) {
      return_highestLanePriority = SelectiveHydrationLanePriority;
      return SelectiveHydrationLane;
    }

    if ((lanes & IdleHydrationLane) !== NoLanes) {
      return_highestLanePriority = IdleHydrationLanePriority;
      return IdleHydrationLane;
    }

    var idleLanes = IdleLanes & lanes;

    if (idleLanes !== NoLanes) {
      return_highestLanePriority = IdleLanePriority;
      return idleLanes;
    }

    if ((OffscreenLane & lanes) !== NoLanes) {
      return_highestLanePriority = OffscreenLanePriority;
      return OffscreenLane;
    }

    {
      error('Should have found matching lanes. This is a bug in React.');
    } // This shouldn't be reachable, but as a fallback, return the entire bitmask.


    return_highestLanePriority = DefaultLanePriority;
    return lanes;
  }

  function schedulerPriorityToLanePriority(schedulerPriorityLevel) {
    switch (schedulerPriorityLevel) {
      case ImmediatePriority:
        return SyncLanePriority;

      case UserBlockingPriority:
        return InputContinuousLanePriority;

      case NormalPriority:
      case LowPriority:
        // TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
        return DefaultLanePriority;

      case IdlePriority:
        return IdleLanePriority;

      default:
        return NoLanePriority;
    }
  }
  function lanePriorityToSchedulerPriority(lanePriority) {
    switch (lanePriority) {
      case SyncLanePriority:
      case SyncBatchedLanePriority:
        return ImmediatePriority;

      case InputDiscreteHydrationLanePriority:
      case InputDiscreteLanePriority:
      case InputContinuousHydrationLanePriority:
      case InputContinuousLanePriority:
        return UserBlockingPriority;

      case DefaultHydrationLanePriority:
      case DefaultLanePriority:
      case TransitionHydrationPriority:
      case TransitionPriority:
      case SelectiveHydrationLanePriority:
      case RetryLanePriority:
        return NormalPriority;

      case IdleHydrationLanePriority:
      case IdleLanePriority:
      case OffscreenLanePriority:
        return IdlePriority;

      case NoLanePriority:
        return NoPriority;

      default:
        {
          {
            throw Error( "Invalid update priority: " + lanePriority + ". This is a bug in React." );
          }
        }

    }
  }
  function getNextLanes(root, wipLanes) {
    // Early bailout if there's no pending work left.
    var pendingLanes = root.pendingLanes;

    if (pendingLanes === NoLanes) {
      return_highestLanePriority = NoLanePriority;
      return NoLanes;
    }

    var nextLanes = NoLanes;
    var nextLanePriority = NoLanePriority;
    var expiredLanes = root.expiredLanes;
    var suspendedLanes = root.suspendedLanes;
    var pingedLanes = root.pingedLanes; // Check if any work has expired.

    if (expiredLanes !== NoLanes) {
      nextLanes = expiredLanes;
      nextLanePriority = return_highestLanePriority = SyncLanePriority;
    } else {
      // Do not work on any idle work until all the non-idle work has finished,
      // even if the work is suspended.
      var nonIdlePendingLanes = pendingLanes & NonIdleLanes;

      if (nonIdlePendingLanes !== NoLanes) {
        var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;

        if (nonIdleUnblockedLanes !== NoLanes) {
          nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
          nextLanePriority = return_highestLanePriority;
        } else {
          var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;

          if (nonIdlePingedLanes !== NoLanes) {
            nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
            nextLanePriority = return_highestLanePriority;
          }
        }
      } else {
        // The only remaining work is Idle.
        var unblockedLanes = pendingLanes & ~suspendedLanes;

        if (unblockedLanes !== NoLanes) {
          nextLanes = getHighestPriorityLanes(unblockedLanes);
          nextLanePriority = return_highestLanePriority;
        } else {
          if (pingedLanes !== NoLanes) {
            nextLanes = getHighestPriorityLanes(pingedLanes);
            nextLanePriority = return_highestLanePriority;
          }
        }
      }
    }

    if (nextLanes === NoLanes) {
      // This should only be reachable if we're suspended
      // TODO: Consider warning in this path if a fallback timer is not scheduled.
      return NoLanes;
    } // If there are higher priority lanes, we'll include them even if they
    // are suspended.


    nextLanes = pendingLanes & getEqualOrHigherPriorityLanes(nextLanes); // If we're already in the middle of a render, switching lanes will interrupt
    // it and we'll lose our progress. We should only do this if the new lanes are
    // higher priority.

    if (wipLanes !== NoLanes && wipLanes !== nextLanes && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (wipLanes & suspendedLanes) === NoLanes) {
      getHighestPriorityLanes(wipLanes);
      var wipLanePriority = return_highestLanePriority;

      if (nextLanePriority <= wipLanePriority) {
        return wipLanes;
      } else {
        return_highestLanePriority = nextLanePriority;
      }
    } // Check for entangled lanes and add them to the batch.
    //
    // A lane is said to be entangled with another when it's not allowed to render
    // in a batch that does not also include the other lane. Typically we do this
    // when multiple updates have the same source, and we only want to respond to
    // the most recent event from that source.
    //
    // Note that we apply entanglements *after* checking for partial work above.
    // This means that if a lane is entangled during an interleaved event while
    // it's already rendering, we won't interrupt it. This is intentional, since
    // entanglement is usually "best effort": we'll try our best to render the
    // lanes in the same batch, but it's not worth throwing out partially
    // completed work in order to do it.
    //
    // For those exceptions where entanglement is semantically important, like
    // useMutableSource, we should ensure that there is no partial work at the
    // time we apply the entanglement.


    var entangledLanes = root.entangledLanes;

    if (entangledLanes !== NoLanes) {
      var entanglements = root.entanglements;
      var lanes = nextLanes & entangledLanes;

      while (lanes > 0) {
        var index = pickArbitraryLaneIndex(lanes);
        var lane = 1 << index;
        nextLanes |= entanglements[index];
        lanes &= ~lane;
      }
    }

    return nextLanes;
  }
  function getMostRecentEventTime(root, lanes) {
    var eventTimes = root.eventTimes;
    var mostRecentEventTime = NoTimestamp;

    while (lanes > 0) {
      var index = pickArbitraryLaneIndex(lanes);
      var lane = 1 << index;
      var eventTime = eventTimes[index];

      if (eventTime > mostRecentEventTime) {
        mostRecentEventTime = eventTime;
      }

      lanes &= ~lane;
    }

    return mostRecentEventTime;
  }

  function computeExpirationTime(lane, currentTime) {
    // TODO: Expiration heuristic is constant per lane, so could use a map.
    getHighestPriorityLanes(lane);
    var priority = return_highestLanePriority;

    if (priority >= InputContinuousLanePriority) {
      // User interactions should expire slightly more quickly.
      //
      // NOTE: This is set to the corresponding constant as in Scheduler.js. When
      // we made it larger, a product metric in www regressed, suggesting there's
      // a user interaction that's being starved by a series of synchronous
      // updates. If that theory is correct, the proper solution is to fix the
      // starvation. However, this scenario supports the idea that expiration
      // times are an important safeguard when starvation does happen.
      //
      // Also note that, in the case of user input specifically, this will soon no
      // longer be an issue because we plan to make user input synchronous by
      // default (until you enter `startTransition`, of course.)
      //
      // If weren't planning to make these updates synchronous soon anyway, I
      // would probably make this number a configurable parameter.
      return currentTime + 250;
    } else if (priority >= TransitionPriority) {
      return currentTime + 5000;
    } else {
      // Anything idle priority or lower should never expire.
      return NoTimestamp;
    }
  }

  function markStarvedLanesAsExpired(root, currentTime) {
    // TODO: This gets called every time we yield. We can optimize by storing
    // the earliest expiration time on the root. Then use that to quickly bail out
    // of this function.
    var pendingLanes = root.pendingLanes;
    var suspendedLanes = root.suspendedLanes;
    var pingedLanes = root.pingedLanes;
    var expirationTimes = root.expirationTimes; // Iterate through the pending lanes and check if we've reached their
    // expiration time. If so, we'll assume the update is being starved and mark
    // it as expired to force it to finish.

    var lanes = pendingLanes;

    while (lanes > 0) {
      var index = pickArbitraryLaneIndex(lanes);
      var lane = 1 << index;
      var expirationTime = expirationTimes[index];

      if (expirationTime === NoTimestamp) {
        // Found a pending lane with no expiration time. If it's not suspended, or
        // if it's pinged, assume it's CPU-bound. Compute a new expiration time
        // using the current time.
        if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) {
          // Assumes timestamps are monotonically increasing.
          expirationTimes[index] = computeExpirationTime(lane, currentTime);
        }
      } else if (expirationTime <= currentTime) {
        // This lane expired
        root.expiredLanes |= lane;
      }

      lanes &= ~lane;
    }
  } // This returns the highest priority pending lanes regardless of whether they
  // are suspended.

  function getHighestPriorityPendingLanes(root) {
    return getHighestPriorityLanes(root.pendingLanes);
  }
  function getLanesToRetrySynchronouslyOnError(root) {
    var everythingButOffscreen = root.pendingLanes & ~OffscreenLane;

    if (everythingButOffscreen !== NoLanes) {
      return everythingButOffscreen;
    }

    if (everythingButOffscreen & OffscreenLane) {
      return OffscreenLane;
    }

    return NoLanes;
  }
  function returnNextLanesPriority() {
    return return_highestLanePriority;
  }
  function includesNonIdleWork(lanes) {
    return (lanes & NonIdleLanes) !== NoLanes;
  }
  function includesOnlyRetries(lanes) {
    return (lanes & RetryLanes) === lanes;
  }
  function includesOnlyTransitions(lanes) {
    return (lanes & TransitionLanes) === lanes;
  } // To ensure consistency across multiple updates in the same event, this should
  // be a pure function, so that it always returns the same lane for given inputs.

  function findUpdateLane(lanePriority, wipLanes) {
    switch (lanePriority) {
      case NoLanePriority:
        break;

      case SyncLanePriority:
        return SyncLane;

      case SyncBatchedLanePriority:
        return SyncBatchedLane;

      case InputDiscreteLanePriority:
        {
          var _lane = pickArbitraryLane(InputDiscreteLanes & ~wipLanes);

          if (_lane === NoLane) {
            // Shift to the next priority level
            return findUpdateLane(InputContinuousLanePriority, wipLanes);
          }

          return _lane;
        }

      case InputContinuousLanePriority:
        {
          var _lane2 = pickArbitraryLane(InputContinuousLanes & ~wipLanes);

          if (_lane2 === NoLane) {
            // Shift to the next priority level
            return findUpdateLane(DefaultLanePriority, wipLanes);
          }

          return _lane2;
        }

      case DefaultLanePriority:
        {
          var _lane3 = pickArbitraryLane(DefaultLanes & ~wipLanes);

          if (_lane3 === NoLane) {
            // If all the default lanes are already being worked on, look for a
            // lane in the transition range.
            _lane3 = pickArbitraryLane(TransitionLanes & ~wipLanes);

            if (_lane3 === NoLane) {
              // All the transition lanes are taken, too. This should be very
              // rare, but as a last resort, pick a default lane. This will have
              // the effect of interrupting the current work-in-progress render.
              _lane3 = pickArbitraryLane(DefaultLanes);
            }
          }

          return _lane3;
        }

      case TransitionPriority: // Should be handled by findTransitionLane instead

      case RetryLanePriority:
        // Should be handled by findRetryLane instead
        break;

      case IdleLanePriority:
        var lane = pickArbitraryLane(IdleLanes & ~wipLanes);

        if (lane === NoLane) {
          lane = pickArbitraryLane(IdleLanes);
        }

        return lane;
    }

    {
      {
        throw Error( "Invalid update priority: " + lanePriority + ". This is a bug in React." );
      }
    }
  } // To ensure consistency across multiple updates in the same event, this should
  // be pure function, so that it always returns the same lane for given inputs.

  function findTransitionLane(wipLanes, pendingLanes) {
    // First look for lanes that are completely unclaimed, i.e. have no
    // pending work.
    var lane = pickArbitraryLane(TransitionLanes & ~pendingLanes);

    if (lane === NoLane) {
      // If all lanes have pending work, look for a lane that isn't currently
      // being worked on.
      lane = pickArbitraryLane(TransitionLanes & ~wipLanes);

      if (lane === NoLane) {
        // If everything is being worked on, pick any lane. This has the
        // effect of interrupting the current work-in-progress.
        lane = pickArbitraryLane(TransitionLanes);
      }
    }

    return lane;
  } // To ensure consistency across multiple updates in the same event, this should
  // be pure function, so that it always returns the same lane for given inputs.

  function findRetryLane(wipLanes) {
    // This is a fork of `findUpdateLane` designed specifically for Suspense
    // "retries" — a special update that attempts to flip a Suspense boundary
    // from its placeholder state to its primary/resolved state.
    var lane = pickArbitraryLane(RetryLanes & ~wipLanes);

    if (lane === NoLane) {
      lane = pickArbitraryLane(RetryLanes);
    }

    return lane;
  }

  function getHighestPriorityLane(lanes) {
    return lanes & -lanes;
  }

  function getLowestPriorityLane(lanes) {
    // This finds the most significant non-zero bit.
    var index = 31 - clz32(lanes);
    return index < 0 ? NoLanes : 1 << index;
  }

  function getEqualOrHigherPriorityLanes(lanes) {
    return (getLowestPriorityLane(lanes) << 1) - 1;
  }

  function pickArbitraryLane(lanes) {
    // This wrapper function gets inlined. Only exists so to communicate that it
    // doesn't matter which bit is selected; you can pick any bit without
    // affecting the algorithms where its used. Here I'm using
    // getHighestPriorityLane because it requires the fewest operations.
    return getHighestPriorityLane(lanes);
  }

  function pickArbitraryLaneIndex(lanes) {
    return 31 - clz32(lanes);
  }

  function laneToIndex(lane) {
    return pickArbitraryLaneIndex(lane);
  }

  function includesSomeLane(a, b) {
    return (a & b) !== NoLanes;
  }
  function isSubsetOfLanes(set, subset) {
    return (set & subset) === subset;
  }
  function mergeLanes(a, b) {
    return a | b;
  }
  function removeLanes(set, subset) {
    return set & ~subset;
  } // Seems redundant, but it changes the type from a single lane (used for
  // updates) to a group of lanes (used for flushing work).

  function laneToLanes(lane) {
    return lane;
  }
  function higherPriorityLane(a, b) {
    // This works because the bit ranges decrease in priority as you go left.
    return a !== NoLane && a < b ? a : b;
  }
  function createLaneMap(initial) {
    // Intentionally pushing one by one.
    // https://v8.dev/blog/elements-kinds#avoid-creating-holes
    var laneMap = [];

    for (var i = 0; i < TotalLanes; i++) {
      laneMap.push(initial);
    }

    return laneMap;
  }
  function markRootUpdated(root, updateLane, eventTime) {
    root.pendingLanes |= updateLane; // TODO: Theoretically, any update to any lane can unblock any other lane. But
    // it's not practical to try every single possible combination. We need a
    // heuristic to decide which lanes to attempt to render, and in which batches.
    // For now, we use the same heuristic as in the old ExpirationTimes model:
    // retry any lane at equal or lower priority, but don't try updates at higher
    // priority without also including the lower priority updates. This works well
    // when considering updates across different priority levels, but isn't
    // sufficient for updates within the same priority, since we want to treat
    // those updates as parallel.
    // Unsuspend any update at equal or lower priority.

    var higherPriorityLanes = updateLane - 1; // Turns 0b1000 into 0b0111

    root.suspendedLanes &= higherPriorityLanes;
    root.pingedLanes &= higherPriorityLanes;
    var eventTimes = root.eventTimes;
    var index = laneToIndex(updateLane); // We can always overwrite an existing timestamp because we prefer the most
    // recent event, and we assume time is monotonically increasing.

    eventTimes[index] = eventTime;
  }
  function markRootSuspended(root, suspendedLanes) {
    root.suspendedLanes |= suspendedLanes;
    root.pingedLanes &= ~suspendedLanes; // The suspended lanes are no longer CPU-bound. Clear their expiration times.

    var expirationTimes = root.expirationTimes;
    var lanes = suspendedLanes;

    while (lanes > 0) {
      var index = pickArbitraryLaneIndex(lanes);
      var lane = 1 << index;
      expirationTimes[index] = NoTimestamp;
      lanes &= ~lane;
    }
  }
  function markRootPinged(root, pingedLanes, eventTime) {
    root.pingedLanes |= root.suspendedLanes & pingedLanes;
  }
  function markRootExpired(root, expiredLanes) {
    root.expiredLanes |= expiredLanes & root.pendingLanes;
  }
  function markDiscreteUpdatesExpired(root) {
    root.expiredLanes |= InputDiscreteLanes & root.pendingLanes;
  }
  function hasDiscreteLanes(lanes) {
    return (lanes & InputDiscreteLanes) !== NoLanes;
  }
  function markRootMutableRead(root, updateLane) {
    root.mutableReadLanes |= updateLane & root.pendingLanes;
  }
  function markRootFinished(root, remainingLanes) {
    var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
    root.pendingLanes = remainingLanes; // Let's try everything again

    root.suspendedLanes = 0;
    root.pingedLanes = 0;
    root.expiredLanes &= remainingLanes;
    root.mutableReadLanes &= remainingLanes;
    root.entangledLanes &= remainingLanes;
    var entanglements = root.entanglements;
    var eventTimes = root.eventTimes;
    var expirationTimes = root.expirationTimes; // Clear the lanes that no longer have pending work

    var lanes = noLongerPendingLanes;

    while (lanes > 0) {
      var index = pickArbitraryLaneIndex(lanes);
      var lane = 1 << index;
      entanglements[index] = NoLanes;
      eventTimes[index] = NoTimestamp;
      expirationTimes[index] = NoTimestamp;
      lanes &= ~lane;
    }
  }
  function markRootEntangled(root, entangledLanes) {
    root.entangledLanes |= entangledLanes;
    var entanglements = root.entanglements;
    var lanes = entangledLanes;

    while (lanes > 0) {
      var index = pickArbitraryLaneIndex(lanes);
      var lane = 1 << index;
      entanglements[index] |= entangledLanes;
      lanes &= ~lane;
    }
  }
  var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback; // Count leading zeros. Only used on lanes, so assume input is an integer.
  // Based on:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

  var log = Math.log;
  var LN2 = Math.LN2;

  function clz32Fallback(lanes) {
    if (lanes === 0) {
      return 32;
    }

    return 31 - (log(lanes) / LN2 | 0) | 0;
  }

  var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority,
      Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback,
      Scheduler_cancelCallback = Scheduler.unstable_cancelCallback,
      Scheduler_shouldYield = Scheduler.unstable_shouldYield,
      Scheduler_requestPaint = Scheduler.unstable_requestPaint,
      Scheduler_now$1 = Scheduler.unstable_now,
      Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
      Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority,
      Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
      Scheduler_NormalPriority = Scheduler.unstable_NormalPriority,
      Scheduler_LowPriority = Scheduler.unstable_LowPriority,
      Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;

  {
    // Provide explicit error message when production+profiling bundle of e.g.
    // react-dom is used with production (non-profiling) bundle of
    // scheduler/tracing
    if (!(tracing$1.__interactionsRef != null && tracing$1.__interactionsRef.current != null)) {
      {
        throw Error( "It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling" );
      }
    }
  }

  var fakeCallbackNode = {}; // Except for NoPriority, these correspond to Scheduler priorities. We use
  // ascending numbers so we can compare them like numbers. They start at 90 to
  // avoid clashing with Scheduler's priorities.

  var ImmediatePriority$1 = 99;
  var UserBlockingPriority$1 = 98;
  var NormalPriority$1 = 97;
  var LowPriority$1 = 96;
  var IdlePriority$1 = 95; // NoPriority is the absence of priority. Also React-only.

  var NoPriority$1 = 90;
  var shouldYield = Scheduler_shouldYield;
  var requestPaint = // Fall back gracefully if we're running an older version of Scheduler.
  Scheduler_requestPaint !== undefined ? Scheduler_requestPaint : function () {};
  var syncQueue = null;
  var immediateQueueCallbackNode = null;
  var isFlushingSyncQueue = false;
  var initialTimeMs$1 = Scheduler_now$1(); // If the initial timestamp is reasonably small, use Scheduler's `now` directly.
  // This will be the case for modern browsers that support `performance.now`. In
  // older browsers, Scheduler falls back to `Date.now`, which returns a Unix
  // timestamp. In that case, subtract the module initialization time to simulate
  // the behavior of performance.now and keep our times small enough to fit
  // within 32 bits.
  // TODO: Consider lifting this into Scheduler.

  var now$1 = initialTimeMs$1 < 10000 ? Scheduler_now$1 : function () {
    return Scheduler_now$1() - initialTimeMs$1;
  };
  function getCurrentPriorityLevel() {
    switch (Scheduler_getCurrentPriorityLevel()) {
      case Scheduler_ImmediatePriority:
        return ImmediatePriority$1;

      case Scheduler_UserBlockingPriority:
        return UserBlockingPriority$1;

      case Scheduler_NormalPriority:
        return NormalPriority$1;

      case Scheduler_LowPriority:
        return LowPriority$1;

      case Scheduler_IdlePriority:
        return IdlePriority$1;

      default:
        {
          {
            throw Error( "Unknown priority level." );
          }
        }

    }
  }

  function reactPriorityToSchedulerPriority(reactPriorityLevel) {
    switch (reactPriorityLevel) {
      case ImmediatePriority$1:
        return Scheduler_ImmediatePriority;

      case UserBlockingPriority$1:
        return Scheduler_UserBlockingPriority;

      case NormalPriority$1:
        return Scheduler_NormalPriority;

      case LowPriority$1:
        return Scheduler_LowPriority;

      case IdlePriority$1:
        return Scheduler_IdlePriority;

      default:
        {
          {
            throw Error( "Unknown priority level." );
          }
        }

    }
  }

  function runWithPriority(reactPriorityLevel, fn) {
    var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
    return Scheduler_runWithPriority(priorityLevel, fn);
  }
  function scheduleCallback(reactPriorityLevel, callback, options) {
    var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
    return Scheduler_scheduleCallback(priorityLevel, callback, options);
  }
  function scheduleSyncCallback(callback) {
    // Push this callback into an internal queue. We'll flush these either in
    // the next tick, or earlier if something calls `flushSyncCallbackQueue`.
    if (syncQueue === null) {
      syncQueue = [callback]; // Flush the queue in the next tick, at the earliest.

      immediateQueueCallbackNode = Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueueImpl);
    } else {
      // Push onto existing queue. Don't need to schedule a callback because
      // we already scheduled one when we created the queue.
      syncQueue.push(callback);
    }

    return fakeCallbackNode;
  }
  function cancelCallback(callbackNode) {
    if (callbackNode !== fakeCallbackNode) {
      Scheduler_cancelCallback(callbackNode);
    }
  }
  function flushSyncCallbackQueue() {
    if (immediateQueueCallbackNode !== null) {
      var node = immediateQueueCallbackNode;
      immediateQueueCallbackNode = null;
      Scheduler_cancelCallback(node);
    }

    flushSyncCallbackQueueImpl();
  }

  function flushSyncCallbackQueueImpl() {
    if (!isFlushingSyncQueue && syncQueue !== null) {
      // Prevent re-entrancy.
      isFlushingSyncQueue = true;
      var i = 0;

      {
        try {
          var _isSync2 = true;
          var _queue = syncQueue;
          runWithPriority(ImmediatePriority$1, function () {
            for (; i < _queue.length; i++) {
              var callback = _queue[i];

              do {
                callback = callback(_isSync2);
              } while (callback !== null);
            }
          });
          syncQueue = null;
        } catch (error) {
          // If something throws, leave the remaining callbacks on the queue.
          if (syncQueue !== null) {
            syncQueue = syncQueue.slice(i + 1);
          } // Resume flushing in the next tick


          Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
          throw error;
        } finally {
          isFlushingSyncQueue = false;
        }
      }
    }
  }

  var NoMode = 0;
  var StrictMode = 1; // TODO: Remove BlockingMode and ConcurrentMode by reading from the root
  // tag instead

  var BlockingMode = 2;
  var ConcurrentMode = 4;
  var ProfileMode = 8;
  var DebugTracingMode = 16;

  var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
  var NoTransition = 0;
  function requestCurrentTransition() {
    return ReactCurrentBatchConfig.transition;
  }

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
    ;
  }

  var objectIs = typeof Object.is === 'function' ? Object.is : is;

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */

  function shallowEqual(objA, objB) {
    if (objectIs(objA, objB)) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    } // Test for A's keys different from B.


    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  function describeFiber(fiber) {
    fiber._debugOwner ? fiber._debugOwner.type : null ;
    fiber._debugSource ;

    switch (fiber.tag) {
      case HostComponent:
        return describeBuiltInComponentFrame(fiber.type);

      case LazyComponent:
        return describeBuiltInComponentFrame('Lazy');

      case SuspenseComponent:
        return describeBuiltInComponentFrame('Suspense');

      case SuspenseListComponent:
        return describeBuiltInComponentFrame('SuspenseList');

      case FunctionComponent:
      case IndeterminateComponent:
      case SimpleMemoComponent:
        return describeFunctionComponentFrame(fiber.type);

      case ForwardRef:
        return describeFunctionComponentFrame(fiber.type.render);

      case Block:
        return describeFunctionComponentFrame(fiber.type._render);

      case ClassComponent:
        return describeClassComponentFrame(fiber.type);

      default:
        return '';
    }
  }

  function getStackByFiberInDevAndProd(workInProgress) {
    try {
      var info = '';
      var node = workInProgress;

      do {
        info += describeFiber(node);
        node = node.return;
      } while (node);

      return info;
    } catch (x) {
      return '\nError generating stack: ' + x.message + '\n' + x.stack;
    }
  }

  var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
  var current = null;
  var isRendering = false;
  function getCurrentFiberOwnerNameInDevOrNull() {
    {
      if (current === null) {
        return null;
      }

      var owner = current._debugOwner;

      if (owner !== null && typeof owner !== 'undefined') {
        return getComponentName(owner.type);
      }
    }

    return null;
  }

  function getCurrentFiberStackInDev() {
    {
      if (current === null) {
        return '';
      } // Safe because if current fiber exists, we are reconciling,
      // and it is guaranteed to be the work-in-progress version.


      return getStackByFiberInDevAndProd(current);
    }
  }

  function resetCurrentFiber() {
    {
      ReactDebugCurrentFrame$1.getCurrentStack = null;
      current = null;
      isRendering = false;
    }
  }
  function setCurrentFiber(fiber) {
    {
      ReactDebugCurrentFrame$1.getCurrentStack = getCurrentFiberStackInDev;
      current = fiber;
      isRendering = false;
    }
  }
  function setIsRendering(rendering) {
    {
      isRendering = rendering;
    }
  }
  function getIsRendering() {
    {
      return isRendering;
    }
  }

  var ReactStrictModeWarnings = {
    recordUnsafeLifecycleWarnings: function (fiber, instance) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (fiber, instance) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {}
  };

  {
    var findStrictRoot = function (fiber) {
      var maybeStrictRoot = null;
      var node = fiber;

      while (node !== null) {
        if (node.mode & StrictMode) {
          maybeStrictRoot = node;
        }

        node = node.return;
      }

      return maybeStrictRoot;
    };

    var setToSortedString = function (set) {
      var array = [];
      set.forEach(function (value) {
        array.push(value);
      });
      return array.sort().join(', ');
    };

    var pendingComponentWillMountWarnings = [];
    var pendingUNSAFE_ComponentWillMountWarnings = [];
    var pendingComponentWillReceivePropsWarnings = [];
    var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
    var pendingComponentWillUpdateWarnings = [];
    var pendingUNSAFE_ComponentWillUpdateWarnings = []; // Tracks components we have already warned about.

    var didWarnAboutUnsafeLifecycles = new Set();

    ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
      // Dedup strategy: Warn once per component.
      if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
        return;
      }

      if (typeof instance.componentWillMount === 'function' && // Don't warn about react-lifecycles-compat polyfilled components.
      instance.componentWillMount.__suppressDeprecationWarning !== true) {
        pendingComponentWillMountWarnings.push(fiber);
      }

      if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === 'function') {
        pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
      }

      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        pendingComponentWillReceivePropsWarnings.push(fiber);
      }

      if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
      }

      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        pendingComponentWillUpdateWarnings.push(fiber);
      }

      if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === 'function') {
        pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
      }
    };

    ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
      // We do an initial pass to gather component names
      var componentWillMountUniqueNames = new Set();

      if (pendingComponentWillMountWarnings.length > 0) {
        pendingComponentWillMountWarnings.forEach(function (fiber) {
          componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        });
        pendingComponentWillMountWarnings = [];
      }

      var UNSAFE_componentWillMountUniqueNames = new Set();

      if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
        pendingUNSAFE_ComponentWillMountWarnings.forEach(function (fiber) {
          UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        });
        pendingUNSAFE_ComponentWillMountWarnings = [];
      }

      var componentWillReceivePropsUniqueNames = new Set();

      if (pendingComponentWillReceivePropsWarnings.length > 0) {
        pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
          componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        });
        pendingComponentWillReceivePropsWarnings = [];
      }

      var UNSAFE_componentWillReceivePropsUniqueNames = new Set();

      if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
        pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function (fiber) {
          UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        });
        pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
      }

      var componentWillUpdateUniqueNames = new Set();

      if (pendingComponentWillUpdateWarnings.length > 0) {
        pendingComponentWillUpdateWarnings.forEach(function (fiber) {
          componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        });
        pendingComponentWillUpdateWarnings = [];
      }

      var UNSAFE_componentWillUpdateUniqueNames = new Set();

      if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
        pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function (fiber) {
          UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
          didWarnAboutUnsafeLifecycles.add(fiber.type);
        });
        pendingUNSAFE_ComponentWillUpdateWarnings = [];
      } // Finally, we flush all the warnings
      // UNSAFE_ ones before the deprecated ones, since they'll be 'louder'


      if (UNSAFE_componentWillMountUniqueNames.size > 0) {
        var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);

        error('Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' + '\nPlease update the following components: %s', sortedNames);
      }

      if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
        var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);

        error('Using UNSAFE_componentWillReceiveProps in strict mode is not recommended ' + 'and may indicate bugs in your code. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + "* If you're updating state whenever props change, " + 'refactor your code to use memoization techniques or move it to ' + 'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n' + '\nPlease update the following components: %s', _sortedNames);
      }

      if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
        var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);

        error('Using UNSAFE_componentWillUpdate in strict mode is not recommended ' + 'and may indicate bugs in your code. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + '\nPlease update the following components: %s', _sortedNames2);
      }

      if (componentWillMountUniqueNames.size > 0) {
        var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);

        warn('componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' + '* Rename componentWillMount to UNSAFE_componentWillMount to suppress ' + 'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames3);
      }

      if (componentWillReceivePropsUniqueNames.size > 0) {
        var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);

        warn('componentWillReceiveProps has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + "* If you're updating state whenever props change, refactor your " + 'code to use memoization techniques or move it to ' + 'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n' + '* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress ' + 'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames4);
      }

      if (componentWillUpdateUniqueNames.size > 0) {
        var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);

        warn('componentWillUpdate has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + '* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress ' + 'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames5);
      }
    };

    var pendingLegacyContextWarning = new Map(); // Tracks components we have already warned about.

    var didWarnAboutLegacyContext = new Set();

    ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
      var strictRoot = findStrictRoot(fiber);

      if (strictRoot === null) {
        error('Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');

        return;
      } // Dedup strategy: Warn once per component.


      if (didWarnAboutLegacyContext.has(fiber.type)) {
        return;
      }

      var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);

      if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === 'function') {
        if (warningsForRoot === undefined) {
          warningsForRoot = [];
          pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
        }

        warningsForRoot.push(fiber);
      }
    };

    ReactStrictModeWarnings.flushLegacyContextWarning = function () {
      pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
        if (fiberArray.length === 0) {
          return;
        }

        var firstFiber = fiberArray[0];
        var uniqueNames = new Set();
        fiberArray.forEach(function (fiber) {
          uniqueNames.add(getComponentName(fiber.type) || 'Component');
          didWarnAboutLegacyContext.add(fiber.type);
        });
        var sortedNames = setToSortedString(uniqueNames);

        try {
          setCurrentFiber(firstFiber);

          error('Legacy context API has been detected within a strict-mode tree.' + '\n\nThe old API will be supported in all 16.x releases, but applications ' + 'using it should migrate to the new version.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context', sortedNames);
        } finally {
          resetCurrentFiber();
        }
      });
    };

    ReactStrictModeWarnings.discardPendingWarnings = function () {
      pendingComponentWillMountWarnings = [];
      pendingUNSAFE_ComponentWillMountWarnings = [];
      pendingComponentWillReceivePropsWarnings = [];
      pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
      pendingComponentWillUpdateWarnings = [];
      pendingUNSAFE_ComponentWillUpdateWarnings = [];
      pendingLegacyContextWarning = new Map();
    };
  }

  function resolveDefaultProps(Component, baseProps) {
    if (Component && Component.defaultProps) {
      // Resolve default props. Taken from ReactElement
      var props = _assign({}, baseProps);

      var defaultProps = Component.defaultProps;

      for (var propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }

      return props;
    }

    return baseProps;
  }

  // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
  // Math.pow(2, 30) - 1
  // 0b111111111111111111111111111111
  var MAX_SIGNED_31_BIT_INT = 1073741823;

  var valueCursor = createCursor(null);
  var rendererSigil;

  {
    // Use this to detect multiple renderers using the same context
    rendererSigil = {};
  }

  var currentlyRenderingFiber = null;
  var lastContextDependency = null;
  var lastContextWithAllBitsObserved = null;
  var isDisallowedContextReadInDEV = false;
  function resetContextDependencies() {
    // This is called right before React yields execution, to ensure `readContext`
    // cannot be called outside the render phase.
    currentlyRenderingFiber = null;
    lastContextDependency = null;
    lastContextWithAllBitsObserved = null;

    {
      isDisallowedContextReadInDEV = false;
    }
  }
  function enterDisallowedContextReadInDEV() {
    {
      isDisallowedContextReadInDEV = true;
    }
  }
  function exitDisallowedContextReadInDEV() {
    {
      isDisallowedContextReadInDEV = false;
    }
  }
  function pushProvider(providerFiber, nextValue) {
    var context = providerFiber.type._context;

    if (isPrimaryRenderer) {
      push(valueCursor, context._currentValue, providerFiber);
      context._currentValue = nextValue;

      {
        if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
          error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
        }

        context._currentRenderer = rendererSigil;
      }
    } else {
      push(valueCursor, context._currentValue2, providerFiber);
      context._currentValue2 = nextValue;

      {
        if (context._currentRenderer2 !== undefined && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
          error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
        }

        context._currentRenderer2 = rendererSigil;
      }
    }
  }
  function popProvider(providerFiber) {
    var currentValue = valueCursor.current;
    pop(valueCursor, providerFiber);
    var context = providerFiber.type._context;

    if (isPrimaryRenderer) {
      context._currentValue = currentValue;
    } else {
      context._currentValue2 = currentValue;
    }
  }
  function calculateChangedBits(context, newValue, oldValue) {
    if (objectIs(oldValue, newValue)) {
      // No change
      return 0;
    } else {
      var changedBits = typeof context._calculateChangedBits === 'function' ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

      {
        if ((changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits) {
          error('calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
        }
      }

      return changedBits | 0;
    }
  }
  function scheduleWorkOnParentPath(parent, renderLanes) {
    // Update the child lanes of all the ancestors, including the alternates.
    var node = parent;

    while (node !== null) {
      var alternate = node.alternate;

      if (!isSubsetOfLanes(node.childLanes, renderLanes)) {
        node.childLanes = mergeLanes(node.childLanes, renderLanes);

        if (alternate !== null) {
          alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes);
        }
      } else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes)) {
        alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes);
      } else {
        // Neither alternate was updated, which means the rest of the
        // ancestor path already has sufficient priority.
        break;
      }

      node = node.return;
    }
  }
  function propagateContextChange(workInProgress, context, changedBits, renderLanes) {
    var fiber = workInProgress.child;

    if (fiber !== null) {
      // Set the return pointer of the child to the work-in-progress fiber.
      fiber.return = workInProgress;
    }

    while (fiber !== null) {
      var nextFiber = void 0; // Visit this fiber.

      var list = fiber.dependencies;

      if (list !== null) {
        nextFiber = fiber.child;
        var dependency = list.firstContext;

        while (dependency !== null) {
          // Check if the context matches.
          if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
            // Match! Schedule an update on this fiber.
            if (fiber.tag === ClassComponent) {
              // Schedule a force update on the work-in-progress.
              var update = createUpdate(NoTimestamp, pickArbitraryLane(renderLanes));
              update.tag = ForceUpdate; // TODO: Because we don't have a work-in-progress, this will add the
              // update to the current fiber, too, which means it will persist even if
              // this render is thrown away. Since it's a race condition, not sure it's
              // worth fixing.

              enqueueUpdate(fiber, update);
            }

            fiber.lanes = mergeLanes(fiber.lanes, renderLanes);
            var alternate = fiber.alternate;

            if (alternate !== null) {
              alternate.lanes = mergeLanes(alternate.lanes, renderLanes);
            }

            scheduleWorkOnParentPath(fiber.return, renderLanes); // Mark the updated lanes on the list, too.

            list.lanes = mergeLanes(list.lanes, renderLanes); // Since we already found a match, we can stop traversing the
            // dependency list.

            break;
          }

          dependency = dependency.next;
        }
      } else if (fiber.tag === ContextProvider) {
        // Don't scan deeper if this is a matching provider
        nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
      } else {
        // Traverse down.
        nextFiber = fiber.child;
      }

      if (nextFiber !== null) {
        // Set the return pointer of the child to the work-in-progress fiber.
        nextFiber.return = fiber;
      } else {
        // No child. Traverse to next sibling.
        nextFiber = fiber;

        while (nextFiber !== null) {
          if (nextFiber === workInProgress) {
            // We're back to the root of this subtree. Exit.
            nextFiber = null;
            break;
          }

          var sibling = nextFiber.sibling;

          if (sibling !== null) {
            // Set the return pointer of the sibling to the work-in-progress fiber.
            sibling.return = nextFiber.return;
            nextFiber = sibling;
            break;
          } // No more siblings. Traverse up.


          nextFiber = nextFiber.return;
        }
      }

      fiber = nextFiber;
    }
  }
  function prepareToReadContext(workInProgress, renderLanes) {
    currentlyRenderingFiber = workInProgress;
    lastContextDependency = null;
    lastContextWithAllBitsObserved = null;
    var dependencies = workInProgress.dependencies;

    if (dependencies !== null) {
      var firstContext = dependencies.firstContext;

      if (firstContext !== null) {
        if (includesSomeLane(dependencies.lanes, renderLanes)) {
          // Context list has a pending update. Mark that this fiber performed work.
          markWorkInProgressReceivedUpdate();
        } // Reset the work-in-progress list


        dependencies.firstContext = null;
      }
    }
  }
  function readContext(context, observedBits) {
    {
      // This warning would fire if you read context inside a Hook like useMemo.
      // Unlike the class check below, it's not enforced in production for perf.
      if (isDisallowedContextReadInDEV) {
        error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
      }
    }

    if (lastContextWithAllBitsObserved === context) ; else if (observedBits === false || observedBits === 0) ; else {
      var resolvedObservedBits; // Avoid deopting on observable arguments or heterogeneous types.

      if (typeof observedBits !== 'number' || observedBits === MAX_SIGNED_31_BIT_INT) {
        // Observe all updates.
        lastContextWithAllBitsObserved = context;
        resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
      } else {
        resolvedObservedBits = observedBits;
      }

      var contextItem = {
        context: context,
        observedBits: resolvedObservedBits,
        next: null
      };

      if (lastContextDependency === null) {
        if (!(currentlyRenderingFiber !== null)) {
          {
            throw Error( "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()." );
          }
        } // This is the first dependency for this component. Create a new list.


        lastContextDependency = contextItem;
        currentlyRenderingFiber.dependencies = {
          lanes: NoLanes,
          firstContext: contextItem,
          responders: null
        };
      } else {
        // Append a new context item.
        lastContextDependency = lastContextDependency.next = contextItem;
      }
    }

    return isPrimaryRenderer ? context._currentValue : context._currentValue2;
  }

  var UpdateState = 0;
  var ReplaceState = 1;
  var ForceUpdate = 2;
  var CaptureUpdate = 3; // Global state that is reset at the beginning of calling `processUpdateQueue`.
  // It should only be read right after calling `processUpdateQueue`, via
  // `checkHasForceUpdateAfterProcessing`.

  var hasForceUpdate = false;
  var didWarnUpdateInsideUpdate;
  var currentlyProcessingQueue;

  {
    didWarnUpdateInsideUpdate = false;
    currentlyProcessingQueue = null;
  }

  function initializeUpdateQueue(fiber) {
    var queue = {
      baseState: fiber.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
    fiber.updateQueue = queue;
  }
  function cloneUpdateQueue(current, workInProgress) {
    // Clone the update queue from current. Unless it's already a clone.
    var queue = workInProgress.updateQueue;
    var currentQueue = current.updateQueue;

    if (queue === currentQueue) {
      var clone = {
        baseState: currentQueue.baseState,
        firstBaseUpdate: currentQueue.firstBaseUpdate,
        lastBaseUpdate: currentQueue.lastBaseUpdate,
        shared: currentQueue.shared,
        effects: currentQueue.effects
      };
      workInProgress.updateQueue = clone;
    }
  }
  function createUpdate(eventTime, lane) {
    var update = {
      eventTime: eventTime,
      lane: lane,
      tag: UpdateState,
      payload: null,
      callback: null,
      next: null
    };
    return update;
  }
  function enqueueUpdate(fiber, update) {
    var updateQueue = fiber.updateQueue;

    if (updateQueue === null) {
      // Only occurs if the fiber has been unmounted.
      return;
    }

    var sharedQueue = updateQueue.shared;
    var pending = sharedQueue.pending;

    if (pending === null) {
      // This is the first update. Create a circular list.
      update.next = update;
    } else {
      update.next = pending.next;
      pending.next = update;
    }

    sharedQueue.pending = update;

    {
      if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
        error('An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');

        didWarnUpdateInsideUpdate = true;
      }
    }
  }
  function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
    // Captured updates are updates that are thrown by a child during the render
    // phase. They should be discarded if the render is aborted. Therefore,
    // we should only put them on the work-in-progress queue, not the current one.
    var queue = workInProgress.updateQueue; // Check if the work-in-progress queue is a clone.

    var current = workInProgress.alternate;

    if (current !== null) {
      var currentQueue = current.updateQueue;

      if (queue === currentQueue) {
        // The work-in-progress queue is the same as current. This happens when
        // we bail out on a parent fiber that then captures an error thrown by
        // a child. Since we want to append the update only to the work-in
        // -progress queue, we need to clone the updates. We usually clone during
        // processUpdateQueue, but that didn't happen in this case because we
        // skipped over the parent when we bailed out.
        var newFirst = null;
        var newLast = null;
        var firstBaseUpdate = queue.firstBaseUpdate;

        if (firstBaseUpdate !== null) {
          // Loop through the updates and clone them.
          var update = firstBaseUpdate;

          do {
            var clone = {
              eventTime: update.eventTime,
              lane: update.lane,
              tag: update.tag,
              payload: update.payload,
              callback: update.callback,
              next: null
            };

            if (newLast === null) {
              newFirst = newLast = clone;
            } else {
              newLast.next = clone;
              newLast = clone;
            }

            update = update.next;
          } while (update !== null); // Append the captured update the end of the cloned list.


          if (newLast === null) {
            newFirst = newLast = capturedUpdate;
          } else {
            newLast.next = capturedUpdate;
            newLast = capturedUpdate;
          }
        } else {
          // There are no base updates.
          newFirst = newLast = capturedUpdate;
        }

        queue = {
          baseState: currentQueue.baseState,
          firstBaseUpdate: newFirst,
          lastBaseUpdate: newLast,
          shared: currentQueue.shared,
          effects: currentQueue.effects
        };
        workInProgress.updateQueue = queue;
        return;
      }
    } // Append the update to the end of the list.


    var lastBaseUpdate = queue.lastBaseUpdate;

    if (lastBaseUpdate === null) {
      queue.firstBaseUpdate = capturedUpdate;
    } else {
      lastBaseUpdate.next = capturedUpdate;
    }

    queue.lastBaseUpdate = capturedUpdate;
  }

  function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
    switch (update.tag) {
      case ReplaceState:
        {
          var payload = update.payload;

          if (typeof payload === 'function') {
            // Updater function
            {
              enterDisallowedContextReadInDEV();
            }

            var nextState = payload.call(instance, prevState, nextProps);

            {
              if ( workInProgress.mode & StrictMode) {
                disableLogs();

                try {
                  payload.call(instance, prevState, nextProps);
                } finally {
                  reenableLogs();
                }
              }

              exitDisallowedContextReadInDEV();
            }

            return nextState;
          } // State object


          return payload;
        }

      case CaptureUpdate:
        {
          workInProgress.flags = workInProgress.flags & ~ShouldCapture | DidCapture;
        }
      // Intentional fallthrough

      case UpdateState:
        {
          var _payload = update.payload;
          var partialState;

          if (typeof _payload === 'function') {
            // Updater function
            {
              enterDisallowedContextReadInDEV();
            }

            partialState = _payload.call(instance, prevState, nextProps);

            {
              if ( workInProgress.mode & StrictMode) {
                disableLogs();

                try {
                  _payload.call(instance, prevState, nextProps);
                } finally {
                  reenableLogs();
                }
              }

              exitDisallowedContextReadInDEV();
            }
          } else {
            // Partial state object
            partialState = _payload;
          }

          if (partialState === null || partialState === undefined) {
            // Null and undefined are treated as no-ops.
            return prevState;
          } // Merge the partial state and the previous state.


          return _assign({}, prevState, partialState);
        }

      case ForceUpdate:
        {
          hasForceUpdate = true;
          return prevState;
        }
    }

    return prevState;
  }

  function processUpdateQueue(workInProgress, props, instance, renderLanes) {
    // This is always non-null on a ClassComponent or HostRoot
    var queue = workInProgress.updateQueue;
    hasForceUpdate = false;

    {
      currentlyProcessingQueue = queue.shared;
    }

    var firstBaseUpdate = queue.firstBaseUpdate;
    var lastBaseUpdate = queue.lastBaseUpdate; // Check if there are pending updates. If so, transfer them to the base queue.

    var pendingQueue = queue.shared.pending;

    if (pendingQueue !== null) {
      queue.shared.pending = null; // The pending queue is circular. Disconnect the pointer between first
      // and last so that it's non-circular.

      var lastPendingUpdate = pendingQueue;
      var firstPendingUpdate = lastPendingUpdate.next;
      lastPendingUpdate.next = null; // Append pending updates to base queue

      if (lastBaseUpdate === null) {
        firstBaseUpdate = firstPendingUpdate;
      } else {
        lastBaseUpdate.next = firstPendingUpdate;
      }

      lastBaseUpdate = lastPendingUpdate; // If there's a current queue, and it's different from the base queue, then
      // we need to transfer the updates to that queue, too. Because the base
      // queue is a singly-linked list with no cycles, we can append to both
      // lists and take advantage of structural sharing.
      // TODO: Pass `current` as argument

      var current = workInProgress.alternate;

      if (current !== null) {
        // This is always non-null on a ClassComponent or HostRoot
        var currentQueue = current.updateQueue;
        var currentLastBaseUpdate = currentQueue.lastBaseUpdate;

        if (currentLastBaseUpdate !== lastBaseUpdate) {
          if (currentLastBaseUpdate === null) {
            currentQueue.firstBaseUpdate = firstPendingUpdate;
          } else {
            currentLastBaseUpdate.next = firstPendingUpdate;
          }

          currentQueue.lastBaseUpdate = lastPendingUpdate;
        }
      }
    } // These values may change as we process the queue.


    if (firstBaseUpdate !== null) {
      // Iterate through the list of updates to compute the result.
      var newState = queue.baseState; // TODO: Don't need to accumulate this. Instead, we can remove renderLanes
      // from the original lanes.

      var newLanes = NoLanes;
      var newBaseState = null;
      var newFirstBaseUpdate = null;
      var newLastBaseUpdate = null;
      var update = firstBaseUpdate;

      do {
        var updateLane = update.lane;
        var updateEventTime = update.eventTime;

        if (!isSubsetOfLanes(renderLanes, updateLane)) {
          // Priority is insufficient. Skip this update. If this is the first
          // skipped update, the previous update/state is the new base
          // update/state.
          var clone = {
            eventTime: updateEventTime,
            lane: updateLane,
            tag: update.tag,
            payload: update.payload,
            callback: update.callback,
            next: null
          };

          if (newLastBaseUpdate === null) {
            newFirstBaseUpdate = newLastBaseUpdate = clone;
            newBaseState = newState;
          } else {
            newLastBaseUpdate = newLastBaseUpdate.next = clone;
          } // Update the remaining priority in the queue.


          newLanes = mergeLanes(newLanes, updateLane);
        } else {
          // This update does have sufficient priority.
          if (newLastBaseUpdate !== null) {
            var _clone = {
              eventTime: updateEventTime,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: NoLane,
              tag: update.tag,
              payload: update.payload,
              callback: update.callback,
              next: null
            };
            newLastBaseUpdate = newLastBaseUpdate.next = _clone;
          } // Process this update.


          newState = getStateFromUpdate(workInProgress, queue, update, newState, props, instance);
          var callback = update.callback;

          if (callback !== null) {
            workInProgress.flags |= Callback;
            var effects = queue.effects;

            if (effects === null) {
              queue.effects = [update];
            } else {
              effects.push(update);
            }
          }
        }

        update = update.next;

        if (update === null) {
          pendingQueue = queue.shared.pending;

          if (pendingQueue === null) {
            break;
          } else {
            // An update was scheduled from inside a reducer. Add the new
            // pending updates to the end of the list and keep processing.
            var _lastPendingUpdate = pendingQueue; // Intentionally unsound. Pending updates form a circular list, but we
            // unravel them when transferring them to the base queue.

            var _firstPendingUpdate = _lastPendingUpdate.next;
            _lastPendingUpdate.next = null;
            update = _firstPendingUpdate;
            queue.lastBaseUpdate = _lastPendingUpdate;
            queue.shared.pending = null;
          }
        }
      } while (true);

      if (newLastBaseUpdate === null) {
        newBaseState = newState;
      }

      queue.baseState = newBaseState;
      queue.firstBaseUpdate = newFirstBaseUpdate;
      queue.lastBaseUpdate = newLastBaseUpdate; // Set the remaining expiration time to be whatever is remaining in the queue.
      // This should be fine because the only two other things that contribute to
      // expiration time are props and context. We're already in the middle of the
      // begin phase by the time we start processing the queue, so we've already
      // dealt with the props. Context in components that specify
      // shouldComponentUpdate is tricky; but we'll have to account for
      // that regardless.

      markSkippedUpdateLanes(newLanes);
      workInProgress.lanes = newLanes;
      workInProgress.memoizedState = newState;
    }

    {
      currentlyProcessingQueue = null;
    }
  }

  function callCallback(callback, context) {
    if (!(typeof callback === 'function')) {
      {
        throw Error( "Invalid argument passed as callback. Expected a function. Instead received: " + callback );
      }
    }

    callback.call(context);
  }

  function resetHasForceUpdateBeforeProcessing() {
    hasForceUpdate = false;
  }
  function checkHasForceUpdateAfterProcessing() {
    return hasForceUpdate;
  }
  function commitUpdateQueue(finishedWork, finishedQueue, instance) {
    // Commit the effects
    var effects = finishedQueue.effects;
    finishedQueue.effects = null;

    if (effects !== null) {
      for (var i = 0; i < effects.length; i++) {
        var effect = effects[i];
        var callback = effect.callback;

        if (callback !== null) {
          effect.callback = null;
          callCallback(callback, instance);
        }
      }
    }
  }

  var fakeInternalInstance = {};
  var isArray = Array.isArray; // React.Component uses a shared frozen object by default.
  // We'll use it to determine whether we need to initialize legacy refs.

  var emptyRefsObject = new React.Component().refs;
  var didWarnAboutStateAssignmentForComponent;
  var didWarnAboutUninitializedState;
  var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
  var didWarnAboutLegacyLifecyclesAndDerivedState;
  var didWarnAboutUndefinedDerivedState;
  var warnOnUndefinedDerivedState;
  var warnOnInvalidCallback;
  var didWarnAboutDirectlyAssigningPropsToState;
  var didWarnAboutContextTypeAndContextTypes;
  var didWarnAboutInvalidateContextType;

  {
    didWarnAboutStateAssignmentForComponent = new Set();
    didWarnAboutUninitializedState = new Set();
    didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
    didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
    didWarnAboutDirectlyAssigningPropsToState = new Set();
    didWarnAboutUndefinedDerivedState = new Set();
    didWarnAboutContextTypeAndContextTypes = new Set();
    didWarnAboutInvalidateContextType = new Set();
    var didWarnOnInvalidCallback = new Set();

    warnOnInvalidCallback = function (callback, callerName) {
      if (callback === null || typeof callback === 'function') {
        return;
      }

      var key = callerName + '_' + callback;

      if (!didWarnOnInvalidCallback.has(key)) {
        didWarnOnInvalidCallback.add(key);

        error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
      }
    };

    warnOnUndefinedDerivedState = function (type, partialState) {
      if (partialState === undefined) {
        var componentName = getComponentName(type) || 'Component';

        if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
          didWarnAboutUndefinedDerivedState.add(componentName);

          error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
        }
      }
    }; // This is so gross but it's at least non-critical and can be removed if
    // it causes problems. This is meant to give a nicer error message for
    // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
    // ...)) which otherwise throws a "_processChildContext is not a function"
    // exception.


    Object.defineProperty(fakeInternalInstance, '_processChildContext', {
      enumerable: false,
      value: function () {
        {
          {
            throw Error( "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)." );
          }
        }
      }
    });
    Object.freeze(fakeInternalInstance);
  }

  function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
    var prevState = workInProgress.memoizedState;

    {
      if ( workInProgress.mode & StrictMode) {
        disableLogs();

        try {
          // Invoke the function an extra time to help detect side-effects.
          getDerivedStateFromProps(nextProps, prevState);
        } finally {
          reenableLogs();
        }
      }
    }

    var partialState = getDerivedStateFromProps(nextProps, prevState);

    {
      warnOnUndefinedDerivedState(ctor, partialState);
    } // Merge the partial state and the previous state.


    var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
    workInProgress.memoizedState = memoizedState; // Once the update queue is empty, persist the derived state onto the
    // base state.

    if (workInProgress.lanes === NoLanes) {
      // Queue is always non-null for classes
      var updateQueue = workInProgress.updateQueue;
      updateQueue.baseState = memoizedState;
    }
  }
  var classComponentUpdater = {
    isMounted: isMounted,
    enqueueSetState: function (inst, payload, callback) {
      var fiber = get(inst);
      var eventTime = requestEventTime();
      var lane = requestUpdateLane(fiber);
      var update = createUpdate(eventTime, lane);
      update.payload = payload;

      if (callback !== undefined && callback !== null) {
        {
          warnOnInvalidCallback(callback, 'setState');
        }

        update.callback = callback;
      }

      enqueueUpdate(fiber, update);
      scheduleUpdateOnFiber(fiber, lane, eventTime);
    },
    enqueueReplaceState: function (inst, payload, callback) {
      var fiber = get(inst);
      var eventTime = requestEventTime();
      var lane = requestUpdateLane(fiber);
      var update = createUpdate(eventTime, lane);
      update.tag = ReplaceState;
      update.payload = payload;

      if (callback !== undefined && callback !== null) {
        {
          warnOnInvalidCallback(callback, 'replaceState');
        }

        update.callback = callback;
      }

      enqueueUpdate(fiber, update);
      scheduleUpdateOnFiber(fiber, lane, eventTime);
    },
    enqueueForceUpdate: function (inst, callback) {
      var fiber = get(inst);
      var eventTime = requestEventTime();
      var lane = requestUpdateLane(fiber);
      var update = createUpdate(eventTime, lane);
      update.tag = ForceUpdate;

      if (callback !== undefined && callback !== null) {
        {
          warnOnInvalidCallback(callback, 'forceUpdate');
        }

        update.callback = callback;
      }

      enqueueUpdate(fiber, update);
      scheduleUpdateOnFiber(fiber, lane, eventTime);
    }
  };

  function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
    var instance = workInProgress.stateNode;

    if (typeof instance.shouldComponentUpdate === 'function') {
      {
        if ( workInProgress.mode & StrictMode) {
          disableLogs();

          try {
            // Invoke the function an extra time to help detect side-effects.
            instance.shouldComponentUpdate(newProps, newState, nextContext);
          } finally {
            reenableLogs();
          }
        }
      }

      var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);

      {
        if (shouldUpdate === undefined) {
          error('%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(ctor) || 'Component');
        }
      }

      return shouldUpdate;
    }

    if (ctor.prototype && ctor.prototype.isPureReactComponent) {
      return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
    }

    return true;
  }

  function checkClassInstance(workInProgress, ctor, newProps) {
    var instance = workInProgress.stateNode;

    {
      var name = getComponentName(ctor) || 'Component';
      var renderPresent = instance.render;

      if (!renderPresent) {
        if (ctor.prototype && typeof ctor.prototype.render === 'function') {
          error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
        } else {
          error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
        }
      }

      if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
        error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
      }

      if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
        error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
      }

      if (instance.propTypes) {
        error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
      }

      if (instance.contextType) {
        error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
      }

      {
        if (instance.contextTypes) {
          error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
        }

        if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
          didWarnAboutContextTypeAndContextTypes.add(ctor);

          error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
        }
      }

      if (typeof instance.componentShouldUpdate === 'function') {
        error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
      }

      if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
        error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(ctor) || 'A pure component');
      }

      if (typeof instance.componentDidUnmount === 'function') {
        error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
      }

      if (typeof instance.componentDidReceiveProps === 'function') {
        error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
      }

      if (typeof instance.componentWillRecieveProps === 'function') {
        error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
      }

      if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
        error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
      }

      var hasMutatedProps = instance.props !== newProps;

      if (instance.props !== undefined && hasMutatedProps) {
        error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
      }

      if (instance.defaultProps) {
        error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
      }

      if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);

        error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentName(ctor));
      }

      if (typeof instance.getDerivedStateFromProps === 'function') {
        error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
      }

      if (typeof instance.getDerivedStateFromError === 'function') {
        error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
      }

      if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
        error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
      }

      var _state = instance.state;

      if (_state && (typeof _state !== 'object' || isArray(_state))) {
        error('%s.state: must be set to an object or null', name);
      }

      if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
        error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
      }
    }
  }

  function adoptClassInstance(workInProgress, instance) {
    instance.updater = classComponentUpdater;
    workInProgress.stateNode = instance; // The instance needs access to the fiber so that it can schedule updates

    set(instance, workInProgress);

    {
      instance._reactInternalInstance = fakeInternalInstance;
    }
  }

  function constructClassInstance(workInProgress, ctor, props) {
    var isLegacyContextConsumer = false;
    var unmaskedContext = emptyContextObject;
    var context = emptyContextObject;
    var contextType = ctor.contextType;

    {
      if ('contextType' in ctor) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
          didWarnAboutInvalidateContextType.add(ctor);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(ctor) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      context = readContext(contextType);
    } else {
      unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
      var contextTypes = ctor.contextTypes;
      isLegacyContextConsumer = contextTypes !== null && contextTypes !== undefined;
      context = isLegacyContextConsumer ? getMaskedContext(workInProgress, unmaskedContext) : emptyContextObject;
    } // Instantiate twice to help detect side-effects.


    {
      if ( workInProgress.mode & StrictMode) {
        disableLogs();

        try {
          new ctor(props, context); // eslint-disable-line no-new
        } finally {
          reenableLogs();
        }
      }
    }

    var instance = new ctor(props, context);
    var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
    adoptClassInstance(workInProgress, instance);

    {
      if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
        var componentName = getComponentName(ctor) || 'Component';

        if (!didWarnAboutUninitializedState.has(componentName)) {
          didWarnAboutUninitializedState.add(componentName);

          error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
        }
      } // If new component APIs are defined, "unsafe" lifecycles won't be called.
      // Warn about these lifecycles if they are present.
      // Don't warn about react-lifecycles-compat polyfilled methods though.


      if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
        var foundWillMountName = null;
        var foundWillReceivePropsName = null;
        var foundWillUpdateName = null;

        if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
          foundWillMountName = 'componentWillMount';
        } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
          foundWillMountName = 'UNSAFE_componentWillMount';
        }

        if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
          foundWillReceivePropsName = 'componentWillReceiveProps';
        } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
          foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
        }

        if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
          foundWillUpdateName = 'componentWillUpdate';
        } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
          foundWillUpdateName = 'UNSAFE_componentWillUpdate';
        }

        if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
          var _componentName = getComponentName(ctor) || 'Component';

          var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

          if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
            didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

            error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
          }
        }
      }
    } // Cache unmasked context so we can avoid recreating masked context unless necessary.
    // ReactFiberContext usually updates this cache but can't for newly-created instances.


    if (isLegacyContextConsumer) {
      cacheContext(workInProgress, unmaskedContext, context);
    }

    return instance;
  }

  function callComponentWillMount(workInProgress, instance) {
    var oldState = instance.state;

    if (typeof instance.componentWillMount === 'function') {
      instance.componentWillMount();
    }

    if (typeof instance.UNSAFE_componentWillMount === 'function') {
      instance.UNSAFE_componentWillMount();
    }

    if (oldState !== instance.state) {
      {
        error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress.type) || 'Component');
      }

      classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
    }
  }

  function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
    var oldState = instance.state;

    if (typeof instance.componentWillReceiveProps === 'function') {
      instance.componentWillReceiveProps(newProps, nextContext);
    }

    if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
      instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
    }

    if (instance.state !== oldState) {
      {
        var componentName = getComponentName(workInProgress.type) || 'Component';

        if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
          didWarnAboutStateAssignmentForComponent.add(componentName);

          error('%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
        }
      }

      classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
    }
  } // Invokes the mount life-cycles on a previously never rendered instance.


  function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
    {
      checkClassInstance(workInProgress, ctor, newProps);
    }

    var instance = workInProgress.stateNode;
    instance.props = newProps;
    instance.state = workInProgress.memoizedState;
    instance.refs = emptyRefsObject;
    initializeUpdateQueue(workInProgress);
    var contextType = ctor.contextType;

    if (typeof contextType === 'object' && contextType !== null) {
      instance.context = readContext(contextType);
    } else {
      var unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
      instance.context = getMaskedContext(workInProgress, unmaskedContext);
    }

    {
      if (instance.state === newProps) {
        var componentName = getComponentName(ctor) || 'Component';

        if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
          didWarnAboutDirectlyAssigningPropsToState.add(componentName);

          error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
        }
      }

      if (workInProgress.mode & StrictMode) {
        ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
      }

      {
        ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);
      }
    }

    processUpdateQueue(workInProgress, newProps, instance, renderLanes);
    instance.state = workInProgress.memoizedState;
    var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

    if (typeof getDerivedStateFromProps === 'function') {
      applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
      instance.state = workInProgress.memoizedState;
    } // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.


    if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
      callComponentWillMount(workInProgress, instance); // If we had additional state updates during this life-cycle, let's
      // process them now.

      processUpdateQueue(workInProgress, newProps, instance, renderLanes);
      instance.state = workInProgress.memoizedState;
    }

    if (typeof instance.componentDidMount === 'function') {
      workInProgress.flags |= Update;
    }
  }

  function resumeMountClassInstance(workInProgress, ctor, newProps, renderLanes) {
    var instance = workInProgress.stateNode;
    var oldProps = workInProgress.memoizedProps;
    instance.props = oldProps;
    var oldContext = instance.context;
    var contextType = ctor.contextType;
    var nextContext = emptyContextObject;

    if (typeof contextType === 'object' && contextType !== null) {
      nextContext = readContext(contextType);
    } else {
      var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
      nextContext = getMaskedContext(workInProgress, nextLegacyUnmaskedContext);
    }

    var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
    var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
    // ever the previously attempted to render - not the "current". However,
    // during componentDidUpdate we pass the "current" props.
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.

    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
      if (oldProps !== newProps || oldContext !== nextContext) {
        callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
      }
    }

    resetHasForceUpdateBeforeProcessing();
    var oldState = workInProgress.memoizedState;
    var newState = instance.state = oldState;
    processUpdateQueue(workInProgress, newProps, instance, renderLanes);
    newState = workInProgress.memoizedState;

    if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
      // If an update was already in progress, we should schedule an Update
      // effect even though we're bailing out, so that cWU/cDU are called.
      if (typeof instance.componentDidMount === 'function') {
        workInProgress.flags |= Update;
      }

      return false;
    }

    if (typeof getDerivedStateFromProps === 'function') {
      applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
      newState = workInProgress.memoizedState;
    }

    var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

    if (shouldUpdate) {
      // In order to support react-lifecycles-compat polyfilled components,
      // Unsafe lifecycles should not be invoked for components using the new APIs.
      if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
        if (typeof instance.componentWillMount === 'function') {
          instance.componentWillMount();
        }

        if (typeof instance.UNSAFE_componentWillMount === 'function') {
          instance.UNSAFE_componentWillMount();
        }
      }

      if (typeof instance.componentDidMount === 'function') {
        workInProgress.flags |= Update;
      }
    } else {
      // If an update was already in progress, we should schedule an Update
      // effect even though we're bailing out, so that cWU/cDU are called.
      if (typeof instance.componentDidMount === 'function') {
        workInProgress.flags |= Update;
      } // If shouldComponentUpdate returned false, we should still update the
      // memoized state to indicate that this work can be reused.


      workInProgress.memoizedProps = newProps;
      workInProgress.memoizedState = newState;
    } // Update the existing instance's state, props, and context pointers even
    // if shouldComponentUpdate returns false.


    instance.props = newProps;
    instance.state = newState;
    instance.context = nextContext;
    return shouldUpdate;
  } // Invokes the update life-cycles and returns false if it shouldn't rerender.


  function updateClassInstance(current, workInProgress, ctor, newProps, renderLanes) {
    var instance = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    var unresolvedOldProps = workInProgress.memoizedProps;
    var oldProps = workInProgress.type === workInProgress.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress.type, unresolvedOldProps);
    instance.props = oldProps;
    var unresolvedNewProps = workInProgress.pendingProps;
    var oldContext = instance.context;
    var contextType = ctor.contextType;
    var nextContext = emptyContextObject;

    if (typeof contextType === 'object' && contextType !== null) {
      nextContext = readContext(contextType);
    } else {
      var nextUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
      nextContext = getMaskedContext(workInProgress, nextUnmaskedContext);
    }

    var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
    var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
    // ever the previously attempted to render - not the "current". However,
    // during componentDidUpdate we pass the "current" props.
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.

    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
      if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
        callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
      }
    }

    resetHasForceUpdateBeforeProcessing();
    var oldState = workInProgress.memoizedState;
    var newState = instance.state = oldState;
    processUpdateQueue(workInProgress, newProps, instance, renderLanes);
    newState = workInProgress.memoizedState;

    if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
      // If an update was already in progress, we should schedule an Update
      // effect even though we're bailing out, so that cWU/cDU are called.
      if (typeof instance.componentDidUpdate === 'function') {
        if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
          workInProgress.flags |= Update;
        }
      }

      if (typeof instance.getSnapshotBeforeUpdate === 'function') {
        if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
          workInProgress.flags |= Snapshot;
        }
      }

      return false;
    }

    if (typeof getDerivedStateFromProps === 'function') {
      applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
      newState = workInProgress.memoizedState;
    }

    var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

    if (shouldUpdate) {
      // In order to support react-lifecycles-compat polyfilled components,
      // Unsafe lifecycles should not be invoked for components using the new APIs.
      if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
        if (typeof instance.componentWillUpdate === 'function') {
          instance.componentWillUpdate(newProps, newState, nextContext);
        }

        if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
          instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
        }
      }

      if (typeof instance.componentDidUpdate === 'function') {
        workInProgress.flags |= Update;
      }

      if (typeof instance.getSnapshotBeforeUpdate === 'function') {
        workInProgress.flags |= Snapshot;
      }
    } else {
      // If an update was already in progress, we should schedule an Update
      // effect even though we're bailing out, so that cWU/cDU are called.
      if (typeof instance.componentDidUpdate === 'function') {
        if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
          workInProgress.flags |= Update;
        }
      }

      if (typeof instance.getSnapshotBeforeUpdate === 'function') {
        if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
          workInProgress.flags |= Snapshot;
        }
      } // If shouldComponentUpdate returned false, we should still update the
      // memoized props/state to indicate that this work can be reused.


      workInProgress.memoizedProps = newProps;
      workInProgress.memoizedState = newState;
    } // Update the existing instance's state, props, and context pointers even
    // if shouldComponentUpdate returns false.


    instance.props = newProps;
    instance.state = newState;
    instance.context = nextContext;
    return shouldUpdate;
  }

  var didWarnAboutMaps;
  var didWarnAboutGenerators;
  var didWarnAboutStringRefs;
  var ownerHasKeyUseWarning;
  var ownerHasFunctionTypeWarning;

  var warnForMissingKey = function (child, returnFiber) {};

  {
    didWarnAboutMaps = false;
    didWarnAboutGenerators = false;
    didWarnAboutStringRefs = {};
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */

    ownerHasKeyUseWarning = {};
    ownerHasFunctionTypeWarning = {};

    warnForMissingKey = function (child, returnFiber) {
      if (child === null || typeof child !== 'object') {
        return;
      }

      if (!child._store || child._store.validated || child.key != null) {
        return;
      }

      if (!(typeof child._store === 'object')) {
        {
          throw Error( "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue." );
        }
      }

      child._store.validated = true;
      var componentName = getComponentName(returnFiber.type) || 'Component';

      if (ownerHasKeyUseWarning[componentName]) {
        return;
      }

      ownerHasKeyUseWarning[componentName] = true;

      error('Each child in a list should have a unique ' + '"key" prop. See https://reactjs.org/link/warning-keys for ' + 'more information.');
    };
  }

  var isArray$1 = Array.isArray;

  function coerceRef(returnFiber, current, element) {
    var mixedRef = element.ref;

    if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
      {
        // TODO: Clean this up once we turn on the string ref warning for
        // everyone, because the strict mode case will no longer be relevant
        if ((returnFiber.mode & StrictMode || warnAboutStringRefs) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(element._owner && element._self && element._owner.stateNode !== element._self)) {
          var componentName = getComponentName(returnFiber.type) || 'Component';

          if (!didWarnAboutStringRefs[componentName]) {
            {
              error('A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', mixedRef);
            }

            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }

      if (element._owner) {
        var owner = element._owner;
        var inst;

        if (owner) {
          var ownerFiber = owner;

          if (!(ownerFiber.tag === ClassComponent)) {
            {
              throw Error( "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref" );
            }
          }

          inst = ownerFiber.stateNode;
        }

        if (!inst) {
          {
            throw Error( "Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue." );
          }
        }

        var stringRef = '' + mixedRef; // Check if previous string ref matches new string ref

        if (current !== null && current.ref !== null && typeof current.ref === 'function' && current.ref._stringRef === stringRef) {
          return current.ref;
        }

        var ref = function (value) {
          var refs = inst.refs;

          if (refs === emptyRefsObject) {
            // This is a lazy pooled frozen object, so we need to initialize.
            refs = inst.refs = {};
          }

          if (value === null) {
            delete refs[stringRef];
          } else {
            refs[stringRef] = value;
          }
        };

        ref._stringRef = stringRef;
        return ref;
      } else {
        if (!(typeof mixedRef === 'string')) {
          {
            throw Error( "Expected ref to be a function, a string, an object returned by React.createRef(), or null." );
          }
        }

        if (!element._owner) {
          {
            throw Error( "Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information." );
          }
        }
      }
    }

    return mixedRef;
  }

  function throwOnInvalidObjectType(returnFiber, newChild) {
    if (returnFiber.type !== 'textarea') {
      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  function warnOnFunctionType(returnFiber) {
    {
      var componentName = getComponentName(returnFiber.type) || 'Component';

      if (ownerHasFunctionTypeWarning[componentName]) {
        return;
      }

      ownerHasFunctionTypeWarning[componentName] = true;

      error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
    }
  } // We avoid inlining this to avoid potential deopts from using try/catch.
  // to be able to optimize each path individually by branching early. This needs
  // a compiler or we can do it manually. Helpers that don't need this branching
  // live outside of this function.


  function ChildReconciler(shouldTrackSideEffects) {
    function deleteChild(returnFiber, childToDelete) {
      if (!shouldTrackSideEffects) {
        // Noop.
        return;
      } // Deletions are added in reversed order so we add it to the front.
      // At this point, the return fiber's effect list is empty except for
      // deletions, so we can just append the deletion to the list. The remaining
      // effects aren't added until the complete phase. Once we implement
      // resuming, this may not be true.


      var last = returnFiber.lastEffect;

      if (last !== null) {
        last.nextEffect = childToDelete;
        returnFiber.lastEffect = childToDelete;
      } else {
        returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
      }

      childToDelete.nextEffect = null;
      childToDelete.flags = Deletion;
    }

    function deleteRemainingChildren(returnFiber, currentFirstChild) {
      if (!shouldTrackSideEffects) {
        // Noop.
        return null;
      } // TODO: For the shouldClone case, this could be micro-optimized a bit by
      // assuming that after the first child we've already added everything.


      var childToDelete = currentFirstChild;

      while (childToDelete !== null) {
        deleteChild(returnFiber, childToDelete);
        childToDelete = childToDelete.sibling;
      }

      return null;
    }

    function mapRemainingChildren(returnFiber, currentFirstChild) {
      // Add the remaining children to a temporary map so that we can find them by
      // keys quickly. Implicit (null) keys get added to this set with their index
      // instead.
      var existingChildren = new Map();
      var existingChild = currentFirstChild;

      while (existingChild !== null) {
        if (existingChild.key !== null) {
          existingChildren.set(existingChild.key, existingChild);
        } else {
          existingChildren.set(existingChild.index, existingChild);
        }

        existingChild = existingChild.sibling;
      }

      return existingChildren;
    }

    function useFiber(fiber, pendingProps) {
      // We currently set sibling to null and index to 0 here because it is easy
      // to forget to do before returning it. E.g. for the single child case.
      var clone = createWorkInProgress(fiber, pendingProps);
      clone.index = 0;
      clone.sibling = null;
      return clone;
    }

    function placeChild(newFiber, lastPlacedIndex, newIndex) {
      newFiber.index = newIndex;

      if (!shouldTrackSideEffects) {
        // Noop.
        return lastPlacedIndex;
      }

      var current = newFiber.alternate;

      if (current !== null) {
        var oldIndex = current.index;

        if (oldIndex < lastPlacedIndex) {
          // This is a move.
          newFiber.flags = Placement;
          return lastPlacedIndex;
        } else {
          // This item can stay in place.
          return oldIndex;
        }
      } else {
        // This is an insertion.
        newFiber.flags = Placement;
        return lastPlacedIndex;
      }
    }

    function placeSingleChild(newFiber) {
      // This is simpler for the single child case. We only need to do a
      // placement for inserting new children.
      if (shouldTrackSideEffects && newFiber.alternate === null) {
        newFiber.flags = Placement;
      }

      return newFiber;
    }

    function updateTextNode(returnFiber, current, textContent, lanes) {
      if (current === null || current.tag !== HostText) {
        // Insert
        var created = createFiberFromText(textContent, returnFiber.mode, lanes);
        created.return = returnFiber;
        return created;
      } else {
        // Update
        var existing = useFiber(current, textContent);
        existing.return = returnFiber;
        return existing;
      }
    }

    function updateElement(returnFiber, current, element, lanes) {
      if (current !== null) {
        if (current.elementType === element.type || ( // Keep this check inline so it only runs on the false path:
         isCompatibleFamilyForHotReloading(current, element) )) {
          // Move based on index
          var existing = useFiber(current, element.props);
          existing.ref = coerceRef(returnFiber, current, element);
          existing.return = returnFiber;

          {
            existing._debugSource = element._source;
            existing._debugOwner = element._owner;
          }

          return existing;
        }
      } // Insert


      var created = createFiberFromElement(element, returnFiber.mode, lanes);
      created.ref = coerceRef(returnFiber, current, element);
      created.return = returnFiber;
      return created;
    }

    function updatePortal(returnFiber, current, portal, lanes) {
      if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
        // Insert
        var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
        created.return = returnFiber;
        return created;
      } else {
        // Update
        var existing = useFiber(current, portal.children || []);
        existing.return = returnFiber;
        return existing;
      }
    }

    function updateFragment(returnFiber, current, fragment, lanes, key) {
      if (current === null || current.tag !== Fragment) {
        // Insert
        var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
        created.return = returnFiber;
        return created;
      } else {
        // Update
        var existing = useFiber(current, fragment);
        existing.return = returnFiber;
        return existing;
      }
    }

    function createChild(returnFiber, newChild, lanes) {
      if (typeof newChild === 'string' || typeof newChild === 'number') {
        // Text nodes don't have keys. If the previous node is implicitly keyed
        // we can continue to replace it without aborting even if it is not a text
        // node.
        var created = createFiberFromText('' + newChild, returnFiber.mode, lanes);
        created.return = returnFiber;
        return created;
      }

      if (typeof newChild === 'object' && newChild !== null) {
        switch (newChild.$$typeof) {
          case REACT_ELEMENT_TYPE:
            {
              var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);

              _created.ref = coerceRef(returnFiber, null, newChild);
              _created.return = returnFiber;
              return _created;
            }

          case REACT_PORTAL_TYPE:
            {
              var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);

              _created2.return = returnFiber;
              return _created2;
            }
        }

        if (isArray$1(newChild) || getIteratorFn(newChild)) {
          var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);

          _created3.return = returnFiber;
          return _created3;
        }

        throwOnInvalidObjectType(returnFiber, newChild);
      }

      {
        if (typeof newChild === 'function') {
          warnOnFunctionType(returnFiber);
        }
      }

      return null;
    }

    function updateSlot(returnFiber, oldFiber, newChild, lanes) {
      // Update the fiber if the keys match, otherwise return null.
      var key = oldFiber !== null ? oldFiber.key : null;

      if (typeof newChild === 'string' || typeof newChild === 'number') {
        // Text nodes don't have keys. If the previous node is implicitly keyed
        // we can continue to replace it without aborting even if it is not a text
        // node.
        if (key !== null) {
          return null;
        }

        return updateTextNode(returnFiber, oldFiber, '' + newChild, lanes);
      }

      if (typeof newChild === 'object' && newChild !== null) {
        switch (newChild.$$typeof) {
          case REACT_ELEMENT_TYPE:
            {
              if (newChild.key === key) {
                if (newChild.type === REACT_FRAGMENT_TYPE) {
                  return updateFragment(returnFiber, oldFiber, newChild.props.children, lanes, key);
                }

                return updateElement(returnFiber, oldFiber, newChild, lanes);
              } else {
                return null;
              }
            }

          case REACT_PORTAL_TYPE:
            {
              if (newChild.key === key) {
                return updatePortal(returnFiber, oldFiber, newChild, lanes);
              } else {
                return null;
              }
            }
        }

        if (isArray$1(newChild) || getIteratorFn(newChild)) {
          if (key !== null) {
            return null;
          }

          return updateFragment(returnFiber, oldFiber, newChild, lanes, null);
        }

        throwOnInvalidObjectType(returnFiber, newChild);
      }

      {
        if (typeof newChild === 'function') {
          warnOnFunctionType(returnFiber);
        }
      }

      return null;
    }

    function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
      if (typeof newChild === 'string' || typeof newChild === 'number') {
        // Text nodes don't have keys, so we neither have to check the old nor
        // new node for the key. If both are text nodes, they match.
        var matchedFiber = existingChildren.get(newIdx) || null;
        return updateTextNode(returnFiber, matchedFiber, '' + newChild, lanes);
      }

      if (typeof newChild === 'object' && newChild !== null) {
        switch (newChild.$$typeof) {
          case REACT_ELEMENT_TYPE:
            {
              var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

              if (newChild.type === REACT_FRAGMENT_TYPE) {
                return updateFragment(returnFiber, _matchedFiber, newChild.props.children, lanes, newChild.key);
              }

              return updateElement(returnFiber, _matchedFiber, newChild, lanes);
            }

          case REACT_PORTAL_TYPE:
            {
              var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

              return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
            }

        }

        if (isArray$1(newChild) || getIteratorFn(newChild)) {
          var _matchedFiber3 = existingChildren.get(newIdx) || null;

          return updateFragment(returnFiber, _matchedFiber3, newChild, lanes, null);
        }

        throwOnInvalidObjectType(returnFiber, newChild);
      }

      {
        if (typeof newChild === 'function') {
          warnOnFunctionType(returnFiber);
        }
      }

      return null;
    }
    /**
     * Warns if there is a duplicate or missing key
     */


    function warnOnInvalidKey(child, knownKeys, returnFiber) {
      {
        if (typeof child !== 'object' || child === null) {
          return knownKeys;
        }

        switch (child.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            warnForMissingKey(child, returnFiber);
            var key = child.key;

            if (typeof key !== 'string') {
              break;
            }

            if (knownKeys === null) {
              knownKeys = new Set();
              knownKeys.add(key);
              break;
            }

            if (!knownKeys.has(key)) {
              knownKeys.add(key);
              break;
            }

            error('Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.', key);

            break;
        }
      }

      return knownKeys;
    }

    function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
      // This algorithm can't optimize by searching from both ends since we
      // don't have backpointers on fibers. I'm trying to see how far we can get
      // with that model. If it ends up not being worth the tradeoffs, we can
      // add it later.
      // Even with a two ended optimization, we'd want to optimize for the case
      // where there are few changes and brute force the comparison instead of
      // going for the Map. It'd like to explore hitting that path first in
      // forward-only mode and only go for the Map once we notice that we need
      // lots of look ahead. This doesn't handle reversal as well as two ended
      // search but that's unusual. Besides, for the two ended optimization to
      // work on Iterables, we'd need to copy the whole set.
      // In this first iteration, we'll just live with hitting the bad case
      // (adding everything to a Map) in for every insert/move.
      // If you change this code, also update reconcileChildrenIterator() which
      // uses the same algorithm.
      {
        // First, validate keys.
        var knownKeys = null;

        for (var i = 0; i < newChildren.length; i++) {
          var child = newChildren[i];
          knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
        }
      }

      var resultingFirstChild = null;
      var previousNewFiber = null;
      var oldFiber = currentFirstChild;
      var lastPlacedIndex = 0;
      var newIdx = 0;
      var nextOldFiber = null;

      for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
        if (oldFiber.index > newIdx) {
          nextOldFiber = oldFiber;
          oldFiber = null;
        } else {
          nextOldFiber = oldFiber.sibling;
        }

        var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);

        if (newFiber === null) {
          // TODO: This breaks on empty slots like null children. That's
          // unfortunate because it triggers the slow path all the time. We need
          // a better way to communicate whether this was a miss or null,
          // boolean, undefined, etc.
          if (oldFiber === null) {
            oldFiber = nextOldFiber;
          }

          break;
        }

        if (shouldTrackSideEffects) {
          if (oldFiber && newFiber.alternate === null) {
            // We matched the slot, but we didn't reuse the existing fiber, so we
            // need to delete the existing child.
            deleteChild(returnFiber, oldFiber);
          }
        }

        lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = newFiber;
        } else {
          // TODO: Defer siblings if we're not at the right index for this slot.
          // I.e. if we had null values before, then we want to defer this
          // for each null value. However, we also don't want to call updateSlot
          // with the previous one.
          previousNewFiber.sibling = newFiber;
        }

        previousNewFiber = newFiber;
        oldFiber = nextOldFiber;
      }

      if (newIdx === newChildren.length) {
        // We've reached the end of the new children. We can delete the rest.
        deleteRemainingChildren(returnFiber, oldFiber);
        return resultingFirstChild;
      }

      if (oldFiber === null) {
        // If we don't have any more existing children we can choose a fast path
        // since the rest will all be insertions.
        for (; newIdx < newChildren.length; newIdx++) {
          var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);

          if (_newFiber === null) {
            continue;
          }

          lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);

          if (previousNewFiber === null) {
            // TODO: Move out of the loop. This only happens for the first run.
            resultingFirstChild = _newFiber;
          } else {
            previousNewFiber.sibling = _newFiber;
          }

          previousNewFiber = _newFiber;
        }

        return resultingFirstChild;
      } // Add all children to a key map for quick lookups.


      var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

      for (; newIdx < newChildren.length; newIdx++) {
        var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);

        if (_newFiber2 !== null) {
          if (shouldTrackSideEffects) {
            if (_newFiber2.alternate !== null) {
              // The new fiber is a work in progress, but if there exists a
              // current, that means that we reused the fiber. We need to delete
              // it from the child list so that we don't add it to the deletion
              // list.
              existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
            }
          }

          lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);

          if (previousNewFiber === null) {
            resultingFirstChild = _newFiber2;
          } else {
            previousNewFiber.sibling = _newFiber2;
          }

          previousNewFiber = _newFiber2;
        }
      }

      if (shouldTrackSideEffects) {
        // Any existing children that weren't consumed above were deleted. We need
        // to add them to the deletion list.
        existingChildren.forEach(function (child) {
          return deleteChild(returnFiber, child);
        });
      }

      return resultingFirstChild;
    }

    function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
      // This is the same implementation as reconcileChildrenArray(),
      // but using the iterator instead.
      var iteratorFn = getIteratorFn(newChildrenIterable);

      if (!(typeof iteratorFn === 'function')) {
        {
          throw Error( "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue." );
        }
      }

      {
        // We don't support rendering Generators because it's a mutation.
        // See https://github.com/facebook/react/issues/12995
        if (typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
        newChildrenIterable[Symbol.toStringTag] === 'Generator') {
          if (!didWarnAboutGenerators) {
            error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
          }

          didWarnAboutGenerators = true;
        } // Warn about using Maps as children


        if (newChildrenIterable.entries === iteratorFn) {
          if (!didWarnAboutMaps) {
            error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        } // First, validate keys.
        // We'll get a different iterator later for the main pass.


        var _newChildren = iteratorFn.call(newChildrenIterable);

        if (_newChildren) {
          var knownKeys = null;

          var _step = _newChildren.next();

          for (; !_step.done; _step = _newChildren.next()) {
            var child = _step.value;
            knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
          }
        }
      }

      var newChildren = iteratorFn.call(newChildrenIterable);

      if (!(newChildren != null)) {
        {
          throw Error( "An iterable object provided no iterator." );
        }
      }

      var resultingFirstChild = null;
      var previousNewFiber = null;
      var oldFiber = currentFirstChild;
      var lastPlacedIndex = 0;
      var newIdx = 0;
      var nextOldFiber = null;
      var step = newChildren.next();

      for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
        if (oldFiber.index > newIdx) {
          nextOldFiber = oldFiber;
          oldFiber = null;
        } else {
          nextOldFiber = oldFiber.sibling;
        }

        var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);

        if (newFiber === null) {
          // TODO: This breaks on empty slots like null children. That's
          // unfortunate because it triggers the slow path all the time. We need
          // a better way to communicate whether this was a miss or null,
          // boolean, undefined, etc.
          if (oldFiber === null) {
            oldFiber = nextOldFiber;
          }

          break;
        }

        if (shouldTrackSideEffects) {
          if (oldFiber && newFiber.alternate === null) {
            // We matched the slot, but we didn't reuse the existing fiber, so we
            // need to delete the existing child.
            deleteChild(returnFiber, oldFiber);
          }
        }

        lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = newFiber;
        } else {
          // TODO: Defer siblings if we're not at the right index for this slot.
          // I.e. if we had null values before, then we want to defer this
          // for each null value. However, we also don't want to call updateSlot
          // with the previous one.
          previousNewFiber.sibling = newFiber;
        }

        previousNewFiber = newFiber;
        oldFiber = nextOldFiber;
      }

      if (step.done) {
        // We've reached the end of the new children. We can delete the rest.
        deleteRemainingChildren(returnFiber, oldFiber);
        return resultingFirstChild;
      }

      if (oldFiber === null) {
        // If we don't have any more existing children we can choose a fast path
        // since the rest will all be insertions.
        for (; !step.done; newIdx++, step = newChildren.next()) {
          var _newFiber3 = createChild(returnFiber, step.value, lanes);

          if (_newFiber3 === null) {
            continue;
          }

          lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);

          if (previousNewFiber === null) {
            // TODO: Move out of the loop. This only happens for the first run.
            resultingFirstChild = _newFiber3;
          } else {
            previousNewFiber.sibling = _newFiber3;
          }

          previousNewFiber = _newFiber3;
        }

        return resultingFirstChild;
      } // Add all children to a key map for quick lookups.


      var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

      for (; !step.done; newIdx++, step = newChildren.next()) {
        var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);

        if (_newFiber4 !== null) {
          if (shouldTrackSideEffects) {
            if (_newFiber4.alternate !== null) {
              // The new fiber is a work in progress, but if there exists a
              // current, that means that we reused the fiber. We need to delete
              // it from the child list so that we don't add it to the deletion
              // list.
              existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
            }
          }

          lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);

          if (previousNewFiber === null) {
            resultingFirstChild = _newFiber4;
          } else {
            previousNewFiber.sibling = _newFiber4;
          }

          previousNewFiber = _newFiber4;
        }
      }

      if (shouldTrackSideEffects) {
        // Any existing children that weren't consumed above were deleted. We need
        // to add them to the deletion list.
        existingChildren.forEach(function (child) {
          return deleteChild(returnFiber, child);
        });
      }

      return resultingFirstChild;
    }

    function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
      // There's no need to check for keys on text nodes since we don't have a
      // way to define them.
      if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
        // We already have an existing node so let's just update it and delete
        // the rest.
        deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
        var existing = useFiber(currentFirstChild, textContent);
        existing.return = returnFiber;
        return existing;
      } // The existing first child is not a text node so we need to create one
      // and delete the existing ones.


      deleteRemainingChildren(returnFiber, currentFirstChild);
      var created = createFiberFromText(textContent, returnFiber.mode, lanes);
      created.return = returnFiber;
      return created;
    }

    function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
      var key = element.key;
      var child = currentFirstChild;

      while (child !== null) {
        // TODO: If key === null and child.key === null, then this only applies to
        // the first item in the list.
        if (child.key === key) {
          switch (child.tag) {
            case Fragment:
              {
                if (element.type === REACT_FRAGMENT_TYPE) {
                  deleteRemainingChildren(returnFiber, child.sibling);
                  var existing = useFiber(child, element.props.children);
                  existing.return = returnFiber;

                  {
                    existing._debugSource = element._source;
                    existing._debugOwner = element._owner;
                  }

                  return existing;
                }

                break;
              }

            case Block:

            // We intentionally fallthrough here if enableBlocksAPI is not on.
            // eslint-disable-next-lined no-fallthrough

            default:
              {
                if (child.elementType === element.type || ( // Keep this check inline so it only runs on the false path:
                 isCompatibleFamilyForHotReloading(child, element) )) {
                  deleteRemainingChildren(returnFiber, child.sibling);

                  var _existing3 = useFiber(child, element.props);

                  _existing3.ref = coerceRef(returnFiber, child, element);
                  _existing3.return = returnFiber;

                  {
                    _existing3._debugSource = element._source;
                    _existing3._debugOwner = element._owner;
                  }

                  return _existing3;
                }

                break;
              }
          } // Didn't match.


          deleteRemainingChildren(returnFiber, child);
          break;
        } else {
          deleteChild(returnFiber, child);
        }

        child = child.sibling;
      }

      if (element.type === REACT_FRAGMENT_TYPE) {
        var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
        created.return = returnFiber;
        return created;
      } else {
        var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);

        _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
        _created4.return = returnFiber;
        return _created4;
      }
    }

    function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
      var key = portal.key;
      var child = currentFirstChild;

      while (child !== null) {
        // TODO: If key === null and child.key === null, then this only applies to
        // the first item in the list.
        if (child.key === key) {
          if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
            deleteRemainingChildren(returnFiber, child.sibling);
            var existing = useFiber(child, portal.children || []);
            existing.return = returnFiber;
            return existing;
          } else {
            deleteRemainingChildren(returnFiber, child);
            break;
          }
        } else {
          deleteChild(returnFiber, child);
        }

        child = child.sibling;
      }

      var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
      created.return = returnFiber;
      return created;
    } // This API will tag the children with the side-effect of the reconciliation
    // itself. They will be added to the side-effect list as we pass through the
    // children and the parent.


    function reconcileChildFibers(returnFiber, currentFirstChild, newChild, lanes) {
      // This function is not recursive.
      // If the top level item is an array, we treat it as a set of children,
      // not as a fragment. Nested arrays on the other hand will be treated as
      // fragment nodes. Recursion happens at the normal flow.
      // Handle top level unkeyed fragments as if they were arrays.
      // This leads to an ambiguity between <>{[...]}</> and <>...</>.
      // We treat the ambiguous cases above the same.
      var isUnkeyedTopLevelFragment = typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;

      if (isUnkeyedTopLevelFragment) {
        newChild = newChild.props.children;
      } // Handle object types


      var isObject = typeof newChild === 'object' && newChild !== null;

      if (isObject) {
        switch (newChild.$$typeof) {
          case REACT_ELEMENT_TYPE:
            return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));

          case REACT_PORTAL_TYPE:
            return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));

        }
      }

      if (typeof newChild === 'string' || typeof newChild === 'number') {
        return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, lanes));
      }

      if (isArray$1(newChild)) {
        return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
      }

      if (getIteratorFn(newChild)) {
        return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
      }

      if (isObject) {
        throwOnInvalidObjectType(returnFiber, newChild);
      }

      {
        if (typeof newChild === 'function') {
          warnOnFunctionType(returnFiber);
        }
      }

      if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
        // If the new child is undefined, and the return fiber is a composite
        // component, throw an error. If Fiber return types are disabled,
        // we already threw above.
        switch (returnFiber.tag) {
          case ClassComponent:
            {
              {
                var instance = returnFiber.stateNode;

                if (instance.render._isMockFunction) {
                  // We allow auto-mocks to proceed as if they're returning null.
                  break;
                }
              }
            }
          // Intentionally fall through to the next case, which handles both
          // functions and classes
          // eslint-disable-next-lined no-fallthrough

          case Block:
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
            {
              {
                {
                  throw Error( (getComponentName(returnFiber.type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
                }
              }
            }
        }
      } // Remaining cases are all treated as empty.


      return deleteRemainingChildren(returnFiber, currentFirstChild);
    }

    return reconcileChildFibers;
  }

  var reconcileChildFibers = ChildReconciler(true);
  var mountChildFibers = ChildReconciler(false);
  function cloneChildFibers(current, workInProgress) {
    if (!(current === null || workInProgress.child === current.child)) {
      {
        throw Error( "Resuming work not yet implemented." );
      }
    }

    if (workInProgress.child === null) {
      return;
    }

    var currentChild = workInProgress.child;
    var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
    workInProgress.child = newChild;
    newChild.return = workInProgress;

    while (currentChild.sibling !== null) {
      currentChild = currentChild.sibling;
      newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
      newChild.return = workInProgress;
    }

    newChild.sibling = null;
  } // Reset a workInProgress child set to prepare it for a second pass.

  function resetChildFibers(workInProgress, lanes) {
    var child = workInProgress.child;

    while (child !== null) {
      resetWorkInProgress(child, lanes);
      child = child.sibling;
    }
  }

  var NO_CONTEXT = {};
  var contextStackCursor$1 = createCursor(NO_CONTEXT);
  var contextFiberStackCursor = createCursor(NO_CONTEXT);
  var rootInstanceStackCursor = createCursor(NO_CONTEXT);

  function requiredContext(c) {
    if (!(c !== NO_CONTEXT)) {
      {
        throw Error( "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    return c;
  }

  function getRootHostContainer() {
    var rootInstance = requiredContext(rootInstanceStackCursor.current);
    return rootInstance;
  }

  function pushHostContainer(fiber, nextRootInstance) {
    // Push current root instance onto the stack;
    // This allows us to reset root when portals are popped.
    push(rootInstanceStackCursor, nextRootInstance, fiber); // Track the context and the Fiber that provided it.
    // This enables us to pop only Fibers that provide unique contexts.

    push(contextFiberStackCursor, fiber, fiber); // Finally, we need to push the host context to the stack.
    // However, we can't just call getRootHostContext() and push it because
    // we'd have a different number of entries on the stack depending on
    // whether getRootHostContext() throws somewhere in renderer code or not.
    // So we push an empty value first. This lets us safely unwind on errors.

    push(contextStackCursor$1, NO_CONTEXT, fiber);
    var nextRootContext = getRootHostContext(nextRootInstance); // Now that we know this function doesn't throw, replace it.

    pop(contextStackCursor$1, fiber);
    push(contextStackCursor$1, nextRootContext, fiber);
  }

  function popHostContainer(fiber) {
    pop(contextStackCursor$1, fiber);
    pop(contextFiberStackCursor, fiber);
    pop(rootInstanceStackCursor, fiber);
  }

  function getHostContext() {
    var context = requiredContext(contextStackCursor$1.current);
    return context;
  }

  function pushHostContext(fiber) {
    var rootInstance = requiredContext(rootInstanceStackCursor.current);
    var context = requiredContext(contextStackCursor$1.current);
    var nextContext = getChildHostContext(context, fiber.type, rootInstance); // Don't push this Fiber's context unless it's unique.

    if (context === nextContext) {
      return;
    } // Track the context and the Fiber that provided it.
    // This enables us to pop only Fibers that provide unique contexts.


    push(contextFiberStackCursor, fiber, fiber);
    push(contextStackCursor$1, nextContext, fiber);
  }

  function popHostContext(fiber) {
    // Do not pop unless this Fiber provided the current context.
    // pushHostContext() only pushes Fibers that provide unique contexts.
    if (contextFiberStackCursor.current !== fiber) {
      return;
    }

    pop(contextStackCursor$1, fiber);
    pop(contextFiberStackCursor, fiber);
  }

  var DefaultSuspenseContext = 0; // The Suspense Context is split into two parts. The lower bits is
  // inherited deeply down the subtree. The upper bits only affect
  // this immediate suspense boundary and gets reset each new
  // boundary or suspense list.

  var SubtreeSuspenseContextMask = 1; // Subtree Flags:
  // InvisibleParentSuspenseContext indicates that one of our parent Suspense
  // boundaries is not currently showing visible main content.
  // Either because it is already showing a fallback or is not mounted at all.
  // We can use this to determine if it is desirable to trigger a fallback at
  // the parent. If not, then we might need to trigger undesirable boundaries
  // and/or suspend the commit to avoid hiding the parent content.

  var InvisibleParentSuspenseContext = 1; // Shallow Flags:
  // ForceSuspenseFallback can be used by SuspenseList to force newly added
  // items into their fallback state during one of the render passes.

  var ForceSuspenseFallback = 2;
  var suspenseStackCursor = createCursor(DefaultSuspenseContext);
  function hasSuspenseContext(parentContext, flag) {
    return (parentContext & flag) !== 0;
  }
  function setDefaultShallowSuspenseContext(parentContext) {
    return parentContext & SubtreeSuspenseContextMask;
  }
  function setShallowSuspenseContext(parentContext, shallowContext) {
    return parentContext & SubtreeSuspenseContextMask | shallowContext;
  }
  function addSubtreeSuspenseContext(parentContext, subtreeContext) {
    return parentContext | subtreeContext;
  }
  function pushSuspenseContext(fiber, newContext) {
    push(suspenseStackCursor, newContext, fiber);
  }
  function popSuspenseContext(fiber) {
    pop(suspenseStackCursor, fiber);
  }

  function shouldCaptureSuspense(workInProgress, hasInvisibleParent) {
    // If it was the primary children that just suspended, capture and render the
    // fallback. Otherwise, don't capture and bubble to the next boundary.
    var nextState = workInProgress.memoizedState;

    if (nextState !== null) {
      if (nextState.dehydrated !== null) {
        // A dehydrated boundary always captures.
        return true;
      }

      return false;
    }

    var props = workInProgress.memoizedProps; // In order to capture, the Suspense component must have a fallback prop.

    if (props.fallback === undefined) {
      return false;
    } // Regular boundaries always capture.


    if (props.unstable_avoidThisFallback !== true) {
      return true;
    } // If it's a boundary we should avoid, then we prefer to bubble up to the
    // parent boundary if it is currently invisible.


    if (hasInvisibleParent) {
      return false;
    } // If the parent is not able to handle it, we must handle it.


    return true;
  }
  function findFirstSuspended(row) {
    var node = row;

    while (node !== null) {
      if (node.tag === SuspenseComponent) {
        var state = node.memoizedState;

        if (state !== null) {
          var dehydrated = state.dehydrated;

          if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
            return node;
          }
        }
      } else if (node.tag === SuspenseListComponent && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      node.memoizedProps.revealOrder !== undefined) {
        var didSuspend = (node.flags & DidCapture) !== NoFlags;

        if (didSuspend) {
          return node;
        }
      } else if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === row) {
        return null;
      }

      while (node.sibling === null) {
        if (node.return === null || node.return === row) {
          return null;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    }

    return null;
  }

  var NoFlags$1 =
  /*  */
  0; // Represents whether effect should fire.

  var HasEffect =
  /* */
  1; // Represents the phase in which the effect (not the clean-up) fires.

  var Layout =
  /*    */
  2;
  var Passive$1 =
  /*   */
  4;

  // This may have been an insertion or a hydration.

  var hydrationParentFiber = null;
  var nextHydratableInstance = null;
  var isHydrating = false;

  function enterHydrationState(fiber) {
    if (!supportsHydration) {
      return false;
    }

    var parentInstance = fiber.stateNode.containerInfo;
    nextHydratableInstance = getFirstHydratableChild(parentInstance);
    hydrationParentFiber = fiber;
    isHydrating = true;
    return true;
  }

  function deleteHydratableInstance(returnFiber, instance) {
    {
      switch (returnFiber.tag) {
        case HostRoot:
          didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
          break;

        case HostComponent:
          didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
          break;
      }
    }

    var childToDelete = createFiberFromHostInstanceForDeletion();
    childToDelete.stateNode = instance;
    childToDelete.return = returnFiber;
    childToDelete.flags = Deletion; // This might seem like it belongs on progressedFirstDeletion. However,
    // these children are not part of the reconciliation list of children.
    // Even if we abort and rereconcile the children, that will try to hydrate
    // again and the nodes are still in the host tree so these will be
    // recreated.

    if (returnFiber.lastEffect !== null) {
      returnFiber.lastEffect.nextEffect = childToDelete;
      returnFiber.lastEffect = childToDelete;
    } else {
      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
    }
  }

  function insertNonHydratedInstance(returnFiber, fiber) {
    fiber.flags = fiber.flags & ~Hydrating | Placement;

    {
      switch (returnFiber.tag) {
        case HostRoot:
          {
            var parentContainer = returnFiber.stateNode.containerInfo;

            switch (fiber.tag) {
              case HostComponent:
                var type = fiber.type;
                var props = fiber.pendingProps;
                didNotFindHydratableContainerInstance(parentContainer, type, props);
                break;

              case HostText:
                var text = fiber.pendingProps;
                didNotFindHydratableContainerTextInstance(parentContainer, text);
                break;

              case SuspenseComponent:
                didNotFindHydratableContainerSuspenseInstance(parentContainer);
                break;
            }

            break;
          }

        case HostComponent:
          {
            var parentType = returnFiber.type;
            var parentProps = returnFiber.memoizedProps;
            var parentInstance = returnFiber.stateNode;

            switch (fiber.tag) {
              case HostComponent:
                var _type = fiber.type;
                var _props = fiber.pendingProps;
                didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
                break;

              case HostText:
                var _text = fiber.pendingProps;
                didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                break;

              case SuspenseComponent:
                didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance);
                break;
            }

            break;
          }

        default:
          return;
      }
    }
  }

  function tryHydrate(fiber, nextInstance) {
    switch (fiber.tag) {
      case HostComponent:
        {
          var type = fiber.type;
          var props = fiber.pendingProps;
          var instance = canHydrateInstance(nextInstance, type, props);

          if (instance !== null) {
            fiber.stateNode = instance;
            return true;
          }

          return false;
        }

      case HostText:
        {
          var text = fiber.pendingProps;
          var textInstance = canHydrateTextInstance(nextInstance, text);

          if (textInstance !== null) {
            fiber.stateNode = textInstance;
            return true;
          }

          return false;
        }

      case SuspenseComponent:
        {

          return false;
        }

      default:
        return false;
    }
  }

  function tryToClaimNextHydratableInstance(fiber) {
    if (!isHydrating) {
      return;
    }

    var nextInstance = nextHydratableInstance;

    if (!nextInstance) {
      // Nothing to hydrate. Make it an insertion.
      insertNonHydratedInstance(hydrationParentFiber, fiber);
      isHydrating = false;
      hydrationParentFiber = fiber;
      return;
    }

    var firstAttemptedInstance = nextInstance;

    if (!tryHydrate(fiber, nextInstance)) {
      // If we can't hydrate this instance let's try the next one.
      // We use this as a heuristic. It's based on intuition and not data so it
      // might be flawed or unnecessary.
      nextInstance = getNextHydratableSibling(firstAttemptedInstance);

      if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
        // Nothing to hydrate. Make it an insertion.
        insertNonHydratedInstance(hydrationParentFiber, fiber);
        isHydrating = false;
        hydrationParentFiber = fiber;
        return;
      } // We matched the next one, we'll now assume that the first one was
      // superfluous and we'll delete it. Since we can't eagerly delete it
      // we'll have to schedule a deletion. To do that, this node needs a dummy
      // fiber associated with it.


      deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
    }

    hydrationParentFiber = fiber;
    nextHydratableInstance = getFirstHydratableChild(nextInstance);
  }

  function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
    if (!supportsHydration) {
      {
        {
          throw Error( "Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue." );
        }
      }
    }

    var instance = fiber.stateNode;
    var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber); // TODO: Type this specific to this type of component.

    fiber.updateQueue = updatePayload; // If the update payload indicates that there is a change or if there
    // is a new ref we mark this as an update.

    if (updatePayload !== null) {
      return true;
    }

    return false;
  }

  function prepareToHydrateHostTextInstance(fiber) {
    if (!supportsHydration) {
      {
        {
          throw Error( "Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue." );
        }
      }
    }

    var textInstance = fiber.stateNode;
    var textContent = fiber.memoizedProps;
    var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);

    {
      if (shouldUpdate) {
        // We assume that prepareToHydrateHostTextInstance is called in a context where the
        // hydration parent is the parent host component of this host text.
        var returnFiber = hydrationParentFiber;

        if (returnFiber !== null) {
          switch (returnFiber.tag) {
            case HostRoot:
              {
                var parentContainer = returnFiber.stateNode.containerInfo;
                didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                break;
              }

            case HostComponent:
              {
                var parentType = returnFiber.type;
                var parentProps = returnFiber.memoizedProps;
                var parentInstance = returnFiber.stateNode;
                didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                break;
              }
          }
        }
      }
    }

    return shouldUpdate;
  }

  function skipPastDehydratedSuspenseInstance(fiber) {
    if (!supportsHydration) {
      {
        {
          throw Error( "Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue." );
        }
      }
    }

    var suspenseState = fiber.memoizedState;
    var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;

    if (!suspenseInstance) {
      {
        throw Error( "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
  }

  function popToNextHostParent(fiber) {
    var parent = fiber.return;

    while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent) {
      parent = parent.return;
    }

    hydrationParentFiber = parent;
  }

  function popHydrationState(fiber) {
    if (!supportsHydration) {
      return false;
    }

    if (fiber !== hydrationParentFiber) {
      // We're deeper than the current hydration context, inside an inserted
      // tree.
      return false;
    }

    if (!isHydrating) {
      // If we're not currently hydrating but we're in a hydration context, then
      // we were an insertion and now need to pop up reenter hydration of our
      // siblings.
      popToNextHostParent(fiber);
      isHydrating = true;
      return false;
    }

    var type = fiber.type; // If we have any remaining hydratable nodes, we need to delete them now.
    // We only do this deeper than head and body since they tend to have random
    // other nodes in them. We also ignore components with pure text content in
    // side of them.
    // TODO: Better heuristic.

    if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
      var nextInstance = nextHydratableInstance;

      while (nextInstance) {
        deleteHydratableInstance(fiber, nextInstance);
        nextInstance = getNextHydratableSibling(nextInstance);
      }
    }

    popToNextHostParent(fiber);

    if (fiber.tag === SuspenseComponent) {
      nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
    } else {
      nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
    }

    return true;
  }

  function resetHydrationState() {
    if (!supportsHydration) {
      return;
    }

    hydrationParentFiber = null;
    nextHydratableInstance = null;
    isHydrating = false;
  }

  function getIsHydrating() {
    return isHydrating;
  }

  // and should be reset before starting a new render.
  // This tracks which mutable sources need to be reset after a render.

  var workInProgressSources = [];
  var rendererSigil$1;

  {
    // Used to detect multiple renderers using the same mutable source.
    rendererSigil$1 = {};
  }

  function markSourceAsDirty(mutableSource) {
    workInProgressSources.push(mutableSource);
  }
  function resetWorkInProgressVersions() {
    for (var i = 0; i < workInProgressSources.length; i++) {
      var mutableSource = workInProgressSources[i];

      if (isPrimaryRenderer) {
        mutableSource._workInProgressVersionPrimary = null;
      } else {
        mutableSource._workInProgressVersionSecondary = null;
      }
    }

    workInProgressSources.length = 0;
  }
  function getWorkInProgressVersion(mutableSource) {
    if (isPrimaryRenderer) {
      return mutableSource._workInProgressVersionPrimary;
    } else {
      return mutableSource._workInProgressVersionSecondary;
    }
  }
  function setWorkInProgressVersion(mutableSource, version) {
    if (isPrimaryRenderer) {
      mutableSource._workInProgressVersionPrimary = version;
    } else {
      mutableSource._workInProgressVersionSecondary = version;
    }

    workInProgressSources.push(mutableSource);
  }
  function warnAboutMultipleRenderersDEV(mutableSource) {
    {
      if (isPrimaryRenderer) {
        if (mutableSource._currentPrimaryRenderer == null) {
          mutableSource._currentPrimaryRenderer = rendererSigil$1;
        } else if (mutableSource._currentPrimaryRenderer !== rendererSigil$1) {
          error('Detected multiple renderers concurrently rendering the ' + 'same mutable source. This is currently unsupported.');
        }
      } else {
        if (mutableSource._currentSecondaryRenderer == null) {
          mutableSource._currentSecondaryRenderer = rendererSigil$1;
        } else if (mutableSource._currentSecondaryRenderer !== rendererSigil$1) {
          error('Detected multiple renderers concurrently rendering the ' + 'same mutable source. This is currently unsupported.');
        }
      }
    }
  } // Eager reads the version of a mutable source and stores it on the root.

  var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
      ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
  var didWarnAboutMismatchedHooksForComponent;
  var didWarnAboutUseOpaqueIdentifier;

  {
    didWarnAboutUseOpaqueIdentifier = {};
    didWarnAboutMismatchedHooksForComponent = new Set();
  }

  // These are set right before calling the component.
  var renderLanes = NoLanes; // The work-in-progress fiber. I've named it differently to distinguish it from
  // the work-in-progress hook.

  var currentlyRenderingFiber$1 = null; // Hooks are stored as a linked list on the fiber's memoizedState field. The
  // current hook list is the list that belongs to the current fiber. The
  // work-in-progress hook list is a new list that will be added to the
  // work-in-progress fiber.

  var currentHook = null;
  var workInProgressHook = null; // Whether an update was scheduled at any point during the render phase. This
  // does not get reset if we do another render pass; only when we're completely
  // finished evaluating this component. This is an optimization so we know
  // whether we need to clear render phase updates after a throw.

  var didScheduleRenderPhaseUpdate = false; // Where an update was scheduled only during the current render pass. This
  // gets reset after each attempt.
  // TODO: Maybe there's some way to consolidate this with
  // `didScheduleRenderPhaseUpdate`. Or with `numberOfReRenders`.

  var didScheduleRenderPhaseUpdateDuringThisPass = false;
  var RE_RENDER_LIMIT = 25; // In DEV, this is the name of the currently executing primitive hook

  var currentHookNameInDev = null; // In DEV, this list ensures that hooks are called in the same order between renders.
  // The list stores the order of hooks used during the initial render (mount).
  // Subsequent renders (updates) reference this list.

  var hookTypesDev = null;
  var hookTypesUpdateIndexDev = -1; // In DEV, this tracks whether currently rendering component needs to ignore
  // the dependencies for Hooks that need them (e.g. useEffect or useMemo).
  // When true, such Hooks will always be "remounted". Only used during hot reload.

  var ignorePreviousDependencies = false;

  function mountHookTypesDev() {
    {
      var hookName = currentHookNameInDev;

      if (hookTypesDev === null) {
        hookTypesDev = [hookName];
      } else {
        hookTypesDev.push(hookName);
      }
    }
  }

  function updateHookTypesDev() {
    {
      var hookName = currentHookNameInDev;

      if (hookTypesDev !== null) {
        hookTypesUpdateIndexDev++;

        if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
          warnOnHookMismatchInDev(hookName);
        }
      }
    }
  }

  function checkDepsAreArrayDev(deps) {
    {
      if (deps !== undefined && deps !== null && !Array.isArray(deps)) {
        // Verify deps, but only on mount to avoid extra checks.
        // It's unlikely their type would change as usually you define them inline.
        error('%s received a final argument that is not an array (instead, received `%s`). When ' + 'specified, the final argument must be an array.', currentHookNameInDev, typeof deps);
      }
    }
  }

  function warnOnHookMismatchInDev(currentHookName) {
    {
      var componentName = getComponentName(currentlyRenderingFiber$1.type);

      if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
        didWarnAboutMismatchedHooksForComponent.add(componentName);

        if (hookTypesDev !== null) {
          var table = '';
          var secondColumnStart = 30;

          for (var i = 0; i <= hookTypesUpdateIndexDev; i++) {
            var oldHookName = hookTypesDev[i];
            var newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
            var row = i + 1 + ". " + oldHookName; // Extra space so second column lines up
            // lol @ IE not supporting String#repeat

            while (row.length < secondColumnStart) {
              row += ' ';
            }

            row += newHookName + '\n';
            table += row;
          }

          error('React has detected a change in the order of Hooks called by %s. ' + 'This will lead to bugs and errors if not fixed. ' + 'For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n' + '   Previous render            Next render\n' + '   ------------------------------------------------------\n' + '%s' + '   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n', componentName, table);
        }
      }
    }
  }

  function throwInvalidHookError() {
    {
      {
        throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
      }
    }
  }

  function areHookInputsEqual(nextDeps, prevDeps) {
    {
      if (ignorePreviousDependencies) {
        // Only true when this component is being hot reloaded.
        return false;
      }
    }

    if (prevDeps === null) {
      {
        error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
      }

      return false;
    }

    {
      // Don't bother comparing lengths in prod because these arrays should be
      // passed inline.
      if (nextDeps.length !== prevDeps.length) {
        error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + prevDeps.join(', ') + "]", "[" + nextDeps.join(', ') + "]");
      }
    }

    for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
      if (objectIs(nextDeps[i], prevDeps[i])) {
        continue;
      }

      return false;
    }

    return true;
  }

  function renderWithHooks(current, workInProgress, Component, props, secondArg, nextRenderLanes) {
    renderLanes = nextRenderLanes;
    currentlyRenderingFiber$1 = workInProgress;

    {
      hookTypesDev = current !== null ? current._debugHookTypes : null;
      hookTypesUpdateIndexDev = -1; // Used for hot reloading:

      ignorePreviousDependencies = current !== null && current.type !== workInProgress.type;
    }

    workInProgress.memoizedState = null;
    workInProgress.updateQueue = null;
    workInProgress.lanes = NoLanes; // The following should have already been reset
    // currentHook = null;
    // workInProgressHook = null;
    // didScheduleRenderPhaseUpdate = false;
    // TODO Warn if no hooks are used at all during mount, then some are used during update.
    // Currently we will identify the update render as a mount because memoizedState === null.
    // This is tricky because it's valid for certain types of components (e.g. React.lazy)
    // Using memoizedState to differentiate between mount/update only works if at least one stateful hook is used.
    // Non-stateful hooks (e.g. context) don't get added to memoizedState,
    // so memoizedState would be null during updates and mounts.

    {
      if (current !== null && current.memoizedState !== null) {
        ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
      } else if (hookTypesDev !== null) {
        // This dispatcher handles an edge case where a component is updating,
        // but no stateful hooks have been used.
        // We want to match the production code behavior (which will use HooksDispatcherOnMount),
        // but with the extra DEV validation to ensure hooks ordering hasn't changed.
        // This dispatcher does that.
        ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
      } else {
        ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
      }
    }

    var children = Component(props, secondArg); // Check if there was a render phase update

    if (didScheduleRenderPhaseUpdateDuringThisPass) {
      // Keep rendering in a loop for as long as render phase updates continue to
      // be scheduled. Use a counter to prevent infinite loops.
      var numberOfReRenders = 0;

      do {
        didScheduleRenderPhaseUpdateDuringThisPass = false;

        if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
          {
            throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
          }
        }

        numberOfReRenders += 1;

        {
          // Even when hot reloading, allow dependencies to stabilize
          // after first render to prevent infinite render phase updates.
          ignorePreviousDependencies = false;
        } // Start over from the beginning of the list


        currentHook = null;
        workInProgressHook = null;
        workInProgress.updateQueue = null;

        {
          // Also validate hook order for cascading updates.
          hookTypesUpdateIndexDev = -1;
        }

        ReactCurrentDispatcher$1.current =  HooksDispatcherOnRerenderInDEV ;
        children = Component(props, secondArg);
      } while (didScheduleRenderPhaseUpdateDuringThisPass);
    } // We can assume the previous dispatcher is always this one, since we set it
    // at the beginning of the render phase and there's no re-entrancy.


    ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;

    {
      workInProgress._debugHookTypes = hookTypesDev;
    } // This check uses currentHook so that it works the same in DEV and prod bundles.
    // hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.


    var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
    renderLanes = NoLanes;
    currentlyRenderingFiber$1 = null;
    currentHook = null;
    workInProgressHook = null;

    {
      currentHookNameInDev = null;
      hookTypesDev = null;
      hookTypesUpdateIndexDev = -1;
    }

    didScheduleRenderPhaseUpdate = false;

    if (!!didRenderTooFewHooks) {
      {
        throw Error( "Rendered fewer hooks than expected. This may be caused by an accidental early return statement." );
      }
    }

    return children;
  }
  function bailoutHooks(current, workInProgress, lanes) {
    workInProgress.updateQueue = current.updateQueue;
    workInProgress.flags &= ~(Passive | Update);
    current.lanes = removeLanes(current.lanes, lanes);
  }
  function resetHooksAfterThrow() {
    // We can assume the previous dispatcher is always this one, since we set it
    // at the beginning of the render phase and there's no re-entrancy.
    ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;

    if (didScheduleRenderPhaseUpdate) {
      // There were render phase updates. These are only valid for this render
      // phase, which we are now aborting. Remove the updates from the queues so
      // they do not persist to the next render. Do not remove updates from hooks
      // that weren't processed.
      //
      // Only reset the updates from the queue if it has a clone. If it does
      // not have a clone, that means it wasn't processed, and the updates were
      // scheduled before we entered the render phase.
      var hook = currentlyRenderingFiber$1.memoizedState;

      while (hook !== null) {
        var queue = hook.queue;

        if (queue !== null) {
          queue.pending = null;
        }

        hook = hook.next;
      }

      didScheduleRenderPhaseUpdate = false;
    }

    renderLanes = NoLanes;
    currentlyRenderingFiber$1 = null;
    currentHook = null;
    workInProgressHook = null;

    {
      hookTypesDev = null;
      hookTypesUpdateIndexDev = -1;
      currentHookNameInDev = null;
      isUpdatingOpaqueValueInRenderPhase = false;
    }

    didScheduleRenderPhaseUpdateDuringThisPass = false;
  }

  function mountWorkInProgressHook() {
    var hook = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };

    if (workInProgressHook === null) {
      // This is the first hook in the list
      currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
    } else {
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = hook;
    }

    return workInProgressHook;
  }

  function updateWorkInProgressHook() {
    // This function is used both for updates and for re-renders triggered by a
    // render phase update. It assumes there is either a current hook we can
    // clone, or a work-in-progress hook from a previous render pass that we can
    // use as a base. When we reach the end of the base list, we must switch to
    // the dispatcher used for mounts.
    var nextCurrentHook;

    if (currentHook === null) {
      var current = currentlyRenderingFiber$1.alternate;

      if (current !== null) {
        nextCurrentHook = current.memoizedState;
      } else {
        nextCurrentHook = null;
      }
    } else {
      nextCurrentHook = currentHook.next;
    }

    var nextWorkInProgressHook;

    if (workInProgressHook === null) {
      nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
    } else {
      nextWorkInProgressHook = workInProgressHook.next;
    }

    if (nextWorkInProgressHook !== null) {
      // There's already a work-in-progress. Reuse it.
      workInProgressHook = nextWorkInProgressHook;
      nextWorkInProgressHook = workInProgressHook.next;
      currentHook = nextCurrentHook;
    } else {
      // Clone from the current hook.
      if (!(nextCurrentHook !== null)) {
        {
          throw Error( "Rendered more hooks than during the previous render." );
        }
      }

      currentHook = nextCurrentHook;
      var newHook = {
        memoizedState: currentHook.memoizedState,
        baseState: currentHook.baseState,
        baseQueue: currentHook.baseQueue,
        queue: currentHook.queue,
        next: null
      };

      if (workInProgressHook === null) {
        // This is the first hook in the list.
        currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
      } else {
        // Append to the end of the list.
        workInProgressHook = workInProgressHook.next = newHook;
      }
    }

    return workInProgressHook;
  }

  function createFunctionComponentUpdateQueue() {
    return {
      lastEffect: null
    };
  }

  function basicStateReducer(state, action) {
    // $FlowFixMe: Flow doesn't like mixed types
    return typeof action === 'function' ? action(state) : action;
  }

  function mountReducer(reducer, initialArg, init) {
    var hook = mountWorkInProgressHook();
    var initialState;

    if (init !== undefined) {
      initialState = init(initialArg);
    } else {
      initialState = initialArg;
    }

    hook.memoizedState = hook.baseState = initialState;
    var queue = hook.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: reducer,
      lastRenderedState: initialState
    };
    var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
    return [hook.memoizedState, dispatch];
  }

  function updateReducer(reducer, initialArg, init) {
    var hook = updateWorkInProgressHook();
    var queue = hook.queue;

    if (!(queue !== null)) {
      {
        throw Error( "Should have a queue. This is likely a bug in React. Please file an issue." );
      }
    }

    queue.lastRenderedReducer = reducer;
    var current = currentHook; // The last rebase update that is NOT part of the base state.

    var baseQueue = current.baseQueue; // The last pending update that hasn't been processed yet.

    var pendingQueue = queue.pending;

    if (pendingQueue !== null) {
      // We have new updates that haven't been processed yet.
      // We'll add them to the base queue.
      if (baseQueue !== null) {
        // Merge the pending queue and the base queue.
        var baseFirst = baseQueue.next;
        var pendingFirst = pendingQueue.next;
        baseQueue.next = pendingFirst;
        pendingQueue.next = baseFirst;
      }

      {
        if (current.baseQueue !== baseQueue) {
          // Internal invariant that should never happen, but feasibly could in
          // the future if we implement resuming, or some form of that.
          error('Internal error: Expected work-in-progress queue to be a clone. ' + 'This is a bug in React.');
        }
      }

      current.baseQueue = baseQueue = pendingQueue;
      queue.pending = null;
    }

    if (baseQueue !== null) {
      // We have a queue to process.
      var first = baseQueue.next;
      var newState = current.baseState;
      var newBaseState = null;
      var newBaseQueueFirst = null;
      var newBaseQueueLast = null;
      var update = first;

      do {
        var updateLane = update.lane;

        if (!isSubsetOfLanes(renderLanes, updateLane)) {
          // Priority is insufficient. Skip this update. If this is the first
          // skipped update, the previous update/state is the new base
          // update/state.
          var clone = {
            lane: updateLane,
            action: update.action,
            eagerReducer: update.eagerReducer,
            eagerState: update.eagerState,
            next: null
          };

          if (newBaseQueueLast === null) {
            newBaseQueueFirst = newBaseQueueLast = clone;
            newBaseState = newState;
          } else {
            newBaseQueueLast = newBaseQueueLast.next = clone;
          } // Update the remaining priority in the queue.
          // TODO: Don't need to accumulate this. Instead, we can remove
          // renderLanes from the original lanes.


          currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
          markSkippedUpdateLanes(updateLane);
        } else {
          // This update does have sufficient priority.
          if (newBaseQueueLast !== null) {
            var _clone = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: NoLane,
              action: update.action,
              eagerReducer: update.eagerReducer,
              eagerState: update.eagerState,
              next: null
            };
            newBaseQueueLast = newBaseQueueLast.next = _clone;
          } // Process this update.


          if (update.eagerReducer === reducer) {
            // If this update was processed eagerly, and its reducer matches the
            // current reducer, we can use the eagerly computed state.
            newState = update.eagerState;
          } else {
            var action = update.action;
            newState = reducer(newState, action);
          }
        }

        update = update.next;
      } while (update !== null && update !== first);

      if (newBaseQueueLast === null) {
        newBaseState = newState;
      } else {
        newBaseQueueLast.next = newBaseQueueFirst;
      } // Mark that the fiber performed work, but only if the new state is
      // different from the current state.


      if (!objectIs(newState, hook.memoizedState)) {
        markWorkInProgressReceivedUpdate();
      }

      hook.memoizedState = newState;
      hook.baseState = newBaseState;
      hook.baseQueue = newBaseQueueLast;
      queue.lastRenderedState = newState;
    }

    var dispatch = queue.dispatch;
    return [hook.memoizedState, dispatch];
  }

  function rerenderReducer(reducer, initialArg, init) {
    var hook = updateWorkInProgressHook();
    var queue = hook.queue;

    if (!(queue !== null)) {
      {
        throw Error( "Should have a queue. This is likely a bug in React. Please file an issue." );
      }
    }

    queue.lastRenderedReducer = reducer; // This is a re-render. Apply the new render phase updates to the previous
    // work-in-progress hook.

    var dispatch = queue.dispatch;
    var lastRenderPhaseUpdate = queue.pending;
    var newState = hook.memoizedState;

    if (lastRenderPhaseUpdate !== null) {
      // The queue doesn't persist past this render pass.
      queue.pending = null;
      var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      var update = firstRenderPhaseUpdate;

      do {
        // Process this render phase update. We don't have to check the
        // priority because it will always be the same as the current
        // render's.
        var action = update.action;
        newState = reducer(newState, action);
        update = update.next;
      } while (update !== firstRenderPhaseUpdate); // Mark that the fiber performed work, but only if the new state is
      // different from the current state.


      if (!objectIs(newState, hook.memoizedState)) {
        markWorkInProgressReceivedUpdate();
      }

      hook.memoizedState = newState; // Don't persist the state accumulated from the render phase updates to
      // the base state unless the queue is empty.
      // TODO: Not sure if this is the desired semantics, but it's what we
      // do for gDSFP. I can't remember why.

      if (hook.baseQueue === null) {
        hook.baseState = newState;
      }

      queue.lastRenderedState = newState;
    }

    return [newState, dispatch];
  }

  function readFromUnsubcribedMutableSource(root, source, getSnapshot) {
    {
      warnAboutMultipleRenderersDEV(source);
    }

    var getVersion = source._getVersion;
    var version = getVersion(source._source); // Is it safe for this component to read from this source during the current render?

    var isSafeToReadFromSource = false; // Check the version first.
    // If this render has already been started with a specific version,
    // we can use it alone to determine if we can safely read from the source.

    var currentRenderVersion = getWorkInProgressVersion(source);

    if (currentRenderVersion !== null) {
      // It's safe to read if the store hasn't been mutated since the last time
      // we read something.
      isSafeToReadFromSource = currentRenderVersion === version;
    } else {
      // If there's no version, then this is the first time we've read from the
      // source during the current render pass, so we need to do a bit more work.
      // What we need to determine is if there are any hooks that already
      // subscribed to the source, and if so, whether there are any pending
      // mutations that haven't been synchronized yet.
      //
      // If there are no pending mutations, then `root.mutableReadLanes` will be
      // empty, and we know we can safely read.
      //
      // If there *are* pending mutations, we may still be able to safely read
      // if the currently rendering lanes are inclusive of the pending mutation
      // lanes, since that guarantees that the value we're about to read from
      // the source is consistent with the values that we read during the most
      // recent mutation.
      isSafeToReadFromSource = isSubsetOfLanes(renderLanes, root.mutableReadLanes);

      if (isSafeToReadFromSource) {
        // If it's safe to read from this source during the current render,
        // store the version in case other components read from it.
        // A changed version number will let those components know to throw and restart the render.
        setWorkInProgressVersion(source, version);
      }
    }

    if (isSafeToReadFromSource) {
      var snapshot = getSnapshot(source._source);

      {
        if (typeof snapshot === 'function') {
          error('Mutable source should not return a function as the snapshot value. ' + 'Functions may close over mutable values and cause tearing.');
        }
      }

      return snapshot;
    } else {
      // This handles the special case of a mutable source being shared between renderers.
      // In that case, if the source is mutated between the first and second renderer,
      // The second renderer don't know that it needs to reset the WIP version during unwind,
      // (because the hook only marks sources as dirty if it's written to their WIP version).
      // That would cause this tear check to throw again and eventually be visible to the user.
      // We can avoid this infinite loop by explicitly marking the source as dirty.
      //
      // This can lead to tearing in the first renderer when it resumes,
      // but there's nothing we can do about that (short of throwing here and refusing to continue the render).
      markSourceAsDirty(source);

      {
        {
          throw Error( "Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue." );
        }
      }
    }
  }

  function useMutableSource(hook, source, getSnapshot, subscribe) {
    var root = getWorkInProgressRoot();

    if (!(root !== null)) {
      {
        throw Error( "Expected a work-in-progress root. This is a bug in React. Please file an issue." );
      }
    }

    var getVersion = source._getVersion;
    var version = getVersion(source._source);
    var dispatcher = ReactCurrentDispatcher$1.current; // eslint-disable-next-line prefer-const

    var _dispatcher$useState = dispatcher.useState(function () {
      return readFromUnsubcribedMutableSource(root, source, getSnapshot);
    }),
        currentSnapshot = _dispatcher$useState[0],
        setSnapshot = _dispatcher$useState[1];

    var snapshot = currentSnapshot; // Grab a handle to the state hook as well.
    // We use it to clear the pending update queue if we have a new source.

    var stateHook = workInProgressHook;
    var memoizedState = hook.memoizedState;
    var refs = memoizedState.refs;
    var prevGetSnapshot = refs.getSnapshot;
    var prevSource = memoizedState.source;
    var prevSubscribe = memoizedState.subscribe;
    var fiber = currentlyRenderingFiber$1;
    hook.memoizedState = {
      refs: refs,
      source: source,
      subscribe: subscribe
    }; // Sync the values needed by our subscription handler after each commit.

    dispatcher.useEffect(function () {
      refs.getSnapshot = getSnapshot; // Normally the dispatch function for a state hook never changes,
      // but this hook recreates the queue in certain cases  to avoid updates from stale sources.
      // handleChange() below needs to reference the dispatch function without re-subscribing,
      // so we use a ref to ensure that it always has the latest version.

      refs.setSnapshot = setSnapshot; // Check for a possible change between when we last rendered now.

      var maybeNewVersion = getVersion(source._source);

      if (!objectIs(version, maybeNewVersion)) {
        var maybeNewSnapshot = getSnapshot(source._source);

        {
          if (typeof maybeNewSnapshot === 'function') {
            error('Mutable source should not return a function as the snapshot value. ' + 'Functions may close over mutable values and cause tearing.');
          }
        }

        if (!objectIs(snapshot, maybeNewSnapshot)) {
          setSnapshot(maybeNewSnapshot);
          var lane = requestUpdateLane(fiber);
          markRootMutableRead(root, lane);
        } // If the source mutated between render and now,
        // there may be state updates already scheduled from the old source.
        // Entangle the updates so that they render in the same batch.


        markRootEntangled(root, root.mutableReadLanes);
      }
    }, [getSnapshot, source, subscribe]); // If we got a new source or subscribe function, re-subscribe in a passive effect.

    dispatcher.useEffect(function () {
      var handleChange = function () {
        var latestGetSnapshot = refs.getSnapshot;
        var latestSetSnapshot = refs.setSnapshot;

        try {
          latestSetSnapshot(latestGetSnapshot(source._source)); // Record a pending mutable source update with the same expiration time.

          var lane = requestUpdateLane(fiber);
          markRootMutableRead(root, lane);
        } catch (error) {
          // A selector might throw after a source mutation.
          // e.g. it might try to read from a part of the store that no longer exists.
          // In this case we should still schedule an update with React.
          // Worst case the selector will throw again and then an error boundary will handle it.
          latestSetSnapshot(function () {
            throw error;
          });
        }
      };

      var unsubscribe = subscribe(source._source, handleChange);

      {
        if (typeof unsubscribe !== 'function') {
          error('Mutable source subscribe function must return an unsubscribe function.');
        }
      }

      return unsubscribe;
    }, [source, subscribe]); // If any of the inputs to useMutableSource change, reading is potentially unsafe.
    //
    // If either the source or the subscription have changed we can't can't trust the update queue.
    // Maybe the source changed in a way that the old subscription ignored but the new one depends on.
    //
    // If the getSnapshot function changed, we also shouldn't rely on the update queue.
    // It's possible that the underlying source was mutated between the when the last "change" event fired,
    // and when the current render (with the new getSnapshot function) is processed.
    //
    // In both cases, we need to throw away pending updates (since they are no longer relevant)
    // and treat reading from the source as we do in the mount case.

    if (!objectIs(prevGetSnapshot, getSnapshot) || !objectIs(prevSource, source) || !objectIs(prevSubscribe, subscribe)) {
      // Create a new queue and setState method,
      // So if there are interleaved updates, they get pushed to the older queue.
      // When this becomes current, the previous queue and dispatch method will be discarded,
      // including any interleaving updates that occur.
      var newQueue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: basicStateReducer,
        lastRenderedState: snapshot
      };
      newQueue.dispatch = setSnapshot = dispatchAction.bind(null, currentlyRenderingFiber$1, newQueue);
      stateHook.queue = newQueue;
      stateHook.baseQueue = null;
      snapshot = readFromUnsubcribedMutableSource(root, source, getSnapshot);
      stateHook.memoizedState = stateHook.baseState = snapshot;
    }

    return snapshot;
  }

  function mountMutableSource(source, getSnapshot, subscribe) {
    var hook = mountWorkInProgressHook();
    hook.memoizedState = {
      refs: {
        getSnapshot: getSnapshot,
        setSnapshot: null
      },
      source: source,
      subscribe: subscribe
    };
    return useMutableSource(hook, source, getSnapshot, subscribe);
  }

  function updateMutableSource(source, getSnapshot, subscribe) {
    var hook = updateWorkInProgressHook();
    return useMutableSource(hook, source, getSnapshot, subscribe);
  }

  function mountState(initialState) {
    var hook = mountWorkInProgressHook();

    if (typeof initialState === 'function') {
      // $FlowFixMe: Flow doesn't like mixed types
      initialState = initialState();
    }

    hook.memoizedState = hook.baseState = initialState;
    var queue = hook.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: initialState
    };
    var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
    return [hook.memoizedState, dispatch];
  }

  function updateState(initialState) {
    return updateReducer(basicStateReducer);
  }

  function rerenderState(initialState) {
    return rerenderReducer(basicStateReducer);
  }

  function pushEffect(tag, create, destroy, deps) {
    var effect = {
      tag: tag,
      create: create,
      destroy: destroy,
      deps: deps,
      // Circular
      next: null
    };
    var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;

    if (componentUpdateQueue === null) {
      componentUpdateQueue = createFunctionComponentUpdateQueue();
      currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
      componentUpdateQueue.lastEffect = effect.next = effect;
    } else {
      var lastEffect = componentUpdateQueue.lastEffect;

      if (lastEffect === null) {
        componentUpdateQueue.lastEffect = effect.next = effect;
      } else {
        var firstEffect = lastEffect.next;
        lastEffect.next = effect;
        effect.next = firstEffect;
        componentUpdateQueue.lastEffect = effect;
      }
    }

    return effect;
  }

  function mountRef(initialValue) {
    var hook = mountWorkInProgressHook();
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    hook.memoizedState = ref;
    return ref;
  }

  function updateRef(initialValue) {
    var hook = updateWorkInProgressHook();
    return hook.memoizedState;
  }

  function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
    var hook = mountWorkInProgressHook();
    var nextDeps = deps === undefined ? null : deps;
    currentlyRenderingFiber$1.flags |= fiberFlags;
    hook.memoizedState = pushEffect(HasEffect | hookFlags, create, undefined, nextDeps);
  }

  function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
    var hook = updateWorkInProgressHook();
    var nextDeps = deps === undefined ? null : deps;
    var destroy = undefined;

    if (currentHook !== null) {
      var prevEffect = currentHook.memoizedState;
      destroy = prevEffect.destroy;

      if (nextDeps !== null) {
        var prevDeps = prevEffect.deps;

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          pushEffect(hookFlags, create, destroy, nextDeps);
          return;
        }
      }
    }

    currentlyRenderingFiber$1.flags |= fiberFlags;
    hook.memoizedState = pushEffect(HasEffect | hookFlags, create, destroy, nextDeps);
  }

  function mountEffect(create, deps) {
    {
      // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
      if ('undefined' !== typeof jest) {
        warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
      }
    }

    return mountEffectImpl(Update | Passive, Passive$1, create, deps);
  }

  function updateEffect(create, deps) {
    {
      // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
      if ('undefined' !== typeof jest) {
        warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
      }
    }

    return updateEffectImpl(Update | Passive, Passive$1, create, deps);
  }

  function mountLayoutEffect(create, deps) {
    return mountEffectImpl(Update, Layout, create, deps);
  }

  function updateLayoutEffect(create, deps) {
    return updateEffectImpl(Update, Layout, create, deps);
  }

  function imperativeHandleEffect(create, ref) {
    if (typeof ref === 'function') {
      var refCallback = ref;

      var _inst = create();

      refCallback(_inst);
      return function () {
        refCallback(null);
      };
    } else if (ref !== null && ref !== undefined) {
      var refObject = ref;

      {
        if (!refObject.hasOwnProperty('current')) {
          error('Expected useImperativeHandle() first argument to either be a ' + 'ref callback or React.createRef() object. Instead received: %s.', 'an object with keys {' + Object.keys(refObject).join(', ') + '}');
        }
      }

      var _inst2 = create();

      refObject.current = _inst2;
      return function () {
        refObject.current = null;
      };
    }
  }

  function mountImperativeHandle(ref, create, deps) {
    {
      if (typeof create !== 'function') {
        error('Expected useImperativeHandle() second argument to be a function ' + 'that creates a handle. Instead received: %s.', create !== null ? typeof create : 'null');
      }
    } // TODO: If deps are provided, should we skip comparing the ref itself?


    var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
    return mountEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
  }

  function updateImperativeHandle(ref, create, deps) {
    {
      if (typeof create !== 'function') {
        error('Expected useImperativeHandle() second argument to be a function ' + 'that creates a handle. Instead received: %s.', create !== null ? typeof create : 'null');
      }
    } // TODO: If deps are provided, should we skip comparing the ref itself?


    var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
    return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
  }

  function mountDebugValue(value, formatterFn) {// This hook is normally a no-op.
    // The react-debug-hooks package injects its own implementation
    // so that e.g. DevTools can display custom hook values.
  }

  var updateDebugValue = mountDebugValue;

  function mountCallback(callback, deps) {
    var hook = mountWorkInProgressHook();
    var nextDeps = deps === undefined ? null : deps;
    hook.memoizedState = [callback, nextDeps];
    return callback;
  }

  function updateCallback(callback, deps) {
    var hook = updateWorkInProgressHook();
    var nextDeps = deps === undefined ? null : deps;
    var prevState = hook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }

    hook.memoizedState = [callback, nextDeps];
    return callback;
  }

  function mountMemo(nextCreate, deps) {
    var hook = mountWorkInProgressHook();
    var nextDeps = deps === undefined ? null : deps;
    var nextValue = nextCreate();
    hook.memoizedState = [nextValue, nextDeps];
    return nextValue;
  }

  function updateMemo(nextCreate, deps) {
    var hook = updateWorkInProgressHook();
    var nextDeps = deps === undefined ? null : deps;
    var prevState = hook.memoizedState;

    if (prevState !== null) {
      // Assume these are defined. If they're not, areHookInputsEqual will warn.
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }

    var nextValue = nextCreate();
    hook.memoizedState = [nextValue, nextDeps];
    return nextValue;
  }

  function mountDeferredValue(value) {
    var _mountState = mountState(value),
        prevValue = _mountState[0],
        setValue = _mountState[1];

    mountEffect(function () {
      var prevTransition = ReactCurrentBatchConfig$1.transition;
      ReactCurrentBatchConfig$1.transition = 1;

      try {
        setValue(value);
      } finally {
        ReactCurrentBatchConfig$1.transition = prevTransition;
      }
    }, [value]);
    return prevValue;
  }

  function updateDeferredValue(value) {
    var _updateState = updateState(),
        prevValue = _updateState[0],
        setValue = _updateState[1];

    updateEffect(function () {
      var prevTransition = ReactCurrentBatchConfig$1.transition;
      ReactCurrentBatchConfig$1.transition = 1;

      try {
        setValue(value);
      } finally {
        ReactCurrentBatchConfig$1.transition = prevTransition;
      }
    }, [value]);
    return prevValue;
  }

  function rerenderDeferredValue(value) {
    var _rerenderState = rerenderState(),
        prevValue = _rerenderState[0],
        setValue = _rerenderState[1];

    updateEffect(function () {
      var prevTransition = ReactCurrentBatchConfig$1.transition;
      ReactCurrentBatchConfig$1.transition = 1;

      try {
        setValue(value);
      } finally {
        ReactCurrentBatchConfig$1.transition = prevTransition;
      }
    }, [value]);
    return prevValue;
  }

  function startTransition(setPending, callback) {
    var priorityLevel = getCurrentPriorityLevel();

    {
      runWithPriority(priorityLevel < UserBlockingPriority$1 ? UserBlockingPriority$1 : priorityLevel, function () {
        setPending(true);
      });
      runWithPriority(priorityLevel > NormalPriority$1 ? NormalPriority$1 : priorityLevel, function () {
        var prevTransition = ReactCurrentBatchConfig$1.transition;
        ReactCurrentBatchConfig$1.transition = 1;

        try {
          setPending(false);
          callback();
        } finally {
          ReactCurrentBatchConfig$1.transition = prevTransition;
        }
      });
    }
  }

  function mountTransition() {
    var _mountState2 = mountState(false),
        isPending = _mountState2[0],
        setPending = _mountState2[1]; // The `start` method can be stored on a ref, since `setPending`
    // never changes.


    var start = startTransition.bind(null, setPending);
    mountRef(start);
    return [start, isPending];
  }

  function updateTransition() {
    var _updateState2 = updateState(),
        isPending = _updateState2[0];

    var startRef = updateRef();
    var start = startRef.current;
    return [start, isPending];
  }

  function rerenderTransition() {
    var _rerenderState2 = rerenderState(),
        isPending = _rerenderState2[0];

    var startRef = updateRef();
    var start = startRef.current;
    return [start, isPending];
  }

  var isUpdatingOpaqueValueInRenderPhase = false;
  function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
    {
      return isUpdatingOpaqueValueInRenderPhase;
    }
  }

  function warnOnOpaqueIdentifierAccessInDEV(fiber) {
    {
      // TODO: Should warn in effects and callbacks, too
      var name = getComponentName(fiber.type) || 'Unknown';

      if (getIsRendering() && !didWarnAboutUseOpaqueIdentifier[name]) {
        error('The object passed back from useOpaqueIdentifier is meant to be ' + 'passed through to attributes only. Do not read the ' + 'value directly.');

        didWarnAboutUseOpaqueIdentifier[name] = true;
      }
    }
  }

  function mountOpaqueIdentifier() {
    var makeId =  makeClientIdInDEV.bind(null, warnOnOpaqueIdentifierAccessInDEV.bind(null, currentlyRenderingFiber$1)) ;

    if (getIsHydrating()) {
      var didUpgrade = false;
      var fiber = currentlyRenderingFiber$1;

      var readValue = function () {
        if (!didUpgrade) {
          // Only upgrade once. This works even inside the render phase because
          // the update is added to a shared queue, which outlasts the
          // in-progress render.
          didUpgrade = true;

          {
            isUpdatingOpaqueValueInRenderPhase = true;
            setId(makeId());
            isUpdatingOpaqueValueInRenderPhase = false;
            warnOnOpaqueIdentifierAccessInDEV(fiber);
          }
        }

        {
          {
            throw Error( "The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly." );
          }
        }
      };

      var id = makeOpaqueHydratingObject(readValue);
      var setId = mountState(id)[1];

      if ((currentlyRenderingFiber$1.mode & BlockingMode) === NoMode) {
        currentlyRenderingFiber$1.flags |= Update | Passive;
        pushEffect(HasEffect | Passive$1, function () {
          setId(makeId());
        }, undefined, null);
      }

      return id;
    } else {
      var _id = makeId();

      mountState(_id);
      return _id;
    }
  }

  function updateOpaqueIdentifier() {
    var id = updateState()[0];
    return id;
  }

  function rerenderOpaqueIdentifier() {
    var id = rerenderState()[0];
    return id;
  }

  function dispatchAction(fiber, queue, action) {
    {
      if (typeof arguments[3] === 'function') {
        error("State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().');
      }
    }

    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    var update = {
      lane: lane,
      action: action,
      eagerReducer: null,
      eagerState: null,
      next: null
    }; // Append the update to the end of the list.

    var pending = queue.pending;

    if (pending === null) {
      // This is the first update. Create a circular list.
      update.next = update;
    } else {
      update.next = pending.next;
      pending.next = update;
    }

    queue.pending = update;
    var alternate = fiber.alternate;

    if (fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {
      // This is a render phase update. Stash it in a lazily-created map of
      // queue -> linked list of updates. After this render pass, we'll restart
      // and apply the stashed updates on top of the work-in-progress hook.
      didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
    } else {
      if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
        // The queue is currently empty, which means we can eagerly compute the
        // next state before entering the render phase. If the new state is the
        // same as the current state, we may be able to bail out entirely.
        var lastRenderedReducer = queue.lastRenderedReducer;

        if (lastRenderedReducer !== null) {
          var prevDispatcher;

          {
            prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          }

          try {
            var currentState = queue.lastRenderedState;
            var eagerState = lastRenderedReducer(currentState, action); // Stash the eagerly computed state, and the reducer used to compute
            // it, on the update object. If the reducer hasn't changed by the
            // time we enter the render phase, then the eager state can be used
            // without calling the reducer again.

            update.eagerReducer = lastRenderedReducer;
            update.eagerState = eagerState;

            if (objectIs(eagerState, currentState)) {
              // Fast path. We can bail out without scheduling React to re-render.
              // It's still possible that we'll need to rebase this update later,
              // if the component re-renders for a different reason and by that
              // time the reducer has changed.
              return;
            }
          } catch (error) {// Suppress the error. It will throw again in the render phase.
          } finally {
            {
              ReactCurrentDispatcher$1.current = prevDispatcher;
            }
          }
        }
      }

      {
        // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
        if ('undefined' !== typeof jest) {
          warnIfNotScopedWithMatchingAct(fiber);
          warnIfNotCurrentlyActingUpdatesInDev(fiber);
        }
      }

      scheduleUpdateOnFiber(fiber, lane, eventTime);
    }
  }

  var ContextOnlyDispatcher = {
    readContext: readContext,
    useCallback: throwInvalidHookError,
    useContext: throwInvalidHookError,
    useEffect: throwInvalidHookError,
    useImperativeHandle: throwInvalidHookError,
    useLayoutEffect: throwInvalidHookError,
    useMemo: throwInvalidHookError,
    useReducer: throwInvalidHookError,
    useRef: throwInvalidHookError,
    useState: throwInvalidHookError,
    useDebugValue: throwInvalidHookError,
    useDeferredValue: throwInvalidHookError,
    useTransition: throwInvalidHookError,
    useMutableSource: throwInvalidHookError,
    useOpaqueIdentifier: throwInvalidHookError,
    unstable_isNewReconciler: enableNewReconciler
  };
  var HooksDispatcherOnMountInDEV = null;
  var HooksDispatcherOnMountWithHookTypesInDEV = null;
  var HooksDispatcherOnUpdateInDEV = null;
  var HooksDispatcherOnRerenderInDEV = null;
  var InvalidNestedHooksDispatcherOnMountInDEV = null;
  var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
  var InvalidNestedHooksDispatcherOnRerenderInDEV = null;

  {
    var warnInvalidContextAccess = function () {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    };

    var warnInvalidHookAccess = function () {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    };

    HooksDispatcherOnMountInDEV = {
      readContext: function (context, observedBits) {
        return readContext(context, observedBits);
      },
      useCallback: function (callback, deps) {
        currentHookNameInDev = 'useCallback';
        mountHookTypesDev();
        checkDepsAreArrayDev(deps);
        return mountCallback(callback, deps);
      },
      useContext: function (context, observedBits) {
        currentHookNameInDev = 'useContext';
        mountHookTypesDev();
        return readContext(context, observedBits);
      },
      useEffect: function (create, deps) {
        currentHookNameInDev = 'useEffect';
        mountHookTypesDev();
        checkDepsAreArrayDev(deps);
        return mountEffect(create, deps);
      },
      useImperativeHandle: function (ref, create, deps) {
        currentHookNameInDev = 'useImperativeHandle';
        mountHookTypesDev();
        checkDepsAreArrayDev(deps);
        return mountImperativeHandle(ref, create, deps);
      },
      useLayoutEffect: function (create, deps) {
        currentHookNameInDev = 'useLayoutEffect';
        mountHookTypesDev();
        checkDepsAreArrayDev(deps);
        return mountLayoutEffect(create, deps);
      },
      useMemo: function (create, deps) {
        currentHookNameInDev = 'useMemo';
        mountHookTypesDev();
        checkDepsAreArrayDev(deps);
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountMemo(create, deps);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useReducer: function (reducer, initialArg, init) {
        currentHookNameInDev = 'useReducer';
        mountHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountReducer(reducer, initialArg, init);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useRef: function (initialValue) {
        currentHookNameInDev = 'useRef';
        mountHookTypesDev();
        return mountRef(initialValue);
      },
      useState: function (initialState) {
        currentHookNameInDev = 'useState';
        mountHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountState(initialState);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useDebugValue: function (value, formatterFn) {
        currentHookNameInDev = 'useDebugValue';
        mountHookTypesDev();
        return mountDebugValue();
      },
      useDeferredValue: function (value) {
        currentHookNameInDev = 'useDeferredValue';
        mountHookTypesDev();
        return mountDeferredValue(value);
      },
      useTransition: function () {
        currentHookNameInDev = 'useTransition';
        mountHookTypesDev();
        return mountTransition();
      },
      useMutableSource: function (source, getSnapshot, subscribe) {
        currentHookNameInDev = 'useMutableSource';
        mountHookTypesDev();
        return mountMutableSource(source, getSnapshot, subscribe);
      },
      useOpaqueIdentifier: function () {
        currentHookNameInDev = 'useOpaqueIdentifier';
        mountHookTypesDev();
        return mountOpaqueIdentifier();
      },
      unstable_isNewReconciler: enableNewReconciler
    };
    HooksDispatcherOnMountWithHookTypesInDEV = {
      readContext: function (context, observedBits) {
        return readContext(context, observedBits);
      },
      useCallback: function (callback, deps) {
        currentHookNameInDev = 'useCallback';
        updateHookTypesDev();
        return mountCallback(callback, deps);
      },
      useContext: function (context, observedBits) {
        currentHookNameInDev = 'useContext';
        updateHookTypesDev();
        return readContext(context, observedBits);
      },
      useEffect: function (create, deps) {
        currentHookNameInDev = 'useEffect';
        updateHookTypesDev();
        return mountEffect(create, deps);
      },
      useImperativeHandle: function (ref, create, deps) {
        currentHookNameInDev = 'useImperativeHandle';
        updateHookTypesDev();
        return mountImperativeHandle(ref, create, deps);
      },
      useLayoutEffect: function (create, deps) {
        currentHookNameInDev = 'useLayoutEffect';
        updateHookTypesDev();
        return mountLayoutEffect(create, deps);
      },
      useMemo: function (create, deps) {
        currentHookNameInDev = 'useMemo';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountMemo(create, deps);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useReducer: function (reducer, initialArg, init) {
        currentHookNameInDev = 'useReducer';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountReducer(reducer, initialArg, init);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useRef: function (initialValue) {
        currentHookNameInDev = 'useRef';
        updateHookTypesDev();
        return mountRef(initialValue);
      },
      useState: function (initialState) {
        currentHookNameInDev = 'useState';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountState(initialState);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useDebugValue: function (value, formatterFn) {
        currentHookNameInDev = 'useDebugValue';
        updateHookTypesDev();
        return mountDebugValue();
      },
      useDeferredValue: function (value) {
        currentHookNameInDev = 'useDeferredValue';
        updateHookTypesDev();
        return mountDeferredValue(value);
      },
      useTransition: function () {
        currentHookNameInDev = 'useTransition';
        updateHookTypesDev();
        return mountTransition();
      },
      useMutableSource: function (source, getSnapshot, subscribe) {
        currentHookNameInDev = 'useMutableSource';
        updateHookTypesDev();
        return mountMutableSource(source, getSnapshot, subscribe);
      },
      useOpaqueIdentifier: function () {
        currentHookNameInDev = 'useOpaqueIdentifier';
        updateHookTypesDev();
        return mountOpaqueIdentifier();
      },
      unstable_isNewReconciler: enableNewReconciler
    };
    HooksDispatcherOnUpdateInDEV = {
      readContext: function (context, observedBits) {
        return readContext(context, observedBits);
      },
      useCallback: function (callback, deps) {
        currentHookNameInDev = 'useCallback';
        updateHookTypesDev();
        return updateCallback(callback, deps);
      },
      useContext: function (context, observedBits) {
        currentHookNameInDev = 'useContext';
        updateHookTypesDev();
        return readContext(context, observedBits);
      },
      useEffect: function (create, deps) {
        currentHookNameInDev = 'useEffect';
        updateHookTypesDev();
        return updateEffect(create, deps);
      },
      useImperativeHandle: function (ref, create, deps) {
        currentHookNameInDev = 'useImperativeHandle';
        updateHookTypesDev();
        return updateImperativeHandle(ref, create, deps);
      },
      useLayoutEffect: function (create, deps) {
        currentHookNameInDev = 'useLayoutEffect';
        updateHookTypesDev();
        return updateLayoutEffect(create, deps);
      },
      useMemo: function (create, deps) {
        currentHookNameInDev = 'useMemo';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return updateMemo(create, deps);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useReducer: function (reducer, initialArg, init) {
        currentHookNameInDev = 'useReducer';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return updateReducer(reducer, initialArg, init);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useRef: function (initialValue) {
        currentHookNameInDev = 'useRef';
        updateHookTypesDev();
        return updateRef();
      },
      useState: function (initialState) {
        currentHookNameInDev = 'useState';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return updateState(initialState);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useDebugValue: function (value, formatterFn) {
        currentHookNameInDev = 'useDebugValue';
        updateHookTypesDev();
        return updateDebugValue();
      },
      useDeferredValue: function (value) {
        currentHookNameInDev = 'useDeferredValue';
        updateHookTypesDev();
        return updateDeferredValue(value);
      },
      useTransition: function () {
        currentHookNameInDev = 'useTransition';
        updateHookTypesDev();
        return updateTransition();
      },
      useMutableSource: function (source, getSnapshot, subscribe) {
        currentHookNameInDev = 'useMutableSource';
        updateHookTypesDev();
        return updateMutableSource(source, getSnapshot, subscribe);
      },
      useOpaqueIdentifier: function () {
        currentHookNameInDev = 'useOpaqueIdentifier';
        updateHookTypesDev();
        return updateOpaqueIdentifier();
      },
      unstable_isNewReconciler: enableNewReconciler
    };
    HooksDispatcherOnRerenderInDEV = {
      readContext: function (context, observedBits) {
        return readContext(context, observedBits);
      },
      useCallback: function (callback, deps) {
        currentHookNameInDev = 'useCallback';
        updateHookTypesDev();
        return updateCallback(callback, deps);
      },
      useContext: function (context, observedBits) {
        currentHookNameInDev = 'useContext';
        updateHookTypesDev();
        return readContext(context, observedBits);
      },
      useEffect: function (create, deps) {
        currentHookNameInDev = 'useEffect';
        updateHookTypesDev();
        return updateEffect(create, deps);
      },
      useImperativeHandle: function (ref, create, deps) {
        currentHookNameInDev = 'useImperativeHandle';
        updateHookTypesDev();
        return updateImperativeHandle(ref, create, deps);
      },
      useLayoutEffect: function (create, deps) {
        currentHookNameInDev = 'useLayoutEffect';
        updateHookTypesDev();
        return updateLayoutEffect(create, deps);
      },
      useMemo: function (create, deps) {
        currentHookNameInDev = 'useMemo';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;

        try {
          return updateMemo(create, deps);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useReducer: function (reducer, initialArg, init) {
        currentHookNameInDev = 'useReducer';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;

        try {
          return rerenderReducer(reducer, initialArg, init);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useRef: function (initialValue) {
        currentHookNameInDev = 'useRef';
        updateHookTypesDev();
        return updateRef();
      },
      useState: function (initialState) {
        currentHookNameInDev = 'useState';
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;

        try {
          return rerenderState(initialState);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useDebugValue: function (value, formatterFn) {
        currentHookNameInDev = 'useDebugValue';
        updateHookTypesDev();
        return updateDebugValue();
      },
      useDeferredValue: function (value) {
        currentHookNameInDev = 'useDeferredValue';
        updateHookTypesDev();
        return rerenderDeferredValue(value);
      },
      useTransition: function () {
        currentHookNameInDev = 'useTransition';
        updateHookTypesDev();
        return rerenderTransition();
      },
      useMutableSource: function (source, getSnapshot, subscribe) {
        currentHookNameInDev = 'useMutableSource';
        updateHookTypesDev();
        return updateMutableSource(source, getSnapshot, subscribe);
      },
      useOpaqueIdentifier: function () {
        currentHookNameInDev = 'useOpaqueIdentifier';
        updateHookTypesDev();
        return rerenderOpaqueIdentifier();
      },
      unstable_isNewReconciler: enableNewReconciler
    };
    InvalidNestedHooksDispatcherOnMountInDEV = {
      readContext: function (context, observedBits) {
        warnInvalidContextAccess();
        return readContext(context, observedBits);
      },
      useCallback: function (callback, deps) {
        currentHookNameInDev = 'useCallback';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountCallback(callback, deps);
      },
      useContext: function (context, observedBits) {
        currentHookNameInDev = 'useContext';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return readContext(context, observedBits);
      },
      useEffect: function (create, deps) {
        currentHookNameInDev = 'useEffect';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountEffect(create, deps);
      },
      useImperativeHandle: function (ref, create, deps) {
        currentHookNameInDev = 'useImperativeHandle';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountImperativeHandle(ref, create, deps);
      },
      useLayoutEffect: function (create, deps) {
        currentHookNameInDev = 'useLayoutEffect';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountLayoutEffect(create, deps);
      },
      useMemo: function (create, deps) {
        currentHookNameInDev = 'useMemo';
        warnInvalidHookAccess();
        mountHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountMemo(create, deps);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useReducer: function (reducer, initialArg, init) {
        currentHookNameInDev = 'useReducer';
        warnInvalidHookAccess();
        mountHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountReducer(reducer, initialArg, init);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useRef: function (initialValue) {
        currentHookNameInDev = 'useRef';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountRef(initialValue);
      },
      useState: function (initialState) {
        currentHookNameInDev = 'useState';
        warnInvalidHookAccess();
        mountHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

        try {
          return mountState(initialState);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useDebugValue: function (value, formatterFn) {
        currentHookNameInDev = 'useDebugValue';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountDebugValue();
      },
      useDeferredValue: function (value) {
        currentHookNameInDev = 'useDeferredValue';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountDeferredValue(value);
      },
      useTransition: function () {
        currentHookNameInDev = 'useTransition';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountTransition();
      },
      useMutableSource: function (source, getSnapshot, subscribe) {
        currentHookNameInDev = 'useMutableSource';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountMutableSource(source, getSnapshot, subscribe);
      },
      useOpaqueIdentifier: function () {
        currentHookNameInDev = 'useOpaqueIdentifier';
        warnInvalidHookAccess();
        mountHookTypesDev();
        return mountOpaqueIdentifier();
      },
      unstable_isNewReconciler: enableNewReconciler
    };
    InvalidNestedHooksDispatcherOnUpdateInDEV = {
      readContext: function (context, observedBits) {
        warnInvalidContextAccess();
        return readContext(context, observedBits);
      },
      useCallback: function (callback, deps) {
        currentHookNameInDev = 'useCallback';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateCallback(callback, deps);
      },
      useContext: function (context, observedBits) {
        currentHookNameInDev = 'useContext';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return readContext(context, observedBits);
      },
      useEffect: function (create, deps) {
        currentHookNameInDev = 'useEffect';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateEffect(create, deps);
      },
      useImperativeHandle: function (ref, create, deps) {
        currentHookNameInDev = 'useImperativeHandle';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateImperativeHandle(ref, create, deps);
      },
      useLayoutEffect: function (create, deps) {
        currentHookNameInDev = 'useLayoutEffect';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateLayoutEffect(create, deps);
      },
      useMemo: function (create, deps) {
        currentHookNameInDev = 'useMemo';
        warnInvalidHookAccess();
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return updateMemo(create, deps);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useReducer: function (reducer, initialArg, init) {
        currentHookNameInDev = 'useReducer';
        warnInvalidHookAccess();
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return updateReducer(reducer, initialArg, init);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useRef: function (initialValue) {
        currentHookNameInDev = 'useRef';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateRef();
      },
      useState: function (initialState) {
        currentHookNameInDev = 'useState';
        warnInvalidHookAccess();
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return updateState(initialState);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useDebugValue: function (value, formatterFn) {
        currentHookNameInDev = 'useDebugValue';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateDebugValue();
      },
      useDeferredValue: function (value) {
        currentHookNameInDev = 'useDeferredValue';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateDeferredValue(value);
      },
      useTransition: function () {
        currentHookNameInDev = 'useTransition';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateTransition();
      },
      useMutableSource: function (source, getSnapshot, subscribe) {
        currentHookNameInDev = 'useMutableSource';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateMutableSource(source, getSnapshot, subscribe);
      },
      useOpaqueIdentifier: function () {
        currentHookNameInDev = 'useOpaqueIdentifier';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateOpaqueIdentifier();
      },
      unstable_isNewReconciler: enableNewReconciler
    };
    InvalidNestedHooksDispatcherOnRerenderInDEV = {
      readContext: function (context, observedBits) {
        warnInvalidContextAccess();
        return readContext(context, observedBits);
      },
      useCallback: function (callback, deps) {
        currentHookNameInDev = 'useCallback';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateCallback(callback, deps);
      },
      useContext: function (context, observedBits) {
        currentHookNameInDev = 'useContext';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return readContext(context, observedBits);
      },
      useEffect: function (create, deps) {
        currentHookNameInDev = 'useEffect';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateEffect(create, deps);
      },
      useImperativeHandle: function (ref, create, deps) {
        currentHookNameInDev = 'useImperativeHandle';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateImperativeHandle(ref, create, deps);
      },
      useLayoutEffect: function (create, deps) {
        currentHookNameInDev = 'useLayoutEffect';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateLayoutEffect(create, deps);
      },
      useMemo: function (create, deps) {
        currentHookNameInDev = 'useMemo';
        warnInvalidHookAccess();
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return updateMemo(create, deps);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useReducer: function (reducer, initialArg, init) {
        currentHookNameInDev = 'useReducer';
        warnInvalidHookAccess();
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return rerenderReducer(reducer, initialArg, init);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useRef: function (initialValue) {
        currentHookNameInDev = 'useRef';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateRef();
      },
      useState: function (initialState) {
        currentHookNameInDev = 'useState';
        warnInvalidHookAccess();
        updateHookTypesDev();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

        try {
          return rerenderState(initialState);
        } finally {
          ReactCurrentDispatcher$1.current = prevDispatcher;
        }
      },
      useDebugValue: function (value, formatterFn) {
        currentHookNameInDev = 'useDebugValue';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateDebugValue();
      },
      useDeferredValue: function (value) {
        currentHookNameInDev = 'useDeferredValue';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return rerenderDeferredValue(value);
      },
      useTransition: function () {
        currentHookNameInDev = 'useTransition';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return rerenderTransition();
      },
      useMutableSource: function (source, getSnapshot, subscribe) {
        currentHookNameInDev = 'useMutableSource';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return updateMutableSource(source, getSnapshot, subscribe);
      },
      useOpaqueIdentifier: function () {
        currentHookNameInDev = 'useOpaqueIdentifier';
        warnInvalidHookAccess();
        updateHookTypesDev();
        return rerenderOpaqueIdentifier();
      },
      unstable_isNewReconciler: enableNewReconciler
    };
  }

  var now$2 = Scheduler.unstable_now;
  var commitTime = 0;
  var profilerStartTime = -1;

  function getCommitTime() {
    return commitTime;
  }

  function recordCommitTime() {

    commitTime = now$2();
  }

  function startProfilerTimer(fiber) {

    profilerStartTime = now$2();

    if (fiber.actualStartTime < 0) {
      fiber.actualStartTime = now$2();
    }
  }

  function stopProfilerTimerIfRunning(fiber) {

    profilerStartTime = -1;
  }

  function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {

    if (profilerStartTime >= 0) {
      var elapsedTime = now$2() - profilerStartTime;
      fiber.actualDuration += elapsedTime;

      if (overrideBaseTime) {
        fiber.selfBaseDuration = elapsedTime;
      }

      profilerStartTime = -1;
    }
  }

  function transferActualDuration(fiber) {
    // Transfer time spent rendering these children so we don't lose it
    // after we rerender. This is used as a helper in special cases
    // where we should count the work of multiple passes.
    var child = fiber.child;

    while (child) {
      fiber.actualDuration += child.actualDuration;
      child = child.sibling;
    }
  }

  var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
  var didReceiveUpdate = false;
  var didWarnAboutBadClass;
  var didWarnAboutModulePatternComponent;
  var didWarnAboutContextTypeOnFunctionComponent;
  var didWarnAboutGetDerivedStateOnFunctionComponent;
  var didWarnAboutFunctionRefs;
  var didWarnAboutReassigningProps;
  var didWarnAboutRevealOrder;
  var didWarnAboutTailOptions;

  {
    didWarnAboutBadClass = {};
    didWarnAboutModulePatternComponent = {};
    didWarnAboutContextTypeOnFunctionComponent = {};
    didWarnAboutGetDerivedStateOnFunctionComponent = {};
    didWarnAboutFunctionRefs = {};
    didWarnAboutReassigningProps = false;
    didWarnAboutRevealOrder = {};
    didWarnAboutTailOptions = {};
  }

  function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
    if (current === null) {
      // If this is a fresh new component that hasn't been rendered yet, we
      // won't update its child set by applying minimal side-effects. Instead,
      // we will add them all to the child before it gets rendered. That means
      // we can optimize this reconciliation pass by not tracking side-effects.
      workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderLanes);
    } else {
      // If the current child is the same as the work in progress, it means that
      // we haven't yet started any work on these children. Therefore, we use
      // the clone algorithm to create a copy of all the current children.
      // If we had any progressed work already, that is invalid at this point so
      // let's throw it out.
      workInProgress.child = reconcileChildFibers(workInProgress, current.child, nextChildren, renderLanes);
    }
  }

  function forceUnmountCurrentAndReconcile(current, workInProgress, nextChildren, renderLanes) {
    // This function is fork of reconcileChildren. It's used in cases where we
    // want to reconcile without matching against the existing set. This has the
    // effect of all current children being unmounted; even if the type and key
    // are the same, the old child is unmounted and a new child is created.
    //
    // To do this, we're going to go through the reconcile algorithm twice. In
    // the first pass, we schedule a deletion for all the current children by
    // passing null.
    workInProgress.child = reconcileChildFibers(workInProgress, current.child, null, renderLanes); // In the second pass, we mount the new children. The trick here is that we
    // pass null in place of where we usually pass the current child set. This has
    // the effect of remounting all children regardless of whether their
    // identities match.

    workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderLanes);
  }

  function updateForwardRef(current, workInProgress, Component, nextProps, renderLanes) {
    // TODO: current can be non-null here even if the component
    // hasn't yet mounted. This happens after the first render suspends.
    // We'll need to figure out if this is fine or can cause issues.
    {
      if (workInProgress.type !== workInProgress.elementType) {
        // Lazy component props can't be validated in createElement
        // because they're only guaranteed to be resolved here.
        var innerPropTypes = Component.propTypes;

        if (innerPropTypes) {
          checkPropTypes(innerPropTypes, nextProps, // Resolved props
          'prop', getComponentName(Component));
        }
      }
    }

    var render = Component.render;
    var ref = workInProgress.ref; // The rest is a fork of updateFunctionComponent

    var nextChildren;
    prepareToReadContext(workInProgress, renderLanes);

    {
      ReactCurrentOwner$1.current = workInProgress;
      setIsRendering(true);
      nextChildren = renderWithHooks(current, workInProgress, render, nextProps, ref, renderLanes);

      if ( workInProgress.mode & StrictMode) {
        disableLogs();

        try {
          nextChildren = renderWithHooks(current, workInProgress, render, nextProps, ref, renderLanes);
        } finally {
          reenableLogs();
        }
      }

      setIsRendering(false);
    }

    if (current !== null && !didReceiveUpdate) {
      bailoutHooks(current, workInProgress, renderLanes);
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    } // React DevTools reads this flag.


    workInProgress.flags |= PerformedWork;
    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    return workInProgress.child;
  }

  function updateMemoComponent(current, workInProgress, Component, nextProps, updateLanes, renderLanes) {
    if (current === null) {
      var type = Component.type;

      if (isSimpleFunctionComponent(type) && Component.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      Component.defaultProps === undefined) {
        var resolvedType = type;

        {
          resolvedType = resolveFunctionForHotReloading(type);
        } // If this is a plain function component without default props,
        // and with only the default shallow comparison, we upgrade it
        // to a SimpleMemoComponent to allow fast path updates.


        workInProgress.tag = SimpleMemoComponent;
        workInProgress.type = resolvedType;

        {
          validateFunctionComponentInDev(workInProgress, type);
        }

        return updateSimpleMemoComponent(current, workInProgress, resolvedType, nextProps, updateLanes, renderLanes);
      }

      {
        var innerPropTypes = type.propTypes;

        if (innerPropTypes) {
          // Inner memo component props aren't currently validated in createElement.
          // We could move it there, but we'd still need this for lazy code path.
          checkPropTypes(innerPropTypes, nextProps, // Resolved props
          'prop', getComponentName(type));
        }
      }

      var child = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress, workInProgress.mode, renderLanes);
      child.ref = workInProgress.ref;
      child.return = workInProgress;
      workInProgress.child = child;
      return child;
    }

    {
      var _type = Component.type;
      var _innerPropTypes = _type.propTypes;

      if (_innerPropTypes) {
        // Inner memo component props aren't currently validated in createElement.
        // We could move it there, but we'd still need this for lazy code path.
        checkPropTypes(_innerPropTypes, nextProps, // Resolved props
        'prop', getComponentName(_type));
      }
    }

    var currentChild = current.child; // This is always exactly one child

    if (!includesSomeLane(updateLanes, renderLanes)) {
      // This will be the props with resolved defaultProps,
      // unlike current.memoizedProps which will be the unresolved ones.
      var prevProps = currentChild.memoizedProps; // Default to shallow comparison

      var compare = Component.compare;
      compare = compare !== null ? compare : shallowEqual;

      if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
        return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
      }
    } // React DevTools reads this flag.


    workInProgress.flags |= PerformedWork;
    var newChild = createWorkInProgress(currentChild, nextProps);
    newChild.ref = workInProgress.ref;
    newChild.return = workInProgress;
    workInProgress.child = newChild;
    return newChild;
  }

  function updateSimpleMemoComponent(current, workInProgress, Component, nextProps, updateLanes, renderLanes) {
    // TODO: current can be non-null here even if the component
    // hasn't yet mounted. This happens when the inner render suspends.
    // We'll need to figure out if this is fine or can cause issues.
    {
      if (workInProgress.type !== workInProgress.elementType) {
        // Lazy component props can't be validated in createElement
        // because they're only guaranteed to be resolved here.
        var outerMemoType = workInProgress.elementType;

        if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
          // We warn when you define propTypes on lazy()
          // so let's just skip over it to find memo() outer wrapper.
          // Inner props for memo are validated later.
          var lazyComponent = outerMemoType;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            outerMemoType = init(payload);
          } catch (x) {
            outerMemoType = null;
          } // Inner propTypes will be validated in the function component path.


          var outerPropTypes = outerMemoType && outerMemoType.propTypes;

          if (outerPropTypes) {
            checkPropTypes(outerPropTypes, nextProps, // Resolved (SimpleMemoComponent has no defaultProps)
            'prop', getComponentName(outerMemoType));
          }
        }
      }
    }

    if (current !== null) {
      var prevProps = current.memoizedProps;

      if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress.ref && ( // Prevent bailout if the implementation changed due to hot reload.
       workInProgress.type === current.type )) {
        didReceiveUpdate = false;

        if (!includesSomeLane(renderLanes, updateLanes)) {
          // The pending lanes were cleared at the beginning of beginWork. We're
          // about to bail out, but there might be other lanes that weren't
          // included in the current render. Usually, the priority level of the
          // remaining updates is accumlated during the evaluation of the
          // component (i.e. when processing the update queue). But since since
          // we're bailing out early *without* evaluating the component, we need
          // to account for it here, too. Reset to the value of the current fiber.
          // NOTE: This only applies to SimpleMemoComponent, not MemoComponent,
          // because a MemoComponent fiber does not have hooks or an update queue;
          // rather, it wraps around an inner component, which may or may not
          // contains hooks.
          // TODO: Move the reset at in beginWork out of the common path so that
          // this is no longer necessary.
          workInProgress.lanes = current.lanes;
          return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        } else if ((current.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
          // This is a special case that only exists for legacy mode.
          // See https://github.com/facebook/react/pull/19216.
          didReceiveUpdate = true;
        }
      }
    }

    return updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes);
  }

  function updateOffscreenComponent(current, workInProgress, renderLanes) {
    var nextProps = workInProgress.pendingProps;
    var nextChildren = nextProps.children;
    var prevState = current !== null ? current.memoizedState : null;

    if (nextProps.mode === 'hidden' || nextProps.mode === 'unstable-defer-without-hiding') {
      if ((workInProgress.mode & ConcurrentMode) === NoMode) {
        // In legacy sync mode, don't defer the subtree. Render it now.
        // TODO: Figure out what we should do in Blocking mode.
        var nextState = {
          baseLanes: NoLanes
        };
        workInProgress.memoizedState = nextState;
        pushRenderLanes(workInProgress, renderLanes);
      } else if (!includesSomeLane(renderLanes, OffscreenLane)) {
        var nextBaseLanes;

        if (prevState !== null) {
          var prevBaseLanes = prevState.baseLanes;
          nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes);
        } else {
          nextBaseLanes = renderLanes;
        } // Schedule this fiber to re-render at offscreen priority. Then bailout.


        {
          markSpawnedWork(OffscreenLane);
        }

        workInProgress.lanes = workInProgress.childLanes = laneToLanes(OffscreenLane);
        var _nextState = {
          baseLanes: nextBaseLanes
        };
        workInProgress.memoizedState = _nextState; // We're about to bail out, but we need to push this to the stack anyway
        // to avoid a push/pop misalignment.

        pushRenderLanes(workInProgress, nextBaseLanes);
        return null;
      } else {
        // Rendering at offscreen, so we can clear the base lanes.
        var _nextState2 = {
          baseLanes: NoLanes
        };
        workInProgress.memoizedState = _nextState2; // Push the lanes that were skipped when we bailed out.

        var subtreeRenderLanes = prevState !== null ? prevState.baseLanes : renderLanes;
        pushRenderLanes(workInProgress, subtreeRenderLanes);
      }
    } else {
      var _subtreeRenderLanes;

      if (prevState !== null) {
        _subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes); // Since we're not hidden anymore, reset the state

        workInProgress.memoizedState = null;
      } else {
        // We weren't previously hidden, and we still aren't, so there's nothing
        // special to do. Need to push to the stack regardless, though, to avoid
        // a push/pop misalignment.
        _subtreeRenderLanes = renderLanes;
      }

      pushRenderLanes(workInProgress, _subtreeRenderLanes);
    }

    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    return workInProgress.child;
  } // Note: These happen to have identical begin phases, for now. We shouldn't hold
  // ourselves to this constraint, though. If the behavior diverges, we should
  // fork the function.


  var updateLegacyHiddenComponent = updateOffscreenComponent;

  function updateFragment(current, workInProgress, renderLanes) {
    var nextChildren = workInProgress.pendingProps;
    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    return workInProgress.child;
  }

  function updateMode(current, workInProgress, renderLanes) {
    var nextChildren = workInProgress.pendingProps.children;
    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    return workInProgress.child;
  }

  function updateProfiler(current, workInProgress, renderLanes) {
    {
      workInProgress.flags |= Update; // Reset effect durations for the next eventual effect phase.
      // These are reset during render to allow the DevTools commit hook a chance to read them,

      var stateNode = workInProgress.stateNode;
      stateNode.effectDuration = 0;
      stateNode.passiveEffectDuration = 0;
    }

    var nextProps = workInProgress.pendingProps;
    var nextChildren = nextProps.children;
    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    return workInProgress.child;
  }

  function markRef(current, workInProgress) {
    var ref = workInProgress.ref;

    if (current === null && ref !== null || current !== null && current.ref !== ref) {
      // Schedule a Ref effect
      workInProgress.flags |= Ref;
    }
  }

  function updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes) {
    {
      if (workInProgress.type !== workInProgress.elementType) {
        // Lazy component props can't be validated in createElement
        // because they're only guaranteed to be resolved here.
        var innerPropTypes = Component.propTypes;

        if (innerPropTypes) {
          checkPropTypes(innerPropTypes, nextProps, // Resolved props
          'prop', getComponentName(Component));
        }
      }
    }

    var context;

    {
      var unmaskedContext = getUnmaskedContext(workInProgress, Component, true);
      context = getMaskedContext(workInProgress, unmaskedContext);
    }

    var nextChildren;
    prepareToReadContext(workInProgress, renderLanes);

    {
      ReactCurrentOwner$1.current = workInProgress;
      setIsRendering(true);
      nextChildren = renderWithHooks(current, workInProgress, Component, nextProps, context, renderLanes);

      if ( workInProgress.mode & StrictMode) {
        disableLogs();

        try {
          nextChildren = renderWithHooks(current, workInProgress, Component, nextProps, context, renderLanes);
        } finally {
          reenableLogs();
        }
      }

      setIsRendering(false);
    }

    if (current !== null && !didReceiveUpdate) {
      bailoutHooks(current, workInProgress, renderLanes);
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    } // React DevTools reads this flag.


    workInProgress.flags |= PerformedWork;
    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    return workInProgress.child;
  }

  function updateClassComponent(current, workInProgress, Component, nextProps, renderLanes) {
    {
      if (workInProgress.type !== workInProgress.elementType) {
        // Lazy component props can't be validated in createElement
        // because they're only guaranteed to be resolved here.
        var innerPropTypes = Component.propTypes;

        if (innerPropTypes) {
          checkPropTypes(innerPropTypes, nextProps, // Resolved props
          'prop', getComponentName(Component));
        }
      }
    } // Push context providers early to prevent context stack mismatches.
    // During mounting we don't know the child context yet as the instance doesn't exist.
    // We will invalidate the child context in finishClassComponent() right after rendering.


    var hasContext;

    if (isContextProvider(Component)) {
      hasContext = true;
      pushContextProvider(workInProgress);
    } else {
      hasContext = false;
    }

    prepareToReadContext(workInProgress, renderLanes);
    var instance = workInProgress.stateNode;
    var shouldUpdate;

    if (instance === null) {
      if (current !== null) {
        // A class component without an instance only mounts if it suspended
        // inside a non-concurrent tree, in an inconsistent state. We want to
        // treat it like a new mount, even though an empty version of it already
        // committed. Disconnect the alternate pointers.
        current.alternate = null;
        workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

        workInProgress.flags |= Placement;
      } // In the initial pass we might need to construct the instance.


      constructClassInstance(workInProgress, Component, nextProps);
      mountClassInstance(workInProgress, Component, nextProps, renderLanes);
      shouldUpdate = true;
    } else if (current === null) {
      // In a resume, we'll already have an instance we can reuse.
      shouldUpdate = resumeMountClassInstance(workInProgress, Component, nextProps, renderLanes);
    } else {
      shouldUpdate = updateClassInstance(current, workInProgress, Component, nextProps, renderLanes);
    }

    var nextUnitOfWork = finishClassComponent(current, workInProgress, Component, shouldUpdate, hasContext, renderLanes);

    {
      var inst = workInProgress.stateNode;

      if (shouldUpdate && inst.props !== nextProps) {
        if (!didWarnAboutReassigningProps) {
          error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentName(workInProgress.type) || 'a component');
        }

        didWarnAboutReassigningProps = true;
      }
    }

    return nextUnitOfWork;
  }

  function finishClassComponent(current, workInProgress, Component, shouldUpdate, hasContext, renderLanes) {
    // Refs should update even if shouldComponentUpdate returns false
    markRef(current, workInProgress);
    var didCaptureError = (workInProgress.flags & DidCapture) !== NoFlags;

    if (!shouldUpdate && !didCaptureError) {
      // Context providers should defer to sCU for rendering
      if (hasContext) {
        invalidateContextProvider(workInProgress, Component, false);
      }

      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    }

    var instance = workInProgress.stateNode; // Rerender

    ReactCurrentOwner$1.current = workInProgress;
    var nextChildren;

    if (didCaptureError && typeof Component.getDerivedStateFromError !== 'function') {
      // If we captured an error, but getDerivedStateFromError is not defined,
      // unmount all the children. componentDidCatch will schedule an update to
      // re-render a fallback. This is temporary until we migrate everyone to
      // the new API.
      // TODO: Warn in a future release.
      nextChildren = null;

      {
        stopProfilerTimerIfRunning();
      }
    } else {
      {
        setIsRendering(true);
        nextChildren = instance.render();

        if ( workInProgress.mode & StrictMode) {
          disableLogs();

          try {
            instance.render();
          } finally {
            reenableLogs();
          }
        }

        setIsRendering(false);
      }
    } // React DevTools reads this flag.


    workInProgress.flags |= PerformedWork;

    if (current !== null && didCaptureError) {
      // If we're recovering from an error, reconcile without reusing any of
      // the existing children. Conceptually, the normal children and the children
      // that are shown on error are two different sets, so we shouldn't reuse
      // normal children even if their identities match.
      forceUnmountCurrentAndReconcile(current, workInProgress, nextChildren, renderLanes);
    } else {
      reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    } // Memoize state using the values we just used to render.
    // TODO: Restructure so we never read values from the instance.


    workInProgress.memoizedState = instance.state; // The context might have changed so we need to recalculate it.

    if (hasContext) {
      invalidateContextProvider(workInProgress, Component, true);
    }

    return workInProgress.child;
  }

  function pushHostRootContext(workInProgress) {
    var root = workInProgress.stateNode;

    if (root.pendingContext) {
      pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
    } else if (root.context) {
      // Should always be set
      pushTopLevelContextObject(workInProgress, root.context, false);
    }

    pushHostContainer(workInProgress, root.containerInfo);
  }

  function updateHostRoot(current, workInProgress, renderLanes) {
    pushHostRootContext(workInProgress);
    var updateQueue = workInProgress.updateQueue;

    if (!(current !== null && updateQueue !== null)) {
      {
        throw Error( "If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    var nextProps = workInProgress.pendingProps;
    var prevState = workInProgress.memoizedState;
    var prevChildren = prevState !== null ? prevState.element : null;
    cloneUpdateQueue(current, workInProgress);
    processUpdateQueue(workInProgress, nextProps, null, renderLanes);
    var nextState = workInProgress.memoizedState; // Caution: React DevTools currently depends on this property
    // being called "element".

    var nextChildren = nextState.element;

    if (nextChildren === prevChildren) {
      resetHydrationState();
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    }

    var root = workInProgress.stateNode;

    if (root.hydrate && enterHydrationState(workInProgress)) {
      // If we don't have any current children this might be the first pass.
      // We always try to hydrate. If this isn't a hydration pass there won't
      // be any children to hydrate which is effectively the same thing as
      // not hydrating.
      if (supportsHydration) {
        var mutableSourceEagerHydrationData = root.mutableSourceEagerHydrationData;

        if (mutableSourceEagerHydrationData != null) {
          for (var i = 0; i < mutableSourceEagerHydrationData.length; i += 2) {
            var mutableSource = mutableSourceEagerHydrationData[i];
            var version = mutableSourceEagerHydrationData[i + 1];
            setWorkInProgressVersion(mutableSource, version);
          }
        }
      }

      var child = mountChildFibers(workInProgress, null, nextChildren, renderLanes);
      workInProgress.child = child;
      var node = child;

      while (node) {
        // Mark each child as hydrating. This is a fast path to know whether this
        // tree is part of a hydrating tree. This is used to determine if a child
        // node has fully mounted yet, and for scheduling event replaying.
        // Conceptually this is similar to Placement in that a new subtree is
        // inserted into the React tree here. It just happens to not need DOM
        // mutations because it already exists.
        node.flags = node.flags & ~Placement | Hydrating;
        node = node.sibling;
      }
    } else {
      // Otherwise reset hydration state in case we aborted and resumed another
      // root.
      reconcileChildren(current, workInProgress, nextChildren, renderLanes);
      resetHydrationState();
    }

    return workInProgress.child;
  }

  function updateHostComponent(current, workInProgress, renderLanes) {
    pushHostContext(workInProgress);

    if (current === null) {
      tryToClaimNextHydratableInstance(workInProgress);
    }

    var type = workInProgress.type;
    var nextProps = workInProgress.pendingProps;
    var prevProps = current !== null ? current.memoizedProps : null;
    var nextChildren = nextProps.children;
    var isDirectTextChild = shouldSetTextContent(type, nextProps);

    if (isDirectTextChild) {
      // We special case a direct text child of a host node. This is a common
      // case. We won't handle it as a reified child. We will instead handle
      // this in the host environment that also has access to this prop. That
      // avoids allocating another HostText fiber and traversing it.
      nextChildren = null;
    } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
      // If we're switching from a direct text child to a normal child, or to
      // empty, we need to schedule the text content to be reset.
      workInProgress.flags |= ContentReset;
    }

    markRef(current, workInProgress);
    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    return workInProgress.child;
  }

  function updateHostText(current, workInProgress) {
    if (current === null) {
      tryToClaimNextHydratableInstance(workInProgress);
    } // Nothing to do here. This is terminal. We'll do the completion step
    // immediately after.


    return null;
  }

  function mountLazyComponent(_current, workInProgress, elementType, updateLanes, renderLanes) {
    if (_current !== null) {
      // A lazy component only mounts if it suspended inside a non-
      // concurrent tree, in an inconsistent state. We want to treat it like
      // a new mount, even though an empty version of it already committed.
      // Disconnect the alternate pointers.
      _current.alternate = null;
      workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

      workInProgress.flags |= Placement;
    }

    var props = workInProgress.pendingProps;
    var lazyComponent = elementType;
    var payload = lazyComponent._payload;
    var init = lazyComponent._init;
    var Component = init(payload); // Store the unwrapped component in the type.

    workInProgress.type = Component;
    var resolvedTag = workInProgress.tag = resolveLazyComponentTag(Component);
    var resolvedProps = resolveDefaultProps(Component, props);
    var child;

    switch (resolvedTag) {
      case FunctionComponent:
        {
          {
            validateFunctionComponentInDev(workInProgress, Component);
            workInProgress.type = Component = resolveFunctionForHotReloading(Component);
          }

          child = updateFunctionComponent(null, workInProgress, Component, resolvedProps, renderLanes);
          return child;
        }

      case ClassComponent:
        {
          {
            workInProgress.type = Component = resolveClassForHotReloading(Component);
          }

          child = updateClassComponent(null, workInProgress, Component, resolvedProps, renderLanes);
          return child;
        }

      case ForwardRef:
        {
          {
            workInProgress.type = Component = resolveForwardRefForHotReloading(Component);
          }

          child = updateForwardRef(null, workInProgress, Component, resolvedProps, renderLanes);
          return child;
        }

      case MemoComponent:
        {
          {
            if (workInProgress.type !== workInProgress.elementType) {
              var outerPropTypes = Component.propTypes;

              if (outerPropTypes) {
                checkPropTypes(outerPropTypes, resolvedProps, // Resolved for outer only
                'prop', getComponentName(Component));
              }
            }
          }

          child = updateMemoComponent(null, workInProgress, Component, resolveDefaultProps(Component.type, resolvedProps), // The inner type can have defaults too
          updateLanes, renderLanes);
          return child;
        }
    }

    var hint = '';

    {
      if (Component !== null && typeof Component === 'object' && Component.$$typeof === REACT_LAZY_TYPE) {
        hint = ' Did you wrap a component in React.lazy() more than once?';
      }
    } // This message intentionally doesn't mention ForwardRef or MemoComponent
    // because the fact that it's a separate type of work is an
    // implementation detail.


    {
      {
        throw Error( "Element type is invalid. Received a promise that resolves to: " + Component + ". Lazy element type must resolve to a class or function." + hint );
      }
    }
  }

  function mountIncompleteClassComponent(_current, workInProgress, Component, nextProps, renderLanes) {
    if (_current !== null) {
      // An incomplete component only mounts if it suspended inside a non-
      // concurrent tree, in an inconsistent state. We want to treat it like
      // a new mount, even though an empty version of it already committed.
      // Disconnect the alternate pointers.
      _current.alternate = null;
      workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

      workInProgress.flags |= Placement;
    } // Promote the fiber to a class and try rendering again.


    workInProgress.tag = ClassComponent; // The rest of this function is a fork of `updateClassComponent`
    // Push context providers early to prevent context stack mismatches.
    // During mounting we don't know the child context yet as the instance doesn't exist.
    // We will invalidate the child context in finishClassComponent() right after rendering.

    var hasContext;

    if (isContextProvider(Component)) {
      hasContext = true;
      pushContextProvider(workInProgress);
    } else {
      hasContext = false;
    }

    prepareToReadContext(workInProgress, renderLanes);
    constructClassInstance(workInProgress, Component, nextProps);
    mountClassInstance(workInProgress, Component, nextProps, renderLanes);
    return finishClassComponent(null, workInProgress, Component, true, hasContext, renderLanes);
  }

  function mountIndeterminateComponent(_current, workInProgress, Component, renderLanes) {
    if (_current !== null) {
      // An indeterminate component only mounts if it suspended inside a non-
      // concurrent tree, in an inconsistent state. We want to treat it like
      // a new mount, even though an empty version of it already committed.
      // Disconnect the alternate pointers.
      _current.alternate = null;
      workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

      workInProgress.flags |= Placement;
    }

    var props = workInProgress.pendingProps;
    var context;

    {
      var unmaskedContext = getUnmaskedContext(workInProgress, Component, false);
      context = getMaskedContext(workInProgress, unmaskedContext);
    }

    prepareToReadContext(workInProgress, renderLanes);
    var value;

    {
      if (Component.prototype && typeof Component.prototype.render === 'function') {
        var componentName = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutBadClass[componentName]) {
          error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);

          didWarnAboutBadClass[componentName] = true;
        }
      }

      if (workInProgress.mode & StrictMode) {
        ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
      }

      setIsRendering(true);
      ReactCurrentOwner$1.current = workInProgress;
      value = renderWithHooks(null, workInProgress, Component, props, context, renderLanes);
      setIsRendering(false);
    } // React DevTools reads this flag.


    workInProgress.flags |= PerformedWork;

    {
      // Support for module components is deprecated and is removed behind a flag.
      // Whether or not it would crash later, we want to show a good message in DEV first.
      if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
        var _componentName = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutModulePatternComponent[_componentName]) {
          error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);

          didWarnAboutModulePatternComponent[_componentName] = true;
        }
      }
    }

    if ( // Run these checks in production only if the flag is off.
    // Eventually we'll delete this branch altogether.
     typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
      {
        var _componentName2 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutModulePatternComponent[_componentName2]) {
          error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);

          didWarnAboutModulePatternComponent[_componentName2] = true;
        }
      } // Proceed under the assumption that this is a class instance


      workInProgress.tag = ClassComponent; // Throw out any hooks that were used.

      workInProgress.memoizedState = null;
      workInProgress.updateQueue = null; // Push context providers early to prevent context stack mismatches.
      // During mounting we don't know the child context yet as the instance doesn't exist.
      // We will invalidate the child context in finishClassComponent() right after rendering.

      var hasContext = false;

      if (isContextProvider(Component)) {
        hasContext = true;
        pushContextProvider(workInProgress);
      } else {
        hasContext = false;
      }

      workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;
      initializeUpdateQueue(workInProgress);
      var getDerivedStateFromProps = Component.getDerivedStateFromProps;

      if (typeof getDerivedStateFromProps === 'function') {
        applyDerivedStateFromProps(workInProgress, Component, getDerivedStateFromProps, props);
      }

      adoptClassInstance(workInProgress, value);
      mountClassInstance(workInProgress, Component, props, renderLanes);
      return finishClassComponent(null, workInProgress, Component, true, hasContext, renderLanes);
    } else {
      // Proceed under the assumption that this is a function component
      workInProgress.tag = FunctionComponent;

      {

        if ( workInProgress.mode & StrictMode) {
          disableLogs();

          try {
            value = renderWithHooks(null, workInProgress, Component, props, context, renderLanes);
          } finally {
            reenableLogs();
          }
        }
      }

      reconcileChildren(null, workInProgress, value, renderLanes);

      {
        validateFunctionComponentInDev(workInProgress, Component);
      }

      return workInProgress.child;
    }
  }

  function validateFunctionComponentInDev(workInProgress, Component) {
    {
      if (Component) {
        if (Component.childContextTypes) {
          error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
        }
      }

      if (workInProgress.ref !== null) {
        var info = '';
        var ownerName = getCurrentFiberOwnerNameInDevOrNull();

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }

        var warningKey = ownerName || workInProgress._debugID || '';
        var debugSource = workInProgress._debugSource;

        if (debugSource) {
          warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
        }

        if (!didWarnAboutFunctionRefs[warningKey]) {
          didWarnAboutFunctionRefs[warningKey] = true;

          error('Function components cannot be given refs. ' + 'Attempts to access this ref will fail. ' + 'Did you mean to use React.forwardRef()?%s', info);
        }
      }

      if (typeof Component.getDerivedStateFromProps === 'function') {
        var _componentName3 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
          error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);

          didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
        }
      }

      if (typeof Component.contextType === 'object' && Component.contextType !== null) {
        var _componentName4 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
          error('%s: Function components do not support contextType.', _componentName4);

          didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
        }
      }
    }
  }

  var SUSPENDED_MARKER = {
    dehydrated: null,
    retryLane: NoLane
  };

  function mountSuspenseOffscreenState(renderLanes) {
    return {
      baseLanes: renderLanes
    };
  }

  function updateSuspenseOffscreenState(prevOffscreenState, renderLanes) {
    return {
      baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes)
    };
  } // TODO: Probably should inline this back


  function shouldRemainOnFallback(suspenseContext, current, workInProgress, renderLanes) {
    // If we're already showing a fallback, there are cases where we need to
    // remain on that fallback regardless of whether the content has resolved.
    // For example, SuspenseList coordinates when nested content appears.
    if (current !== null) {
      var suspenseState = current.memoizedState;

      if (suspenseState === null) {
        // Currently showing content. Don't hide it, even if ForceSuspenseFallack
        // is true. More precise name might be "ForceRemainSuspenseFallback".
        // Note: This is a factoring smell. Can't remain on a fallback if there's
        // no fallback to remain on.
        return false;
      }
    } // Not currently showing content. Consult the Suspense context.


    return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
  }

  function getRemainingWorkInPrimaryTree(current, renderLanes) {
    // TODO: Should not remove render lanes that were pinged during this render
    return removeLanes(current.childLanes, renderLanes);
  }

  function updateSuspenseComponent(current, workInProgress, renderLanes) {
    var nextProps = workInProgress.pendingProps; // This is used by DevTools to force a boundary to suspend.

    {
      if (shouldSuspend(workInProgress)) {
        workInProgress.flags |= DidCapture;
      }
    }

    var suspenseContext = suspenseStackCursor.current;
    var showFallback = false;
    var didSuspend = (workInProgress.flags & DidCapture) !== NoFlags;

    if (didSuspend || shouldRemainOnFallback(suspenseContext, current)) {
      // Something in this boundary's subtree already suspended. Switch to
      // rendering the fallback children.
      showFallback = true;
      workInProgress.flags &= ~DidCapture;
    } else {
      // Attempting the main content
      if (current === null || current.memoizedState !== null) {
        // This is a new mount or this boundary is already showing a fallback state.
        // Mark this subtree context as having at least one invisible parent that could
        // handle the fallback state.
        // Boundaries without fallbacks or should be avoided are not considered since
        // they cannot handle preferred fallback states.
        if (nextProps.fallback !== undefined && nextProps.unstable_avoidThisFallback !== true) {
          suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
        }
      }
    }

    suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
    pushSuspenseContext(workInProgress, suspenseContext); // OK, the next part is confusing. We're about to reconcile the Suspense
    // boundary's children. This involves some custom reconcilation logic. Two
    // main reasons this is so complicated.
    //
    // First, Legacy Mode has different semantics for backwards compatibility. The
    // primary tree will commit in an inconsistent state, so when we do the
    // second pass to render the fallback, we do some exceedingly, uh, clever
    // hacks to make that not totally break. Like transferring effects and
    // deletions from hidden tree. In Concurrent Mode, it's much simpler,
    // because we bailout on the primary tree completely and leave it in its old
    // state, no effects. Same as what we do for Offscreen (except that
    // Offscreen doesn't have the first render pass).
    //
    // Second is hydration. During hydration, the Suspense fiber has a slightly
    // different layout, where the child points to a dehydrated fragment, which
    // contains the DOM rendered by the server.
    //
    // Third, even if you set all that aside, Suspense is like error boundaries in
    // that we first we try to render one tree, and if that fails, we render again
    // and switch to a different tree. Like a try/catch block. So we have to track
    // which branch we're currently rendering. Ideally we would model this using
    // a stack.

    if (current === null) {
      // Initial mount
      // If we're currently hydrating, try to hydrate this boundary.
      // But only if this has a fallback.
      if (nextProps.fallback !== undefined) {
        tryToClaimNextHydratableInstance(workInProgress); // This could've been a dehydrated suspense component.
      }

      var nextPrimaryChildren = nextProps.children;
      var nextFallbackChildren = nextProps.fallback;

      if (showFallback) {
        var fallbackFragment = mountSuspenseFallbackChildren(workInProgress, nextPrimaryChildren, nextFallbackChildren, renderLanes);
        var primaryChildFragment = workInProgress.child;
        primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes);
        workInProgress.memoizedState = SUSPENDED_MARKER;
        return fallbackFragment;
      } else if (typeof nextProps.unstable_expectedLoadTime === 'number') {
        // This is a CPU-bound tree. Skip this tree and show a placeholder to
        // unblock the surrounding content. Then immediately retry after the
        // initial commit.
        var _fallbackFragment = mountSuspenseFallbackChildren(workInProgress, nextPrimaryChildren, nextFallbackChildren, renderLanes);

        var _primaryChildFragment = workInProgress.child;
        _primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes);
        workInProgress.memoizedState = SUSPENDED_MARKER; // Since nothing actually suspended, there will nothing to ping this to
        // get it started back up to attempt the next item. While in terms of
        // priority this work has the same priority as this current render, it's
        // not part of the same transition once the transition has committed. If
        // it's sync, we still want to yield so that it can be painted.
        // Conceptually, this is really the same as pinging. We can use any
        // RetryLane even if it's the one currently rendering since we're leaving
        // it behind on this node.

        workInProgress.lanes = SomeRetryLane;

        {
          markSpawnedWork(SomeRetryLane);
        }

        return _fallbackFragment;
      } else {
        return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren, renderLanes);
      }
    } else {
      // This is an update.
      // If the current fiber has a SuspenseState, that means it's already showing
      // a fallback.
      var prevState = current.memoizedState;

      if (prevState !== null) {

        if (showFallback) {
          var _nextFallbackChildren2 = nextProps.fallback;
          var _nextPrimaryChildren2 = nextProps.children;

          var _fallbackChildFragment = updateSuspenseFallbackChildren(current, workInProgress, _nextPrimaryChildren2, _nextFallbackChildren2, renderLanes);

          var _primaryChildFragment3 = workInProgress.child;
          var prevOffscreenState = current.child.memoizedState;
          _primaryChildFragment3.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes);
          _primaryChildFragment3.childLanes = getRemainingWorkInPrimaryTree(current, renderLanes);
          workInProgress.memoizedState = SUSPENDED_MARKER;
          return _fallbackChildFragment;
        } else {
          var _nextPrimaryChildren3 = nextProps.children;

          var _primaryChildFragment4 = updateSuspensePrimaryChildren(current, workInProgress, _nextPrimaryChildren3, renderLanes);

          workInProgress.memoizedState = null;
          return _primaryChildFragment4;
        }
      } else {
        // The current tree is not already showing a fallback.
        if (showFallback) {
          // Timed out.
          var _nextFallbackChildren3 = nextProps.fallback;
          var _nextPrimaryChildren4 = nextProps.children;

          var _fallbackChildFragment2 = updateSuspenseFallbackChildren(current, workInProgress, _nextPrimaryChildren4, _nextFallbackChildren3, renderLanes);

          var _primaryChildFragment5 = workInProgress.child;
          var _prevOffscreenState = current.child.memoizedState;
          _primaryChildFragment5.memoizedState = _prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes) : updateSuspenseOffscreenState(_prevOffscreenState, renderLanes);
          _primaryChildFragment5.childLanes = getRemainingWorkInPrimaryTree(current, renderLanes); // Skip the primary children, and continue working on the
          // fallback children.

          workInProgress.memoizedState = SUSPENDED_MARKER;
          return _fallbackChildFragment2;
        } else {
          // Still haven't timed out. Continue rendering the children, like we
          // normally do.
          var _nextPrimaryChildren5 = nextProps.children;

          var _primaryChildFragment6 = updateSuspensePrimaryChildren(current, workInProgress, _nextPrimaryChildren5, renderLanes);

          workInProgress.memoizedState = null;
          return _primaryChildFragment6;
        }
      }
    }
  }

  function mountSuspensePrimaryChildren(workInProgress, primaryChildren, renderLanes) {
    var mode = workInProgress.mode;
    var primaryChildProps = {
      mode: 'visible',
      children: primaryChildren
    };
    var primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, renderLanes, null);
    primaryChildFragment.return = workInProgress;
    workInProgress.child = primaryChildFragment;
    return primaryChildFragment;
  }

  function mountSuspenseFallbackChildren(workInProgress, primaryChildren, fallbackChildren, renderLanes) {
    var mode = workInProgress.mode;
    var progressedPrimaryFragment = workInProgress.child;
    var primaryChildProps = {
      mode: 'hidden',
      children: primaryChildren
    };
    var primaryChildFragment;
    var fallbackChildFragment;

    if ((mode & BlockingMode) === NoMode && progressedPrimaryFragment !== null) {
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      primaryChildFragment = progressedPrimaryFragment;
      primaryChildFragment.childLanes = NoLanes;
      primaryChildFragment.pendingProps = primaryChildProps;

      if ( workInProgress.mode & ProfileMode) {
        // Reset the durations from the first pass so they aren't included in the
        // final amounts. This seems counterintuitive, since we're intentionally
        // not measuring part of the render phase, but this makes it match what we
        // do in Concurrent Mode.
        primaryChildFragment.actualDuration = 0;
        primaryChildFragment.actualStartTime = -1;
        primaryChildFragment.selfBaseDuration = 0;
        primaryChildFragment.treeBaseDuration = 0;
      }

      fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes, null);
    } else {
      primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, NoLanes, null);
      fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes, null);
    }

    primaryChildFragment.return = workInProgress;
    fallbackChildFragment.return = workInProgress;
    primaryChildFragment.sibling = fallbackChildFragment;
    workInProgress.child = primaryChildFragment;
    return fallbackChildFragment;
  }

  function createWorkInProgressOffscreenFiber(current, offscreenProps) {
    // The props argument to `createWorkInProgress` is `any` typed, so we use this
    // wrapper function to constrain it.
    return createWorkInProgress(current, offscreenProps);
  }

  function updateSuspensePrimaryChildren(current, workInProgress, primaryChildren, renderLanes) {
    var currentPrimaryChildFragment = current.child;
    var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
    var primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
      mode: 'visible',
      children: primaryChildren
    });

    if ((workInProgress.mode & BlockingMode) === NoMode) {
      primaryChildFragment.lanes = renderLanes;
    }

    primaryChildFragment.return = workInProgress;
    primaryChildFragment.sibling = null;

    if (currentFallbackChildFragment !== null) {
      // Delete the fallback child fragment
      currentFallbackChildFragment.nextEffect = null;
      currentFallbackChildFragment.flags = Deletion;
      workInProgress.firstEffect = workInProgress.lastEffect = currentFallbackChildFragment;
    }

    workInProgress.child = primaryChildFragment;
    return primaryChildFragment;
  }

  function updateSuspenseFallbackChildren(current, workInProgress, primaryChildren, fallbackChildren, renderLanes) {
    var mode = workInProgress.mode;
    var currentPrimaryChildFragment = current.child;
    var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
    var primaryChildProps = {
      mode: 'hidden',
      children: primaryChildren
    };
    var primaryChildFragment;

    if ( // In legacy mode, we commit the primary tree as if it successfully
    // completed, even though it's in an inconsistent state.
    (mode & BlockingMode) === NoMode && // Make sure we're on the second pass, i.e. the primary child fragment was
    // already cloned. In legacy mode, the only case where this isn't true is
    // when DevTools forces us to display a fallback; we skip the first render
    // pass entirely and go straight to rendering the fallback. (In Concurrent
    // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
    // only codepath.)
    workInProgress.child !== currentPrimaryChildFragment) {
      var progressedPrimaryFragment = workInProgress.child;
      primaryChildFragment = progressedPrimaryFragment;
      primaryChildFragment.childLanes = NoLanes;
      primaryChildFragment.pendingProps = primaryChildProps;

      if ( workInProgress.mode & ProfileMode) {
        // Reset the durations from the first pass so they aren't included in the
        // final amounts. This seems counterintuitive, since we're intentionally
        // not measuring part of the render phase, but this makes it match what we
        // do in Concurrent Mode.
        primaryChildFragment.actualDuration = 0;
        primaryChildFragment.actualStartTime = -1;
        primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
        primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
      } // The fallback fiber was added as a deletion effect during the first pass.
      // However, since we're going to remain on the fallback, we no longer want
      // to delete it. So we need to remove it from the list. Deletions are stored
      // on the same list as effects. We want to keep the effects from the primary
      // tree. So we copy the primary child fragment's effect list, which does not
      // include the fallback deletion effect.


      var progressedLastEffect = primaryChildFragment.lastEffect;

      if (progressedLastEffect !== null) {
        workInProgress.firstEffect = primaryChildFragment.firstEffect;
        workInProgress.lastEffect = progressedLastEffect;
        progressedLastEffect.nextEffect = null;
      } else {
        // TODO: Reset this somewhere else? Lol legacy mode is so weird.
        workInProgress.firstEffect = workInProgress.lastEffect = null;
      }
    } else {
      primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
    }

    var fallbackChildFragment;

    if (currentFallbackChildFragment !== null) {
      fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
    } else {
      fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes, null); // Needs a placement effect because the parent (the Suspense boundary) already
      // mounted but this is a new fiber.

      fallbackChildFragment.flags |= Placement;
    }

    fallbackChildFragment.return = workInProgress;
    primaryChildFragment.return = workInProgress;
    primaryChildFragment.sibling = fallbackChildFragment;
    workInProgress.child = primaryChildFragment;
    return fallbackChildFragment;
  }

  function scheduleWorkOnFiber(fiber, renderLanes) {
    fiber.lanes = mergeLanes(fiber.lanes, renderLanes);
    var alternate = fiber.alternate;

    if (alternate !== null) {
      alternate.lanes = mergeLanes(alternate.lanes, renderLanes);
    }

    scheduleWorkOnParentPath(fiber.return, renderLanes);
  }

  function propagateSuspenseContextChange(workInProgress, firstChild, renderLanes) {
    // Mark any Suspense boundaries with fallbacks as having work to do.
    // If they were previously forced into fallbacks, they may now be able
    // to unblock.
    var node = firstChild;

    while (node !== null) {
      if (node.tag === SuspenseComponent) {
        var state = node.memoizedState;

        if (state !== null) {
          scheduleWorkOnFiber(node, renderLanes);
        }
      } else if (node.tag === SuspenseListComponent) {
        // If the tail is hidden there might not be an Suspense boundaries
        // to schedule work on. In this case we have to schedule it on the
        // list itself.
        // We don't have to traverse to the children of the list since
        // the list will propagate the change when it rerenders.
        scheduleWorkOnFiber(node, renderLanes);
      } else if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === workInProgress) {
        return;
      }

      while (node.sibling === null) {
        if (node.return === null || node.return === workInProgress) {
          return;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    }
  }

  function findLastContentRow(firstChild) {
    // This is going to find the last row among these children that is already
    // showing content on the screen, as opposed to being in fallback state or
    // new. If a row has multiple Suspense boundaries, any of them being in the
    // fallback state, counts as the whole row being in a fallback state.
    // Note that the "rows" will be workInProgress, but any nested children
    // will still be current since we haven't rendered them yet. The mounted
    // order may not be the same as the new order. We use the new order.
    var row = firstChild;
    var lastContentRow = null;

    while (row !== null) {
      var currentRow = row.alternate; // New rows can't be content rows.

      if (currentRow !== null && findFirstSuspended(currentRow) === null) {
        lastContentRow = row;
      }

      row = row.sibling;
    }

    return lastContentRow;
  }

  function validateRevealOrder(revealOrder) {
    {
      if (revealOrder !== undefined && revealOrder !== 'forwards' && revealOrder !== 'backwards' && revealOrder !== 'together' && !didWarnAboutRevealOrder[revealOrder]) {
        didWarnAboutRevealOrder[revealOrder] = true;

        if (typeof revealOrder === 'string') {
          switch (revealOrder.toLowerCase()) {
            case 'together':
            case 'forwards':
            case 'backwards':
              {
                error('"%s" is not a valid value for revealOrder on <SuspenseList />. ' + 'Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());

                break;
              }

            case 'forward':
            case 'backward':
              {
                error('"%s" is not a valid value for revealOrder on <SuspenseList />. ' + 'React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());

                break;
              }

            default:
              error('"%s" is not a supported revealOrder on <SuspenseList />. ' + 'Did you mean "together", "forwards" or "backwards"?', revealOrder);

              break;
          }
        } else {
          error('%s is not a supported value for revealOrder on <SuspenseList />. ' + 'Did you mean "together", "forwards" or "backwards"?', revealOrder);
        }
      }
    }
  }

  function validateTailOptions(tailMode, revealOrder) {
    {
      if (tailMode !== undefined && !didWarnAboutTailOptions[tailMode]) {
        if (tailMode !== 'collapsed' && tailMode !== 'hidden') {
          didWarnAboutTailOptions[tailMode] = true;

          error('"%s" is not a supported value for tail on <SuspenseList />. ' + 'Did you mean "collapsed" or "hidden"?', tailMode);
        } else if (revealOrder !== 'forwards' && revealOrder !== 'backwards') {
          didWarnAboutTailOptions[tailMode] = true;

          error('<SuspenseList tail="%s" /> is only valid if revealOrder is ' + '"forwards" or "backwards". ' + 'Did you mean to specify revealOrder="forwards"?', tailMode);
        }
      }
    }
  }

  function validateSuspenseListNestedChild(childSlot, index) {
    {
      var isArray = Array.isArray(childSlot);
      var isIterable = !isArray && typeof getIteratorFn(childSlot) === 'function';

      if (isArray || isIterable) {
        var type = isArray ? 'array' : 'iterable';

        error('A nested %s was passed to row #%s in <SuspenseList />. Wrap it in ' + 'an additional SuspenseList to configure its revealOrder: ' + '<SuspenseList revealOrder=...> ... ' + '<SuspenseList revealOrder=...>{%s}</SuspenseList> ... ' + '</SuspenseList>', type, index, type);

        return false;
      }
    }

    return true;
  }

  function validateSuspenseListChildren(children, revealOrder) {
    {
      if ((revealOrder === 'forwards' || revealOrder === 'backwards') && children !== undefined && children !== null && children !== false) {
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            if (!validateSuspenseListNestedChild(children[i], i)) {
              return;
            }
          }
        } else {
          var iteratorFn = getIteratorFn(children);

          if (typeof iteratorFn === 'function') {
            var childrenIterator = iteratorFn.call(children);

            if (childrenIterator) {
              var step = childrenIterator.next();
              var _i = 0;

              for (; !step.done; step = childrenIterator.next()) {
                if (!validateSuspenseListNestedChild(step.value, _i)) {
                  return;
                }

                _i++;
              }
            }
          } else {
            error('A single row was passed to a <SuspenseList revealOrder="%s" />. ' + 'This is not useful since it needs multiple rows. ' + 'Did you mean to pass multiple children or an array?', revealOrder);
          }
        }
      }
    }
  }

  function initSuspenseListRenderState(workInProgress, isBackwards, tail, lastContentRow, tailMode, lastEffectBeforeRendering) {
    var renderState = workInProgress.memoizedState;

    if (renderState === null) {
      workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode,
        lastEffect: lastEffectBeforeRendering
      };
    } else {
      // We can reuse the existing object from previous renders.
      renderState.isBackwards = isBackwards;
      renderState.rendering = null;
      renderState.renderingStartTime = 0;
      renderState.last = lastContentRow;
      renderState.tail = tail;
      renderState.tailMode = tailMode;
      renderState.lastEffect = lastEffectBeforeRendering;
    }
  } // This can end up rendering this component multiple passes.
  // The first pass splits the children fibers into two sets. A head and tail.
  // We first render the head. If anything is in fallback state, we do another
  // pass through beginWork to rerender all children (including the tail) with
  // the force suspend context. If the first render didn't have anything in
  // in fallback state. Then we render each row in the tail one-by-one.
  // That happens in the completeWork phase without going back to beginWork.


  function updateSuspenseListComponent(current, workInProgress, renderLanes) {
    var nextProps = workInProgress.pendingProps;
    var revealOrder = nextProps.revealOrder;
    var tailMode = nextProps.tail;
    var newChildren = nextProps.children;
    validateRevealOrder(revealOrder);
    validateTailOptions(tailMode, revealOrder);
    validateSuspenseListChildren(newChildren, revealOrder);
    reconcileChildren(current, workInProgress, newChildren, renderLanes);
    var suspenseContext = suspenseStackCursor.current;
    var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);

    if (shouldForceFallback) {
      suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
      workInProgress.flags |= DidCapture;
    } else {
      var didSuspendBefore = current !== null && (current.flags & DidCapture) !== NoFlags;

      if (didSuspendBefore) {
        // If we previously forced a fallback, we need to schedule work
        // on any nested boundaries to let them know to try to render
        // again. This is the same as context updating.
        propagateSuspenseContextChange(workInProgress, workInProgress.child, renderLanes);
      }

      suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
    }

    pushSuspenseContext(workInProgress, suspenseContext);

    if ((workInProgress.mode & BlockingMode) === NoMode) {
      // In legacy mode, SuspenseList doesn't work so we just
      // use make it a noop by treating it as the default revealOrder.
      workInProgress.memoizedState = null;
    } else {
      switch (revealOrder) {
        case 'forwards':
          {
            var lastContentRow = findLastContentRow(workInProgress.child);
            var tail;

            if (lastContentRow === null) {
              // The whole list is part of the tail.
              // TODO: We could fast path by just rendering the tail now.
              tail = workInProgress.child;
              workInProgress.child = null;
            } else {
              // Disconnect the tail rows after the content row.
              // We're going to render them separately later.
              tail = lastContentRow.sibling;
              lastContentRow.sibling = null;
            }

            initSuspenseListRenderState(workInProgress, false, // isBackwards
            tail, lastContentRow, tailMode, workInProgress.lastEffect);
            break;
          }

        case 'backwards':
          {
            // We're going to find the first row that has existing content.
            // At the same time we're going to reverse the list of everything
            // we pass in the meantime. That's going to be our tail in reverse
            // order.
            var _tail = null;
            var row = workInProgress.child;
            workInProgress.child = null;

            while (row !== null) {
              var currentRow = row.alternate; // New rows can't be content rows.

              if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                // This is the beginning of the main content.
                workInProgress.child = row;
                break;
              }

              var nextRow = row.sibling;
              row.sibling = _tail;
              _tail = row;
              row = nextRow;
            } // TODO: If workInProgress.child is null, we can continue on the tail immediately.


            initSuspenseListRenderState(workInProgress, true, // isBackwards
            _tail, null, // last
            tailMode, workInProgress.lastEffect);
            break;
          }

        case 'together':
          {
            initSuspenseListRenderState(workInProgress, false, // isBackwards
            null, // tail
            null, // last
            undefined, workInProgress.lastEffect);
            break;
          }

        default:
          {
            // The default reveal order is the same as not having
            // a boundary.
            workInProgress.memoizedState = null;
          }
      }
    }

    return workInProgress.child;
  }

  function updatePortalComponent(current, workInProgress, renderLanes) {
    pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
    var nextChildren = workInProgress.pendingProps;

    if (current === null) {
      // Portals are special because we don't append the children during mount
      // but at commit. Therefore we need to track insertions which the normal
      // flow doesn't do during mount. This doesn't happen at the root because
      // the root always starts with a "current" with a null child.
      // TODO: Consider unifying this with how the root works.
      workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderLanes);
    } else {
      reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    }

    return workInProgress.child;
  }

  var hasWarnedAboutUsingNoValuePropOnContextProvider = false;

  function updateContextProvider(current, workInProgress, renderLanes) {
    var providerType = workInProgress.type;
    var context = providerType._context;
    var newProps = workInProgress.pendingProps;
    var oldProps = workInProgress.memoizedProps;
    var newValue = newProps.value;

    {
      if (!('value' in newProps)) {
        if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
          hasWarnedAboutUsingNoValuePropOnContextProvider = true;

          error('The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?');
        }
      }

      var providerPropTypes = workInProgress.type.propTypes;

      if (providerPropTypes) {
        checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider');
      }
    }

    pushProvider(workInProgress, newValue);

    if (oldProps !== null) {
      var oldValue = oldProps.value;
      var changedBits = calculateChangedBits(context, newValue, oldValue);

      if (changedBits === 0) {
        // No change. Bailout early if children are the same.
        if (oldProps.children === newProps.children && !hasContextChanged()) {
          return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
        }
      } else {
        // The context value changed. Search for matching consumers and schedule
        // them to update.
        propagateContextChange(workInProgress, context, changedBits, renderLanes);
      }
    }

    var newChildren = newProps.children;
    reconcileChildren(current, workInProgress, newChildren, renderLanes);
    return workInProgress.child;
  }

  var hasWarnedAboutUsingContextAsConsumer = false;

  function updateContextConsumer(current, workInProgress, renderLanes) {
    var context = workInProgress.type; // The logic below for Context differs depending on PROD or DEV mode. In
    // DEV mode, we create a separate object for Context.Consumer that acts
    // like a proxy to Context. This proxy object adds unnecessary code in PROD
    // so we use the old behaviour (Context.Consumer references Context) to
    // reduce size and overhead. The separate object references context via
    // a property called "_context", which also gives us the ability to check
    // in DEV mode if this property exists or not and warn if it does not.

    {
      if (context._context === undefined) {
        // This may be because it's a Context (rather than a Consumer).
        // Or it may be because it's older React where they're the same thing.
        // We only want to warn if we're sure it's a new React.
        if (context !== context.Consumer) {
          if (!hasWarnedAboutUsingContextAsConsumer) {
            hasWarnedAboutUsingContextAsConsumer = true;

            error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
        }
      } else {
        context = context._context;
      }
    }

    var newProps = workInProgress.pendingProps;
    var render = newProps.children;

    {
      if (typeof render !== 'function') {
        error('A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.');
      }
    }

    prepareToReadContext(workInProgress, renderLanes);
    var newValue = readContext(context, newProps.unstable_observedBits);
    var newChildren;

    {
      ReactCurrentOwner$1.current = workInProgress;
      setIsRendering(true);
      newChildren = render(newValue);
      setIsRendering(false);
    } // React DevTools reads this flag.


    workInProgress.flags |= PerformedWork;
    reconcileChildren(current, workInProgress, newChildren, renderLanes);
    return workInProgress.child;
  }

  function markWorkInProgressReceivedUpdate() {
    didReceiveUpdate = true;
  }

  function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
    if (current !== null) {
      // Reuse previous dependencies
      workInProgress.dependencies = current.dependencies;
    }

    {
      // Don't update "base" render times for bailouts.
      stopProfilerTimerIfRunning();
    }

    markSkippedUpdateLanes(workInProgress.lanes); // Check if the children have any pending work.

    if (!includesSomeLane(renderLanes, workInProgress.childLanes)) {
      // The children don't have any work either. We can skip them.
      // TODO: Once we add back resuming, we should check if the children are
      // a work-in-progress set. If so, we need to transfer their effects.
      return null;
    } else {
      // This fiber doesn't have work, but its subtree does. Clone the child
      // fibers and continue.
      cloneChildFibers(current, workInProgress);
      return workInProgress.child;
    }
  }

  function remountFiber(current, oldWorkInProgress, newWorkInProgress) {
    {
      var returnFiber = oldWorkInProgress.return;

      if (returnFiber === null) {
        throw new Error('Cannot swap the root fiber.');
      } // Disconnect from the old current.
      // It will get deleted.


      current.alternate = null;
      oldWorkInProgress.alternate = null; // Connect to the new tree.

      newWorkInProgress.index = oldWorkInProgress.index;
      newWorkInProgress.sibling = oldWorkInProgress.sibling;
      newWorkInProgress.return = oldWorkInProgress.return;
      newWorkInProgress.ref = oldWorkInProgress.ref; // Replace the child/sibling pointers above it.

      if (oldWorkInProgress === returnFiber.child) {
        returnFiber.child = newWorkInProgress;
      } else {
        var prevSibling = returnFiber.child;

        if (prevSibling === null) {
          throw new Error('Expected parent to have a child.');
        }

        while (prevSibling.sibling !== oldWorkInProgress) {
          prevSibling = prevSibling.sibling;

          if (prevSibling === null) {
            throw new Error('Expected to find the previous sibling.');
          }
        }

        prevSibling.sibling = newWorkInProgress;
      } // Delete the old fiber and place the new one.
      // Since the old fiber is disconnected, we have to schedule it manually.


      var last = returnFiber.lastEffect;

      if (last !== null) {
        last.nextEffect = current;
        returnFiber.lastEffect = current;
      } else {
        returnFiber.firstEffect = returnFiber.lastEffect = current;
      }

      current.nextEffect = null;
      current.flags = Deletion;
      newWorkInProgress.flags |= Placement; // Restart work from the new fiber.

      return newWorkInProgress;
    }
  }

  function beginWork(current, workInProgress, renderLanes) {
    var updateLanes = workInProgress.lanes;

    {
      if (workInProgress._debugNeedsRemount && current !== null) {
        // This will restart the begin phase with a new fiber.
        return remountFiber(current, workInProgress, createFiberFromTypeAndProps(workInProgress.type, workInProgress.key, workInProgress.pendingProps, workInProgress._debugOwner || null, workInProgress.mode, workInProgress.lanes));
      }
    }

    if (current !== null) {
      var oldProps = current.memoizedProps;
      var newProps = workInProgress.pendingProps;

      if (oldProps !== newProps || hasContextChanged() || ( // Force a re-render if the implementation changed due to hot reload:
       workInProgress.type !== current.type )) {
        // If props or context changed, mark the fiber as having performed work.
        // This may be unset if the props are determined to be equal later (memo).
        didReceiveUpdate = true;
      } else if (!includesSomeLane(renderLanes, updateLanes)) {
        didReceiveUpdate = false; // This fiber does not have any pending work. Bailout without entering
        // the begin phase. There's still some bookkeeping we that needs to be done
        // in this optimized path, mostly pushing stuff onto the stack.

        switch (workInProgress.tag) {
          case HostRoot:
            pushHostRootContext(workInProgress);
            resetHydrationState();
            break;

          case HostComponent:
            pushHostContext(workInProgress);
            break;

          case ClassComponent:
            {
              var Component = workInProgress.type;

              if (isContextProvider(Component)) {
                pushContextProvider(workInProgress);
              }

              break;
            }

          case HostPortal:
            pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
            break;

          case ContextProvider:
            {
              var newValue = workInProgress.memoizedProps.value;
              pushProvider(workInProgress, newValue);
              break;
            }

          case Profiler:
            {
              // Profiler should only call onRender when one of its descendants actually rendered.
              var hasChildWork = includesSomeLane(renderLanes, workInProgress.childLanes);

              if (hasChildWork) {
                workInProgress.flags |= Update;
              } // Reset effect durations for the next eventual effect phase.
              // These are reset during render to allow the DevTools commit hook a chance to read them,


              var stateNode = workInProgress.stateNode;
              stateNode.effectDuration = 0;
              stateNode.passiveEffectDuration = 0;
            }

            break;

          case SuspenseComponent:
            {
              var state = workInProgress.memoizedState;

              if (state !== null) {
                // whether to retry the primary children, or to skip over it and
                // go straight to the fallback. Check the priority of the primary
                // child fragment.


                var primaryChildFragment = workInProgress.child;
                var primaryChildLanes = primaryChildFragment.childLanes;

                if (includesSomeLane(renderLanes, primaryChildLanes)) {
                  // The primary children have pending work. Use the normal path
                  // to attempt to render the primary children again.
                  return updateSuspenseComponent(current, workInProgress, renderLanes);
                } else {
                  // The primary child fragment does not have pending work marked
                  // on it
                  pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current)); // The primary children do not have pending work with sufficient
                  // priority. Bailout.

                  var child = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);

                  if (child !== null) {
                    // The fallback children have pending work. Skip over the
                    // primary children and work on the fallback.
                    return child.sibling;
                  } else {
                    return null;
                  }
                }
              } else {
                pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
              }

              break;
            }

          case SuspenseListComponent:
            {
              var didSuspendBefore = (current.flags & DidCapture) !== NoFlags;

              var _hasChildWork = includesSomeLane(renderLanes, workInProgress.childLanes);

              if (didSuspendBefore) {
                if (_hasChildWork) {
                  // If something was in fallback state last time, and we have all the
                  // same children then we're still in progressive loading state.
                  // Something might get unblocked by state updates or retries in the
                  // tree which will affect the tail. So we need to use the normal
                  // path to compute the correct tail.
                  return updateSuspenseListComponent(current, workInProgress, renderLanes);
                } // If none of the children had any work, that means that none of
                // them got retried so they'll still be blocked in the same way
                // as before. We can fast bail out.


                workInProgress.flags |= DidCapture;
              } // If nothing suspended before and we're rendering the same children,
              // then the tail doesn't matter. Anything new that suspends will work
              // in the "together" mode, so we can continue from the state we had.


              var renderState = workInProgress.memoizedState;

              if (renderState !== null) {
                // Reset to the "together" mode in case we've started a different
                // update in the past but didn't complete it.
                renderState.rendering = null;
                renderState.tail = null;
                renderState.lastEffect = null;
              }

              pushSuspenseContext(workInProgress, suspenseStackCursor.current);

              if (_hasChildWork) {
                break;
              } else {
                // If none of the children had any work, that means that none of
                // them got retried so they'll still be blocked in the same way
                // as before. We can fast bail out.
                return null;
              }
            }

          case OffscreenComponent:
          case LegacyHiddenComponent:
            {
              // Need to check if the tree still needs to be deferred. This is
              // almost identical to the logic used in the normal update path,
              // so we'll just enter that. The only difference is we'll bail out
              // at the next level instead of this one, because the child props
              // have not changed. Which is fine.
              // TODO: Probably should refactor `beginWork` to split the bailout
              // path from the normal path. I'm tempted to do a labeled break here
              // but I won't :)
              workInProgress.lanes = NoLanes;
              return updateOffscreenComponent(current, workInProgress, renderLanes);
            }
        }

        return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
      } else {
        if ((current.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
          // This is a special case that only exists for legacy mode.
          // See https://github.com/facebook/react/pull/19216.
          didReceiveUpdate = true;
        } else {
          // An update was scheduled on this fiber, but there are no new props
          // nor legacy context. Set this to false. If an update queue or context
          // consumer produces a changed value, it will set this to true. Otherwise,
          // the component will assume the children have not changed and bail out.
          didReceiveUpdate = false;
        }
      }
    } else {
      didReceiveUpdate = false;
    } // Before entering the begin phase, clear pending update priority.
    // TODO: This assumes that we're about to evaluate the component and process
    // the update queue. However, there's an exception: SimpleMemoComponent
    // sometimes bails out later in the begin phase. This indicates that we should
    // move this assignment out of the common path and into each branch.


    workInProgress.lanes = NoLanes;

    switch (workInProgress.tag) {
      case IndeterminateComponent:
        {
          return mountIndeterminateComponent(current, workInProgress, workInProgress.type, renderLanes);
        }

      case LazyComponent:
        {
          var elementType = workInProgress.elementType;
          return mountLazyComponent(current, workInProgress, elementType, updateLanes, renderLanes);
        }

      case FunctionComponent:
        {
          var _Component = workInProgress.type;
          var unresolvedProps = workInProgress.pendingProps;
          var resolvedProps = workInProgress.elementType === _Component ? unresolvedProps : resolveDefaultProps(_Component, unresolvedProps);
          return updateFunctionComponent(current, workInProgress, _Component, resolvedProps, renderLanes);
        }

      case ClassComponent:
        {
          var _Component2 = workInProgress.type;
          var _unresolvedProps = workInProgress.pendingProps;

          var _resolvedProps = workInProgress.elementType === _Component2 ? _unresolvedProps : resolveDefaultProps(_Component2, _unresolvedProps);

          return updateClassComponent(current, workInProgress, _Component2, _resolvedProps, renderLanes);
        }

      case HostRoot:
        return updateHostRoot(current, workInProgress, renderLanes);

      case HostComponent:
        return updateHostComponent(current, workInProgress, renderLanes);

      case HostText:
        return updateHostText(current, workInProgress);

      case SuspenseComponent:
        return updateSuspenseComponent(current, workInProgress, renderLanes);

      case HostPortal:
        return updatePortalComponent(current, workInProgress, renderLanes);

      case ForwardRef:
        {
          var type = workInProgress.type;
          var _unresolvedProps2 = workInProgress.pendingProps;

          var _resolvedProps2 = workInProgress.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);

          return updateForwardRef(current, workInProgress, type, _resolvedProps2, renderLanes);
        }

      case Fragment:
        return updateFragment(current, workInProgress, renderLanes);

      case Mode:
        return updateMode(current, workInProgress, renderLanes);

      case Profiler:
        return updateProfiler(current, workInProgress, renderLanes);

      case ContextProvider:
        return updateContextProvider(current, workInProgress, renderLanes);

      case ContextConsumer:
        return updateContextConsumer(current, workInProgress, renderLanes);

      case MemoComponent:
        {
          var _type2 = workInProgress.type;
          var _unresolvedProps3 = workInProgress.pendingProps; // Resolve outer props first, then resolve inner props.

          var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);

          {
            if (workInProgress.type !== workInProgress.elementType) {
              var outerPropTypes = _type2.propTypes;

              if (outerPropTypes) {
                checkPropTypes(outerPropTypes, _resolvedProps3, // Resolved for outer only
                'prop', getComponentName(_type2));
              }
            }
          }

          _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
          return updateMemoComponent(current, workInProgress, _type2, _resolvedProps3, updateLanes, renderLanes);
        }

      case SimpleMemoComponent:
        {
          return updateSimpleMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, updateLanes, renderLanes);
        }

      case IncompleteClassComponent:
        {
          var _Component3 = workInProgress.type;
          var _unresolvedProps4 = workInProgress.pendingProps;

          var _resolvedProps4 = workInProgress.elementType === _Component3 ? _unresolvedProps4 : resolveDefaultProps(_Component3, _unresolvedProps4);

          return mountIncompleteClassComponent(current, workInProgress, _Component3, _resolvedProps4, renderLanes);
        }

      case SuspenseListComponent:
        {
          return updateSuspenseListComponent(current, workInProgress, renderLanes);
        }

      case FundamentalComponent:
        {

          break;
        }

      case ScopeComponent:
        {

          break;
        }

      case Block:
        {

          break;
        }

      case OffscreenComponent:
        {
          return updateOffscreenComponent(current, workInProgress, renderLanes);
        }

      case LegacyHiddenComponent:
        {
          return updateLegacyHiddenComponent(current, workInProgress, renderLanes);
        }
    }

    {
      {
        throw Error( "Unknown unit of work tag (" + workInProgress.tag + "). This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }

  function markUpdate(workInProgress) {
    // Tag the fiber with an update effect. This turns a Placement into
    // a PlacementAndUpdate.
    workInProgress.flags |= Update;
  }

  function markRef$1(workInProgress) {
    workInProgress.flags |= Ref;
  }

  var appendAllChildren;
  var updateHostContainer;
  var updateHostComponent$1;
  var updateHostText$1;

  if (supportsMutation) {
    // Mutation mode
    appendAllChildren = function (parent, workInProgress, needsVisibilityToggle, isHidden) {
      // We only have the top Fiber that was created but we need recurse down its
      // children to find all the terminal nodes.
      var node = workInProgress.child;

      while (node !== null) {
        if (node.tag === HostComponent || node.tag === HostText) {
          appendInitialChild(parent, node.stateNode);
        } else if (node.tag === HostPortal) ; else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === workInProgress) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === workInProgress) {
            return;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    };

    updateHostContainer = function (workInProgress) {// Noop
    };

    updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {
      // If we have an alternate, that means this is an update and we need to
      // schedule a side-effect to do the updates.
      var oldProps = current.memoizedProps;

      if (oldProps === newProps) {
        // In mutation mode, this is sufficient for a bailout because
        // we won't touch this node even if children changed.
        return;
      } // If we get updated because one of our children updated, we don't
      // have newProps so we'll have to reuse them.
      // TODO: Split the update API as separate for the props vs. children.
      // Even better would be if children weren't special cased at all tho.


      var instance = workInProgress.stateNode;
      var currentHostContext = getHostContext(); // TODO: Experiencing an error where oldProps is null. Suggests a host
      // component is hitting the resume path. Figure out why. Possibly
      // related to `hidden`.

      var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext); // TODO: Type this specific to this type of component.

      workInProgress.updateQueue = updatePayload; // If the update payload indicates that there is a change or if there
      // is a new ref we mark this as an update. All the work is done in commitWork.

      if (updatePayload) {
        markUpdate(workInProgress);
      }
    };

    updateHostText$1 = function (current, workInProgress, oldText, newText) {
      // If the text differs, mark it as an update. All the work in done in commitWork.
      if (oldText !== newText) {
        markUpdate(workInProgress);
      }
    };
  } else if (supportsPersistence) {
    // Persistent host tree mode
    appendAllChildren = function (parent, workInProgress, needsVisibilityToggle, isHidden) {
      // We only have the top Fiber that was created but we need recurse down its
      // children to find all the terminal nodes.
      var node = workInProgress.child;

      while (node !== null) {
        // eslint-disable-next-line no-labels
         if (node.tag === HostComponent) {
          var instance = node.stateNode;

          if (needsVisibilityToggle && isHidden) {
            // This child is inside a timed out tree. Hide it.
            var props = node.memoizedProps;
            var type = node.type;
            instance = cloneHiddenInstance(instance, type, props, node);
          }

          appendInitialChild(parent, instance);
        } else if (node.tag === HostText) {
          var _instance = node.stateNode;

          if (needsVisibilityToggle && isHidden) {
            // This child is inside a timed out tree. Hide it.
            var text = node.memoizedProps;
            _instance = cloneHiddenTextInstance(_instance, text, node);
          }

          appendInitialChild(parent, _instance);
        } else if (node.tag === HostPortal) ; else if (node.tag === SuspenseComponent) {
          if ((node.flags & Update) !== NoFlags) {
            // Need to toggle the visibility of the primary children.
            var newIsHidden = node.memoizedState !== null;

            if (newIsHidden) {
              var primaryChildParent = node.child;

              if (primaryChildParent !== null) {
                if (primaryChildParent.child !== null) {
                  primaryChildParent.child.return = primaryChildParent;
                  appendAllChildren(parent, primaryChildParent, true, newIsHidden);
                }

                var fallbackChildParent = primaryChildParent.sibling;

                if (fallbackChildParent !== null) {
                  fallbackChildParent.return = node;
                  node = fallbackChildParent;
                  continue;
                }
              }
            }
          }

          if (node.child !== null) {
            // Continue traversing like normal
            node.child.return = node;
            node = node.child;
            continue;
          }
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        } // $FlowFixMe This is correct but Flow is confused by the labeled break.


        node = node;

        if (node === workInProgress) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === workInProgress) {
            return;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    }; // An unfortunate fork of appendAllChildren because we have two different parent types.


    var appendAllChildrenToContainer = function (containerChildSet, workInProgress, needsVisibilityToggle, isHidden) {
      // We only have the top Fiber that was created but we need recurse down its
      // children to find all the terminal nodes.
      var node = workInProgress.child;

      while (node !== null) {
        // eslint-disable-next-line no-labels
         if (node.tag === HostComponent) {
          var instance = node.stateNode;

          if (needsVisibilityToggle && isHidden) {
            // This child is inside a timed out tree. Hide it.
            var props = node.memoizedProps;
            var type = node.type;
            instance = cloneHiddenInstance(instance, type, props, node);
          }

          appendChildToContainerChildSet(containerChildSet, instance);
        } else if (node.tag === HostText) {
          var _instance3 = node.stateNode;

          if (needsVisibilityToggle && isHidden) {
            // This child is inside a timed out tree. Hide it.
            var text = node.memoizedProps;
            _instance3 = cloneHiddenTextInstance(_instance3, text, node);
          }

          appendChildToContainerChildSet(containerChildSet, _instance3);
        } else if (node.tag === HostPortal) ; else if (node.tag === SuspenseComponent) {
          if ((node.flags & Update) !== NoFlags) {
            // Need to toggle the visibility of the primary children.
            var newIsHidden = node.memoizedState !== null;

            if (newIsHidden) {
              var primaryChildParent = node.child;

              if (primaryChildParent !== null) {
                if (primaryChildParent.child !== null) {
                  primaryChildParent.child.return = primaryChildParent;
                  appendAllChildrenToContainer(containerChildSet, primaryChildParent, true, newIsHidden);
                }

                var fallbackChildParent = primaryChildParent.sibling;

                if (fallbackChildParent !== null) {
                  fallbackChildParent.return = node;
                  node = fallbackChildParent;
                  continue;
                }
              }
            }
          }

          if (node.child !== null) {
            // Continue traversing like normal
            node.child.return = node;
            node = node.child;
            continue;
          }
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        } // $FlowFixMe This is correct but Flow is confused by the labeled break.


        node = node;

        if (node === workInProgress) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === workInProgress) {
            return;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    };

    updateHostContainer = function (workInProgress) {
      var portalOrRoot = workInProgress.stateNode;
      var childrenUnchanged = workInProgress.firstEffect === null;

      if (childrenUnchanged) ; else {
        var container = portalOrRoot.containerInfo;
        var newChildSet = createContainerChildSet(container); // If children might have changed, we have to add them all to the set.

        appendAllChildrenToContainer(newChildSet, workInProgress, false, false);
        portalOrRoot.pendingChildren = newChildSet; // Schedule an update on the container to swap out the container.

        markUpdate(workInProgress);
        finalizeContainerChildren(container, newChildSet);
      }
    };

    updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {
      var currentInstance = current.stateNode;
      var oldProps = current.memoizedProps; // If there are no effects associated with this node, then none of our children had any updates.
      // This guarantees that we can reuse all of them.

      var childrenUnchanged = workInProgress.firstEffect === null;

      if (childrenUnchanged && oldProps === newProps) {
        // No changes, just reuse the existing instance.
        // Note that this might release a previous clone.
        workInProgress.stateNode = currentInstance;
        return;
      }

      var recyclableInstance = workInProgress.stateNode;
      var currentHostContext = getHostContext();
      var updatePayload = null;

      if (oldProps !== newProps) {
        updatePayload = prepareUpdate(recyclableInstance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
      }

      if (childrenUnchanged && updatePayload === null) {
        // No changes, just reuse the existing instance.
        // Note that this might release a previous clone.
        workInProgress.stateNode = currentInstance;
        return;
      }

      var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress, childrenUnchanged, recyclableInstance);

      if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
        markUpdate(workInProgress);
      }

      workInProgress.stateNode = newInstance;

      if (childrenUnchanged) {
        // If there are no other effects in this tree, we need to flag this node as having one.
        // Even though we're not going to use it for anything.
        // Otherwise parents won't know that there are new children to propagate upwards.
        markUpdate(workInProgress);
      } else {
        // If children might have changed, we have to add them all to the set.
        appendAllChildren(newInstance, workInProgress, false, false);
      }
    };

    updateHostText$1 = function (current, workInProgress, oldText, newText) {
      if (oldText !== newText) {
        // If the text content differs, we'll create a new text instance for it.
        var rootContainerInstance = getRootHostContainer();
        var currentHostContext = getHostContext();
        workInProgress.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress); // We'll have to mark it as having an effect, even though we won't use the effect for anything.
        // This lets the parents know that at least one of their children has changed.

        markUpdate(workInProgress);
      } else {
        workInProgress.stateNode = current.stateNode;
      }
    };
  } else {
    // No host operations
    updateHostContainer = function (workInProgress) {// Noop
    };

    updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {// Noop
    };

    updateHostText$1 = function (current, workInProgress, oldText, newText) {// Noop
    };
  }

  function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
    if (getIsHydrating()) {
      // If we're hydrating, we should consume as many items as we can
      // so we don't leave any behind.
      return;
    }

    switch (renderState.tailMode) {
      case 'hidden':
        {
          // Any insertions at the end of the tail list after this point
          // should be invisible. If there are already mounted boundaries
          // anything before them are not considered for collapsing.
          // Therefore we need to go through the whole tail to find if
          // there are any.
          var tailNode = renderState.tail;
          var lastTailNode = null;

          while (tailNode !== null) {
            if (tailNode.alternate !== null) {
              lastTailNode = tailNode;
            }

            tailNode = tailNode.sibling;
          } // Next we're simply going to delete all insertions after the
          // last rendered item.


          if (lastTailNode === null) {
            // All remaining items in the tail are insertions.
            renderState.tail = null;
          } else {
            // Detach the insertion after the last node that was already
            // inserted.
            lastTailNode.sibling = null;
          }

          break;
        }

      case 'collapsed':
        {
          // Any insertions at the end of the tail list after this point
          // should be invisible. If there are already mounted boundaries
          // anything before them are not considered for collapsing.
          // Therefore we need to go through the whole tail to find if
          // there are any.
          var _tailNode = renderState.tail;
          var _lastTailNode = null;

          while (_tailNode !== null) {
            if (_tailNode.alternate !== null) {
              _lastTailNode = _tailNode;
            }

            _tailNode = _tailNode.sibling;
          } // Next we're simply going to delete all insertions after the
          // last rendered item.


          if (_lastTailNode === null) {
            // All remaining items in the tail are insertions.
            if (!hasRenderedATailFallback && renderState.tail !== null) {
              // We suspended during the head. We want to show at least one
              // row at the tail. So we'll keep on and cut off the rest.
              renderState.tail.sibling = null;
            } else {
              renderState.tail = null;
            }
          } else {
            // Detach the insertion after the last node that was already
            // inserted.
            _lastTailNode.sibling = null;
          }

          break;
        }
    }
  }

  function completeWork(current, workInProgress, renderLanes) {
    var newProps = workInProgress.pendingProps;

    switch (workInProgress.tag) {
      case IndeterminateComponent:
      case LazyComponent:
      case SimpleMemoComponent:
      case FunctionComponent:
      case ForwardRef:
      case Fragment:
      case Mode:
      case Profiler:
      case ContextConsumer:
      case MemoComponent:
        return null;

      case ClassComponent:
        {
          var Component = workInProgress.type;

          if (isContextProvider(Component)) {
            popContext(workInProgress);
          }

          return null;
        }

      case HostRoot:
        {
          popHostContainer(workInProgress);
          popTopLevelContextObject(workInProgress);
          resetWorkInProgressVersions();
          var fiberRoot = workInProgress.stateNode;

          if (fiberRoot.pendingContext) {
            fiberRoot.context = fiberRoot.pendingContext;
            fiberRoot.pendingContext = null;
          }

          if (current === null || current.child === null) {
            // If we hydrated, pop so that we can delete any remaining children
            // that weren't hydrated.
            var wasHydrated = popHydrationState(workInProgress);

            if (wasHydrated) {
              // If we hydrated, then we'll need to schedule an update for
              // the commit side-effects on the root.
              markUpdate(workInProgress);
            } else if (!fiberRoot.hydrate) {
              // Schedule an effect to clear this container at the start of the next commit.
              // This handles the case of React rendering into a container with previous children.
              // It's also safe to do for updates too, because current.child would only be null
              // if the previous render was null (so the the container would already be empty).
              workInProgress.flags |= Snapshot;
            }
          }

          updateHostContainer(workInProgress);
          return null;
        }

      case HostComponent:
        {
          popHostContext(workInProgress);
          var rootContainerInstance = getRootHostContainer();
          var type = workInProgress.type;

          if (current !== null && workInProgress.stateNode != null) {
            updateHostComponent$1(current, workInProgress, type, newProps, rootContainerInstance);

            if (current.ref !== workInProgress.ref) {
              markRef$1(workInProgress);
            }
          } else {
            if (!newProps) {
              if (!(workInProgress.stateNode !== null)) {
                {
                  throw Error( "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue." );
                }
              } // This can happen when we abort work.


              return null;
            }

            var currentHostContext = getHostContext(); // TODO: Move createInstance to beginWork and keep it on a context
            // "stack" as the parent. Then append children as we go in beginWork
            // or completeWork depending on whether we want to add them top->down or
            // bottom->up. Top->down is faster in IE11.

            var _wasHydrated = popHydrationState(workInProgress);

            if (_wasHydrated) {
              // TODO: Move this and createInstance step into the beginPhase
              // to consolidate.
              if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, currentHostContext)) {
                // If changes to the hydrated node need to be applied at the
                // commit-phase we mark this as such.
                markUpdate(workInProgress);
              }
            } else {
              var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress);
              appendAllChildren(instance, workInProgress, false, false);
              workInProgress.stateNode = instance; // Certain renderers require commit-time effects for initial mount.
              // (eg DOM renderer supports auto-focus for certain elements).
              // Make sure such renderers get scheduled for later work.

              if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance, currentHostContext)) {
                markUpdate(workInProgress);
              }
            }

            if (workInProgress.ref !== null) {
              // If there is a ref on a host node we need to schedule a callback
              markRef$1(workInProgress);
            }
          }

          return null;
        }

      case HostText:
        {
          var newText = newProps;

          if (current && workInProgress.stateNode != null) {
            var oldText = current.memoizedProps; // If we have an alternate, that means this is an update and we need
            // to schedule a side-effect to do the updates.

            updateHostText$1(current, workInProgress, oldText, newText);
          } else {
            if (typeof newText !== 'string') {
              if (!(workInProgress.stateNode !== null)) {
                {
                  throw Error( "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue." );
                }
              } // This can happen when we abort work.

            }

            var _rootContainerInstance = getRootHostContainer();

            var _currentHostContext = getHostContext();

            var _wasHydrated2 = popHydrationState(workInProgress);

            if (_wasHydrated2) {
              if (prepareToHydrateHostTextInstance(workInProgress)) {
                markUpdate(workInProgress);
              }
            } else {
              workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress);
            }
          }

          return null;
        }

      case SuspenseComponent:
        {
          popSuspenseContext(workInProgress);
          var nextState = workInProgress.memoizedState;

          if ((workInProgress.flags & DidCapture) !== NoFlags) {
            // Something suspended. Re-render with the fallback children.
            workInProgress.lanes = renderLanes; // Do not reset the effect list.

            if ( (workInProgress.mode & ProfileMode) !== NoMode) {
              transferActualDuration(workInProgress);
            }

            return workInProgress;
          }

          var nextDidTimeout = nextState !== null;
          var prevDidTimeout = false;

          if (current === null) {
            if (workInProgress.memoizedProps.fallback !== undefined) {
              popHydrationState(workInProgress);
            }
          } else {
            var prevState = current.memoizedState;
            prevDidTimeout = prevState !== null;
          }

          if (nextDidTimeout && !prevDidTimeout) {
            // If this subtreee is running in blocking mode we can suspend,
            // otherwise we won't suspend.
            // TODO: This will still suspend a synchronous tree if anything
            // in the concurrent tree already suspended during this render.
            // This is a known bug.
            if ((workInProgress.mode & BlockingMode) !== NoMode) {
              // TODO: Move this back to throwException because this is too late
              // if this is a large tree which is common for initial loads. We
              // don't know if we should restart a render or not until we get
              // this marker, and this is too late.
              // If this render already had a ping or lower pri updates,
              // and this is the first time we know we're going to suspend we
              // should be able to immediately restart from within throwException.
              var hasInvisibleChildContext = current === null && workInProgress.memoizedProps.unstable_avoidThisFallback !== true;

              if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                // If this was in an invisible tree or a new render, then showing
                // this boundary is ok.
                renderDidSuspend();
              } else {
                // Otherwise, we're going to have to hide content so we should
                // suspend for longer if possible.
                renderDidSuspendDelayIfPossible();
              }
            }
          }

          if (supportsPersistence) {
            // TODO: Only schedule updates if not prevDidTimeout.
            if (nextDidTimeout) {
              // If this boundary just timed out, schedule an effect to attach a
              // retry listener to the promise. This flag is also used to hide the
              // primary children.
              workInProgress.flags |= Update;
            }
          }

          if (supportsMutation) {
            // TODO: Only schedule updates if these values are non equal, i.e. it changed.
            if (nextDidTimeout || prevDidTimeout) {
              // If this boundary just timed out, schedule an effect to attach a
              // retry listener to the promise. This flag is also used to hide the
              // primary children. In mutation mode, we also need the flag to
              // *unhide* children that were previously hidden, so check if this
              // is currently timed out, too.
              workInProgress.flags |= Update;
            }
          }

          return null;
        }

      case HostPortal:
        popHostContainer(workInProgress);
        updateHostContainer(workInProgress);

        if (current === null) {
          preparePortalMount(workInProgress.stateNode.containerInfo);
        }

        return null;

      case ContextProvider:
        // Pop provider fiber
        popProvider(workInProgress);
        return null;

      case IncompleteClassComponent:
        {
          // Same as class component case. I put it down here so that the tags are
          // sequential to ensure this switch is compiled to a jump table.
          var _Component = workInProgress.type;

          if (isContextProvider(_Component)) {
            popContext(workInProgress);
          }

          return null;
        }

      case SuspenseListComponent:
        {
          popSuspenseContext(workInProgress);
          var renderState = workInProgress.memoizedState;

          if (renderState === null) {
            // We're running in the default, "independent" mode.
            // We don't do anything in this mode.
            return null;
          }

          var didSuspendAlready = (workInProgress.flags & DidCapture) !== NoFlags;
          var renderedTail = renderState.rendering;

          if (renderedTail === null) {
            // We just rendered the head.
            if (!didSuspendAlready) {
              // This is the first pass. We need to figure out if anything is still
              // suspended in the rendered set.
              // If new content unsuspended, but there's still some content that
              // didn't. Then we need to do a second pass that forces everything
              // to keep showing their fallbacks.
              // We might be suspended if something in this render pass suspended, or
              // something in the previous committed pass suspended. Otherwise,
              // there's no chance so we can skip the expensive call to
              // findFirstSuspended.
              var cannotBeSuspended = renderHasNotSuspendedYet() && (current === null || (current.flags & DidCapture) === NoFlags);

              if (!cannotBeSuspended) {
                var row = workInProgress.child;

                while (row !== null) {
                  var suspended = findFirstSuspended(row);

                  if (suspended !== null) {
                    didSuspendAlready = true;
                    workInProgress.flags |= DidCapture;
                    cutOffTailIfNeeded(renderState, false); // If this is a newly suspended tree, it might not get committed as
                    // part of the second pass. In that case nothing will subscribe to
                    // its thennables. Instead, we'll transfer its thennables to the
                    // SuspenseList so that it can retry if they resolve.
                    // There might be multiple of these in the list but since we're
                    // going to wait for all of them anyway, it doesn't really matter
                    // which ones gets to ping. In theory we could get clever and keep
                    // track of how many dependencies remain but it gets tricky because
                    // in the meantime, we can add/remove/change items and dependencies.
                    // We might bail out of the loop before finding any but that
                    // doesn't matter since that means that the other boundaries that
                    // we did find already has their listeners attached.

                    var newThennables = suspended.updateQueue;

                    if (newThennables !== null) {
                      workInProgress.updateQueue = newThennables;
                      workInProgress.flags |= Update;
                    } // Rerender the whole list, but this time, we'll force fallbacks
                    // to stay in place.
                    // Reset the effect list before doing the second pass since that's now invalid.


                    if (renderState.lastEffect === null) {
                      workInProgress.firstEffect = null;
                    }

                    workInProgress.lastEffect = renderState.lastEffect; // Reset the child fibers to their original state.

                    resetChildFibers(workInProgress, renderLanes); // Set up the Suspense Context to force suspense and immediately
                    // rerender the children.

                    pushSuspenseContext(workInProgress, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                    return workInProgress.child;
                  }

                  row = row.sibling;
                }
              }

              if (renderState.tail !== null && now$1() > getRenderTargetTime()) {
                // We have already passed our CPU deadline but we still have rows
                // left in the tail. We'll just give up further attempts to render
                // the main content and only render fallbacks.
                workInProgress.flags |= DidCapture;
                didSuspendAlready = true;
                cutOffTailIfNeeded(renderState, false); // Since nothing actually suspended, there will nothing to ping this
                // to get it started back up to attempt the next item. While in terms
                // of priority this work has the same priority as this current render,
                // it's not part of the same transition once the transition has
                // committed. If it's sync, we still want to yield so that it can be
                // painted. Conceptually, this is really the same as pinging.
                // We can use any RetryLane even if it's the one currently rendering
                // since we're leaving it behind on this node.

                workInProgress.lanes = SomeRetryLane;

                {
                  markSpawnedWork(SomeRetryLane);
                }
              }
            } else {
              cutOffTailIfNeeded(renderState, false);
            } // Next we're going to render the tail.

          } else {
            // Append the rendered row to the child list.
            if (!didSuspendAlready) {
              var _suspended = findFirstSuspended(renderedTail);

              if (_suspended !== null) {
                workInProgress.flags |= DidCapture;
                didSuspendAlready = true; // Ensure we transfer the update queue to the parent so that it doesn't
                // get lost if this row ends up dropped during a second pass.

                var _newThennables = _suspended.updateQueue;

                if (_newThennables !== null) {
                  workInProgress.updateQueue = _newThennables;
                  workInProgress.flags |= Update;
                }

                cutOffTailIfNeeded(renderState, true); // This might have been modified.

                if (renderState.tail === null && renderState.tailMode === 'hidden' && !renderedTail.alternate && !getIsHydrating() // We don't cut it if we're hydrating.
                ) {
                    // We need to delete the row we just rendered.
                    // Reset the effect list to what it was before we rendered this
                    // child. The nested children have already appended themselves.
                    var lastEffect = workInProgress.lastEffect = renderState.lastEffect; // Remove any effects that were appended after this point.

                    if (lastEffect !== null) {
                      lastEffect.nextEffect = null;
                    } // We're done.


                    return null;
                  }
              } else if ( // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              now$1() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes !== OffscreenLane) {
                // We have now passed our CPU deadline and we'll just give up further
                // attempts to render the main content and only render fallbacks.
                // The assumption is that this is usually faster.
                workInProgress.flags |= DidCapture;
                didSuspendAlready = true;
                cutOffTailIfNeeded(renderState, false); // Since nothing actually suspended, there will nothing to ping this
                // to get it started back up to attempt the next item. While in terms
                // of priority this work has the same priority as this current render,
                // it's not part of the same transition once the transition has
                // committed. If it's sync, we still want to yield so that it can be
                // painted. Conceptually, this is really the same as pinging.
                // We can use any RetryLane even if it's the one currently rendering
                // since we're leaving it behind on this node.

                workInProgress.lanes = SomeRetryLane;

                {
                  markSpawnedWork(SomeRetryLane);
                }
              }
            }

            if (renderState.isBackwards) {
              // The effect list of the backwards tail will have been added
              // to the end. This breaks the guarantee that life-cycles fire in
              // sibling order but that isn't a strong guarantee promised by React.
              // Especially since these might also just pop in during future commits.
              // Append to the beginning of the list.
              renderedTail.sibling = workInProgress.child;
              workInProgress.child = renderedTail;
            } else {
              var previousSibling = renderState.last;

              if (previousSibling !== null) {
                previousSibling.sibling = renderedTail;
              } else {
                workInProgress.child = renderedTail;
              }

              renderState.last = renderedTail;
            }
          }

          if (renderState.tail !== null) {
            // We still have tail rows to render.
            // Pop a row.
            var next = renderState.tail;
            renderState.rendering = next;
            renderState.tail = next.sibling;
            renderState.lastEffect = workInProgress.lastEffect;
            renderState.renderingStartTime = now$1();
            next.sibling = null; // Restore the context.
            // TODO: We can probably just avoid popping it instead and only
            // setting it the first time we go from not suspended to suspended.

            var suspenseContext = suspenseStackCursor.current;

            if (didSuspendAlready) {
              suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
            } else {
              suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
            }

            pushSuspenseContext(workInProgress, suspenseContext); // Do a pass over the next row.

            return next;
          }

          return null;
        }

      case FundamentalComponent:
        {

          break;
        }

      case ScopeComponent:
        {

          break;
        }

      case Block:

        break;

      case OffscreenComponent:
      case LegacyHiddenComponent:
        {
          popRenderLanes(workInProgress);

          if (current !== null) {
            var _nextState = workInProgress.memoizedState;
            var _prevState = current.memoizedState;
            var prevIsHidden = _prevState !== null;
            var nextIsHidden = _nextState !== null;

            if (prevIsHidden !== nextIsHidden && newProps.mode !== 'unstable-defer-without-hiding') {
              workInProgress.flags |= Update;
            }
          }

          return null;
        }
    }

    {
      {
        throw Error( "Unknown unit of work tag (" + workInProgress.tag + "). This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }

  function unwindWork(workInProgress, renderLanes) {
    switch (workInProgress.tag) {
      case ClassComponent:
        {
          var Component = workInProgress.type;

          if (isContextProvider(Component)) {
            popContext(workInProgress);
          }

          var flags = workInProgress.flags;

          if (flags & ShouldCapture) {
            workInProgress.flags = flags & ~ShouldCapture | DidCapture;

            if ( (workInProgress.mode & ProfileMode) !== NoMode) {
              transferActualDuration(workInProgress);
            }

            return workInProgress;
          }

          return null;
        }

      case HostRoot:
        {
          popHostContainer(workInProgress);
          popTopLevelContextObject(workInProgress);
          resetWorkInProgressVersions();
          var _flags = workInProgress.flags;

          if (!((_flags & DidCapture) === NoFlags)) {
            {
              throw Error( "The root failed to unmount after an error. This is likely a bug in React. Please file an issue." );
            }
          }

          workInProgress.flags = _flags & ~ShouldCapture | DidCapture;
          return workInProgress;
        }

      case HostComponent:
        {
          // TODO: popHydrationState
          popHostContext(workInProgress);
          return null;
        }

      case SuspenseComponent:
        {
          popSuspenseContext(workInProgress);

          var _flags2 = workInProgress.flags;

          if (_flags2 & ShouldCapture) {
            workInProgress.flags = _flags2 & ~ShouldCapture | DidCapture; // Captured a suspense effect. Re-render the boundary.

            if ( (workInProgress.mode & ProfileMode) !== NoMode) {
              transferActualDuration(workInProgress);
            }

            return workInProgress;
          }

          return null;
        }

      case SuspenseListComponent:
        {
          popSuspenseContext(workInProgress); // SuspenseList doesn't actually catch anything. It should've been
          // caught by a nested boundary. If not, it should bubble through.

          return null;
        }

      case HostPortal:
        popHostContainer(workInProgress);
        return null;

      case ContextProvider:
        popProvider(workInProgress);
        return null;

      case OffscreenComponent:
      case LegacyHiddenComponent:
        popRenderLanes(workInProgress);
        return null;

      default:
        return null;
    }
  }

  function unwindInterruptedWork(interruptedWork) {
    switch (interruptedWork.tag) {
      case ClassComponent:
        {
          var childContextTypes = interruptedWork.type.childContextTypes;

          if (childContextTypes !== null && childContextTypes !== undefined) {
            popContext(interruptedWork);
          }

          break;
        }

      case HostRoot:
        {
          popHostContainer(interruptedWork);
          popTopLevelContextObject(interruptedWork);
          resetWorkInProgressVersions();
          break;
        }

      case HostComponent:
        {
          popHostContext(interruptedWork);
          break;
        }

      case HostPortal:
        popHostContainer(interruptedWork);
        break;

      case SuspenseComponent:
        popSuspenseContext(interruptedWork);
        break;

      case SuspenseListComponent:
        popSuspenseContext(interruptedWork);
        break;

      case ContextProvider:
        popProvider(interruptedWork);
        break;

      case OffscreenComponent:
      case LegacyHiddenComponent:
        popRenderLanes(interruptedWork);
        break;
    }
  }

  function createCapturedValue(value, source) {
    // If the value is an error, call this function immediately after it is thrown
    // so the stack is accurate.
    return {
      value: value,
      source: source,
      stack: getStackByFiberInDevAndProd(source)
    };
  }

  // This module is forked in different environments.
  // By default, return `true` to log errors to the console.
  // Forks can return `false` if this isn't desirable.
  function showErrorDialog(boundary, errorInfo) {
    return true;
  }

  function logCapturedError(boundary, errorInfo) {
    try {
      var logError = showErrorDialog(boundary, errorInfo); // Allow injected showErrorDialog() to prevent default console.error logging.
      // This enables renderers like ReactNative to better manage redbox behavior.

      if (logError === false) {
        return;
      }

      var error = errorInfo.value;

      if (true) {
        var source = errorInfo.source;
        var stack = errorInfo.stack;
        var componentStack = stack !== null ? stack : ''; // Browsers support silencing uncaught errors by calling
        // `preventDefault()` in window `error` handler.
        // We record this information as an expando on the error.

        if (error != null && error._suppressLogging) {
          if (boundary.tag === ClassComponent) {
            // The error is recoverable and was silenced.
            // Ignore it and don't print the stack addendum.
            // This is handy for testing error boundaries without noise.
            return;
          } // The error is fatal. Since the silencing might have
          // been accidental, we'll surface it anyway.
          // However, the browser would have silenced the original error
          // so we'll print it first, and then print the stack addendum.


          console['error'](error); // Don't transform to our wrapper
          // For a more detailed description of this block, see:
          // https://github.com/facebook/react/pull/13384
        }

        var componentName = source ? getComponentName(source.type) : null;
        var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : 'The above error occurred in one of your React components:';
        var errorBoundaryMessage;
        var errorBoundaryName = getComponentName(boundary.type);

        if (errorBoundaryName) {
          errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
        } else {
          errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.';
        }

        var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage); // In development, we provide our own message with just the component stack.
        // We don't include the original error message and JS stack because the browser
        // has already printed it. Even if the application swallows the error, it is still
        // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.

        console['error'](combinedMessage); // Don't transform to our wrapper
      }
    } catch (e) {
      // This method must not throw, or React internal state will get messed up.
      // If console.error is overridden, or logCapturedError() shows a dialog that throws,
      // we want to report this error outside of the normal stack as a last resort.
      // https://github.com/facebook/react/issues/13188
      setTimeout(function () {
        throw e;
      });
    }
  }

  var PossiblyWeakMap$1 = typeof WeakMap === 'function' ? WeakMap : Map;

  function createRootErrorUpdate(fiber, errorInfo, lane) {
    var update = createUpdate(NoTimestamp, lane); // Unmount the root by rendering null.

    update.tag = CaptureUpdate; // Caution: React DevTools currently depends on this property
    // being called "element".

    update.payload = {
      element: null
    };
    var error = errorInfo.value;

    update.callback = function () {
      onUncaughtError(error);
      logCapturedError(fiber, errorInfo);
    };

    return update;
  }

  function createClassErrorUpdate(fiber, errorInfo, lane) {
    var update = createUpdate(NoTimestamp, lane);
    update.tag = CaptureUpdate;
    var getDerivedStateFromError = fiber.type.getDerivedStateFromError;

    if (typeof getDerivedStateFromError === 'function') {
      var error$1 = errorInfo.value;

      update.payload = function () {
        logCapturedError(fiber, errorInfo);
        return getDerivedStateFromError(error$1);
      };
    }

    var inst = fiber.stateNode;

    if (inst !== null && typeof inst.componentDidCatch === 'function') {
      update.callback = function callback() {
        {
          markFailedErrorBoundaryForHotReloading(fiber);
        }

        if (typeof getDerivedStateFromError !== 'function') {
          // To preserve the preexisting retry behavior of error boundaries,
          // we keep track of which ones already failed during this batch.
          // This gets reset before we yield back to the browser.
          // TODO: Warn in strict mode if getDerivedStateFromError is
          // not defined.
          markLegacyErrorBoundaryAsFailed(this); // Only log here if componentDidCatch is the only error boundary method defined

          logCapturedError(fiber, errorInfo);
        }

        var error$1 = errorInfo.value;
        var stack = errorInfo.stack;
        this.componentDidCatch(error$1, {
          componentStack: stack !== null ? stack : ''
        });

        {
          if (typeof getDerivedStateFromError !== 'function') {
            // If componentDidCatch is the only error boundary method defined,
            // then it needs to call setState to recover from errors.
            // If no state update is scheduled then the boundary will swallow the error.
            if (!includesSomeLane(fiber.lanes, SyncLane)) {
              error('%s: Error boundaries should implement getDerivedStateFromError(). ' + 'In that method, return a state update to display an error message or fallback UI.', getComponentName(fiber.type) || 'Unknown');
            }
          }
        }
      };
    } else {
      update.callback = function () {
        markFailedErrorBoundaryForHotReloading(fiber);
      };
    }

    return update;
  }

  function attachPingListener(root, wakeable, lanes) {
    // Attach a listener to the promise to "ping" the root and retry. But only if
    // one does not already exist for the lanes we're currently rendering (which
    // acts like a "thread ID" here).
    var pingCache = root.pingCache;
    var threadIDs;

    if (pingCache === null) {
      pingCache = root.pingCache = new PossiblyWeakMap$1();
      threadIDs = new Set();
      pingCache.set(wakeable, threadIDs);
    } else {
      threadIDs = pingCache.get(wakeable);

      if (threadIDs === undefined) {
        threadIDs = new Set();
        pingCache.set(wakeable, threadIDs);
      }
    }

    if (!threadIDs.has(lanes)) {
      // Memoize using the thread ID to prevent redundant listeners.
      threadIDs.add(lanes);
      var ping = pingSuspendedRoot.bind(null, root, wakeable, lanes);
      wakeable.then(ping, ping);
    }
  }

  function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
    // The source fiber did not complete.
    sourceFiber.flags |= Incomplete; // Its effect list is no longer valid.

    sourceFiber.firstEffect = sourceFiber.lastEffect = null;

    if (value !== null && typeof value === 'object' && typeof value.then === 'function') {
      // This is a wakeable.
      var wakeable = value;

      if ((sourceFiber.mode & BlockingMode) === NoMode) {
        // Reset the memoizedState to what it was before we attempted
        // to render it.
        var currentSource = sourceFiber.alternate;

        if (currentSource) {
          sourceFiber.updateQueue = currentSource.updateQueue;
          sourceFiber.memoizedState = currentSource.memoizedState;
          sourceFiber.lanes = currentSource.lanes;
        } else {
          sourceFiber.updateQueue = null;
          sourceFiber.memoizedState = null;
        }
      }

      var hasInvisibleParentBoundary = hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext); // Schedule the nearest Suspense to re-render the timed out view.

      var _workInProgress = returnFiber;

      do {
        if (_workInProgress.tag === SuspenseComponent && shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)) {
          // Found the nearest boundary.
          // Stash the promise on the boundary fiber. If the boundary times out, we'll
          // attach another listener to flip the boundary back to its normal state.
          var wakeables = _workInProgress.updateQueue;

          if (wakeables === null) {
            var updateQueue = new Set();
            updateQueue.add(wakeable);
            _workInProgress.updateQueue = updateQueue;
          } else {
            wakeables.add(wakeable);
          } // If the boundary is outside of blocking mode, we should *not*
          // suspend the commit. Pretend as if the suspended component rendered
          // null and keep rendering. In the commit phase, we'll schedule a
          // subsequent synchronous update to re-render the Suspense.
          //
          // Note: It doesn't matter whether the component that suspended was
          // inside a blocking mode tree. If the Suspense is outside of it, we
          // should *not* suspend the commit.


          if ((_workInProgress.mode & BlockingMode) === NoMode) {
            _workInProgress.flags |= DidCapture;
            sourceFiber.flags |= ForceUpdateForLegacySuspense; // We're going to commit this fiber even though it didn't complete.
            // But we shouldn't call any lifecycle methods or callbacks. Remove
            // all lifecycle effect tags.

            sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);

            if (sourceFiber.tag === ClassComponent) {
              var currentSourceFiber = sourceFiber.alternate;

              if (currentSourceFiber === null) {
                // This is a new mount. Change the tag so it's not mistaken for a
                // completed class component. For example, we should not call
                // componentWillUnmount if it is deleted.
                sourceFiber.tag = IncompleteClassComponent;
              } else {
                // When we try rendering again, we should not reuse the current fiber,
                // since it's known to be in an inconsistent state. Use a force update to
                // prevent a bail out.
                var update = createUpdate(NoTimestamp, SyncLane);
                update.tag = ForceUpdate;
                enqueueUpdate(sourceFiber, update);
              }
            } // The source fiber did not complete. Mark it with Sync priority to
            // indicate that it still has pending work.


            sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane); // Exit without suspending.

            return;
          } // Confirmed that the boundary is in a concurrent mode tree. Continue
          // with the normal suspend path.
          //
          // After this we'll use a set of heuristics to determine whether this
          // render pass will run to completion or restart or "suspend" the commit.
          // The actual logic for this is spread out in different places.
          //
          // This first principle is that if we're going to suspend when we complete
          // a root, then we should also restart if we get an update or ping that
          // might unsuspend it, and vice versa. The only reason to suspend is
          // because you think you might want to restart before committing. However,
          // it doesn't make sense to restart only while in the period we're suspended.
          //
          // Restarting too aggressively is also not good because it starves out any
          // intermediate loading state. So we use heuristics to determine when.
          // Suspense Heuristics
          //
          // If nothing threw a Promise or all the same fallbacks are already showing,
          // then don't suspend/restart.
          //
          // If this is an initial render of a new tree of Suspense boundaries and
          // those trigger a fallback, then don't suspend/restart. We want to ensure
          // that we can show the initial loading state as quickly as possible.
          //
          // If we hit a "Delayed" case, such as when we'd switch from content back into
          // a fallback, then we should always suspend/restart. Transitions apply
          // to this case. If none is defined, JND is used instead.
          //
          // If we're already showing a fallback and it gets "retried", allowing us to show
          // another level, but there's still an inner boundary that would show a fallback,
          // then we suspend/restart for 500ms since the last time we showed a fallback
          // anywhere in the tree. This effectively throttles progressive loading into a
          // consistent train of commits. This also gives us an opportunity to restart to
          // get to the completed state slightly earlier.
          //
          // If there's ambiguity due to batching it's resolved in preference of:
          // 1) "delayed", 2) "initial render", 3) "retry".
          //
          // We want to ensure that a "busy" state doesn't get force committed. We want to
          // ensure that new initial loading states can commit as soon as possible.


          attachPingListener(root, wakeable, rootRenderLanes);
          _workInProgress.flags |= ShouldCapture;
          _workInProgress.lanes = rootRenderLanes;
          return;
        } // This boundary already captured during this render. Continue to the next
        // boundary.


        _workInProgress = _workInProgress.return;
      } while (_workInProgress !== null); // No boundary was found. Fallthrough to error mode.
      // TODO: Use invariant so the message is stripped in prod?


      value = new Error((getComponentName(sourceFiber.type) || 'A React component') + ' suspended while rendering, but no fallback UI was specified.\n' + '\n' + 'Add a <Suspense fallback=...> component higher in the tree to ' + 'provide a loading indicator or placeholder to display.');
    } // We didn't find a boundary that could handle this type of exception. Start
    // over and traverse parent path again, this time treating the exception
    // as an error.


    renderDidError();
    value = createCapturedValue(value, sourceFiber);
    var workInProgress = returnFiber;

    do {
      switch (workInProgress.tag) {
        case HostRoot:
          {
            var _errorInfo = value;
            workInProgress.flags |= ShouldCapture;
            var lane = pickArbitraryLane(rootRenderLanes);
            workInProgress.lanes = mergeLanes(workInProgress.lanes, lane);

            var _update = createRootErrorUpdate(workInProgress, _errorInfo, lane);

            enqueueCapturedUpdate(workInProgress, _update);
            return;
          }

        case ClassComponent:
          // Capture and retry
          var errorInfo = value;
          var ctor = workInProgress.type;
          var instance = workInProgress.stateNode;

          if ((workInProgress.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === 'function' || instance !== null && typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))) {
            workInProgress.flags |= ShouldCapture;

            var _lane = pickArbitraryLane(rootRenderLanes);

            workInProgress.lanes = mergeLanes(workInProgress.lanes, _lane); // Schedule the error boundary to re-render using updated state

            var _update2 = createClassErrorUpdate(workInProgress, errorInfo, _lane);

            enqueueCapturedUpdate(workInProgress, _update2);
            return;
          }

          break;
      }

      workInProgress = workInProgress.return;
    } while (workInProgress !== null);
  }

  function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
    var funcArgs = Array.prototype.slice.call(arguments, 3);

    try {
      func.apply(context, funcArgs);
    } catch (error) {
      this.onError(error);
    }
  }

  var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;

  {
    // In DEV mode, we swap out invokeGuardedCallback for a special version
    // that plays more nicely with the browser's DevTools. The idea is to preserve
    // "Pause on exceptions" behavior. Because React wraps all user-provided
    // functions in invokeGuardedCallback, and the production version of
    // invokeGuardedCallback uses a try-catch, all user exceptions are treated
    // like caught exceptions, and the DevTools won't pause unless the developer
    // takes the extra step of enabling pause on caught exceptions. This is
    // unintuitive, though, because even though React has caught the error, from
    // the developer's perspective, the error is uncaught.
    //
    // To preserve the expected "Pause on exceptions" behavior, we don't use a
    // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
    // DOM node, and call the user-provided callback from inside an event handler
    // for that fake event. If the callback throws, the error is "captured" using
    // a global event handler. But because the error happens in a different
    // event loop context, it does not interrupt the normal program flow.
    // Effectively, this gives us try-catch behavior without actually using
    // try-catch. Neat!
    // Check that the browser supports the APIs we need to implement our special
    // DEV version of invokeGuardedCallback
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
      var fakeNode = document.createElement('react');

      invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
        // If document doesn't exist we know for sure we will crash in this method
        // when we call document.createEvent(). However this can cause confusing
        // errors: https://github.com/facebookincubator/create-react-app/issues/3482
        // So we preemptively throw with a better message instead.
        if (!(typeof document !== 'undefined')) {
          {
            throw Error( "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous." );
          }
        }

        var evt = document.createEvent('Event');
        var didCall = false; // Keeps track of whether the user-provided callback threw an error. We
        // set this to true at the beginning, then set it to false right after
        // calling the function. If the function errors, `didError` will never be
        // set to false. This strategy works even if the browser is flaky and
        // fails to call our global error handler, because it doesn't rely on
        // the error event at all.

        var didError = true; // Keeps track of the value of window.event so that we can reset it
        // during the callback to let user code access window.event in the
        // browsers that support it.

        var windowEvent = window.event; // Keeps track of the descriptor of window.event to restore it after event
        // dispatching: https://github.com/facebook/react/issues/13688

        var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, 'event');

        function restoreAfterDispatch() {
          // We immediately remove the callback from event listeners so that
          // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
          // nested call would trigger the fake event handlers of any call higher
          // in the stack.
          fakeNode.removeEventListener(evtType, callCallback, false); // We check for window.hasOwnProperty('event') to prevent the
          // window.event assignment in both IE <= 10 as they throw an error
          // "Member not found" in strict mode, and in Firefox which does not
          // support window.event.

          if (typeof window.event !== 'undefined' && window.hasOwnProperty('event')) {
            window.event = windowEvent;
          }
        } // Create an event handler for our fake event. We will synchronously
        // dispatch our fake event using `dispatchEvent`. Inside the handler, we
        // call the user-provided callback.


        var funcArgs = Array.prototype.slice.call(arguments, 3);

        function callCallback() {
          didCall = true;
          restoreAfterDispatch();
          func.apply(context, funcArgs);
          didError = false;
        } // Create a global error event handler. We use this to capture the value
        // that was thrown. It's possible that this error handler will fire more
        // than once; for example, if non-React code also calls `dispatchEvent`
        // and a handler for that event throws. We should be resilient to most of
        // those cases. Even if our error event handler fires more than once, the
        // last error event is always used. If the callback actually does error,
        // we know that the last error event is the correct one, because it's not
        // possible for anything else to have happened in between our callback
        // erroring and the code that follows the `dispatchEvent` call below. If
        // the callback doesn't error, but the error event was fired, we know to
        // ignore it because `didError` will be false, as described above.


        var error; // Use this to track whether the error event is ever called.

        var didSetError = false;
        var isCrossOriginError = false;

        function handleWindowError(event) {
          error = event.error;
          didSetError = true;

          if (error === null && event.colno === 0 && event.lineno === 0) {
            isCrossOriginError = true;
          }

          if (event.defaultPrevented) {
            // Some other error handler has prevented default.
            // Browsers silence the error report if this happens.
            // We'll remember this to later decide whether to log it or not.
            if (error != null && typeof error === 'object') {
              try {
                error._suppressLogging = true;
              } catch (inner) {// Ignore.
              }
            }
          }
        } // Create a fake event type.


        var evtType = "react-" + (name ? name : 'invokeguardedcallback'); // Attach our event handlers

        window.addEventListener('error', handleWindowError);
        fakeNode.addEventListener(evtType, callCallback, false); // Synchronously dispatch our fake event. If the user-provided function
        // errors, it will trigger our global error handler.

        evt.initEvent(evtType, false, false);
        fakeNode.dispatchEvent(evt);

        if (windowEventDescriptor) {
          Object.defineProperty(window, 'event', windowEventDescriptor);
        }

        if (didCall && didError) {
          if (!didSetError) {
            // The callback errored, but the error event never fired.
            error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
          } else if (isCrossOriginError) {
            error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://reactjs.org/link/crossorigin-error for more information.');
          }

          this.onError(error);
        } // Remove our event listeners


        window.removeEventListener('error', handleWindowError);

        if (!didCall) {
          // Something went really wrong, and our event was not dispatched.
          // https://github.com/facebook/react/issues/16734
          // https://github.com/facebook/react/issues/16585
          // Fall back to the production implementation.
          restoreAfterDispatch();
          return invokeGuardedCallbackProd.apply(this, arguments);
        }
      };
    }
  }

  var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;

  var hasError = false;
  var caughtError = null; // Used by event system to capture/rethrow the first error.
  var reporter = {
    onError: function (error) {
      hasError = true;
      caughtError = error;
    }
  };
  /**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */

  function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
    hasError = false;
    caughtError = null;
    invokeGuardedCallbackImpl$1.apply(reporter, arguments);
  }
  function hasCaughtError() {
    return hasError;
  }
  function clearCaughtError() {
    if (hasError) {
      var error = caughtError;
      hasError = false;
      caughtError = null;
      return error;
    } else {
      {
        {
          throw Error( "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue." );
        }
      }
    }
  }

  var didWarnAboutUndefinedSnapshotBeforeUpdate = null;

  {
    didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
  }

  var PossiblyWeakSet = typeof WeakSet === 'function' ? WeakSet : Set;

  var callComponentWillUnmountWithTimer = function (current, instance) {
    instance.props = current.memoizedProps;
    instance.state = current.memoizedState;

    {
      instance.componentWillUnmount();
    }
  }; // Capture errors so they don't interrupt unmounting.


  function safelyCallComponentWillUnmount(current, instance) {
    {
      invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current, instance);

      if (hasCaughtError()) {
        var unmountError = clearCaughtError();
        captureCommitPhaseError(current, unmountError);
      }
    }
  }

  function safelyDetachRef(current) {
    var ref = current.ref;

    if (ref !== null) {
      if (typeof ref === 'function') {
        {
          invokeGuardedCallback(null, ref, null, null);

          if (hasCaughtError()) {
            var refError = clearCaughtError();
            captureCommitPhaseError(current, refError);
          }
        }
      } else {
        ref.current = null;
      }
    }
  }

  function safelyCallDestroy(current, destroy) {
    {
      invokeGuardedCallback(null, destroy, null);

      if (hasCaughtError()) {
        var error = clearCaughtError();
        captureCommitPhaseError(current, error);
      }
    }
  }

  function commitBeforeMutationLifeCycles(current, finishedWork) {
    switch (finishedWork.tag) {
      case FunctionComponent:
      case ForwardRef:
      case SimpleMemoComponent:
      case Block:
        {
          return;
        }

      case ClassComponent:
        {
          if (finishedWork.flags & Snapshot) {
            if (current !== null) {
              var prevProps = current.memoizedProps;
              var prevState = current.memoizedState;
              var instance = finishedWork.stateNode; // We could update instance props and state here,
              // but instead we rely on them being set during last render.
              // TODO: revisit this when we implement resuming.

              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  if (instance.props !== finishedWork.memoizedProps) {
                    error('Expected %s props to match memoized props before ' + 'getSnapshotBeforeUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                  }

                  if (instance.state !== finishedWork.memoizedState) {
                    error('Expected %s state to match memoized state before ' + 'getSnapshotBeforeUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.state`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                  }
                }
              }

              var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);

              {
                var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;

                if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                  didWarnSet.add(finishedWork.type);

                  error('%s.getSnapshotBeforeUpdate(): A snapshot value (or null) ' + 'must be returned. You have returned undefined.', getComponentName(finishedWork.type));
                }
              }

              instance.__reactInternalSnapshotBeforeUpdate = snapshot;
            }
          }

          return;
        }

      case HostRoot:
        {
          if (supportsMutation) {
            if (finishedWork.flags & Snapshot) {
              var root = finishedWork.stateNode;
              clearContainer(root.containerInfo);
            }
          }

          return;
        }

      case HostComponent:
      case HostText:
      case HostPortal:
      case IncompleteClassComponent:
        // Nothing to do for these component types
        return;
    }

    {
      {
        throw Error( "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }

  function commitHookEffectListUnmount(tag, finishedWork) {
    var updateQueue = finishedWork.updateQueue;
    var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

    if (lastEffect !== null) {
      var firstEffect = lastEffect.next;
      var effect = firstEffect;

      do {
        if ((effect.tag & tag) === tag) {
          // Unmount
          var destroy = effect.destroy;
          effect.destroy = undefined;

          if (destroy !== undefined) {
            destroy();
          }
        }

        effect = effect.next;
      } while (effect !== firstEffect);
    }
  }

  function commitHookEffectListMount(tag, finishedWork) {
    var updateQueue = finishedWork.updateQueue;
    var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

    if (lastEffect !== null) {
      var firstEffect = lastEffect.next;
      var effect = firstEffect;

      do {
        if ((effect.tag & tag) === tag) {
          // Mount
          var create = effect.create;
          effect.destroy = create();

          {
            var destroy = effect.destroy;

            if (destroy !== undefined && typeof destroy !== 'function') {
              var addendum = void 0;

              if (destroy === null) {
                addendum = ' You returned null. If your effect does not require clean ' + 'up, return undefined (or nothing).';
              } else if (typeof destroy.then === 'function') {
                addendum = '\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. ' + 'Instead, write the async function inside your effect ' + 'and call it immediately:\n\n' + 'useEffect(() => {\n' + '  async function fetchData() {\n' + '    // You can await here\n' + '    const response = await MyAPI.getData(someId);\n' + '    // ...\n' + '  }\n' + '  fetchData();\n' + "}, [someId]); // Or [] if effect doesn't need props or state\n\n" + 'Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching';
              } else {
                addendum = ' You returned: ' + destroy;
              }

              error('An effect function must not return anything besides a function, ' + 'which is used for clean-up.%s', addendum);
            }
          }
        }

        effect = effect.next;
      } while (effect !== firstEffect);
    }
  }

  function schedulePassiveEffects(finishedWork) {
    var updateQueue = finishedWork.updateQueue;
    var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

    if (lastEffect !== null) {
      var firstEffect = lastEffect.next;
      var effect = firstEffect;

      do {
        var _effect = effect,
            next = _effect.next,
            tag = _effect.tag;

        if ((tag & Passive$1) !== NoFlags$1 && (tag & HasEffect) !== NoFlags$1) {
          enqueuePendingPassiveHookEffectUnmount(finishedWork, effect);
          enqueuePendingPassiveHookEffectMount(finishedWork, effect);
        }

        effect = next;
      } while (effect !== firstEffect);
    }
  }

  function commitLifeCycles(finishedRoot, current, finishedWork, committedLanes) {
    switch (finishedWork.tag) {
      case FunctionComponent:
      case ForwardRef:
      case SimpleMemoComponent:
      case Block:
        {
          // At this point layout effects have already been destroyed (during mutation phase).
          // This is done to prevent sibling component effects from interfering with each other,
          // e.g. a destroy function in one component should never override a ref set
          // by a create function in another component during the same commit.
          {
            commitHookEffectListMount(Layout | HasEffect, finishedWork);
          }

          schedulePassiveEffects(finishedWork);
          return;
        }

      case ClassComponent:
        {
          var instance = finishedWork.stateNode;

          if (finishedWork.flags & Update) {
            if (current === null) {
              // We could update instance props and state here,
              // but instead we rely on them being set during last render.
              // TODO: revisit this when we implement resuming.
              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  if (instance.props !== finishedWork.memoizedProps) {
                    error('Expected %s props to match memoized props before ' + 'componentDidMount. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                  }

                  if (instance.state !== finishedWork.memoizedState) {
                    error('Expected %s state to match memoized state before ' + 'componentDidMount. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.state`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                  }
                }
              }

              {
                instance.componentDidMount();
              }
            } else {
              var prevProps = finishedWork.elementType === finishedWork.type ? current.memoizedProps : resolveDefaultProps(finishedWork.type, current.memoizedProps);
              var prevState = current.memoizedState; // We could update instance props and state here,
              // but instead we rely on them being set during last render.
              // TODO: revisit this when we implement resuming.

              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  if (instance.props !== finishedWork.memoizedProps) {
                    error('Expected %s props to match memoized props before ' + 'componentDidUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                  }

                  if (instance.state !== finishedWork.memoizedState) {
                    error('Expected %s state to match memoized state before ' + 'componentDidUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.state`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                  }
                }
              }

              {
                instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
              }
            }
          } // TODO: I think this is now always non-null by the time it reaches the
          // commit phase. Consider removing the type check.


          var updateQueue = finishedWork.updateQueue;

          if (updateQueue !== null) {
            {
              if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                if (instance.props !== finishedWork.memoizedProps) {
                  error('Expected %s props to match memoized props before ' + 'processing the update queue. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                }

                if (instance.state !== finishedWork.memoizedState) {
                  error('Expected %s state to match memoized state before ' + 'processing the update queue. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.state`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance');
                }
              }
            } // We could update instance props and state here,
            // but instead we rely on them being set during last render.
            // TODO: revisit this when we implement resuming.


            commitUpdateQueue(finishedWork, updateQueue, instance);
          }

          return;
        }

      case HostRoot:
        {
          // TODO: I think this is now always non-null by the time it reaches the
          // commit phase. Consider removing the type check.
          var _updateQueue = finishedWork.updateQueue;

          if (_updateQueue !== null) {
            var _instance = null;

            if (finishedWork.child !== null) {
              switch (finishedWork.child.tag) {
                case HostComponent:
                  _instance = getPublicInstance(finishedWork.child.stateNode);
                  break;

                case ClassComponent:
                  _instance = finishedWork.child.stateNode;
                  break;
              }
            }

            commitUpdateQueue(finishedWork, _updateQueue, _instance);
          }

          return;
        }

      case HostComponent:
        {
          var _instance2 = finishedWork.stateNode; // Renderers may schedule work to be done after host components are mounted
          // (eg DOM renderer may schedule auto-focus for inputs and form controls).
          // These effects should only be committed when components are first mounted,
          // aka when there is no current/alternate.

          if (current === null && finishedWork.flags & Update) {
            var type = finishedWork.type;
            var props = finishedWork.memoizedProps;
            commitMount(_instance2, type, props, finishedWork);
          }

          return;
        }

      case HostText:
        {
          // We have no life-cycles associated with text.
          return;
        }

      case HostPortal:
        {
          // We have no life-cycles associated with portals.
          return;
        }

      case Profiler:
        {
          {
            var _finishedWork$memoize2 = finishedWork.memoizedProps;
                _finishedWork$memoize2.onCommit;
                var onRender = _finishedWork$memoize2.onRender;
            finishedWork.stateNode.effectDuration;
            var commitTime = getCommitTime();

            if (typeof onRender === 'function') {
              {
                onRender(finishedWork.memoizedProps.id, current === null ? 'mount' : 'update', finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime, finishedRoot.memoizedInteractions);
              }
            }
          }

          return;
        }

      case SuspenseComponent:
        {
          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
          return;
        }

      case SuspenseListComponent:
      case IncompleteClassComponent:
      case FundamentalComponent:
      case ScopeComponent:
      case OffscreenComponent:
      case LegacyHiddenComponent:
        return;
    }

    {
      {
        throw Error( "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }

  function hideOrUnhideAllChildren(finishedWork, isHidden) {
    if (supportsMutation) {
      // We only have the top Fiber that was inserted but we need to recurse down its
      // children to find all the terminal nodes.
      var node = finishedWork;

      while (true) {
        if (node.tag === HostComponent) {
          var instance = node.stateNode;

          if (isHidden) {
            hideInstance(instance);
          } else {
            unhideInstance(node.stateNode, node.memoizedProps);
          }
        } else if (node.tag === HostText) {
          var _instance3 = node.stateNode;

          if (isHidden) {
            hideTextInstance(_instance3);
          } else {
            unhideTextInstance(_instance3, node.memoizedProps);
          }
        } else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork) ; else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === finishedWork) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === finishedWork) {
            return;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    }
  }

  function commitAttachRef(finishedWork) {
    var ref = finishedWork.ref;

    if (ref !== null) {
      var instance = finishedWork.stateNode;
      var instanceToUse;

      switch (finishedWork.tag) {
        case HostComponent:
          instanceToUse = getPublicInstance(instance);
          break;

        default:
          instanceToUse = instance;
      } // Moved outside to ensure DCE works with this flag

      if (typeof ref === 'function') {
        ref(instanceToUse);
      } else {
        {
          if (!ref.hasOwnProperty('current')) {
            error('Unexpected ref object provided for %s. ' + 'Use either a ref-setter function or React.createRef().', getComponentName(finishedWork.type));
          }
        }

        ref.current = instanceToUse;
      }
    }
  }

  function commitDetachRef(current) {
    var currentRef = current.ref;

    if (currentRef !== null) {
      if (typeof currentRef === 'function') {
        currentRef(null);
      } else {
        currentRef.current = null;
      }
    }
  } // User-originating errors (lifecycles and refs) should not interrupt
  // deletion, so don't let them throw. Host-originating errors should
  // interrupt deletion, so it's okay


  function commitUnmount(finishedRoot, current, renderPriorityLevel) {
    onCommitUnmount(current);

    switch (current.tag) {
      case FunctionComponent:
      case ForwardRef:
      case MemoComponent:
      case SimpleMemoComponent:
      case Block:
        {
          var updateQueue = current.updateQueue;

          if (updateQueue !== null) {
            var lastEffect = updateQueue.lastEffect;

            if (lastEffect !== null) {
              var firstEffect = lastEffect.next;
              var effect = firstEffect;

              do {
                var _effect2 = effect,
                    destroy = _effect2.destroy,
                    tag = _effect2.tag;

                if (destroy !== undefined) {
                  if ((tag & Passive$1) !== NoFlags$1) {
                    enqueuePendingPassiveHookEffectUnmount(current, effect);
                  } else {
                    {
                      safelyCallDestroy(current, destroy);
                    }
                  }
                }

                effect = effect.next;
              } while (effect !== firstEffect);
            }
          }

          return;
        }

      case ClassComponent:
        {
          safelyDetachRef(current);
          var instance = current.stateNode;

          if (typeof instance.componentWillUnmount === 'function') {
            safelyCallComponentWillUnmount(current, instance);
          }

          return;
        }

      case HostComponent:
        {
          safelyDetachRef(current);
          return;
        }

      case HostPortal:
        {
          // TODO: this is recursive.
          // We are also not using this parent because
          // the portal will get pushed immediately.
          if (supportsMutation) {
            unmountHostComponents(finishedRoot, current);
          } else if (supportsPersistence) {
            emptyPortalContainer(current);
          }

          return;
        }

      case FundamentalComponent:
        {

          return;
        }

      case DehydratedFragment:
        {

          return;
        }

      case ScopeComponent:
        {

          return;
        }
    }
  }

  function commitNestedUnmounts(finishedRoot, root, renderPriorityLevel) {
    // While we're inside a removed host node we don't want to call
    // removeChild on the inner nodes because they're removed by the top
    // call anyway. We also want to call componentWillUnmount on all
    // composites before this host node is removed from the tree. Therefore
    // we do an inner loop while we're still inside the host node.
    var node = root;

    while (true) {
      commitUnmount(finishedRoot, node); // Visit children because they may contain more composite or host nodes.
      // Skip portals because commitUnmount() currently visits them recursively.

      if (node.child !== null && ( // If we use mutation we drill down into portals using commitUnmount above.
      // If we don't use mutation we drill down into portals here instead.
      !supportsMutation || node.tag !== HostPortal)) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === root) {
        return;
      }

      while (node.sibling === null) {
        if (node.return === null || node.return === root) {
          return;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    }
  }

  function detachFiberMutation(fiber) {
    // Cut off the return pointers to disconnect it from the tree. Ideally, we
    // should clear the child pointer of the parent alternate to let this
    // get GC:ed but we don't know which for sure which parent is the current
    // one so we'll settle for GC:ing the subtree of this child. This child
    // itself will be GC:ed when the parent updates the next time.
    // Note: we cannot null out sibling here, otherwise it can cause issues
    // with findDOMNode and how it requires the sibling field to carry out
    // traversal in a later effect. See PR #16820. We now clear the sibling
    // field after effects, see: detachFiberAfterEffects.
    //
    // Don't disconnect stateNode now; it will be detached in detachFiberAfterEffects.
    // It may be required if the current component is an error boundary,
    // and one of its descendants throws while unmounting a passive effect.
    fiber.alternate = null;
    fiber.child = null;
    fiber.dependencies = null;
    fiber.firstEffect = null;
    fiber.lastEffect = null;
    fiber.memoizedProps = null;
    fiber.memoizedState = null;
    fiber.pendingProps = null;
    fiber.return = null;
    fiber.updateQueue = null;

    {
      fiber._debugOwner = null;
    }
  }

  function emptyPortalContainer(current) {
    if (!supportsPersistence) {
      return;
    }

    var portal = current.stateNode;
    var containerInfo = portal.containerInfo;
    var emptyChildSet = createContainerChildSet(containerInfo);
    replaceContainerChildren(containerInfo, emptyChildSet);
  }

  function commitContainer(finishedWork) {
    if (!supportsPersistence) {
      return;
    }

    switch (finishedWork.tag) {
      case ClassComponent:
      case HostComponent:
      case HostText:
      case FundamentalComponent:
        {
          return;
        }

      case HostRoot:
      case HostPortal:
        {
          var portalOrRoot = finishedWork.stateNode;
          var containerInfo = portalOrRoot.containerInfo,
              pendingChildren = portalOrRoot.pendingChildren;
          replaceContainerChildren(containerInfo, pendingChildren);
          return;
        }
    }

    {
      {
        throw Error( "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }

  function getHostParentFiber(fiber) {
    var parent = fiber.return;

    while (parent !== null) {
      if (isHostParent(parent)) {
        return parent;
      }

      parent = parent.return;
    }

    {
      {
        throw Error( "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }

  function isHostParent(fiber) {
    return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
  }

  function getHostSibling(fiber) {
    // We're going to search forward into the tree until we find a sibling host
    // node. Unfortunately, if multiple insertions are done in a row we have to
    // search past them. This leads to exponential search for the next sibling.
    // TODO: Find a more efficient way to do this.
    var node = fiber;

    siblings: while (true) {
      // If we didn't find anything, let's try the next sibling.
      while (node.sibling === null) {
        if (node.return === null || isHostParent(node.return)) {
          // If we pop out of the root or hit the parent the fiber we are the
          // last sibling.
          return null;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;

      while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
        // If it is not host node and, we might have a host node inside it.
        // Try to search down until we find one.
        if (node.flags & Placement) {
          // If we don't have a child, try the siblings instead.
          continue siblings;
        } // If we don't have a child, try the siblings instead.
        // We also skip portals because they are not part of this host tree.


        if (node.child === null || node.tag === HostPortal) {
          continue siblings;
        } else {
          node.child.return = node;
          node = node.child;
        }
      } // Check if this host node is stable or about to be placed.


      if (!(node.flags & Placement)) {
        // Found it!
        return node.stateNode;
      }
    }
  }

  function commitPlacement(finishedWork) {
    if (!supportsMutation) {
      return;
    } // Recursively insert all host nodes into the parent.


    var parentFiber = getHostParentFiber(finishedWork); // Note: these two variables *must* always be updated together.

    var parent;
    var isContainer;
    var parentStateNode = parentFiber.stateNode;

    switch (parentFiber.tag) {
      case HostComponent:
        parent = parentStateNode;
        isContainer = false;
        break;

      case HostRoot:
        parent = parentStateNode.containerInfo;
        isContainer = true;
        break;

      case HostPortal:
        parent = parentStateNode.containerInfo;
        isContainer = true;
        break;

      case FundamentalComponent:

      // eslint-disable-next-line-no-fallthrough

      default:
        {
          {
            throw Error( "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue." );
          }
        }

    }

    if (parentFiber.flags & ContentReset) {
      // Reset the text content of the parent before doing any insertions
      resetTextContent(parent); // Clear ContentReset from the effect tag

      parentFiber.flags &= ~ContentReset;
    }

    var before = getHostSibling(finishedWork); // We only have the top Fiber that was inserted but we need to recurse down its
    // children to find all the terminal nodes.

    if (isContainer) {
      insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
    } else {
      insertOrAppendPlacementNode(finishedWork, before, parent);
    }
  }

  function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
    var tag = node.tag;
    var isHost = tag === HostComponent || tag === HostText;

    if (isHost || enableFundamentalAPI ) {
      var stateNode = isHost ? node.stateNode : node.stateNode.instance;

      if (before) {
        insertInContainerBefore(parent, stateNode, before);
      } else {
        appendChildToContainer(parent, stateNode);
      }
    } else if (tag === HostPortal) ; else {
      var child = node.child;

      if (child !== null) {
        insertOrAppendPlacementNodeIntoContainer(child, before, parent);
        var sibling = child.sibling;

        while (sibling !== null) {
          insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
          sibling = sibling.sibling;
        }
      }
    }
  }

  function insertOrAppendPlacementNode(node, before, parent) {
    var tag = node.tag;
    var isHost = tag === HostComponent || tag === HostText;

    if (isHost || enableFundamentalAPI ) {
      var stateNode = isHost ? node.stateNode : node.stateNode.instance;

      if (before) {
        insertBefore(parent, stateNode, before);
      } else {
        appendChild(parent, stateNode);
      }
    } else if (tag === HostPortal) ; else {
      var child = node.child;

      if (child !== null) {
        insertOrAppendPlacementNode(child, before, parent);
        var sibling = child.sibling;

        while (sibling !== null) {
          insertOrAppendPlacementNode(sibling, before, parent);
          sibling = sibling.sibling;
        }
      }
    }
  }

  function unmountHostComponents(finishedRoot, current, renderPriorityLevel) {
    // We only have the top Fiber that was deleted but we need to recurse down its
    // children to find all the terminal nodes.
    var node = current; // Each iteration, currentParent is populated with node's host parent if not
    // currentParentIsValid.

    var currentParentIsValid = false; // Note: these two variables *must* always be updated together.

    var currentParent;
    var currentParentIsContainer;

    while (true) {
      if (!currentParentIsValid) {
        var parent = node.return;

        findParent: while (true) {
          if (!(parent !== null)) {
            {
              throw Error( "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue." );
            }
          }

          var parentStateNode = parent.stateNode;

          switch (parent.tag) {
            case HostComponent:
              currentParent = parentStateNode;
              currentParentIsContainer = false;
              break findParent;

            case HostRoot:
              currentParent = parentStateNode.containerInfo;
              currentParentIsContainer = true;
              break findParent;

            case HostPortal:
              currentParent = parentStateNode.containerInfo;
              currentParentIsContainer = true;
              break findParent;

          }

          parent = parent.return;
        }

        currentParentIsValid = true;
      }

      if (node.tag === HostComponent || node.tag === HostText) {
        commitNestedUnmounts(finishedRoot, node); // After all the children have unmounted, it is now safe to remove the
        // node from the tree.

        if (currentParentIsContainer) {
          removeChildFromContainer(currentParent, node.stateNode);
        } else {
          removeChild(currentParent, node.stateNode);
        } // Don't visit children because we already visited them.

      } else if (node.tag === HostPortal) {
        if (node.child !== null) {
          // When we go into a portal, it becomes the parent to remove from.
          // We will reassign it back when we pop the portal on the way up.
          currentParent = node.stateNode.containerInfo;
          currentParentIsContainer = true; // Visit children because portals might contain host components.

          node.child.return = node;
          node = node.child;
          continue;
        }
      } else {
        commitUnmount(finishedRoot, node); // Visit children because we may find more host components below.

        if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }
      }

      if (node === current) {
        return;
      }

      while (node.sibling === null) {
        if (node.return === null || node.return === current) {
          return;
        }

        node = node.return;

        if (node.tag === HostPortal) {
          // When we go out of the portal, we need to restore the parent.
          // Since we don't keep a stack of them, we will search for it.
          currentParentIsValid = false;
        }
      }

      node.sibling.return = node.return;
      node = node.sibling;
    }
  }

  function commitDeletion(finishedRoot, current, renderPriorityLevel) {
    if (supportsMutation) {
      // Recursively delete all host nodes from the parent.
      // Detach refs and call componentWillUnmount() on the whole subtree.
      unmountHostComponents(finishedRoot, current);
    } else {
      // Detach refs and call componentWillUnmount() on the whole subtree.
      commitNestedUnmounts(finishedRoot, current);
    }

    var alternate = current.alternate;
    detachFiberMutation(current);

    if (alternate !== null) {
      detachFiberMutation(alternate);
    }
  }

  function commitWork(current, finishedWork) {
    if (!supportsMutation) {
      switch (finishedWork.tag) {
        case FunctionComponent:
        case ForwardRef:
        case MemoComponent:
        case SimpleMemoComponent:
        case Block:
          {
            // Layout effects are destroyed during the mutation phase so that all
            // destroy functions for all fibers are called before any create functions.
            // This prevents sibling component effects from interfering with each other,
            // e.g. a destroy function in one component should never override a ref set
            // by a create function in another component during the same commit.
            {
              commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
            }

            return;
          }

        case Profiler:
          {
            return;
          }

        case SuspenseComponent:
          {
            commitSuspenseComponent(finishedWork);
            attachSuspenseRetryListeners(finishedWork);
            return;
          }

        case SuspenseListComponent:
          {
            attachSuspenseRetryListeners(finishedWork);
            return;
          }

        case HostRoot:
          {
            if (supportsHydration) {
              var root = finishedWork.stateNode;

              if (root.hydrate) {
                // We've just hydrated. No need to hydrate again.
                root.hydrate = false;
                commitHydratedContainer(root.containerInfo);
              }
            }

            break;
          }

        case OffscreenComponent:
        case LegacyHiddenComponent:
          {
            return;
          }
      }

      commitContainer(finishedWork);
      return;
    }

    switch (finishedWork.tag) {
      case FunctionComponent:
      case ForwardRef:
      case MemoComponent:
      case SimpleMemoComponent:
      case Block:
        {
          // Layout effects are destroyed during the mutation phase so that all
          // destroy functions for all fibers are called before any create functions.
          // This prevents sibling component effects from interfering with each other,
          // e.g. a destroy function in one component should never override a ref set
          // by a create function in another component during the same commit.
          {
            commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
          }

          return;
        }

      case ClassComponent:
        {
          return;
        }

      case HostComponent:
        {
          var instance = finishedWork.stateNode;

          if (instance != null) {
            // Commit the work prepared earlier.
            var newProps = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
            // as the newProps. The updatePayload will contain the real change in
            // this case.

            var oldProps = current !== null ? current.memoizedProps : newProps;
            var type = finishedWork.type; // TODO: Type the updateQueue to be specific to host components.

            var updatePayload = finishedWork.updateQueue;
            finishedWork.updateQueue = null;

            if (updatePayload !== null) {
              commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
            }
          }

          return;
        }

      case HostText:
        {
          if (!(finishedWork.stateNode !== null)) {
            {
              throw Error( "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue." );
            }
          }

          var textInstance = finishedWork.stateNode;
          var newText = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
          // as the newProps. The updatePayload will contain the real change in
          // this case.

          var oldText = current !== null ? current.memoizedProps : newText;
          commitTextUpdate(textInstance, oldText, newText);
          return;
        }

      case HostRoot:
        {
          if (supportsHydration) {
            var _root = finishedWork.stateNode;

            if (_root.hydrate) {
              // We've just hydrated. No need to hydrate again.
              _root.hydrate = false;
              commitHydratedContainer(_root.containerInfo);
            }
          }

          return;
        }

      case Profiler:
        {
          return;
        }

      case SuspenseComponent:
        {
          commitSuspenseComponent(finishedWork);
          attachSuspenseRetryListeners(finishedWork);
          return;
        }

      case SuspenseListComponent:
        {
          attachSuspenseRetryListeners(finishedWork);
          return;
        }

      case IncompleteClassComponent:
        {
          return;
        }

      case FundamentalComponent:
        {

          break;
        }

      case ScopeComponent:
        {

          break;
        }

      case OffscreenComponent:
      case LegacyHiddenComponent:
        {
          var newState = finishedWork.memoizedState;
          var isHidden = newState !== null;
          hideOrUnhideAllChildren(finishedWork, isHidden);
          return;
        }
    }

    {
      {
        throw Error( "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }

  function commitSuspenseComponent(finishedWork) {
    var newState = finishedWork.memoizedState;

    if (newState !== null) {
      markCommitTimeOfFallback();

      if (supportsMutation) {
        // Hide the Offscreen component that contains the primary children. TODO:
        // Ideally, this effect would have been scheduled on the Offscreen fiber
        // itself. That's how unhiding works: the Offscreen component schedules an
        // effect on itself. However, in this case, the component didn't complete,
        // so the fiber was never added to the effect list in the normal path. We
        // could have appended it to the effect list in the Suspense component's
        // second pass, but doing it this way is less complicated. This would be
        // simpler if we got rid of the effect list and traversed the tree, like
        // we're planning to do.
        var primaryChildParent = finishedWork.child;
        hideOrUnhideAllChildren(primaryChildParent, true);
      }
    }
  }

  function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
    if (!supportsHydration) {
      return;
    }

    var newState = finishedWork.memoizedState;

    if (newState === null) {
      var current = finishedWork.alternate;

      if (current !== null) {
        var prevState = current.memoizedState;

        if (prevState !== null) {
          var suspenseInstance = prevState.dehydrated;

          if (suspenseInstance !== null) {
            commitHydratedSuspenseInstance(suspenseInstance);
          }
        }
      }
    }
  }

  function attachSuspenseRetryListeners(finishedWork) {
    // If this boundary just timed out, then it will have a set of wakeables.
    // For each wakeable, attach a listener so that when it resolves, React
    // attempts to re-render the boundary in the primary (pre-timeout) state.
    var wakeables = finishedWork.updateQueue;

    if (wakeables !== null) {
      finishedWork.updateQueue = null;
      var retryCache = finishedWork.stateNode;

      if (retryCache === null) {
        retryCache = finishedWork.stateNode = new PossiblyWeakSet();
      }

      wakeables.forEach(function (wakeable) {
        // Memoize using the boundary fiber to prevent redundant listeners.
        var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);

        if (!retryCache.has(wakeable)) {
          {
            if (wakeable.__reactDoNotTraceInteractions !== true) {
              retry = tracing$1.unstable_wrap(retry);
            }
          }

          retryCache.add(wakeable);
          wakeable.then(retry, retry);
        }
      });
    }
  } // This function detects when a Suspense boundary goes from visible to hidden.
  // It returns false if the boundary is already hidden.
  // TODO: Use an effect tag.


  function isSuspenseBoundaryBeingHidden(current, finishedWork) {
    if (current !== null) {
      var oldState = current.memoizedState;

      if (oldState === null || oldState.dehydrated !== null) {
        var newState = finishedWork.memoizedState;
        return newState !== null && newState.dehydrated === null;
      }
    }

    return false;
  }

  function commitResetTextContent(current) {
    if (!supportsMutation) {
      return;
    }

    resetTextContent(current.stateNode);
  }

  var COMPONENT_TYPE = 0;
  var HAS_PSEUDO_CLASS_TYPE = 1;
  var ROLE_TYPE = 2;
  var TEST_NAME_TYPE = 3;
  var TEXT_TYPE = 4;

  if (typeof Symbol === 'function' && Symbol.for) {
    var symbolFor$1 = Symbol.for;
    COMPONENT_TYPE = symbolFor$1('selector.component');
    HAS_PSEUDO_CLASS_TYPE = symbolFor$1('selector.has_pseudo_class');
    ROLE_TYPE = symbolFor$1('selector.role');
    TEST_NAME_TYPE = symbolFor$1('selector.test_id');
    TEXT_TYPE = symbolFor$1('selector.text');
  }

  function createComponentSelector(component) {
    return {
      $$typeof: COMPONENT_TYPE,
      value: component
    };
  }
  function createHasPsuedoClassSelector(selectors) {
    return {
      $$typeof: HAS_PSEUDO_CLASS_TYPE,
      value: selectors
    };
  }
  function createRoleSelector(role) {
    return {
      $$typeof: ROLE_TYPE,
      value: role
    };
  }
  function createTextSelector(text) {
    return {
      $$typeof: TEXT_TYPE,
      value: text
    };
  }
  function createTestNameSelector(id) {
    return {
      $$typeof: TEST_NAME_TYPE,
      value: id
    };
  }

  function findFiberRootForHostRoot(hostRoot) {
    var maybeFiber = getInstanceFromNode(hostRoot);

    if (maybeFiber != null) {
      if (!(typeof maybeFiber.memoizedProps['data-testname'] === 'string')) {
        {
          throw Error( "Invalid host root specified. Should be either a React container or a node with a testname attribute." );
        }
      }

      return maybeFiber;
    } else {
      var fiberRoot = findFiberRoot(hostRoot);

      if (!(fiberRoot !== null)) {
        {
          throw Error( "Could not find React container within specified host subtree." );
        }
      } // The Flow type for FiberRoot is a little funky.
      // createFiberRoot() cheats this by treating the root as :any and adding stateNode lazily.


      return fiberRoot.stateNode.current;
    }
  }

  function matchSelector(fiber, selector) {
    switch (selector.$$typeof) {
      case COMPONENT_TYPE:
        if (fiber.type === selector.value) {
          return true;
        }

        break;

      case HAS_PSEUDO_CLASS_TYPE:
        return hasMatchingPaths(fiber, selector.value);

      case ROLE_TYPE:
        if (fiber.tag === HostComponent) {
          var node = fiber.stateNode;

          if (matchAccessibilityRole(node, selector.value)) {
            return true;
          }
        }

        break;

      case TEXT_TYPE:
        if (fiber.tag === HostComponent || fiber.tag === HostText) {
          var textContent = getTextContent(fiber);

          if (textContent !== null && textContent.indexOf(selector.value) >= 0) {
            return true;
          }
        }

        break;

      case TEST_NAME_TYPE:
        if (fiber.tag === HostComponent) {
          var dataTestID = fiber.memoizedProps['data-testname'];

          if (typeof dataTestID === 'string' && dataTestID.toLowerCase() === selector.value.toLowerCase()) {
            return true;
          }
        }

        break;

      default:
        {
          {
            throw Error( "Invalid selector type " + selector + " specified." );
          }
        }
    }

    return false;
  }

  function selectorToString(selector) {
    switch (selector.$$typeof) {
      case COMPONENT_TYPE:
        var displayName = getComponentName(selector.value) || 'Unknown';
        return "<" + displayName + ">";

      case HAS_PSEUDO_CLASS_TYPE:
        return ":has(" + (selectorToString(selector) || '') + ")";

      case ROLE_TYPE:
        return "[role=\"" + selector.value + "\"]";

      case TEXT_TYPE:
        return "\"" + selector.value + "\"";

      case TEST_NAME_TYPE:
        return "[data-testname=\"" + selector.value + "\"]";

      default:
        {
          {
            throw Error( "Invalid selector type " + selector + " specified." );
          }
        }
    }
  }

  function findPaths(root, selectors) {
    var matchingFibers = [];
    var stack = [root, 0];
    var index = 0;

    while (index < stack.length) {
      var fiber = stack[index++];
      var selectorIndex = stack[index++];
      var selector = selectors[selectorIndex];

      if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
        continue;
      } else {
        while (selector != null && matchSelector(fiber, selector)) {
          selectorIndex++;
          selector = selectors[selectorIndex];
        }
      }

      if (selectorIndex === selectors.length) {
        matchingFibers.push(fiber);
      } else {
        var child = fiber.child;

        while (child !== null) {
          stack.push(child, selectorIndex);
          child = child.sibling;
        }
      }
    }

    return matchingFibers;
  } // Same as findPaths but with eager bailout on first match


  function hasMatchingPaths(root, selectors) {
    var stack = [root, 0];
    var index = 0;

    while (index < stack.length) {
      var fiber = stack[index++];
      var selectorIndex = stack[index++];
      var selector = selectors[selectorIndex];

      if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
        continue;
      } else {
        while (selector != null && matchSelector(fiber, selector)) {
          selectorIndex++;
          selector = selectors[selectorIndex];
        }
      }

      if (selectorIndex === selectors.length) {
        return true;
      } else {
        var child = fiber.child;

        while (child !== null) {
          stack.push(child, selectorIndex);
          child = child.sibling;
        }
      }
    }

    return false;
  }

  function findAllNodes(hostRoot, selectors) {
    if (!supportsTestSelectors) {
      {
        {
          throw Error( "Test selector API is not supported by this renderer." );
        }
      }
    }

    var root = findFiberRootForHostRoot(hostRoot);
    var matchingFibers = findPaths(root, selectors);
    var instanceRoots = [];
    var stack = Array.from(matchingFibers);
    var index = 0;

    while (index < stack.length) {
      var node = stack[index++];

      if (node.tag === HostComponent) {
        if (isHiddenSubtree(node)) {
          continue;
        }

        instanceRoots.push(node.stateNode);
      } else {
        var child = node.child;

        while (child !== null) {
          stack.push(child);
          child = child.sibling;
        }
      }
    }

    return instanceRoots;
  }
  function getFindAllNodesFailureDescription(hostRoot, selectors) {
    if (!supportsTestSelectors) {
      {
        {
          throw Error( "Test selector API is not supported by this renderer." );
        }
      }
    }

    var root = findFiberRootForHostRoot(hostRoot);
    var maxSelectorIndex = 0;
    var matchedNames = []; // The logic of this loop should be kept in sync with findPaths()

    var stack = [root, 0];
    var index = 0;

    while (index < stack.length) {
      var fiber = stack[index++];
      var selectorIndex = stack[index++];
      var selector = selectors[selectorIndex];

      if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
        continue;
      } else if (matchSelector(fiber, selector)) {
        matchedNames.push(selectorToString(selector));
        selectorIndex++;

        if (selectorIndex > maxSelectorIndex) {
          maxSelectorIndex = selectorIndex;
        }
      }

      if (selectorIndex < selectors.length) {
        var child = fiber.child;

        while (child !== null) {
          stack.push(child, selectorIndex);
          child = child.sibling;
        }
      }
    }

    if (maxSelectorIndex < selectors.length) {
      var unmatchedNames = [];

      for (var i = maxSelectorIndex; i < selectors.length; i++) {
        unmatchedNames.push(selectorToString(selectors[i]));
      }

      return 'findAllNodes was able to match part of the selector:\n' + ("  " + matchedNames.join(' > ') + "\n\n") + 'No matching component was found for:\n' + ("  " + unmatchedNames.join(' > '));
    }

    return null;
  }
  function findBoundingRects(hostRoot, selectors) {
    if (!supportsTestSelectors) {
      {
        {
          throw Error( "Test selector API is not supported by this renderer." );
        }
      }
    }

    var instanceRoots = findAllNodes(hostRoot, selectors);
    var boundingRects = [];

    for (var i = 0; i < instanceRoots.length; i++) {
      boundingRects.push(getBoundingRect(instanceRoots[i]));
    }

    for (var _i = boundingRects.length - 1; _i > 0; _i--) {
      var targetRect = boundingRects[_i];
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetRect.width;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetRect.height;

      for (var j = _i - 1; j >= 0; j--) {
        if (_i !== j) {
          var otherRect = boundingRects[j];
          var otherLeft = otherRect.x;
          var otherRight = otherLeft + otherRect.width;
          var otherTop = otherRect.y;
          var otherBottom = otherTop + otherRect.height; // Merging all rects to the minimums set would be complicated,
          // but we can handle the most common cases:
          // 1. completely overlapping rects
          // 2. adjacent rects that are the same width or height (e.g. items in a list)
          //
          // Even given the above constraints,
          // we still won't end up with the fewest possible rects without doing multiple passes,
          // but it's good enough for this purpose.

          if (targetLeft >= otherLeft && targetTop >= otherTop && targetRight <= otherRight && targetBottom <= otherBottom) {
            // Complete overlapping rects; remove the inner one.
            boundingRects.splice(_i, 1);
            break;
          } else if (targetLeft === otherLeft && targetRect.width === otherRect.width && !(otherBottom < targetTop) && !(otherTop > targetBottom)) {
            // Adjacent vertical rects; merge them.
            if (otherTop > targetTop) {
              otherRect.height += otherTop - targetTop;
              otherRect.y = targetTop;
            }

            if (otherBottom < targetBottom) {
              otherRect.height = targetBottom - otherTop;
            }

            boundingRects.splice(_i, 1);
            break;
          } else if (targetTop === otherTop && targetRect.height === otherRect.height && !(otherRight < targetLeft) && !(otherLeft > targetRight)) {
            // Adjacent horizontal rects; merge them.
            if (otherLeft > targetLeft) {
              otherRect.width += otherLeft - targetLeft;
              otherRect.x = targetLeft;
            }

            if (otherRight < targetRight) {
              otherRect.width = targetRight - otherLeft;
            }

            boundingRects.splice(_i, 1);
            break;
          }
        }
      }
    }

    return boundingRects;
  }
  function focusWithin(hostRoot, selectors) {
    if (!supportsTestSelectors) {
      {
        {
          throw Error( "Test selector API is not supported by this renderer." );
        }
      }
    }

    var root = findFiberRootForHostRoot(hostRoot);
    var matchingFibers = findPaths(root, selectors);
    var stack = Array.from(matchingFibers);
    var index = 0;

    while (index < stack.length) {
      var fiber = stack[index++];

      if (isHiddenSubtree(fiber)) {
        continue;
      }

      if (fiber.tag === HostComponent) {
        var node = fiber.stateNode;

        if (setFocusIfFocusable(node)) {
          return true;
        }
      }

      var child = fiber.child;

      while (child !== null) {
        stack.push(child);
        child = child.sibling;
      }
    }

    return false;
  }
  var commitHooks = [];
  function onCommitRoot$1() {
    if (supportsTestSelectors) {
      commitHooks.forEach(function (commitHook) {
        return commitHook();
      });
    }
  }
  function observeVisibleRects(hostRoot, selectors, callback, options) {
    if (!supportsTestSelectors) {
      {
        {
          throw Error( "Test selector API is not supported by this renderer." );
        }
      }
    }

    var instanceRoots = findAllNodes(hostRoot, selectors);

    var _setupIntersectionObs = setupIntersectionObserver(instanceRoots, callback, options),
        disconnect = _setupIntersectionObs.disconnect,
        observe = _setupIntersectionObs.observe,
        unobserve = _setupIntersectionObs.unobserve; // When React mutates the host environment, we may need to change what we're listening to.


    var commitHook = function () {
      var nextInstanceRoots = findAllNodes(hostRoot, selectors);
      instanceRoots.forEach(function (target) {
        if (nextInstanceRoots.indexOf(target) < 0) {
          unobserve(target);
        }
      });
      nextInstanceRoots.forEach(function (target) {
        if (instanceRoots.indexOf(target) < 0) {
          observe(target);
        }
      });
    };

    commitHooks.push(commitHook);
    return {
      disconnect: function () {
        // Stop listening for React mutations:
        var index = commitHooks.indexOf(commitHook);

        if (index >= 0) {
          commitHooks.splice(index, 1);
        } // Disconnect the host observer:


        disconnect();
      }
    };
  }

  var didWarnAboutMessageChannel = false;
  var enqueueTaskImpl = null;
  function enqueueTask(task) {
    if (enqueueTaskImpl === null) {
      try {
        // read require off the module object to get around the bundlers.
        // we don't want them to detect a require and bundle a Node polyfill.
        var requireString = ('require' + Math.random()).slice(0, 7);
        var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
        // version of setImmediate, bypassing fake timers if any.

        enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
      } catch (_err) {
        // we're in a browser
        // we can't use regular timers because they may still be faked
        // so we try MessageChannel+postMessage instead
        enqueueTaskImpl = function (callback) {
          {
            if (didWarnAboutMessageChannel === false) {
              didWarnAboutMessageChannel = true;

              if (typeof MessageChannel === 'undefined') {
                error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
              }
            }
          }

          var channel = new MessageChannel();
          channel.port1.onmessage = callback;
          channel.port2.postMessage(undefined);
        };
      }
    }

    return enqueueTaskImpl(task);
  }

  var ceil = Math.ceil;
  var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher,
      ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner,
      IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
  var NoContext =
  /*             */
  0;
  var BatchedContext =
  /*               */
  1;
  var EventContext =
  /*                 */
  2;
  var DiscreteEventContext =
  /*         */
  4;
  var LegacyUnbatchedContext =
  /*       */
  8;
  var RenderContext =
  /*                */
  16;
  var CommitContext =
  /*                */
  32;
  var RetryAfterError =
  /*       */
  64;
  var RootIncomplete = 0;
  var RootFatalErrored = 1;
  var RootErrored = 2;
  var RootSuspended = 3;
  var RootSuspendedWithDelay = 4;
  var RootCompleted = 5; // Describes where we are in the React execution stack

  var executionContext = NoContext; // The root we're working on

  var workInProgressRoot = null; // The fiber we're working on

  var workInProgress = null; // The lanes we're rendering

  var workInProgressRootRenderLanes = NoLanes; // Stack that allows components to change the render lanes for its subtree
  // This is a superset of the lanes we started working on at the root. The only
  // case where it's different from `workInProgressRootRenderLanes` is when we
  // enter a subtree that is hidden and needs to be unhidden: Suspense and
  // Offscreen component.
  //
  // Most things in the work loop should deal with workInProgressRootRenderLanes.
  // Most things in begin/complete phases should deal with subtreeRenderLanes.

  var subtreeRenderLanes = NoLanes;
  var subtreeRenderLanesCursor = createCursor(NoLanes); // Whether to root completed, errored, suspended, etc.

  var workInProgressRootExitStatus = RootIncomplete; // A fatal error, if one is thrown

  var workInProgressRootFatalError = null; // "Included" lanes refer to lanes that were worked on during this render. It's
  // slightly different than `renderLanes` because `renderLanes` can change as you
  // enter and exit an Offscreen tree. This value is the combination of all render
  // lanes for the entire render phase.

  var workInProgressRootIncludedLanes = NoLanes; // The work left over by components that were visited during this render. Only
  // includes unprocessed updates, not work in bailed out children.

  var workInProgressRootSkippedLanes = NoLanes; // Lanes that were updated (in an interleaved event) during this render.

  var workInProgressRootUpdatedLanes = NoLanes; // Lanes that were pinged (in an interleaved event) during this render.

  var workInProgressRootPingedLanes = NoLanes;
  var mostRecentlyUpdatedRoot = null; // The most recent time we committed a fallback. This lets us ensure a train
  // model where we don't commit new loading states in too quick succession.

  var globalMostRecentFallbackTime = 0;
  var FALLBACK_THROTTLE_MS = 500; // The absolute time for when we should start giving up on rendering
  // more and prefer CPU suspense heuristics instead.

  var workInProgressRootRenderTargetTime = Infinity; // How long a render is supposed to take before we start following CPU
  // suspense heuristics and opt out of rendering more content.

  var RENDER_TIMEOUT_MS = 500;

  function resetRenderTimer() {
    workInProgressRootRenderTargetTime = now$1() + RENDER_TIMEOUT_MS;
  }

  function getRenderTargetTime() {
    return workInProgressRootRenderTargetTime;
  }
  var nextEffect = null;
  var hasUncaughtError = false;
  var firstUncaughtError = null;
  var legacyErrorBoundariesThatAlreadyFailed = null;
  var rootDoesHavePassiveEffects = false;
  var rootWithPendingPassiveEffects = null;
  var pendingPassiveEffectsRenderPriority = NoPriority$1;
  var pendingPassiveEffectsLanes = NoLanes;
  var pendingPassiveHookEffectsMount = [];
  var pendingPassiveHookEffectsUnmount = [];
  var rootsWithPendingDiscreteUpdates = null; // Use these to prevent an infinite loop of nested updates

  var NESTED_UPDATE_LIMIT = 50;
  var nestedUpdateCount = 0;
  var rootWithNestedUpdates = null;
  var NESTED_PASSIVE_UPDATE_LIMIT = 50;
  var nestedPassiveUpdateCount = 0; // Marks the need to reschedule pending interactions at these lanes
  // during the commit phase. This enables them to be traced across components
  // that spawn new work during render. E.g. hidden boundaries, suspended SSR
  // hydration or SuspenseList.
  // TODO: Can use a bitmask instead of an array

  var spawnedWorkDuringRender = null; // If two updates are scheduled within the same event, we should treat their
  // event times as simultaneous, even if the actual clock time has advanced
  // between the first and second call.

  var currentEventTime = NoTimestamp;
  var currentEventWipLanes = NoLanes;
  var currentEventPendingLanes = NoLanes; // Dev only flag that tracks if passive effects are currently being flushed.
  // We warn about state updates for unmounted components differently in this case.

  var isFlushingPassiveEffects = false;
  var focusedInstanceHandle = null;
  var shouldFireAfterActiveInstanceBlur = false;
  function getWorkInProgressRoot() {
    return workInProgressRoot;
  }
  function requestEventTime() {
    if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
      // We're inside React, so it's fine to read the actual time.
      return now$1();
    } // We're not inside React, so we may be in the middle of a browser event.


    if (currentEventTime !== NoTimestamp) {
      // Use the same start time for all updates until we enter React again.
      return currentEventTime;
    } // This is the first update since React yielded. Compute a new start time.


    currentEventTime = now$1();
    return currentEventTime;
  }
  function requestUpdateLane(fiber) {
    // Special cases
    var mode = fiber.mode;

    if ((mode & BlockingMode) === NoMode) {
      return SyncLane;
    } else if ((mode & ConcurrentMode) === NoMode) {
      return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
    } // The algorithm for assigning an update to a lane should be stable for all
    // updates at the same priority within the same event. To do this, the inputs
    // to the algorithm must be the same. For example, we use the `renderLanes`
    // to avoid choosing a lane that is already in the middle of rendering.
    //
    // However, the "included" lanes could be mutated in between updates in the
    // same event, like if you perform an update inside `flushSync`. Or any other
    // code path that might call `prepareFreshStack`.
    //
    // The trick we use is to cache the first of each of these inputs within an
    // event. Then reset the cached values once we can be sure the event is over.
    // Our heuristic for that is whenever we enter a concurrent work loop.
    //
    // We'll do the same for `currentEventPendingLanes` below.


    if (currentEventWipLanes === NoLanes) {
      currentEventWipLanes = workInProgressRootIncludedLanes;
    }

    var isTransition = requestCurrentTransition() !== NoTransition;

    if (isTransition) {
      if (currentEventPendingLanes !== NoLanes) {
        currentEventPendingLanes = mostRecentlyUpdatedRoot !== null ? mostRecentlyUpdatedRoot.pendingLanes : NoLanes;
      }

      return findTransitionLane(currentEventWipLanes, currentEventPendingLanes);
    } // TODO: Remove this dependency on the Scheduler priority.
    // To do that, we're replacing it with an update lane priority.


    var schedulerPriority = getCurrentPriorityLevel(); // The old behavior was using the priority level of the Scheduler.
    // This couples React to the Scheduler internals, so we're replacing it
    // with the currentUpdateLanePriority above. As an example of how this
    // could be problematic, if we're not inside `Scheduler.runWithPriority`,
    // then we'll get the priority of the current running Scheduler task,
    // which is probably not what we want.

    var lane;

    if ( // TODO: Temporary. We're removing the concept of discrete updates.
    (executionContext & DiscreteEventContext) !== NoContext && schedulerPriority === UserBlockingPriority$1) {
      lane = findUpdateLane(InputDiscreteLanePriority, currentEventWipLanes);
    } else {
      var schedulerLanePriority = schedulerPriorityToLanePriority(schedulerPriority);

      lane = findUpdateLane(schedulerLanePriority, currentEventWipLanes);
    }

    return lane;
  }

  function requestRetryLane(fiber) {
    // This is a fork of `requestUpdateLane` designed specifically for Suspense
    // "retries" — a special update that attempts to flip a Suspense boundary
    // from its placeholder state to its primary/resolved state.
    // Special cases
    var mode = fiber.mode;

    if ((mode & BlockingMode) === NoMode) {
      return SyncLane;
    } else if ((mode & ConcurrentMode) === NoMode) {
      return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
    } // See `requestUpdateLane` for explanation of `currentEventWipLanes`


    if (currentEventWipLanes === NoLanes) {
      currentEventWipLanes = workInProgressRootIncludedLanes;
    }

    return findRetryLane(currentEventWipLanes);
  }

  function scheduleUpdateOnFiber(fiber, lane, eventTime) {
    checkForNestedUpdates();
    warnAboutRenderPhaseUpdatesInDEV(fiber);
    var root = markUpdateLaneFromFiberToRoot(fiber, lane);

    if (root === null) {
      warnAboutUpdateOnUnmountedFiberInDEV(fiber);
      return null;
    } // Mark that the root has a pending update.


    markRootUpdated(root, lane, eventTime);

    if (root === workInProgressRoot) {
      // Received an update to a tree that's in the middle of rendering. Mark
      // that there was an interleaved update work on this root. Unless the
      // `deferRenderPhaseUpdateToNextBatch` flag is off and this is a render
      // phase update. In that case, we don't treat render phase updates as if
      // they were interleaved, for backwards compat reasons.
      {
        workInProgressRootUpdatedLanes = mergeLanes(workInProgressRootUpdatedLanes, lane);
      }

      if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
        // The root already suspended with a delay, which means this render
        // definitely won't finish. Since we have a new update, let's mark it as
        // suspended now, right before marking the incoming update. This has the
        // effect of interrupting the current render and switching to the update.
        // TODO: Make sure this doesn't override pings that happen while we've
        // already started rendering.
        markRootSuspended$1(root, workInProgressRootRenderLanes);
      }
    } // TODO: requestUpdateLanePriority also reads the priority. Pass the
    // priority as an argument to that function and this one.


    var priorityLevel = getCurrentPriorityLevel();

    if (lane === SyncLane) {
      if ( // Check if we're inside unbatchedUpdates
      (executionContext & LegacyUnbatchedContext) !== NoContext && // Check if we're not already rendering
      (executionContext & (RenderContext | CommitContext)) === NoContext) {
        // Register pending interactions on the root to avoid losing traced interaction data.
        schedulePendingInteractions(root, lane); // This is a legacy edge case. The initial mount of a ReactDOM.render-ed
        // root inside of batchedUpdates should be synchronous, but layout updates
        // should be deferred until the end of the batch.

        performSyncWorkOnRoot(root);
      } else {
        ensureRootIsScheduled(root, eventTime);
        schedulePendingInteractions(root, lane);

        if (executionContext === NoContext) {
          // Flush the synchronous work now, unless we're already working or inside
          // a batch. This is intentionally inside scheduleUpdateOnFiber instead of
          // scheduleCallbackForFiber to preserve the ability to schedule a callback
          // without immediately flushing it. We only do this for user-initiated
          // updates, to preserve historical behavior of legacy mode.
          resetRenderTimer();
          flushSyncCallbackQueue();
        }
      }
    } else {
      // Schedule a discrete update but only if it's not Sync.
      if ((executionContext & DiscreteEventContext) !== NoContext && ( // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      priorityLevel === UserBlockingPriority$1 || priorityLevel === ImmediatePriority$1)) {
        // This is the result of a discrete event. Track the lowest priority
        // discrete update per root so we can flush them early, if needed.
        if (rootsWithPendingDiscreteUpdates === null) {
          rootsWithPendingDiscreteUpdates = new Set([root]);
        } else {
          rootsWithPendingDiscreteUpdates.add(root);
        }
      } // Schedule other updates after in case the callback is sync.


      ensureRootIsScheduled(root, eventTime);
      schedulePendingInteractions(root, lane);
    } // We use this when assigning a lane for a transition inside
    // `requestUpdateLane`. We assume it's the same as the root being updated,
    // since in the common case of a single root app it probably is. If it's not
    // the same root, then it's not a huge deal, we just might batch more stuff
    // together more than necessary.


    mostRecentlyUpdatedRoot = root;
  } // This is split into a separate function so we can mark a fiber with pending
  // work without treating it as a typical update that originates from an event;
  // e.g. retrying a Suspense boundary isn't an update, but it does schedule work
  // on a fiber.

  function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
    // Update the source fiber's lanes
    sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);
    var alternate = sourceFiber.alternate;

    if (alternate !== null) {
      alternate.lanes = mergeLanes(alternate.lanes, lane);
    }

    {
      if (alternate === null && (sourceFiber.flags & (Placement | Hydrating)) !== NoFlags) {
        warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
      }
    } // Walk the parent path to the root and update the child expiration time.


    var node = sourceFiber;
    var parent = sourceFiber.return;

    while (parent !== null) {
      parent.childLanes = mergeLanes(parent.childLanes, lane);
      alternate = parent.alternate;

      if (alternate !== null) {
        alternate.childLanes = mergeLanes(alternate.childLanes, lane);
      } else {
        {
          if ((parent.flags & (Placement | Hydrating)) !== NoFlags) {
            warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
          }
        }
      }

      node = parent;
      parent = parent.return;
    }

    if (node.tag === HostRoot) {
      var root = node.stateNode;
      return root;
    } else {
      return null;
    }
  } // Use this function to schedule a task for a root. There's only one task per
  // root; if a task was already scheduled, we'll check to make sure the priority
  // of the existing task is the same as the priority of the next level that the
  // root has work on. This function is called on every update, and right before
  // exiting a task.


  function ensureRootIsScheduled(root, currentTime) {
    var existingCallbackNode = root.callbackNode; // Check if any lanes are being starved by other work. If so, mark them as
    // expired so we know to work on those next.

    markStarvedLanesAsExpired(root, currentTime); // Determine the next lanes to work on, and their priority.

    var nextLanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes); // This returns the priority level computed during the `getNextLanes` call.

    var newCallbackPriority = returnNextLanesPriority();

    if (nextLanes === NoLanes) {
      // Special case: There's nothing to work on.
      if (existingCallbackNode !== null) {
        cancelCallback(existingCallbackNode);
        root.callbackNode = null;
        root.callbackPriority = NoLanePriority;
      }

      return;
    } // Check if there's an existing task. We may be able to reuse it.


    if (existingCallbackNode !== null) {
      var existingCallbackPriority = root.callbackPriority;

      if (existingCallbackPriority === newCallbackPriority) {
        // The priority hasn't changed. We can reuse the existing task. Exit.
        return;
      } // The priority changed. Cancel the existing callback. We'll schedule a new
      // one below.


      cancelCallback(existingCallbackNode);
    } // Schedule a new callback.


    var newCallbackNode;

    if (newCallbackPriority === SyncLanePriority) {
      // Special case: Sync React callbacks are scheduled on a special
      // internal queue
      newCallbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
    } else if (newCallbackPriority === SyncBatchedLanePriority) {
      newCallbackNode = scheduleCallback(ImmediatePriority$1, performSyncWorkOnRoot.bind(null, root));
    } else {
      var schedulerPriorityLevel = lanePriorityToSchedulerPriority(newCallbackPriority);
      newCallbackNode = scheduleCallback(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root));
    }

    root.callbackPriority = newCallbackPriority;
    root.callbackNode = newCallbackNode;
  } // This is the entry point for every concurrent task, i.e. anything that
  // goes through Scheduler.


  function performConcurrentWorkOnRoot(root) {
    // Since we know we're in a React event, we can clear the current
    // event time. The next update will compute a new event time.
    currentEventTime = NoTimestamp;
    currentEventWipLanes = NoLanes;
    currentEventPendingLanes = NoLanes;

    if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
      {
        throw Error( "Should not already be working." );
      }
    } // Flush any pending passive effects before deciding which lanes to work on,
    // in case they schedule additional work.


    var originalCallbackNode = root.callbackNode;
    var didFlushPassiveEffects = flushPassiveEffects();

    if (didFlushPassiveEffects) {
      // Something in the passive effect phase may have canceled the current task.
      // Check if the task node for this root was changed.
      if (root.callbackNode !== originalCallbackNode) {
        // The current task was canceled. Exit. We don't need to call
        // `ensureRootIsScheduled` because the check above implies either that
        // there's a new task, or that there's no remaining work on this root.
        return null;
      }
    } // Determine the next expiration time to work on, using the fields stored
    // on the root.


    var lanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);

    if (lanes === NoLanes) {
      // Defensive coding. This is never expected to happen.
      return null;
    }

    var exitStatus = renderRootConcurrent(root, lanes);

    if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
      // The render included lanes that were updated during the render phase.
      // For example, when unhiding a hidden tree, we include all the lanes
      // that were previously skipped when the tree was hidden. That set of
      // lanes is a superset of the lanes we started rendering with.
      //
      // So we'll throw out the current work and restart.
      prepareFreshStack(root, NoLanes);
    } else if (exitStatus !== RootIncomplete) {
      if (exitStatus === RootErrored) {
        executionContext |= RetryAfterError; // If an error occurred during hydration,
        // discard server response and fall back to client side render.

        if (root.hydrate) {
          root.hydrate = false;
          clearContainer(root.containerInfo);
        } // If something threw an error, try rendering one more time. We'll render
        // synchronously to block concurrent data mutations, and we'll includes
        // all pending updates are included. If it still fails after the second
        // attempt, we'll give up and commit the resulting tree.


        lanes = getLanesToRetrySynchronouslyOnError(root);

        if (lanes !== NoLanes) {
          exitStatus = renderRootSync(root, lanes);
        }
      }

      if (exitStatus === RootFatalErrored) {
        var fatalError = workInProgressRootFatalError;
        prepareFreshStack(root, NoLanes);
        markRootSuspended$1(root, lanes);
        ensureRootIsScheduled(root, now$1());
        throw fatalError;
      } // We now have a consistent tree. The next step is either to commit it,
      // or, if something suspended, wait to commit it after a timeout.


      var finishedWork = root.current.alternate;
      root.finishedWork = finishedWork;
      root.finishedLanes = lanes;
      finishConcurrentRender(root, exitStatus, lanes);
    }

    ensureRootIsScheduled(root, now$1());

    if (root.callbackNode === originalCallbackNode) {
      // The task node scheduled for this root is the same one that's
      // currently executed. Need to return a continuation.
      return performConcurrentWorkOnRoot.bind(null, root);
    }

    return null;
  }

  function finishConcurrentRender(root, exitStatus, lanes) {
    switch (exitStatus) {
      case RootIncomplete:
      case RootFatalErrored:
        {
          {
            {
              throw Error( "Root did not complete. This is a bug in React." );
            }
          }
        }
      // Flow knows about invariant, so it complains if I add a break
      // statement, but eslint doesn't know about invariant, so it complains
      // if I do. eslint-disable-next-line no-fallthrough

      case RootErrored:
        {
          // We should have already attempted to retry this tree. If we reached
          // this point, it errored again. Commit it.
          commitRoot(root);
          break;
        }

      case RootSuspended:
        {
          markRootSuspended$1(root, lanes); // We have an acceptable loading state. We need to figure out if we
          // should immediately commit it or wait a bit.

          if (includesOnlyRetries(lanes) && // do not delay if we're inside an act() scope
          !shouldForceFlushFallbacksInDEV()) {
            // This render only included retries, no updates. Throttle committing
            // retries so that we don't show too many loading states too quickly.
            var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now$1(); // Don't bother with a very short suspense time.

            if (msUntilTimeout > 10) {
              var nextLanes = getNextLanes(root, NoLanes);

              if (nextLanes !== NoLanes) {
                // There's additional work on this root.
                break;
              }

              var suspendedLanes = root.suspendedLanes;

              if (!isSubsetOfLanes(suspendedLanes, lanes)) {
                // We should prefer to render the fallback of at the last
                // suspended level. Ping the last suspended level to try
                // rendering it again.
                // FIXME: What if the suspended lanes are Idle? Should not restart.
                requestEventTime();
                markRootPinged(root, suspendedLanes);
                break;
              } // The render is suspended, it hasn't timed out, and there's no
              // lower priority work to do. Instead of committing the fallback
              // immediately, wait for more data to arrive.


              root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), msUntilTimeout);
              break;
            }
          } // The work expired. Commit immediately.


          commitRoot(root);
          break;
        }

      case RootSuspendedWithDelay:
        {
          markRootSuspended$1(root, lanes);

          if (includesOnlyTransitions(lanes)) {
            // This is a transition, so we should exit without committing a
            // placeholder and without scheduling a timeout. Delay indefinitely
            // until we receive more data.
            break;
          }

          if (!shouldForceFlushFallbacksInDEV()) {
            // This is not a transition, but we did trigger an avoided state.
            // Schedule a placeholder to display after a short delay, using the Just
            // Noticeable Difference.
            // TODO: Is the JND optimization worth the added complexity? If this is
            // the only reason we track the event time, then probably not.
            // Consider removing.
            var mostRecentEventTime = getMostRecentEventTime(root, lanes);
            var eventTimeMs = mostRecentEventTime;
            var timeElapsedMs = now$1() - eventTimeMs;

            var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs; // Don't bother with a very short suspense time.


            if (_msUntilTimeout > 10) {
              // Instead of committing the fallback immediately, wait for more data
              // to arrive.
              root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), _msUntilTimeout);
              break;
            }
          } // Commit the placeholder.


          commitRoot(root);
          break;
        }

      case RootCompleted:
        {
          // The work completed. Ready to commit.
          commitRoot(root);
          break;
        }

      default:
        {
          {
            {
              throw Error( "Unknown root exit status." );
            }
          }
        }
    }
  }

  function markRootSuspended$1(root, suspendedLanes) {
    // When suspending, we should always exclude lanes that were pinged or (more
    // rarely, since we try to avoid it) updated during the render phase.
    // TODO: Lol maybe there's a better way to factor this besides this
    // obnoxiously named function :)
    suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
    suspendedLanes = removeLanes(suspendedLanes, workInProgressRootUpdatedLanes);
    markRootSuspended(root, suspendedLanes);
  } // This is the entry point for synchronous tasks that don't go
  // through Scheduler


  function performSyncWorkOnRoot(root) {
    if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
      {
        throw Error( "Should not already be working." );
      }
    }

    flushPassiveEffects();
    var lanes;
    var exitStatus;

    if (root === workInProgressRoot && includesSomeLane(root.expiredLanes, workInProgressRootRenderLanes)) {
      // There's a partial tree, and at least one of its lanes has expired. Finish
      // rendering it before rendering the rest of the expired work.
      lanes = workInProgressRootRenderLanes;
      exitStatus = renderRootSync(root, lanes);

      if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
        // The render included lanes that were updated during the render phase.
        // For example, when unhiding a hidden tree, we include all the lanes
        // that were previously skipped when the tree was hidden. That set of
        // lanes is a superset of the lanes we started rendering with.
        //
        // Note that this only happens when part of the tree is rendered
        // concurrently. If the whole tree is rendered synchronously, then there
        // are no interleaved events.
        lanes = getNextLanes(root, lanes);
        exitStatus = renderRootSync(root, lanes);
      }
    } else {
      lanes = getNextLanes(root, NoLanes);
      exitStatus = renderRootSync(root, lanes);
    }

    if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
      executionContext |= RetryAfterError; // If an error occurred during hydration,
      // discard server response and fall back to client side render.

      if (root.hydrate) {
        root.hydrate = false;
        clearContainer(root.containerInfo);
      } // If something threw an error, try rendering one more time. We'll render
      // synchronously to block concurrent data mutations, and we'll includes
      // all pending updates are included. If it still fails after the second
      // attempt, we'll give up and commit the resulting tree.


      lanes = getLanesToRetrySynchronouslyOnError(root);

      if (lanes !== NoLanes) {
        exitStatus = renderRootSync(root, lanes);
      }
    }

    if (exitStatus === RootFatalErrored) {
      var fatalError = workInProgressRootFatalError;
      prepareFreshStack(root, NoLanes);
      markRootSuspended$1(root, lanes);
      ensureRootIsScheduled(root, now$1());
      throw fatalError;
    } // We now have a consistent tree. Because this is a sync render, we
    // will commit it even if something suspended.


    var finishedWork = root.current.alternate;
    root.finishedWork = finishedWork;
    root.finishedLanes = lanes;
    commitRoot(root); // Before exiting, make sure there's a callback scheduled for the next
    // pending level.

    ensureRootIsScheduled(root, now$1());
    return null;
  }

  function flushRoot(root, lanes) {
    markRootExpired(root, lanes);
    ensureRootIsScheduled(root, now$1());

    if ((executionContext & (RenderContext | CommitContext)) === NoContext) {
      resetRenderTimer();
      flushSyncCallbackQueue();
    }
  }
  function flushDiscreteUpdates() {
    // TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
    // However, `act` uses `batchedUpdates`, so there's no way to distinguish
    // those two cases. Need to fix this before exposing flushDiscreteUpdates
    // as a public API.
    if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
      {
        if ((executionContext & RenderContext) !== NoContext) {
          error('unstable_flushDiscreteUpdates: Cannot flush updates when React is ' + 'already rendering.');
        }
      } // We're already rendering, so we can't synchronously flush pending work.
      // This is probably a nested event dispatch triggered by a lifecycle/effect,
      // like `el.focus()`. Exit.


      return;
    }

    flushPendingDiscreteUpdates(); // If the discrete updates scheduled passive effects, flush them now so that
    // they fire before the next serial event.

    flushPassiveEffects();
  }
  function deferredUpdates(fn) {
    {
      return runWithPriority(NormalPriority$1, fn);
    }
  }

  function flushPendingDiscreteUpdates() {
    if (rootsWithPendingDiscreteUpdates !== null) {
      // For each root with pending discrete updates, schedule a callback to
      // immediately flush them.
      var roots = rootsWithPendingDiscreteUpdates;
      rootsWithPendingDiscreteUpdates = null;
      roots.forEach(function (root) {
        markDiscreteUpdatesExpired(root);
        ensureRootIsScheduled(root, now$1());
      });
    } // Now flush the immediate queue.


    flushSyncCallbackQueue();
  }

  function batchedUpdates(fn, a) {
    var prevExecutionContext = executionContext;
    executionContext |= BatchedContext;

    try {
      return fn(a);
    } finally {
      executionContext = prevExecutionContext;

      if (executionContext === NoContext) {
        // Flush the immediate callbacks that were scheduled during this batch
        resetRenderTimer();
        flushSyncCallbackQueue();
      }
    }
  }
  function batchedEventUpdates(fn, a) {
    var prevExecutionContext = executionContext;
    executionContext |= EventContext;

    try {
      return fn(a);
    } finally {
      executionContext = prevExecutionContext;

      if (executionContext === NoContext) {
        // Flush the immediate callbacks that were scheduled during this batch
        resetRenderTimer();
        flushSyncCallbackQueue();
      }
    }
  }
  function discreteUpdates(fn, a, b, c, d) {
    var prevExecutionContext = executionContext;
    executionContext |= DiscreteEventContext;

    {
      try {
        return runWithPriority(UserBlockingPriority$1, fn.bind(null, a, b, c, d));
      } finally {
        executionContext = prevExecutionContext;

        if (executionContext === NoContext) {
          // Flush the immediate callbacks that were scheduled during this batch
          resetRenderTimer();
          flushSyncCallbackQueue();
        }
      }
    }
  }
  function unbatchedUpdates(fn, a) {
    var prevExecutionContext = executionContext;
    executionContext &= ~BatchedContext;
    executionContext |= LegacyUnbatchedContext;

    try {
      return fn(a);
    } finally {
      executionContext = prevExecutionContext;

      if (executionContext === NoContext) {
        // Flush the immediate callbacks that were scheduled during this batch
        resetRenderTimer();
        flushSyncCallbackQueue();
      }
    }
  }
  function flushSync(fn, a) {
    var prevExecutionContext = executionContext;

    if ((prevExecutionContext & (RenderContext | CommitContext)) !== NoContext) {
      {
        error('flushSync was called from inside a lifecycle method. React cannot ' + 'flush when React is already rendering. Consider moving this call to ' + 'a scheduler task or micro task.');
      }

      return fn(a);
    }

    executionContext |= BatchedContext;

    {
      try {
        if (fn) {
          return runWithPriority(ImmediatePriority$1, fn.bind(null, a));
        } else {
          return undefined;
        }
      } finally {
        executionContext = prevExecutionContext; // Flush the immediate callbacks that were scheduled during this batch.
        // Note that this will happen even if batchedUpdates is higher up
        // the stack.

        flushSyncCallbackQueue();
      }
    }
  }
  function flushControlled(fn) {
    var prevExecutionContext = executionContext;
    executionContext |= BatchedContext;

    {
      try {
        runWithPriority(ImmediatePriority$1, fn);
      } finally {
        executionContext = prevExecutionContext;

        if (executionContext === NoContext) {
          // Flush the immediate callbacks that were scheduled during this batch
          resetRenderTimer();
          flushSyncCallbackQueue();
        }
      }
    }
  }
  function pushRenderLanes(fiber, lanes) {
    push(subtreeRenderLanesCursor, subtreeRenderLanes, fiber);
    subtreeRenderLanes = mergeLanes(subtreeRenderLanes, lanes);
    workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
  }
  function popRenderLanes(fiber) {
    subtreeRenderLanes = subtreeRenderLanesCursor.current;
    pop(subtreeRenderLanesCursor, fiber);
  }

  function prepareFreshStack(root, lanes) {
    root.finishedWork = null;
    root.finishedLanes = NoLanes;
    var timeoutHandle = root.timeoutHandle;

    if (timeoutHandle !== noTimeout) {
      // The root previous suspended and scheduled a timeout to commit a fallback
      // state. Now that we have additional work, cancel the timeout.
      root.timeoutHandle = noTimeout; // $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above

      cancelTimeout(timeoutHandle);
    }

    if (workInProgress !== null) {
      var interruptedWork = workInProgress.return;

      while (interruptedWork !== null) {
        unwindInterruptedWork(interruptedWork);
        interruptedWork = interruptedWork.return;
      }
    }

    workInProgressRoot = root;
    workInProgress = createWorkInProgress(root.current, null);
    workInProgressRootRenderLanes = subtreeRenderLanes = workInProgressRootIncludedLanes = lanes;
    workInProgressRootExitStatus = RootIncomplete;
    workInProgressRootFatalError = null;
    workInProgressRootSkippedLanes = NoLanes;
    workInProgressRootUpdatedLanes = NoLanes;
    workInProgressRootPingedLanes = NoLanes;

    {
      spawnedWorkDuringRender = null;
    }

    {
      ReactStrictModeWarnings.discardPendingWarnings();
    }
  }

  function handleError(root, thrownValue) {
    do {
      var erroredWork = workInProgress;

      try {
        // Reset module-level state that was set during the render phase.
        resetContextDependencies();
        resetHooksAfterThrow();
        resetCurrentFiber(); // TODO: I found and added this missing line while investigating a
        // separate issue. Write a regression test using string refs.

        ReactCurrentOwner$2.current = null;

        if (erroredWork === null || erroredWork.return === null) {
          // Expected to be working on a non-root fiber. This is a fatal error
          // because there's no ancestor that can handle it; the root is
          // supposed to capture all errors that weren't caught by an error
          // boundary.
          workInProgressRootExitStatus = RootFatalErrored;
          workInProgressRootFatalError = thrownValue; // Set `workInProgress` to null. This represents advancing to the next
          // sibling, or the parent if there are no siblings. But since the root
          // has no siblings nor a parent, we set it to null. Usually this is
          // handled by `completeUnitOfWork` or `unwindWork`, but since we're
          // intentionally not calling those, we need set it here.
          // TODO: Consider calling `unwindWork` to pop the contexts.

          workInProgress = null;
          return;
        }

        if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
          // Record the time spent rendering before an error was thrown. This
          // avoids inaccurate Profiler durations in the case of a
          // suspended render.
          stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
        }

        throwException(root, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
        completeUnitOfWork(erroredWork);
      } catch (yetAnotherThrownValue) {
        // Something in the return path also threw.
        thrownValue = yetAnotherThrownValue;

        if (workInProgress === erroredWork && erroredWork !== null) {
          // If this boundary has already errored, then we had trouble processing
          // the error. Bubble it to the next boundary.
          erroredWork = erroredWork.return;
          workInProgress = erroredWork;
        } else {
          erroredWork = workInProgress;
        }

        continue;
      } // Return to the normal work loop.


      return;
    } while (true);
  }

  function pushDispatcher() {
    var prevDispatcher = ReactCurrentDispatcher$2.current;
    ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;

    if (prevDispatcher === null) {
      // The React isomorphic package does not include a default dispatcher.
      // Instead the first renderer will lazily attach one, in order to give
      // nicer error messages.
      return ContextOnlyDispatcher;
    } else {
      return prevDispatcher;
    }
  }

  function popDispatcher(prevDispatcher) {
    ReactCurrentDispatcher$2.current = prevDispatcher;
  }

  function pushInteractions(root) {
    {
      var prevInteractions = tracing$1.__interactionsRef.current;
      tracing$1.__interactionsRef.current = root.memoizedInteractions;
      return prevInteractions;
    }
  }

  function popInteractions(prevInteractions) {
    {
      tracing$1.__interactionsRef.current = prevInteractions;
    }
  }

  function markCommitTimeOfFallback() {
    globalMostRecentFallbackTime = now$1();
  }
  function markSkippedUpdateLanes(lane) {
    workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
  }
  function renderDidSuspend() {
    if (workInProgressRootExitStatus === RootIncomplete) {
      workInProgressRootExitStatus = RootSuspended;
    }
  }
  function renderDidSuspendDelayIfPossible() {
    if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
      workInProgressRootExitStatus = RootSuspendedWithDelay;
    } // Check if there are updates that we skipped tree that might have unblocked
    // this render.


    if (workInProgressRoot !== null && (includesNonIdleWork(workInProgressRootSkippedLanes) || includesNonIdleWork(workInProgressRootUpdatedLanes))) {
      // Mark the current render as suspended so that we switch to working on
      // the updates that were skipped. Usually we only suspend at the end of
      // the render phase.
      // TODO: We should probably always mark the root as suspended immediately
      // (inside this function), since by suspending at the end of the render
      // phase introduces a potential mistake where we suspend lanes that were
      // pinged or updated while we were rendering.
      markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
    }
  }
  function renderDidError() {
    if (workInProgressRootExitStatus !== RootCompleted) {
      workInProgressRootExitStatus = RootErrored;
    }
  } // Called during render to determine if anything has suspended.
  // Returns false if we're not sure.

  function renderHasNotSuspendedYet() {
    // If something errored or completed, we can't really be sure,
    // so those are false.
    return workInProgressRootExitStatus === RootIncomplete;
  }

  function renderRootSync(root, lanes) {
    var prevExecutionContext = executionContext;
    executionContext |= RenderContext;
    var prevDispatcher = pushDispatcher(); // If the root or lanes have changed, throw out the existing stack
    // and prepare a fresh one. Otherwise we'll continue where we left off.

    if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
      prepareFreshStack(root, lanes);
      startWorkOnPendingInteractions(root, lanes);
    }

    var prevInteractions = pushInteractions(root);

    do {
      try {
        workLoopSync();
        break;
      } catch (thrownValue) {
        handleError(root, thrownValue);
      }
    } while (true);

    resetContextDependencies();

    {
      popInteractions(prevInteractions);
    }

    executionContext = prevExecutionContext;
    popDispatcher(prevDispatcher);

    if (workInProgress !== null) {
      // This is a sync render, so we should have finished the whole tree.
      {
        {
          throw Error( "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue." );
        }
      }
    }


    workInProgressRoot = null;
    workInProgressRootRenderLanes = NoLanes;
    return workInProgressRootExitStatus;
  } // The work loop is an extremely hot path. Tell Closure not to inline it.

  /** @noinline */


  function workLoopSync() {
    // Already timed out, so perform work without checking if we need to yield.
    while (workInProgress !== null) {
      performUnitOfWork(workInProgress);
    }
  }

  function renderRootConcurrent(root, lanes) {
    var prevExecutionContext = executionContext;
    executionContext |= RenderContext;
    var prevDispatcher = pushDispatcher(); // If the root or lanes have changed, throw out the existing stack
    // and prepare a fresh one. Otherwise we'll continue where we left off.

    if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
      resetRenderTimer();
      prepareFreshStack(root, lanes);
      startWorkOnPendingInteractions(root, lanes);
    }

    var prevInteractions = pushInteractions(root);

    do {
      try {
        workLoopConcurrent();
        break;
      } catch (thrownValue) {
        handleError(root, thrownValue);
      }
    } while (true);

    resetContextDependencies();

    {
      popInteractions(prevInteractions);
    }

    popDispatcher(prevDispatcher);
    executionContext = prevExecutionContext;


    if (workInProgress !== null) {

      return RootIncomplete;
    } else {


      workInProgressRoot = null;
      workInProgressRootRenderLanes = NoLanes; // Return the final exit status.

      return workInProgressRootExitStatus;
    }
  }
  /** @noinline */


  function workLoopConcurrent() {
    // Perform work until Scheduler asks us to yield
    while (workInProgress !== null && !shouldYield()) {
      performUnitOfWork(workInProgress);
    }
  }

  function performUnitOfWork(unitOfWork) {
    // The current, flushed, state of this fiber is the alternate. Ideally
    // nothing should rely on this, but relying on it here means that we don't
    // need an additional field on the work in progress.
    var current = unitOfWork.alternate;
    setCurrentFiber(unitOfWork);
    var next;

    if ( (unitOfWork.mode & ProfileMode) !== NoMode) {
      startProfilerTimer(unitOfWork);
      next = beginWork$1(current, unitOfWork, subtreeRenderLanes);
      stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
    } else {
      next = beginWork$1(current, unitOfWork, subtreeRenderLanes);
    }

    resetCurrentFiber();
    unitOfWork.memoizedProps = unitOfWork.pendingProps;

    if (next === null) {
      // If this doesn't spawn new work, complete the current work.
      completeUnitOfWork(unitOfWork);
    } else {
      workInProgress = next;
    }

    ReactCurrentOwner$2.current = null;
  }

  function completeUnitOfWork(unitOfWork) {
    // Attempt to complete the current unit of work, then move to the next
    // sibling. If there are no more siblings, return to the parent fiber.
    var completedWork = unitOfWork;

    do {
      // The current, flushed, state of this fiber is the alternate. Ideally
      // nothing should rely on this, but relying on it here means that we don't
      // need an additional field on the work in progress.
      var current = completedWork.alternate;
      var returnFiber = completedWork.return; // Check if the work completed or if something threw.

      if ((completedWork.flags & Incomplete) === NoFlags) {
        setCurrentFiber(completedWork);
        var next = void 0;

        if ( (completedWork.mode & ProfileMode) === NoMode) {
          next = completeWork(current, completedWork, subtreeRenderLanes);
        } else {
          startProfilerTimer(completedWork);
          next = completeWork(current, completedWork, subtreeRenderLanes); // Update render duration assuming we didn't error.

          stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
        }

        resetCurrentFiber();

        if (next !== null) {
          // Completing this fiber spawned new work. Work on that next.
          workInProgress = next;
          return;
        }

        resetChildLanes(completedWork);

        if (returnFiber !== null && // Do not append effects to parents if a sibling failed to complete
        (returnFiber.flags & Incomplete) === NoFlags) {
          // Append all the effects of the subtree and this fiber onto the effect
          // list of the parent. The completion order of the children affects the
          // side-effect order.
          if (returnFiber.firstEffect === null) {
            returnFiber.firstEffect = completedWork.firstEffect;
          }

          if (completedWork.lastEffect !== null) {
            if (returnFiber.lastEffect !== null) {
              returnFiber.lastEffect.nextEffect = completedWork.firstEffect;
            }

            returnFiber.lastEffect = completedWork.lastEffect;
          } // If this fiber had side-effects, we append it AFTER the children's
          // side-effects. We can perform certain side-effects earlier if needed,
          // by doing multiple passes over the effect list. We don't want to
          // schedule our own side-effect on our own list because if end up
          // reusing children we'll schedule this effect onto itself since we're
          // at the end.


          var flags = completedWork.flags; // Skip both NoWork and PerformedWork tags when creating the effect
          // list. PerformedWork effect is read by React DevTools but shouldn't be
          // committed.

          if (flags > PerformedWork) {
            if (returnFiber.lastEffect !== null) {
              returnFiber.lastEffect.nextEffect = completedWork;
            } else {
              returnFiber.firstEffect = completedWork;
            }

            returnFiber.lastEffect = completedWork;
          }
        }
      } else {
        // This fiber did not complete because something threw. Pop values off
        // the stack without entering the complete phase. If this is a boundary,
        // capture values if possible.
        var _next = unwindWork(completedWork); // Because this fiber did not complete, don't reset its expiration time.


        if (_next !== null) {
          // If completing this work spawned new work, do that next. We'll come
          // back here again.
          // Since we're restarting, remove anything that is not a host effect
          // from the effect tag.
          _next.flags &= HostEffectMask;
          workInProgress = _next;
          return;
        }

        if ( (completedWork.mode & ProfileMode) !== NoMode) {
          // Record the render duration for the fiber that errored.
          stopProfilerTimerIfRunningAndRecordDelta(completedWork, false); // Include the time spent working on failed children before continuing.

          var actualDuration = completedWork.actualDuration;
          var child = completedWork.child;

          while (child !== null) {
            actualDuration += child.actualDuration;
            child = child.sibling;
          }

          completedWork.actualDuration = actualDuration;
        }

        if (returnFiber !== null) {
          // Mark the parent fiber as incomplete and clear its effect list.
          returnFiber.firstEffect = returnFiber.lastEffect = null;
          returnFiber.flags |= Incomplete;
        }
      }

      var siblingFiber = completedWork.sibling;

      if (siblingFiber !== null) {
        // If there is more work to do in this returnFiber, do that next.
        workInProgress = siblingFiber;
        return;
      } // Otherwise, return to the parent


      completedWork = returnFiber; // Update the next thing we're working on in case something throws.

      workInProgress = completedWork;
    } while (completedWork !== null); // We've reached the root.


    if (workInProgressRootExitStatus === RootIncomplete) {
      workInProgressRootExitStatus = RootCompleted;
    }
  }

  function resetChildLanes(completedWork) {
    if ( // TODO: Move this check out of the hot path by moving `resetChildLanes`
    // to switch statement in `completeWork`.
    (completedWork.tag === LegacyHiddenComponent || completedWork.tag === OffscreenComponent) && completedWork.memoizedState !== null && !includesSomeLane(subtreeRenderLanes, OffscreenLane) && (completedWork.mode & ConcurrentMode) !== NoLanes) {
      // The children of this component are hidden. Don't bubble their
      // expiration times.
      return;
    }

    var newChildLanes = NoLanes; // Bubble up the earliest expiration time.

    if ( (completedWork.mode & ProfileMode) !== NoMode) {
      // In profiling mode, resetChildExpirationTime is also used to reset
      // profiler durations.
      var actualDuration = completedWork.actualDuration;
      var treeBaseDuration = completedWork.selfBaseDuration; // When a fiber is cloned, its actualDuration is reset to 0. This value will
      // only be updated if work is done on the fiber (i.e. it doesn't bailout).
      // When work is done, it should bubble to the parent's actualDuration. If
      // the fiber has not been cloned though, (meaning no work was done), then
      // this value will reflect the amount of time spent working on a previous
      // render. In that case it should not bubble. We determine whether it was
      // cloned by comparing the child pointer.

      var shouldBubbleActualDurations = completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
      var child = completedWork.child;

      while (child !== null) {
        newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));

        if (shouldBubbleActualDurations) {
          actualDuration += child.actualDuration;
        }

        treeBaseDuration += child.treeBaseDuration;
        child = child.sibling;
      }

      var isTimedOutSuspense = completedWork.tag === SuspenseComponent && completedWork.memoizedState !== null;

      if (isTimedOutSuspense) {
        // Don't count time spent in a timed out Suspense subtree as part of the base duration.
        var primaryChildFragment = completedWork.child;

        if (primaryChildFragment !== null) {
          treeBaseDuration -= primaryChildFragment.treeBaseDuration;
        }
      }

      completedWork.actualDuration = actualDuration;
      completedWork.treeBaseDuration = treeBaseDuration;
    } else {
      var _child = completedWork.child;

      while (_child !== null) {
        newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
        _child = _child.sibling;
      }
    }

    completedWork.childLanes = newChildLanes;
  }

  function commitRoot(root) {
    var renderPriorityLevel = getCurrentPriorityLevel();
    runWithPriority(ImmediatePriority$1, commitRootImpl.bind(null, root, renderPriorityLevel));
    return null;
  }

  function commitRootImpl(root, renderPriorityLevel) {
    do {
      // `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
      // means `flushPassiveEffects` will sometimes result in additional
      // passive effects. So we need to keep flushing in a loop until there are
      // no more pending effects.
      // TODO: Might be better if `flushPassiveEffects` did not automatically
      // flush synchronous work at the end, to avoid factoring hazards like this.
      flushPassiveEffects();
    } while (rootWithPendingPassiveEffects !== null);

    flushRenderPhaseStrictModeWarningsInDEV();

    if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
      {
        throw Error( "Should not already be working." );
      }
    }

    var finishedWork = root.finishedWork;
    var lanes = root.finishedLanes;

    if (finishedWork === null) {

      return null;
    }

    root.finishedWork = null;
    root.finishedLanes = NoLanes;

    if (!(finishedWork !== root.current)) {
      {
        throw Error( "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue." );
      }
    } // commitRoot never returns a continuation; it always finishes synchronously.
    // So we can clear these now to allow a new callback to be scheduled.


    root.callbackNode = null; // Update the first and last pending times on this root. The new first
    // pending time is whatever is left on the root fiber.

    var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
    markRootFinished(root, remainingLanes); // Clear already finished discrete updates in case that a later call of
    // `flushDiscreteUpdates` starts a useless render pass which may cancels
    // a scheduled timeout.

    if (rootsWithPendingDiscreteUpdates !== null) {
      if (!hasDiscreteLanes(remainingLanes) && rootsWithPendingDiscreteUpdates.has(root)) {
        rootsWithPendingDiscreteUpdates.delete(root);
      }
    }

    if (root === workInProgressRoot) {
      // We can reset these now that they are finished.
      workInProgressRoot = null;
      workInProgress = null;
      workInProgressRootRenderLanes = NoLanes;
    } // Get the list of effects.


    var firstEffect;

    if (finishedWork.flags > PerformedWork) {
      // A fiber's effect list consists only of its children, not itself. So if
      // the root has an effect, we need to add it to the end of the list. The
      // resulting list is the set that would belong to the root's parent, if it
      // had one; that is, all the effects in the tree including the root.
      if (finishedWork.lastEffect !== null) {
        finishedWork.lastEffect.nextEffect = finishedWork;
        firstEffect = finishedWork.firstEffect;
      } else {
        firstEffect = finishedWork;
      }
    } else {
      // There is no effect on the root.
      firstEffect = finishedWork.firstEffect;
    }

    if (firstEffect !== null) {

      var prevExecutionContext = executionContext;
      executionContext |= CommitContext;
      var prevInteractions = pushInteractions(root); // Reset this to null before calling lifecycles

      ReactCurrentOwner$2.current = null; // The commit phase is broken into several sub-phases. We do a separate pass
      // of the effect list for each phase: all mutation effects come before all
      // layout effects, and so on.
      // The first phase a "before mutation" phase. We use this phase to read the
      // state of the host tree right before we mutate it. This is where
      // getSnapshotBeforeUpdate is called.

      focusedInstanceHandle = prepareForCommit(root.containerInfo);
      shouldFireAfterActiveInstanceBlur = false;
      nextEffect = firstEffect;

      do {
        {
          invokeGuardedCallback(null, commitBeforeMutationEffects, null);

          if (hasCaughtError()) {
            if (!(nextEffect !== null)) {
              {
                throw Error( "Should be working on an effect." );
              }
            }

            var error = clearCaughtError();
            captureCommitPhaseError(nextEffect, error);
            nextEffect = nextEffect.nextEffect;
          }
        }
      } while (nextEffect !== null); // We no longer need to track the active instance fiber


      focusedInstanceHandle = null;

      {
        // Mark the current commit time to be shared by all Profilers in this
        // batch. This enables them to be grouped later.
        recordCommitTime();
      } // The next phase is the mutation phase, where we mutate the host tree.


      nextEffect = firstEffect;

      do {
        {
          invokeGuardedCallback(null, commitMutationEffects, null, root, renderPriorityLevel);

          if (hasCaughtError()) {
            if (!(nextEffect !== null)) {
              {
                throw Error( "Should be working on an effect." );
              }
            }

            var _error = clearCaughtError();

            captureCommitPhaseError(nextEffect, _error);
            nextEffect = nextEffect.nextEffect;
          }
        }
      } while (nextEffect !== null);

      if (shouldFireAfterActiveInstanceBlur) {
        afterActiveInstanceBlur();
      }

      resetAfterCommit(root.containerInfo); // The work-in-progress tree is now the current tree. This must come after
      // the mutation phase, so that the previous tree is still current during
      // componentWillUnmount, but before the layout phase, so that the finished
      // work is current during componentDidMount/Update.

      root.current = finishedWork; // The next phase is the layout phase, where we call effects that read
      // the host tree after it's been mutated. The idiomatic use case for this is
      // layout, but class component lifecycles also fire here for legacy reasons.

      nextEffect = firstEffect;

      do {
        {
          invokeGuardedCallback(null, commitLayoutEffects, null, root, lanes);

          if (hasCaughtError()) {
            if (!(nextEffect !== null)) {
              {
                throw Error( "Should be working on an effect." );
              }
            }

            var _error2 = clearCaughtError();

            captureCommitPhaseError(nextEffect, _error2);
            nextEffect = nextEffect.nextEffect;
          }
        }
      } while (nextEffect !== null);

      nextEffect = null; // Tell Scheduler to yield at the end of the frame, so the browser has an
      // opportunity to paint.

      requestPaint();

      {
        popInteractions(prevInteractions);
      }

      executionContext = prevExecutionContext;
    } else {
      // No effects.
      root.current = finishedWork; // Measure these anyway so the flamegraph explicitly shows that there were
      // no effects.
      // TODO: Maybe there's a better way to report this.

      {
        recordCommitTime();
      }
    }

    var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;

    if (rootDoesHavePassiveEffects) {
      // This commit has passive effects. Stash a reference to them. But don't
      // schedule a callback until after flushing layout work.
      rootDoesHavePassiveEffects = false;
      rootWithPendingPassiveEffects = root;
      pendingPassiveEffectsLanes = lanes;
      pendingPassiveEffectsRenderPriority = renderPriorityLevel;
    } else {
      // We are done with the effect chain at this point so let's clear the
      // nextEffect pointers to assist with GC. If we have passive effects, we'll
      // clear this in flushPassiveEffects.
      nextEffect = firstEffect;

      while (nextEffect !== null) {
        var nextNextEffect = nextEffect.nextEffect;
        nextEffect.nextEffect = null;

        if (nextEffect.flags & Deletion) {
          detachFiberAfterEffects(nextEffect);
        }

        nextEffect = nextNextEffect;
      }
    } // Read this again, since an effect might have updated it


    remainingLanes = root.pendingLanes; // Check if there's remaining work on this root

    if (remainingLanes !== NoLanes) {
      {
        if (spawnedWorkDuringRender !== null) {
          var expirationTimes = spawnedWorkDuringRender;
          spawnedWorkDuringRender = null;

          for (var i = 0; i < expirationTimes.length; i++) {
            scheduleInteractions(root, expirationTimes[i], root.memoizedInteractions);
          }
        }

        schedulePendingInteractions(root, remainingLanes);
      }
    } else {
      // If there's no remaining work, we can clear the set of already failed
      // error boundaries.
      legacyErrorBoundariesThatAlreadyFailed = null;
    }

    {
      if (!rootDidHavePassiveEffects) {
        // If there are no passive effects, then we can complete the pending interactions.
        // Otherwise, we'll wait until after the passive effects are flushed.
        // Wait to do this until after remaining work has been scheduled,
        // so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
        finishPendingInteractions(root, lanes);
      }
    }

    if (remainingLanes === SyncLane) {
      // Count the number of times the root synchronously re-renders without
      // finishing. If there are too many, it indicates an infinite update loop.
      if (root === rootWithNestedUpdates) {
        nestedUpdateCount++;
      } else {
        nestedUpdateCount = 0;
        rootWithNestedUpdates = root;
      }
    } else {
      nestedUpdateCount = 0;
    }

    onCommitRoot(finishedWork.stateNode, renderPriorityLevel);

    {
      onCommitRoot$1();
    } // Always call this before exiting `commitRoot`, to ensure that any
    // additional work on this root is scheduled.


    ensureRootIsScheduled(root, now$1());

    if (hasUncaughtError) {
      hasUncaughtError = false;
      var _error3 = firstUncaughtError;
      firstUncaughtError = null;
      throw _error3;
    }

    if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
      // a ReactDOM.render-ed root inside of batchedUpdates. The commit fired
      // synchronously, but layout updates should be deferred until the end
      // of the batch.


      return null;
    } // If layout work was scheduled, flush it now.


    flushSyncCallbackQueue();

    return null;
  }

  function commitBeforeMutationEffects() {
    while (nextEffect !== null) {
      var current = nextEffect.alternate;

      if (!shouldFireAfterActiveInstanceBlur && focusedInstanceHandle !== null) {
        if ((nextEffect.flags & Deletion) !== NoFlags) {
          if (doesFiberContain(nextEffect, focusedInstanceHandle)) {
            shouldFireAfterActiveInstanceBlur = true;
            beforeActiveInstanceBlur();
          }
        } else {
          // TODO: Move this out of the hot path using a dedicated effect tag.
          if (nextEffect.tag === SuspenseComponent && isSuspenseBoundaryBeingHidden(current, nextEffect) && doesFiberContain(nextEffect, focusedInstanceHandle)) {
            shouldFireAfterActiveInstanceBlur = true;
            beforeActiveInstanceBlur();
          }
        }
      }

      var flags = nextEffect.flags;

      if ((flags & Snapshot) !== NoFlags) {
        setCurrentFiber(nextEffect);
        commitBeforeMutationLifeCycles(current, nextEffect);
        resetCurrentFiber();
      }

      if ((flags & Passive) !== NoFlags) {
        // If there are passive effects, schedule a callback to flush at
        // the earliest opportunity.
        if (!rootDoesHavePassiveEffects) {
          rootDoesHavePassiveEffects = true;
          scheduleCallback(NormalPriority$1, function () {
            flushPassiveEffects();
            return null;
          });
        }
      }

      nextEffect = nextEffect.nextEffect;
    }
  }

  function commitMutationEffects(root, renderPriorityLevel) {
    // TODO: Should probably move the bulk of this function to commitWork.
    while (nextEffect !== null) {
      setCurrentFiber(nextEffect);
      var flags = nextEffect.flags;

      if (flags & ContentReset) {
        commitResetTextContent(nextEffect);
      }

      if (flags & Ref) {
        var current = nextEffect.alternate;

        if (current !== null) {
          commitDetachRef(current);
        }
      } // The following switch statement is only concerned about placement,
      // updates, and deletions. To avoid needing to add a case for every possible
      // bitmap value, we remove the secondary effects from the effect tag and
      // switch on that value.


      var primaryFlags = flags & (Placement | Update | Deletion | Hydrating);

      switch (primaryFlags) {
        case Placement:
          {
            commitPlacement(nextEffect); // Clear the "placement" from effect tag so that we know that this is
            // inserted, before any life-cycles like componentDidMount gets called.
            // TODO: findDOMNode doesn't rely on this any more but isMounted does
            // and isMounted is deprecated anyway so we should be able to kill this.

            nextEffect.flags &= ~Placement;
            break;
          }

        case PlacementAndUpdate:
          {
            // Placement
            commitPlacement(nextEffect); // Clear the "placement" from effect tag so that we know that this is
            // inserted, before any life-cycles like componentDidMount gets called.

            nextEffect.flags &= ~Placement; // Update

            var _current = nextEffect.alternate;
            commitWork(_current, nextEffect);
            break;
          }

        case Hydrating:
          {
            nextEffect.flags &= ~Hydrating;
            break;
          }

        case HydratingAndUpdate:
          {
            nextEffect.flags &= ~Hydrating; // Update

            var _current2 = nextEffect.alternate;
            commitWork(_current2, nextEffect);
            break;
          }

        case Update:
          {
            var _current3 = nextEffect.alternate;
            commitWork(_current3, nextEffect);
            break;
          }

        case Deletion:
          {
            commitDeletion(root, nextEffect);
            break;
          }
      }

      resetCurrentFiber();
      nextEffect = nextEffect.nextEffect;
    }
  }

  function commitLayoutEffects(root, committedLanes) {


    while (nextEffect !== null) {
      setCurrentFiber(nextEffect);
      var flags = nextEffect.flags;

      if (flags & (Update | Callback)) {
        var current = nextEffect.alternate;
        commitLifeCycles(root, current, nextEffect);
      }

      {
        if (flags & Ref) {
          commitAttachRef(nextEffect);
        }
      }

      resetCurrentFiber();
      nextEffect = nextEffect.nextEffect;
    }
  }

  function flushPassiveEffects() {
    // Returns whether passive effects were flushed.
    if (pendingPassiveEffectsRenderPriority !== NoPriority$1) {
      var priorityLevel = pendingPassiveEffectsRenderPriority > NormalPriority$1 ? NormalPriority$1 : pendingPassiveEffectsRenderPriority;
      pendingPassiveEffectsRenderPriority = NoPriority$1;

      {
        return runWithPriority(priorityLevel, flushPassiveEffectsImpl);
      }
    }

    return false;
  }
  function enqueuePendingPassiveHookEffectMount(fiber, effect) {
    pendingPassiveHookEffectsMount.push(effect, fiber);

    if (!rootDoesHavePassiveEffects) {
      rootDoesHavePassiveEffects = true;
      scheduleCallback(NormalPriority$1, function () {
        flushPassiveEffects();
        return null;
      });
    }
  }
  function enqueuePendingPassiveHookEffectUnmount(fiber, effect) {
    pendingPassiveHookEffectsUnmount.push(effect, fiber);

    {
      fiber.flags |= PassiveUnmountPendingDev;
      var alternate = fiber.alternate;

      if (alternate !== null) {
        alternate.flags |= PassiveUnmountPendingDev;
      }
    }

    if (!rootDoesHavePassiveEffects) {
      rootDoesHavePassiveEffects = true;
      scheduleCallback(NormalPriority$1, function () {
        flushPassiveEffects();
        return null;
      });
    }
  }

  function invokePassiveEffectCreate(effect) {
    var create = effect.create;
    effect.destroy = create();
  }

  function flushPassiveEffectsImpl() {
    if (rootWithPendingPassiveEffects === null) {
      return false;
    }

    var root = rootWithPendingPassiveEffects;
    var lanes = pendingPassiveEffectsLanes;
    rootWithPendingPassiveEffects = null;
    pendingPassiveEffectsLanes = NoLanes;

    if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
      {
        throw Error( "Cannot flush passive effects while already rendering." );
      }
    }

    {
      isFlushingPassiveEffects = true;
    }

    var prevExecutionContext = executionContext;
    executionContext |= CommitContext;
    var prevInteractions = pushInteractions(root); // It's important that ALL pending passive effect destroy functions are called
    // before ANY passive effect create functions are called.
    // Otherwise effects in sibling components might interfere with each other.
    // e.g. a destroy function in one component may unintentionally override a ref
    // value set by a create function in another component.
    // Layout effects have the same constraint.
    // First pass: Destroy stale passive effects.

    var unmountEffects = pendingPassiveHookEffectsUnmount;
    pendingPassiveHookEffectsUnmount = [];

    for (var i = 0; i < unmountEffects.length; i += 2) {
      var _effect = unmountEffects[i];
      var fiber = unmountEffects[i + 1];
      var destroy = _effect.destroy;
      _effect.destroy = undefined;

      {
        fiber.flags &= ~PassiveUnmountPendingDev;
        var alternate = fiber.alternate;

        if (alternate !== null) {
          alternate.flags &= ~PassiveUnmountPendingDev;
        }
      }

      if (typeof destroy === 'function') {
        {
          setCurrentFiber(fiber);

          {
            invokeGuardedCallback(null, destroy, null);
          }

          if (hasCaughtError()) {
            if (!(fiber !== null)) {
              {
                throw Error( "Should be working on an effect." );
              }
            }

            var error = clearCaughtError();
            captureCommitPhaseError(fiber, error);
          }

          resetCurrentFiber();
        }
      }
    } // Second pass: Create new passive effects.


    var mountEffects = pendingPassiveHookEffectsMount;
    pendingPassiveHookEffectsMount = [];

    for (var _i = 0; _i < mountEffects.length; _i += 2) {
      var _effect2 = mountEffects[_i];
      var _fiber = mountEffects[_i + 1];

      {
        setCurrentFiber(_fiber);

        {
          invokeGuardedCallback(null, invokePassiveEffectCreate, null, _effect2);
        }

        if (hasCaughtError()) {
          if (!(_fiber !== null)) {
            {
              throw Error( "Should be working on an effect." );
            }
          }

          var _error4 = clearCaughtError();

          captureCommitPhaseError(_fiber, _error4);
        }

        resetCurrentFiber();
      }
    } // Note: This currently assumes there are no passive effects on the root fiber
    // because the root is not part of its own effect list.
    // This could change in the future.


    var effect = root.current.firstEffect;

    while (effect !== null) {
      var nextNextEffect = effect.nextEffect; // Remove nextEffect pointer to assist GC

      effect.nextEffect = null;

      if (effect.flags & Deletion) {
        detachFiberAfterEffects(effect);
      }

      effect = nextNextEffect;
    }

    {
      popInteractions(prevInteractions);
      finishPendingInteractions(root, lanes);
    }

    {
      isFlushingPassiveEffects = false;
    }

    executionContext = prevExecutionContext;
    flushSyncCallbackQueue(); // If additional passive effects were scheduled, increment a counter. If this
    // exceeds the limit, we'll fire a warning.

    nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
    return true;
  }

  function isAlreadyFailedLegacyErrorBoundary(instance) {
    return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
  }
  function markLegacyErrorBoundaryAsFailed(instance) {
    if (legacyErrorBoundariesThatAlreadyFailed === null) {
      legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
    } else {
      legacyErrorBoundariesThatAlreadyFailed.add(instance);
    }
  }

  function prepareToThrowUncaughtError(error) {
    if (!hasUncaughtError) {
      hasUncaughtError = true;
      firstUncaughtError = error;
    }
  }

  var onUncaughtError = prepareToThrowUncaughtError;

  function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
    var errorInfo = createCapturedValue(error, sourceFiber);
    var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
    enqueueUpdate(rootFiber, update);
    var eventTime = requestEventTime();
    var root = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);

    if (root !== null) {
      markRootUpdated(root, SyncLane, eventTime);
      ensureRootIsScheduled(root, eventTime);
      schedulePendingInteractions(root, SyncLane);
    }
  }

  function captureCommitPhaseError(sourceFiber, error) {
    if (sourceFiber.tag === HostRoot) {
      // Error was thrown at the root. There is no parent, so the root
      // itself should capture it.
      captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
      return;
    }

    var fiber = sourceFiber.return;

    while (fiber !== null) {
      if (fiber.tag === HostRoot) {
        captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error);
        return;
      } else if (fiber.tag === ClassComponent) {
        var ctor = fiber.type;
        var instance = fiber.stateNode;

        if (typeof ctor.getDerivedStateFromError === 'function' || typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
          var errorInfo = createCapturedValue(error, sourceFiber);
          var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
          enqueueUpdate(fiber, update);
          var eventTime = requestEventTime();
          var root = markUpdateLaneFromFiberToRoot(fiber, SyncLane);

          if (root !== null) {
            markRootUpdated(root, SyncLane, eventTime);
            ensureRootIsScheduled(root, eventTime);
            schedulePendingInteractions(root, SyncLane);
          } else {
            // This component has already been unmounted.
            // We can't schedule any follow up work for the root because the fiber is already unmounted,
            // but we can still call the log-only boundary so the error isn't swallowed.
            //
            // TODO This is only a temporary bandaid for the old reconciler fork.
            // We can delete this special case once the new fork is merged.
            if (typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
              try {
                instance.componentDidCatch(error, errorInfo);
              } catch (errorToIgnore) {// TODO Ignore this error? Rethrow it?
                // This is kind of an edge case.
              }
            }
          }

          return;
        }
      }

      fiber = fiber.return;
    }
  }
  function pingSuspendedRoot(root, wakeable, pingedLanes) {
    var pingCache = root.pingCache;

    if (pingCache !== null) {
      // The wakeable resolved, so we no longer need to memoize, because it will
      // never be thrown again.
      pingCache.delete(wakeable);
    }

    var eventTime = requestEventTime();
    markRootPinged(root, pingedLanes);

    if (workInProgressRoot === root && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) {
      // Received a ping at the same priority level at which we're currently
      // rendering. We might want to restart this render. This should mirror
      // the logic of whether or not a root suspends once it completes.
      // TODO: If we're rendering sync either due to Sync, Batched or expired,
      // we should probably never restart.
      // If we're suspended with delay, or if it's a retry, we'll always suspend
      // so we can always restart.
      if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && includesOnlyRetries(workInProgressRootRenderLanes) && now$1() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
        // Restart from the root.
        prepareFreshStack(root, NoLanes);
      } else {
        // Even though we can't restart right now, we might get an
        // opportunity later. So we mark this render as having a ping.
        workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
      }
    }

    ensureRootIsScheduled(root, eventTime);
    schedulePendingInteractions(root, pingedLanes);
  }

  function retryTimedOutBoundary(boundaryFiber, retryLane) {
    // The boundary fiber (a Suspense component or SuspenseList component)
    // previously was rendered in its fallback state. One of the promises that
    // suspended it has resolved, which means at least part of the tree was
    // likely unblocked. Try rendering again, at a new expiration time.
    if (retryLane === NoLane) {
      retryLane = requestRetryLane(boundaryFiber);
    } // TODO: Special case idle priority?


    var eventTime = requestEventTime();
    var root = markUpdateLaneFromFiberToRoot(boundaryFiber, retryLane);

    if (root !== null) {
      markRootUpdated(root, retryLane, eventTime);
      ensureRootIsScheduled(root, eventTime);
      schedulePendingInteractions(root, retryLane);
    }
  }
  function resolveRetryWakeable(boundaryFiber, wakeable) {
    var retryLane = NoLane; // Default

    var retryCache;

    {
      retryCache = boundaryFiber.stateNode;
    }

    if (retryCache !== null) {
      // The wakeable resolved, so we no longer need to memoize, because it will
      // never be thrown again.
      retryCache.delete(wakeable);
    }

    retryTimedOutBoundary(boundaryFiber, retryLane);
  } // Computes the next Just Noticeable Difference (JND) boundary.
  // The theory is that a person can't tell the difference between small differences in time.
  // Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
  // difference in the experience. However, waiting for longer might mean that we can avoid
  // showing an intermediate loading state. The longer we have already waited, the harder it
  // is to tell small differences in time. Therefore, the longer we've already waited,
  // the longer we can wait additionally. At some point we have to give up though.
  // We pick a train model where the next boundary commits at a consistent schedule.
  // These particular numbers are vague estimates. We expect to adjust them based on research.

  function jnd(timeElapsed) {
    return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3000 ? 3000 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
  }

  function checkForNestedUpdates() {
    if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
      nestedUpdateCount = 0;
      rootWithNestedUpdates = null;

      {
        {
          throw Error( "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops." );
        }
      }
    }

    {
      if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
        nestedPassiveUpdateCount = 0;

        error('Maximum update depth exceeded. This can happen when a component ' + "calls setState inside useEffect, but useEffect either doesn't " + 'have a dependency array, or one of the dependencies changes on ' + 'every render.');
      }
    }
  }

  function flushRenderPhaseStrictModeWarningsInDEV() {
    {
      ReactStrictModeWarnings.flushLegacyContextWarning();

      {
        ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
      }
    }
  }

  var didWarnStateUpdateForNotYetMountedComponent = null;

  function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
    {
      if ((executionContext & RenderContext) !== NoContext) {
        // We let the other warning about render phase updates deal with this one.
        return;
      }

      if (!(fiber.mode & (BlockingMode | ConcurrentMode))) {
        return;
      }

      var tag = fiber.tag;

      if (tag !== IndeterminateComponent && tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
        // Only warn for user-defined components, not internal ones like Suspense.
        return;
      } // We show the whole stack but dedupe on the top component's name because
      // the problematic code almost always lies inside that component.


      var componentName = getComponentName(fiber.type) || 'ReactComponent';

      if (didWarnStateUpdateForNotYetMountedComponent !== null) {
        if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) {
          return;
        }

        didWarnStateUpdateForNotYetMountedComponent.add(componentName);
      } else {
        didWarnStateUpdateForNotYetMountedComponent = new Set([componentName]);
      }

      var previousFiber = current;

      try {
        setCurrentFiber(fiber);

        error("Can't perform a React state update on a component that hasn't mounted yet. " + 'This indicates that you have a side-effect in your render function that ' + 'asynchronously later calls tries to update the component. Move this work to ' + 'useEffect instead.');
      } finally {
        if (previousFiber) {
          setCurrentFiber(fiber);
        } else {
          resetCurrentFiber();
        }
      }
    }
  }

  var didWarnStateUpdateForUnmountedComponent = null;

  function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
    {
      var tag = fiber.tag;

      if (tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
        // Only warn for user-defined components, not internal ones like Suspense.
        return;
      } // If there are pending passive effects unmounts for this Fiber,
      // we can assume that they would have prevented this update.


      if ((fiber.flags & PassiveUnmountPendingDev) !== NoFlags) {
        return;
      } // We show the whole stack but dedupe on the top component's name because
      // the problematic code almost always lies inside that component.


      var componentName = getComponentName(fiber.type) || 'ReactComponent';

      if (didWarnStateUpdateForUnmountedComponent !== null) {
        if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
          return;
        }

        didWarnStateUpdateForUnmountedComponent.add(componentName);
      } else {
        didWarnStateUpdateForUnmountedComponent = new Set([componentName]);
      }

      if (isFlushingPassiveEffects) ; else {
        var previousFiber = current;

        try {
          setCurrentFiber(fiber);

          error("Can't perform a React state update on an unmounted component. This " + 'is a no-op, but it indicates a memory leak in your application. To ' + 'fix, cancel all subscriptions and asynchronous tasks in %s.', tag === ClassComponent ? 'the componentWillUnmount method' : 'a useEffect cleanup function');
        } finally {
          if (previousFiber) {
            setCurrentFiber(fiber);
          } else {
            resetCurrentFiber();
          }
        }
      }
    }
  }

  var beginWork$1;

  {
    var dummyFiber = null;

    beginWork$1 = function (current, unitOfWork, lanes) {
      // If a component throws an error, we replay it again in a synchronously
      // dispatched event, so that the debugger will treat it as an uncaught
      // error See ReactErrorUtils for more information.
      // Before entering the begin phase, copy the work-in-progress onto a dummy
      // fiber. If beginWork throws, we'll use this to reset the state.
      var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);

      try {
        return beginWork(current, unitOfWork, lanes);
      } catch (originalError) {
        if (originalError !== null && typeof originalError === 'object' && typeof originalError.then === 'function') {
          // Don't replay promises. Treat everything else like an error.
          throw originalError;
        } // Keep this code in sync with handleError; any changes here must have
        // corresponding changes there.


        resetContextDependencies();
        resetHooksAfterThrow(); // Don't reset current debug fiber, since we're about to work on the
        // same fiber again.
        // Unwind the failed stack frame

        unwindInterruptedWork(unitOfWork); // Restore the original properties of the fiber.

        assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);

        if ( unitOfWork.mode & ProfileMode) {
          // Reset the profiler timer.
          startProfilerTimer(unitOfWork);
        } // Run beginWork again.


        invokeGuardedCallback(null, beginWork, null, current, unitOfWork, lanes);

        if (hasCaughtError()) {
          var replayError = clearCaughtError(); // `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
          // Rethrow this error instead of the original one.

          throw replayError;
        } else {
          // This branch is reachable if the render phase is impure.
          throw originalError;
        }
      }
    };
  }

  var didWarnAboutUpdateInRender = false;
  var didWarnAboutUpdateInRenderForAnotherComponent;

  {
    didWarnAboutUpdateInRenderForAnotherComponent = new Set();
  }

  function warnAboutRenderPhaseUpdatesInDEV(fiber) {
    {
      if (isRendering && (executionContext & RenderContext) !== NoContext && !getIsUpdatingOpaqueValueInRenderPhaseInDEV()) {
        switch (fiber.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
            {
              var renderingComponentName = workInProgress && getComponentName(workInProgress.type) || 'Unknown'; // Dedupe by the rendering component because it's the one that needs to be fixed.

              var dedupeKey = renderingComponentName;

              if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                var setStateComponentName = getComponentName(fiber.type) || 'Unknown';

                error('Cannot update a component (`%s`) while rendering a ' + 'different component (`%s`). To locate the bad setState() call inside `%s`, ' + 'follow the stack trace as described in https://reactjs.org/link/setstate-in-render', setStateComponentName, renderingComponentName, renderingComponentName);
              }

              break;
            }

          case ClassComponent:
            {
              if (!didWarnAboutUpdateInRender) {
                error('Cannot update during an existing state transition (such as ' + 'within `render`). Render methods should be a pure ' + 'function of props and state.');

                didWarnAboutUpdateInRender = true;
              }

              break;
            }
        }
      }
    }
  } // a 'shared' variable that changes when act() opens/closes in tests.


  var IsThisRendererActing = {
    current: false
  };
  function warnIfNotScopedWithMatchingAct(fiber) {
    {
      if (warnsIfNotActing === true && IsSomeRendererActing.current === true && IsThisRendererActing.current !== true) {
        var previousFiber = current;

        try {
          setCurrentFiber(fiber);

          error("It looks like you're using the wrong act() around your test interactions.\n" + 'Be sure to use the matching version of act() corresponding to your renderer:\n\n' + '// for react-dom:\n' + // Break up imports to avoid accidentally parsing them as dependencies.
          'import {act} fr' + "om 'react-dom/test-utils';\n" + '// ...\n' + 'act(() => ...);\n\n' + '// for react-test-renderer:\n' + // Break up imports to avoid accidentally parsing them as dependencies.
          'import TestRenderer fr' + "om react-test-renderer';\n" + 'const {act} = TestRenderer;\n' + '// ...\n' + 'act(() => ...);');
        } finally {
          if (previousFiber) {
            setCurrentFiber(fiber);
          } else {
            resetCurrentFiber();
          }
        }
      }
    }
  }
  function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
    {
      if (warnsIfNotActing === true && (fiber.mode & StrictMode) !== NoMode && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
        error('An update to %s ran an effect, but was not wrapped in act(...).\n\n' + 'When testing, code that causes React state updates should be ' + 'wrapped into act(...):\n\n' + 'act(() => {\n' + '  /* fire events that update state */\n' + '});\n' + '/* assert on the output */\n\n' + "This ensures that you're testing the behavior the user would see " + 'in the browser.' + ' Learn more at https://reactjs.org/link/wrap-tests-with-act', getComponentName(fiber.type));
      }
    }
  }

  function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
    {
      if (warnsIfNotActing === true && executionContext === NoContext && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
        var previousFiber = current;

        try {
          setCurrentFiber(fiber);

          error('An update to %s inside a test was not wrapped in act(...).\n\n' + 'When testing, code that causes React state updates should be ' + 'wrapped into act(...):\n\n' + 'act(() => {\n' + '  /* fire events that update state */\n' + '});\n' + '/* assert on the output */\n\n' + "This ensures that you're testing the behavior the user would see " + 'in the browser.' + ' Learn more at https://reactjs.org/link/wrap-tests-with-act', getComponentName(fiber.type));
        } finally {
          if (previousFiber) {
            setCurrentFiber(fiber);
          } else {
            resetCurrentFiber();
          }
        }
      }
    }
  }

  var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV; // In tests, we want to enforce a mocked scheduler.

  var didWarnAboutUnmockedScheduler = false; // TODO Before we release concurrent mode, revisit this and decide whether a mocked
  // scheduler is the actual recommendation. The alternative could be a testing build,
  // a new lib, or whatever; we dunno just yet. This message is for early adopters
  // to get their tests right.

  function warnIfUnmockedScheduler(fiber) {
    {
      if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === undefined) {
        if (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) {
          didWarnAboutUnmockedScheduler = true;

          error('In Concurrent or Sync modes, the "scheduler" module needs to be mocked ' + 'to guarantee consistent behaviour across tests and browsers. ' + 'For example, with jest: \n' + // Break up requires to avoid accidentally parsing them as dependencies.
          "jest.mock('scheduler', () => require" + "('scheduler/unstable_mock'));\n\n" + 'For more info, visit https://reactjs.org/link/mock-scheduler');
        }
      }
    }
  }

  function computeThreadID(root, lane) {
    // Interaction threads are unique per root and expiration time.
    // NOTE: Intentionally unsound cast. All that matters is that it's a number
    // and it represents a batch of work. Could make a helper function instead,
    // but meh this is fine for now.
    return lane * 1000 + root.interactionThreadID;
  }

  function markSpawnedWork(lane) {

    if (spawnedWorkDuringRender === null) {
      spawnedWorkDuringRender = [lane];
    } else {
      spawnedWorkDuringRender.push(lane);
    }
  }

  function scheduleInteractions(root, lane, interactions) {

    if (interactions.size > 0) {
      var pendingInteractionMap = root.pendingInteractionMap;
      var pendingInteractions = pendingInteractionMap.get(lane);

      if (pendingInteractions != null) {
        interactions.forEach(function (interaction) {
          if (!pendingInteractions.has(interaction)) {
            // Update the pending async work count for previously unscheduled interaction.
            interaction.__count++;
          }

          pendingInteractions.add(interaction);
        });
      } else {
        pendingInteractionMap.set(lane, new Set(interactions)); // Update the pending async work count for the current interactions.

        interactions.forEach(function (interaction) {
          interaction.__count++;
        });
      }

      var subscriber = tracing$1.__subscriberRef.current;

      if (subscriber !== null) {
        var threadID = computeThreadID(root, lane);
        subscriber.onWorkScheduled(interactions, threadID);
      }
    }
  }

  function schedulePendingInteractions(root, lane) {

    scheduleInteractions(root, lane, tracing$1.__interactionsRef.current);
  }

  function startWorkOnPendingInteractions(root, lanes) {
    // we can accurately attribute time spent working on it, And so that cascading
    // work triggered during the render phase will be associated with it.


    var interactions = new Set();
    root.pendingInteractionMap.forEach(function (scheduledInteractions, scheduledLane) {
      if (includesSomeLane(lanes, scheduledLane)) {
        scheduledInteractions.forEach(function (interaction) {
          return interactions.add(interaction);
        });
      }
    }); // Store the current set of interactions on the FiberRoot for a few reasons:
    // We can re-use it in hot functions like performConcurrentWorkOnRoot()
    // without having to recalculate it. We will also use it in commitWork() to
    // pass to any Profiler onRender() hooks. This also provides DevTools with a
    // way to access it when the onCommitRoot() hook is called.

    root.memoizedInteractions = interactions;

    if (interactions.size > 0) {
      var subscriber = tracing$1.__subscriberRef.current;

      if (subscriber !== null) {
        var threadID = computeThreadID(root, lanes);

        try {
          subscriber.onWorkStarted(interactions, threadID);
        } catch (error) {
          // If the subscriber throws, rethrow it in a separate task
          scheduleCallback(ImmediatePriority$1, function () {
            throw error;
          });
        }
      }
    }
  }

  function finishPendingInteractions(root, committedLanes) {

    var remainingLanesAfterCommit = root.pendingLanes;
    var subscriber;

    try {
      subscriber = tracing$1.__subscriberRef.current;

      if (subscriber !== null && root.memoizedInteractions.size > 0) {
        // FIXME: More than one lane can finish in a single commit.
        var threadID = computeThreadID(root, committedLanes);
        subscriber.onWorkStopped(root.memoizedInteractions, threadID);
      }
    } catch (error) {
      // If the subscriber throws, rethrow it in a separate task
      scheduleCallback(ImmediatePriority$1, function () {
        throw error;
      });
    } finally {
      // Clear completed interactions from the pending Map.
      // Unless the render was suspended or cascading work was scheduled,
      // In which case– leave pending interactions until the subsequent render.
      var pendingInteractionMap = root.pendingInteractionMap;
      pendingInteractionMap.forEach(function (scheduledInteractions, lane) {
        // Only decrement the pending interaction count if we're done.
        // If there's still work at the current priority,
        // That indicates that we are waiting for suspense data.
        if (!includesSomeLane(remainingLanesAfterCommit, lane)) {
          pendingInteractionMap.delete(lane);
          scheduledInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber !== null && interaction.__count === 0) {
              try {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              } catch (error) {
                // If the subscriber throws, rethrow it in a separate task
                scheduleCallback(ImmediatePriority$1, function () {
                  throw error;
                });
              }
            }
          });
        }
      });
    }
  } // `act` testing API

  function shouldForceFlushFallbacksInDEV() {
    // Never force flush in production. This function should get stripped out.
    return  actingUpdatesScopeDepth > 0;
  }

  var flushMockScheduler = Scheduler.unstable_flushAllWithoutAsserting;
  var isSchedulerMocked = typeof flushMockScheduler === 'function'; // Returns whether additional work was scheduled. Caller should keep flushing
  // until there's no work left.

  function flushActWork() {
    if (flushMockScheduler !== undefined) {

      try {
        return flushMockScheduler();
      } finally {
      }
    } else {

      try {
        var didFlushWork = false;

        while (flushPassiveEffects()) {
          didFlushWork = true;
        }

        return didFlushWork;
      } finally {
      }
    }
  }

  function flushWorkAndMicroTasks(onDone) {
    try {
      flushActWork();
      enqueueTask(function () {
        if (flushActWork()) {
          flushWorkAndMicroTasks(onDone);
        } else {
          onDone();
        }
      });
    } catch (err) {
      onDone(err);
    }
  } // we track the 'depth' of the act() calls with this counter,
  // so we can tell if any async act() calls try to run in parallel.


  var actingUpdatesScopeDepth = 0;
  function act(callback) {

    var previousActingUpdatesScopeDepth = actingUpdatesScopeDepth;
    actingUpdatesScopeDepth++;
    var previousIsSomeRendererActing = IsSomeRendererActing.current;
    var previousIsThisRendererActing = IsThisRendererActing.current;
    IsSomeRendererActing.current = true;
    IsThisRendererActing.current = true;

    function onDone() {
      actingUpdatesScopeDepth--;
      IsSomeRendererActing.current = previousIsSomeRendererActing;
      IsThisRendererActing.current = previousIsThisRendererActing;

      {
        if (actingUpdatesScopeDepth > previousActingUpdatesScopeDepth) {
          // if it's _less than_ previousActingUpdatesScopeDepth, then we can assume the 'other' one has warned
          error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
        }
      }
    }

    var result;

    try {
      result = batchedUpdates(callback);
    } catch (error) {
      // on sync errors, we still want to 'cleanup' and decrement actingUpdatesScopeDepth
      onDone();
      throw error;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      // setup a boolean that gets set to true only
      // once this act() call is await-ed
      var called = false;

      {
        if (typeof Promise !== 'undefined') {
          //eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (called === false) {
              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, interleaving multiple act ' + 'calls and mixing their scopes. You should - await act(async () => ...);');
            }
          });
        }
      } // in the async case, the returned thenable runs the callback, flushes
      // effects and  microtasks in a loop until flushPassiveEffects() === false,
      // and cleans up


      return {
        then: function (resolve, reject) {
          called = true;
          result.then(function () {
            if (actingUpdatesScopeDepth > 1 || isSchedulerMocked === true && previousIsSomeRendererActing === true) {
              onDone();
              resolve();
              return;
            } // we're about to exit the act() scope,
            // now's the time to flush tasks/effects


            flushWorkAndMicroTasks(function (err) {
              onDone();

              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          }, function (err) {
            onDone();
            reject(err);
          });
        }
      };
    } else {
      {
        if (result !== undefined) {
          error('The callback passed to act(...) function ' + 'must return undefined, or a Promise. You returned %s', result);
        }
      } // flush effects until none remain, and cleanup


      try {
        if (actingUpdatesScopeDepth === 1 && (isSchedulerMocked === false || previousIsSomeRendererActing === false)) {
          // we're about to exit the act() scope,
          // now's the time to flush effects
          flushActWork();
        }

        onDone();
      } catch (err) {
        onDone();
        throw err;
      } // in the sync case, the returned thenable only warns *if* await-ed


      return {
        then: function (resolve) {
          {
            error('Do not await the result of calling act(...) with sync logic, it is not a Promise.');
          }

          resolve();
        }
      };
    }
  }

  function detachFiberAfterEffects(fiber) {
    fiber.sibling = null;
    fiber.stateNode = null;
  }

  var resolveFamily = null; // $FlowFixMe Flow gets confused by a WeakSet feature check below.

  var failedBoundaries = null;
  var setRefreshHandler = function (handler) {
    {
      resolveFamily = handler;
    }
  };
  function resolveFunctionForHotReloading(type) {
    {
      if (resolveFamily === null) {
        // Hot reloading is disabled.
        return type;
      }

      var family = resolveFamily(type);

      if (family === undefined) {
        return type;
      } // Use the latest known implementation.


      return family.current;
    }
  }
  function resolveClassForHotReloading(type) {
    // No implementation differences.
    return resolveFunctionForHotReloading(type);
  }
  function resolveForwardRefForHotReloading(type) {
    {
      if (resolveFamily === null) {
        // Hot reloading is disabled.
        return type;
      }

      var family = resolveFamily(type);

      if (family === undefined) {
        // Check if we're dealing with a real forwardRef. Don't want to crash early.
        if (type !== null && type !== undefined && typeof type.render === 'function') {
          // ForwardRef is special because its resolved .type is an object,
          // but it's possible that we only have its inner render function in the map.
          // If that inner render function is different, we'll build a new forwardRef type.
          var currentRender = resolveFunctionForHotReloading(type.render);

          if (type.render !== currentRender) {
            var syntheticType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render: currentRender
            };

            if (type.displayName !== undefined) {
              syntheticType.displayName = type.displayName;
            }

            return syntheticType;
          }
        }

        return type;
      } // Use the latest known implementation.


      return family.current;
    }
  }
  function isCompatibleFamilyForHotReloading(fiber, element) {
    {
      if (resolveFamily === null) {
        // Hot reloading is disabled.
        return false;
      }

      var prevType = fiber.elementType;
      var nextType = element.type; // If we got here, we know types aren't === equal.

      var needsCompareFamilies = false;
      var $$typeofNextType = typeof nextType === 'object' && nextType !== null ? nextType.$$typeof : null;

      switch (fiber.tag) {
        case ClassComponent:
          {
            if (typeof nextType === 'function') {
              needsCompareFamilies = true;
            }

            break;
          }

        case FunctionComponent:
          {
            if (typeof nextType === 'function') {
              needsCompareFamilies = true;
            } else if ($$typeofNextType === REACT_LAZY_TYPE) {
              // We don't know the inner type yet.
              // We're going to assume that the lazy inner type is stable,
              // and so it is sufficient to avoid reconciling it away.
              // We're not going to unwrap or actually use the new lazy type.
              needsCompareFamilies = true;
            }

            break;
          }

        case ForwardRef:
          {
            if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
              needsCompareFamilies = true;
            } else if ($$typeofNextType === REACT_LAZY_TYPE) {
              needsCompareFamilies = true;
            }

            break;
          }

        case MemoComponent:
        case SimpleMemoComponent:
          {
            if ($$typeofNextType === REACT_MEMO_TYPE) {
              // TODO: if it was but can no longer be simple,
              // we shouldn't set this.
              needsCompareFamilies = true;
            } else if ($$typeofNextType === REACT_LAZY_TYPE) {
              needsCompareFamilies = true;
            }

            break;
          }

        default:
          return false;
      } // Check if both types have a family and it's the same one.


      if (needsCompareFamilies) {
        // Note: memo() and forwardRef() we'll compare outer rather than inner type.
        // This means both of them need to be registered to preserve state.
        // If we unwrapped and compared the inner types for wrappers instead,
        // then we would risk falsely saying two separate memo(Foo)
        // calls are equivalent because they wrap the same Foo function.
        var prevFamily = resolveFamily(prevType);

        if (prevFamily !== undefined && prevFamily === resolveFamily(nextType)) {
          return true;
        }
      }

      return false;
    }
  }
  function markFailedErrorBoundaryForHotReloading(fiber) {
    {
      if (resolveFamily === null) {
        // Hot reloading is disabled.
        return;
      }

      if (typeof WeakSet !== 'function') {
        return;
      }

      if (failedBoundaries === null) {
        failedBoundaries = new WeakSet();
      }

      failedBoundaries.add(fiber);
    }
  }
  var scheduleRefresh = function (root, update) {
    {
      if (resolveFamily === null) {
        // Hot reloading is disabled.
        return;
      }

      var staleFamilies = update.staleFamilies,
          updatedFamilies = update.updatedFamilies;
      flushPassiveEffects();
      flushSync(function () {
        scheduleFibersWithFamiliesRecursively(root.current, updatedFamilies, staleFamilies);
      });
    }
  };
  var scheduleRoot = function (root, element) {
    {
      if (root.context !== emptyContextObject) {
        // Super edge case: root has a legacy _renderSubtree context
        // but we don't know the parentComponent so we can't pass it.
        // Just ignore. We'll delete this with _renderSubtree code path later.
        return;
      }

      flushPassiveEffects();
      flushSync(function () {
        updateContainer(element, root, null, null);
      });
    }
  };

  function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
    {
      var alternate = fiber.alternate,
          child = fiber.child,
          sibling = fiber.sibling,
          tag = fiber.tag,
          type = fiber.type;
      var candidateType = null;

      switch (tag) {
        case FunctionComponent:
        case SimpleMemoComponent:
        case ClassComponent:
          candidateType = type;
          break;

        case ForwardRef:
          candidateType = type.render;
          break;
      }

      if (resolveFamily === null) {
        throw new Error('Expected resolveFamily to be set during hot reload.');
      }

      var needsRender = false;
      var needsRemount = false;

      if (candidateType !== null) {
        var family = resolveFamily(candidateType);

        if (family !== undefined) {
          if (staleFamilies.has(family)) {
            needsRemount = true;
          } else if (updatedFamilies.has(family)) {
            if (tag === ClassComponent) {
              needsRemount = true;
            } else {
              needsRender = true;
            }
          }
        }
      }

      if (failedBoundaries !== null) {
        if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
          needsRemount = true;
        }
      }

      if (needsRemount) {
        fiber._debugNeedsRemount = true;
      }

      if (needsRemount || needsRender) {
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      }

      if (child !== null && !needsRemount) {
        scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
      }

      if (sibling !== null) {
        scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
      }
    }
  }

  var findHostInstancesForRefresh = function (root, families) {
    {
      var hostInstances = new Set();
      var types = new Set(families.map(function (family) {
        return family.current;
      }));
      findHostInstancesForMatchingFibersRecursively(root.current, types, hostInstances);
      return hostInstances;
    }
  };

  function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
    {
      var child = fiber.child,
          sibling = fiber.sibling,
          tag = fiber.tag,
          type = fiber.type;
      var candidateType = null;

      switch (tag) {
        case FunctionComponent:
        case SimpleMemoComponent:
        case ClassComponent:
          candidateType = type;
          break;

        case ForwardRef:
          candidateType = type.render;
          break;
      }

      var didMatch = false;

      if (candidateType !== null) {
        if (types.has(candidateType)) {
          didMatch = true;
        }
      }

      if (didMatch) {
        // We have a match. This only drills down to the closest host components.
        // There's no need to search deeper because for the purpose of giving
        // visual feedback, "flashing" outermost parent rectangles is sufficient.
        findHostInstancesForFiberShallowly(fiber, hostInstances);
      } else {
        // If there's no match, maybe there will be one further down in the child tree.
        if (child !== null) {
          findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
        }
      }

      if (sibling !== null) {
        findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
      }
    }
  }

  function findHostInstancesForFiberShallowly(fiber, hostInstances) {
    {
      var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);

      if (foundHostInstances) {
        return;
      } // If we didn't find any host children, fallback to closest host parent.


      var node = fiber;

      while (true) {
        switch (node.tag) {
          case HostComponent:
            hostInstances.add(node.stateNode);
            return;

          case HostPortal:
            hostInstances.add(node.stateNode.containerInfo);
            return;

          case HostRoot:
            hostInstances.add(node.stateNode.containerInfo);
            return;
        }

        if (node.return === null) {
          throw new Error('Expected to reach root first.');
        }

        node = node.return;
      }
    }
  }

  function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
    {
      var node = fiber;
      var foundHostInstances = false;

      while (true) {
        if (node.tag === HostComponent) {
          // We got a match.
          foundHostInstances = true;
          hostInstances.add(node.stateNode); // There may still be more, so keep searching.
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === fiber) {
          return foundHostInstances;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === fiber) {
            return foundHostInstances;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    }

    return false;
  }

  var hasBadMapPolyfill;

  {
    hasBadMapPolyfill = false;

    try {
      var nonExtensibleObject = Object.preventExtensions({});
      /* eslint-disable no-new */

      new Map([[nonExtensibleObject, null]]);
      new Set([nonExtensibleObject]);
      /* eslint-enable no-new */
    } catch (e) {
      // TODO: Consider warning about bad polyfills
      hasBadMapPolyfill = true;
    }
  }

  var debugCounter = 1;

  function FiberNode(tag, pendingProps, key, mode) {
    // Instance
    this.tag = tag;
    this.key = key;
    this.elementType = null;
    this.type = null;
    this.stateNode = null; // Fiber

    this.return = null;
    this.child = null;
    this.sibling = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = pendingProps;
    this.memoizedProps = null;
    this.updateQueue = null;
    this.memoizedState = null;
    this.dependencies = null;
    this.mode = mode; // Effects

    this.flags = NoFlags;
    this.nextEffect = null;
    this.firstEffect = null;
    this.lastEffect = null;
    this.lanes = NoLanes;
    this.childLanes = NoLanes;
    this.alternate = null;

    {
      // Note: The following is done to avoid a v8 performance cliff.
      //
      // Initializing the fields below to smis and later updating them with
      // double values will cause Fibers to end up having separate shapes.
      // This behavior/bug has something to do with Object.preventExtension().
      // Fortunately this only impacts DEV builds.
      // Unfortunately it makes React unusably slow for some applications.
      // To work around this, initialize the fields below with doubles.
      //
      // Learn more about this here:
      // https://github.com/facebook/react/issues/14365
      // https://bugs.chromium.org/p/v8/issues/detail?id=8538
      this.actualDuration = Number.NaN;
      this.actualStartTime = Number.NaN;
      this.selfBaseDuration = Number.NaN;
      this.treeBaseDuration = Number.NaN; // It's okay to replace the initial doubles with smis after initialization.
      // This won't trigger the performance cliff mentioned above,
      // and it simplifies other profiler code (including DevTools).

      this.actualDuration = 0;
      this.actualStartTime = -1;
      this.selfBaseDuration = 0;
      this.treeBaseDuration = 0;
    }

    {
      // This isn't directly used but is handy for debugging internals:
      this._debugID = debugCounter++;
      this._debugSource = null;
      this._debugOwner = null;
      this._debugNeedsRemount = false;
      this._debugHookTypes = null;

      if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
        Object.preventExtensions(this);
      }
    }
  } // This is a constructor function, rather than a POJO constructor, still
  // please ensure we do the following:
  // 1) Nobody should add any instance methods on this. Instance methods can be
  //    more difficult to predict when they get optimized and they are almost
  //    never inlined properly in static compilers.
  // 2) Nobody should rely on `instanceof Fiber` for type testing. We should
  //    always know when it is a fiber.
  // 3) We might want to experiment with using numeric keys since they are easier
  //    to optimize in a non-JIT environment.
  // 4) We can easily go from a constructor to a createFiber object literal if that
  //    is faster.
  // 5) It should be easy to port this to a C struct and keep a C implementation
  //    compatible.


  var createFiber = function (tag, pendingProps, key, mode) {
    // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
    return new FiberNode(tag, pendingProps, key, mode);
  };

  function shouldConstruct$1(Component) {
    var prototype = Component.prototype;
    return !!(prototype && prototype.isReactComponent);
  }

  function isSimpleFunctionComponent(type) {
    return typeof type === 'function' && !shouldConstruct$1(type) && type.defaultProps === undefined;
  }
  function resolveLazyComponentTag(Component) {
    if (typeof Component === 'function') {
      return shouldConstruct$1(Component) ? ClassComponent : FunctionComponent;
    } else if (Component !== undefined && Component !== null) {
      var $$typeof = Component.$$typeof;

      if ($$typeof === REACT_FORWARD_REF_TYPE) {
        return ForwardRef;
      }

      if ($$typeof === REACT_MEMO_TYPE) {
        return MemoComponent;
      }
    }

    return IndeterminateComponent;
  } // This is used to create an alternate fiber to do work on.

  function createWorkInProgress(current, pendingProps) {
    var workInProgress = current.alternate;

    if (workInProgress === null) {
      // We use a double buffering pooling technique because we know that we'll
      // only ever need at most two versions of a tree. We pool the "other" unused
      // node that we're free to reuse. This is lazily created to avoid allocating
      // extra objects for things that are never updated. It also allow us to
      // reclaim the extra memory if needed.
      workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
      workInProgress.elementType = current.elementType;
      workInProgress.type = current.type;
      workInProgress.stateNode = current.stateNode;

      {
        // DEV-only fields
        workInProgress._debugID = current._debugID;
        workInProgress._debugSource = current._debugSource;
        workInProgress._debugOwner = current._debugOwner;
        workInProgress._debugHookTypes = current._debugHookTypes;
      }

      workInProgress.alternate = current;
      current.alternate = workInProgress;
    } else {
      workInProgress.pendingProps = pendingProps; // Needed because Blocks store data on type.

      workInProgress.type = current.type; // We already have an alternate.
      // Reset the effect tag.

      workInProgress.flags = NoFlags; // The effect list is no longer valid.

      workInProgress.nextEffect = null;
      workInProgress.firstEffect = null;
      workInProgress.lastEffect = null;

      {
        // We intentionally reset, rather than copy, actualDuration & actualStartTime.
        // This prevents time from endlessly accumulating in new commits.
        // This has the downside of resetting values for different priority renders,
        // But works for yielding (the common case) and should support resuming.
        workInProgress.actualDuration = 0;
        workInProgress.actualStartTime = -1;
      }
    }

    workInProgress.childLanes = current.childLanes;
    workInProgress.lanes = current.lanes;
    workInProgress.child = current.child;
    workInProgress.memoizedProps = current.memoizedProps;
    workInProgress.memoizedState = current.memoizedState;
    workInProgress.updateQueue = current.updateQueue; // Clone the dependencies object. This is mutated during the render phase, so
    // it cannot be shared with the current fiber.

    var currentDependencies = current.dependencies;
    workInProgress.dependencies = currentDependencies === null ? null : {
      lanes: currentDependencies.lanes,
      firstContext: currentDependencies.firstContext
    }; // These will be overridden during the parent's reconciliation

    workInProgress.sibling = current.sibling;
    workInProgress.index = current.index;
    workInProgress.ref = current.ref;

    {
      workInProgress.selfBaseDuration = current.selfBaseDuration;
      workInProgress.treeBaseDuration = current.treeBaseDuration;
    }

    {
      workInProgress._debugNeedsRemount = current._debugNeedsRemount;

      switch (workInProgress.tag) {
        case IndeterminateComponent:
        case FunctionComponent:
        case SimpleMemoComponent:
          workInProgress.type = resolveFunctionForHotReloading(current.type);
          break;

        case ClassComponent:
          workInProgress.type = resolveClassForHotReloading(current.type);
          break;

        case ForwardRef:
          workInProgress.type = resolveForwardRefForHotReloading(current.type);
          break;
      }
    }

    return workInProgress;
  } // Used to reuse a Fiber for a second pass.

  function resetWorkInProgress(workInProgress, renderLanes) {
    // This resets the Fiber to what createFiber or createWorkInProgress would
    // have set the values to before during the first pass. Ideally this wouldn't
    // be necessary but unfortunately many code paths reads from the workInProgress
    // when they should be reading from current and writing to workInProgress.
    // We assume pendingProps, index, key, ref, return are still untouched to
    // avoid doing another reconciliation.
    // Reset the effect tag but keep any Placement tags, since that's something
    // that child fiber is setting, not the reconciliation.
    workInProgress.flags &= Placement; // The effect list is no longer valid.

    workInProgress.nextEffect = null;
    workInProgress.firstEffect = null;
    workInProgress.lastEffect = null;
    var current = workInProgress.alternate;

    if (current === null) {
      // Reset to createFiber's initial values.
      workInProgress.childLanes = NoLanes;
      workInProgress.lanes = renderLanes;
      workInProgress.child = null;
      workInProgress.memoizedProps = null;
      workInProgress.memoizedState = null;
      workInProgress.updateQueue = null;
      workInProgress.dependencies = null;
      workInProgress.stateNode = null;

      {
        // Note: We don't reset the actualTime counts. It's useful to accumulate
        // actual time across multiple render passes.
        workInProgress.selfBaseDuration = 0;
        workInProgress.treeBaseDuration = 0;
      }
    } else {
      // Reset to the cloned values that createWorkInProgress would've.
      workInProgress.childLanes = current.childLanes;
      workInProgress.lanes = current.lanes;
      workInProgress.child = current.child;
      workInProgress.memoizedProps = current.memoizedProps;
      workInProgress.memoizedState = current.memoizedState;
      workInProgress.updateQueue = current.updateQueue; // Needed because Blocks store data on type.

      workInProgress.type = current.type; // Clone the dependencies object. This is mutated during the render phase, so
      // it cannot be shared with the current fiber.

      var currentDependencies = current.dependencies;
      workInProgress.dependencies = currentDependencies === null ? null : {
        lanes: currentDependencies.lanes,
        firstContext: currentDependencies.firstContext
      };

      {
        // Note: We don't reset the actualTime counts. It's useful to accumulate
        // actual time across multiple render passes.
        workInProgress.selfBaseDuration = current.selfBaseDuration;
        workInProgress.treeBaseDuration = current.treeBaseDuration;
      }
    }

    return workInProgress;
  }
  function createHostRootFiber(tag) {
    var mode;

    if (tag === ConcurrentRoot) {
      mode = ConcurrentMode | BlockingMode | StrictMode;
    } else if (tag === BlockingRoot) {
      mode = BlockingMode | StrictMode;
    } else {
      mode = NoMode;
    }

    if ( isDevToolsPresent) {
      // Always collect profile timings when DevTools are present.
      // This enables DevTools to start capturing timing at any point–
      // Without some nodes in the tree having empty base times.
      mode |= ProfileMode;
    }

    return createFiber(HostRoot, null, null, mode);
  }
  function createFiberFromTypeAndProps(type, // React$ElementType
  key, pendingProps, owner, mode, lanes) {
    var fiberTag = IndeterminateComponent; // The resolved type is set if we know what the final type will be. I.e. it's not lazy.

    var resolvedType = type;

    if (typeof type === 'function') {
      if (shouldConstruct$1(type)) {
        fiberTag = ClassComponent;

        {
          resolvedType = resolveClassForHotReloading(resolvedType);
        }
      } else {
        {
          resolvedType = resolveFunctionForHotReloading(resolvedType);
        }
      }
    } else if (typeof type === 'string') {
      fiberTag = HostComponent;
    } else {
      getTag: switch (type) {
        case REACT_FRAGMENT_TYPE:
          return createFiberFromFragment(pendingProps.children, mode, lanes, key);

        case REACT_DEBUG_TRACING_MODE_TYPE:
          fiberTag = Mode;
          mode |= DebugTracingMode;
          break;

        case REACT_STRICT_MODE_TYPE:
          fiberTag = Mode;
          mode |= StrictMode;
          break;

        case REACT_PROFILER_TYPE:
          return createFiberFromProfiler(pendingProps, mode, lanes, key);

        case REACT_SUSPENSE_TYPE:
          return createFiberFromSuspense(pendingProps, mode, lanes, key);

        case REACT_SUSPENSE_LIST_TYPE:
          return createFiberFromSuspenseList(pendingProps, mode, lanes, key);

        case REACT_OFFSCREEN_TYPE:
          return createFiberFromOffscreen(pendingProps, mode, lanes, key);

        case REACT_LEGACY_HIDDEN_TYPE:
          return createFiberFromLegacyHidden(pendingProps, mode, lanes, key);

        case REACT_SCOPE_TYPE:

        // eslint-disable-next-line no-fallthrough

        default:
          {
            if (typeof type === 'object' && type !== null) {
              switch (type.$$typeof) {
                case REACT_PROVIDER_TYPE:
                  fiberTag = ContextProvider;
                  break getTag;

                case REACT_CONTEXT_TYPE:
                  // This is a consumer
                  fiberTag = ContextConsumer;
                  break getTag;

                case REACT_FORWARD_REF_TYPE:
                  fiberTag = ForwardRef;

                  {
                    resolvedType = resolveForwardRefForHotReloading(resolvedType);
                  }

                  break getTag;

                case REACT_MEMO_TYPE:
                  fiberTag = MemoComponent;
                  break getTag;

                case REACT_LAZY_TYPE:
                  fiberTag = LazyComponent;
                  resolvedType = null;
                  break getTag;

                case REACT_BLOCK_TYPE:
                  fiberTag = Block;
                  break getTag;
              }
            }

            var info = '';

            {
              if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
              }

              var ownerName = owner ? getComponentName(owner.type) : null;

              if (ownerName) {
                info += '\n\nCheck the render method of `' + ownerName + '`.';
              }
            }

            {
              {
                throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (type == null ? type : typeof type) + "." + info );
              }
            }
          }
      }
    }

    var fiber = createFiber(fiberTag, pendingProps, key, mode);
    fiber.elementType = type;
    fiber.type = resolvedType;
    fiber.lanes = lanes;

    {
      fiber._debugOwner = owner;
    }

    return fiber;
  }
  function createFiberFromElement(element, mode, lanes) {
    var owner = null;

    {
      owner = element._owner;
    }

    var type = element.type;
    var key = element.key;
    var pendingProps = element.props;
    var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);

    {
      fiber._debugSource = element._source;
      fiber._debugOwner = element._owner;
    }

    return fiber;
  }
  function createFiberFromFragment(elements, mode, lanes, key) {
    var fiber = createFiber(Fragment, elements, key, mode);
    fiber.lanes = lanes;
    return fiber;
  }

  function createFiberFromProfiler(pendingProps, mode, lanes, key) {
    {
      if (typeof pendingProps.id !== 'string') {
        error('Profiler must specify an "id" as a prop');
      }
    }

    var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode); // TODO: The Profiler fiber shouldn't have a type. It has a tag.

    fiber.elementType = REACT_PROFILER_TYPE;
    fiber.type = REACT_PROFILER_TYPE;
    fiber.lanes = lanes;

    {
      fiber.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      };
    }

    return fiber;
  }

  function createFiberFromSuspense(pendingProps, mode, lanes, key) {
    var fiber = createFiber(SuspenseComponent, pendingProps, key, mode); // TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
    // This needs to be fixed in getComponentName so that it relies on the tag
    // instead.

    fiber.type = REACT_SUSPENSE_TYPE;
    fiber.elementType = REACT_SUSPENSE_TYPE;
    fiber.lanes = lanes;
    return fiber;
  }
  function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
    var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);

    {
      // TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
      // This needs to be fixed in getComponentName so that it relies on the tag
      // instead.
      fiber.type = REACT_SUSPENSE_LIST_TYPE;
    }

    fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
    fiber.lanes = lanes;
    return fiber;
  }
  function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
    var fiber = createFiber(OffscreenComponent, pendingProps, key, mode); // TODO: The OffscreenComponent fiber shouldn't have a type. It has a tag.
    // This needs to be fixed in getComponentName so that it relies on the tag
    // instead.

    {
      fiber.type = REACT_OFFSCREEN_TYPE;
    }

    fiber.elementType = REACT_OFFSCREEN_TYPE;
    fiber.lanes = lanes;
    return fiber;
  }
  function createFiberFromLegacyHidden(pendingProps, mode, lanes, key) {
    var fiber = createFiber(LegacyHiddenComponent, pendingProps, key, mode); // TODO: The LegacyHidden fiber shouldn't have a type. It has a tag.
    // This needs to be fixed in getComponentName so that it relies on the tag
    // instead.

    {
      fiber.type = REACT_LEGACY_HIDDEN_TYPE;
    }

    fiber.elementType = REACT_LEGACY_HIDDEN_TYPE;
    fiber.lanes = lanes;
    return fiber;
  }
  function createFiberFromText(content, mode, lanes) {
    var fiber = createFiber(HostText, content, null, mode);
    fiber.lanes = lanes;
    return fiber;
  }
  function createFiberFromHostInstanceForDeletion() {
    var fiber = createFiber(HostComponent, null, null, NoMode); // TODO: These should not need a type.

    fiber.elementType = 'DELETED';
    fiber.type = 'DELETED';
    return fiber;
  }
  function createFiberFromPortal(portal, mode, lanes) {
    var pendingProps = portal.children !== null ? portal.children : [];
    var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
    fiber.lanes = lanes;
    fiber.stateNode = {
      containerInfo: portal.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: portal.implementation
    };
    return fiber;
  } // Used for stashing WIP properties to replay failed work in DEV.

  function assignFiberPropertiesInDEV(target, source) {
    if (target === null) {
      // This Fiber's initial properties will always be overwritten.
      // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
      target = createFiber(IndeterminateComponent, null, null, NoMode);
    } // This is intentionally written as a list of all properties.
    // We tried to use Object.assign() instead but this is called in
    // the hottest path, and Object.assign() was too slow:
    // https://github.com/facebook/react/issues/12502
    // This code is DEV-only so size is not a concern.


    target.tag = source.tag;
    target.key = source.key;
    target.elementType = source.elementType;
    target.type = source.type;
    target.stateNode = source.stateNode;
    target.return = source.return;
    target.child = source.child;
    target.sibling = source.sibling;
    target.index = source.index;
    target.ref = source.ref;
    target.pendingProps = source.pendingProps;
    target.memoizedProps = source.memoizedProps;
    target.updateQueue = source.updateQueue;
    target.memoizedState = source.memoizedState;
    target.dependencies = source.dependencies;
    target.mode = source.mode;
    target.flags = source.flags;
    target.nextEffect = source.nextEffect;
    target.firstEffect = source.firstEffect;
    target.lastEffect = source.lastEffect;
    target.lanes = source.lanes;
    target.childLanes = source.childLanes;
    target.alternate = source.alternate;

    {
      target.actualDuration = source.actualDuration;
      target.actualStartTime = source.actualStartTime;
      target.selfBaseDuration = source.selfBaseDuration;
      target.treeBaseDuration = source.treeBaseDuration;
    }

    target._debugID = source._debugID;
    target._debugSource = source._debugSource;
    target._debugOwner = source._debugOwner;
    target._debugNeedsRemount = source._debugNeedsRemount;
    target._debugHookTypes = source._debugHookTypes;
    return target;
  }

  function FiberRootNode(containerInfo, tag, hydrate) {
    this.tag = tag;
    this.containerInfo = containerInfo;
    this.pendingChildren = null;
    this.current = null;
    this.pingCache = null;
    this.finishedWork = null;
    this.timeoutHandle = noTimeout;
    this.context = null;
    this.pendingContext = null;
    this.hydrate = hydrate;
    this.callbackNode = null;
    this.callbackPriority = NoLanePriority;
    this.eventTimes = createLaneMap(NoLanes);
    this.expirationTimes = createLaneMap(NoTimestamp);
    this.pendingLanes = NoLanes;
    this.suspendedLanes = NoLanes;
    this.pingedLanes = NoLanes;
    this.expiredLanes = NoLanes;
    this.mutableReadLanes = NoLanes;
    this.finishedLanes = NoLanes;
    this.entangledLanes = NoLanes;
    this.entanglements = createLaneMap(NoLanes);

    if (supportsHydration) {
      this.mutableSourceEagerHydrationData = null;
    }

    {
      this.interactionThreadID = tracing$1.unstable_getThreadID();
      this.memoizedInteractions = new Set();
      this.pendingInteractionMap = new Map();
    }

    {
      switch (tag) {
        case BlockingRoot:
          this._debugRootType = 'createBlockingRoot()';
          break;

        case ConcurrentRoot:
          this._debugRootType = 'createRoot()';
          break;

        case LegacyRoot:
          this._debugRootType = 'createLegacyRoot()';
          break;
      }
    }
  }

  function createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks) {
    var root = new FiberRootNode(containerInfo, tag, hydrate);
    // stateNode is any.


    var uninitializedFiber = createHostRootFiber(tag);
    root.current = uninitializedFiber;
    uninitializedFiber.stateNode = root;
    initializeUpdateQueue(uninitializedFiber);
    return root;
  }

  // This ensures that the version used for server rendering matches the one
  // that is eventually read during hydration.
  // If they don't match there's a potential tear and a full deopt render is required.

  function registerMutableSourceForHydration(root, mutableSource) {
    var getVersion = mutableSource._getVersion;
    var version = getVersion(mutableSource._source); // TODO Clear this data once all pending hydration work is finished.
    // Retaining it forever may interfere with GC.

    if (root.mutableSourceEagerHydrationData == null) {
      root.mutableSourceEagerHydrationData = [mutableSource, version];
    } else {
      root.mutableSourceEagerHydrationData.push(mutableSource, version);
    }
  }

  function createPortal(children, containerInfo, // TODO: figure out the API for cross-renderer implementation.
  implementation) {
    var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    return {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: REACT_PORTAL_TYPE,
      key: key == null ? null : '' + key,
      children: children,
      containerInfo: containerInfo,
      implementation: implementation
    };
  }

  var didWarnAboutNestedUpdates;
  var didWarnAboutFindNodeInStrictMode;

  {
    didWarnAboutNestedUpdates = false;
    didWarnAboutFindNodeInStrictMode = {};
  }

  function getContextForSubtree(parentComponent) {
    if (!parentComponent) {
      return emptyContextObject;
    }

    var fiber = get(parentComponent);
    var parentContext = findCurrentUnmaskedContext(fiber);

    if (fiber.tag === ClassComponent) {
      var Component = fiber.type;

      if (isContextProvider(Component)) {
        return processChildContext(fiber, Component, parentContext);
      }
    }

    return parentContext;
  }

  function findHostInstance(component) {
    var fiber = get(component);

    if (fiber === undefined) {
      if (typeof component.render === 'function') {
        {
          {
            throw Error( "Unable to find node on an unmounted component." );
          }
        }
      } else {
        {
          {
            throw Error( "Argument appears to not be a ReactComponent. Keys: " + Object.keys(component) );
          }
        }
      }
    }

    var hostFiber = findCurrentHostFiber(fiber);

    if (hostFiber === null) {
      return null;
    }

    return hostFiber.stateNode;
  }

  function findHostInstanceWithWarning(component, methodName) {
    {
      var fiber = get(component);

      if (fiber === undefined) {
        if (typeof component.render === 'function') {
          {
            {
              throw Error( "Unable to find node on an unmounted component." );
            }
          }
        } else {
          {
            {
              throw Error( "Argument appears to not be a ReactComponent. Keys: " + Object.keys(component) );
            }
          }
        }
      }

      var hostFiber = findCurrentHostFiber(fiber);

      if (hostFiber === null) {
        return null;
      }

      if (hostFiber.mode & StrictMode) {
        var componentName = getComponentName(fiber.type) || 'Component';

        if (!didWarnAboutFindNodeInStrictMode[componentName]) {
          didWarnAboutFindNodeInStrictMode[componentName] = true;
          var previousFiber = current;

          try {
            setCurrentFiber(hostFiber);

            if (fiber.mode & StrictMode) {
              error('%s is deprecated in StrictMode. ' + '%s was passed an instance of %s which is inside StrictMode. ' + 'Instead, add a ref directly to the element you want to reference. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-find-node', methodName, methodName, componentName);
            } else {
              error('%s is deprecated in StrictMode. ' + '%s was passed an instance of %s which renders StrictMode children. ' + 'Instead, add a ref directly to the element you want to reference. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-find-node', methodName, methodName, componentName);
            }
          } finally {
            // Ideally this should reset to previous but this shouldn't be called in
            // render and there's another warning for that anyway.
            if (previousFiber) {
              setCurrentFiber(previousFiber);
            } else {
              resetCurrentFiber();
            }
          }
        }
      }

      return hostFiber.stateNode;
    }
  }

  function createContainer(containerInfo, tag, hydrate, hydrationCallbacks) {
    return createFiberRoot(containerInfo, tag, hydrate);
  }
  function updateContainer(element, container, parentComponent, callback) {
    {
      onScheduleRoot(container, element);
    }

    var current$1 = container.current;
    var eventTime = requestEventTime();

    {
      // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
      if ('undefined' !== typeof jest) {
        warnIfUnmockedScheduler(current$1);
        warnIfNotScopedWithMatchingAct(current$1);
      }
    }

    var lane = requestUpdateLane(current$1);

    var context = getContextForSubtree(parentComponent);

    if (container.context === null) {
      container.context = context;
    } else {
      container.pendingContext = context;
    }

    {
      if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
        didWarnAboutNestedUpdates = true;

        error('Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(current.type) || 'Unknown');
      }
    }

    var update = createUpdate(eventTime, lane); // Caution: React DevTools currently depends on this property
    // being called "element".

    update.payload = {
      element: element
    };
    callback = callback === undefined ? null : callback;

    if (callback !== null) {
      {
        if (typeof callback !== 'function') {
          error('render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback);
        }
      }

      update.callback = callback;
    }

    enqueueUpdate(current$1, update);
    scheduleUpdateOnFiber(current$1, lane, eventTime);
    return lane;
  }
  function getPublicRootInstance(container) {
    var containerFiber = container.current;

    if (!containerFiber.child) {
      return null;
    }

    switch (containerFiber.child.tag) {
      case HostComponent:
        return getPublicInstance(containerFiber.child.stateNode);

      default:
        return containerFiber.child.stateNode;
    }
  }
  function attemptSynchronousHydration(fiber) {
    switch (fiber.tag) {
      case HostRoot:
        var root = fiber.stateNode;

        if (root.hydrate) {
          // Flush the first scheduled "update".
          var lanes = getHighestPriorityPendingLanes(root);
          flushRoot(root, lanes);
        }

        break;

      case SuspenseComponent:
        var eventTime = requestEventTime();
        flushSync(function () {
          return scheduleUpdateOnFiber(fiber, SyncLane, eventTime);
        }); // If we're still blocked after this, we need to increase
        // the priority of any promises resolving within this
        // boundary so that they next attempt also has higher pri.

        var retryLane = InputDiscreteHydrationLane;
        markRetryLaneIfNotHydrated(fiber, retryLane);
        break;
    }
  }

  function markRetryLaneImpl(fiber, retryLane) {
    var suspenseState = fiber.memoizedState;

    if (suspenseState !== null && suspenseState.dehydrated !== null) {
      suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
    }
  } // Increases the priority of thennables when they resolve within this boundary.


  function markRetryLaneIfNotHydrated(fiber, retryLane) {
    markRetryLaneImpl(fiber, retryLane);
    var alternate = fiber.alternate;

    if (alternate) {
      markRetryLaneImpl(alternate, retryLane);
    }
  }

  function attemptUserBlockingHydration(fiber) {
    if (fiber.tag !== SuspenseComponent) {
      // We ignore HostRoots here because we can't increase
      // their priority and they should not suspend on I/O,
      // since you have to wrap anything that might suspend in
      // Suspense.
      return;
    }

    var eventTime = requestEventTime();
    var lane = InputDiscreteHydrationLane;
    scheduleUpdateOnFiber(fiber, lane, eventTime);
    markRetryLaneIfNotHydrated(fiber, lane);
  }
  function attemptContinuousHydration(fiber) {
    if (fiber.tag !== SuspenseComponent) {
      // We ignore HostRoots here because we can't increase
      // their priority and they should not suspend on I/O,
      // since you have to wrap anything that might suspend in
      // Suspense.
      return;
    }

    var eventTime = requestEventTime();
    var lane = SelectiveHydrationLane;
    scheduleUpdateOnFiber(fiber, lane, eventTime);
    markRetryLaneIfNotHydrated(fiber, lane);
  }
  function attemptHydrationAtCurrentPriority(fiber) {
    if (fiber.tag !== SuspenseComponent) {
      // We ignore HostRoots here because we can't increase
      // their priority other than synchronously flush it.
      return;
    }

    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    scheduleUpdateOnFiber(fiber, lane, eventTime);
    markRetryLaneIfNotHydrated(fiber, lane);
  }
  function runWithPriority$1(priority, fn) {
    var previousPriority = getCurrentUpdateLanePriority();

    try {
      setCurrentUpdateLanePriority(priority);
      return fn();
    } finally {
      setCurrentUpdateLanePriority(previousPriority);
    }
  }
  function findHostInstanceWithNoPortals(fiber) {
    var hostFiber = findCurrentHostFiberWithNoPortals(fiber);

    if (hostFiber === null) {
      return null;
    }

    if (hostFiber.tag === FundamentalComponent) {
      return hostFiber.stateNode.instance;
    }

    return hostFiber.stateNode;
  }

  var shouldSuspendImpl = function (fiber) {
    return false;
  };

  function shouldSuspend(fiber) {
    return shouldSuspendImpl(fiber);
  }
  var overrideHookState = null;
  var overrideHookStateDeletePath = null;
  var overrideHookStateRenamePath = null;
  var overrideProps = null;
  var overridePropsDeletePath = null;
  var overridePropsRenamePath = null;
  var scheduleUpdate = null;
  var setSuspenseHandler = null;

  {
    var copyWithDeleteImpl = function (obj, path, index) {
      var key = path[index];
      var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);

      if (index + 1 === path.length) {
        if (Array.isArray(updated)) {
          updated.splice(key, 1);
        } else {
          delete updated[key];
        }

        return updated;
      } // $FlowFixMe number or string is fine here


      updated[key] = copyWithDeleteImpl(obj[key], path, index + 1);
      return updated;
    };

    var copyWithDelete = function (obj, path) {
      return copyWithDeleteImpl(obj, path, 0);
    };

    var copyWithRenameImpl = function (obj, oldPath, newPath, index) {
      var oldKey = oldPath[index];
      var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);

      if (index + 1 === oldPath.length) {
        var newKey = newPath[index]; // $FlowFixMe number or string is fine here

        updated[newKey] = updated[oldKey];

        if (Array.isArray(updated)) {
          updated.splice(oldKey, 1);
        } else {
          delete updated[oldKey];
        }
      } else {
        // $FlowFixMe number or string is fine here
        updated[oldKey] = copyWithRenameImpl( // $FlowFixMe number or string is fine here
        obj[oldKey], oldPath, newPath, index + 1);
      }

      return updated;
    };

    var copyWithRename = function (obj, oldPath, newPath) {
      if (oldPath.length !== newPath.length) {
        warn('copyWithRename() expects paths of the same length');

        return;
      } else {
        for (var i = 0; i < newPath.length - 1; i++) {
          if (oldPath[i] !== newPath[i]) {
            warn('copyWithRename() expects paths to be the same except for the deepest key');

            return;
          }
        }
      }

      return copyWithRenameImpl(obj, oldPath, newPath, 0);
    };

    var copyWithSetImpl = function (obj, path, index, value) {
      if (index >= path.length) {
        return value;
      }

      var key = path[index];
      var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj); // $FlowFixMe number or string is fine here

      updated[key] = copyWithSetImpl(obj[key], path, index + 1, value);
      return updated;
    };

    var copyWithSet = function (obj, path, value) {
      return copyWithSetImpl(obj, path, 0, value);
    };

    var findHook = function (fiber, id) {
      // For now, the "id" of stateful hooks is just the stateful hook index.
      // This may change in the future with e.g. nested hooks.
      var currentHook = fiber.memoizedState;

      while (currentHook !== null && id > 0) {
        currentHook = currentHook.next;
        id--;
      }

      return currentHook;
    }; // Support DevTools editable values for useState and useReducer.


    overrideHookState = function (fiber, id, path, value) {
      var hook = findHook(fiber, id);

      if (hook !== null) {
        var newState = copyWithSet(hook.memoizedState, path, value);
        hook.memoizedState = newState;
        hook.baseState = newState; // We aren't actually adding an update to the queue,
        // because there is no update we can add for useReducer hooks that won't trigger an error.
        // (There's no appropriate action type for DevTools overrides.)
        // As a result though, React will see the scheduled update as a noop and bailout.
        // Shallow cloning props works as a workaround for now to bypass the bailout check.

        fiber.memoizedProps = _assign({}, fiber.memoizedProps);
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      }
    };

    overrideHookStateDeletePath = function (fiber, id, path) {
      var hook = findHook(fiber, id);

      if (hook !== null) {
        var newState = copyWithDelete(hook.memoizedState, path);
        hook.memoizedState = newState;
        hook.baseState = newState; // We aren't actually adding an update to the queue,
        // because there is no update we can add for useReducer hooks that won't trigger an error.
        // (There's no appropriate action type for DevTools overrides.)
        // As a result though, React will see the scheduled update as a noop and bailout.
        // Shallow cloning props works as a workaround for now to bypass the bailout check.

        fiber.memoizedProps = _assign({}, fiber.memoizedProps);
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      }
    };

    overrideHookStateRenamePath = function (fiber, id, oldPath, newPath) {
      var hook = findHook(fiber, id);

      if (hook !== null) {
        var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
        hook.memoizedState = newState;
        hook.baseState = newState; // We aren't actually adding an update to the queue,
        // because there is no update we can add for useReducer hooks that won't trigger an error.
        // (There's no appropriate action type for DevTools overrides.)
        // As a result though, React will see the scheduled update as a noop and bailout.
        // Shallow cloning props works as a workaround for now to bypass the bailout check.

        fiber.memoizedProps = _assign({}, fiber.memoizedProps);
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      }
    }; // Support DevTools props for function components, forwardRef, memo, host components, etc.


    overrideProps = function (fiber, path, value) {
      fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);

      if (fiber.alternate) {
        fiber.alternate.pendingProps = fiber.pendingProps;
      }

      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    };

    overridePropsDeletePath = function (fiber, path) {
      fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);

      if (fiber.alternate) {
        fiber.alternate.pendingProps = fiber.pendingProps;
      }

      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    };

    overridePropsRenamePath = function (fiber, oldPath, newPath) {
      fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);

      if (fiber.alternate) {
        fiber.alternate.pendingProps = fiber.pendingProps;
      }

      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    };

    scheduleUpdate = function (fiber) {
      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    };

    setSuspenseHandler = function (newShouldSuspendImpl) {
      shouldSuspendImpl = newShouldSuspendImpl;
    };
  }

  function findHostInstanceByFiber(fiber) {
    var hostFiber = findCurrentHostFiber(fiber);

    if (hostFiber === null) {
      return null;
    }

    return hostFiber.stateNode;
  }

  function emptyFindFiberByHostInstance(instance) {
    return null;
  }

  function getCurrentFiberForDevTools() {
    return current;
  }

  function injectIntoDevTools(devToolsConfig) {
    var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    return injectInternals({
      bundleType: devToolsConfig.bundleType,
      version: devToolsConfig.version,
      rendererPackageName: devToolsConfig.rendererPackageName,
      rendererConfig: devToolsConfig.rendererConfig,
      overrideHookState: overrideHookState,
      overrideHookStateDeletePath: overrideHookStateDeletePath,
      overrideHookStateRenamePath: overrideHookStateRenamePath,
      overrideProps: overrideProps,
      overridePropsDeletePath: overridePropsDeletePath,
      overridePropsRenamePath: overridePropsRenamePath,
      setSuspenseHandler: setSuspenseHandler,
      scheduleUpdate: scheduleUpdate,
      currentDispatcherRef: ReactCurrentDispatcher,
      findHostInstanceByFiber: findHostInstanceByFiber,
      findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
      // React Refresh
      findHostInstancesForRefresh:  findHostInstancesForRefresh ,
      scheduleRefresh:  scheduleRefresh ,
      scheduleRoot:  scheduleRoot ,
      setRefreshHandler:  setRefreshHandler ,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber:  getCurrentFiberForDevTools 
    });
  }

  exports.IsThisRendererActing = IsThisRendererActing;
  exports.act = act;
  exports.attemptContinuousHydration = attemptContinuousHydration;
  exports.attemptHydrationAtCurrentPriority = attemptHydrationAtCurrentPriority;
  exports.attemptSynchronousHydration = attemptSynchronousHydration;
  exports.attemptUserBlockingHydration = attemptUserBlockingHydration;
  exports.batchedEventUpdates = batchedEventUpdates;
  exports.batchedUpdates = batchedUpdates;
  exports.createComponentSelector = createComponentSelector;
  exports.createContainer = createContainer;
  exports.createHasPsuedoClassSelector = createHasPsuedoClassSelector;
  exports.createPortal = createPortal;
  exports.createRoleSelector = createRoleSelector;
  exports.createTestNameSelector = createTestNameSelector;
  exports.createTextSelector = createTextSelector;
  exports.deferredUpdates = deferredUpdates;
  exports.discreteUpdates = discreteUpdates;
  exports.findAllNodes = findAllNodes;
  exports.findBoundingRects = findBoundingRects;
  exports.findHostInstance = findHostInstance;
  exports.findHostInstanceWithNoPortals = findHostInstanceWithNoPortals;
  exports.findHostInstanceWithWarning = findHostInstanceWithWarning;
  exports.flushControlled = flushControlled;
  exports.flushDiscreteUpdates = flushDiscreteUpdates;
  exports.flushPassiveEffects = flushPassiveEffects;
  exports.flushSync = flushSync;
  exports.focusWithin = focusWithin;
  exports.getCurrentUpdateLanePriority = getCurrentUpdateLanePriority;
  exports.getFindAllNodesFailureDescription = getFindAllNodesFailureDescription;
  exports.getPublicRootInstance = getPublicRootInstance;
  exports.injectIntoDevTools = injectIntoDevTools;
  exports.observeVisibleRects = observeVisibleRects;
  exports.registerMutableSourceForHydration = registerMutableSourceForHydration;
  exports.runWithPriority = runWithPriority$1;
  exports.shouldSuspend = shouldSuspend;
  exports.unbatchedUpdates = unbatchedUpdates;
  exports.updateContainer = updateContainer;
      return exports;
    };
  }
  });

  var reactReconciler = createCommonjsModule(function (module) {

  {
    module.exports = reactReconciler_development;
  }
  });

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
  var jest$1 = {
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
  	jest: jest$1,
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

  var PixiFiber = reactReconciler(HostConfig);
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
