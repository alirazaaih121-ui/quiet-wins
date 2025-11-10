export function getUser() {
  return JSON.parse(localStorage.getItem("qw_user") || "null");
}

export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}