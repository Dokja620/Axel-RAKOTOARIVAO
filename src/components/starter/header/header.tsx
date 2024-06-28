import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header>
            <nav>
                <div class="logo">
                    <a href="#intro">
                        <span lang="fr">Bienvenue !</span>
                        <span lang="en">Welcome !</span>
                    </a>
                </div>
                <div class="nav-links">
                    <ul>
                        <li>
                            <a href="#skill">
                                <span lang="fr">Compétences</span>
                                <span lang="en">Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#website">
                                <span lang="fr">Sites web</span>
                                <span lang="en">Websites</span>
                            </a>
                        </li>
                        <li>
                            <a href="#project">
                                <span lang="fr">Projets</span>
                                <span lang="en">Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#form">
                                <span lang="fr">Contact</span>
                                <span lang="en">Contact</span>
                            </a>
                        </li>
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