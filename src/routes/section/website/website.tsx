import { component$ } from '@builder.io/qwik';

// Fourth section | website I made

export default component$(() => {
    return (
        <section id="website">
            <div class="utilities">
                <div class="tools qwik-animate"></div>
                <div class="tools qwik-loader"></div>
                <div class="tools qwik-loader"></div>
                <div class="tools css-navbar"></div>
            </div>
        </section>
    );
});