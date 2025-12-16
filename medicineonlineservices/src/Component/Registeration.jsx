import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/registerations.css";
import axios from "axios";
import API from "../src/Services/API.jsx";

export default function Registeration() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // ✅ decimal safe
  const [found] = useState(0);
  const [type] = useState("");
  const [createon] = useState(null);

  // const handleSave = () => {
  //   const data = {
  //     FirstName: firstname,
  //     MiddleName: middlename,
  //     LastName: lastname,
  //     Password: password,
  //     Email: email,
  //     Fund: found,
  //     Type: type,
  //     CreateOn: createon
  //   };
const handleSave = async () => {
  const data = {
    FirstName: firstname,
    MiddleName: middlename,
    LastName: lastname,
    Password: password,
    Email: email,
    Fund: found,
    Type: type,
    CreateOn: createon,
  };

  //   axios
  //     .post(
  //       "http://localhost:5256/api/USERMEDICINE/CREATERegisterUser",
  //       data,
  //       { headers: { "Content-Type": "application/json" } }
  //     )
  //     .then((response) => {
  //       alert("Registration Successful!");
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       if (error.response?.data) {
  //         alert(JSON.stringify(error.response.data));
  //       } else {
  //         alert("Server error");
  //       }
  //     });
  // };

    try {
    const res = await API.post(
      "/api/USERMEDICINE/CREATERegisterUser",
      data
    );

    alert(res.data.message);
  } catch (err) {
    console.error(err);
    alert("API Error");
  }
};

  return (
    <Fragment>
      <div className="bg">
        <section
          className="vh-100 bg-image"
          // style={{
          //   backgroundImage:
          //     "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"
          // }}
        >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        Create an account
                      </h2>

                      <div className="form-outline mb-4">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Middle Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          value={middlename}
                          onChange={(e) => setMiddleName(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-lg"
                          onClick={handleSave}
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-4">
                        Have already an account?{" "}
                        <Link to="/login">
                          <u>Login here</u>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
