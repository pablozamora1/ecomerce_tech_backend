import CardDetail from "../../common/cardDetail/CardDetail";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ productSelected, onAdd, cantidad }) => {

  
  return (
    <div>
      <div className={styles.card}>
        <CardDetail
          productSelected={productSelected}
          cantidad={cantidad}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
