import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const cardsList = [{
  "name": "card1",
  "href": "1"
},{
  "name": "card2",
  "href": "2"
},{
  "name": "card3",
  "href": "3"
},{
  "name": "card4",
  "href": "4"
}]

function GalleryPage() {
  const [cards, setCards] = useState(cardsList)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') ?? ''
  const location = useLocation()//http://localhost:3000/react-homework-template/gallery /gallery?query=2

  console.log(location);

  const updateQueryString = (e) => {
        if (e.target.value !== '') {
          return  setSearchParams({query: e.target.value})
        }
        setSearchParams({})
    }

    const visibleCards = cards.filter(({name})=>name.includes(query))
  
  return <>
    <h1>Gallery Page</h1>
    <input type="text" value={query} onChange={updateQueryString} />
    <ul>
      {visibleCards.map(card => <li key={card.href} >
        <Link state={{ from: location }} to={`/gallery/${card.href}`}>{card.name}
        </Link>
      </li>)}
    </ul>
    
  </>
}

export default GalleryPage