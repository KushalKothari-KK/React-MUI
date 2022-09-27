import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const MuiRating = () => {
  // null for add rating
  // const [value, setValue] = useState<number | null>(null);
  // 3 for readonly rating
  const [value, setValue] = useState<number | null>(3);
  console.log(value);

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      {/* precision for giving rating in 1 / 1.5 */}
      <Rating value={value} onChange={handleChange} precision={0.5} />
      {/* Customize icon empty and filled */}
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
