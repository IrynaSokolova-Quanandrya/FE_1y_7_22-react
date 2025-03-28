import HomePage from "pages/HomePage";
import Layout from "pages/LayoutPage";
import { lazy } from "react";
import { Route, Routes} from "react-router-dom";

const GalleryPage = lazy(()=>import('../pages/GalleryPage'))
const CardPage = lazy(()=>import('../pages/CardPage'))

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
