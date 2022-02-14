import { registerPlugin } from '@capacitor/core';
const Mixpanel = registerPlugin('Mixpanel', {
    web: () => import('./web').then(m => new m.MixpanelWeb()),
});
export * from './definitions';
export { Mixpanel };
//# sourceMappingURL=index.js.map