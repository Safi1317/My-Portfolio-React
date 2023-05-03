import React from "react";
import profileimg from "../../images/Safia.jpg";
import { Box } from "@mui/material";
export default function About() {
	return (
		<Box sx={{ textAlign: "center" }}>
			{/* <h1>About</h1> */}
			<img src={profileimg} className="profileImage" alt="projectImage" />
			<h1>Safia Ali</h1>
			<p>Fullstack Developer</p>
			<p>
				Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices.cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices
				varius. Aliquam faucibus sit amet magna a ultricecursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultricecursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
				molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrice Aenean pellentesque placerat lacus imperdiet
			</p>
		</Box>
	);
}
