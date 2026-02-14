const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./shared-chunk-date-fns-j9nh7klk.js", "./vendor-date-fns-erdzsaps.js"]))) => i.map(i => d[i]);
import {
    K as Q,
    L as H,
    I as D,
    x as Y,
    c as M,
    r as E,
    M as Rt,
    N as Ft,
    G as F,
    O as Ie,
    P as Lt,
    Q as Ut,
    R as Dt,
    B as kt,
    d as Nt,
    t as Le,
    z as Jt,
    _ as Mt,
    i as Bt,
    o as xt
} from "./vendor-fein6u71.js";
import {
    M as Vt,
    N as Gt,
    O as oe,
    Q as Ht,
    U as Yt,
    K as Ve,
    V as Ge,
    P as $t,
    W as Wt,
    X as qt,
    Y as He,
    Z as T,
    m as K,
    _ as Ye,
    $ as Qt,
    a0 as Kt,
    a1 as zt,
    F as z,
    a2 as jt,
    a3 as Xt,
    a4 as Zt,
    R as f,
    a5 as en,
    a6 as tn,
    a7 as nn,
    a8 as ae,
    a9 as rn,
    aa as on,
    ab as ue,
    ac as b,
    ad as w,
    ae as ce,
    S as de,
    af as $e,
    ag as an,
    ah as me,
    ai as Ae,
    aj as We,
    ak as qe,
    al as sn,
    am as un,
    an as Qe,
    ao as cn,
    ap as dn,
    aq as Ke,
    ar as ze,
    as as ln,
    at as gn,
    au as fn,
    av as se,
    aw as Cn,
    ax as le,
    ay as pn,
    az as Sn,
    aA as Ue,
    aB as vn,
    aC as Pn,
    aD as hn,
    aE as In,
    aF as mn,
    aG as An,
    aH as En,
    aI as yn,
    aJ as Tn,
    aK as On,
    aL as _n,
    aM as bn,
    aN as wn,
    aO as Rn,
    aP as Fn,
    aQ as Ln,
    aR as Un,
    aS as Dn,
    aT as kn,
    aU as Nn,
    G as je,
    aV as q,
    aW as Jn,
    aX as I,
    aY as Mn,
    aZ as Bn,
    a_ as xn,
    a$ as Vn,
    b0 as Gn,
    b1 as Hn,
    b2 as ee,
    b3 as Yn,
    b4 as $n,
    b5 as Wn,
    b6 as O,
    b7 as qn,
    b8 as Ee,
    b9 as Qn,
    ba as Kn,
    bb as Xe,
    bc as zn,
    bd as jn,
    be as Xn,
    bf as Zn,
    bg as er,
    bh as tr,
    bi as nr,
    bj as te,
    bk as rr,
    bl as or,
    bm as ar,
    bn as sr,
    bo as ir,
    bp as ur,
    bq as cr,
    br as dr,
    bs as lr,
    bt as gr,
    bu as fr,
    bv as Cr,
    b as pr,
    e as Sr,
    bw as vr,
    bx as Pr,
    a as hr,
    by as Ir,
    bz as mr,
    bA as Ar,
    bB as Er,
    j as yr,
    k as Tr,
    l as Or
} from "./shared-k1b52rt2.js";
import {
    L as u,
    _ as Ze,
    i as re,
    l as _r,
    s as br,
    p as G,
    a as wr,
    d as Rr
} from "./ecommerce-lynkwow4.js";

function Fr(e) {
    return {
        identifier: {
            productId: e.product.id,
            recurringSubscription: void 0,
            nameYourPriceCustomPrice: void 0,
            selectedOptions: void 0
        },
        options: {},
        quantity: e.quantity,
        categoryId: void 0,
        isPreorder: !1,
        isPreorderAllowed: void 0,
        price: e.product.price,
        amounts: {
            price: e.product.price,
            subtotal: e.quantity * e.product.price
        }
    }
}

function Lr(e, t) {
    const n = t ? ? Ve();
    return { ...n,
        cartItems: e.items.map(Fr),
        amounts: { ...n.amounts,
            total: e.total ? ? n.amounts.total
        }
    }
}

function Ur() {
    const e = Q(),
        t = Vt(),
        n = Gt(),
        {
            sessionToken: r
        } = oe();
    return ({
        cart: o,
        shouldRefetchCart: a
    }) => {
        if (o !== void 0) {
            const c = n.data.value ? ? Ht(),
                d = Lr(o, c.checkout);
            e.setQueryData(t, { ...c,
                checkout: d
            })
        }
        a === !0 && Yt(r.value) && n.refetch().then()
    }
}

function y(e, t, n, r) {
    if (e === void 0) {
        r.info(u.JS_API, `${n}: finished successfully. Args:`, t);
        return
    }
    const o = H(e);
    try {
        const a = e(...t);
        return r.info(u.JS_API, `${n}: called callback`, o, "with args", t, ". Result:", a), a
    } catch (a) {
        r.error(u.JS_API, `${n}: exception during callback execution`, o, "with args", t, ". Error:", a);
        return
    }
}

function Dr(e, t, n, r) {
    const o = Ge({
        ecConfigOverrides: r,
        productIdentifier: {
            type: $t.PUBLISHED,
            productId: e
        },
        categoryId: void 0,
        slugs: t
    });
    return Wt(o, n)
}

function kr() {
    return {
        id: void 0,
        cartId: "",
        orderId: 0,
        billingPerson: void 0,
        couponName: void 0,
        items: [],
        paymentMethod: void 0,
        paymentModule: void 0,
        productsQuantity: 0,
        shippingMethod: void 0,
        shippingPerson: void 0,
        weight: 0,
        isPricesIncludeTax: void 0,
        total: void 0,
        subtotal: void 0,
        tax: void 0
    }
}
const Nr = async e => {
    if (e.some(t => t.identifier ? .selectedOptions !== void 0 && Object.values(t.identifier.selectedOptions).some(n => n.type === He.DATE))) {
        const {
            formatDateByCustomLocale: t
        } = await Ze(async () => {
                const {
                    formatDateByCustomLocale: n
                } = await
                import ("./shared-chunk-date-fns-j9nh7klk.js").then(r => r.f);
                return {
                    formatDateByCustomLocale: n
                }
            }, __vite__mapDeps([0, 1]),
            import.meta.url);
        return t
    }
};

function fe(e, t, n) {
    const r = e.productInfo ? .slugs ? ? {
        forRouteWithId: "",
        forRouteWithoutId: void 0
    };
    return {
        id: e.identifier ? .productId ? ? 0,
        ...e.variationId !== void 0 ? {
            variation: e.variationId
        } : {},
        sku: e.productInfo ? .sku ? ? "",
        price: e.amounts ? .price ? ? e.price,
        name: e.productInfo ? .name ? ? "",
        selectedPrice: e.identifier ? .nameYourPriceCustomPrice,
        isCustomerSetPrice: !!e.identifier ? .nameYourPriceCustomPrice,
        weight: e.productInfo ? .weight ? .value ? ? 0,
        shortDescription: e.productInfo ? .description ? ? "",
        mediaItem: e.productInfo ? .mediaItem,
        recurringChargeSettings: e.productInfo ? .recurringChargeSettings,
        url: Dr(e.identifier ? .productId ? ? 0, r, t, n)
    }
}

function Jr(e) {
    const t = fe(e.cartItem, e.storefrontRouter, e.ecConfigOverrides);
    if (t !== void 0) return {
        quantity: e.cartItem.quantity,
        product: t,
        options: e.cartItem.options
    }
}
async function N(e, t, n, r, o) {
    if (e === void 0) return kr();
    const a = e.cartItems.reduce((d, g) => d + g.quantity, 0),
        c = e.cartItems.reduce((d, g) => d + g.quantity * (g.productInfo ? .weight ? .value ? ? 0), 0);
    return await Nr(e.cartItems), {
        id: e.identifiers.orderId ? ? "",
        cartId: e.identifiers.abandonedCartId ? ? "",
        orderId: e.identifiers.internalOrderId ? ? 0,
        billingPerson: { ...e.payment ? .billingPerson
        },
        couponName: e.discounts ? .couponName,
        items: e.cartItems ? .map(d => Jr({
            cartItem: d,
            ecConfigOverrides: o,
            storefrontRouter: r
        })) ? .filter(qt),
        paymentMethod: e.payment ? .method,
        paymentModule: e.payment ? .module,
        productsQuantity: a,
        shippingMethod: e.shipping ? .method,
        shippingPerson: { ...e.shipping ? .person
        },
        weight: c,
        isPricesIncludeTax: e.amounts ? .isPricesIncludeTax,
        total: e.amounts ? .total,
        subtotal: e.amounts ? .subtotal,
        tax: e.amounts ? .tax
    }
}
const et = "Ecwid.Cart.addProduct";

