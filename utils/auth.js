
export function getToken() {
  return  localStorage.getItem('token') || null;
}
export function setToken(token) {
  return localStorage.setItem('token', token);
}
export function firstAccess() {
  return localStorage.setItem('bnt', true);
}
export function getFirstAccess() {
  return localStorage.getItem('bnt') || null;
}
export function removeAllStorage() {
  window.$nuxt.$store.dispatch('auth/logout')
  return localStorage.removeItem('token')
}
