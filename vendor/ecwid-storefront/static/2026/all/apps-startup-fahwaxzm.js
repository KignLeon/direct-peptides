const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./apps-product-browser-page-category-ic9884uo.js", "./ecommerce-lynkwow4.js", "./vendor-fein6u71.js", "./apps-product-browser-c3v4lv88.js", "./shared-k1b52rt2.js", "./apps-product-browser-page-product-gwshtoco.js", "./apps-product-browser-page-account-favorites-msempvs2.js", "./apps-product-browser-page-account-gk68761i.js", "./apps-product-browser-page-account-subscription-booa71lg.js", "./apps-product-browser-page-account-reviews-ie9gj7f8.js", "./apps-product-browser-page-cart-jd0mn03a.js", "./apps-product-browser-page-checkout-address-95xr8j5v.js", "./apps-product-browser-page-checkout-delivery-jyogiba2.js", "./apps-product-browser-page-checkout-order-confirmation-b7is7672.js", "./apps-product-browser-page-checkout-order-failure-k17kdj5a.js", "./apps-product-browser-page-checkout-payment-kx0yw8oy.js", "./apps-product-browser-page-checkout-result-poa163sk.js", "./apps-product-browser-page-checkout-tax-information-fz2c8l7y.js", "./apps-product-browser-page-download-error-jgejyejw.js", "./apps-product-browser-page-payment-link-fqfmvk8l.js", "./apps-product-browser-page-marketing-emails-od77bysw.js", "./apps-product-browser-page-pages-gwuukpmb.js", "./apps-product-browser-page-repeat-order-jw4oelcd.js", "./apps-product-browser-page-search-kkhlzl3f.js", "./apps-product-browser-page-sign-in-f7zl6tcw.js"]))) => i.map(i => d[i]);
import {
    x as ae,
    c as Ve,
    r as Fe,
    G as P,
    L as K,
    O as ee,
    H as st,
    aG as at,
    d as ie,
    t as Ge,
    _ as Me,
    i as We,
    o as ce,
    aH as it,
    R as ct,
    A as ut,
    a as lt,
    j as dt,
    a3 as gt,
    I as xe,
    J as _e,
    K as ht,
    aI as St,
    aJ as ft,
    aK as pt
} from "./vendor-fein6u71.js";
import {
    F as G,
    f6 as mt,
    bv as ue,
    aj as qe,
    b as _t,
    f7 as Et,
    O as Tt,
    an as vt,
    e8 as yt,
    f8 as Rt,
    bw as Ct,
    cp as M,
    f9 as le,
    e9 as It,
    a8 as w,
    fa as Pt,
    Z as At,
    co as Ot,
    e as wt,
    fb as Nt,
    cZ as Dt,
    bA as Lt,
    cv as Ye,
    fc as Ht,
    fd as Ut,
    fe as bt,
    ff as kt,
    fg as Bt,
    fh as Vt,
    fi as Ft,
    fj as T,
    dQ as Gt,
    fk as Mt,
    fl as Wt,
    fm as te,
    fn as xt,
    fo as oe,
    fp as re,
    fq as qt,
    fr as Ee,
    fs as Te,
    aZ as ve,
    en as Yt,
    aV as C,
    ft as Kt,
    fu as Qt,
    bP as Ke,
    R as i,
    bQ as $t,
    c4 as jt,
    fv as zt,
    fw as Xt,
    C as Jt,
    fx as ye,
    aw as Zt,
    bb as eo,
    V as to,
    P as oo,
    fy as A,
    e5 as de,
    fz as ro,
    c1 as no,
    fA as so,
    fB as ao,
    j as io,
    k as co
} from "./shared-k1b52rt2.js";
import {
    n as O,
    k as Qe,
    o as uo,
    L as _,
    g as ge,
    q as lo,
    _ as g,
    i as go
} from "./ecommerce-lynkwow4.js";

function ho() {
    const {
        debugOverrides: t
    } = ae(G()), e = Ve(() => document.body);
    (t.value ? .shouldHighlightVersion ? ? !1) && e.value.classList.add(mt)
}

function Q(t, e, o, r, n) {
    const s = o.storeId,
        c = Fe(e.getValue(s));
    P(c, (l, h) => {
        const S = K(l),
            f = K(h);
        ee(S, f) || e.setValue(s, S)
    });
    const a = r.subscribe(t, l => {
        const h = K(c.value);
        ee(h, l) || (c.value = l)
    });
    return n(a), c
}
const H = {
    ON_ISOLATED_SESSION_MODE_CHANGED: "ON_ISOLATED_SESSION_MODE_CHANGED",
    ON_SESSION_TOKEN_CHANGED: "ON_SESSION_TOKEN_CHANGED",
    ON_CHECKOUT_INFO_CHANGED: "ON_CART_ID_CHANGED"
};
class So {
    channelsNamePrefix;
    isBlockEvents;
    channels = new Map;
    constructor(e, o) {
        this.channelsNamePrefix = `ec-${e}-`, this.isBlockEvents = o, window.addEventListener("beforeunload", () => {
            this.channels.forEach(r => r.close()), this.channels.clear()
        })
    }
    publish(e, o) {
        this.isBlockEvents() || this.getChannel(e) ? .postMessage(o)
    }
    subscribe(e, o) {
        const r = s => {
                this.isBlockEvents() || o(s.data)
            },
            n = () => {
                this.getChannel(e) ? .addEventListener("message", r)
            };
        return n(), window.addEventListener("pageshow", n), () => {
            this.channels.get(e) ? .removeEventListener("message", r)
        }
    }
    getChannel(e) {
        let o = this.channels.get(e);
        return o === void 0 && (o = new BroadcastChannel(this.createChannelName(e.toString())), this.channels.set(e, o)), o
    }
    createChannelName(e) {
        return `${this.channelsNamePrefix}-${e}`
    }
}
class $e {
    storage;
    keyNamePlaceholder;
    constructor(e, o) {
        this.storage = e, this.keyNamePlaceholder = o
    }
    buildKeyName(e) {
        return this.keyNamePlaceholder.replaceAll("{storeId}", e.toString())
    }
    getValue(e) {
        try {
            return this.storage.getItem(this.buildKeyName(e)) ? ? void 0
        } catch {
            return
        }
    }
    setValue(e, o) {
        try {
            o === void 0 ? this.storage.removeItem(this.buildKeyName(e)) : this.storage.setItem(this.buildKeyName(e), o)
        } catch {}
    }
}
class fo extends $e {
    constructor(e) {
        super(window.localStorage, e)
    }
}

