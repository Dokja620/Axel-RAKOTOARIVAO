import { component$ } from "@builder.io/qwik";

import Github from "/public/media/social/social-github.svg?jsx";
import Linkedin from "/public/media/social/social-linkedin.svg?jsx";
import Whatsapp from "/public/media/social/social-whatsapp.svg?jsx";

import Mail from "/public/media/social/contact-mail.svg?jsx";
import Phone from "/public/media/social/contact-call.svg?jsx";
import Location from "/public/media/social/contact-location.svg?jsx";

// Fluent emoji
import Thought from "/public/media/fluent/thought_balloon_color.svg?jsx";

// Fith section | wanna talk ?

export default component$(() => {
  return (
    <section id="form" class="container">
      <div class="contact">
        <h2>
          Let me turn your ideas into digital reality! <Thought />
        </h2>

        <div class="details">
          <div class="contacts">
            <Mail />
            <a href="mailto:axeldiaryrakotoarivao@gmail.com">
              axeldiaryrakotoarivao@gmail.com
            </a>
          </div>
          <div class="contacts">
            <Phone />
            <a href="tel:+261325508200">+261 32 55 082 00</a>
          </div>
          <div class="contacts">
            <Location />
            <a href="https://maps.app.goo.gl/B8PGET7PTSLGgs7z7">
              Madagascar, Antananarivo, 101
            </a>
          </div>
        </div>

        <div class="social-media">
          <a
            href="https://github.com/Dokja620"
            target="_blank"
            data-name="Github"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/diary-axel-rakotoarivao-356532268/"
            target="_blank"
            data-name="Linkedin"
          >
            <Linkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=261334144813"
            target="_blank"
            data-name="Whatsapp"
          >
            <Whatsapp />
          </a>
        </div>
      </div>
      <div class="form">
        <form action="">
          <div>
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Jenna" required />
          </div>
          <div>
            <label for="name">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="votremail@gmail.com"
              required
            />
          </div>
          <div>
            <label for="message">Your message</label>
            <textarea
              name="message"
              id="message"
              rows={10}
              placeholder="..."
            ></textarea>
          </div>

          <button>Envoyer</button>
        </form>
      </div>
    </section>
  );
});
