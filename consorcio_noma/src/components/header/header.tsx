import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { NomaLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo flex justify-center py-4 w-full">
          <NomaLogo />
      </div>
    </header>
  );
});
