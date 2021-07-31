import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './taskboxInputContainer.css';

const TaskboxInputContainer = ({ clickHandler }) => {
  const [inputContent, setInputContent] = useState('');
  const submitHandler = () => {
    clickHandler(inputContent);
    setInputContent('');
  };
  return (
    <div className="taskbox-input-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <input
          type="text"
          id="task-input-box"
          value={inputContent}
          onInput={(e) => setInputContent(e.target.value)}
        />
        <button type="submit" onClick={submitHandler} id="task-input-button">
          +
        </button>
      </form>
    </div>
  );
};

TaskboxInputContainer.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default TaskboxInputContainer;
