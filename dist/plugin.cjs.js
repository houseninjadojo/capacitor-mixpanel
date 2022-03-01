'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');
var mixpanel = require('mixpanel-browser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var mixpanel__default = /*#__PURE__*/_interopDefaultLegacy(mixpanel);

const Mixpanel = core.registerPlugin('Mixpanel', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MixpanelWeb()),
});

class MixpanelWeb extends core.WebPlugin {
    constructor() {
        super();
        this.superProperties = {};
        window.mixpanel = mixpanel__default["default"];
    }
    async initialize(options) {
        mixpanel__default["default"].init(options.token, { debug: options.debug });
        return Promise.resolve();
    }
    async track(options) {
        mixpanel__default["default"].track(options.event, options.properties);
        return Promise.resolve();
    }
    async identify(options) {
        mixpanel__default["default"].identify(options.distinctId);
        return Promise.resolve();
    }
    async alias(options) {
        mixpanel__default["default"].alias(options.alias, options.distinctId);
        return Promise.resolve();
    }
    async reset() {
        mixpanel__default["default"].reset();
        return Promise.resolve();
    }
    async clearSuperProperties() {
        for (const k of Object.keys(this.superProperties)) {
            mixpanel__default["default"].unregister(k);
        }
        this.superProperties = {};
        return Promise.resolve();
    }
    async currentSuperProperties() {
        return Promise.resolve({
            properties: this.superProperties,
        });
    }
    async registerSuperProperties(options) {
        mixpanel__default["default"].register(options.properties);
        return Promise.resolve();
    }
    async setProfile(options) {
        mixpanel__default["default"].people.set(options.properties);
        return Promise.resolve();
    }
    async trackCharge(options) {
        mixpanel__default["default"].people.track_charge(options.amount, options.properties);
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MixpanelWeb: MixpanelWeb
});

exports.Mixpanel = Mixpanel;
//# sourceMappingURL=plugin.cjs.js.map
