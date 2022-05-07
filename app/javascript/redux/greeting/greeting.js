const FETCH_GREETINGS = 'greetingStore/greeting/FETCH_GREETINGS';

const initialState = []

export const fetchgreeting = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;