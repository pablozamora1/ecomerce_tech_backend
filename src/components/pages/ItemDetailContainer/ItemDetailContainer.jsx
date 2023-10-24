import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContex";
import Swal from "sweetalert2";



const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  
  const { AddCart, getTotalQuantityById } = useContext(CartContext);

  const {id} = useParams()

  const cantidad = getTotalQuantityById(id)
  
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    AddCart(data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Listo! Agregaste el producto al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };


  useEffect(() => {
    let producFind = products.find((product) => product.id === +id);
    const getProduct = new Promise((res,) => {
      setTimeout(() => {
        res(producFind);
      }, 500);
        
    });

    getProduct
    
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);


 
  return (
    <div>
      <ItemDetail
        productSelected={productSelected}
        cantidad={cantidad}
        AddCart={AddCart}
        onAdd={onAdd}
      />
    </div>
  );
};

export default ItemDetailContainer;
