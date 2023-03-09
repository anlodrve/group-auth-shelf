import "./RegisterForm.scss";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
	const history = useHistory();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const errors = useSelector((store) => store.errors);
	const dispatch = useDispatch();

	const onLogin = () => {
		history.push("/login");
	};

	const registerUser = (event) => {
		event.preventDefault();

		dispatch({
			type: "REGISTER",
			payload: {
				username: username,
				password: password,
			},
		});
	}; // end registerUser

	return (
		<form className="register-form" onSubmit={registerUser}>
			<h2 className="register-form__header">Register</h2>
			{errors.registrationMessage && (
				<h3 className="alert" role="alert">
					{errors.registrationMessage}
				</h3>
			)}
			<div>
				<label htmlFor="username">
					Username:
					<input
						type="text"
						name="username"
						value={username}
						required
						onChange={(event) => setUsername(event.target.value)}
					/>
				</label>
			</div>
			<div>
				<label htmlFor="password">
					Password:
					<input
						type="password"
						name="password"
						value={password}
						required
						onChange={(event) => setPassword(event.target.value)}
					/>
				</label>
			</div>
			<div>
				<input
					className="btn"
					type="submit"
					name="submit"
					value="Register"
				/>
			</div>
			<button className="register-form__login-btn" onClick={onLogin}>
				Back to Login
			</button>
		</form>
	);
}

export default RegisterForm;
