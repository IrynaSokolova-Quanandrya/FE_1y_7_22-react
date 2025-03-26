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
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
        </>
    )
}
export default Layout