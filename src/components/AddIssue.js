import { Button } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddIssue = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  // const [team,setTeam] = useState(JSON.parse(sessionStorage.getItem("team")))
  // useEffect(()=>{
  // if (!currentUser.team.title){
  //   Swal.fire({
  //     icon: "info",
  //     title: "OOops!!",
  //     text: "You are not in a team",
  //   });
  //   navigate('/track');
  // }

  // },[])

  const url = "http://localhost:5000";

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch(url + "/issue/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        title: "Success",
        text: "Issues Added Successfully",
        icon: "success",
      });

      navigate("/Track");
    } else {
      console.log("error occured");
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "search for error!!",
      });
    }
  };

  return (
    <div id="preview" class="preview">
      <div style={{ display: "none" }}></div>
      <div>
        <div data-draggable="true" class="" style={{ position: "relative" }}>
          <section
            draggable="false"
            class="overflow-hidden pt-1"
            data-v-271253ee=""
          >
            <section class="mb-2">
              <div
                class="p-2 bg-image"
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/new/textures/full/284.jpg')",
                  height: "300px",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundColor: "rgba(0, 0, 0, 0);",
                }}
                aria-controls="#picker-editor"
              ></div>
              <div
                class="card mx-4 mx-md-5 shadow-5-strong"
                style={{
                  marginTop: "-225px",
                  background: "hsla(0, 0%, 100%, 0.8)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div class="card-body py-5 px-md-5">
                  <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-5 mb-4 mb-lg-0">
                      <h1 className="text-center mt-4">Add Issues!!!</h1>
                      <hr />
                      <Formik
                        initialValues={{
                          title: "",
                          type: "",
                          assignedBy: currentUser._id,
                          assignedTo: "",
                          org: "",
                          createdAt: new Date(),
                        }}
                        onSubmit={userSubmit}
                      >
                        {/* validationSchema={SignupSchema} */}
                        {({ values, handleChange, handleSubmit, errors }) => (
                          <form action="" onSubmit={handleSubmit}>
                            <div class="form-outline mb-4">
                              {" "}
                              <input
                                type="text"
                                value={values.title}
                                onChange={handleChange}
                                id="title"
                                class="form-control"
                              />{" "}
                              <label
                                class="form-label"
                                for="title"
                                style={{ marginLeft: "0px;" }}
                              >
                                Title
                              </label>
                              <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  style={{ width: "9px" }}
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  style={{ width: "42.4px;" }}
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>

                            <div class="form-outline mb-4">
                              {" "}
                              <input
                                type="text"
                                value={values.type}
                                onChange={handleChange}
                                id="type"
                                class="form-control"
                              />{" "}
                              <label
                                class="form-label"
                                for="type"
                                style={{ marginLeft: "0px;" }}
                              >
                                Type
                              </label>
                              <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  style={{ width: "9px" }}
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  style={{ width: "42.4px;" }}
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>

                            <div class="form-outline mb-4">
                              {" "}
                              <input
                                type="text"
                                value={values.team}
                                onChange={handleChange}
                                id="team"
                                class="form-control"
                              />{" "}
                              <label
                                class="form-label"
                                for="team"
                                style={{ marginLeft: "0px;" }}
                              >
                                Team
                              </label>
                              <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  style={{ width: "9px" }}
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  style={{ width: "42.4px;" }}
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>

                            <div class="form-outline mb-4">
                              {" "}
                              <input
                                type="text"
                                value={values.assignedTo}
                                onChange={handleChange}
                                id="assignTo"
                                class="form-control"
                              />{" "}
                              <label
                                class="form-label"
                                for="assignTo"
                                style={{ marginLeft: "0px;" }}
                              >
                                Assigned To
                              </label>
                              <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  style={{ width: "9px" }}
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  style={{ width: "42.4px;" }}
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>

                            <div class="form-outline mb-4">
                              {" "}
                              <input
                                type="text"
                                value={values.org}
                                onChange={handleChange}
                                id="org"
                                class="form-control"
                              />{" "}
                              <label
                                class="form-label"
                                for="org"
                                style={{ marginLeft: "0px;" }}
                              >
                                Organisation
                              </label>
                              <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  style={{ width: "9px" }}
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  style={{ width: "42.4px;" }}
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>

                            <Button
                              type="submit"
                              color="secondary"
                              variant="contained"
                              className="btn-block mb-4"
                              sx={{ mt: 1 }}
                            >
                              Submit
                            </Button>
                          </form>
                        )}
                      </Formik>
                    </div>
                    <div class="col-lg-7 mb-4 mb-md-0">
                      <div class="row gx-lg-3">
                        <img
                          src="https://static.thenounproject.com/png/2379847-200.png"
                          alt=""
                          style={{ height: "60vh" }}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddIssue;
