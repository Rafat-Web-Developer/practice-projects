import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Accordion = () => {
  const [expended, setExpended] = useState<false | string>(false);
  const handleExpanded = (isExpanded: boolean, questionNo: string) => {
    setExpended(isExpanded ? questionNo : false);
  };
  return (
    <>
      <MUIAccordion
        expanded={expended === "question1"}
        onChange={(e, isExpanded) => handleExpanded(isExpanded, "question1")}
      >
        <AccordionSummary
          id="question1-header"
          aria-controls="question1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            corrupti veritatis iste nulla. Cum quasi voluptas praesentium
            perferendis commodi ea deserunt ipsam nostrum, veritatis eaque,
            repudiandae excepturi quas similique vero.
          </Typography>
        </AccordionDetails>
      </MUIAccordion>
      <MUIAccordion
        expanded={expended === "question2"}
        onChange={(e, isExpanded) => handleExpanded(isExpanded, "question2")}
      >
        <AccordionSummary
          id="question2-header"
          aria-controls="question2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            corrupti veritatis iste nulla. Cum quasi voluptas praesentium
            perferendis commodi ea deserunt ipsam nostrum, veritatis eaque,
            repudiandae excepturi quas similique vero.
          </Typography>
        </AccordionDetails>
      </MUIAccordion>
    </>
  );
};

export default Accordion;
