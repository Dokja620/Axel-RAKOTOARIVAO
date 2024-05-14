import { component$ } from '@builder.io/qwik';

// Fith section | wanna talk ?

export default component$(() => {
    return (
        <section id="form">
            <h2>Me contacter</h2>
            <form action="">
                <div>
                    <input type="text" placeholder="name" required/>
                </div>
                <div>
                    <input type="email" placeholder="email" required/>
                </div>
                <div>
                    <input type="text" placeholder="message" required/>
                </div>

                <button>Envoyer</button>
            </form>
        </section>
    );
});