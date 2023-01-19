import { registerPlugin } from '@capacitor/core';

import type { MixpanelPlugin } from './definitions';

const Mixpanel = registerPlugin<MixpanelPlugin>('Mixpanel', {
  web: () => import('./web').then((m) => new m.MixpanelWeb()),
});

export * from './definitions';
export { Mixpanel };
