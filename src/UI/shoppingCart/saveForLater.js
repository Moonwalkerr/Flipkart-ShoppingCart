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
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#2874f0",
    textDecoration: "underline",
    fontSize: 23,
  },
}));

const SaveForLater = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const saved = useContext(AppContext).saved[0];
  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>
        Saved For Later <FavoriteIcon />
      </h3>
      <div className={classes.cart}>
        {saved.length > 0 ? (
          saved.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={true}
              removeFrom="wishList"
            />
          ))
        ) : (
          <h2>No Items</h2>
        )}
      </div>
    </div>
  );
};

export default SaveForLater;
