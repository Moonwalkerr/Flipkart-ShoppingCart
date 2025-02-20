import { Icon, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import FavoriteIcon from "@material-ui/icons/Favorite";
import db from "../../data/db.json";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: 15,
    display: "flex",
    flexDirection: "column",
    height: "38vh",
    width: "26vw",
    boxShadow: "1px 1px 3px 3px rgba(0,0,0,0.1)",
  },
  productImg: {
    marginBottom: theme.spacing(1.2),
    objectFit: "contain",
    height: "25vh",
  },
  prod: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prodName: {
    fontWeight: "400",
  },
  productDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 18,
  },
  prodRating: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26A541",
    width: 50,
    padding: "1px 5px",
    textAlign: "center",
    borderRadius: 10,
    color: "#fafafafa",
  },
  starIcon: {
    color: "#fafafafa",
  },
  cart: {
    fontSize: 14,
    padding: 6,
    letterSpacing: 1,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "#FF9F00",
    color: "#fafafafa",
    "&:hover": {
      backgroundColor: "#FF9F00",
      color: "#fafafafa",
    },
  },
}));

const ProductCard = ({ product, cart, removeFrom }) => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const [cartData, setCartData] = useContext(AppContext).cartData;
  const [saved, setSavedtData] = useContext(AppContext).saved;

  // add to cart handler
  const updateCart = (id, fromSaved) => {
    cartData.push(db[id]);
    setCartData(cartData);
    if (fromSaved) {
      let newsaved = saved.filter((data) => data.id !== id);
      setSavedtData(newsaved);
    }
    alert("Added to cart");
  };

  // Saved data handler
  const addToSaved = (id) => {
    saved.push(db[id]);
    setSavedtData(saved);
    let newCartData = cartData.filter((data) => data.id !== id);
    setCartData(newCartData);
    alert("Added to Saved Items");
  };

  const handleRemove = (id) => {
    if (removeFrom === "cart") {
      let newCartData = cartData.filter((data) => data.id !== id);
      setCartData(newCartData);
    } else {
      let newsaved = saved.filter((data) => data.id !== id);
      setSavedtData(newsaved);
    }
  };
  return (
    <div className={classes.root}>
      <img className={classes.productImg} src={product.imageURL} alt="" />
      <div className={classes.prod}>
        <p className={classes.prodName}>{product.name}</p>
        <p className={classes.prodRating}>
          {product.rating}
          <Icon className={classes.starIcon}>
            <StarIcon />
          </Icon>
        </p>
      </div>
      <div className={classes.productDetails}>
        <span className={classes.productPrice}> ₹ {product.price}</span>
        {removeFrom && (
          <IconButton onClick={() => handleRemove(product.id)}>
            {removeFrom === "cart" ? (
              <RemoveShoppingCartIcon />
            ) : (
              <DeleteOutlineIcon />
            )}
          </IconButton>
        )}
        {cart ? (
          <IconButton
            onClick={() => addToSaved(product.id)}
            className={classes.wishlist}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={
              cart
                ? () => updateCart(product.id)
                : () => updateCart(product.id, true)
            }
            className={classes.cart}
          >
            <ShoppingCartIcon /> <span>Add to cart</span>
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
