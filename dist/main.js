var Toaster;
(() => {
  "use strict";
  var t = {
      480: (t, e, r) => {
        r.d(e, { Z: () => a });
        var n = r(81),
          s = r.n(n),
          o = r(645),
          i = r.n(o)()(s());
        i.push([
          t.id,
          ".toast {\r\n  background-color: #333;\r\n  color: #fff;\r\n  padding: 20px 35px;\r\n  border-radius: 5px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n  font-family: Arial, sans-serif;\r\n  right: 20px;\r\n  margin: 10px;\r\n  /*   position: fixed; */\r\n  -webkit-animation: slide-in-blurred-right 0.6s\r\n    cubic-bezier(0.445, 0.05, 0.55, 0.95) both;\r\n  animation: slide-in-blurred-right 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95)\r\n    both;\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease-in-out;\r\n  display: block;\r\n}\r\n\r\n@keyframes slide-in-blurred-right {\r\n  0% {\r\n    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\r\n    transform-origin: 0% 50%;\r\n    filter: blur(40px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0) scaleY(1) scaleX(1);\r\n    transform-origin: 50% 50%;\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.toast--success {\r\n  background-color: #5cb85c;\r\n}\r\n\r\n.toast--warning {\r\n  background-color: #f0ad4e;\r\n}\r\n\r\n.toast--error {\r\n  background-color: #d9534f;\r\n}\r\n\r\n.toast-close {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\n\r\n@-webkit-keyframes slide-out-blurred-right {\r\n  0% {\r\n    -webkit-transform: translateX(0) scaleY(1) scaleX(1);\r\n    transform: translateX(0) scaleY(1) scaleX(1);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    -webkit-filter: blur(0);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    -webkit-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\r\n    -webkit-filter: blur(40px);\r\n    filter: blur(40px);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slide-out-blurred-right {\r\n  0% {\r\n    -webkit-transform: translateX(0) scaleY(1) scaleX(1);\r\n    transform: translateX(0) scaleY(1) scaleX(1);\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    -webkit-filter: blur(0);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    transform: translateX(1000px) scaleX(2) scaleY(0.2);\r\n    -webkit-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\r\n    -webkit-filter: blur(40px);\r\n    filter: blur(40px);\r\n    opacity: 0;\r\n  }\r\n}\r\n.toast-container {\r\n  width: 400px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n",
          "",
        ]);
        const a = i;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  n = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += t(e)),
                  n && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (t, r, n, s, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (n)
                for (var a = 0; a < this.length; a++) {
                  var l = this[a][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var u = [].concat(t[c]);
                (n && i[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = o)),
                  r &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = r))
                      : (u[2] = r)),
                  s &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = s))
                      : (u[4] = "".concat(s))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function r(t) {
          for (var r = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              r = n;
              break;
            }
          return r;
        }
        function n(t, n) {
          for (var o = {}, i = [], a = 0; a < t.length; a++) {
            var l = t[a],
              c = n.base ? l[0] + n.base : l[0],
              u = o[c] || 0,
              d = "".concat(c, " ").concat(u);
            o[c] = u + 1;
            var p = r(d),
              f = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var m = s(f, n);
              (n.byIndex = a),
                e.splice(a, 0, { identifier: d, updater: m, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function s(t, e) {
          var r = e.domAPI(e);
          return (
            r.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                r.update((t = e));
              } else r.remove();
            }
          );
        }
        t.exports = function (t, s) {
          var o = n((t = t || []), (s = s || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < o.length; i++) {
              var a = r(o[i]);
              e[a].references--;
            }
            for (var l = n(t, s), c = 0; c < o.length; c++) {
              var u = r(o[c]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            o = l;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, r) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, r) => {
        t.exports = function (t) {
          var e = r.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (r) {
              !(function (t, e, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var s = void 0 !== r.layer;
                s &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  s && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var o = r.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, r);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function r(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var o = (e[n] = { id: n, exports: {} });
    return t[n](o, o.exports, r), o.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.nc = void 0);
  var n = {};
  (() => {
    r.r(n), r.d(n, { Toast: () => b, ToastManager: () => y });
    var t = r(379),
      e = r.n(t),
      s = r(795),
      o = r.n(s),
      i = r(569),
      a = r.n(i),
      l = r(565),
      c = r.n(l),
      u = r(216),
      d = r.n(u),
      p = r(589),
      f = r.n(p),
      m = r(480),
      h = {};
    (h.styleTagTransform = f()),
      (h.setAttributes = c()),
      (h.insert = a().bind(null, "head")),
      (h.domAPI = o()),
      (h.insertStyleElement = d()),
      e()(m.Z, h),
      m.Z && m.Z.locals && m.Z.locals;
    class b {
      constructor(t, e = "default", r = {}) {
        (this.content = t),
          (this.type = e),
          (this.duration = r.duration || 3e3),
          (this.dismissTimeout = null),
          (this.onClose = r.onClose || null),
          this.createToastElement(),
          this.setCustomStyles(r.styles);
      }
      createToastElement() {
        (this.toastElement = document.createElement("div")),
          this.toastElement.classList.add("toast"),
          this.toastElement.classList.add(`toast--${this.type}`),
          (this.toastElement.textContent = this.content);
        const t = document.createElement("span");
        t.classList.add("toast-close"),
          (t.innerHTML = "&times;"),
          t.addEventListener("click", () => {
            this.close();
          }),
          this.toastElement.appendChild(t);
      }
      setCustomStyles(t) {
        t && "object" == typeof t && Object.assign(this.toastElement.style, t);
      }
      setContent(t) {
        (this.content = t), (this.toastElement.textContent = this.content);
      }
      setDuration(t) {
        this.duration = t;
      }
      show(t) {
        (this.toastElement.style.opacity = "0"),
          setTimeout(() => {
            this.toastElement.style.opacity = "1";
          }, 10),
          this.startDismissTimeout(t);
      }
      startDismissTimeout(t) {
        this.dismissTimeout = setTimeout(() => {
          this.close(), "function" == typeof t && t();
        }, this.duration);
      }
      close() {
        "function" == typeof this.onClose && this.onClose(),
          (this.toastElement.style.animationName = "slide-out-blurred-right"),
          this.toastElement.addEventListener("animationend", () => {
            clearTimeout(this.dismissTimeout),
              this.toastElement.parentNode &&
                this.toastElement.parentNode.removeChild(this.toastElement);
          });
      }
    }
    class y {
      constructor() {
        (this.toastQueue = []),
          (this.isDisplayingToast = !1),
          (this.container = document.createElement("div")),
          this.container.classList.add("toast-container"),
          document.body.appendChild(this.container);
      }
      addToast(t, e = "default", r = {}) {
        const n = new b(t, e, r);
        this.toastQueue.push(n), this.displayNextToast();
      }
      displayNextToast() {
        if (this.toastQueue.length > 0) {
          this.isDisplayingToast = !0;
          const t = this.toastQueue.shift();
          this.container.insertBefore(
            t.toastElement,
            this.container.firstChild
          ),
            t.show(() => {
              (this.isDisplayingToast = !1), this.displayNextToast();
            });
        }
      }
    }
  })(),
    (Toaster = n);
})();
