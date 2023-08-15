import { ClassList, JSXTagName } from "@builder.io/qwik";

export function styledRuntime(el: JSXTagName, className: string) {
  const Element = el as string;

  return function Component(props: any & { class: ClassList }) {
    const classNames = [props.class, className].filter(Boolean).join(" ");
    return <Element {...props} class={classNames} />;
  };
}
