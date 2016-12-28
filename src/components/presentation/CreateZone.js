import React, { Component } from 'react';
import Zone from './Zone';
import Api from '../../utils/ApiManager';

class CreateZone extends Component {
    constructor(){
        super()
            this.state = {
                zone:{
				    name:'',
				    zipCodes:''
			    }
        };
    }
    
    updateZone(event){

        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;

        this.setState({
            comment: updatedZone
        });
    }
    

    submitZone(event){
        console.log("Submitting zone (CreateZone): " + JSON.stringify(this.state.zone));
        // call the function from the container (not here as this is presentation layer)
        this.props.onCreate(this.state.zone);
    }
    
    render(){	
        return (
			<div>
             Add a Zone:<br/>
                    <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"/>
                    <br/>
                    <input id="zip" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"/>
                    <br/>
                    
                    <br/>
                    <button onClick={this.submitZone.bind(this)} className="btn btn-info" >Add Zone</button>
            </div>
	    )
    }
    
}

export default CreateZone;