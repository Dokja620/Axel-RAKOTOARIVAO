import { component$ } from '@builder.io/qwik';

// First section | Introducing Axel

export default component$(() => {
    return (
        <section id="intro" class="container">
            <div class="bio">
                <div class="info">
                    <h1>Hi Je suis</h1>
                    <h1>Axel RAKOTOARIVAO</h1>
                    <h1>Développeur Front-End</h1>
                    <p>
                        Spécialisé dans la conception de sites web captivants, 
                        utilisant React JS, Qwik et Alpine.js. Mon objectif 
                        principal est de créer des expériences utilisateur 
                        fluides et des interfaces intuitives. Chaque projet 
                        que je réalise vise à élever les normes d'engagement 
                        et de qualité.
                    </p>
                </div>
                <div class="me">
                    
                </div>
            </div>
            <div class="get-in-touch">

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