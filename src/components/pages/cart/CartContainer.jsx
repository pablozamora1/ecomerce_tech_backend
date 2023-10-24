import { useContext } from "react";
import { CartContext } from "../../../context/CartContex";
import Swal from "sweetalert2";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice, getTotalItems } =
    useContext(CartContext);

    let total = getTotalPrice()
    let TotalItems = getTotalItems();

    

  const fnClearCart = () => {

    Swal.fire({
      title: "Quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "SI",
      denyButtonText: "NO",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Listo! se limpio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se limpio el carrito", "", "info");
      }
    });
  }

  const fndeleteById = (id) => {
    deleteById(id);
    Swal.fire({
      position: "center",
      icon: "",
      title: "Listo! Eliminaste el producto",
      showConfirmButton: false,
      timer: 5000,
    });
  }
  

  return (
    <div>
      <Cart
        total={total}
        fnClearCart={fnClearCart}
        cart={cart}
        fndeleteById={fndeleteById}
        TotalItems={TotalItems}
      />
    </div>
  );
};
export default CartContainer;
