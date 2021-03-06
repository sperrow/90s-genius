import { RECEIVE_TRACK, RECEIVE_TRACKS, RECEIVE_TRACK_ERRORS } from '../actions/track_actions';

const trackErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK:
      return [];
    case RECEIVE_TRACKS:
      return [];
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default trackErrorsReducer;
