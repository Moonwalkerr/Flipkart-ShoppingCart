import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import ProductCard from "../prodList/product";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: 10,
  },
  cart: {
    width: "100%",
    margin: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: 10,
  },
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#2874f0",
    textDecoration: "underline",
    fontSize: 23,
  },
}));

const ShoppingCart = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const cartData = useContext(AppContext).cartData[0];
  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>
        My cart <ShoppingCartIcon />
      </h3>
      <div className={classes.cart}>
        {cartData.length > 0 ? (
          cartData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={true}
              removeFrom="cart"
            />
          ))
        ) : (
          <h2>No Items</h2>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
