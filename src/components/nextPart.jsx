import React from "react";
import { Typography, Box, Container, Grid, Button } from "@mui/material";

const NextPart = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 10, backgroundColor: "#f8fafc" }}>
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Text Content - Left Side */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: { md: "500px" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Revolutionize Your Internet Experience
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontWeight: 400,
              }}
            >
              Harness the power of AI to optimize, secure, and accelerate your
              digital connectivity
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Discover How
            </Button>
          </Box>
        </Grid>

        {/* Image - Right Side */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <Box
            component="img"
            src="https://beconnected.esafety.gov.au/pluginfile.php/99437/mod_resource/content/2/what-is-ai%20%281%29.jpg"
            alt="AI Technology"
            sx={{
              width: "100%",
              maxWidth: "800px",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NextPart;
