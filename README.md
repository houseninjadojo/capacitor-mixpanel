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
      "androidToken": "android-yyy"
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
* [`track(...)`](#track)
* [`identify(...)`](#identify)
* [`alias(...)`](#alias)
* [`reset()`](#reset)
* [`clearSuperProperties()`](#clearsuperproperties)
* [`currentSuperProperties()`](#currentsuperproperties)
* [`registerSuperProperties(...)`](#registersuperproperties)
* [`setProfile(...)`](#setprofile)
* [`trackCharge(...)`](#trackcharge)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { token: string; debug: boolean; }) => Promise<void>
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code>{ token: string; debug: boolean; }</code> |

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


### trackCharge(...)

```typescript
trackCharge(options: { amount: number; properties: any; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ amount: number; properties: any; }</code> |

--------------------

</docgen-api>
