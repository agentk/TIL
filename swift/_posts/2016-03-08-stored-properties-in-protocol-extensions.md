---
title: Stored Properties in Protocol Extensions
layout: post
tags:
  - swift
  - protocol
  - extension
---

It would be nice not to have to do it this way.

Requires the Objective C runtime function `objc_getAssociatedObject`.

The class that conforms to the protocol must inherit from `NSObject`.

The value that can be stored must be **reference** types.

```swift
import ObjectiveC

private var AssociationKey: UInt8 = 0

class YourStoredObject {
  // Whatever object your are persisting
}

protocol YourProtocol {
  var yourStoredObject: YourStoredObject! { get set }
}

extension YourProtocol {

  func customYourStoredObjectGetter() -> YourStoredObject {
    return yourStoredObject
  }

}

class SomebodyelsesClass {}

extension UILabel: YourProtocol {
  var yourStoredObject: (YourStoredObject)! {
    get {
      return objc_getAssociatedObject(self, &AssociationKey) as? YourStoredObject
    }
    set(newValue) {
      objc_setAssociatedObject(self, &AssociationKey, newValue, objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN)
    }
  }
}

extension UILabel {

  func myExtendedFunc() {
    // Get (and print) your object directly
    print(yourStoredObject)
    // Get your object through a protocol custom getter
    print(customYourStoredObjectGetter())

    // Set your object
    yourStoredObject = YourStoredObject()
  }
}
```

## References

- http://stackoverflow.com/a/31953234/14868
- https://medium.com/@ttikitu/swift-extensions-can-add-stored-properties-92db66bce6cd
