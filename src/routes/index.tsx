import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "./section/intro/intro";
import Skill from "./section/skill/skill";
import Website from "./section/website/website";
import Form from "./section/form/form";
import Project from "./section/project/project";

// Fluent emoji
import palette from "/media/fluent/artist_palette_flat.svg";

export default component$(() => (
    <>
        <Intro/>
        <Skill/>
        <h2 class="web-creation container">Mes créations digitales dans le domaine du web <span class="emoji"><img src={palette} alt="" width={50} height={50}/></span></h2>
        <Website/>
        <Project/>
        <Form/>
        {/* scroll and get to top button */}
        <div class="fixed">
            <div class="scroll-more"></div>
            <a href="#intro"><div class="scroll-top"></div></a>
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
