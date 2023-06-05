!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(
        require("core-js/modules/es.array.find.js"),
        require("core-js/modules/es.object.to-string.js"),
        require("core-js/modules/es.array.concat.js"),
        require("core-js/modules/web.dom-collections.for-each.js"),
        require("core-js/modules/es.object.keys.js"),
        require("core-js/modules/es.array.slice.js"),
        require("core-js/modules/es.regexp.exec.js"),
        require("core-js/modules/es.regexp.test.js"),
        require("core-js/modules/es.array.join.js"),
        require("core-js/modules/es.array.splice.js"),
        require("core-js/modules/es.promise.js"),
        require("core-js/modules/es.function.name.js"),
        require("core-js/modules/es.number.is-nan.js"),
        require("core-js/modules/es.number.constructor.js"),
        require("core-js/modules/es.array.map.js"),
        require("core-js/modules/es.array.iterator.js"),
        require("core-js/modules/web.dom-collections.iterator.js"),
        require("core-js/modules/es.array.filter.js"),
        require("core-js/modules/es.object.assign.js"),
        require("core-js/modules/es.symbol.js"),
        require("core-js/modules/es.string.match.js"),
        require("core-js/modules/es.regexp.constructor.js"),
        require("core-js/modules/es.regexp.sticky.js"),
        require("core-js/modules/es.regexp.to-string.js"),
        require("core-js/modules/es.string.split.js"),
        require("core-js/modules/es.string.replace.js"),
        require("core-js/modules/es.string.trim.js"),
        require("core-js/modules/es.array.sort.js"),
        require("core-js/modules/es.string.iterator.js"),
        require("core-js/modules/es.number.to-fixed.js"),
        require("core-js/modules/es.array.find-index.js"),
        require("core-js/modules/es.typed-array.uint8-array.js"),
        require("core-js/modules/esnext.typed-array.at.js"),
        require("core-js/modules/es.typed-array.copy-within.js"),
        require("core-js/modules/es.typed-array.every.js"),
        require("core-js/modules/es.typed-array.fill.js"),
        require("core-js/modules/es.typed-array.filter.js"),
        require("core-js/modules/es.typed-array.find.js"),
        require("core-js/modules/es.typed-array.find-index.js"),
        require("core-js/modules/esnext.typed-array.find-last.js"),
        require("core-js/modules/esnext.typed-array.find-last-index.js"),
        require("core-js/modules/es.typed-array.for-each.js"),
        require("core-js/modules/es.typed-array.includes.js"),
        require("core-js/modules/es.typed-array.index-of.js"),
        require("core-js/modules/es.typed-array.iterator.js"),
        require("core-js/modules/es.typed-array.join.js"),
        require("core-js/modules/es.typed-array.last-index-of.js"),
        require("core-js/modules/es.typed-array.map.js"),
        require("core-js/modules/es.typed-array.reduce.js"),
        require("core-js/modules/es.typed-array.reduce-right.js"),
        require("core-js/modules/es.typed-array.reverse.js"),
        require("core-js/modules/es.typed-array.set.js"),
        require("core-js/modules/es.typed-array.slice.js"),
        require("core-js/modules/es.typed-array.some.js"),
        require("core-js/modules/es.typed-array.sort.js"),
        require("core-js/modules/es.typed-array.subarray.js"),
        require("core-js/modules/es.typed-array.to-locale-string.js"),
        require("core-js/modules/es.typed-array.to-string.js"),
        require("core-js/modules/web.url.js"),
        require("core-js/modules/web.url-search-params.js"),
        require("core-js/modules/es.json.stringify.js"),
      ))
    : "function" == typeof define && define.amd
    ? define(
        [
          "core-js/modules/es.array.find.js",
          "core-js/modules/es.object.to-string.js",
          "core-js/modules/es.array.concat.js",
          "core-js/modules/web.dom-collections.for-each.js",
          "core-js/modules/es.object.keys.js",
          "core-js/modules/es.array.slice.js",
          "core-js/modules/es.regexp.exec.js",
          "core-js/modules/es.regexp.test.js",
          "core-js/modules/es.array.join.js",
          "core-js/modules/es.array.splice.js",
          "core-js/modules/es.promise.js",
          "core-js/modules/es.function.name.js",
          "core-js/modules/es.number.is-nan.js",
          "core-js/modules/es.number.constructor.js",
          "core-js/modules/es.array.map.js",
          "core-js/modules/es.array.iterator.js",
          "core-js/modules/web.dom-collections.iterator.js",
          "core-js/modules/es.array.filter.js",
          "core-js/modules/es.object.assign.js",
          "core-js/modules/es.symbol.js",
          "core-js/modules/es.string.match.js",
          "core-js/modules/es.regexp.constructor.js",
          "core-js/modules/es.regexp.sticky.js",
          "core-js/modules/es.regexp.to-string.js",
          "core-js/modules/es.string.split.js",
          "core-js/modules/es.string.replace.js",
          "core-js/modules/es.string.trim.js",
          "core-js/modules/es.array.sort.js",
          "core-js/modules/es.string.iterator.js",
          "core-js/modules/es.number.to-fixed.js",
          "core-js/modules/es.array.find-index.js",
          "core-js/modules/es.typed-array.uint8-array.js",
          "core-js/modules/esnext.typed-array.at.js",
          "core-js/modules/es.typed-array.copy-within.js",
          "core-js/modules/es.typed-array.every.js",
          "core-js/modules/es.typed-array.fill.js",
          "core-js/modules/es.typed-array.filter.js",
          "core-js/modules/es.typed-array.find.js",
          "core-js/modules/es.typed-array.find-index.js",
          "core-js/modules/esnext.typed-array.find-last.js",
          "core-js/modules/esnext.typed-array.find-last-index.js",
          "core-js/modules/es.typed-array.for-each.js",
          "core-js/modules/es.typed-array.includes.js",
          "core-js/modules/es.typed-array.index-of.js",
          "core-js/modules/es.typed-array.iterator.js",
          "core-js/modules/es.typed-array.join.js",
          "core-js/modules/es.typed-array.last-index-of.js",
          "core-js/modules/es.typed-array.map.js",
          "core-js/modules/es.typed-array.reduce.js",
          "core-js/modules/es.typed-array.reduce-right.js",
          "core-js/modules/es.typed-array.reverse.js",
          "core-js/modules/es.typed-array.set.js",
          "core-js/modules/es.typed-array.slice.js",
          "core-js/modules/es.typed-array.some.js",
          "core-js/modules/es.typed-array.sort.js",
          "core-js/modules/es.typed-array.subarray.js",
          "core-js/modules/es.typed-array.to-locale-string.js",
          "core-js/modules/es.typed-array.to-string.js",
          "core-js/modules/web.url.js",
          "core-js/modules/web.url-search-params.js",
          "core-js/modules/es.json.stringify.js",
        ],
        t,
      )
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Player = t());
})(this, function () {
  "use strict";
  function e(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        i.push.apply(i, n);
    }
    return i;
  }
  function t(t) {
    for (var i = 1; i < arguments.length; i++) {
      var n = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? e(Object(n), !0).forEach(function (e) {
            s(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : e(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function i(e) {
    return (i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function o(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, y(n.key), n);
    }
  }
  function r(e, t, i) {
    return t && o(e.prototype, t), i && o(e, i), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function s(e, t, i) {
    return (
      (t = y(t)) in e
        ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = i),
      e
    );
  }
  function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && c(e, t);
  }
  function l(e) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function c(e, t) {
    return (c = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
  }
  function u(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function h(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return u(e);
  }
  function d(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var i,
        n = l(e);
      if (t) {
        var o = l(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return h(this, i);
    };
  }
  function f(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)); );
    return e;
  }
  function p() {
    return (
      (p =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get.bind()
          : function (e, t, i) {
              var n = f(e, t);
              if (n) {
                var o = Object.getOwnPropertyDescriptor(n, t);
                return o.get ? o.get.call(arguments.length < 3 ? e : i) : o.value;
              }
            }),
      p.apply(this, arguments)
    );
  }
  function g(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return v(e);
      })(e) ||
      (function (e) {
        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return v(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === i && e.constructor && (i = e.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(e);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return v(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function v(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  function y(e) {
    var t = (function (e, t) {
      if ("object" != typeof e || null === e) return e;
      var i = e[Symbol.toPrimitive];
      if (void 0 !== i) {
        var n = i.call(e, t || "default");
        if ("object" != typeof n) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == typeof t ? t : String(t);
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  var m = { exports: {} };
  !(function (e) {
    var t = Object.prototype.hasOwnProperty,
      i = "~";
    function n() {}
    function o(e, t, i) {
      (this.fn = e), (this.context = t), (this.once = i || !1);
    }
    function r(e, t, n, r, s) {
      if ("function" != typeof n) throw new TypeError("The listener must be a function");
      var a = new o(n, r || e, s),
        l = i ? i + t : t;
      return (
        e._events[l]
          ? e._events[l].fn
            ? (e._events[l] = [e._events[l], a])
            : e._events[l].push(a)
          : ((e._events[l] = a), e._eventsCount++),
        e
      );
    }
    function s(e, t) {
      0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
    }
    function a() {
      (this._events = new n()), (this._eventsCount = 0);
    }
    Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (i = !1)),
      (a.prototype.eventNames = function () {
        var e,
          n,
          o = [];
        if (0 === this._eventsCount) return o;
        for (n in (e = this._events)) t.call(e, n) && o.push(i ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o;
      }),
      (a.prototype.listeners = function (e) {
        var t = i ? i + e : e,
          n = this._events[t];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var o = 0, r = n.length, s = new Array(r); o < r; o++) s[o] = n[o].fn;
        return s;
      }),
      (a.prototype.listenerCount = function (e) {
        var t = i ? i + e : e,
          n = this._events[t];
        return n ? (n.fn ? 1 : n.length) : 0;
      }),
      (a.prototype.emit = function (e, t, n, o, r, s) {
        var a = i ? i + e : e;
        if (!this._events[a]) return !1;
        var l,
          c,
          u = this._events[a],
          h = arguments.length;
        if (u.fn) {
          switch ((u.once && this.removeListener(e, u.fn, void 0, !0), h)) {
            case 1:
              return u.fn.call(u.context), !0;
            case 2:
              return u.fn.call(u.context, t), !0;
            case 3:
              return u.fn.call(u.context, t, n), !0;
            case 4:
              return u.fn.call(u.context, t, n, o), !0;
            case 5:
              return u.fn.call(u.context, t, n, o, r), !0;
            case 6:
              return u.fn.call(u.context, t, n, o, r, s), !0;
          }
          for (c = 1, l = new Array(h - 1); c < h; c++) l[c - 1] = arguments[c];
          u.fn.apply(u.context, l);
        } else {
          var d,
            f = u.length;
          for (c = 0; c < f; c++)
            switch ((u[c].once && this.removeListener(e, u[c].fn, void 0, !0), h)) {
              case 1:
                u[c].fn.call(u[c].context);
                break;
              case 2:
                u[c].fn.call(u[c].context, t);
                break;
              case 3:
                u[c].fn.call(u[c].context, t, n);
                break;
              case 4:
                u[c].fn.call(u[c].context, t, n, o);
                break;
              default:
                if (!l) for (d = 1, l = new Array(h - 1); d < h; d++) l[d - 1] = arguments[d];
                u[c].fn.apply(u[c].context, l);
            }
        }
        return !0;
      }),
      (a.prototype.on = function (e, t, i) {
        return r(this, e, t, i, !1);
      }),
      (a.prototype.once = function (e, t, i) {
        return r(this, e, t, i, !0);
      }),
      (a.prototype.removeListener = function (e, t, n, o) {
        var r = i ? i + e : e;
        if (!this._events[r]) return this;
        if (!t) return s(this, r), this;
        var a = this._events[r];
        if (a.fn) a.fn !== t || (o && !a.once) || (n && a.context !== n) || s(this, r);
        else {
          for (var l = 0, c = [], u = a.length; l < u; l++)
            (a[l].fn !== t || (o && !a[l].once) || (n && a[l].context !== n)) && c.push(a[l]);
          c.length ? (this._events[r] = 1 === c.length ? c[0] : c) : s(this, r);
        }
        return this;
      }),
      (a.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = i ? i + e : e), this._events[t] && s(this, t))
            : ((this._events = new n()), (this._eventsCount = 0)),
          this
        );
      }),
      (a.prototype.off = a.prototype.removeListener),
      (a.prototype.addListener = a.prototype.on),
      (a.prefixed = i),
      (a.EventEmitter = a),
      (e.exports = a);
  })(m);
  var k = m.exports,
    b = "undefined" != typeof window && window.location && window.location.href.indexOf("xgplayerdebugger=1") > -1,
    C = {
      info: "color: #525252; background-color: #90ee90;",
      error: "color: #525252; background-color: red;",
      warn: "color: #525252; background-color: yellow; ",
    },
    _ = "%c[xgplayer]",
    w = {
      config: { debug: b ? 3 : 0 },
      logInfo: function (e) {
        for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
        this.config.debug >= 3 && (t = console).log.apply(t, [_, C.info, e].concat(n));
      },
      logWarn: function (e) {
        for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
        this.config.debug >= 1 && (t = console).warn.apply(t, [_, C.warn, e].concat(n));
      },
      logError: function (e) {
        var t;
        if (!(this.config.debug < 1)) {
          for (
            var i = this.config.debug >= 2 ? "trace" : "error",
              n = arguments.length,
              o = new Array(n > 1 ? n - 1 : 0),
              r = 1;
            r < n;
            r++
          )
            o[r - 1] = arguments[r];
          (t = console)[i].apply(t, [_, C.error, e].concat(o));
        }
      },
    };
  var T = (function () {
      function e(t) {
        n(this, e), (this.bufferedList = t);
      }
      return (
        r(e, [
          {
            key: "start",
            value: function (e) {
              return this.bufferedList[e].start;
            },
          },
          {
            key: "end",
            value: function (e) {
              return this.bufferedList[e].end;
            },
          },
          {
            key: "length",
            get: function () {
              return this.bufferedList.length;
            },
          },
        ]),
        e
      );
    })(),
    x = {};
  function E(e, t) {
    for (var i = 0, n = t.length; i < n; i++) if (e.indexOf(t[i]) > -1) return !0;
    return !1;
  }
  function S(e) {
    var t = i(e);
    return null !== e && ("object" === t || "function" === t);
  }
  function P(e, t, i) {
    var n,
      o,
      r,
      s,
      a,
      l,
      c = 0,
      u = !1,
      h = !1,
      d = !0,
      f = !t && 0 !== t && "function" == typeof window.requestAnimationFrame;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function p(t) {
      var i = n,
        r = o;
      return (n = o = void 0), (c = t), (s = e.apply(r, i));
    }
    function g(e, t) {
      return f ? (window.cancelAnimationFrame(a), window.requestAnimationFrame(e)) : setTimeout(e, t);
    }
    function v(e) {
      return (c = e), (a = g(m, t)), u ? p(e) : s;
    }
    function y(e) {
      var i = e - l;
      return void 0 === l || i >= t || i < 0 || (h && e - c >= r);
    }
    function m() {
      var e = Date.now();
      if (y(e)) return k(e);
      a = g(
        m,
        (function (e) {
          var i = e - c,
            n = t - (e - l);
          return h ? Math.min(n, r - i) : n;
        })(e),
      );
    }
    function k(e) {
      return (a = void 0), d && n ? p(e) : ((n = o = void 0), s);
    }
    function b() {
      for (var e = Date.now(), i = y(e), r = arguments.length, c = new Array(r), u = 0; u < r; u++) c[u] = arguments[u];
      if (((n = c), (o = this), (l = e), i)) {
        if (void 0 === a) return v(l);
        if (h) return (a = g(m, t)), p(l);
      }
      return void 0 === a && (a = g(m, t)), s;
    }
    return (
      (t = +t || 0),
      S(i) &&
        ((u = !!i.leading),
        (r = (h = "maxWait" in i) ? Math.max(+i.maxWait || 0, t) : r),
        (d = "trailing" in i ? !!i.trailing : d)),
      (b.cancel = function () {
        void 0 !== a &&
          (function (e) {
            if (f) return window.cancelAnimationFrame(e);
            clearTimeout(e);
          })(a),
          (c = 0),
          (n = l = o = a = void 0);
      }),
      (b.flush = function () {
        return void 0 === a ? s : k(Date.now());
      }),
      (b.pending = function () {
        return void 0 !== a;
      }),
      b
    );
  }
  (x.createDom = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      o = document.createElement(e);
    return (
      (o.className = n),
      (o.innerHTML = t),
      Object.keys(i).forEach(function (t) {
        var n = t,
          r = i[t];
        "video" === e || "audio" === e || "live-video" === e ? r && o.setAttribute(n, r) : o.setAttribute(n, r);
      }),
      o
    );
  }),
    (x.createDomFromHtml = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      try {
        var n = document.createElement("div");
        n.innerHTML = e;
        var o = n.children;
        return (
          (n = null),
          o.length > 0
            ? ((o = o[0]),
              i && x.addClass(o, i),
              t &&
                Object.keys(t).forEach(function (e) {
                  o.setAttribute(e, t[e]);
                }),
              o)
            : null
        );
      } catch (r) {
        return w.logError("util.createDomFromHtml", r), null;
      }
    }),
    (x.hasClass = function (e, t) {
      if (!e || !t) return !1;
      try {
        return Array.prototype.some.call(e.classList, function (e) {
          return e === t;
        });
      } catch (o) {
        var n = e.className && "object" === i(e.className) ? e.getAttribute("class") : e.className;
        return n && !!n.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
      }
    }),
    (x.addClass = function (e, t) {
      if (e && t)
        try {
          t.replace(/(^\s+|\s+$)/g, "")
            .split(/\s+/g)
            .forEach(function (t) {
              t && e.classList.add(t);
            });
        } catch (n) {
          x.hasClass(e, t) ||
            (e.className && "object" === i(e.className)
              ? e.setAttribute("class", e.getAttribute("class") + " " + t)
              : (e.className += " " + t));
        }
    }),
    (x.removeClass = function (e, t) {
      if (e && t)
        try {
          t.replace(/(^\s+|\s+$)/g, "")
            .split(/\s+/g)
            .forEach(function (t) {
              t && e.classList.remove(t);
            });
        } catch (n) {
          x.hasClass(e, t) &&
            t.split(/\s+/g).forEach(function (t) {
              var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
              e.className && "object" === i(e.className)
                ? e.setAttribute("class", e.getAttribute("class").replace(n, " "))
                : (e.className = e.className.replace(n, " "));
            });
        }
    }),
    (x.toggleClass = function (e, t) {
      e &&
        t.split(/\s+/g).forEach(function (t) {
          x.hasClass(e, t) ? x.removeClass(e, t) : x.addClass(e, t);
        });
    }),
    (x.classNames = function () {
      for (
        var e = arguments,
          t = [],
          i = function (i) {
            "String" === x.typeOf(e[i])
              ? t.push(e[i])
              : "Object" === x.typeOf(e[i]) &&
                Object.keys(e[i]).map(function (n) {
                  e[i][n] && t.push(n);
                });
          },
          n = 0;
        n < arguments.length;
        n++
      )
        i(n);
      return t.join(" ");
    }),
    (x.findDom = function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        i = arguments.length > 1 ? arguments[1] : void 0;
      try {
        e = t.querySelector(i);
      } catch (n) {
        w.logError("util.findDom", n), 0 === i.indexOf("#") && (e = t.getElementById(i.slice(1)));
      }
      return e;
    }),
    (x.getCss = function (e, t) {
      return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t];
    }),
    (x.padStart = function (e, t, i) {
      for (var n = String(i), o = t >> 0, r = Math.ceil(o / n.length), s = [], a = String(e); r--; ) s.push(n);
      return s.join("").substring(0, o - a.length) + a;
    }),
    (x.format = function (e) {
      if (window.isNaN(e)) return "";
      e = Math.round(e);
      var t = x.padStart(Math.floor(e / 3600), 2, 0),
        i = x.padStart(Math.floor((e - 3600 * t) / 60), 2, 0),
        n = x.padStart(Math.floor(e - 3600 * t - 60 * i), 2, 0);
      return ("00" === t ? [i, n] : [t, i, n]).join(":");
    }),
    (x.event = function (e) {
      if (e.touches) {
        var t = e.touches[0] || e.changedTouches[0];
        (e.clientX = t.clientX || 0),
          (e.clientY = t.clientY || 0),
          (e.offsetX = t.pageX - t.target.offsetLeft),
          (e.offsetY = t.pageY - t.target.offsetTop);
      }
      e._target = e.target || e.srcElement;
    }),
    (x.typeOf = function (e) {
      return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0];
    }),
    (x.deepCopy = function (e, t) {
      if ("Object" === x.typeOf(t) && "Object" === x.typeOf(e))
        return (
          Object.keys(t).forEach(function (i) {
            "Object" !== x.typeOf(t[i]) || t[i] instanceof Node
              ? "Array" === x.typeOf(t[i])
                ? (e[i] = "Array" === x.typeOf(e[i]) ? e[i].concat(t[i]) : t[i])
                : (e[i] = t[i])
              : void 0 === e[i] || void 0 === e[i]
              ? (e[i] = t[i])
              : x.deepCopy(e[i], t[i]);
          }),
          e
        );
    }),
    (x.deepMerge = function (e, t) {
      return (
        Object.keys(t).map(function (i) {
          var n;
          "Array" === x.typeOf(t[i]) && "Array" === x.typeOf(e[i])
            ? "Array" === x.typeOf(e[i]) && (n = e[i]).push.apply(n, g(t[i]))
            : x.typeOf(e[i]) !== x.typeOf(t[i]) ||
              null === e[i] ||
              "Object" !== x.typeOf(e[i]) ||
              t[i] instanceof window.Node
            ? null !== t[i] && (e[i] = t[i])
            : x.deepMerge(e[i], t[i]);
        }),
        e
      );
    }),
    (x.getBgImage = function (e) {
      var t = (e.currentStyle || window.getComputedStyle(e, null)).backgroundImage;
      if (!t || "none" === t) return "";
      var i = document.createElement("a");
      return (i.href = t.replace(/url\("|"\)/g, "")), i.href;
    }),
    (x.copyDom = function (e) {
      if (e && 1 === e.nodeType) {
        var t = document.createElement(e.tagName);
        return (
          Array.prototype.forEach.call(e.attributes, function (e) {
            t.setAttribute(e.name, e.value);
          }),
          e.innerHTML && (t.innerHTML = e.innerHTML),
          t
        );
      }
      return "";
    }),
    (x.setInterval = function (e, t, i, n) {
      e._interval[t] || (e._interval[t] = window.setInterval(i.bind(e), n));
    }),
    (x.clearInterval = function (e, t) {
      clearInterval(e._interval[t]), (e._interval[t] = null);
    }),
    (x.setTimeout = function (e, t, i) {
      e._timers || (e._timers = []);
      var n = setTimeout(function () {
        t(), x.clearTimeout(e, n);
      }, i);
      return e._timers.push(n), n;
    }),
    (x.clearTimeout = function (e, t) {
      var i = e._timers;
      if ("Array" === x.typeOf(i)) {
        for (var n = 0; n < i.length; n++)
          if (i[n] === t) {
            i.splice(n, 1), clearTimeout(t);
            break;
          }
      } else clearTimeout(t);
    }),
    (x.clearAllTimers = function (e) {
      var t = e._timers;
      "Array" === x.typeOf(t) &&
        (t.map(function (e) {
          clearTimeout(e);
        }),
        (e._timerIds = []));
    }),
    (x.createImgBtn = function (e, t, i, n) {
      var o,
        r,
        s,
        a = x.createDom("xg-".concat(e), "", {}, "xgplayer-".concat(e, "-img"));
      ((a.style.backgroundImage = 'url("'.concat(t, '")')), i && n) &&
        (["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function (e) {
          return (
            !(i.indexOf(e) > -1 && n.indexOf(e) > -1) ||
            ((o = parseFloat(i.slice(0, i.indexOf(e)).trim())),
            (r = parseFloat(n.slice(0, n.indexOf(e)).trim())),
            (s = e),
            !1)
          );
        }),
        (a.style.width = "".concat(o).concat(s)),
        (a.style.height = "".concat(r).concat(s)),
        (a.style.backgroundSize = "".concat(o).concat(s, " ").concat(r).concat(s)),
        (a.style.margin =
          "start" === e
            ? "-"
                .concat(r / 2)
                .concat(s, " auto auto -")
                .concat(o / 2)
                .concat(s)
            : "auto 5px auto 5px"));
      return a;
    }),
    (x.Hex2RGBA = function (e, t) {
      var i = [];
      if (/^\#[0-9A-F]{3}$/i.test(e)) {
        var n = "#";
        e.replace(/[0-9A-F]/gi, function (e) {
          n += e + e;
        }),
          (e = n);
      }
      return /^#[0-9A-F]{6}$/i.test(e)
        ? (e.replace(/[0-9A-F]{2}/gi, function (e) {
            i.push(parseInt(e, 16));
          }),
          "rgba(".concat(i.join(","), ", ").concat(t, ")"))
        : "rgba(255, 255, 255, 0.1)";
    }),
    (x.getFullScreenEl = function () {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    }),
    (x.checkIsFunction = function (e) {
      return e && "function" == typeof e;
    }),
    (x.checkIsObject = function (e) {
      return null !== e && "object" === i(e);
    }),
    (x.hide = function (e) {
      e.style.display = "none";
    }),
    (x.show = function (e, t) {
      e.style.display = t || "block";
    }),
    (x.isUndefined = function (e) {
      if (null == e) return !0;
    }),
    (x.setStyleFromCsstext = function (e, t) {
      t &&
        ("String" === x.typeOf(t)
          ? t
              .replace(/\s+/g, "")
              .split(";")
              .map(function (t) {
                if (t) {
                  var i = t.split(":");
                  i.length > 1 && (e.style[i[0]] = i[1]);
                }
              })
          : Object.keys(t).map(function (i) {
              e.style[i] = t[i];
            }));
    }),
    (x.filterStyleFromText = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [
                "width",
                "height",
                "top",
                "left",
                "bottom",
                "right",
                "position",
                "z-index",
                "padding",
                "margin",
                "transform",
              ],
        i = e.style.cssText;
      if (!i) return {};
      var n = i.replace(/\s+/g, "").split(";"),
        o = {},
        r = {};
      return (
        n.map(function (e) {
          if (e) {
            var i = e.split(":");
            i.length > 1 && (E(i[0], t) ? (o[i[0]] = i[1]) : (r[i[0]] = i[1]));
          }
        }),
        e.setAttribute("style", ""),
        Object.keys(r).map(function (t) {
          e.style[t] = r[t];
        }),
        o
      );
    }),
    (x.getStyleFromCsstext = function (e) {
      var t = e.style.cssText;
      if (!t) return {};
      var i = t.replace(/\s+/g, "").split(";"),
        n = {};
      return (
        i.map(function (e) {
          if (e) {
            var t = e.split(":");
            t.length > 1 && (n[t[0]] = t[1]);
          }
        }),
        n
      );
    }),
    (x.preloadImg = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
      if (e) {
        var n = new window.Image();
        (n.onload = function (e) {
          (n = null), t && t(e);
        }),
          (n.onerror = function (e) {
            (n = null), i && i(e);
          }),
          (n.src = e);
      }
    }),
    (x.stopPropagation = function (e) {
      e && (e.stopPropagation(), e.cancelable && e.preventDefault());
    }),
    (x.scrollTop = function () {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }),
    (x.scrollLeft = function () {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }),
    (x.checkTouchSupport = function () {
      return "ontouchstart" in window;
    }),
    (x.getBuffered2 = function (e) {
      for (
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5, i = [], n = 0;
        n < e.length;
        n++
      )
        i.push({ start: e.start(n) < 0.5 ? 0 : e.start(n), end: e.end(n) });
      i.sort(function (e, t) {
        var i = e.start - t.start;
        return i || t.end - e.end;
      });
      var o = [];
      if (t)
        for (var r = 0; r < i.length; r++) {
          var s = o.length;
          if (s) {
            var a = o[s - 1].end;
            i[r].start - a < t ? i[r].end > a && (o[s - 1].end = i[r].end) : o.push(i[r]);
          } else o.push(i[r]);
        }
      else o = i;
      return new T(o);
    }),
    (x.getEventPos = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return (
        e.touches && e.touches.length > 0 && (e = e.touches[0]),
        {
          x: e.x / t,
          y: e.y / t,
          clientX: e.clientX / t,
          clientY: e.clientY / t,
          offsetX: e.offsetX / t,
          offsetY: e.offsetY / t,
          pageX: e.pageX / t,
          pageY: e.pageY / t,
        }
      );
    }),
    (x.requestAnimationFrame = function (e) {
      var t =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      if (t) return t(e);
    }),
    (x.getHostFromUrl = function (e) {
      if ("String" !== x.typeOf(e)) return "";
      var t = e.split("/"),
        i = "";
      return t.length > 3 && t[2] && (i = t[2]), i;
    }),
    (x.cancelAnimationFrame = function (e) {
      var t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.cancelRequestAnimationFrame;
      t && t(e);
    }),
    (x.isMSE = function (e) {
      return !!(e && e instanceof HTMLMediaElement) && (/^blob/.test(e.currentSrc) || /^blob/.test(e.src));
    }),
    (x.generateSessionId = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = new Date().getTime();
      try {
        e = parseInt(e);
      } catch (n) {
        e = 0;
      }
      (t += e),
        window.performance && "function" == typeof window.performance.now && (t += parseInt(window.performance.now()));
      var i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var i = (t + 16 * Math.random()) % 16 | 0;
        return (t = Math.floor(t / 16)), ("x" === e ? i : (3 & i) | 8).toString(16);
      });
      return i;
    }),
    (x.createEvent = function (e) {
      var t;
      return (
        "function" == typeof window.Event
          ? (t = new Event(e))
          : (t = document.createEvent("Event")).initEvent(e, !0, !0),
        t
      );
    }),
    (x.adjustTimeByDuration = function (e, t, i) {
      return t && e && (e > t || (i && e < t)) ? t : e;
    }),
    (x.createPositionBar = function (e, t) {
      var i = x.createDom("xg-bar", "", { "data-index": -1 }, e);
      return t.appendChild(i), i;
    });
  var L = /(Android)\s([\d.]+)/,
    I = /(Version)\/([\d.]+)/,
    A = [
      "avc1.42E01E, mp4a.40.2",
      "avc1.58A01E, mp4a.40.2",
      "avc1.4D401E, mp4a.40.2",
      "avc1.64001E, mp4a.40.2",
      "avc1.42E01E",
      "mp4v.20.8",
      "avc1.42E01E, mp4a.40.2",
      "avc1.58A01E, mp4a.40.2",
      "avc1.4D401E, mp4a.40.2",
      "avc1.64001E, mp4a.40.2",
      "mp4v.20.8, mp4a.40.2",
      "mp4v.20.240, mp4a.40.2",
    ],
    O = {
      get device() {
        return O.os.isPc ? "pc" : "mobile";
      },
      get browser() {
        if ("undefined" == typeof navigator) return "";
        var e = navigator.userAgent.toLowerCase(),
          t = {
            ie: /rv:([\d.]+)\) like gecko/,
            firefox: /firefox\/([\d.]+)/,
            chrome: /chrome\/([\d.]+)/,
            opera: /opera.([\d.]+)/,
            safari: /version\/([\d.]+).*safari/,
          };
        return [].concat(
          Object.keys(t).filter(function (i) {
            return t[i].test(e);
          }),
        )[0];
      },
      get os() {
        if ("undefined" == typeof navigator) return {};
        var e = navigator.userAgent,
          t = /(?:Windows Phone)/.test(e),
          i = /(?:SymbianOS)/.test(e) || t,
          n = /(?:Android)/.test(e),
          o = /(?:Firefox)/.test(e),
          r = /(?:iPad|PlayBook)/.test(e) || (n && !/(?:Mobile)/.test(e)) || (o && /(?:Tablet)/.test(e)),
          s = /(?:iPhone)/.test(e) && !r,
          a = !(s || n || i || r),
          l = /(?:iPad|PlayBook)/.test(e);
        return {
          isTablet: r,
          isPhone: s,
          isIpad: l,
          isIos: s || l,
          isAndroid: n,
          isPc: a,
          isSymbian: i,
          isWindowsPhone: t,
          isFireFox: o,
        };
      },
      get osVersion() {
        if ("undefined" == typeof navigator) return 0;
        var e = navigator.userAgent,
          t = "",
          i = (t = /(?:iPhone)|(?:iPad|PlayBook)/.test(e) ? I : L) ? t.exec(e) : [];
        if (i && i.length >= 3) {
          var n = i[2].split(".");
          return n.length > 0 ? parseInt(n[0]) : 0;
        }
        return 0;
      },
      get isWeixin() {
        if ("undefined" == typeof navigator) return !1;
        return !!/(micromessenger)\/([\d.]+)/.exec(navigator.userAgent.toLocaleLowerCase());
      },
      isSupportMP4: function () {
        var e = { isSupport: !1, mime: "" };
        if ("undefined" == typeof document) return e;
        if (this.supportResult) return this.supportResult;
        var t = document.createElement("video");
        return (
          "function" == typeof t.canPlayType &&
            A.map(function (i) {
              "probably" === t.canPlayType('video/mp4; codecs="'.concat(i, '"')) &&
                ((e.isSupport = !0), (e.mime += "||".concat(i)));
            }),
          (this.supportResult = e),
          (t = null),
          e
        );
      },
      isHevcSupported: function () {
        return (
          !("undefined" == typeof MediaSource || !MediaSource.isTypeSupported) &&
          (MediaSource.isTypeSupported('video/mp4;codecs="hev1.1.6.L120.90"') ||
            MediaSource.isTypeSupported('video/mp4;codecs="hev1.2.4.L120.90"') ||
            MediaSource.isTypeSupported('video/mp4;codecs="hev1.3.E.L120.90"') ||
            MediaSource.isTypeSupported('video/mp4;codecs="hev1.4.10.L120.90"'))
        );
      },
      probeConfigSupported: function (e) {
        var t = { supported: !1, smooth: !1, powerEfficient: !1 };
        if (!e || "undefined" == typeof navigator) return Promise.resolve(t);
        if (navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
          return navigator.mediaCapabilities.decodingInfo(e);
        var i = e.video || {},
          n = e.audio || {};
        try {
          var o = MediaSource.isTypeSupported(i.contentType),
            r = MediaSource.isTypeSupported(n.contentType);
          return Promise.resolve({ supported: o && r, smooth: !1, powerEfficient: !1 });
        } catch (s) {
          return Promise.resolve(t);
        }
      },
    },
    R = "3.0.1",
    D = { 1: "network", 2: "network", 3: "decoder", 4: "format" },
    M = r(function e(t) {
      var i =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { errorType: "", errorCode: 0, errorMessage: "", originError: "", ext: {}, mediaError: null };
      n(this, e);
      var o = t && t.i18n ? t.i18n.ERROR_TYPES : null;
      if (t.media) {
        var r = i.mediaError ? i.mediaError : t.media.error || {},
          s = t.duration,
          a = t.currentTime,
          l = t.ended,
          c = t.src,
          u = t.currentSrc,
          h = t.media,
          d = h.readyState,
          f = h.networkState,
          p = {
            playerVersion: R,
            currentTime: a,
            duration: s,
            ended: l,
            readyState: d,
            networkState: f,
            src: c || u,
            errorType: i.errorType,
            errorCode: i.errorCode || r.code,
            message: i.errorMessage || r.message,
            mediaError: r,
            originError: i.originError ? i.originError.stack : "",
            host: x.getHostFromUrl(c || u),
          };
        return (
          i.ext &&
            Object.keys(i.ext).map(function (e) {
              p[e] = i.ext[e];
            }),
          p
        );
      }
      if (arguments.length > 1) {
        for (
          var g = { playerVersion: R, domain: document.domain },
            v = [
              "errorType",
              "currentTime",
              "duration",
              "networkState",
              "readyState",
              "src",
              "currentSrc",
              "ended",
              "errd",
              "errorCode",
              "mediaError",
            ],
            y = 0;
          y < arguments.length;
          y++
        )
          g[v[y]] = arguments[y];
        return (g.ex = o ? (o[arguments[0]] || {}).msg : ""), g;
      }
    }),
    j = "play",
    N = "playing",
    F = "ended",
    H = "pause",
    B = "error",
    U = "seeking",
    V = "seeked",
    G = "timeupdate",
    W = "waiting",
    q = "canplay",
    z = "durationchange",
    K = "volumechange",
    Y = "loadeddata",
    X = "ratechange",
    Z = "progress",
    J = "loadstart",
    $ = "emptied",
    Q = "focus",
    ee = "blur",
    te = "ready",
    ie = "urlNull",
    ne = "autoplay_started",
    oe = "autoplay_was_prevented",
    re = "complete",
    se = "replay",
    ae = "destroy",
    le = "urlchange",
    ce = "download_speed_change",
    ue = "fullscreen_change",
    he = "cssFullscreen_change",
    de = "mini_state_change",
    fe = "definition_change",
    pe = "after_definition_change",
    ge = "video_resize",
    ve = "pip_change",
    ye = "rotate",
    me = "screenShot",
    ke = "playnext",
    be = "shortcut",
    Ce = "xglog",
    _e = "user_action",
    we = "reset",
    Te = [
      "play",
      "playing",
      "ended",
      "pause",
      "error",
      "seeking",
      "seeked",
      "timeupdate",
      "waiting",
      "canplay",
      "canplaythrough",
      "durationchange",
      "volumechange",
      "loadeddata",
      "ratechange",
      "progress",
      "loadstart",
      "emptied",
      "stalled",
      "suspend",
      "abort",
      "lowdecode",
    ],
    xe = { STATS_INFO: "stats_info", STATS_DOWNLOAD: "stats_download", STATS_RESET: "stats_reset" },
    Ee = "fps_stuck",
    Se = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          PLAY: j,
          PLAYING: N,
          ENDED: F,
          PAUSE: H,
          ERROR: B,
          SEEKING: U,
          SEEKED: V,
          TIME_UPDATE: G,
          WAITING: W,
          CANPLAY: q,
          CANPLAY_THROUGH: "canplaythrough",
          DURATION_CHANGE: z,
          VOLUME_CHANGE: K,
          LOADED_DATA: Y,
          RATE_CHANGE: X,
          PROGRESS: Z,
          LOAD_START: J,
          EMPTIED: $,
          STALLED: "stalled",
          SUSPEND: "suspend",
          ABORT: "abort",
          BUFFER_CHANGE: "bufferedChange",
          PLAYER_FOCUS: Q,
          PLAYER_BLUR: ee,
          READY: te,
          URL_NULL: ie,
          AUTOPLAY_STARTED: ne,
          AUTOPLAY_PREVENTED: oe,
          COMPLETE: re,
          REPLAY: se,
          DESTROY: ae,
          URL_CHANGE: le,
          DOWNLOAD_SPEED_CHANGE: ce,
          FULLSCREEN_CHANGE: ue,
          CSS_FULLSCREEN_CHANGE: he,
          MINI_STATE_CHANGE: de,
          DEFINITION_CHANGE: fe,
          BEFORE_DEFINITION_CHANGE: "before_definition_change",
          AFTER_DEFINITION_CHANGE: pe,
          SEI_PARSED: "SEI_PARSED",
          RETRY: "retry",
          VIDEO_RESIZE: ge,
          PIP_CHANGE: ve,
          ROTATE: ye,
          SCREEN_SHOT: me,
          PLAYNEXT: ke,
          SHORTCUT: be,
          XGLOG: Ce,
          USER_ACTION: _e,
          RESET: we,
          SWITCH_SUBTITLE: "switch_subtitle",
          VIDEO_EVENTS: Te,
          STATS_EVENTS: xe,
          FPS_STUCK: Ee,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  function Pe(e, t) {
    this && this.emit && ("error" === e ? this.errorHandler(e, t.error) : this.emit(e, t));
  }
  function Le(e, t) {
    return function (i, n) {
      var o = {
        player: t,
        eventName: e,
        originalEvent: i,
        detail: i.detail || {},
        timeStamp: i.timeStamp,
        currentTime: t.currentTime,
        duration: t.duration,
        paused: t.paused,
        ended: t.ended,
        isInternalOp: !!t._internalOp[i.type],
        muted: t.muted,
        volume: t.volume,
        host: x.getHostFromUrl(t.currentSrc),
        vtype: t.vtype,
      };
      if (
        (t.removeInnerOP(i.type),
        "timeupdate" === e && (t._currentTime = t.media && t.media.currentTime),
        "ratechange" === e)
      ) {
        var r = t.media ? t.media.playbackRate : 0;
        if (r && t._rate === r) return;
        t._rate = t.media && t.media.playbackRate;
      }
      if (
        ("durationchange" === e && (t._duration = t.media.duration),
        "volumechange" === e && ((o.isMutedChange = t._lastMuted !== t.muted), (t._lastMuted = t.muted)),
        "error" === e && (o.error = n || t.video.error),
        t.mediaEventMiddleware[e])
      ) {
        var s = Pe.bind(t, e, o);
        try {
          t.mediaEventMiddleware[e].call(t, o, s);
        } catch (a) {
          throw (Pe.call(t, e, o), a);
        }
      } else Pe.call(t, e, o);
    };
  }
  var Ie = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        n(this, i),
          ((o = t.call(this, e))._hasStart = !1),
          (o._currentTime = 0),
          (o._duration = 0),
          (o._internalOp = {}),
          (o._lastMuted = !1),
          (o.vtype = "MP4"),
          (o._rate = -1),
          (o.mediaConfig = Object.assign(
            {},
            {
              controls: !1,
              autoplay: e.autoplay,
              playsinline: e.playsinline,
              "x5-playsinline": e.playsinline,
              "webkit-playsinline": e.playsinline,
              "x5-video-player-fullscreen": e["x5-video-player-fullscreen"] || e.x5VideoPlayerFullscreen,
              "x5-video-orientation": e["x5-video-orientation"] || e.x5VideoOrientation,
              airplay: e.airplay,
              "webkit-airplay": e.airplay,
              tabindex: 0 | e.tabindex,
              mediaType: e.mediaType || "video",
            },
            e.videoConfig,
            e.videoAttributes,
          ));
        var r = e["x5-video-player-type"] || e.x5VideoPlayerType;
        return (
          O.isWeixin &&
            O.os.isAndroid &&
            r &&
            ((o.mediaConfig["x5-video-player-type"] = r),
            delete o.mediaConfig.playsinline,
            delete o.mediaConfig["webkit-playsinline"],
            delete o.mediaConfig["x5-playsinline"]),
          e.loop && (o.mediaConfig.loop = "loop"),
          (o.media = x.createDom(o.mediaConfig.mediaType, "", o.mediaConfig, "")),
          e.defaultPlaybackRate && (o.media.defaultPlaybackRate = o.media.playbackRate = e.defaultPlaybackRate),
          "Number" === x.typeOf(e.volume) && (o.volume = e.volume),
          e.autoplayMuted && ((o.media.muted = !0), (o._lastMuted = !0)),
          e.autoplay && (o.media.autoplay = !0),
          (o._interval = {}),
          (o.mediaEventMiddleware = {}),
          o.attachVideoEvents(),
          o
        );
      }
      return (
        r(i, [
          {
            key: "setEventsMiddleware",
            value: function (e) {
              var t = this;
              Object.keys(e).map(function (i) {
                t.mediaEventMiddleware[i] = e[i];
              });
            },
          },
          {
            key: "removeEventsMiddleware",
            value: function (e) {
              var t = this;
              Object.keys(e).map(function (e) {
                delete t.mediaEventMiddleware[e];
              });
            },
          },
          {
            key: "attachVideoEvents",
            value: function () {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.media;
              this._evHandlers ||
                (this._evHandlers = Te.map(function (t) {
                  var i = "on".concat(t.charAt(0).toUpperCase()).concat(t.slice(1));
                  return "function" == typeof e[i] && e.on(t, e[i]), s({}, t, Le(t, e));
                })),
                this._evHandlers.forEach(function (e) {
                  var i = Object.keys(e)[0];
                  t.addEventListener(i, e[i], !1);
                });
            },
          },
          {
            key: "detachVideoEvents",
            value: function () {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.media;
              this._evHandlers.forEach(function (e) {
                var i = Object.keys(e)[0];
                t.removeEventListener(i, e[i], !1);
              }),
                this._evHandlers.forEach(function (t) {
                  var i = Object.keys(t)[0],
                    n = "on".concat(i.charAt(0).toUpperCase()).concat(i.slice(1));
                  "function" == typeof e[n] && e.off(i, e[n]);
                }),
                (this._evHandlers = null);
            },
          },
          {
            key: "_attachSourceEvents",
            value: function (e, t) {
              var i = this;
              e.removeAttribute("src"),
                e.load(),
                t.forEach(function (e) {
                  i.media.appendChild(
                    x.createDom("source", "", { src: "".concat(e.src), type: "".concat(e.type || "") }),
                  );
                });
              var n = e.children;
              if (n) {
                this._videoSourceCount = n.length;
                for (var o = null, r = 0; r < this._evHandlers.length; r++)
                  if ("error" === Object.keys(this._evHandlers[r])[0]) {
                    o = this._evHandlers[r];
                    break;
                  }
                !this._sourceError &&
                  (this._sourceError = function (e) {
                    if ((i._videoSourceCount--, 0 === i._videoSourceCount)) {
                      var t = { code: 4, message: "sources load error" };
                      o ? o.error(e, t) : i.errorHandler("error", t);
                    }
                  });
                for (var s = 0; s < n.length; s++) n[s].addEventListener("error", this._sourceError);
              }
            },
          },
          {
            key: "_detachSourceEvents",
            value: function (e) {
              var t = e.children;
              if (t && 0 !== t.length && this._sourceError) {
                for (var i = 0; i < t.length; i++) t[i].removeEventListener("error", this._sourceError);
                for (; t.length > 0; ) e.removeChild(t[0]);
              }
            },
          },
          {
            key: "errorHandler",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (this.media && (this.media.error || t)) {
                var i = this.media.error || t,
                  n = i.code ? D[i.code] : "other";
                i.message;
                this.media.currentSrc || (i = { code: 6, message: "empty_src" }),
                  this.emit(
                    e,
                    new M(this, { errorType: n, errorCode: i.code, errorMessage: i.message || "", mediaError: i }),
                  );
              }
            },
          },
          {
            key: "destroy",
            value: function () {
              for (var e in (this.media &&
                (this.media.pause && (this.media.pause(), (this.media.muted = !0)),
                this.media.removeAttribute("src"),
                this.media.load()),
              (this._currentTime = 0),
              (this._duration = 0),
              (this.mediaConfig = null),
              this._interval))
                Object.prototype.hasOwnProperty.call(this._interval, e) &&
                  (clearInterval(this._interval[e]), (this._interval[e] = null));
              this.detachVideoEvents(),
                (this.media = null),
                (this.mediaEventMiddleware = {}),
                this.removeAllListeners();
            },
          },
          {
            key: "video",
            get: function () {
              return this.media;
            },
          },
          {
            key: "play",
            value: function () {
              return this.media ? this.media.play() : null;
            },
          },
          {
            key: "pause",
            value: function () {
              this.media && this.media.pause();
            },
          },
          {
            key: "load",
            value: function () {
              this.media && this.media.load();
            },
          },
          {
            key: "canPlayType",
            value: function (e) {
              return !!this.media && this.media.canPlayType(e);
            },
          },
          {
            key: "getBufferedRange",
            value: function (e) {
              var t = [0, 0];
              if (!this.media) return t;
              e || (e = this.media.buffered);
              var i = this.media.currentTime;
              if (e)
                for (
                  var n = 0, o = e.length;
                  n < o && ((t[0] = e.start(n)), (t[1] = e.end(n)), !(t[0] <= i && i <= t[1]));
                  n++
                );
              return t[0] - i <= 0 && i - t[1] <= 0 ? t : [0, 0];
            },
          },
          {
            key: "autoplay",
            get: function () {
              return !!this.media && this.media.autoplay;
            },
            set: function (e) {
              this.media && (this.media.autoplay = e);
            },
          },
          {
            key: "buffered",
            get: function () {
              return this.media ? this.media.buffered : null;
            },
          },
          {
            key: "buffered2",
            get: function () {
              return this.media && this.media.buffered ? x.getBuffered2(this.media.buffered) : null;
            },
          },
          {
            key: "bufferedPoint",
            get: function () {
              var e = { start: 0, end: 0 };
              if (!this.media) return e;
              var t = this.media.buffered;
              if (!t || 0 === t.length) return e;
              for (var i = 0; i < t.length; i++)
                if ((t.start(i) <= this.currentTime || t.start(i) < 0.1) && t.end(i) >= this.currentTime)
                  return { start: t.start(i), end: t.end(i) };
              return e;
            },
          },
          {
            key: "crossOrigin",
            get: function () {
              return this.media ? this.media.crossOrigin : "";
            },
            set: function (e) {
              this.media && (this.media.crossOrigin = e);
            },
          },
          {
            key: "currentSrc",
            get: function () {
              return this.media ? this.media.currentSrc : "";
            },
            set: function (e) {
              this.media && (this.media.currentSrc = e);
            },
          },
          {
            key: "currentTime",
            get: function () {
              return this.media ? (void 0 !== this.media.currentTime ? this.media.currentTime : this._currentTime) : 0;
            },
            set: function (e) {
              this.media && (this.media.currentTime = e);
            },
          },
          {
            key: "defaultMuted",
            get: function () {
              return !!this.media && this.media.defaultMuted;
            },
            set: function (e) {
              this.media && (this.media.defaultMuted = e);
            },
          },
          {
            key: "duration",
            get: function () {
              return this._duration;
            },
          },
          {
            key: "ended",
            get: function () {
              return !!this.media && this.media.ended;
            },
          },
          {
            key: "error",
            get: function () {
              return this.media.error;
            },
          },
          {
            key: "errorNote",
            get: function () {
              if (!this.media.error) return "";
              return ["MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"][
                this.media.error.code - 1
              ];
            },
          },
          {
            key: "loop",
            get: function () {
              return !!this.media && this.media.loop;
            },
            set: function (e) {
              this.media && (this.media.loop = e);
            },
          },
          {
            key: "muted",
            get: function () {
              return !!this.media && this.media.muted;
            },
            set: function (e) {
              this.media && this.media.muted !== e && ((this._lastMuted = this.media.muted), (this.media.muted = e));
            },
          },
          {
            key: "networkState",
            get: function () {
              return this.media.networkState;
            },
          },
          {
            key: "paused",
            get: function () {
              return !this.media || this.media.paused;
            },
          },
          {
            key: "playbackRate",
            get: function () {
              return this.media ? this.media.playbackRate : 0;
            },
            set: function (e) {
              this.media && e !== 1 / 0 && ((this.media.defaultPlaybackRate = e), (this.media.playbackRate = e));
            },
          },
          {
            key: "played",
            get: function () {
              return this.media ? this.media.played : null;
            },
          },
          {
            key: "preload",
            get: function () {
              return !!this.media && this.media.preload;
            },
            set: function (e) {
              this.media && (this.media.preload = e);
            },
          },
          {
            key: "readyState",
            get: function () {
              return this.media.readyState;
            },
          },
          {
            key: "seekable",
            get: function () {
              return !!this.media && this.media.seekable;
            },
          },
          {
            key: "seeking",
            get: function () {
              return !!this.media && this.media.seeking;
            },
          },
          {
            key: "src",
            get: function () {
              return this.media ? this.media.src : "";
            },
            set: function (e) {
              this.media &&
                (this.emit(le, e),
                this.emit(W),
                (this._currentTime = 0),
                (this._duration = 0),
                /^blob/.test(this.media.currentSrc) || /^blob/.test(this.media.src)
                  ? this.onWaiting()
                  : (this._detachSourceEvents(this.media),
                    "Array" === x.typeOf(e)
                      ? this._attachSourceEvents(this.media, e)
                      : e
                      ? (this.media.src = e)
                      : this.media.removeAttribute("src"),
                    this.load()));
            },
          },
          {
            key: "volume",
            get: function () {
              return this.media ? this.media.volume : 0;
            },
            set: function (e) {
              e !== 1 / 0 && this.media && (this.media.volume = e);
            },
          },
          {
            key: "addInnerOP",
            value: function (e) {
              this._internalOp[e] = !0;
            },
          },
          {
            key: "removeInnerOP",
            value: function (e) {
              delete this._internalOp[e];
            },
          },
          {
            key: "emit",
            value: function (e, t) {
              for (var n, o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
                r[s - 2] = arguments[s];
              (n = p(l(i.prototype), "emit", this)).call.apply(n, [this, e, t].concat(r));
            },
          },
          {
            key: "on",
            value: function (e, t) {
              for (var n, o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
                r[s - 2] = arguments[s];
              (n = p(l(i.prototype), "on", this)).call.apply(n, [this, e, t].concat(r));
            },
          },
          {
            key: "once",
            value: function (e, t) {
              for (var n, o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
                r[s - 2] = arguments[s];
              (n = p(l(i.prototype), "once", this)).call.apply(n, [this, e, t].concat(r));
            },
          },
          {
            key: "off",
            value: function (e, t) {
              for (var n, o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
                r[s - 2] = arguments[s];
              (n = p(l(i.prototype), "off", this)).call.apply(n, [this, e, t].concat(r));
            },
          },
          {
            key: "offAll",
            value: function () {
              p(l(i.prototype), "removeAllListeners", this).call(this);
            },
          },
        ]),
        i
      );
    })(k),
    Ae = (function () {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { name: "xgplayer", version: 1, db: null, ojstore: { name: "xg-m4a", keypath: "vid" } };
        n(this, e),
          (this.indexedDB = window.indexedDB || window.webkitindexedDB),
          (this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange),
          (this.myDB = t);
      }
      return (
        r(e, [
          {
            key: "openDB",
            value: function (e) {
              var t = this,
                i = this,
                n = this.myDB.version || 1,
                o = i.indexedDB.open(i.myDB.name, n);
              (o.onerror = function (e) {}),
                (o.onsuccess = function (n) {
                  (t.myDB.db = n.target.result), e.call(i);
                }),
                (o.onupgradeneeded = function (e) {
                  var t = e.target.result;
                  e.target.transaction,
                    t.objectStoreNames.contains(i.myDB.ojstore.name) ||
                      t.createObjectStore(i.myDB.ojstore.name, { keyPath: i.myDB.ojstore.keypath });
                });
            },
          },
          {
            key: "deletedb",
            value: function () {
              this.indexedDB.deleteDatabase(this.myDB.name);
            },
          },
          {
            key: "closeDB",
            value: function () {
              this.myDB.db.close();
            },
          },
          {
            key: "addData",
            value: function (e, t) {
              for (var i, n = this.myDB.db.transaction(e, "readwrite").objectStore(e), o = 0; o < t.length; o++)
                ((i = n.add(t[o])).onerror = function () {}), (i.onsuccess = function () {});
            },
          },
          {
            key: "putData",
            value: function (e, t) {
              for (var i, n = this.myDB.db.transaction(e, "readwrite").objectStore(e), o = 0; o < t.length; o++)
                ((i = n.put(t[o])).onerror = function () {}), (i.onsuccess = function () {});
            },
          },
          {
            key: "getDataByKey",
            value: function (e, t, i) {
              var n = this,
                o = this.myDB.db.transaction(e, "readwrite").objectStore(e).get(t);
              (o.onerror = function () {
                i.call(n, null);
              }),
                (o.onsuccess = function (e) {
                  var t = e.target.result;
                  i.call(n, t);
                });
            },
          },
          {
            key: "deleteData",
            value: function (e, t) {
              this.myDB.db.transaction(e, "readwrite").objectStore(e).delete(t);
            },
          },
          {
            key: "clearData",
            value: function (e) {
              this.myDB.db.transaction(e, "readwrite").objectStore(e).clear();
            },
          },
        ]),
        e
      );
    })(),
    Oe = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
    Re = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
    De = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
    Me = "data-xgplayerid";
  function je(e, t, i) {
    for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), r = 3; r < n; r++) o[r - 3] = arguments[r];
    var s = t.call.apply(t, [e].concat(o));
    i &&
      "function" == typeof i &&
      (s && s.then
        ? s.then(function () {
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            i.call.apply(i, [e].concat(n));
          })
        : i.call.apply(i, [e].concat(o)));
  }
  function Ne(e, t) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { pre: null, next: null };
    return (
      this.__hooks || (this.__hooks = {}),
      !this.__hooks[e] && (this.__hooks[e] = null),
      function () {
        var n = arguments,
          o = this;
        if (i.pre)
          try {
            var r;
            (r = i.pre).call.apply(r, [this].concat(Array.prototype.slice.call(arguments)));
          } catch (l) {
            throw (
              ((l.message = "[pluginName: "
                .concat(this.pluginName, ":")
                .concat(e, ":pre error] >> ")
                .concat(l.message)),
              l)
            );
          }
        if (this.__hooks && this.__hooks[e])
          try {
            var s,
              a = (s = this.__hooks[e]).call.apply(s, [this, this].concat(Array.prototype.slice.call(arguments)));
            a
              ? a.then
                ? a
                    .then(function (e) {
                      !1 !== e && je.apply(void 0, [o, t, i.next].concat(g(n)));
                    })
                    .catch(function (e) {
                      throw e;
                    })
                : je.apply(void 0, [this, t, i.next].concat(Array.prototype.slice.call(arguments)))
              : void 0 === a && je.apply(void 0, [this, t, i.next].concat(Array.prototype.slice.call(arguments)));
          } catch (l) {
            throw ((l.message = "[pluginName: ".concat(this.pluginName, ":").concat(e, "] >> ").concat(l.message)), l);
          }
        else je.apply(void 0, [this, t, i.next].concat(Array.prototype.slice.call(arguments)));
      }.bind(this)
    );
  }
  function Fe(e, t) {
    var i = this.__hooks;
    if (i)
      return i.hasOwnProperty(e)
        ? (i && (i[e] = t), !0)
        : (console.warn("has no supported hook which name [".concat(e, "]")), !1);
  }
  function He(e, t) {
    var i = this.__hooks;
    i && delete i[e];
  }
  function Be(e) {
    if (this.plugins && this.plugins[e.toLowerCase()]) {
      for (
        var t = this.plugins[e.toLowerCase()], i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1;
        o < i;
        o++
      )
        n[o - 1] = arguments[o];
      return t.useHooks && t.useHooks.apply(t, n);
    }
  }
  function Ue(e) {
    if (this.plugins && this.plugins[e.toLowerCase()]) {
      var t = this.plugins[e.toLowerCase()];
      if (t) {
        for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
        return t.removeHooks && t.removeHooks.apply(t, n);
      }
    }
  }
  function Ve(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    (e.__hooks = {}),
      t &&
        t.map(function (t) {
          e.__hooks[t] = null;
        }),
      Object.defineProperty(e, "hooks", {
        get: function () {
          return (
            e.__hooks &&
            Object.keys(e.__hooks).map(function (t) {
              if (e.__hooks[t]) return t;
            })
          );
        },
      });
  }
  function Ge(e) {
    e.__hooks = null;
  }
  function We(e, t, i) {
    for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), r = 3; r < n; r++) o[r - 3] = arguments[r];
    if (!e.__hooks || !e.__hooks[t]) return i.call.apply(i, [e, e].concat(o));
    var s,
      a = (s = e.__hooks[t]).call.apply(s, [e, e].concat(o));
    if (a && a.then)
      a.then(function (t) {
        return !1 === t ? null : i.call.apply(i, [e, e].concat(o));
      }).catch(function (e) {
        console.warn("[runHooks]".concat(t, " reject"), e.message);
      });
    else if (!1 !== a) return i.call.apply(i, [e, e].concat(o));
  }
  function qe(e, t) {
    w.logError("[".concat(e, "] event or callback cant be undefined or null when call ").concat(t));
  }
  var ze = (function () {
    function e(t) {
      n(this, e),
        x.checkIsFunction(this.beforeCreate) && this.beforeCreate(t),
        Ve(this),
        (this.__args = t),
        (this.__events = {}),
        (this.__onceEvents = {}),
        (this.config = t.config || {}),
        (this.player = null),
        (this.playerConfig = {}),
        (this.pluginName = ""),
        this.__init(t);
    }
    return (
      r(
        e,
        [
          { key: "beforeCreate", value: function (e) {} },
          { key: "afterCreate", value: function () {} },
          { key: "beforePlayerInit", value: function () {} },
          { key: "onPluginsReady", value: function () {} },
          { key: "afterPlayerInit", value: function () {} },
          { key: "destroy", value: function () {} },
          {
            key: "__init",
            value: function (e) {
              (this.player = e.player),
                (this.playerConfig = e.player && e.player.config),
                (this.pluginName = e.pluginName
                  ? e.pluginName.toLowerCase()
                  : this.constructor.pluginName.toLowerCase()),
                (this.logger = e.player && e.player.logger);
            },
          },
          {
            key: "updateLang",
            value: function (e) {
              e || (e = this.lang);
            },
          },
          {
            key: "lang",
            get: function () {
              return this.player.lang;
            },
          },
          {
            key: "i18n",
            get: function () {
              return this.player.i18n;
            },
          },
          {
            key: "i18nKeys",
            get: function () {
              return this.player.i18nKeys;
            },
          },
          {
            key: "domEventType",
            get: function () {
              var e = x.checkTouchSupport() ? "touch" : "mouse";
              return (
                !this.playerConfig ||
                  ("touch" !== this.playerConfig.domEventType && "mouse" !== this.playerConfig.domEventType) ||
                  (e = this.playerConfig.domEventType),
                e
              );
            },
          },
          {
            key: "on",
            value: function (e, t) {
              var i = this;
              e && t && this.player
                ? "string" == typeof e
                  ? ((this.__events[e] = t), this.player.on(e, t))
                  : Array.isArray(e) &&
                    e.forEach(function (e) {
                      (i.__events[e] = t), i.player.on(e, t);
                    })
                : qe(this.pluginName, "plugin.on(event, callback)");
            },
          },
          {
            key: "once",
            value: function (e, t) {
              var i = this;
              e && t && this.player
                ? "string" == typeof e
                  ? ((this.__onceEvents[e] = t), this.player.once(e, t))
                  : Array.isArray(e) &&
                    e.forEach(function (n) {
                      (i.__onceEvents[n] = t), i.player.once(e, t);
                    })
                : qe(this.pluginName, "plugin.once(event, callback)");
            },
          },
          {
            key: "off",
            value: function (e, t) {
              var i = this;
              e && t && this.player
                ? "string" == typeof e
                  ? (delete this.__events[e], this.player.off(e, t))
                  : Array.isArray(e) &&
                    e.forEach(function (n) {
                      delete i.__events[e], i.player.off(n, t);
                    })
                : qe(this.pluginName, "plugin.off(event, callback)");
            },
          },
          {
            key: "offAll",
            value: function () {
              var e = this;
              ["__events", "__onceEvents"].forEach(function (t) {
                Object.keys(e[t]).forEach(function (i) {
                  e[t][i] && e.off(i, e[t][i]), i && delete e[t][i];
                });
              }),
                (this.__events = {}),
                (this.__onceEvents = {});
            },
          },
          {
            key: "emit",
            value: function (e) {
              var t;
              if (this.player) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                  n[o - 1] = arguments[o];
                (t = this.player).emit.apply(t, [e].concat(n));
              }
            },
          },
          {
            key: "emitUserAction",
            value: function (e, i) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if (this.player) {
                var o = t(t({}, n), {}, { pluginName: this.pluginName });
                this.player.emitUserAction(e, i, o);
              }
            },
          },
          {
            key: "hook",
            value: function (e, t) {
              return Ne.call.apply(Ne, [this].concat(Array.prototype.slice.call(arguments)));
            },
          },
          {
            key: "useHooks",
            value: function (e, t) {
              for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
                n[o - 2] = arguments[o];
              return Fe.call.apply(Fe, [this].concat(Array.prototype.slice.call(arguments)));
            },
          },
          {
            key: "removeHooks",
            value: function (e, t) {
              for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
                n[o - 2] = arguments[o];
              return He.call.apply(He, [this].concat(Array.prototype.slice.call(arguments)));
            },
          },
          {
            key: "registerPlugin",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              if (this.player) return i && (t.pluginName = i), this.player.registerPlugin({ plugin: e, options: t });
            },
          },
          {
            key: "getPlugin",
            value: function (e) {
              return this.player ? this.player.getPlugin(e) : null;
            },
          },
          {
            key: "__destroy",
            value: function () {
              var e = this,
                t = this.player,
                i = this.pluginName;
              this.offAll(),
                x.clearAllTimers(this),
                x.checkIsFunction(this.destroy) && this.destroy(),
                ["player", "playerConfig", "pluginName", "logger", "__args", "__hooks"].map(function (t) {
                  e[t] = null;
                }),
                t.unRegisterPlugin(i),
                Ge(this);
            },
          },
        ],
        [
          {
            key: "defineGetterOrSetter",
            value: function (e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && Object.defineProperty(e, i, t[i]);
            },
          },
          {
            key: "defaultConfig",
            get: function () {
              return {};
            },
          },
          {
            key: "pluginName",
            get: function () {
              return "pluginName";
            },
          },
        ],
      ),
      e
    );
  })();
  if ("undefined" != typeof Element && !Element.prototype.matches) {
    var Ke = Element.prototype;
    Ke.matches =
      Ke.matchesSelector ||
      Ke.mozMatchesSelector ||
      Ke.msMatchesSelector ||
      Ke.oMatchesSelector ||
      Ke.webkitMatchesSelector;
  }
  var Ye = function (e, t) {
    for (; e && 9 !== e.nodeType; ) {
      if ("function" == typeof e.matches && e.matches(t)) return e;
      e = e.parentNode;
    }
  };
  function Xe(e, t, i, n, o) {
    var r = Ze.apply(this, arguments);
    return (
      e.addEventListener(i, r, o),
      {
        destroy: function () {
          e.removeEventListener(i, r, o);
        },
      }
    );
  }
  function Ze(e, t, i, n) {
    return function (i) {
      (i.delegateTarget = Ye(i.target, t)), i.delegateTarget && n.call(e, i);
    };
  }
  var Je = function (e, t, i, n, o) {
      return "function" == typeof e.addEventListener
        ? Xe.apply(null, arguments)
        : "function" == typeof i
        ? Xe.bind(null, document).apply(null, arguments)
        : ("string" == typeof e && (e = document.querySelectorAll(e)),
          Array.prototype.map.call(e, function (e) {
            return Xe(e, t, i, n, o);
          }));
    },
    $e = { CONTROLS: "controls", ROOT: "root" },
    Qe = {
      ROOT: "root",
      ROOT_LEFT: "rootLeft",
      ROOT_RIGHT: "rootRight",
      ROOT_TOP: "rootTop",
      CONTROLS_LEFT: "controlsLeft",
      CONTROLS_RIGTH: "controlsRight",
      CONTROLS_RIGHT: "controlsRight",
      CONTROLS_CENTER: "controlsCenter",
      CONTROLS: "controls",
    };
  function et(e) {
    return !!e && e.indexOf && /^(?:http|data:|\/)/.test(e);
  }
  function tt(e, t) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
      r = null;
    if (e instanceof window.Element)
      return (
        x.addClass(e, i),
        Object.keys(n).map(function (t) {
          e.setAttribute(t, n[t]);
        }),
        e
      );
    if (et(e) || et(e.url))
      return (n.src = et(e) ? e : e.url || ""), (r = x.createDom(e.tag || "img", "", n, "xg-img ".concat(i)));
    if ("function" == typeof e)
      try {
        return (r = e()) instanceof window.Element
          ? (x.addClass(r, i),
            Object.keys(n).map(function (e) {
              r.setAttribute(e, n[e]);
            }),
            r)
          : (w.logWarn(
              "warn>>icons."
                .concat(t, " in config of plugin named [")
                .concat(o, "] is a function mast return an Element Object"),
            ),
            null);
      } catch (s) {
        return w.logError("Plugin named [".concat(o, "]:createIcon"), s), null;
      }
    return "string" == typeof e
      ? x.createDomFromHtml(e, n, i)
      : (w.logWarn("warn>>icons.".concat(t, " in config of plugin named [").concat(o, "] is invalid")), null);
  }
  function it(e, t) {
    var n = t.config.icons || t.playerConfig.icons;
    Object.keys(e).map(function (o) {
      var r = e[o],
        s = r && r.class ? r.class : "",
        a = r && r.attr ? r.attr : {},
        l = null;
      n &&
        n[o] &&
        ((s = (function (e, t) {
          return "object" === i(e) && e.class && "string" == typeof e.class ? "".concat(t, " ").concat(e.class) : t;
        })(n[o], s)),
        (a = (function (e, t) {
          return (
            "object" === i(e) &&
              e.attr &&
              "object" === i(e.attr) &&
              Object.keys(e.attr).map(function (i) {
                t[i] = e.attr[i];
              }),
            t
          );
        })(n[o], a)),
        (l = tt(n[o], o, s, a, t.pluginName))),
        !l && r && (l = tt(r.icon ? r.icon : r, a, s, {}, t.pluginName)),
        (t.icons[o] = l);
    });
  }
  var nt = (function (e) {
      a(o, e);
      var t = d(o);
      function o() {
        var e,
          i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return n(this, o), ((e = t.call(this, i)).__delegates = []), e;
      }
      return (
        r(
          o,
          [
            {
              key: "__init",
              value: function (e) {
                if ((p(l(o.prototype), "__init", this).call(this, e), e.root)) {
                  var t = e.root,
                    i = null;
                  (this.icons = {}),
                    (this.root = null),
                    (this.parent = null),
                    it(this.registerIcons() || {}, this),
                    (this.langText = {});
                  var n,
                    r,
                    s = this.registerLanguageTexts() || {};
                  (n = s),
                    (r = this),
                    Object.keys(n).map(function (e) {
                      Object.defineProperty(r.langText, e, {
                        get: function () {
                          var t = r.lang,
                            i = r.i18n;
                          return i[e] ? i[e] : (n[e] && n[e][t]) || "";
                        },
                      });
                    });
                  var a = "";
                  try {
                    a = this.render();
                  } catch (h) {
                    throw (
                      (w.logError("Plugin:".concat(this.pluginName, ":render"), h),
                      new Error("Plugin:".concat(this.pluginName, ":render:").concat(h.message)))
                    );
                  }
                  if (a) (i = o.insert(a, t, e.index)).setAttribute("data-index", e.index);
                  else {
                    if (!e.tag) return;
                    (i = x.createDom(e.tag, "", e.attr, e.name)).setAttribute("data-index", e.index), t.appendChild(i);
                  }
                  (this.root = i), (this.parent = t);
                  var c = this.config.attr || {},
                    u = this.config.style || {};
                  this.setAttr(c),
                    this.setStyle(u),
                    this.config.index && this.root.setAttribute("data-index", this.config.index),
                    this.__registerChildren();
                }
              },
            },
            {
              key: "__registerChildren",
              value: function () {
                var e = this;
                if (this.root) {
                  this._children = [];
                  var t = this.children();
                  t &&
                    "object" === i(t) &&
                    Object.keys(t).length > 0 &&
                    Object.keys(t).map(function (n) {
                      var o,
                        r,
                        s = n,
                        a = t[s],
                        l = { root: e.root };
                      "function" == typeof a
                        ? ((o = e.config[s] || {}), (r = a))
                        : "object" === i(a) &&
                          "function" == typeof a.plugin &&
                          ((o = a.options ? x.deepCopy(e.config[s] || {}, a.options) : e.config[s] || {}),
                          (r = a.plugin)),
                        (l.config = o),
                        void 0 !== o.index && (l.index = o.index),
                        o.root && (l.root = o.root),
                        e.registerPlugin(r, l, s);
                    });
                }
              },
            },
            {
              key: "updateLang",
              value: function (e) {
                e || (e = this.lang);
                var t = this.root,
                  i = this.i18n,
                  n = this.langText;
                t &&
                  (function e(t, i) {
                    for (var n = 0; n < t.children.length; n++)
                      t.children[n].children.length > 0 ? e(t.children[n], i) : i(t.children[n]);
                  })(t, function (t) {
                    var o = t.getAttribute && t.getAttribute("lang-key");
                    if (o) {
                      var r = i[o.toUpperCase()] || n[o];
                      r && (t.innerHTML = "function" == typeof r ? r(e) : r);
                    }
                  });
              },
            },
            {
              key: "lang",
              get: function () {
                return this.player.lang;
              },
            },
            {
              key: "changeLangTextKey",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                  i = this.i18n || {},
                  n = this.langText;
                e.setAttribute && e.setAttribute("lang-key", t);
                var o = i[t] || n[t] || "";
                o && (e.innerHTML = o);
              },
            },
            {
              key: "plugins",
              value: function () {
                return this._children;
              },
            },
            {
              key: "children",
              value: function () {
                return {};
              },
            },
            {
              key: "registerPlugin",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                t.root = t.root || this.root;
                var n = p(l(o.prototype), "registerPlugin", this).call(this, e, t, i);
                return this._children.push(n), n;
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return {};
              },
            },
            {
              key: "registerLanguageTexts",
              value: function () {
                return {};
              },
            },
            {
              key: "find",
              value: function (e) {
                if (this.root) return this.root.querySelector(e);
              },
            },
            {
              key: "bind",
              value: function (e, t, i) {
                var n = this;
                if (arguments.length < 3 && "function" == typeof t)
                  Array.isArray(e)
                    ? e.forEach(function (e) {
                        n.bindEL(e, t);
                      })
                    : this.bindEL(e, t);
                else {
                  var r = o.delegate.call(this, this.root, e, t, i);
                  this.__delegates = this.__delegates.concat(r);
                }
              },
            },
            {
              key: "unbind",
              value: function (e, t) {
                var i = this;
                if (arguments.length < 3 && "function" == typeof t)
                  Array.isArray(e)
                    ? e.forEach(function (e) {
                        i.unbindEL(e, t);
                      })
                    : this.unbindEL(e, t);
                else
                  for (var n = "".concat(e, "_").concat(t), o = 0; o < this.__delegates.length; o++)
                    if (this.__delegates[o].key === n) {
                      this.__delegates[o].destroy(), this.__delegates.splice(o, 1);
                      break;
                    }
              },
            },
            {
              key: "setStyle",
              value: function (e, t) {
                var i = this;
                if (this.root)
                  return "String" === x.typeOf(e)
                    ? (this.root.style[e] = t)
                    : void (
                        "Object" === x.typeOf(e) &&
                        Object.keys(e).map(function (t) {
                          i.root.style[t] = e[t];
                        })
                      );
              },
            },
            {
              key: "setAttr",
              value: function (e, t) {
                var i = this;
                if (this.root)
                  return "String" === x.typeOf(e)
                    ? this.root.setAttribute(e, t)
                    : void (
                        "Object" === x.typeOf(e) &&
                        Object.keys(e).map(function (t) {
                          i.root.setAttribute(t, e[t]);
                        })
                      );
              },
            },
            {
              key: "setHtml",
              value: function (e, t) {
                this.root && ((this.root.innerHTML = e), "function" == typeof t && t());
              },
            },
            {
              key: "bindEL",
              value: function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.root &&
                  "on".concat(e) in this.root &&
                  "function" == typeof t &&
                  this.root.addEventListener(e, t, i);
              },
            },
            {
              key: "unbindEL",
              value: function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.root &&
                  "on".concat(e) in this.root &&
                  "function" == typeof t &&
                  this.root.removeEventListener(e, t, i);
              },
            },
            {
              key: "show",
              value: function (e) {
                if (this.root)
                  return (
                    (this.root.style.display = void 0 !== e ? e : "block"),
                    "none" === window.getComputedStyle(this.root, null).getPropertyValue("display")
                      ? (this.root.style.display = "block")
                      : void 0
                  );
              },
            },
            {
              key: "hide",
              value: function () {
                this.root && (this.root.style.display = "none");
              },
            },
            {
              key: "appendChild",
              value: function (e, t) {
                if (!this.root) return null;
                if (arguments.length < 2 && arguments[0] instanceof window.Element)
                  return this.root.appendChild(arguments[0]);
                if (!(t && t instanceof window.Element)) return null;
                try {
                  return "string" == typeof e ? this.find(e).appendChild(t) : e.appendChild(t);
                } catch (i) {
                  return w.logError("Plugin:appendChild", i), null;
                }
              },
            },
            {
              key: "render",
              value: function () {
                return "";
              },
            },
            { key: "destroy", value: function () {} },
            {
              key: "__destroy",
              value: function () {
                var e = this,
                  t = this.player;
                this.__delegates.map(function (e) {
                  e.destroy();
                }),
                  (this.__delegates = []),
                  this._children instanceof Array &&
                    (this._children.map(function (e) {
                      t.unRegisterPlugin(e.pluginName);
                    }),
                    (this._children = null)),
                  this.root &&
                    (this.root.hasOwnProperty("remove")
                      ? this.root.remove()
                      : this.root.parentNode && this.root.parentNode.removeChild(this.root)),
                  p(l(o.prototype), "__destroy", this).call(this),
                  (this.icons = {}),
                  ["root", "parent"].map(function (t) {
                    e[t] = null;
                  });
              },
            },
          ],
          [
            {
              key: "insert",
              value: function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  n = t.children.length,
                  o = Number(i),
                  r = e instanceof window.Node;
                if (n) {
                  for (var s = 0, a = null, l = ""; s < n; s++) {
                    a = t.children[s];
                    var c = Number(a.getAttribute("data-index"));
                    if (c >= o) {
                      l = "beforebegin";
                      break;
                    }
                    c < o && (l = "afterend");
                  }
                  return (
                    r ? ("afterend" === l ? t.appendChild(e) : t.insertBefore(e, a)) : a.insertAdjacentHTML(l, e),
                    "afterend" === l ? t.children[t.children.length - 1] : t.children[s]
                  );
                }
                return r ? t.appendChild(e) : t.insertAdjacentHTML("beforeend", e), t.children[t.children.length - 1];
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {};
              },
            },
            {
              key: "delegate",
              value: function (e, t, i, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                  r = [];
                if (e instanceof window.Node && "function" == typeof n)
                  if (Array.isArray(i))
                    i.forEach(function (i) {
                      var s = Je(e, t, i, n, o);
                      (s.key = "".concat(t, "_").concat(i)), r.push(s);
                    });
                  else {
                    var s = Je(e, t, i, n, o);
                    (s.key = "".concat(t, "_").concat(i)), r.push(s);
                  }
                return r;
              },
            },
            {
              key: "ROOT_TYPES",
              get: function () {
                return $e;
              },
            },
            {
              key: "POSITIONS",
              get: function () {
                return Qe;
              },
            },
          ],
        ),
        o
      );
    })(ze),
    ot = (function () {
      function e() {
        var t = this;
        if (
          (n(this, e),
          s(this, "__trigger", function (e) {
            var i = new Date().getTime();
            t.timeStamp = i;
            for (var n = 0; n < e.length; n++) t.__runHandler(e[n].target);
          }),
          (this.__handlers = []),
          (this.timeStamp = 0),
          (this.observer = null),
          window.ResizeObserver)
        )
          try {
            (this.observer = new window.ResizeObserver(
              (function (e, t, i) {
                var n = !0,
                  o = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return (
                  S(i) && ((n = "leading" in i ? !!i.leading : n), (o = "trailing" in i ? !!i.trailing : o)),
                  P(e, t, { leading: n, trailing: o, maxWait: t })
                );
              })(this.__trigger, 100, { trailing: !0 }),
            )),
              (this.timeStamp = new Date().getTime());
          } catch (i) {
            console.error(i);
          }
      }
      return (
        r(e, [
          {
            key: "addObserver",
            value: function (e, t) {
              if (this.observer) {
                this.observer && this.observer.observe(e);
                for (var i = e.getAttribute(Me), n = this.__handlers, o = -1, r = 0; r < n.length; r++)
                  n[r] && e === n[r].target && (o = r);
                o > -1
                  ? (this.__handlers[o].handler = t)
                  : this.__handlers.push({ target: e, handler: t, playerId: i });
              }
            },
          },
          {
            key: "unObserver",
            value: function (e) {
              var t = -1;
              this.__handlers.map(function (i, n) {
                e === i.target && (t = n);
              });
              try {
                this.observer && this.observer.unobserve(e);
              } catch (i) {}
              this.observer && this.observer.unobserve(e), t > -1 && this.__handlers.splice(t, 1);
            },
          },
          {
            key: "destroyObserver",
            value: function () {
              this.observer && this.observer.disconnect(), (this.observer = null), (this.__handlers = null);
            },
          },
          {
            key: "__runHandler",
            value: function (e) {
              for (var t = this.__handlers, i = 0; i < t.length; i++)
                if (t[i] && e === t[i].target) {
                  try {
                    t[i].handler(e);
                  } catch (n) {
                    console.error(n);
                  }
                  return !0;
                }
              return !1;
            },
          },
        ]),
        e
      );
    })(),
    rt = null;
  var st = {
      pluginGroup: {},
      init: function (e) {
        var t,
          i,
          n = e._pluginInfoId;
        n || ((n = new Date().getTime()), (e._pluginInfoId = n)),
          !e.config.closeResizeObserver &&
            ((t = e.root),
            (i = function () {
              e.resize();
            }),
            rt || (rt = new ot()),
            rt.addObserver(t, i)),
          0 === Object.keys(this.pluginGroup).length && (e.isUserActive = !0),
          (this.pluginGroup[n] = { _player: e, _originalOptions: e.config || {}, _plugins: {} });
      },
      checkPlayerRoot: function (e) {
        if (this.pluginGroup) {
          for (var t = Object.keys(this.pluginGroup), i = 0; i < t.length; i++) {
            var n = this.pluginGroup[t[i]]._player;
            if (n.root === e) return n;
          }
          return null;
        }
        return null;
      },
      formatPluginInfo: function (e, t) {
        var i = null,
          n = null;
        return (
          e.plugin && "function" == typeof e.plugin ? ((i = e.plugin), (n = e.options)) : ((i = e), (n = {})),
          t && (n.config = t || {}),
          { PLUFGIN: i, options: n }
        );
      },
      checkPluginIfExits: function (e, t) {
        for (var i = 0; i < t.length; i++) if (e.toLowerCase() === t[i].pluginName.toLowerCase()) return !0;
        return !1;
      },
      getRootByConfig: function (e, t) {
        for (var i = Object.keys(t), n = null, o = 0; o < i.length; o++)
          if (e.toLowerCase() === i[o].toLowerCase()) {
            n = t[i[o]];
            break;
          }
        return "Object" === x.typeOf(n) ? { root: n.root, position: n.position } : {};
      },
      lazyRegister: function (e, t) {
        var i = this,
          n = t.timeout || 1500;
        return Promise.race([
          t.loader().then(function (t) {
            var n;
            (n = t && t.__esModule ? t.default : t), i.register(e, n, t.options);
          }),
          new Promise(function (e, t) {
            setTimeout(function () {
              t(new Error("timeout"));
            }, n);
          }),
        ]);
      },
      register: function (e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (e && t && "function" == typeof t && void 0 !== t.prototype) {
          var n = e._pluginInfoId;
          if (n && this.pluginGroup[n]) {
            this.pluginGroup[n]._plugins || (this.pluginGroup[n]._plugins = {});
            var o = this.pluginGroup[n]._plugins,
              r = this.pluginGroup[n]._originalOptions;
            i.player = this.pluginGroup[n]._player;
            var s = i.pluginName || t.pluginName;
            if (!s) throw new Error("The property pluginName is necessary");
            if (!t.isSupported || t.isSupported(e.config.mediaType, e.config.codecType)) {
              i.config || (i.config = {});
              for (var a = Object.keys(r), l = 0; l < a.length; l++)
                if (s.toLowerCase() === a[l].toLowerCase()) {
                  var c = r[a[l]];
                  "Object" === x.typeOf(c)
                    ? (i.config = Object.assign({}, i.config, r[a[l]]))
                    : "Boolean" === x.typeOf(c) && (i.config.disable = !c);
                  break;
                }
              t.defaultConfig &&
                Object.keys(t.defaultConfig).forEach(function (e) {
                  void 0 === i.config[e] && (i.config[e] = t.defaultConfig[e]);
                }),
                i.root ? "string" == typeof i.root && (i.root = e[i.root]) : (i.root = e.root),
                (i.index = i.config.index || 0);
              try {
                o[s.toLowerCase()] &&
                  (this.unRegister(n, s.toLowerCase()),
                  console.warn(
                    "the is one plugin with same pluginName [".concat(s, "] exist, destroy the old instance"),
                  ));
                var u = new t(i);
                return (
                  (o[s.toLowerCase()] = u),
                  (o[s.toLowerCase()].func = t),
                  u && "function" == typeof u.afterCreate && u.afterCreate(),
                  u
                );
              } catch (h) {
                throw (console.error(h), h);
              }
            } else console.warn("not supported plugin [".concat(s, "]"));
          }
        }
      },
      unRegister: function (e, t) {
        e._pluginInfoId && (e = e._pluginInfoId), (t = t.toLowerCase());
        try {
          var i = this.pluginGroup[e]._plugins[t];
          i && (i.pluginName && i.__destroy(), delete this.pluginGroup[e]._plugins[t]);
        } catch (n) {
          console.error("[unRegister:".concat(t, "] cgid:[").concat(e, "] error"), n);
        }
      },
      deletePlugin: function (e, t) {
        var i = e._pluginInfoId;
        i && this.pluginGroup[i] && this.pluginGroup[i]._plugins && delete this.pluginGroup[i]._plugins[t];
      },
      getPlugins: function (e) {
        var t = e._pluginInfoId;
        return t && this.pluginGroup[t] ? this.pluginGroup[t]._plugins : {};
      },
      findPlugin: function (e, t) {
        var i = e._pluginInfoId;
        if (!i || !this.pluginGroup[i]) return null;
        var n = t.toLowerCase();
        return this.pluginGroup[i]._plugins[n];
      },
      beforeInit: function (e) {
        var t = this;
        function i(e) {
          return e && e.then
            ? e
            : new Promise(function (e) {
                e();
              });
        }
        return new Promise(function (n) {
          if (t.pluginGroup)
            return (
              e._loadingPlugins && e._loadingPlugins.length ? Promise.all(e._loadingPlugins) : Promise.resolve()
            ).then(function () {
              var o = e._pluginInfoId;
              if (t.pluginGroup[o]) {
                var r = t.pluginGroup[o]._plugins,
                  s = [];
                Object.keys(r).forEach(function (e) {
                  if (r[e] && r[e].beforePlayerInit)
                    try {
                      var t = r[e].beforePlayerInit();
                      s.push(i(t));
                    } catch (n) {
                      throw (s.push(i(null)), n);
                    }
                }),
                  Promise.all([].concat(s))
                    .then(function () {
                      n();
                    })
                    .catch(function (e) {
                      console.error(e), n();
                    });
              } else n();
            });
        });
      },
      afterInit: function (e) {
        var t = e._pluginInfoId;
        if (t && this.pluginGroup[t]) {
          var i = this.pluginGroup[t]._plugins;
          Object.keys(i).forEach(function (e) {
            i[e] && i[e].afterPlayerInit && i[e].afterPlayerInit();
          });
        }
      },
      setLang: function (e, t) {
        var i = t._pluginInfoId;
        if (i && this.pluginGroup[i]) {
          var n = this.pluginGroup[i]._plugins;
          Object.keys(n).forEach(function (t) {
            if (n[t].updateLang) n[t].updateLang(e);
            else
              try {
                n[t].lang = e;
              } catch (i) {
                console.warn("".concat(t, " setLang"));
              }
          });
        }
      },
      reRender: function (e) {
        var t = this,
          i = e._pluginInfoId;
        if (i && this.pluginGroup[i]) {
          var n = [],
            o = this.pluginGroup[i]._plugins;
          Object.keys(o).forEach(function (e) {
            "controls" !== e && o[e] && (n.push({ plugin: o[e].func, options: o[e].__args }), t.unRegister(i, e));
          }),
            n.forEach(function (i) {
              t.register(e, i.plugin, i.options);
            });
        }
      },
      onPluginsReady: function (e) {
        var t = e._pluginInfoId;
        if (t && this.pluginGroup[t]) {
          var i = this.pluginGroup[t]._plugins || {};
          Object.keys(i).forEach(function (e) {
            i[e].onPluginsReady && "function" == typeof i[e].onPluginsReady && i[e].onPluginsReady();
          });
        }
      },
      setCurrentUserActive: function (e, t) {
        if (this.pluginGroup[e]) {
          if (!t) return (this.pluginGroup[e]._player.isUserActive = t), e;
          for (var i = Object.keys(this.pluginGroup), n = 0; n < i.length; n++) {
            var o = this.pluginGroup[i[n]];
            o && o._player && (this.pluginGroup[i[n]]._player.isUserActive = !1);
          }
          return (this.pluginGroup[e]._player.isUserActive = t), e;
        }
      },
      getCurrentUseActiveId: function () {
        if (this.pluginGroup) {
          for (var e = Object.keys(this.pluginGroup), t = 0; t < e.length; t++) {
            var i = this.pluginGroup[e[t]];
            if (i && i._player && i._player.isUserActive) return e[t];
          }
          return null;
        }
      },
      destroy: function (e) {
        var t = e._pluginInfoId;
        if (this.pluginGroup[t]) {
          var i, n;
          (i = e.root), rt.unObserver(i, n);
          for (var o = this.pluginGroup[t]._plugins, r = 0, s = Object.keys(o); r < s.length; r++) {
            var a = s[r];
            this.unRegister(t, a);
          }
          var l = e.isUseActive;
          if ((delete this.pluginGroup[t], delete e._pluginInfoId, l)) {
            var c = Object.keys(this.pluginGroup);
            c.length > 0 && this.setCurrentUserActive(c[c.length - 1], !0);
          }
        }
      },
    },
    at = {
      DEFAULT: "xgplayer",
      DEFAULT_SKIN: "xgplayer-skin-default",
      ENTER: "xgplayer-is-enter",
      PAUSED: "xgplayer-pause",
      PLAYING: "xgplayer-playing",
      ENDED: "xgplayer-ended",
      CANPLAY: "xgplayer-canplay",
      LOADING: "xgplayer-isloading",
      ERROR: "xgplayer-is-error",
      REPLAY: "xgplayer-replay",
      NO_START: "xgplayer-nostart",
      ACTIVE: "xgplayer-active",
      INACTIVE: "xgplayer-inactive",
      FULLSCREEN: "xgplayer-is-fullscreen",
      CSS_FULLSCREEN: "xgplayer-is-cssfullscreen",
      ROTATE_FULLSCREEN: "xgplayer-rotate-fullscreen",
      PARENT_ROTATE_FULLSCREEN: "xgplayer-rotate-parent",
      PARENT_FULLSCREEN: "xgplayer-fullscreen-parent",
      INNER_FULLSCREEN: "xgplayer-fullscreen-inner",
      NO_CONTROLS: "no-controls",
      FLEX_CONTROLS: "flex-controls",
      CONTROLS_FOLLOW: "controls-follow",
      CONTROLS_AUTOHIDE: "controls-autohide",
      TOP_BAR_AUTOHIDE: "top-bar-autohide",
      NOT_ALLOW_AUTOPLAY: "not-allow-autoplay",
      SEEKING: "seeking",
      PC: "xgplayer-pc",
      MOBILE: "xgplayer-mobile",
      MINI: "xgplayer-mini",
    };
  function lt() {
    return {
      id: "",
      el: null,
      url: "",
      domEventType: "default",
      nullUrlStart: !1,
      width: 600,
      height: 337.5,
      fluid: !1,
      fitVideoSize: "fixed",
      videoFillMode: "auto",
      volume: 0.6,
      autoplay: !1,
      autoplayMuted: !1,
      loop: !1,
      isLive: !1,
      zoom: 1,
      videoInit: !0,
      poster: "",
      isMobileSimulateMode: !1,
      defaultPlaybackRate: 1,
      execBeforePluginsCall: null,
      allowSeekAfterEnded: !0,
      enableContextmenu: !0,
      closeVideoClick: !1,
      closeVideoDblclick: !1,
      closePlayerBlur: !1,
      closeDelayBlur: !1,
      leavePlayerTime: 3e3,
      closePlayVideoFocus: !1,
      closePauseVideoFocus: !1,
      closeFocusVideoFocus: !0,
      closeControlsBlur: !0,
      topBarAutoHide: !0,
      videoAttributes: {},
      startTime: 0,
      seekedStatus: "play",
      miniprogress: !1,
      disableSwipeHandler: function () {},
      enableSwipeHandler: function () {},
      ignores: [],
      whitelist: [],
      inactive: 3e3,
      lang:
        ((e = (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase()),
        "zh-cn" === e && (e = "zh"),
        e),
      controls: !0,
      marginControls: !1,
      fullscreenTarget: null,
      screenShot: !1,
      rotate: !1,
      pip: !1,
      download: !1,
      mini: !1,
      cssFullscreen: !0,
      keyShortcut: !0,
      presets: [],
      plugins: [],
      playbackRate: 1,
      definition: { list: [] },
      playsinline: !0,
      customDuration: 0,
      timeOffset: 0,
      icons: {},
      i18n: [],
      tabindex: 0,
      thumbnail: null,
      videoConfig: {},
      isHideTips: !1,
      commonStyle: { progressColor: "", playedColor: "", cachedColor: "", sliderBtnStyle: {}, volumeColor: "" },
    };
    var e;
  }
  var ct = 1,
    ut = 2,
    ht = 3,
    dt = 4,
    ft = 5,
    pt = 6,
    gt = 7,
    vt = ["ERROR", "INITIAL", "READY", "ATTACHING", "ATTACHED", "NOTALLOW", "RUNNING", "ENDED", "DESTROYED"],
    yt = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "onMouseEnter", function (t) {
            var i = u(e),
              n = i.player;
            i.playerConfig.closeControlsBlur && n.focus({ autoHide: !1 });
          }),
          s(u(e), "onMouseLeave", function () {
            u(e).player.focus();
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                e.config.mode || "mobile" !== O.device || (e.config.mode = "flex"),
                  e.player.config.marginControls && (e.config.autoHide = !1);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this,
                  t = this.config,
                  i = t.disable,
                  n = t.height,
                  o = t.mode;
                if (!i) {
                  "flex" === o && this.player.addClass(at.FLEX_CONTROLS);
                  var r = { height: "".concat(n, "px") };
                  Object.keys(r).map(function (t) {
                    e.root.style[t] = r[t];
                  }),
                    (this.left = this.find("xg-left-grid")),
                    (this.center = this.find("xg-center-grid")),
                    (this.right = this.find("xg-right-grid")),
                    (this.innerRoot = this.find("xg-inner-controls")),
                    this.on(de, function (t) {
                      t ? x.addClass(e.root, "mini-controls") : x.removeClass(e.root, "mini-controls");
                    });
                  var s = this.playerConfig.isMobileSimulateMode;
                  "mobile" !== O.device &&
                    "mobile" !== s &&
                    (this.bind("mouseenter", this.onMouseEnter), this.bind("mouseleave", this.onMouseLeave));
                }
              },
            },
            {
              key: "focus",
              value: function () {
                this.player.focus({ autoHide: !1 });
              },
            },
            {
              key: "focusAwhile",
              value: function () {
                this.player.focus({ autoHide: !0 });
              },
            },
            {
              key: "blur",
              value: function () {
                this.player.blur({ ignorePaused: !0 });
              },
            },
            {
              key: "recoverAutoHide",
              value: function () {
                this.config.autoHide && x.addClass(this.root, at.CONTROLS_AUTOHIDE);
              },
            },
            {
              key: "pauseAutoHide",
              value: function () {
                x.removeClass(this.root, at.CONTROLS_AUTOHIDE);
              },
            },
            {
              key: "show",
              value: function () {
                x.addClass(this.root, "show");
              },
            },
            {
              key: "hide",
              value: function () {
                x.removeClass(this.root, "show");
              },
            },
            {
              key: "mode",
              get: function () {
                return this.config.mode;
              },
            },
            {
              key: "registerPlugin",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 ? arguments[2] : void 0;
                if (this.root) {
                  var o = e.defaultConfig || {};
                  if (!t.root) {
                    var r = t.position ? t.position : t.config && t.config.position ? t.config.position : o.position;
                    switch (r) {
                      case Qe.CONTROLS_LEFT:
                        t.root = this.left;
                        break;
                      case Qe.CONTROLS_RIGHT:
                        t.root = this.right;
                        break;
                      case Qe.CONTROLS_CENTER:
                        t.root = this.center;
                        break;
                      case Qe.CONTROLS:
                        t.root = this.root;
                        break;
                      default:
                        t.root = this.left;
                    }
                    return p(l(i.prototype), "registerPlugin", this).call(this, e, t, n);
                  }
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                "mobile" !== O.device &&
                  (this.unbind("mouseenter", this.onMouseEnter), this.unbind("mouseleave", this.onMouseLeave));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.config,
                  t = e.mode,
                  i = e.autoHide,
                  n = e.initShow;
                if (!e.disable) {
                  var o = x.classNames(
                    { "xgplayer-controls": !0 },
                    { "flex-controls": "flex" === t },
                    { "bottom-controls": "bottom" === t },
                    s({}, at.CONTROLS_AUTOHIDE, i),
                    { "xgplayer-controls-initshow": n || !i },
                  );
                  return '<xg-controls class="'.concat(
                    o,
                    '" unselectable="on" onselectstart="return false">\n    <xg-inner-controls class="xg-inner-controls xg-pos">\n      <xg-left-grid class="xg-left-grid">\n      </xg-left-grid>\n      <xg-center-grid class="xg-center-grid"></xg-center-grid>\n      <xg-right-grid class="xg-right-grid">\n      </xg-right-grid>\n    </xg-inner-controls>\n    </xg-controls>',
                  );
                }
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "controls";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { disable: !1, autoHide: !0, mode: "", initShow: !1 };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    mt = { lang: {}, langKeys: [], textKeys: [] };
  function kt(e, t) {
    return (
      Object.keys(t).forEach(function (i) {
        var n,
          o = x.typeOf(t[i]),
          r = x.typeOf(e[i]);
        "Array" === o
          ? ("Array" !== r && (e[i] = []), (n = e[i]).push.apply(n, g(t[i])))
          : "Object" === o
          ? ("Object" !== r && (e[i] = {}), kt(e[i], t[i]))
          : (e[i] = t[i]);
      }),
      e
    );
  }
  function bt() {
    Object.keys(mt.lang.en).map(function (e) {
      mt.textKeys[e] = e;
    });
  }
  function Ct(e, t) {
    var i = e.LANG;
    if ((t || (t = mt), t.lang)) {
      var n = e.TEXT || {};
      "zh" === i && (i = "zh-cn"), t.lang[i] ? kt(t.lang[i], n) : (t.langKeys.push(i), (t.lang[i] = n)), bt();
    }
  }
  Ct({
    LANG: "en",
    TEXT: {
      ERROR_TYPES: {
        network: { code: 1, msg: "video download error" },
        mse: { code: 2, msg: "stream append error" },
        parse: { code: 3, msg: "parsing error" },
        format: { code: 4, msg: "wrong format" },
        decoder: { code: 5, msg: "decoding error" },
        runtime: { code: 6, msg: "grammatical errors" },
        timeout: { code: 7, msg: "play timeout" },
        other: { code: 8, msg: "other errors" },
      },
      HAVE_NOTHING: "There is no information on whether audio/video is ready",
      HAVE_METADATA: "Audio/video metadata is ready ",
      HAVE_CURRENT_DATA:
        "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
      HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
      HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
      NETWORK_EMPTY: "Audio/video has not been initialized",
      NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used",
      NETWORK_LOADING: "The browser is downloading the data",
      NETWORK_NO_SOURCE: "No audio/video source was found",
      MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
      MEDIA_ERR_NETWORK: "An error occurred while downloading",
      MEDIA_ERR_DECODE: "An error occurred while decoding",
      MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
      REPLAY: "Replay",
      ERROR: "Network is offline",
      PLAY_TIPS: "Play",
      PAUSE_TIPS: "Pause",
      PLAYNEXT_TIPS: "Play next",
      DOWNLOAD_TIPS: "Download",
      ROTATE_TIPS: "Rotate",
      RELOAD_TIPS: "Reload",
      FULLSCREEN_TIPS: "Fullscreen",
      EXITFULLSCREEN_TIPS: "Exit fullscreen",
      CSSFULLSCREEN_TIPS: "Cssfullscreen",
      EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
      TEXTTRACK: "Caption",
      PIP: "PIP",
      SCREENSHOT: "Screenshot",
      LIVE: "LIVE",
      OFF: "Off",
      OPEN: "Open",
      MINI_DRAG: "Click and hold to drag",
      MINISCREEN: "Miniscreen",
      REFRESH_TIPS: "Please Try",
      REFRESH: "Refresh",
      FORWARD: "forward",
      LIVE_TIP: "Live",
    },
  });
  var _t = {
      get textKeys() {
        return mt.textKeys;
      },
      get langKeys() {
        return mt.langKeys;
      },
      get lang() {
        var e = {};
        return (
          mt.langKeys.map(function (t) {
            e[t] = mt.lang[t];
          }),
          mt.lang["zh-cn"] && (e.zh = mt.lang["zh-cn"] || {}),
          e
        );
      },
      extend: function (e, t) {
        var i = [];
        if ((t || (t = mt), t.lang)) {
          i =
            "Array" !== x.typeOf(e)
              ? Object.keys(e).map(function (t) {
                  return { LANG: "zh" === t ? "zh-cn" : t, TEXT: e[t] };
                })
              : e;
          var n = t.lang;
          i.map(function (e) {
            "zh" === e.LANG && (e.LANG = "zh-cn"), n[e.LANG] ? kt(n[e.LANG] || {}, e.TEXT || {}) : Ct(e, t);
          }),
            bt();
        }
      },
      use: Ct,
      init: function (e) {
        var t,
          i = { lang: {}, langKeys: [], textKeys: {}, pId: e };
        return kt(i.lang, mt.lang), (t = i.langKeys).push.apply(t, g(mt.langKeys)), kt(i.textKeys, mt.textKeys), i;
      },
    },
    wt = ["play", "pause", "replay", "retry"],
    Tt = 0,
    xt = 0,
    Et = (function (e) {
      a(o, e);
      var i = d(o);
      function o(e) {
        var t;
        n(this, o);
        var r,
          a = x.deepMerge(lt(), e);
        s(u((t = i.call(this, a))), "canPlayFunc", function () {
          if (t.config) {
            var e = t.config,
              i = e.autoplay,
              n = e.startTime,
              o = e.defaultPlaybackRate;
            w.logInfo("player", "canPlayFunc, startTime", n),
              n && ((t.currentTime = n > t.duration ? t.duration : n), (t.config.startTime = 0)),
              (t.playbackRate = o),
              (i || t._useAutoplay) && t.mediaPlay(),
              t.off(q, t.canPlayFunc),
              t.removeClass(at.ENTER);
          }
        }),
          s(u(t), "onFullscreenChange", function (e, i) {
            var n = function () {
                x.setTimeout(
                  u(t),
                  function () {
                    t.resize();
                  },
                  100,
                );
              },
              o = x.getFullScreenEl();
            t._fullActionFrom
              ? (t._fullActionFrom = "")
              : t.emit(_e, {
                  eventType: "system",
                  action: "switch_fullscreen",
                  pluginName: "player",
                  currentTime: t.currentTime,
                  duration: t.duration,
                  props: [{ prop: "fullscreen", from: !0, to: !1 }],
                });
            var r = (function (e, t, i) {
              if (e) {
                var n = e.getAttribute(i);
                return !(!n || n !== t || ("VIDEO" !== e.tagName && "AUDIO" !== e.tagName));
              }
            })(o, t.playerId, Me);
            if (i || (o && (o === t._fullscreenEl || r)))
              n(),
                !t.config.closeFocusVideoFocus && t.media.focus(),
                (t.fullscreen = !0),
                t.changeFullStyle(t.root, o, at.FULLSCREEN),
                t.emit(ue, !0, t._fullScreenOffset),
                t.cssfullscreen && t.exitCssFullscreen();
            else if (t.fullscreen) {
              n();
              var s = u(t),
                a = s._fullScreenOffset;
              s.config.needFullscreenScroll
                ? (window.scrollTo(a.left, a.top),
                  x.setTimeout(
                    u(t),
                    function () {
                      (t.fullscreen = !1), (t._fullScreenOffset = null);
                    },
                    100,
                  ))
                : (!t.config.closeFocusVideoFocus && t.media.focus(),
                  (t.fullscreen = !1),
                  (t._fullScreenOffset = null)),
                t.cssfullscreen
                  ? t.removeClass(at.FULLSCREEN)
                  : t.recoverFullStyle(t.root, t._fullscreenEl, at.FULLSCREEN),
                (t._fullscreenEl = null),
                t.emit(ue, !1);
            }
          }),
          s(u(t), "_onWebkitbeginfullscreen", function (e) {
            (t._fullscreenEl = t.media), t.onFullscreenChange(e, !0);
          }),
          s(u(t), "_onWebkitendfullscreen", function (e) {
            t.onFullscreenChange(e, !1);
          }),
          Ve(u(t), wt),
          (t.config = a),
          (t._pluginInfoId = x.generateSessionId()),
          ((r = u(t)).logInfo = w.logInfo.bind(r)),
          (r.logWarn = w.logWarn.bind(r)),
          (r.logError = w.logError.bind(r));
        var l = t.constructor.defaultPreset;
        if (t.config.presets.length) {
          var c = t.config.presets.indexOf("default");
          c >= 0 && l && (t.config.presets[c] = l);
        } else l && t.config.presets.push(l);
        if (
          ((t.userTimer = null),
          (t.waitTimer = null),
          (t._state = ct),
          (t.isError = !1),
          (t._hasStart = !1),
          (t.isSeeking = !1),
          (t.isCanplay = !1),
          (t._useAutoplay = !1),
          (t.rotateDeg = 0),
          (t.isActive = !1),
          (t.fullscreen = !1),
          (t.cssfullscreen = !1),
          (t.isRotateFullscreen = !1),
          (t._fullscreenEl = null),
          (t._cssfullscreenEl = null),
          (t.curDefinition = null),
          (t._orgCss = ""),
          (t._fullScreenOffset = null),
          (t._videoHeight = 0),
          (t._videoWidth = 0),
          (t._accPlayed = { t: 0, acc: 0, loopAcc: 0 }),
          (t.innerContainer = null),
          (t.controls = null),
          (t.topBar = null),
          (t.root = null),
          (t.__i18n = _t.init(t._pluginInfoId)),
          O.os.isAndroid && O.osVersion > 0 && O.osVersion < 6 && (t.config.autoplay = !1),
          (t.database = new Ae()),
          (t.isUserActive = !1),
          !t._initDOM())
        )
          return (
            console.error(
              new Error("can't find the dom which id is ".concat(t.config.id, " or this.config.el does not exist")),
            ),
            h(t)
          );
        var d = t.config,
          f = d.definition,
          p = void 0 === f ? {} : f;
        if (!d.url && p.list && p.list.length > 0) {
          var g = p.list.find(function (e) {
            return e.definition && e.definition === p.defaultDefinition;
          });
          g || ((p.defaultDefinition = p.list[0].definition), (g = p.list[0])),
            (t.config.url = g.url),
            (t.curDefinition = g);
        }
        return (
          t._bindEvents(),
          t._registerPresets(),
          t._registerPlugins(),
          st.onPluginsReady(u(t)),
          t.getInitDefinition(),
          t.setState(ut),
          x.setTimeout(
            u(t),
            function () {
              t.emit(te);
            },
            0,
          ),
          t.onReady && t.onReady(),
          (t.config.videoInit || t.config.autoplay) && (!t.hasStart || t.state < dt) && t.start(),
          t
        );
      }
      return (
        r(
          o,
          [
            {
              key: "_initDOM",
              value: function () {
                var e = this;
                if (((this.root = this.config.id ? document.getElementById(this.config.id) : null), !this.root)) {
                  var t = this.config.el;
                  if (!t || 1 !== t.nodeType)
                    return (
                      this.emit(
                        B,
                        new M("use", this.config.vid, {
                          line: 32,
                          handle: "Constructor",
                          msg: "container id can't be empty",
                        }),
                      ),
                      console.error("this.confg.id or this.config.el can't be empty"),
                      !1
                    );
                  this.root = t;
                }
                var i = st.checkPlayerRoot(this.root);
                i &&
                  (w.logWarn("The is an Player instance already exists in this.root, destroy it and reinitialize"),
                  i.destroy()),
                  this.root.setAttribute(Me, this.playerId),
                  st.init(this),
                  this._initBaseDoms();
                var n = this.constructor.XgVideoProxy;
                if (n && this.mediaConfig.mediaType === n.mediaType) {
                  var o = this.innerContainer || this.root;
                  this.detachVideoEvents(this.media);
                  var r = new n(o, this.config, this.mediaConfig);
                  this.attachVideoEvents(r), (this.media = r);
                }
                if ((this.media.setAttribute(Me, this.playerId), this.config.controls)) {
                  var s = this.config.controls.root || null,
                    a = st.register(this, yt, { root: s });
                  this.controls = a;
                }
                var l = "mobile" === this.config.isMobileSimulateMode ? "mobile" : O.device;
                if (
                  (this.addClass(
                    ""
                      .concat(at.DEFAULT, " ")
                      .concat(at.INACTIVE, " xgplayer-")
                      .concat(l, " ")
                      .concat(this.config.controls ? "" : at.NO_CONTROLS),
                  ),
                  this.config.autoplay ? this.addClass(at.ENTER) : this.addClass(at.NO_START),
                  this.config.fluid)
                ) {
                  var c = this.config,
                    u = c.width,
                    h = c.height;
                  ("number" == typeof u && "number" == typeof h) || ((u = 600), (h = 337.5));
                  var d = {
                    width: "100%",
                    height: "0",
                    "max-width": "100%",
                    "padding-top": "".concat((100 * h) / u, "%"),
                  };
                  Object.keys(d).forEach(function (t) {
                    e.root.style[t] = d[t];
                  });
                } else
                  ["width", "height"].forEach(function (t) {
                    e.config[t] &&
                      ("number" != typeof e.config[t]
                        ? (e.root.style[t] = e.config[t])
                        : (e.root.style[t] = "".concat(e.config[t], "px")));
                  });
                return !0;
              },
            },
            {
              key: "_initBaseDoms",
              value: function () {
                (this.topBar = null),
                  (this.leftBar = null),
                  (this.rightBar = null),
                  this.config.marginControls &&
                    ((this.innerContainer = x.createDom(
                      "xg-video-container",
                      "",
                      { "data-index": -1 },
                      "xg-video-container",
                    )),
                    this.root.appendChild(this.innerContainer));
              },
            },
            {
              key: "_bindEvents",
              value: function () {
                var e = this;
                ["focus", "blur"].forEach(function (t) {
                  e.on(t, e["on" + t.charAt(0).toUpperCase() + t.slice(1)]);
                }),
                  Oe.forEach(function (t) {
                    document && document.addEventListener(t, e.onFullscreenChange);
                  }),
                  O.os.isIos &&
                    (this.media.addEventListener("webkitbeginfullscreen", this._onWebkitbeginfullscreen),
                    this.media.addEventListener("webkitendfullscreen", this._onWebkitendfullscreen)),
                  this.once(Y, this.resize),
                  (this.playFunc = function () {
                    e.config.closeFocusVideoFocus || e.media.focus();
                  }),
                  this.once(j, this.playFunc);
              },
            },
            {
              key: "_unbindEvents",
              value: function () {
                var e = this;
                this.root.removeEventListener("mousemove", this.mousemoveFunc),
                  Oe.forEach(function (t) {
                    document.removeEventListener(t, e.onFullscreenChange);
                  }),
                  this.playFunc && this.off(j, this.playFunc),
                  this.off(q, this.canPlayFunc),
                  this.media.removeEventListener("webkitbeginfullscreen", this._onWebkitbeginfullscreen),
                  this.media.removeEventListener("webkitendfullscreen", this._onWebkitendfullscreen);
              },
            },
            {
              key: "_startInit",
              value: function (e) {
                var t = this;
                if (
                  this.media &&
                  ((e && "" !== e && ("Array" !== x.typeOf(e) || 0 !== e.length)) ||
                    ((e = ""),
                    this.emit(ie),
                    w.logWarn("config.url is null, please get url and run player._startInit(url)"),
                    !this.config.nullUrlStart))
                ) {
                  this._detachSourceEvents(this.media),
                    "Array" === x.typeOf(e) && e.length > 0
                      ? this._attachSourceEvents(this.media, e)
                      : this.media.src && this.media.src === e
                      ? e || this.media.removeAttribute("src")
                      : (this.media.src = e),
                    "Number" === x.typeOf(this.config.volume) && (this.volume = this.config.volume);
                  var i = this.innerContainer ? this.innerContainer : this.root;
                  this.media instanceof window.Element &&
                    !i.contains(this.media) &&
                    i.insertBefore(this.media, i.firstChild);
                  var n = this.media.readyState;
                  w.logInfo("_startInit readyState", n),
                    this.config.autoplay &&
                      (!/^blob/.test(this.media.currentSrc) && !/^blob/.test(this.media.src) && this.load(),
                      (O.os.isIpad || O.os.isPhone) && this.mediaPlay()),
                    n >= 2 ? this.canPlayFunc() : this.once(q, this.canPlayFunc),
                    (!this.hasStart || this.state < dt) && st.afterInit(this),
                    (this.hasStart = !0),
                    this.setState(dt),
                    x.setTimeout(
                      this,
                      function () {
                        t.emit(re);
                      },
                      0,
                    );
                }
              },
            },
            {
              key: "_registerPlugins",
              value: function () {
                var e = this,
                  t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this._loadingPlugins = [];
                var i = this.config.ignores || [],
                  n = this.config.plugins || [],
                  o = this.config.i18n || [];
                t && _t.extend(o, this.__i18n);
                var r = i.join("||").toLowerCase().split("||"),
                  s = this.plugins;
                n.forEach(function (i) {
                  try {
                    var n = i.plugin ? i.plugin.pluginName : i.pluginName;
                    if (n && r.indexOf(n.toLowerCase()) > -1) return null;
                    if (!t && s[n.toLowerCase()]) return;
                    if (i.lazy && i.loader) {
                      var o = st.lazyRegister(e, i);
                      return void (
                        i.forceBeforeInit &&
                        (o
                          .then(function () {
                            e._loadingPlugins.splice(e._loadingPlugins.indexOf(o), 1);
                          })
                          .catch(function (t) {
                            w.logError("_registerPlugins:loadingPlugin", t),
                              e._loadingPlugins.splice(e._loadingPlugins.indexOf(o), 1);
                          }),
                        e._loadingPlugins.push(o))
                      );
                    }
                    return e.registerPlugin(i);
                  } catch (a) {
                    w.logError("_registerPlugins:", a);
                  }
                });
              },
            },
            {
              key: "_registerPresets",
              value: function () {
                var e = this;
                this.config.presets.forEach(function (t) {
                  !(function (e, t) {
                    var i,
                      n,
                      o = t.preset && t.options ? new t.preset(t.options, e.config) : new t({}, e.config),
                      r = o.plugins,
                      s = void 0 === r ? [] : r,
                      a = o.ignores,
                      l = void 0 === a ? [] : a,
                      c = o.icons,
                      u = void 0 === c ? {} : c,
                      h = o.i18n,
                      d = void 0 === h ? [] : h;
                    e.config.plugins || (e.config.plugins = []),
                      e.config.ignores || (e.config.ignores = []),
                      (i = e.config.plugins).push.apply(i, g(s)),
                      (n = e.config.ignores).push.apply(n, g(l)),
                      Object.keys(u).map(function (t) {
                        e.config.icons[t] || (e.config.icons[t] = u[t]);
                      });
                    var f = e.config.i18n || [];
                    d.push.apply(d, g(f)), (e.config.i18n = d);
                  })(e, t);
                });
              },
            },
            {
              key: "_getRootByPosition",
              value: function (e) {
                var t = null;
                switch (e) {
                  case Qe.ROOT_RIGHT:
                    this.rightBar || (this.rightBar = x.createPositionBar("xg-right-bar", this.root)),
                      (t = this.rightBar);
                    break;
                  case Qe.ROOT_LEFT:
                    this.leftBar || (this.leftBar = x.createPositionBar("xg-left-bar", this.root)), (t = this.leftBar);
                    break;
                  case Qe.ROOT_TOP:
                    this.topBar ||
                      ((this.topBar = x.createPositionBar("xg-top-bar", this.root)),
                      this.config.topBarAutoHide && x.addClass(this.topBar, at.TOP_BAR_AUTOHIDE)),
                      (t = this.topBar);
                    break;
                  default:
                    t = this.innerContainer || this.root;
                }
                return t;
              },
            },
            {
              key: "registerPlugin",
              value: function (e, t) {
                var i = st.formatPluginInfo(e, t),
                  n = i.PLUFGIN,
                  o = i.options,
                  r = this.config.plugins;
                !st.checkPluginIfExits(n.pluginName, r) && r.push(n);
                var s = st.getRootByConfig(n.pluginName, this.config);
                s.root && (o.root = s.root), s.position && (o.position = s.position);
                var a = o.position
                  ? o.position
                  : (o.config && o.config.position) || (n.defaultConfig && n.defaultConfig.position);
                return !o.root && "string" == typeof a && a.indexOf("controls") > -1
                  ? this.controls && this.controls.registerPlugin(n, o, n.pluginName)
                  : (o.root || (o.root = this._getRootByPosition(a)), st.register(this, n, o));
              },
            },
            {
              key: "deregister",
              value: function (e) {
                "string" == typeof e ? st.unRegister(this, e) : e instanceof ze && st.unRegister(this, e.pluginName);
              },
            },
            {
              key: "unRegisterPlugin",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.deregister(e), t && this.removePluginFromConfig(e);
              },
            },
            {
              key: "removePluginFromConfig",
              value: function (e) {
                var t;
                if (("string" == typeof e ? (t = e) : e instanceof ze && (t = e.pluginName), t))
                  for (var i = this.config.plugins.length - 1; i > -1; i--) {
                    if (this.config.plugins[i].pluginName.toLowerCase() === t.toLowerCase()) {
                      this.config.plugins.splice(i, 1);
                      break;
                    }
                  }
              },
            },
            {
              key: "plugins",
              get: function () {
                return st.getPlugins(this);
              },
            },
            {
              key: "getPlugin",
              value: function (e) {
                var t = st.findPlugin(this, e);
                return t && t.pluginName ? t : null;
              },
            },
            {
              key: "addClass",
              value: function (e) {
                this.root && (x.hasClass(this.root, e) || x.addClass(this.root, e));
              },
            },
            {
              key: "removeClass",
              value: function (e) {
                this.root && x.removeClass(this.root, e);
              },
            },
            {
              key: "hasClass",
              value: function (e) {
                if (this.root) return x.hasClass(this.root, e);
              },
            },
            {
              key: "setAttribute",
              value: function (e, t) {
                this.root && this.root.setAttribute(e, t);
              },
            },
            {
              key: "removeAttribute",
              value: function (e, t) {
                this.root && this.root.removeAttribute(e, t);
              },
            },
            {
              key: "start",
              value: function (e) {
                var t = this;
                if (!(this.state > ht))
                  return (
                    e || this.config.url || this.getInitDefinition(),
                    (this.hasStart = !0),
                    this.setState(ht),
                    this._registerPlugins(!1),
                    st
                      .beforeInit(this)
                      .then(function () {
                        if (t.config) return e || (e = t.url || t.config.url), t._startInit(e);
                      })
                      .catch(function (e) {
                        throw ((e.fileName = "player"), (e.lineNumber = "236"), w.logError("start:beforeInit:", e), e);
                      })
                  );
              },
            },
            {
              key: "switchURL",
              value: function (e, t) {
                var i = this,
                  n = e;
                "Object" === x.typeOf(e) && (n = e.url);
                var o = this.currentTime,
                  r = this.paused && !this.isError;
                return (
                  (this.src = n),
                  new Promise(function (e) {
                    var t = function () {
                      (i.currentTime = o),
                        r &&
                          i.once("canplay", function () {
                            i.pause();
                          }),
                        e();
                    };
                    O.os.isAndroid
                      ? i.once("timeupdate", function () {
                          t();
                        })
                      : i.once("canplay", function () {
                          t();
                        }),
                      i.play();
                  })
                );
              },
            },
            {
              key: "videoPlay",
              value: function () {
                this.mediaPlay();
              },
            },
            {
              key: "mediaPlay",
              value: function () {
                var e = this;
                if (!this.hasStart && this.state < dt)
                  return (
                    this.removeClass(at.NO_START), this.addClass(at.ENTER), this.start(), void (this._useAutoplay = !0)
                  );
                this.state < pt && (this.removeClass(at.NO_START), !this.isCanplay && this.addClass(at.ENTER));
                var t = p(l(o.prototype), "play", this).call(this);
                return (
                  void 0 !== t && t && t.then
                    ? t
                        .then(function () {
                          e.removeClass(at.NOT_ALLOW_AUTOPLAY),
                            e.addClass(at.PLAYING),
                            e.state < pt && (w.logInfo(">>>>playPromise.then"), e.setState(pt), e.emit(ne));
                        })
                        .catch(function (t) {
                          if ((w.logWarn(">>>>playPromise.catch", t.name), e.media && e.media.error))
                            return e.onError(), void e.removeClass(at.ENTER);
                          "NotAllowedError" === t.name &&
                            (e._errorTimer = x.setTimeout(
                              e,
                              function () {
                                (e._errorTimer = null),
                                  e.emit(oe),
                                  e.addClass(at.NOT_ALLOW_AUTOPLAY),
                                  e.removeClass(at.ENTER),
                                  e.pause(),
                                  e.setState(ft);
                              },
                              0,
                            ));
                        })
                    : (w.logWarn("video.play not return promise"),
                      this.state < pt &&
                        (this.setState(pt),
                        this.removeClass(at.NOT_ALLOW_AUTOPLAY),
                        this.removeClass(at.NO_START),
                        this.removeClass(at.ENTER),
                        this.addClass(at.PLAYING),
                        this.emit(ne))),
                  t
                );
              },
            },
            {
              key: "mediaPause",
              value: function () {
                p(l(o.prototype), "pause", this).call(this);
              },
            },
            {
              key: "videoPause",
              value: function () {
                p(l(o.prototype), "pause", this).call(this);
              },
            },
            {
              key: "play",
              value: function () {
                var e = this;
                this.removeClass(at.PAUSED),
                  We(this, "play", function () {
                    e.mediaPlay();
                  });
              },
            },
            {
              key: "pause",
              value: function () {
                var e = this;
                We(this, "pause", function () {
                  p(l(o.prototype), "pause", e).call(e);
                });
              },
            },
            {
              key: "seek",
              value: function (e, t) {
                var i = this;
                if (this.media && !Number.isNaN(Number(e) || !this.hasStart)) {
                  var n = this.config,
                    o = n.isSeekedPlay,
                    r = n.seekedStatus,
                    s = t || (o ? "play" : r);
                  (e = e < 0 ? 0 : e > this.duration ? parseInt(this.duration, 10) : e),
                    this.once(q, function () {
                      switch ((i.removeClass(at.ENTER), (i.isSeeking = !1), s)) {
                        case "play":
                          i.play();
                          break;
                        case "pause":
                          i.pause();
                          break;
                        default:
                          !i.paused && i.play();
                      }
                    }),
                    this.state < pt
                      ? (this.removeClass(at.NO_START),
                        this.addClass(at.ENTER),
                        (this.currentTime = e),
                        "play" === s && this.play())
                      : (this.currentTime = e);
                }
              },
            },
            {
              key: "getInitDefinition",
              value: function () {
                var e = this,
                  t = this.config,
                  i = t.definition;
                !t.url &&
                  i &&
                  i.list &&
                  i.list.length > 0 &&
                  i.defaultDefinition &&
                  i.list.map(function (t) {
                    t.definition === i.defaultDefinition && ((e.config.url = t.url), (e.curDefinition = t));
                  });
              },
            },
            {
              key: "changeDefinition",
              value: function (e, i) {
                var n = this,
                  o = this.config.definition;
                if (
                  (Array.isArray(null == o ? void 0 : o.list) &&
                    o.list.forEach(function (t) {
                      (null == e ? void 0 : e.definition) === t.definition && (n.curDefinition = t);
                    }),
                  null != e && e.bitrate && "number" != typeof e.bitrate && (e.bitrate = parseInt(e.bitrate, 10) || 0),
                  this.emit(fe, { from: i, to: e }),
                  this.hasStart)
                ) {
                  var r = this.switchURL(
                    e.url,
                    t(
                      {
                        seamless:
                          !1 !== o.seamless &&
                          "undefined" != typeof MediaSource &&
                          "function" == typeof MediaSource.isTypeSupported,
                      },
                      e,
                    ),
                  );
                  r && r.then
                    ? r.then(function () {
                        n.emit(pe, { from: i, to: e });
                      })
                    : this.emit(pe, { from: i, to: e });
                } else this.config.url = e.url;
              },
            },
            {
              key: "reload",
              value: function () {
                this.load(),
                  (this.reloadFunc = function () {
                    this.play();
                  }),
                  this.once(Y, this.reloadFunc);
              },
            },
            {
              key: "resetState",
              value: function () {
                var e = this,
                  t = [
                    at.NOT_ALLOW_AUTOPLAY,
                    at.PLAYING,
                    at.NO_START,
                    at.PAUSED,
                    at.REPLAY,
                    at.ENTER,
                    at.ENDED,
                    at.ERROR,
                    at.LOADING,
                  ];
                (this.hasStart = !1),
                  (this.isError = !1),
                  (this._useAutoplay = !1),
                  this.mediaPause(),
                  (this._accPlayed.acc = 0),
                  (this._accPlayed.t = 0),
                  (this._accPlayed.loopAcc = 0),
                  t.forEach(function (t) {
                    e.removeClass(t);
                  }),
                  this.addClass(at.ENTER),
                  this.emit(we);
              },
            },
            {
              key: "reset",
              value: function () {
                var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  i = arguments.length > 1 ? arguments[1] : void 0;
                this.resetState();
                var n = this.plugins;
                if (
                  n &&
                  (t.map(function (t) {
                    e.deregister(t);
                  }),
                  i)
                ) {
                  var o = lt();
                  Object.keys(this.config).keys(function (t) {
                    "undefined" === e.config[t] ||
                      ("plugins" !== t && "presets" !== t && "el" !== t && "id" !== t) ||
                      (e.config[t] = o[t]);
                  });
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this,
                  t = this.innerContainer,
                  i = this.root,
                  n = this.media;
                if (i && n) {
                  if (
                    ((this.hasStart = !1),
                    (this._useAutoplay = !1),
                    i.removeAttribute(Me),
                    this.updateAcc("destroy"),
                    this._unbindEvents(),
                    this._detachSourceEvents(this.media),
                    x.clearAllTimers(this),
                    this.emit(ae),
                    st.destroy(this),
                    Ge(this),
                    p(l(o.prototype), "destroy", this).call(this),
                    this.fullscreen && this._fullscreenEl === this.root && this.exitFullscreen(),
                    t)
                  )
                    for (var r = t.children, s = 0; s < r.length; s++) t.removeChild(r[s]);
                  !t && n instanceof window.Node && i.contains(n) && i.removeChild(n),
                    ["topBar", "leftBar", "rightBar", "innerContainer"].map(function (t) {
                      e[t] && i.removeChild(e[t]), (e[t] = null);
                    });
                  var a = i.className.split(" ");
                  a.length > 0
                    ? (i.className = a
                        .filter(function (e) {
                          return e.indexOf("xgplayer") < 0;
                        })
                        .join(" "))
                    : (i.className = ""),
                    this.removeAttribute("data-xgfill"),
                    ["isSeeking", "isCanplay", "isActive", "cssfullscreen", "fullscreen"].forEach(function (t) {
                      e[t] = !1;
                    });
                }
              },
            },
            {
              key: "replay",
              value: function () {
                var e = this;
                this.removeClass(at.ENDED),
                  (this.currentTime = 0),
                  (this.isSeeking = !1),
                  We(this, "replay", function () {
                    e.once(q, function () {
                      var t = e.mediaPlay();
                      t &&
                        t.catch &&
                        t.catch(function (e) {
                          console.log(e);
                        });
                    }),
                      e.play(),
                      e.emit(se),
                      e.onPlay();
                  });
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this.removeClass(at.ERROR),
                  this.addClass(at.LOADING),
                  We(this, "retry", function () {
                    var t = e.currentTime;
                    (e.src = e.config.url),
                      !e.config.isLive && (e.currentTime = t),
                      e.once(q, function () {
                        e.mediaPlay();
                      });
                  });
              },
            },
            {
              key: "changeFullStyle",
              value: function (e, t, i, n) {
                e &&
                  (n || (n = at.PARENT_FULLSCREEN),
                  this._orgCss || (this._orgCss = x.filterStyleFromText(e)),
                  x.addClass(e, i),
                  t &&
                    t !== e &&
                    !this._orgPCss &&
                    ((this._orgPCss = x.filterStyleFromText(t)), x.addClass(t, n), t.setAttribute(Me, this.playerId)));
              },
            },
            {
              key: "recoverFullStyle",
              value: function (e, t, i, n) {
                n || (n = at.PARENT_FULLSCREEN),
                  this._orgCss && (x.setStyleFromCsstext(e, this._orgCss), (this._orgCss = "")),
                  x.removeClass(e, i),
                  t &&
                    t !== e &&
                    this._orgPCss &&
                    (x.setStyleFromCsstext(t, this._orgPCss),
                    (this._orgPCss = ""),
                    x.removeClass(t, n),
                    t.removeAttribute(Me));
              },
            },
            {
              key: "getFullscreen",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.fullscreenTarget,
                  t = this.root,
                  i = this.media;
                e || (e = t),
                  (this._fullScreenOffset = { top: x.scrollTop(), left: x.scrollLeft() }),
                  (this._fullscreenEl = e),
                  (this._fullActionFrom = "get");
                var n = x.getFullScreenEl();
                if (n !== this._fullscreenEl)
                  try {
                    for (var o = 0; o < Re.length; o++) {
                      var r = Re[o];
                      if (e[r]) {
                        var s =
                          "webkitRequestFullscreen" === r
                            ? e.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT)
                            : e[r]();
                        return s && s.then ? s : Promise.resolve();
                      }
                    }
                    return i.fullscreenEnabled || i.webkitSupportsFullscreen
                      ? (i.webkitEnterFullscreen(), Promise.resolve())
                      : Promise.reject(new Error("call getFullscreen fail"));
                  } catch (a) {
                    return Promise.reject(new Error("call getFullscreen fail"));
                  }
                else this.onFullscreenChange();
              },
            },
            {
              key: "exitFullscreen",
              value: function (e) {
                if (
                  (this.isRotateFullscreen && this.exitRotateFullscreen(), this._fullscreenEl || x.getFullScreenEl())
                ) {
                  this.root;
                  var t = this.media;
                  this._fullActionFrom = "exit";
                  try {
                    for (var i = 0; i < De.length; i++) {
                      var n = De[i];
                      if (document[n]) {
                        var o = document[n]();
                        return o && o.then ? o : Promise.resolve();
                      }
                    }
                    return t && t.webkitSupportsFullscreen
                      ? (t.webkitExitFullScreen(), Promise.resolve())
                      : Promise.reject(new Error("call exitFullscreen fail"));
                  } catch (r) {
                    return Promise.reject(new Error("call exitFullscreen fail"));
                  }
                }
              },
            },
            {
              key: "getCssFullscreen",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.fullscreenTarget;
                this.isRotateFullscreen ? this.exitRotateFullscreen() : this.fullscreen && this.exitFullscreen();
                var t = e ? "".concat(at.INNER_FULLSCREEN, " ").concat(at.CSS_FULLSCREEN) : at.CSS_FULLSCREEN;
                this.changeFullStyle(this.root, e, t);
                var i = this.config.fullscreen,
                  n = void 0 === i ? {} : i,
                  o = !0 === n.useCssFullscreen || ("function" == typeof n.useCssFullscreen && n.useCssFullscreen());
                o && ((this.fullscreen = !0), this.emit(ue, !0)),
                  (this._cssfullscreenEl = e),
                  (this.cssfullscreen = !0),
                  this.emit(he, !0);
              },
            },
            {
              key: "exitCssFullscreen",
              value: function () {
                var e = this._cssfullscreenEl
                  ? "".concat(at.INNER_FULLSCREEN, " ").concat(at.CSS_FULLSCREEN)
                  : at.CSS_FULLSCREEN;
                if (this.fullscreen) {
                  var t = this.config.fullscreen,
                    i = void 0 === t ? {} : t;
                  !0 === i.useCssFullscreen || ("function" == typeof i.useCssFullscreen && i.useCssFullscreen())
                    ? (this.recoverFullStyle(this.root, this._cssfullscreenEl, e),
                      (this.fullscreen = !1),
                      this.emit(ue, !1))
                    : this.removeClass(e);
                } else this.recoverFullStyle(this.root, this._cssfullscreenEl, e);
                (this._cssfullscreenEl = null), (this.cssfullscreen = !1), this.emit(he, !1);
              },
            },
            {
              key: "getRotateFullscreen",
              value: function (e) {
                this.cssfullscreen && this.exitCssFullscreen(e);
                var t = e ? "".concat(at.INNER_FULLSCREEN, " ").concat(at.ROTATE_FULLSCREEN) : at.ROTATE_FULLSCREEN;
                (this._fullscreenEl = e || this.root),
                  this.changeFullStyle(this.root, e, t, at.PARENT_ROTATE_FULLSCREEN),
                  (this.isRotateFullscreen = !0),
                  (this.fullscreen = !0),
                  this.setRotateDeg(90),
                  this.emit(ue, !0);
              },
            },
            {
              key: "exitRotateFullscreen",
              value: function (e) {
                var t =
                  this._fullscreenEl !== this.root
                    ? "".concat(at.INNER_FULLSCREEN, " ").concat(at.ROTATE_FULLSCREEN)
                    : at.ROTATE_FULLSCREEN;
                this.recoverFullStyle(this.root, this._fullscreenEl, t, at.PARENT_ROTATE_FULLSCREEN),
                  (this.isRotateFullscreen = !1),
                  (this.fullscreen = !1),
                  this.setRotateDeg(0),
                  this.emit(ue, !1);
              },
            },
            {
              key: "setRotateDeg",
              value: function (e) {
                90 === window.orientation || -90 === window.orientation ? (this.rotateDeg = 0) : (this.rotateDeg = e);
              },
            },
            {
              key: "focus",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { autoHide: !this.config.closeDelayBlur, delay: this.config.inactive };
                this.isActive ? this.onFocus(e) : this.emit(Q, t({ paused: this.paused, ended: this.ended }, e));
              },
            },
            {
              key: "blur",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { ignorePaused: !1 };
                this.isActive ? this.emit(ee, t({ paused: this.paused, ended: this.ended }, e)) : this.onBlur(e);
              },
            },
            {
              key: "onFocus",
              value: function () {
                var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  i = t.autoHide,
                  n = void 0 === i ? !this.config.closePlayerBlur : i,
                  o = t.delay,
                  r = void 0 === o ? this.config.inactive : o;
                (this.isActive = !0),
                  this.removeClass(at.INACTIVE),
                  this.userTimer && (x.clearTimeout(this, this.userTimer), (this.userTimer = null)),
                  n
                    ? (this.userTimer = x.setTimeout(
                        this,
                        function () {
                          (e.userTimer = null), e.blur();
                        },
                        r,
                      ))
                    : this.userTimer && (x.clearTimeout(this, this.userTimer), (this.userTimer = null));
              },
            },
            {
              key: "onBlur",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.ignorePaused,
                  i = void 0 !== t && t;
                if (this.isActive) {
                  var n = this.config.closePauseVideoFocus;
                  (this.isActive = !1), (i || n || (!this.paused && !this.ended)) && this.addClass(at.INACTIVE);
                }
              },
            },
            {
              key: "onEmptied",
              value: function () {
                this.updateAcc("emptied");
              },
            },
            {
              key: "onCanplay",
              value: function () {
                this.removeClass(at.ENTER),
                  this.removeClass(at.ERROR),
                  this.removeClass(at.LOADING),
                  (this.isCanplay = !0),
                  this.waitTimer && x.clearTimeout(this, this.waitTimer);
              },
            },
            {
              key: "onLoadeddata",
              value: function () {
                this.isError = !1;
              },
            },
            {
              key: "onLoadstart",
              value: function () {
                this.removeClass(at.ERROR);
              },
            },
            {
              key: "onPlay",
              value: function () {
                this.state === gt && this.setState(pt),
                  this.removeClass(at.PAUSED),
                  this.ended && this.removeClass(at.ENDED),
                  !this.config.closePlayVideoFocus && this.focus();
              },
            },
            {
              key: "onPause",
              value: function () {
                this.addClass(at.PAUSED),
                  this.updateAcc("pause"),
                  this.config.closePauseVideoFocus ||
                    (this.userTimer && (x.clearTimeout(this, this.userTimer), (this.userTimer = null)), this.focus());
              },
            },
            {
              key: "onEnded",
              value: function () {
                this.updateAcc("ended"), this.addClass(at.ENDED), this.setState(gt);
              },
            },
            {
              key: "onError",
              value: function () {
                (this.isError = !0),
                  this.updateAcc("error"),
                  this.removeClass(at.NOT_ALLOW_AUTOPLAY),
                  this.removeClass(at.NO_START),
                  this.removeClass(at.ENTER),
                  this.removeClass(at.LOADING),
                  this.addClass(at.ERROR);
              },
            },
            {
              key: "onSeeking",
              value: function () {
                this.isSeeking || this.updateAcc("seeking"), (this.isSeeking = !0), this.addClass(at.SEEKING);
              },
            },
            {
              key: "onSeeked",
              value: function () {
                (this.isSeeking = !1),
                  this.waitTimer && x.clearTimeout(this, this.waitTimer),
                  this.removeClass(at.LOADING),
                  this.removeClass(at.SEEKING);
              },
            },
            {
              key: "onWaiting",
              value: function () {
                var e = this;
                this.waitTimer && x.clearTimeout(this, this.waitTimer),
                  this.updateAcc("waiting"),
                  (this.waitTimer = x.setTimeout(
                    this,
                    function () {
                      e.addClass(at.LOADING), x.clearTimeout(e, e.waitTimer), (e.waitTimer = null);
                    },
                    200,
                  ));
              },
            },
            {
              key: "onPlaying",
              value: function () {
                var e = this;
                (this.isError = !1),
                  [at.NO_START, at.PAUSED, at.ENDED, at.ERROR, at.REPLAY, at.LOADING].forEach(function (t) {
                    e.removeClass(t);
                  });
              },
            },
            {
              key: "onTimeupdate",
              value: function () {
                !this._videoHeight && this.resize(),
                  (this.waitTimer || this.hasClass(at.LOADING)) &&
                    this.media.readyState > 2 &&
                    (this.removeClass(at.LOADING), x.clearTimeout(this, this.waitTimer), (this.waitTimer = null)),
                  !this.paused && this.state < pt && this.duration && (this.setState(pt), this.emit(ne)),
                  this._accPlayed.t || this.paused || this.ended || (this._accPlayed.t = new Date().getTime());
              },
            },
            {
              key: "onVolumechange",
              value: function () {
                "Number" === x.typeOf(this.config.volume) && (this.config.volume = this.volume);
              },
            },
            {
              key: "onRatechange",
              value: function () {
                this.config.defaultPlaybackRate = this.playbackRate;
              },
            },
            {
              key: "emitUserAction",
              value: function (e, i, n) {
                if (this.media && i && e) {
                  var o = "String" === x.typeOf(e) ? e : e.type || "";
                  n.props && "Array" !== x.typeOf(n.props) && (n.props = [n.props]),
                    this.emit(
                      _e,
                      t(
                        {
                          eventType: o,
                          action: i,
                          currentTime: this.currentTime,
                          duration: this.duration,
                          ended: this.ended,
                          event: e,
                        },
                        n,
                      ),
                    );
                }
              },
            },
            {
              key: "updateAcc",
              value: function (e) {
                if (this._accPlayed.t) {
                  var t = new Date().getTime() - this._accPlayed.t;
                  (this._accPlayed.acc += t),
                    (this._accPlayed.t = 0),
                    ("ended" === e || this.ended) && (this._accPlayed.loopAcc = this._accPlayed.acc);
                }
              },
            },
            {
              key: "checkBuffer",
              value: function (e) {
                var t = this.media.buffered;
                if (!t || 0 === t.length || !this.duration) return !0;
                for (var i = e || this.media.currentTime || 0.2, n = t.length, o = 0; o < n; o++)
                  if (t.start(o) <= i && t.end(o) > i) return !0;
                return !1;
              },
            },
            {
              key: "position",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { h: 0, y: 0, x: 0, w: 0 };
                if (this.media && e && e.h) {
                  var t = 1 / e.h,
                    i = 1 !== t ? "scale(".concat(t, ")") : "",
                    n = 0,
                    o = 0;
                  e.y && (o = (100 - 100 * e.h) / 2 - 100 * e.y),
                    e.w && e.x && (n = (100 - 100 * e.w) / 2 - 100 * e.x),
                    (i += " translate(".concat(n, "%, ").concat(o, "%)")),
                    (this.media.style.transform = i),
                    (this.media.style.webkitTransform = i);
                }
              },
            },
            {
              key: "setConfig",
              value: function (e) {
                var t = this;
                e &&
                  Object.keys(e).map(function (i) {
                    if ("plugins" !== i) {
                      t.config[i] = e[i];
                      var n = t.plugins[i.toLowerCase()];
                      n && "Function" === x.typeOf(n.setConfig) && n.setConfig(e[i]);
                    }
                  });
              },
            },
            {
              key: "playNext",
              value: function (e) {
                this.resetState(),
                  this.setConfig(e),
                  (this._currentTime = 0),
                  (this._duration = 0),
                  this.play(),
                  this.emit(ke, e);
              },
            },
            {
              key: "resize",
              value: function () {
                var e = this;
                if (this.media) {
                  var t = this.media,
                    i = t.videoWidth,
                    n = t.videoHeight,
                    o = this.config,
                    r = o.fitVideoSize,
                    s = o.videoFillMode;
                  if ((("fill" !== s && "cover" !== s) || this.setAttribute("data-xgfill", s), n && i)) {
                    (this._videoHeight = n), (this._videoWidth = i);
                    var a = this.root.getBoundingClientRect(),
                      l = this.controls && this.innerContainer ? this.controls.root.getBoundingClientRect().height : 0,
                      c = a.width,
                      u = a.height - l,
                      h = parseInt((i / n) * 1e3, 10),
                      d = parseInt((c / u) * 1e3, 10),
                      f = c,
                      p = u,
                      g = {};
                    ("auto" === r && d > h) || "fixWidth" === r
                      ? ((p = (c / h) * 1e3),
                        this.config.fluid
                          ? (g.paddingTop = "".concat((100 * p) / f, "%"))
                          : (g.height = "".concat(p + l, "px")))
                      : (("auto" === r && d < h) || "fixHeight" === r) &&
                        ((f = (h * u) / 1e3), (g.width = "".concat(f, "px"))),
                      this.fullscreen ||
                        this.cssfullscreen ||
                        Object.keys(g).forEach(function (t) {
                          e.root.style[t] = g[t];
                        }),
                      (("fillHeight" === s && d < h) || ("fillWidth" === s && d > h)) &&
                        this.setAttribute("data-xgfill", "cover");
                    var v = { videoScale: h, vWidth: f, vHeight: p, cWidth: f, cHeight: p + l };
                    this.emit(ge, v);
                  }
                }
              },
            },
            {
              key: "updateObjectPosition",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.media.updateObjectPosition
                  ? this.media.updateObjectPosition(e, t)
                  : (this.media.style.objectPosition = "".concat(100 * e, "% ").concat(100 * t, "%"));
              },
            },
            {
              key: "setState",
              value: function (e) {
                w.logInfo("setState", "state from:".concat(vt[this.state], " to:").concat(vt[e])), (this._state = e);
              },
            },
            {
              key: "state",
              get: function () {
                return this._state;
              },
            },
            {
              key: "isFullscreen",
              get: function () {
                return this.fullscreen;
              },
            },
            {
              key: "isCssfullScreen",
              get: function () {
                return this.cssfullscreen;
              },
            },
            {
              key: "hasStart",
              get: function () {
                return this._hasStart;
              },
              set: function (e) {
                "boolean" == typeof e && ((this._hasStart = e), !1 === e && this.setState(ut), this.emit("hasstart"));
              },
            },
            {
              key: "isPlaying",
              get: function () {
                return this._state === pt || this._state === gt;
              },
              set: function (e) {
                e ? this.setState(pt) : this._state >= pt && this.setState(dt);
              },
            },
            {
              key: "definitionList",
              get: function () {
                return (this.config && this.config.definition && this.config.definition.list) || [];
              },
              set: function (e) {
                var t = this,
                  i = this.config.definition,
                  n = null,
                  o = null;
                (i.list = e),
                  this.emit("resourceReady", e),
                  e.forEach(function (e) {
                    var r;
                    (null === (r = t.curDefinition) || void 0 === r ? void 0 : r.definition) === e.definition &&
                      (n = e),
                      i.defaultDefinition === e.definition && (o = e);
                  }),
                  !o && e.length > 0 && (o = e[0]),
                  n ? this.changeDefinition(n) : o && this.changeDefinition(o);
              },
            },
            {
              key: "videoFrameInfo",
              get: function () {
                var e = { total: 0, dropped: 0, corrupted: 0, droppedRate: 0, droppedDuration: 0 };
                if (!this.media || !this.media.getVideoPlaybackQuality) return e;
                var t = this.media.getVideoPlaybackQuality();
                return (
                  (e.dropped = t.droppedVideoFrames || 0),
                  (e.total = t.totalVideoFrames || 0),
                  (e.corrupted = t.corruptedVideoFrames || 0),
                  e.total > 0 &&
                    ((e.droppedRate = (e.dropped / e.total) * 100),
                    (e.droppedDuration = parseInt((this.cumulateTime / e.total) * e.dropped, 0))),
                  e
                );
              },
            },
            {
              key: "lang",
              get: function () {
                return this.config.lang;
              },
              set: function (e) {
                0 !==
                  _t.langKeys.filter(function (t) {
                    return t === e;
                  }).length || "zh" === e
                  ? ((this.config.lang = e), st.setLang(e, this))
                  : console.error(
                      "Sorry, set lang fail, because the language ["
                        .concat(e, "] is not supported now, list of all supported languages is [")
                        .concat(_t.langKeys.join(), "] "),
                    );
              },
            },
            {
              key: "i18n",
              get: function () {
                var e = this.config.lang;
                return "zh" === e && (e = "zh-cn"), this.__i18n.lang[e] || this.__i18n.lang.en;
              },
            },
            {
              key: "i18nKeys",
              get: function () {
                return this.__i18n.textKeys || {};
              },
            },
            {
              key: "version",
              get: function () {
                return R;
              },
            },
            {
              key: "playerId",
              get: function () {
                return this._pluginInfoId;
              },
            },
            {
              key: "url",
              get: function () {
                return this.__url || this.config.url;
              },
              set: function (e) {
                this.__url = e;
              },
            },
            {
              key: "poster",
              get: function () {
                return this.plugins.poster ? this.plugins.poster.config.poster : this.config.poster;
              },
              set: function (e) {
                this.plugins.poster && this.plugins.poster.update(e);
              },
            },
            {
              key: "readyState",
              get: function () {
                return p(l(o.prototype), "readyState", this);
              },
            },
            {
              key: "error",
              get: function () {
                var e = p(l(o.prototype), "error", this);
                return this.i18n[e] || e;
              },
            },
            {
              key: "networkState",
              get: function () {
                return p(l(o.prototype), "networkState", this);
              },
            },
            {
              key: "fullscreenChanging",
              get: function () {
                return !(null === this._fullScreenOffset);
              },
            },
            {
              key: "cumulateTime",
              get: function () {
                var e = this._accPlayed;
                return this.updateAcc("get"), e.acc;
              },
            },
            {
              key: "zoom",
              get: function () {
                return this.config.zoom;
              },
              set: function (e) {
                this.config.zoom = e;
              },
            },
            {
              key: "avgSpeed",
              get: function () {
                return xt;
              },
              set: function (e) {
                xt = e;
              },
            },
            {
              key: "realTimeSpeed",
              get: function () {
                return Tt;
              },
              set: function (e) {
                Tt = e;
              },
            },
            {
              key: "hook",
              value: function (e, t) {
                return Ne.call.apply(Ne, [this].concat(Array.prototype.slice.call(arguments)));
              },
            },
            {
              key: "useHooks",
              value: function (e, t) {
                return Fe.call.apply(Fe, [this].concat(Array.prototype.slice.call(arguments)));
              },
            },
            {
              key: "removeHooks",
              value: function (e, t) {
                return He.call.apply(He, [this].concat(Array.prototype.slice.call(arguments)));
              },
            },
            {
              key: "usePluginHooks",
              value: function (e, t, i) {
                for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), r = 3; r < n; r++)
                  o[r - 3] = arguments[r];
                return Be.call.apply(Be, [this].concat(Array.prototype.slice.call(arguments)));
              },
            },
            {
              key: "removePluginHooks",
              value: function (e, t, i) {
                for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), r = 3; r < n; r++)
                  o[r - 3] = arguments[r];
                return Ue.call.apply(Ue, [this].concat(Array.prototype.slice.call(arguments)));
              },
            },
            {
              key: "setUserActive",
              value: function (e, t) {
                "boolean" == typeof t && t !== this.muted && (this.addInnerOP("volumechange"), (this.muted = t)),
                  st.setCurrentUserActive(this.playerId, e);
              },
            },
          ],
          [
            {
              key: "debugger",
              get: function () {
                return w.config.debug;
              },
              set: function (e) {
                w.config.debug = e;
              },
            },
            {
              key: "getCurrentUserActivePlayerId",
              value: function () {
                return st.getCurrentUseActiveId();
              },
            },
            {
              key: "setCurrentUserActive",
              value: function (e, t) {
                st.setCurrentUserActive(e, t);
              },
            },
            {
              key: "isHevcSupported",
              value: function () {
                return O.isHevcSupported();
              },
            },
            {
              key: "probeConfigSupported",
              value: function (e) {
                return O.probeConfigSupported(e);
              },
            },
            {
              key: "install",
              value: function (e, t) {
                o.plugins || (o.plugins = {}), o.plugins[e] || (o.plugins[e] = t);
              },
            },
            {
              key: "use",
              value: function (e, t) {
                o.plugins || (o.plugins = {}), (o.plugins[e] = t);
              },
            },
          ],
        ),
        o
      );
    })(Ie);
  s(Et, "defaultPreset", null), s(Et, "XgVideoProxy", null);
  function St() {
    return new Date().getTime();
  }
  var Pt = "loadstart",
    Lt = "loadeddata",
    It = "firstFrame",
    At = "waitingStart",
    Ot = "waitingEnd",
    Rt = "seekStart",
    Dt = "seekEnd",
    Mt = (function (e) {
      a(o, e);
      var i = d(o);
      function o() {
        var e;
        n(this, o);
        for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
        return (
          s(u((e = i.call.apply(i, [this].concat(r)))), "_onTimeupdate", function () {
            (e._state.isTimeUpdate = !0),
              e._state.autoplayStart &&
                (w.logInfo("[xgLogger]".concat(e.player.playerId, " _onTimeupdate")), e._sendFF("onTimeupdate"));
          }),
          s(u(e), "_onAutoplayStart", function () {
            w.logInfo("[xgLogger]".concat(e.player.playerId, " _onAutoplayStart")),
              (e._state.autoplayStart = !0),
              e.vt && e._sendFF("onAutoplayStart");
          }),
          s(u(e), "_onReset", function () {
            (e._state = { autoplayStart: !1, isFFLoading: !1, isTimeUpdate: !1, isFFSend: !1, isLs: !1 }),
              (e.vt = 0),
              (e.pt = 0),
              (e.fvt = 0),
              (e.newPointTime = St()),
              (e.loadedCostTime = 0),
              (e.startCostTime = 0),
              (e._isSeeking = !1),
              (e.seekingStart = 0),
              (e.waitingStart = 0),
              (e.fixedWaitingStart = 0),
              (e._isWaiting = !1),
              e._waitTimer && x.clearTimeout(u(e), e._waitTimer),
              e._waittTimer && x.clearTimeout(u(e), e._waittTimer),
              (e._waitTimer = null),
              (e._waittTimer = null),
              (e._waitType = 0);
          }),
          s(u(e), "_onSeeking", function () {
            e.seekingStart || (e.suspendWaitingStatus("seek"), (e.seekingStart = St()), e.emitLog(Rt, { start: St() }));
          }),
          s(u(e), "_onSeeked", function () {
            e.suspendSeekingStatus("seeked");
          }),
          s(u(e), "_onWaitingLoadStart", function () {
            e._isWaiting ||
              e.vt ||
              ((e._isWaiting = !0),
              (e.waitingStart = St()),
              (e.fixedWaitingStart = St()),
              (e._waitType = 1),
              e.emitLog(At, { fixedStart: e.fixedWaitingStart, start: e.waitingStart, type: 1, endType: "loadstart" }));
          }),
          s(u(e), "_onWaiting", function () {
            !e._isWaiting &&
              e.vt &&
              ((e._isWaiting = !0),
              e.vt ? (e.seekingStart ? (e._waitType = 2) : (e._waitType = 0)) : (e._waitType = 1),
              (e.fixedWaitingStart = St()),
              (e._waitTimer = x.setTimeout(
                u(e),
                function () {
                  e._isWaiting &&
                    ((e.waitingStart = St()),
                    x.clearTimeout(u(e), e._waitTimer),
                    (e._waitTimer = null),
                    e._startWaitTimeout(),
                    e.emitLog(At, {
                      fixedStart: e.fixedWaitingStart,
                      start: e.waitingStart,
                      type: e._waitType,
                      endType: 2 === e._waitType ? "seek" : "playing",
                    }));
                },
                200,
              )));
          }),
          s(u(e), "_onError", function () {
            e.suspendSeekingStatus("error"), e.suspendWaitingStatus("error");
          }),
          s(u(e), "_onPlaying", function () {
            e._isWaiting && e.suspendWaitingStatus("playing");
          }),
          e
        );
      }
      return (
        r(
          o,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                this._onReset(),
                  (this._waitType = "firstFrame"),
                  this._initOnceEvents(),
                  (this.newPointTime = St()),
                  (this.loadedCostTime = 0),
                  (this.startCostTime = 0),
                  this.on(J, function () {
                    var t = e._state,
                      i = t.autoplayStart,
                      n = t.isFFSend;
                    (e.startCostTime = St() - e.newPointTime),
                      w.logInfo(
                        "[xgLogger]".concat(e.player.playerId, " LOAD_START"),
                        "autoplayStart:"
                          .concat(i, " isFFSend:")
                          .concat(n, " startCostTime:")
                          .concat(e.startCostTime, " newPointTime")
                          .concat(e.newPointTime),
                      ),
                      n ||
                        (!t.isLs && e.emitLog(Pt, {}),
                        (t.isLs = !0),
                        (t.isTimeUpdate = !1),
                        (t.isFFLoading = !0),
                        (e.pt = St()),
                        (e.vt = 0),
                        (e.fvt = 0),
                        e._initOnceEvents(),
                        e._onWaitingLoadStart());
                  }),
                  this.on(Y, function () {
                    (e.vt = St()), (e.fvt = e.vt - e.pt), (e.loadedCostTime = e.vt - e.newPointTime);
                    var t = e._state,
                      i = t.isTimeUpdate,
                      n = t.isFFSend,
                      o = t.autoplayStart;
                    w.logInfo(
                      "[xgLogger]".concat(e.player.playerId, " LOADED_DATA"),
                      "fvt:"
                        .concat(e.fvt, " isTimeUpdate:")
                        .concat(e._state.isTimeUpdate, " loadedCostTime:")
                        .concat(e.loadedCostTime),
                    ),
                      i && o && e._sendFF("loadedData"),
                      n || e.emitLog(Lt, {}),
                      e.suspendWaitingStatus("loadeddata");
                  }),
                  this.on(U, this._onSeeking),
                  this.on(V, this._onSeeked),
                  this.on(ae, function () {
                    e.endState("destroy");
                  }),
                  this.on(le, function () {
                    e.endState("urlChange"),
                      w.logInfo("[xgLogger]".concat(e.player.playerId, " URL_CHANGE")),
                      e._state.isFFSend && e._onReset();
                  }),
                  this.on([N, q], this._onPlaying),
                  this.on(W, this._onWaiting),
                  this.on(B, this._onError),
                  this.on(we, function () {
                    w.logInfo("[xgLogger]".concat(e.player.playerId, " RESET")),
                      e.endState("reset"),
                      e._initOnceEvents(),
                      e._onReset();
                  });
              },
            },
            {
              key: "_initOnceEvents",
              value: function () {
                this.off(ne, this._onAutoplayStart),
                  this.off(G, this._onTimeupdate),
                  this.once(ne, this._onAutoplayStart),
                  this.once(G, this._onTimeupdate);
              },
            },
            {
              key: "_sendFF",
              value: function (e) {
                this.s = St();
                var t = this._state,
                  i = t.isFFLoading,
                  n = t.isFFSend;
                w.logInfo(
                  "[xgLogger]".concat(this.player.playerId, " _sendFF"),
                  "".concat(e, " fvt:").concat(this.fvt, " isFFLoading:").concat(i, " !isFFSend:").concat(!n),
                ),
                  this.vt > 0 &&
                    i &&
                    !n &&
                    (w.logInfo("[xgLogger]".concat(this.player.playerId, " emitLog_firstFrame"), e),
                    (this._state.isFFLoading = !1),
                    (this._state.isFFSend = !0),
                    this.emitLog(It, {
                      fvt: this.fvt,
                      costTime: this.fvt,
                      vt: this.vt,
                      startCostTime: this.startCostTime,
                      loadedCostTime: this.loadedCostTime,
                    }));
              },
            },
            {
              key: "_startWaitTimeout",
              value: function () {
                var e = this;
                this._waittTimer && x.clearTimeout(this, this._waittTimer),
                  (this._waittTimer = x.setTimeout(
                    this,
                    function () {
                      e.suspendWaitingStatus("timeout"), x.clearTimeout(e, e._waittTimer), (e._waittTimer = null);
                    },
                    this.config.waitTimeout,
                  ));
              },
            },
            {
              key: "endState",
              value: function (e) {
                this.suspendWaitingStatus(e), this.suspendSeekingStatus(e);
              },
            },
            {
              key: "suspendSeekingStatus",
              value: function (e) {
                if (this.seekingStart) {
                  var t = St(),
                    i = t - this.seekingStart;
                  (this.seekingStart = 0), this.emitLog(Dt, { end: t, costTime: i, endType: e });
                }
              },
            },
            {
              key: "suspendWaitingStatus",
              value: function (e) {
                if (
                  (this._waitTimer && (x.clearTimeout(this, this._waitTimer), (this._waitTimer = null)),
                  this._waittTimer && (x.clearTimeout(this, this._waittTimer), (this._waittTimer = null)),
                  (this._isWaiting = !1),
                  this.waitingStart)
                ) {
                  var t = St(),
                    i = t - this.waitingStart,
                    n = t - this.fixedWaitingStart,
                    o = this.config.waitTimeout;
                  (this._isWaiting = !1),
                    (this.waitingStart = 0),
                    (this.fixedWaitingStart = 0),
                    this.emitLog(Ot, {
                      fixedCostTime: n > o ? o : n,
                      costTime: i > o ? o : i,
                      type: "loadeddata" === e ? 1 : this._waitType,
                      endType: 2 === this._waitType ? "seek" : e,
                    });
                }
              },
            },
            {
              key: "emitLog",
              value: function (e, i) {
                var n = this.player;
                this.emit(
                  Ce,
                  t(
                    {
                      t: St(),
                      host: x.getHostFromUrl(n.currentSrc),
                      vtype: n.vtype,
                      eventType: e,
                      currentTime: this.player.currentTime,
                      readyState: n.video.readyState,
                      networkState: n.video.networkState,
                    },
                    i,
                  ),
                );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "xgLogger";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { waitTimeout: 1e4 };
              },
            },
          ],
        ),
        o
      );
    })(nt);
  function jt() {
    return new DOMParser().parseFromString(
      '<svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" width="78" height="78">\n  <path fill="#fff" transform="translate(20, 20)" d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var Nt = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "registerIcons",
              value: function () {
                return { replay: jt };
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                nt.insert(this.icons.replay, this.root, 0),
                  (this.__handleReplay = this.hook(
                    "replayClick",
                    function () {
                      e.player.replay();
                    },
                    {
                      pre: function (e) {
                        e.preventDefault(), e.stopPropagation();
                      },
                    },
                  )),
                  this.bind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay),
                  this.on(F, function () {
                    if ((e.playerConfig.loop || x.addClass(e.player.root, "replay"), !e.config.disable)) {
                      e.show();
                      var t = e.root.querySelector("path");
                      if (t) {
                        var i = window.getComputedStyle(t).getPropertyValue("transform");
                        if ("string" == typeof i && i.indexOf("none") > -1) return null;
                        t.setAttribute("transform", i);
                      }
                    }
                  }),
                  this.on(j, function () {
                    e.hide();
                  });
              },
            },
            {
              key: "handleReplay",
              value: function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  this.player.replay(),
                  x.removeClass(this.player.root, "replay");
              },
            },
            {
              key: "show",
              value: function () {
                this.config.disable || (this.root.style.display = "flex");
              },
            },
            {
              key: "enable",
              value: function () {
                this.config.disable = !1;
              },
            },
            {
              key: "disable",
              value: function () {
                (this.config.disable = !0), this.hide();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay);
              },
            },
            {
              key: "render",
              value: function () {
                return '<xg-replay class="xgplayer-replay">\n      <xg-replay-txt class="xgplayer-replay-txt" lang-key="'
                  .concat(this.i18nKeys.REPLAY, '">')
                  .concat(this.i18n.REPLAY, "</xg-replay-txt>\n    </xg-replay>");
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "replay";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { disable: !1 };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    Ft = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "isEndedShow",
              get: function () {
                return this.config.isEndedShow;
              },
              set: function (e) {
                this.config.isEndedShow = e;
              },
            },
            {
              key: "hide",
              value: function () {
                x.addClass(this.root, "hide");
              },
            },
            {
              key: "show",
              value: function () {
                x.removeClass(this.root, "hide");
              },
            },
            {
              key: "beforeCreate",
              value: function (e) {
                "string" == typeof e.player.config.poster && (e.config.poster = e.player.config.poster);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                this.on(F, function () {
                  e.isEndedShow && x.removeClass(e.root, "hide");
                }),
                  this.config.hideCanplay
                    ? (this.once(G, function () {
                        e.onTimeUpdate();
                      }),
                      this.on(le, function () {
                        x.removeClass(e.root, "hide"),
                          x.addClass(e.root, "xg-showplay"),
                          e.once(G, function () {
                            e.onTimeUpdate();
                          });
                      }))
                    : this.on(j, function () {
                        x.addClass(e.root, "hide");
                      });
              },
            },
            {
              key: "onTimeUpdate",
              value: function () {
                var e = this;
                this.player.currentTime
                  ? x.removeClass(this.root, "xg-showplay")
                  : this.once(G, function () {
                      e.onTimeUpdate();
                    });
              },
            },
            {
              key: "update",
              value: function (e) {
                e && ((this.config.poster = e), (this.root.style.backgroundImage = "url(".concat(e, ")")));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.config,
                  t = e.poster,
                  i = e.hideCanplay,
                  n = t ? "background-image:url(".concat(t, ");") : "";
                return '<xg-poster class="xgplayer-poster '
                  .concat(i ? "xg-showplay" : "", '" style="')
                  .concat(n, '">\n    </xg-poster>');
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "poster";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { isEndedShow: !0, hideCanplay: !1, poster: "" };
              },
            },
          ],
        ),
        i
      );
    })(nt);
  function Ht() {
    return new DOMParser().parseFromString(
      '<svg class="play" xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="3 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  function Bt() {
    return new DOMParser().parseFromString(
      '<svg class="pause" xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="3 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var Ut = {};
  var Vt = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        return (
          n(this, i),
          s(u((o = t.call(this, e))), "onAutoplayStart", function () {
            if (!o.autoPlayStart) {
              var e = "auto" === o.config.mode ? "auto-hide" : "hide";
              x.addClass(o.root, e), (o.autoPlayStart = !0), o.onPlayPause("play");
            }
          }),
          (o.autoPlayStart = !1),
          o
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this,
                  t = this.player,
                  i = this.playerConfig;
                this.initIcons(),
                  this.once(te, function () {
                    i &&
                      (i.lang && "en" === i.lang
                        ? x.addClass(t.root, "lang-is-en")
                        : "jp" === i.lang && x.addClass(t.root, "lang-is-jp"));
                  }),
                  this.on(ne, this.onAutoplayStart),
                  i.autoplay || this.show(),
                  this.on(oe, function () {
                    var t = "auto" === e.config.mode ? "auto-hide" : "hide";
                    e.setAttr("data-state", "play"), x.removeClass(e.root, t), e.show();
                  }),
                  this.on(j, function () {
                    e.onPlayPause("play");
                  }),
                  this.on(H, function () {
                    e.onPlayPause("pause");
                  }),
                  (this.clickHandler = this.hook("startClick", this.switchPausePlay, {
                    pre: function (t) {
                      t.cancelable && t.preventDefault(), t.stopPropagation();
                      var i = e.player.paused;
                      e.emitUserAction(t, "switch_play_pause", { props: "paused", from: i, to: !i });
                    },
                  })),
                  this.bind(["click", "touchend"], this.clickHandler);
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return {
                  startPlay: { icon: Ht, class: "xg-icon-play" },
                  startPause: { icon: Bt, class: "xg-icon-pause" },
                };
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this.icons;
                this.appendChild("xg-start-inner", e.startPlay), this.appendChild("xg-start-inner", e.startPause);
              },
            },
            {
              key: "hide",
              value: function () {
                x.addClass(this.root, "hide");
              },
            },
            {
              key: "show",
              value: function () {
                x.removeClass(this.root, "hide");
              },
            },
            {
              key: "focusHide",
              value: function () {
                x.addClass(this.root, "focus-hide");
              },
            },
            {
              key: "recover",
              value: function () {
                x.removeClass(this.root, "focus-hide");
              },
            },
            {
              key: "switchStatus",
              value: function (e) {
                e
                  ? this.setAttr("data-state", this.player.paused ? "pause" : "play")
                  : this.setAttr("data-state", this.player.paused ? "play" : "pause");
              },
            },
            {
              key: "animate",
              value: function (e) {
                var t = this;
                !(function (e, t) {
                  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { start: null, end: null };
                  Ut[e] && window.clearTimeout(Ut[e].id),
                    (Ut[e] = {}),
                    i.start && i.start(),
                    (Ut[e].id = window.setTimeout(function () {
                      i.end && i.end(), window.clearTimeout(Ut[e].id), delete Ut[e];
                    }, t));
                })("pauseplay", 400, {
                  start: function () {
                    x.addClass(t.root, "interact"), t.show(), t.switchStatus(!0);
                  },
                  end: function () {
                    x.removeClass(t.root, "interact"), !e && t.hide();
                  },
                });
              },
            },
            {
              key: "switchPausePlay",
              value: function (e) {
                var t = this.player;
                (e.cancelable && e.preventDefault(), e.stopPropagation(), t.state < ut) ||
                  (this.player.paused || t.state !== pt ? t.play() : t.pause());
              },
            },
            {
              key: "onPlayPause",
              value: function (e) {
                var t = this.config,
                  i = this.player;
                if (!(i.state < pt) && this.autoPlayStart) {
                  if ("show" === t.mode) return this.switchStatus(), void this.show();
                  if ("auto" !== t.mode) {
                    if ((t.isShowPause && i.paused && !i.ended) || (t.isShowEnd && i.ended))
                      return this.switchStatus(), void this.show();
                    if (t.disableAnimate) return this.switchStatus(), void this.hide();
                    if ("play" === e) this.autoPlayStart ? this.animate() : this.hide();
                    else {
                      if (!this.autoPlayStart || i.ended) return;
                      this.animate();
                    }
                  } else this.switchStatus();
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbind(["click", "touchend"], this.clickHandler),
                  Object.keys(Ut).map(function (e) {
                    window.clearTimeout(Ut[e].id), delete Ut[e];
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.playerConfig.autoplay ? ("auto" === this.config.mode ? "auto-hide" : "hide") : "";
                return '\n    <xg-start class="xgplayer-start '.concat(
                  e,
                  '">\n    <xg-start-inner></xg-start-inner>\n    </xg-start>',
                );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "start";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { isShowPause: !1, isShowEnd: !1, disableAnimate: !1, mode: "hide" };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    Gt = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "render",
              value: function () {
                var e = this.config.innerHtml,
                  t = x.createDom("xg-enter", "", {}, "xgplayer-enter");
                if (e && e instanceof window.HTMLElement) t.appendChild(e);
                else if (e && "string" == typeof e) t.innerHTML = e;
                else {
                  for (var i = "", n = 1; n <= 12; n++) i += '<div class="xgplayer-enter-bar'.concat(n, '"></div>');
                  t.innerHTML = '<div class="xgplayer-enter-spinner">'.concat(i, "</div>");
                }
                return t;
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "enter";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { innerHtml: "", logo: "" };
              },
            },
          ],
        ),
        i
      );
    })(nt);
  function Wt(e, t, i) {
    try {
      return ' <div class="xg-tips '
        .concat(i ? "hide" : " ", '" lang-key="')
        .concat(e.i18nKeys[t], '">\n    ')
        .concat(e.i18n[t], "\n    </div>");
    } catch (n) {
      return '<div class="xg-tips hide"></div>';
    }
  }
  var qt = (function (e) {
    a(i, e);
    var t = d(i);
    function i() {
      return n(this, i), t.apply(this, arguments);
    }
    return (
      r(
        i,
        [
          {
            key: "afterCreate",
            value: function () {
              (this.getMini = this.getMini.bind(this)),
                (this.exitMini = this.exitMini.bind(this)),
                this.bind("click", this.getMini);
            },
          },
          {
            key: "getMini",
            value: function () {
              this.config.onClick && this.config.onClick();
            },
          },
          {
            key: "exitMini",
            value: function () {
              this.config.onClick && this.config.onClick();
            },
          },
          {
            key: "destroy",
            value: function () {
              this.unbind(["click", "touchend"], this.getMini);
            },
          },
          {
            key: "render",
            value: function () {
              var e = "MINISCREEN";
              return '\n      <xg-icon class="xgplayer-miniicon">\n      <div class="xgplayer-icon btn-text"><span class="icon-text" lang-key="'
                .concat(this.i18nKeys[e], '">')
                .concat(this.i18n[e], "</span></div>\n      </xg-icon>");
            },
          },
        ],
        [
          {
            key: "pluginName",
            get: function () {
              return "miniscreenIcon";
            },
          },
          {
            key: "defaultConfig",
            get: function () {
              return { position: Qe.CONTROLS_RIGHT, index: 10 };
            },
          },
        ],
      ),
      i
    );
  })(nt);
  function zt(e) {
    var t = parseFloat(e);
    return -1 === e.indexOf("%") && !Number.isNaN(t) && t;
  }
  var Kt = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth",
    ],
    Yt = Kt.length;
  function Xt(e) {
    if (("string" == typeof e && (e = document.querySelector(e)), e && "object" === i(e) && e.nodeType)) {
      var t = (function (e) {
        return window.getComputedStyle(e);
      })(e);
      if ("none" === t.display)
        return (function () {
          for (
            var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0;
            t < Yt;
            t++
          )
            e[Kt[t]] = 0;
          return e;
        })();
      var n = {};
      (n.width = e.offsetWidth), (n.height = e.offsetHeight);
      for (var o = (n.isBorderBox = "border-box" === t.boxSizing), r = 0; r < Yt; r++) {
        var s = Kt[r],
          a = t[s],
          l = parseFloat(a);
        n[s] = Number.isNaN(l) ? 0 : l;
      }
      var c = n.paddingLeft + n.paddingRight,
        u = n.paddingTop + n.paddingBottom,
        h = n.marginLeft + n.marginRight,
        d = n.marginTop + n.marginBottom,
        f = n.borderLeftWidth + n.borderRightWidth,
        p = n.borderTopWidth + n.borderBottomWidth,
        g = o,
        v = zt(t.width);
      !1 !== v && (n.width = v + (g ? 0 : c + f));
      var y = zt(t.height);
      return (
        !1 !== y && (n.height = y + (g ? 0 : u + p)),
        (n.innerWidth = n.width - (c + f)),
        (n.innerHeight = n.height - (u + p)),
        (n.outerWidth = n.width + h),
        (n.outerHeight = n.height + d),
        n
      );
    }
  }
  function Zt(e, t) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      if (n.identifier === t) return n;
    }
  }
  var Jt = "dragStart",
    $t = "dragMove",
    Qt = "dragEnded",
    ei = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
    },
    ti = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          n(this, i),
          ((o = t.call(this)).isEnabled = !0),
          (o.isDragging = !1),
          (o.isDown = !1),
          (o.position = {}),
          (o.downPoint = {}),
          (o.dragPoint = { x: 0, y: 0 }),
          (o.startPos = { x: 0, y: 0 }),
          (o._root = e instanceof Element ? e : document.querySelector(e)),
          (o._handlerDom = r.handle instanceof Element ? r.handle : document.querySelector(r.handle)),
          o._root && o._handlerDom ? (o._bindStartEvent(), o) : h(o)
        );
      }
      return (
        r(i, [
          {
            key: "_bindStartEvent",
            value: function () {
              var e = this;
              "ontouchstart" in window ? (this._startKey = "touchstart") : (this._startKey = "mousedown"),
                (this["on".concat(this._startKey)] = this["on".concat(this._startKey)].bind(this)),
                this._handlerDom.addEventListener(this._startKey, this["on".concat(this._startKey)]),
                ei[this._startKey].map(function (t) {
                  e["on".concat(t)] = e["on".concat(t)].bind(e);
                });
            },
          },
          {
            key: "_unbindStartEvent",
            value: function () {
              this._handlerDom.removeEventListener(this._startKey, this["on".concat(this._startKey)]);
            },
          },
          {
            key: "_bindPostStartEvents",
            value: function (e) {
              var t = this;
              if (e) {
                var i = ei[this._startKey];
                i.map(function (e) {
                  window.addEventListener(e, t["on".concat(e)]);
                }),
                  (this._boundPointerEvents = i);
              }
            },
          },
          {
            key: "_unbindPostStartEvents",
            value: function () {
              var e = this;
              this._boundPointerEvents &&
                (this._boundPointerEvents.map(function (t) {
                  window.removeEventListener(t, e["on".concat(t)]);
                }),
                delete this._boundPointerEvents);
            },
          },
          {
            key: "enable",
            value: function () {
              this.isEnabled = !0;
            },
          },
          {
            key: "disable",
            value: function () {
              (this.isEnabled = !1), this.isDragging && this.onUp();
            },
          },
          {
            key: "onDocUp",
            value: function (e) {
              this.onUp();
            },
          },
          {
            key: "animate",
            value: function () {
              var e = this;
              this.isDragging &&
                (this.positionDrag(),
                window.requestAnimationFrame(function () {
                  e.animate();
                }));
            },
          },
          {
            key: "positionDrag",
            value: function () {
              var e = "translate3d(".concat(this.dragPoint.x, "px, ").concat(this.dragPoint.y, "px, 0)");
              (this._root.style.transform = e), (this._root.style.webKitTransform = e);
            },
          },
          {
            key: "setLeftTop",
            value: function () {
              (this._root.style.left = this.position.x + "px"), (this._root.style.top = this.position.y + "px");
            },
          },
          {
            key: "onmousedown",
            value: function (e) {
              this.dragStart(e, e);
            },
          },
          {
            key: "onmousemove",
            value: function (e) {
              this.dragMove(e, e);
            },
          },
          {
            key: "onmouseup",
            value: function (e) {
              this.dragEnd(e, e);
            },
          },
          {
            key: "ontouchstart",
            value: function (e) {
              var t = e.changedTouches[0];
              this.dragStart(e, t),
                (this.touchIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier),
                e.preventDefault();
            },
          },
          {
            key: "ontouchmove",
            value: function (e) {
              var t = Zt(e.changedTouches, this.touchIdentifier);
              t && this.dragMove(e, t);
            },
          },
          {
            key: "ontouchend",
            value: function (e) {
              var t = Zt(e.changedTouches, this.touchIdentifier);
              t && this.dragEnd(e, t), e.preventDefault();
            },
          },
          {
            key: "ontouchcancel",
            value: function (e) {
              var t = Zt(e.changedTouches, this.touchIdentifier);
              t && this.dragCancel(e, t);
            },
          },
          {
            key: "dragStart",
            value: function (e, t) {
              if (this._root && !this.isDown && this.isEnabled) {
                (this.downPoint = t), (this.dragPoint.x = 0), (this.dragPoint.y = 0), this._getPosition();
                var i = Xt(this._root);
                (this.startPos.x = this.position.x),
                  (this.startPos.y = this.position.y),
                  (this.startPos.maxY = window.innerHeight - i.height),
                  (this.startPos.maxX = window.innerWidth - i.width),
                  this.setLeftTop(),
                  (this.isDown = !0),
                  this._bindPostStartEvents(e);
              }
            },
          },
          {
            key: "dragRealStart",
            value: function (e, t) {
              (this.isDragging = !0), this.animate(), this.emit(Jt, this.startPos);
            },
          },
          {
            key: "dragEnd",
            value: function (e, t) {
              this._root &&
                (this._unbindPostStartEvents(),
                this.isDragging && ((this._root.style.transform = ""), this.setLeftTop(), this.emit(Qt)),
                this.presetInfo());
            },
          },
          {
            key: "_dragPointerMove",
            value: function (e, t) {
              var i = { x: t.pageX - this.downPoint.pageX, y: t.pageY - this.downPoint.pageY };
              return !this.isDragging && this.hasDragStarted(i) && this.dragRealStart(e, t), i;
            },
          },
          {
            key: "dragMove",
            value: function (e, t) {
              if (((e = e || window.event), this.isDown)) {
                var i = this.startPos,
                  n = i.x,
                  o = i.y,
                  r = this._dragPointerMove(e, t),
                  s = r.x,
                  a = r.y;
                (s = this.checkContain("x", s, n)),
                  (a = this.checkContain("y", a, o)),
                  (this.position.x = n + s),
                  (this.position.y = o + a),
                  (this.dragPoint.x = s),
                  (this.dragPoint.y = a),
                  this.emit($t, this.position);
              }
            },
          },
          {
            key: "dragCancel",
            value: function (e, t) {
              this.dragEnd(e, t);
            },
          },
          {
            key: "presetInfo",
            value: function () {
              (this.isDragging = !1),
                (this.startPos = { x: 0, y: 0 }),
                (this.dragPoint = { x: 0, y: 0 }),
                (this.isDown = !1);
            },
          },
          {
            key: "destroy",
            value: function () {
              this._unbindStartEvent(),
                this._unbindPostStartEvents(),
                this.isDragging && this.dragEnd(),
                this.removeAllListeners(),
                (this._handlerDom = null);
            },
          },
          {
            key: "hasDragStarted",
            value: function (e) {
              return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
            },
          },
          {
            key: "checkContain",
            value: function (e, t, i) {
              return t + i < 0
                ? 0 - i
                : "x" === e && t + i > this.startPos.maxX
                ? this.startPos.maxX - i
                : "y" === e && t + i > this.startPos.maxY
                ? this.startPos.maxY - i
                : t;
            },
          },
          {
            key: "_getPosition",
            value: function () {
              var e = window.getComputedStyle(this._root),
                t = this._getPositionCoord(e.left, "width"),
                i = this._getPositionCoord(e.top, "height");
              (this.position.x = Number.isNaN(t) ? 0 : t),
                (this.position.y = Number.isNaN(i) ? 0 : i),
                this._addTransformPosition(e);
            },
          },
          {
            key: "_addTransformPosition",
            value: function (e) {
              var t = e.transform;
              if (0 === t.indexOf("matrix")) {
                var i = t.split(","),
                  n = 0 === t.indexOf("matrix3d") ? 12 : 4,
                  o = parseInt(i[n], 10),
                  r = parseInt(i[n + 1], 10);
                (this.position.x += o), (this.position.y += r);
              }
            },
          },
          {
            key: "_getPositionCoord",
            value: function (e, t) {
              if (-1 !== e.indexOf("%")) {
                var i = Xt(this._root.parentNode);
                return i ? (parseFloat(e) / 100) * i[t] : 0;
              }
              return parseInt(e, 10);
            },
          },
        ]),
        i
      );
    })(k),
    ii = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        n(this, i),
          s(u((o = t.call(this, e))), "onCancelClick", function (e) {
            o.exitMini(), (o.isClose = !0);
          }),
          s(u(o), "onCenterClick", function (e) {
            var t = u(o).player;
            t.paused ? t.play() : t.pause();
          }),
          s(u(o), "onScroll", function (e) {
            if (!((!window.scrollY && 0 !== window.scrollY) || Math.abs(window.scrollY - o.pos.scrollY) < 50)) {
              var t = parseInt(x.getCss(o.player.root, "height"));
              (t += o.config.scrollTop),
                (o.pos.scrollY = window.scrollY),
                window.scrollY > t + 5
                  ? !o.isMini && !o.isClose && o.getMini()
                  : window.scrollY <= t && (o.isMini && o.exitMini(), (o.isClose = !1));
            }
          }),
          (o.isMini = !1),
          (o.isClose = !1);
        var r = u(o).config;
        return (
          (o.pos = {
            left: r.left < 0 ? window.innerWidth - r.width - 20 : r.left,
            top: r.top < 0 ? window.innerHeight - r.height - 20 : r.top,
            height: o.config.height,
            width: o.config.width,
            scrollY: window.scrollY || 0,
          }),
          (o.lastStyle = null),
          o
        );
      }
      return (
        r(
          i,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                "boolean" == typeof e.player.config.mini && (e.config.isShowIcon = e.player.config.mini);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                this.initIcons(),
                  this.on(H, function () {
                    e.setAttr("data-state", "pause");
                  }),
                  this.on(j, function () {
                    e.setAttr("data-state", "play");
                  });
              },
            },
            {
              key: "onPluginsReady",
              value: function () {
                var e = this,
                  t = this.player;
                if (!this.config.disable) {
                  if (this.config.isShowIcon) {
                    var i = {
                      config: {
                        onClick: function () {
                          e.getMini();
                        },
                      },
                    };
                    t.controls.registerPlugin(qt, i, qt.pluginName);
                  }
                  var n = x.checkTouchSupport() ? "touchend" : "click";
                  this.bind(".mini-cancel-btn", n, this.onCancelClick),
                    this.bind(".play-icon", n, this.onCenterClick),
                    this.config.disableDrag || (this._draggabilly = new ti(this.player.root, { handle: this.root })),
                    this.config.isScrollSwitch && window.addEventListener("scroll", this.onScroll);
                }
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return { play: { icon: Ht, class: "xg-icon-play" }, pause: { icon: Bt, class: "xg-icon-pause" } };
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this.icons;
                this.appendChild(".play-icon", e.play), this.appendChild(".play-icon", e.pause);
              },
            },
            {
              key: "getMini",
              value: function () {
                var e = this;
                if (!this.isMini) {
                  var t = this.player,
                    i = this.playerConfig,
                    n = this.config.target || this.player.root;
                  (this.lastStyle = {}),
                    x.addClass(t.root, "xgplayer-mini"),
                    ["width", "height", "top", "left"].map(function (t) {
                      (e.lastStyle[t] = n.style[t]), (n.style[t] = "".concat(e.pos[t], "px"));
                    }),
                    i.fluid && (n.style["padding-top"] = ""),
                    this.emit(de, !0),
                    (t.isMini = this.isMini = !0);
                }
              },
            },
            {
              key: "exitMini",
              value: function () {
                var e = this;
                if (!this.isMini) return !1;
                var t = this.player,
                  i = this.playerConfig,
                  n = this.config.target || this.player.root;
                x.removeClass(t.root, "xgplayer-mini"),
                  this.lastStyle &&
                    Object.keys(this.lastStyle).map(function (t) {
                      n.style[t] = e.lastStyle[t];
                    }),
                  (this.lastStyle = null),
                  i.fluid &&
                    ((t.root.style.width = "100%"),
                    (t.root.style.height = "0"),
                    (t.root.style["padding-top"] = "".concat((100 * i.height) / i.width, "%"))),
                  this.emit(de, !1),
                  (this.isMini = t.isMini = !1);
              },
            },
            {
              key: "destroy",
              value: function () {
                window.removeEventListener("scroll", this.onScroll);
                var e = x.checkTouchSupport() ? "touchend" : "click";
                this.unbind(".mini-cancel-btn", e, this.onCancelClick),
                  this.unbind(".play-icon", e, this.onCenterClick),
                  this._draggabilly && this._draggabilly.destroy(),
                  (this._draggabilly = null),
                  this.exitMini();
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable)
                  return '\n      <xg-mini-layer class="xg-mini-layer">\n      <xg-mini-header class="xgplayer-mini-header">\n      '.concat(
                    Wt(this, "MINI_DRAG", this.playerConfig.isHideTips),
                    '\n      </xg-mini-header>\n      <div class="mini-cancel-btn">\n        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n          <path fill="#fff" fill-rule="evenodd" d="M3.99 3.49a1 1 0 0 1 1.414 0L10 8.085l4.596-4.595a1 1 0 1 1 1.414 1.414L11.414 9.5l4.596 4.596a1 1 0 0 1 .084 1.32l-.084.094a1 1 0 0 1-1.414 0L10 10.914 5.404 15.51a1 1 0 0 1-1.414-1.414L8.585 9.5 3.99 4.904a1 1 0 0 1-.084-1.32z"></path>\n        </svg>\n      </div>\n      <div class="play-icon">\n      </div>\n      </xg-mini-layer>',
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "miniscreen";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  index: 10,
                  disable: !1,
                  width: 320,
                  height: 180,
                  left: -1,
                  top: -1,
                  isShowIcon: !1,
                  isScrollSwitch: !1,
                  scrollTop: 0,
                  disableDrag: !1,
                };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    ni = { mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", mousemove: "onMouseMove" },
    oi = ["videoClick", "videoDbClick"],
    ri = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "onMouseMove", function (t) {
            var i = u(e),
              n = i.player,
              o = i.playerConfig;
            n.isActive || (n.focus({ autoHide: !o.closeDelayBlur }), !o.closeFocusVideoFocus && n.media.focus());
          }),
          s(u(e), "onMouseEnter", function (t) {
            var i = u(e),
              n = i.playerConfig,
              o = i.player;
            !n.closeFocusVideoFocus && o.media.focus(), n.closeDelayBlur ? o.focus({ autoHide: !1 }) : o.focus();
          }),
          s(u(e), "onMouseLeave", function (t) {
            var i = e.playerConfig,
              n = i.closePlayerBlur,
              o = i.leavePlayerTime,
              r = i.closeDelayBlur;
            n || r || (o ? e.player.focus({ autoHide: !0, delay: o }) : e.player.blur());
          }),
          s(u(e), "onVideoClick", function (t) {
            var i = u(e),
              n = i.player,
              o = i.playerConfig;
            (t.target && o.closeVideoClick) ||
              (t.target !== n.root &&
                t.target !== n.media &&
                t.target !== n.innerContainer &&
                t.target !== n.media.__canvas) ||
              (t.preventDefault(),
              o.closeVideoStopPropagation || t.stopPropagation(),
              e._clickCount++,
              e.clickTimer && (clearTimeout(e.clickTimer), (e.clickTimer = null)),
              (e.clickTimer = setTimeout(function () {
                e._clickCount &&
                  (e._clickCount--,
                  We(
                    u(e),
                    oi[0],
                    function (t, i) {
                      e.switchPlayPause(i.e);
                    },
                    { e: t, paused: n.paused },
                  ),
                  clearTimeout(e.clickTimer),
                  (e.clickTimer = null));
              }, 300)));
          }),
          s(u(e), "onVideoDblClick", function (t) {
            var i = u(e),
              n = i.player;
            i.playerConfig.closeVideoDblclick ||
              !t.target ||
              (t.target !== n.media && t.target !== n.media.__canvas) ||
              (e._clickCount < 2
                ? (e._clickCount = 0)
                : ((e._clickCount = 0),
                  e.clickTimer && (clearTimeout(e.clickTimer), (e.clickTimer = null)),
                  t.preventDefault(),
                  t.stopPropagation(),
                  We(
                    u(e),
                    oi[1],
                    function (t, i) {
                      e.emitUserAction(i.e, "switch_fullscreen", {
                        props: "fullscreen",
                        from: n.fullscreen,
                        to: !n.fullscreen,
                      }),
                        n.fullscreen ? n.exitFullscreen() : n.getFullscreen();
                    },
                    { e: t, fullscreen: n.fullscreen },
                  )));
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                (this._clickCount = 0),
                  oi.map(function (t) {
                    e.__hooks[t] = null;
                  }),
                  "mobile" === this.playerConfig.isMobileSimulateMode ||
                    ("mobile" === O.device && !O.os.isIpad) ||
                    this.initEvents();
              },
            },
            {
              key: "initEvents",
              value: function () {
                var e = this,
                  t = this.player,
                  i = t.video,
                  n = t.root,
                  o = this.playerConfig.enableContextmenu;
                n && n.addEventListener("click", this.onVideoClick, !1),
                  n && n.addEventListener("dblclick", this.onVideoDblClick, !1),
                  Object.keys(ni).map(function (t) {
                    n.addEventListener(t, e[ni[t]], !1);
                  }),
                  o && i && i.addEventListener("contextmenu", this.onContextmenu, !1);
              },
            },
            {
              key: "switchPlayPause",
              value: function (e) {
                var t = this.player;
                this.emitUserAction(e, "switch_play_pause", { props: "paused", from: t.paused, to: !t.paused }),
                  t.ended ? t.duration !== 1 / 0 && t.duration > 0 && t.replay() : t.paused ? t.play() : t.pause();
              },
            },
            {
              key: "onContextmenu",
              value: function (e) {
                (e = e || window.event).preventDefault && e.preventDefault(),
                  e.stopPropagation ? e.stopPropagation() : ((e.returnValue = !1), (e.cancelBubble = !0));
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this,
                  t = this.player,
                  i = t.video,
                  n = t.root;
                this.clickTimer && clearTimeout(this.clickTimer),
                  n.removeEventListener("click", this.onVideoClick, !1),
                  n.removeEventListener("dblclick", this.onVideoDblClick, !1),
                  i.removeEventListener("contextmenu", this.onContextmenu, !1),
                  Object.keys(ni).map(function (t) {
                    n.removeEventListener(t, e[ni[t]], !1);
                  });
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "pc";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {};
              },
            },
          ],
        ),
        i
      );
    })(ze),
    si = "press",
    ai = "pressend",
    li = "doubleclick",
    ci = "click",
    ui = "touchmove",
    hi = "touchstart",
    di = "touchend",
    fi = { start: "touchstart", end: "touchend", move: "touchmove", cancel: "touchcancel" },
    pi = { start: "mousedown", end: "mouseup", move: "mousemove", cancel: "mouseleave" };
  function gi(e) {
    return e && e.length > 0 ? e[e.length - 1] : null;
  }
  function vi(e) {
    var t = navigator.userAgent;
    /(?:iPhone|iPad)/.test(t) && e.cancelable && e.preventDefault();
  }
  var yi = (function () {
    function e(t) {
      var i = this,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { eventType: "touch" };
      n(this, e),
        (this._pos = { moving: !1, start: !1, x: 0, y: 0 }),
        (this.config = {
          pressDelay: 600,
          dbClickDelay: 200,
          disablePress: !1,
          disableDbClick: !1,
          miniStep: 2,
          needPreventDefault: !0,
        }),
        Object.keys(o).map(function (e) {
          i.config[e] = o[e];
        }),
        (this.root = t),
        (this.events = "mouse" === o.eventType ? pi : fi),
        (this.pressIntrvalId = null),
        (this.dbIntrvalId = null),
        (this.__handlers = {}),
        this._initEvent();
    }
    return (
      r(e, [
        {
          key: "_initEvent",
          value: function () {
            (this.onTouchStart = this.onTouchStart.bind(this)),
              (this.onTouchMove = this.onTouchMove.bind(this)),
              (this.onTouchEnd = this.onTouchEnd.bind(this)),
              (this.onTouchCancel = this.onTouchCancel.bind(this)),
              this.root.addEventListener(this.events.start, this.onTouchStart);
          },
        },
        {
          key: "__setPress",
          value: function (e) {
            var t = this,
              i = this.config;
            this.pressIntrvalId && this.__clearPress(),
              (this.pressIntrvalId = setTimeout(function () {
                t.trigger(si, e), (t._pos.press = !0), t.__clearPress();
              }, i.pressDelay));
          },
        },
        {
          key: "__clearPress",
          value: function () {
            window.clearTimeout(this.pressIntrvalId), (this.pressIntrvalId = null);
          },
        },
        {
          key: "__setDb",
          value: function (e) {
            var t = this,
              i = this.config;
            if (this.dbIntrvalId) return this.__clearDb(), void this.trigger(li, e);
            this.dbIntrvalId = setTimeout(function () {
              t.__clearDb(), t._pos.start || t._pos.press || t._pos.moving || t.trigger(ci, e);
            }, i.dbClickDelay);
          },
        },
        {
          key: "__clearDb",
          value: function () {
            clearTimeout(this.dbIntrvalId), (this.dbIntrvalId = null);
          },
        },
        {
          key: "on",
          value: function (e, t) {
            this.__handlers[e] || (this.__handlers[e] = []), this.__handlers[e].push(t);
          },
        },
        {
          key: "off",
          value: function (e, t) {
            if (this.__handlers[e]) {
              for (var i = this.__handlers[e], n = -1, o = 0; o < i.length; o++)
                if (i[o] === t) {
                  n = o;
                  break;
                }
              n >= 0 && this.__handlers[e].splice(n, 1);
            }
          },
        },
        {
          key: "trigger",
          value: function (e, t) {
            this.__handlers[e] &&
              this.__handlers[e].map(function (i) {
                try {
                  i(t);
                } catch (n) {
                  console.error("trigger>>:".concat(e), n);
                }
              });
          },
        },
        {
          key: "onTouchStart",
          value: function (e) {
            var t = this._pos,
              i = this.root;
            this.config.needPreventDefault && vi(e);
            var n = gi(e.touches);
            (t.x = n ? parseInt(n.pageX, 10) : e.pageX),
              (t.y = n ? parseInt(n.pageX, 10) : e.pageX),
              (t.start = !0),
              this.__setPress(e),
              i.addEventListener(this.events.end, this.onTouchEnd),
              i.addEventListener(this.events.cancel, this.onTouchCancel),
              i.addEventListener(this.events.move, this.onTouchMove),
              this.trigger(hi, e);
          },
        },
        {
          key: "onTouchCancel",
          value: function (e) {
            this.onTouchEnd(e);
          },
        },
        {
          key: "onTouchEnd",
          value: function (e) {
            var t = this._pos,
              i = this.root;
            this.config.needPreventDefault && vi(e),
              this.__clearPress(),
              i.removeEventListener(this.events.cancel, this.onTouchCancel),
              i.removeEventListener(this.events.end, this.onTouchEnd),
              i.removeEventListener(this.events.move, this.onTouchMove),
              (e.moving = t.moving),
              (e.press = t.press),
              t.press && this.trigger(ai, e),
              this.trigger(di, e),
              !t.press && !t.moving && this.__setDb(e),
              (t.press = !1),
              (t.start = !1),
              (t.moving = !1);
          },
        },
        {
          key: "onTouchMove",
          value: function (e) {
            var t = this._pos,
              i = this.config,
              n = gi(e.touches),
              o = n ? parseInt(n.pageX, 10) : e.pageX,
              r = n ? parseInt(n.pageY, 10) : e.pageX,
              s = o - t.x,
              a = r - t.y;
            (Math.abs(a) < i.miniStep && Math.abs(s) < i.miniStep) ||
              (this.__clearPress(),
              t.press && this.trigger(ai, e),
              (t.press = !1),
              (t.moving = !0),
              this.trigger(ui, e));
          },
        },
        {
          key: "destroy",
          value: function () {
            var e = this,
              t = { touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart" };
            Object.keys(t).map(function (i) {
              e.root.removeEventListener("touchend", e[t[i]]);
            });
          },
        },
      ]),
      e
    );
  })();
  function mi() {
    return new DOMParser().parseFromString(
      '<svg width="20" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink">\n  <path opacity="0.54"\n    d="M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z"\n    fill="white" />\n  <path transform="translate(5 0)" d="M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z" fill="white"/>\n</svg>',
      "image/svg+xml",
    ).firstChild;
  }
  var ki = "auto",
    bi = "seeking",
    Ci = "playbackrate",
    _i = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        return (
          n(this, i),
          s(u((o = t.call(this, e))), "onTouchStart", function (e) {
            var t = u(o),
              i = t.player,
              n = t.config,
              r = t.pos,
              s = t.playerConfig,
              a = o.getTouche(e);
            if (a && !n.disableGesture && o.duration > 0 && !i.ended) {
              (r.isStart = !0),
                x.checkIsFunction(s.disableSwipeHandler) && s.disableSwipeHandler(),
                (o.find(".xg-dur").innerHTML = x.format(o.duration));
              var l = o.root.getBoundingClientRect();
              90 === i.rotateDeg
                ? ((r.top = l.left), (r.left = l.top), (r.width = l.height), (r.height = l.width))
                : ((r.top = l.top), (r.left = l.left), (r.width = l.width), (r.height = l.height));
              var c = parseInt(a.pageX - r.left, 10),
                h = parseInt(a.pageY - r.top, 10);
              (r.x = 90 === i.rotateDeg ? h : c),
                (r.y = 90 === i.rotateDeg ? c : h),
                (r.scopeL = n.scopeL * r.width),
                (r.scopeR = (1 - n.scopeR) * r.width),
                (r.scopeM1 = (r.width * (1 - n.scopeM)) / 2),
                (r.scopeM2 = r.width - r.scopeM1);
            }
          }),
          s(u(o), "onTouchMove", function (e) {
            var t = o.getTouche(e),
              i = u(o),
              n = i.pos,
              r = i.config,
              s = i.player;
            if (t && !r.disableGesture && o.duration && n.isStart) {
              var a = r.miniMoveStep,
                l = r.hideControlsActive,
                c = parseInt(t.pageX - n.left, 10),
                h = parseInt(t.pageY - n.top, 10),
                d = 90 === s.rotateDeg ? h : c,
                f = 90 === s.rotateDeg ? c : h;
              if (Math.abs(d - n.x) > a || Math.abs(f - n.y) > a) {
                var p = d - n.x,
                  g = f - n.y,
                  v = n.scope;
                if (
                  (-1 === v &&
                    (0 === (v = o.checkScope(d, f, p, g, n)) &&
                      (l ? s.blur() : s.focus({ autoHide: !1 }),
                      !n.time && (n.time = parseInt(1e3 * s.currentTime, 10) + 1e3 * o.timeOffset)),
                    (n.scope = v)),
                  -1 === v || (v > 0 && !r.gestureY) || (0 === v && !r.gestureX))
                )
                  return;
                e.cancelable && e.preventDefault(), o.executeMove(p, g, v, n.width, n.height), (n.x = d), (n.y = f);
              }
            }
          }),
          s(u(o), "onTouchEnd", function (e) {
            var t = u(o),
              i = t.player,
              n = t.pos,
              r = t.playerConfig;
            if (n.isStart) {
              n.scope > -1 && e.cancelable && e.preventDefault();
              var s = o.config,
                a = s.disableGesture,
                l = s.gestureX;
              !a && l
                ? (o.endLastMove(n.scope),
                  setTimeout(function () {
                    i.getPlugin("progress") && i.getPlugin("progress").resetSeekState();
                  }, 10))
                : (n.time = 0),
                (n.scope = -1),
                o.resetPos(),
                x.checkIsFunction(r.enableSwipeHandler) && r.enableSwipeHandler(),
                o.changeAction(ki);
            }
          }),
          s(u(o), "onRootTouchMove", function (e) {
            !o.config.disableGesture &&
              o.config.gestureX &&
              o.checkIsRootTarget(e) &&
              (e.stopPropagation(), o.pos.isStart ? o.onTouchMove(e) : o.onTouchStart(e));
          }),
          s(u(o), "onRootTouchEnd", function (e) {
            o.pos.isStart && o.checkIsRootTarget(e) && (e.stopPropagation(), o.onTouchEnd(e));
          }),
          (o.pos = {
            isStart: !1,
            x: 0,
            y: 0,
            time: 0,
            volume: 0,
            rate: 1,
            light: 0,
            width: 0,
            height: 0,
            scopeL: 0,
            scopeR: 0,
            scopeM1: 0,
            scopeM2: 0,
            scope: -1,
          }),
          (o.timer = null),
          o
        );
      }
      return (
        r(
          i,
          [
            {
              key: "duration",
              get: function () {
                return this.playerConfig.customDuration || this.player.duration;
              },
            },
            {
              key: "timeOffset",
              get: function () {
                return this.playerConfig.timeOffset || 0;
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return { seekTipIcon: { icon: mi, class: "xg-seek-pre" } };
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this,
                  t = this.playerConfig,
                  i = this.config,
                  n = this.player;
                !0 === t.closeVideoDblclick && (i.closedbClick = !0),
                  this.resetPos(),
                  x.isUndefined(t.disableGesture) || (i.disableGesture = !!t.disableGesture),
                  this.appendChild(".xg-seek-icon", this.icons.seekTipIcon),
                  (this.xgMask = x.createDom("xg-mask", "", {}, "xgmask")),
                  n.root.appendChild(this.xgMask),
                  this.initCustomStyle(),
                  this.registerThumbnail();
                var o = this.domEventType;
                (this.touch = new yi(this.root, { eventType: o, needPreventDefault: !this.config.disableGesture })),
                  this.root.addEventListener("contextmenu", function (e) {
                    e.preventDefault();
                  }),
                  n.root.addEventListener("touchmove", this.onRootTouchMove, !0),
                  n.root.addEventListener("touchend", this.onRootTouchEnd, !0),
                  this.on(z, function () {
                    var t = e.player,
                      i = e.config;
                    1e3 * t.duration < i.moveDuration && (i.moveDuration = 1e3 * t.duration);
                  }),
                  this.on([q, F], function () {
                    var t = e.pos,
                      i = t.time;
                    !t.isStart && i > 0 && (e.pos.time = 0);
                  });
                var r = {
                  touchstart: "onTouchStart",
                  touchmove: "onTouchMove",
                  touchend: "onTouchEnd",
                  press: "onPress",
                  pressend: "onPressEnd",
                  click: "onClick",
                  doubleclick: "onDbClick",
                };
                if (
                  (Object.keys(r).map(function (t) {
                    e.touch.on(t, function (i) {
                      e[r[t]](i);
                    });
                  }),
                  !i.disableActive)
                ) {
                  var s = n.plugins.progress;
                  s &&
                    (s.addCallBack("dragmove", function (t) {
                      e.activeSeekNote(t.currentTime, t.forward);
                    }),
                    s.addCallBack("dragend", function () {
                      e.changeAction(ki);
                    }));
                }
              },
            },
            {
              key: "registerThumbnail",
              value: function () {
                var e = this.player.plugins.thumbnail;
                if (e && e.usable) {
                  this.thumbnail = e.createThumbnail(null, "mobile-thumbnail");
                  var t = this.find(".time-preview");
                  t.insertBefore(this.thumbnail, t.children[0]);
                }
              },
            },
            {
              key: "initCustomStyle",
              value: function () {
                var e = (this.playerConfig || {}).commonStyle,
                  t = e.playedColor,
                  i = e.progressColor;
                t && ((this.find(".xg-curbar").style.backgroundColor = t), (this.find(".xg-cur").style.color = t)),
                  i && ((this.find(".xg-bar").style.backgroundColor = i), (this.find(".time-preview").style.color = i)),
                  this.config.disableTimeProgress && x.addClass(this.find(".xg-timebar"), "hide");
              },
            },
            {
              key: "resetPos",
              value: function () {
                var e = this;
                this.pos
                  ? ((this.pos.isStart = !1),
                    (this.pos.scope = -1),
                    ["x", "y", "width", "height", "scopeL", "scopeR", "scopeM1", "scopeM2"].map(function (t) {
                      e.pos[t] = 0;
                    }))
                  : (this.pos = {
                      isStart: !1,
                      x: 0,
                      y: 0,
                      volume: 0,
                      rate: 1,
                      light: 0,
                      width: 0,
                      height: 0,
                      scopeL: 0,
                      scopeR: 0,
                      scopeM1: 0,
                      scopeM2: 0,
                      scope: -1,
                      time: 0,
                    });
              },
            },
            {
              key: "changeAction",
              value: function (e) {
                var t = this.player;
                this.root.setAttribute("data-xg-action", e);
                var i = t.plugins.start;
                i && i.recover();
              },
            },
            {
              key: "getTouche",
              value: function (e) {
                this.player.rotateDeg;
                var t = e.touches && e.touches.length > 0 ? e.touches[e.touches.length - 1] : e;
                return { pageX: t.pageX, pageY: t.pageY };
              },
            },
            {
              key: "checkScope",
              value: function (e, t, i, n, o) {
                var r = o.width,
                  s = -1;
                if (e < 0 || e > r) return s;
                var a = 0 === n ? Math.abs(i) : Math.abs(i / n);
                return (
                  Math.abs(i) > 0 && a >= 1.73 && e > o.scopeM1 && e < o.scopeM2
                    ? (s = 0)
                    : (0 === Math.abs(i) || a <= 0.57) && (s = e < o.scopeL ? 1 : e > o.scopeR ? 2 : 3),
                  s
                );
              },
            },
            {
              key: "executeMove",
              value: function (e, t, i, n, o) {
                switch (i) {
                  case 0:
                    this.updateTime((e / n) * this.config.scopeM);
                    break;
                  case 1:
                    this.updateBrightness(t / o);
                    break;
                  case 2:
                    O.os.isIos || this.updateVolume(t / o);
                }
              },
            },
            {
              key: "endLastMove",
              value: function (e) {
                var t = this,
                  i = this.pos,
                  n = this.player,
                  o = this.config,
                  r = (i.time - this.timeOffset) / 1e3;
                if (0 === e)
                  n.seek(Number(r).toFixed(1)),
                    o.hideControlsEnd ? n.blur() : n.focus(),
                    (this.timer = setTimeout(function () {
                      t.pos.time = 0;
                    }, 500));
                this.changeAction(ki);
              },
            },
            {
              key: "checkIsRootTarget",
              value: function (e) {
                var t = this.player.plugins || {};
                return (
                  (!t.progress || !t.progress.root.contains(e.target)) &&
                  ((t.start && t.start.root.contains(e.target)) || (t.controls && t.controls.root.contains(e.target)))
                );
              },
            },
            {
              key: "sendUseAction",
              value: function (e) {
                var t = this.player.paused;
                this.emitUserAction(e, "switch_play_pause", { prop: "paused", from: t, to: !t });
              },
            },
            {
              key: "onClick",
              value: function (e) {
                var t = this.player,
                  i = this.config,
                  n = this.playerConfig;
                t.state < pt
                  ? n.closeVideoClick || (this.sendUseAction(x.createEvent("click")), t.play())
                  : !i.closedbClick || n.closeVideoClick
                  ? t.isActive
                    ? t.blur()
                    : t.focus()
                  : n.closeVideoClick ||
                    ((t.isActive || i.focusVideoClick) &&
                      (this.emitUserAction("click", "switch_play_pause"), this.switchPlayPause()),
                    t.focus());
              },
            },
            {
              key: "onDbClick",
              value: function (e) {
                var t = this.config,
                  i = this.player;
                !t.closedbClick &&
                  i.state >= pt &&
                  (this.sendUseAction(x.createEvent("dblclick")), this.switchPlayPause());
              },
            },
            {
              key: "onPress",
              value: function (e) {
                var t = this.pos,
                  i = this.config,
                  n = this.player;
                i.disablePress ||
                  ((t.rate = this.player.playbackRate),
                  this.emitUserAction("press", "change_rate", {
                    prop: "playbackRate",
                    from: n.playbackRate,
                    to: i.pressRate,
                  }),
                  (n.playbackRate = i.pressRate),
                  this.changeAction(Ci));
              },
            },
            {
              key: "onPressEnd",
              value: function (e) {
                var t = this.pos,
                  i = this.config,
                  n = this.player;
                i.disablePress ||
                  (this.emitUserAction("pressend", "change_rate", {
                    prop: "playbackRate",
                    from: n.playbackRate,
                    to: t.rate,
                  }),
                  (n.playbackRate = t.rate),
                  (t.rate = 1),
                  this.changeAction(ki));
              },
            },
            {
              key: "updateTime",
              value: function (e) {
                var t = this.player,
                  i = this.config,
                  n = this.player.duration;
                e = Number(e.toFixed(4));
                var o = parseInt(e * i.moveDuration, 10) + this.timeOffset;
                (o = (o += this.pos.time) < 0 ? 0 : o > 1e3 * n ? 1e3 * n - 200 : o),
                  t.getPlugin("time") && t.getPlugin("time").updateTime(o / 1e3),
                  t.getPlugin("progress") && t.getPlugin("progress").updatePercent(o / 1e3 / this.duration, !0),
                  this.activeSeekNote(o / 1e3, e > 0),
                  i.isTouchingSeek && t.seek(Number((o - this.timeOffset) / 1e3).toFixed(1)),
                  (this.pos.time = o);
              },
            },
            {
              key: "updateVolume",
              value: function (e) {
                this.player.rotateDeg && (e = -e);
                var t = this.player,
                  i = this.pos;
                if (((e = parseInt(100 * e, 10)), (i.volume += e), !(Math.abs(i.volume) < 10))) {
                  var n = parseInt(10 * t.volume, 10) - parseInt(i.volume / 10, 10);
                  (n = n > 10 ? 10 : n < 1 ? 0 : n), (t.volume = n / 10), (i.volume = 0);
                }
              },
            },
            {
              key: "updateBrightness",
              value: function (e) {
                this.player.rotateDeg && (e = -e);
                var t = this.pos,
                  i = this.config,
                  n = this.xgMask,
                  o = t.light + 0.8 * e;
                (o = o > i.maxDarkness ? i.maxDarkness : o < 0 ? 0 : o),
                  n && (n.style.backgroundColor = "rgba(0,0,0,".concat(o, ")")),
                  (t.light = o);
              },
            },
            {
              key: "activeSeekNote",
              value: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  i = this.player,
                  n = this.config,
                  o = !(this.duration !== 1 / 0 && this.duration > 0);
                if (e && "number" == typeof e && !o && !n.disableActive) {
                  e < 0 ? (e = 0) : e > i.duration && (e = i.duration - 0.2), this.changeAction(bi);
                  var r = i.plugins.start;
                  r && r.focusHide(),
                    (this.find(".xg-dur").innerHTML = x.format(this.duration)),
                    (this.find(".xg-cur").innerHTML = x.format(e)),
                    (this.find(".xg-curbar").style.width = "".concat((e / this.duration) * 100, "%")),
                    t
                      ? x.removeClass(this.find(".xg-seek-show"), "xg-back")
                      : x.addClass(this.find(".xg-seek-show"), "xg-back"),
                    this.updateThumbnails(e);
                }
              },
            },
            {
              key: "updateThumbnails",
              value: function (e) {
                var t = this.player.plugins.thumbnail;
                t && t.usable && this.thumbnail && t.update(this.thumbnail, e, 160, 90);
              },
            },
            {
              key: "switchPlayPause",
              value: function () {
                var e = this.player;
                if (e.state < dt) return !1;
                e.ended || (e.paused ? e.play() : e.pause());
              },
            },
            {
              key: "disableGesture",
              value: function () {
                this.config.disableGesture = !1;
              },
            },
            {
              key: "enableGesture",
              value: function () {
                this.config.disableGesture = !0;
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this.player;
                this.timer && clearTimeout(this.timer),
                  (this.thumbnail = null),
                  e.root.removeChild(this.xgMask),
                  (this.xgMask = null),
                  this.touch && this.touch.destroy(),
                  (this.touch = null),
                  e.root.removeEventListener("touchmove", this.onRootTouchMove, !0),
                  e.root.removeEventListener("touchend", this.onRootTouchEnd, !0);
              },
            },
            {
              key: "render",
              value: function () {
                var e = "normal" !== this.config.gradient ? "gradient ".concat(this.config.gradient) : "gradient";
                return '\n     <xg-trigger class="trigger">\n     <div class="'
                  .concat(e, '"></div>\n        <div class="time-preview">\n            <div class="xg-seek-show ')
                  .concat(
                    this.config.disableSeekIcon ? " hide-seek-icon" : "",
                    '">\n              <i class="xg-seek-icon"></i>\n              <span class="xg-cur">00:00</span>\n              <span>/</span>\n              <span class="xg-dur">00:00</span>\n            </div>\n              <div class="xg-bar xg-timebar">\n                <div class="xg-curbar"></div>\n              </div>\n        </div>\n        <div class="xg-playbackrate xg-top-note">\n            <span><i>',
                  )
                  .concat(this.config.pressRate, "X</i>")
                  .concat(this.i18n.FORWARD, "</span>\n        </div>\n     </xg-trigger>\n    ");
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "mobile";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  index: 0,
                  disableGesture: !1,
                  gestureX: !0,
                  gestureY: !0,
                  gradient: "normal",
                  isTouchingSeek: !1,
                  miniMoveStep: 5,
                  miniYPer: 5,
                  scopeL: 0.25,
                  scopeR: 0.25,
                  scopeM: 0.9,
                  pressRate: 2,
                  darkness: !0,
                  maxDarkness: 0.8,
                  disableActive: !1,
                  disableTimeProgress: !1,
                  hideControlsActive: !1,
                  hideControlsEnd: !1,
                  moveDuration: 36e4,
                  closedbClick: !1,
                  disablePress: !0,
                  disableSeekIcon: !1,
                  focusVideoClick: !1,
                };
              },
            },
          ],
        ),
        i
      );
    })(nt);
  function wi(e) {
    e.preventDefault(), (e.returnValue = !1);
  }
  function Ti(e) {
    var t = e.tagName;
    return !("INPUT" !== t && "TEXTAREA" !== t && !e.isContentEditable);
  }
  var xi = (function (e) {
    a(o, e);
    var i = d(o);
    function o() {
      var e;
      n(this, o);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        s(u((e = i.call.apply(i, [this].concat(r)))), "onBodyKeyDown", function (t) {
          var i = t || window.event;
          if (
            e.player &&
            (e.player.isUserActive || e.config.isIgnoreUserActive) &&
            !(
              e.config.disable ||
              e.config.disableBodyTrigger ||
              !e.checkIsVisible() ||
              i.metaKey ||
              i.altKey ||
              i.ctrlKey
            )
          ) {
            var n = i.keyCode;
            return (
              !((i.target !== document.body && (!e.config.isGlobalTrigger || Ti(i.target))) || !e.checkCode(n, !0)) &&
              (wi(i), e.handleKeyCode(n, t), !1)
            );
          }
        }),
        s(u(e), "onKeydown", function (t) {
          var i = t || window.event;
          if (
            !(e.config.disable || e.config.disableRootTrigger || i.metaKey || i.altKey || i.ctrlKey) &&
            (e.player.isUserActive || e.config.isIgnoreUserActive) &&
            (e.player.isUserActive || e.config.isIgnoreUserActive)
          ) {
            if (
              !i ||
              (37 !== i.keyCode && !e.checkCode(i.keyCode)) ||
              (i.target !== e.player.root && i.target !== e.player.video && i.target !== e.player.controls.el)
            )
              return !0;
            wi(i), e.handleKeyCode(i.keyCode, t);
          }
        }),
        e
      );
    }
    return (
      r(
        o,
        [
          {
            key: "mergekeyCodeMap",
            value: function () {
              var e = this,
                t = this.config.keyCodeMap;
              t &&
                Object.keys(t).map(function (i) {
                  e.keyCodeMap[i]
                    ? ["keyCode", "action", "disable", "isBodyTarget"].map(function (n) {
                        t[i][n] && (e.keyCodeMap[i][n] = t[i][n]);
                      })
                    : (e.keyCodeMap[i] = t[i]);
                });
            },
          },
          {
            key: "afterCreate",
            value: function () {
              this.config.disable = !this.playerConfig.keyShortcut;
              var e =
                "function" == typeof this.config.seekStep ? this.config.seekStep(this.player) : this.config.seekStep;
              e && "number" == typeof e && (this.seekStep = e),
                (this.keyCodeMap = {
                  space: { keyCode: 32, action: "playPause", disable: !1, noBodyTarget: !1 },
                  up: { keyCode: 38, action: "upVolume", disable: !1, noBodyTarget: !0 },
                  down: { keyCode: 40, action: "downVolume", disable: !1, noBodyTarget: !0 },
                  left: { keyCode: 37, action: "seekBack", disable: !1 },
                  right: { keyCode: 39, action: "seek", disable: !1 },
                  esc: { keyCode: 27, action: "exitFullscreen", disable: !1 },
                }),
                this.mergekeyCodeMap(),
                this.player.root.addEventListener("keydown", this.onKeydown),
                document.addEventListener("keydown", this.onBodyKeyDown);
            },
          },
          {
            key: "checkIsVisible",
            value: function () {
              if (!this.config.checkVisible) return !0;
              var e = this.player.root.getBoundingClientRect(),
                t = e.height,
                i = e.top,
                n = e.bottom,
                o = window.innerHeight;
              return !((i < 0 && i < 0 - 0.9 * t) || (n > 0 && n - o > 0.9 * t));
            },
          },
          {
            key: "checkCode",
            value: function (e, t) {
              var i = this,
                n = !1;
              return (
                Object.keys(this.keyCodeMap).map(function (o) {
                  i.keyCodeMap[o] &&
                    e === i.keyCodeMap[o].keyCode &&
                    !i.keyCodeMap[o].disable &&
                    (n = !t || (t && !i.keyCodeMap[o].noBodyTarget));
                }),
                n
              );
            },
          },
          {
            key: "downVolume",
            value: function (e) {
              var t = this.player,
                i = parseFloat((t.volume - 0.1).toFixed(1)),
                n = { volume: { from: t.volume, to: i } };
              this.emitUserAction(e, "change_volume", { props: n }), (t.volume = i >= 0 ? i : 0);
            },
          },
          {
            key: "upVolume",
            value: function (e) {
              var t = this.player,
                i = parseFloat((t.volume + 0.1).toFixed(1)),
                n = { volume: { from: t.volume, to: i } };
              this.emitUserAction(e, "change_volume", { props: n }), (t.volume = i <= 1 ? i : 1);
            },
          },
          {
            key: "seek",
            value: function (e) {
              var t = this.player,
                i = t.currentTime,
                n = t.duration,
                o = i,
                r = { currentTime: { from: i, to: (o = i + this.seekStep <= n ? i + this.seekStep : n - 1) } };
              this.emitUserAction(e, "seek", { props: r }), (this.player.currentTime = o);
            },
          },
          {
            key: "seekBack",
            value: function (e) {
              var t = this.player.currentTime,
                i = 0;
              t - this.seekStep >= 0 && (i = t - this.seekStep);
              var n = { currentTime: { from: t, to: i } };
              this.emitUserAction(e, "seek", { props: n }), (this.player.currentTime = i);
            },
          },
          {
            key: "playPause",
            value: function (e) {
              var t = this.player;
              t && (this.emitUserAction(e, "switch_play_pause"), t.paused ? t.play() : t.pause());
            },
          },
          {
            key: "exitFullscreen",
            value: function (e) {
              var t = this.player,
                i = t.fullscreen,
                n = t.cssfullscreen;
              i &&
                (this.emitUserAction("keyup", "switch_fullscreen", { prop: "fullscreen", from: i, to: !i }),
                t.exitFullscreen()),
                n &&
                  (this.emitUserAction("keyup", "switch_css_fullscreen", { prop: "cssfullscreen", from: n, to: !n }),
                  t.exitCssFullscreen());
            },
          },
          {
            key: "handleKeyCode",
            value: function (e, i) {
              var n = this;
              Object.keys(this.keyCodeMap).map(function (o) {
                var r = n.keyCodeMap[o],
                  s = r.action,
                  a = r.keyCode,
                  l = r.disable;
                a !== e ||
                  l ||
                  ("function" == typeof s
                    ? s(i, n.player)
                    : "string" == typeof s && "function" == typeof n[s] && n[s](i, n.player),
                  n.emit(be, t({ key: o, target: i.target }, n.keyCodeMap[o])));
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              this.player.root.removeEventListener("keydown", this.onKeydown),
                document.removeEventListener("keydown", this.onBodyKeyDown);
            },
          },
          {
            key: "disable",
            value: function () {
              this.config.disable = !0;
            },
          },
          {
            key: "enable",
            value: function () {
              this.config.disable = !1;
            },
          },
        ],
        [
          {
            key: "pluginName",
            get: function () {
              return "keyboard";
            },
          },
          {
            key: "defaultConfig",
            get: function () {
              return {
                seekStep: 10,
                checkVisible: !0,
                disableBodyTrigger: !1,
                disableRootTrigger: !1,
                isGlobalTrigger: !1,
                keyCodeMap: {},
                disable: !1,
                isIgnoreUserActive: !1,
              };
            },
          },
        ],
      ),
      o
    );
  })(ze);
  function Ei() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-5 -5 110 110">\n  <path d="M100,50A50,50,0,1,1,50,0" stroke-width="5" stroke="#ddd" stroke-dasharray="236" fill="none"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var Si = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "registerIcons",
              value: function () {
                return { loadingIcon: Ei };
              },
            },
            {
              key: "afterCreate",
              value: function () {
                this.appendChild("xg-loading-inner", this.icons.loadingIcon);
              },
            },
            {
              key: "render",
              value: function () {
                return '\n    <xg-loading class="xgplayer-loading">\n      <xg-loading-inner></xg-loading-inner>\n    </xg-loading>';
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "loading";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { position: Qe.ROOT };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    Pi = [
      { tag: "xg-cache", className: "xgplayer-progress-cache", styleKey: "cachedColor" },
      { tag: "xg-played", className: "xgplayer-progress-played", styleKey: "playedColor" },
    ],
    Li = (function () {
      function e(t) {
        n(this, e),
          (this.fragments = t.fragments || []),
          0 === this.fragments.length && this.fragments.push({ percent: 1 }),
          (this._callBack = t.actionCallback),
          (this.fragConfig = {
            fragFocusClass: t.fragFocusClass || "inner-focus-point",
            fragAutoFocus: !!t.fragAutoFocus,
            fragClass: t.fragClass || "",
          }),
          (this.style = t.style || { playedColor: "", cachedColor: "", progressColor: "" }),
          (this.duration = 0),
          (this.cachedIndex = 0),
          (this.playedIndex = 0),
          (this.focusIndex = -1);
      }
      return (
        r(e, [
          {
            key: "updateDuration",
            value: function (e) {
              var t = this;
              this.duration = e;
              var i = 0,
                n = this.fragments;
              this.fragments = n.map(function (e) {
                return (
                  (e.start = parseInt(i, 10)),
                  (e.end = parseInt(i + e.percent * t.duration, 10)),
                  (e.duration = parseInt(e.percent * t.duration, 10)),
                  (i += e.percent * t.duration),
                  e
                );
              });
            },
          },
          {
            key: "updateProgress",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "played",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { newIndex: 0, curIndex: 0, millisecond: 0 },
                i = this.progressList,
                n = this.fragments;
              if (!(i.length < 1)) {
                var o = t.newIndex,
                  r = t.curIndex,
                  s = t.millisecond;
                o !== r &&
                  i.map(function (t, i) {
                    i < o ? (t[e].style.width = "100%") : i > o && (t[e].style.width = 0);
                  });
                var a = n[o],
                  l = 0 === s ? 0 : (s - a.start) / a.duration;
                i[o][e].style.width = l < 0 ? 0 : "".concat(100 * l, "%");
              }
            },
          },
          {
            key: "updateFocus",
            value: function (e) {
              if (this.fragConfig.fragAutoFocus && !(this.fragments.length < 2))
                if (e) {
                  var t = this.findIndex(1e3 * e.currentTime, this.focusIndex);
                  if (t >= 0 && t !== this.focusIndex) {
                    this.focusIndex > -1 && this.unHightLight(this.focusIndex), this.setHightLight(t);
                    var i = { index: t, preIndex: this.focusIndex, fragment: this.fragments[this.focusIndex] };
                    (this.focusIndex = t), this._callBack && this._callBack(i);
                  }
                } else if (this.focusIndex > -1) {
                  this.unHightLight(this.focusIndex);
                  var n = { index: -1, preIndex: this.focusIndex, fragment: null };
                  this._callBack && this._callBack(n), (this.focusIndex = -1);
                }
            },
          },
          {
            key: "update",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { cached: 0, played: 0 },
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (!this.duration || parseInt(1e3 * t, 10) !== this.duration) {
                if (!t && 0 !== t) return;
                this.updateDuration(parseInt(1e3 * t, 10));
              }
              var i = this.playedIndex,
                n = this.cachedIndex;
              if ("Undefined" !== x.typeOf(e.played)) {
                var o = this.findIndex(1e3 * e.played, i);
                if (o < 0) return;
                this.updateProgress("played", { newIndex: o, curIndex: i, millisecond: parseInt(1e3 * e.played, 10) }),
                  (this.playedIndex = o);
              }
              if ("Undefined" !== x.typeOf(e.cached)) {
                var r = this.findIndex(1e3 * e.cached, n);
                if (r < 0) return;
                this.updateProgress("cached", { newIndex: r, curIndex: n, millisecond: parseInt(1e3 * e.cached, 10) }),
                  (this.cachedIndex = r);
              }
            },
          },
          {
            key: "findIndex",
            value: function (e, t) {
              var i = this.fragments;
              if (!i || 0 === i.length) return -1;
              if (1 === i.length) return 0;
              if (t > -1 && t < i.length && e > i[t].start && e < i[t].end) return t;
              if (e > i[i.length - 1].start) return i.length - 1;
              for (var n = 0; n < i.length; n++)
                if (e > i[n].start && e <= i[n].end) {
                  t = n;
                  break;
                }
              return t;
            },
          },
          {
            key: "findHightLight",
            value: function () {
              for (var e = this.root.children, t = 0; t < e.length; t++)
                if (x.hasClass(e[t], this.fragConfig.fragFocusClass))
                  return { dom: e[t], pos: e[t].getBoundingClientRect() };
            },
          },
          {
            key: "findFragment",
            value: function (e) {
              var t = this.root.children;
              return e < 0 || e >= t.length ? null : { dom: t[e], pos: t[e].getBoundingClientRect() };
            },
          },
          {
            key: "unHightLight",
            value: function () {
              for (var e = this.root.children, t = 0; t < e.length; t++)
                x.removeClass(e[t], this.fragConfig.fragFocusClass);
            },
          },
          {
            key: "setHightLight",
            value: function (e) {
              var t = this.root.children;
              if (e < t.length)
                return (
                  x.addClass(t[e], this.fragConfig.fragFocusClass), { dom: t[e], pos: t[e].getBoundingClientRect() }
                );
            },
          },
          {
            key: "destroy",
            value: function () {
              (this.progressList = null), (this.fragments = null), (this.root.innerHTML = "");
            },
          },
          {
            key: "reset",
            value: function (e) {
              var t = this;
              if (
                (Object.keys(this.fragConfig).forEach(function (i) {
                  void 0 !== e[i] && (t.fragConfig[i] = e[i]);
                }),
                e.fragments)
              ) {
                if (
                  ((this.fragments = 0 === e.fragments.length ? [{ percent: 1 }] : e.fragments),
                  this.updateDuration(this.duration),
                  (this.playedIndex = 0),
                  (this.cachedIndex = 0),
                  this.root)
                )
                  for (var i = this.root.children; i.length > 0; ) this.root.removeChild(i[0]);
                this.render();
              }
            },
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this.style.progressColor;
              if ((this.root || (this.root = x.createDom("xg-inners", "", {}, "progress-list")), this.fragments)) {
                var i = this.fragConfig,
                  n = i.fragClass,
                  o = i.fragFocusClass;
                this.progressList = this.fragments.map(function (i) {
                  var r = x.createDom(
                    "xg-inner",
                    "",
                    { style: t ? "background:".concat(t, "; flex: ").concat(i.percent) : "flex: ".concat(i.percent) },
                    "".concat(i.isFocus ? o : "", " xgplayer-progress-inner ").concat(n),
                  );
                  return (
                    e.root.appendChild(r),
                    Pi.forEach(function (t) {
                      r.appendChild(
                        x.createDom(
                          t.tag,
                          "",
                          { style: t.styleKey ? "background: ".concat(e.style[t.styleKey], "; width:0;") : "width:0;" },
                          t.className,
                        ),
                      );
                    }),
                    { cached: r.children[0], played: r.children[1] }
                  );
                });
              }
              return this.root;
            },
          },
        ]),
        e
      );
    })(),
    Ii = { POINT: "inner-focus-point", HIGHLIGHT: "inner-focus-highlight" },
    Ai = (function (e) {
      a(l, e);
      var o = d(l);
      function l(e) {
        var t;
        return (
          n(this, l),
          s(u((t = o.call(this, e))), "onMoveOnly", function (e, i) {
            var n = u(t),
              o = n.pos,
              r = n.config,
              s = n.player,
              a = i;
            if (e) {
              x.event(e);
              var l = x.getEventPos(e, s.zoom),
                c = 90 === s.rotateDeg ? l.clientY : l.clientX;
              if (o.moving && Math.abs(o.x - c) < r.miniMoveStep) return;
              (o.moving = !0), (o.x = c), (a = t.computeTime(e, c));
            }
            t.triggerCallbacks("dragmove", a, e), t._updateInnerFocus(a);
          }),
          s(u(t), "onBodyClick", function (e) {
            t.pos.isLocked && ((t.pos.isLocked = !1), e.preventDefault(), e.stopPropagation());
          }),
          s(u(t), "_mouseDownHandler", function (e, i) {
            (t._state.time = i.currentTime), t.updateWidth(i.currentTime, i.percent, 0), t._updateInnerFocus(i);
          }),
          s(u(t), "_mouseUpHandler", function (e, i) {
            u(t).pos.moving && t.updateWidth(i.currentTime, i.percent, 2);
          }),
          s(u(t), "_mouseMoveHandler", function (e, i) {
            var n = u(t),
              o = n._state,
              r = n.pos,
              s = n.config,
              a = n.player;
            o.time < i.currentTime ? (i.forward = !0) : (i.forward = !1),
              (o.time = i.currentTime),
              r.isDown &&
                !r.moving &&
                ((r.moving = !0),
                s.isPauseMoving && a.pause(),
                t.triggerCallbacks("dragstart", i, e),
                t.emitUserAction("drag", "dragstart", i)),
              t.updateWidth(i.currentTime, i.percent, 1),
              t.triggerCallbacks("dragmove", i, e),
              t._updateInnerFocus(i);
          }),
          s(u(t), "onMouseDown", function (e) {
            var i = u(t),
              n = i._state,
              o = i.player,
              r = i.pos,
              s = i.config,
              a = i.playerConfig,
              l = x.getEventPos(e, o.zoom),
              c = 90 === o.rotateDeg ? l.clientY : l.clientX;
            if (!(o.isMini || s.closeMoveSeek || (!a.allowSeekAfterEnded && o.ended))) {
              e.stopPropagation(),
                t.focus(),
                x.checkIsFunction(a.disableSwipeHandler) && a.disableSwipeHandler(),
                x.checkIsFunction(s.onMoveStart) && s.onMoveStart(),
                x.event(e),
                (r.x = c),
                (r.isDown = !0),
                (r.moving = !1),
                (n.prePlayTime = o.currentTime),
                o.focus({ autoHide: !1 }),
                (t.isProgressMoving = !0),
                x.addClass(t.progressBtn, "active");
              var h = t.computeTime(e, c);
              return (
                (h.prePlayTime = n.prePlayTime),
                t._mouseDownHandlerHook(e, h),
                "touchstart" === e.type
                  ? (t.root.addEventListener("touchmove", t.onMouseMove),
                    t.root.addEventListener("touchend", t.onMouseUp))
                  : (t.unbind("mousemove", t.onMoveOnly),
                    document.addEventListener("mousemove", t.onMouseMove, !1),
                    document.addEventListener("mouseup", t.onMouseUp, !1)),
                !0
              );
            }
          }),
          s(u(t), "onMouseUp", function (e) {
            var i = u(t),
              n = i.player,
              o = i.config,
              r = i.pos,
              s = i.playerConfig,
              a = i._state;
            e.stopPropagation(),
              e.preventDefault(),
              x.checkIsFunction(s.enableSwipeHandler) && s.enableSwipeHandler(),
              x.checkIsFunction(o.onMoveEnd) && o.onMoveEnd(),
              x.event(e),
              x.removeClass(t.progressBtn, "active");
            var l = t.computeTime(e, r.x);
            (l.prePlayTime = a.prePlayTime),
              r.moving
                ? (t.triggerCallbacks("dragend", l, e), t.emitUserAction("drag", "dragend", l))
                : (t.triggerCallbacks("click", l, e), t.emitUserAction("click", "click", l)),
              t._mouseUpHandlerHook(e, l),
              (r.moving = !1),
              (r.isDown = !1),
              (r.x = 0),
              (r.y = 0),
              (r.isLocked = !0),
              (a.prePlayTime = 0),
              (a.time = 0),
              "touchend" === e.type
                ? (t.root.removeEventListener("touchmove", t.onMouseMove),
                  t.root.removeEventListener("touchend", t.onMouseUp),
                  t.blur())
                : (document.removeEventListener("mousemove", t.onMouseMove, !1),
                  document.removeEventListener("mouseup", t.onMouseUp, !1),
                  r.isEnter
                    ? "mobile" !== s.isMobileSimulateMode && t.bind("mousemove", t.onMoveOnly)
                    : t.onMouseLeave(e)),
              x.setTimeout(
                u(t),
                function () {
                  t.resetSeekState();
                },
                10,
              ),
              n.focus();
          }),
          s(u(t), "onMouseMove", function (e) {
            var i = u(t),
              n = i._state,
              o = i.pos,
              r = i.player,
              s = i.config;
            x.checkTouchSupport() && e.preventDefault(), x.event(e);
            var a = x.getEventPos(e, r.zoom),
              l = 90 === r.rotateDeg ? a.clientY : a.clientX,
              c = Math.abs(o.x - l);
            if (!((o.moving && c < s.miniMoveStep) || (!o.moving && c < s.miniStartStep))) {
              o.x = l;
              var h = t.computeTime(e, l);
              (h.prePlayTime = n.prePlayTime), t._mouseMoveHandlerHook(e, h);
            }
          }),
          s(u(t), "onMouseOut", function (e) {
            t.triggerCallbacks("mouseout", null, e);
          }),
          s(u(t), "onMouseOver", function (e) {
            t.triggerCallbacks("mouseover", null, e);
          }),
          s(u(t), "onMouseEnter", function (e) {
            var i = u(t),
              n = i.player,
              o = i.pos;
            if (!(o.isDown || o.isEnter || n.isMini || (!n.config.allowSeekAfterEnded && n.ended))) {
              (o.isEnter = !0), t.bind("mousemove", t.onMoveOnly), t.bind("mouseleave", t.onMouseLeave), x.event(e);
              var r = x.getEventPos(e, n.zoom),
                s = 90 === n.rotateDeg ? r.clientY : r.clientX,
                a = t.computeTime(e, s);
              t.triggerCallbacks("mouseenter", a, e), t.focus();
            }
          }),
          s(u(t), "onMouseLeave", function (e) {
            t.triggerCallbacks("mouseleave", null, e), t.unlock(), t._updateInnerFocus(null);
          }),
          s(u(t), "onVideoResize", function () {
            var e = t.pos,
              i = e.x,
              n = e.isDown;
            if (e.isEnter && !n) {
              var o = t.computeTime(null, i);
              t.onMoveOnly(null, o);
            }
          }),
          (t.useable = !1),
          (t.isProgressMoving = !1),
          (t.__dragCallBacks = []),
          (t._state = { now: -1, direc: 0, time: 0, prePlayTime: -1 }),
          (t._disableBlur = !1),
          t
        );
      }
      return (
        r(
          l,
          [
            {
              key: "duration",
              get: function () {
                return this.playerConfig.customDuration || this.player.duration;
              },
            },
            {
              key: "timeOffset",
              get: function () {
                return this.playerConfig.timeOffset || 0;
              },
            },
            {
              key: "changeState",
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.useable = e;
              },
            },
            {
              key: "_initInner",
              value: function () {
                var e = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (i && 0 !== i.length) || (i = [{ percent: 1 }]);
                var o = t(
                  t({ fragments: i }, n),
                  {},
                  {
                    actionCallback: function (t) {
                      e.emitUserAction("fragment_focus", "fragment_focus", t);
                    },
                  },
                );
                this.innerList
                  ? this.innerList.reset(o)
                  : ((this.innerList = new Li(o)),
                    this.outer.insertBefore(this.innerList.render(), this.outer.children[0]),
                    ["findHightLight", "unHightLight", "setHightLight", "findFragment"].map(function (t) {
                      e[t] = e.innerList[t].bind(e.innerList);
                    }));
              },
            },
            {
              key: "_updateInnerFocus",
              value: function (e) {
                this.innerList && this.innerList.updateFocus(e);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                if (!this.config.disable && !this.playerConfig.isLive) {
                  (this.pos = { x: 0, y: 0, moving: !1, isDown: !1, isEnter: !1, isLocked: !1 }),
                    (this.outer = this.find("xg-outer"));
                  var t = this.config,
                    i = t.fragFocusClass,
                    n = t.fragAutoFocus,
                    o = t.fragClass;
                  this._initInner(this.config.fragments, {
                    fragFocusClass: i,
                    fragAutoFocus: n,
                    fragClass: o,
                    style: this.playerConfig.commonStyle || {},
                  }),
                    "mobile" === O.device && ((this.config.isDragingSeek = !1), (this.isMobile = !0)),
                    (this.progressBtn = this.find(".xgplayer-progress-btn")),
                    this.on(z, function () {
                      e.onMouseLeave();
                    }),
                    this.on(G, function () {
                      e.onTimeupdate();
                    }),
                    this.on(V, function () {
                      e.onTimeupdate(), e.onCacheUpdate();
                    }),
                    this.on(Z, function () {
                      e.onCacheUpdate();
                    }),
                    this.on(F, function () {
                      e.onCacheUpdate(!0), e.onTimeupdate(!0), (e._state.now = 0);
                    }),
                    this.on($, function () {
                      e.onReset();
                    }),
                    this.on(ge, function () {
                      e.onVideoResize();
                    }),
                    this.bindDomEvents(),
                    this.initCustomStyle();
                }
              },
            },
            {
              key: "setConfig",
              value: function (e) {
                var t = this,
                  i = null;
                Object.keys(e).forEach(function (n) {
                  (t.config[n] = e[n]), "fragments" === n && (i = e[n]);
                }),
                  i && this._initInner(i, e);
              },
            },
            {
              key: "initCustomStyle",
              value: function () {
                var e = (this.playerConfig || {}).commonStyle.sliderBtnStyle,
                  t = this.progressBtn;
                e &&
                  ("string" == typeof e
                    ? (t.style.boxShadow = e)
                    : "object" === i(e) &&
                      Object.keys(e).map(function (i) {
                        t.style[i] = e[i];
                      }));
              },
            },
            {
              key: "triggerCallbacks",
              value: function (e, t, i) {
                this.__dragCallBacks.length > 0 &&
                  this.__dragCallBacks.map(function (n) {
                    if (n && n.handler && n.type === e)
                      try {
                        n.handler(t, i);
                      } catch (o) {
                        console.error("[XGPLAYER][triggerCallbacks] ".concat(n, " error"), o);
                      }
                  });
              },
            },
            {
              key: "addCallBack",
              value: function (e, t) {
                t && "function" == typeof t && this.__dragCallBacks.push({ type: e, handler: t });
              },
            },
            {
              key: "removeCallBack",
              value: function (e, t) {
                var i = this.__dragCallBacks,
                  n = -1;
                i.map(function (i, o) {
                  i && i.type === e && i.handler === t && (n = o);
                }),
                  n > -1 && i.splice(n, 1);
              },
            },
            {
              key: "unlock",
              value: function () {
                var e = this.player,
                  t = this.pos;
                (t.isEnter = !1),
                  e.isMini ||
                    (this.unbind("mousemove", this.onMoveOnly),
                    t.isDown ? this.unbind("mouseleave", this.onMouseLeave) : this.blur());
              },
            },
            {
              key: "bindDomEvents",
              value: function () {
                var e = this.player,
                  t = e.controls,
                  i = e.config;
                (this._mouseDownHandlerHook = this.hook("dragstart", this._mouseDownHandler)),
                  (this._mouseUpHandlerHook = this.hook("dragend", this._mouseUpHandler)),
                  (this._mouseMoveHandlerHook = this.hook("drag", this._mouseMoveHandler)),
                  ("touch" !== this.domEventType && "compatible" !== this.domEventType) ||
                    (this.root.addEventListener("touchstart", this.onMouseDown),
                    t &&
                      (t.root && t.root.addEventListener("touchmove", x.stopPropagation),
                      t.center && t.center.addEventListener("touchend", x.stopPropagation))),
                  ("mouse" !== this.domEventType && "compatible" !== this.domEventType) ||
                    (this.bind("mousedown", this.onMouseDown),
                    "mobile" !== i.isMobileSimulateMode && this.bind("mouseenter", this.onMouseEnter),
                    this.bind("mouseover", this.onMouseOver),
                    this.bind("mouseout", this.onMouseOut),
                    this.player.root.addEventListener("click", this.onBodyClick, !0));
              },
            },
            {
              key: "focus",
              value: function () {
                this.player.controls.pauseAutoHide(), x.addClass(this.root, "active");
              },
            },
            {
              key: "blur",
              value: function () {
                this._disableBlur || (this.player.controls.recoverAutoHide(), x.removeClass(this.root, "active"));
              },
            },
            {
              key: "disableBlur",
              value: function () {
                this._disableBlur = !0;
              },
            },
            {
              key: "enableBlur",
              value: function () {
                this._disableBlur = !1;
              },
            },
            {
              key: "updateWidth",
              value: function (e, t, i) {
                var n = this.config,
                  o = this.player;
                if (!n.isCloseClickSeek || 0 !== i) {
                  var r = e >= o.duration ? o.duration - n.endedDiff : Number(e).toFixed(1);
                  this.updatePercent(t),
                    this.updateTime(e),
                    (1 !== i || (n.isDragingSeek && "audio" !== o.config.mediaType)) &&
                      ((this._state.now = r), (this._state.direc = r > o.currentTime ? 0 : 1), o.seek(r));
                }
              },
            },
            {
              key: "computeTime",
              value: function (e, t) {
                var i,
                  n,
                  o = this.player,
                  r = this.root.getBoundingClientRect(),
                  s = r.width,
                  a = r.height,
                  l = r.top,
                  c = r.left,
                  u = t;
                90 === o.rotateDeg ? ((i = a), (n = l)) : ((i = s), (n = c));
                var h = u - n,
                  d = (h = h > i ? i : h < 0 ? 0 : h) / i;
                return {
                  percent: (d = d < 0 ? 0 : d > 1 ? 1 : d),
                  currentTime: parseInt(d * this.duration * 1e3, 10) / 1e3,
                  offset: h,
                  width: i,
                  left: n,
                  e: e,
                };
              },
            },
            {
              key: "updateTime",
              value: function (e) {
                var t = this.player,
                  i = this.duration;
                e > i ? (e = i) : e < 0 && (e = 0);
                var n = t.plugins.time;
                n && n.updateTime(e);
              },
            },
            {
              key: "resetSeekState",
              value: function () {
                this.isProgressMoving = !1;
                var e = this.player.plugins.time;
                e && e.resetActive();
              },
            },
            {
              key: "updatePercent",
              value: function (e, t) {
                if (((this.isProgressMoving = !0), !this.config.disable)) {
                  (e = e > 1 ? 1 : e < 0 ? 0 : e),
                    (this.progressBtn.style.left = "".concat(100 * e, "%")),
                    this.innerList.update({ played: e * this.duration }, this.duration);
                  var i = this.player.plugins.miniprogress;
                  i && i.update({ played: e * this.duration }, this.duration);
                }
              },
            },
            {
              key: "onTimeupdate",
              value: function (e) {
                var t = this.player,
                  i = this._state,
                  n = this.duration;
                if (!t.isSeeking && !this.isProgressMoving) {
                  if (i.now > -1) {
                    var o = parseInt(1e3 * i.now, 10) - parseInt(1e3 * t.currentTime, 10);
                    if ((0 === i.direc && o > 300) || (1 === i.direc && o > -300)) return void (i.now = -1);
                    i.now = -1;
                  }
                  var r = this.timeOffset + t.currentTime;
                  (r = x.adjustTimeByDuration(r, n, e)),
                    this.innerList.update({ played: r }, n),
                    (this.progressBtn.style.left = "".concat((r / n) * 100, "%"));
                  var s = this.player.plugins.miniprogress;
                  s && s.update({ played: r }, n);
                }
              },
            },
            {
              key: "onCacheUpdate",
              value: function (e) {
                var t = this.player,
                  i = this.duration;
                if (t) {
                  var n = t.bufferedPoint.end;
                  (n = x.adjustTimeByDuration(n, i, e)), this.innerList.update({ cached: n }, i);
                  var o = this.player.plugins.miniprogress;
                  o && o.update({ cached: n }, i);
                }
              },
            },
            {
              key: "onReset",
              value: function () {
                this.innerList.update({ played: 0, cached: 0 }, 0);
                var e = this.player.plugins.miniprogress;
                e && e.update({ cached: 0, played: 0 }, 0);
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this.player,
                  t = e.controls;
                (this.thumbnailPlugin = null), this.innerList.destroy(), (this.innerList = null);
                var i = this.domEventType;
                ("touch" !== i && "compatible" !== i) ||
                  (this.root.removeEventListener("touchstart", this.onMouseDown),
                  this.root.removeEventListener("touchmove", this.onMouseMove),
                  this.root.removeEventListener("touchend", this.onMouseUp),
                  t &&
                    (t.root && t.root.removeEventListener("touchmove", x.stopPropagation),
                    t.center && t.center.removeEventListener("touchend", x.stopPropagation))),
                  ("mouse" !== i && "compatible" !== i) ||
                    (this.unbind("mousedown", this.onMouseDown),
                    this.unbind("mouseenter", this.onMouseEnter),
                    this.unbind("mousemove", this.onMoveOnly),
                    this.unbind("mouseleave", this.onMouseLeave),
                    document.removeEventListener("mousemove", this.onMouseMove, !1),
                    document.removeEventListener("mouseup", this.onMouseUp, !1),
                    e.root.removeEventListener("click", this.onBodyClick, !0));
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable && !this.playerConfig.isLive) {
                  var e = this.player.controls ? this.player.controls.config.mode : "";
                  return '\n    <xg-progress class="xgplayer-progress '.concat(
                    "bottom" === e ? "xgplayer-progress-bottom" : "",
                    '">\n      <xg-outer class="xgplayer-progress-outer">\n        <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n      </xg-outer>\n    </xg-progress>\n    ',
                  );
                }
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "progress";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  position: Qe.CONTROLS_CENTER,
                  index: 0,
                  disable: !1,
                  isDragingSeek: !0,
                  closeMoveSeek: !1,
                  isPauseMoving: !1,
                  isCloseClickSeek: !1,
                  fragments: [{ percent: 1 }],
                  fragFocusClass: Ii.POINT,
                  fragClass: "",
                  fragAutoFocus: !1,
                  miniMoveStep: 5,
                  miniStartStep: 2,
                  onMoveStart: function () {},
                  onMoveEnd: function () {},
                  endedDiff: 0.2,
                };
              },
            },
            {
              key: "FRAGMENT_FOCUS_CLASS",
              get: function () {
                return Ii;
              },
            },
          ],
        ),
        l
      );
    })(nt),
    Oi = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "_onMouseenter", function (t) {
            e.emit("icon_mouseenter", { pluginName: e.pluginName });
          }),
          s(u(e), "_onMouseLeave", function (t) {
            e.emit("icon_mouseleave", { pluginName: e.pluginName });
          }),
          e
        );
      }
      return (
        r(i, [
          {
            key: "afterCreate",
            value: function () {
              this.bind("mouseenter", this._onMouseenter), this.bind("mouseleave", this._onMouseLeave);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.unbind("mouseenter", this._onMouseenter), this.unbind("mouseleave", this._onMouseLeave);
            },
          },
        ]),
        i
      );
    })(nt),
    Ri = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                p(l(i.prototype), "afterCreate", this).call(this);
                var t = this.player;
                this.config.disable ||
                  (this.initIcons(),
                  (this.btnClick = this.btnClick.bind(this)),
                  this.bind(["touchend", "click"], this.btnClick),
                  this.on([H, B], function () {
                    e.animate(t.paused);
                  }),
                  this.on(j, function () {
                    e.animate(t.paused);
                  }),
                  this.animate(!0));
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return { play: { icon: Ht, class: "xg-icon-play" }, pause: { icon: Bt, class: "xg-icon-pause" } };
              },
            },
            {
              key: "btnClick",
              value: function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = this.player;
                return (
                  this.emitUserAction(e, "switch_play_pause", { prop: "paused", from: t.paused, to: !t.paused }),
                  t.ended ? t.replay() : t.paused ? (t.play(), this.animate(!1)) : (t.pause(), this.animate(!0)),
                  !1
                );
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this.icons;
                this.appendChild(".xgplayer-icon", e.play), this.appendChild(".xgplayer-icon", e.pause);
              },
            },
            {
              key: "animate",
              value: function (e) {
                var t = this.i18nKeys,
                  i = this.find(".xg-tips");
                e
                  ? (this.setAttr("data-state", "pause"), i && this.changeLangTextKey(i, t.PLAY_TIPS))
                  : (this.setAttr("data-state", "play"), i && this.changeLangTextKey(i, t.PAUSE_TIPS));
              },
            },
            {
              key: "destroy",
              value: function () {
                p(l(i.prototype), "destroy", this).call(this), this.unbind(["touchend", "click"], this.btnClick);
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable)
                  return '<xg-icon class="xgplayer-play">\n    <div class="xgplayer-icon">\n    </div>\n    '.concat(
                    Wt(this, "PLAY_TIPS", this.playerConfig.isHideTips),
                    "\n    </xg-icon>",
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "play";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { position: Qe.CONTROLS_LEFT, index: 0, disable: !1 };
              },
            },
          ],
        ),
        i
      );
    })(Oi);
  function Di() {
    return new DOMParser().parseFromString(
      '<svg width="32px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M11.2374369,14 L17.6187184,7.61871843 C17.9604272,7.27700968 17.9604272,6.72299032 17.6187184,6.38128157 C17.2770097,6.03957281 16.7229903,6.03957281 16.3812816,6.38128157 L9.38128157,13.3812816 C9.03957281,13.7229903 9.03957281,14.2770097 9.38128157,14.6187184 L16.3812816,21.6187184 C16.7229903,21.9604272 17.2770097,21.9604272 17.6187184,21.6187184 C17.9604272,21.2770097 17.9604272,20.7229903 17.6187184,20.3812816 L11.2374369,14 L11.2374369,14 Z" fill="#FFFFFF"></path>\n    </g>\n</svg>',
      "image/svg+xml",
    ).firstChild;
  }
  var Mi = (function (e) {
    a(i, e);
    var t = d(i);
    function i() {
      return n(this, i), t.apply(this, arguments);
    }
    return (
      r(
        i,
        [
          {
            key: "afterCreate",
            value: function () {
              var e = this;
              this.initIcons(),
                (this.onClick = function (t) {
                  t.preventDefault(), t.stopPropagation(), e.config.onClick(t);
                }),
                this.bind(["click", "touchend"], this.onClick);
            },
          },
          {
            key: "registerIcons",
            value: function () {
              return { screenBack: { icon: Di, class: "xg-fullscreen-back" } };
            },
          },
          {
            key: "initIcons",
            value: function () {
              var e = this.icons;
              this.appendChild(this.root, e.screenBack);
            },
          },
          {
            key: "show",
            value: function () {
              x.addClass(this.root, "show");
            },
          },
          {
            key: "hide",
            value: function () {
              x.removeClass(this.root, "show");
            },
          },
          {
            key: "render",
            value: function () {
              return '<xg-icon class="xgplayer-back">\n    </xg-icon>';
            },
          },
        ],
        [
          {
            key: "pluginName",
            get: function () {
              return "topbackicon";
            },
          },
          {
            key: "defaultConfig",
            get: function () {
              return { position: Qe.ROOT_TOP, index: 0 };
            },
          },
        ],
      ),
      i
    );
  })(nt);
  function ji() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  function Ni() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var Fi = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "_onOrientationChange", function (t) {
            e.player.fullscreen &&
              e.config.rotateFullscreen &&
              (90 === window.orientation || -90 === window.orientation
                ? e.player.setRotateDeg(0)
                : e.player.setRotateDeg(90));
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                p(l(i.prototype), "afterCreate", this).call(this);
                var t = this.config,
                  n = this.playerConfig;
                if (!t.disable) {
                  t.target && (this.playerConfig.fullscreenTarget = this.config.target);
                  var o = x.getFullScreenEl();
                  n.fullscreenTarget === o && this.player.getFullscreen().catch(function (e) {}),
                    this.initIcons(),
                    (this.handleFullscreen = this.hook("fullscreenChange", this.toggleFullScreen, {
                      pre: function (t) {
                        var i = e.player.fullscreen;
                        e.emitUserAction(t, "switch_fullscreen", { prop: "fullscreen", from: i, to: !i });
                      },
                    })),
                    this.bind(".xgplayer-fullscreen", ["touchend", "click"], this.handleFullscreen),
                    this.on(ue, function (t) {
                      var i = e.find(".xg-tips");
                      i && e.changeLangTextKey(i, t ? e.i18nKeys.EXITFULLSCREEN_TIPS : e.i18nKeys.FULLSCREEN_TIPS),
                        e.animate(t);
                    }),
                    this.config.needBackIcon &&
                      (this.topBackIcon = this.player.registerPlugin({
                        plugin: Mi,
                        options: {
                          config: {
                            onClick: function (t) {
                              e.handleFullscreen(t);
                            },
                          },
                        },
                      })),
                    "mobile" === O.device && window.addEventListener("orientationchange", this._onOrientationChange);
                }
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return {
                  fullscreen: { icon: ji, class: "xg-get-fullscreen" },
                  exitFullscreen: { icon: Ni, class: "xg-exit-fullscreen" },
                };
              },
            },
            {
              key: "destroy",
              value: function () {
                p(l(i.prototype), "destroy", this).call(this),
                  this.unbind(".xgplayer-icon", "mobile" === O.device ? "touchend" : "click", this.handleFullscreen),
                  "mobile" === O.device && window.removeEventListener("orientationchange", this._onOrientationChange);
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this.icons;
                this.appendChild(".xgplayer-icon", e.fullscreen), this.appendChild(".xgplayer-icon", e.exitFullscreen);
              },
            },
            {
              key: "toggleFullScreen",
              value: function (e) {
                e && (e.preventDefault(), e.stopPropagation());
                var t = this.player,
                  i = this.config;
                !0 === i.useCssFullscreen || ("function" == typeof i.useCssFullscreen && i.useCssFullscreen())
                  ? (t.fullscreen ? t.exitCssFullscreen() : t.getCssFullscreen(), this.animate(t.fullscreen))
                  : i.rotateFullscreen
                  ? (t.fullscreen ? t.exitRotateFullscreen() : t.getRotateFullscreen(), this.animate(t.fullscreen))
                  : i.switchCallback && "function" == typeof i.switchCallback
                  ? i.switchCallback(t.fullscreen)
                  : t.fullscreen
                  ? t.exitFullscreen()
                  : t.getFullscreen().catch(function (e) {});
              },
            },
            {
              key: "animate",
              value: function (e) {
                e ? this.setAttr("data-state", "full") : this.setAttr("data-state", "normal"),
                  this.topBackIcon &&
                    (e ? (this.topBackIcon.show(), this.hide()) : (this.topBackIcon.hide(), this.show()));
              },
            },
            {
              key: "show",
              value: function () {
                p(l(i.prototype), "show", this).call(this);
              },
            },
            {
              key: "hide",
              value: function () {
                p(l(i.prototype), "hide", this).call(this);
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable) {
                  return '<xg-icon class="xgplayer-fullscreen">\n    <div class="xgplayer-icon">\n    </div>\n    '.concat(
                    Wt(this, "FULLSCREEN_TIPS", this.playerConfig.isHideTips),
                    "\n    </xg-icon>",
                  );
                }
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "fullscreen";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  position: Qe.CONTROLS_RIGHT,
                  index: 0,
                  useCssFullscreen: !1,
                  rotateFullscreen: !1,
                  switchCallback: null,
                  target: null,
                  disable: !1,
                  needBackIcon: !1,
                };
              },
            },
          ],
        ),
        i
      );
    })(Oi),
    Hi = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        return n(this, i), ((o = t.call(this, e)).isActiving = !1), o;
      }
      return (
        r(
          i,
          [
            {
              key: "duration",
              get: function () {
                return this.playerConfig.customDuration || this.player.duration;
              },
            },
            {
              key: "currentTime",
              get: function () {
                return this.player.currentTime || 0;
              },
            },
            {
              key: "timeOffset",
              get: function () {
                return this.playerConfig.timeOffset || 0;
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this,
                  t = this.player.controls.config.mode;
                (this.mode = "flex" === t ? "flex" : "normal"),
                  this.config.disable ||
                    ("flex" === this.mode && (this.createCenterTime(), this.hide()),
                    (this.durationDom = this.find(".time-duration")),
                    (this.timeDom = this.find(".time-current")),
                    this.on(z, function () {
                      e.onTimeUpdate();
                    }),
                    this.on(G, function () {
                      e.onTimeUpdate();
                    }),
                    this.on(F, function () {
                      e.onTimeUpdate(!0);
                    }),
                    this.on($, function () {
                      e.onReset();
                    }));
              },
            },
            {
              key: "show",
              value: function () {
                "flex" !== this.mode && p(l(i.prototype), "show", this).call(this);
              },
            },
            {
              key: "onTimeUpdate",
              value: function (e) {
                var t = this.player,
                  i = this.config,
                  n = this.duration;
                if (!i.disable && !this.isActiving && t.hasStart) {
                  var o = t.currentTime + this.timeOffset;
                  (o = x.adjustTimeByDuration(o, n, e)),
                    "flex" === this.mode
                      ? ((this.centerCurDom.innerHTML = x.format(o)),
                        n !== 1 / 0 && n > 0 && (this.centerDurDom.innerHTML = x.format(n)))
                      : ((this.timeDom.innerHTML = x.format(o)),
                        n !== 1 / 0 && n > 0 && (this.durationDom.innerHTML = x.format(n)));
                }
              },
            },
            {
              key: "onReset",
              value: function () {
                "flex" === this.mode
                  ? ((this.centerCurDom.innerHTML = x.format(0)), (this.centerDurDom.innerHTML = x.format(0)))
                  : ((this.timeDom.innerHTML = x.format(0)), (this.durationDom.innerHTML = x.format(0)));
              },
            },
            {
              key: "createCenterTime",
              value: function () {
                var e = this.player;
                if (e.controls && e.controls.center) {
                  var t = e.controls.center;
                  (this.centerCurDom = x.createDom("xg-icon", "00:00", {}, "xgplayer-time left")),
                    (this.centerDurDom = x.createDom("xg-icon", "00:00", {}, "xgplayer-time right")),
                    t.children.length > 0
                      ? t.insertBefore(this.centerCurDom, t.children[0])
                      : t.appendChild(this.centerCurDom),
                    t.appendChild(this.centerDurDom);
                }
              },
            },
            {
              key: "afterPlayerInit",
              value: function () {
                var e = this.config;
                this.duration === 1 / 0 || this.playerConfig.isLive
                  ? (x.hide(this.durationDom),
                    x.hide(this.timeDom),
                    x.hide(this.find(".time-separator")),
                    x.show(this.find(".time-live-tag")))
                  : x.hide(this.find(".time-live-tag")),
                  e.hide ? this.hide() : this.show();
              },
            },
            {
              key: "changeLiveState",
              value: function (e) {
                e
                  ? (x.hide(this.durationDom),
                    x.hide(this.timeDom),
                    x.hide(this.find(".time-separator")),
                    x.show(this.find(".time-live-tag")))
                  : (x.hide(this.find(".time-live-tag")),
                    x.show(this.find(".time-separator")),
                    x.show(this.durationDom),
                    x.show(this.timeDom));
              },
            },
            {
              key: "updateTime",
              value: function (e) {
                (this.isActiving = !0),
                  (!e && 0 !== e) ||
                    e > this.duration ||
                    ("flex" !== this.mode
                      ? (this.timeDom.innerHTML = x.format(e))
                      : (this.centerCurDom.innerHTML = x.format(e)));
              },
            },
            {
              key: "resetActive",
              value: function () {
                var e = this,
                  t = this.player,
                  i = function () {
                    e.isActiving = !1;
                  };
                this.off(V, i), t.isSeeking ? this.once(V, i) : (this.isActiving = !1);
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this.player.controls.center;
                this.centerCurDom && e.removeChild(this.centerCurDom),
                  (this.centerCurDom = null),
                  this.centerDurDom && e.removeChild(this.centerDurDom),
                  (this.centerDurDom = null);
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable)
                  return '<xg-icon class="xgplayer-time">\n    <span class="time-current">00:00</span>\n    <span class="time-separator">/</span>\n    <span class="time-duration">00:00</span>\n    <span class="time-live-tag">'.concat(
                    this.i18n.LIVE_TIP,
                    "</span>\n    </xg-icon>",
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "time";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { position: Qe.CONTROLS_LEFT, index: 2, disable: !1 };
              },
            },
          ],
        ),
        i
      );
    })(nt);
  function Bi() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  function Ui() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  function Vi() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var Gi = (function (e) {
    a(i, e);
    var t = d(i);
    function i() {
      var e;
      n(this, i);
      for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
      return (
        s(u((e = t.call.apply(t, [this].concat(r)))), "onBarMousedown", function (t) {
          var i = u(e).player,
            n = e.find(".xgplayer-bar");
          x.event(t);
          var o = n.getBoundingClientRect(),
            r = x.getEventPos(t, i.zoom),
            s = o.height - (r.clientY - o.top);
          if (((r.h = s), (r.barH = o.height), (e.pos = r), !(s < -2)))
            return (
              e.updateVolumePos(s, t), document.addEventListener("mouseup", e.onBarMouseUp), (e._d.isStart = !0), !1
            );
        }),
        s(u(e), "onBarMouseMove", function (t) {
          var i = u(e)._d;
          if (i.isStart) {
            var n = u(e),
              o = n.pos,
              r = n.player;
            t.preventDefault(), t.stopPropagation(), x.event(t);
            var s = x.getEventPos(t, r.zoom);
            i.isMoving = !0;
            var a = o.h - s.clientY + o.clientY;
            a > o.barH || e.updateVolumePos(a, t);
          }
        }),
        s(u(e), "onBarMouseUp", function (t) {
          x.event(t), document.removeEventListener("mouseup", e.onBarMouseUp);
          var i = u(e)._d;
          (i.isStart = !1), (i.isMoving = !1);
        }),
        s(u(e), "onMouseenter", function (t) {
          (e._d.isActive = !0), e.focus(), e.emit("icon_mouseenter", { pluginName: e.pluginName });
        }),
        s(u(e), "onMouseleave", function (t) {
          (e._d.isActive = !1), e.unFocus(100, !1, t), e.emit("icon_mouseleave", { pluginName: e.pluginName });
        }),
        s(u(e), "onVolumeChange", function (t) {
          if (e.player) {
            var i = e.player,
              n = i.muted,
              o = i.volume;
            e._d.isMoving ||
              ((e.find(".xgplayer-drag").style.height = n || 0 === o ? "4px" : "".concat(100 * o, "%")),
              e.config.showValueLabel && e.updateVolumeValue()),
              e.animate(n, o);
          }
        }),
        e
      );
    }
    return (
      r(
        i,
        [
          {
            key: "registerIcons",
            value: function () {
              return {
                volumeSmall: { icon: Ui, class: "xg-volume-small" },
                volumeLarge: { icon: Bi, class: "xg-volume" },
                volumeMuted: { icon: Vi, class: "xg-volume-mute" },
              };
            },
          },
          {
            key: "afterCreate",
            value: function () {
              var e = this;
              if (
                ((this._timerId = null), (this._d = { isStart: !1, isMoving: !1, isActive: !1 }), !this.config.disable)
              ) {
                this.initIcons();
                var t = this.playerConfig,
                  i = t.commonStyle,
                  n = t.volume;
                i.volumeColor && (this.find(".xgplayer-drag").style.backgroundColor = i.volumeColor),
                  (this.changeMutedHandler = this.hook(
                    "mutedChange",
                    function (t) {
                      e.changeMuted(t);
                    },
                    {
                      pre: function (e) {
                        e.preventDefault(), e.stopPropagation();
                      },
                    },
                  )),
                  (this._onMouseenterHandler = this.hook("mouseenter", this.onMouseenter)),
                  (this._onMouseleaveHandler = this.hook("mouseleave", this.onMouseleave)),
                  "mobile" !== O.device &&
                    "mobile" !== this.playerConfig.isMobileSimulateMode &&
                    (this.bind("mouseenter", this._onMouseenterHandler),
                    this.bind(["blur", "mouseleave"], this._onMouseleaveHandler),
                    this.bind(".xgplayer-slider", "mousedown", this.onBarMousedown),
                    this.bind(".xgplayer-slider", "mousemove", this.onBarMouseMove),
                    this.bind(".xgplayer-slider", "mouseup", this.onBarMouseUp)),
                  this.bind(".xgplayer-icon", ["touchend", "click"], this.changeMutedHandler),
                  this.on(K, this.onVolumeChange),
                  this.once(Y, this.onVolumeChange),
                  "Number" !== x.typeOf(n) && (this.player.volume = this.config.default),
                  this.onVolumeChange();
              }
            },
          },
          {
            key: "updateVolumePos",
            value: function (e, t) {
              var i = this.player,
                n = this.find(".xgplayer-drag"),
                o = this.find(".xgplayer-bar");
              if (o && n) {
                var r = parseInt((e / o.getBoundingClientRect().height) * 1e3, 10);
                n.style.height = "".concat(e, "px");
                var s = Math.max(Math.min(r / 1e3, 1), 0),
                  a = { volume: { from: i.volume, to: s } };
                i.muted && (a.muted = { from: !0, to: !1 }),
                  this.emitUserAction(t, "change_volume", { muted: i.muted, volume: i.volume, props: a }),
                  (i.volume = Math.max(Math.min(r / 1e3, 1), 0)),
                  i.muted && (i.muted = !1),
                  this.config.showValueLabel && this.updateVolumeValue();
              }
            },
          },
          {
            key: "updateVolumeValue",
            value: function () {
              var e = this.player,
                t = e.volume,
                i = e.muted,
                n = this.find(".xgplayer-value-label"),
                o = Math.max(Math.min(t, 1), 0);
              n.innerText = i ? 0 : Math.ceil(100 * o);
            },
          },
          {
            key: "focus",
            value: function () {
              this.player.focus({ autoHide: !1 }),
                this._timerId && (x.clearTimeout(this, this._timerId), (this._timerId = null)),
                x.addClass(this.root, "slide-show");
            },
          },
          {
            key: "unFocus",
            value: function () {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
                i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                o = this._d,
                r = this.player;
              o.isActive ||
                (this._timerId && (x.clearTimeout(this, this._timerId), (this._timerId = null)),
                (this._timerId = x.setTimeout(
                  this,
                  function () {
                    o.isActive ||
                      (i ? r.blur() : r.focus(), x.removeClass(e.root, "slide-show"), o.isStart && e.onBarMouseUp(n)),
                      (e._timerId = null);
                  },
                  t,
                )));
            },
          },
          {
            key: "changeMuted",
            value: function (e) {
              e && e.stopPropagation();
              var t = this.player;
              this._d.isStart && this.onBarMouseUp(e),
                this.emitUserAction(e, "change_muted", {
                  muted: t.muted,
                  volume: t.volume,
                  props: { muted: { from: t.muted, to: !t.muted } },
                }),
                t.volume > 0 && (t.muted = !t.muted),
                t.volume < 0.01 && (t.volume = this.config.miniVolume);
            },
          },
          {
            key: "animate",
            value: function (e, t) {
              e || 0 === t
                ? this.setAttr("data-state", "mute")
                : t < 0.5 && this.icons.volumeSmall
                ? this.setAttr("data-state", "small")
                : this.setAttr("data-state", "normal");
            },
          },
          {
            key: "initIcons",
            value: function () {
              var e = this.icons;
              this.appendChild(".xgplayer-icon", e.volumeSmall),
                this.appendChild(".xgplayer-icon", e.volumeLarge),
                this.appendChild(".xgplayer-icon", e.volumeMuted);
            },
          },
          {
            key: "destroy",
            value: function () {
              this._timerId && (x.clearTimeout(this, this._timerId), (this._timerId = null)),
                this.unbind("mouseenter", this.onMouseenter),
                this.unbind(["blur", "mouseleave"], this.onMouseleave),
                this.unbind(".xgplayer-slider", "mousedown", this.onBarMousedown),
                this.unbind(".xgplayer-slider", "mousemove", this.onBarMouseMove),
                this.unbind(".xgplayer-slider", "mouseup", this.onBarMouseUp),
                document.removeEventListener("mouseup", this.onBarMouseUp),
                this.unbind(".xgplayer-icon", "mobile" === O.device ? "touchend" : "click", this.changeMutedHandler);
            },
          },
          {
            key: "render",
            value: function () {
              if (!this.config.disable) {
                var e = this.config.default || this.player.volume,
                  t = this.config.showValueLabel;
                return '\n    <xg-icon class="xgplayer-volume" data-state="normal">\n      <div class="xgplayer-icon">\n      </div>\n      <xg-slider class="xgplayer-slider">\n        '
                  .concat(
                    t ? '<div class="xgplayer-value-label">'.concat(100 * e, "</div>") : "",
                    '\n        <div class="xgplayer-bar">\n          <xg-drag class="xgplayer-drag" style="height: ',
                  )
                  .concat(100 * e, '%"></xg-drag>\n        </div>\n      </xg-slider>\n    </xg-icon>');
              }
            },
          },
        ],
        [
          {
            key: "pluginName",
            get: function () {
              return "volume";
            },
          },
          {
            key: "defaultConfig",
            get: function () {
              return {
                position: Qe.CONTROLS_RIGHT,
                index: 1,
                disable: !1,
                showValueLabel: !1,
                default: 0.6,
                miniVolume: 0.2,
              };
            },
          },
        ],
      ),
      i
    );
  })(nt);
  function Wi() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-4 -6 40 40" fill="none">\n  <g clip-path="url(#clip0)">\n    <path transform="scale(1.5 1.5)" d="M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z" fill="white"/>\n    <path transform="scale(1.5 1.5)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z" fill="white"/>\n  </g>\n  <defs>\n    <clipPath id="clip0">\n      <rect width="40" height="40" fill="white"/>\n    </clipPath>\n  </defs>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var qi = (function (e) {
    a(i, e);
    var t = d(i);
    function i(e) {
      var o;
      return n(this, i), ((o = t.call(this, e)).rotateDeg = o.config.rotateDeg || 0), o;
    }
    return (
      r(
        i,
        [
          {
            key: "afterCreate",
            value: function () {
              var e = this;
              this.config.disable ||
                (p(l(i.prototype), "afterCreate", this).call(this),
                this.appendChild(".xgplayer-icon", this.icons.rotate),
                (this.onBtnClick = this.onBtnClick.bind(this)),
                this.bind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick),
                this.on(ge, function () {
                  e.rotateDeg &&
                    x.setTimeout(
                      e,
                      function () {
                        e.updateRotateDeg(e.rotateDeg, e.config.innerRotate);
                      },
                      100,
                    );
                }),
                this.rotateDeg && this.updateRotateDeg(this.rotateDeg, this.config.innerRotate));
            },
          },
          {
            key: "destroy",
            value: function () {
              p(l(i.prototype), "destroy", this).call(this),
                this.unbind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick);
            },
          },
          {
            key: "onBtnClick",
            value: function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                this.emitUserAction(e, "rotate"),
                this.rotate(this.config.clockwise, this.config.innerRotate, 1);
            },
          },
          {
            key: "updateRotateDeg",
            value: function (e, t) {
              var i = this.player;
              e || (e = 0);
              var n = this.player,
                o = n.root,
                r = n.innerContainer,
                s = this.player.media,
                a = o.offsetWidth,
                l = r && t ? r.offsetHeight : o.offsetHeight,
                c = "100%",
                u = "100%",
                h = 0,
                d = 0;
              (0.75 !== e && 0.25 !== e) ||
                ((c = "".concat(l, "px")), (u = "".concat(a, "px")), (h = -(l - a) / 2), (d = -(a - l) / 2));
              var f = "translate(".concat(h, "px,").concat(d, "px) rotate(").concat(e, "turn)"),
                p = { transformOrigin: "center center", transform: f, webKitTransform: f, height: u, width: c },
                g = t ? s : o,
                v = t ? i.getPlugin("poster") : null;
              Object.keys(p).map(function (e) {
                (g.style[e] = p[e]), v && v.root && (v.root.style[e] = p[e]);
              });
            },
          },
          {
            key: "rotate",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                n = this.player;
              this.rotateDeg || (this.rotateDeg = 0);
              var o = e ? 1 : -1;
              (this.rotateDeg = (this.rotateDeg + 1 + 0.25 * o * i) % 1),
                this.updateRotateDeg(this.rotateDeg, t),
                n.emit(ye, 360 * this.rotateDeg);
            },
          },
          {
            key: "registerIcons",
            value: function () {
              return { rotate: Wi };
            },
          },
          {
            key: "render",
            value: function () {
              if (!this.config.disable)
                return '\n    <xg-icon class="xgplayer-rotate">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(
                  Wt(this, "ROTATE_TIPS", this.playerConfig.isHideTips),
                  "\n    </xg-icon>",
                );
            },
          },
        ],
        [
          {
            key: "pluginName",
            get: function () {
              return "rotate";
            },
          },
          {
            key: "defaultConfig",
            get: function () {
              return {
                position: Qe.CONTROLS_RIGHT,
                index: 6,
                innerRotate: !0,
                clockwise: !1,
                rotateDeg: 0,
                disable: !1,
              };
            },
          },
        ],
      ),
      i
    );
  })(Oi);
  function zi() {
    return new DOMParser().parseFromString(
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z"\n    fill="white" />\n</svg>',
      "image/svg+xml",
    ).firstChild;
  }
  function Ki() {
    return new DOMParser().parseFromString(
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z"\n    fill="white" />\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M9.4998 7.7C9.77595 7.7 9.9998 7.47614 9.9998 7.2V6.5C9.9998 6.22386 9.77595 6 9.4998 6H5.5402L5.52754 6.00016H5.5C5.22386 6.00016 5 6.22401 5 6.50016V10.4598C5 10.7359 5.22386 10.9598 5.5 10.9598H6.2C6.47614 10.9598 6.7 10.7359 6.7 10.4598V8.83005L8.76983 10.9386C8.96327 11.1357 9.27984 11.1386 9.47691 10.9451L9.97645 10.4548C10.1735 10.2613 10.1764 9.94476 9.983 9.7477L7.97289 7.7H9.4998Z"\n    fill="white" />\n</svg>',
      "image/svg+xml",
    ).firstChild;
  }
  var Yi = "picture-in-picture",
    Xi = "inline",
    Zi = "fullscreen",
    Ji = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "switchPIP", function (t) {
            if (!e.isPIPAvailable()) return !1;
            t.stopPropagation(),
              e.isPip
                ? (e.exitPIP(),
                  e.emitUserAction(t, "change_pip", { props: "pip", from: !0, to: !1 }),
                  e.setAttr("data-state", "normal"))
                : 4 === e.player.media.readyState &&
                  (e.requestPIP(),
                  e.emitUserAction(t, "change_pip", { props: "pip", from: !1, to: !0 }),
                  e.setAttr("data-state", "pip"));
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                "boolean" == typeof e.player.config.pip && (e.config.showIcon = e.player.config.pip);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                this.isPIPAvailable() &&
                  (p(l(i.prototype), "afterCreate", this).call(this),
                  (this.pMode = Xi),
                  this.initPipEvents(),
                  this.config.showIcon && this.initIcons(),
                  this.once(re, function () {
                    e.config.showIcon &&
                      (x.removeClass(e.find(".xgplayer-icon"), "xg-icon-disable"), e.bind("click", e.switchPIP));
                  }));
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return { pipIcon: { icon: zi, class: "xg-get-pip" }, pipIconExit: { icon: Ki, class: "xg-exit-pip" } };
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this.icons;
                this.appendChild(".xgplayer-icon", e.pipIcon), this.appendChild(".xgplayer-icon", e.pipIconExit);
              },
            },
            {
              key: "initPipEvents",
              value: function () {
                var e = this,
                  t = this.player;
                (this.leavePIPCallback = function () {
                  var i = t.paused;
                  x.setTimeout(
                    e,
                    function () {
                      !i && t.mediaPlay();
                    },
                    0,
                  ),
                    !i && t.mediaPlay(),
                    e.setAttr("data-state", "normal"),
                    t.emit(ve, !1);
                }),
                  (this.enterPIPCallback = function (i) {
                    t.emit(ve, !0), (e.pipWindow = i.pictureInPictureWindow), e.setAttr("data-state", "pip");
                  }),
                  (this.onWebkitpresentationmodechanged = function (i) {
                    var n = t.media.webkitPresentationMode;
                    e.pMode === Zi && n !== Zi && t.onFullscreenChange(null, !1),
                      (e.pMode = n),
                      n === Yi ? e.enterPIPCallback(i) : n === Xi && e.leavePIPCallback(i);
                  }),
                  t.media &&
                    (t.media.addEventListener("enterpictureinpicture", this.enterPIPCallback),
                    t.media.addEventListener("leavepictureinpicture", this.leavePIPCallback),
                    i.checkWebkitSetPresentationMode(t.media) &&
                      t.media.addEventListener("webkitpresentationmodechanged", this.onWebkitpresentationmodechanged));
              },
            },
            {
              key: "requestPIP",
              value: function () {
                var e = this.player,
                  t = this.playerConfig;
                if (this.isPIPAvailable() && !this.isPip)
                  try {
                    var n = t.poster;
                    return (
                      n && (e.media.poster = "String" === x.typeOf(n) ? n : n.poster),
                      i.checkWebkitSetPresentationMode(e.media)
                        ? e.media.webkitSetPresentationMode("picture-in-picture")
                        : e.media.requestPictureInPicture(),
                      !0
                    );
                  } catch (o) {
                    return console.error("requestPiP", o), !1;
                  }
              },
            },
            {
              key: "exitPIP",
              value: function () {
                var e = this.player;
                try {
                  return (
                    this.isPIPAvailable() &&
                      this.isPip &&
                      (i.checkWebkitSetPresentationMode(e.media)
                        ? e.media.webkitSetPresentationMode("inline")
                        : document.exitPictureInPicture()),
                    !0
                  );
                } catch (t) {
                  return console.error("exitPIP", t), !1;
                }
              },
            },
            {
              key: "isPip",
              get: function () {
                var e = this.player;
                return (
                  (document.pictureInPictureElement && document.pictureInPictureElement === e.media) ||
                  e.media.webkitPresentationMode === Yi
                );
              },
            },
            {
              key: "isPIPAvailable",
              value: function () {
                var e = this.player.media;
                return (
                  ("Boolean" !== x.typeOf(document.pictureInPictureEnabled) || document.pictureInPictureEnabled) &&
                  (("Boolean" === x.typeOf(e.disablePictureInPicture) && !e.disablePictureInPicture) ||
                    (e.webkitSupportsPresentationMode && "Function" === x.typeOf(e.webkitSetPresentationMode)))
                );
              },
            },
            {
              key: "destroy",
              value: function () {
                p(l(i.prototype), "destroy", this).call(this);
                var e = this.player;
                e.media.removeEventListener("enterpictureinpicture", this.enterPIPCallback),
                  e.media.removeEventListener("leavepictureinpicture", this.leavePIPCallback),
                  i.checkWebkitSetPresentationMode(e.media) &&
                    e.media.removeEventListener("webkitpresentationmodechanged", this.onWebkitpresentationmodechanged),
                  this.exitPIP(),
                  this.unbind("click", this.btnClick);
              },
            },
            {
              key: "render",
              value: function () {
                if (this.config.showIcon && this.isPIPAvailable())
                  return '<xg-icon class="xgplayer-pip">\n      <div class="xgplayer-icon xg-icon-disable">\n      </div>\n      '.concat(
                    Wt(this, "PIP", this.playerConfig.isHideTips),
                    "\n    </xg-icon>",
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "pip";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { position: Qe.CONTROLS_RIGHT, index: 6, showIcon: !1 };
              },
            },
            {
              key: "checkWebkitSetPresentationMode",
              value: function (e) {
                return "function" == typeof e.webkitSetPresentationMode;
              },
            },
          ],
        ),
        i
      );
    })(Oi);
  function $i() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="10 0 24 40">\n  <path transform="scale(0.038 0.028)" d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var Qi = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        return (
          n(this, i),
          s(u((o = t.call(this, e))), "playNext", function (e) {
            var t = u(o).player;
            e.preventDefault(),
              e.stopPropagation(),
              o.idx + 1 < o.config.urlList.length
                ? (o.idx++, o.nextHandler(o.config.urlList[o.idx], o.idx), t.emit(ke, o.idx + 1))
                : (o.nextHandler(), t.emit(ke));
          }),
          (o.idx = -1),
          o
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                this.config.urlList &&
                  0 !== this.config.urlList.length &&
                  (this.appendChild(".xgplayer-icon", this.icons.playNext), this.initEvents());
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return { playNext: $i };
              },
            },
            {
              key: "initEvents",
              value: function () {
                this.nextHandler = this.hook("nextClick", this.changeSrc);
                var e = "mobile" === O.device ? "touchend" : "click";
                this.bind(e, this.playNext), this.show();
              },
            },
            {
              key: "changeSrc",
              value: function (e) {
                var t = this.player;
                e &&
                  (t.pause(),
                  (t.currentTime = 0),
                  t.switchURL ? t.switchURL(e) : (t.src = e),
                  (t.config.url = e),
                  t.play());
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbind(["touchend", "click"], this.playNext);
              },
            },
            {
              key: "render",
              value: function () {
                if (this.config.urlList && 0 !== this.config.urlList.length)
                  return '\n     <xg-icon class="xgplayer-playnext">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(
                    Wt(this, "PLAYNEXT_TIPS", this.playerConfig.isHideTips),
                    "\n     </xg-icon>\n    ",
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "playNext";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { position: Qe.CONTROLS_LEFT, index: 1, url: null, urlList: [] };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    en = { exports: {} };
  en.exports = function e(t, i, n) {
    var o,
      r,
      s = window,
      a = "application/octet-stream",
      l = n || a,
      c = t,
      u = !i && !n && c,
      h = document.createElement("a"),
      d = function (e) {
        return String(e);
      },
      f = s.Blob || s.MozBlob || s.WebKitBlob || d,
      p = i || "download";
    if (
      ((f = f.call ? f.bind(s) : Blob),
      "true" === String(this) && ((l = (c = [c, l])[0]), (c = c[1])),
      u && u.length < 2048 && ((p = u.split("/").pop().split("?")[0]), (h.href = u), -1 !== h.href.indexOf(u)))
    ) {
      var g = new XMLHttpRequest();
      return (
        g.open("GET", u, !0),
        (g.responseType = "blob"),
        (g.onload = function (t) {
          e(t.target.response, p, a);
        }),
        setTimeout(function () {
          g.send();
        }, 0),
        g
      );
    }
    if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)) {
      if (!(c.length > 2096103.424 && f !== d)) return navigator.msSaveBlob ? navigator.msSaveBlob(k(c), p) : b(c);
      l = (c = k(c)).type || a;
    } else if (/([\x80-\xff])/.test(c)) {
      for (var v = 0, y = new Uint8Array(c.length), m = y.length; v < m; ++v) y[v] = c.charCodeAt(v);
      c = new f([y], { type: l });
    }
    function k(e) {
      for (
        var t = e.split(/[:;,]/),
          i = t[1],
          n = ("base64" == t[2] ? atob : decodeURIComponent)(t.pop()),
          o = n.length,
          r = 0,
          s = new Uint8Array(o);
        r < o;
        ++r
      )
        s[r] = n.charCodeAt(r);
      return new f([s], { type: i });
    }
    function b(e, t) {
      if ("download" in h)
        return (
          (h.href = e),
          h.setAttribute("download", p),
          (h.className = "download-js-link"),
          (h.innerHTML = "downloading..."),
          (h.style.display = "none"),
          document.body.appendChild(h),
          setTimeout(function () {
            h.click(),
              document.body.removeChild(h),
              !0 === t &&
                setTimeout(function () {
                  s.URL.revokeObjectURL(h.href);
                }, 250);
          }, 66),
          !0
        );
      if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))
        return (
          /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, a)),
          window.open(e) ||
            (confirm(
              "Displaying New Document\n\nUse Save As... to download, then click back to return to this page.",
            ) &&
              (location.href = e)),
          !0
        );
      var i = document.createElement("iframe");
      document.body.appendChild(i),
        !t && /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, a)),
        (i.src = e),
        setTimeout(function () {
          document.body.removeChild(i);
        }, 333);
    }
    if (((o = c instanceof f ? c : new f([c], { type: l })), navigator.msSaveBlob)) return navigator.msSaveBlob(o, p);
    if (s.URL) b(s.URL.createObjectURL(o), !0);
    else {
      if ("string" == typeof o || o.constructor === d)
        try {
          return b("data:" + l + ";base64," + s.btoa(o));
        } catch (C) {
          return b("data:" + l + "," + encodeURIComponent(o));
        }
      ((r = new FileReader()).onload = function (e) {
        b(this.result);
      }),
        r.readAsDataURL(o);
    }
    return !0;
  };
  var tn = en.exports;
  function nn() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(-488.000000, -340.000000)" fill="#FFFFFF">\n      <g id="Group-2">\n        <g id="volme_big-copy" transform="translate(488.000000, 340.000000)">\n          <rect id="Rectangle-18" x="11" y="4" width="2" height="12" rx="1"></rect>\n          <rect id="Rectangle-2" x="3" y="18" width="18" height="2" rx="1"></rect>\n          <rect id="Rectangle-2" transform="translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) " x="1.5" y="16.5" width="5" height="2" rx="1"></rect><rect id="Rectangle-2-Copy-3" transform="translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) " x="17.5" y="16.5" width="5" height="2" rx="1"></rect>\n          <path d="M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z" id="Combined-Shape" transform="translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) "></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var on = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        return (
          n(this, i),
          s(u((o = t.call(this, e))), "download", function (e) {
            if (!o.isLock) {
              o.emitUserAction(e, "download");
              var t = o.getAbsoluteURL(o.player.src);
              tn(t),
                (o.isLock = !0),
                (o.timer = window.setTimeout(function () {
                  (o.isLock = !1), window.clearTimeout(o.timer), (o.timer = null);
                }, 300));
            }
          }),
          (o.timer = null),
          (o.isLock = !1),
          o
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                p(l(i.prototype), "afterCreate", this).call(this),
                  this.config.disable ||
                    (this.appendChild(".xgplayer-icon", this.icons.download),
                    this.bind(["click", "touchend"], this.download));
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return { download: nn };
              },
            },
            {
              key: "getAbsoluteURL",
              value: function (e) {
                if (!e.match(/^https?:\/\//)) {
                  var t = document.createElement("div");
                  (t.innerHTML = '<a href="'.concat(e, '">x</a>')), (e = t.firstChild.href);
                }
                return e;
              },
            },
            {
              key: "destroy",
              value: function () {
                p(l(i.prototype), "destroy", this).call(this),
                  this.unbind(["click", "touchend"], this.download),
                  window.clearTimeout(this.timer),
                  (this.timer = null);
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable)
                  return '<xg-icon class="xgplayer-download">\n   <div class="xgplayer-icon">\n   </div>\n   '.concat(
                    Wt(this, "DOWNLOAD_TIPS", this.playerConfig.isHideTips),
                    "\n    </xg-icon>",
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "download";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { position: Qe.CONTROLS_RIGHT, index: 3, disable: !0 };
              },
            },
          ],
        ),
        i
      );
    })(Oi),
    rn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                "boolean" == typeof e.player.config.screenShot && (e.config.disable = !e.player.config.screenShot);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                p(l(i.prototype), "afterCreate", this).call(this),
                  this.appendChild(".xgplayer-icon", this.icons.screenshotIcon);
                var e = this.config;
                (this.initSize = function (t) {
                  e.fitVideo && ((e.width = t.vWidth), (e.height = t.vHeight));
                }),
                  this.once(ge, this.initSize);
              },
            },
            {
              key: "onPluginsReady",
              value: function () {
                this.show(),
                  (this.onClickBtn = this.onClickBtn.bind(this)),
                  this.bind(["click", "touchend"], this.onClickBtn);
              },
            },
            {
              key: "saveScreenShot",
              value: function (e, t) {
                var i = document.createElement("a");
                (i.href = e), (i.download = t);
                var n = document.createEvent("MouseEvents");
                n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(n);
              },
            },
            {
              key: "createCanvans",
              value: function (e, t) {
                var i = document.createElement("canvas");
                (this.canvasCtx = i.getContext("2d")),
                  (this.canvas = i),
                  (i.width = e || this.config.width),
                  (i.height = t || this.config.height);
              },
            },
            {
              key: "onClickBtn",
              value: function (e) {
                var t = this;
                e.preventDefault(),
                  e.stopPropagation(),
                  this.emitUserAction(e, "shot"),
                  this.shot().then(function (e) {
                    t.emit(me, e), t.saveScreenShot(e, t.config.name + t.config.format);
                  });
              },
            },
            {
              key: "shot",
              value: function (e, t) {
                var i = this,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : { quality: 0.92, type: "image/png" },
                  o = this.config,
                  r = this.player,
                  s = n.quality || o.quality,
                  a = n.type || o.type;
                return new Promise(function (n, l) {
                  var c = null;
                  r.media.canvas
                    ? (c = r.media.canvas)
                    : (i.canvas
                        ? ((i.canvas.width = e || o.width), (i.canvas.height = t || o.height))
                        : i.createCanvans(e, t),
                      i.canvasCtx.drawImage(r.media, 0, 0, e || o.width, t || o.height),
                      (c = i.canvas));
                  var u = c.toDataURL(a, s).replace(a, "image/octet-stream");
                  n((u = u.replace(/^data:image\/[^;]+/, "data:application/octet-stream")));
                });
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return { screenshotIcon: null };
              },
            },
            {
              key: "destroy",
              value: function () {
                p(l(i.prototype), "destroy", this).call(this),
                  this.unbind(["click", "touchend"], this.onClickBtn),
                  this.off(ge, this.initSize);
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable) {
                  var e = this.icons.screenshotIcon ? "xgplayer-icon" : "xgplayer-icon btn-text",
                    t = "SCREENSHOT";
                  return '\n      <xg-icon class="xgplayer-shot">\n      <div class="'
                    .concat(e, '">\n      ')
                    .concat(
                      this.icons.screenshotIcon
                        ? ""
                        : '<span lang-key="'.concat(this.i18nKeys[t], '">').concat(this.i18n[t], "</span>"),
                      " \n      </div>\n    </xg-icon>",
                    );
                }
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "screenShot";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  position: Qe.CONTROLS_RIGHT,
                  index: 5,
                  quality: 0.92,
                  type: "image/png",
                  format: ".png",
                  width: 600,
                  height: 337,
                  fitVideo: !0,
                  disable: !1,
                  name: "screenshot",
                };
              },
            },
          ],
        ),
        i
      );
    })(Oi),
    sn = (function () {
      function e(t) {
        n(this, e),
          (this.config = t.config),
          (this.parent = t.root),
          (this.root = x.createDom("ul", "", {}, "xg-options-list ".concat(this.config.className))),
          t.root.appendChild(this.root),
          (this.onItemClick = this.onItemClick.bind(this)),
          this.renderItemList();
        var i = "mobile" === O.device ? "touchend" : "click";
        this._delegates = nt.delegate.call(this, this.root, "li", i, this.onItemClick);
      }
      return (
        r(e, [
          {
            key: "renderItemList",
            value: function (e) {
              var t = this,
                i = this.config,
                n = this.root;
              e ? (i.data = e) : (e = i.data),
                i.style &&
                  Object.keys(i.style).map(function (e) {
                    n.style[e] = i[e];
                  }),
                e.length > 0 && (this.attrKeys = Object.keys(e[0])),
                (this.root.innerHTML = ""),
                e.map(function (e, i) {
                  var n = e.selected ? "option-item selected" : "option-item";
                  (e["data-index"] = i),
                    t.root.appendChild(x.createDom("li", "<span>".concat(e.showText, "</span>"), e, n));
                });
            },
          },
          {
            key: "onItemClick",
            value: function (e) {
              e.delegateTarget || (e.delegateTarget = e.target);
              var t = e.delegateTarget;
              if (t && x.hasClass(t, "selected")) return !1;
              var i = "function" == typeof this.config.onItemClick ? this.config.onItemClick : null,
                n = this.root.querySelector(".selected");
              x.addClass(t, "selected"),
                n && x.removeClass(n, "selected"),
                i(e, { from: n ? this.getAttrObj(n, this.attrKeys) : null, to: this.getAttrObj(t, this.attrKeys) });
            },
          },
          {
            key: "getAttrObj",
            value: function (e, t) {
              if (!e || !t) return {};
              var i = {};
              t.map(function (t) {
                i[t] = e.getAttribute(t);
              });
              var n = e.getAttribute("data-index");
              return n && (i.index = Number(n)), i;
            },
          },
          {
            key: "show",
            value: function () {
              x.removeClass(this.root, "hide"), x.addClass(this.root, "active");
            },
          },
          {
            key: "hide",
            value: function () {
              x.removeClass(this.root, "active"), x.addClass(this.root, "hide");
            },
          },
          {
            key: "destroy",
            value: function () {
              this._delegates &&
                (this._delegates.map(function (e) {
                  e.destroy && e.destroy();
                }),
                (this._delegates = null)),
                (this.root.innerHTML = null),
                this.parent.removeChild(this.root),
                (this.root = null);
            },
          },
        ]),
        e
      );
    })(),
    an = "rightSide",
    ln = "middle",
    cn = "mobile" === O.device,
    un = (function (e) {
      a(o, e);
      var t = d(o);
      function o(e) {
        var i;
        return (
          n(this, o),
          s(u((i = t.call(this, e))), "onEnter", function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              i.emit("icon_mouseenter", { pluginName: i.pluginName }),
              i.toggle(!0);
          }),
          s(u(i), "onLeave", function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              i.emit("icon_mouseleave", { pluginName: i.pluginName }),
              i.config.listType !== an && i.isActive && i.toggle(!1);
          }),
          s(u(i), "onListEnter", function (e) {
            console.log("onListEnter"), (i.enterType = 2);
          }),
          s(u(i), "onListLeave", function (e) {
            console.log("onListLeave", e.target), (i.enterType = 0), i.isActive && i.toggle(!1);
          }),
          (i.isIcons = !1),
          (i.isActive = !1),
          (i.curValue = null),
          (i.curIndex = 0),
          i
        );
      }
      return (
        r(
          o,
          [
            {
              key: "updateLang",
              value: function (e) {
                this.renderItemList(this.config.list, this.curIndex);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this,
                  t = this.config;
                this.initIcons(),
                  cn && t.listType !== ln && (t.listType = "rightSide"),
                  t.hidePortrait && x.addClass(this.root, "portrait"),
                  this.once(q, function () {
                    t.list && t.list.length > 0 && (e.renderItemList(t.list), e.show());
                  }),
                  cn &&
                    this.on(Q, function () {
                      e.isActive && (e.optionsList && e.optionsList.hide(), (e.isActive = !1));
                    }),
                  (this.activeEvent = cn ? "touchend" : "mouseenter"),
                  this.bind(this.activeEvent, this.onEnter),
                  this.bind("mouseleave", this.onLeave),
                  this.isIcons && this.bind("click", this.onIconClick);
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this,
                  t = this.icons,
                  i = Object.keys(t),
                  n = !1;
                i.length > 0 &&
                  (i.forEach(function (i) {
                    e.appendChild(".xgplayer-icon", t[i]), !n && (n = t[i]);
                  }),
                  (this.isIcons = n)),
                  n ||
                    (this.appendChild(".xgplayer-icon", x.createDom("span", "", {}, "icon-text")),
                    x.addClass(this.find(".xgplayer-icon"), "btn-text"));
              },
            },
            {
              key: "show",
              value: function () {
                !this.config.list || this.config.list.length < 2 || x.addClass(this.root, "show");
              },
            },
            {
              key: "hide",
              value: function () {
                x.removeClass(this.root, "show");
              },
            },
            {
              key: "getTextByLang",
              value: function (e, t, n) {
                if (void 0 === e) return "";
                var o = this.config.list;
                !n && (n = this.player.lang),
                  (t = !t || x.isUndefined(e[t]) ? "text" : t),
                  "number" == typeof e && (e = o[e]);
                try {
                  return "object" === i(e[t]) ? e[t][n] || e[t].zh : e[t];
                } catch (r) {
                  return console.warn(r), "";
                }
              },
            },
            {
              key: "toggle",
              value: function (e) {
                if (e !== this.isActive) {
                  var t = this.player.controls,
                    i = this.config.listType;
                  e
                    ? ("rightSide" === i ? t.blur() : t.focus(), this.optionsList && this.optionsList.show())
                    : ("rightSide" === i ? t.focus() : t.focusAwhile(), this.optionsList && this.optionsList.hide()),
                    (this.isActive = e);
                }
              },
            },
            {
              key: "onItemClick",
              value: function (e, t) {
                e.preventDefault(), e.stopPropagation();
                var i = this.config,
                  n = i.listType,
                  o = i.list;
                (this.curIndex = t.to.index),
                  (this.curItem = o[this.curIndex]),
                  this.changeCurrentText(),
                  (this.config.isItemClickHide || cn || n === an) && this.toggle(!1);
              },
            },
            { key: "onIconClick", value: function (e) {} },
            {
              key: "changeCurrentText",
              value: function () {
                if (!this.isIcons) {
                  var e = this.config.list,
                    t = e[this.curIndex < e.length ? this.curIndex : 0];
                  t && (this.find(".icon-text").innerHTML = this.getTextByLang(t, "iconText"));
                }
              },
            },
            {
              key: "renderItemList",
              value: function (e, t) {
                var i = this,
                  n = this.config,
                  o = this.optionsList,
                  r = this.player;
                if (("number" == typeof t && ((this.curIndex = t), (this.curItem = n.list[t])), o))
                  return o.renderItemList(e), void this.changeCurrentText();
                var s = {
                  config: {
                    data: e || [],
                    className: n.listType === an ? "right-side" : "",
                    onItemClick: function (e, t) {
                      i.onItemClick(e, t);
                    },
                  },
                  root: n.listType === an ? r.root : this.root,
                };
                this.config.isShowIcon && ((this.optionsList = new sn(s)), this.changeCurrentText(), this.show());
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbind(this.activeEvent, this.onEnter),
                  this.unbind("mouseleave", this.onLeave),
                  this.optionsList && (this.optionsList.destroy(), (this.optionsList = null));
              },
            },
            {
              key: "render",
              value: function () {
                if (this.config.isShowIcon)
                  return '<xg-icon class="xg-options-icon '.concat(
                    this.config.className || "",
                    '">\n    <div class="xgplayer-icon">\n    </div>\n   </xg-icon>',
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "optionsIcon";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  position: Qe.CONTROLS_RIGHT,
                  index: 100,
                  list: [],
                  listType: "middle",
                  listStyle: {},
                  hidePortrait: !0,
                  isShowIcon: !1,
                  isItemClickHide: !0,
                };
              },
            },
          ],
        ),
        o
      );
    })(nt),
    hn = (function (e) {
      a(o, e);
      var i = d(o);
      function o(e) {
        var t;
        return n(this, o), ((t = i.call(this, e)).curTime = 0), (t.isPaused = !0), t;
      }
      return (
        r(
          o,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                var t = e.config.list;
                Array.isArray(t) &&
                  t.length > 0 &&
                  (e.config.list = t.map(function (e) {
                    return !e.text && e.name && (e.text = e.name), e.text || (e.text = e.definition), e;
                  }));
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                p(l(o.prototype), "afterCreate", this).call(this),
                  this.on("resourceReady", function (t) {
                    e.changeDefinitionList(t);
                  }),
                  this.on(fe, function (t) {
                    e.renderItemList(e.config.list, t.to);
                  }),
                  this.player.definitionList.length < 2 && this.hide();
              },
            },
            {
              key: "show",
              value: function () {
                !this.config.list || this.config.list.length < 2 || x.addClass(this.root, "show");
              },
            },
            {
              key: "initDefinition",
              value: function () {
                var e = this.config,
                  t = e.list,
                  i = e.defaultDefinition;
                if (t.length > 0) {
                  var n = null;
                  t.map(function (e) {
                    e.definition === i && (n = e);
                  }),
                    n || (n = t[0]),
                    this.changeDefinition(n);
                }
              },
            },
            {
              key: "renderItemList",
              value: function () {
                var e = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.list || [],
                  n = arguments.length > 1 ? arguments[1] : void 0,
                  r = n && n.definition ? n.definition : this.config.defaultDefinition;
                n &&
                  i.forEach(function (e) {
                    e.selected = !1;
                  });
                var s = 0,
                  a = i.map(function (i, n) {
                    var o = t(t({}, i), {}, { showText: e.getTextByLang(i) || i.definition, selected: !1 });
                    return (i.selected || (i.definition && i.definition == r)) && ((o.selected = !0), (s = n)), o;
                  });
                p(l(o.prototype), "renderItemList", this).call(this, a, s);
              },
            },
            {
              key: "changeDefinitionList",
              value: function (e) {
                Array.isArray(e) &&
                  ((this.config.list = e.map(function (e) {
                    return !e.text && e.name && (e.text = e.name), e.text || (e.text = e.definition), e;
                  })),
                  this.renderItemList(),
                  this.config.list.length < 2 ? this.hide() : this.show());
              },
            },
            {
              key: "changeDefinition",
              value: function (e, t) {
                this.player.changeDefinition(e, t);
              },
            },
            {
              key: "onItemClick",
              value: function (e, t) {
                var i = this.player.definitionList;
                p(l(o.prototype), "onItemClick", this).apply(this, arguments),
                  this.emitUserAction(e, "change_definition", { from: t.from, to: t.to });
                for (var n = 0; n < i.length; n++)
                  t.to && i[n].definition === t.to.definition && (t.to.url = i[n].url),
                    t.from && i[n].definition === t.from.definition && (t.from.url = i[n].url);
                this.player.changeDefinition(t.to, t.from);
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "definition";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return t(
                  t({}, un.defaultConfig),
                  {},
                  {
                    position: Qe.CONTROLS_RIGHT,
                    index: 3,
                    list: [],
                    defaultDefinition: "",
                    disable: !1,
                    hidePortrait: !1,
                    className: "xgplayer-definition",
                    isShowIcon: !0,
                  },
                );
              },
            },
          ],
        ),
        o
      );
    })(un),
    dn = (function (e) {
      a(o, e);
      var i = d(o);
      function o(e) {
        var t;
        return n(this, o), ((t = i.call(this, e)).curRate = 1), t;
      }
      return (
        r(
          o,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                var t = e.player.config.playbackRate,
                  i = t ? (Array.isArray(t) ? t : e.config.list) : [];
                Array.isArray(i) &&
                  (e.config.list = i.map(function (e) {
                    return (
                      "number" == typeof e
                        ? (e = { rate: e, text: "".concat(e, "x") })
                        : !e.text && e.rate && (e.text = "".concat(e.rate, "x")),
                      e
                    );
                  }));
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                p(l(o.prototype), "afterCreate", this).call(this),
                  this.on(X, function () {
                    e.curValue !== e.player.playbackRate && e.renderItemList();
                  }),
                  this.renderItemList();
              },
            },
            {
              key: "show",
              value: function () {
                this.config.list && 0 !== this.config.list.length && p(l(o.prototype), "show", this).call(this);
              },
            },
            {
              key: "onItemClick",
              value: function (e, t) {
                p(l(o.prototype), "onItemClick", this).apply(this, arguments);
                var i = e.delegateTarget,
                  n = Number(i.getAttribute("rate"));
                if (!n || n === this.curValue) return !1;
                var r = { playbackRate: { from: this.player.playbackRate, to: n } };
                this.emitUserAction(e, "change_rate", { props: r }),
                  (this.curValue = n),
                  (this.player.playbackRate = n);
              },
            },
            {
              key: "renderItemList",
              value: function () {
                var e = this,
                  t = this.player.playbackRate || 1;
                this.curValue = t;
                var i = -1,
                  n = this.config.list.map(function (n, o) {
                    var r = { rate: n.rate };
                    return r.rate === t && ((r.selected = !0), (i = o)), (r.showText = e.getTextByLang(n)), r;
                  });
                p(l(o.prototype), "renderItemList", this).call(this, n, i);
              },
            },
            {
              key: "changeCurrentText",
              value: function () {
                if (!this.isIcons) {
                  var e = this.config.list,
                    t = e[this.curIndex < e.length ? this.curIndex : 0],
                    i = "";
                  (i =
                    !t || this.curIndex < 0
                      ? "".concat(this.player.playbackRate, "x")
                      : this.getTextByLang(t, "iconText")),
                    (this.find(".icon-text").innerHTML = i);
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                p(l(o.prototype), "destroy", this).call(this);
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "playbackRate";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return t(
                  t({}, un.defaultConfig),
                  {},
                  {
                    position: Qe.CONTROLS_RIGHT,
                    index: 4,
                    list: [2, 1.5, 1, 0.75, 0.5],
                    className: "xgplayer-playbackrate",
                    isShowIcon: !0,
                    hidePortrait: !1,
                  },
                );
              },
            },
          ],
        ),
        o
      );
    })(un);
  function fn() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 -5 31 40">\n  <path fill="#fff" transform="scale(1.3, 1.3)" class=\'path_full\' d="M9,10v1a.9.9,0,0,1-1,1,.9.9,0,0,1-1-1V9A.9.9,0,0,1,8,8h2a.9.9,0,0,1,1,1,.9.9,0,0,1-1,1Zm6,4V13a1,1,0,0,1,2,0v2a.9.9,0,0,1-1,1H14a1,1,0,0,1,0-2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  function pn() {
    return new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 -5 31 40">\n  <path fill="#fff" transform="scale(1.3, 1.3)" d="M9,10V9a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2a.9.9,0,0,1-1,1H8a.9.9,0,0,1-1-1,.9.9,0,0,1,1-1Zm6,4v1a1,1,0,0,1-2,0V13a.9.9,0,0,1,1-1h2a1,1,0,0,1,0,2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z"></path>\n</svg>\n',
      "image/svg+xml",
    ).firstChild;
  }
  var gn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                "boolean" == typeof e.player.config.cssFullscreen &&
                  (e.config.disable = !e.player.config.cssFullscreen);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                p(l(i.prototype), "afterCreate", this).call(this),
                  this.config.disable ||
                    (this.config.target && (this.playerConfig.fullscreenTarget = this.config.target),
                    this.initIcons(),
                    this.on(he, function (t) {
                      e.animate(t);
                    }),
                    (this.btnClick = this.btnClick.bind(this)),
                    (this.handleCssFullscreen = this.hook("cssFullscreen_change", this.btnClick, {
                      pre: function (e) {
                        e.preventDefault(), e.stopPropagation();
                      },
                    })),
                    this.bind(["click", "touchend"], this.handleCssFullscreen));
              },
            },
            {
              key: "initIcons",
              value: function () {
                var e = this.icons,
                  t = this.find(".xgplayer-icon");
                t.appendChild(e.cssFullscreen), t.appendChild(e.exitCssFullscreen);
              },
            },
            {
              key: "btnClick",
              value: function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = this.player.isCssfullScreen;
                this.emitUserAction(e, "switch_cssfullscreen", { cssfullscreen: t }),
                  t ? this.player.exitCssFullscreen() : this.player.getCssFullscreen();
              },
            },
            {
              key: "animate",
              value: function (e) {
                this.root &&
                  (e ? this.setAttr("data-state", "full") : this.setAttr("data-state", "normal"), this.switchTips(e));
              },
            },
            {
              key: "switchTips",
              value: function (e) {
                var t = this.i18nKeys,
                  i = this.find(".xg-tips");
                i && this.changeLangTextKey(i, e ? t.EXITCSSFULLSCREEN_TIPS : t.CSSFULLSCREEN_TIPS);
              },
            },
            {
              key: "registerIcons",
              value: function () {
                return {
                  cssFullscreen: { icon: fn, class: "xg-get-cssfull" },
                  exitCssFullscreen: { icon: pn, class: "xg-exit-cssfull" },
                };
              },
            },
            {
              key: "destroy",
              value: function () {
                p(l(i.prototype), "destroy", this).call(this), this.unbind(["click", "touchend"], this.btnClick);
              },
            },
            {
              key: "render",
              value: function () {
                if (!this.config.disable)
                  return "<xg-icon class='xgplayer-cssfullscreen'>\n    <div class=\"xgplayer-icon\">\n    </div>\n    ".concat(
                    Wt(this, "CSSFULLSCREEN_TIPS", this.playerConfig.isHideTips),
                    "\n    </xg-icon>",
                  );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "cssFullscreen";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { position: Qe.CONTROLS_RIGHT, index: 1, disable: !1, target: null };
              },
            },
          ],
        ),
        i
      );
    })(Oi),
    vn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                (this.clickHandler = this.hook("errorRetry", this.errorRetry, {
                  pre: function (e) {
                    e.preventDefault(), e.stopPropagation();
                  },
                })),
                  (this.onError = this.hook("showError", this.handleError)),
                  this.bind(".xgplayer-error-refresh", "click", this.clickHandler),
                  this.on(B, function (t) {
                    e.onError(t);
                  });
              },
            },
            {
              key: "errorRetry",
              value: function (e) {
                this.emitUserAction(e, "error_retry", {}), this.player.retry();
              },
            },
            {
              key: "handleError",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = this.player,
                  i = e.errorType,
                  n = t.errorNote ? this.i18n[t.errorNote] : "";
                if (!n)
                  switch (i) {
                    case "decoder":
                      n = this.i18n.MEDIA_ERR_DECODE;
                      break;
                    case "network":
                      n = this.i18n.MEDIA_ERR_NETWORK;
                      break;
                    default:
                      n = this.i18n.MEDIA_ERR_SRC_NOT_SUPPORTED;
                  }
                (this.find(".xgplayer-error-text").innerHTML = n),
                  (this.find(".xgplayer-error-tips").innerHTML = ""
                    .concat(this.i18n.REFRESH_TIPS, '<span class="xgplayer-error-refresh">')
                    .concat(this.i18n.REFRESH, "</span>"));
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbind(".xgplayer-error-refresh", "click", this.clickHandler);
              },
            },
            {
              key: "render",
              value: function () {
                return '<xg-error class="xgplayer-error">\n      <div class="xgplayer-errornote">\n       <span class="xgplayer-error-text"></span>\n       <span class="xgplayer-error-tips"><em class="xgplayer-error-refresh"></em></span>\n      </div>\n    </xg-error>';
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "error";
              },
            },
          ],
        ),
        i
      );
    })(nt),
    yn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                (this.intervalId = 0),
                  (this.customConfig = null),
                  this.bind(".highlight", ["click", "touchend"], function (t) {
                    (e.config.onClick || e.customOnClick) &&
                      (t.preventDefault(),
                      t.stopPropagation(),
                      e.customOnClick ? e.customOnClick(t) : e.config.onClick(t));
                  }),
                  (this.player.showPrompt = function () {
                    e.show.apply(e, arguments);
                  }),
                  (this.player.hidePrompt = function () {
                    e.hide();
                  });
              },
            },
            {
              key: "setStyle",
              value: function (e) {
                var t = this;
                Object.keys(e).map(function (i) {
                  t.root.style[i] = e[i];
                });
              },
            },
            {
              key: "show",
              value: function (e) {
                var t = this,
                  i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
                if (e) {
                  this.customOnClick = n;
                  var o = this.config.interval;
                  this.intervalId && (clearTimeout(this.intervalId), (this.intervalId = null)),
                    x.addClass(this.root, "show"),
                    "arrow" === i.mode && x.addClass(this.root, "arrow"),
                    (this.find(".xgplayer-prompt-detail").innerHTML =
                      "string" == typeof e
                        ? e
                        : "".concat(e.text || "") +
                          "".concat(e.highlight ? '<i class="highlight">'.concat(e.highlight, "</i>") : "")),
                    i.style && this.setStyle(i.style);
                  var r = "boolean" == typeof i.autoHide ? i.autoHide : this.config.autoHide;
                  if (r) {
                    var s = i.interval || o;
                    this.intervalId = setTimeout(function () {
                      t.hide();
                    }, s);
                  }
                }
              },
            },
            {
              key: "hide",
              value: function () {
                x.removeClass(this.root, "show"),
                  x.removeClass(this.root, "arrow"),
                  this.root.removeAttribute("style"),
                  (this.customOnClick = null);
              },
            },
            {
              key: "render",
              value: function () {
                return '<xg-prompt class="xgplayer-prompt '.concat(
                  at.CONTROLS_FOLLOW,
                  '">\n    <span class="xgplayer-prompt-detail"></span>\n    </xg-prompt>',
                );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "prompt";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  interval: 3e3,
                  style: {},
                  mode: "arrow",
                  autoHide: !0,
                  detail: { text: "", highlight: "" },
                  onClick: function () {},
                };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    mn = { time: 0, text: "", id: 1, duration: 1, color: "#fff", style: {}, width: 6, height: 6 };
  function kn(e) {
    Object.keys(mn).map(function (t) {
      void 0 === e[t] && (e[t] = mn[t]);
    });
  }
  var bn = {
    _updateDotDom: function (e, t) {
      if (t) {
        var i = this.calcuPosition(e.time, e.duration),
          n = e.style || {};
        (n.left = "".concat(i.left, "%")),
          (n.width = "".concat(i.width, "%")),
          t.setAttribute("data-text", e.text),
          t.setAttribute("data-time", e.time),
          i.isMini ? x.addClass(t, "mini") : x.removeClass(t, "mini"),
          Object.keys(n).map(function (e) {
            t.style[e] = n[e];
          });
      }
    },
    initDots: function () {
      var e = this;
      this._ispots.map(function (t) {
        e.createDot(t, !1);
      }),
        (this.ispotsInit = !0);
    },
    createDot: function (e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        i = this.player.plugins.progress;
      if (i && (t && (kn(e), this._ispots.push(e)), this.ispotsInit || !t)) {
        var n = this.calcuPosition(e.time, e.duration),
          o = e.style || {};
        (o.left = "".concat(n.left, "%")), (o.width = "".concat(n.width, "%"));
        var r = "xgspot_".concat(e.id, " xgplayer-spot");
        n.isMini && (r += " mini");
        var s = x.createDom(
          "xg-spot",
          e.template || "",
          { "data-text": e.text, "data-time": e.time, "data-id": e.id },
          r,
        );
        Object.keys(o).map(function (e) {
          s.style[e] = o[e];
        }),
          i.outer && i.outer.appendChild(s);
      }
    },
    findDot: function (e) {
      if (this.player.plugins.progress) {
        var t = this._ispots.filter(function (t, i) {
          return t.id === e;
        });
        return t.length > 0 ? t[0] : null;
      }
    },
    updateDot: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = this.player.plugins.progress;
      if (i) {
        var n = this.findDot(e.id);
        if (
          (n &&
            Object.keys(e).map(function (t) {
              n[t] = e[t];
            }),
          this.ispotsInit)
        ) {
          var o = i.find('xg-spot[data-id="'.concat(e.id, '"]'));
          o && (this._updateDotDom(e, o), t && this.showDot(e.id));
        }
      }
    },
    deleteDot: function (e) {
      var t = this._ispots,
        i = this.player.plugins.progress;
      if (i) {
        for (var n = [], o = 0; o < t.length; o++) t[o].id === e && n.push(o);
        for (var r = n.length - 1; r >= 0; r--)
          if ((t.splice(n[r], 1), this.ispotsInit)) {
            var s = i.find('xg-spot[data-id="'.concat(e, '"]'));
            s && s.parentElement.removeChild(s);
          }
      }
    },
    deleteAllDots: function () {
      var e = this.player.plugins.progress;
      if (e)
        if (this.ispotsInit) {
          for (var t = e.root.getElementsByTagName("xg-spot"), i = t.length - 1; i >= 0; i--) e.outer.removeChild(t[i]);
          this._ispots = [];
        } else this._ispots = [];
    },
    updateAllDots: function () {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        i = this.player.plugins.progress;
      if (i)
        if (this.ispotsInit) {
          this._ispots = [];
          var n = i.root.getElementsByTagName("xg-spot"),
            o = n.length;
          if (o > t.length) for (var r = o - 1; r > t.length - 1; r--) i.outer.removeChild(n[r]);
          t.forEach(function (t, i) {
            i < o ? (n[i].setAttribute("data-id", "".concat(t.id)), e._ispots.push(t), e.updateDot(t)) : e.createDot(t);
          });
        } else this._ispots = t;
    },
    updateDuration: function () {
      var e = this,
        t = this.player.plugins.progress;
      t &&
        this._ispots.forEach(function (i) {
          var n = t.find('xg-spot[data-id="'.concat(i.id, '"]'));
          e._updateDotDom(i, n);
        });
    },
    getAllDotsDom: function () {
      var e = this.player.plugins.progress;
      return e ? e.root.getElementsByTagName("xg-spot") : [];
    },
    getDotDom: function (e) {
      var t = this.player.plugins.progress;
      if (t) return t.find('xg-spot[data-id="'.concat(e, '"]'));
    },
  };
  var Cn = {
      dragmove: "onProgressMove",
      dragstart: "onProgressDragStart",
      dragend: "onProgressDragEnd",
      click: "onProgressClick",
      mouseover: "onProgressMouseOver",
      mouseenter: "onProgressMove",
    },
    _n = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        return (
          n(this, i),
          s(u((o = t.call(this, e))), "onMousemove", function (e) {
            o.config.disable ||
              (x.hasClass(e.target, "xg-spot-content") && o.config.isHideThumbnailHover
                ? o.player.plugins.progress.onMouseLeave(e)
                : (o._state.f || x.hasClass(e.target, "xg-spot-content")) && (x.event(e), e.stopPropagation()));
          }),
          s(u(o), "onMousedown", function (e) {
            o.config.disable ||
              ((o._state.f || x.hasClass(e.target, "xg-spot-content")) && (x.event(e), e.stopPropagation()));
          }),
          s(u(o), "onMouseup", function (e) {
            if (o.isDrag) {
              var t = o.player.plugins.progress;
              t && t.pos && (t.onMouseUp(e), !t.pos.isEnter && t.onMouseLeave(e));
            }
          }),
          s(u(o), "onDotMouseLeave", function (e) {
            if (!o.config.disable) {
              o._curDot.removeEventListener("mouseleave", o.onDotMouseLeave), o.blurDot(e.target), (o._curDot = null);
              var t = o.player.plugins.progress;
              t && t.enableBlur(), o.show();
            }
          }),
          s(u(o), "onProgressMouseOver", function (e, t) {
            if (!o.config.disable && x.hasClass(t.target, "xgplayer-spot") && !o._curDot) {
              (o._curDot = t.target), o.focusDot(t.target), o._curDot.children.length > 0 && o.hide();
              var i = o.player.plugins.progress;
              i && i.disableBlur(), o._curDot.addEventListener("mouseleave", o.onDotMouseLeave);
            }
          }),
          (o._ispots = []),
          (o.videoPreview = null),
          (o.videothumbnail = null),
          (o.thumbnail = null),
          (o.timeStr = ""),
          (o._state = { now: 0, f: !1 }),
          o
        );
      }
      return (
        r(
          i,
          [
            {
              key: "beforeCreate",
              value: function (e) {
                var t = e.player.plugins.progress;
                t && (e.root = t.root);
              },
            },
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                (this._curDot = null),
                  (this.handlerSpotClick = this.hook("spotClick", function (t, i) {
                    i.currentTime && e.player.seek(i.currentTime);
                  })),
                  (this.transformTimeHook = this.hook("transformTime", function (t) {
                    e.setTimeContent(x.format(t));
                  })),
                  (function (e) {
                    var t = e.config,
                      i = e.player;
                    Object.keys(bn).map(function (t) {
                      e[t] = bn[t].bind(e);
                    });
                    var n = i.config.progressDot || t.ispots || [];
                    (e._ispots = n.map(function (e) {
                      return kn(e), e;
                    })),
                      (e.ispotsInit = !1),
                      e.on(z, function () {
                        e.ispotsInit ? e.updateDuration() : e.initDots();
                      });
                  })(this),
                  this.on(z, function () {
                    e.show();
                  }),
                  this.config.disable && this.disable(),
                  (this.extTextRoot = this.find(".xg-spot-ext-text"));
              },
            },
            {
              key: "setConfig",
              value: function (e) {
                var t = this;
                e &&
                  Object.keys(e).map(function (i) {
                    t.config[i] = e[i];
                  });
              },
            },
            {
              key: "onPluginsReady",
              value: function () {
                this.player.plugins.progress &&
                  ((this.previewLine = this.find(".xg-spot-line")),
                  (this.timePoint = this.find(".xgplayer-progress-point")),
                  (this.timeText = this.find(".xg-spot-time")),
                  (this.tipText = this.find(".spot-inner-text")),
                  (this._hasThumnail = !1),
                  this.registerThumbnail(),
                  this.bindEvents());
              },
            },
            {
              key: "bindEvents",
              value: function () {
                var e = this,
                  t = this.player.plugins.progress;
                if (
                  t &&
                  (Object.keys(Cn).map(function (i) {
                    (e[Cn[i]] = e[Cn[i]].bind(e)), t.addCallBack(i, e[Cn[i]]);
                  }),
                  "mobile" !== O.device)
                ) {
                  this.bind(".xg-spot-info", "mousemove", this.onMousemove),
                    this.bind(".xg-spot-info", "mousedown", this.onMousedown),
                    this.bind(".xg-spot-info", "mouseup", this.onMouseup);
                  var i = this.hook("previewClick", function () {});
                  (this.handlerPreviewClick = function (t) {
                    t.stopPropagation(), i(parseInt(1e3 * e._state.now, 10) / 1e3, t);
                  }),
                    this.bind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
                }
              },
            },
            {
              key: "onProgressMove",
              value: function (e, t) {
                !this.config.disable &&
                  this.player.duration &&
                  this.updatePosition(e.offset, e.width, e.currentTime, e.e);
              },
            },
            {
              key: "onProgressDragStart",
              value: function (e) {
                !this.config.disable &&
                  this.player.duration &&
                  ((this.isDrag = !0), this.videoPreview && x.addClass(this.videoPreview, "show"));
              },
            },
            {
              key: "onProgressDragEnd",
              value: function (e) {
                !this.config.disable &&
                  this.player.duration &&
                  ((this.isDrag = !1), this.videoPreview && x.removeClass(this.videoPreview, "show"));
              },
            },
            {
              key: "onProgressClick",
              value: function (e, t) {
                this.config.disable ||
                  (x.hasClass(t.target, "xgplayer-spot") &&
                    (t.stopPropagation(),
                    t.preventDefault(),
                    ["time", "id", "text"].map(function (i) {
                      e[i] = t.target.getAttribute("data-".concat(i));
                    }),
                    e.time && (e.time = Number(e.time)),
                    this.handlerSpotClick(t, e)));
              },
            },
            {
              key: "updateLinePos",
              value: function (e, t) {
                var i = this.root,
                  n = this.previewLine,
                  o = this.timePoint,
                  r = this.player,
                  s = this.config,
                  a = "flex" === r.controls.mode,
                  l = i.getBoundingClientRect().width;
                if (l) {
                  var c,
                    u,
                    h = o.getBoundingClientRect().width,
                    d = e - (l = this._hasThumnail && l < s.width ? s.width : l) / 2;
                  d < 0 && !a
                    ? ((d = 0), (c = e - l / 2), !this.thumbnail && (u = e - l / 2 - h / 2))
                    : d > t - l && !a
                    ? ((c = d - (t - l)), !this.thumbnail && (u = d - (t - l) - h / 2), (d = t - l))
                    : ((c = 0), !this.thumbnail && (u = -h / 2)),
                    void 0 !== c && (n.style.transform = "translateX(".concat(c.toFixed(2), "px)")),
                    void 0 !== u && (o.style.transform = "translateX(".concat(u.toFixed(2), "px)")),
                    (i.style.transform = "translateX(".concat(d.toFixed(2), "px) translateZ(0)"));
                }
              },
            },
            {
              key: "updateTimeText",
              value: function (e) {
                var t = this.timeText,
                  i = this.timePoint;
                (t.textContent = e), !this.thumbnail && (i.textContent = e);
              },
            },
            {
              key: "updatePosition",
              value: function (e, t, i, n) {
                var o = this.root,
                  r = this.config,
                  s = this._state;
                if (o) {
                  this.updateLinePos(e, t), (s.now = i), this.transformTimeHook(i);
                  var a = this.timeStr;
                  n && n.target && x.hasClass(n.target, "xgplayer-spot")
                    ? (this.showTips(n.target.getAttribute("data-text"), !1, a),
                      this.focusDot(n.target),
                      (s.f = !0),
                      r.isFocusDots && s.f && (s.now = parseInt(n.target.getAttribute("data-time"), 10)))
                    : r.defaultText
                    ? ((s.f = !1), this.showTips(r.defaultText, !0, a))
                    : ((s.f = !1), this.hideTips("")),
                    this.updateTimeText(a),
                    this.updateThumbnails(s.now);
                }
              },
            },
            {
              key: "setTimeContent",
              value: function (e) {
                this.timeStr = e;
              },
            },
            {
              key: "updateThumbnails",
              value: function (e) {
                var t = this.player,
                  i = this.videoPreview,
                  n = this.config,
                  o = t.plugins.thumbnail;
                if (o && o.usable) {
                  this.thumbnail && o.update(this.thumbnail, e, n.width, n.height);
                  var r = i && i.getBoundingClientRect();
                  this.videothumbnail && o.update(this.videothumbnail, e, r.width, r.height);
                }
              },
            },
            {
              key: "registerThumbnail",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("mobile" !== O.device) {
                  var t = this.player,
                    i = this.config,
                    n = t.getPlugin("thumbnail");
                  if ((n && n.setConfig(e), n && n.usable && i.isShowThumbnail)) {
                    x.removeClass(this.root, "short-line no-thumbnail"),
                      "short" === i.mode && x.addClass(this.root, "short-line"),
                      (this._hasThumnail = !0);
                    var o = this.find(".xg-spot-thumbnail");
                    (this.thumbnail = n.createThumbnail(o, "progress-thumbnail")),
                      i.isShowCoverPreview &&
                        ((this.videoPreview = x.createDom("xg-video-preview", "", {}, "xgvideo-preview")),
                        t.root.appendChild(this.videoPreview),
                        (this.videothumbnail = n.createThumbnail(this.videoPreview, "xgvideo-thumbnail"))),
                      this.updateThumbnails(0);
                  } else x.addClass(this.root, "short-line no-thumbnail");
                }
              },
            },
            {
              key: "calcuPosition",
              value: function (e, t) {
                var i = this.player.plugins.progress,
                  n = this.player,
                  o = i.root.getBoundingClientRect().width,
                  r = (n.duration / o) * 6;
                return (
                  e + t > n.duration && (t = n.duration - e),
                  n.duration,
                  n.duration,
                  { left: (e / n.duration) * 100, width: (t / n.duration) * 100, isMini: t < r }
                );
              },
            },
            {
              key: "showDot",
              value: function (e) {
                var t = this.findDot(e);
                if (t) {
                  var i = this.root.getBoundingClientRect().width,
                    n = (t.time / this.player.duration) * i;
                  this.updatePosition(n, i, t.time);
                }
              },
            },
            {
              key: "focusDot",
              value: function (e, t) {
                e && (t || (t = e.getAttribute("data-id")), x.addClass(e, "active"), (this._activeDotId = t));
              },
            },
            {
              key: "blurDot",
              value: function (e) {
                if (!e) {
                  var t = this._activeDotId;
                  e = this.getDotDom(t);
                }
                e && (x.removeClass(e, "active"), (this._activeDotId = null));
              },
            },
            {
              key: "showTips",
              value: function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                x.addClass(this.root, "no-timepoint"),
                  e &&
                    (x.addClass(this.find(".xg-spot-content"), "show-text"),
                    t && "production" === this.config.mode
                      ? (x.addClass(this.root, "product"), (this.tipText.textContent = e))
                      : (x.removeClass(this.root, "product"),
                        (this.tipText.textContent = this._hasThumnail ? e : "".concat(i, " ").concat(e))));
              },
            },
            {
              key: "hideTips",
              value: function () {
                x.removeClass(this.root, "no-timepoint"),
                  (this.tipText.textContent = ""),
                  x.removeClass(this.find(".xg-spot-content"), "show-text"),
                  x.removeClass(this.root, "product");
              },
            },
            {
              key: "hide",
              value: function () {
                x.addClass(this.root, "hide");
              },
            },
            {
              key: "show",
              value: function () {
                x.removeClass(this.root, "hide");
              },
            },
            {
              key: "enable",
              value: function () {
                var e = this.config,
                  t = this.playerConfig;
                (this.config.disable = !1),
                  this.show(),
                  !this.thumbnail && e.isShowThumbnail && this.registerThumbnail(t.thumbnail || {});
              },
            },
            {
              key: "disable",
              value: function () {
                (this.config.disable = !0), this.hide();
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this,
                  t = this.player.plugins.progress;
                t &&
                  Object.keys(Cn).map(function (i) {
                    t.removeCallBack(i, e[Cn[i]]);
                  }),
                  (this.videothumbnail = null),
                  (this.thumbnail = null),
                  this.videoPreview && this.player.root.removeChild(this.videoPreview),
                  this.unbind(".xg-spot-info", "mousemove", this.onMousemove),
                  this.unbind(".xg-spot-info", "mousedown", this.onMousedown),
                  this.unbind(".xg-spot-info", "mouseup", this.onMouseup),
                  this.unbind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
              },
            },
            {
              key: "render",
              value: function () {
                return "mobile" === O.device || "mobile" === this.playerConfig.isMobileSimulateMode
                  ? ""
                  : '<div class="xg-spot-info hide '.concat(
                      "short" === this.config.mode ? "short-line" : "",
                      '">\n      <div class="xg-spot-content">\n        <div class="xg-spot-thumbnail">\n          <span class="xg-spot-time"></span>\n        </div>\n        <div class="xg-spot-text"><span class="spot-inner-text"></span></div>\n      </div>\n      <div class="xgplayer-progress-point">00:00</div>\n      <div class="xg-spot-ext-text"></div>\n      <div class="xg-spot-line"></div>\n    </div>',
                    );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "progresspreview";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  index: 1,
                  miniWidth: 6,
                  ispots: [],
                  defaultText: "",
                  isFocusDots: !0,
                  isHideThumbnailHover: !0,
                  isShowThumbnail: !0,
                  isShowCoverPreview: !1,
                  mode: "",
                  disable: !1,
                  width: 160,
                  height: 90,
                };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    wn = (function (e) {
      a(i, e);
      var t = d(i);
      function i(e) {
        var o;
        return n(this, i), ((o = t.call(this, e)).ratio = 1), (o.interval = null), (o._preloadMark = {}), o;
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                this.usable && this.initThumbnail(),
                  this.on([z], function () {
                    var t = e.config,
                      i = t.pic_num,
                      n = t.interval;
                    e.usable && (e.interval = n > 0 ? n : Math.round((1e3 * e.player.duration) / i) / 1e3);
                  });
              },
            },
            {
              key: "setConfig",
              value: function (e) {
                var t = this;
                if (e) {
                  var i = Object.keys(e);
                  i.length < 1 ||
                    (i.forEach(function (i) {
                      t.config[i] = e[i];
                    }),
                    this.usable && this.initThumbnail());
                }
              },
            },
            {
              key: "usable",
              get: function () {
                var e = this.config,
                  t = e.urls,
                  i = e.pic_num;
                return t && t.length > 0 && i > 0;
              },
            },
            {
              key: "initThumbnail",
              value: function () {
                var e = this.config,
                  t = e.width,
                  i = e.height,
                  n = e.pic_num,
                  o = e.interval;
                (this.ratio = (t / i) * 100),
                  (this.interval = o || Math.round(this.player.duration / n)),
                  (this._preloadMark = {});
              },
            },
            {
              key: "getUrlByIndex",
              value: function (e) {
                return e >= 0 && e < this.config.urls.length ? this.config.urls[e] : "";
              },
            },
            {
              key: "preload",
              value: function (e) {
                var t = this;
                if (!this._preloadMark[e]) {
                  var i = this.config.urls,
                    n = i.length,
                    o = [];
                  e > 0 && o.push(e - 1),
                    o.push(e),
                    e > 0 && e < n - 1 && o.push(e + 1),
                    o.map(function (e) {
                      !t._preloadMark[e] &&
                        e >= 0 &&
                        e < n &&
                        ((t._preloadMark[e] = 1),
                        x.preloadImg(i[e], function () {
                          t._preloadMark[e] = 2;
                        }));
                    });
                }
              },
            },
            {
              key: "getPosition",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  n = this.config,
                  o = n.pic_num,
                  r = n.row,
                  s = n.col,
                  a = n.width,
                  l = n.height;
                this.interval = Math.round(this.player.duration / o);
                var c = Math.ceil(e / this.interval),
                  u = (c = c > o ? o : c) < r * s ? 0 : Math.ceil(c / (r * s)) - 1,
                  h = c - u * (s * r),
                  d = h > 0 ? Math.ceil(h / s) - 1 : 0,
                  f = h > 0 ? h - d * s - 1 : 0,
                  p = 0,
                  g = 0;
                if (t && i) {
                  var v = t / i;
                  v < a / l ? (p = (g = i) * (a / l)) : (g = (p = t) / (a / l));
                } else i ? t || (p = (g = i || l) * (a / l)) : (g = (p = t || a) / (a / l));
                var y = this.getUrlByIndex(u);
                return {
                  urlIndex: u,
                  rowIndex: d,
                  colIndex: f,
                  url: y,
                  height: g,
                  width: p,
                  style: {
                    backgroundImage: "url(".concat(y, ")"),
                    backgroundSize: "".concat(p * s, "px auto"),
                    backgroundPosition: "-".concat(f * p, "px -").concat(d * g, "px"),
                    width: "".concat(p, "px"),
                    height: "".concat(g, "px"),
                  },
                };
              },
            },
            {
              key: "update",
              value: function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                  r = this.config,
                  s = r.pic_num,
                  a = r.urls;
                if (!(s <= 0) && a && 0 !== a.length) {
                  var l = this.getPosition(t, i, n);
                  this.preload(l.urlIndex),
                    Object.keys(l.style).map(function (t) {
                      e.style[t] = l.style[t];
                    }),
                    Object.keys(o).map(function (t) {
                      e.style[t] = o[t];
                    });
                }
              },
            },
            {
              key: "changeConfig",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.setConfig(e);
              },
            },
            {
              key: "createThumbnail",
              value: function (e, t) {
                var i = x.createDom("xg-thumbnail", "", {}, "thumbnail ".concat(t));
                return e && e.appendChild(i), i;
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "thumbnail";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  isShow: !1,
                  urls: [],
                  pic_num: 0,
                  col: 0,
                  row: 0,
                  height: 90,
                  width: 160,
                  scale: 1,
                  className: "",
                  hidePortrait: !1,
                };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    Tn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            { key: "afterCreate", value: function () {} },
            {
              key: "update",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { cached: 0, played: 0 },
                  t = arguments.length > 1 ? arguments[1] : void 0;
                t &&
                  this.root &&
                  (e.cached && (this.find("xg-mini-progress-cache").style.width = "".concat((e.cached / t) * 100, "%")),
                  e.played &&
                    (this.find("xg-mini-progress-played").style.width = "".concat((e.played / t) * 100, "%")));
              },
            },
            {
              key: "render",
              value: function () {
                if (this.playerConfig.progress && this.playerConfig.miniprogress)
                  return '<xg-mini-progress class="xg-mini-progress">\n    <xg-mini-progress-cache class="xg-mini-progress-cache"></xg-mini-progress-cache>\n    <xg-mini-progress-played class="xg-mini-progress-played"></xg-mini-progress-played>\n    </xg-mini-progress>';
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "MiniProgress";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {};
              },
            },
          ],
        ),
        i
      );
    })(nt),
    xn = "realtime",
    En = "firstframe",
    Sn = "poster";
  function Pn() {
    try {
      return parseInt(window.performance.now(), 10);
    } catch (e) {
      return new Date().getTime();
    }
  }
  var Ln = null,
    In = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "onLoadedData", function (t) {
            e.player &&
              ((e._frameCount = e.config.startFrameCount),
              e.renderOnTimeupdate(t),
              e.off(G, e.renderOnTimeupdate),
              e.on(G, e.renderOnTimeupdate));
          }),
          s(u(e), "renderOnTimeupdate", function (t) {
            e._frameCount > 0
              ? (e.renderOnce(), e._frameCount--)
              : ((e._isLoaded = !0),
                e.off(G, e.renderOnTimeupdate),
                !e.player.paused && e._checkIfCanStart() && e.start());
          }),
          s(u(e), "start", function () {
            var t = e.player.media,
              i = Pn(),
              n = e.checkVideoIsSupport(t);
            n &&
              e.canvasCtx &&
              (e.stop(),
              t.videoWidth &&
                t.videoHeight &&
                ((e.videoPI = t.videoHeight > 0 ? parseInt((t.videoWidth / t.videoHeight) * 100, 10) : 0),
                (e.config.mode === xn || i - e.preTime >= e.interval) &&
                  (t && t.videoWidth && e.update(n, e.videoPI), (e.preTime = i))),
              (e.frameId = x.requestAnimationFrame(e.start)));
          }),
          s(u(e), "stop", function () {
            e.frameId && (x.cancelAnimationFrame(e.frameId), (e.frameId = null));
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                !0 === this.playerConfig.dynamicBg && (this.config.disable = !1),
                  i.isSupport || (this.config.disable = !0);
                var t = this.config,
                  n = t.disable,
                  o = t.mode,
                  r = t.frameRate;
                n ||
                  ((this._pos = { width: 0, height: 0, rwidth: 0, rheight: 0, x: 0, y: 0, pi: 0 }),
                  (this.isStart = !1),
                  (this._isLoaded = !1),
                  (this.videoPI = 0),
                  (this.preTime = 0),
                  (this.interval = parseInt(1e3 / r, 10)),
                  (this.canvas = null),
                  (this.canvasCtx = null),
                  (this._frameCount = 0),
                  this.once(re, function () {
                    e.player && (e.init(), e.player.paused || e.start());
                  }),
                  o !== Sn &&
                    (o !== En &&
                      (this.on($, function () {
                        e.stop();
                      }),
                      this.on(j, function () {
                        e._checkIfCanStart() && e.start();
                      }),
                      this.on(H, function () {
                        e.stop();
                      })),
                    this.on(Y, this.onLoadedData),
                    this.on(J, function () {
                      (e._isLoaded = !1), e.stop();
                    })));
              },
            },
            {
              key: "init",
              value: function () {
                var e = this.player,
                  t = this.config;
                this.canvasFilter = i.supportCanvasFilter();
                try {
                  var n = (this.config.isInnerRender && e.innerContainer) || e.root;
                  n.insertAdjacentHTML(
                    "afterbegin",
                    '<div class="xgplayer-dynamic-bg"><canvas>\n        </canvas><xgmask></xgmask></div>',
                  ),
                    (this.root = n.children[0]),
                    (this.canvas = this.find("canvas")),
                    this.canvasFilter ||
                      ((this.canvas.style.filter = t.filter), (this.canvas.style.webkitFilter = t.filter)),
                    (this.mask = this.find("xgmask")),
                    t.addMask && (this.mask.style.background = t.maskBg),
                    (this.canvasCtx = this.canvas.getContext("2d")),
                    this.renderByPoster();
                } catch (o) {
                  w.logError("plugin:DynamicBg", o);
                }
              },
            },
            {
              key: "checkVideoIsSupport",
              value: function (e) {
                if (!e) return null;
                var t =
                  e && e instanceof window.HTMLVideoElement ? e : e.canvas ? e.canvas : e.flyVideo ? e.flyVideo : null;
                if (t && ("safari" !== O.browser || (!/^blob/.test(t.currentSrc) && !/^blob/.test(t.src)))) return t;
                var i = t ? t.tagName.toLowerCase() : "";
                return "canvas" === i || "img" === i ? t : null;
              },
            },
            {
              key: "renderByPoster",
              value: function () {
                var e = this.playerConfig.poster;
                if (e) {
                  var t = "String" === x.typeOf(e) ? e : "String" === x.typeOf(e.poster) ? e.poster : null;
                  this.updateImg(t);
                }
              },
            },
            {
              key: "_checkIfCanStart",
              value: function () {
                var e = this.config.mode;
                return this._isLoaded && e !== En && e !== Sn;
              },
            },
            {
              key: "renderOnce",
              value: function () {
                var e = this.player.media;
                if (e.videoWidth && e.videoHeight) {
                  this.videoPI = parseInt((e.videoWidth / e.videoHeight) * 100, 10);
                  var t = this.checkVideoIsSupport(e);
                  t && e.videoWidth && this.update(t, this.videoPI);
                }
              },
            },
            {
              key: "updateImg",
              value: function (e) {
                var t = this;
                if (e) {
                  var i = this.canvas.getBoundingClientRect(),
                    n = i.width,
                    o = i.height,
                    r = new window.Image();
                  (r.onload = function () {
                    if (t.canvas && !t.frameId && !t.isStart) {
                      (t.canvas.height = o), (t.canvas.width = n);
                      var e = parseInt((n / o) * 100, 10);
                      t.update(r, e), (r = null);
                    }
                  }),
                    (r.src = e);
                }
              },
            },
            {
              key: "update",
              value: function (e, t) {
                if (this.canvas && this.canvasCtx && t)
                  try {
                    var i = this._pos,
                      n = this.config,
                      o = this.canvas.getBoundingClientRect(),
                      r = o.width,
                      s = o.height;
                    if (r !== i.width || s !== i.height || i.pi !== t) {
                      var a = parseInt((r / s) * 100, 10);
                      (i.pi = t), (i.width = this.canvas.width = r), (i.height = this.canvas.height = s);
                      var l = s,
                        c = r;
                      a < t ? (c = parseInt((s * t) / 100, 10)) : a > t && (l = parseInt((100 * r) / t, 10)),
                        (i.rwidth = c * n.multiple),
                        (i.rheight = l * n.multiple),
                        (i.x = (r - i.rwidth) / 2),
                        (i.y = (s - i.rheight) / 2);
                    }
                    this.canvasFilter && (this.canvasCtx.filter = n.filter),
                      this.canvasCtx.drawImage(e, i.x, i.y, i.rwidth, i.rheight);
                  } catch (u) {
                    w.logError("plugin:DynamicBg", u);
                  }
              },
            },
            {
              key: "destroy",
              value: function () {
                this.stop(), (this.canvasCtx = null), (this.canvas = null);
              },
            },
            {
              key: "render",
              value: function () {
                return "";
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "dynamicBg";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {
                  isInnerRender: !1,
                  disable: !0,
                  mode: "framerate",
                  frameRate: 10,
                  filter: "blur(50px)",
                  startFrameCount: 2,
                  addMask: !0,
                  multiple: 1.2,
                  maskBg: "rgba(0,0,0,0.7)",
                };
              },
            },
            {
              key: "isSupport",
              get: function () {
                return "boolean" == typeof Ln
                  ? Ln
                  : (Ln = (function () {
                      try {
                        return !!document.createElement("canvas").getContext;
                      } catch (e) {
                        return !1;
                      }
                    })());
              },
            },
            {
              key: "supportCanvasFilter",
              value: function () {
                return !("safari" === O.browser || "firefox" === O.browser);
              },
            },
          ],
        ),
        i
      );
    })(nt),
    An = "info",
    On = xe,
    Rn = (function (e) {
      a(o, e);
      var i = d(o);
      function o() {
        var e;
        n(this, o);
        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l];
        return (
          s(u((e = i.call.apply(i, [this].concat(a)))), "_recordUserActions", function (i) {
            var n = e._getTime(),
              o = Object.assign({}, i, { msg: i.msg || i.action });
            e._stats.info.push(t(t({ type: "userAction" }, n), {}, { payload: o }));
          }),
          s(u(e), "_onReset", function () {
            e.reset();
          }),
          s(u(e), "_recordInfo", function (t) {
            e.info(t);
          }),
          s(u(e), "_downloadStats", function () {
            var t = e.getStats(),
              i = new Blob([JSON.stringify(t)], { type: "application/json" }),
              n = window.URL.createObjectURL(i),
              o = document.createElement("a");
            (o.style.display = "none"), (o.href = n), (o.download = "player.txt"), (o.disabled = !1), o.click();
          }),
          e
        );
      }
      return (
        r(
          o,
          [
            {
              key: "_getTime",
              value: function () {
                return { timestamp: Date.now(), timeFormat: new Date().toISOString() };
              },
            },
            {
              key: "afterCreate",
              value: function () {
                this.reset(),
                  this.on(_e, this._recordUserActions),
                  this.on(On.STATS_INFO, this._recordInfo),
                  this.on(On.STATS_DOWNLOAD, this._downloadStats),
                  this.on(On.STATS_RESET, this._onReset);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.offAll();
              },
            },
            {
              key: "downloadStats",
              value: function () {
                this._downloadStats();
              },
            },
            {
              key: "info",
              value: function (e) {
                e.profile ? this._infoProfile(e) : this._info(e);
              },
            },
            {
              key: "_info",
              value: function (e) {
                var i = this._getTime();
                this._stats.info.push(t(t({}, i), {}, { payload: e }));
              },
            },
            {
              key: "_infoProfile",
              value: function (e) {
                if (e && e.startMs) {
                  var i = t(
                    {
                      cat: "function",
                      dur: Date.now() - e.startMs,
                      name: e.name || e.msg,
                      ph: "X",
                      pid: 0,
                      tid: 0,
                      ts: e.startMs,
                      profile: !0,
                    },
                    e,
                  );
                  this._info(i);
                } else console.warn("infoProfile need object data, include startMs");
              },
            },
            {
              key: "reset",
              value: function () {
                var e;
                this._stats = (s((e = {}), An, []), s(e, "media", {}), e);
              },
            },
            {
              key: "getStats",
              value: function () {
                for (var e = this.player.media, t = [], i = 0; i < e.buffered.length; i++)
                  t.push({ start: e.buffered.start(i), end: e.buffered.end(i) });
                var n = {
                  currentTime: e.currentTime,
                  readyState: e.readyState,
                  buffered: t,
                  paused: e.paused,
                  ended: e.ended,
                };
                return (
                  (this._stats.media = n),
                  { raw: this._stats, timestat: this._getTimeStats(), profile: this._getProfile() }
                );
              },
            },
            {
              key: "_getTimeStats",
              value: function () {
                return this._stats.info.map(function (e) {
                  var t = e.payload.data,
                    i = "";
                  try {
                    t instanceof Error ? (i = t.msg) : void 0 !== t && (i = JSON.stringify(t));
                  } catch (n) {
                    console.log("err", n);
                  }
                  return "[".concat(e.timeFormat, "] : ").concat(e.payload.msg, " ").concat(i, " ");
                });
              },
            },
            {
              key: "_getProfile",
              value: function () {
                var e = { traceEvents: [] };
                return (
                  this._stats.info.forEach(function (t) {
                    t.payload.profile && e.traceEvents.push(t.payload);
                  }),
                  e
                );
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "stats";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return {};
              },
            },
          ],
        ),
        o
      );
    })(ze),
    Dn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "onGapJump", function () {
            var t = u(e),
              n = t.player,
              o = t.config;
            if (n.media.readyState !== HTMLMediaElement.HAVE_NOTHING) {
              if (n.media.seeking) {
                if (!e.seekingEventReceived) return;
              } else e.seekingEventReceived = !1;
              if (!n.media.paused || 0 === n.media.currentTime || !e.hasPlayed) {
                var r = n.media.buffered,
                  s = o.smallGapLimit || 0.5,
                  a = o.gapDetectionThreshold || 0.3,
                  l = n.media.currentTime,
                  c = e._getIndex(r, l, a);
                if (null !== c && 0 !== c) {
                  console.log("GapJump  bufferRange ", r.start(c), r.end(c));
                  var h = r.start(c) + 0.1;
                  if (!(h > n.media.duration)) {
                    var d = h - l,
                      f = d <= s;
                    d < i.BROWSER_GAP_TOLERANCE ||
                      (f &&
                        (!1 !== o.useGapJump && (n.media.currentTime = e.isSafari ? h + 0.1 : h),
                        e.player && e.player.emit("detectGap"),
                        console.log(
                          "gapJump gapIndex",
                          c,
                          " isGapSamll:",
                          f,
                          " currentTime:",
                          n.media.currentTime,
                          " jumpSize:",
                          l - n.media.currentTime,
                        ),
                        0.08 !== h &&
                          n &&
                          n.emit("log", {
                            type: "oneevent",
                            end_type: "gap",
                            vid: n.config.vid,
                            ext: { video_postion: Math.floor(1e3 * h) },
                          })));
                  }
                }
              }
            }
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                !1 !== this.config.useGapJump &&
                  ((this.hasPlayed = !1),
                  (this.seekingEventReceived = !1),
                  (this.isSafari =
                    /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                    !/Chrome/.test(navigator.userAgent) &&
                    !/BlackBerry/.test(navigator.platform)),
                  this.on(W, this.onGapJump),
                  this.on(j, function () {
                    e.hasPlayed = !0;
                  }),
                  this.on(U, function () {
                    e.seekingEventReceived = !0;
                  }));
              },
            },
            {
              key: "_getIndex",
              value: function (e, t, i) {
                if (!e || !e.length) return null;
                if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
                for (var n = this._getBuffered(e), o = null, r = 0; r < n.length; r++) {
                  if (n[r].start > t && (0 === r || n[r - 1].end - t <= i)) {
                    o = r;
                    break;
                  }
                }
                return o;
              },
            },
            {
              key: "_getBuffered",
              value: function (e) {
                if (!e) return [];
                for (var t = [], i = 0; i < e.length; i++) t.push({ start: e.start(i), end: e.end(i) });
                return t;
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "gapJump";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { useGapJump: !1, smallGapLimit: 0.5, gapDetectionThreshold: 0.3 };
              },
            },
          ],
        ),
        i
      );
    })(nt);
  Dn.BROWSER_GAP_TOLERANCE = 0.001;
  var Mn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "onWaiting", function () {
            var t = u(e).config;
            e.jumpCnt > t.jumpCntMax ||
              e.timer ||
              !1 === t.useWaitingTimeoutJump ||
              (e.timer = setTimeout(e.onJump, 1e3 * t.waitingTime));
          }),
          s(u(e), "onJump", function () {
            var t = u(e),
              i = t.player,
              n = t.config;
            if (
              (clearTimeout(e.timer),
              (e.timer = null),
              !(
                e.jumpCnt > n.jumpCntMax ||
                !1 === n.useWaitingTimeoutJump ||
                (i.media.paused && 0 !== i.media.currentTime && e.hasPlayed)
              ))
            ) {
              (e.jumpSize = n.jumpSize * (e.jumpCnt + 1)),
                e.jumpCnt === n.jumpSize && e.jumpSize < 6 && (e.jumpSize = 6);
              var o = i.currentTime + e.jumpSize;
              o > i.media.duration ||
                (console.log("waitintTimeout, currentTime:", i.currentTime, ", jumpTo:", o),
                e.jumpCnt++,
                (i.currentTime = o));
            }
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this,
                  t = this.config,
                  i = t.useWaitingTimeoutJump,
                  n = t.jumpSize;
                !1 !== i &&
                  ((this.hasPlayed = !1),
                  (this.jumpCnt = 0),
                  (this.timer = null),
                  (this.jumpSize = n),
                  this.on(W, this.onWaiting),
                  this.on([N, q], function () {
                    clearTimeout(e.timer), (e.timer = null), (e.jumpSize = e.config.jumpSize);
                  }),
                  this.on(j, function () {
                    e.hasPlayed = !0;
                  }));
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "waitingTimeoutJump";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { useWaitingTimeoutJump: !1, waitingTime: 15, jumpSize: 2, jumpCntMax: 4 };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    jn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        var e;
        n(this, i);
        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
        return (
          s(u((e = t.call.apply(t, [this].concat(r)))), "getSpeed", function (t) {
            if (e.speedListCache.length <= 0) return 0;
            var i = 0;
            return (
              e.speedListCache.map(function (e) {
                i += e;
              }),
              Math.floor(i / e.speedListCache.length)
            );
          }),
          s(u(e), "_onRealSpeedChange", function (t) {
            t.speed && e.appendList(t.speed);
          }),
          s(u(e), "testSpeed", function () {
            if ((clearTimeout(e.timer), (e.timer = null), e.player && e.config.openSpeed)) {
              var t = e.config,
                i = t.url,
                n = t.loadSize,
                o = t.testCnt,
                r = t.testTimeStep,
                s = i + (i.indexOf("?") < 0 ? "?testst=" : "&testst=") + Date.now();
              if (!(e.cnt >= o)) {
                e.cnt++;
                try {
                  var a = new Date().getTime(),
                    l = null,
                    c = new XMLHttpRequest();
                  (e.xhr = c), c.open("GET", s);
                  var u = {},
                    h = Math.floor(10 * Math.random());
                  (u.Range = "bytes=" + h + "-" + (n + h)),
                    u &&
                      Object.keys(u).forEach(function (e) {
                        c.setRequestHeader(e, u[e]);
                      }),
                    (c.onreadystatechange = function () {
                      if (4 === c.readyState) {
                        (e.xhr = null), (l = new Date().getTime());
                        var t = (c.getResponseHeader("Content-Length") / 1024) * 8,
                          i = Math.round((1e3 * t) / (l - a));
                        e.appendList(i), (e.timer = setTimeout(e.testSpeed, r));
                      }
                    }),
                    c.send();
                } catch (d) {
                  console.error(d);
                }
              }
            }
          }),
          s(u(e), "appendList", function (t) {
            var i = e.config.saveSpeedMax;
            e.speedListCache.length >= i && e.speedListCache.shift(),
              e.speedListCache.push(t),
              e.player && (e.player.realTimeSpeed = t),
              e.updateSpeed();
          }),
          s(u(e), "updateSpeed", function () {
            var t = e.getSpeed(),
              i = u(e).player;
            !i ||
              (i.avgSpeed && t === i.avgSpeed) ||
              ((i.avgSpeed = t), i.emit(ce, { speed: t, realTimeSpeed: i.realTimeSpeed }));
          }),
          e
        );
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this;
                this.speedListCache = [];
                var t = this.config,
                  i = t.openSpeed,
                  n = t.testTimeStep;
                (this.timer = null),
                  (this.cnt = 0),
                  (this.xhr = null),
                  i &&
                    (this.on("real_time_speed", this._onRealSpeedChange),
                    this.on([Y, se], function () {
                      x.isMSE(e.player.video) ||
                        ((e.speedListCache = []), (e.cnt = 0), (e.timer = setTimeout(e.testSpeed, n)));
                    }));
              },
            },
            {
              key: "openSpeed",
              get: function () {
                return this.config.openSpeed;
              },
              set: function (e) {
                if (((this.config.openSpeed = e), !e && this.timer))
                  return clearTimeout(this.timer), void (this.timer = null);
                if (this.config.openSpeed) {
                  if (this.timer) return;
                  this.timer = setTimeout(this.testSpeed, this.config.testTimeStep);
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                clearTimeout(this.timer),
                  (this.timer = null),
                  this.xhr && 4 !== this.xhr.readyState && (this.xhr.cancel(), (this.xhr = null));
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "testspeed";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { openSpeed: !1, testCnt: 3, loadSize: 204800, testTimeStep: 3e3, url: "", saveSpeedMax: 5 };
              },
            },
          ],
        ),
        i
      );
    })(nt),
    Nn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return (
        r(
          i,
          [
            {
              key: "afterCreate",
              value: function () {
                var e = this,
                  t = this.player,
                  i = this.config;
                ((this.timer = null),
                (this._lastDecodedFrames = 0),
                (this._currentStuckCount = 0),
                (this._lastCheckPoint = null),
                i.disabled) ||
                  (t.media.getVideoPlaybackQuality &&
                    (this.on(j, function () {
                      e._startTick();
                    }),
                    this.on(H, function () {
                      e._stopTick();
                    }),
                    this.on(F, function () {
                      e._stopTick();
                    }),
                    this.on($, function () {
                      e._stopTick();
                    })));
              },
            },
            {
              key: "_startTick",
              value: function () {
                var e = this;
                this._stopTick(),
                  (this._timer = setTimeout(function () {
                    e._checkDecodeFPS(), e._startTick();
                  }, this.config.tick));
              },
            },
            {
              key: "_stopTick",
              value: function () {
                clearTimeout(this._timer), (this._timer = null);
              },
            },
            {
              key: "_checkStuck",
              value: function (e) {
                var t = this.player.media,
                  i = document.hidden,
                  n = t.paused;
                if ("boolean" == typeof i && !i && !n) {
                  for (var o = t.currentTime, r = t.buffered, s = !1, a = 0; a < r.length; a++) {
                    var l = r.start(a),
                      c = r.end(a);
                    if (l <= o && o <= c - 1) {
                      s = !0;
                      break;
                    }
                  }
                  4 === t.readyState &&
                    s &&
                    (this._currentStuckCount > this.config.stuckCount
                      ? (this.emit(Ee), (this._currentStuckCount = 0))
                      : (this.config.reportFrame, this._currentStuckCount++));
                }
              },
            },
            {
              key: "_checkDecodeFPS",
              value: function () {
                if (this.player.media) {
                  var e = this.player.media.getVideoPlaybackQuality().totalVideoFrames,
                    t = performance.now();
                  if (e && this._lastCheckPoint) {
                    var i = e - this._lastDecodedFrames;
                    this._checkStuck(i);
                  }
                  (this._lastDecodedFrames = e), (this._lastCheckPoint = t);
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                this._stopTick();
              },
            },
          ],
          [
            {
              key: "pluginName",
              get: function () {
                return "FpsDetect";
              },
            },
            {
              key: "defaultConfig",
              get: function () {
                return { disabled: !1, tick: 1e3, stuckCount: 3, reportFrame: 0 };
              },
            },
          ],
        ),
        i
      );
    })(nt);
  _t.use({
    LANG: "zh-cn",
    TEXT: {
      ERROR_TYPES: {
        network: { code: 1, msg: "è§†é¢‘ä¸‹è½½é”™è¯¯" },
        mse: { code: 2, msg: "æµè¿½åŠ é”™è¯¯" },
        parse: { code: 3, msg: "è§£æžé”™è¯¯" },
        format: { code: 4, msg: "æ ¼å¼é”™è¯¯" },
        decoder: { code: 5, msg: "è§£ç é”™è¯¯" },
        runtime: { code: 6, msg: "è¯­æ³•é”™è¯¯" },
        timeout: { code: 7, msg: "æ’­æ”¾è¶…æ—¶" },
        other: { code: 8, msg: "å…¶ä»–é”™è¯¯" },
      },
      HAVE_NOTHING: "æ²¡æœ‰å…³äºŽéŸ³é¢‘/è§†é¢‘æ˜¯å¦å°±ç»ªçš„ä¿¡æ¯",
      HAVE_METADATA: "éŸ³é¢‘/è§†é¢‘çš„å…ƒæ•°æ®å·²å°±ç»ª",
      HAVE_CURRENT_DATA: "å…³äºŽå½“å‰æ’­æ”¾ä½ç½®çš„æ•°æ®æ˜¯å¯ç”¨çš„ï¼Œä½†æ²¡æœ‰è¶³å¤Ÿçš„æ•°æ®æ¥æ’­æ”¾ä¸‹ä¸€å¸§/æ¯«ç§’",
      HAVE_FUTURE_DATA: "å½“å‰åŠè‡³å°‘ä¸‹ä¸€å¸§çš„æ•°æ®æ˜¯å¯ç”¨çš„",
      HAVE_ENOUGH_DATA: "å¯ç”¨æ•°æ®è¶³ä»¥å¼€å§‹æ’­æ”¾",
      NETWORK_EMPTY: "éŸ³é¢‘/è§†é¢‘å°šæœªåˆå§‹åŒ–",
      NETWORK_IDLE: "éŸ³é¢‘/è§†é¢‘æ˜¯æ´»åŠ¨çš„ä¸”å·²é€‰å–èµ„æºï¼Œä½†å¹¶æœªä½¿ç”¨ç½‘ç»œ",
      NETWORK_LOADING: "æµè§ˆå™¨æ­£åœ¨ä¸‹è½½æ•°æ®",
      NETWORK_NO_SOURCE: "æœªæ‰¾åˆ°éŸ³é¢‘/è§†é¢‘æ¥æº",
      MEDIA_ERR_ABORTED: "å–å›žè¿‡ç¨‹è¢«ç”¨æˆ·ä¸­æ­¢",
      MEDIA_ERR_NETWORK: "ç½‘ç»œé”™è¯¯",
      MEDIA_ERR_DECODE: "è§£ç é”™è¯¯",
      MEDIA_ERR_SRC_NOT_SUPPORTED: "ä¸æ”¯æŒçš„éŸ³é¢‘/è§†é¢‘æ ¼å¼",
      REPLAY: "é‡æ’­",
      ERROR: "ç½‘ç»œè¿žæŽ¥ä¼¼ä¹Žå‡ºçŽ°äº†é—®é¢˜",
      PLAY_TIPS: "æ’­æ”¾",
      PAUSE_TIPS: "æš‚åœ",
      PLAYNEXT_TIPS: "ä¸‹ä¸€é›†",
      DOWNLOAD_TIPS: "ä¸‹è½½",
      ROTATE_TIPS: "æ—‹è½¬",
      RELOAD_TIPS: "é‡æ–°è½½å…¥",
      FULLSCREEN_TIPS: "è¿›å…¥å…¨å±",
      EXITFULLSCREEN_TIPS: "é€€å‡ºå…¨å±",
      CSSFULLSCREEN_TIPS: "è¿›å…¥æ ·å¼å…¨å±",
      EXITCSSFULLSCREEN_TIPS: "é€€å‡ºæ ·å¼å…¨å±",
      TEXTTRACK: "å­—å¹•",
      PIP: "ç”»ä¸­ç”»",
      SCREENSHOT: "æˆªå›¾",
      LIVE: "æ­£åœ¨ç›´æ’­",
      OFF: "å…³é—­",
      OPEN: "å¼€å¯",
      MINI_DRAG: "ç‚¹å‡»æŒ‰ä½å¯æ‹–åŠ¨è§†é¢‘",
      MINISCREEN: "å°å±å¹•",
      REFRESH_TIPS: "è¯·è¯•è¯•",
      REFRESH: "åˆ·æ–°",
      FORWARD: "å¿«è¿›ä¸­",
      LIVE_TIP: "ç›´æ’­",
    },
  });
  var Fn = r(function e(t, i) {
      var o, r, s;
      n(this, e);
      var a = i && "mobile" === i.isMobileSimulateMode,
        l = i.isLive,
        c = [].concat(l ? [] : [Ai, Tn, _n, Hi], [Ri, Fi, qi, Qi, hn, dn, on, rn, Gi, Ji]),
        u = [Nt, Ft, Vt, Si, Gt, vn, yn, wn, ii];
      this.plugins = [Rn, Mt].concat(g(c), u, [Dn, Mn]);
      var h = a ? "mobile" : O.device;
      switch (h) {
        case "pc":
          (o = this.plugins).push.apply(o, [xi, ri, gn, jn, Nn]);
          break;
        case "mobile":
          (r = this.plugins).push.apply(r, [_i]);
          break;
        default:
          (s = this.plugins).push.apply(s, [xi, ri, gn]);
      }
      (O.os.isIpad || "pc" === h) && this.plugins.push(In),
        O.os.isIpad && this.plugins.push(ri),
        (this.ignores = []),
        (this.i18n = []);
    }),
    Hn = (function (e) {
      a(i, e);
      var t = d(i);
      function i() {
        return n(this, i), t.apply(this, arguments);
      }
      return r(i);
    })(Et);
  return (
    s(Hn, "defaultPreset", Fn),
    s(Hn, "Util", x),
    s(Hn, "Sniffer", O),
    s(Hn, "Errors", M),
    s(Hn, "Events", Se),
    s(Hn, "Plugin", nt),
    s(Hn, "BasePlugin", ze),
    s(Hn, "I18N", _t),
    s(Hn, "STATE_CLASS", at),
    Hn
  );
});
