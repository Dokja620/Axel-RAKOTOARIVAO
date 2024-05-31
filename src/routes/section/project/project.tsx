import { component$ } from '@builder.io/qwik';

import repo from '/public/media/repo.svg';
import star from '/public/media/star.svg';
import fork from '/public/media/fork.svg';

// Third section | What I have done so far ?

export default component$(() => {
    return (
        <section id="project" class="container">
            <h2>Mes Projets Front-End sur GitHub <span class="emoji">✨</span></h2>
            <div class="utilities">
                <div class="tools qwik-animate">
                    <div class="title">
                        <span><img src={repo} alt="repository icon" width={25} height={25}/></span>
                        <a href="http://" target="_blank">dokja620/qwik-animate</a>
                    </div>
                    <div class="desc">
                        <p>Qwik div : <span class="emoji">🌟</span> Bibliothèque d'animations au défilement pour QwikJS ... </p>
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
                        <p>Qwik Slider : <span class="emoji">💫</span> Composant modulable de carrousel pour QwikJS... </p>
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
                        <p>Qwik Loader : <span class="emoji">⚡️</span> Solution simple pour ajouter une animation de chargement... </p>
                    </div>
                    <div class="foot">
                        <span><img src={star} alt="star icon" width={20} height={20}/></span>
                        <span><img src={fork} alt="fork icon" width={20} height={20}/></span>
                    </div>
                </div>
                <div class="tools more">
                </div>
            </div>
            {/* // rectangles background */}
            <div class="background third">
                <div class="frame-box">
                    <div class="frame"></div>
                </div>
                <div class="frame-box">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </div>
                <div class="frame-box">
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                </div>
                <div class="frame-box">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </div>
                <div class="frame-box">
                    <div class="frame"></div>
                </div>
            </div>
        </section>
    );
});