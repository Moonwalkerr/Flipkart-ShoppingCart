import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./product";
import { useContext } from "react";
import { AppContext } from "../../context/context";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: 10,
  },
  productImg: {
    marginBottom: theme.spacing(1.2),
    objectFit: "contain",
    height: "25vh",
  },
}));

const ProdListGrid = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const displayData = useContext(AppContext).displayData[0];
  return (
    <div className={classes.root}>
      {displayData.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProdListGrid;
