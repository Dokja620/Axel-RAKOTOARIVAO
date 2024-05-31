import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header>
            <nav>
                <div class="logo"><a href="#intro">Bienvenue</a></div>
                <div class="nav-links">
                    <ul>
                        <li><a href="#skill">Compétence</a></li>
                        <li><a href="#website">Website</a></li>
                        <li><a href="#project">Projets</a></li>
                        <li><a href="#form">Contact</a></li>
                    </ul>
                </div>
                <div class="language">
                    <input type="checkbox" name="language" id="lang-switch" />
                    <label for="lang-switch">
                        <p>FR</p>
                        <p>EN</p>
                    </label>
                </div>

                <div class="burger-menu">
                    <input type="checkbox" name="burger" id="burger-menu"/>
                    <label for="burger-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </div>
            </nav>
        </header>
    );
});