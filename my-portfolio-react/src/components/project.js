import React from "react";
// import projectImg from "../../images/moon-fish-screenshot.png";
import gitlogo from "../images/GitHub-Logo.png";
import "../App.css";
import testimg from "../images/testimg.jpg";

function Project() {
	return (
		<>
			<h1>Project</h1>
			<a href="https://lkalliance.github.io/Moon-Fish/">
				<img src={testimg} className="projectImage" alt="projectImage" />
			</a>
			<div>
				<a href="https://github.com/Safi1317/Fitness-Talks">
					<img src={gitlogo} className="gitlogo" alt="projectImage" />
				</a>
			</div>
		</>
	);
}
export default Project;