function po(t) {
    const e = t;
    return typeof t == "object" && t !== null && (e.id === void 0 || typeof e.id == "string") && typeof e.itemsCount == "number"
}
class mo {
    checkoutInfoStorage;
    constructor() {
        this.checkoutInfoStorage = new fo("ec-{storeId}-checkout")
    }
    getValue(e) {
        const o = this.checkoutInfoStorage.getValue(e);
        if (o !== void 0) try {
            const r = JSON.parse(o);
            if (po(r)) return r
        } catch {}
    }
    setValue(e, o) {
        const r = o === void 0 ? void 0 : JSON.stringify(o);
        this.checkoutInfoStorage.setValue(e, r)
    }
}
class _o {
    peer;
    isDisconnected;
    constructor(e, o) {
        this.peer = e, this.isDisconnected = o
    }
    getValue(e) {
        if (!this.isDisconnected()) return this.peer.getValue(e)
    }
    setValue(e, o) {
        this.isDisconnected() || this.peer.setValue(e, o)
    }
}
class ne extends $e {
    constructor(e) {
        super(window.sessionStorage, e)
    }
}
class Eo {
    sessionStorage;
    constructor() {
        this.sessionStorage = new ne("ec-{storeId}-isolated-session-mode")
    }
    getValue(e) {
        return this.sessionStorage.getValue(e) === "true"
    }
    setValue(e, o) {
        this.sessionStorage.setValue(e, o === !0 ? "true" : "false")
    }
}
class To {
    cookieName;
    expiresDays;
    constructor(e, o) {
        this.cookieName = e, this.expiresDays = o
    }
    buildCookieName(e) {
        return this.cookieName.replaceAll("{storeId}", e.toString())
    }
    getValue(e) {
        return O.get(this.buildCookieName(e))
    }
    setValue(e, o) {
        if (o === void 0) O.remove(this.buildCookieName(e));
        else {
            const r = window.location.protocol === "https:";
            O.set(this.buildCookieName(e), o, {
                sameSite: r ? "None" : "Lax",
                secure: r,
                expires: this.expiresDays
            })
        }
    }
}
const $ = "testcookie",
    vo = () => {
        const t = window.location.protocol === "https:";
        try {
            return O.set($, "test", {
                sameSite: t ? "None" : "Lax",
                secure: t
            }), O.get($) === void 0
        } catch {
            return !0
        } finally {
            O.remove($)
        }
    };
class yo {
    cookieStorage;
    localStorage;
    areCookiesBlocked = !1;
    constructor(e, o) {
        this.cookieStorage = e, this.localStorage = o, this.areCookiesBlocked = vo()
    }
    getValue(e) {
        if (!this.areCookiesBlocked) {
            const o = this.cookieStorage.getValue(e);
            if (o === void 0) {
                this.localStorage.setValue(e, void 0);
                return
            }
            return o
        }
        return this.localStorage.getValue(e)
    }
    setValue(e, o) {
        this.areCookiesBlocked ? (this.localStorage.setValue(e, o), this.cookieStorage.setValue(e, void 0)) : (this.cookieStorage.setValue(e, o), this.localStorage.setValue(e, void 0))
    }
}
const j = "ec-{storeId}-session",
    Ro = 90;
class Co {
    switchingSyncStorage;
    sessionStorage;
    isIsolatedSessionMode;
    constructor(e) {
        this.switchingSyncStorage = new yo(new To(j, Ro), new ne(j)), this.sessionStorage = new ne(j), this.isIsolatedSessionMode = e
    }
    getValue(e) {
        return this.currentStorage().getValue(e)
    }
    setValue(e, o) {
        this.currentStorage().setValue(e, o)
    }
    currentStorage() {
        return this.isIsolatedSessionMode() ? this.sessionStorage : this.switchingSyncStorage
    }
}
class he {
    storeIdToValueMap = {};
    afterSetFn;
    constructor(e) {
        this.afterSetFn = e
    }
    getValue(e) {
        return this.storeIdToValueMap[e]
    }
    setValue(e, o) {
        this.storeIdToValueMap[e] !== o && (this.storeIdToValueMap[e] = o, this.afterSetFn(e, o))
    }
}
class Io extends he {
    constructor(e) {
        super((o, r) => {
            e.publish(H.ON_SESSION_TOKEN_CHANGED, r)
        })
    }
}
class Po extends he {
    constructor(e) {
        super((o, r) => {
            e.publish(H.ON_CHECKOUT_INFO_CHANGED, r)
        })
    }
}
class z {
    options;
    constructor(e) {
        this.options = e
    }
    getValue(e) {
        return this.options.inMemoryStorage.getValue(e) ? ? this.options.externalStorage ? .getValue(e)
    }
    setValue(e, o) {
        this.options.externalStorage ? .setValue(e, o), this.options.inMemoryStorage.setValue(e, o)
    }
}

function X(t) {
    if (window.ec ? .config ? .disable_all_cookies !== !0) return t()
}

function Ao(t, e, o) {
    const r = new he(() => {}),
        n = new z({
            inMemoryStorage: r,
            externalStorage: X(() => new Eo)
        }),
        s = () => n.getValue(t) === !0,
        c = new Io(o);
    c.setValue(t, e);
    const a = new z({
            inMemoryStorage: c,
            externalStorage: X(() => new Co(s))
        }),
        l = new Po(o),
        h = new z({
            inMemoryStorage: l,
            externalStorage: X(() => new _o(new mo, s))
        });
    return {
        storeId: t,
        isolatedSessionMode: n,
        sessionToken: a,
        checkoutInfo: h
    }
}

function Oo(t, e, o) {
    return Ao(e, o, t)
}

function wo(t) {
    const e = ue(),
        o = qe();
    if (e.sessionStorage !== void 0) throw new Error("useInitStorefrontSessionStorage() must be called only once");
    const r = [],
        n = p => r.push(p);
    st(() => {
        r.forEach(p => p())
    });
    let s = () => !1;
    const c = new So(t.value.storeId, () => s()),
        a = Oo(c, t.value.storeId, t.value.sessionToken),
        l = Q(H.ON_ISOLATED_SESSION_MODE_CHANGED, a.isolatedSessionMode, a, c, n);
    s = () => l.value === !0;
    const h = Q(H.ON_SESSION_TOKEN_CHANGED, a.sessionToken, a, c, n),
        S = Q(H.ON_CHECKOUT_INFO_CHANGED, a.checkoutInfo, a, c, n),
        f = {
            storeId: a.storeId,
            isolatedSessionMode: l,
            sessionToken: h,
            checkoutInfo: S
        };
    o.setSessionStorageOptions(f), e.sessionStorage = f
}

function No() {
    return {
        initialDataResult: _t()
    }
}
const I = {
        ALL: "ALL",
        PARTIAL: "PARTIAL",
        NOTHING: "NOTHING"
    },
    Do = "ec_disabled_apps";

function Lo(t) {
    switch (t) {
        case "all":
            return {
                type: I.ALL
            };
        case "none":
        case "":
            return {
                type: I.NOTHING
            };
        default:
            try {
                const e = JSON.parse(t);
                return {
                    type: I.PARTIAL,
                    disabledNamespaces: e
                }
            } catch {
                return {
                    type: I.NOTHING
                }
            }
    }
}

