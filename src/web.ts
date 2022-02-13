import { WebPlugin } from '@capacitor/core';

import type { MixpanelPlugin } from './definitions';

export class MixpanelWeb extends WebPlugin implements MixpanelPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
