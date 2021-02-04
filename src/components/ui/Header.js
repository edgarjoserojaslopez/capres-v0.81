import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/images/capres.jpg";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core//Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.55em",
    },
  },
  capresLogo: {
    border: "none",
    height: "7em",
    padding: "2px",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  tabContainer: {
    margin: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.login,
    borderRadius: "50px",
    /* marginLeft: "50px", */
    marginRight: "25px",
    /* margin: "auto", */
    fontFamily: "Montserrat",
    height: "45px",
    width: "100px",
  },
  logoContainer: {
    /* margin: "auto", */
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.capresBlue,
    color: "#FFF",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.capresBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white",
    marginRight: "10px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerItemSign: {
    backgroundColor: theme.palette.common.capresOrange,
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Servicios", link: "/servicios" },
    { name: "Retiros", link: "/retiros" },
    { name: "Préstamos Personales", link: "/prestamos" },
    { name: "Préstamos de Vivienda", link: "/vivienda" },
    { name: "Préstamos de Vehículos", link: "/vehiculos" },
    { name: "Fondo Especial para Programas (FEP)", link: "/fondo" },
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/nosotros" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/servicios" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/socios" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contacto" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/login" && value !== 5) {
      setValue(5);
    } else if (window.location.pathname === "/registro" && value !== 6) {
      setValue(6);
    }
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/nosotros":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/servicios":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(0);
        }
        break;
      case "/retiros":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(1);
        }
        break;
      case "/prestamos":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(2);
        }
        break;
      case "/vivienda":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(3);
        }
        break;
      case "/vehiculos":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(4);
        }
        break;
      case "/fondo":
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(5);
        }
        break;
      case "/socios":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contacto":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/login":
        if (value !== 5) {
          setValue(5);
        }
        break;
      case "/registro":
        if (value !== 6) {
          setValue(6);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Inicio" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/nosotros"
          label="Nosotros"
        />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/servicios"
          label="Servicios"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/socios"
          label="Socios"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contacto"
          label="Contacto"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => setValue(5)}
        component={Link}
        to="/login"
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        onClick={() => setValue(6)}
        to="/registro"
      >
        Registro
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(2);
              handleClose();
            }}
            selected={i === selectedIndex && value === 2}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Inicio
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            component={Link}
            to="/nosotros"
            selected={value === 1}
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Nosotros
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            component={Link}
            to="/servicios"
            selected={value === 2}
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Servicios
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            component={Link}
            to="/socios"
            selected={value === 3}
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Socios
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            component={Link}
            to="/contacto"
            selected={value === 4}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contacto
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemSign}
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            component={Link}
            to="/login"
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Login
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemSign}
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(6);
            }}
            component={Link}
            to="/registro"
            selected={value === 6}
          >
            <ListItemText
              className={
                value === 6
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Registro
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img
                className={classes.capresLogo}
                src={logo}
                alt="logo capres"
              />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
