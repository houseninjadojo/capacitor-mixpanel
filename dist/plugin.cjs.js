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
        super({
            name: 'Mixpanel',
            platforms: ['web'],
        });
        this.mixpanel = mixpanel__default["default"];
        this.superProperties = {};
    }
    async init(options) {
        this.mixpanel.init(options.token, { debug: true });
        return Promise.resolve();
    }
    async track(options) {
        this.mixpanel.track(options.event, options.properties);
        return Promise.resolve();
    }
    async identify(options) {
        this.mixpanel.identify(options.distinctId);
        return Promise.resolve();
    }
    async alias(options) {
        this.mixpanel.alias(options.alias, options.distinctId);
        return Promise.resolve();
    }
    async reset() {
        this.mixpanel.reset();
        return Promise.resolve();
    }
    async clearSuperProperties() {
        for (const k of Object.keys(this.superProperties)) {
            this.mixpanel.unregister(k);
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
        this.mixpanel.register(options.properties);
        return Promise.resolve();
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MixpanelWeb: MixpanelWeb
});

exports.Mixpanel = Mixpanel;
//# sourceMappingURL=plugin.cjs.js.map
