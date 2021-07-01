import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Form, Container, Row, Col} from "react-bootstrap"
import {register, getRoles} from '../actions/auth';
import axios from "axios";

const validationSchema = Yup.object({
  username: Yup.string().required("El nombre de usuario es obligatorio."),
  email: Yup.string().email().required("El email es obligatorio."),
  password: Yup
            .string()
              .required("Por favor ingresa una contraseña valida.")
              .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
              ),
});

const Register = () => {

  const [successful, setSuccessful] = useState(false);
 
  const [roles, setRoles] = useState([])
 
  const {message} = useSelector(state => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://fourofjul.us-east-1.elasticbeanstalk.com/api/auth/roles')
    .then((response) => {
      setRoles(response.data)
    })
  } , []);


  const {handleSubmit, handleChange, values, errors, touched} = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: ""
    },
    validationSchema,
    onSubmit(values, {setSubmitting, resetForm}) {

      setSubmitting(true);
      setSuccessful(false);
   
    const {username, email, password, role} = values;
    dispatch(register(username, email, password, [role]))
      .then(() => {
        setSuccessful(true);
        resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        setSuccessful(false);
        setSubmitting(false);
      }); 
    }
  });

  return(
    <Container>

          <Form noValidate onSubmit={handleSubmit}>
            {!successful && (
              <div>
                <Row>
                  <Form.Group as={Col}>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    isInvalid={errors.username && touched.username}
                    />
                  {errors.username && touched.username && (
                    <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                  )}
                  </Form.Group>
                  <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={errors.email && touched.email}
                    />
                    {errors.email && touched.email && (
                    <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                  )}
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col}>
                  <Form.Label>Contrase&ntilde;a</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    isInvalid={errors.password && touched.password}
                    />
                    {errors.password && touched.password && (
                    <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                  )}
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Rol</Form.Label>
                  <Form.Control 
                    as="select"
                    name="role"
                    onChange={handleChange}
                    value={values.rol}
                    isInvalid={errors.rol}>
                      {roles.map((r) => {
                        return <option key={r.id} value={r.name}>{r.description}</option>
                      })}
                  </Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Col>
                  <button class="btn btn-primary" type="submit">Registrar</button>
                  </Col>
                </Row>
              </div>
            )}
  
            {message && (
              <div className="form-group">
                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
      </Container>
  );
}

export default Register;