function Mr(e) {
    return async () => {
        const t = await N(e.checkout, e.storeProfile, e.i18n, e.storefrontRouter, e.ecConfigOverrides);
        y(e.callback, [!1, null, t, null], et, e.logger)
    }
}

function Br(e, t, n, r) {
    const o = e.cartItems.find(a => Kt(a, t)) ? ? t;
    return fe(o, n, r)
}
const xr = async (e, t) => {
    if (t == null) return;
    const n = new Set(Object.keys(t));
    if (e.some(r => r.type === He.DATE && (n.has(r.optionId) || n.has(r.optionText)))) {
        const {
            formatDateInDefaultFormat: r
        } = await Ze(async () => {
                const {
                    formatDateInDefaultFormat: o
                } = await
                import ("./shared-chunk-date-fns-j9nh7klk.js").then(a => a.f);
                return {
                    formatDateInDefaultFormat: o
                }
            }, __vite__mapDeps([0, 1]),
            import.meta.url);
        return r
    }
};

function Vr(e, t, n) {
    const r = T(),
        o = D(),
        a = K(),
        {
            addToCart: c
        } = Ye(t),
        d = Qt(e, xr, t);
    return async g => {
        const l = n.value ? ? Ve(),
            C = Mr({
                callback: g.callback,
                logger: r,
                checkout: l,
                storeProfile: t.value,
                storefrontRouter: o,
                i18n: a,
                ecConfigOverrides: e.ecConfigOverrides
            }),
            i = d(g, l);
        c(i).then(async S => {
            const p = await i,
                A = Br(S, p, o, e.ecConfigOverrides),
                P = await N(S, t.value, a, o, e.ecConfigOverrides);
            y(g.callback, [!0, A, P, null], et, r)
        }).catch(() => C())
    }
}
async function Gr(e, t, n, r, o) {
    const a = e ? .amounts ? ? zt(),
        c = await N(e, n, t, r, o);
    return {
        subtotal: a.subtotal,
        subtotalWithoutTax: a.subtotalWithoutTax,
        total: a.total,
        totalWithoutTax: a.totalWithoutTax,
        tax: a.tax,
        couponDiscount: a.couponDiscount,
        volumeDiscount: a.volumeDiscount,
        customerGroupDiscount: a.customerGroupDiscount,
        customerGroupVolumeDiscount: a.customerGroupVolumeDiscount,
        discount: a.discount,
        shipping: a.shipping,
        shippingWithoutTax: a.shippingWithoutTax,
        handlingFee: a.handlingFee,
        handlingFeeWithoutTax: a.handlingFeeWithoutTax,
        pricesIncludeTax: a.isPricesIncludeTax,
        cart: c
    }
}

function Hr(e) {
    switch (e.errorCode) {
        case "DISABLED_FUNCTIONALITY":
            return 1e3;
        case "VALIDATION_ERROR":
            return 100;
        case "MISSING_EMAIL":
            return 0;
        default:
            return ae(e.errorCode)
    }
}

function Yr(e) {
    const t = window.getEcwidV2Object() ? .Cart;
    t !== void 0 && (e.billingPerson !== void 0 && t.setBillingAddress(e.billingPerson), e.shippingPerson !== void 0 && t.setAddress(e.shippingPerson), e.orderComments !== void 0 && t.setOrderComments(e.orderComments), e.email !== void 0 && t.setCustomerEmail(e.email))
}

function $r(e) {
    const t = T();
    return (n, r, o, a) => {
        e(n).then(() => {
            y(r, [], a, t), Yr(n)
        }).catch(c => {
            if (re(c)) {
                const d = c.getData();
                d !== void 0 && y(o, [Hr(d), d.errorMessage], a, t)
            }
            throw c
        })
    }
}

function Wr(e) {
    const t = T(),
        n = "Ecwid.Cart.clear()";
    return r => {
        e().then(() => {
            y(r, [!0, null], n, t)
        }).catch(o => {
            y(r, [!1, o.message], n, t)
        })
    }
}

function qr() {
    const e = T();
    return t => {
        y(t, [], "Ecwid.Cart.canGotoCheckout()", e)
    }
}

function Qr() {
    const e = T(),
        t = D();
    return n => {
        t.push({
            page: f.CART
        }).then(() => {
            y(n, [], "Ecwid.Cart.gotoCheckout()", e)
        })
    }
}

function ye() {
    const e = Q(),
        t = oe(),
        {
            fetch: n
        } = tn();
    return () => nn(t, n, e)
}

function Kr(e, t) {
    const n = ye(),
        r = T(),
        o = D(),
        a = K(),
        {
            ecConfigOverrides: c
        } = Y(z());
    return async d => {
        e.value === void 0 && await n();
        const g = await N(e.value, t.value, a, o, c.value);
        y(d, [g], "Ecwid.Cart.get()", r)
    }
}

function zr(e) {
    const t = ye(),
        n = K(),
        r = D(),
        o = T(),
        a = "Ecwid.Cart.removeProducts()",
        {
            ecConfigOverrides: c
        } = Y(z()),
        {
            mutateAsync: d
        } = jt();
    return (g, l, C) => {
        if (g === void 0) return;
        const i = new Set;
        for (const S of g) {
            const p = typeof S == "string" ? parseInt(S, 10) : S;
            isNaN(p) ? i.add(S) : i.add(p)
        }
        t().then(async S => {
            const p = S ? .cartItems.filter((v, h) => i.has(h)),
                A = `Removing products from cart by ${l?"indexes":"index"}`;
            async function P(v) {
                const h = await N(S, e.value, n, r, c.value);
                y(C, [!1, void 0, 0, h, v], a, o)
            }
            const L = S ? .cartItems.length === 0,
                j = p === void 0 || p.length === 0;
            if (L || j) {
                const v = L ? `${A}, cart is empty.` : `${A}, invalid ${l?"indexes":"index"}.`;
                await P(l ? [v] : v);
                return
            }
            if (p.length !== i.size) {
                const v = [];
                for (const h of i) typeof h != "number" || isNaN(h) ? v.push(`${A}, invalid index value ${h}`) : S ? .cartItems[h] === void 0 && v.push(`${A}, index ${h} is out of range`);
                await P(l ? v : v.join(", "));
                return
            }
            d(p.map(v => v.identifier)).then(async v => {
                const h = await N(v, e.value, n, r, c.value),
                    J = p.map(_ => fe(_, r, c.value)),
                    k = p.reduce((_, $) => _ + $.quantity, 0),
                    x = l ? J : J[0];
                y(C, [!0, x, k, h, null], a, o)
            }).catch(async v => {
                l ? await P([v.message]) : await P(v.message)
            })
        })
    }
}

function jr(e) {
    const t = ye(),
        n = K(),
        r = D(),
        o = T(),
        a = "Ecwid.Cart.updateProduct()",
        {
            ecConfigOverrides: c
        } = Y(z()),
        {
            mutateAsync: d
        } = Xt();
    return (g, l) => {
        const C = g.index,
            i = g.quantity;
        if (C === void 0) return;
        const S = C;
        t().then(async p => {
            const A = p ? .cartItems[S],
                P = "Updating product in cart by index";
            async function L(v) {
                const h = await N(p, e.value, n, r, c.value);
                y(l, [!1, void 0, g, h, v], a, o)
            }
            if (p ? .cartItems.length === 0) {
                await L(`${P}. Cart is empty`);
                return
            }
            if (A ? .identifier === void 0) {
                isNaN(S) ? await L(`${P}. Invalid index value '${C}'`) : await L(`${P}. Index ${C} is out of range`);
                return
            }
            d({
                identifier: A.identifier,
                quantity: i
            }).then(async v => {
                const h = await N(v, e.value, n, r, c.value),
                    J = fe(A, r, c.value);
                let k = null;
                const x = v.cartItems.find(_ => Zt(_.identifier, A.identifier));
                if (x !== void 0) {
                    const _ = x.quantity;
                    i !== 0 && i > _ && (k = `${P}. Adjusted to ${_} (max quantity allowed)`)
                } else k = `${P}. Product removed: ${i===0?"quantity set to 0":"currently out of stock"}`;
                y(l, [k === null, J, g, h, k], a, o)
            }).catch(async v => {
                re(v) ? await L(`${P}. ${v.getData()?.errorMessage}`) : await L(`${P}. ${v.message}`)
            })
        })
    }
}

