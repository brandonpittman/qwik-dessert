import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { atomized } from "./Box";

const space = {
  none: 0,
  small: 4,
  medium: 8,
  large: 16,
};

const colors = {
  primary: "blue",
  inverted: "white",
  // ...
};

const atomicStyles = defineProperties({
  defaultCondition: "mobile",
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  properties: {
    height: [100, 500],
    padding: space,
    color: colors,
    backgroundColor: colors,
    // ...
  },
  // ...
});

export const atoms = createSprinkles(atomicStyles);

export type Atoms = Parameters<typeof atoms>[0];

export const PrimaryBox = atomized("button", {
  color: "inverted",
  backgroundColor: "primary",
});
