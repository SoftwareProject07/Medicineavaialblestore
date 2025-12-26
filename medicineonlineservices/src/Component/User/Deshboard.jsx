import React, { useEffect, useState } from "react";
import "../styles/deshboards.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [medicines, setMedicines] = useState([]);
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    manufacturer: "",
    unitPrice: "",
    discount: "",
    quantity: "",
    expiryDate: "",
  });

  // 🔹 Normalize API response
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

  // 🔹 GET MEDICINES
  useEffect(() => {
    axios
      .get(
        "https://ecommerencesite-api.onrender.com/api/MEDICINE/AllListMedicineProduct"
      )
      .then((res) => {
        const list = Array.isArray(res.data)
          ? res.data
          : res.data?.data;
        setMedicines(Array.isArray(list) ? normalize(list) : []);
      })
      .catch(() => setMedicines([]));
  }, []);

  // 🔹 SEARCH FILTER
  const filteredMedicines = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 EDIT CLICK
  const handleEditClick = (med) => {
    setEditingMedicine(med.id);
    setFormData({
      name: med.name,
      manufacturer: med.manufacturer,
      unitPrice: med.unitPrice,
      discount: med.discount,
      quantity: med.quantity,
      expiryDate: med.expiryDate?.split("T")[0],
    });
  };

  // 🔹 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 UPDATE MEDICINE
  const handleUpdate = async (id) => {
    try {
      const payload = {
        Id: id,
        Name: formData.name,
        Manufacturer: formData.manufacturer,
        UnitPrice: Number(formData.unitPrice),
        Discount: Number(formData.discount),
        Quantity: Number(formData.quantity),
        ExpiryDate: new Date(formData.expiryDate).toISOString(),
      };

      const res = await axios.put(
        "https://ecommerencesite-api.onrender.com/api/MEDICINE/UpdateMedicine",
        payload
      );

      if (res.data.status) {
        setMedicines((prev) =>
          prev.map((m) =>
            m.id === id ? { ...m, ...formData } : m
          )
        );
        setEditingMedicine(null);
        alert("Updated successfully");
      } else {
        alert(res.data.responseMessage || "Update failed");
      }
    } catch {
      alert("Update failed");
    }
  };

  // 🔹 DELETE MEDICINE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await axios.delete(
        "https://ecommerencesite-api.onrender.com/api/MEDICINE/DeleteMedicine/" +
          id
      );

      if (res.data.status) {
        setMedicines((prev) => prev.filter((m) => m.id !== id));
        alert("Deleted successfully");
      } else {
        alert(res.data.responseMessage);
      }
    } catch {
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
            style={{ width: 50, height: 50, marginRight: 8 }}
          />
          AKMedizostore
        </a>

        <ul className="menu">
          <Link to="/deshboard" className="btn btn-success">
            Admin Dashboard
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

      {/* ---------- CONTENT ---------- */}
      <div className="content">
        <div className="topbar d-flex justify-content-between align-items-center">
          <h2>Medicines</h2>
          <Link to="/deshboard/medicines" className="btn btn-success">
            Add Medicine
          </Link>
        </div>

        {/* ---------- SEARCH ---------- */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or manufacturer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="bi bi-search"></i>
        </div>

        {/* ---------- TABLE ---------- */}
        <table className="table table-hover align-middle">
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
            {filteredMedicines.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">
                  No medicines found
                </td>
              </tr>
            ) : (
              filteredMedicines.map((med) => (
                <tr
                  key={med.id}
                  className={
                    editingMedicine === med.id ? "editing-row" : ""
                  }
                >
                  <td>
                    {editingMedicine === med.id ? (
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    ) : (
                      med.name
                    )}
                  </td>

                  <td>
                    {editingMedicine === med.id ? (
                      <input
                        name="manufacturer"
                        value={formData.manufacturer}
                        onChange={handleChange}
                      />
                    ) : (
                      med.manufacturer
                    )}
                  </td>

                  <td>
                    {editingMedicine === med.id ? (
                      <input
                        name="unitPrice"
                        value={formData.unitPrice}
                        onChange={handleChange}
                      />
                    ) : (
                      med.unitPrice
                    )}
                  </td>

                  <td>
                    {editingMedicine === med.id ? (
                      <input
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                      />
                    ) : (
                      med.discount
                    )}
                  </td>

                  <td>
                    {editingMedicine === med.id ? (
                      <input
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    ) : (
                      med.quantity
                    )}
                  </td>

                  <td>
                    {editingMedicine === med.id ? (
                      <input
                        type="date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                      />
                    ) : (
                      new Date(med.expiryDate).toLocaleDateString()
                    )}
                  </td>

                  <td>
                    {editingMedicine === med.id ? (
                      <>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleUpdate(med.id)}
                        >
                          Update 
                        </button>{" "} ||
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setEditingMedicine(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleEditClick(med)}
                        >
                          Edit
                        </button>{" "} ||
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(med.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
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
