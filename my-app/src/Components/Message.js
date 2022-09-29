import React, { memo } from "react";

const Message = ({ numberOfMessages, onHandleIncrement }) => {
  console.log("message rendering");
  return (
    <div>
      <p>send {numberOfMessages} message</p>;{/* count value  */}
      <button onClick={onHandleIncrement}>Increment Message Number</button>
    </div>
  );
};

export default memo(Message);
