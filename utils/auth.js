
export function getToken() {
  return  localStorage.getItem('token') || null;
}
export function setToken(token) {
  return localStorage.setItem('token', token);
}

export function removeAllStorage() {
  window.$nuxt.$store.dispatch('auth/logout')
  return localStorage.clear()
}
