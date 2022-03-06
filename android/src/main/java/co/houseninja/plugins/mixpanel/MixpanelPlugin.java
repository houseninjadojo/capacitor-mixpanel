package co.houseninja.plugins.mixpanel;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONObject;

import com.mixpanel.android.mpmetrics.MixpanelAPI;

@CapacitorPlugin(name = "Mixpanel")
public class MixpanelPlugin extends Plugin {
    private MixpanelAPI mixpanel;

    @Override
    public void load() {
        String token = getConfig().getString("androidToken");
        mixpanel = MixpanelAPI.getInstance(getContext(), token);

        // load parent
        super.load();
    }

    @PluginMethod
    public void initialize(PluginCall call) {
        call.unimplemented("Not implemented on Android. Mixpanel is initialized automatically.");
    }

    @PluginMethod
    public void track(PluginCall call) {
        String event = call.getString("event");
        JSObject properties = call.getObject("properties", new JSObject());
        mixpanel.track(event, properties);
        call.resolve();
    }

    @PluginMethod
    public void identify(PluginCall call) {
        String distinctId = call.getString("distinctId");
        mixpanel.identify(distinctId);
        mixpanel.getPeople().identify(distinctId);
        call.resolve();
    }

    @PluginMethod
    public void alias(PluginCall call) {
        String alias = call.getString("alias");
        String distinctId = call.getString("distinctId");
        mixpanel.alias(alias, distinctId);
        call.resolve();
    }

    @PluginMethod
    public void reset(PluginCall call) {
        mixpanel.reset();
        call.resolve();
    }

    @PluginMethod
    public void clearSuperProperties(PluginCall call) {
        mixpanel.clearSuperProperties();
        call.resolve();
    }

    @PluginMethod
    public void currentSuperProperties(PluginCall call) {
        JSONObject properties = mixpanel.getSuperProperties();
        JSObject ret = new JSObject();
        ret.put("properties", properties);
        call.resolve(ret);
    }

    @PluginMethod
    public void registerSuperProperties(PluginCall call) {
        JSObject properties = call.getObject("properties");
        mixpanel.registerSuperProperties(properties);
        call.resolve();
    }

    @PluginMethod
    public void setProfile(PluginCall call) {
        JSObject properties = call.getObject("properties");
        mixpanel.getPeople().set(properties);
        call.resolve();
    }

    @PluginMethod
    public void trackCharge(PluginCall call) {
        Double amount = call.getDouble("amount");
        JSObject properties = call.getObject("properties");
        mixpanel.getPeople().trackCharge(amount, properties);
        call.resolve();
    }
}
