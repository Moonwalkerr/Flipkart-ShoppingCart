import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: 10,
  },
}));

const TotalPrice = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const cartData = useContext(AppContext).cartData[0];

  let price = 0;
  const totalPrice = cartData.map((data) => price + data.price);
  return <h2 className={classes.root}>Total Price : {totalPrice}</h2>;
};

export default TotalPrice;
