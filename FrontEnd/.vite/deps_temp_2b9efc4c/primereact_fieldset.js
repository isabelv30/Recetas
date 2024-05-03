"use client";
import {
  CSSTransition
} from "./chunk-P6X4JVE5.js";
import {
  IconBase,
  Ripple
} from "./chunk-BSMJUS4I.js";
import "./chunk-UWZXFKA6.js";
import {
  ComponentBase,
  useHandleStyle,
  useMergeProps,
  useMountEffect
} from "./chunk-FIKOWEIJ.js";
import {
  IconUtils,
  PrimeReactContext,
  UniqueComponentId,
  classNames
} from "./chunk-WUUZM6BT.js";
import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/primereact/fieldset/fieldset.esm.js
var React3 = __toESM(require_react());

// node_modules/primereact/icons/minus/index.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var MinusIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",
    fill: "currentColor"
  }));
}));
MinusIcon.displayName = "MinusIcon";

// node_modules/primereact/icons/plus/index.esm.js
var React2 = __toESM(require_react());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var PlusIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",
    fill: "currentColor"
  }));
}));
PlusIcon.displayName = "PlusIcon";

// node_modules/primereact/fieldset/fieldset.esm.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var FieldsetBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Fieldset",
    id: null,
    legend: null,
    className: null,
    style: null,
    toggleable: null,
    collapsed: null,
    collapseIcon: null,
    transitionOptions: null,
    expandIcon: null,
    onExpand: null,
    onCollapse: null,
    onToggle: null,
    onClick: null,
    children: void 0
  },
  css: {
    classes: {
      root: function root(_ref) {
        var props = _ref.props;
        return classNames("p-fieldset p-component", {
          "p-fieldset-toggleable": props.toggleable
        });
      },
      toggleableContent: "p-toggleable-content",
      togglericon: "p-fieldset-toggler",
      legendTitle: "p-fieldset-legend-text",
      legend: "p-fieldset-legend p-unselectable-text",
      content: "p-fieldset-content",
      transition: "p-toggleable-content"
    },
    styles: "\n        @layer primereact {\n            .p-fieldset-legend > a,\n            .p-fieldset-legend > span {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            \n            .p-fieldset-toggleable .p-fieldset-legend a {\n                cursor: pointer;\n                user-select: none;\n                overflow: hidden;\n                position: relative;\n                text-decoration: none;\n            }\n            \n            .p-fieldset-legend-text {\n                line-height: 1;\n            }\n        }\n        "
  }
});
var Fieldset = React3.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React3.useContext(PrimeReactContext);
  var props = FieldsetBase.getProps(inProps, context);
  var _React$useState = React3.useState(props.id), _React$useState2 = _slicedToArray(_React$useState, 2), idState = _React$useState2[0], setIdState = _React$useState2[1];
  var _React$useState3 = React3.useState(props.collapsed), _React$useState4 = _slicedToArray(_React$useState3, 2), collapsedState = _React$useState4[0], setCollapsedState = _React$useState4[1];
  var collapsed = props.toggleable ? props.onToggle ? props.collapsed : collapsedState : false;
  var elementRef = React3.useRef(null);
  var contentRef = React3.useRef(null);
  var headerId = idState + "_header";
  var contentId = idState + "_content";
  var _FieldsetBase$setMeta = FieldsetBase.setMetaData({
    props,
    state: {
      id: idState,
      collapsed
    }
  }), ptm = _FieldsetBase$setMeta.ptm, cx = _FieldsetBase$setMeta.cx, isUnstyled = _FieldsetBase$setMeta.isUnstyled;
  useHandleStyle(FieldsetBase.css.styles, isUnstyled, {
    name: "fieldset"
  });
  var toggle = function toggle2(event) {
    if (props.toggleable) {
      collapsed ? expand(event) : collapse(event);
      if (props.onToggle) {
        props.onToggle({
          originalEvent: event,
          value: !collapsed
        });
      }
    }
    event.preventDefault();
  };
  var expand = function expand2(event) {
    if (!props.onToggle) {
      setCollapsedState(false);
    }
    props.onExpand && props.onExpand(event);
  };
  var collapse = function collapse2(event) {
    if (!props.onToggle) {
      setCollapsedState(true);
    }
    props.onCollapse && props.onCollapse(event);
  };
  useMountEffect(function() {
    if (!props.id) {
      setIdState(UniqueComponentId());
    }
  });
  var onKeyDown = function onKeyDown2(event) {
    if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
      toggle(event);
      event.preventDefault();
    }
  };
  var createContent = function createContent2() {
    var contentProps = mergeProps({
      className: cx("content")
    }, ptm("content"));
    var toggleableProps = mergeProps({
      ref: contentRef,
      id: contentId,
      role: "region",
      "aria-labelledby": headerId,
      className: cx("toggleableContent")
    }, ptm("toggleableContent"));
    var transitionProps = mergeProps({
      classNames: cx("transition"),
      timeout: {
        enter: 1e3,
        exit: 450
      },
      "in": !collapsed,
      unmountOnExit: true,
      options: props.transitionOptions
    }, ptm("transition"));
    return React3.createElement(CSSTransition, _extends3({
      nodeRef: contentRef
    }, transitionProps), React3.createElement("div", toggleableProps, React3.createElement("div", contentProps, props.children)));
  };
  var createToggleIcon = function createToggleIcon2() {
    if (props.toggleable) {
      var togglerIconProps = mergeProps({
        className: cx("togglericon")
      }, ptm("togglericon"));
      var icon = collapsed ? props.expandIcon || React3.createElement(PlusIcon, togglerIconProps) : props.collapseIcon || React3.createElement(MinusIcon, togglerIconProps);
      var toggleIcon = IconUtils.getJSXIcon(icon, togglerIconProps, {
        props
      });
      return toggleIcon;
    }
    return null;
  };
  var createLegendContent = function createLegendContent2() {
    var legendTextProps = mergeProps({
      className: cx("legendTitle")
    }, ptm("legendTitle"));
    var togglerProps = mergeProps({
      id: headerId,
      role: "button",
      "aria-expanded": !collapsed,
      "aria-controls": contentId,
      onKeyDown,
      onClick: toggle,
      "aria-label": props.legend,
      tabIndex: 0
    }, ptm("toggler"));
    if (props.toggleable) {
      var toggleIcon = createToggleIcon();
      return React3.createElement("a", togglerProps, toggleIcon, React3.createElement("span", legendTextProps, props.legend), React3.createElement(Ripple, null));
    }
    return React3.createElement("span", _extends3({}, legendTextProps, {
      id: headerId
    }), props.legend);
  };
  var createLegend = function createLegend2() {
    var legendProps = mergeProps({
      className: cx("legend")
    }, ptm("legend"));
    if (props.legend != null || props.toggleable) {
      var legendContent = createLegendContent();
      return React3.createElement("legend", legendProps, legendContent);
    }
  };
  React3.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      },
      getContent: function getContent() {
        return contentRef.current;
      }
    };
  });
  var rootProps = mergeProps({
    id: idState,
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root")),
    onClick: props.onClick
  }, FieldsetBase.getOtherProps(props), ptm("root"));
  var legend = createLegend();
  var content = createContent();
  return React3.createElement("fieldset", rootProps, legend, content);
});
Fieldset.displayName = "Fieldset";
export {
  Fieldset
};
//# sourceMappingURL=primereact_fieldset.js.map
