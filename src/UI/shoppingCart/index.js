import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import ProductCard from "../prodList/product";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: 10,
  },
  productImg: {
    marginBottom: theme.spacing(1.2),
    objectFit: "contain",
    height: "25vh",
  },
}));

const ShoppingCart = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const [cartData, setCartData] = useContext(AppContext).cartData;
  return (
    <div className={classes.root}>
      {cartData.length > 0 ? (
        cartData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h2>No Items</h2>
      )}
    </div>
  );
};

export default ShoppingCart;
