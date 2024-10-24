import { N as p, O as f, jA as Z, P as M, jB as ce, jC as de, jD as x, jE as ue, b_ as re, cR as ie, a3 as A, jF as ne, I as z, aj as j, jG as D, s as U, jH as pe, dD as R, jI as C, a2 as b, fm as q, jJ as B, h4 as F, fn as $, jK as _e, a4 as H, jL as fe, jM as ge, z as N, dh as ee, bk as me, jN as ve } from "./main-BL24Y93j.js";
import { s as we } from "./substitute-xHmYZ6_T.js";
const J = "esri-identity-modal", G = { base: J, info: `${J}__info`, notice: `${J}__notice` }, Ie = "ArcGIS Online";
let O = class extends ce {
  constructor(u, e) {
    super(u, e), this.container = document.createElement("div"), this.error = null, this.oAuthPrompt = !1, this.open = !1, this.signingIn = !1, this.server = null, this.resource = null, this._usernameInputNode = null, this._passwordInputNode = null, document.body.appendChild(this.container);
  }
  loadDependencies() {
    return de({ button: () => import("./calcite-button-Bz_ky43a.js"), input: () => import("./calcite-input-DXXD1kub.js"), label: () => import("./calcite-label-DdOxStAD.js"), modal: () => import("./calcite-modal-xK7lZ-9X.js"), notice: () => import("./calcite-notice-IdXoz8LG.js") });
  }
  get title() {
    return this.commonMessages?.auth.signIn;
  }
  render() {
    const { open: u, title: e, messages: s, signingIn: t, oAuthPrompt: r, server: i, resource: o, error: h } = this, { info: d, oAuthInfo: n, lblItem: l, invalidUser: c, noAuthService: a, lblUser: _, lblPwd: w, lblCancel: m, lblSigning: v, lblOk: k } = s;
    return x("div", { class: this.classes(G.base, ue()) }, x("form", { bind: this, onsubmit: this._submit }, x("calcite-modal", { bind: this, open: u, outsideCloseDisabled: !0, scale: "s", widthScale: "s", onCalciteModalClose: this._cancel, onCalciteModalOpen: this._focusUsernameInput }, x("div", { slot: "header" }, e), x("div", { slot: "content" }, x("div", { class: G.info }, we(r ? n : d, { server: i && /\.arcgis\.com/i.test(i) ? Ie : i, resource: `(${o || l})` })), h ? x("calcite-notice", { class: G.notice, icon: "exclamation-mark-triangle", kind: "danger", open: !0 }, x("div", { slot: "message" }, h.details?.httpStatus ? c : a)) : null, r ? null : [x("calcite-label", null, _, x("calcite-input", { afterCreate: (g) => this._usernameInputNode = g, autocomplete: "off", bind: this, name: "username", required: !0, spellcheck: !1, type: "text", value: "" })), x("calcite-label", null, w, x("calcite-input", { afterCreate: (g) => this._passwordInputNode = g, bind: this, name: "password", required: !0, type: "password", value: "" }))]), x("calcite-button", { appearance: "outline", bind: this, onclick: this._cancel, slot: "secondary", type: "button", width: "full" }, m), x("calcite-button", { loading: !!t, slot: "primary", type: "submit", width: "full" }, t ? v : k))));
  }
  _focusUsernameInput() {
    requestAnimationFrame(() => {
      this._usernameInputNode?.setFocus();
    });
  }
  _cancel() {
    this._set("signingIn", !1), this.open = !1, this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(u) {
    u.preventDefault(), this._set("signingIn", !0);
    const e = this.oAuthPrompt ? {} : { username: this._usernameInputNode?.value, password: this._passwordInputNode?.value };
    this.emit("submit", e);
  }
};
p([f({ readOnly: !0 })], O.prototype, "container", void 0), p([f(), Z("esri/t9n/common")], O.prototype, "commonMessages", void 0), p([f()], O.prototype, "error", void 0), p([f(), Z("esri/identity/t9n/identity")], O.prototype, "messages", void 0), p([f()], O.prototype, "oAuthPrompt", void 0), p([f()], O.prototype, "open", void 0), p([f()], O.prototype, "signingIn", void 0), p([f()], O.prototype, "server", void 0), p([f({ readOnly: !0 })], O.prototype, "title", null), p([f()], O.prototype, "resource", void 0), O = p([M("esri.identity.IdentityModal")], O);
const te = O, W = "esriJSAPIOAuth";
class X {
  constructor(e, s) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = e, this.storage = s, this._init();
  }
  isValid() {
    let e = !1;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (this.expires == null && this.refreshToken) e = !0;
      else if (this.expires) {
        const s = Date.now();
        this.expires > s && (this.expires - s) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (e = !0);
      }
    }
    return e;
  }
  save() {
    if (!this.storage) return !1;
    const e = this._load(), s = this.oAuthInfo;
    if (s && s.authNamespace && s.portalUrl) {
      let t = e[s.authNamespace];
      t || (t = e[s.authNamespace] = {}), this.appId || (this.appId = s.appId), t[s.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(W, JSON.stringify(e));
      } catch (r) {
        return console.warn(r), !1;
      }
      return !0;
    }
    return !1;
  }
  destroy() {
    const e = this._load(), s = this.oAuthInfo;
    if (s?.appId && s?.portalUrl && (this.expires == null || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const t = s.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", r = new FormData();
      if (r.append("f", "json"), r.append("auth_token", this.refreshToken || this.token), r.append("client_id", s.appId), r.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), typeof navigator.sendBeacon == "function") navigator.sendBeacon(t, r);
      else {
        const i = new XMLHttpRequest();
        i.open("POST", t), i.send(r);
      }
    }
    if (s && s.authNamespace && s.portalUrl && this.storage) {
      const t = e[s.authNamespace];
      if (t) {
        delete t[s.portalUrl];
        try {
          this.storage.setItem(W, JSON.stringify(e));
        } catch (r) {
          console.log(r);
        }
      }
    }
    s && (s._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const e = this._load(), s = this.oAuthInfo;
    if (s && s.authNamespace && s.portalUrl) {
      let t = e[s.authNamespace];
      t && (t = t[s.portalUrl], t && (this.appId = t.appId, this.codeVerifier = t.codeVerifier, this.expires = t.expires, this.refreshToken = t.refreshToken, this.ssl = t.ssl, this.stateUID = t.stateUID, this.token = t.token, this.userId = t.userId));
    }
  }
  _load() {
    let e = {};
    if (this.storage) {
      const s = this.storage.getItem(W);
      if (s) try {
        e = JSON.parse(s);
      } catch (t) {
        console.warn(t);
      }
    }
    return e;
  }
}
X.prototype.declaredClass = "esri.identity.OAuthCredential";
var Y;
let T = Y = class extends re {
  constructor(u) {
    super(u), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = !1, this.forceUserId = !1, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = !1, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = !1, this.userId = null;
  }
  clone() {
    return Y.fromJSON(this.toJSON());
  }
};
p([f({ json: { write: !0 } })], T.prototype, "appId", void 0), p([f({ json: { write: !0 } })], T.prototype, "authNamespace", void 0), p([f({ json: { write: !0 } })], T.prototype, "expiration", void 0), p([f({ json: { write: !0 } })], T.prototype, "flowType", void 0), p([f({ json: { write: !0 } })], T.prototype, "forceLogin", void 0), p([f({ json: { write: !0 } })], T.prototype, "forceUserId", void 0), p([f({ json: { write: !0 } })], T.prototype, "locale", void 0), p([f({ json: { write: !0 } })], T.prototype, "minTimeUntilExpiration", void 0), p([f({ json: { write: !0 } })], T.prototype, "popup", void 0), p([f({ json: { write: !0 } })], T.prototype, "popupCallbackUrl", void 0), p([f({ json: { write: !0 } })], T.prototype, "popupWindowFeatures", void 0), p([f({ json: { write: !0 } })], T.prototype, "portalUrl", void 0), p([f({ json: { write: !0 } })], T.prototype, "preserveUrlHash", void 0), p([f({ json: { write: !0 } })], T.prototype, "userId", void 0), T = Y = p([M("esri.identity.OAuthInfo")], T);
const se = T;
let P = class extends re {
  constructor(u) {
    super(u), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
p([f({ json: { write: !0 } })], P.prototype, "adminTokenServiceUrl", void 0), p([f({ json: { write: !0 } })], P.prototype, "currentVersion", void 0), p([f({ json: { write: !0 } })], P.prototype, "hasPortal", void 0), p([f({ json: { write: !0 } })], P.prototype, "hasServer", void 0), p([f({ json: { write: !0 } })], P.prototype, "owningSystemUrl", void 0), p([f({ json: { write: !0 } })], P.prototype, "owningTenant", void 0), p([f({ json: { write: !0 } })], P.prototype, "server", void 0), p([f({ json: { write: !0 } })], P.prototype, "shortLivedTokenValidity", void 0), p([f({ json: { write: !0 } })], P.prototype, "tokenServiceUrl", void 0), p([f({ json: { write: !0 } })], P.prototype, "webTierAuth", void 0), P = p([M("esri.identity.ServerInfo")], P);
const K = P, L = {}, oe = (u) => {
  const e = new C(u.owningSystemUrl).host, s = new C(u.server).host, t = /.+\.arcgis\.com$/i;
  return t.test(e) && t.test(s);
}, Q = (u, e) => !!(oe(u) && e && e.some((s) => s.test(u.server)));
let V = null, E = null;
try {
  V = window.localStorage, E = window.sessionStorage;
} catch {
}
class ae extends ie {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.tokenValidity = null, this.normalizeWebTierAuth = !1, this._appOrigin = window.origin !== "null" ? window.origin : window.location.origin, this._appUrlObj = z(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = !1, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi, this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i, this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i, this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = !0, this._hasTestedIfAppIsOnPortal = !1, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e) => {
      this._pageShowHandler(e);
    });
  }
  registerServers(e) {
    const s = this.serverInfos;
    s ? (e = e.filter((t) => !this.findServerInfo(t.server)), this.serverInfos = s.concat(e)) : this.serverInfos = e, e.forEach((t) => {
      t.owningSystemUrl && this._portals.push(t.owningSystemUrl), t.hasPortal && this._portals.push(t.server);
    });
  }
  registerOAuthInfos(e) {
    const s = this.oAuthInfos;
    if (s) {
      for (const t of e) {
        const r = this.findOAuthInfo(t.portalUrl);
        r && s.splice(s.indexOf(r), 1);
      }
      this.oAuthInfos = s.concat(e);
    } else this.oAuthInfos = e;
  }
  registerToken(e) {
    e = { ...e };
    const s = this._sanitizeUrl(e.server), t = this._isServerRsrc(s);
    let r, i = this.findServerInfo(s), o = !0;
    i || (i = new K(), i.server = this._getServerInstanceRoot(s), t ? i.hasServer = !0 : (i.tokenServiceUrl = this._getTokenSvcUrl(s), i.hasPortal = !0), this.registerServers([i])), r = this._findCredential(s), r ? (delete e.server, Object.assign(r, e), o = !1) : (r = new I({ userId: e.userId, server: i.server, token: e.token, expires: e.expires, ssl: e.ssl, scope: t ? "server" : "portal" }), r.resources = [s], this.credentials.push(r)), r.emitTokenChange(!1), o || r.refreshServerTokens();
  }
  toJSON() {
    return ne({ serverInfos: this.serverInfos.map((e) => e.toJSON()), oAuthInfos: this.oAuthInfos.map((e) => e.toJSON()), credentials: this.credentials.map((e) => e.toJSON()) });
  }
  initialize(e) {
    if (!e) return;
    typeof e == "string" && (e = JSON.parse(e));
    const s = e.serverInfos, t = e.oAuthInfos, r = e.credentials;
    if (s) {
      const i = [];
      s.forEach((o) => {
        o.server && o.tokenServiceUrl && i.push(o.declaredClass ? o : new K(o));
      }), i.length && this.registerServers(i);
    }
    if (t) {
      const i = [];
      t.forEach((o) => {
        o.appId && i.push(o.declaredClass ? o : new se(o));
      }), i.length && this.registerOAuthInfos(i);
    }
    r && r.forEach((i) => {
      i.server && i.token && i.expires && i.expires > Date.now() && ((i = i.declaredClass ? i : new I(i)).emitTokenChange(), this.credentials.push(i));
    });
  }
  findServerInfo(e) {
    let s;
    e = this._sanitizeUrl(e);
    for (const t of this.serverInfos) if (this._hasSameServerInstance(t.server, e)) {
      s = t;
      break;
    }
    return s;
  }
  findOAuthInfo(e) {
    let s;
    e = this._sanitizeUrl(e);
    for (const t of this.oAuthInfos) if (this._hasSameServerInstance(t.portalUrl, e)) {
      s = t;
      break;
    }
    return s;
  }
  findCredential(e, s) {
    if (!e) return;
    let t;
    e = this._sanitizeUrl(e);
    const r = this._isServerRsrc(e) ? "server" : "portal";
    if (s) {
      for (const i of this.credentials) if (this._hasSameServerInstance(i.server, e) && s === i.userId && i.scope === r) {
        t = i;
        break;
      }
    } else for (const i of this.credentials) if (this._hasSameServerInstance(i.server, e) && this._getIdenticalSvcIdx(e, i) !== -1 && i.scope === r) {
      t = i;
      break;
    }
    return t;
  }
  getCredential(e, s) {
    let t, r, i = !0;
    s && (t = !!s.token, r = s.error, i = s.prompt !== !1), s = { ...s }, e = this._sanitizeUrl(e);
    const o = new AbortController(), h = j();
    if (s.signal && D(s.signal, () => {
      o.abort();
    }), D(o, () => {
      h.reject(new U("identity-manager:user-aborted", "ABORTED"));
    }), pe(o)) return h.promise;
    s.signal = o.signal;
    const d = this._isAdminResource(e), n = t ? this.findCredential(e) : null;
    let l;
    if (n && r && r.details && r.details.httpStatus === 498) n.destroy();
    else if (n) return l = new U("identity-manager:not-authorized", "You are currently signed in as: '" + n.userId + "'. You do not have access to this resource: " + e, { error: r }), h.reject(l), h.promise;
    const c = this._findCredential(e, s);
    if (c) return h.resolve(c), h.promise;
    let a = this.findServerInfo(e);
    if (a) !a.hasPortal && a.server && a.owningSystemUrl && this._hasSameServerInstance(a.server, a.owningSystemUrl) && (a.hasPortal = !0), !a.hasServer && this._isServerRsrc(e) && (a._restInfoPms = this._getTokenSvcUrl(e), a.hasServer = !0);
    else {
      const _ = this._getTokenSvcUrl(e);
      if (!_) return l = new U("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), h.reject(l), h.promise;
      a = new K(), a.server = this._getServerInstanceRoot(e), typeof _ == "string" ? (a.tokenServiceUrl = _, a.hasPortal = !0) : (a._restInfoPms = _, a.hasServer = !0), this.registerServers([a]);
    }
    return a.hasPortal && a._selfReq === void 0 && (i || R(a.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((_) => _.tokenServiceUrl === a.tokenServiceUrl)) && (a._selfReq = { owningTenant: s?.owningTenant, selfDfd: this._getPortalSelf(a.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e) }), this._enqueue(e, a, s, h, d);
  }
  getResourceName(e) {
    return this._isRESTService(e) ? e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e) && e.replace(this._gwUser, "$1") || this._gwItem.test(e) && e.replace(this._gwItem, "$1") || this._gwGroup.test(e) && e.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e, s, t) {
    const r = this._rePortalTokenSvc.test(e.tokenServiceUrl), i = new C(this._appOrigin), o = e.shortLivedTokenValidity;
    let h, d, n, l, c, a, _, w;
    s && (w = this.tokenValidity || o || this._defaultTokenValidity, w > o && o > 0 && (w = o)), t && (h = t.isAdmin, d = t.serverUrl, n = t.token, a = t.signal, _ = t.ssl, e.customParameters = t.customParameters), h ? l = e.adminTokenServiceUrl : (l = e.tokenServiceUrl, c = new C(l.toLowerCase()), e.webTierAuth && t?.serverUrl && !_ && i.scheme === "http" && (R(i.uri, l, !0) || c.scheme === "https" && i.host === c.host && i.port === "7080" && c.port === "7443") && (l = l.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const m = { query: { request: "getToken", username: s?.username, password: s?.password, serverUrl: d, token: n, expiration: w, referer: h || r ? this._appOrigin : null, client: h ? "referer" : null, f: "json", ...e.customParameters }, method: "post", authMode: "anonymous", useProxy: this._useProxy(e, t), signal: a, ...t?.ioArgs };
    return r || (m.withCredentials = !1), b(l, m).then((v) => {
      const k = v.data;
      if (!k?.token) return new U("identity-manager:authentication-failed", "Unable to generate token");
      const g = e.server;
      return L[g] || (L[g] = {}), s && (L[g][s.username] = s.password), k.validity = w, k;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e) {
    return this.checkAppAccess(e, "").then((s) => s.credential);
  }
  checkAppAccess(e, s, t) {
    let r = !1;
    return this.getCredential(e, { prompt: !1 }).then((i) => {
      let o;
      const h = { f: "json" };
      if (i.scope === "portal") if (s && (this._doPortalSignIn(e) || t?.force)) o = i.server + "/sharing/rest/oauth2/validateAppAccess", h.client_id = s;
      else {
        if (!i.token) return { credential: i };
        o = i.server + "/sharing/rest";
      }
      else {
        if (!i.token) return { credential: i };
        o = i.server + "/rest/services";
      }
      return i.token && (h.token = i.token), b(o, { query: h, authMode: "anonymous" }).then((d) => {
        if (d.data.valid === !1) throw new U("identity-manager:not-authorized", `You are currently signed in as: '${i.userId}'.`, d.data);
        return r = !!d.data.viewOnlyUserTypeApp, { credential: i };
      }).catch((d) => {
        if (d.name === "identity-manager:not-authorized") throw d;
        const n = d.details?.httpStatus;
        if (n === 498) throw i.destroy(), new U("identity-manager:not-authenticated", "User is not signed in.");
        if (n === 400) throw new U("identity-manager:invalid-request");
        return { credential: i };
      });
    }).then((i) => ({ credential: i.credential, viewOnly: r }));
  }
  setOAuthResponseHash(e) {
    e && (e.charAt(0) === "#" && (e = e.substring(1)), this._processOAuthPopupParams(q(e)));
  }
  setOAuthRedirectionHandler(e) {
    this._oAuthRedirectFunc = e;
  }
  setProtocolErrorHandler(e) {
    this._protocolFunc = e;
  }
  signIn(e, s, t = {}) {
    const r = j(), i = () => {
      d?.remove(), n?.remove(), this.dialog?.destroy(), this.dialog = d = n = null;
    }, o = () => {
      i(), this._oAuthDfd = null, r.reject(new U("identity-manager:user-aborted", "ABORTED"));
    };
    t.signal && D(t.signal, () => {
      o();
    });
    const h = new te({ open: !0, resource: this.getResourceName(e), server: s.server });
    this.dialog = h, this.emit("dialog-create");
    let d = h.on("cancel", o), n = h.on("submit", (l) => {
      this.generateToken(s, l, { isAdmin: t.isAdmin, signal: t.signal }).then((c) => {
        i();
        const a = new I({ userId: l.username, server: s.server, token: c.token, expires: c.expires != null ? Number(c.expires) : null, ssl: !!c.ssl, isAdmin: t.isAdmin, validity: c.validity });
        r.resolve(a);
      }).catch((c) => {
        h.error = c, h.signingIn = !1;
      });
    });
    return r.promise;
  }
  oAuthSignIn(e, s, t, r) {
    this._oAuthDfd = j();
    const i = this._oAuthDfd;
    let o;
    r?.signal && D(r.signal, () => {
      const a = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      a && !a.closed ? a.close() : this.dialog && l();
    }), i.resUrl_ = e, i.sinfo_ = s, i.oinfo_ = t;
    const h = t._oAuthCred;
    if (h.storage && (t.flowType === "authorization-code" || t.flowType === "auto" && s.currentVersion >= 8.4)) {
      let a = crypto.getRandomValues(new Uint8Array(32));
      o = B(a), h.codeVerifier = o, a = crypto.getRandomValues(new Uint8Array(32)), h.stateUID = B(a), h.save() || (h.codeVerifier = o = null);
    } else h.codeVerifier = null;
    let d, n;
    this._getCodeChallenge(o).then((a) => {
      const _ = !r || r.oAuthPopupConfirmation !== !1;
      if (!t.popup || !_) return void this._doOAuthSignIn(e, s, t, a);
      const w = new te({ oAuthPrompt: !0, server: s.server, open: !0 });
      this.dialog = w, this.emit("dialog-create"), d = w.on("cancel", l), n = w.on("submit", () => {
        c(), this._doOAuthSignIn(e, s, t, a);
      });
    });
    const l = () => {
      c(), this._oAuthDfd = null, i.reject(new U("identity-manager:user-aborted", "ABORTED"));
    }, c = () => {
      d?.remove(), n?.remove(), this.dialog?.destroy(), this.dialog = null;
    };
    return i.promise;
  }
  destroyCredentials() {
    this.credentials && this.credentials.slice().forEach((e) => {
      e.destroy();
    }), this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = F(window, "message", (s) => {
      if ((s.origin === this._appOrigin || s.origin.endsWith(".arcgis.com")) && s.data?.type === "arcgis:auth:requestCredential") {
        const t = s.source;
        this.getCredential(e).then((r) => {
          t.postMessage({ type: "arcgis:auth:credential", credential: { expires: r.expires, server: r.server, ssl: r.ssl, token: r.token, userId: r.userId } }, s.origin);
        }).catch((r) => {
          t.postMessage({ type: "arcgis:auth:error", error: { name: r.name, message: r.message } }, s.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    let e = window.location.hash;
    if (e) {
      e.charAt(0) === "#" && (e = e.substring(1));
      const t = q(e);
      let r = !1;
      if (t.access_token && t.expires_in && t.state && t.hasOwnProperty("username")) try {
        t.state = JSON.parse(t.state), t.state.portalUrl && (this._oAuthLocationParams = t, r = !0);
      } catch {
      }
      else if (t.error && t.error_description && (console.log("IdentityManager OAuth Error: ", t.error, " - ", t.error_description), t.error === "access_denied" && (r = !0, t.state))) try {
        t.state = JSON.parse(t.state);
      } catch {
      }
      r && (window.location.hash = t.state?.hash || "");
    }
    let s = window.location.search;
    if (s) {
      s.charAt(0) === "?" && (s = s.substring(1));
      const t = q(s);
      let r = !1;
      if (t.code && t.state) try {
        t.state = JSON.parse(t.state), t.state.portalUrl && t.state.uid && (this._oAuthLocationParams = t, r = !0);
      } catch {
      }
      else if (t.error && t.error_description && (console.log("IdentityManager OAuth Error: ", t.error, " - ", t.error_description), t.error === "access_denied" && (r = !0, t.state))) try {
        t.state = JSON.parse(t.state);
      } catch {
      }
      if (r) {
        const i = { ...t };
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((d) => {
          delete i[d];
        });
        const o = $(i), h = window.location.pathname + (o ? `?${o}` : "") + (t.state?.hash || "");
        window.history.replaceState(window.history.state, "", h);
      }
    }
  }
  _getOAuthToken(e, s, t, r, i) {
    return e = e.replace(/^http:/i, "https:"), b(`${e}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: r && i ? { grant_type: "authorization_code", code: s, redirect_uri: r, client_id: t, code_verifier: i } : { grant_type: "refresh_token", refresh_token: s, client_id: t } }).then((o) => o.data);
  }
  _getCodeChallenge(e) {
    if (e && globalThis.isSecureContext) {
      const s = new TextEncoder().encode(e);
      return crypto.subtle.digest("SHA-256", s).then((t) => B(new Uint8Array(t)));
    }
    return Promise.resolve(null);
  }
  _pageShowHandler(e) {
    if (e.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const s = new U("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(s);
    }
  }
  _findCredential(e, s) {
    let t, r, i, o, h = -1;
    const d = s?.token, n = s?.resource, l = this._isServerRsrc(e) ? "server" : "portal", c = this.credentials.filter((a) => this._hasSameServerInstance(a.server, e) && a.scope === l);
    if (e = n || e, c.length) if (c.length === 1) {
      if (t = c[0], i = this.findServerInfo(t.server), r = i?.owningSystemUrl, o = r ? this.findCredential(r, t.userId) : void 0, h = this._getIdenticalSvcIdx(e, t), !d) return h === -1 && t.resources.push(e), this._addResource(e, o), t;
      h !== -1 && (t.resources.splice(h, 1), this._removeResource(e, o));
    } else {
      let a, _;
      if (c.some((w) => (_ = this._getIdenticalSvcIdx(e, w), _ !== -1 && (a = w, i = this.findServerInfo(a.server), r = i?.owningSystemUrl, o = r ? this.findCredential(r, a.userId) : void 0, h = _, !0))), d) a && (a.resources.splice(h, 1), this._removeResource(e, o));
      else if (a) return this._addResource(e, o), a;
    }
  }
  _findOAuthInfo(e) {
    let s = this.findOAuthInfo(e);
    if (!s) {
      for (const t of this.oAuthInfos) if (this._isIdProvider(t.portalUrl, e)) {
        s = t;
        break;
      }
    }
    return s;
  }
  _addResource(e, s) {
    s && this._getIdenticalSvcIdx(e, s) === -1 && s.resources.push(e);
  }
  _removeResource(e, s) {
    let t = -1;
    s && (t = this._getIdenticalSvcIdx(e, s), t > -1 && s.resources.splice(t, 1));
  }
  _useProxy(e, s) {
    return s?.isAdmin && !R(e.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e.tokenServiceUrl) && String(e.currentVersion) === "10.1" && !R(e.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e) {
    const s = new C(e);
    return s.scheme + "://" + s.host + (s.port != null ? ":" + s.port : "");
  }
  _getServerInstanceRoot(e) {
    const s = e.toLowerCase();
    let t = s.indexOf(this._agsRest);
    return t === -1 && this._isAdminResource(e) && (t = this._agsAdmin.test(e) ? e.replace(this._agsAdmin, "$1").length : e.search(this._adminSvcs)), t !== -1 || _e(s) || (t = s.indexOf("/sharing")), t === -1 && s.substr(-1) === "/" && (t = s.length - 1), t > -1 ? e.substring(0, t) : e;
  }
  _hasSameServerInstance(e, s) {
    return e.substr(-1) === "/" && (e = e.slice(0, -1)), e = e.toLowerCase(), s = this._getServerInstanceRoot(s).toLowerCase(), e = this._normalizeAGOLorgDomain(e), s = this._normalizeAGOLorgDomain(s), (e = e.substr(e.indexOf(":"))) === (s = s.substr(s.indexOf(":")));
  }
  _normalizeAGOLorgDomain(e) {
    const s = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, t = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, r = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
    return s.test(e) ? e = e.replace(s, "https://www.arcgis.com") : t.test(e) ? e = e.replace(t, "https://devext.arcgis.com") : r.test(e) && (e = e.replace(r, "https://qaext.arcgis.com")), e;
  }
  _sanitizeUrl(e) {
    const s = (H.request.proxyUrl || "").toLowerCase(), t = s ? e.toLowerCase().indexOf(s + "?") : -1;
    return t !== -1 && (e = e.substring(t + s.length + 1)), e = fe(e), z(e).path;
  }
  _isRESTService(e) {
    return e.includes(this._agsRest);
  }
  _isAdminResource(e) {
    return this._agsAdmin.test(e) || this._adminSvcs.test(e);
  }
  _isServerRsrc(e) {
    return this._isRESTService(e) || this._isAdminResource(e);
  }
  _isIdenticalService(e, s) {
    let t = !1;
    if (this._isRESTService(e) && this._isRESTService(s)) {
      const r = this._getSuffix(e).toLowerCase(), i = this._getSuffix(s).toLowerCase();
      if (t = r === i, !t) {
        const o = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        t = r.replaceAll(o, "$1") === i.replaceAll(o, "$1");
      }
    } else this._isAdminResource(e) && this._isAdminResource(s) ? t = !0 : this._isServerRsrc(e) || this._isServerRsrc(s) || !this._isPortalDomain(e) || (t = !0);
    return t;
  }
  _isPortalDomain(e) {
    const s = new C(e.toLowerCase()), t = this._portalConfig;
    let r = this._gwDomains.some((i) => i.regex.test(s.uri));
    return !r && t && (r = this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl), s.uri)), r || H.portalUrl && (r = R(s, H.portalUrl, !0)), r || (r = this._portals.some((i) => this._hasSameServerInstance(i, s.uri))), r = r || this._agsPortal.test(s.path), r;
  }
  _isIdProvider(e, s) {
    let t = -1, r = -1;
    this._gwDomains.forEach((o, h) => {
      t === -1 && o.regex.test(e) && (t = h), r === -1 && o.regex.test(s) && (r = h);
    });
    let i = !1;
    if (t > -1 && r > -1 && (t === 0 || t === 4 ? r !== 0 && r !== 4 || (i = !0) : t === 1 ? r !== 1 && r !== 2 || (i = !0) : t === 2 ? r === 2 && (i = !0) : t === 3 && r === 3 && (i = !0)), !i) {
      const o = this.findServerInfo(s), h = o?.owningSystemUrl;
      h && oe(o) && this._isPortalDomain(h) && this._isIdProvider(e, h) && (i = !0);
    }
    return i;
  }
  _getIdenticalSvcIdx(e, s) {
    let t = -1;
    for (let r = 0; r < s.resources.length; r++) {
      const i = s.resources[r];
      if (this._isIdenticalService(e, i)) {
        t = r;
        break;
      }
    }
    return t;
  }
  _getSuffix(e) {
    return e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e) {
    let s, t, r;
    if (this._isRESTService(e) || this._isAdminResource(e)) {
      const i = this._getServerInstanceRoot(e);
      return s = i + "/admin/generateToken", t = b(e = i + "/rest/info", { query: { f: "json" } }).then((o) => o.data), { adminUrl: s, promise: t };
    }
    if (this._isPortalDomain(e)) {
      let i = "";
      if (this._gwDomains.some((o) => (o.regex.test(e) && (i = o.tokenServiceUrl), !!i)), i || this._portals.some((o) => (this._hasSameServerInstance(o, e) && (i = o + this._gwTokenUrl), !!i)), i || (r = e.toLowerCase().indexOf("/sharing"), r !== -1 && (i = e.substring(0, r) + this._gwTokenUrl)), i || (i = this._getOrigin(e) + this._gwTokenUrl), i) {
        const o = new C(e).port;
        /^http:\/\//i.test(e) && o === "7080" && (i = i.replace(/:7080/i, ":7443")), i = i.replace(/http:/i, "https:");
      }
      return i;
    }
    if (e.toLowerCase().includes("premium.arcgisonline.com")) return "https://premium.arcgisonline.com/server/tokens";
  }
  _processOAuthResponseParams(e, s, t) {
    const r = s._oAuthCred;
    if (e.code) {
      const o = r.codeVerifier;
      return r.codeVerifier = null, r.stateUID = null, r.save(), this._getOAuthToken(t.server, e.code, s.appId, this._getRedirectURI(s, !0), o).then((h) => {
        const d = new I({ userId: h.username, server: t.server, token: h.access_token, expires: Date.now() + 1e3 * h.expires_in, ssl: h.ssl, oAuthState: e.state, _oAuthCred: r });
        return s.userId = d.userId, r.storage = h.persist ? V : E, r.refreshToken = h.refresh_token, r.token = null, r.expires = h.refresh_token_expires_in ? Date.now() + 1e3 * h.refresh_token_expires_in : null, r.userId = d.userId, r.ssl = d.ssl, r.save(), d;
      });
    }
    const i = new I({ userId: e.username, server: t.server, token: e.access_token, expires: Date.now() + 1e3 * Number(e.expires_in), ssl: e.ssl === "true", oAuthState: e.state, _oAuthCred: r });
    return s.userId = i.userId, r.storage = e.persist ? V : E, r.refreshToken = null, r.token = i.token, r.expires = i.expires, r.userId = i.userId, r.ssl = i.ssl, r.save(), Promise.resolve(i);
  }
  _processOAuthPopupParams(e) {
    const s = this._oAuthDfd;
    if (this._oAuthDfd = null, s) if (clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle?.remove(), e.error) {
      const t = e.error === "access_denied", r = new U(t ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", t ? "ABORTED" : "OAuth: " + e.error + " - " + e.error_description);
      s.reject(r);
    } else this._processOAuthResponseParams(e, s.oinfo_, s.sinfo_).then((t) => {
      s.resolve(t);
    }).catch((t) => {
      s.reject(t);
    });
  }
  _setOAuthResponseQueryString(e) {
    e && (e.charAt(0) === "?" && (e = e.substring(1)), this._processOAuthPopupParams(q(e)));
  }
  _exchangeToken(e, s, t) {
    return b(`${e}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: s, token: t } }).then((r) => r.data.token);
  }
  _getPlatformSelf(e, s) {
    return e = e.replace(/^http:/i, "https:"), b(`${e}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": s, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: !0 }).then((t) => t.data);
  }
  _getPortalSelf(e, s) {
    let t;
    return this._gwDomains.some((r) => (r.regex.test(e) && (t = r.customBaseUrl), !!t)), t ? Promise.resolve({ allSSL: !0, currentVersion: "8.4", customBaseUrl: t, portalMode: "multitenant", supportsOAuth: !0 }) : (this._appOrigin.startsWith("https:") ? e = e.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(s) && (e = e.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")), b(e, { query: { f: "json" }, authMode: "anonymous", withCredentials: !0 }).then((r) => r.data));
  }
  _doPortalSignIn(e) {
    const s = this._portalConfig, t = window.location.href, r = this.findServerInfo(e);
    return !(!s && !this._isPortalDomain(t) || !(r ? r.hasPortal || r.owningSystemUrl && this._isPortalDomain(r.owningSystemUrl) : this._isPortalDomain(e)) || !(this._isIdProvider(t, e) || s && (this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl), e) || this._isIdProvider(s.restBaseUrl, e)) || R(t, e, !0)));
  }
  _checkProtocol(e, s, t, r) {
    let i = !0;
    const o = r ? s.adminTokenServiceUrl : s.tokenServiceUrl;
    return o.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && ge(o) && (i = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e, serverInfo: s }), !i) && t(new U("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection.")), i;
  }
  _enqueue(e, s, t, r, i, o) {
    return r || (r = j()), r.resUrl_ = e, r.sinfo_ = s, r.options_ = t, r.admin_ = i, r.refresh_ = o, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(r)) : this._xoReqs.push(r) : this._doSignIn(r), r.promise;
  }
  _doSignIn(e) {
    this._busy = e, this._rejectOnPersistedPageShow = !1;
    const s = (n) => {
      const l = e.options_?.resource, c = e.resUrl_, a = e.refresh_;
      let _ = !1;
      this.credentials.includes(n) || (a && this.credentials.includes(a) ? (a.userId = n.userId, a.token = n.token, a.expires = n.expires, a.validity = n.validity, a.ssl = n.ssl, a.creationTime = n.creationTime, _ = !0, n = a) : this.credentials.push(n)), n.resources || (n.resources = []), n.resources.includes(l || c) || n.resources.push(l || c), n.scope = this._isServerRsrc(c) ? "server" : "portal", n.emitTokenChange();
      const w = this._soReqs, m = {};
      this._soReqs = [], w.forEach((v) => {
        if (!this._isIdenticalService(c, v.resUrl_)) {
          const k = this._getSuffix(v.resUrl_);
          m[k] || (m[k] = !0, n.resources.push(v.resUrl_));
        }
      }), e.resolve(n), w.forEach((v) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(c), v.resUrl_) ? v.resolve(n) : this._soReqs.push(v);
      }), this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, _ || this.emit("credential-create", { credential: n }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, t = (n) => {
      e.reject(n), this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r = (n, l, c, a) => {
      const _ = e.sinfo_, w = !e.options_ || e.options_.prompt !== !1, m = _.hasPortal && this._findOAuthInfo(e.resUrl_);
      let v, k;
      if (n) s(new I({ userId: n, server: _.server, token: c || null, expires: a != null ? Number(a) : null, ssl: !!l }));
      else if (window !== window.parent && this._appUrlObj.query?.["arcgis-auth-origin"] && this._appUrlObj.query?.["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e.resUrl_)) {
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const g = F(window, "message", (S) => {
          S.source === window.parent && S.data && (S.data.type === "arcgis:auth:credential" ? (g.remove(), S.data.credential.expires < Date.now() ? t(new U("identity-manager:credential-request-failed", "Parent application's token has expired.")) : s(new I(S.data.credential))) : S.data.type === "arcgis:auth:error" && (g.remove(), S.data.error.name === "tokenExpiredError" ? t(new U("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t(U.fromJSON(S.data.error))));
        });
        D(e.options_?.signal, () => {
          g.remove();
        });
      } else if (m) {
        let g = m._oAuthCred;
        if (!g) {
          const S = new X(m, V), y = new X(m, E);
          S.isValid() && y.isValid() ? S.expires > y.expires ? (g = S, y.destroy()) : (g = y, S.destroy()) : g = S.isValid() ? S : y, m._oAuthCred = g;
        }
        if (g.isValid()) {
          v = new I({ userId: g.userId, server: _.server, token: g.token, expires: g.expires, ssl: g.ssl, _oAuthCred: g });
          const S = m.appId !== g.appId && this._doPortalSignIn(e.resUrl_);
          S || g.refreshToken ? (e._pendingDfd = g.refreshToken ? this._getOAuthToken(_.server, g.refreshToken, g.appId).then((y) => (v.expires = Date.now() + 1e3 * y.expires_in, v.token = y.access_token, v)) : Promise.resolve(v), e._pendingDfd.then((y) => S ? this._exchangeToken(y.server, m.appId, y.token).then((le) => (y.token = le, y)).catch(() => y) : y).then((y) => {
            s(y);
          }).catch(() => {
            g?.destroy(), r();
          })) : s(v);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(m.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === g.stateUID && g.codeVerifier)) {
          const S = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e._pendingDfd = this._processOAuthResponseParams(S, m, _).then((y) => {
            s(y);
          }).catch(t);
        } else {
          const S = () => {
            w ? e._pendingDfd = this.oAuthSignIn(e.resUrl_, _, m, e.options_).then(s, t) : (k = new U("identity-manager:not-authenticated", "User is not signed in."), t(k));
          };
          this._doPortalSignIn(e.resUrl_) ? e._pendingDfd = this._getPlatformSelf(_.server, m.appId).then((y) => {
            R(y.portalUrl, this._appOrigin, !0) ? (v = new I({ userId: y.username, server: _.server, expires: Date.now() + 1e3 * y.expires_in, token: y.token }), s(v)) : S();
          }).catch(S) : S();
        }
      } else if (w) {
        if (this._checkProtocol(e.resUrl_, _, t, e.admin_)) {
          let g = e.options_;
          e.admin_ && (g = g || {}, g.isAdmin = !0), e._pendingDfd = this.signIn(e.resUrl_, _, g).then(s, t);
        }
      } else k = new U("identity-manager:not-authenticated", "User is not signed in."), t(k);
    }, i = () => {
      const n = e.sinfo_, l = n.owningSystemUrl, c = e.options_;
      let a, _, w, m;
      if (c && (a = c.token, _ = c.error, w = c.prompt), m = this._findCredential(l, { token: a, resource: e.resUrl_ }), !m) {
        for (const v of this.credentials) if (this._isIdProvider(l, v.server)) {
          m = v;
          break;
        }
      }
      if (m) {
        const v = this.findCredential(e.resUrl_, m.userId);
        if (v) s(v);
        else if (Q(n, this._legacyFed)) {
          const k = m.toJSON();
          k.server = n.server, k.resources = null, s(new I(k));
        } else
          (e._pendingDfd = this.generateToken(this.findServerInfo(m.server), null, { serverUrl: e.resUrl_, token: m.token, signal: e.options_.signal, ssl: m.ssl })).then((k) => {
            s(new I({ userId: m?.userId, server: n.server, token: k.token, expires: k.expires != null ? Number(k.expires) : null, ssl: !!k.ssl, isAdmin: e.admin_, validity: k.validity }));
          }, t);
      } else
        this._busy = null, a && (e.options_.token = null), (e._pendingDfd = this.getCredential(l.replace(/\/?$/, "/sharing"), { resource: e.resUrl_, owningTenant: n.owningTenant, signal: e.options_.signal, token: a, error: _, prompt: w })).then(() => {
          this._enqueue(e.resUrl_, e.sinfo_, e.options_, e, e.admin_);
        }, (v) => {
          e.resUrl_ = e.sinfo_ = e.refresh_ = null, e.reject(v);
        });
    };
    this._errbackFunc = t;
    const o = e.sinfo_.owningSystemUrl, h = this._isServerRsrc(e.resUrl_), d = e.sinfo_._restInfoPms;
    d ? d.promise.then((n) => {
      const l = e.sinfo_;
      if (l._restInfoPms) {
        l.adminTokenServiceUrl = l._restInfoPms.adminUrl, l._restInfoPms = null, l.tokenServiceUrl = (N("authInfo.tokenServicesUrl", n) || N("authInfo.tokenServiceUrl", n) || N("tokenServiceUrl", n)) ?? null, l.shortLivedTokenValidity = N("authInfo.shortLivedTokenValidity", n) ?? null, l.currentVersion = n.currentVersion, l.owningTenant = n.owningTenant;
        const c = l.owningSystemUrl = n.owningSystemUrl;
        c && this._portals.push(c);
      }
      h && l.owningSystemUrl ? i() : r();
    }, () => {
      e.sinfo_._restInfoPms = null;
      const n = new U("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      t(n);
    }) : h && o ? i() : e.sinfo_._selfReq ? e.sinfo_._selfReq.selfDfd.then((n) => {
      const l = {};
      let c, a, _, w;
      return n && (c = n.user?.username, l.username = c, l.allSSL = n.allSSL, a = n.supportsOAuth, w = parseFloat(n.currentVersion), n.portalMode === "multitenant" && (_ = n.customBaseUrl), e.sinfo_.currentVersion = w), e.sinfo_.webTierAuth = !!c, c && this.normalizeWebTierAuth ? this.generateToken(e.sinfo_, null, { ssl: l.allSSL }).catch(() => null).then((m) => (l.portalToken = m && m.token, l.tokenExpiration = m && m.expires, l)) : !c && a && w >= 4.4 && !this._findOAuthInfo(e.resUrl_) ? this._generateOAuthInfo({ portalUrl: e.sinfo_.server, customBaseUrl: _, owningTenant: e.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => l) : l;
    }).catch(() => null).then((n) => {
      e.sinfo_._selfReq = null, n ? r(n.username, n.allSSL, n.portalToken, n.tokenExpiration) : r();
    }) : r();
  }
  _generateOAuthInfo(e) {
    let s, t = null, r = e.portalUrl;
    const i = e.customBaseUrl, o = e.owningTenant, h = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (h) {
      t = window.location.href;
      let d = t.indexOf("?");
      d > -1 && (t = t.slice(0, d)), d = t.search(/\/(apps|home)\//), t = d > -1 ? t.slice(0, d) : null;
    }
    return h && t ? (this._hasTestedIfAppIsOnPortal = !0, s = b(t + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this._defaultOAuthInfo = new se({ appId: "arcgisonline", popupCallbackUrl: t + "/home/oauth-callback.html" });
    })) : s = Promise.resolve(), s.then(() => {
      if (this._defaultOAuthInfo) return r = r.replace(/^http:/i, "https:"), b(r + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: o, client_id: this._defaultOAuthInfo.appId, redirect_uri: ee(this._defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((d) => {
        if (d.data.valid) {
          const n = this._defaultOAuthInfo.clone();
          d.data.urlKey && i ? n.portalUrl = "https://" + d.data.urlKey.toLowerCase() + "." + i : n.portalUrl = r, n.popup = window !== window.top || !(R(r, this._appOrigin) || this._gwDomains.some((l) => l.regex.test(r) && l.regex.test(this._appOrigin))), this.oAuthInfos.push(n);
        }
      });
    });
  }
  _doOAuthSignIn(e, s, t, r) {
    const i = t._oAuthCred, o = { portalUrl: t.portalUrl };
    !t.popup && t.preserveUrlHash && window.location.hash && (o.hash = window.location.hash), i.stateUID && (o.uid = i.stateUID);
    const h = { client_id: t.appId, response_type: i.codeVerifier ? "code" : "token", state: JSON.stringify(o), expiration: t.expiration, locale: t.locale, redirect_uri: this._getRedirectURI(t, !!i.codeVerifier) };
    t.forceLogin && (h.force_login = !0), t.forceUserId && t.userId && (h.prepopulatedusername = t.userId), !t.popup && this._doPortalSignIn(e) && (h.redirectToUserOrgUrl = !0), i.codeVerifier && (h.code_challenge = r || i.codeVerifier, h.code_challenge_method = r ? "S256" : "plain");
    const d = t.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", n = d + "?" + $(h);
    if (t.popup) {
      const l = window.open(n, "esriJSAPIOAuth", t.popupWindowFeatures);
      if (l) l.focus(), this._oAuthDfd.oAuthWin_ = l, this._oAuthIntervalId = setInterval(() => {
        if (l.closed) {
          clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
          const c = this._oAuthDfd;
          if (c) {
            const a = new U("identity-manager:user-aborted", "ABORTED");
            c.reject(a);
          }
        }
      }, 500), this._oAuthOnPopupHandle = F(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (c) => {
        c.type === "arcgis:auth:hash" ? this.setOAuthResponseHash(c.detail) : this._setOAuthResponseQueryString(c.detail);
      });
      else {
        const c = new U("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(c);
      }
    } else this._rejectOnPersistedPageShow = !0, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: h, authorizeUrl: d, resourceUrl: e, serverInfo: s, oAuthInfo: t }) : window.location.href = n;
  }
  _getRedirectURI(e, s) {
    const t = window.location.href.replace(/#.*$/, "");
    if (e.popup) return ee(e.popupCallbackUrl);
    if (s) {
      const r = z(t);
      return r.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((i) => {
        delete r.query[i];
      }), me(r.path, r.query);
    }
    return t;
  }
}
ae.prototype.declaredClass = "esri.identity.IdentityManagerBase";
let I = class extends ie.EventedAccessor {
  constructor(u) {
    super(u), this._oAuthCred = null, this.tokenRefreshBuffer = 2, u?._oAuthCred && (this._oAuthCred = u._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], this.creationTime == null && (this.creationTime = Date.now());
  }
  refreshToken() {
    const u = A.findServerInfo(this.server), e = u?.owningSystemUrl, s = !!e && this.scope === "server", t = s && Q(u, A._legacyFed), r = u.webTierAuth, i = r && A.normalizeWebTierAuth, o = L[this.server], h = o?.[this.userId];
    let d, n = this.resources && this.resources[0], l = s ? A.findServerInfo(e) : null, c = { username: this.userId, password: h };
    if (r && !i) return;
    s && !l && A.serverInfos.some((_) => (A._isIdProvider(e, _.server) && (l = _), !!l));
    const a = l ? A.findCredential(l.server, this.userId) : null;
    if (!s || a) {
      if (!t) {
        if (s) d = { serverUrl: n, token: a?.token, ssl: a && a.ssl };
        else if (i) c = null, d = { ssl: this.ssl };
        else {
          if (!h) {
            let _;
            return n && (n = A._sanitizeUrl(n), this._enqueued = 1, _ = A._enqueue(n, u, null, null, this.isAdmin, this), _.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), _;
          }
          this.isAdmin && (d = { isAdmin: !0 });
        }
        return A.generateToken(s ? l : u, s ? null : c, d).then((_) => {
          this.token = _.token, this.expires = _.expires != null ? Number(_.expires) : null, this.creationTime = Date.now(), this.validity = _.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      a?.refreshToken();
    }
  }
  refreshServerTokens() {
    this.scope === "portal" && A.credentials.forEach((u) => {
      const e = A.findServerInfo(u.server), s = e?.owningSystemUrl;
      u !== this && u.userId === this.userId && s && u.scope === "server" && (A._hasSameServerInstance(this.server, s) || A._isIdProvider(s, this.server)) && (Q(e, A._legacyFed) ? (u.token = this.token, u.expires = this.expires, u.creationTime = this.creationTime, u.validity = this.validity, u.emitTokenChange()) : u.refreshToken());
    });
  }
  emitTokenChange(u) {
    clearTimeout(this._refreshTimer);
    const e = this.server ? A.findServerInfo(this.server) : null, s = e?.owningSystemUrl, t = s ? A.findServerInfo(s) : null;
    u === !1 || s && this.scope !== "portal" && (!t?.webTierAuth || A.normalizeWebTierAuth) || this.expires == null && this.validity == null || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const u = A.credentials.indexOf(this);
    u > -1 && A.credentials.splice(u, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const u = ne({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), e = this.resources;
    return e && e.length > 0 && (u.resources = e.slice()), u;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const u = 6e4 * this.tokenRefreshBuffer, e = 2 ** 31 - 1;
    let s = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    s < 0 ? s = 0 : s > e && (s = e), this._refreshTimer = setTimeout(this.refreshToken.bind(this), s > u ? s - u : s);
  }
};
p([f()], I.prototype, "creationTime", void 0), p([f()], I.prototype, "expires", void 0), p([f()], I.prototype, "isAdmin", void 0), p([f()], I.prototype, "oAuthState", void 0), p([f()], I.prototype, "resources", void 0), p([f()], I.prototype, "scope", void 0), p([f()], I.prototype, "server", void 0), p([f()], I.prototype, "ssl", void 0), p([f()], I.prototype, "token", void 0), p([f()], I.prototype, "tokenRefreshBuffer", void 0), p([f()], I.prototype, "userId", void 0), p([f()], I.prototype, "validity", void 0), I = p([M("esri.identity.Credential")], I);
class he extends ae {
}
he.prototype.declaredClass = "esri.identity.IdentityManager";
const Se = new he();
ve(Se);
export {
  Se as default
};
//# sourceMappingURL=IdentityManager-Ci_OGgyH.js.map
