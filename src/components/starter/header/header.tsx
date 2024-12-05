import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header>
            <nav>
                <a href="#top">
                    Axel Diary
                </a>

                <div class="lang">
                    <p>FR</p>
                    <p>EN</p>

                    <input type="checkbox" name="lang-switch" id="lang-switch" />
                </div>
            </nav>
        </header>
    );
});