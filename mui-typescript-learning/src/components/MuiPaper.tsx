import { Paper, Stack, Box, Divider } from "@mui/material";
// used to build card component
const MuiPaper = () => {
  return (
    <Paper sx={{ padding: "32px" }}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        p={2}
      >
        <Box
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
          Box 1
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          Box 2
        </Box>
      </Stack>
    </Paper>
  );
};

export default MuiPaper;
