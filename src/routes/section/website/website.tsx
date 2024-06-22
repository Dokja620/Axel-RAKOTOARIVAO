import { component$, useStore, $ } from '@builder.io/qwik';
import link from "/media/link.svg";
import github from "/media/social/github.svg";

export default component$(() => {
    const state = useStore({ activeStep: 1 });

    const incrementStep = $(() => {
        state.activeStep = state.activeStep < 5 ? state.activeStep + 1 : 1;
    });

    const decrementStep = $(() => {
        state.activeStep = state.activeStep > 1 ? state.activeStep - 1 : 5;
    });

    const contents = [
        {
            title: 'Malala evasion',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis molestias excepturi pariatur sit incidunt voluptatum. Quae ullam voluptatibus aliquid labore voluptate laborum! Tempore saepe reprehenderit earum alias vitae magni?',
            location: 'Ohayo Dev & Design',
            project: '',
            link: 'aze.com',
            github: 'aze.com',
        },
        {
            title: 'Vacances Nosy Be Tour',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis molestias excepturi pariatur sit incidunt voluptatum. Quae ullam voluptatibus aliquid labore voluptate laborum! Tempore saepe reprehenderit earum alias vitae magni?',
            location: 'Ohayo Dev & Design',
            project: '',
            link: 'aze.com',
            github: 'aze.com',
        },
        {
            title: 'Batman',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis molestias excepturi pariatur sit incidunt voluptatum. Quae ullam voluptatibus aliquid labore voluptate laborum! Tempore saepe reprehenderit earum alias vitae magni?',
            location: 'SAYNA :',
            project: 'Projet Fil Rouge',
            link: 'aze.com',
            github: 'aze.com',
        },
        {
            title: 'Black Panther',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis molestias excepturi pariatur sit incidunt voluptatum. Quae ullam voluptatibus aliquid labore voluptate laborum! Tempore saepe reprehenderit earum alias vitae magni?',
            location: 'SAYNA :',
            project: 'Projet Fil Rouge - Evaluation',
            link: 'aze.com',
            github: 'aze.com',
        },
        {
            title: 'Superman',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis molestias excepturi pariatur sit incidunt voluptatum. Quae ullam voluptatibus aliquid labore voluptate laborum! Tempore saepe reprehenderit earum alias vitae magni?',
            location: 'SAYNA :',
            project: 'Evaluation finale Front End',
            link: 'aze.com',
            github: 'aze.com',
        },
    ];

    return (
        <section id="website" active-step={state.activeStep}>
            <div class="preview">
                {contents.map((content, index) => (
                    <div key={index} class="content" current-step={index + 1}>
                        <div class="infos">
                            <div class="title">
                                <h2>{content.title}</h2>
                                <p><span>{content.location}</span> {content.project}</p>
                            </div>
                            <div class="description">
                                <p>{content.description}</p>
                            </div>
                            <div class="links">
                                <a href={content.link} target="_blank">voir le site <span><img src={link} alt="redirecting to icon" width={20} height={20} /></span></a>
                                <a href={content.github} target="_blank">voir le repos <span><img src={github} alt="redirecting to icon" width={20} height={20} /></span></a>
                            </div>
                        </div>
                    </div>
                ))}
                <div class="navigate">
                    <button class="prev" onClick$={decrementStep}></button>
                    <button class="next" onClick$={incrementStep}></button>
                </div>
            </div>
        </section>
    );
});
