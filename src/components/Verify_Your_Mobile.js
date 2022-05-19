import React from "react";
import Wave_Top from "../assets/logo/Wave_Top.svg";
import EmailVerification from "../assets/logo/EmailVerification.svg";
import RightArrow from "../assets/icon/RightArrow.svg";
import { useNavigate } from "react-router-dom";

function Verify_Your_Mobile() {
  const history = useNavigate();
//   const location = useLocation();
  return (
    <>
      <div className="bg-container">
        <img alt="" src={Wave_Top} />
        <img alt="" src={EmailVerification} className="emailverificationimage" />
        <div className="card-container">
          <h1>verify your mobile</h1>
          <p>
            You've entered +91-XXXXX XXX68 as the mobile number for your
            account. Please verify this email address by clicking button below
          </p>
          <button
            onClick={() => history("/verifiedmobile")}
            className="button_mail"
          >
            Verify your mobile
            <img alt="" src={RightArrow} className="rightarrow" />
          </button>
          <p className="skipfunction">Skip</p>
        </div>
      </div>
    </>
  );
}
export default Verify_Your_Mobile;
