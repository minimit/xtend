---
type: "Components"
category: "Core"
parent: "Layout"
title: "Css"
date: "2050-10-10"
---

## Variants

Xtend adds **custom tailwind variants** (see [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/master/tailwind.preset.js) for default variants) `active` and `group-active`.

They styles **when user presses the element** with pseudo selectors `:active` and `.group:active` but also **when the element is activated by javascript** with the class `.active` and `.group.active`.

When you **style active with css** remember to style `&:active, &.active`.

## Utilities

These are layout **component utilities**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.flex-full`       | `flex-full`                | `responsive`                | `flex: 1 1 100%`            |
| Utility                  | `.container-reset`       | `container-reset`                | `responsive`                | Reset container styles            |
| Utility                  | `.container-y`       | `container-y`                | `NOT POSSIBLE`                | Vertical spacing same as `container` horizontal spacing as set in `theme.container.padding`             |
| Utility                  | `.-container`       | `-container`                | `NOT POSSIBLE`                | Remove `container` horizontal spacing as set in `theme.container.padding`             |
| Utility                  | `.-container-y`       | `-container-y`                | `NOT POSSIBLE`                | Remove `container-y` vertical spacing as set in `theme.container.padding`             |
| Utility                  | `.h-screen`       | `h-screen`                | `responsive`                | Height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.min-h-screen`       | `min-h-screen`                | `responsive`                | Min height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.max-h-screen`       | `max-h-screen`                | `responsive`                | Max height `100vh` and retain height on vertical scroll/resize on mobile           |

</div>

We have also **automatic spacing utilities** to reset margin top when `:first-child` with `mt-fc` and margin bottom when `:last-child` with `mb-lc`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.mt-fc`                     | `mt-fc`                | `responsive`                | Reset margin top on `:first-child`            |
| Utility                  | `.mb-lc`                     | `mb-lc`                | `responsive`                | Reset margin bottom on `:last-child`            |

</div>

## Components

These are layout **component classes**.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.overflow-main`                     | `overflow-main`                | Overflow scrollbar style            |
| Component                  | `.overflow-sub`                     | `overflow-sub`                | Overflow scrollbar style small version            |
| Component                  | `[readonly], [disabled], .disabled`                     | `disabled`                | Disabled styles            |
| Component                  | `.backdrop`                     | `backdrop`                | Backdrop styles            |

</div>

Xtend has custom `:focus` styles, sort of `:focus-visbile` polyfill. You can customize the global `.xt-focus-visible` style or **disable focus management and styles** with the class `html.xt-focus-disable`.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `html.xt-focus-disable`                     | `NOT POSSIBLE`                | Disable focus management and styles            |

</div>

There are many more **component classes for javascript** inside `layoutjs.css.js` but they shouldn't be changed.