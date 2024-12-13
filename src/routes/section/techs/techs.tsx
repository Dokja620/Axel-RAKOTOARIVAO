import { component$ } from "@builder.io/qwik";

// Fluent emoji
import Laptop from "/public/media/fluent/desktop_computer_color.svg?jsx";

// Techs icons
import Html from "/public/media/techs/icons--html.svg?jsx";
import Sass from "/public/media/techs/icons--sass.svg?jsx";
import Typescript from "/public/media/techs/icons--typescript.svg?jsx";
import Git from "/public/media/techs/icons--git.svg?jsx";
import Bun from "/public/media/techs/icons--bun-dark.svg?jsx";
import Svelte from "/public/media/techs/icons--svelte.svg?jsx";
import React from "/public/media/techs/icons--react-dark.svg?jsx";
import Qwik from "/public/media/techs/icons--qwik.svg?jsx";
import Vue from "/public/media/techs/icons--vuejs-light.svg?jsx";
import Alpine from "/public/media/techs/icons--alpinejs-dark.svg?jsx";
import Supabase from "/public/media/techs/icons--supabase-dark.svg?jsx";
import Pocketbase from "/public/media/techs/icons--pocketbase-dark.svg?jsx";
import Appwrite from "/public/media/techs/icons--appwrite.svg?jsx";
import Shadcn from "/public/media/techs/icons--shadcn-dark.svg?jsx";
import Cloudflare from "/public/media/techs/icons--cloudflare-dark.svg?jsx";

// Tech stack items
const techStack = [
  { Icon: Html, name: "HTML", description: "Markup Language" },
  { Icon: Sass, name: "Sass", description: "CSS Preprocessor" },
  { Icon: Typescript, name: "TypeScript", description: "Type System" },
  { Icon: Git, name: "Git", description: "Version Control" },
  { Icon: Bun, name: "Bun", description: "JS Runtime" },
  { Icon: Vue, name: "VueJS", description: "UI Framework" },
  { Icon: Qwik, name: "Qwik", description: "Web Framework" },
  { Icon: Svelte, name: "Svelte", description: "Reactive Framework" },
  { Icon: React, name: "React", description: "Javascript Library" },
  { Icon: Alpine, name: "Alpine", description: "Light Framework" },
  { Icon: Supabase, name: "Supbase", description: "Backend Service" },
  { Icon: Pocketbase, name: "PocketBase", description: "Data Platform" },
  { Icon: Appwrite, name: "Appwrite", description: "Dev Platform" },
  { Icon: Shadcn, name: "Shadcn", description: "UI Components" },
  { Icon: Cloudflare, name: "Cloudflare", description: "Cloud Network" },
];

export default component$(() => {
  return (
    <section id="techs" class="container">
      <div class="title">
        <h3>My Tech Stack</h3>
        <Laptop />
      </div>
      <div class="techno">
        {techStack.map(({ Icon, name, description }) => (
          <div class="tech" key={name}>
            <Icon />
            <div class="descr">
              <h5>{name}</h5>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
