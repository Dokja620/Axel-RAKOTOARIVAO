import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => (
    <>
        {/* First section | Introducing Axel */}
        <section id="intro">
            <div class="bio">
                <div class="info">
                    {/* <small>Bienvenue sur mon portefolio</small>
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
                    </p> */}
                </div>
                <div class="me">
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
                </div>
            </div>
            <div class="get-in-touch">
                
            </div>
        </section>

        {/* Second section | What do I do ? */}
        <section id="skill">
            <div class="tech">

            </div>
            <div class="skills">
                <div class="front"></div>
            </div>
        </section>

        {/* Third section | What I have done so far ? */}
        <section id="portfolio">
            <div class="utilities">
                <div class="tools qwik-animate"></div>
                <div class="tools qwik-loader"></div>
                <div class="tools qwik-loader"></div>
                <div class="tools css-navbar"></div>
            </div>
        </section>

        {/* Fourth section | website I made */}
        <section id="website">
            
        </section>

        {/* Fith section | wanna talk ? */}
        <section id="get-in-touch">
            <form action="">
                <div>
                    <input type="text" placeholder="name"/>
                </div>
                <div>
                    <input type="text" placeholder="email"/>
                </div>
                <div>
                    <input type="text" placeholder="message"/>
                </div>

                <button>Envoyer</button>
            </form>
        </section>
    </>
));

export const head: DocumentHead = {
    title: "Axel RAKOTOARIVAO | Dévelopeur Front-End",
    meta: [
        {
            name: "description",
            content: "Moi c'est Axel RAKOTOARIVAO, un développeur Front-End spécialisé dans la conception de sites web captivants utilisant React JS, Qwik et Alpine.js. Mon objectif principal est de créer des expériences utilisateur fluides et des interfaces intuitives, visant toujours à élever les normes d'engagement et de qualité.",
        },
    ],
};
