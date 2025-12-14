import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import style from  "../component/styles/registerations.module.css";
import axios from 'axios';

export default function Registeration() {
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [found, setFound] = useState("");
  const [type, setType] = useState("");
  const [createon, setCreateOn] = useState("");

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleMiddleNameChange = (value) => {
    setMiddleName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleFoundChange = (value) => {
    setFound(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleCreateOnChange = (value) => {
    setCreateOn(value);
  };

  const handlesave = () => {
    const data = {
      FirstName: firstname,
      MiddleName: middlename,
      LastName: lastname,
      Password: password,
      Email: email,
      Fund: found,
      type: type,
      CreateOn: createon
    };
   axios
      .post(
        "http://localhost:5256/api/USERMEDICINE/CREATERegisterUser",
        data,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        alert("Login Successful!");
        navigate("login");
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.responseMessage);
        } else if (error.request) {
          alert("No response from server!");
        } else {
          alert("Request Error: " + error.message);
        }
      });
  };
  return (
    <Fragment>
      <section className={style.bg} >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <form>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">FirstName</label>
                        <input type="text" id="txtFirstName" className="form-control form-control-lg" onChange={(e) => handleFirstNameChange(e.target.value)} />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="txtMiddleName" className="form-control form-control-lg" onChange={(e) => handleMiddleNameChange(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3cg">MiddleName</label>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="txtLastName" className="form-control form-control-lg" onChange={(e) => handleLastNameChange(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3cg">LastName</label>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="txtPassword" className="form-control form-control-lg" onChange={(e) => handlePasswordChange(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="txtEmail" className="form-control form-control-lg" onChange={(e) => handleEmailChange(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="found" id="txtFound" className="form-control form-control-lg" hidden onChange={(e) => handleFoundChange(e.target.value)} />
                        {/* <label className="form-label" htmlFor="form3Example4cg">Found</label> */}
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="type" id="txtType" className="form-control form-control-lg" hidden onChange={(e) => handleTypeChange(e.target.value)} />
                        {/* <label className="form-label" htmlFor="form3Example4cdg">Type</label> */}
                      </div>
                      <input type="datetime-local" id="textCreateOn" className="form-control form-control-lg" onChange={(e) => handleCreateOnChange(e.target.value)} hidden />
                      {/* <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in <Link to="#" className="text-body"><u>Terms of service</u></Link>
                      </label>
                    </div> */}

                      <div className="d-flex justify-content-center">
                        <button type="button" data-mdb-button-init
                          data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={() => handlesave()}>Register</button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Have already an account?  <Link to="/login"><u>Login here</u> </Link></p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}