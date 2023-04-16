import type { Component } from 'solid-js';
import { I18nProvider } from 'solid-i18n';
import { i18n } from './i18n';
import { Examples } from './examples';

import css from './app.module.css';

export const App: Component = () => {
  return (
    <main class={css.app}>
      <I18nProvider i18n={i18n}>
        <header>
          <h1 class={css.title}>solid-i18n</h1>
          <p class={css.desc}>Tiny internationalization library for SolidJS.</p>
        </header>
        <Examples />
      </I18nProvider>
    </main>
  );
};
