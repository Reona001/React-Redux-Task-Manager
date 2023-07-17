export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    // const firestore = getFirestore();

    // console.log("firestore object", firebase.firestore.collection("projects"));
    // This is a promise so we need a then method
    firestore
      .collection("projects")
      .add({
        // ... means adding in all like project.name, project.content
        ...project,
        authorFirstName: "Bob",
        authorLastName: "Lenon",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((error) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};

// By using thunk we can return a function
// We are going to pause the the dispatch, make an async call and resume the dispatch