function Xr(e, t) {
    const {
        mutateAsync: n
    } = en(), r = T(), o = K(), a = D(), {
        ecConfigOverrides: c
    } = Y(z());
    return async d => {
        await n();
        const g = await Gr(e.value, o, t.value, a, c.value);
        y(d, [g], "Ecwid.Cart.calculateTotal()", r)
    }
}

function Zr(e, t, n) {
    const {
        updateCheckout: r,
        clearCheckout: o
    } = Ye(n), a = Kr(t, n), c = $r(r), d = Wr(o), g = Vr(e, n, t), l = zr(n), C = Ur(), i = jr(n), S = qr(), p = Qr(), A = Xr(t, n);
    return {
        getCart: a,
        addToCart: g,
        updateCart: c,
        clearCart: d,
        refreshCartInfo: C,
        removeFromCart: l,
        updateCartItem: i,
        canGoToCheckout: S,
        goToCheckout: p,
        calculateTotal: A,
        updateCheckout: r
    }
}

function tt() {
    const e = Q();
    return {
        invalidateCustomerSubscriptionsQueries: () => {
            e.invalidateQueries({
                queryKey: [rn]
            }).then()
        }
    }
}

function eo(e) {
    return M(() => e.value.length > 0)
}

function to() {
    const e = E(!1),
        t = () => {
            e.value = !0
        };
    return Rt(() => {
        addEventListener("beforeunload", t)
    }), Ft(() => {
        removeEventListener("beforeunload", t)
    }), e
}

function no(e, t, n) {
    const r = K(),
        o = D(),
        a = E(void 0);
    return F(() => t.value, () => {
        N(t.value, n.value, r, o, e.ecConfigOverrides).then(c => {
            Ie(c, a.value) || (a.value = c)
        })
    }), a
}

function De(e) {
    return {
        city: e.city,
        companyName: e.companyName,
        countryCode: e.countryCode,
        countryName: e.countryName,
        name: e.name,
        phone: e.phone,
        postalCode: e.postalCode,
        stateOrProvinceCode: e.stateOrProvinceCode,
        street: e.street
    }
}

function ro(e, t) {
    if (!(t.customerGroup === void 0 || t.customerGroup.id === 0)) return {
        id: t.customerGroup.id,
        name: t.customerGroup.name,
        ownerId: e
    }
}

function oo(e) {
    return (new Date(e).getTime() / 1e3).toString()
}

function ao(e, t) {
    if (t === void 0) return;
    if (!on(t)) return null;
    const n = t.customer,
        r = n.shippingPersons.map(o => ({
            id: 0,
            person: De(o)
        }));
    return {
        billingPerson: De(n.billingPerson),
        email: n.email,
        id: n.id,
        membership: ro(e, n),
        ownerId: e,
        registered: oo(n.registrationDate),
        shippingAddresses: r
    }
}

function so(e, t) {
    return M(() => ao(e, t.value))
}

function io() {
    const e = T(),
        t = ue(ce.AB_TEST),
        n = ue(ce.CUSTOMER_FAVORITES),
        r = ue(ce.UTM),
        o = ue(ce.EMAIL);
    return {
        getSupportedStorages: () => ({
            [w.AB_TEST]: [b.AB_TEST],
            [w.CUSTOMER_SESSION]: [b.CUSTOMER_FAVORITES],
            [w.UTM]: [b.UTM_HISTORY],
            [w.EMAIL]: [b.EMAIL]
        }),
        getStorageValue: (g, l) => {
            if (e.info(u.JS_API, "Ecwid.getStorageValue()", {
                    storageName: g,
                    key: l
                }), g === w.AB_TEST && l === b.AB_TEST) return t.value;
            if (g === w.CUSTOMER_SESSION && l === b.CUSTOMER_FAVORITES) return n.value;
            if (g === w.UTM && l === b.UTM_HISTORY) return r.value;
            if (g === w.EMAIL && l === b.EMAIL) return o.value;
            throw new Error(`Getting value for storage '${g}' and key '${l}' is not supported`)
        },
        setStorageValue: (g, l, C) => {
            if (e.info(u.JS_API, "Ecwid.setStorageValue()", {
                    storageName: g,
                    key: l,
                    value: C
                }), g === w.AB_TEST && l === b.AB_TEST) t.value = C;
            else if (g === w.CUSTOMER_SESSION && l === b.CUSTOMER_FAVORITES) n.value = C;
            else if (g === w.UTM && l === b.UTM_HISTORY) r.value = C;
            else if (g === w.EMAIL && l === b.EMAIL) o.value = C;
            else throw new Error(`Setting value for storage '${g}' and key '${l}' is not supported`)
        }
    }
}

function uo(e) {
    return M(() => {
        switch (e.value ? .storeProfile ? .type) {
            case de.GENERAL_CLOSED:
            case de.SHOWROOM_CLOSED:
            case de.FRAUD_CLOSED:
                return !0;
            case de.OPENED:
                return !1;
            case void 0:
                return;
            default:
                ae()
        }
    })
}

function co(e) {
    const t = window,
        n = {
            storeClosed: e
        };
    t.ecwid_initial_data === void 0 && (t.ecwid_initial_data = {
        data: n
    }), t.ecwid_initial_data.data === void 0 && (t.ecwid_initial_data.data = n)
}

function lo(e) {
    F(uo(e), co)
}

function U(e, t, n, r) {
    const o = $e(e);
    if (o.length === 0) return;
    const a = o.map(c => H(c));
    r.info(u.JS_API, `${n}: calling callbacks`, a, "with arguments", t);
    for (const c of a) try {
        c ? .(...t)
    } catch (d) {
        r.error(u.JS_API, `${n}: exception during execution of callback`, c, d)
    }
}

function go(e, t, n) {
    t !== void 0 && U(e, [t], "Ecwid.OnOrderPlaced", n)
}

function fo(e) {
    const t = T();
    return n => {
        go(e.value, n, t)
    }
}
const Co = () => {
        const e = T();
        return Lt({
            mutationKey: [me],
            scope: {
                id: an
            },
            mutationFn: async t => {
                if (e.info(u.MUTATION, "StorefrontV2Sync start mutation"), t === void 0) return Promise.resolve();
                try {
                    const n = await t;
                    return e.info(u.MUTATION, "StorefrontV2Sync finish mutation"), n
                } catch (n) {
                    return e.info(u.MUTATION, `StorefrontV2Sync finish mutation with error ${n}`), Promise.resolve()
                }
            }
        })
    },
    po = () => {
        const {
            mutateAsync: e
        } = Co();
        return {
            mutateStorefrontV2Sync: e
        }
    };

function So() {
    const e = We(),
        t = qe();
    return async () => {
        const n = {
            lang: t.value
        };
        return e.makeRequest("/previous-checkout", n).then(r => r.data)
    }
}

function vo(e) {
    const {
        sessionToken: t
    } = oe(), {
        unboundPreviousCheckout: n
    } = Ae(), r = M(() => sn(t.value)), o = So();
    return Ut({
        queryKey: [un, r],
        queryFn: async () => r.value ? o().catch(a => {
            if (re(a) && (a.isUnauthorizedError() || a.isNotFoundError())) return n().then(), {};
            throw a
        }) : Promise.resolve({}),
        enabled: e
    })
}
const V = {
    IP_ADDRESS: "IP_ADDRESS",
    BILLING_ADDRESS: "BILLING_ADDRESS",
    SHIPPING_ADDRESS: "SHIPPING_ADDRESS"
};

function W(e, t) {
    return {
        countryCode: e.countryCode,
        stateCode: e.stateOrProvinceCode,
        source: t
    }
}

function Po(e) {
    const t = dn(e);
    return M(() => ({
        countryCode: t.value ? .countryCode,
        stateCode: t.value ? .stateOrProvinceCode,
        source: V.IP_ADDRESS
    }))
}

function ho(e) {
    const t = e ? .shippingPersons;
    if (t !== void 0) return t[t.length - 1]
}

