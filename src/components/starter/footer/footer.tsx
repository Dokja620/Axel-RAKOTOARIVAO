import { component$ } from "@builder.io/qwik";
import qwikFoot from '/media/footer/logos--qwik.webp';
// Align
// import github from '/media/footer/logo--github-c.svg';
// import gmail from '/media/footer/logos--google-gmail.svg';
// import linkedin from '/media/footer/logo--linkedin.svg';
// import whatsapp from '/media/footer/logo--whatsapp-c.svg';

export default component$(() => {
    // const scrollToTop = $(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
    return (
        <footer>
            {/* <div class="social-media">
                <span><img src={github} alt="icon github" width={35} height={35}/></span>
                <span><img src={gmail} alt="icon google mail" width={46} height={35}/></span>
                <span><img src={linkedin} alt="icon linkedin" width={35} height={35}/></span>
                <span><img src={whatsapp} alt="icon whatsapp" width={35} height={35}/></span>
            </div> */}
            {/* <div class="get-to-top" onClick$={scrollToTop}>
            </div> */}
            <div class="copyright">
                <p>fait avec <span><img src={qwikFoot} alt="qwik logo" height={21} width={77}/></span></p>
                <p>© 2024 - Axel RAKOTOARIVAO</p>
            </div>
        </footer>
    );
});