import About from "./AboutPage";
import AskQuestionPage from "./AskQuestionPage";
import CategoryPage from "./CategoryPage";
import Contact from "./ContactPage";
import HomePage from "./HomePage";
import InformationPage from "./InformationPage";
import NotFoundPage from "./NotFoundPage";
import ProductsPage from "./ProductsPage";

export const routes = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/category", element: <CategoryPage /> },
  { id: 3, path: "/products", element: <ProductsPage /> },
  { id: 4, path: "*", element: <NotFoundPage /> },
  { id: 5, path: "/ask-question", element: <AskQuestionPage /> },
  {id:6,path:"/about",element:<About/>},
  {id:7,path:"/info" ,element:<InformationPage/>},
  {id:8,path:"/contacts", element:<Contact/>}
];
