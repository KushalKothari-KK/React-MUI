import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "350px" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            centered
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<FavoriteIcon />}
              iconPosition="start"
            />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" disabled />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Pane one</TabPanel>
        <TabPanel value="2">Pane Two</TabPanel>
        <TabPanel value="3">Pane Three</TabPanel>
        <TabPanel value="4">Pane Four</TabPanel>
        <TabPanel value="5">Pane Five</TabPanel>
        <TabPanel value="6">Pane Six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
