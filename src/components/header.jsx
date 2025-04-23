import { React } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "2px solid rgba(0,0,0, 0.2)",
        padding: "0 20px",
      }}
    >
      <Toolbar>
        {/* Logo - left aligned */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", mr: 2 }}
        >
          MyBrand
        </Typography>

        {/* Spacer - pushes nav links to center */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation Links - centered */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Contact
          </Button>
        </Box>

        {/* Spacer - maintains balance with left logo */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Call-to-Action Button - right aligned */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "8px 24px",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Get Started
        </Button>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" }, ml: 2 }}>
          <MenuIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
