import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(

          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="nav-link">Curriculum</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className=
                "navbar-nav">
                  <li className="nav-item active">
                    <Link to="/datosgenerales" className="nav-link">Datos generales</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/datosescolares" className="nav-link">Datos escolares</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/experiencia" className="nav-link">Experiencia</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/reconocimientos" className="nav-link">Reconocimientos</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/premios" className="nav-link">Premios</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/habilidades" className="nav-link">Habilidades</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/habilidades" className="nav-link">Formulario</Link>
                  </li>
                </ul>
              </div>
            </nav>
         </header>  );
        
    }
}

export default Navbar;