function Ho() {
    const t = at(Do, "", {
        writeDefaults: !1
    });
    return Ve(() => Lo(t.value))
}

function je() {
    const t = ue();
    if (t.datadogRumPromise !== void 0) return Et(t.datadogRumPromise, void 0)
}
const V = {
    CHECKOUT_ID: "checkoutId",
    CUSTOMER_ID: "customerId",
    SESSION_ID: "sessionId",
    STORE_ID: "storeId"
};

function Uo() {
    const t = je();
    if (t === void 0) return;
    const e = Tt(),
        o = vt(),
        r = yt(o.data);
    P(t, () => {
        t.value !== void 0 && t.value.setGlobalContextProperty(V.STORE_ID, e.storeId)
    }), P([t, e.sessionToken], () => {
        t.value !== void 0 && t.value.setGlobalContextProperty(V.SESSION_ID, Rt(e.sessionToken.value) ? ? "<no session>")
    }), P([t, r], () => {
        t.value !== void 0 && t.value.setGlobalContextProperty(V.CUSTOMER_ID, r.value ? ? "<no customer>")
    }), P([t, e.checkoutInfo], () => {
        t.value !== void 0 && t.value.setGlobalContextProperty(V.CHECKOUT_ID, e.checkoutInfo.value ? .id ? ? "<no checkout>")
    })
}

function bo(t) {
    const e = je();
    if (e === void 0) return;
    const {
        userTrackingResponse: o,
        datadogTrackingConsent: r
    } = Ct(t);
    P([e, o, r], () => {
        e.value !== void 0 && r.value !== void 0 && e.value.setTrackingConsent(r.value)
    })
}
const ko = 5e3,
    Bo = 5e3;

function Re(t, e) {
    switch (e.type) {
        case I.ALL:
            return !1;
        case I.PARTIAL:
            return !e.disabledNamespaces.includes(t);
        case I.NOTHING:
        case void 0:
            return !0;
        default:
            return w()
    }
}

function Vo(t) {
    const e = t.apps.filter(a => t.appsSettings[a] ? .script !== void 0),
        o = e.filter(a => Re(a, t.disableLoadingStrategy)),
        r = t.apps.filter(a => t.appsSettings[a] ? .stylesheet !== void 0),
        n = r.filter(a => Re(a, t.disableLoadingStrategy)),
        s = o.map(a => t.appsSettings[a] ? .script).filter(a => a !== void 0).map(a => Qe(a.url, a.isAsync, t.requestContext, t.logger, ko)),
        c = n.map(a => t.appsSettings[a] ? .stylesheet).filter(a => a !== void 0).map(a => uo(a.url, void 0, Bo, t.requestContext, t.logger));
    return (e.length > 0 || r.length > 0) && t.logger.info(_.RESOURCES, "Customize storefront apps", `
`, "With scripts:", {
        installed: e,
        allowed: o
    }, `
`, "With stylesheets:", {
        installed: r,
        allowed: n
    }), Promise.allSettled([...s, ...c])
}

function Fo(t, e, o, r, n) {
    if (M(e.appMode)) return Promise.resolve();
    const s = new Promise((c, a) => {
        le(t).then(() => {
            const h = It(t.value) ? .appsSettings.customizeStorefrontApps,
                S = t.value ? .appsSettings;
            h !== void 0 && S !== void 0 ? Vo({
                apps: h,
                appsSettings: S,
                disableLoadingStrategy: o.value,
                requestContext: r,
                logger: n
            }).then(() => c()).catch(p => a(p)) : c()
        })
    });
    return s !== void 0 ? s : Promise.resolve()
}

function Go(t, e) {
    M(e.appMode) || le(t).then(o => {
        const r = o ? .integrations ? .mailchimpSettings ? .scriptCode;
        r !== void 0 && Pt(r)
    })
}
const Mo = "https://js.stripe.com/v3/";

function Wo(t, e, o, r) {
    M(e.appMode) || le(t).then(n => {
        const s = n.paymentsSettings.hasEnabledStripeBasedPayments;
        s !== void 0 && s && Qe(Mo, !0, o, r)
    })
}
const xo = ie({
    name: "StartupApp",
    props: {
        rootProps: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const {
            rootProps: e
        } = Ge(t), o = G();
        wo(e);
        const r = ue(),
            n = At(),
            s = Ot(),
            c = No(),
            a = wt(c.initialDataResult.data);
        Nt(a, e), Dt().initialize(), Lt().updateFromCurrentRoute(), ho(), bo(a), Uo();
        const S = Ho();
        return Go(a, s), Wo(a, s, r, n), s.customizeStorefrontAppsResources = Fo(c.initialDataResult.data, s, S, r, n), (() => {
            o.refreshEcConfig(window.ec.config ? ? {})
        })(), {}
    }
});

function qo(t, e, o, r, n, s) {
    return ce(), We("div")
}
const Yo = Me(xo, [
    ["render", qo]
]);
class Ko extends Event {
    constructor(e) {
        super(Ye.ON_BEFORE_ROUTE_CHANGED, {
            cancelable: !0
        }), this.detail = e
    }
}

function Se(t) {
    if (window.ec ? .config ? .useExternalState === !0) return window.ec ? .config ? .ecwidInitialState !== void 0 && window.ec ? .config ? .ecwidInitialState !== "" ? Ht(t, window.ec ? .config ? .ecwidInitialState) : {
        pathname: "",
        search: "",
        hash: "",
        state: {}
    }
}
const Ce = "~~",
    se = "mode";

function Ie(t) {
    const e = {};
    for (const o in t)
        if (o.startsWith(Ce)) {
            const r = o.slice(Ce.length),
                n = Ft(t[o]) ? .[0];
            n !== void 0 && (e[r] = n)
        }
    return e
}

function Qo(t) {
    return t[se]
}
class $o extends Ut {
    fromRoutePath = () => {
        throw new Error("This method must not be ever called.")
    };
    toRoutePath = (e, o) => {
        const r = bt(o.search),
            n = Ie(r.queryParams),
            s = Qo(n),
            c = kt(`/${s}`),
            a = Bt(n, [se]);
        return Vt({
            path: c,
            queryParams: a
        })
    };
    isLocationFormatMatched = e => {
        const o = it(e.search);
        return Ie(o)[se] !== void 0
    };
    getFallbackBaseUrl = () => {
        throw new Error("This method must not be ever called.")
    }
}
const ze = (t, e, o) => {
    if (t === T.HASH_BASED) {
        const r = new $o;
        if (r.isLocationFormatMatched(e)) return r.toRoutePath(o, e)
    } else if (t === T.CLEAN_URL) {
        const r = U(T.HASH_BASED);
        if (r.isLocationFormatMatched(e)) return r.toRoutePath(o, e);
        const n = U(T.QUERY_BASED);
        if (n.isLocationFormatMatched(e)) return n.toRoutePath(o, e)
    } else if (t === T.QUERY_BASED) {
        const r = U(T.HASH_BASED);
        if (r.isLocationFormatMatched(e)) return r.toRoutePath(o, e)
    }
};

