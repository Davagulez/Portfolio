import Navbar from "../screens/Navbar";

const PageLayout = ({children}) => {
    return (
        <>
            < Navbar />
            <main>
                {children}
            </main>
            <footer>
                <p>aca va un icono</p>
                <p> © 2023 - Diseñado y creado por David Lezcano</p>
            </footer>
        </>
    )
}

export default PageLayout;