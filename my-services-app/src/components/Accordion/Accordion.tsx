import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Accordion = () => {
  const [expended, setExpended] = useState<false | string>(false);
  const handleExpanded = (isExpanded: boolean, questionNo: string) => {
    setExpended(isExpanded ? questionNo : false);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MUIAccordion
          expanded={expended === "question1"}
          onChange={(e, isExpanded) => handleExpanded(isExpanded, "question1")}
        >
          <AccordionSummary
            id="question1-header"
            aria-controls="question1-content"
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Question 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: "2px solid black" }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              odit quis at deserunt voluptate hic error, dignissimos vel dolores
              non cumque eius cum perspiciatis quia. Unde tenetur veniam minima
              officia recusandae asperiores maiores magni, quibusdam
              perspiciatis odit ea. Accusamus, id nisi dolorum tempore, quasi
              incidunt nemo quidem voluptatibus, qui deleniti pariatur voluptate
              totam eius. Perspiciatis veritatis perferendis at dolore ex esse
              voluptates molestiae quod temporibus illo officia, delectus
              impedit. Earum quae quas ab animi, nam non. Quis, reprehenderit
              doloremque, esse voluptatem quo harum laudantium porro
              consequuntur, eius dolore recusandae quos.
            </Typography>
          </AccordionDetails>
        </MUIAccordion>
      </Grid>
      <Grid item xs={12}>
        <MUIAccordion
          expanded={expended === "question2"}
          onChange={(e, isExpanded) => handleExpanded(isExpanded, "question2")}
        >
          <AccordionSummary
            id="question2-header"
            aria-controls="question2-content"
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Question 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: "2px solid black" }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              consectetur consequatur veniam quae deserunt animi reprehenderit
              assumenda quod nisi tempora provident, facilis reiciendis dicta?
              Necessitatibus enim quae ut autem molestiae repellat aspernatur
              quidem, eius facere asperiores harum ex id facilis tempore
              doloribus sint accusantium, veniam amet odio dolores expedita?
              Nesciunt a voluptatum saepe sint illo. Neque praesentium quo natus
              doloremque?
            </Typography>
          </AccordionDetails>
        </MUIAccordion>
      </Grid>
      <Grid item xs={12}>
        <MUIAccordion
          expanded={expended === "question3"}
          onChange={(e, isExpanded) => handleExpanded(isExpanded, "question3")}
        >
          <AccordionSummary
            id="question3-header"
            aria-controls="question3-content"
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Question 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: "2px solid black" }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              corrupti veritatis iste nulla. Cum quasi voluptas praesentium
              perferendis commodi ea deserunt ipsam nostrum, veritatis eaque,
              repudiandae excepturi quas similique vero.
            </Typography>
          </AccordionDetails>
        </MUIAccordion>
      </Grid>
    </Grid>
  );
};

export default Accordion;
