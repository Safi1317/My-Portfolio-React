import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Form() {
	const [email, setEmail] = useState("");
	const [message, setmessage] = useState("");
	const [name, setname] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === "email") {
			setEmail(inputValue);
		} else if (inputType === "name") {
			setname(inputValue);
		} else if (inputType === "message") {
			setmessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		if (!validateEmail(email)) {
			setErrorMessage("Email is invalid");

			return;
		}
		console.log(document.querySelector("#email").value);
		console.log(document.querySelector("#name").value);
		console.log(document.querySelector("#message").value);
		setname("");
		setmessage("");
		setEmail("");
	};
	return (
		<div>
			<div className="contact">
				<p className="pContact">Contact</p>
				<form className="form">
					<input id="email" name="email" type="email" placeholder="email" required />
					<input id="name" name="name" type="text" placeholder="name" minLength="3" required />
					<input id="message" name="message" type="text" placeholder="message" required />
					<button type="submit">Submit</button>
				</form>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Form;
