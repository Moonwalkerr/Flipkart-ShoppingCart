import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F1F3F6",
    height: "100vh",
    display: "grid",
    placeItems: "center",
  },
  cart: {
    backgroundColor: "#FFFFFF",
    height: "90vh",
    width: "90vw",
    boxShadow: "1px 1px 1px 2px rgba(0, 0, 0,0.2)",
  },
}));

const ShoppingCart = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const [cartData, setCartData] = useContext(AppContext).cartData;
  return (
    <div className={classes.root}>
      <div className={classes.cart}>
        {cartData.length > 0 ? <h2>hi</h2> : <h2>No Items</h2>}
      </div>
    </div>
  );
};

export default ShoppingCart;
