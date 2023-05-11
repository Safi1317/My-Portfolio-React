import React from "react";
import "../App.css";
import emailIcon from ".././images/emaillogo.jpg";
import gitlogo from ".././images/GitHub-Logo.png";
import linkedIcon from ".././images/Icon.png"
import { Box } from "@mui/material";
export default function footer() {
	return (
		<Box className="icons" sx={{ position: "relative" }}>
			<a href="mailto: ali.swaphiyah@gmail.com">
				<img src={emailIcon} className="iconimage" alt="projectImage" />
			</a>
			<a href="https://github.com/Safi1317/">
				<img id="git" src={gitlogo} className="iconimage" alt="projectImage" />
			</a>
			<a href="https://www.linkedin.com/in/safia-ali-840b53268/">
				<img id="linkedIcon" src={linkedIcon} className="iconimage" alt="projectImage" />
			</a>
		</Box>
	);
}
