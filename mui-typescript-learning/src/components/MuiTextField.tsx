import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
const MuiTextField = () => {
  const [passwordState, setPasswordState] = useState<boolean>(true);
  const setPasswordStatus = (event: React.MouseEvent<HTMLElement>) => {
    setPasswordState(!passwordState);
  };

  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/* basic */}
        <TextField label="Name" />
        {/* variant */}
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      {/* size */}
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      {/* required *, helper Text and disabled*/}
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required error />
        <TextField
          label="Passwrod"
          type="password"
          helperText="Don not share your password with anyone"
          disabled
        />
        {/* ReadOnly */}
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      {/* Prefix and suffixes in TextField */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        {/* Password hide show */}
        <TextField
          label="Passwrod"
          type={passwordState ? "password" : "text"}
          helperText="Don not share your password with anyone"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={setPasswordStatus}>
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {/* error state */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your Password with any one"
          }
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
