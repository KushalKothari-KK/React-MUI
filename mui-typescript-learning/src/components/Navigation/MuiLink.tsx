import { Stack, Link, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row">
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="hover">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
