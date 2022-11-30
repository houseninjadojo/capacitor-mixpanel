# @houseninja/capacitor-mixpanel

Capacitor plugin for Mixpanel

## Install

```bash
npm install @houseninja/capacitor-mixpanel
```

Add the following plugin configuration:

```json
{
 …
  "plugins": {
   "Mixpanel": {
      "iosToken": "ios-xxx",
      "androidToken": "android-yyy",
      "trackAutomaticEvents": true, // optional, default: true
      "serverURL": null, // optional, default: null (https://api.mixpanel.com/)
    }
  }
…
}
```

Sync capacitor configuration

```bash
npx cap sync
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`distinctId()`](#distinctid)
* [`track(...)`](#track)
* [`identify(...)`](#identify)
* [`alias(...)`](#alias)
* [`reset()`](#reset)
* [`clearSuperProperties()`](#clearsuperproperties)
* [`currentSuperProperties()`](#currentsuperproperties)
* [`registerSuperProperties(...)`](#registersuperproperties)
* [`setProfile(...)`](#setprofile)
* [`setProfileUnion(...)`](#setprofileunion)
* [`trackCharge(...)`](#trackcharge)
* [`flush()`](#flush)
* [`optInTracking(...)`](#optintracking)
* [`optOutTracking()`](#optouttracking)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { token: string; autotrack?: boolean; optOutByDefault?: boolean; debug?: boolean; }) => Promise<void>
```

| Param         | Type                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ token: string; autotrack?: boolean; optOutByDefault?: boolean; debug?: boolean; }</code> |

--------------------


### distinctId()

```typescript
distinctId() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### track(...)

```typescript
track(options: { event: string; properties: any; }) => Promise<void>
```

| Param         | Type                                             |
| ------------- | ------------------------------------------------ |
| **`options`** | <code>{ event: string; properties: any; }</code> |

--------------------


### identify(...)

```typescript
identify(options: { distinctId: string; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ distinctId: string; }</code> |

--------------------


### alias(...)

```typescript
alias(options: { alias: string; distinctId: string; }) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ alias: string; distinctId: string; }</code> |

--------------------


### reset()

```typescript
reset() => Promise<void>
```

--------------------


### clearSuperProperties()

```typescript
clearSuperProperties() => Promise<void>
```

--------------------


### currentSuperProperties()

```typescript
currentSuperProperties() => Promise<{ properties: any; }>
```

**Returns:** <code>Promise&lt;{ properties: any; }&gt;</code>

--------------------


### registerSuperProperties(...)

```typescript
registerSuperProperties(options: { properties: any; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ properties: any; }</code> |

--------------------


### setProfile(...)

```typescript
setProfile(options: { properties: any; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ properties: any; }</code> |

--------------------


### setProfileUnion(...)

```typescript
setProfileUnion(options: { properties: any; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ properties: any; }</code> |

--------------------


### trackCharge(...)

```typescript
trackCharge(options: { amount: number; properties: any; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ amount: number; properties: any; }</code> |

--------------------


### flush()

```typescript
flush() => Promise<void>
```

--------------------


### optInTracking(...)

```typescript
optInTracking(options: { distinctId?: string; properties?: any; }) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ distinctId?: string; properties?: any; }</code> |

--------------------


### optOutTracking()

```typescript
optOutTracking() => Promise<void>
```

--------------------

</docgen-api>
