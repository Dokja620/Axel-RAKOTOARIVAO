import { component$ } from '@builder.io/qwik';
import beaming from "/media/fluent/slightly_smiling_face_flat.svg";
// First section | Introducing Axel

export default component$(() => {
    return (
        <section id="intro" class="container">
            <div class="bio">
                <div class="info">
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
                </div>
            </div>

            
            {/* // rectangles background */}
            <div class="background">
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