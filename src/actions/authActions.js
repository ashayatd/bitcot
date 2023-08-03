export const login = (credentials) => {
    // login logic here, API calls or validation
    return {
      type: 'LOGIN',
      payload: credentials,
    };
  };
  
  export const logout = () => {
    // logout logic here
    return {
      type: 'LOGOUT',
    };
  };
  