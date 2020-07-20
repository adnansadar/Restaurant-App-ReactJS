import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      // state.length returns tha array length, so the id will start from 0 and get assigned accordingly as the no of comments increase
      comment.date = new Date().toISOString();
      console.log("Comment: ", comment);
      return state.concat(comment);
    // concat will add to the existing comments present and not mutate the previous ones

    default:
      return state;
  }
};
