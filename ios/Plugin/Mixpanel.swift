import Foundation

@objc public class Mixpanel: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
