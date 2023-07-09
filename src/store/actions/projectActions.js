export const createProject = (project) => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};

// By using thunk we can return a function
// We are going to pause the the dispatch, make an async call and resume the dispatch
