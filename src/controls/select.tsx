import { For } from 'solid-js';
import type { Component, JSX, Accessor } from 'solid-js';

import css from './select.module.css';

interface ISelectProps {
  value: Accessor<string>;
  options: Array<string>;
  onChange: (value: string) => void;
}

export const Select: Component<ISelectProps> = (props) => {
  const handleChange: JSX.ChangeEventHandler<HTMLSelectElement, Event> = (event) => {
    props.onChange(event.currentTarget.value);
  };

  return (
    <select class={css.root} onChange={handleChange}>
      <For each={props.options}>
        {(item: string) => <option value={item} selected={props.value() === item}>{item}</option>}
      </For>
    </select>
  );
};
