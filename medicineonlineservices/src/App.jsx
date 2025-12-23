import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Component/Login.jsx";
import Registeration from "./Component/Registeration.jsx";
import Header from "./Component/User/Header.jsx";
import Deshboard from "./Component/User/Deshboard.jsx";
import Contact from "./Component/Contact.jsx";
import Medicine from "./Component/Admin/Medicine.jsx";
import UpdateMedicine from "./Component/Admin/UpdateMedicine.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/header" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registeration" element={<Registeration />} />
      <Route path="/header" element={<Header />} />
      <Route path="/deshboard" element={<Deshboard />} />
        <Route path="/deshboard/medicines" element={<Medicine />} />

      <Route path="/contact" element={<Contact />} />
              <Route path="/updatemedicines" element={<UpdateMedicine />} />
      
    </Routes>
  );
}

export default App;
