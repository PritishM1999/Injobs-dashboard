import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import GeneralSettings from "./General/GeneralSettings";
import SetPrefixes from "./Prefix/Prefix";

// Create a new context to manage the active tab state
const TabContext = React.createContext();

const AdministrativeSettings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <TabContext.Provider value={{ activeTab }}>
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
              <Tab label="General Settings" value="general" />
              <Tab label="Skills" value="skills" />
              <Tab label="Roles" value="addPackage" />
              <Tab label="Prefix" value="setprefix" />
            </Tabs>
          </Box>
        </div>
      </div>

      {/* Render different components based on the active tab */}
      {activeTab === "general" && <GeneralSettings />}
      {activeTab === "setprefix" && <SetPrefixes />}
      {/* {activeTab === "viewPackages" && <ViewPackages />} */}
      {/* Add other components for other tabs if needed */}
    </TabContext.Provider>
  );
};

export default AdministrativeSettings;
