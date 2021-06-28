import React from "react";
import {Form} from "react-bootstrap";

const YesNotSelect = ({name}) => {
  return(
    <Form.Control
      name={name}
      as="select">
        <option value={true}>SI</option>
        <option value={false}>NO</option>
      </Form.Control>
  )
}

export default YesNotSelect;