import { makeStyles } from "@material-ui/core/styles";
import FilterDrawer from "./filterDrawer";
import ProductCard from "./productCard";
import { useContext } from "react";
import { AppContext } from "../../context/context";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  dashboard: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  root: {
    flex: 0.95,
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
    <div className={classes.dashboard}>
      <FilterDrawer />
      <div className={classes.root}>
        {displayData.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProdListGrid;
