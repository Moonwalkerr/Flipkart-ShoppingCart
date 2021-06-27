import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./product";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: 10,
  },
}));

const ProdListGrid = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  const displayData = useContext(AppContext).displayData[0];
  return (
    <div className={classes.root}>
      {displayData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProdListGrid;
