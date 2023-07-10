// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// The api config info here is mostly for the app to identify, and know which firebase it needs to connect to
// so it doesn't need to be available to the user side/
// limiting the import to core functionality
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUs2eFgbosfEIC5hqN85Y091t12SfDOgY",
  authDomain: "mario-plan-c9c7c.firebaseapp.com",
  projectId: "mario-plan-c9c7c",
  storageBucket: "mario-plan-c9c7c.appspot.com",
  messagingSenderId: "894696476570",
  appId: "1:894696476570:web:03bfe5f5394a4db92eb423",
  measurementId: "G-X7YXDHVSYK",
};

firebase.initializeApp(firebaseConfig);
firebase.fireStore().settings({ timestampsInSnapshots: true });

export default firebase;

// Projects Collection
// - title
// - content
// - authorFirstName
// - authorLastName
// - authorId
// - timestamp

// Users Collection
// - info about app users

// Notifications Collection
// - info about notifications