function Io(e, t) {
    const {
        isFetched: n,
        data: r
    } = e, o = Po(t), a = M(() => n.value && r.value ? .payment ? .billingPerson ? .countryCode === void 0 && r.value ? .shipping ? .person ? .countryCode === void 0), {
        isFetched: c,
        data: d
    } = vo(a), g = M(() => c.value && d.value ? .billingPerson ? .countryCode === void 0 && d.value ? .shippingPerson ? .countryCode === void 0), {
        isFetched: l,
        data: C
    } = Qe(g), i = cn(C), S = M(() => n.value && (!a.value || c.value) && (!g.value || l.value)), p = E(!1);
    return F(S, () => {
        p.value || (p.value = S.value)
    }, {
        immediate: !0
    }), {
        isInitialized: p,
        getVisitorLocation: () => {
            if (r.value ? .shipping ? .person ? .countryCode !== void 0) return W(r.value.shipping.person, V.SHIPPING_ADDRESS);
            if (r.value ? .payment ? .billingPerson ? .countryCode !== void 0) return W(r.value.payment.billingPerson, V.BILLING_ADDRESS);
            if (d.value ? .shippingPerson ? .countryCode !== void 0) return W(d.value.shippingPerson, V.SHIPPING_ADDRESS);
            if (d.value ? .billingPerson ? .countryCode !== void 0) return W(d.value.billingPerson, V.BILLING_ADDRESS);
            const P = ho(i.value);
            return P ? .countryCode !== void 0 ? W(P, V.SHIPPING_ADDRESS) : i.value ? .billingPerson.countryCode !== void 0 ? W(i.value.billingPerson, V.BILLING_ADDRESS) : o.value
        }
    }
}

function mo(e, t, n) {
    if (n === void 0) return;
    Ke({
        status: "pending",
        predicate: o => {
            const a = o.options.mutationKey ? .[0];
            return a !== me && ze.includes(a)
        }
    }, e).then(() => {
        y(n, [], "Ecwid.onAllCheckoutMutationsCompleted", t)
    })
}

function ke(e, t, n, r, o) {
    n === void 0 || !r || (t.refreshEcConfig(window.ec.config ? ? {}), U(e, [], "Ecwid.OnApiLoaded", o))
}

function Ao(e, t, n) {
    t !== void 0 && U(e, [t], "Ecwid.OnCartChanged", n)
}

function Eo() {
    const e = Q();
    return {
        invalidateCustomerOrdersQueries: () => {
            e.invalidateQueries({
                queryKey: [ln]
            }).then()
        }
    }
}

function yo() {
    const e = gn();
    return {
        invalidateCustomerQueries: () => {
            e().then()
        }
    }
}

function Ne(e, t) {
    return e ? .countryCode !== t ? .countryCode || e ? .stateOrProvinceCode !== t ? .stateOrProvinceCode
}

function To(e, t) {
    const n = e ? .shipping ? .person,
        r = e ? .payment ? .billingPerson;
    return Ne(n, t.shippingPerson) || Ne(r, t.billingPerson)
}

function Oo(e) {
    const t = T(),
        {
            unboundCheckout: n
        } = Ae(),
        {
            checkoutInfo: r
        } = oe(),
        {
            invalidateAllProductQueries: o
        } = fn(),
        {
            invalidateCustomerOrdersQueries: a
        } = Eo(),
        {
            invalidateCustomerSubscriptionsQueries: c
        } = tt(),
        {
            invalidateCustomerQueries: d
        } = yo();
    return g => {
        To(e.value, g) && o(), r.value ? .id === void 0 && (t.info(u.JS_API, "Ecwid.OnCartChanged (legacy): unbound checkout from session"), n().then(() => {
            a(), c(), d()
        }))
    }
}
const _o = async (e, t, n) => {
    try {
        await t(e)
    } catch (r) {
        n.error(u.JS_API, "Ecwid.onSyncStarted (legacy) failed during of mutation", r)
    }
};

function bo(e, t, n) {
    U(e, [t], "Ecwid.OnCartSynchronized", n)
}

function wo(e) {
    Ie(e.newChameleonSettings, e.oldChameleonSettings) || (e.logger.warn(u.JS_API, "Chameleon settings changed from", H(e.oldChameleonSettings), "to", H(e.newChameleonSettings)), e.bootstrapPromise.then(t => {
        _r(t, e.globalOverridesStore.globalOverrides, e.requestContext, e.logger, e.storefrontSessionStorage.storeId).then()
    }))
}

function Ro(e, t, n) {
    t !== null && U(e, [t], "Ecwid.OnConsentChanged", n)
}

function Fo(e, t, n) {
    return {
        type: se.PRODUCT,
        categoryId: t ? ? -1,
        mainCategoryId: 0,
        name: Cn(e.slugForRouteWithoutId) ? ? e.slugForRouteWithId ? ? "",
        nameTranslated: {},
        productId: e.productId ? ? 0,
        hasPrevious: n
    }
}

function Lo(e, t, n) {
    return {
        type: se.PRODUCT,
        categoryId: t ? ? -1,
        mainCategoryId: 0,
        name: e.slugForRouteWithId ? ? "",
        nameTranslated: {},
        productId: e.productId ? ? 0,
        hasPrevious: n
    }
}

function Je(e) {
    return je(e) ? .categoryId
}

function Te(e, t) {
    if (e === void 0) return le();
    const n = e.page,
        r = t !== void 0;
    switch (n) {
        case f.ACCOUNT:
            return Nn(r);
        case f.ACCOUNT_FAVORITES:
            return kn(r);
        case f.ACCOUNT_REGISTRATION:
            return Dn(r);
        case f.ACCOUNT_RESET_PASSWORD:
            return Un(r);
        case f.ACCOUNT_SUBSCRIPTION:
            return Ln(e, r);
        case f.ACCOUNT_REVIEWS:
            return Fn(e, r);
        case f.CART:
            return Rn(r);
        case f.CATEGORY_WITH_SLUG:
            return wn(e, r);
        case f.CATEGORY_WITH_SLUG_AND_ID:
            return bn(e, r);
        case f.CHECKOUT_ADDRESS:
            return _n(r);
        case f.CHECKOUT_DELIVERY:
            return On(r);
        case f.CHECKOUT_ORDER_CONFIRMATION:
            return Tn(r);
        case f.CHECKOUT_ORDER_FAILURE:
            return yn(r);
        case f.CHECKOUT_PAYMENT:
            return En(r);
        case f.CHECKOUT_RESULT:
            return An(r);
        case f.CHECKOUT_TAX_INFORMATION:
            return mn(r);
        case f.DOWNLOAD_ERROR:
            return In(r);
        case f.HOME:
            return hn(e, r);
        case f.PAGES_WITHOUT_ID:
        case f.PAGES_WITH_ID:
            return Pn(e, r);
        case f.PRODUCT_PREVIEW:
            return le();
        case f.PRODUCT_WITH_SLUG:
            return Fo(e, Je(t), r);
        case f.PRODUCT_WITH_SLUG_AND_ID:
            return Lo(e, Je(t), r);
        case f.REPEAT_ORDER:
            return le();
        case f.SEARCH:
            return vn(e, r);
        case f.SIGN_IN:
            return Ue(r);
        case f.SLUG:
            return Ue(r);
        case f.PAY:
            return le();
        case f.SUBSCRIBE:
            return Sn(e, r);
        case f.UNSUBSCRIBE:
            return pn(e, r);
        default:
            return ae()
    }
}

function Uo(e, t, n, r, o) {
    const a = q(t, r),
        c = q(n, r),
        d = Te(a, c);
    d.type !== se.MISSING && U(e, [d], "Ecwid.OnPageLoad", o)
}

function Pe(e, t, n, r) {
    t !== void 0 && U(e, [t], n ? "Ecwid.OnPageLoaded [legacy]" : "Ecwid.OnPageLoaded", r)
}
async function Do(e) {
    if (e.pageSwitchCallbacks.length === 0 || e.from === Dt || e.isWindowUnloaded) return;
    const t = q(e.to, e.router),
        n = q(e.from, e.router),
        r = Te(t, n);
    if (r.type !== se.MISSING) {
        await Ke({
            status: "pending"
        }, e.queryClient);
        for (const o of e.pageSwitchCallbacks)
            if (y(o, [r], "Ecwid.OnPageSwitch", e.logger) === !1) return !1
    }
}

function ko(e, t, n) {
    U(e, [t], "Ecwid.OnProductOptionsChanged", n)
}

