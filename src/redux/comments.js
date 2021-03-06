import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    // if action type is Add Comment
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;

      console.log("Comment: ", comment);
      return state.concat(comment);
    // concat will add to the existing comments present and not mutate the previous ones

    default:
      return state;
  }
};
