import { component$ } from '@builder.io/qwik';
import beaming from "/public/media/fluent/slightly_smiling_face_flat.svg";
import { Animate } from '~/components/qwik-animate/animate';
// First section | Introducing Axel

export default component$(() => {
    return (
        <section id="intro" class="container">
            <div class="bio">
                <Animate class="info" animationOptions="@sl-y!_ease-out-back_child-ascend-up_lv-down+++_delay-6 @fd">
                    <h1>
                        <span lang="fr">Hey <span class="emoji"><img src={beaming} alt="beaming face fluent emoji icon" height={50} width={50}/></span>! Je suis</span>
                        <span lang="en">Hi <span class="emoji"><img src={beaming} alt="beaming face fluent emoji icon" height={50} width={50}/></span>! I am</span>
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
                <Animate class="frame-box" animationOptions="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationOptions="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationOptions="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationOptions="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                    <div class="frame"></div>
                </Animate>
                <Animate class="frame-box" animationOptions="@sc-in_child-ascend-down+++">
                    <div class="frame"></div>
                </Animate>
            </div>
        </section>
    );
});