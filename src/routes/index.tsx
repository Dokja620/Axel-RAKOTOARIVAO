import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => (
    <>
        {/* First section | Introducing Axel */}
        <section id="intro">
            <div class="bio">
                <div class="info">
                    <h1>Je suis <span class="secondary" >Axel RAKOTOARIVAO</span></h1>
                    <p>
                        Développeur Front-End
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
    title: "Ohayo Dev & Design - Acceuil",
    meta: [
        {
            name: "description",
            content: "Homepage ohayo dev & design",
        },
    ],
};
