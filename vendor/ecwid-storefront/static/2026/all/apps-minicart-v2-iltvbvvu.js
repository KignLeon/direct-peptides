import {
    c as n,
    r as U,
    G as Y,
    i as p,
    o as c,
    f as S,
    Y as G,
    d as F,
    t as W,
    b as I,
    j as o,
    F as K,
    a as V,
    l as x,
    k as Q,
    Z as q,
    s as X,
    q as Z,
    I as J,
    n as ee,
    _ as te,
    w as $,
    S as oe,
    e as ne,
    g as se
} from "./vendor-fein6u71.js";
import {
    m as ae,
    bl as ie,
    bF as re,
    i as ce,
    bE as le,
    bG as ue,
    R as de,
    a as pe,
    b as ve,
    e as _e,
    g as he,
    h as me,
    j as Ie,
    k as Te
} from "./shared-k1b52rt2.js";
import {
    b as T,
    c as a,
    e as A,
    f as b
} from "./ecommerce-lynkwow4.js";

function Ce(t) {
    const e = ae();
    return n(() => {
        if (t.value === 0) return e.$t("ShoppingBagIcon.EmptyState");
        const i = t.value % 10,
            r = t.value % 100,
            s = {
                count: t.value.toString()
            };
        return r >= 11 && r <= 14 || i === 0 || i >= 5 ? e.$t("ShoppingBagIcon.ItemsCount.plural", s) : t.value === 1 ? e.$t("ShoppingBagIcon.ItemsCount.singular", s) : i === 1 ? e.$t("ShoppingBagIcon.ItemsCount.one", s) : e.$t("ShoppingBagIcon.ItemsCount.few", s)
    })
}

function fe(t) {
    if (t !== void 0) try {
        const e = new URL(t);
        return e.protocol === "http:" || e.protocol === "https:" ? e.href : void 0
    } catch {
        return
    }
}

function H(t, e) {
    const {
        cartWidgetLayout: i,
        cartWidgetIcon: r,
        cartWidgetFixed: s,
        cartWidgetFixedPosition: v,
        cartWidgetFixedShape: u,
        cartWidgetHorizontalIndent: d,
        cartWidgetVerticalIndent: h,
        cartWidgetIsResponsive: l,
        cartWidgetStoreCustomIconUrl: _,
        cartWidgetShowEmptyCart: C,
        cartWidgetShowBuyAnimation: m
    } = ie(t), w = n(() => e.value.layout ? ? i.value), y = n(() => e.value.icon ? ? r.value), f = n(() => e.value.isFixed ? ? s.value), B = n(() => e.value.fixedPosition ? ? v.value), k = n(() => e.value.fixedShape ? ? u.value), O = n(() => e.value.horizontalIndent ? ? d ? .value), E = n(() => e.value.verticalIndent ? ? h ? .value), L = n(() => e.value.isResponsive ? ? l.value), M = n(() => fe(e.value.customIconUrl ? ? _ ? .value)), g = n(() => e.value.showEmptyCart ? ? C.value), N = n(() => e.value.showBuyAnimation ? ? m.value);
    return {
        customIconUrl: M,
        fixedPosition: B,
        fixedShape: k,
        horizontalIndent: O,
        icon: y,
        isFixed: f,
        isResponsive: L,
        showBuyAnimation: N,
        showEmptyCart: g,
        verticalIndent: E,
        layout: w
    }
}

