import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <header>
            <nav>
                <div class="logo">Acceuil</div>
                <div class="nav-links">
                    <ul>
                        <li>Moi</li>
                        <li>Compétence</li>
                        <li>Projets</li>
                        <li>Website</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="language">
                    <p>FR</p>
                </div>
            </nav>
        </header>
    );
});