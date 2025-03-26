import { Link, Outlet, useParams } from "react-router-dom"

const CardPage = () => {
    const {cardId} = useParams()
    return (
        <>          
            <h1>Card page - {cardId}</h1>              
        <ul>
                <li><Link to='./author'>Про автора</Link></li>
                <li><Link to='./more'>Додаткові характеристики</Link></li>
            </ul>
            <Outlet/>
        </>
    )
}
export default CardPage