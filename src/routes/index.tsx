import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "./section/intro/intro";
import Skill from "./section/skill/skill";
import Website from "./section/website/website";
import Form from "./section/form/form";
import Project from "./section/project/project";

export default component$(() => (
    <>
        <Intro/>
        <Skill/>
        <h2 class="web-creation container">Mes créations digitales dans le domaine du web <span class="emoji">🎨</span></h2>
        <Website/>
        <Project/>
        <Form/>
        {/* scroll and get to top button */}
        <div class="fixed">
            <div class="scroll-top"></div>
        </div>
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
