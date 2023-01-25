import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a class="text-nomaRed" href="https://www.builder.io/" target="_blank">
          Made with ♡ by Fabs
        </a>
      </footer>
    </>
  );
});
