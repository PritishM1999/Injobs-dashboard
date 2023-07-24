import React from "react";

import {
  //   Select,
  InputLabel,
  //   MenuItem,
  Grid,
  TextField,
  Button,
  capitalize,
  //   Autocomplete,
} from "@mui/material";
// import countries from "../../../Countries/Countries";

const GeneralSettings = () => {
  //   const [selectCurrency, setSelectedCurrency] = useState("");

  //   const [initialAmount, setInitialAmount] = useState("");

  //   const handleCurrency = (event) => {
  //     setSelectedCurrency(event.target.value);
  //   };

  //   const handleInitialAmountChange = (event) => {
  //     setInitialAmount(event.target.value);
  //   };

  return (
    <>
      <br />
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">General Settings</h3>
        </div>
        <div className="card-header">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Name:</InputLabel>
                <TextField placeholder="Enter Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Email:</InputLabel>
                <TextField placeholder="Enter Email" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Phone:</InputLabel>
                <TextField placeholder="Enter Phone" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Old Password:</InputLabel>
                <TextField placeholder="Password" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Set New Password:</InputLabel>
                <TextField placeholder="New Password" />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Conform New Password:</InputLabel>
                <TextField placeholder="Conform Password" />
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
                style={{ background: "#7356b2", textTransform: capitalize }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default GeneralSettings;
