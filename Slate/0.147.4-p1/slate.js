/* eslint-disable */
// slate 0.147.4 (032bcf8f) + патчи Saby, собрано tools/slate-update
(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var req = global && global.requirejs ? global.requirejs : require;
    factory(module.exports);
  } else if (typeof define === 'function' && define.amd) {
    define(["exports"], factory);
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (exports) {
  'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

// eslint-disable-next-line no-redeclare
const PathRef = {
  transform(ref, op) {
    const {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    const path = Path.transform(current, op, {
      affinity
    });
    ref.current = path;
    if (path == null) {
      ref.unref();
    }
  }
};

// eslint-disable-next-line no-redeclare
const PointRef = {
  transform(ref, op) {
    const {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    const point = Point.transform(current, op, {
      affinity
    });
    ref.current = point;
    if (point == null) {
      ref.unref();
    }
  }
};

// eslint-disable-next-line no-redeclare
const RangeRef = {
  transform(ref, op) {
    const {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    const path = Range.transform(current, op, {
      affinity
    });
    ref.current = path;
    if (path == null) {
      ref.unref();
    }
  }
};

const DIRTY_PATHS = new WeakMap();
const DIRTY_PATH_KEYS = new WeakMap();
const FLUSHING = new WeakMap();
const NORMALIZING = new WeakMap();
const PATH_REFS = new WeakMap();
const POINT_REFS = new WeakMap();
const RANGE_REFS = new WeakMap();
const REMOTE_CHANGES = new WeakMap();

// eslint-disable-next-line no-redeclare
const Path = {
  ancestors(path, options = {}) {
    const {
      reverse = false
    } = options;
    let paths = Path.levels(path, options);
    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }
    return paths;
  },
  common(path, another) {
    const common = [];
    for (let i = 0; i < path.length && i < another.length; i++) {
      const av = path[i];
      const bv = another[i];
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
    const min = Math.min(path.length, another.length);
    for (let i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }
    return 0;
  },
  endsAfter(path, another) {
    const i = path.length - 1;
    const as = path.slice(0, i);
    const bs = another.slice(0, i);
    const av = path[i];
    const bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },
  endsAt(path, another) {
    const i = path.length;
    const as = path.slice(0, i);
    const bs = another.slice(0, i);
    return Path.equals(as, bs);
  },
  endsBefore(path, another) {
    const i = path.length - 1;
    const as = path.slice(0, i);
    const bs = another.slice(0, i);
    const av = path[i];
    const bv = another[i];
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
    return Array.isArray(value) && value.every(n => typeof n === 'number');
  },
  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }
    const as = path.slice(0, -1);
    const bs = another.slice(0, -1);
    const al = path[path.length - 1];
    const bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },
  levels(path, options = {}) {
    const {
      reverse = false
    } = options;
    const list = [];
    for (let i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
    }
    if (reverse) {
      list.reverse();
    }
    return list;
  },
  next(path) {
    if (path.length === 0) {
      throw new Error(`Cannot get the next path of a root path [${path}], because it has no next index.`);
    }
    const last = path[path.length - 1];
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
      throw new Error(`Cannot get the parent path of the root path [${path}].`);
    }
    return path.slice(0, -1);
  },
  previous(path) {
    if (path.length === 0) {
      throw new Error(`Cannot get the previous path of a root path [${path}], because it has no previous index.`);
    }
    const last = path[path.length - 1];
    if (last <= 0) {
      throw new Error(`Cannot get the previous path of a first child path [${path}] because it would result in a negative index.`);
    }
    return path.slice(0, -1).concat(last - 1);
  },
  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error(`Cannot get the relative path of [${path}] inside ancestor [${ancestor}], because it is not above or equal to the path.`);
    }
    return path.slice(ancestor.length);
  },
  transform(path, operation, options = {}) {
    if (!path) return null;
    // PERF: use destructing instead of immer
    const p = [...path];
    const {
      affinity = 'forward'
    } = options;
    // PERF: Exit early if the operation is guaranteed not to have an effect.
    if (path.length === 0) {
      return p;
    }
    switch (operation.type) {
      case 'insert_node':
        {
          const {
            path: op
          } = operation;
          if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
            p[op.length - 1] += 1;
          }
          break;
        }
      case 'remove_node':
        {
          const {
            path: op
          } = operation;
          if (Path.equals(op, p) || Path.isAncestor(op, p)) {
            return null;
          } else if (Path.endsBefore(op, p)) {
            p[op.length - 1] -= 1;
          }
          break;
        }
      case 'merge_node':
        {
          const {
            path: op,
            position
          } = operation;
          if (Path.equals(op, p) || Path.endsBefore(op, p)) {
            p[op.length - 1] -= 1;
          } else if (Path.isAncestor(op, p)) {
            p[op.length - 1] -= 1;
            p[op.length] += position;
          }
          break;
        }
      case 'split_node':
        {
          const {
            path: op,
            position
          } = operation;
          if (Path.equals(op, p)) {
            if (affinity === 'forward') {
              p[p.length - 1] += 1;
            } else if (affinity === 'backward') ; else {
              return null;
            }
          } else if (Path.endsBefore(op, p)) {
            p[op.length - 1] += 1;
          } else if (Path.isAncestor(op, p) && path[op.length] >= position) {
            p[op.length - 1] += 1;
            p[op.length] -= position;
          }
          break;
        }
      case 'move_node':
        {
          const {
            path: op,
            newPath: onp
          } = operation;
          // If the old and new path are the same, it's a no-op.
          if (Path.equals(op, onp)) {
            return p;
          }
          if (Path.isAncestor(op, p) || Path.equals(op, p)) {
            const copy = onp.slice();
            if (Path.endsBefore(op, onp) && op.length < onp.length) {
              copy[op.length - 1] -= 1;
            }
            return copy.concat(p.slice(op.length));
          } else if (Path.isSibling(op, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
            if (Path.endsBefore(op, p)) {
              p[op.length - 1] -= 1;
            } else {
              p[op.length - 1] += 1;
            }
          } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
            if (Path.endsBefore(op, p)) {
              p[op.length - 1] -= 1;
            }
            p[onp.length - 1] += 1;
          } else if (Path.endsBefore(op, p)) {
            if (Path.equals(onp, p)) {
              p[onp.length - 1] += 1;
            }
            p[op.length - 1] -= 1;
          }
          break;
        }
    }
    return p;
  }
};

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

const _excluded$4 = ["anchor", "focus"];
function ownKeys$i(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$i(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$i(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// eslint-disable-next-line no-redeclare
const Range = {
  direction(range) {
    const order = Point.compare(range.focus, range.anchor);
    return order > 0 ? 'forward' : order < 0 ? 'backward' : 'collapsed';
  },
  edges(range, options = {}) {
    const {
      reverse = false
    } = options;
    const {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },
  end(range) {
    const [, end] = Range.edges(range);
    return end;
  },
  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },
  surrounds(range, target) {
    const intersectionRange = Range.intersection(range, target);
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
      const [rs, re] = Range.edges(range);
      const [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }
    const [start, end] = Range.edges(range);
    let isAfterStart = false;
    let isBeforeEnd = false;
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
    const {
        anchor,
        focus
      } = range,
      rest = _objectWithoutProperties(range, _excluded$4);
    const [s1, e1] = Range.edges(range);
    const [s2, e2] = Range.edges(another);
    const start = Point.isBefore(s1, s2) ? s2 : s1;
    const end = Point.isBefore(e1, e2) ? e1 : e2;
    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$i({
        anchor: start,
        focus: end
      }, rest);
    }
  },
  isBackward(range) {
    const {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },
  isCollapsed(range) {
    const {
      anchor,
      focus
    } = range;
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
    const [start] = Range.edges(range);
    return start;
  },
  transform(range, op, options = {}) {
    if (range === null) {
      return null;
    }
    const {
      affinity = 'inward'
    } = options;
    let affinityAnchor;
    let affinityFocus;
    if (affinity === 'inward') {
      // If the range is collapsed, make sure to use the same affinity to
      // avoid the two points passing each other and expanding in the opposite
      // direction
      const isCollapsed = Range.isCollapsed(range);
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
    const anchor = Point.transform(range.anchor, op, {
      affinity: affinityAnchor
    });
    const focus = Point.transform(range.focus, op, {
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
const isElement = (value, {
  deep: _deep = false
} = {}) => {
  if (!isObject(value)) return false;
  // PERF: No need to use the full Editor.isEditor here
  const isEditor = typeof value.apply === 'function';
  if (isEditor) return false;
  const isChildrenValid = _deep ? Node.isNodeList(value.children) : Array.isArray(value.children);
  return isChildrenValid;
};
// eslint-disable-next-line no-redeclare
const Element = {
  isAncestor(value, {
    deep = false
  } = {}) {
    return isObject(value) && Node.isNodeList(value.children, {
      deep
    });
  },
  isElement,
  isElementList(value, {
    deep = false
  } = {}) {
    return Array.isArray(value) && value.every(val => Element.isElement(val, {
      deep
    }));
  },
  isElementProps(props) {
    return props.children !== undefined;
  },
  isElementType: (value, elementVal, elementKey = 'type') => {
    return isElement(value) && value[elementKey] === elementVal;
  },
  matches(element, props) {
    for (const key in props) {
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

const _excluded$3 = ["text"],
  _excluded2$3 = ["children"];
function ownKeys$h(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$h(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$h(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// eslint-disable-next-line no-redeclare
const Node = {
  ancestor(root, path) {
    const node = Node.get(root, path);
    if (Node.isText(node)) {
      throw new Error(`Cannot get the ancestor node at path [${path}] because it refers to a text node instead: ${Scrubber.stringify(node)}`);
    }
    return node;
  },
  *ancestors(root, path, options = {}) {
    for (const p of Path.ancestors(path, options)) {
      const n = Node.ancestor(root, p);
      const entry = [n, p];
      yield entry;
    }
  },
  child(root, index) {
    if (Node.isText(root)) {
      throw new Error(`Cannot get the child of a text node: ${Scrubber.stringify(root)}`);
    }
    if (typeof index !== 'number') {
      throw new Error('Expected index to be a number');
    }
    const c = root.children[index];
    if (c == null) {
      throw new Error(`Cannot get child at index \`${index}\` in node: ${Scrubber.stringify(root)}`);
    }
    return c;
  },
  *children(root, path, options = {}) {
    const {
      reverse = false
    } = options;
    const ancestor = Node.ancestor(root, path);
    const {
      children
    } = ancestor;
    let index = reverse ? children.length - 1 : 0;
    while (reverse ? index >= 0 : index < children.length) {
      const child = Node.child(ancestor, index);
      const childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },
  common(root, path, another) {
    const p = Path.common(path, another);
    const n = Node.get(root, p);
    return [n, p];
  },
  descendant(root, path) {
    const node = Node.get(root, path);
    if (Node.isEditor(node)) {
      throw new Error(`Cannot get the descendant node at path [${path}] because it refers to the root editor node instead: ${Scrubber.stringify(node)}`);
    }
    return node;
  },
  *descendants(root, options = {}) {
    for (const [node, path] of Node.nodes(root, options)) {
      if (path.length !== 0) {
        // NOTE: we have to coerce here because checking the path's length does
        // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
        yield [node, path];
      }
    }
  },
  *elements(root, options = {}) {
    for (const [node, path] of Node.nodes(root, options)) {
      if (Node.isElement(node)) {
        yield [node, path];
      }
    }
  },
  extractProps(node) {
    if (Node.isText(node)) {
      const {
          text
        } = node,
        properties = _objectWithoutProperties(node, _excluded$3);
      return properties;
    } else {
      const {
          children
        } = node,
        properties = _objectWithoutProperties(node, _excluded2$3);
      return properties;
    }
  },
  first(root, path) {
    const p = path.slice();
    let n = Node.get(root, p);
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
    const [rootStart, rootEnd] = Range.edges(range);
    const firstIndex = rootStart.path[0];
    const newRoot = {
      children: root.children.slice(firstIndex, rootEnd.path[0] + 1)
    };
    const toSlicedPoint = point => _objectSpread$h(_objectSpread$h({}, point), {}, {
      path: [point.path[0] - firstIndex, ...point.path.slice(1)]
    });
    const start = toSlicedPoint(rootStart);
    const end = toSlicedPoint(rootEnd);
    const slicedRange = {
      anchor: start,
      focus: end
    };
    const nodeEntries = Node.nodes(newRoot, {
      reverse: true,
      pass: ([, path]) => !Range.includes(slicedRange, path)
    });
    for (const [, path] of nodeEntries) {
      if (!Range.includes(slicedRange, path)) {
        const index = path[path.length - 1];
        modifyChildren(newRoot, Path.parent(path), children => removeChildren(children, index, 1));
      }
      if (Path.equals(path, end.path)) {
        modifyLeaf(newRoot, path, node => {
          const before = node.text.slice(0, end.offset);
          return _objectSpread$h(_objectSpread$h({}, node), {}, {
            text: before
          });
        });
      }
      if (Path.equals(path, start.path)) {
        modifyLeaf(newRoot, path, node => {
          const before = node.text.slice(start.offset);
          return _objectSpread$h(_objectSpread$h({}, node), {}, {
            text: before
          });
        });
      }
    }
    return newRoot.children;
  },
  findPath(root, node) {
    for (const [descendant, path] of Node.nodes(root)) {
      if (descendant === node) {
        return path;
      }
    }
  },
  get(root, path) {
    const node = Node.getIf(root, path);
    if (node === undefined) {
      throw new Error(`Cannot find a descendant at path [${path}] in node: ${Scrubber.stringify(root)}`);
    }
    return node;
  },
  getIf(root, path) {
    let node = root;
    for (let i = 0; i < path.length; i++) {
      const p = path[i];
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
    let node = root;
    for (let i = 0; i < path.length; i++) {
      const p = path[i];
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
  isNode(value, {
    deep = false
  } = {}) {
    return Text.isText(value) || Element.isElement(value, {
      deep
    }) || Editor.isEditor(value, {
      deep
    });
  },
  isNodeList(value, {
    deep = false
  } = {}) {
    return Array.isArray(value) && value.every(val => Node.isNode(val, {
      deep
    }));
  },
  isText(node) {
    return typeof node.text === 'string';
  },
  isNoLinkAutoWrapText(node) {
    return Node.isText(node) && !!node.noAutoLinkWrap;
  },
  last(root, path) {
    const p = path.slice();
    let n = Node.get(root, p);
    while (n) {
      if (Node.isText(n) || n.children.length === 0) {
        break;
      } else {
        const i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }
    return [n, p];
  },
  leaf(root, path) {
    const node = Node.get(root, path);
    if (!Node.isText(node)) {
      throw new Error(`Cannot get the leaf node at path [${path}] because it refers to a non-leaf node: ${Scrubber.stringify(node)}`);
    }
    return node;
  },
  *levels(root, path, options = {}) {
    for (const p of Path.levels(path, options)) {
      const n = Node.get(root, p);
      yield [n, p];
    }
  },
  matches(node, props) {
    return Node.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Node.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
  },
  *nodes(root, options = {}) {
    const {
      pass,
      reverse = false
    } = options;
    const {
      from = [],
      to
    } = options;
    const visited = new Set();
    let p = [];
    let n = root;
    while (true) {
      if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
        break;
      }
      if (!visited.has(n)) {
        yield [n, p];
      }
      // If we're allowed to go downward and we haven't descended yet, do.
      if (!visited.has(n) && !Node.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
        visited.add(n);
        let nextIndex = reverse ? n.children.length - 1 : 0;
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
        const newPath = Path.next(p);
        if (Node.has(root, newPath)) {
          p = newPath;
          n = Node.get(root, p);
          continue;
        }
      }
      // If we're going backward...
      if (reverse && p[p.length - 1] !== 0) {
        const newPath = Path.previous(p);
        p = newPath;
        n = Node.get(root, p);
        continue;
      }
      // Otherwise we're going upward...
      p = Path.parent(p);
      n = Node.get(root, p);
      visited.add(n);
    }
  },
  parent(root, path) {
    const parentPath = Path.parent(path);
    const node = Node.get(root, parentPath);
    if (Node.isText(node)) {
      // this can happen if `path` points somewhere that doesnt exist and it's where a child of a text node would be
      throw new Error(`Cannot get the parent of path [${path}] because it does not exist in the root.`);
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
  *texts(root, options = {}) {
    for (const [node, path] of Node.nodes(root, options)) {
      if (Node.isText(node)) {
        yield [node, path];
      }
    }
  }
};

function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// eslint-disable-next-line no-redeclare
const Operation = {
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
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);
      case 'merge_node':
        return typeof value.position === 'number' && Path.isPath(value.path) && isObject(value.properties);
      case 'move_node':
        return Path.isPath(value.path) && Path.isPath(value.newPath);
      case 'remove_node':
        return Path.isPath(value.path) && Node.isNode(value.node);
      case 'remove_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);
      case 'set_node':
        return Path.isPath(value.path) && isObject(value.properties) && isObject(value.newProperties);
      case 'set_selection':
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isObject(value.properties) && isObject(value.newProperties);
      case 'split_node':
        return Path.isPath(value.path) && typeof value.position === 'number' && isObject(value.properties);
      default:
        return false;
    }
  },
  isOperationList(value) {
    return Array.isArray(value) && value.every(val => Operation.isOperation(val));
  },
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_selection');
  },
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_text');
  },
  inverse(op) {
    switch (op.type) {
      case 'insert_node':
        {
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            type: 'remove_node'
          });
        }
      case 'insert_text':
        {
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            type: 'remove_text'
          });
        }
      case 'merge_node':
        {
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            type: 'split_node',
            path: Path.previous(op.path)
          });
        }
      case 'move_node':
        {
          const {
            newPath,
            path
          } = op;
          // PERF: in this case the move operation is a no-op anyways.
          if (Path.equals(newPath, path)) {
            return op;
          }
          // If the move happens completely within a single parent the path and
          // newPath are stable with respect to each other.
          if (Path.isSibling(path, newPath)) {
            return _objectSpread$g(_objectSpread$g({}, op), {}, {
              path: newPath,
              newPath: path
            });
          }
          // If the move does not happen within a single parent it is possible
          // for the move to impact the true path to the location where the node
          // was removed from and where it was inserted. We have to adjust for this
          // and find the original path. We can accomplish this (only in non-sibling)
          // moves by looking at the impact of the move operation on the node
          // after the original move path.
          const inversePath = Path.transform(path, op);
          const inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }
      case 'remove_node':
        {
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            type: 'insert_node'
          });
        }
      case 'remove_text':
        {
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            type: 'insert_text'
          });
        }
      case 'set_node':
        {
          const {
            properties,
            newProperties
          } = op;
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }
      case 'set_selection':
        {
          const {
            properties,
            newProperties
          } = op;
          if (properties == null) {
            return _objectSpread$g(_objectSpread$g({}, op), {}, {
              properties: newProperties,
              newProperties: null
            });
          } else if (newProperties == null) {
            return _objectSpread$g(_objectSpread$g({}, op), {}, {
              properties: null,
              newProperties: properties
            });
          } else {
            return _objectSpread$g(_objectSpread$g({}, op), {}, {
              properties: newProperties,
              newProperties: properties
            });
          }
        }
      case 'split_node':
        {
          return _objectSpread$g(_objectSpread$g({}, op), {}, {
            type: 'merge_node',
            path: Path.next(op.path)
          });
        }
    }
  }
};

const isObject = value => typeof value === 'object' && value !== null;

/**
 * Custom deep equal comparison for Slate nodes. Since Slate only supports plain
 * values, arrays and nested objects, we don't need a general purpose deep
 * equality check.
 *
 * Slate objects are designed to be serialised, so missing keys are deliberately
 * normalised to undefined.
 */
const isDeepEqual = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isDeepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (isObject(a) && isObject(b)) {
    for (const key in a) {
      const valueA = Object.hasOwn(a, key) ? a[key] : undefined;
      const valueB = Object.hasOwn(b, key) ? b[key] : undefined;
      if (!isDeepEqual(valueA, valueB)) return false;
    }
    // Deep object equality is only necessary in one direction; in the reverse
    // direction we are only looking for keys that are missing. As above,
    // undefined keys treated the same as missing keys.
    for (const key in b) {
      if (a[key] === undefined && b[key] !== undefined) return false;
    }
    return true;
  }
  return a === b;
};

/**
 * Get the default location to insert content into the editor.
 * By default, use the selection as the target location. But if there is
 * no selection, insert at the end of the document since that is such a
 * common use case when inserting from a non-selected state.
 */
const getDefaultInsertLocation = editor => {
  if (editor.selection) {
    return editor.selection;
  } else if (editor.children.length > 0) {
    return Editor.end(editor, []);
  } else {
    return [0];
  }
};

const matchPath = (editor, path) => {
  const [node] = Editor.node(editor, path);
  return n => n === node;
};

// Character (grapheme cluster) boundaries are determined according to
// the default grapheme cluster boundary specification, extended grapheme clusters variant[1].
//
// References:
//
// [1] https://www.unicode.org/reports/tr29/#Default_Grapheme_Cluster_Table
// [2] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakProperty.txt
// [3] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.html
// [4] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.txt
/**
 * Get the distance to the end of the first character in a string of text.
 */
const getCharacterDistance = (str, isRTL = false) => {
  const isLTR = !isRTL;
  const codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  let left = CodepointType.None;
  let right = CodepointType.None;
  let distance = 0;
  // Evaluation of these conditions are deferred.
  let gb11 = null; // Is GB11 applicable?
  let gb12Or13 = null; // Is GB12 or GB13 applicable?
  let gb9c = null; // Is GB9c applicable?
  for (const char of codepoints) {
    const code = char.codePointAt(0);
    if (!code) break;
    const type = getCodepointType(char, code);
    [left, right] = isLTR ? [right, type] : [type, left];
    if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
      if (isLTR) {
        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
      } else {
        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
      }
      if (!gb11) break;
    }
    if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
      if (gb12Or13 !== null) {
        gb12Or13 = !gb12Or13;
      } else {
        if (isLTR) {
          gb12Or13 = true;
        } else {
          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
        }
      }
      if (!gb12Or13) break;
    }
    if (intersects(left, CodepointType.InCBLinker | CodepointType.InCBExtend) && intersects(right, CodepointType.InCBConsonant)) {
      if (isLTR) {
        gb9c = endsWithConjunctLinker(str.substring(0, distance));
      } else {
        gb9c = endsWithConjunctLinker(str.substring(0, str.length - distance));
      }
      if (!gb9c) break;
    }
    if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
      break;
    }
    distance += char.length;
  }
  return distance || 1;
};
const SPACE = /\s/;
const PUNCTUATION = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
const CHAMELEON = /['\u2018\u2019]/;
const segmentWords = text => typeof Intl === 'undefined' || typeof Intl.Segmenter !== 'function' ? undefined : new Intl.Segmenter(undefined, {
  granularity: 'word'
}).segment(text);
/**
 * Get the distance to the end of the first word in a string of text.
 */
const getWordDistance = (text, isRTL = false, isWordChar) => {
  var _segmentWords;
  let dist = 0;
  let wordStart = -1;
  let rest = text;
  while (rest.length > 0) {
    const charDist = getCharacterDistance(rest, isRTL);
    const [char, remaining] = splitByCharacterDistance(rest, charDist, isRTL);
    if (isWordChar ? isWordChar(char) : isWordCharacter(char, remaining, isRTL)) {
      if (wordStart < 0) {
        wordStart = dist;
      }
    } else if (wordStart >= 0) {
      break;
    }
    dist += charDist;
    rest = remaining;
  }
  if (isWordChar || wordStart < 0) {
    return dist;
  }
  const word = isRTL ? text.slice(text.length - dist, text.length - wordStart) : text.slice(wordStart, dist);
  const segment = (_segmentWords = segmentWords(word)) === null || _segmentWords === void 0 ? void 0 : _segmentWords.containing(isRTL ? word.length - 1 : 0);
  if (!(segment !== null && segment !== void 0 && segment.isWordLike)) {
    return dist;
  }
  return isRTL ? wordStart + word.length - segment.index : wordStart + segment.segment.length;
};
const getWordBounds = (text, offset, isWordChar) => {
  const matches = (char, remaining, isRTL) => isWordChar ? isWordChar(char) : isWordCharacter(char, remaining, isRTL);
  let start = offset;
  let before = text.slice(0, offset);
  while (before.length > 0) {
    const dist = getCharacterDistance(before, true);
    const [char, remaining] = splitByCharacterDistance(before, dist, true);
    if (!matches(char, remaining, true)) {
      break;
    }
    start -= dist;
    before = remaining;
  }
  let end = offset;
  let after = text.slice(offset);
  while (after.length > 0) {
    const dist = getCharacterDistance(after);
    const [char, remaining] = splitByCharacterDistance(after, dist);
    if (!matches(char, remaining, false)) {
      break;
    }
    end += dist;
    after = remaining;
  }
  if (isWordChar || start === end) {
    return [start, end];
  }
  const segments = segmentWords(text.slice(start, end));
  const local = offset - start;
  const segment = [local > 0 ? segments === null || segments === void 0 ? void 0 : segments.containing(local - 1) : undefined, local < end - start ? segments === null || segments === void 0 ? void 0 : segments.containing(local) : undefined].find(candidate => candidate === null || candidate === void 0 ? void 0 : candidate.isWordLike);
  return segment ? [start + segment.index, start + segment.index + segment.segment.length] : [start, end];
};
/**
 * Split a string in two parts at a given distance starting from the end when
 * `isRTL` is set to `true`.
 */
const splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    const at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }
  return [str.slice(0, dist), str.slice(dist)];
};
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */
const isWordCharacter = (char, remaining, isRTL = false) => {
  if (SPACE.test(char)) {
    return false;
  }
  // Chameleons count as word characters as long as they're in a word, so
  // recurse to see if the next one is a word character or not.
  if (CHAMELEON.test(char)) {
    const charDist = getCharacterDistance(remaining, isRTL);
    const [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);
    if (isWordCharacter(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }
  if (PUNCTUATION.test(char)) {
    return false;
  }
  return true;
};
/**
 * Iterate on codepoints from right to left.
 */
const codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
  const end = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    const char1 = str.charAt(end - i);
    if (isLowSurrogate(char1.charCodeAt(0))) {
      const char2 = str.charAt(end - i - 1);
      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i++;
        continue;
      }
    }
    yield char1;
  }
};
/**
 * Is `charCode` a high surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */
