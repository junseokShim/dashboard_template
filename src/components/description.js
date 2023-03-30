import React from "react";
import { Typography, Divider } from "@material-ui/core";

const DetailSection = ({ title, children }) => {
  return (
    <div style={{ margin: "20px 0", padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "10px" }}>
        {title}
      </Typography>
      <Divider style={{ marginBottom: "20px" }} />
        {children}
      
    </div>
  );
};

export default DetailSection;