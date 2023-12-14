import Navigation from "./Navigation";

const PageLayout = ({children}) => {
    return (
        <>
            < Navigation />
            <main>
                {children}
            </main>
        </>
    )
}

export default PageLayout;