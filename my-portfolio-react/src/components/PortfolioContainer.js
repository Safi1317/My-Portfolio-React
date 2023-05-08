import React, { useContext, useState } from "react";
import "../App.css";
import NavTabs from "./NavTabs";
import Portfolio from "./Header/Portfolio";
import About from "./Header/About";
import Resume from "./Header/Resume";
import Contact from "./Header/Contact";
import Footer from "./Footer";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "../App";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function PortfolioContainer() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	const [currentPage, setCurrentPage] = useState("Home");

	const renderPage = () => {
		if (currentPage === "Home") {
			return (
				<div className="home">
					<About />

				</div>
			);
		}
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
		<Box
			sx={{
				bgcolor: "background.default",
				color: "text.primary",

			}}
		>
			{/* {theme.palette.mode} mode */}
			<IconButton sx={{ ml: 3 }} onClick={colorMode.toggleColorMode} color="inherit">
				{theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
			<div className="pagewrapper">
				<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

				{renderPage()}
				<Footer />
			</div>
		</Box>
	);
}
