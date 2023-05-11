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
						Hi there!!!

					</p>
					<p>Im a student of the University of Minnesota Full Stack developer coding bootcamp. I enjoy solving complex problems and learning new skills and always looking for new challenges and opportunities to grow as a developer. I have experience in the latest in Html, CSS, JavaScript, jQuery, Nodejs, SQL. MongoDB and React.</p>
			

				</div>
			</div>
		</div>

	);
}
