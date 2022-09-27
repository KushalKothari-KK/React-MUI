import { Box, Grid } from "@mui/material";
// For 2D
const MuiGrid = () => {
  return (
    <>
      {/* spacing / rowSpacing / colSpacing */}
      <Grid container my={4} spacing={2}>
        {/* xs='auto' */}
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiGrid;
