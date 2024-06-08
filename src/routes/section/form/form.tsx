import { component$ } from '@builder.io/qwik';

import github from '/public/media/social/github.svg';
import linkedin from '/public/media/social/linkedin.svg';
import whatsapp from '/public/media/social/whatsapp.svg';

import mail from '/public/media/social/mail.svg';
import phone from '/public/media/social/phone.svg';
import location from '/public/media/social/location.svg';

// Fluent emoji
import thought from '/public/media/fluent/thought_balloon_flat.svg';

// Fith section | wanna talk ?

export default component$(() => {
    return (
        <section id="form" class="container">
            <div class="contact">
                <h2>Laissez-moi transformer vos idées en réalité digitale! <span class="emoji"><img src={thought} alt="sparkles face fluent emoji icon" width={50} height={50}/></span></h2>

                <div class="details">
                    <div>
                        <span><img src={mail} alt="icon email" width={30} height={30}/></span>
                        <a href="mailto:axeldiaryrakotoarivao@gmail.com">axeldiaryrakotoarivao@gmail.com</a>
                    </div>
                    <div>
                        <span><img src={phone} alt="icon phone" width={30} height={30}/></span> 
                        <a href="tel:+261325508200">+261 32 55 082 00</a>
                    </div>
                    <div>
                        <span><img src={location} alt="icon location" width={30} height={25}/></span>
                        <p>Madagascar, Antananarivo, Andrahavohangy</p>
                    </div>
                </div>

                <div class="social-media">
                    <a href="https://github.com/Dokja620" target="_blank"><img src={github} alt="icon github" width={35} height={35}/></a>
                    <a href="https://www.linkedin.com/in/diary-axel-rakotoarivao-356532268/" target="_blank"><img src={linkedin} alt="icon linkedin" width={35} height={35}/></a>
                    <a href="https://api.whatsapp.com/send?phone=261334144813" target="_blank"><img src={whatsapp} alt="icon whatsapp" width={35} height={35}/></a>
                </div>
            </div>
            <div class="form">
                <form action="">
                    <div>
                        <label for="name">Nom</label>
                        <input id="name" type="text" placeholder="Jenna" required/>
                    </div>
                    <div>
                        <label for="name">Adresse e-mail</label>
                        <input id="email" type="email" placeholder="votremail@gmail.com" required/>
                    </div>
                    <div>
                        <label for="message">Votre message</label>
                        <textarea name="message" id="message" rows={10} placeholder='...'></textarea>
                    </div>

                    <button>Envoyer</button>
                </form>
            </div>
        </section>
    );
});