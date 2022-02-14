import { WebPlugin } from '@capacitor/core';
import mixpanel from 'mixpanel-browser';

import type { MixpanelPlugin } from './definitions';

export class MixpanelWeb extends WebPlugin implements MixpanelPlugin {
  private mixpanel = mixpanel;
  private superProperties = {};

  constructor() {
    super({
      name: 'Mixpanel',
      platforms: ['web'],
    });
  }

  async init(options: { token: string }): Promise<void> {
    this.mixpanel.init(options.token, { debug: true });
    return Promise.resolve();
  }

  async track(options: { event: string, properties: any }): Promise<void> {
    this.mixpanel.track(options.event, options.properties);
    return Promise.resolve();
  }

  async identify(options: { distinctId: string }): Promise<void> {
    this.mixpanel.identify(options.distinctId);
    return Promise.resolve();
  }

  async alias(options: { alias: string, distinctId: string }): Promise<void> {
    this.mixpanel.alias(options.alias, options.distinctId);
    return Promise.resolve();
  }

  async reset(): Promise<void> {
    this.mixpanel.reset();
    return Promise.resolve();
  }

  async clearSuperProperties(): Promise<void> {
    for (const k of Object.keys(this.superProperties)) {
      this.mixpanel.unregister(k);
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
    this.mixpanel.register(options.properties);
    return Promise.resolve();
  }
}
