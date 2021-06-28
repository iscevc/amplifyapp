import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Form} from "react-bootstrap"

import {login} from "../actions/auth";

const validationSchema = Yup.object({
  username: Yup.string().required("El usuario es obligatorio."),
  password: Yup.string().required("La contraseña es obligatoria."),
});

const Login = (props) => {

  const [loading, setLoading] = useState(false);

  const {isLoggedIn} = useSelector(state => state.auth);
  const {message} = useSelector(state => state.message);
  const dispatch = useDispatch();

  const {handleSubmit,handleChange, values, errors,touched } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema,
    onSubmit(values, {setSubmitting, resetForm}) {
      setLoading(true);
      setSubmitting(true);
      const {username, password} = values

      dispatch(login(username, password))
        .then(() => {
          props.history.push("profile");
        })
        .catch(() => {
          setLoading(false);
          setSubmitting(false);
        })
    }
  });

  if(isLoggedIn) {
    return <Redirect to="/profile"/>;
  }

  return(
    <div className="col-md-12">
      <div className="card card-container">
        <div>Hola</div>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
          />

          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={errors.username}
                />
                {errors.username && touched.username && (
                  <Form.Control.Feedback type="invalid">
                      {errors.username}
                  </Form.Control.Feedback>
                )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Contrase&ntilde;a</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={errors.password}
                />
                {errors.password && touched.password && (
                  <Form.Control.Feedback type="invalid">
                      {errors.password}
                  </Form.Control.Feedback>
                )}
            </Form.Group>

            <Form.Group>
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Entrar</span>
              </button>
            </Form.Group>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
      </div>
    </div>
  )
}

export default Login;