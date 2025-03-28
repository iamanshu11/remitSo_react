import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmailVerification from "./pages/EmailVerification";
import SelectCountry from "./pages/SelectCountry";
import ProfileSetup from "./pages/ProfileSetup";
import ContactDetails from "./pages/ContactDetails";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import EnterPinScreen from "./pages/EnterPinScreen";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import RecipientPage from "./pages/RecipientPage";
import RecipientDetails from "./pages/RecipientDetails";
import ConfirmTrans from "./pages/ConfirmTrans";
import AccountVerification from "./pages/AccountVerification";
import UploadIdentity from "./pages/UploadIdentity";
import UploadPassport from "./pages/UploadPassport";
import UploadDriversLicense from "./pages/UploadDriversLicense";
import UploadNationalID from "./pages/UploadNationalID";
import SuccessPage from "./pages/SuccessPage";
import YourTransfers from "./pages/YourTransfers";


function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/select-country" element={<SelectCountry />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/contact-details" element={<ContactDetails />} />
          <Route path="/TwoFactor-Auth" element={<TwoFactorAuth />} />
          <Route path="/EnterPin-Screen" element={<EnterPinScreen />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/your-recipients" element={<RecipientPage />} />
          <Route path="/recipient-details/:id" element={<RecipientDetails />} />
          <Route path="/confirm-trans" element={<ConfirmTrans />} />
          <Route path="/account-verification" element={<AccountVerification />} />
          <Route path="/upload-identity" element={<UploadIdentity />} />
          <Route path="/upload/passport" element={<UploadPassport />} />
          <Route path="/upload/drivers-license" element={<UploadDriversLicense />} />
          <Route path="/upload/national-id" element={<UploadNationalID />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/your-transfers" element={<YourTransfers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
