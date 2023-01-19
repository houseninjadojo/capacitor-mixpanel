import Foundation
import Capacitor
import Mixpanel

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(MixpanelPlugin)
public class MixpanelPlugin: CAPPlugin {
    override public func load() {
        let token = getConfig().getString("token") ?? "MIXPANEL_TOKEN_REQUIRED"
        let serverURL = getConfig().getString("serverUrl", "https://api.mixpanel.com")
        let optOutTrackingByDefault = getConfig().getBoolean("optOutTrackingByDefault", false)
        let trackAutomaticEvents = getConfig().getBoolean("trackAutomaticEvents", true)

        Mixpanel.initialize(
            token: token,
            trackAutomaticEvents: trackAutomaticEvents,
            optOutTrackingByDefault: optOutTrackingByDefault,
            serverURL: serverURL
        )
    }

    @objc func initialize(_ call: CAPPluginCall) {
        call.unimplemented("Not implemented on iOS. Mixpanel is initialized automatically.")
    }

    @objc func distinctId(_ call: CAPPluginCall) {
        let distinctId = Mixpanel.mainInstance().distinctId
        call.resolve([ "value": distinctId ])
    }

    @objc func track(_ call: CAPPluginCall) {
        let event = call.getString("event") ?? ""
        let props = call.getObject("properties") as? Properties
        Mixpanel.mainInstance().track(event: event, properties: props)
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
        guard let properties = call.getObject("properties") as? Properties else {
            return
        }
        Mixpanel.mainInstance().registerSuperProperties(properties)
        call.resolve()
    }

    @objc func setProfile(_ call: CAPPluginCall) {
        guard let properties = call.getObject("properties") as? Properties else {
            return
        }
        Mixpanel.mainInstance().people.set(properties: properties)
        call.resolve()
    }

    @objc func setProfileUnion(_ call: CAPPluginCall) {
        guard let properties = call.getObject("properties") as? Properties else {
            return
        }
        Mixpanel.mainInstance().people.union(properties: properties)
        call.resolve()
    }

    @objc func deleteProfile(_ call: CAPPluginCall) {
        Mixpanel.mainInstance().people.deleteUser()
        call.resolve()
    }

    @objc func trackCharge(_ call: CAPPluginCall) {
        let amount: Double = call.getDouble("amount")!
        Mixpanel.mainInstance().people.trackCharge(amount: amount)
        call.resolve()
    }

    @objc func flush(_ call: CAPPluginCall) {
        Mixpanel.mainInstance().flush(completion: call.resolve)
    }

    @objc func optInTracking(_ call: CAPPluginCall) {
        let distinctId: String = call.getString("distinctId")!
        guard let properties = call.getObject("properties") as? Properties else {
            return
        }
        Mixpanel.mainInstance().optInTracking(distinctId: distinctId, properties: properties)
        call.resolve()
    }

    @objc func optOutTracking(_ call: CAPPluginCall) {
        Mixpanel.mainInstance().optOutTracking()
        call.resolve()
    }
}
