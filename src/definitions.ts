/// <reference types="@capacitor/cli" />

export interface MixpanelPlugin {
  initialize(options: {
    token: string;
    autotrack?: boolean;
    optOutByDefault?: boolean;
    debug?: boolean;
  }): Promise<void>;
  distinctId(): Promise<{ value: string}>;
  track(options: { event: string; properties: any }): Promise<void>;
  identify(options: { distinctId: string }): Promise<void>;
  alias(options: { alias: string; distinctId: string }): Promise<void>;
  reset(): Promise<void>;
  clearSuperProperties(): Promise<void>;
  currentSuperProperties(): Promise<{ properties: any }>;
  registerSuperProperties(options: { properties: any }): Promise<void>;
  setProfile(options: { properties: any }): Promise<void>;
  setProfileUnion(options: { properties: any }): Promise<void>;
  deleteProfile(): Promise<void>;
  trackCharge(options: { amount: number; properties: any }): Promise<void>;
  flush(): Promise<void>;
  optInTracking(options: { distinctId?: string, properties?: any }): Promise<void>;
  optOutTracking(): Promise<void>;
}

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    Mixpanel?: {
      /**
       * iOS Mixpanel Token.
       *
       * @required
       * @example "asdf1234asdf1234"
       */
      iosToken?: string;

      /**
       * Android Mixpanel Token.
       *
       * @required
       * @example "asdf1234asdf1234"
       */
      androidToken?: string;

      /**
       * Optional. Whether or not to collect common mobile events. Default is true.
       *
       * @required
       * @default true
       */
      trackAutomaticEvents?: boolean;

      /**
       * Optional. Whether or not Mixpanel can start tracking immediately. Default is false.
       *
       * @required
       * @default false
       */
      optOutTrackingByDefault?: boolean;

      /**
       * Optional. Mixpanel cluster URL or EU server URL. Defaults to US server.
       *
       * @default null
       * @example "https://api-eu.mixpanel.com/"
       */
      serverURL?: boolean;
    };
  }
}
