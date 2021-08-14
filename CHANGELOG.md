# Changelog

## 1.0.0

### Major Changes

- [#62](https://github.com/JounQin/remark-preset-prettier/pull/62) [`965cdcb`](https://github.com/JounQin/remark-preset-prettier/commit/965cdcb7d91eac8c73dc304ea43ab9f079299d26) Thanks [@JounQin](https://github.com/JounQin)! - feat: support native esm plugins

  If you're not ready for native esm or latest `remark-lint` plugins, please use versions `<1`, see [#61](https://github.com/JounQin/remark-preset-prettier/issues/61) for more details.

  Or you can try something like [`yarn-deduplicate`](https://github.com/atlassian/yarn-deduplicate) with `yarn-deduplicate --strategy fewer` without guarantee.

## 0.5.1

### Patch Changes

- [#60](https://github.com/JounQin/remark-preset-prettier/pull/60) [`b7455ae`](https://github.com/JounQin/remark-preset-prettier/commit/b7455ae4282283a2db0db5cb92620bc2b582e4c5) Thanks [@JounQin](https://github.com/JounQin)! - fix: upgrade @pkgr/rollup, use .cjs for require

* [#58](https://github.com/JounQin/remark-preset-prettier/pull/58) [`9fa3a29`](https://github.com/JounQin/remark-preset-prettier/commit/9fa3a298eb3d80de2c348ad3aa3160f06b27655b) Thanks [@JounQin](https://github.com/JounQin)! - fix: add missing `type: "module"`, use default export

## 0.5.0

### Minor Changes

- [#56](https://github.com/JounQin/remark-preset-prettier/pull/56) [`264b220`](https://github.com/JounQin/remark-preset-prettier/commit/264b220650a9b36d3801202c9894156b1364e12f) Thanks [@JounQin](https://github.com/JounQin)! - feat: migrate to native esm

### [0.4.1](https://github.com/JounQin/remark-preset-prettier/compare/v0.4.0...v0.4.1) (2021-03-13)

### Bug Fixes

- remove unexpected dependencies after upgrading deps ([458c23d](https://github.com/JounQin/remark-preset-prettier/commit/458c23dcb094c38acc0ce02315d73ea7883e30c4))

## [0.4.0](https://github.com/JounQin/remark-preset-prettier/compare/v0.3.0...v0.4.0) (2020-01-27)

### Bug Fixes

- revert retextPlugins, add notice about retext-sentence-spacing ([0cdcd18](https://github.com/JounQin/remark-preset-prettier/commit/0cdcd186dcbd4c73c39a454dfe24de37c61a55d8))

## [0.3.0](https://github.com/JounQin/remark-preset-prettier/compare/v0.2.2...v0.3.0) (2020-01-27)

### Features

- disable style related retext plugins ([dab8e70](https://github.com/JounQin/remark-preset-prettier/commit/dab8e70d2a559b5042553f7c87c7f522cb1de854))

### [0.2.2](https://github.com/JounQin/remark-preset-prettier/compare/v0.2.1...v0.2.2) (2019-09-25)

### [0.2.1](https://github.com/JounQin/remark-preset-prettier/compare/v0.2.0...v0.2.1) (2019-09-22)

### Bug Fixes

- **deps:** bump dependencies, simplify build usage ([b39fb14](https://github.com/JounQin/remark-preset-prettier/commit/b39fb14))

## [0.2.0](https://github.com/JounQin/remark-preset-prettier/compare/v0.1.1...v0.2.0) (2019-09-07)

### Features

- simplify implement by reduce, test with preset-lint-consistent too ([9122f95](https://github.com/JounQin/remark-preset-prettier/commit/9122f95))

### [0.1.1](https://github.com/JounQin/remark-preset-prettier/compare/v0.1.0...v0.1.1) (2019-09-01)

### Bug Fixes

- toc for remark-cli usage incorrect ([1735435](https://github.com/JounQin/remark-preset-prettier/commit/1735435))

## 0.1.0 (2019-09-01)

### Features

- first blood, should just work ([ca9ac95](https://github.com/JounQin/remark-preset-prettier/commit/ca9ac95))
