export function getToken() {
  return localStorage.getItem('token') || null;
}
export function setToken(token) {
  return localStorage.setItem('token', token);
}
export function getUserId() {
  return localStorage.getItem('userId') || null;
}
export function setUserId(userId) {
  return localStorage.setItem('userId', userId);
}
export function getUsername() {
  return localStorage.getItem('username') || null;
}
export function setUsername(username) {
  return localStorage.setItem('username', username);
}
export function getRole() {
  return localStorage.getItem('userId') || null;
}
export function setRole(role) {
  return localStorage.setItem('role', role);
}
export function loggined({data}) {
  setUserId(data.user.id)
  setUsername(data.user.firstName + " " + data.user.firstName)
  setRole(data.user.roleId.name)
  setToken(data.token)
}
export function isAuthenticated() {
  return getToken() && getUserId(); 
}

export function removeAllStorage() {
  return localStorage.clear()
}
