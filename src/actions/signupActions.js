export const submitSignupForm = (formData) => {
    return {
      type: 'SUBMIT_SIGNUP_FORM',
      payload: formData,
    };
  }