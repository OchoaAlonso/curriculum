import React,{Component} from 'react';

class Generales extends Component {
    render(){
        return(
        <div className="card mb-3" style={{ width: '540h6x;'}}>
            <div className="row no-gutters">
  <div className="col-md-4">
     <img src={require('../ing/Beto1.jpg')} classNameName="" alt="Muchacho Guah6o"
      width="400px" height="400px"/>
  </div>
  <div className="col-md-8">
    <div className="card-body">
    <h1>Datos Generales</h1> 
      <h6 className="card-title">Nombre completo: Roberto Ochoa Alonso</h6>
      <h6 className="card-title">Fecha de nacimiento: 07 junio 1997</h6>
      <h6 className="card-title">Edad: 21</h6>
      <h6 className="card-title">Sexo: Masculino</h6>
      <h6 className="card-title">Estado Civil: Soltero</h6>
      <h6 className="card-title">Profesion: Ingeniero en Tecnologias de la Informacion y Cominicasion</h6>
      <h6 className="card-title">Telefono: 7713571492</h6>
      <h6 className="card-title">Coreo electronico: rchoaalonso@gmail.com</h6>
      <h6 className="card-title">Direccion: Villas de Hidalgo, h6achuca de Soto, Hidalgo, Mexico</h6>
    </div>
  </div>
</div>
</div>

      );
}
}

export default Generales;