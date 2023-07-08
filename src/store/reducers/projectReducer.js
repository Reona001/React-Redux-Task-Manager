const initState = {
  projects: [
    { id: "1", title: "help find peach", content: "go down the green pipes" },
    {
      id: "2",
      title: "collect the stars",
      content: "fly to the skies and grab the stars",
    },
    {
      id: "3",
      title: "Make yoshi your friend",
      content: "abduct a yoshi baby",
    },
    {
      id: "4",
      title: "Install a new internet Bowser",
      content: "download Koopa bowser",
    },
    { id: "5", title: "Burn the world down", content: "fire flower" },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