function z(t, e) {
    const i = n(() => t.value !== a.SMALL_ICON),
        r = n(() => t.value !== a.COUNTER_ONLY && t.value !== a.TITLE_COUNTER),
        s = n(() => t.value !== a.COUNTER_ONLY && t.value === a.TITLE_COUNTER),
        v = n(() => t.value === a.MEDIUM_ICON_TITLE_COUNTER || t.value === a.BIG_ICON_TITLE_SUBTOTAL || t.value === a.BIG_ICON_DETAILS_SUBTOTAL),
        u = n(() => t.value === a.BIG_ICON_DETAILS_SUBTOTAL),
        d = n(() => t.value === a.BIG_ICON_TITLE_SUBTOTAL || t.value === a.BIG_ICON_DETAILS_SUBTOTAL),
        h = n(() => e.value === T.TOP_LEFT || e.value === T.TOP_RIGHT),
        l = n(() => e.value === T.BOTTOM_LEFT || e.value === T.BOTTOM_RIGHT),
        _ = n(() => e.value === T.TOP_LEFT || e.value === T.BOTTOM_LEFT),
        C = n(() => e.value === T.TOP_RIGHT || e.value === T.BOTTOM_RIGHT);
    return {
        isShowCounter: i,
        isShowIcon: r,
        isShowTitle: s,
        isShowCount: v,
        isShowCartLink: u,
        isShowTotal: d,
        isFixedPositionTop: h,
        isFixedPositionBottom: l,
        isFixedPositionLeft: _,
        isFixedPositionRight: C
    }
}
const ge = 90;

function Se(t, e, i) {
    const {
        isFixed: r,
        layout: s,
        isResponsive: v,
        fixedPosition: u,
        fixedShape: d,
        showBuyAnimation: h,
        verticalIndent: l,
        horizontalIndent: _
    } = H(t, e), {
        isFixedPositionTop: C,
        isFixedPositionBottom: m,
        isFixedPositionLeft: w,
        isFixedPositionRight: y
    } = z(s, u), f = U(!1);
    Y(i, () => {
        f.value = !0, setTimeout(() => {
            f.value = !1
        }, 50)
    });
    const B = n(() => t.value.fbMessengerSettings !== void 0),
        k = n(() => B.value && u.value === T.BOTTOM_RIGHT),
        O = n(() => {
            const g = {
                    "ec-minicart--xxxs": s.value === a.SMALL_ICON,
                    "ec-minicart--xxs": s.value === a.SMALL_ICON_COUNTER,
                    "ec-minicart--xs": s.value === a.COUNTER_ONLY,
                    "ec-minicart--s": s.value === a.TITLE_COUNTER,
                    "ec-minicart--m": s.value === a.MEDIUM_ICON_COUNTER,
                    "ec-minicart--l": s.value === a.MEDIUM_ICON_TITLE_COUNTER,
                    "ec-minicart--xl": s.value === a.BIG_ICON_TITLE_SUBTOTAL,
                    "ec-minicart--xxl": s.value === a.BIG_ICON_DETAILS_SUBTOTAL
                },
                N = {
                    "ec-minicart--fixed": r.value,
                    "ec-minicart--inline": !r.value,
                    "ec-minicart--responsive": v.value
                },
                R = r.value ? {
                    "ec-minicart--top": C.value,
                    "ec-minicart--bottom": m.value,
                    "ec-minicart--left": w.value,
                    "ec-minicart--right": y.value
                } : void 0,
                P = {
                    "ec-minicart--pill": d.value === A.PILL,
                    "ec-minicart--rect": d.value === A.RECT,
                    "ec-minicart--no-shape": d.value === A.NONE
                },
                j = {
                    "ec-minicart--animation-default": h.value,
                    "ec-minicart--animated": !f.value && i.value !== 0
                },
                D = {
                    "ec-minicart--bottom__shift-aside-fbmessages-bubble": k.value
                };
            return {
                "ec-minicart": !0,
                "ec-minicart--empty": i.value === 0,
                ...ce(),
                ...g,
                ...N,
                ...R,
                ...P,
                ...j,
                ...D
            }
        }),
        E = n(() => {
            if (r.value) {
                const g = m.value && l.value !== void 0 ? `${k.value?Math.max(l.value,ge):l.value}px` : "";
                return {
                    top: C.value && l.value !== void 0 ? `${l.value}px` : "",
                    right: y.value && _.value !== void 0 ? `${_.value}px` : "",
                    bottom: g,
                    left: w.value && _.value !== void 0 ? `${_.value}px` : ""
                }
            }
        }),
        L = re(),
        M = n(() => ({ ...E.value,
            ...L.value
        }));
    return {
        classes: O,
        styles: M
    }
}
const we = {
    class: "icon-default",
    width: "36",
    height: "30",
    viewBox: "0 0 36 30",
    xmlns: "http://www.w3.org/2000/svg"
};

