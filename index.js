import * as p from "react";
import et, { useState as Ve, useCallback as Ci, forwardRef as Gi, useEffect as Ri, useRef as ai, useId as nm, useMemo as Cs, isValidElement as ss, cloneElement as os, Children as im, useImperativeHandle as rm } from "react";
import * as pd from "react-dom";
import Vr from "react-dom";
function sm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Br = { exports: {} }, sr = {};
var cc;
function om() {
  if (cc) return sr;
  cc = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(i, r, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), r.key !== void 0 && (o = "" + r.key), "key" in r) {
      s = {};
      for (var a in r)
        a !== "key" && (s[a] = r[a]);
    } else s = r;
    return r = s.ref, {
      $$typeof: t,
      type: i,
      key: o,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return sr.Fragment = e, sr.jsx = n, sr.jsxs = n, sr;
}
var or = {};
var uc;
function am() {
  return uc || (uc = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(I) {
      if (I == null) return null;
      if (typeof I == "function")
        return I.$$typeof === B ? null : I.displayName || I.name || null;
      if (typeof I == "string") return I;
      switch (I) {
        case C:
          return "Fragment";
        case b:
          return "Profiler";
        case h:
          return "StrictMode";
        case D:
          return "Suspense";
        case T:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof I == "object")
        switch (typeof I.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), I.$$typeof) {
          case k:
            return "Portal";
          case E:
            return I.displayName || "Context";
          case w:
            return (I._context.displayName || "Context") + ".Consumer";
          case $:
            var j = I.render;
            return I = I.displayName, I || (I = j.displayName || j.name || "", I = I !== "" ? "ForwardRef(" + I + ")" : "ForwardRef"), I;
          case O:
            return j = I.displayName || null, j !== null ? j : t(I.type) || "Memo";
          case A:
            j = I._payload, I = I._init;
            try {
              return t(I(j));
            } catch {
            }
        }
      return null;
    }
    function e(I) {
      return "" + I;
    }
    function n(I) {
      try {
        e(I);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var Z = j.error, G = typeof Symbol == "function" && Symbol.toStringTag && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return Z.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), e(I);
      }
    }
    function i(I) {
      if (I === C) return "<>";
      if (typeof I == "object" && I !== null && I.$$typeof === A)
        return "<...>";
      try {
        var j = t(I);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var I = X.A;
      return I === null ? null : I.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(I) {
      if (z.call(I, "key")) {
        var j = Object.getOwnPropertyDescriptor(I, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return I.key !== void 0;
    }
    function a(I, j) {
      function Z() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      Z.isReactWarning = !0, Object.defineProperty(I, "key", {
        get: Z,
        configurable: !0
      });
    }
    function u() {
      var I = t(this.type);
      return re[I] || (re[I] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), I = this.props.ref, I !== void 0 ? I : null;
    }
    function d(I, j, Z, G, q, ae) {
      var _ = Z.ref;
      return I = {
        $$typeof: S,
        type: I,
        key: j,
        props: Z,
        _owner: G
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(I, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(I, "ref", { enumerable: !1, value: null }), I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(I, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(I, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(I, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    }
    function f(I, j, Z, G, q, ae) {
      var _ = j.children;
      if (_ !== void 0)
        if (G)
          if (Q(_)) {
            for (G = 0; G < _.length; G++)
              y(_[G]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(_);
      if (z.call(j, "key")) {
        _ = t(I);
        var K = Object.keys(j).filter(function(ce) {
          return ce !== "key";
        });
        G = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", M[_ + G] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          _,
          K,
          _
        ), M[_ + G] = !0);
      }
      if (_ = null, Z !== void 0 && (n(Z), _ = "" + Z), o(j) && (n(j.key), _ = "" + j.key), "key" in j) {
        Z = {};
        for (var se in j)
          se !== "key" && (Z[se] = j[se]);
      } else Z = j;
      return _ && a(
        Z,
        typeof I == "function" ? I.displayName || I.name || "Unknown" : I
      ), d(
        I,
        _,
        Z,
        r(),
        q,
        ae
      );
    }
    function y(I) {
      c(I) ? I._store && (I._store.validated = 1) : typeof I == "object" && I !== null && I.$$typeof === A && (I._payload.status === "fulfilled" ? c(I._payload.value) && I._payload.value._store && (I._payload.value._store.validated = 1) : I._store && (I._store.validated = 1));
    }
    function c(I) {
      return typeof I == "object" && I !== null && I.$$typeof === S;
    }
    var m = et, S = /* @__PURE__ */ Symbol.for("react.transitional.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), E = /* @__PURE__ */ Symbol.for("react.context"), $ = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), X = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, Q = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(I) {
        return I();
      }
    };
    var V, re = {}, P = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), Y = H(i(s)), M = {};
    or.Fragment = C, or.jsx = function(I, j, Z) {
      var G = 1e4 > X.recentlyCreatedOwnerStacks++;
      return f(
        I,
        j,
        Z,
        !1,
        G ? Error("react-stack-top-frame") : P,
        G ? H(i(I)) : Y
      );
    }, or.jsxs = function(I, j, Z) {
      var G = 1e4 > X.recentlyCreatedOwnerStacks++;
      return f(
        I,
        j,
        Z,
        !0,
        G ? Error("react-stack-top-frame") : P,
        G ? H(i(I)) : Y
      );
    };
  })()), or;
}
var dc;
function lm() {
  return dc || (dc = 1, process.env.NODE_ENV === "production" ? Br.exports = om() : Br.exports = am()), Br.exports;
}
var v = lm();
function R(t, e, n) {
  function i(a, u) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: u,
        constr: o,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(t))
      return;
    a._zod.traits.add(t), e(a, u);
    const d = o.prototype, f = Object.keys(d);
    for (let y = 0; y < f.length; y++) {
      const c = f[y];
      c in a || (a[c] = d[c].bind(a));
    }
  }
  const r = n?.Parent ?? Object;
  class s extends r {
  }
  Object.defineProperty(s, "name", { value: t });
  function o(a) {
    var u;
    const d = n?.Parent ? new s() : this;
    i(d, a), (u = d._zod).deferred ?? (u.deferred = []);
    for (const f of d._zod.deferred)
      f();
    return d;
  }
  return Object.defineProperty(o, "init", { value: i }), Object.defineProperty(o, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(t)
  }), Object.defineProperty(o, "name", { value: t }), o;
}
class Bi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class md extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
  }
}
const fd = {};
function li(t) {
  return fd;
}
function vd(t) {
  const e = Object.values(t).filter((i) => typeof i == "number");
  return Object.entries(t).filter(([i, r]) => e.indexOf(+i) === -1).map(([i, r]) => r);
}
function ia(t, e) {
  return typeof e == "bigint" ? e.toString() : e;
}
function sl(t) {
  return {
    get value() {
      {
        const e = t();
        return Object.defineProperty(this, "value", { value: e }), e;
      }
    }
  };
}
function ol(t) {
  return t == null;
}
function al(t) {
  const e = t.startsWith("^") ? 1 : 0, n = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(e, n);
}
function cm(t, e) {
  const n = (t.toString().split(".")[1] || "").length, i = e.toString();
  let r = (i.split(".")[1] || "").length;
  if (r === 0 && /\d?e-\d?/.test(i)) {
    const u = i.match(/\d?e-(\d?)/);
    u?.[1] && (r = Number.parseInt(u[1]));
  }
  const s = n > r ? n : r, o = Number.parseInt(t.toFixed(s).replace(".", "")), a = Number.parseInt(e.toFixed(s).replace(".", ""));
  return o % a / 10 ** s;
}
const hc = /* @__PURE__ */ Symbol("evaluating");
function Re(t, e, n) {
  let i;
  Object.defineProperty(t, e, {
    get() {
      if (i !== hc)
        return i === void 0 && (i = hc, i = n()), i;
    },
    set(r) {
      Object.defineProperty(t, e, {
        value: r
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function hi(t, e, n) {
  Object.defineProperty(t, e, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Kn(...t) {
  const e = {};
  for (const n of t) {
    const i = Object.getOwnPropertyDescriptors(n);
    Object.assign(e, i);
  }
  return Object.defineProperties({}, e);
}
function pc(t) {
  return JSON.stringify(t);
}
function um(t) {
  return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const gd = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Is(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const dm = sl(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function Er(t) {
  if (Is(t) === !1)
    return !1;
  const e = t.constructor;
  if (e === void 0 || typeof e != "function")
    return !0;
  const n = e.prototype;
  return !(Is(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function bd(t) {
  return Er(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const hm = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Zi(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Gn(t, e, n) {
  const i = new t._zod.constr(e ?? t._zod.def);
  return (!e || n?.parent) && (i._zod.parent = t), i;
}
function le(t) {
  const e = t;
  if (!e)
    return {};
  if (typeof e == "string")
    return { error: () => e };
  if (e?.message !== void 0) {
    if (e?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    e.error = e.message;
  }
  return delete e.message, typeof e.error == "string" ? { ...e, error: () => e.error } : e;
}
function pm(t) {
  return Object.keys(t).filter((e) => t[e]._zod.optin === "optional" && t[e]._zod.optout === "optional");
}
const mm = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function fm(t, e) {
  const n = t._zod.def, i = n.checks;
  if (i && i.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = Kn(t._zod.def, {
    get shape() {
      const o = {};
      for (const a in e) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        e[a] && (o[a] = n.shape[a]);
      }
      return hi(this, "shape", o), o;
    },
    checks: []
  });
  return Gn(t, s);
}
function vm(t, e) {
  const n = t._zod.def, i = n.checks;
  if (i && i.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = Kn(t._zod.def, {
    get shape() {
      const o = { ...t._zod.def.shape };
      for (const a in e) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        e[a] && delete o[a];
      }
      return hi(this, "shape", o), o;
    },
    checks: []
  });
  return Gn(t, s);
}
function gm(t, e) {
  if (!Er(e))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = t._zod.def.checks;
  if (n && n.length > 0) {
    const s = t._zod.def.shape;
    for (const o in e)
      if (Object.getOwnPropertyDescriptor(s, o) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const r = Kn(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...e };
      return hi(this, "shape", s), s;
    }
  });
  return Gn(t, r);
}
function bm(t, e) {
  if (!Er(e))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = Kn(t._zod.def, {
    get shape() {
      const i = { ...t._zod.def.shape, ...e };
      return hi(this, "shape", i), i;
    }
  });
  return Gn(t, n);
}
function ym(t, e) {
  const n = Kn(t._zod.def, {
    get shape() {
      const i = { ...t._zod.def.shape, ...e._zod.def.shape };
      return hi(this, "shape", i), i;
    },
    get catchall() {
      return e._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Gn(t, n);
}
function xm(t, e, n) {
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const o = Kn(e._zod.def, {
    get shape() {
      const a = e._zod.def.shape, u = { ...a };
      if (n)
        for (const d in n) {
          if (!(d in a))
            throw new Error(`Unrecognized key: "${d}"`);
          n[d] && (u[d] = t ? new t({
            type: "optional",
            innerType: a[d]
          }) : a[d]);
        }
      else
        for (const d in a)
          u[d] = t ? new t({
            type: "optional",
            innerType: a[d]
          }) : a[d];
      return hi(this, "shape", u), u;
    },
    checks: []
  });
  return Gn(e, o);
}
function wm(t, e, n) {
  const i = Kn(e._zod.def, {
    get shape() {
      const r = e._zod.def.shape, s = { ...r };
      if (n)
        for (const o in n) {
          if (!(o in s))
            throw new Error(`Unrecognized key: "${o}"`);
          n[o] && (s[o] = new t({
            type: "nonoptional",
            innerType: r[o]
          }));
        }
      else
        for (const o in r)
          s[o] = new t({
            type: "nonoptional",
            innerType: r[o]
          });
      return hi(this, "shape", s), s;
    }
  });
  return Gn(e, i);
}
function Ai(t, e = 0) {
  if (t.aborted === !0)
    return !0;
  for (let n = e; n < t.issues.length; n++)
    if (t.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function yd(t, e) {
  return e.map((n) => {
    var i;
    return (i = n).path ?? (i.path = []), n.path.unshift(t), n;
  });
}
function Hr(t) {
  return typeof t == "string" ? t : t?.message;
}
function ci(t, e, n) {
  const i = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const r = Hr(t.inst?._zod.def?.error?.(t)) ?? Hr(e?.error?.(t)) ?? Hr(n.customError?.(t)) ?? Hr(n.localeError?.(t)) ?? "Invalid input";
    i.message = r;
  }
  return delete i.inst, delete i.continue, e?.reportInput || delete i.input, i;
}
function ll(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function Sr(...t) {
  const [e, n, i] = t;
  return typeof e == "string" ? {
    message: e,
    code: "custom",
    input: n,
    inst: i
  } : { ...e };
}
const xd = (t, e) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: e,
    enumerable: !1
  }), t.message = JSON.stringify(e, ia, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, wd = R("$ZodError", xd), $d = R("$ZodError", xd, { Parent: Error });
function $m(t, e = (n) => n.message) {
  const n = {}, i = [];
  for (const r of t.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(e(r))) : i.push(e(r));
  return { formErrors: i, fieldErrors: n };
}
function Em(t, e = (n) => n.message) {
  const n = { _errors: [] }, i = (r) => {
    for (const s of r.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((o) => i({ issues: o }));
      else if (s.code === "invalid_key")
        i({ issues: s.issues });
      else if (s.code === "invalid_element")
        i({ issues: s.issues });
      else if (s.path.length === 0)
        n._errors.push(e(s));
      else {
        let o = n, a = 0;
        for (; a < s.path.length; ) {
          const u = s.path[a];
          a === s.path.length - 1 ? (o[u] = o[u] || { _errors: [] }, o[u]._errors.push(e(s))) : o[u] = o[u] || { _errors: [] }, o = o[u], a++;
        }
      }
  };
  return i(t), n;
}
const cl = (t) => (e, n, i, r) => {
  const s = i ? Object.assign(i, { async: !1 }) : { async: !1 }, o = e._zod.run({ value: n, issues: [] }, s);
  if (o instanceof Promise)
    throw new Bi();
  if (o.issues.length) {
    const a = new (r?.Err ?? t)(o.issues.map((u) => ci(u, s, li())));
    throw gd(a, r?.callee), a;
  }
  return o.value;
}, ul = (t) => async (e, n, i, r) => {
  const s = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let o = e._zod.run({ value: n, issues: [] }, s);
  if (o instanceof Promise && (o = await o), o.issues.length) {
    const a = new (r?.Err ?? t)(o.issues.map((u) => ci(u, s, li())));
    throw gd(a, r?.callee), a;
  }
  return o.value;
}, Hs = (t) => (e, n, i) => {
  const r = i ? { ...i, async: !1 } : { async: !1 }, s = e._zod.run({ value: n, issues: [] }, r);
  if (s instanceof Promise)
    throw new Bi();
  return s.issues.length ? {
    success: !1,
    error: new (t ?? wd)(s.issues.map((o) => ci(o, r, li())))
  } : { success: !0, data: s.value };
}, Sm = /* @__PURE__ */ Hs($d), Us = (t) => async (e, n, i) => {
  const r = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let s = e._zod.run({ value: n, issues: [] }, r);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new t(s.issues.map((o) => ci(o, r, li())))
  } : { success: !0, data: s.value };
}, km = /* @__PURE__ */ Us($d), Dm = (t) => (e, n, i) => {
  const r = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return cl(t)(e, n, r);
}, Cm = (t) => (e, n, i) => cl(t)(e, n, i), Im = (t) => async (e, n, i) => {
  const r = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return ul(t)(e, n, r);
}, Mm = (t) => async (e, n, i) => ul(t)(e, n, i), Om = (t) => (e, n, i) => {
  const r = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Hs(t)(e, n, r);
}, Nm = (t) => (e, n, i) => Hs(t)(e, n, i), Tm = (t) => async (e, n, i) => {
  const r = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Us(t)(e, n, r);
}, Pm = (t) => async (e, n, i) => Us(t)(e, n, i), Rm = /^[cC][^\s-]{8,}$/, Am = /^[0-9a-z]+$/, _m = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, zm = /^[0-9a-vA-V]{20}$/, jm = /^[A-Za-z0-9]{27}$/, Fm = /^[a-zA-Z0-9_-]{21}$/, Lm = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Vm = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, mc = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Bm = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Hm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Um() {
  return new RegExp(Hm, "u");
}
const Wm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Zm = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, qm = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ym = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Km = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ed = /^[A-Za-z0-9_-]*$/, Gm = /^\+[1-9]\d{6,14}$/, Sd = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Jm = /* @__PURE__ */ new RegExp(`^${Sd}$`);
function kd(t) {
  const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${e}` : t.precision === 0 ? `${e}:[0-5]\\d` : `${e}:[0-5]\\d\\.\\d{${t.precision}}` : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Qm(t) {
  return new RegExp(`^${kd(t)}$`);
}
function Xm(t) {
  const e = kd({ precision: t.precision }), n = ["Z"];
  t.local && n.push(""), t.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${e}(?:${n.join("|")})`;
  return new RegExp(`^${Sd}T(?:${i})$`);
}
const ef = (t) => {
  const e = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${e}$`);
}, tf = /^-?\d+$/, nf = /^-?\d+(?:\.\d+)?$/, rf = /^(?:true|false)$/i, sf = /^[^A-Z]*$/, of = /^[^a-z]*$/, jt = /* @__PURE__ */ R("$ZodCheck", (t, e) => {
  var n;
  t._zod ?? (t._zod = {}), t._zod.def = e, (n = t._zod).onattach ?? (n.onattach = []);
}), Dd = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Cd = /* @__PURE__ */ R("$ZodCheckLessThan", (t, e) => {
  jt.init(t, e);
  const n = Dd[typeof e.value];
  t._zod.onattach.push((i) => {
    const r = i._zod.bag, s = (e.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    e.value < s && (e.inclusive ? r.maximum = e.value : r.exclusiveMaximum = e.value);
  }), t._zod.check = (i) => {
    (e.inclusive ? i.value <= e.value : i.value < e.value) || i.issues.push({
      origin: n,
      code: "too_big",
      maximum: typeof e.value == "object" ? e.value.getTime() : e.value,
      input: i.value,
      inclusive: e.inclusive,
      inst: t,
      continue: !e.abort
    });
  };
}), Id = /* @__PURE__ */ R("$ZodCheckGreaterThan", (t, e) => {
  jt.init(t, e);
  const n = Dd[typeof e.value];
  t._zod.onattach.push((i) => {
    const r = i._zod.bag, s = (e.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    e.value > s && (e.inclusive ? r.minimum = e.value : r.exclusiveMinimum = e.value);
  }), t._zod.check = (i) => {
    (e.inclusive ? i.value >= e.value : i.value > e.value) || i.issues.push({
      origin: n,
      code: "too_small",
      minimum: typeof e.value == "object" ? e.value.getTime() : e.value,
      input: i.value,
      inclusive: e.inclusive,
      inst: t,
      continue: !e.abort
    });
  };
}), af = /* @__PURE__ */ R("$ZodCheckMultipleOf", (t, e) => {
  jt.init(t, e), t._zod.onattach.push((n) => {
    var i;
    (i = n._zod.bag).multipleOf ?? (i.multipleOf = e.value);
  }), t._zod.check = (n) => {
    if (typeof n.value != typeof e.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % e.value === BigInt(0) : cm(n.value, e.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: e.value,
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), lf = /* @__PURE__ */ R("$ZodCheckNumberFormat", (t, e) => {
  jt.init(t, e), e.format = e.format || "float64";
  const n = e.format?.includes("int"), i = n ? "int" : "number", [r, s] = mm[e.format];
  t._zod.onattach.push((o) => {
    const a = o._zod.bag;
    a.format = e.format, a.minimum = r, a.maximum = s, n && (a.pattern = tf);
  }), t._zod.check = (o) => {
    const a = o.value;
    if (n) {
      if (!Number.isInteger(a)) {
        o.issues.push({
          expected: i,
          format: e.format,
          code: "invalid_type",
          continue: !1,
          input: a,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        a > 0 ? o.issues.push({
          input: a,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: i,
          inclusive: !0,
          continue: !e.abort
        }) : o.issues.push({
          input: a,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: i,
          inclusive: !0,
          continue: !e.abort
        });
        return;
      }
    }
    a < r && o.issues.push({
      origin: "number",
      input: a,
      code: "too_small",
      minimum: r,
      inclusive: !0,
      inst: t,
      continue: !e.abort
    }), a > s && o.issues.push({
      origin: "number",
      input: a,
      code: "too_big",
      maximum: s,
      inclusive: !0,
      inst: t,
      continue: !e.abort
    });
  };
}), cf = /* @__PURE__ */ R("$ZodCheckMaxLength", (t, e) => {
  var n;
  jt.init(t, e), (n = t._zod.def).when ?? (n.when = (i) => {
    const r = i.value;
    return !ol(r) && r.length !== void 0;
  }), t._zod.onattach.push((i) => {
    const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    e.maximum < r && (i._zod.bag.maximum = e.maximum);
  }), t._zod.check = (i) => {
    const r = i.value;
    if (r.length <= e.maximum)
      return;
    const o = ll(r);
    i.issues.push({
      origin: o,
      code: "too_big",
      maximum: e.maximum,
      inclusive: !0,
      input: r,
      inst: t,
      continue: !e.abort
    });
  };
}), uf = /* @__PURE__ */ R("$ZodCheckMinLength", (t, e) => {
  var n;
  jt.init(t, e), (n = t._zod.def).when ?? (n.when = (i) => {
    const r = i.value;
    return !ol(r) && r.length !== void 0;
  }), t._zod.onattach.push((i) => {
    const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    e.minimum > r && (i._zod.bag.minimum = e.minimum);
  }), t._zod.check = (i) => {
    const r = i.value;
    if (r.length >= e.minimum)
      return;
    const o = ll(r);
    i.issues.push({
      origin: o,
      code: "too_small",
      minimum: e.minimum,
      inclusive: !0,
      input: r,
      inst: t,
      continue: !e.abort
    });
  };
}), df = /* @__PURE__ */ R("$ZodCheckLengthEquals", (t, e) => {
  var n;
  jt.init(t, e), (n = t._zod.def).when ?? (n.when = (i) => {
    const r = i.value;
    return !ol(r) && r.length !== void 0;
  }), t._zod.onattach.push((i) => {
    const r = i._zod.bag;
    r.minimum = e.length, r.maximum = e.length, r.length = e.length;
  }), t._zod.check = (i) => {
    const r = i.value, s = r.length;
    if (s === e.length)
      return;
    const o = ll(r), a = s > e.length;
    i.issues.push({
      origin: o,
      ...a ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length },
      inclusive: !0,
      exact: !0,
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Ws = /* @__PURE__ */ R("$ZodCheckStringFormat", (t, e) => {
  var n, i;
  jt.init(t, e), t._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.format = e.format, e.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(e.pattern));
  }), e.pattern ? (n = t._zod).check ?? (n.check = (r) => {
    e.pattern.lastIndex = 0, !e.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: e.format,
      input: r.value,
      ...e.pattern ? { pattern: e.pattern.toString() } : {},
      inst: t,
      continue: !e.abort
    });
  }) : (i = t._zod).check ?? (i.check = () => {
  });
}), hf = /* @__PURE__ */ R("$ZodCheckRegex", (t, e) => {
  Ws.init(t, e), t._zod.check = (n) => {
    e.pattern.lastIndex = 0, !e.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: e.pattern.toString(),
      inst: t,
      continue: !e.abort
    });
  };
}), pf = /* @__PURE__ */ R("$ZodCheckLowerCase", (t, e) => {
  e.pattern ?? (e.pattern = sf), Ws.init(t, e);
}), mf = /* @__PURE__ */ R("$ZodCheckUpperCase", (t, e) => {
  e.pattern ?? (e.pattern = of), Ws.init(t, e);
}), ff = /* @__PURE__ */ R("$ZodCheckIncludes", (t, e) => {
  jt.init(t, e);
  const n = Zi(e.includes), i = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${n}` : n);
  e.pattern = i, t._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(i);
  }), t._zod.check = (r) => {
    r.value.includes(e.includes, e.position) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: e.includes,
      input: r.value,
      inst: t,
      continue: !e.abort
    });
  };
}), vf = /* @__PURE__ */ R("$ZodCheckStartsWith", (t, e) => {
  jt.init(t, e);
  const n = new RegExp(`^${Zi(e.prefix)}.*`);
  e.pattern ?? (e.pattern = n), t._zod.onattach.push((i) => {
    const r = i._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(n);
  }), t._zod.check = (i) => {
    i.value.startsWith(e.prefix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: e.prefix,
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), gf = /* @__PURE__ */ R("$ZodCheckEndsWith", (t, e) => {
  jt.init(t, e);
  const n = new RegExp(`.*${Zi(e.suffix)}$`);
  e.pattern ?? (e.pattern = n), t._zod.onattach.push((i) => {
    const r = i._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(n);
  }), t._zod.check = (i) => {
    i.value.endsWith(e.suffix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: e.suffix,
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), bf = /* @__PURE__ */ R("$ZodCheckOverwrite", (t, e) => {
  jt.init(t, e), t._zod.check = (n) => {
    n.value = e.tx(n.value);
  };
});
class yf {
  constructor(e = []) {
    this.content = [], this.indent = 0, this && (this.args = e);
  }
  indented(e) {
    this.indent += 1, e(this), this.indent -= 1;
  }
  write(e) {
    if (typeof e == "function") {
      e(this, { execution: "sync" }), e(this, { execution: "async" });
      return;
    }
    const i = e.split(`
`).filter((o) => o), r = Math.min(...i.map((o) => o.length - o.trimStart().length)), s = i.map((o) => o.slice(r)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of s)
      this.content.push(o);
  }
  compile() {
    const e = Function, n = this?.args, r = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new e(...n, r.join(`
`));
  }
}
const xf = {
  major: 4,
  minor: 3,
  patch: 5
}, tt = /* @__PURE__ */ R("$ZodType", (t, e) => {
  var n;
  t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = xf;
  const i = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && i.unshift(t);
  for (const r of i)
    for (const s of r._zod.onattach)
      s(t);
  if (i.length === 0)
    (n = t._zod).deferred ?? (n.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const r = (o, a, u) => {
      let d = Ai(o), f;
      for (const y of a) {
        if (y._zod.def.when) {
          if (!y._zod.def.when(o))
            continue;
        } else if (d)
          continue;
        const c = o.issues.length, m = y._zod.check(o);
        if (m instanceof Promise && u?.async === !1)
          throw new Bi();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, o.issues.length !== c && (d || (d = Ai(o, c)));
          });
        else {
          if (o.issues.length === c)
            continue;
          d || (d = Ai(o, c));
        }
      }
      return f ? f.then(() => o) : o;
    }, s = (o, a, u) => {
      if (Ai(o))
        return o.aborted = !0, o;
      const d = r(a, i, u);
      if (d instanceof Promise) {
        if (u.async === !1)
          throw new Bi();
        return d.then((f) => t._zod.parse(f, u));
      }
      return t._zod.parse(d, u);
    };
    t._zod.run = (o, a) => {
      if (a.skipChecks)
        return t._zod.parse(o, a);
      if (a.direction === "backward") {
        const d = t._zod.parse({ value: o.value, issues: [] }, { ...a, skipChecks: !0 });
        return d instanceof Promise ? d.then((f) => s(f, o, a)) : s(d, o, a);
      }
      const u = t._zod.parse(o, a);
      if (u instanceof Promise) {
        if (a.async === !1)
          throw new Bi();
        return u.then((d) => r(d, i, a));
      }
      return r(u, i, a);
    };
  }
  Re(t, "~standard", () => ({
    validate: (r) => {
      try {
        const s = Sm(t, r);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return km(t, r).then((o) => o.success ? { value: o.data } : { issues: o.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), dl = /* @__PURE__ */ R("$ZodString", (t, e) => {
  tt.init(t, e), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? ef(t._zod.bag), t._zod.parse = (n, i) => {
    if (e.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: t
    }), n;
  };
}), Ye = /* @__PURE__ */ R("$ZodStringFormat", (t, e) => {
  Ws.init(t, e), dl.init(t, e);
}), wf = /* @__PURE__ */ R("$ZodGUID", (t, e) => {
  e.pattern ?? (e.pattern = Vm), Ye.init(t, e);
}), $f = /* @__PURE__ */ R("$ZodUUID", (t, e) => {
  if (e.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[e.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${e.version}"`);
    e.pattern ?? (e.pattern = mc(i));
  } else
    e.pattern ?? (e.pattern = mc());
  Ye.init(t, e);
}), Ef = /* @__PURE__ */ R("$ZodEmail", (t, e) => {
  e.pattern ?? (e.pattern = Bm), Ye.init(t, e);
}), Sf = /* @__PURE__ */ R("$ZodURL", (t, e) => {
  Ye.init(t, e), t._zod.check = (n) => {
    try {
      const i = n.value.trim(), r = new URL(i);
      e.hostname && (e.hostname.lastIndex = 0, e.hostname.test(r.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: e.hostname.source,
        input: n.value,
        inst: t,
        continue: !e.abort
      })), e.protocol && (e.protocol.lastIndex = 0, e.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: e.protocol.source,
        input: n.value,
        inst: t,
        continue: !e.abort
      })), e.normalize ? n.value = r.href : n.value = i;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: t,
        continue: !e.abort
      });
    }
  };
}), kf = /* @__PURE__ */ R("$ZodEmoji", (t, e) => {
  e.pattern ?? (e.pattern = Um()), Ye.init(t, e);
}), Df = /* @__PURE__ */ R("$ZodNanoID", (t, e) => {
  e.pattern ?? (e.pattern = Fm), Ye.init(t, e);
}), Cf = /* @__PURE__ */ R("$ZodCUID", (t, e) => {
  e.pattern ?? (e.pattern = Rm), Ye.init(t, e);
}), If = /* @__PURE__ */ R("$ZodCUID2", (t, e) => {
  e.pattern ?? (e.pattern = Am), Ye.init(t, e);
}), Mf = /* @__PURE__ */ R("$ZodULID", (t, e) => {
  e.pattern ?? (e.pattern = _m), Ye.init(t, e);
}), Of = /* @__PURE__ */ R("$ZodXID", (t, e) => {
  e.pattern ?? (e.pattern = zm), Ye.init(t, e);
}), Nf = /* @__PURE__ */ R("$ZodKSUID", (t, e) => {
  e.pattern ?? (e.pattern = jm), Ye.init(t, e);
}), Tf = /* @__PURE__ */ R("$ZodISODateTime", (t, e) => {
  e.pattern ?? (e.pattern = Xm(e)), Ye.init(t, e);
}), Pf = /* @__PURE__ */ R("$ZodISODate", (t, e) => {
  e.pattern ?? (e.pattern = Jm), Ye.init(t, e);
}), Rf = /* @__PURE__ */ R("$ZodISOTime", (t, e) => {
  e.pattern ?? (e.pattern = Qm(e)), Ye.init(t, e);
}), Af = /* @__PURE__ */ R("$ZodISODuration", (t, e) => {
  e.pattern ?? (e.pattern = Lm), Ye.init(t, e);
}), _f = /* @__PURE__ */ R("$ZodIPv4", (t, e) => {
  e.pattern ?? (e.pattern = Wm), Ye.init(t, e), t._zod.bag.format = "ipv4";
}), zf = /* @__PURE__ */ R("$ZodIPv6", (t, e) => {
  e.pattern ?? (e.pattern = Zm), Ye.init(t, e), t._zod.bag.format = "ipv6", t._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: t,
        continue: !e.abort
      });
    }
  };
}), jf = /* @__PURE__ */ R("$ZodCIDRv4", (t, e) => {
  e.pattern ?? (e.pattern = qm), Ye.init(t, e);
}), Ff = /* @__PURE__ */ R("$ZodCIDRv6", (t, e) => {
  e.pattern ?? (e.pattern = Ym), Ye.init(t, e), t._zod.check = (n) => {
    const i = n.value.split("/");
    try {
      if (i.length !== 2)
        throw new Error();
      const [r, s] = i;
      if (!s)
        throw new Error();
      const o = Number(s);
      if (`${o}` !== s)
        throw new Error();
      if (o < 0 || o > 128)
        throw new Error();
      new URL(`http://[${r}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: t,
        continue: !e.abort
      });
    }
  };
});
function Md(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const Lf = /* @__PURE__ */ R("$ZodBase64", (t, e) => {
  e.pattern ?? (e.pattern = Km), Ye.init(t, e), t._zod.bag.contentEncoding = "base64", t._zod.check = (n) => {
    Md(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
});
function Vf(t) {
  if (!Ed.test(t))
    return !1;
  const e = t.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), n = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
  return Md(n);
}
const Bf = /* @__PURE__ */ R("$ZodBase64URL", (t, e) => {
  e.pattern ?? (e.pattern = Ed), Ye.init(t, e), t._zod.bag.contentEncoding = "base64url", t._zod.check = (n) => {
    Vf(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Hf = /* @__PURE__ */ R("$ZodE164", (t, e) => {
  e.pattern ?? (e.pattern = Gm), Ye.init(t, e);
});
function Uf(t, e = null) {
  try {
    const n = t.split(".");
    if (n.length !== 3)
      return !1;
    const [i] = n;
    if (!i)
      return !1;
    const r = JSON.parse(atob(i));
    return !("typ" in r && r?.typ !== "JWT" || !r.alg || e && (!("alg" in r) || r.alg !== e));
  } catch {
    return !1;
  }
}
const Wf = /* @__PURE__ */ R("$ZodJWT", (t, e) => {
  Ye.init(t, e), t._zod.check = (n) => {
    Uf(n.value, e.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Od = /* @__PURE__ */ R("$ZodNumber", (t, e) => {
  tt.init(t, e), t._zod.pattern = t._zod.bag.pattern ?? nf, t._zod.parse = (n, i) => {
    if (e.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const r = n.value;
    if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r))
      return n;
    const s = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : "Infinity" : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: r,
      inst: t,
      ...s ? { received: s } : {}
    }), n;
  };
}), Zf = /* @__PURE__ */ R("$ZodNumberFormat", (t, e) => {
  lf.init(t, e), Od.init(t, e);
}), qf = /* @__PURE__ */ R("$ZodBoolean", (t, e) => {
  tt.init(t, e), t._zod.pattern = rf, t._zod.parse = (n, i) => {
    if (e.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const r = n.value;
    return typeof r == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: r,
      inst: t
    }), n;
  };
}), Yf = /* @__PURE__ */ R("$ZodAny", (t, e) => {
  tt.init(t, e), t._zod.parse = (n) => n;
}), Kf = /* @__PURE__ */ R("$ZodUnknown", (t, e) => {
  tt.init(t, e), t._zod.parse = (n) => n;
}), Gf = /* @__PURE__ */ R("$ZodNever", (t, e) => {
  tt.init(t, e), t._zod.parse = (n, i) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: t
  }), n);
});
function fc(t, e, n) {
  t.issues.length && e.issues.push(...yd(n, t.issues)), e.value[n] = t.value;
}
const Jf = /* @__PURE__ */ R("$ZodArray", (t, e) => {
  tt.init(t, e), t._zod.parse = (n, i) => {
    const r = n.value;
    if (!Array.isArray(r))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: t
      }), n;
    n.value = Array(r.length);
    const s = [];
    for (let o = 0; o < r.length; o++) {
      const a = r[o], u = e.element._zod.run({
        value: a,
        issues: []
      }, i);
      u instanceof Promise ? s.push(u.then((d) => fc(d, n, o))) : fc(u, n, o);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function Ms(t, e, n, i, r) {
  if (t.issues.length) {
    if (r && !(n in i))
      return;
    e.issues.push(...yd(n, t.issues));
  }
  t.value === void 0 ? n in i && (e.value[n] = void 0) : e.value[n] = t.value;
}
function Nd(t) {
  const e = Object.keys(t.shape);
  for (const i of e)
    if (!t.shape?.[i]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const n = pm(t.shape);
  return {
    ...t,
    keys: e,
    keySet: new Set(e),
    numKeys: e.length,
    optionalKeys: new Set(n)
  };
}
function Td(t, e, n, i, r, s) {
  const o = [], a = r.keySet, u = r.catchall._zod, d = u.def.type, f = u.optout === "optional";
  for (const y in e) {
    if (a.has(y))
      continue;
    if (d === "never") {
      o.push(y);
      continue;
    }
    const c = u.run({ value: e[y], issues: [] }, i);
    c instanceof Promise ? t.push(c.then((m) => Ms(m, n, y, e, f))) : Ms(c, n, y, e, f);
  }
  return o.length && n.issues.push({
    code: "unrecognized_keys",
    keys: o,
    input: e,
    inst: s
  }), t.length ? Promise.all(t).then(() => n) : n;
}
const Qf = /* @__PURE__ */ R("$ZodObject", (t, e) => {
  if (tt.init(t, e), !Object.getOwnPropertyDescriptor(e, "shape")?.get) {
    const a = e.shape;
    Object.defineProperty(e, "shape", {
      get: () => {
        const u = { ...a };
        return Object.defineProperty(e, "shape", {
          value: u
        }), u;
      }
    });
  }
  const i = sl(() => Nd(e));
  Re(t._zod, "propValues", () => {
    const a = e.shape, u = {};
    for (const d in a) {
      const f = a[d]._zod;
      if (f.values) {
        u[d] ?? (u[d] = /* @__PURE__ */ new Set());
        for (const y of f.values)
          u[d].add(y);
      }
    }
    return u;
  });
  const r = Is, s = e.catchall;
  let o;
  t._zod.parse = (a, u) => {
    o ?? (o = i.value);
    const d = a.value;
    if (!r(d))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: d,
        inst: t
      }), a;
    a.value = {};
    const f = [], y = o.shape;
    for (const c of o.keys) {
      const m = y[c], S = m._zod.optout === "optional", k = m._zod.run({ value: d[c], issues: [] }, u);
      k instanceof Promise ? f.push(k.then((C) => Ms(C, a, c, d, S))) : Ms(k, a, c, d, S);
    }
    return s ? Td(f, d, a, u, i.value, t) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), Xf = /* @__PURE__ */ R("$ZodObjectJIT", (t, e) => {
  Qf.init(t, e);
  const n = t._zod.parse, i = sl(() => Nd(e)), r = (c) => {
    const m = new yf(["shape", "payload", "ctx"]), S = i.value, k = (w) => {
      const E = pc(w);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let h = 0;
    for (const w of S.keys)
      C[w] = `key_${h++}`;
    m.write("const newResult = {};");
    for (const w of S.keys) {
      const E = C[w], $ = pc(w), T = c[w]?._zod?.optout === "optional";
      m.write(`const ${E} = ${k(w)};`), T ? m.write(`
        if (${E}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${E}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${E}.value;
        }
        
      `) : m.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${E}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${E}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const b = m.compile();
    return (w, E) => b(c, w, E);
  };
  let s;
  const o = Is, a = !fd.jitless, d = a && dm.value, f = e.catchall;
  let y;
  t._zod.parse = (c, m) => {
    y ?? (y = i.value);
    const S = c.value;
    return o(S) ? a && d && m?.async === !1 && m.jitless !== !0 ? (s || (s = r(e.shape)), c = s(c, m), f ? Td([], S, c, m, y, t) : c) : n(c, m) : (c.issues.push({
      expected: "object",
      code: "invalid_type",
      input: S,
      inst: t
    }), c);
  };
});
function vc(t, e, n, i) {
  for (const s of t)
    if (s.issues.length === 0)
      return e.value = s.value, e;
  const r = t.filter((s) => !Ai(s));
  return r.length === 1 ? (e.value = r[0].value, r[0]) : (e.issues.push({
    code: "invalid_union",
    input: e.value,
    inst: n,
    errors: t.map((s) => s.issues.map((o) => ci(o, i, li())))
  }), e);
}
const ev = /* @__PURE__ */ R("$ZodUnion", (t, e) => {
  tt.init(t, e), Re(t._zod, "optin", () => e.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), Re(t._zod, "optout", () => e.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), Re(t._zod, "values", () => {
    if (e.options.every((r) => r._zod.values))
      return new Set(e.options.flatMap((r) => Array.from(r._zod.values)));
  }), Re(t._zod, "pattern", () => {
    if (e.options.every((r) => r._zod.pattern)) {
      const r = e.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${r.map((s) => al(s.source)).join("|")})$`);
    }
  });
  const n = e.options.length === 1, i = e.options[0]._zod.run;
  t._zod.parse = (r, s) => {
    if (n)
      return i(r, s);
    let o = !1;
    const a = [];
    for (const u of e.options) {
      const d = u._zod.run({
        value: r.value,
        issues: []
      }, s);
      if (d instanceof Promise)
        a.push(d), o = !0;
      else {
        if (d.issues.length === 0)
          return d;
        a.push(d);
      }
    }
    return o ? Promise.all(a).then((u) => vc(u, r, t, s)) : vc(a, r, t, s);
  };
}), tv = /* @__PURE__ */ R("$ZodIntersection", (t, e) => {
  tt.init(t, e), t._zod.parse = (n, i) => {
    const r = n.value, s = e.left._zod.run({ value: r, issues: [] }, i), o = e.right._zod.run({ value: r, issues: [] }, i);
    return s instanceof Promise || o instanceof Promise ? Promise.all([s, o]).then(([u, d]) => gc(n, u, d)) : gc(n, s, o);
  };
});
function ra(t, e) {
  if (t === e)
    return { valid: !0, data: t };
  if (t instanceof Date && e instanceof Date && +t == +e)
    return { valid: !0, data: t };
  if (Er(t) && Er(e)) {
    const n = Object.keys(e), i = Object.keys(t).filter((s) => n.indexOf(s) !== -1), r = { ...t, ...e };
    for (const s of i) {
      const o = ra(t[s], e[s]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...o.mergeErrorPath]
        };
      r[s] = o.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = t[i], s = e[i], o = ra(r, s);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...o.mergeErrorPath]
        };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function gc(t, e, n) {
  const i = /* @__PURE__ */ new Map();
  let r;
  for (const a of e.issues)
    if (a.code === "unrecognized_keys") {
      r ?? (r = a);
      for (const u of a.keys)
        i.has(u) || i.set(u, {}), i.get(u).l = !0;
    } else
      t.issues.push(a);
  for (const a of n.issues)
    if (a.code === "unrecognized_keys")
      for (const u of a.keys)
        i.has(u) || i.set(u, {}), i.get(u).r = !0;
    else
      t.issues.push(a);
  const s = [...i].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (s.length && r && t.issues.push({ ...r, keys: s }), Ai(t))
    return t;
  const o = ra(e.value, n.value);
  if (!o.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return t.value = o.data, t;
}
const nv = /* @__PURE__ */ R("$ZodEnum", (t, e) => {
  tt.init(t, e);
  const n = vd(e.entries), i = new Set(n);
  t._zod.values = i, t._zod.pattern = new RegExp(`^(${n.filter((r) => hm.has(typeof r)).map((r) => typeof r == "string" ? Zi(r) : r.toString()).join("|")})$`), t._zod.parse = (r, s) => {
    const o = r.value;
    return i.has(o) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: o,
      inst: t
    }), r;
  };
}), iv = /* @__PURE__ */ R("$ZodLiteral", (t, e) => {
  if (tt.init(t, e), e.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const n = new Set(e.values);
  t._zod.values = n, t._zod.pattern = new RegExp(`^(${e.values.map((i) => typeof i == "string" ? Zi(i) : i ? Zi(i.toString()) : String(i)).join("|")})$`), t._zod.parse = (i, r) => {
    const s = i.value;
    return n.has(s) || i.issues.push({
      code: "invalid_value",
      values: e.values,
      input: s,
      inst: t
    }), i;
  };
}), rv = /* @__PURE__ */ R("$ZodTransform", (t, e) => {
  tt.init(t, e), t._zod.parse = (n, i) => {
    if (i.direction === "backward")
      throw new md(t.constructor.name);
    const r = e.transform(n.value, n);
    if (i.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((o) => (n.value = o, n));
    if (r instanceof Promise)
      throw new Bi();
    return n.value = r, n;
  };
});
function bc(t, e) {
  return t.issues.length && e === void 0 ? { issues: [], value: void 0 } : t;
}
const Pd = /* @__PURE__ */ R("$ZodOptional", (t, e) => {
  tt.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", Re(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([...e.innerType._zod.values, void 0]) : void 0), Re(t._zod, "pattern", () => {
    const n = e.innerType._zod.pattern;
    return n ? new RegExp(`^(${al(n.source)})?$`) : void 0;
  }), t._zod.parse = (n, i) => {
    if (e.innerType._zod.optin === "optional") {
      const r = e.innerType._zod.run(n, i);
      return r instanceof Promise ? r.then((s) => bc(s, n.value)) : bc(r, n.value);
    }
    return n.value === void 0 ? n : e.innerType._zod.run(n, i);
  };
}), sv = /* @__PURE__ */ R("$ZodExactOptional", (t, e) => {
  Pd.init(t, e), Re(t._zod, "values", () => e.innerType._zod.values), Re(t._zod, "pattern", () => e.innerType._zod.pattern), t._zod.parse = (n, i) => e.innerType._zod.run(n, i);
}), ov = /* @__PURE__ */ R("$ZodNullable", (t, e) => {
  tt.init(t, e), Re(t._zod, "optin", () => e.innerType._zod.optin), Re(t._zod, "optout", () => e.innerType._zod.optout), Re(t._zod, "pattern", () => {
    const n = e.innerType._zod.pattern;
    return n ? new RegExp(`^(${al(n.source)}|null)$`) : void 0;
  }), Re(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([...e.innerType._zod.values, null]) : void 0), t._zod.parse = (n, i) => n.value === null ? n : e.innerType._zod.run(n, i);
}), av = /* @__PURE__ */ R("$ZodDefault", (t, e) => {
  tt.init(t, e), t._zod.optin = "optional", Re(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (n, i) => {
    if (i.direction === "backward")
      return e.innerType._zod.run(n, i);
    if (n.value === void 0)
      return n.value = e.defaultValue, n;
    const r = e.innerType._zod.run(n, i);
    return r instanceof Promise ? r.then((s) => yc(s, e)) : yc(r, e);
  };
});
function yc(t, e) {
  return t.value === void 0 && (t.value = e.defaultValue), t;
}
const lv = /* @__PURE__ */ R("$ZodPrefault", (t, e) => {
  tt.init(t, e), t._zod.optin = "optional", Re(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (n, i) => (i.direction === "backward" || n.value === void 0 && (n.value = e.defaultValue), e.innerType._zod.run(n, i));
}), cv = /* @__PURE__ */ R("$ZodNonOptional", (t, e) => {
  tt.init(t, e), Re(t._zod, "values", () => {
    const n = e.innerType._zod.values;
    return n ? new Set([...n].filter((i) => i !== void 0)) : void 0;
  }), t._zod.parse = (n, i) => {
    const r = e.innerType._zod.run(n, i);
    return r instanceof Promise ? r.then((s) => xc(s, t)) : xc(r, t);
  };
});
function xc(t, e) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: e
  }), t;
}
const uv = /* @__PURE__ */ R("$ZodCatch", (t, e) => {
  tt.init(t, e), Re(t._zod, "optin", () => e.innerType._zod.optin), Re(t._zod, "optout", () => e.innerType._zod.optout), Re(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (n, i) => {
    if (i.direction === "backward")
      return e.innerType._zod.run(n, i);
    const r = e.innerType._zod.run(n, i);
    return r instanceof Promise ? r.then((s) => (n.value = s.value, s.issues.length && (n.value = e.catchValue({
      ...n,
      error: {
        issues: s.issues.map((o) => ci(o, i, li()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = e.catchValue({
      ...n,
      error: {
        issues: r.issues.map((s) => ci(s, i, li()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), dv = /* @__PURE__ */ R("$ZodPipe", (t, e) => {
  tt.init(t, e), Re(t._zod, "values", () => e.in._zod.values), Re(t._zod, "optin", () => e.in._zod.optin), Re(t._zod, "optout", () => e.out._zod.optout), Re(t._zod, "propValues", () => e.in._zod.propValues), t._zod.parse = (n, i) => {
    if (i.direction === "backward") {
      const s = e.out._zod.run(n, i);
      return s instanceof Promise ? s.then((o) => Ur(o, e.in, i)) : Ur(s, e.in, i);
    }
    const r = e.in._zod.run(n, i);
    return r instanceof Promise ? r.then((s) => Ur(s, e.out, i)) : Ur(r, e.out, i);
  };
});
function Ur(t, e, n) {
  return t.issues.length ? (t.aborted = !0, t) : e._zod.run({ value: t.value, issues: t.issues }, n);
}
const hv = /* @__PURE__ */ R("$ZodReadonly", (t, e) => {
  tt.init(t, e), Re(t._zod, "propValues", () => e.innerType._zod.propValues), Re(t._zod, "values", () => e.innerType._zod.values), Re(t._zod, "optin", () => e.innerType?._zod?.optin), Re(t._zod, "optout", () => e.innerType?._zod?.optout), t._zod.parse = (n, i) => {
    if (i.direction === "backward")
      return e.innerType._zod.run(n, i);
    const r = e.innerType._zod.run(n, i);
    return r instanceof Promise ? r.then(wc) : wc(r);
  };
});
function wc(t) {
  return t.value = Object.freeze(t.value), t;
}
const pv = /* @__PURE__ */ R("$ZodCustom", (t, e) => {
  jt.init(t, e), tt.init(t, e), t._zod.parse = (n, i) => n, t._zod.check = (n) => {
    const i = n.value, r = e.fn(i);
    if (r instanceof Promise)
      return r.then((s) => $c(s, n, i, t));
    $c(r, n, i, t);
  };
});
function $c(t, e, n, i) {
  if (!t) {
    const r = {
      code: "custom",
      input: n,
      inst: i,
      // incorporates params.error into issue reporting
      path: [...i._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !i._zod.def.abort
      // params: inst._zod.def.params,
    };
    i._zod.def.params && (r.params = i._zod.def.params), e.issues.push(Sr(r));
  }
}
var Ec;
class mv {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(e, ...n) {
    const i = n[0];
    return this._map.set(e, i), i && typeof i == "object" && "id" in i && this._idmap.set(i.id, e), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(e) {
    const n = this._map.get(e);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(e), this;
  }
  get(e) {
    const n = e._zod.parent;
    if (n) {
      const i = { ...this.get(n) ?? {} };
      delete i.id;
      const r = { ...i, ...this._map.get(e) };
      return Object.keys(r).length ? r : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
function fv() {
  return new mv();
}
(Ec = globalThis).__zod_globalRegistry ?? (Ec.__zod_globalRegistry = fv());
const cr = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function vv(t, e) {
  return new t({
    type: "string",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function gv(t, e) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Sc(t, e) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function bv(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function yv(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function xv(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function wv(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function $v(t, e) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Ev(t, e) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Sv(t, e) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function kv(t, e) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Dv(t, e) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Cv(t, e) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Iv(t, e) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Mv(t, e) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Ov(t, e) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Nv(t, e) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Tv(t, e) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Pv(t, e) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Rv(t, e) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Av(t, e) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function _v(t, e) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function zv(t, e) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function jv(t, e) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Fv(t, e) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Lv(t, e) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Vv(t, e) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Bv(t, e) {
  return new t({
    type: "number",
    checks: [],
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Hv(t, e) {
  return new t({
    type: "number",
    coerce: !0,
    checks: [],
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Uv(t, e) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Wv(t, e) {
  return new t({
    type: "boolean",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Zv(t) {
  return new t({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function qv(t) {
  return new t({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Yv(t, e) {
  return new t({
    type: "never",
    ...le(e)
  });
}
// @__NO_SIDE_EFFECTS__
function kc(t, e) {
  return new Cd({
    check: "less_than",
    ...le(e),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function po(t, e) {
  return new Cd({
    check: "less_than",
    ...le(e),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Dc(t, e) {
  return new Id({
    check: "greater_than",
    ...le(e),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function mo(t, e) {
  return new Id({
    check: "greater_than",
    ...le(e),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Cc(t, e) {
  return new af({
    check: "multiple_of",
    ...le(e),
    value: t
  });
}
// @__NO_SIDE_EFFECTS__
function Rd(t, e) {
  return new cf({
    check: "max_length",
    ...le(e),
    maximum: t
  });
}
// @__NO_SIDE_EFFECTS__
function Os(t, e) {
  return new uf({
    check: "min_length",
    ...le(e),
    minimum: t
  });
}
// @__NO_SIDE_EFFECTS__
function Ad(t, e) {
  return new df({
    check: "length_equals",
    ...le(e),
    length: t
  });
}
// @__NO_SIDE_EFFECTS__
function Kv(t, e) {
  return new hf({
    check: "string_format",
    format: "regex",
    ...le(e),
    pattern: t
  });
}
// @__NO_SIDE_EFFECTS__
function Gv(t) {
  return new pf({
    check: "string_format",
    format: "lowercase",
    ...le(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jv(t) {
  return new mf({
    check: "string_format",
    format: "uppercase",
    ...le(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qv(t, e) {
  return new ff({
    check: "string_format",
    format: "includes",
    ...le(e),
    includes: t
  });
}
// @__NO_SIDE_EFFECTS__
function Xv(t, e) {
  return new vf({
    check: "string_format",
    format: "starts_with",
    ...le(e),
    prefix: t
  });
}
// @__NO_SIDE_EFFECTS__
function eg(t, e) {
  return new gf({
    check: "string_format",
    format: "ends_with",
    ...le(e),
    suffix: t
  });
}
// @__NO_SIDE_EFFECTS__
function Ji(t) {
  return new bf({
    check: "overwrite",
    tx: t
  });
}
// @__NO_SIDE_EFFECTS__
function tg(t) {
  return /* @__PURE__ */ Ji((e) => e.normalize(t));
}
// @__NO_SIDE_EFFECTS__
function ng() {
  return /* @__PURE__ */ Ji((t) => t.trim());
}
// @__NO_SIDE_EFFECTS__
function ig() {
  return /* @__PURE__ */ Ji((t) => t.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function rg() {
  return /* @__PURE__ */ Ji((t) => t.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function sg() {
  return /* @__PURE__ */ Ji((t) => um(t));
}
// @__NO_SIDE_EFFECTS__
function og(t, e, n) {
  return new t({
    type: "array",
    element: e,
    // get element() {
    //   return element;
    // },
    ...le(n)
  });
}
// @__NO_SIDE_EFFECTS__
function ag(t, e, n) {
  return new t({
    type: "custom",
    check: "custom",
    fn: e,
    ...le(n)
  });
}
// @__NO_SIDE_EFFECTS__
function lg(t) {
  const e = /* @__PURE__ */ cg((n) => (n.addIssue = (i) => {
    if (typeof i == "string")
      n.issues.push(Sr(i, n.value, e._zod.def));
    else {
      const r = i;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = n.value), r.inst ?? (r.inst = e), r.continue ?? (r.continue = !e._zod.def.abort), n.issues.push(Sr(r));
    }
  }, t(n.value, n)));
  return e;
}
// @__NO_SIDE_EFFECTS__
function cg(t, e) {
  const n = new jt({
    check: "custom",
    ...le(e)
  });
  return n._zod.check = t, n;
}
function _d(t) {
  let e = t?.target ?? "draft-2020-12";
  return e === "draft-4" && (e = "draft-04"), e === "draft-7" && (e = "draft-07"), {
    processors: t.processors ?? {},
    metadataRegistry: t?.metadata ?? cr,
    target: e,
    unrepresentable: t?.unrepresentable ?? "throw",
    override: t?.override ?? (() => {
    }),
    io: t?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: t?.cycles ?? "ref",
    reused: t?.reused ?? "inline",
    external: t?.external ?? void 0
  };
}
function xt(t, e, n = { path: [], schemaPath: [] }) {
  var i;
  const r = t._zod.def, s = e.seen.get(t);
  if (s)
    return s.count++, n.schemaPath.includes(t) && (s.cycle = n.path), s.schema;
  const o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  e.seen.set(t, o);
  const a = t._zod.toJSONSchema?.();
  if (a)
    o.schema = a;
  else {
    const f = {
      ...n,
      schemaPath: [...n.schemaPath, t],
      path: n.path
    };
    if (t._zod.processJSONSchema)
      t._zod.processJSONSchema(e, o.schema, f);
    else {
      const c = o.schema, m = e.processors[r.type];
      if (!m)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
      m(t, e, c, f);
    }
    const y = t._zod.parent;
    y && (o.ref || (o.ref = y), xt(y, e, f), e.seen.get(y).isParent = !0);
  }
  const u = e.metadataRegistry.get(t);
  return u && Object.assign(o.schema, u), e.io === "input" && St(t) && (delete o.schema.examples, delete o.schema.default), e.io === "input" && o.schema._prefault && ((i = o.schema).default ?? (i.default = o.schema._prefault)), delete o.schema._prefault, e.seen.get(t).schema;
}
function zd(t, e) {
  const n = t.seen.get(e);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const i = /* @__PURE__ */ new Map();
  for (const o of t.seen.entries()) {
    const a = t.metadataRegistry.get(o[0])?.id;
    if (a) {
      const u = i.get(a);
      if (u && u !== o[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      i.set(a, o[0]);
    }
  }
  const r = (o) => {
    const a = t.target === "draft-2020-12" ? "$defs" : "definitions";
    if (t.external) {
      const y = t.external.registry.get(o[0])?.id, c = t.external.uri ?? ((S) => S);
      if (y)
        return { ref: c(y) };
      const m = o[1].defId ?? o[1].schema.id ?? `schema${t.counter++}`;
      return o[1].defId = m, { defId: m, ref: `${c("__shared")}#/${a}/${m}` };
    }
    if (o[1] === n)
      return { ref: "#" };
    const d = `#/${a}/`, f = o[1].schema.id ?? `__schema${t.counter++}`;
    return { defId: f, ref: d + f };
  }, s = (o) => {
    if (o[1].schema.$ref)
      return;
    const a = o[1], { ref: u, defId: d } = r(o);
    a.def = { ...a.schema }, d && (a.defId = d);
    const f = a.schema;
    for (const y in f)
      delete f[y];
    f.$ref = u;
  };
  if (t.cycles === "throw")
    for (const o of t.seen.entries()) {
      const a = o[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const o of t.seen.entries()) {
    const a = o[1];
    if (e === o[0]) {
      s(o);
      continue;
    }
    if (t.external) {
      const d = t.external.registry.get(o[0])?.id;
      if (e !== o[0] && d) {
        s(o);
        continue;
      }
    }
    if (t.metadataRegistry.get(o[0])?.id) {
      s(o);
      continue;
    }
    if (a.cycle) {
      s(o);
      continue;
    }
    if (a.count > 1 && t.reused === "ref") {
      s(o);
      continue;
    }
  }
}
function jd(t, e) {
  const n = t.seen.get(e);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const i = (o) => {
    const a = t.seen.get(o);
    if (a.ref === null)
      return;
    const u = a.def ?? a.schema, d = { ...u }, f = a.ref;
    if (a.ref = null, f) {
      i(f);
      const c = t.seen.get(f), m = c.schema;
      if (m.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(m)) : Object.assign(u, m), Object.assign(u, d), o._zod.parent === f)
        for (const k in u)
          k === "$ref" || k === "allOf" || k in d || delete u[k];
      if (m.$ref)
        for (const k in u)
          k === "$ref" || k === "allOf" || k in c.def && JSON.stringify(u[k]) === JSON.stringify(c.def[k]) && delete u[k];
    }
    const y = o._zod.parent;
    if (y && y !== f) {
      i(y);
      const c = t.seen.get(y);
      if (c?.schema.$ref && (u.$ref = c.schema.$ref, c.def))
        for (const m in u)
          m === "$ref" || m === "allOf" || m in c.def && JSON.stringify(u[m]) === JSON.stringify(c.def[m]) && delete u[m];
    }
    t.override({
      zodSchema: o,
      jsonSchema: u,
      path: a.path ?? []
    });
  };
  for (const o of [...t.seen.entries()].reverse())
    i(o[0]);
  const r = {};
  if (t.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : t.target, t.external?.uri) {
    const o = t.external.registry.get(e)?.id;
    if (!o)
      throw new Error("Schema is missing an `id` property");
    r.$id = t.external.uri(o);
  }
  Object.assign(r, n.def ?? n.schema);
  const s = t.external?.defs ?? {};
  for (const o of t.seen.entries()) {
    const a = o[1];
    a.def && a.defId && (s[a.defId] = a.def);
  }
  t.external || Object.keys(s).length > 0 && (t.target === "draft-2020-12" ? r.$defs = s : r.definitions = s);
  try {
    const o = JSON.parse(JSON.stringify(r));
    return Object.defineProperty(o, "~standard", {
      value: {
        ...e["~standard"],
        jsonSchema: {
          input: Ns(e, "input", t.processors),
          output: Ns(e, "output", t.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), o;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function St(t, e) {
  const n = e ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(t))
    return !1;
  n.seen.add(t);
  const i = t._zod.def;
  if (i.type === "transform")
    return !0;
  if (i.type === "array")
    return St(i.element, n);
  if (i.type === "set")
    return St(i.valueType, n);
  if (i.type === "lazy")
    return St(i.getter(), n);
  if (i.type === "promise" || i.type === "optional" || i.type === "nonoptional" || i.type === "nullable" || i.type === "readonly" || i.type === "default" || i.type === "prefault")
    return St(i.innerType, n);
  if (i.type === "intersection")
    return St(i.left, n) || St(i.right, n);
  if (i.type === "record" || i.type === "map")
    return St(i.keyType, n) || St(i.valueType, n);
  if (i.type === "pipe")
    return St(i.in, n) || St(i.out, n);
  if (i.type === "object") {
    for (const r in i.shape)
      if (St(i.shape[r], n))
        return !0;
    return !1;
  }
  if (i.type === "union") {
    for (const r of i.options)
      if (St(r, n))
        return !0;
    return !1;
  }
  if (i.type === "tuple") {
    for (const r of i.items)
      if (St(r, n))
        return !0;
    return !!(i.rest && St(i.rest, n));
  }
  return !1;
}
const ug = (t, e = {}) => (n) => {
  const i = _d({ ...n, processors: e });
  return xt(t, i), zd(i, t), jd(i, t);
}, Ns = (t, e, n = {}) => (i) => {
  const { libraryOptions: r, target: s } = i ?? {}, o = _d({ ...r ?? {}, target: s, io: e, processors: n });
  return xt(t, o), zd(o, t), jd(o, t);
}, dg = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, hg = (t, e, n, i) => {
  const r = n;
  r.type = "string";
  const { minimum: s, maximum: o, format: a, patterns: u, contentEncoding: d } = t._zod.bag;
  if (typeof s == "number" && (r.minLength = s), typeof o == "number" && (r.maxLength = o), a && (r.format = dg[a] ?? a, r.format === "" && delete r.format, a === "time" && delete r.format), d && (r.contentEncoding = d), u && u.size > 0) {
    const f = [...u];
    f.length === 1 ? r.pattern = f[0].source : f.length > 1 && (r.allOf = [
      ...f.map((y) => ({
        ...e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: y.source
      }))
    ]);
  }
}, pg = (t, e, n, i) => {
  const r = n, { minimum: s, maximum: o, format: a, multipleOf: u, exclusiveMaximum: d, exclusiveMinimum: f } = t._zod.bag;
  typeof a == "string" && a.includes("int") ? r.type = "integer" : r.type = "number", typeof f == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (r.minimum = f, r.exclusiveMinimum = !0) : r.exclusiveMinimum = f), typeof s == "number" && (r.minimum = s, typeof f == "number" && e.target !== "draft-04" && (f >= s ? delete r.minimum : delete r.exclusiveMinimum)), typeof d == "number" && (e.target === "draft-04" || e.target === "openapi-3.0" ? (r.maximum = d, r.exclusiveMaximum = !0) : r.exclusiveMaximum = d), typeof o == "number" && (r.maximum = o, typeof d == "number" && e.target !== "draft-04" && (d <= o ? delete r.maximum : delete r.exclusiveMaximum)), typeof u == "number" && (r.multipleOf = u);
}, mg = (t, e, n, i) => {
  n.type = "boolean";
}, fg = (t, e, n, i) => {
  n.not = {};
}, vg = (t, e, n, i) => {
}, gg = (t, e, n, i) => {
}, bg = (t, e, n, i) => {
  const r = t._zod.def, s = vd(r.entries);
  s.every((o) => typeof o == "number") && (n.type = "number"), s.every((o) => typeof o == "string") && (n.type = "string"), n.enum = s;
}, yg = (t, e, n, i) => {
  const r = t._zod.def, s = [];
  for (const o of r.values)
    if (o === void 0) {
      if (e.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof o == "bigint") {
      if (e.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      s.push(Number(o));
    } else
      s.push(o);
  if (s.length !== 0) if (s.length === 1) {
    const o = s[0];
    n.type = o === null ? "null" : typeof o, e.target === "draft-04" || e.target === "openapi-3.0" ? n.enum = [o] : n.const = o;
  } else
    s.every((o) => typeof o == "number") && (n.type = "number"), s.every((o) => typeof o == "string") && (n.type = "string"), s.every((o) => typeof o == "boolean") && (n.type = "boolean"), s.every((o) => o === null) && (n.type = "null"), n.enum = s;
}, xg = (t, e, n, i) => {
  if (e.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, wg = (t, e, n, i) => {
  if (e.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, $g = (t, e, n, i) => {
  const r = n, s = t._zod.def, { minimum: o, maximum: a } = t._zod.bag;
  typeof o == "number" && (r.minItems = o), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = xt(s.element, e, { ...i, path: [...i.path, "items"] });
}, Eg = (t, e, n, i) => {
  const r = n, s = t._zod.def;
  r.type = "object", r.properties = {};
  const o = s.shape;
  for (const d in o)
    r.properties[d] = xt(o[d], e, {
      ...i,
      path: [...i.path, "properties", d]
    });
  const a = new Set(Object.keys(o)), u = new Set([...a].filter((d) => {
    const f = s.shape[d]._zod;
    return e.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  u.size > 0 && (r.required = Array.from(u)), s.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : s.catchall ? s.catchall && (r.additionalProperties = xt(s.catchall, e, {
    ...i,
    path: [...i.path, "additionalProperties"]
  })) : e.io === "output" && (r.additionalProperties = !1);
}, Sg = (t, e, n, i) => {
  const r = t._zod.def, s = r.inclusive === !1, o = r.options.map((a, u) => xt(a, e, {
    ...i,
    path: [...i.path, s ? "oneOf" : "anyOf", u]
  }));
  s ? n.oneOf = o : n.anyOf = o;
}, kg = (t, e, n, i) => {
  const r = t._zod.def, s = xt(r.left, e, {
    ...i,
    path: [...i.path, "allOf", 0]
  }), o = xt(r.right, e, {
    ...i,
    path: [...i.path, "allOf", 1]
  }), a = (d) => "allOf" in d && Object.keys(d).length === 1, u = [
    ...a(s) ? s.allOf : [s],
    ...a(o) ? o.allOf : [o]
  ];
  n.allOf = u;
}, Dg = (t, e, n, i) => {
  const r = t._zod.def, s = xt(r.innerType, e, i), o = e.seen.get(t);
  e.target === "openapi-3.0" ? (o.ref = r.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, Cg = (t, e, n, i) => {
  const r = t._zod.def;
  xt(r.innerType, e, i);
  const s = e.seen.get(t);
  s.ref = r.innerType;
}, Ig = (t, e, n, i) => {
  const r = t._zod.def;
  xt(r.innerType, e, i);
  const s = e.seen.get(t);
  s.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, Mg = (t, e, n, i) => {
  const r = t._zod.def;
  xt(r.innerType, e, i);
  const s = e.seen.get(t);
  s.ref = r.innerType, e.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Og = (t, e, n, i) => {
  const r = t._zod.def;
  xt(r.innerType, e, i);
  const s = e.seen.get(t);
  s.ref = r.innerType;
  let o;
  try {
    o = r.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = o;
}, Ng = (t, e, n, i) => {
  const r = t._zod.def, s = e.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  xt(s, e, i);
  const o = e.seen.get(t);
  o.ref = s;
}, Tg = (t, e, n, i) => {
  const r = t._zod.def;
  xt(r.innerType, e, i);
  const s = e.seen.get(t);
  s.ref = r.innerType, n.readOnly = !0;
}, Fd = (t, e, n, i) => {
  const r = t._zod.def;
  xt(r.innerType, e, i);
  const s = e.seen.get(t);
  s.ref = r.innerType;
}, Pg = /* @__PURE__ */ R("ZodISODateTime", (t, e) => {
  Tf.init(t, e), it.init(t, e);
});
function Rg(t) {
  return /* @__PURE__ */ jv(Pg, t);
}
const Ag = /* @__PURE__ */ R("ZodISODate", (t, e) => {
  Pf.init(t, e), it.init(t, e);
});
function _g(t) {
  return /* @__PURE__ */ Fv(Ag, t);
}
const zg = /* @__PURE__ */ R("ZodISOTime", (t, e) => {
  Rf.init(t, e), it.init(t, e);
});
function jg(t) {
  return /* @__PURE__ */ Lv(zg, t);
}
const Fg = /* @__PURE__ */ R("ZodISODuration", (t, e) => {
  Af.init(t, e), it.init(t, e);
});
function Lg(t) {
  return /* @__PURE__ */ Vv(Fg, t);
}
const Vg = (t, e) => {
  wd.init(t, e), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (n) => Em(t, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => $m(t, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        t.issues.push(n), t.message = JSON.stringify(t.issues, ia, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        t.issues.push(...n), t.message = JSON.stringify(t.issues, ia, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, ln = R("ZodError", Vg, {
  Parent: Error
}), Bg = /* @__PURE__ */ cl(ln), Hg = /* @__PURE__ */ ul(ln), Ug = /* @__PURE__ */ Hs(ln), Wg = /* @__PURE__ */ Us(ln), Zg = /* @__PURE__ */ Dm(ln), qg = /* @__PURE__ */ Cm(ln), Yg = /* @__PURE__ */ Im(ln), Kg = /* @__PURE__ */ Mm(ln), Gg = /* @__PURE__ */ Om(ln), Jg = /* @__PURE__ */ Nm(ln), Qg = /* @__PURE__ */ Tm(ln), Xg = /* @__PURE__ */ Pm(ln), nt = /* @__PURE__ */ R("ZodType", (t, e) => (tt.init(t, e), Object.assign(t["~standard"], {
  jsonSchema: {
    input: Ns(t, "input"),
    output: Ns(t, "output")
  }
}), t.toJSONSchema = ug(t, {}), t.def = e, t.type = e.type, Object.defineProperty(t, "_def", { value: e }), t.check = (...n) => t.clone(Kn(e, {
  checks: [
    ...e.checks ?? [],
    ...n.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
  ]
}), {
  parent: !0
}), t.with = t.check, t.clone = (n, i) => Gn(t, n, i), t.brand = () => t, t.register = ((n, i) => (n.add(t, i), t)), t.parse = (n, i) => Bg(t, n, i, { callee: t.parse }), t.safeParse = (n, i) => Ug(t, n, i), t.parseAsync = async (n, i) => Hg(t, n, i, { callee: t.parseAsync }), t.safeParseAsync = async (n, i) => Wg(t, n, i), t.spa = t.safeParseAsync, t.encode = (n, i) => Zg(t, n, i), t.decode = (n, i) => qg(t, n, i), t.encodeAsync = async (n, i) => Yg(t, n, i), t.decodeAsync = async (n, i) => Kg(t, n, i), t.safeEncode = (n, i) => Gg(t, n, i), t.safeDecode = (n, i) => Jg(t, n, i), t.safeEncodeAsync = async (n, i) => Qg(t, n, i), t.safeDecodeAsync = async (n, i) => Xg(t, n, i), t.refine = (n, i) => t.check(qb(n, i)), t.superRefine = (n) => t.check(Yb(n)), t.overwrite = (n) => t.check(/* @__PURE__ */ Ji(n)), t.optional = () => Rc(t), t.exactOptional = () => Rb(t), t.nullable = () => Ac(t), t.nullish = () => Rc(Ac(t)), t.nonoptional = (n) => Lb(t, n), t.array = () => Vd(t), t.or = (n) => sa([t, n]), t.and = (n) => Mb(t, n), t.transform = (n) => aa(t, Bd(n)), t.default = (n) => zb(t, n), t.prefault = (n) => Fb(t, n), t.catch = (n) => Bb(t, n), t.pipe = (n) => aa(t, n), t.readonly = () => Wb(t), t.describe = (n) => {
  const i = t.clone();
  return cr.add(i, { description: n }), i;
}, Object.defineProperty(t, "description", {
  get() {
    return cr.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...n) => {
  if (n.length === 0)
    return cr.get(t);
  const i = t.clone();
  return cr.add(i, n[0]), i;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t.apply = (n) => n(t), t)), Ld = /* @__PURE__ */ R("_ZodString", (t, e) => {
  dl.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (i, r, s) => hg(t, i, r);
  const n = t._zod.bag;
  t.format = n.format ?? null, t.minLength = n.minimum ?? null, t.maxLength = n.maximum ?? null, t.regex = (...i) => t.check(/* @__PURE__ */ Kv(...i)), t.includes = (...i) => t.check(/* @__PURE__ */ Qv(...i)), t.startsWith = (...i) => t.check(/* @__PURE__ */ Xv(...i)), t.endsWith = (...i) => t.check(/* @__PURE__ */ eg(...i)), t.min = (...i) => t.check(/* @__PURE__ */ Os(...i)), t.max = (...i) => t.check(/* @__PURE__ */ Rd(...i)), t.length = (...i) => t.check(/* @__PURE__ */ Ad(...i)), t.nonempty = (...i) => t.check(/* @__PURE__ */ Os(1, ...i)), t.lowercase = (i) => t.check(/* @__PURE__ */ Gv(i)), t.uppercase = (i) => t.check(/* @__PURE__ */ Jv(i)), t.trim = () => t.check(/* @__PURE__ */ ng()), t.normalize = (...i) => t.check(/* @__PURE__ */ tg(...i)), t.toLowerCase = () => t.check(/* @__PURE__ */ ig()), t.toUpperCase = () => t.check(/* @__PURE__ */ rg()), t.slugify = () => t.check(/* @__PURE__ */ sg());
}), eb = /* @__PURE__ */ R("ZodString", (t, e) => {
  dl.init(t, e), Ld.init(t, e), t.email = (n) => t.check(/* @__PURE__ */ gv(tb, n)), t.url = (n) => t.check(/* @__PURE__ */ $v(nb, n)), t.jwt = (n) => t.check(/* @__PURE__ */ zv(gb, n)), t.emoji = (n) => t.check(/* @__PURE__ */ Ev(ib, n)), t.guid = (n) => t.check(/* @__PURE__ */ Sc(Ic, n)), t.uuid = (n) => t.check(/* @__PURE__ */ bv(Wr, n)), t.uuidv4 = (n) => t.check(/* @__PURE__ */ yv(Wr, n)), t.uuidv6 = (n) => t.check(/* @__PURE__ */ xv(Wr, n)), t.uuidv7 = (n) => t.check(/* @__PURE__ */ wv(Wr, n)), t.nanoid = (n) => t.check(/* @__PURE__ */ Sv(rb, n)), t.guid = (n) => t.check(/* @__PURE__ */ Sc(Ic, n)), t.cuid = (n) => t.check(/* @__PURE__ */ kv(sb, n)), t.cuid2 = (n) => t.check(/* @__PURE__ */ Dv(ob, n)), t.ulid = (n) => t.check(/* @__PURE__ */ Cv(ab, n)), t.base64 = (n) => t.check(/* @__PURE__ */ Rv(mb, n)), t.base64url = (n) => t.check(/* @__PURE__ */ Av(fb, n)), t.xid = (n) => t.check(/* @__PURE__ */ Iv(lb, n)), t.ksuid = (n) => t.check(/* @__PURE__ */ Mv(cb, n)), t.ipv4 = (n) => t.check(/* @__PURE__ */ Ov(ub, n)), t.ipv6 = (n) => t.check(/* @__PURE__ */ Nv(db, n)), t.cidrv4 = (n) => t.check(/* @__PURE__ */ Tv(hb, n)), t.cidrv6 = (n) => t.check(/* @__PURE__ */ Pv(pb, n)), t.e164 = (n) => t.check(/* @__PURE__ */ _v(vb, n)), t.datetime = (n) => t.check(Rg(n)), t.date = (n) => t.check(_g(n)), t.time = (n) => t.check(jg(n)), t.duration = (n) => t.check(Lg(n));
});
function fo(t) {
  return /* @__PURE__ */ vv(eb, t);
}
const it = /* @__PURE__ */ R("ZodStringFormat", (t, e) => {
  Ye.init(t, e), Ld.init(t, e);
}), tb = /* @__PURE__ */ R("ZodEmail", (t, e) => {
  Ef.init(t, e), it.init(t, e);
}), Ic = /* @__PURE__ */ R("ZodGUID", (t, e) => {
  wf.init(t, e), it.init(t, e);
}), Wr = /* @__PURE__ */ R("ZodUUID", (t, e) => {
  $f.init(t, e), it.init(t, e);
}), nb = /* @__PURE__ */ R("ZodURL", (t, e) => {
  Sf.init(t, e), it.init(t, e);
}), ib = /* @__PURE__ */ R("ZodEmoji", (t, e) => {
  kf.init(t, e), it.init(t, e);
}), rb = /* @__PURE__ */ R("ZodNanoID", (t, e) => {
  Df.init(t, e), it.init(t, e);
}), sb = /* @__PURE__ */ R("ZodCUID", (t, e) => {
  Cf.init(t, e), it.init(t, e);
}), ob = /* @__PURE__ */ R("ZodCUID2", (t, e) => {
  If.init(t, e), it.init(t, e);
}), ab = /* @__PURE__ */ R("ZodULID", (t, e) => {
  Mf.init(t, e), it.init(t, e);
}), lb = /* @__PURE__ */ R("ZodXID", (t, e) => {
  Of.init(t, e), it.init(t, e);
}), cb = /* @__PURE__ */ R("ZodKSUID", (t, e) => {
  Nf.init(t, e), it.init(t, e);
}), ub = /* @__PURE__ */ R("ZodIPv4", (t, e) => {
  _f.init(t, e), it.init(t, e);
}), db = /* @__PURE__ */ R("ZodIPv6", (t, e) => {
  zf.init(t, e), it.init(t, e);
}), hb = /* @__PURE__ */ R("ZodCIDRv4", (t, e) => {
  jf.init(t, e), it.init(t, e);
}), pb = /* @__PURE__ */ R("ZodCIDRv6", (t, e) => {
  Ff.init(t, e), it.init(t, e);
}), mb = /* @__PURE__ */ R("ZodBase64", (t, e) => {
  Lf.init(t, e), it.init(t, e);
}), fb = /* @__PURE__ */ R("ZodBase64URL", (t, e) => {
  Bf.init(t, e), it.init(t, e);
}), vb = /* @__PURE__ */ R("ZodE164", (t, e) => {
  Hf.init(t, e), it.init(t, e);
}), gb = /* @__PURE__ */ R("ZodJWT", (t, e) => {
  Wf.init(t, e), it.init(t, e);
}), hl = /* @__PURE__ */ R("ZodNumber", (t, e) => {
  Od.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (i, r, s) => pg(t, i, r), t.gt = (i, r) => t.check(/* @__PURE__ */ Dc(i, r)), t.gte = (i, r) => t.check(/* @__PURE__ */ mo(i, r)), t.min = (i, r) => t.check(/* @__PURE__ */ mo(i, r)), t.lt = (i, r) => t.check(/* @__PURE__ */ kc(i, r)), t.lte = (i, r) => t.check(/* @__PURE__ */ po(i, r)), t.max = (i, r) => t.check(/* @__PURE__ */ po(i, r)), t.int = (i) => t.check(Oc(i)), t.safe = (i) => t.check(Oc(i)), t.positive = (i) => t.check(/* @__PURE__ */ Dc(0, i)), t.nonnegative = (i) => t.check(/* @__PURE__ */ mo(0, i)), t.negative = (i) => t.check(/* @__PURE__ */ kc(0, i)), t.nonpositive = (i) => t.check(/* @__PURE__ */ po(0, i)), t.multipleOf = (i, r) => t.check(/* @__PURE__ */ Cc(i, r)), t.step = (i, r) => t.check(/* @__PURE__ */ Cc(i, r)), t.finite = () => t;
  const n = t._zod.bag;
  t.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), t.isFinite = !0, t.format = n.format ?? null;
});
function Mc(t) {
  return /* @__PURE__ */ Bv(hl, t);
}
const bb = /* @__PURE__ */ R("ZodNumberFormat", (t, e) => {
  Zf.init(t, e), hl.init(t, e);
});
function Oc(t) {
  return /* @__PURE__ */ Uv(bb, t);
}
const yb = /* @__PURE__ */ R("ZodBoolean", (t, e) => {
  qf.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => mg(t, n, i);
});
function xb(t) {
  return /* @__PURE__ */ Wv(yb, t);
}
const wb = /* @__PURE__ */ R("ZodAny", (t, e) => {
  Yf.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => vg();
});
function vo() {
  return /* @__PURE__ */ Zv(wb);
}
const $b = /* @__PURE__ */ R("ZodUnknown", (t, e) => {
  Kf.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => gg();
});
function Nc() {
  return /* @__PURE__ */ qv($b);
}
const Eb = /* @__PURE__ */ R("ZodNever", (t, e) => {
  Gf.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => fg(t, n, i);
});
function Sb(t) {
  return /* @__PURE__ */ Yv(Eb, t);
}
const kb = /* @__PURE__ */ R("ZodArray", (t, e) => {
  Jf.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => $g(t, n, i, r), t.element = e.element, t.min = (n, i) => t.check(/* @__PURE__ */ Os(n, i)), t.nonempty = (n) => t.check(/* @__PURE__ */ Os(1, n)), t.max = (n, i) => t.check(/* @__PURE__ */ Rd(n, i)), t.length = (n, i) => t.check(/* @__PURE__ */ Ad(n, i)), t.unwrap = () => t.element;
});
function Vd(t, e) {
  return /* @__PURE__ */ og(kb, t, e);
}
const Db = /* @__PURE__ */ R("ZodObject", (t, e) => {
  Xf.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Eg(t, n, i, r), Re(t, "shape", () => e.shape), t.keyof = () => Ob(Object.keys(t._zod.def.shape)), t.catchall = (n) => t.clone({ ...t._zod.def, catchall: n }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Nc() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Nc() }), t.strict = () => t.clone({ ...t._zod.def, catchall: Sb() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (n) => gm(t, n), t.safeExtend = (n) => bm(t, n), t.merge = (n) => ym(t, n), t.pick = (n) => fm(t, n), t.omit = (n) => vm(t, n), t.partial = (...n) => xm(Hd, t, n[0]), t.required = (...n) => wm(Ud, t, n[0]);
});
function Tc(t, e) {
  const n = {
    type: "object",
    shape: t ?? {},
    ...le(e)
  };
  return new Db(n);
}
const Cb = /* @__PURE__ */ R("ZodUnion", (t, e) => {
  ev.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Sg(t, n, i, r), t.options = e.options;
});
function sa(t, e) {
  return new Cb({
    type: "union",
    options: t,
    ...le(e)
  });
}
const Ib = /* @__PURE__ */ R("ZodIntersection", (t, e) => {
  tv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => kg(t, n, i, r);
});
function Mb(t, e) {
  return new Ib({
    type: "intersection",
    left: t,
    right: e
  });
}
const oa = /* @__PURE__ */ R("ZodEnum", (t, e) => {
  nv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (i, r, s) => bg(t, i, r), t.enum = e.entries, t.options = Object.values(e.entries);
  const n = new Set(Object.keys(e.entries));
  t.extract = (i, r) => {
    const s = {};
    for (const o of i)
      if (n.has(o))
        s[o] = e.entries[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new oa({
      ...e,
      checks: [],
      ...le(r),
      entries: s
    });
  }, t.exclude = (i, r) => {
    const s = { ...e.entries };
    for (const o of i)
      if (n.has(o))
        delete s[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new oa({
      ...e,
      checks: [],
      ...le(r),
      entries: s
    });
  };
});
function Ob(t, e) {
  const n = Array.isArray(t) ? Object.fromEntries(t.map((i) => [i, i])) : t;
  return new oa({
    type: "enum",
    entries: n,
    ...le(e)
  });
}
const Nb = /* @__PURE__ */ R("ZodLiteral", (t, e) => {
  iv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => yg(t, n, i), t.values = new Set(e.values), Object.defineProperty(t, "value", {
    get() {
      if (e.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return e.values[0];
    }
  });
});
function Pc(t, e) {
  return new Nb({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...le(e)
  });
}
const Tb = /* @__PURE__ */ R("ZodTransform", (t, e) => {
  rv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => wg(t, n), t._zod.parse = (n, i) => {
    if (i.direction === "backward")
      throw new md(t.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(Sr(s, n.value, e));
      else {
        const o = s;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), n.issues.push(Sr(o));
      }
    };
    const r = e.transform(n.value, n);
    return r instanceof Promise ? r.then((s) => (n.value = s, n)) : (n.value = r, n);
  };
});
function Bd(t) {
  return new Tb({
    type: "transform",
    transform: t
  });
}
const Hd = /* @__PURE__ */ R("ZodOptional", (t, e) => {
  Pd.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Fd(t, n, i, r), t.unwrap = () => t._zod.def.innerType;
});
function Rc(t) {
  return new Hd({
    type: "optional",
    innerType: t
  });
}
const Pb = /* @__PURE__ */ R("ZodExactOptional", (t, e) => {
  sv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Fd(t, n, i, r), t.unwrap = () => t._zod.def.innerType;
});
function Rb(t) {
  return new Pb({
    type: "optional",
    innerType: t
  });
}
const Ab = /* @__PURE__ */ R("ZodNullable", (t, e) => {
  ov.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Dg(t, n, i, r), t.unwrap = () => t._zod.def.innerType;
});
function Ac(t) {
  return new Ab({
    type: "nullable",
    innerType: t
  });
}
const _b = /* @__PURE__ */ R("ZodDefault", (t, e) => {
  av.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Ig(t, n, i, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function zb(t, e) {
  return new _b({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : bd(e);
    }
  });
}
const jb = /* @__PURE__ */ R("ZodPrefault", (t, e) => {
  lv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Mg(t, n, i, r), t.unwrap = () => t._zod.def.innerType;
});
function Fb(t, e) {
  return new jb({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : bd(e);
    }
  });
}
const Ud = /* @__PURE__ */ R("ZodNonOptional", (t, e) => {
  cv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Cg(t, n, i, r), t.unwrap = () => t._zod.def.innerType;
});
function Lb(t, e) {
  return new Ud({
    type: "nonoptional",
    innerType: t,
    ...le(e)
  });
}
const Vb = /* @__PURE__ */ R("ZodCatch", (t, e) => {
  uv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Og(t, n, i, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function Bb(t, e) {
  return new Vb({
    type: "catch",
    innerType: t,
    catchValue: typeof e == "function" ? e : () => e
  });
}
const Hb = /* @__PURE__ */ R("ZodPipe", (t, e) => {
  dv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Ng(t, n, i, r), t.in = e.in, t.out = e.out;
});
function aa(t, e) {
  return new Hb({
    type: "pipe",
    in: t,
    out: e
    // ...util.normalizeParams(params),
  });
}
const Ub = /* @__PURE__ */ R("ZodReadonly", (t, e) => {
  hv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => Tg(t, n, i, r), t.unwrap = () => t._zod.def.innerType;
});
function Wb(t) {
  return new Ub({
    type: "readonly",
    innerType: t
  });
}
const Zb = /* @__PURE__ */ R("ZodCustom", (t, e) => {
  pv.init(t, e), nt.init(t, e), t._zod.processJSONSchema = (n, i, r) => xg(t, n);
});
function qb(t, e = {}) {
  return /* @__PURE__ */ ag(Zb, t, e);
}
function Yb(t) {
  return /* @__PURE__ */ lg(t);
}
function Kb(t, e) {
  return aa(Bd(t), e);
}
function Gb(t) {
  return /* @__PURE__ */ Hv(hl, t);
}
function Jb({
  initialValues: t,
  schema: e,
  onSubmit: n,
  validate: i,
  mode: r = "onSubmit"
}) {
  const [s, o] = Ve(t), [a, u] = Ve({}), [d, f] = Ve({}), [y, c] = Ve(!1), [m, S] = Ve(0), k = Ci(
    (E) => {
      const $ = {};
      if (e)
        try {
          const D = e.safeParse(E);
          D.success || D.error.issues.forEach((T) => {
            const O = T.path.join(".");
            $[O] || ($[O] = T.message);
          });
        } catch (D) {
          console.error("Zod Parsing Error:", D);
        }
      if (i)
        try {
          const D = i(E);
          D && Object.assign($, D);
        } catch (D) {
          console.error("External Validation Error:", D);
        }
      return $;
    },
    [e, i]
  ), C = Ci(
    (E, $, D = !1) => {
      o((T) => {
        const O = { ...T, [E]: $ };
        if ((r === "onChange" || D) && e) {
          const A = k(O);
          u(A);
        }
        return O;
      }), d[E] || f((T) => ({ ...T, [E]: !0 }));
    },
    [r, e, k, d]
  ), h = Ci(
    (E) => {
      if (f(($) => ({ ...$, [E]: !0 })), r === "onBlur" || r === "onChange") {
        const $ = k(s);
        u($);
      }
    },
    [r, k, s]
  ), b = Ci(
    (E) => {
      E?.preventDefault(), console.log("--- SUBMIT TRIGGERED ---"), c(!0), S((T) => T + 1);
      const $ = k(s);
      u($);
      const D = { ...d };
      Object.keys($).forEach((T) => {
        D[T] = !0;
      }), f(D), Object.keys($).length === 0 ? n?.(s) : console.warn("Submit blocked by validation errors:", $), c(!1);
    },
    [k, s, n, d]
  ), w = Ci(() => {
    o(t), u({}), f({}), S(0), c(!1);
  }, [t]);
  return {
    values: s,
    errors: a,
    touched: d,
    setFieldValue: C,
    reset: w,
    handleBlur: h,
    handleSubmit: b,
    isSubmitting: y,
    isSubmitted: m > 0,
    register: (E) => ({
      value: s[E],
      onChange: ($) => C(E, $),
      onBlur: () => h(E),
      error: a[E],
      name: E
    })
  };
}
const Mn = (t, e) => {
  if (!t || !e) return;
  if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
  const n = e.split(".");
  let i = t;
  for (const r of n) {
    if (i == null || typeof i != "object") return;
    i = i[r];
  }
  return i;
};
function _c(t, e) {
  return !t.visibilityRules || t.visibilityRules.length === 0 ? !0 : t.visibilityRules.every((n) => {
    const i = Mn(e, n.field);
    switch (n.operator) {
      case "eq":
        return i === n.value;
      case "neq":
        return i !== n.value;
      case "in":
        return Array.isArray(n.value) && n.value.includes(i);
      case "contains":
        return Array.isArray(i) && i.includes(n.value);
      case "gt":
        return i > n.value;
      case "lt":
        return i < n.value;
      default:
        return !0;
    }
  });
}
function Qb(t, e) {
  return t.disabled ? !0 : !t.disableRules || t.disableRules.length === 0 ? !1 : t.disableRules.every((n) => {
    const i = Mn(e, n.field);
    switch (n.operator) {
      case "eq":
        return i === n.value;
      case "neq":
        return i !== n.value;
      case "in":
        return Array.isArray(n.value) && n.value.includes(i);
      case "contains":
        return Array.isArray(i) && i.includes(n.value);
      case "gt":
        return i > n.value;
      case "lt":
        return i < n.value;
      default:
        return !1;
    }
  });
}
function Xb(t, e, n) {
  return !t.clearValueRules || t.clearValueRules.length === 0 ? !1 : t.clearValueRules.every((i) => {
    const r = Mn(e, i.field), s = n ? Mn(n, i.field) : void 0;
    switch (i.operator) {
      case "eq":
        return r === i.value;
      case "neq":
        return r !== i.value;
      case "in":
        return Array.isArray(i.value) && i.value.includes(r);
      case "contains":
        return Array.isArray(r) && r.includes(i.value);
      case "gt":
        return r > i.value;
      case "lt":
        return r < i.value;
      case "changed":
        return n !== void 0 && r !== s;
      default:
        return !1;
    }
  });
}
function ey(t) {
  const e = {};
  return t.fields.forEach((n) => {
    if (n.defaultValue !== void 0)
      e[n.name] = n.defaultValue;
    else
      switch (n.type) {
        case "checkbox":
        case "switch":
          e[n.name] = !1;
          break;
        case "daterange":
          e[n.name] = { start: null, end: null };
          break;
        case "autocomplete":
        case "select":
          e[n.name] = n.multiple ? [] : "";
          break;
        case "file":
          e[n.name] = null;
          break;
        case "number":
          e[n.name] = "";
          break;
        default:
          e[n.name] = "";
      }
  }), e;
}
function ty(t) {
  const e = {};
  return t.fields.forEach((n) => {
    let i;
    switch (n.type) {
      case "number":
        i = Kb(
          (s) => s === "" || s === null || s === void 0 ? void 0 : s,
          Gb({ error: "Must be a number" })
        );
        break;
      case "checkbox":
      case "switch":
        i = xb();
        break;
      case "daterange":
        i = Tc({
          start: vo(),
          end: vo()
        });
        break;
      case "autocomplete":
      case "select":
      case "radio":
        n.multiple ? i = Vd(sa([fo(), Mc()])) : i = sa([fo(), Mc(), Pc("")]);
        break;
      case "date":
      case "datetime":
      case "time":
        i = vo();
        break;
      default:
        i = fo();
    }
    n.validation && n.validation.forEach((s) => {
      if (s.type === "required") return;
      const o = s.message || "Invalid";
      if (s.type === "email" && typeof i.email == "function")
        i = i.email({ message: o });
      else if (s.type === "minLength" && (n.type === "text" || n.type === "textarea" || n.type === "password")) {
        const a = s.value;
        i = i.refine(
          (u) => u === "" || u.length >= a,
          { message: o }
        );
      } else if (s.type === "maxLength" && (n.type === "text" || n.type === "textarea" || n.type === "password")) {
        const a = s.value;
        i = i.refine(
          (u) => u === "" || u.length <= a,
          { message: o }
        );
      } else if (s.type === "length" && (n.type === "text" || n.type === "textarea" || n.type === "password")) {
        const a = s.value;
        i = i.refine(
          (u) => u === "" || u.length === a,
          { message: o }
        );
      } else if (s.type === "pattern" && (n.type === "text" || n.type === "textarea" || n.type === "password" || n.type === "email" || n.type === "url" || n.type === "tel")) {
        const a = s.value;
        i = i.refine(
          (u) => {
            if (u === "") return !0;
            try {
              return new RegExp(a).test(u);
            } catch {
              return !0;
            }
          },
          { message: o }
        );
      } else if (s.type === "min" && (n.type === "number" || typeof i.min == "function")) {
        const a = s.value;
        i = i.refine(
          (u) => u === "" || u === null || u === void 0 || u >= a,
          { message: o }
        );
      } else if (s.type === "max" && (n.type === "number" || typeof i.max == "function")) {
        const a = s.value;
        i = i.refine(
          (u) => u === "" || u === null || u === void 0 || u <= a,
          { message: o }
        );
      } else if (s.type === "step" && (n.type === "number" || typeof i.multipleOf == "function")) {
        const a = s.value;
        i = i.refine(
          (u) => u === "" || u === null || u === void 0 || Number(u) % a === 0,
          { message: o }
        );
      }
    });
    const r = n.validation?.some((s) => s.type === "required");
    if (r) {
      const s = n.validation?.find((o) => o.type === "required")?.message || "Required";
      i = i.refine(
        (o) => o == null || o === "" || Array.isArray(o) && o.length === 0 || n.type === "daterange" && (!o.start || !o.end) ? !1 : n.type === "checkbox" || n.type === "switch" ? o === !0 : !0,
        { message: s }
      );
    }
    !r && n.type !== "checkbox" && n.type !== "switch" && (i = i.optional().nullable().or(Pc(""))), e[n.name] = i;
  }), Tc(e);
}
const ny = ({
  children: t,
  gap: e = 4,
  className: n = ""
}) => /* @__PURE__ */ v.jsx(
  "div",
  {
    className: `grid grid-cols-12 ${n}`,
    style: { gap: `${e * 0.25}rem` },
    children: t
  }
), iy = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12"
}, ry = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12"
}, sy = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12"
}, oy = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12"
}, ay = ({
  children: t,
  colSpan: e = 12,
  xs: n,
  sm: i,
  md: r,
  lg: s,
  className: o = ""
}) => {
  const a = Math.min(Math.max(n || 12, 1), 12), u = i || e, d = r, f = s;
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: `
        ${iy[a] || "col-span-12"}
        ${u && ry[u] || ""}
        ${d && sy[d] || ""}
        ${f && oy[f] || ""}
        ${o}
      `,
      children: t
    }
  );
}, ly = ({
  id: t,
  label: e,
  hasValue: n,
  isFocused: i,
  error: r,
  required: s,
  disabled: o,
  startAdornmentWidth: a = 0,
  children: u
}) => {
  const d = n || i;
  return /* @__PURE__ */ v.jsxs("div", { className: "relative group w-full", children: [
    u,
    /* @__PURE__ */ v.jsxs(
      "label",
      {
        htmlFor: t,
        className: `
          absolute left-3 transition-all duration-200 pointer-events-none z-10 origin-[0]
          px-1 rounded-sm
          ${d ? "-top-2.5 text-xs font-medium translate-x-0" : "top-2 text-sm"}
          ${r ? "text-destructive" : i ? "text-ring" : "text-slate-500"}
          ${o ? "opacity-50" : ""}
        `,
        style: {
          // Use CSS variable for start adornment offset so peer selectors can use it
          "--start-adornment-width": `${a}px`,
          transform: d ? "none" : "translateX(var(--start-adornment-width))",
          // Floating uses none
          background: d ? `linear-gradient(to bottom, transparent 62%, ${o ? "var(--zinc-100)" : "var(--color-input)"} 38%)` : "transparent"
        },
        children: [
          e,
          s && /* @__PURE__ */ v.jsx("span", { className: "text-destructive ml-0.5", children: "*" })
        ]
      }
    )
  ] });
}, cy = ({ error: t, className: e = "" }) => /* @__PURE__ */ v.jsxs(
  "div",
  {
    className: `group/error z-20 cursor-help flex items-center justify-center ${e}`,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "text-destructive hover:opacity-80 transition-opacity", children: /* @__PURE__ */ v.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ v.jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ v.jsx("path", { d: "M12 16v-4" }),
            /* @__PURE__ */ v.jsx("path", { d: "M12 8h.01" })
          ]
        }
      ) }),
      /* @__PURE__ */ v.jsxs(
        "div",
        {
          className: `
            absolute bottom-full right-0 mb-2 
            bg-destructive text-white text-[11px] px-2 py-1.5 rounded-md shadow-xl whitespace-nowrap  
            opacity-0 invisible group-hover/error:opacity-100 group-hover/error:visible 
            transition-all duration-200 transform translate-y-1 group-hover/error:translate-y-0
            z-tooltip pointer-events-none border border-white/10
        `,
          role: "alert",
          children: [
            t,
            /* @__PURE__ */ v.jsx(
              "div",
              {
                className: "absolute top-full right-[4px] -mt-[5px] w-2.5 h-2.5 bg-destructive rotate-45 border-r border-b border-white/10",
                style: { transformOrigin: "center" }
              }
            )
          ]
        }
      )
    ]
  }
), Jn = ({
  id: t,
  label: e,
  error: n,
  required: i,
  disabled: r,
  startAdornment: s,
  endAdornment: o,
  className: a = "",
  fullWidth: u = !0,
  children: d,
  value: f,
  defaultValue: y,
  onClear: c
}) => {
  const [m, S] = Ve(!1), k = Ci((O) => O == null || O === "" ? !1 : Array.isArray(O) ? O.length > 0 : O instanceof Date ? !isNaN(O.getTime()) : typeof O == "object" && O !== null ? "start" in O && "end" in O ? O.start !== null && O.start !== void 0 || O.end !== null && O.end !== void 0 : Object.values(O).some((A) => A != null && A !== "") : !0, []), C = et.useMemo(() => JSON.stringify(f), [f]);
  console.log(C);
  const h = () => {
    console.log("BaseField: handleFocus triggered"), S(!0);
  }, b = () => {
    console.log("BaseField: handleBlur triggered"), S(!1);
  }, w = et.useMemo(
    () => k(f ?? y),
    [f, y, k]
  ), [E, $] = Ve({
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem"
  }), D = et.useRef(null), T = et.useRef(null);
  return et.useLayoutEffect(() => {
    let O = 12;
    D.current && (O = 12 + D.current.offsetWidth + 8);
    let A = 12;
    T.current && (A = 12 + T.current.offsetWidth + 8), $({
      paddingLeft: `${O}px`,
      paddingRight: `${A}px`
    });
  }, [s, o, n]), /* @__PURE__ */ v.jsx("div", { className: `relative ${u ? "w-full" : "w-auto"} ${a} mb-4`, children: /* @__PURE__ */ v.jsx(
    ly,
    {
      id: t,
      label: e,
      hasValue: w,
      isFocused: m,
      error: n,
      required: i,
      disabled: r,
      children: /* @__PURE__ */ v.jsxs("div", { className: "relative flex items-center", children: [
        s && /* @__PURE__ */ v.jsx(
          "div",
          {
            ref: D,
            className: "absolute left-3 text-slate-400 pointer-events-none flex items-center justify-center",
            children: s
          }
        ),
        d({
          hasValue: w,
          isFocused: m,
          onFocus: h,
          onBlur: b,
          id: t,
          style: {
            ...E
          }
        }),
        (o || n || c) && /* @__PURE__ */ v.jsxs("div", { ref: T, className: "absolute right-3 flex items-center gap-2 z-10", children: [
          c && w && /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: (O) => {
                O.preventDefault(), O.stopPropagation(), c();
              },
              className: "text-slate-400 hover:text-red-500 transition-colors focus:outline-none",
              "aria-label": "Clear value",
              children: /* @__PURE__ */ v.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    /* @__PURE__ */ v.jsx("path", { d: "M18 6 6 18" }),
                    /* @__PURE__ */ v.jsx("path", { d: "m6 6 12 12" })
                  ]
                }
              )
            }
          ),
          o && /* @__PURE__ */ v.jsx("span", { className: "flex items-center text-slate-400", children: o }),
          n && /* @__PURE__ */ v.jsx(cy, { error: n })
        ] })
      ] })
    }
  ) });
}, ne = Gi(
  ({
    id: t,
    label: e,
    error: n,
    required: i,
    disabled: r,
    className: s,
    startAdornment: o,
    endAdornment: a,
    fullWidth: u,
    value: d,
    defaultValue: f,
    onChange: y,
    onClear: c,
    ...m
  }, S) => /* @__PURE__ */ v.jsx(
    Jn,
    {
      id: t,
      label: e,
      error: n,
      required: i,
      disabled: r,
      startAdornment: o,
      endAdornment: a,
      fullWidth: u,
      value: d,
      defaultValue: f,
      onClear: c,
      className: s,
      children: ({ isFocused: k, onFocus: C, onBlur: h, style: b }) => /* @__PURE__ */ v.jsx(
        "input",
        {
          ...m,
          ref: S,
          id: t,
          disabled: r,
          value: d,
          onChange: y,
          onFocus: (w) => {
            C(), m.onFocus?.(w);
          },
          onBlur: (w) => {
            h(), m.onBlur?.(w);
          },
          placeholder: k && m.placeholder || " ",
          className: `
              peer block w-full rounded-md border bg-input h-10 transition-colors
              placeholder:text-transparent focus:placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0
              ${n ? "border-destructive focus:border-destructive focus:ring-destructive/20" : "border-border hover:border-surface-300 focus:border-ring"}
              ${r ? "bg-surface-100 cursor-not-allowed" : ""}
            `,
          style: b
        }
      )
    }
  )
);
ne.displayName = "TextInput";
const Ts = Gi(
  ({
    id: t,
    label: e,
    error: n,
    required: i,
    disabled: r,
    className: s,
    startAdornment: o,
    endAdornment: a,
    fullWidth: u,
    value: d,
    defaultValue: f,
    onChange: y,
    onClear: c,
    rows: m = 4,
    minRows: S,
    maxRows: k,
    resize: C = "none",
    ...h
  }, b) => {
    const w = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize"
    }[C] || "resize-none", E = {};
    return k && (E.maxHeight = `${k * 1.5 + 1}rem`), /* @__PURE__ */ v.jsx(
      Jn,
      {
        id: t,
        label: e,
        error: n,
        required: i,
        disabled: r,
        startAdornment: o,
        endAdornment: a,
        fullWidth: u,
        value: d,
        defaultValue: f,
        onClear: c,
        className: s,
        children: ({ isFocused: $, onFocus: D, onBlur: T, style: O }) => /* @__PURE__ */ v.jsx(
          "textarea",
          {
            ...h,
            ref: b,
            id: t,
            disabled: r,
            value: d,
            onChange: y,
            onFocus: (A) => {
              D(), h.onFocus?.(A);
            },
            onBlur: (A) => {
              T(), h.onBlur?.(A);
            },
            rows: S || m,
            placeholder: $ && h.placeholder || " ",
            className: `
              peer block w-full rounded-md border bg-input py-2 transition-colors
              placeholder:text-transparent focus:placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0
              ${w}
              ${n ? "border-destructive focus:border-destructive focus:ring-destructive/20" : "border-border hover:border-surface-300 focus:border-ring"}
              ${r ? "bg-surface-100 cursor-not-allowed" : ""}
            `,
            style: { ...O, ...E }
          }
        )
      }
    );
  }
);
Ts.displayName = "Textarea";
const Wd = Gi(
  ({
    id: t,
    label: e,
    error: n,
    className: i,
    disabled: r,
    // Filter out standard field props that don't apply to native checkbox
    startAdornment: s,
    endAdornment: o,
    fullWidth: a,
    required: u,
    ...d
  }, f) => /* @__PURE__ */ v.jsxs("div", { className: `group flex flex-col ${i}`, children: [
    /* @__PURE__ */ v.jsxs("label", { className: "flex items-center space-x-2 cursor-pointer relative", children: [
      /* @__PURE__ */ v.jsx(
        "input",
        {
          ref: f,
          type: "checkbox",
          id: t,
          disabled: r,
          className: `\r
              peer appearance-none h-5 w-5 border border-border rounded shadow-sm bg-input\r
              checked:bg-control-checked checked:border-control-checked\r
              focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-0\r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              transition-colors\r
            `,
          ...d
        }
      ),
      /* @__PURE__ */ v.jsx(
        "svg",
        {
          className: `\r
              absolute left-0.5 w-4 h-4 text-white pointer-events-none \r
              opacity-0 peer-checked:opacity-100 transition-opacity\r
            `,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /* @__PURE__ */ v.jsx("path", { d: "M20 6 9 17l-5-5" })
        }
      ),
      /* @__PURE__ */ v.jsx("span", { className: `text-sm ${r ? "opacity-50" : ""}`, children: e })
    ] }),
    n && /* @__PURE__ */ v.jsx("p", { className: "text-xs text-error mt-1 ml-7", children: n })
  ] })
);
Wd.displayName = "Checkbox";
const Qe = Gi(
  ({
    id: t,
    label: e,
    error: n,
    className: i,
    disabled: r,
    startAdornment: s,
    endAdornment: o,
    fullWidth: a,
    required: u,
    ...d
  }, f) => /* @__PURE__ */ v.jsxs("div", { className: `flex flex-col ${i}`, children: [
    /* @__PURE__ */ v.jsxs("label", { className: "flex items-center space-x-2 cursor-pointer relative", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: f,
            type: "checkbox",
            id: t,
            disabled: r,
            className: "sr-only peer",
            ...d
          }
        ),
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: `
              w-9 h-5 rounded-full transition-colors 
              bg-surface-200 border border-surface-300
              peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring
              peer-checked:bg-control-checked peer-checked:border-control-checked
              ${r ? "opacity-50 cursor-not-allowed" : ""}
            `
          }
        ),
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: `
              absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform border border-surface-300
              peer-checked:translate-x-4 peer-checked:border-transparent
            `
          }
        )
      ] }),
      e && /* @__PURE__ */ v.jsx("span", { className: `text-sm ${r ? "opacity-50" : ""}`, children: e })
    ] }),
    n && /* @__PURE__ */ v.jsx("p", { className: "text-xs text-error mt-1", children: n })
  ] })
);
Qe.displayName = "Switch";
const Zd = Gi(
  ({
    name: t,
    value: e,
    onChange: n,
    options: i,
    label: r,
    error: s,
    direction: o = "vertical",
    disabled: a,
    className: u,
    startAdornment: d,
    endAdornment: f,
    fullWidth: y,
    required: c,
    ...m
  }, S) => {
    const k = () => {
      if (typeof o == "string")
        return o === "horizontal" ? "flex-row gap-4" : "flex-col gap-2";
      const C = [], h = o, b = h.xs || "vertical";
      return C.push(
        b === "horizontal" ? "flex-row gap-4" : "flex-col gap-2"
      ), h.sm && C.push(
        h.sm === "horizontal" ? "sm:flex-row sm:gap-4" : "sm:flex-col sm:gap-2"
      ), h.md && C.push(
        h.md === "horizontal" ? "md:flex-row md:gap-4" : "md:flex-col md:gap-2"
      ), h.lg && C.push(
        h.lg === "horizontal" ? "lg:flex-row lg:gap-4" : "lg:flex-col lg:gap-2"
      ), C.join(" ");
    };
    return /* @__PURE__ */ v.jsxs("div", { ref: S, className: `flex flex-col ${u}`, ...m, children: [
      r && /* @__PURE__ */ v.jsx("span", { className: "text-sm font-medium text-foreground mb-2", children: r }),
      /* @__PURE__ */ v.jsx("div", { className: `flex ${k()}`, role: "radiogroup", children: i.map((C) => {
        const h = e == C.value, b = `${t}-${C.value}`;
        return /* @__PURE__ */ v.jsxs(
          "label",
          {
            htmlFor: b,
            className: `
                  flex items-center space-x-2 cursor-pointer 
                  ${a ? "opacity-50 cursor-not-allowed" : ""}
                `,
            children: [
              /* @__PURE__ */ v.jsxs("div", { className: "relative flex items-center justify-center", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "radio",
                    id: b,
                    name: t,
                    value: C.value,
                    checked: h,
                    onChange: () => !a && n?.(C.value),
                    disabled: a,
                    className: `\r
                      peer appearance-none w-4 h-4 rounded-full border border-border \r
                      checked:border-control-checked checked:bg-control-checked\r
                      focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-0\r
                    `
                  }
                ),
                /* @__PURE__ */ v.jsx("div", { className: "absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" })
              ] }),
              /* @__PURE__ */ v.jsx("span", { className: "text-sm", children: C.label })
            ]
          },
          C.value
        );
      }) }),
      s && /* @__PURE__ */ v.jsx("p", { className: "text-xs text-error mt-1", children: s })
    ] });
  }
);
Zd.displayName = "RadioGroup";
function uy(t, e) {
  const [n, i] = Ve(t);
  return Ri(() => {
    const r = setTimeout(() => {
      i(t);
    }, e);
    return () => {
      clearTimeout(r);
    };
  }, [t, e]), n;
}
const dy = ({ label: t, onRemove: e, disabled: n }) => /* @__PURE__ */ v.jsxs(
  "span",
  {
    className: `
      inline-flex items-center px-2 py-0.5 rounded text-sm font-medium
      bg-surface-200 dark:bg-surface-700 text-foreground
      border border-border
      ${n ? "opacity-50 cursor-not-allowed" : ""}
    `,
    children: [
      t,
      e && !n && /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "button",
          onClick: (i) => {
            i.stopPropagation(), e();
          },
          className: "ml-1.5 hover:text-red-500 focus:outline-none",
          "aria-label": `Remove ${t}`,
          children: /* @__PURE__ */ v.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ v.jsx("path", { d: "M18 6 6 18" }),
                /* @__PURE__ */ v.jsx("path", { d: "m6 6 12 12" })
              ]
            }
          )
        }
      )
    ]
  }
), ct = ({
  id: t,
  label: e,
  error: n,
  required: i,
  disabled: r,
  className: s,
  startAdornment: o,
  endAdornment: a,
  fullWidth: u,
  options: d = [],
  value: f,
  onChange: y,
  multiple: c = !1,
  limitTags: m,
  placeholder: S = "",
  loading: k = !1,
  loadOptions: C,
  onClear: h
}) => {
  const [b, w] = Ve(!1), [E, $] = Ve(""), [D, T] = Ve(-1), O = ai(null), A = ai(null), L = ai(null), B = nm(), X = `${B}-listbox`, z = (_) => `${B}-option-${_}`, [Q, H] = Ve([]), [V, re] = Ve(!1), P = uy(E, 500), Y = k || V, M = C ? Q : d, I = Cs(() => C || !E ? M : M.filter(
    (_) => _.label.toLowerCase().includes(E.toLowerCase())
  ), [M, E, C]);
  Ri(() => {
    if (!C) return;
    let _ = !0;
    return (async () => {
      re(!0);
      try {
        const se = await C(P);
        _ && H(se);
      } catch (se) {
        console.error("Failed to load options", se), _ && H([]);
      } finally {
        _ && re(!1);
      }
    })(), () => {
      _ = !1;
    };
  }, [P, C]), Ri(() => {
    const _ = (K) => {
      if (O.current && !O.current.contains(K.target)) {
        if (w(!1), !c && f) {
          const se = M.find((ce) => ce.value === f);
          $(se ? se.label : "");
        } else
          $("");
        T(-1);
      }
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [c, f, M]), Ri(() => {
    T(-1);
  }, [I]);
  const j = Cs(() => c ? Array.isArray(f) ? M.filter((_) => f.includes(_.value)) : [] : M.find((_) => _.value === f) || null, [M, f, c]), Z = (_) => {
    if (c) {
      const K = Array.isArray(f) ? f : [];
      K.includes(_.value) || y?.([...K, _.value]), $(""), A.current?.focus();
    } else
      y?.(_.value), w(!1), $(_.label);
    T(-1);
  }, G = (_) => {
    c && Array.isArray(f) ? y?.(f.filter((K) => K !== _)) : (y?.(null), $(""));
  }, q = (_) => {
    if (L.current) {
      const K = L.current.children[_];
      K && K.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, ae = (_) => {
    if (!r) {
      if (_.key === "ArrowDown")
        _.preventDefault(), b ? (T(
          (K) => K < I.length - 1 ? K + 1 : K
        ), q(D + 1)) : w(!0);
      else if (_.key === "ArrowUp")
        _.preventDefault(), b ? (T((K) => K > 0 ? K - 1 : K), q(D - 1)) : w(!0);
      else if (_.key === "Enter")
        _.preventDefault(), b && D >= 0 && D < I.length ? Z(I[D]) : b || w(!0);
      else if (_.key === "Escape")
        _.preventDefault(), w(!1), A.current?.blur();
      else if (_.key === "Backspace" && !E && c && Array.isArray(f) && f.length > 0) {
        const K = f[f.length - 1];
        G(K);
      }
    }
  };
  return Ri(() => {
    !c && !b && $(j ? j.label : "");
  }, [j, c, b]), /* @__PURE__ */ v.jsxs("div", { ref: O, className: "relative", children: [
    /* @__PURE__ */ v.jsx(
      Jn,
      {
        id: t,
        label: e,
        error: n,
        required: i,
        disabled: r,
        startAdornment: o,
        endAdornment: a || /* @__PURE__ */ v.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: `transition-transform duration-200 ${b ? "rotate-180" : ""}`,
            children: /* @__PURE__ */ v.jsx("path", { d: "m6 9 6 6 6-6" })
          }
        ),
        onClear: h,
        fullWidth: u,
        className: s,
        value: f,
        children: ({ isFocused: _, onFocus: K, onBlur: se, style: ce }) => /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: `
              peer flex flex-wrap items-center gap-1 min-h-10 w-full rounded-md border transition-all
              ${_ ? "border-ring ring-2 ring-ring ring-offset-0" : "border-border hover:border-surface-300"}
              ${n ? "border-destructive focus-within:ring-destructive/20" : ""}
              ${r ? "bg-surface-100 cursor-not-allowed" : "bg-input"}
            `,
            style: ce,
            children: [
              c && j.slice(0, m || void 0).map((ve) => /* @__PURE__ */ v.jsx("div", { className: "z-10 my-1", children: /* @__PURE__ */ v.jsx(
                dy,
                {
                  label: ve.label,
                  onRemove: () => G(ve.value),
                  disabled: r
                }
              ) }, ve.value)),
              c && m && j.length > m && /* @__PURE__ */ v.jsx("div", { className: "z-10 my-1", children: /* @__PURE__ */ v.jsxs("span", { className: "text-xs font-medium px-2 py-1 rounded bg-surface-200 dark:bg-surface-700 text-foreground border border-border", children: [
                "+",
                j.length - m
              ] }) }),
              /* @__PURE__ */ v.jsx(
                "input",
                {
                  ref: A,
                  id: t,
                  role: "combobox",
                  "aria-autocomplete": "list",
                  "aria-expanded": b,
                  "aria-controls": X,
                  "aria-activedescendant": D >= 0 ? z(D) : void 0,
                  disabled: r,
                  value: E,
                  onChange: (ve) => {
                    $(ve.target.value), w(!0);
                  },
                  onFocus: (ve) => {
                    K(), w(!0);
                  },
                  onKeyDown: ae,
                  onBlur: se,
                  placeholder: _ && (!c || j.length === 0) ? S : "",
                  className: `
                flex-1 bg-transparent h-10 transition-colors bg-none
                focus:outline-none
                ${r ? "cursor-not-allowed" : ""}
              `,
                  autoComplete: "off"
                }
              )
            ]
          }
        )
      }
    ),
    b && !r && /* @__PURE__ */ v.jsx("div", { className: "absolute top-full left-0 mt-1 w-full bg-white dark:bg-zinc-900 border border-border rounded-md shadow-lg z-50 max-h-60 overflow-auto", children: Y ? /* @__PURE__ */ v.jsx("div", { className: "p-2 text-sm text-center text-slate-500", children: "Loading..." }) : I.length === 0 ? /* @__PURE__ */ v.jsx("div", { className: "p-2 text-sm text-center text-slate-500", children: "No options found." }) : /* @__PURE__ */ v.jsx("ul", { className: "py-1", ref: L, role: "listbox", id: X, children: I.map((_, K) => {
      const se = c ? Array.isArray(f) && f.includes(_.value) : f === _.value, ce = K === D;
      return /* @__PURE__ */ v.jsxs(
        "li",
        {
          id: z(K),
          role: "option",
          "aria-selected": se,
          onClick: () => Z(_),
          className: `
                      px-3 py-2 text-sm cursor-pointer transition-colors
                      ${se ? "bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300" : ce ? "bg-surface-100 dark:bg-surface-800" : "hover:bg-surface-200 dark:hover:bg-surface-800"}
                    `,
          children: [
            _.label,
            se && /* @__PURE__ */ v.jsx("span", { className: "float-right", children: "✓" })
          ]
        },
        _.value
      );
    }) }) })
  ] });
};
var Zr = { exports: {} }, qr = { exports: {} }, Me = {};
var zc;
function hy() {
  if (zc) return Me;
  zc = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, f = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, c = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, m = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, k = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, h = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function w($) {
    if (typeof $ == "object" && $ !== null) {
      var D = $.$$typeof;
      switch (D) {
        case e:
          switch ($ = $.type, $) {
            case u:
            case d:
            case i:
            case s:
            case r:
            case y:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case a:
                case f:
                case S:
                case m:
                case o:
                  return $;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function E($) {
    return w($) === d;
  }
  return Me.AsyncMode = u, Me.ConcurrentMode = d, Me.ContextConsumer = a, Me.ContextProvider = o, Me.Element = e, Me.ForwardRef = f, Me.Fragment = i, Me.Lazy = S, Me.Memo = m, Me.Portal = n, Me.Profiler = s, Me.StrictMode = r, Me.Suspense = y, Me.isAsyncMode = function($) {
    return E($) || w($) === u;
  }, Me.isConcurrentMode = E, Me.isContextConsumer = function($) {
    return w($) === a;
  }, Me.isContextProvider = function($) {
    return w($) === o;
  }, Me.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === e;
  }, Me.isForwardRef = function($) {
    return w($) === f;
  }, Me.isFragment = function($) {
    return w($) === i;
  }, Me.isLazy = function($) {
    return w($) === S;
  }, Me.isMemo = function($) {
    return w($) === m;
  }, Me.isPortal = function($) {
    return w($) === n;
  }, Me.isProfiler = function($) {
    return w($) === s;
  }, Me.isStrictMode = function($) {
    return w($) === r;
  }, Me.isSuspense = function($) {
    return w($) === y;
  }, Me.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === i || $ === d || $ === s || $ === r || $ === y || $ === c || typeof $ == "object" && $ !== null && ($.$$typeof === S || $.$$typeof === m || $.$$typeof === o || $.$$typeof === a || $.$$typeof === f || $.$$typeof === C || $.$$typeof === h || $.$$typeof === b || $.$$typeof === k);
  }, Me.typeOf = w, Me;
}
var Oe = {};
var jc;
function py() {
  return jc || (jc = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = t ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, i = t ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = t ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = t ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = t ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = t ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = t ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = t ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, f = t ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = t ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, c = t ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, m = t ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, S = t ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, k = t ? /* @__PURE__ */ Symbol.for("react.block") : 60121, C = t ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, h = t ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = t ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function w(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === i || W === d || W === s || W === r || W === y || W === c || typeof W == "object" && W !== null && (W.$$typeof === S || W.$$typeof === m || W.$$typeof === o || W.$$typeof === a || W.$$typeof === f || W.$$typeof === C || W.$$typeof === h || W.$$typeof === b || W.$$typeof === k);
    }
    function E(W) {
      if (typeof W == "object" && W !== null) {
        var st = W.$$typeof;
        switch (st) {
          case e:
            var Te = W.type;
            switch (Te) {
              case u:
              case d:
              case i:
              case s:
              case r:
              case y:
                return Te;
              default:
                var be = Te && Te.$$typeof;
                switch (be) {
                  case a:
                  case f:
                  case S:
                  case m:
                  case o:
                    return be;
                  default:
                    return st;
                }
            }
          case n:
            return st;
        }
      }
    }
    var $ = u, D = d, T = a, O = o, A = e, L = f, B = i, X = S, z = m, Q = n, H = s, V = r, re = y, P = !1;
    function Y(W) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(W) || E(W) === u;
    }
    function M(W) {
      return E(W) === d;
    }
    function I(W) {
      return E(W) === a;
    }
    function j(W) {
      return E(W) === o;
    }
    function Z(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function G(W) {
      return E(W) === f;
    }
    function q(W) {
      return E(W) === i;
    }
    function ae(W) {
      return E(W) === S;
    }
    function _(W) {
      return E(W) === m;
    }
    function K(W) {
      return E(W) === n;
    }
    function se(W) {
      return E(W) === s;
    }
    function ce(W) {
      return E(W) === r;
    }
    function ve(W) {
      return E(W) === y;
    }
    Oe.AsyncMode = $, Oe.ConcurrentMode = D, Oe.ContextConsumer = T, Oe.ContextProvider = O, Oe.Element = A, Oe.ForwardRef = L, Oe.Fragment = B, Oe.Lazy = X, Oe.Memo = z, Oe.Portal = Q, Oe.Profiler = H, Oe.StrictMode = V, Oe.Suspense = re, Oe.isAsyncMode = Y, Oe.isConcurrentMode = M, Oe.isContextConsumer = I, Oe.isContextProvider = j, Oe.isElement = Z, Oe.isForwardRef = G, Oe.isFragment = q, Oe.isLazy = ae, Oe.isMemo = _, Oe.isPortal = K, Oe.isProfiler = se, Oe.isStrictMode = ce, Oe.isSuspense = ve, Oe.isValidElementType = w, Oe.typeOf = E;
  })()), Oe;
}
var Fc;
function qd() {
  return Fc || (Fc = 1, process.env.NODE_ENV === "production" ? qr.exports = hy() : qr.exports = py()), qr.exports;
}
var go, Lc;
function my() {
  if (Lc) return go;
  Lc = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function i(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return go = r() ? Object.assign : function(s, o) {
    for (var a, u = i(s), d, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var y in a)
        e.call(a, y) && (u[y] = a[y]);
      if (t) {
        d = t(a);
        for (var c = 0; c < d.length; c++)
          n.call(a, d[c]) && (u[d[c]] = a[d[c]]);
      }
    }
    return u;
  }, go;
}
var bo, Vc;
function pl() {
  if (Vc) return bo;
  Vc = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return bo = t, bo;
}
var yo, Bc;
function Yd() {
  return Bc || (Bc = 1, yo = Function.call.bind(Object.prototype.hasOwnProperty)), yo;
}
var xo, Hc;
function fy() {
  if (Hc) return xo;
  Hc = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ pl(), n = {}, i = /* @__PURE__ */ Yd();
    t = function(s) {
      var o = "Warning: " + s;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function r(s, o, a, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (i(s, f)) {
          var y;
          try {
            if (typeof s[f] != "function") {
              var c = Error(
                (u || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw c.name = "Invariant Violation", c;
            }
            y = s[f](o, f, u, a, null, e);
          } catch (S) {
            y = S;
          }
          if (y && !(y instanceof Error) && t(
            (u || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in n)) {
            n[y.message] = !0;
            var m = d ? d() : "";
            t(
              "Failed " + a + " type: " + y.message + (m ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, xo = r, xo;
}
var wo, Uc;
function vy() {
  if (Uc) return wo;
  Uc = 1;
  var t = qd(), e = my(), n = /* @__PURE__ */ pl(), i = /* @__PURE__ */ Yd(), r = /* @__PURE__ */ fy(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return wo = function(a, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function y(M) {
      var I = M && (d && M[d] || M[f]);
      if (typeof I == "function")
        return I;
    }
    var c = "<<anonymous>>", m = {
      array: h("array"),
      bigint: h("bigint"),
      bool: h("boolean"),
      func: h("function"),
      number: h("number"),
      object: h("object"),
      string: h("string"),
      symbol: h("symbol"),
      any: b(),
      arrayOf: w,
      element: E(),
      elementType: $(),
      instanceOf: D,
      node: L(),
      objectOf: O,
      oneOf: T,
      oneOfType: A,
      shape: X,
      exact: z
    };
    function S(M, I) {
      return M === I ? M !== 0 || 1 / M === 1 / I : M !== M && I !== I;
    }
    function k(M, I) {
      this.message = M, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function C(M) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, j = 0;
      function Z(q, ae, _, K, se, ce, ve) {
        if (K = K || c, ce = ce || _, ve !== n) {
          if (u) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var st = K + ":" + _;
            !I[st] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + ce + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[st] = !0, j++);
          }
        }
        return ae[_] == null ? q ? ae[_] === null ? new k("The " + se + " `" + ce + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new k("The " + se + " `" + ce + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : M(ae, _, K, se, ce);
      }
      var G = Z.bind(null, !1);
      return G.isRequired = Z.bind(null, !0), G;
    }
    function h(M) {
      function I(j, Z, G, q, ae, _) {
        var K = j[Z], se = V(K);
        if (se !== M) {
          var ce = re(K);
          return new k(
            "Invalid " + q + " `" + ae + "` of type " + ("`" + ce + "` supplied to `" + G + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return C(I);
    }
    function b() {
      return C(o);
    }
    function w(M) {
      function I(j, Z, G, q, ae) {
        if (typeof M != "function")
          return new k("Property `" + ae + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var _ = j[Z];
        if (!Array.isArray(_)) {
          var K = V(_);
          return new k("Invalid " + q + " `" + ae + "` of type " + ("`" + K + "` supplied to `" + G + "`, expected an array."));
        }
        for (var se = 0; se < _.length; se++) {
          var ce = M(_, se, G, q, ae + "[" + se + "]", n);
          if (ce instanceof Error)
            return ce;
        }
        return null;
      }
      return C(I);
    }
    function E() {
      function M(I, j, Z, G, q) {
        var ae = I[j];
        if (!a(ae)) {
          var _ = V(ae);
          return new k("Invalid " + G + " `" + q + "` of type " + ("`" + _ + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(M);
    }
    function $() {
      function M(I, j, Z, G, q) {
        var ae = I[j];
        if (!t.isValidElementType(ae)) {
          var _ = V(ae);
          return new k("Invalid " + G + " `" + q + "` of type " + ("`" + _ + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(M);
    }
    function D(M) {
      function I(j, Z, G, q, ae) {
        if (!(j[Z] instanceof M)) {
          var _ = M.name || c, K = Y(j[Z]);
          return new k("Invalid " + q + " `" + ae + "` of type " + ("`" + K + "` supplied to `" + G + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return C(I);
    }
    function T(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), o;
      function I(j, Z, G, q, ae) {
        for (var _ = j[Z], K = 0; K < M.length; K++)
          if (S(_, M[K]))
            return null;
        var se = JSON.stringify(M, function(ve, W) {
          var st = re(W);
          return st === "symbol" ? String(W) : W;
        });
        return new k("Invalid " + q + " `" + ae + "` of value `" + String(_) + "` " + ("supplied to `" + G + "`, expected one of " + se + "."));
      }
      return C(I);
    }
    function O(M) {
      function I(j, Z, G, q, ae) {
        if (typeof M != "function")
          return new k("Property `" + ae + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var _ = j[Z], K = V(_);
        if (K !== "object")
          return new k("Invalid " + q + " `" + ae + "` of type " + ("`" + K + "` supplied to `" + G + "`, expected an object."));
        for (var se in _)
          if (i(_, se)) {
            var ce = M(_, se, G, q, ae + "." + se, n);
            if (ce instanceof Error)
              return ce;
          }
        return null;
      }
      return C(I);
    }
    function A(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var I = 0; I < M.length; I++) {
        var j = M[I];
        if (typeof j != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(j) + " at index " + I + "."
          ), o;
      }
      function Z(G, q, ae, _, K) {
        for (var se = [], ce = 0; ce < M.length; ce++) {
          var ve = M[ce], W = ve(G, q, ae, _, K, n);
          if (W == null)
            return null;
          W.data && i(W.data, "expectedType") && se.push(W.data.expectedType);
        }
        var st = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new k("Invalid " + _ + " `" + K + "` supplied to " + ("`" + ae + "`" + st + "."));
      }
      return C(Z);
    }
    function L() {
      function M(I, j, Z, G, q) {
        return Q(I[j]) ? null : new k("Invalid " + G + " `" + q + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return C(M);
    }
    function B(M, I, j, Z, G) {
      return new k(
        (M || "React class") + ": " + I + " type `" + j + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function X(M) {
      function I(j, Z, G, q, ae) {
        var _ = j[Z], K = V(_);
        if (K !== "object")
          return new k("Invalid " + q + " `" + ae + "` of type `" + K + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var se in M) {
          var ce = M[se];
          if (typeof ce != "function")
            return B(G, q, ae, se, re(ce));
          var ve = ce(_, se, G, q, ae + "." + se, n);
          if (ve)
            return ve;
        }
        return null;
      }
      return C(I);
    }
    function z(M) {
      function I(j, Z, G, q, ae) {
        var _ = j[Z], K = V(_);
        if (K !== "object")
          return new k("Invalid " + q + " `" + ae + "` of type `" + K + "` " + ("supplied to `" + G + "`, expected `object`."));
        var se = e({}, j[Z], M);
        for (var ce in se) {
          var ve = M[ce];
          if (i(M, ce) && typeof ve != "function")
            return B(G, q, ae, ce, re(ve));
          if (!ve)
            return new k(
              "Invalid " + q + " `" + ae + "` key `" + ce + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(j[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var W = ve(_, ce, G, q, ae + "." + ce, n);
          if (W)
            return W;
        }
        return null;
      }
      return C(I);
    }
    function Q(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(Q);
          if (M === null || a(M))
            return !0;
          var I = y(M);
          if (I) {
            var j = I.call(M), Z;
            if (I !== M.entries) {
              for (; !(Z = j.next()).done; )
                if (!Q(Z.value))
                  return !1;
            } else
              for (; !(Z = j.next()).done; ) {
                var G = Z.value;
                if (G && !Q(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function H(M, I) {
      return M === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function V(M) {
      var I = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : H(I, M) ? "symbol" : I;
    }
    function re(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var I = V(M);
      if (I === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function P(M) {
      var I = re(M);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function Y(M) {
      return !M.constructor || !M.constructor.name ? c : M.constructor.name;
    }
    return m.checkPropTypes = r, m.resetWarningCache = r.resetWarningCache, m.PropTypes = m, m;
  }, wo;
}
var $o, Wc;
function gy() {
  if (Wc) return $o;
  Wc = 1;
  var t = /* @__PURE__ */ pl();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, $o = function() {
    function i(o, a, u, d, f, y) {
      if (y !== t) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    i.isRequired = i;
    function r() {
      return i;
    }
    var s = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: r,
      element: i,
      elementType: i,
      instanceOf: r,
      node: i,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, $o;
}
var Zc;
function by() {
  if (Zc) return Zr.exports;
  if (Zc = 1, process.env.NODE_ENV !== "production") {
    var t = qd(), e = !0;
    Zr.exports = /* @__PURE__ */ vy()(t.isElement, e);
  } else
    Zr.exports = /* @__PURE__ */ gy()();
  return Zr.exports;
}
var yy = /* @__PURE__ */ by();
const l = /* @__PURE__ */ sm(yy);
const Zs = p.createContext(0), Kd = () => p.useContext(Zs);
Zs.displayName = "KendoReactZIndexContext";
const Gd = ":not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-numerictextbox button):not(.k-split-button .k-split-button-arrow)", xy = ":not(.k-dropdownlist select)", wy = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled]):not(.k-dropdownlist select)",
  "textarea:not([disabled])",
  `button:not([disabled])${Gd}`,
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
], $y = [...wy, `[tabindex]${Gd}${xy}`], Ey = 500, Sy = 768;
const ky = { small: Ey, medium: Sy }, Jd = p.createContext(ky), ml = () => p.useContext(Jd);
Jd.displayName = "KendoReactAdaptiveModeContext";
const Dy = () => typeof document < "u" ? document : {};
let Cy = class {
  constructor() {
    this.scrollbar = 0;
  }
  get scrollbarWidth() {
    const e = Dy();
    if (!this.scrollbar && e && e.createElement) {
      const n = e.createElement("div");
      n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", n.innerHTML = "&nbsp;", e.body.appendChild(n), this.scrollbar = n.offsetWidth - n.scrollWidth, e.body.removeChild(n);
    }
    return this.scrollbar;
  }
};
const Dt = !!// from fbjs
(typeof window < "u" && window.document && window.document.createElement);
const N = (...t) => {
  const e = {}, n = (r) => typeof r == "object" ? Object.keys(r).forEach((s) => {
    e[s] = r[s];
  }) : e[r] = !0, i = (r) => r.filter((s) => s !== !0 && !!s).map((s) => Array.isArray(s) ? i(s) : n(s));
  return i(t), Object.keys(e).map((r) => e[r] && r || null).filter((r) => r !== null).join(" ");
}, Pe = (...t) => N(t).replace(/[^[\]a-zA-Z0-9-_!: ]/g, "");
const U = {
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
const Eo = () => {
  let t = "", e, n;
  for (e = 0; e < 32; e++)
    n = Math.random() * 16 | 0, (e === 8 || e === 12 || e === 16 || e === 20) && (t += "-"), t += (e === 12 ? 4 : e === 16 ? n & 3 | 8 : n).toString(16);
  return t;
};
const Vn = function() {
};
const qc = (t) => {
  if (!Dt || !document.body)
    return !1;
  const e = new Cy().scrollbarWidth;
  document.body.style.setProperty("--kendo-scrollbar-width", `${e}px`);
};
function fl(t) {
  return Math.floor(t.getTime() / 1e3);
}
function Qd(t, e) {
  const n = new Date(1e3 * t);
  return n.setDate(n.getDate() + e), fl(n);
}
function yr() {
  return fl(/* @__PURE__ */ new Date());
}
function Xd(t) {
  const e = (function(i) {
    if (typeof atob == "function") return atob(i);
    if (typeof Buffer == "function") return Buffer.from(i, "base64").toString("utf8");
    throw new Error("atob is undefined");
  })(t), n = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
  return n;
}
function la(t) {
  return Xd(t.replace(/-/g, "+").replace(/_/g, "/"));
}
function ur(t) {
  return new Date(1e3 * t);
}
function _i(t, e) {
  const n = ur(e);
  return t > new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1).getTime() / 1e3;
}
function Iy(t, e) {
  var n, i;
  let r = [];
  return ((n = t.licenses) === null || n === void 0 ? void 0 : n.length) > 0 ? r = t.licenses.map((s) => (function(o) {
    const a = o.split(".")[1], u = String.fromCharCode(...la(a));
    return JSON.parse(u);
  })(s)) : ((i = t.products) === null || i === void 0 ? void 0 : i.length) > 0 && (r = t.products.map((s) => ({ type: s.trial ? "trial" : "perpetual", code: s.code, expiration: s.licenseExpirationDate, licenseId: null, userId: t.userId }))), (function(s, o) {
    const a = o.filter((u) => u.type !== "usage").filter((u) => {
      var d, f;
      return s.productCode === u.code || ((d = s.redistributedBy) === null || d === void 0 ? void 0 : d.includes(u.code)) || ((f = s.productCodes) === null || f === void 0 ? void 0 : f.includes(u.code));
    }).sort((u, d) => d.expiration - u.expiration);
    return a.find((u) => u.type === "subscription" && !_i(yr(), u.expiration)) || a.find((u) => u.type === "perpetual" && !_i(s.publishDate, u.expiration)) || a.find((u) => u.type === "subscription" && !_i(Qd(yr(), 10), u.expiration)) || a.find((u) => u.type === "trial" && !_i(yr(), u.expiration)) || a.find((u) => u.type === "subscription") || a.find((u) => u.type === "perpetual") || a.find((u) => u.type === "trial");
  })(e, r);
}
let My = class {
  constructor(e, n, i) {
    this.productName = e, this.severity = "WARN", this.code = "TKL201", this.message = `No Telerik and Kendo UI License found.
  To download a license key file, visit https://prgress.co/3PwQMKZ`, this.notificationMessage = `License key missing for ${e} v${n}.  A license key is required for both paid and trial usage. Learn <a href="${i}">how to set up a license key</a>.`;
  }
}, Oy = class {
  constructor(e, n, i) {
    this.productName = e, this.severity = "WARN", this.code = "TKL202", this.message = `${e} is not listed in your current license file.
  Learn more about ${e} licensing at ${i}`, this.notificationMessage = `No license found for ${e} v${n}.  Access to the latest updates and support requires a <a href="${i}">valid license</a>.`;
  }
}, Ny = class {
  constructor(e, n, i) {
    this.productName = e, this.severity = "WARN", this.code = "TKL203", this.message = `Your trial has expired ${i} day(s) ago.
  Thank you for trying out ${e}, we hope you enjoyed your trial period.
  To continue using our product, consider upgrading to a commercial license: https://prgress.co/3C9mr1M`, this.notificationMessage = `Your trial license for ${e} v${n} has expired ${i} ago. To continue using our product, consider upgrading to a commercial license. Learn more about <a href="https://prgress.co/3PwQMdX">${e} licensing</a>.`;
  }
}, Ty = class {
  constructor(e, n, i, r, s) {
    this.productName = e, this.severity = "WARN", this.code = "TKL204";
    const o = i ? ` version ${i}` : "";
    this.message = `Your current license has expired on ${n.toLocaleDateString()} and is not valid for ${e}${o}. The product was published on ${r.toLocaleDateString()}.
  Renew your license at https://prgress.co/3Px9m5F`, this.notificationMessage = `Your license is not valid for ${e} v${i}. To continue using the product, install a <a href="${s}">valid license</a>. Renew <a href="https://prgress.co/3PwQNi1">your license</a> and download a new license key.`;
  }
}, Py = class {
  constructor(e, n) {
    this.productName = e, this.severity = "INFO", this.message = `Your Trial license will expire in ${-n} day(s).
  To acquire a commercial license, visit https://prgress.co/3PyHIoH`;
  }
};
async function Ry(t, e) {
  if (typeof crypto != "object" || typeof crypto.subtle != "object" || typeof TextEncoder != "function" || typeof TextDecoder != "function") return;
  const n = crypto.subtle, [i, r, s] = t.split("."), o = la(s), a = new TextEncoder(), u = new TextDecoder(), d = a.encode(`${i}.${r}`), f = u.decode(la(i));
  if (JSON.parse(f).typ !== "Telerik License Evidence") throw new Error("Unknown license evidence type");
  const y = await (function(c) {
    const m = Xd(c.replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "").replace(/\n/gm, ""));
    return crypto.subtle.importKey("spki", m, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, !0, ["verify"]);
  })(e);
  if (!await n.verify(y.algorithm, y, o, d)) throw new Error("Invalid license evidence");
}
const Ay = { data: '  {"products":[{"trial":false,"code":"KENDOUIREACT","licenseExpirationDate":1771618863},{"trial":false,"code":"KENDOUICOMPLETE","licenseExpirationDate":1771618863},{"trial":false,"code":"KENDOUIVUE","licenseExpirationDate":1771618863},{"trial":false,"code":"KENDOUIANGULAR","licenseExpirationDate":1771618863}],"licenses":[],"userId":"7e6a602d-47f2-4c7e-ab1c-1d951a2f8156","integrity":"MxfFtuDgtrlVO2EFprMNRRYU7xE=","scriptKey":false,"timestamp":1709021908}  ' }, as = /* @__PURE__ */ new Map(), Yc = /* @__PURE__ */ new Set();
let So = !0;
function eh(t) {
  const e = JSON.parse(Ay.data), n = !e.scriptKey && !e.timestamp, i = e.scriptKey && typeof KendoLicensing > "u";
  let r, s, o = !1;
  if (n || i || !((d) => {
    var f, y;
    return ((f = d.licenses) === null || f === void 0 ? void 0 : f.length) > 0 && Promise.all((y = d.licenses) === null || y === void 0 ? void 0 : y.map((c) => Ry(c, `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2mnUVMmkth2x+N/ODszG
OFIYBL6NOO1XWRj1wkmecKuLziJDhFz0WQmyOjY34Ymg9pLuBA9QSWrrZuvPw40N
m0X/GBmttFmPNvca3WmJ2oKM7PpLiUU9f7Ov5WeIXnx++ts/LC/OB7FtZ+LiRgJ7
0mZnPeTogdFrASf0zSQJv4jmX840LPa6nomWeUgIVGPLLVI14Gib8Dl+nOckqCNc
kAUUk4IBF67DufRt9zQyRxg99ysakvHX2SDbdGvIBdxWxvhhmrBoeix0uSVtG2gm
jdvSqlPJVdvMbk1Xe2+SUldJPrxH1VrTYeRUt4yqWxy16nFJUDj9exZ202X4THkU
JQIDAQAB
-----END PUBLIC KEY-----`))).then(() => {
      So = !0;
    }).catch(() => {
      So = !1, as.clear();
    }), So;
  })(e)) r = new My(t.productName, t.version, t.licensingDocsUrl);
  else if (s = Iy(e, t), s) {
    if (s.type === "trial") {
      const d = (function(f) {
        const y = yr() - fl(f);
        return Math.floor(y / 86400);
      })(ur(s.expiration));
      _i(yr(), s.expiration) ? r = new Ny(t.productName, t.version, d) : (r = new Py(t.productName, d), o = !0);
    } else if (s.type === "perpetual" || s.type === "subscription") {
      let d = s.expiration;
      s.type === "subscription" && (d = Qd(d, 10)), _i(t.publishDate, d) ? r = new Ty(t.productName, ur(s.expiration), t.version, ur(t.publishDate), t.licensingDocsUrl) : o = !0;
    }
  } else r = new Oy(t.productName, t.version, t.licensingDocsUrl);
  const a = s, u = a?.expiration ? ur(a.expiration) : void 0;
  return { isLicenseValid: o, licenseType: s?.type, licenseProductCode: a?.code, expiration: u, message: r };
}
function _y(t) {
  if (as.has(t.name)) return as.get(t.name);
  const { isLicenseValid: e, message: n } = eh(t), i = ((r) => r.productCode || r.productCodes[0])(t);
  return n && !Yc.has(i) && ((function(r, s) {
    if (typeof console == "object") {
      const a = `[${r.severity}][Telerik and Kendo UI Licensing]` + (o ? ` ${o}:` : "") + ` ${s.productName}`, u = typeof console.group == "function";
      u ? console.group(a) : console.warn(a), console.warn(r.message), u && console.groupEnd();
    }
    var o;
  })(n, t), Yc.add(i)), as.set(t.name, e), e;
}
const zy = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"], jy = "https://www.telerik.com/kendo-react-ui/components/free?utm_medium=product&utm_source=console&utm_campaign=dt_kendoreact_freemium", ri = /* @__PURE__ */ new Map(), Fy = () => {
  const t = Array.from(ri, ([e, n]) => `- ${e}: ${Array.from(n).join(", ") || "all"}`).join(`
`);
  console.group("[WARN][Telerik and Kendo UI Licensing] KendoReact"), console.warn(
    `License check was triggered by these premium KendoReact components/features
${t}
See the full list of free and premium components here: ${jy}`
  ), console.groupEnd(), ri.clear();
}, Pr = (t, e) => {
  const n = _y(t), i = zy.some(
    (r) => {
      var s;
      return (s = globalThis.document) == null ? void 0 : s.location.hostname.endsWith(r);
    }
  );
  if (!n && Dt && e)
    if (ri.size === 0 && setTimeout(Fy, 1e3), ri.has(e.component)) {
      const r = ri.get(e.component) || [];
      ri.set(e.component, /* @__PURE__ */ new Set([...e.features || [], ...r]));
    } else
      ri.set(e.component, e.features || []);
  return n || i;
}, ko = /* @__PURE__ */ new WeakMap(), Rr = (t) => {
  if (ko.has(t))
    return ko.get(t);
  const e = eh(t).message, n = e?.notificationMessage;
  return e?.severity === "WARN" && e?.code === "TKL201" ? n + "<br />See the browser console for a list of Premium features currently in use." : (ko.set(t, n), n);
};
const Ly = "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-banner";
let Do = !0;
const Ar = (t) => {
  const [e, n] = p.useState(!0), [i] = p.useState(Do), [r, s] = p.useState(!1);
  p.useEffect(() => {
    s(!0), Do && (Do = !1);
  }, []);
  const o = () => {
    n(!1);
  }, a = /* @__PURE__ */ p.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "16px",
        right: "16px",
        padding: "12px",
        borderRadius: "4px",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        backgroundColor: "#FFC000",
        color: "#1E1E1E",
        zIndex: 2e3
      }
    },
    /* @__PURE__ */ p.createElement("span", { style: { display: "flex", alignSelf: "center", marginRight: "8px" } }, /* @__PURE__ */ p.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ p.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z",
        fill: "#1E1E1E"
      }
    ))),
    t.message ? /* @__PURE__ */ p.createElement("span", { dangerouslySetInnerHTML: { __html: t.message } }) : /* @__PURE__ */ p.createElement("span", null, "We couldn't verify your ", /* @__PURE__ */ p.createElement("a", { href: Ly }, "license key"), " for KendoReact. Please see the browser console for details and resolution steps."),
    /* @__PURE__ */ p.createElement("div", { style: { display: "flex", alignItems: "center", marginLeft: "24px" } }, /* @__PURE__ */ p.createElement(
      "button",
      {
        title: "Close",
        style: {
          display: "inline-flex",
          position: "relative",
          border: "none",
          borderRadius: "4px",
          padding: "5px",
          backgroundColor: "transparent",
          transition: "color 0.2s ease-in-out",
          outline: "none",
          cursor: "pointer"
        },
        onClick: o
      },
      /* @__PURE__ */ p.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ p.createElement(
        "path",
        {
          d: "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z",
          fill: "#1E1E1E"
        }
      ))
    ))
  );
  return /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
    "div",
    {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.12,
        zIndex: 101,
        pointerEvents: "none",
        backgroundImage: (
          // eslint-disable-next-line @typescript-eslint/quotes
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABVxSURBVHgB7Z3tVRtJE4WL9zgANgLLGRCCnAGOADmCxRGgDFAGYiOADKQMIAGO9J8ji42g37mjqlUjBgOanpn+uM85sjC2sKzbVd1dVV0tQgghhBBCCCGEEEIIKRPn3Gn1GAlJmmN1pP558J6OX9540ejh4WGlX09OTk7+EZIclXYXlY43+vVflY7PH3wd9c+AY/Wvvcb9/b0bjUYOz/hBQpICmh1oOPrEa6l/4rTR337AhIMgTSqtzg+0m8gnof7p0mD8EzmGhkFwJiR6np6e7luLL9Q/RTDTBzF+7wfWg2CxWOCHjYVET6XTdLPZrFuLL9Q/NeCkoVUQ4/d+6Ijev1yof1rAUVMvQgjJHebrSRu+CEmWo/O8hISgCjStKpgiGoDWed4AUP/hwGf++Pi4hQYyFHgDzBP3T7A8b0uo/zD4+sMBy1CwWKR/YjF+fS/Uv2di0t/eEAdBT0QnvlD/PolR/xoOgu4JUd7bFdS/e6I1foODoFuqz3M2mUziFF+of5dEb/xGwyAYCwmCVuPNYv5MqX94Yl75NWKD4PLyEm92KqQoqH9Y8Bnis0zC+A14LbxxVqiVCfUPh678plxNFYQe5pjRgAgpDAv4IOAHJyCEkDJoiPaeCyG5UA1oRIYWHNivSSbV0wLq/zbQXz+bS8kV/AeZJ35NCcYPqH8zvv4VS8kVFou8phTjB9T/NcVt+zgI9rjQDRwTgPrvKcn5v4CDYIfT/vtFiS/UHxRr/AYHwQ4t9DiVwihZ/+KN36ATKJsS9U+utr9r/EGQdQSUNFKa/geZkImQ/2rHlznnQDG7oX9b9Xwl5AUl6G9oLcSSxl8Q/p4P13YJIaQMisvzEkJ2lJjnJyQY3lnoJGfNUvP8oUhZf7c70s2eCG1wL7uhRJ0iQnCveiDIhzf7t/f9IvP8IUhJfx/b9rErUkvgRVPIE1fv6xrvbzweu7OzM3d7e4v3OhfSilT092HMJzCxF4u43eWctfFvt1uHu9nxXvF1CWmtroldfx9W+HVErINAjX+M65ngAPxnOAJ1AiMhrUjBCdD4Oya2QYBlPwx8vV47WwFg+a+XZbrz83NzANz/ByBmJ0Dj74lYBgECfrbnt6U/DB/vC7388L2rqyu8vzshwYjRCdD4e8YfBLidVgYA0X7M9jB8PGazmbu5ualnfiz9dSAsufwPTwz6+5jjp/H3CD5ofPB9343u9v3u6+U+0jyY7eEA8Hx3d4c/QjvvMyGdMZT+TeA9wBHR+DPHUn3T6bRe7uMxn89tn18v/TH7O17gQEheYM9vEX7M9hbsg/FbHED3/IPPSISQgNhyE0au+7x7PPtOQFcB3PMTMjTYf4cyRN3zL2DgMHgs/7XU99acgDIWEgUh9W/4uWMh8QKBvCh8qxSR7fmxt0eEv8kJ6MzP8/2REFL/g59bp/o0xsMAb6xAnBB5Yr+6D3X9KOpBxP/ACWA0jFnoEw+h9D/4mYd5/pGQeAlRLFK95tJy+35578PDQ+0E9LAPi3wixAUsFmKRT6I0DIIPzdJuf6R3i+UeZnsz/nqjPx47/fMpZ/54OVb/g5/BZi4pY4Pgo8s2d3CkF0Z/cXFRL/+Xy2W9BdBUH4/5JsBn9W94PZu5pI77QzMOjepiNp/j71hO//fv31sr7qmtfT73i3xWjnvAZHhH/4nquXrLwB2bueSJ27Vmvodhq4df4BmzvQb3IPxWl/zgRl/DwZA4GrhdYFUHfbHE1y0enXsJ2FLfCnggvjqBejDoTI8o38ocgJAscNq8BY4fv/Uf+J46gjkdQcbA+19fXzs7zQfR8TWcgH+kFw/u+fMDKz/o3OQETk9PLcWLPSBbeeWELd91eb+CcTc5gXr6r9J8PNKbF/7S3z+6DYcvDasBOv6M0GUduNDfv+cEYPhjIVmA+I3Vc4gaOQzfHAECvb4joAPICCzlrIJP93h/dAIYDBQ/L8wBNC37rXUblv5CB5AfGvi5h6F7Ed9GJ2CZP0b780O1vreVnnhOAFsBOoCMscg/HMBbTsCO+grJFkvvHmYCSnYA/5MMcbsiH6TykNgfr9fry58/f0oltFxcXMj379+l+h42gBcnJyfr6iXfq1nhJ56FZIeuAq+fn59Xv379Oq0CgVJNBEIydAAavLv98ePHeSX4bfX1OQSv9noQ/a7y9A8HTuAcTqB63FSPZyE5Mq3GwOW3b99kNpu9+5e/fv2Kp3+FpAW8vB3cwbLOOvZYfl9LfGdW9KOn+mZCskZXhCuL9vtLfjvshd97hWArpn8TxGn5rhZzOL/gB19DYBzzxcEeTQEtGfArB7c7xbmyVu4YExoTuNcYEL6eCkkTxHYOmna4wzQfvq8z/+o949e940hIkjTp5/ZXjm/1+VQfr856UP/EcLtqr9s/OQENDl5+wPhH3nHQZK6mJjucNvNo2w+A+icC0jaY4a2LT5MT+Mye3+l58JSupiY7XIA2XtQ/IZw2f7D9v+X6D53AZ/f8LqGrqckOF7CNF/VPAF3Or6xvv53r951Amx5+DYOAXWEjxXXQxov6R4zTSzusht8OfABE+r3U39y1iPbbIODVX3ED4/Tagk8kENQ/QiyaC1Fg7PX6frm0Mk6/wUOQ8l799+j9I0cDwcF1ov4R4Xbde2vjxi92ogsPzPrY92szD7buJiQn3K6+v17q2yxvlV1u3+TRAn4jIYTkAfbymOWx1AcwfHMEXp5/JISQ9PEDd867ohvGbvt+cwRe6+5ee7ltNpuVf7yYdA8+68fHxy0+exkY6t8RGnSxJX19yAd7fWvhjEs7NOCHb2D9/+AGqO3HQGSeuD/8PD/GggwM9e8IBPCwr7ciHnzA6NrqtW5+4QRkIByLRXrDRXhXH/XvCKRccEuPX8mHD9jr7Vc7AV32D9rJh4Oge2I0foP6d8QHnADO9kdxYw8HQXfEbPwG9e+It5yAlvdG1beNgyA8KRi/Qf07oskJIEYQw8x/SMMgGAs5CmR0UjF+g/oHwh00YzAn0OZgT1/YINBU5VTIUeCzw2eYivEb1L8l7o1mDm7X220a48x/iNtVLE4dC5OOxu2794wlMaj/kbgAzRwIIQmS4p6PEBKIp6enexo/IYWCPdNms1nnbPxat7BwvH/+P7Dt08/kUjKH+hcOxGeeeI8f86lYSuZQ/8JhsciehoBv9rMi9VdcwZcucBCkVeEXmuL1dy0vbciBkgdBycZvFKs/8/x7ShwENP49xelP8V9T0iBgncdritGfxv82/iDIORJ+EAGfCKnJXn8a//to7fgy51y45sCX1P812erPZR8hBVMZ/Ax9+2j8hBSIHumcpXikkxBCBsXtz8QnUyXndvfz8Sx8AFLUnwTEveyKE32KyAK+7IYThqT0V88/o+cPBz7TVPLEJdb2d00y+pv4elHHTEgwUigWYaq3O6LXn56/e2IeBDT+7olWf4rfHzEOAurfH9HpT/H7J6ZBQP37Jxr9Kf5w+IMAt9PKQOB6NurfP4Prjyg/jX9Y8JnDAHE/vQwE/m0MQOrfP4PqX/3jp15Dj4kQQspCK5SK7OZDCCGEEBIfbneH4kgCoT9vLCQJguqPaD8CDdXzlZDogaEuFotgKSLL9uBnYmAJiZqg+vupPlzbJSR6YKSh8sSODVyTI5j+LO9NlxDFIqzzSJfW+jPPnz4Ng+DDGRvqnz5t9GeePxNsEHx2+U798+BY/e3FzPNnwLE6Uv88oI6EEEIIIYQQQgghhBBCCCGEEEIIIYQQQkiRoHyQxz/T51gdqX8evKfjlzdeNHp4eFjp15OTk5N/hCQHjoFWOt7o139VOj5/8HXUPwOO1f+/02ApXEhJmmnTzIP6p49r28wlRFMJMgwhmnlQ/3RB854g/RwaBgF7wkVOyGYe1D9N0L4vWDMXGwTaFHIsJGpgpF5TyIm0hPqnR6XTdLPZrF2oZi7aVIDePxFgqCH1ov6EEEIIITHRtl7jixBCkuToPH8ocGMQrihmiqh/8Jnjau6hrwen/sPQOs8fAgxA5on7xxcfBigDQf2HIUSdR6g3wmKRnolGfKH+QxCT/vaGOAh6Ijrxhfr3SYz613AQdE+04gv174Ng5b1dwUHQHTEbv0H9u6X6PGeTySTu69oaBsFYSCui9/we1L87tBpzFv1naoPg8vISA2AqpBX4DPFZxm78BvUn9awF8R07yrRGPf80pdmU+hNCyJHoYa4ZHSghhWEBXwT84ASEEFIGDdmec8mJ6j+EyNAiu/9YACC+fjaXkinU/21SSPW2BuIzT/waX/yKpWQK9W+mCOMHLBZ5TfbLPg/q/5pijN/gINhTnPhC/X1cwAauScFBUKbxG9R/h9P7F0rTv6bkQVCy8Rt0Aju00OtUSqTEQZBSbX/X0AmQF4Mg5wi4cRAJn0jhlKY/aUBrx5c558ANzYUvafx7StAfqxv0UKyer4QQUg5+zAfXdgkhpAxKqvMghHgUm+cPhdufhU/Oa+qRTp6Jb0HK+oOi8/whcC+74SSTIrJlH7vitCMl/RHcqx4I8uHN/u19v9w8f1swi6aWJ+aeLxyp6F+9r2u8v/F47M7Oztzt7S3e61xIe1IqFmGFX3hi19/tLuesjX+73brFYlG/V3xdQlq7F1JwAjT+7ohVfzX+Ma5ngwPwn+EI1AmMhLQnZidA4++e2PTHsh8Gvl6vna0AsPzXy1Ld+fm5OQDu/0MRoxOg8fdHLPoj4Gd7flv6w/DxvtDLD9+7urrC+7sTEhZ/EOB2WhkYE57G3w8x6I9oP2Z7GD4es9nM3dzc1DM/lv46FpZc/ncEBgEMD7XVMjB4DxiINP7+GEp/t7/voF7uI0WJ2R4OAM93d3f4I7TzPhNCSD5Yqm86ndbLfTzm87nt8+ulP2Z/x+vQCMkL7Pktwo/Z3oJ9MH6LA+ief/AVKSEkILbdgJHr3v4ez74T0FUA9/wxgP1XF0Lozx0LiZqQ+uuefwEDh8Fj+a+lvrfmBJSxkOGBEF4UNliKyFJ9usdjgCdSQupve37s7RHhb3ICOvPzfH8swDhD54kb8vwjIVESSn+/ug91/SjqQcT/wAlgNhiz0CcyQhaLsMgnPULoX73m0nL7fnnvw8ND7QT0sA+LfGKlYRB82ks7NnNIlmP1d/sjvVtsJTDbm/HXG/3x2OmfTznzR44NgmOX7Y7NHJLms/q7gyO9MPqLi4t6+b9cLustgKb6eMw3FdwfmjFggKg3X71l4I7NHJLmHf3PVPs5/o7l9H///r214p7a2udzv8hn5RgDShsN3Czg1SE4lom6xKO4heB2rdnvYdi6QljgGbO9BvfgOLa65Ac3+hpOBinjtHkDhMdv/Qe+p45gTkeQL7bUtwIeaK5OoJ4MdKZHlG9lDkBIPsDzQ/QmJ3B6emopHqwB2corQzDDX19fOzvNh7GAr+EE/CO9eHDPnxH+0t8/ugnBpWE1QOHzwpbvurxfwbibnEA9/VdpPh7pzQjs3yyfK2rkMHxzBAj0+I6ADiAvdFsHLvT37zkBGP5YSB6YA2ha9lvrJiz9hQ4gO7CVswo+jfH80QlgMqD2GaKC35unF88JYCtAB5AnGvi9h6F7GZ9GJ2CZP0b7M8XSO4eZADqAvLHIPxzAW07AjvpKYfxPCkBngevn5+fVr1+/TqtAoFQDQUieuF2RD1J5SOyP1+v15c+fP6Vy9HJxcSHfv3+X6nsIAF2cnJysq5d8r1YAP/EshVGEA6iYVkZ/+e3bN5nNZu/+5a9fv+LpXyHJocG72x8/fpxXDv+2+vocDr+K9cDp31UrvYcDJ3AOJ1A9bqrHs5D80BlhZdF+f8lvhz3we68QZMX0T3pglWcHd6Cjdeyx/L6W+M6s6EdP9c2ElIHbneJaWStnFIRoTOBe94D4eiokSZyW72oxl/MLfvA1jB6642CPpoCXDPhljO79RwffG6kj2OrzqT5e1Xo3vZ7EC2K7B0073GGaD9/XmX/1nvFT/4Rx2syjbT+AIW+gIZ/D7ao9b//kBDQ4ePkB46f+qeICtPFy2g8gpavJSwZpW8zw1sWnyQl8Zs9P/RPFBWzj5RK6mrxkTCfb/1uu/9AJfHbPT/0Tw3XQxqthELArcETocn5lffvtXL/vBNr08KP+CQFxvLbQEwmEDQJe/RQXTi/tsBp+O/AFEOn3Un9z1yLaT/0TQgNBwb20Zg/o/SPBsjkwShh7vb5fLq2M22/wEqS8V/+9sRBChsXtuvfWxo1f7EQnHpj1se/XZh5s3U1ITrhdfX+91LdZ3io73b7JqwX8RkIIyQPs5THLY6kPYPjmCLw8/0hI3iAd8/j4uN1sNisZGLwH/3gpCYcfuHPeFd0wdtv3myPwWnf32suR+veMn+fHBy8DA0fEPHF4NOhmS/r6kA/2+tbCHZd2aMAP38D6/8ENUNtP/XvERXhXn2OxSCcggId9vRXx4LNF12avdfsLJyADQf17IkbjNzgIwoOUK27p8Sv58Nl6vf1qJ6DL/kE7+VD/jonZ+A0OgvB8wAngbH8UN/ZQ/45IwfgNDoLwvOUEtLw3qr6N1D8wiOimYvxGwyAYC2lFkxNAjCCGmf8Q6h8QRHeR7knF+A0bBJqqmgr5NO6gGYc5gTYHe/qC+gfC7bv3jCUx3K5ibepYmPJp3BvNXNyut+M0xpn/EOpPyBG4AM1cCCEJkmLMhxASiKenp3saf4Fg2Vc9FsjpSuZo3hr/115r1lMAe+bNZrPO2fip/wH+nq9iKZkD8ZknLhfq79EQ8MneK7JYpGyov5JShV9oOAjKvnSjeP1LNn6j5EHgWl7akgPF6k/j31PiIGCef09x+jPP+5qSBgGd/2uKcgIHEdCJkBp/EOSaCaHxv00J+tdoDnRJ8V+jtePLHGshaPzvk7P+pGC47SOkYCqDn6FvH42fkAJxuyPdaN01FlIGbnc/37TkFE8o3L4nAmvHCyQ5/S3gw24oYXAvuyKxbLgwktK/xNr+rsFqKpU8sa78Zlz5hSMZ/Znq6Y4UikVMf72oYyYkGNHrT+PvnpgHAVd+3ROt/jT+/ohxEFD//ohOf4rfPzENAurfP1E5AVzPRPH7xx8EuJ1WBoDGPxyH+ruhjlTjbnR9AxMhvYLPHA4YGkjPIMpP4x+WIfUnhYMZx2voMRFCSFlohVqR3XwIIaQc3O5OtrGQJFC9RkKKRCsyRxICi/YuFgvs986ERA3Eh1ahUkT4GQg0Vc9XQqInqP6ODRyTA046VJ7Y1x/XdgmJnmD6M8+bLiGKRVjemy6t9WeeN30aBsGHI/bUP33a6M88bybYIPjs9o3658Gx+tuLmefNgGN1pP55QB0JIYQQQgghhBBCCJGy+T9ftRg+rVNPfAAAAABJRU5ErkJggg==')"
        )
      }
    }
  ), r && i && e && pd.createPortal(a, document.body));
};
function tn(t, e, n, i) {
  if (t) {
    const r = {
      syntheticEvent: e,
      nativeEvent: e.nativeEvent,
      target: n
    };
    t.call(void 0, Object.assign(r, i));
  }
}
function Vy({
  onFocus: t,
  onBlur: e,
  onSyncFocus: n,
  onSyncBlur: i
}) {
  const r = p.useRef(!1), s = p.useRef(0), o = p.useCallback(
    (d) => {
      clearTimeout(s.current), s.current = window.setTimeout(() => d());
    },
    [s]
  ), a = p.useCallback(
    (...d) => {
      clearTimeout(s.current), n && n.call(void 0, d[0]), !r.current && (r.current = !0, t && t.call(void 0, ...d));
    },
    [r, t, n]
  ), u = p.useCallback(
    (...d) => {
      i && i.call(void 0, d[0]), o(() => {
        r.current && e && (r.current = !1, e.call(void 0, ...d));
      });
    },
    [r, o, e, i]
  );
  return p.useEffect(() => () => {
    clearTimeout(s.current);
  }, []), {
    onFocus: a,
    onBlur: u
  };
}
const vl = ({
  children: t,
  onFocus: e,
  onBlur: n,
  onSyncFocus: i,
  onSyncBlur: r
}) => {
  const s = Vy({ onFocus: e, onBlur: n, onSyncFocus: i, onSyncBlur: r });
  return /* @__PURE__ */ p.createElement(p.Fragment, null, t.call(void 0, { ...s }));
};
const Ps = (t, e) => p.useContext(t)(e);
const Qn = () => p.createContext((t) => t), Qi = (t, e) => p.forwardRef((n, i) => {
  const r = Ps(t, n);
  return /* @__PURE__ */ p.createElement(e, { ...r, ref: i });
});
const By = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function gl(t) {
  const [e, n] = p.useState(!1);
  p.useEffect(() => {
    n(!0);
  }, []);
  const [i, r] = p.useState(() => {
    if (t)
      return t;
    if (e)
      return Eo();
  });
  By(() => {
    i === void 0 && r(Eo());
  }, []);
  const s = p[`useId${Eo()}`.slice(0, 5)];
  if (s !== void 0) {
    const o = s();
    return t ?? o;
  }
  return i;
}
const En = (t) => p.forwardRef((e, n) => {
  const i = gl(e.id);
  return /* @__PURE__ */ p.createElement(t, { ...e, id: i, ref: n });
});
const Hy = et.createContext(void 0), pn = () => et.useContext(Hy);
const qs = (t) => p.forwardRef((e, n) => {
  const i = pn();
  return /* @__PURE__ */ p.createElement(t, { ...e, ref: n, unstyled: i });
});
const bl = (t) => p.forwardRef((e, n) => {
  const i = ml();
  return /* @__PURE__ */ p.createElement(t, { ...e, ref: n, _adaptiveMode: i });
});
const Uy = (t) => p.forwardRef((e, n) => {
  const i = Kd();
  return /* @__PURE__ */ p.createElement(t, { ...e, ref: n, _zIndex: i });
});
const Wy = (t, e, n = {}) => {
  const i = p.useCallback(
    (c) => {
      n.onMouseDown && n.onMouseDown.call(void 0, c), t.onMouseDown && t.onMouseDown.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onMouseDown, t.onMouseDown, e]
  ), r = p.useCallback(
    (c) => {
      n.onMouseUp && n.onMouseUp.call(void 0, c), t.onMouseUp && t.onMouseUp.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onMouseUp, t.onMouseUp, e]
  ), s = p.useCallback(
    (c) => {
      n.onClick && n.onClick.call(void 0, c), t.onClick && t.onClick.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onClick, t.onClick, e]
  ), o = p.useCallback(
    (c) => {
      n.onDoubleClick && n.onDoubleClick.call(void 0, c), t.onDoubleClick && t.onDoubleClick.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onDoubleClick, t.onDoubleClick, e]
  ), a = p.useCallback(
    (c) => {
      n.onMouseEnter && n.onMouseEnter.call(void 0, c), t.onMouseEnter && t.onMouseEnter.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onMouseEnter, t.onMouseEnter, e]
  ), u = p.useCallback(
    (c) => {
      n.onMouseLeave && n.onMouseLeave.call(void 0, c), t.onMouseLeave && t.onMouseLeave.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onMouseLeave, t.onMouseLeave, e]
  ), d = p.useCallback(
    (c) => {
      n.onMouseMove && n.onMouseMove.call(void 0, c), t.onMouseMove && t.onMouseMove.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onMouseMove, t.onMouseMove, e]
  ), f = p.useCallback(
    (c) => {
      n.onMouseOut && n.onMouseOut.call(void 0, c), t.onMouseOut && t.onMouseOut.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onMouseOut, t.onMouseOut, e]
  ), y = p.useCallback(
    (c) => {
      n.onMouseOver && n.onMouseOver.call(void 0, c), t.onMouseOver && t.onMouseOver.call(void 0, {
        target: e.current,
        syntheticEvent: c
      });
    },
    [n.onMouseOver, t.onMouseOver, e]
  );
  return {
    onClick: s,
    onMouseUp: r,
    onMouseDown: i,
    onDoubleClick: o,
    onMouseEnter: a,
    onMouseLeave: u,
    onMouseMove: d,
    onMouseOut: f,
    onMouseOver: y
  };
};
const Zy = {
  default: "",
  xsmall: "k-icon-xs",
  small: "k-icon-sm",
  medium: "k-icon-md",
  large: "k-icon-lg",
  xlarge: "k-icon-xl",
  xxlarge: "k-icon-xxl",
  xxxlarge: "k-icon-xxxl"
};
const qy = (t) => "k-i-" + t, yl = l.shape({
  name: l.string.isRequired,
  content: l.string.isRequired,
  viewBox: l.string.isRequired
});
const xl = p.forwardRef((t, e) => {
  const { className: n, name: i, themeColor: r, size: s, flip: o, style: a, id: u, tabIndex: d, ...f } = t, y = p.useRef(null), c = p.useRef(null);
  p.useImperativeHandle(y, () => ({
    element: c.current
  })), p.useImperativeHandle(e, () => y.current);
  const m = p.useMemo(() => s || Kc.size, [s]), S = p.useMemo(() => o || Kc.flip, [o]), k = p.useMemo(
    () => N(
      "k-icon",
      "k-font-icon",
      i && qy(i),
      {
        [`k-color-${r}`]: r,
        "k-flip-h": S === "horizontal" || S === "both",
        "k-flip-v": S === "vertical" || S === "both"
      },
      Zy[m],
      n
    ),
    [i, r, m, S, n]
  ), C = Wy(t, y);
  return /* @__PURE__ */ p.createElement(
    "span",
    {
      ref: c,
      ...f,
      ...C,
      className: k,
      id: u,
      tabIndex: d,
      style: a,
      role: "presentation"
    }
  );
});
xl.propTypes = {
  style: l.object,
  classNames: l.string,
  name: l.string,
  themeColor: l.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: l.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: l.oneOf(["default", "horizontal", "vertical", "both"])
};
const Kc = {
  size: "default",
  flip: "default"
};
xl.displayName = "KendoIcon";
const x = {
  prefix: "k",
  rtl: "rtl",
  rounded: "rounded",
  value: "value",
  state: "state",
  infinite: "infinite",
  clear: "clear",
  reset: "reset"
}, Gc = {
  vstack: "vstack",
  hstack: "hstack"
}, Tt = {
  calendar: "calendar",
  buttongroup: "buttongroup",
  dateinput: "dateinput",
  datetime: "datetime",
  datetimepicker: "datetimepicker",
  menu: "menu",
  timepicker: "timepicker"
}, ze = {
  xsmall: "xs",
  small: "sm",
  medium: "md",
  large: "lg",
  xlarge: "xl",
  xxlarge: "xxl",
  xxxlarge: "xxxl"
}, te = {
  solid: "solid",
  outline: "outline",
  flat: "flat",
  link: "link",
  clear: "clear"
}, ie = {
  base: "base",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  dark: "dark",
  light: "light",
  inherit: "inherit",
  inverse: "inverse"
}, sn = {
  small: "sm",
  medium: "md",
  large: "lg"
}, ca = {
  horizontal: "horizontal"
}, Xe = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  start: "start",
  mid: "mid",
  end: "end"
}, ue = {
  actions: "actions",
  container: "container",
  content: "content",
  group: "group",
  nav: "nav",
  wrap: "wrap",
  wrapper: "wrapper",
  list: "list",
  placeholder: "placeholder",
  popup: "popup",
  item: "item",
  part: "part",
  separator: "separator",
  spacer: "spacer",
  tab: "tab",
  view: "view"
}, Ze = {
  table: "table",
  text: "text",
  button: "button",
  tbody: "tbody",
  thead: "thead",
  tr: "tr",
  th: "th",
  td: "td",
  header: "header",
  footer: "footer",
  icon: "icon",
  title: "title",
  link: "link",
  caption: "caption"
}, qi = {
  increase: "increase",
  decrease: "decrease",
  cancel: "cancel",
  accept: "accept",
  split: "split"
}, fe = {
  active: "active",
  focus: "focus",
  pending: "pending",
  selected: "selected",
  disabled: "disabled",
  highlight: "highlight",
  invalid: "invalid",
  required: "required",
  empty: "empty",
  scrollable: "scrollable",
  stretched: "stretched",
  alt: "alt",
  shown: "shown"
}, g = {
  prefix: "animation",
  child: "child",
  relative: "relative",
  slide: "slide",
  appear: "appear",
  active: "active",
  enter: "enter",
  exit: "exit",
  pushRight: "push-right",
  pushLeft: "push-left",
  pushDown: "push-down",
  pushUp: "push-up",
  expandVertical: "expand-vertical",
  expandHorizontal: "expand-horizontal",
  fade: "fade",
  zoomIn: "zoom-in",
  zoomOut: "zoom-out",
  slideIn: "slide-in",
  slideDown: "slide-down",
  slideUp: "slide-up",
  slideRight: "slide-right",
  slideLeft: "slide-left",
  revealVertical: "reveal-vertical",
  revealHorizontal: "reveal-horizontal",
  "animation-container": "animation-container",
  "animation-container-shown": "animation-container-shown",
  "animation-container-relative": "animation-container-relative",
  "animation-container-fixed": "animation-container-fixed",
  "child-animation-container": "child-animation-container"
}, Ii = {
  input: "input",
  inner: "inner",
  spin: "spin",
  spinner: "spinner"
}, ge = {
  week: "week",
  weekdays: "weekdays",
  weekend: "weekend",
  month: "month",
  year: "year",
  decade: "decade",
  century: "century",
  // eslint-disable-next-line id-blacklist
  number: "number",
  navigation: "navigation",
  marker: "marker",
  now: "now",
  range: "range",
  today: "today",
  other: "other",
  date: "date",
  time: "time",
  selector: "selector",
  timeselector: "timeselector"
}, qe = {
  prefix: "icon",
  svg: "svg",
  i: "i",
  color: "color",
  flipH: "flip-h",
  flipV: "flip-v"
}, dr = {
  text: "text",
  floatingLabel: "floating-label",
  container: "container"
}, Yy = {
  prefix: "popup"
}, _e = `${x.prefix}-${Ii.input}`, We = `${x.prefix}-${Tt.calendar}`, ee = `${x.prefix}-${Ze.button}`, In = `${x.prefix}-${Tt.menu}`;
const Jc = {
  wrapper: {
    main: `${x.prefix}-${qe.prefix}`,
    svgPrefix: `${x.prefix}-${qe.svg}-${qe.prefix}`,
    namePrefix: `${x.prefix}-${qe.svg}-${qe.i}-`,
    flipH: `${x.prefix}-${qe.flipH}`,
    flipV: `${x.prefix}-${qe.flipV}`,
    themeColor: {
      inherit: `${x.prefix}-${qe.color}-${ie.inherit}`,
      primary: `${x.prefix}-${qe.color}-${ie.primary}`,
      secondary: `${x.prefix}-${qe.color}-${ie.secondary}`,
      tertiary: `${x.prefix}-${qe.color}-${ie.tertiary}`,
      info: `${x.prefix}-${qe.color}-${ie.info}`,
      success: `${x.prefix}-${qe.color}-${ie.success}`,
      warning: `${x.prefix}-${qe.color}-${ie.warning}`,
      error: `${x.prefix}-${qe.color}-${ie.error}`,
      dark: `${x.prefix}-${qe.color}-${ie.dark}`,
      light: `${x.prefix}-${qe.color}-${ie.light}`
    },
    size: {
      default: "",
      xsmall: `${x.prefix}-${qe.prefix}-${ze.xsmall}`,
      small: `${x.prefix}-${qe.prefix}-${ze.small}`,
      medium: `${x.prefix}-${qe.prefix}-${ze.medium}`,
      large: `${x.prefix}-${qe.prefix}-${ze.large}`,
      xlarge: `${x.prefix}-${qe.prefix}-${ze.xlarge}`,
      xxlarge: `${x.prefix}-${qe.prefix}-${ze.xxlarge}`,
      xxxlarge: `${x.prefix}-${qe.prefix}-${ze.xxxlarge}`
    }
  },
  svg: {
    main: "",
    flipH: "",
    flipV: ""
  }
}, Qc = {
  wrapper: (t) => {
    const { iconNameProp: e, themeColor: n, flipH: i, flipV: r, size: s, c: o = Jc } = t, a = o.wrapper || {};
    return {
      [a.main || ""]: !0,
      [a.svgPrefix || ""]: !0,
      [`${a.namePrefix || ""}${e}`]: e,
      [a.themeColor[n] || ""]: n,
      [a.flipH || ""]: i,
      [a.flipV || ""]: r,
      [a.size[s] || ""]: a.size[s]
    };
  },
  svg: (t) => {
    const { flipH: e, flipV: n, c: i = Jc } = t, r = i.svg;
    return {
      [r.main || ""]: !0,
      [r.flipH || ""]: e,
      [r.flipV || ""]: n
    };
  }
};
const wl = p.forwardRef((t, e) => {
  const {
    children: n,
    className: i,
    svgClassName: r,
    icon: s,
    flip: o,
    id: a,
    tabIndex: u,
    size: d,
    style: f,
    svgStyle: y,
    themeColor: c,
    viewBox: m,
    name: S,
    onClick: k,
    ...C
  } = t, h = p.useRef(null), b = pn(), w = b && b.uSvgIcon;
  p.useImperativeHandle(
    e,
    () => ({
      element: h.current
    })
  );
  const E = p.useMemo(() => s ? s.name : Yr.icon, [s]), $ = p.useMemo(() => s ? s.content : void 0, [s]), D = p.useMemo(() => d || Yr.size, [d]), T = p.useMemo(() => o || Yr.flip, [o]), O = p.useMemo(() => m || Yr.viewBox, [m]), A = p.useMemo(
    () => N(
      Qc.wrapper({
        c: w,
        iconNameProp: E,
        themeColor: c,
        flipH: T === "horizontal" || T === "both",
        flipV: T === "vertical" || T === "both",
        size: D
      }),
      i
    ),
    [w, E, c, T, D, i]
  ), L = p.useMemo(() => t.width && t.height ? { width: t.width, height: t.height, ...f } : t.width ? { width: t.width, height: t.width, ...f } : t.height ? { width: t.height, height: t.height, ...f } : { ...f }, [t.width, t.height, f]), B = p.useMemo(
    () => $ ? { __html: $ } : void 0,
    [$]
  );
  return /* @__PURE__ */ p.createElement(
    "span",
    {
      className: N(
        Qc.svg({
          c: w,
          themeColor: c,
          flipH: T === "horizontal" || T === "both",
          flipV: T === "vertical" || T === "both"
        }),
        A
      ),
      style: L,
      ref: h,
      onClick: k,
      "aria-hidden": !0
    },
    /* @__PURE__ */ p.createElement(
      "svg",
      {
        id: a,
        className: r,
        style: y,
        "aria-hidden": !0,
        tabIndex: u,
        focusable: !1,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: s ? s.viewBox : O,
        dangerouslySetInnerHTML: B,
        ...C
      },
      s ? void 0 : n
    )
  );
});
wl.propTypes = {
  style: l.object,
  classNames: l.string,
  children: l.any,
  icon: l.object,
  themeColor: l.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: l.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: l.oneOf(["default", "horizontal", "vertical", "both"])
};
const Yr = {
  size: "default",
  flip: "default",
  icon: "",
  viewBox: "0 0 24 24"
};
wl.displayName = "KendoSvgIcon";
const th = p.createContext({ type: "svg" });
th.displayName = "KendoReactIconsContext";
const pi = p.forwardRef(
  (t, e) => {
    var n, i;
    const { type: r, icons: s } = p.useContext(th), { icon: o, ...a } = t;
    let u = r === "svg" ? ((n = t.icon) == null ? void 0 : n.name) || t.name : t.name || ((i = t.icon) == null ? void 0 : i.name);
    u = u && s && s[u] && typeof s[u] == "string" ? s[u] : u;
    const d = u && s && s[u] && typeof s[u] != "string" ? s[u] : o;
    return r === "svg" && d ? /* @__PURE__ */ p.createElement(wl, { ...t, icon: d, ref: e }) : /* @__PURE__ */ p.createElement(xl, { ...a, name: u, ref: e });
  }
);
pi.displayName = "KendoIconWrap";
const kr = {
  sizeMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  },
  roundedMap: {
    small: "sm",
    medium: "md",
    large: "lg",
    full: "full"
  }
};
let nh = class {
  constructor(e) {
    this.rovingTabIndex = !0, this.update = () => {
    }, this.setFocusClass = (n) => {
      n.target.classList.add(this.focusClass);
    }, this.disableTabindexForRest = (n) => {
      this.elements.forEach((i) => {
        i !== n && i.setAttribute("tabindex", "-1");
      });
    }, this.focusNextIndex = (n, i, r) => {
      const s = i === 1 ? this.next(n, r) : this.previous(n, r);
      return this.focusElement(s, n), s;
    }, this.tabIndex = e.tabIndex || 0, this.root = e.root, this.selectors = e.selectors, this.focusOptions = e.focusOptions || { preventScroll: !0 }, this.rovingTabIndex = e.rovingTabIndex !== void 0 ? e.rovingTabIndex : !0, this.mouseEvents = e.mouseEvents || {}, this.keyboardEvents = e.keyboardEvents || {}, this.focusClass = e.focusClass, this.lastFocused = null;
  }
  /**
   * Returns the collection of DOM elements which the module will navigate in.
   */
  get elements() {
    return this.root.current ? Array.from(this.root.current.querySelectorAll(this.selectors.join(","))) : [];
  }
  /**
   * Returns the first navigation DOM element.
   */
  get first() {
    return this.root.current && this.root.current.querySelector(this.selectors.join(",")) || null;
  }
  /**
   * Returns the last navigation DOM element.
   */
  get last() {
    const e = this.elements;
    return e[e.length - 1] || null;
  }
  /**
   * Returns the focused DOM element from the navigation collection of DOM elements.
   */
  get current() {
    return this.elements.find((e) => e.matches(":focus")) || null;
  }
  /**
   * Returns the next DOM element from the navigation collection of DOM elements.
   */
  next(e, n) {
    const i = n ? this.customElements(n) : this.elements;
    let r = i.indexOf(e) + 1;
    return r = r < 0 ? i.length - 1 : r, i[r % i.length];
  }
  /**
   * Returns the previous DOM element from the navigation collection of DOM elements.
   */
  previous(e, n) {
    const i = n ? this.customElements(n) : this.elements;
    let r = i.indexOf(e) - 1;
    return r = r < 0 ? i.length - 1 : r, i[r % i.length];
  }
  /**
   * Focuses the next element from the navigation collection of DOM elements.
   */
  focusNext(e, n) {
    return this.focusNextIndex(e, 1, n);
  }
  /**
   * Focuses the previous element from the navigation collection of DOM elements.
   */
  focusPrevious(e, n) {
    return this.focusNextIndex(e, -1, n);
  }
  /**
   * The keyboard events handler.
   */
  triggerKeyboardEvent(e, n) {
    const i = this.target(e.target), r = i && i.closest(this.selectors.join(",")), s = e.key === " " ? "Space" : e.key, o = e.nativeEvent.type;
    r && this.keyboardEvents[o][s] && this.keyboardEvents[o][s].call(void 0, r, this, e, n);
  }
  /**
   * The mouse events handler.
   */
  triggerMouseEvent(e) {
    const n = this.target(e.target), i = n && n.closest(this.selectors.join(",")), r = e.nativeEvent.type;
    i && this.mouseEvents[r].call(void 0, i, this, e);
  }
  /**
   * Focuses the passed element from the navigation collection of DOM elements.
   */
  focusElement(e, n) {
    e && (n && (this.rovingTabIndex && n.setAttribute("tabindex", "-1"), this.focusClass && (this.removeFocusClass(n), n.removeEventListener("focus", this.setFocusClass))), this.rovingTabIndex && e.setAttribute("tabindex", String(this.tabIndex)), this.focusClass && (e.classList.add(this.focusClass), e.addEventListener("focus", this.setFocusClass)), e.focus(this.focusOptions), this.lastFocused = e);
  }
  /**
   * Set the first element tabIndex to `1` and `-1` for the rest.
   */
  initializeRovingTab(e) {
    const n = e ? this.elements[e] : this.first;
    n && (this.focusClass && n.addEventListener("focus", this.setFocusClass), n.setAttribute("tabindex", String(this.tabIndex)), this.disableTabindexForRest(n));
  }
  /**
   * Remove a focus listener.
   */
  removeFocusListener() {
    this.lastFocused && this.lastFocused.removeEventListener("focus", this.setFocusClass);
  }
  /**
   * Remove a focus class.
   */
  removeFocusClass(e) {
    this.focusClass && e.classList.remove(this.focusClass);
  }
  customElements(e) {
    return this.root.current ? Array.from(this.root.current.querySelectorAll(e.join(","))) : [];
  }
  target(e) {
    var n;
    const i = e, r = i && i.ownerDocument || null, s = r && ((n = r?.defaultView) == null ? void 0 : n.Element) || Element;
    return e instanceof s ? e : null;
  }
};
const ua = (t) => {
  const e = t.shadowRoot, n = t.contentDocument;
  return e && e.activeElement ? ua(e.activeElement) : n && n.activeElement ? ua(n.activeElement) : t;
}, At = (t) => {
  if (!(!t || !t.activeElement))
    return ua(t.activeElement);
}, ih = {
  name: "caret-alt-up",
  content: '<path d="m256 160 128 192H128z" />',
  viewBox: "0 0 512 512"
}, da = {
  name: "caret-alt-right",
  content: '<path d="M352 256 160 384V128z" />',
  viewBox: "0 0 512 512"
}, Ys = {
  name: "caret-alt-down",
  content: '<path d="M256 352 128 160h256z" />',
  viewBox: "0 0 512 512"
}, ha = {
  name: "caret-alt-left",
  content: '<path d="m160 256 192-128v256z" />',
  viewBox: "0 0 512 512"
}, Xc = {
  name: "chevron-right",
  content: '<path d="m158.059 129.941 126.06 126.06-126.06 126.061L192 416l160-159.999L192 96z" />',
  viewBox: "0 0 512 512"
}, eu = {
  name: "chevron-left",
  content: '<path d="m353.941 382.059-126.06-126.06 126.06-126.061L320 96 160 255.999 320 416z" />',
  viewBox: "0 0 512 512"
}, Ky = {
  name: "arrows-swap",
  content: '<path d="M256 160h-64v224h-32V160H96l80-128zm96 192V128h-32v224h-64l80 128 80-128z" />',
  viewBox: "0 0 512 512"
}, Gy = {
  name: "clock",
  content: '<path d="M256 128h-32v160h160v-32H256zm0-96C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m0 416c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192" />',
  viewBox: "0 0 512 512"
}, rh = {
  name: "calendar",
  content: '<path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z" />',
  viewBox: "0 0 512 512"
}, Jy = {
  name: "check",
  content: '<path d="M434.7 82.7 480 128 192 416 32 256l45.3-45.3L192 325.5z" />',
  viewBox: "0 0 512 512"
}, Qy = {
  name: "x",
  content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z" />',
  viewBox: "0 0 512 512"
};
let Xy = class {
  constructor(e = 0, n) {
    this.total = e, this.offsets = [], this.heights = [];
    let i = 0;
    for (let r = 0; r < e; r++)
      this.offsets.push(i), i += n, this.heights.push(n);
  }
  height(e) {
    return this.heights[e];
  }
  index(e) {
    for (let n = 0; n < this.offsets.length; n++) {
      if (e === this.offsets[n])
        return n;
      if (e < this.offsets[n])
        return n - 1;
    }
    return this.total - 1;
  }
  offset(e) {
    return this.offsets[e];
  }
  totalHeight() {
    const e = this.offsets[this.offsets.length - 1], n = this.heights[this.heights.length - 1];
    return e + n;
  }
  update(e, n) {
    let i = this.offsets[e];
    for (let r = e; r < this.heights.length; r++) {
      this.offsets[r] = i;
      const s = n[r - e] || this.heights[r];
      i += s, this.heights[r] = s;
    }
  }
};
const jn = {
  child: {
    container: `${x.prefix}-${g[g.prefix + "-" + ue.container]}`,
    relative: `${x.prefix}-${g[g.prefix + "-" + ue.container + "-" + g.relative]}`
  },
  childContainer: {
    container: `${x.prefix}-${g[g.child + "-" + g.prefix + "-" + ue.container]}`
  },
  appear: {
    "push-right": `${x.prefix}-${g.pushRight}-${g.appear}`,
    "push-left": `${x.prefix}-${g.pushLeft}-${g.appear}`,
    "push-down": `${x.prefix}-${g.pushDown}-${g.appear}`,
    "push-up": `${x.prefix}-${g.pushUp}-${g.appear}`,
    "expand-vertical": `${x.prefix}-${g.expandVertical}-${g.appear}`,
    "expand-horizontal": `${x.prefix}-${g.expandHorizontal}-${g.appear}`,
    fade: `${x.prefix}-${g.fade}-${g.appear}`,
    "zoom-in": `${x.prefix}-${g.zoomIn}-${g.appear}`,
    "zoom-out": `${x.prefix}-${g.zoomOut}-${g.appear}`,
    "slide-in": `${x.prefix}-${g.slideIn}-${g.appear}`,
    "slide-down": `${x.prefix}-${g.slideDown}-${g.appear}`,
    "slide-up": `${x.prefix}-${g.slideUp}-${g.appear}`,
    "slide-right": `${x.prefix}-${g.slideRight}-${g.appear}`,
    "slide-left": `${x.prefix}-${g.slideLeft}-${g.appear}`,
    "reveal-vertical": `${x.prefix}-${g.revealVertical}-${g.appear}`,
    "reveal-horizontal": `${x.prefix}-${g.revealHorizontal}-${g.appear}`
  },
  appearActive: {
    "push-right": `${x.prefix}-${g.pushRight}-${g.appear}-${g.active}`,
    "push-left": `${x.prefix}-${g.pushLeft}-${g.appear}-${g.active}`,
    "push-down": `${x.prefix}-${g.pushDown}-${g.appear}-${g.active}`,
    "push-up": `${x.prefix}-${g.pushUp}-${g.appear}-${g.active}`,
    "expand-vertical": `${x.prefix}-${g.expandVertical}-${g.appear}-${g.active}`,
    "expand-horizontal": `${x.prefix}-${g.expandHorizontal}-${g.appear}-${g.active}`,
    fade: `${x.prefix}-${g.fade}-${g.appear}-${g.active}`,
    "zoom-in": `${x.prefix}-${g.zoomIn}-${g.appear}-${g.active}`,
    "zoom-out": `${x.prefix}-${g.zoomOut}-${g.appear}-${g.active}`,
    "slide-in": `${x.prefix}-${g.slideIn}-${g.appear}-${g.active}`,
    "slide-down": `${x.prefix}-${g.slideDown}-${g.appear}-${g.active}`,
    "slide-up": `${x.prefix}-${g.slideUp}-${g.appear}-${g.active}`,
    "slide-right": `${x.prefix}-${g.slideRight}-${g.appear}-${g.active}`,
    "slide-left": `${x.prefix}-${g.slideLeft}-${g.appear}-${g.active}`,
    "reveal-vertical": `${x.prefix}-${g.revealVertical}-${g.appear}-${g.active}`,
    "reveal-horizontal": `${x.prefix}-${g.revealHorizontal}-${g.appear}-${g.active}`
  },
  enter: {
    "push-right": `${x.prefix}-${g.pushRight}-${g.enter}`,
    "push-left": `${x.prefix}-${g.pushLeft}-${g.enter}`,
    "push-down": `${x.prefix}-${g.pushDown}-${g.enter}`,
    "push-up": `${x.prefix}-${g.pushUp}-${g.enter}`,
    "expand-vertical": `${x.prefix}-${g.expandVertical}-${g.enter}`,
    "expand-horizontal": `${x.prefix}-${g.expandHorizontal}-${g.enter}`,
    fade: `${x.prefix}-${g.fade}-${g.enter}`,
    "zoom-in": `${x.prefix}-${g.zoomIn}-${g.enter}`,
    "zoom-out": `${x.prefix}-${g.zoomOut}-${g.enter}`,
    "slide-in": `${x.prefix}-${g.slideIn}-${g.enter}`,
    "slide-down": `${x.prefix}-${g.slideDown}-${g.enter}`,
    "slide-up": `${x.prefix}-${g.slideUp}-${g.enter}`,
    "slide-right": `${x.prefix}-${g.slideRight}-${g.enter}`,
    "slide-left": `${x.prefix}-${g.slideLeft}-${g.enter}`,
    "reveal-vertical": `${x.prefix}-${g.revealVertical}-${g.enter}`,
    "reveal-horizontal": `${x.prefix}-${g.revealHorizontal}-${g.enter}`
  },
  enterActive: {
    "push-right": `${x.prefix}-${g.pushRight}-${g.enter}-${g.active}`,
    "push-left": `${x.prefix}-${g.pushLeft}-${g.enter}-${g.active}`,
    "push-down": `${x.prefix}-${g.pushDown}-${g.enter}-${g.active}`,
    "push-up": `${x.prefix}-${g.pushUp}-${g.enter}-${g.active}`,
    "expand-vertical": `${x.prefix}-${g.expandVertical}-${g.enter}-${g.active}`,
    "expand-horizontal": `${x.prefix}-${g.expandHorizontal}-${g.enter}-${g.active}`,
    fade: `${x.prefix}-${g.fade}-${g.enter}-${g.active}`,
    "zoom-in": `${x.prefix}-${g.zoomIn}-${g.enter}-${g.active}`,
    "zoom-out": `${x.prefix}-${g.zoomOut}-${g.enter}-${g.active}`,
    "slide-in": `${x.prefix}-${g.slideIn}-${g.enter}-${g.active}`,
    "slide-down": `${x.prefix}-${g.slideDown}-${g.enter}-${g.active}`,
    "slide-up": `${x.prefix}-${g.slideUp}-${g.enter}-${g.active}`,
    "slide-right": `${x.prefix}-${g.slideRight}-${g.enter}-${g.active}`,
    "slide-left": `${x.prefix}-${g.slideLeft}-${g.enter}-${g.active}`,
    "reveal-vertical": `${x.prefix}-${g.revealVertical}-${g.enter}-${g.active}`,
    "reveal-horizontal": `${x.prefix}-${g.revealHorizontal}-${g.enter}-${g.active}`
  },
  exit: {
    "push-right": `${x.prefix}-${g.pushRight}-${g.exit}`,
    "push-left": `${x.prefix}-${g.pushLeft}-${g.exit}`,
    "push-down": `${x.prefix}-${g.pushDown}-${g.exit}`,
    "push-up": `${x.prefix}-${g.pushUp}-${g.exit}`,
    "expand-vertical": `${x.prefix}-${g.expandVertical}-${g.exit}`,
    "expand-horizontal": `${x.prefix}-${g.expandHorizontal}-${g.exit}`,
    fade: `${x.prefix}-${g.fade}-${g.exit}`,
    "zoom-in": `${x.prefix}-${g.zoomIn}-${g.exit}`,
    "zoom-out": `${x.prefix}-${g.zoomOut}-${g.exit}`,
    "slide-in": `${x.prefix}-${g.slideIn}-${g.exit}`,
    "slide-down": `${x.prefix}-${g.slideDown}-${g.exit}`,
    "slide-up": `${x.prefix}-${g.slideUp}-${g.exit}`,
    "slide-right": `${x.prefix}-${g.slideRight}-${g.exit}`,
    "slide-left": `${x.prefix}-${g.slideLeft}-${g.exit}`,
    "reveal-vertical": `${x.prefix}-${g.revealVertical}-${g.exit}`,
    "reveal-horizontal": `${x.prefix}-${g.revealHorizontal}-${g.exit}`
  },
  exitActive: {
    "push-right": `${x.prefix}-${g.pushRight}-${g.exit}-${g.active}`,
    "push-left": `${x.prefix}-${g.pushLeft}-${g.exit}-${g.active}`,
    "push-down": `${x.prefix}-${g.pushDown}-${g.exit}-${g.active}`,
    "push-up": `${x.prefix}-${g.pushUp}-${g.exit}-${g.active}`,
    "expand-vertical": `${x.prefix}-${g.expandVertical}-${g.exit}-${g.active}`,
    "expand-horizontal": `${x.prefix}-${g.expandHorizontal}-${g.exit}-${g.active}`,
    fade: `${x.prefix}-${g.fade}-${g.exit}-${g.active}`,
    "zoom-in": `${x.prefix}-${g.zoomIn}-${g.exit}-${g.active}`,
    "zoom-out": `${x.prefix}-${g.zoomOut}-${g.exit}-${g.active}`,
    "slide-in": `${x.prefix}-${g.slideIn}-${g.exit}-${g.active}`,
    "slide-down": `${x.prefix}-${g.slideDown}-${g.exit}-${g.active}`,
    "slide-up": `${x.prefix}-${g.slideUp}-${g.exit}-${g.active}`,
    "slide-right": `${x.prefix}-${g.slideRight}-${g.exit}-${g.active}`,
    "slide-left": `${x.prefix}-${g.slideLeft}-${g.exit}-${g.active}`,
    "reveal-vertical": `${x.prefix}-${g.revealVertical}-${g.exit}-${g.active}`,
    "reveal-horizontal": `${x.prefix}-${g.revealHorizontal}-${g.exit}-${g.active}`
  }
}, Bn = {
  child: (t) => {
    const { c: e = jn } = t;
    return {
      [e.child.container]: !0,
      [e.child.relative]: !0
    };
  },
  childContainer: (t) => {
    const { c: e = jn } = t;
    return {
      [e.childContainer.container]: !0
    };
  },
  appear: (t) => {
    const { c: e = jn, transitionName: n } = t;
    return {
      [`${e.appear[n]}`]: e.appear[n],
      [`${n}-${g.appear}`]: !e.appear[n]
    };
  },
  appearActive: (t) => {
    const { c: e = jn, transitionName: n } = t;
    return {
      [`${e.appearActive[n]}`]: e.appearActive[n],
      [`${n}-${g.appear}-${g.active}`]: !e.appearActive[n]
    };
  },
  enter: (t) => {
    const { c: e = jn, transitionName: n } = t;
    return {
      [`${e.enter[n]}`]: e.enter[n],
      [`${n}-${g.enter}`]: !e.enter[n]
    };
  },
  enterActive: (t) => {
    const { c: e = jn, transitionName: n } = t;
    return {
      [`${e.enterActive[n]}`]: e.enterActive[n],
      [`${n}-${g.enter}-${g.active}`]: !e.enterActive[n]
    };
  },
  exit: (t) => {
    const { c: e = jn, transitionName: n } = t;
    return {
      [`${e.exit[n]}`]: e.exit[n],
      [`${n}-${g.exit}`]: !e.exit[n]
    };
  },
  exitActive: (t) => {
    const { c: e = jn, transitionName: n } = t;
    return {
      [`${e.exitActive[n]}`]: e.exitActive[n],
      [`${n}-${g.exit}-${g.active}`]: !e.exitActive[n]
    };
  }
};
const xe = (t, e) => (n) => {
  const { c: i = t } = n;
  return {
    [i[e] || ""]: !0
  };
};
const Co = {
  wrapper: {
    main: ee,
    size: {
      small: `${ee}-${ze.small}`,
      medium: `${ee}-${ze.medium}`,
      large: `${ee}-${ze.large}`
    },
    fillMode: {
      solid: `${ee}-${te.solid}`,
      outline: `${ee}-${te.outline}`,
      flat: `${ee}-${te.flat}`,
      link: `${ee}-${te.link}`,
      clear: `${ee}-${te.clear}`
    },
    themeColor: {
      base: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.base}`,
          outline: `${ee}-${te.outline}-${ie.base}`,
          flat: `${ee}-${te.flat}-${ie.base}`,
          link: `${ee}-${te.link}-${ie.base}`,
          clear: `${ee}-${te.clear}-${ie.base}`
        }
      },
      primary: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.primary}`,
          outline: `${ee}-${te.outline}-${ie.primary}`,
          flat: `${ee}-${te.flat}-${ie.primary}`,
          link: `${ee}-${te.link}-${ie.primary}`,
          clear: `${ee}-${te.clear}-${ie.primary}`
        }
      },
      secondary: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.secondary}`,
          outline: `${ee}-${te.outline}-${ie.secondary}`,
          flat: `${ee}-${te.flat}-${ie.secondary}`,
          link: `${ee}-${te.link}-${ie.secondary}`,
          clear: `${ee}-${te.clear}-${ie.secondary}`
        }
      },
      tertiary: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.tertiary}`,
          outline: `${ee}-${te.outline}-${ie.tertiary}`,
          flat: `${ee}-${te.flat}-${ie.tertiary}`,
          link: `${ee}-${te.link}-${ie.tertiary}`,
          clear: `${ee}-${te.clear}-${ie.tertiary}`
        }
      },
      info: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.info}`,
          outline: `${ee}-${te.outline}-${ie.info}`,
          flat: `${ee}-${te.flat}-${ie.info}`,
          link: `${ee}-${te.link}-${ie.info}`,
          clear: `${ee}-${te.clear}-${ie.info}`
        }
      },
      success: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.success}`,
          outline: `${ee}-${te.outline}-${ie.success}`,
          flat: `${ee}-${te.flat}-${ie.success}`,
          link: `${ee}-${te.link}-${ie.success}`,
          clear: `${ee}-${te.clear}-${ie.success}`
        }
      },
      warning: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.warning}`,
          outline: `${ee}-${te.outline}-${ie.warning}`,
          flat: `${ee}-${te.flat}-${ie.warning}`,
          link: `${ee}-${te.link}-${ie.warning}`,
          clear: `${ee}-${te.clear}-${ie.warning}`
        }
      },
      error: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.error}`,
          outline: `${ee}-${te.outline}-${ie.error}`,
          flat: `${ee}-${te.flat}-${ie.error}`,
          link: `${ee}-${te.link}-${ie.error}`,
          clear: `${ee}-${te.clear}-${ie.error}`
        }
      },
      dark: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.dark}`,
          outline: `${ee}-${te.outline}-${ie.dark}`,
          flat: `${ee}-${te.flat}-${ie.dark}`,
          link: `${ee}-${te.link}-${ie.dark}`,
          clear: `${ee}-${te.clear}-${ie.dark}`
        }
      },
      light: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.light}`,
          outline: `${ee}-${te.outline}-${ie.light}`,
          flat: `${ee}-${te.flat}-${ie.light}`,
          link: `${ee}-${te.link}-${ie.light}`,
          clear: `${ee}-${te.clear}-${ie.light}`
        }
      },
      inverse: {
        fillMode: {
          solid: `${ee}-${te.solid}-${ie.inverse}`,
          outline: `${ee}-${te.outline}-${ie.inverse}`,
          flat: `${ee}-${te.flat}-${ie.inverse}`,
          link: `${ee}-${te.link}-${ie.inverse}`,
          clear: `${ee}-${te.clear}-${ie.inverse}`
        }
      }
    },
    rounded: {
      small: `${x.prefix}-${x.rounded}-${sn.small}`,
      medium: `${x.prefix}-${x.rounded}-${sn.medium}`,
      large: `${x.prefix}-${x.rounded}-${sn.large}`
    },
    iconButton: `${x.prefix}-${Ze.icon}-${Ze.button}`,
    disabled: `${x.prefix}-${fe.disabled}`,
    selected: `${x.prefix}-${fe.selected}`,
    isRtl: `${x.prefix}-${x.rtl}`
  },
  text: `${ee}-${Ze.text}`,
  icon: `${ee}-${Ze.icon}`
}, Zn = {
  wrapper: (t) => {
    const { isRtl: e, selected: n, disabled: i, size: r, fillMode: s, rounded: o, themeColor: a, iconButton: u, c: d = Co } = t, f = d.wrapper, y = f.themeColor[a], c = y.fillMode[s];
    return {
      [f.main]: !0,
      [f.size[r]]: f.size[r],
      [`${ee}-${r}`]: r && !f.size[r],
      [f.fillMode[s]]: f.fillMode[s],
      [c]: c,
      [f.rounded[o]]: f.rounded[o],
      [`${x.prefix}-${x.rounded}-${o}`]: o && !f.rounded[o],
      [f.iconButton]: u,
      [y.disabled]: i && y && y.disabled,
      [y.selected]: n && y && y.selected,
      [f.disabled]: i,
      [f.selected]: n,
      [f.isRtl]: e
    };
  },
  text: (t) => {
    const { c: e = Co } = t;
    return {
      [e.text]: !0
    };
  },
  icon: (t) => {
    const { c: e = Co } = t;
    return {
      [e.icon]: !0
    };
  }
}, tu = {
  wrapper: {
    main: `${ee}-${ue.group}`,
    stretched: `${ee}-${ue.group}-${fe.stretched}`,
    disabled: `${x.prefix}-${fe.disabled}`
  },
  position: {
    start: `${x.prefix}-${ue.group}-${Xe.start}`,
    end: `${x.prefix}-${ue.group}-${Xe.end}`
  }
}, nu = {
  wrapper: (t) => {
    const { stretched: e, disabled: n, c: i = tu } = t, r = i.wrapper;
    return {
      [r.main]: !0,
      [r.stretched]: e,
      [r.disabled]: n
    };
  },
  position: (t) => {
    const { start: e, end: n, c: i = tu } = t, r = i.position;
    return {
      [r.start]: e,
      [r.end]: n
    };
  }
}, xi = {
  wrapper: {
    main: `${In}-${Ze.button}`,
    focus: `${x.prefix}-${fe.focus}`,
    disabled: `${x.prefix}-${fe.disabled}`
  },
  ul: {
    group: `${In}-${ue.group}`,
    size: {
      small: `${In}-${ue.group}-${ze.small}`,
      medium: `${In}-${ue.group}-${ze.medium}`,
      large: `${In}-${ue.group}-${ze.large}`
    }
  },
  li: {
    item: `${x.prefix}-${ue.item}`,
    focus: `${x.prefix}-${fe.focus}`
  },
  item: `${In}-${ue.item}`,
  link: {
    main: `${x.prefix}-${Ze.link}`,
    link: `${In}-${Ze.link}`,
    selected: `${x.prefix}-${fe.selected}`,
    disabled: `${x.prefix}-${fe.disabled}`
  },
  popup: `${In}-${ue.popup}`
}, zi = {
  wrapper: (t) => {
    const { focused: e, disabled: n, c: i = xi } = t, r = i.wrapper;
    return {
      [r.main]: !0,
      [r.focus]: e,
      [r.disabled]: n
    };
  },
  ul: (t) => {
    const { size: e, c: n = xi } = t, i = n.ul;
    return {
      [i.group]: !0,
      [i.size[e]]: i.size[e],
      [`${In}-${ue.group}-${e}`]: e && !i.size[e]
    };
  },
  li: (t) => {
    const { focused: e, c: n = xi } = t, i = n.li;
    return {
      [i.item]: !0,
      [i.focus]: e
    };
  },
  item: xe(xi, "item"),
  link: (t) => {
    const { selected: e, disabled: n, c: i = xi } = t, r = i.link;
    return {
      [r.main]: !0,
      [r.link]: !0,
      [r.selected]: e,
      [r.disabled]: n
    };
  },
  popup: xe(xi, "popup")
};
const bt = {
  footer: {
    main: `${x.prefix}-${ge.time}-${Ze.footer}`,
    actions: `${x.prefix}-${ue.actions}`,
    stretched: `${x.prefix}-${ue.actions}-${fe.stretched}`,
    horizontal: `${x.prefix}-${ue.actions}-${ca.horizontal}`
  },
  cancel: `${x.prefix}-${ge.time}-${qi.cancel}`,
  accept: `${x.prefix}-${ge.time}-${qi.accept}`,
  part: {
    main: `${x.prefix}-${ge.time}-${ue.part}`,
    disabled: `${x.prefix}-${fe.disabled}`
  },
  header: `${x.prefix}-${ge.time}-${Ze.header}`,
  now: `${x.prefix}-${ge.time}-${ge.now}`,
  listContainer: `${x.prefix}-${ge.time}-${ue.list}-${ue.container}`,
  highlight: `${x.prefix}-${ge.time}-${fe.highlight}`,
  listWrapper: {
    main: `${x.prefix}-${ge.time}-${ue.list}-${ue.wrapper}`,
    focused: `${x.prefix}-${fe.focus}`
  },
  list: `${x.prefix}-${ge.time}-${ue.list}`,
  container: {
    main: `${x.prefix}-${ge.time}-${ue.container}`,
    scrollable: `${x.prefix}-${fe.scrollable}`,
    content: `${x.prefix}-${ue.content}`
  },
  containerSelector: `${x.prefix}-${ge.time}-${ue.container}`,
  separator: `${x.prefix}-${ge.time}-${ue.separator}`,
  ul: `${x.prefix}-${x.reset}`,
  li: `${x.prefix}-${ue.item}`,
  title: `${x.prefix}-${Ze.title}`,
  scrollablePlaceholder: `${x.prefix}-${fe.scrollable}-${ue.placeholder}`
}, Ne = {
  footer: (t) => {
    const { c: e = bt } = t, n = e.footer;
    return {
      [n.main]: !0,
      [n.actions]: !0,
      [n.stretched]: !0,
      [n.horizontal]: !0
    };
  },
  cancel: xe(bt, "cancel"),
  accept: xe(bt, "accept"),
  part: (t) => {
    const { c: e = bt, mobileMode: n, disabled: i } = t, r = e.part;
    return {
      [r.main]: n,
      [r.disabled]: i
    };
  },
  header: xe(bt, "header"),
  now: xe(bt, "now"),
  listContainer: xe(bt, "listContainer"),
  highlight: xe(bt, "highlight"),
  listWrapper: (t) => {
    const { c: e = bt, focused: n } = t, i = e.listWrapper;
    return {
      [i.main]: !0,
      [i.focused]: n
    };
  },
  list: xe(bt, "list"),
  container: (t) => {
    const { c: e = bt, content: n, scrollable: i } = t, r = e.container;
    return {
      [r.main]: !0,
      [r.content]: n,
      [r.scrollable]: i
    };
  },
  containerSelector: xe(bt, "containerSelector"),
  separator: xe(bt, "separator"),
  ul: xe(bt, "ul"),
  li: xe(bt, "li"),
  title: xe(bt, "title"),
  scrollablePlaceholder: xe(bt, "scrollablePlaceholder")
}, Kr = {
  wrapper: {
    main: `${x.prefix}-${Tt.timepicker}`,
    input: `${_e}`,
    size: {
      small: `${_e}-${ze.small}`,
      medium: `${_e}-${ze.medium}`,
      large: `${_e}-${ze.large}`
    },
    fillMode: {
      solid: `${_e}-${te.solid}`,
      outline: `${_e}-${te.outline}`,
      flat: `${_e}-${te.flat}`
    },
    rounded: {
      small: `${x.prefix}-${x.rounded}-${sn.small}`,
      medium: `${x.prefix}-${x.rounded}-${sn.medium}`,
      large: `${x.prefix}-${x.rounded}-${sn.large}`
    },
    disabled: `${x.prefix}-${fe.disabled}`,
    required: `${x.prefix}-${fe.required}`,
    invalid: `${x.prefix}-${fe.invalid}`
  },
  inputButton: `${_e}-${Ze.button}`,
  popup: {
    main: `${x.prefix}-${Tt.timepicker}-${ue.popup}`,
    container: `${x.prefix}-${ue.list}-${ue.container}`
  },
  timeSelector: {
    main: `${x.prefix}-${ge.timeselector}`,
    size: {
      medium: `${x.prefix}-${ge.timeselector}-${ze.medium}`,
      large: `${x.prefix}-${ge.timeselector}-${ze.large}`
    },
    disabled: `${x.prefix}-${fe.disabled}`,
    reset: `${x.prefix}-${x.reset}`
  }
}, ls = {
  wrapper: (t) => {
    const { c: e = Kr, size: n, fillMode: i, rounded: r, disabled: s, required: o, invalid: a } = t, u = e.wrapper;
    return {
      [u.main]: !0,
      [u.input]: !0,
      [u.size[n]]: u.size[n],
      [`${_e}-${n}`]: n && !u.size[n],
      [u.fillMode[i]]: u.fillMode[i],
      [u.rounded[r]]: u.rounded[r],
      [`${x.prefix}-${x.rounded}-${r}`]: r && !u.rounded[r],
      [u.disabled]: s,
      [u.invalid]: a,
      [u.required]: o
    };
  },
  inputButton: xe(Kr, "inputButton"),
  popup: (t) => {
    const { c: e = Kr } = t, n = e.popup;
    return {
      [n.main]: !0,
      [n.container]: !0
    };
  },
  timeSelector: (t) => {
    const { c: e = Kr, disabled: n, mobileMode: i } = t, r = e.timeSelector;
    return {
      [r.main]: !0,
      [r.size.large]: i,
      [r.reset]: i,
      [r.size.medium]: !i,
      [r.disabled]: n
    };
  }
}, Je = {
  wrapper: {
    main: `${We}`,
    infinite: `${We}-${x.infinite}`,
    disabled: `${x.prefix}-${fe.disabled}`,
    weekNumber: `${x.prefix}-${ge.week}-${ge.number}`,
    size: {
      medium: `${We}-${ze.medium}`,
      large: `${We}-${ze.large}`
    }
  },
  view: {
    main: `${We}-${ue.view}`,
    vertical: `${x.prefix}-${Gc.vstack}`,
    month: `${We}-${ge.month}${ue.view}`,
    year: `${We}-${ge.year}${ue.view}`,
    decade: `${We}-${ge.decade}${ue.view}`,
    century: `${We}-${ge.century}${ue.view}`
  },
  navigation: `${We}-${ge.navigation}`,
  navigationHighlight: `${We}-${ge.navigation}-${fe.highlight}`,
  table: {
    main: `${We}-${Ze.table}`,
    weekdays: `${We}-${ge.weekdays}`
  },
  thead: `${We}-${Ze.thead}`,
  tr: `${We}-${Ze.tr}`,
  th: `${We}-${Ze.th}`,
  caption: `${We}-${Ze.caption}`,
  tbody: `${We}-${Ze.tbody}`,
  ul: `${x.prefix}-${x.reset}`,
  li: "",
  td: {
    main: `${We}-${Ze.td}`,
    rangeStart: `${x.prefix}-${ge.range}-${Xe.start}`,
    rangeEnd: `${x.prefix}-${ge.range}-${Xe.end}`,
    rangeMid: `${x.prefix}-${ge.range}-${Xe.mid}`,
    rangeSplitEnd: `${x.prefix}-${ge.range}-${qi.split}-${Xe.end}`,
    rangeSplitStart: `${x.prefix}-${ge.range}-${qi.split}-${Xe.start}`,
    active: `${x.prefix}-${fe.active}`,
    focused: `${x.prefix}-${x.state}-${fe.pending}-${fe.focus}`,
    selected: `${x.prefix}-${fe.selected}`,
    today: `${x.prefix}-${ge.today}`,
    weekend: `${x.prefix}-${ge.weekend}`,
    disabled: `${x.prefix}-${fe.disabled}`,
    isOtherMonth: `${x.prefix}-${ge.other}-${ge.month}`,
    isEmpty: `${x.prefix}-${fe.empty}`,
    isWeek: `${x.prefix}-${fe.alt}`
  },
  title: `${We}-${Ze.title}`,
  header: {
    main: `${We}-${Ze.header}`,
    vertical: `${x.prefix}-${Gc.hstack}`
  },
  spacer: `${x.prefix}-${ue.spacer}`,
  nav: `${We}-${ue.nav}`,
  today: {
    main: `${We}-${ue.nav}-${ge.today}`,
    disabled: `${x.prefix}-${fe.disabled}`
  },
  scrollable: {
    main: `${x.prefix}-${fe.scrollable}`,
    content: `${x.prefix}-${ue.content}`,
    horizontal: `${x.prefix}-${fe.scrollable}-${ca.horizontal}`
  },
  scrollableSelector: `${x.prefix}-${fe.scrollable}`,
  scrollablePlaceholder: {
    main: `${x.prefix}-${fe.scrollable}-${ue.placeholder}`,
    horizontal: `${x.prefix}-${fe.scrollable}-${ca.horizontal}-${ue.placeholder}`
  },
  link: `${x.prefix}-${Ze.link}`,
  navigationMarker: `${We}-${ge.navigation}-${ge.marker}`
}, he = {
  wrapper: (t) => {
    const { c: e = Je, disabled: n, weekNumber: i, mobileMode: r } = t, s = e.wrapper;
    return {
      [s.main]: !0,
      [s.infinite]: !0,
      [s.disabled]: n,
      [s.weekNumber]: i,
      [s.size.large]: r,
      [s.size.medium]: !r
    };
  },
  view: (t) => {
    const { c: e = Je, month: n, year: i, decade: r, century: s } = t, o = e.view;
    return {
      [o.main]: !0,
      [o.vertical]: !0,
      [o.month]: n,
      [o.year]: i,
      [o.decade]: r,
      [o.century]: s
    };
  },
  navigation: xe(Je, "navigation"),
  navigationHighlight: xe(Je, "navigationHighlight"),
  table: (t) => {
    const { c: e = Je, weekdays: n } = t, i = e.table;
    return {
      [i.main]: !0,
      [i.weekdays]: n
    };
  },
  thead: xe(Je, "thead"),
  tr: xe(Je, "tr"),
  th: xe(Je, "th"),
  tbody: xe(Je, "tbody"),
  title: xe(Je, "title"),
  header: (t) => {
    const { c: e = Je, vertical: n } = t, i = e.header;
    return {
      [i.main]: !0,
      [i.vertical]: n
    };
  },
  today: (t) => {
    const { c: e = Je, disabled: n } = t, i = e.today;
    return {
      [i.main]: !0,
      [i.disabled]: n
    };
  },
  spacer: xe(Je, "spacer"),
  nav: xe(Je, "nav"),
  caption: xe(Je, "caption"),
  ul: xe(Je, "ul"),
  li: xe(Je, "li"),
  td: (t) => {
    const {
      c: e = Je,
      rangeStart: n,
      rangeEnd: i,
      rangeMid: r,
      rangeSplitEnd: s,
      rangeSplitStart: o,
      active: a,
      focused: u,
      selected: d,
      today: f,
      weekend: y,
      disabled: c,
      isOtherMonth: m,
      isEmpty: S,
      isWeek: k
    } = t, C = e.td;
    return k ? {
      [C.main]: !0,
      [C.isWeek]: k
    } : S ? {
      [C.main]: !0,
      [C.isEmpty]: S
    } : {
      [C.main]: !0,
      [C.rangeStart]: n,
      [C.rangeEnd]: i,
      [C.rangeMid]: r,
      [C.rangeSplitEnd]: s,
      [C.rangeSplitStart]: o,
      [C.active]: a,
      [C.focused]: u,
      [C.selected]: d,
      [C.today]: f,
      [C.weekend]: y,
      [C.disabled]: c,
      [C.isOtherMonth]: m
    };
  },
  scrollable: (t) => {
    const { c: e = Je, horizontal: n } = t, i = e.scrollable;
    return {
      [i.main]: !0,
      [i.content]: !0,
      [i.horizontal]: n
    };
  },
  scrollableSelector: xe(Je, "scrollableSelector"),
  scrollablePlaceholder: (t) => {
    const { c: e = Je, horizontal: n } = t, i = e.scrollablePlaceholder;
    return {
      [i.main]: !0,
      [i.horizontal]: n
    };
  },
  link: xe(Je, "link"),
  navigationMarker: (t) => {
    const { c: e = Je, isRangeStart: n } = t;
    return {
      [e.navigationMarker]: n
    };
  }
}, wi = {
  wrapper: {
    main: `${x.prefix}-${Tt.dateinput}`,
    input: `${_e}`,
    size: {
      small: `${_e}-${ze.small}`,
      medium: `${_e}-${ze.medium}`,
      large: `${_e}-${ze.large}`
    },
    fillMode: {
      solid: `${_e}-${te.solid}`,
      outline: `${_e}-${te.outline}`,
      flat: `${_e}-${te.flat}`
    },
    rounded: {
      small: `${x.prefix}-${x.rounded}-${sn.small}`,
      medium: `${x.prefix}-${x.rounded}-${sn.medium}`,
      large: `${x.prefix}-${x.rounded}-${sn.large}`
    },
    disabled: `${x.prefix}-${fe.disabled}`,
    required: `${x.prefix}-${fe.required}`,
    invalid: `${x.prefix}-${fe.invalid}`
  },
  inputInner: `${_e}-${Ii.inner}`,
  inputSpinner: {
    main: `${_e}-${Ii.spinner}`,
    button: `${x.prefix}-${Ii.spin}-${Ze.button}`
  },
  spinnerIncrease: `${x.prefix}-${Ii.spinner}-${qi.increase}`,
  spinnerDecrease: `${x.prefix}-${Ii.spinner}-${qi.decrease}`,
  clearButton: `${x.prefix}-${x.clear}-${x.value}`
}, Mi = {
  wrapper: (t) => {
    const { c: e = wi, size: n, fillMode: i, rounded: r, disabled: s, required: o, invalid: a } = t, u = e.wrapper;
    return {
      [u.main]: !0,
      [u.input]: !0,
      [u.size[n]]: u.size[n],
      [`${_e}-${n}`]: n && !u.size[n],
      [u.fillMode[i]]: u.fillMode[i],
      [u.rounded[r]]: u.rounded[r],
      [`${x.prefix}-${x.rounded}-${r}`]: r && !u.rounded[r],
      [u.disabled]: s,
      [u.invalid]: a,
      [u.required]: o
    };
  },
  inputInner: xe(wi, "inputInner"),
  inputSpinner: (t) => {
    const { c: e = wi } = t, n = e.inputSpinner;
    return {
      [n.main]: !0,
      [n.button]: !0
    };
  },
  spinnerIncrease: xe(wi, "spinnerIncrease"),
  spinnerDecrease: xe(wi, "spinnerDecrease"),
  clearButton: xe(wi, "clearButton")
}, yn = {
  wrapper: {
    main: `${x.prefix}-${Tt.datetimepicker}`,
    input: `${_e}`,
    size: {
      small: `${_e}-${ze.small}`,
      medium: `${_e}-${ze.medium}`,
      large: `${_e}-${ze.large}`
    },
    fillMode: {
      solid: `${_e}-${te.solid}`,
      outline: `${_e}-${te.outline}`,
      flat: `${_e}-${te.flat}`
    },
    rounded: {
      small: `${x.prefix}-${x.rounded}-${sn.small}`,
      medium: `${x.prefix}-${x.rounded}-${sn.medium}`,
      large: `${x.prefix}-${x.rounded}-${sn.large}`
    },
    disabled: `${x.prefix}-${fe.disabled}`,
    required: `${x.prefix}-${fe.required}`,
    invalid: `${x.prefix}-${fe.invalid}`
  },
  inputButton: `${_e}-${Ze.button}`,
  popup: {
    main: `${x.prefix}-${Tt.datetime}-${ue.container}`,
    reset: `${x.prefix}-${x.reset}`
  },
  wrap: {
    main: `${x.prefix}-${Tt.datetime}-${ue.wrap}`,
    date: `${x.prefix}-${ge.date}-${ue.tab}`,
    time: `${x.prefix}-${ge.time}-${ue.tab}`,
    disabled: `${x.prefix}-${fe.disabled}`
  },
  timeFooter: {
    main: `${x.prefix}-${Tt.datetime}-${Ze.footer}`,
    actions: `${x.prefix}-${ue.actions}`,
    stretched: `${x.prefix}-${ue.actions}-${fe.stretched}`
  },
  buttonGroup: `${x.prefix}-${Tt.datetime}-${Tt.buttongroup}`,
  selector: `${x.prefix}-${Tt.datetime}-${ge.selector}`,
  calendarWrap: `${x.prefix}-${Tt.datetime}-${We}-${ue.wrap}`,
  timeWrap: `${x.prefix}-${Tt.datetime}-${ge.time}-${ue.wrap}`,
  timeSelector: {
    main: `${x.prefix}-${ge.timeselector}`,
    size: {
      medium: `${x.prefix}-${ge.timeselector}-${ze.medium}`,
      large: `${x.prefix}-${ge.timeselector}-${ze.large}`
    },
    disabled: `${x.prefix}-${fe.disabled}`,
    reset: `${x.prefix}-${x.reset}`
  }
}, xn = {
  wrapper: (t) => {
    const { c: e = yn, size: n, fillMode: i, rounded: r, disabled: s, required: o, invalid: a } = t, u = e.wrapper;
    return {
      [u.main]: !0,
      [u.input]: !0,
      [u.size[n]]: u.size[n],
      [`${_e}-${n}`]: n && !u.size[n],
      [u.fillMode[i]]: u.fillMode[i],
      [u.rounded[r]]: u.rounded[r],
      [`${x.prefix}-${x.rounded}-${r}`]: r && !u.rounded[r],
      [u.disabled]: s,
      [u.invalid]: a,
      [u.required]: o
    };
  },
  inputButton: xe(yn, "inputButton"),
  popup: (t) => {
    const { c: e = yn } = t, n = e.popup;
    return {
      [n.main]: !0,
      [n.reset]: !0
    };
  },
  wrap: (t) => {
    const { c: e = yn, disabled: n, date: i, time: r } = t, s = e.wrap;
    return {
      [s.main]: !0,
      [s.time]: r,
      [s.date]: i,
      [s.disabled]: n
    };
  },
  timeFooter: (t) => {
    const { c: e = yn } = t, n = e.timeFooter;
    return {
      [n.main]: !0,
      [n.actions]: !0,
      [n.stretched]: !0
    };
  },
  buttonGroup: xe(yn, "buttonGroup"),
  selector: xe(yn, "selector"),
  calendarWrap: xe(yn, "calendarWrap"),
  timeWrap: xe(yn, "timeWrap"),
  timeSelector: (t) => {
    const { c: e = yn, mobileMode: n } = t, i = e.timeSelector;
    return {
      [i.main]: n,
      [i.size.large]: n,
      [i.reset]: n
    };
  }
};
const iu = `${x.prefix}-${dr.floatingLabel}`, ru = {
  wrapper: {
    main: `${iu}-${dr.container}`,
    focused: `${x.prefix}-${fe.focus}`,
    empty: `${x.prefix}-${fe.empty}`,
    notEmpty: "",
    disabled: `${x.prefix}-${dr.text}-${fe.disabled}`,
    isRtl: `${x.prefix}-${x.rtl}`
  },
  label: {
    main: iu,
    focused: "",
    empty: "",
    notEmpty: "",
    invalid: `${x.prefix}-${dr.text}-${ie.error}`,
    disabled: `${x.prefix}-${dr.text}-${fe.disabled}`
  }
}, su = {
  wrapper: (t) => {
    const { focused: e, empty: n, notEmpty: i, disabled: r, isRtl: s, c: o = ru } = t, a = o.wrapper;
    return {
      [a?.main]: !0,
      [a?.focused]: e,
      [a?.empty]: n,
      [a?.notEmpty]: i,
      [a?.disabled]: r,
      [a?.isRtl]: s
    };
  },
  label: (t) => {
    const { focused: e, empty: n, notEmpty: i, invalid: r, disabled: s, c: o = ru } = t, a = o.label;
    return {
      [a?.main]: !0,
      [a?.focused]: e,
      [a?.empty]: n,
      [a?.notEmpty]: i,
      [a?.invalid]: r,
      [a?.disabled]: s
    };
  }
};
const Nt = {
  animationContainer: `${x.prefix}-${g.prefix}-${ue.container}`,
  animationContainerShown: `${x.prefix}-${g.prefix}-${ue.container}-${fe.shown}`,
  animationChild: `${x.prefix}-${g.child}-${g.prefix}-${ue.container}`,
  popup: `${x.prefix}-${Yy.prefix}`,
  slide: {
    up: {
      enter: `${x.prefix}-${g.slide}-${Xe.up}-${g.enter}`,
      exit: `${x.prefix}-${g.slide}-${Xe.up}-${g.exit}`
    },
    down: {
      enter: `${x.prefix}-${g.slide}-${Xe.down}-${g.enter}`,
      exit: `${x.prefix}-${g.slide}-${Xe.down}-${g.exit}`
    },
    left: {
      enter: `${x.prefix}-${g.slide}-${Xe.left}-${g.enter}`,
      exit: `${x.prefix}-${g.slide}-${Xe.left}-${g.exit}`
    },
    right: {
      enter: `${x.prefix}-${g.slide}-${Xe.right}-${g.enter}`,
      exit: `${x.prefix}-${g.slide}-${Xe.right}-${g.exit}`
    }
  },
  slideActive: {
    up: {
      enter: `${x.prefix}-${g.slide}-${Xe.up}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.slide}-${Xe.up}-${g.exit}-${g.active}`
    },
    down: {
      enter: `${x.prefix}-${g.slide}-${Xe.down}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.slide}-${Xe.down}-${g.exit}-${g.active}`
    },
    left: {
      enter: `${x.prefix}-${g.slide}-${Xe.left}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.slide}-${Xe.left}-${g.exit}-${g.active}`
    },
    right: {
      enter: `${x.prefix}-${g.slide}-${Xe.right}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.slide}-${Xe.right}-${g.exit}-${g.active}`
    }
  },
  zoom: {
    in: {
      enter: `${x.prefix}-${g.zoomIn}-${g.enter}`,
      exit: `${x.prefix}-${g.zoomIn}-${g.exit}`
    },
    out: {
      enter: `${x.prefix}-${g.zoomIn}-${g.enter}`,
      exit: `${x.prefix}-${g.zoomOut}-${g.exit}`
    }
  },
  zoomActive: {
    in: {
      enter: `${x.prefix}-${g.zoomIn}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.zoomIn}-${g.exit}-${g.active}`
    },
    out: {
      enter: `${x.prefix}-${g.zoomOut}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.zoomOut}-${g.exit}-${g.active}`
    }
  },
  fade: {
    enter: `${x.prefix}-${g.fade}-${g.enter}`,
    exit: `${x.prefix}-${g.fade}-${g.exit}`
  },
  fadeActive: {
    enter: `${x.prefix}-${g.fade}-${g.enter}-${g.active}`,
    exit: `${x.prefix}-${g.fade}-${g.exit}-${g.active}`
  },
  push: {
    up: {
      enter: `${x.prefix}-${g.pushUp}-${g.enter}`,
      exit: `${x.prefix}-${g.pushUp}-${g.exit}`
    },
    down: {
      enter: `${x.prefix}-${g.pushDown}-${g.enter}`,
      exit: `${x.prefix}-${g.pushDown}-${g.exit}`
    },
    left: {
      enter: `${x.prefix}-${g.pushLeft}-${g.enter}`,
      exit: `${x.prefix}-${g.pushLeft}-${g.exit}`
    },
    right: {
      enter: `${x.prefix}-${g.pushRight}-${g.enter}`,
      exit: `${x.prefix}-${g.pushRight}-${g.exit}`
    }
  },
  pushActive: {
    up: {
      enter: `${x.prefix}-${g.pushUp}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.pushUp}-${g.exit}-${g.active}`
    },
    down: {
      enter: `${x.prefix}-${g.pushDown}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.pushDown}-${g.exit}-${g.active}`
    },
    left: {
      enter: `${x.prefix}-${g.pushLeft}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.pushLeft}-${g.exit}-${g.active}`
    },
    right: {
      enter: `${x.prefix}-${g.pushRight}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.pushRight}-${g.exit}-${g.active}`
    }
  },
  expand: {
    horizontal: {
      enter: `${x.prefix}-${g.expandHorizontal}-${g.enter}`,
      exit: `${x.prefix}-${g.expandHorizontal}-${g.exit}`
    },
    vertical: {
      enter: `${x.prefix}-${g.expandVertical}-${g.enter}`,
      exit: `${x.prefix}-${g.expandVertical}-${g.exit}`
    }
  },
  expandActive: {
    horizontal: {
      enter: `${x.prefix}-${g.expandHorizontal}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.expandHorizontal}-${g.exit}-${g.active}`
    },
    vertical: {
      enter: `${x.prefix}-${g.expandVertical}-${g.enter}-${g.active}`,
      exit: `${x.prefix}-${g.expandVertical}-${g.exit}-${g.active}`
    }
  }
}, si = {
  animationContainer: (t) => {
    const { c: e = Nt } = t;
    return {
      [e?.animationContainer]: !0
    };
  },
  animationContainerShown: (t) => {
    const { c: e = Nt } = t;
    return {
      [e?.animationContainerShown]: !0
    };
  },
  animationChild: (t) => {
    const { c: e = Nt } = t;
    return {
      [e?.animationChild]: !0
    };
  },
  popup: (t) => {
    const { c: e = Nt } = t;
    return {
      [e?.popup]: !0
    };
  },
  slide: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.slide) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.slide) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  },
  slideActive: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.slideActive) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.slideActive) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  },
  zoom: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.zoom) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.zoom) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  },
  zoomActive: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.zoomActive) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.zoomActive) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  },
  fade: (t) => {
    var e, n;
    const { type: i, c: r = Nt } = t;
    return {
      [(e = r?.fade) == null ? void 0 : e[i]]: (n = r?.fade) == null ? void 0 : n[i]
    };
  },
  fadeActive: (t) => {
    var e, n;
    const { type: i, c: r = Nt } = t;
    return {
      [(e = r?.fadeActive) == null ? void 0 : e[i]]: (n = r?.fadeActive) == null ? void 0 : n[i]
    };
  },
  push: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.push) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.push) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  },
  pushActive: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.pushActive) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.pushActive) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  },
  expand: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.expand) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.expand) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  },
  expandActive: (t) => {
    var e, n, i, r;
    const { direction: s, type: o, c: a = Nt } = t;
    return {
      [(n = (e = a?.expandActive) == null ? void 0 : e[s]) == null ? void 0 : n[o]]: (r = (i = a?.expandActive) == null ? void 0 : i[s]) == null ? void 0 : r[o]
    };
  }
};
var F = function(t) {
  return t ? new Date(t.getTime()) : null;
}, _r = function(t, e) {
  var n = F(t);
  return e === 0 && n.getHours() === 23 && n.setHours(n.getHours() + 2), n;
}, _t = function(t, e) {
  var n = F(t);
  return n.setDate(n.getDate() + e), _r(n, t.getHours());
}, Zt = function(t, e, n, i, r, s, o) {
  i === void 0 && (i = 0), r === void 0 && (r = 0), s === void 0 && (s = 0), o === void 0 && (o = 0);
  var a = new Date(t, e, n, i, r, s, o);
  return t > -1 && t < 100 && a.setFullYear(a.getFullYear() - 1900), _r(a, i);
}, On = function(t) {
  var e = Zt(t.getFullYear(), t.getMonth() + 1, 1, t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
  return _t(e, -1);
}, Io = 12, ex = function(t, e) {
  return t.getMonth() !== e ? On(ut(t, -1)) : t;
}, ut = function(t, e) {
  var n = F(t), i = (n.getMonth() + e) % Io, r = (Io + i) % Io;
  return n.setMonth(n.getMonth() + e), ex(_r(n, t.getHours()), r);
}, sh = function(t, e) {
  var n = t.getMonth(), i = Zt(e, n, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
  return i.getMonth() === n ? i : On(ut(i, -1));
}, qt = function(t, e) {
  return _r(sh(t, t.getFullYear() + e), t.getHours());
}, xr = function(t, e) {
  return qt(t, 100 * e);
}, hn = function(t, e) {
  return qt(t, 10 * e);
}, ou = function(t, e) {
  return _t(t, e * 7);
}, tx = 864e5, Rs;
(function(t) {
  t[t.Forward = 1] = "Forward", t[t.Backward = -1] = "Backward";
})(Rs || (Rs = {}));
var oh = function(t, e, n) {
  n === void 0 && (n = Rs.Forward);
  var i = F(t), r = (e - i.getDay() + 7 * n) % 7;
  return i.setDate(i.getDate() + r), _r(i, t.getHours());
}, As;
(function(t) {
  t[t.Sunday = 0] = "Sunday", t[t.Monday = 1] = "Monday", t[t.Tuesday = 2] = "Tuesday", t[t.Wednesday = 3] = "Wednesday", t[t.Thursday = 4] = "Thursday", t[t.Friday = 5] = "Friday", t[t.Saturday = 6] = "Saturday";
})(As || (As = {}));
var Ks = function(t, e) {
  return sh(t, e(t.getFullYear()));
}, Hi = function(t) {
  return Ks(t, function(e) {
    return e - e % 100;
  });
}, Gr = function(t, e) {
  return (Hi(e).getFullYear() - Hi(t).getFullYear()) / 100;
}, Wt = function(t) {
  return Ks(t, function(e) {
    return e - e % 10;
  });
}, Jr = function(t, e) {
  return (Wt(e).getFullYear() - Wt(t).getFullYear()) / 10;
}, Qr = function(t, e) {
  return (e.getFullYear() - t.getFullYear()) * 12 + (e.getMonth() - t.getMonth());
}, Xr = function(t, e) {
  return e.getFullYear() - t.getFullYear();
}, _s = function(t) {
  return Zt(t.getFullYear(), t.getMonth(), 1, t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
}, ah = function(t, e) {
  var n = t.getDate(), i = Zt(t.getFullYear(), e, n, t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
  return i.getDate() === n ? i : On(ut(i, -1));
}, lh = function(t) {
  return ah(t, 0);
}, Se = function(t) {
  return Zt(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0);
}, Kt = function(t, e) {
  return !t && !e ? !0 : t && e && t.getTime() === e.getTime();
}, qn = function(t, e) {
  return !t && !e ? !0 : t && e && Kt(Se(t), Se(e));
}, pa = function(t) {
  return Ks(t, function(e) {
    return e - e % 100 + 90;
  });
}, ch = function(t) {
  return ah(t, 11);
}, ma = function(t) {
  return Ks(t, function(e) {
    return e - e % 10 + 9;
  });
}, nx = function(t, e) {
  return oh(t, e, Rs.Backward);
}, ix = function(t, e) {
  return e !== As.Monday ? _t(nx(t, e), 4) : _t(t, 4 - (t.getDay() || 7));
}, Mo = function(t, e) {
  var n = Zt(t.getFullYear(), 0, 1, -6), i = ix(t, e), r = i.getTime() - n.getTime(), s = Math.floor(r / tx);
  return 1 + Math.floor(s / 7);
}, rx = function(t, e) {
  e === void 0 && (e = As.Monday), t = Se(t);
  var n = _t(t, -7), i = _t(t, 7), r = Mo(t, e);
  return r === 0 ? Mo(n, e) + 1 : r === 53 && Mo(i, e) > 1 ? 1 : r;
};
const sx = {
  en: {
    name: "en",
    identity: {
      version: {
        _unicodeVersion: "14.0.0",
        _cldrVersion: "41"
      },
      language: "en"
    },
    territory: "US",
    numbers: {
      symbols: {
        decimal: ".",
        group: ",",
        list: ";",
        percentSign: "%",
        plusSign: "+",
        minusSign: "-",
        exponential: "E",
        superscriptingExponent: "×",
        perMille: "‰",
        infinity: "∞",
        nan: "NaN",
        timeSeparator: ":",
        approximatelySign: "~"
      },
      decimal: {
        patterns: [
          "n"
        ],
        groupSize: [
          3
        ]
      },
      scientific: {
        patterns: [
          "nEn"
        ],
        groupSize: []
      },
      percent: {
        patterns: [
          "n%"
        ],
        groupSize: [
          3
        ]
      },
      currency: {
        patterns: [
          "$n"
        ],
        groupSize: [
          3
        ],
        "unitPattern-count-one": "n $",
        "unitPattern-count-other": "n $"
      },
      currencies: {
        BGN: {
          displayName: "Bulgarian Lev",
          "displayName-count-one": "Bulgarian lev",
          "displayName-count-other": "Bulgarian leva",
          symbol: "BGN"
        },
        EUR: {
          displayName: "Euro",
          "displayName-count-one": "euro",
          "displayName-count-other": "euros",
          symbol: "€",
          "symbol-alt-narrow": "€"
        },
        USD: {
          displayName: "US Dollar",
          "displayName-count-one": "US dollar",
          "displayName-count-other": "US dollars",
          symbol: "$",
          "symbol-alt-narrow": "$"
        }
      },
      localeCurrency: "USD",
      accounting: {
        patterns: [
          "$n",
          "($n)"
        ],
        groupSize: [
          3
        ]
      }
    },
    calendar: {
      gmtFormat: "GMT{0}",
      gmtZeroFormat: "GMT",
      patterns: {
        d: "M/d/y",
        D: "EEEE, MMMM d, y",
        m: "MMM d",
        M: "MMMM d",
        y: "MMM y",
        Y: "MMMM y",
        F: "EEEE, MMMM d, y h:mm:ss a",
        g: "M/d/y h:mm a",
        G: "M/d/y h:mm:ss a",
        t: "h:mm a",
        T: "h:mm:ss a",
        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
      },
      dateTimeFormats: {
        full: "{1}, {0}",
        long: "{1}, {0}",
        medium: "{1}, {0}",
        short: "{1}, {0}",
        availableFormats: {
          Bh: "h B",
          Bhm: "h:mm B",
          Bhms: "h:mm:ss B",
          d: "d",
          E: "ccc",
          EBh: "E h B",
          EBhm: "E h:mm B",
          EBhms: "E h:mm:ss B",
          Ed: "d E",
          Eh: "E h a",
          Ehm: "E h:mm a",
          EHm: "E HH:mm",
          Ehms: "E h:mm:ss a",
          EHms: "E HH:mm:ss",
          Gy: "y G",
          GyM: "M/y G",
          GyMd: "M/d/y G",
          GyMEd: "E, M/d/y G",
          GyMMM: "MMM y G",
          GyMMMd: "MMM d, y G",
          GyMMMEd: "E, MMM d, y G",
          h: "h a",
          H: "HH",
          hm: "h:mm a",
          Hm: "HH:mm",
          hms: "h:mm:ss a",
          Hms: "HH:mm:ss",
          hmsv: "h:mm:ss a v",
          Hmsv: "HH:mm:ss v",
          hmv: "h:mm a v",
          Hmv: "HH:mm v",
          hv: "h a v",
          Hv: "HH'h' v",
          M: "L",
          Md: "M/d",
          MEd: "E, M/d",
          MMM: "LLL",
          MMMd: "MMM d",
          MMMEd: "E, MMM d",
          MMMMd: "MMMM d",
          "MMMMW-count-one": "'week' W 'of' MMMM",
          "MMMMW-count-other": "'week' W 'of' MMMM",
          ms: "mm:ss",
          y: "y",
          yM: "M/y",
          yMd: "M/d/y",
          yMEd: "E, M/d/y",
          yMMM: "MMM y",
          yMMMd: "MMM d, y",
          yMMMEd: "E, MMM d, y",
          yMMMM: "MMMM y",
          yQQQ: "QQQ y",
          yQQQQ: "QQQQ y",
          "yw-count-one": "'week' w 'of' Y",
          "yw-count-other": "'week' w 'of' Y"
        }
      },
      timeFormats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      dateFormats: {
        full: "EEEE, MMMM d, y",
        long: "MMMM d, y",
        medium: "MMM d, y",
        short: "M/d/yy"
      },
      days: {
        format: {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        }
      },
      months: {
        format: {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        }
      },
      quarters: {
        format: {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        }
      },
      dayPeriods: {
        format: {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          narrow: {
            midnight: "mi",
            am: "a",
            "am-alt-variant": "am",
            noon: "n",
            pm: "p",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          }
        },
        "stand-alone": {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          narrow: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          }
        }
      },
      eras: {
        format: {
          wide: {
            0: "Before Christ",
            1: "Anno Domini",
            "0-alt-variant": "Before Common Era",
            "1-alt-variant": "Common Era"
          },
          abbreviated: {
            0: "BC",
            1: "AD",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          },
          narrow: {
            0: "B",
            1: "A",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          }
        }
      },
      dateFields: {
        era: {
          wide: "era",
          short: "era",
          narrow: "era"
        },
        year: {
          wide: "year",
          short: "yr.",
          narrow: "yr."
        },
        quarter: {
          wide: "quarter",
          short: "qtr.",
          narrow: "qtr."
        },
        month: {
          wide: "month",
          short: "mo.",
          narrow: "mo."
        },
        week: {
          wide: "week",
          short: "wk.",
          narrow: "wk."
        },
        weekOfMonth: {
          wide: "week of month",
          short: "wk. of mo.",
          narrow: "wk. of mo."
        },
        day: {
          wide: "day",
          short: "day",
          narrow: "day"
        },
        dayOfYear: {
          wide: "day of year",
          short: "day of yr.",
          narrow: "day of yr."
        },
        weekday: {
          wide: "day of the week",
          short: "day of wk.",
          narrow: "day of wk."
        },
        weekdayOfMonth: {
          wide: "weekday of the month",
          short: "wkday. of mo.",
          narrow: "wkday. of mo."
        },
        dayperiod: {
          short: "AM/PM",
          wide: "AM/PM",
          narrow: "AM/PM"
        },
        hour: {
          wide: "hour",
          short: "hr.",
          narrow: "hr."
        },
        minute: {
          wide: "minute",
          short: "min.",
          narrow: "min."
        },
        second: {
          wide: "second",
          short: "sec.",
          narrow: "sec."
        },
        zone: {
          wide: "time zone",
          short: "zone",
          narrow: "zone"
        },
        millisecond: {
          narrow: "ms",
          short: "ms",
          wide: "millisecond"
        }
      }
    }
  },
  supplemental: {
    likelySubtags: {
      en: "en-Latn-US"
    },
    currencyData: {
      region: {
        US: [
          {
            USD: {
              _from: "1792-01-01"
            }
          }
        ]
      }
    },
    weekData: {
      firstDay: {
        US: "sun"
      },
      weekendStart: {
        "001": "sat"
      },
      weekendEnd: {
        "001": "sun"
      }
    }
  }
};
function Gs(t) {
  return typeof t == "string";
}
const ox = {
  NoLocale: "Missing locale info for '{0}'",
  NoCurrency: "Cannot determine currency information. Please load the locale currencies data.",
  NoSupplementalCurrency: "Cannot determine currency. Please load the supplemental currencyData.",
  NoCurrencyRegion: "No currency data for region '{0}'",
  NoCurrencyDisplay: "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
  NoGMTInfo: "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
  NoWeekData: "Cannot determine locale first day of week. Please load the supplemental weekData.",
  NoFirstDay: "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
  NoValidCurrency: "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
  NoDateFieldNames: "Cannot determine the locale date field names. Please load the locale dateFields data."
}, ax = /\{(\d+)}?\}/g;
class lx {
  constructor({ name: e, message: n }) {
    if (!e || !n)
      throw new Error("{ name: string, message: string } object is required!");
    this.name = e, this.message = n;
  }
  formatMessage(...e) {
    const n = cx(e), i = this.message.replace(ax, function(r, s) {
      return n[parseInt(s, 10)];
    });
    return `${this.name}: ${i}`;
  }
  error(...e) {
    return new Error(this.formatMessage(e));
  }
}
const cx = function(t) {
  return t.reduce((e, n) => e.concat(n), []);
}, ux = function(t) {
  const e = function(n, i) {
    return n[i] = new lx({ name: i, message: t[i] }), n;
  };
  return Object.keys(t).reduce(e, {});
}, Xi = ux(ox);
function dx(t, e) {
  const n = t.split("-"), i = n[0], r = n[1], s = n[2];
  return nn[t] || e.indexOf(s) !== -1 && nn[i + "-" + s] || e.indexOf(r) !== -1 && nn[i + "-" + r] || nn[i];
}
function hx(t, e) {
  const n = nn.supplemental.likelySubtags;
  for (let i = 0; i < e.length; i++) {
    let r = n[t + "-" + e[i]];
    if (r)
      return r;
  }
  if (n[t])
    return n[t];
}
const nn = sx;
function zr(t) {
  let e;
  return Gs(t) ? e = Nn(t) : e = t, e;
}
function Nn(t) {
  if (nn[t])
    return nn[t];
  if (nn.supplemental.likelySubtags) {
    const n = t.split("-"), i = n[0], r = n.slice(1), s = hx(i, r), o = s ? dx(s, r) : null;
    if (o)
      return o;
  }
  throw Xi.NoLocale.error(t);
}
const uh = "decimal", Js = "currency", dh = "accounting", er = "percent", hh = "scientific", Qs = "$", $l = "%", Yi = "n", px = ";", mx = ",", Yn = ".", De = "", tr = "en";
function fx(t, e) {
  const n = nn.supplemental.likelySubtags;
  let i = t.split("-");
  if (n) {
    const s = n[t] || n[i[0]];
    s && (i = s.split("-"));
  }
  if (e)
    for (let s = i.length - 1; s >= 1; s--) {
      const o = i[s];
      (o === e.variant || o === e.script) && i.splice(s, 1);
    }
  const r = i.length;
  if (r > 1)
    return i[r - 1].toUpperCase();
}
function ph(t) {
  if (t.territory)
    return t.territory;
  const e = t.name, n = t.identity;
  let i;
  return n && n.territory ? i = n.territory : i = fx(e, n), t.territory = i, i;
}
function vx(t, e = tr) {
  const i = Nn(e).calendar.dateFields;
  if (!i)
    throw Xi.NoDateFieldNames.error();
  const r = i[t.type] || {};
  return r[t.nameType] || r.wide;
}
function gx(t) {
  const e = [];
  for (let n = 0; n < t.length; n++)
    e.push(t[n].toLowerCase());
  return e;
}
function bx(t) {
  const e = {};
  for (let n in t)
    e[n] = t[n].toLowerCase();
  return e;
}
function yx(t) {
  return Array.isArray(t) ? gx(t) : bx(t);
}
function mh(t, e) {
  const { type: n, nameType: i, standAlone: r, lower: s } = e, o = zr(t), a = r ? "stand-alone" : "format", u = (s ? "lower-" : De) + i, d = o.calendar[n][a];
  let f = d[u];
  return !f && s && (f = d[u] = yx(d[i])), f;
}
function Oo(t) {
  const e = t.split("-"), n = parseInt(e[0], 10), i = parseInt(e[1], 10) - 1, r = parseInt(e[2], 10);
  return new Date(n, i, r);
}
const {
  NoCurrency: xx,
  NoCurrencyDisplay: wx,
  NoSupplementalCurrency: $x,
  NoCurrencyRegion: Ex,
  NoValidCurrency: Sx
} = Xi, au = 2, No = "symbol", kx = "XXX", lu = {
  "001": "USD",
  // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
  150: "EUR"
  // 150 territory for Europe
};
function fh(t, e, n) {
  const r = zr(t).numbers.currencies;
  if (!r) {
    if (n)
      throw xx.error();
    return;
  }
  const s = r[e];
  if (!s) {
    if (n)
      throw wx.error();
    return;
  }
  return s;
}
function Dx(t, e) {
  return e.length - t.length;
}
function Cx(t) {
  let e, n, i, r;
  for (let s = 0; s < t.length; s++) {
    const o = t[s], a = Object.keys(o)[0], u = o[a];
    if (a !== kx && u._tender !== "false" && u._from)
      if (u._to) {
        if (!i) {
          const d = Oo(u._from), f = Oo(u._to);
          (!n || n.to < f || n.from < d) && (e = a, n = {
            from: d,
            to: f
          });
        }
      } else {
        const d = Oo(u._from);
        (!r || r < d) && (i = a, r = d);
      }
  }
  return i || e;
}
function Ix(t, e, n = !0) {
  const i = fh(t, e, n);
  if (i) {
    if (!i.displays) {
      const r = [e];
      for (let s in i)
        r.push(i[s]);
      r.sort(Dx), i.displays = r;
    }
    return i.displays;
  }
}
function Mx(t, e) {
  const { value: n, currency: i, currencyDisplay: r = No } = e;
  if (r === "code")
    return i;
  const s = fh(t, i, !0);
  let o;
  return r === No ? o = s["symbol-alt-narrow"] || s[No] || i : typeof n > "u" || n !== 1 ? o = s["displayName-count-other"] : o = s["displayName-count-one"], o;
}
function Ox(t) {
  let e = au, n = au;
  const i = ((nn.supplemental.currencyData || {}).fractions || {})[t];
  return i && i._digits && (n = e = parseInt(i._digits, 10)), {
    minimumFractionDigits: e,
    maximumFractionDigits: n
  };
}
function Nx(t, e = !0) {
  if (lu[t])
    return lu[t];
  const n = nn.supplemental.currencyData;
  if (!n) {
    if (e)
      throw $x.error();
    return;
  }
  const i = n.region[t];
  if (!i) {
    if (e)
      throw Ex.error(t);
    return;
  }
  return Cx(i);
}
function El(t, e) {
  const n = zr(t), i = n.numbers;
  if (!i.localeCurrency) {
    const r = Nx(ph(n), e);
    if (!r && e)
      throw Sx.error(n.name);
    i.localeCurrency = r;
  }
  return i.localeCurrency;
}
const Tx = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Px = "001", { NoWeekData: Rx, NoFirstDay: Ax } = Xi;
function vh(t) {
  const e = zr(t);
  if (!isNaN(e.firstDay))
    return e.firstDay;
  const n = nn.supplemental.weekData;
  if (!n)
    throw Rx.error();
  const i = n.firstDay[ph(e)] || n.firstDay[Px];
  if (!i)
    throw Ax.error();
  return e.firstDay = Tx.indexOf(i), e.firstDay;
}
const { NoWeekData: gk } = Xi;
function _x(t) {
  return zr(t).numbers.symbols;
}
function gh(t) {
  return 1 / t === -1 / 0;
}
function bh(t, e = {}) {
  return e.currency || (e.currency = El(t, !0)), Mx(t, e);
}
function yh(t, e, n, i, r) {
  const s = r.numbers.symbols, o = t.indexOf(s.decimal), a = i.groupSize.slice();
  let u = a.shift(), d = o !== -1 ? o : n + 1, f = t.substring(e, d), y = t;
  const c = f.length;
  if (c >= u) {
    let m = c, S = [];
    for (; m > -1; ) {
      let k = f.substring(m - u, m);
      k && S.push(k), m -= u;
      let C = a.shift();
      if (u = C !== void 0 ? C : u, u === 0) {
        k = f.substring(0, m), k && S.push(k);
        break;
      }
    }
    f = S.reverse().join(s.group), y = t.substring(0, e) + f + t.substring(d);
  }
  return y;
}
function Sl(t) {
  return t === Js || t === dh;
}
function It(t, e = 2, n = !1) {
  const i = e - String(t).length;
  let r = t;
  if (i > 0) {
    const s = new Array(i + 1).join("0");
    r = n ? t + s : s + t;
  }
  return r;
}
const zx = 20;
function wr(t, e) {
  let n = t, i = e || 0;
  return n = n.toString().split("e"), n = Math.round(+(n[0] + "e" + (n[1] ? Number(n[1]) + i : i))), n = n.toString().split("e"), n = +(n[0] + "e" + (n[1] ? Number(n[1]) - i : -i)), n.toFixed(Math.min(i, zx));
}
const jx = 3, Fx = 0, Lx = /0+$/;
function Vx(t) {
  let { minimumFractionDigits: e, maximumFractionDigits: n, style: i } = t;
  const r = Sl(i);
  let s;
  return r && (s = Ox(t.currency)), e === void 0 && (e = r ? s.minimumFractionDigits : 0), n === void 0 && (i === er ? n = Math.max(e, Fx) : r ? n = Math.max(e, s.maximumFractionDigits) : n = Math.max(e, jx)), {
    minimumFractionDigits: e,
    maximumFractionDigits: n
  };
}
function Bx(t, e, n) {
  let i = De;
  for (let r = 0, s = e.length; r < s; r++) {
    let o = e.charAt(r);
    o === Yi ? i += t : o === Qs || o === $l ? i += n : i += o;
  }
  return i;
}
function Hx(t, e) {
  const n = t.numbers.currency;
  let i = e !== 1 ? n["unitPattern-count-other"] : n["unitPattern-count-one"];
  return e < 0 && (i = i.replace(Yi, `-${Yi}`)), i;
}
function Ux(t, e, n) {
  const i = n.numbers.symbols, { style: r } = e, s = Sl(r);
  if (r === hh)
    return (e.minimumFractionDigits !== void 0 ? t.toExponential(e.minimumFractionDigits) : t.toExponential()).replace(Yn, i.decimal);
  let o = t, a;
  s && (e.value = o, a = bh(n, e)), r === er && (o *= 100, a = i.percentSign);
  const { minimumFractionDigits: u, maximumFractionDigits: d } = Vx(e);
  o = wr(o, d);
  const f = o < 0, y = gh(t), c = o.split(Yn);
  let m = c[0], S = It(c[1] ? c[1].replace(Lx, De) : De, u, !0);
  f && (m = m.substring(1)), e.minimumIntegerDigits && (m = It(m, e.minimumIntegerDigits));
  let k = e.useGrouping !== !1 ? yh(m, 0, m.length, e, n) : m;
  S && (k += i.decimal + S);
  let C;
  if (s && e.currencyDisplay === "name")
    C = Hx(n, t);
  else {
    const b = e.patterns;
    C = f || y ? b[1] || "-" + b[0] : b[0];
  }
  return C === Yi && !f ? k : Bx(k, C, a);
}
const Wx = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g, xh = "__??__";
function wh(t, e) {
  const n = t.format;
  n.indexOf($l) !== -1 && (t.style = er, t.symbol = e.numbers.symbols.percentSign, t.number *= 100), n.indexOf(Qs) !== -1 && (t.style = Js, t.symbol = bh(e));
}
function $h(t) {
  let e = t.format;
  if (e.indexOf("'") > -1 || e.indexOf('"') > -1 || e.indexOf("\\") > -1) {
    const n = t.literals = [];
    t.format = e.replace(Wx, function(i) {
      const r = i.charAt(0).replace("\\", De), s = i.slice(1).replace(r, De);
      return n.push(s), xh;
    });
  }
}
function Zx(t, e) {
  let n = t;
  if (e) {
    const i = e.length;
    for (let r = 0; r < i; r++)
      n = n.replace(xh, e[r]);
  }
  return n;
}
const Dr = "#", Cr = "0", qx = /(\.(?:[0-9]*[1-9])?)0+$/g, Yx = /\.$/, Kx = /,/g;
function Gx(t, e) {
  let n;
  return e === 0 ? n = qx : n = new RegExp(`(\\.[0-9]{${e}}[1-9]*)0+$`, "g"), t.replace(n, "$1").replace(Yx, De);
}
function Jx(t) {
  let { number: e, format: n } = t, i = n.indexOf(Yn);
  if (i !== -1) {
    const r = n.lastIndexOf(Cr) - i, s = n.lastIndexOf(Dr) - i, o = r > -1, a = s > -1;
    let u = e.toString().split("e");
    u[1] ? u = wr(e, Math.abs(u[1])) : u = u[0], u = u.split(Yn)[1] || De;
    let d = u.length, f = -1;
    !o && !a ? (t.format = n.substring(0, i) + n.substring(i + 1), i = -1, d = 0) : o && r > s ? d = r : s > r && (a && d > s ? d = s : o && d < r && (d = r), f = o ? r : 0), d > -1 && (e = wr(e, d), f > -1 && (e = Gx(e, f)));
  } else
    e = wr(e);
  t.negative && e * -1 >= 0 && !t.negativeZero && (t.negative = !1), t.number = e, t.decimalIndex = i;
}
function Qx(t) {
  return t.indexOf(Dr) === -1 && t.indexOf(Cr) === -1;
}
function Xx(t) {
  let { number: e, format: n } = t;
  if (n = n.split(px), (t.negative || t.negativeZero) && n[1])
    n = n[1], t.hasNegativeFormat = !0;
  else if (e === 0) {
    const i = n[2];
    n = i || n[0], i && Qx(i) && (t.constant = i);
  } else
    n = n[0];
  t.format = n;
}
function ew(t) {
  t.hasGroup = t.format.indexOf(mx) > -1, t.hasGroup && (t.format = t.format.replace(Kx, De));
}
function cu(t, e, n) {
  let i;
  return t === -1 && e !== -1 ? i = e : t !== -1 && e === -1 ? i = t : i = n ? Math.min(t, e) : Math.max(t, e), i;
}
function tw(t) {
  const e = t.format;
  let n = e.indexOf(Dr), i = e.indexOf(Cr), r = cu(n, i, !0);
  n = e.lastIndexOf(Dr), i = e.lastIndexOf(Cr);
  let s = cu(n, i);
  r === e.length && (s = r), t.start = r, t.end = s, t.lastZeroIndex = i;
}
function nw(t, e, n) {
  let i = t;
  if (e === Js || e === er) {
    i = De;
    for (let r = 0, s = t.length; r < s; r++) {
      let o = t.charAt(r);
      i += o === Qs || o === $l ? n : o;
    }
  }
  return i;
}
function iw(t, e) {
  const { start: n, end: i, negative: r, negativeZero: s, format: o, decimalIndex: a, lastZeroIndex: u, hasNegativeFormat: d, hasGroup: f } = t;
  let y = t.number;
  const c = y.toString().split(Yn), m = o.length, S = c[0], k = c[1] || De, C = S.length;
  let h = De;
  y = o.substring(0, n), (r || s) && !d && (y += "-");
  for (let b = n; b < m; b++) {
    let w = o.charAt(b);
    if (a === -1) {
      if (i - b < C) {
        y += S;
        break;
      }
    } else if (u !== -1 && u < b && (h = De), a - b <= C && a - b > -1 && (y += S, b = a), a === b) {
      y += (k ? e.numbers.symbols.decimal : De) + k, b += i - a + 1;
      continue;
    }
    w === Cr ? (y += w, h = w) : w === Dr && (y += h);
  }
  return f && (y = yh(y, n + (r && !d ? 1 : 0), Math.max(i, C + n), e.numbers.decimal, e)), i >= n && (y += o.substring(i + 1)), y;
}
function rw(t, e) {
  let n = t.number;
  return t.start !== -1 && (n = iw(t, e), n = nw(n, t.style, t.symbol), n = Zx(n, t.literals)), n;
}
function sw(t, e, n) {
  const i = {
    negative: t < 0,
    number: Math.abs(t),
    negativeZero: gh(t),
    format: e
  };
  return Xx(i), i.constant ? i.constant : ($h(i), wh(i, n), ew(i), Jx(i), tw(i), rw(i, n));
}
const ow = /^(n|c|p|e|a)(\d*)$/i;
function aw(t) {
  const e = ow.exec(t);
  if (e) {
    const n = {
      style: uh
    };
    let i = e[1].toLowerCase();
    return i === "c" ? n.style = Js : i === "a" ? n.style = dh : i === "p" ? n.style = er : i === "e" && (n.style = hh), e[2] && (n.minimumFractionDigits = n.maximumFractionDigits = parseInt(e[2], 10)), n;
  }
}
function Eh(t) {
  let e;
  return Gs(t) ? e = aw(t) : e = t, e;
}
function Sh(t, e = Yi, n = tr) {
  if (t == null)
    return De;
  if (!isFinite(t))
    return String(t);
  const i = Nn(n), r = Eh(e);
  let s;
  if (r) {
    const o = r.style || uh;
    s = Ux(t, Object.assign({}, i.numbers[o], r), i);
  } else
    s = sw(t, e, i);
  return s;
}
function kl(t) {
  return typeof t == "number";
}
const lw = /[eE][-+]?[0-9]+/, uu = /\u00A0/g;
function du(t, e) {
  if (e.length > 1) {
    const n = (e[1] || De).replace(Qs, De).split(Yi);
    if (t.indexOf(n[0]) > -1 && t.indexOf(n[1]) > -1)
      return t.replace(n[0], De).replace(n[1], De);
  }
}
function cw(t, e, n) {
  const i = Eh(n) || {};
  let r = Sl(i.style), s = t, o;
  const a = i.currency || El(e, r);
  if (a) {
    const u = Ix(e, a, r);
    if (u)
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (s.includes(f)) {
          s = s.replace(f, De), r = !0;
          break;
        }
      }
    if (r) {
      const d = du(s, e.numbers.currency.patterns) || du(s, e.numbers.accounting.patterns);
      d && (o = !0, s = d);
    }
  }
  return {
    number: s,
    negative: o
  };
}
function uw(t, e) {
  const n = e.literals;
  let i = t;
  if (n)
    for (let r = 0; r < n.length; r++)
      i = i.replace(n[r], De);
  return i;
}
function dw(t) {
  const e = String(t), n = e.indexOf(Yn), i = 2;
  let r = t / Math.pow(10, i);
  if (n === -1 || String(r).length <= e.length + i)
    return r;
  const s = e.length - n + 1 + i;
  return parseFloat(r.toFixed(s));
}
function hw(t, e = tr, n = {}) {
  if (!t && t !== 0)
    return null;
  if (kl(t))
    return t;
  const i = Nn(e), r = i.numbers.symbols;
  let s = t.toString(), o = n || {}, a;
  if (Gs(n) && (o = { format: n }, $h(o), s = uw(s, o), wh(o, i)), (o.style === er || s.indexOf(r.percentSign) > -1) && (s = s.replace(r.percentSign, De), a = !0), lw.test(s))
    return s = parseFloat(s.replace(r.decimal, Yn)), isNaN(s) ? null : s;
  const { negative: u, number: d } = cw(s, i, o);
  s = String(d).trim();
  const f = s.indexOf("-");
  if (f > 0)
    return null;
  let y = f > -1;
  return y = u !== void 0 ? u : y, s = s.replace("-", De).replace(uu, " ").split(r.group.replace(uu, " ")).join(De).replace(r.decimal, Yn), s = parseFloat(s), isNaN(s) ? s = null : y && (s *= -1), s && a && (s = dw(s)), s;
}
const pw = /\{(\d+)}/g;
function Dl(t) {
  const e = arguments;
  return t.replace(pw, (n, i) => e[parseInt(i, 10) + 1]);
}
const mw = 120, fw = 20, hu = [2, 1, 5, 3, 4], vw = -2, gw = -1, bw = 1, yw = 2, xw = {
  [vw.toString()]: 8,
  [gw.toString()]: 6,
  [yw.toString()]: 6,
  [bw.toString()]: 3
}, ww = {
  numeric: 1,
  "2-digit": 2,
  short: 3,
  long: 4,
  narrow: 5
}, $w = /[hHmsSzZoOvVxX]/;
function Ew(t) {
  return t.hour12 ? "h" : "H";
}
const pu = [{
  key: "era",
  specifier: "G"
}, {
  key: "year",
  specifier: "y"
}, {
  key: "month",
  specifier: "M"
}, {
  key: "day",
  specifier: "d"
}, {
  key: "weekday",
  specifier: "E"
}, {
  key: "hour",
  getSpecifier: Ew
}, {
  key: "minute",
  specifier: "m"
}, {
  key: "second",
  specifier: "s"
}, {
  key: "timeZoneName",
  specifier: "z"
}], mu = {
  e: "c",
  E: "c",
  M: "L",
  Q: "q"
}, To = {}, Ui = {};
function Po(t) {
  return To[t] || (To[t] = new RegExp(t + "+")), To[t];
}
function cs(t) {
  const e = [];
  let n = t.charAt(0), i = n;
  for (let r = 1; r < t.length; r++) {
    let s = t.charAt(r);
    s === i ? n += s : (e.push(n), n = i = s);
  }
  return e.push(n), e;
}
function Ro(t, e) {
  const n = t.length;
  let i = -Number.MAX_VALUE, r, s;
  for (let o in e) {
    const a = [];
    let u = o.replace("v", "z"), d = 0;
    for (let f = 0; f < n; f++) {
      const y = t[f];
      let m = (Po(y[0]).exec(u) || [])[0];
      if (!m)
        d -= mw;
      else if (u = u.replace(m, De), m.length !== y.length) {
        let S = Math.max(Math.min(hu[m.length] - hu[y.length], 2), -2);
        d -= xw[S];
      }
      if (a.push(m), d < i)
        break;
    }
    u.length && (d -= cs(u).length * fw), d > i && (i = d, r = a, s = e[o]);
  }
  s = s.replace("v", "z");
  for (let o = 0; o < n; o++) {
    const a = r[o];
    if (a && a !== t[o]) {
      const u = r[o][0];
      s = s.replace(Po(u), t[o]), mu[u] && (s = s.replace(Po(mu[u]), t[o]));
    }
  }
  return s;
}
function Sw(t, e, n) {
  Ui[n] || (Ui[n] = {}), Ui[n][t] = e;
}
function kw(t, e) {
  const n = e.calendar.dateTimeFormats.availableFormats;
  if (n[t])
    return n[t];
  if (Ui[e.name] && Ui[e.name][t])
    return Ui[e.name][t];
  const i = t.search($w);
  let r;
  if (i > 0) {
    const s = t.substr(0, i), o = t.substr(i);
    r = Dl(
      e.calendar.dateTimeFormats.short,
      //should be deterimed based on specifiers
      n[o] || Ro(cs(o), n),
      n[s] || Ro(cs(s), n)
    );
  } else
    r = Ro(cs(t), n);
  return Sw(t, r, e.name), r;
}
function Dw(t) {
  let e = [];
  for (let n = 0; n < pu.length; n++) {
    let i = pu[n], r = i.key, s = t[r];
    if (s) {
      let o = i.specifier || i.getSpecifier(t);
      e.push(o.repeat(ww[s]));
    }
  }
  return e.join(De);
}
function Cl(t, e) {
  const n = e.calendar;
  let i;
  if (Gs(t))
    n.patterns[t] ? i = n.patterns[t] : i = t;
  else if (t) {
    if (t.pattern)
      return t.pattern;
    let r = t.skeleton;
    r || (t.datetime ? i = Dl(n.dateTimeFormats[t.datetime], n.timeFormats[t.datetime], n.dateFormats[t.datetime]) : t.date ? i = n.dateFormats[t.date] : t.time ? i = n.timeFormats[t.time] : r = Dw(t)), r && (i = kw(r, e));
  }
  return i || (i = n.patterns.d), i;
}
function kh(t) {
  let e;
  return t <= 3 ? e = "abbreviated" : t === 4 ? e = "wide" : t === 5 ? e = "narrow" : t === 6 && (e = "short"), e;
}
function mn(t, e, n, i, r) {
  return mh(t, {
    type: e,
    nameType: kh(n),
    standAlone: i,
    lower: r
  });
}
function fu(t) {
  return typeof t == "function";
}
function Il(t) {
  return !!t && fu(t.getTime) && fu(t.getMonth);
}
const vu = "month", es = "hour", ts = "zone", Ao = "weekday", gu = "quarter", Cw = {
  G: "era",
  y: "year",
  q: gu,
  Q: gu,
  M: vu,
  L: vu,
  d: "day",
  E: Ao,
  c: Ao,
  e: Ao,
  h: es,
  H: es,
  k: es,
  K: es,
  m: "minute",
  s: "second",
  S: "millisecond",
  a: "dayperiod",
  x: ts,
  X: ts,
  z: ts,
  Z: ts
}, hr = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;
function Iw(t, e, n) {
  const i = vh(n);
  let r;
  return t < i ? r = 7 - i + t : r = t - i, r + 1;
}
function Dh(t, e, n, i) {
  return e <= 2 ? It(t + 1, e) : mn(n, "months", e, i)[t];
}
function Ch(t, e, n, i) {
  const r = Math.floor(t.getMonth() / 3);
  return e < 3 ? r + 1 : mn(n, "quarters", e, i)[r];
}
function Xs(t, e, n) {
  const { shortHours: i, optionalMinutes: r, separator: s, localizedName: o, zZeroOffset: a } = n, u = t.getTimezoneOffset() / 60;
  if (u === 0 && a)
    return "Z";
  const d = u <= 0 ? "+" : "-", f = Math.abs(u).toString().split("."), y = f[1] || 0;
  let c = d + (i ? f[0] : It(f[0], 2));
  if ((y || !r) && (c += (s ? ":" : De) + It(y, 2)), o) {
    const m = u === 0 ? e.calendar.gmtZeroFormat : e.calendar.gmtFormat;
    c = Dl(m, c);
  }
  return c;
}
function Ih(t, e, n, i) {
  let r;
  return e < 3 ? r = Iw(t.getDay(), e, n) : r = mn(n, "days", e, i)[t.getDay()], r;
}
const rt = {};
rt.d = function(t, e) {
  return It(t.getDate(), e);
};
rt.E = function(t, e, n) {
  return mn(n, "days", e)[t.getDay()];
};
rt.M = function(t, e, n) {
  return Dh(t.getMonth(), e, n, !1);
};
rt.L = function(t, e, n) {
  return Dh(t.getMonth(), e, n, !0);
};
rt.y = function(t, e) {
  let n = t.getFullYear();
  return e === 2 && (n = n % 100), It(n, e);
};
rt.h = function(t, e) {
  const n = t.getHours() % 12 || 12;
  return It(n, e);
};
rt.H = function(t, e) {
  return It(t.getHours(), e);
};
rt.k = function(t, e) {
  return It(t.getHours() || 24, e);
};
rt.K = function(t, e) {
  return It(t.getHours() % 12, e);
};
rt.m = function(t, e) {
  return It(t.getMinutes(), e);
};
rt.s = function(t, e) {
  return It(t.getSeconds(), e);
};
rt.S = function(t, e) {
  const n = t.getMilliseconds();
  let i;
  return n !== 0 ? i = It(String(n / 1e3).split(".")[1].substr(0, e), e, !0) : i = It(De, e), i;
};
rt.a = function(t, e, n) {
  return mn(n, "dayPeriods", e)[t.getHours() < 12 ? "am" : "pm"];
};
rt.z = function(t, e, n) {
  return Xs(t, n, {
    shortHours: e < 4,
    optionalMinutes: e < 4,
    separator: !0,
    localizedName: !0
  });
};
rt.Z = function(t, e, n) {
  return Xs(t, n, {
    separator: e > 3,
    localizedName: e === 4,
    zZeroOffset: e === 5
  });
};
rt.x = function(t, e, n) {
  return Xs(t, n, {
    optionalMinutes: e === 1,
    separator: e === 3 || e === 5
  });
};
rt.X = function(t, e, n) {
  return Xs(t, n, {
    optionalMinutes: e === 1,
    separator: e === 3 || e === 5,
    zZeroOffset: !0
  });
};
rt.G = function(t, e, n) {
  let i = t.getFullYear() >= 0 ? 1 : 0;
  return mn(n, "eras", e)[i];
};
rt.e = Ih;
rt.c = function(t, e, n) {
  return Ih(t, e, n, !0);
};
rt.q = function(t, e, n) {
  return Ch(t, e, n, !0);
};
rt.Q = Ch;
function Mh(t, e, n = tr) {
  if (!Il(t))
    return t ?? De;
  const i = Nn(n);
  return Cl(e, i).replace(hr, function(s) {
    let o = s.length, a;
    return s.includes("'") || s.includes('"') ? a = s.slice(1, o - 1) : a = rt[s[0]](t, o, i), a;
  });
}
function bu(t, e, n) {
  const i = t.getTimezoneOffset(), r = new Date(t.getTime() + (e - n) * 6e4), s = r.getTimezoneOffset();
  return new Date(r.getTime() + (s - i) * 6e4);
}
function Mw(t, e) {
  !e && t.getHours() === 23 && t.setHours(t.getHours() + 2);
}
const Ow = /([+|-]\d{1,2})(:?)(\d{2})?/, Nw = /^\/Date\((.*?)\)\/$/, Tw = /[+-]\d*/, Pw = {
  2: /^\d{1,2}/,
  3: /^\d{1,3}/,
  4: /^\d{4}/
}, Rw = /\d+/, yu = "{0}", Aw = /^ */, _w = / *$/, zw = [
  "yyyy/MM/dd HH:mm:ss",
  "yyyy/MM/dd HH:mm",
  "yyyy/MM/dd",
  "E MMM dd yyyy HH:mm:ss",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSXXX",
  "yyyy-MM-ddTHH:mm:ssXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
  "yyyy-MM-ddTHH:mm:ss.SSS",
  "yyyy-MM-ddTHH:mmXXX",
  "yyyy-MM-ddTHH:mmX",
  "yyyy-MM-ddTHH:mm:ss",
  "yyyy-MM-ddTHH:mm",
  "yyyy-MM-dd HH:mm:ss",
  "yyyy-MM-dd HH:mm",
  "yyyy-MM-dd",
  "HH:mm:ss",
  "HH:mm"
], xu = ["G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t"], jw = 2029;
function an(t, e, n) {
  return !(t >= e && t <= n);
}
function vt(t, e) {
  let { format: n, idx: i } = e, r = 0;
  for (; n[i] === t; )
    r++, i++;
  return r > 0 && (i -= 1), e.idx = i, r;
}
function Sn(t, e) {
  let n = t ? Pw[t] || new RegExp("^\\d{1," + t + "}") : Rw, i = e.value.substr(e.valueIdx, t).match(n);
  return i ? (i = i[0], e.valueIdx += i.length, parseInt(i, 10)) : null;
}
function ui(t, e, n) {
  let i = 0, r = t.length, s, o, a = 0, u = 0, d;
  for (; i < r; i++)
    s = t[i], o = s.length, d = e.value.substr(e.valueIdx, o), d = d.toLowerCase(), d === s && o > a && (a = o, u = i);
  return a ? (e.valueIdx += a, u + 1) : null;
}
function _o(t) {
  let e = !1;
  const n = t.value.charAt(t.valueIdx), i = t.format[t.idx], r = n === i, s = /\s/.test(i) && /\s/.test(n);
  return (r || s) && (t.valueIdx++, e = !0), e;
}
function Fw(t) {
  const { gmtFormat: e, gmtZeroFormat: n } = t;
  if (!e)
    throw Xi.NoGMTInfo.error();
  return [e.replace(yu, De).toLowerCase(), n.replace(yu, De).toLowerCase()];
}
function eo(t, e, n) {
  const { shortHours: i, noSeparator: r, optionalMinutes: s, localizedName: o, zLiteral: a } = n;
  if (t.UTC = !0, a && t.value.charAt(t.valueIdx) === "Z")
    return t.valueIdx++, !1;
  if (o && !ui(Fw(e.calendar), t))
    return !0;
  const u = Ow.exec(t.value.substr(t.valueIdx, 6));
  if (!u)
    return !o;
  const d = u[1], f = u[3], y = parseInt(d, 10), c = u[2];
  let m = parseInt(f, 10);
  if (isNaN(y) || !i && d.length !== 3 || !s && isNaN(m) || r && c || (isNaN(m) && (m = null), an(y, -12, 13) || m && an(m, 0, 59)))
    return !0;
  t.valueIdx += u[0].length, t.hoursOffset = y, t.minutesOffset = m;
}
function Oh(t, e, n) {
  const i = vt(t, e), r = mn(n, "months", i, t === "L", !0), s = i < 3 ? Sn(2, e) : ui(r, e);
  if (s === null || an(s, 1, 12))
    return !0;
  e.month = s - 1;
}
function Nh(t, e, n) {
  const i = vt(t, e), r = mn(n, "days", i, t === "c", !0);
  let s = i < 3 ? Sn(1, e) : ui(r, e);
  if (!s && s !== 0 || an(s, 1, 7))
    return !0;
}
const lt = {};
lt.d = function(t) {
  vt("d", t);
  const e = Sn(2, t);
  if (e === null || an(e, 1, 31))
    return !0;
  t.day === null && (t.day = e);
};
lt.E = function(t, e) {
  const n = vt("E", t);
  if (ui(mn(e, "days", n, !1, !0), t) === null)
    return !0;
};
lt.M = function(t, e) {
  return Oh("M", t, e);
};
lt.L = function(t, e) {
  return Oh("L", t, e);
};
lt.y = function(t) {
  const e = vt("y", t);
  let n = Sn(e === 1 ? void 0 : e, t);
  if (n === null)
    return !0;
  if (e === 2) {
    const i = (/* @__PURE__ */ new Date()).getFullYear();
    n = i - i % 100 + n, n > jw && (n -= 100);
  }
  t.year = n;
};
lt.h = function(t) {
  vt("h", t);
  let e = Sn(2, t);
  if (e === 12 && (e = 0), e === null || an(e, 0, 11))
    return !0;
  t.hours = e;
};
lt.K = function(t) {
  vt("K", t);
  let e = Sn(2, t);
  if (e === null || an(e, 0, 11))
    return !0;
  t.hours = e;
};
lt.a = function(t, e) {
  const n = vt("a", t);
  let i = mn(e, "dayPeriods", n, !1, !0);
  const r = ui([i.pm], t);
  if (!r && !ui([i.am], t))
    return !0;
  t.pmHour = r;
};
lt.H = function(t) {
  vt("H", t);
  const e = Sn(2, t);
  if (e === null || an(e, 0, 23))
    return !0;
  t.hours = e;
};
lt.k = function(t) {
  vt("k", t);
  let e = Sn(2, t);
  if (e === null || an(e, 1, 24))
    return !0;
  t.hours = e === 24 ? 0 : e;
};
lt.m = function(t) {
  vt("m", t);
  const e = Sn(2, t);
  if (e === null || an(e, 0, 59))
    return !0;
  t.minutes = e;
};
lt.s = function(t) {
  vt("s", t);
  const e = Sn(2, t);
  if (e === null || an(e, 0, 59))
    return !0;
  t.seconds = e;
};
lt.S = function(t) {
  const e = vt("S", t), n = t.value.substr(t.valueIdx, e);
  let i = null;
  if (isNaN(parseInt(n, 10)) || (i = parseFloat("0." + n, 10), i = wr(i, 3), i *= 1e3, t.valueIdx += e), i === null || an(i, 0, 999))
    return !0;
  t.milliseconds = i;
};
lt.z = function(t, e) {
  const i = vt("z", t) < 4, r = eo(t, e, {
    shortHours: i,
    optionalMinutes: i,
    localizedName: !0
  });
  if (r)
    return r;
};
lt.Z = function(t, e) {
  const n = vt("Z", t), i = eo(t, e, {
    noSeparator: n < 4,
    zLiteral: n === 5,
    localizedName: n === 4
  });
  if (i)
    return i;
};
lt.x = function(t, e) {
  const n = vt("x", t), i = eo(t, e, {
    noSeparator: n !== 3 && n !== 5,
    optionalMinutes: n === 1
  });
  if (i)
    return i;
};
lt.X = function(t, e) {
  const n = vt("X", t), i = eo(t, e, {
    noSeparator: n !== 3 && n !== 5,
    optionalMinutes: n === 1,
    zLiteral: !0
  });
  if (i)
    return i;
};
lt.G = function(t, e) {
  const n = vt("G", t), i = mn(e, "eras", n, !1, !0);
  if (ui([i[0], i[1]], t) === null)
    return !0;
};
lt.e = function(t, e) {
  return Nh("e", t, e);
};
lt.c = function(t, e) {
  return Nh("c", t, e);
};
function Lw(t) {
  let { year: e, month: n, day: i, hours: r, minutes: s, seconds: o, milliseconds: a, pmHour: u, UTC: d, hoursOffset: f, minutesOffset: y } = t;
  const c = r !== null || s !== null || o || null, m = /* @__PURE__ */ new Date();
  let S;
  return e === null && n === null && i === null && c ? (e = m.getFullYear(), n = m.getMonth(), i = m.getDate()) : (e === null && (e = m.getFullYear()), i === null && (i = 1)), u && r < 12 && (r += 12), d ? (f && (r += -f), y && (s += -y * (f < 0 ? -1 : 1)), S = new Date(Date.UTC(e, n, i, r, s, o, a))) : (S = new Date(e, n, i, r, s, o, a), Mw(S, r)), e < 100 && S.setFullYear(e), S.getDate() !== i && d === void 0 ? null : S;
}
function Vw(t, e) {
  const n = Aw.exec(e)[0], i = _w.exec(e)[0];
  return `${n}${t}${i}`;
}
function Bw(t, e, n) {
  const i = Cl(e, n).split(De), r = {
    format: i,
    idx: 0,
    value: Vw(t, e),
    valueIdx: 0,
    year: null,
    month: null,
    day: null,
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null
  }, s = i.length;
  let o = !1;
  for (; r.idx < s; r.idx++) {
    let a = i[r.idx];
    if (o)
      a === "'" && (o = !1), _o(r);
    else if (lt[a]) {
      if (lt[a](r, n))
        return null;
    } else if (a === "'")
      o = !0, _o(r);
    else if (!_o(r))
      return null;
  }
  return r.valueIdx < t.length ? null : Lw(r) || null;
}
function Hw(t) {
  const e = t.substr(0, 1) === "-" ? -1 : 1;
  let n = t.substring(1);
  return n = parseInt(n.substr(0, 2), 10) * 60 + parseInt(n.substring(2), 10), e * n;
}
function Uw(t) {
  if (t && t.indexOf("/D") === 0) {
    let e = Nw.exec(t);
    if (e) {
      e = e[1];
      let n = Tw.exec(e.substring(1));
      return e = new Date(parseInt(e, 10)), n && (n = Hw(n[0]), e = bu(e, e.getTimezoneOffset(), 0), e = bu(e, 0, -1 * n)), e;
    }
  }
}
function Ww(t) {
  const e = [], n = t.patterns, i = xu.length;
  for (let r = 0; r < i; r++)
    e.push(n[xu[r]]);
  return e.concat(zw);
}
function Zw(t, e, n = tr) {
  if (!t)
    return null;
  if (Il(t))
    return t;
  let i = String(t).trim(), r = Uw(i);
  if (r)
    return r;
  const s = Nn(n);
  let o = e || Ww(s.calendar);
  o = Array.isArray(o) ? o : [o];
  const a = o.length;
  for (let u = 0; u < a; u++)
    if (r = Bw(i, o[u], s), r)
      return r;
  return r;
}
const qw = {
  month: {
    type: "months",
    minLength: 3,
    standAlone: "L"
  },
  quarter: {
    type: "quarters",
    minLength: 3,
    standAlone: "q"
  },
  weekday: {
    type: "days",
    minLength: {
      E: 0,
      c: 3,
      e: 3
    },
    standAlone: "c"
  },
  dayperiod: {
    type: "dayPeriods",
    minLength: 0
  },
  era: {
    type: "eras",
    minLength: 0
  }
}, wu = "literal";
function zo(t, e) {
  const n = t[t.length - 1];
  n && n.type === wu ? n.pattern += e : t.push({
    type: wu,
    pattern: e
  });
}
function Yw(t) {
  return t === "h" || t === "K";
}
function Kw(t, e = tr) {
  const n = Nn(e), i = Cl(t, n), r = [];
  let s = hr.lastIndex = 0, o = hr.exec(i);
  for (; o; ) {
    let a = o[0];
    if (s < o.index && zo(r, i.substring(s, o.index)), a.startsWith('"') || a.startsWith("'"))
      zo(r, a);
    else {
      const u = a[0], d = Cw[u], f = {
        type: d,
        pattern: a
      };
      d === "hour" && (f.hour12 = Yw(a));
      const y = qw[d];
      if (y) {
        const c = kl(y.minLength) ? y.minLength : y.minLength[u], m = a.length;
        m >= c && (f.names = {
          type: y.type,
          nameType: kh(m),
          standAlone: y.standAlone === u
        });
      }
      r.push(f);
    }
    s = hr.lastIndex, o = hr.exec(i);
  }
  return s < i.length && zo(r, i.substring(s)), r;
}
const Gw = /\{(\d+)(:[^}]+)?\}/g;
function Th(t, e, n) {
  if (e) {
    if (Il(t))
      return Mh(t, e, n);
    if (kl(t))
      return Sh(t, e, n);
  }
  return t ?? De;
}
function $u(t, e, n) {
  return t.replace(Gw, function(i, r, s) {
    let o = e[parseInt(r, 10)];
    return Th(o, s ? s.substring(1) : De, n);
  });
}
let Ph = class {
  /**
   * Creates a new instance of the internationalization service.
   *
   * @param locale - The locale that will be used by the internationalization methods.
   */
  constructor(e) {
    if (this.locale = e, e === "" && process.env.NODE_ENV !== "production")
      throw "Locale should not be empty string";
  }
  /**
   * Formats a string with placeholders such as `Total amount {0:c}`.
   *
   * @param format - The format string.
   * @param values - One or more values to output in the format string placeholders.
   * @return - The formatted string.
   */
  format(e, ...n) {
    return n.length === 1 && Array.isArray(n[0]) ? $u(e, n[0], this.locale) : $u(e, n, this.locale);
  }
  /**
   * Converts a `Date` object to a string based on the specified format. If no format is provided, the default short date format is used.
   *
   * @param value - The date which will be formatted.
   * @param format - The format string or options.
   * @return - The formatted date.
   */
  formatDate(e, n) {
    return Mh(e, n, this.locale);
  }
  /**
   * Converts an object to a string based on the specified format.
   *
   * @param value - The value which will be formatted.
   * @param format - The format to use.
   * @return - The formatted object.
   */
  toString(e, n) {
    return Th(e, n, this.locale);
  }
  /**
   * Converts a string to a `Number`.
   *
   * @param value - The string which will be parsed.
   * @param format - The format string or options.
   * @return - The parsed number.
   */
  parseNumber(e, n) {
    return hw(e, this.locale, n);
  }
  /**
   * Converts a string to a `Date` object based on the specified format.
   *
   * @param value - The string which will be converted.
   * @param format - The format strings or options.
   * @return - The parsed date.
   */
  parseDate(e, n) {
    return Zw(e, n, this.locale);
  }
  /**
   * Converts a `Number` to a string based on the specified format.
   *
   * @param value - The number which will be formatted.
   * @param format - The format string or options.
   * @return - The formatted number.
   */
  formatNumber(e, n) {
    return Sh(e, n, this.locale);
  }
  /**
   * Returns a localized date field name based on specific `dateFieldName` options.
   *
   * @param options - The detailed configuration for the desired date field name.
   * @returns - The localized date field name from the current locale based on the option.
   */
  dateFieldName(e) {
    return vx(e, this.locale);
  }
  /**
   * Returns the day names from the current locale based on the option.
   *
   * @param options - The detailed configuration for the desired date format.
   * @return - The day names from the current locale based on the option.
   */
  dateFormatNames(e) {
    return mh(this.locale, e);
  }
  /**
   * Splits the date format into objects which contain information about each part of the pattern.
   *
   * @param format - The format string or options.
   * @returns - The date format parts.
   */
  splitDateFormat(e) {
    return Kw(e, this.locale);
  }
  /**
   * Returns the number symbols from the current locale.
   *
   * @return - The number symbols from the current locale.
   */
  numberSymbols() {
    return _x(this.locale);
  }
  /**
   * Returns the first day index, starting from Sunday.
   *
   * @return - The index of the first day of the week (0 == Sunday).
   */
  firstDay() {
    return vh(this.locale);
  }
  /**
   * @hidden
   */
  localeInfo() {
    return Nn(this.locale);
  }
  /**
   * @hidden
   */
  localeCurrency() {
    return El(this.locale);
  }
};
const jo = /* @__PURE__ */ Object.create({});
let Rh = class {
  /**
   * Creates a new LocalizationService instance.
   *
   * @param language The language code for localization.
   */
  constructor(e) {
    if (this.language = e, e === "" && process.env.NODE_ENV !== "production")
      throw "Language should not be an empty string";
  }
  /* eslint-disable max-len */
  /**
   * Provides a string based on a key for the current language. When no string for the current language is available under this key, the `defaultValue` is returned.
   *
   * @param key - The key which identifies the string for the current language.
   * @param defaultValue - The default value which will be returned when no string
   * for the current language is available under the key.
   * @return - The string for the current language.
   */
  // tslint:enable:max-line-length
  toLanguageString(e, n) {
    return this.language && jo[this.language] && jo[this.language].hasOwnProperty(e) ? jo[this.language][e] : n;
  }
};
const to = p.createContext({
  intl: new Ph("en"),
  localization: new Rh()
});
function mi(t) {
  if (!t && process.env.NODE_ENV !== "production")
    throw `Passed component - ${t} is invalid.`;
  const e = t.context;
  return e && e.intl ? e.intl : new Ph("en");
}
function Rt(t) {
  if (!t && process.env.NODE_ENV !== "production")
    throw `Passed component - ${t} is invalid.`;
  const e = t.context;
  return e && e.localization ? e.localization : new Rh();
}
function fi(t) {
  t.contextType = to;
}
function Tn(t) {
  t.contextType = to;
}
const Jw = () => p.useContext(to).intl;
const no = () => p.useContext(to).localization;
const ns = (t) => Math.max(t, 0);
let Fo = class {
  constructor(e) {
    this.offset = e;
  }
}, Lo = class {
  constructor(e) {
    this.skip = e;
  }
}, Qw = class {
  constructor(e, n) {
    this.onScrollAction = e, this.onPageAction = n, this.direction = "vertical", this.firstLoaded = 0, this.lastLoaded = 0, this.lastScrollTop = 0, this.take = 0, this.total = 0, this.rowHeightService = null, this.bottomOffset = 0, this.topOffset = 0;
  }
  create(e, n, i, r, s = 0, o = 0, a = "vertical") {
    this.rowHeightService = e, this.firstLoaded = n, this.lastLoaded = n + i, this.take = i, this.total = r, this.lastScrollTop = 0, this.topOffset = s, this.bottomOffset = o, this.direction = a;
    const u = this.rowsForHeight(s), d = ns(n - u);
    this.onScrollAction(new Fo(this.rowOffset(d))), this.onPageAction(new Lo(d));
  }
  onScroll({ scrollLeft: e, scrollTop: n, offsetHeight: i, offsetWidth: r }) {
    const s = this.direction === "vertical" ? n : e, o = this.direction === "vertical" ? i : r;
    if (this.lastScrollTop === s || !this.rowHeightService)
      return;
    const a = this.lastScrollTop >= s;
    this.lastScrollTop = s;
    const u = this.rowHeightService.index(ns(s - this.topOffset)), d = this.rowHeightService.index(ns(s + o - this.bottomOffset));
    if (!a && d >= this.lastLoaded && this.lastLoaded < this.total && (this.firstLoaded = u, this.onScrollAction(new Fo(this.rowOffset(u))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new Lo(this.firstLoaded))), a && u <= this.firstLoaded) {
      const f = Math.floor(this.take * 0.3);
      this.firstLoaded = ns(u - f), this.onScrollAction(new Fo(this.rowOffset(this.firstLoaded))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new Lo(this.firstLoaded));
    }
  }
  rowOffset(e) {
    return this.rowHeightService ? this.rowHeightService.offset(e) + this.topOffset : 0;
  }
  rowsForHeight(e) {
    return this.rowHeightService ? Math.ceil(e / this.rowHeightService.height(0)) : 0;
  }
};
const Xw = (t, e, n) => Math.min(Math.abs(e - t), n), e0 = 17, t0 = 10, n0 = {
  1: (t) => (e) => e + t,
  0: (t) => (e) => e - t
}, i0 = {
  1: (t) => (e) => Math.min(e, t),
  0: (t) => (e) => Math.max(e, t)
}, r0 = {
  1: (t) => (e) => e < t,
  0: (t) => (e) => e > t
}, fa = class us extends p.Component {
  constructor(e) {
    super(e), this.rowHeightService = null, this.scrollContainer = null, this.lastDirection = null, this.lastTotal = 0, this.lastTake = 0, this.animationInProgress = !1, this.restrictScroll = !1, this.scrollTo = (n) => {
      const i = this.direction === "vertical" ? "scrollTop" : "scrollLeft";
      if (!this.scrollContainer)
        return;
      const r = this.scrollContainer[i];
      this.restrictScroll && i === "scrollTop" && (!Number.isInteger(r) || !Number.isInteger(n)) && Math.abs(r - n) < t0 || (this.scrollContainer[i] = n);
    }, this.scrollToIndex = (n) => {
      this.animationInProgress = !1, this.rowHeightService && this.scrollTo(this.rowHeightService.offset(n));
    }, this.animateToIndex = (n) => {
      if (!this.rowHeightService || !window)
        return;
      window.cancelAnimationFrame(this.cancelAnimation);
      const i = this.rowHeightService.offset(n), r = this.getContainerScrollDirection(i), { start: s, end: o } = this.scrollRange(i, r);
      if (s === o)
        return;
      const a = this.scrollStep(s, o), u = n0[r](a), d = i0[r](o), f = r0[r](u(o)), y = (c) => {
        this.animationInProgress = !0;
        const m = u(c);
        this.scrollTo(d(m)), f(m) ? this.cancelAnimation = window.requestAnimationFrame(() => {
          y(m);
        }) : this.animationInProgress = !1;
      };
      this.cancelAnimation = window.requestAnimationFrame(() => {
        y(s);
      });
    }, this.scrollToBottom = () => {
      this.rowHeightService && this.scrollTo(this.rowHeightService.totalHeight() + this.props.bottomOffset);
    }, this.scrollStep = (n, i) => {
      const r = this.props.scrollDuration || us.defaultProps.scrollDuration;
      return Math.abs(i - n) / (r / e0);
    }, this.scrollRange = (n, i) => {
      const r = this.containerScrollPosition;
      if (parseInt(`${n}`, 10) === parseInt(`${r}`, 10))
        return { start: n, end: n };
      const s = this.containerMaxScroll(), o = i === 0 ? 1 : -1, a = Xw(r, n, this.props.maxScrollDifference || 0), u = Math.min(n, s);
      return { start: Math.min(Math.max(u + o * a, 0), s), end: u };
    }, this.containerMaxScroll = () => this.containerScrollSize - this.containerOffsetSize, this.getContainerScrollDirection = (n) => n < this.containerScrollPosition ? 0 : 1, this.initServices = (n = this.props) => {
      const i = this.direction === "vertical" ? n.itemHeight : n.itemWidth;
      i !== void 0 && (this.rowHeightService = new Xy(n.total, i), this.scrollerService.create(
        this.rowHeightService,
        n.skip,
        n.take,
        n.total,
        n.topOffset,
        this.scrollOffsetSize,
        this.direction
      ));
    }, this.getContainerProperty = (n) => this.scrollContainer ? this.scrollContainer[n] : 0, this.handleScroll = (n) => {
      if (!this.scrollContainer || !this.rowHeightService)
        return;
      const i = n.target;
      this.scrollerService.onScroll({
        scrollLeft: i.scrollLeft,
        scrollTop: i.scrollTop,
        offsetHeight: i.offsetHeight,
        offsetWidth: i.offsetWidth
      });
      const r = this.rowHeightService.index(this.containerScrollPosition - this.props.topOffset), { onScrollAction: s } = this.props, o = {
        index: r,
        target: i,
        scrollAction: this.scrollAction,
        pageAction: this.pageAction,
        animationInProgress: this.animationInProgress
      };
      this.props.onScroll && this.props.onScroll.call(void 0, n), s && s.call(void 0, o), this.scrollAction = void 0, this.pageAction = void 0;
    }, this.handleScrollAction = (n) => {
      this.scrollAction = n;
    }, this.handlePageAction = (n) => {
      this.pageAction = n;
    }, this.scrollerService = new Qw(this.handleScrollAction, this.handlePageAction), this.restrictScroll = Number.parseFloat(p.version) > 17;
  }
  get element() {
    return this.scrollContainer;
  }
  get containerOffsetSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "offsetHeight" : "offsetWidth");
  }
  get containerScrollSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollHeight" : "scrollWidth");
  }
  get containerScrollPosition() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollTop" : "scrollLeft");
  }
  get direction() {
    return this.props.direction !== void 0 ? this.props.direction : us.defaultProps.direction;
  }
  get scrollOffsetSize() {
    return this.props.scrollOffsetSize !== void 0 ? this.props.scrollOffsetSize : us.defaultProps.scrollOffsetSize;
  }
  activeIndex() {
    return this.itemIndex(Math.ceil(this.containerScrollPosition));
  }
  itemIndex(e) {
    return this.rowHeightService ? this.rowHeightService.index(e) : 0;
  }
  itemOffset(e) {
    return this.rowHeightService ? this.rowHeightService.offset(e) : 0;
  }
  isIndexVisible(e) {
    if (!this.rowHeightService)
      return !1;
    const n = this.containerScrollPosition, i = n + this.containerOffsetSize, r = this.rowHeightService.offset(e), s = r + this.rowHeightService.height(e);
    return r >= n && s <= i;
  }
  isListScrolled(e) {
    return this.rowHeightService ? this.containerScrollPosition !== this.rowHeightService.offset(e) : !1;
  }
  componentDidMount() {
    const { onMount: e } = this.props;
    e && e.call(void 0, this);
  }
  render() {
    const { total: e, take: n, bottomOffset: i, className: r, tabIndex: s, role: o, children: a, unstyled: u } = this.props, d = u && u.uCalendar;
    (this.lastTotal !== e || this.lastDirection !== this.direction || this.lastTake !== n) && (this.initServices(), this.lastTotal = e, this.lastDirection = this.direction, this.lastTake = n);
    const f = `${(this.rowHeightService ? this.rowHeightService.totalHeight() : 0) + i}`, y = this.direction === "vertical" ? { height: `${f}px` } : { width: `${f}px` }, c = N(
      he.scrollableSelector({
        c: d
      }),
      he.scrollable({
        c: d,
        horizontal: this.direction === "horizontal"
      }),
      r
    ), m = N(
      he.scrollablePlaceholder({
        c: d,
        horizontal: this.direction === "horizontal"
      })
    );
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        ref: (S) => {
          this.scrollContainer = S;
        },
        onScroll: this.handleScroll,
        className: c,
        tabIndex: s,
        role: o
      },
      a,
      /* @__PURE__ */ p.createElement("div", { style: y, className: m })
    );
  }
};
fa.propTypes = {
  bottomOffset: l.number.isRequired,
  className: l.string,
  direction: l.oneOf(["horizontal", "vertical"]),
  forceScroll: l.bool,
  itemHeight: l.number,
  itemWidth: l.number,
  maxScrollDifference: l.number,
  onScroll: l.func,
  onScrollAction: l.func,
  scrollDuration: l.number,
  scrollOffsetSize: l.number,
  skip: l.number.isRequired,
  tabIndex: l.number,
  take: l.number.isRequired,
  topOffset: l.number.isRequired,
  total: l.number.isRequired,
  role: l.string
}, fa.defaultProps = {
  direction: "vertical",
  forceScroll: !1,
  scrollOffsetSize: 0,
  maxScrollDifference: 100,
  scrollDuration: 100
};
let Ml = fa;
const s0 = (t, e) => {
  const n = Object.getOwnPropertyNames(t), i = Object.getOwnPropertyNames(e);
  if (n.length !== i.length)
    return !1;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (t[s] !== e[s])
      return !1;
  }
  return !0;
};
let o0 = class extends p.Component {
  constructor() {
    super(...arguments), this.handleClick = (e) => {
      const { onClick: n, value: i } = this.props;
      n && n.call(void 0, i, e);
    }, this.handleMouseEnter = () => {
      const { onMouseEnter: e, value: n } = this.props;
      e && e.call(void 0, n);
    }, this.handleMouseLeave = () => {
      const { onMouseLeave: e, value: n } = this.props;
      e && e.call(void 0, n);
    };
  }
  // Manually checking if the component needs an update
  // due to date object being compared by instance
  // and new Date object is created
  // every time and fails the shallow compare of the React.PureComponent.
  /**
   * @hidden
   */
  shouldComponentUpdate(e) {
    const { value: n, ...i } = this.props, { value: r, ...s } = e;
    return !((!(n && r) || n.getTime() === r.getTime()) && s0(i, s));
  }
  /* eslint-disable max-len */
  render() {
    const {
      className: e,
      formattedValue: n,
      isWeekend: i,
      isFocused: r,
      isInRange: s,
      isSelected: o,
      isRangeStart: a,
      isRangeMid: u,
      isRangeEnd: d,
      isRangeSplitStart: f,
      isRangeSplitEnd: y,
      isToday: c,
      isDisabled: m,
      view: S,
      value: k,
      isOtherMonth: C,
      showOtherMonthDays: h,
      allowReverse: b,
      unstyled: w,
      ...E
    } = this.props, $ = this.props.activeRangeEnd === "end" && d, D = this.props.activeRangeEnd === "start" && a, T = w && w.uCalendar, O = N(
      he.td({
        c: T,
        rangeStart: !C && !b && a,
        rangeEnd: !C && !b && d,
        rangeMid: !C && u,
        rangeSplitEnd: !C && y,
        rangeSplitStart: !C && f,
        active: D || $,
        focused: r,
        selected: !C && (o || a || d),
        today: !C && c,
        weekend: i,
        disabled: m,
        isOtherMonth: C,
        isEmpty: !h && C
      }),
      e
    );
    return !h && C ? /* @__PURE__ */ p.createElement("td", { role: "gridcell", className: O }) : /* @__PURE__ */ p.createElement(
      "td",
      {
        ...E,
        className: O,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      /* @__PURE__ */ p.createElement("span", { className: N(he.link({ c: T })) }, this.props.children)
    );
  }
};
const a0 = (t) => {
  const { className: e, firstDate: n, weekDays: i, ...r } = t, s = (u) => {
    const { onClick: d } = t;
    d && u && d.call(void 0, n, i || [], u);
  }, o = pn(), a = o && o.uCalendar;
  return /* @__PURE__ */ p.createElement(
    "td",
    {
      className: N(he.td({ c: a, isWeek: !0 }), e),
      ...r,
      onClick: s
    },
    t.children
  );
};
var we = /* @__PURE__ */ ((t) => (t[t.month = 0] = "month", t[t.year = 1] = "year", t[t.decade = 2] = "decade", t[t.century = 3] = "century", t))(we || {});
const kt = { start: null, end: null };
function pe(t) {
  const e = (i, r, s, ...o) => r[s] === null ? null : (i ? t.isRequired : t)(r, s, ...o), n = e.bind(null, !1);
  return n.isRequired = e.bind(null, !0), n;
}
const zs = (t, e, n) => e === void 0 || n === void 0 || e <= t && t <= n ? t : t < e ? e : n, ft = new Date(1980, 0, 1), Pn = new Date(1900, 0, 1), Rn = new Date(2099, 11, 31), nr = new Date(1980, 0, 1), vi = new Date(1980, 0, 1, 23, 59, 59), Ct = (t, e) => {
  const n = F(t);
  return n.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), n;
}, yt = () => Se(/* @__PURE__ */ new Date()), dt = (t, e, n) => !t || !(e && e > t || n && n < t), Ah = (t, e, n) => t === null || !(e && Se(e) > Se(t) || n && Se(n) < Se(t)), io = (t, e) => {
  const { start: n, end: i } = e || kt;
  return !n || !i ? !1 : n < t && t < i;
}, on = (t, e, n = 1) => {
  const i = [];
  for (let r = t; r < e; r = r + n)
    i.push(r);
  return i;
}, _h = (t, e, n) => e.getTime() <= t.getTime() && t.getTime() <= n.getTime(), l0 = (t, e) => t.slice(e).concat(t.slice(0, e)), Yt = (t, e, n) => t && (e && t < e ? F(e) : n && t > n ? F(n) : t), Ht = (t) => (e, n = "", i = {}) => {
  const r = document.createElement(t);
  return r.className = n, Object.keys(i).forEach((s) => {
    r.style[s] = i[s];
  }), typeof e == "string" ? r.innerHTML = e || "" : (e || []).forEach((s) => s && r.appendChild(s)), r;
};
function c0(t, e, n = {}) {
  let i, r;
  n.maxWait;
  let s, o, a;
  const u = window, d = !1, f = !1, y = !e && e !== 0 && typeof u.requestAnimationFrame == "function";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  e = +e || 0;
  function c(O) {
    const A = i, L = r;
    return i = r = void 0, s = t.apply(L, A), s;
  }
  function m(O, A) {
    return y ? (u.cancelAnimationFrame(o), u.requestAnimationFrame(O)) : setTimeout(O, A);
  }
  function S(O) {
    if (y)
      return u.cancelAnimationFrame(O);
    clearTimeout(O);
  }
  function k(O) {
    return o = m(b, e), d ? c() : s;
  }
  function C(O) {
    const A = O - a;
    return e - A;
  }
  function h(O) {
    const A = O - a;
    return a === void 0 || A >= e || A < 0 || f;
  }
  function b() {
    const O = Date.now();
    if (h(O))
      return w();
    o = m(b, C(O));
  }
  function w(O) {
    return o = void 0, i ? c() : (i = r = void 0, s);
  }
  function E() {
    o !== void 0 && S(o), i = a = r = o = void 0;
  }
  function $() {
    return o === void 0 ? s : w();
  }
  function D() {
    return o !== void 0;
  }
  function T(...O) {
    const A = Date.now(), L = h(A);
    return i = O, r = this, a = A, L && o === void 0 ? k() : (o === void 0 && (o = m(b, e)), s);
  }
  return T.cancel = E, T.flush = $, T.pending = D, T;
}
let zh = class {
  constructor(e) {
    this.intl = e;
  }
  getWeekNames(e = !1, n) {
    const i = l0(
      this.intl.dateFormatNames({ nameType: n ?? "short", type: "days" }),
      this.intl.firstDay()
    );
    return e ? [""].concat(i) : i;
  }
};
const Eu = (t, e) => {
  const n = e;
  return /* @__PURE__ */ p.createElement("td", { key: t, role: "gridcell", className: N(he.td({ c: n, isEmpty: !0 })) }, " ");
}, va = class jh extends p.Component {
  constructor() {
    super(...arguments), this.intl = null, this.weekService = null, this.buildWeekNumber = (e, n) => {
      if (!this.firstDate(e))
        return Eu(`week-cell-${n}`);
      const i = this.firstDate(e), r = this.getWeekNumber(i), s = `kendo-react-calendar-week-cell-${r}`, o = {
        value: r,
        firstDate: i,
        weekDays: e,
        unstyled: this.props.unstyled,
        onClick: this.handleWeekCellClick
      };
      return this.props.weekCell ? /* @__PURE__ */ p.createElement(this.props.weekCell, { ...o, key: s }, r) : /* @__PURE__ */ p.createElement(a0, { ...o, key: s }, r);
    }, this.buildRow = (e) => e.map((n, i) => {
      if (!n)
        return Eu(i);
      const r = { "aria-selected": n.isSelected }, s = `kendo-react-calendar-cell-${n.value.getTime()}`, o = {
        ...r,
        ...n,
        isDisabled: !n.isInRange,
        view: this.props.activeView,
        showOtherMonthDays: this.props.showOtherMonthDays,
        allowReverse: this.props.allowReverse,
        unstyled: this.props.unstyled,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      };
      return this.props.cell ? /* @__PURE__ */ p.createElement(this.props.cell, { ...o, key: s }, n.formattedValue) : /* @__PURE__ */ p.createElement(o0, { ...o, key: s }, n.formattedValue);
    }), this.firstDate = (e) => {
      const n = this.firstWeekDateContext(e);
      return n ? n.value : null;
    }, this.firstWeekDateContext = (e) => {
      if (!this.weekNumber)
        return null;
      let n = 0, i = e[n];
      for (; !i && n < e.length; )
        i = e[++n];
      return i;
    }, this.handleClick = (e, n) => {
      const { onChange: i } = this.props;
      if (i && n) {
        const r = {
          value: F(e),
          target: this,
          nativeEvent: n && n.nativeEvent,
          syntheticEvent: n
        };
        i.call(void 0, r);
      }
    }, this.handleWeekCellClick = (e, n, i) => {
      const { onWeekSelect: r } = this.props, s = n.findIndex((o) => o && o.value === e);
      r && i && r.call(void 0, e, s, i);
    }, this.handleMouseEnter = (e) => {
      const { onCellEnter: n } = this.props;
      n && n.call(void 0, F(e));
    }, this.handleMouseLeave = (e) => {
      const { onCellLeave: n } = this.props;
      n && n.call(void 0, F(e));
    };
  }
  get min() {
    return this.props.min;
  }
  get max() {
    return this.props.max;
  }
  get isHorizontal() {
    return this.props.direction === "horizontal";
  }
  get isMonthView() {
    return this.props.activeView === we.month;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === we.month);
  }
  get selectedDate() {
    return this.props.selectedDate !== void 0 ? this.props.selectedDate : jh.defaultProps.selectedDate;
  }
  render() {
    const { service: e, weekDaysFormat: n, cellUID: i, focusedDate: r, bus: s, activeView: o, selectionRange: a, unstyled: u } = this.props, d = u && u.uCalendar;
    this.intl = mi(this), this.weekService = new zh(this.intl);
    const f = this.weekService.getWeekNames(this.weekNumber, n), y = e.rowLength(this.weekNumber), c = e.title(this.props.viewDate), m = yt(), S = Ct(this.props.viewDate, m), k = e.data({
      cellUID: i,
      min: this.min,
      max: this.max,
      focusedDate: r,
      isActiveView: !s.canMoveDown(o),
      selectedDate: this.selectedDate,
      selectionRange: a,
      viewDate: S
    });
    return /* @__PURE__ */ p.createElement(p.Fragment, null, this.isMonthView && this.isHorizontal && /* @__PURE__ */ p.createElement("thead", { role: "rowgroup", className: N(he.thead({ c: d })) }, /* @__PURE__ */ p.createElement("tr", { role: "row", className: N(he.tr({ c: d })) }, f.map((C, h) => /* @__PURE__ */ p.createElement("th", { key: h, className: N(he.th({ c: d })) }, C)))), /* @__PURE__ */ p.createElement("tbody", { role: "rowgroup", className: N(he.tbody({ c: d })) }, !this.isHorizontal && /* @__PURE__ */ p.createElement("tr", { role: "presentation", className: N(he.tr({ c: d })) }, /* @__PURE__ */ p.createElement(
      "th",
      {
        scope: "col",
        colSpan: y,
        className: N(he.caption({ c: d }))
      },
      c
    )), k.map((C, h) => /* @__PURE__ */ p.createElement("tr", { role: "row", className: N(he.tr({ c: d })), key: h }, this.weekNumber && this.buildWeekNumber(C, h), this.buildRow(C)))));
  }
  getWeekNumber(e) {
    return !this.weekNumber || !this.intl ? null : rx(e, this.intl.firstDay());
  }
};
va.propTypes = {
  activeRangeEnd: l.oneOf(["start", "end", null]),
  activeView: l.number.isRequired,
  cellUID: l.string.isRequired,
  direction: l.oneOf(["horizontal", "vertical"]),
  focusedDate: l.instanceOf(Date).isRequired,
  max: l.instanceOf(Date).isRequired,
  min: l.instanceOf(Date).isRequired,
  onChange: l.func,
  selectedDate: l.oneOfType([l.instanceOf(Date), l.arrayOf(l.instanceOf(Date))]),
  showWeekNumbers: l.bool,
  showOtherMonthDays: l.bool,
  viewDate: l.instanceOf(Date).isRequired
}, va.defaultProps = {
  direction: "vertical",
  selectedDate: yt(),
  showWeekNumbers: !1
};
let Ol = va;
fi(Ol);
function u0({ imageUrl: t, name: e, iconClass: n, svgIcon: i, imageAlt: r, buttonClasses: s, iconSize: o }) {
  return t ? /* @__PURE__ */ p.createElement(
    "img",
    {
      role: "presentation",
      className: N(Zn.icon({ c: s })),
      alt: r,
      src: t
    }
  ) : e || i ? /* @__PURE__ */ p.createElement(
    pi,
    {
      className: N(Zn.icon({ c: s })),
      name: e,
      icon: i,
      size: o
    }
  ) : n ? /* @__PURE__ */ p.createElement("span", { role: "presentation", className: N(Zn.icon({ c: s }), n) }) : null;
}
const Be = p.forwardRef((t, e) => {
  const {
    children: n,
    togglable: i,
    dir: r,
    disabled: s,
    selected: o,
    icon: a,
    iconClass: u,
    svgIcon: d,
    imageUrl: f,
    imageAlt: y,
    className: c,
    startIcon: m,
    endIcon: S,
    onClick: k,
    size: C = is.size,
    rounded: h = is.rounded,
    fillMode: b = is.fillMode,
    themeColor: w = is.themeColor,
    ariaPressed: E,
    iconSize: $,
    ...D
  } = t, T = () => {
    i && o === void 0 && (A.current = !B, X(!B));
  }, O = (I) => {
    T(), k && k.call(void 0, I);
  }, A = p.useRef(void 0), L = p.useRef(null), [B, X] = p.useState(i === !0 && o === !0), z = d !== void 0 || a !== void 0 || u !== void 0 || f !== void 0, Q = n !== void 0, H = pn(), V = t.unstyled || H, re = V && V.uButton;
  p.useImperativeHandle(e, () => ({
    element: L.current,
    selected: A.current !== void 0 ? A.current : B
  })), p.useMemo(() => {
    i && o !== void 0 && o !== B && X(o);
  }, [i, o]), p.useEffect(() => {
    A.current = void 0;
  }, [B]);
  const P = u0({
    name: a,
    svgIcon: d,
    iconClass: u,
    imageUrl: f,
    imageAlt: y,
    buttonClasses: re,
    iconSize: $
  }), Y = (I) => p.cloneElement(I, {
    className: N(Zn.icon({ c: re }), I.props.className)
  }), M = p.useMemo(() => i ? B : E || void 0, []);
  return /* @__PURE__ */ p.createElement(
    "button",
    {
      ref: L,
      "aria-pressed": M,
      ...D,
      dir: r,
      disabled: s,
      onClick: O,
      className: N(
        Zn.wrapper({
          c: re,
          isRtl: r === "rtl",
          selected: B,
          disabled: s,
          size: C,
          fillMode: b,
          rounded: h,
          themeColor: w,
          iconButton: !Q && z
        }),
        c
      )
    },
    m && Y(m),
    P,
    n && /* @__PURE__ */ p.createElement("span", { className: N(Zn.text({ c: re })) }, n),
    S && Y(S)
  );
}), is = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
Be.displayName = "KendoReactButton";
Be.propTypes = {
  children: l.node,
  selected: l.bool,
  togglable: l.bool,
  icon: l.string,
  svgIcon: yl,
  iconClass: l.string,
  imageUrl: l.string,
  imageAlt: l.string,
  size: l.oneOf([null, "small", "medium", "large"]),
  rounded: l.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: l.oneOf([null, "flat", "link", "outline", "solid", "clear"]),
  // eslint-disable-next-line max-len
  themeColor: l.oneOf([
    null,
    "base",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "inverse"
  ])
};
const Fh = (t) => {
  const { children: e, className: n, dir: i, disabled: r, width: s } = t, o = pn(), a = t.unstyled || o, u = a && a.uButtonGroup, d = (k) => {
    const C = p.Children.count(k), h = i !== void 0 ? i === "rtl" : y.current && getComputedStyle(y.current).direction === "rtl" || !1;
    return p.Children.map(k, (b, w) => {
      if (p.isValidElement(b)) {
        const E = w === C - 1, $ = h, D = N(
          b.props.className,
          nu.position({
            c: u,
            start: $ ? E : w === 0,
            end: $ ? w === 0 : E
          })
        );
        return f(b, D);
      }
      return b;
    });
  }, f = (k, C) => {
    const h = { ...s ? { width: s } : {}, ...k.props.style || {} }, b = r || k.props.disabled, w = {
      ...k.props,
      ...C ? { className: C } : {},
      ...Object.keys(h).length ? { style: h } : {},
      ...b !== void 0 ? { disabled: b } : {}
    };
    return p.Children.count(k.props.children) > 0 ? p.cloneElement(k, w, k.props.children) : p.cloneElement(k, w);
  }, y = p.useRef(null), c = d(e), m = N(
    nu.wrapper({
      c: u,
      stretched: !!s,
      disabled: r
    }),
    n
  ), S = {
    className: m,
    style: { width: `${s}` },
    dir: i,
    // Accessibility properties
    role: "group",
    "aria-disabled": r
  };
  return /* @__PURE__ */ p.createElement("div", { ref: y, ...S, className: m }, c);
};
Fh.propTypes = {
  children: l.oneOfType([l.arrayOf(l.element), l.element]),
  className: l.string,
  disabled: l.bool,
  width: l.string,
  dir: l.string
};
const Nl = (t) => {
  const e = pn(), n = t.unstyled || e, i = n && n.uDropDownButton, r = p.useCallback(
    (u) => {
      t.onClick(u, t.index);
    },
    [t]
  ), s = t.dataItem.render || t.item || (t.item === void 0 ? t.render : null), o = t.dataItem.text !== void 0 ? t.dataItem.text : t.textField ? t.dataItem[t.textField] : t.dataItem, a = /* @__PURE__ */ p.createElement(
    "li",
    {
      id: t.id,
      className: N(
        zi.li({
          c: i,
          focused: t.focused
        }),
        t.className
      ),
      tabIndex: -1,
      onClick: r,
      onMouseDown: t.onDown,
      onPointerDown: t.onDown,
      role: "menuitem",
      "aria-disabled": t.dataItem.disabled || void 0
    },
    /* @__PURE__ */ p.createElement(
      "span",
      {
        tabIndex: -1,
        className: N(
          zi.link({
            c: i,
            selected: t.dataItem.selected,
            disabled: t.dataItem.disabled
          })
        ),
        key: "icon"
      },
      s ? /* @__PURE__ */ p.createElement(s, { item: t.dataItem, itemIndex: t.index }) : /* @__PURE__ */ p.createElement(p.Fragment, null, (t.dataItem.icon || t.dataItem.iconClass || t.dataItem.svgIcon) && /* @__PURE__ */ p.createElement(
        pi,
        {
          className: t.dataItem.iconClass,
          name: t.dataItem.icon,
          icon: t.dataItem.svgIcon
        }
      ), t.dataItem.imageUrl && /* @__PURE__ */ p.createElement("img", { role: "presentation", alt: "", src: t.dataItem.imageUrl, className: "k-icon" }), o && /* @__PURE__ */ p.createElement("span", { className: "k-menu-link-text" }, o))
    )
  );
  return t.item !== void 0 && t.render !== void 0 ? t.render.call(void 0, a, t) : a;
};
Nl.displayName = "KendoReactButtonItem";
const Lh = class extends p.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
Lh.propTypes = {
  text: l.string,
  icon: l.string,
  iconClass: l.string,
  imageUrl: l.string,
  disabled: l.bool,
  render: l.any
};
let d0 = Lh;
const Vh = (t, e, n, i) => {
  if (n)
    return t;
  const r = Math.min(i - 1, Math.max(0, t));
  switch (e) {
    case U.enter:
    case U.space:
    case U.esc:
      return -1;
    case U.up:
    case U.left:
      return r - 1 < 0 ? i - 1 : r - 1;
    case U.down:
    case U.right:
      return r + 1 >= i ? 0 : r + 1;
    case U.home:
      return 0;
    case U.end:
      return i - 1;
    default:
      return t;
  }
};
const Su = (t, e, n) => {
  t.style.transitionDuration = "", e && t.classList.remove(...e.split(" ")), n && t.classList.remove(...n.split(" "));
}, h0 = typeof window < "u" && /Firefox/.test(window.navigator.userAgent), ku = (t, e, n, i, r, s, o) => {
  if (e === 0)
    return i();
  const a = `${s}Active`, u = N(si[s]({ direction: o, type: n, c: r })), d = N(si[a]({ direction: o, type: n, c: r })), f = (S) => {
    S.target === t && (t.removeEventListener("transitionend", f), Su(t, u, d), n === "exit" ? t.style.display = "none" : t.style.display = "", i());
  };
  t.addEventListener("transitionend", f);
  const y = t.ownerDocument;
  if (!y)
    return;
  const c = y.defaultView;
  if (!c)
    return;
  const m = () => {
    Su(t, u, d), n === "enter" && (t.style.display = ""), u && t.classList.add(...u.split(" ").filter((S) => S)), c.requestAnimationFrame(() => {
      t.style.transitionDuration = e + "ms", t.classList.add(...d.split(" ").filter((S) => S));
    });
  };
  h0 ? c.requestAnimationFrame(m) : m();
};
var Ee;
(function(t) {
  t.bottom = "bottom", t.center = "center", t.middle = "middle", t.left = "left", t.right = "right", t.top = "top";
})(Ee || (Ee = {}));
var p0 = function(t) {
  var e = t.anchorRect, n = t.anchorAlign, i = t.elementRect, r = t.elementAlign, s = t.margin, o = s === void 0 ? {} : s, a = n.horizontal, u = n.vertical, d = r.horizontal, f = r.vertical, y = o.horizontal || 0, c = o.vertical || 0, m = e.top, S = e.left;
  return u === Ee.bottom && (m += e.height), (u === Ee.center || u === Ee.middle) && (m += Math.round(e.height / 2)), f === Ee.bottom && (m -= i.height, c *= -1), (f === Ee.center || f === Ee.middle) && (m -= Math.round(i.height / 2), c *= -1), a === Ee.right && (S += e.width), (a === Ee.center || a === Ee.middle) && (S += Math.round(e.width / 2)), d === Ee.right && (S -= i.width, y *= -1), (d === Ee.center || d === Ee.middle) && (S -= Math.round(i.width / 2), y *= -1), {
    top: m + c,
    left: S + y
  };
}, m0 = function(t, e) {
  return {
    top: t.top + e.y,
    left: t.left + e.x,
    height: t.height,
    width: t.width
  };
};
const Bh = (function(t) {
  return t && t.ownerDocument || document;
});
var Hh = function(t) {
  return Bh(t).documentElement;
}, Vo = 0, f0 = function() {
  if (!Vo && typeof document < "u") {
    var t = document.createElement("div");
    t.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", t.innerHTML = "&nbsp;", document.body.appendChild(t), Vo = t.offsetWidth - t.scrollWidth, document.body.removeChild(t);
  }
  return Vo;
}, Tl = function(t) {
  return Bh(t).defaultView;
}, Uh = function(t) {
  var e = Tl(t), n = Hh(t), i = {
    height: e.innerHeight,
    width: e.innerWidth
  };
  return n.scrollHeight - n.clientHeight > 0 && (i.width -= f0()), i;
}, v0 = function(t) {
  if (!t.getBoundingClientRect) {
    var e = Uh(t);
    return {
      bottom: e.height,
      left: 0,
      right: e.width,
      top: 0
    };
  }
  var n = t.getBoundingClientRect(), i = n.bottom, r = n.left, s = n.right, o = n.top;
  return {
    bottom: i,
    left: r,
    right: s,
    top: o
  };
}, Pl = function(t) {
  for (var e = t.offsetParent; e && e.style.position === "static"; )
    e = e.offsetParent;
  return e || t.ownerDocument.documentElement;
}, g0 = function(t) {
  var e = t.style, n = e.display, i = e.left, r = e.position;
  t.style.display = "", t.style.left = "-10000px", t.style.position = "absolute";
  var s = t.getBoundingClientRect();
  return t.style.display = n, t.style.left = i, t.style.position = r, {
    top: s.top,
    left: s.left,
    height: s.height,
    width: s.width
  };
}, Ir = function(t) {
  var e = t.getBoundingClientRect(), n = e.left, i = e.top;
  return !e.height && !e.width && (e = g0(t)), {
    top: i,
    left: n,
    height: e.height,
    width: e.width
  };
}, Wh = function(t, e) {
  for (var n = [], i = t.parentNode; i && (n.push(i), i !== e); )
    i = i.parentNode;
  return n;
}, Zh = function(t) {
  var e = Hh(t), n = Tl(t);
  return {
    x: n.pageXOffset || e.scrollLeft || 0,
    y: n.pageYOffset || e.scrollTop || 0
  };
}, qh = function(t) {
  return t === (t.ownerDocument || {}).body ? Zh(t) : {
    x: t.scrollLeft,
    y: t.scrollTop
  };
}, b0 = function(t) {
  var e = Pl(t);
  return e ? qh(e) : { x: 0, y: 0 };
}, y0 = function(t, e) {
  var n = Tl(t), i = n.getComputedStyle(t), r = Ir(t), s = e || Pl(t), o = t.ownerDocument, a = s !== o.body && s !== o.documentElement, u = { top: 0, left: 0 };
  if (i.position !== "fixed" && a) {
    var d = n.getComputedStyle(s);
    u = Ir(s), u.top += parseFloat(d.borderTopWidth), u.left += parseFloat(d.borderLeftWidth);
  }
  return {
    top: r.top - u.top,
    left: r.left - u.left,
    height: r.height,
    width: r.width
  };
}, x0 = function(t, e) {
  return t ? qh(t) : b0(e);
}, w0 = function(t, e, n) {
  n === void 0 && (n = 1);
  var i = e ? Pl(e) : null, r = y0(t, i), s = r.top, o = r.left, a = r.height, u = r.width, d = x0(i, t), f = d.x, y = d.y, c = t.ownerDocument, m = i === c.body || i === c.documentElement ? 1 : n;
  return {
    top: s + y * m,
    left: o + f * m,
    height: a,
    width: u
  };
}, $0 = function(t, e) {
  return {
    top: t.top - e.y,
    left: t.left - e.x,
    height: t.height,
    width: t.width
  };
}, Pt;
(function(t) {
  t.fit = "fit", t.flip = "flip", t.none = "none";
})(Pt || (Pt = {}));
var Du = function(t, e, n) {
  var i = 0;
  return t + e > n && (i = n - (t + e)), t < 0 && (i = -t), i;
}, Cu = function(t) {
  var e = t.offset, n = t.size, i = t.anchorSize, r = t.viewPortSize, s = t.anchorAlignPoint, o = t.elementAlignPoint, a = t.margin, u = 0, d = o === Ee.center || o === Ee.middle, f = s === Ee.center || s === Ee.middle, y = 2 * a;
  if (o !== s && !d && !f) {
    var c = s === Ee.top || s === Ee.left;
    e < 0 && c ? (u = n + i + y, e + u + n > r && (u = 0)) : e >= 0 && !c && (e + n > r && (u += -(i + n + y)), e + u < 0 && (u = 0));
  }
  return u;
}, E0 = function(t) {
  var e = t.anchorRect, n = t.anchorAlign, i = t.elementRect, r = t.elementAlign, s = t.collisions, o = t.viewPort, a = t.margin, u = a === void 0 ? {} : a, d = i.top, f = i.left, y = i.height, c = i.width, m = o.height, S = o.width, k = u.horizontal || 0, C = u.vertical || 0, h = 0, b = 0, w = s.vertical === Pt.fit, E = s.horizontal === Pt.fit, $ = s.vertical === Pt.flip, D = s.horizontal === Pt.flip;
  w && (b += Du(d, y, m)), E && (h += Du(f, c, S)), $ && (b += Cu({
    margin: C,
    offset: d,
    size: y,
    anchorSize: e.height,
    viewPortSize: m,
    anchorAlignPoint: n.vertical,
    elementAlignPoint: r.vertical
  })), D && (h += Cu({
    margin: k,
    offset: f,
    size: c,
    anchorSize: e.width,
    viewPortSize: S,
    anchorAlignPoint: n.horizontal,
    elementAlignPoint: r.horizontal
  }));
  var T = $ && b !== 0, O = D && h !== 0, A = w && b !== 0, L = E && h !== 0;
  return {
    flipped: O || T,
    fitted: A || L,
    flip: {
      horizontal: O,
      vertical: T
    },
    fit: {
      horizontal: L,
      vertical: A
    },
    offset: {
      left: h,
      top: b
    }
  };
}, S0 = function(t) {
  for (var e, n = [], i = (e = t.parentNode) === null || e === void 0 ? void 0 : e.firstElementChild; i; )
    i !== t && n.push(i), i = i.nextElementSibling;
  return n;
}, k0 = function(t, e) {
  for (var n = Wh(t), i = e, r, s; i && (r = S0(i), s = n.reduce(function(o, a) {
    return o.concat(r.filter(function(u) {
      return u === a;
    }));
  }, [])[0], !s); )
    i = i.parentElement;
  return s;
}, D0 = function(t, e) {
  return t || { height: 0, left: e.left, top: e.top, width: 0 };
}, C0 = function(t, e) {
  return !t || e === 1 ? t : {
    height: t.height / e,
    left: t.left / e,
    top: t.top / e,
    width: t.width / e
  };
}, I0 = function(t, e) {
  return e ? {
    height: t.height,
    left: t.left - e.left,
    top: t.top - e.top,
    width: t.width
  } : t;
};
function M0(t) {
  var e = this, n, i = !1;
  return function() {
    for (var r = [], s = 0; s < arguments.length; s++)
      r[s] = arguments[s];
    return i || (n = t.apply(e, r), i = !0), n;
  };
}
var O0 = M0(function(t) {
  if (!Yh())
    return !1;
  var e = t ? t.ownerDocument : document;
  if (!e || !e.body)
    return !1;
  var n = 10, i = e.createElement("div");
  i.style.transform = "matrix(10, 0, 0, 10, 0, 0)", i.innerHTML = '<div style="position: fixed; top: '.concat(n, 'px;">child</div>'), e.body.appendChild(i);
  var r = i.children[0].getBoundingClientRect().top !== n;
  return e.body.removeChild(i), r;
}), Yh = function() {
  return !!(typeof window < "u" && window.document && // eslint-disable-next-line
  window.document.createElement);
}, zt = {
  eitherRect: D0,
  scaleRect: C0,
  removeStackingOffset: I0,
  hasRelativeStackingContext: O0,
  canUseDOM: Yh
}, N0 = [
  "font-size",
  "font-family",
  "font-stretch",
  "font-style",
  "font-weight",
  "line-height"
], T0 = function(t, e) {
  return {
    left: t.left + e.left,
    top: t.top + e.top
  };
}, Kh = function() {
  return zt.canUseDOM() ? window : null;
}, P0 = function(t) {
  var e = Kh();
  if (!e || !t)
    return [];
  var n = e.getComputedStyle(t);
  return N0.map(function(i) {
    return { key: i, value: n[i] };
  });
}, R0 = function(t) {
  return t ? !!t.offsetParent : !1;
}, A0 = function(t) {
  return t ? Ir(t) : null;
}, _0 = function(t, e) {
  if (!t)
    return null;
  var n = t.style, i = n.left, r = n.top, s = n.transition;
  t.style.transition = "none", t.style.left = "".concat(e.left, "px"), t.style.top = "".concat(e.top, "px");
  var o = Ir(t);
  return t.style.left = i, t.style.top = r, t.offsetHeight, t.style.transition = s, o;
}, z0 = function(t, e, n) {
  if (!t || !e)
    return null;
  var i = n || 1;
  return w0(t, e, i);
}, j0 = /auto|scroll/, F0 = function(t) {
  return "".concat(window.getComputedStyle(t).overflow);
}, L0 = function(t) {
  var e = window.getComputedStyle(t);
  return "".concat(e.overflow).concat(e.overflowX).concat(e.overflowY);
}, V0 = function(t) {
  return F0(t) || L0(t);
}, B0 = function(t) {
  var e = [];
  if (!zt.canUseDOM())
    return e;
  for (var n = t.parentElement; n; )
    (j0.test(V0(n)) || n.hasAttribute("data-scrollable")) && e.push(n), n = n.parentElement;
  return e.push(window), e;
}, jr = function(t) {
  if (!t || !zt.hasRelativeStackingContext())
    return null;
  for (var e = t.parentElement; e; ) {
    if (window.getComputedStyle(e).transform !== "none")
      return e;
    e = e.parentElement;
  }
  return null;
}, H0 = function(t) {
  var e = jr(t);
  return e ? Ir(e) : null;
}, U0 = function(t) {
  var e = jr(t);
  return e ? {
    x: e.scrollLeft,
    y: e.scrollTop
  } : { x: 0, y: 0 };
}, W0 = function(t) {
  var e = jr(t);
  return e ? {
    height: e.scrollHeight,
    width: e.scrollWidth
  } : null;
}, Z0 = function(t) {
  return !!jr(t);
}, Gh = function() {
  return zt.canUseDOM() && parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
}, q0 = function() {
  return Gh() > 1;
}, Y0 = function(t, e) {
  if (!t || !zt.canUseDOM())
    return null;
  var n = k0(t, e);
  if (!n)
    return null;
  var i = [t].concat(Wh(t, n)).reduce(function(r, s) {
    var o = s.style.zIndex || window.getComputedStyle(s).zIndex, a = parseInt(o, 10);
    return a > r ? a : r;
  }, 0);
  return i ? i + 1 : null;
}, Et = {
  addOffset: T0,
  addScroll: m0,
  align: p0,
  boundingOffset: v0,
  getFontStyles: P0,
  getWindow: Kh,
  hasOffsetParent: R0,
  offset: A0,
  offsetAtPoint: _0,
  position: z0,
  removeScroll: $0,
  restrictToView: E0,
  scrollPosition: Zh,
  scrollableParents: B0,
  getRelativeContextElement: jr,
  stackingElementOffset: H0,
  stackingElementScroll: U0,
  stackingElementViewPort: W0,
  useRelativePosition: Z0,
  windowViewport: Uh,
  zoomLevel: Gh,
  isZoomed: q0,
  zIndex: Y0
}, K0 = function(t, e, n, i) {
  var r = J0(t, e), s = zt.eitherRect(Et.offset(t), n), o = 2 * i, a = Et.stackingElementScroll(e);
  i !== 1 && a && (a.x /= o, a.y /= o);
  var u = Et.stackingElementOffset(e);
  return i !== 1 && u && (u.left /= o, u.top /= o), Et.removeScroll(Et.addScroll(zt.removeStackingOffset(zt.scaleRect(s, i), u), a), r);
}, G0 = function(t, e, n, i) {
  var r = zt.eitherRect(Et.position(t, e, i), n);
  return zt.scaleRect(r, i);
}, J0 = function(t, e) {
  return t ? { x: 0, y: 0 } : Et.scrollPosition(e);
}, Q0 = function(t) {
  var e = t.anchor, n = t.element, i = t.anchorAlign, r = t.elementAlign, s = t.margin, o = t.offset, a = t.positionMode, u = t.scale, d = u || 1, f = a === "fixed" || !Et.hasOffsetParent(n), y = f ? K0(e, n, o, d) : G0(e, n, o, d), c = zt.scaleRect(Et.offset(n), d), m = Et.align({
    anchorAlign: i,
    anchorRect: y,
    elementAlign: r,
    elementRect: c,
    margin: s
  });
  return m;
}, X0 = function(t) {
  var e = t.anchor, n = t.currentLocation, i = t.element, r = t.anchorAlign, s = t.elementAlign, o = t.collisions, a = t.margin, u = t.scale, d = u || 1, f = Et.offsetAtPoint(i, n), y = zt.scaleRect(f, d), c = zt.scaleRect(Et.offset(e), d), m = zt.eitherRect(c, n), S = t.viewPort || Et.windowViewport(i);
  S.width = S.width / d, S.height = S.height / d;
  var k = Et.restrictToView({
    anchorAlign: r,
    anchorRect: m,
    collisions: o,
    elementAlign: s,
    elementRect: y,
    margin: a,
    viewPort: S
  }), C = Et.addOffset(n, k.offset);
  return {
    flip: k.flip,
    flipped: k.flipped,
    fit: k.fit,
    fitted: k.fitted,
    offset: C
  };
};
const e$ = 16.666666666666668, t$ = function(t, e, n = {}) {
  let i, r, s, o, a = 0;
  n = n || {};
  const u = function() {
    a = n.leading === !1 ? 0 : (/* @__PURE__ */ new Date()).getTime(), i = void 0, o = t.apply(r, s), i || (r = s = null);
  };
  return function() {
    const d = (/* @__PURE__ */ new Date()).getTime();
    !a && n.leading === !1 && (a = d);
    const f = e - (d - a);
    return r = void 0, s = arguments, f <= 0 || f > e ? (i && (clearTimeout(i), i = void 0), a = d, o = t.apply(r, s), i || (r = s = null)) : !i && n.trailing !== !1 && (i = window.setTimeout(u, f)), o;
  };
};
const n$ = p.createContext((t) => t), i$ = 100, r$ = 1;
function $i(t, e) {
  if (t === e)
    return !0;
  if (!!t != !!e)
    return !1;
  const n = Object.getOwnPropertyNames(t), i = Object.getOwnPropertyNames(e);
  if (n.length !== i.length)
    return !1;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (t[s] !== e[s])
      return !1;
  }
  return !0;
}
const s$ = {
  left: -1e3,
  top: 0
}, An = p.forwardRef((t, e) => {
  const n = p.useContext(n$).call(void 0, t), {
    collision: i = Fn.collision,
    anchorAlign: r = Fn.anchorAlign,
    popupAlign: s = Fn.popupAlign,
    offset: o = Fn.offset,
    animate: a = Fn.animate,
    show: u = Fn.show,
    margin: d = Fn.margin,
    positionMode: f = Fn.positionMode,
    appendTo: y,
    contentKey: c,
    anchor: m,
    scale: S,
    role: k,
    onKeyDown: C,
    onPosition: h,
    onOpen: b,
    onMouseDownOutside: w,
    onClose: E,
    className: $,
    popupClass: D,
    id: T,
    style: O,
    children: A
  } = n, L = pn(), B = n.unstyled || L, X = B && B.uPopup, [z, Q] = p.useState({
    current: "hidden",
    previous: "hidden",
    props: {}
  }), H = a && typeof a != "object" ? Iu : { ...Iu, ...a }, V = (oe) => {
    window?.addEventListener("mousedown", M), re(oe), Y(oe.firstChild, "enter", P), Q({ ...be, current: "shown", previous: be.current });
  }, re = (oe) => {
    const { width: Ie, height: Ke } = oe.style;
    if (oe.offsetWidth === 0 && oe.offsetHeight === 0)
      return;
    oe.style.width = oe.offsetWidth + "px", oe.style.height = oe.offsetHeight + "px";
    const He = Q0({
      anchor: m,
      anchorAlign: r,
      element: oe,
      elementAlign: s,
      offset: o,
      margin: d,
      positionMode: f,
      scale: S
    }), je = X0({
      anchor: m,
      anchorAlign: r,
      element: oe,
      elementAlign: s,
      collisions: i,
      currentLocation: He,
      margin: d
    });
    if (oe.style.top = je.offset.top + "px", oe.style.left = je.offset.left + "px", oe.style.width = Ie, oe.style.height = Ke, se.current = {
      fit: je.fit,
      fitted: je.fitted,
      flip: je.flip,
      flipped: je.flipped
    }, h) {
      const Mt = {
        target: W.current,
        flipped: je.flipped,
        fitted: je.fitted
      };
      h.call(void 0, Mt);
    }
  }, P = () => {
    const oe = ve.current;
    oe && (u && oe.classList.add(
      ...N(si.animationContainerShown({ c: X })).split(" ").filter((Ie) => Ie)
    ), G(oe), b && b.call(void 0, { target: W.current }));
  }, Y = (oe, Ie, Ke) => {
    if (s) {
      if (H.type === "slide") {
        let He;
        const { horizontal: je, vertical: Mt } = s;
        typeof t.animate == "object" && t.animate.direction ? He = H.direction : je === "left" && Mt === "center" ? He = "right" : je === "right" && Mt === "center" ? He = "left" : Mt === "top" ? He = "down" : He = "up";
        const gt = {
          down: "up",
          up: "down",
          left: "right",
          right: "left"
        };
        se.current && se.current.flipped && (He = gt[He], ku(
          oe,
          Z()[Ie],
          Ie,
          Ke,
          X,
          H.type,
          He
        ));
      }
      ku(
        oe,
        Z()[Ie],
        Ie,
        Ke,
        X,
        H.type,
        H.direction
      );
    }
  }, M = (oe) => {
    var Ie;
    const Ke = ((Ie = oe?.target) == null ? void 0 : Ie.closest(".k-animation-container")) === null, He = m?.contains(oe?.target) || !1;
    if (Ke) {
      if (w) {
        const je = {
          target: W.current,
          event: oe,
          state: z,
          isAnchorClicked: He
        };
        w.call(void 0, je);
      }
      window?.removeEventListener("mousedown", M);
    }
  }, I = (oe) => {
    if (!u) {
      const Ie = B && B.uPopup;
      oe.classList.remove(
        ...N(si.animationContainerShown({ c: Ie })).split(" ").filter((Ke) => Ke)
      );
    }
    q();
  }, j = () => {
    be.current === "hiding" && (be.previous === "shown" || be.previous === "reposition") && Q({ ...be, current: "hidden", previous: be.current }), E && E.call(void 0, { target: W.current });
  }, Z = () => {
    const oe = a;
    let Ie = 0, Ke = 0;
    return oe && (oe === !0 ? Ie = Ke = 300 : (Ie = oe.openDuration || 0, Ke = oe.closeDuration || 0)), { enter: Ie, exit: Ke };
  }, G = (oe) => {
    q(), ce.current = Et.scrollableParents(m || oe), ce.current && ce.current.map((Ie) => Ie.addEventListener("scroll", ae)), window.addEventListener("resize", ae);
  }, q = () => {
    ce.current && (ce.current.map((oe) => oe.removeEventListener("scroll", ae)), ce.current = void 0), window.removeEventListener("resize", ae);
  }, ae = t$(() => {
    ve.current && be.current !== "hidden" && be.current !== "hiding" && Q({ ...z, current: "reposition", previous: be.current });
  }, e$), _ = () => K ? K + r$ : i$, K = Kd() || 0, se = p.useRef(void 0), ce = p.useRef(void 0), ve = p.useRef(null), W = p.useRef(null), st = p.useRef({}), Te = p.useRef(!1);
  p.useImperativeHandle(W, () => ({
    element: ve.current,
    setPosition: re,
    props: t
  })), p.useImperativeHandle(e, () => W.current);
  const be = p.useMemo(() => {
    const oe = {
      ...z,
      props: {
        show: u,
        anchor: m,
        anchorAlign: r,
        appendTo: y,
        collision: i,
        popupAlign: s,
        className: $,
        popupClass: D,
        style: O,
        offset: o,
        contentKey: c
      }
    };
    return u ? z.current === "hidden" || z.current === "hiding" ? { ...oe, current: "showing", previous: z.current } : z.current === "showing" ? { ...oe, current: "shown", previous: z.current } : z.current === "shown" && (!$i(o, z.props.offset) || !$i(r, z.props.anchorAlign) || !$i(y, z.props.appendTo) || !$i(i, z.props.collision) || !$i(s, z.props.popupAlign) || !$i(O, z.props.style) || m !== z.props.anchor || D !== z.props.popupClass || $ !== z.props.className) ? { ...oe, current: "reposition", previous: z.current } : oe : z.current === "hiding" || z.current === "hidden" ? { ...oe, current: "hidden", previous: z.current } : { ...oe, current: "hiding", previous: z.current };
  }, [
    u,
    m,
    r,
    y,
    i,
    s,
    $,
    D,
    O,
    o,
    c,
    z
  ]);
  p.useEffect(() => {
    be.current === "hiding" && !Te.current && ve.current ? (Te.current = !0, I(ve.current), Y(ve.current.firstChild, "exit", j)) : (Te.current = !1, be.current === "showing" && ve.current && !ve.current.classList.contains("k-animation-container-shown") ? V(ve.current) : be.current === "hiding" && ve.current ? j() : be.current === "reposition" && be.previous === "shown" ? setTimeout(() => {
      Q({ ...be, current: "shown", previous: be.current });
    }, 0) : be.current === "shown" && st.current.contentKey !== c && ve.current && re(ve.current)), be.current === "reposition" && (be.previous === "shown" || be.previous === "showing") && ve.current && re(ve.current), st.current = { contentKey: c };
  }, [be]), p.useEffect(() => (be.current === "showing" && ve.current && V(ve.current), () => {
    q();
  }), []);
  const $e = y || (Dt ? m && m.ownerDocument ? m.ownerDocument.body : document.body : void 0), ht = Object.assign(
    {},
    { position: f, top: 0, left: -1e4 },
    O || {}
  ), ye = be.current === "hiding";
  if ((u || ye) && $e) {
    const oe = _(), Ie = /* @__PURE__ */ p.createElement(Zs.Provider, { value: oe }, /* @__PURE__ */ p.createElement(
      "div",
      {
        onKeyDown: C,
        className: N(si.animationContainer({ c: X }), $),
        id: T,
        ref: ve,
        style: {
          zIndex: oe,
          ...ht
        }
      },
      /* @__PURE__ */ p.createElement(
        "div",
        {
          className: N(si.animationChild({ c: X })),
          style: { transitionDelay: "0ms" }
        },
        /* @__PURE__ */ p.createElement("div", { role: k, className: N(si.popup({ c: X }), D) }, A)
      )
    ));
    return y !== null ? pd.createPortal(Ie, $e) : Ie;
  }
  return null;
}), Fn = {
  collision: {
    horizontal: Pt.fit,
    vertical: Pt.flip
  },
  anchorAlign: {
    horizontal: Ee.left,
    vertical: Ee.bottom
  },
  popupAlign: {
    horizontal: Ee.left,
    vertical: Ee.top
  },
  offset: s$,
  animate: !0,
  show: !1,
  margin: {
    horizontal: 0,
    vertical: 0
  },
  positionMode: "absolute"
}, Iu = {
  type: "slide",
  direction: "down"
};
An.displayName = "Popup";
An.propTypes = {
  anchor: function(t) {
    const e = t.anchor;
    return e && typeof e.nodeType != "number" ? new Error("Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed.") : null;
  },
  appendTo: function(t) {
    const e = t.appendTo;
    return e && typeof e.nodeType != "number" ? new Error("Invalid prop `appendTo` supplied to `Kendo React Popup`. Validation failed.") : null;
  },
  className: l.oneOfType([l.string, l.arrayOf(l.string.isRequired)]),
  id: l.string,
  popupClass: l.oneOfType([l.string, l.arrayOf(l.string), l.object]),
  collision: l.shape({
    horizontal: l.oneOf([Pt.fit, Pt.flip, Pt.none]),
    vertical: l.oneOf([Pt.fit, Pt.flip, Pt.none])
  }),
  anchorAlign: l.shape({
    horizontal: l.oneOf([Ee.left, Ee.center, Ee.right]),
    vertical: l.oneOf([Ee.top, Ee.center, Ee.bottom])
  }),
  popupAlign: l.shape({
    horizontal: l.oneOf([Ee.left, Ee.center, Ee.right]),
    vertical: l.oneOf([Ee.top, Ee.center, Ee.bottom])
  }),
  offset: l.shape({
    left: l.number,
    top: l.number
  }),
  children: l.oneOfType([l.element, l.node]),
  show: l.bool,
  animate: l.oneOfType([
    l.bool,
    l.shape({
      type: l.oneOf(["slide", "zoom", "push", "expand", "fade"]),
      openDuration: l.number,
      closeDuration: l.number
    })
  ]),
  margin: l.shape({
    horizontal: l.number,
    vertical: l.number
  }),
  positionMode: l.oneOf(["fixed", "absolute"]),
  scale: l.number,
  style: l.object,
  onClose: l.func,
  onPosition: l.func,
  onOpen: l.func,
  onKeyDown: l.func,
  onMouseDownOutside: l.func
};
function Jh(t) {
  const e = { horizontal: "left", vertical: "bottom" };
  return t && (e.horizontal = "right"), e;
}
function Qh(t) {
  const e = { horizontal: "left", vertical: "top" };
  return t && (e.horizontal = "right"), e;
}
const js = Object.freeze({
  name: "@progress/kendo-react-buttons",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1765978853,
  version: "13.2.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
});
const ga = class extends p.Component {
  constructor(e) {
    super(e), this.state = {
      focused: !1,
      focusedIndex: -1,
      opened: !1
    }, this.wrapper = null, this.mainButton = null, this.list = null, this.skipFocus = !1, this.buttonsData = [], this.showLicenseWatermark = !1, this.onKeyDown = (n) => {
      const { focusedIndex: i } = this.state;
      if (n.altKey) {
        !this.opened && n.keyCode === U.down ? (n.preventDefault(), this.setState({ focusedIndex: 0 }), this.setOpen(!0, n)) : this.opened && n.keyCode === U.up && (n.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, n));
        return;
      }
      let r;
      if (n.keyCode === U.enter || n.keyCode === U.space) {
        if (n.preventDefault(), this.dispatchClickEvent(n, i), i >= 0) {
          r = {
            focusedIndex: this.opened ? -1 : 0
          };
          const s = !this.opened;
          this.setOpen(s, n);
        }
      } else if (this.opened && n.keyCode === U.esc) {
        this.setState({ focusedIndex: -1 }), this.setOpen(!1, n);
        return;
      }
      if (this.opened) {
        const s = Vh(i, n.keyCode, n.altKey, this.buttonsData.length);
        s !== i && (r = r || {}, r.focusedIndex = s);
        const o = n.keyCode === U.up || n.keyCode === U.down || n.keyCode === U.left || n.keyCode === U.right;
        !n.altKey && (o || n.keyCode === U.home || n.keyCode === U.end) && n.preventDefault();
      }
      r && this.setState(r);
    }, this.switchFocus = (n) => {
      this.skipFocus = !0, n(), window.setTimeout(() => this.skipFocus = !1, 0);
    }, this.onFocus = (n) => {
      this.skipFocus || (tn(this.props.onFocus, n, this, void 0), this.setState({ focused: !0 }));
    }, this.setOpen = (n, i) => {
      this.opened !== n && (this.openedDuringOnChange = n, this.setState({ opened: n }), i ? this.dispatchPopupEvent(i, n) : this.openedDuringOnChange = void 0);
    }, this.onItemClick = (n, i) => {
      this.opened && this.setState({ focusedIndex: 0 }), this.dispatchClickEvent(n, i), this.setOpen(!1, n);
    }, this.onBlur = (n) => {
      this.skipFocus || (this.setState({
        focused: !1,
        focusedIndex: -1
      }), tn(this.props.onBlur, n, this, void 0), setTimeout(() => {
        this.setOpen(!1, n);
      }, 0));
    }, this.onPopupClose = (n) => {
      var i;
      const r = At(document);
      this.element && this.element.removeAttribute("tabindex"), (r === this.list || (i = this.list) != null && i.contains(r)) && this.switchFocus(() => {
        this.element && this.element.focus({ preventScroll: !0 });
      }), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, n);
    }, this.listRef = (n) => {
      this.list = n, n && this.state.focused && this.switchFocus(() => {
        n.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
      });
    }, this.onSplitPartClick = (n) => {
      if (this.buttonsData.length) {
        const i = !this.opened;
        this.setState({
          focusedIndex: i ? 0 : -1,
          focused: !0
        }), this.setOpen(i, n);
      }
    }, this.onDownSplitPart = (n) => {
      n.preventDefault();
      const i = At(document);
      this.element && i !== this.element && i !== this.list && this.element.focus();
    }, this.onItemDown = (n) => {
      At(document) === this.list && n.preventDefault();
    }, this.dispatchPopupEvent = (n, i) => {
      tn(i ? this.props.onOpen : this.props.onClose, n, this, void 0), this.openedDuringOnChange = void 0;
    }, this.showLicenseWatermark = !Pr(js, { component: "SplitButton" }), this.licenseMessage = Rr(js);
  }
  get guid() {
    return this.props.id ? this.props.id + "-accessibility-id" : this.props.id;
  }
  get opened() {
    return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
  }
  /**
   * @hidden
   */
  render() {
    this.buttonsData = this.props.items || p.Children.toArray(this.props.children).filter((a) => a && a.type === d0).map((a) => a.props);
    const e = this.isRtl(), n = e ? "rtl" : void 0, { id: i, style: r, tabIndex: s, disabled: o } = this.props;
    return /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
      "div",
      {
        id: i,
        style: r,
        className: N(
          "k-split-button",
          "k-button-group",
          {
            "k-focus": this.state.focused
          },
          `k-rounded-${kr.roundedMap[this.props.rounded || "medium"]}`,
          this.props.className
        ),
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        dir: n,
        ref: (a) => {
          this.wrapper = a;
        }
      },
      /* @__PURE__ */ p.createElement(
        Be,
        {
          ref: (a) => {
            this.mainButton = a && a.element;
          },
          type: "button",
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          themeColor: this.props.themeColor,
          onClick: (a) => this.onItemClick(a, -1),
          disabled: o || void 0,
          tabIndex: s,
          accessKey: this.props.accessKey,
          className: this.props.buttonClass,
          icon: this.props.icon,
          svgIcon: this.props.svgIcon,
          iconClass: this.props.iconClass,
          startIcon: this.props.startIcon,
          endIcon: this.props.endIcon,
          imageUrl: this.props.imageUrl,
          dir: n,
          "aria-disabled": o,
          "aria-haspopup": !0,
          "aria-expanded": this.opened || void 0,
          "aria-label": this.props.ariaLabel,
          "aria-controls": this.opened ? this.guid : void 0,
          id: "button-" + this.guid,
          title: this.props.title
        },
        this.props.text
      ),
      /* @__PURE__ */ p.createElement(
        Be,
        {
          type: "button",
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          themeColor: this.props.themeColor,
          icon: "caret-alt-down",
          svgIcon: Ys,
          className: "k-split-button-arrow",
          disabled: o || void 0,
          tabIndex: -1,
          onClick: this.onSplitPartClick,
          onMouseDown: this.onDownSplitPart,
          onPointerDown: this.onDownSplitPart,
          dir: n,
          "aria-label": "menu toggling button"
        }
      ),
      this.renderPopup(e)
    ), this.showLicenseWatermark && /* @__PURE__ */ p.createElement(Ar, { message: this.licenseMessage }));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    (this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
  }
  /**
   * The DOM element of main button.
   */
  get element() {
    return this.mainButton;
  }
  dispatchClickEvent(e, n) {
    this.isItemDisabled(n) || (n === -1 ? tn(this.props.onButtonClick, e, this, void 0) : tn(this.props.onItemClick, e, this, {
      item: this.buttonsData[n],
      itemIndex: n
    }));
  }
  renderPopup(e) {
    const { popupSettings: n = {} } = this.props, { focusedIndex: i } = this.state;
    return /* @__PURE__ */ p.createElement(
      An,
      {
        anchor: this.wrapper,
        show: this.opened,
        animate: n.animate,
        popupClass: N("k-menu-popup", n.popupClass),
        anchorAlign: n.anchorAlign || Jh(e),
        popupAlign: n.popupAlign || Qh(e),
        style: e ? { direction: "rtl" } : void 0,
        onClose: this.onPopupClose
      },
      /* @__PURE__ */ p.createElement(
        "ul",
        {
          role: "menu",
          id: this.guid,
          "aria-labelledby": "button-" + this.guid,
          tabIndex: -1,
          ref: this.listRef,
          "aria-activedescendant": i >= 0 ? `${this.guid}-${i}` : void 0,
          className: N("k-menu-group", {
            [`k-menu-group-${kr.sizeMap[this.props.size] || this.props.size}`]: this.props.size
          })
        },
        this.renderChildItems()
      )
    );
  }
  renderChildItems() {
    const { item: e, itemRender: n, textField: i } = this.props;
    return this.buttonsData.length > 0 ? this.buttonsData.map((r, s) => /* @__PURE__ */ p.createElement(
      Nl,
      {
        className: N(
          "k-menu-item",
          { "k-first": s === 0 },
          { "k-last": s === this.buttonsData.length - 1 }
        ),
        dataItem: r,
        textField: i,
        focused: this.state.focusedIndex === s,
        onClick: this.onItemClick,
        onDown: this.onItemDown,
        render: n,
        item: e,
        key: s,
        index: s,
        id: `${this.guid}-${s}`
      }
    )) : null;
  }
  isItemDisabled(e) {
    return this.buttonsData[e] ? this.buttonsData[e].disabled : this.props.disabled;
  }
  isRtl() {
    return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.wrapper && getComputedStyle(this.wrapper).direction === "rtl";
  }
};
ga.propTypes = {
  accessKey: l.string,
  ariaLabel: l.string,
  title: l.string,
  onButtonClick: l.func,
  onFocus: l.func,
  onBlur: l.func,
  onItemClick: l.func,
  onOpen: l.func,
  onClose: l.func,
  text: l.string,
  items: l.arrayOf(l.any),
  textField: l.string,
  tabIndex: l.number,
  disabled: l.bool,
  icon: l.string,
  svgIcon: yl,
  imageUrl: l.string,
  popupSettings: l.object,
  itemRender: l.any,
  item: l.func,
  className: l.string,
  buttonClass: l.string,
  dir: l.string
}, ga.defaultProps = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
let o$ = ga;
const Xh = class extends p.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
Xh.propTypes = {
  text: l.string,
  icon: l.string,
  iconClass: l.string,
  imageUrl: l.string,
  selected: l.bool,
  disabled: l.bool,
  render: l.any
};
let a$ = Xh;
const l$ = 12e3, c$ = 2e3, ba = class extends p.Component {
  constructor(e) {
    super(e), this.state = {
      opened: !1,
      focused: !1,
      focusedIndex: -1
    }, this.mainButton = null, this.list = null, this.skipFocus = !1, this.showLicenseWatermark = !1, this.buttonsData = [], this.onKeyDown = (n) => {
      const { focusedIndex: i } = this.state;
      if (n.altKey) {
        !this.opened && n.keyCode === U.down ? (n.preventDefault(), this.setOpen(!0, n), this.setState({ focusedIndex: 0 })) : this.opened && n.keyCode === U.up && (n.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, n));
        return;
      }
      const r = { ...this.state };
      if (n.keyCode === U.enter || n.keyCode === U.space) {
        n.preventDefault(), i >= 0 && this.dispatchClickEvent(n, i);
        const s = !this.opened;
        this.setState({
          focused: !0,
          focusedIndex: s ? 0 : -1
        }), this.setOpen(s, n);
        return;
      }
      if (this.opened && n.keyCode === U.esc) {
        this.setState({ focusedIndex: -1 }), this.setOpen(!1, n);
        return;
      }
      if (this.opened) {
        const s = Vh(i, n.keyCode, n.altKey, this.buttonsData.length);
        r.focusedIndex = s;
        const o = n.keyCode === U.up || n.keyCode === U.down || n.keyCode === U.left || n.keyCode === U.right;
        !n.altKey && (o || n.keyCode === U.home || n.keyCode === U.end) && n.preventDefault();
      }
      this.setState(r);
    }, this.switchFocus = (n) => {
      this.skipFocus = !0, n(), window.setTimeout(() => this.skipFocus = !1, 0);
    }, this.handleFocus = (n) => {
      this.skipFocus || (this.setState({ focused: !0, focusedIndex: this.opened ? 0 : -1 }), tn(this.props.onFocus, n, this, void 0));
    }, this.handleButtonBlur = (n) => {
      this.opened || (this.setState({ focused: !1 }), tn(this.props.onBlur, n, this, void 0));
    }, this.handleMenuBlur = (n) => {
      this.skipFocus || (this.setState({ focused: !1, focusedIndex: -1 }), tn(this.props.onBlur, n, this, void 0), setTimeout(() => {
        this.setOpen(!1, n);
      }, 0));
    }, this.setOpen = (n, i) => {
      this.opened !== n && (this.openedDuringOnChange = n, this.setState({ opened: n }), i ? this.dispatchPopupEvent(i, n) : this.openedDuringOnChange = void 0);
    }, this.onItemClick = (n, i) => {
      this.setState({ focusedIndex: -1 }), this.dispatchClickEvent(n, i), this.setOpen(!1, n);
    }, this.onItemDown = (n) => {
      At(document) === this.list && n.preventDefault();
    }, this.mouseDown = (n) => {
      n.preventDefault();
      const i = At(document);
      this.element && i !== this.element && i !== this.list && this.element.focus();
    }, this.onPopupClose = (n) => {
      var i;
      const r = At(document);
      this.element && this.element.removeAttribute("tabindex"), (r === this.list || (i = this.list) != null && i.contains(r)) && this.switchFocus(() => {
        this.element && this.element.focus({ preventScroll: !0 });
      }), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, n);
    }, this.listRef = (n) => {
      this.list = n, n && this.state.focused && this.switchFocus(() => {
        n.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
      });
    }, this.onClickMainButton = (n) => {
      if (tn(this.props.onClick, n, this, void 0), !this.buttonsData.length)
        return;
      const i = !this.opened;
      this.setState({
        focused: !0,
        focusedIndex: i ? 0 : -1
      }), this.setOpen(i, n);
    }, this.dispatchPopupEvent = (n, i) => {
      tn(i ? this.props.onOpen : this.props.onClose, n, this, void 0), this.openedDuringOnChange = void 0;
    }, this.showLicenseWatermark = !Pr(js, { component: "DropDownButton" }), this.licenseMessage = Rr(js);
  }
  get guid() {
    return this.props.id + "-accessibility-id";
  }
  get opened() {
    return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
  }
  /**
   * @hidden
   */
  render() {
    const e = this.isRtl(), n = this.props.unstyled && this.props.unstyled.uDropDownButton, i = e ? "rtl" : void 0, {
      id: r,
      style: s,
      tabIndex: o,
      disabled: a,
      size: u,
      rounded: d,
      fillMode: f,
      themeColor: y,
      ariaLabel: c,
      title: m,
      accessKey: S,
      icon: k,
      svgIcon: C,
      iconClass: h,
      buttonClass: b,
      className: w,
      imageUrl: E,
      startIcon: $,
      endIcon: D
    } = this.props;
    return this.buttonsData = this.props.items || p.Children.toArray(this.props.children).filter((T) => T && T.type === a$).map((T) => T.props), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
      Be,
      {
        id: r,
        size: u,
        style: s,
        rounded: d,
        fillMode: f,
        themeColor: y,
        onClick: this.onClickMainButton,
        onMouseDown: this.mouseDown,
        onKeyDown: this.onKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleButtonBlur,
        "aria-disabled": a ? "true" : void 0,
        tabIndex: o,
        accessKey: S,
        icon: k,
        svgIcon: C,
        iconClass: h,
        className: N(
          b,
          w,
          zi.wrapper({
            c: n,
            focused: this.state.focused,
            disabled: a
          })
        ),
        imageUrl: E,
        dir: i,
        ref: (T) => {
          this.mainButton = T?.element || null;
        },
        type: "button",
        "aria-expanded": this.opened ? "true" : "false",
        "aria-label": c,
        "aria-controls": this.opened ? this.guid : void 0,
        title: m,
        startIcon: $,
        endIcon: D
      },
      this.props.text
    ), this.showLicenseWatermark && /* @__PURE__ */ p.createElement(Ar, { message: this.licenseMessage }), this.renderPopup(e));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    (this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
  }
  /**
   * The DOM element of main button.
   */
  get element() {
    return this.mainButton;
  }
  dispatchClickEvent(e, n) {
    this.isItemDisabled(n) || tn(this.props.onItemClick, e, this, {
      item: this.buttonsData[n],
      itemIndex: n
    });
  }
  renderPopup(e) {
    const { popupSettings: n = {}, _zIndex: i, unstyled: r } = this.props, s = i ? i + c$ : l$, o = r && r.uDropDownButton, { focusedIndex: a } = this.state;
    return /* @__PURE__ */ p.createElement(Zs.Provider, { value: s }, /* @__PURE__ */ p.createElement(
      An,
      {
        anchor: this.mainButton,
        show: this.opened,
        animate: n.animate,
        popupClass: N(zi.popup({ c: o }), n.popupClass),
        anchorAlign: n.anchorAlign || Jh(e),
        popupAlign: n.popupAlign || Qh(e),
        style: e ? { direction: "rtl" } : void 0,
        onClose: this.onPopupClose
      },
      /* @__PURE__ */ p.createElement(
        "ul",
        {
          role: "list",
          id: this.guid,
          tabIndex: -1,
          "aria-activedescendant": a >= 0 ? `${this.guid}-${a}` : void 0,
          ref: this.listRef,
          onKeyDown: this.onKeyDown,
          onBlur: this.handleMenuBlur,
          className: N(
            zi.ul({
              c: o,
              size: this.props.size
            })
          )
        },
        this.renderChildItems()
      )
    ));
  }
  renderChildItems() {
    const { item: e, itemRender: n, textField: i, unstyled: r } = this.props, s = r && r.uDropDownButton;
    return this.buttonsData.length > 0 ? this.buttonsData.map((o, a) => /* @__PURE__ */ p.createElement(
      Nl,
      {
        className: N(
          zi.item({
            c: s
          }),
          o.className,
          { "k-first": a === 0 },
          { "k-last": a === this.buttonsData.length - 1 }
        ),
        dataItem: o,
        textField: i,
        focused: this.state.focusedIndex === a,
        onClick: this.onItemClick,
        onDown: this.onItemDown,
        render: n,
        item: e,
        index: a,
        key: a,
        id: `${this.guid}-${a}`
      }
    )) : null;
  }
  isItemDisabled(e) {
    return this.buttonsData[e] ? this.buttonsData[e].disabled : this.props.disabled;
  }
  isRtl() {
    return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.mainButton && getComputedStyle(this.mainButton).direction === "rtl";
  }
};
ba.propTypes = {
  accessKey: l.string,
  ariaLabel: l.string,
  title: l.string,
  onFocus: l.func,
  onBlur: l.func,
  onClick: l.func,
  onItemClick: l.func,
  onOpen: l.func,
  onClose: l.func,
  items: l.arrayOf(l.any),
  textField: l.string,
  tabIndex: l.number,
  disabled: l.bool,
  icon: l.string,
  svgIcon: yl,
  iconClass: l.string,
  imageUrl: l.string,
  popupSettings: l.object,
  itemRender: l.func,
  item: l.func,
  className: l.string,
  buttonClass: l.string,
  dir: l.string
}, ba.defaultProps = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
let u$ = ba;
const d$ = Qn(), ep = En(
  Qi(
    d$,
    qs(Uy(u$))
  )
);
ep.displayName = "KendoReactDropDownButton";
const h$ = En(
  ep
);
h$.displayName = "KendoReactDropDownButton";
const p$ = En(
  o$
);
p$.displayName = "KendoReactSplitButton";
const m$ = (t) => {
  const { view: e, ...n } = t;
  return /* @__PURE__ */ p.createElement(Be, { type: "button", fillMode: "flat", themeColor: "primary", ...n }, t.children);
};
const ya = class ds extends p.Component {
  constructor() {
    super(...arguments), this.getTitle = () => {
      if (!this.props.currentDate)
        return "";
      const e = this.rangeLength - 1, n = this.props.service.title(this.props.currentDate), i = this.props.service.addToDate(this.props.currentDate, e);
      return e < 1 || !this.props.service.isInRange(i, this.min, this.max) ? n : `${n} - ${this.props.service.title(i)}`;
    }, this.handleTitleClick = (e) => {
      this.canMoveUp && this.props.bus.moveUp(this.props.activeView, e);
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : ds.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : ds.defaultProps.max;
  }
  get rangeLength() {
    return this.props.rangeLength !== void 0 ? this.props.rangeLength : ds.defaultProps.rangeLength;
  }
  get canMoveUp() {
    return this.props.bus.canMoveUp(this.props.activeView);
  }
  render() {
    const { activeView: e, commands: n, unstyled: i } = this.props, r = i && i.uCalendar, s = this.getTitle(), o = N(he.title({ c: r })), a = {
      children: s,
      value: s,
      view: e,
      className: o,
      onClick: this.handleTitleClick,
      disabled: !this.canMoveUp
    }, u = {
      headerTitleProps: a,
      commands: n
    }, d = this.props.headerTitle ? /* @__PURE__ */ p.createElement(this.props.headerTitle, { ...a }, s) : /* @__PURE__ */ p.createElement(m$, { ...a }, s), f = this.props.header ? /* @__PURE__ */ p.createElement(this.props.header, { ...u }) : /* @__PURE__ */ p.createElement(p.Fragment, null, d, /* @__PURE__ */ p.createElement("span", { className: N(he.spacer({ c: r })) }), /* @__PURE__ */ p.createElement("span", { className: N(he.nav({ c: r })) }, this.props.commands));
    return /* @__PURE__ */ p.createElement("div", { className: N(he.header({ c: r, vertical: this.props.verticalView })) }, f);
  }
};
ya.propTypes = {
  activeView: l.number.isRequired,
  currentDate: l.instanceOf(Date).isRequired,
  max: l.instanceOf(Date).isRequired,
  min: l.instanceOf(Date).isRequired,
  rangeLength: l.number
}, ya.defaultProps = {
  rangeLength: 1,
  min: Pn,
  max: Rn
};
let Rl = ya;
Tn(Rl);
const xa = "multiviewcalendar.prevView", wa = "multiviewcalendar.nextView", pr = "dateinput.increment", mr = "dateinput.decrement", $a = "dateinput.clear", Ea = "calendar.today", Sa = "datepicker.toggleCalendar", fr = "daterangepicker.swapStartEnd", ka = "daterangepicker.start", Da = "daterangepicker.end", Ca = "daterangepicker.separator", vr = "datetimepicker.toggleDateTimeSelector", Ia = "timepicker.now", Ma = "timepicker.selectNow", Fs = "timepicker.cancel", Mr = "timepicker.set", Oa = "timepicker.toggleTimeSelector", hs = "timepicker.toggleClock", Na = "datetimepicker.date", Ta = "datetimepicker.time", Or = "datetimepicker.cancel", Nr = "datetimepicker.set", Pa = "daterangepicker.cancel", Ra = "daterangepicker.set", Ce = {
  [Ea]: "Today",
  [Ia]: "NOW",
  [Mr]: "Set",
  [Fs]: "Cancel",
  [Na]: "Date",
  [Ta]: "Time",
  [Or]: "Cancel",
  [Nr]: "Set",
  [Pa]: "Cancel",
  [Ra]: "Set",
  [ka]: "Start",
  [Da]: "End",
  [Ca]: " ",
  [Ma]: "Select Now",
  [Oa]: "Toggle TimeSelector",
  [hs]: "Toggle Clock",
  [pr]: "Increase value",
  [mr]: "Decrease value",
  [$a]: "clear",
  [Sa]: "Toggle calendar",
  [xa]: "Navigate to previous view",
  [wa]: "Navigate to next view",
  [fr]: "Swap start and end values",
  [vr]: "Toggle date-time selector"
};
const Aa = class _a extends p.Component {
  constructor() {
    super(...arguments), this.localization = null, this.handleClick = (e) => {
      if (this.todayIsInRange && this.props.onClick) {
        const n = {
          syntheticEvent: e,
          nativeEvent: e.nativeEvent,
          value: Yt(yt(), this.min, this.max),
          target: this,
          isTodayClick: !0
        };
        this.props.onClick.call(void 0, n);
      }
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : _a.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : _a.defaultProps.max;
  }
  get todayIsInRange() {
    return dt(yt(), Se(this.min), Se(this.max));
  }
  render() {
    const { disabled: e, tabIndex: n, unstyled: i } = this.props, r = i && i.uCalendar;
    this.localization = Rt(this);
    const s = this.localization.toLanguageString(Ea, Ce[Ea]), o = N(he.today({ c: r, disabled: e }));
    return /* @__PURE__ */ p.createElement(
      Be,
      {
        className: o,
        onClick: this.handleClick,
        tabIndex: n,
        fillMode: "flat",
        themeColor: "base",
        role: "link"
      },
      s
    );
  }
};
Aa.propTypes = {
  max: l.instanceOf(Date).isRequired,
  min: l.instanceOf(Date).isRequired,
  onClick: l.func,
  disabled: l.bool
}, Aa.defaultProps = {
  min: Pn,
  max: Rn
};
let Al = Aa;
Tn(Al);
const f$ = 5, za = class tp extends p.Component {
  constructor(e) {
    super(e), this.virtualization = null, this.calendarView = null, this.table = null, this.intl = null, this.bottomOffset = 0, this.viewOffset = 0, this.viewHeight = 0, this._element = null, this.isActive = !1, this.animateToIndex = !0, this.shouldScroll = !1, this.weekService = null, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const n = this._element.querySelector("td.k-focus"), i = this._element.querySelector(".k-state-pending-focus");
      n && n[0] && n[0].classList.remove("k-focus"), i && i.classList.add("k-focus"), this.isActive = !0;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const n = this._element.querySelector("td.k-focus");
      n && n.classList.remove("k-focus"), this.isActive = !1;
    }, this.handleVirtualizationMount = (n) => {
      if (this.virtualization = n, this.virtualization && this.table) {
        this.table.style.transform = `translateY(${this.viewOffset}px)`;
        const i = Yt(this.props.focusedDate, this.props.min, this.props.max), r = this.props.service.skip(i, this.props.min);
        this.virtualization.scrollToIndex(r);
      }
    }, this.buildMonthView = (n, i) => {
      const { unstyled: r } = this.props, s = r && r.uCalendar;
      return /* @__PURE__ */ p.createElement(
        "table",
        {
          key: "calendar-view-list-weekdays",
          className: N(he.table({ c: s, weekdays: !0 })),
          role: "grid",
          tabIndex: this.props.tabIndex
        },
        /* @__PURE__ */ p.createElement("colgroup", null, n.map((o, a) => /* @__PURE__ */ p.createElement("col", { key: a }))),
        /* @__PURE__ */ p.createElement("thead", { className: N(he.thead({ c: s })) }, /* @__PURE__ */ p.createElement("tr", { className: N(he.tr({ c: s })) }, i.map((o, a) => /* @__PURE__ */ p.createElement("th", { key: a, className: N(he.th({ c: s })) }, o))))
      );
    }, this.buildDates = (n, i) => {
      const r = this.props.cellUID, { unstyled: s } = this.props, o = s && s.uCalendar;
      return /* @__PURE__ */ p.createElement(
        "table",
        {
          className: N(he.table({ c: o })),
          ref: (a) => {
            this.table = a;
          },
          role: "grid",
          tabIndex: this.props.tabIndex,
          "aria-activedescendant": r + this.props.focusedDate.getTime()
        },
        /* @__PURE__ */ p.createElement("colgroup", null, n.map((a, u) => /* @__PURE__ */ p.createElement("col", { key: u }))),
        i.map((a) => /* @__PURE__ */ p.createElement(
          Ol,
          {
            ref: (u) => {
              this.calendarView || (this.calendarView = u);
            },
            key: a.getTime(),
            activeView: this.props.activeView,
            viewDate: a,
            min: this.props.min,
            max: this.props.max,
            cellUID: r,
            focusedDate: this.props.focusedDate,
            cell: this.props.cell,
            selectedDate: this.props.value,
            showWeekNumbers: this.weekNumber,
            onChange: this.handleDateChange,
            bus: this.props.bus,
            service: this.props.service,
            weekCell: this.props.weekCell,
            showOtherMonthDays: this.props.showOtherMonthDays,
            unstyled: s
          }
        ))
      );
    }, this.calculateHeights = () => {
      if (!this.props.dom)
        return;
      const n = this.props.activeView === we.month ? this.props.dom.scrollableContentHeight : this.props.dom.scrollableYearContentHeight;
      this.bottomOffset = n - this.props.dom.viewHeight(this.props.activeView), this.viewOffset = -1 * this.props.dom.headerHeight, this.viewHeight = this.props.dom.viewHeight(this.props.activeView) || 1;
    }, this.getTake = (n, i) => Math.min(i - n, this.take), this.handleScrollAction = ({ index: n, scrollAction: i, pageAction: r }) => {
      const s = r ? r.skip : this.state.skip;
      if ((this.state.index !== n || this.state.skip !== s) && this.setState({ index: n, skip: s }), this.table && i) {
        const o = `translateY(${i.offset}px)`;
        this.table.style.transform = o;
      }
    }, this.handleTodayClick = (n) => {
      this.shouldScroll = !0, this.handleDateChange.call(void 0, n, !0);
    }, this.handleDateChange = (n, i = !1) => {
      const { onChange: r } = this.props;
      if (r) {
        const s = {
          syntheticEvent: n.syntheticEvent,
          nativeEvent: n.nativeEvent,
          value: F(n.value),
          target: this,
          isTodayClick: i
        };
        r.call(void 0, s);
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.state = {
      skip: this.props.service.skip(this.props.focusedDate, this.props.min),
      index: this.props.service.skip(this.props.focusedDate, this.props.min)
    };
  }
  get element() {
    return this._element;
  }
  get weekNames() {
    return this.intl = mi(this), this.weekService = new zh(this.intl), this.weekService.getWeekNames(this.weekNumber, this.props.weekDaysFormat);
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === we.month);
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : tp.defaultProps.take;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get todayIsInRange() {
    return dt(yt(), Se(this.props.min), Se(this.props.max));
  }
  componentDidUpdate(e, n) {
    this.shouldScroll = !1, this.indexToScroll !== void 0 && this.virtualization && this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](this.indexToScroll), this.isActive && this.focusActiveDate(), this.lastView = this.props.activeView, this.indexToScroll = void 0;
  }
  render() {
    const { activeView: e, min: n, max: i, service: r, unstyled: s } = this.props, o = s && s.uCalendar;
    this.calculateHeights();
    const a = this.lastView !== e, u = Yt(this.props.focusedDate, n, i), d = a ? r.skip(u, n) : this.state.skip, f = r.total(n, i), y = this.getTake(d, f), c = r.addToDate(n, d), m = r.addToDate(n, this.state.index), S = new Array(r.rowLength(this.weekNumber)).fill(""), k = e !== this.lastView;
    this.animateToIndex = !k, (k || !qn(this.lastFocus, u) || this.shouldScroll || !this.props.shouldScroll || this.props.shouldScroll()) && (this.indexToScroll = this.props.service.skip(u, this.props.min)), this.lastFocus = u;
    const C = N(
      he.view({
        c: o,
        month: e === we.month,
        year: e === we.year,
        decade: e === we.decade,
        century: e === we.century
      })
    ), h = this.buildDates(S, r.datesList(c, y)), b = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
      Rl,
      {
        key: "calendar-view-list-header",
        currentDate: m,
        min: this.props.min,
        max: this.props.max,
        activeView: this.props.activeView,
        bus: this.props.bus,
        service: this.props.service,
        headerTitle: this.props.headerTitle,
        header: this.props.header,
        unstyled: s,
        commands: /* @__PURE__ */ p.createElement(
          Al,
          {
            min: this.props.min,
            max: this.props.max,
            onClick: this.handleTodayClick,
            disabled: !this.todayIsInRange,
            tabIndex: this.props.tabIndex,
            unstyled: s
          }
        )
      }
    ), this.props.activeView === we.month && this.buildMonthView(S, this.weekNames), /* @__PURE__ */ p.createElement(
      Ml,
      {
        key: "calendar-view-list-content",
        skip: d,
        take: this.take,
        total: f,
        itemHeight: this.viewHeight,
        topOffset: this.viewOffset,
        bottomOffset: this.bottomOffset,
        scrollOffsetSize: this.viewOffset,
        maxScrollDifference: this.viewHeight,
        onScroll: this.props.onScroll,
        onScrollAction: this.handleScrollAction,
        onMount: (w) => !this.virtualization && this.handleVirtualizationMount(w),
        children: h,
        tabIndex: this.props.tabIndex,
        unstyled: s
      }
    ));
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        ref: (w) => {
          this._element = w;
        },
        className: C
      },
      this.props.dom.didCalculate ? b : null
    );
  }
};
za.propTypes = {
  activeView: l.number.isRequired,
  bottomOffset: l.number,
  cellUID: l.string.isRequired,
  focusedDate: l.instanceOf(Date).isRequired,
  max: l.instanceOf(Date).isRequired,
  min: l.instanceOf(Date).isRequired,
  onChange: l.func,
  showWeekNumbers: l.bool,
  smoothScroll: l.bool,
  take: l.number,
  value: l.instanceOf(Date),
  viewHeight: l.number,
  viewOffset: l.number,
  weekDaysFormat: l.oneOf(["short", "abbreviated", "narrow"]),
  tabIndex: l.number
}, za.defaultProps = {
  take: f$,
  showWeekNumbers: !1,
  weekDaysFormat: "short",
  smoothScroll: !0
};
let np = za;
fi(np);
const v$ = (t) => {
  const { className: e, isRangeStart: n, value: i, text: r, view: s, ...o } = t, a = pn(), u = a && a.uCalendar, d = (f) => {
    var y;
    (y = t.onClick) == null || y.call(t, i, f);
  };
  return /* @__PURE__ */ p.createElement(
    "li",
    {
      ...o,
      onClick: d,
      className: N(he.li({ c: u }), e)
    },
    /* @__PURE__ */ p.createElement(
      "span",
      {
        className: N(
          he.navigationMarker({
            c: u,
            isRangeStart: n
          })
        )
      },
      t.children
    )
  );
};
const g$ = 30, ja = class ip extends p.Component {
  constructor(e) {
    super(e), this.virtualization = null, this.list = null, this.itemHeight = 0, this.topOffset = 0, this.maxViewHeight = 0, this.bottomOffset = 0, this.handleVirtualizationMount = (r) => {
      if (this.virtualization = r, this.virtualization && this.list) {
        this.list.style.transform = `translateY(${this.topOffset}px)`;
        const s = Yt(this.props.focusedDate, this.props.min, this.props.max), o = this.props.service.skip(s, this.props.min);
        this.virtualization.scrollToIndex(o);
      }
    }, this.buildNavigationItem = (r) => {
      const s = this.props.service.navigationTitle(r), o = this.props.service.isRangeStart(r), a = `kendo-react-calendar-nav-item-${r.getTime()}`, u = {
        text: s,
        value: r,
        isRangeStart: o,
        view: this.props.activeView,
        onClick: this.handleDateChange
      };
      return this.props.navigationItem ? /* @__PURE__ */ p.createElement(this.props.navigationItem, { ...u, key: a }, s) : /* @__PURE__ */ p.createElement(v$, { ...u, key: a }, s);
    }, this.calculateHeights = () => {
      const r = this.props.dom.calendarHeight;
      this.itemHeight = this.props.dom.navigationItemHeight || 1, this.maxViewHeight = this.props.dom.monthViewHeight, this.topOffset = (r - this.itemHeight) / 2, this.bottomOffset = r - this.itemHeight;
    }, this.handleDateChange = (r, s) => {
      const { onChange: o } = this.props;
      if (o && s) {
        const a = {
          value: F(r),
          target: this,
          nativeEvent: s && s.nativeEvent,
          syntheticEvent: s
        };
        o.call(void 0, a);
      }
    }, this.handleScrollAction = ({ scrollAction: r, pageAction: s }) => {
      const o = s ? s.skip : this.state.skip;
      if (this.state.skip !== o && this.setState({ skip: o }), this.list && r) {
        const a = `translateY(${r.offset}px)`;
        this.list.style.transform = a;
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate;
    const n = this.props.service.skip(this.props.focusedDate, this.props.min), i = this.props.service.total(this.props.min, this.props.max);
    this.state = {
      skip: n - this.getTake(n, i) > 0 ? n : 0
    };
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : ip.defaultProps.take;
  }
  /**
   * @hidden
   */
  componentDidUpdate(e, n) {
    this.indexToScroll !== void 0 && this.virtualization && this.virtualization.scrollToIndex(this.indexToScroll), this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.indexToScroll = void 0;
  }
  render() {
    const { activeView: e, min: n, max: i, service: r, unstyled: s } = this.props;
    this.calculateHeights();
    const o = s && s.uCalendar, a = this.lastView !== e, u = Yt(this.props.focusedDate, n, i), d = a ? r.skip(u, n) : this.state.skip, f = r.total(n, i), y = this.getTake(d, f), c = r.addToDate(n, d), m = r.datesList(c, y);
    (e !== this.lastView || !Kt(u, this.lastFocus)) && (this.indexToScroll = r.skip(u, n));
    const S = /* @__PURE__ */ p.createElement(
      Ml,
      {
        skip: d,
        take: this.take,
        total: f,
        itemHeight: this.itemHeight,
        topOffset: this.topOffset,
        bottomOffset: this.bottomOffset,
        onScroll: this.props.onScroll,
        maxScrollDifference: this.maxViewHeight,
        onScrollAction: this.handleScrollAction,
        onMount: (k) => !this.virtualization && this.handleVirtualizationMount(k),
        tabIndex: this.props.tabIndex,
        unstyled: s
      },
      /* @__PURE__ */ p.createElement(
        "ul",
        {
          ref: (k) => {
            this.list = k;
          },
          className: N(he.ul({ c: o }))
        },
        m.map((k) => this.buildNavigationItem(k))
      )
    );
    return /* @__PURE__ */ p.createElement("div", { className: N(he.navigation({ c: o })) }, /* @__PURE__ */ p.createElement("span", { className: N(he.navigationHighlight({ c: o })) }), this.props.dom.didCalculate ? S : null);
  }
  getTake(e, n) {
    return Math.min(n - e, this.take);
  }
};
ja.propTypes = {
  activeView: l.number.isRequired,
  focusedDate: l.instanceOf(Date).isRequired,
  max: l.instanceOf(Date).isRequired,
  min: l.instanceOf(Date).isRequired,
  onChange: l.func,
  take: l.number,
  tabIndex: l.number
}, ja.defaultProps = {
  take: g$
};
let b$ = ja;
var me = /* @__PURE__ */ ((t) => (t[t.Left = 0] = "Left", t[t.Right = 1] = "Right", t[t.Up = 2] = "Up", t[t.Down = 3] = "Down", t[t.PrevView = 4] = "PrevView", t[t.NextView = 5] = "NextView", t[t.FirstInView = 6] = "FirstInView", t[t.LastInView = 7] = "LastInView", t[t.LowerView = 8] = "LowerView", t[t.UpperView = 9] = "UpperView", t))(me || {});
const y$ = [[]], Bo = 4, x$ = 3, w$ = {
  [me.Left]: (t) => hn(t, -1),
  [me.Up]: (t) => hn(t, -5),
  [me.Right]: (t) => hn(t, 1),
  [me.Down]: (t) => hn(t, 5),
  [me.PrevView]: (t) => xr(t, -1),
  [me.NextView]: (t) => xr(t, 1),
  [me.FirstInView]: (t) => Hi(t),
  [me.LastInView]: (t) => pa(t)
};
let $$ = class {
  addToDate(e, n) {
    return xr(e, n);
  }
  datesList(e, n) {
    return on(0, n).map((i) => xr(e, i));
  }
  data(e) {
    const {
      cellUID: n,
      focusedDate: i,
      isActiveView: r,
      max: s,
      min: o,
      selectedDate: a,
      selectionRange: u = kt,
      viewDate: d
    } = e;
    if (!d)
      return y$;
    const f = on(0, Bo), y = Hi(d), c = pa(d), m = yt();
    return on(0, x$).map((S) => {
      const k = hn(y, S * Bo);
      return f.map((C) => {
        const h = this.normalize(hn(k, C), o, s), b = this.isEqual(h, u.start), w = this.isEqual(h, u.end), E = !b && !w && io(h, u), $ = r && (Array.isArray(a) ? this.isSelectedFromArray(h, a, o, s) : dt(a, o, s) && this.isEqual(h, a));
        return _h(h, y, c) ? {
          formattedValue: this.value(h),
          id: `${n}${h.getTime()}`,
          isFocused: this.isEqual(h, i),
          isSelected: $,
          isWeekend: !1,
          isInRange: dt(h, o, s),
          isRangeStart: b,
          isRangeMid: E,
          isRangeEnd: w,
          isRangeSplitEnd: E && this.isEqual(h, c),
          isRangeSplitStart: E && this.isEqual(h, y),
          isToday: this.isEqual(h, m),
          title: this.cellTitle(h),
          value: h
        } : null;
      });
    });
  }
  isSelectedFromArray(e, n, i, r) {
    let s = !1;
    return n.forEach((o) => {
      dt(e, i, r) && this.isEqual(e, o) && (s = !0);
    }), s;
  }
  isEqual(e, n) {
    return !e || !n ? !1 : Wt(e).getFullYear() === Wt(n).getFullYear();
  }
  isInArray(e, n) {
    if (!n.length)
      return !1;
    const i = e.getFullYear();
    return n[0].getFullYear() <= i && i <= n[n.length - 1].getFullYear() + 99;
  }
  isInRange(e, n, i) {
    const r = Wt(e).getFullYear(), s = !n || Wt(n).getFullYear() <= r, o = !i || r <= Wt(i).getFullYear();
    return s && o;
  }
  isInSameView(e, n) {
    return Gr(e, n) === 0;
  }
  isRangeStart(e) {
    return e.getFullYear() % 1e3 === 0;
  }
  move(e, n) {
    const i = w$[n];
    return i ? i(e) : e;
  }
  cellTitle(e) {
    return Wt(e).getFullYear().toString();
  }
  navigationTitle(e) {
    return e ? Hi(e).getFullYear().toString() : "";
  }
  title(e) {
    return e ? `${Hi(e).getFullYear()} - ${pa(e).getFullYear()}` : "";
  }
  rowLength(e) {
    return Bo;
  }
  skip(e, n) {
    return Gr(n, e);
  }
  total(e, n) {
    return Gr(e, n) + 1;
  }
  value(e) {
    return e ? Wt(e).getFullYear().toString() : "";
  }
  viewDate(e, n, i = 1) {
    return Gr(e, n) < i ? xr(e, -1) : e;
  }
  normalize(e, n, i) {
    return e < n && this.isEqual(e, n) ? F(n) : e > i && this.isEqual(e, i) ? F(i) : e;
  }
};
const E$ = [[]], Ho = 4, S$ = 3, k$ = {
  [me.Left]: (t) => qt(t, -1),
  [me.Up]: (t) => qt(t, -5),
  [me.Right]: (t) => qt(t, 1),
  [me.Down]: (t) => qt(t, 5),
  [me.PrevView]: (t) => hn(t, -1),
  [me.NextView]: (t) => hn(t, 1),
  [me.FirstInView]: (t) => Wt(t),
  [me.LastInView]: (t) => ma(t)
};
let D$ = class {
  addToDate(e, n) {
    return hn(e, n);
  }
  datesList(e, n) {
    return on(0, n).map((i) => hn(e, i));
  }
  data(e) {
    const {
      cellUID: n,
      focusedDate: i,
      isActiveView: r,
      max: s,
      min: o,
      selectedDate: a,
      selectionRange: u = kt,
      viewDate: d
    } = e;
    if (!d)
      return E$;
    const f = on(0, Ho), y = Wt(d), c = ma(d), m = yt();
    return on(0, S$).map((S) => {
      const k = qt(y, S * Ho);
      return f.map((C) => {
        const h = this.normalize(qt(k, C), o, s), b = this.isEqual(h, u.start), w = this.isEqual(h, u.end), E = !b && !w && io(h, u), $ = r && (Array.isArray(a) ? this.isSelectedFromArray(h, a, o, s) : dt(a, o, s) && this.isEqual(h, a));
        return _h(h, y, c) ? {
          formattedValue: this.value(h),
          id: `${n}${h.getTime()}`,
          isFocused: this.isEqual(h, i),
          isSelected: $,
          isWeekend: !1,
          isInRange: dt(h, o, s),
          isRangeStart: b,
          isRangeMid: E,
          isRangeEnd: w,
          isRangeSplitEnd: E && this.isEqual(h, c),
          isRangeSplitStart: E && this.isEqual(h, y),
          isToday: this.isEqual(h, m),
          title: this.cellTitle(h),
          value: h
        } : null;
      });
    });
  }
  isSelectedFromArray(e, n, i, r) {
    let s = !1;
    return n.forEach((o) => {
      dt(e, i, r) && this.isEqual(e, o) && (s = !0);
    }), s;
  }
  isEqual(e, n) {
    return !e || !n ? !1 : e.getFullYear() === n.getFullYear();
  }
  isInArray(e, n) {
    if (!n.length)
      return !1;
    const i = e.getFullYear();
    return n[0].getFullYear() <= i && i <= n[n.length - 1].getFullYear() + 9;
  }
  isInRange(e, n, i) {
    const r = e.getFullYear(), s = !n || n.getFullYear() <= r, o = !i || r <= i.getFullYear();
    return s && o;
  }
  isRangeStart(e) {
    return e.getFullYear() % 100 === 0;
  }
  isInSameView(e, n) {
    return Jr(e, n) === 0;
  }
  move(e, n) {
    const i = k$[n];
    return i ? i(e) : e;
  }
  cellTitle(e) {
    return e.getFullYear().toString();
  }
  navigationTitle(e) {
    return e ? Wt(e).getFullYear().toString() : "";
  }
  title(e) {
    return e ? `${Wt(e).getFullYear()} - ${ma(e).getFullYear()}` : "";
  }
  rowLength(e) {
    return Ho;
  }
  skip(e, n) {
    return Jr(n, e);
  }
  total(e, n) {
    return Jr(e, n) + 1;
  }
  value(e) {
    return e ? e.getFullYear().toString() : "";
  }
  viewDate(e, n, i = 1) {
    return Jr(e, n) < i ? hn(e, -1) : e;
  }
  normalize(e, n, i) {
    return e < n && this.isEqual(e, n) ? F(n) : e > i && this.isEqual(e, i) ? F(i) : e;
  }
};
const C$ = [[]], Uo = 7, I$ = 6, M$ = 6, O$ = 0, N$ = {
  [me.Left]: (t) => _t(t, -1),
  [me.Up]: (t) => ou(t, -1),
  [me.Right]: (t) => _t(t, 1),
  [me.Down]: (t) => ou(t, 1),
  [me.PrevView]: (t) => ut(t, -1),
  [me.NextView]: (t) => ut(t, 1),
  [me.FirstInView]: (t) => _s(t),
  [me.LastInView]: (t) => On(t)
};
class T$ {
  constructor(e) {
    this.intl = e;
  }
  addToDate(e, n) {
    return ut(e, n);
  }
  datesList(e, n) {
    return on(0, n).map((i) => ut(e, i));
  }
  data(e) {
    const {
      cellUID: n,
      focusedDate: i,
      isActiveView: r,
      max: s,
      min: o,
      selectedDate: a,
      selectionRange: u = kt,
      viewDate: d
    } = e;
    if (!d)
      return C$;
    const f = _s(d), y = On(d), c = oh(f, this.intl.firstDay(), -1), m = on(0, Uo), S = yt();
    return on(0, I$).map((k) => {
      const C = _t(c, k * Uo);
      return m.map((h) => {
        const b = this.normalize(_t(C, h), o, s), w = b < f || b > y, E = this.isEqual(b, u.start), $ = this.isEqual(b, u.end), D = !E && !$ && io(b, u), T = r && (Array.isArray(a) ? this.isSelectedFromArray(b, a, o, s) : dt(a, o, s) && this.isEqual(b, a)), O = this.isEqual(b, i) && !w;
        return {
          formattedValue: this.value(b),
          id: `${n}${b.getTime()}`,
          isFocused: O,
          isSelected: T,
          isInRange: dt(b, o, s),
          isWeekend: this.isWeekend(b),
          isRangeStart: E,
          isRangeMid: D,
          isRangeEnd: $,
          isRangeSplitStart: D && this.isEqual(b, f),
          isRangeSplitEnd: D && this.isEqual(b, y),
          isToday: this.isEqual(b, S),
          title: this.cellTitle(b),
          value: b,
          isOtherMonth: w
        };
      });
    });
  }
  isEqual(e, n) {
    return !e || !n ? !1 : Se(e).getTime() === Se(n).getTime();
  }
  isSelectedFromArray(e, n, i, r) {
    let s = !1;
    return n.forEach((o) => {
      dt(e, i, r) && this.isEqual(e, o) && (s = !0);
    }), s;
  }
  isInArray(e, n) {
    return !!n.length && _s(n[0]) <= e && e <= On(n[n.length - 1]);
  }
  isInRange(e, n, i) {
    const r = Se(e), s = !n || Se(n) <= r, o = !i || r <= Se(i);
    return s && o;
  }
  isInSameView(e, n) {
    return Qr(e, n) === 0;
  }
  isRangeStart(e) {
    return !e.getMonth();
  }
  move(e, n) {
    const i = N$[n];
    return i ? i(e) : e;
  }
  cellTitle(e) {
    return this.intl.formatDate(e, "D");
  }
  navigationTitle(e) {
    return e ? this.isRangeStart(e) ? e.getFullYear().toString() : this.abbrMonthNames()[e.getMonth()] : "";
  }
  title(e) {
    return `${this.wideMonthNames()[e.getMonth()]} ${e.getFullYear()}`;
  }
  rowLength(e) {
    return Uo + (e ? 1 : 0);
  }
  skip(e, n) {
    return Qr(n, e);
  }
  total(e, n) {
    return Qr(e, n) + 1;
  }
  value(e) {
    return e ? e.getDate().toString() : "";
  }
  viewDate(e, n, i = 1) {
    return Qr(e, n) < i ? ut(e, -1) : e;
  }
  isWeekend(e) {
    const n = e.getDay();
    return n === M$ || n === O$;
  }
  abbrMonthNames() {
    return this.intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(e, n, i) {
    return e < n && this.isEqual(e, n) ? Se(n) : e > i && this.isEqual(e, i) ? Se(i) : e;
  }
  wideMonthNames() {
    return this.intl.dateFormatNames({ nameType: "wide", type: "months", standAlone: !0 });
  }
}
const P$ = [[]], Wo = 4, R$ = 3, A$ = (t) => t > 4 ? -5 : t < 2 ? -2 : -7, _$ = (t) => t < 7 ? 5 : t < 10 ? 7 : 2, z$ = {
  [me.Left]: (t) => ut(t, -1),
  [me.Up]: (t) => ut(t, A$(t.getMonth())),
  [me.Right]: (t) => ut(t, 1),
  [me.Down]: (t) => ut(t, _$(t.getMonth())),
  [me.PrevView]: (t) => qt(t, -1),
  [me.NextView]: (t) => qt(t, 1),
  [me.FirstInView]: (t) => lh(t),
  [me.LastInView]: (t) => ch(t)
};
let j$ = class {
  constructor(e) {
    this._intl = e;
  }
  addToDate(e, n) {
    return qt(e, n);
  }
  datesList(e, n) {
    return on(0, n).map((i) => qt(e, i));
  }
  data(e) {
    const {
      cellUID: n,
      focusedDate: i,
      isActiveView: r,
      max: s,
      min: o,
      selectedDate: a,
      selectionRange: u = kt,
      viewDate: d
    } = e;
    if (!d)
      return P$;
    const f = this.abbrMonthNames(), y = lh(d), c = ch(d), m = y.getFullYear(), S = on(0, Wo), k = yt();
    return on(0, R$).map((C) => {
      const h = ut(y, C * Wo);
      return S.map((b) => {
        const w = this.normalize(ut(h, b), o, s);
        if (m < w.getFullYear())
          return null;
        const E = this.isEqual(w, u.start), $ = this.isEqual(w, u.end), D = !E && !$ && io(w, u), T = r && (Array.isArray(a) ? this.isSelectedFromArray(w, a, o, s) : dt(a, o, s) && this.isEqual(w, a));
        return {
          formattedValue: f[w.getMonth()],
          id: `${n}${w.getTime()}`,
          isFocused: this.isEqual(w, i),
          isSelected: T,
          isInRange: dt(w, o, s),
          isWeekend: !1,
          isRangeStart: E,
          isRangeMid: D,
          isRangeEnd: $,
          isRangeSplitEnd: D && this.isEqual(w, c),
          isRangeSplitStart: D && this.isEqual(w, y),
          isToday: this.isEqual(w, k),
          title: this.cellTitle(w),
          value: w
        };
      });
    });
  }
  isSelectedFromArray(e, n, i, r) {
    let s = !1;
    return n.forEach((o) => {
      dt(e, i, r) && this.isEqual(e, o) && (s = !0);
    }), s;
  }
  isEqual(e, n) {
    return !e || !n ? !1 : e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth();
  }
  isInArray(e, n) {
    if (!n.length)
      return !1;
    const i = e.getFullYear();
    return n[0].getFullYear() <= i && i <= n[n.length - 1].getFullYear();
  }
  isInRange(e, n, i) {
    const r = Zt(e.getFullYear(), e.getMonth(), 1), s = !n || Zt(n.getFullYear(), n.getMonth(), 1) <= r, o = !i || r <= Zt(i.getFullYear(), i.getMonth(), 1);
    return s && o;
  }
  isInSameView(e, n) {
    return Xr(e, n) === 0;
  }
  isRangeStart(e) {
    return e.getFullYear() % 10 === 0;
  }
  move(e, n) {
    const i = z$[n];
    return i ? i(e) : e;
  }
  cellTitle(e) {
    return `${e.getFullYear()} ${this.value(e)}`;
  }
  navigationTitle(e) {
    return this.title(e);
  }
  title(e) {
    return e ? e.getFullYear().toString() : "";
  }
  rowLength(e) {
    return Wo;
  }
  skip(e, n) {
    return Xr(n, e);
  }
  total(e, n) {
    return Xr(e, n) + 1;
  }
  value(e) {
    return e ? this.abbrMonthNames()[e.getMonth()] : "";
  }
  viewDate(e, n, i = 1) {
    return Xr(e, n) < i ? qt(e, -1) : e;
  }
  abbrMonthNames() {
    return this._intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(e, n, i) {
    return e < n && this.isEqual(e, n) ? F(n) : e > i && this.isEqual(e, i) ? F(i) : e;
  }
};
const F$ = {
  [we.month]: T$,
  [we.year]: j$,
  [we.decade]: D$,
  [we.century]: $$
}, L$ = (t, e) => {
  const n = we[we[t + e]];
  return n !== void 0 ? n : t;
};
let rp = class {
  constructor(e) {
    this.bottom = we.month, this.top = we.century, this.onViewChanged = e;
  }
  configure(e, n) {
    this.bottom = e, this.top = n;
  }
  service(e, n) {
    return new F$[`${e}`](n);
  }
  moveDown(e, n) {
    this.move(e, -1, n);
  }
  moveUp(e, n) {
    this.move(e, 1, n);
  }
  moveToBottom(e) {
    e !== this.bottom && this.onViewChanged({ view: this.bottom });
  }
  canMoveDown(e) {
    return this.bottom < e;
  }
  canMoveUp(e) {
    return e < this.top;
  }
  clamp(e) {
    return e < this.bottom ? this.bottom : e > this.top ? this.top : e;
  }
  move(e, n, i) {
    const r = this.clamp(L$(e, n));
    r !== e && this.onViewChanged({ view: r }, i);
  }
};
class V$ {
  constructor() {
    this.calendarHeight = 0, this.headerHeight = 0, this.monthViewHeight = 0, this.yearViewHeight = 0, this.decadeViewHeight = 0, this.centuryViewHeight = 0, this.navigationItemHeight = 0, this.scrollableContentHeight = 0, this.scrollableYearContentHeight = 0, this.calendarWidth = 0, this.monthViewWidth = 0, this.yearViewWidth = 0, this.decadeViewWidth = 0, this.centuryViewWidth = 0, this.scrollableContentWidth = 0, this.didCalculate = !1, this.hostContainer = null;
  }
  ensureHeights() {
    this.calendarHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(e, n) {
    if (!Dt)
      return;
    const i = Ht("div"), r = Ht("ul"), s = Ht("li"), o = Ht("td"), a = Ht("th"), u = Ht("tr"), d = Ht("tbody"), f = Ht("thead"), y = Ht("table"), c = n && n.uCalendar, m = n && n.uButton, S = Pe(
      Zn.wrapper({
        c: m,
        fillMode: "flat",
        size: "medium",
        rounded: "medium",
        themeColor: "primary"
      }),
      he.title({ c })
    ), k = () => i(
      `
                <span class="${S}">
                    <span class="${Pe(Zn.text({ c: m }))}">March 2017</span>
                </span>
                <span class="${Pe(he.spacer({ c }))}"></span>
                <span class="${Pe(he.nav({ c }))}"><button class="${Pe(
        he.today({ c })
      )}">TODAY</button></span>
            `,
      Pe(he.header({ c, vertical: !0 }))
    ), C = () => y(
      [
        f(
          [
            u(
              [a("MO", Pe(he.th({ c })))],
              Pe(he.tr({ c }))
            )
          ],
          Pe(he.thead({ c }))
        )
      ],
      Pe(he.table({ c, weekdays: !0 }))
    ), h = (P, Y) => new Array(P).fill("1").map(Y), b = (P, Y = 1) => y(
      [
        d(
          [u([o("1", Pe(he.td({ c, isWeek: !0 })))])].concat(
            h(
              P,
              () => u(
                h(
                  Y,
                  (M) => o(
                    `<span class="${Pe(
                      he.link({ c })
                    )}">${M}</span>`,
                    Pe(he.td({ c }))
                  )
                ),
                Pe(he.tr({ c }))
              )
            )
          ),
          Pe(he.tbody({ c }))
        )
      ],
      Pe(he.table({ c }))
    ), w = (P) => i(
      P,
      Pe(
        he.scrollableSelector({
          c
        }),
        he.scrollable({
          c,
          horizontal: !0
        })
      )
    ), E = (P, Y, M) => i(
      M ? [k(), C(), w([P, P])] : [k(), w([P, P])],
      Y,
      { left: "-10000px", position: "absolute" }
    ), $ = /* @__PURE__ */ (() => {
      let P;
      return () => Dt ? (P || (P = i(
        [w([r([s("<span>FEB</span>")])])],
        Pe(he.navigation({ c })),
        { left: "0px", position: "absolute" }
      )), P) : null;
    })(), D = ({ cells: P, rows: Y }, M, I) => {
      let j;
      return () => Dt ? (j || (j = E(b(Y, P), M, I)), j) : null;
    }, T = (P) => P.querySelector(
      `.${Pe(he.scrollableSelector({ c }))}`
    ), O = (P) => {
      const Y = T(P);
      return Y.className = `${Y.className} scrollable-horizontal`, P;
    }, A = D(
      { cells: 7, rows: 6 },
      Pe(he.view({ c, month: !0 })),
      !0
    ), L = D(
      { cells: 5, rows: 3 },
      Pe(he.view({ c, year: !0 })),
      !1
    ), B = D(
      { cells: 5, rows: 2 },
      Pe(he.view({ c, decade: !0 })),
      !1
    ), X = () => O(A()), z = () => O(L()), Q = () => O(B()), H = (P) => parseFloat(window.getComputedStyle(P).height) || P.offsetHeight, V = (P) => {
      const Y = window.getComputedStyle(P);
      return parseFloat(Y.width) + parseFloat(Y.paddingLeft) + parseFloat(Y.paddingRight) || P.offsetWidth;
    }, re = (P) => P.querySelector("tbody");
    this.didCalculate = !0, e && (this.hostContainer = e), this.batch(A(), (P) => {
      const Y = re(P);
      this.calendarHeight = H(P), this.monthViewHeight = H(Y), this.headerHeight = H(Y.children[0]), this.scrollableContentHeight = H(T(P));
    }), this.batch(X(), (P) => {
      const Y = re(P);
      this.calendarWidth = V(P), this.monthViewWidth = V(Y), this.scrollableContentWidth = V(T(P));
    }), this.batch(L(), (P) => {
      this.yearViewHeight = H(re(P)), this.scrollableYearContentHeight = H(T(P));
    }), this.batch(z(), (P) => {
      this.yearViewWidth = V(re(P));
    }), this.batch(B(), (P) => {
      this.decadeViewHeight = H(re(P)), this.centuryViewHeight = this.decadeViewHeight;
    }), this.batch(Q(), (P) => {
      this.decadeViewWidth = V(re(P)), this.centuryViewWidth = this.decadeViewWidth;
    }), this.batch($(), (P) => {
      this.navigationItemHeight = H(P.querySelector("li"));
    });
  }
  viewHeight(e) {
    return this.viewDimension(e, "height");
  }
  viewWidth(e) {
    return this.viewDimension(e, "width");
  }
  viewDimension(e, n) {
    const i = n === "height" ? "ViewHeight" : "ViewWidth";
    switch (e) {
      case we.month:
        return this[`month${i}`];
      case we.year:
        return this[`year${i}`];
      case we.decade:
        return this[`decade${i}`];
      case we.century:
        return this[`century${i}`];
      default:
        return 1;
    }
  }
  batch(e, n) {
    const i = this.hostContainer || document.body, r = i.appendChild(e);
    n(r), i.removeChild(r);
  }
}
const B$ = {
  33: me.PrevView,
  34: me.NextView,
  35: me.LastInView,
  36: me.FirstInView,
  37: me.Left,
  38: me.Up,
  39: me.Right,
  40: me.Down,
  "meta+38": me.UpperView,
  "meta+40": me.LowerView
};
let sp = class {
  constructor(e) {
    this.bus = e;
  }
  action(e) {
    const n = `${e.ctrlKey || e.metaKey ? "meta+" : ""}${e.keyCode}`;
    return B$[n];
  }
  move(e, n, i, r, s) {
    return r ? n === me.UpperView && this.bus.canMoveUp(i) ? (this.bus.moveUp(i, s), e) : n === me.LowerView && this.bus.canMoveDown(i) ? (this.bus.moveDown(i, s), e) : r.move(e, n) : e;
  }
};
const H$ = (t) => (e) => Math.floor(e / t), U$ = (t) => (e) => e * t;
let W$ = class {
  constructor(e) {
    this.dom = e, this.divideByMagnitude = null, this.powerByMagnitude = null, this.navigator = null, this.view = null, this.monthScrolled = !1, this.navScrolled = !1;
  }
  configure(e) {
    const n = Math.max(this.dom.viewHeight(e) / this.dom.navigationItemHeight, 1);
    this.divideByMagnitude = H$(n), this.powerByMagnitude = U$(n);
  }
  sync(e, n, i) {
    if (!(!e || !n)) {
      if (this.navigator = e, this.view = n, i.target === this.navigator.element) {
        if (this.monthScrolled) {
          this.monthScrolled = !1;
          return;
        }
        this.navScrolled = !0, this.scrollSiblingOf(this.navigator.element);
      }
      if (i.target === this.view.element) {
        if (this.navScrolled) {
          this.navScrolled = !1;
          return;
        }
        this.monthScrolled = !0, this.scrollSiblingOf(this.view.element);
      }
    }
  }
  scrollSiblingOf(e) {
    const n = this.siblingComponent(e), i = this.calculateScroll(n, e.scrollTop);
    n.scrollTo(i);
  }
  siblingComponent(e) {
    return this.navigator.element === e ? this.view : this.navigator;
  }
  calculateScroll(e, n) {
    const i = e === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
    return i ? i(n) : 0;
  }
};
const Zo = (t) => t ? t.virtualization : null, Mu = (t = Ls.defaultProps.min, e = Ls.defaultProps.max, n, i) => i !== void 0 ? i !== null && dt(Se(i), t, e) ? i : null : n !== null && dt(Se(n), t, e) ? n : null, ps = class Hn extends p.Component {
  constructor(e) {
    super(e), this.scrollSyncService = null, this.focusedDate = null, this.Navigation = null, this.calendarViewList = null, this._element = null, this.intl = null, this.service = null, this.isActive = !1, this.didNavigationChange = !1, this.focus = () => {
      this._element && this._element.focus();
    }, this.shouldScroll = () => this.didNavigationChange, this.handleScroll = (i) => {
      this.scrollSyncService && this.scrollSyncService.sync(
        Zo(this.Navigation),
        Zo(this.calendarViewList),
        i
      );
    }, this.handleNavigationChange = (i) => {
      if (this.props.disabled)
        return;
      this.didNavigationChange = !0;
      const r = F(i.value);
      this.setState({ focusedDate: r });
    }, this.handleViewChange = ({ view: i }) => {
      this.scrollSyncService && this.scrollSyncService.configure(i), this.setState({ activeView: i });
    }, this.handleDateChange = (i) => {
      const r = F(i.value), s = F(i.value), o = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (o)
        if (i.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, i.syntheticEvent), this.setState({ focusedDate: s });
          return;
        }
      this.setState({ value: r, focusedDate: s }), this.valueDuringOnChange = r;
      const { onChange: a } = this.props;
      if (a) {
        const u = {
          syntheticEvent: i.syntheticEvent,
          nativeEvent: i.nativeEvent,
          value: r,
          target: this
        };
        a.call(void 0, u);
      }
      this.valueDuringOnChange = void 0;
    }, this.handleFocus = (i) => {
      if (this.isActive = !0, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: r } = this.props;
      r && r.call(void 0, i);
    }, this.handleBlur = (i) => {
      if (this.isActive = !1, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: r } = this.props;
      r && r.call(void 0, i);
    }, this.handleKeyDown = (i) => {
      const { keyCode: r, ctrlKey: s, metaKey: o } = i;
      if (!(!this.focusedDate || !this.service)) {
        if (r === 84 && this.setState({ focusedDate: yt() }), (s || o) && (r === U.left || r === U.right)) {
          if (this.props.disabled)
            return;
          this.didNavigationChange = !0, this.focusedDate.getDate() === 31 && this.focusedDate.setDate(30);
          const a = r === U.left ? this.focusedDate.getMonth() - 1 : this.focusedDate.getMonth() + 1, u = new Date(this.focusedDate.setMonth(a)), d = F(u);
          this.setState({ focusedDate: d });
        }
        if (r === U.enter) {
          if (this.value !== null && qn(this.focusedDate, this.value)) {
            const u = Yt(this.focusedDate, this.min, this.max);
            Zo(this.calendarViewList).scrollToIndex(this.service.skip(u, this.min));
          }
          const a = {
            syntheticEvent: i,
            nativeEvent: i.nativeEvent,
            value: this.focusedDate,
            target: this
          };
          this.handleDateChange(a);
        } else {
          const a = Yt(
            this.navigation.move(
              this.focusedDate,
              this.navigation.action(i),
              this.state.activeView,
              this.service,
              i
            ),
            this.min,
            this.max
          );
          if (qn(this.focusedDate, a))
            return;
          this.setState({ focusedDate: a });
        }
        i.preventDefault();
      }
    }, this.handleMouseDown = (i) => {
      i.preventDefault();
    }, this.handleClick = (i) => {
      this._element && this._element.focus({ preventScroll: !0 });
    };
    const n = Mu(
      this.min,
      this.max,
      this.props.defaultValue || Hn.defaultProps.defaultValue,
      this.props.value
    );
    this.state = {
      value: n,
      activeView: zs(
        we[e.defaultActiveView],
        this.bottomView,
        this.topView
      ),
      focusedDate: Yt(e.focusedDate || n || yt(), this.min, this.max)
    }, this.dom = new V$(), this.bus = new rp(this.handleViewChange), this.navigation = new sp(this.bus), this.oldValue = n;
  }
  get cellUID() {
    return this.props.id + "-cell-uid";
  }
  get id() {
    return this.props.id + "-id";
  }
  /**
   * Gets the wrapping element of the Calendar.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the value of the Calendar.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  get min() {
    return Se(this.props.min !== void 0 ? this.props.min : Hn.defaultProps.min);
  }
  get max() {
    return Se(this.props.max !== void 0 ? this.props.max : Hn.defaultProps.max);
  }
  get bottomView() {
    return we[this.props.bottomView !== void 0 ? this.props.bottomView : Hn.defaultProps.bottomView];
  }
  get topView() {
    return we[this.props.topView !== void 0 ? this.props.topView : Hn.defaultProps.topView];
  }
  /**
   * @hidden
   */
  componentDidMount() {
    const { unstyled: e } = this.props;
    Promise.resolve().then(() => {
      qc(), this._element && (this.dom.calculateHeights(this._element, e), this.scrollSyncService = new W$(this.dom), this.scrollSyncService.configure(this.state.activeView), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate(e, n) {
    qc(), n.activeView !== this.state.activeView && this.scrollSyncService && this.scrollSyncService.configure(this.state.activeView), this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)(), this.didNavigationChange = !1, this.isActive && (this.oldValue = this.value);
  }
  /**
   * @hidden
   */
  render() {
    const { _ref: e, unstyled: n, bottomView: i, topView: r, disabled: s, weekNumber: o, mobileMode: a, className: u } = this.props;
    e && e(this);
    const d = n && n.uCalendar, f = this.value !== null && this.oldValue !== null ? !qn(this.value, this.oldValue) : this.value !== this.oldValue, y = zs(
      this.state.activeView,
      we[i !== void 0 ? i : Hn.defaultProps.bottomView],
      we[r !== void 0 ? r : Hn.defaultProps.topView]
    ), c = Mu(this.min, this.max, this.value, this.value), m = c ? Se(c) : null;
    this.focusedDate = Se(
      Yt(f && c !== null ? c : this.state.focusedDate, this.min, this.max)
    ), this.intl = mi(this), this.bus.configure(this.bottomView, this.topView), this.service = this.bus.service(y, this.intl);
    const { smoothScroll: S = Number.parseFloat(p.version) < 18 } = this.props, k = N(
      he.wrapper({
        c: d,
        disabled: s,
        weekNumber: o,
        mobileMode: a
      }),
      u
    ), C = [
      this.props.navigation && /* @__PURE__ */ p.createElement(
        b$,
        {
          key: 0,
          ref: (h) => {
            this.Navigation = h;
          },
          activeView: this.state.activeView,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          onScroll: this.handleScroll,
          onChange: this.handleNavigationChange,
          service: this.service,
          dom: this.dom,
          navigationItem: this.props.navigationItem,
          tabIndex: this.props.tabIndex,
          unstyled: n
        }
      ),
      /* @__PURE__ */ p.createElement(
        np,
        {
          key: 1,
          ref: (h) => {
            this.calendarViewList = h;
          },
          activeView: this.state.activeView,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          bus: this.bus,
          shouldScroll: this.shouldScroll,
          onScroll: this.handleScroll,
          service: this.service,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          dom: this.dom,
          smoothScroll: S,
          showWeekNumbers: this.props.weekNumber,
          onChange: this.handleDateChange,
          value: m,
          cellUID: this.cellUID,
          headerTitle: this.props.headerTitle,
          header: this.props.header,
          tabIndex: this.props.tabIndex,
          weekDaysFormat: this.props.weekDaysFormat,
          showOtherMonthDays: this.props.showOtherMonthDays,
          unstyled: n
        }
      )
    ];
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        ref: (h) => {
          this._element = h;
        },
        className: k,
        id: this.props.id || this.id,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        "aria-disabled": this.props.disabled,
        tabIndex: this.props.disabled ? void 0 : this.props.tabIndex || 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick
      },
      C
    );
  }
};
ps.displayName = "Calendar", ps.propTypes = {
  className: l.string,
  defaultActiveView: l.oneOf(["month", "year", "decade", "century"]),
  defaultValue: l.instanceOf(Date),
  disabled: l.bool,
  focusedDate: l.instanceOf(Date),
  id: l.string,
  ariaLabelledBy: l.string,
  ariaDescribedBy: l.string,
  weekDaysFormat: l.oneOf(["short", "abbreviated", "narrow"]),
  max: l.instanceOf(Date),
  min: l.instanceOf(Date),
  navigation: l.bool,
  smoothScroll: l.bool,
  onBlur: l.func,
  onChange: l.func,
  onFocus: l.func,
  tabIndex: l.number,
  value: l.instanceOf(Date),
  weekNumber: l.bool,
  topView: (t, e, n) => {
    const i = t[e], r = t.bottomView;
    return i && r && we[i] < we[r] ? new Error(
      `Invalid prop + ${e} suplied to ${n}.
                    ${e} can not be smaller than bottomView.
                    `
    ) : null;
  },
  bottomView: (t, e, n) => {
    const i = t[e], r = t.topView;
    return i && r && we[i] > we[r] ? new Error(
      `Invalid prop + ${e} suplied to ${n}.
                    ${e} can not be bigger than topView.
                    `
    ) : null;
  }
}, ps.defaultProps = {
  disabled: !1,
  min: Pn,
  max: Rn,
  weekDaysFormat: "short",
  navigation: !0,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  bottomView: "month",
  showOtherMonthDays: !1
};
let Ls = ps;
const Z$ = Qn(), _l = En(
  Qi(
    Z$,
    qs(Ls)
  )
);
_l.displayName = "KendoReactCalendar";
fi(Ls);
const Fa = "labels.optional", q$ = {
  [Fa]: "(Optional)"
};
const zl = (t) => {
  const [e, n] = p.useState({
    focused: !1
  }), i = (A) => {
    n({ focused: !0 });
  }, r = (A) => {
    n({ focused: !1 });
  }, {
    label: s,
    editorId: o,
    className: a,
    labelClassName: u,
    editorValue: d,
    editorPlaceholder: f,
    editorValid: y,
    editorDisabled: c,
    style: m,
    id: S,
    optional: k,
    unstyled: C,
    ...h
  } = t, b = no(), w = k ? b.toLanguageString(Fa, q$[Fa]) : "", E = w && /* @__PURE__ */ p.createElement("span", { className: "k-label-optional" }, w), $ = C && C.uFloatingLabel, D = !f && !d && d !== 0, T = N(
    su.wrapper({
      c: $,
      focused: e.focused,
      empty: D,
      notEmpty: !D,
      disabled: c,
      isRtl: t.dir === "rtl"
    }),
    a
  ), O = N(
    su.label({
      c: $,
      focused: e.focused,
      empty: D,
      notEmpty: !D,
      invalid: y === !1,
      disabled: c
    }),
    u
  );
  return /* @__PURE__ */ p.createElement(
    "span",
    {
      ...h,
      id: t.id,
      className: T,
      onFocus: i,
      onBlur: r,
      style: m,
      dir: t.dir
    },
    t.children,
    s ? o ? /* @__PURE__ */ p.createElement("label", { id: S, htmlFor: o, className: O }, s, E) : /* @__PURE__ */ p.createElement("span", { id: S, className: O }, s, E) : null
  );
};
zl.propTypes = {
  label: l.node,
  editorId: l.string,
  editorValue: l.oneOfType([l.string, l.bool, l.number]),
  editorPlaceholder: l.string,
  editorValid: l.bool,
  editorDisabled: l.bool,
  id: l.string,
  style: l.object,
  className: l.string,
  labelClassName: l.string,
  optional: l.bool
};
var La = function(t, e) {
  return La = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, La(t, e);
};
function Y$(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  La(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ji = function() {
  return ji = Object.assign || function(e) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, ji.apply(this, arguments);
};
var K$ = (
  /** @class */
  /* @__PURE__ */ (function() {
    function t() {
      this.symbols = "", this.partMap = [];
    }
    return t;
  })()
), Fe = {
  formatSeparator: "_",
  twoDigitYearMax: 68,
  defaultDateFormat: "d",
  defaultLocaleId: "en"
}, $r = {
  DELETE: "Delete",
  BACKSPACE: "Backspace",
  SPACE: " "
}, Ei = function(t) {
  return new Array(Math.max(t, 0)).fill("0").join("");
}, Ou = function(t) {
  return t.replace(/^0*/, "");
}, G$ = function(t) {
  var e = t.oldText, n = t.newText, i = t.formatPattern, r = t.selectionStart, s = t.isInCaretMode, o = t.keyEvent, a = r + e.length - n.length, u = e[a], d = e.substring(0, a), f = n.substring(0, r), y = [];
  if (d === f && r > 0)
    return y.push([i[r - 1], f[r - 1]]), y;
  if (d.indexOf(f) === 0 && s && (o.key === $r.DELETE || o.key === $r.BACKSPACE) || d.indexOf(f) === 0 && !s && (f.length === 0 || i[f.length - 1] !== i[f.length])) {
    var c = "";
    !s && f.length === 1 && y.push([i[0], f[0]]);
    for (var m = f.length; m < d.length; m++)
      i[m] !== c && i[m] !== Fe.formatSeparator && (c = i[m], y.push([c, ""]));
    return y;
  }
  if (s && (f.indexOf(d) === 0 || i[r - 1] === Fe.formatSeparator) || !s && (f.indexOf(d) === 0 || i[r - 1] === Fe.formatSeparator)) {
    for (var S = i[0], m = Math.max(0, d.length - 1); m < i.length; m++)
      if (i[m] !== Fe.formatSeparator) {
        S = i[m];
        break;
      }
    return [[S, f[r - 1]]];
  }
  if (f[f.length - 1] === " " || f[f.length - 1] === u && i[a] === "_")
    return [[i[r - 1], Fe.formatSeparator]];
  var k = [[i[r - 1], f[r - 1]]];
  return k;
}, J$ = function(t, e) {
  return t[e.pattern[0]] = e.type, t;
}, Q$ = function(t) {
  return function(e, n) {
    var i = F(e);
    return i[t](n), i;
  };
}, Ae = function(t) {
  return t != null;
}, Nu = function() {
  return !!document;
}, Vs = function(t) {
  return Ae(t) && typeof t == "number" && !Number.isNaN(t);
}, Un = function(t) {
  return parseInt(t, 10);
}, Tu = function(t) {
  return Vs(Un(t)) && /^[0-9]+$/.test(t);
}, ei = function(t, e, n) {
  return Math.min(n, Math.max(e, t));
}, Le = function() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Object.assign.apply(Object, t);
}, X$ = function(t) {
  return typeof t == "function";
}, eE = function(t) {
  return !Ae(t) || isNaN(t.getTime()) ? 0 : Number(t.getFullYear().toString().slice(-2));
}, tE = Q$("setFullYear"), nE = function(t) {
  var e = t && t.match(/S+(\1)/);
  return e ? e[0].length : 0;
}, iE = function(t) {
  return Math.pow(10, 3 - t);
}, qo = function(t, e, n, i, r, s, o, a) {
  return !!(t && t.getFullYear() === e && t.getMonth() === n && t.getDate() === i && t.getHours() === r && t.getMinutes() === s && t.getSeconds() === o && t.getMilliseconds() === a);
}, Wn = function(t) {
  return Ae(t) && t.getTime && Vs(t.getTime());
}, rE = function() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /Macintosh/i.test(navigator.userAgent);
}, sE = 1, Pu = 2e3, oE = 1900, aE = 2e3, lE = /d|M|H|h|m|s/, Yo = 2, cE = "M", Si = 1, uE = (
  /** @class */
  (function() {
    function t(e) {
      var n = e.intlService, i = e.formatPlaceholder, r = e.format, s = e.cycleTime, o = s === void 0 ? !1 : s, a = e.twoDigitYearMax, u = a === void 0 ? Fe.twoDigitYearMax : a, d = e.value, f = d === void 0 ? null : d, y = e.autoCorrectParts, c = y === void 0 ? !0 : y, m = e.toggleDayPeriod, S = m === void 0 ? !1 : m, k = e.autoSwitchParts, C = k === void 0 ? !0 : k;
      if (this.year = !0, this.month = !0, this.date = !0, this.hours = !0, this.minutes = !0, this.seconds = !0, this.milliseconds = !0, this.dayperiod = !0, this.leadingZero = null, this.typedMonthPart = "", this.knownParts = "adHhmMsEyS", this.symbols = {
        E: "E",
        H: "H",
        M: "M",
        a: "a",
        d: "d",
        h: "h",
        m: "m",
        s: "s",
        y: "y",
        S: "S"
      }, this._value = this.getDefaultDate(), this.cycleTime = !1, this._partiallyInvalidDate = {
        startDate: null,
        invalidDateParts: {
          E: { value: null, date: null, startDateOffset: 0 },
          H: { value: null, date: null, startDateOffset: 0 },
          M: { value: null, date: null, startDateOffset: 0 },
          a: { value: null, date: null, startDateOffset: 0 },
          d: { value: null, date: null, startDateOffset: 0 },
          h: { value: null, date: null, startDateOffset: 0 },
          m: { value: null, date: null, startDateOffset: 0 },
          s: { value: null, date: null, startDateOffset: 0 },
          y: { value: null, date: null, startDateOffset: 0 },
          S: { value: null, date: null, startDateOffset: 0 }
        }
      }, this.setOptions({
        intlService: n,
        formatPlaceholder: i,
        format: r,
        cycleTime: o,
        twoDigitYearMax: u,
        value: f,
        autoCorrectParts: c,
        toggleDayPeriod: S,
        autoSwitchParts: C
      }), f)
        this._value = F(f);
      else {
        this._value = this.getDefaultDate();
        for (var h = this.dateFormatString(this.value, this.format).symbols, b = 0; b < h.length; b++)
          this.setExisting(h[b], !1);
      }
    }
    return Object.defineProperty(t.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(e) {
        e && !(e instanceof Date) || (this._value = e, this.resetInvalidDate());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "localeId", {
      get: function() {
        for (var e = Fe.defaultLocaleId, n = Object.keys(this.intl.cldr), i = 0; i < n.length; i++) {
          var r = n[i], s = this.intl.cldr[r];
          if (s.name && s.calendar && s.numbers && s.name !== Fe.defaultLocaleId) {
            e = s.name;
            break;
          }
        }
        return e;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.setOptions = function(e) {
      this.intl = e.intlService, this.formatPlaceholder = e.formatPlaceholder || "wide", this.format = e.format, this.cycleTime = e.cycleTime, this.monthNames = this.allFormattedMonths(this.localeId), this.dayPeriods = this.allDayPeriods(this.localeId), this.twoDigitYearMax = e.twoDigitYearMax, this.autoCorrectParts = e.autoCorrectParts, this.toggleDayPeriod = e.toggleDayPeriod, this.autoSwitchParts = e.autoSwitchParts;
    }, t.prototype.setValue = function(e) {
      e ? Kt(e, this._value) ? Kt(e, this._value) && this.dayPeriods && this.setExisting("a", !0) : (this._value = F(e), this.modifyExisting(!0)) : (this._value = this.getDefaultDate(), this.modifyExisting(!1)), this.resetInvalidDate();
    }, t.prototype.hasValue = function() {
      var e = this, n = function(i, r) {
        return i || r.type !== "literal" && r.type !== "dayperiod" && e.getExisting(r.pattern[0]);
      };
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(n, !1);
    }, t.prototype.getValue = function() {
      for (var e = 0; e < this.knownParts.length; e++)
        if (!this.getExisting(this.knownParts[e]))
          return null;
      return F(this.value);
    }, t.prototype.createDefaultDate = function() {
      return Zt(Pu, 0, 31);
    }, t.prototype.getDefaultDate = function() {
      return Se(this.createDefaultDate());
    }, t.prototype.getFormattedDate = function(e) {
      return this.intl.formatDate(this.getValue(), e, this.localeId);
    }, t.prototype.getTextAndFormat = function(e) {
      e === void 0 && (e = "");
      var n = e || this.format, i = this.intl.formatDate(this.value, n, this.localeId), r = this.dateFormatString(this.value, n);
      if (!this.autoCorrectParts && this._partiallyInvalidDate.startDate) {
        for (var s = "", o = this.intl.formatDate(this.value, n, this.localeId), a = this.getFormattedInvalidDates(n), u = 0; u < o.length; u++) {
          var d = r.symbols[u];
          if (r.partMap[u].type === "literal")
            s += i[u];
          else if (this.getInvalidDatePartValue(d)) {
            var f = this.getPartsForSegment(r, u);
            if (d === "M") {
              var y = (Un(this.getInvalidDatePartValue(d)) + Si).toString();
              if (f.length > Yo)
                s += a[d][u];
              else if (this.getInvalidDatePartValue(d)) {
                var c = Ei(f.length - y.length) + y;
                s += c, u += f.length - 1;
              } else
                s += a[d][u];
            } else if (this.getInvalidDatePartValue(d)) {
              var y = this.getInvalidDatePartValue(d).toString(), c = Ei(f.length - y.length) + y;
              s += c, u += f.length - 1;
            } else
              s += a[d][u];
          } else
            s += i[u];
        }
        i = s;
      }
      var m = this.merge(i, r);
      return m;
    }, t.prototype.getFormattedInvalidDates = function(e) {
      var n = this;
      e === void 0 && (e = "");
      var i = e || this.format, r = {
        E: "",
        H: "",
        M: "",
        a: "",
        d: "",
        h: "",
        m: "",
        s: "",
        y: "",
        S: ""
      };
      return Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(s) {
        var o = n.getInvalidDatePart(s).date;
        if (o) {
          var a = n.intl.formatDate(o, i, n.localeId);
          r[s] = a;
        }
      }), r;
    }, t.prototype.modifyExisting = function(e) {
      for (var n = this.dateFormatString(this.value, this.format).symbols, i = 0; i < n.length; i++)
        this.setExisting(n[i], e);
    }, t.prototype.getExisting = function(e) {
      switch (e) {
        case "y":
          return this.year;
        case "M":
        case "L":
          return this.month;
        case "d":
          return this.date;
        case "E":
          return this.date && this.month && this.year;
        case "h":
        case "H":
          return this.hours;
        case "t":
        case "a":
          return this.dayperiod;
        case "m":
          return this.minutes;
        case "s":
          return this.seconds;
        case "S":
          return this.milliseconds;
        default:
          return !0;
      }
    }, t.prototype.setExisting = function(e, n) {
      switch (e) {
        case "y":
          this.year = n, n === !1 && this._value.setFullYear(Pu);
          break;
        case "M":
          this.month = n, n === !1 && this.autoCorrectParts && this._value.setMonth(0);
          break;
        case "d":
          this.date = n;
          break;
        case "h":
        case "H":
          this.hours = n;
          break;
        case "t":
        case "a":
          this.dayperiod = n;
          break;
        case "m":
          this.minutes = n;
          break;
        case "s":
          this.seconds = n;
          break;
        case "S":
          this.milliseconds = n;
          break;
      }
      this.getValue() && this.resetInvalidDate();
    }, t.prototype.modifyPart = function(e, n) {
      if (!(!Ae(e) || !Ae(n) || n === 0)) {
        var i = F(this.value), r = !1, s, o = e === "M", a = e === "d" || e === "E", u = this.getExisting(e);
        if (!this.autoCorrectParts && (a || o)) {
          var d = this._partiallyInvalidDate.invalidDateParts || {}, f = this.getInvalidDatePartValue(e), y = d.y.value || i.getFullYear(), c = d.M.value || i.getMonth(), m = d.d.value || d.E.value || i.getDate(), S = d.h.value || d.H.value || i.getHours(), k = d.m.value || i.getMinutes(), C = d.s.value || i.getSeconds(), h = d.S.value || i.getMilliseconds();
          switch (e) {
            case "y":
              y += n;
              break;
            case "M":
              c += n;
              break;
            case "d":
            case "E":
              m += n;
              break;
          }
          if (e === "M") {
            if ((c < 0 || c > 11) && u) {
              this.setExisting(e, !1), this.resetInvalidDateSymbol(e);
              return;
            }
            if (!u) {
              if (c < 0)
                c = ei(11 + (c % 11 + 1), 0, 11);
              else {
                var b = Ae(f) ? c : (n - Si) % 12;
                c = ei(b, 0, 11);
              }
              c = ei(c, 0, 11);
            }
            c = ei(c, 0, 11);
          } else if (e === "d") {
            if (u) {
              if (m <= 0 || m > 31) {
                this.setExisting(e, !1), this.resetInvalidDateSymbol(e);
                return;
              }
            } else if (!u) {
              if (Ae(f) && (m <= 0 || m > 31)) {
                this.setExisting(e, !1), this.resetInvalidDateSymbol(e);
                return;
              }
              if (n < 0) {
                var w = Ae(f) ? m : 1 + (31 - Math.abs(n % 31));
                m = ei(w, 1, 31);
              } else {
                var w = Ae(f) ? m : n % 31;
                m = ei(w, 1, 31);
              }
              m = ei(m, 1, 31);
            }
          }
          var E = Zt(y, c, m, S, k, C, h), $ = o || a ? this.modifyDateSymbolWithValue(i, e, o ? c : m) : null, D = qo(E, y, c, m, S, k, C, h);
          this.getValue() && qo(E, y, c, m, S, k, C, h) ? (i = F(E), this.markDatePartsAsExisting()) : o && $ ? $.getMonth() === c ? this.getExisting("d") ? D ? (i = F(E), this.resetInvalidDateSymbol(e)) : (s = !0, this.setInvalidDatePart(e, {
            value: c,
            date: F($),
            startDateOffset: n,
            startDate: F(this.value)
          }), this.setExisting(e, !1)) : D ? (this.resetInvalidDateSymbol(e), i = F(E), this.getExisting("M") && this.getExisting("y") && (this.setExisting("d", !0), this.resetInvalidDateSymbol("d"))) : (this.resetInvalidDateSymbol(e), i = F($)) : (s = !0, this.setInvalidDatePart(e, {
            value: c,
            date: F($),
            startDateOffset: n,
            startDate: F(this.value)
          }), this.setExisting(e, !1)) : a && $ && ($.getDate() === m ? this.getExisting("M") ? D ? (i = F(E), this.resetInvalidDateSymbol(e)) : (s = !0, this.setInvalidDatePart(e, {
            value: m,
            date: F($),
            startDateOffset: n,
            startDate: F(this.value)
          }), this.setExisting(e, !1)) : D ? (i = F(E), this.resetInvalidDateSymbol(e), this.getExisting("d") && this.getExisting("y") && (this.setExisting("M", !0), this.resetInvalidDateSymbol("M"))) : (this.resetInvalidDateSymbol(e), i = F($)) : (s = !0, this.setInvalidDatePart(e, {
            value: m,
            date: F(this.value),
            startDateOffset: n,
            startDate: F(this.value)
          }), this.setExisting(e, !1)));
        } else {
          var T = i.getHours();
          switch (e) {
            case "y":
              i.setFullYear(i.getFullYear() + n);
              break;
            case "M":
              i = ut(this.value, n);
              break;
            case "d":
            case "E":
              i.setDate(i.getDate() + n);
              break;
            case "h":
            case "H":
              i.setHours(i.getHours() + n), r = !0;
              break;
            case "m":
              i.setMinutes(i.getMinutes() + n), r = !0;
              break;
            case "s":
              i.setSeconds(i.getSeconds() + n), r = !0;
              break;
            case "S":
              i.setMilliseconds(i.getMilliseconds() + n);
              break;
            case "a":
              this.toggleDayPeriod ? i.setHours(T >= 12 ? T - 12 : T + 12) : i.setHours(i.getHours() + 12 * n), r = !0;
              break;
          }
        }
        this.shouldNormalizeCentury() && (i = this.normalizeCentury(i)), r && !this.cycleTime && (i.getDate(), this._value.getDate()), s || (this.setExisting(e, !0), this._value = i, this.getValue() && this.resetInvalidDate());
      }
    }, t.prototype.parsePart = function(e) {
      for (var n = e.symbol, i = e.currentChar, r = e.resetSegmentValue, s = e.cycleSegmentValue, o = e.rawTextValue, a = e.isDeleting, u = e.originalFormat, d = !s, f = this.dateFormatString(this.value, this.format), y = f.partMap.filter(function(mt) {
        return mt.type === "literal";
      }).map(function(mt, Cn) {
        return {
          datePartIndex: Cn,
          type: mt.type,
          pattern: mt.pattern,
          literal: ""
        };
      }), c = f.partMap.map(function(mt) {
        return {
          type: mt.type,
          pattern: mt.pattern,
          text: ""
        };
      }), m = 0; m < y.length; m++) {
        for (var S = y[m], k = 0; k < S.pattern.length; k++)
          y[m + k] && (y[m + k].literal = S.pattern[k]);
        m += S.pattern.length - 1;
      }
      for (var m = 0; m < c.length; m++) {
        for (var S = c[m], k = 0; k < S.pattern.length; k++)
          c[m + k] && (c[m + k].text = S.pattern[k]);
        m += S.pattern.length - 1;
      }
      var C = d && n === "M" && f.partMap.filter(function(mt) {
        return mt.type === "month";
      }).some(function(mt) {
        return mt.pattern.length > Yo;
      }), h = {
        value: null,
        switchToNext: !1,
        resetPart: C,
        hasInvalidDatePart: !1
      };
      if (!i)
        if (d)
          for (var m = 0; m < y.length; m++) {
            var b = y[m].literal, w = o.startsWith(b), E = o.endsWith(b), $ = o.indexOf(b + b) >= 0;
            if (w || E || $)
              return this.resetLeadingZero(), this.setExisting(n, !1), this.resetInvalidDateSymbol(n), Le(h, { value: null, switchToNext: !1 });
          }
        else
          return this.resetLeadingZero(), this.setExisting(n, !1), this.resetInvalidDateSymbol(n), Le(h, { value: null, switchToNext: !1 });
      for (var D = this.intl.formatDate(this.value, this.format, this.localeId), T = f.symbols, O = !1, A = "", L = "", B = "", X = "", z = "", Q = "", H = "", m = 0; m < c.length; m++)
        H += c[m].text;
      var V = this.format === T || this.format === H || this.format === u || this.format.length === u.length, re = (V ? H : u).indexOf(n), P = (V ? H : u).lastIndexOf(n), Y = P - re + 1, M = u.length - o.length;
      if (d || !d && !this.autoCorrectParts) {
        for (var I = 0, m = 0; m < D.length; m++)
          if (T[m] === n) {
            var j = this.getExisting(n);
            if (n === "y")
              if (!this.hasInvalidDatePart() && this.getExisting("y"))
                L += D[m];
              else {
                var Z = this.getInvalidDatePartValue(n);
                Ae(Z) ? (L += (Z || "").toString()[I] || "", I++) : L += j ? D[m] : "0";
              }
            else
              L += j ? D[m] : "0";
            M > 0 ? B.length + M < Y && (B += o[m] || "") : B += o[m] || "", O = !0;
          } else O ? (Q += D[m], z += D[m]) : (A += D[m], X += D[m]);
        if (V && (H.length < o.length ? B += i : !a && u.length > o.length, B.length > Y))
          return Le(h, { value: null, switchToNext: !1 });
        if (!V || V && !this.autoCorrectParts) {
          L = "", B = "", A = "", Q = "", O = !1;
          for (var G = 0, m = 0; m < u.length; m++)
            if (u[m] === n) {
              var j = this.getExisting(n);
              if (n === "y")
                if (!this.hasInvalidDatePart() && this.getExisting("y"))
                  L += D[m];
                else {
                  var Z = this.getInvalidDatePartValue(n);
                  Ae(Z) ? (L += (Z || "").toString()[G] || "", G++) : L += j ? D[m] : "0";
                }
              else
                L += j ? D[m] || "" : "0";
              M > 0 ? B.length + M < Y && (B += o[m] || "") : B += o[m] || "", O = !0;
            } else O ? Q += o[m - M] || "" : A += o[m] || "";
          u.length < o.length && (B += i);
        }
      }
      if (!d)
        if (this.autoCorrectParts) {
          L = "", B = "", A = "", Q = "", O = !1;
          for (var m = 0; m < D.length; m++)
            if (T[m] === n) {
              var j = this.getExisting(n);
              L += j ? D[m] : "0", O = !0;
            } else O ? Q += D[m] : A += D[m];
        } else
          L = r ? B : L;
      var q = null, ae = this.matchMonth(i), _ = ae.monthName, K = ae.matchesCount, se = this.matchDayPeriod(i, n), ce = i === "0", ve = this.leadingZero || {};
      if (ce) {
        B === "0" && (B = L);
        var W = Un(r ? i : (d ? B : L) + i);
        W === 0 && !this.isAbbrMonth(f.partMap, n) && n !== "a" && this.incrementLeadingZero(n);
      } else
        this.resetLeadingZero();
      var st = this.partPattern(f.partMap, n), Te = st ? st.pattern : null, be = this.patternLength(Te) || (Te ? Te.length : 0);
      if (d && a && !B)
        return this.setExisting(n, !1), Le(h, { value: null, switchToNext: !1 });
      for (var $e = L.length - 3, ht = !0, ye = d ? B : L, m = Math.max(0, $e); m <= L.length && ht; m++) {
        ye = r ? i : d ? B : L.substring(m) + i, this.autoSwitchParts && n === "h" && L.substring(m) === "12" && (ye = ye.replace("12", "0")), (d || !this.autoCorrectParts) && (ht = !1, ye = Ou(ye), ye = Ei(be - ye.length) + ye);
        var oe = parseInt(ye, 10), Ie = A + ye + Q;
        q = this.intl.parseDate(Ie, this.format, this.localeId), q && this.value && f.partMap.every(function(Cn) {
          return Cn.type !== "year" && Cn.type !== "month" && Cn.type != "day";
        }) && (q.setFullYear(this.value.getFullYear()), q.setMonth(this.value.getMonth()), q.setDate(this.value.getDate()));
        var Ke = !1;
        d && !Wn(q) && this.autoCorrectParts && (q = this.intl.parseDate(X + ye + z, this.format, this.localeId), Ke = !0);
        var He = !isNaN(parseInt(i, 10)) || d && a && i === "";
        if (!q && !isNaN(oe) && He && this.autoCorrectParts) {
          if (n === cE && !_) {
            var je = oe - Si;
            je > -1 && je < 12 && (q = F(this.value), q.setMonth(je), q.getMonth() !== je && (q = On(ut(q, -1))));
          }
          n === "y" && (q = Zt(parseInt(ye, 10), this.month ? this.value.getMonth() : 0, this.date ? this.value.getDate() : 1, this.hours ? this.value.getHours() : 0, this.minutes ? this.value.getMinutes() : 0, this.seconds ? this.value.getSeconds() : 0, this.milliseconds ? this.value.getMilliseconds() : 0), (d && Wn(q) || !d && q) && this.date && q.getDate() !== this.value.getDate() && (q = On(ut(q, -1))));
        }
        if (d && Wn(q) || !d && q) {
          var Mt = this.isPeekDateOverflowingDatePart({
            useBasePrefixAndSuffix: Ke,
            middle: ye,
            patternValue: Te,
            basePrefix: X,
            baseSuffix: z,
            prefix: A,
            suffix: Q,
            symbol: n,
            patternLength: be,
            leadingZero: ve
          }), gt = Mt.switchToNext;
          return this.shouldNormalizeCentury() && (q = this.normalizeCentury(q)), n === "H" && q.getHours() >= 12 && this.setExisting("a", !0), this._value = q, this.setExisting(n, !0), this.resetInvalidDateSymbol(n), this.autoCorrectParts || (n === "M" ? this.getExisting("M") && this.getExisting("y") && (this.setExisting("d", !0), this.resetInvalidDateSymbol("d")) : n === "d" ? this.getExisting("d") && this.getExisting("y") && (this.setExisting("M", !0), this.resetInvalidDateSymbol("M")) : n === "y" && this.markDatePartsAsExisting(), this.hasInvalidDatePart() || (this.markDatePartsAsExisting(), !Mt.peekedDate && Mt.switchToNext && !this.autoCorrectParts && (n === "M" || n === "d" && Mt.parsedPeekedValue === 30 && this.value.getMonth() === sE && (gt = !1)))), Le(h, { value: this.value, switchToNext: gt });
        }
      }
      if (_ && (q = this.intl.parseDate(A + _ + Q, this.format, this.localeId), q))
        return this._value = q, this.setExisting(n, !0), Le(h, { value: this.value, switchToNext: K === 1 });
      if (se && (q = this.intl.parseDate(A + se + Q, this.format) || this.intl.parseDate(X + se + z, this.format), q))
        return this._value = q, this.setExisting(n, !0), Le(h, { value: this.value, switchToNext: !0 });
      if (ce && n !== "a" && this.setExisting(n, !1), !this.autoCorrectParts) {
        var Ft = void 0, Gt = d ? B : ye, pt = Un(Gt);
        if (Vs(pt) && Tu(Gt)) {
          if (n === "d" && (pt <= 0 || pt > 31) || n === "M" && (pt <= 0 || pt > 11)) {
            if (d)
              return Le(h, {
                value: null,
                switchToNext: !1
              });
            Gt = i, pt = Un(Gt);
          }
          if (!Vs(pt) || !Tu(Gt))
            return Le(h, { value: null, switchToNext: !1 });
          Ft = n === "M" ? pt - Si : pt;
          var fn = n === "y", vn = n === "M", Dn = n === "d", J = F(this._value), ke = this._partiallyInvalidDate.invalidDateParts || {}, Ot = fn ? Ft : ke.y.value || J.getFullYear(), Jt = vn ? Ft : ke.M.value || J.getMonth(), Qt = Dn ? Ft : ke.d.value || ke.E.value || J.getDate(), gn = ke.h.value || ke.H.value || J.getHours(), bi = ke.m.value || J.getMinutes(), Fr = ke.s.value || J.getSeconds(), zn = ke.S.value || J.getMilliseconds(), Lt = Zt(Ot, Jt, Qt, gn, bi, Fr, zn), wt = qo(Lt, Ot, Jt, Qt, gn, bi, Fr, zn), Ge = fn || vn || Dn ? this.modifyDateSymbolWithValue(J, n, fn ? Ot : vn ? Jt : Qt) : null, Vt = !1;
          if (vn && Ge ? Ge.getMonth() === Jt ? this.getExisting("d") ? wt ? (J = F(Lt), this.resetInvalidDateSymbol(n)) : (Vt = !0, this.setInvalidDatePart(n, {
            value: Jt,
            date: F(Ge),
            startDate: F(this.value)
          }), this.setExisting(n, !1)) : wt ? (this.resetInvalidDateSymbol(n), J = F(Lt), this.getExisting("M") && this.getExisting("y") && (this.setExisting("d", !0), this.resetInvalidDateSymbol("d"))) : (this.resetInvalidDateSymbol(n), J = F(Ge)) : (Vt = !0, this.setInvalidDatePart(n, {
            value: Jt,
            date: F(Ge),
            startDate: F(this.value)
          }), this.setExisting(n, !1)) : Dn && Ge ? Ge.getDate() === Qt ? this.getExisting("M") ? wt ? (J = F(Lt), this.resetInvalidDateSymbol(n)) : (Vt = !0, this.setInvalidDatePart(n, {
            value: Qt,
            date: F(Ge),
            startDate: F(this.value)
          }), this.setExisting(n, !1)) : wt ? (J = F(Lt), this.resetInvalidDateSymbol(n), this.getExisting("d") && this.getExisting("y") && (this.setExisting("M", !0), this.resetInvalidDateSymbol("M"))) : (this.resetInvalidDateSymbol(n), J = F(Ge)) : (Vt = !0, this.setInvalidDatePart(n, {
            value: Qt,
            date: F(this.value),
            startDate: F(this.value)
          }), this.setExisting(n, !1)) : fn && Ge && (Ge.getFullYear() === Ot ? this.getExisting("d") && this.getExisting("M") ? wt ? (J = F(Lt), this.resetInvalidDateSymbol(n)) : (Vt = !0, this.setInvalidDatePart(n, {
            value: Ot,
            date: F(Ge),
            startDate: F(this.value)
          }), this.setExisting(n, !1)) : wt ? (this.resetInvalidDateSymbol(n), J = F(Lt), this.getExisting("M") && this.getExisting("d") && (this.setExisting("y", !0), this.resetInvalidDateSymbol("y"))) : (this.resetInvalidDateSymbol(n), J = F(Ge)) : (Vt = !0, this.setInvalidDatePart(n, {
            value: Ot,
            date: F(Ge),
            startDate: F(this.value)
          }), this.setExisting(n, !1))), !Vt) {
            if (this.setExisting(n, !0), d && !Wn(q)) {
              var Xn = this.intl.parseDate(X + ye + z, this.format, this.localeId);
              Wn(Xn) && (this._value = Xn);
            } else
              this._value = J;
            this.getValue() && this.resetInvalidDate();
          }
          var gt = !1;
          if (n === "M")
            pt >= 2 || Gt.length >= 2 ? gt = !0 : gt = !1;
          else if (V) {
            var lo = this.isPeekDateOverflowingDatePart({
              useBasePrefixAndSuffix: !this.autoCorrectParts,
              middle: ye,
              patternValue: Te,
              basePrefix: X,
              baseSuffix: z,
              prefix: A,
              suffix: Q,
              symbol: n,
              patternLength: be,
              leadingZero: ve
            }).switchToNext;
            gt = lo;
          } else
            gt = Gt.length > Y;
          return Le(h, {
            value: null,
            switchToNext: gt,
            hasInvalidDatePart: Vt
          });
        }
      }
      return Le(h, { value: null, switchToNext: !1 });
    }, t.prototype.symbolMap = function(e) {
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(J$, {})[e];
    }, t.prototype.resetLeadingZero = function() {
      var e = this.leadingZero !== null;
      return this.setLeadingZero(null), e;
    }, t.prototype.setLeadingZero = function(e) {
      this.leadingZero = e;
    }, t.prototype.getLeadingZero = function() {
      return this.leadingZero || {};
    }, t.prototype.normalizeCentury = function(e) {
      if (!Ae(e))
        return e;
      var n = eE(e), i = this.getNormalizedCenturyBase(n), r = tE(e, i + n);
      return r;
    }, t.prototype.incrementLeadingZero = function(e) {
      var n = this.leadingZero || {};
      n[e] = (n[e] || 0) + 1, this.leadingZero = n;
    }, t.prototype.isAbbrMonth = function(e, n) {
      var i = this.partPattern(e, n);
      return i.type === "month" && i.names;
    }, t.prototype.partPattern = function(e, n) {
      return e.filter(function(i) {
        return i.pattern.indexOf(n) !== -1;
      })[0];
    }, t.prototype.peek = function(e, n) {
      if (!n)
        return e;
      var i = e.replace(/^0*/, "") + "0";
      return Ei(n.length - i.length) + i;
    }, t.prototype.matchMonth = function(e) {
      var n = this;
      if (this.typedMonthPart += e.toLowerCase(), this.monthNames.length === 0)
        return { monthName: "", matchesCount: 0 };
      for (; this.typedMonthPart.length > 0; ) {
        for (var i = [], r = 0; r < this.monthNames.length; r++) {
          var s = this.monthNames[r].toLowerCase();
          s.startsWith(this.typedMonthPart) && i.push(this.monthNames[r]);
        }
        if (i.length > 0)
          return { monthName: i[0], matchesCount: i.length };
        var o = parseInt(this.typedMonthPart, 10);
        if (o >= 1 && o <= 12 && o.toString().startsWith(this.typedMonthPart)) {
          var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], u = a.reduce(function(d, f) {
            return f.toString().startsWith(n.typedMonthPart) ? d + 1 : d;
          }, 0);
          return { monthName: this.monthNames[o - 1], matchesCount: u };
        }
        this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
      }
      return { monthName: "", matchesCount: 0 };
    }, t.prototype.matchDayPeriod = function(e, n) {
      var i = e.toLowerCase();
      if (n === "a" && this.dayPeriods) {
        if (this.dayPeriods.am.toLowerCase().startsWith(i))
          return this.dayPeriods.am;
        if (this.dayPeriods.pm.toLowerCase().startsWith(i))
          return this.dayPeriods.pm;
      }
      return "";
    }, t.prototype.allFormattedMonths = function(e) {
      e === void 0 && (e = "en");
      for (var n = this.intl.splitDateFormat(this.format, this.localeId), i = 0; i < n.length; i++)
        if (n[i].type === "month" && n[i].names)
          return this.intl.dateFormatNames(e, n[i].names);
      return [];
    }, t.prototype.allDayPeriods = function(e) {
      e === void 0 && (e = "en");
      for (var n = this.intl.splitDateFormat(this.format), i = 0; i < n.length; i++)
        if (n[i].type === "dayperiod" && n[i].names)
          return this.intl.dateFormatNames(e, n[i].names);
      return null;
    }, t.prototype.patternLength = function(e) {
      return e ? e[0] === "y" ? 4 : lE.test(e) ? 2 : 0 : 0;
    }, t.prototype.dateFormatString = function(e, n) {
      for (var i = this.intl.splitDateFormat(n, this.localeId), r = [], s = [], o = 0; o < i.length; o++)
        for (var a = this.intl.formatDate(e, { pattern: i[o].pattern }, this.localeId).length; a > 0; )
          r.push(this.symbols[i[o].pattern[0]] || Fe.formatSeparator), s.push(i[o]), a--;
      var u = new K$();
      return u.symbols = r.join(""), u.partMap = s, u;
    }, t.prototype.merge = function(e, n) {
      for (var i = "", r = "", s = n.symbols, o = !1, a = 0, u = this.getFormattedInvalidDates(s), d = s.length - 1; d >= 0; d--) {
        var f = this.getPartsForSegment(n, d);
        if (this.knownParts.indexOf(s[d]) === -1 || this.getExisting(s[d]))
          this.autoCorrectParts ? i = e[d] + i : e.length !== s.length ? o ? i = e[d] + i : a > 0 ? (i = e[d] + i, a--, a <= 0 && (o = !0)) : i = (e[d + e.length - s.length] || "") + i : i = e[d] + i, r = s[d] + r;
        else {
          var y = s[d], c = 0;
          if (this.autoCorrectParts || !this.autoCorrectParts && !this.getInvalidDatePartValue(y)) {
            for (; d >= 0 && y === s[d]; )
              d--;
            d++;
          }
          if (this.leadingZero && this.leadingZero[y])
            i = "0" + i;
          else if (!this.autoCorrectParts && this.getInvalidDatePartValue(y)) {
            var m = this.getInvalidDatePartValue(y).toString();
            if (y === "M")
              if (m = (Un(this.getInvalidDatePartValue(y)) + Si).toString(), f.length > Yo)
                i = u[y][d] + i;
              else {
                m = (Un(this.getInvalidDatePartValue(y)) + Si).toString();
                var S = Ei(f.length - m.length) + m;
                i = S + i, c = f.length - 1, a = m.length - f.length;
              }
            else {
              var S = Ei(f.length - m.length) + m;
              i = S + i, c = f.length - 1, a = m.length - f.length;
            }
          } else
            i = this.dateFieldName(n.partMap[d]) + i;
          for (; r.length < i.length; )
            r = s[d] + r;
          c !== 0 && (d = d - c + (e.length - s.length));
        }
      }
      return { text: i, format: r };
    }, t.prototype.dateFieldName = function(e) {
      var n = this.formatPlaceholder || "wide";
      return n[e.type] ? n[e.type] : n === "formatPattern" ? e.pattern : this.intl.dateFieldName(Object.assign(e, { nameType: n }));
    }, t.prototype.getNormalizedCenturyBase = function(e) {
      return e > this.twoDigitYearMax ? oE : aE;
    }, t.prototype.shouldNormalizeCentury = function() {
      return this.intl.splitDateFormat(this.format).some(function(e) {
        return e.pattern === "yy";
      });
    }, t.prototype.resetInvalidDate = function() {
      var e = this;
      this._partiallyInvalidDate.startDate = null, Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(n) {
        e.resetInvalidDatePart(n);
      });
    }, t.prototype.resetInvalidDateSymbol = function(e) {
      var n = this;
      this.resetInvalidDatePart(e);
      var i = !0;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(r) {
        n._partiallyInvalidDate.invalidDateParts[r] && Ae(n._partiallyInvalidDate.invalidDateParts[r].value) && (i = !1);
      }), i && this.resetInvalidDate();
    }, t.prototype.resetInvalidDatePart = function(e) {
      this._partiallyInvalidDate.invalidDateParts[e] && (this._partiallyInvalidDate.invalidDateParts[e] = {
        value: null,
        date: null,
        startDateOffset: 0
      });
    }, t.prototype.getInvalidDatePart = function(e) {
      var n = this._partiallyInvalidDate.invalidDateParts[e];
      return n || {};
    }, t.prototype.getInvalidDatePartValue = function(e) {
      var n = this._partiallyInvalidDate.invalidDateParts[e];
      return (n || {}).value;
    }, t.prototype.setInvalidDatePart = function(e, n) {
      var i = n.value, r = i === void 0 ? null : i, s = n.date, o = s === void 0 ? null : s, a = n.startDateOffset, u = a === void 0 ? 0 : a, d = n.startDate, f = d === void 0 ? null : d;
      this._partiallyInvalidDate.invalidDateParts[e] && (this._partiallyInvalidDate.invalidDateParts[e].value = r, this._partiallyInvalidDate.invalidDateParts[e].date = o, this._partiallyInvalidDate.invalidDateParts[e].startDateOffset = u, this._partiallyInvalidDate.startDate = f);
    }, t.prototype.hasInvalidDatePart = function() {
      var e = this, n = !1;
      return Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(i) {
        e._partiallyInvalidDate.invalidDateParts[i] && Ae(e._partiallyInvalidDate.invalidDateParts[i].value) && (n = !0);
      }), n;
    }, t.prototype.modifyDateSymbolWithOffset = function(e, n, i) {
      var r = F(e), s = !1;
      switch (n) {
        case "y":
          r.setFullYear(r.getFullYear() + i);
          break;
        case "M":
          r = ut(this.value, i);
          break;
        case "d":
        case "E":
          r.setDate(r.getDate() + i);
          break;
        case "h":
        case "H":
          r.setHours(r.getHours() + i), s = !0;
          break;
        case "m":
          r.setMinutes(r.getMinutes() + i), s = !0;
          break;
        case "s":
          r.setSeconds(r.getSeconds() + i), s = !0;
          break;
        case "S":
          r.setMilliseconds(r.getMilliseconds() + i);
          break;
        case "a":
          r.setHours(r.getHours() + 12 * i), s = !0;
          break;
      }
      return {
        date: r,
        timeModified: s
      };
    }, t.prototype.modifyDateSymbolWithValue = function(e, n, i) {
      var r = F(e);
      switch (n) {
        case "y":
          r.setFullYear(i);
          break;
        case "M":
          r = ut(e, i - e.getMonth());
          break;
        case "d":
        case "E":
          r.setDate(i);
          break;
        case "h":
        case "H":
          r.setHours(i);
          break;
        case "m":
          r.setMinutes(i);
          break;
        case "s":
          r.setSeconds(i);
          break;
        case "S":
          r.setMilliseconds(i);
          break;
        case "a":
          r.setHours(i);
          break;
      }
      return r;
    }, t.prototype.markDatePartsAsExisting = function() {
      this.modifyExisting(!0);
    }, t.prototype.getPartsForSegment = function(e, n) {
      for (var i = e.partMap[n], r = [], s = n; s < e.partMap.length; s++) {
        var o = e.partMap[s];
        if (i.type === o.type && i.pattern === o.pattern)
          r.push(o);
        else
          break;
      }
      for (var s = n - 1; s >= 0; s--) {
        var o = e.partMap[s];
        if (i.type === o.type && i.pattern === o.pattern)
          r.unshift(o);
        else
          break;
      }
      return r;
    }, t.prototype.isPeekDateOverflowingDatePart = function(e) {
      var n = e.useBasePrefixAndSuffix, i = e.middle, r = e.patternValue, s = e.basePrefix, o = e.baseSuffix, a = e.prefix, u = e.suffix, d = e.symbol, f = e.patternLength, y = e.leadingZero, c = this.peek(i, r), m = n ? "".concat(s).concat(c).concat(o) : "".concat(a).concat(c).concat(u), S = this.intl.parseDate(m, this.format, this.localeId), k = (this.leadingZero || {})[d] || 0, C = k + Ou(i).length >= f, h = Un(c), b = S === null || (y[d] ? r.length <= i.length : C);
      return {
        peekedDate: S,
        peekedDateString: m,
        peekedValue: c,
        parsedPeekedValue: h,
        switchToNext: b
      };
    }, t;
  })()
), cn = {
  BACKSPACE: 8,
  DELETE: 46,
  TAB: 9,
  ENTER: 13,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  END: 35,
  HOME: 36
}, dE = {
  events: {}
}, hE = (
  /** @class */
  (function() {
    function t(e) {
      this.options = Le({}, dE, e);
    }
    return t.prototype.destroy = function() {
      this.options = {};
    }, t.prototype.trigger = function(e, n) {
      n === void 0 && (n = {});
      var i = {
        defaultPrevented: !1,
        preventDefault: function() {
          i.defaultPrevented = !0;
        }
      };
      return X$(this.options.events[e]) ? (this.options.events[e](Le(i, n, {
        sender: this
      })), i.defaultPrevented) : !1;
    }, t;
  })()
), $t;
(function(t) {
  t.None = "none", t.Caret = "caret", t.Selection = "selection";
})($t || ($t = {}));
var Xt, wn = 1, Ru = "dragStart", Au = "drop", _u = "touchstart", zu = "mousedown", ju = "mouseup", Fu = "click", ms = "input", fs = "keydown", vs = "focus", gs = "blur", Lu = "paste", Vu = "DOMMouseScroll", bs = "mousewheel", op = "valueChange", ap = "inputEnd", lp = "blurEnd", cp = "focusEnd", ys = "change", Ko = {
  format: "d",
  hasPlaceholder: !1,
  placeholder: null,
  cycleTime: !0,
  locale: null,
  steps: {
    millisecond: wn,
    second: wn,
    minute: wn,
    hour: wn,
    day: wn,
    month: wn,
    year: wn
  },
  formatPlaceholder: null,
  events: (Xt = {}, Xt[op] = null, Xt[ms] = null, Xt[ap] = null, Xt[vs] = null, Xt[cp] = null, Xt[gs] = null, Xt[lp] = null, Xt[fs] = null, Xt[bs] = null, Xt[ys] = null, Xt),
  selectNearestSegmentOnFocus: !1,
  selectPreviousSegmentOnBackspace: !1,
  enableMouseWheel: !1,
  allowCaretMode: !1,
  autoSwitchParts: !0,
  autoSwitchKeys: [],
  twoDigitYearMax: Fe.twoDigitYearMax,
  autoCorrectParts: !0,
  autoFill: !1,
  toggleDayPeriod: !1
}, pE = (
  /** @class */
  (function(t) {
    Y$(e, t);
    function e(n, i) {
      var r = t.call(this, i) || this;
      return r.dateObject = null, r.currentText = "", r.currentFormat = "", r.interactionMode = $t.None, r.previousElementSelection = { start: 0, end: 0 }, r.init(n, i), r;
    }
    return Object.defineProperty(e.prototype, "value", {
      get: function() {
        return this.dateObject && this.dateObject.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function(n, i) {
      var r = Wn(this.options.value) ? F(this.options.value) : new Date(i.formattedValue);
      Wn(r) || (r = null), this.element = n, this.options = Le({}, Ko, i, { steps: ji(ji({}, Ko.steps), i.steps) }), this.intl = this.options.intlService, this.dateObject = this.createDateObject(), this.dateObject.setValue(r), this.setTextAndFormat(), this.bindEvents(), this.resetSegmentValue = !0, this.interactionMode = $t.None, this.forceUpdate();
    }, e.prototype.destroy = function() {
      this.unbindEvents(), this.dateObject = null, t.prototype.destroy.call(this);
    }, e.prototype.bindEvents = function() {
      this.onElementDragStart = this.onElementDragStart.bind(this), this.element.addEventListener(Ru, this.onElementDragStart), this.onElementDrop = this.onElementDrop.bind(this), this.element.addEventListener(Au, this.onElementDrop), this.onElementClick = this.onElementClick.bind(this), this.element.addEventListener(Fu, this.onElementClick), this.onElementMouseDown = this.onElementMouseDown.bind(this), this.element.addEventListener(zu, this.onElementMouseDown), this.element.addEventListener(_u, this.onElementMouseDown), this.onElementMouseUp = this.onElementMouseUp.bind(this), this.element.addEventListener(ju, this.onElementMouseUp), this.onElementInput = this.onElementInput.bind(this), this.element.addEventListener(ms, this.onElementInput), this.onElementKeyDown = this.onElementKeyDown.bind(this), this.element.addEventListener(fs, this.onElementKeyDown), this.onElementFocus = this.onElementFocus.bind(this), this.element.addEventListener(vs, this.onElementFocus), this.onElementBlur = this.onElementBlur.bind(this), this.element.addEventListener(gs, this.onElementBlur), this.onElementChange = this.onElementChange.bind(this), this.element.addEventListener(ys, this.onElementChange), this.onElementPaste = this.onElementPaste.bind(this), this.element.addEventListener(Lu, this.onElementPaste), this.onElementMouseWheel = this.onElementMouseWheel.bind(this), this.element.addEventListener(Vu, this.onElementMouseWheel), this.element.addEventListener(bs, this.onElementMouseWheel);
    }, e.prototype.unbindEvents = function() {
      this.element.removeEventListener(Ru, this.onElementDragStart), this.element.removeEventListener(Au, this.onElementDrop), this.element.removeEventListener(_u, this.onElementMouseDown), this.element.removeEventListener(zu, this.onElementMouseDown), this.element.removeEventListener(ju, this.onElementMouseUp), this.element.removeEventListener(Fu, this.onElementClick), this.element.removeEventListener(ms, this.onElementInput), this.element.removeEventListener(fs, this.onElementKeyDown), this.element.removeEventListener(vs, this.onElementFocus), this.element.removeEventListener(gs, this.onElementBlur), this.element.removeEventListener(ys, this.onElementChange), this.element.removeEventListener(Lu, this.onElementPaste), this.element.removeEventListener(Vu, this.onElementMouseWheel), this.element.removeEventListener(bs, this.onElementMouseWheel);
    }, e.prototype.setOptions = function(n, i) {
      i === void 0 && (i = !1), this.options = Le({}, this.options, n, { steps: ji(ji({}, Ko.steps), n.steps) }), this.setDateObjectOptions(), i && (this.unbindEvents(), this.init(this.element, this.options));
    }, e.prototype.setDateObjectOptions = function() {
      if (this.dateObject) {
        var n = this.getDateObjectOptions();
        this.dateObject.setOptions(n);
      }
    }, e.prototype.resetLocale = function() {
      this.unbindEvents(), this.init(this.element, this.options);
    }, e.prototype.isInCaretMode = function() {
      return this.interactionMode === $t.Caret;
    }, e.prototype.focus = function() {
      this.element.focus(), this.options.selectNearestSegmentOnFocus && this.selectNearestSegment(0);
    }, e.prototype.onElementDragStart = function(n) {
      n.preventDefault();
    }, e.prototype.onElementDrop = function(n) {
      n.preventDefault();
    }, e.prototype.onElementMouseDown = function() {
      this.mouseDownStarted = !0, this.focusedPriorToMouseDown = this.isActive;
    }, e.prototype.onElementMouseUp = function(n) {
      this.mouseDownStarted = !1, n.preventDefault();
    }, e.prototype.onElementClick = function(n) {
      this.mouseDownStarted = !1, this.switchedPartOnPreviousKeyAction = !1;
      var i = this.selection;
      if (this.isInCaretMode() && this.forceUpdate(), n.detail !== 3) if (this.isActive && this.options.selectNearestSegmentOnFocus) {
        var r = this.element.selectionStart !== this.element.selectionEnd, s = Ae(this.options.placeholder) && !this.dateObject.hasValue() && !this.focusedPriorToMouseDown, o = !r && s, a = o ? 0 : this.caret()[0];
        this.selectNearestSegment(a);
      } else
        this.setSelection(this.selectionByIndex(i.start));
    }, e.prototype.onElementInput = function(n) {
      this.triggerInput({ event: n });
      var i = this.elementValue;
      if (!(!this.element || !this.dateObject)) {
        var r = this.switchedPartOnPreviousKeyAction;
        if (this.isPasteInProgress) {
          this.options.allowCaretMode && (this.resetSegmentValue = !1), this.updateOnPaste(n), this.isPasteInProgress = !1;
          return;
        }
        var s = this.keyDownEvent || {}, o = s.keyCode === cn.BACKSPACE || s.key === $r.BACKSPACE, a = s.keyCode === cn.DELETE || s.key === $r.DELETE, u = this.interactionMode;
        this.options.allowCaretMode && u !== $t.Caret && !a && !o && (this.resetSegmentValue = !0), this.options.allowCaretMode ? this.interactionMode = $t.Caret : this.interactionMode = $t.Selection;
        var d = this.isInCaretMode();
        if (d && this.keyDownEvent.key === $r.SPACE) {
          this.restorePreviousInputEventState();
          return;
        }
        var f = this.dateObject && this.dateObject.getValue(), y = this.dateObject ? this.dateObject.value : null, c = this.dateObject.getTextAndFormat(), m = c.text, S = c.format;
        this.currentFormat = S;
        var k = "";
        d ? o || a ? k = this.previousElementValue : u === $t.Caret ? k = this.previousElementValue : k = m : k = m;
        var C = this.elementValue, h = G$({
          oldText: k,
          newText: C,
          formatPattern: this.currentFormat,
          selectionStart: this.selection.start,
          isInCaretMode: d,
          keyEvent: this.keyDownEvent
        });
        if (h && h.length && h[0] && h[0][1] !== Fe.formatSeparator && (this.switchedPartOnPreviousKeyAction = !1), d && (!h || h.length === 0)) {
          this.restorePreviousInputEventState();
          return;
        } else if (d && h.length === 1) {
          if (!h[0] || !h[0][0]) {
            this.restorePreviousInputEventState();
            return;
          } else if (d && h[0] && (h[0][0] === Fe.formatSeparator || h[0][1] === Fe.formatSeparator)) {
            this.restorePreviousInputEventState();
            return;
          }
        }
        var b = h.length === 1 && h[0][1] === Fe.formatSeparator, w = [], E = !1, $ = null;
        if (!b)
          for (var D = 0; D < h.length; D++) {
            var T = this.dateObject.parsePart({
              symbol: h[D][0],
              currentChar: h[D][1],
              resetSegmentValue: this.resetSegmentValue,
              cycleSegmentValue: !this.isInCaretMode(),
              rawTextValue: this.element.value,
              isDeleting: o || a,
              originalFormat: this.currentFormat
            });
            w.push(T), T.value || ($ = { type: "parse" }), E = T.switchToNext;
          }
        this.options.autoSwitchParts || (E = !1), this.resetSegmentValue = !1;
        var O = this.options.format === this.currentFormat || // all not fixed formats are 1 symbol, e.g. "d"
        Ae(this.options.format) && this.options.format.length > 1, A = w[w.length - 1], L = A && !Ae(A.value), B = d && (o || a) && L, X = A ? A.resetPart : !1, z = this.dateObject.getValue(), Q = !Kt(f, z), H = this.dateObject.value, V, re = this.selection;
        if (d) {
          var P = h && h.length > 0 ? h[0][0] : null, Y = this.dateObject.getLeadingZero()[P];
          h.length && h[0][0] !== Fe.formatSeparator ? E ? (this.forceUpdateWithSelection(), this.switchDateSegment(1)) : X ? (V = this.currentFormat[re.start], V ? (this.forceUpdate(), this.setSelection(this.selectionBySymbol(V))) : this.restorePreviousInputEventState()) : B ? (this.forceUpdate(), h.length && h[0][0] !== Fe.formatSeparator && this.setSelection(this.selectionBySymbol(h[0][0]))) : L ? n.data === "0" && Y || (Ae(f) && !Ae(z) ? this.restorePreviousInputEventState() : !Ae(f) && Ae(z) ? this.forceUpdateWithSelection() : Ae(f) && Ae(z) ? Q ? this.forceUpdateWithSelection() : this.restorePreviousInputEventState() : !Ae(f) && !Ae(z) ? this.forceUpdateWithSelection() : y !== H || this.restorePreviousInputEventState()) : L || O || this.forceUpdateWithSelection() : !this.options.autoSwitchParts && h[0][1] === Fe.formatSeparator || this.setSelection(this.selectionBySymbol(h[0][0]));
        } else d || (this.forceUpdate(), h.length && h[0][0] !== Fe.formatSeparator && this.setSelection(this.selectionBySymbol(h[0][0])), this.options.autoSwitchParts ? b ? (this.resetSegmentValue = !0, r || this.switchDateSegment(1), this.switchedPartOnPreviousKeyAction = !0) : E && (this.switchDateSegment(1), this.switchedPartOnPreviousKeyAction = !0) : A && A.switchToNext ? this.resetSegmentValue = !0 : b && (this.resetSegmentValue = !0, r || this.switchDateSegment(1), this.switchedPartOnPreviousKeyAction = !0), o && this.options.selectPreviousSegmentOnBackspace && this.switchDateSegment(-1));
        this.tryTriggerValueChange({
          oldValue: f,
          event: n
        }), this.triggerInputEnd({ event: n, error: $, oldElementValue: i, newElementValue: this.elementValue }), d && this.setTextAndFormat();
      }
    }, e.prototype.onElementFocus = function(n) {
      this.triggerFocus({ event: n }) || (this.isActive = !0, this.interactionMode = $t.None, this.switchedPartOnPreviousKeyAction = !1, this.refreshElementValue(), this.mouseDownStarted || this.caret(0, this.elementValue.length), this.mouseDownStarted = !1, this.triggerFocusEnd({ event: n }));
    }, e.prototype.onElementBlur = function(n) {
      this.resetSegmentValue = !0, this.isActive = !1, !this.triggerBlur({ event: n }) && (this.options.autoFill && this.autoFill(), this.interactionMode = $t.None, this.switchedPartOnPreviousKeyAction = !1, this.refreshElementValue(), this.triggerBlurEnd({ event: n }));
    }, e.prototype.onElementChange = function(n) {
      this.triggerChange({ event: n });
    }, e.prototype.onElementKeyDown = function(n) {
      if (!this.triggerKeyDown({ event: n })) {
        var i = this.selection, r = i.start, s = i.end, o = n;
        if (this.keyDownEvent = n, this.previousElementValue = this.element.value, this.previousElementSelection = { start: r, end: s }, this.keyEventMatchesAutoSwitchKeys(n)) {
          var a = n.keyCode === cn.TAB;
          if (a) {
            var u = this.selection, d = u.start, f = u.end;
            if (n.shiftKey && a ? this.switchDateSegment(-1) : this.switchDateSegment(1), d !== this.selection.start || f !== this.selection.end) {
              n.preventDefault();
              return;
            }
          } else {
            n.preventDefault(), this.switchDateSegment(1);
            return;
          }
        }
        var y = this.currentFormat[this.selection.start], c = this.getStepFromSymbol(y), m = !1, S = this.elementValue;
        if (!(n.altKey || n.ctrlKey || n.metaKey || n.keyCode === cn.TAB)) {
          switch (n.keyCode) {
            case cn.ARROW_LEFT:
              this.switchDateSegment(-1), m = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case cn.ARROW_UP:
              this.modifyDateSegmentValue(c, y, o), S !== this.elementValue && this.triggerInputEnd({ event: n, error: null, newElementValue: this.elementValue, oldElementValue: S }), m = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case cn.ARROW_RIGHT:
              this.switchDateSegment(1), m = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case cn.ARROW_DOWN:
              this.modifyDateSegmentValue(-c, y, o), S !== this.elementValue && this.triggerInputEnd({ event: n, error: null, newElementValue: this.elementValue, oldElementValue: S }), m = !0, this.switchedPartOnPreviousKeyAction = !1;
              break;
            case cn.ENTER:
              break;
            case cn.HOME:
              this.selectNearestSegment(0), m = !0, this.switchedPartOnPreviousKeyAction = !1, this.resetSegmentValue = !0;
              break;
            case cn.END:
              this.selectNearestSegment(this.elementValue.length), m = !0, this.switchedPartOnPreviousKeyAction = !1, this.resetSegmentValue = !0;
              break;
            default:
              return;
          }
          m && n.preventDefault();
        }
      }
    }, e.prototype.onElementPaste = function() {
      this.isPasteInProgress = !0;
    }, e.prototype.onElementMouseWheel = function(n) {
      var i = this.elementValue;
      if (!(!this.options.enableMouseWheel || this.triggerMouseWheel({ event: n })) && this.isActive) {
        var r = n;
        r.shiftKey ? this.switchDateSegment((r.wheelDelta || -r.detail) > 0 ? -1 : 1) : this.modifyDateSegmentValue((r.wheelDelta || -r.detail) > 0 ? 1 : -1), r.returnValue = !1, r.preventDefault && r.preventDefault(), i !== this.elementValue && this.triggerInputEnd({ event: n, error: null, newElementValue: this.elementValue, oldElementValue: i });
      }
    }, e.prototype.updateOnPaste = function(n) {
      var i = this.intl.parseDate(this.elementValue, this.inputFormat) || this.value;
      Ae(i) && this.dateObject.shouldNormalizeCentury() && (i = this.dateObject.normalizeCentury(i));
      var r = this.dateObject && this.dateObject.getValue();
      this.writeValue(i), this.tryTriggerValueChange({
        oldValue: r,
        event: n
      });
    }, Object.defineProperty(e.prototype, "elementValue", {
      get: function() {
        return (this.element || {}).value || "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "inputFormat", {
      get: function() {
        return this.options.format ? typeof this.options.format == "string" ? this.options.format : this.options.format.inputFormat : Fe.defaultDateFormat;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "displayFormat", {
      get: function() {
        return this.options.format ? typeof this.options.format == "string" ? this.options.format : this.options.format.displayFormat : Fe.defaultDateFormat;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "selection", {
      get: function() {
        var n = { start: 0, end: 0 };
        return this.element !== null && this.element.selectionStart !== void 0 && (n = {
          start: this.element.selectionStart,
          end: this.element.selectionEnd
        }), n;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setSelection = function(n) {
      this.element && document.activeElement === this.element && (this.element.setSelectionRange(n.start, n.end), Nu() && rE() && this.element.scrollIntoView({ block: "nearest", inline: "nearest" }), n.start !== n.end && (this.interactionMode = $t.Selection));
    }, e.prototype.selectionBySymbol = function(n) {
      for (var i = -1, r = 0, s = 0; s < this.currentFormat.length; s++)
        this.currentFormat[s] === n && (r = s + 1, i === -1 && (i = s));
      return i < 0 && (i = 0), !this.options.autoCorrectParts && this.currentFormat.length !== this.currentText.length && (this.currentFormat.length < this.currentText.length ? r += this.currentText.length - this.currentFormat.length : r = Math.max(0, r - (this.currentFormat.length - this.currentText.length))), { start: i, end: r };
    }, e.prototype.selectionByIndex = function(n) {
      for (var i = { start: n, end: n }, r = n, s = n - 1; r < this.currentFormat.length || s >= 0; r++, s--) {
        if (r < this.currentFormat.length && this.currentFormat[r] !== Fe.formatSeparator) {
          i = this.selectionBySymbol(this.currentFormat[r]);
          break;
        }
        if (s >= 0 && this.currentFormat[s] !== Fe.formatSeparator) {
          i = this.selectionBySymbol(this.currentFormat[s]);
          break;
        }
      }
      return i;
    }, e.prototype.switchDateSegment = function(n) {
      var i = this.selection;
      if (this.isInCaretMode()) {
        var r = i.start, s = this.currentFormat[r - 1], o = "", a = "";
        if (n < 0) {
          for (var u = r + n; u >= 0; u--)
            if (a = this.currentFormat[u], a !== Fe.formatSeparator && a !== s) {
              r = u, o = a;
              break;
            }
        } else
          for (var u = r + n; u < this.currentFormat.length; u++)
            if (a = this.currentFormat[u], a !== Fe.formatSeparator && a !== s) {
              r = u, o = a;
              break;
            }
        if (o) {
          this.forceUpdate(), this.setSelection(this.selectionBySymbol(o)), this.interactionMode = $t.Selection;
          return;
        }
      }
      this.interactionMode = $t.None;
      var d = this.selection, f = d.start, y = d.end;
      if (f < y && this.currentFormat[f] !== this.currentFormat[y - 1]) {
        this.setSelection(this.selectionByIndex(n > 0 ? f : y - 1)), this.resetSegmentValue = !0, this.interactionMode = $t.None;
        return;
      }
      for (var c = this.currentFormat[f], m = f + n; m > 0 && m < this.currentFormat.length && !(this.currentFormat[m] !== c && this.currentFormat[m] !== Fe.formatSeparator); )
        m += n;
      if (this.currentFormat[m] !== Fe.formatSeparator) {
        for (var S = m; S >= 0 && S < this.currentFormat.length && this.currentFormat[S] === this.currentFormat[m]; )
          S += n;
        m > S && (S + 1 !== f || m + 1 !== y) ? (this.setSelection({ start: S + 1, end: m + 1 }), this.resetSegmentValue = !0) : m < S && (m !== f || S !== y) && (this.setSelection({ start: m, end: S }), this.resetSegmentValue = !0), this.interactionMode = $t.None;
      }
    }, e.prototype.modifyDateSegmentValue = function(n, i, r) {
      if (i === void 0 && (i = ""), r === void 0 && (r = {}), !(!this.dateObject || this.options.readonly)) {
        var s = this.value, o = wn, a = this.caret();
        if (i = i || this.currentFormat[a[0]], i === "S" && (!this.options.steps.millisecond || this.options.steps.millisecond === wn)) {
          var u = nE(this.inputFormat);
          o = iE(u);
        }
        this.dateObject.modifyPart(i, o * n), this.tryTriggerValueChange({
          oldValue: s,
          event: r
        }), this.forceUpdate(), this.setSelection(this.selectionBySymbol(i));
      }
    }, e.prototype.tryTriggerValueChange = function(n) {
      if (n === void 0 && (n = { oldValue: null, event: {} }), !Kt(this.value, n.oldValue))
        return this.triggerValueChange(n);
    }, e.prototype.triggerValueChange = function(n) {
      return n === void 0 && (n = { oldValue: null, event: {} }), this.trigger(op, Le(n, {
        value: this.value
      }));
    }, e.prototype.triggerInput = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(ms, Le(n, {
        value: this.value
      }));
    }, e.prototype.triggerInputEnd = function(n) {
      return n === void 0 && (n = { event: {}, error: null, oldElementValue: "", newElementValue: "" }), this.trigger(ap, Le(n, {
        value: this.value
      }));
    }, e.prototype.triggerFocus = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(vs, Le({}, n));
    }, e.prototype.triggerFocusEnd = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(cp, Le({}, n));
    }, e.prototype.triggerBlur = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(gs, Le({}, n));
    }, e.prototype.triggerBlurEnd = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(lp, Le({}, n));
    }, e.prototype.triggerChange = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(ys, Le(n, {
        value: this.value
      }));
    }, e.prototype.triggerKeyDown = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(fs, Le({}, n));
    }, e.prototype.triggerMouseWheel = function(n) {
      return n === void 0 && (n = { event: {} }), this.trigger(bs, Le({}, n));
    }, e.prototype.forceUpdate = function() {
      this.setTextAndFormat(), this.refreshElementValue();
    }, e.prototype.forceUpdateWithSelection = function() {
      var n = this.selection, i = n.start, r = n.end, s = this.elementValue.length;
      this.forceUpdate();
      var o = this.elementValue.length - s;
      this.setSelection({
        start: i + o,
        end: r + o
      });
    }, e.prototype.setTextAndFormat = function() {
      var n = this.dateObject.getTextAndFormat(), i = n.text, r = n.format;
      this.currentFormat = r, this.currentText = i;
    }, e.prototype.setElementValue = function(n) {
      this.element.value = n;
    }, e.prototype.getStepFromSymbol = function(n) {
      switch (n) {
        case "S":
          return Number(this.options.steps.millisecond);
        case "s":
          return Number(this.options.steps.second);
        case "m":
          return Number(this.options.steps.minute);
        // represents hour as value from 01 through 12
        case "h":
        // represents hour as value from 01 through 23
        case "H":
          return Number(this.options.steps.hour);
        case "M":
          return Number(this.options.steps.month);
        // there is no 'D' format specifier for day
        case "d":
        // used for formats such as "EEEE, MMMM d, yyyy",
        // where "EEEE" stands for full name of the day e.g. Monday
        case "E":
          return Number(this.options.steps.day);
        // there is no 'Y' format specifier for year
        case "y":
          return Number(this.options.steps.year);
        default:
          return wn;
      }
    }, e.prototype.restorePreviousInputEventState = function() {
      this.restorePreviousElementValue(), this.restorePreviousElementSelection();
    }, e.prototype.restorePreviousElementValue = function() {
      this.setElementValue(this.previousElementValue || "");
    }, e.prototype.restorePreviousElementSelection = function() {
      var n = this.previousElementSelection, i = n.start, r = n.end;
      this.setSelection({ start: i || 0, end: r || 0 });
    }, e.prototype.writeValue = function(n) {
      this.verifyValue(n), this.dateObject = this.getDateObject(n), this.refreshElementValue();
    }, e.prototype.verifyValue = function(n) {
      if (n && !Wn(n))
        throw new Error("The 'value' should be a valid JavaScript Date instance.");
    }, e.prototype.refreshElementValue = function() {
      var n = this.element, i = this.isActive ? this.inputFormat : this.displayFormat, r = this.dateObject.getTextAndFormat(i), s = r.text, o = r.format;
      this.currentFormat = o, this.currentText = s;
      var a = this.options.hasPlaceholder || Ae(this.options.placeholder), u = !this.isActive && a && !this.dateObject.hasValue();
      a && Ae(this.options.placeholder) && (n.placeholder = this.options.placeholder);
      var d = u ? "" : s;
      this.previousElementValue = this.elementValue, this.setElementValue(d);
    }, e.prototype.caret = function(n, i) {
      i === void 0 && (i = n);
      var r = n !== void 0, s = [n, n], o = this.element;
      if (!(r && (this.options.disabled || this.options.readonly))) {
        try {
          o.selectionStart !== void 0 && (r && (Nu() && document.activeElement !== o && o.focus(), o.setSelectionRange(n, i)), s = [o.selectionStart, o.selectionEnd]);
        } catch {
          s = [];
        }
        return s;
      }
    }, e.prototype.selectNearestSegment = function(n) {
      for (var i = n, r = n - 1; i < this.currentFormat.length || r >= 0; i++, r--) {
        if (i < this.currentFormat.length && this.currentFormat[i] !== "_") {
          this.selectDateSegment(this.currentFormat[i]);
          return;
        }
        if (r >= 0 && this.currentFormat[r] !== "_") {
          this.selectDateSegment(this.currentFormat[r]);
          return;
        }
      }
    }, e.prototype.selectDateSegment = function(n) {
      for (var i = -1, r = 0, s = 0; s < this.currentFormat.length; s++)
        this.currentFormat[s] === n && (r = s + 1, i === -1 && (i = s));
      i < 0 && (i = 0), this.caret(0, 0), this.caret(i, r);
    }, e.prototype.getDateObject = function(n) {
      var i = (this.dateObject || {}).leadingZero;
      this.options.value = n;
      var r = this.createDateObject();
      return r.setLeadingZero(this.isActive ? i : null), r;
    }, e.prototype.createDateObject = function() {
      var n = this.getDateObjectOptions(), i = new uE(Le({}, n));
      return i;
    }, e.prototype.getDateObjectOptions = function() {
      var n = {
        intlService: this.options.intlService,
        formatPlaceholder: this.options.formatPlaceholder ? this.options.formatPlaceholder : "formatPattern",
        format: this.inputFormat,
        cycleTime: this.options.cycleTime,
        twoDigitYearMax: this.options.twoDigitYearMax,
        autoCorrectParts: this.options.autoCorrectParts,
        value: this.options.value,
        toggleDayPeriod: this.options.toggleDayPeriod,
        autoSwitchParts: this.options.autoSwitchParts
      };
      return n;
    }, e.prototype.keyEventMatchesAutoSwitchKeys = function(n) {
      var i = (this.options.autoSwitchKeys || []).map(function(r) {
        return r.toString().toLowerCase().trim();
      });
      return i.indexOf(n.keyCode.toString()) >= 0 || i.indexOf(n.keyCode) >= 0 || i.indexOf(n.key.toLowerCase().trim()) >= 0;
    }, e.prototype.autoFill = function() {
      var n = this.dateObject, i = /* @__PURE__ */ new Date(), r, s, o, a, u, d;
      (n.date || n.month || n.year || n.hours || n.minutes || n.seconds) && (o = n.year ? n.value.getFullYear() : i.getFullYear(), s = n.month ? n.value.getMonth() : i.getMonth(), r = n.date ? n.value.getDate() : i.getDate(), a = n.hours ? n.value.getHours() : i.getHours(), u = n.minutes ? n.value.getMinutes() : i.getMinutes(), d = n.seconds ? n.value.getSeconds() : i.getSeconds(), n.setValue(new Date(o, s, r, a, u, d)), this.refreshElementValue(), this.triggerValueChange());
    }, e;
  })(hE)
);
const mE = "d", fE = "wide", vE = (t, e, n) => t === null || !(e && e > t || n && n < t);
const rn = {
  dayperiod: "dayperiod",
  hour: "hour",
  millisecond: "millisecond",
  minute: "minute",
  second: "second"
};
const jl = (t) => (e, n) => {
  const i = F(e);
  return i[t](n), i;
}, up = [
  { type: rn.hour, getter: (t) => t.getHours() },
  { type: rn.minute, getter: (t) => t.getMinutes() },
  { type: rn.second, getter: (t) => t.getSeconds() },
  { type: rn.millisecond, getter: (t) => t.getMilliseconds() }
], gE = (t) => (e, n) => t(e), bE = (t) => (e, n) => t(n), yE = (t) => t.reduce((e, n) => (e[n.type] = n.type, e), {}), xE = (t) => (e) => t[e.type] ? bE(e.getter) : gE(e.getter), wE = (t) => (e) => t.map(xE(yE(e))), $E = (t, e, n, i) => (r) => {
  const s = t(r), o = t(n);
  return i === "hour" ? s - (s - o) % e : r.getTime() <= n.getTime() && s !== 0 && s <= o ? Math.ceil(s / e) * e : s - s % e;
}, EE = (t) => (e, n) => t.map((i) => {
  const r = Math.floor(e[i.type]);
  return r ? $E(i.getter, r, n, i.type) : i.getter;
}), SE = wE(up), Bu = EE(up), kE = (t) => (e, n) => (e.setHours(...t.map((i) => i(e, n))), e), Hu = (t) => (e) => {
  const n = F(e);
  return n.setHours(...t.map((i) => i(n))), n;
}, xs = jl("setHours"), ws = jl("setMinutes"), $s = jl("setSeconds"), Wi = () => /* @__PURE__ */ new Date(), Fl = (t, e, n = 1) => {
  const i = [];
  for (let r = t; r < e; r = r + n)
    i.push(r);
  return i;
}, Ll = (t, e, n) => ({
  candidateValue: Ct(ft, t),
  maxValue: _t(Ct(ft, n), e.getHours() < n.getHours() ? 0 : 1),
  minValue: Ct(ft, e)
}), DE = (t, e, n) => {
  if (!t || !e || !n)
    return t;
  const { candidateValue: i, minValue: r, maxValue: s } = Ll(t, e, n);
  return i < r ? Ct(t, e) : i > s ? Ct(t, n) : t;
}, Vl = (t, e, n) => {
  if (!t || !e || !n)
    return !0;
  const { candidateValue: i, minValue: r, maxValue: s } = Ll(t, e, n);
  return r <= i && i <= s;
}, CE = (t, e, n) => {
  if (t === null)
    return !0;
  const { candidateValue: i, minValue: r, maxValue: s } = Ll(t, e, n);
  return r <= i && i <= s;
}, IE = (t, e) => {
  if (t === null || e === null)
    return !1;
  const n = Ct(ft, t), i = Ct(ft, e);
  return n.getTime() < i.getHours();
}, ME = (t, e) => {
  if (t === null || e === null)
    return !1;
  const n = Ct(ft, t);
  return Ct(ft, e).getTime() < n.getHours();
};
const OE = (t) => {
  const e = no(), n = pn(), i = n && n.uDateInput, r = e.toLanguageString($a, Ce[$a]), s = (o) => {
    o.stopPropagation();
    const { onClick: a } = t;
    a && a.call(void 0, o);
  };
  return /* @__PURE__ */ p.createElement(
    "span",
    {
      className: N(Mi.clearButton({ c: i })),
      role: "button",
      onClick: s,
      tabIndex: t.tabindex || -1,
      title: r,
      key: "clearbutton"
    },
    /* @__PURE__ */ p.createElement(pi, { name: "x", icon: Qy })
  );
};
let NE = class {
  constructor(e) {
    this.service = e, this.cldr = {}, this.locale = e.locale, this.format = e.format, this.toString = e.toString, this.formatDate = e.formatDate, this.parseDate = e.parseDate, this.parseNumber = e.parseNumber, this.formatNumber = e.formatNumber, this.splitDateFormat = e.splitDateFormat, this.numberSymbols = e.numberSymbols, this.firstDay = e.firstDay, this.dateFieldName = e.dateFieldName, this.dateFormatNames = (i, r) => this.service.dateFormatNames(r), this.weekendRange = (i) => {
    };
    const n = Nn(this.locale);
    this.cldr[n.name] = n;
  }
};
const TE = "Please enter a valid value!", $n = p.forwardRef((t, e) => {
  var n;
  const i = gl(t.id), r = Jw(), s = no(), o = pn(), a = Ps(Uu, t).unstyled || o, {
    format: u = ot.format,
    size: d = ot.size,
    rounded: f = ot.rounded,
    fillMode: y = ot.fillMode,
    formatPlaceholder: c = ot.formatPlaceholder,
    spinners: m = ot.spinners,
    disabled: S = ot.disabled,
    min: k = ot.min,
    max: C = ot.max,
    minTime: h = ot.minTime,
    maxTime: b = ot.maxTime,
    validityStyles: w = ot.validityStyles,
    validationMessage: E = ot.validationMessage,
    placeholder: $ = ot.placeholder,
    enableMouseWheel: D = ot.enableMouseWheel,
    autoCorrectParts: T = ot.autoCorrectParts,
    autoSwitchParts: O = ot.autoSwitchParts,
    allowCaretMode: A = ot.allowCaretMode,
    twoDigitYearMax: L = ot.twoDigitYearMax,
    ariaHasPopup: B = ot.ariaHasPopup,
    autoFocus: X = ot.autoFocus
  } = Ps(Uu, t), z = () => Ke.current !== void 0 ? Ke.current : ye.current && ye.current.value, Q = () => {
    const J = ye.current && ye.current.currentText || "", ke = z();
    return $ != null && !Mt.focused && !ke ? $ : J;
  }, H = () => t.required !== void 0 ? t.required : !1, V = () => {
    const J = z() || t.value, ke = k, Ot = C, Jt = vE(J, ke, Ot) && Vl(J, h, b), Qt = E !== void 0, gn = (!H() || J != null) && Jt, bi = t.valid !== void 0 ? t.valid : gn;
    return {
      customError: Qt,
      rangeOverflow: J && Ot.getTime() < J.getTime() || !1,
      rangeUnderflow: J && J.getTime() < ke.getTime() || !1,
      valid: bi,
      valueMissing: J === null
    };
  }, re = () => {
    $e.current && $e.current.focus();
  }, P = () => new NE(r), Y = () => {
    const J = z();
    return {
      format: u,
      steps: t.steps,
      formatPlaceholder: c,
      placeholder: $,
      selectPreviousSegmentOnBackspace: !0,
      value: t.value || J,
      intlService: P(),
      autoFill: t.autoFill !== void 0 ? t.autoFill : !1,
      enableMouseWheel: D,
      autoCorrectParts: T,
      autoSwitchParts: O,
      autoSwitchKeys: t.autoSwitchKeys || [],
      twoDigitYearMax: L,
      allowCaretMode: A
    };
  }, M = (J) => {
    ht.current && ht.current.classList.add("k-focus"), gt({ focused: !0 }), X && se(!0);
  }, I = (J) => {
    ht.current && ht.current.classList.remove("k-focus"), gt({ focused: !1 });
  }, j = (J, ke) => typeof J != typeof ke ? !0 : typeof J == "string" && typeof ke == "string" ? J !== ke : typeof J == "object" && typeof ke == "object" ? JSON.stringify(J) !== JSON.stringify(ke) : !1, Z = (J) => typeof J == "string" ? J : {
    inputFormat: J,
    displayFormat: J
  }, G = (J) => {
    Ke.current = z(), Ft(), He.current = J, Ke.current = void 0;
  }, q = (J) => {
    t.onChange && t.onChange(J);
  }, ae = (J) => {
    At(document) === $e.current && J.preventDefault();
  }, _ = () => new pE($e.current, {
    ...Y(),
    format: Z(Y().format),
    events: {
      focus: M,
      blur: I,
      valueChange: G,
      click: q
    }
  }), K = () => {
    $e.current && $e.current.setCustomValidity && $e.current.setCustomValidity(
      V().valid ? "" : E || ot.validationMessage
    );
  }, se = p.useCallback(
    (J) => {
      var ke;
      if ($e.current && X && J) {
        const Ot = (ye?.current).currentText, Jt = (ye?.current).currentText.search(/[^a-zA-Z]/), Qt = Ot[Jt], gn = Ot.split(Qt)[0].length;
        ht.current && ht.current.classList.add("k-focus"), (ke = ye?.current) == null || ke.selectNearestSegment(gn);
      }
    },
    [X]
  ), ce = (J) => {
    !$e.current || !ye.current || G(J);
  }, ve = (J) => {
    J.preventDefault();
    const ke = At(document);
    $e.current && ke !== $e.current && $e.current.focus({ preventScroll: !0 });
  }, W = (J) => {
    const ke = z();
    He.current && t.onChange && !Kt(He.current.oldValue, ke) && t.onChange.call(void 0, {
      syntheticEvent: J,
      nativeEvent: He.current.event,
      value: He.current.value,
      target: be.current
    }), He.current = null;
  }, st = (J) => {
    var ke;
    (ke = ye.current) == null || ke.modifyDateSegmentValue(1), W(J);
  }, Te = (J) => {
    var ke;
    (ke = ye.current) == null || ke.modifyDateSegmentValue(-1), W(J);
  }, be = p.useRef(null), $e = p.useRef(null), ht = p.useRef(null);
  p.useImperativeHandle(
    be,
    () => ({
      props: t,
      get options() {
        return Y();
      },
      get text() {
        return Q();
      },
      get element() {
        return $e.current;
      },
      get name() {
        return t.name;
      },
      get value() {
        return z();
      },
      get validity() {
        return V();
      },
      // hidden methods
      focus: re,
      updateOnPaste: ce
    })
  ), p.useImperativeHandle(e, () => be.current);
  const ye = p.useRef(null), oe = p.useRef(null), Ie = p.useRef(!1), Ke = p.useRef(null), He = p.useRef(null), je = p.useRef(t), [Mt, gt] = p.useState({ focused: !1 }), [, Ft] = p.useReducer((J) => J + 1, 0);
  p.useLayoutEffect(() => {
    Ie.current || (ye.current = _(), oe.current = ye.current.dateObject, Ie.current = !0);
  }, []), p.useEffect(() => (K(), Ie.current || ht.current && ht.current.addEventListener("wheel", ae, { passive: !1 }), X && (gt({ focused: !0 }), se(!0)), () => {
    ht.current && ht.current.removeEventListener("wheel", ae);
  }), []), p.useEffect(() => {
    K(), ye.current && ((j(je.current.format, u) || je.current.readonly !== t.readonly || JSON.stringify(je.current.steps) !== JSON.stringify(t.steps) || P().locale !== ye.current.options.intlService.locale) && ye.current.setOptions(Y(), !0), je.current.value !== t.value && (oe.current.getValue() !== null || t.value !== null) && oe.current.setValue(t.value), t.ariaExpanded !== void 0 && t.ariaExpanded && (ye.current.options.placeholder = null), t.ariaExpanded !== void 0 && !t.ariaExpanded && (ye.current.options.placeholder = $), ye.current.refreshElementValue(), je.current = {
      format: u,
      readonly: t.readonly,
      ariaExpanded: t.ariaExpanded,
      steps: t.steps,
      value: t.value
    });
  });
  const Gt = t.id || i + "-accessibility-id", pt = a && a.uDateInput, fn = Q(), vn = !w || V().valid;
  p.useImperativeHandle(t._ref, () => be.current);
  const Dn = /* @__PURE__ */ p.createElement(
    "span",
    {
      ref: (J) => {
        ht.current = J;
      },
      style: t.label ? void 0 : { width: t.width },
      dir: t.dir,
      className: N(
        Mi.wrapper({
          c: pt,
          size: d,
          fillMode: y,
          rounded: f,
          disabled: S,
          required: H(),
          invalid: !vn
        }),
        t.className
      )
    },
    /* @__PURE__ */ p.createElement(
      "input",
      {
        ref: (J) => {
          $e.current = J;
        },
        role: t.ariaRole || "textbox",
        readOnly: t.readonly,
        tabIndex: t.tabIndex || 0,
        disabled: S,
        title: t.title !== void 0 ? t.title : fn,
        type: "text",
        spellCheck: !1,
        autoComplete: "off",
        autoCorrect: "off",
        autoFocus: X,
        className: N(Mi.inputInner({ c: pt })),
        id: Gt,
        value: fn,
        "aria-label": t.ariaLabel,
        "aria-labelledby": t.ariaLabelledBy,
        "aria-describedby": t.ariaDescribedBy,
        "aria-haspopup": B,
        "aria-disabled": S,
        "aria-expanded": t.ariaExpanded,
        "aria-controls": t.ariaControls,
        "aria-required": t.required,
        "aria-invalid": !vn,
        onKeyDown: W,
        onChange: W,
        onWheel: W,
        onInput: W,
        onClick: W,
        name: t.name,
        ...t.inputAttributes
      }
    ),
    t.children,
    t.clearButton && t.value && /* @__PURE__ */ p.createElement(OE, { onClick: q, key: "clearbutton" }),
    m && /* @__PURE__ */ p.createElement("span", { className: N(Mi.inputSpinner({ c: pt })), onMouseDown: ve }, /* @__PURE__ */ p.createElement(
      Be,
      {
        tabIndex: -1,
        type: "button",
        rounded: null,
        className: N(Mi.spinnerIncrease({ c: pt })),
        icon: "caret-alt-up",
        svgIcon: ih,
        "aria-label": s.toLanguageString(pr, Ce[pr]),
        title: s.toLanguageString(pr, Ce[pr]),
        onClick: st
      }
    ), /* @__PURE__ */ p.createElement(
      Be,
      {
        tabIndex: -1,
        type: "button",
        rounded: null,
        className: N(Mi.spinnerDecrease({ c: pt })),
        icon: "caret-alt-down",
        svgIcon: Ys,
        "aria-label": s.toLanguageString(mr, Ce[mr]),
        title: s.toLanguageString(mr, Ce[mr]),
        onClick: Te
      }
    ))
  );
  return t.label ? /* @__PURE__ */ p.createElement(
    zl,
    {
      label: t.label,
      editorId: Gt,
      editorValue: (n = $e.current) == null ? void 0 : n.value,
      editorValid: vn,
      editorDisabled: S,
      children: Dn,
      style: { width: t.width }
    }
  ) : Dn;
});
$n.propTypes = {
  value: l.instanceOf(Date),
  format: l.oneOfType([
    pe(l.string),
    l.shape({
      skeleton: l.string,
      pattern: l.string,
      date: l.oneOf(["short", "medium", "long", "full"]),
      time: l.oneOf(["short", "medium", "long", "full"]),
      datetime: l.oneOf(["short", "medium", "long", "full"]),
      era: l.oneOf(["narrow", "short", "long"]),
      year: l.oneOf(["numeric", "2-digit"]),
      month: l.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: l.oneOf(["numeric", "2-digit"]),
      weekday: l.oneOf(["narrow", "short", "long"]),
      hour: l.oneOf(["numeric", "2-digit"]),
      hour12: l.bool,
      minute: l.oneOf(["numeric", "2-digit"]),
      second: l.oneOf(["numeric", "2-digit"]),
      timeZoneName: l.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: l.oneOfType([
    pe(
      l.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    l.shape({
      year: pe(l.string),
      month: pe(l.string),
      day: pe(l.string),
      hour: pe(l.string),
      minute: pe(l.string),
      second: pe(l.string)
    })
  ]),
  width: l.oneOfType([l.string, l.number]),
  tabIndex: l.number,
  title: l.string,
  steps: l.shape({
    year: pe(l.number),
    month: pe(l.number),
    day: pe(l.number),
    hour: pe(l.number),
    minute: pe(l.number),
    second: pe(l.number)
  }),
  min: l.instanceOf(Date),
  max: l.instanceOf(Date),
  disabled: l.bool,
  spinners: l.bool,
  name: l.string,
  dir: l.string,
  label: l.node,
  id: l.string,
  ariaLabelledBy: l.string,
  ariaDescribedBy: l.string,
  ariaLabel: l.string,
  ariaRole: l.string,
  ariaHasPopup: l.oneOfType([
    l.bool,
    l.oneOf(["grid", "dialog"])
  ]),
  ariaExpanded: l.oneOfType([l.bool]),
  onChange: l.func,
  validationMessage: l.string,
  required: l.bool,
  valid: l.bool,
  size: l.oneOf([null, "small", "medium", "large"]),
  rounded: l.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: l.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: l.bool,
  inputAttributes: l.object
};
const ot = {
  format: mE,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  formatPlaceholder: fE,
  spinners: !1,
  disabled: !1,
  max: F(Rn),
  min: F(Pn),
  minTime: F(nr),
  maxTime: F(vi),
  validityStyles: !0,
  validationMessage: TE,
  placeholder: null,
  enableMouseWheel: !0,
  autoCorrectParts: !0,
  autoSwitchParts: !0,
  allowCaretMode: !1,
  twoDigitYearMax: 68,
  ariaHasPopup: "grid",
  autoFocus: !1
}, Uu = Qn();
$n.displayName = "KendoReactDateInput";
const PE = Be;
const RE = (t) => {
  const [e, n] = p.useState(!1), i = () => {
    var r;
    t.current && n(!!((r = t.current.element) != null && r.value || t.current.text));
  };
  return p.useEffect(i), {
    editorValue: e
  };
}, Bl = (t) => {
  const { dateInput: e, ...n } = t, i = RE(e);
  return /* @__PURE__ */ p.createElement(zl, { ...n, ...i });
};
const Ut = "", ro = "0", _n = "_";
function Fi(t, e) {
  if (en(t))
    return e[Number(t)];
  const n = e[Number(Li(t))];
  return n.items ? Fi(AE(t), n.items) : void 0;
}
function Li(t) {
  return Vi(t) ? t : t.split(_n)[0];
}
function AE(t) {
  if (Vi(t))
    return t;
  const e = t.indexOf(_n);
  return t.substring(e + 1);
}
function Wu(t) {
  return so("0", t);
}
function _E(t, e) {
  return e.indexOf(t) === 0 ? e.length === t.length || e.charAt(t.length) === _n : !1;
}
function so(t, e) {
  return e ? e + _n + t : t;
}
function Oi(t) {
  const e = t.lastIndexOf(_n);
  return e < 0 ? Ut : t.substring(0, e);
}
function Vi(t) {
  return t === Ut || t.indexOf(_n) < 0;
}
function en(t) {
  return t !== Ut && t.indexOf(_n) < 0;
}
function zE(t) {
  return FE(t) === 1;
}
function jE(t) {
  return Va(t) === ro;
}
function Va(t) {
  const e = t.lastIndexOf(_n);
  return e < 0 ? t : t.substring(e + 1);
}
function Zu(t, e, n) {
  return en(e) ? t ? Number(e) < n - 1 ? (Number(e) + 1).toString() : "0" : Number(e) > 0 ? (Number(e) - 1).toString() : (n - 1).toString() : e;
}
function FE(t) {
  return t.split(_n).length - 1;
}
const dp = class extends p.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
dp.propTypes = {
  text: l.string,
  url: l.string,
  icon: l.string,
  disabled: l.bool,
  cssClass: l.string,
  cssStyle: l.object,
  render: l.any,
  linkRender: l.any,
  contentRender: l.any,
  data: l.any,
  separator: l.bool
};
let LE = dp;
function VE(t, e) {
  if (t && t.length > 0)
    return {
      items: Ha(t),
      inputItems: t
    };
  if (Ba(e).length > 0) {
    const n = pp(Ba(e));
    return { items: Ha(n), inputItems: n };
  }
  return { items: [], inputItems: [] };
}
function hp(t, e) {
  const n = {}, {
    text: i,
    url: r,
    icon: s,
    svgIcon: o,
    disabled: a,
    cssClass: u,
    cssStyle: d,
    render: f,
    linkRender: y,
    contentRender: c,
    data: m,
    separator: S
  } = t || e.props;
  return i !== void 0 && (n.text = i), r !== void 0 && (n.url = r), s !== void 0 && (n.icon = s), o !== void 0 && (n.svgIcon = o), a !== void 0 && (n.disabled = a), u !== void 0 && (n.cssClass = u), d !== void 0 && (n.cssStyle = d), f !== void 0 && (n.render = f), y !== void 0 && (n.linkRender = y), c !== void 0 && (n.contentRender = c), m !== void 0 && (n.data = m), S !== void 0 && (n.separator = S), n;
}
function Ba(t) {
  return p.Children.toArray(t).filter((e) => e && e.type === LE);
}
function pp(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const i = t[n], r = hp(void 0, i), s = pp(Ba(i.props.children));
    s.length > 0 && (r.items = s), e.push(r);
  }
  return e;
}
function Ha(t, e) {
  const n = [];
  for (let i = 0; i < t.length; i++) {
    const r = t[i], s = hp(r);
    s.id = so(i.toString(), e), s.isLastFromSiblings = i === t.length - 1, s.separator = r.separator === !0, s.items = BE(r, s), n.push(s);
  }
  return n;
}
function BE(t, e) {
  return t.contentRender ? [
    {
      contentParentItemId: e.id,
      id: so(ro, e.id),
      isLastFromSiblings: !0,
      separator: !1,
      contentRender: t.contentRender,
      items: []
    }
  ] : t.items ? Ha(t.items, e.id) : [];
}
const HE = /\S/;
function qu(t, e, n, i, r, s) {
  const o = T();
  switch (n) {
    case U.left:
      return a();
    case U.right:
      return u();
    case U.up:
      return f();
    case U.down:
      return d();
    case U.enter:
    case U.space:
      return y();
    case U.home:
      return c();
    case U.end:
      return m();
    case U.esc:
      return S();
    default:
      return D() ? k() : e;
  }
  function a() {
    return r ? s ? w() : h() : s ? b() : C();
  }
  function u() {
    return r ? s ? h() : w() : s ? C() : b();
  }
  function d() {
    return r ? L() : en(e) ? E() : L();
  }
  function f() {
    return r ? A() : en(e) ? $() : A();
  }
  function y() {
    return o.disabled ? e : O() ? Wu(e) : Li(e);
  }
  function c() {
    return X()[0].id;
  }
  function m() {
    const H = X();
    return H[H.length - 1].id;
  }
  function S() {
    return en(e) ? e : Oi(e);
  }
  function k() {
    const H = i.toLowerCase(), V = X(), re = Number(Va(e)), P = V.slice(re + 1).concat(V.slice(0, re + 1)).find((Y) => (Y.text || "").toLowerCase().startsWith(H));
    return P ? P.id : e;
  }
  function C() {
    return en(e) ? A() : zE(e) ? E(A(Li(e))) : Oi(e);
  }
  function h() {
    return en(e) ? $() : Oi(e);
  }
  function b() {
    return en(e) ? L() : E(
      O() ? e : L(Li(e))
    );
  }
  function w() {
    return E(
      en(e) || O() ? e : L(Li(e))
    );
  }
  function E(H) {
    return z(!0, H);
  }
  function $(H) {
    return z(!1, H);
  }
  function D() {
    return i.length === 1 && HE.test(i);
  }
  function T(H, V) {
    return H === void 0 && (H = e), V === void 0 && (V = t), Fi(H, V);
  }
  function O(H) {
    return T(H).items.length > 0;
  }
  function A(H) {
    return Q(!1, H);
  }
  function L(H) {
    return Q(!0, H);
  }
  function B(H) {
    const V = T(H).items;
    return V[V.length - 1].id;
  }
  function X() {
    return en(e) ? t : T(Oi(e), t).items;
  }
  function z(H, V) {
    V === void 0 && (V = e);
    const re = T(V);
    return O(V) && !re.disabled ? H ? Wu(V) : B(V) : V;
  }
  function Q(H, V) {
    if (V === void 0 && (V = e), en(V))
      return Zu(H, V, t.length);
    const re = Oi(V), P = Va(V), Y = T(re).items.length;
    return so(Zu(H, P, Y), re);
  }
}
function UE(t) {
  return t.hoverOpenDelay !== void 0 ? t.hoverOpenDelay : t.openOnClick ? 0 : 100;
}
function WE(t) {
  return t.hoverCloseDelay !== void 0 ? t.hoverCloseDelay : 100;
}
const ZE = {
  vertical: "top",
  horizontal: "left"
}, qE = {
  vertical: "top",
  horizontal: "left"
}, YE = {
  vertical: "top",
  horizontal: "right"
}, KE = {
  vertical: "top",
  horizontal: "right"
}, mp = {
  vertical: "flip",
  horizontal: "fit"
}, fp = {
  vertical: "fit",
  horizontal: "flip"
}, Yu = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "right"
    },
    popupAlign: YE,
    collision: mp,
    animationDirection: "down"
  },
  leftward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "left"
    },
    popupAlign: KE,
    collision: fp,
    animationDirection: "left"
  }
}, Ku = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "left"
    },
    popupAlign: ZE,
    collision: mp,
    animationDirection: "down"
  },
  rightward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "right"
    },
    popupAlign: qE,
    collision: fp,
    animationDirection: "right"
  }
};
function GE(t, e, n) {
  const i = vp(t, e, n);
  return n ? i === "downward" ? Yu.downward : Yu.leftward : i === "downward" ? Ku.downward : Ku.rightward;
}
function vp(t, e, n) {
  return en(t) ? e ? n ? "leftward" : "rightward" : "downward" : n ? "leftward" : "rightward";
}
function Gu(t) {
  return t ? "rtl" : "ltr";
}
function gp(t, e) {
  return `${t}_${e}`;
}
const bp = class extends p.Component {
  /**
   * @hidden
   */
  render() {
    return this.props.url ? /* @__PURE__ */ p.createElement("a", { className: this.getMenuItemClassName(), role: "presentation", href: this.props.url, tabIndex: -1 }, this.props.children) : /* @__PURE__ */ p.createElement(
      "span",
      {
        id: this.props.id,
        className: N(this.getMenuItemClassName(), this.props.className),
        style: this.props.style,
        role: "presentation"
      },
      this.props.children
    );
  }
  getMenuItemClassName() {
    return N("k-link", "k-menu-link", {
      "k-active": this.props.opened
    });
  }
};
bp.propTypes = {
  opened: l.bool,
  url: l.string
};
let JE = bp;
const QE = "caret-alt-down", XE = "caret-alt-right", eS = "caret-alt-left", yp = class extends p.Component {
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ p.createElement(pi, { "aria-hidden": !0, ...this.getIcon() });
  }
  getIcon() {
    switch (vp(
      this.props.itemId,
      this.props.verticalMenu === !0,
      this.props.dir === "rtl"
    )) {
      case "downward":
        return { name: QE, icon: Ys };
      case "rightward":
        return { name: XE, icon: da };
      case "leftward":
        return { name: eS, icon: ha };
      default:
        return {};
    }
  }
};
yp.propTypes = {
  itemId: l.string,
  dir: l.string,
  verticalMenu: l.bool
};
let tS = yp;
let xp = class extends p.Component {
  constructor() {
    super(...arguments), this.onMouseOver = (e) => {
      this.props.onMouseOver(this.props.parentItemId), e.stopPropagation();
    }, this.onMouseLeave = (e) => {
      this.props.onMouseLeave(this.props.parentItemId), e.stopPropagation();
    };
  }
  render() {
    const e = this.props.parentItemId;
    return /* @__PURE__ */ p.createElement(
      "ul",
      {
        className: this.props.className,
        role: this.props.role ? this.props.role : e !== void 0 ? "menu" : "menubar",
        id: e !== void 0 ? gp(this.props.menuGuid, e) : void 0,
        onMouseOver: e !== void 0 ? this.onMouseOver : void 0,
        onMouseLeave: e !== void 0 ? this.onMouseLeave : void 0,
        "aria-orientation": this.props["aria-orientation"]
      },
      this.renderChildItems()
    );
  }
  renderChildItems() {
    return this.props.items.length > 0 ? this.props.items.map((e, n) => /* @__PURE__ */ p.createElement(
      nS,
      {
        item: e,
        animate: this.props.animate,
        isMenuVertical: this.props.isMenuVertical,
        isDirectionRightToLeft: this.props.isDirectionRightToLeft,
        focusedItemId: this.props.focusedItemId,
        lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
        tabbableItemId: this.props.tabbableItemId,
        itemRender: this.props.itemRender,
        linkRender: this.props.linkRender,
        menuGuid: this.props.menuGuid,
        onMouseOver: this.props.onMouseOver,
        onMouseLeave: this.props.onMouseLeave,
        onMouseDown: this.props.onMouseDown,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
        onClick: this.props.onClick,
        onOriginalItemNeeded: this.props.onOriginalItemNeeded,
        key: n
      }
    )) : null;
  }
};
class nS extends p.Component {
  constructor(e) {
    super(e), this.isFirstRender = !0, this.onMouseOver = (n) => {
      this.props.onMouseOver(this.props.item.id), n.stopPropagation();
    }, this.onMouseLeave = (n) => {
      this.props.onMouseLeave(this.props.item.id), n.stopPropagation();
    }, this.state = { opened: !1 };
  }
  componentDidMount() {
    const e = this.props.focusedItemId, n = this.props.item.id;
    e && e === n && this.itemElement.focus({ preventScroll: !0 }), this.isFirstRender = !1;
  }
  componentDidUpdate(e) {
    const n = this.props.focusedItemId, i = this.props.item.id;
    if (n) {
      const r = At(document);
      e.focusedItemId !== n && n === i && // https://github.com/telerik/kendo-react/issues/216 :
      // No need to focus the wrapping menu item DOM element
      // when a child DOM element was clicked.
      !this.itemElement.contains(r) && this.itemElement.focus({ preventScroll: !0 });
    }
  }
  render() {
    const e = this.props.item, n = e.id, i = gp(this.props.menuGuid, n), r = e.separator;
    return /* @__PURE__ */ p.createElement(p.Fragment, null, r ? /* @__PURE__ */ p.createElement(
      "li",
      {
        className: "k-separator k-item",
        "aria-hidden": !0,
        key: i,
        id: i,
        ref: (s) => {
          this.itemElement = s;
        }
      }
    ) : /* @__PURE__ */ p.createElement(
      "li",
      {
        id: i,
        className: this.getMenuItemClassName(e),
        style: e.cssStyle,
        tabIndex: n === this.props.tabbableItemId ? 0 : -1,
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave,
        onMouseDown: (s) => this.props.onMouseDown(s),
        onBlur: (s) => this.props.onBlur(n, s),
        onFocus: () => this.props.onFocus(n),
        onClick: (s) => this.props.onClick(s, n),
        role: "menuitem",
        "aria-disabled": e.disabled ? !0 : void 0,
        "aria-haspopup": e.items.length > 0 ? !0 : void 0,
        "aria-expanded": e.items.length > 0 ? this.Opened : void 0,
        "aria-label": e.text,
        "aria-owns": this.Opened ? i : void 0,
        ref: (s) => {
          this.itemElement = s;
        },
        key: i
      },
      this.contentRender ? this.renderContent() : this.renderMenuItemLink()
    ), this.renderPopupIfOpened());
  }
  renderContent() {
    const e = this.props.item.contentParentItemId;
    return /* @__PURE__ */ p.createElement("div", { className: "k-content", role: "presentation" }, /* @__PURE__ */ p.createElement(this.contentRender, { item: this.props.onOriginalItemNeeded(e), itemId: e }));
  }
  renderMenuItemLink() {
    const e = this.props.item;
    if (this.linkRender)
      return /* @__PURE__ */ p.createElement(
        this.linkRender,
        {
          item: this.props.onOriginalItemNeeded(e.id),
          itemId: e.id,
          opened: this.Opened,
          dir: Gu(this.props.isDirectionRightToLeft)
        }
      );
    const n = this.itemRender ? /* @__PURE__ */ p.createElement(this.itemRender, { item: this.props.onOriginalItemNeeded(e.id), itemId: e.id, key: "1" }) : /* @__PURE__ */ p.createElement("span", { className: "k-menu-link-text" }, e.text);
    return /* @__PURE__ */ p.createElement(JE, { url: e.url, opened: this.Opened }, this.renderMenuIconIfApplicable(), n, this.renderArrowIfApplicable());
  }
  renderPopupIfOpened() {
    const e = this.props.item.id, n = this.props.animate, { anchorAlign: i, popupAlign: r, collision: s, animationDirection: o } = GE(
      e,
      this.props.isMenuVertical,
      this.props.isDirectionRightToLeft
    ), a = n === !0 ? { openDuration: 300, closeDuration: 300, direction: o } : n === !1 ? !1 : {
      openDuration: n?.openDuration || 300,
      closeDuration: n?.closeDuration || 300,
      direction: n?.direction || o
    };
    return /* @__PURE__ */ p.createElement(
      An,
      {
        anchor: this.itemElement,
        show: this.Opened,
        popupClass: this.getPopupClassName(),
        anchorAlign: i,
        popupAlign: r,
        collision: s,
        animate: a,
        key: "1"
      },
      /* @__PURE__ */ p.createElement(
        xp,
        {
          parentItemId: e,
          animate: this.props.animate,
          items: this.props.item.items,
          menuGuid: this.props.menuGuid,
          focusedItemId: this.props.focusedItemId,
          lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
          tabbableItemId: this.props.tabbableItemId,
          itemRender: this.props.itemRender,
          linkRender: this.props.linkRender,
          isMenuVertical: this.props.isMenuVertical,
          isDirectionRightToLeft: this.props.isDirectionRightToLeft,
          className: "k-group k-menu-group k-reset k-menu-group-md",
          onMouseOver: this.props.onMouseOver,
          onMouseLeave: this.props.onMouseLeave,
          onMouseDown: this.props.onMouseDown,
          onBlur: this.props.onBlur,
          onFocus: this.props.onFocus,
          onClick: this.props.onClick,
          onOriginalItemNeeded: this.props.onOriginalItemNeeded
        }
      )
    );
  }
  renderMenuIconIfApplicable() {
    const { icon: e, svgIcon: n } = this.props.item;
    return e || n ? /* @__PURE__ */ p.createElement(pi, { name: e, icon: n, key: "0" }) : null;
  }
  renderArrowIfApplicable() {
    return this.props.item.items.length > 0 ? /* @__PURE__ */ p.createElement("span", { className: "k-menu-expand-arrow", "aria-hidden": !0 }, /* @__PURE__ */ p.createElement(
      tS,
      {
        itemId: this.props.item.id,
        verticalMenu: this.props.isMenuVertical,
        dir: Gu(this.props.isDirectionRightToLeft),
        key: "2"
      }
    )) : null;
  }
  get itemRender() {
    return this.props.item.render || this.props.itemRender;
  }
  get linkRender() {
    return this.props.item.linkRender || this.props.linkRender;
  }
  get contentRender() {
    return this.props.item.contentParentItemId ? this.props.item.contentRender : null;
  }
  get Opened() {
    const e = this.props;
    return e.item.items.length > 0 && _E(e.item.id, e.lastItemIdToBeOpened) && // HACK: Wait for the second render because otherwise the scenario of
    // popup inside popup throws an error (for example, hover of item with id '0_0').
    !this.isFirstRender;
  }
  getPopupClassName() {
    return N("k-menu-popup", { "k-rtl": this.props.isDirectionRightToLeft });
  }
  getMenuItemClassName(e) {
    return N(
      "k-item",
      "k-menu-item",
      {
        "k-first": jE(e.id),
        "k-last": e.isLastFromSiblings,
        "k-disabled": e.disabled
      },
      e.cssClass
    );
  }
}
let iS = class {
  constructor() {
    this.phase = "Initialized";
  }
  getIsDirectionRightToLeft() {
    return this.isDirectionRightToLeft;
  }
  setIsDirectionRightToLeft(e) {
    this.phase = this.phase === "NotInitialized" ? "Initialized" : "NewValueReceived", this.previousIsDirectionRightToLeft = this.isDirectionRightToLeft, this.isDirectionRightToLeft = e;
  }
  hasDirectionChanged() {
    return this.phase === "NewValueReceived" ? this.previousIsDirectionRightToLeft !== this.isDirectionRightToLeft : !1;
  }
};
let rS = class {
  constructor(e, n, i) {
    this.openOnClick = e, this.resetMenu = n, this.openItem = i, this.mouseDown = !1, this.openOnClick = e, this.isMouseOverEnabled = !e;
  }
  set OpenOnClick(e) {
    !!e != !!this.openOnClick && (this.mouseDown = !1, this.isMouseOverEnabled = !e), this.openOnClick = e;
  }
  handleItemSelectedViaKeyboard() {
    this.openOnClick && (this.isMouseOverEnabled = !1, this.resetMenu());
  }
  get IsMouseOverEnabled() {
    return this.isMouseOverEnabled;
  }
  handleItemMouseDown() {
    this.mouseDown = !0;
  }
  handleItemFocus() {
    this.openOnClick && !this.mouseDown && (this.isMouseOverEnabled = !0), this.mouseDown = !1;
  }
  handleItemClick(e, n) {
    this.openOnClick && (this.isMouseOverEnabled ? n && (this.isMouseOverEnabled = !1, this.resetMenu()) : (this.isMouseOverEnabled = !0, this.openItem(e)));
  }
};
const Ju = {
  focusedItemId: Ut,
  hoveredItemId: Ut,
  tabbableItemId: ro
}, Ua = class wp extends p.Component {
  constructor(e) {
    super(e), this.menuWrapperEl = null, this.directionHolder = new iS(), this.inputItems = [], this.items = [], this.reset = () => {
      this.clearItemHoverAndLeaveRequestsIfApplicable(), this.setState(Ju);
    }, this.onKeyDown = (n) => {
      if (this.state.focusedItemId !== Ut) {
        const i = Fi(this.state.focusedItemId, this.items);
        let r = qu(
          this.items,
          i.id,
          n.keyCode,
          n.key,
          this.props.vertical,
          this.directionHolder.getIsDirectionRightToLeft()
        );
        const s = Fi(r, this.items);
        s && s.separator && (r = qu(
          this.items,
          r,
          n.keyCode,
          n.key,
          this.props.vertical,
          this.directionHolder.getIsDirectionRightToLeft()
        )), i.id !== r && (n.preventDefault(), this.setFocusedItemId(r)), (n.keyCode === U.enter || n.keyCode === U.space) && !i.disabled && (this.mouseOverHandler.handleItemSelectedViaKeyboard(), this.dispatchSelectEventIfWired(n, i.id), !n.isDefaultPrevented() && i.items.length === 0 && i.url && window.location.assign(i.url));
      }
      n.keyCode === U.esc && this.props.onClose && this.props.onClose.call(void 0, n);
    }, this.onItemMouseOver = (n) => {
      this.mouseOverHandler.IsMouseOverEnabled && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemHoverRequest = window.setTimeout(() => {
        this.setHoveredItemId(n), this.itemHoverRequest = null;
      }, UE(this.props)));
    }, this.onItemMouseLeave = (n) => {
      this.mouseOverHandler.IsMouseOverEnabled && this.isItemWithDefaultClose(n) && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemLeaveRequest = window.setTimeout(() => {
        this.setHoveredItemId(Ut), this.itemLeaveRequest = null;
      }, WE(this.props)));
    }, this.onItemMouseDown = () => {
      this.mouseOverHandler.handleItemMouseDown();
    }, this.onItemFocus = (n) => {
      this.setFocusedItemId(n), this.mouseOverHandler.handleItemFocus();
    }, this.onItemClick = (n, i) => {
      const r = Fi(i, this.items);
      r.disabled || (this.setFocusedItemId(i), this.mouseOverHandler.handleItemClick(i, this.isItemWithDefaultClose(i)), this.dispatchSelectEventIfWired(n, i), !n.isDefaultPrevented() && r.url && window.location.assign(r.url));
    }, this.onItemBlur = (n, i) => {
      if (this.isItemWithDefaultClose(n) && this.setFocusedItemId(Ut), i.relatedTarget && i.relatedTarget.nodeName === "LI") {
        const r = i.relatedTarget.getAttribute("id");
        if (r && r.includes(this.menuItemId))
          return;
      }
      this.props.onClose && this.props.onClose.call(void 0, i);
    }, this.getInputItem = (n) => Fi(n, this.inputItems), this.mouseOverHandler = new rS(this.props.openOnClick, this.reset, this.onItemMouseOver), this.state = Object.assign({}, Ju, { isFirstRender: !0 });
  }
  get menuItemId() {
    return this.props.id;
  }
  /**
   * The current element or `null` if there is no one.
   */
  get element() {
    return this.menuWrapperEl;
  }
  get animate() {
    return this.props.animate !== void 0 ? this.props.animate : wp.defaultProps.animate;
  }
  /**
   * @hidden
   */
  render() {
    this.prepareItems(), this.state.isFirstRender || this.directionHolder.setIsDirectionRightToLeft(this.checkIsDirectionRightToLeft());
    const e = this.state.hoveredItemId ? this.state.hoveredItemId : this.state.focusedItemId ? Oi(this.state.focusedItemId) : Ut;
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        id: this.props.id,
        onKeyDown: this.onKeyDown,
        style: this.props.style,
        className: this.directionHolder.getIsDirectionRightToLeft() ? "k-rtl" : void 0,
        ref: (n) => {
          this.menuWrapperEl = n;
        }
      },
      /* @__PURE__ */ p.createElement(
        xp,
        {
          className: this.getMenuClassName(),
          "aria-orientation": this.props.vertical ? "vertical" : void 0,
          items: this.items,
          animate: this.animate,
          isMenuVertical: this.props.vertical,
          isDirectionRightToLeft: this.directionHolder.getIsDirectionRightToLeft(),
          focusedItemId: this.state.focusedItemId,
          lastItemIdToBeOpened: e,
          tabbableItemId: this.state.tabbableItemId,
          itemRender: this.props.itemRender,
          linkRender: this.props.linkRender,
          menuGuid: this.menuItemId,
          onMouseLeave: this.onItemMouseLeave,
          onMouseOver: this.onItemMouseOver,
          onMouseDown: this.onItemMouseDown,
          onFocus: this.onItemFocus,
          onClick: this.onItemClick,
          onBlur: this.onItemBlur,
          onOriginalItemNeeded: this.getInputItem,
          role: this.props.role
        }
      )
    );
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.setState({ isFirstRender: !1 });
  }
  /**
   * @hidden
   */
  componentDidUpdate(e) {
    (!!e.vertical != !!this.props.vertical || this.directionHolder.hasDirectionChanged()) && this.reset(), this.mouseOverHandler.OpenOnClick = this.props.openOnClick;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.clearItemHoverAndLeaveRequestsIfApplicable();
  }
  setFocusedItemId(e) {
    this.setState((n) => {
      const i = e === Ut ? n.tabbableItemId : Li(e);
      return { hoveredItemId: e === Ut || Vi(n.hoveredItemId) && Vi(e) ? n.hoveredItemId : Ut, focusedItemId: e, tabbableItemId: i };
    });
  }
  setHoveredItemId(e) {
    this.setState((n) => Vi(e) && Vi(n.focusedItemId) ? {
      hoveredItemId: e,
      focusedItemId: n.focusedItemId,
      tabbableItemId: n.tabbableItemId
    } : { hoveredItemId: e, focusedItemId: Ut, tabbableItemId: ro });
  }
  getMenuClassName() {
    return N(
      "k-reset",
      "k-header",
      "k-menu",
      { "k-menu-horizontal": !this.props.vertical },
      { "k-menu-vertical": this.props.vertical },
      this.props.className
    );
  }
  clearItemHoverAndLeaveRequestsIfApplicable() {
    this.itemHoverRequest && (clearTimeout(this.itemHoverRequest), this.itemHoverRequest = null), this.itemLeaveRequest && (clearTimeout(this.itemLeaveRequest), this.itemLeaveRequest = null);
  }
  isItemWithDefaultClose(e) {
    return !this.props.customCloseItemIds || this.props.customCloseItemIds.indexOf(e) === -1;
  }
  checkIsDirectionRightToLeft() {
    return !!(this.props.dir !== void 0 ? this.props.dir === "rtl" : this.menuWrapperEl && getComputedStyle(this.menuWrapperEl).direction === "rtl");
  }
  prepareItems() {
    const { items: e, inputItems: n } = VE(this.props.items, this.props.children);
    this.items = e, this.inputItems = n;
  }
  dispatchSelectEventIfWired(e, n) {
    tn(this.props.onSelect, e, this, { item: this.getInputItem(n), itemId: n });
  }
};
Ua.propTypes = {
  vertical: l.bool,
  items: l.arrayOf(l.object),
  style: l.object,
  animate: l.oneOfType([
    l.bool,
    l.shape({
      openDuration: l.number,
      closeDuration: l.number
    })
  ]),
  dir: l.string,
  hoverOpenDelay: l.number,
  hoverCloseDelay: l.number,
  openOnClick: l.bool,
  itemRender: l.any,
  linkRender: l.any,
  customCloseItemIds: l.arrayOf(l.string),
  onSelect: l.func,
  role: l.string
}, Ua.defaultProps = { vertical: !1, animate: !0 };
let sS = Ua;
const $p = class extends p.Component {
  constructor() {
    super(...arguments), this.itemRef = null, this.focus = () => {
      this.itemRef && this.itemRef.focus();
    }, this.blur = () => {
      this.itemRef && this.itemRef.blur();
    }, this.onClick = () => {
      this.props.onSelect && this.props.onSelect(this.props.index), this.itemRef && (this.itemRef.tabIndex = 0, this.itemRef.focus());
    };
  }
  /**
   * @hidden
   */
  render() {
    const { id: e, active: n, disabled: i, title: r = "Untitled", index: s, renderAllContent: o, first: a, last: u } = this.props, d = o ? `${this.props.contentPanelId}-${s.toString()}` : this.props.contentPanelId, f = {
      id: `${e}-${s.toString()}`,
      "aria-selected": n,
      "aria-controls": n ? d : void 0,
      "aria-disabled": i,
      role: "tab",
      onClick: i ? void 0 : this.onClick
    }, y = N("k-tabstrip-item", {
      "k-disabled": i,
      "k-active": n,
      "k-first": a,
      "k-last": u
    });
    return /* @__PURE__ */ p.createElement(
      "li",
      {
        ...f,
        className: y,
        ref: (c) => {
          this.itemRef = c;
        },
        onBlur: this.blur,
        "aria-controls": d
      },
      /* @__PURE__ */ p.createElement("span", { className: "k-link" }, r)
    );
  }
};
$p.propTypes = {
  active: l.bool,
  disabled: l.bool,
  index: l.number,
  onSelect: l.func,
  title: l.oneOfType([l.string, l.element]),
  first: l.bool,
  last: l.bool
};
let oS = $p;
const Wa = "prevArrow.title", Za = "nextArrow.title", Qu = {
  [Wa]: "Previous tab arrow",
  [Za]: "Next tab arrow"
};
const aS = (t) => Array.apply(null, Array(t)), ar = "smooth", Ln = "prev", ki = "next", Ep = class extends p.Component {
  constructor() {
    super(...arguments), this.itemsNavRef = this.props.itemsNavRef || p.createRef(), this.onScroll = () => {
      var e, n;
      (n = (e = this.props).onScroll) == null || n.call(e);
    }, this.isRtl = () => this.props.dir === "rtl", this.arrowClickPrev = (e) => {
      this.handleArrowClick(Ln, e);
    }, this.arrowClickNext = (e) => {
      this.handleArrowClick(ki, e);
    }, this.handleArrowClick = (e, n) => {
      this.setNewScrollPosition(e, n);
    }, this.setNewScrollPosition = (e, n) => {
      const i = this.itemsNavRef.current;
      if (!i)
        return;
      const r = this.horizontalScroll(), s = r ? i.scrollWidth - i.offsetWidth : i.scrollHeight - i.offsetHeight, o = (n.type === "click" ? this.props.buttonScrollSpeed : this.props.mouseScrollSpeed) || 0;
      let a = r ? i.scrollLeft : i.scrollTop;
      this.isRtl() && this.horizontalScroll() ? (e === Ln && a < 0 && (a += o), e === ki && a < s && (a -= o), a = Math.min(0, Math.min(s, a))) : (e === Ln && a > 0 && (a -= o), e === ki && a < s && (a += o), a = Math.max(0, Math.min(s, a)));
      const u = n.type === "click" ? ar : void 0;
      r ? i.scrollTo({ left: a, behavior: u }) : i.scrollTo({ top: a, behavior: u });
    }, this.renderArrow = (e) => {
      const n = this.horizontalScroll(), i = Rt(this), r = {
        prev: {
          arrowTab: "k-tabstrip-prev",
          fontIcon: n ? this.isRtl() ? "caret-alt-right" : "caret-alt-left" : "caret-alt-up",
          svgIcon: n ? this.isRtl() ? da : ha : ih,
          title: i.toLanguageString(Wa, Qu[Wa])
        },
        next: {
          arrowTab: "k-tabstrip-next",
          fontIcon: n ? this.isRtl() ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down",
          svgIcon: n ? this.isRtl() ? ha : da : Ys,
          title: i.toLanguageString(Za, Qu[Za])
        }
      }, s = (e === Ln ? this.props.prevButton : this.props.nextButton) || Be, o = e === Ln ? this.arrowClickPrev : this.arrowClickNext, a = this.props.containerScrollPosition === null || e === Ln && (this.props.containerScrollPosition === "start" || this.props.containerScrollPosition === "top") || e === ki && (this.props.containerScrollPosition === "end" || this.props.containerScrollPosition === "bottom");
      return /* @__PURE__ */ p.createElement(
        s,
        {
          disabled: a,
          className: N(`${r[e].arrowTab}`),
          onClick: o,
          icon: r[e].fontIcon,
          svgIcon: r[e].svgIcon,
          size: this.props.size,
          tabIndex: -1,
          fillMode: "flat",
          title: r[e].title
        }
      );
    };
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.props.scrollable && this.scrollToSelected();
  }
  /**
   * @hidden
   */
  componentDidUpdate(e) {
    const { scrollable: n, selected: i } = this.props;
    n && e.selected !== i && this.scrollToSelected();
  }
  /**
   * @hidden
   */
  render() {
    const {
      selected: e,
      tabPosition: n,
      tabAlignment: i,
      children: r,
      onSelect: s,
      onKeyDown: o,
      navItemId: a,
      contentPanelId: u,
      renderAllContent: d,
      scrollable: f,
      scrollButtons: y,
      scrollButtonsPosition: c
    } = this.props, m = p.Children.count(r), S = p.Children.toArray(r);
    let k;
    r && (k = aS(m).map((b, w, E) => {
      const $ = {
        active: e === w,
        disabled: S[w].props.disabled,
        index: w,
        title: S[w].props.title,
        first: w === 0,
        last: w === E.length - 1,
        contentPanelId: u,
        renderAllContent: d,
        id: a,
        onSelect: s,
        onScroll: this.onScroll
      };
      return /* @__PURE__ */ p.createElement(oS, { key: w, ...$ });
    }));
    const C = N("k-tabstrip-items-wrapper k-tabstrip-items-wrapper-scroll", {
      "k-hstack": n === "top" || n === "bottom",
      "k-vstack": n === "left" || n === "right"
    }), h = N(
      "k-tabstrip-items k-tabstrip-items-scroll k-reset",
      `k-tabstrip-items-${i}`
    );
    return /* @__PURE__ */ p.createElement("div", { className: C }, f ? /* @__PURE__ */ p.createElement(p.Fragment, null, y !== "hidden" && c && ["split", "start", "around", "before"].includes(c) && this.renderArrow(Ln), y !== "hidden" && (c === "start" || c === "before") && this.renderArrow(ki), /* @__PURE__ */ p.createElement(
      "ul",
      {
        ref: this.itemsNavRef,
        className: h,
        role: "tablist",
        tabIndex: this.props.tabIndex,
        onKeyDown: o,
        onScroll: this.onScroll,
        "aria-orientation": n === "left" || n === "right" ? "vertical" : void 0
      },
      k
    ), y !== "hidden" && (c === "end" || c === "after") && this.renderArrow(Ln), y !== "hidden" && c && ["split", "end", "around", "after"].includes(c) && this.renderArrow(ki)) : /* @__PURE__ */ p.createElement("ul", { className: h, role: "tablist", tabIndex: this.props.tabIndex, onKeyDown: o }, k));
  }
  scrollToSelected() {
    const e = this.itemsNavRef.current, n = e && e.children[this.props.selected || 0];
    if (n instanceof HTMLElement && e instanceof HTMLElement) {
      const i = this.horizontalScroll(), r = i ? e.offsetWidth : e.offsetHeight, s = i ? n.offsetWidth : n.offsetHeight, o = i ? "left" : "top";
      let a = i ? e.scrollLeft : e.scrollTop, u = 0;
      if (this.isRtl()) {
        const d = n.offsetLeft;
        a = a * -1, d < 0 ? (u = d - s + e.offsetLeft, e.scrollTo({ [o]: u, behavior: ar })) : d + s > r - a && (u = a + d - s, e.scrollTo({ [o]: u, behavior: ar }));
      } else {
        const d = i ? n.offsetLeft - e.offsetLeft : n.offsetTop - e.offsetTop;
        a + r < d + s ? (u = d + s - r, e.scrollTo({ [o]: u, behavior: ar })) : a > d && (u = d, e.scrollTo({ [o]: u, behavior: ar }));
      }
    }
  }
  horizontalScroll() {
    return /top|bottom/.test(this.props.tabPosition || "top");
  }
};
Ep.propTypes = {
  children: l.oneOfType([l.element, l.arrayOf(l.element)]),
  onSelect: l.func,
  onKeyDown: l.func,
  onScroll: l.func,
  selected: l.number,
  tabIndex: l.number,
  scrollable: l.bool,
  size: l.oneOf(["small", "medium", "large"]),
  scrollButtons: l.oneOf(["auto", "visible", "hidden"]),
  scrollButtonsPosition: l.oneOf(["split", "start", "end", "around", "before", "after"]),
  containerScrollPosition: l.oneOf(["start", "end", "top", "bottom", "middle", null])
};
let Xu = Ep;
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var i in n) ({}).hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Tr.apply(null, arguments);
}
function Hl(t, e) {
  if (t == null) return {};
  var n = {};
  for (var i in t) if ({}.hasOwnProperty.call(t, i)) {
    if (e.indexOf(i) !== -1) continue;
    n[i] = t[i];
  }
  return n;
}
function qa(t, e) {
  return qa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qa(t, e);
}
function Ul(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, qa(t, e);
}
function lS(t, e) {
  return t.classList ? !!e && t.classList.contains(e) : (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ") !== -1;
}
function cS(t, e) {
  t.classList ? t.classList.add(e) : lS(t, e) || (typeof t.className == "string" ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e));
}
function ed(t, e) {
  return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function uS(t, e) {
  t.classList ? t.classList.remove(e) : typeof t.className == "string" ? t.className = ed(t.className, e) : t.setAttribute("class", ed(t.className && t.className.baseVal || "", e));
}
const td = {
  disabled: !1
};
var dS = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
  enter: l.number,
  exit: l.number,
  appear: l.number
}).isRequired]) : null, hS = process.env.NODE_ENV !== "production" ? l.oneOfType([l.string, l.shape({
  enter: l.string,
  exit: l.string,
  active: l.string
}), l.shape({
  enter: l.string,
  enterDone: l.string,
  enterActive: l.string,
  exit: l.string,
  exitDone: l.string,
  exitActive: l.string
})]) : null;
const Bs = et.createContext(null);
var Sp = function(e) {
  return e.scrollTop;
}, gr = "unmounted", ti = "exited", ni = "entering", Ni = "entered", Ya = "exiting", kn = /* @__PURE__ */ (function(t) {
  Ul(e, t);
  function e(i, r) {
    var s;
    s = t.call(this, i, r) || this;
    var o = r, a = o && !o.isMounting ? i.enter : i.appear, u;
    return s.appearStatus = null, i.in ? a ? (u = ti, s.appearStatus = ni) : u = Ni : i.unmountOnExit || i.mountOnEnter ? u = gr : u = ti, s.state = {
      status: u
    }, s.nextCallback = null, s;
  }
  e.getDerivedStateFromProps = function(r, s) {
    var o = r.in;
    return o && s.status === gr ? {
      status: ti
    } : null;
  };
  var n = e.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(r) {
    var s = null;
    if (r !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== ni && o !== Ni && (s = ni) : (o === ni || o === Ni) && (s = Ya);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var r = this.props.timeout, s, o, a;
    return s = o = a = r, r != null && typeof r != "number" && (s = r.exit, o = r.enter, a = r.appear !== void 0 ? r.appear : o), {
      exit: s,
      enter: o,
      appear: a
    };
  }, n.updateStatus = function(r, s) {
    if (r === void 0 && (r = !1), s !== null)
      if (this.cancelNextCallback(), s === ni) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : Vr.findDOMNode(this);
          o && Sp(o);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === ti && this.setState({
      status: gr
    });
  }, n.performEnter = function(r) {
    var s = this, o = this.props.enter, a = this.context ? this.context.isMounting : r, u = this.props.nodeRef ? [a] : [Vr.findDOMNode(this), a], d = u[0], f = u[1], y = this.getTimeouts(), c = a ? y.appear : y.enter;
    if (!r && !o || td.disabled) {
      this.safeSetState({
        status: Ni
      }, function() {
        s.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: ni
    }, function() {
      s.props.onEntering(d, f), s.onTransitionEnd(c, function() {
        s.safeSetState({
          status: Ni
        }, function() {
          s.props.onEntered(d, f);
        });
      });
    });
  }, n.performExit = function() {
    var r = this, s = this.props.exit, o = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Vr.findDOMNode(this);
    if (!s || td.disabled) {
      this.safeSetState({
        status: ti
      }, function() {
        r.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Ya
    }, function() {
      r.props.onExiting(a), r.onTransitionEnd(o.exit, function() {
        r.safeSetState({
          status: ti
        }, function() {
          r.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(r, s) {
    s = this.setNextCallback(s), this.setState(r, s);
  }, n.setNextCallback = function(r) {
    var s = this, o = !0;
    return this.nextCallback = function(a) {
      o && (o = !1, s.nextCallback = null, r(a));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(r, s) {
    this.setNextCallback(s);
    var o = this.props.nodeRef ? this.props.nodeRef.current : Vr.findDOMNode(this), a = r == null && !this.props.addEndListener;
    if (!o || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], d = u[0], f = u[1];
      this.props.addEndListener(d, f);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, n.render = function() {
    var r = this.state.status;
    if (r === gr)
      return null;
    var s = this.props, o = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var a = Hl(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ et.createElement(Bs.Provider, {
        value: null
      }, typeof o == "function" ? o(r, a) : et.cloneElement(et.Children.only(o), a))
    );
  }, e;
})(et.Component);
kn.contextType = Bs;
kn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: l.shape({
    current: typeof Element > "u" ? l.any : function(t, e, n, i, r, s) {
      var o = t[e];
      return l.instanceOf(o && "ownerDocument" in o ? o.ownerDocument.defaultView.Element : Element)(t, e, n, i, r, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: l.oneOfType([l.func.isRequired, l.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: l.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: l.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: l.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: l.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: l.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: l.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(e) {
    var n = dS;
    e.addEndListener || (n = n.isRequired);
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
      r[s - 1] = arguments[s];
    return n.apply(void 0, [e].concat(r));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: l.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: l.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: l.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: l.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: l.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: l.func
} : {};
function Di() {
}
kn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Di,
  onEntering: Di,
  onEntered: Di,
  onExit: Di,
  onExiting: Di,
  onExited: Di
};
kn.UNMOUNTED = gr;
kn.EXITED = ti;
kn.ENTERING = ni;
kn.ENTERED = Ni;
kn.EXITING = Ya;
var pS = function(e, n) {
  return e && n && n.split(" ").forEach(function(i) {
    return cS(e, i);
  });
}, Go = function(e, n) {
  return e && n && n.split(" ").forEach(function(i) {
    return uS(e, i);
  });
}, Wl = /* @__PURE__ */ (function(t) {
  Ul(e, t);
  function e() {
    for (var i, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
      s[o] = arguments[o];
    return i = t.call.apply(t, [this].concat(s)) || this, i.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, i.onEnter = function(a, u) {
      var d = i.resolveArguments(a, u), f = d[0], y = d[1];
      i.removeClasses(f, "exit"), i.addClass(f, y ? "appear" : "enter", "base"), i.props.onEnter && i.props.onEnter(a, u);
    }, i.onEntering = function(a, u) {
      var d = i.resolveArguments(a, u), f = d[0], y = d[1], c = y ? "appear" : "enter";
      i.addClass(f, c, "active"), i.props.onEntering && i.props.onEntering(a, u);
    }, i.onEntered = function(a, u) {
      var d = i.resolveArguments(a, u), f = d[0], y = d[1], c = y ? "appear" : "enter";
      i.removeClasses(f, c), i.addClass(f, c, "done"), i.props.onEntered && i.props.onEntered(a, u);
    }, i.onExit = function(a) {
      var u = i.resolveArguments(a), d = u[0];
      i.removeClasses(d, "appear"), i.removeClasses(d, "enter"), i.addClass(d, "exit", "base"), i.props.onExit && i.props.onExit(a);
    }, i.onExiting = function(a) {
      var u = i.resolveArguments(a), d = u[0];
      i.addClass(d, "exit", "active"), i.props.onExiting && i.props.onExiting(a);
    }, i.onExited = function(a) {
      var u = i.resolveArguments(a), d = u[0];
      i.removeClasses(d, "exit"), i.addClass(d, "exit", "done"), i.props.onExited && i.props.onExited(a);
    }, i.resolveArguments = function(a, u) {
      return i.props.nodeRef ? [i.props.nodeRef.current, a] : [a, u];
    }, i.getClassNames = function(a) {
      var u = i.props.classNames, d = typeof u == "string", f = d && u ? u + "-" : "", y = d ? "" + f + a : u[a], c = d ? y + "-active" : u[a + "Active"], m = d ? y + "-done" : u[a + "Done"];
      return {
        baseClassName: y,
        activeClassName: c,
        doneClassName: m
      };
    }, i;
  }
  var n = e.prototype;
  return n.addClass = function(r, s, o) {
    var a = this.getClassNames(s)[o + "ClassName"], u = this.getClassNames("enter"), d = u.doneClassName;
    s === "appear" && o === "done" && d && (a += " " + d), o === "active" && r && Sp(r), a && (this.appliedClasses[s][o] = a, pS(r, a));
  }, n.removeClasses = function(r, s) {
    var o = this.appliedClasses[s], a = o.base, u = o.active, d = o.done;
    this.appliedClasses[s] = {}, a && Go(r, a), u && Go(r, u), d && Go(r, d);
  }, n.render = function() {
    var r = this.props;
    r.classNames;
    var s = Hl(r, ["classNames"]);
    return /* @__PURE__ */ et.createElement(kn, Tr({}, s, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, e;
})(et.Component);
Wl.defaultProps = {
  classNames: ""
};
Wl.propTypes = process.env.NODE_ENV !== "production" ? Tr({}, kn.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: hS,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: l.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: l.func
}) : {};
function mS(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Zl(t, e) {
  var n = function(s) {
    return e && ss(s) ? e(s) : s;
  }, i = /* @__PURE__ */ Object.create(null);
  return t && im.map(t, function(r) {
    return r;
  }).forEach(function(r) {
    i[r.key] = n(r);
  }), i;
}
function fS(t, e) {
  t = t || {}, e = e || {};
  function n(f) {
    return f in e ? e[f] : t[f];
  }
  var i = /* @__PURE__ */ Object.create(null), r = [];
  for (var s in t)
    s in e ? r.length && (i[s] = r, r = []) : r.push(s);
  var o, a = {};
  for (var u in e) {
    if (i[u])
      for (o = 0; o < i[u].length; o++) {
        var d = i[u][o];
        a[i[u][o]] = n(d);
      }
    a[u] = n(u);
  }
  for (o = 0; o < r.length; o++)
    a[r[o]] = n(r[o]);
  return a;
}
function oi(t, e, n) {
  return n[e] != null ? n[e] : t.props[e];
}
function vS(t, e) {
  return Zl(t.children, function(n) {
    return os(n, {
      onExited: e.bind(null, n),
      in: !0,
      appear: oi(n, "appear", t),
      enter: oi(n, "enter", t),
      exit: oi(n, "exit", t)
    });
  });
}
function gS(t, e, n) {
  var i = Zl(t.children), r = fS(e, i);
  return Object.keys(r).forEach(function(s) {
    var o = r[s];
    if (ss(o)) {
      var a = s in e, u = s in i, d = e[s], f = ss(d) && !d.props.in;
      u && (!a || f) ? r[s] = os(o, {
        onExited: n.bind(null, o),
        in: !0,
        exit: oi(o, "exit", t),
        enter: oi(o, "enter", t)
      }) : !u && a && !f ? r[s] = os(o, {
        in: !1
      }) : u && a && ss(d) && (r[s] = os(o, {
        onExited: n.bind(null, o),
        in: d.props.in,
        exit: oi(o, "exit", t),
        enter: oi(o, "enter", t)
      }));
    }
  }), r;
}
var bS = Object.values || function(t) {
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}, yS = {
  component: "div",
  childFactory: function(e) {
    return e;
  }
}, ql = /* @__PURE__ */ (function(t) {
  Ul(e, t);
  function e(i, r) {
    var s;
    s = t.call(this, i, r) || this;
    var o = s.handleExited.bind(mS(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: o,
      firstRender: !0
    }, s;
  }
  var n = e.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, e.getDerivedStateFromProps = function(r, s) {
    var o = s.children, a = s.handleExited, u = s.firstRender;
    return {
      children: u ? vS(r, a) : gS(r, o, a),
      firstRender: !1
    };
  }, n.handleExited = function(r, s) {
    var o = Zl(this.props.children);
    r.key in o || (r.props.onExited && r.props.onExited(s), this.mounted && this.setState(function(a) {
      var u = Tr({}, a.children);
      return delete u[r.key], {
        children: u
      };
    }));
  }, n.render = function() {
    var r = this.props, s = r.component, o = r.childFactory, a = Hl(r, ["component", "childFactory"]), u = this.state.contextValue, d = bS(this.state.children).map(o);
    return delete a.appear, delete a.enter, delete a.exit, s === null ? /* @__PURE__ */ et.createElement(Bs.Provider, {
      value: u
    }, d) : /* @__PURE__ */ et.createElement(Bs.Provider, {
      value: u
    }, /* @__PURE__ */ et.createElement(s, a, d));
  }, e;
})(et.Component);
ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: l.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: l.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: l.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: l.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: l.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: l.func
} : {};
ql.defaultProps = yS;
const Yl = p.forwardRef(
  (t, e) => {
    const n = p.useRef(null), {
      mountOnEnter: i = Bt.mountOnEnter,
      unmountOnExit: r = Bt.unmountOnExit,
      onEnter: s = Bt.onEnter,
      onEntering: o = Bt.onEntering,
      onEntered: a = Bt.onEntered,
      onExit: u = Bt.onExit,
      onExiting: d = Bt.onExiting,
      onExited: f = Bt.onExited,
      onAfterExited: y = Bt.onAfterExited,
      animationEnteringStyle: c = Bt.animationEnteringStyle,
      animationEnteredStyle: m = Bt.animationEnteredStyle,
      animationExitingStyle: S = Bt.animationExitingStyle,
      animationExitedStyle: k = Bt.animationExitedStyle,
      children: C,
      style: h,
      appear: b,
      enter: w,
      exit: E,
      transitionName: $,
      transitionEnterDuration: D,
      transitionExitDuration: T,
      className: O,
      unstyled: A,
      ...L
    } = t, B = {
      transitionDelay: "0ms",
      ...h
    }, X = A && A.uAnimation, z = N(O, Bn.childContainer({ c: X })), Q = p.useRef({
      element: n.current,
      props: t
    }), H = p.useRef(null);
    p.useImperativeHandle(H, () => ({
      element: n.current,
      props: t
    })), p.useImperativeHandle(
      e,
      () => H.current,
      []
    );
    const V = {
      entering: { transitionDuration: `${D}ms`, ...c },
      entered: { ...m },
      exiting: { transitionDuration: `${T}ms`, ...S },
      exited: { ...k }
    }, re = {
      in: t.in,
      appear: b,
      enter: w,
      exit: E,
      mountOnEnter: i,
      unmountOnExit: r,
      timeout: {
        enter: D,
        exit: T
      },
      onEnter: () => {
        s && s.call(void 0, {
          animatedElement: n.current,
          target: H.current || Q.current
        });
      },
      onEntering: () => {
        o && o.call(void 0, {
          animatedElement: n.current,
          target: H.current || Q.current
        });
      },
      onEntered: () => {
        a && a.call(void 0, {
          animatedElement: n.current,
          target: H.current || Q.current
        });
      },
      onExit: () => {
        u && u.call(void 0, {
          animatedElement: n.current,
          target: H.current || Q.current
        });
      },
      onExiting: () => {
        d && d.call(void 0, {
          animatedElement: n.current,
          target: H.current || Q.current
        });
      },
      onExited: () => {
        y && y.call(void 0, {
          animatedElement: n.current,
          target: H.current || Q.current
        }), f && f.call(void 0, {
          animatedElement: n.current,
          target: H.current || Q.current
        });
      },
      classNames: {
        appear: N(Bn.appear({ c: X, transitionName: $ })),
        appearActive: N(Bn.appearActive({ c: X, transitionName: $ })),
        enter: N(Bn.enter({ c: X, transitionName: $ })),
        enterActive: N(Bn.enterActive({ c: X, transitionName: $ })),
        exit: N(Bn.exit({ c: X, transitionName: $ })),
        exitActive: N(Bn.exitActive({ c: X, transitionName: $ }))
      }
    };
    return /* @__PURE__ */ p.createElement(Wl, { ...re, ...L, nodeRef: n }, (P) => /* @__PURE__ */ p.createElement(
      "div",
      {
        style: {
          ...B,
          ...V[P]
        },
        className: z,
        ref: (Y) => {
          n.current = Y, Q.current.element = Y;
        }
      },
      C
    ));
  }
), Bt = {
  mountOnEnter: !0,
  unmountOnExit: !1,
  onEnter: Vn,
  onEntering: Vn,
  onEntered: Vn,
  onExit: Vn,
  onExiting: Vn,
  onExited: Vn,
  onAfterExited: Vn,
  animationEnteringStyle: {},
  animationEnteredStyle: {},
  animationExitingStyle: {},
  animationExitedStyle: {}
};
Yl.displayName = "KendoReactAnimationChild";
Yl.propTypes = {
  in: l.bool,
  children: l.oneOfType([l.arrayOf(l.node), l.node]),
  transitionName: l.string.isRequired,
  className: l.string,
  appear: l.bool,
  enter: l.bool,
  exit: l.bool,
  transitionEnterDuration: l.number.isRequired,
  transitionExitDuration: l.number.isRequired,
  mountOnEnter: l.bool,
  unmountOnExit: l.bool,
  animationEnteringStyle: l.object,
  animationEnteredStyle: l.object,
  animationExitingStyle: l.object,
  animationExitedStyle: l.object
};
const Kl = (t) => {
  const {
    id: e,
    style: n,
    children: i,
    component: r = "div",
    className: s,
    childFactory: o,
    stackChildren: a,
    componentChildStyle: u,
    componentChildClassName: d,
    ...f
  } = t, y = pn(), c = t.unstyled || y, m = c && c.uAnimation, S = {
    id: e,
    style: n,
    component: r,
    childFactory: o,
    className: N(Bn.child({ c: m }), s)
  }, k = p.Children.map(i || null, (C) => /* @__PURE__ */ p.createElement(Yl, { ...f, unstyled: c, style: u, className: d }, C));
  return /* @__PURE__ */ p.createElement(ql, { ...S }, k);
};
Kl.propTypes = {
  children: l.oneOfType([l.arrayOf(l.node), l.node]),
  childFactory: l.any,
  className: l.string,
  component: l.node,
  id: l.string,
  style: l.any,
  transitionName: l.string.isRequired,
  appear: l.bool.isRequired,
  enter: l.bool.isRequired,
  exit: l.bool.isRequired,
  transitionEnterDuration: l.number.isRequired,
  transitionExitDuration: l.number.isRequired
};
const Ka = (t) => {
  const {
    appear: e = lr.appear,
    enter: n = lr.enter,
    exit: i = lr.exit,
    transitionEnterDuration: r = lr.transitionEnterDuration,
    transitionExitDuration: s = lr.transitionExitDuration,
    children: o,
    ...a
  } = t, u = {
    transitionName: "fade"
  };
  return /* @__PURE__ */ p.createElement(
    Kl,
    {
      ...u,
      appear: e,
      enter: n,
      exit: i,
      transitionEnterDuration: r,
      transitionExitDuration: s,
      ...a
    },
    o
  );
}, lr = {
  appear: !1,
  enter: !0,
  exit: !1,
  transitionEnterDuration: 500,
  transitionExitDuration: 500
};
Ka.propTypes = {
  children: l.oneOfType([l.arrayOf(l.node), l.node]),
  childFactory: l.any,
  className: l.string,
  component: l.node,
  id: l.string,
  style: l.any
};
const kp = class extends p.Component {
  constructor() {
    super(...arguments), this.contentId = this.props.contentPanelId, this.childFactory = (e) => p.cloneElement(e, {
      ...e.props,
      in: e.props.children.props.id === String(this.contentId + this.props.selected)
    });
  }
  /**
   * @hidden
   */
  render() {
    const { children: e, selected: n, contentPanelId: i, keepTabsMounted: r, navItemId: s, renderAllContent: o } = this.props, a = e && typeof n == "number" && p.Children.toArray(e)[n], u = N(
      "k-tabstrip-content",
      "k-active",
      a && a.props.contentClassName
    );
    return o ? this.renderAllContent(e) : /* @__PURE__ */ p.createElement(
      "div",
      {
        className: u,
        style: this.props.style,
        id: i,
        role: "tabpanel",
        "aria-hidden": r,
        "aria-labelledby": `${s}-${n?.toString() || ""}`,
        tabIndex: 0
      },
      this.renderContent(e)
    );
  }
  renderContent(e) {
    return this.props.keepTabsMounted ? p.Children.map(this.props.children, (n, i) => this.renderChild(n, i)) : this.renderChild(
      p.Children.toArray(e)[this.props.selected],
      this.props.selected
    );
  }
  renderAllContent(e) {
    return p.Children.map(e, (n, i) => {
      const r = n, s = i === this.props.selected, o = N(
        "k-tabstrip-content",
        { "k-active": s },
        r.props.contentClassName
      );
      return /* @__PURE__ */ p.createElement(
        "div",
        {
          className: o,
          style: this.props.style,
          id: `${this.props.contentPanelId}-${i}`,
          role: "tabpanel",
          "aria-hidden": !s,
          hidden: !s,
          "aria-labelledby": `${this.props.navItemId}-${i}`
        },
        this.props.animation ? /* @__PURE__ */ p.createElement(Ka, { key: `${i}-${s}`, appear: !0, enter: !0, exit: !1 }, r.props.children) : r.props.children
      );
    });
  }
  renderChild(e, n) {
    const i = n === this.props.selected, r = {
      style: {
        display: i ? void 0 : "none"
      }
    }, s = {
      position: "initial",
      display: i ? void 0 : "none"
    };
    return e.props.disabled ? null : this.props.animation ? /* @__PURE__ */ p.createElement(
      Ka,
      {
        appear: !0,
        exit: this.props.keepTabsMounted,
        style: s,
        childFactory: this.props.keepTabsMounted ? this.childFactory : void 0
      },
      /* @__PURE__ */ p.createElement("div", { ...r, id: String(this.contentId + n), key: n }, e.props.children)
    ) : /* @__PURE__ */ p.createElement("div", { ...r, key: n }, e.props.children);
  }
};
kp.propTypes = {
  animation: l.bool,
  children: l.oneOfType([l.element, l.arrayOf(l.element)]),
  selected: l.number,
  style: l.object
};
let xS = kp;
const Ga = class extends p.Component {
  constructor(e) {
    super(e), this.tabStripRef = p.createRef(), this.itemsNavRef = p.createRef(), this.onScroll = () => {
      const n = this.horizontalScroll(), i = this.itemsNavRef.current;
      if (!i)
        return;
      const r = i.scrollLeft, s = i.clientWidth, o = i.scrollWidth, a = i.scrollTop, u = i.scrollHeight, d = i.clientHeight;
      let f = null;
      const y = n ? o > s : u > d, c = this.props.dir === "rtl";
      y ? n ? r + s === o || (c && s - r) === o ? f = "end" : r === 0 || c && -r === 0 ? f = "start" : r > 0 && r + s < o || -r > 0 && s - r < o ? f = "middle" : f = null : u - (a + d) === 0 ? f = "bottom" : a === 0 ? f = "top" : a > 0 && u - (a + d) > 0 ? f = "middle" : f = null : f = null, this.setState({ containerScrollPosition: f });
    }, this.onSelect = (n) => {
      this.props.selected !== n && this.props.onSelect && this.props.onSelect({
        selected: n
      });
    }, this.onKeyDown = (n) => {
      this.navigation && this.navigation.triggerKeyboardEvent(n);
    }, this.onKeyboardSelect = (n) => {
      const i = this.children();
      i && i[n].props.disabled || this.onSelect(n);
    }, this.renderContent = (n) => {
      const { selected: i, children: r, tabContentStyle: s } = n, o = p.Children.count(r);
      return i < o && i > -1 ? /* @__PURE__ */ p.createElement(xS, { index: i, ...n, style: s }) : null;
    }, this.state = {
      containerScrollPosition: null
    }, this.itemsNavRef = p.createRef();
  }
  get contentPanelId() {
    return this.props.id + "-content-panel-id";
  }
  get navItemId() {
    return this.props.id + "-nav-item-id";
  }
  /** @hidden */
  componentDidMount() {
    var e;
    const n = this.tabStripRef.current, i = n && getComputedStyle(n).direction === "rtl" || !1;
    n && (this.navigation = new nh({
      tabIndex: 0,
      root: this.tabStripRef,
      rovingTabIndex: !0,
      focusClass: "k-focus",
      selectors: [".k-tabstrip .k-tabstrip-item"],
      keyboardEvents: {
        keydown: {
          ArrowLeft: (r, s, o) => {
            o.preventDefault();
            const a = s.elements.indexOf(r), u = a !== 0 ? a - 1 : s.elements.length - 1, d = a !== s.elements.length - 1 ? a + 1 : 0;
            i ? (s.focusNext(r), this.onKeyboardSelect(d)) : (s.focusPrevious(r), this.onKeyboardSelect(u));
          },
          ArrowRight: (r, s, o) => {
            o.preventDefault();
            const a = s.elements.indexOf(r), u = a !== 0 ? a - 1 : s.elements.length - 1, d = a !== s.elements.length - 1 ? a + 1 : 0;
            i ? (s.focusPrevious(r), this.onKeyboardSelect(u)) : (s.focusNext(r), this.onKeyboardSelect(d));
          },
          ArrowDown: (r, s, o) => {
            o.preventDefault();
            const a = s.elements.indexOf(r), u = a !== s.elements.length - 1 ? a + 1 : 0;
            s.focusNext(r), this.onKeyboardSelect(u);
          },
          ArrowUp: (r, s, o) => {
            o.preventDefault();
            const a = s.elements.indexOf(r), u = a !== 0 ? a - 1 : s.elements.length - 1;
            s.focusPrevious(r), this.onKeyboardSelect(u);
          },
          Home: (r, s, o) => {
            o.preventDefault(), s.focusElement(s.first, r), this.onKeyboardSelect(0);
          },
          End: (r, s, o) => {
            o.preventDefault(), s.focusElement(s.last, r), this.onKeyboardSelect(s.elements.length - 1);
          }
        }
      }
    }), (e = this.navigation) == null || e.initializeRovingTab(this.props.selected), this.onScroll(), this.resizeObserver = window.ResizeObserver && new ResizeObserver(() => this.onScroll()), this.tabStripRef.current && this.resizeObserver && this.resizeObserver.observe(this.tabStripRef.current));
  }
  /** @hidden */
  componentWillUnmount() {
    var e;
    (e = this.navigation) == null || e.removeFocusListener(), this.resizeObserver && this.resizeObserver.disconnect();
  }
  horizontalScroll() {
    return /top|bottom/.test(this.props.tabPosition || "top");
  }
  /**
   * @hidden
   */
  render() {
    const e = {
      itemsNavRef: this.itemsNavRef,
      ...this.props,
      children: this.children(),
      contentPanelId: this.contentPanelId,
      renderAllContent: this.props.renderAllContent,
      navItemId: this.navItemId,
      onKeyDown: this.onKeyDown,
      onSelect: this.onSelect,
      onScroll: this.onScroll,
      containerScrollPosition: this.state.containerScrollPosition,
      scrollButtons: this.props.scrollButtons === "hidden" || this.state.containerScrollPosition === null && this.props.scrollButtons === "auto" ? "hidden" : "visible"
    }, { scrollable: n, scrollButtons: i, size: r, tabPosition: s, tabIndex: o } = e, a = s === "bottom", u = N(
      "k-tabstrip k-pos-relative",
      {
        [`k-tabstrip-${kr.sizeMap[r] || r}`]: r,
        "k-tabstrip-left": s === "left",
        "k-tabstrip-right": s === "right",
        "k-tabstrip-bottom": s === "bottom",
        "k-tabstrip-top": s === "top",
        "k-tabstrip-scrollable": n,
        "k-tabstrip-scrollable-start k-tabstrip-scrollable-end": n && i === "visible",
        "k-tabstrip-scrollable-start": n && (i === "auto" || !i) && (this.state.containerScrollPosition === "end" || this.state.containerScrollPosition === "middle"),
        "k-tabstrip-scrollable-end": n && i === "auto" && (this.state.containerScrollPosition === "start" || this.state.containerScrollPosition === "middle")
      },
      this.props.className
    );
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        id: this.props.id,
        ref: this.tabStripRef,
        dir: this.props.dir,
        className: u,
        style: this.props.style,
        onScroll: this.onScroll
      },
      !a && /* @__PURE__ */ p.createElement(Xu, { ...e, tabIndex: o }),
      this.renderContent(e),
      a && /* @__PURE__ */ p.createElement(Xu, { ...e, tabIndex: o })
    );
  }
  children() {
    return p.Children.toArray(this.props.children).filter((e) => e);
  }
};
Ga.propTypes = {
  id: l.string,
  animation: l.bool,
  children: l.node,
  onSelect: l.func,
  selected: l.number,
  style: l.object,
  tabContentStyle: l.object,
  tabPosition: l.string,
  tabAlignment: l.string,
  tabIndex: l.number,
  className: l.string,
  dir: l.string,
  renderAllContent: l.bool,
  size: l.oneOf(["small", "medium", "large", null]),
  scrollButtons: l.oneOf(["auto", "visible", "hidden"]),
  scrollButtonsPosition: l.oneOf(["split", "start", "end", "around", "before", "after"])
}, Ga.defaultProps = {
  animation: !0,
  tabPosition: "top",
  tabAlignment: "start",
  keepTabsMounted: !1,
  buttonScrollSpeed: 100,
  mouseScrollSpeed: 10,
  scrollButtons: "auto",
  scrollButtonsPosition: "split",
  size: "medium",
  renderAllContent: !1
};
let wS = Ga;
const Ja = (t) => {
  const e = p.useRef(null), n = p.useCallback(
    (i) => {
      t.onClick && t.onClick.call(void 0, {
        syntheticEvent: i,
        item: t.item,
        title: t.title
      });
    },
    [t.item, t.title, t.onClick]
  );
  return p.useEffect(() => {
    e.current && t.focused && e.current.focus();
  }, [t.focused]), /* @__PURE__ */ p.createElement(
    "span",
    {
      style: t.style,
      tabIndex: t.tabIndex,
      className: N(
        "k-actionsheet-item",
        "k-cursor-pointer",
        t.disabled && "k-disabled",
        t.className
      ),
      ref: e,
      role: "button",
      "aria-disabled": t.disabled,
      onClick: n
    },
    /* @__PURE__ */ p.createElement("span", { className: "k-actionsheet-action" }, t.icon && /* @__PURE__ */ p.createElement("span", { className: "k-icon-wrap" }, t.icon), (t.title || t.description) && /* @__PURE__ */ p.createElement("span", { className: "k-actionsheet-item-text" }, t.title && /* @__PURE__ */ p.createElement("span", { className: "k-actionsheet-item-title" }, t.title), t.description && /* @__PURE__ */ p.createElement("span", { className: "k-actionsheet-item-description" }, t.description)))
  );
};
Ja.propTypes = {
  className: l.string,
  style: l.object,
  description: l.string,
  disabled: l.bool,
  group: l.oneOf(["top", "bottom"]),
  icon: l.element,
  title: l.string
};
const nd = "ActionSheetHeader";
l.string;
l.any;
const Dp = "ActionSheetFooter", Gl = (t) => {
  const {
    actionButtonsAlignment: e = "stretched",
    actionButtonsOrientation: n = "horizontal",
    className: i,
    children: r
  } = t;
  return /* @__PURE__ */ p.createElement(
    "div",
    {
      className: N(
        "k-actionsheet-footer",
        {
          "k-actions": e || n,
          "k-actions-horizontal": n === "horizontal",
          "k-actions-vertical": n === "vertical",
          "k-actions-start": e === "start" && n === "horizontal",
          "k-actions-center": e === "center" && n === "horizontal",
          "k-actions-end": e === "end" && n === "horizontal",
          "k-actions-stretched": e === "stretched",
          "k-actions-justify": e === "justify" && n === "horizontal"
        },
        i
      )
    },
    r
  );
};
Gl.propTypes = {
  className: l.string,
  children: l.any,
  actionButtonsOrientation: l.oneOf(["horizontal", "vertical"]),
  actionButtonsAlignment: l.oneOf(["start", "center", "end", "stretched", "justify"])
};
Gl.displayName = Dp;
const Cp = "ActionSheetContent", gi = (t) => /* @__PURE__ */ p.createElement("div", { className: N("k-actionsheet-content", t.className) }, t.children);
gi.propTypes = {
  className: l.string
};
gi.displayName = Cp;
gi.propTypes = {
  children: l.any
};
const $S = "ActionSheetView", Ip = et.forwardRef((t, e) => {
  const n = et.useRef(null);
  return et.useImperativeHandle(e, () => n, []), /* @__PURE__ */ et.createElement("div", { ref: n, style: t.style, className: N("k-actionsheet-view", t.className) }, t.children);
});
Ip.displayName = "ActionSheetView";
const Jl = p.forwardRef((t, e) => {
  var n, i;
  const {
    navigatableElements: r = Jo.navigatableElements,
    navigatable: s = Jo.navigatable,
    position: o = Jo.position,
    animationDuration: a = 300,
    prefixActions: u,
    suffixActions: d,
    filter: f
  } = t, y = (P, Y, M) => {
    M.preventDefault(), M.shiftKey ? Y.focusPrevious(P) : Y.focusNext(P);
  }, c = (P, Y, M) => {
    if (P.ariaDisabled)
      return;
    const I = P.className && P.className.indexOf ? P.className.indexOf("k-actionsheet-item") !== -1 : !1, j = Y.elements.filter((Z) => Z.className.indexOf("k-actionsheet-item") !== -1);
    if (I && t.onItemSelect) {
      M.preventDefault();
      const Z = t.items[j.indexOf(P)];
      t.onItemSelect.call(void 0, {
        syntheticEvent: M,
        item: Z,
        title: Z && Z.title
      });
    }
    t.animation || S();
  }, m = (P, Y, M) => {
    t.onClose && (M.preventDefault(), t.onClose.call(void 0, M)), t.animation || S();
  }, S = () => {
    L({ show: !1 });
  }, k = (P) => {
    s && $.current.triggerKeyboardEvent(P);
  }, C = (P) => {
    t.onClose && t.onClose.call(void 0, P), t.animation || S();
  }, h = (P) => {
    t.onItemSelect && t.onItemSelect.call(void 0, P), t.animation || S();
  }, b = (P) => {
    const Y = {}, M = [];
    return p.Children.forEach(P, (I) => {
      I && (I.type.displayName === $S ? M.push(I) : Y[I.type.displayName] = I);
    }), M.length > 0 ? M : Y;
  }, w = p.useRef(null), E = p.useRef(null);
  p.useImperativeHandle(
    w,
    () => ({ props: t, element: E.current })
  ), p.useImperativeHandle(
    e,
    () => w.current
  );
  const $ = p.useRef(void 0), D = p.useRef({ bottom: "0", width: "100%" }), T = p.useRef(void 0), [O, A] = p.useState({ show: !1, slide: !1 }), L = (P) => {
    A((Y) => ({ ...Y, ...P }));
  };
  p.useEffect(() => {
    t.expand && !O.show && L({ show: !0 });
  }, []), p.useEffect(() => {
    const P = E.current;
    if (t.expand && !O.show && L({ show: !0 }), t.expand && O.show && !O.slide && L({ slide: !0 }), !t.expand && O.show && O.slide && L({ slide: !1 }), T !== O && O.slide && P && !t.className && (P.style.setProperty("--kendo-actionsheet-height", "auto"), P.style.setProperty("--kendo-actionsheet-max-height", "none")), P && s) {
      const Y = [".k-actionsheet-item", ...[
        ".k-actionsheet-footer",
        ".k-actionsheet-content",
        ".k-actionsheet-view",
        ".k-actionsheet-titlebar"
      ].map((M) => $y.concat(r).map(
        (I) => `${M} ${I}`
      )).flat()];
      $.current = new nh({
        tabIndex: t.tabIndex || 0,
        root: E,
        rovingTabIndex: !1,
        selectors: Y,
        keyboardEvents: {
          keydown: {
            Tab: y,
            Enter: c,
            Escape: m
          }
        }
      }), $.current.focusElement($.current.first, null);
    }
    T.current = { ...O };
  });
  const B = "k-actionsheet-title", X = B, z = (n = t.items) == null ? void 0 : n.filter(
    (P) => !P.group || P.group === "top"
  ), Q = (i = t.items) == null ? void 0 : i.filter(
    (P) => P.group === "bottom"
  ), H = z && z.length > 0 && Q && Q.length > 0, V = b(t.children), re = O.slide && /* @__PURE__ */ p.createElement(
    "div",
    {
      className: N(`k-actionsheet k-actionsheet-${o}`, t.className),
      role: "dialog",
      "aria-modal": "true",
      style: t.style,
      "aria-hidden": !1,
      "aria-labelledby": X,
      ref: E,
      onKeyDown: k
    },
    Array.isArray(V) ? /* @__PURE__ */ p.createElement(p.Fragment, null, V.map((P) => P)) : /* @__PURE__ */ p.createElement(Ip, null, V[nd] && !t.title && !t.subTitle && V[nd], (t.title || t.subTitle || u || d || f) && /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-titlebar" }, /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-titlebar-group" }, u && /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-actions" }, u), /* @__PURE__ */ p.createElement("div", { className: B, id: X }, /* @__PURE__ */ p.createElement("div", { className: "k-text-center" }, t.title), t.subTitle && /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-subtitle k-text-center" }, t.subTitle)), d && /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-actions" }, d)), f && /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, f)), V[Cp] || /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-content" }, /* @__PURE__ */ p.createElement("div", { className: "k-list-ul", role: "group" }, z && z.map((P, Y) => /* @__PURE__ */ p.createElement(
      Ja,
      {
        ...P,
        id: Y,
        key: Y,
        item: P,
        onClick: h
      }
    )), H && /* @__PURE__ */ p.createElement("hr", { className: "k-hr" }), Q && Q.map((P, Y) => /* @__PURE__ */ p.createElement(
      Ja,
      {
        ...P,
        id: Y + (z?.length || 0),
        key: Y,
        item: P,
        onClick: h
      }
    )))), V[Dp])
  );
  return /* @__PURE__ */ p.createElement(p.Fragment, null, t.expand || O.show ? /* @__PURE__ */ p.createElement("div", { className: "k-actionsheet-container" }, /* @__PURE__ */ p.createElement("div", { className: "k-overlay", onClick: C }), t.animation ? /* @__PURE__ */ p.createElement(
    Kl,
    {
      transitionName: O.slide ? "slide-up" : "slide-down",
      onExited: S,
      transitionEnterDuration: typeof a == "object" && Object.keys(a).length > 0 && a.openDuration ? Number(a.openDuration) : Number(a),
      transitionExitDuration: typeof a == "object" && Object.keys(a).length > 0 && a.closeDuration ? Number(a.closeDuration) : Number(a),
      animationEnteringStyle: t.animationStyles || D.current,
      animationEnteredStyle: t.animationStyles || D.current,
      animationExitingStyle: t.animationStyles || D.current,
      exit: !0,
      enter: !0,
      appear: !1
    },
    re
  ) : re) : null);
}), Jo = {
  navigatable: !0,
  navigatableElements: [],
  position: "bottom"
};
Jl.propTypes = {
  items: l.array,
  subTitle: l.node,
  title: l.node,
  navigatable: l.bool,
  navigatableElements: l.array,
  position: l.oneOf(["top", "bottom", "left", "right", "fullscreen"])
};
Jl.displayName = "KendoReactActionSheet";
const Mp = En(sS);
Mp.displayName = "KendoReactMenu";
En(wS);
Mp.displayName = "KendoReactMenu";
const oo = (t) => {
  const {
    footer: e,
    windowWidth: n = 0,
    mobileFilter: i,
    children: r,
    navigatable: s,
    navigatableElements: o,
    expand: a,
    animation: u,
    title: d,
    subTitle: f,
    onClose: y
  } = t, c = () => /* @__PURE__ */ p.createElement(
    Be,
    {
      tabIndex: 0,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      size: "large",
      themeColor: "primary",
      svgIcon: Jy,
      onClick: y
    }
  ), m = ml(), S = {
    navigatable: s || !1,
    navigatableElements: o || [],
    expand: a,
    animation: u !== !1,
    suffixActions: c(),
    filter: i,
    onClose: y,
    animationStyles: m && n <= m.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    title: d,
    subTitle: f,
    className: "k-adaptive-actionsheet",
    position: m && n <= m.small ? "fullscreen" : void 0
  };
  return /* @__PURE__ */ p.createElement(Jl, { ...S }, r, e && /* @__PURE__ */ p.createElement(Gl, { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ p.createElement(
    Be,
    {
      size: "large",
      tabIndex: 0,
      "aria-label": e.cancelText,
      "aria-disabled": "false",
      type: "button",
      onClick: e.onCancel
    },
    e.cancelText
  ), /* @__PURE__ */ p.createElement(
    Be,
    {
      tabIndex: 0,
      themeColor: "primary",
      size: "large",
      "aria-label": e.applyText,
      "aria-disabled": "false",
      type: "button",
      onClick: e.onApply
    },
    e.applyText
  )));
};
const Ql = p.forwardRef((t, e) => {
  const n = gl(t.id), i = no(), r = ml(), {
    defaultShow: s = at.defaultShow,
    defaultValue: o = at.defaultValue,
    dateInput: a = at.dateInput,
    calendar: u = at.calendar,
    toggleButton: d = at.toggleButton,
    popup: f = at.popup,
    disabled: y = at.disabled,
    format: c = at.format,
    max: m = at.max,
    min: S = at.min,
    popupSettings: k = at.popupSettings,
    tabIndex: C = at.tabIndex,
    weekNumber: h = at.weekNumber,
    validityStyles: b = at.validityStyles,
    size: w = at.size,
    rounded: E = at.rounded,
    fillMode: $ = at.fillMode,
    autoFocus: D = at.autoFocus,
    show: T,
    autoSwitchParts: O,
    autoSwitchKeys: A,
    twoDigitYearMax: L,
    ariaLabel: B,
    adaptive: X,
    adaptiveTitle: z = t.label || void 0,
    adaptiveSubtitle: Q,
    formatPlaceholder: H,
    inputAttributes: V,
    validationMessage: re,
    visited: P,
    value: Y,
    touched: M,
    modified: I,
    _adaptiveMode: j = r,
    valid: Z,
    focusedDate: G,
    id: q,
    ariaLabelledBy: ae,
    ariaDescribedBy: _,
    placeholder: K,
    onChange: se,
    onOpen: ce,
    onClose: ve,
    ...W
  } = Ps(ES, t), st = () => {
    if (Dt)
      return Lt.current && Lt.current.ownerDocument || window.document;
  }, Te = () => !!(yi.windowWidth && r && yi.windowWidth <= r?.medium && t.adaptive), be = () => {
    const de = Vt.current !== void 0 ? Vt.current : Y !== void 0 ? Y : yi.value;
    return de !== null ? F(de) : null;
  }, $e = () => Xn.current !== void 0 ? Xn.current : T !== void 0 ? T : yi.show, ht = () => a || at.dateInput, ye = () => d || at.toggleButton, oe = () => u || at.calendar, Ie = () => f || at.popup, Ke = () => t.required !== void 0 ? t.required : !1, He = () => {
    const de = be() || Y || null, Ue = S, bn = m, Lr = Ah(de, Ue, bn), co = re !== void 0, uo = (!Ke() || de != null) && Lr, ho = Z !== void 0 ? Z : uo;
    return {
      customError: co,
      rangeOverflow: de && bn.getTime() < de.getTime() || !1,
      rangeUnderflow: de && de.getTime() < Ue.getTime() || !1,
      valid: ho,
      valueMissing: de === null
    };
  }, je = (de) => {
    for (const Ue of de)
      rr({ windowWidth: Ue.target.clientWidth });
  }, Mt = () => {
    wt.current && wt.current.focus();
  }, gt = (de) => {
    Ge.current = de;
  }, Ft = (de) => {
    $e() !== de && (rr({ show: de }), de && ce && ce({ target: zn.current }), !de && ve && ve({ target: zn.current }));
  }, Gt = (de) => {
    const Ue = be();
    return Ue && de ? Ct(de, Ue) : de;
  }, pt = (de) => {
    k != null && k.onMouseDownOutside && k.onMouseDownOutside(de);
  }, fn = (de, Ue) => {
    rr({ value: F(de || void 0) }), Vt.current = de, Xn.current = !1, Te() || (mt.current = !0), se && se({
      syntheticEvent: Ue.syntheticEvent,
      nativeEvent: Ue.nativeEvent,
      value: be(),
      show: $e(),
      target: zn.current
    }), Vt.current = void 0, Xn.current = void 0, Ft(!1);
  }, vn = (de) => {
    const Ue = Gt(de.value);
    fn(Ue, de);
  }, Dn = () => {
    const { popupClass: de, ...Ue } = k, bn = $e(), Lr = be(), co = Lr && Se(Lr), uo = N(de), ho = {
      popupClass: "k-datepicker-popup",
      show: bn,
      anchor: Lt.current,
      className: uo,
      id: ic,
      anchorAlign: {
        horizontal: "left",
        vertical: "bottom"
      },
      popupAlign: {
        horizontal: "left",
        vertical: "top"
      },
      ...Ue,
      onMouseDownOutside: pt
    }, ac = {
      disabled: y,
      value: co,
      min: S,
      max: m,
      weekNumber: h,
      focusedDate: G,
      className: Te() ? "k-calendar-lg" : "",
      navigation: !Te(),
      onChange: vn
    }, lc = oe(), tm = Ie();
    return Te() ? /* @__PURE__ */ p.createElement(lc, { _ref: gt, ...ac }) : /* @__PURE__ */ p.createElement(tm, { ...ho }, /* @__PURE__ */ p.createElement(lc, { _ref: gt, ...ac }));
  }, J = () => {
    rr({ focused: !1 }), Ft(!1);
  }, ke = () => {
    const { windowWidth: de = 0 } = yi, Ue = {
      expand: $e(),
      onClose: J,
      title: z,
      subTitle: Q,
      windowWidth: de
    };
    return /* @__PURE__ */ p.createElement(oo, { ...Ue }, /* @__PURE__ */ p.createElement(gi, null, Dn()));
  }, Ot = (de) => {
    fn(de.value, de);
  }, Jt = () => {
    rr({ focused: !0 });
  }, Qt = () => {
    Ft(!$e());
  }, gn = () => {
    y || (mt.current = !0, Ft(!$e()));
  }, bi = (de) => {
    de.preventDefault();
  }, Fr = (de) => {
    const { altKey: Ue, keyCode: bn } = de;
    if (bn === U.esc && $e()) {
      mt.current = !0, Ft(!1);
      return;
    }
    Ue && (bn === U.up || bn === U.down) && (de.preventDefault(), de.stopPropagation(), mt.current = bn === U.up, Ft(bn === U.down));
  }, zn = p.useRef(null), Lt = p.useRef(null), wt = p.useRef(null), Ge = p.useRef(null);
  p.useImperativeHandle(
    zn,
    () => ({
      props: t,
      get element() {
        return Lt.current;
      },
      get calendar() {
        return Ge.current;
      },
      get dateInput() {
        return wt.current;
      },
      get name() {
        return t.name;
      },
      get show() {
        return $e();
      },
      get validity() {
        return He();
      },
      get value() {
        return be();
      },
      get mobileMode() {
        return Te();
      },
      togglePopup: Qt,
      // Hidden Methods but still accessible
      focus: Mt
    })
  ), p.useImperativeHandle(e, () => zn.current);
  const Vt = p.useRef(void 0), Xn = p.useRef(void 0), lo = p.useRef(null), mt = p.useRef(!1), Cn = p.useRef(!1), ir = p.useRef(null), [yi, qp] = p.useState({
    value: o,
    show: s,
    focused: !1
  }), [, Yp] = p.useReducer((de) => de, !0), rr = (de) => {
    qp((Ue) => ({ ...Ue, ...de }));
  };
  p.useEffect(() => {
    Ge.current && Ge.current.element && $e() && !Cn.current && Ge.current.element.focus({ preventScroll: !0 }), Te() && $e() && !Cn.current && setTimeout(() => {
      Ge.current && Ge.current.element && Ge.current.element.focus({ preventScroll: !0 });
    }, 300), wt.current && wt.current.element && !$e() && mt.current && wt.current.element.focus({ preventScroll: !0 }), Cn.current = $e(), mt.current = !1;
  }), p.useEffect(() => {
    var de;
    return ir.current = Dt && window.ResizeObserver && new window.ResizeObserver((Ue) => je(Ue)), $e() && Yp(), (de = st()) != null && de.body && ir.current && ir.current.observe(st().body), () => {
      var Ue;
      clearTimeout(lo.current), (Ue = st()) != null && Ue.body && ir.current && ir.current.disconnect();
    };
  }, []);
  const ic = n + "-popup-id", Kp = Dn(), Gp = ht(), Jp = be(), Qp = ye(), Xp = ke(), rc = !b || He().valid, sc = i.toLanguageString(Sa, Ce[Sa]), em = {
    disabled: y,
    format: c,
    formatPlaceholder: H,
    id: q,
    ariaLabelledBy: ae,
    ariaDescribedBy: _,
    ariaLabel: B,
    max: m,
    min: S,
    name: t.name,
    onChange: Ot,
    required: t.required,
    _ref: wt,
    tabIndex: $e() ? -1 : C,
    title: t.title,
    valid: He().valid,
    validationMessage: re,
    validityStyles: b,
    value: Jp,
    label: void 0,
    placeholder: yi.focused ? null : K,
    ariaExpanded: $e(),
    size: null,
    fillMode: null,
    rounded: null,
    autoFill: t.autoFill,
    twoDigitYearMax: L,
    enableMouseWheel: t.enableMouseWheel,
    autoCorrectParts: t.autoCorrectParts,
    autoSwitchParts: O,
    autoSwitchKeys: A,
    allowCaretMode: t.allowCaretMode,
    inputAttributes: V
  }, oc = /* @__PURE__ */ p.createElement(
    vl,
    {
      onFocus: Jt,
      onBlur: Te() ? void 0 : J,
      onSyncBlur: t.onBlur,
      onSyncFocus: t.onFocus
    },
    (de) => /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
      "span",
      {
        ...t.label ? {} : W,
        ref: Lt,
        className: N(
          "k-input",
          "k-datepicker",
          {
            [`k-input-${kr.sizeMap[w] || w}`]: w,
            [`k-rounded-${kr.roundedMap[E] || E}`]: E,
            [`k-input-${$}`]: $,
            "k-invalid": !rc,
            "k-required": Ke(),
            "k-disabled": y
          },
          t.className
        ),
        onKeyDown: Fr,
        style: { width: t.width },
        onFocus: Te() ? gn : de.onFocus,
        onBlur: de.onBlur,
        onClick: Te() ? gn : void 0
      },
      /* @__PURE__ */ p.createElement(
        Gp,
        {
          _ref: wt,
          ariaRole: "combobox",
          ariaExpanded: $e(),
          ariaControls: ic,
          autoFocus: D,
          ...em
        }
      ),
      /* @__PURE__ */ p.createElement(
        Qp,
        {
          type: "button",
          icon: "calendar",
          svgIcon: rh,
          title: sc,
          className: "k-input-button",
          rounded: null,
          onClick: Te() ? void 0 : gn,
          "aria-label": sc,
          fillMode: $,
          onMouseDown: bi
        }
      ),
      !Te() && Kp
    ), Te() && Xp)
  );
  return t.label ? /* @__PURE__ */ p.createElement(
    Bl,
    {
      dateInput: wt,
      label: t.label,
      editorId: n,
      editorValid: rc,
      editorDisabled: y,
      children: oc,
      style: { width: t.width },
      ...W
    }
  ) : oc;
});
Ql.propTypes = {
  className: l.string,
  defaultShow: l.bool,
  defaultValue: l.instanceOf(Date),
  disabled: l.bool,
  focusedDate: l.instanceOf(Date),
  format: l.oneOfType([
    l.string,
    l.shape({
      skeleton: pe(l.string),
      pattern: pe(l.string),
      date: pe(l.oneOf(["short", "medium", "long", "full"])),
      time: pe(l.oneOf(["short", "medium", "long", "full"])),
      datetime: pe(l.oneOf(["short", "medium", "long", "full"])),
      era: pe(l.oneOf(["narrow", "short", "long"])),
      year: pe(l.oneOf(["numeric", "2-digit"])),
      month: pe(l.oneOf(["numeric", "2-digit", "narrow", "short", "long"])),
      day: pe(l.oneOf(["numeric", "2-digit"])),
      weekday: pe(l.oneOf(["narrow", "short", "long"])),
      hour: pe(l.oneOf(["numeric", "2-digit"])),
      hour12: pe(l.bool),
      minute: pe(l.oneOf(["numeric", "2-digit"])),
      second: pe(l.oneOf(["numeric", "2-digit"])),
      timeZoneName: pe(l.oneOf(["short", "long"]))
    })
  ]),
  formatPlaceholder: l.oneOfType([
    pe(
      l.oneOf(["wide", "narrow", "short", "formatPattern"])
    ),
    l.shape({
      year: pe(l.string),
      month: pe(l.string),
      day: pe(l.string),
      hour: pe(l.string),
      minute: pe(l.string),
      second: pe(l.string)
    })
  ]),
  id: l.string,
  ariaLabelledBy: l.string,
  ariaDescribedBy: l.string,
  ariaLabel: l.string,
  min: l.instanceOf(Date),
  max: l.instanceOf(Date),
  name: l.string,
  popupSettings: l.shape({
    animate: pe(l.bool),
    appendTo: pe(l.any),
    popupClass: pe(l.string)
  }),
  show: l.bool,
  tabIndex: l.number,
  title: l.string,
  value: l.instanceOf(Date),
  weekNumber: l.bool,
  width: l.oneOfType([l.number, l.string]),
  validationMessage: l.string,
  required: l.bool,
  valid: l.bool,
  size: l.oneOf([null, "small", "medium", "large"]),
  rounded: l.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: l.oneOf([null, "solid", "flat", "outline"]),
  adaptive: l.bool,
  adaptiveTitle: l.string,
  adaptiveSubtitle: l.string,
  autoFocus: l.bool,
  inputAttributes: l.object
};
const at = {
  defaultShow: !1,
  defaultValue: null,
  dateInput: $n,
  calendar: _l,
  toggleButton: PE,
  popup: An,
  disabled: !1,
  format: "d",
  max: Rn,
  min: Pn,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  validityStyles: !0,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: !1
}, ES = Qn();
Ql.displayName = "KendoReactDatePicker";
const Ki = Object.freeze({
  name: "@progress/kendo-react-dateinputs",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1765978973,
  version: "13.2.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
});
const Qo = (t, e) => {
  const n = F(t);
  return n.setHours(e), n;
}, Xo = (t) => t !== null && t < 12, SS = (t) => t !== null && (!t || t > 11), kS = (t, e, n) => !e && !n || t >= e && t <= n, DS = (t, e, n) => !e && !n || t >= e || t <= n;
let CS = class {
  constructor(e) {
    this.intl = e, this.min = null, this.max = null, this.part = null;
  }
  /**
   * @hidden
   */
  apply(e, n) {
    const i = e.getHours(), r = Xo(i), s = Xo(n.getHours());
    if (r && s || !r && !s)
      return e;
    const [o, a = 24] = this.normalizedRange(), u = i + (s ? -12 : 12);
    return Qo(e, Math.min(Math.max(o, u), a || 24));
  }
  /**
   * @hidden
   */
  configure(e) {
    const { min: n = this.min, max: i = this.max, part: r = this.part } = e;
    this.min = n, this.max = i, this.part = r;
  }
  /**
   * @hidden
   */
  data(e) {
    const n = this.part && this.part.names;
    if (!n || !this.min)
      return [];
    const i = [], [r, s] = this.normalizedRange(), o = this.intl.dateFormatNames(n);
    return Xo(r) && i.push({ text: o.am, value: Qo(this.min, r) }), SS(s) && i.push({ text: o.pm, value: Qo(this.min, Math.max(12, s)) }), this.min.getHours() !== r ? i.reverse() : i;
  }
  /**
   * @hidden
   */
  isRangeChanged(e, n) {
    return !1;
  }
  /**
   * @hidden
   */
  limitRange(e, n, i) {
    return [e, n];
  }
  /**
   * @hidden
   */
  total() {
    const [e, n] = this.normalizedRange();
    return !e && !n ? 2 : e > 11 || n < 12 ? 1 : 2;
  }
  /**
   * @hidden
   */
  selectedIndex(e) {
    if (!this.valueInList(e) || !this.min)
      return -1;
    const n = Math.floor(e.getHours() / 12);
    return this.min.getHours() === this.normalizedRange()[0] ? n : n === 0 ? 1 : 0;
  }
  /**
   * @hidden
   */
  valueInList(e) {
    return !this.min || !this.max ? !1 : (this.min.getHours() !== this.normalizedRange()[0] ? DS : kS)(e.getHours(), this.min.getHours(), this.max.getHours());
  }
  normalizedRange() {
    const e = this.min.getHours(), n = this.max.getHours();
    return [Math.min(e, n), Math.max(e, n)];
  }
};
let IS = class {
  constructor() {
    this.itemHeight = 0, this.timeListHeight = 0, this.didCalculate = !1;
  }
  ensureHeights() {
    this.timeListHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(e, n) {
    if (!Dt)
      return;
    const i = n && n.uTime, r = Ht("div"), s = Ht("span"), o = Ht("ul"), a = Ht("li"), u = () => a("<span>02</span>", Pe(Ne.li({ c: i }))), d = () => o([u()], Pe(Ne.ul({ c: i }))), f = () => r(
      [d()],
      Pe(
        Ne.containerSelector({ c: i }),
        Ne.container({ c: i, content: !0, scrollable: !0 })
      )
    ), y = r(
      [
        s("minute", Pe(Ne.title({ c: i }))),
        r([f()], Pe(Ne.list({ c: i })))
      ],
      Pe(Ne.listWrapper({ c: i })),
      { left: "-10000px", position: "absolute" }
    ), c = `.${Pe(Ne.containerSelector({ c: i }))}`, m = e && e.querySelector(c) || document.body, S = m.appendChild(y);
    this.timeListHeight = S.querySelector(c).offsetHeight, this.itemHeight = S.querySelector("li").offsetHeight, m.removeChild(S), this.didCalculate = !0;
  }
};
const Xl = 24, MS = (t) => (e) => e % t, Op = MS(Xl), OS = (t, e) => (n) => Op(t + n * e), id = (t, e) => Op(Xl + t - e), Np = (t) => (e, n) => !n || Se(e).getTime() === Se(n).getTime() ? e : xs(e, t), NS = Np(0), TS = Np(Xl - 1);
let PS = class {
  constructor(e) {
    this.intl = e, this.boundRange = !1, this.insertUndividedMax = !1, this.min = null, this.max = null, this.step = 0, this.toListItem = null;
  }
  apply(e, n) {
    return xs(e, n.getHours());
  }
  configure(e) {
    const {
      boundRange: n = this.boundRange,
      insertUndividedMax: i = this.insertUndividedMax,
      min: r = this.min,
      max: s = this.max,
      part: o,
      step: a = this.step
    } = e;
    this.boundRange = n, this.insertUndividedMax = i, this.toListItem = (u) => {
      const d = xs(ft, u);
      return {
        text: this.intl.formatDate(d, o.pattern),
        value: d
      };
    }, this.min = r, this.max = s, this.step = a;
  }
  data(e) {
    const [n] = this.range(e), i = OS(n, this.step), r = (o) => this.toListItem && this.toListItem(i(o)), s = Fl(0, this.countFromMin(e)).map(r);
    return this.addLast(s), e && this.addMissing(s, e), s;
  }
  isRangeChanged(e, n) {
    return !this.min || !this.max ? !1 : !Kt(this.min, e) || !Kt(this.max, n);
  }
  limitRange(e, n, i) {
    return this.boundRange ? [NS(e, i), TS(n, i)] : [e, n];
  }
  total(e) {
    const n = this.insertUndividedMax && this.isLastMissing(e) ? 1 : 0, i = this.isMissing(e) ? 1 : 0;
    return this.countFromMin(e) + i + n;
  }
  selectedIndex(e) {
    return Math.ceil(this.divideByStep(e));
  }
  valueInList(e) {
    return e ? this.insertUndividedMax && this.lastHour(e) === e.getHours() || !this.isMissing(e) : !0;
  }
  addLast(e, n) {
    return this.insertUndividedMax && this.isLastMissing(n) && this.toListItem && e.push(this.toListItem(this.lastHour(n))), e;
  }
  addMissing(e, n) {
    if (this.valueInList(n))
      return e;
    if (this.toListItem) {
      const i = this.toListItem(n.getHours());
      e.splice(this.selectedIndex(n), 0, i);
    }
    return e;
  }
  countFromMin(e) {
    const [n, i] = this.range(e);
    return Math.floor(id(i, n) / this.step) + 1;
  }
  isMissing(e) {
    return e ? this.selectedIndex(e) !== this.divideByStep(e) : !1;
  }
  isLastMissing(e) {
    return this.max !== null && this.isMissing(xs(this.max, this.lastHour(e)));
  }
  divideByStep(e) {
    return id(e.getHours(), this.min.getHours()) / this.step;
  }
  lastHour(e) {
    return this.range(e)[1];
  }
  range(e) {
    const [n, i] = this.limitRange(this.min, this.max, e);
    return [n.getHours(), i.getHours()];
  }
};
const ec = 60, RS = (t) => (e) => e % t, Tp = RS(ec), AS = (t, e) => (n) => Tp(t + n * e), rd = (t, e) => Tp(ec + t - e), Pp = (t) => (e, n) => !n || e.getHours() === n.getHours() ? e : ws(e, t), _S = Pp(0), zS = Pp(ec - 1);
let jS = class {
  constructor(e) {
    this.intl = e, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = !1;
  }
  apply(e, n) {
    return ws(e, n.getMinutes());
  }
  configure(e) {
    const {
      insertUndividedMax: n = this.insertUndividedMax,
      min: i = this.min,
      max: r = this.max,
      part: s,
      step: o = this.step
    } = e;
    this.insertUndividedMax = n, this.toListItem = (a) => {
      const u = ws(ft, a);
      return {
        text: this.intl.formatDate(u, s.pattern),
        value: u
      };
    }, this.min = i, this.max = r, this.step = o;
  }
  data(e) {
    const [n] = this.range(e), i = AS(n, this.step), r = (o) => this.toListItem && this.toListItem(i(o)), s = Fl(0, this.countFromMin(e)).map(r);
    return this.addLast(s), e && this.addMissing(s, e), s;
  }
  isRangeChanged(e, n) {
    return this.min !== null && this.max !== null && (!Kt(this.min, e) || !Kt(this.max, n));
  }
  limitRange(e, n, i) {
    return [_S(e, i), zS(n, i)];
  }
  total(e) {
    const n = this.insertUndividedMax && this.isLastMissing(e) ? 1 : 0, i = this.isMissing(e) ? 1 : 0;
    return this.countFromMin(e) + i + n;
  }
  selectedIndex(e) {
    return Math.ceil(this.divideByStep(e));
  }
  valueInList(e) {
    return e ? this.insertUndividedMax && this.lastMinute(e) === e.getMinutes() || !this.isMissing(e) : !0;
  }
  addLast(e, n) {
    return this.insertUndividedMax && this.isLastMissing(n) && this.toListItem && e.push(this.toListItem(this.lastMinute(n))), e;
  }
  addMissing(e, n) {
    if (this.valueInList(n))
      return e;
    if (this.toListItem) {
      const i = this.toListItem(n.getMinutes());
      e.splice(this.selectedIndex(n), 0, i);
    }
    return e;
  }
  countFromMin(e) {
    const [n, i] = this.range(e);
    return Math.floor(rd(i, n) / this.step) + 1;
  }
  isMissing(e) {
    return e ? this.selectedIndex(e) !== this.divideByStep(e) : !1;
  }
  isLastMissing(e) {
    return this.max !== null && this.isMissing(ws(this.max, this.lastMinute(e)));
  }
  divideByStep(e) {
    return rd(e.getMinutes(), this.min.getMinutes()) / this.step;
  }
  lastMinute(e) {
    return this.range(e)[1];
  }
  range(e) {
    const [n, i] = this.limitRange(this.min, this.max, e);
    return [n.getMinutes(), i.getMinutes()];
  }
};
const tc = 60, FS = (t) => (e) => e % t, Rp = FS(tc), LS = (t, e) => (n) => Rp(t + n * e), sd = (t, e) => Rp(tc + t - e), Ap = (t) => (e, n) => !n || e.getMinutes() === n.getMinutes() && e.getHours() === n.getHours() ? e : $s(e, t), VS = Ap(0), BS = Ap(tc - 1);
class HS {
  constructor(e) {
    this.intl = e, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = !1;
  }
  apply(e, n) {
    return $s(e, n.getSeconds());
  }
  configure(e) {
    const {
      insertUndividedMax: n = this.insertUndividedMax,
      min: i = this.min,
      max: r = this.max,
      part: s,
      step: o = this.step
    } = e;
    this.insertUndividedMax = n, this.toListItem = (a) => {
      const u = $s(ft, a);
      return {
        text: this.intl.formatDate(u, s.pattern),
        value: u
      };
    }, this.min = i, this.max = r, this.step = o;
  }
  data(e) {
    const [n] = this.range(e), i = LS(n, this.step), r = (o) => this.toListItem && this.toListItem(i(o)), s = Fl(0, this.countFromMin(e)).map(r);
    return this.addLast(s), e && this.addMissing(s, e), s;
  }
  isRangeChanged(e, n) {
    return this.min !== null && this.max !== null && (!Kt(this.min, e) || !Kt(this.max, n));
  }
  limitRange(e, n, i) {
    return [VS(e, i), BS(n, i)];
  }
  total(e) {
    const n = this.insertUndividedMax && this.isLastMissing(e) ? 1 : 0, i = this.isMissing(e) ? 1 : 0;
    return this.countFromMin(e) + i + n;
  }
  selectedIndex(e) {
    return Math.ceil(this.divideByStep(e));
  }
  valueInList(e) {
    return e ? this.insertUndividedMax && this.lastSecond(e) === e.getSeconds() || !this.isMissing(e) : !0;
  }
  divideByStep(e) {
    return sd(e.getSeconds(), this.min.getSeconds()) / this.step;
  }
  addLast(e, n) {
    return this.insertUndividedMax && this.isLastMissing(n) && this.toListItem && e.push(this.toListItem(this.lastSecond(n))), e;
  }
  addMissing(e, n) {
    if (this.valueInList(n))
      return e;
    if (this.toListItem) {
      const i = this.toListItem(n.getSeconds());
      e.splice(this.selectedIndex(n), 0, i);
    }
    return e;
  }
  countFromMin(e) {
    const [n, i] = this.range(e);
    return Math.floor(sd(i, n) / this.step) + 1;
  }
  isMissing(e) {
    return e ? this.selectedIndex(e) !== this.divideByStep(e) : !1;
  }
  isLastMissing(e) {
    return this.max !== null && this.isMissing($s(this.max, this.lastSecond(e)));
  }
  lastSecond(e) {
    return this.range(e)[1];
  }
  range(e) {
    const [n, i] = this.limitRange(this.min, this.max, e);
    return [n.getSeconds(), i.getSeconds()];
  }
}
const US = 2, od = 0.05, WS = 100, ZS = 0, ad = 9, qS = {
  [U.end]: (t, e) => t[t.length - 1],
  [U.home]: (t, e) => t[0],
  [U.up]: (t, e) => t[e - 1],
  [U.down]: (t, e) => t[e + 1]
}, Qa = {
  [rn.dayperiod]: CS,
  [rn.hour]: PS,
  [rn.minute]: jS,
  [rn.second]: HS
}, Xa = class Ti extends p.Component {
  constructor(e) {
    super(e), this.intl = null, this._element = null, this.service = null, this.virtualization = null, this.topOffset = 0, this.bottomOffset = 0, this.itemHeight = 0, this.listHeight = 0, this.topThreshold = 0, this.bottomThreshold = 0, this.animateToIndex = !1, this.focus = (n) => {
      Promise.resolve().then(() => {
        this.element && this.element.focus(n);
      });
    }, this.itemOffset = (n) => {
      if (!this.virtualization || !this.service)
        return -1;
      const i = this.service.selectedIndex(this.props.value), r = this.virtualization.activeIndex(), s = this.virtualization.itemOffset(r), o = Math.abs(Math.ceil(n) - s);
      if (i === r && o < US)
        return s;
      const a = i > r;
      return a && o >= this.bottomThreshold || !a && o > this.topThreshold ? this.virtualization.itemOffset(r + 1) : s;
    }, this.calculateHeights = () => {
      this.dom.didCalculate && (this.itemHeight = this.dom.itemHeight, this.listHeight = this.dom.timeListHeight, this.topOffset = (this.listHeight - this.itemHeight) / 2, this.bottomOffset = this.listHeight - this.itemHeight, this.props.mobileMode && (this.topOffset += ad, this.bottomOffset += ad * 2), this.topThreshold = this.itemHeight * od, this.bottomThreshold = this.itemHeight * (1 - od));
    }, this.configureServices = ({ min: n, max: i, value: r } = this.props) => {
      if (this.service) {
        const [s, o] = this.service.limitRange(
          n || this.min,
          i || this.max,
          r || this.props.value
        );
        this.service.configure(this.serviceSettings({ min: s, max: o }));
      }
    }, this.serviceSettings = (n) => {
      const i = {
        boundRange: this.props.boundRange || Ti.defaultProps.boundRange,
        insertUndividedMax: !1,
        min: F(this.min),
        max: F(this.max),
        part: this.props.part,
        step: this.step
      }, r = Object.assign({}, i, n);
      return r.boundRange = r.part.type !== "hour" || this.props.boundRange || Ti.defaultProps.boundRange, r;
    }, this.handleScrollAction = ({ target: n, animationInProgress: i }) => {
      if (!(!this.virtualization || !this.service) && n && !i) {
        this.animateToIndex = !1;
        const r = this.virtualization.itemIndex(this.itemOffset(n.scrollTop)), s = this.service.data(this.props.value)[r];
        this.handleChange(s);
      }
    }, this.handleFocus = (n) => {
      const { onFocus: i } = this.props;
      i && i.call(void 0, n);
    }, this.handleBlur = (n) => {
      const { onBlur: i } = this.props;
      i && i.call(void 0, n);
    }, this.handleMouseOver = () => {
      if (!this._element)
        return;
      const n = At(document);
      document && n !== this._element && this.props.show && this._element.focus({ preventScroll: !0 });
    }, this.handleKeyDown = (n) => {
      if (!this.service)
        return;
      const { keyCode: i } = n;
      (i === U.down || i === U.up || i === U.end || i === U.home) && n.preventDefault();
      const r = (qS[n.keyCode] || Vn)(this.service.data(this.props.value), this.service.selectedIndex(this.props.value));
      r && this.handleChange(r);
    }, this.handleChange = c0((n) => {
      if (!this.service)
        return;
      const i = this.service.apply(this.props.value, n.value);
      if (this.props.value.getTime() === i.getTime())
        return;
      const { onChange: r } = this.props;
      r && r.call(void 0, i);
    }, WS), this.dom = new IS();
  }
  get element() {
    return this._element;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get min() {
    return this.props.min || Ti.defaultProps.min;
  }
  get max() {
    return this.props.max || Ti.defaultProps.max;
  }
  get step() {
    return this.props.step !== void 0 && this.props.step !== 0 ? Math.floor(this.props.step) : Ti.defaultProps.step;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    Promise.resolve().then(() => {
      const { unstyled: e } = this.props;
      this._element && (this.dom.calculateHeights(this._element, e), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    if (!this.virtualization || !this.service)
      return;
    const e = this.service.selectedIndex(this.props.value);
    if (this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](e), this.animateToIndex = !0, !this.topOffset && this._element) {
      const { unstyled: n } = this.props;
      this.dom.calculateHeights(this._element, n);
    }
  }
  /**
   * @hidden
   */
  render() {
    const { part: e, value: n, unstyled: i } = this.props;
    if (!e.type || !Qa[e.type])
      return;
    const r = i && i.uTime;
    this.calculateHeights(), this.intl = mi(this), this.service = new Qa[e.type](this.intl), this.configureServices();
    const s = this.service.data(n), o = "translateY(" + this.topOffset + "px)", a = this.service.total(n), u = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
      "ul",
      {
        style: { transform: o, msTransform: o },
        className: N(Ne.ul({ c: r }))
      },
      s.map((d, f) => /* @__PURE__ */ p.createElement(
        "li",
        {
          key: f,
          className: N(Ne.li({ c: r })),
          onClick: () => {
            this.handleChange(d);
          }
        },
        /* @__PURE__ */ p.createElement("span", null, d.text)
      ))
    ), /* @__PURE__ */ p.createElement("div", { className: N(Ne.scrollablePlaceholder({ c: r })) }));
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        className: N(Ne.list({ c: r })),
        id: String(this.props.id || ""),
        tabIndex: this.props.disabled ? -1 : 0,
        ref: (d) => {
          this._element = d;
        },
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseOver: this.handleMouseOver
      },
      this.dom.didCalculate ? /* @__PURE__ */ p.createElement(
        Ml,
        {
          bottomOffset: this.bottomOffset,
          children: u,
          className: N(
            Ne.containerSelector({ c: r }),
            Ne.container({ c: r })
          ),
          itemHeight: this.itemHeight,
          maxScrollDifference: this.listHeight,
          onScrollAction: this.handleScrollAction,
          ref: (d) => {
            this.virtualization = d;
          },
          role: "presentation",
          skip: ZS,
          tabIndex: -1,
          take: a,
          topOffset: this.topOffset,
          total: a,
          unstyled: i
        }
      ) : /* @__PURE__ */ p.createElement(
        "div",
        {
          className: N(
            Ne.containerSelector({ c: r }),
            Ne.container({ c: r, content: !0, scrollable: !0 })
          )
        },
        u
      )
    );
  }
};
Xa.propTypes = {
  id: l.number,
  max: l.instanceOf(Date),
  min: l.instanceOf(Date),
  part: function(t, e, n) {
    const i = t[e];
    if (!i || !Qa[i.type])
      throw new Error(`
                    Invalid prop '${e}' supplied to ${n}.
                    Supported part types are hour|minute|second|dayperiod.
                `);
    return null;
  },
  step: function(t, e, n) {
    const i = t[e];
    if (i !== void 0 && i <= 0)
      throw new Error(`
                    Invalid prop '${e}' supplied to ${n}.
                    ${e} cannot be less than 1.
                `);
    return null;
  },
  value: l.instanceOf(Date),
  smoothScroll: l.bool,
  show: l.bool
}, Xa.defaultProps = {
  boundRange: !1,
  max: vi,
  min: ft,
  step: 1,
  smoothScroll: !0
};
let _p = Xa;
fi(_p);
const ld = new RegExp(
  `${rn.hour}|${rn.minute}|${rn.second}|${rn.dayperiod}|literal`
), el = class ii extends p.Component {
  constructor(e) {
    super(e), this._element = null, this._nowButton = null, this.dateFormatParts = [], this.timeLists = [], this.focus = (n, i) => {
      Promise.resolve().then(() => {
        i && this._nowButton && this._nowButton.element && this._nowButton.element.focus();
        const r = this.timeLists[0];
        !i && this.state.activeListIndex === -1 && !this.hasActiveButton() && r && r.element && r.focus(n);
      });
    }, this.timeFormatReducer = (n, i) => n + i.pattern, this.timeFormatFilter = (n, i, r) => {
      const s = i >= 1 && r[i - 1];
      return s && s && n.type === "literal" ? ld.test(s.type || "") : ld.test(n.type || "");
    }, this.focusList = (n) => {
      this.timeLists.length && this.timeLists.reduce(this.listReducer, []).map((i) => n === 1 ? i.next : i.prev).map((i) => i && i.element && i.element.focus({ preventScroll: !0 }));
    }, this.listReducer = (n, i, r, s) => n.length || i.props.id !== this.state.activeListIndex ? n : [
      {
        next: s[r + 1] || i,
        prev: s[r - 1] || i
      }
    ], this.showNowButton = () => !this.hasSteps() && this.props.nowButton && Vl(Wi(), this.min, this.max), this.handleKeyDown = (n) => {
      const { keyCode: i } = n;
      switch (i) {
        case U.left:
          n.preventDefault(), this.focusList(
            0
            /* Left */
          );
          return;
        case U.right:
          n.preventDefault(), this.focusList(
            1
            /* Right */
          );
          return;
        default:
          return;
      }
    }, this.handleListBlur = () => {
      this.nextTick(() => {
        this.setState({ activeListIndex: -1 });
      });
    }, this.handleListFocus = (n) => {
      clearTimeout(this.nextTickId), this.setState({
        activeListIndex: n
      });
    }, this.handleChange = (n) => {
      const { onChange: i } = this.props;
      i && i.call(void 0, n);
    }, this.snapTime = Hu(Bu(this.props.steps, this.props.min || ii.defaultProps.min)), this.state = {
      activeListIndex: -1
    }, this.hasActiveButton = this.hasActiveButton.bind(this);
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  get value() {
    return DE(this.snapTime(F(this.props.value || ft)), this.min, this.max);
  }
  get intl() {
    return mi(this);
  }
  get min() {
    return this.snapTime(this.props.min || ii.defaultProps.min);
  }
  get max() {
    return this.snapTime(this.props.max || ii.defaultProps.max);
  }
  get steps() {
    return this.props.steps || ii.defaultProps.steps;
  }
  get boundRange() {
    return this.props.boundRange !== void 0 ? this.props.boundRange : ii.defaultProps.boundRange;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.nextTickId);
  }
  componentDidMount() {
    const { onMount: e } = this.props;
    e && e.call(void 0, this.value);
  }
  /**
   * @hidden
   */
  render() {
    const { format: e, smoothScroll: n, onNowClick: i, className: r, disabled: s, mobileMode: o, show: a, onNowKeyDown: u, unstyled: d } = this.props, f = d && d.uTime;
    this.snapTime = Hu(Bu(this.steps, this.min)), this.dateFormatParts = this.intl.splitDateFormat(e || ii.defaultProps.format).filter(this.timeFormatFilter);
    const y = N(
      Ne.part({
        c: f,
        mobileMode: o,
        disabled: s
      }),
      r
    );
    this.timeLists = [];
    const c = Rt(this), m = c.toLanguageString(Ma, Ce[Ma]);
    return /* @__PURE__ */ p.createElement("div", { className: y }, /* @__PURE__ */ p.createElement("div", { className: N(Ne.header({ c: f })) }, /* @__PURE__ */ p.createElement("span", { className: N(Ne.title({ c: f })) }, this.intl.formatDate(this.value, this.dateFormatParts.reduce(this.timeFormatReducer, ""))), this.showNowButton() && /* @__PURE__ */ p.createElement(
      Be,
      {
        type: "button",
        ref: (S) => {
          this._nowButton = S;
        },
        className: N(Ne.now({ c: f })),
        fillMode: "flat",
        themeColor: "base",
        title: m,
        onKeyDown: u,
        "aria-label": m,
        onClick: i,
        tabIndex: s ? -1 : 0
      },
      c.toLanguageString(Ia, Ce[Ia])
    )), /* @__PURE__ */ p.createElement("div", { className: N(Ne.listContainer({ c: f })), onKeyDown: this.handleKeyDown }, /* @__PURE__ */ p.createElement("span", { className: N(Ne.highlight({ c: f })) }), this.dateFormatParts.map((S, k) => S.type !== "literal" ? /* @__PURE__ */ p.createElement(
      "div",
      {
        key: k,
        className: N(
          Ne.listWrapper({
            c: f,
            focused: k === this.state.activeListIndex
          })
        ),
        role: "presentation",
        tabIndex: -1
      },
      /* @__PURE__ */ p.createElement(
        "span",
        {
          className: N(Ne.title({ c: f })),
          onMouseDown: (C) => {
            C.preventDefault();
          }
        },
        this.intl.dateFieldName(S)
      ),
      /* @__PURE__ */ p.createElement(
        _p,
        {
          min: this.min,
          max: this.max,
          boundRange: this.boundRange,
          part: S,
          step: S.type ? this.steps[S.type] : 1,
          smoothScroll: n,
          ref: (C) => {
            C && this.timeLists.push(C);
          },
          id: k,
          onFocus: () => {
            this.handleListFocus(k);
          },
          onBlur: this.handleListBlur,
          onChange: this.handleChange,
          value: this.value,
          disabled: s,
          show: a,
          mobileMode: o,
          unstyled: d
        }
      )
    ) : /* @__PURE__ */ p.createElement("div", { key: k, className: N(Ne.separator({ c: f })) }, S.pattern))));
  }
  nextTick(e) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => e());
  }
  hasActiveButton() {
    const e = At(document);
    return this._nowButton && e === this._nowButton.element;
  }
  hasSteps() {
    const e = Object.keys(this.steps);
    return e.length !== e.reduce((n, i) => n + this.steps[i], 0);
  }
};
el.propTypes = {
  cancelButton: l.bool,
  disabled: l.bool,
  format: l.oneOfType([
    l.string,
    l.shape({
      skeleton: l.string,
      pattern: l.string,
      date: l.oneOf(["short", "medium", "long", "full"]),
      time: l.oneOf(["short", "medium", "long", "full"]),
      datetime: l.oneOf(["short", "medium", "long", "full"]),
      era: l.oneOf(["narrow", "short", "long"]),
      year: l.oneOf(["numeric", "2-digit"]),
      month: l.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: l.oneOf(["numeric", "2-digit"]),
      weekday: l.oneOf(["narrow", "short", "long"]),
      hour: l.oneOf(["numeric", "2-digit"]),
      hour12: l.bool,
      minute: l.oneOf(["numeric", "2-digit"]),
      second: l.oneOf(["numeric", "2-digit"]),
      timeZoneName: l.oneOf(["short", "long"])
    })
  ]),
  max: l.instanceOf(Date),
  min: l.instanceOf(Date),
  nowButton: l.bool,
  steps: l.shape({
    hour: l.number,
    minute: l.number,
    second: l.number
  }),
  smoothScroll: l.bool,
  tabIndex: l.number,
  value: l.instanceOf(Date),
  show: l.bool
}, el.defaultProps = {
  value: null,
  disabled: !1,
  nowButton: !0,
  cancelButton: !0,
  format: "hh:mm a",
  min: nr,
  max: vi,
  steps: {},
  boundRange: !1
};
let ao = el;
fi(ao);
Tn(ao);
const tl = class nl extends p.Component {
  constructor(e) {
    super(e), this._element = null, this._cancelButton = null, this._acceptButton = null, this.timePart = null, this.focusActiveList = () => {
      this.timePart && this.timePart.focus({ preventScroll: !0 });
    }, this.handleKeyDown = (n) => {
      const { keyCode: i } = n;
      if (i === U.enter) {
        this.hasActiveButton() || this.handleAccept(n);
        return;
      } else
        return;
    }, this.revertToNowButton = (n) => {
      const { keyCode: i, shiftKey: r } = n;
      !r && i === U.tab && (n.preventDefault(), this.props.nowButton !== !1 ? this.timePart && this.timePart.focus({ preventScroll: !0 }, !0) : this.timePart && this.timePart.focus({ preventScroll: !0 }));
    }, this.handleNowKeyDown = (n) => {
      var i;
      const { keyCode: r, shiftKey: s } = n;
      s && r === U.tab ? (n.preventDefault(), this._acceptButton && ((i = this._acceptButton.element) == null || i.focus({ preventScroll: !0 }))) : r === U.enter && (n.stopPropagation(), this.handleNowClick(n));
    }, this.handleAccept = (n) => {
      const i = this.mergeValue(
        F(this.value || Wi()),
        this.timePart ? this.timePart.value : this.current
      );
      this.setState({ value: i }), this.valueDuringOnChange = i;
      const { onChange: r } = this.props;
      r && r.call(void 0, {
        syntheticEvent: n,
        nativeEvent: n.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleReject = (n) => {
      this.setState({ current: this.value });
      const { onReject: i } = this.props;
      i && i.call(void 0, n);
    }, this.handleNowClick = (n) => {
      const i = this.mergeValue(F(this.value || Wi()), Wi());
      this.setState({
        current: i,
        value: i
      }), this.valueDuringOnChange = i;
      const { onChange: r } = this.props;
      r && r.call(void 0, {
        syntheticEvent: n,
        nativeEvent: n.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleChange = (n) => {
      this.setState({ current: n });
      const { handleTimeChange: i } = this.props;
      i && i.call(void 0, {
        time: n
      });
    }, this.dateFormatParts = this.intl.splitDateFormat(this.props.format || nl.defaultProps.format), this.mergeValue = kE(SE(this.dateFormatParts)), this.hasActiveButton = this.hasActiveButton.bind(this), this.state = {
      current: this.props.value || ft,
      value: this.props.value || nl.defaultProps.value
    };
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  get value() {
    const e = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return e !== null ? F(e) : null;
  }
  get intl() {
    return mi(this);
  }
  get current() {
    return this.state.current !== null ? F(this.state.current) : null;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.nextTickId);
  }
  /**
   * @hidden
   */
  render() {
    const {
      format: e,
      cancelButton: n,
      disabled: i,
      tabIndex: r,
      className: s,
      smoothScroll: o,
      min: a,
      max: u,
      boundRange: d,
      nowButton: f,
      steps: y,
      show: c,
      mobileMode: m,
      unstyled: S
    } = this.props, k = S && S.uTimePicker, C = S && S.uTime, h = Rt(this), b = h.toLanguageString(Fs, Ce[Fs]), w = h.toLanguageString(Mr, Ce[Mr]);
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        ref: (E) => {
          this._element = E;
        },
        tabIndex: i ? void 0 : r || 0,
        className: N(
          ls.timeSelector({
            c: k,
            mobileMode: m,
            disabled: i
          }),
          s
        ),
        onKeyDown: this.handleKeyDown
      },
      /* @__PURE__ */ p.createElement(
        ao,
        {
          ref: (E) => {
            this.timePart = E;
          },
          value: this.current,
          onChange: this.handleChange,
          onNowClick: this.handleNowClick,
          format: e,
          smoothScroll: o,
          min: a,
          max: u,
          boundRange: d,
          disabled: i,
          nowButton: f,
          steps: y,
          show: c,
          mobileMode: m,
          onNowKeyDown: this.handleNowKeyDown,
          unstyled: S
        }
      ),
      this.props.footer && /* @__PURE__ */ p.createElement("div", { className: N(Ne.footer({ c: C })) }, n && /* @__PURE__ */ p.createElement(
        Be,
        {
          type: "button",
          ref: (E) => {
            this._cancelButton = E;
          },
          className: N(Ne.cancel({ c: C })),
          onClick: this.handleReject,
          title: b,
          "aria-label": b
        },
        b
      ), /* @__PURE__ */ p.createElement(
        Be,
        {
          type: "button",
          ref: (E) => {
            this._acceptButton = E;
          },
          className: N(Ne.accept({ c: C })),
          themeColor: "primary",
          onClick: this.handleAccept,
          onKeyDown: this.revertToNowButton,
          title: w,
          "aria-label": w
        },
        w
      ))
    );
  }
  nextTick(e) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => e());
  }
  hasActiveButton() {
    if (!this._acceptButton || !this._acceptButton.element)
      return !1;
    const e = At(document);
    return this._acceptButton && e === this._acceptButton.element || this._cancelButton && e === this._cancelButton.element;
  }
};
tl.propTypes = {
  cancelButton: l.bool,
  className: l.string,
  disabled: l.bool,
  format: l.oneOfType([
    l.string,
    l.shape({
      skeleton: l.string,
      pattern: l.string,
      date: l.oneOf(["short", "medium", "long", "full"]),
      time: l.oneOf(["short", "medium", "long", "full"]),
      datetime: l.oneOf(["short", "medium", "long", "full"]),
      era: l.oneOf(["narrow", "short", "long"]),
      year: l.oneOf(["numeric", "2-digit"]),
      month: l.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: l.oneOf(["numeric", "2-digit"]),
      weekday: l.oneOf(["narrow", "short", "long"]),
      hour: l.oneOf(["numeric", "2-digit"]),
      hour12: l.bool,
      minute: l.oneOf(["numeric", "2-digit"]),
      second: l.oneOf(["numeric", "2-digit"]),
      timeZoneName: l.oneOf(["short", "long"])
    })
  ]),
  max: l.instanceOf(Date),
  min: l.instanceOf(Date),
  nowButton: l.bool,
  steps: l.shape({
    hour: l.number,
    minute: l.number,
    second: l.number
  }),
  smoothScroll: l.bool,
  tabIndex: l.number,
  value: l.instanceOf(Date),
  show: l.bool
}, tl.defaultProps = {
  value: null,
  disabled: !1,
  cancelButton: !0,
  format: "t",
  min: nr,
  max: vi,
  boundRange: !1,
  footer: !0
};
let nc = tl;
fi(nc);
Tn(nc);
const Es = class un extends p.Component {
  constructor(e) {
    super(e), this._element = null, this._dateInput = p.createRef(), this._timeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.showLicenseWatermark = !1, this.focus = () => {
      this.dateInput && this.dateInput.focus();
    }, this.renderTimeSelector = () => {
      const { smoothScroll: n, cancelButton: i, nowButton: r, disabled: s, format: o, steps: a, unstyled: u } = this.props;
      return /* @__PURE__ */ p.createElement(
        nc,
        {
          ref: this.setTimeSelectorRef,
          mobileMode: this.mobileMode,
          show: this.show,
          cancelButton: i,
          disabled: s,
          nowButton: r,
          format: o,
          min: this.min,
          max: this.max,
          steps: a,
          smoothScroll: n,
          value: this.value,
          footer: !this.mobileMode,
          handleTimeChange: this.mobileMode && this.handleTimeChange,
          onChange: this.handleValueChange,
          onReject: this.handleValueReject,
          unstyled: u
        }
      );
    }, this.renderPopup = () => {
      const { popupClass: n, ...i } = this.popupSettings, { unstyled: r } = this.props, s = r && r.uTimePicker, o = N(n), a = {
        popupClass: ls.popup({ c: s }),
        show: this.show,
        animate: this.element !== null,
        anchor: this.element,
        className: o,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...i
      };
      return this.props.popup ? /* @__PURE__ */ p.createElement(this.props.popup, { ...a }, this.renderTimeSelector()) : /* @__PURE__ */ p.createElement(An, { ...a }, this.renderTimeSelector());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: n = 0 } = this.state, i = {
        expand: this.show,
        onClose: this.handleBlur,
        title: this.props.adaptiveTitle || this.props.label,
        subTitle: this.props.adaptiveSubtitle,
        windowWidth: n,
        footer: {
          cancelText: this.localizationService.toLanguageString(hs, Ce[Fs]),
          onCancel: this.handleValueReject,
          applyText: this.localizationService.toLanguageString(Mr, Ce[Mr]),
          onApply: (r) => this.handleValueChange(r)
        }
      };
      return /* @__PURE__ */ p.createElement(oo, { ...i }, /* @__PURE__ */ p.createElement(gi, null, this.renderTimeSelector()));
    }, this.setTimeSelectorRef = (n) => {
      this._timeSelector = n;
    }, this.nextValue = (n, i) => n.value !== void 0 ? n.value : i.value, this.nextShow = (n, i) => n.show !== void 0 ? n.show : i.show, this.handleInputValueChange = (n) => {
      const i = this.mergeTime(n.value);
      this.handleValueChange({ ...n, value: i });
    }, this.handleTimeChange = (n) => {
      this.setState({ candidate: n.time });
    }, this.handleValueChange = (n) => {
      this.setState({
        value: F(n.value || this.state.candidate)
      }), this.valueDuringOnChange = n.value, this.showDuringOnChange = !1, this.shouldFocusDateInput = !0;
      const { onChange: i } = this.props, r = this.state.candidate || this.value;
      i && i.call(void 0, {
        syntheticEvent: n.syntheticEvent,
        nativeEvent: n.nativeEvent,
        value: r,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(!1);
    }, this.handleFocus = () => {
      this.setState({ focused: !0 });
    }, this.handleBlur = () => {
      this.setState({ focused: !1 }), this.setShow(!1);
    }, this.handleValueReject = (n) => {
      this.setShow(!1);
    }, this.handleClick = (n) => {
      this.props.disabled || (this.shouldFocusDateInput = !0, this.setShow(!this.show));
    }, this.handleIconMouseDown = (n) => {
      n.preventDefault();
    }, this.handleKeyDown = (n) => {
      const { altKey: i, keyCode: r } = n;
      if (r === U.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      i && (r === U.up || r === U.down) && (n.preventDefault(), n.stopPropagation(), this.shouldFocusDateInput = r === U.up, this.setShow(r === U.down));
    }, this.showLicenseWatermark = !Pr(Ki, { component: "TimePicker" }), this.licenseMessage = Rr(Ki), this.state = {
      value: this.props.defaultValue || un.defaultProps.defaultValue,
      show: this.props.defaultShow || un.defaultProps.defaultShow,
      focused: !1,
      candidate: null
    }, this.normalizeTime = this.normalizeTime.bind(this), this.setShow = this.setShow.bind(this), this.mergeTime = this.mergeTime.bind(this);
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (Dt)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the TimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the TimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the TimeSelector component inside the TimePicker component.
   */
  get timeSelector() {
    return this._timeSelector;
  }
  /**
   * Gets the value of the TimePicker.
   */
  get value() {
    const e = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return e !== null ? F(e) : null;
  }
  /**
   * Gets the popup state of the TimeSelector.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the TimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the TimePicker is set.
   */
  get validity() {
    const e = this.value && this.normalizeTime(this.value), n = this.normalizeTime(this.min), i = this.normalizeTime(this.max), r = CE(e, n, i), s = this.props.validationMessage !== void 0, o = (!this.required || this.value !== null) && r, a = this.props.valid !== void 0 ? this.props.valid : o;
    return {
      customError: s,
      rangeOverflow: ME(e, i),
      rangeUnderflow: IE(e, n),
      valid: a,
      valueMissing: this.value === null
    };
  }
  /**
   * Returns a boolean value indicating whether the TimePicker is in mobile mode.
   */
  get mobileMode() {
    var e;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((e = this.props._adaptiveMode) == null ? void 0 : e.medium) && this.props.adaptive);
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : un.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : !1;
  }
  get popupSettings() {
    return this.props.popupSettings || un.defaultProps.popupSettings;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : un.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : un.defaultProps.max;
  }
  get dateInputComp() {
    return this.props.dateInput || un.defaultProps.dateInput;
  }
  get localizationService() {
    return Rt(this);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var e;
    this.observerResize = Dt && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (e = this.document) != null && e.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this._timeSelector && this.show && !this.prevShow && this._timeSelector.focusActiveList(), this.mobileMode && this.show && !this.prevShow && setTimeout(() => {
      this._timeSelector && this._timeSelector.focusActiveList();
    }, 300), this.dateInput && this.dateInput.element && !this.show && this.shouldFocusDateInput && this.dateInput.element.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var e;
    (e = this.document) != null && e.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: e = un.defaultProps.size,
      rounded: n = un.defaultProps.rounded,
      fillMode: i = un.defaultProps.fillMode,
      disabled: r,
      tabIndex: s,
      title: o,
      id: a,
      className: u,
      format: d,
      formatPlaceholder: f,
      width: y,
      name: c,
      steps: m,
      validationMessage: S,
      required: k,
      validityStyles: C,
      ariaLabelledBy: h,
      ariaDescribedBy: b,
      unstyled: w,
      enableMouseWheel: E,
      autoCorrectParts: $,
      autoSwitchParts: D,
      autoSwitchKeys: T,
      allowCaretMode: O,
      inputAttributes: A
    } = this.props, L = w && w.uTimePicker, B = !this.validityStyles || this.validity.valid, X = {
      disabled: r,
      format: d,
      formatPlaceholder: f,
      id: a,
      ariaLabelledBy: h,
      ariaDescribedBy: b,
      max: this.normalizeTime(this.max),
      min: this.normalizeTime(this.min),
      name: c,
      onChange: this.handleInputValueChange,
      required: k,
      steps: m,
      tabIndex: this.show ? -1 : s,
      title: o,
      valid: this.validity.valid,
      validationMessage: S,
      validityStyles: C,
      value: this.value && this.normalizeTime(this.value),
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaHasPopup: "dialog",
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null,
      enableMouseWheel: E,
      autoCorrectParts: $,
      autoSwitchParts: D,
      autoSwitchKeys: T,
      allowCaretMode: O,
      inputAttributes: A
    }, z = this.localizationService.toLanguageString(hs, Ce[hs]), Q = this.localizationService.toLanguageString(
      Oa,
      Ce[Oa]
    ), H = /* @__PURE__ */ p.createElement(
      vl,
      {
        onFocus: this.handleFocus,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        onSyncBlur: this.props.onBlur,
        onSyncFocus: this.props.onFocus
      },
      ({ onFocus: V, onBlur: re }) => /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
        "span",
        {
          ref: (P) => {
            this._element = P;
          },
          className: N(
            ls.wrapper({
              c: L,
              size: e,
              rounded: n,
              fillMode: i,
              invalid: !B,
              required: this.required,
              disabled: r
            }),
            u
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: y },
          onFocus: this.mobileMode ? this.handleClick : V,
          onBlur: re,
          onClick: this.mobileMode ? this.handleClick : void 0
        },
        /* @__PURE__ */ p.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            ...X
          }
        ),
        /* @__PURE__ */ p.createElement(
          Be,
          {
            tabIndex: -1,
            type: "button",
            icon: "clock",
            svgIcon: Gy,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleClick,
            title: Q,
            className: N(ls.inputButton({ c: L })),
            rounded: null,
            fillMode: i,
            "aria-label": z
          }
        ),
        !this.mobileMode && this.renderPopup()
      ), this.mobileMode && this.renderAdaptivePopup(), this.showLicenseWatermark && /* @__PURE__ */ p.createElement(Ar, { message: this.licenseMessage }))
    );
    return this.props.label ? /* @__PURE__ */ p.createElement(
      Bl,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: a,
        editorValid: B,
        editorDisabled: this.props.disabled,
        children: H,
        style: { width: this.props.width }
      }
    ) : H;
  }
  normalizeTime(e) {
    return Ct(ft, e);
  }
  setShow(e) {
    const { onOpen: n, onClose: i } = this.props;
    this.show !== e && (this.setState({ show: e }), e && n && n.call(void 0, {
      target: this
    }), !e && i && i.call(void 0, {
      target: this
    }));
  }
  mergeTime(e) {
    return this.value && e ? Ct(this.value, e) : e;
  }
  calculateMedia(e) {
    for (const n of e)
      this.setState({ windowWidth: n.target.clientWidth });
  }
};
Es.displayName = "TimePicker", Es.propTypes = {
  className: l.string,
  cancelButton: l.bool,
  nowButton: l.bool,
  defaultShow: l.bool,
  defaultValue: l.instanceOf(Date),
  disabled: l.bool,
  format: l.oneOfType([
    l.string,
    l.shape({
      skeleton: l.string,
      pattern: l.string,
      date: l.oneOf(["short", "medium", "long", "full"]),
      time: l.oneOf(["short", "medium", "long", "full"]),
      datetime: l.oneOf(["short", "medium", "long", "full"]),
      era: l.oneOf(["narrow", "short", "long"]),
      year: l.oneOf(["numeric", "2-digit"]),
      month: l.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: l.oneOf(["numeric", "2-digit"]),
      weekday: l.oneOf(["narrow", "short", "long"]),
      hour: l.oneOf(["numeric", "2-digit"]),
      hour12: l.bool,
      minute: l.oneOf(["numeric", "2-digit"]),
      second: l.oneOf(["numeric", "2-digit"]),
      timeZoneName: l.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: l.oneOfType([
    l.oneOf([
      "wide",
      "narrow",
      "short",
      "formatPattern"
    ]),
    l.shape({
      year: l.string,
      month: l.string,
      day: l.string,
      hour: l.string,
      minute: l.string,
      second: l.string
    })
  ]),
  id: l.string,
  ariaLabelledBy: l.string,
  ariaDescribedBy: l.string,
  min: l.instanceOf(Date),
  max: l.instanceOf(Date),
  name: l.string,
  popupSettings: l.shape({
    animate: l.bool,
    appendTo: l.any,
    popupClass: l.string
  }),
  show: l.bool,
  steps: l.shape({
    hour: l.number,
    minute: l.number,
    second: l.number
  }),
  smoothScroll: l.bool,
  tabIndex: l.number,
  title: l.string,
  value: l.instanceOf(Date),
  width: l.oneOfType([l.number, l.string]),
  validationMessage: l.string,
  required: l.bool,
  validate: l.bool,
  valid: l.bool,
  size: l.oneOf([null, "small", "medium", "large"]),
  rounded: l.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: l.oneOf([null, "solid", "flat", "outline"]),
  inputAttributes: l.object
}, Es.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "t",
  max: vi,
  min: nr,
  popupSettings: {},
  tabIndex: 0,
  steps: {},
  validityStyles: !0,
  dateInput: $n,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
let zp = Es;
const YS = Qn(), jp = En(
  Qi(
    YS,
    qs(bl(zp))
  )
);
jp.displayName = "KendoReactTimePicker";
Tn(zp);
const cd = 2, Fp = class il extends p.Component {
  constructor(e) {
    super(e), this._element = null, this.isActive = !1, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const n = this._element.querySelector("td.k-focus"), i = this._element.querySelector(".k-state-pending-focus");
      n && n[0] && n[0].classList.remove("k-focus"), i && i.classList.add("k-focus"), this.isActive = !0;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const n = this._element.querySelector("td.k-focus");
      n && n.classList.remove("k-focus"), this.isActive = !1;
    }, this.rotateSelectionRange = (n) => {
      if (n.start === null || n.end === null)
        return n;
      const i = n.end < n.start;
      return {
        start: i ? n.end : n.start,
        end: i ? n.start : n.end
      };
    }, this.handleWeekCellClick = (n, i, r) => {
      const { onWeekSelect: s } = this.props;
      s && r && s.call(void 0, n, i, r);
    }, this.handleDateChange = (n, i = !1) => {
      const { onChange: r } = this.props;
      if (r) {
        const s = {
          syntheticEvent: n.syntheticEvent,
          nativeEvent: n.nativeEvent,
          value: F(n.value),
          target: this,
          isTodayClick: i
        };
        r.call(void 0, s);
      }
    };
  }
  get element() {
    return this._element;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === we.month);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : il.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : il.defaultProps.max;
  }
  componentDidUpdate() {
    this.isActive && this.focusActiveDate();
  }
  render() {
    const e = this.props.allowReverse ? this.rotateSelectionRange(this.props.selectionRange) : this.props.selectionRange, n = N("k-calendar-view k-align-items-start k-justify-content-center", {
      "k-vstack": this.props.verticalView,
      "k-hstack": !this.props.verticalView,
      "k-calendar-monthview": this.props.activeView === we.month,
      "k-calendar-yearview": this.props.activeView === we.year,
      "k-calendar-decadeview": this.props.activeView === we.decade,
      "k-calendar-centuryview": this.props.activeView === we.century
    });
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        ref: (i) => {
          this._element = i;
        },
        className: n
      },
      this.props.dates.map((i) => /* @__PURE__ */ p.createElement("table", { className: "k-calendar-table", key: i.getTime(), role: "grid" }, /* @__PURE__ */ p.createElement(
        Ol,
        {
          bus: this.props.bus,
          weekDaysFormat: this.props.weekDaysFormat,
          service: this.props.service,
          key: i.getTime(),
          direction: "horizontal",
          activeView: this.props.activeView,
          cellUID: this.props.cellUID,
          viewDate: i,
          min: this.min,
          max: this.max,
          focusedDate: this.props.focusedDate,
          selectionRange: e,
          selectedDate: this.props.value,
          showWeekNumbers: this.weekNumber,
          onChange: this.handleDateChange,
          onWeekSelect: this.handleWeekCellClick,
          onCellEnter: this.props.onCellEnter,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          showOtherMonthDays: this.props.showOtherMonthDays,
          allowReverse: this.props.allowReverse
        }
      )))
    );
  }
};
Fp.defaultProps = {
  showWeekNumbers: !1,
  views: cd,
  take: cd,
  allowReverse: !0,
  weekDaysFormat: "short",
  min: Pn,
  max: Rn
};
let rs = Fp;
const ea = (t = di.defaultProps.min, e = di.defaultProps.max, n) => n instanceof Date && !Array.isArray(n) && dt(Se(n), t, e) ? Se(n) : null, ud = (t = di.defaultProps.min, e = di.defaultProps.max, n) => Array.isArray(n) ? n.filter((i) => dt(i, t, e)).map((i) => Se(i)) : null, dd = (t) => typeof t == "object" && !(t instanceof Date) && t !== null && !Array.isArray(t) ? t : kt, hd = (t, e, n) => t || e && e[0] || n && n.start, KS = (t, e) => t.start === null && e === null ? "start" : t.end === null ? "end" : "start", Ss = class Pi extends p.Component {
  constructor(e) {
    super(e), this.dates = [], this.selectedDate = null, this.selectedMultiple = null, this.selectedRange = kt, this._focusedDate = /* @__PURE__ */ new Date(), this.cellUID = this.props.id + "-cell-uid", this.activeRangeEnd = "start", this._element = null, this.intl = null, this.localization = null, this.service = null, this.calendarViewList = null, this.isActive = !1, this.calculateFocusFromValue = !0, this.showLicenseWatermark = !1, this.focus = () => {
      this._element && this._element.focus();
    }, this.clampRange = (d) => ({ start: d, end: null }), this.rangeWithFocused = (d, f) => ({
      start: d.start,
      end: d.end === null && d.start !== null && this.isActive ? f : d.end
    }), this.generateRange = (d, f) => {
      const { end: y, start: c } = f, m = f.start !== null && d.getTime() <= f.start.getTime();
      return !this.props.allowReverse && m ? { start: d, end: this.selectedRange.start } : this.activeRange !== "end" ? { start: d, end: y } : { start: c || this.selectedDate, end: d };
    }, this.canNavigate = (d) => {
      if (!this.service)
        return !1;
      const f = this.service.move(this.focusedDate, d);
      return this.min <= f && f <= this.max || this.service.isInSameView(f, this.min) || this.service.isInSameView(f, this.max);
    }, this.navigate = (d, f) => {
      this.calculateFocusFromValue = !1;
      const y = this.move(d, f);
      this.setState({ navigateDate: y, focusedDate: y });
    }, this.move = (d, f) => this.clampDate(this.service.move(f, d)), this.clampDate = (d) => Yt(d, this.min, this.max), this.shouldAutoCorrect = (d, f) => {
      const { end: y, start: c } = f;
      return this.activeRange !== "end" ? y !== null && d > y : c !== null && d < c;
    }, this.handleCellEnter = (d) => {
      this.props.mode === "range" && (this.calculateFocusFromValue = !1, this.setState({
        focusedDate: d
      }));
    }, this.handleMouseDown = (d) => {
      d.preventDefault();
    }, this.handleClick = (d) => {
      this._element && this._element.focus({ preventScroll: !0 });
    }, this.handleFocus = (d) => {
      if (this.isActive = !0, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: f } = this.props;
      f && f.call(void 0, d);
    }, this.handleBlur = (d) => {
      if (this.isActive = !1, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: f } = this.props;
      f && f.call(void 0, d);
    }, this.handleTodayClick = (d) => {
      this.todayIsInRange && this.handleDateChange(d);
    }, this.handlePrevButtonClick = () => {
      const d = me.PrevView;
      if (this.state.activeView > 0 && this.focusedDate.getFullYear() > this.dates[0].getFullYear())
        this.navigate(d, this.move(d, this.focusedDate));
      else {
        const f = this.isInMonth(this.focusedDate, this.dates[1]) ? this.move(d, this.focusedDate) : this.focusedDate;
        this.navigate(d, f);
      }
    }, this.handleNextButtonClick = () => {
      this.navigate(me.NextView, this.focusedDate);
    }, this.handleKeyDown = (d) => {
      const { keyCode: f, ctrlKey: y, metaKey: c } = d;
      if (f === 84) {
        const m = yt();
        this.calculateFocusFromValue = !1, this.setState({ focusedDate: m, navigateDate: m });
      }
      if ((y || c) && (f === U.left && this.handlePrevButtonClick(), f === U.right && this.handleNextButtonClick()), f === U.enter) {
        const m = {
          syntheticEvent: d,
          nativeEvent: d.nativeEvent,
          value: this.focusedDate,
          target: this
        };
        this.handleDateChange(m);
      } else {
        const m = Yt(
          this.navigation.move(
            this.focusedDate,
            this.navigation.action(d),
            this.state.activeView,
            this.service,
            d
          ),
          this.min,
          this.max
        );
        if (qn(this.focusedDate, m))
          return;
        this.dates && this.service && !this.service.isInArray(m, this.dates) && this.setState({ navigateDate: m }), this.calculateFocusFromValue = !1, this.setState({ focusedDate: m });
      }
      d.preventDefault();
    }, this.handleViewChange = ({ view: d }) => {
      this.calculateFocusFromValue = !1, this.setState((f) => ({ activeView: d, navigateDate: f.focusedDate }));
    }, this.handleWeekSelection = (d, f, y) => {
      if (this.props.mode === "single")
        return;
      const c = 0, m = 6, S = f === c ? d : _t(d, -f), k = f === m ? d : _t(d, m - f);
      let C = null;
      if (this.props.mode === "multiple") {
        C = [];
        for (let b = c; b <= m; b++)
          C.push(_t(S, b));
        this.setState({ value: C, focusedDate: d });
      }
      this.props.mode === "range" && (C = { start: S, end: k }, this.setState({ value: C, focusedDate: d }));
      const { onChange: h } = this.props;
      if (h) {
        const b = {
          syntheticEvent: y,
          nativeEvent: y.nativeEvent,
          value: C,
          target: this
        };
        h.call(void 0, b);
      }
    }, this.handleDateChange = (d) => {
      const f = F(d.value), y = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (y)
        if (d.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, d.syntheticEvent), this.setState({ focusedDate: f, navigateDate: f });
          return;
        }
      this.calculateFocusFromValue = !0;
      let c;
      switch (this.props.mode) {
        case "single":
          c = F(d.value);
          break;
        case "multiple":
          if (Array.isArray(this.selectedMultiple)) {
            const S = this.selectedMultiple.slice();
            let k = -1;
            S.forEach((C, h) => {
              qn(C, d.value) && (k = h);
            }), k !== -1 ? S.splice(k, 1) : S.push(F(d.value)), c = S.slice();
          } else
            this.selectedDate ? c = [F(this.selectedDate), F(d.value)] : c = [F(d.value)];
          break;
        case "range": {
          c = this.selectedRange.start !== null && this.selectedRange.end !== null && this.activeRange === "start" ? this.clampRange(d.value) : this.generateRange(d.value, this.selectedRange), this.activeRangeEnd = this.activeRange !== "end" ? "end" : "start";
          break;
        }
        default:
          c = F(d.value);
          break;
      }
      this.valueDuringOnChange = c, d.isTodayClick && this.setState({ navigateDate: f }), this.setState({ value: c, focusedDate: f }), this.valueDuringOnChange = c;
      const { onChange: m } = this.props;
      if (m) {
        const S = {
          syntheticEvent: d.syntheticEvent,
          nativeEvent: d.nativeEvent,
          value: c,
          target: this
        };
        m.call(void 0, S);
      }
      this.valueDuringOnChange = void 0;
    }, this.showLicenseWatermark = !Pr(Ki, { component: "MultiViewCalendar" }), this.licenseMessage = Rr(Ki);
    const n = e.value !== void 0 ? e.value : e.defaultValue || Pi.defaultProps.defaultValue, i = ea(this.min, this.max, n), r = ud(this.min, this.max, n), s = dd(n), o = hd(i, r, s), a = zs(
      we[e.defaultActiveView],
      this.bottomView,
      this.topView
    ), u = Yt(e.focusedDate || o || yt(), this.min, this.max);
    this.state = {
      value: n,
      activeView: a,
      focusedDate: u,
      navigateDate: u
    }, this.activeRangeEnd = KS(s, i), this.bus = new rp(this.handleViewChange), this.navigation = new sp(this.bus), this.calculateFocusFromValue = !1, this.lastView = a, this.lastViewsCount = this.props.views || rs.defaultProps.views;
  }
  get wrapperID() {
    return this.props.id + "-wrapper-id";
  }
  get isRtl() {
    return this.props.dir === "rtl";
  }
  /**
   * Gets the wrapping element of the MultiViewCalendar component.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the value of the MultiViewCalendar.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  /**
   * Gets the current focused date of the MultiViewCalendar.
   */
  get focusedDate() {
    return F(this._focusedDate);
  }
  get min() {
    return Se(
      this.props.min !== void 0 ? this.props.min : Pi.defaultProps.min
    );
  }
  get max() {
    return Se(
      this.props.max !== void 0 ? this.props.max : Pi.defaultProps.max
    );
  }
  get bottomView() {
    return we[this.props.bottomView !== void 0 ? this.props.bottomView : Pi.defaultProps.bottomView];
  }
  get topView() {
    return we[this.props.topView !== void 0 ? this.props.topView : Pi.defaultProps.topView];
  }
  get activeRange() {
    return this.props.activeRangeEnd !== void 0 ? this.props.activeRangeEnd : this.activeRangeEnd;
  }
  get todayIsInRange() {
    return dt(yt(), Se(this.min), Se(this.max));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.calculateFocusFromValue = !0;
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)();
    const e = ea(this.min, this.max, this.value);
    this.calculateFocusFromValue = !!(this.selectedDate && e && this.selectedDate.getTime() && e.getTime()), this.lastView = this.state.activeView, this.lastViewsCount = this.props.views || rs.defaultProps.views;
  }
  /**
   * @hidden
   */
  render() {
    this.props._ref && this.props._ref(this), this.intl = mi(this), this.localization = Rt(this), this.bus.configure(this.bottomView, this.topView);
    const e = zs(this.state.activeView, this.bottomView, this.topView);
    this.service = this.bus.service(e, this.intl), this.selectedDate = ea(this.min, this.max, this.value), this.selectedMultiple = ud(this.min, this.max, this.value), this.selectedRange = dd(this.value);
    const n = hd(this.selectedDate, this.selectedMultiple, this.selectedRange);
    this._focusedDate = Yt(
      this.calculateFocusFromValue && n !== null ? n : this.state.focusedDate,
      this.min,
      this.max
    );
    const i = N(
      "k-calendar k-calendar-range k-calendar-md",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), r = this.rangeWithFocused(this.selectedRange, this.focusedDate), s = this.localization.toLanguageString(xa, Ce[xa]), o = this.localization.toLanguageString(wa, Ce[wa]), a = !this.canNavigate(me.PrevView), u = !this.canNavigate(me.NextView), d = { "aria-disabled": a }, f = { "aria-disabled": u }, y = this.lastView !== e, c = this.dates && this.isInMonth(this.state.navigateDate, this.dates[0]), m = this.lastViewsCount !== this.props.views;
    (!c || y || m) && (this.dates = this.service.datesList(
      this.state.navigateDate,
      this.props.views || rs.defaultProps.views
    ));
    const S = F(this.dates && this.dates[0] ? this.dates[0] : yt());
    return /* @__PURE__ */ p.createElement(
      "div",
      {
        ref: (k) => {
          this._element = k;
        },
        className: i,
        id: this.props.id || this.wrapperID,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: this.props.disabled ? void 0 : this.props.tabIndex,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        "aria-disabled": this.props.disabled,
        dir: this.props.dir
      },
      /* @__PURE__ */ p.createElement(
        Rl,
        {
          key: `.kendo.calendar.header.${S.getTime()}`,
          activeView: e,
          currentDate: S,
          min: this.min,
          max: this.max,
          rangeLength: this.props.views,
          bus: this.bus,
          service: this.service,
          headerTitle: this.props.headerTitle,
          verticalView: this.props.mobileMode,
          commands: /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
            Be,
            {
              type: "button",
              className: "k-calendar-nav-prev",
              icon: this.isRtl ? "chevron-right" : "chevron-left",
              svgIcon: this.isRtl ? Xc : eu,
              fillMode: "flat",
              title: s,
              disabled: a,
              onClick: this.handlePrevButtonClick,
              ...d
            }
          ), /* @__PURE__ */ p.createElement(
            Al,
            {
              min: this.min,
              max: this.max,
              onClick: this.handleTodayClick,
              disabled: !this.todayIsInRange
            }
          ), /* @__PURE__ */ p.createElement(
            Be,
            {
              type: "button",
              className: "k-calendar-nav-next",
              icon: this.isRtl ? "chevron-left" : "chevron-right",
              svgIcon: this.isRtl ? eu : Xc,
              fillMode: "flat",
              title: o,
              disabled: u,
              onClick: this.handleNextButtonClick,
              ...f
            }
          ))
        }
      ),
      /* @__PURE__ */ p.createElement(
        rs,
        {
          ref: (k) => {
            this.calendarViewList = k;
          },
          dates: this.dates,
          activeView: e,
          focusedDate: this.focusedDate,
          weekDaysFormat: this.props.weekDaysFormat,
          min: this.min,
          max: this.max,
          bus: this.bus,
          service: this.service,
          selectionRange: r,
          value: this.selectedMultiple || this.selectedDate,
          cellUID: this.cellUID,
          views: this.props.views,
          onChange: this.handleDateChange,
          onWeekSelect: this.handleWeekSelection,
          showWeekNumbers: this.props.weekNumber,
          onCellEnter: this.handleCellEnter,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          headerTitle: this.props.headerTitle,
          verticalView: this.props.mobileMode,
          showOtherMonthDays: this.props.showOtherMonthDays,
          allowReverse: this.props.allowReverse
        }
      ),
      this.showLicenseWatermark && /* @__PURE__ */ p.createElement(Ar, { message: this.licenseMessage })
    );
  }
  // protected isListInRange = (list: Date[]): boolean => {
  //     return this.min < list[0]
  //         && this.max > list[Math.max(0, (this.props.views || MultiViewCalendarWithoutContext.defaultProps.views) - 1)];
  // };
  isInMonth(e, n) {
    return !!n && _s(n) <= e && e <= On(n);
  }
};
Ss.displayName = "MultiViewCalendar", Ss.propTypes = {
  activeRangeEnd: l.oneOf(["start", "end"]),
  allowReverse: l.bool,
  bottomView: l.oneOf(["month", "year", "decade", "century"]),
  className: l.string,
  defaultActiveView: l.oneOf(["month", "year", "decade", "century"]),
  defaultValue: l.oneOfType([
    pe(l.instanceOf(Date)),
    l.arrayOf(l.instanceOf(Date)),
    l.shape({
      start: pe(l.instanceOf(Date)),
      end: pe(l.instanceOf(Date))
    })
  ]),
  disabled: l.bool,
  focusedDate: l.instanceOf(Date),
  id: l.string,
  weekDaysFormat: l.oneOf(["narrow", "short", "abbreviated"]),
  ariaLabelledBy: l.string,
  ariaDescribedBy: l.string,
  max: l.instanceOf(Date),
  min: l.instanceOf(Date),
  mode: l.oneOf(["single", "multiple", "range"]),
  onBlur: l.func,
  onChange: l.func,
  onFocus: l.func,
  tabIndex: l.number,
  topView: l.oneOf(["month", "year", "decade", "century"]),
  value: l.oneOfType([
    pe(l.instanceOf(Date)),
    l.arrayOf(l.instanceOf(Date)),
    l.shape({
      start: pe(l.instanceOf(Date).isRequired),
      end: pe(l.instanceOf(Date).isRequired)
    })
  ]),
  views: (t, e, n) => {
    const i = t[e];
    return i !== void 0 && i < 1 ? new Error(
      `Invalid prop '${e}' supplied to'${n}'. The '${e}' property cannot be less than 1'`
    ) : null;
  },
  weekNumber: l.bool,
  showOtherMonthDays: l.bool,
  dir: l.string
}, Ss.defaultProps = {
  disabled: !1,
  min: Pn,
  max: Rn,
  navigation: !0,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  weekDaysFormat: "short",
  tabIndex: 0,
  bottomView: "month",
  views: 2,
  allowReverse: !1,
  showOtherMonthDays: !1
};
let di = Ss;
const GS = Qn(), Lp = En(
  Qi(
    GS,
    di
  )
);
Lp.displayName = "KendoReactMultiViewCalendar";
fi(di);
Tn(di);
const ks = class br extends p.Component {
  constructor(e) {
    super(e), this._element = null, this._calendar = null, this._startDateInput = p.createRef(), this._endDateInput = p.createRef(), this.shouldFocusDateInput = !1, this.shouldFocusCalendar = !1, this.showLicenseWatermark = !1, this.focus = () => {
      this.startDateInput && this.startDateInput.focus();
    }, this.setCalendarRef = (n) => {
      this._calendar = n;
    }, this.focusCalendarElement = () => {
      this._calendar && this._calendar.element && this._calendar.element.focus({ preventScroll: !0 });
    }, this.calculateValue = (n, i) => (n.value !== void 0 ? n.value : i.value) || kt, this.calculateShow = (n, i) => n.show !== void 0 ? n.show : i.show, this.renderCalendar = () => {
      const n = this.value || kt, i = {
        min: this.min,
        max: this.max,
        allowReverse: this.props.allowReverse,
        mode: "range",
        focusedDate: this.props.focusedDate,
        disabled: this.props.disabled,
        className: this.mobileMode ? "k-calendar-lg" : "",
        mobileMode: this.mobileMode,
        ...this.props.calendarSettings,
        value: n,
        dir: this.props.dir,
        onChange: this.handleCalendarChange
      };
      return this.props.calendar ? /* @__PURE__ */ p.createElement(this.props.calendar, { ...i }) : /* @__PURE__ */ p.createElement(Lp, { ...i, ref: this.setCalendarRef });
    }, this.renderPopup = () => {
      const n = {
        popupClass: N("k-calendar-container", "k-daterangepicker-popup"),
        animate: this._element !== null,
        anchor: this._element,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...this.props.popupSettings,
        show: this.show
      };
      return this.props.popup ? /* @__PURE__ */ p.createElement(this.props.popup, { ...n }, this.renderCalendar()) : /* @__PURE__ */ p.createElement(An, { ...n }, this.renderCalendar());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: n = 0 } = this.state, i = {
        expand: this.show,
        onClose: (r) => this.handleCancel(r),
        title: this.props.adaptiveTitle,
        subTitle: this.props.adaptiveSubtitle,
        windowWidth: n,
        footer: {
          cancelText: this.localizationService.toLanguageString(
            Pa,
            Ce[Pa]
          ),
          onCancel: this.handleCancel,
          applyText: this.localizationService.toLanguageString(Ra, Ce[Ra]),
          onApply: this.handleBlur
        }
      };
      return /* @__PURE__ */ p.createElement(oo, { ...i }, /* @__PURE__ */ p.createElement(gi, null, /* @__PURE__ */ p.createElement("div", { className: "k-scrollable-wrap" }, this.renderCalendar())));
    }, this.handleReverseClick = (n) => {
      const i = {
        start: this.value.end,
        end: this.value.start
      }, r = {
        syntheticEvent: n,
        nativeEvent: n.nativeEvent
      };
      this.handleChange(i, r);
    }, this.handleReverseMouseDown = (n) => {
      n.preventDefault();
    }, this.handleFocus = (n) => {
      clearTimeout(this.nextTickId), this.shouldFocusDateInput || this.mobileMode && this.setState({ currentValue: this.value });
      const { onFocus: i } = this.props;
      i && i.call(void 0, n);
    }, this.handleClick = () => {
      this.shouldFocusDateInput || this.setShow(!0);
    }, this.handleBlur = (n) => {
      this.nextTick(() => {
        this.setShow(!1);
      });
      const { onBlur: i } = this.props;
      i && i.call(void 0, n);
    }, this.handleCancel = (n) => {
      this.nextTick(() => {
        this.setShow(!1), this.setState({ currentValue: kt });
      });
      const { onCancel: i } = this.props;
      i && i.call(void 0, n);
    }, this.handleEndChange = (n) => {
      const i = {
        start: this.value.start,
        end: F(n.value || void 0)
      };
      this.handleChange(i, n);
    }, this.handleStartChange = (n) => {
      const i = {
        start: F(n.value || void 0),
        end: this.value.end
      };
      this.handleChange(i, n);
    }, this.extractRangeFromValue = (n) => {
      if (!Array.isArray(n.value) && !(n.value instanceof Date))
        return n.value || kt;
      const i = Array.isArray(n.value) ? n.value[0] : n.value;
      return {
        start: this.value.end !== null ? i : this.value.start,
        end: this.value.start !== null ? i : this.value.end
      };
    }, this.handleCalendarChange = (n) => {
      const i = this.extractRangeFromValue(n);
      this.handleChange(i, n);
    }, this.handleKeyDown = (n) => {
      const { keyCode: i, altKey: r } = n;
      i === U.esc ? (n.preventDefault(), this.shouldFocusDateInput = !0, this.setShow(!1)) : r && i === U.down ? (n.preventDefault(), this.shouldFocusCalendar = !0, this.setShow(!0), this.focusCalendarElement()) : r && i === U.up && (n.preventDefault(), this.shouldFocusDateInput = !0, this.setShow(!1));
    }, this.handleChange = (n, i) => {
      this.setState({ value: n }), this.valueDuringOnChange = n;
      const { onChange: r } = this.props;
      if (r) {
        const s = {
          syntheticEvent: i.syntheticEvent,
          nativeEvent: i.nativeEvent,
          value: this.value,
          show: this.show,
          target: this
        };
        r.call(void 0, s);
      }
      this.valueDuringOnChange = void 0;
    }, this.showLicenseWatermark = !Pr(Ki, { component: "DateRangePicker" }), this.licenseMessage = Rr(Ki), this.state = {
      show: this.props.show || this.props.defaultShow || br.defaultProps.defaultShow,
      value: this.props.value || this.props.defaultValue || br.defaultProps.defaultValue,
      currentValue: kt
    }, this.nextTick = this.nextTick.bind(this), this.setShow = this.setShow.bind(this), this.focusCalendarElement = this.focusCalendarElement.bind(this), this.focusDateInputElement = this.focusDateInputElement.bind(this);
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get _startInputId() {
    return this.props.id + "-start-input-id";
  }
  get _endInputId() {
    return this.props.id + "-end-input-id";
  }
  /**
   * Gets the wrapping element of the DateRangePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the start DateInput component inside the DatePicker component.
   */
  get startDateInput() {
    return this._startDateInput.current;
  }
  /**
   * Gets the end DateInput component inside the DatePicker component.
   */
  get endDateInput() {
    return this._endDateInput.current;
  }
  /**
   * Gets the MultiVieCalendar inside the DateRangePicker.
   */
  get calendar() {
    return this._calendar;
  }
  /**
   * Gets the value of the DateRangePicker.
   */
  get value() {
    return (this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value) || kt;
  }
  /**
   * Gets the popup state of the DateRangePicker.
   */
  /**
   * Whether the popup of the DateRangePicker is currently open.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : br.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : br.defaultProps.max;
  }
  get document() {
    if (Dt)
      return this.element && this.element.ownerDocument || document;
  }
  get localizationService() {
    return Rt(this);
  }
  /**
   * The mobile mode of the DateRangePicker.
   */
  get mobileMode() {
    var e;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((e = this.props._adaptiveMode) == null ? void 0 : e.medium) && this.props.adaptive);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var e;
    this.observerResize = Dt && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (e = this.document) != null && e.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.shouldFocusCalendar && this.focusCalendarElement(), this.mobileMode && this.show && setTimeout(() => {
      this.focusCalendarElement();
    }, 300), this.shouldFocusDateInput && this.focusDateInputElement(), this.shouldFocusCalendar = !1, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var e;
    clearTimeout(this.nextTickId), (e = this.document) != null && e.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const { autoFocus: e } = this.props, n = this.value || kt, i = this.mobileMode && this.show ? this.state.currentValue : n, r = (this.props.startDateInputSettings || {}).id || this._startInputId, s = (this.props.endDateInputSettings || {}).id || this._endInputId, o = N(
      "k-daterangepicker",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), a = this.localizationService.toLanguageString(ka, Ce[ka]), u = this.localizationService.toLanguageString(Da, Ce[Da]), d = this.localizationService.toLanguageString(Ca, Ce[Ca]), f = {
      disableSelection: this.mobileMode && !0,
      label: a,
      format: this.props.format,
      min: this.min,
      max: this.max,
      id: this._startInputId,
      disabled: this.props.disabled,
      valid: this.props.valid,
      tabIndex: this.props.tabIndex,
      ariaExpanded: this.show,
      clearButton: this.props.clearButton,
      ...this.props.startDateInputSettings,
      value: i.start,
      onChange: this.handleStartChange,
      inputAttributes: this.props.inputAttributes
    }, y = {
      disableSelection: this.mobileMode && !0,
      label: u,
      format: this.props.format,
      min: this.min,
      max: this.max,
      id: this._endInputId,
      disabled: this.props.disabled,
      valid: this.props.valid,
      tabIndex: this.props.tabIndex,
      ariaExpanded: this.show,
      clearButton: this.props.clearButton,
      ...this.props.endDateInputSettings,
      value: i.end,
      onChange: this.handleEndChange,
      inputAttributes: this.props.inputAttributes
    }, c = /* @__PURE__ */ p.createElement(
      Be,
      {
        type: "button",
        className: "k-select",
        fillMode: "flat",
        title: Rt(this).toLanguageString(fr, Ce[fr]),
        onMouseDown: this.handleReverseMouseDown,
        onClick: this.handleReverseClick,
        "aria-controls": r + " " + s,
        "aria-label": Rt(this).toLanguageString(
          fr,
          Ce[fr]
        )
      },
      /* @__PURE__ */ p.createElement(pi, { style: { transform: "rotate(90deg)" }, name: "arrows-swap", icon: Ky })
    );
    return /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
      "span",
      {
        ref: (m) => {
          this._element = m;
        },
        className: o,
        style: this.props.style,
        id: this.props.id,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: this.props.tabIndex,
        onFocus: this.mobileMode ? this.handleClick : this.handleFocus,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        dir: this.props.dir
      },
      this.props.startDateInput ? /* @__PURE__ */ p.createElement(this.props.startDateInput, { ...f }) : /* @__PURE__ */ p.createElement(
        $n,
        {
          ...f,
          autoFocus: e,
          ref: this._startDateInput,
          ariaRole: "combobox",
          ariaControls: this._popupId
        }
      ),
      (this.props.allowReverse || this.props.calendarSettings && this.props.calendarSettings.allowReverse) && this.props.swapButton ? c : d,
      this.props.endDateInput ? /* @__PURE__ */ p.createElement(this.props.endDateInput, { ...y }) : /* @__PURE__ */ p.createElement(
        $n,
        {
          ...y,
          ref: this._endDateInput,
          ariaRole: "combobox",
          ariaControls: this._popupId
        }
      ),
      !this.mobileMode && this.renderPopup()
    ), this.mobileMode && this.renderAdaptivePopup(), this.showLicenseWatermark && /* @__PURE__ */ p.createElement(Ar, { message: this.licenseMessage }));
  }
  focusDateInputElement() {
    if (!document || !this.startDateInput || !this.startDateInput.element || !this.endDateInput || !this.endDateInput.element)
      return;
    const e = At(document);
    (this.value.start === null || this.value.end !== null) && e !== this.endDateInput.element ? this.startDateInput.element.focus({ preventScroll: !0 }) : e !== this.startDateInput.element && this.endDateInput.element.focus({ preventScroll: !0 });
  }
  nextTick(e) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => e());
  }
  setShow(e) {
    const { onOpen: n, onClose: i } = this.props;
    this.show !== e && (this.setState({ show: e }), e && n && n.call(void 0, {
      target: this
    }), !e && i && i.call(void 0, {
      target: this
    }));
  }
  calculateMedia(e) {
    for (const n of e)
      this.setState({ windowWidth: n.target.clientWidth });
  }
};
ks.displayName = "DateRangePicker", ks.propTypes = {
  allowReverse: l.bool,
  calendarSettings: l.any,
  className: l.string,
  defaultShow: l.bool,
  defaultValue: l.shape({
    start: pe(l.instanceOf(Date).isRequired),
    end: pe(l.instanceOf(Date).isRequired)
  }),
  disabled: l.bool,
  endDateInputSettings: l.shape($n.propTypes),
  focusedDate: l.instanceOf(Date),
  format: l.oneOfType([
    l.string,
    l.shape({
      skeleton: l.string,
      pattern: l.string,
      date: l.oneOf(["short", "medium", "long", "full"]),
      time: l.oneOf(["short", "medium", "long", "full"]),
      datetime: l.oneOf(["short", "medium", "long", "full"]),
      era: l.oneOf(["narrow", "short", "long"]),
      year: l.oneOf(["numeric", "2-digit"]),
      month: l.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: l.oneOf(["numeric", "2-digit"]),
      weekday: l.oneOf(["narrow", "short", "long"]),
      hour: l.oneOf(["numeric", "2-digit"]),
      hour12: l.bool,
      minute: l.oneOf(["numeric", "2-digit"]),
      second: l.oneOf(["numeric", "2-digit"]),
      timeZoneName: l.oneOf(["short", "long"])
    })
  ]),
  id: l.string,
  ariaLabelledBy: l.string,
  ariaDescribedBy: l.string,
  max: l.instanceOf(Date),
  min: l.instanceOf(Date),
  onBlur: l.func,
  onChange: l.func,
  onFocus: l.func,
  popupSettings: l.any,
  show: l.bool,
  startDateInputSettings: l.any,
  style: l.any,
  swapButton: l.any,
  tabIndex: l.number,
  dir: l.string,
  value: l.shape({
    start: pe(l.instanceOf(Date)),
    end: pe(l.instanceOf(Date))
  }),
  autoFocus: l.bool,
  inputAttributes: l.object
}, ks.defaultProps = {
  allowReverse: !1,
  defaultShow: !1,
  defaultValue: kt,
  disabled: !1,
  format: "d",
  max: Rn,
  min: Pn,
  swapButton: !1,
  autoFocus: !1
};
let Vp = ks;
const JS = Qn(), Bp = En(
  Qi(
    JS,
    bl(Vp)
  )
);
Bp.displayName = "KendoReactDateRangePicker";
Tn(Vp);
const Hp = class extends p.Component {
  constructor(e) {
    super(e), this._calendar = null, this._timePart = null, this._cancelButton = null, this._acceptButton = null, this._dateButtonRef = null, this._calendarWrap = null, this.shouldFocusPart = !1, this.focus = (n) => {
      Promise.resolve().then(() => {
        this.state.tab === "time" && this._timePart && this._timePart.focus(n);
        const i = this.calendarElement();
        this.state.tab === "date" && i && i.focus(n);
      });
    }, this.calendarElement = () => this._calendar && this._calendar.element || this._calendarWrap && this._calendarWrap.querySelector(".k-calendar"), this.move = (n) => {
      if (n === "right" && this.state.tab === "time" || n === "left" && this.state.tab === "date")
        return;
      const i = n === "left" ? "date" : "time";
      this.shouldFocusPart = !0, this.setState({ tab: i });
    }, this.dateTimeFooter = () => {
      const { cancelButton: n, unstyled: i } = this.props, r = i && i.uDateTimePicker, s = this.localizationService.toLanguageString(Or, Ce[Or]), o = this.localizationService.toLanguageString(Nr, Ce[Nr]);
      return /* @__PURE__ */ p.createElement("div", { className: N(xn.timeFooter({ c: r })) }, n && /* @__PURE__ */ p.createElement(
        Be,
        {
          type: "button",
          ref: (a) => {
            this._cancelButton = a;
          },
          className: N(Ne.cancel({ c: r })),
          onClick: this.handleReject,
          onKeyDown: this.handleCancelKeyDown,
          title: s,
          "aria-label": s
        },
        s
      ), /* @__PURE__ */ p.createElement(
        Be,
        {
          type: "button",
          themeColor: "primary",
          ref: (a) => {
            this._acceptButton = a;
          },
          className: N(Ne.accept({ c: r })),
          disabled: !this.hasDateValue,
          onClick: this.handleAccept,
          onKeyDown: this.handleSetKeyDown,
          title: o,
          "aria-label": o
        },
        o
      ));
    }, this.handleReject = (n) => {
      this.setState({ dateValue: this.props.value, timeValue: this.props.value || ft });
      const i = this.mergeDate(this.props.value, this.props.value || ft);
      if (this.props.onReject) {
        const r = {
          nativeEvent: n.nativeEvent,
          syntheticEvent: n,
          target: this,
          value: i
        };
        this.props.onReject.call(void 0, r);
      }
    }, this.handleAccept = (n, i) => {
      if (!this.state.dateValue || !this.state.timeValue || !this.hasDateValue)
        return;
      const r = this.mergeDate(this.state.dateValue, i || this.state.timeValue);
      this.props.onChange.call(void 0, {
        syntheticEvent: n,
        nativeEvent: n.nativeEvent,
        value: r,
        target: this
      });
    }, this.handleNowClick = (n) => {
      this.setState({ timeValue: Wi() }), this.handleAccept(n, Wi());
    }, this.handleCalendarValueChange = (n) => {
      n.syntheticEvent.stopPropagation(), this.setState({ dateValue: n.value, tab: "time" }), this.shouldFocusPart = !0;
    }, this.handleTimeListContainerChange = (n) => {
      this.setState({ timeValue: n });
    }, this.handleDateClick = (n) => {
      n.stopPropagation(), this.move("left");
    }, this.handleTimeClick = (n) => {
      n.stopPropagation(), this.move("right");
    }, this.handleKeyDown = (n) => {
      const { keyCode: i, altKey: r } = n;
      if (!this.props.disabled)
        switch (i) {
          case U.enter:
            !this.hasActiveButton() && this.hasDateValue && this.handleAccept(n);
            return;
          case U.left:
            if (!r)
              return;
            this.move("left");
            return;
          case U.right:
            if (!r)
              return;
            this.move("right");
            return;
          default:
            return;
        }
    }, this.handleCancelKeyDown = (n) => {
      const { keyCode: i } = n;
      i === U.tab && this._dateButtonRef && this._dateButtonRef.element && !this.hasDateValue && (n.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleSetKeyDown = (n) => {
      const { keyCode: i } = n;
      i === U.tab && this._dateButtonRef && this._dateButtonRef.element && (n.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleDateKeyDown = (n) => {
      var i, r, s, o;
      const { keyCode: a, shiftKey: u } = n;
      u && a === U.tab && (n.stopPropagation(), this.hasDateValue ? (o = (s = this._acceptButton) == null ? void 0 : s.element) == null || o.focus() : (r = (i = this._cancelButton) == null ? void 0 : i.element) == null || r.focus()), a === U.enter && (n.stopPropagation(), this.move("left"));
    }, this.handleTimeKeyDown = (n) => {
      const { keyCode: i } = n;
      i === U.enter && (n.stopPropagation(), this.move("right"));
    }, this.handleTimePartMount = (n) => {
      this.setState({ timeValue: n });
    }, this.state = {
      tab: "date",
      dateValue: this.props.value,
      timeValue: this.props.value || ft
    };
  }
  get calendar() {
    return this._calendar;
  }
  get timePart() {
    return this._timePart;
  }
  get hasDateValue() {
    return this.state.dateValue !== null;
  }
  get localizationService() {
    return Rt(this);
  }
  componentDidUpdate(e, n) {
    var i, r;
    this.shouldFocusPart && this.focus({ preventScroll: !0 }), (((i = e.value) == null ? void 0 : i.getTime()) !== ((r = this.props.value) == null ? void 0 : r.getTime()) || this.state.tab !== n.tab && this.props.value) && this.setState((s) => ({
      dateValue: e.value && this.props.value && qn(e.value, this.props.value) ? s.dateValue : this.props.value,
      timeValue: this.props.value || ft
    })), this.shouldFocusPart = !1;
  }
  render() {
    const { disabled: e, min: n, max: i, weekNumber: r, focusedDate: s, format: o, mobileMode: a, footerActions: u, unstyled: d } = this.props, f = d && d.uDateTimePicker, y = N(
      xn.wrap({
        c: f,
        date: this.state.tab === "date",
        time: this.state.tab === "time",
        disabled: e
      })
    ), c = this.localizationService.toLanguageString(Na, Ce[Na]), m = this.localizationService.toLanguageString(Ta, Ce[Ta]), S = {
      min: n,
      max: i,
      weekNumber: r,
      focusedDate: s,
      disabled: e || this.state.tab !== "date",
      value: this.state.dateValue,
      onChange: this.handleCalendarValueChange,
      navigation: !1,
      tabIndex: e || this.state.tab !== "date" ? -1 : void 0,
      mobileMode: a
    };
    return /* @__PURE__ */ p.createElement("div", { onKeyDown: this.handleKeyDown, className: y, tabIndex: -1 }, /* @__PURE__ */ p.createElement("div", { className: N(xn.buttonGroup({ c: f })) }, /* @__PURE__ */ p.createElement(Fh, { width: "100%", unstyled: d }, /* @__PURE__ */ p.createElement(
      Be,
      {
        ref: (k) => {
          this._dateButtonRef = k;
        },
        type: "button",
        selected: this.state.tab === "date",
        togglable: !0,
        size: a ? "large" : void 0,
        onClick: this.handleDateClick,
        onKeyDown: this.handleDateKeyDown
      },
      c
    ), /* @__PURE__ */ p.createElement(
      Be,
      {
        type: "button",
        selected: this.state.tab === "time",
        togglable: !0,
        size: a ? "large" : void 0,
        onClick: this.handleTimeClick,
        onKeyDown: this.handleTimeKeyDown
      },
      m
    ))), /* @__PURE__ */ p.createElement("div", { className: N(xn.selector({ c: f })) }, /* @__PURE__ */ p.createElement(
      "div",
      {
        className: N(xn.calendarWrap({ c: f })),
        ref: (k) => {
          this._calendarWrap = k;
        }
      },
      this.props.calendar ? /* @__PURE__ */ p.createElement(this.props.calendar, { key: this.state.tab, ...S }) : /* @__PURE__ */ p.createElement(
        _l,
        {
          key: this.state.tab,
          ref: (k) => {
            this._calendar = k;
          },
          ...S
        }
      )
    ), /* @__PURE__ */ p.createElement("div", { className: N(xn.timeWrap({ c: f })) }, /* @__PURE__ */ p.createElement("div", { className: N(xn.timeSelector({ c: f, mobileMode: a })) }, /* @__PURE__ */ p.createElement(
      ao,
      {
        key: 1,
        onNowClick: this.handleNowClick,
        disabled: e || this.state.tab !== "time",
        ref: (k) => {
          this._timePart = k;
        },
        min: this.minTime || nr,
        max: this.maxTime || vi,
        steps: this.props.steps,
        value: this.state.timeValue,
        format: o,
        onChange: this.handleTimeListContainerChange,
        onMount: this.handleTimePartMount,
        mobileMode: a,
        unstyled: d
      }
    )))), u && this.dateTimeFooter());
  }
  get minTime() {
    return this.props.minTime !== void 0 ? this.props.minTime : this.normalizeRange(this.props.min, this.state.dateValue);
  }
  get maxTime() {
    return this.props.maxTime !== void 0 ? this.props.maxTime : this.normalizeRange(this.props.max, this.state.dateValue);
  }
  normalizeRange(e, n) {
    return qn(e, n || yt()) ? e : null;
  }
  hasActiveButton() {
    if (!this._acceptButton)
      return !1;
    const e = At(document);
    return this._acceptButton && e === this._acceptButton.element || this._cancelButton && e === this._cancelButton.element;
  }
  mergeTime(e, n) {
    return e && n ? Ct(n, e) : n;
  }
  mergeDate(e, n) {
    return e ? Ct(e || yt(), n) : n;
  }
};
Hp.defaultProps = {
  footerActions: !0
};
let Up = Hp;
Tn(Up);
const Ds = class dn extends p.Component {
  constructor(e) {
    super(e), this._element = null, this._dateInput = p.createRef(), this._dateTimeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.focus = () => {
      const n = this.dateInputElement();
      n && n.focus();
    }, this.renderPicker = () => {
      const { disabled: n, minTime: i, maxTime: r, format: s, calendar: o, cancelButton: a, weekNumber: u, focusedDate: d, unstyled: f } = this.props;
      return /* @__PURE__ */ p.createElement(
        Up,
        {
          ref: (y) => {
            this._dateTimeSelector = y;
          },
          cancelButton: a,
          steps: this.props.steps,
          value: this.value,
          onChange: this.handleValueChange,
          onReject: this.handleReject,
          disabled: n,
          weekNumber: u,
          min: this.min,
          max: this.max,
          minTime: i,
          maxTime: r,
          focusedDate: d,
          format: s,
          calendar: o,
          mobileMode: this.mobileMode,
          footerActions: !this.mobileMode,
          unstyled: f
        }
      );
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: n = 0 } = this.state, i = Rt(this).toLanguageString(
        Or,
        Ce[Or]
      ), r = Rt(this).toLanguageString(
        Nr,
        Ce[Nr]
      ), s = {
        expand: this.show,
        onClose: this.handleBlur,
        title: this.props.adaptiveTitle || this.props.label,
        subTitle: this.props.adaptiveSubtitle,
        windowWidth: n,
        footer: {
          cancelText: i,
          onCancel: (o) => {
            var a;
            return (a = this._dateTimeSelector) == null ? void 0 : a.handleReject(o);
          },
          applyText: r,
          onApply: (o) => {
            var a;
            return (a = this._dateTimeSelector) == null ? void 0 : a.handleAccept(o);
          }
        }
      };
      return /* @__PURE__ */ p.createElement(oo, { ...s }, /* @__PURE__ */ p.createElement(gi, null, this.renderPicker()));
    }, this.handleReject = () => {
      this.shouldFocusDateInput = !0, this.setShow(!1);
    }, this.handleValueChange = (n) => {
      this.setState({
        value: F(n.value || void 0)
      }), this.valueDuringOnChange = n.value, this.showDuringOnChange = !1, this.mobileMode || (this.shouldFocusDateInput = !0);
      const { onChange: i } = this.props;
      i && i.call(void 0, {
        syntheticEvent: n.syntheticEvent,
        nativeEvent: n.nativeEvent,
        value: this.value,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(!1);
    }, this.handleFocus = () => {
      this.setState({ focused: !0 });
    }, this.handleBlur = () => {
      this.setState({ focused: !1 }), this.setShow(!1);
    }, this.handleClick = () => {
      this.props.disabled || (this.shouldFocusDateInput = !0, this.setShow(!this.show));
    }, this.handleIconMouseDown = (n) => {
      n.preventDefault();
    }, this.handleKeyDown = (n) => {
      const { altKey: i, keyCode: r } = n;
      if (r === U.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      i && (r === U.up || r === U.down) && (n.preventDefault(), n.stopPropagation(), this.shouldFocusDateInput = r === U.up, this.setShow(r === U.down));
    }, this.dateInputElement = () => this.dateInput && this.dateInput.element || this.element && this.element.querySelector(".k-dateinput > input.k-input-inner"), this.state = {
      value: this.props.defaultValue || dn.defaultProps.defaultValue,
      show: this.props.defaultShow || dn.defaultProps.defaultShow,
      focused: !1
    };
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (Dt)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the DateTimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the DateTimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the value of the DateTimePicker.
   */
  get value() {
    const e = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return e !== null ? F(e) : null;
  }
  /**
   * Gets the popup state of the DateTimePicker.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the DateTimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Returns a boolean value indicating whether the DateTimePicker is in mobile mode.
   */
  get mobileMode() {
    var e;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((e = this.props._adaptiveMode) == null ? void 0 : e.medium) && this.props.adaptive);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : dn.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : dn.defaultProps.max;
  }
  /**
   * Represents the validity state into which the DateTimePicker is set.
   */
  get validity() {
    const e = Ah(this.value, this.min, this.max) && Vl(this.value, this.props.minTime || nr, this.props.maxTime || vi), n = this.props.validationMessage !== void 0, i = (!this.required || this.value !== null) && e, r = this.props.valid !== void 0 ? this.props.valid : i;
    return {
      customError: n,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: r,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : dn.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : !1;
  }
  /**
   * @hidden
   */
  get dateInputComp() {
    return this.props.dateInput || dn.defaultProps.dateInput;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var e;
    this.observerResize = Dt && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (e = this.document) != null && e.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const e = this.dateInputElement();
    this._dateTimeSelector && this.show && !this.prevShow && this._dateTimeSelector.focus({ preventScroll: !0 }), this.mobileMode && this.show && !this.prevShow && setTimeout(() => {
      this._dateTimeSelector && this._dateTimeSelector.focus({ preventScroll: !0 });
    }, 300), e && !this.show && this.shouldFocusDateInput && e.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var e;
    clearTimeout(this.nextTickId), (e = this.document) != null && e.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: e = dn.defaultProps.size,
      rounded: n = dn.defaultProps.rounded,
      fillMode: i = dn.defaultProps.fillMode,
      autoFocus: r = dn.defaultProps.autoFocus,
      inputAttributes: s,
      disabled: o,
      tabIndex: a,
      title: u,
      id: d,
      format: f,
      formatPlaceholder: y,
      min: c,
      max: m,
      className: S,
      width: k,
      name: C,
      validationMessage: h,
      required: b,
      validityStyles: w,
      minTime: E,
      maxTime: $,
      ariaLabelledBy: D,
      ariaDescribedBy: T,
      popup: O = An,
      unstyled: A,
      autoFill: L,
      twoDigitYearMax: B,
      enableMouseWheel: X,
      autoCorrectParts: z,
      autoSwitchParts: Q,
      autoSwitchKeys: H,
      allowCaretMode: V
    } = this.props, re = A && A.uDateTimePicker, P = !this.validityStyles || this.validity.valid, Y = {
      id: d,
      ariaLabelledBy: D,
      ariaDescribedBy: T,
      format: f,
      formatPlaceholder: y,
      disabled: o,
      title: u,
      validityStyles: w,
      validationMessage: h,
      required: b,
      min: c,
      max: m,
      minTime: E,
      maxTime: $,
      name: C,
      tabIndex: this.show ? -1 : a,
      valid: this.validity.valid,
      value: this.value,
      onChange: this.handleValueChange,
      steps: this.props.steps,
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null,
      unstyled: A,
      autoFill: L,
      twoDigitYearMax: B,
      enableMouseWheel: X,
      autoCorrectParts: z,
      autoSwitchParts: Q,
      autoSwitchKeys: H,
      allowCaretMode: V
    }, M = /* @__PURE__ */ p.createElement(
      vl,
      {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onSyncFocus: this.props.onFocus,
        onSyncBlur: this.props.onBlur
      },
      ({ onFocus: I, onBlur: j }) => /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
        "div",
        {
          ref: (Z) => {
            this._element = Z;
          },
          className: N(
            xn.wrapper({
              c: re,
              size: e,
              fillMode: i,
              rounded: n,
              disabled: o,
              required: this.required,
              invalid: !P
            }),
            S
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: k },
          onFocus: this.mobileMode ? this.handleClick : I,
          onBlur: j,
          onClick: this.mobileMode ? this.handleClick : void 0
        },
        /* @__PURE__ */ p.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            ariaHasPopup: "dialog",
            autoFocus: r,
            inputAttributes: s,
            ...Y
          }
        ),
        /* @__PURE__ */ p.createElement(
          Be,
          {
            tabIndex: -1,
            type: "button",
            icon: "calendar",
            svgIcon: rh,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleClick,
            title: Rt(this).toLanguageString(
              vr,
              Ce[vr]
            ),
            className: N(xn.inputButton({ c: re })),
            rounded: null,
            fillMode: i,
            "aria-label": Rt(this).toLanguageString(
              vr,
              Ce[vr]
            )
          }
        ),
        /* @__PURE__ */ p.createElement(
          O,
          {
            show: this.show,
            animate: this.element !== null,
            anchor: this.element,
            popupClass: N(xn.popup({ c: re })),
            id: this._popupId,
            anchorAlign: {
              horizontal: "left",
              vertical: "bottom"
            },
            popupAlign: {
              horizontal: "left",
              vertical: "top"
            }
          },
          !this.mobileMode && this.renderPicker()
        )
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return this.props.label ? /* @__PURE__ */ p.createElement(
      Bl,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: d,
        editorValid: P,
        editorDisabled: this.props.disabled,
        children: M,
        style: { width: this.props.width }
      }
    ) : M;
  }
  setShow(e) {
    const { onOpen: n, onClose: i } = this.props;
    this.show !== e && (this.setState({ show: e }), e && n && n.call(void 0, {
      target: this
    }), !e && i && i.call(void 0, {
      target: this
    }));
  }
  nextTick(e) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => e());
  }
  calculateMedia(e) {
    for (const n of e)
      this.setState({ windowWidth: n.target.clientWidth });
  }
};
Ds.displayName = "DateTimePicker", Ds.propTypes = {
  className: l.string,
  defaultShow: l.bool,
  defaultValue: l.instanceOf(Date),
  disabled: l.bool,
  focusedDate: l.instanceOf(Date),
  format: l.oneOfType([
    l.string,
    l.shape({
      skeleton: l.string,
      pattern: l.string,
      date: l.oneOf(["short", "medium", "long", "full"]),
      time: l.oneOf(["short", "medium", "long", "full"]),
      datetime: l.oneOf(["short", "medium", "long", "full"]),
      era: l.oneOf(["narrow", "short", "long"]),
      year: l.oneOf(["numeric", "2-digit"]),
      month: l.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: l.oneOf(["numeric", "2-digit"]),
      weekday: l.oneOf(["narrow", "short", "long"]),
      hour: l.oneOf(["numeric", "2-digit"]),
      hour12: l.bool,
      minute: l.oneOf(["numeric", "2-digit"]),
      second: l.oneOf(["numeric", "2-digit"]),
      timeZoneName: l.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: l.oneOfType([
    l.oneOf([
      "wide",
      "narrow",
      "short",
      "formatPattern"
    ]),
    l.shape({
      year: l.string,
      month: l.string,
      day: l.string,
      hour: l.string,
      minute: l.string,
      second: l.string
    })
  ]),
  id: l.string,
  ariaLabelledBy: l.string,
  ariaDescribedBy: l.string,
  min: l.instanceOf(Date),
  max: l.instanceOf(Date),
  name: l.string,
  popupSettings: l.shape({
    animate: l.bool,
    appendTo: l.any,
    popupClass: l.string
  }),
  show: l.bool,
  tabIndex: l.number,
  title: l.string,
  value: l.instanceOf(Date),
  weekNumber: l.bool,
  width: l.oneOfType([l.number, l.string]),
  validationMessage: l.string,
  required: l.bool,
  validate: l.bool,
  valid: l.bool,
  cancelButton: l.bool,
  size: l.oneOf([null, "small", "medium", "large"]),
  rounded: l.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: l.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: l.bool,
  inputAttributes: l.object
}, Ds.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "g",
  // general date and time pattern (short time): "M/d/y h:mm a" for en.
  max: Rn,
  min: Pn,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  validityStyles: !0,
  cancelButton: !0,
  dateInput: $n,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: !1
};
let Wp = Ds;
const QS = Qn(), Zp = En(
  Qi(
    QS,
    qs(
      bl(Wp)
    )
  )
);
Zp.displayName = "KendoReactDateTimePicker";
Tn(Wp);
const XS = ({
  id: t,
  label: e,
  error: n,
  required: i,
  disabled: r,
  className: s,
  startAdornment: o,
  endAdornment: a,
  fullWidth: u,
  value: d,
  onChange: f,
  onClear: y,
  min: c,
  max: m,
  format: S = "dd/MM/yyyy",
  formats: k = ["dd/MM/yyyy", "dd-MMM-yyyy", "d/M/yyyy", "g"],
  // Robust parsing defaults
  placeholder: C = ""
}) => {
  const [h, b] = Ve(!1), [w, E] = Ve(!1);
  console.log(w);
  const $ = /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: () => !r && b(!h),
      disabled: r,
      className: `focus:outline-none transition-colors ${r ? "text-muted-foreground cursor-not-allowed opacity-50" : "hover:text-primary-600 cursor-pointer"}`,
      tabIndex: -1,
      children: /* @__PURE__ */ v.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ v.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }),
            /* @__PURE__ */ v.jsx("line", { x1: "16", x2: "16", y1: "2", y2: "6" }),
            /* @__PURE__ */ v.jsx("line", { x1: "8", x2: "8", y1: "2", y2: "6" }),
            /* @__PURE__ */ v.jsx("line", { x1: "3", x2: "21", y1: "10", y2: "10" })
          ]
        }
      )
    }
  );
  return /* @__PURE__ */ v.jsx(
    Jn,
    {
      id: t,
      label: e,
      error: n,
      required: i,
      disabled: r,
      startAdornment: o,
      endAdornment: a || $,
      onClear: y,
      fullWidth: u,
      className: `kendo-field-wrapper ${s}`,
      value: d,
      children: ({ isFocused: D, onFocus: T, onBlur: O, style: A }) => /* @__PURE__ */ v.jsx(
        "div",
        {
          className: `
            relative w-full rounded-md border transition-all h-10 flex items-center
            ${D ? "border-ring ring-2 ring-ring ring-offset-0" : "border-border hover:border-zinc-400"}
            ${n ? "border-destructive focus-within:ring-destructive/20" : ""}
            ${r ? "bg-muted cursor-not-allowed" : "bg-input"}
          `,
          style: {
            "--kendo-padding-left": A.paddingLeft,
            "--kendo-padding-right": A.paddingRight
          },
          onInput: (L) => {
            const B = L.target;
            E(!!B.value);
          },
          children: /* @__PURE__ */ v.jsx(
            Ql,
            {
              id: t,
              value: d,
              onChange: (L) => f?.(L.value),
              onFocus: () => {
                T();
              },
              onBlur: () => {
                O();
              },
              show: h,
              onOpen: () => b(!0),
              onClose: () => b(!1),
              min: c,
              max: m,
              format: S,
              formats: k,
              disabled: r,
              placeholder: C || "",
              className: "w-full bg-transparent",
              style: { width: "100%" }
            }
          )
        }
      )
    }
  );
}, ek = ({
  id: t,
  label: e,
  error: n,
  required: i,
  disabled: r,
  className: s,
  startAdornment: o,
  endAdornment: a,
  fullWidth: u,
  value: d,
  onChange: f,
  onClear: y,
  min: c,
  max: m,
  format: S = "HH:mm",
  // More explicit 24h default or match inputs? let's stick to standard input behavior
  formats: k,
  placeholder: C = "",
  steps: h
}) => {
  const [b, w] = Ve(!1), [E, $] = Ve(!1);
  console.log(E);
  const D = /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: () => !r && w(!b),
      disabled: r,
      className: `focus:outline-none transition-colors ${r ? "text-muted-foreground cursor-not-allowed opacity-50" : "hover:text-primary-600 cursor-pointer"}`,
      tabIndex: -1,
      children: /* @__PURE__ */ v.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ v.jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ v.jsx("polyline", { points: "12 6 12 12 16 14" })
          ]
        }
      )
    }
  );
  return /* @__PURE__ */ v.jsx(
    Jn,
    {
      id: t,
      label: e,
      error: n,
      required: i,
      disabled: r,
      startAdornment: o,
      endAdornment: a || D,
      onClear: y,
      fullWidth: u,
      className: `kendo-field-wrapper ${s}`,
      value: d,
      children: ({ isFocused: T, onFocus: O, onBlur: A, style: L }) => /* @__PURE__ */ v.jsx(
        "div",
        {
          className: `
            relative w-full rounded-md border transition-all h-10 flex items-center
            ${T ? "border-ring ring-2 ring-ring ring-offset-0" : "border-border hover:border-zinc-400"}
            ${n ? "border-destructive focus-within:ring-destructive/20" : ""}
            ${r ? "bg-muted cursor-not-allowed" : "bg-input"}
          `,
          style: {
            "--kendo-padding-left": L.paddingLeft,
            "--kendo-padding-right": L.paddingRight
          },
          onInput: (B) => {
            const X = B.target;
            $(!!X.value);
          },
          children: /* @__PURE__ */ v.jsx(
            jp,
            {
              id: t,
              value: d,
              onChange: (B) => f?.(B.value),
              onFocus: () => {
                O();
              },
              onBlur: () => {
                A();
              },
              show: b,
              onOpen: () => w(!0),
              onClose: () => w(!1),
              min: c,
              max: m,
              format: S,
              formats: k,
              steps: h,
              disabled: r,
              placeholder: C || "",
              className: "w-full bg-transparent",
              style: { width: "100%" }
            }
          )
        }
      )
    }
  );
}, tk = ({
  id: t,
  label: e,
  error: n,
  required: i,
  disabled: r,
  className: s,
  startAdornment: o,
  endAdornment: a,
  fullWidth: u,
  value: d,
  onChange: f,
  onClear: y,
  min: c,
  max: m,
  format: S = "dd/MM/yyyy HH:mm",
  // More explicit default
  formats: k = ["dd/MM/yyyy HH:mm", "dd/MM/yyyy", "dd-MMM-yyyy", "d/M/yyyy", "g"],
  // Parsing formats
  placeholder: C = "",
  steps: h
}) => {
  const [b, w] = Ve(!1), [E, $] = Ve(!1);
  console.log(E);
  const D = /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: () => !r && w(!b),
      disabled: r,
      className: `focus:outline-none transition-colors ${r ? "text-muted-foreground cursor-not-allowed opacity-50" : "hover:text-primary-600 cursor-pointer"}`,
      tabIndex: -1,
      children: /* @__PURE__ */ v.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ v.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
            /* @__PURE__ */ v.jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
            /* @__PURE__ */ v.jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
            /* @__PURE__ */ v.jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
            /* @__PURE__ */ v.jsx("path", { d: "M12 14v2l1 1" }),
            " "
          ]
        }
      )
    }
  );
  return /* @__PURE__ */ v.jsx(
    Jn,
    {
      id: t,
      label: e,
      error: n,
      required: i,
      disabled: r,
      startAdornment: o,
      endAdornment: a || D,
      onClear: y,
      fullWidth: u,
      className: `kendo-field-wrapper ${s}`,
      value: d,
      children: ({ isFocused: T, onFocus: O, onBlur: A, style: L }) => /* @__PURE__ */ v.jsx(
        "div",
        {
          className: `
            relative w-full rounded-md border transition-all h-10 flex items-center
            ${T ? "border-ring ring-2 ring-ring ring-offset-0" : "border-border hover:border-zinc-400"}
            ${n ? "border-destructive focus-within:ring-destructive/20" : ""}
            ${r ? "bg-muted cursor-not-allowed" : "bg-input"}
          `,
          style: {
            "--kendo-padding-left": L.paddingLeft,
            "--kendo-padding-right": L.paddingRight
          },
          onInput: (B) => {
            const X = B.target;
            $(!!X.value);
          },
          children: /* @__PURE__ */ v.jsx(
            Zp,
            {
              id: t,
              value: d,
              onChange: (B) => f?.(B.value),
              onFocus: () => {
                O();
              },
              onBlur: () => {
                A();
              },
              show: b,
              onOpen: () => w(!0),
              onClose: () => w(!1),
              min: c,
              max: m,
              format: S,
              formats: k,
              steps: h,
              disabled: r,
              placeholder: C || "",
              className: "w-full bg-transparent",
              style: { width: "100%" }
            }
          )
        }
      )
    }
  );
}, nk = ({
  id: t,
  label: e,
  error: n,
  required: i,
  disabled: r,
  className: s,
  startAdornment: o,
  endAdornment: a,
  fullWidth: u,
  value: d = { start: null, end: null },
  onChange: f,
  min: y,
  max: c,
  format: m = "dd/MM/yyyy",
  formats: S = ["dd/MM/yyyy", "dd-MMM-yyyy", "d/M/yyyy", "g"],
  allowReverse: k = !1
}) => {
  const [C, h] = Ve(!1), [b, w] = Ve(!1), E = /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: () => !r && h(!C),
      disabled: r,
      className: `focus:outline-none transition-colors mr-2 ${r ? "text-muted-foreground cursor-not-allowed opacity-50" : "hover:text-primary-600 cursor-pointer"}`,
      tabIndex: -1,
      children: /* @__PURE__ */ v.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ v.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }),
            /* @__PURE__ */ v.jsx("line", { x1: "16", x2: "16", y1: "2", y2: "6" }),
            /* @__PURE__ */ v.jsx("line", { x1: "8", x2: "8", y1: "2", y2: "6" }),
            /* @__PURE__ */ v.jsx("line", { x1: "3", x2: "21", y1: "10", y2: "10" }),
            /* @__PURE__ */ v.jsx("path", { d: "M7 14h.01" }),
            /* @__PURE__ */ v.jsx("path", { d: "M17 14h.01" }),
            /* @__PURE__ */ v.jsx("path", { d: "M12 14h.01" })
          ]
        }
      )
    }
  );
  return /* @__PURE__ */ v.jsx(
    Jn,
    {
      id: t,
      label: e,
      error: n,
      required: i,
      disabled: r,
      startAdornment: o,
      endAdornment: a || E,
      fullWidth: u,
      className: `kendo-field-wrapper kendo-range-wrapper ${s}`,
      value: d,
      children: ({ isFocused: $, onFocus: D, onBlur: T, style: O }) => {
        const A = $ || !!d.start || !!d.end || b;
        return /* @__PURE__ */ v.jsx(
          "div",
          {
            className: `
            relative w-full rounded-md border transition-all h-10 flex items-center
            ${r ? "bg-muted cursor-not-allowed" : "bg-input hover:border-zinc-400 border-border"}
            ${n ? "border-destructive focus-within:ring-destructive/20" : ""}
          `,
            style: {
              "--range-separator-opacity": A ? 1 : 0,
              "--range-text-color": A ? "var(--color-foreground)" : "transparent",
              "--kendo-padding-left": O.paddingLeft
            },
            onInput: (L) => {
              const X = L.currentTarget.querySelectorAll("input");
              let z = !1;
              X.forEach((Q) => {
                Q.value && (z = !0);
              }), w(z);
            },
            onClick: (L) => {
              if (L.target.tagName !== "INPUT") {
                const X = L.currentTarget.querySelectorAll("input");
                X.length > 0 && (X[0].focus(), D());
              }
            },
            children: /* @__PURE__ */ v.jsx(
              Bp,
              {
                id: t,
                value: d,
                onChange: (L) => {
                  f?.(L.value), L.value.start && L.value.end && h(!1);
                },
                onFocus: D,
                onBlur: T,
                calendarSettings: {
                  views: 1
                },
                show: C,
                onOpen: () => h(!0),
                onClose: () => h(!1),
                min: y,
                max: c,
                format: m,
                formats: S,
                disabled: r,
                allowReverse: k,
                className: "bg-transparent flex justify-start items-center",
                startDateInput: (L) => /* @__PURE__ */ v.jsx($n, { ...L, label: void 0 }),
                endDateInput: (L) => /* @__PURE__ */ v.jsx($n, { ...L, label: void 0 })
              }
            )
          }
        );
      }
    }
  );
}, ik = ({
  id: t,
  label: e,
  error: n,
  required: i,
  disabled: r,
  className: s,
  fullWidth: o,
  value: a,
  onChange: u,
  startAdornment: d,
  endAdornment: f,
  accept: y,
  multiple: c,
  maxSize: m,
  ...S
}) => {
  const k = ai(null), C = a?.name ?? "", h = (E) => {
    const $ = E.target.files?.[0] || null;
    u?.($);
  }, b = (E) => {
    E.stopPropagation(), E.preventDefault(), u?.(null), k.current && (k.current.value = "");
  }, w = () => C ? /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: b,
      className: "p-1 hover:bg-surface-100 rounded-full text-slate-400 hover:text-error transition-colors focus:outline-none",
      title: "Remove file",
      disabled: r,
      children: /* @__PURE__ */ v.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ v.jsx("path", { d: "M18 6 6 18" }),
            /* @__PURE__ */ v.jsx("path", { d: "m6 6 12 12" })
          ]
        }
      )
    }
  ) : /* @__PURE__ */ v.jsx("div", { className: "pointer-events-none", children: /* @__PURE__ */ v.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "text-slate-400",
      children: [
        /* @__PURE__ */ v.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        /* @__PURE__ */ v.jsx("polyline", { points: "17 8 12 3 7 8" }),
        /* @__PURE__ */ v.jsx("line", { x1: "12", x2: "12", y1: "3", y2: "15" })
      ]
    }
  ) });
  return /* @__PURE__ */ v.jsx(
    Jn,
    {
      id: t,
      label: e,
      error: n,
      required: i,
      disabled: r,
      fullWidth: o,
      className: s,
      value: C,
      endAdornment: w(),
      children: ({ isFocused: E, onFocus: $, onBlur: D, style: T }) => /* @__PURE__ */ v.jsxs("div", { className: "relative w-full h-10 flex items-center", children: [
        /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: k,
            type: "file",
            id: t,
            className: `
              absolute inset-0 w-full h-full opacity-0 z-0
              ${r ? "cursor-not-allowed" : "cursor-pointer"}
            `,
            onChange: h,
            onFocus: $,
            onBlur: D,
            disabled: r,
            accept: y,
            multiple: c,
            ...S
          }
        ),
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: `
              w-full truncate text-sm transition-colors
              ${C ? "text-foreground" : "text-slate-400"}
            `,
            style: {
              paddingLeft: T.paddingLeft,
              paddingRight: T.paddingRight
            },
            children: C || (E ? "Choose a file..." : "")
          }
        )
      ] })
    }
  );
}, rl = Gi(
  ({
    schema: t,
    onSubmit: e,
    initialValues: n,
    className: i = "",
    debug: r = !1,
    breakpoint: s,
    hideTitle: o = !1,
    id: a = "schema-form",
    onValidate: u
  }, d) => {
    const f = Cs(() => ty(t), [t]), y = Cs(
      () => n || ey(t),
      [t, n]
    ), {
      values: c,
      errors: m,
      touched: S,
      setFieldValue: k,
      handleBlur: C,
      handleSubmit: h,
      isSubmitted: b,
      reset: w
    } = Jb({
      initialValues: y,
      schema: f,
      onSubmit: e,
      validate: u,
      mode: "onSubmit"
      // or onChange
    }), E = ai(c);
    Ri(() => {
      E.current = c;
    }, [c]), rm(d, () => ({
      submit: () => {
        h({
          preventDefault: () => {
          }
        });
      },
      reset: () => {
        w();
      }
    }));
    const $ = (D) => {
      const T = _c(D, c) && !D.hidden, O = Xb(
        D,
        c,
        E.current
      ), A = Mn(c, D.name);
      if (O && A !== "" && A !== null && A !== void 0) {
        let z = "";
        D.type === "daterange" ? z = { start: null, end: null } : (D.type === "autocomplete" || D.type === "select") && D.multiple ? z = [] : D.type === "checkbox" || D.type === "switch" ? z = !1 : (D.type === "date" || D.type === "time" || D.type === "datetime" || D.type === "file") && (z = null), k(D.name, z);
      }
      if (!T) return null;
      const L = Qb(D, c), B = {
        id: D.name,
        label: D.label,
        placeholder: D.placeholder,
        disabled: L,
        // Use dynamic disabled state
        required: D.validation?.some((z) => z.type === "required"),
        error: b || S[D.name] ? m[D.name] : void 0,
        startAdornment: D.startAdornment,
        endAdornment: D.endAdornment,
        fullWidth: !0,
        // Bindings
        value: Mn(c, D.name),
        onChange: (z) => k(D.name, z, D.validateOnChange),
        onBlur: () => C(D.name),
        onClear: D.clearable ? () => {
          D.type === "daterange" ? k(D.name, { start: null, end: null }) : (D.type === "autocomplete" || D.type === "select") && D.multiple ? k(D.name, []) : k(D.name, "");
        } : void 0,
        pattern: D.validation?.find((z) => z.type === "pattern")?.value
      }, X = (z) => {
        const Q = z.target.value;
        if (D.restrictInput && Q !== "") {
          const H = D.validation?.find(
            (V) => V.type === "pattern"
          );
          if (H)
            try {
              if (!new RegExp(H.value).test(Q))
                return;
            } catch {
            }
        }
        k(D.name, Q, D.validateOnChange);
      };
      switch (D.type) {
        case "text":
        case "password":
        case "number":
        case "email":
        case "url":
        case "tel":
          return /* @__PURE__ */ v.jsx(
            ne,
            {
              type: D.type,
              ...B,
              onChange: X,
              onBlur: (z) => C(D.name),
              startAdornment: D.startAdornment,
              endAdornment: D.endAdornment
            }
          );
        case "textarea":
          return /* @__PURE__ */ v.jsx(
            Ts,
            {
              ...B,
              onChange: X,
              onBlur: (z) => C(D.name),
              rows: D.rows,
              minRows: D.minRows,
              maxRows: D.maxRows,
              resize: D.resize
            }
          );
        case "checkbox":
          return /* @__PURE__ */ v.jsx(
            Wd,
            {
              ...B,
              checked: !!Mn(c, D.name),
              onChange: (z) => k(
                D.name,
                z.target.checked,
                D.validateOnChange
              )
            }
          );
        case "switch":
          return /* @__PURE__ */ v.jsx(
            Qe,
            {
              ...B,
              checked: !!Mn(c, D.name),
              onChange: (z) => k(
                D.name,
                z.target.checked,
                D.validateOnChange
              )
            }
          );
        case "radio":
          return /* @__PURE__ */ v.jsx(
            Zd,
            {
              ...B,
              name: D.name,
              options: D.options || [],
              direction: D.direction,
              value: Mn(c, D.name),
              onChange: (z) => k(D.name, z, D.validateOnChange)
            }
          );
        case "select":
        case "autocomplete":
          return /* @__PURE__ */ v.jsx(
            ct,
            {
              ...B,
              options: D.options || [],
              multiple: D.multiple,
              loadOptions: D.asyncUrl ? async (z) => {
                try {
                  const Q = new URL(D.asyncUrl);
                  Q.searchParams.set("q", z);
                  const H = await fetch(Q.toString());
                  if (!H.ok) throw new Error("Fetch error");
                  const V = await H.json();
                  return Array.isArray(V) ? V : [];
                } catch (Q) {
                  return console.error("Async load failed", Q), [];
                }
              } : void 0
            }
          );
        case "date":
          return /* @__PURE__ */ v.jsx(XS, { ...B, format: D.format });
        case "time":
          return /* @__PURE__ */ v.jsx(ek, { ...B, format: D.format });
        case "datetime":
          return /* @__PURE__ */ v.jsx(tk, { ...B, format: D.format });
        case "daterange":
          return /* @__PURE__ */ v.jsx(nk, { ...B, format: D.format });
        /* Removed duplicate email/url/tel cases */
        case "file": {
          const { startAdornment: z, endAdornment: Q, fullWidth: H, ...V } = B;
          return /* @__PURE__ */ v.jsx(
            ik,
            {
              ...V,
              value: c[D.name],
              onChange: (re) => k(D.name, re, D.validateOnChange),
              multiple: D.multiple,
              accept: D.accept,
              maxSize: D.maxSize
            }
          );
        }
        default:
          return /* @__PURE__ */ v.jsx(
            ne,
            {
              type: "text",
              ...B,
              onChange: (z) => k(
                D.name,
                z.target.value,
                D.validateOnChange
              ),
              onBlur: (z) => C(D.name)
            }
          );
      }
    };
    return /* @__PURE__ */ v.jsxs(
      "form",
      {
        id: a,
        onSubmit: h,
        className: `w-full ${i}`,
        noValidate: !0,
        children: [
          t.title && !o && /* @__PURE__ */ v.jsx("h2", { className: "text-2xl font-bold mb-4 text-foreground", children: t.title }),
          /* @__PURE__ */ v.jsx(
            ny,
            {
              gap: t.styling?.spacing?.fieldGap ?? t.layout?.gap,
              children: t.fields.map((D) => {
                let T = {
                  colSpan: D.grid?.colSpan || 12,
                  xs: D.grid?.xs,
                  sm: D.grid?.sm,
                  md: D.grid?.md,
                  lg: D.grid?.lg
                };
                if (s) {
                  let A = 12;
                  s === "mobile" ? A = D.grid?.xs || 12 : s === "tablet" ? A = D.grid?.sm || D.grid?.colSpan || 12 : A = D.grid?.lg || D.grid?.sm || D.grid?.colSpan || 12, T = {
                    colSpan: A,
                    xs: A,
                    sm: void 0,
                    md: void 0,
                    lg: void 0
                  };
                }
                return !(_c(D, c) && !D.hidden) && !D.reserveSpace ? null : /* @__PURE__ */ v.jsx(ay, { ...T, children: $(D) }, D.id);
              })
            }
          ),
          b && Object.keys(m).length > 0 && /* @__PURE__ */ v.jsxs("div", { className: "mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-600 text-sm animate-in fade-in slide-in-from-top-1", children: [
            /* @__PURE__ */ v.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ v.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ v.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                  /* @__PURE__ */ v.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs("span", { children: [
              "Please fix the ",
              Object.keys(m).length,
              " errors highlighted above before submitting."
            ] })
          ] }),
          r && /* @__PURE__ */ v.jsxs("div", { className: "mt-8 space-y-4", children: [
            /* @__PURE__ */ v.jsx("div", { className: "text-xs font-bold uppercase text-slate-400", children: "Debug Information" }),
            /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("div", { className: "text-[10px] mb-1 text-slate-500", children: "VALUES" }),
                /* @__PURE__ */ v.jsx("pre", { className: "p-4 bg-slate-100 dark:bg-slate-800 rounded text-xs overflow-auto text-foreground border border-border max-h-60", children: JSON.stringify(c, null, 2) })
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("div", { className: "text-[10px] mb-1 text-slate-500", children: "ERRORS" }),
                /* @__PURE__ */ v.jsx("pre", { className: "p-4 bg-slate-100 dark:bg-slate-800 rounded text-xs overflow-auto text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 max-h-60", children: JSON.stringify(m, null, 2) })
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("div", { className: "text-[10px] mb-1 text-slate-500", children: "TOUCHED" }),
                /* @__PURE__ */ v.jsx("pre", { className: "p-4 bg-slate-100 dark:bg-slate-800 rounded text-xs overflow-auto text-foreground border border-border max-h-60", children: JSON.stringify(S, null, 2) })
              ] })
            ] })
          ] })
        ]
      }
    );
  }
);
rl.displayName = "SchemaForm";
const rk = {
  id: "kitchen-sink-demo",
  title: "All Features Demo",
  description: "A comprehensive showcase of all input types, validation rules, and dynamic logic (visibility, disable, clear).",
  styling: {
    spacing: {
      formPadding: 8,
      fieldGap: 6
    },
    responsive: {
      mobile: { columns: 1, gap: 4 },
      tablet: { columns: 2, gap: 6 },
      desktop: { columns: 2, gap: 8 }
    }
  },
  layout: {
    columns: 12,
    gap: 4
  },
  fields: [
    {
      id: "section-1",
      name: "_info_section",
      type: "text",
      // Should be static/html ideally but using text for now or mapped to section
      label: "Personal Information",
      grid: { colSpan: 12 },
      disabled: !0,
      // Acts as header
      defaultValue: "SECTION HEADER"
    },
    {
      id: "f_name",
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "e.g. John Doe",
      grid: { colSpan: 6 },
      validation: [{ type: "required", message: "Name is required" }]
    },
    {
      id: "f_email",
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
      grid: { colSpan: 6 },
      validation: [
        { type: "required", message: "Email is required" },
        { type: "email", message: "Invalid email format" }
      ]
    },
    {
      id: "f_role",
      name: "role",
      label: "Job Role",
      type: "select",
      options: [
        { label: "Developer", value: "dev" },
        { label: "Designer", value: "des" },
        { label: "Manager", value: "mgr" },
        { label: "Other", value: "other" }
      ],
      grid: { colSpan: 6 }
    },
    {
      id: "f_other_role",
      name: "otherRole",
      label: "Specify Role",
      type: "text",
      grid: { colSpan: 6 },
      visibilityRules: [{ field: "role", operator: "eq", value: "other" }],
      validation: [{ type: "required", message: "Please specify your role" }]
    },
    {
      id: "f_exp",
      name: "experience",
      label: "Years of Experience",
      type: "number",
      grid: { colSpan: 6 },
      validation: [
        { type: "min", value: 0, message: "Cannot be negative" },
        { type: "max", value: 50, message: "Must be under 50" }
      ]
    },
    {
      id: "f_skills",
      name: "skills",
      label: "Skills (Multi-Select)",
      type: "autocomplete",
      multiple: !0,
      options: [
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Angular", value: "angular" },
        { label: "Node.js", value: "node" },
        { label: "Python", value: "python" }
      ],
      grid: { colSpan: 12 }
    },
    {
      id: "section-2",
      name: "_pref_section",
      type: "text",
      label: "Preferences & settings",
      grid: { colSpan: 12 },
      disabled: !0,
      defaultValue: "SECTION HEADER"
    },
    {
      id: "f_notifications",
      name: "notifications",
      label: "Enable Notifications",
      type: "switch",
      grid: { colSpan: 6 }
    },
    {
      id: "f_freq",
      name: "frequency",
      label: "Notification Frequency",
      type: "radio",
      options: [
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" }
      ],
      grid: { colSpan: 6 },
      disableRules: [
        { field: "notifications", operator: "neq", value: !0 }
        // Disabled if notifications OFF
      ]
    },
    {
      id: "f_country",
      name: "country",
      label: "Country",
      type: "select",
      options: [
        { label: "USA", value: "us" },
        { label: "Canada", value: "ca" },
        { label: "UK", value: "uk" }
      ],
      grid: { colSpan: 6 }
    },
    {
      id: "f_state",
      name: "state",
      label: "State/Province",
      type: "text",
      placeholder: "Enter state...",
      grid: { colSpan: 6 },
      clearValueRules: [
        { field: "country", operator: "changed", value: null }
        // Clear when country changes
      ],
      disableRules: [
        { field: "country", operator: "eq", value: void 0 },
        // Disable if no country
        { field: "country", operator: "eq", value: "" }
      ]
    },
    {
      id: "f_dates",
      name: "bookingParams",
      label: "Booking Period",
      type: "daterange",
      grid: { colSpan: 12 },
      validation: [{ type: "required", message: "Dates required" }]
    },
    {
      id: "f_agree",
      name: "terms",
      label: "I agree to the Terms & Conditions",
      type: "checkbox",
      grid: { colSpan: 12 },
      validation: [{ type: "required", message: "You must agree to terms" }]
    }
  ]
}, sk = {
  fields: []
}, ok = [
  { label: "Text Input", value: "text" },
  { label: "Email", value: "email" },
  { label: "URL", value: "url" },
  { label: "Tel", value: "tel" },
  { label: "Number", value: "number" },
  { label: "Password", value: "password" },
  { label: "Text Area", value: "textarea" },
  { label: "Select (Autocomplete)", value: "autocomplete" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Switch", value: "switch" },
  { label: "Radio Group", value: "radio" },
  { label: "Native Select", value: "select" },
  { label: "Date Picker", value: "date" },
  { label: "Time Picker", value: "time" },
  { label: "Date Time", value: "datetime" },
  { label: "Date Range", value: "daterange" },
  { label: "File Upload", value: "file" }
], ta = [
  { label: "Alphanumeric", value: "^[a-zA-Z0-9]+$" },
  {
    label: "Email Address",
    value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
  },
  { label: "Phone (International)", value: "^\\+?[1-9]\\d{1,14}$" },
  {
    label: "URL (Web Address)",
    value: "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$"
  },
  { label: "Alphabets Only", value: "^[A-Za-z]+$" },
  { label: "Numeric Only", value: "^\\d+$" },
  { label: "Percentage (Whole Number)", value: "^(100|[1-9]?\\d)$" },
  {
    label: "Percentage (Decimal)",
    value: "^(100(\\.0+)?|[1-9]?\\d(\\.\\d*)?)$"
  },
  { label: "Decimal Number", value: "^-?\\d*(\\.\\d*)?$" },
  {
    label: "Date (YYYY-MM-DD)",
    value: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$"
  },
  {
    label: "IP Address (v4)",
    value: "^((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)\\.?\\b){4}$"
  },
  {
    label: "Credit Card",
    value: "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$"
  },
  { label: "Postal Code", value: "^[a-zA-Z0-9\\s-]{3,10}$" },
  {
    label: "Strong Password (8+ chars, Letter & Number)",
    value: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
  },
  { label: "Hex Color Code", value: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$" },
  { label: "Slug (kebab-case)", value: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
  { label: "Custom / Manual", value: "custom" }
], na = [
  { label: "Equals (==)", value: "eq" },
  { label: "Not Equals (!=)", value: "neq" },
  { label: "Greater Than (>)", value: "gt" },
  { label: "Less Than (<)", value: "lt" },
  { label: "One Of (Array)", value: "in" },
  { label: "Contains (Array)", value: "contains" },
  { label: "Value Changed", value: "changed" }
], Jk = () => {
  const [t, e] = Ve(sk), [n, i] = Ve(null), [r, s] = Ve(!1), [o, a] = Ve("desktop"), [u, d] = Ve(null), f = ai(null), y = ai(null), c = t.fields.find((h) => h.id === n), m = (h, b) => {
    e((w) => ({
      ...w,
      fields: w.fields.map((E) => E.id === h ? { ...E, ...b } : E)
    }));
  }, S = (h) => {
    const b = {
      grid: { colSpan: 12, xs: 12, sm: 6, lg: 4 }
    };
    switch (h) {
      case "email":
        return {
          ...b,
          placeholder: "user@example.com",
          validation: [
            { type: "required", message: "Email is required" },
            { type: "email", message: "Invalid email format" }
          ]
        };
      case "url":
        return {
          ...b,
          placeholder: "https://example.com",
          validation: [{ type: "url", message: "Invalid URL format" }]
        };
      case "tel":
        return {
          ...b,
          placeholder: "+1 (555) 000-0000",
          inputMode: "tel"
        };
      case "number":
        return {
          ...b,
          placeholder: "0",
          inputMode: "numeric",
          step: 1
        };
      case "password":
        return {
          ...b,
          placeholder: "Enter password",
          minLength: 8,
          validation: [
            { type: "required", message: "Password is required" },
            {
              type: "minLength",
              value: 8,
              message: "Password must be at least 8 characters"
            }
          ]
        };
      case "textarea":
        return {
          ...b,
          rows: 4,
          resize: "vertical",
          grid: { colSpan: 12, xs: 12, sm: 12, lg: 12 }
        };
      case "autocomplete":
      case "select":
        return {
          ...b,
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" }
          ],
          clearable: !0,
          searchable: h === "autocomplete"
        };
      case "radio":
        return {
          ...b,
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" }
          ],
          direction: "vertical"
        };
      case "checkbox":
        return {
          ...b,
          checkboxLabel: "I agree to the terms and conditions"
        };
      case "switch":
        return {
          ...b,
          defaultValue: !1
        };
      case "file":
        return {
          ...b,
          accept: "image/*",
          maxSize: 5242880,
          // 5MB
          grid: { colSpan: 12, xs: 12, sm: 12, lg: 12 }
        };
      case "date":
        return {
          ...b,
          format: "MM/dd/yyyy"
        };
      case "time":
        return {
          ...b,
          timeFormat: "12h"
        };
      case "datetime":
        return {
          ...b,
          format: "MM/dd/yyyy HH:mm"
        };
      case "daterange":
        return {
          ...b,
          grid: { colSpan: 12, xs: 12, sm: 12, lg: 6 }
        };
      default:
        return b;
    }
  }, k = () => {
    const h = {
      id: `field_${t.fields.length + 1}`,
      name: `field_${t.fields.length + 1}`,
      label: "New Field",
      type: "text",
      ...S("text")
    };
    e((b) => ({ ...b, fields: [...b.fields, h] })), i(h.id);
  }, C = (h) => {
    e((b) => ({
      ...b,
      fields: b.fields.filter((w) => w.id !== h)
    })), n === h && i(null);
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "lg:col-span-3 bg-surface-50 border border-border rounded-lg p-4 flex flex-col h-full overflow-hidden", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ v.jsx("h2", { className: "font-semibold text-lg", children: "Fields" }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => {
              window.confirm(
                "This will replace your current form with the demo schema. Any unsaved changes will be lost. Continue?"
              ) && (e(rk), i(null));
            },
            title: "Load Full Feature Demo (Kitchen Sink)",
            className: "p-1.5 rounded transition-colors text-slate-500 hover:text-slate-600 hover:bg-surface-100",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /* @__PURE__ */ v.jsx("path", { d: "M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" })
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => {
              const h = JSON.stringify(t, null, 2);
              navigator.clipboard.writeText(h).then(() => {
                const b = document.getElementById("copy-schema-btn");
                if (b) {
                  const w = b.innerHTML;
                  b.innerHTML = "✓ Copied!", b.classList.add("bg-green-100", "text-green-600"), setTimeout(() => {
                    b.innerHTML = w, b.classList.remove("bg-green-100", "text-green-600");
                  }, 2e3);
                }
              });
            },
            id: "copy-schema-btn",
            title: "Copy Schema to Clipboard",
            className: "p-1.5 rounded transition-colors text-slate-500 hover:text-slate-600 hover:bg-surface-100",
            children: /* @__PURE__ */ v.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ v.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                  /* @__PURE__ */ v.jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => {
              const h = JSON.stringify(t, null, 2), b = new Blob([h], { type: "application/json" }), w = URL.createObjectURL(b), E = document.createElement("a");
              E.href = w, E.download = `form-schema-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(w);
            },
            title: "Download Schema as JSON",
            className: "p-1.5 rounded transition-colors text-slate-500 hover:text-slate-600 hover:bg-surface-100",
            children: /* @__PURE__ */ v.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ v.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                  /* @__PURE__ */ v.jsx("polyline", { points: "7 10 12 15 17 10" }),
                  /* @__PURE__ */ v.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => {
              document.getElementById("import-schema-input")?.click();
            },
            title: "Import Schema from JSON",
            className: "p-1.5 rounded transition-colors text-slate-500 hover:text-slate-600 hover:bg-surface-100",
            children: /* @__PURE__ */ v.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ v.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                  /* @__PURE__ */ v.jsx("polyline", { points: "17 8 12 3 7 8" }),
                  /* @__PURE__ */ v.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx(
          "input",
          {
            id: "import-schema-input",
            type: "file",
            accept: ".json,application/json",
            style: { display: "none" },
            onChange: (h) => {
              const b = h.target.files?.[0];
              if (b) {
                const w = new FileReader();
                w.onload = (E) => {
                  try {
                    const $ = JSON.parse(
                      E.target?.result
                    );
                    $ && $.fields ? (e($), i(null), alert("Schema imported successfully!")) : alert(
                      "Invalid schema format. Please ensure the JSON file contains a valid FormSchema."
                    );
                  } catch {
                    alert(
                      "Error parsing JSON file. Please ensure it is valid JSON."
                    );
                  }
                }, w.readAsText(b);
              }
              h.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => i(null),
            title: "Form Global Settings",
            className: `p-1.5 rounded transition-colors ${n === null ? "bg-primary-100 text-primary-600 dark:bg-primary-900/30" : "text-slate-500 hover:text-slate-600 hover:bg-surface-100"}`,
            children: /* @__PURE__ */ v.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ v.jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
                  /* @__PURE__ */ v.jsx("circle", { cx: "12", cy: "12", r: "3" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: k,
            title: "Add New Field",
            className: "p-1.5 rounded transition-colors bg-[var(--brand-secondary-orange)] text-white hover:opacity-90",
            children: /* @__PURE__ */ v.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ v.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                  /* @__PURE__ */ v.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
                ]
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "flex-1 overflow-y-auto space-y-2 pr-2", children: t.fields.map((h, b) => /* @__PURE__ */ v.jsxs(
        "div",
        {
          draggable: !0,
          onDragStart: (w) => {
            w.dataTransfer.setData("text/plain", b.toString()), w.dataTransfer.effectAllowed = "move";
          },
          onDragOver: (w) => {
            w.preventDefault(), w.dataTransfer.dropEffect = "move";
          },
          onDrop: (w) => {
            w.preventDefault();
            const E = parseInt(
              w.dataTransfer.getData("text/plain")
            ), $ = b;
            if (E === $) return;
            const D = [...t.fields], [T] = D.splice(E, 1);
            D.splice($, 0, T), e((O) => ({ ...O, fields: D }));
          },
          onClick: () => i(h.id),
          className: `
                        p-3 rounded border cursor-pointer transition-all relative group select-none
                        ${n === h.id ? "border-ring bg-primary-50 dark:bg-primary-900/10" : "border-border hover:border-ring/50"}
                    `,
          children: [
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ v.jsx("span", { className: "text-slate-400 cursor-grab active:cursor-grabbing", children: "⋮⋮" }),
              /* @__PURE__ */ v.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ v.jsx("div", { className: "font-medium text-sm truncate", children: h.label }),
                /* @__PURE__ */ v.jsx("div", { className: "text-xs text-slate-500 font-mono truncate", children: h.name })
              ] })
            ] }),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: (w) => {
                  w.stopPropagation(), C(h.id);
                },
                className: "absolute top-2 right-2 text-slate-400 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity",
                children: "×"
              }
            )
          ]
        },
        h.id
      )) })
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "lg:col-span-4 bg-surface-50 border border-border rounded-lg p-4 h-full overflow-y-auto", children: c ? /* @__PURE__ */ v.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-border", children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => i(null),
            className: "text-slate-500 hover:text-slate-600 transition-colors bg-surface-100 p-1.5 rounded border border-border shadow-sm md:hidden lg:block",
            title: "Back to Global Settings",
            children: /* @__PURE__ */ v.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ v.jsx("path", { d: "M19 12H5" }),
                  /* @__PURE__ */ v.jsx("path", { d: "M12 19l-7-7 7-7" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsx("h2", { className: "font-semibold text-lg", children: "Field Properties" }),
        /* @__PURE__ */ v.jsx("div", { className: "flex-1 text-right text-xs font-mono text-slate-400 truncate max-w-[120px]", children: c.name })
      ] }),
      /* @__PURE__ */ v.jsx(
        ne,
        {
          id: "prop-label",
          label: "Label",
          value: c.label,
          onChange: (h) => m(c.id, { label: h.target.value })
        }
      ),
      /* @__PURE__ */ v.jsx(
        ne,
        {
          id: "prop-name",
          label: "Field Name (Key)",
          value: c.name,
          onChange: (h) => m(c.id, {
            name: h.target.value,
            id: h.target.value
          })
        }
      ),
      /* @__PURE__ */ v.jsx(
        Qe,
        {
          id: "prop-revalidate",
          label: "Revalidate on value change",
          checked: c.validateOnChange || !1,
          onChange: (h) => m(c.id, {
            validateOnChange: h.target.checked
          })
        }
      ),
      c.type !== "file" && c.type !== "daterange" && /* @__PURE__ */ v.jsx(
        ne,
        {
          id: "prop-default",
          label: "Default Value",
          value: c.defaultValue || "",
          onChange: (h) => m(c.id, {
            defaultValue: h.target.value
          })
        }
      ),
      /* @__PURE__ */ v.jsx(
        ct,
        {
          id: "prop-type",
          label: "Type",
          options: ok,
          value: c.type,
          onChange: (h) => {
            const b = h, w = S(b);
            m(c.id, {
              type: b,
              ...w,
              // Preserve these critical fields
              id: c.id,
              name: c.name,
              label: c.label
            });
          }
        }
      ),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-2", children: [
        /* @__PURE__ */ v.jsx("div", { className: "text-xs font-semibold mb-2 text-slate-500", children: "Responsive Width (1-12)" }),
        /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-span",
              label: "Default",
              type: "number",
              min: 1,
              max: 12,
              value: c.grid?.colSpan || 12,
              onChange: (h) => {
                const b = parseInt(h.target.value);
                isNaN(b) || m(c.id, {
                  grid: { ...c.grid, colSpan: b }
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-xs",
              label: "Mobile (XS)",
              type: "number",
              min: 1,
              max: 12,
              placeholder: "Inherit",
              value: c.grid?.xs || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  grid: {
                    ...c.grid,
                    xs: isNaN(b) ? void 0 : b
                  }
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-sm",
              label: "Tablet (SM)",
              type: "number",
              min: 1,
              max: 12,
              placeholder: "Inherit",
              value: c.grid?.sm || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  grid: {
                    ...c.grid,
                    sm: isNaN(b) ? void 0 : b
                  }
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-lg",
              label: "Desktop (LG)",
              type: "number",
              min: 1,
              max: 12,
              placeholder: "Inherit",
              value: c.grid?.lg || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  grid: {
                    ...c.grid,
                    lg: isNaN(b) ? void 0 : b
                  }
                });
              }
            }
          )
        ] })
      ] }),
      (c.type === "text" || c.type === "email" || c.type === "url" || c.type === "tel" || c.type === "number" || c.type === "password" || c.type === "textarea" || c.type === "autocomplete" || c.type === "select") && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2", children: "Field Options" }),
        /* @__PURE__ */ v.jsx(
          ne,
          {
            id: "prop-placeholder",
            label: "Placeholder",
            value: c.placeholder || "",
            onChange: (h) => m(c.id, { placeholder: h.target.value })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ts,
          {
            id: "prop-helper-text",
            label: "Helper Text",
            placeholder: "Additional help text shown below the field",
            rows: 2,
            value: c.helperText || "",
            onChange: (h) => m(c.id, { helperText: h.target.value })
          }
        ),
        (c.type === "text" || c.type === "email" || c.type === "url" || c.type === "tel" || c.type === "password" || c.type === "textarea") && /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4 mt-2", children: [
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-min-length",
              label: "Min Length",
              type: "number",
              min: 0,
              value: c.minLength || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  minLength: isNaN(b) ? void 0 : b
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-max-length",
              label: "Max Length",
              type: "number",
              min: 0,
              value: c.maxLength || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  maxLength: isNaN(b) ? void 0 : b
                });
              }
            }
          )
        ] }),
        c.type === "number" && /* @__PURE__ */ v.jsx("div", { className: "space-y-2 mt-2", children: /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-min",
              label: "Min Value",
              type: "number",
              value: c.min !== void 0 ? c.min : "",
              onChange: (h) => {
                const b = parseFloat(h.target.value);
                m(c.id, {
                  min: isNaN(b) ? void 0 : b
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-max",
              label: "Max Value",
              type: "number",
              value: c.max !== void 0 ? c.max : "",
              onChange: (h) => {
                const b = parseFloat(h.target.value);
                m(c.id, {
                  max: isNaN(b) ? void 0 : b
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-step",
              label: "Step",
              type: "number",
              value: c.step !== void 0 ? c.step : "",
              onChange: (h) => {
                const b = parseFloat(h.target.value);
                m(c.id, {
                  step: isNaN(b) ? void 0 : b
                });
              }
            }
          )
        ] }) }),
        (c.type === "text" || c.type === "email" || c.type === "url" || c.type === "tel" || c.type === "number") && /* @__PURE__ */ v.jsx(
          ct,
          {
            id: "prop-input-mode",
            label: "Input Mode (Mobile Keyboard)",
            options: [
              { label: "Default", value: "default" },
              { label: "Text", value: "text" },
              { label: "Numeric", value: "numeric" },
              { label: "Decimal", value: "decimal" },
              { label: "Tel", value: "tel" },
              { label: "Email", value: "email" },
              { label: "URL", value: "url" },
              { label: "Search", value: "search" }
            ],
            value: c.inputMode || "default",
            onChange: (h) => m(c.id, {
              inputMode: h === "default" ? void 0 : h
            })
          }
        ),
        (c.type === "text" || c.type === "email" || c.type === "url" || c.type === "tel" || c.type === "number" || c.type === "password") && /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4 mt-2", children: [
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-start-adorn",
              label: "Start Icon/Text",
              value: c.startAdornment || "",
              onChange: (h) => m(c.id, {
                startAdornment: h.target.value
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-end-adorn",
              label: "End Icon/Text",
              value: c.endAdornment || "",
              onChange: (h) => m(c.id, {
                endAdornment: h.target.value
              })
            }
          )
        ] }),
        c.type === "textarea" && /* @__PURE__ */ v.jsxs("div", { className: "mt-2 space-y-2", children: [
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-rows",
              label: "Initial Rows",
              type: "number",
              value: c.rows || "",
              onChange: (h) => m(c.id, {
                rows: parseInt(h.target.value) || void 0
              })
            }
          ),
          /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-min-rows",
                label: "Min Lines",
                type: "number",
                value: c.minRows || "",
                onChange: (h) => m(c.id, {
                  minRows: parseInt(h.target.value) || void 0
                })
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-max-rows",
                label: "Max Lines",
                type: "number",
                value: c.maxRows || "",
                onChange: (h) => m(c.id, {
                  maxRows: parseInt(h.target.value) || void 0
                })
              }
            )
          ] }),
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-resize",
              label: "Resize Handle",
              options: [
                { label: "None (Fixed)", value: "none" },
                { label: "Vertical", value: "vertical" },
                { label: "Horizontal", value: "horizontal" },
                { label: "Both", value: "both" }
              ],
              value: c.resize || "none",
              onChange: (h) => m(c.id, {
                resize: h
              })
            }
          )
        ] }),
        (c.type === "autocomplete" || c.type === "select") && /* @__PURE__ */ v.jsxs("div", { className: "mt-2 space-y-3", children: [
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-multiple",
              label: "Multiple Selection",
              checked: c.multiple || !1,
              onChange: (h) => m(c.id, {
                multiple: h.target.checked
              })
            }
          ),
          c.type === "autocomplete" && /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-async",
              label: "Async Data URL",
              placeholder: "https://api.example.com/search",
              value: c.asyncUrl || "",
              onChange: (h) => m(c.id, {
                asyncUrl: h.target.value
              })
            }
          )
        ] })
      ] }),
      (c.type === "date" || c.type === "time" || c.type === "datetime" || c.type === "daterange") && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2", children: "Date/Time Settings" }),
        /* @__PURE__ */ v.jsx(
          ne,
          {
            id: "prop-format",
            label: "Format Pattern",
            placeholder: "e.g. dd/MM/yyyy HH:mm",
            value: c.format || "",
            onChange: (h) => m(c.id, { format: h.target.value })
          }
        )
      ] }),
      c.type === "file" && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2", children: "File Settings" }),
        /* @__PURE__ */ v.jsx(
          ne,
          {
            id: "prop-accept",
            label: "Accepted Types",
            placeholder: ".jpg,.png,image/*",
            value: c.accept || "",
            onChange: (h) => m(c.id, { accept: h.target.value })
          }
        ),
        /* @__PURE__ */ v.jsx("div", { className: "mt-2", children: /* @__PURE__ */ v.jsx(
          ne,
          {
            id: "prop-maxsize",
            label: "Max Size (MB)",
            type: "number",
            value: c.maxSize ? c.maxSize / (1024 * 1024) : "",
            onChange: (h) => {
              const b = parseFloat(h.target.value);
              m(c.id, {
                maxSize: isNaN(b) ? void 0 : b * 1024 * 1024
              });
            }
          }
        ) })
      ] }),
      c.type === "radio" && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2 text-slate-500 uppercase tracking-wider", children: "Orientation (Responsive)" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-direction-xs",
              label: "Mobile (Base)",
              options: [
                { label: "Vertical", value: "vertical" },
                { label: "Horizontal", value: "horizontal" }
              ],
              value: c.direction && typeof c.direction == "string" ? c.direction : c.direction?.xs || "vertical",
              onChange: (h) => {
                typeof c.direction == "string" ? m(c.id, {
                  direction: { xs: h }
                }) : m(c.id, {
                  direction: {
                    ...c.direction,
                    xs: h
                  }
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-direction-sm",
              label: "Tablet (SM)",
              options: [
                { label: "Inherit", value: "default" },
                { label: "Vertical", value: "vertical" },
                { label: "Horizontal", value: "horizontal" }
              ],
              value: typeof c.direction == "object" && c.direction?.sm || "default",
              onChange: (h) => {
                const b = typeof c.direction == "object" ? c.direction : {
                  xs: c.direction || "vertical"
                };
                m(c.id, {
                  direction: {
                    ...b,
                    sm: h === "default" ? void 0 : h
                  }
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-direction-lg",
              label: "Desktop (LG)",
              options: [
                { label: "Inherit", value: "default" },
                { label: "Vertical", value: "vertical" },
                { label: "Horizontal", value: "horizontal" }
              ],
              value: typeof c.direction == "object" && c.direction?.lg || "default",
              onChange: (h) => {
                const b = typeof c.direction == "object" ? c.direction : {
                  xs: c.direction || "vertical"
                };
                m(c.id, {
                  direction: {
                    ...b,
                    lg: h === "default" ? void 0 : h
                  }
                });
              }
            }
          )
        ] })
      ] }),
      (c.type === "select" || c.type === "radio" || c.type === "autocomplete") && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2", children: "Options" }),
        /* @__PURE__ */ v.jsx("div", { className: "text-[10px] text-slate-500 mb-2", children: "Format: Label:Value (one per line)" }),
        /* @__PURE__ */ v.jsx(
          Ts,
          {
            id: "prop-options",
            label: "Defined Options",
            rows: 5,
            placeholder: `Option 1:opt1
Option 2:opt2`,
            value: c.options?.map((h) => `${h.label}:${h.value}`).join(`
`) || "",
            onChange: (h) => {
              const w = h.target.value.split(`
`).map((E) => {
                if (!E.trim()) return null;
                const $ = E.split(":"), D = $[0].trim(), T = $.length > 1 ? $.slice(1).join(":").trim() : D;
                return { label: D, value: T };
              }).filter((E) => !!E);
              m(c.id, { options: w });
            }
          }
        )
      ] }),
      c.type === "file" && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2 text-slate-500 uppercase tracking-wider", children: "File Upload Settings" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-accept",
              label: "Accepted File Types",
              placeholder: "e.g. image/*, .pdf, .doc",
              value: c.accept || "",
              onChange: (h) => m(c.id, { accept: h.target.value })
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-max-size",
              label: "Max File Size (bytes)",
              type: "number",
              placeholder: "e.g. 5242880 (5MB)",
              value: c.maxSize || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  maxSize: isNaN(b) ? void 0 : b
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-multiple-files",
              label: "Allow Multiple Files",
              checked: c.multiple || !1,
              onChange: (h) => m(c.id, {
                multiple: h.target.checked
              })
            }
          ),
          c.multiple && /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-max-files",
              label: "Max Number of Files",
              type: "number",
              min: 1,
              value: c.maxFiles || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  maxFiles: isNaN(b) ? void 0 : b
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-preview-mode",
              label: "Preview Mode",
              options: [
                { label: "List", value: "list" },
                { label: "Grid", value: "grid" },
                { label: "Compact", value: "compact" }
              ],
              value: c.previewMode || "list",
              onChange: (h) => m(c.id, { previewMode: h })
            }
          )
        ] })
      ] }),
      (c.type === "autocomplete" || c.type === "select") && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2 text-slate-500 uppercase tracking-wider", children: "Advanced Select Settings" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-searchable",
              label: "Searchable",
              checked: c.searchable !== !1,
              onChange: (h) => m(c.id, {
                searchable: h.target.checked
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-clearable",
              label: "Clearable",
              checked: c.clearable || !1,
              onChange: (h) => m(c.id, {
                clearable: h.target.checked
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-multiple",
              label: "Multiple Selection",
              checked: c.multiple || !1,
              onChange: (h) => m(c.id, {
                multiple: h.target.checked
              })
            }
          ),
          c.type === "autocomplete" && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(
              Qe,
              {
                id: "prop-creatable",
                label: "Allow Creating New Options",
                checked: c.creatable || !1,
                onChange: (h) => m(c.id, {
                  creatable: h.target.checked
                })
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-async-url",
                label: "Async Data URL",
                placeholder: "https://api.example.com/options",
                value: c.asyncUrl || "",
                onChange: (h) => m(c.id, {
                  asyncUrl: h.target.value
                })
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-loading-text",
                label: "Loading Text",
                placeholder: "Loading...",
                value: c.loadingText || "",
                onChange: (h) => m(c.id, {
                  loadingText: h.target.value
                })
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-no-options-text",
                label: "No Options Text",
                placeholder: "No options available",
                value: c.noOptionsText || "",
                onChange: (h) => m(c.id, {
                  noOptionsText: h.target.value
                })
              }
            )
          ] })
        ] })
      ] }),
      (c.type === "date" || c.type === "time" || c.type === "datetime" || c.type === "daterange") && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2 text-slate-500 uppercase tracking-wider", children: "Date/Time Settings" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
          (c.type === "date" || c.type === "datetime" || c.type === "daterange") && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-date-format",
                label: "Date Format",
                placeholder: "MM/dd/yyyy",
                value: c.dateFormat || c.format || "",
                onChange: (h) => m(c.id, {
                  dateFormat: h.target.value
                })
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-min-date",
                label: "Min Date (ISO)",
                type: "date",
                value: c.minDate || "",
                onChange: (h) => m(c.id, {
                  minDate: h.target.value
                })
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-max-date",
                label: "Max Date (ISO)",
                type: "date",
                value: c.maxDate || "",
                onChange: (h) => m(c.id, {
                  maxDate: h.target.value
                })
              }
            )
          ] }),
          (c.type === "time" || c.type === "datetime") && /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-time-format",
              label: "Time Format",
              options: [
                { label: "12 Hour", value: "12h" },
                { label: "24 Hour", value: "24h" }
              ],
              value: c.timeFormat || "12h",
              onChange: (h) => m(c.id, { timeFormat: h })
            }
          )
        ] })
      ] }),
      c.type === "textarea" && /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2 text-slate-500 uppercase tracking-wider", children: "Textarea Settings" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-auto-grow",
              label: "Auto-grow Height",
              checked: c.autoGrow || !1,
              onChange: (h) => m(c.id, {
                autoGrow: h.target.checked
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-show-char-count",
              label: "Show Character Count",
              checked: c.showCharCount || !1,
              onChange: (h) => m(c.id, {
                showCharCount: h.target.checked
              })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4 space-y-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm", children: "Validation" }),
        /* @__PURE__ */ v.jsx(
          Qe,
          {
            id: "prop-req",
            label: "Required",
            checked: c.validation?.some((h) => h.type === "required") || !1,
            onChange: (h) => {
              const b = h.target.checked, w = c.validation || [];
              b ? m(c.id, {
                validation: [
                  ...w,
                  {
                    type: "required",
                    message: `${c.label || c.name} is required`
                  }
                ]
              }) : m(c.id, {
                validation: w.filter((E) => E.type !== "required")
              });
            }
          }
        ),
        c.validation?.some((h) => h.type === "required") && /* @__PURE__ */ v.jsx("div", { className: "mt-2 ml-1 pl-3 border-l-2 border-border", children: /* @__PURE__ */ v.jsx(
          ne,
          {
            id: "prop-req-msg",
            label: "Error Message",
            placeholder: "e.g. This field is required",
            className: "text-sm",
            value: c.validation?.find((h) => h.type === "required")?.message || "",
            onChange: (h) => {
              const b = h.target.value, w = (c.validation || []).map(
                (E) => E.type === "required" ? { ...E, message: b } : E
              );
              m(c.id, { validation: w });
            }
          }
        ) }),
        c.type !== "checkbox" && c.type !== "switch" && /* @__PURE__ */ v.jsx(
          Qe,
          {
            id: "prop-clearable",
            label: "Show Clear Button",
            checked: c.clearable || !1,
            onChange: (h) => m(c.id, {
              clearable: h.target.checked
            })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Qe,
          {
            id: "prop-disabled",
            label: "Disabled",
            checked: c.disabled || !1,
            onChange: (h) => m(c.id, {
              disabled: h.target.checked
            })
          }
        ),
        /* @__PURE__ */ v.jsx(
          Qe,
          {
            id: "prop-readonly",
            label: "Read Only",
            checked: c.readOnly || !1,
            onChange: (h) => m(c.id, {
              readOnly: h.target.checked
            })
          }
        ),
        c.type === "file" && /* @__PURE__ */ v.jsxs("div", { className: "space-y-4 pt-2 border-t border-border mt-2", children: [
          /* @__PURE__ */ v.jsx("h4", { className: "text-xs font-medium text-slate-500 uppercase tracking-wider", children: "File Settings" }),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-accept",
              label: "Accepted File Types",
              placeholder: "e.g. .pdf, .jpg, image/*",
              value: c.accept || "",
              onChange: (h) => m(c.id, {
                accept: h.target.value
              })
            }
          ),
          /* @__PURE__ */ v.jsx("p", { className: "mt-1 text-[10px] text-slate-500", children: "Comma-separated list of file extensions or MIME types" }),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-max-size",
              label: "Max File Size (Bytes)",
              type: "number",
              placeholder: "e.g. 1048576 (1MB)",
              value: c.maxSize || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  maxSize: isNaN(b) ? void 0 : b
                });
              }
            }
          ),
          c.maxSize && /* @__PURE__ */ v.jsxs("p", { className: "text-[10px] text-slate-500", children: [
            "Equals ",
            (c.maxSize / 1024 / 1024).toFixed(2),
            " MB"
          ] })
        ] }),
        (c.type === "text" || c.type === "textarea" || c.type === "password" || c.type === "email" || c.type === "url" || c.type === "tel") && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx(
                ne,
                {
                  id: "prop-min",
                  label: "Min Length",
                  type: "number",
                  value: c.validation?.find(
                    (h) => h.type === "minLength"
                  )?.value || "",
                  onChange: (h) => {
                    const b = parseInt(h.target.value), w = (c.validation || []).filter(
                      ($) => $.type !== "minLength"
                    ), E = c.validation?.find(
                      ($) => $.type === "minLength"
                    );
                    if (!isNaN(b)) {
                      const $ = E?.message || `${c.label || c.name} must be at least ${b} characters`;
                      w.push({
                        type: "minLength",
                        value: b,
                        message: $
                      });
                    }
                    m(c.id, { validation: w });
                  }
                }
              ),
              c.validation?.some(
                (h) => h.type === "minLength"
              ) && /* @__PURE__ */ v.jsx("div", { className: "mt-1", children: /* @__PURE__ */ v.jsx(
                ne,
                {
                  id: "prop-min-msg",
                  label: "Error Message",
                  placeholder: "Error Message",
                  className: "text-xs",
                  value: c.validation?.find(
                    (h) => h.type === "minLength"
                  )?.message || "",
                  onChange: (h) => {
                    const b = h.target.value, w = (c.validation || []).map(
                      (E) => E.type === "minLength" ? { ...E, message: b } : E
                    );
                    m(c.id, {
                      validation: w
                    });
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx(
                ne,
                {
                  id: "prop-max",
                  label: "Max Length",
                  type: "number",
                  value: c.validation?.find(
                    (h) => h.type === "maxLength"
                  )?.value || "",
                  onChange: (h) => {
                    const b = parseInt(h.target.value), w = (c.validation || []).filter(
                      ($) => $.type !== "maxLength"
                    ), E = c.validation?.find(
                      ($) => $.type === "maxLength"
                    );
                    if (!isNaN(b)) {
                      const $ = E?.message || `${c.label || c.name} must be at most ${b} characters`;
                      w.push({
                        type: "maxLength",
                        value: b,
                        message: $
                      });
                    }
                    m(c.id, { validation: w });
                  }
                }
              ),
              c.validation?.some(
                (h) => h.type === "maxLength"
              ) && /* @__PURE__ */ v.jsx("div", { className: "mt-1", children: /* @__PURE__ */ v.jsx(
                ne,
                {
                  id: "prop-max-msg",
                  label: "Error Message",
                  placeholder: "Error Message",
                  className: "text-xs",
                  value: c.validation?.find(
                    (h) => h.type === "maxLength"
                  )?.message || "",
                  onChange: (h) => {
                    const b = h.target.value, w = (c.validation || []).map(
                      (E) => E.type === "maxLength" ? { ...E, message: b } : E
                    );
                    m(c.id, {
                      validation: w
                    });
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx(
                ne,
                {
                  id: "prop-length",
                  label: "Exact Length",
                  type: "number",
                  value: c.validation?.find(
                    (h) => h.type === "length"
                  )?.value || "",
                  onChange: (h) => {
                    const b = parseInt(h.target.value), w = (c.validation || []).filter(
                      ($) => $.type !== "length"
                    ), E = c.validation?.find(
                      ($) => $.type === "length"
                    );
                    if (!isNaN(b)) {
                      const $ = E?.message || `${c.label || c.name} must be exactly ${b} characters`;
                      w.push({
                        type: "length",
                        value: b,
                        message: $
                      });
                    }
                    m(c.id, { validation: w });
                  }
                }
              ),
              c.validation?.some(
                (h) => h.type === "length"
              ) && /* @__PURE__ */ v.jsx("div", { className: "mt-1", children: /* @__PURE__ */ v.jsx(
                ne,
                {
                  id: "prop-length-msg",
                  label: "Error Message",
                  placeholder: "Error Message",
                  className: "text-xs",
                  value: c.validation?.find(
                    (h) => h.type === "length"
                  )?.message || "",
                  onChange: (h) => {
                    const b = h.target.value, w = (c.validation || []).map(
                      (E) => E.type === "length" ? { ...E, message: b } : E
                    );
                    m(c.id, {
                      validation: w
                    });
                  }
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: "space-y-4 pt-2", children: [
            /* @__PURE__ */ v.jsx(
              ct,
              {
                id: "prop-regex-preset",
                label: "Regex Preset",
                options: ta,
                value: (() => {
                  const h = c.validation?.find(
                    (w) => w.type === "pattern"
                  )?.value;
                  if (!h) return "";
                  const b = ta.find(
                    (w) => w.value === h
                  );
                  return b ? b.value : "custom";
                })(),
                onChange: (h) => {
                  const b = (c.validation || []).filter(
                    (w) => w.type !== "pattern"
                  );
                  h && h !== "custom" && b.push({
                    type: "pattern",
                    value: h,
                    message: `${c.label || c.name} format is invalid`
                  }), m(c.id, { validation: b });
                }
              }
            ),
            (c.validation?.some(
              (h) => h.type === "pattern"
            ) || !ta.find(
              (h) => h.value === c.validation?.find(
                (b) => b.type === "pattern"
              )?.value
            ) || // Or if they specifically selected custom but haven't typed yet
            !1) && /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-regex",
                label: "Raw Regex Pattern",
                placeholder: "e.g. ^[0-9]*$",
                value: c.validation?.find(
                  (h) => h.type === "pattern"
                )?.value || "",
                onChange: (h) => {
                  const b = h.target.value, w = (c.validation || []).filter(
                    (E) => E.type !== "pattern"
                  );
                  b && w.push({
                    type: "pattern",
                    value: b,
                    message: `${c.label || c.name} format is invalid`
                  }), m(c.id, { validation: w });
                }
              }
            ),
            c.validation?.some(
              (h) => h.type === "pattern"
            ) && /* @__PURE__ */ v.jsxs("div", { className: "pt-2 space-y-2", children: [
              /* @__PURE__ */ v.jsx(
                ne,
                {
                  id: "prop-regex-msg",
                  label: "Pattern Error Message",
                  placeholder: "e.g. Invalid format",
                  value: c.validation?.find(
                    (h) => h.type === "pattern"
                  )?.message || "",
                  onChange: (h) => {
                    const b = h.target.value, w = (c.validation || []).map(
                      (E) => E.type === "pattern" ? { ...E, message: b } : E
                    );
                    m(c.id, { validation: w });
                  }
                }
              ),
              /* @__PURE__ */ v.jsx(
                Qe,
                {
                  id: "prop-restrict",
                  label: "Restrict Input (Block invalid keys)",
                  checked: c.restrictInput || !1,
                  onChange: (h) => m(c.id, {
                    restrictInput: h.target.checked
                  })
                }
              )
            ] })
          ] })
        ] }),
        c.type === "number" && /* @__PURE__ */ v.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-min-val",
                label: "Min Value",
                type: "number",
                value: c.validation?.find((h) => h.type === "min")?.value || "",
                onChange: (h) => {
                  const b = parseFloat(h.target.value), w = (c.validation || []).filter(
                    ($) => $.type !== "min"
                  ), E = c.validation?.find(
                    ($) => $.type === "min"
                  );
                  if (!isNaN(b)) {
                    const $ = E?.message || `${c.label || c.name} must be at least ${b}`;
                    w.push({
                      type: "min",
                      value: b,
                      message: $
                    });
                  }
                  m(c.id, { validation: w });
                }
              }
            ),
            c.validation?.some((h) => h.type === "min") && /* @__PURE__ */ v.jsx("div", { className: "mt-1", children: /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-min-val-msg",
                label: "Error Message",
                placeholder: "Error Message",
                className: "text-xs",
                value: c.validation?.find(
                  (h) => h.type === "min"
                )?.message || "",
                onChange: (h) => {
                  const b = h.target.value, w = (c.validation || []).map(
                    (E) => E.type === "min" ? { ...E, message: b } : E
                  );
                  m(c.id, { validation: w });
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-max-val",
                label: "Max Value",
                type: "number",
                value: c.validation?.find((h) => h.type === "max")?.value || "",
                onChange: (h) => {
                  const b = parseFloat(h.target.value), w = (c.validation || []).filter(
                    ($) => $.type !== "max"
                  ), E = c.validation?.find(
                    ($) => $.type === "max"
                  );
                  if (!isNaN(b)) {
                    const $ = E?.message || `${c.label || c.name} must be at most ${b}`;
                    w.push({
                      type: "max",
                      value: b,
                      message: $
                    });
                  }
                  m(c.id, { validation: w });
                }
              }
            ),
            c.validation?.some((h) => h.type === "max") && /* @__PURE__ */ v.jsx("div", { className: "mt-1", children: /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-max-val-msg",
                label: "Error Message",
                placeholder: "Error Message",
                className: "text-xs",
                value: c.validation?.find(
                  (h) => h.type === "max"
                )?.message || "",
                onChange: (h) => {
                  const b = h.target.value, w = (c.validation || []).map(
                    (E) => E.type === "max" ? { ...E, message: b } : E
                  );
                  m(c.id, { validation: w });
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-step",
                label: "Step / Multiple Of",
                type: "number",
                value: c.validation?.find((h) => h.type === "step")?.value || "",
                onChange: (h) => {
                  const b = parseFloat(h.target.value), w = (c.validation || []).filter(
                    ($) => $.type !== "step"
                  ), E = c.validation?.find(
                    ($) => $.type === "step"
                  );
                  if (!isNaN(b)) {
                    const $ = E?.message || `${c.label || c.name} must be a multiple of ${b}`;
                    w.push({
                      type: "step",
                      value: b,
                      message: $
                    });
                  }
                  m(c.id, { validation: w });
                }
              }
            ),
            c.validation?.some((h) => h.type === "step") && /* @__PURE__ */ v.jsx("div", { className: "mt-1", children: /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "prop-step-msg",
                label: "Error Message",
                placeholder: "Error Message",
                className: "text-xs",
                value: c.validation?.find(
                  (h) => h.type === "step"
                )?.message || "",
                onChange: (h) => {
                  const b = h.target.value, w = (c.validation || []).map(
                    (E) => E.type === "step" ? { ...E, message: b } : E
                  );
                  m(c.id, { validation: w });
                }
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2 text-slate-500 uppercase tracking-wider", children: "UI Customization" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-variant",
              label: "Input Variant",
              options: [
                { label: "Default", value: "default" },
                { label: "Outlined", value: "outlined" },
                { label: "Filled", value: "filled" },
                { label: "Standard", value: "standard" }
              ],
              value: c.variant || "default",
              onChange: (h) => m(c.id, {
                variant: h === "default" ? void 0 : h
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-size",
              label: "Input Size",
              options: [
                { label: "Default", value: "default" },
                { label: "Small", value: "small" },
                { label: "Medium", value: "medium" },
                { label: "Large", value: "large" }
              ],
              value: c.size || "default",
              onChange: (h) => m(c.id, {
                size: h === "default" ? void 0 : h
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-color",
              label: "Color Theme",
              options: [
                { label: "Default", value: "default" },
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
                { label: "Success", value: "success" },
                { label: "Error", value: "error" },
                { label: "Warning", value: "warning" },
                { label: "Info", value: "info" }
              ],
              value: c.color || "default",
              onChange: (h) => m(c.id, {
                color: h === "default" ? void 0 : h
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-dense",
              label: "Dense/Compact Spacing",
              checked: c.dense || !1,
              onChange: (h) => m(c.id, { dense: h.target.checked })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-full-width",
              label: "Full Width",
              checked: c.fullWidth !== !1,
              onChange: (h) => m(c.id, { fullWidth: h.target.checked })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm mb-2 text-slate-500 uppercase tracking-wider", children: "State & Behavior" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-disabled",
              label: "Disabled",
              checked: c.disabled || !1,
              onChange: (h) => m(c.id, { disabled: h.target.checked })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-readonly",
              label: "Read Only",
              checked: c.readOnly || !1,
              onChange: (h) => m(c.id, { readOnly: h.target.checked })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-autofocus",
              label: "Auto Focus on Mount",
              checked: c.autoFocus || !1,
              onChange: (h) => m(c.id, { autoFocus: h.target.checked })
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-validate-blur",
              label: "Validate on Blur",
              checked: c.validateOnBlur || !1,
              onChange: (h) => m(c.id, {
                validateOnBlur: h.target.checked
              })
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-debounce",
              label: "Debounce Validation (ms)",
              type: "number",
              min: 0,
              placeholder: "e.g. 300",
              value: c.debounceValidation || "",
              onChange: (h) => {
                const b = parseInt(h.target.value);
                m(c.id, {
                  debounceValidation: isNaN(b) ? void 0 : b
                });
              }
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "prop-tooltip",
              label: "Tooltip Text",
              placeholder: "Helpful tooltip for users",
              value: c.tooltip || "",
              onChange: (h) => m(c.id, { tooltip: h.target.value })
            }
          ),
          /* @__PURE__ */ v.jsx(
            ct,
            {
              id: "prop-transform",
              label: "Text Transform",
              options: [
                { label: "None", value: "default" },
                { label: "Uppercase", value: "uppercase" },
                { label: "Lowercase", value: "lowercase" },
                { label: "Capitalize", value: "capitalize" }
              ],
              value: c.transform || "default",
              onChange: (h) => m(c.id, {
                transform: h === "default" ? void 0 : h
              })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4 space-y-4", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm", children: "Visibility (Show when...)" }),
          /* @__PURE__ */ v.jsx(
            Qe,
            {
              id: "prop-reserve-space",
              label: "Reserve Space",
              checked: c.reserveSpace || !1,
              onChange: (h) => m(c.id, {
                reserveSpace: h.target.checked
              })
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "space-y-3", children: c.visibilityRules?.map((h, b) => /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: "p-3 bg-surface-100 dark:bg-slate-800 rounded-lg border border-border space-y-3 relative group",
            children: [
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  onClick: () => {
                    const w = [
                      ...c.visibilityRules || []
                    ];
                    w.splice(b, 1), m(c.id, {
                      visibilityRules: w
                    });
                  },
                  className: "absolute top-2 right-2 text-slate-400 hover:text-red-500",
                  children: "×"
                }
              ),
              /* @__PURE__ */ v.jsx(
                ct,
                {
                  id: `rule-field-${b}`,
                  label: "Depends on field",
                  options: t.fields.filter((w) => w.id !== c.id).map((w) => ({
                    label: w.label || w.name,
                    value: w.name
                  })),
                  value: h.field,
                  onChange: (w) => {
                    const E = [
                      ...c.visibilityRules || []
                    ];
                    E[b] = { ...h, field: w }, m(c.id, {
                      visibilityRules: E
                    });
                  }
                }
              ),
              /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ v.jsx(
                  ct,
                  {
                    id: `rule-op-${b}`,
                    label: "Operator",
                    options: na,
                    value: h.operator,
                    onChange: (w) => {
                      const E = [
                        ...c.visibilityRules || []
                      ];
                      E[b] = { ...h, operator: w }, m(c.id, {
                        visibilityRules: E
                      });
                    }
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  ne,
                  {
                    id: `rule-val-${b}`,
                    label: "Value",
                    value: String(h.value),
                    onChange: (w) => {
                      const E = [
                        ...c.visibilityRules || []
                      ];
                      let $ = w.target.value;
                      $ === "true" && ($ = !0), $ === "false" && ($ = !1), !isNaN(Number($)) && $ !== "" && ($ = Number($)), E[b] = { ...h, value: $ }, m(c.id, {
                        visibilityRules: E
                      });
                    }
                  }
                )
              ] })
            ]
          },
          b
        )) }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            className: "w-full py-2 border-2 border-dashed border-border rounded-lg text-xs text-slate-500 hover:border-primary-500 hover:text-primary-600 transition-all flex items-center justify-center gap-2",
            onClick: () => {
              const h = t.fields.filter(
                (w) => w.id !== c.id
              );
              if (h.length === 0) return;
              const b = {
                field: h[0].name,
                operator: "eq",
                value: "true"
              };
              m(c.id, {
                visibilityRules: [
                  ...c.visibilityRules || [],
                  b
                ]
              });
            },
            children: /* @__PURE__ */ v.jsx("span", { children: "+ Add Visibility Rule" })
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4 space-y-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm", children: "Disable (Disable when...)" }),
        /* @__PURE__ */ v.jsx("div", { className: "space-y-3", children: c.disableRules?.map((h, b) => /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: "p-3 bg-surface-100 dark:bg-slate-800 rounded-lg border border-border space-y-3 relative group",
            children: [
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  onClick: () => {
                    const w = [...c.disableRules || []];
                    w.splice(b, 1), m(c.id, {
                      disableRules: w
                    });
                  },
                  className: "absolute top-2 right-2 text-slate-400 hover:text-red-500",
                  children: "×"
                }
              ),
              /* @__PURE__ */ v.jsx(
                ct,
                {
                  id: `disable-rule-field-${b}`,
                  label: "Depends on field",
                  options: t.fields.filter((w) => w.id !== c.id).map((w) => ({
                    label: w.label || w.name,
                    value: w.name
                  })),
                  value: h.field,
                  onChange: (w) => {
                    const E = [...c.disableRules || []];
                    E[b] = { ...h, field: w }, m(c.id, {
                      disableRules: E
                    });
                  }
                }
              ),
              /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ v.jsx(
                  ct,
                  {
                    id: `disable-rule-op-${b}`,
                    label: "Operator",
                    options: na,
                    value: h.operator,
                    onChange: (w) => {
                      const E = [
                        ...c.disableRules || []
                      ];
                      E[b] = { ...h, operator: w }, m(c.id, {
                        disableRules: E
                      });
                    }
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  ne,
                  {
                    id: `disable-rule-val-${b}`,
                    label: "Value",
                    value: String(h.value),
                    onChange: (w) => {
                      const E = [
                        ...c.disableRules || []
                      ];
                      let $ = w.target.value;
                      $ === "true" && ($ = !0), $ === "false" && ($ = !1), !isNaN(Number($)) && $ !== "" && ($ = Number($)), E[b] = { ...h, value: $ }, m(c.id, {
                        disableRules: E
                      });
                    }
                  }
                )
              ] })
            ]
          },
          b
        )) }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            className: "w-full py-2 border-2 border-dashed border-border rounded-lg text-xs text-slate-500 hover:border-primary-500 hover:text-primary-600 transition-all flex items-center justify-center gap-2",
            onClick: () => {
              const h = t.fields.filter(
                (w) => w.id !== c.id
              );
              if (h.length === 0) return;
              const b = {
                field: h[0].name,
                operator: "eq",
                value: "true"
              };
              m(c.id, {
                disableRules: [
                  ...c.disableRules || [],
                  b
                ]
              });
            },
            children: /* @__PURE__ */ v.jsx("span", { children: "+ Add Disable Rule" })
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t border-border mt-4 space-y-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm", children: "Clear Value (Clear when...)" }),
        /* @__PURE__ */ v.jsx("div", { className: "space-y-3", children: c.clearValueRules?.map((h, b) => /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: "p-3 bg-surface-100 dark:bg-slate-800 rounded-lg border border-border space-y-3 relative group",
            children: [
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  onClick: () => {
                    const w = [
                      ...c.clearValueRules || []
                    ];
                    w.splice(b, 1), m(c.id, {
                      clearValueRules: w
                    });
                  },
                  className: "absolute top-2 right-2 text-slate-400 hover:text-red-500",
                  children: "×"
                }
              ),
              /* @__PURE__ */ v.jsx(
                ct,
                {
                  id: `clear-rule-field-${b}`,
                  label: "Depends on field",
                  options: t.fields.filter((w) => w.id !== c.id).map((w) => ({
                    label: w.label || w.name,
                    value: w.name
                  })),
                  value: h.field,
                  onChange: (w) => {
                    const E = [
                      ...c.clearValueRules || []
                    ];
                    E[b] = { ...h, field: w }, m(c.id, {
                      clearValueRules: E
                    });
                  }
                }
              ),
              /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ v.jsx(
                  ct,
                  {
                    id: `clear-rule-op-${b}`,
                    label: "Operator",
                    options: na,
                    value: h.operator,
                    onChange: (w) => {
                      const E = [
                        ...c.clearValueRules || []
                      ];
                      E[b] = { ...h, operator: w }, m(c.id, {
                        clearValueRules: E
                      });
                    }
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  ne,
                  {
                    id: `clear-rule-val-${b}`,
                    label: "Value",
                    value: String(h.value),
                    onChange: (w) => {
                      const E = [
                        ...c.clearValueRules || []
                      ];
                      let $ = w.target.value;
                      $ === "true" && ($ = !0), $ === "false" && ($ = !1), !isNaN(Number($)) && $ !== "" && ($ = Number($)), E[b] = { ...h, value: $ }, m(c.id, {
                        clearValueRules: E
                      });
                    }
                  }
                )
              ] })
            ]
          },
          b
        )) }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            className: "w-full py-2 border-2 border-dashed border-border rounded-lg text-xs text-slate-500 hover:border-primary-500 hover:text-primary-600 transition-all flex items-center justify-center gap-2",
            onClick: () => {
              const h = t.fields.filter(
                (w) => w.id !== c.id
              );
              if (h.length === 0) return;
              const b = {
                field: h[0].name,
                operator: "eq",
                value: "true"
              };
              m(c.id, {
                clearValueRules: [
                  ...c.clearValueRules || [],
                  b
                ]
              });
            },
            children: /* @__PURE__ */ v.jsx("span", { children: "+ Add Clear Value Rule" })
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "mt-8 p-3 bg-slate-100 dark:bg-slate-800 rounded font-mono text-xs", children: [
        /* @__PURE__ */ v.jsx("p", { className: "mb-1 font-semibold text-slate-500", children: "JSON Fragment" }),
        JSON.stringify(c, null, 2)
      ] })
    ] }) : /* @__PURE__ */ v.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ v.jsx("h2", { className: "font-semibold text-lg", children: "Global Settings" }),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            onClick: () => s(!0),
            className: "text-xs bg-primary-600 text-white px-3 py-1.5 rounded hover:bg-primary-700 flex items-center gap-2",
            children: [
              /* @__PURE__ */ v.jsx("span", { children: "Open Preview" }),
              /* @__PURE__ */ v.jsx("span", { className: "text-[10px] opacity-70", children: "↗" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "space-y-4 p-4 bg-surface-100 dark:bg-slate-800 rounded border border-border", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm border-b border-border pb-2 mb-3", children: "Form Info" }),
        /* @__PURE__ */ v.jsx(
          ne,
          {
            id: "form-title",
            label: "Title",
            value: t.title || "",
            onChange: (h) => e((b) => ({ ...b, title: h.target.value }))
          }
        ),
        /* @__PURE__ */ v.jsx(
          ne,
          {
            id: "form-desc",
            label: "Description",
            value: t.description || "",
            onChange: (h) => e((b) => ({ ...b, description: h.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "space-y-4 p-4 bg-surface-100 dark:bg-slate-800 rounded border border-border", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm border-b border-border pb-2 mb-3", children: "Spacing & Styling" }),
        /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "style-padding",
              label: "Form Padding",
              value: String(t.styling?.spacing?.formPadding ?? 6),
              onChange: (h) => e((b) => ({
                ...b,
                styling: {
                  ...b.styling,
                  spacing: {
                    ...b.styling?.spacing,
                    formPadding: Number(h.target.value)
                  }
                }
              })),
              type: "number"
            }
          ),
          /* @__PURE__ */ v.jsx(
            ne,
            {
              id: "style-gap",
              label: "Field Gap",
              value: String(t.styling?.spacing?.fieldGap ?? 4),
              onChange: (h) => e((b) => ({
                ...b,
                styling: {
                  ...b.styling,
                  spacing: {
                    ...b.styling?.spacing,
                    fieldGap: Number(h.target.value)
                  }
                }
              })),
              type: "number"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "space-y-4 p-4 bg-surface-100 dark:bg-slate-800 rounded border border-border", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-medium text-sm border-b border-border pb-2 mb-3", children: "Responsive Layout" }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx("label", { className: "text-xs font-medium text-slate-500", children: "Mobile (default)" }),
          /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "resp-mobile-cols",
                label: "Columns",
                value: String(
                  t.styling?.responsive?.mobile?.columns ?? 1
                ),
                onChange: (h) => e((b) => ({
                  ...b,
                  styling: {
                    ...b.styling,
                    responsive: {
                      ...b.styling?.responsive,
                      mobile: {
                        ...b.styling?.responsive?.mobile,
                        columns: Number(h.target.value)
                      }
                    }
                  }
                })),
                type: "number"
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "resp-mobile-gap",
                label: "Gap",
                value: String(t.styling?.responsive?.mobile?.gap ?? 4),
                onChange: (h) => e((b) => ({
                  ...b,
                  styling: {
                    ...b.styling,
                    responsive: {
                      ...b.styling?.responsive,
                      mobile: {
                        ...b.styling?.responsive?.mobile,
                        gap: Number(h.target.value)
                      }
                    }
                  }
                })),
                type: "number"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx("label", { className: "text-xs font-medium text-slate-500", children: "Tablet (sm/md)" }),
          /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "resp-tablet-cols",
                label: "Columns",
                value: String(
                  t.styling?.responsive?.tablet?.columns ?? 2
                ),
                onChange: (h) => e((b) => ({
                  ...b,
                  styling: {
                    ...b.styling,
                    responsive: {
                      ...b.styling?.responsive,
                      tablet: {
                        ...b.styling?.responsive?.tablet,
                        columns: Number(h.target.value)
                      }
                    }
                  }
                })),
                type: "number"
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "resp-tablet-gap",
                label: "Gap",
                value: String(t.styling?.responsive?.tablet?.gap ?? 4),
                onChange: (h) => e((b) => ({
                  ...b,
                  styling: {
                    ...b.styling,
                    responsive: {
                      ...b.styling?.responsive,
                      tablet: {
                        ...b.styling?.responsive?.tablet,
                        gap: Number(h.target.value)
                      }
                    }
                  }
                })),
                type: "number"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx("label", { className: "text-xs font-medium text-slate-500", children: "Desktop (lg/xl)" }),
          /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "resp-desktop-cols",
                label: "Columns",
                value: String(
                  t.styling?.responsive?.desktop?.columns ?? t.layout?.columns ?? 12
                ),
                onChange: (h) => e((b) => ({
                  ...b,
                  styling: {
                    ...b.styling,
                    responsive: {
                      ...b.styling?.responsive,
                      desktop: {
                        ...b.styling?.responsive?.desktop,
                        columns: Number(h.target.value)
                      }
                    }
                  }
                })),
                type: "number"
              }
            ),
            /* @__PURE__ */ v.jsx(
              ne,
              {
                id: "resp-desktop-gap",
                label: "Gap",
                value: String(
                  t.styling?.responsive?.desktop?.gap ?? 6
                ),
                onChange: (h) => e((b) => ({
                  ...b,
                  styling: {
                    ...b.styling,
                    responsive: {
                      ...b.styling?.responsive,
                      desktop: {
                        ...b.styling?.responsive?.desktop,
                        gap: Number(h.target.value)
                      }
                    }
                  }
                })),
                type: "number"
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "lg:col-span-5 bg-surface-50 border border-border rounded-lg p-6 h-full overflow-y-auto shadow-inner", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "mb-6 flex justify-between items-end", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ v.jsx("h2", { className: "font-semibold text-lg", children: "Preview" }),
          /* @__PURE__ */ v.jsxs(
            "button",
            {
              onClick: () => s(!0),
              className: "text-[10px] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-border flex items-center gap-1 transition-colors",
              children: [
                /* @__PURE__ */ v.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ v.jsx("path", { d: "M15 3h6v6" }),
                      /* @__PURE__ */ v.jsx("path", { d: "M9 21H3v-6" }),
                      /* @__PURE__ */ v.jsx("path", { d: "M21 3l-7 7" }),
                      /* @__PURE__ */ v.jsx("path", { d: "M3 21l7-7" })
                    ]
                  }
                ),
                "Full Preview"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx("span", { className: "text-xs text-slate-400", children: "Live Render" })
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "bg-background rounded-lg border border-border shadow-sm min-h-[300px] overflow-hidden", children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          style: {
            transform: "scale(0.7)",
            transformOrigin: "top left",
            width: "142.8%",
            height: "142.8%"
          },
          className: "p-8",
          children: [
            /* @__PURE__ */ v.jsx(
              rl,
              {
                schema: t,
                onSubmit: (h) => d(h),
                ref: y,
                hideTitle: !0
              },
              JSON.stringify(t)
            ),
            /* @__PURE__ */ v.jsxs("div", { className: "mt-6 flex justify-end gap-3 pt-4 border-t border-border/50", children: [
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  onClick: () => y.current?.reset(),
                  className: "px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200",
                  children: "Reset"
                }
              ),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  onClick: () => y.current?.submit(),
                  className: "px-4 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary-700 transition-colors shadow-sm",
                  children: "Submit"
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ v.jsxs("div", { className: "mt-8 border-t border-border pt-4", children: [
        /* @__PURE__ */ v.jsx("h3", { className: "font-semibold text-sm mb-2 text-slate-500", children: "Generated Schema" }),
        /* @__PURE__ */ v.jsx("pre", { className: "p-3 bg-slate-900 text-slate-50 rounded text-xs overflow-auto max-h-60", children: JSON.stringify(t, null, 2) })
      ] })
    ] }),
    r && /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-50 bg-black/90 flex flex-col backdrop-blur-sm", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-white/10 bg-slate-900 text-white", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ v.jsx("h2", { className: "font-semibold text-lg", children: t.title || "Form Preview" }),
          /* @__PURE__ */ v.jsx("span", { className: "px-2 py-0.5 rounded-full bg-white/10 text-xs border border-white/10", children: "Live Mode" })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex bg-slate-800 rounded-lg p-1 gap-1 border border-white/10", children: [
          /* @__PURE__ */ v.jsxs(
            "button",
            {
              onClick: () => a("mobile"),
              className: `px-3 py-1.5 rounded text-sm flex items-center gap-2 transition-all ${o === "mobile" ? "bg-primary-600 text-white shadow-lg" : "hover:bg-slate-700 text-slate-300"}`,
              children: [
                /* @__PURE__ */ v.jsx("span", { children: "📱" }),
                /* @__PURE__ */ v.jsx("span", { children: "Mobile" })
              ]
            }
          ),
          /* @__PURE__ */ v.jsxs(
            "button",
            {
              onClick: () => a("tablet"),
              className: `px-3 py-1.5 rounded text-sm flex items-center gap-2 transition-all ${o === "tablet" ? "bg-primary-600 text-white shadow-lg" : "hover:bg-slate-700 text-slate-300"}`,
              children: [
                /* @__PURE__ */ v.jsx("span", { children: "🖥" }),
                /* @__PURE__ */ v.jsx("span", { children: "Tablet" })
              ]
            }
          ),
          /* @__PURE__ */ v.jsxs(
            "button",
            {
              onClick: () => a("desktop"),
              className: `px-3 py-1.5 rounded text-sm flex items-center gap-2 transition-all ${o === "desktop" ? "bg-primary-600 text-white shadow-lg" : "hover:bg-slate-700 text-slate-300"}`,
              children: [
                /* @__PURE__ */ v.jsx("span", { children: "💻" }),
                /* @__PURE__ */ v.jsx("span", { children: "Desktop" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => s(!1),
            className: "text-slate-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10",
            children: /* @__PURE__ */ v.jsx("span", { className: "text-xl", children: "×" })
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex-1 overflow-y-auto bg-slate-950/50 flex justify-center p-8 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]", children: [
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: "bg-white dark:bg-slate-950 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out border border-border flex flex-col mb-8",
            style: {
              width: o === "mobile" ? "375px" : o === "tablet" ? "768px" : "100%",
              maxWidth: "1200px",
              margin: "0 auto"
            },
            children: [
              /* @__PURE__ */ v.jsxs("div", { className: "border-b border-border p-3 bg-surface-50 dark:bg-slate-900 flex items-center gap-2", children: [
                /* @__PURE__ */ v.jsxs("div", { className: "flex gap-1.5", children: [
                  /* @__PURE__ */ v.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/50" }),
                  /* @__PURE__ */ v.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-yellow-400 border border-yellow-500/50" }),
                  /* @__PURE__ */ v.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500/50" })
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "flex-1 text-center text-xs text-slate-400 font-mono", children: o === "mobile" ? "375px × 812px" : o === "tablet" ? "768px × 1024px" : "Desktop View" })
              ] }),
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: "p-8 h-full bg-background overflow-y-auto",
                  style: {
                    padding: `${(t.styling?.spacing?.formPadding ?? 6) * 0.25}rem`
                  },
                  children: [
                    /* @__PURE__ */ v.jsxs("div", { className: "mb-8", children: [
                      /* @__PURE__ */ v.jsx("h1", { className: "text-2xl font-bold mb-2", children: t.title || "Form Title" }),
                      t.description && /* @__PURE__ */ v.jsx("p", { className: "text-slate-500", children: t.description })
                    ] }),
                    /* @__PURE__ */ v.jsx(
                      rl,
                      {
                        ref: f,
                        schema: t,
                        onSubmit: (h) => d(h),
                        breakpoint: o,
                        hideTitle: !0
                      },
                      JSON.stringify(t) + o
                    ),
                    /* @__PURE__ */ v.jsxs("div", { className: "mt-8 pt-6 border-t border-border flex justify-end gap-3", children: [
                      /* @__PURE__ */ v.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => f.current?.reset(),
                          className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors",
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ v.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => f.current?.submit(),
                          className: "px-6 py-2 bg-[var(--brand-secondary-orange)] text-white rounded hover:opacity-90 transition-colors shadow-sm font-medium",
                          children: "Submit Form"
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in", children: /* @__PURE__ */ v.jsxs("div", { className: "bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col border border-border", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "p-4 border-b border-border flex items-center justify-between bg-surface-50", children: [
            /* @__PURE__ */ v.jsxs("h3", { className: "font-semibold text-lg flex items-center gap-2", children: [
              /* @__PURE__ */ v.jsx("span", { className: "text-green-500", children: "✓" }),
              " Form Submitted"
            ] }),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: () => d(null),
                className: "text-slate-400 hover:text-slate-600",
                children: "×"
              }
            )
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: "p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950", children: /* @__PURE__ */ v.jsx("pre", { className: "text-xs font-mono bg-white dark:bg-slate-900 p-4 rounded border border-border overflow-auto", children: JSON.stringify(u, null, 2) }) }),
          /* @__PURE__ */ v.jsx("div", { className: "p-4 border-t border-border bg-surface-50 flex justify-end", children: /* @__PURE__ */ v.jsx(
            "button",
            {
              onClick: () => d(null),
              className: "px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 text-sm",
              children: "Close"
            }
          ) })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  Jk as FormBuilder,
  rl as SchemaForm
};
