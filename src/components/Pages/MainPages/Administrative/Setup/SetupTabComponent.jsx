import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import AddPackages from "./AddPackage/AddPackage";
import ViewPackages from "./ViewPackages/ViewPackages";
import SetCurrency from "./Currency/Currency";

// Create a new context to manage the active tab state
const TabContext = React.createContext();

const SetupTab = () => {
  const [activeTab, setActiveTab] = useState("currencies");

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
              <Tab label="Currencies" value="currencies" />
              <Tab label="Add Package" value="addPackage" />
              <Tab label="View Packages" value="viewPackages" />
            </Tabs>
          </Box>
        </div>
      </div>

      {/* Render different components based on the active tab */}
      {activeTab === "currencies" && <SetCurrency />}
      {activeTab === "addPackage" && <AddPackages />}
      {activeTab === "viewPackages" && <ViewPackages />}
      {/* Add other components for other tabs if needed */}
    </TabContext.Provider>
  );
};

export default SetupTab;