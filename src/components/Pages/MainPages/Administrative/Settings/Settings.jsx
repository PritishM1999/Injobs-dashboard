import React, { useState, useRef } from "react";
import { Tabs, Tab, Box, Menu, MenuItem } from "@mui/material";
import GeneralSettings from "./General/GeneralSettings";
import SetPrefixes from "./Prefix/Prefix";
import CreateVerification from "./Verification/CreateVerification";
import ViewVerification from "./Verification/ViewVerifications";

const AdministrativeSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [anchorEl, setAnchorEl] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdownOption, setActiveDropdownOption] = useState("create");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setShowDropdown(false); // Hide dropdown when changing tabs
  };

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setShowDropdown(true);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setShowDropdown(false);
  };

  const handleDropdownOptionChange = (option) => {
    setActiveDropdownOption(option);
    handleDropdownClose();
  };

  // Create a ref for the tab element
  const tabRef = useRef();

  return (
    <div>
      <div className="card">
        <div className="card-head">
          <Box sx={{ flexGrow: 1 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="nav tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {/* Attach the ref to the tab element */}
              <Tab ref={tabRef} label="General Settings" value="general" />
              <Tab
                label="Screening Questions &#11167;"
                value="verification"
                onClick={handleDropdownOpen}
              />
              <Tab label="Skills" value="skills" />
              <Tab label="Roles" value="addPackage" />
              <Tab label="Prefix" value="setprefix" />
            </Tabs>
            {showDropdown && (
              <Menu
                anchorEl={anchorEl}
                open={showDropdown}
                onClose={handleDropdownClose}
                // Set the width of the dropdown to match the tab's width
                style={{marginLeft:"1.2rem"}}
              >
                <MenuItem
                  onClick={() => handleDropdownOptionChange("create")}
                  style={{ width: tabRef.current?.clientWidth, textAlign:"center" }}
                >
                  Create
                </MenuItem>
                <MenuItem
                  onClick={() => handleDropdownOptionChange("view")}
                  // style={{ width: tabRef.current?.clientWidth }}
                >
                  View
                </MenuItem>
              </Menu>
            )}
          </Box>
        </div>
      </div>

      {/* Render different components based on the active tab and dropdown option */}
      {activeTab === "general" && <GeneralSettings />}
      {activeTab === "setprefix" && <SetPrefixes />}
      {activeTab === "verification" && activeDropdownOption === "create" && (
        <CreateVerification />
      )}
      {activeTab === "verification" && activeDropdownOption === "view" && (
        <ViewVerification />
      )}
      {/* Add other components for other tabs if needed */}
    </div>
  );
};

export default AdministrativeSettings;

// import React, { useState } from "react";
// import { Tabs, Tab, Box } from "@mui/material";
// import GeneralSettings from "./General/GeneralSettings";
// import SetPrefixes from "./Prefix/Prefix";
// import Verifications from "./Verification/Verifications";

// // Create a new context to manage the active tab state
// const TabContext = React.createContext();

// const AdministrativeSettings = () => {
//   const [activeTab, setActiveTab] = useState("general");

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <TabContext.Provider value={{ activeTab }}>
//       <div className="card">
//         <div className="card-head">
//           <Box sx={{ flexGrow: 1 }}>
//             <Tabs
//               value={activeTab}
//               onChange={handleTabChange}
//               aria-label="nav tabs example"
//               variant="scrollable"
//               scrollButtons="auto"
//             >
//               <Tab label="General Settings" value="general" />
//               <Tab label="Verification" value="verification" />
//               <Tab label="Skills" value="skills" />
//               <Tab label="Roles" value="addPackage" />
//               <Tab label="Prefix" value="setprefix" />
//             </Tabs>
//           </Box>
//         </div>
//       </div>

//       {/* Render different components based on the active tab */}
//       {activeTab === "general" && <GeneralSettings />}
//       {activeTab === "setprefix" && <SetPrefixes />}
//       {activeTab === "verification" && <Verifications />}
//       {/* {activeTab === "viewPackages" && <ViewPackages />} */}
//       {/* Add other components for other tabs if needed */}
//     </TabContext.Provider>
//   );
// };

// export default AdministrativeSettings;
