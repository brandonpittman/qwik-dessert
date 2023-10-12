import type { AtomsFnBase } from "@dessert-box/core";
import { composeClassNames, extractAtomsFromProps } from "@dessert-box/core";
import {
  CSSProperties,
  JSXTagName,
  jsx,
  QwikIntrinsicElements,
} from "@builder.io/qwik";
import { JSX } from "@builder.io/qwik/jsx-runtime";

type CreateBoxParams<AtomsFn> = {
  atoms: AtomsFn;
  defaultClassName?: string;
};

type BaseBoxProps<C extends keyof QwikIntrinsicElements> =
  QwikIntrinsicElements[C] & {
    as?: C;
  };

type PolymorphicComponentProps<
  C extends keyof QwikIntrinsicElements,
  Props
> = Props & BaseBoxProps<C>;

type OverrideTokens<T> = {
  [K in keyof T as K extends string ? `__${K}` : number]:
    | Extract<T[K], string | number>
    | {};
};

type Tokens<AtomsFn extends AtomsFnBase> = Parameters<AtomsFn>[0];
type BoxProps<
  AtomsFn extends AtomsFnBase,
  C extends keyof QwikIntrinsicElements
> = PolymorphicComponentProps<
  C,
  Tokens<AtomsFn> & OverrideTokens<CSSProperties>
>;

type CreateBoxProps<
  AtomsFn extends AtomsFnBase,
  C extends keyof QwikIntrinsicElements
> = {
  as?: JSXTagName;
  class?: string;
  style?: CSSProperties;
  ref?: HTMLElement;
  children?: Element | string;
} & BoxProps<AtomsFn, C>;

export function createBox<AtomsFn extends AtomsFnBase>({
  atoms: atomsFn,
  defaultClassName,
}: CreateBoxParams<AtomsFn>) {
  const Box = <C extends keyof QwikIntrinsicElements>({
    as,
    class: klass,
    style,
    ref,
    children,
    ...others
  }: CreateBoxProps<AtomsFn, C>) => {
    const classProps = extractAtomsFromProps({ ...others }, atomsFn);

    return jsx(as || "div", {
      ref,
      style: { ...style, ...classProps.customProps },
      class: composeClassNames(
        klass,
        atomsFn(classProps.atomProps),
        defaultClassName
      ),
      children,
      ...classProps.otherProps,
    }) as JSX.Element;
  };
  return Box;
}

export { styled } from "./styled";
