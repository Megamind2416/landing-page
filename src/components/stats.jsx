import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";

const Stats = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Image Column */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://www.cnet.com/a/img/resize/6a619fa8d8cb6f22df311d2a96ae2d1f16964f07/hub/2024/05/17/19332b4a-75aa-46a9-a474-a17e2bbed6ab/best-internet-speed-tests.jpg?auto=webp&width=1200"
            alt="AI Enhanced Internet"
            sx={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </Grid>

        {/* Content Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              Transform Your Internet Experience
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "text.secondary",
                mb: 4,
              }}
            >
              Supercharge your connectivity with AI-powered optimization
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { value: "50k+", label: "Satisfied Customers" },
              { value: "70+", label: "Countries Served" },
              { value: "10k+", label: "Dedicated Team" },
              { value: "500+", label: "Innovations" },
            ].map((stat, index) => (
              <Grid item key={index}>
                <Box sx={{ textAlign: { xs: "center", md: "center" } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "primary.main",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      opacity: 0.9,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Stats;
