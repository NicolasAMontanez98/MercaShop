import React from "react";
import {Link} from 'react-router-dom';
import logo from './../assets/images/Merca Shop letters.png';

class Login extends React.Component {
    render () {
        return (
            <div className=" d-flex justify-content-center">
                <div className="card bg-light my-5" style={{width: "20rem"}}>
                    <div className="card-header text-center">
                        <img src={logo} className="mb-2" width="190" height="190"/>
                        <h1 className="h3 mb-3 font-weight-normal">Inicia Sesión o Registrate</h1>
                    </div>
                    <div className="card-body">
                        <form className="form-signin" width="500">
                        <label htmlFor="inputemail">Correo Electrónico</label>
                            <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Correo Electrónico" required></input>
                        <label htmlFor="inputemail">Contraseña</label>
                            <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Contraseña" required></input>
                            <button className="btn btn-lg btn-primary btn-block rounded-pill" type="submit">Ingresar</button>
                            <div className="row">
                                <div className="col">
                                <Link to="/registro-cliente">
                                    <button className="btn btn-info mt-2 btn-sm rounded-pill">Registrarse Cliente</button>
                                </Link>
                                </div>
                                <div className="col">
                                <Link to="/registro-proveedor">
                                    <button className="btn btn-info mt-2 btn-sm rounded-pill">Registrarse Proveedor</button>
                                </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Login;