function No(e, t, n, r, o) {
    e !== null ? (o.info(u.JS_API, "Ecwid.OnProfileSet (legacy): refetching customer"), t()) : Jn(r) && (o.info(u.JS_API, "Ecwid.OnProfileSet (legacy): unbound customer from session"), n())
}
async function Me(e, t, n) {
    t !== void 0 && U(e, [t], "Ecwid.OnRouterStateChanged", n)
}

function Jo(e, t, n) {
    U(t, [{
        token: e
    }], "Ecwid.OnSessionChanged", n)
}

function Be(e, t, n) {
    t !== void 0 && U(e, [t], "Ecwid.OnSetProfile", n)
}

function Mo(e, t) {
    t.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onApiLoaded"), e.apiEventBus.publish(I.ON_API_LOADED_LEGACY)
}

function Bo(e, t, n) {
    n.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onCartChanged()", e), t.apiEventBus.publish(I.ON_CART_CHANGED_LEGACY, e)
}

function xo(e, t) {
    t.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onCartSyncFinished()"), e.apiEventBus.publish(I.ON_CART_SYNCHRONIZED_LEGACY)
}

function Vo(e, t, n) {
    n.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onCartSyncStarted()", e), t.apiEventBus.publish(I.ON_CART_SYNC_STARTED_LEGACY, e)
}

function Go(e, t, n) {
    n.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onCustomerChanged()", e), t.apiEventBus.publish(I.ON_PROFILE_SET_LEGACY, e)
}

function Ho(e, t, n) {
    n.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onOrderPlaced()", e), t.apiEventBus.publish(I.ON_ORDER_PLACED_LEGACY, e)
}

function Yo(e, t, n) {
    const r = Te(e, e);
    n.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onPageLoaded()", e, r), r.type !== se.MISSING && t.apiEventBus.publish(I.ON_PAGE_LOADED_LEGACY, r)
}

function $o(e, t) {
    t.info(u.JS_API, "Ecwid.ecommerceInstance.interop.onSubscriptionsChanged()"), e.apiEventBus.publish(I.ON_SUBSCRIPTIONS_CHANGED_LEGACY)
}

function Wo(e, t) {
    t.info(u.JS_API, "Ecwid.OnSubscriptionsChanged (legacy): invalidating subscriptions"), e()
}

function qo(e) {
    if (e !== null) return {
        id: e.id ? ? void 0,
        itemsCount: e.itemsCount ? ? 0
    }
}

function Qo(e, t, n) {
    try {
        const r = Mn(e, t);
        return n.info(u.JS_API, "Ecwid.buildRoutePageUrl(", e, `) = "${r}"`), r
    } catch (r) {
        throw n.warn(u.JS_API, "Ecwid.buildRoutePageUrl(", e, ") call failed", r), r
    }
}

function Ko(e, t) {
    try {
        const n = Bn() ? xn : Vn(e);
        return t.info(u.JS_API, `Ecwid.buildSiteUrl() = "${n}"`), n
    } catch (n) {
        throw t.warn(u.JS_API, "Ecwid.buildSiteUrl() call failed", n), n
    }
}

function zo(e, t) {
    t.info(u.JS_API, "Ecwid.closeProductBrowserPopup()"), e.apiEventBus.publish(I.UNMOUNT_PRODUCT_BROWSER_POPUP_WIDGET)
}

function jo(e, t, n) {
    t.info(u.JS_API, "Ecwid.Customer.signOut()"), e.mutateAsync().then(() => {
        n ? .(!0, null)
    }).catch(r => {
        t.error(u.JS_API, "Cant sign out"), n ? .(!1, r.message)
    })
}

function Xo(e, t, n) {
    if (e === void 0) {
        n.error(u.JS_API, "Ecwid.getFeatureToggles()", "The store is closed or JS API is not ready");
        return
    }
    const r = Gn(t, e.formatsAndUnits);
    return n.info(u.JS_API, `Ecwid.formatCurrency(${t})`, r), r
}

function Zo(e) {
    return e.getAndClearLegacyStorefrontNotices() ? ? null
}

function ea(e, t, n) {
    if (e === void 0) {
        n.error(u.JS_API, "Ecwid.getFeatureToggles()", "The store is closed or JS API is not ready");
        return
    }
    const r = e.appsSettings.publicConfigs[t];
    return n.info(u.JS_API, `Ecwid.getAppPublicConfig('${t}')`, {
        appPublicConfig: r
    }), r
}

function ta(e, t, n) {
    if (e === void 0) {
        n.error(u.JS_API, "Ecwid.getFeatureToggles()", "The store is closed or JS API is not ready");
        return
    }
    const r = e.appsSettings.publicTokens[t] ? ? null;
    return n.info(u.JS_API, `Ecwid.getAppPublicToken('${t}')`, r), r
}

function na(e, t) {
    if (e === void 0) {
        t.error(u.JS_API, "Ecwid.getFeatureToggles()", "The store is closed or JS API is not ready");
        return
    }
    const n = {
        customerLoginByLink: e ? .settings.customerLoginMethod === Hn.LOGIN_BY_LINK,
        newCartPage: !0,
        newCheckoutPage: !0,
        newDetailsPage: !0,
        newProductList: !0,
        isXssProtectionEnabled: e ? .flags.isXssProtectionEnabled
    };
    return t.info(u.JS_API, "Ecwid.getFeatureToggles()", n), n
}

function ra(e, t) {
    if (e === void 0) {
        t.error(u.JS_API, "Ecwid.getStoreConfiguration()", "The store is closed or JS API is not ready");
        return
    }
    const n = {
        currency: {
            code: e.formatsAndUnits.currencySettings.currencyCode
        },
        currencyFormat: {
            prefix: e.formatsAndUnits.currencySettings.prefix,
            suffix: e.formatsAndUnits.currencySettings.suffix
        },
        dateFormat: e.formatsAndUnits.dateFormat,
        minSubtotal: e.jsApiOnly.minOrderSubtotal,
        openBagOnAddition: e.flags.isOpenBagOnAddition,
        paymentMethods: H(e.jsApiOnly.paymentMethods),
        storefrontLanguages: {
            defaultLanguage: e.jsApiOnly.defaultStorefrontLanguage
        },
        url: e.jsApiOnly.storeUrl,
        websitePlatform: e.jsApiOnly.websitePlatform,
        weightUnit: e.jsApiOnly.weightUnit,
        customerLoginMethod: e.settings.customerLoginMethod
    };
    return t.info(u.JS_API, "Ecwid.getStoreConfiguration()", n), n
}

function oa(e, t) {
    const n = e ? .jsApiOnly ? .lang ? ? br;
    return t.info(u.JS_API, "Ecwid.getStorefrontLang()", n), n
}

function aa(e) {
    switch (e) {
        case ee.ACCEPT:
            return "ACCEPTED";
        case ee.DECLINE:
            return "DECLINED";
        case ee.ANALYTICS_ONLY:
            return "ANALYTICS_ONLY";
        case ee.PERSONALIZATION_ONLY:
            return "PERSONALIZATION_ONLY";
        case ee.UNDEFINED:
        case null:
            return "UNDEFINED";
        default:
            return ae()
    }
}

function sa(e, t) {
    const n = {
        userResponse: aa(e.userTrackingResponse.value),
        askConsent: e.isTrackingChangeAllowed.value
    };
    return t.info(u.JS_API, "Ecwid.getTrackingConsent()", n), n
}

function ia() {
    const e = T(),
        t = D();
    return n => {
        e.info(u.JS_API, "Ecwid.gotoRoutePage(", n, ")");
        try {
            return t.push(n).then()
        } catch {
            throw e.warn(u.JS_API, "Cannot go to route page", n), new Error("Cannot go to route page")
        }
    }
}

function ua(e, t) {
    const r = !Yn({
        status: "pending",
        predicate: o => {
            const a = o.options.mutationKey ? .[0];
            return a !== me && ze.includes(a)
        }
    }, t);
    return e.log(u.JS_API, "Ecwid.isCheckoutMutating() = ", r), r
}

function ca(e, t, n) {
    try {
        const r = $n(n, e);
        return t.log(u.JS_API, `Ecwid.isPageServicedByStorefrontV3("${n}") =`, r), r
    } catch (r) {
        return t.warn(u.JS_API, `Ecwid.isPageServicedByStorefrontV3("${n}") failed:`, r), !1
    }
}

function da(e) {
    return e.log(u.JS_API, "Ecwid.isStarterSiteLinksEnabled() true"), !0
}

