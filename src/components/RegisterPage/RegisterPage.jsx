import React from "react";
import "./RegisterPage.scss";
import RegisterForm from "../RegisterForm/RegisterForm";
import AmethystKitty from "../../images/amethyst.png";

function RegisterPage() {
	return (
		<div className="register-page">
			<section className="register-page__form-box">
				<RegisterForm />
			</section>
			<section className="register-page__image-box">
				<img src={AmethystKitty} alt="" />
			</section>
		</div>
	);
}

export default RegisterPage;
