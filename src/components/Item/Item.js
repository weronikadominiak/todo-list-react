import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TodoContext } from '../TodoContainer/TodoContainer';
import TrashIcon from '../TrashIcon/TrashIcon';

const Item = ({ title, completed, id }) => {
  const { removeItem, toggleComplete } = useContext(TodoContext);

  return (
    <li className="panel-block is-grouped">
      <label
        className={`control is-expanded ${completed ? 'strikethrough' : ''}`}
        htmlFor={`completedTask${id}`}
      >
        {title}
      </label>
      <input
        className="panel-icon"
        type="checkbox"
        id={`completedTask${id}`}
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <button
        title="Remove list item"
        className="button--normalized ml-5"
        onClick={() => removeItem(id)}
      >
        <TrashIcon />
      </button>
    </li>
  );
};

export default Item;

Item.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  id: PropTypes.number,
};
