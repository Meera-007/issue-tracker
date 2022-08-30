import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (formdata) => {
    console.log("Form submitted!!");
    console.log(formdata);

    fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Successful",
        });
        res.json().then(data => {
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/addissue');
        })
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Invalid Credentials",
        });
      }
    });
  };

  // for validation
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "Password should be longer than 4 characters")
      .required("Required"),
  });

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt=""
        />
      </div>
      <div className="text-center mt-4 name">Issue Tracker</div>
      <Formik
        initialValues={{ email: "", password: "" }} //specifying initial value for form
        onSubmit={handleFormSubmit} // function to handle form submission
        // validationSchema={loginSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                type="text"
                id="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Username"
              ></input>
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
              ></input>
            </div>
            <button className="btn mt-3">Login</button>
          </form>
        )}
      </Formik>
      <div className="text-center fs-6">
        <a href="#">Forgot Password?&nbsp;&nbsp;</a>
        or &nbsp; <a href="#">Sign Up here</a>
      </div>
    </div>

    /*{} <div style={{ background: "#eee", height: "100vh", width : "50%", display: "flex", marginLeft : "22%"  }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-muted text-center">Login Form</h3>
              <hr />

              <Formik
                initialValues={{ email: "", password: "" }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                validationSchema={loginSchema}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Email"
                      placeholder="Email Address"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      error={Boolean(errors.email) && touched.email}
                      helperText={touched.email ? errors.email : ""}
                    />

                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="password"
                      label="Password"
                      placeholder="Password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      error={Boolean(errors.password) && touched.password}
                      helperText={touched.password ? errors.password : ""}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 5 }}
                    >
                      Login Now
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div> }*/
  );
};

export default Login;
