package co.houseninja.plugins.mixpanel;

import android.util.Log;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.mixpanel.android.mpmetrics.MixpanelAPI;
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONObject;

@CapacitorPlugin(name = "Mixpanel")
public class MixpanelPlugin extends Plugin {

    private MixpanelAPI mixpanel;

    @Override
    public void load() {
        String token = getConfig().getString("androidToken");
        String serverUrl = getConfig().getString("serverUrl");

        mixpanel = MixpanelAPI.getInstance(getContext(), token);

        if (serverUrl != null) {
            mixpanel.setServerURL(serverUrl);
        }

        // load parent
        super.load();
    }

    @PluginMethod
    public void initialize(PluginCall call) {
        call.unimplemented("Not implemented on Android. Mixpanel is initialized automatically.");
    }

    @PluginMethod
    public void distinctId(PluginCall call) {
        String distinctId = mixpanel.getDistinctId();
        JSObject ret = new JSObject();
        ret.put("value", distinctId);
        call.resolve(ret);
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
    public void setProfileUnion(PluginCall call) {
        JSObject properties = call.getObject("properties");
        Iterator<String> keys = properties.keys();
        while (keys.hasNext()) {
            String key = keys.next();
            JSONArray values = properties.optJSONArray(key);
            mixpanel.getPeople().union(key, values);
        }
        call.resolve();
    }

    @PluginMethod
    public void trackCharge(PluginCall call) {
        Double amount = call.getDouble("amount");
        JSObject properties = call.getObject("properties");
        mixpanel.getPeople().trackCharge(amount, properties);
        call.resolve();
    }

    @PluginMethod
    public void flush(PluginCall call) {
        mixpanel.flush();
        call.resolve();
    }
}
