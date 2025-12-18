import React from "react";
import "../styles/headers.css";
import { Link } from "react-router-dom";

// import "../styles/noscroll.css";

export default function Header() {
  const categories = [
    "Medicines",
    "Personal Care",
    "Health Conditions",
    "Vitamins & Supplements",
    "Diabetes Care",
    "Healthcare Devices",
    "Homeopathic Medicine",
    "Health Guide",
  ];

  const meds = [
    { name: "Paracetamol", price: 25 },
    { name: "Amoxicillin", price: 60 },
    { name: "Vitamin C Tablets", price: 90 },
    { name: "Cough Syrup", price: 80 },
    { name: "Crocin", price: 35 },
    { name: "Skin Ointment", price: 50 },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm w-100">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/AKMedizostore.png"
            alt="AKMedizostore"
            className="img-fluid"
            style={{ width: "40px", marginRight: "8px" }}
          />
          AKMedizostore
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#top">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#medicineOrder">Medicine Order</a></li>
            <li className="nav-item"><a className="nav-link" href="#Aboutn">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
            <li className="nav-item">
  <Link className="nav-link" to="/contact">
    Contact Us
  </Link>
</li>
          </ul>

          <div className="d-flex align-items-center gap-3 ms-3">
            <a href="/login" className="text-primary fw-semibold">Login / Signup</a>

            <a href="#" className="position-relative">
              🛒
              <span className="badge bg-danger text-white cart-badge">0</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section w-100" id="top">
        <div className="container text-center">

          <h1 className="fw-bold mb-3 hero-title">
            Say Goodbye to high medicine prices
          </h1>

          <p className="text-muted mb-4">
            Compare prices and save up to 51% on your medicines.
          </p>

          {/* CATEGORY MENU */}
          <div className="d-flex flex-wrap justify-content-center mb-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="btn btn-link text-decoration-none text-muted mx-2 my-1"
                style={{ fontSize: "0.9rem" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH BAR */}
          <div className="search-wrapper mx-auto shadow-sm rounded-pill">
            <button className="btn btn-link text-dark px-3 d-flex align-items-center">
              <span className="me-2">Deliver to</span>
              <span className="fw-semibold">Mumbai, 400001</span>
              <span className="ms-2">&#9662;</span>
            </button>

            <div className="vr" />

            <input
              type="text"
              className="form-control border-0 ms-2"
              placeholder="Search for medicines"
            />

            <button className="btn btn-primary search-btn" type="button">
              🔍
            </button>
          </div>

          {/* ORDER VIA */}
          <div className="mt-5">
            <p className="text-uppercase text-muted mb-3 order-title">
              Place your order via
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-3">

              {/* Doctor Image */}
              <button className="btn btn-light shadow-sm order-btn d-flex align-items-center">
                <img 
                  src="/doctor.png"
                  alt="doctor"
                  style={{ width: "100px", height: "100px", marginRight: "100px" }}
                />
              </button>

              {/* Call Button */}
              <button className="btn btn-light shadow-sm order-btn d-flex align-items-center">
                📞 Call 08046800924 to place order
              </button>

              {/* Upload Button */}
              <button className="btn btn-light shadow-sm order-btn">
                ⬆️ Upload a prescription
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* SUBSTITUTE SECTION (FULL TRUE-MEDS BLOCK) */}
      <section className="substitute-box container my-5">
        <div className="row align-items-center">

          {/* LEFT DOCTOR BANNER */}
          <div className="col-md-5">
            <div className="doctor-banner">
              <img src="/doctorpurple.png" className="img-fluid doctor-img" />

              <div className="play-btn">▶</div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-7">
            <div className="d-flex justify-content-between align-items-start">
              <h4 className="fw-bold">Substitutes are the smarter choice</h4>
              <a href="#" className="text-primary fw-semibold">Learn more</a>
            </div>

            <div className="row mt-3 text-center">
              <div className="col-4">
                <img src="/safe.png" className="icon-img" />
                <h6 className="fw-bold mt-2">Safe</h6>
                <p className="text-muted small">FDA and GMP certified<br />medicines</p>
              </div>

              <div className="col-4">
                <img src="/same.png" className="icon-img" />
                <h6 className="fw-bold mt-2">Same</h6>
                <p className="text-muted small">Exact same<br />salt composition</p>
              </div>

              <div className="col-4">
                <img src="/savings.png" className="icon-img" />
                <h6 className="fw-bold mt-2">Savings</h6>
                <p className="text-muted small">Up to 51%<br />cheaper</p>
              </div>
            </div>

            <div className="yellow-box mt-3">
              ⭐ All Substitutes are made by <b>top 1% medicine manufacturers</b>
            </div>

            <div className="text-center mt-3">
              <a href="#" className="text-primary fw-semibold">View Example →</a>
            </div>
          </div>

        </div>
      </section>

      {/* MEDICINE GRID */}
      <div className="container mt-4" id="medicineOrder">
        <h3 className="mb-3">All Medicines</h3>

        <div className="row">
          {meds.map((med, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/200"
                  className="card-img-top img-fluid"
                  alt={med.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{med.name}</h5>
                  <p className="mb-3">Price: ₹{med.price}</p>
                  <button className="btn btn-primary mt-auto w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </>
  );
}
