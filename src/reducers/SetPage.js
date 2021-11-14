const SetPage = (state = "box_data", action) => {
  switch (action.type) {
    case "SET_PAGE":
      localStorage.setItem("page", action.playload);
      return (state = action.playload);
    default:
      return localStorage.getItem("page") === null ? state : localStorage.getItem("page");
  }
};

export { SetPage };
