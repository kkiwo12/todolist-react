import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import './taskboxItems.css';

const TaskboxItems = ({ items, bottomRef, deleteHandler }) => {
  // const transformedItems = items.map((i) => (
  //   <li key={i.key} className="li-content">
  //     <span
  //       className="li-icon"
  //       role="button"
  //       onClick={() => console.log(i.key)}
  //       onKeyDown={() => console.log(i.key)}
  //       tabIndex={0}
  //     >
  //       <FaTrashAlt />
  //     </span>
  //     <p className="li-content">{i.content}</p>
  //   </li>
  // ));

  const itemKeys = Object.keys(items);

  const transformedItems = [];

  itemKeys.forEach((key) => {
    const currentItem = items[key];
    const item = (
      <li key={key} className="li-content">
        <span
          className="li-icon"
          role="button"
          onClick={() => deleteHandler(key)}
          onKeyDown={() => deleteHandler(key)}
          tabIndex={0}
        >
          <span className="icon">
            <FaTrashAlt />
          </span>
        </span>
        <p className="li-content">{currentItem}</p>
      </li>
    );
    transformedItems.push(item);
  });

  return (
    <div className="taskbox-items-container">
      <ul className="taskbox-list">{transformedItems}</ul>
      <div ref={bottomRef} />
    </div>
  );
};

TaskboxItems.propTypes = {
  items: PropTypes.objectOf(PropTypes.string),
  bottomRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  deleteHandler: PropTypes.func.isRequired,
};

TaskboxItems.defaultProps = {
  items: [],
  bottomRef: {},
};

export default TaskboxItems;
