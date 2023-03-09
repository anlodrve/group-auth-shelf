import React, { useState } from "react";
import "./LandingPage.scss";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";

function LandingPage() {
	return (
		<div className="landing-page">
			<section className="landing-page__form-box">
				<RegisterForm />
			</section>
		</div>
	);
}

export default LandingPage;
