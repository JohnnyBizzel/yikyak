import React, { Component } from 'react';
import Zone from './Zone';
import Api from '../../utils/ApiManager';

class CreateZone extends Component {
    constructor(){
        super()
            this.state = {
                zone:{
				    name:'',
				    zipCodes:'',
				    latitude:0,
				    longditude:0,
				    country:''
			    }
        };
    }
    
    updateZone(event){

        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;
       
	
        this.setState({
            zone: updatedZone
        });
    }
    

    submitZone(event){
        console.log("Submitting zone (CreateZone): " + JSON.stringify(this.state.zone));
        // call the function from the container (not here as this is presentation layer)
        let newZone = Object.assign({}, this.state.zone);
        
       
         // set ZipCodes to be an array - break up the string
		if(newZone.zipCodes.indexOf(',') > -1) {
			newZone['zipCodes'] = newZone.zipCodes.split(',');
		} else {
			newZone['zipCodes'] = newZone.zipCodes;
		}

        this.props.onCreate(newZone);
    }
    
    render(){	
        return (
			<div>
             Add a Zone:<br/>
                    <input id="name" onChange={this.updateZone.bind(this)} 
                        className="form-control" type="text" placeholder="Name"/>
                    <br/>
                    <input id="zipCodes" onChange={this.updateZone.bind(this)} 
                        className="form-control" type="text" placeholder="Zip Code(s)"/>
                    <br/>
                    <input id="latitude" onChange={this.updateZone.bind(this)} 
                        className="form-control" type="text" placeholder="Latitude" />
                    <br/>
                    <input id="longditude" onChange={this.updateZone.bind(this)} 
                        className="form-control" type="text"  placeholder="Longditude" />
                    <br/>
                    <input id="country" onChange={this.updateZone.bind(this)} 
                        className="form-control" type="text"  placeholder="Country code" />
                    <br/>
                    <br/>
                    <button onClick={this.submitZone.bind(this)} className="btn btn-info" >Add Zone</button>
            </div>
	    )
    }
    
}

export default CreateZone;