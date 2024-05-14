import { component$ } from '@builder.io/qwik';
import access from '/media/accesibility.svg';
// import smile from '/media/smile.svg';
import bolt from '/media/bolt.svg';
import responsive from '/media/responsive.svg';
import users from '/media/users.svg';

// tech stack
import html from '/media/techs/devicon--html5.svg';
import css from '/media/techs/logos--css3.svg';
import javascript from '/media/techs/logos--javascript.svg';
import qwik from '/media/techs/logos--qwik.svg';
import react from '/media/techs/logos--react.svg';
import alpine from '/media/techs/logos--alpinejs.svg';
import bun from '/media/techs/logos--bun.svg';
import gulp from '/media/techs/logos--gulp.svg';
import postcss from '/media/techs/logos--postcss.svg';
import sass from '/media/techs/logos--sass.svg';
import git from '/media/techs/logos--git.svg';

// Second section | What do I do ?

export default component$(() => {
    return (
        <section id="skill" class="container">
            <div class="tech">
                <h2>Les technologies que j'utilise 🚀</h2>
                <ul>
                    <li><span><img src={html} title='html5' alt="icon html5" width={65} height={65}/></span></li>
                    <li><span><img src={css} title='css3' alt="icon css3" width={72} height={72}/></span></li>
                    <li><span><img src={javascript} title='javascript' alt="icon javascript" width={60} height={60}/></span></li>
                    <li><span><img src={sass} title='sass' alt="icon sass" width={65} height={65}/></span></li>
                    <li><span><img src={qwik} title='qwik js' alt="icon qwik" width={62} height={62}/></span></li>
                    <li><span><img src={react} title='react js' alt="icon react" width={65} height={65}/></span></li>
                    <li><span><img src={alpine} title='alpine js' alt="icon alpine" width={100} height={100}/></span></li>
                    <li><span><img src={bun} title='bun' alt="icon bun" width={65} height={65}/></span></li>
                    <li><span><img src={git} title='git' alt="icon git" width={65} height={65}/></span></li>
                    <li><span><img src={gulp} title='gulp' alt="icon gulp" width={65} height={65}/></span></li>
                    <li><span><img src={postcss} title='postcss' alt="icon postcss" width={65} height={65}/></span></li>
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
                            Expérience User
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
                    <div>
                        <h4>
                            <span><img src={bolt} alt="bolt icon" width={30} height={30}/></span>
                            Performance Optimal
                        </h4>
                        <p>Je travaille à optimiser la performance des applications pour des chargements rapides et une réactivité élevée.</p>
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
        </section>
    );
});