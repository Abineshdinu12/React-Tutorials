import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuName, setOpenMenuName] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navItems = [
    { name: "useState", path: "/" },
    { name: "useEffect", path: "/use-effect" },
    { name: "Usecontext", path: "/use-context" },
    { name: "UseRef", path: "/use-ref" },
    { name: "UseMemo", path: "/use-memo" },

    {
      name: "Examples",
      subItems: [
        { name: "PropsDrilling", path: "/PropsDrilling" },
        { name: "Form", path: "/form" },
      ],
    },
  ];

  const toggleDrawer = useCallback(
    (open) => () => {
      setDrawerOpen(open);
    },
    []
  );

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuName(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuName(null);
  };

  const renderNavItems = () => (
    <>
      {navItems.map((item) =>
        item.subItems ? (
          <div key={item.name}>
            <Button
              color="inherit"
              onClick={(event) => handleMenuOpen(event, item.name)}
              endIcon={<ArrowDropDownIcon />}
            >
              {item.name}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && openMenuName === item.name}
              onClose={handleMenuClose}
            >
              {item.subItems.map((subItem) => (
                <MenuItem
                  key={subItem.name}
                  component={Link}
                  to={subItem.path}
                  onClick={handleMenuClose}
                >
                  {subItem.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ) : (
          <Button
            color="inherit"
            key={item.name}
            component={Link}
            to={item.path}
          >
            {item.name}
          </Button>
        )
      )}
    </>
  );

  const renderDrawerItems = () => (
    <List>
      {navItems.map((item) =>
        item.subItems ? (
          <React.Fragment key={item.name}>
            <ListItem>
              <ListItemText primary={item.name} />
            </ListItem>
            {item.subItems.map((subItem) => (
              <ListItem
                key={subItem.name}
                onClick={toggleDrawer(false)}
                component={Link}
                to={subItem.path}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={subItem.name} />
              </ListItem>
            ))}
          </React.Fragment>
        ) : (
          <ListItem
            key={item.name}
            onClick={toggleDrawer(false)}
            component={Link}
            to={item.path}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        )
      )}
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Hooks
          </Typography>

          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            renderNavItems()
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        aria-label="navigation menu"
      >
        {renderDrawerItems()}
      </Drawer>
    </>
  );
};

export default Navbar;