function U(t) {
    switch (t) {
        case T.CLEAN_URL:
            return new xt;
        case T.HASH_BASED:
            return new te;
        case T.QUERY_BASED:
            return new Wt;
        default:
            return w()
    }
}

function Xe(t, e) {
    const o = { ...t,
            scroll: void 0
        },
        r = { ...e,
            scroll: void 0
        };
    return ee(o, r)
}
class Je {
    base;
    location;
    urlType;
    state = {};
    historyStrategy;
    routeChangeCallbacks = new Set;
    constructor(e, o, r, n) {
        this.historyStrategy = n, this.urlType = e, this.base = Gt(o) ? ? this.historyStrategy.getFallbackBaseUrl(r), this.location = this.initialLocationToRoutePath(e, r), this.state = r.state
    }
    createHref(e, o) {
        return this.historyStrategy.fromRoutePath(o ? ? this.base, e)
    }
    destroy() {
        this.routeChangeCallbacks.clear()
    }
    listen(e) {
        const o = e;
        return this.routeChangeCallbacks.add(o), () => {
            this.routeChangeCallbacks.delete(o)
        }
    }
    go() {
        throw new Error("RouterHistory.go() is not implemented")
    }
    setLocationAndState(e, o) {
        this.location = e, this.state = o ? ? {}
    }
    updateInternalRouterState(e, o) {
        const r = this.location,
            n = this.state;
        this.setLocationAndState(e, o), (e !== r || !Xe(n, o)) && this.routeChangeCallbacks.forEach(s => {
            s(e, r, {
                type: "push",
                direction: "",
                delta: 0
            })
        })
    }
    initialLocationToRoutePath(e, o) {
        const r = new Mt;
        return r.isLocationFormatMatched(o) ? r.toRoutePath(this.base, o) : ze(e, o, this.base) ? ? this.historyStrategy.toRoutePath(this.base, o)
    }
}

function jo() {
    try {
        if (ge() && document.referrer !== "") {
            const t = new URL(document.referrer);
            return {
                pathname: t.pathname,
                search: t.search,
                hash: t.hash,
                state: {}
            }
        }
        if (window.frameElement ? .baseURI !== void 0) {
            const t = new URL(window.frameElement.baseURI);
            return {
                pathname: t.pathname,
                search: t.search,
                hash: t.hash,
                state: {}
            }
        }
    } catch {}
}

function fe() {
    const t = window.location;
    return {
        pathname: t.pathname,
        search: t.search,
        hash: t.hash,
        state: window.history.state
    }
}

function Ze(t) {
    const e = Se(t);
    if (e !== void 0) return e;
    const o = fe();
    if (ge() && t.isLocationFormatMatched(o)) return o;
    const r = jo();
    return r !== void 0 ? r : o
}
const zo = t => {
    const e = new HashChangeEvent(oe, {
        oldURL: window.location.href,
        newURL: t
    });
    e.isFromStorefrontV3 = !0, window.dispatchEvent(e)
};

function Xo() {
    const t = window.history.pushState;
    window.history.pushState = function(o, r, n) {
        const s = !(o !== null && typeof o == "object" && qt in o),
            c = t.apply(this, [o, r, n]);
        return s && window.dispatchEvent(new Event(re)), c
    }
}

function Pe(t) {
    return Se(t) ? ? fe()
}

function Jo(t) {
    return t.pathname + t.search + t.hash
}

function Zo(t) {
    const e = new URL(t, window.location.href);
    return e.origin === window.location.origin ? e : window.location.origin + e.href.slice(e.origin.length)
}

