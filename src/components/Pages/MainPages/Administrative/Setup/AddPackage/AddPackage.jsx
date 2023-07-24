import React, { useState } from "react";

import {
  Select,
  InputLabel,
  MenuItem,
  Grid,
  TextField,
  Button,
  capitalize,
} from "@mui/material";

// import SetupTab from "../SetupTabComponent";

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

const AddPackages = () => {
  const [selectFirstDropdownOption, setSelectedFirstDropdownOption] =
    useState(null);
  const [selectCurrency, setSelectedCurrency] = useState("");
  const [discountType, setDiscountType] = useState("Percentage"); // "Percentage" or "Fixed"
  const [discount, setDiscount] = useState(0);
  const [initialAmount, setInitialAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  // const [activeTab, setActiveTab] = useState(0); // State to store the active tab index

  // const handleTabChange = (event, newValue) => {
  //   setActiveTab(newValue); // Update the active tab index when the tab is changed
  // };

  const handleCurrency = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleFirstDropdownSelect = (selectedOption) => {
    setSelectedFirstDropdownOption(selectedOption);
  };

  const handleSecondDropdownSelect = (selectedOption) => {
    // Handle the second dropdown selection here
  };

  const handleDiscountTypeChange = (event) => {
    setDiscountType(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleInitialAmountChange = (event) => {
    setInitialAmount(event.target.value);
  };

  const calculateFinalAmount = () => {
    if (!initialAmount || !discount) {
      // If initial amount or discount is not entered, do not calculate
      return;
    }

    if (discountType === "Percentage") {
      const discountAmount = (initialAmount * discount) / 100;
      setFinalAmount(initialAmount - discountAmount);
    } else if (discountType === "Fixed") {
      setFinalAmount(initialAmount - discount);
    }
  };

  const firstDropdownOptions = ["Candidate", "Recruiter / Company"];
  const candidateOptions = ["Free", "1 Month", "3 Months"];
  const companyOptions = ["Free", "Pay per job post", "1 Year Plan"];

  return (
    <>
      {/* <SetupTab activeTab={activeTab} handleChange={handleTabChange} /> */}
      <br />
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Packages</h3>
        </div>
        <div className="Add-blog-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Candidate / Company:</InputLabel>
                <Select
                  value={selectFirstDropdownOption || ""}
                  displayEmpty
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Select an Option</div>;
                    }
                    return value;
                  }}
                  onChange={(event) =>
                    handleFirstDropdownSelect(event.target.value)
                  }
                >
                  {firstDropdownOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Package:</InputLabel>
                <Select
                  value=""
                  displayEmpty
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Select a Package</div>;
                    }
                    return value;
                  }}
                >
                  {selectFirstDropdownOption === "Candidate" &&
                    candidateOptions.map((option) => (
                      <MenuItem
                        key={option}
                        value={option}
                        onClick={() => handleSecondDropdownSelect(option)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  {selectFirstDropdownOption === "Recruiter / Company" &&
                    companyOptions.map((option) => (
                      <MenuItem
                        key={option}
                        value={option}
                        onClick={() => handleSecondDropdownSelect(option)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                </Select>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Currency:</InputLabel>
                <Select
                  value={selectCurrency}
                  onChange={handleCurrency}
                  displayEmpty
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Select Currency</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="USD">USD $</MenuItem>
                  <MenuItem value="INR">INR ₹</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Amount:</InputLabel>
                <TextField
                  placeholder="Amount"
                  value={initialAmount}
                  onChange={handleInitialAmountChange}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Discount Type:</InputLabel>
                <Select
                  value={discountType}
                  onChange={handleDiscountTypeChange}
                  displayEmpty
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Select an Option</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="Percentage">% Percentage</MenuItem>
                  <MenuItem value="Fixed">Fixed Amount</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Discount:</InputLabel>
                <TextField
                  placeholder="Discount"
                  value={discount}
                  onChange={handleDiscountChange}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Final Amount:</InputLabel>
                <TextField
                  placeholder="Final Amount"
                  value={finalAmount}
                  disabled
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Description */}
              <div className="input-field">
                <InputLabel>Description:</InputLabel>
                <textarea
                  id="meta-description"
                  rows="4"
                  placeholder="Description"
                ></textarea>
              </div>
            </Grid>
            <br />
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "right",
                gap: "1rem",
              }}
            >
              {/* Submit button */}
              <Button
                className="save-btn"
                variant="contained"
                onClick={calculateFinalAmount}
                style={{ background: "#7356b2", textTransform: capitalize }}
              >
                Update Final Amount
              </Button>
              <Button
                className="save-btn"
                variant="contained"
                style={{ background: "#7356b2", textTransform: capitalize }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AddPackages;

// import React from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// // import "../Candidate/Candidates.css";

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const AddPackages = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//     <div className="card">
//       <div className="card-head">
//         <Box sx={{ flexGrow: 1 }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="nav tabs example"
//             variant="scrollable"
//             scrollButtons="auto"
//           >
//             <LinkTab label="Currencies" href="/" />
//             <LinkTab label="Add Package" href="/" />
//             <LinkTab label="View Packages" href="/" />
//             {/* <LinkTab label="Packages" href="/" /> */}
//           </Tabs>
//         </Box>
//       </div>
//     </div>
//     <br/>
//     <div className="card">

//     </div>
//     </>

//   );
// };

// export default AddPackages;
