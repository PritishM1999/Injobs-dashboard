import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

// import AddSupport from "./Support/Support";
// import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
// import TermsCondition from "./TermsCondition/TermsConditions";
// import DisplayPricing from "./Pricing/DisplayPricing";
import MisNotification from "./MisNotification";
import AddNotifications from "./AddNotification";

// Create a new context to manage the active tab state
const TabContext = React.createContext();

const SetupMiscellaneous = () => {
  const [activeTab, setActiveTab] = useState("notifications");

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
              <Tab label="Notifications" value="notifications" />

              <Tab label="Add Notifications" value="addnotification" />

              <Tab label="Sticky Notes" value="" />
            </Tabs>
          </Box>
        </div>
      </div>

      {/* Render different components based on the active tab */}
      {activeTab === "notifications" && <MisNotification />}
      {activeTab === "addnotification" && <AddNotifications />}
      {/* {activeTab === "pricing" && <DisplayPricing />} */}
      {/* Add other components for other tabs if needed */}
    </TabContext.Provider>
  );
};

export default SetupMiscellaneous;
