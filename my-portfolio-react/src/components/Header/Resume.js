import React from "react";
import pdf from "../../Resume.pdf";

export default function Home() {
	return (
		<div className="resume">
			<button><a href={pdf}>Download</a></button>
			<h1>frontend skills</h1>
			<ul>
				<li>Html</li>
				<li>Css</li>
				<li>Javascript</li>
				<li>React</li>
				<li>Bootstrap</li>
				<li>Handlebars</li>
			</ul>
			<h1>backendend skills</h1>
			<ul>
				<li>Express</li>
				<li>Nodejs</li>
				<li>SQL</li>
				<li>MongoDB</li>
				<li>RestApi</li>
			</ul>
		</div>
	);
}
