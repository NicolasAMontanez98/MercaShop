import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import abarrotes from "./../assets/categories/abarrotes.png";
import aseoHogar from "./../assets/categories/aseo hogar.png";
import aseoPersonal from "./../assets/categories/aseo personal.png";
import bebidas from "./../assets/categories/bebidas.png";
import cafe from "./../assets/categories/café.png";
import carneYPollo from "./../assets/categories/carne y pollo.png";
import carnesFrías from "./../assets/categories/carnes frías y embutidos.png";
import cuidadoRopa from "./../assets/categories/cuidado de la ropa.png";
import frutasVerduras from "./../assets/categories/frutas y verduras.png";
import galletas from "./../assets/categories/galletas.png";
import lacteosHuevos from "./../assets/categories/lacteos y huevos.png";
import licores from "./../assets/categories/licores.png";
import mascotas from "./../assets/categories/mascotas.png";
import panaderia from "./../assets/categories/panadería.png";

class SideMenu extends React.Component {
  render() {
    return (
      <div className="vh-100 overflow-auto">
        <ButtonGroup className="btn-block" vertical>
          <h3 className="text-dark ml-4 mt-2">Categorías</h3>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={lacteosHuevos}
              width="40"
              height="40"
              className="mr-2"
              alt="Lacteos y Huevos"
            />
            Lácteos y huevos
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={abarrotes}
              width="40"
              height="40"
              className="mr-2"
              alt="Abarrotes"
            />
            Abarrotes
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={panaderia}
              width="40"
              height="40"
              className="mr-2"
              alt="Panadería y Arepas"
            />
            Panadería y Arepas
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={cafe}
              width="40"
              height="40"
              className="mr-2"
              alt="Café, Chocolate y Té"
            />
            Café, Chocolate y Té
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={galletas}
              width="40"
              height="40"
              className="mr-2"
              alt="Galletas y Antojos"
            />
            Galletas y Antojos
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={carneYPollo}
              width="40"
              height="40"
              className="mr-2"
              alt="Pollo, Carne y Pescado"
            />
            Pollo, Carne y Pescado
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={carnesFrías}
              width="40"
              height="40"
              className="mr-2"
              alt="Carnes frías y Embutidos"
            />
            Carnes frías y Embutidos
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={frutasVerduras}
              width="40"
              height="40"
              className="mr-2"
              alt="Frutas y Verduras"
            />
            Frutas y Verduras
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={licores}
              width="40"
              height="40"
              className="mr-2"
              alt="Licores"
            />
            Licores
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={bebidas}
              width="40"
              height="40"
              className="mr-2"
              alt="Bebidas"
            />
            Bebidas
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={mascotas}
              width="40"
              height="40"
              className="mr-2"
              alt="Mascotas"
            />
            Mascotas
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={aseoHogar}
              width="40"
              height="40"
              className="mr-2"
              alt="Aseo del hogar"
            />
            Aseo del hogar
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={cuidadoRopa}
              width="40"
              height="40"
              className="mr-2"
              alt="Cuidado de la Ropa"
            />
            Cuidado de la Ropa
          </Button>
          <Button variant="white" className="btn-sm text-left">
            <img
              src={aseoPersonal}
              width="40"
              height="40"
              className="mr-2"
              alt="Cuidado Personal"
            />
            Cuidado personal
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default SideMenu;
