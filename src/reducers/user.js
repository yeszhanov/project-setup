const getDefaultState = () => ({
  user: {},
});

const user = (state = getDefaultState(), action) => {
  switch (action.type) {
    case 'SET_USER':

    default:
      return state;
  }
};
export default user;
