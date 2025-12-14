import React from "react";
import "../Component/styles/deshboards.css";

export default function Dashboard() {
  const medicines = [
    { name: "Paracetamol", brand: "Cipla", price: "$5.00", stock: 100 },
    { name: "Amoxicillin", brand: "GSK", price: "$10.00", stock: 50 },
    { name: "Ibuprofen", brand: "Pfizer", price: "$8.00", stock: 200 },
    { name: "Cetirizine", brand: "Sun Pharma", price: "$12.00", stock: 75 },
    { name: "Metformin", brand: "Lupin", price: "$7.00", stock: 120 },
  ];

  return (
    <div className="dashboard-container">

      {/* ---------- SIDEBAR ---------- */}
      <div className="sidebar">
<a className="navbar-brand d-flex align-items-center" href="#">
  <img 
    src="/AKMedizostore.png" 
    alt="AKMedizostore"
    style={{ width: "30px", height: "30px", marginRight: "8px" }}
  />
  AKMedizostore
</a>
        <ul className="menu">
          <li><i className="bi bi-speedometer2"></i> Dashboard</li>
          <li className="active"><i className="bi bi-capsule"></i> Medicines</li>
          <li><i className="bi bi-cart"></i> Orders</li>
          <li><i className="bi bi-bag"></i> Cart</li>
          <li><i className="bi bi-person"></i> Profile</li>
          <li><i className="bi bi-power"  ></i><a href="../login">Logout  </a></li>
        </ul>
      </div>

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="content">

        {/* TOP BAR */}
        <div className="topbar">
          <h2>Medicines</h2>

          <button className="btn btn-primary">Add Medicine</button>
        </div>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bi bi-search"></i>
        </div>

        {/* TABLE */}
        <table className="table align-middle table-hover">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {medicines.map((m, i) => (
              <tr key={i}>
                <td>{m.name}</td>
                <td>{m.brand}</td>
                <td>{m.price}</td>
                <td>{m.stock}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
