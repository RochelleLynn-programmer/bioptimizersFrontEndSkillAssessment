import { useState } from "react";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoContain: {
    maxWidth: "20%",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  appBar: {
    background: "#368B85",
    padding: "1.6rem",
  },
  toolBar: {
    justifyContent: "space-between",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const styles = useStyles();

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <div className={styles.root}>
        <AppBar className={styles.appBar} position="static">
          <Toolbar className={styles.toolBar}>
            <div className={styles.logoContain}>
              <img
                className={styles.logo}
                src={`${process.env.PUBLIC_URL}/assets/bio-logo-optimizing2.png`}
                alt="logo"
              />
            </div>
            <div>
              {isMatch ? (
                <>
                  <Link href="/home" color="inherit">
                    <Button color="inherit">Home</Button>
                  </Link>
                  <Link href="/contact" color="inherit">
                    <Button color="inherit">Contact</Button>
                  </Link>
                </>
              ) : (
                <>
                  <IconButton
                    edge="start"
                    className={styles.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <Link href="/home" color="inherit">
                      <MenuItem onClick={handleClose}>Home</MenuItem>
                    </Link>
                    <Link href="/contact" color="inherit">
                      <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </Link>
                  </Menu>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
