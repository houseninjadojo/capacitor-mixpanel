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

* [`init(...)`](#init)
* [`track(...)`](#track)
* [`identify(...)`](#identify)
* [`alias(...)`](#alias)
* [`reset()`](#reset)
* [`clearSuperProperties()`](#clearsuperproperties)
* [`currentSuperProperties()`](#currentsuperproperties)
* [`registerSuperProperties(...)`](#registersuperproperties)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(options: { token: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ token: string; }</code> |

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

</docgen-api>
