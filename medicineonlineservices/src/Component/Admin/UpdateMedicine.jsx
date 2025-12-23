import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateMedicine({ editData, onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setManufacturer(editData.manufacturer);
      setUnitPrice(editData.unitPrice);
      setDiscount(editData.discount);
      setQuantity(editData.quantity);
      setExpiryDate(editData.expiryDate?.substring(0, 10));
    }
  }, [editData]);

  const handleUpdate = async () => {
    const payload = {
      id: editData.id,
      Name: name,
      Manufacturer: manufacturer,
      UnitPrice: Number(unitPrice),
      Discount: Number(discount),
      Quantity: Number(quantity),
      ExpiryDate: expiryDate,
      STATUS: 1,
    };

    try {
      const res = await axios.put(
        "http://localhost:5256/api/MEDICINE/UpdateMedicine",
        payload
      );

      if (res.data.status) {
        onSuccess(res.data.medicine);
        onClose();
      }
    } catch {
      alert("Update failed");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Update Medicine</h4>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        <input type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
        <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

        <button className="btn btn-success mt-2" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-secondary mt-2" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
