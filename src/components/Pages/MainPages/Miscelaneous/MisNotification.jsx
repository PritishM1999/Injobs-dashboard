import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import "./Notification.css";
import InputAdornment from "@mui/material/InputAdornment";

function createData(message, date) {
  return { message, date };
}

const rows = [
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
  createData(
    "The product Zinc Picolinate 50 mg 120 caps is expired.",
    "Jun 1, 2023"
  ),
  createData("The product Yeast Arrest 14 supp is expired.", "Jun 2, 2023"),
];

const MisNotification = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSearchText] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setPage(1); // Reset page when search text changes
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1); // Reset page when rows per page changes
  };

  const filteredRows = rows.filter((row) =>
    row.message.toLowerCase().includes(searchText.toLowerCase())
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = filteredRows.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredRows.length / rowsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };



  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="card">
        <div className="card-head">
          <Menu
            id="notification-menu"
            anchorEl={anchorEl}
            // open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* Add your dropdown menu items here */}
            {/* <MenuItem onClick={handleMenuClose}>View Notifications</MenuItem>
            <MenuItem onClick={handleMenuClose}>Add Notifications</MenuItem> */}
          </Menu>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Notification</h3>
        </div>
        <div className="main-body2">
          {/* <NotifiTable /> */}
          <div className="NotifyTable">
            <div className="seachAndNos">
              <div className="nos-notify">
                Show <span className="spaces"></span>
                <Select
                  value={rowsPerPage}
                  onChange={handleRowsPerPageChange}
                  label="Rows per page"
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
                <span className="spaces"></span> entries
              </div>
              <div
                className="search-in-table-notifi"
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  onChange={handleSearchChange}
                  value={searchText}
                  endAdornment={
                    <InputAdornment position="end">Search</InputAdornment>
                  }
                />
              </div>
            </div>
            <TableContainer component={Paper} style={{ boxShadow: "gray" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Message
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedRows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.message}
                      </TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              className="pagination-style"
              style={{
                display: "flex",
                justifyContent: "right",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MisNotification;

// import React from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// // import { MiscellaneousServices } from "@mui/icons-material";
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

// const Miscellaneous = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
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
//             <LinkTab label="Sticky Note" href="/" />
//             <LinkTab label="Notifications" href="/" />{/* // Add view Notifications Dropdown */}
//           </Tabs>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Miscellaneous;