import React,{Component} from 'react';

class Premios extends Component {
    render(){
        return(
  <div>
            <div align="center"> <h1>Premios</h1></div>
            <ul class="list-unstyled">
            <li class="media">
             <img src={require('../ing/halo.jpeg')} class="mr-3" alt="..."/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">Torneo de Halo</h5>
                <h5></h5><h6>Primer lugar en torneo de HALO, como parte de la semana de las TI</h6>
                <p>Fecha: <h6>Agosto-2015</h6></p>
                <p><h6></h6></p>
                <p><h6></h6></p>
                
           </div>
          </div>
        </li>
     <li class="media my-4">
     <img src={require('../ing/pet.jpg')} class="mr-3" alt="..."  width="500px" height="400px"/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">PetFood</h5>
                <h5></h5><h6>Segundo lugar en prollectos inivadores, con un dispensador de alimentos para mascptas.</h6>
                <p><h6>Julio-2018</h6></p>
                <p><h6></h6></p>
                
           </div>
          </div>
      </li>
      <li class="media my-4">
     <img src={require('../ing/XP.png')} class="mr-3" alt="..."  width="500px" height="400px"/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">Por que Estudiar</h5>
                <h5></h5><h6>Primer lugar precentacion del tema por que seguir estudiasndo</h6>
                <p><h6>Junio-2016</h6></p>
                <p><h6></h6></p>
                
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

export default Premios;