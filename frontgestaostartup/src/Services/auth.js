export const TOKEN_KEY = "@gestao-token";
export const ROLE_KEY = "@role"

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getRole = () => localStorage.getItem(ROLE_KEY)

// export const login = (token, role) => {
//   localStorage.setItem(TOKEN_KEY, token);
//   localStorage.setItem(ROLE_KEY, role)
// };

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);

  };

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ROLE_KEY)
};