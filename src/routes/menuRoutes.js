import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import FormFormik from "../components/pages/formFormik/FormFormik";

import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "formik",
    path: "/formFormik",
    Element: FormFormik,
  },
];
