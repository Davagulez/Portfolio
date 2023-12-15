import Navbar from "../screens/Navbar";
import CodeEnd from "../assets/CodeEnd";

const PageLayout = ({children}) => {
    return (
        <>
            < Navbar />
            <main>
                {children}
            </main>
            <footer>
                < CodeEnd />
                <p> © 2023 - Diseñado y creado por David Lezcano</p>
            </footer>
        </>
    )
}

export default PageLayout;