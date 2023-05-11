import React, { useCallback, useState } from "react";
// import "../../";
// import "../src/App.css"
import { validateEmail } from "../../utils/helpers";

const notNull = (value) => {
	if ([null, undefined, ''].includes(value)) {
		return 'field required'
	}
}



function Form() {
	const [email, setEmail] = useState("");
	const [message, setmessage] = useState("");
	const [name, setname] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [validations, setValidations] = useState({})

	const validate = useCallback((event, validator) => {
		setValidations(pastValidations => {
			const validationResult = validator(event.target.value)
			if (validate) {

				return { ...pastValidations, [event.target.name]: validationResult }
			}
			return { ...pastValidations }
		})
	})

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

		<div className="contact">
			<p className="pContact">Contact</p>
			<form className="form">
				<input id="email" name="email" onChange={handleInputChange} type="email" placeholder="email" required onBlur={(e) => validate(e, validateEmail)} />
				<input id="name" name="name" onChange={handleInputChange} type="text" placeholder="name" required onBlur={(e) => validate(e, notNull)} />
				<input id="message" name="message" onChange={handleInputChange} type="text" placeholder="message" required onBlur={(e) => validate(e, notNull)} />
				<button type="submit" onClick={handleFormSubmit}>Submit</button>
			</form>
			{(errorMessage || Object.entries(validations).length) && (
				<div>
					<p className="error-text">{errorMessage}</p>
					{Object.entries(validations).map(([key, value]) => <li key={key}>{key}: required</li>)}
				</div>
			)}
		</div>

	);
}

export default Form;
