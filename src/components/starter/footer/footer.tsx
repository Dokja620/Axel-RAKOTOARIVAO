import { component$, $ } from "@builder.io/qwik";

export default component$(() => {
    const scrollToTop = $(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    return (
        <footer>

            <div class="get-to-top" onClick$={scrollToTop}>
            </div>
            <div class="copyright">
                
            </div>
        </footer>
    );
});
