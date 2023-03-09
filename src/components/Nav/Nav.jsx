import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { useSelector, useDispatch } from "react-redux";

function Nav() {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	return (
		<div className="nav">
			<Link className="nav__title-link" to="/shelf">
				<h2 className="nav__title">Auth Shelf</h2>
			</Link>
			<div className="nav__link-box">
				{/* If no user is logged in, show these links */}
				{(user.id === null || !user.id) && (
					// If there's no user, show login/registration links
					<Link className="nav__link" to="/login">
						Login / Register
					</Link>
				)}

				<Link className="nav__link" to="/about">
					About
				</Link>

				{/* If a user is logged in, show these links */}
				{user.id && (
					<>
						<Link className="nav__link" to="/shelf">
							The Shelf
						</Link>
						<Link
							className="nav__link"
							onClick={() => dispatch({ type: "LOGOUT" })}
						>
							Logout
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default Nav;
