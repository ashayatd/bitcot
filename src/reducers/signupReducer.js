const initialState = {
    formData: {},
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_SIGNUP_FORM':
        return {
          ...state,
          formData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default signupReducer;