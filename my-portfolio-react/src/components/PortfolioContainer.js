import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./Header/Portfolio";
import About from "./Header/About";
import Resume from "./Header/Resume";
import Contact from "./Header/Contact";

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
