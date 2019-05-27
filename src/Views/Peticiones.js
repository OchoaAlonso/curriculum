import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GET_DATA_ACTION} from '../Redux/actions/NoteActions';

class Peticiones extends Component {

    componentDidMount(){
        this.props.getDatos();
    }

    getData = () =>{
        this.props.getDatos();
        console.log(this.props.stateDatos);
    }
    renderNames = () => {
        return this.props.stateDatos.map((item,index) => {
            return(<h1 key={index}>{item.email}</h1>);
        });
    } 

        
    
    render(){

        return(

            <div className="fixed-bottom">
                {this.renderNames()}
                <button onClick={this.getData.bind(this)}>getData</button>
            </div>
        );
    }
}
    const mapStateToProps = ({stateDatos}) => {
        return {
            stateDatos: stateDatos
        };
    }
    const mapDispatchToProps = (dispatch) =>{
        return{
            getDatos: () => dispatch(GET_DATA_ACTION())
        };
    };
    const ConnectPeticiones = connect(mapStateToProps, mapDispatchToProps)(Peticiones);


export default ConnectPeticiones;