import React, { useContext } from 'react';

import Item from '../Item/Item';
import { TodoContext } from '../TodoContainer/TodoContainer';

const ItemsList = () => {
  const { data, isReady } = useContext(TodoContext);

  const List = () => (
    <ul>
      {data.map(item => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </ul>
  );

  const Loader = () => (
    <div className="columns is-centered py-6">
      <span className="loader" />
    </div>
  );

  return <>{isReady ? <List /> : <Loader />}</>;
};

export default ItemsList;
