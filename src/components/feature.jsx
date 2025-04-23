import React from "react";
import { Card, Typography, Box } from "@mui/material";
import {
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const Feature = () => {
  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
      title: "Blazing Fast",
      description:
        "Optimized for performance with lightning-fast response times and minimal latency.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and compliance with industry security standards.",
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
      title: "Cross-Platform",
      description:
        "Seamless experience across all devices and operating systems.",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
      title: "Developer Friendly",
      description:
        "Comprehensive API and detailed documentation for easy integration.",
    },
    {
      icon: <CloudIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
      title: "Cloud Powered",
      description:
        "Scalable cloud infrastructure that grows with your business needs.",
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
      title: "Easy Configuration",
      description:
        "Intuitive dashboard with simple setup and customization options.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 8,
        px: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Powerful Features
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          padding: "10px",
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: "350px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              padding: "32px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {feature.icon}
              <Typography
                variant="h5"
                component="h3"
                sx={{ mt: 3, mb: 2, fontWeight: "600" }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign="center"
                sx={{ color: "text.secondary" }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Feature;
