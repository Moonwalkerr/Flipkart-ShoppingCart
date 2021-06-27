import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ShoppingCart = () => {
  // fetching classes from useStyles()
  const classes = useStyles();

  return <div className={classes.root}>ShoppingCart</div>;
};

export default ShoppingCart;
