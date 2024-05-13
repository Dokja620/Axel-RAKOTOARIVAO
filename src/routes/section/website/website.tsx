import { component$, $ } from '@builder.io/qwik';

interface Slide {
  className: string;
  title: string;
  description: string;
}

export default component$(() => {
  const slides: Slide[] = [
    { className: 'superman', title: 'Superman', description: 'The Man of Steel from Krypton.' },
    { className: 'malala', title: 'Malala Evasion', description: 'Advocate for girls\' education and the youngest Nobel Prize laureate.' },
    { className: 'vacances', title: 'Vacances Nosy Be Tour', description: 'Enjoying the holiday season on a sunny beach.' },
    { className: 'batman', title: 'Batman', description: 'The Dark Knight of Gotham City.' },
    { className: 'panther', title: 'Black Panther', description: 'King of Wakanda and a member of the Avengers.' }
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
