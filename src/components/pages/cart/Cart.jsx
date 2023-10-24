import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, fnClearCart, fndeleteById, total, TotalItems }) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-products">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-product">
                <img src={item.img} alt="" />
                <div className="cart-product-info">
                  <Typography variant="body1" color="text.secondary">
                    Modelo:
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Precio: ${item.price}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Unidades:
                    {item.quantity}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  onClick={() => fndeleteById(item.id)}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <Typography variant="h4" color="text.secondary">
            Descripcion del carrito
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cantidad de productos: {TotalItems}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Precio total: ${total}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cantidad de productos: {TotalItems}
          </Typography>

          <Typography variant="h4" color="text.secondary">
            El total del carrito es ${total}
          </Typography>

          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={fnClearCart} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
