import { makeStyles } from "@material-ui/core/styles";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: 15,
    display: "flex",
    flexDirection: "column",
    height: "35vh",
    width: "24vw",
    boxShadow: "1px 1px 3px 3px rgba(0,0,0,0.1)",
  },
  productImg: {
    marginBottom: theme.spacing(1.2),
    objectFit: "contain",
    height: "25vh",
  },
}));

const ProductCard = ({ product }) => {
  // fetching classes from useStyles()
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.productImg} src={product.imageURL} alt="" />
      <h3>{product.name}</h3>
      <span className="price"> ₹ {product.price}</span>
    </div>
  );
};

export default ProductCard;
