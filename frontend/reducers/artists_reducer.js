import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ARTIST:
      let newState = merge({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    case RECEIVE_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};

export default artistsReducer;
