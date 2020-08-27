import React, { useContext } from 'react';

import { TodoContext } from '../TodoContainer/TodoContainer';

const Percentage = () => {
  const { percentCompleted, data } = useContext(TodoContext);
  const areTasksAvailable = !!data.length;

  return (
    <div className="panel-block py-4">
      {areTasksAvailable ? (
        <>
          <h3 className="title is-6 control mb-0">
            So far you completed: {percentCompleted}% of your tasks!{' '}
          </h3>
          <progress
            className="progress is-primary"
            value={percentCompleted}
            max="100"
          >
            {percentCompleted}
          </progress>
        </>
      ) : null}
    </div>
  );
};

export default Percentage;
