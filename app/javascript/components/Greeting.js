import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../redux/greeting/thunk";

const Greeting = () => {

  const message   = useSelector(state => state.greetingReducer);
  console.log(message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <React.Fragment>
      <p>{ message }</p>
      <button onClick={() => dispatch(getGreeting())}>Fetch Greetings</button>
    </React.Fragment>
  );
}

export default Greeting
