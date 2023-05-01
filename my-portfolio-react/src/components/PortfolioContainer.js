import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./Header/Portfolio";
import About from "./Header/About";
import Resume from "./Header/Resume";
import Contact from "./Header/Contact";
// import { Box, Button, Container, Drawer, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Skeleton, Stack, TextField } from "@mui/material";
// import IconButton from "@mui/material/IconButton";

// import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("Home");

	const renderPage = () => {
		if (currentPage === "Resume") {
			return <Resume />;
		}
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

			{renderPage()}
		</div>
	);
}
