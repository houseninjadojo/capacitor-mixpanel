import { WebPlugin } from '@capacitor/core';
import type { MixpanelPlugin } from './definitions';
export declare class MixpanelWeb extends WebPlugin implements MixpanelPlugin {
    private mixpanel;
    private superProperties;
    constructor();
    init(options: {
        token: string;
    }): Promise<void>;
    track(options: {
        event: string;
        properties: any;
    }): Promise<void>;
    identify(options: {
        distinctId: string;
    }): Promise<void>;
    alias(options: {
        alias: string;
        distinctId: string;
    }): Promise<void>;
    reset(): Promise<void>;
    clearSuperProperties(): Promise<void>;
    currentSuperProperties(): Promise<{
        properties: any;
    }>;
    registerSuperProperties(options: {
        properties: any;
    }): Promise<void>;
}
