import React,{Component} from 'react';

class Escolares extends Component {
    render(){
        return(
          <div>
            <div align="center"> <h1>Datos escolares</h1></div>
              <div className="card-group">
                <div className="card">
                  <div align="center">
                    <img src={require('../ing/secundaria.jpg')} className="" alt="Muchacho Guah6o" width="300px" height="150px"/>
                    <div className="card-body">
                      <h5 className="card-title">Escuela Telesecundaria 181</h5>
                      <p>tipo: <h6>Tipo</h6></p>
                      <p>Periodo: <h6>2009-2012</h6></p>
                      <p>Promedio: <h6>8.7</h6></p>
                      <p>Ubicación: <h6>Culhuacan, Xochicoatlan, Hidalgo, C.P. 43250, Zacualtipán de Ángeles, Hidalgo</h6></p>
                      <a href="/" className="btn btn-success" >Culhuacan</a>
                      <p className="card-text"><small className="text-muted"> </small></p>
                    </div>
                  </div>
                </div>
                <div className="card">
                <div align="center">
                <img src={require('../ing/cobaeh.jpg')} classNameNameName="" alt="Muchacho Guah6o"
               width="300px" height="150px"/>
  <div className="card-body">
    <h5 className="card-title">Colegio de Bachilleres del Estado de Hidalgo<br/></h5>
    <br/>
    <p>Orientación: <h6>Capacitación para el trabajo en Informatica</h6></p>
    <p>Periodo: <h6>2012-2015</h6></p>
    <p>Promedio: <h6>8.3</h6></p>
    <p>Ubicación: <h6>Paso del estudiante, Colonia Michatla, Xochicoatlan, Hidalgo, Mexico. CP: 43250</h6></p>
    <a href="https://www.facebook.com/xochicoatlan.cemsad" className="btn btn-success" >COBAEH</a>
    <p className="card-text"><small className="text-muted">Un espacio para tranformar tu mundo.</small></p>
    </div>
  </div>
</div>
<div className="card">
<div align="center">
<img src={require('../ing/somos.jpg')} className="" alt="Muchacho Guah6o"
               width="300px" height="150px"/>
  <div className="card-body">
    <h5 className="card-title">Universidad Tecnologica de la Sierra Hidalguense</h5>
    <p>Carrera: <h6>Ingenieria en Tecnologias de la Información y Comunicasión</h6></p>
    <p>Periodo: <h6>2015-2019</h6></p>
    <p>Promedio: <h6>8.7</h6></p>
    <p>Ubicación: <h6>Carretera México-Tampico, Km. 100,
Tramo Pachuca-Huejutla, C.P. 43200, 
Zacualtipán de Ángeles, Hidalgo</h6></p>
    <a href="http://www.utsh.edu.mx/php/inicio.php" className="btn btn-success" >UTSH</a>
    <p className="card-text"><small className="text-muted">Atrevete a ser diferente</small></p>
    </div>
  </div>
</div>
</div>
</div>
      );
}
}

export default Escolares;