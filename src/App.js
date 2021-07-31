import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import TaskboxContainer from './taskbox/TaskboxContainer';

const NavigationMenu = ({ reference, active }) => (
  <section
    ref={reference}
    className={active ? 'navigation-menu navigation-visible' : 'navigation-menu'}
  >
    <ul>
      <li>menu item 1</li>
      <li>menu item 2</li>
    </ul>
  </section>
);

NavigationMenu.propTypes = {
  reference: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  active: PropTypes.bool.isRequired,
};

NavigationMenu.defaultProps = {
  reference: {},
};

const App = () => {
  const navigationRef = useRef(null);
  const [navigationVisible, setNavigationVisible] = useState(false);
  const handleNavigate = () => {
    if (!navigationVisible) {
      // navigationRef.current?
    }
    setNavigationVisible(!navigationVisible);
    console.log(navigationRef?.current);
  };

  let contentClassNames = 'content';

  if (navigationVisible) {
    contentClassNames += ' nav-visible';
  }

  return (
    <>
      <NavigationMenu reference={navigationRef} active={navigationVisible} />
      <div className={contentClassNames}>
        <section id="navigation-label">
          <button type="button" onClick={handleNavigate}>
            navigate
          </button>
        </section>
        <TaskboxContainer />
      </div>
    </>
  );
};

export default App;
