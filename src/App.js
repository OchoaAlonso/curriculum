import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import DatosGenerales from './Views/DatosGenerales';
import DatosEscolares from './Views/DatosEscolares';
import Experiencia from './Views/Experiencia';
import Reconocimientos from './Views/Reconocimientos';
import Premios from './Views/Premios';
import Habilidades from './Views/Habilidades';
import Principal from './Views/Principal';
import Formulario from './Views/Formulario';
import { 
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';



function App() {
  return (

    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Principal}/>
          <Route path="/datosgenerales" component={DatosGenerales}/>
          <Route path="/datosescolares" component={DatosEscolares}/>
          <Route path="/experiencia" component={Experiencia}/>
          <Route path="/reconocimientos" component={Reconocimientos}/>
          <Route path="/premios" component={Premios}/>
          <Route path="/habilidades" component={Habilidades}/>
          <Route path="/formulario" component={Formulario}/>
        </Switch>
        <Footer/>
    </Router>
  
  );
}

export default App;
