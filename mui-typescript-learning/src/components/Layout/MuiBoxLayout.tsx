import { Box } from "@mui/material";
// Box accepts sx so can add custom style
const MuiBoxLayout = () => {
  return (
    <>
      <Box>MuiBoxLayout</Box>
      <br />
      <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiBoxLayout
      </Box>
      {/* props as css properties p for padding directly mutliply by 8px */}
      <Box
        display="block"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        MuiBoxLayout
      </Box>
    </>
  );
};

export default MuiBoxLayout;
