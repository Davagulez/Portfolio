import Code from "../assets/Code";
import Database from "../assets/Database";

const links = [
    'Inicio',
    'Sobre Mi',
    'Habilidades',
    'Projectos',
    'Contacto'
]

const Navbar = () => {
    return (
        <header>
            <section>
                < Database />
                <h1>David Lezcano</h1>
                < Code />
            </section>
            <button></button>
            <div>
                <nav>
                    {links.map(link => (
                        <a 
                        key={link}
                        href="">
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;