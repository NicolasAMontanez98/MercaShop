import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import abarrotes from './../assets/categories/abarrotes.png';
import aseoHogar from './../assets/categories/aseo hogar.png';
import aseoPersonal from './../assets/categories/aseo personal.png';
import bebidas from './../assets/categories/bebidas.png';
import cafe from './../assets/categories/café.png';
import carneYPollo from './../assets/categories/carne y pollo.png';
import carnesFrías from './../assets/categories/carnes frías y embutidos.png';
import cuidadoRopa from './../assets/categories/cuidado de la ropa.png';
import frutasVerduras from './../assets/categories/frutas y verduras.png';
import galletas from './../assets/categories/galletas.png';
import lacteosHuevos from './../assets/categories/lacteos y huevos.png';
import licores from './../assets/categories/licores.png';
import mascotas from './../assets/categories/mascotas.png';
import panaderia from './../assets/categories/panadería.png';

class SideMenu extends React.Component {
  render() {
    return (
      <div className="vh-100 overflow-auto pr-0">
        <ButtonGroup className="btn-block" vertical>
          <h3 className="text-dark ml-4 mt-2">Categorías</h3>
          <Button variant="light" className="btn-sm text-left">
          <img src={lacteosHuevos} alt="lacteosHuevos" width="40" height="40" className="mr-2"/>
          Lácteos y huevos
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={abarrotes} alt="abarrotes" width="40" height="40" className="mr-2"/>
          Abarrotes
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={panaderia} alt="panaderia" width="40" height="40" className="mr-2"/>
          Panadería y Arepas
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={cafe} alt="cafe" width="40" height="40" className="mr-2"/>
          Café, Chocolate y Té
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={galletas} alt="galletas" width="40" height="40" className="mr-2"/>
          Galletas y Antojos
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={carneYPollo} alt="carneyPollo" width="40" height="40" className="mr-2"/>
          Pollo, Carne y Pescado
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={carnesFrías} alt="carnesFrias" width="40" height="40" className="mr-2"/>
          Carnes frías y Embutidos
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={frutasVerduras} alt="frutasyVerduras" width="40" height="40" className="mr-2"/>
          Frutas y Verduras
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={licores} alt="licores" width="40" height="40" className="mr-2"/>
          Licores
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={bebidas} alt="bebidas" width="40" height="40" className="mr-2"/>
          Bebidas
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={mascotas} alt="mascotas"width="40" height="40" className="mr-2"/>
          Mascotas
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={aseoHogar} alt="aseoHogar" width="40" height="40" className="mr-2"/>
          Aseo del hogar
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={cuidadoRopa} alt="cuidadoRopa" width="40" height="40" className="mr-2"/>
          Cuidado de la Ropa
          </Button>
          <Button variant="light" className="btn-sm text-left">
          <img src={aseoPersonal} alt="aseoPersonal" width="40" height="40" className="mr-2"/>
          Cuidado personal
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default SideMenu;