function la(e, t) {
    e.info(u.JS_API, "Ecwid.openCookiesSettingSidePanel()"), t()
}

function ga() {
    const e = Q(),
        t = We();
    return async n => n === void 0 ? Promise.resolve(void 0) : Wn(n, t, e)
}

function fa(e, t) {
    const n = e;
    return {
        type: O.ROUTE,
        routePage: {
            page: f.ACCOUNT_FAVORITES,
            pagination: {
                limit: t,
                offset: n ? .offset
            }
        }
    }
}

function Ca() {
    return {
        type: O.ROUTE,
        routePage: {
            page: f.ACCOUNT
        }
    }
}

function B() {
    return new Error("Invalid parameters passed to openPage()")
}

function pa(e) {
    const t = e;
    if (t === void 0) throw B();
    const n = G(t ? .id ? .toString());
    if (n === void 0) throw B();
    return {
        type: O.ROUTE,
        routePage: {
            page: f.ACCOUNT_SUBSCRIPTION,
            subscriptionId: n
        }
    }
}

function Sa() {
    return {
        type: O.ROUTE,
        routePage: {
            page: f.CART
        }
    }
}

function va(e) {
    if (e ? .id !== void 0) {
        const t = G(e ? .id ? .toString());
        if (t !== void 0) return t;
        throw B()
    } else return Ee
}

function Pa(e) {
    if (e ? .page !== void 0) {
        const t = G(e ? .page ? .toString());
        return t !== void 0 && t > 1 ? t : void 0
    }
}

function ha(e, t) {
    if (!(e === void 0 || e === 1)) return (e - 1) * (t ? ? Kn)
}

function Ia(e) {
    const t = e ? .sort;
    if (t !== void 0 && t.toString() !== "normal") return wr(Qn, t)
}

function ma(e) {
    return e.categoryId === Ee ? {
        page: f.HOME,
        sortBy: e.sortBy,
        pagination: e.pagination
    } : { ...Xe({
            entityId: e.categoryId,
            ecConfigOverrides: e.ecConfigOverrides,
            slugs: {
                forRouteWithId: "",
                forRouteWithoutId: void 0
            }
        }),
        sortBy: e.sortBy,
        pagination: e.pagination
    }
}

function Aa(e) {
    const t = e.catalog ? .expandedCategories ? .[0] ? .categoryInfo;
    if (t === void 0) throw B();
    return t.id === Ee ? {
        page: f.HOME,
        sortBy: e.sortBy,
        pagination: e.pagination
    } : { ...Xe({
            entityId: t.id,
            ecConfigOverrides: e.ecConfigOverrides,
            slugs: t.slugs
        }),
        sortBy: e.sortBy,
        pagination: e.pagination
    }
}

function Ea(e) {
    const t = e.pageParams,
        n = va(t),
        r = Ia(t),
        a = {
            offset: ha(Pa(t), e.productsPerPage),
            limit: e.productsPerPage
        },
        c = qn({
            categoryPage: ma({
                categoryId: n,
                ecConfigOverrides: e.globalOverrides.ecConfig,
                pagination: a,
                sortBy: r
            }),
            isCatalogOnOnePage: e.isCatalogOnOnePageEnabled,
            hasCategoryMenuFilter: e ? .hasCategoryMenuFilter,
            isHideCategoryBlockShowAllEnabledProducts: e.isHideCategoryBlockShowAllEnabledProducts,
            lang: e.lang,
            productsPerPage: e.productsPerPage,
            ecStorefrontOverrides: e.globalOverrides.ecStorefront,
            ecConfigOverrides: e.globalOverrides.ecConfig
        });
    return e.fetchCatalogFn(c).then(d => ({
        type: O.ROUTE,
        routePage: Aa({
            catalog: d,
            ecConfigOverrides: e.globalOverrides.ecConfig,
            pagination: a,
            sortBy: r
        })
    }))
}

function ya() {
    return {
        type: O.ROUTE,
        routePage: {
            page: f.CHECKOUT_ADDRESS
        }
    }
}

function Ta() {
    return {
        type: O.ROUTE,
        routePage: {
            page: f.CHECKOUT_DELIVERY
        }
    }
}

function Oa() {
    return {
        type: O.ROUTE,
        routePage: {
            page: f.CHECKOUT_ORDER_CONFIRMATION
        }
    }
}

function _a() {
    return {
        type: O.ROUTE,
        routePage: {
            page: f.CHECKOUT_PAYMENT
        }
    }
}

function ne(e) {
    return {
        type: O.ROUTE,
        routePage: {
            page: f.PAGES_WITH_ID,
            pageType: e
        }
    }
}

function ba(e) {
    if (e.product === null) throw B();
    const t = Ge({
        ecConfigOverrides: e.ecConfigOverrides,
        productIdentifier: e.product.identifier,
        categoryId: void 0,
        slugs: e.product.slugs
    });
    if (t.page === f.PRODUCT_PREVIEW) throw B();
    return { ...t,
        variationId: e.variationId,
        selectedOptionIndexes: e.selectedOptionIndexes,
        isBuyNow: e.isBuyNow,
        productMediaIndex: e.productMediaIndex
    }
}

function wa(e) {
    return e !== void 0 && "buyNow" in e
}

function Ra(e, t) {
    const n = e.pageParams;
    if (n === void 0) throw B();
    const r = G(n ? .id ? .toString());
    if (r === void 0) throw B();
    const o = G(n ? .variation ? .toString()),
        a = n ? .options,
        c = wa(n),
        d = G(n ? .productMedia ? .toString()),
        g = zn({
            productId: r,
            variationId: o,
            selectedOptionIndexes: a,
            lang: e.lang
        });
    return t(g).then(l => ({
        type: O.ROUTE,
        routePage: ba({
            ecConfigOverrides: e.globalOverrides.ecConfig,
            isBuyNow: c,
            product: l,
            selectedOptionIndexes: a,
            variationId: o,
            productMediaIndex: d
        })
    }))
}

function he(e, t) {
    if (e === void 0) return;
    const n = Object.entries(e).filter(([r]) => r.startsWith(t)).map(([r, o]) => [r.substring(t.length), jn(o ? .toString())]);
    return Object.keys(n).length > 0 ? Object.fromEntries(n) : void 0
}

function Fa(e) {
    if (e !== void 0) return typeof e == "number" ? [e] : typeof e == "string" ? Xn(e) : $e(e.map(G))
}

function La(e, t) {
    const n = e,
        r = {
            page: f.SEARCH,
            filters: {
                categories: Fa(n ? .categories ? ? n ? .category),
                keyword: n ? .keyword ? ? n ? .keywords,
                priceFrom: n ? .priceFrom,
                priceTo: n ? .priceTo,
                inventory: n ? .inventory,
                onSale: n ? .onsale,
                attributes: he(e, tr),
                options: he(e, er),
                swatch: he(e, Zn),
                sku: n ? .sku,
                locations: n ? .locations
            },
            sortBy: n ? .sort,
            pagination: {
                limit: t,
                offset: n ? .offset
            }
        };
    return {
        type: O.ROUTE,
        routePage: r
    }
}

function Ua(e, t, n) {
    const r = e,
        o = r ? .returnurl !== void 0 ? q(n.resolve(r ? .returnurl), n) : void 0;
    return nr(t, o)
}

function Da(e) {
    switch (e.pageName) {
        case "account":
        case "account/address-book":
        case "account/orders":
        case "account/settings":
            return Ca();
        case "account/favorites":
            return fa(e.pageParams, e.productsPerPage);
        case "account/subscription":
            return pa(e.pageParams);
        case "category":
            return Ea(e);
        case "cart":
            return Sa();
        case "checkout/address":
        case "checkout/shipping":
            return ya();
        case "checkout/delivery":
            return Ta();
        case "checkout/order-confirmation":
            return Oa();
        case "checkout/payment":
        case "checkout/place-order":
            return _a();
        case "pages/about":
            return ne(te.ABOUT);
        case "pages/privacy-policy":
            return ne(te.PRIVACY_POLICY);
        case "pages/returns":
            return ne(te.RETURNS);
        case "pages/shipping-payment":
            return ne(te.SHIPPING_PAYMENT);
        case "pages/terms":
            return ne(te.TERMS);
        case "product":
            return Ra(e, e.fetchProductFn);
        case "search":
            return La(e.pageParams, e.productsPerPage);
        case "signin":
            return Ua(e.pageParams, e.globalOverrides.sso, e.router);
        default:
            return
    }
}

