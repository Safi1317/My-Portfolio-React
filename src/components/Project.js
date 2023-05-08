import React from "react";
import projectImg from "../images/moon-fish-screenshot.png";
import gitlogo from "../images/GitHub-Logo.png";
import "../App.css";
// import testimg from "../images/testimg.jpg";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

function Project() {
	return (
		<Box sx={{ textAlign: "center", width: "calc(100%/3 - 30px)", margin: "15px", position: "relative" }}>
			<Box sx={{ position: "relative" }}>
				<a href="https://lkalliance.github.io/Moon-Fish/">
					<img src={projectImg} className="projectImage" alt="projectImage" />
				</a>
				<Box sx={{ position: "absolute", top: "0", right: "0" }}>
					<a href="https://github.com/Safi1317/Moon-Fish">
						<img src={gitlogo} className="gitlogo" alt="projectImage" />
					</a>
				</Box>
				{/* <Typography variant="h1" sx={{ position: "absolute", top: "0", left: "0", color: "white", fontSize: "30px" }}>
					Project
				</Typography> */}
			</Box>
		</Box>
	);
}
export default Project;
