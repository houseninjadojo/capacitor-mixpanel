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
    super({
      name: 'Mixpanel',
      platforms: ['web'],
    });
    window.mixpanel = mixpanel;
  }

  async init(options: { token: string, debug: boolean }): Promise<void> {
    mixpanel.init(options.token, { debug: options.debug });
    return Promise.resolve();
  }

  async track(options: { event: string, properties: any }): Promise<void> {
    mixpanel.track(options.event, options.properties);
    return Promise.resolve();
  }

  async identify(options: { distinctId: string }): Promise<void> {
    mixpanel.identify(options.distinctId);
    return Promise.resolve();
  }

  async alias(options: { alias: string, distinctId: string }): Promise<void> {
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

  async trackCharge(options: { amount: number, properties: any }): Promise<void> {
    mixpanel.people.track_charge(options.amount, options.properties);
  }
}
