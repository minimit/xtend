---
type: "Components"
category: "Interaction"
parent: "Drop"
title: "Content Card"
date: "2030-05-05"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

<demo>
  <demoinline src="demos/components/drop/card-variant">
  </demoinline>
</demo>

## Size

Use **tailwind classes** to assign width (e.g. [width](https://tailwindcss.com/docs/width), [max-width](https://tailwindcss.com/docs/max-width)).

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/drop/card-size">
  </demoinline>
</demo>

## Content

Card content **stack vertically**.

<demo>
  <demoinline src="demos/components/drop/card-content">
  </demoinline>
</demo>

## Group

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width)).

<demo>
  <demoinline src="demos/components/drop/card-group">
  </demoinline>
</demo>

## Separator

Use **tailwind classes** to style **borders** for separation.

<demo>
  <demoinline src="demos/components/drop/card-separator">
  </demoinline>
</demo>

## Overflow

Use **tailwind classes** to overflow divs. Use **component classes** to style **overflow**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-overflow-main`                     | `xt-overflow-main`                | Overflow scrollbar style            |
| Component                  | `.xt-overflow-sub`                     | `xt-overflow-sub`                | Overflow scrollbar style small version            |

</div>

<demo>
  <demoinline src="demos/components/drop/card-overflow-y">
  </demoinline>
</demo>

## List

You can use [list component](/components/list) to space card's internal content.

<demo>
  <demoinline src="demos/components/drop/card-list">
  </demoinline>
</demo>
