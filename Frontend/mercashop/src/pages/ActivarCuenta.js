import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { verify } from "../store/actions/customerAction";
import logo from "./../assets/images/Merca Shop letters.png";

export default function ActivarCuenta(props) {
  const [isVerified, setVerificado] = useState(true);
  const dispatch = useDispatch();

  const handleVerify = (e) => {
    e.preventDefault();
    dispatch(verify(props.match.params.id, isVerified));
    props.history.push("/");
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="card bg-white mt-5" style={{ width: "30rem" }}>
        <div className="card-header bg-white mt-2 text-center">
          <img
            src={logo}
            className="mb-2"
            width="190"
            height="190"
            alt="mercashop"
            title="mercashop"
          />
          <h1>Gracias por activar tu cuenta</h1>
        </div>
        <div className="card-body bg-white text-center">
          <button className="btn btn-success" onClick={handleVerify}>
            Volver a Inicio
          </button>
        </div>
      </div>
    </div>
  );
}
