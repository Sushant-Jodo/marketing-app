import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Typography,
  Toolbar,
} from "@mui/material";

import { useParams } from "react-router-dom"; // Import useParams to get the school ID from the URL

const SchoolInfo = () => {
  const { id } = useParams(); // Get the school ID from the URL
    const [school, setSchool] = useState(null);
    const [streams, setStreams] = useState([])
    const [filters,setFilters]=useState({stream:"", grade:""})

  useEffect(() => {
    const fetchSchoolInfo = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/school/school/${id}`
        ); // Adjust the endpoint as needed
          setSchool(response?.data?.data);
          setStreams(response?.data?.data?.stream)
      } catch (error) {
        console.error("Error fetching school info:", error);
      }
    };

    fetchSchoolInfo();
  }, [id]);
    
    const updateFilter = () => { }

  if (!school) {
    return <Typography>Loading...</Typography>; // Show loading state while fetching
  }

    return (
        <>
            <Toolbar style={{ minHeight: "64px" }}>
            <Typography variant="h2">{school.name}</Typography>
            </Toolbar>
        <Container>
            <FormControl variant="outlined" sx={{ width: "15%" }}>
          <InputLabel id="state-select-label">State</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            value={filters.state || ""}
            onChange={(e) => updateFilter("state", e.target.value)}
            label="State"
          >
            {streams.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
                    </Select>
                    </FormControl>
        </Container>
      </>
    );
};

export default SchoolInfo;