function ye(t, e) {
    return c(), p("svg", we, e[0] || (e[0] = [S("g", {
        fill: "none",
        "fill-rule": "evenodd"
    }, [S("path", {
        d: "M7 7h22v18a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V7z",
        stroke: "currentColor",
        "stroke-width": "2"
    }), S("path", {
        d: "M13 10V6c0-2.993 2.009-5 5-5s5 2.026 5 5v4",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), S("circle", {
        class: "cart-not-empty",
        cx: "18",
        cy: "18",
        r: "4",
        fill: "currentColor"
    })], -1)]))
}
const ke = {
        render: ye
    },
    Me = {
        class: "icon-default",
        width: "36",
        height: "30",
        viewBox: "0 0 36 30",
        xmlns: "http://www.w3.org/2000/svg"
    };

function xe(t, e) {
    return c(), p("svg", Me, e[0] || (e[0] = [G('<g fill="none" fill-rule="evenodd"><path d="M31.763 12H4.237l2.74 12.79L7 25a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1l.022-.21L31.763 12z" stroke="currentColor" stroke-width="2"></path><path class="cart-empty" d="M22 16v6M18 16v6M14 16v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><circle class="cart-not-empty" cx="18" cy="19" r="4" fill="currentColor"></circle><path d="M3 12h30" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 11.5l5-7M26.5 11.5l-5-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></g>', 1)]))
}
const Be = {
        render: xe
    },
    Oe = {
        class: "icon-default",
        width: "36",
        height: "30",
        viewBox: "0 0 36 30",
        xmlns: "http://www.w3.org/2000/svg"
    };

function Ee(t, e) {
    return c(), p("svg", Oe, e[0] || (e[0] = [G('<g fill="none" fill-rule="evenodd"><path d="M2 3h5l4 17h18l3-12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="13.5" cy="26.5" r="2.5" stroke="currentColor" stroke-width="2"></circle><circle cx="27.5" cy="26.5" r="2.5" stroke="currentColor" stroke-width="2"></circle><circle class="cart-not-empty" cx="20" cy="14" r="3" fill="currentColor"></circle></g>', 1)]))
}
const Le = {
        render: Ee
    },
    Ne = ["aria-label"],
    Re = {
        class: "ec-minicart__body"
    },
    Ve = {
        key: 0,
        class: "ec-minicart__icon"
    },
    Ae = ["src"],
    be = {
        key: 1,
        class: "ec-minicart__title"
    },
    Fe = {
        class: "ec-minicart__wrap"
    },
    Pe = {
        key: 0,
        class: "ec-minicart__counter"
    },
    $e = {
        key: 1,
        class: "ec-minicart__count"
    },
    Ue = {
        key: 0,
        class: "ec-minicart__link"
    },
    Ge = {
        key: 2,
        class: "ec-minicart__subtotal ec-text-muted"
    },
    We = F({
        __name: "MinicartV2Cart",
        props: {
            designSettingsOverrides: {},
            storeProfile: {},
            cart: {}
        },
        setup(t) {
            const e = t,
                {
                    designSettingsOverrides: i,
                    storeProfile: r,
                    cart: s
                } = W(e),
                v = J(),
                u = U(null),
                {
                    customIconUrl: d,
                    fixedPosition: h,
                    icon: l,
                    layout: _,
                    showEmptyCart: C
                } = H(r, i),
                {
                    itemsCount: m,
                    itemsTotalPriceFormattedValue: w
                } = le(s, r),
                {
                    isShowCounter: y,
                    isShowIcon: f,
                    isShowTitle: B,
                    isShowCount: k,
                    isShowCartLink: O,
                    isShowTotal: E
                } = z(_, h),
                L = Ce(m),
                M = () => {
                    v.push({
                        page: de.CART
                    })
                },
                {
                    classes: g,
                    styles: N
                } = Se(r, i, m);
            return ue(u), (R, P) => o(C) || o(m) !== 0 ? (c(), p("div", {
                key: 0,
                ref_key: "minicartRef",
                ref: u,
                class: Z(o(g)),
                style: X(o(N)),
                tabindex: "0",
                role: "button",
                "aria-label": R.$t("CartPage.title"),
                onClick: M,
                onKeyup: q(M, ["enter"])
            }, [S("div", Re, [o(f) ? (c(), p("div", Ve, [o(d) ? (c(), p("img", {
                key: 0,
                src: o(d)
            }, null, 8, Ae)) : (c(), p(K, {
                key: 1
            }, [o(l) === o(b).BAG ? (c(), V(o(ke), {
                key: 0
            })) : o(l) === o(b).CART ? (c(), V(o(Le), {
                key: 1
            })) : o(l) === o(b).BASKET ? (c(), V(o(Be), {
                key: 2
            })) : I("", !0)], 64))])) : I("", !0), o(B) ? (c(), p("div", be, x(R.$t("ShoppingBagIcon.label")), 1)) : I("", !0), S("div", Fe, [o(y) ? (c(), p("div", Pe, x(o(m)), 1)) : I("", !0), o(k) ? (c(), p("div", $e, [Q(x(o(L)) + " ", 1), o(O) ? (c(), p("div", Ue, x(R.$t("ShoppingBagIcon.OpenBag.action")), 1)) : I("", !0)])) : I("", !0), o(E) ? (c(), p("div", Ge, x(o(w)), 1)) : I("", !0)])])], 46, Ne)) : I("", !0)
        }
    });

function He() {
    const t = pe(),
        e = ve();
    return {
        checkout: t,
        initialDataResult: e
    }
}
const ze = {
        key: 1
    },
    je = F({
        __name: "MinicartV2Content",
        props: {
            rootProps: {}
        },
        async setup(t) {
            let e, i;
            const r = t,
                {
                    rootProps: s
                } = W(r),
                v = He(),
                u = v.checkout.data,
                d = _e(v.initialDataResult.data);
            [e, i] = ee(() => he({
                widgetName: "MinicartV2",
                promises: [me(v)]
            })), await e, i();

            function h(l) {
                return l !== void 0
            }
            return (l, _) => h(o(d)) && o(u) !== void 0 ? (c(), V(We, {
                key: 0,
                "design-settings-overrides": o(s),
                "store-profile": o(d),
                cart: o(u)
            }, null, 8, ["design-settings-overrides", "store-profile", "cart"])) : h(o(d)) ? (c(), p("div", ze, x(l.$t("ShoppingBagIcon.EmptyState")), 1)) : I("", !0)
        }
    }),
    De = F({
        name: "MinicartV2App",
        components: {
            MinicartV2Content: je
        },
        props: {
            containerElement: {
                type: Object,
                default: void 0
            },
            rootProps: {
                type: Object,
                required: !0
            }
        }
    });

function Ye(t, e, i, r, s, v) {
    const u = ne("MinicartV2Content");
    return c(), V(oe, {
        timeout: "0"
    }, {
        default: $(() => [se(u, {
            "root-props": t.rootProps
        }, null, 8, ["root-props"])]),
        fallback: $(() => e[0] || (e[0] = [S("div", null, null, -1)])),
        _: 1
    })
}
const Ke = te(De, [
    ["render", Ye]
]);

function Qe(t) {
    const e = Ie(Ke, "MinicartV2", t);
    return Te({
        app: e,
        config: t,
        rootPage: void 0
    }), e
}
const Je = async function(t) {
    const e = Qe(t);
    return e.mount(t.containerElement), {
        unmountFn: e.unmount
    }
};
export {
    Je as render
};
//# sourceMappingURL=https://storefront.ecwid.dev:16088/static/apps-minicart-v2-iltvbvvu.js.map