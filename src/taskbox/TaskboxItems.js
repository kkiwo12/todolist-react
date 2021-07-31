import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import FlipMove from 'react-flip-move';
import './taskboxItems.css';

const TaskboxItems = ({ items, bottomRef, deleteHandler }) => {
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
    <div className="taskbox-items-container" ref={bottomRef}>
      <ul className="taskbox-list">
        <FlipMove enterAnimation="fade" leaveAnimation="fade">
          {transformedItems}
        </FlipMove>
      </ul>
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
