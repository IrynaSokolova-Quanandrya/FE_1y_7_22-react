
/**
 * 1 - Структура URL-рядка
 * 2 - npm install react-router-dom
 * 3 - BrowserRouter
 * 4 - Routes, Route
 * 5 - <Link> та <NavLink>
 * 6 - Хук useParams
 * 7 -  Вкладені маршрути
 * 8 - Індексні маршрути
 * 
 */

import { NavLink, Route, Routes } from "react-router-dom";
// http://localhost:3000/react-homework-template/
export const App = () => {

  const a = {
    a: 5,
    b:10
  }

  const b = {
    d: 5,
    b:15
  }

  const c = {
    ...b,
    ...a
    
  }

  {
   ...todo,
     completed: true
  }
{
  id: 15,
    text: 'hgjg',
     completed: true
  }



  return (
    <>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/gallery'>Gallery</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/gallery' element={<h1>Gallery page</h1>} />
        <Route path='/gallery/:cardId' element={ <h1>Card page</h1> } />
      </Routes>
      
    </>   
  );
};
