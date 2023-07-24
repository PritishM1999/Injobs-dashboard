import React from "react";
import {
//   Select,
  Button,
  InputLabel,
//   MenuItem,
  Grid,
  Typography,
  FormControl,
//   TextField,
} from "@mui/material";

const AddKnowledgeBase = () => {




//   const faqData = [
//     {
//       question: "Question 1?",
//       answer: "Answer to Question 1.",
//     },
//     {
//       question: "Question 2?",
//       answer: "Answer to Question 2.",
//     },
//     // Add more FAQ items as needed
//   ];


//   const handleQuestionClick = (index) => {
//     setExpandedIndex(index === expandedIndex ? null : index);
//   };

  return (
    <><br/>
    <div className="add-products-main">
      <section className="filter-section">
        <div className="filter-head-products">
          <Typography variant="h1">Add FAQ</Typography>
        </div>
        <div className="filter-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="">Question :</InputLabel>
              <FormControl fullWidth>
                <textarea placeholder="" />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <InputLabel htmlFor="">Answer :</InputLabel>
              <FormControl fullWidth>
                <textarea placeholder="" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div
                className="add-wishlist-submit-btn"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button className="submit-btn" variant="contained">
                  SAVE
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
    </>
  );
};

export default AddKnowledgeBase;

// import React from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   makeStyles,
// } from "@material-ui/core";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(18),
//     fontWeight: theme.typography.fontWeightBold,
//   },
//   accordionDetails: {
//     flexDirection: "column",
//   },
// }));

// const KnowledgeBase = () => {
//   const classes = useStyles();

//   const faqData = [
//     {
//       question: "What is Lorem Ipsum?",
//       answer:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     },
//     {
//       question: "Why do we use it?",
//       answer:
//         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     },
//     {
//       question: "Where does it come from?",
//       answer:
//         "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     },
//   ];

//   return (
//     <div className={classes.root}>
//       <Typography variant="h2" gutterBottom>
//         Knowledge Base
//       </Typography>
//       {faqData.map((faq, index) => (
//         <Accordion key={index}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`faq-content-${index}`}
//             id={`faq-header-${index}`}
//           >
//             <Typography className={classes.heading}>{faq.question}</Typography>
//           </AccordionSummary>
//           <AccordionDetails className={classes.accordionDetails}>
//             <Typography>{faq.answer}</Typography>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// };

// export default KnowledgeBase;
