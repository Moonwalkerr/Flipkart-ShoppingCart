import { Icon, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import FavoriteIcon from "@material-ui/icons/Favorite";
import db from "../../data/db.json";

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

const ProductCard = ({ product, cart }) => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const [cartData, setCartData] = useContext(AppContext).cartData;
  const [wishListData, setwishListData] = useContext(AppContext).wishListData;

  // add to cart handler
  const updateCart = (id) => {
    cartData.push(db[id]);
    setCartData(cartData);
    alert("Added to cart");
  };

  // wishlist data handler
  const addToWishList = (id) => {
    wishListData.push(db[id]);
    setwishListData(wishListData);
    alert("Added to Wishlist");
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
        {cart ? (
          <IconButton
            onClick={() => addToWishList(product.id)}
            className={classes.wishlist}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => updateCart(product.id)}
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
