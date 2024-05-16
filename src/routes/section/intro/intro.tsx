import { component$ } from '@builder.io/qwik';
// import axel from '/media/moi/axel-001.png';
// First section | Introducing Axel

export default component$(() => {
    return (
        <section id="intro" class="container">
            <div class="bio">
                <div class="info">
                    <h1>Hey<span class="emoji">🙂</span>! Je suis</h1>
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
                    {/* <img src={axel} alt="" width={2592} height={1456}/> */}
                </div>
            </div>

            <div class="get-in-touch">
                <button>Me contacter</button>
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