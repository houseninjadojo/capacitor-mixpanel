import Foundation
import Capacitor
import Mixpanel

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(MixpanelPlugin)
public class MixpanelPlugin: CAPPlugin {
    public override func load() {
        let token = getConfigValue("iosToken") as? String ?? "ADD_IN_CAPACITOR_CONFIG_JSON"
        Mixpanel.initialize(token: token)
    }

    @objc func initialize(_ call: CAPPluginCall) {
        call.unimplemented("Not implemented on iOS. Mixpanel is initialized automatically.")
    }

    @objc func track(_ call: CAPPluginCall) {
        let event = call.getString("event") ?? ""
        guard let properties = call.getObject("properties") as! Dictionary<String,String>? else {
            return
        }
        Mixpanel.mainInstance().track(event: event, properties: properties)
        call.resolve()
    }

    @objc func identify(_ call: CAPPluginCall) {
        let distinctId = call.getString("distinctId") ?? ""
        Mixpanel.mainInstance().identify(distinctId: distinctId)
        call.resolve()
    }

    @objc func alias(_ call: CAPPluginCall) {
        let alias = call.getString("alias") ?? ""
        let distinctId = call.getString("distinctId") ?? ""
        Mixpanel.mainInstance().createAlias(alias, distinctId: distinctId)
        call.resolve()
    }

    @objc func reset(_ call: CAPPluginCall) {
        Mixpanel.mainInstance().reset()
        call.resolve()
    }

    @objc func clearSuperProperties(_ call: CAPPluginCall) {
        Mixpanel.mainInstance().clearSuperProperties()
        call.resolve()
    }

    @objc func currentSuperProperties(_ call: CAPPluginCall) {
        let properties = Mixpanel.mainInstance().currentSuperProperties()
        call.resolve([
            "properties": properties
        ])
    }

    @objc func registerSuperProperties(_ call: CAPPluginCall) {
        guard let properties = call.getObject("properties") as! Dictionary<String,String>? else {
            return
        }
        Mixpanel.mainInstance().registerSuperProperties(properties)
        call.resolve()
    }

    @objc func setProfile(_ call: CAPPluginCall) {
        guard let properties = call.getObject("properties") as! Dictionary<String,String>? else {
            return
        }
        Mixpanel.mainInstance().people.set(properties: properties)
        call.resolve()
    }

    @objc func trackCharge(_ call: CAPPluginCall) {
        let amount: Double = call.getDouble("amount")!
        Mixpanel.mainInstance().people.trackCharge(amount: amount)
        call.resolve()
    }
}
