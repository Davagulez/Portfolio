import React from 'react'
import Programmer from '../assets/images/undraw_programming_re_kg9v.svg'

export default function principalComponent() {
  return (
    <>
        <section>
            <p>Hola! mi nombre es</p>
            <h1>David Lezcano</h1>
            <p>Programador Web Full Stack</p>
            <p>Fotográfo</p>
            <p>en Camino a ser Diseñador UX</p>
            <img src={Programmer} alt="Programmer" srcset="" width={400} download/>
        </section>
    </>
  )
}
