(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, global.requirejs('react/jsx-runtime'), global.requirejs('react'), global.requirejs('pixi8'), global.requirejs('react-reconciler')) :
    typeof define === 'function' && define.amd ? define('pixi-react8', ['exports', 'react/jsx-runtime', 'react', 'pixi8', 'react-reconciler'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["pixi-react8"] = {}, global.jsxRuntime, global.o, global.pixi8, global.Reconciler));
})(typeof globalThis !== 'undefined' ? globalThis : global || this,(function (exports, jsxRuntime, o, pixi8, Reconciler) { 'use strict';

    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var o__namespace = /*#__PURE__*/_interopNamespaceDefault(o);

    (function() {
        const env = {"NODE_ENV":"development"};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    const f = /* @__PURE__ */ (() => {
      var e, t;
      return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
    })() ? o__namespace.useLayoutEffect : o__namespace.useEffect;
    function i(e, t, r) {
      if (!e) return;
      if (r(e) === !0) return e;
      let n = t ? e.return : e.child;
      for (; n; ) {
        const u = i(n, t, r);
        if (u) return u;
        n = t ? null : n.sibling;
      }
    }
    function l(e) {
      try {
        return Object.defineProperties(e, {
          _currentRenderer: {
            get() {
              return null;
            },
            set() {
            }
          },
          _currentRenderer2: {
            get() {
              return null;
            },
            set() {
            }
          }
        });
      } catch (t) {
        return e;
      }
    }
    const a = /* @__PURE__ */ l(/* @__PURE__ */ o__namespace.createContext(null));
    class m extends o__namespace.Component {
      render() {
        return /* @__PURE__ */ o__namespace.createElement(a.Provider, { value: this._reactInternals }, this.props.children);
      }
    }
    function c() {
      const e = o__namespace.useContext(a);
      if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
      const t = o__namespace.useId();
      return o__namespace.useMemo(() => {
        for (const n of [e, e == null ? void 0 : e.alternate]) {
          if (!n) continue;
          const u = i(n, !1, (d) => {
            let s = d.memoizedState;
            for (; s; ) {
              if (s.memoizedState === t) return !0;
              s = s.next;
            }
          });
          if (u) return u;
        }
      }, [e, t]);
    }
    function w() {
      const e = c(), t = o__namespace.useMemo(
        () => i(e, !0, (r) => {
          var n;
          return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
        }),
        [e]
      );
      return t == null ? void 0 : t.stateNode.containerInfo;
    }
    function v(e) {
      const t = c(), r = o__namespace.useRef(void 0);
      return f(() => {
        var n;
        r.current = (n = i(
          t,
          !1,
          (u) => typeof u.type == "string" && (e === void 0 || u.type === e)
        )) == null ? void 0 : n.stateNode;
      }, [t]), r;
    }
    function y(e) {
      const t = c(), r = o__namespace.useRef(void 0);
      return f(() => {
        var n;
        r.current = (n = i(
          t,
          !0,
          (u) => typeof u.type == "string" && (e === void 0 || u.type === e)
        )) == null ? void 0 : n.stateNode;
      }, [t]), r;
    }
    const p = Symbol.for("react.context"), b = (e) => e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
    function h() {
      const e = c(), [t] = o__namespace.useState(() => /* @__PURE__ */ new Map());
      t.clear();
      let r = e;
      for (; r; ) {
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, o__namespace.use(l(n))), r = r.return;
      }
      return t;
    }
    function x() {
      const e = h();
      return o__namespace.useMemo(
        () => Array.from(e.keys()).reduce(
          (t, r) => (n) => /* @__PURE__ */ o__namespace.createElement(t, null, /* @__PURE__ */ o__namespace.createElement(r.Provider, { ...n, value: e.get(r) })),
          (t) => /* @__PURE__ */ o__namespace.createElement(m, { ...t })
        ),
        [e]
      );
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function getDefaultExportFromNamespaceIfPresent (n) {
    	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
    }

    function getDefaultExportFromNamespaceIfNotNamed (n) {
    	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
    }

    function getAugmentedNamespace(n) {
      if (n.__esModule) return n;
      var f = n.default;
    	if (typeof f == "function") {
    		var a = function a () {
    			if (this instanceof a) {
            return Reflect.construct(f, arguments, this.constructor);
    			}
    			return f.apply(this, arguments);
    		};
    		a.prototype = f.prototype;
      } else a = {};
      Object.defineProperty(a, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    var constants$2 = {exports: {}};

    var reactReconcilerConstants_production = {};

    var hasRequiredReactReconcilerConstants_production;

    function requireReactReconcilerConstants_production () {
    	if (hasRequiredReactReconcilerConstants_production) return reactReconcilerConstants_production;
    	hasRequiredReactReconcilerConstants_production = 1;
    	"use strict";
    	reactReconcilerConstants_production.ConcurrentRoot = 1;
    	reactReconcilerConstants_production.ContinuousEventPriority = 8;
    	reactReconcilerConstants_production.DefaultEventPriority = 32;
    	reactReconcilerConstants_production.DiscreteEventPriority = 2;
    	reactReconcilerConstants_production.IdleEventPriority = 268435456;
    	reactReconcilerConstants_production.LegacyRoot = 0;
    	reactReconcilerConstants_production.NoEventPriority = 0;
    	return reactReconcilerConstants_production;
    }

    var reactReconcilerConstants_development = {};

    var hasRequiredReactReconcilerConstants_development;

    function requireReactReconcilerConstants_development () {
    	if (hasRequiredReactReconcilerConstants_development) return reactReconcilerConstants_development;
    	hasRequiredReactReconcilerConstants_development = 1;
    	"use strict";
    	"production" !== process.env.NODE_ENV &&
    	  ((reactReconcilerConstants_development.ConcurrentRoot = 1),
    	  (reactReconcilerConstants_development.ContinuousEventPriority = 8),
    	  (reactReconcilerConstants_development.DefaultEventPriority = 32),
    	  (reactReconcilerConstants_development.DiscreteEventPriority = 2),
    	  (reactReconcilerConstants_development.IdleEventPriority = 268435456),
    	  (reactReconcilerConstants_development.LegacyRoot = 0),
    	  (reactReconcilerConstants_development.NoEventPriority = 0));
    	return reactReconcilerConstants_development;
    }

    var constants = constants$2.exports;

    'use strict';

    if (process.env.NODE_ENV === 'production') {
      constants$2.exports = requireReactReconcilerConstants_production();
    } else {
      constants$2.exports = requireReactReconcilerConstants_development();
    }

    var constantsExports = constants$2.exports;
    var constants$1 = /*@__PURE__*/getDefaultExportFromCjs(constantsExports);

    "use strict";
    const Context = o.createContext({});
    const ContextProvider = Context.Provider;
    const ContextConsumer = Context.Consumer;

    "use strict";
    function isReadOnlyProperty(objectInstance, propertyKey) {
      const prototype = Object.getPrototypeOf(objectInstance);
      const propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, propertyKey);
      return !(typeof propertyDescriptor === "undefined" || propertyDescriptor.writable || propertyDescriptor.set);
    }

    "use strict";
    const store = {
      currentUpdatePriority: constantsExports.DefaultEventPriority,
      debug: false,
      unmountQueue: /* @__PURE__ */ new Set()
    };

    "use strict";
    function log(logType, ...args) {
      if (!store.debug) {
        return;
      }
      const logMethod = console[logType];
      if (!(logMethod instanceof Function)) {
        console.warn(`Attempted to create an invalid log type: "${logType}"`);
        return;
      }
      logMethod("@pixi/react", ...args);
    }

    "use strict";
    function prepareInstance(component, state = {}) {
      const instance = component;
      instance.__pixireact = Object.assign({
        filters: [],
        parent: null,
        root: null,
        type: ""
      }, state);
      return instance;
    }

    "use strict";
    function afterActiveInstanceBlur() {
      log("info", "lifecycle::afterActiveInstanceBlur");
    }

    "use strict";
    function attach(parentInstance, childInstance, targetIndex) {
      if (childInstance instanceof pixi8.Filter) {
        childInstance.__pixireact.parent = parentInstance;
        if (typeof targetIndex === "number") {
          parentInstance.__pixireact.filters.splice(targetIndex, 0, childInstance);
        } else {
          parentInstance.__pixireact.filters.push(childInstance);
        }
        parentInstance.filters = parentInstance.__pixireact.filters;
      }
    }

    "use strict";
    function appendChild(parentNode, childNode) {
      log("info", "lifecycle::appendChild");
      if (!childNode) {
        return;
      }
      if (childNode instanceof pixi8.Container) {
        parentNode.addChild(childNode);
      } else if (childNode instanceof pixi8.Filter) {
        attach(parentNode, childNode);
      }
    }

    "use strict";
    function beforeActiveInstanceBlur() {
      log("info", "lifecycle::beforeActiveInstanceBlur");
    }

    "use strict";
    function clearContainer() {
      log("info", "lifecycle::clearContainer");
      return false;
    }

    "use strict";
    const PixiToReactEventPropNames = Object.freeze({
      onclick: "onClick",
      onglobalmousemove: "onGlobalMouseMove",
      onglobalpointermove: "onGlobalPointerMove",
      onglobaltouchmove: "onGlobalTouchMove",
      onmousedown: "onMouseDown",
      onmouseenter: "onMouseEnter",
      onmouseleave: "onMouseLeave",
      onmousemove: "onMouseMove",
      onmouseout: "onMouseOut",
      onmouseover: "onMouseOver",
      onmouseup: "onMouseUp",
      onmouseupoutside: "onMouseUpOutside",
      onpointercancel: "onPointerCancel",
      onpointerdown: "onPointerDown",
      onpointerenter: "onPointerEnter",
      onpointerleave: "onPointerLeave",
      onpointermove: "onPointerMove",
      onpointerout: "onPointerOut",
      onpointerover: "onPointerOver",
      onpointertap: "onPointerTap",
      onpointerup: "onPointerUp",
      onpointerupoutside: "onPointerUpOutside",
      onrightclick: "onRightClick",
      onrightdown: "onRightDown",
      onrightup: "onRightUp",
      onrightupoutside: "onRightUpOutside",
      ontap: "onTap",
      ontouchcancel: "onTouchCancel",
      ontouchend: "onTouchEnd",
      ontouchendoutside: "onTouchEndOutside",
      ontouchmove: "onTouchMove",
      ontouchstart: "onTouchStart",
      onwheel: "onWheel"
    });
    const ReactToPixiEventPropNames = Object.freeze({
      onClick: "onclick",
      onGlobalMouseMove: "onglobalmousemove",
      onGlobalPointerMove: "onglobalpointermove",
      onGlobalTouchMove: "onglobaltouchmove",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseUpOutside: "onmouseupoutside",
      onPointerCancel: "onpointercancel",
      onPointerDown: "onpointerdown",
      onPointerEnter: "onpointerenter",
      onPointerLeave: "onpointerleave",
      onPointerMove: "onpointermove",
      onPointerOut: "onpointerout",
      onPointerOver: "onpointerover",
      onPointerTap: "onpointertap",
      onPointerUp: "onpointerup",
      onPointerUpOutside: "onpointerupoutside",
      onRightClick: "onrightclick",
      onRightDown: "onrightdown",
      onRightUp: "onrightup",
      onRightUpOutside: "onrightupoutside",
      onTap: "ontap",
      onTouchCancel: "ontouchcancel",
      onTouchEnd: "ontouchend",
      onTouchEndOutside: "ontouchendoutside",
      onTouchMove: "ontouchmove",
      onTouchStart: "ontouchstart",
      onWheel: "onwheel"
    });

    "use strict";
    function isArray(input) {
      return Array.isArray(input);
    }
    function isBoolean(input) {
      return typeof input === "boolean";
    }
    function isEqual(inputA, inputB, options = {
      arrays: "reference",
      objects: "reference",
      strict: true
    }) {
      const {
        arrays,
        objects,
        strict
      } = options;
      if (typeof inputA !== typeof inputB || !!inputA !== !!inputB) {
        return false;
      }
      if (isString(inputA) || isNumber(inputA)) {
        return inputA === inputB;
      }
      const isInputAAnObject = isObject(inputA);
      if (isInputAAnObject && objects === "reference") {
        return inputA === inputB;
      }
      const isInputAAnArray = isArray(inputA);
      if (isInputAAnArray && arrays === "reference") {
        return inputA === inputB;
      }
      if ((isInputAAnArray || isInputAAnObject) && inputA === inputB) {
        return true;
      }
      let key;
      for (key in inputA) {
        if (!(key in inputB)) {
          return false;
        }
      }
      let input = inputA;
      if (strict) {
        input = inputB;
      }
      if (isInputAAnObject && arrays === "shallow" && objects === "shallow") {
        for (key in input) {
          const equalityCheckResult = isEqual(inputA[key], inputB[key], {
            strict,
            objects: "reference"
          });
          if (!equalityCheckResult) {
            return false;
          }
        }
      } else {
        for (key in input) {
          if (inputA[key] !== inputB[key]) {
            return false;
          }
        }
      }
      if (isUndefined(key)) {
        if (isInputAAnArray && inputA.length === 0 && inputB.length === 0) {
          return true;
        }
        if (isInputAAnObject && Object.keys(inputA).length === 0 && Object.keys(inputB).length === 0) {
          return true;
        }
        if (inputA !== inputB) {
          return false;
        }
      }
      return true;
    }
    function isFunction(input) {
      return typeof input === "function";
    }
    function isNull(input) {
      return input === null;
    }
    function isNumber(input) {
      return typeof input === "number";
    }
    function isObject(input) {
      if (input !== Object(input)) {
        return false;
      }
      if (isArray(input)) {
        return false;
      }
      if (typeof input === "function") {
        return false;
      }
      return true;
    }
    function isString(input) {
      return typeof input === "string";
    }
    function isUndefined(input) {
      return input === void 0;
    }

    "use strict";
    const ReactIgnoredProps = Object.freeze([
      "children",
      "key",
      "ref"
    ]);

    "use strict";
    function gentleClone(object, ignoredKeys = []) {
      const cloneBase = {};
      return Object.entries(object).reduce((accumulator, [key, value]) => {
        if (!ignoredKeys.includes(key)) {
          accumulator[key] = value;
        }
        return accumulator;
      }, cloneBase);
    }

    "use strict";
    function gentleCloneProps(props, additionalIgnoredProps = []) {
      return gentleClone(props, ReactIgnoredProps.concat(additionalIgnoredProps));
    }

    "use strict";
    const DEFAULT$1 = "__default";
    function diffProps(newProps, oldProps = {}, remove = false) {
      const newPropsRest = gentleCloneProps(newProps);
      const oldPropsRest = gentleCloneProps(oldProps);
      const entries = Object.entries(newPropsRest);
      const changes = [];
      if (remove) {
        const oldPropsKeys = Object.keys(oldPropsRest);
        let propIndex = 0;
        while (propIndex < oldPropsKeys.length) {
          const propKey = oldPropsKeys[propIndex];
          const isPropRemoved = !(propKey in newPropsRest);
          if (isPropRemoved) {
            entries.unshift([propKey, `${DEFAULT$1}remove`]);
          }
          propIndex += 1;
        }
      }
      entries.forEach(([key, value]) => {
        if (isEqual(value, oldPropsRest[key])) {
          return;
        }
        if (key in ReactToPixiEventPropNames) {
          changes.push([key, value, true, []]);
          return;
        }
        let entries2 = [];
        if (key.includes("-")) {
          entries2 = key.split("-");
        }
        changes.push([key, value, false, entries2]);
        for (const prop in newPropsRest) {
          const value2 = newPropsRest[prop];
          if (prop.startsWith(`${key}-`)) {
            changes.push([prop, value2, false, prop.split("-")]);
          }
        }
      });
      return { changes };
    }

    "use strict";
    function isDiffSet(input) {
      const inputAsDiffSet = input;
      if (!inputAsDiffSet) {
        return false;
      }
      if (!inputAsDiffSet.changes) {
        return false;
      }
      return true;
    }

    "use strict";
    const DEFAULT = "__default";
    const DEFAULTS_CONTAINERS = /* @__PURE__ */ new Map();
    const PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN = {};
    function targetKeyReducer(accumulator, key) {
      if (accumulator) {
        const value = accumulator[key];
        if (!isUndefined(value) && !isNull(value)) {
          return value;
        }
      }
      return accumulator;
    }
    function applyProps(instance, data) {
      const {
        __pixireact: instanceState = {},
        ...instanceProps
      } = instance;
      let typedData;
      if (isDiffSet(data)) {
        typedData = data;
      } else {
        typedData = diffProps(data, instanceProps);
      }
      const { changes } = typedData;
      let changeIndex = 0;
      while (changeIndex < changes.length) {
        const change = changes[changeIndex];
        let hasError = false;
        let key = change[0];
        let value = change[1];
        const isEvent = change[2];
        const keys = change[3];
        let currentInstance = instance;
        let targetProp = currentInstance[key];
        if (key === "draw" && typeof value === "function") {
          if (instance instanceof pixi8.Graphics) {
            value(instance);
          } else {
            hasError = true;
            log("warn", `The \`draw\` prop was used on a \`${instanceState.type}\` component, but it's only valid on \`graphics\` components.`);
          }
        }
        if (key in PixiToReactEventPropNames) {
          const typedKey = key;
          hasError = true;
          if (!PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN[key]) {
            PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN[key] = true;
            log("warn", `Event names must be pascal case; instead of \`${key}\`, you probably want \`${PixiToReactEventPropNames[typedKey]}\`.`);
          }
        }
        if (!hasError) {
          if (keys.length) {
            targetProp = keys.reduce(targetKeyReducer, currentInstance);
            if (!(targetProp && targetProp.set)) {
              const [name, ...reverseEntries] = keys.reverse();
              currentInstance = reverseEntries.reverse().reduce(targetKeyReducer, currentInstance);
              key = name;
            }
          }
          if (value === `${DEFAULT}remove`) {
            if (currentInstance instanceof pixi8.Container) {
              let ctor = DEFAULTS_CONTAINERS.get(currentInstance.constructor);
              if (!ctor) {
                ctor = currentInstance.constructor;
                ctor = new ctor();
                DEFAULTS_CONTAINERS.set(currentInstance.constructor, ctor);
              }
              value = ctor[key];
            } else {
              value = 0;
            }
          }
          if (isEvent && instanceState) {
            const typedKey = key;
            const pixiKey = ReactToPixiEventPropNames[typedKey];
            if (value) {
              currentInstance[pixiKey] = value;
            } else {
              delete currentInstance[pixiKey];
            }
          } else if (!isReadOnlyProperty(currentInstance, key)) {
            currentInstance[key] = value;
          }
        }
        changeIndex += 1;
      }
      return instance;
    }

    "use strict";
    function prepareUpdate(_instance, _type, oldProps, newProps) {
      log("info", "lifecycle::prepareUpdate");
      const {
        children: newChildren,
        ...newPropsRest
      } = newProps;
      const {
        children: oldChildren,
        ...oldPropsRest
      } = oldProps;
      const diff = diffProps(newPropsRest, oldPropsRest, true);
      if (diff.changes.length) {
        return diff;
      }
      return null;
    }

    "use strict";
    function commitUpdate(instance, type, oldProps, newProps) {
      log("info", "lifecycle::commitUpdate");
      const diff = prepareUpdate(
        instance,
        type,
        oldProps,
        newProps
      );
      if (diff) {
        applyProps(instance, diff);
      }
    }

    "use strict";
    const PixiReactIgnoredProps = Object.freeze([
      ...Object.keys(PixiToReactEventPropNames),
      "draw"
    ]);

    "use strict";
    const catalogue = {};

    "use strict";
    function convertStringToPascalCase(string) {
      const firstChar = string.charAt(0);
      const rest = string.substring(1);
      return `${firstChar.toUpperCase()}${rest}`;
    }

    "use strict";
    function lowercaseFirstCharacter(_fullMatch, firstCharacter) {
      return firstCharacter.toLowerCase();
    }
    function parseComponentType(type) {
      let parsedType = type;
      if (type.startsWith("pixi")) {
        parsedType = type.replace(/^pixi([A-Z])/, lowercaseFirstCharacter);
      }
      return parsedType;
    }

    "use strict";
    function createInstance(type, props, root) {
      log("info", "lifecycle::createInstance");
      const parsedType = parseComponentType(type);
      const name = convertStringToPascalCase(parsedType);
      if (!(name in catalogue)) {
        throw new Error(`${name} is not part of the PIXI namespace! Did you forget to extend?`);
      }
      const PixiComponent = catalogue[name];
      const pixiProps = gentleCloneProps(props, PixiReactIgnoredProps);
      Object.entries(props).forEach(([key, value]) => {
        if (key in ReactToPixiEventPropNames) {
          const pixiEventName = ReactToPixiEventPropNames[key];
          pixiProps[pixiEventName] = value;
        }
      });
      const instance = prepareInstance(new PixiComponent(pixiProps), {
        root,
        type: parsedType
      });
      applyProps(instance, props);
      return instance;
    }

    "use strict";
    const createReconciler = Reconciler;

    "use strict";
    function createTextInstance(_text, _rootContainer, _hostContext, _internalHandle) {
      log("info", "lifecycle::createTextInstance");
      throw new Error("Text instances are not yet supported. Please use a `<text>` component.");
    }

    "use strict";
    function detachDeletedInstance() {
      log("info", "lifecycle::detachDeletedInstance");
    }

    "use strict";
    function finalizeInitialChildren() {
      log("info", "lifecycle::finalizeInitialChildren");
      return false;
    }

    "use strict";
    const NO_CONTEXT = {};

    "use strict";
    function getChildHostContext(childHostContext) {
      log("info", "lifecycle::getChildHostContext");
      return childHostContext ?? NO_CONTEXT;
    }

    "use strict";
    function getCurrentUpdatePriority() {
      log("info", "lifecycle::getCurrentUpdatePriority");
      return store.currentUpdatePriority;
    }

    "use strict";
    function getInstanceFromNode() {
      log("info", "lifecycle::getInstanceFromNode");
      return null;
    }

    "use strict";
    function getInstanceFromScope(_scope) {
      log("info", "lifecycle:getInstanceFromScope");
      throw new Error("Not yet implemented.");
    }

    "use strict";
    function getPublicInstance(instance) {
      log("info", "lifecycle::getPublicInstance");
      return instance;
    }

    "use strict";
    function getRootHostContext() {
      log("info", "lifecycle::getRootHostContext");
      return NO_CONTEXT;
    }

    "use strict";
    function hideInstance(instance) {
      if (instance instanceof pixi8.Container) {
        instance.visible = false;
      } else if (instance instanceof pixi8.Filter) {
        instance.enabled = false;
      }
    }

    "use strict";
    function hideTextInstance(_textInstance) {
      log("info", "lifecycle::hideTextInstance");
      throw new Error("Text instances are not yet supported. Please use a `<text>` component.");
    }

    "use strict";
    function detach(childInstance) {
      if (childInstance instanceof pixi8.Filter) {
        const parentInstance = childInstance.__pixireact.parent;
        if (parentInstance) {
          const filterIndex = parentInstance.__pixireact.filters.indexOf(childInstance);
          parentInstance.__pixireact.filters.splice(filterIndex, 1);
          parentInstance.filters = parentInstance.__pixireact.filters;
        }
        childInstance.__pixireact.parent = null;
      }
    }

    "use strict";
    function invariant(condition, format, ...args) {
      if (process.env.NODE_ENV === "production") {
        return;
      }
      if (!condition) {
        let error;
        if (format === void 0) {
          error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          let argIndex = 0;
          error = new Error(format.replace(/%s/g, () => String(args[argIndex++])));
          error.name = "Invariant Violation";
        }
        throw error;
      }
    }

    "use strict";
    function insertBefore(parentInstance, childInstance, beforeChildInstance) {
      log("info", "lifecycle::insertBefore");
      invariant(childInstance !== beforeChildInstance, "Cannot insert node before itself");
      if (childInstance instanceof pixi8.Container) {
        const childContainerInstance = childInstance;
        const childContainer = childInstance;
        const beforeChildContainer = beforeChildInstance;
        if (childContainerInstance.parent === parentInstance) {
          parentInstance.removeChild(childContainer);
        }
        const index = parentInstance.getChildIndex(beforeChildContainer);
        parentInstance.addChildAt(childContainer, index);
      } else if (childInstance instanceof pixi8.Filter) {
        const childFilterInstance = childInstance;
        const instanceState = childFilterInstance.__pixireact;
        const targetIndex = instanceState.filters.indexOf(beforeChildInstance);
        detach(childInstance);
        attach(parentInstance, childInstance, targetIndex);
      }
    }

    "use strict";
    function maySuspendCommit() {
      log("info", "lifecycle::maySuspendCommit");
      return false;
    }

    "use strict";
    function preloadInstance() {
      log("info", "lifecycle::preloadInstance");
      return true;
    }

    "use strict";
    function prepareForCommit() {
      log("info", "lifecycle::prepareForCommit");
      return null;
    }

    "use strict";
    function preparePortalMount() {
      log("info", "lifecycle::preparePortalMount");
    }

    "use strict";
    function prepareScopeUpdate() {
      log("info", "lifecycle::prepareScopeUpdate");
    }

    "use strict";
    function removeChild(_parentInstance, childInstance) {
      log("info", "lifecycle::removeChild");
      if (childInstance instanceof pixi8.Filter) {
        detach(childInstance);
      }
      childInstance.destroy();
    }

    "use strict";
    function requestPostPaintCallback(_callback) {
      log("info", "lifecycle::requestPostPaintCallback");
    }

    "use strict";
    function resetAfterCommit() {
      log("info", "lifecycle::resetAfterCommit");
    }

    "use strict";
    function resetFormInstance() {
      log("info", "lifecycle::resetFormInstance");
    }

    "use strict";
    function resolveEventTimeStamp() {
      log("info", "lifecycle::resolveEventTimeStamp");
      return -1.1;
    }

    "use strict";
    function resolveEventType() {
      log("info", "lifecycle::resolveEventType");
      return null;
    }

    "use strict";
    function resolveUpdatePriority() {
      log("info", "lifecycle::resolveUpdatePriority");
      if (store.currentUpdatePriority) {
        return store.currentUpdatePriority;
      }
      const globalScope = typeof self !== "undefined" && self || typeof window !== "undefined" && window;
      if (!globalScope) {
        return constantsExports.DefaultEventPriority;
      }
      const name = globalScope.event?.type;
      switch (name) {
        case "click":
        case "contextmenu":
        case "dblclick":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
          return constantsExports.DiscreteEventPriority;
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerenter":
        case "pointerleave":
        case "wheel":
          return constantsExports.ContinuousEventPriority;
        default:
          return constantsExports.DefaultEventPriority;
      }
    }

    "use strict";
    function setCurrentUpdatePriority(newPriority) {
      log("info", "lifecycle::setCurrentUpdatePriority");
      store.currentUpdatePriority = newPriority;
    }

    "use strict";
    function shouldAttemptEagerTransition() {
      log("info", "lifecycle::shouldAttemptEagerTransition");
      return false;
    }

    "use strict";
    function shouldSetTextContent() {
      log("info", "lifecycle::shouldSetTextContent");
      return false;
    }

    "use strict";
    function startSuspendingCommit() {
      log("info", "lifecycle::startSuspendingCommit");
    }

    "use strict";
    function suspendInstance() {
      log("info", "lifecycle::suspendInstance");
    }

    "use strict";
    function trackSchedulerEvent() {
      log("info", "lifecycle::trackSchedulerEvent");
    }

    "use strict";
    function unhideInstance(instance) {
      if (instance instanceof pixi8.Container) {
        instance.visible = true;
      } else if (instance instanceof pixi8.Filter) {
        instance.enabled = true;
      }
    }

    "use strict";
    function unhideTextInstance(_textInstance) {
      log("info", "lifecycle::unhideTextInstance");
      throw new Error("Text instances are not yet supported. Please use a `<text>` component.");
    }

    "use strict";
    function waitForCommitToBeReady() {
      log("info", "lifecycle::waitForCommitToBeReady");
      return null;
    }

    "use strict";
    const reconcilerConfig = {
      // исправление React Dev Tools
      // https://github.com/pixijs/pixi-react/issues/631
      rendererVersion: "8.0.4",
      rendererPackageName: "@pixi/react",
      isPrimaryRenderer: false,
      noTimeout: -1,
      NotPendingTransition: null,
      supportsHydration: false,
      supportsMutation: true,
      supportsPersistence: false,
      warnsIfNotActing: false,
      afterActiveInstanceBlur,
      appendChild,
      appendChildToContainer: appendChild,
      appendInitialChild: appendChild,
      beforeActiveInstanceBlur,
      cancelTimeout: clearTimeout,
      clearContainer,
      commitUpdate,
      createInstance,
      createTextInstance,
      hideTextInstance,
      unhideTextInstance,
      detachDeletedInstance,
      finalizeInitialChildren,
      getChildHostContext,
      getCurrentUpdatePriority,
      getInstanceFromNode,
      getInstanceFromScope,
      getPublicInstance,
      getRootHostContext,
      hideInstance,
      insertBefore,
      insertInContainerBefore: insertBefore,
      maySuspendCommit,
      preloadInstance,
      prepareForCommit,
      preparePortalMount,
      prepareScopeUpdate,
      removeChild,
      removeChildFromContainer: removeChild,
      requestPostPaintCallback,
      resetAfterCommit,
      resetFormInstance,
      resolveEventTimeStamp,
      resolveEventType,
      resolveUpdatePriority,
      scheduleTimeout: setTimeout,
      shouldAttemptEagerTransition,
      setCurrentUpdatePriority,
      shouldSetTextContent,
      startSuspendingCommit,
      suspendInstance,
      trackSchedulerEvent,
      unhideInstance,
      waitForCommitToBeReady
    };
    const reconciler = createReconciler(reconcilerConfig);
    reconciler.injectIntoDevTools({
      bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
      rendererPackageName: "@pixi/react",
      version: "8.0.4"
    });

    "use strict";
    const roots = /* @__PURE__ */ new Map();

    "use strict";
    function createRoot(target, options = {}) {
      let root = roots.get(target);
      let applicationState = root?.applicationState ?? {
        isInitialised: false,
        isInitialising: false
      };
      const internalState = root?.internalState ?? {};
      if (root) {
        log("warn", "createRoot should only be called once!");
      } else {
        applicationState.app = new pixi8.Application();
        internalState.rootContainer = prepareInstance(applicationState.app.stage);
      }
      const fiber = root?.fiber ?? reconciler.createContainer(
        internalState.rootContainer,
        // container
        constantsExports.ConcurrentRoot,
        // tag
        null,
        // hydration callbacks
        false,
        // isStrictMode
        null,
        // concurrentUpdatesByDefaultOverride
        "",
        // identifierPrefix
        console.error,
        // onUncaughtError
        console.error,
        // onCaughtError
        console.error,
        // onRecoverableError
        null
        // transitionCallbacks
      );
      if (!root) {
        let canvas;
        if (target instanceof HTMLCanvasElement) {
          canvas = target;
        }
        if (!canvas) {
          canvas = document.createElement("canvas");
          target.innerHTML = "";
          target.appendChild(canvas);
        }
        internalState.canvas = canvas;
        const render = async (children, applicationOptions) => {
          if (!applicationState.app.renderer && !applicationState.isInitialised && !applicationState.isInitialising) {
            applicationState.isInitialising = true;
            await applicationState.app.init({
              ...applicationOptions,
              canvas
            });
            applicationState.isInitialising = false;
            applicationState.isInitialised = true;
            applicationState = { ...applicationState };
            options.onInit?.(applicationState.app);
          }
          Object.entries(applicationOptions).forEach(([key, value]) => {
            const typedKey = key;
            if (isReadOnlyProperty(
              applicationOptions,
              typedKey
            )) {
              return;
            }
            applicationState.app[typedKey] = value;
          });
          reconciler.updateContainer(
            /* @__PURE__ */ jsxRuntime.jsx(ContextProvider, { value: applicationState, children }),
            fiber,
            null,
            () => void 0
          );
          return applicationState.app;
        };
        root = {
          applicationState,
          fiber,
          internalState,
          render
        };
        roots.set(canvas, root);
      }
      return root;
    }

    "use strict";
    function unmountRoot(root) {
      store.unmountQueue.delete(root);
      const fiber = root.fiber;
      if (fiber) {
        reconciler.updateContainer(null, fiber, null, () => {
          if (root.applicationState.app) {
            root.applicationState.app.destroy();
          }
          roots.delete(root.internalState.canvas);
        });
      }
    }

    "use strict";
    function processUnmountQueue() {
      for (const root of store.unmountQueue) {
        unmountRoot(root);
      }
    }

    "use strict";
    function queueForUnmount(canvas) {
      const root = roots.get(canvas);
      if (root) {
        if (root.applicationState.isInitialised) {
          unmountRoot(root);
        } else {
          store.unmountQueue.add(root);
        }
      }
    }

    "use strict";
    function unqueueForUnmount(canvas) {
      const root = roots.get(canvas);
      if (root) {
        store.unmountQueue.delete(root);
      }
    }

    "use strict";
    const useIsomorphicLayoutEffect = typeof window !== "undefined" && (window.document?.createElement || window.navigator?.product === "ReactNative") ? o.useLayoutEffect : o.useEffect;

    "use strict";
    const originalDefaultTextStyle = { ...pixi8.TextStyle.defaultTextStyle };
    const ApplicationImplementation = o.forwardRef(function Application2(props, forwardedRef) {
      const {
        children,
        className,
        defaultTextStyle,
        extensions,
        onInit,
        resizeTo,
        ...applicationProps
      } = props;
      const Bridge = x();
      const applicationRef = o.useRef(null);
      const canvasRef = o.useRef(null);
      const extensionsRef = o.useRef(/* @__PURE__ */ new Set());
      o.useImperativeHandle(forwardedRef, () => ({
        getApplication() {
          return applicationRef.current;
        },
        getCanvas() {
          return canvasRef.current;
        }
      }));
      const updateResizeTo = o.useCallback(() => {
        const application = applicationRef.current;
        if (application) {
          if (resizeTo) {
            if ("current" in resizeTo) {
              if (resizeTo.current instanceof HTMLElement) {
                application.resizeTo = resizeTo.current;
              }
            } else {
              application.resizeTo = resizeTo;
            }
          } else {
            application.resizeTo = void 0;
          }
        }
      }, [resizeTo]);
      const handleInit = o.useCallback((application) => {
        processUnmountQueue();
        applicationRef.current = application;
        updateResizeTo();
        onInit?.(application);
      }, [onInit]);
      useIsomorphicLayoutEffect(() => {
        if (extensions) {
          const extensionsToHandle = [...extensions];
          const extensionsState = extensionsRef.current;
          for (const extension of extensionsState.values()) {
            const extensionIndex = extensionsToHandle.indexOf(extension);
            if (extensionIndex === -1) {
              pixi8.extensions.remove(extension);
              extensionsState.delete(extension);
            }
            extensionsToHandle.splice(extensionIndex, 1);
          }
          for (const extension of extensionsToHandle) {
            pixi8.extensions.add(extension);
            extensionsState.add(extension);
          }
        }
      }, [extensions]);
      useIsomorphicLayoutEffect(() => {
        const canvasElement = canvasRef.current;
        if (canvasElement) {
          let root = roots.get(canvasElement);
          if (!root) {
            root = createRoot(canvasElement, { onInit: handleInit });
          }
          root.render(/* @__PURE__ */ jsxRuntime.jsx(Bridge, { children }), applicationProps);
        }
      }, [
        applicationProps,
        children,
        handleInit,
        resizeTo
      ]);
      useIsomorphicLayoutEffect(() => {
        updateResizeTo();
      }, [resizeTo]);
      useIsomorphicLayoutEffect(() => {
        if (defaultTextStyle) {
          Object.assign(pixi8.TextStyle.defaultTextStyle, defaultTextStyle);
        } else {
          Object.assign(pixi8.TextStyle.defaultTextStyle, originalDefaultTextStyle);
        }
      }, [defaultTextStyle]);
      o.useEffect(() => {
        const canvasElement = canvasRef.current;
        if (canvasElement) {
          unqueueForUnmount(canvasElement);
          return () => {
            queueForUnmount(canvasElement);
          };
        }
      }, []);
      return /* @__PURE__ */ jsxRuntime.jsx(
        "canvas",
        {
          ref: canvasRef,
          className
        }
      );
    });
    const Application = o.forwardRef(function ApplicationWrapper(props, ref) {
      return /* @__PURE__ */ jsxRuntime.jsx(m, { children: /* @__PURE__ */ jsxRuntime.jsx(
        ApplicationImplementation,
        {
          ref,
          ...props
        }
      ) });
    });

    "use strict";

    "use strict";
    function extend(objects) {
      Object.assign(catalogue, objects);
    }

    "use strict";
    function useApplication() {
      const appContext = o.useContext(Context);
      invariant(
        appContext.app instanceof pixi8.Application,
        "No Context found with `%s`. Make sure to wrap component with `%s`",
        "Application",
        "AppProvider"
      );
      return appContext;
    }

    "use strict";
    function useExtend(objects) {
      o.useMemo(() => {
        extend(objects);
      }, [objects]);
    }

    "use strict";
    function useTick(options) {
      const {
        app,
        isInitialised
      } = useApplication();
      let callback;
      let context;
      let isEnabled = true;
      let priority;
      if (typeof options === "function") {
        callback = options;
      } else {
        callback = options.callback;
        context = options.context;
        isEnabled = options.isEnabled ?? true;
        priority = options.priority;
      }
      invariant(typeof callback === "function", "`useTick` needs a callback function.");
      useIsomorphicLayoutEffect(() => {
        if (isInitialised) {
          const ticker = app?.ticker;
          const wasEnabled = isEnabled;
          const previousContext = context;
          const previousCallback = callback;
          if (isEnabled && ticker) {
            ticker.add(callback, context, priority);
          }
          return () => {
            if (wasEnabled) {
              ticker?.remove(previousCallback, previousContext);
            }
          };
        }
      }, [
        app?.ticker,
        callback,
        context,
        isEnabled,
        isInitialised,
        priority
      ]);
    }

    "use strict";

    exports.Application = Application;
    exports.FiberProvider = m;
    exports.applyProps = applyProps;
    exports.createRoot = createRoot;
    exports.extend = extend;
    exports.traverseFiber = i;
    exports.useApplication = useApplication;
    exports.useContainer = w;
    exports.useContextBridge = x;
    exports.useContextMap = h;
    exports.useExtend = useExtend;
    exports.useFiber = c;
    exports.useNearestChild = v;
    exports.useNearestParent = y;
    exports.useTick = useTick;

}));
//# sourceMappingURL=pixi-react.js.map
