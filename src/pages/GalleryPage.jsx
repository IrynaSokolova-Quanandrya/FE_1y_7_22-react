import { Link } from "react-router-dom"
const cards = [{
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
  return <>
    <h1>Gallery Page</h1>
    {cards.map(x=><p key={x.id}><Link to={`/gallery/${x.href}`}>{x.name}</Link></p>)}
  </>
}

export default GalleryPage