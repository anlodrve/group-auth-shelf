import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ShelfForm() {
	const user = useSelector((store) => store.user);
	const [shelfItem, setShelfItem] = useState({});
	const dispatch = useDispatch();

	const submitForm = () => {
		dispatch({
			type: "ADD_ITEM",
			payload: shelfItem,
		});
	};

	return (
		<>
			{user.id && (
				<>
					<h1>Shelf Form</h1>
					<form onSubmit={submitForm}>
						<input
							onChange={(event) =>
								setShelfItem({
									...shelfItem,
									image_url: event.target.value,
								})
							}
							placeholder="image url"
						/>
						<input
							onChange={(event) =>
								setShelfItem({
									...shelfItem,
									description: event.target.value,
								})
							}
							placeholder="description"
						/>
						<button type="submit">Submit</button>
					</form>
				</>
			)}
		</>
	);
}

export default ShelfForm;
