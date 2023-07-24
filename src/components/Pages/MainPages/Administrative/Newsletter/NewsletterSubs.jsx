// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import "../Candidate/Candidates.css";

import React, { useState, useEffect } from "react";
// import ProductImage from "../../../../../../assets/blog-sample.png";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import {
  MoreVertOutlined,
  // EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  Pagination,
  Button,
  IconButton,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { saveAs } from "file-saver";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import copy from "copy-to-clipboard";

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

const NewsletterSubs = () => {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  function createData(
    srNo,
    StockUpdateOn,
    ProcutDesc,
    category,
    Brand,
    Supplier,
    Price,
    Quantity,
    Subscription,
    Status,
    action
  ) {
    return {
      srNo,
      StockUpdateOn,
      ProcutDesc,
      category,
      Brand,
      Supplier,
      Price,
      Quantity,
      Subscription,
      Status,
      action,
    };
  }

  const rows = [
    createData(
      1,
      "20-07-2023",
      "User Name",
      "user@gmail.com",
      "+91777775544",
      "201 Sample Address, Street Block Rode Full Address, City",
      "The Company",
      // "3 Years",
      "1 Month",
      "Active"
    ),
    createData(
      2,
      "20-07-2023",
      "User Name",
      "user@gmail.com",
      "+91777775544",
      "201 Sample Address, Street Block Rode Full Address, City",
      "The Company",
      // "3 Years",
      "1 Month",
      "Active"
    ),
    createData(
      3,
      "20-07-2023",
      "User Name",
      "user@gmail.com",
      "+91777775544",
      "201 Sample Address, Street Block Rode Full Address, City",
      "The Company",
      // "3 Years",
      "1 Month",
      "Active"
    ),

    // Add more dummy data as needed
  ];

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [linesCopied, setLinesCopied] = useState(0);
  // const [showStockEditPopup, setShowStockEditPopup] = useState(false);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setStatusFilter("all");
    setPage(1);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const handleMenuOpen = (event, id) => {
    setOpenMenuId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenuId(null);
    setAnchorEl(null);
  };

  const filteredRows = rows.filter((row) => {
    const titleMatch = row.StockUpdateOn.toLowerCase().includes(
      searchText.toLowerCase()
    );
    const categoryMatch = row.category
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const statusMatch =
      statusFilter === "all" || row.Supplier.toLowerCase() === statusFilter;
    return titleMatch || categoryMatch || statusMatch;
  });

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = filteredRows.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredRows.length / rowsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const exportCSV = () => {
    const csvHeaders = [
      { label: "Sr.No.", key: "srNo" },
      { label: "Stock Update On", key: "StockUpdateOn" },
      { label: "Product Description", key: "ProcutDesc" },
      { label: "Category", key: "category" },
      { label: "Brand", key: "Brand" },
      { label: "Supplier", key: "Supplier" },
      { label: "Price (US $)", key: "Price" },
      { label: "Quantity", key: "Quantity" },
      { label: "Action", key: "action" },
    ];

    const csvData = {
      headers: csvHeaders,
      data: rows,
    };

    const csvString = `${csvData.headers
      .map((header) => header.label)
      .join(",")}\n${csvData.data
      .map((row) => Object.values(row).join(","))
      .join("\n")}`;
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "product_inventory.csv");
  };

  const handleExportPDF = () => {
    html2canvas(document.querySelector("#tableContainer")).then((canvas) => {
      const imgData = canvas.toDataURL("ProcutDesc/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imageWidth = pageWidth - 20;
      const imageHeight = (imageWidth * canvas.height) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imageWidth, imageHeight);
      pdf.save("blogs.pdf");
    });
  };

  const handleCopy = () => {
    const data = displayedRows.map((row) => [
      row.srNo,
      row.StockUpdateOn,
      row.category,
      row.Brand,
      row.ProcutDesc,
      row.Supplier,
    ]);

    const csvData = data.map((row) => row.join(",")).join("\n");

    copy(csvData);

    const linesCopied = data.length;
    setLinesCopied(linesCopied);
    setIsPopupOpen(true);
  };

  const handleExportExcel = () => {
    const csvHeaders = [
      { label: "Sr.No.", key: "srNo" },
      { label: "Title", key: "StockUpdateOn" },
      { label: "Category", key: "category" },
      { label: "Description", key: "Brand" },
      { label: "Image", key: "ProcutDesc" },
      { label: "Status", key: "Supplier" },
    ];

    const csvData = {
      headers: csvHeaders,
      data: rows,
    };

    const csvString = `${csvData.headers
      .map((header) => header.label)
      .join(",")}\n${csvData.data
      .map((row) => Object.values(row).join(","))
      .join("\n")}`;
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "blogs.csv");
  };

  useEffect(() => {
    if (isPopupOpen) {
      setTimeout(() => {
        setIsPopupOpen(false);
      }, 1000);
    }
  }, [isPopupOpen]);

  return (
    <>
      {/* <section className="card">
        <div className="card-head">
          <Box sx={{ flexGrow: 1 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              <LinkTab label="All" href="/" />
              <LinkTab label="Active" href="/" />
              <LinkTab label="Free" href="/" />
              <LinkTab label="Subscribed" href="/" />
              <LinkTab label="Blocked" href="/" />
              <LinkTab label="Closed" href="/" />
            </Tabs>
          </Box>
        </div>
      </section> */}
      {/* <br /> */}
      <section>
        <div className="card">
          <div className="card-header">
            <h3>Newsletter Subscriptions</h3>
            {/* Buttons */}
            <div className="tabs-butons">
              {/* <Button variant="contained">All</Button> */}

              <Button variant="contained" onClick={handleCopy}>
                Copy
              </Button>
              <Button variant="contained" onClick={handleExportExcel}>
                Excel
              </Button>
              <Button variant="contained" onClick={exportCSV}>
                CSV
              </Button>
              <Button variant="contained" onClick={handleExportPDF}>
                PDF
              </Button>
            </div>
          </div>
          {/* Buttons End*/}
          <div className="main-body2">
            {/* Search and Nos */}
            <div className="searchAndNosBlogs">
              <div className="nos">
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
              <div className="search-inventory">
                <div className="search-in-table">
                  <OutlinedInput
                    value={searchText}
                    onChange={handleSearchChange}
                    id="outlined-adornment-weight"
                    endAdornment={
                      <InputAdornment position="start">
                        Search...
                      </InputAdornment>
                    }
                  />
                </div>
              </div>
            </div>
            {/* Search and Nos END */}

            {/* Table */}
            <TableContainer
              component={Paper}
              style={{ boxShadow: "none" }}
              id="tableContainer"
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }} align="left">
                      Sr. No.
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>

                    <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody align="left">
                  {displayedRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row" align="left">
                        {row.srNo}
                      </TableCell>
                      <TableCell>{row.StockUpdateOn}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      {/* <TableCell>{row.Supplier}</TableCell> */}
                      {/* <TableCell>{row.Price}</TableCell> */}
                      {/* <TableCell>{row.Quantity}</TableCell> */}
                      {/* <TableCell>{row.Subscription}</TableCell> */}
                      {/* <TableCell>{row.Status}</TableCell> */}
                      <TableCell>
                        <IconButton
                          onClick={(event) => handleMenuOpen(event, row.srNo)}
                          size="small"
                        >
                          <MoreVertOutlined />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={openMenuId === row.srNo}
                          onClose={handleMenuClose}
                          PaperProps={{
                            style: {
                              maxHeight: 120,
                            },
                          }}
                        >
                          {/* <MenuItem
                            onClick={() => {
                              handleMenuClose();
                              // setShowStockEditPopup(true);
                            }}
                          >
                            <EditOutlined
                              fontSize="small"
                              sx={{ marginRight: 1 }}
                            />{" "}
                            Inactivate
                          </MenuItem>
                          <MenuItem aria-label="View order details">
                            <VisibilityOutlinedIcon sx={{ marginRight: 1 }} />
                            Block
                          </MenuItem> */}
                          <MenuItem aria-label="View order details">
                            <DeleteOutlined sx={{ marginRight: 1 }} />
                            Delete
                          </MenuItem>
                        </Menu>
                        {/* {showStockEditPopup && (
                            <AddEditStockPopup
                              onSave={(staffNote) => {
                                // Perform any necessary action with the staff note value
                                console.log(staffNote);

                                // Hide the popup
                                setShowStockEditPopup(false);
                              }}
                              onCancel={() => setShowStockEditPopup(false)}
                            />
                          )} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* Table End */}

            {/* Pagination */}
            <div className="pagination-style-p-inventory">
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
                className="pagination-style"
                style={{
                  display: "flex",
                  // padding: "1rem",
                  justifyContent: "right",
                }}
              />
            </div>
            {/* Pagination END */}
          </div>
        </div>

        {/* Popup */}
        {isPopupOpen && (
          <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
            <DialogTitle>Copied to Clipboard</DialogTitle>
            <DialogContent>
              <p>{linesCopied} lines copied to clipboard.</p>
            </DialogContent>
          </Dialog>
        )}
        {/* Popup END */}
      </section>
    </>
  );
};

export default NewsletterSubs;
