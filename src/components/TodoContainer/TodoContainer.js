import React, { useState, useEffect } from 'react';

export const TodoContext = React.createContext({
  data: [],
  percentCompleted: '0',
  isReady: null,
  removeItem: () => {},
  addItem: () => {},
  toggleComplete: () => {},
});

const TodoContainer = props => {
  const [data, setData] = useState([]);
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [percentCompleted, setPercentCompleted] = useState('0');
  const [isReady, setIsReady] = useState(false);

  const getFakeId = () => Math.floor(Math.random() * (20000 - 300 + 1)) + 300;
  const removeItem = id => setData(data.filter(data => data.id !== id));
  const addItem = item => {
    const newItem = {
      title: item,
      id: getFakeId(),
      completed: false,
    };

    setData([newItem, ...data]);
  };
  const toggleComplete = id => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setData(updatedData);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?userId=5'
      );
      const data = await response.json();

      if (response.status === 200) {
        setData(data);
        setIsReady(true);
      }
    } catch {
      setIsLoadingError(true);
    }
  };

  const getPercentage = (number, max) =>
    max && Math.floor((number * 100) / max);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const trackCompleted = () => {
      const items = data.length;
      const completedItems = data.filter(item => item.completed).length;
      const percentage = getPercentage(completedItems, items).toString();

      setPercentCompleted(percentage);
    };

    trackCompleted();
  }, [data]);

  return (
    <>
      {isLoadingError ? (
        <div className="box">
          <h1 className="title is-1">Sorry, we couldn't get your data : ( </h1>
        </div>
      ) : (
        <TodoContext.Provider
          value={{
            data,
            percentCompleted,
            isReady,
            removeItem,
            addItem,
            toggleComplete,
          }}
        >
          {props.children}
        </TodoContext.Provider>
      )}
    </>
  );
};

export default TodoContainer;
