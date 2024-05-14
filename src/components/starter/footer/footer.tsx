import { component$ } from "@builder.io/qwik";
import qwikFoot from '/media/footer/logos--qwik.webp';
// Align

export default component$(() => {
    // const scrollToTop = $(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
    return (
        <footer>
            {/* <div class="get-to-top" onClick$={scrollToTop}>
            </div> */}
            <div class="copyright">
                <p>fait avec <span><img src={qwikFoot} alt="qwik logo" height={21} width={77}/></span></p>
                <p>© 2024 | Axel RAKOTOARIVAO</p>
            </div>
        </footer>
    );
});