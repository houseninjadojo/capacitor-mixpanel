var capacitorMixpanel = (function (exports, core, mixpanel) {
    'use strict';

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
            this.superProperties = {};
            window.mixpanel = mixpanel__default["default"];
        }
        async init(options) {
            mixpanel__default["default"].init(options.token, { debug: true });
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
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MixpanelWeb: MixpanelWeb
    });

    exports.Mixpanel = Mixpanel;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports, mixpanel);
//# sourceMappingURL=plugin.js.map
