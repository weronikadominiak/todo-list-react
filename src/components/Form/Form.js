import React, { useState, useContext } from 'react';

import { TodoContext } from '../TodoContainer/TodoContainer';

const Form = () => {
  const [inputContent, setInputContent] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);
  const { addItem } = useContext(TodoContext);

  const handleInputChange = e => {
    setInputContent(e.target.value);
  };

  const handleAddItem = e => {
    e.preventDefault();
    if (inputContent.length > 0) {
      addItem(inputContent);
      setInputContent('');
      setIsValidInput(true);
    } else {
      setIsValidInput(false);
    }
  };

  return (
    <div>
      {isValidInput ? null : (
        <p class="help is-danger mx-4">
          You have to put text to be able to add item
        </p>
      )}

      <div className="panel-block">
        <form
          className="field has-addons is-full-width"
          onSubmit={handleAddItem}
        >
          <div className="control is-expanded">
            <label htmlFor="todoInput" className="visuallyhidden">
              Type in your todo
            </label>
            <input
              name="todoInput"
              id="todoInput"
              title="Todo input"
              className={`input ${isValidInput ? '' : 'is-danger'}`}
              placeholder="Type in your todo"
              autoComplete="off"
              type="text"
              value={inputContent}
              onChange={handleInputChange}
            />
          </div>
          <div className="control">
            <button
              className="button is-link"
              title="Add new item to the list"
              onClick={handleAddItem}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
