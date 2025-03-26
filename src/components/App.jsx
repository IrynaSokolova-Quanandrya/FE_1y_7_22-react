
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

import CardPage from "pages/CardPage";
import GalleryPage from "pages/GalleryPage";
import HomePage from "pages/HomePage";
import Layout from "pages/LayoutPage";
import { NavLink, Route, Routes } from "react-router-dom";
// http://localhost:3000/react-homework-template/
export const App = () => {
  return (
    <>
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
