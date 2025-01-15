import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Footer from "../components/footer/Footer";
import { useTheme, useMediaQuery } from "@mui/material";

// Define a type for the doctor object
interface Doctor {
  name: string;
  specialization: string;
  hospital: string;
  location: string;
  profileLink: string;
}

const Booking = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  // States for search and booking input
  const [disease, setDisease] = useState("");
  const [location, setLocation] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]); // Update doctorsList type to Doctor[]

  // Search doctors based on disease and location
  const handleSearch = async () => {
    if (disease && location) {
      try {
        const response = await fetch("http://localhost:5000/api/v1/doc/scrape", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            disease,
            location,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
  
        const data = await response.json();
        
        // Set the doctorsList state with the received data
        setDoctorsList(data.doctors);
  
        console.log("Doctors List:", data.doctors); // This will log the doctors list to the console
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    } else {
      console.log("Please provide both disease and location.");
    }
  };

  // Booking function to redirect to Practo profile
  const handleBooking = () => {
    // Find the doctor in the doctorsList by matching the name
  const selectedDoctor = doctorsList.find(
    (doctor) => doctor.name.toLowerCase() === doctorName.toLowerCase()
  );

  if (selectedDoctor) {
    // Redirect to the doctor's profile link in the same tab
    window.location.href = selectedDoctor.profileLink;
  } else {
    // Handle the case where the doctor is not found
    console.error("Doctor not found. Please select a valid doctor from the list.");
  }
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        {/* Search Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 5,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Search for Doctors
          </Typography>
          <TextField
            label="Disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            sx={{ width: isBelowMd ? "80%" : "40%" }}
            InputProps={{
                style: {
                  color: 'white',
                },
              }}
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ width: isBelowMd ? "80%" : "40%" }}
            InputProps={{
                style: {
                  color: 'white',
                },
              }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              bgcolor: "#00fffc",
              color: "black",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#00fffc",
                transform: 'scale(1.1)',
                boxShadow: `0px 4px 15px rgba(0, 255, 252, 0.7)`,
              },
            }}
          >
            Search
          </Button>
        </Box>

        {/* Displaying List of Doctors */}
        {doctorsList.length > 0 && (
          <Box
            sx={{
              width: "100%",
              mt: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Doctors Found
            </Typography>
            {doctorsList.map((doctor, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: isBelowMd ? "80%" : "40%",
                  padding: "10px",
                  boxShadow: "5px 5px 15px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  //backgroundColor: "#f9f9f9",
                }}
              >
                <Typography variant="body1">
                  <strong>Name:</strong> {doctor.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Specialization:</strong> {doctor.specialization}
                </Typography>
                <Typography variant="body1">
                  <strong>Hospital:</strong> {doctor.hospital}
                </Typography>
                <Typography variant="body1">
                  <strong>Location:</strong> {doctor.location}
                </Typography>
                <Typography variant="body1">
                <strong>Link: </strong> <a href={doctor.profileLink} target="_blank" rel="noopener noreferrer" style={{ color: '#00fffc', textDecoration: 'underline' }}>https://www.practo.com/mumbai/{doctor.name}
          </a>
          </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Booking Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 5,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Book an Appointment
          </Typography>
          <TextField
            label="Doctor Name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            sx={{ width: isBelowMd ? "80%" : "40%" }}
            InputProps={{
                style: {
                  color: 'white',
                },
              }}
          />
          <Button
            variant="contained"
            onClick={handleBooking}
            sx={{
                bgcolor: "#00fffc",
                color: "black",
                transition: "0.3s",
                ":hover": {
                  bgcolor: "#00fffc",
                  transform: 'scale(1.1)',
                  boxShadow: `0px 4px 15px rgba(0, 255, 252, 0.7)`,
              },
            }}
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Booking;
