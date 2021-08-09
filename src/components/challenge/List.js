import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export const ListComponent = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="How To Get 70 Percent More Energy In 30 Seconds Or Less" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="The Ultimate Key To High Performance, Health And Longevity" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Mastering Your Mind For Health, Wealth And Happiness" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="How To Turn The Tide Against Uncontrollable Food Cravings" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="How To Select The Most Powerful Supplements For You" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="How To Stay Lean And Trim Without Sacrifice" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="The Simplest And Fastest Way To Detoxification And Great Skin" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="How to optimize Your Brain For Super Intelligence" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon />
          </ListItemIcon>
          <ListItemText primary="And much, much more ..." />
        </ListItem>
      </List>
    </>
  );
};

export const WadeList = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Director of Education, BiOptimizers" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Advisor For The American Anti-Cancer Institute" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyboardArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary=" 3-time All Natural National Bodybuilding Champion" />
        </ListItem>
      </List>
    </>
  );
};
