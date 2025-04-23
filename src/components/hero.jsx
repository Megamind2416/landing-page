import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: { xs: "40px 0", md: "50px 20px" }, // Responsive padding
        }}
      >
        <Grid container alignItems="center" spacing={4}>
          {/* Left Side: Text and Buttons */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Welcome to Our Platform
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ mb: 4, fontSize: { xs: "1.2rem", md: "1.5rem" } }}
            >
              Discover the best tools and resources to grow your business.
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mr: 2, fontSize: "1rem", padding: "10px 30px" }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ fontSize: "1rem", padding: "10px 30px" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://iimtu.edu.in/blog/wp-content/uploads/2023/11/CSE-aa.jpg"
              alt="Hero Image"
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
