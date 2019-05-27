import React,{Component} from 'react';

class Principal extends Component {
    render(){
        return(
          <div>
            <div align="center"> <h1>Curriculum</h1></div>
<div className="card-group">
<div className="card">
<div alignName="center">
<img src={require('../ing/Beto1.jpg')} className="" alt="Muchacho Guah6o"
               width="300px" height="150px"/>
  <div className="card-body">
    <h5 className="card-title">Roberto Ochoa Alonso</h5>
    <p>Ingeniero en Tecnologias de la Informacion y comunicacion</p>
    
    </div>
  </div>
</div>

  </div>
</div>

      );
}
}

export default Principal;