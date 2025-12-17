import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/registerations.css";
//import API from "../Services/API";

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

  // ✅ FINAL SAVE FUNCTION
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

    try {
     await axios.post(
  "https://ecommerencesite-api.onrender.com/api/USERMEDICINE/CREATERegisterUser",
  data,
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);
      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("API Error");
    }
  };

  return (
    <Fragment>
      <div className="bg">
        {/* ❌ YAHAN // COMMENT NAHI LAGANA */}
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="card p-4" style={{ borderRadius: "15px" }}>
                  <h3 className="text-center mb-4">Create an account</h3>

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Middle Name"
                    value={middlename}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />

                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />

                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={handleSave}
                  >
                    Register
                  </button>

                  <p className="text-center mt-3">
                    Already have an account?{" "}
                    <Link to="/login">
                      <u>Login here</u>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}