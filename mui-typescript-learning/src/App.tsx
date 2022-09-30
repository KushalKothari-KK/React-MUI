import { Box } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import MuiBoxLayout from "./components/Layout/MuiBoxLayout";
import MuiCard from "./components/Layout/MuiCard";
import MuiGrid from "./components/Layout/MuiGrid";
import MuiStack from "./components/Layout/MuiStack";
import MuiAccordion from "./components/Layout/MuiAccordion";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiButton from "./components/MuiButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiPaper from "./components/MuiPaper";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";
import MuiImageList from "./components/Layout/MuiImageList";
import MuiNavbar from "./components/Navigation/MuiNavbar";
import MuiMenu from "./components/Navigation/MuiMenu";
import MuiLink from "./components/Navigation/MuiLink";
import MuiBreadcrumbs from "./components/Navigation/MuiBreadcrumbs";
import MuiDrawer from "./components/Navigation/MuiDrawer";
import MuiSpeedDial from "./components/Navigation/MuiSpeedDial";
import MuiNavigation from "./components/Navigation/MuiNavigation";
import MuiAvatar from "./components/DataDisplay/MuiAvatar";
import MuiBadge from "./components/DataDisplay/MuiBadge";
import MuiList from "./components/DataDisplay/MuiList";
import MuiChip from "./components/DataDisplay/MuiChip";
import MuiTooltip from "./components/DataDisplay/MuiTooltip";
import MuiTable from "./components/DataDisplay/MuiTable";
import MuiAlert from "./components/Feedback/MuiAlert";
import MuiSnackbar from "./components/Feedback/MuiSnackbar";
import MuiDialog from "./components/Feedback/MuiDialog";
import MuiProgress from "./components/Feedback/MuiProgress";
import MuiSkeleton from "./components/Feedback/MuiSkeleton";
import MuiLoadingButton from "./components/Lab/MuiLoadingButton";
import MuiPicker from "./components/Lab/MuiPicker";
import MuiDateRangePicker from "./components/Lab/MuiDateRangePicker";
import MuiTabs from "./components/Lab/MuiTabs";
import MuiTimeline from "./components/Lab/MuiTimeline";
import MuiMasonry from "./components/Lab/MuiMasonry";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiTypography
      </Box>
      <MuiTypography />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiButton
      </Box>
      <MuiButton />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiTextField
      </Box>
      <MuiTextField />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiSelect
      </Box>
      <MuiSelect />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiRadioButton
      </Box>
      <MuiRadioButton />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiCheckbox
      </Box>
      <MuiCheckbox />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiSwitch
      </Box>
      <MuiSwitch />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiRating
      </Box>
      <MuiRating />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiAutocomplete
      </Box>
      <MuiAutocomplete />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiBoxLayout
      </Box>
      <MuiBoxLayout />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiStack
      </Box>
      <MuiStack />
      <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiGrid
      </Box>
      <MuiGrid /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Paper
      </Box>
      <MuiPaper /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        MuiCard
      </Box>
      <MuiCard /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Accordion
      </Box>
      <MuiAccordion /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        ImageList
      </Box>
      <MuiImageList /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Navbar
      </Box> */}
        {/* <MuiNavbar /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Menu
      </Box>
      <MuiMenu /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Link
      </Box>
      <MuiLink /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Breadcrumbs
      </Box>
      <MuiBreadcrumbs /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Drawer
      </Box>
      <MuiDrawer /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Speed Dial
      </Box>
      <MuiSpeedDial /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Bottom Navigation
      </Box>
      <MuiNavigation /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Avatar
      </Box>
      <MuiAvatar /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Badge
      </Box>
      <MuiBadge /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        List
      </Box>
      <MuiList /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Chip
      </Box>
      <MuiChip /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Tooltip
      </Box>
      <MuiTooltip /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Table
      </Box>
      <MuiTable /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Alert
      </Box>
      <MuiAlert /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Snackbar
      </Box>
      <MuiSnackbar /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Dialog
      </Box>
      <MuiDialog /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Progress
      </Box>
      <MuiProgress /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Skeleton
      </Box>
      <MuiSkeleton /> */}
        {/* <Box
        sx={{
          padding: "15px 0px",
          margin: "15px 0px",
          borderTop: "1px solid #ccc",
        }}
      >
        Loading Button
      </Box>
      <MuiLoadingButton /> */}
        {/* <Box
          sx={{
            padding: "15px 0px",
            margin: "15px 0px",
            borderTop: "1px solid #ccc",
          }}
        >
          Date Picker
        </Box>
        <MuiPicker /> */}
        {/* <Box
          sx={{
            padding: "15px 0px",
            margin: "15px 0px",
            borderTop: "1px solid #ccc",
          }}
        >
          Date Range Picker
        </Box>
        <MuiDateRangePicker /> */}
        {/* <Box
          sx={{
            padding: "15px 0px",
            margin: "15px 0px",
            borderTop: "1px solid #ccc",
          }}
        >
          Tabs
        </Box>
        <MuiTabs /> */}
        {/* <Box
          sx={{
            padding: "15px 0px",
            margin: "15px 0px",
            borderTop: "1px solid #ccc",
          }}
        >
          Timeline
        </Box>
        <MuiTimeline /> */}
        <Box
          sx={{
            padding: "15px 0px",
            margin: "15px 0px",
            borderTop: "1px solid #ccc",
          }}
        >
          Masonry
        </Box>
        <MuiMasonry />
      </div>
    </LocalizationProvider>
  );
}

export default App;
