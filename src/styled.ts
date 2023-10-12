import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { ComplexStyleRule, style } from "@vanilla-extract/css";
import { styledRuntime } from "./styledRuntime";
import { JSXTagName } from "@builder.io/qwik";

export function styled(el: JSXTagName, rules: ComplexStyleRule) {
  if (!el) {
    throw new Error("el must be a valid HTML element");
  }

  const className = style(rules);
  const args = [el, className] as const;

  const Component = styledRuntime(el, className);

  addFunctionSerializer(Component, {
    importPath: "qwik-dessert/styledRuntime",
    importName: "styledRuntime",
    args: args as any,
  });

  return Component;
}
