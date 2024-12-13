import React, { useState, useEffect } from "react";
import axios from "axios"; 
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import FilterClass from "./FilterClass.js"

const HomePage = () => {
    const PER_PAGE = 25;
    const [filters, setFilters] = useState({
      offset: 0,
      limit: PER_PAGE,
      search: "",
        state: "",
        city: "",
      landmark:""
    });
    const [schools, setSchools] = useState()
    const [states, setStates] = useState([])
    const [citys, setCitys] = useState([])
    const [landMark, setLandMark] = useState([])
    const updateFilter = (name, value) => {
        console.log(value)
      setFilters((prev) => ({ ...prev, [name]: value }));
    };
    useEffect(() => {
      const fetchSchools = async () => {
          
              const params = {}
              if (filters?.search) {
                  params["search"] = filters?.search
              }
              if (filters?.state) {
                params["state"] = filters?.state;
              }
              if (filters?.city) {
                params["city"] = filters?.city;
              }
              if (filters?.landmark) {
                params["landmark"] = filters?.landmark;
              }
                  
              try {
                  const response = await axios.get('http://127.0.0.1:8000/school/schools', { params: params });
                  setSchools(response.data.data);
                  const uniqueStates = new Set();
                  const uniqueCities = new Set();
                  const uniqueLandmarks = new Set();

                  response.data.data.forEach((item) => { 
                      if (item?.address) { 
                          uniqueStates.add(item.address.state);
                          uniqueCities.add(item.address.city);
                          uniqueLandmarks.add(item.address.landmark);
                      }
                  });

                  setStates(Array.from(uniqueStates));
                  setCitys(Array.from(uniqueCities));
                  setLandMark(Array.from(uniqueLandmarks));
              } 
            catch (error) {
                console.error('Error fetching schools:', error);
            }
      };

      fetchSchools();
    }, [filters]);
    console.log(schools)

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        <FilterClass
          filters={filters}
          updateFilter={updateFilter}
          states={states}
          citys={citys}
          landMarks={landMark}
        />
      </Typography>
      <TableContainer>
        <Table sx={{ border: "1px solid black", width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#000", backgroundColor: "#eaf0fb" }}>
                School Name
              </TableCell>
              <TableCell sx={{ color: "#000", backgroundColor: "#eaf0fb" }}>
                State
              </TableCell>
              <TableCell sx={{ color: "#000", backgroundColor: "#eaf0fb" }}>
                City
              </TableCell>
              <TableCell sx={{ color: "#000", backgroundColor: "#eaf0fb" }}>
                Landmark
              </TableCell>
              <TableCell sx={{ color: "#000", backgroundColor: "#eaf0fb" }}>
                Ratings
              </TableCell>
              <TableCell sx={{ color: "#000", backgroundColor: "#eaf0fb" }}>
                Hostel
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schools &&
              schools.map((school) => (
                <TableRow key={school.id}>
                  <TableCell>
                    {" "}
                    <Link
                      to={`/school/${school.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {school.name}
                    </Link>
                  </TableCell>
                  <TableCell>{school?.address?.state}</TableCell>
                  <TableCell>{school?.address?.city}</TableCell>
                  <TableCell>{school?.address?.landmark}</TableCell>
                  <TableCell>{school?.rating}</TableCell>
                  <TableCell>{school?.hostel ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default HomePage;
