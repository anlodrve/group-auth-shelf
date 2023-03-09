import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

import store from "./redux/store";

import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(
	<React.StrictMode>
		{/* <ScopedCssBaseline> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </ScopedCssBaseline> */}
	</React.StrictMode>
);
