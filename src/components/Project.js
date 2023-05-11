import React from "react";
import moon from "../images/moon-fish-screenshot.png";
import gitlogo from "../images/GitHub-Logo.png";
import "../App.css";
// import testimg from "../images/testimg.jpg";
import fitness from "../images/fitness.png";
import note from "../images/note.png";
import weather from "../images/weather.png";
import tech from "../images/tech-Blog.png"
import quiz from "../images/code-quiz.png"
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

function Project() {
	return (
		// <Box sx={{ display: "flex", flexWrap: "wrap",  width: "calc(100%/3 - 30px)", margin: "15px" }}>
		<Box className="allprojectwrapper" sx={{ textAlign: "center", position: "relative" }}>
			<Box className="project-box" >
				<Box sx={{ position: "relative" }}>
					<a href="https://lkalliance.github.io/Moon-Fish/">
						<img src={moon} className="projectImage" alt="projectImage" />
					</a>
					<Box sx={{ position: "absolute", top: "0", right: "0" }}>
						<a href="https://github.com/Safi1317/Moon-Fish">
							<img src={gitlogo} className="gitlogo" alt="projectImage" />
						</a>
					</Box>
				</Box>
			</Box>


			<Box >
				<Box sx={{ position: "relative" }}>

					<a href="https://safia-tech-blog.herokuapp.com/">
						<img src={tech} className="projectImage" alt="projectImage" />
					</a>
					<Box sx={{ position: "absolute", top: "0", right: "0" }}>
						<a href="https://github.com/Safi1317/My-tech-blog">
							<img src={gitlogo} className="gitlogo" alt="projectImage" />
						</a>

					</Box>
				</Box>
			</Box>


			<Box >
				<Box sx={{ position: "relative" }}>
					<a href="https://fitnesstalks.herokuapp.com/">
						<img src={fitness} className="projectImage" alt="projectImage" />
					</a>
					<Box sx={{ position: "absolute", top: "0", right: "0" }}>
						<a href="https://github.com/Safi1317/Moon-Fish">
							<img src={gitlogo} className="gitlogo" alt="projectImage" />
						</a>

					</Box>
				</Box>
			</Box>


			<Box>
				<Box sx={{ position: "relative" }}>
					<a href="https://mighty-castle-16667.herokuapp.com/notes">
						<img src={note} className="projectImage" alt="projectImage" />
					</a>
					<Box sx={{ position: "absolute", top: "0", right: "0" }}>
						<a href="https://github.com/Safi1317/Moon-Fish">
							<img src={gitlogo} className="gitlogo" alt="projectImage" />
						</a>

					</Box>
				</Box>
			</Box>




			<Box >
				<Box sx={{ position: "relative" }}>

					<a href="https://github.com/Safi1317/My-code-quiz">
						<img src={quiz} className="projectImage" alt="projectImage" />
					</a>
					<Box sx={{ position: "absolute", top: "0", right: "0" }}>
						<a href="https://safi1317.github.io/My-code-quiz/">
							<img src={gitlogo} className="gitlogo" alt="projectImage" />
						</a>

					</Box>
				</Box>
			</Box>



			<Box >
				<Box sx={{ position: "relative" }}>
					<a href="https://safi1317.github.io/My-Weather-Forecast-Project/">
						<img src={weather} className="projectImage" alt="projectImage" />
					</a>
					<Box sx={{ position: "absolute", top: "0", right: "0" }}>
						<a href="https://github.com/Safi1317/My-Weather-Forecast-Project">
							<img src={gitlogo} className="gitlogo" alt="projectImage" />
						</a>

					</Box>
				</Box>
			</Box>

			{/* <Box sx={{ position: "absolute", top: "0", right: "0" }}>
				<a href="https://github.com/Safi1317/Moon-Fish">
					<img src={gitlogo} className="gitlogo" alt="projectImage" />
				</a>
			</Box> */}
			{/* <Typography variant="h1" sx={{ position: "absolute", top: "0", left: "0", color: "white", fontSize: "30px" }}>
					Project
				</Typography> */}
		</Box>
		// </Box>

	);
}
export default Project;
