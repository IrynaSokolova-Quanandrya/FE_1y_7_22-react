import { useRef } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const CardPage = () => {
    const { cardId } = useParams()   
    const location = useLocation()
    const goBackLinkRef = useRef(location.state?.from ?? '/gallery')

    console.log(goBackLinkRef);
    
    return (
        <>          
            <h1>Card page - {cardId}</h1>  
            <Link to={goBackLinkRef.current}>На сторінку галереї</Link>
        <ul>
                <li><Link to='./author'>Про автора</Link></li>
                <li><Link to='./more'>Додаткові характеристики</Link></li>
            </ul>
            <Outlet/>
        </>
    )
}
export default CardPage