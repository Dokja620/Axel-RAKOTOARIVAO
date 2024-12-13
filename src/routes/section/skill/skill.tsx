import { component$ } from '@builder.io/qwik';

// Fluent emoji
import Laptop from '/public/media/fluent/desktop_computer_color.svg?jsx';

// Techs icons
import Html from '/public/media/techs/icons--html.svg?jsx';
import Sass from '/public/media/techs/icons--sass.svg?jsx';
import Typescript from '/public/media/techs/icons--typescript.svg?jsx';
import Git from '/public/media/techs/icons--git.svg?jsx';
import Bun from '/public/media/techs/icons--bun-dark.svg?jsx';
import Svelte from '/public/media/techs/icons--svelte.svg?jsx';
import React from '/public/media/techs/icons--react-dark.svg?jsx';
import Supabase from '/public/media/techs/icons--supabase-dark.svg?jsx';
import Cloudflare from '/public/media/techs/icons--cloudflare-dark.svg?jsx';

// Tech stack items
const techStack = [
  { Icon: Html, name: 'HTML', description: 'Markup Language' },
  { Icon: Sass, name: 'Sass', description: 'CSS Preprocessor' },
  { Icon: Typescript, name: 'TypeScript', description: 'Typed JavaScript' },
  { Icon: Git, name: 'Git', description: 'Version Control' },
  { Icon: Bun, name: 'Bun', description: 'JS Runtime' },
  { Icon: Svelte, name: 'Svelte', description: 'Reactive Framework' },
  { Icon: React, name: 'React', description: 'Dynamic Library' },
  { Icon: React, name: 'Qwik', description: 'Dynamic Library' },
  { Icon: React, name: 'VueJS', description: 'Dynamic Library' },
  { Icon: React, name: 'Alpine', description: 'Dynamic Library' },
  { Icon: Supabase, name: 'Supbase', description: 'Backend Platform' },
  { Icon: React, name: 'PocketBase', description: 'Backend Platform' },
  { Icon: React, name: 'Shadcn', description: 'Backend Platform' },
  { Icon: Cloudflare, name: 'Cloudflare', description: 'Edge Network' },
];

export default component$(() => {
  return (
    <section id="skill" class="container">
      <div class="title">
        <h3>My Tech Stack</h3>
        <Laptop />
      </div>
      <div class="techno">
        {techStack.map(({ Icon, name, description }) => (
          <div class="tech">
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
