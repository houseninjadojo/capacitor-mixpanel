#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(MixpanelPlugin, "Mixpanel",
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(distinctId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(track, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(identify, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(alias, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(reset, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(clearSuperProperties, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(currentSuperProperties, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(registerSuperProperties, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setProfile, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setProfileUnion, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(deleteProfile, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(trackCharge, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(flush, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(optInTracking, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(optOutTracking, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(hasOptedOutTracking, CAPPluginReturnPromise);
)
