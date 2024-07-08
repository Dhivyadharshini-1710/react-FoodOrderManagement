import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  // Define a state variable 'message' and its setter function 'setMessage'
  const [message, setMessage] = useState('kavi');

  function handleMessageFromChild(newMessage) {
    console.log('Message from child:', newMessage);
    setMessage(newMessage); // Update 'message' state with 'newMessage'
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <h2>{message}</h2>
      {/* Passing 'handleMessageFromChild' as a prop to 'ChildComponent' */}
      <ChildComponent onMessage={handleMessageFromChild} />
      {/* Displaying the current 'message' state */}
      <h2>{message}</h2>
    </div>
  );
}

export default ParentComponent;
