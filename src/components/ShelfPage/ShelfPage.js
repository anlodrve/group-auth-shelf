import React from "react";

import ShelfForm from "./ShelfForm";
import ShelfList from "./ShelfList";

function ShelfPage() {
	return (
		<div className="container">
			<h2>Shelf</h2>
			<p>All of the available items can be seen here.</p>
			<ShelfForm />
			<ShelfList />
		</div>
	);
}

export default ShelfPage;
