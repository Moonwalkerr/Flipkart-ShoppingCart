import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ProductCard from "../prodList/product";

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
}));

const Wishlist = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const wishListData = useContext(AppContext).wishListData[0];
  return (
    <div className={classes.root}>
      <h3>
        My Wishlist <FavoriteIcon />{" "}
      </h3>
      <div className={classes.cart}>
        {wishListData.length > 0 ? (
          wishListData.map((product) => (
            <ProductCard key={product.id} product={product} cart={true} />
          ))
        ) : (
          <h2>No Items</h2>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
