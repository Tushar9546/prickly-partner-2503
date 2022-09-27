const initialState = {
  isAuth: false,
  isAuthLoading: false,
  isAuthError: false,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
