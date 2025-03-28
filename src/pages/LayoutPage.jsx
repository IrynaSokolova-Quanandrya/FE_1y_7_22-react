import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
             <nav>
                <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
                </ul>
            </nav>
            </header>
            <main>
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
             </Suspense>
            </main>
            <footer>
                Footer
            </footer>
        </>
    )
}
export default Layout