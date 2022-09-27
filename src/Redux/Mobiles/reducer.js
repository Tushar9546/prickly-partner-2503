const initialState = {
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
