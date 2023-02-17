import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Faq.scss";

export default function Faq() {
  return (
    <div
      className="parentDiv my-2 container"
      style={{ padding: "1.5rem 1.5rem" }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="HeadingColor QuestionItem">
            What Is Your Experience?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-small">
            Currently I have 3 Internship Experience As Web Developer With
            Practical Knowledge
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-primary" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="HeadingColor QuestionItem">
            Are You Available For Work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-small">
            Yes I am looking For Better Opportunities
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-primary" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="HeadingColor QuestionItem">
            What Is Your Key Skill?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-small">
            Majorly Web Developement
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-primary" />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className="HeadingColor QuestionItem">
            Were Are You Located?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-small">
            Currently I am in IT City Bangalore
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