const isHighSurrogate = charCode => {
  return charCode >= 0xd800 && charCode <= 0xdbff;
};
/**
 * Is `charCode` a low surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */
const isLowSurrogate = charCode => {
  return charCode >= 0xdc00 && charCode <= 0xdfff;
};
var CodepointType;
(function (CodepointType) {
  CodepointType[CodepointType["None"] = 0] = "None";
  CodepointType[CodepointType["Extend"] = 1] = "Extend";
  CodepointType[CodepointType["ZWJ"] = 2] = "ZWJ";
  CodepointType[CodepointType["RI"] = 4] = "RI";
  CodepointType[CodepointType["Prepend"] = 8] = "Prepend";
  CodepointType[CodepointType["SpacingMark"] = 16] = "SpacingMark";
  CodepointType[CodepointType["L"] = 32] = "L";
  CodepointType[CodepointType["V"] = 64] = "V";
  CodepointType[CodepointType["T"] = 128] = "T";
  CodepointType[CodepointType["LV"] = 256] = "LV";
  CodepointType[CodepointType["LVT"] = 512] = "LVT";
  CodepointType[CodepointType["ExtPict"] = 1024] = "ExtPict";
  CodepointType[CodepointType["Any"] = 2048] = "Any";
  CodepointType[CodepointType["InCBConsonant"] = 4096] = "InCBConsonant";
  CodepointType[CodepointType["InCBExtend"] = 8192] = "InCBExtend";
  CodepointType[CodepointType["InCBLinker"] = 16384] = "InCBLinker";
})(CodepointType || (CodepointType = {}));
const reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05C9\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B53-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC0\u0CC2\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AF0\u1B00-\u1B03\u1B34-\u1B3D\u1B42-\u1B44\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF3\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA953\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9C0\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDECB-\uDECF\uDEF0-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC0\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34-\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF4D\uDF57\uDF66-\uDF6C\uDF70-\uDF74\uDFB8\uDFBB-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFC9\uDFCE-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB7\uDF1D\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B-\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99\uDF60\uDF62-\uDF64\uDF66]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDDF0\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD29\uDD2D-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDE50-\uDE52\uDE5B\uDE5C\uDE5F\uDE80\uDE81]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
const rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
const reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
const reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
const reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
const reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
const reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
const reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
const reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCCF\uDCD0\uDCF6-\uDCFF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAF-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDE5F\uDE66-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFA]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDEE5\uDEE9\uDEEB-\uDEF0\uDEF3-\uDEFF\uDFDC-\uDFF0]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE58-\uDE5F\uDE6E-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
const reInCBConsonant = /^(?:[\u0915-\u0939\u0958-\u095F\u0978-\u097F\u0995-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09DC\u09DD\u09DF\u09F0\u09F1\u0A95-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0AF9\u0B15-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B5C\u0B5D\u0B5F\u0B71\u0C15-\u0C28\u0C2A-\u0C39\u0C58-\u0C5A\u0D15-\u0D3A\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1780-\u17B3\u1A20-\u1A54\u1B0B\u1B0C\u1B13-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBB-\u1BBD\uA989-\uA98B\uA98F-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA60-\uAA6F\uAA71-\uAA73\uAA7A\uAA7E\uAA7F\uAAE0-\uAAEA\uABC0-\uABDA]|\uD802[\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35]|\uD804[\uDD03-\uDD26\uDD44\uDD47\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5]|\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDE00\uDE0B-\uDE32\uDE50\uDE5C-\uDE83]|\uD807[\uDF04-\uDF10\uDF12-\uDF33])$/;
const reInCBExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC0\u0CC2\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D1\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B03\u1B34-\u1B3D\u1B42\u1B43\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8-\u1BAA\u1BAC\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF3\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA953\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD32\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC0\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34-\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF4D\uDF57\uDF66-\uDF6C\uDF70-\uDF74\uDFB8\uDFBB-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFC9\uDFCE\uDFCF\uDFD2\uDFE1\uDFE2]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB7\uDF1D\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B-\uDD3D\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDF60\uDF62-\uDF64\uDF66]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF41\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD29\uDD2D-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
const reInCBLinker = /^(?:[\u094D\u09CD\u0ACD\u0B4D\u0C4D\u0D4D\u1039\u17D2\u1A60\u1B44\u1BAB\uA9C0\uAAF6]|\uD802\uDE3F|\uD804[\uDD33\uDFD0]|\uD806[\uDD3E\uDE47\uDE99]|\uD807\uDF42)$/;
const getCodepointType = (char, code) => {
  let type = CodepointType.Any;
  if (char.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }
  if (code === 0x200d) {
    type |= CodepointType.ZWJ;
  }
  if (code >= 0x1f1e6 && code <= 0x1f1ff) {
    type |= CodepointType.RI;
  }
  if (char.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }
  if (char.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }
  if (char.search(reL) !== -1) {
    type |= CodepointType.L;
  }
  if (char.search(reV) !== -1) {
    type |= CodepointType.V;
  }
  if (char.search(reT) !== -1) {
    type |= CodepointType.T;
  }
  if (char.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }
  if (char.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }
  if (char.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }
  if (char.search(reInCBConsonant) !== -1) {
    type |= CodepointType.InCBConsonant;
  }
  if (char.search(reInCBExtend) !== -1) {
    type |= CodepointType.InCBExtend;
  }
  if (char.search(reInCBLinker) !== -1) {
    type |= CodepointType.InCBLinker;
  }
  return type;
};
function intersects(x, y) {
  return (x & y) !== 0;
}
const NonBoundaryPairs = [
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
// GB9c
[CodepointType.InCBLinker | CodepointType.InCBExtend, CodepointType.InCBConsonant],
// GB11
[CodepointType.ZWJ, CodepointType.ExtPict],
// GB12 and GB13
[CodepointType.RI, CodepointType.RI]];
function isBoundaryPair(left, right) {
  return NonBoundaryPairs.findIndex(r => intersects(left, r[0]) && intersects(right, r[1])) === -1;
}
const endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCCF\uDCD0\uDCF6-\uDCFF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAF-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDE5F\uDE66-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFA]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDEE5\uDEE9\uDEEB-\uDEF0\uDEF3-\uDEFF\uDFDC-\uDFF0]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCCF\uDCD9-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE58-\uDE5F\uDE6E-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05C9\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B53-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC0\u0CC2\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AF0\u1B00-\u1B03\u1B34-\u1B3D\u1B42-\u1B44\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF3\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA953\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9C0\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDECB-\uDECF\uDEF0-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC0\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34-\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF4D\uDF57\uDF66-\uDF6C\uDF70-\uDF74\uDFB8\uDFBB-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFC9\uDFCE-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB7\uDF1D\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B-\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99\uDF60\uDF62-\uDF64\uDF66]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDDF0\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD29\uDD2D-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDE50-\uDE52\uDE5B\uDE5C\uDE5F\uDE80\uDE81]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
const endsWithEmojiZWJ = str => {
  return str.search(endingEmojiZWJ) !== -1;
};
// GB9c: Consonant [Extend Linker]* Linker [Extend Linker]* left context.
const endingConjunctLinker = /(?:[\u0915-\u0939\u0958-\u095F\u0978-\u097F\u0995-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09DC\u09DD\u09DF\u09F0\u09F1\u0A95-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0AF9\u0B15-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B5C\u0B5D\u0B5F\u0B71\u0C15-\u0C28\u0C2A-\u0C39\u0C58-\u0C5A\u0D15-\u0D3A\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1780-\u17B3\u1A20-\u1A54\u1B0B\u1B0C\u1B13-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBB-\u1BBD\uA989-\uA98B\uA98F-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA60-\uAA6F\uAA71-\uAA73\uAA7A\uAA7E\uAA7F\uAAE0-\uAAEA\uABC0-\uABDA]|\uD802[\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35]|\uD804[\uDD03-\uDD26\uDD44\uDD47\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5]|\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDE00\uDE0B-\uDE32\uDE50\uDE5C-\uDE83]|\uD807[\uDF04-\uDF10\uDF12-\uDF33])(?:(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC0\u0CC2\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B03\u1B34-\u1B3D\u1B42-\u1B44\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF3\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA953\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9C0\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC0\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34-\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF4D\uDF57\uDF66-\uDF6C\uDF70-\uDF74\uDFB8\uDFBB-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFC9\uDFCE-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB7\uDF1D\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B-\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99\uDF60\uDF62-\uDF64\uDF66]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD29\uDD2D-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF]))*(?:[\u094D\u09CD\u0ACD\u0B4D\u0C4D\u0D4D\u1039\u17D2\u1A60\u1B44\u1BAB\uA9C0\uAAF6]|\uD802\uDE3F|\uD804[\uDD33\uDFD0]|\uD806[\uDD3E\uDE47\uDE99]|\uD807\uDF42)(?:(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC0\u0CC2\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B03\u1B34-\u1B3D\u1B42-\u1B44\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF3\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA953\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9C0\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC0\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34-\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF4D\uDF57\uDF66-\uDF6C\uDF70-\uDF74\uDFB8\uDFBB-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFC9\uDFCE-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB7\uDF1D\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B-\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99\uDF60\uDF62-\uDF64\uDF66]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD29\uDD2D-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF]))*$/;
const endsWithConjunctLinker = str => {
  return str.search(endingConjunctLinker) !== -1;
};
const endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
const endsWithOddNumberOfRIs = str => {
  const match = str.match(endingRIs);
  if (match === null) {
    return false;
  } else {
    // A RI is represented by a surrogate pair.
    const numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};

const isEditor = (value, {
  deep: _deep = false
} = {}) => {
  if (!isObject(value)) {
    return false;
  }
  const isEditor = typeof value.above === 'function' && typeof value.addMark === 'function' && typeof value.after === 'function' && typeof value.apply === 'function' && typeof value.before === 'function' && typeof value.collapse === 'function' && typeof value.delete === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.deselect === 'function' && typeof value.edges === 'function' && typeof value.elementReadOnly === 'function' && typeof value.end === 'function' && typeof value.first === 'function' && typeof value.fragment === 'function' && typeof value.getDirtyPaths === 'function' && typeof value.getFragment === 'function' && typeof value.getMarks === 'function' && typeof value.hasBlocks === 'function' && typeof value.hasInlines === 'function' && typeof value.hasPath === 'function' && typeof value.hasRange === 'function' && typeof value.hasTexts === 'function' && typeof value.insertBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertNodes === 'function' && typeof value.insertSoftBreak === 'function' && typeof value.insertText === 'function' && typeof value.isBlock === 'function' && typeof value.isEdge === 'function' && typeof value.isElementReadOnly === 'function' && typeof value.isEmpty === 'function' && typeof value.isEnd === 'function' && typeof value.isInline === 'function' && typeof value.isNormalizing === 'function' && typeof value.isSelectable === 'function' && typeof value.isStart === 'function' && typeof value.isVoid === 'function' && typeof value.last === 'function' && typeof value.leaf === 'function' && typeof value.levels === 'function' && typeof value.liftNodes === 'function' && typeof value.markableVoid === 'function' && typeof value.mergeNodes === 'function' && typeof value.move === 'function' && typeof value.moveNodes === 'function' && typeof value.next === 'function' && typeof value.node === 'function' && typeof value.nodes === 'function' && typeof value.normalize === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.parent === 'function' && typeof value.path === 'function' && typeof value.pathRef === 'function' && typeof value.pathRefs === 'function' && typeof value.point === 'function' && typeof value.pointRef === 'function' && typeof value.pointRefs === 'function' && typeof value.positions === 'function' && typeof value.previous === 'function' && typeof value.range === 'function' && typeof value.rangeRef === 'function' && typeof value.rangeRefs === 'function' && typeof value.removeMark === 'function' && typeof value.removeNodes === 'function' && typeof value.select === 'function' && typeof value.setNodes === 'function' && typeof value.setNormalizing === 'function' && typeof value.setPoint === 'function' && typeof value.setSelection === 'function' && typeof value.shouldMergeNodesRemovePrevNode === 'function' && typeof value.shouldNormalize === 'function' && typeof value.splitNodes === 'function' && typeof value.start === 'function' && typeof value.string === 'function' && typeof value.unhangRange === 'function' && typeof value.unsetNodes === 'function' && typeof value.unwrapNodes === 'function' && typeof value.void === 'function' && typeof value.withoutNormalizing === 'function' && typeof value.wrapNodes === 'function' && (value.marks === null || isObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && (_deep ? Node.isNodeList(value.children) && Operation.isOperationList(value.operations) : Array.isArray(value.children) && Array.isArray(value.operations));
  return isEditor;
};

// eslint-disable-next-line no-redeclare
const Editor = {
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
  deleteBackward(editor, options = {}) {
    const {
      unit = 'character'
    } = options;
    editor.deleteBackward(unit);
  },
  deleteForward(editor, options = {}) {
    const {
      unit = 'character'
    } = options;
    editor.deleteForward(unit);
  },
  deleteFragment(editor, options) {
    editor.deleteFragment(options);
  },
  edges(editor, at) {
    return editor.edges(at);
  },
  elementReadOnly(editor, options = {}) {
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
  hasRange(editor, range) {
    return editor.hasRange(range);
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
  insertNode(editor, node, options) {
    editor.insertNode(node, options);
  },
  insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },
  insertText(editor, text, options) {
    editor.insertText(text, options);
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
  insertionPoint(editor, point) {
    return editor.insertionPoint(point);
  },
  isIsolated(editor, element) {
    return editor.isIsolated(element);
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
  isRemoteChange(editor) {
    return REMOTE_CHANGES.get(editor) === true;
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
  word(editor, options) {
    return editor.word(options);
  },
  withoutNormalizing(editor, fn) {
    editor.withoutNormalizing(fn);
  },
  withRemoteChanges(editor, fn) {
    const previous = REMOTE_CHANGES.get(editor);
    REMOTE_CHANGES.set(editor, true);
    try {
      fn();
    } finally {
      if (previous === undefined) {
        REMOTE_CHANGES.delete(editor);
      } else {
        REMOTE_CHANGES.set(editor, previous);
      }
    }
  },
  shouldMergeNodesRemovePrevNode: (editor, prevNode, curNode) => {
    return editor.shouldMergeNodesRemovePrevNode(prevNode, curNode);
  }
};

// eslint-disable-next-line no-redeclare
const Location = {
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
// eslint-disable-next-line no-redeclare
const Span = {
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }
};

function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// eslint-disable-next-line no-redeclare
const Point = {
  compare(point, another) {
    const result = Path.compare(point.path, another.path);
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
  transform(point, op, options = {}) {
    if (point === null) {
      return null;
    }
    const {
      affinity = 'forward'
    } = options;
    let {
      path,
      offset
    } = point;
    switch (op.type) {
      case 'insert_node':
      case 'move_node':
        {
          path = Path.transform(path, op, options);
          break;
        }
      case 'insert_text':
        {
          if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === 'forward')) {
            offset += op.text.length;
          }
          break;
        }
      case 'merge_node':
        {
          if (Path.equals(op.path, path)) {
            offset += op.position;
          }
          path = Path.transform(path, op, options);
          break;
        }
      case 'remove_text':
        {
          if (Path.equals(op.path, path) && op.offset <= offset) {
            offset -= Math.min(offset - op.offset, op.text.length);
          }
          break;
        }
      case 'remove_node':
        {
          if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
            return null;
          }
          path = Path.transform(path, op, options);
          break;
        }
      case 'split_node':
        {
          if (Path.equals(op.path, path)) {
            if (op.position === offset && affinity == null) {
              return null;
            } else if (op.position < offset || op.position === offset && affinity === 'forward') {
              offset -= op.position;
              path = Path.transform(path, op, _objectSpread$f(_objectSpread$f({}, options), {}, {
                affinity: 'forward'
              }));
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

let _scrubber = undefined;
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
const Scrubber = {
  setScrubber(scrubber) {
    _scrubber = scrubber;
  },
  stringify(value) {
    return JSON.stringify(value, _scrubber);
  }
};

const _excluded$2 = ["text"],
  _excluded2$2 = ["anchor", "focus", "merge"];
function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const omitText = _ref => {
  let {
      text
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded$2);
  return rest;
};
// eslint-disable-next-line no-redeclare
const Text = {
  equals(text, another, options = {}) {
    const {
      loose = false,
      ignore = []
    } = options;
    if (ignore.length === 0) {
      return loose ? isDeepEqual(omitText(text), omitText(another)) : isDeepEqual(text, another);
    }
    const comparable = node => Object.fromEntries(Object.entries(node).filter(([key]) => !(loose && key === 'text') && !ignore.includes(key)));
    return isDeepEqual(comparable(text), comparable(another));
  },
  isText(value) {
    return isObject(value) && typeof value.text === 'string';
  },
  isTextList(value) {
    return Array.isArray(value) && value.every(val => Text.isText(val));
  },
  isTextProps(props) {
    return props.text !== undefined;
  },
  matches(text, props) {
    for (const key in props) {
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
    let leaves = [{
      leaf: _objectSpread$e({}, node)
    }];
    for (const dec of decorations) {
      const {
          anchor,
          focus,
          merge: mergeDecoration
        } = dec,
        rest = _objectWithoutProperties(dec, _excluded2$2);
      const [start, end] = Range.edges(dec);
      const next = [];
      let leafEnd = 0;
      const decorationStart = start.offset;
      const decorationEnd = end.offset;
      const merge = mergeDecoration !== null && mergeDecoration !== void 0 ? mergeDecoration : Object.assign;
      for (const {
        leaf
      } of leaves) {
        const {
          length
        } = leaf.text;
        const leafStart = leafEnd;
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
        if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
          next.push({
            leaf
          });
          continue;
        }
        // Otherwise we need to split the leaf, at the start, end, or both,
        // and add the range to the middle intersecting section. Do the end
        // split first since we don't need to update the offset that way.
        let middle = leaf;
        let before;
        let after;
        if (decorationEnd < leafEnd) {
          const off = decorationEnd - leafStart;
          after = {
            leaf: _objectSpread$e(_objectSpread$e({}, middle), {}, {
              text: middle.text.slice(off)
            })
          };
          middle = _objectSpread$e(_objectSpread$e({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }
        if (decorationStart > leafStart) {
          const off = decorationStart - leafStart;
          before = {
            leaf: _objectSpread$e(_objectSpread$e({}, middle), {}, {
              text: middle.text.slice(0, off)
            })
          };
          middle = _objectSpread$e(_objectSpread$e({}, middle), {}, {
            text: middle.text.slice(off)
          });
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
      let currentOffset = 0;
      for (const [index, item] of leaves.entries()) {
        const start = currentOffset;
        const end = start + item.leaf.text.length;
        const position = {
          start,
          end
        };
        if (index === 0) position.isFirst = true;
        if (index === leaves.length - 1) position.isLast = true;
        item.position = position;
        currentOffset = end;
      }
    }
    return leaves;
  }
};

function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const insertChildren = (children, index, ...newValues) => {
  return replaceChildren(children, index, 0, ...newValues);
};
const replaceChildren = (children, index, removeCount, ...newValues) => {
  const out = children.slice();
  out.splice(index, removeCount, ...newValues);
  return out;
};
const replaceChild = (children, index, newValue) => {
  const out = children.slice();
  out[index] = newValue;
  return out;
};
const removeChildren = replaceChildren;
/**
 * Replace a descendant with a new node, replacing all ancestors
 */
const modifyDescendant = (root, path, f) => {
  if (path.length === 0) {
    throw new Error('Cannot modify the editor');
  }
  const node = Node.get(root, path);
  const slicedPath = path.slice();
  let modifiedNode = f(node);
  while (slicedPath.length > 1) {
    const _index = slicedPath.pop();
    const ancestorNode = Node.get(root, slicedPath);
    modifiedNode = _objectSpread$d(_objectSpread$d({}, ancestorNode), {}, {
      children: replaceChild(ancestorNode.children, _index, modifiedNode)
    });
  }
  const index = slicedPath[0];
  root.children = replaceChild(root.children, index, modifiedNode);
};
/**
 * Replace the children of a node, replacing all ancestors
 */
const modifyChildren = (root, path, f) => {
  if (path.length === 0) {
    root.children = f(root.children);
  } else {
    modifyDescendant(root, path, node => {
      if (Node.isText(node)) {
        throw new Error(`Cannot get the element at path [${path}] because it refers to a leaf node: ${Scrubber.stringify(node)}`);
      }
      return _objectSpread$d(_objectSpread$d({}, node), {}, {
        children: f(node.children)
      });
    });
  }
};
/**
 * Replace a leaf, replacing all ancestors
 */
const modifyLeaf = (root, path, f) => modifyDescendant(root, path, node => {
  if (!Node.isText(node)) {
    throw new Error(`Cannot get the leaf node at path [${path}] because it refers to a non-leaf node: ${Scrubber.stringify(node)}`);
  }
  return f(node);
});

function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * The set of properties that cannot be set using set_node.
 */
const NON_SETTABLE_NODE_PROPERTIES = ['children', 'text',
// Do not allow overriding any property on the Object prototype
...Object.getOwnPropertyNames(Object.prototype)];
/**
 * The set of properties that cannot be set using set_selection.
 */
const NON_SETTABLE_SELECTION_PROPERTIES = Object.getOwnPropertyNames(Object.prototype);
// eslint-disable-next-line no-redeclare
const GeneralTransforms = {
  transform(editor, op) {
    let transformSelection = false;
    switch (op.type) {
      case 'insert_node':
        {
          const {
            path,
            node
          } = op;
          modifyChildren(editor, Path.parent(path), children => {
            const index = path[path.length - 1];
            if (index > children.length) {
              throw new Error(`Cannot apply an "insert_node" operation at path [${path}] because the destination is past the end of the node.`);
            }
            return insertChildren(children, index, node);
          });
          transformSelection = true;
          break;
        }
      case 'insert_text':
        {
          const {
            path,
            offset,
            text
          } = op;
          if (text.length === 0) break;
          modifyLeaf(editor, path, node => {
            const before = node.text.slice(0, offset);
            const after = node.text.slice(offset);
            return _objectSpread$c(_objectSpread$c({}, node), {}, {
              text: before + text + after
            });
          });
          transformSelection = true;
          break;
        }
      case 'merge_node':
        {
          const {
            path
          } = op;
          const index = path[path.length - 1];
          const prevPath = Path.previous(path);
          const prevIndex = prevPath[prevPath.length - 1];
          if (path.length === 0) {
            throw new Error(`Cannot apply a "merge_node" operation at path [${path}] because the root node cannot be merged.`);
          }
          // Defend against malicious paths containing strings
          if (typeof index !== 'number' || typeof prevIndex !== 'number') throw new Error('Index must be number');
          modifyChildren(editor, Path.parent(path), children => {
            const node = children[index];
            const prev = children[prevIndex];
            let newNode;
            if (Node.isText(node) && Node.isText(prev)) {
              newNode = _objectSpread$c(_objectSpread$c({}, prev), {}, {
                text: prev.text + node.text
              });
            } else if (Node.isElement(node) && Node.isElement(prev)) {
              newNode = _objectSpread$c(_objectSpread$c({}, prev), {}, {
                children: prev.children.concat(node.children)
              });
            } else {
              throw new Error(`Cannot apply a "merge_node" operation at path [${path}] to nodes of different interfaces: ${Scrubber.stringify(node)} ${Scrubber.stringify(prev)}`);
            }
            return replaceChildren(children, prevIndex, 2, newNode);
          });
          transformSelection = true;
          break;
        }
      case 'move_node':
        {
          const {
            path,
            newPath
          } = op;
          const index = path[path.length - 1];
          if (Path.isAncestor(path, newPath)) {
            throw new Error(`Cannot move a path [${path}] to new path [${newPath}] because the destination is inside itself.`);
          }
          const node = Node.get(editor, path);
          modifyChildren(editor, Path.parent(path), children => removeChildren(children, index, 1));
          // This is tricky, but since the `path` and `newPath` both refer to
          // the same snapshot in time, there's a mismatch. After either
          // removing the original position, the second step's path can be out
          // of date. So instead of using the `op.newPath` directly, we
          // transform `op.path` to ascertain what the `newPath` would be after
          // the operation was applied.
          const truePath = Path.transform(path, op);
          const newIndex = truePath[truePath.length - 1];
          modifyChildren(editor, Path.parent(truePath), children => insertChildren(children, newIndex, node));
          transformSelection = true;
          break;
        }
      case 'remove_node':
        {
          const {
            path
          } = op;
          const index = path[path.length - 1];
          modifyChildren(editor, Path.parent(path), children => removeChildren(children, index, 1));
          // Transform all the points in the value, but if the point was in the
          // node that was removed we need to update the range or remove it.
          if (editor.selection) {
            let selection = _objectSpread$c({}, editor.selection);
            for (const [point, key] of Range.points(selection)) {
              const result = Point.transform(point, op);
              if (selection != null && result != null) {
                selection[key] = result;
              } else {
                let prev;
                let next;
                for (const [n, p] of Node.texts(editor)) {
                  if (Path.compare(p, path) === -1) {
                    prev = [n, p];
                  } else {
                    next = [n, p];
                    break;
                  }
                }
                let preferNext = false;
                if (prev && next) {
                  if (Path.isSibling(prev[1], path)) {
                    preferNext = false;
                  } else if (Path.equals(next[1], path)) {
                    preferNext = true;
                  } else {
                    preferNext = Path.common(prev[1], path).length < Path.common(next[1], path).length;
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
      case 'remove_text':
        {
          const {
            path,
            offset,
            text
          } = op;
          if (text.length === 0) break;
          modifyLeaf(editor, path, node => {
            const before = node.text.slice(0, offset);
            const after = node.text.slice(offset + text.length);
            return _objectSpread$c(_objectSpread$c({}, node), {}, {
              text: before + after
            });
          });
          transformSelection = true;
          break;
        }
      case 'set_node':
        {
          const {
            path,
            properties,
            newProperties
          } = op;
          if (path.length === 0) {
            throw new Error(`Cannot set properties on the root node!`);
          }
          modifyDescendant(editor, path, node => {
            const newNode = _objectSpread$c({}, node);
            for (const key in newProperties) {
              if (NON_SETTABLE_NODE_PROPERTIES.includes(key)) {
                throw new Error(`Cannot set the "${key}" property of nodes!`);
              }
              const value = newProperties[key];
              // Make sure we're not setting `then` to a function, since this will
              // cause the node to be treated as a Promise-like object, which can
              // cause unexpected behaviour when returning the node from async
              // functions.
              if (key === 'then' && typeof value === 'function') {
                throw new Error('Cannot set the "then" property of a node to a function');
              }
              if (value == null) {
                delete newNode[key];
              } else {
                newNode[key] = value;
              }
            }
            // properties that were previously defined, but are now missing, must be deleted
            for (const key in properties) {
              if (!Object.hasOwn(newProperties, key)) {
                delete newNode[key];
              }
            }
            return newNode;
          });
          break;
        }
      case 'set_selection':
        {
          const {
            newProperties
          } = op;
          if (newProperties == null) {
            editor.selection = null;
            break;
          }
          if (editor.selection == null) {
            if (!(newProperties.anchor && newProperties.focus)) {
              throw new Error(`Cannot apply an incomplete "set_selection" operation properties ${Scrubber.stringify(newProperties)} when there is no current selection.`);
            }
            editor.selection = _objectSpread$c({}, newProperties);
            break;
          }
          const selection = _objectSpread$c({}, editor.selection);
          for (const key in newProperties) {
            if (NON_SETTABLE_SELECTION_PROPERTIES.includes(key)) {
              throw new Error(`Cannot set the "${key}" property of the selection!`);
            }
            const value = newProperties[key];
            // Make sure we're not setting `then` to a function, since this will
            // cause the selection to be treated as a Promise-like object, which
            // can cause unexpected behaviour when returning the selection from
            // async functions.
            if (key === 'then' && typeof value === 'function') {
              throw new Error('Cannot set the "then" property of the selection to a function');
            }
            if (value == null) {
              if (key === 'anchor' || key === 'focus') {
                throw new Error(`Cannot remove the "${key}" selection property`);
              }
              delete selection[key];
            } else {
              selection[key] = value;
            }
          }
          editor.selection = selection;
          break;
        }
      case 'split_node':
        {
          const {
            path,
            position,
            properties
          } = op;
          const index = path[path.length - 1];
          if (path.length === 0) {
            throw new Error(`Cannot apply a "split_node" operation at path [${path}] because the root node cannot be split.`);
          }
          // Defend against malicious paths containing strings
          if (typeof index !== 'number') throw new Error('Index must be number');
          modifyChildren(editor, Path.parent(path), children => {
            const node = children[index];
            let newNode;
            let nextNode;
            if (Node.isText(node)) {
              const before = node.text.slice(0, position);
              const after = node.text.slice(position);
              newNode = _objectSpread$c(_objectSpread$c({}, node), {}, {
                text: before
              });
              nextNode = {
                text: after
              };
            } else {
              const before = node.children.slice(0, position);
              const after = node.children.slice(position);
              newNode = _objectSpread$c(_objectSpread$c({}, node), {}, {
                children: before
              });
              nextNode = {
                children: after
              };
            }
            for (const key in properties) {
              if (NON_SETTABLE_NODE_PROPERTIES.includes(key)) {
                throw new Error(`Cannot set the "${key}" property of nodes!`);
              }
              const value = properties[key];
              // Make sure we're not setting `then` to a function, since this will
              // cause the node to be treated as a Promise-like object, which can
              // cause unexpected behaviour when returning the node from async
              // functions.
              if (key === 'then' && typeof value === 'function') {
                throw new Error('Cannot set the "then" property of a node to a function');
              }
              if (value != null) {
                nextNode[key] = value;
              }
            }
            return replaceChildren(children, index, 1, newNode, nextNode);
          });
          transformSelection = true;
          break;
        }
    }
    if (transformSelection && editor.selection) {
      const selection = _objectSpread$c({}, editor.selection);
      const remoteSelection = Editor.isRemoteChange(editor) && Range.isExpanded(selection) ? Range.transform(selection, op, {
        affinity: 'inward'
      }) : null;
      for (const [point, key] of Range.points(selection)) {
        selection[key] = remoteSelection ? remoteSelection[key] : Point.transform(point, op);
      }
      if (!Range.equals(selection, editor.selection)) {
        editor.selection = selection;
      }
    }
  }
};

// eslint-disable-next-line no-redeclare
const NodeTransforms = {
  setChildren(editor, children) {
    editor.setChildren(children);
  },
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
const SelectionTransforms = {
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
const TextTransforms = {
  delete(editor, options) {
    editor.delete(options);
  },
  insertFragment(editor, fragment, options) {
    editor.insertFragment(fragment, options);
  },
  insertText(editor, text, options = {}) {
    Editor.withoutNormalizing(editor, () => {
      const {
        voids = false,
        select = false
      } = options;
      let {
        at = getDefaultInsertLocation(editor)
      } = options;
      if (Location.isPath(at)) {
        at = Editor.range(editor, at);
      }
      if (Location.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          const _end = Range.end(at);
          if (!voids && Editor.void(editor, {
            at: _end
          })) {
            return;
          }
          const start = Range.start(at);
          const startRef = Editor.pointRef(editor, start);
          const _endRef = Editor.pointRef(editor, _end);
          Transforms.delete(editor, {
            at,
            voids
          });
          const startPoint = startRef.unref();
          const endPoint = _endRef.unref();
          at = startPoint || endPoint;
          if (options.select !== false) Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }
      if (!voids && Editor.void(editor, {
        at
      }) || Editor.elementReadOnly(editor, {
        at
      })) {
        return;
      }
      const endRef = select ? Editor.pointRef(editor, at) : undefined;
      const {
        path,
        offset
      } = at;
      if (text.length > 0) editor.apply({
        type: 'insert_text',
        path,
        offset,
        text
      });
      const end = endRef === null || endRef === void 0 ? void 0 : endRef.unref();
      if (end) Transforms.select(editor, end);
    });
  }
};

function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const Transforms = _objectSpread$b(_objectSpread$b(_objectSpread$b(_objectSpread$b({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

// perf
const BATCHING_DIRTY_PATHS = new WeakMap();
const isBatchingDirtyPaths = editor => {
  return BATCHING_DIRTY_PATHS.get(editor) || false;
};
const batchDirtyPaths = (editor, fn, update) => {
  const value = BATCHING_DIRTY_PATHS.get(editor) || false;
  BATCHING_DIRTY_PATHS.set(editor, true);
  try {
    fn();
    update();
  } finally {
    BATCHING_DIRTY_PATHS.set(editor, value);
  }
};

const SCAN_LIMIT = 8;
/**
 * update editor dirty paths
 *
 * @param newDirtyPaths: Path[]; new dirty paths
 * @param transform: (p: Path) => Path | null; how to transform existing dirty paths
 */
function updateDirtyPaths(editor, newDirtyPaths, transform, distinct = false) {
  let dirtyPaths = DIRTY_PATHS.get(editor) || [];
  let dirtyPathKeys = DIRTY_PATH_KEYS.get(editor);
  const add = path => {
    if (path) {
      const key = path.join(',');
      if (!dirtyPathKeys.has(key)) {
        dirtyPathKeys.add(key);
        dirtyPaths.push(path);
      }
    }
  };
  if (transform) {
    const oldDirtyPaths = dirtyPaths;
    dirtyPaths = [];
    if (distinct) {
      dirtyPathKeys = undefined;
      for (const path of oldDirtyPaths) {
        const newPath = transform(path);
        if (newPath) {
          dirtyPaths.push(newPath);
        }
      }
    } else {
      dirtyPathKeys = new Set();
      for (const path of oldDirtyPaths) {
        add(transform(path));
      }
    }
  }
  if (!dirtyPathKeys && (newDirtyPaths.length > SCAN_LIMIT || !transform && dirtyPaths.length > SCAN_LIMIT)) {
    dirtyPathKeys = new Set(dirtyPaths.map(path => path.join(',')));
  }
  for (const path of newDirtyPaths) {
    if (dirtyPathKeys) {
      add(path);
    } else if (!dirtyPaths.some(dirtyPath => Path.equals(dirtyPath, path))) {
      dirtyPaths.push(path);
    }
  }
  DIRTY_PATHS.set(editor, dirtyPaths);
  if (dirtyPathKeys) {
    DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
  } else {
    DIRTY_PATH_KEYS.delete(editor);
  }
}

const apply = (editor, op) => {
  for (const ref of Editor.pathRefs(editor)) {
    PathRef.transform(ref, op);
  }
  for (const ref of Editor.pointRefs(editor)) {
    PointRef.transform(ref, op);
  }
  for (const ref of Editor.rangeRefs(editor)) {
    RangeRef.transform(ref, op);
  }
  // update dirty paths
  if (!isBatchingDirtyPaths(editor)) {
    const transform = Path.operationCanTransformPath(op) ? p => Path.transform(p, op) : undefined;
    updateDirtyPaths(editor, editor.getDirtyPaths(op), transform, op.type !== 'merge_node');
  }
  Transforms.transform(editor, op);
  editor.operations.push(op);
  Editor.normalize(editor, {
    operation: op
  });
  // Clear any formats applied to the cursor if the selection changes.
  if (op.type === 'set_selection') {
    editor.marks = null;
  }
  if (!FLUSHING.get(editor)) {
    FLUSHING.set(editor, true);
    Promise.resolve().then(() => {
      FLUSHING.set(editor, false);
      editor.onChange({
        operation: op
      });
      editor.operations = [];
    });
  }
};

/**
 * Get the "dirty" paths generated from an operation.
 */
const getDirtyPaths = (editor, op) => {
  switch (op.type) {
    case 'insert_text':
    case 'remove_text':
    case 'set_node':
      {
        const {
          path
        } = op;
        return Path.levels(path);
      }
    case 'insert_node':
      {
        const {
          node,
          path
        } = op;
        const levels = Path.levels(path);
        const descendants = Node.isText(node) ? [] : Array.from(Node.nodes(node), ([, p]) => path.concat(p));
        return [...levels, ...descendants];
      }
    case 'merge_node':
      {
        const {
          path
        } = op;
        const ancestors = Path.ancestors(path);
        const previousPath = Path.previous(path);
        return [...ancestors, previousPath];
      }
    case 'move_node':
      {
        const {
          path,
          newPath
        } = op;
        if (Path.equals(path, newPath)) {
          return [];
        }
        const oldAncestors = [];
        const newAncestors = [];
        for (const ancestor of Path.ancestors(path)) {
          const p = Path.transform(ancestor, op);
          oldAncestors.push(p);
        }
        for (const ancestor of Path.ancestors(newPath)) {
          const p = Path.transform(ancestor, op);
          newAncestors.push(p);
        }
        const newParent = newAncestors[newAncestors.length - 1];
        const newIndex = newPath[newPath.length - 1];
        const resultPath = newParent.concat(newIndex);
        return [...oldAncestors, ...newAncestors, resultPath];
      }
    case 'remove_node':
      {
        const {
          path
        } = op;
        const ancestors = Path.ancestors(path);
        return [...ancestors];
      }
    case 'split_node':
      {
        const {
          path
        } = op;
        const levels = Path.levels(path);
        const nextPath = Path.next(path);
        return [...levels, nextPath];
      }
    default:
      {
        return [];
      }
  }
};

const getFragment = editor => {
  const {
    selection
  } = editor;
  if (selection) {
    return Node.fragment(editor, selection);
  }
  return [];
};

const getSplitProperties = (editor, node) => Node.extractProps(node);

const normalizeNode = (editor, entry, options) => {
  const [node, path] = entry; // node is not yet normalized, treat as hostile
  // There are no core normalizations for text nodes.
  if (Node.isText(node)) {
    return;
  }
  if (!('children' in node)) {
    node.children = [];
  }
  let element = node; // we will have to refetch the element any time we modify its children since it clones to a new immutable reference when we do
  // Ensure that elements have at least one child.
  if (element !== editor && element.children.length === 0) {
    const child = {
      text: ''
    };
    Transforms.insertNodes(editor, child, {
      at: path.concat(0),
      voids: true
    });
    element = Node.get(editor, path);
  }
  // Determine whether the node should have only block or only inline children.
  // - The editor should have only block children.
  // - Inline elements should have only inline children.
  // - Elements that begin with a text child or an inline element child should have only inline children.
  // - All other elements should have only block children.
  const shouldHaveInlines = !(element === editor) && (editor.isInline(element) || Node.isText(element.children[0]) || editor.isInline(element.children[0]));
  if (shouldHaveInlines) {
    // Since we'll be applying operations while iterating, we also modify `n` when adding/removing nodes.
    for (let n = 0; n < element.children.length; n++) {
      const child = element.children[n];
      const prev = element.children[n - 1];
      if (Node.isText(child)) {
        // ПРОПАТЧЕНО (Saby): текст без автоссылки не склеиваем с соседями.
        // https://online.saby.ru/opendoc.html?guid=230cdb08-b334-43f0-b1fd-22fcbf6635ef&client=3
        if (prev != null && Node.isText(prev) && !Node.isNoLinkAutoWrapText(child) && !Node.isNoLinkAutoWrapText(prev)) {
          // Merge adjacent text nodes that are empty or match.
          if (child.text === '') {
            Transforms.removeNodes(editor, {
              at: path.concat(n),
              voids: true
            });
            element = Node.get(editor, path);
            n--;
          } else if (prev.text === '') {
            Transforms.removeNodes(editor, {
              at: path.concat(n - 1),
              voids: true
            });
            element = Node.get(editor, path);
            n--;
          } else if (Text.equals(child, prev, {
            loose: true
          })) {
            Transforms.mergeNodes(editor, {
              at: path.concat(n),
              voids: true
            });
            element = Node.get(editor, path);
            n--;
          }
        }
      } else {
        if (editor.isInline(child)) {
          // Ensure that inline nodes are surrounded by text nodes.
          if (prev == null || !Node.isText(prev)) {
            const newChild = {
              text: ''
            };
            Transforms.insertNodes(editor, newChild, {
              at: path.concat(n),
              voids: true
            });
            element = Node.get(editor, path);
            n++;
          }
          if (n === element.children.length - 1) {
            const newChild = {
              text: ''
            };
            Transforms.insertNodes(editor, newChild, {
              at: path.concat(n + 1),
              voids: true
            });
            element = Node.get(editor, path);
            n++;
          }
        } else {
          // Allow only inline nodes to be in other inline nodes, or in parent blocks that only
          // contain inlines and text.
          Transforms.unwrapNodes(editor, {
            at: path.concat(n),
            voids: true
          });
          element = Node.get(editor, path);
          n--;
        }
      }
    }
  } else {
    // Since we'll be applying operations while iterating, we also modify `n` when adding/removing nodes
    for (let n = 0; n < element.children.length; n++) {
      const child = element.children[n];
      // Allow only block nodes in the top-level children and parent blocks that only contain block nodes
      if (Node.isText(child) || editor.isInline(child)) {
        if (options !== null && options !== void 0 && options.fallbackElement) {
          Transforms.wrapNodes(editor, options.fallbackElement(), {
            at: path.concat(n),
            voids: true
          });
        } else {
          Transforms.removeNodes(editor, {
            at: path.concat(n),
            voids: true
          });
        }
        element = Node.get(editor, path);
        n--;
      }
    }
  }
};

const shouldNormalize = (editor, {
  iteration,
  initialDirtyPathsLength,
  dirtyPaths
}) => {
  const maxIterations = initialDirtyPathsLength * 42; // HACK: better way?
  if (iteration > maxIterations) {
    throw new Error(`Could not completely normalize the editor after ${maxIterations} iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state. Next dirty path: [${dirtyPaths[dirtyPaths.length - 1]}]. Check the normalizeNode logic for this node and its ancestors.`);
  }
  return true;
};

const above = (editor, options = {}) => {
  const {
    voids = false,
    mode = 'lowest',
    at = editor.selection,
    match
  } = options;
  if (!at) {
    return;
  }
  let path = Editor.path(editor, at);
  // If `at` is a Range that spans mulitple nodes, `path` will be their common ancestor.
  // Otherwise `path` will be a text node and/or the same as `at`, in which cases we want to start with its parent.
  if (!Location.isRange(at) || Path.equals(at.focus.path, at.anchor.path)) {
    if (path.length === 0) return;
    path = Path.parent(path);
  }
  const reverse = mode === 'lowest';
  const [firstMatch] = Editor.levels(editor, {
    at: path,
    voids,
    match,
    reverse
  });
  return firstMatch; // if nothing matches this returns undefined
};

function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const addMark = (editor, key, value) => {
  const {
    selection
  } = editor;
  if (selection) {
    const match = (node, path) => {
      if (!Node.isText(node)) {
        return false; // marks can only be applied to text
      }
      const [parentNode, parentPath] = Editor.parent(editor, path);
      return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
    };
    const expandedSelection = Range.isExpanded(selection);
    let markAcceptingVoidSelected = false;
    if (!expandedSelection) {
      const [selectedNode, selectedPath] = Editor.node(editor, selection);
      if (selectedNode && match(selectedNode, selectedPath)) {
        const [parentNode] = Editor.parent(editor, selectedPath);
        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
      }
    }
    if (expandedSelection || markAcceptingVoidSelected) {
      Transforms.setNodes(editor, {
        [key]: value
      }, {
        match,
        split: true,
        voids: true
      });
    } else {
      const marks = _objectSpread$a(_objectSpread$a({}, Editor.marks(editor) || {}), {}, {
        [key]: value
      });
      editor.marks = marks;
      if (!FLUSHING.get(editor)) {
        editor.onChange();
      }
    }
  }
};

function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const after = (editor, at, options = {}) => {
  const anchor = Editor.point(editor, at, {
    edge: 'end'
  });
  const focus = Editor.end(editor, []);
  const range = {
    anchor,
    focus
  };
  const {
    distance = 1
  } = options;
  let d = 0;
  let target;
  for (const p of Editor.positions(editor, _objectSpread$9(_objectSpread$9({}, options), {}, {
    at: range
  }))) {
    if (d > distance) {
      break;
    }
    if (d !== 0) {
      target = p;
    }
    d++;
  }
  return target;
};

function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const before = (editor, at, options = {}) => {
  const anchor = Editor.start(editor, []);
  const focus = Editor.point(editor, at, {
    edge: 'start'
  });
  const range = {
    anchor,
    focus
  };
  const {
    distance = 1
  } = options;
  let d = 0;
  let target;
  for (const p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
    at: range,
    reverse: true
  }))) {
    if (d > distance) {
      break;
    }
    if (d !== 0) {
      target = p;
    }
    d++;
  }
  return target;
};

const deleteBackward = (editor, unit) => {
  const {
    selection
  } = editor;
  if (selection && Range.isCollapsed(selection)) {
    Transforms.delete(editor, {
      unit,
      reverse: true
    });
  }
};

const deleteForward = (editor, unit) => {
  const {
    selection
  } = editor;
  if (selection && Range.isCollapsed(selection)) {
    Transforms.delete(editor, {
      unit
    });
  }
};

const deleteFragment = (editor, {
  direction: _direction = 'forward'
} = {}) => {
  const {
    selection
  } = editor;
  if (selection && Range.isExpanded(selection)) {
    const [start, end] = Range.edges(selection);
    const blockAt = at => {
      var _Editor$above;
      return (_Editor$above = Editor.above(editor, {
        at,
        match: n => Node.isElement(n) && Editor.isBlock(editor, n)
      })) === null || _Editor$above === void 0 ? void 0 : _Editor$above[1];
    };
    const startBlock = blockAt(start);
    const endBlock = blockAt(end);
    const isolated = Editor.above(editor, {
      at: start,
      match: n => Node.isElement(n) && editor.isIsolated(n)
    });
    if (!isolated && startBlock && endBlock && startBlock.length === 1 && Path.isSibling(startBlock, endBlock) && Path.isBefore(startBlock, endBlock) && !Editor.isVoid(editor, Node.get(editor, endBlock)) && Editor.isStart(editor, start, startBlock) && Editor.isStart(editor, end, endBlock)) {
      const following = Editor.pathRef(editor, endBlock);
      Editor.withoutNormalizing(editor, () => {
        for (let index = endBlock[endBlock.length - 1] - 1; index >= startBlock[startBlock.length - 1]; index--) {
          Transforms.removeNodes(editor, {
            at: [...Path.parent(startBlock), index]
          });
        }
      });
      const path = following.unref();
      if (path) Transforms.select(editor, Editor.start(editor, path));
      return;
    }
    Transforms.delete(editor, {
      reverse: _direction === 'backward'
    });
  }
};

const edges$1 = (editor, at) => {
  return [Editor.start(editor, at), Editor.end(editor, at)];
};

function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const elementReadOnly = (editor, options = {}) => {
  return Editor.above(editor, _objectSpread$7(_objectSpread$7({}, options), {}, {
    match: n => Node.isElement(n) && Editor.isElementReadOnly(editor, n)
  }));
};

const end = (editor, at) => {
  return Editor.point(editor, at, {
    edge: 'end'
  });
};

const first = (editor, at) => {
  const path = Editor.path(editor, at, {
    edge: 'start'
  });
  return Editor.node(editor, path);
};

const fragment = (editor, at) => {
  const range = Editor.range(editor, at);
  return Node.fragment(editor, range);
};

function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const getVoid = (editor, options = {}) => {
  return Editor.above(editor, _objectSpread$6(_objectSpread$6({}, options), {}, {
    match: n => Node.isElement(n) && Editor.isVoid(editor, n)
  }));
};

const hasBlocks = (editor, element) => {
  return element.children.some(n => Node.isElement(n) && Editor.isBlock(editor, n));
};

const hasInlines = (editor, element) => {
  return element.children.some(n => Node.isText(n) || Editor.isInline(editor, n));
};

const hasPath = (editor, path) => {
  return Node.has(editor, path);
};

const hasRange = (editor, range) => {
  const {
    anchor,
    focus
  } = range;
  return Editor.hasPath(editor, anchor.path) && Editor.hasPath(editor, focus.path);
};

const hasTexts = (editor, element) => {
  return element.children.every(n => Node.isText(n));
};

const insertBreak = editor => {
  Transforms.splitNodes(editor, {
    always: true
  });
};

const insertNode = (editor, node, options) => {
  Transforms.insertNodes(editor, node, options);
};

const insertSoftBreak = editor => {
  Transforms.splitNodes(editor, {
    always: true
  });
};

function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const insertText = (editor, text, options = {}) => {
  const {
    selection,
    marks
  } = editor;
  if (options.at != null) {
    Transforms.insertText(editor, text, options);
    return;
  }
  if (selection) {
    if (Range.isCollapsed(selection)) {
      const point = Editor.insertionPoint(editor, selection.anchor);
      if (!Point.equals(point, selection.anchor)) Transforms.select(editor, point);
    }
    if (marks) {
      const node = _objectSpread$5({
        text
      }, marks);
      Transforms.insertNodes(editor, node, {
        voids: options.voids
      });
    } else {
      Transforms.insertText(editor, text, options);
    }
    editor.marks = null;
  }
};

const inlineInsertionPoint = (editor, point) => {
  const inline = Editor.above(editor, {
    at: point,
    match: (n, path) => Element.isElement(n) && editor.isInline(n) && Editor.isEdge(editor, point, path),
    mode: 'highest',
    voids: true
  });
  let outside = point;
  if (inline) {
    const [, path] = inline;
    if (Editor.isStart(editor, point, path) && Path.hasPrevious(path)) {
      const _previous = Path.previous(path);
      if (!Text.isText(Node.getIf(editor, _previous))) return null;
      outside = Editor.end(editor, _previous);
    } else if (Editor.isEnd(editor, point, path)) {
      const next = Path.next(path);
      if (!Text.isText(Node.getIf(editor, next))) return null;
      outside = Editor.start(editor, next);
    } else {
      return null;
    }
  }
  const parent = Node.parent(editor, outside.path);
  let index = outside.path[outside.path.length - 1];
  const emptyInline = node => Element.isElement(node) && editor.isInline(node) && !editor.isVoid(node) && Node.string(node) === '';
  while (outside.offset === 0 && index > 1 && emptyInline(parent.children[index - 1]) && Text.isText(parent.children[index - 2])) {
    index -= 2;
    outside = Editor.end(editor, Path.parent(outside.path).concat(index));
  }
  const candidates = [];
  const previous = parent.children[index - 1];
  if (outside.offset === 0 && Element.isElement(previous) && editor.isInline(previous)) {
    candidates.push([previous, Path.previous(outside.path), 'end']);
  }
  let [leaf] = Editor.leaf(editor, outside);
  if (outside.offset === leaf.text.length) {
    while (index + 1 < parent.children.length) {
      const next = parent.children[index + 1];
      if (!Element.isElement(next) || !editor.isInline(next)) break;
      candidates.push([next, Path.parent(outside.path).concat(index + 1), 'start']);
      const nextLeaf = parent.children[index + 2];
      if (!emptyInline(next) || !Text.isText(nextLeaf)) break;
      index += 2;
      leaf = nextLeaf;
      if (leaf.text.length) break;
    }
  }
  for (const [element, path, edge] of candidates) {
    const affinity = editor.inlineEdgeAffinity(element, edge);
    if (affinity === null) continue;
    if (affinity === 'inside' && (editor.isVoid(element) || editor.isElementReadOnly(element) || !editor.isSelectable(element))) continue;
    return {
      point: affinity === 'outside' ? outside : edge === 'start' ? Editor.start(editor, path) : Editor.end(editor, path),
      affinity
    };
  }
  return null;
};
const getInsertionPoint = (editor, point) => {
  var _inline$point, _inline$affinity;
  if (!Text.isText(Node.getIf(editor, point.path))) {
    return {
      point,
      affinity: false,
      inlineAffinity: null
    };
  }
  const inline = inlineInsertionPoint(editor, point);
  let result = (_inline$point = inline === null || inline === void 0 ? void 0 : inline.point) !== null && _inline$point !== void 0 ? _inline$point : point;
  let affinity = inline !== null;
  const [node] = Editor.leaf(editor, result);
  const siblings = Node.parent(editor, result.path).children;
  const index = result.path[result.path.length - 1];
  const previous = siblings[index - 1];
  const next = siblings[index + 1];
  let pair;
  if (result.offset === 0 && Text.isText(previous)) {
    pair = [previous, node, Path.previous(result.path), result.path];
  } else if (result.offset === node.text.length && Text.isText(next)) {
    pair = [node, next, result.path, Path.next(result.path)];
  }
  if (pair) {
    const [before, after, beforePath, afterPath] = pair;
    const value = editor.leafEdgeAffinity(before, after);
    if (value !== null) {
      affinity = true;
      result = value === 'backward' ? {
        path: beforePath,
        offset: before.text.length
      } : {
        path: afterPath,
        offset: 0
      };
    }
  }
  return {
    point: result,
    affinity,
    inlineAffinity: (_inline$affinity = inline === null || inline === void 0 ? void 0 : inline.affinity) !== null && _inline$affinity !== void 0 ? _inline$affinity : null
  };
};

const insertionPoint = (editor, point) => getInsertionPoint(editor, point).point;

const isBlock = (editor, value) => {
  return !editor.isInline(value);
};

const isEdge = (editor, point, at) => {
  return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
};

const isEmpty = (editor, element) => {
  const {
    children
  } = element;
  const [first] = children;
  return children.length === 0 || children.length === 1 && Node.isText(first) && first.text === '' && !editor.isVoid(element);
};

const isEnd = (editor, point, at) => {
  const end = Editor.end(editor, at);
  return Point.equals(point, end);
};

const isNormalizing = editor => {
  const isNormalizing = NORMALIZING.get(editor);
  return isNormalizing === undefined ? true : isNormalizing;
};

const isStart = (editor, point, at) => {
  // PERF: If the offset isn't `0` we know it's not the start.
  if (point.offset !== 0) {
    return false;
  }
  const start = Editor.start(editor, at);
  return Point.equals(point, start);
};

const last = (editor, at) => {
  const path = Editor.path(editor, at, {
    edge: 'end'
  });
  return Editor.node(editor, path);
};

const leaf = (editor, at, options = {}) => {
  const path = Editor.path(editor, at, options);
  const node = Node.leaf(editor, path);
  return [node, path];
};

function* levels(editor, options = {}) {
  const {
    at = editor.selection,
    reverse = false,
    voids = false
  } = options;
  let {
    match
  } = options;
  if (match == null) {
    match = () => true;
  }
  if (!at) {
    return;
  }
  const levels = [];
  const path = Editor.path(editor, at);
  for (const [n, p] of Node.levels(editor, path)) {
    if (!match(n, p)) {
      continue;
    }
    levels.push([n, p]);
    if (!voids && Node.isElement(n) && Editor.isVoid(editor, n)) {
      break;
    }
  }
  if (reverse) {
    levels.reverse();
  }
  yield* levels;
}

const _excluded$1 = ["text"],
  _excluded2$1 = ["text"],
  _excluded3 = ["text"];
const marks = (editor, options = {}) => {
  const {
    marks,
    selection
  } = editor;
  if (!selection) {
    return null;
  }
  let {
    anchor,
    focus
  } = selection;
  if (marks) {
    return marks;
  }
  if (Range.isExpanded(selection)) {
    const isBackward = Range.isBackward(selection);
    if (isBackward) {
      [focus, anchor] = [anchor, focus];
    }
    /**
     * COMPAT: Make sure hanging ranges (caused by double clicking in Firefox)
     * do not adversely affect the returned marks.
     */
    const isEnd = Editor.isEnd(editor, anchor, anchor.path);
    if (isEnd) {
      const after = Editor.after(editor, anchor);
      if (after) {
        anchor = after;
      }
    }
    const [match] = Editor.nodes(editor, {
      match: Node.isText,
      at: {
        anchor,
        focus
      }
    });
    if (match) {
      const [_node] = match;
      const {
          text: _text
        } = _node,
        _rest = _objectWithoutProperties(_node, _excluded$1);
      return _rest;
    } else {
      return {};
    }
  }
  const insertion = getInsertionPoint(editor, anchor);
  if (insertion.affinity) {
    const [_node2] = Editor.leaf(editor, insertion.point);
    const {
        text: _text2
      } = _node2,
      _rest2 = _objectWithoutProperties(_node2, _excluded2$1);
    return _rest2;
  }
  const {
    path
  } = anchor;
  let [node] = Editor.leaf(editor, path);
  if (anchor.offset === 0) {
    const prev = Editor.previous(editor, {
      at: path,
      match: Node.isText
    });
    const markedVoid = Editor.above(editor, {
      match: n => Node.isElement(n) && Editor.isVoid(editor, n) && editor.markableVoid(n)
    });
    if (!markedVoid) {
      const block = Editor.above(editor, {
        match: n => Node.isElement(n) && Editor.isBlock(editor, n)
      });
      if (prev && block) {
        const [prevNode, prevPath] = prev;
        const [, blockPath] = block;
        if (Path.isAncestor(blockPath, prevPath)) {
          node = prevNode;
        }
      }
    }
  }
  const {
      text
    } = node,
    rest = _objectWithoutProperties(node, _excluded3);
  return rest;
};

const next = (editor, options = {}) => {
  const {
    mode = 'lowest',
    voids = false
  } = options;
  let {
    match,
    at = editor.selection
  } = options;
  if (!at) {
    return;
  }
  const pointAfterLocation = Editor.after(editor, at, {
    voids
  });
  if (!pointAfterLocation) return;
  const [, to] = Editor.last(editor, []);
  const span = [pointAfterLocation.path, to];
  if (Location.isPath(at) && at.length === 0) {
    throw new Error(`Cannot get the next node from the root node!`);
  }
  if (match == null) {
    if (Location.isPath(at)) {
      const [parent] = Editor.parent(editor, at);
      match = n => parent.children.includes(n);
    } else {
      match = () => true;
    }
  }
  const [next] = Editor.nodes(editor, {
    at: span,
    match,
    mode,
    voids
  });
  return next;
};

const node = (editor, at, options = {}) => {
  const path = Editor.path(editor, at, options);
  const node = Node.get(editor, path);
  return [node, path];
};

function* nodes(editor, options = {}) {
  const {
    at = editor.selection,
    mode = 'all',
    universal = false,
    reverse = false,
    voids = false,
    pass
  } = options;
  let {
    match
  } = options;
  if (!match) {
    match = () => true;
  }
  if (!at) {
    return;
  }
  let from;
  let to;
  if (Location.isSpan(at)) {
    from = at[0];
    to = at[1];
  } else {
    const first = Editor.path(editor, at, {
      edge: 'start'
    });
    const last = Editor.path(editor, at, {
      edge: 'end'
    });
    from = reverse ? last : first;
    to = reverse ? first : last;
  }
  const nodeEntries = Node.nodes(editor, {
    reverse,
    from,
    to,
    pass: ([node, path]) => {
      if (pass && pass([node, path])) return true;
      if (!Node.isElement(node)) return false;
      if (!voids && (Editor.isVoid(editor, node) || Editor.isElementReadOnly(editor, node))) return true;
      return false;
    }
  });
  const matches = [];
  let hit;
  for (const [node, path] of nodeEntries) {
    const isLower = hit && Path.compare(path, hit[1]) === 0;
    // In highest mode any node lower than the last hit is not a match.
    if (mode === 'highest' && isLower) {
      continue;
    }
    if (!match(node, path)) {
      // If we've arrived at a leaf text node that is not lower than the last
      // hit, then we've found a branch that doesn't include a match, which
      // means the match is not universal.
      if (universal && !isLower && Node.isText(node)) {
        return;
      } else {
        continue;
      }
    }
    // If there's a match and it's lower than the last, update the hit.
    if (mode === 'lowest' && isLower) {
      hit = [node, path];
      continue;
    }
    // In lowest mode we emit the last hit, once it's guaranteed lowest.
    const emit = mode === 'lowest' ? hit : [node, path];
    if (emit) {
      if (universal) {
        matches.push(emit);
      } else {
        yield emit;
      }
    }
    hit = [node, path];
  }
  // Since lowest is always emitting one behind, catch up at the end.
  if (mode === 'lowest' && hit) {
    if (universal) {
      matches.push(hit);
    } else {
      yield hit;
    }
  }
  // Universal defers to ensure that the match occurs in every branch, so we
  // yield all of the matches after iterating.
  if (universal) {
    yield* matches;
  }
}

const normalize = (editor, options = {}) => {
  const {
    force = false,
    operation
  } = options;
  const getDirtyPaths = editor => {
    return DIRTY_PATHS.get(editor) || [];
  };
  const getDirtyPathKeys = editor => {
    return DIRTY_PATH_KEYS.get(editor) || new Set();
  };
  const popDirtyPath = editor => {
    const path = getDirtyPaths(editor).pop();
    const key = path.join(',');
    getDirtyPathKeys(editor).delete(key);
    return path;
  };
  if (!Editor.isNormalizing(editor)) {
    return;
  }
  if (force) {
    const allPaths = Array.from(Node.nodes(editor), ([, p]) => p);
    const allPathKeys = new Set(allPaths.map(p => p.join(',')));
    DIRTY_PATHS.set(editor, allPaths);
    DIRTY_PATH_KEYS.set(editor, allPathKeys);
  }
  if (getDirtyPaths(editor).length === 0) {
    return;
  }
  Editor.withoutNormalizing(editor, () => {
    /*
      Fix dirty elements with no children.
      editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
      Running an initial pass avoids the catch-22 race condition.
    */
    for (const dirtyPath of getDirtyPaths(editor)) {
      if (Node.has(editor, dirtyPath)) {
        const entry = Editor.node(editor, dirtyPath);
        const [node, _] = entry;
        /*
          The default normalizer inserts an empty text node in this scenario, but it can be customised.
          So there is some risk here.
                   As long as the normalizer only inserts child nodes for this case it is safe to do in any order;
          by definition adding children to an empty node can't cause other paths to change.
        */
        if (Node.isElement(node) && node.children.length === 0) {
          editor.normalizeNode(entry, {
            operation,
            force
          });
        }
      }
    }
    let dirtyPaths = getDirtyPaths(editor);
    const initialDirtyPathsLength = dirtyPaths.length;
    let iteration = 0;
    while (dirtyPaths.length !== 0) {
      if (!editor.shouldNormalize({
        dirtyPaths,
        iteration,
        initialDirtyPathsLength,
        operation
      })) {
        return;
      }
      const dirtyPath = popDirtyPath(editor);
      // If the node doesn't exist in the tree, it does not need to be normalized.
      if (Node.has(editor, dirtyPath)) {
        const entry = Editor.node(editor, dirtyPath);
        editor.normalizeNode(entry, {
          operation,
          force
        });
      }
      iteration++;
      dirtyPaths = getDirtyPaths(editor);
    }
  });
};

const parent = (editor, at, options = {}) => {
  const path = Editor.path(editor, at, options);
  const parentPath = Path.parent(path);
  const entry = Editor.node(editor, parentPath);
  return entry;
};

const getSymbolDispose = () => {
  var _Symbol$dispose;
  return (_Symbol$dispose = Symbol.dispose) !== null && _Symbol$dispose !== void 0 ? _Symbol$dispose : Symbol.for('Symbol.dispose');
};

const pathRef = (editor, path, options = {}) => {
  const {
    affinity = 'forward'
  } = options;
  const ref = {
    current: path,
    affinity,
    [getSymbolDispose()]() {
      ref.unref();
    },
    unref() {
      const {
        current
      } = ref;
      const pathRefs = Editor.pathRefs(editor);
      pathRefs.delete(ref);
      ref.current = null;
      return current;
    }
  };
  const refs = Editor.pathRefs(editor);
  refs.add(ref);
  return ref;
};

const pathRefs = editor => {
  let refs = PATH_REFS.get(editor);
  if (!refs) {
    refs = new Set();
    PATH_REFS.set(editor, refs);
  }
  return refs;
};

const path = (editor, at, options = {}) => {
  const {
    depth,
    edge
  } = options;
  if (Location.isPath(at)) {
    if (edge === 'start') {
      const [, firstPath] = Node.first(editor, at);
      at = firstPath;
    } else if (edge === 'end') {
      const [, lastPath] = Node.last(editor, at);
      at = lastPath;
    }
  }
  if (Location.isRange(at)) {
    if (edge === 'start') {
      at = Range.start(at);
    } else if (edge === 'end') {
      at = Range.end(at);
    } else {
      at = Path.common(at.anchor.path, at.focus.path);
    }
  }
  if (Location.isPoint(at)) {
    at = at.path;
  }
  if (depth != null) {
    at = at.slice(0, depth);
  }
  return at;
};

const pointRef = (editor, point, options = {}) => {
  const {
    affinity = 'forward'
  } = options;
  const ref = {
    current: point,
    affinity,
    [getSymbolDispose()]() {
      ref.unref();
    },
    unref() {
      const {
        current
      } = ref;
      const pointRefs = Editor.pointRefs(editor);
      pointRefs.delete(ref);
      ref.current = null;
      return current;
    }
  };
  const refs = Editor.pointRefs(editor);
  refs.add(ref);
  return ref;
};

const pointRefs = editor => {
  let refs = POINT_REFS.get(editor);
  if (!refs) {
    refs = new Set();
    POINT_REFS.set(editor, refs);
  }
  return refs;
};

const point = (editor, at, options = {}) => {
  const {
    edge = 'start'
  } = options;
  if (Location.isPath(at)) {
    let path;
    if (edge === 'end') {
      const [, lastPath] = Node.last(editor, at);
      path = lastPath;
    } else {
      const [, firstPath] = Node.first(editor, at);
      path = firstPath;
    }
    const node = Node.get(editor, path);
    if (!Node.isText(node)) {
      throw new Error(`Cannot get the ${edge} point in the node at path [${at}] because it has no ${edge} text node.`);
    }
    return {
      path,
      offset: edge === 'end' ? node.text.length : 0
    };
  }
  if (Location.isRange(at)) {
    const [start, end] = Range.edges(at);
    return edge === 'start' ? start : end;
  }
  return at;
};

function* positions(editor, options = {}) {
  const {
    at = editor.selection,
    unit = 'offset',
    isWordCharacter,
    reverse = false,
    voids = false
  } = options;
  if (!at) {
    return;
  }
  /**
   * Algorithm notes:
   *
   * Each step `distance` is dynamic depending on the underlying text
   * and the `unit` specified.  Each step, e.g., a line or word, may
   * span multiple text nodes, so we iterate through the text both on
   * two levels in step-sync:
   *
   * `leafText` stores the text on a text leaf level, and is advanced
   * through using the counters `leafTextOffset` and `leafTextRemaining`.
   *
   * `blockText` stores the text on a block level, and is shortened
   * by `distance` every time it is advanced.
   *
   * We only maintain a window of one blockText and one leafText because
   * a block node always appears before all of its leaf nodes.
   */
  const range = Editor.range(editor, at);
  const [start, end] = Range.edges(range);
  const first = reverse ? end : start;
  let isNewBlock = false;
  let blockText = '';
  let distance = 0; // Distance for leafText to catch up to blockText.
  let leafTextRemaining = 0;
  let leafTextOffset = 0;
  const skippedPaths = [];
  const isSelectablePoint = point => !Editor.above(editor, {
    at: point,
    voids: true,
    match: n => Node.isElement(n) && !editor.isSelectable(n)
  });
  const firstSelectablePoint = (node, path) => {
    for (const [, textPath] of Node.texts(node)) {
      const point = {
        path: [...path, ...textPath],
        offset: 0
      };
      if (isSelectablePoint(point)) {
        return point;
      }
    }
  };
  // Iterate through all nodes in range, grabbing entire textual content
  // of block nodes in blockText, and text nodes in leafText.
  // Exploits the fact that nodes are sequenced in such a way that we first
  // encounter the block node, then all of its text nodes, so when iterating
  // through the blockText and leafText we just need to remember a window of
  // one block node and leaf node, respectively.
  for (const [node, path] of Editor.nodes(editor, {
    at,
    reverse,
    voids
  })) {
    // If the node is inside a skipped ancestor, do not return any points, but
    // still process its content so that the iteration state remains correct.
    const hasSkippedAncestor = skippedPaths.some(p => Path.isAncestor(p, path));
    function* maybeYield(point) {
      if (!hasSkippedAncestor) {
        yield point;
      }
    }
    /*
     * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
     */
    if (Node.isElement(node)) {
      if (!editor.isSelectable(node)) {
        /**
         * If the node is not selectable, skip it and its descendants
         */
        skippedPaths.push(path);
        if (reverse) {
          if (Path.hasPrevious(path)) {
            const point = Editor.end(editor, Path.previous(path));
            if (isSelectablePoint(point)) {
              yield* maybeYield(point);
            }
          }
          continue;
        } else {
          const nextPath = Path.next(path);
          if (Editor.hasPath(editor, nextPath)) {
            const point = Editor.start(editor, nextPath);
            if (isSelectablePoint(point)) {
              yield* maybeYield(point);
            }
          }
          continue;
        }
      }
      // Void nodes are a special case, so by default we will always
      // yield their first point. If the `voids` option is set to true,
      // then we will iterate over their content.
      if (!voids && (editor.isVoid(node) || editor.isElementReadOnly(node))) {
        const point = firstSelectablePoint(node, path);
        if (point) {
          yield* maybeYield(point);
        }
        if (editor.isInline(node)) {
          const [, blockPath] = Editor.above(editor, {
            at: path,
            match: n => Node.isElement(n) && Editor.isBlock(editor, n)
          });
          const edge = reverse ? Path.isAncestor(blockPath, start.path) ? start : Editor.start(editor, blockPath) : Path.isAncestor(blockPath, end.path) ? end : Editor.end(editor, blockPath);
          blockText = Editor.string(editor, {
            anchor: Editor.start(editor, path),
            focus: edge
          }, {
            voids
          });
          distance = 0;
        }
        isNewBlock = true;
        continue;
      }
      // Inline element nodes are ignored as they don't themselves
      // contribute to `blockText` or `leafText` - their parent and
      // children do.
      if (editor.isInline(node)) continue;
      // Block element node - set `blockText` to its text content.
      if (Editor.hasInlines(editor, node)) {
        // We always exhaust block nodes before encountering a new one:
        //   console.assert(blockText === '',
        //     `blockText='${blockText}' - `+
        //     `not exhausted before new block node`, path)
        // Ensure range considered is capped to `range`, in the
        // start/end edge cases where block extends beyond range.
        // Equivalent to this, but presumably more performant:
        //   blockRange = Editor.range(editor, ...Editor.edges(editor, path))
        //   blockRange = Range.intersection(range, blockRange) // intersect
        //   blockText = Editor.string(editor, blockRange, { voids })
        const e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
        const s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
        blockText = Editor.string(editor, {
          anchor: s,
          focus: e
        }, {
          voids
        });
        isNewBlock = true;
      }
    }
    /*
     * TEXT LEAF NODE - Iterate through text content, yielding
     * positions every `distance` offset according to `unit`.
     */
    if (Node.isText(node)) {
      const isFirst = Path.equals(path, first.path);
      // Proof that we always exhaust text nodes before encountering a new one:
      //   console.assert(leafTextRemaining <= 0,
      //     `leafTextRemaining=${leafTextRemaining} - `+
      //     `not exhausted before new leaf text node`, path)
      // Reset `leafText` counters for new text node.
      if (isFirst) {
        leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
        leafTextOffset = first.offset; // Works for reverse too.
      } else {
        leafTextRemaining = node.text.length;
        leafTextOffset = reverse ? leafTextRemaining : 0;
      }
      // Yield position at the start of node (potentially).
      if (isFirst || isNewBlock || unit === 'offset') {
        yield* maybeYield({
          path,
          offset: leafTextOffset
        });
        isNewBlock = false;
      }
      // Yield positions every (dynamically calculated) `distance` offset.
      while (true) {
        // If `leafText` has caught up with `blockText` (distance=0),
        // and if blockText is exhausted, break to get another block node,
        // otherwise advance blockText forward by the new `distance`.
        if (distance === 0) {
          if (blockText === '') break;
          distance = calcDistance(blockText, unit, reverse);
          // Split the string at the previously found distance and use the
          // remaining string for the next iteration.
          blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
        }
        // Advance `leafText` by the current `distance`.
        leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
        leafTextRemaining = leafTextRemaining - distance;
        // If `leafText` is exhausted, break to get a new leaf node
        // and set distance to the overflow amount, so we'll (maybe)
        // catch up to blockText in the next leaf text node.
        if (leafTextRemaining < 0) {
          distance = -leafTextRemaining;
          break;
        }
        // Successfully walked `distance` offsets through `leafText`
        // to catch up with `blockText`, so we can reset `distance`
        // and yield this position in this node.
        distance = 0;
        yield* maybeYield({
          path,
          offset: leafTextOffset
        });
      }
    }
  }
  // Proof that upon completion, we've exahusted both leaf and block text:
  //   console.assert(leafTextRemaining <= 0, "leafText wasn't exhausted")
  //   console.assert(blockText === '', "blockText wasn't exhausted")
  // Helper:
  // Return the distance in offsets for a step of size `unit` on given string.
  function calcDistance(text, unit, reverse) {
    if (unit === 'character') {
      return getCharacterDistance(text, reverse);
    } else if (unit === 'word') {
      return getWordDistance(text, reverse, isWordCharacter);
    } else if (unit === 'line' || unit === 'block') {
      return text.length;
    }
    return 1;
  }
}

const previous = (editor, options = {}) => {
  const {
    mode = 'lowest',
    voids = false
  } = options;
  let {
    match,
    at = editor.selection
  } = options;
  if (!at) {
    return;
  }
  const pointBeforeLocation = Editor.before(editor, at, {
    voids
  });
  if (!pointBeforeLocation) {
    return;
  }
  const [, to] = Editor.first(editor, []);
  // The search location is from the start of the document to the path of
  // the point before the location passed in
  const span = [pointBeforeLocation.path, to];
  if (Location.isPath(at) && at.length === 0) {
    throw new Error(`Cannot get the previous node from the root node!`);
  }
  if (match == null) {
    if (Location.isPath(at)) {
      const [parent] = Editor.parent(editor, at);
      match = n => parent.children.includes(n);
    } else {
      match = () => true;
    }
  }
  const [previous] = Editor.nodes(editor, {
    reverse: true,
    at: span,
    match,
    mode,
    voids
  });
  return previous;
};

const rangeRef = (editor, range, options = {}) => {
  const {
    affinity = 'forward'
  } = options;
  const ref = {
    current: range,
    affinity,
    [getSymbolDispose()]() {
      ref.unref();
    },
    unref() {
      const {
        current
      } = ref;
      const rangeRefs = Editor.rangeRefs(editor);
      rangeRefs.delete(ref);
      ref.current = null;
      return current;
    }
  };
  const refs = Editor.rangeRefs(editor);
  refs.add(ref);
  return ref;
};

const rangeRefs = editor => {
  let refs = RANGE_REFS.get(editor);
  if (!refs) {
    refs = new Set();
    RANGE_REFS.set(editor, refs);
  }
  return refs;
};

const range = (editor, at, to) => {
  if (Location.isRange(at) && !to) {
    return at;
  }
  const start = Editor.start(editor, at);
  const end = Editor.end(editor, to || at);
  return {
    anchor: start,
    focus: end
  };
};

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const removeMark = (editor, key) => {
  const {
    selection
  } = editor;
  if (selection) {
    const match = (node, path) => {
      if (!Node.isText(node)) {
        return false; // marks can only be applied to text
      }
      const [parentNode, parentPath] = Editor.parent(editor, path);
      return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
    };
    const expandedSelection = Range.isExpanded(selection);
    let markAcceptingVoidSelected = false;
    if (!expandedSelection) {
      const [selectedNode, selectedPath] = Editor.node(editor, selection);
      if (selectedNode && match(selectedNode, selectedPath)) {
        const [parentNode] = Editor.parent(editor, selectedPath);
        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
      }
    }
    if (expandedSelection || markAcceptingVoidSelected) {
      Transforms.unsetNodes(editor, key, {
        match,
        split: true,
        voids: true
      });
    } else {
      const marks = _objectSpread$4({}, Editor.marks(editor) || {});
      delete marks[key];
      editor.marks = marks;
      if (!FLUSHING.get(editor)) {
        editor.onChange();
      }
    }
  }
};

const setNormalizing = (editor, isNormalizing) => {
  NORMALIZING.set(editor, isNormalizing);
};

const start = (editor, at) => {
  return Editor.point(editor, at, {
    edge: 'start'
  });
};

const string = (editor, at, options = {}) => {
  const {
    voids = false
  } = options;
  const range = Editor.range(editor, at);
  const [start, end] = Range.edges(range);
  let text = '';
  for (const [node, path] of Editor.nodes(editor, {
    at: range,
    match: Node.isText,
    voids
  })) {
    let t = node.text;
    if (Path.equals(path, end.path)) {
      t = t.slice(0, end.offset);
    }
    if (Path.equals(path, start.path)) {
      t = t.slice(start.offset);
    }
    text += t;
  }
  return text;
};

const unhangRange = (editor, range, options = {}) => {
  const {
    voids = false
  } = options;
  let [start, end] = Range.edges(range);
  // PERF: exit early if we can guarantee that the range isn't hanging.
  if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range) || Path.hasPrevious(end.path)) {
    return range;
  }
  const endBlock = Editor.above(editor, {
    at: end,
    match: n => Node.isElement(n) && Editor.isBlock(editor, n),
    voids
  });
  const blockPath = endBlock ? endBlock[1] : [];
  const first = Editor.start(editor, start);
  const before = {
    anchor: first,
    focus: end
  };
  let skip = true;
  for (const [node, path] of Editor.nodes(editor, {
    at: before,
    match: Node.isText,
    reverse: true,
    voids
  })) {
    if (skip) {
      skip = false;
      continue;
    }
    if (node.text !== '' || Path.isBefore(path, blockPath)) {
      end = {
        path,
        offset: node.text.length
      };
      break;
    }
  }
  return {
    anchor: start,
    focus: end
  };
};

const withoutNormalizing = (editor, fn) => {
  const value = Editor.isNormalizing(editor);
  Editor.setNormalizing(editor, false);
  try {
    fn();
  } finally {
    Editor.setNormalizing(editor, value);
  }
  Editor.normalize(editor);
};

const shouldMergeNodesRemovePrevNode = (editor, [prevNode, prevPath], [curNode, curNodePath]) => {
  // If the target node that we're merging with is empty, remove it instead
  // of merging the two. This is a common rich text editor behavior to
  // prevent losing formatting when deleting entire nodes when you have a
  // hanging selection.
  // if prevNode is first child in parent,don't remove it.
  return Node.isElement(prevNode) && Editor.isEmpty(editor, prevNode) && Path.isSibling(prevPath, curNodePath) || Node.isText(prevNode) && prevNode.text === '' && prevPath[prevPath.length - 1] !== 0;
};

const word = (editor, options = {}) => {
  const {
    at = editor.selection,
    isWordCharacter
  } = options;
  if (!at) {
    return undefined;
  }
  const point = Location.isPoint(at) ? at : at.focus;
  const block = Editor.above(editor, {
    at: point,
    match: n => Element.isElement(n) && Editor.isBlock(editor, n)
  });
  if (!block || Editor.isVoid(editor, block[0])) {
    return undefined;
  }
  let text = '';
  let runs = [];
  let index = -1;
  for (const [node, path] of Editor.nodes(editor, {
    at: block[1],
    match: Text.isText,
    voids: true
  })) {
    const isInVoid = Editor.above(editor, {
      at: path,
      match: n => Element.isElement(n) && Editor.isVoid(editor, n),
      voids: true
    });
    if (isInVoid) {
      if (Path.equals(path, point.path)) {
        return undefined;
      }
      if (index >= 0) {
        break;
      }
      text = '';
      runs = [];
      continue;
    }
    if (Path.equals(path, point.path)) {
      index = text.length + point.offset;
    }
    runs.push({
      path,
      start: text.length,
      end: text.length + node.text.length
    });
    text += node.text;
  }
  if (index < 0) {
    return undefined;
  }
  const [start, end] = getWordBounds(text, index, isWordCharacter);
  if (start === end) {
    return undefined;
  }
  const toPoint = (offset, preferNext) => {
    const run = preferNext ? runs.find(r => offset >= r.start && offset < r.end) : runs.find(r => offset > r.start && offset <= r.end);
    const {
      path,
      start: runStart
    } = run;
    return {
      path,
      offset: offset - runStart
    };
  };
  return {
    anchor: toPoint(start, true),
    focus: toPoint(end, false)
  };
};

const findEmptyBlockNextToVoid = (editor, point, reverse) => {
  const blockEntry = Editor.above(editor, {
    at: point,
    match: n => Node.isElement(n) && Editor.isBlock(editor, n)
  });
  if (!blockEntry) {
    return undefined;
  }
  const [block, blockPath] = blockEntry;
  if (!Node.isElement(block) || Editor.isVoid(editor, block) || !Editor.isEmpty(editor, block)) {
    return undefined;
  }
  if (reverse && !Path.hasPrevious(blockPath)) {
    return undefined;
  }
  const siblingPath = reverse ? Path.previous(blockPath) : Path.next(blockPath);
  if (!Node.has(editor, siblingPath)) {
    return undefined;
  }
  const sibling = Node.get(editor, siblingPath);
  if (!Node.isElement(sibling) || !Editor.isBlock(editor, sibling) || !Editor.isVoid(editor, sibling)) {
    return undefined;
  }
  return [blockPath, siblingPath];
};
const isEmptyInline = (editor, node) => Node.isElement(node) && Editor.isInline(editor, node) && !Editor.isVoid(editor, node) && Editor.isEmpty(editor, node);
const findEmptyInlineToDelete = (editor, point, reverse) => {
  const inlinePath = Path.parent(point.path);
  if (inlinePath.length > 0 && isEmptyInline(editor, Node.get(editor, inlinePath))) {
    return inlinePath;
  }
  const text = Node.get(editor, point.path);
  const atEdge = reverse ? point.offset === 0 : Node.isText(text) && point.offset === text.text.length;
  if (!atEdge) {
    return undefined;
  }
  if (reverse && !Path.hasPrevious(point.path)) {
    return undefined;
  }
  const siblingPath = reverse ? Path.previous(point.path) : Path.next(point.path);
  if (Node.has(editor, siblingPath) && isEmptyInline(editor, Node.get(editor, siblingPath))) {
    return siblingPath;
  }
  return undefined;
};
const getIsolatedPath = (editor, point) => {
  var _Editor$above;
  return (_Editor$above = Editor.above(editor, {
    at: point,
    match: n => Node.isElement(n) && Editor.isIsolated(editor, n),
    voids: true
  })) === null || _Editor$above === void 0 ? void 0 : _Editor$above[1];
};
const isSameIsolation = (editor, a, b) => {
  const aPath = getIsolatedPath(editor, a);
  const bPath = getIsolatedPath(editor, b);
  return aPath && bPath ? Path.equals(aPath, bPath) : aPath === bPath;
};
const clampToIsolation = (editor, point, target, reverse) => {
  if (isSameIsolation(editor, point, target)) {
    return target;
  }
  const isolatedPath = getIsolatedPath(editor, point);
  if (!isolatedPath || Path.isAncestor(isolatedPath, target.path)) {
    return undefined;
  }
  return reverse ? Editor.start(editor, isolatedPath) : Editor.end(editor, isolatedPath);
};
const deleteText = (editor, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    var _Editor$void, _Editor$void2;
    const {
      reverse = false,
      unit = 'character',
      distance = 1,
      voids = false
    } = options;
    let {
      at = editor.selection,
      hanging = false
    } = options;
    if (!at) {
      return;
    }
    let isCollapsed = false;
    if (Location.isRange(at) && Range.isCollapsed(at)) {
      isCollapsed = true;
      at = at.anchor;
    }
    if (Location.isPoint(at)) {
      const emptyBlockNextToVoid = !voids && (unit === 'character' || unit === 'word') && distance === 1 ? findEmptyBlockNextToVoid(editor, at, reverse) : undefined;
      if (emptyBlockNextToVoid) {
        const [blockPath, voidPath] = emptyBlockNextToVoid;
        const voidRef = Editor.pathRef(editor, voidPath);
        Transforms.removeNodes(editor, {
          at: blockPath
        });
        const target = voidRef.unref();
        if (target && options.at == null) {
          Transforms.select(editor, reverse ? Editor.end(editor, target) : Editor.start(editor, target));
        }
        return;
      }
      const furthestVoid = Editor.void(editor, {
        at,
        mode: 'highest'
      });
      const emptyInlinePath = unit === 'character' && distance === 1 ? findEmptyInlineToDelete(editor, at, reverse) : undefined;
      if (!voids && furthestVoid) {
        const [, voidPath] = furthestVoid;
        at = voidPath;
      } else if (emptyInlinePath) {
        at = emptyInlinePath;
      } else {
        const opts = {
          unit,
          distance
        };
        const target = clampToIsolation(editor, at, reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []), reverse);
        if (!target) {
          return;
        }
        at = {
          anchor: at,
          focus: target
        };
        hanging = true;
      }
    }
    if (Location.isPath(at)) {
      // When deleting a void backward from the cursor, keep the cursor before
      // it instead of letting it move into the following node.
      const before = options.at == null && reverse ? Editor.before(editor, at) : undefined;
      const beforeRef = before && Path.isAncestor(Path.parent(at), before.path) ? Editor.pointRef(editor, before) : undefined;
      Transforms.removeNodes(editor, {
        at,
        voids
      });
      if (editor.children.length === 0 && options.at == null) {
        beforeRef === null || beforeRef === void 0 || beforeRef.unref();
        Transforms.insertNodes(editor, {
          children: [{
            text: ''
          }]
        }, {
          at: [0],
          select: true
        });
        return;
      }
      const _point = beforeRef && beforeRef.unref();
      if (_point) {
        Transforms.select(editor, _point);
      }
      return;
    }
    if (Range.isCollapsed(at)) {
      return;
    }
    if (!hanging) {
      const [, _end] = Range.edges(at);
      const endOfDoc = Editor.end(editor, []);
      if (!Point.equals(_end, endOfDoc)) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
    }
    let [start, end] = Range.edges(at);
    const startBlock = Editor.above(editor, {
      match: n => Node.isElement(n) && Editor.isBlock(editor, n),
      at: start,
      voids
    });
    const endBlock = Editor.above(editor, {
      match: n => Node.isElement(n) && Editor.isBlock(editor, n),
      at: end,
      voids
    });
    const isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
    const isSingleText = Path.equals(start.path, end.path);
    const startNonEditable = voids ? null : (_Editor$void = Editor.void(editor, {
      at: start,
      mode: 'highest'
    })) !== null && _Editor$void !== void 0 ? _Editor$void : Editor.elementReadOnly(editor, {
      at: start,
      mode: 'highest'
    });
    const endNonEditable = voids ? null : (_Editor$void2 = Editor.void(editor, {
      at: end,
      mode: 'highest'
    })) !== null && _Editor$void2 !== void 0 ? _Editor$void2 : Editor.elementReadOnly(editor, {
      at: end,
      mode: 'highest'
    });
    // If the start or end points are inside an inline void, nudge them out.
    if (startNonEditable) {
      const before = Editor.before(editor, start);
      if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
        start = before;
      }
    }
    if (endNonEditable) {
      const after = Editor.after(editor, end);
      if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
        end = after;
      }
    }
    // Get the highest nodes that are completely inside the range, as well as
    // the start and end nodes.
    const matches = [];
    let lastPath;
    for (const entry of Editor.nodes(editor, {
      at,
      voids
    })) {
      const [node, path] = entry;
      if (lastPath && Path.compare(path, lastPath) === 0) {
        continue;
      }
      if (!voids && Node.isElement(node) && (Editor.isVoid(editor, node) || Editor.isElementReadOnly(editor, node)) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
        matches.push(entry);
        lastPath = path;
      }
    }
    const pathRefs = Array.from(matches, ([, p]) => Editor.pathRef(editor, p));
    const startRef = Editor.pointRef(editor, start);
    const endRef = Editor.pointRef(editor, end);
    let removedText = '';
    if (!isSingleText && !startNonEditable) {
      const _point2 = startRef.current;
      const [node] = Editor.leaf(editor, _point2);
      const {
        path
      } = _point2;
      const {
        offset
      } = start;
      const text = node.text.slice(offset);
      if (text.length > 0) {
        editor.apply({
          type: 'remove_text',
          path,
          offset,
          text
        });
        removedText = text;
      }
    }
    pathRefs.reverse().map(r => r.unref()).filter(r => r !== null).forEach(p => Transforms.removeNodes(editor, {
      at: p,
      voids
    }));
    if (!endNonEditable) {
      const _point3 = endRef.current;
      const [node] = Editor.leaf(editor, _point3);
      const {
        path
      } = _point3;
      const offset = isSingleText ? start.offset : 0;
      const text = node.text.slice(offset, end.offset);
      if (text.length > 0) {
        editor.apply({
          type: 'remove_text',
          path,
          offset,
          text
        });
        removedText = text;
      }
    }
    if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current && isSameIsolation(editor, startRef.current, endRef.current)) {
      Transforms.mergeNodes(editor, {
        at: endRef.current,
        hanging: true,
        voids
      });
    }
    // For certain scripts, deleting N character(s) backward should delete
    // N code point(s) instead of an entire grapheme cluster.
    // Therefore, the remaining code points should be inserted back.
    // Bengali: \u0980-\u09FF
    // Thai: \u0E00-\u0E7F
    // Burmese (Myanmar): \u1000-\u109F
    // Hindi (Devanagari): \u0900-\u097F
    // Khmer: \u1780-\u17FF
    // Malayalam: \u0D00-\u0D7F
    // Oriya: \u0B00-\u0B7F
    // Punjabi (Gurmukhi): \u0A00-\u0A7F
    // Tamil: \u0B80-\u0BFF
    // Telugu: \u0C00-\u0C7F
    if (isCollapsed && reverse && unit === 'character' && removedText.length > 1 && removedText.match(/[\u0980-\u09FF\u0E00-\u0E7F\u1000-\u109F\u0900-\u097F\u1780-\u17FF\u0D00-\u0D7F\u0B00-\u0B7F\u0A00-\u0A7F\u0B80-\u0BFF\u0C00-\u0C7F]+/)) {
      Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
    }
    const startUnref = startRef.unref();
    const endUnref = endRef.unref();
    const point = reverse ? startUnref || endUnref : endUnref || startUnref;
    if (options.at == null && point) {
      Transforms.select(editor, point);
    }
  });
};

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const insertFragment = (editor, fragment, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    var _insertion, _insertion2, _insertion3;
    const {
      hanging = false,
      voids = false,
      select = options.at == null,
      filter
    } = options;
    let insertion;
    if (fragment.length && options.at == null && editor.selection && Range.isCollapsed(editor.selection)) {
      insertion = getInsertionPoint(editor, editor.selection.anchor);
      if (!Point.equals(insertion.point, editor.selection.anchor)) Transforms.select(editor, insertion.point);
    }
    let {
      at = getDefaultInsertLocation(editor),
      batchDirty = true
    } = options;
    if (!fragment.length) {
      return;
    }
    if (Location.isRange(at)) {
      if (!hanging) {
        const [, end] = Range.edges(at);
        const endOfDoc = Editor.end(editor, []);
        if (!Point.equals(end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
      }
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        const [start, end] = Range.edges(at);
        if (!voids && Editor.void(editor, {
          at: end
        })) {
          return;
        }
        const _startRef = Editor.pointRef(editor, start);
        const _endRef = Editor.pointRef(editor, end);
        Transforms.delete(editor, {
          at,
          voids
        });
        const startPoint = _startRef.unref();
        const endPoint = _endRef.unref();
        at = startPoint !== null && startPoint !== void 0 ? startPoint : endPoint;
      }
    } else if (Location.isPath(at)) {
      at = Editor.start(editor, at);
    }
    if (!voids && Editor.void(editor, {
      at
    })) {
      return;
    }
    // If the insert point is at the edge of an inline node, move it outside
    // instead since it will need to be split otherwise.
    const inlineElementMatch = Editor.above(editor, {
      at,
      match: n => Node.isElement(n) && Editor.isInline(editor, n),
      mode: 'highest',
      voids
    });
    if (inlineElementMatch && ((_insertion = insertion) === null || _insertion === void 0 ? void 0 : _insertion.inlineAffinity) !== 'inside') {
      const [, _inlinePath] = inlineElementMatch;
      const parent = Node.parent(editor, _inlinePath);
      const index = _inlinePath[_inlinePath.length - 1];
      if (Editor.isEnd(editor, at, _inlinePath)) {
        const afterPath = Path.next(_inlinePath);
        if (!Text.isText(parent.children[index + 1])) {
          Transforms.insertNodes(editor, {
            text: ''
          }, {
            at: afterPath,
            voids
          });
        }
        at = Editor.start(editor, afterPath);
      } else if (Editor.isStart(editor, at, _inlinePath)) {
        if (Text.isText(parent.children[index - 1])) {
          at = Editor.end(editor, Path.previous(_inlinePath));
        } else {
          Transforms.insertNodes(editor, {
            text: ''
          }, {
            at: _inlinePath,
            voids
          });
          at = Editor.start(editor, _inlinePath);
        }
      }
    }
    const blockMatch = Editor.above(editor, {
      match: n => Node.isElement(n) && Editor.isBlock(editor, n),
      at,
      voids
    });
    const [, blockPath] = blockMatch;
    const filterOptions = {
      blockEntry: blockMatch
    };
    const filterNode = node => {
      if (!filter) return node;
      if (Node.isText(node)) {
        return filter(node, filterOptions) ? node : null;
      }
      if (Node.isElement(node)) {
        if (!filter(node, filterOptions)) {
          return null;
        }
        const filteredChildren = node.children.map(filterNode).filter(child => child !== null);
        if (filteredChildren.length === 0 && !editor.isVoid(node)) {
          return null;
        }
        return _objectSpread$3(_objectSpread$3({}, node), {}, {
          children: filteredChildren
        });
      }
      return node;
    };
    const filteredFragment = filter ? fragment.map(filterNode).filter(node => node !== null) : fragment;
    if (!filteredFragment.length) {
      return;
    }
    fragment = filteredFragment;
    const isBlockStart = Editor.isStart(editor, at, blockPath);
    const isBlockEnd = Editor.isEnd(editor, at, blockPath);
    const isBlockEmpty = isBlockStart && isBlockEnd;
    const [, firstLeafPath] = Node.first({
      children: fragment
    }, []);
    const [, lastLeafPath] = Node.last({
      children: fragment
    }, []);
    // For each node in the fragment, determine what level of wrapping should
    // be kept. At minimum, all text nodes will be inserted, but if
    // `shouldInsert` returns true for some ancestor of a particular text node,
    // then the entire ancestor will be inserted rather than inserting the text
    // nodes individually.
    const shouldInsert = ([n, p]) => {
      const isRoot = p.length === 0;
      if (isRoot) {
        return false;
      }
      // If the destination block is empty, insert all top-level blocks of the
      // fragment.
      if (isBlockEmpty) {
        return true;
      }
      // Unless we're at the start of the destination block, unwrap any
      // non-void blocks that contain the first leaf node in the fragment.
      if (!isBlockStart && Path.isAncestor(p, firstLeafPath) && Node.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
        return false;
      }
      // Unless we're at the end of the destination block, unwrap any non-void
      // blocks that contain the last leaf node in the fragment.
      if (!isBlockEnd && Path.isAncestor(p, lastLeafPath) && Node.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
        return false;
      }
      // Always insert void nodes, inline elements and text nodes.
      return true;
    };
    // Whether the current node is in the first block of the fragment.
    let starting = true;
    // Inline nodes in the first block of the fragment, to be merged with the
    // destination block.
    const starts = [];
    // Blocks in the middle of the fragment.
    const middles = [];
    // Inline nodes in the last block of the fragment, to be merged with the
    // destination block. If the fragment contains only one block, this will be
    // empty.
    const ends = [];
    for (const entry of Node.nodes({
      children: fragment
    }, {
      pass: shouldInsert
    })) {
      const [node, path] = entry;
      // If we encounter a block that does not contain the first leaf, we're no
      // longer in the first block of the fragment.
      if (starting && Node.isElement(node) && !editor.isInline(node) && !Path.isAncestor(path, firstLeafPath)) {
        starting = false;
      }
      if (shouldInsert(entry)) {
        if (Node.isElement(node) && !editor.isInline(node)) {
          starting = false;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }
    }
    const [inlineMatch] = Editor.nodes(editor, {
      at,
      match: n => Node.isText(n) || Editor.isInline(editor, n),
      mode: ((_insertion2 = insertion) === null || _insertion2 === void 0 ? void 0 : _insertion2.inlineAffinity) === 'inside' ? 'lowest' : 'highest',
      voids
    });
    const [, inlinePath] = inlineMatch;
    const isInlineStart = Editor.isStart(editor, at, inlinePath);
    const isInlineEnd = Editor.isEnd(editor, at, inlinePath);
    const middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
    const endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
    const isSplittingAroundMiddles = middles.length > 0 && !isBlockStart && !isBlockEnd;
    const splitBlock = ends.length > 0 || isSplittingAroundMiddles;
    Transforms.splitNodes(editor, {
      at,
      match: n => splitBlock ? Node.isElement(n) && Editor.isBlock(editor, n) : Node.isText(n) || Editor.isInline(editor, n),
      mode: splitBlock || ((_insertion3 = insertion) === null || _insertion3 === void 0 ? void 0 : _insertion3.inlineAffinity) === 'inside' ? 'lowest' : 'highest',
      always: splitBlock && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
      voids
    });
    const startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
    Transforms.insertNodes(editor, starts, {
      at: startRef.current,
      match: n => Node.isText(n) || Editor.isInline(editor, n),
      mode: 'highest',
      voids,
      batchDirty
    });
    if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
      Transforms.removeNodes(editor, {
        at: blockPath,
        voids
      });
    }
    Transforms.insertNodes(editor, middles, {
      at: middleRef.current,
      match: n => Node.isElement(n) && Editor.isBlock(editor, n),
      mode: 'lowest',
      voids,
      batchDirty
    });
    Transforms.insertNodes(editor, ends, {
      at: endRef.current,
      match: n => Node.isText(n) || Editor.isInline(editor, n),
      mode: 'highest',
      voids,
      batchDirty
    });
    if (select) {
      let path;
      if (ends.length > 0 && endRef.current) {
        path = Path.previous(endRef.current);
      } else if (middles.length > 0 && middleRef.current) {
        path = Path.previous(middleRef.current);
      } else if (startRef.current) {
        path = Path.previous(startRef.current);
      }
      if (path) {
        const lastInserted = Node.get(editor, path);
        const point = isSplittingAroundMiddles && !ends.length && Node.isElement(lastInserted) && Editor.isVoid(editor, lastInserted) ? Editor.start(editor, Path.next(path)) : Editor.end(editor, path);
        Transforms.select(editor, point);
      }
    }
    startRef.unref();
    middleRef.unref();
    endRef.unref();
  });
};

const collapse = (editor, options = {}) => {
  const {
    edge = 'anchor'
  } = options;
  const {
    selection
  } = editor;
  if (!selection) {
    return;
  } else if (edge === 'anchor') {
    Transforms.select(editor, selection.anchor);
  } else if (edge === 'focus') {
    Transforms.select(editor, selection.focus);
  } else if (edge === 'start') {
    const [start] = Range.edges(selection);
    Transforms.select(editor, start);
  } else if (edge === 'end') {
    const [, end] = Range.edges(selection);
    Transforms.select(editor, end);
  }
};

const deselect = editor => {
  const {
    selection
  } = editor;
  if (selection) {
    editor.apply({
      type: 'set_selection',
      properties: selection,
      newProperties: null
    });
  }
};

const move = (editor, options = {}) => {
  const {
    selection
  } = editor;
  const {
    distance = 1,
    unit = 'character',
    reverse = false
  } = options;
  let {
    edge = null
  } = options;
  if (!selection) {
    return;
  }
  if (edge === 'start') {
    edge = Range.isBackward(selection) ? 'focus' : 'anchor';
  }
  if (edge === 'end') {
    edge = Range.isBackward(selection) ? 'anchor' : 'focus';
  }
  const {
    anchor,
    focus
  } = selection;
  const opts = {
    distance,
    unit
  };
  const props = {};
  if (edge == null || edge === 'anchor') {
    const point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
    if (point) {
      props.anchor = point;
    }
  }
  if (edge == null || edge === 'focus') {
    const point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
    if (point) {
      props.focus = point;
    }
  }
  Transforms.setSelection(editor, props);
};

const select = (editor, target) => {
  const {
    selection
  } = editor;
  target = Editor.range(editor, target);
  if (selection) {
    Transforms.setSelection(editor, target);
    return;
  }
  if (!Location.isRange(target)) {
    throw new Error(`When setting the selection and the current selection is \`null\` you must provide at least an \`anchor\` and \`focus\`, but you passed: ${Scrubber.stringify(target)}`);
  }
  editor.apply({
    type: 'set_selection',
    properties: selection,
    newProperties: target
  });
};

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const setPoint = (editor, props, options = {}) => {
  const {
    selection
  } = editor;
  let {
    edge = 'both'
  } = options;
  if (!selection) {
    return;
  }
  if (edge === 'start') {
    edge = Range.isBackward(selection) ? 'focus' : 'anchor';
  }
  if (edge === 'end') {
    edge = Range.isBackward(selection) ? 'anchor' : 'focus';
  }
  const {
    anchor,
    focus
  } = selection;
  const point = edge === 'anchor' ? anchor : focus;
  Transforms.setSelection(editor, {
    [edge === 'anchor' ? 'anchor' : 'focus']: _objectSpread$2(_objectSpread$2({}, point), props)
  });
};

const setSelection = (editor, props) => {
  const {
    selection
  } = editor;
  const oldProps = {};
  const newProps = {};
  if (!selection) {
    return;
  }
  for (const k in props) {
    if (NON_SETTABLE_SELECTION_PROPERTIES.includes(k)) {
      continue;
    }
    const value = Object.hasOwn(selection, k) ? selection[k] : undefined;
    const newValue = props[k];
    if (compareSelectionProps(k, value, newValue)) {
      oldProps[k] = selection[k];
      newProps[k] = props[k];
    }
  }
  if (Object.keys(oldProps).length > 0) {
    editor.apply({
      type: 'set_selection',
      properties: oldProps,
      newProperties: newProps
    });
  }
};
function compareSelectionProps(key, value, newValue) {
  if ((key === 'anchor' || key === 'focus') && Point.isPoint(value) && Point.isPoint(newValue)) {
    return !Point.equals(value, newValue);
  }
  return value !== newValue;
}

const insertNodes = (editor, nodes, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    const {
      hanging = false,
      voids = false,
      mode = 'lowest',
      batchDirty = true
    } = options;
    let {
      at,
      match,
      select
    } = options;
    if (Node.isNode(nodes)) {
      nodes = [nodes];
    }
    if (nodes.length === 0) {
      return;
    }
    const [node] = nodes;
    if (!at) {
      if (Node.isElement(node) && editor.isInline(node) && editor.selection && Range.isCollapsed(editor.selection)) {
        const point = Editor.insertionPoint(editor, editor.selection.anchor);
        if (!Point.equals(point, editor.selection.anchor)) Transforms.select(editor, point);
      }
      at = getDefaultInsertLocation(editor);
      if (select !== false) {
        select = true;
      }
    }
    if (select == null) {
      select = false;
    }
    if (Location.isRange(at)) {
      if (!hanging) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        var _ref, _ref2;
        const [start, end] = Range.edges(at);
        const startRef = Editor.pointRef(editor, start);
        const endRef = Editor.pointRef(editor, end);
        const before = Editor.before(editor, start, {
          voids
        });
        const beforeRef = before && Editor.pointRef(editor, before);
        Transforms.delete(editor, {
          at
        });
        const startPoint = startRef.unref();
        const endPoint = endRef.unref();
        const beforePoint = beforeRef ? beforeRef.unref() : null;
        at = (_ref = (_ref2 = endPoint !== null && endPoint !== void 0 ? endPoint : startPoint) !== null && _ref2 !== void 0 ? _ref2 : beforePoint) !== null && _ref !== void 0 ? _ref : Editor.start(editor, []);
      }
    }
    if (Location.isPoint(at)) {
      if (match == null) {
        if (Node.isText(node)) {
          match = n => Node.isText(n);
        } else if (editor.isInline(node)) {
          match = n => Node.isText(n) || Editor.isInline(editor, n);
        } else {
          match = n => Node.isElement(n) && Editor.isBlock(editor, n);
        }
      }
      const [entry] = Editor.nodes(editor, {
        at: at.path,
        match,
        mode,
        voids
      });
      if (entry) {
        const [, matchPath] = entry;
        const pathRef = Editor.pathRef(editor, matchPath);
        const isAtEnd = Editor.isEnd(editor, at, matchPath);
        Transforms.splitNodes(editor, {
          at,
          match,
          mode,
          voids
        });
        const path = pathRef.unref();
        at = isAtEnd ? Path.next(path) : path;
      } else {
        return;
      }
    }
    const parentPath = Path.parent(at);
    let index = at[at.length - 1];
    if (!voids && Editor.void(editor, {
      at: parentPath
    })) {
      return;
    }
    if (batchDirty) {
      // PERF: batch update dirty paths
      // batched ops used to transform existing dirty paths
      const batchedOps = [];
      const newDirtyPaths = Path.levels(parentPath);
      batchDirtyPaths(editor, () => {
        for (const node of nodes) {
          const path = parentPath.concat(index);
          index++;
          const op = {
            type: 'insert_node',
            path,
            node
          };
          editor.apply(op);
          at = Path.next(at);
          batchedOps.push(op);
          if (Node.isText(node)) {
            newDirtyPaths.push(path);
          } else {
            newDirtyPaths.push(...Array.from(Node.nodes(node), ([, p]) => path.concat(p)));
          }
        }
      }, () => {
        updateDirtyPaths(editor, newDirtyPaths, p => {
          let newPath = p;
          for (const op of batchedOps) {
            if (Path.operationCanTransformPath(op)) {
              newPath = Path.transform(newPath, op);
              if (!newPath) {
                return null;
              }
            }
          }
          return newPath;
        });
      });
    } else {
      for (const _node of nodes) {
        const path = parentPath.concat(index);
        index++;
        editor.apply({
          type: 'insert_node',
          path,
          node: _node
        });
        at = Path.next(at);
      }
    }
    at = Path.previous(at);
    if (select) {
      const point = Editor.end(editor, at);
      if (point) {
        Transforms.select(editor, point);
      }
    }
  });
};

const liftNodes = (editor, options = {}) => {
  const {
    height = 1
  } = options;
  if (!Number.isInteger(height) || height < 0) {
    throw new Error('The height of a lift must be a non-negative integer.');
  }
  if (height === 0) {
    return;
  }
  Editor.withoutNormalizing(editor, () => {
    const {
      at = editor.selection,
      mode = 'lowest',
      voids = false
    } = options;
    let {
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Location.isPath(at) ? matchPath(editor, at) : n => Node.isElement(n) && Editor.isBlock(editor, n);
    }
    const matches = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    const pathRefs = Array.from(matches, ([, p]) => Editor.pathRef(editor, p));
    try {
      for (const pathRef of pathRefs) {
        for (let level = 0; level < height; level++) {
          const path = pathRef.current;
          if (!path || level > 0 && path.length < 2) {
            break;
          }
          if (path.length < 2) {
            throw new Error(`Cannot lift node at a path [${path}] because it has a depth of less than \`2\`.`);
          }
          const parentNodeEntry = Editor.node(editor, Path.parent(path));
          const [parent, parentPath] = parentNodeEntry;
          const index = path[path.length - 1];
          const {
            length
          } = parent.children;
          if (length === 1) {
            const toPath = Path.next(parentPath);
            Transforms.moveNodes(editor, {
              at: path,
              to: toPath,
              voids
            });
            Transforms.removeNodes(editor, {
              at: parentPath,
              voids
            });
          } else if (index === 0) {
            Transforms.moveNodes(editor, {
              at: path,
              to: parentPath,
              voids
            });
          } else if (index === length - 1) {
            const toPath = Path.next(parentPath);
            Transforms.moveNodes(editor, {
              at: path,
              to: toPath,
              voids
            });
          } else {
            const splitPath = Path.next(path);
            const toPath = Path.next(parentPath);
            Transforms.splitNodes(editor, {
              at: splitPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: path,
              to: toPath,
              voids
            });
          }
        }
        if (options.select && pathRef.current) {
          Transforms.select(editor, Editor.end(editor, pathRef.current));
        }
      }
    } finally {
      for (const pathRef of pathRefs) {
        pathRef.unref();
      }
    }
  });
};

const _excluded = ["text"],
  _excluded2 = ["children"];
const hasSingleChildNest = (editor, node) => {
  return node !== editor && (Node.isText(node) || Editor.isVoid(editor, node) || node.children.length === 1 && hasSingleChildNest(editor, node.children[0]));
};
const mergeNodes = (editor, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    let {
      match,
      at = editor.selection
    } = options;
    const {
      hanging = false,
      voids = false,
      mode = 'lowest'
    } = options;
    if (!at) {
      return;
    }
    const isPathMerge = Location.isPath(at);
    const pathAt = isPathMerge ? at : null;
    const usesDefaultSiblingMatch = match == null && isPathMerge;
    if (match == null) {
      if (isPathMerge) {
        const [parent] = Editor.parent(editor, at);
        match = n => parent.children.includes(n);
      } else {
        match = n => Node.isElement(n) && Editor.isBlock(editor, n);
      }
    }
    if (!hanging && Location.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (Location.isRange(at)) {
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        const [, end] = Range.edges(at);
        const pointRef = Editor.pointRef(editor, end);
        Transforms.delete(editor, {
          at
        });
        at = pointRef.unref();
        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }
    }
    const [current] = Editor.nodes(editor, {
      at,
      match,
      voids,
      mode
    });
    const previousPath = usesDefaultSiblingMatch && pathAt && Path.hasPrevious(pathAt) ? Path.previous(pathAt) : null;
    const prev = previousPath ? Editor.node(editor, previousPath) : Editor.previous(editor, {
      at,
      match,
      voids,
      mode
    });
    if (!current || !prev) {
      return;
    }
    const [node, path] = current;
    const [prevNode, prevPath] = prev;
    if (path.length === 0 || prevPath.length === 0) {
      return;
    }
    const newPath = Path.next(prevPath);
    const commonPath = Path.common(path, prevPath);
    const isPreviousSibling = Path.isSibling(path, prevPath);
    const levels = Array.from(Editor.levels(editor, {
      at: path
    }), ([n]) => n).slice(commonPath.length).slice(0, -1);
    // Determine if the merge will leave an ancestor of the path empty as a
    // result, in which case we'll want to remove it after merging.
    const emptyAncestor = Editor.above(editor, {
      at: path,
      mode: 'highest',
      match: n => levels.includes(n) && hasSingleChildNest(editor, n)
    });
    let properties;
    let position;
    let removePrevious;
    // Ensure that the nodes are equivalent, and figure out what the position
    // and extra properties of the merge will be.
    if (Node.isText(node) && Node.isText(prevNode)) {
      const {
          text
        } = node,
        rest = _objectWithoutProperties(node, _excluded);
      position = prevNode.text.length;
      properties = rest;
    } else if (Node.isElement(node) && Node.isElement(prevNode)) {
      if (node.children.length > 0 && prevNode.children.length > 0 && Editor.hasInlines(editor, node) !== Editor.hasInlines(editor, prevNode)) {
        removePrevious = Editor.shouldMergeNodesRemovePrevNode(editor, prev, current);
        if (!removePrevious) {
          throw new Error(`Cannot merge the node at path [${path}] with the previous node at path [${prevPath}] because their children are not the same kind: one contains blocks and the other contains text or inline nodes.`);
        }
      }
      const {
          children
        } = node,
        rest = _objectWithoutProperties(node, _excluded2);
      position = prevNode.children.length;
      properties = rest;
    } else {
      throw new Error(`Cannot merge the node at path [${path}] with the previous sibling because it is not the same kind: ${Scrubber.stringify(node)} ${Scrubber.stringify(prevNode)}`);
    }
    const emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
    // If the node isn't already the next sibling of the previous node, move
    // it so that it is before merging.
    if (!isPreviousSibling) {
      Transforms.moveNodes(editor, {
        at: path,
        to: newPath,
        voids
      });
    }
    // If there was going to be an empty ancestor of the node that was merged,
    // we remove it from the tree.
    if (emptyRef) {
      Transforms.removeNodes(editor, {
        at: emptyRef.current,
        voids
      });
    }
    if (removePrevious !== null && removePrevious !== void 0 ? removePrevious : Editor.shouldMergeNodesRemovePrevNode(editor, prev, current)) {
      Transforms.removeNodes(editor, {
        at: prevPath,
        voids
      });
    } else {
      editor.apply({
        type: 'merge_node',
        path: newPath,
        position,
        properties
      });
    }
    if (emptyRef) {
      emptyRef.unref();
    }
  });
};

const moveNodes = (editor, options) => {
  Editor.withoutNormalizing(editor, () => {
    const {
      to,
      at = editor.selection,
      mode = 'lowest',
      select = false,
      voids = false
    } = options;
    let {
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Location.isPath(at) ? matchPath(editor, at) : n => Node.isElement(n) && Editor.isBlock(editor, n);
    }
    const toRef = Editor.pathRef(editor, to);
    const targets = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    const pathRefs = Array.from(targets, ([, p]) => Editor.pathRef(editor, p));
    let movedPath;
    for (const pathRef of pathRefs) {
      const path = pathRef.unref();
      const newPath = toRef.current;
      if (path.length !== 0) {
        var _Path$transform;
        editor.apply({
          type: 'move_node',
          path,
          newPath
        });
        movedPath = (_Path$transform = Path.transform(path, {
          type: 'move_node',
          path,
          newPath
        })) !== null && _Path$transform !== void 0 ? _Path$transform : undefined;
      }
      if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
        // When performing a sibling move to a later index, the path at the destination is shifted
        // to before the insertion point instead of after. To ensure our group of nodes are inserted
        // in the correct order we increment toRef to account for that
        toRef.current = Path.next(toRef.current);
      }
    }
    toRef.unref();
    if (select && movedPath) Transforms.select(editor, Editor.end(editor, movedPath));
  });
};

const removeNodes = (editor, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    const {
      hanging = false,
      voids = false,
      mode = 'lowest'
    } = options;
    let {
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Location.isPath(at) ? matchPath(editor, at) : n => Node.isElement(n) && Editor.isBlock(editor, n);
    }
    if (!hanging && Location.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    const depths = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    const pathRefs = Array.from(depths, ([, p]) => Editor.pathRef(editor, p));
    for (const pathRef of pathRefs) {
      const path = pathRef.unref();
      if (path) {
        const [node] = Editor.node(editor, path);
        editor.apply({
          type: 'remove_node',
          path,
          node
        });
      }
    }
  });
};

const setNodes = (editor, props, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    let {
      match,
      at = editor.selection,
      compare,
      merge
    } = options;
    const {
      hanging = false,
      mode = 'lowest',
      replace = false,
      split = false,
      voids = false
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Location.isPath(at) ? matchPath(editor, at) : n => Node.isElement(n) && Editor.isBlock(editor, n);
    }
    if (!hanging && Location.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (split && Location.isRange(at)) {
      if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
        // If the range is collapsed in a non-empty node and 'split' is true, there's nothing to
        // set that won't get normalized away
        return;
      }
      const rangeRef = Editor.rangeRef(editor, at, {
        affinity: 'inward'
      });
      const [start, end] = Range.edges(at);
      const splitMode = mode === 'lowest' ? 'lowest' : 'highest';
      const endAtEndOfNode = Editor.isEnd(editor, end, end.path);
      Transforms.splitNodes(editor, {
        at: end,
        match,
        mode: splitMode,
        voids,
        always: !endAtEndOfNode
      });
      const startAtStartOfNode = Editor.isStart(editor, start, start.path);
      Transforms.splitNodes(editor, {
        at: start,
        match,
        mode: splitMode,
        voids,
        always: !startAtStartOfNode
      });
      at = rangeRef.unref();
      if (options.at == null) {
        Transforms.select(editor, at);
      }
    }
    if (!compare) {
      compare = (prop, nodeProp) => prop !== nodeProp;
    }
    for (const [node, path] of Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    })) {
      const properties = {};
      const newProperties = {};
      // You can't set properties on the editor node.
      if (path.length === 0) {
        continue;
      }
      let hasChanges = false;
      const nodeProps = typeof props === 'function' ? props(node, path) : props;
      for (const k in nodeProps) {
        if (NON_SETTABLE_NODE_PROPERTIES.includes(k)) {
          continue;
        }
        const value = Object.hasOwn(node, k) ? node[k] : undefined;
        const newValue = nodeProps[k];
        if (compare(newValue, value)) {
          hasChanges = true;
          // Omit new properties from the old properties list
          if (Object.hasOwn(node, k)) properties[k] = value;
          // Omit properties that have been removed from the new properties list
          if (merge) {
            if (newValue != null) newProperties[k] = merge(value, newValue);
          } else {
            if (newValue != null) newProperties[k] = newValue;
          }
        }
      }
      if (replace) {
        for (const k in node) {
          if (Object.hasOwn(node, k) && !Object.hasOwn(nodeProps, k) && !NON_SETTABLE_NODE_PROPERTIES.includes(k)) {
            hasChanges = true;
            properties[k] = node[k];
          }
        }
      }
      if (hasChanges) {
        editor.apply({
          type: 'set_node',
          path,
          properties,
          newProperties
        });
      }
    }
  });
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const isSameNode = (a, b) => a === b || isDeepEqual(a, b);
const edges = (before, after) => {
  let start = 0;
  let suffix = 0;
  while (start < before.length && start < after.length && isSameNode(before[start], after[start])) start++;
  while (suffix < before.length - start && suffix < after.length - start && isSameNode(before[before.length - 1 - suffix], after[after.length - 1 - suffix])) suffix++;
  return {
    start,
    suffix
  };
};
const setChildren = (editor, children) => {
  if (children === editor.children) return;
  const root = {
    node: editor
  };
  const positions = parent => {
    if (!parent.children) {
      parent.children = Text.isText(parent.node) ? [] : parent.node.children.map(node => ({
        node,
        parent
      }));
    }
    return parent.children;
  };
  const positionAt = path => {
    let position = root;
    for (const index of path) {
      position = position && positions(position)[index];
    }
    return position;
  };
  const pathOf = position => {
    const path = [];
    while (position !== root) {
      const parent = position.parent;
      if (!parent) return null;
      path.push(positions(parent).indexOf(position));
      position = parent;
    }
    return path.reverse();
  };
  const sources = new Map();
  const wanted = new Set();
  const candidates = new Set();
  const cleanups = [];
  const dirty = new Set();
  for (const path of (_DIRTY_PATHS$get = DIRTY_PATHS.get(editor)) !== null && _DIRTY_PATHS$get !== void 0 ? _DIRTY_PATHS$get : []) {
    var _DIRTY_PATHS$get;
    const position = positionAt(path);
    if (position) dirty.add(position);
  }
  const apply = op => {
    const paths = editor.getDirtyPaths(op);
    const position = positionAt(op.path);
    const parent = op.path.length ? positionAt(Path.parent(op.path)) : root;
    const destination = op.type === 'move_node' ? positionAt(Path.parent(op.newPath)) : undefined;
    if (parent) positions(parent);
    if (destination) positions(destination);
    editor.apply(op);
    if (op.type === 'insert_node') {
      positions(parent).splice(op.path[op.path.length - 1], 0, {
        node: op.node,
        parent
      });
    } else if (op.type === 'remove_node') {
      positions(parent).splice(op.path[op.path.length - 1], 1);
      position.parent = undefined;
    } else if (op.type === 'move_node') {
      const path = Path.transform(op.path, op);
      positions(parent).splice(op.path[op.path.length - 1], 1);
      positions(destination).splice(path[path.length - 1], 0, position);
      position.parent = destination;
    }
    for (const path of paths) {
      const _position = positionAt(path);
      if (_position) dirty.add(_position);
    }
  };
  const rememberTree = position => {
    candidates.add(position);
    for (const child of positions(position)) rememberTree(child);
  };
  const wantTree = node => {
    for (const [child] of Node.nodes(node)) {
      if (!Editor.isEditor(child)) wanted.add(child);
    }
  };
  const prepare = (parent, before, after) => {
    const {
      start,
      suffix
    } = edges(before, after);
    const end = Math.max(before.length, after.length) - suffix;
    for (let i = start; i < end; i++) {
      const old = i < before.length - suffix ? before[i] : undefined;
      const next = i < after.length - suffix ? after[i] : undefined;
      const position = old && positions(parent)[i];
      if (position) candidates.add(position);
      if (next) wanted.add(next);
      if (Element.isElement(old) && Element.isElement(next)) {
        prepare(position, old.children, next.children);
      } else {
        if (position) rememberTree(position);
        if (next) wantTree(next);
      }
    }
  };
  const consume = node => {
    for (const [child] of Node.nodes(node)) {
      if (!Editor.isEditor(child)) sources.delete(child);
    }
  };
  const containsSource = node => {
    for (const [child] of Node.nodes(node)) {
      if (!Editor.isEditor(child) && wanted.has(child) && sources.has(child)) return true;
    }
    return false;
  };
  const setProperties = (before, after, path) => {
    const old = new Map(Object.entries(Node.extractProps(before)));
    const next = new Map(Object.entries(Node.extractProps(after)));
    const changed = [...new Set([...old.keys(), ...next.keys()])].filter(key => !NON_SETTABLE_NODE_PROPERTIES.includes(key) && !isDeepEqual(old.get(key), next.get(key)));
    if (changed.length) apply({
      type: 'set_node',
      path,
      properties: Object.fromEntries(changed.map(key => [key, old.get(key)])),
      newProperties: Object.fromEntries(changed.map(key => [key, next.get(key)]))
    });
  };
  const reconcile = (parent, after) => {
    const before = Node.ancestor(editor, pathOf(parent)).children;
    const {
      start,
      suffix
    } = edges(before, after);
    if (start === before.length && start === after.length) return;
    if (before.length > after.length || sources.size > 0) cleanups.push({
      parent,
      length: after.length,
      suffix
    });
    for (let i = start; i < after.length - suffix; i++) {
      let path = pathOf(parent).concat(i);
      const next = after[i];
      const source = sources.get(next);
      const sourcePath = source && pathOf(source);
      if (sourcePath) {
        if (!Path.equals(sourcePath, path)) apply({
          type: 'move_node',
          path: sourcePath,
          newPath: path
        });
        consume(next);
        continue;
      }
      const siblings = Node.ancestor(editor, pathOf(parent)).children;
      const current = i < siblings.length - suffix ? siblings[i] : undefined;
      if (current === next) {
        consume(next);
        continue;
      }
      const reserved = current && wanted.has(current) && sources.has(current);
      const sameKind = current && Text.isText(current) === Text.isText(next) && NON_SETTABLE_NODE_PROPERTIES.every(key => {
        var _Object$getOwnPropert, _Object$getOwnPropert2;
        return key === 'text' || key === 'children' || isDeepEqual((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(current, key)) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.value, (_Object$getOwnPropert2 = Object.getOwnPropertyDescriptor(next, key)) === null || _Object$getOwnPropert2 === void 0 ? void 0 : _Object$getOwnPropert2.value);
      });
      if (current && !reserved && sameKind) {
        if (isDeepEqual(current, next)) continue;
        setProperties(current, next, path);
        if (Text.isText(current) && Text.isText(next)) {
          let prefix = 0;
          let end = 0;
          while (prefix < current.text.length && prefix < next.text.length && current.text[prefix] === next.text[prefix]) prefix++;
          while (end < current.text.length - prefix && end < next.text.length - prefix && current.text[current.text.length - 1 - end] === next.text[next.text.length - 1 - end]) end++;
          const removed = current.text.slice(prefix, current.text.length - end);
          const inserted = next.text.slice(prefix, next.text.length - end);
          if (removed) apply({
            type: 'remove_text',
            path,
            offset: prefix,
            text: removed
          });
          if (inserted) apply({
            type: 'insert_text',
            path,
            offset: prefix,
            text: inserted
          });
        } else if (Element.isElement(next)) reconcile(positionAt(path), next.children);
      } else {
        if (current && !containsSource(current)) apply({
          type: 'remove_node',
          path,
          node: current
        });
        path = pathOf(parent).concat(i);
        const split = Element.isElement(next) && containsSource(next);
        apply({
          type: 'insert_node',
          path,
          node: split ? _objectSpread$1(_objectSpread$1({}, next), {}, {
            children: []
          }) : next
        });
        if (split && Element.isElement(next)) reconcile(positionAt(path), next.children);
      }
    }
  };
  prepare(root, editor.children, children);
  for (const position of candidates) {
    if (!Editor.isEditor(position.node) && wanted.has(position.node)) {
      sources.set(position.node, position);
    }
  }
  Editor.withoutNormalizing(editor, () => {
    batchDirtyPaths(editor, () => {
      reconcile(root, children);
      for (const {
        parent,
        length,
        suffix
      } of cleanups.reverse()) {
        const path = pathOf(parent);
        while (Node.ancestor(editor, path).children.length > length) {
          const at = path.concat(length - suffix);
          apply({
            type: 'remove_node',
            path: at,
            node: Node.descendant(editor, at)
          });
        }
      }
    }, () => {
      const paths = new Map();
      const visit = (position, path) => {
        var _position$children;
        paths.set(position, path);
        (_position$children = position.children) === null || _position$children === void 0 || _position$children.forEach((child, index) => visit(child, path.concat(index)));
      };
      visit(root, []);
      const final = [];
      for (const position of dirty) {
        const path = paths.get(position);
        if (path) final.push(path);
      }
      updateDirtyPaths(editor, final, () => null);
    });
  });
};

/**
 * Convert a range into a point by deleting it's content.
 */
const deleteRange = (editor, range) => {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    const [, end] = Range.edges(range);
    const pointRef = Editor.pointRef(editor, end);
    Transforms.delete(editor, {
      at: range
    });
    return pointRef.unref();
  }
};
const splitNodes = (editor, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    const {
      mode = 'lowest',
      voids = false,
      select = options.at == null
    } = options;
    let {
      match,
      at = editor.selection,
      height = 0,
      always = false
    } = options;
    if (!at) return;
    const isDefaultMatch = match == null && !Location.isPath(at);
    if (match == null) {
      match = n => Node.isElement(n) && Editor.isBlock(editor, n);
    }
    if (Location.isRange(at)) {
      at = deleteRange(editor, at);
      if (!at) return;
    }
    // If the target is a path, the default height-skipping and position
    // counters need to account for us potentially splitting at a non-leaf.
    if (Location.isPath(at)) {
      const path = at;
      const point = Editor.point(editor, path);
      const [parent] = Editor.parent(editor, path);
      match = n => n === parent;
      height = point.path.length - path.length + 1;
      at = point;
      always = true;
    }
    const beforeRef = Editor.pointRef(editor, at, {
      affinity: 'backward'
    });
    let afterRef;
    try {
      const [highest] = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      if (!highest) {
        return;
      }
      const voidMatch = Editor.void(editor, {
        at,
        mode: 'highest'
      });
      const nudge = 0;
      if (!voids && voidMatch) {
        const [voidNode, voidPath] = voidMatch;
        if (editor.isInline(voidNode)) {
          let after = Editor.after(editor, voidPath);
          if (!after) {
            const text = {
              text: ''
            };
            const afterPath = Path.next(voidPath);
            Transforms.insertNodes(editor, text, {
              at: afterPath,
              voids
            });
            after = Editor.point(editor, afterPath);
          }
          at = after;
          always = true;
        }
        const siblingHeight = at.path.length - voidPath.length;
        height = siblingHeight + 1;
        always = true;
      }
      afterRef = Editor.pointRef(editor, at);
      const depth = at.path.length - height;
      const [, highestPath] = highest;
      const lowestPath = at.path.slice(0, depth);
      let position = height === 0 ? at.offset : at.path[depth] + nudge;
      for (const [node, path] of Editor.levels(editor, {
        at: lowestPath,
        reverse: true,
        voids
      })) {
        let split = false;
        if (path.length < highestPath.length || path.length === 0 || !voids && Node.isElement(node) && Editor.isVoid(editor, node) || Node.isElement(node) && Editor.isIsolated(editor, node) && (isDefaultMatch || !Path.equals(path, highestPath))) {
          break;
        }
        const point = beforeRef.current;
        const isEnd = Editor.isEnd(editor, point, path);
        if (always || !beforeRef || !Editor.isEdge(editor, point, path)) {
          split = true;
          const properties = editor.getSplitProperties(node, path);
          editor.apply({
            type: 'split_node',
            path,
            position,
            properties
          });
        }
        position = path[path.length - 1] + (split || isEnd ? 1 : 0);
      }
      if (select) {
        const point = afterRef.current || Editor.end(editor, []);
        Transforms.select(editor, point);
      }
    } finally {
      var _afterRef;
      beforeRef.unref();
      (_afterRef = afterRef) === null || _afterRef === void 0 || _afterRef.unref();
    }
  });
};

const unsetNodes = (editor, props, options = {}) => {
  if (!Array.isArray(props)) {
    props = [props];
  }
  const obj = {};
  for (const key of props) {
    obj[key] = null;
  }
  Transforms.setNodes(editor, obj, options);
};

const unwrapNodes = (editor, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    const {
      mode = 'lowest',
      hanging = false,
      split = false,
      voids = false
    } = options;
    let {
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (match == null) {
      match = Location.isPath(at) ? matchPath(editor, at) : n => Node.isElement(n) && Editor.isBlock(editor, n);
    }
    if (split && Range.isRange(at) && Range.isExpanded(at)) {
      const _rangeRef = Editor.rangeRef(editor, at, {
        affinity: 'inward'
      });
      const [start, end] = Range.edges(at);
      const inlineMatch = (node, path) => Node.isElement(node) && Editor.isInline(editor, node) && match(node, path);
      const splitMode = mode === 'all' ? 'highest' : mode;
      const operationCount = editor.operations.length;
      Transforms.splitNodes(editor, {
        at: end,
        match: inlineMatch,
        mode: splitMode,
        voids
      });
      Transforms.splitNodes(editor, {
        at: start,
        match: inlineMatch,
        mode: splitMode,
        voids
      });
      at = _rangeRef.unref();
      if (options.at == null && editor.operations.length > operationCount) {
        Transforms.select(editor, at);
      }
    }
    if (Location.isPath(at)) {
      at = Editor.range(editor, at);
    }
    const rangeRef = Location.isRange(at) ? Editor.rangeRef(editor, at) : null;
    const matches = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    const pathRefs = Array.from(matches, ([, p]) => Editor.pathRef(editor, p)
    // unwrapNode will call liftNode which does not support splitting the node when nested.
    // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
    // that wrap target node. So we reverse the order.
    ).reverse();
    for (const pathRef of pathRefs) {
      const path = pathRef.unref();
      const [node] = Editor.node(editor, path);
      let range = Editor.range(editor, path);
      if (split && rangeRef) {
        range = Range.intersection(rangeRef.current, range);
      }
      Transforms.liftNodes(editor, {
        at: range,
        match: n => !Node.isText(node) && node.children.includes(n),
        voids
      });
    }
    if (rangeRef) {
      rangeRef.unref();
    }
  });
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const wrapNodes = (editor, element, options = {}) => {
  Editor.withoutNormalizing(editor, () => {
    const {
      mode = 'lowest',
      hanging = false,
      split = false,
      voids = false
    } = options;
    let {
      match,
      at = editor.selection
    } = options;
    if (!at) {
      return;
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (match == null) {
      if (Location.isPath(at)) {
        match = matchPath(editor, at);
      } else if (editor.isInline(element)) {
        match = n => Node.isElement(n) && Editor.isInline(editor, n) || Node.isText(n);
      } else {
        match = n => Node.isElement(n) && Editor.isBlock(editor, n);
      }
    }
    if (split && Location.isRange(at)) {
      const [start, end] = Range.edges(at);
      const commonPath = Path.equals(start.path, end.path) ? Path.parent(start.path) : Path.common(start.path, end.path);
      const rangeRef = Editor.rangeRef(editor, at, {
        affinity: 'inward'
      });
      // Always split if we're in the middle of a block, to ensure that text
      // node boundaries are handled correctly.
      const isAtBlockEdge = point => {
        const blockAbove = Editor.above(editor, {
          at: point,
          match: n => Node.isElement(n) && Editor.isBlock(editor, n)
        });
        return blockAbove && Editor.isEdge(editor, point, blockAbove[1]);
      };
      const backward = Range.isBackward(at);
      const collapsed = Range.isCollapsed(at);
      const splitAt = (point, edge) => {
        const [entry] = Editor.nodes(editor, {
          at: point,
          match,
          mode: 'lowest',
          voids
        });
        if (!editor.isInline(element) || collapsed || !entry || !Node.isText(entry[0])) {
          Transforms.splitNodes(editor, {
            at: point,
            match,
            voids,
            always: !isAtBlockEdge(point)
          });
          return;
        }
        Transforms.splitNodes(editor, {
          at: point,
          match: Node.isText,
          voids,
          always: !isAtBlockEdge(point)
        });
        const key = edge === 'start' ? backward ? 'focus' : 'anchor' : backward ? 'anchor' : 'focus';
        const minDepth = Math.min(commonPath.length + 1, entry[1].length);
        const hasContent = node => !Node.isText(node) || node.text !== '';
        for (let depth = point.path.length - 1; depth >= minDepth; depth--) {
          const current = rangeRef.current[key];
          const path = current.path.slice(0, depth);
          const node = Node.get(editor, path);
          if (!Node.isElement(node) || !editor.isInline(node)) continue;
          const position = current.path[depth] + (edge === 'end' ? 1 : 0);
          const before = node.children.slice(0, position).some(hasContent);
          const after = node.children.slice(position).some(hasContent);
          if (before && after) {
            editor.apply({
              type: 'split_node',
              path,
              position,
              properties: editor.getSplitProperties(node, path)
            });
          } else if (edge === 'start' ? before : after) {
            const outside = edge === 'start' ? Editor.after(editor, path, {
              voids
            }) : Editor.before(editor, path, {
              voids
            });
            if (outside) {
              rangeRef.current = _objectSpread(_objectSpread({}, rangeRef.current), {}, {
                [key]: outside
              });
            }
          }
        }
      };
      splitAt(end, 'end');
      splitAt(start, 'start');
      at = rangeRef.unref();
      if (options.at == null) {
        Transforms.select(editor, at);
      }
    }
    const roots = Array.from(Editor.nodes(editor, {
      at,
      match: editor.isInline(element) ? n => Node.isElement(n) && Editor.isBlock(editor, n) : n => Node.isEditor(n),
      mode: 'lowest',
      voids
    }));
    for (const [, rootPath] of roots) {
      const a = Location.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;
      if (!a) {
        continue;
      }
      const matches = Array.from(Editor.nodes(editor, {
        at: a,
        match,
        mode,
        voids
      }));
      if (matches.length > 0) {
        const [first] = matches;
        const last = matches[matches.length - 1];
        const [, firstPath] = first;
        const [, lastPath] = last;
        if (firstPath.length === 0 && lastPath.length === 0) {
          // if there's no matching parent - usually means the node is an editor - don't do anything
          continue;
        }
        const commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
        const range = Editor.range(editor, firstPath, lastPath);
        const commonNodeEntry = Editor.node(editor, commonPath);
        const [commonNode] = commonNodeEntry;
        const depth = commonPath.length + 1;
        const wrapperPath = Path.next(lastPath.slice(0, depth));
        const wrapper = _objectSpread(_objectSpread({}, element), {}, {
          children: []
        });
        Transforms.insertNodes(editor, wrapper, {
          at: wrapperPath,
          voids
        });
        Transforms.moveNodes(editor, {
          at: range,
          match: n => !Node.isText(commonNode) && commonNode.children.includes(n),
          to: wrapperPath.concat(0),
          voids
        });
      }
    }
  });
};

/**
 * Create a new Slate `Editor` object.
 */
const createEditor = () => {
  const editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => false,
    isIsolated: () => false,
    inlineEdgeAffinity: () => null,
    leafEdgeAffinity: () => null,
    isInline: () => false,
    isSelectable: () => true,
    isVoid: () => false,
    markableVoid: () => false,
    onChange: () => {},
    // Core
    apply: (...args) => apply(editor, ...args),
    // Editor
    addMark: (...args) => addMark(editor, ...args),
    deleteBackward: (...args) => deleteBackward(editor, ...args),
    deleteForward: (...args) => deleteForward(editor, ...args),
    deleteFragment: (...args) => deleteFragment(editor, ...args),
    getFragment: (...args) => getFragment(editor, ...args),
    insertBreak: (...args) => insertBreak(editor, ...args),
    insertSoftBreak: (...args) => insertSoftBreak(editor, ...args),
    insertFragment: (...args) => insertFragment(editor, ...args),
    insertNode: (...args) => insertNode(editor, ...args),
    insertText: (...args) => insertText(editor, ...args),
    normalizeNode: (...args) => normalizeNode(editor, ...args),
    removeMark: (...args) => removeMark(editor, ...args),
    getDirtyPaths: (...args) => getDirtyPaths(editor, ...args),
    getSplitProperties: (...args) => getSplitProperties(editor, ...args),
    shouldNormalize: (...args) => shouldNormalize(editor, ...args),
    // Editor interface
    above: (...args) => above(editor, ...args),
    after: (...args) => after(editor, ...args),
    before: (...args) => before(editor, ...args),
    collapse: (...args) => collapse(editor, ...args),
    delete: (...args) => deleteText(editor, ...args),
    deselect: (...args) => deselect(editor, ...args),
    edges: (...args) => edges$1(editor, ...args),
    elementReadOnly: (...args) => elementReadOnly(editor, ...args),
    end: (...args) => end(editor, ...args),
    first: (...args) => first(editor, ...args),
    fragment: (...args) => fragment(editor, ...args),
    getMarks: (...args) => marks(editor, ...args),
    hasBlocks: (...args) => hasBlocks(editor, ...args),
    hasInlines: (...args) => hasInlines(editor, ...args),
    hasPath: (...args) => hasPath(editor, ...args),
    hasRange: (...args) => hasRange(editor, ...args),
    hasTexts: (...args) => hasTexts(editor, ...args),
    insertNodes: (...args) => insertNodes(editor, ...args),
    insertionPoint: (...args) => insertionPoint(editor, ...args),
    isBlock: (...args) => isBlock(editor, ...args),
    isEdge: (...args) => isEdge(editor, ...args),
    isEmpty: (...args) => isEmpty(editor, ...args),
    isEnd: (...args) => isEnd(editor, ...args),
    isNormalizing: (...args) => isNormalizing(editor, ...args),
    isStart: (...args) => isStart(editor, ...args),
    last: (...args) => last(editor, ...args),
    leaf: (...args) => leaf(editor, ...args),
    levels: (...args) => levels(editor, ...args),
    liftNodes: (...args) => liftNodes(editor, ...args),
    mergeNodes: (...args) => mergeNodes(editor, ...args),
    move: (...args) => move(editor, ...args),
    moveNodes: (...args) => moveNodes(editor, ...args),
    next: (...args) => next(editor, ...args),
    node: (...args) => node(editor, ...args),
    nodes: (...args) => nodes(editor, ...args),
    normalize: (...args) => normalize(editor, ...args),
    parent: (...args) => parent(editor, ...args),
    path: (...args) => path(editor, ...args),
    pathRef: (...args) => pathRef(editor, ...args),
    pathRefs: (...args) => pathRefs(editor, ...args),
    point: (...args) => point(editor, ...args),
    pointRef: (...args) => pointRef(editor, ...args),
    pointRefs: (...args) => pointRefs(editor, ...args),
    positions: (...args) => positions(editor, ...args),
    previous: (...args) => previous(editor, ...args),
    range: (...args) => range(editor, ...args),
    rangeRef: (...args) => rangeRef(editor, ...args),
    rangeRefs: (...args) => rangeRefs(editor, ...args),
    removeNodes: (...args) => removeNodes(editor, ...args),
    select: (...args) => select(editor, ...args),
    setChildren: (...args) => setChildren(editor, ...args),
    setNodes: (...args) => setNodes(editor, ...args),
    setNormalizing: (...args) => setNormalizing(editor, ...args),
    setPoint: (...args) => setPoint(editor, ...args),
    setSelection: (...args) => setSelection(editor, ...args),
    splitNodes: (...args) => splitNodes(editor, ...args),
    start: (...args) => start(editor, ...args),
    string: (...args) => string(editor, ...args),
    unhangRange: (...args) => unhangRange(editor, ...args),
    unsetNodes: (...args) => unsetNodes(editor, ...args),
    unwrapNodes: (...args) => unwrapNodes(editor, ...args),
    void: (...args) => getVoid(editor, ...args),
    word: (...args) => word(editor, ...args),
    withoutNormalizing: (...args) => withoutNormalizing(editor, ...args),
    wrapNodes: (...args) => wrapNodes(editor, ...args),
    shouldMergeNodesRemovePrevNode: (...args) => shouldMergeNodesRemovePrevNode(editor, ...args)
  };
  return editor;
};

exports.Editor = Editor;
exports.Element = Element;
exports.Location = Location;
exports.Node = Node;
exports.Operation = Operation;
exports.Path = Path;
exports.PathRef = PathRef;
exports.Point = Point;
exports.PointRef = PointRef;
exports.Range = Range;
exports.RangeRef = RangeRef;
exports.Scrubber = Scrubber;
exports.Span = Span;
exports.Text = Text;
exports.Transforms = Transforms;
exports.above = above;
exports.addMark = addMark;
exports.after = after;
exports.apply = apply;
exports.before = before;
exports.collapse = collapse;
exports.createEditor = createEditor;
exports.deleteBackward = deleteBackward;
exports.deleteForward = deleteForward;
exports.deleteFragment = deleteFragment;
exports.deleteText = deleteText;
exports.deselect = deselect;
exports.edges = edges$1;
exports.elementReadOnly = elementReadOnly;
exports.end = end;
exports.first = first;
exports.fragment = fragment;
exports.getDirtyPaths = getDirtyPaths;
exports.getFragment = getFragment;
exports.getSplitProperties = getSplitProperties;
exports.getVoid = getVoid;
exports.hasBlocks = hasBlocks;
exports.hasInlines = hasInlines;
exports.hasPath = hasPath;
exports.hasRange = hasRange;
exports.hasTexts = hasTexts;
exports.insertBreak = insertBreak;
exports.insertFragment = insertFragment;
exports.insertNode = insertNode;
exports.insertNodes = insertNodes;
exports.insertSoftBreak = insertSoftBreak;
exports.insertText = insertText;
exports.insertionPoint = insertionPoint;
exports.isBlock = isBlock;
exports.isEdge = isEdge;
exports.isEditor = isEditor;
exports.isEmpty = isEmpty;
exports.isEnd = isEnd;
exports.isNormalizing = isNormalizing;
exports.isObject = isObject;
exports.isStart = isStart;
exports.last = last;
exports.leaf = leaf;
exports.levels = levels;
exports.liftNodes = liftNodes;
exports.marks = marks;
exports.mergeNodes = mergeNodes;
exports.move = move;
exports.moveNodes = moveNodes;
exports.next = next;
exports.node = node;
exports.nodes = nodes;
exports.normalize = normalize;
exports.normalizeNode = normalizeNode;
exports.parent = parent;
exports.path = path;
exports.pathRef = pathRef;
exports.pathRefs = pathRefs;
exports.point = point;
exports.pointRef = pointRef;
exports.pointRefs = pointRefs;
exports.positions = positions;
exports.previous = previous;
exports.range = range;
exports.rangeRef = rangeRef;
exports.rangeRefs = rangeRefs;
exports.removeMark = removeMark;
exports.removeNodes = removeNodes;
exports.select = select;
exports.setChildren = setChildren;
exports.setNodes = setNodes;
exports.setNormalizing = setNormalizing;
exports.setPoint = setPoint;
exports.setSelection = setSelection;
exports.shouldMergeNodesRemovePrevNode = shouldMergeNodesRemovePrevNode;
exports.shouldNormalize = shouldNormalize;
exports.splitNodes = splitNodes;
exports.start = start;
exports.string = string;
exports.unhangRange = unhangRange;
exports.unsetNodes = unsetNodes;
exports.unwrapNodes = unwrapNodes;
exports.withoutNormalizing = withoutNormalizing;
exports.word = word;
exports.wrapNodes = wrapNodes;

});
