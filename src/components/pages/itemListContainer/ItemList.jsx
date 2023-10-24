import ProductCard from "../../common/productCard/ProductCard";
import styles from "./ItemListContainer.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.cards}>
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemList;
