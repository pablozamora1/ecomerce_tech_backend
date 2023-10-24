import { CartWidget } from "../../common/cartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div
        style={{
          width: "100px",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h4>Compumundo Hipermegared</h4>
          <img
            src="https://res.cloudinary.com/dbgdadeox/image/upload/v1686532935/imagenes%20ecomerce%20react/homeroSimpsons_m49gox.jpg"
            style={{
              width: "100px",
            }}
          />
        </Link>
      </div>

      <ul>
        <Link to="/">Todos</Link>
        <Link to="/category/PC_escritorio">PCs De Escritorio</Link>
        <Link to="/category/notebook">Noteboks</Link>
        <Link to="/category/placaVideo">Placas de Videos</Link>
        <Link to="/category/monitor">Monitores</Link>
      </ul>
      <div>
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};
