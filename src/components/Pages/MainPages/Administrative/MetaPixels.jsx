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

const MetaPixels = () => {
  // const [selectCurrency, setSelectedCurrency] = useState("");

  return (
    <>
      <br />
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Set Meta Pixels</h3>
        </div>
        <div className="card-header">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="input-field">
                <InputLabel>Meta Pixels:</InputLabel>
                <textarea
                  placeholder="Enter Meta Pixels"
                  // value={initialAmount}
                  // onChange={handleInitialAmountChange}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
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
                SAVE
              </Button>
            </Grid>
          </Grid>
          <br />
        </div>
      </div>
    </>
  );
};

export default MetaPixels;
