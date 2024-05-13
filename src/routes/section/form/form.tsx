import { component$ } from '@builder.io/qwik';

// Fith section | wanna talk ?

export default component$(() => {
    return (
        <section id="form">
            <form action="">
                <div>
                    <input type="text" placeholder="name"/>
                </div>
                <div>
                    <input type="text" placeholder="email"/>
                </div>
                <div>
                    <input type="text" placeholder="message"/>
                </div>

                <button>Envoyer</button>
            </form>
        </section>
    );
});