import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: 15,
    display: "flex",
    flexDirection: "column",
    height: "36vh",
    width: "24vw",
    boxShadow: "1px 1px 3px 3px rgba(0,0,0,0.1)",
  },
  productImg: {
    marginBottom: theme.spacing(1.2),
    objectFit: "contain",
    height: "25vh",
  },
  prodName: {
    fontWeight: "400",
  },
  productDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 18,
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

const ProductCard = ({ product }) => {
  // fetching classes from useStyles()
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.productImg} src={product.imageURL} alt="" />
      <p className={classes.prodName}>{product.name}</p>
      <div className={classes.productDetails}>
        <span className={classes.productPrice}> ₹ {product.price}</span>
        <IconButton className={classes.cart}>
          <ShoppingCartIcon /> <span>Add to cart</span>
        </IconButton>
      </div>
    </div>
  );
};

export default ProductCard;
