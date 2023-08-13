import { JSXTagName } from "@builder.io/qwik";
import { createBox } from ".";
import { Atoms, atoms } from "./atoms.css";
import { styled } from "./styled";

export const Box = createBox({ atoms });

export const atomized = (el: JSXTagName, rules: Atoms) =>
  styled(el, [atoms(rules)]);
