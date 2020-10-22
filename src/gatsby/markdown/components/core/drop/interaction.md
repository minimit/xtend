---
type: "Components"
category: "Core"
parent: "Drop"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used with the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-drop`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

Additionally on component initialization the class `xt-drop` gets added to the **object** (the DOM element you assigned the component).

## Animations

You can use **css animations**, just add them with **class names**.

<demo>
  <demovanilla src="vanilla/components/core/drop/animation">
  </demovanilla>
</demo>

You can use **javascript animations**, just use [drop api](/components/core/drop/api), and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/core/drop/animation-js">
  </demovanilla>
</demo>

## Event

You can specify **on** and **off** events for the drop. Fore example `on: 'mouseenter'` `off: 'mouseleave'`. Default is `on: 'click'`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                              | `'click'`                     | Set event to listen for activation           |
| Option                  | `off:String`                             | `false`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |
| Option                  | `eventLimit:Query`                          | `'.event-limit, .drop-inner'`        | Limit events inside self.object            |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/event">
  </demovanilla>
</demo>

## Backdrop

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `backdrop:Boolean`                              | `false`                     | Generate backdrop on targets or on object if no targets           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/backdrop">
  </demovanilla>
</demo>

## Position

Set drop position with this utils.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.drop-bottom`       | `drop-bottom`                | `responsive`                | Position bottom            |
| Utility                  | `.drop-top`       | `drop-top`                | `responsive`                | Position top            |
| Utility                  | `.drop-left`       | `drop-left`                | `responsive`                | Position left            |
| Utility                  | `.drop-right`       | `drop-right`                | `responsive`                | Position right            |
| Utility                  | `.drop-center`       | `drop-center`                | `responsive`                | Position center            |
| Utility                  | `.drop-before`       | `drop-before`                | `responsive`                | Position before            |
| Utility                  | `.drop-after`       | `drop-after`                | `responsive`                | Position after            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/right">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/before">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/after">
  </demovanilla>
</demo>

## Block

You can block the activations with the class `.xt-block` on elements.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-block`                     | `NOT POSSIBLE`                | Block scroll on element            |

</div>