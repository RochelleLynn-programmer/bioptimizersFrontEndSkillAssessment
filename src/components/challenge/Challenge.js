import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { ListComponent, WadeList } from "./List";

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
}));
const Challenge = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Get Access To The AWESOME Health Course</Typography>
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
            <Paper>
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
        <Grid item xs={12} md={6}>
          <div classnames={styles.imageContain}>
            <img
              className={styles.challengeImage}
              src={`${process.env.PUBLIC_URL}/assets/AwesomeHealthCourse-Banner_555x500.jpeg`}
              alt="logo"
            />
          </div>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={2}></Grid>
          <Grid item xs={1}>
            <FormatQuoteIcon fontSize="large" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">
              These strategies, tactics, and techniques have been tested and used by thousands of athletes, business
              leaders, and “regular” people with great results.
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <FormatQuoteIcon fontSize="large" />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12} md={6}>
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/wadeBioInfo.png`} alt="logo" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <WadeList />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Challenge;
