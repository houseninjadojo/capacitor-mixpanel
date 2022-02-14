import { WebPlugin } from '@capacitor/core';
import mixpanel from 'mixpanel-browser';
export class MixpanelWeb extends WebPlugin {
    constructor() {
        super({
            name: 'Mixpanel',
            platforms: ['web'],
        });
        this.superProperties = {};
        window.mixpanel = mixpanel;
    }
    async init(options) {
        mixpanel.init(options.token, { debug: options.debug });
        return Promise.resolve();
    }
    async track(options) {
        mixpanel.track(options.event, options.properties);
        return Promise.resolve();
    }
    async identify(options) {
        mixpanel.identify(options.distinctId);
        return Promise.resolve();
    }
    async alias(options) {
        mixpanel.alias(options.alias, options.distinctId);
        return Promise.resolve();
    }
    async reset() {
        mixpanel.reset();
        return Promise.resolve();
    }
    async clearSuperProperties() {
        for (const k of Object.keys(this.superProperties)) {
            mixpanel.unregister(k);
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
        mixpanel.register(options.properties);
        return Promise.resolve();
    }
}
//# sourceMappingURL=web.js.map