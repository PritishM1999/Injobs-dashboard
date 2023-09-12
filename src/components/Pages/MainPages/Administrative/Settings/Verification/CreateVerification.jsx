import React from "react";

import {
  Select,
  InputLabel,
  MenuItem,
  Grid,
  TextField,
  Button,
  capitalize,
  Checkbox,
  //   Autocomplete,
} from "@mui/material";
import TextArea from "antd/es/input/TextArea";
// import countries from "../../../Countries/Countries";

const CreateVerifications = () => {
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
          <h3 className="card-title">Add Screening Questions</h3>
        </div>
        <div className="card-header">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <div className="input-field">
                <InputLabel>Tag:</InputLabel>
                <TextField placeholder="Enter Name" />
              </div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Show Multiple:</InputLabel>
              <Checkbox
                label="Show Multiple"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel>Recommended:</InputLabel>
              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>

            <Grid item xs={12}>
              <div className="input-field">
                <InputLabel>Questions:</InputLabel>
                <TextArea placeholder="Write Questions" />
              </div>
            </Grid>

            {/* <Grid item xs={12} sm={2}>
              <InputLabel>Activate:</InputLabel>
              <Checkbox
                label="Recommended"
                 // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid> */}
            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel> Activate:</InputLabel>
              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <br />
              <div className="input-field">
                <TextArea placeholder="Text Box" />
              </div>
            </Grid>
            <br />
            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel> Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <div className="input-field">
                {/* <InputLabel>Allow decimal:</InputLabel> */}
                <br />
                <Select
                  //   value={selectedCategory}
                  //   onChange={handleChange}
                  //   //   //   //   displayEmpty
                  //   value="Yes"
                  renderValue={(value) => {
                    if (value === "Yes") {
                      return <div>Yes</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel>Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <div className="input-field">
                {/* <InputLabel>Allow decimal:</InputLabel> */}
                <br />
                <Select
                  //   value={selectedCategory}
                  //   onChange={handleChange}
                  //   displayEmpty
                  // value="Yes / No"

                  renderValue={(value) => {
                    if (value === "Yes / No") {
                      return <div>Yes / No</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="Yes / No">Yes / No</MenuItem>
                  <MenuItem value="Numeric">Numeric</MenuItem>
                </Select>
              </div>
            </Grid>

            {/* <Grid item xs={12} sm={2}>
              <InputLabel>Activate:</InputLabel>
              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid> */}

            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel>Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className="input-field">
                <InputLabel>Currency:</InputLabel>
                <TextField placeholder="Enter Currency"></TextField>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              {/* <InputLabel>Currency:</InputLabel> */}
              <TextField
                style={{
                  marginTop: "1.9rem",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel>Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className="input-field">
                <InputLabel>Degree:</InputLabel>
                <TextField></TextField>
              </div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className="input-field" style={{ marginTop: "1.9rem" }}>
                {/* <InputLabel>Ideal Answer:</InputLabel> */}

                {/* <Select
                  style={{ marginTop: "2rem" }}
                  //   value={selectedCategory}
                  //   onChange={handleChange}
                  //   //   //   //   displayEmpty
                  //   value="No"
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Currency</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="Ideal Answer">Ideal Answer</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select> */}
                <TextField placeholder="Yes"></TextField>
              </div>
            </Grid>

            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel>Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Ideal Answer:</InputLabel>
                {/* <Select
                  //   value={selectedCategory}
                  //   onChange={handleChange}
                  //   //   //   //   displayEmpty
                  //   value="No"
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Ideal Answer</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="Ideal Answer">Ideal Answer</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select> */}
                <TextField placeholder="Yes"></TextField>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="input-field">
                <InputLabel>Minimum:</InputLabel>
                <TextField type="number" placeholder="1"></TextField>
              </div>
            </Grid>

            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel>Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <div className="input-field">
                <InputLabel>Ideal Answer:</InputLabel>
                <TextField placeholder="Yes Table"></TextField>

                {/* <Select
                  //   value={selectedCategory}
                  //   onChange={handleChange}
                  //   //   //   //   displayEmpty
                  //   value="No"
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>Ideal Answer</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="Ideal Answer">Ideal Answer</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select> */}
              </div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel>Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>

            <Grid item xs={12} sm={10}>
              <div className="input-field">
                <InputLabel>Ideal Answer:</InputLabel>
                <TextField placeholder="No"></TextField>
              </div>
            </Grid>

            <Grid item xs={12} sm={2}>
              <br />
              <InputLabel>Activate:</InputLabel>

              <Checkbox
                label="Recommended"
                // defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="input-field">
                <InputLabel>Language:</InputLabel>
                <TextField placeholder="English"></TextField>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="input-field">
                <InputLabel>Profeciency:</InputLabel>
                <Select
                  //   value={selectedCategory}
                  //   onChange={handleChange}
                  //   //   //   //   displayEmpty
                  //   value="No"
                  renderValue={(value) => {
                    if (value === "") {
                      return <div>None</div>;
                    }
                    return value;
                  }}
                >
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="Conversational">Conversational</MenuItem>
                  <MenuItem value="Professional">Professional</MenuItem>
                  <MenuItem value="Native / Bilangual">
                    Native / Bilangual
                  </MenuItem>
                </Select>
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
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default CreateVerifications;
