import { WebPlugin } from '@capacitor/core';
import mixpanel from 'mixpanel-browser';
export class MixpanelWeb extends WebPlugin {
    constructor() {
        super();
        this.superProperties = {};
        window.mixpanel = mixpanel;
    }
    async initialize(options) {
        mixpanel.init(options.token, options.config);
        return Promise.resolve();
    }
    async distinctId() {
        return Promise.resolve({ value: mixpanel.get_distinct_id() });
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
    async setProfile(options) {
        mixpanel.people.set(options.properties);
        return Promise.resolve();
    }
    async setProfileUnion(options) {
        mixpanel.people.union(options.properties);
        return Promise.resolve();
    }
    async trackCharge(options) {
        mixpanel.people.track_charge(options.amount, options.properties);
    }
    async flush() {
        // NOT IMPLEMENTED FOR WEB
    }
}
//# sourceMappingURL=web.js.map