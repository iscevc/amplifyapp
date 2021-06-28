import {
  CREATE_CONTROL_VIAJE
} from "./types";

import ControlViaje from "../services/control-viajes.service";

export const createControlViaje = (data) => async (dispatch) => {
  try {
    const res = await ControlViaje.create(data);

    dispatch({
      type: CREATE_CONTROL_VIAJE,
      payload: res.data
    });

    return Promise.resolve(res.data);
  } catch(err) {
    return Promise.reject(err);
  }
}