import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskboxInputContainer from './TaskboxInputContainer';
import TaskboxItems from './TaskboxItems';
import './taskboxContainer.css';

const TaskboxContainer = () => {
  const [items, setItem] = useState({});
  const bottomRef = useRef(null);
  const [lastItem, setLastItem] = useState(null);

  const insertItemHandler = (itemToInsert) => {
    if (itemToInsert === '') return;
    const newKey = uuidv4();
    const copy = { ...items };
    copy[newKey] = itemToInsert;
    setItem(copy);
    const newItem = {};
    newItem.key = newKey;
    newItem.content = itemToInsert;
    setLastItem(newItem);
  };

  const removeItemHandler = (key) => {
    if (lastItem.key === key) {
      const itemKeys = Object.keys(items);
      let newLastItem = null;
      if (itemKeys.length !== 1) {
        const secondToTheLastItem = items[itemKeys.length - 2];
        newLastItem = {
          key: itemKeys[itemKeys.length - 2],
          content: secondToTheLastItem,
        };
      }
      setLastItem(newLastItem);
    }
    const copy = { ...items };
    delete copy[key];
    setItem(copy);
  };

  useEffect(() => {
    //  scroll to the latest item
    bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
  }, [lastItem]);

  return (
    <div className="taskbox-container">
      <span className="taskbox-header">Tasks today</span>
      <TaskboxItems items={items} bottomRef={bottomRef} deleteHandler={removeItemHandler} />
      <TaskboxInputContainer clickHandler={insertItemHandler} />
    </div>
  );
};
export default TaskboxContainer;
