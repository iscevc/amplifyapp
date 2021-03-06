import axios from "axios"

const API_URL = "https://fourofjul.us-east-1.elasticbeanstalk.com/api/auth"

const register = (username, email, password, role) => {
  return axios.post(`${API_URL}/signup`, {
    username,
    email,
    password,
    role
  });
}

const getRoles = () => {
  return axios.get(`${API_URL}/roles`)
}
const login = (username, password) => {
  return axios
  .post(`${API_URL}/signin`, {
    username,
    password
  })
  .then((response) => {
    if(response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
}

const logout = () => {
  localStorage.removeItem("user");
}

export default {
  register,
  login,
  logout,
  getRoles
}