export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getRegisterError = state => state.auth.authErrorRegister;

export const getLogInError = state => state.auth.authErrorLogIn;