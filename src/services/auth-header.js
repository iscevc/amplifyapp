export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if(user && user.accessToken) {
    return {Autorization: `Bearer${user.accessToken}`}
  } else {
    return {}
  }
}