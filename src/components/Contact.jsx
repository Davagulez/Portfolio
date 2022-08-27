import React from 'react'

export default function Contact() {
  return (
    <>
    <section>
        <h2>Contacto</h2>
        <article>
            <form action="https://formsubmit.co/ee6e1e551d95dc19b9b31dc258bf8b36" method="POST">
              <label htmlFor="name"></label>
              <input type="text" name='name'/>
              <label htmlFor="email"></label>
              <input type="text" name='email'/>
              <button type="submit">Enviar</button>
            </form>

        </article>
    </section>
    </>
  )
}
