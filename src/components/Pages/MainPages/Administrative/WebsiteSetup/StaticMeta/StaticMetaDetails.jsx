import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

// import AddSupport from "./Support/Support";
// import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
// import TermsCondition from "./TermsCondition/TermsConditions";
import AddMeta from "./AddStaticMeta";
import Meta from "./StaticMeta";
// import DisplayPricing from "./Pricing/DisplayPricing";

// Create a new context to manage the active tab state
const TabContext = React.createContext();

const StaticMetaDetails = () => {
  const [activeTab, setActiveTab] = useState("AddMeta");

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
              <Tab label="Add" value="AddMeta" />
              <Tab label="View" value="viewMeta" />
              {/* <Tab label="Terms & Condtions" value="termsConditions" /> */}
              {/* <Tab label="Pricing" value="pricing" /> */}
            </Tabs>
          </Box>
        </div>
      </div>

      {/* Render different components based on the active tab */}
      {activeTab === "AddMeta" && <AddMeta />}
      {activeTab === "viewMeta" && <Meta />}
      {/* {activeTab === "termsConditions" && <TermsCondition />} */}
      {/* {activeTab === "pricing" && <DisplayPricing />} */}
      {/* Add other components for other tabs if needed */}
    </TabContext.Provider>
  );
};

export default StaticMetaDetails;
