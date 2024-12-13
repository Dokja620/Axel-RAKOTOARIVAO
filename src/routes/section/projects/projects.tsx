import { component$ } from "@builder.io/qwik";

// Fluent emoji
import Files from "/public/media/fluent/card_file_box_color.svg?jsx";

// Website preview
import Malala from "/public/media/bg-proj/malala.webp?jsx";
import Vacances from "/public/media/bg-proj/malala.webp?jsx";
import Real from "/public/media/bg-proj/malala.webp?jsx";

export default component$(() => {
  const websites = [
    {
      Image: Malala,
      name: "Client Website",
      description:
        "Custom, high-performance websites designed to enhance clients' online presence.",
      count: 5,
      link: "web.axel.com",
    },
    {
      Image: Vacances,
      name: "SaaS Projects",
      description:
        "Scalable software solutions tailored for businesses, delivered as subscription-based platforms.",
      count: 6,
      link: "web.axel.com",
    },
    {
      Image: Real,
      name: "Other Projects",
      description:
        "Unique and innovative solutions demonstrating creativity and technical expertise.",
      count: 3,
      link: "web.axel.com",
    },
  ];

  return (
    <section id="projects" class="container">
      <div class="title">
        <h3>Projects I have been working on</h3>
        <Files />
      </div>
      <div class="project">
        {websites.map(({ Image, name, description, count, link }) => (
          <div class="card" key={name}>
            <a href={link} class="illustration">
              <Image />
              <ul>
                <li>Count</li>
                <li>0{count}</li>
              </ul>
            </a>
            <div class="infos">
              <h5>{name}</h5>
              <p>{description}</p>
            </div>
            <a href={link} class="see-more">
              See more +
            </a>
          </div>
        ))}
      </div>

      {/* // rectangles background */}
      <div class="patern">
        <div class="parent-box">
          <div class="box"></div>
        </div>
        <div class="parent-box">
          <div class="box"></div>
          <div class="box"></div>
        </div>
        <div class="parent-box">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
        <div class="parent-box">
          <div class="box"></div>
          <div class="box"></div>
        </div>
        <div class="parent-box">
          <div class="box"></div>
        </div>
      </div>
    </section>
  );
});