function xe(e, t, n) {
    switch (t.type) {
        case O.ROUTE:
            n.info(u.JS_API, "Redirect to page", t.routePage), e.push(t.routePage);
            return;
        case O.URL:
            return sr(t);
        case O.ACTION:
            return ar(t);
        default:
            return ae()
    }
}

function ka(e) {
    const t = T(),
        n = z(),
        r = D(),
        o = rr(),
        a = ga(),
        {
            enableCatalogOnOnePage: c,
            hideCategoryBlockShowAllEnabledProducts: d,
            productsPerPage: g
        } = or(e),
        l = qe();
    return (C, i) => {
        t.info(u.JS_API, "Ecwid.openPage(", C, ",", i, ")");
        let S;
        try {
            S = Da({
                globalOverrides: n.globalOverrides,
                isCatalogOnOnePageEnabled: c.value,
                isHideCategoryBlockShowAllEnabledProducts: d.value,
                productsPerPage: g.value,
                pageName: C,
                pageParams: i,
                router: r,
                fetchProductFn: o,
                fetchCatalogFn: a,
                lang: l.value
            })
        } catch (p) {
            t.warn(u.JS_API, p ? .toString());
            return
        }
        S !== void 0 ? "then" in S ? S.then(p => xe(r, p, t)).catch(p => t.warn(u.JS_API, p ? .toString())) : xe(r, S, t) : t.warn(u.JS_API, `Cannot Open Page with name "${C}"`)
    }
}

function Na(e, t, n) {
    return n.info(u.JS_API, "Ecwid.refreshConfig()", e), t.refreshEcConfig(e.config ? ? {}), t.refreshEcStorefront(e.storefront ? ? {}), t.refreshConfigInStorefrontV2(), {
        isNeedToUpdateCheckout: !Ie(e.order ? .extraFields, H(t.globalOverrides.ecOrder ? .extraFields))
    }
}
const Ja = (e, t, n, r) => {
        const {
            extraFields: o,
            filteredValues: a
        } = ir(e.order ? .extraFields ? ? {});
        a.length > 0 && n.warn(u.JS_API, "Extra fields with unsupported types", {
            extraFields: a
        }), r({
            extraFieldsPayload: {
                mapToUpdate: o,
                keysToRemove: t,
                updateMode: ur.UPDATE_HIDDEN
            }
        }).then()
    },
    Ma = (e, t) => {
        const n = t.globalOverrides.ecOrder ? .extraFields ? ? {},
            r = e.order ? .extraFields ? ? {};
        return Object.keys(n).filter(o => !(o in r))
    },
    Ba = kt(({
        ecOverrides: e,
        logger: t,
        globalOverridesStore: n,
        updateCheckout: r
    }) => {
        const {
            isNeedToUpdateCheckout: o
        } = Na(e, n, t);
        if (o) {
            const a = Ma(e, n);
            n.globalOverrides.ecOrder = Rr(e.order ? ? {}), Ja(e, a, t, r)
        }
    }, 300);

function xa(e) {
    return Ba(e)
}

function Va(e, t, n) {
    const r = "window.ec.saveUtmDataFromUrl";
    n.info(u.JS_API, `${r}('${e}')`);
    try {
        const o = new URL(e);
        t.updateFromUrl(o)
    } catch (o) {
        n.error(u.JS_API, `${r}: Cannot parse URL '${e}'`, o)
    }
}

function Ga(e, t) {
    const n = e.options.history.historyStrategy,
        r = cr({
            historyStrategy: n,
            baseUrl: e.options.history.base,
            externalState: t
        }),
        o = e.resolve("/"),
        a = e.resolve(r, o);
    return q(a)
}
async function Ha(e) {
    if (!(e.globalOverridesStore.ecConfigOverrides ? .useExternalState ? ? !1)) return;
    e.logger.info(u.JS_API, `window.ec.setInternalState('${e.state}')`);
    const n = Ga(e.router, e.state);
    n !== void 0 && await e.router.push(n)
}

function Ya(e, t, n, r) {
    r.info(u.JS_API, `Ecwid.setStorefrontBaseUrl('${e}')`), t.setBaseUrl(e);
    const o = n.globalOverrides;
    o.ecConfig = o.ecConfig ? ? {}, o.ecConfig.baseUrl = e, n.refreshEcConfig(o.ecConfig), n.refreshConfigInStorefrontV2()
}

function $a(e, t, n) {
    n.info(u.JS_API, `Ecwid.setTrackingConsent('${t}')`), e.userTrackingResponse.value = t
}

function Wa(e, t, n) {
    n.info(u.JS_API, "Ecwid.showProductFilters()");
    const {
        isProductFiltersOpenedOnCategoryPage: r,
        isProductFiltersOpenedOnSearchPage: o
    } = Y(e), a = je(t), c = dr(t);
    a !== void 0 ? r.value = !0 : c !== void 0 && (o.value = !0)
}

function Oe(e, t) {
    return e ? .ssoProfile === void 0 ? (t.error(u.JS_API, "This method will work only when application is in SSO mode.\nTo do this, you must set a value for the global variable `ecwid_sso_profile` to at least empty string"), !1) : !0
}

function qa(e, t, n) {
    n.info(u.JS_API, "Ecwid.setSignInProvider()", t);
    const {
        ssoOverrides: r
    } = Y(e);
    Oe(r.value, n) && r.value !== void 0 && (r.value.signInProvider = t)
}

function Qa(e, t, n) {
    n.info(u.JS_API, "Ecwid.setSignInUrls()", t);
    const {
        ssoOverrides: r
    } = Y(e);
    Oe(r.value, n) && r.value !== void 0 && (r.value.signInUrls = t)
}

function Ka(e, t, n, r, o) {
    if (o.info(u.JS_API, `Ecwid.setSsoProfile('${r}')`), !!Oe(e.ssoOverrides, o))
        if (r === "") n.mutateAsync().then(() => {
            o.info(u.JS_API, "Ecwid.setSsoProfile(): logged out successfully")
        }).catch(a => {
            if (re(a)) {
                const c = a.getData();
                c !== void 0 && o.warn(u.JS_API, "Ecwid.setSsoProfile(): cannot logout", {
                    errorCode: c.errorCode,
                    errorMessage: c.errorMessage
                })
            }
            throw a
        });
        else {
            const a = {
                ssoProfile: r
            };
            t.mutateAsync(a).then(() => {
                o.info(u.JS_API, "Ecwid.setSsoProfile(): authorized successfully")
            }).catch(c => {
                if (re(c)) {
                    const d = c.getData();
                    d !== void 0 && o.warn(u.JS_API, "Ecwid.setSsoProfile(): cannot authorize", {
                        errorCode: d.errorCode,
                        errorMessage: d.errorMessage
                    })
                }
                throw c
            })
        }
}

function za(e, t) {
    return [...e].filter(n => !t.includes(n))
}

function R(e, t) {
    e.value = [...e.value, t]
}

