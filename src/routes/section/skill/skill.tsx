import { component$ } from '@builder.io/qwik';
import access from '/media/accesibility.svg';
// import smile from '/media/smile.svg';
import bolt from '/media/bolt.svg';
import responsive from '/media/responsive.svg';
import users from '/media/users.svg';

// Second section | What do I do ?

export default component$(() => {
    return (
        <section id="skill" class="container">
            <div class="tech">
                <h2>Les technologies que j'utilise 🚀</h2>
                <ul>
                    <li><span></span></li>
                </ul>
            </div>
            <div class="do">
                <h2>Ce que je fais ?👀</h2>
                <p>Je crée des interfaces utilisateur réactives et accessibles, garantissant une expérience utilisateur transparente sur tous les appareils.</p>
                <div class="list">
                    <div>
                        <h4>
                            <span><img src={responsive} alt="responive icon" width={30} height={30}/></span>
                            Conception Réactive
                        </h4>
                        <p>Je développe des interfaces qui s'adaptent à toutes les tailles d'écran, des mobiles aux grands moniteurs.</p>
                    </div>
                    <div>
                        <h4>
                            <span><img src={access} alt="accesibility icon" width={30} height={30}/></span>
                            Accessibilité
                        </h4>
                        <p>Je m'assure que les contenus sont accessibles à tous les utilisateurs, y compris ceux ayant des besoins spécifiques.</p>
                    </div>
                    <div>
                        <h4>
                            <span><img src={users} alt="users icon" width={30} height={30}/></span>
                            Expérience Utilisateur
                        </h4>
                        <p>Je focalise sur la facilité d'utilisation et l'engagement de l'utilisateur pour améliorer l'interaction avec le produit.</p>
                    </div>
                    <div>
                        <h4>
                            <span><img src={bolt} alt="bolt icon" width={30} height={30}/></span>
                            Performance Optimal
                        </h4>
                        <p>Je travaille à optimiser la performance des applications pour des chargements rapides et une réactivité élevée.</p>
                    </div>
                </div>
            </div>
            {/* <div class="utilities">
                <div class="tools qwik-animate">Animation Libraries (Framer Motion) - Tools for adding motion to UI elements.</div>
                <div class="tools qwik-loader">Module Bundlers (Webpack, Vite) - Optimizing resources and improving load times.</div>
                <div class="tools qwik-loader">State Management (Redux, Context API) - Managing and centralizing application state.</div>
                <div class="tools css-navbar">CSS Frameworks (Tailwind, Bootstrap) - Providing ready-to-use components for faster UI development.</div>
            </div> */}
        </section>
    );
});