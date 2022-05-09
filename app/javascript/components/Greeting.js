import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../redux/greeting/thunk";
import './Greeting.css'

const Greeting = () => {

  const message   = useSelector(state => state.greetingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="greeting">
        <h1>{ message }</h1>
        <button onClick={() => dispatch(getGreeting())}>Greet</button>
      </div>
    </React.Fragment>
  );
}

export default Greeting
