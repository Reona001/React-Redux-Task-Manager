import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  ReactReduxFirebaseProvider,
  authIsReady,
  getFirebase,
  getFirestore,
} from "react-redux-firebase";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { isEmpty } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
// import { getFirebase, getFirestore } from "redux-firestore";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

const AppWithAuth = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const isAuthLoaded = authIsReady(auth) && !isEmpty(auth);

  useEffect(() => {
    if (isAuthLoaded) {
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
    }
  }, [isAuthLoaded]);

  return <div>Loading...</div>;
};

const rrfConfig = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={fbConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    ></ReactReduxFirebaseProvider>
    <ReactReduxFirebaseProvider {...rrfConfig}>
      <AppWithAuth />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
