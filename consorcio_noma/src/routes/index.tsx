import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import First from '~/components/first';
import Second from '~/components/second';

export default component$(() => {
    return (
        <div>
            <First />
            <Second />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Consórcio Noma',
    meta: [
        {
            name: 'description',
            content: 'Conheça o Consórcio Noma e adquira sua carreta!',
        },
    ],
};
