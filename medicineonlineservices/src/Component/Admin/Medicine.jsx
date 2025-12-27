import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/admincreateMedicine.css";

export default function Medicine() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState(""); // ✅ FIX
  const [imageurl , setImageUrl]=useState("");

  const handleSave = async () => {
    if ( !name || !manufacturer || !unitPrice || !quantity || !expiryDate|| !imageurl) {
      alert("Please fill all required fields");
      return;
    }

    const data = {
      //Id:id,
      name: name,
      manufacturer: manufacturer,
      unitPrice: Number(unitPrice),
      discount: Number(discount || 0),
      quantity: Number(quantity),
      expiryDate: expiryDate, // yyyy-mm-dd
    imageurl:imageurl,
      status: 1 // ✅ IMPORTANT
    };

    try {
      await axios.post(
      
      "https://ecommerencesite-api.onrender.com/api/MEDICINE/CreateMedicine",

        data,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Add Medicine Successful");
      navigate("/deshboard");
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      alert("Add Medicine Failed");
    }
  };

  return (
    <Fragment>
      <div className="medicine-page">
        <fieldset className="createmedicinecss">
          <legend style={{ textAlign: "center" }}>Create Medicine</legend>

          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Manufacturer" value={manufacturer} onChange={e => setManufacturer(e.target.value)} />
          <input type="number" placeholder="Unit Price" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
          <input type="number" placeholder="Discount" value={discount} onChange={e => setDiscount(e.target.value)} />
          <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
          <input type="date" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} />
                    <input type="file" value={imageurl} onChange={e => setImageUrl(e.target.value)} />

          <button className="btn btn-success w-100" onClick={handleSave}>
            Add Medicines
          </button>


          
        </fieldset>
      </div>
    </Fragment>
  );
}
