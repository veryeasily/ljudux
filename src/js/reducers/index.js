import { ADD_ARTICLE, TURN_ON_SOUND, TURN_OFF_SOUND } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case TURN_ON_SOUND:
      return { ...state, soundPlaying: true };
    case TURN_OFF_SOUND:
      return { ...state, soundPlaying: false };
    default:
      return state;
  }
}

export default rootReducer;