function ge(e, t) {
    F(() => e.value, (n, r) => {
        const o = za(n, r);
        t(o)
    })
}
const ja = Nt({
    name: "JsApiApp",
    props: {
        bootstrap: {
            type: Object,
            required: !0
        },
        rootProps: {
            type: Object,
            required: !0
        }
    },
    setup(e) {
        const {
            bootstrap: t,
            rootProps: n
        } = Le(e), {
            apiImpl: r
        } = Le(n.value), o = z(), a = lr(), c = gr(), d = D(), g = fr(), l = Cr(), C = oe(), i = T(), S = Q(), p = E([]), A = E([]), P = E([]), L = E([]), j = E([]), v = E([]), h = E([]), J = E([]), k = E([]), x = E([]), _ = E([]), $ = E([]), {
            data: Ce
        } = pr(), m = Sr(Ce), ie = vr(m), nt = Pr(), rt = eo($), {
            data: ot,
            refetch: at
        } = Qe(rt), _e = hr(), {
            data: pe,
            refetch: st
        } = _e, {
            getCart: it,
            updateCart: ut,
            addToCart: ct,
            removeFromCart: dt,
            updateCartItem: lt,
            clearCart: gt,
            calculateTotal: ft,
            canGoToCheckout: Ct,
            goToCheckout: pt,
            refreshCartInfo: St,
            updateCheckout: vt
        } = Zr(o, pe, m), {
            isInitialized: X,
            getVisitorLocation: Pt
        } = Io(_e, Ce), Se = so(C.storeId, ot), be = no(o, pe, m), ve = io(), ht = ka(m), It = ia(), mt = Ae(), At = Ir(), we = mr(), {
            mutateStorefrontV2Sync: Et
        } = po(), {
            invalidateCustomerSubscriptionsQueries: yt
        } = tt(), Tt = Ar(), Ot = to(), _t = (s, Z) => Do({
            pageSwitchCallbacks: J.value,
            queryClient: S,
            to: s,
            from: Z,
            isWindowUnloaded: Ot.value,
            router: d,
            logger: i
        }), bt = (s, Z) => Uo(v.value, s, Z, d, i), Re = E(m.value !== void 0 && X.value);
        F(() => [m.value, X.value], () => {
            ke(p.value, o, m.value, X.value, i), m.value !== void 0 && X.value && (Re.value = !0)
        }), F(() => be.value, () => Ao(A.value, be.value, i)), F(() => Se.value, () => Be($.value, Se.value, i)), F(() => ie.userTrackingResponse.value, () => Ro(L.value, ie.userTrackingResponse.value, i)), F(() => C.sessionToken.value, () => Jo(C.sessionToken.value, x.value, i)), ge(p, s => {
            Re.value && ke(s, o, m.value, X.value, i)
        }), ge($, s => Be(s, Se.value, i)), ge(h, s => Pe(s, l.jsApiLastLoadedPage, !1, i)), ge(_, s => Me(s, g.value, i)), F(() => ({ ...o.ecConfigOverrides ? .chameleon
        }), (s, Z) => {
            wo({
                oldChameleonSettings: Z,
                newChameleonSettings: s,
                bootstrapPromise: t.value,
                globalOverridesStore: o,
                requestContext: l,
                storefrontSessionStorage: C,
                logger: i
            })
        }), d.setAfterNavigationGuard(bt), Jt(async () => {
            setTimeout(() => {
                d.callAfterNavigationGuard()
            }, 0)
        }), d.setBeforeNavigationGuard(_t);
        const Fe = Er(m);
        F(Fe, () => {
            d.dynamicOptions.value = Fe.value
        }), F(g, () => {
            Me(_.value, g.value, i)
        }), lo(Ce), l.apiEventBus.subscribe(I.ON_CART_SYNCHRONIZED, s => bo(P.value, s, i)), l.apiEventBus.subscribe(I.ON_PRODUCT_OPTIONS_CHANGED, s => ko(k.value, s, i)), l.apiEventBus.subscribe(I.ON_PAGE_LOADED, () => Pe(h.value, l.jsApiLastLoadedPage, !1, i)), l.apiEventBus.subscribe(I.ON_CART_CHANGED_LEGACY, Oo(pe)), l.apiEventBus.subscribe(I.ON_CART_SYNCHRONIZED_LEGACY, st), l.apiEventBus.subscribe(I.ON_CART_SYNC_STARTED_LEGACY, s => _o(s, Et, i)), l.apiEventBus.subscribe(I.ON_ORDER_PLACED_LEGACY, fo(j)), l.apiEventBus.subscribe(I.ON_PAGE_LOADED_LEGACY, s => {
            l.jsApiLastLoadedPage = s, Pe(h.value, s, !0, i)
        }), l.apiEventBus.subscribe(I.ON_PROFILE_SET_LEGACY, s => No(s, at, mt.unboundCustomer, C.sessionToken.value, i)), l.apiEventBus.subscribe(I.ON_SUBSCRIPTIONS_CHANGED_LEGACY, () => Wo(yt, i));
        const wt = {
            getSessionToken: () => C.sessionToken.value,
            onApiLoaded: () => Mo(l, i),
            onCartChanged: s => Bo(s, l, i),
            onCartSyncStarted: s => Vo(s, l, i),
            onCartSyncFinished: () => xo(l, i),
            onCustomerChanged: s => Go(s, l, i),
            onPageLoaded: s => Yo(s, l, i),
            onOrderPlaced: s => Ho(s, l, i),
            onSubscriptionsChanged: () => $o(l, i)
        };
        return r.value = {
            addProductToCart: ct,
            buildRoutePageUrl: s => Qo(s, d, i),
            buildSiteUrl: () => Ko(d, i),
            calculateTotal: ft,
            canGoToCheckout: Ct,
            clearRouterStateChangedHandlers: () => {
                _.value = []
            },
            closeProductBrowserPopup: () => zo(l, i),
            formatCurrency: s => Xo(m.value, s, i),
            getAndClearLegacyStorefrontNotices: () => Zo(nt),
            getAppPublicConfig: s => ea(m.value, s, i),
            getAppPublicToken: s => ta(m.value, s, i),
            getCart: it,
            customerSignOut: s => jo(we, i, s),
            isIsolatedSessionMode: () => C.isolatedSessionMode.value === !0,
            getCheckoutInfo: () => C.checkoutInfo.value,
            getFeatureToggles: () => na(m.value, i),
            getPageSwitchCallbacks: () => H(J.value),
            getStoreConfiguration: () => ra(m.value, i),
            getStorefrontLang: () => oa(m.value, i),
            getTrackingConsent: () => sa(ie, i),
            getVisitorLocation: Pt,
            goToCheckout: pt,
            gotoRoutePage: It,
            interop: wt,
            isCheckoutMutating: () => ua(i, S),
            isStarterSiteFooterLinksEnabled: () => da(i),
            isPageServicedByStorefrontV3: s => ca(m.value, i, s),
            openCookiesSettingSidePanel: () => la(i, c.openSidePanelCookieSettings),
            openPage: ht,
            refreshConfig: s => {
                xa({
                    ecOverrides: s,
                    logger: i,
                    globalOverridesStore: o,
                    updateCheckout: vt
                })
            },
            removeFromCart: dt,
            updateCartItem: lt,
            saveUtmDataFromUrl: s => Va(s, Tt, i),
            scrollToContent: () => d.scrollToContent(),
            setCheckoutInfo: s => {
                C.checkoutInfo.value = qo(s)
            },
            setRouterExternalState: s => Ha({
                state: s,
                storeProfile: m.value,
                globalOverridesStore: o,
                router: d,
                logger: i
            }),
            setSession: s => {
                C.sessionToken.value = s.token
            },
            setSignInProvider: s => qa(o, s, i),
            setSignInUrls: s => Qa(o, s, i),
            setSsoProfile: s => Ka(o, At, we, s, i),
            setStorefrontBaseUrl: s => Ya(s, d, o, i),
            setTrackingConsent: s => $a(ie, s, i),
            showProductFilters: () => Wa(a, g.value, i),
            updateCart: ut,
            clearCart: gt,
            refreshCartInfo: St,
            getSupportedStorages: ve.getSupportedStorages,
            getStorageValue: ve.getStorageValue,
            setStorageValue: ve.setStorageValue,
            onAllCheckoutMutationsCompleted: s => mo(S, i, s),
            onApiLoaded: s => R(p, s),
            onCartChanged: s => R(A, s),
            onCartSynchronized: s => R(P, s),
            onConsentChanged: s => R(L, s),
            onOrderPlaced: s => R(j, s),
            onPageLoad: s => R(v, s),
            onPageLoaded: s => R(h, s),
            onPageSwitch: s => R(J, s),
            onProductOptionsChanged: s => R(k, s),
            onSetProfile: s => R($, s),
            onSessionChanged: s => R(x, s),
            onRouterStateChanged: s => R(_, s)
        }, {}
    }
});

function Xa(e, t, n, r, o, a) {
    return xt(), Bt("div")
}
const Za = Mt(ja, [
    ["render", Xa]
]);

function es(e, t) {
    const n = { ...e,
            rootProps: { ...t,
                ...e.rootProps
            }
        },
        r = yr(Za, "JsApi", n);
    return Tr({
        app: r,
        config: e,
        rootPage: void 0
    }), Or(r, e), r
}

function ts(e) {
    const t = e.apiImpl.value;
    if (t === void 0) throw new Error("App's rootProps is not initialized correctly");
    return t
}
const as = async function(e) {
    const t = {
        apiImpl: E(void 0)
    };
    return es(e, t).mount(e.containerElement), ts(t)
};
export {
    as as render
};
//# sourceMappingURL=https://storefront.ecwid.dev:16088/static/apps-js-api-mq6uolg8.js.map