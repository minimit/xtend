---
type: "Components"
badge: "Core"
parent: "Row"
title: "Row"
description: "Flex row to space any element with paddings, also spaces vertically."
categories: ["100-Core"]
---

## Setup

To use this component import the **less** files accordingly:

```less
@import '/src/core/row/row.less';
```

Or just import **core**:

```less
@import '/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **row**.

<script type="text/plain" class="language-markup">
  <div class="row">
    <!-- content -->
  </div>
</script>