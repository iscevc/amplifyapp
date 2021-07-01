import axios from "axios";

export default axios.create({
  baseURL: "https://fourofjul.us-east-1.elasticbeanstalk.com/api",
  headers: {
    "Content-type": "application/json"
  }
})