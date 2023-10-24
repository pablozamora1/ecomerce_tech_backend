import { useCount } from "../../Hooks/useCount";
import { Button, Container, Typography } from "@mui/material";

const ItemCount = ({ stock, initial =1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  

  return (
    <Container sx={{ display: "inline-flex" }}>
      <Container sx={{ display: "inline-flex", }}>
        <Button
          sx={{ height: 50 }}
          onClick={decrement}
          size="small"
          variant="contained"
        >
          -
        </Button>

        <Typography
          sx={{ height: 50, textAlign: "center", p: 1,}}
          color="text.primary"

        >
          {count}
        </Typography>
        <Button
          sx={{height: 50 }}
          onClick={increment}
          size="small"
          variant="contained"
        >
          +
        </Button>
      </Container>

      <Button
        sx={{ height: 50 }}
        onClick={() => onAdd(count)}
        size="small"
        variant="contained"
      >
      Agregar al Carrito
      </Button>
    </Container>
  );
};

export default ItemCount;
