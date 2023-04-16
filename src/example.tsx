import type { Component, JSX } from 'solid-js';

import css from './example.module.css';

interface IExampleProps {
  title: string;
  description?: string;
  controls?: JSX.Element;
  code: string;
  children: JSX.Element;
}

export const Example: Component<IExampleProps> = (props) => {
  return (
    <section class={css.root}>
      <header class={css.header}>
        <div>
          <h3 class={css.title}>{props.title}</h3>
          {props.description && <p class={css.description}>{props.description}</p>}
        </div>
        {props.controls}
      </header>
      <div class={css.content}>
        <code class={css.code}>{props.code}</code>
        <div class={css.break} />
        <p class={css.result}>{props.children}</p>
      </div>
    </section>
  );
};
