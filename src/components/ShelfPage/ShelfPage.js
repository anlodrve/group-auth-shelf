import React, { useEffect } from 'react';
import ShelfList from './ShelfList';
import { useDispatch } from 'react-redux';

function ShelfPage() {
	const dispatch = useDispatch();
  
	useEffect(() => {
	  dispatch({ type: 'GET_ITEMS' });
	}, [dispatch]);
  
	return (
	  <div className="container">
		<h2>Shelf</h2>
		<p>All of the available items can be seen here.</p>
		<ShelfList />
	  </div>
	);
  }
  
  export default ShelfPage;
  