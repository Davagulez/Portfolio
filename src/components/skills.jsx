import React from 'react'
import {FaJs,FaHtml5,FaReact,FaCss3Alt,FaNodeJs} from 'react-icons/fa';
import {SiExpress,SiMysql} from 'react-icons/si'

export default function skills() {
  return (
    <>
    <section>
      <h2>Skills: </h2>
      <article>
        <FaJs/>
        <p>JavaScript</p>
      </article>
      <article>
        <FaHtml5/>
        <p>HTML</p>
      </article>
      <article>
        <FaReact/>
        <p>React</p>
      </article>
      <article>
        <FaCss3Alt/>
        <p>CSS</p>
      </article>
      <article>
        <SiExpress/>
        <p>Express</p>
      </article>
      <article>
        <FaNodeJs/>
        <p>Node Js</p>
      </article>
      <article>
        <SiMysql/>
        <p>MySql</p>
      </article>
    </section>
    <p>más habilidades en el futuro ...</p>
    </>
  )
}
