import About from "./AboutPage";
import AskQuestionPage from "./AskQuestionPage";

import CategoryPage from "./CategoryPage";
import Contact from "./ContactPage";
import HomePage from "./HomePage";
import InformationPage from "./InformationPage";
import NotFoundPage from "./NotFoundPage";
import ProductsPage from "./ProductsPage";


export const routes = [
  { id: 1, path: "/", element: <HomePage /> , name:"ГЛАВНАЯ" },
  { id: 2, path: "/category", element: <CategoryPage />,name:"КАТАЛОГ" },
  { id: 3, path: "/products", element: <ProductsPage />,name:"КАТАЛОГ" },
  { id: 4, path: "*", element: <NotFoundPage />,name:"не найдено" },
  { id: 5, path: "/ask-question", element: <AskQuestionPage />,name:"ЗАКАЗАТЬ ЗВОНОК" },
  {id:6,path:"/about",element:<About/>,name:"О КОМПАНИИ"},
  {id:7,path:"/info" ,element:<InformationPage/>,name:"ИНФОРМАЦИЯ"},
  {id:8,path:"/contacts", element:<Contact/> ,name:"КОНТАКТЫ"},

];
