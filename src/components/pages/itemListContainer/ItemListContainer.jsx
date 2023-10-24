import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import Louder from "../../common/louder/Louder";



export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const filteredProducts = products.filter(
      (products) => products.category === categoryName
    );

    const tarea = new Promise((res) => {
      setTimeout(() => {
        res(categoryName ? filteredProducts : products);
      }, 500);

      // rejet(" la promesa salio mal");
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("catch: ", err);
      });
  }, [categoryName]);

  if (items.length ===0 ) {
    return (
      <div
      >
        <Louder/>
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
