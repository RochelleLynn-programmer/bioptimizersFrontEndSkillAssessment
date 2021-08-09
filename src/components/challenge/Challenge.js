import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ListComponent, WadeList } from "./List";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Link from "@material-ui/core/Link";
import PopUp from "./PopUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imageContain: {
    maxWidth: "40%",
  },
  challengeImage: {
    height: "100%",
    width: "100%",
  },
  wadeImageContain: {
    width: "70%",
  },
  wadeImage: {
    height: "100%",
    width: "100%",
  },
  quotes: {
    margin: ".5rem",
  },
  important: {
    backgroundColor: "#ECD662",
    padding: "3%",
  },
  centerMe: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF7600",
  },
}));
const Challenge = () => {
  const styles = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" className={styles.centerMe} style={{ color: "red" }}>
            Get Access To The AWESOME Health Course
          </Typography>
        </Grid>
        <Grid item container sm={12} md={6}>
          <Grid item xs={12}>
            <p>
              In this 12 week program, you’re going to discover how to achieve AWESOME health and double your energy
              with natural, tested, and scientific strategies.
            </p>
            <p>Here’s just a tiny sample of what you’ll be seeing over the next 12 weeks:</p>
          </Grid>
          <Grid item xs={12}>
            <ListComponent />
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.important}>
              <p>
                IMPORTANT: Click the orange button for access. After you enter your information, please check your email
                for setting up your account to login to the private program platform.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <p>If you have any questions or trouble at all, please email support@bioptimizers.com.</p>

            <p>Yours in Health,</p>
            <p>Wade Lightheart</p>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={styles.centerMe}>
          <div classnames={styles.imageContain}>
            <img
              className={styles.challengeImage}
              src={`${process.env.PUBLIC_URL}/assets/AwesomeHealthCourse-Banner2.jpeg`}
              alt="health-course-banner"
            />
          </div>
          <Button
            variant="contained"
            className={styles.button}
            size="large"
            endIcon={<CloudDownloadIcon />}
            onClick={handleClickOpen}
          >
            DOUBLE MY ENERGY
          </Button>
          {open ? <PopUp open={open} handleClose={handleClose} /> : ""}
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            <div className={styles.quotes}>
              <img
                className={styles.challengeImage}
                src={`${process.env.PUBLIC_URL}/assets/quote-l2.png`}
                alt="quote"
              />
            </div>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4">
              These strategies, tactics, and techniques have been tested and used by thousands of athletes, business
              leaders, and “regular” people with great results.
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <div className={styles.quotes}>
              <img
                className={styles.challengeImage}
                src={`${process.env.PUBLIC_URL}/assets/quote-r2.png`}
                alt="quote"
              />
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item md={3}></Grid>
          <Grid item xs={12} md={3}>
            <div className={styles.wadeImageContain}>
              <img className={styles.wadeImage} src={`${process.env.PUBLIC_URL}/assets/wadeBioInfo.png`} alt="logo" />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" style={{ color: "#368B85" }}>
              Wade Lightheart
            </Typography>
            <WadeList />
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
        <Grid item xs={12} className={styles.centerMe}>
          <Button>
            <Link to="/privacy">Privacy</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Challenge;
