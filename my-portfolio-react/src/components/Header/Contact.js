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

		setname("");
		setmessage("");
		setEmail("");
	};
	return (
		<div>
			<div>
				<p>Contact</p>
				<form className="form">
					<input value={email} name="email" onChange={handleInputChange} type="email" placeholder="email" required />
					<input value={name} name="name" onChange={handleInputChange} type="text" placeholder="name" required />
					<input value={message} name="message" onChange={handleInputChange} type="test" placeholder="message" required />
					<button type="button" onClick={handleFormSubmit}>
						Submit
					</button>
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
