import Code from "../assets/Code";
import Database from "../assets/Database";
import './Navbar.css'

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
            <section className="header_logo">
                < Database />
                <h1 className="logo_title">David Lezcano</h1>
                < Code />
            </section>
            <button className="header_menu"></button>
            <nav className="menu_list">
                {links.map(link => (
                    <a
                        key={link}
                        href="">
                        {link}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Navbar;