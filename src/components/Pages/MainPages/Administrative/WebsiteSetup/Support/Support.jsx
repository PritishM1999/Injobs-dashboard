// import React, { useState, useEffect } from "react";
import React from "react";

import {
  //   TextField,
  // Select,
  Button,
  InputLabel,
  // MenuItem,
  Grid,
  // FormGroup,
  // Autocomplete,
  // FormControlLabel,
  // Checkbox,
  // Switch,
  Typography,
  // FormControl,
  // Modal,
  // ButtonGroup,
  // IconButton,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddSupport = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
  };

  //   const handleFileUploadThumbnail = (event) => {
  //     const file = event.target.files[0];
  //     // Perform the upload logic here
  //     // You can use the 'file' object to upload the thumbnail image

  //     console.log(file);
  //   };

  return (
    <>
      <br />
      <section className="card">
        <div className="filter-head-products">
          <Typography variant="h1">Add Support</Typography>
        </div>

        <div className="add-products-body">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel>Support Description :</InputLabel>
              <CKEditor
                editor={ClassicEditor}
                onChange={handleEditorChange}
                config={{
                  ckfinder: {
                    uploadUrl: "/your_upload_image_endpoint", // Replace with your image upload endpoint
                  },
                }}
              />
            </Grid>
          </Grid>
          {/* <div className="input-field">
            <InputLabel className="input-field-pdf">
              PDF Specification (Max 2MB size) :
            </InputLabel>
            <input type="file" onChange={handleFileUploadThumbnail} />
          </div> */}

          {/* Submit button */}
          <br />
          <div className="add-product-save-btn">
            <Button className="save-btn" variant="contained">
              SAVE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddSupport;
