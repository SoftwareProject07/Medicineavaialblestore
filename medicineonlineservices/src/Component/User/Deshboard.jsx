//Deshboard--correct 
import React, { useEffect, useState } from "react";
import "../styles/deshboards.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import UpdateMedicine from './Admin/UpdateMedicine.jsx';

export default function Dashboard() {
const [medicines, setMedicines] = useState([]);
  


  // 🔹 Normalize API response (PascalCase + camelCase fix)
  const normalize = (list) =>
    list.map((m) => ({
      id: m.id ?? m.Id,
      name: m.name ?? m.Name,
      manufacturer: m.manufacturer ?? m.Manufacturer,
      unitPrice: m.unitPrice ?? m.UnitPrice,
      discount: m.discount ?? m.Discount,
      quantity: m.quantity ?? m.Quantity,
      expiryDate: m.expiryDate ?? m.ExpiryDate,
    }));

  useEffect(() => {
    axios
      // .get("http://localhost:5256/api/MEDICINE/AllListMedicineProduct")
            .get("https://ecommerencesite-api.onrender.com/api/MEDICINE/AllListMedicineProduct")

      .then((res) => {
        console.log("API RESPONSE:", res.data);

        const list = Array.isArray(res.data)
          ? res.data
          : res.data?.data;

        setMedicines(Array.isArray(list) ? normalize(list) : []);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setMedicines([]);
      });
  }, []);

  
 //DELETE FUNCTION (component ke ANDAR)
 const handleDelete = async (id) => {
  if (!window.confirm("Are you sure?")) return;

  try {
    //const res = await axios.delete(
     // `http://localhost:5256/api/MEDICINE/DeleteMedicine/${id}`
     const res = await axios.delete(
  "http://localhost:5256/api/MEDICINE/DeleteMedicine/" + id
);

    // );

    if (res.data.status) {
      setMedicines((prev) => prev.filter((m) => m.id !== id));
      alert("Deleted successfully");
    } else {
      alert(res.data.responseMessage);
    }
  } catch (error) {
    console.error("Delete error:", error);
    alert("Delete failed");
  }
};



  


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
        <br></br>

        <ul className="menu">
          <Link to="/deshboard" className="btn btn-success">
            AdminProfileMASTER
          </Link>

          <br /><br />

          <Link to="/header" className="btn btn-success">
            Medicines
          </Link>

          <li><i className="bi bi-cart"></i> Orders</li>
          <li><i className="bi bi-bag"></i> Cart</li>
          <li><i className="bi bi-person"></i> Profile</li>

          <li className="nav-item">
            <Link to="/header" className="btn btn-success">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="content">

        <div className="topbar d-flex justify-content-between align-items-center">
          <h2>Medicines</h2>

          <Link to="/deshboard/medicines" className="btn btn-success">
            Add Medicine
          </Link>
        </div>

        {/* ---------- searchbar ---------- */}

         <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bi bi-search"></i>
        </div>
       {/* ---------- TABLE ---------- */}

        <table className="table align-middle table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Unit Price</th>
              <th>Discount</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Action</th>
            </tr>
          </thead>

        <tbody>
  {medicines.length === 0 ? (
    <tr>
      <td colSpan="10" className="text-center">
        No medicines found
      </td>
    </tr>
  ) : (
    medicines.map((med) => (
                <tr key={med.id}>
                   <td>{med.name}</td>
                  <td>{med.manufacturer}</td>
                  <td>{med.unitPrice}</td>
                  <td>{med.discount}</td>
                  <td>{med.quantity}</td>
                  <td>
                    {med.expiryDate
                      ? new Date(med.expiryDate).toLocaleDateString()
                      : "N/A"}
                  </td>



                  <td>
               
                     <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleEditClick(medicine)}
                >
                  Edit
                </button>
                    
                    ||
                  {/* <button className="btn btn-danger btn-sm">Delete</button> */}
       <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(med.id)}
                    >
                      Delete
                    </button>

                </td>
      </tr>
    ))
  )}
</tbody>

        </table>
      

      </div>

    </div>
  );
}
      
