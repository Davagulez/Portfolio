import React from 'react'
import {CgArrowRightR} from 'react-icons/cg';
import {VscGithub} from 'react-icons/vsc';


export default function proyects() {
  return (
    <>
    <section>
        <h2>Mis Proyectos</h2>
        <article>
            <img src="https://www.google.com/search?q=ecommerce&sxsrf=ALiCzsbVXn8SsCsfWuwmKdF7_-KZ5Swcdw:1661354876472&source=lnms&tbm=isch&sa=X&ved=2ahUKEwif1oea5d_5AhWVrpUCHexmDagQ_AUoAXoECAMQAw&biw=1366&bih=629&dpr=1#imgrc=RA_sHxjg3_ZuBM" alt="ecommerce" srcset="" />
            <h3>Ecommerce</h3>
            <p>Descripción</p>
            <button>
                <a href=""><CgArrowRightR/> Sitio</a>
            </button>
            <button>
                <a href=""><VscGithub/> Repositorio</a>
            </button>   
        </article>
    </section>
    </> 
  )
}
