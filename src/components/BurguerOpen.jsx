import React from 'react'

export default function BurguerOpen() {
  return (
    <>
    <ul className="listaNav">
                <li><a href="Inicio">Inicio</a></li>
                <li><a href="SobreMi">Sobre Mi</a></li>
                <li><a href="Habilidades">Habilidades</a></li>
                <li><a href="Proyectos">Proyectos</a></li>
                <li><a href="Contacto">Contacto</a></li>
                <li>
                    <button className="cvNav">
                        descargar CV
                    </button>
                </li>
            </ul>
    </>
  )
}
