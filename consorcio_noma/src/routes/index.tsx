import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class = "max-w-[1400px]">
      
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Consórcio Noma',
  meta: [
    {
      name: 'description',
      content: 'Com o Consórcio Noma, você conquista de ter uma carreta nova!',
    },
  ],
};
