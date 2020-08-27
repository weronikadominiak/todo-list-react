import React from 'react';

import ItemsList from '../ItemsList/ItemsList';
import Form from '../Form/Form';
import Percentage from '../Percentage/Percentage';
import TodoContainer from '../TodoContainer/TodoContainer';
import Wave from '../Wave/Wave';

const Todo = () => (
  <TodoContainer>
    <div className="columns is-centered">
      <div className="column is-9">
        <div className="box ">
          <div className="has-text-centered">
            <h1 className="title is-1">
              Hello LTG <Wave />
            </h1>
          </div>
          <div className="panel">
            <h2 className="panel-heading">This is my Todo List!</h2>
            <Form />
            <Percentage />
            <ItemsList />
          </div>
        </div>
      </div>
    </div>
  </TodoContainer>
);

export default Todo;
