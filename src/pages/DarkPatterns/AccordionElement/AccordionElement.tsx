import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useLanguage } from "../../../context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

const AccordionElement = (): React.ReactElement => {
  const classes = useStyles();

  const {
    patterns: {
      friendSpam,
      friendSpamDesc,
      disguisedAds,
      disguisedAdsDesc,
      forced,
      forcedDesc,
      bait,
      baitDesc,
      hidden,
      hiddenDesc,
      misdirection,
      misdirectionDesc,
      priceComp,
      priceCompDesc,
      zuck,
      zuckDesc,
      roach,
      roachDesc,
      sneak,
      sneakDesc,
      trickQuestions,
      trickQuestionsDesc,
    },
  } = useLanguage().strings;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{friendSpam}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {friendSpamDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{disguisedAds}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{disguisedAdsDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{forced}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {forcedDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{bait}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {baitDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{hidden}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {hiddenDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{misdirection}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {misdirectionDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {priceComp}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {priceCompDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{zuck}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {zuckDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{roach}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {roachDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{sneak}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {sneakDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{trickQuestions}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {trickQuestionsDesc.main}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionElement;
