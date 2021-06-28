import axios from "axios";

export default axios.create({
  baseURL: "http://fourofjuly.us-east-1.elasticbeanstalk.com/api",
  headers: {
    "Content-type": "application/json"
  }
})