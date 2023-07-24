import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

// import AddSupport from "./Support/Support";
// import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
// import TermsCondition from "./TermsCondition/TermsConditions";
import AddKnowledgeBase from "./AddKnowledgebase";
import ViewKnowledgeBase from "./ViewKnowledgeBase";
// import DisplayPricing from "./Pricing/DisplayPricing";

// Create a new context to manage the active tab state
const TabContext = React.createContext();

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState("addKB");

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
              <Tab label="Add" value="addKB" />
              <Tab label="View" value="viewKB" />
              {/* <Tab label="Terms & Condtions" value="termsConditions" /> */}
              {/* <Tab label="Pricing" value="pricing" /> */}
            </Tabs>
          </Box>
        </div>
      </div>

      {/* Render different components based on the active tab */}
      {activeTab === "addKB" && <AddKnowledgeBase />}
      {activeTab === "viewKB" && <ViewKnowledgeBase />}
      {/* {activeTab === "termsConditions" && <TermsCondition />} */}
      {/* {activeTab === "pricing" && <DisplayPricing />} */}
      {/* Add other components for other tabs if needed */}
    </TabContext.Provider>
  );
};

export default KnowledgeBase;
