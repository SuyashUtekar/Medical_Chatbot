import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
    <Box
      width={"100%"}
      height={"100vh"}
      display="flex" // Add this
      justifyContent="center" // Add this
      alignItems="center" // Add this
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <TypingAnim text="Health Guardian AI" />
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            Enter symptoms, get instant insights, and book a doctor’s appointment nearby – all in one click.
          </Typography>
        </Box>
      </Box>
      
    </Box>
    <Footer />
    </Box>
    
  );
};
export default Home;