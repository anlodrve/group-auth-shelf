import React from 'react';
import { useSelector } from 'react-redux';
import ShelfItem from './ShelfItem';

function ShelfList() {

    //TODO: useSelector here to get data from store 
  const items = useSelector(state => state.itemsReducer);


  return (
    <div>
      {items.map(item => (
        <ShelfItem
          key={item.id}
          id={item.id}
          description={item.description}
          imageUrl={item.image_url}
        />
      ))}
    </div>
  );
}

export default ShelfList;