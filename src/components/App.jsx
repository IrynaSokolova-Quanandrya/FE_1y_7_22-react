
/**
 * 2 - useSearchParams:
 *      -get+
 *      -setSearchParams+
 *      -контрольований елемент input+
 *      -записуємо {} якщо параметру намає+
 *      -записуємо "" якщо інпут пустий+
 * 3 - useLocation (location.state?.from ?? ''/cats) юзаєм Елвіса
 * 4 - useNavigate+
 * 5 - Lazy+
 * 
 */

import CardPage from "pages/CardPage";
import GalleryPage from "pages/GalleryPage";
import HomePage from "pages/HomePage";
import Layout from "pages/LayoutPage";
import { NavLink, Route, Routes, useSearchParams } from "react-router-dom";
// http://localhost:3000/react-homework-template/
export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')


  return (
    <>
      <input type="text" value={query} onChange={(e) => {
        setSearchParams({
          query:
            e.currentTarget.value
        })
      }} />
      {/* <button type="button" onClick={()=>{setSearchParams({q:5})}}>send</button> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path='gallery' element={<GalleryPage/>} />
        <Route path='gallery/:cardId' element={<CardPage />}>
            <Route path="author" element={<h1>Інформація про автора</h1>} />
            <Route path="more" element={<h1>Додаткова інформація</h1>} />
          </Route>
        </Route>
      </Routes>      
    </>   
  );
};
