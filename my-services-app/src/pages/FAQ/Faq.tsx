import { Box } from "@mui/material";
import Accordion from "../../components/Accordion/Accordion";

const Faq = () => {
  return (
    <Box sx={{ minHeight: "82vh" }}>
      <Box sx={{ margin: "50px 0px" }}>
        <Accordion></Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
