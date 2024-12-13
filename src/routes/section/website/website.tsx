import { component$ } from '@builder.io/qwik';

// Fluent emoji
import Globe from '/public/media/fluent/globe_with_meridians_color.svg?jsx';

// Website preview
import Malala from '/public/media/bg-proj/malala.webp?jsx';
import Vacances from '/public/media/bg-proj/malala.webp?jsx';
import Real from '/public/media/bg-proj/malala.webp?jsx';

export default component$(() => {
    const websites = [
        {   
            Image: Malala, 
            name: 'Malala Evasion', 
            description: 'Markup Language',
            tech: ['html', 'sass', 'js'],
            link: 'web.axel.com'
        },
        {   
            Image: Vacances, 
            name: 'Vacances Nosy-Be Tour', 
            description: 'Markup Language',
            tech: ['react', 'sass'],
            link: 'web.axel.com'
        },
        {   
            Image: Real, 
            name: 'Real mission movement', 
            description: 'Markup Language',
            tech: ['html', 'sass', 'js'],
            link: 'web.axel.com'
        },
    ];
      
    return (
        <section id="website" class="container">
            <div class="title">
                <h3>Websites I worked on</h3>
                <Globe />
            </div>
            <div class="website">
                {websites.map(({ Image, name, description, tech, link }) => (
                    <div class="card">
                        <a href={link} class="illustration">
                            <Image />
                            <ul>
                                {tech.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </a>
                        <div class="infos">
                            <h5>{name}</h5>
                            <p>{description}</p>
                        </div>
                        <a href={link}>Visit website</a>
                    </div>
                ))}
            </div>
        </section>
    );
});
