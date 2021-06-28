import React, {useState} from "react";
import {useFormik} from "formik";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import YesNotSelect from "./YesNotSelect";
import Plataforma from "./Plataforma";
import logo from '../logo.svg'

const BoardDespachador = () => {
  var [showPlataforma, setShowPlataforma] = useState(false);

  return(
    <Container>
      <Form>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Carpeta Completa</Form.Label>
            <YesNotSelect name="carpetaCompleta"/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Extinguidor</Form.Label>
            <YesNotSelect name="extinguidor"/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Luces Muertas</Form.Label>
            <YesNotSelect name="lucesMuertas"/>
          </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col}>
            <Form.Label>Bandas</Form.Label>
            <Form.Control
              as="select"
              name="bandas">
                {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
              </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cadenas</Form.Label>
            <Form.Control
              as="select"
              name="bandas">
                {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
              </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Perros</Form.Label>
            <YesNotSelect name="lucesMuertas"/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Herramienta</Form.Label>
            <YesNotSelect name="carpetaCompleta"/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Chaleco</Form.Label>
            <YesNotSelect name="extinguidor"/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Casco</Form.Label>
            <YesNotSelect name="lucesMuertas"/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Objetos personales</Form.Label>
            <YesNotSelect name="carpetaCompleta"/>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Esquineros o "V" Boards</Form.Label>
            <Form.Control
              as="select"
              name="bandas">
                {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
              </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Barra</Form.Label>
            <YesNotSelect name="lucesMuertas"/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Comentarios</Form.Label>
            <Form.Control as="textarea"/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
          <Button type="primary">Guardar</Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  )
}

export default BoardDespachador;