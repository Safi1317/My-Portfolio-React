import React from "react";
import "../../App.css";
import Project from "../Project";
import { Box } from "@mui/material";

function Portfolio() {
	return (
		<Box sx={{ display: "flex", flexWrap: "wrap" }}>
			<Project />
			<Project />
			<Project />
			<Project />
			<Project />
			<Project />
		</Box>
	);
}

export default Portfolio;
