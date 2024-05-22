import { component$ } from '@builder.io/qwik';
// does imgs
import bolt from '/public/media/skill/bolt.svg';
import globe from '/public/media/skill/globe.svg';
import puzzle from '/public/media/skill/puzzle.svg';
import test from '/public/media/skill/test.svg';
import users from '/public/media/skill/users.svg';
import team from '/public/media/skill/team.svg';

// tech stack
import html from '/public/media/techs/devicon--html5.svg';
import css from '/public/media/techs/logos--css3.svg';
import javascript from '/public/media/techs/logos--javascript.svg';
import qwik from '/public/media/techs/logos--qwik.svg';
import react from '/public/media/techs/logos--react.svg';
import alpine from '/public/media/techs/logos--alpinejs.svg';
import bun from '/public/media/techs/logos--bun.svg';
import gulp from '/public/media/techs/logos--gulp.svg';
import postcss from '/public/media/techs/logos--postcss.svg';
import sass from '/public/media/techs/logos--sass.svg';
import git from '/public/media/techs/logos--git.svg';
import { Animate } from '@dokja620/qwik-animate';

// Second section | What do I do ?

export default component$(() => {
    return (
        <section id="skill" class="container">
            <Animate class="tech" animationKeys="@sl-y_lv-down+_speed-down" runOnce>
                <h2>Les technologies que j'utilise <span class="emoji">🚀</span></h2>
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
            </Animate>
            <div class="do">
                <h2>Ce que je fais ?👀</h2>
                <p>Je crée des interfaces réactives pour une expérience utilisateur intuitive et fluide.</p>
                <Animate class="list" animationKeys="@sl-y_child-ascend-up_lv-down+++ @fd @sp-in" threshold="0.3, 0.2">
                    <div class="skill">
                        <span class="users"><img src={users} alt="users icon" width={75} height={75}/></span>
                        <h4>UI/UX Modernes</h4>
                        <p>Je crée des interfaces utilisateur modernes et esthétiques qui captivent les utilisateurs et renforcent la présence en ligne de votre entreprise.</p>
                    </div>
                    <div class="skill">
                        <span class="bolt"><img src={bolt} alt="bolt icon" width={75} height={75}/></span>
                        <h4>Performances Optimisées</h4>
                        <p>J'optimise les performances des sites web pour garantir une expérience utilisateur rapide et fluide, augmentant ainsi l'engagement et la satisfaction des visiteurs.</p>
                    </div>
                    <div class="skill">
                        <span class="access"><img src={globe} alt="globe icon" width={75} height={75}/></span>
                        <h4>Accessibilité Améliorée</h4>
                        <p>Je m'assure que votre site web est accessible à tous, ce qui élargit votre audience et renforce votre réputation en tant qu'entreprise inclusive.</p>
                    </div>
                    <div class="skill">
                        <span class="test"><img src={test} alt="test icon" width={75} height={75}/></span>
                        <h4>Tests Rigoureux</h4>
                        <p>Je réalise des tests approfondis pour garantir la qualité et la fiabilité de votre application web, assurant une expérience utilisateur sans faille.</p>
                    </div>
                    <div class="skill">
                        <span class="team"><img src={team} alt="collaboration icon" width={75} height={75}/></span>
                        <h4>Collaboration Efficace</h4>
                        <p>Je collabore étroitement avec votre équipe pour traduire vos idées en solutions web fonctionnelles et esthétiques, livrées dans les délais et selon vos spécifications.</p>
                    </div>
                    <div class="skill">
                        <span class="puzzle"><img src={puzzle} alt="puzzle icon" width={75} height={75}/></span>
                        <h4>Solutions Personnalisées</h4>
                        <p>Je crée des solutions web sur mesure adaptées à vos besoins spécifiques, garantissant ainsi des résultats qui répondent pleinement à vos objectifs et exigences.</p>
                    </div>
                </Animate>
            </div>
            {/* // rectangles background */}
            <div class="background second">
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-up+ @pr-in @sp-in">
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-up+ @pr-in @sp-in">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-up+ @pr-in @sp-in">
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-up+ @pr-in @sp-in">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-up+ @pr-in @sp-in" threshold="0.3, 0.7">
                    <div class="frame"></div>
                </Animate>
            </div>
        </section>
    );
});