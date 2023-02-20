export function getToken() {
  return  localStorage.getItem('token') || null;
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
export function getClassId() {
  return localStorage.getItem('class_id') || null;
}
export function setClassId(classId) {
  return localStorage.setItem('class_id', classId);
}
export function getRole() {
  return localStorage.getItem('role') || null;
}
export function setRole(role) {
  return localStorage.setItem('role', role);
}
export function loggined({data}) {
  setUserId(data.user.id)
  setUsername(data.user.firstName + " " + data.user.lastName)
  setToken(data.token)
  setClassId(data.user?.classBootcampId?.id)
  setRole(data.user?.roleId.name)
}
export function isAuthenticated() {
  return getToken() && getUserId() && getClassId(); 
}

export function removeAllStorage() {
  return localStorage.clear()
}
