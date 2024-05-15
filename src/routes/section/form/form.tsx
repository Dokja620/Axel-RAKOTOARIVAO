import { component$ } from '@builder.io/qwik';

import github from '/media/social/github.svg';
import linkedin from '/media/social/linkedin.svg';
import whatsapp from '/media/social/whatsapp.svg';

import mail from '/media/social/mail.svg';
import phone from '/media/social/phone.svg';
import location from '/media/social/location.svg';
// Fith section | wanna talk ?

export default component$(() => {
    return (
        <section id="form" class="container">
            <div class="contact">
                <h2>Laissez-moi transformer vos idées en réalité digitale! 💭</h2>

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
                    <span><img src={github} alt="icon github" width={35} height={35}/></span>
                    <span><img src={linkedin} alt="icon linkedin" width={35} height={35}/></span>
                    <span><img src={whatsapp} alt="icon whatsapp" width={35} height={35}/></span>
                </div>
            </div>
            <div class="form">
                <form action="">
                    <div>
                        <label for="name">Nom</label>
                        <input id="name" type="text" placeholder="Aon" required/>
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