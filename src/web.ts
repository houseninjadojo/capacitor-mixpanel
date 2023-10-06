import { WebPlugin } from '@capacitor/core';
import mixpanel from 'mixpanel-browser';

import type { MixpanelPlugin } from './definitions';

declare global {
  interface Window {
    mixpanel: any;
  }
}

export class MixpanelWeb extends WebPlugin implements MixpanelPlugin {
  private superProperties = {};

  constructor() {
    super();
    window.mixpanel = mixpanel;
  }

  async initialize(options: {
    token: string;
    autotrack?: boolean;
    optOutByDefault?: boolean;
    debug?: boolean;
    ipCollection?: boolean;
    serverURL?: string;
  }): Promise<void> {
    mixpanel.init(options.token, {
      autotrack: options.autotrack ?? true,
      opt_out_tracking_by_default: options.optOutByDefault ?? false,
      debug: options.debug ?? false,
      ip: options.ipCollection ?? true,
      api_host: options.serverURL ?? undefined,
    });
    return Promise.resolve();
  }

  async distinctId(): Promise<{ value: string }> {
    return Promise.resolve({ value: mixpanel.get_distinct_id() });
  }

  async track(options: { event: string; properties: any }): Promise<void> {
    mixpanel.track(options.event, options.properties);
    return Promise.resolve();
  }

  async identify(options: { distinctId: string }): Promise<void> {
    mixpanel.identify(options.distinctId);
    return Promise.resolve();
  }

  async alias(options: { alias: string; distinctId: string }): Promise<void> {
    mixpanel.alias(options.alias, options.distinctId);
    return Promise.resolve();
  }

  async reset(): Promise<void> {
    mixpanel.reset();
    return Promise.resolve();
  }

  async clearSuperProperties(): Promise<void> {
    for (const k of Object.keys(this.superProperties)) {
      mixpanel.unregister(k);
    }
    this.superProperties = {};
    return Promise.resolve();
  }

  async currentSuperProperties(): Promise<{ properties: any }> {
    return Promise.resolve({
      properties: this.superProperties,
    });
  }

  async registerSuperProperties(options: { properties: any }): Promise<void> {
    mixpanel.register(options.properties);
    return Promise.resolve();
  }

  async setProfile(options: { properties: any }): Promise<void> {
    mixpanel.people.set(options.properties);
    return Promise.resolve();
  }

  async setProfileUnion(options: { properties: any }): Promise<void> {
    mixpanel.people.union(options.properties);
    return Promise.resolve();
  }

  async deleteProfile(): Promise<void> {
    mixpanel.people.delete_user();
  }

  async trackCharge(options: { amount: number; properties: any }): Promise<void> {
    mixpanel.people.track_charge(options.amount, options.properties);
  }

  async flush(): Promise<void> {
    // NOT IMPLEMENTED FOR WEB
  }

  async optInTracking(options: { distinctId?: string; properties?: any }): Promise<void> {
    mixpanel.opt_in_tracking(options.properties);
  }

  async optOutTracking(): Promise<void> {
    mixpanel.opt_out_tracking();
  }

  async hasOptedOutTracking(): Promise<{ value: boolean }> {
    return { value: mixpanel.has_opted_out_tracking() };
  }
}
