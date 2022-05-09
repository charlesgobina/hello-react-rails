import axios from 'axios';
import {fetchgreeting} from './greeting';

const greetingUrl = 'http://127.0.0.1:3000/v1/greetings';

export const getGreeting = () => async (dispatch) => {
  const response = await axios.get(greetingUrl);
  dispatch(fetchgreeting(response.data.message.message));
};