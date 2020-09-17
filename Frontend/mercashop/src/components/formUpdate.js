import React, { useState } from "react";

export default function FormUpdate({ user }) {
  const [customer, setCustomer] = useState({
    names: customer.names,
    lastNames: customer.lastNames,
    idType: customer.idType,
    idNumber: customer.idNumber,
    email: customer.email,
    phone: customer.phone,
    birthDate: customer.birthDate,
    adress: customer.adress,
    userName: customer.userName,
  });

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onClick={handleUpdate}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName" className="font-weight-bolder">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              placeholder={customer.names}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName" className="font-weight-bolder">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              placeholder={customer.lastNames}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputIdType" className="font-weight-bolder">
              Tipo de Identificación
            </label>
            <select
              id="inputIdType"
              className="form-control"
              defaultValue={customer.idType}
            >
              <option value="predeterminado" disabled>
                Seleccione una opción
              </option>
              <option value="Cedula de ciudadanía">Cedula de ciudadanía</option>
              <option value="Cedula de extranjería">
                Cedula de extranjería
              </option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputIdNumber" className="font-weight-bolder">
              Número de Identificación
            </label>
            <input
              type="number"
              className="form-control"
              id="inputIdNumber"
              placeholder={customer.idNumber}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail" className="font-weight-bolder">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder={customer.email}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputPhone" className="font-weight-bolder">
              Número telefónico
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPhone"
              placeholder={customer.phone}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputBirthDate" className="font-weight-bolder">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="inputBirthDate"
              placeholder={customer.birthDate}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputAdress" className="font-weight-bolder">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAdress"
              placeholder={customer.adress}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputUserName" className="font-weight-bolder">
            Nombre de Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUserName"
            placeholder={customer.userName}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Actualizar
        </button>
      </form>
    </div>
  );
}
