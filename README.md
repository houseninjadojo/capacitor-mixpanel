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
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(option: { token: string; config?: Partial<Config>; }) => Promise<void>
```

| Param        | Type                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| **`option`** | <code>{ token: string; config?: <a href="#partial">Partial</a>&lt;<a href="#config">Config</a>&gt;; }</code> |

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


### Interfaces


#### Config

| Prop                                    | Type                                                                 |
| --------------------------------------- | -------------------------------------------------------------------- |
| **`api_host`**                          | <code>string</code>                                                  |
| **`api_method`**                        | <code>string</code>                                                  |
| **`api_transport`**                     | <code>string</code>                                                  |
| **`app_host`**                          | <code>string</code>                                                  |
| **`autotrack`**                         | <code>boolean</code>                                                 |
| **`cdn`**                               | <code>string</code>                                                  |
| **`cookie_domain`**                     | <code>string</code>                                                  |
| **`cross_site_cookie`**                 | <code>boolean</code>                                                 |
| **`cross_subdomain_cookie`**            | <code>boolean</code>                                                 |
| **`persistence`**                       | <code><a href="#persistence">Persistence</a></code>                  |
| **`persistence_name`**                  | <code>string</code>                                                  |
| **`cookie_name`**                       | <code>string</code>                                                  |
| **`loaded`**                            | <code>(mixpanel: <a href="#mixpanel">Mixpanel</a>) =&gt; void</code> |
| **`store_google`**                      | <code>boolean</code>                                                 |
| **`save_referrer`**                     | <code>boolean</code>                                                 |
| **`test`**                              | <code>boolean</code>                                                 |
| **`verbose`**                           | <code>boolean</code>                                                 |
| **`img`**                               | <code>boolean</code>                                                 |
| **`debug`**                             | <code>boolean</code>                                                 |
| **`track_links_timeout`**               | <code>number</code>                                                  |
| **`cookie_expiration`**                 | <code>number</code>                                                  |
| **`upgrade`**                           | <code>boolean</code>                                                 |
| **`disable_persistence`**               | <code>boolean</code>                                                 |
| **`disable_cookie`**                    | <code>boolean</code>                                                 |
| **`disable_notifications`**             | <code>boolean</code>                                                 |
| **`secure_cookie`**                     | <code>boolean</code>                                                 |
| **`ip`**                                | <code>boolean</code>                                                 |
| **`property_blacklist`**                | <code>string[]</code>                                                |
| **`xhr_headers`**                       | <code><a href="#xhrheadersdef">XhrHeadersDef</a></code>              |
| **`opt_out_tracking_by_default`**       | <code>boolean</code>                                                 |
| **`opt_out_persistence_by_default`**    | <code>boolean</code>                                                 |
| **`opt_out_tracking_persistence_type`** | <code><a href="#persistence">Persistence</a></code>                  |
| **`opt_out_tracking_cookie_prefix`**    | <code>string</code>                                                  |
| **`inapp_protocol`**                    | <code>string</code>                                                  |
| **`inapp_link_new_window`**             | <code>boolean</code>                                                 |
| **`ignore_dnt`**                        | <code>boolean</code>                                                 |
| **`batch_requests`**                    | <code>boolean</code>                                                 |
| **`batch_size`**                        | <code>number</code>                                                  |
| **`batch_flush_interval_ms`**           | <code>number</code>                                                  |
| **`batch_request_timeout_ms`**          | <code>number</code>                                                  |


#### Mixpanel

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`people`** | <code><a href="#people">People</a></code> |

| Method                        | Signature                                                                                                                                                                                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **add_group**                 | (group_key: string, group_id: string, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                                                                                       |
| **alias**                     | (alias: string, original?: string \| undefined) =&gt; void                                                                                                                                                                                                       |
| **clear_opt_in_out_tracking** | (options?: <a href="#partial">Partial</a>&lt;<a href="#clearoptoutinoutoptions">ClearOptOutInOutOptions</a>&gt; \| undefined) =&gt; void                                                                                                                         |
| **disable**                   | (events?: string[] \| undefined) =&gt; void                                                                                                                                                                                                                      |
| **get_config**                | (prop_name?: string \| undefined) =&gt; any                                                                                                                                                                                                                      |
| **get_distinct_id**           | () =&gt; any                                                                                                                                                                                                                                                     |
| **get_group**                 | (group_key: string, group_id: string) =&gt; <a href="#group">Group</a>                                                                                                                                                                                           |
| **get_property**              | (property_name: string) =&gt; any                                                                                                                                                                                                                                |
| **has_opted_in_tracking**     | (options?: <a href="#partial">Partial</a>&lt;<a href="#hasoptedinoutoptions">HasOptedInOutOptions</a>&gt; \| undefined) =&gt; boolean                                                                                                                            |
| **has_opted_out_tracking**    | (options?: <a href="#partial">Partial</a>&lt;<a href="#hasoptedinoutoptions">HasOptedInOutOptions</a>&gt; \| undefined) =&gt; boolean                                                                                                                            |
| **identify**                  | (unique_id?: string \| undefined) =&gt; any                                                                                                                                                                                                                      |
| **init**                      | (token: string, config: <a href="#partial">Partial</a>&lt;<a href="#config">Config</a>&gt;, name: string) =&gt; <a href="#mixpanel">Mixpanel</a>                                                                                                                 |
| **opt_in_tracking**           | (options?: <a href="#partial">Partial</a>&lt;<a href="#intrackingoptions">InTrackingOptions</a>&gt; \| undefined) =&gt; void                                                                                                                                     |
| **opt_out_tracking**          | (options?: <a href="#partial">Partial</a>&lt;<a href="#outtrackingoptions">OutTrackingOptions</a>&gt; \| undefined) =&gt; void                                                                                                                                   |
| **push**                      | (item: <a href="#pushitem">PushItem</a>) =&gt; void                                                                                                                                                                                                              |
| **register**                  | (props: <a href="#dict">Dict</a>, days?: number \| undefined) =&gt; void                                                                                                                                                                                         |
| **register_once**             | (props: <a href="#dict">Dict</a>, default_value?: any, days?: number \| undefined) =&gt; void                                                                                                                                                                    |
| **remove_group**              | (group_key: string, group_ids: string \| string[] \| number \| number[], callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                                                    |
| **reset**                     | () =&gt; void                                                                                                                                                                                                                                                    |
| **set_config**                | (config: <a href="#partial">Partial</a>&lt;<a href="#config">Config</a>&gt;) =&gt; void                                                                                                                                                                          |
| **set_group**                 | (group_key: string, group_ids: string \| string[] \| number \| number[], callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                                                    |
| **time_event**                | (event_name: string) =&gt; void                                                                                                                                                                                                                                  |
| **track**                     | (event_name: string, properties?: <a href="#dict">Dict</a> \| undefined, optionsOrCallback?: <a href="#callback">Callback</a> \| <a href="#requestoptions">RequestOptions</a> \| undefined, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void |
| **track_forms**               | (query: <a href="#query">Query</a>, event_name: string, properties?: <a href="#dict">Dict</a> \| (() =&gt; void) \| undefined) =&gt; void                                                                                                                        |
| **track_links**               | (query: <a href="#query">Query</a>, event_name: string, properties?: <a href="#dict">Dict</a> \| (() =&gt; void) \| undefined) =&gt; void                                                                                                                        |
| **track_with_groups**         | (event_name: string, properties: <a href="#dict">Dict</a>, groups: <a href="#dict">Dict</a>, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                                |
| **unregister**                | (property: string) =&gt; void                                                                                                                                                                                                                                    |


#### ClearOptOutInOutOptions

| Prop                         | Type                 |
| ---------------------------- | -------------------- |
| **`cookie_expiration`**      | <code>number</code>  |
| **`cross_subdomain_cookie`** | <code>boolean</code> |
| **`secure_cookie`**          | <code>boolean</code> |


#### Group

| Method       | Signature                                                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **remove**   | (list_name: string, value: string, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; <a href="#group">Group</a>                                                                                                |
| **set**      | &lt;Prop extends string \| <a href="#dict">Dict</a>&gt;(prop: Prop, to?: (Prop extends string ? string : undefined) \| undefined, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; <a href="#group">Group</a> |
| **set_once** | &lt;Prop extends string \| <a href="#dict">Dict</a>&gt;(prop: Prop, to?: (Prop extends string ? string : undefined) \| undefined, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; <a href="#group">Group</a> |
| **union**    | (list_name: string, values: <a href="#array">Array</a>&lt;string \| number&gt;, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; <a href="#group">Group</a>                                                   |
| **unset**    | (prop: string, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                                                                          |


#### Dict


#### Array

| Prop         | Type                | Description                                                                                            |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------ |
| **`length`** | <code>number</code> | Gets or sets the length of the array. This is a number one higher than the highest index in the array. |

| Method             | Signature                                                                                                                     | Description                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**       | () =&gt; string                                                                                                               | Returns a string representation of an array.                                                                                                                                                                                                |
| **toLocaleString** | () =&gt; string                                                                                                               | Returns a string representation of an array. The elements are converted to string using their toLocalString methods.                                                                                                                        |
| **pop**            | () =&gt; T \| undefined                                                                                                       | Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.                                                                                                          |
| **push**           | (...items: T[]) =&gt; number                                                                                                  | Appends new elements to the end of an array, and returns the new length of the array.                                                                                                                                                       |
| **concat**         | (...items: <a href="#concatarray">ConcatArray</a>&lt;T&gt;[]) =&gt; T[]                                                       | Combines two or more arrays. This method returns a new array without modifying any existing arrays.                                                                                                                                         |
| **concat**         | (...items: (T \| <a href="#concatarray">ConcatArray</a>&lt;T&gt;)[]) =&gt; T[]                                                | Combines two or more arrays. This method returns a new array without modifying any existing arrays.                                                                                                                                         |
| **join**           | (separator?: string \| undefined) =&gt; string                                                                                | Adds all the elements of an array into a string, separated by the specified separator string.                                                                                                                                               |
| **reverse**        | () =&gt; T[]                                                                                                                  | Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.                                                                                                                        |
| **shift**          | () =&gt; T \| undefined                                                                                                       | Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.                                                                                                         |
| **slice**          | (start?: number \| undefined, end?: number \| undefined) =&gt; T[]                                                            | Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.                           |
| **sort**           | (compareFn?: ((a: T, b: T) =&gt; number) \| undefined) =&gt; this                                                             | Sorts an array in place. This method mutates the array and returns a reference to the same array.                                                                                                                                           |
| **splice**         | (start: number, deleteCount?: number \| undefined) =&gt; T[]                                                                  | Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.                                                                                                                      |
| **splice**         | (start: number, deleteCount: number, ...items: T[]) =&gt; T[]                                                                 | Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.                                                                                                                      |
| **unshift**        | (...items: T[]) =&gt; number                                                                                                  | Inserts new elements at the start of an array, and returns the new length of the array.                                                                                                                                                     |
| **indexOf**        | (searchElement: T, fromIndex?: number \| undefined) =&gt; number                                                              | Returns the index of the first occurrence of a value in an array, or -1 if it is not present.                                                                                                                                               |
| **lastIndexOf**    | (searchElement: T, fromIndex?: number \| undefined) =&gt; number                                                              | Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.                                                                                                                                      |
| **every**          | &lt;S extends T&gt;(predicate: (value: T, index: number, array: T[]) =&gt; value is S, thisArg?: any) =&gt; this is S[]       | Determines whether all the members of an array satisfy the specified test.                                                                                                                                                                  |
| **every**          | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; boolean                                 | Determines whether all the members of an array satisfy the specified test.                                                                                                                                                                  |
| **some**           | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; boolean                                 | Determines whether the specified callback function returns true for any element of an array.                                                                                                                                                |
| **forEach**        | (callbackfn: (value: T, index: number, array: T[]) =&gt; void, thisArg?: any) =&gt; void                                      | Performs the specified action for each element in an array.                                                                                                                                                                                 |
| **map**            | &lt;U&gt;(callbackfn: (value: T, index: number, array: T[]) =&gt; U, thisArg?: any) =&gt; U[]                                 | Calls a defined callback function on each element of an array, and returns an array that contains the results.                                                                                                                              |
| **filter**         | &lt;S extends T&gt;(predicate: (value: T, index: number, array: T[]) =&gt; value is S, thisArg?: any) =&gt; S[]               | Returns the elements of an array that meet the condition specified in a callback function.                                                                                                                                                  |
| **filter**         | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; T[]                                     | Returns the elements of an array that meet the condition specified in a callback function.                                                                                                                                                  |
| **reduce**         | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T) =&gt; T                           | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduce**         | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T, initialValue: T) =&gt; T          |                                                                                                                                                                                                                                             |
| **reduce**         | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) =&gt; U, initialValue: U) =&gt; U | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduceRight**    | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T) =&gt; T                           | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |
| **reduceRight**    | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T, initialValue: T) =&gt; T          |                                                                                                                                                                                                                                             |
| **reduceRight**    | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) =&gt; U, initialValue: U) =&gt; U | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |


#### ConcatArray

| Prop         | Type                |
| ------------ | ------------------- |
| **`length`** | <code>number</code> |

| Method    | Signature                                                          |
| --------- | ------------------------------------------------------------------ |
| **join**  | (separator?: string \| undefined) =&gt; string                     |
| **slice** | (start?: number \| undefined, end?: number \| undefined) =&gt; T[] |


#### HasOptedInOutOptions

| Prop                   | Type                                                |
| ---------------------- | --------------------------------------------------- |
| **`persistence_type`** | <code><a href="#persistence">Persistence</a></code> |
| **`cookie_prefix`**    | <code>string</code>                                 |


#### InTrackingOptions

| Prop                         | Type                                  |
| ---------------------------- | ------------------------------------- |
| **`track`**                  | <code>() =&gt; void</code>            |
| **`track_event_name`**       | <code>string</code>                   |
| **`track_event_properties`** | <code><a href="#dict">Dict</a></code> |


#### OutTrackingOptions

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`delete_user`** | <code>boolean</code> |


#### RequestOptions

| Prop                   | Type                               |
| ---------------------- | ---------------------------------- |
| **`transport`**        | <code>'xhr' \| 'sendBeacon'</code> |
| **`send_immediately`** | <code>boolean</code>               |


#### People

| Method            | Signature                                                                                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **set**           | (prop: string, to: any, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                            |
| **set**           | (prop: <a href="#dict">Dict</a>, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                   |
| **set_once**      | (prop: string, to: any, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                            |
| **set_once**      | (prop: <a href="#dict">Dict</a>, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                   |
| **unset**         | (prop: string[] \| string, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                         |
| **increment**     | (prop: string \| <a href="#dict">Dict</a>, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                         |
| **increment**     | (prop: string, by: number, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                         |
| **remove**        | (prop: string, value: any, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                         |
| **remove**        | (prop: <a href="#dict">Dict</a>, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                   |
| **append**        | (prop: string, value: any, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                         |
| **append**        | (prop: <a href="#dict">Dict</a>, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                   |
| **union**         | (prop: string, value: any, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                         |
| **union**         | (prop: <a href="#dict">Dict</a>, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                   |
| **track_charge**  | (amount: number, propertiesOrCallback?: <a href="#dict">Dict</a> \| <a href="#callback">Callback</a> \| undefined, callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void |
| **clear_charges** | (callback?: <a href="#callback">Callback</a> \| undefined) =&gt; void                                                                                                                   |
| **delete_user**   | () =&gt; void                                                                                                                                                                           |


#### XhrHeadersDef


### Type Aliases


#### Partial

Make all properties in T optional

<code>{ [P in keyof T]?: T[P]; }</code>


#### Persistence

<code>'cookie' | 'localStorage'</code>


#### Callback

<code>(response: <a href="#response">Response</a>): void</code>


#### Response

<code><a href="#verboseresponse">VerboseResponse</a> | <a href="#normalresponse">NormalResponse</a></code>


#### VerboseResponse

<code>{ status: 1; error: null; } | { status: 0; error: string; }</code>


#### NormalResponse

<code>1 | 0</code>


#### PushItem

<code><a href="#array">Array</a>&lt;string | <a href="#dict">Dict</a>&gt;</code>


#### Query

<code>string | Element | Element[]</code>

</docgen-api>
