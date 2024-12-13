import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import HomePage from "../src/components/HomePage";
import SchoolInfo from "./components/SchoolInfo"
import ContactPage from "../src/components/ContactPage";
import { AppBar, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";


function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={{ minHeight: "64px" }}>
          <IconButton
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontSize: "70px" }}
            children={<HomeIcon fontSize="large" />}
          />
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="school/:id" element={<SchoolInfo />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
