import React from "react";
// import "../../App.css"
import profileimg from "../../images/Safia.jpg";
import { Box } from "@mui/material";
export default function About() {
	return (
		// <Box sx={{ display: "flex" , width: "calc(100%/2 - 40px)", margin: "35px" }}>
		<div className="container">
			<div className="aboutwrap">
				<div className="profileImage">
					<img src={profileimg} alt="profileImage" />
				</div>
				<div className="aboutContent">
					<h1>Safia Ali</h1>
					<h2>Fullstack Developer</h2>
					<p className="about">
						Integer cursus brices.cursus bibendum sem  molestie urna. Aliquam semper ultrices
						varius. Aliquam faucibus sit e placerat lacus imperdietIn. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices.cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices

					</p>
					<p>Integt magna a ultrices.cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices
						varius. Aliquam faucibus sitacus imperdiet</p>
					<p>Integer cursus bibenes v quis molestie urna. Aliquam semper ultrices
						varius. Aliquam faucibus sit amet magna a ultricnean pellentesque placerat lacus imperdiet</p>

				</div>
			</div>
		</div>

	);
}
