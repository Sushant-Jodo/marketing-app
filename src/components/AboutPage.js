import React from "react";
import { Container, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" paragraph>
        This page contains information about us.
      </Typography>
    </Container>
  );
};

export default AboutPage;
