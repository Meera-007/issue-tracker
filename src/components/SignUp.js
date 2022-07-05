import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const SignUp = () => {
  const handleFormSubmit = (formdata) => {
    console.log(formdata);

    // 1. address
    // 2. request method
    // 3. data to be sent
    // 4. data format

    fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registration Successful",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Some Error Occured",
        });
      }
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h3 className="text-muted text-center">Sign Up here</h3>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              gender: "",
              contact : "",
            }}
            onSubmit={handleFormSubmit}
          >
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <label className="mt-4">Full Name</label>
                <input
                  className="form-control"
                  placeholder="Name"
                  value={values.name}
                  id="name"
                  onChange={handleChange}
                />
                <label className="mt-4">Email</label>
                <input
                  className="form-control"
                  placeholder="Email Address"
                  value={values.email}
                  id="email"
                  onChange={handleChange}
                />
                <label className="mt-4">Password</label>
                <input
                  className="form-control"
                  placeholder="Secret Password"
                  type="password"
                  value={values.password}
                  id="password"
                  onChange={handleChange}
                />

                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={values.gender}
                    name="gender"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>

                <button className="btn btn-primary mt-5">Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;