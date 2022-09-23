import React from "react";
import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      {/* will make h4 tag as h1 */}
      <Typography variant="h4" component='h1' gutterBottom>h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      {/* other variant for h6 */}
      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>
      {/* para tag body variant body1 default body2 smaller */}
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione optio
        deserunt in neque error numquam iure, harum hic debitis molestias?
        Magnam soluta animi fuga nihil esse maxime, eius praesentium! Culpa!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora alias
        perspiciatis quasi quo harum, minima expedita obcaecati reprehenderit
        illo veritatis blanditiis architecto, vel voluptatem maxime! Laborum
        perferendis tempora recusandae voluptatem.
      </Typography>
    </div>
  );
};

export default MuiTypography;
