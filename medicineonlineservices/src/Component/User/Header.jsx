import React from "react";
import "../styles/headers.module.css";


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
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/AKMedizostore.png"
            alt="AKMedizostore"
            style={{ width: "40px", height: "40px", marginRight: "8px" }}
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
            <li className="nav-item">
              <a className="nav-link" href="#top">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#medicineOrder">Medicine Order</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Aboutn">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../contact">Contact Us</a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Medicines"
            />
            <button className="btn btn-outline-success" type="button">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="w-100"
        style={{
          backgroundColor: "#f5fbff",
          padding: "40px 0 30px",
        }}
        id="top"
      >
        <div className="container text-center">

          <h1 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>
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
          <div
            className="mx-auto d-flex align-items-center bg-white shadow-sm rounded-pill"
            style={{ maxWidth: "700px", padding: "4px 8px" }}
          >
            <button
              className="btn btn-link text-decoration-none text-dark d-flex align-items-center px-3"
              type="button"
            >
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

            <button
              className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center ms-2"
              type="button"
              style={{ width: "42px", height: "42px" }}
            >
              🔍
            </button>
          </div>

          {/* ORDER VIA */}
          <div className="mt-5">
            <p className="text-uppercase text-muted mb-3" style={{ letterSpacing: "2px" }}>
              Place your order via
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <button className="btn btn-light shadow-sm d-flex align-items-center px-4 py-3">
                📞 Call 08046800924 to place order
              </button>
              <button className="btn btn-light shadow-sm d-flex align-items-center px-4 py-3">
                ⬆️ Upload a prescription
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSTITUTE SAVE 51% SECTION (1st Image Copy) */}
      <section className="container my-5 p-4 shadow-sm rounded" style={{ background: "#fff7e6" }}>
        <div className="row align-items-center">

          <div className="col-md-4 text-center">
            <img
              src="/doctorimg.png"
              alt="doctor"
              style={{ width: "80%", borderRadius: "10px" }}
            />
          </div>

          <div className="col-md-8">
            <h3 className="fw-bold">Substitutes are the smarter choice</h3>

            <div className="row mt-3">
              <div className="col-4">
                <h6>🛡 Safe</h6>
                <p className="text-muted small">FDA & GMP certified</p>
              </div>

              <div className="col-4">
                <h6>💊 Same</h6>
                <p className="text-muted small">Same salt composition</p>
              </div>

              <div className="col-4">
                <h6>💰 Savings</h6>
                <p className="text-muted small">Up to 51% cheaper</p>
              </div>
            </div>

            <div className="alert alert-light mt-3 shadow-sm">
              ⭐ All substitutes made by top 1% medicine manufacturers
            </div>

            <a href="#" className="fw-bold text-primary">View Example →</a>
          </div>
        </div>
      </section>

      {/* TRENDING OFFERS (2nd Image Style) */}
      <section className="container my-5">
        <h3 className="fw-bold mb-3">Top Offers</h3>

        <div className="row g-3">

          <div className="col-md-6">
            <div className="p-4 rounded" style={{ background: "#fff4e6" }}>
              <h4>Up to 50% Off</h4>
              <p className="text-muted">On essential medicines</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 rounded" style={{ background: "#e6f7ff" }}>
              <h4>Flat 26% Cashback</h4>
              <p className="text-muted">On first order via MobiKwik</p>
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
                  className="card-img-top"
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
