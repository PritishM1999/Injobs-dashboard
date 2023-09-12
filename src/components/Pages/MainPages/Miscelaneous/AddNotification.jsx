import React from "react";

import {
  // Select,
  InputLabel,
  // MenuItem,
  Grid,
  // TextField,
  Button,
  capitalize,
  // Autocomplete,
} from "@mui/material";

const AddNotifications = () => {
  // const [selectCurrency, setSelectedCurrency] = useState("");

  return (
    <>
      <br />
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Add Notifications</h3>
        </div>
        <div className="card-header">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="input-field">
                <InputLabel>Notification:</InputLabel>
                <textarea
                  placeholder="Enter Notification Message"
                  // value={initialAmount}
                  // onChange={handleInitialAmountChange}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "right",
                gap: "2rem",
              }}
            >
              {/* Submit button */}
              <Button
                className="save-btn"
                variant="contained"
                style={{
                  background: "#7356b2",
                  textTransform: capitalize,
                  marginTop: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                SEND
              </Button>
            </Grid>
          </Grid>
          <br />
        </div>
      </div>
    </>
  );
};

export default AddNotifications;
