
/**
 * 1 - useSearchParams:
 *      -get
 *      -setSearchParams
 *      -контрольований елемент input
 *      -записуємо {} якщо параметру намає
 *      -записуємо "" якщо інпут пустий
 * 2 - useLocation (location.state?.from ?? ''/cats) юзаєм Елвіса
 * 3 - useNavigate
 * 4 - useLocation
 * 4 - Lazy
 * 
 */

import { NavLink, Route, Routes } from "react-router-dom";
// http://localhost:3000/react-homework-template/
export const App = () => {

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
