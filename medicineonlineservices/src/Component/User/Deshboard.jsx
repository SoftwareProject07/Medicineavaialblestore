import React, { useEffect, useState } from "react";
import "../styles/deshboards.css";
import "../styles/noscroll.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [medicines, setMedicines] = useState([]);
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const firstPageSize = 5;
  const pageSize = 10;

  // 🔹 Edit Form
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
      .get("https://ecommerencesite-api.onrender.com/api/MEDICINE/AllListMedicineProduct")
      .then((res) => {
        const list = Array.isArray(res.data) ? res.data : res.data?.data;
        setMedicines(Array.isArray(list) ? normalize(list) : []);
      })
      .catch(() => setMedicines([]));
  }, []);

  // 🔹 SEARCH FILTER
  const filteredMedicines = medicines.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Pagination Logic
  const getPageSize = (page) => (page === 1 ? firstPageSize : pageSize);

  const startIndex =
    currentPage === 1
      ? 0
      : firstPageSize + (currentPage - 2) * pageSize;

  const endIndex = startIndex + getPageSize(currentPage);

  const paginatedMedicines = filteredMedicines.slice(startIndex, endIndex);

  const remainingItems = Math.max(filteredMedicines.length - firstPageSize, 0);

  const totalPages =
    filteredMedicines.length <= firstPageSize
      ? 1
      : 1 + Math.ceil(remainingItems / pageSize);

  // 🔹 Edit Click
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

  // 🔹 Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 Update Medicine
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
          prev.map((m) => (m.id === id ? { ...m, ...formData } : m))
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

  // 🔹 Delete Medicine
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await axios.delete(
        `https://ecommerencesite-api.onrender.com/api/MEDICINE/DeleteMedicine/${id}`
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
          <img src="/AKMedizostore.png" alt="logo" width="45" />
          <span className="ms-2">AKMedizostore</span>
        </a>

        <ul className="menu mt-4">
          <Link to="/deshboard" className="btn btn-success mb-2">
            Admin Dashboard
          </Link>

          <Link to="/header" className="btn btn-success mb-2">
            Medicines
          </Link>

          <li>Orders</li>
          <li>Cart</li>
          <li>Profile</li>

          <Link to="/header" className="btn btn-danger mt-3">
            Logout
          </Link>
        </ul>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="content">
        <div className="topbar d-flex justify-content-between">
          <h2>Medicines</h2>
          <Link to="/deshboard/medicines" className="btn btn-success">
            Add Medicine
          </Link>
        </div>

        {/* 🔹 Search */}
        <input
          className="form-control my-3"
          placeholder="Search by name or manufacturer"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        {/* 🔹 Table */}
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Qty</th>
              <th>Expiry</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedMedicines.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">
                  No medicines found
                </td>
              </tr>
            ) : (
              paginatedMedicines.map((med) => (
                <tr key={med.id}>
                  <td>{editingMedicine === med.id ? <input name="name" value={formData.name} onChange={handleChange} /> : med.name}</td>
                  <td>{editingMedicine === med.id ? <input name="manufacturer" value={formData.manufacturer} onChange={handleChange} /> : med.manufacturer}</td>
                  <td>{editingMedicine === med.id ? <input name="unitPrice" value={formData.unitPrice} onChange={handleChange} /> : med.unitPrice}</td>
                  <td>{editingMedicine === med.id ? <input name="discount" value={formData.discount} onChange={handleChange} /> : med.discount}</td>
                  <td>{editingMedicine === med.id ? <input name="quantity" value={formData.quantity} onChange={handleChange} /> : med.quantity}</td>
                  <td>{editingMedicine === med.id ? <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} /> : new Date(med.expiryDate).toLocaleDateString()}</td>

                  <td>
                    {editingMedicine === med.id ? (
                      <>
                        <button className="btn btn-success btn-sm" onClick={() => handleUpdate(med.id)}>Update</button>{" "}
                        <button className="btn btn-secondary btn-sm" onClick={() => setEditingMedicine(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(med)}>Edit</button>{" "}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(med.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* 🔹 Pagination */}
        <div className="d-flex justify-content-center gap-2">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>Prev</button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
            >
              {i + 1}
            </button>
          ))}

          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
