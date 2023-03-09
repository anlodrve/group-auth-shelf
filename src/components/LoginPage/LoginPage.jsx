import React from "react";
import "./LoginPage.scss";
import LoginForm from "../LoginForm/LoginForm";
import AmethystKitty from "../../images/amethyst.png";

function LoginPage() {
	return (
		<div className="login-page">
			<section className="login-page__form-box">
				<LoginForm />
			</section>
			<section className="login-page__image-box">
				<img src={AmethystKitty} alt="" />
			</section>
		</div>
	);
}

export default LoginPage;
