# Qwik Dessert 🍰

This module provides two functions:

- `createBox`
- `styled`

## `createBox`

This function creates a box component that uses your Vanilla Extract Sprinkles.

Create a box component like this:

```ts
import { atoms } from "~/styles/atoms.css";
// atoms being the sprinkles you created

export const Box = createBox({ atoms });
```

Then, you can use your box component:

```tsx
<Box
  as="button"
  backgroundColor="primary"
  color="inverted"
  __border="none"
  __borderRadius="4px"
>
  Click me
</Box>
```

You can use your sprinkles values or you can use any CSS property as an escape hatch by prefixing the property with `__`.

## `styled`

Unlike the `styled-vanilla-extract` module for Qwik, our `styled` function is a bit simpler. We require a string value for a tag name and then a Vanilla Extract style object. We do not support a legacy Styled Components call like `styled.button`.

Use it like so:

```
export const Button = styled("button", {
  backgroundColor: "blue",
  color: "white",
  borderRadius: 4,
  border: "none"
})
```
