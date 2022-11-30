import { WebPlugin } from '@capacitor/core';
import mixpanel from 'mixpanel-browser';
export class MixpanelWeb extends WebPlugin {
    constructor() {
        super();
        this.superProperties = {};
        window.mixpanel = mixpanel;
    }
    async initialize(options) {
        var _a, _b, _c;
        mixpanel.init(options.token, {
            autotrack: (_a = options.autotrack) !== null && _a !== void 0 ? _a : true,
            opt_out_tracking_by_default: (_b = options.optOutByDefault) !== null && _b !== void 0 ? _b : false,
            debug: (_c = options.debug) !== null && _c !== void 0 ? _c : false,
        });
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
    async deleteProfile() {
        mixpanel.people.delete_user();
    }
    async trackCharge(options) {
        mixpanel.people.track_charge(options.amount, options.properties);
    }
    async flush() {
        // NOT IMPLEMENTED FOR WEB
    }
    async optInTracking(options) {
        mixpanel.opt_in_tracking(options.properties);
    }
    async optOutTracking() {
        mixpanel.opt_out_tracking();
    }
}
//# sourceMappingURL=web.js.map