import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton, Button } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import CustomizedInputBase from "./searchInput";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 7,
    backgroundColor: "#2874f0",
    maxHeight: 41,
    minHeight: 41,
    color: "#fafafafa",
    display: "flex",
  },
  mainDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarLogo: {
    marginRight: 20,
    fontStyle: "italic",
    fontSize: 22,
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  login: {
    textTransform: "capitalize",
    color: "#2874f0",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    letterSpacing: 1,
  },
  innerHeading: {
    fontSize: 11,
  },
  plus: {
    color: "yellow",
  },
  dropDown: {
    display: "flex",
    color: "#fafafafa",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  shoppingCart: {
    textTransform: "capitalize",
    color: "#fafafafa",
  },
  menuIcon: {
    color: "#fafafafa",
  },
}));

const Nav = () => {
  // fetching classes from useStyles()
  const classes = useStyles();

  return (
    // Navbar header comp
    <header className={classes.root}>
      {/* Main Div Element, Contains Logo Text and Search TextField */}
      <div className={classes.mainDiv}>
        <IconButton className={classes.menuIcon}></IconButton>
        <h3 className={classes.navbarLogo}>
          Flipkart
          <div className={classes.innerHeading}>
            Explore <span className={classes.plus}>Plus</span>
          </div>
        </h3>
        <CustomizedInputBase />
      </div>
      {/* Essential Buttons on Flipkart dashboard */}
      <div className={classes.buttons}>
        <Button variant="contained" className={classes.login}>
          Login
        </Button>
        <Button className={classes.dropDown}>
          More
          <ArrowDropDown />
        </Button>
        <Button className={classes.shoppingCart}>
          <ShoppingCartIcon /> Cart
        </Button>
      </div>
    </header>
  );
};

export default Nav;
