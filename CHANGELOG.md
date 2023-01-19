# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0](https://github.com/houseninjadojo/capacitor-mixpanel/compare/v0.2.0...v1.0.0) (2023-01-19)


### ⚠ BREAKING CHANGES

* **config:** deprecate `iosToken` and `androidToken`, use config `token` ([#40](https://github.com/houseninjadojo/capacitor-mixpanel/issues/40))

### Features

* add hasOptedOutTracking, ios ip collection settings and fix missing ios methods ([#60](https://github.com/houseninjadojo/capacitor-mixpanel/issues/60)) ([863f425](https://github.com/houseninjadojo/capacitor-mixpanel/commit/863f4257b8c4e75c96ee9bcfc848500a4f16aefa))
* option for opt in/out by default and deleteProfile() ([#43](https://github.com/houseninjadojo/capacitor-mixpanel/issues/43)) ([df09f7e](https://github.com/houseninjadojo/capacitor-mixpanel/commit/df09f7ed37a399dd1d8cadc47bf8721ce4e620a2))


### Bug Fixes

* **config:** deprecate `iosToken` and `androidToken`, use config `token` ([#40](https://github.com/houseninjadojo/capacitor-mixpanel/issues/40)) ([f64b757](https://github.com/houseninjadojo/capacitor-mixpanel/commit/f64b757e46ed55d05a7ff76c0a3c1bf1dc7fd506))

## [2.1.0](https://github.com/houseninjadojo/capacitor-mixpanel/compare/capacitor-mixpanel-v2.0.0...capacitor-mixpanel-v2.1.0) (2023-01-19)


### Features

* add hasOptedOutTracking, ios ip collection settings and fix missing ios methods ([#60](https://github.com/houseninjadojo/capacitor-mixpanel/issues/60)) ([863f425](https://github.com/houseninjadojo/capacitor-mixpanel/commit/863f4257b8c4e75c96ee9bcfc848500a4f16aefa))

## [2.0.0](https://github.com/houseninjadojo/capacitor-mixpanel/compare/capacitor-mixpanel-v1.1.0...capacitor-mixpanel-v2.0.0) (2022-12-01)


### ⚠ BREAKING CHANGES

* **config:** deprecate `iosToken` and `androidToken`, use config `token` ([#40](https://github.com/houseninjadojo/capacitor-mixpanel/issues/40))

### Bug Fixes

* **config:** deprecate `iosToken` and `androidToken`, use config `token` ([#40](https://github.com/houseninjadojo/capacitor-mixpanel/issues/40)) ([f64b757](https://github.com/houseninjadojo/capacitor-mixpanel/commit/f64b757e46ed55d05a7ff76c0a3c1bf1dc7fd506))

## [1.1.0](https://github.com/houseninjadojo/capacitor-mixpanel/compare/capacitor-mixpanel-v1.0.1...capacitor-mixpanel-v1.1.0) (2022-12-01)


### Features

* option for opt in/out by default and deleteProfile() ([#43](https://github.com/houseninjadojo/capacitor-mixpanel/issues/43)) ([df09f7e](https://github.com/houseninjadojo/capacitor-mixpanel/commit/df09f7ed37a399dd1d8cadc47bf8721ce4e620a2))

## 1.0.1 (2022-12-01)

### Release

* Update dependencies

## 1.0.0-beta.2 (2022-09-13)

### Bugfixes

* Set peer dependency for capacitor/core to v4

## 1.0.0-beta.1 (2022-08-29)

### Release

* Upgrade plugin for Capacitor 4 compatibility

## 0.2.0 (2022-08-29)

### Features

* update mixpanel libraries to ios=4.0.0 android=7.0.0 web=2.45.0 (#15) ([c89f545](https://github.com/houseninjadojo/capacitor-mixpanel/commit/c89f545))
  * this adds new configuration option `trackAutomaticEvents` with default value `true`

### 0.1.0 (2022-05-03)

### Features

* add some SDK functions and fix SDK versions ([#8](https://github.com/houseninjadojo/capacitor-mixpanel/issues/8)) ([563c9b1](https://github.com/houseninjadojo/capacitor-mixpanel/commit/563c9b17a37c201764526fb3f16b9357af881954))
