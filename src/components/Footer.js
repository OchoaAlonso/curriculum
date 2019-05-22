import React,{Component} from 'react';

class Footer extends Component {
    render(){
        return(
        <footer>    
         <div className="card text-center">
           <div className="card-header">
               Featured
         </div>
             <div className="card-body">
             <h5 className="card-title">Special title treatment</h5>
             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="https://web.whatsapp.com/" className="btn btn-primary">Watsapp</a>
    <a href="https://www.facebook.com/" className="btn btn-primary">Facebook</a></div>
  <div className="card-footer text-muted">
    R8-A
  </div>
</div>
</footer>
        );
}
}

export default Footer;