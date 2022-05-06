import React from "react"

const Greeting = (props) => {
  const { message } = props;
  return (
    <React.Fragment>
      <p>{message}</p>
    </React.Fragment>
  );
}

export default Greeting
