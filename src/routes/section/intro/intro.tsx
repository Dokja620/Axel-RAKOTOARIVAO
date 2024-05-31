import { component$ } from '@builder.io/qwik';
import { Animate } from '@dokja620/qwik-animate';
// First section | Introducing Axel

export default component$(() => {
    return (
        <section id="intro" class="container">
            <div class="bio">
                <Animate class="info" animationKeys="@sl-y!_ease-out-back_child-ascend-up_lv-down+++_delay-6 @fd"  threshold="0.2, 0.9">
                    <h1>
                        <span lang="fr">Hey  <span class="emoji">😇</span>! Je suis</span>
                        <span lang="en">Hi  <span class="emoji">😇</span>! I am</span>
                    </h1>
                    <h1>Axel RAKOTOARIVAO,</h1>
                    <h1>
                        
                        <span lang="fr">Développeur Front-End</span>
                        <span lang="en">a Front End Developer</span>
                        
                    </h1>
                    <p>
                        Spécialisé dans la conception de sites web captivants, 
                        utilisant React JS, Qwik et Alpine.js. Mon objectif 
                        principal est de créer des expériences utilisateur 
                        fluides et des interfaces intuitives. Chaque projet 
                        que je réalise vise à élever les normes d'engagement 
                        et de qualité.
                    </p>
                    <div class="get-in-touch">
                        <button>Me contacter</button>
                    </div>
                </Animate>
            </div>

            
            {/* // rectangles background */}
            <div class="background">
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-down+++" threshold="0.4, 0.5">
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationKeys="@sc-in_child-ascend-down+++" threshold="0.4, 0.5">
                    <div class="frame"></div>
                </Animate>
            </div>
        </section>
    );
});