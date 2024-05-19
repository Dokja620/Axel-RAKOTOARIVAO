import { component$ } from '@builder.io/qwik';

import repo from '/media/repo.svg';
import star from '/media/star.svg';
import fork from '/media/fork.svg';
import { Animate } from '@dokja620/qwik-animate';

// Third section | What I have done so far ?

export default component$(() => {
    return (
        <section id="project" class="container">
            <h2>Mes Projets Front-End sur GitHub ✨</h2>
            <Animate class="utilities" animationKeys="@sp-in_lv-down+++_child-ascend" runOnce>
                <div class="tools qwik-animate">
                    <div class="title">
                        <span><img src={repo} alt="repository icon" width={25} height={25}/></span>
                        <a href="http://" target="_blank">dokja620/qwik-animate</a>
                    </div>
                    <div class="desc">
                        <p>Qwik Animate : 🌟 Bibliothèque d'animations au défilement pour QwikJS ... </p>
                    </div>
                    <div class="foot">
                        <span><img src={star} alt="star icon" width={20} height={20}/></span>
                        <span><img src={fork} alt="fork icon" width={20} height={20}/></span>
                    </div>
                </div>
                <div class="tools qwik-slider">
                    <div class="title">
                        <span><img src={repo} alt="repository icon" width={25} height={25}/></span>
                        <a href="http://" target="_blank">dokja620/qwik-slider</a>
                    </div>
                    <div class="desc">
                        <p>Qwik Slider : 💫 Composant modulable de carrousel pour QwikJS... </p>
                    </div>
                    <div class="foot">
                        <span><img src={star} alt="star icon" width={20} height={20}/></span>
                        <span><img src={fork} alt="fork icon" width={20} height={20}/></span>
                    </div>
                </div>
                <div class="tools qwik-loader">
                    <div class="title">
                        <span><img src={repo} alt="repository icon" width={25} height={25}/></span>
                        <a href="http://" target="_blank">dokja620/qwik-loader</a>
                    </div>
                    <div class="desc">
                        <p>Qwik Loader : ⚡️ Solution simple pour ajouter une animation de chargement... </p>
                    </div>
                    <div class="foot">
                        <span><img src={star} alt="star icon" width={20} height={20}/></span>
                        <span><img src={fork} alt="fork icon" width={20} height={20}/></span>
                    </div>
                </div>
                <div class="tools more">
                </div>
            </Animate>
        </section>
    );
});