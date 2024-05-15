import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header>
            <nav>
                <div class="logo">Acceuil</div>
                <div class="nav-links">
                    <ul>
                        <li>Compétence</li>
                        <li>Website</li>
                        <li>Projets</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="language">
                    <p>FR</p>
                    <p>EN</p>
                </div>
            </nav>
        </header>
    );
});