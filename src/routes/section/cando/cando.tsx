import { component$ } from '@builder.io/qwik';

// Fluent emoji
import Gear from '/public/media/fluent/gear_color.svg?jsx';

// Card icons
import App from '/public/media/skill/app.svg?jsx';
import Design from '/public/media/skill/design.svg?jsx';
import Front from '/public/media/skill/front.svg?jsx';
import Globe from '/public/media/skill/globe.svg?jsx';
import Integration from '/public/media/skill/integration.svg?jsx';
import Remake from '/public/media/skill/remake.svg?jsx';

const Capabilities = [
    { Icon: Design, name: 'UI/UX Design', description: 'Creating user-friendly, visually appealing interfaces focused on usability, accessibility, and an engaging user experience.' },
    { Icon: Front, name: 'Frontend Development', description: 'Developing the client-side of websites using Svelte, Sass and Shadcn for interactive, responsive, and visually appealing experiences.' },
    { Icon: Integration, name: 'Website Integration', description: 'Integrating various backend services, APIs, and third-party tools to ensure smooth communication and functionality across web applications.' },
    { Icon: Remake, name: 'Optimisation and Redesign', description: 'Enhancing website visibility with redesigns, SEO strategies, keyword optimization, quality content, and backlink building for better search rankings.' },
    { Icon: Globe, name: 'Website Development', description: 'Creating websites, dynamic static sites, and eCommerce solutions with responsiveness and seamless cross-device compatibility.' },
    { Icon: App, name: 'Web Application Development', description: 'Building interactive web applications that provide dynamic functionality, integrating client-side and server-side features for enhanced user experience.' },
];

export default component$(() => {
    return (
        <section id="cando" class="container">
            <div class="title">
                <h3>My Core Capabilities</h3>
                <Gear/>
            </div>

            <div class="cores">
                {Capabilities.map(({ Icon, name, description }) => (
                    <div class="card">
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <Icon />
                    </div>
                ))}
            </div>
        </section>
    );
});