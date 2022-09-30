import { Box, TextField } from "@mui/material";
import { DateRange } from "@mui/lab";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState } from "react";

const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <Box>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};

export default MuiDateRangePicker;
