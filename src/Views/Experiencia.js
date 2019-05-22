import React,{Component} from 'react';

class Experiencia extends Component {
    render(){
        return(
  <div>
            <div align="center"> <h1>Experiencia laboral</h1></div>
            <ul class="list-unstyled">
            <li class="media">
             <img src={require('../ing/irc.jpg')} class="mr-3" alt="..."/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">IRC Telecomunicasiones</h5>
                <h5>Tipo:</h5><h6>Instaladora</h6>
                <p>Periodo: <h6>Mayo-Agosto-2017</h6></p>
                <p><h6></h6></p>
                <p>Ubicación: <h6>Pachuca & Canadá, Geovillas, 42083 Pachuca de Soto, Hgo.</h6></p>
                <a href="/" class="btn btn-success" >Culhuacan</a>
                <p class="card-text"><small class="text-muted"> </small></p>
           </div>
          </div>
        </li>
     <li class="media my-4">
     <img src={require('../ing/seg.jpg')} class="mr-3" alt="..."  width="300px" height="200px"/>
              <div align="center">
               <div class="card-body">
                <h5 class="card-title">SEG Matriz Pachuc</h5>
                <h5>Tipo:</h5><h6>Instaladora</h6>
                <p>Periodo: <h6>Mayo-Agosto-2017</h6></p>
                <p><h6></h6></p>
                <p>Ubicación: <h6>Pachuca & Canadá, Geovillas, 42083 Pachuca de Soto, Hgo.</h6></p>
                <a href="http://www.segmexico.com.mx/" class="btn btn-success" >  SEG  </a>
                <p class="card-text"><small class="text-muted"> </small></p>
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

export default Experiencia;