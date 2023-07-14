import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { createFirestoreInstance } from "redux-firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// import from redux-firestore package
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  //store enhancers used with compose method
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    // ⭐️ You cannot have these store enhancers
    // reduxFirestore(firebase, fbConfig),
    // reactReduxFirebase(firebase, fbConfig)
  )
  //   // redux store enhancer ended with the version 6 update so no longer available
  //   // (instance is passed through the new React context API) -
  //   // reduxFirestore(fbConfig)
  //   // reactReduxFirebase(fbConfig)
);
// // We are passing in extra argument, which is an object from the
// // react-redux-firebase tools, so we can use it in the action creator.
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // createRoot was not functioning so we switched to ReactDOM.render method

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={fbConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
