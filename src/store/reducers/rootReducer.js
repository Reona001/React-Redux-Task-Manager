import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
// this firestoreReducer will already know which database to connect to

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
});

// state will now have properties auth and project which has reducers that manipulate and update the data for each property.
// and we are combining them using the rootReducer

export default rootReducer;
