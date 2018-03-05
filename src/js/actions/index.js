import { ADD_ARTICLE, TURN_ON_SOUND, TURN_OFF_SOUND } from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE , payload: article });
export const turnOnSound = () => ({ type: TURN_ON_SOUND });
export const turnOffSound = () => ({ type: TURN_OFF_SOUND });
