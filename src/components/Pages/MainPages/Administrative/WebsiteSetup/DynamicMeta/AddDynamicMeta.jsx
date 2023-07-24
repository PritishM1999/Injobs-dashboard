import React, { useState } from "react";
import {
  Select,
  Button,
  InputLabel,
  MenuItem,
  Grid,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";
import "../Meta.css";
const AddDynamicMeta = () => {
  const [brandValue, setShippingValue] = useState("");

  const shippingOptions = [
    { value: "", label: "Select One" },
    { value: "all", label: "All" },
    { value: "pending", label: "Pending Order" },
    { value: "confirm", label: "Ready for Collection" },
    { value: "collected", label: "Collected" },
    { value: "pickedup", label: "Shipped" },
    { value: "delivered", label: "Delivered Orders" },
  ];

  return (
    <>
      <br />
      <div className="add-products-main">
        <section className="filter-section">
          <div className="filter-head-products">
            <Typography variant="h1">Add Dynamic Meta</Typography>
          </div>
          <div className="filter-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel>Page :</InputLabel>
                <FormControl fullWidth>
                  <InputLabel htmlFor="shipping">Select Page</InputLabel>
                  <Select
                    id="shipping"
                    name="shipping"
                    value={brandValue}
                    onChange={(e) => setShippingValue(e.target.value)}
                  >
                    {shippingOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="fromDate">Meta Title :</InputLabel>
                <FormControl fullWidth>
                  <TextField id="fromDate" className="task-date-input" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Keywords :</InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Keywords" />
                </FormControl>
              </Grid>

              {/* <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Meta Details :</InputLabel>
                <FormControl fullWidth>
                  <textarea placeholder="" />
                </FormControl>
              </Grid> */}

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Meta Description :</InputLabel>
                <FormControl fullWidth>
                  <textarea placeholder="" />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="">Meta Pixels :</InputLabel>
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

export default AddDynamicMeta;
