import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { AddBox, Extension, Info, SportsEsports } from "@material-ui/icons";
import { useHistory } from "react-router";
import {
  Button,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
  Divider,
  List,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { MenuWrapper } from "./MiniDrawer.styled";
import { useLanguage } from "../../context";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "#292639",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const MiniDrawer = (): React.ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const navigateToQuiz = () => history.push("/quiz");
  const navigateToHome = () => history.push("/");
  const navigateToRegisterPattern = () => history.push("/register-pattern");
  const navigateToExtension = () => history.push("/about-extension");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const languages = [
    { name: "English", code: "en" },
    { name: "Lietuvių", code: "lt" },
  ];

  const locale = useLanguage();

  const [selected, setSelected] = React.useState<any>(
    languages.find((item) => item.code === locale.lang)
  );

  const {
    header: { home },
    sidemenu: { about, quiz, register },
  } = useLanguage().strings;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {home}
          </Typography>
          <MenuWrapper>
            <Button
              style={{ color: "white" }}
              aria-haspopup="true"
              onClick={handleClick}
            >
              {selected.name}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {languages.map((lang, key) => (
                <MenuItem
                  key={`${lang.name}.${key}`}
                  onClick={() => {
                    locale.changeLanguage(lang.code);
                    setSelected(lang);
                    handleClose();
                  }}
                >
                  {lang.name}
                </MenuItem>
              ))}
            </Menu>
          </MenuWrapper>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} onClick={handleDrawerClose}>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key={"about"}
            onClick={navigateToHome}
            style={{ whiteSpace: "normal" }}
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={about} />
          </ListItem>
          <ListItem
            button
            key={"quiz"}
            onClick={navigateToQuiz}
            style={{ whiteSpace: "normal" }}
          >
            <ListItemIcon>
              <SportsEsports />
            </ListItemIcon>
            <ListItemText primary={quiz} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            key={"register"}
            onClick={navigateToRegisterPattern}
            style={{ whiteSpace: "normal" }}
          >
            <ListItemIcon>
              <AddBox />
            </ListItemIcon>
            <ListItemText primary={register} />
          </ListItem>
          <ListItem
            button
            key={"extension"}
            onClick={navigateToExtension}
            style={{ whiteSpace: "normal" }}
          >
            <ListItemIcon>
              <Extension />
            </ListItemIcon>
            <ListItemText primary={register} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

export default MiniDrawer;
