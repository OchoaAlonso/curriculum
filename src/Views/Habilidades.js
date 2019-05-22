import React,{Component} from 'react';

class Habilidades extends Component {
    render(){
        return(
  <div>
            <div align="center"> <h1>Habilidades</h1></div>
            <ul class="list-unstyled">
            <li class="media">
             <img src={require('../ing/man.jpg')} class="mr-3" alt="..."/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">Mantenimiento de Software</h5>
                <h5></h5><h6>Mantenimiento de equipos de computo</h6>
               
                
           </div>
          </div>
        </li>
     <li class="media my-4">
     <img src={require('../ing/ins.jpg')} class="mr-3" alt="..."/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">Instalacion</h5>
                <h5></h5><h6>Instalacionde paqueterias, sistemas operativos y disvessos programas.</h6>
                
               
                
           </div>
          </div>
      </li>
      <li class="media my-4">
     <img src={require('../ing/aud.jpg')} class="mr-3" alt="..."/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">Auditoria</h5>
                <h5></h5><h6>Auditoria de redes y de CCTV</h6>
                
           </div>
          </div>
      </li>
      <li class="media my-4">
     <img src={require('../ing/cctv.jpg')} class="mr-3" alt="..."  width="200px" height="150px"/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">Instalacion</h5>
                <h5></h5><h6>Instalaciuon de CCTV, Alarmas GSM, Cercos electicos, etc</h6>
                
           </div>
          </div>
      </li>
    <li class="media">
    
      
   </li>
   </ul>
 </div>
      );
}
}

export default Habilidades;