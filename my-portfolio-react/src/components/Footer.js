import React from "react";
import emailIcon from ".././images/emaillogo.jpg";
import gitlogo from ".././images/GitHub-Logo.png";
export default function footer() {
	return (
		<div className="icons">
			<img src={emailIcon} className="iconimage" alt="projectImage" />
			<img src={gitlogo} className="iconimage" alt="projectImage" />
			<img src={gitlogo} className="iconimage" alt="projectImage" />
		</div>
	);
}
