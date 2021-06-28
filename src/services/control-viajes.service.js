import http from "../http-commons";

const create = (data) => {
  return http.post('controlViajes/', data)
}

const ControlViaje = {
  create
}

export default ControlViaje;