function er() {
    const t = window.angular ? .version ? .major;
    return !(t !== void 0 && t <= 1)
}
class et extends Je {
    logger;
    isFirstNavigation = !0;
    isNeedChangeUrlDuringFirstNavigation = !1;
    isHashChangeEventTriggered = !1;
    hashBasedHistoryStrategy = new te;
    setNeedChangeUrlDuringFirstNavigation = e => {
        this.isNeedChangeUrlDuringFirstNavigation = e
    };
    getIsHashChangeEventTriggered = () => this.isHashChangeEventTriggered;
    setHashChangeEventTriggered = e => {
        this.isHashChangeEventTriggered = e
    };
    getTargetStateAndLocation = e => {
        const o = e.toRoutePath(this.base, Pe(e)),
            r = Pe(e).state;
        return {
            targetLocation: o,
            targetState: r
        }
    };
    onChangeState = e => {
        const {
            targetLocation: o,
            targetState: r
        } = this.getTargetStateAndLocation(e);
        this.updateInternalRouterState(o, r)
    };
    onChangeStateCallback = () => {
        this.onChangeState(this.historyStrategy)
    };
    onHashChange = e => {
        if (e.isFromStorefrontV3 !== !0) {
            const {
                targetLocation: o,
                targetState: r
            } = this.getTargetStateAndLocation(this.hashBasedHistoryStrategy);
            this.setHashChangeEventTriggered(!0), this.updateInternalRouterState(o, r)
        }
    };
    constructor(e, o, r) {
        const n = U(e),
            s = Ze(n);
        super(e, o, s, n), Xo(), this.logger = r, window.addEventListener(Ee, this.onChangeStateCallback), window.addEventListener(oe, this.onHashChange), window.addEventListener(Te, this.onChangeStateCallback), window.addEventListener(re, this.onChangeStateCallback)
    }
    destroy() {
        super.destroy(), window.removeEventListener(Ee, this.onChangeStateCallback), window.removeEventListener(oe, this.onHashChange), window.removeEventListener(Te, this.onChangeStateCallback), window.removeEventListener(re, this.onChangeStateCallback)
    }
    replace(e, o) {
        this.changeState(e, o, (...r) => window.history.replaceState(...r))
    }
    push(e, o) {
        this.changeState(e, o, (...r) => window.history.pushState(...r))
    }
    changeState(e, o, r) {
        if (this.isFirstNavigation) this.changeStateDuringFirstNavigation(e, o, r), this.isFirstNavigation = !1;
        else {
            const n = window.Ecwid ? .customHistoryStateHandler;
            n !== void 0 ? this.changeStateUsingExternalHistory(e, n) : ve() ? this.logger.info(_.APP_LIFECYCLE, "History Location is not used because we are in srcdoc mode", e) : this.changeStateUsingHistoryApi(e, o, r)
        }
        this.setLocationAndState(e, o)
    }
    changeStateDuringFirstNavigation(e, o, r) {
        const n = window.Ecwid ? .customHistoryStateHandler;
        this.isNeedChangeUrlDuringFirstNavigation && n === void 0 && !ve() && this.changeStateUsingHistoryApi(e, o, r), this.setNeedChangeUrlDuringFirstNavigation(!1)
    }
    changeStateUsingExternalHistory(e, o) {
        const r = e.replace(/\//, "");
        this.logger.info(_.APP_LIFECYCLE, "Set current router state using external customHistoryStateHandler", r);
        try {
            o(r)
        } catch (n) {
            this.logger.warn(_.APP_LIFECYCLE, "Error while setting router state using external customHistoryStateHandler:", n ? .toString())
        }
    }
    changeStateUsingHistoryApi(e, o, r) {
        const n = this.historyStrategy.fromRoutePath(this.base, e),
            s = fe(),
            c = n === Jo(s),
            a = Xe(o, s.state);
        if (!(c && a)) try {
            r(o, "", Zo(n)), this.historyStrategy instanceof te && er() && zo(n)
        } catch (l) {
            this.logger.warn(_.APP_LIFECYCLE, `Error while setting router state using History API: "${l?.toString()}"`, e)
        }
    }
}

function tr(t) {
    return Se(t)
}
class or extends Je {
    constructor(e, o) {
        const r = {
                pathname: "",
                search: "",
                hash: "",
                state: {}
            },
            n = U(e);
        super(e, o, tr(n) ? ? r, n)
    }
    replace(e, o) {
        this.updateInternalRouterState(this.historyStrategy.fromRoutePath(this.base, e), o)
    }
    push(e, o) {
        this.updateInternalRouterState(this.historyStrategy.fromRoutePath(this.base, e), o)
    }
}
const rr = 10,
    Ae = .5,
    nr = 150;

function Oe(t, e) {
    return t === ct ? void 0 : C(t, e)
}

function sr() {
    const t = document.getElementById(Kt);
    if (t != null) return t;
    const e = document.querySelector(`.${Qt} .${Ke}`);
    if (e != null) return e
}

function ar() {
    const t = document.getElementById(Yt);
    if (t != null) return t
}

function ir() {
    const t = sr();
    if (t === void 0 || lo()) return;
    const e = t.getBoundingClientRect();
    return {
        el: t,
        top: e !== void 0 ? e.top : 0,
        left: e !== void 0 ? e.left : 0
    }
}

function cr(t, e, o, r, n) {
    const {
        navigationScrollingType: s,
        customScrollerFn: c,
        scrollIndent: a
    } = t, l = n.getRootPage();
    return {
        type: s ? ? "IMMEDIATELY",
        pageTo: Oe(e, n),
        pageFrom: Oe(o, n),
        savedPosition: r ? ? void 0,
        defaultAnchor: ir(),
        featuredProductsAnchorElement: ar(),
        browserMeasures: {
            documentHeight: document.documentElement.clientHeight,
            windowScrollY: window.scrollY
        },
        customScrollerFn: c,
        scrollIndent: a ? ? 0,
        rootPage: l
    }
}

function we(t) {
    return {
        type: "router",
        behaviorParameters: t
    }
}

function ur(t, e, o, r) {
    return t < e || t > (o - e) * r
}

function lr(t, e, o) {
    const r = (t ? .top ? ? 0) + e.windowScrollY,
        s = e.documentHeight * Ae;
    return t === void 0 || r <= nr || r < s ? {
        left: 0,
        top: 0,
        behavior: "auto"
    } : ur(t.top, o, e.documentHeight, Ae) ? {
        el: t.el,
        left: 0,
        top: o,
        behavior: "auto"
    } : !1
}

function Ne(t) {
    return t.page === i.CATEGORY_WITH_SLUG || t.page === i.CATEGORY_WITH_SLUG_AND_ID || t.page === i.HOME || t.page === i.SEARCH || t.page === i.ACCOUNT_FAVORITES
}

function dr(t) {
    const {
        pageTo: e,
        pageFrom: o,
        savedPosition: r,
        defaultAnchor: n,
        featuredProductsAnchorElement: s,
        browserMeasures: c,
        scrollIndent: a,
        rootPage: l
    } = t, h = lr(n, c, a);
    if (e === void 0) return h;
    const S = e.page === i.HOME,
        f = e.page === i.CATEGORY_WITH_SLUG || e.page === i.CATEGORY_WITH_SLUG_AND_ID,
        p = e.page === i.PRODUCT_WITH_SLUG || e.page === i.PRODUCT_WITH_SLUG_AND_ID,
        N = o ? .page === i.CATEGORY_WITH_SLUG || o ? .page === i.CATEGORY_WITH_SLUG_AND_ID;
    if (o === void 0) {
        if (S) return !1;
        if (f) {
            const v = l ? .page === i.CATEGORY_WITH_SLUG_AND_ID ? l ? .categoryId : void 0;
            if (e.categoryId === $t || v !== void 0 && e.categoryId === v) return !1
        }
        if (p) {
            const v = l ? .page === i.PRODUCT_WITH_SLUG_AND_ID ? l.productId : void 0;
            if (v !== void 0 && e.productId === v) return !1
        }
    }
    if (e.page === o ? .page) {
        if (f && N && o.categoryId !== e.categoryId) return S && s !== void 0 ? {
            el: s,
            behavior: "smooth"
        } : h;
        if (Ne(e) && Ne(o)) return e.pagination ? .offset !== o.pagination ? .offset ? S && s !== void 0 ? {
            el: s,
            behavior: "smooth"
        } : h : !1
    }
    return (o ? .page === i.PRODUCT_WITH_SLUG || o ? .page === i.PRODUCT_WITH_SLUG_AND_ID) && (S || f) && r !== void 0 ? {
        behavior: "auto",
        ...r
    } : h
}

function gr(t) {
    const {
        type: e,
        customScrollerFn: o,
        ...r
    } = t, n = we(dr(r)), s = we(!1);
    switch (e) {
        case "IMMEDIATELY":
        case "SMOOTH":
            return n;
        case "CUSTOM":
            return o !== void 0 ? {
                type: "custom",
                customScrollerFn: o
            } : n;
        case "DISABLED":
            return s;
        default:
            return w()
    }
}

function hr(t, e) {
    return window.history.scrollRestoration = "manual", (o, r, n) => {
        const s = cr(t(), o, r, n, e),
            c = gr(s);
        switch (c ? .type) {
            case "router":
                return c.behaviorParameters;
            case "custom":
                return c.customScrollerFn(), !1;
            default:
                return w()
        }
    }
}

function Sr(t, e) {
    const o = document.documentElement.getBoundingClientRect(),
        r = t.getBoundingClientRect();
    return {
        behavior: e.behavior,
        left: r.left - o.left - (e.left ? ? 0),
        top: r.top - o.top - (e.top ? ? 0)
    }
}

function fr(t, e, o) {
    if (typeof t != "object") return;
    if (ge() && !e) {
        const n = document.getElementById(jt);
        if (n !== null && n.scrollIntoView !== void 0) {
            n.scrollIntoView();
            return
        }
    }
    let r;
    if ("el" in t) {
        const n = t.el;
        let s;
        if (typeof n == "string" ? s = n.startsWith("#") ? document.getElementById(n.slice(1)) : document.querySelector(n) : s = n, s === null) {
            o.error(_.ROUTER, "Couldn't find element using selector ", t.el, " returned by scrollBehavior.");
            return
        }
        const c = document.getElementById(zt);
        if (c !== null && c.getBoundingClientRect().height === 0) {
            o.warn(_.ROUTER, "Dynamic container is not rendered yet. Scroll to element ", t.el, " will be skipped.");
            return
        }
        r = Sr(s, t)
    } else r = t;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(r) : window.scrollTo(r.left !== void 0 ? r.left : window.scrollX, r.top !== void 0 ? r.top : window.scrollY)
}

function tt(t) {
    const e = t.className;
    return t === document.body || e.indexOf(Xt) !== -1 ? !1 : e.indexOf(Jt) !== -1 || e.indexOf(" ec-") !== -1 || e.indexOf("ec-") === 0 ? !0 : t.parentElement !== null ? tt(t.parentElement) : !1
}

function pr(t) {
    const e = document.elementsFromPoint(t + window.scrollX, rr);
    let o = 0;
    for (const r of e) {
        const n = e.indexOf(r);
        if (tt(r)) {
            const s = n > 0 ? e[n - 1] : void 0;
            o = s !== void 0 ? s.getBoundingClientRect().height : o;
            break
        }
    }
    return o
}

function mr() {
    const e = document.getElementsByClassName(Ke)[0] ? .getBoundingClientRect();
    if ((e ? .left ? ? 0) < 0) return;
    const r = e ? .left ? ? 0,
        n = pr(r);
    n !== 0 && window.scrollTo(r, window.scrollY - n)
}

function _r(t, e, o, r) {
    setTimeout(() => {
        fr(t, o, r)
    }), e || ut(() => {
        mr()
    })
}

function De(t) {
    return t.replace("[?#].*$", "")
}

function Le(t) {
    if (!(t == null || t === "")) return t
}

function Er(t, e) {
    return Le(t) ? ? Le(e)
}

function Tr(t, e, o, r, n) {
    if (t === void 0) return;
    const {
        store_main_page_url: s,
        baseUrl: c
    } = t, a = Er(s, n);
    if (a === void 0 || c !== void 0 && De(a) === De(c)) return;
    const l = e.fromRoutePath(a, o.fullPath);
    return r === T.HASH_BASED ? a + l : l
}
const vr = ie({
    name: "EmptyPage",
    setup() {
        return {}
    }
});

function yr(t, e, o, r, n, s) {
    return ce(), We("div")
}
const Rr = Me(vr, [
        ["render", yr]
    ]),
    J = ie({
        __name: "TheEntryPage",
        props: {
            rootProps: {}
        },
        setup(t) {
            const e = t,
                {
                    rootProps: o
                } = Ge(e),
                r = _e(() => g(() =>
                    import ("./apps-product-browser-page-category-ic9884uo.js").then(a => a.T), __vite__mapDeps([0, 1, 2, 3, 4]),
                    import.meta.url)),
                n = _e(() => g(() =>
                    import ("./apps-product-browser-page-product-gwshtoco.js").then(a => a.T), __vite__mapDeps([5, 1, 2, 4, 3]),
                    import.meta.url)),
                s = xe(),
                c = () => s.getRootPage() ? .page === i.PRODUCT_WITH_SLUG_AND_ID ? n : r;
            return (a, l) => (ce(), lt(gt(c()), {
                "root-props": dt(o)
            }, null, 8, ["root-props"]))
        }
    }),
    F = {
        PRODUCT: "product",
        CATEGORY: "category",
        UNKNOWN: "unknown"
    };

function Cr(t) {
    const e = Zt(t);
    if (e !== void 0) return {
        slug: e
    }
}

function Ir(t, e, o) {
    const r = Cr(t);
    return r === void 0 ? Promise.reject(new Error(`Empty request for '${ye}'`)) : o.fetchQuery({
        queryKey: [ye, r],
        queryFn: async () => e.makeRequest("/catalog/slug", r).then(n => n.data).catch(n => {
            if (go(n) && n.isBadRequestError() && n.getData() ? .errorCode === "STORE_CLOSED") return {
                type: F.UNKNOWN
            };
            throw n
        })
    })
}

function Pr(t, e) {
    switch (t.type) {
        case F.PRODUCT:
            return to({
                productIdentifier: {
                    type: oo.PUBLISHED,
                    productId: t.entityId
                },
                categoryId: void 0,
                slugs: {
                    forRouteWithId: t.slugForRouteWithId,
                    forRouteWithoutId: t.slugForRouteWithoutId
                },
                ecConfigOverrides: e
            });
        case F.CATEGORY:
            return eo({
                entityId: t.entityId,
                slugs: {
                    forRouteWithId: t.slugForRouteWithId,
                    forRouteWithoutId: t.slugForRouteWithoutId
                },
                ecConfigOverrides: e
            });
        case F.UNKNOWN:
            return {
                page: i.HOME
            };
        default:
            return w()
    }
}

function Ar(t) {
    return de(C({ ...t,
        name: i.PRODUCT_WITH_SLUG
    }), [i.PRODUCT_WITH_SLUG])
}

function Or(t) {
    return de(C({ ...t,
        name: i.CATEGORY_WITH_SLUG
    }), [i.CATEGORY_WITH_SLUG])
}

function wr(t) {
    const e = C(t);
    return de(e, [i.SLUG])
}

function Nr(t, e) {
    return { ...t,
        query: { ...t.query,
            ...e
        }
    }
}
async function Dr(t) {
    const e = xe(),
        o = {
            replace: !0
        },
        {
            ecConfigOverrides: r
        } = ae(G());
    if (r.value ? .storefrontUrls ? .slugsWithoutIds !== !0) return A({
        page: i.HOME
    }, e, o);
    const n = wr(t),
        s = Ar(t);
    if (s ? .productId !== void 0) {
        const p = { ...s,
            slugForRouteWithoutId: n ? .slug
        };
        return A(p, e, o)
    }
    const c = Or(t);
    if (c ? .categoryId !== void 0) {
        const p = { ...c,
            slugForRouteWithoutId: n ? .slug
        };
        return A(p, e, o)
    }
    const a = qe(),
        l = ht(),
        h = await Ir(n ? .slug, a, l),
        S = Pr(h, r.value),
        f = A(S, e, o);
    return Nr(f, n ? .query)
}
const Lr = () => g(() =>
        import ("./apps-product-browser-page-account-favorites-msempvs2.js"), __vite__mapDeps([6, 1, 2, 3, 4]),
        import.meta.url),
    Z = () => g(() =>
        import ("./apps-product-browser-page-account-gk68761i.js"), __vite__mapDeps([7, 1, 3, 2, 4]),
        import.meta.url),
    Hr = () => g(() =>
        import ("./apps-product-browser-page-account-subscription-booa71lg.js"), __vite__mapDeps([8, 3, 2, 4, 1]),
        import.meta.url),
    Ur = () => g(() =>
        import ("./apps-product-browser-page-account-reviews-ie9gj7f8.js"), __vite__mapDeps([9, 3, 2, 4, 1]),
        import.meta.url),
    br = () => g(() =>
        import ("./apps-product-browser-page-cart-jd0mn03a.js"), __vite__mapDeps([10, 3, 2, 4, 1]),
        import.meta.url),
    kr = () => g(() =>
        import ("./apps-product-browser-page-checkout-address-95xr8j5v.js"), __vite__mapDeps([11, 3, 2, 4, 1]),
        import.meta.url),
    Br = () => g(() =>
        import ("./apps-product-browser-page-checkout-delivery-jyogiba2.js"), __vite__mapDeps([12, 3, 2, 4, 1]),
        import.meta.url),
    Vr = () => g(() =>
        import ("./apps-product-browser-page-checkout-order-confirmation-b7is7672.js"), __vite__mapDeps([13, 3, 2, 4, 1]),
        import.meta.url),
    Fr = () => g(() =>
        import ("./apps-product-browser-page-checkout-order-failure-k17kdj5a.js"), __vite__mapDeps([14, 3, 2, 4, 1]),
        import.meta.url),
    Gr = () => g(() =>
        import ("./apps-product-browser-page-checkout-payment-kx0yw8oy.js"), __vite__mapDeps([15, 3, 2, 4, 1]),
        import.meta.url),
    Mr = () => g(() =>
        import ("./apps-product-browser-page-checkout-result-poa163sk.js"), __vite__mapDeps([16, 3, 2, 4, 1]),
        import.meta.url),
    Wr = () => g(() =>
        import ("./apps-product-browser-page-checkout-tax-information-fz2c8l7y.js"), __vite__mapDeps([17, 3, 2, 4, 1]),
        import.meta.url),
    xr = () => g(() =>
        import ("./apps-product-browser-page-download-error-jgejyejw.js"), __vite__mapDeps([18, 3, 2, 4, 1]),
        import.meta.url),
    qr = () => g(() =>
        import ("./apps-product-browser-page-payment-link-fqfmvk8l.js"), __vite__mapDeps([19, 3, 2, 4, 1]),
        import.meta.url),
    He = () => g(() =>
        import ("./apps-product-browser-page-marketing-emails-od77bysw.js"), __vite__mapDeps([20, 2, 3, 4, 1]),
        import.meta.url),
    Ue = () => g(() =>
        import ("./apps-product-browser-page-pages-gwuukpmb.js"), __vite__mapDeps([21, 1, 3, 2, 4]),
        import.meta.url),
    Yr = () => g(() =>
        import ("./apps-product-browser-page-product-gwshtoco.js").then(t => t.a), __vite__mapDeps([5, 1, 2, 4, 3]),
        import.meta.url),
    be = () => g(() =>
        import ("./apps-product-browser-page-product-gwshtoco.js").then(t => t.T), __vite__mapDeps([5, 1, 2, 4, 3]),
        import.meta.url),
    Kr = () => g(() =>
        import ("./apps-product-browser-page-repeat-order-jw4oelcd.js"), __vite__mapDeps([22, 3, 2, 4, 1]),
        import.meta.url),
    Qr = () => g(() =>
        import ("./apps-product-browser-page-search-kkhlzl3f.js"), __vite__mapDeps([23, 1, 3, 2, 4]),
        import.meta.url),
    $r = () => g(() =>
        import ("./apps-product-browser-page-sign-in-f7zl6tcw.js"), __vite__mapDeps([24, 2, 3, 4, 1]),
        import.meta.url);

function jr() {
    return ro.map(t => {
        const e = t.pageId,
            o = t.path;
        switch (t.pageId) {
            case i.ACCOUNT:
                return {
                    name: e,
                    path: o,
                    component: Z
                };
            case i.ACCOUNT_REGISTRATION:
                return {
                    name: e,
                    path: o,
                    component: Z
                };
            case i.ACCOUNT_RESET_PASSWORD:
                return {
                    name: e,
                    path: o,
                    component: Z
                };
            case i.ACCOUNT_FAVORITES:
                return {
                    name: e,
                    path: o,
                    component: Lr
                };
            case i.ACCOUNT_SUBSCRIPTION:
                return {
                    name: e,
                    path: o,
                    component: Hr
                };
            case i.ACCOUNT_REVIEWS:
                return {
                    name: e,
                    path: o,
                    component: Ur
                };
            case i.ACCOUNT_OTHER:
                return {
                    name: e,
                    path: o,
                    redirect: r => ({
                        path: "/account",
                        query: r.query
                    })
                };
            case i.CART:
                return {
                    name: e,
                    path: o,
                    component: br
                };
            case i.CATEGORY_WITH_SLUG_AND_ID:
                return {
                    name: e,
                    path: o,
                    component: J
                };
            case i.CHECKOUT_ADDRESS:
                return {
                    name: e,
                    path: o,
                    component: kr
                };
            case i.CHECKOUT_DELIVERY:
                return {
                    name: e,
                    path: o,
                    component: Br
                };
            case i.CHECKOUT_ORDER_CONFIRMATION:
                return {
                    name: e,
                    path: o,
                    component: Vr
                };
            case i.CHECKOUT_ORDER_FAILURE:
                return {
                    name: e,
                    path: o,
                    component: Fr
                };
            case i.CHECKOUT_PAYMENT:
                return {
                    name: e,
                    path: o,
                    component: Gr
                };
            case i.CHECKOUT_RESULT:
                return {
                    name: e,
                    path: o,
                    component: Mr
                };
            case i.CHECKOUT_TAX_INFORMATION:
                return {
                    name: e,
                    path: o,
                    component: Wr
                };
            case i.DOWNLOAD_ERROR:
                return {
                    name: e,
                    path: o,
                    component: xr
                };
            case i.HOME:
                return {
                    name: e,
                    path: o,
                    component: J
                };
            case i.PAGES_WITH_ID:
                return {
                    name: e,
                    path: o,
                    component: Ue
                };
            case i.PAGES_WITHOUT_ID:
                return {
                    name: e,
                    path: o,
                    component: Ue
                };
            case i.PAY:
                return {
                    name: e,
                    path: o,
                    component: qr
                };
            case i.PRODUCT_PREVIEW:
                return {
                    name: e,
                    path: o,
                    component: Yr
                };
            case i.PRODUCT_WITH_SLUG_AND_ID:
                return {
                    name: e,
                    path: o,
                    component: be
                };
            case i.REPEAT_ORDER:
                return {
                    name: e,
                    path: o,
                    component: Kr
                };
            case i.SEARCH:
                return {
                    name: e,
                    path: o,
                    component: Qr
                };
            case i.SIGN_IN:
                return {
                    name: e,
                    path: o,
                    component: $r
                };
            case i.SUBSCRIBE:
                return {
                    name: e,
                    path: o,
                    component: He
                };
            case i.UNSUBSCRIBE:
                return {
                    name: e,
                    path: o,
                    component: He
                };
            case i.SLUG:
                return {
                    name: e,
                    path: o,
                    component: Rr,
                    beforeEnter: Dr
                };
            case i.CATEGORY_WITH_SLUG:
                return {
                    name: e,
                    path: o,
                    component: J
                };
            case i.PRODUCT_WITH_SLUG:
                return {
                    name: e,
                    path: o,
                    component: be
                };
            default:
                w(t.pageId)
        }
        return {
            name: e,
            path: o
        }
    })
}

function zr() {
    return jr().map(e => {
        if (e.component !== void 0) return {
            name: e.name,
            path: e.path,
            component: e.component,
            beforeEnter: e.beforeEnter
        };
        if (e.redirect !== void 0) return {
            name: e.name,
            path: e.path,
            redirect: e.redirect
        };
        throw new Error(`Definition of route '${e.name}' must contains 'component' or 'redirect' field`)
    })
}

function Xr(t, e, o) {
    return M(o.appMode) ? new or(e, t) : new et(e, t, o.logger)
}

function Jr(t) {
    return {
        history: t,
        routes: zr()
    }
}

function ke(t) {
    if (t === void 0) return;
    const e = t.matched[t.matched.length - 1],
        o = {
            matchedPath: e ? .path,
            matchedName: e ? .name,
            params: t.params,
            query: t.query,
            hash: t.hash
        };
    return JSON.stringify(o)
}

function Be(t, e) {
    return ke(t) === ke(e)
}

function Zr({
    router: t,
    routerHistory: e,
    urlType: o
}) {
    const r = Ze(e.historyStrategy);
    return ze(o, r, t.options.history.base)
}

function en(t) {
    const e = G(t.pinia),
        {
            ecConfigOverrides: o
        } = ae(e),
        {
            startPageTransitionIfNeeded: r
        } = no(t.pinia),
        n = o.value ? .baseUrl,
        s = o.value ? .storefrontUrls,
        c = o.value ? .isShowPBPopupDisabled ? ? !1;

    function a() {
        return {
            navigationScrollingType: o.value ? .navigation_scrolling,
            customScrollerFn: o.value ? .custom_scroller,
            scrollIndent: o.value ? .scroll_indent
        }
    }
    const l = new Map;
    let h, S, f, p, N, b, v = !1,
        W, x, D;
    const ot = (u, d) => {
            const m = u.name !== void 0 && u.name !== null ? l.get(u.name) : void 0;
            if (!(m ? .wentToRoute.name !== d.name || m ? .wentToRoute.fullPath !== d.fullPath)) return m ? .scrollPosition
        },
        rt = async u => {
            if (f !== void 0 && S !== void 0) {
                const d = (a().scrollIndent ? ? 0) !== 0,
                    m = a().customScrollerFn !== void 0,
                    k = await hr(a, u)(f, S, ot(f, S) ? ? null);
                _r(k, d, m, t.logger)
            }
        },
        q = so(s),
        y = Xr(n, q, t),
        pe = Jr(y),
        E = St(pe);

    function me(u, d) {
        x !== void 0 && (x(u, d), v = !0)
    }
    const R = { ...E,
        options: pe,
        dynamicOptions: Fe(void 0),
        pushSsr: u => E.push(u),
        push: (u, d) => E.push(A(u, R, d)),
        replace: (u, d) => E.replace(A(u, R, d)),
        scrollToContent: () => rt(R),
        setAfterNavigationGuard: u => {
            x = u
        },
        setBeforeNavigationGuard: u => {
            W = u
        },
        callAfterNavigationGuard: () => {
            p !== void 0 && N !== void 0 && !v && me(p, N)
        },
        setBaseUrl: u => {
            y.base = u
        },
        setRootPage: u => {
            h = u
        },
        getRootPage: () => h,
        isNavigationOccurred: () => D ? ? !1
    };
    return E.beforeResolve((u, d) => {
        const m = C(d, R),
            L = C(u, R);
        r(L, m)
    }), E.beforeEach(async (u, d) => {
        S = d, f = u, t.logger.info(_.ROUTER, "Navigating to", u);
        const m = C(d, R),
            L = C(u, R);
        let k;
        if (t.ecommerce ? .dispatchTypedEvent(Ye.ON_BEFORE_ROUTE_CHANGED, new Ko({
                fromPage: m,
                toPage: L
            })) === !1) return t.logger.info(_.ROUTER, "Navigation cancelled by RouteChangeEvent"), !1;
        if (!Be(u, b) && W !== void 0 && (k = await W(u, d)), k === !1) return t.logger.info(_.ROUTER, "Navigation cancelled"), !1;
        const nt = y instanceof et && (b === void 0 || y.getIsHashChangeEventTriggered());
        if (b = u, nt) {
            const B = Zr({
                router: E,
                routerHistory: y,
                urlType: q
            });
            if (y.setHashChangeEventTriggered(!1), B !== void 0) {
                y.setNeedChangeUrlDuringFirstNavigation(!0);
                const Y = E.resolve(B);
                t.logger.info(_.ROUTER, "Redirecting from", d, "to", u, "due to strategy difference"), E.replace(Y);
                return
            }
        }
        if (D === void 0 ? D = !1 : D || (D = !0), c || ao(L, m, t, Tr(o.value, y.historyStrategy, u, q, window.ecwid_ProductBrowserURL), e.globalOverrides), d.name !== void 0 && d.name !== null) {
            const {
                scrollX: B = 0,
                scrollY: Y = 0
            } = window;
            l.set(d.name, {
                scrollPosition: {
                    left: B,
                    top: Y
                },
                wentToRoute: u
            })
        }
    }), E.afterEach((u, d, m) => {
        m === void 0 && (Be(p, u) || (p = u, N = d, me(u, d)))
    }), R
}

function tn() {
    return {
        queries: {
            retry: 0,
            staleTime: 1440 * 60 * 1e3,
            refetchOnWindowFocus: !1
        }
    }
}

function on(t) {
    const e = ft();
    for (const [o, r] of Object.entries(t)) e.state.value[o] = r;
    return e
}

function rn(t) {
    t.requestContext.pinia = on(t.piniaState), t.requestContext.queryClient = new pt({
        defaultOptions: tn()
    }), t.requestContext.router = en({
        apiEventBus: t.requestContext.apiEventBus,
        appMode: t.widgetData.appMode,
        ecommerce: t.ecommerce,
        logger: t.logger,
        pinia: t.requestContext.pinia,
        queryClient: t.requestContext.queryClient
    });
    const e = io(Yo, "StartupApp", t);
    return co({
        app: e,
        config: t,
        rootPage: void 0
    }), e
}
const un = async function(t) {
    const e = rn(t);
    return e.mount(t.containerElement), {
        unmountFn: e.unmount
    }
};
export {
    un as render
};
//# sourceMappingURL=https://storefront.ecwid.dev:16088/static/apps-startup-fahwaxzm.js.map