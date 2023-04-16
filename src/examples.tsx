import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import { useI18n, DateTime, Numeric, Text } from 'solid-i18n';
import { Select } from './controls/select';
import { DateInput } from './controls/date-input';
import { Example } from './example';
import { NumberPreset, DateTimePreset } from './enums';
import { changeLanguage } from './i18n';

import css from './examples.module.css';

export const Examples: Component = () => {
  const i18n = useI18n();

  const [lang, setLang] = createSignal('en');

  const [num, setNum] = createSignal('9999');
  const [numPreset, setNumPreset] = createSignal(NumberPreset.Default);

  const [date, setDate] = createSignal(new Date());
  const [datePreset, setDatePreset] = createSignal(DateTimePreset.Default);

  const handleChangeLanguage = (language: string) => {
    setLang(language);
    void changeLanguage(language);
  };

  return (
    <div class={css.root}>
      <Example
        title="Base example"
        description="String formatting with markup (simple html or custom components)."
        controls={<Select value={lang} options={['en', 'ru']} onChange={handleChangeLanguage} />}
        code={'<Text\n  message="Read the <link>documentation</link> for more info."\n  link={(text) => <a href="https://github.com/SanichKotikov/solid-i18n">{text}</a>}\n/>'}
      >
        <Text
          message="Read the <link>documentation</link> for more info."
          link={(text) => <a href="https://github.com/SanichKotikov/solid-i18n">{text}</a>}
        />
      </Example>
      <Example
        title="Text with plural"
        description="Pluralization category can be one of: =0, one, two, few, many or other."
        controls={<Select value={num} options={['0', '1', '9999']} onChange={setNum} />}
        code={`<Text\n  message="Selected {count, plural, =0 {zero items} one {single item} other {{count} items}}."\n  count={${num()}}\n/>`}
      >
        <Text
          message="Selected {count, plural, =0 {zero items} one {single item} other {{count} items}}."
          count={+num()}
        />
      </Example>
      <Example
        title="Simple date"
        description="Date formatting with custom parameters."
        controls={<DateInput value={date} onChange={setDate} />}
        code={'<DateTime\n  date={date()}\n  day="numeric"\n  month="long"\n  weekday="long"\n  year="numeric"\n/>'}
      >
        <DateTime date={date()} day="numeric" month="long" weekday="long" year="numeric" />
      </Example>
      <Example
        title="Text with date"
        description={`Parameters: ${JSON.stringify(i18n.presets.dateTime![datePreset()])}`}
        controls={<Select value={datePreset} options={Object.values(DateTimePreset)} onChange={setDatePreset} />}
        code={`<Text\n  message="Selected date: {datetime${datePreset() !== DateTimePreset.Default ? ', date, ' +
          datePreset() : ''}}"\n  datetime={date()}\n/>`}
      >
        <Text message={`Selected date: {datetime, date, ${datePreset()}}`} datetime={date()} />
      </Example>
      <Example
        title="Text with number"
        description={`Parameters: ${JSON.stringify(i18n.presets.number![numPreset()])}`}
        controls={<Select value={numPreset} options={Object.values(NumberPreset)} onChange={setNumPreset} />}
        code={`<Text\n  message="Some value: {count, number, ${numPreset()}}"\n  count={9999.99}\n/>`}
      >
        <Text
          message={`Some value: {count, number, ${numPreset()}}`}
          count={9999.99}
        />
      </Example>
      <Example
        title="Amount with currency"
        code={'<Numeric\n  value={9.99}\n  numberStyle="currency"\n  currency="EUR"\n/>'}
      >
        <Numeric value={9.99} numberStyle="currency" currency="EUR" />
      </Example>
    </div>
  );
};
