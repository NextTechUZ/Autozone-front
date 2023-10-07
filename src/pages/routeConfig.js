import AskQuestionPage from "./AskQuestionPage";
import CatalogProduct from "./CatalogProductPage";
import CategoryPage from "./CategoryPage";
import ContactPage from "./ContactsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import ProductsPage from "./ProductsPage";

export const routes = [
  { id: 1, path: "/", element: <HomePage /> },
  { id: 2, path: "/category", element: <CategoryPage /> },
  { id: 3, path: "/products", element: <ProductsPage /> },
  { id: 5, path: "/ask-question", element: <AskQuestionPage /> },
  { id: 6, path: "/contacts", element: <ContactPage /> },
  { id: 7, path: "/catalog-product", element: <CatalogProduct /> },
  { id: 4, path: "*", element: <NotFoundPage /> },
];
