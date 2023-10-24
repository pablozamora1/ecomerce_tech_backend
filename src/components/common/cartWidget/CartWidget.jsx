import { Badge } from "@mui/material";
import { useContext } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CartContext } from "../../../context/CartContex";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let TotalItems = getTotalItems()
  return (
    <div>
      <Badge badgeContent={TotalItems} showZero color="primary">
        <MdShoppingCartCheckout color="black" size="40px" />
      </Badge>
    </div>
  );
};

