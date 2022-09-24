import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  console.log(country);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    // instead of div use box not neccessary for select
    // fullWidth to take parent full width
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AS">Austria</MenuItem>
      </TextField>
      {/* Multi Select dropdown using SelectProps */}
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange2}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AS">Austria</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
