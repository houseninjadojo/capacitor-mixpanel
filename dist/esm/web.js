import { WebPlugin } from '@capacitor/core';
import mixpanel from 'mixpanel-browser';
export class MixpanelWeb extends WebPlugin {
    constructor() {
        super({
            name: 'Mixpanel',
            platforms: ['web'],
        });
        this.mixpanel = mixpanel;
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
//# sourceMappingURL=web.js.map