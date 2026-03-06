import React, { useState } from 'react';
import './Counter.css';

const Counter = (props) => {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState(props.title);

  return (
    <div className="counter">
      <h2>{props.title}</h2>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
      <br /><br />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Message: {message}</p>
    </div>
  );
};

export default Counter;