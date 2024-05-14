import { component$, $ } from '@builder.io/qwik';
import github from '/media/social/github.svg';

interface Slide {
  className: string;
  title: string;
  subtitle: string;
  description: string;
}

export default component$(() => {
  const slides: Slide[] = [
    { className: 'superman', title: 'Superman', subtitle: "Site E-commerce", description: "Conception et développement d'un site réactif mettant en vedette Superman grâce à React JS. Intégration d'animations dynamiques et de fonctionnalités de filtrage pour une expérience utilisateur immersive. Navigation intuitive et une découverte aisée des produits." },
    // { className: 'ohayo', title: 'Ohayo Dev & Design', subtitle: "Site web d'entreprise", description: "Dans le projet Batman, j'ai développé un site web responsive, combinant HTML, CSS, JavaScript et TypeScript. Ce projet s'inscrit dans un parcours de formation où j'ai amélioré le design et ajouté des fonctionnalités interactives. J'ai respecté les spécifications du client et présenté le travail sur GitHub pour évaluation." },
    { className: 'malala', title: 'Malala Evasion', subtitle: "Site de réservation", description: "MalalaEvasion.com, appartenant à Malala Evasion à Nosy Be, propose diverses excursions telles que des tours complets de l'île et des visites des îlots voisins comme Nosy Komba, Nosy Tanikely, Nosy Iranja et Nosy Sakatia, ainsi que la réserve naturelle de Nosy Be. Les clients peuvent planifier et réserver en ligne en fonction de la disponibilité et du nombre de participants." },
    { className: 'vacances', title: 'Vacances Nosy Be Tour', subtitle: "Site de réservation", description: "Vacances Nosy-Be Tour, la plateforme en ligne de l'agence éponyme, simplifie l'organisation de séjours à Nosy-Be. Avec une sélection d'excursions soigneusement choisies sur l'île et ses environs, ainsi qu'une exploration du nord de Madagascar, les utilisateurs peuvent réserver facilement grâce à une interface intuitive. De plus, une boutique en ligne propose des produits artisanaux locaux."},
    { className: 'batman', title: 'Batman', subtitle: "Site vitrine avec un quiz", description: "Dans le projet Batman, j'ai développé un site web responsive, combinant HTML, CSS, JavaScript et TypeScript. Ce projet s'inscrit dans un parcours de formation où j'ai amélioré le design et ajouté des fonctionnalités interactives. J'ai respecté les spécifications du client et présenté le travail sur GitHub pour évaluation." },
    { className: 'panther', title: 'Black Panther', subtitle: "Site vitrine avec un quiz", description: "Avec précision et créativité, j'ai donné vie à l'univers de Black Panther dans un site web réactif. Des animations dynamiques et des quizinteractifs plongent les visiteurs dans le monde de T'Challa, tandis que des implémentations JavaScript et Canvas innovantes offrent une expérience numérique inoubliable, fidèle à la vision du client." }
    // { className: 'jenna', title: 'Jenna ANDRIANARISATA', subtitle: "Portfolio", description: "Avec précision et créativité, j'ai donné vie à l'univers de Black Panther dans un site web réactif. Des animations dynamiques et des quizinteractifs plongent les visiteurs dans le monde de T'Challa, tandis que des implémentations JavaScript et Canvas innovantes offrent une expérience numérique inoubliable, fidèle à la vision du client." }
  ];

  const handlePrevClick = $(() => {
    const slider = document.querySelector('.slider');
    if (slider) {
      const slides = document.querySelectorAll('.slides');
      slider.prepend(slides[slides.length - 1]);
    }
  });

  const handleNextClick = $(() => {
    const slider = document.querySelector('.slider');
    if (slider) {
      const slides = document.querySelectorAll('.slides');
      slider.appendChild(slides[0]);
    }
  });


  return (
    <section id="website">
      <div class="slider">
        {slides.map((slide, index) => (
          <div key={index} class={`slides ${slide.className}`}>
            <div class="slide-description">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <div class="slide-links">
                <a href="http://" target="_blank"><span class="p">voir le site</span></a>
                <a href="http://" target="_blank"><span><img src={github} alt="icon github" width={25} height={25}/></span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="slider-buttons">
        <span class="prev" onclick$={handlePrevClick}></span>
        <span class="next" onclick$={handleNextClick}></span>
      </div>
    </section>
  );
});
