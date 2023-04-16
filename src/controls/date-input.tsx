import { createMemo } from 'solid-js';
import type { Component, JSX, Accessor } from 'solid-js';

import css from './date-input.module.css';

interface IDateInputProps {
  value: Accessor<Date | null>;
  onChange: (value: Date | null) => void;
}

export const DateInput: Component<IDateInputProps> = (props) => {
  const value = createMemo(() => props.value()?.toISOString().slice(0, 10));

  const handleChange: JSX.ChangeEventHandler<HTMLInputElement, Event> = (event) => {
    props.onChange(event.currentTarget.valueAsDate);
  };

  return (
    <input
      type="date"
      pattern="\d{4}-\d{2}-\d{2}"
      value={value()}
      class={css.root}
      onChange={handleChange}
    />
  );
};
